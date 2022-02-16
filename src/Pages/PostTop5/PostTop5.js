import { useState } from "react";
import "./style.css"
import 'bulma/css/bulma.css'; 
import { FooterPage } from "../../Components/HomePage-Components/FooterPage/FooterPage";
import axios from "axios";

export function PostTop() {
  const [infosToSubmit, setInfosToSubmit] = useState({
    foods: [],
    drinks: [],
    movies:[],
    series:[],
    bands:[]
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
    moviesName: "",
    ranking: 0,
    image: "",
    description: "",
    });
  const [series, setSeries] = useState({
    seriesName: "",
    ranking: 0,
    image: "",
    description: "",
  });
  const [bands, setBands] = useState({
    bandsName: "",
    ranking: 0,
    image: "",
    description: "",
  });

  function handleChange(event) {
    setListInfo({ ...listInfo, [event.target.name]: event.target.value });
  }

  function handleFoods(event) {
    setFoods({ ...foods, [event.target.name]: event.target.value });
  }
  function handleDrinks(event) {
    setDrinks({ ...drinks, [event.target.name]: event.target.value });
  }

  function handleSeries(event) {
    setSeries({ ...series, [event.target.name]: event.target.value });
  }
  function handleMovies(event) {
    setMovies({ ...movies, [event.target.name]: event.target.value });
  }
  function handleBands(event) {
    setBands({ ...bands, [event.target.name]: event.target.value });
  }

  function handleAddItem() {
    setInfosToSubmit({
      ...listInfo,
      foods: [...infosToSubmit.foods, { ...foods }],
      drinks: [...infosToSubmit.drinks, { ...drinks }],
      movies: [...infosToSubmit.movies, { ...movies }],
      series: [...infosToSubmit.series, { ...series }],
      bands: [...infosToSubmit.bands, { ...bands }],

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

    

  }

  function handleSubmit(event) {
    event.preventDefault();

    for (let key in infosToSubmit) {
      if (!infosToSubmit[key]) {
        window.alert(`Faltou o campo ${key}.`);
        return;
      }
    }

    console.log("Nao caiu no if");
    axios.post("https://ironrest.herokuapp.com/mytop5", infosToSubmit);
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
            <form onSubmit={handleSubmit}>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="owner"
                    name="owner"
                    value={listInfo.owner}
                    onChange={handleChange}
                    />

                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="list name"
                    name="listName"
                    value={listInfo.listName}
                    onChange={handleChange}
                    />

                </div>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="food name"
                    name="foodName"
                    value={foods.foodName}
                    onChange={handleFoods}
                    />

                </div>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="food ranking"
                    name="ranking"
                    value={foods.ranking}
                    onChange={handleFoods}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="food image"
                    name="image"
                    value={foods.image}
                    onChange={handleFoods}
                    />

                </div>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="food description"
                    name="description"
                    value={foods.description}
                    onChange={handleFoods}
                    />

                </div>

                <div className="divBtn">
                    <button 
                    className='button is-success'
                    type="button" onClick={handleAddItem}>
                    Add food
                    </button>

                </div>
                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="drink name"
                    name="drinkName"
                    value={drinks.foodName}
                    onChange={handleDrinks}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="drink ranking"
                    type="number"
                    name="ranking"
                    value={drinks.ranking}
                    onChange={handleDrinks}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="drink image"
                    name="image"
                    value={drinks.image}
                    onChange={handleDrinks}
                    />
                </div>
                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="drink description"
                    name="description"
                    value={drinks.description}
                    onChange={handleDrinks}
                    />
                </div>      
                <button 
                className='button is-success' 
                type="button" 
                onClick={handleAddItem}>
                Add drink
                </button>

              
                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="movies name"
                    name="moviesName"
                    value={movies.moviesName}
                    onChange={handleMovies}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="movies ranking"
                    type="number"
                    name="ranking"
                    value={movies.ranking}
                    onChange={handleMovies}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="movies image"
                    name="image"
                    value={movies.image}
                    onChange={handleMovies}
                    />
                </div>
                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="movies description"
                    name="description"
                    value={movies.description}
                    onChange={handleMovies}
                    />
                </div>      
                <button 
                className='button is-success' 
                type="button" 
                onClick={handleAddItem}>
                Add Movies
                </button>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="Tv series name"
                    name="seriesName"
                    value={series.moviesName}
                    onChange={handleSeries}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="Tv series ranking"
                    type="number"
                    name="ranking"
                    value={series.ranking}
                    onChange={handleSeries}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="Link Tv series image"
                    name="image"
                    value={series.image}
                    onChange={handleSeries}
                    />
                </div>
                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="Tv Series description ou comentary"
                    name="description"
                    value={series.description}
                    onChange={handleSeries}
                    />
                </div>      
                <button 
                className='button is-success' 
                type="button" 
                onClick={handleAddItem}>
                Add Tv Series
                </button>

                <div className='input-div'>

                    <input
                    className="input is-info"
                    placeholder="bands name"
                    name="bandsName"
                    value={bands.foodName}
                    onChange={handleBands}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="bands ranking"
                    type="number"
                    name="ranking"
                    value={bands.ranking}
                    onChange={handleBands}
                    />
                </div>

                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="bands image"
                    name="image"
                    value={bands.image}
                    onChange={handleBands}
                    />
                </div>
                <div className='input-div'>
                    <input
                    className="input is-info"
                    placeholder="bands description"
                    name="description"
                    value={bands.description}
                    onChange={handleBands}
                    />
                </div>      
                <button 
                className='button is-success' 
                type="button" 
                onClick={handleAddItem}>
                Add bands
                </button>

<br></br><br></br>
                <button className="button is-success" type="submit">Submit </button>

            </form>
        </div>
    <FooterPage />
    </>

  );
}

