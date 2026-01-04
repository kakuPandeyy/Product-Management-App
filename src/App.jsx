import {  Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductManger from './pages/ProductManger/ProductManger.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <>
    
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductManger" element={<ProductManger />} />
      </Routes>
    </>
  );
}

export default App;
