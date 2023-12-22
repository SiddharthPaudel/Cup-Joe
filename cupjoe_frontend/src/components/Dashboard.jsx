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
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isProductAdded, setProductAdded] = useState(false);
  // const showManageProduct = () => {
  //   setProductModalVisible(true);
  // };
  const closeProductModal = () => {
    setProductModalVisible(false);
  };
// Example: JavaScript code that scrolls to a specific position on page load
window.onload = function() {
  window.scrollTo(0, 0);
};


  const handleAddProduct = () => {
    if (!productName.trim()) {
      setErrorMessage("Product name cannot be empty.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
  
      return;// Set product added to false immediately for the case of an empty name

    }
  
    setProductAdded(true);
  
    // Reset the success message and error message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      setProductAdded(false);
      setErrorMessage("");
    }, 3000);
  
    // Add logic to handle adding a product (e.g., update state, send to server)
    closeProductModal();
  };
  

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

  const showTotalProduct = () => {
    setProductModalVisible(true);
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
        <h3>Add Product</h3>

        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="Name" value={productName} onChange={(e) => setProductName(e.target.value)} />

        <label htmlFor="productPrice">Product Price:</label>
        <input type="text" id="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
       <br/>
       <br/>
        <label htmlFor="productDescription">Product Description:</label>
        <textarea id="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />

        <label htmlFor="categoryDropdown">Category:</label>
        <select id="categoryDropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {/* Add options dynamically based on your categories */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more options as needed */}
        </select>

        <div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
    <div className='success-box'>
    {isProductAdded && productName.trim() && (
        <p>Product added successfully!</p>
      )}
      {errorMessage && (
        <p>{errorMessage}</p>
      )}
    </div>
        <br/>
        <button onClick={closeProductModal}>Close</button>
      </div>
    )}

      </main>
    </div>
  );
};

export default Dashboard;
