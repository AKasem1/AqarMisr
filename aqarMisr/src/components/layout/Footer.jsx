import React from "react";

/**
 * Footer component for the website.
 *
 * This component displays the footer section of the website which contains the
 * copyright information, and four social media links (linkedin, instagram, twitter
 * and facebook).
 *
 * @returns {React.ReactElement} A footer element that contains the copyright
 * information and the four social media links.
 */
const Footer = () => {
  return (
    <div className="w-full flex mt-20 flex-col p-4 gap-4 justify-around items-center bg-slate-800 text-white sm:flex-row sm:p-6 sm:gap-0">
      <p>Copyright &copy; {new Date().getFullYear()}. Aqar Misr</p>

      <div className="flex gap-6">
        <a href="/" target="_blank">
          <img src="/linkedin_icon.svg" alt="Aqar misr Linkedin Icon" />
        </a>
        <a href="/" target="_blank">
          <img src="/instagram_icon.svg" alt="Aqar misr Instagram Icon" />
        </a>
        <a href="/" target="_blank">
          <img src="/twitter_icon.svg" alt="Aqar misr Twitter Icon" />
        </a>
        <a href="/" target="_blank">
          <img src="/facebook_icon.svg" alt="Aqar misr Facebook Icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
