/* import { Card } from "../../Components/Card/cards-ber";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//págia de cards
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
                key={currentTop5._id}
                name_owner={currentTop5.name_owner}
                setNewrender={setNewrender}
                
                
                />
            )
        })}

        
        </>
    );
} */