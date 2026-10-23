import React from 'react'

function SearchBar({search, onSearchChange}) {
  return (
    <div>
       <input
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Notlarda ara..."
      className="w-full border border-stone-300 rounded-lg px-3 py-2 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-amber-300"
    />
    </div>
  )
}

export default SearchBar
