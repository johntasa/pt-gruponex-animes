'use client';

import TabLinks from "./TabLinks";

export default function Topbar() {
  return (
    <div className="w-full bg-teal-700 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Aninex</h1>
        <TabLinks />
      </div>
    </div>
  );
}