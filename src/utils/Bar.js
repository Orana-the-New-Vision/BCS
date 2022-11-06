import React from "react";
import {Link} from 'react-router-dom'
import topnav from './Bar.css'

function NavBar(){
    return(
        <nav class= "topnav">
            <a>
                <Link to ="/">Home</Link>
            </a>
            <a>
                <Link to ="/about">About</Link>
            </a>
        </nav>
    );
}
export default NavBar