import React from 'react';
import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c3 from './images/c3.jpeg';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';  
import img5 from './images/img5.jpeg';  
import img6 from './images/img6.jpeg';  
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Home = () => {
  // Define products array
  const products = [
    {
      id: 1,
      image: img1,
      name: "Wooden Center Table",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 23540.00,
    },
    {
      id: 2,
      image: img2,
      name: "Glass Dining Table",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 15000.00,
    },
    {
      id: 3,
      image: img3,
      name: "Modern Sofa Set",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 35000.00,
    },
    {
      id: 4,
      image: img4,
      name: "Modern Sofa Set",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 35000.00,
    },
    {
      id: 5,
      image: img5,
      name: "Modern Sofa Set",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 35000.00,
    },
    {
      id: 6,
      image: img6,
      name: "Modern Sofa Set",
      description: '<i class="fas fa-box"></i> Free Delivery',
      price: 35000.00,
    },
  ];

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Section */}
      <br></br>
      <h2>Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-md-4" key={product.id}>
              <div className="product">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                <p><strong>Price: ${product.price}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};
<br></br>
export default Home;

// AboutUs.js
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are a team of passionate professionals committed to delivering the best service and products to our customers. With years of experience in the industry, we focus on quality, innovation, and customer satisfaction.
        </p>
        <p>
          Our mission is to provide high-quality products that exceed customer expectations while maintaining a strong commitment to sustainability and ethical business practices.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Customer Focus</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Sustainability</li>
        </ul>
        <h3>Our Team</h3>
        <p>
          Our team consists of experts from various fields, including design, technology, and customer service. Together, we work towards a common goal: making your experience better.
        </p>
      </div>
    </section>
  );
};

// Footer.js
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a furniture company offering high-quality and modern designs
            for your home. Our mission is to provide comfort and style at an affordable price.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: support@furniturestore.com</li>
            <li>Address: 123 Main St, Cityville, Country</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FurnitureStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
