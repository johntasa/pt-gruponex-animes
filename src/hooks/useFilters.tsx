import { SearchFilters } from "@/interfaces/Filters";
import { useDispatch, useSelector } from "react-redux";
import { setAnimeList, setError, setFilters, setLoading, setPageInfo } from "@/redux/animeSlice";
import { useQuery } from "@apollo/client";
import { GET_ANIMES } from "@/api/queries";
import { RootState } from "@/redux/store";
import { useEffect, useState, useCallback } from "react";
import debounce from 'just-debounce-it'

export function useSearchFilters() {
  const filters = useSelector((state: RootState) => state.anime.filters);
  const dispatch = useDispatch();
  const [debouncedSearch, setDebouncedSearch] = useState(filters.searchTerm);

  const debouncedSetSearch = useCallback(
    debounce((search: string) => {
      setDebouncedSearch(search);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSetSearch(filters.searchTerm);
  }, [filters.searchTerm, debouncedSetSearch]);

  const queryVariables = {
    search: debouncedSearch || undefined,
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
      dispatch(setPageInfo(data.Page.pageInfo));
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