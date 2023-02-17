import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer">
      Emre Doğramacı
      <div className="footerweb">
        <a href="https://www.emredogramaci.com.tr/" target="_blank">
          <CgWebsite />
        </a>
      </div>
      <div className="footergithub">
        <a href="https://github.com/emredogramaci" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
      <div className="footerlinkedin">
        <a href="https://www.linkedin.com/in/emredogramaci/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
