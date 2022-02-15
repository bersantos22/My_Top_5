import React from 'react';
import './style.css'

export function Card(props){
    return(
        <>
    <div className='card-container'>

        <div className='card-base card-one'>
                <div className='imgCards'>
                    <img src={props.img} alt='ImgCard' />
                </div>

                <div className='btn-base btn-one'>
                    <p> #1 GOLD</p>
                </div>

                <div className='textCards'>
                    <p>{props.type}</p>
                    <p><b>{props.name}</b></p>
                    <p> {props.subtitle} </p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card'>Edit</button>
                    <button className='btn-Card'>Delete</button>

                </div>
        </div>

        <div className='card-base card-two'>

                <div className='imgCards'>
                    <img src={props.img} alt='ImgCard' />
                </div>

                <div className='btn-base btn-two'>
                    <p> #2 SILVER </p>
                </div>

                <div className='textCards'>
                    <p>{props.type}</p>
                    <p><b>{props.name}</b></p>
                    <p>{props.subtitle}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card'>Edit</button>
                    <button className='btn-Card'>Delete</button>

                </div>    
        </div>
        <div className='card-base card-three'>

                <div className='imgCards'>
                    <img src={props.img} alt='ImgCard' />
                </div>

                <div className='btn-base btn-three'>
                        <p>#3 BRONZE </p>
                </div>

                <div className='textCards'>
                        <p>{props.type}</p>
                        <p><b>{props.name}</b></p>
                        <p>{props.subtitle}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card'>Edit</button>
                    <button className='btn-Card'>Delete</button>

                </div>   
        </div>

        <div className='card-base card-four'>
                <div className='imgCards'>
                    <img src={props.img} alt='ImgCard' />
                </div>

                <div className='btn-base btn-four'>
                        <p>#4 FOURTH </p>
                </div>

                <div className='textCards'>
                        <p>{props.type}</p>
                        <p><b>{props.name}</b></p>
                        <p>{props.subtitle}</p>
                </div>    

                <div className='btn-div'>

                    <button className='btn-Card'>Edit</button>
                    <button className='btn-Card'>Delete</button>

                </div>   
        </div>

        <div className='card-base card-five'>

                <div className='imgCards'>
                    <img src={props.img} alt='ImgCard' />
                </div>

                <div className='btn-base btn-five'>
                        <p>#5 FIFTH </p>
                </div>

                <div className='textCards'>
                        <p>{props.type}</p>
                        <p><b>{props.name}</b></p>
                        <p>{props.subtitle} </p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card'>Edit</button>
                    <button className='btn-Card'>Delete</button>

                </div>         
        </div>

    </div>

        </>
    )
}