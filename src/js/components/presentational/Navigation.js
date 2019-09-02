import React from 'react';
import {Link } from "react-router-dom"

const Nav = () => {
    return (

      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
    <div className="navbar-collapse collapse justify-content-center order-2">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  <b style={{color:'white',marginRight:'40px'}}>
                    Form
                    </b>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/data">
                  <b style={{color:'white',marginLeft:'40px'}}>
                    See Data
                  </b>
                </Link>
            </li>
        </ul>
    </div>
</nav>

    );
}
export default Nav;