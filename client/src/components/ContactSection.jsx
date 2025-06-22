import { Mail, Phone, User } from "lucide-react";
import { Button, InputField, MessageField, SectionTitle } from "../styles/UI";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto pt:15 md:pt-20">
      <p className="text-sm text-primary text-center font-semibold mb-5">Get in Touch with Us</p>
      <SectionTitle
        title={
          <>
            Schedule Your <span className="text-primary font-black">Visit</span> Today
          </>
        }
        subtitle="Have questions or ready to book? We’re just a message away."
      />

      <div className="max-w-md mx-auto px-4 md:px-0">
        <form>
          <label htmlFor="fullName" className="text-sm md:text-base">
            Full Name
            <InputField
              id='fullName'
              icon={User}
              type='text'
              placeholder='Juan Dela Cruz'
              required
            />
          </label>

          <label htmlFor="email" className="text-sm md:text-base">
            Email address
            <InputField
              id='email'
              icon={Mail}
              type='email'
              placeholder='patient@email.com'
              required
            />
          </label>

          <label htmlFor="phoneNumber" className="text-sm md:text-base">
            Phone Number
            <InputField
              id='phoneNumber'
              icon={Phone}
              type='tel'
              placeholder='Optional'
            />
          </label>

          {/* todo: set fix row */}
          <label htmlFor="message" className="text-sm md:text-base">
            Message
            <MessageField
              id='message'
              placeholder='Your message...'
              required
            />
          </label>

          <Button
            className="mb-4 w-full bg-primary text-primary-content border border-primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;