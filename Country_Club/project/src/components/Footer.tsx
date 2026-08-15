import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-gold text-3xl">
                golf_course
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-headline-lg text-white text-lg tracking-wide">
                  Decatur
                </span>
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-label-sm">
                  Country Club
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Where family and golf come together since 1950.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-label-sm mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Golf Course', path: '/golf' },
                { label: 'Amenities', path: '/amenities' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-label-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-gold mt-0.5">
                  location_on
                </span>
                <span>123 Country Club Drive<br />Decatur, MS 39327</span>
              </li>
              <li>
                <a
                  href="tel:+16016620000"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-gold">call</span>
                  (601) 662-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-gold">schedule</span>
                <span>Tee Times: 7AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-label-sm mb-4">
              Join Us
            </h4>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Experience the warmth and tradition of Decatur Country Club.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-primary rounded-full text-sm font-label-lg uppercase tracking-wider hover:bg-white transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Inquire
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Decatur Country Club. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">Est. 1950</span>
            <span className="text-gold text-xs tracking-wider uppercase">Mississippi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
