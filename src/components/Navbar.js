import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navbar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide" id={openNav ? "open" : "close"}>
        <Link to='/'> <img src={Logo} alt='logo' /> </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={() => setOpenNav(!openNav)}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
