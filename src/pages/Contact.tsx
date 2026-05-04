import { useFadeIn } from '../hooks/useFadeIn';
import './Contact.css';

const contacts = [
  { name: 'Topluluk E-postası', email: 'cescankaya@gmail.com' },
  { name: 'Topluluk Başkanı', email: 'kaptanemirhan.04@gmail.com' },
];

const socials = [
  { platform: 'Instagram', handle: '@cescankaya', url: 'https://www.instagram.com/cescankaya' },
  { platform: 'Instagram', handle: '@myenginar', url: 'https://www.instagram.com/myenginar' },
  { platform: 'LinkedIn', handle: 'CES Çankaya', url: 'https://www.linkedin.com/company/%C3%A7ankaya-university-computer-engineering-society/' },
  { platform: 'X (Twitter)', handle: '@cescankaya', url: 'https://x.com/cescankaya' },
];

export default function Contact() {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="contact">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title fade-in">İletişim</h1>
          <p className="page-hero__subtitle fade-in">Bize ulaşmak için aşağıdaki kanalları kullanabilirsiniz</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            {/* Email contacts */}
            <div className="contact__col fade-in">
              <h2 className="section-title">E-posta</h2>
              <div className="contact__list">
                {contacts.map((c, i) => (
                  <div key={i} className="contact-item">
                    <span className="contact-item__name">{c.name}</span>
                    <a href={`mailto:${c.email}`} className="contact-item__email">{c.email}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="contact__col fade-in">
              <h2 className="section-title">Sosyal <span className="yellow-accent">Medya</span></h2>
              <div className="contact__socials">
                {socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
                    <span className="social-card__platform">{s.platform}</span>
                    <span className="social-card__handle">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
