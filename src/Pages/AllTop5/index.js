import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage"
import './index.css'

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

    <section className='sectionAll'>
    
        <div className="textAll">

            <div className="smallTextTop">
                <p>Hello, everyone !</p>
            </div>

            <div className='bigText'>
                <p>THIS IS THE LIST OF ALL TOP 5</p>
            </div>
    
        </div>

    </section>

        <div className='topTextALL'>
            <p>Names:</p>
        </div>

        <div className='listTop5'>
            {names.map((currenteName)=>{
                return (
                    <Link className='linkALLTop' to={`/user-top-5/${currenteName._id}`}><h3>{currenteName.name_owner}</h3></Link>
                )
            })}
        </div>

        <FooterPage />
    </>


)

}