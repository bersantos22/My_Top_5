import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function EditTop5(){
    const params = useParams();
    const [form, setForm] = useState({

      
    });

    useEffect(()=>{
        async function fetchTop5(){
        try{
            const response = await axios.get(
                `https://ironrest.herokuapp.com/mytop5/${params.id}`
            );
            console.log(response);
            setForm({...response.data});
        }catch(error){
            console.error(error);
        }
        }
        
        fetchTop5();
        
    },[]);

    function handleChange(event){
        setForm({...form, [event.target.name_owner]:event.target.value});
        console.log(form)
    }
      
    function handleSubmit(event) {
        event.preventDefault();
    
        for (let key in form) {
          if (!form[key]) {
            window.alert(`Peencher o campo ${key}.`);
            return;
          }
        }

        delete form._id;
    axios
      .put(`https://ironrest.herokuapp.com/mytop5/${params.id}`, form)
      .then((result) => console.log(result))
      .catch((error) => {
        console.error(error);
      });

    }    


     return(


        <div className="container">
   
    <div className="fomulario">

    


   <form onSubmit={handleSubmit}>
     
   <label htmlFor="name_owner">Listo do:</label>
      <input
        id="name_owner"
        
        name="name_owner"
        value={form.name_owner}
        onChange={handleChange}
      />

<label htmlFor="name_top">Nome da lista:</label>
      <input
        id="name_top"
        
        name="name_top"
        value={form.name_top}
        onChange={handleChange}
      />
     
      <label htmlFor="comida1"> Comidas:</label>
      <input
        id="comida1"
        placeholder=""
        name="comida"
        value={form.comidas.comida1}
        onChange={handleChange}
      />

      <label htmlFor="comida2"> Comida:</label>
      <input
        id="comida2"
        placeholder="Batata frita"
        name="comida2"
        value={form.comida2}
        onChange={handleChange}
      />

<label htmlFor="comida3">#3 Comida:</label>
      <input
        id="comida3"
        placeholder="Batata frita"
        name="comida3"
        value={form.comida3}
        onChange={handleChange}
        />

  <label htmlFor="comida4">#4 Comida:</label>
      <input
        id="comida4"
        placeholder="Batata frita"
        name="comida4"
        value={form.comida4}
        onChange={handleChange}
        />

        <label htmlFor="comida5">#5 Comida:</label>
      <input
        id="comida5"
        placeholder="Batata frita"
        name="comida5"
        value={form.comida5}
        onChange={handleChange}
        />

      

      

      <label htmlFor="bebida1">#1 Bebida:</label>
      <input
        id="bebida1"
        name="bebida1"
        value={form.bebida1}
        onChange={handleChange}
      />
     
     <label htmlFor="bebida2">#2 Bebida:</label>
      <input
        id="bebida2"
        name="bebida2"
        value={form.bebida2}
        onChange={handleChange}
      />

<label htmlFor="bebida3">#3 Bebida:</label>
      <input
        id="bebida3"
        name="bebida3"
        value={form.bebida3}
        onChange={handleChange}
      />
      
      <label htmlFor="bebida4">#4 Bebida:</label>
      <input
        id="bebida4"
        name="bebida4"
        value={form.bebida4}
        onChange={handleChange}
      />

<label htmlFor="bebida5">#5 Bebida:</label>
      <input
        id="bebida5"
        name="bebida5"
        value={form.bebida5}
        onChange={handleChange}
      />



      <label htmlFor="filme1">#1 Filme:</label>
      <input
        id="filme1"
        name="filme1"
        value={form.filme1}
        onChange={handleChange}
      />

<label htmlFor="filme2">#2 Filme:</label>
      <input
        id="filme2"
        name="filme2"
        value={form.filme2}
        onChange={handleChange}
      />

<label htmlFor="filme3">#3 Filme:</label>
      <input
        id="filme3"
        name="filme3"
        value={form.filme3}
        onChange={handleChange}
      />

<label htmlFor="filme4">#4 Filme:</label>
      <input
        id="filme4"
        name="filme4"
        value={form.filme4}
        onChange={handleChange}
      />

<label htmlFor="filme5">#5 Filme:</label>
      <input
        id="filme5"
        name="filme5"
        value={form.filme5}
        onChange={handleChange}
      />

    <label htmlFor="serie1">#1 Serie:</label>
      <input
        id="serie1"
        name="serie1"
        value={form.serie1}
        onChange={handleChange}
      />
<label htmlFor="serie2">#2 Serie:</label>
      <input
        id="serie2"
        name="serie2"
        value={form.serie2}
        onChange={handleChange}
      />
      
      <label htmlFor="serie3">#3 Serie:</label>
      <input
        id="serie3"
        name="serie3"
        value={form.serie3}
        onChange={handleChange}
      />

<label htmlFor="serie4">#4 Serie:</label>
      <input
        id="serie4"
        name="serie4"
        value={form.serie4}
        onChange={handleChange}
      />

<label htmlFor="serie5">#5 Serie:</label>
      <input
        id="serie5"
        name="serie5"
        value={form.serie5}
        onChange={handleChange}
      />


    <label htmlFor="banda1">#1 Banda:</label>
      <input
        id="banda1"
        name="banda1"
        value={form.banda1}
        onChange={handleChange}
      />
      
      <label htmlFor="banda2">#2 Banda:</label>
      <input
        id="banda2"
        name="banda2"
        value={form.banda2}
        onChange={handleChange}
      />

<label htmlFor="banda3">#3 Banda:</label>
      <input
        id="banda3"
        name="banda3"
        value={form.banda3}
        onChange={handleChange}
      />

<label htmlFor="banda4">#4 Banda:</label>
      <input
        id="banda4"
        name="banda4"
        value={form.banda4}
        onChange={handleChange}
      />

<label htmlFor="banda5">#5 Banda:</label>
      <input
        id="banda5"
        name="banda5"
        value={form.banda5}
        onChange={handleChange}
      />

      <label htmlFor="img_filme">Link foto filme:</label>
      <input id="img_filme" name="img_filme" value={form.img_filme} onChange={handleChange} />
      <label htmlFor="img_serie">Link foto filme:</label>
      <input id="img_serie" name="img_serie" value={form.img_serie} onChange={handleChange} />
      <button type="submit">Submit 5</button>
    </form>
    </div>
    </div>

     )   

}