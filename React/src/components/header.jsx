import React from 'react';


const Header = ({ logo, search_icon }) => {
  return (
    <header className="flex justify-between p-4 items-center bg-gray-100">
      <img src={logo} alt="Logo" className="h-10" />
      <div className="flex items-center">
        <input type="text" placeholder="Search..." className="border p-1" />
        <img src={search_icon} alt="Search" className="h-6 ml-2" />
      </div>
    </header>
  );
};

export default Header;
