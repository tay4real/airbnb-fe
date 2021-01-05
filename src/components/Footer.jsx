import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-wrapper">
    <footer className="footer">
      <div className="container">
        <div className="footer_sec1">
          <div className="row row-cols-1 row-cols-xl-4">
            <div className="col">
              <div className="row ">
                <section className="col">
                  <h4 className="menu_header">About</h4>
                  <ul className="menu_list d-block d-md-flex d-xl-block flex-wrap">
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        How air bnb works
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Newsroom
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        Investors
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        Airbnb Plus
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Airbnb Luxe
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        HotelTonight
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        Airbnb for Work
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        Olympics
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links ">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="col">
              <div className="row ">
                <section className="col">
                  <h4 className="menu_header">Community</h4>
                  <ul className="menu_list d-block d-md-flex d-xl-block flex-wrap">
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Diversity & Belonging
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Against Discrimination
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Accesibility
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Airbnb Associates
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Frontline Stays
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Invite friends
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Gift cards
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Airbnb.org
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <section className="col">
                  <h4 className="menu_header">Host</h4>
                  <ul className="menu_list d-block d-md-flex d-xl-block flex-wrap">
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Host an Online Experience
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Host an Experience
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Responsible Hosting
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Resource Center
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Community Center
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="col">
              <div className="row ">
                <section className="col">
                  <h4 className="menu_header">Support</h4>
                  <ul className="menu_list d-block d-md-flex d-xl-block flex-wrap">
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Our COVID-19 Response
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Help Center
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Cancellation options
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Neighbourhood Support
                      </Link>
                    </li>
                    <li className="menu_list_item">
                      <Link to="/" className="menu_links">
                        Trust & Safety
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_sec2">
          <div className="row">
            <div className="col d-flex mb-3">
              <div className="lang-currency">
                <div className="d-flex">
                  <span className="lang-currency-item">
                    <Link to="/" className="lang-currency-link">
                      <span className="d-none">Choose a Language</span>
                      <span className="mr-2">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: "16px",
                            width: "16px",
                            fill: "currentcolor",
                          }}
                        >
                          <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                        </svg>
                      </span>
                      <span>English (US)</span>
                    </Link>
                  </span>
                  <span className="lang-currency-item">
                    <Link to="/" className="lang-currency-link">
                      <span className="d-none">Choose a Currency</span>
                      <span className="mr-2">$</span>
                      <span>USD</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="socials">
                <div className="border-box">
                  <div>
                    <div className="copyright-container">
                      <div className="col">
                        {"© "}
                        {new Date().getFullYear()} Airbnb, Inc. All rights
                        reserved
                      </div>
                    </div>
                    <div className="privacy-container">
                      <span>
                        <span className="dot">·</span>
                        <Link to="/">Privacy</Link>
                        <span className="dot">·</span>
                        <Link to="/">Terms</Link>
                        <span className="dot">·</span>

                        <Link to="/">Sitemap</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
