// Dashboard.jsx

import React, { useState } from 'react';
import '../css/dashboard.css'; // Make sure to import your CSS file
import Profile from '../Images/man.jpg';
import Logo from '../Images/cup.png';
const Dashboard = () => {
  const [profileVisible, setProfileVisible] = useState("");
  const [categoryModalVisible, setCategoryModalVisible] = useState("");
  const [emptyCategoryMessageVisible, setEmptyCategoryMessageVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // Add this line for error message
  const [productModalVisible, setProductModalVisible] = useState(false);
 // Add these state variables
  const [addProductName, setAddProductName] = useState('');
  const [addProductDescription, setAddProductDescription] = useState('');
  const [addProductCategory, setAddProductCategory] = useState('');
  const [addProductPrice, setAddProductPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [productList, setProductList] = useState([]); 
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);

  const showTotalProduct = () => {
    // Add logic to fetch and set product list (e.g., from the server)
    // For now, let's assume productList is an array of product objects
    setProductList([
      { id: 1, name: 'Product 1', category: 'Category 1', description: 'Description 1', price: 10.0 },
      { id: 2, name: 'Product 2', category: 'Category 2', description: 'Description 2', price: 15.0 },
      // Add more products as needed
    ]);

    // Show product-related elements
    setProductModalVisible(true);
  };
  const closeProductModal = () => {
    setProductModalVisible(false);
  };
// Example: JavaScript code that scrolls to a specific position on page load
const handleAddProduct = () => {
  // Validate input fields
  closeCategoryModal();
  setAddProductName('');
  setAddProductDescription('');
  setAddProductCategory('');
  setAddProductPrice('');

  // Close the add product form
  setAddProductFormVisible(false);
  
  
};

const handleSearch =()=>{

}

  const toggleProfile = () => {
    var profileContainer = document.getElementById("profileContainer");
    if (profileContainer.style.display === "none" || profileContainer.style.display === "") {
        profileContainer.style.display = "flex";
    } else {
        profileContainer.style.display = "none";
    }
  };
  const editProfile = (type) => {
    const newName = prompt(`Enter new name for ${type}:`);
    const newEmail = prompt(`Enter new email for ${type}:`);
    
    // Add logic to update profile data in state or send to server
  };
  const showDashboard = () => {
    toggleCard("dashboardCard");
    toggleCard("totalProductCard");  
    toggleCard("totalBillCard");
  };
  const showTotalBill = () => {
    
 
  };
  const toggleCard = (cardId) => {
    var card = document.getElementById(cardId);
            if (card.style.display === "none") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
  };
  const openCategoryModal = (event) => {
    event.preventDefault();
    setCategoryModalVisible(true);
  };

  const closeCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  const addCategory = () => {
    const categoryNameInput = document.getElementById("categoryName");
    const categoryName = categoryNameInput.value.trim();
  
    if (categoryName !== '') {
      // Add logic to add the category (e.g., update state, send to server)
      alert(`Category added: ${categoryName}`);
      closeCategoryModal();
      setErrorMessage("");
    } else {
      setErrorMessage("Category name cannot be empty.");
      setEmptyCategoryMessageVisible(true);
    }
  };
  
  
  const deleteCategory =()=>{
    var categoryDetailsVisible = false;
    alert("Delete category functionality to be implemented.");
    closeCategoryModal();
  }

  const closeEmptyCategory = () => {
    var emptyCategoryMessage = document.getElementById("emptyCategoryMessage");
    emptyCategoryMessage.style.display = "none";
  };
  const editCategory =()=>{
    alert("Edit category functionality to be implemented.");
    closeCategoryModal();
  }
  const toggleCategoryDetails =()=>{
    var categoryDetailsContainer = document.getElementById("categoryDetailsContainer");
    if (categoryDetailsContainer.style.display === "none" || categoryDetailsContainer.style.display === "") {
        categoryDetailsContainer.style.display = "block";
    } else {
        categoryDetailsContainer.style.display = "none";
    }
  }
  return (
    <div>
      <header>
        <img src={Logo} alt="Icon" />
        <h1>Cup Joe</h1>
        
      </header>
      
      <div className="logo-container">
        <img src={Profile} alt="Logo" id="logo" onClick={toggleProfile} />
      </div>

       
       <div className="profile-container" id="profileContainer">
       
        <div className="profile" id="customerProfile">
          <h3>Customer Profile</h3>
          <p id="customerName">Customer Name: Jane Doe</p>
          <p id="customerEmail">Email: customer@example.com</p>
          <button onClick={() => editProfile('Customer')}>Edit Profile</button>
        </div>
      </div>

      <nav>
        <a href="#" onClick={showDashboard} className="dashboard-link">
          Dashboard
        </a>
        
        <a href="#" onClick={openCategoryModal} className="category-link">
          Manage category
        </a>
        
        <a href="#" className="order-link">
          <span className="text">Manage Order</span>
        </a>
        
        <a href="#" onClick={showTotalProduct} className="product-link">
          Manage Product
        </a>
        
        <a href="#" onClick={showTotalBill} className="Bill-link">
          View Bill
        </a>
        
        <a href="#" className="user-link">
          <span className="text">Manage User</span>
        </a>
        
        <a href="#" className="logout-link">
          <span className="text">Logout</span>
        </a>
      </nav>
      <main>
        <div className="dashboard-card" id="dashboardCard">
          <h2>Total category </h2>
          <p></p>
        </div>

        <div className="dashboard-card" id="totalProductCard">
          <h2>Total product </h2>
          <p></p>
        </div>

        <div className="dashboard-card" id="totalBillCard">
          <h2>Total bill</h2>
        </div>

{categoryModalVisible &&  (
        <div className='categorypart' id="categoryModal">
          <h3>Manage Category</h3>

          <label htmlFor="categoryName">Category Name:</label>
          <input type="text" id="categoryName" />
          <button onClick={addCategory}>Add Category</button>
          <button onClick={editCategory}>Edit Category</button>
          <button onClick={deleteCategory}>Delete Category</button>
          <button onClick={closeCategoryModal}>Close</button>
        </div>
)}
   {productModalVisible && (
      <div className="product-modal">
        <h3>Manage product</h3>
         {/* Wider Search bar similar to Google */}
            <div className="google-search-wide">
              <input type="text" id="searchProduct" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for products..." />
              <button className='search' onClick={handleSearch}>Search</button>
              <button className="add-product-button" onClick={() => setAddProductFormVisible(!addProductFormVisible)}>Add Product</button>
            </div>
            {addProductFormVisible && (
              
        <div className="add-product-form">
          <form>
            <label htmlFor="addProductName">Name:</label>
            <input type="text" id="addProductName" value={addProductName} onChange={(e) => setAddProductName(e.target.value)} />

            <label htmlFor="addProductDescription">Description:</label>
            <textarea type="text" id="addProductDescription" value={addProductDescription} onChange={(e) => setAddProductDescription(e.target.value)} />

            <label htmlFor="addProductCategory">Category:</label>
            <select id="addProductCategory" value={addProductCategory} onChange={(e) => setAddProductCategory(e.target.value)}>
              {/* Add options dynamically based on your category data */}
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor="addProductPrice">Price:</label>
            <input type="text" id="addProductPrice" value={addProductPrice} onChange={(e) => setAddProductPrice(e.target.value)} />

            <button type="button" onClick={handleAddProduct}>Add Product</button>
            <button type="button" onClick={() => setAddProductFormVisible(false)}>Cancel</button>
          </form>
        </div>
      )}
            {/* Wider Product table */}
            <table className="product-table-wide">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add product button */}
            <div>
              <button onClick={closeProductModal}>Close</button>
            </div>
          </div>
        )}


      </main>
    </div>
  );
};

export default Dashboard;
