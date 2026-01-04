import { useState } from 'react';
import {  Plus } from 'lucide-react';
import './ProductManger.css';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import DisplayList from './components/DisplayList.jsx';
import HomeNav from './components/HomeNav';
import { toast } from "react-toastify";


const ProductManger = () => {
  const { products, setProducts } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home',
    'Sports',
    'Toys',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (
      formData.stock &&
      (formData.stock < 0 || !Number.isInteger(Number(formData.stock)))
    ) {
      newErrors.stock = 'Stock must be a non-negative integer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (editingId !== null) {
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: formData.name,
                price: Number(formData.price),
                category: formData.category,
                stock: formData.stock ? Number(formData.stock) : 0,
                description: formData.description,
              }
            : p
        )
      );
      setEditingId(null);
      toast.info("Product updated successfully!");
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        stock: formData.stock ? Number(formData.stock) : 0,
        description: formData.description,
      };
      setProducts((prev) => [...prev, newProduct].sort((a, b) => b.id - a.id));
       toast.success("Product added successfully!");
    }

    setFormData({
      name: '',
      price: '',
      category: '',
      stock: '',
      description: '',
    });
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      description: product.description,
    });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.warning(" produnt is deleted !");
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      price: '',
      category: '',
      stock: '',
      description: '',
    });
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="header">
          <HomeNav />
          <h1>Product Manager</h1>
          <p>Add, edit, and manage your products</p>
        </div>

        <div className="grid-wrapper">
          {/* Form Section */}
          <div className="form-wrapper">
            <div className="form-card">
              <h2 className="form-title">
                <Plus size={20} />
                {editingId ? 'Edit Product' : 'Add New Product'}
              </h2>

              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Product name"
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              {/* Price Field */}
              <div className="form-group">
                <label className="form-label">
                  Price <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className={`form-input ${errors.price ? 'input-error' : ''}`}
                  placeholder="0.00"
                />
                {errors.price && (
                  <p className="error-message">{errors.price}</p>
                )}
              </div>

              {/* Category Field */}
              <div className="form-group">
                <label className="form-label">
                  Category <span className="required">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`form-input form-select ${errors.category ? 'input-error' : ''}`}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="error-message">{errors.category}</p>
                )}
              </div>

              {/* Stock Field */}
              <div className="form-group">
                <label className="form-label">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  min="0"
                  className={`form-input ${errors.stock ? 'input-error' : ''}`}
                  placeholder="0"
                />
                {errors.stock && (
                  <p className="error-message">{errors.stock}</p>
                )}
              </div>

              {/* Description Field */}
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="Product description (optional)"
                  rows="3"
                />
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button
                  onClick={handleSubmit}
                  className={`btn ${editingId ? 'btn-tri' : 'btn-primary'}  `}
                >
                  {editingId ? 'Update' : 'Add Product'}
                </button>
                {editingId && (
                  <button onClick={handleCancel} className="btn btn-secondary">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products List Section */}

          <DisplayList handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default ProductManger;
