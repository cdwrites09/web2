import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: 'sports_golf',
    title: 'Championship Golf',
    desc: 'Unlimited access to our impeccably maintained 18-hole course, practice facilities, and pro shop.',
    bg: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3LOl9WNBObIhJYzzJCYAV8IDFyQcIcCOWLnS3_IOGQxn2FIWQrXH-jZ0o2k5zHvjYr4NSKtA9JR6NmglhmNp1jjIkIgSATpdru0NLYONIO2ORue3AfqOv8qSE4iaMOzrLyxQ6RxuVNufOTG9pQkBdvsJR4vaIHlZ1oNvXxvUP77vVMuuk-sxxbIoiEKxIfmg5-BJZIgXnyz-idXocL8opI8sbasLA3bFHt2PoIbxQRoHhGQ4aJdE')",
    span: 'md:col-span-2',
  },
  {
    icon: 'pool',
    title: 'Aquatic Center',
    desc: 'Relax by our resort-style pool, featuring designated family areas and lap lanes for fitness.',
    span: '',
  },
  {
    icon: 'celebration',
    title: 'Social Calendar',
    desc: 'A robust schedule of exclusive events, from seasonal galas to casual weekend cookouts.',
    span: '',
  },
  {
    icon: 'restaurant',
    title: 'Exceptional Dining',
    desc: 'Experience culinary excellence in our formal dining room or enjoy relaxed fare at the clubhouse grill.',
    bg: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDA-j013koybOCmhIm18YFijHFg2eCWhI5NlbltVSQjdtV3PeTSnG3U9tZM3_gV2LvgFKMmYGpxBQiVeBBTG-HXwg9AXPggtC5qCFofpaJf6Nm2rfF--TQgqJjBucrf314PMtnPi2zHUyvY5SmfuoLQzX0y6_Bw7t6aO5UU-jkHH8vm7U8VLJeIcdWjj_-klQLZPXL16zSF9mh5DOYqni5RfpddSR4Z68cRb7L22bZhVk_9aiS8r_4')",
    span: 'md:col-span-2',
  },
];

export default function About() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="relative h-[614px] min-h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARHAVSInTP7fQ99FzwXfGdy9aZfXgQNDdKQlGXmG8dVjdM_CpM2oNc51INWTHIE9bgLm0MJvjSai4R-9E6DcbZRtirD9z0bto1Ktk7A527HX-BAntET5R6x4uZEpeCNBi_3o-3Zq11p40FbSomPvCjFAUcSIZg0jLrjtiaWLxlSlSz2TZrzLwHyRlj2rmfcffUPEcJ_qFpuS43SZMDmvbxiqtCBNnJCM9-Pvm0fDlaKzyplSk_9NI')" }}
        ></div>
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <span className="font-label-lg uppercase tracking-[0.2em] text-tertiary-fixed mb-4 block">Our Story</span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6">A Tradition of Community</h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90">Rooted in Decatur, cultivating friendships and fostering a welcoming environment for generations.</p>
        </div>
      </section>

      {/* Club Story */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0 relative group">
            <div className="absolute inset-0 bg-tertiary-fixed/20 translate-x-4 translate-y-4 rounded-lg -z-10"></div>
            <img
              className="w-full h-auto object-cover rounded-lg border border-outline/20 group-hover:scale-[1.02] transition-transform duration-500"
              alt="Members on patio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTJUw86cuCxGhpzF0aPrcpMsH-TvWBkE9FYzQb5dnXnGLcpjcXGA4M0CiOOijnKnKJyRDz87IzBbSA96xK2BlAaADTgrRHGn6InIZm92g5g9s9hHfyNb1mDRT3kLbUMhyXvx_6DPxt-Dub49iz5UiwZ1mN-4kCEy0kDjV0r5deo_xs-oHTZXNe2YV6D3Ev2PqSAHdCjdgZSh3QKuVbdHdWDlUGGhUazSzf6a5BwkgBCjCzlXoR5Jo"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">A Legacy of Hospitality</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              For decades, Decatur Country Club has stood as more than just a destination for golf; it has been the heart of our community. Built on the principles of genuine hospitality and shared experiences, our club offers a haven where families gather, business connections are forged, and lifelong friendships take root.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              We pride ourselves on our approachable atmosphere. Here, 'prestige' means exceptional quality and service delivered with a warm, welcoming spirit. Whether you are teeing off on our historic fairways, enjoying a quiet lunch, or celebrating a milestone, you are part of the Decatur family.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary font-label-lg uppercase tracking-widest border-b-2 border-tertiary-fixed pb-1 hover:border-primary transition-colors"
            >
              Learn About Our History
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Membership Privileges</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Discover the amenities and experiences that make membership a rewarding investment in your lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`${b.span} bg-surface-container rounded-lg p-8 border border-outline/10 flex flex-col ${b.bg ? 'justify-end relative overflow-hidden group min-h-[300px]' : 'justify-between'}`}
              >
                {b.bg && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: b.bg }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                  </>
                )}
                <div className={b.bg ? 'relative z-10 text-on-primary' : ''}>
                  <span
                    className={`material-symbols-outlined text-4xl mb-4 ${b.bg ? 'text-tertiary-fixed' : 'text-primary-container'}`}
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {b.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-2">{b.title}</h3>
                  <p className="font-body-md text-body-md opacity-90">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Place to Belong */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto text-center">
          <span className="material-symbols-outlined text-5xl text-tertiary-fixed mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>family_restroom</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">A Place to Belong</h2>
          <p className="font-body-lg text-body-lg max-w-3xl mx-auto opacity-90 mb-12">
            We believe a true club is measured not by its facilities, but by its people. Decatur Country Club is proudly family-oriented, cultivating an environment where every member of your family feels at home. We invite you to explore membership and discover your place in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-tertiary-fixed text-tertiary-container rounded font-label-lg px-8 py-4 hover:bg-tertiary-fixed-dim transition-colors uppercase tracking-widest w-full sm:w-auto text-center"
            >
              Request Membership Information
            </Link>
            <Link
              to="/contact"
              className="border border-outline-variant text-on-primary rounded font-label-lg px-8 py-4 hover:bg-white/10 transition-colors uppercase tracking-widest w-full sm:w-auto text-center"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
