
import React from 'react';
import { CollegeLogoIcon } from './icons/CollegeLogoIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CollegeLogoIcon className="h-10 w-10 text-blue-700" />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-800">Grand University</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Academics</a>
              <a href="#" className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Admissions</a>
              <a href="#" className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center">
             {/* This button would link to the HOD login page. For this SPA, it's a placeholder. */}
            <a href="#/login" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors">
              HOD Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
