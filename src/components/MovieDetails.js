import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/App.css'
// import Slider from 'react-slick';

const API_URL = "https://www.omdbapi.com?apikey=714ad8f7";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`${API_URL}&i=${id}`);
            const data = await response.json();
            setMovie(data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <h2 style={{color:'grey'}}><strong>Loading...</strong></h2>;

    return (
        <div className="movie-details">
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <div className='desc'>
            <p style={{color: 'silver'}}><strong>Year:</strong> {movie.Year}</p>
            <p style={{color: 'silver'}}><strong>Genre:</strong> {movie.Genre}</p>
            <p style={{color: 'silver'}}><strong>Director:</strong> {movie.Director}</p>
            <p style={{color: 'silver'}}><strong>Plot:</strong> {movie.Plot}</p>
            
            </div>
        </div>
    );
};

export default MovieDetails;
