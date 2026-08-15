import { Link } from 'react-router-dom';

export default function Amenities() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Club grounds"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0F7dY8KKNKm6MxV_ZtFu8Fkowv5ufhUEP2ah3SERXK5_RqmgmE3V1JZ5wjYtWfzUK1BBtuQ6aQynLm9INFegdSrJv_nFghkrvIEWk1gjocZXyMVvIlmhriQiKEkEQuF31DQsVWdzrVF9hBtv3HAcgR2yAcjOX5x7f0dyb8wpKpQsgfVo66u5k2TLygTPwq81nV17sp-zkzgqqKijeiJMH5M3lrup02FjrX4hhbPjrtLnayaqkBQKYY_tqUnHOizz5"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-surface-container-lowest">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-tertiary-fixed mb-4 block">Decatur Lifestyle</span>
          <h1 className="font-display-lg text-display-lg mb-6">Club Amenities &amp; Family Fun</h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90">Experience the heart of our community where relaxation and recreation meet in perfect harmony.</p>
        </div>
      </section>

      {/* Intro + Bento Grid */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-primary mb-6">More Than Just Golf</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              At Decatur Country Club, our amenities are designed to bring families and friends together. From cooling off in the pool to hosting memorable events, our grounds offer a versatile backdrop for Southern living at its finest.
            </p>
            <div>
              <a href="#events" className="btn-tertiary font-label-lg text-label-lg uppercase text-on-surface tracking-wider inline-flex items-center group">
                Explore Event Spaces
                <span className="material-symbols-outlined ml-2 text-on-tertiary-container group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg image-zoom group cursor-pointer border border-tertiary-fixed/30 shadow-sm">
              <img className="w-full h-full object-cover transition-transform duration-700" alt="Pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjUVf00YqXyYaNsCF3vrtyiDD108hnvjta7NGNnGJrExTHUDvykSEn6tJQ8UIW9moXf5SM2a1sa3cuemh5UH9bFaXwtuM-HeHzEhjJbuyf9v6A9RX8jonhsapRc0Gid7j0Qqp194kOGRj9kKbqyADfzWS9pc8EAPKbmYQRhuD5SMN6fDNZyJ0tDJxe9ZV1e7Va5mzoDerXgQl6WjV2fGwoW4riXLg_uNN5E7_ISuxbFz-tQy-DPmk" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-surface-container-lowest">
                <h3 className="font-headline-md text-headline-md mb-2">The Pool</h3>
                <p className="font-body-md text-body-md opacity-90">A refreshing oasis</p>
              </div>
            </div>
            <div className="col-span-1 relative overflow-hidden rounded-lg image-zoom group cursor-pointer border border-tertiary-fixed/30 shadow-sm">
              <img className="w-full h-full object-cover transition-transform duration-700" alt="Playground" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMeKA37Hrf9qOKeZl37U1S-GckwfRx0ZeQ9D87_a4bqCNkGMNMEvozFBRlV550dGl3ROfigCs4VdahReztwv7Wl3-e6k9sSBn1S1TnX4DsZQic6AVjKIZiexpTzfqHgMGiCoc7Lg3t-tfPL_taFG7U_9HtpNWPssRGM_L0YMRzwlm8HVItphxvqSuARqet0cJyNQCIl9TjBsRRdJ2XOAV1O0dWDysHTKpyVfTg0vjvKZKK4TU5LWI" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="col-span-1 relative overflow-hidden rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/50 p-6 text-center">
              <div>
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
                <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Private Events</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="bg-surface-container-low py-section-padding border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Pool */}
          <div className="flex flex-col md:flex-row items-center gap-gutter mb-32">
            <div className="w-full md:w-1/2 order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden border border-outline-variant/50 shadow-sm">
              <img className="w-full h-full object-cover" alt="Pool water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc4L3KSV6nXEo4iUhqa4k1prioUvLvkM08RCCfDljzGY-Sv13oozgUFmUhUMtET_szKuYfS2-57moJeHaEFijR8vIkEqIA7RAeRvyH4Ujyt8eIWTt8dmMCkpcgjQPnl-MIzIKV6kt3dcYsMvK82jHXv_awKHhlZFNXMC5lGDZ4_5W5PeWt6jtGlRJiVyZfPsk3mfq0vvmln-lvrnD-pU5E_uOnCaIlfuJ3FiBbzuCMOcaSB52-8t8" />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-12">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm rounded-sm mb-4 uppercase tracking-wider">Summer Season</span>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">The Pool</h3>
              <div className="w-12 h-px bg-tertiary-fixed/50 mb-6"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                A refreshing oasis for families during Mississippi summers. Our generously sized pool area offers ample lounging space, pristine waters, and a safe environment for both relaxation and aquatic fun.
              </p>
            </div>
          </div>
          {/* Playground */}
          <div className="flex flex-col md:flex-row items-center gap-gutter mb-32">
            <div className="w-full md:w-1/2 md:pr-12 text-right">
              <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded-sm mb-4 uppercase tracking-wider">Family Focus</span>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">The Playground</h3>
              <div className="w-12 h-px bg-tertiary-fixed/50 mb-6 ml-auto"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Safe, fun outdoor space for our youngest members. Nestled near the main clubhouse, the playground ensures children can play safely while parents enjoy nearby amenities or a quiet moment on the patio.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px] rounded-lg overflow-hidden border border-outline-variant/50 shadow-sm">
              <img className="w-full h-full object-cover" alt="Children playing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNa0IXue12ZGCgy6ZQ6cs03LpomoNQb3qPBDTgeOVqDFIlI6Seqx2OfO32R-RNfjemRFJB_yVmeeeuJKHlWESiVUWbMbK2FPvu9OIt6ETx3gwQ-GSl9sPImUx5eUBoHHR90MLoz8-iYi7Jdd3q2_ALdQ4IB7DFtw6ULFGqHI7lUsXhi8m0g-M-qm30V4GB5IQjPa0GyrQNhBJsffI0n0aJyBQdH5qAN1W-CHutNoeJMkDuzK2FuUk" />
            </div>
          </div>
          {/* Events */}
          <div className="flex flex-col md:flex-row items-center gap-gutter" id="events">
            <div className="w-full md:w-1/2 order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden border border-outline-variant/50 shadow-sm">
              <img className="w-full h-full object-cover" alt="Event setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYF76lhPDk6ycRJeF0Gv7wcVGIVJWm2pxv05vDeA4Z3zDGHeWRDy5o0-yn-HX-7hxDyoy6msuecuFnDrqYMS_oMBphreitamRheuRcs4RsYvpigdw40b48idWmXmfCTw6kCUvYxPjJnhkZoZOjUaRT9KrV96nYD57ZZJUW9dmauOjifMtkI7zOhISNmtojt5l_NTHAKyzmGsiVOD7hcxU_2o78-Jk8fVgxRuOk-BabGJTFho7JKfM" />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-12">
              <span className="inline-block px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-sm text-label-sm rounded-sm mb-4 uppercase tracking-wider">Gatherings</span>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Events &amp; Reunions</h3>
              <div className="w-12 h-px bg-tertiary-fixed/50 mb-6"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                The perfect local venue for family reunions, weddings, and community gatherings. With adaptable indoor and outdoor spaces, our dedicated staff ensures every event is seamless and memorable against the backdrop of our scenic grounds.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-4 rounded hover:bg-primary transition-colors shadow-sm hover:shadow-md"
              >
                Plan Your Next Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Club Life</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Moments captured around the grounds.</p>
        </div>
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          <div className="break-inside-avoid rounded-lg overflow-hidden border border-outline-variant/30">
            <img className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt="Family at pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxeSOMa7ITuE8HPDab2Qvm4OyaGTgwWbN4pjpsj5NbtBAUtWji5c4GCY6WIRTuqejAppd5k5YvU67ZuK7rD8mHhTFA5Uu0i-WbzC89dIZ6E1xzrOwCjhvGXpintjSYewuslzPnvSG9Y9IfTcGvKXCX05MsxO8NeHXNnCDqOqTIzKNuKISlKy7ct317NXnGTLNScu_1cJUMjbg_KOJnQz2UL8CDyDVMhukh5e3oOoruBEXRN3Q2YB0" />
          </div>
          <div className="break-inside-avoid rounded-lg overflow-hidden border border-outline-variant/30">
            <img className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt="Putting green" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9uzZ_T1m7iNFVlrDq8W6Ju7JMWG9kSKQpFNGI0pND-_2rEQJHXZAg15KtRcTJCTlSUhlxC6SU-EItGAgdwQ0pqJ9gwYzpighXan54xwWlRR5Yu3uzUZlwgwRztJzoFU--8bH13UELlIGQWA76lUhPNEcz29rWnpI92NhVZo3Ti3-YPgN-3q1n1pUjDdgb7F_vphDJrO9y3F_EBE2aEAFIZ7fJZAkAtVA-N-4Q0rWNhXH5t5Ds4o" />
          </div>
          <div className="break-inside-avoid rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container p-8 flex items-center justify-center aspect-square">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl text-on-tertiary-container mb-4" style={{ fontVariationSettings: "'wght' 200" }}>local_dining</span>
              <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest">Patio Dining<br />Coming Soon</p>
            </div>
          </div>
          <div className="break-inside-avoid rounded-lg overflow-hidden border border-outline-variant/30">
            <img className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt="Group under oak tree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzofHDxPpcFnvfLsXOt2ruSr8Lk20vVVnIx-Jc1PIaJs0ixCSlepgZFWE_Nv71z_k4YJSU-0iawpmu4RrFZGLe4PZ6_CAGw9SlYJFSFA0k8cLP1gOxPSGiHEORRHOqtwueiLjcFFcZ7xt9OOC9jU16gB6uWbgZXx_V5FYLJnJG27KFv5aezzBGQ_oWQ9mMynldts49C_Rl6KBe_K4aV4MBuSYEZ7J05c7leT6QXR4sCUrCABjjG8w" />
          </div>
          <div className="break-inside-avoid rounded-lg overflow-hidden border border-outline-variant/30">
            <img className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt="Child on slide" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqSmpUkEwKom8BcmepHN0gw0fwfuMHI6xUiDdpLI_tidFr4dpsXfnu1TuXusxVHbVgphinZxp44HrRKqqUrFy22tzY0X5NKZUJIXSJ1EIN6m56zTM5oui0NEAJtV_rh3nk5QVwlFJhdE7GTODGaJqjvaT9cQ2hn-LN75hzqmTKwTDUGPgGYIdXaVl4mza1HVyk92Rzq9IzEHINh7r-1yvHgB2txpkOW1deeOw3SBmxOJbi-bLy-A" />
          </div>
        </div>
      </section>
    </div>
  );
}
