import './CardView.css';

const CATEGORY_COLORS = {
  Toys: '#e51e1eff',
  Sports: '#F5C857',
  Clothing: '#F25912',
  Electronics: '#5101ffff',
  Books: '#0095ffff',
  Home: '#41A67E',
};

export default function CardView({ filteredProducts }) {
  return (
    <div className="grid-container">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="card"
          style={{ '--flag-color': CATEGORY_COLORS[product.category] }}
        >
          <span className="flag"> {product.category} </span>
          <div className="card-content">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-category">{product.category}</p>
            <p className="card-price">{product.price}</p>
            <p
              className={`card-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}
            >
              {' '}
              {product.stock > 0
                ? ` (${product.stock} in Stock)`
                : `Out of Stocks`}{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
