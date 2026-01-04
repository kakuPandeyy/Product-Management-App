import { useNavigate } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import './ProductManagerCard.css';

const ProductManagerCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="pm-card"
      onClick={() => navigate('/ProductManger')}
      role="button"
    >
      <div className="pm-card-content">
        <h3 className="pm-card-title">Product Manager</h3>
        <p className="pm-card-desc">Add product, edit and Delete Products</p>
        <div
          className="pm-card-action "
          style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}
        >
          {' '}
          <LayoutGrid /> <span>Go to Dashboard →</span>
        </div>
      </div>
    </div>
  );
};

export default ProductManagerCard;
