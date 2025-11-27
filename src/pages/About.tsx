import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Ravi Menon</h1>
          <p className="text-xl text-gray-700">Musicologist, Scholar, and Cultural Ambassador</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-96 flex items-center justify-center">
              <Music className="h-32 w-32 text-amber-700 opacity-50" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dr. Ravi Menon is a distinguished musicologist whose work has significantly contributed
                to the understanding and appreciation of Indian classical music. With over two decades
                of research and teaching experience, he has become a respected voice in the field of
                ethnomusicology and cultural studies.
              </p>
              <p>
                Born in Kerala and trained in both Carnatic and Hindustani traditions, Dr. Menon brings
                a unique perspective that bridges South and North Indian musical heritage. His academic
                journey spans institutions across India and internationally, where he has studied under
                renowned maestros and scholars.
              </p>
              <p>
                Through his publications, lectures, and compositions, Dr. Menon has made complex musical
                concepts accessible to both academic audiences and general music enthusiasts. His work
                emphasizes the living tradition of Indian classical music and its relevance in
                contemporary contexts.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Education & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <GraduationCap className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ph.D. in Musicology</h3>
              <p className="text-gray-600 mb-2">University of Mumbai</p>
              <p className="text-sm text-gray-500">
                Dissertation on Raga Evolution in Hindustani Classical Music
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <GraduationCap className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">M.A. in Indian Classical Music</h3>
              <p className="text-gray-600 mb-2">Banaras Hindu University</p>
              <p className="text-sm text-gray-500">
                Specialization in Carnatic and Hindustani traditions
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sangeet Visharad</h3>
              <p className="text-gray-600 mb-2">Prayag Sangit Samiti, Allahabad</p>
              <p className="text-sm text-gray-500">
                Advanced diploma in Hindustani classical vocal music
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visiting Professor</h3>
              <p className="text-gray-600 mb-2">Various International Universities</p>
              <p className="text-sm text-gray-500">
                Guest lectures on Indian music theory and practice
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Raga Theory & Analysis',
              'Tala Systems',
              'Music History',
              'Ethnomusicology',
              'Composition Techniques',
              'Performance Practice',
              'Musical Notation',
              'Cross-cultural Studies',
              'Music Pedagogy',
            ].map((area) => (
              <div
                key={area}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 text-center border border-amber-200"
              >
                <p className="font-semibold text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="flex items-start space-x-6">
            <BookOpen className="h-12 w-12 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Research Philosophy</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                "Music is not merely an art form but a living dialogue between past and present.
                My work seeks to honor the wisdom of tradition while making it relevant and
                accessible to contemporary audiences. Through rigorous scholarship and creative
                expression, I aim to preserve the essence of Indian classical music for future
                generations."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Music({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    </svg>
  );
}
