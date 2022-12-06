import React from 'react';

const Footer = () => {
  return (
    <footer className="container mt-auto border-t border-gray-200 py-6 text-center text-gray-600 dark:border-gray-700">
      Copyright &#169; {new Date().getFullYear()} | Dylan H. Nguyen & subsidaries.
    </footer>
  );
};

export default Footer;
