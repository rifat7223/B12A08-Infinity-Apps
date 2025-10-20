import React from 'react';

const Footer = () => {
    return (
        <div>
 <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AppStore</h2>
          <p className="text-gray-400 text-sm">
            Discover and download the best apps in one place. <br />
            Fast, secure & easy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Apps</a></li>
            <li><a href="#" className="hover:text-white transition">Categories</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm px-6">
        <p>© 2025 AppStore. All rights reserved.</p>
        <p>Made with  by Your Team</p>
      </div>
    </footer>
        </div>
    );
};

export default Footer;