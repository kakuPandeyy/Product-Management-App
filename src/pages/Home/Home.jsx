import { useState } from 'react';
import { Grid3x3, IdCard } from 'lucide-react';
import Search from '../../components/Search.jsx';
import './Home.css';
import Toggle from '../../components/Toggle';
import ProductManagerCard from './components/ProductManagerCard/ProductManagerCard.jsx';
import { useProducts } from '../../context/ProductContext';
import CardView from './components/CardView/CardView.jsx';
import ListView from './components/ListView/ListView.jsx';
import PaginationComponent from './components/Pagination/Pagination.jsx';

const Home = () => {
  const [viewMode, setViewMode] = useState('list');
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Product Catalog</h1>
      </div>

      <div className="sub-header">
        <ProductManagerCard />

        {/* seach control section */}

        <Search
          setFilteredProducts={setFilteredProducts}
          setCurrentPage={setCurrentPage}
        />
        {/* project Manger link */}
      </div>
      {/*       display section */}

      <div className="display-section ">
        <Toggle
          value={viewMode}
          onChange={setViewMode}
          options={[
            { label: 'List', value: 'list', icon: <Grid3x3 /> },
            { label: 'Card', value: 'Card', icon: <IdCard /> },
          ]}
          style={{ marginLeft: '45%', marginTop: '10px' }}
          className="display-toggle"
        />

        <div className="results-info">
          <p>{filteredProducts.length} product(s) found</p>
        </div>
        {/* view toggle */}

        {viewMode === 'list' ? (
          <ListView filteredProducts={paginatedProducts} />
        ) : (
          <CardView filteredProducts={paginatedProducts} />
        )}

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <p>No products found matching </p>
          </div>
        )}

        {/* Pagination */}

        {filteredProducts.length > 0 && (
          <PaginationComponent
            currentPage={currentPage}
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
