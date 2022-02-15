import React from "react";
import './style.css'
import img from '../../images/polaroid Big Img.png'
import {Link} from "react-router-dom"


export function Section1(){
    return(
        <section className="section1">
            <div className="divTextHero">
                <div className="smallTextTop">
                    <p>CHOOSE THE BEST!</p>
                </div>
                <div className='bigText'>
                    <p>CREATE YOUR TOP 5 LIST</p>
                </div>
                <div className="smallTextBot">
                    <p>Share with your friends</p>
                </div>
                <br></br>
                <div className="textBotton">
                     <p>You can create your top 5: Bands, Series, Movies, Foods, Drinks and more! Click in button bellow and start your <i>MyTop 5</i> !</p>
                </div>

                <div className="divButton">
                   
                <Link className="nav-link text-light" to="/post-top-5">
                <button>
                        <i>MyTop 5</i>
                    </button>
                </Link>
                    
                </div>

            </div>

            <div className="BigCard">
                <img className='polaroid' src={img} alt='BigPolaroid'/>
            </div>
           
        </section>
    )
}