
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto p-4 flex justify-end">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Hello, User</span>
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                U
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
