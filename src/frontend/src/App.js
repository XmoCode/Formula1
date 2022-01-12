import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { RacesPage } from './pages/RacesPage';
import { RaceResultsPage } from './pages/RaceResultsPage';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      
            <Route path="/teams/:teamName/races/:year" element={<RacesPage />} />
            <Route path="/teams/:teamName" element={<TeamPage />} />
            <Route path="/race/:raceId" element={<RaceResultsPage />} />
            <Route path="/" element={<HomePage />} />
        
        </Routes> 
      </Router>
 

    </div>
  );
}

export default App;
