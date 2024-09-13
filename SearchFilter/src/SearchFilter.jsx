import React, { useState } from 'react';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Honeydew',
];

const SearchFilter = () => {
  const [query, setQuery] = useState('');

  // Filter items based on the query
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;