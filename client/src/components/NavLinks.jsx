import { useLocation } from 'react-router-dom';

const NavLinks = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Our Services', link: '/services' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <>
      {pages.map(({ name, link }, index) => {
        const isActive = currentPath === link;

        return (
          <a
            href={link}
            key={index}
            className={`cursor-pointer font-semibold text-sm hover:text-primary transition-colors 
              ${isActive && 'border-b-3 border-primary'}
              `}
          >
            {name}
          </a>
        );
      })}
    </>
  );
};
export default NavLinks;