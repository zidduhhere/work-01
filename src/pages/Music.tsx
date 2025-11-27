import { Music2, Play, Download } from 'lucide-react';

export default function Music() {
  const compositions = [
    {
      title: 'Raga Bhairav - Dawn Meditation',
      raga: 'Bhairav',
      duration: '12:45',
      year: '2022',
      description:
        'A serene composition capturing the essence of early morning devotion, following the traditional structure of alap, jod, and vilambit bandish.',
      instruments: ['Vocals', 'Tabla', 'Harmonium', 'Tanpura'],
    },
    {
      title: 'Tala Variations in Jhaptaal',
      raga: 'Desh',
      duration: '8:30',
      year: '2021',
      description:
        'An exploration of rhythmic possibilities within the 10-beat Jhaptaal cycle, showcasing intricate tabla compositions and vocal improvisation.',
      instruments: ['Vocals', 'Tabla', 'Tanpura'],
    },
    {
      title: 'Evening Reflections - Raga Yaman',
      raga: 'Yaman',
      duration: '15:20',
      year: '2023',
      description:
        'A contemplative piece performed during evening hours, blending classical form with contemporary harmonic sensibilities.',
      instruments: ['Vocals', 'Sarangi', 'Tabla', 'Tanpura'],
    },
    {
      title: 'Monsoon Melodies',
      raga: 'Megh',
      duration: '10:15',
      year: '2020',
      description:
        'Celebrating the arrival of monsoon rains through the traditional Raga Megh, with lyrical compositions inspired by classical poetry.',
      instruments: ['Vocals', 'Bansuri', 'Tabla', 'Tanpura'],
    },
    {
      title: 'Devotional Suite in Raga Bhairavi',
      raga: 'Bhairavi',
      duration: '18:00',
      year: '2022',
      description:
        'A comprehensive exploration of Raga Bhairavi through multiple compositions, from meditative aalap to energetic drut bandish.',
      instruments: ['Vocals', 'Sitar', 'Tabla', 'Harmonium', 'Tanpura'],
    },
    {
      title: 'Tillana - Carnatic Fusion',
      raga: 'Hamsadhwani',
      duration: '6:45',
      year: '2023',
      description:
        'A vibrant Carnatic composition featuring the auspicious Raga Hamsadhwani, blending South Indian rhythmic patterns with melodic improvisation.',
      instruments: ['Vocals', 'Mridangam', 'Violin', 'Tambura'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Musical Compositions</h1>
          <p className="text-xl text-gray-700">
            Original works blending tradition with creative expression
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {compositions.map((composition, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-4">
                  <Music2 className="h-8 w-8 text-amber-700" />
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {composition.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{composition.title}</h3>

              <div className="flex items-center space-x-4 mb-4 text-sm">
                <span className="text-amber-700 font-medium">Raga: {composition.raga}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{composition.duration}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{composition.description}</p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-900 mb-2">INSTRUMENTS</h4>
                <div className="flex flex-wrap gap-2">
                  {composition.instruments.map((instrument, instrumentIndex) => (
                    <span
                      key={instrumentIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium">
                  <Play className="mr-2 h-4 w-4" />
                  Listen
                </button>
                <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
            <div className="text-4xl font-bold text-amber-800 mb-2">50+</div>
            <p className="text-gray-700 font-medium">Original Compositions</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
            <div className="text-4xl font-bold text-orange-800 mb-2">15+</div>
            <p className="text-gray-700 font-medium">Ragas Explored</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 border border-red-200">
            <div className="text-4xl font-bold text-red-800 mb-2">8+</div>
            <p className="text-gray-700 font-medium">Years Composing</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="text-center">
            <Music2 className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Compositional Approach</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              My compositions honor the classical framework while exploring new emotional territories
              and melodic possibilities. Each piece is crafted with attention to raga purity,
              rhythmic integrity, and emotional depth, aiming to create music that resonates with
              both traditionalists and modern audiences.
            </p>
            <p className="text-gray-400 italic">
              "In every note lies a universe of tradition; in every silence, an invitation to explore."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
