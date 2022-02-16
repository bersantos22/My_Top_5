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
                                    className='Link-Nav' 
                                    to="/aboutUs">About The Project
                                </Link>
                            
                            </li>
                        </ul>
                </div>
            </nav>
     
    )
}