import Footer from "./components/Footer/Footer";
import HeroSection from "./pages/Home/sections/Hero/Hero";
import AboutSection from "./pages/Home/sections/About/About";
import ProjectsSection from "./pages/Home/sections/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default App;
