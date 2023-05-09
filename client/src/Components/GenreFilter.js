import React, { useState, useEffect } from 'react';

export default function GenreFilter() {
    const [manga, setManga] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/manga');
            const data = await response.json();
            setManga(data.mangas);

            // Extract unique genres
            const uniqueGenres = new Set();
            data.mangas.forEach(manga => {
                manga.genres.forEach(genre => uniqueGenres.add(genre));
            });
            setGenres([...uniqueGenres]);
        }
        fetchData();
    }, []);

    return (
        <div>
            <label>Choose a genre: </label>
            <select>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
}
