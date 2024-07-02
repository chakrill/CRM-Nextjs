import React, { useState, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const CommandBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useHotkeys('cmd+k', () => setIsVisible(!isVisible));

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    )
  );
};

export default CommandBar;
