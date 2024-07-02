import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CommandBar from '../components/Client';

const SettingsPage = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <CommandBar />
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="mb-4">
          <h2 className="text-xl">Profile</h2>
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mt-2" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mt-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>
        <div>
          <h2 className="text-xl">Appearance</h2>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="purple-light">Purple Light</option>
            <option value="purple-dark">Purple Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

