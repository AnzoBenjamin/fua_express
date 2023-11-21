import React from "react";
import {FaPhone} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'
const Header: React.FC = () => {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="" className=" d-flex gap-3 align-items-center">
                <FaPhone/>
              <span>Call : 0745884456</span>
            </a>
            <a href=""  className=" d-flex gap-3 align-items-center">
                <MdMailOutline/>
              <span>Email : fuaexpresstz@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Fua Express</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
