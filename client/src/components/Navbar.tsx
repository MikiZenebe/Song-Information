import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = styled.div`
  background-color: #18151f;
  color: #ffffff;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;

  @media (max-width: 850px) {
    padding: 0px 30px;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 50px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const MenuIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 50px;
  cursor: pointer;

  @media (min-width: 850px) {
    display: none;
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled.div<MobileMenuProps>`
  list-style: none;
  display: flex;
  flex-direction: column;

  left: 0;
  width: auto;

  transition: transform 0.3s ease;

  @media (min-width: 850px) {
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
        <div>
          <p>Dankira</p>
        </div>
        <NavLinks>
          <div>
            <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/list"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Songs
            </Link>
          </div>
          <div>
            <Link
              to="/add"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Add Song
            </Link>
          </div>
          <div>
            <Link
              to="/update"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Update Song
            </Link>
          </div>
        </NavLinks>
        <MenuIcons onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcons>
      </Navbar>

      <MobileMenu isOpen={isOpen}>
        <NavLinks>
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            Home
          </Link>
        </NavLinks>
        <div>
          <Link to="/list" style={{ color: "#ffffff", textDecoration: "none" }}>
            Songs
          </Link>
        </div>
        <div>
          <Link to="/add" style={{ color: "#ffffff", textDecoration: "none" }}>
            Add Song
          </Link>
        </div>
        <div>
          <Link
            to="/update"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Update Song
          </Link>
        </div>
      </MobileMenu>
    </>
  );
};

export default NavbarComponent;
