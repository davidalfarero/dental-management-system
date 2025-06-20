import { useState, useEffect } from 'react';
import { Button } from './UI';
import { Menu, Moon, Sun, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navlinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Location', href: '#location' },
    { name: 'Contact Us', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full h-15 md:h-20 flex items-center border-b border-base-300 z-50
      ${scrolled
        ? 'bg-base-100/60 backdrop-blur-md border-b border-base-300 shadow-sm'
        : 'bg-base-100'}
      }
      `}

    >
      <div className='max-w-5xl mx-auto w-full flex items-center justify-between gap-4 px-4'>

        <div className='flex-1 md:flex-none'>
          <a href='/' className="text-lg flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="/dental-logo.png" alt="Logo" />
              </div>
            </div>
            <span className='hidden md:inline text-primary font-black'>Dental Clinic</span>
          </a>
        </div>

        <div className="hidden md:block space-x-4">
          {navlinks.map(({ name, href }, index) => (
            <a
              key={index}
              href={href}
              className='cursor-pointer font-semibold text-sm
            hover:text-primary hover:border-b-3 transition-colors'
            >
              {name}
            </a>
          ))}
        </div>

        <div
          onClick={() => setDarkMode((prev) => !prev)}
          className='cursor-pointer p-2 rounded-xl hover:bg-base-300 transition-colors'
        >
          {darkMode ? <Sun className='text-yellow-400' /> : <Moon />}
        </div>

        {/* Todo: Book online function */}
        <Button>Book Online</Button>

        {/* Mobile navlinks */}
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden z-60 cursor-pointer'
        >
          {isMenuOpen ? <X className='text-white' /> : <Menu />}
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity
          ${isMenuOpen ?
              'opacity-100 pointer-events-auto' :
              'opacity-0 pointer-events-none'
            }
          `}
        >
          <div className='flex flex-col gap-8'>
            {navlinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className='text-center text-white font-semibold text-xl'
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
};
export default Navbar;