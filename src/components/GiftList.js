// GifList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GifList = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your Giphy API key
        const apiKey = 'rrHchsZFn0SPHC9T8lPPlfKTMb6u6FrM';
        const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`);
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    };

    fetchGifs();
  }, []);

  return (
    <div>
      <h1>Trending GIFs</h1>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifList;
