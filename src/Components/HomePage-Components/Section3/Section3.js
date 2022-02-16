import React from "react";
import photoBer from '../../images/ber.jfif'
import './style.css'
import photoLenine from '../../images/lenine.jfif'
export function Section3(){

    return(
            <section className="section3">
                <div className="text-Top"> 
                    <p>We are the Web Developers :</p>
                </div>
                <div className="twoCards-div">
                    <div className="DevCard">
                        <img className='photo' src={photoBer} alt='DevPhoto'/>
                        <div className="TextDev">
                            <p>I mostly love movies, music, series and a lot of beers! Lover of emo music, pagode and Rock'n'Roll, Baby! Gamer and now becoming a Web Developer. Enjoy our website <i className="fa-regular fa-face-smile-beam"></i>!</p>
                            <p> <a href="https://www.instagram.com/berpaes22/"> <i className="fa-brands fa-instagram"></i> berpaes22</a></p>
                        </div>
                    </div>

                    <div className="DevCard">
                        <img className='photo' src={photoLenine} alt='DevPhoto'/>

                        <div className="TextDev">
                            <p> Longbaord is life. A little music, a little partying, some bad movies that are really good, some good series, from Diogo Nogueira to John Williams, from Hans Zimmer to Pennywise. Make your top 5.</p>

                            <p><a href='https://www.instagram.com/leninexavier/'><i className="fa-brands fa-instagram"></i> leninexavier</a></p>
                        </div>

                    </div>
                </div>
            </section>
    )
}