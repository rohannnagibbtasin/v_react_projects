import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

const st = {
    overflowY: 'hidden',
    overflowX: 'scroll',
};
const baseUrl = 'https://image.tmdb.org/t/p/w500/';
export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" style={st}>
                {movies.map((movie) => (
                    <img
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={Math.random()}
                    />
                ))}
            </div>
            {/* container posters  */}
        </div>
    );
}
