import { Card } from "../../Components/Card/cards-ber";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './index.css'

export function Top5(){
    const {id}= useParams();
    const [top5, setTop5] = useState([]);
    const [newrender, setNewrender] = useState(true);

    useEffect(()=>{
        async function fetchTop5(){
            try{
                const result = await axios.get(
                    `https://ironrest.herokuapp.com/mytop5/${id}`
                );
                console.log("***",result.data)
                setTop5([...result.data]);
            }catch(err){
                console.error(err);
            }
        }

        fetchTop5();
        setNewrender(false);

    },[newrender]);

    return(

        <>
        {/* TESTE */}
      {/*   <section className='sectionTop5'>
            
            <div className="textAll">

            <div className="smallTextTop">
                <p>MyTop 5!</p>
            </div>

            <div className='bigText'>
                <p>THIS IS THE BEST</p>
            </div>
            <div className='topTextTop5'>
                <p>Top 5 of : Bernardo</p>
            </div>
            </div>

        </section>
        <section>
        <div class='card-container'>
        <div class='card-base card-one'>
            <div class='imgCards'>
            </div>
            <div class='btn-base btn-one'>
                <p> #MOVIE</p>
            </div>
            <div class='textCards'>
                <p class='pAqui'><b>PROPS.NAME_M</b></p>
                <p>PROPS.DESCRIPTION_M </p> 
        </div>
        <div class="div-botao">
            <button class='btn1' href="#"><i class="fa-regular fa-pen-to-square"></i></button>
               <button class='btn1' href="#"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        </div>
        <div class='card-base card-two'>
            <div class='imgCards'>
            </div>
            <div class='btn-base btn-two'>
                <p> #TVSERIES </p>
            </div>
            <div class='textCards'>
               <p class='pAqui'><b>PROPS.NAME_S</b></p>
               <p> PROPS.DESCRIPTION_S </p> 
       </div>
       <div class="div-botao">
        <button class='btn2' href="#"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class='btn2' href="#"><i class="fa-regular fa-trash-can"></i></button>
       </div>    
        </div>
        <div class='card-base card-three'>
            <div class='imgCards'>
            </div>
            <div class='btn-base btn-three'>
                    <p>#BEBIDA </p>
                </div>
                <div class='textCards'>
                   <p class='pAqui'><b>CERVEJA</b></p>
                   <p> A MELHOR BEBIDA DE TODAS !</p> 
           </div>
           <div class="div-botao">
               <button class='btn3' href="#"><i class="fa-regular fa-pen-to-square"></i></button>
               <button class='btn3' href="#"><i class="fa-regular fa-trash-can"></i></button>
           </div>   
        </div>
        <div class='card-base card-four'>
            <div class='imgCards'>
            </div>
            <div class='btn-base btn-four'>
                    <p>#BANDS </p>
                </div>
                <div class='textCards'>
                   <p class='pAqui'><b>PROPS.NAME_B</b></p>
                   <p> PROPS.DESCRIPTION_B </p> 
           </div>
           <div class="div-botao">
            <button class='btn4' href="#"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class='btn4' href="#"><i class="fa-regular fa-trash-can"></i></button>
           </div>       
        </div>
        <div class='card-base card-five'>
            <div class='imgCards'>
            </div>
            <div class='btn-base btn-five'>
                    <p>#FOODS </p>
                </div>
                <div class='textCards'>
                   <p class='pAqui'><b>PROPS.NAME_F</b></p>
                   <p> PROPS.DESCRIPTION_F melhor comida de todas, recieta aqui é nois gosto tant oque como</p> 
           </div>
           <div class="div-botao">
            <button class='btn5' href="#"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class='btn5' href="#"><i class="fa-regular fa-trash-can"></i></button>
           </div>  
        </div>
    </div>
        </section> */}

        {/* TESTE */}

        {top5.map((currentTop5)=>{
            return(
<>
        <section className='sectionAll'>
            
            <div className="textAll">

            <div className="smallTextTop">
                <p>Hello, everyone !</p>
            </div>

            <div className='bigText'>
                <p>THIS IS THE LIST OF ALL TOP 5</p>
            </div>
            <div className='topTextALL top5'>
                <p>Top 5 of {currentTop5.name}</p>
            </div>
            </div>

        </section>
        <section>
            
        </section>

                <Card

                id={currentTop5._id}
                key={currentTop5._id}

                name_m={currentTop5.name_m}
                image_m={currentTop5.image_m}
                description_m={currentTop5.description_m}

                name_s={currentTop5.name_s}
                image_s={currentTop5.image_s}
                description_s={currentTop5.description_s}

                name_b={currentTop5.name_b}
                image_b={currentTop5.image_b}
                description_b={currentTop5.description_b}

                name_d={currentTop5.name_d}
                image_d={currentTop5.image_d}
                description_d={currentTop5.description_d}
                
                name_f={currentTop5.name_f}
                image_f={currentTop5.image_f}
                description_f={currentTop5.description_f}

                
                
                />
                </>
            )
        })}

        
        </>
    );
}