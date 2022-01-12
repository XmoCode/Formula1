import {React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { RaceDetailCard } from '../components/RaceDetailCard';
import { YearSelector } from '../components/YearSelector';
import './RacesPage.scss';



export const RacesPage= () => {

  const [races, setRaces] = useState({race : {}});
  const [team, setTeam] = useState({races : []});

  const {teamName, year} = useParams();
 

  useEffect (
    () => {
      const fetchRaces = async () => {
        
        const respose = await fetch (`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/races?year=${year}`);
        const data = await respose.json();
        setRaces(data);

        const responseTeam = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
        const dataTeam = await responseTeam.json();
        setTeam(dataTeam);


      };
      fetchRaces ();


    }, [teamName, year]

  )

  if (!races || !team)
  return <NotFound />

  const racesMap = new Map (Object.entries(races));
  const raceIds = Array.from(racesMap.keys());


  return (
  <div> 
      <Link className="home-link" to="/"> &#x027EA; Home</Link>
    
    <div className="RacesPage">
      <div className="year-selector">
      <h5> Select Year </h5>
      <YearSelector activeYears={team.activeYears} teamName={teamName}/>

      </div>

       <div>
      <h1 className="page-heading"> {teamName} races in {year}</h1> 
      {raceIds.map(id => <RaceDetailCard key={id} raceIds={id} race={racesMap.get(id)} />)}

      </div>
 
    </div>

  </div>

  );
}