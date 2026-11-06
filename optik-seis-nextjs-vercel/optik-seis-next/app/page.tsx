import Image from "next/image";

const collections = [
  { name: "Optical frames", sub: "Everyday icons", image: "/images/hero-portrait.jpg", tag: "01" },
  { name: "Sunglasses", sub: "Made for the sun", image: "/images/eyewear-detail.jpg", tag: "02" },
  { name: "Contact lenses", sub: "A lighter perspective", image: "/images/eye-exam.jpg", tag: "03" },
];

const services = [
  ["01", "Eye examination", "A thoughtful check for your everyday vision."],
  ["02", "Frame styling", "Find a frame that feels unmistakably yours."],
  ["03", "Lens consultation", "The right lens, tailored to your needs."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Optik Seis home">
          <span className="brand-mark"><i /><i /></span>
          <span>OPTIK SEIS<small>SINCE 1927</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our story</a><a href="#collections">Collections</a>
          <a href="#services">Services</a><a href="#stores">Our stores</a>
        </nav>
        <a className="header-cta" href="#contact">Book an eye check <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <Image className="hero-image" src="/images/hero-portrait.jpg" alt="Editorial portrait wearing modern optical frames" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">A clearer point of view</p>
          <h1>See better.<br /><em>Live brighter.</em></h1>
          <p className="hero-text">Temukan cara baru melihat dunia. Perpaduan perawatan mata profesional dan pilihan eyewear yang terasa personal.</p>
          <a className="button button-light" href="#collections">Explore the collection <span>↗</span></a>
        </div>
        <div className="hero-note"><span className="note-line" /> A legacy of vision<br />Since 1927</div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="trust-strip" aria-label="Optik Seis highlights">
        <div><b>1927</b><span>Trusted since</span></div>
        <div><b>90+</b><span>Years of experience</span></div>
        <div><b>100s</b><span>Stores across Indonesia</span></div>
        <div><b>01</b><span>Focus: your vision</span></div>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-photo photo-frame">
          <Image src="/images/heritage-store.jpg" alt="Historic optical store facade" fill sizes="(max-width: 760px) 100vw, 48vw" />
          <span className="photo-caption">A history shaped by care</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The Optik Seis story</p>
          <h2>Nearly a century<br />of seeing <em>what matters.</em></h2>
          <p>Sejak 1927, Optik Seis hadir menemani perjalanan penglihatan masyarakat Indonesia. Berbekal pengalaman dan layanan profesional, kami percaya bahwa kacamata bukan hanya soal melihat, tetapi juga tentang bagaimana kamu menjalani hari.</p>
          <a className="text-link" href="#services">Discover our story <span>↗</span></a>
        </div>
        <div className="story-stamp"><span>SEIS</span><b>1927</b><small>VISION & CARE</small></div>
      </section>

      <section className="collections section-pad" id="collections">
        <div className="section-heading">
          <div><p className="eyebrow">Curated for your point of view</p><h2>Find your<br /><em>frame of mind.</em></h2></div>
          <p>From everyday essentials to statement pieces, explore eyewear that brings your own perspective into focus.</p>
          <a className="text-link" href="#contact">Explore all collections <span>↗</span></a>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <a className="collection-card" href="#contact" key={item.tag}>
              <div className="collection-image">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 760px) 90vw, 30vw" />
                <span className="card-number">{item.tag}</span><span className="card-arrow">↗</span>
              </div>
              <div className="collection-meta"><div><h3>{item.name}</h3><p>{item.sub}</p></div><span>Discover</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="service-band" id="services">
        <div className="service-image"><Image src="/images/eye-exam.jpg" alt="Professional eye examination" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="service-copy">
          <p className="eyebrow light">Care beyond the frame</p>
          <h2>Your vision<br />deserves <em>expert care.</em></h2>
          <p>Dari pemeriksaan mata hingga konsultasi lensa, tim kami siap membantu kamu menemukan solusi penglihatan yang tepat.</p>
          <a className="button button-outline-light" href="#contact">Explore our services <span>↗</span></a>
        </div>
        <div className="service-list">
          {services.map(([num, title, desc]) => <div className="service-item" key={num}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div><b>↗</b></div>)}
        </div>
      </section>

      <section className="craft section-pad">
        <div className="craft-heading"><p className="eyebrow">The details make the difference</p><h2>Good design.<br /><em>Better vision.</em></h2></div>
        <div className="craft-image photo-frame"><Image src="/images/eyewear-detail.jpg" alt="Close-up of refined eyewear and lens details" fill sizes="(max-width: 760px) 100vw, 60vw" /></div>
        <div className="craft-note"><span className="round-symbol">◎</span><h3>Made to fit your life.</h3><p>Desain pilihan, material berkualitas, dan lensa yang disesuaikan dengan kebutuhan harianmu.</p><a className="text-link" href="#collections">Find your fit <span>↗</span></a></div>
      </section>

      <section className="quote-section">
        <p className="eyebrow light">A little love from our community</p>
        <div className="quote-mark">“</div>
        <blockquote>Rasanya nyaman dari awal konsultasi sampai menemukan frame yang pas. Pilihannya juga banyak dan stylish.</blockquote>
        <p className="quote-credit">A happy customer <span>·</span> Jakarta</p>
      </section>

      <section className="stores section-pad" id="stores">
        <div className="stores-copy"><p className="eyebrow">Closer to you</p><h2>Good vision<br /><em>is never far.</em></h2><p>Dengan ratusan cabang di berbagai kota, temukan Optik Seis yang paling dekat dan kunjungi kami.</p><a className="button button-dark" href="#contact">Find a store <span>↗</span></a></div>
        <div className="stores-visual"><Image src="/images/storefront.jpg" alt="Modern Optik Seis retail store" fill sizes="(max-width: 760px) 100vw, 60vw" /><div className="store-pin">◎ <span>OPTIK SEIS</span></div><p>YOUR NEXT VISIT STARTS HERE</p></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div><p className="eyebrow light">Make room for a clearer day</p><h2>See the world<br /><em>in your own way.</em></h2></div>
        <div className="contact-action"><p>Temukan koleksi dan layanan Optik Seis untuk menemani setiap perspektifmu.</p><a className="button button-light" href="https://www.optikseis.com/" target="_blank" rel="noreferrer">Visit Optik Seis <span>↗</span></a></div>
        <span className="contact-orbit orbit-one" /><span className="contact-orbit orbit-two" />
      </section>

      <footer className="footer">
        <a className="brand brand-footer" href="#home"><span className="brand-mark"><i /><i /></span><span>OPTIK SEIS<small>SINCE 1927</small></span></a>
        <p>Clearer vision. Brighter living.</p>
        <div className="footer-links"><a href="#story">Our story</a><a href="#collections">Collections</a><a href="#services">Services</a><a href="#stores">Stores</a></div>
        <small>© 2026 Optik Seis. Concept website for presentation purposes.</small>
      </footer>
    </main>
  );
}
