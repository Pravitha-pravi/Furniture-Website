import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.heading}>Furniture Website</h1>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            <i className="fas fa-house" style={styles.icon}></i> Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/blogs" style={styles.navLink}>
            <i className="fab fa-product-hunt" style={styles.icon}></i> Products
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.navLink}>
            <i className="fas fa-blog" style={styles.icon}></i> Blogs
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Contact" style={styles.navLink}>
            <i className="fas fa-phone" style={styles.icon}></i> Contact
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>
            <i className="fas fa-sign-in-alt" style={styles.icon}></i> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  heading: {
    fontSize: "36px", // Set font size
    fontWeight: "bold", // Make the text bold
    color: "white", // Set the text color to white
    textAlign: "left", // Align the text to the left
    marginTop: "20px", // Add some space above the heading
    marginLeft: "20px", // Add some space from the left side of the page
    fontFamily: "'Arial', sans-serif", // Choose a clean, modern font
  },

  navbar: {
    backgroundColor: "#333",
    paddingTop: "30px",
    marginBottom: "30px", // Corrected to camelCase
    display: "flex",
    justifyContent: "space-between", // Ensures heading and nav links are spaced
    alignItems: "center",
    padding: "0 20px", // Add padding for spacing
    flexWrap: "wrap", // Allow navbar items to wrap on small screens
  },

  navList: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },

  navItem: {
    margin: "0 15px",
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    display: "flex", // Use flex to align text and icons
    alignItems: "center", // Align icon and text horizontally
  },

  icon: {
    marginRight: "8px", // Add space between icon and text
  }
};

export default Navbar;