import React from 'react';
import './style.css'
import axios from 'axios';

export function Card(props){

    async function handleDelete() {
        try {
          await axios.delete(
            `https://ironrest.herokuapp.com/mytop5/${props.id}`
          );
          props.setRerender(true);
        } catch (error) {
          console.error(error);
        }
      }



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
                    <p className='p-name'><b>{props.name}</b></p>
                    <p> {props.subtitle} </p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn1'><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className='btn-Card btn1' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>

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
                    <p className='p-name'><b>{props.name}</b></p>
                    <p>{props.subtitle}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn2'><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className='btn-Card btn2' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>

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
                        <p className='p-name'><b>{props.name}</b></p>
                        <p>{props.subtitle}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn3'><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className='btn-Card btn3' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>

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
                        <p className='p-name'><b>{props.name}</b></p>
                        <p>{props.subtitle}</p>
                </div>    

                <div className='btn-div'>

                    <button className='btn-Card btn4'><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className='btn-Card btn4' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>

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
                        <p className='p-name'><b>{props.name}</b></p>
                        <p>{props.subtitle} </p>
                </div>

                <div className='btn-div'>

                    <button type="button" className='btn-Card btn5'><i class="fa-regular fa-pen-to-square"></i></button>
                    <button type="button" className='btn-Card btn5' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>

                </div>         
        </div>

    </div>

        </>
    )
}