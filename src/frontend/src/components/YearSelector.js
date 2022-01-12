import {React} from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss';


export const YearSelector= ({activeYears, teamName}) => {

const years = Object.assign([], activeYears);

return (
    <ol className="YearSelector">
       {years.map(year => (
       
       <li key={year}>
           <Link to={`/teams/${teamName}/races/${year}`}>{year}</Link>
           
        </li>
           
        ))}
        

    </ol>

    );

}

