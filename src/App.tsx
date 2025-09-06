import StarField from "./components/StarField";
import SaturnThreeJS from "./components/SaturnThreeJS";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            {/* Subtle star field background */}
            <StarField />

            {/* Three.js Saturn animation */}
            <SaturnThreeJS />

            {/* Main content */}
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    {/* <Skills /> */}
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
