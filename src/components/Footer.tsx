import { Music, BookOpen, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ravi Menon</h3>
            <p className="text-sm leading-relaxed">
              Indian Musicologist, Author, and Composer dedicated to preserving
              and sharing the rich heritage of Indian classical music.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-amber-500" />
                <span>Published Books</span>
              </li>
              <li className="flex items-center">
                <Music className="h-4 w-4 mr-2 text-amber-500" />
                <span>Musical Compositions</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-500" />
                <span>Get in Touch</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm leading-relaxed">
              For inquiries about books, music collaborations, or lectures,
              please reach out through the contact page.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ravi Menon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
