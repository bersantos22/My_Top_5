import { Card } from "../../Components/Card/cards-ber";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './index.css'

//págia de cards
export function Top5(){
    const {id}= useParams();
    const [top5, setTop5] = useState([]);
   /*  const [newrender, setNewrender] = useState(true); */

    useEffect(()=>{
        async function fetchTop5(){
            try{
                const result = await axios.get(
                    `https://ironrest.herokuapp.com/mytop5/${id}`
                );

                setTop5({...result.data});
            }catch(err){
                console.error(err);
            }
        }

        fetchTop5();


    },[]);

    return(

        <>

 
        <section className='sectionAll'>
            
            <div className="textAll">

            <div className="smallTextTop">
                <p>My Top 5 </p>
            </div>

            <div className='bigText'>
                <p>THIS IS THE BEST</p>
            </div>
            <div className='nameTop5'>
                <p>Top 5 of  {top5.name}</p>
            </div>
            </div>

        </section>

        <section>
            
      

        
               <Card
                id={top5._id}
                key={top5._id}

                name={top5.name}

                name_m={top5.name_m}
                image_m={top5.image_m}
                description_m={top5.description_m}

                name_s={top5.name_s}
                image_s={top5.image_s}
                description_s={top5.description_s}

                name_b={top5.name_b}
                image_b={top5.image_b}
                description_b={top5.description_b}

                name_d={top5.name_d}
                image_d={top5.image_d}
                description_d={top5.description_d}
                
                name_f={top5.name_f}
                image_f={top5.image_f}
                description_f={top5.description_f}

                
        
                />
  </section>
                </>
            )
    
    
}