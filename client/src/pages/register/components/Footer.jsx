import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const linkStyle = {
    display: "inline-block",
    borderRadius: "50%",
    border: "2px solid #737373",
    width: "50px",
    height: "50px",
    lineHeight: "44px",
    margin: "30px 10px",
  };

  const iconStyle = { color: "#e50914" };
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "50px 0",
        color: "#737373",
        textAlign: "center",
      }}
    >
      <Link to="" style={linkStyle}>
        <FacebookRoundedIcon style={iconStyle} />
      </Link>
      <Link to="" style={linkStyle}>
        <InstagramIcon style={iconStyle} />
      </Link>
      <Link to="" style={linkStyle}>
        <TwitterIcon style={iconStyle} />
      </Link>
      <Link to="" replace style={linkStyle}>
        <LinkedInIcon style={iconStyle} />
      </Link>
      <p>NETFLIX @ 2022</p>
    </div>
  );
};

export default Footer;
