import {React} from 'react';
import { Link } from "react-router-dom";
import './ResultCard.scss';

export const ResultCard= ({result}) => {
    
    return (
        <div className="ResultCard">
            <p>{result.position}</p>
            <p>
                <Link to={`/teams/${result.constructorName}`}>{result.constructorName}</Link>
            </p>
            <p>{result.driverName}</p>
            <p>{result.laps}</p>
            <p>{result.status}</p>
            <p>{result.time}</p>
            <p>{result.milliseconds}</p>
            <p>{result.points}</p>
            
        </div>
      );
    }

    