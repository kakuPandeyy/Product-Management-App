import { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import { useProducts } from '../context/ProductContext';
import './Search.css';

export default function Search({ setFilteredProducts, setCurrentPage }) {
  const { products } = useProducts();
  const [searchMode, setSearchMode] = useState('realtime');
  const [searchTerm, setSearchTerm] = useState('');

  const debounceTimer = useRef(null);

  useEffect(() => {
    if (searchMode === 'realtime') {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setCurrentPage && setCurrentPage(1);
    }
  }, [searchTerm, searchMode, products]);

  // Debounced search
  useEffect(() => {
    if (searchMode === 'debounce') {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage && setCurrentPage(1);
      }, 500);

      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
      };
    }
  }, [searchTerm, searchMode, products]);

  return (
    <div className="controls-section">
      <div className="search-container">
        <Toggle
          label="Search Mode"
          value={searchMode}
          onChange={setSearchMode}
          options={[
            { label: 'Real-time', value: 'realtime' },
            { label: 'Debounce', value: 'debounce' },
          ]}
          className="display-toggle"
        />
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-mode-badge">
            {searchMode === 'realtime'
              ? '⚡ Real-time'
              : '⏱️ Debounced (500ms)'}
          </span>
        </div>
      </div>
    </div>
  );
}
