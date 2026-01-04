import { useNavigate } from 'react-router-dom';
import { FilePenLine,PackagePlus   } from 'lucide-react';
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
        <h3 className="pm-card-title">Product Manager <span> <FilePenLine color='#2563eb'/> </span> </h3>
        <p className="pm-card-desc">Add product, Edit and Delete Products</p>
        <div
          className="pm-card-action "
          style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}
        >
          {' '}
          <PackagePlus /> <span>Go to Dashboard →</span>
        </div>
      </div>
    </div>
  );
};

export default ProductManagerCard;
