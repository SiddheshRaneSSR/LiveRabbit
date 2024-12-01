import React from "react";
import { Buttoncomponent } from "./button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">LiveRabbit</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to LiveRabbit
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Experience the thrill of live bidding from the comfort of your home. 
          LiveRabbit ensures transparency, trust, and excitement with every auction.
        </p>
        <Buttoncomponent />
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} LiveRabbit. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
