
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/quotations', 
      label: 'List Of Quotations', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ) 
    },
    { 
      path: '/truckers', 
      label: 'Trucker List', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM16 8a2 2 0 100-4 2 2 0 000 4z" />
          <path d="M17 11a3.001 3.001 0 00-2.83 2H14a1 1 0 00-1-1h-1V9a1 1 0 00-1-1H9.28a3.001 3.001 0 00-5.56 0H2a1 1 0 00-1 1v3a1 1 0 001 1h1.17A3.001 3.001 0 006 16a3 3 0 002.83-2H10v1a1 1 0 001 1h1a1 1 0 001-1v-1h.17A3.001 3.001 0 0016 17a3 3 0 002.83-2H20a1 1 0 001-1v-1a1 1 0 00-1-1h-1a3 3 0 00-3-3z" />
        </svg>
      ) 
    },
  ];
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-medium">Logo</span>
          </div>
          <h1 className="ml-3 text-xl font-bold">Trucking App</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
