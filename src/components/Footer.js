import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <a href="https://www.facebook.com/nirvasito.voboghure" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/raihan-tazdid/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>



      </div>
      <p> &copy; 2022 raihan_tazdid</p>
    </div>
  );
}

export default Footer;
