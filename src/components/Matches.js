import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const Matches = () => {
  const { REACT_APP_API_KEY } = process.env;
  const fetchMatchesByDate = async () => {
    const { data: { response } } = await axios.get(
      'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      {
        params: {
          date: '2021-10-01',
          league: '262',
          season: '2021',
          timezone: 'America/Mexico_City',
        },
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': `${REACT_APP_API_KEY}`,
        },
      }
    );
    return response;
  }

  const { data, error, isError, isLoading } = useQuery('matches', fetchMatchesByDate);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div>
      {data.map((match) => (
        <>
          <div>
            <div>
              <img src={match.teams.home.logo} alt="LOGO TEAM"/>
            </div>
            <div>{match.goals.home}</div>
          </div>
          <div>
            <div>
              <img src={match.teams.away.logo} alt="LOGO TEAM"/>
            </div>
            <div>{match.goals.away}</div>
          </div>
        </>
      ))}
    </div>
  )
};

export default Matches;