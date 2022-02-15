import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export function NavBar(){
    return (
       
            <nav>
                <h2>MyTop 5</h2>
                <div className='linksPage'>
                        <ul className='listUl'>
                            <li className='listLi'>
                            <a>Home</a>
                                {/* LINK AQUI */}
                            </li>
                            <li className='listLi'>
                            
                                <Link className="nav-link text-light" to="/post-top-5">
                                Create Top 5
                                </Link>
                            </li>
                            <li className='listLi'>
                            <a>About Us</a>
                                {/* LINK AQUI */}
                            </li>
                        </ul>
                </div>
            </nav>
     
    )
}