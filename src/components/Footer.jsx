function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>
            Auto<span>Mart</span>
          </h2>

          <p>
            Your trusted platform for buying and selling second-hand
            vehicles.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/vehicles">Buy Vehicle</a>
          <a href="/sell">Sell Vehicle</a>
          <a href="/compare">Compare</a>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <a href="/contact">Contact Us</a>
          <a href="/favorites">Favorites</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Hyderabad, India</p>
          <p>support@automart.com</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 AutoMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;