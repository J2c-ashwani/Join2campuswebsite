// Replaced next/link with standard anchor tags to resolve the compilation error.
// import Link from "next/link";
import { Linkedin, Instagram, Facebook } from 'lucide-react';

// Removed the 'export default' from Footer to fix the 'multiple default exports' error.
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 rounded-t-lg shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Join2Campus. All rights reserved.</p>
        <div className="mt-4 space-x-4 flex flex-wrap justify-center">
          {/* Replaced Link with an anchor tag */}
          <a href="/privacy-policy" className="hover:text-indigo-400 transition duration-300">
            Privacy Policy
          </a>
          {/* Replaced Link with an anchor tag */}
          <a href="/terms-of-service" className="hover:text-indigo-400 transition duration-300">
            Terms of Service
          </a>
          {/* Replaced Link with an anchor tag */}
          <a href="/refund-cancellation" className="hover:text-indigo-400 transition duration-300">
            Refund & Cancellation
          </a>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/company/join2campus/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/join2campus_studyabroad?igsh=MWIweThkZHN5eGJ0Mw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/share/1SBXJUUMMx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// The App component remains the default export to fix the compilation error.
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
