
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logo = () => {
  // Using useNavigate for safer routing
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div 
      onClick={handleClick} 
      className="flex items-center cursor-pointer" 
      aria-label="Namami Cleans Home"
    >
      <div className="text-2xl text-white font-bold">Namami Cleans</div>
    </div>
  );
};

export default Logo;
