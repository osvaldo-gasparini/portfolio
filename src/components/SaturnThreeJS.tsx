import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SaturnThreeJS: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene>();
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const saturnGroupRef = useRef<THREE.Group>();
    const animationRef = useRef<number>();
    const cameraRef = useRef<THREE.PerspectiveCamera>();
    const starsRef = useRef<THREE.Points>();

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        camera.position.set(8, 3, 12);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        rendererRef.current = renderer;
        mountRef.current.appendChild(renderer.domElement);

        // Create star field for warp effect
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1200;
        const positions = new Float32Array(starCount * 3);
        const velocities = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 300;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
            velocities[i] = Math.random() * 1.5 + 0.5;
        }

        starGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        starGeometry.setAttribute(
            "velocity",
            new THREE.BufferAttribute(velocities, 1)
        );

        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.6,
            transparent: true,
            opacity: 0.25,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        starsRef.current = stars;
        scene.add(stars);

        // Saturn group
        const saturnGroup = new THREE.Group();
        saturnGroupRef.current = saturnGroup;
        scene.add(saturnGroup);

        // Saturn planet - starts invisible and tiny
        const planetGeometry = new THREE.SphereGeometry(2.5, 64, 64);
        const planetMaterial = new THREE.MeshBasicMaterial({
            color: 0xfaf5e6,
            transparent: true,
            opacity: 0,
        });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        saturnGroup.add(planet);

        // Create ring function
        const createRing = (innerRadius: number, outerRadius: number) => {
            const ringGeometry = new THREE.RingGeometry(
                innerRadius,
                outerRadius,
                128
            );
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            ring.rotation.z = Math.PI / 8;
            return ring;
        };

        // Saturn rings - start invisible
        const ring1 = createRing(3.2, 3.6);
        const ring2 = createRing(3.8, 4.4);
        const ring3 = createRing(4.6, 5.2);
        const ring4 = createRing(5.4, 6.2);

        saturnGroup.add(ring1, ring2, ring3, ring4);

        // Start Saturn very small and invisible
        saturnGroup.scale.set(0.01, 0.01, 0.01);
        saturnGroup.position.set(0, 0, 0);

        // Subtle ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        // Animation variables
        const startTime = Date.now();
        const warpPhase1 = 1500; // First 1.5s: slow start
        const warpPhase2 = 3500; // Next 2s: fast warp
        const fadePhase = 4500; // 4.5s: stars start fading
        const saturnPhase = 6000; // Last 1.5s: Saturn grows

        // Animation loop
        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;

            // Star movement with progressive speed
            const positions = stars.geometry.attributes.position
                .array as Float32Array;
            const velocities = stars.geometry.attributes.velocity
                .array as Float32Array;

            let warpSpeed = 0;
            let starOpacity = 0.25;

            if (elapsed < warpPhase1) {
                // Phase 1: Slow start
                const phase1Progress = elapsed / warpPhase1;
                warpSpeed = phase1Progress * 0.5;
            } else if (elapsed < warpPhase2) {
                // Phase 2: Fast warp
                const phase2Progress =
                    (elapsed - warpPhase1) / (warpPhase2 - warpPhase1);
                warpSpeed = 0.5 + phase2Progress * 2.5; // Up to 3x speed
            } else if (elapsed < fadePhase) {
                // Phase 3: Maintain speed but start preparing for fade
                warpSpeed = 3;
            } else if (elapsed < saturnPhase) {
                // Phase 4: Gradual fade out and slow down
                const fadeProgress =
                    (elapsed - fadePhase) / (saturnPhase - fadePhase);
                warpSpeed = 3 * (1 - fadeProgress * 0.9); // Slow down gradually
                starOpacity = 0.25 * (1 - fadeProgress); // Fade out stars
            } else {
                // Animation complete
                warpSpeed = 0;
                starOpacity = 0;
                stars.visible = false;
            }

            // Update star material opacity
            stars.material.opacity = starOpacity;

            // Move stars
            for (let i = 0; i < starCount; i++) {
                positions[i * 3 + 2] += velocities[i] * warpSpeed;

                // Reset stars that have passed, but only if we're still in active phases
                if (positions[i * 3 + 2] > 150 && elapsed < fadePhase) {
                    positions[i * 3 + 2] = -150;
                    positions[i * 3] = (Math.random() - 0.5) * 300;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
                } else if (positions[i * 3 + 2] > 150 && elapsed >= fadePhase) {
                    // During fade phase, don't reset stars - let them disappear
                    positions[i * 3 + 2] = 200; // Move them far away
                }
            }

            stars.geometry.attributes.position.needsUpdate = true;

            // Saturn growth and fade in
            if (elapsed > fadePhase) {
                const saturnProgress = Math.min(
                    (elapsed - fadePhase) / (saturnPhase - fadePhase),
                    1
                );
                const easeProgress = 1 - Math.pow(1 - saturnProgress, 3); // Ease out cubic

                // Scale Saturn from tiny to normal size
                const scale = 0.01 + easeProgress * 0.99;
                saturnGroup.scale.set(scale, scale, scale);

                // Fade in Saturn
                const finalOpacity = easeProgress;
                planet.material.opacity = finalOpacity * 0.08;
                ring1.material.opacity = finalOpacity * 0.04;
                ring2.material.opacity = finalOpacity * 0.03;
                ring3.material.opacity = finalOpacity * 0.02;
                ring4.material.opacity = finalOpacity * 0.015;
            }

            // Gentle rotation after animation completes
            if (elapsed > saturnPhase && saturnGroupRef.current) {
                saturnGroupRef.current.rotation.y += 0.0008;
                saturnGroupRef.current.rotation.x += 0.0002;
            }

            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener("resize", handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} className="w-[100dvw] h-[100dvh] fixed inset-0 pointer-events-none z-0" />
    );
};

export default SaturnThreeJS;
