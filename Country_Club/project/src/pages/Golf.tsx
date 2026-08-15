import { Link } from 'react-router-dom';

export default function Golf() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden bg-primary flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="The Course at Decatur"
            className="w-full h-full object-cover hero-zoom opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB12gjGIt1MwYHJrFL6-JLFrWuvcsgWdNfeR3sEVIKEklsK4J3heeELS5XEsQ0ykbmi1Yy6Cr-moIGK6P-QkdX9wux8aqlwvRX2obunh0rzIUx5eaFuY2OFeXUoQIQnX4OMo02go62v4orzSnGcG6CYZvsZkz4foRo3wY95NnS-WWRkXZrJcxvOMJuUZReDJcEEHrZlTKk_NvTvmbvmZRzFP96am2RmYaH571TY38xZ2WyIu2IBgB57vHFWumrhuY7r"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <span className="font-label-lg text-tertiary-fixed uppercase tracking-widest mb-4 block">Decatur Country Club</span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-md">The Course at Decatur</h1>
          <p className="font-body-lg text-body-lg text-surface-container max-w-2xl mx-auto mb-10">
            A 10-hole journey blending natural Mississippi beauty with thoughtful design, welcoming to players of all levels while offering quiet challenges for the seasoned golfer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-surface text-primary-container px-8 py-4 rounded font-label-lg uppercase tracking-widest hover:bg-tertiary-fixed transition-colors duration-300"
            >
              Book a Tee Time
            </Link>
            <a
              href="#course-details"
              className="px-8 py-4 rounded border border-surface/30 text-on-primary font-label-lg uppercase tracking-widest hover:bg-surface/10 transition-colors duration-300"
            >
              Explore the Layout
            </a>
          </div>
        </div>
      </section>

      {/* Course Layout */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="course-details">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">A Unique 10-Hole Experience</h2>
              <div className="w-16 h-px bg-tertiary-fixed/80"></div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The Course at Decatur offers a distinctive 10-hole layout that is both forgiving for beginners and engaging for veterans. Set against the backdrop of rolling hills and mature pine stands, each hole presents a tranquil setting. The routing allows for a quick 10-hole loop or an extended play, catering to your schedule and desire for the game.
            </p>
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 rounded-sm">
              <h3 className="font-headline-md text-headline-md text-primary-container mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>nature</span>
                The 'Mr. Lou' Memorial Tee
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A cornerstone of our course history, the 'Mr. Lou' memorial tee area offers one of the most picturesque starts on the property. Dedicated to a beloved figure in our club's legacy, it serves as a quiet moment of reflection before embarking on your round, as seen in the sprawling twilight vistas of our grounds.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[400px] md:h-[500px] rounded bg-surface-container overflow-hidden group relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFWPWmkMu_8ks4ZUcK8-WOow_Va6BxpWFRd49Lt4WfKkIrFuqHX97vqh6ipYDnd0kMlLp9lQxulA13PiY1fzhlbSDhXn03y-1rq97ol-BkiWN646rgBrS1WvF19ElTT8UnU72IO-IhL7GzaBihrfPPqnmxtzQ71eTdPO1Fp4XwGV2tkgimNcKl0jYdJwqEJrNPKB51aSYWW0VmMSqiOUGU_KRE58aZJWnNafvdwZtOsbDsdGPLZZo')" }}
              ></div>
              <div className="absolute inset-0 border border-gold/30 pointer-events-none m-4"></div>
            </div>
            <div className="flex flex-col gap-4 h-[400px] md:h-[500px]">
              <div className="flex-1 rounded bg-surface-container overflow-hidden group relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4nH3G08yH0-PtwbYPlv2SQ0UZDQyPAgrP1H6HMKZGq-29nb7IdEYQYxAzPqV2VSYg4Z0Q0bIvuChx7EdJW3ceaauvKvQDAsVFaoSn10RmxkOgz0tgQWhtMchspDC557-A-VTYlF-zMvpXOT-2ToEyHhk6-N1TTEWAdt7a76YV7ae_0ajFPMNYzfxMW-eH8B1nWHmjAVzmP7jtSIUCzcSIVjp4XQoXwteWrRGlpSJkjWstvA0ZRo8')" }}
                ></div>
                <div className="absolute inset-0 border border-gold/30 pointer-events-none m-2"></div>
              </div>
              <div className="flex-1 rounded bg-primary-container p-6 flex flex-col justify-center items-start text-on-primary">
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>sports_golf</span>
                <h4 className="font-label-lg uppercase tracking-widest mb-2">Friendly Play</h4>
                <p className="font-body-md text-body-md opacity-80">Wide fairways and generous greens make for an inviting round, emphasizing enjoyment over punishment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tee Times & Rates */}
      <section className="py-section-padding bg-surface-container-low relative" id="tee-times">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-fixed/20 to-transparent pointer-events-none"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Tee Times &amp; Rates</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We prioritize accessibility for our members and their guests. Review our standard rates and book your next round.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weekday */}
            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-gold/50 transition-colors duration-300 flex flex-col h-full shadow-[0_10px_30px_rgba(27,48,34,0.03)]">
              <div className="mb-6">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Weekday</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Mon - Thu</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="font-body-md text-body-md">10 Holes Walking</span>
                  <span className="font-label-lg">$25</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="font-body-md text-body-md">10 Holes with Cart</span>
                  <span className="font-label-lg">$40</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="font-body-md text-body-md">Guest Fee (Accompanied)</span>
                  <span className="font-label-lg">$35</span>
                </div>
              </div>
            </div>
            {/* Weekend - Highlight */}
            <div className="bg-primary-container text-on-primary p-8 rounded border border-primary-container relative transform md:-translate-y-4 shadow-[0_10px_30px_rgba(27,48,34,0.08)] flex flex-col h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary-fixed text-tertiary-container font-label-sm px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="font-headline-md text-headline-md mb-2">Weekend</h3>
                <p className="font-label-sm text-tertiary-fixed/80 uppercase tracking-widest">Fri - Sun &amp; Holidays</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-body-md text-body-md">10 Holes Walking</span>
                  <span className="font-label-lg text-tertiary-fixed">$35</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-body-md text-body-md">10 Holes with Cart</span>
                  <span className="font-label-lg text-tertiary-fixed">$55</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-body-md text-body-md">Guest Fee (Accompanied)</span>
                  <span className="font-label-lg text-tertiary-fixed">$45</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="block w-full text-center bg-tertiary-fixed text-tertiary-container py-3 rounded font-label-lg uppercase tracking-widest hover:bg-tertiary-fixed/90 transition-colors mt-auto"
              >
                Book Now
              </Link>
            </div>
            {/* Twilight */}
            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-gold/50 transition-colors duration-300 flex flex-col h-full shadow-[0_10px_30px_rgba(27,48,34,0.03)]">
              <div className="mb-6">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Twilight</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">After 4:00 PM</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="font-body-md text-body-md">Walking</span>
                  <span className="font-label-lg">$20</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="font-body-md text-body-md">With Cart</span>
                  <span className="font-label-lg">$30</span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant italic mt-4">Play until sunset. Cart return required 15 minutes before dark.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Tournaments */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative">
            <div
              className="w-full h-[500px] bg-cover bg-center rounded"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfyHuU_CE93Wqj3Cr8XTKjGjy-tZlcvxVAct1QdkDptXsG0KxuVopHOaKhX2Qfa7HL-8qaB70lOms8V4w-xIgUtEjH97rwCRlWvvLBBMwrVChFMcPv2o0ko5xxuhktJLQ4HjORhH5ZZ3MVW9rTDC9AGQ5pWJzjge3RMG3aoPRzDp8T1zWDx1OjsAJA7prUup_IG5cbMv_QQKmRS8LqxO0msam4hlPZvF0hOS7KzGhpGHp9sm1pYlU')" }}
            ></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-2xl -z-10"></div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Golf Events &amp; Outings</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Beyond daily play, Decatur Country Club hosts a variety of member tournaments, scrambles, and social golf events throughout the season. Our course provides an ideal, manageable setting for corporate outings and charity events.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-gold mt-1">done</span>
                <div>
                  <h4 className="font-label-lg text-primary mb-1">Member-Guest Tournaments</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Annual traditions fostering friendly competition.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-gold mt-1">done</span>
                <div>
                  <h4 className="font-label-lg text-primary mb-1">Corporate Outings</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Customizable packages for teams and clients.</p>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-label-lg text-primary-container uppercase tracking-widest gold-underline-hover"
              >
                Inquire for Outings
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
