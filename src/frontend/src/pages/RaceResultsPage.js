import {React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';

import './RaceResultsPage.scss';



export const RaceResultsPage= () => {

  const [race, setRace] = useState([]);
  const {raceId} = useParams();
 

  useEffect (
    () => {
      const fetchRaceResults = async () => {
        
        const respose = await fetch (`${process.env.REACT_APP_API_ROOT_URL}/race/${raceId}`);
        const data = await respose.json();
        setRace(data);
      };
      fetchRaceResults ();

    }, [raceId]

  )

  const raceArr = Object.assign([], race);
  const firstObj = Object.assign ({}, raceArr[0]);


  return (
  <div> 
    <Link className="home-link" to="/"> &#x027EA; Home</Link>

    <div className="RaceResultsPage">

      <div>
        <h1 className="page-heading"> {firstObj.raceName}</h1> 
        <div className="race-detail">
        <p className='race-date'>{firstObj.date}</p>
        <h3 className='race-venue'>{firstObj.circuitName}</h3>
        <h4 className='race-location'>{firstObj.location},  {firstObj.country}</h4>
        <div className='additional-detail'>
        <p>lat {firstObj.lat}</p> 
        <p>lng {firstObj.lng}</p>
        <p>alt {firstObj.alt}</p> 
      </div>

        <h3 className="results-header">Results</h3>
     
      </div>
   
      <div className="cards-header">
        <p>Pos</p>
        <p>Constructor</p>
        <p>Driver</p>
        <p>Laps</p>
        <p>Status</p>
        <p>Time</p>
        <p>Milliseconds</p>
        <p>Points</p>

      </div>
        {raceArr.map(resObj => <ResultCard key={resObj.resultId} result={resObj} />)}
      </div>

    </div>
    
 </div> 
  );
}