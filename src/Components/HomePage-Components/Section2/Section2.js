import './style.css';
import React from 'react';
import musicImg from '../../images/Music-icon.png'
import foodImg from '../../images/food icon.png'
import movieImg from '../../images/Movie.png' 
import seriesImg from '../../images/play.png'
import drinkImg from '../../images/drink.png'

export function Section2(){
    return(
        <section className='section2'>
        
            <div className='littleCard'>
                <div className='imgSection2'>
                <img className='CircleImgIcon' src={musicImg} alt='CircleImgIcon' />
                </div>
                <p>Musics</p>
                <div className='textImg'>
                    
                    <p>What are your top 5 bands?</p>
                </div>
            </div>
            
            <div className='littleCard'>
                <div className='imgSection2'>
                <img className='CircleImgIcon' src={seriesImg} alt='CircleImgIcon' />
                </div>
                <p>Tv Series</p>
                <div className='textImg'>
                    <p>Friends or H.I.M.Y.M?</p>
                </div>
            </div>

            <div className='littleCard'>
                <div className='imgSection2'>
                <img className='CircleImgIcon' src={drinkImg} alt='CircleImgIcon' />
                </div>
                <p>Drinks</p>
                <div className='textImg'>
                    <p>TEQUILA !? BEER !?</p>
                </div>
            </div>

            <div className='littleCard'>
                <div className='imgSection2'>
                <img className='CircleImgIcon' src={foodImg} alt='CircleImgIcon' />
                </div>
                <p>Foods</p>
                <div className='textImg'>
                    <p>1.Pizza 2.Barbecue</p>
                </div>
            </div>

            <div className='littleCard'>
                <div className='imgSection2'>
                <img className='CircleImgIcon' src={movieImg} alt='CircleImgIcon' />
                </div>
                <p>Movies</p>
                <div className='textImg'>
                    <p>Lotr &gt; Star Wars &gt; HP ??</p>
                </div>

            </div>
        
        </section>
    )
}