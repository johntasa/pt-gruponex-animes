'use client'; // Necesario para Next.js 13+ con el App Router

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (filters: {
    searchTerm: string;
    genre: string;
    year: string;
    status: string;
    season: string;
  }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('Any');
  const [year, setYear] = useState('Any');
  const [airingStatus, setAiringStatus] = useState('Any');
  const [season, setSeason] = useState('Any');

  const handleSearch = () => {
    onSearch({ searchTerm, genre, year, status: airingStatus, season });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Any">Any Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          {/* Add more genres */}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Any">Any Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years */}
        </select>
        <select
          value={airingStatus}
          onChange={(e) => setAiringStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Any">Any Status</option>
          <option value="Airing">Airing</option>
          <option value="Finished">Finished</option>
          {/* Add more statuses */}
        </select>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Any">Any Season</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="w-full mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;