import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>
        Podana strona nie istnieje! Wróć do <Link to="/">Strony głownej</Link>.
      </p>
    </>
  );
};

export default NotFound;
