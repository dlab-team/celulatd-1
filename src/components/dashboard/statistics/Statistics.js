import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Statistics = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total users: {stats.totalUsers}</p>
      <p>Active users: {stats.activeUsers}</p>
      <p>New users this week: {stats.newUsers}</p>
    </div>
  );
};

export default Statistics;
