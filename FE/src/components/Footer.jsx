import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/about">Chi siamo</a></li>
            <li><a href="/contact">Contatti</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Termini di Servizio</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 BDoctors. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;


