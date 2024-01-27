// src/components/Home.jsx
import axios from 'axios';
import React from "react";
import "../css/home.css"; // Import your styles if needed
import Logo from "../Images/Depositphotos_106586660_xl-2015 copy 3.jpeg";
import {jwtDecode} from 'jwt-decode';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistration: false,
      passwordVisible: false,
      confirmPasswordVisible: false,
      forgotPassword: false,
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "", // Add phone state
    };
  }

  togglePasswordVisibility = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  showRegistration = () => {
    this.setState({ showRegistration: true, forgotPassword: false });
  };

  showLogin = () => {
    this.setState({ showRegistration: false, forgotPassword: false });
  };
  showForgotPassword = () => {
    this.setState({
      forgotPassword: true,
      showRegistration: false,
      email: "",
    });
  };

  handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;

    try {
      const response = await axios.post("http://localhost:8087/user/forgot-password", {"email":email});

      console.log("Password reset email sent:", response.data);
      
    } catch (error) {
      console.error("Forgot password request failed:", error.response.data);
      
    }
  };

  handleRegistrationSubmit = async (event) => {
    event.preventDefault();
  
    const { username, phone, email, password } = this.state;
  
    try {
      const response = await axios.post("http://localhost:8087/user/signup",  {"name":username,"contactNumber":parseInt(phone),"email":email,"password":password});
      console.log(response);
      console.log("Registration successful:", response.data);
      toast.success(response.data);
    } catch (error) {
      console.error("Registration failed:", error.response.data); 
      toast.error("Registration failed:"+error.response.data+". Please try again.");
    }
  };

  handleLoginSubmit = async (event) => {
    event.preventDefault();

    const {username, email, password } = this.state;

    try {
      const response = await axios.post("http://localhost:8087/user/login",{"email":username,"password":password});
      const token = response.data.token;

      const decodedToken = jwtDecode(token);
      localStorage.setItem('token', token);
      const decodeToken = (token) => {
        try {
          const decodedToken = jwtDecode(token);
          return decodedToken;
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };
      console.log("Login successful:", response.data);
      toast.success(response.data);
      if (decodedToken.role === 'admin') {
        console.log("admin:");
        this.props.history.push('/dash');
       
      } else {
        console.log("user:");
        this.props.history.push('/dash');
        
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      toast.error(error.response.data.message);
      
    }
  };

  render() {
    const {
      showRegistration,
      passwordVisible,
      confirmPasswordVisible,
      forgotPassword,
      email,
      username,
      password,
      confirmPassword,
      phone,
    } = this.state;

    return (
      <>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          {forgotPassword ? (
            <div
              className="container-forgotpassword"
              id="forgotPasswordContainer"
            >
              <h1 className="sign-up">Forgot Password</h1>
              <form onSubmit={this.handleForgotPasswordSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <button type="submit">Send</button>
                <button type="button" onClick={this.hideForgotPassword}>
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            <div
              className={`container ${showRegistration ? "signup" : "login"}`}
              id="mainContainer"
            >
              <h1 className="sign-up">
                {showRegistration ? "Sign Up" : "Login"}
              </h1>

              <form
                id={showRegistration ? "registrationForm" : "loginForm"}
                onSubmit={
                  showRegistration
                    ? this.handleRegistrationSubmit
                    : this.handleLoginSubmit
                }
              >
                {showRegistration && (
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      required
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                )}

                {showRegistration && (
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone Number"
                      required
                      value={phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                )}

                {showRegistration && (
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      required
                      value={username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>
                )}

                {showRegistration && (
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <span
                        className="show-password-btn"
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          this.togglePasswordVisibility("passwordVisible")
                        }
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                )}

                {showRegistration && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="password-container">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) =>
                          this.setState({ confirmPassword: e.target.value })
                        }
                      />
                      <span
                        className="show-password-btn"
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          this.togglePasswordVisibility(
                            "confirmPasswordVisible"
                          )
                        }
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                )}

                {!showRegistration && (
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      required
                      value={username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>
                )}

                {!showRegistration && (
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <span
                        className="show-password-btn"
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          this.togglePasswordVisibility("passwordVisible")
                        }
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                )}

                {showRegistration && <button type="submit">Register</button>}

                {!showRegistration && <button type="submit">Login</button>}
              </form>

              {!showRegistration && (
                <div className="forgot-password-link">
                  <span
                    onClick={this.showForgotPassword}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </span>
                </div>
              )}

              <div className="back-to-login">
                <p className="already-have-an-account">
                  {showRegistration
                    ? "Already have an account?"
                    : "Don't have an account?"}
                  <span
                    onClick={
                      showRegistration ? this.showLogin : this.showRegistration
                    }
                  >
                    {showRegistration ? "Back to Login" : "Sign Up"}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </>
    );
  }
}

export default Home;
