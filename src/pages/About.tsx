import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';

export default function About() {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="about">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title fade-in">
            Hakkımızda
          </h1>
          <p className="page-hero__subtitle fade-in">
            CES — Çankaya Üniversitesi Bilgisayar Mühendisliği Topluluğu
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about__content">
            <div className="about__text fade-in">
              <h2 className="section-title">Biz <span className="yellow-accent">Kimiz?</span></h2>
              <p>
                Computer Engineering Society (CES), Çankaya Üniversitesi Bilgisayar Mühendisliği bölümü
                öğrencileri tarafından kurulan bir topluluktur. Amacımız, bilgisayar mühendisliği alanında
                bilgi paylaşımını teşvik etmek, öğrencilerin teknik becerilerini geliştirmelerine yardımcı
                olmak ve sektörle bağlantılar kurmaktır.
              </p>
              <p>
                Düzenlediğimiz workshop'lar, seminerler, hackathon'lar ve sosyal etkinliklerle
                öğrencilerimizin hem akademik hem de profesyonel gelişimlerine katkıda bulunuyoruz.
              </p>
            </div>

            <div className="about__stats fade-in">
              {stats.map((s, i) => (
                <div key={i} className="stat">
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="container">
          <h2 className="section-title fade-in">
            Misyonumuz & <span className="yellow-accent">Vizyonumuz</span>
          </h2>
          <div className="about__cards fade-in-stagger">
            <div className="about-card fade-in">
              <div className="about-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Misyon</h3>
              <p>
                Bilgisayar mühendisliği öğrencilerini bir araya getirerek, bilgi paylaşımını
                ve işbirliğini teşvik eden bir topluluk oluşturmak.
              </p>
            </div>
            <div className="about-card fade-in">
              <div className="about-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Vizyon</h3>
              <p>
                Türkiye'nin en aktif ve yenilikçi üniversite bilgisayar mühendisliği
                topluluklarından biri olmak.
              </p>
            </div>
            <div className="about-card fade-in">
              <div className="about-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3>Değerler</h3>
              <p>
                Sürekli öğrenme, işbirliği, yenilikçilik ve topluluk bilinci
                temel değerlerimizi oluşturur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  { value: '50+', label: 'Aktif Üye' },
  { value: '20+', label: 'Etkinlik / Yıl' },
  { value: '9+', label: 'Yıllık Deneyim' },
];
