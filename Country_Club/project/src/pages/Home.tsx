import { Link } from 'react-router-dom';

const amenities = [
  { icon: 'sports_golf', title: 'Golfing', desc: 'Enjoy our well-maintained 10-hole course perfect for all skill levels. A relaxing walk or ride through beautiful scenery.' },
  { icon: 'pool', title: 'Swimming', desc: 'Cool off during the summer months in our spacious family pool. Perfect for relaxation and children\'s activities.' },
  { icon: 'park', title: 'Playground', desc: 'A safe and fun environment for children to play while parents enjoy the club\'s other amenities nearby.' },
  { icon: 'celebration', title: 'Events', desc: 'Host your reunions, parties, and gatherings in our versatile club facilities designed for memorable moments.' },
];

const trustItems = [
  { icon: 'star', fill: true, label: '4.3 Stars on Google' },
  { icon: 'sports_golf', fill: false, label: '10-Hole Golf' },
  { icon: 'pool', fill: false, label: 'Family Pool' },
  { icon: 'park', fill: false, label: 'Playground' },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <header className="relative w-full min-h-[600px] h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img
            alt="Club grounds"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay hero-zoom"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtn0sI2aKLi-YfRkLxXIU2vRHVlduZJXQWOfqTsDoZAWCIDk6eLvRSig186K25XEqmjTwVv2pQ02DB1fLA3eJC_xSaZBut1DInZpQfaipCBrBioUzzyyklcPxmFxW7LBYwL3-J96MLjEcHN9Yi8_yJVP-RnHR81veadZfMSBYip9N_BaMD5VSXMQ4-vYEInxSY39dxZSORg7Yuc3h-qbuoinPAuH-cS8tc_MR_3KBTOz5f3nl8WoHXx9vNr6BAA48Y"
          />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-widest mb-4 block">Est. 1950</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 drop-shadow-md">
            Decatur Country Club – Where Family & Golf Come Together
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-low mb-10 max-w-2xl text-center">
            Experience our friendly atmosphere, pristine 10-hole course, and family-friendly amenities in the heart of Decatur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              to="/contact"
              className="bg-tertiary-fixed text-tertiary-container font-label-lg text-label-lg px-8 py-4 rounded hover:bg-tertiary-fixed-dim transition-colors shadow-sm text-center"
            >
              Inquire About Membership
            </Link>
            <a
              href="tel:+16016352077"
              className="flex items-center justify-center gap-2 border border-tertiary-fixed text-tertiary-fixed font-label-lg text-label-lg px-8 py-4 rounded hover:bg-tertiary-fixed/10 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
              Call (601) 635-2077
            </a>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-surface-container py-6 border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <span
                className={`material-symbols-outlined ${i === 0 ? 'text-tertiary-fixed-dim' : 'text-primary-container'}`}
                style={{ fontVariationSettings: item.fill ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-section-padding bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Our Amenities</h2>
            <div className="w-16 h-px bg-tertiary-fixed mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((a) => (
              <div key={a.title} className="group bg-surface-container-lowest border border-outline-variant/50 rounded p-6 hover:border-tertiary-fixed/50 transition-colors ambient-shadow">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-6 text-primary-container">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>{a.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-3 group-hover:text-tertiary-container transition-colors">{a.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
