export interface SearchFilters {
  searchTerm: string;
  genre: string;
  year: string;
  status: string;
  season: string;
}

export interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
}