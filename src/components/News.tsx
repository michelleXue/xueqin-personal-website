import { useState } from 'react';

const newsItems = [
  {
    date: 'OCT 2024',
    text: 'Attend the VARSE\'24 held in ASE 2024 and present "Utilizing Generative AI for VR Exploration Testing: A Case Study" paper.',
    url: '#'
  },
  {
    date: 'OCT 2024',
    text: 'My two Match Program Projects have been released! Please submit your application by November 15, 23:59 PM!',
    url: '#'
  },
  {
    date: 'OCT 2024',
    text: 'I am glad to join as a PC member in AAAI-25 UC (AAAI 2025 Undergraduate Consortium)',
    url: '#'
  },
  {
    date: 'SEP 2024',
    text: 'Accept the review invitation for the 2024 Research Catalyst Grant (RCG) competition.',
    url: '#'
  },
  {
    date: 'AUG 2024',
    text: 'Our paper "Utilizing Generative AI for VR Exploration Testing: A Case Study" is accepted by VARSE 2024! Thanks, Garrett!',
    url: '#'
  }
];

export function News() {
  const [showAll, setShowAll] = useState(false);
  const displayedNews = showAll ? newsItems : newsItems.slice(0, 5);

  return (
    <section id="news" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="font-serif text-5xl" style={{ color: '#002663' }}>NEWS</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="hover:underline text-sm"
          style={{ color: '#002663' }}
        >
          {showAll ? 'less' : 'more'}
        </button>
      </div>
      <div className="space-y-6">
        {displayedNews.map((item, index) => (
          <div key={index} className="flex gap-8">
            <div className="flex-shrink-0 w-24">
              <div className="font-serif text-sm">{item.date}</div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700">
                {item.text}{' '}
                <a href={item.url} className="hover:underline text-sm" style={{ color: '#002663' }}>
                  [URL]
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}