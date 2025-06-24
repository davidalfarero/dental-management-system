import { Link } from "react-router-dom";

const MobileNavLinks = ({ isMenuOpen, setIsMenuOpen }) => {


  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Our Services', link: '/services' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <div
      className={`md:hidden fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity
          ${isMenuOpen ?
          'opacity-100 pointer-events-auto' :
          'opacity-0 pointer-events-none'
        }
          `}
    >
      <div className='flex flex-col gap-8'>
        {pages.map(({ name, link }, index) => (
          <Link
            key={index}
            to={link}
            onClick={() => setIsMenuOpen(false)}
            className='text-center text-neutral-100 font-semibold text-xl'
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MobileNavLinks;