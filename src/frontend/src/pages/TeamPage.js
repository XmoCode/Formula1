
import {React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { RaceDetailCard } from '../components/RaceDetailCard';
import { RaceSmallCard } from '../components/RaceSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';



export const TeamPage= () => {
  
  const [team, setTeam] = useState({races : []});
  const { teamName } = useParams();


  useEffect (

    () => {
      const fetchRaces = async () => {
      
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
        const data = await response.json();
        setTeam(data);

      };
      fetchRaces ();

    }, [teamName]
    
  
  );

  if (!team || !team.constructorName)
  return <NotFound />

  const racesMap = new Map (Object.entries(team.races));
  const raceIds = Array.from(racesMap.keys());

  const years = Object.assign([], team.activeYears);
  const year = years[0];

  return (
  <div> 
      <Link className="home-link" to="/"> &#x027EA; Home</Link>
    <div className="TeamPage">
     <div className="team-name-section">
       <h1 className="team-name">{team.constructorName}</h1>
       <span>Latest Races</span>
       </div> 
     <div className="performance-chart">
       <p>Performance</p>
       <PieChart
          data={[
            { title: 'Bronze', value: team.totalBronze, color: '#583e2c' },
            { title: 'Gold', value: team.totalGold, color: '#c19d42' },
            { title: 'Silver', value: team.totalSilver, color: '#7e8085' },
            { title: 'Losses', value: team.totalRaces-team.totalGold-team.totalSilver-team.totalBronze, color: '#333842' },
    
            ]} />
       </div>

       <div className="race-detail-section">

        {raceIds.slice(0,1).map (id => <RaceDetailCard key={id} raceId={id} race={racesMap.get(id)} />)}

      </div>
     
        {raceIds.slice(1,4).map(id => <RaceSmallCard key={id} raceId={id} race={racesMap.get(id)} />)}

      <div className="more-link">

        <Link to={`/teams/${teamName}/races/${year}`}>More &#x027EB;</Link>
    
      </div>

    </div>

  </div>
  );
}

