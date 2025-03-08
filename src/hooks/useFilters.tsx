import { SearchFilters } from "@/interfaces/Filters";
import { useDispatch, useSelector } from "react-redux";
import { setAnimeList, setError, setFilters, setLoading } from "@/redux/animeSlice";
import { useQuery } from "@apollo/client";
import { GET_ANIMES } from "@/lib/queries";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

export function useSearchFilters() {
  const filters = useSelector((state: RootState) => state.anime.filters);
  const dispatch = useDispatch();

  const queryVariables = {
    search: filters.searchTerm || undefined,
    status: filters.status && filters.status !== "Any" ? filters.status : undefined,
    season: filters.season && filters.season !== "Any" ? filters.season : undefined,
    seasonYear: filters.year && filters.year !== "Any" ? parseInt(filters.year) : undefined,
    genre_in: filters.genre && filters.genre !== "Any" ? [filters.genre] : undefined
  };

  const { loading } = useQuery(GET_ANIMES, {
    variables: queryVariables,
    skip: Object.values(queryVariables).every(value => value === undefined),
    onCompleted: (data) => {
      dispatch(setAnimeList(data.Page.media));
    },
    onError: (error) => {
      dispatch(setError(error.message));
    }
  });

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading, dispatch]);

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    dispatch(setFilters(updatedFilters));
  };

  return { filters, updateFilter };
}