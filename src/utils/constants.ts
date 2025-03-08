export const TABS = [
  { name: "Home", href: "/" },
  { name: "Favorites", href: "/favorites"}
];

export const FILTERS = {
  searchTerm: "",
  genre: "",
  year: "",
  status: "",
  season: "",
};

export const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Hentai",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller"
];

export const YEARS = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());

export const STATUSES = [
  "FINISHED",
  "RELEASING",
  "NOT_YET_RELEASED",
  "CANCELLED",
  "HIATUS"
];

export const SEASONS = [
  "WINTER",
  "SPRING",
  "SUMMER",
  "FALL"
];