import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between md:items-center">
      
        {/* Right side: Contact Information */}
        <div className="flex flex-col space-y-2 mt-4 md:mt-0 xl:relative xl:left-80">
          <a href="mailto:info@amberaccidentclaims.co.uk" className="hover:text-gray-300">info@amberaccidentclaims.co.uk</a>
          <a href="tel:01214565666" className="hover:text-gray-300">0121 456 5666</a>
          <address className="not-italic">
            <span>Dudley Road Branch:</span> 258 Dudley Road, Birmingham B18 4HN
          </address>
          <address className="not-italic">
            <span>Alum Rock Branch:</span> 374 Alum Rock Rd, B8 3DA
          </address>
        </div>
      </div>
      <div className="text-center mt-4">
        <small>&copy; 2023 built by kalyon.dev for Amber Accident Claims Ltd - All Rights Reserved.</small>
      </div>
    </footer>
  );
}
