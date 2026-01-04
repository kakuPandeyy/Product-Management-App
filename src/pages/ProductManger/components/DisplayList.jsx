import { useState } from 'react';
import '../ProductManger.css';
import { Trash2, Edit2 } from 'lucide-react';
import { useProducts } from '../../../context/ProductContext';
import Search from '../../../components/Search.jsx';
export default function DisplayList({ handleEdit, handleDelete }) {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <>
      <div className="products-wrapper">
        <Search setFilteredProducts={setFilteredProducts} />
        {filteredProducts.length === 0 ? (
          <div className="products-card empty-state">
            <p>No products yet. Add your first product!</p>
          </div>
        ) : (
          <div className="products-content">
            <h2 className="products-title">Products ({products.length})</h2>
            <div className="products-list">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <div className="product-title-section">
                      <h3 className="product-name">{product.name}</h3>
                      <span className="product-category">
                        {product.category}
                      </span>
                    </div>
                    <div className="product-actions">
                      <button
                        onClick={() => handleEdit(product)}
                        className="btn-icon btn-edit"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn-icon btn-delete"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="detail-item">
                      <p className="detail-label">Price</p>
                      <p className="detail-value">{product.price}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Stock</p>
                      <p
                        className={`detail-value ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}
                      >
                        {product.stock} units
                      </p>
                    </div>
                  </div>

                  {product.description && (
                    <p className="product-description">{product.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
