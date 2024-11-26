import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/*       <section className="z-0 min-h-screen bg-blue-500" /> */}
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
