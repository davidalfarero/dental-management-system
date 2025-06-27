import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../styles/UI';
import MobileNavLinks from './MobileNavLinks';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <>
      <nav className={`fixed top-0 w-full h-15 md:h-20 flex items-center z-50 border-b border-base-300
      ${scrolled
          ? 'bg-base-100/60 backdrop-blur-md shadow-sm'
          : 'bg-base-100'}
      }
      `}
      >
        <div className='max-w-5xl mx-auto w-full flex items-center justify-between gap-4 px-4 pr-15 md:pr-4'>

          <div className='flex-1 md:flex-none'>

            {/* logo */}
            <a href='/' className="text-lg flex items-center gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/dental-logo.png" alt="Logo" />
                </div>
              </div>
              <span className='text-sm md:text-xl text-primary font-black'>Dental Clinic</span>
            </a>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <NavLinks />
          </div>

          {/* Theme toggle */}
          <div
            onClick={() => setDarkMode((prev) => !prev)}
            className='cursor-pointer p-2 rounded-xl hover:bg-base-300 transition-colors'
          >
            {darkMode ? <Sun className='text-yellow-400 size-5' /> : <Moon className='size-5' />}
          </div>

          {/* Todo: Book online function */}
          <Button to='/contact' aria-label='Book Now'>
            Book Now
          </Button>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className='md:hidden cursor-pointer fixed top-5 right-5 z-60'
      >
        {isMenuOpen ? <X className='text-neutral-100' /> : <Menu className='text-base-content' />}
      </div>

      {/* Mobile navlinks */}
      <MobileNavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};
export default Navbar;