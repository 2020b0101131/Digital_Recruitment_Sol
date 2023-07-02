import React, { useState } from 'react';
import '../style/CandidateSearch.css';
const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Perform search logic, e.g., make an API call to fetch candidates based on location and job role
    // Update the candidates state with the fetched data

    // For demonstration purposes, let's assume we receive an array of candidate objects from the API
    const fetchedCandidates = [
      { id: 1, name: 'John Doe', location: 'New York', jobRole: 'Software Developer' },
      { id: 2, name: 'Jane Smith', location: 'London', jobRole: 'UI/UX Designer' },
      { id: 3, name: 'Alex Johnson', location: 'San Francisco', jobRole: 'Data Scientist' },
    ];
if(location === 'New York' && jobRole === 'Software Developer'){
  // setCandidates(fetchedCandidates);
  setCandidates([{ id: 1, name: 'John Doe', location: 'New York', jobRole: 'Software Developer' }]);
}
    
    
  };

  return (
    <div id='candidate'>
      <h2 id='cand_heading2'>Candidate Search</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label id="lab1" htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label id='lab2' htmlFor="jobRole">Job Role:</label>
          <input type="text" id="jobRole" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
        </div>
        <button id='cand' type="submit">Search</button>
      </form>

      {candidates.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate.id}>
                <p>Name: {candidate.name}</p>
                <p>Location: {candidate.location}</p>
                <p>Job Role: {candidate.jobRole}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
