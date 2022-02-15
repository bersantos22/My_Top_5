import { useState } from "react";
import axios from "axios";


export function PostMyTop() {
  

  const [form, setForm] = useState({
    comida: "",
    bebida: "",
    filme: "",
    serie: "",
    banda: "",
    img_filme: "",
    img_serie: "",
  });

  
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Faltou o campo ${key}.`);
        return;
      }
    }

    console.log("Nao caiu no if");
    axios.post("https://ironrest.herokuapp.com/mytop5", form);
  }

  return (
   
    <div className="container">
   
   <form onSubmit={handleSubmit}>
      <label htmlFor="comida">Comida:</label>
      <input
        id="comida"
        placeholder="Batata frita"
        name="comida"
        value={form.comida}
        onChange={handleChange}
      />
    
      <label htmlFor="bebida">Bebida:</label>
      <input
        id="bebida"
        name="bebida"
        value={form.bebida}
        onChange={handleChange}
      />
      
      <label htmlFor="favoriteToy">Filme:</label>
      <input
        id="filme"
        name="filme"
        value={form.filme}
        onChange={handleChange}
      />

    <label htmlFor="serie">Serie:</label>
      <input
        id="serie"
        name="serie"
        value={form.serie}
        onChange={handleChange}
      />

    <label htmlFor="banda">Banda:</label>
      <input
        id="banda"
        name="banda"
        value={form.banda}
        onChange={handleChange}
      />
      <label htmlFor="img_filme">Link foto filme:</label>
      <input id="img_filme" name="img_filme" value={form.img_filme} onChange={handleChange} />
      <label htmlFor="img_serie">Link foto filme:</label>
      <input id="img_serie" name="img_serie" value={form.img_serie} onChange={handleChange} />
      <button type="submit">Submit 5</button>
    </form>

    </div>
  );
}

