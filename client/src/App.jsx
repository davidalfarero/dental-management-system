import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {

  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};
export default App;