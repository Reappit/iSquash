import { Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold text-gray-800">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Match Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary text-sm text-gray-500 transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Trophy className="text-primary h-5 w-5" />
            <span className="font-bold text-gray-800">iSquash</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2023 iSquash. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
