'use client';

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

export default function SearchBar ({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('Any');
  const [year, setYear] = useState('Any');
  const [airingStatus, setAiringStatus] = useState('Any');
  const [season, setSeason] = useState('Any');

  const handleSearch = () => {
    onSearch({ searchTerm, genre, year, status: airingStatus, season });
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-5 items-center gap-x-4">
        {/* Campo de búsqueda */}
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-bold mb-1">
            Search
          </label>
          <div className="relative">
            <input
              id="searchTerm"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
              className="bg-white text-sm w-full p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <svg
              className="absolute top-2 left-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20">
              <path
                d="M10 2a8 8 0 105.293 14.707l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
                fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Género */}
        <div>
          <label htmlFor="genre" className="block text-sm font-bold mb-1">
            Genre
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
              handleSearch();
            }}
            className="bg-white text-sm w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Any">Any</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            {/* Add more genres */}
          </select>
        </div>

        {/* Año */}
        <div>
          <label htmlFor="year" className="block text-sm font-bold mb-1">
            Year
          </label>
          <select
            id="year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              handleSearch();
            }}
            className="bg-white text-sm w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Any">Any</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            {/* Add more years */}
          </select>
        </div>

        {/* Estado de emisión */}
        <div>
          <label htmlFor="airingStatus" className="block text-sm font-bold mb-1">
            Airing Status
          </label>
          <select
            id="airingStatus"
            value={airingStatus}
            onChange={(e) => {
              setAiringStatus(e.target.value);
              handleSearch();
            }}
            className="bg-white text-sm w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Any">Any</option>
            <option value="Airing">Airing</option>
            <option value="Finished">Finished</option>
            {/* Add more statuses */}
          </select>
        </div>

        {/* Temporada */}
        <div>
          <label htmlFor="season" className="block text-sm font-bold mb-1">
            Season
          </label>
          <select
            id="season"
            value={season}
            onChange={(e) => {
              setSeason(e.target.value);
              handleSearch();
            }}
            className="bg-white text-sm w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Any">Any</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
        </div>
      </div>
    </div>
  );
};