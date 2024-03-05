import React, { useState, useEffect } from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled down more than 20px
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        {/* Your logo component */}
        {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
        <span className="headerTitle">Director Dashboard</span>
      </div>
      <div className="dropdown">
        {/* Your dropdown component */}
        <select>
          <option value="option1">Projects</option>
          <option value="option2">Demands</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
