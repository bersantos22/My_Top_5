import { useState } from "react";
import axios from "axios";
import "./style.module.css"
import { eventWrapper } from "@testing-library/user-event/dist/utils";


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
    <div className="App">
      <form>
        <input
          placeholder="owner"
          name="owner"
          value={listInfo.owner}
          onChange={handleChange}
        />
        <input
          placeholder="list name"
          name="listName"
          value={listInfo.listName}
          onChange={handleChange}
        />

        <input
          placeholder="food name"
          name="foodName"
          value={foods.foodName}
          onChange={handleFoods}
        />
        <input
          placeholder="food ranking"
          name="ranking"
          value={foods.ranking}
          onChange={handleFoods}
        />
        <input
          placeholder="food image"
          name="image"
          value={foods.image}
          onChange={handleFoods}
        />
        <input
          placeholder="food description"
          name="description"
          value={foods.description}
          onChange={handleFoods}
        />

        <button type="button" onClick={handleAddItem}>
          Add food
        </button>

        <input
          placeholder="drink name"
          name="drinkName"
          value={drinks.drinkName}
          onChange={handleDrinks}
        />
        <input
          placeholder="drink ranking"
          type="number"
          name="ranking"
          value={drinks.ranking}
          onChange={handleDrinks}
        />
        <input
          placeholder="drink image"
          name="image"
          value={drinks.image}
          onChange={handleDrinks}
        />
        <input
          placeholder="drink description"
          name="description"
          value={drinks.description}
          onChange={handleDrinks}
        />

        <button type="button" onClick={handleAddItem}>
          Add drink
        </button>

        

      </form>
    </div>
  );
}

