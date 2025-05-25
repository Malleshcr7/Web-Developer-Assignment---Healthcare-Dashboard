import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-xl font-semibold">
          <span className="text-secondary-500">Health</span>
          <span className="text-gray-800">care.</span>
        </div>
      </div>

      <div className="w-full max-w-md mx-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-lg bg-secondary-500 flex items-center justify-center text-white">
            <img src="https://img.icons8.com/ios-filled/24/user.png" alt="User" className="w-6 h-6 rounded-full" />

          </div>
        </div>
        <button className="rounded-full p-2 bg-primary-600 text-white hover:bg-primary-700">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;