import axios from "axios";
import {Link} from "react-router-dom";

export function Card(props){

    async function handleDelete() {
        try {
          await axios.delete(
            `https://ironrest.herokuapp.com/mytop5/${props.id}`
          );
          props.setRerender(true);
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div className="card" style={{ width: "18rem" }}>
      {/* <img src={props.img} className="card-img-top" alt={props.name} /> */}
      <div className="card-body">
      <p className="card-title">{`Comida:${props.comida}`}</p>
            <p className="card-text">{`Bebida: ${props.bebida}`}</p>
            <p className="card-text"> {`Filme: ${props.filme}`}</p>
            <p className="card-text">{`Serie: ${props.serie}`}</p>
            <p className="card-text">{`Banda: ${props.banda}`}</p>
        <Link to={`/editar-top5/${props.id}`}>
          <button type="button">Editar My Top 5</button>
        </Link>

        <button type="button" onClick={handleDelete}>
          Remover Top 5
        </button>
      </div>
    </div>
    );}

