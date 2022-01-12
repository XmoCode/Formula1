
import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';


export const HomePage= () => {
  
  const [teams, setTeams] = useState([]);


  useEffect (

    () => {
      const fetchTeams = async () => {
      
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
        const data = await response.json();
        setTeams(data); 

      };
      fetchTeams ();

    }, []
    
  
  );


  const teamsArr = Object.assign([], teams);

  return (
    <div className="HomePage">
        <div className='app-name'>
          <p id='dashboard'>Dashboard </p>
          <h2>Formula 1 World Championship (1950 - 2021)</h2>
        
        </div>
        <div className="team-grid">
            {teamsArr.map(team => <TeamTile key={team.constructorId} teamName={team.constructorName}/>)}

        </div>
    
    </div>
  );
}

