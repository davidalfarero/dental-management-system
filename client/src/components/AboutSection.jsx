import { useState } from 'react';
import { ArrowRight, HeartPulse, Hospital, IdCardLanyard } from "lucide-react";
import { Button, SectionTitle } from '../styles/UI';

export const details = [
  {
    title: "Experienced Team",
    content: "Our dentists and staff are highly skilled with years of experience in delivering exceptional dental care. You’re in good hands from the moment you walk in.",
    image: "/about-image(1).jpg",
    icon: <IdCardLanyard className="w-5 h-5 text-primary" />
  },
  {
    title: "Patient-First Approach",
    content: "We prioritize your comfort, care, and confidence. Every treatment plan is tailored to your needs — with clear communication and a gentle touch.",
    image: "/about-image(2).jpg",
    icon: <HeartPulse className="w-5 h-5 text-primary" />
  },
  {
    title: "Modern, Clean Facility",
    content: "Our clinic is equipped with the latest dental technology in a spotless, relaxing environment — designed to make your visit smooth and stress-free.",
    image: "/about-image(3).jpg",
    icon: <Hospital className="w-5 h-5 text-primary" />
  }
];

const AboutSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedAbout = details[selectedIndex];

  return (
    <section className="max-w-5xl mx-auto pt-15 md:pt-20">
      <p className="text-sm text-primary text-center font-semibold mb-5">Why Choose Us?</p>

      <SectionTitle
        title={
          <>
            Your <span className="text-primary font-black">Smile</span>, Our <span className="text-primary font-black">Mission</span>
          </>
        }
        subtitle='Discover what makes our clinic the trusted choice for brighter, healthier smiles.'
      />


      <div className="grid md:grid-cols-2 gap-6 p-4 items-center mb-5">

        <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
          {details.map((detail, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-2 md:px-6 md:py-4 rounded-2xl md:rounded-full cursor-pointer transition 
                flex flex-col md:flex-row items-center gap-2
              ${index === selectedIndex ? 'bg-primary/10' : 'border border-base-300'}
            `}
            >
              <div
                className='size-10 md:w-20 md:h-10 rounded-full flex items-center justify-center
                transition duration-300 border border-primary'
              >
                {detail.icon}
              </div>

              <div>
                <h3 className="text-xs md:text-md text-center font-semibold text-primary">{detail.title}</h3>
                <p className="hidden md:block text-xs text-base-content/70">{detail.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-full">
          <img
            src={selectedAbout.image}
            alt={selectedAbout.title}
            className="rounded-xl shadow-md w-full h-auto object-cover max-h-[400px] mx-auto"
          />
        </div>
      </div>

      <Button
        className="w-fit mx-auto mb-5 flex items-center gap-2"
        aria-label="Learn More"
        href='/about'
      >
        Learn More About Us
        <div className="rounded-full bg-neutral-100 p-1 text-primary">
          <ArrowRight size={20} />
        </div>
      </Button>

    </section >
  );
};
export default AboutSection;