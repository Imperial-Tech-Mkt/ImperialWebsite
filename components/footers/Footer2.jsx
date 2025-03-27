"use client";
import Socials from "./component/Socials";
import Image from "next/image";
import FooterLinks3 from "./component/FooterLinks3";

export default function Footer2() {
  return (
    <footer className="footer-wrapper footer-layout2 bg-white overflow-hidden">
      <div className="container">
          <div className="row justify-content-between footer-info-container">
            <div className="footer-logo-container">
              <Image src="/assets/img/logo.svg" className="footer-logo" alt="logo" width={300} height={600} />
            </div>
              <div className="widget widget_nav_menu footer-widget footer-links">
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks3 />
                  </ul>
                </div>
              </div>
              <div className="widget footer-widget widget-contact footer-contact">
                <h3 className="widget_title">Headquarter</h3>
                <ul className="contact-info-list">
                  <li>
                  1815 S. Meyers Rd. Ste. 200 Oakbrook Terrace, IL  60181
                  </li>
                  <li>
                    <a href="tel:16309251800">+1 630 925 1800</a>
                  </li>
                </ul>
              </div>

        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  Imperial Service Systems, Inc.
                </a>
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="social-btn style3 justify-content-md-end">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
