import { Trophy } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="z-10 bg-white px-6 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1.5">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-800">iSquash</span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center rounded-full bg-gray-100 p-1 md:flex">
          <Button
            variant="default"
            className="bg-primary rounded-full px-4 text-white hover:bg-green-700"
          >
            Courses
          </Button>
          {['Dashboard', 'Schedule', 'Message', 'Support'].map(item => (
            <Button
              key={item}
              variant="ghost"
              className="hover:text-primary rounded-full px-4 text-gray-800 hover:bg-white"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hidden rounded-full text-gray-800 hover:bg-green-50 md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hidden rounded-full text-gray-800 hover:bg-green-50 md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </Button>
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback className="text-primary bg-green-100">
              U
            </AvatarFallback>
          </Avatar>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary text-gray-800 hover:bg-green-50 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
