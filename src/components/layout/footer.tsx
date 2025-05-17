
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/logo';

export function Footer() {
  return (
    <footer className="border-t py-12 mt-20 bg-tradar-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-tradar-600 mt-4 max-w-md">
              TRADAR is a fintech tool that matches Israeli investors to the best trading platform based on their preferences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-tradar-700">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/questionnaire" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  Find Your Platform
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-tradar-700">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="mailto:info@tradar.io" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  info@tradar.io
                </a>
              </li>
              <li>
                <a href="tel:+972-3-123-4567" className="text-sm text-tradar-600 hover:text-tradar-800 transition-colors">
                  +972-3-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 text-center border-tradar-200">
          <p className="text-xs text-tradar-600">
            © {new Date().getFullYear()} TRADAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
