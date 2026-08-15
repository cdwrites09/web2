import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero */}
      <section className="relative pt-20 pb-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you're looking to book a tee time, inquire about membership, or plan your next event, our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 md:p-12 shadow-[0_10px_40px_rgba(27,48,34,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <h2 className="font-headline-md text-headline-md text-primary mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Phone Card */}
            <a
              href="tel:+16016352077"
              className="bg-surface-container border border-outline-variant/30 rounded-xl p-8 flex items-start gap-4 group hover:border-gold/40 transition-colors"
            >
              <div className="p-3 bg-surface rounded-full text-on-tertiary-container shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Direct Line</h3>
                <p className="font-headline-md text-[28px] text-primary leading-tight">(601) 635-2077</p>
              </div>
            </a>

            {/* Hours Card */}
            <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <h3 className="font-headline-md text-2xl text-primary">Operational Hours</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2 border-b border-outline-variant/20 pb-2">Golf Course</h4>
                  <ul className="font-body-md text-primary space-y-2 mt-3">
                    <li className="flex justify-between"><span>Tuesday - Sunday</span> <span>8:00 AM - Dusk</span></li>
                    <li className="flex justify-between text-on-surface-variant"><span>Monday</span> <span>Closed</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2 border-b border-outline-variant/20 pb-2">Pool (Seasonal)</h4>
                  <ul className="font-body-md text-primary space-y-2 mt-3">
                    <li className="flex justify-between"><span>Tuesday - Sunday</span> <span>10:00 AM - 8:00 PM</span></li>
                    <li className="flex justify-between text-on-surface-variant"><span>Monday</span> <span>Closed for Maintenance</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map/Location Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col h-full">
              <div className="h-48 relative w-full bg-surface-dim">
                <img
                  className="w-full h-full object-cover opacity-80"
                  alt="Map of Decatur, MS"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMpHZex3vp5AeqdHMsuYtse3Zh8KmvK7eLgNKf_pOGdeq66Be2co3vvpNuUdEyQ7qYCal-_y2iovtvHSahdG4eeCi1vVjPRYsGyurj88emqRi95bb-OC8B50Gx1BKwvaAOBDjK7mTPFtm3w4MT8hXQXryqw3qZ0tGz02ZFBHbQZRwRkmF6OZ20aXQ5izq1023-ISnsZ5Y-aEx3EDFt6mXxIEAXTnIzYEHYFAgGCkPwWp-pFY2sPc"
                />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
              <div className="p-6 bg-surface-container-lowest flex items-start gap-4">
                <div className="p-2 bg-surface-container rounded-full text-on-tertiary-container mt-1">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Location</h3>
                  <p className="font-body-md text-primary">
                    15627 MS-503<br />
                    Decatur, MS 39327
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=15627+MS-503+Decatur+MS+39327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-label-lg text-label-lg text-on-tertiary-container uppercase border-b-2 border-tertiary-fixed pb-1 hover:text-primary transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
