import styled from 'styled-components';
import '../index.css'

const Navbar = () => {
    return (
        <Nav>
                <Logo>Chazyy</Logo>
                <Search placeholder='What are you looking for?'/>
                <NavList>
                    <Item href="">Home</Item>
                    <Item href="">About</Item>
                    <Item href="">Contact</Item>
                </NavList>
        </Nav>
    );
}

const Logo = styled.h2`
    margin:0;
    cursor:pointer;

    &:hover{
        outline: solid 0.3rem ${props=> props.theme.mainYellow};
    }
`

const Search = styled.input`
    border:0.25rem ${props => props.theme.mainBlue} solid;
    padding:0.25rem;
    width:15%;
    margin:0;

    &:focus::placeholder{
        color:transparent;
    }
`

const Item = styled.a`
    margin:0 1rem;
    text-decoration:none;
    color:black;
    font-size:1.1rem;

    &:hover{
        border-bottom: 0.2rem solid ${props=> props.theme.mainBlue};
        padding-bottom:0.1rem;
    }
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
    border-bottom:0.3rem solid ${props => props.theme.mainYellow};
    
`

export default Navbar;