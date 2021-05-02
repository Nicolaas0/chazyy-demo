import React from 'react';
import styled from 'styled-components';
import '../index.css'

const Navbar = () => {
    return (
        <Nav>
                <Logo>Logo</Logo>
                <Search/>
                <NavList>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </NavList>
        </Nav>
    );
}

const Logo = styled.h2`
    margin:0;
`

const Search = styled.input`

`

const NavList = styled.ul`
    text-decoration:none;
`

const Nav = styled.header`
    margin:0;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`

export default Navbar;