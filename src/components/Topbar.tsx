'use client';

import { useState } from 'react';

interface Tab {
  id: number;
  label: string;
}

interface TopbarProps {
  tabs: Tab[];
  onTabChange: (tabId: number) => void;
}

export default function Topbar({ tabs, onTabChange }: TopbarProps) {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="static z-1000 w-full bg-teal-700 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Aninex</h1>

        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-1 pb-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[5px] after:bg-pink-500'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}