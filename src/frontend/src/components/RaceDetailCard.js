import {React} from 'react';
import { Link } from 'react-router-dom';
import './RaceDetailCard.scss';

export const RaceDetailCard= ({team, race}) => {
  if (!race) return null;


  const raceArr = Array.from(race);
  const firstObj = Object.assign({}, raceArr[0]);   

  raceArr.sort(function(a,b) {
    if(a.positionOrder < b.positionOrder) return -1;
    else if (a.positionOrder > b.positionOrder) return 1;
    return 0;
  })  

  const gold = (obj) => obj.position === '1';
  const silver = (obj) => obj.position === '2';
  const bronze = (obj) => obj.position ==='3';

  const hasGold = raceArr.some(gold);
  const hasSilver = raceArr.some(silver);
  const hasBronze = raceArr.some(bronze);
  
  let cardType ='RaceDetailCard no-wins';

  if (hasGold)
   cardType = 'RaceDetailCard won-gold';
  else if (hasSilver)
   cardType ='RaceDetailCard won-silver';
  else if (hasBronze)
  cardType = 'RaceDetailCard won-bronze';


  return (
    <div className={cardType}>
      <div>
        <h2 className='race-name'>
          <Link to={`/race/${firstObj.raceId}`}>{firstObj.raceName}</Link>
        </h2>
        <p className='race-date'>{firstObj.date}</p>
        <h3 className='race-venue'>{firstObj.circuitName}</h3>
        <h4 className='race-location'>{firstObj.location},  {firstObj.country}</h4>
        <div className='additional-detail'>
          <p>lat {firstObj.lat}</p> 
          <p>lng {firstObj.lng}</p>
          <p>alt {firstObj.alt}</p> 
        </div>
     
      </div>
   
      <div className='race-result'>
        <p>Position</p>
        {raceArr.map(row => 
         <div key={row.resultId}>   
              <h3>{row.driverName} </h3> 
              <h4>{row.position} </h4> 
    
         </div> 
        )}

      </div>
    </div>

  );
}
