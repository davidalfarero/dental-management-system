import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Button = ({
  children,
  to,
  className = "",
  ...props
}) => {
  const baseClass = `w-fit rounded-full bg-primary shadow-lg text-primary-content text-xs md:text-sm font-semibold p-2 md:px-4 md:py-3 cursor-pointer hover:scale-102 transition-transform duration-300 ease ${className}`;

  // If 'to' is provided, render as <Link>
  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }

  // Else, render as <button>
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export const Tooltip = ({ children, text, position = "" }) => {
  const positionClasses = {
    top: "bottom-full mb-4 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-4 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
    bottomRight: "top-full mt-2 left-full ml-2",
  };

  return (
    <div className="relative group inline-block cursor-pointer">
      {children}
      <span
        className={`absolute z-10 w-max rounded bg-gray-800 p-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${positionClasses[position]}`}
      >
        {text}
      </span>
    </div>
  );
};

export const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto mb-5 px-4">
    <h1 className="text-2xl sm:text-3xl md:text-[50px]">{title}</h1>
    <h2 className="text-base-content/60 text-xs md:text-xl">{subtitle}</h2>
  </div>
);

export const SwiperNavButtons = ({ prevRef, nextRef }) => (
  <div className="flex justify-center gap-4 mt-6">
    <button
      ref={prevRef}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 border border-neutral-300 text-gray-600 hover:bg-gray-100 transition"
      aria-label="Previous testimonial"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
    <button
      ref={nextRef}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-neutral-100 hover:bg-blue-600 transition"
      aria-label="Next testimonial"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);

export const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative mb-4 ">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <Icon className='size-5 text-primary/50' />
    </div>
    <input
      {...props}
      className='rounded-lg px-3 py-2 pl-10 w-full border border-base-content/20 placeholder-neutral-400
      focus:border-primary focus:outline-none'
    />
  </div>
);

export const MessageField = ({ ...props }) => (
  <div className="mb-4">
    <textarea
      {...props}
      className='rounded-lg px-3 py-2 w-full border border-base-content/20 placeholder-neutral-400
      focus:border-primary focus:outline-none resize-none'
    />
  </div>
);

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};