import { Link } from 'react-router-dom';
import './Footer.css';

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/cescankaya',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/%C3%A7ankaya-university-computer-engineering-society/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/cescankaya',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <img src="/ceslogotrans.png" alt="CES Logo" className="footer__logo" />
            <p className="footer__tagline">
              Computer Engineering Society<br />
              Çankaya Üniversitesi
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Hızlı Bağlantılar</h4>
            <Link to="/" className="footer__link">Ana Sayfa</Link>
            <Link to="/about" className="footer__link">Hakkımızda</Link>
            <Link to="/news" className="footer__link">Haberler</Link>
            <Link to="/contact" className="footer__link">İletişim</Link>
          </div>

          {/* Social */}
          <div className="footer__col">
            <h4 className="footer__heading">Sosyal Medya</h4>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} CES — Çankaya Üniversitesi</span>
        </div>
      </div>
    </footer>
  );
}
