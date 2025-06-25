import { LoaderCircle, Mail, Phone, User } from "lucide-react";
import { useState } from 'react';
import { InputField, MessageField } from "../styles/UI";

const ContactForm = () => {
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-booking`, {
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
    <div className="bg-primary/10 p-4 md:p-8 rounded-xl">
      <p className="text-sm text-primary text-center font-semibold mb-5">Send Us A Message</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName" className="text-sm">
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

        <label htmlFor="email" className="text-sm">
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

        <label htmlFor="phoneNumber" className="text-sm">
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

        <label htmlFor="message" className="text-sm">
          Message
          <MessageField
            id='message'
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

        <button
          className={`w-full rounded-full bg-primary shadow-lg text-primary-content text-xs md:text-sm font-semibold p-2 md:px-4 md:py-3 cursor-pointer hover:scale-102 transition-transform duration-300 ease
              ${isLoading ? 'bg-gray-400 border-gray-400' : 'bg-primary'}
              `}
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? <LoaderCircle className="animate-spin size-5 mx-auto" /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;