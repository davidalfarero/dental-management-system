import { Hospital, User, Users } from "lucide-react";
import aboutDentistJohn from '../assets/aboutImages/image-dentist-john.png';
import aboutDentistJane from '../assets/aboutImages/image-dentist-jane.png';
import aboutOffice from '../assets/aboutImages/image-facility.jpg';
import aboutStaff from '../assets/aboutImages/image-staff.jpg';

export const aboutInfo = [
  {
    id: "dentist",
    mainTitle: "Our Dentists",
    icon: User,
    subTitle: "Meet our professional dental team",
    dentists: [
      {
        name: "Dr. John Doe",
        title: "Head Dentist",
        description: `A dedicated and compassionate dental professional with over a decade of experience in creating healthier, more confident smiles. A graduate of Ateneo De Manila University, Dr. Doe has built a reputation for combining advanced techniques with a gentle, patient-first approach.\n\n
        Whether it's routine cleanings, cosmetic enhancements, or restorative procedures, he takes the time to ensure every patient feels comfortable, informed, and cared for. Beyond the clinic, Dr. Doe is committed to ongoing education, staying updated on the latest advancements in dental care to provide top-tier treatment.`,
        image: aboutDentistJohn
      },
      {
        name: "Dr. Jane Smith",
        title: "Pediatric Dentist",
        description: `Specializing in children's dental care, Dr. Jane Smith brings warmth, patience, and a playful touch to every appointment. Her goal is to make each child feel at ease while building lifelong habits for healthy smiles. With a gentle approach and a big heart, she turns dental visits into positive experiences.

        Dr. Jane holds advanced training in pediatric dentistry and stays updated on the latest kid-friendly techniques. Whether it's a routine checkup or a first-time visit, parents trust her to provide expert care in a welcoming, supportive environment.`,
        image: aboutDentistJane
      }
    ]
  },

  {
    id: "staff",
    mainTitle: "Our Staff",
    icon: Users,
    subTitle: "Friendly faces at our clinic",
    title: "Professional and Friendly Staff",
    description: `At the heart of our clinic is a dedicated team of dental professionals and support staff who share one mission — to provide exceptional care with compassion and precision. From the moment you walk through our doors, you're greeted with friendly faces and a commitment to your comfort and well-being.

    Each member of our staff plays a vital role in creating a smooth, welcoming experience for patients of all ages. From the front desk to the dental chair, we take pride not only in our expertise, but in the relationships we build with the families we serve.`,
    image: aboutStaff
  },

  {
    id: "clinic",
    mainTitle: "Our Clinic",
    icon: Hospital,
    subTitle: "A look inside our facility",
    title: "Your Trusted Neighborhood Dental Clinic",
    description: `Our dental clinic was founded on a simple belief — that everyone deserves access to compassionate, high-quality dental care close to home. What began as a small practice with a big heart has grown into a trusted part of the community, where patients of all ages feel welcomed and cared for.

    With a commitment to modern techniques and genuine connection, we’ve built a space that’s warm, professional, and focused on your long-term oral health. From routine checkups to advanced procedures, we’re proud to be your neighborhood dental home.`,
    image: aboutOffice
  }
];
