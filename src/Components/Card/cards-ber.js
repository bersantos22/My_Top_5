import React from 'react';
import './style.css'
import axios from 'axios';
import 'bulma/css/bulma.css'; 

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


console.log(props)
    return(
        <>
    <div className='card-container'>

        <div className='card-base card-one'>
                <div className='imgCards'  
                style={{backgroundImage:`url(${props.image_m})`}}>
                   
                </div>

                <div className='btn-base btn-one'>
                    <p> #MOVIE</p>
                </div>

                <div className='textCards'>
                    <p className='p-name'><b>{props.name_m}</b></p>
                    <p> {props.description_m} </p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn1'><i class="fa-regular fa-pen-to-square"></i></button>
                    

                </div>
        </div>

        <div className='card-base card-two'>

                <div className='imgCards' 
                style={{backgroundImage:`url(${props.image_s})`}}>
                
                </div>

                <div className='btn-base btn-two'>
                    <p> #TVSERIE </p>
                </div>

                <div className='textCards'>
                    
                    <p className='p-name'><b>{props.name_s}</b></p>
                    <p>{props.description_s}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn2'><i class="fa-regular fa-pen-to-square"></i></button>
        

                </div>    
        </div>
        <div className='card-base card-three'>

                <div className='imgCards' 
                style={{backgroundImage:`url(${props.image_d})`}}>
                    
                </div>

                <div className='btn-base btn-three'>
                        <p>#DRINK </p>
                </div>

                <div className='textCards'>
                
                        <p className='p-name'><b>{props.name_d}</b></p>
                        <p>{props.description_d}</p>
                </div>

                <div className='btn-div'>

                    <button className='btn-Card btn3'><i class="fa-regular fa-pen-to-square"></i></button>
                

                </div>   
        </div>

        <div className='card-base card-four'>
                <div className='imgCards'  
                style={{backgroundImage:`url(${props.image_b})`}}>

                </div>

                <div className='btn-base btn-four'>
                        <p>#BAND </p>
                </div>

                <div className='textCards'>
                        <p className='p-name'><b>{props.name_b}</b></p>
                        <p>{props.description_b}</p>
                </div>    

                <div className='btn-div'>

                    <button className='btn-Card btn4'><i class="fa-regular fa-pen-to-square"></i></button>
                   

                </div>   
        </div>

        <div className='card-base card-five'>

                <div className='imgCards'  
                style={{backgroundImage:`url(${props.image_f})`}}>
                   
                </div>

                <div className='btn-base btn-five'>
                        <p>#FOOD </p>
                </div>

                <div className='textCards'>

                        <p className='p-name'><b>{props.name_f}</b></p>
                        <p>{props.description_f} </p>
                </div>

                <div className='btn-div'>

                    <button type="button" className='btn-Card btn5'><i class="fa-regular fa-pen-to-square"></i></button>
                   

                </div>         
        </div>

    </div>
        <div className='btnDelete'>
          <p><b>Delete all MyTop 5 </b></p>
          <div className='btnDel'>
            <button className='button is-danger' onClick={handleDelete}><i class="fa-regular fa-trash-can"></i></button>
          </div>
                
        </div>

        </>
    )
}