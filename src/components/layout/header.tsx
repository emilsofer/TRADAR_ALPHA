
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-montserrat text-2xl font-bold text-tradar-700">TRADAR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-tradar-600 transition-colors">
            Home
          </Link>
          <Link to="/questionnaire" className="text-sm font-medium hover:text-tradar-600 transition-colors">
            Find Your Platform
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-tradar-600 transition-colors">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild 
            className="hidden md:inline-flex"
          >
            <a href="mailto:support@tradar.io">Contact</a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link to="/questionnaire">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
