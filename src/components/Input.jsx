import React, { useState, useEffect } from 'react';
import Map from './Map';

function Input() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch location suggestions when the query changes
    const fetchLocations = async () => {
      if (query.length > 2) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setSuggestions(data);
        console.log(data)
      } else {
        setSuggestions([]);
      }
    };

    fetchLocations();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.display_name);
    setSuggestions([]);
    // Optionally, you can set the user's location here
    // setUserLocation({ lat: suggestion.lat, lon: suggestion.lon });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <input
        type="text"
        placeholder="Where to?"
        className="text-2xl font-bold p-4 rounded-lg shadow-lg w-full max-w-md"
        value={query}
        onChange={handleInputChange}
      />

      {/* Display suggestions */}
      {suggestions.length > 0 && (
        <ul className="bg-white border rounded w-full max-w-md mt-2">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}

      <Map />
    </div>
  );
}

export default Input;