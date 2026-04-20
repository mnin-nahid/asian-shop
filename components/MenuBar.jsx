"use client";

import { useState } from "react";

export default function MenuBar({ items }) {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-100 border-t border-b border-gray-300">
      <div className="flex gap-6 px-6 py-2 text-sm font-semibold">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Main Menu */}
            <button className="flex items-center gap-1 text-gray-900  hover:text-blue-600">
              {item.name} <span>▼</span>
            </button>

            {/* Dropdown */}
            {active === index && (
              <div className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-48 z-50">
                {item.submenu.map((sub, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
