import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('zamontowany');
    return () => console.log('odmontowany');
  }, []);
  return <h2>Home</h2>;
};

export default Home;
