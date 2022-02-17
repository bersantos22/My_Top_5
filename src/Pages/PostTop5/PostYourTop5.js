/* import React from 'react'
import { useState } from "react";
import "./style.css"
import 'bulma/css/bulma.css'; 
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";
import axios from "axios";

export function PostYourTop5(){
    const [forms, setForms] = useState({
     
        name:'',

        name_m:'',
        image_m:'',
        description_m:'',

        name_s:'',
        image_s:'',
        description_s:'',

        name_b:'',
        image_b:'',
        description_b:'',

        name_d:'',
        image_d:'',
        description_d:"",
        
        name_f:'',
        image_f:'',
        description_f:'',
      });
    
      
      function handleChange(event) {
        setForms({ ...forms, [event.target.name]: event.target.value });
        console.log(forms);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        for (let key in forms) {
          if (!forms[key]) {
            window.alert(`Faltou o campo ${key}.`);
            return;
          }
        }
    
        console.log("Nao caiu no if");
        axios.post("https://ironrest.herokuapp.com/mytop5", forms);
      }

        const [top5, setTop5] = useState({
            name:"",
            food:"",
            drink:"",
            movie:"",
            serie:"",	
            band:"",
            image_f :"",
            image_d:"",
            image_m:"l",
            image_s:"",
            image_b:"",
            description:""
        });

        function handleChange(event) {
            setForm({ ...top5, [event.target.name]: event.target.value });
            console.log(top5);
          }
        
          function handleSubmit(event) {
            event.preventDefault();
        
            for (let key in form) {
              if (!top5[key]) {
                window.alert(`Adicione o campo ${key} !`);
                return;
              }
            }
        
            console.log("Huuumm deu ruim se pá");
            axios.post("https://ironrest.herokuapp.com/mytop5", top5);
          }
        


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


            <div className='inputSingle-div owner'>

                <div className='input-div'>

                    <label  htmlFor="name">Your name:</label>
                    <input
                    id="name"
                    placeholder="Owner's Name"
                    name="name"
                    value={forms.name}  
                    onChange={handleChange}      
                    />
                </div>

            </div>


                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="movie">Movie name:</label>
                        <input
                        id="movie"
                        className="input is-info"
                        placeholder="Name of your favorite Movie"
                        name="movieName"
                        value={forms.movie}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="imgMovie">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Movie image Link "
                            name="imgMovie"
                            value={forms.image_m}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                        <label  htmlFor="descriptionMovie">Movie description:</label>
                        <input
                        className="input is-info"
                        placeholder="Short description of the movie"
                        name="descriptionMovie"
                        value={forms.description_m}
                        onChange={handleChange}                        
                        />

                        </div>

                </div>


                <div className='inputSingle-div'>

                <div className='input-div'>

                    <label  htmlFor="serie">TvSerie name:</label>
                    <input
                    className="input is-info"
                    placeholder="Name of your favorite TvSerie"
                    name="serie"
                    value={forms.serie}
                    onChange={handleChange}                       
                    />

                </div>

                    <div className='input-div'>

                        <label  htmlFor="imgSerie">Image Link:</label>
                        <input
                        className="input is-info"
                        placeholder="TvSerie image Link "
                        name="imgSerie"
                        value={forms.image_s}
                        onChange={handleChange}                      
                        />
                    </div>

                    <div className='input-div'>

                        <label  htmlFor="descriptionTvSerie">TvSerie description:</label>
                        <input
                        className="input is-info"
                        placeholder="Why is this your favorite TvShow?"
                        name="descriptionTvSerie"
                        value={forms.description_s}
                        onChange={handleChange}                        
                        />

                    </div>

                </div> 

                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="drink">Drink name:</label>
                        <input
                        id="drink"
                        className="input is-info"
                        placeholder="Name of your favorite drink"
                        name="drink"
                        value={forms.drink}
                        onChange={handleChange}                       
                        />
                    </div>

                        <div className='input-div'>

                            <label  htmlFor="imgDrink">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Drink image Link "
                            name="imgDrink"
                            value={forms.image_d}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="descriptionDrink">Drink description:</label>
                            <input
                            className="input is-info"
                            placeholder="A description of your favorite drink"
                            name="descriptionDrink"
                            value={forms.description_d}
                            onChange={handleChange}                        
                            />
                            </div>

                </div>  

                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="band">Band name:</label>
                        <input
                        id="band"
                        className="input is-info"
                        placeholder="Name of your favorite band"
                        name="band"
                        value={forms.band}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="imgBand">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Band image Link "
                            name="imgBand"
                            value={forms.image_b}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="descriptionBand">Band Songs:</label>
                            <input
                            className="input is-info"
                            placeholder="The best songs by this band"
                            name="descriptionBand"
                            value={forms.description_b}
                            onChange={handleChange}                        
                            />

                        </div>

                </div>


                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="food">Food name:</label>
                        <input
                        id="food"
                        className="input is-info"
                        placeholder="Name of your favorite food"
                        name="food"
                        value={forms.name_f}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="imgFood">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Food image Link "
                            name="imgFood"
                            value={forms.image_f}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="descriptionFood">Food description:</label>
                            <input
                            className="input is-info"
                            placeholder="A description of your favorite food"
                            name="descriptionFood"
                            value={forms.description_f}
                            onChange={handleChange}                        
                            />

                        </div>

                </div>

                <div className='btnForms'>
                    <button className="button is-success" type="submit">Submit Forms</button>
                </div>

                </form>
            </div>
            <FooterPage/>   
        </>
    )
} */