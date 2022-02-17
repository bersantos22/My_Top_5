import { Card } from "../../Components/Card/cards-ber";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        
        {top5.map((currentTop5)=>{
            return(
                <Card
                id={currentTop5._id}
                key={currentTop5._id}

                name={currentTop5.name}

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
            )
        })}

        
        </>
    );
}