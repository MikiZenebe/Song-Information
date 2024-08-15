import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
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

export const NavContainer = styled.div({
  width: "100%",
  maxWidth: "1400px",
  padding: "0 24px",
  display: "flex",
  gap: "14px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
});
export const Mobileicon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Navlink = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 1s slide-in",
  textDecoration: "none",
  "&:hover": {
    color: "#007AFF",
    textDecoration: "none",
  },

  "&.active": {
    color: "#007AFF",
    textDecoration: "none",
  },
});
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcons = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavTextButton = styled.div({
  textAlign: "end",
  color: "#5B86E5",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
  fontWeight: "600",
  "&:hover": {
    color: "#007AFF",
  },
});

interface MobileMenu {
  isOpen: boolean;
}

const NavbarComponent: React.FC = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Navbar>
        <div>
          <p>Dankira</p>
        </div>

        <div>
          {" "}
          <MobileMenu isOpen={isOpen}>
            <Link to="/">Dashboard</Link>
            <Link to="/workouts">Workouts</Link>
          </MobileMenu>
          <NavItems>
            <Link to="/">Home</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/">Add</Link>
            <Link to="/workouts">Update</Link>
          </NavItems>
          <MenuIcons onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuIcons>
        </div>
      </Navbar>

      {/* <MobileMenu isOpen={isOpen}>
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
      </MobileMenu> */}
    </>
  );
};

export default NavbarComponent;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;

  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
