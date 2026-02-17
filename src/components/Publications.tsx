import { useState } from 'react';

const publications = [
  {
    year: '2024',
    title: 'Utilizing Generative AI for VR Exploration Testing: A Case Study',
    authors: 'Garrett Weaver, Xue Qin',
    venue: '39th IEEE/ACM International Conference on Automated Software Engineering Workshop (ASEW24)',
    details: 'October 2024, 228-232',
    url: '#'
  },
  {
    year: '2023',
    title: 'Virtual Reality (VR) Automated Testing in the Wild: A Case Study on Unity-Based VR Applications',
    authors: 'Dhia Elhaq Rzig, Nafees Iqbal, Isabella Attisano, Xue Qin, Foyzul Hassan',
    venue: 'The 32nd ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA23)',
    details: 'July 2023, 1269-1281',
    url: '#'
  },
  {
    year: '2022',
    title: 'DyTRec: A Dynamic Testing Recommendation tool for Unity-based Virtual Reality Software',
    authors: 'Xue Qin, Foyzul Hassan',
    venue: '37th IEEE/ACM International Conference on Automated Software Engineering (ASE22)',
    details: 'January 2022, Article 227, 1–5',
    url: '#'
  }
];

export function Publications() {
  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll ? publications : publications.slice(0, 3);

  return (
    <section id="publications" className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="font-serif text-5xl" style={{ color: '#002663' }}>PUBLICATIONS</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="hover:underline text-sm"
          style={{ color: '#002663' }}
        >
          {showAll ? 'less' : 'more'}
        </button>
      </div>
      <div className="space-y-8">
        {displayedPublications.map((pub, index) => (
          <div key={index} className="flex gap-8">
            <div className="flex-shrink-0 w-24">
              <div className="font-serif text-lg">{pub.year}</div>
            </div>
            <div className="flex-1">
              <h3 className="mb-2">{pub.title}</h3>
              <p className="text-gray-700 mb-1">{pub.authors}</p>
              <p className="text-gray-600 italic mb-1">{pub.venue}</p>
              <p className="text-gray-600">
                {pub.details}{' '}
                <a href={pub.url} className="hover:underline text-sm" style={{ color: '#002663' }}>
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