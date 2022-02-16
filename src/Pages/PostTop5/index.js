import { useState } from "react";
import axios from "axios";
import "./style.css"
import 'bulma/css/bulma.css'; 
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";


//adicionar top 5 do usuário
export function PostMyTop() {
  

  const [infosToSubmit, setInfosToSubmit] = useState({
    foods: [],
    drinks: [],
  });

  const [listInfo, setListInfo] = useState({
    owner: "",
    listName: "",
    comments: [],
  });

  const [foods, setFoods] = useState({
    foodName: "",
    ranking: 0,
    image: "",
    description: "",
  });
  const [drinks, setDrinks] = useState({
    drinkName: "",
    ranking: 0,
    image: "",
    description: "",
  });
  const [movies, setMovies] = useState({
    movieName:"",
    ranking:0,
    image:"",
    description:"",
  })

  function handleChange(event) {
    setListInfo({ ...listInfo, [event.target.name]: event.target.value });
  }

  function handleFoods(event) {
    setFoods({ ...foods, [event.target.name]: event.target.value });
  }

  function handleDrinks(event) {
    setDrinks({ ...drinks, [event.target.name]: event.target.value });
  }

  function handleMovies(event){
    setMovies({...movies, [event.target.name]:eventWrapper.target.value});
  }

  function handleAddItem() {
    setInfosToSubmit({
      ...listInfo,
      foods: [...infosToSubmit.foods, { ...foods }],
      drinks: [...infosToSubmit.drinks, { ...drinks }],
      movies:[...infosToSubmit.movies, {...movies}],
    });

    console.log(infosToSubmit);

    setFoods({
      foodName: "",
      ranking: 0,
      image: "",
      description: "",
    });

    setDrinks({
      drinkName: "",
      ranking: 0,
      image: "",
      description: "",
    });

    setMovies({
      movieName:"",
      ranking:0,
      image:"",
      description:"",
    })
  }

  return (
   
    <>
    <section className='sectionAll'>
    
    <div className="textAll">

    <div className="smallTextTop">
        <p>Create your Top 5 is easy!</p>
    </div>

    <div className='textForms'>
        <p>Choose the best ones and fill our form with names, image links and description:</p>
    </div>

    </div>
    </section>
        <div className="container1">
      
        <div className="fomulario">

        


      <form onSubmit={handleSubmit}>
        
      <label className='labelClass' htmlFor="name_owner">Listo do:</label>
          <input className="input is-info"
            id="name_owner"
            
            name="name_owner"
            value={form.name_owner}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="name_top">Nome da lista:</label>
          <input className="input is-info"
            id="name_top"
            
            name="name_top"
            value={form.name_top}
            onChange={handleChange}
          />
        
          <label className='labelClass' htmlFor="comida1">#1 Comida:</label>
          <input className="input is-info"
            id="comida1"
            placeholder="Batata frita"
            name="comida1"
            value={form.comida1}
            onChange={handleChange}
          />

          <label className='labelClass' htmlFor="comida2">#2 Comida:</label>
          <input className="input is-info"
            id="comida2"
            placeholder="Batata frita"
            name="comida2"
            value={form.comida2}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="comida3">#3 Comida:</label>
          <input className="input is-info"
            id="comida3"
            placeholder="Batata frita"
            name="comida3"
            value={form.comida3}
            onChange={handleChange}
            />

      <label className='labelClass' htmlFor="comida4">#4 Comida:</label>
          <input className="input is-info"
            id="comida4"
            placeholder="Batata frita"
            name="comida4"
            value={form.comida4}
            onChange={handleChange}
            />

            <label className='labelClass' htmlFor="comida5">#5 Comida:</label>
          <input className="input is-info"
            id="comida5"
            placeholder="Batata frita"
            name="comida5"
            value={form.comida5}
            onChange={handleChange}
            />

          

          

          <label className='labelClass' htmlFor="bebida1">#1 Bebida:</label>
          <input className="input is-info"
            id="bebida1"
            name="bebida1"
            value={form.bebida1}
            onChange={handleChange}
          />
        
        <label className='labelClass' htmlFor="bebida2">#2 Bebida:</label>
          <input className="input is-info"
            id="bebida2"
            name="bebida2"
            value={form.bebida2}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="bebida3">#3 Bebida:</label>
          <input className="input is-info"
            id="bebida3"
            name="bebida3"
            value={form.bebida3}
            onChange={handleChange}
          />
          
          <label className='labelClass' htmlFor="bebida4">#4 Bebida:</label>
          <input className="input is-info"
            id="bebida4"
            name="bebida4"
            value={form.bebida4}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="bebida5">#5 Bebida:</label>
          <input className="input is-info"
            id="bebida5"
            name="bebida5"
            value={form.bebida5}
            onChange={handleChange}
          />



          <label className='labelClass' htmlFor="filme1">#1 Filme:</label>
          <input className="input is-info"
            id="filme1"
            name="filme1"
            value={form.filme1}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="filme2">#2 Filme:</label>
          <input className="input is-info"
            id="filme2"
            name="filme2"
            value={form.filme2}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="filme3">#3 Filme:</label>
          <input className="input is-info"
            id="filme3"
            name="filme3"
            value={form.filme3}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="filme4">#4 Filme:</label>
          <input className="input is-info"
            id="filme4"
            name="filme4"
            value={form.filme4}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="filme5">#5 Filme:</label>
          <input className="input is-info"
            id="filme5"
            name="filme5"
            value={form.filme5}
            onChange={handleChange}
          />

        <label className='labelClass' htmlFor="serie1">#1 Serie:</label>
          <input className="input is-info"
            id="serie1"
            name="serie1"
            value={form.serie1}
            onChange={handleChange}
          />
    <label className='labelClass' htmlFor="serie2">#2 Serie:</label>
          <input className="input is-info"
            id="serie2"
            name="serie2"
            value={form.serie2}
            onChange={handleChange}
          />
          
          <label className='labelClass' htmlFor="serie3">#3 Serie:</label>
          <input className="input is-info"
            id="serie3"
            name="serie3"
            value={form.serie3}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="serie4">#4 Serie:</label>
          <input className="input is-info"
            id="serie4"
            name="serie4"
            value={form.serie4}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="serie5">#5 Serie:</label>
          <input className="input is-info"
            id="serie5"
            name="serie5"
            value={form.serie5}
            onChange={handleChange}
          />


        <label className='labelClass' htmlFor="banda1">#1 Banda:</label>
          <input className="input is-info"
            id="banda1"
            name="banda1"
            value={form.banda1}
            onChange={handleChange}
          />
          
          <label className='labelClass' htmlFor="banda2">#2 Banda:</label>
          <input className="input is-info"
            id="banda2"
            name="banda2"
            value={form.banda2}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="banda3">#3 Banda:</label>
          <input className="input is-info"
            id="banda3"
            name="banda3"
            value={form.banda3}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="banda4">#4 Banda:</label>
          <input className="input is-info"
            id="banda4"
            name="banda4"
            value={form.banda4}
            onChange={handleChange}
          />

    <label className='labelClass' htmlFor="banda5">#5 Banda:</label>
          <input className="input is-info"
            id="banda5"
            name="banda5"
            value={form.banda5}
            onChange={handleChange}
          />

          <label className='labelClass' htmlFor="img_filme">Link foto filme:</label>
          <input className="input is-info" id="img_filme" name="img_filme" value={form.img_filme} onChange={handleChange} />
          <label className='labelClass' htmlFor="img_serie">Link foto filme:</label>
          <input className="input is-info" id="img_serie" name="img_serie" value={form.img_serie} onChange={handleChange} />
          <br></br><br></br>
          <button className="button is-success" type="submit">Submit </button>
        </form>
        </div>
        
        </div>
        <FooterPage />
    </>
  );
}

