import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShortcutFn from '../components/ShortcutFn';

const NotFound = ({ redirectToHome = false }) => {
  if (redirectToHome) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <ShortcutFn />
      <p>
        Podana strona nie istnieje! Wróć do <Link to="/">Strony głownej</Link>.
      </p>
    </>
  );
};

export default NotFound;
