import { aboutInfo } from "../data/aboutInfo";
import { SectionTitle } from "../styles/UI";
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(aboutInfo[0].id);
  const selectedAbout = aboutInfo.find((about) => about.id === selectedIndex);

  return (
    <div className="max-w-5xl mx-auto pt-15 md:pt-20 pb-10">
      <SectionTitle
        title={
          <>
            Caring for <span className="text-primary font-black">Smiles</span>, One <span className="text-primary font-black">Patient</span> at a Time
          </>
        }
        subtitle='Our dental clinic is built on trust, compassion, and personalized care. Delivering expert treatment with a gentle touch for every smile we serve.'
      />

      <div className="grid md:grid-cols-3 gap-4 mb-5 px-4 md:px-0">
        {aboutInfo.map((about) => {
          const Icon = about.icon;

          return (
            <div
              key={about.id}
              className={`rounded-xl shadow-md p-4 cursor-pointer
              flex items-center gap-2 
              ${about.id === selectedIndex ? 'bg-primary/20' : 'bg-base-200'}
              `}
              onClick={() => setSelectedIndex(about.id)}
            >

              <div className={`rounded-full flex items-center justify-center
                transition duration-300 size-10 text-primary
                ${about.id === selectedIndex ? 'bg-neutral-100' : 'bg-primary/20'}
                `}
              >
                <Icon />
              </div>

              <div>
                <h3 className="font-bold text-primary text-lg">{about.mainTitle}</h3>
                <p className="text-sm text-base-content/70">{about.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedAbout?.id === "dentist" ? (
        <div className="space-y-6 px-4 md:px-0">
          {selectedAbout.dentists.map((dentist, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`grid gap-4 items-center
                  ${isReversed ? 'md:grid-cols-[25%_75%]' : 'md:grid-cols-[75%_25%]'}
                  `}
              >
                <div className={`order-1 ${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="text-xl font-bold">{dentist.name}</h3>
                  <p className="text-sm text-base-content/80 font-semibold">{dentist.title}</p>
                  {dentist.description.split('\n\n').map((para, i) => (
                    <p key={i} className="mt-2 text-base-content/70 text-sm">{para}</p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`order-2 ${isReversed ? "md:order-1" : "md:order-2"} w-full h-80 rounded-2xl overflow-hidden`}
                >
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4 items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full h-80 rounded-2xl overflow-hidden"
          >

            <img
              src={selectedAbout.image}
              alt={selectedAbout.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold">{selectedAbout.title}</h3>
            {selectedAbout.description.split('\n\n').map((para, i) => (
              <p key={i} className="mt-2 text-base-content/70 text-sm">{para}</p>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
export default AboutPage;