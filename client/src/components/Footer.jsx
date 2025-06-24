import { Calendar, Clock, Lock, Mail, MapPin, Phone, SquareChevronUp } from "lucide-react";
import { Tooltip } from "../styles/UI";

const Footer = () => {
  return (
    <footer className="bg-base-300 p-6 w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">

        {/* Logo */}
        <div className="flex-1">
          <a href='/' className="text-lg flex items-center gap-2">
            <div className="avatar">
              <div className="flex-none w-10 rounded-full">
                <img src="/dental-logo.png" alt="Logo" />
              </div>
            </div>
            <span className='text-sm text-primary font-black'>Dental Clinic</span>
          </a>

          <p className="text-base-content/60 text-xs">Our mission is to provide compassionate, high-quality dental care in a comfortable environment</p>
        </div>


        <div>
          <p className="font-semibold mb-4 text-sm">Quick Links</p>
          <ul className="text-base-content/60 text-xs">
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#services" className="hover:underline">Our Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing and Plans</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 text-sm">Company</p>
          <ul className="text-base-content/60 text-xs">
            <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Our Vision</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 text-sm">Get In Touch</p>
          <div className="flex gap-2 mb-2">
            <Phone className="flex-none size-4 text-primary" />
            <p className="text-base-content/60 text-xs">+639-123-456-789</p>
          </div>
          <div className="flex gap-2">
            <Mail className="flex-none size-4 text-primary" />
            <p className="text-base-content/60 text-xs">support@mail.com</p>
          </div>
        </div>

        <div className="w-[120px]">
          <p className="font-semibold mb-4 text-sm">Location</p>
          <div className="flex gap-2 mb-2">
            <MapPin className="flex-none size-4 text-primary" />
            <p className="text-base-content/60 text-xs">123 Main Street, Springfield, PHI</p>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4 text-sm">Working Days</p>
          <div className="flex gap-2 mb-2">
            <Calendar className="flex-none size-4 text-primary" />
            <div>
              <p className="text-base-content/60 text-xs">Monday - Saturday</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <Clock className="flex-none size-4 text-primary" />
            <p className="text-base-content/60 text-xs">9:00 AM - 5:00 PM</p>
          </div>
          <div className="flex gap-2 mb-2">
            <Lock className="flex-none size-4 text-primary" />
            <p className="text-base-content/60 text-xs">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-1 border-base-content/20 my-8"></div>

      <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
        <p className="text-base-content/60 text-sm font-semibold">@ 2025 Dental Clinic. All Rights Reserved.</p>

        <div className="cursor-pointer p-2 rounded-xl hover:bg-base-200 transition-colors">
          <Tooltip text='Home' position="top">
            <a href="#home"><SquareChevronUp className="size-5 text-primary" /></a>
          </Tooltip>
        </div>

        <div className="flex gap-4">
          <p className="text-base-content/60 text-xs">Terms of Use</p>
          <p className="text-base-content/60 text-xs">Privacy Policy</p>
        </div>
      </div>

    </footer>
  );
};
export default Footer;