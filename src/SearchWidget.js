import React from 'react';

function SearchWidget({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Widgets..."
      onChange={onSearch}
    />
  );
}

export default SearchWidget;
