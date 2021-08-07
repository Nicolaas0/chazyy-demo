// =============== REACT ================
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import "../../index.css";
import menubar from "../../assest/menu.png";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// =============== IMPORT ================

const Navbar = () => {
  //===== DECLARING VARIABLES / STATE =====
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  //===== DECLARING VARIABLES / STATE ====

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/SignUp");
    } catch (error) {}
  };

  return (
    <Nav>
      <Responsive>
        {currentUser ? (
          <Cu>
            Hi, <Hl>{currentUser.email}</Hl>
          </Cu>
        ) : (
          <Logo>Chazyy</Logo>
        )}
        <Menu
          src={menubar}
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        />
      </Responsive>

      <NavList isOpen={isOpen}>
        <Link to="/SignIn">
          {currentUser ? (
            <Join onClick={handleLogout}>Logout</Join>
          ) : (
            <Join>Join Now!</Join>
          )}
        </Link>
      </NavList>

      {/* IMPORTANT!!! */}
      {/* FOR NEXT UPDATE! */}
      {/* {isOpen ? null : <Search placeholder="Search..." />} */}
      {/* <NavList isOpen={isOpen}>
        {isOpen ? <Search placeholder="Search..." /> : null}
        <Item href="">Home</Item>
        <Item href="">About</Item>
        <Item href="">Contact</Item>
        <Join href="">Join Now!</Join>
      </NavList> */}
    </Nav>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Logo = styled.h1`
  font-family: "Roboto Mono";
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: ${color.themecol};
  padding: 0.2rem;

  &:hover {
    outline: solid 0.3rem ${(props) => props.theme.themeColor};
  }

  @media ${dev.tablet} {
    margin: 0.5rem;
  }
`;

// const Search = styled.input`
//   border: 0.25rem ${(props) => props.theme.utilBlack} solid;
//   width: 15%;
//   margin: 0;
//   color: ${(props) => props.theme.utilCol};
//   font-family: Archivo;
//   letter-spacing: 0.04rem;
//   background-color: ${(props) => props.theme.utilBlack};
//   border-radius: 1rem;
//   font-size: 0.9rem;
//   padding: 0.3rem;

//   &:focus::placeholder {
//     color: transparent;
//   }

//   @media ${dev.tablet} {
//     margin: 0.5rem 0;
//     width: 50%;
//   }
// `;

// const Item = styled.a`
//   margin: 0 1rem;
//   width: 100%;
//   text-align: center;
//   text-decoration: none;
//   color: ${(props) => props.theme.utilCol};
//   font-size: 1rem;
//   font-family: Archivo;
//   letter-spacing: 0.04rem;
//   padding: 0;

//   &:hover {
//     border-bottom: 0.2rem solid ${(props) => props.theme.themeColor};
//     padding-bottom: 0.1rem;
//   }

//   @media ${dev.tablet} {
//     margin: 0.5rem 0;
//   }
// `;

const NavList = styled.ul`
  text-decoration: none;

  @media ${dev.tablet} {
    margin-top:2.5vh;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    transition: display 1s;
  }
`;

const Nav = styled.header`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // border-bottom:0.3rem solid ${(props) => props.theme.lghtBgColor};

  @media ${dev.tablet} {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Join = styled.button`
  margin: 0 0.5rem;
  font-family: "Roboto Mono";
  font-weight: 700;
  font-size: 1.2rem;
  background-color: ${color.bgColor};
  padding: 0.25rem;
  border: 0.2rem ${color.sonicSv} solid;
  color: ${color.sonicSv};
  cursor: pointer;

  &:hover {
    background-color: ${color.bgColor};
    color: ${color.themecol};
    border: 0.2rem ${color.themecol} solid;
  }

  @media ${dev.tablet} {
  }
`;

const Menu = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 0.5rem;

  @media ${dev.tablet} {
    display: relative;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Responsive = styled.div`
  @media ${dev.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Cu = styled.div`
  margin: 0 0.5rem;
  font-family: "Roboto Mono";
  font-weight: 600;
  color: ${color.lightgray};
  padding: 0.2rem;
  @media ${dev.mobileL} {
    font-size: 4vw;
  }
`;

const Hl = styled.span`
  font-family: "Roboto Mono";
  background-color: ${color.erie};
  padding: 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export default Navbar;
