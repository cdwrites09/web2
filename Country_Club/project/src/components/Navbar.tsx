import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Golf', path: '/golf' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-primary'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-gold text-3xl group-hover:scale-110 transition-transform">
              golf_course
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-headline-lg text-white text-lg md:text-xl tracking-wide">
                Decatur
              </span>
              <span className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-label-sm">
                Country Club
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-label-lg uppercase tracking-wider transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+16016620000"
                className="flex items-center gap-2 px-5 py-2.5 border border-gold text-gold rounded-full text-sm font-label-lg uppercase tracking-wider hover:bg-gold hover:text-primary transition-all duration-300"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 fade-in">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg text-sm font-label-lg uppercase tracking-wider transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold bg-white/5'
                        : 'text-white/80 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:+16016620000"
                  className="flex items-center gap-2 mt-2 py-3 px-4 rounded-lg text-sm font-label-lg uppercase tracking-wider text-gold border border-gold/30"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
