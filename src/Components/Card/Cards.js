import axios from "axios";
import {Link} from "react-router-dom";

export function Card(props){


    return(
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src={props.img} className="card-img-top" alt={props.name} /> */}
          <div className="card-body">
            <h5 className="card-title">{`Comida:${props.comida}`}</h5>
            <p className="card-text">{`Bebida: ${props.bebida}`}</p>
            <p className="card-text"> {`Filme: ${props.filme}`}</p>
            <p className="card-text">{`Serie: ${props.serie}`}</p>
            <Link to={`/editar-pet/${props.id}`}>
              <button type="button">Editar My Top 5</button>
            </Link>
    
            <button type="button" onClick={handleDelete}>
              Remover Pet
            </button>
          </div>
        </div>
      );
}
