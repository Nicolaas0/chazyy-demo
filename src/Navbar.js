import React from 'react';
import './index.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <h2>Logo</h2>
                <input type="text" placeholder='Search'/>
                <div className="nav-list">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;