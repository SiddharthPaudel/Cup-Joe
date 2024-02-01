// / Front.jsx
import React from "react";
import "../Images/download.jpeg";
import styles from "./Front.module.css"
function Front() {
  return (
    <div className={styles.front_body}>
      <div className={styles.new_background_image}></div>

      <header>
        <h1 className={styles.new_header}>Welcome to Cup Joe!</h1>
      </header>

      <nav className={styles.new_nav}>
        <a href="/">Sign-up/Login?</a>
      </nav>

      <main className={styles.new_nav}>
        <p>
          "Discover a symphony of flavors at Cup Joe, where passion meets
          <br />
          perfection in every cup. Our cafe is a haven for those who seek a
          sensory
          <br />
          journey through the artistry of finely crafted brews. From the initial
          steam
          <br />
          to the last lingering note, each sip is a story of dedication and
          indulgence.
          <br />
          Immerse yourself in the extraordinary world of taste, where every
          moment
          <br />
          becomes a celebration, and every cup tells a tale of craftsmanship. At
          Cup Joe,
          <br />
          we invite you to savor the exceptional one flavorful chapter at a
          time."
        </p>
      </main>

      <footer className={styles.new_footer}>&copy; 2023 Cafe Management System</footer>
    </div>
  );
}

export default Front;
