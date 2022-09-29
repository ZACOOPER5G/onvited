import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandingPage'
import './App.css';
import { Create } from './components/Create';
import { Event } from './components/Event';
import { useState } from 'react';

function App() {
  const [eventDetails, setEventDetails] = useState({});

  return (
      <Container className="mb-4" >
        <Router>
          <Routes>
            <Route path="/" element={ <LandingPage />} />
            <Route path="/create" element={ <Create onChange={value => setEventDetails(value)} /> } />
            <Route path="/event" element={ 
            <Event 
              eventName={eventDetails.eventName} 
              eventStart={eventDetails.start}
              eventEnd={eventDetails.end}
              eventLocation={eventDetails.location}
              eventUrl={eventDetails.url}
              eventDescription={eventDetails.description}
            /> } />
          </Routes>
        </Router>
      </Container > 
  );
}

export default App;
