import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SaturnThreeJS: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const saturnGroupRef = useRef<THREE.Group>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(8, 3, 12);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Saturn group
    const saturnGroup = new THREE.Group();
    saturnGroupRef.current = saturnGroup;
    scene.add(saturnGroup);

    // Saturn planet
    const planetGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const planetMaterial = new THREE.MeshBasicMaterial({
      color: 0xfaf5e6,
      transparent: true,
      opacity: 0.08
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    saturnGroup.add(planet);

    // Create ring function
    const createRing = (innerRadius: number, outerRadius: number, opacity: number) => {
      const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: opacity,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = Math.PI / 8; // Slight tilt
      return ring;
    };

    // Saturn rings with varying opacity
    const ring1 = createRing(1.8, 2.0, 0.04);
    const ring2 = createRing(2.1, 2.4, 0.03);
    const ring3 = createRing(2.5, 2.9, 0.02);
    const ring4 = createRing(3.0, 3.5, 0.015);

    saturnGroup.add(ring1, ring2, ring3, ring4);

    // Position Saturn
    saturnGroup.position.set(0, 0, 0);

    // Very subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      if (saturnGroupRef.current) {
        // Very slow rotation
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

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default SaturnThreeJS;