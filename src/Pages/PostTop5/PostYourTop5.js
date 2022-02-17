import React from 'react'
import { useState } from "react";
import "./style.css"
import 'bulma/css/bulma.css'; 
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";
import axios from "axios";

export function PostYourTop5(){

    return(
        <>
            <section className='sectionAll'>
    
                <div className="textAll">

                    <div className="smallTextTop">
                        <p>Create your Top 5 is easy!</p>
                    </div>

                    <div className='textForms'>
                        <p>Choose the best and fill our form with names, image links and description:</p>
                    </div>

                </div>
</section>   
    <div className="container1">

        <form onSubmit={handleSubmit}>

            <div className='inputSingle-div'>

                <div className='input-div'>
                    <label className='labelClass' htmlFor="name_owner">Your name:</label>
                        <input
                        className="input is-info"
                        placeholder="Owner's Name"
                        name="name"
                        value={forms.name}  
                        onChange={handleChange}      
                        />
                </div>

                <div className='input-div'>

                    <label className='labelClass' htmlFor="name_food">Food name:</label>
                        <input
                        className="input is-info"
                        placeholder="Name of your favorite food"
                        name="foodName"
                        value={forms.name_f}
                        onChange={handleChange}                       
                        />

                </div>

                    <div className='input-div'>

                        <label className='labelClass' htmlFor="name_food">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Food image Link "
                            name="imgFood"
                            value={forms.image_f}
                            onChange={handleChange}                      
                            />
                    </div>

                    <div className='input-div'>

                    <label className='labelClass' htmlFor="name_food">Food description:</label>
                        <input
                        className="input is-info"
                        placeholder="A description of this food"
                        name="descriptionFood"
                        value={forms.description_f}
                        onChange={handleChange}                        
                        />

                    </div>

                    </div>              
                </form>
            </div>   
        </>
    )
}