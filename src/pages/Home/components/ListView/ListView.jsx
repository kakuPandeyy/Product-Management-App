import './ListView.css';

const CATEGORY_COLORS = {
  Toys: '#e51e1eff',
  Sports: '#F5C857',
  Clothing: '#F25912',
  Electronics: '#5101ffff',
  Books: '#0095ffff',
  Home: '#41A67E',
};
export default function ListView({ filteredProducts }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table-header-row">
            <th className="table-header">ID</th>
            <th className="table-header">Product Name</th>
            <th className="table-header">Category</th>
            <th className="table-header">Price</th>
            <th className="table-header">Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr
              key={product.id}
              className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
              style={{ '--flag-color': CATEGORY_COLORS[product.category] }}
            >
              <td className="table-cell">{product.id}</td>
              <td className="table-cell name-cell">{product.name}</td>
              <td className="table-cell category-cell">{product.category}</td>
              <td className="table-cell price-cell">{product.price}</td>
              <td
                className={`table-cell ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}
              >
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
