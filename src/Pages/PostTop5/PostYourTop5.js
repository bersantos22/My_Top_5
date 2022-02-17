import React from 'react'
import { useState } from "react";
import "./style.css"
import 'bulma/css/bulma.css'; 
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function PostYourTop5(){
    const navigate = useNavigate()
   
    const [form, setForm] = useState({
     
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
        console.log("to mudando");
        setForm({ ...form, [event.target.name]: event.target.value });
        
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        for (let key in form) {
          if (!form[key]) {
            window.alert(`Faltou o campo ${key}.`);
            return;
          }
        }
    
        console.log("Temos um probleminha");
        axios.post("https://ironrest.herokuapp.com/mytop5", form).then(()=>{
            navigate("/alltop5")
        });
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
                    className="input is-info"
                    id="name"
                    placeholder="Owner's Name"
                    name="name"
                    value={form.name}  
                    onChange={handleChange}      
                    />
                </div>

            </div>


                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="movie">Movie name:</label>
                        <input
                        id="name_m"
                        className="input is-info"
                        placeholder="Name of your favorite Movie"
                        name="name_m"
                        value={form.name_m}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="image_m">Image Link:</label>
                            <input
                            className="input is-info"
                            placeholder="Movie image Link "
                            name="image_m"
                            value={form.image_m}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                        <label  htmlFor="description_m">Movie description:</label>
                        <input
                        className="input is-info"
                        placeholder="Short description of the movie"
                        name="description_m"
                        value={form.description_m}
                        onChange={handleChange}                        
                        />

                        </div>

                </div>


                <div className='inputSingle-div'>

                <div className='input-div'>

                    <label  htmlFor="name_s">TvSerie name:</label>
                    <input
                    id="name_s"
                    className="input is-info"
                    placeholder="Name of your favorite TvSerie"
                    name="name_s"
                    value={form.name_s}
                    onChange={handleChange}                       
                    />

                </div>

                    <div className='input-div'>

                        <label  htmlFor="image_s">Image Link:</label>
                        <input
                        id="image_s"
                        className="input is-info"
                        placeholder="TvSerie image Link "
                        name="image_s"
                        value={form.image_s}
                        onChange={handleChange}                      
                        />
                    </div>

                    <div className='input-div'>

                        <label  htmlFor="description_s">TvSerie description:</label>
                        <input
                        id="description_s"
                        className="input is-info"
                        placeholder="Why is this your favorite TvShow?"
                        name="description_s"
                        value={form.description_s}
                        onChange={handleChange}                        
                        />

                    </div>

                </div> 

                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="name_d">Drink name:</label>
                        <input
                        id="name_d"
                        className="input is-info"
                        placeholder="Name of your favorite drink"
                        name="name_d"
                        value={form.name_d}
                        onChange={handleChange}                       
                        />
                    </div>

                        <div className='input-div'>

                            <label  htmlFor="image_d">Image Link:</label>
                            <input
                            id="image_d"
                            className="input is-info"
                            placeholder="Drink image Link "
                            name="image_d"
                            value={form.image_d}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="description_d">Drink description:</label>
                            <input
                            className="input is-info"
                            placeholder="A description of your favorite drink"
                            name="description_d"
                            value={form.description_d}
                            onChange={handleChange}                        
                            />
                            </div>

                </div>  

                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="name_b">Band name:</label>
                        <input
                        id="name_b"
                        className="input is-info"
                        placeholder="Name of your favorite band"
                        name="name_b"
                        value={form.name_b}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="image_b">Image Link:</label>
                            <input
                            id="image_b"
                            className="input is-info"
                            placeholder="Band image Link "
                            name="image_b"
                            value={form.image_b}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="description_b">Band Songs:</label>
                            <input
                            id="description_b"
                            className="input is-info"
                            placeholder="The best songs by this band"
                            name="description_b"
                            value={form.description_b}
                            onChange={handleChange}                        
                            />

                        </div>

                </div>


                <div className='inputSingle-div'>

                    <div className='input-div'>

                        <label  htmlFor="name_f">Food name:</label>
                        <input
                        id="name_f"
                        className="input is-info"
                        placeholder="Name of your favorite food"
                        name="name_f"
                        value={form.name_f}
                        onChange={handleChange}                       
                        />

                    </div>

                        <div className='input-div'>

                            <label  htmlFor="image_f">Image Link:</label>
                            <input
                            id="image_f"
                            className="input is-info"
                            placeholder="Food image Link "
                            name="image_f"
                            value={form.image_f}
                            onChange={handleChange}                      
                            />
                        </div>

                        <div className='input-div'>

                            <label  htmlFor="description_f">Food description:</label>
                            <input
                            id="description_f"
                            className="input is-info"
                            placeholder="A description of your favorite food"
                            name="description_f"
                            value={form.description_f}
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
    }