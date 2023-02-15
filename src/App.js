import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PARTS
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';

import Login from './Login';
import Home from './user/Home';
import Products from './user/Products';
import Detail from './user/Detail';
import Cart from './user/Cart';

import Dashboard from './admin/AdminDashboard';
import AddUser from './admin/AddUser';
import AdminProducts from './admin/AdminProducts';
import AddProduct from './admin/AddProduct';
import SideBar from './parts/AdminSide';
import About from './user/About';
import EditProduct from './admin/UpdateProduct';
import EditUser from './admin/UpdateUser';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/' element={
          <div className="App">
            <Navbar />
            <Home />
            <Footer />
          </div>
        } />

        <Route path='login' element={<Login />} />

        <Route path='products' element={
          <div className="App">
            <Navbar />
            <Products />
            <Footer />
          </div>
        } />

        <Route path='about' element={
          <div className="App">
            <Navbar />
            <About />
            <Footer />
          </div>
        } />

        <Route path='cart' element={
          <div className="App">
            <Navbar />
            <Cart />
            <Footer />
          </div>
        } />

        <Route path='products/:id' element={
          <div className="App">
            <Navbar />
            <Detail />
            <Footer />
          </div>
        } />

        <Route path='admin' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <Dashboard />
            </div>
          </div>
        }>
        </Route>

        <Route path='admin/products' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <AdminProducts />
            </div>
          </div>
        } />

        <Route path='admin/addProduct' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <AddProduct />
            </div>
          </div>
        } />
        <Route path='admin/user/:id' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <EditUser />
            </div>
          </div>
        } />

        <Route path='admin/addUser' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <AddUser />
            </div>
          </div>
        } />
        <Route path='admin/products/:id' element={
          <div className="App">
            <div className="row g-0">
              <SideBar />
              <EditProduct />
            </div>
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;
