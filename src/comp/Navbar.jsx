import styled from "styled-components";
import "../index.css";
import { dev } from "../config/breakp";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Chazyy</Logo>
      <Search placeholder="Search..." />
      <NavList>
        <Item href="">Home</Item>
        <Item href="">About</Item>
        <Item href="">Contact</Item>
        <Join href="">Join Now!</Join>
      </NavList>
    </Nav>
  );
};

const Logo = styled.h2`
  font-size:1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.themeColor};
  padding: 0.2rem;

  &:hover {
    outline: solid 0.3rem ${(props) => props.theme.themeColor};
  }

  @media ${dev.mobileL} {
    margin: 0.5rem;
  }
`;

const Search = styled.input`
  border: 0.25rem ${(props) => props.theme.utilBlack} solid;
  width: 15%;
  margin: 0;
  color: ${(props) => props.theme.utilCol};
  font-family: Archivo;
  letter-spacing: 0.04rem;
  background-color: ${(props) => props.theme.utilBlack};
  border-radius: 1rem;
  font-size: 0.9rem;
  padding: 0.3rem;

  &:focus::placeholder {
    color: transparent;
  }

  @media ${dev.mobileL} {
    margin:0.5rem 0;
    width:50%;
  }
`;

const Item = styled.a`
  margin: 0 1rem;
  width:100%;
  text-align:center;
  text-decoration: none;
  color: ${(props) => props.theme.utilCol};
  font-size: 1rem;
  font-family: Archivo;
  letter-spacing: 0.04rem;
  padding: 0;

  &:hover {
    border-bottom: 0.2rem solid ${(props) => props.theme.themeColor};
    padding-bottom: 0.1rem;
  }

  @media ${dev.mobileL} {
    margin: 0.5rem 0; 
  }
`;

const NavList = styled.ul`
  text-decoration: none;

  @media ${dev.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Nav = styled.header`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // border-bottom:0.3rem solid ${(props) => props.theme.lghtBgColor};

  @media ${dev.mobileL} {
    justify-content: center;
    flex-direction:column;
    align-items:center;
  }
`;

const Join = styled.button`
  margin: 0 0.5rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0.25rem;
  border: 0.2rem ${(props) => props.theme.themeColor} solid;
  color: ${(props) => props.theme.themeColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.themeColor};
    color: ${(props) => props.theme.bgColor};
  }

  @media ${dev.mobileL} {
  }
`;

export default Navbar;
