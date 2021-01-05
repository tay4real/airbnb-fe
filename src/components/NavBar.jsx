import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { openUserSettings, closeUserSettings, userSetting } = this.props;

    return (
      <Container fluid className="shadow-sm">
        <Container>
          <Navbar
            className=" navbar justify-content-between align-items-center "
            bg="white"
            expand="lg"
          >
            <Navbar.Brand to="#home">
              <Image src="./assets/airbnb_logo.jpg" height="58" />
            </Navbar.Brand>

            <div className="d-flex box search-container btn-sm justify-content-evenly align-items-center border border-1 border-muted rounded-pill">
              <div
                className="search text-bold flex-grow-1 pl-3"
                style={{ fontWeight: "bold" }}
              >
                Selected map area
              </div>
              <div className="search text-muted d-flex justify-content-around align-items-center">
                <span className="px-3">Add date</span>
                <span className="rounded-circle bg-danger px-2 py-1">
                  <i className="fas fa-search text-white"></i>
                </span>
              </div>
            </div>

            <Nav className="d-flex justify-content-around align-items-center">
              <Nav.Link to="#home">
                <Link to="/">Become a host</Link>
              </Nav.Link>
              <Nav.Link to="/language" className="d-flex align-items-center">
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
              </Nav.Link>

              <div
                className="box setting btn-sm d-flex justify-content-between align-items-center border border-1 border-muted rounded-pill position-relative"
                style={{ width: "5.3rem" }}
                onClick={openUserSettings}
              >
                <span>
                  <i
                    className="fas fa-bars lg"
                    style={{ fontSize: "16px" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fas fa-user-circle"
                    style={{ fontSize: "32px" }}
                  ></i>
                </span>
                <span className="notify_1 rounded-circle bg-danger">1</span>
              </div>
              <div
                className="dropdown card"
                style={{ display: userSetting ? "block" : "none" }}
              >
                <NavDropdown.Item
                  to="/guest/inbox"
                  className="bold dropdown-item"
                  onClick={closeUserSettings}
                >
                  Messages
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/alerts"
                  className="position-relative bold dropdown-item"
                  onClick={closeUserSettings}
                >
                  Notifications{" "}
                  <span className="notify_2 rounded-circle bg-danger"></span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/trips/v1"
                  className="bold dropdown-item"
                  onClick={closeUserSettings}
                >
                  Trips
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/wishlists"
                  className="bold dropdown-item"
                  onClick={closeUserSettings}
                >
                  Saved
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  to="/host/homes"
                  className="dropdown-item"
                  onClick={closeUserSettings}
                >
                  Host your home
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/onlinehost"
                  className="dropdown-item"
                  onClick={closeUserSettings}
                >
                  Host an experience
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/account-settings"
                  className="dropdown-item"
                  onClick={closeUserSettings}
                >
                  Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  to="/help"
                  className="dropdown-item"
                  onClick={closeUserSettings}
                >
                  Help
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/logout"
                  className="dropdown-item"
                  onClick={closeUserSettings}
                >
                  Log out
                </NavDropdown.Item>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
}

export default NavBar;
