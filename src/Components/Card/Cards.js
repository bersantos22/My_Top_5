import React from 'react';
import './style.css'

export function Card(props){
    return(
        <>
            <div className='card-container'>
                <div className='card-base card-one'>
                    <div className='imgCards'>
                        <div className='btn-base btn-one'>
                            <p> #1 NOME{props.name}</p>
                        </div>
                        <div className='textCards'>
                            <p> TEXTO {props.text}</p>
                        </div>
                    </div>
                </div>
                <div className='card-base card-two'>
                    <div className='imgCards'>
                    <div className='btn-base btn-two'>
                            <p> #2 {props.name}</p>
                        </div>
                        <div className='textCards'>
                            <p>TEXTO {props.text}</p>
                        </div>    
                    </div>
                </div>
                <div className='card-base card-three'>
                    <div className='imgCards'>
                    <div className='btn-base btn-three'>
                            <p>#3 NOME {props.name}</p>
                        </div>
                        <div className='textCards'>
                            <p>TEXTO {props.text}</p>
                        </div>   
                    </div>
                </div>
                <div className='card-base card-four'>
                    <div className='imgCards'>
                    <div className='btn-base btn-four'>
                            <p>#4 {props.name}</p>
                        </div>
                        <div className='textCards'>
                            <p> TEXTO {props.text}</p>
                        </div>       
                    </div>
                </div>
                <div className='card-base card-five'>
                    <div className='imgCards'>
                    <div className='btn-base btn-five'>
                            <p>#5 {props.name}</p>
                        </div>
                        <div className='textCards'>
                            <p>TEXTO {props.text} </p>
                        </div>       
                    </div>
                </div>
            </div>
        </>
    )
}