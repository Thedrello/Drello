'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Drello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
