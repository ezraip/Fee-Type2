/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function MainLayout({ appName, sidenav, children }) {
  console.log(sidenav.items);
  const [inactive, setInactive] = useState(true);

  return (
    <div className="d-flex">
      <div
        className={`side-menu main-index ${inactive ? "" : ""}`}
        onMouseOver={() => setInactive(!inactive)}
      >
        <div className="main-menu">
          {/* <div>{appName}</div> */}
          <ul>
            {sidenav.items.map(({ label, href, icon, items }) => (
              <>
                {items ? (
                  <li key={href}>
                    <a className="menu-item">
                      <div className="menu-icon">{icon}</div>
                      {label}
                    </a>
                    {items.map((subitem) => (
                      <ul className="sub-menu">
                        <li as={Link} key={subitem.href} to={subitem.href}>
                          {subitem.label}
                        </li>
                      </ul>
                    ))}
                  </li>
                ) : (
                  <li as={Link} key={href} to={href || "/"}>
                    <a className="menu-item">
                      <div className="menu-icon">{icon}</div>
                      {label}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <main className="d-flex second-index" style={{ willChange: "width" }}>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand>
                <img
                  alt="Logo Metrodata Academy"
                  src={logo}
                  height={44}
                  className="align-top d-inline-block"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </main>
    </div>
  );
}
