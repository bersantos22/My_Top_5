import React from 'react'
import './style.css'

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
                            <a>Create Top 5</a>
                                {/* LINK AQUI */}
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