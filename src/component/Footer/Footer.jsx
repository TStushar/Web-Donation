import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">
          <div class="footer-section footer-logo">
            <img
              src="https://www.iskconpune.com/wp-content/uploads/2023/09/FOUNDER-ACHARYA.webp"
              alt="ISKCON NVCC Logo"
            />
          </div>
          <div class="footer-section footer-address">
            <h3>Address</h3>
            <a href="https://maps.app.goo.gl/eHqNPozJmfJuTDA57" target="blank">
              Address- survey, 189/3A, Bhakti Vedant, MQ34+G5P sri govindh dham,
              Swamy marg, sector 29, Ganesh Nagar, Ravet, Pimpri-Chinchwad,
              Maharashtra 411044
            </a>
          </div>
          <div class="footer-section footer-contact">
            <h3>Contact</h3>
            <p>
              <a href="tel:+89757 65947">Phone: +91 89757 65947</a>
            </p>
            <p>
              <a href="mailto:haripriyaseva@gmail.com">
                Email: haripriyaseva@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div class="footer-bottom">
        <p>Copyright © 2024 ISKCON NVCC. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
