// src/components/Search.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const query = useQuery();
  const searchQuery = query.get('query');

  return <div className="search">Search Results for: {searchQuery}</div>;
};

export default Search;
