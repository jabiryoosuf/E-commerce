import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin,BsInstagram,BsGithub,BsYoutube } from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">SignUp for Newsletter </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="your email address"
                  aria-label="your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno:277 Near vill chopal, <br/> sonipat,hariyan<br/>
                  pincode:676521
                </address>
                <a href="tel:9745747303 " className="mt-2 d-block mb-1 text-white">+91 9745747303</a>
                <a href="mail " className="mt-2 d-block mb-0 text-white">shopee@gmail.com</a>
                <div className="social_icons d-flex align-item-center gap-30 mt-3">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to={'/privacy-policy'} className="text-white pyg-2 mb-1">Privacy Policy</Link>
                <Link to={'/refund-policy'} className="text-white pyg-2 mb-1">Refund Policy</Link>
                <Link to={'/shipping-policy'} className="text-white pyg-2 mb-1">Shipping Policy</Link>
                <Link to={'/terms-condition'} className="text-white pyg-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white pyg-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white pyg-2 mb-1">About Us</Link>
                <Link className="text-white pyg-2 mb-1">Faq</Link>
                <Link className="text-white pyg-2 mb-1">contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white pyg-2 mb-1">Laptop</Link>
                <Link className="text-white pyg-2 mb-1">Headphones</Link>
                <Link className="text-white pyg-2 mb-1">Tablet</Link>
                <Link className="text-white pyg-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy: {new Date().getFullYear()}:powered by ismail
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
