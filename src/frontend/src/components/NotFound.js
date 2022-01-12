import {React} from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';


export const NotFound= () => {

return (
   
     <div className="NotFound">

        <Link className="home-link" to="/"> &#x027EA; Home</Link>

    
            <h1 className="not-found">Data not found</h1> 

    </div>

)

}