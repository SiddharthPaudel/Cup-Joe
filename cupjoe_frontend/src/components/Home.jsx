// src/components/Home.jsx

import React from "react";
import "../css/home.css"; // Import your styles if needed
// import Logo from "../Images/Depositphotos_106586660_xl-2015 copy 3.jpeg";

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

  handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    console.log("Password recovery logic for email:", this.state.email);
    // Implement password recovery logic here using this.state.email
  };

  handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Implement user registration logic here
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement user login logic here
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
      </>
    );
  }
}

export default Home;
