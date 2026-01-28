import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="mailto:contact@mywebsite.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
