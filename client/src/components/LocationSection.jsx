import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="max-w-5xl mx-auto pt:15 md:pt-20">
      <h2 className="text-xl font-bold mb-4">Where you'll be</h2>

      <div className="w-full h-[200px] md:h-[400px] rounded-xl overflow-hidden mb-6 px-4 md:px-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123851.92192405947!2d121.2525901122113!3d14.055163931989936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5c96860a894b%3A0xfa9e0f05004f4aca!2sSan%20Pablo%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1750605411047!5m2!1sen!2sph"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          className="rounded-xl"
          loading="lazy"
          allowFullScreen
          title="Map location"
        />
      </div>

      <div className="max-w-md space-y-2 mb-4 px-4 md:px-0">
        <div className="flex gap-2 items-center">
          <MapPin className="size-5 text-primary" />
          <h3 className="font-semibold text-base">
            123 Main Street, Springfield, PHI
          </h3>
        </div>
        <p className="text-sm text-base-content/80">
          Our clinic sits in a calm, easy-to-find area near central 123 City, offering a relaxing environment and plenty of nearby spots to enjoy before or after your appointment.
        </p>

      </div>

    </section>
  );
};
export default LocationSection;