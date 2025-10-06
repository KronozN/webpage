import React from "react";

const Footer = () => (
  <footer className="bg-accent text-primary py-6 mt-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div>
        <p className="font-bold">IT Code Fair 2025</p>
        <p>Contact: info@itcodefair.com</p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
        <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
      </div>
      <div className="mt-4 md:mt-0">
        <a href="/" className="hover:text-secondary transition-colors">Home</a> |
        <a href="/about" className="hover:text-secondary transition-colors"> About</a>
      </div>
    </div>
  </footer>
);

export default Footer;
