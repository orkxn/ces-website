import { useFadeIn } from '../hooks/useFadeIn';
import './News.css';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  tag: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '2026-04-20',
    title: 'Bahar Dönemi Hackathon\'u Başlıyor',
    summary: 'Bu yılki hackathon etkinliğimize kayıtlar başladı! 48 saat boyunca takımlar halinde projeler geliştirin ve ödüller kazanın.',
    tag: 'Etkinlik',
  },
  {
    id: 2,
    date: '2026-04-10',
    title: 'Yapay Zeka Workshop Serisi',
    summary: 'Machine Learning ve Deep Learning konularında 4 haftalık workshop serimiz başlıyor. Katılım ücretsizdir.',
    tag: 'Workshop',
  },
  {
    id: 3,
    date: '2026-03-28',
    title: 'Sektör Buluşması: Yazılım Kariyer Paneli',
    summary: 'Büyük teknoloji şirketlerinden mühendislerle kariyer panelimizde sektörü yakından tanıyın.',
    tag: 'Panel',
  },
  {
    id: 4,
    date: '2026-03-15',
    title: 'CES Açık Kaynak Projesi Başladı',
    summary: 'Topluluğumuzun ilk açık kaynak projesi GitHub üzerinde yayınlandı. Katkıda bulunmak için repomuzu ziyaret edin!',
    tag: 'Proje',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function News() {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="news">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title fade-in">Haberler</h1>
          <p className="page-hero__subtitle fade-in">
            Topluluk etkinlikleri ve duyurular
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news__list fade-in-stagger">
            {newsData.map((item) => (
              <article key={item.id} className="news-card fade-in">
                <div className="news-card__meta">
                  <span className="news-card__tag">{item.tag}</span>
                  <time className="news-card__date">{formatDate(item.date)}</time>
                </div>
                <h2 className="news-card__title">{item.title}</h2>
                <p className="news-card__summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
