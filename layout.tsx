import Link from 'next/link'
import { Plane } from 'lucide-react'
import React from 'react'; // Add this line

// ... existing code ...

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      <header className="bg-sky-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8" />
            <span className="text-2xl font-bold">Indiza Iza Kuqala</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-sky-200 transition-colors">Home</Link></li>
              <li><Link href="/flights" className="hover:text-sky-200 transition-colors">Flights</Link></li>
              <li><Link href="/booking" className="hover:text-sky-200 transition-colors">Booking</Link></li>
              <li><Link href="/about" className="hover:text-sky-200 transition-colors">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-sky-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2023 Indiza Iza Kuqala. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

declare module 'lucide-react';