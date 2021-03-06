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
import { useUser } from "../context/UserContext";
// =============== IMPORT ================

const Navbar = () => {
  //===== DECLARING VARIABLES / STATE =====
  const { currentUser, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [uName, setUName] = useState(currentUser.displayName)
  const history = useHistory();
  //===== DECLARING VARIABLES / STATE ====

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/SignUp");
    } catch (error) { }
  };

  useEffect(() => {
    console.log(uName)
  })

  return (
    <Nav>
      <Responsive>
        {currentUser ? (
          <Cu>
            Hi,{" "}
            <Link to="/app/profile">
              <Hl>{uName ? uName : currentUser.email}</Hl>
            </Link>
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

const NavList = styled.ul`
  text-decoration: none;

  @media ${dev.tablet} {
    margin-top: 2.5vh;
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
  color:${color.lightgray};
  padding: 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export default Navbar;
