import { Link } from "react-router-dom";
import './error.css';

function Error(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h3>Página não encontrada!</h3>
            <Link to='/'>Veja todos os filmes</Link>
        </div>
    );
}

export default Error;