import {React} from 'react';
import { Link } from 'react-router-dom';
import './RaceSmallCard.scss';

export const RaceSmallCard= ({race}) => {

  const racesArr = Array.from(race);
  const firstObj = Object.assign({}, racesArr[0]);

  const gold = (obj) => obj.position === '1';
  const silver = (obj) => obj.position === '2';
  const bronze = (obj) => obj.position ==='3';

  const hasGold = racesArr.some(gold);
  const hasSilver = racesArr.some(silver);
  const hasBronze = racesArr.some(bronze);
  
  let cardType ='RaceSmallCard no-wins';

  if (hasGold)
   cardType = 'RaceSmallCard won-gold';
  else if (hasSilver)
   cardType ='RaceSmallCard won-silver';
  else if (hasBronze)
  cardType = 'RaceSmallCard won-bronze';



  return (
    <div className={cardType}>
      <h2>
        <Link to={`/race/${firstObj.raceId}`}>{firstObj.raceName}</Link>
      </h2>
      <p className='race-date'>{firstObj.date}</p>
      <div className='race-location'>
        <h3 >{firstObj.location}</h3>
        <h4 >{firstObj.country}</h4>
     </div>
     
    </div>
  );
}
