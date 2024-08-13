import { useState, useEffect } from "react";
import { fetchMovies, fetchMovies2024 } from "../api/movieAPI";

const LOCAL_STORAGE_KEYS = {
  MOVIES_2024: "movies2024",
  SEARCH_RESULTS: "searchResults",
};

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [movies2024, setMovies2024] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [horror, setHorror] = useState(false);

  useEffect(() => {
    const getMovies2024 = async () => {
      const storedMovies2024 = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.MOVIES_2024)
      );
      if (storedMovies2024) {
        setMovies2024(storedMovies2024);
      } else {
        const fetchedMovies2024 = await fetchMovies2024();
        setMovies2024(fetchedMovies2024);
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.MOVIES_2024,
          JSON.stringify(fetchedMovies2024)
        );
      }
    };
    getMovies2024();
  }, []);

  const searchMovies = async (title) => {
    if (title.trim() === "" && !horror) {
      setMovies([]);
      return;
    }

    const storedSearchResults = JSON.parse(
      localStorage.getItem(`${LOCAL_STORAGE_KEYS.SEARCH_RESULTS}_${title}`)
    );

    if (navigator.onLine) {
      const fetchedMovies = await fetchMovies(title);
      setMovies(fetchedMovies);
      localStorage.setItem(
        `${LOCAL_STORAGE_KEYS.SEARCH_RESULTS}_${title}`,
        JSON.stringify(fetchedMovies)
      );
    } else {
      if (storedSearchResults) {
        setMovies(storedSearchResults);
      } else {
        setMovies([]);
      }
    }
  };

  const handleSearch = () => {
    searchMovies(searchTerm);
    setSearched(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Load search results from local storage when offline and search term changes
  useEffect(() => {
    if (!navigator.onLine) {
      const storedSearchResults = JSON.parse(
        localStorage.getItem(
          `${LOCAL_STORAGE_KEYS.SEARCH_RESULTS}_${searchTerm}`
        )
      );
      if (storedSearchResults) {
        setMovies(storedSearchResults);
      } else {
        setMovies([]);
      }
    }
  }, [searchTerm]);

  // Load horror movies when `horror` is true
  useEffect(() => {
    if (horror) {
      searchMovies("horror");
    } else {
      setMovies([]); // Clear movies if horror is not enabled
    }
  }, [horror]);

//   console.log(movies)

  return {
    movies,
    movies2024,
    searchMovies,
    searchTerm,
    setSearchTerm,
    searched,
    setSearched,
    handleSearch,
    handleKeyDown,
    setHorror,
    horror,
  };
};

export default useMovieSearch;
