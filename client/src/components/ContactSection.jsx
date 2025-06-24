import { LoaderCircle, Mail, Phone, User } from "lucide-react";
import { Button, InputField, MessageField, SectionTitle } from "../styles/UI";
import { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setErrorMessage('');

    if (!name || !email || !phone || !message) {
      setIsLoading(false);
      setStatus("error");
      setErrorMessage("All fields are required.");
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const res = await fetch("http://localhost:5001/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="text-sm md:text-base">
            Full Name
            <InputField
              id='fullName'
              icon={User}
              type='text'
              placeholder='Juan Dela Cruz'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email" className="text-sm md:text-base">
            Email address
            <InputField
              id='email'
              icon={Mail}
              type='email'
              placeholder='patient@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="phoneNumber" className="text-sm md:text-base">
            Phone Number
            <InputField
              id='phoneNumber'
              icon={Phone}
              type='tel'
              placeholder='09123456789'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label htmlFor="message" className="text-sm md:text-base">
            Message
            <MessageField
              id='message'
              placeholder='Your message...'
              rows='4'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <div className='h-6'>
            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">Your booking request has been sent!</p>
            )}

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>

          <Button
            className={`mb-4 w-full text-primary-content border border-primary
              ${isLoading ? 'bg-gray-400 border-gray-400' : 'bg-primary'}
              `}
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <LoaderCircle className="animate-spin size-5 mx-auto" /> : 'Submit'}
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;