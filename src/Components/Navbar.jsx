import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Team from './Team';
import Partnership from './Partnership';
import Roadmap from './Roadmap';

const tabs = [ "HOME", "ABOUT", "SERVICES", "PRODUCTS", "PARTNERS", "TEAM", "ROADMAP", "CONTACT"];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    // Set initial active tab based on current route
    if (location.pathname === '/') return "HOME";
    if (location.pathname === '/about') return "ABOUT";
    if (location.pathname === '/services') return "SERVICES";
    if (location.pathname === '/products') return "PRODUCTS";
    if (location.pathname === '/partners') return "PARTNERS";
    if (location.pathname === '/team') return "TEAM";
    if (location.pathname === '/roadmap') return "ROADMAP";
    if (location.pathname === '/contact') return "CONTACT";
    return "HOME";
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Navigate based on tab
    switch(tab) {
      case "HOME":
        navigate('/');
        break;
      case "ABOUT":
        navigate('/about');
        break;
      case "SERVICES":
        navigate('/services');
        break;
      case "PRODUCTS":
        navigate('/products');
        break;
      case "PARTNERS":
        navigate('/partners');
        break;
      case "TEAM":
        navigate('/team');
        break;
      case "ROADMAP":
        navigate('/roadmap');
        break;
      case "CONTACT":
        navigate('/contact');
        break;
      // Add other routes as needed
      default:
        navigate('/');
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-8 w-full max-w-6xl">
        {/* Logo */}
        <span className=" flex text-3xl font-bold" style={ { color: '#B6FF7A', letterSpacing: '0.05em', fontFamily: 'monospace' }}>Yumi Finance</span>
        {/* Tabs */}
        <div className="bg-white/70 font-extralight backdrop-blur-md px-1 py-1 rounded-full shadow-inner flex gap-4 border border-blue-500/10 flex-1 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative px-6 py-2  font-extralight font-medium rounded-full transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-white text-black shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]"
                    : "hover:bg-white/10 hover:text-black/40"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute top-0 left-0  font-extralight w-full h-full rounded-full bg-white opacity-10 blur-sm -z-10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar