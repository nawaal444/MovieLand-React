const API_URL = "https://www.omdbapi.com?apikey=714ad8f7";

export const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    return data.Search || [];
};

export const fetchMovies2024 = async () => {
    const response = await fetch(`${API_URL}&s=2024`);
    const data = await response.json();
    return data.Search || [];
};