import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div data-theme='light'>
      <Navbar />
      <HomeSection />
      <AboutSection />
    </div>
  );
};
export default App;