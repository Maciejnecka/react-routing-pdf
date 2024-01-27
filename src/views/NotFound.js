import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const NotFound = ({ redirectToHome = false }) => {
  if (redirectToHome) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <p>
        Podana strona nie istnieje! Wróć do <Link to="/">Strony głownej</Link>.
      </p>
    </>
  );
};

export default NotFound;
