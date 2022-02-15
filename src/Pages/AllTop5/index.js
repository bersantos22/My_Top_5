import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export function AllTop5(){

    const [names, setNames] = useState([])

useEffect(()=>{
    async function fetchAllTop5(){
        try{
            const result =await axios.get(
                `https://ironrest.herokuapp.com/mytop5`
            )
            setNames([...result.data])
        }catch(err){
            console.error(err)
        }
    }
    fetchAllTop5();
}, [])

    return(
    <>

    <h1>Este é o top 5 topzera</h1>

        <div>
            {names.map((currenteName)=>{
                return (
                    <Link to={`/user-top-5/${currenteName._id}`}><h3>{currenteName.name_owner}</h3></Link>
                )
            })}
        </div>

    </>


)

}