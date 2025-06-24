import { SectionTitle } from "../styles/UI";
import { motion } from 'framer-motion';

const AboutPage = () => {
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

      <div className="h-[2px] max-w-3xl mx-auto bg-base-content/20 mb-5"></div>

      <div className="grid md:grid-cols-[70%_30%] gap-4 bg-primary/10 rounded-xl p-4 mb-5">
        <div>
          <h2 className="text-3xl font-semibold mb-4">🧑‍⚕️ Dr. John Doe Head Dentist, Dental Clinic</h2>
          <p className="text-base-content/70">
            A dedicated and compassionate dental professional with over a decade of experience in creating healthier, more confident smiles. A graduate of [Your Dental School], Dr. Doe has built a reputation for combining advanced techniques with a gentle, patient-first approach. Whether it's routine cleanings, cosmetic enhancements, or restorative procedures, he takes the time to ensure every patient feels comfortable, informed, and cared for. <br /><br />
            Beyond the clinic, Dr. Doe is committed to ongoing education, staying updated on the latest advancements in dental care to provide top-tier treatment for every age and need. His warm demeanor and attention to detail have made him a trusted choice for families in the community, earning loyal patients who know their smiles are in expert hands.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-[400px] px-4"
        >
          <img
            src="/dentist-photo.png"
            alt="Dr. John Doe"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

      </div>

      <div className="h-[2px] max-w-3xl mx-auto bg-base-content/20 mb-5"></div>

      <div className="grid md:grid-cols-2 gap-4 bg-primary/10 rounded-xl p-4 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-[400px] px-4"
        >
          <img
            src="/dental-staff.jpg"
            alt="Dr. John Doe"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">👥 Professional and Friendly Staff</h2>
          <p className="text-base-content/70">
            At the heart of our clinic is a dedicated team of dental professionals and support staff who share one mission — to provide exceptional care with compassion and precision. From the warm welcome at the front desk to the skilled hands assisting each procedure, every member of our team plays a vital role in ensuring a smooth, comfortable experience for every patient. We take pride not just in our expertise, but in the trust we build with the families we serve.
          </p>
        </div>
      </div>

      <div className="h-[2px] max-w-3xl mx-auto bg-base-content/20 mb-5"></div>

      <div className="grid md:grid-cols-[40%_60%] gap-4 bg-primary/10 rounded-xl p-4 overflow-hidden">
        <div className="px-4">
          <h2 className="text-3xl font-semibold mb-4">🏥 Your Trusted Neighborhood Dental Clinic</h2>
          <p className="text-base-content/70 text-justify">
            Our dental clinic was founded on a simple belief — that everyone deserves access to compassionate, high-quality dental care close to home. What began as a small practice with a big heart has grown into a trusted part of the community, where patients of all ages feel welcomed and cared for. With a commitment to modern techniques and genuine connection, we continue to build lasting smiles and relationships, one appointment at a time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-[300px] px-4"
        >
          <img
            src="/dental-office.jpg"
            alt="Dr. John Doe"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default AboutPage;