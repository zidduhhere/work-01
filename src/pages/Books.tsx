import { BookOpen, ExternalLink } from 'lucide-react';

export default function Books() {
  const books = [
    {
      title: 'The Raga Journey: Understanding North Indian Classical Music',
      year: '2019',
      publisher: 'Oxford University Press',
      description:
        'A comprehensive guide to the ragas of Hindustani classical music, exploring their melodic structures, emotional expressions, and historical contexts. This book serves as both an academic resource and a practical guide for students and enthusiasts.',
      topics: ['Raga Theory', 'Hindustani Music', 'Musical Analysis'],
    },
    {
      title: 'Rhythmic Foundations: Tala Systems in Indian Classical Music',
      year: '2017',
      publisher: 'Sangeet Natak Akademi',
      description:
        'An in-depth exploration of the tala systems that form the rhythmic backbone of Indian classical music. Features detailed analysis of common and rare talas, with practical exercises for students and performers.',
      topics: ['Tala', 'Rhythm', 'Performance Practice'],
    },
    {
      title: 'Carnatic Traditions: South Indian Classical Music Heritage',
      year: '2015',
      publisher: 'Manohar Publishers',
      description:
        'A scholarly examination of Carnatic music traditions, documenting the contributions of legendary composers and exploring the unique characteristics that distinguish South Indian classical music from its northern counterpart.',
      topics: ['Carnatic Music', 'Music History', 'Composition'],
    },
    {
      title: 'Music and Spirituality: The Sacred Dimension of Indian Classical Music',
      year: '2021',
      publisher: 'Routledge',
      description:
        'This book examines the deep spiritual roots of Indian classical music, exploring how devotion and transcendence are woven into the very fabric of musical practice and performance.',
      topics: ['Music Philosophy', 'Spirituality', 'Cultural Studies'],
    },
    {
      title: 'Contemporary Voices: Modern Innovations in Classical Indian Music',
      year: '2023',
      publisher: 'Penguin Random House India',
      description:
        'A timely exploration of how contemporary musicians are reimagining classical traditions, balancing innovation with respect for heritage. Features interviews with leading artists and analysis of recent compositional trends.',
      topics: ['Contemporary Music', 'Innovation', 'Cross-cultural Studies'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Published Books</h1>
          <p className="text-xl text-gray-700">
            Scholarly works exploring the depths of Indian classical music
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="mb-6 md:mb-0 flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg w-48 h-64 flex items-center justify-center border-2 border-amber-200">
                    <BookOpen className="h-24 w-24 text-amber-700" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {book.title}
                    </h2>
                    <p className="text-amber-700 font-medium">
                      {book.publisher} • {book.year}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">KEY TOPICS</h3>
                    <div className="flex flex-wrap gap-2">
                      {book.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Upcoming Publications</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Currently working on new manuscripts exploring the intersection of technology and
              traditional music practice, as well as a comprehensive guide to musical notation
              systems in Indian classical music. Stay tuned for updates on publication dates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
