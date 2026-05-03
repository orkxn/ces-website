import { useFadeIn } from '../hooks/useFadeIn';
import './Home.css';

export default function Home() {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-glow" />
        <div className="hero__content container">
          <img src="/ceslogotrans.png" alt="CES Logo" className="hero__logo fade-in" />
          <h1 className="hero__title fade-in">
            Computer Engineering<br />
            <span className="yellow-accent">Society</span>
          </h1>
          <p className="hero__subtitle fade-in">
            Çankaya Üniversitesi Bilgisayar Mühendisliği Topluluğu
          </p>
          <div className="hero__actions fade-in">
            <a href="/about" className="btn btn--primary">Hakkımızda</a>
            <a href="/contact" className="btn btn--outline">İletişim</a>
          </div>
        </div>
      </section>

      {/* Features / What we do */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title fade-in">Neler <span className="yellow-accent">Yapıyoruz</span></h2>
          <p className="section-subtitle fade-in">
            Topluluğumuz, bilgisayar mühendisliği öğrencilerini bir araya getirerek birçok alanda etkinlikler düzenlemektedir.
          </p>
          <div className="features__grid fade-in-stagger">
            {features.map((f, i) => (
              <div key={i} className="feature-card fade-in">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta__card fade-in">
            <h2 className="cta__title">Topluluğumuza <span className="yellow-accent">Katılın</span></h2>
            <p className="cta__desc">
              Etkinliklerimizi takip edin, projelerimize katılın ve bilgisayar mühendisliği dünyasında birlikte gelişelim.
            </p>
            <a href="/contact" className="btn btn--primary">Bize Ulaşın</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 20h10M12 16v4" />
      </svg>
    ),
    title: 'Workshop & Seminerler',
    desc: 'Yazılım geliştirme, yapay zeka ve siber güvenlik gibi alanlarda düzenli etkinlikler.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7-6-4.6h7.6z" />
      </svg>
    ),
    title: 'Yarışmalar',
    desc: 'Hackathon, kodlama yarışmaları ve takım bazlı projelerle kendinizi sınayın.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Networking',
    desc: 'Sektörden profesyonellerle tanışın, staj ve iş fırsatlarını keşfedin.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
      </svg>
    ),
    title: 'Projeler',
    desc: 'Topluluk bünyesinde açık kaynak ve inovatif projelere katkıda bulunun.',
  },
];
