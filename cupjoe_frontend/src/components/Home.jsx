// src/components/Home.jsx
import axios from 'axios';
import React from "react";

import Logo from "../Images/Depositphotos_106586660_xl-2015 copy 3.jpeg";
import {jwtDecode} from 'jwt-decode';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styles from "./Home.module.css";



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
  hideForgotPassword = () => {
    this.setState({ forgotPassword: false });
  };
  

  handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;

    try {
      const response = await axios.post("http://localhost:8087/user/forgot-password", {"email":email});

      console.log("Password reset email sent:", response.data);
      alert(response.data.message) 
      
    } catch (error) {
      console.error("Forgot password request failed:", error.response.data);
            alert(error.response.data.message) 

    }
  };

  handleRegistrationSubmit = async (event) => {
    event.preventDefault();
  
    const { username, phone, email, password } = this.state;
  
    try {
      const response = await axios.post("http://localhost:8087/user/signup",  {"name":username,"contactNumber":parseInt(phone),"email":email,"password":password});
      console.log(response);
      console.log("Registration successful:", response.data);
      alert(response.data.message,this.showLogin) 
      
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      alert(error.response.data.message) }

      window.location.href ="/"


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
      if (decodedToken.role === 'admin') {
        console.log("admin:");
        this.props.history.push('/dash');
       
      } else {
        console.log("user:");
        this.props.history.push('/Udash');
        
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert(error.response.data.message) 
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
        <div className={styles.backdrop}>
          {forgotPassword ? (
            <div
              className={`${styles.container} ${styles.forgotpassword}`}
              id="forgotPasswordContainer"
            >
              <h1 className={styles.sign_up}>Forgot Password</h1>
              <form onSubmit={this.handleForgotPasswordSubmit}>
                <div className={styles.form_group}>
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
                <button type="button" onClick={() => this.hideForgotPassword()}>Cancel</button>

              </form>
            </div>
          ) : (
            <div
            className={`${styles.container} ${
              showRegistration ? styles.signup : styles.login
            }`}
              id="mainContainer"
            >
              <h1 className={styles.sign_up}>
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
                  <div className={styles.form_group}>
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
                  <div className={styles.form_group}>
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
                  <div className="styles.form_group">
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
                  <div className={styles.form_group}>
                    <label htmlFor="password">Password:</label>
                    <div className={styles.password_container}>
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
                        className={styles.show_password_btn}
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
                  <div className={styles.form_group}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className={styles.password_container}>
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
                        className={styles.show_password_btn}
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
                  <div className={styles.form_group}>
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
                  <div className={styles.form_group}>
                    <label htmlFor="password">Password:</label>
                    <div className={styles.password_container}>
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
                        className={styles.show_password_btn}
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
                <div className={styles.forgot_password_link}>
                  <span
                    onClick={this.showForgotPassword}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </span>
                </div>
              )}

              <div className={styles.back_to_login}>
                <p className={styles.already_have_an_account}>
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
      </>
    );
  }
}

export default Home;
