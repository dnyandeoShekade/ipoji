
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/ipoji.png" alt="IPO Ji Logo" className="h-10 w-10" />
        </Link>

        {/* Search Input */}
        <div className=" md: w-full max-w-xs ml-6">
          <input
            type="text"
            placeholder="Search IPO..."
            className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Mobile Search Input */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full px-4 md:hidden`}
        >
          <input
            type="text"
            placeholder="Search IPO..."
            className="w-full px-4 py-2 text-sm border rounded-full focus:ring  hover:border-blue-100 focus:ring-blue-200 "
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden p-2"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white md:static md:w-auto md:flex md:items-center`}
        >
          <ul className="flex flex-col space-y-4 px-4 md:flex-row md:space-y-0 md:space-x-6 md:px-0">
            <li>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
                IPO
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute hidden mt-2 bg-white shadow-md rounded-md group-hover:block">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Current IPOs
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Upcoming IPOs
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Past IPOs
                  </a>
                </li>
              </ul>
            </li>
            {/* Similar Dropdown for Buyback */}
            <li className="relative group">
              <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
              Buyback
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute hidden mt-2 bg-white shadow-md rounded-md group-hover:block">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Current IPOs
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Upcoming IPOs
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Past IPOs
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/brokers"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Brokers
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Orders/Bids
              </Link>
            </li>
            <li>
              <Link
                href="/allotment"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Allotment
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login/Register
          </Link>
        </div>
      </div>
    </header>
  );
}
