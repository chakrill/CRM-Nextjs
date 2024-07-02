import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">CRnpM</h2>
      </div>
      <nav className="mt-4">
        <Link href="/prospects"><a className="block py-2.5 px-4 hover:bg-gray-700">Prospects</a></Link>
        <Link href="/companies"><a className="block py-2.5 px-4 hover:bg-gray-700">Companies</a></Link>
        <Link href="/settings"><a className="block py-2.5 px-4 hover:bg-gray-700">Settings</a></Link>
        <Link href="/search"><a className="block py-2.5 px-4 hover:bg-gray-700">Search</a></Link>
        <Link href="/notifications"><a className="block py-2.5 px-4 hover:bg-gray-700">Notifications</a></Link>
        <Link href="/tasks"><a className="block py-2.5 px-4 hover:bg-gray-700">Tasks</a></Link>
      </nav>
    </div>
  );
};

export default Sidebar;
