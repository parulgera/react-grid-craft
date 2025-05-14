
import React from 'react';

const Header = ({ title, children }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mt-4 sm:mt-0 flex items-center space-x-2">
        {children}
      </div>
    </div>
  );
};

export default Header;
