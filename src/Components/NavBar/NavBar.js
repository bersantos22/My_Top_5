import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export function NavBar(){
    return (
       
            <nav>
                <Link                                     className="nav-link myTop" 
                to="/"
                >MyTop 5
                </Link>
                <div className='linksPage'>
                        <ul className='listUl'>

                            <li className='listLi'>
                            
                                <Link 
                                    className="nav-link text-light" 
                                    to="/"
                                    >Home
                                </Link>

                            </li>
                            <li className='listLi'>
                            
                                <Link 
                                    className="nav-link text-light" to="/post-top-5">
                                    Create Top 5
                                </Link>
                            </li>

                            <li className='listLi'>

                                <Link 
                                    className="nav-link text-light" 
                                    to="/alltop5">
                                    All Top 5
                                </Link>
                            

                            </li>

                            <li className='listLi'>

                                <Link 
                                    className='nav-link' 
                                    to="/aboutUs">About The Project
                                </Link>
                            
                            </li>
                        </ul>
                </div>
            </nav>
     
    )
}