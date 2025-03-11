import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend.onrender.com/races')
      .then(response => {
        setRaces(response.data.data);
      })
      .catch(error => {
        console.error("There was an error fetching the races!", error);
      });
  }, []);

  return (
    <div>
      <h1>Sykkelritt 2025</h1>
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Dato</th>
            <th>URL</th>
            <th>Påmelding URL</th>
          </tr>
        </thead>
        <tbody>
          {races.map(race => (
            <tr key={race.id}>
              <td>{race.name}</td>
              <td>{race.date}</td>
              <td><a href={race.url} target="_blank" rel="noopener noreferrer">Link</a></td>
              <td><a href={race.registration_url} target="_blank" rel="noopener noreferrer">Påmelding</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
