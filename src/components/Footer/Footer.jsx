import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-2/5 px-4 mb-8 md:mb-0">
            <div className="mb-8">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-400">
              &copy; 2024. All Rights Reserved by Rahul.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4">
            <h3 className="text-lg font-semibold text-white mb-4">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
