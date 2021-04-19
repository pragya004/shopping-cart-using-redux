import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import CartItemsSelector from "../Selectors/CartItemsSelector";

function Menubar() {
  const cartItemsSelected = CartItemsSelector();

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="lg"
        className="d-flex justify-content-around"
      >
        <NavbarBrand>Shopping App</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <Link to="/cart" className="nav-link">
              Cart{" "}
              <Badge color="primary" pill>
                {cartItemsSelected.reduce(
                  (total, item) => item.counter + total,
                  0
                )}
              </Badge>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Menubar;
