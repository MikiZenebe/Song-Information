import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = styled.div`
  background-color: #18151f;
  color: #ffffff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f8426f;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f8426f;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1.5rem;
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled.ul<MobileMenuProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #05000e;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  transition: transform 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavbarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar>
        <Logo>Dankira</Logo>
        <NavLinks>
          <NavLink>
            <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link
              to="/list"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Songs
            </Link>
          </NavLink>
          <NavLink>
            <Link
              to="/add"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Add Song
            </Link>
          </NavLink>
          <NavLink>
            <Link
              to="/update"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Update Song
            </Link>
          </NavLink>
        </NavLinks>
        <HamburgerMenu onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
      </Navbar>
      <MobileMenu isOpen={isOpen}>
        <NavLink onClick={toggleMenu}>
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            Home
          </Link>
        </NavLink>
        <NavLink onClick={toggleMenu}>
          <Link to="/list" style={{ color: "#ffffff", textDecoration: "none" }}>
            Songs
          </Link>
        </NavLink>
        <NavLink onClick={toggleMenu}>
          <Link to="/add" style={{ color: "#ffffff", textDecoration: "none" }}>
            Add Song
          </Link>
        </NavLink>
        <NavLink onClick={toggleMenu}>
          <Link
            to="/update"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Update Song
          </Link>
        </NavLink>
      </MobileMenu>
    </>
  );
};

export default NavbarComponent;
