import { useState } from 'react';
import { HeartPulse, Hospital, IdCardLanyard } from "lucide-react";

const aboutInfo = [
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
  const selectedAbout = aboutInfo[selectedIndex];

  return (
    <div id="about" className="max-w-5xl mx-auto mt-15 md:mt-20">
      <p className="text-sm text-primary text-center font-semibold mb-5">Why Choose Us?</p>
      <h1 className="text-5xl mb-5">Your Smile, Our Mission</h1>
      <h2 className="max-w-md text-xl text-base-content/60">
        Discover what makes our clinic the trusted choice for brighter, healthier smiles.
      </h2>

      <div className="grid grid-cols-2 gap-6 p-6 items-center">

        <div className="space-y-4">
          {aboutInfo.map((about, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`px-6 py-4 rounded-full cursor-pointer transition 
                flex items-center gap-2
              ${index === selectedIndex ? 'bg-primary/10' : 'border border-base-300'}
            `}
            >
              <div
                className='w-20 h-10 rounded-full flex items-center justify-center
                transition duration-300 border border-primary'
              >
                {about.icon}
              </div>

              <div>
                <h3 className="text-md font-semibold text-primary">{about.title}</h3>
                <p className="text-xs text-base-content/70">{about.content}</p>
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

    </div >
  );
};
export default AboutSection;