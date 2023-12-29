// Dashboard.jsx

import React, { useState } from 'react';
import '../css/dashboard.css'; // Make sure to import your CSS file
import Profile from '../Images/profile.png';
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
  const [profilePopUpVisible, setProfilePopUpVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [categoryList, setCategoryList] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add more categories as needed
  ]);
  const [addCategoryFormVisible, setAddCategoryFormVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [billModalVisible, setBillModalVisible] = useState(false);
  const [billList, setBillList] = useState([]); // Assuming bill data structure

  

  
  const handleAddCategory = () => {
    // Validate input fields
    setAddCategoryFormVisible(false);
  };
  
  

  const showTotalProduct = () => {
    // Add logic to fetch and set product list (e.g., from the server)
    // For now, let's assume productList is an array of product objects
    setProductList([
      { id: 1, name: 'Product 1', category: 'Category 1', description: 'Description 1', price: 10.0 },
      { id: 2, name: 'Product 2', category: 'Category 2', description: 'Description 2', price: 15.0 },
      // Add more products as needed
    ]);

    // Show product-related elements
    closeCategoryModal(true);
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
    setProfilePopUpVisible(!profilePopUpVisible);
    setChangePasswordVisible(false);
  };
  const toggleChangePassword = () => {
    setChangePasswordVisible(!changePasswordVisible);
  };

  const handleChangePassword = () => {
    // Implement logic to handle password change
    alert('Password changed successfully!');
    toggleChangePassword(); // Close the change password form
  };

  const handleLogout = () => {
    // Implement logic for logout (e.g., redirect to login page, clear session)
    alert('Logged out successfully!');
  };
 
  const showDashboard = () => {
    toggleCard("dashboardCard");
    toggleCard("totalProductCard");  
    toggleCard("totalBillCard");
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
    closeProductModal(true);
    
  };

  const closeCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  const addCategory = () => {
    // Set the visibility of the add category form
    setAddCategoryFormVisible(true);
  };
  
  
  
  const deleteCategory =()=>{
    var categoryDetailsVisible = false;
    alert("Delete category functionality to be implemented.");
    closeCategoryModal();
  }

 
  const editCategory =()=>{
    alert("Edit category functionality to be implemented.");
    closeCategoryModal();
  }
  const showTotalBill = () => {
    // Fetch bill data or simulate fetching
    setBillList([
      {
        id: 1,
        name: 'Siddharth',
        email: '',
        contactNumber: '',
        paymentMethod: 'Credit Card',
        total: 50.0,
      },
      // Add more bills as needed
    ]);
    
  
    // Update the bill list with the formatted values
   
    closeCategoryModal();
    closeProductModal();
    setBillModalVisible(true);
   
  };
  const handleSearchBill = () => {
  };
  
  const closeBillModal = () => {
    setBillModalVisible(false);
  };
  
  
  return (
    <div>
      <header>
        <img src={Logo} alt="Icon" />
        <h1>Cup Joe</h1>
      </header>
      
      <div className="logo-container">
        <img src={Profile} alt="Logo" id="logo" onClick={toggleProfile} />
        
      </div>
      {profilePopUpVisible && (
          <div className="profile-popup">
            <button onClick={toggleChangePassword}>Change Password</button>
            <button className='button2 icon-button' onClick={handleLogout}>Logout</button>
          </div>
        )}


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

        {categoryModalVisible && (
      <div className="category-modal">
     
        <div className="category-form">
        <h3>Manage Category</h3>
      <div className="search-category">
        <input type="text" id="searchCategory" placeholder="Search for categories..." />
        <button className="barsearch">Search</button>
        <button className="add-category" onClick={() => setAddCategoryFormVisible(!addCategoryFormVisible)}>Add Category</button>
      </div>
      {addCategoryFormVisible && (
  <div className="add-category-form">
    <label htmlFor="categoryName">Category Name:</label>
    <input type="text" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
    <button onClick={handleAddCategory}>Add Category</button>
    <button onClick={() => setAddCategoryFormVisible(false)}>Close</button>
  </div>
)}


      <table className="category-table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your category list and render each category */}
          {categoryList.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button onClick={() => editCategory(category)}>Edit</button>
                <button onClick={() => deleteCategory(category)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='close-category' onClick={closeCategoryModal}>Close</button>
    </div>

   
  </div>
    )}
{/* Manage product */}

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
      {/* View bill */}
{billModalVisible && (
  <div className="bill-modal">
    <h3>View Bill</h3>
    {/* Search bar */}
    <div className="bill-search">
      <input type="text" id="searchBill" placeholder="Search for bills..." />
      <button className='Searchill' onClick={handleSearchBill}>Search</button>
    </div>

    {/* Bill table */}
    <table className="bill-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Payment Method</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {billList.map((bill) => (
          <tr key={bill.id}>
            <td>{bill.name}</td>
            <td>{bill.email}</td>
            <td>{bill.contactNumber}</td>
            <td>{bill.paymentMethod}</td>
            <td>${bill.total.toFixed(2)}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Close button */}
    <button onClick={closeBillModal}>Close</button>
  </div>
)}

      


      </main>
    </div>
  );
};

export default Dashboard;
