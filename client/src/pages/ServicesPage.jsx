import ServicesSection from '../components/ServiceSection';

import { SectionTitle } from "../styles/UI";

const ServicesPage = () => {
  return (
    <div className="max-w-5xl mx-auto pt-15 md:pt-20 pb-10">
      <SectionTitle
        title={
          <>
            Explore Our <span className="text-primary font-black">Services</span>
          </>
        }
        subtitle='From personalized consultations to comprehensive care, discover how we’re here to support your needs every step of the way.'
      />

      <ServicesSection />
    </div>
  );
};
export default ServicesPage;