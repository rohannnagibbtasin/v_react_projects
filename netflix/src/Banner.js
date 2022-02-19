import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';
import requests from './request';

export default function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const respone = await axios.get(requests.fetchTrending);
            setMovie(
                respone.data.results[Math.floor(Math.random() * respone.data.results.length - 1)]
            );
        }
        fetchData();
    }, []);
    // eslint-disable-next-line no-unused-vars
    function truncate(str, n) {
        return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
    }
    console.log(movie);
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_title || movie.original_name}
                </h1>

                <div className="banner__buttons">
                    <button type="button" className="banner__button">
                        Play
                    </button>
                    <button type="button" className="banner__button">
                        My List
                    </button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                {/* description */}
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}
