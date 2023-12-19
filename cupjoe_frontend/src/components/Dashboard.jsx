// Dashboard.jsx

import React, { useState } from 'react';
import '../css/dashboard.css'; // Make sure to import your CSS file
import Profile from '../Images/Last profile.png';
import Logo from '../Images/logo cup.png';
const Dashboard = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(true);
  const [emptyCategoryMessageVisible, setEmptyCategoryMessageVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // Add this line for error message

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
    toggleCard("totalProductCard");
  };

  const showTotalBill = () => {
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
        <br />
        <a href="#" onClick={openCategoryModal} className="category-link">
          Manage category
        </a>
        <br />
        <a href="#" className="order-link">
          <span className="text">Manage Order</span>
        </a>
        <br />
        <a href="#" onClick={showTotalProduct} className="product-link">
          Manage Product
        </a>
        <br />
        <a href="#" onClick={showTotalBill} className="Bill-link">
          View Bill
        </a>
        <br />
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
      </main>
    </div>
  );
};

export default Dashboard;
