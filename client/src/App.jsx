import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import LocationSection from "./components/LocationSection";
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
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
export default App;