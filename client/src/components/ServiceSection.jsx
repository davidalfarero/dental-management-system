import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { Button, SectionTitle } from "../styles/UI";

const ServicesSection = () => {
  return (
    <section className="max-w-5xl mx-auto pt-15 md:pt-20">
      <p className="text-sm text-primary text-center font-semibold mb-5">Our Services</p>

      <SectionTitle
        title={
          <>
            Comprehensive Dental <span className="text-primary font-black">Care</span>
          </>
        }
        subtitle='From routine cleanings to advanced treatments, explore our full range of services tailored to keep your smile healthy, bright, and confident.'
      />

      <div className="grid md:grid-cols-3 gap-4 mb-5 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`max-w-[450px] rounded-2xl bg-base-300 overflow-hidden px-2 pt-2 pb-4 space-y-2 place-self-center
              ${index >= 3 ? 'hidden md:block' : ''}
              `}
          >
            <div className="max-h-[150px] rounded-2xl overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>

            <div className="h-[2px] bg-base-content/20 my-4"></div>

            <h1 className="font-semibold text-lg text-base-content">{service.title}</h1>
            <p className="text-base-content/60 text-xs">{service.description}</p>
          </div>
        ))}
      </div>

      {/* todo: create page for complete lists of services */}
      <Button
        className="w-fit mx-auto mb-5 flex items-center gap-2"
        aria-label="View All Dental Services"
        href='/services'
      >
        View All Dental Services
        <div className="rounded-full bg-neutral-100 p-1 text-primary">
          <ArrowRight size={20} />
        </div>
      </Button>

    </section>
  );
};
export default ServicesSection;