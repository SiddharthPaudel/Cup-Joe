// src/components/Home.jsx

import React from "react";
import styles from "./Home.module.css"; // Import your styles if needed

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
      phone: "",
      wrongPassword: false,
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
    const { username, password } = this.state;

    // Simulating login logic (replace this with your actual login logic)
    if (username === "demoUser" && password === "demoPassword") {
      // Successful login logic
      console.log("Login successful!");
      // Reset the wrongPassword state if the login is successful
      this.setState({ wrongPassword: false });
    } else {
      // Wrong password alert
      alert("Wrong password. Please try again.");
      // Set the wrongPassword state to true
      this.setState({ wrongPassword: true });
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
      wrongPassword,
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
                <button type="button" onClick={this.hideForgotPassword}>
                  Cancel
                </button>
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

              {wrongPassword && (
                <div className={styles.wrong_password_alert}>
                  Wrong password. Please try again.
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
