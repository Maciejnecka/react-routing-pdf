import React from 'react';
import { Link, Route } from 'react-router-dom';

const Category = () => {
  const categories = [
    { text: 'Nowości', url: '/category/news' },
    { text: 'Najlepsze', url: '/category/best' },
  ];
  const nav = categories.map((item) => (
    <li key={item.url}>
      <Link to={item.url}>{item.text}</Link>
    </li>
  ));
  const routes = categories.map((item) => (
    <Route key={item.url} path={item.url}>
      <h3>{item.text}</h3>
    </Route>
  ));
  return (
    <>
      <h2>Kategorie</h2>
      {nav}
      {routes}
    </>
  );
};

export default Category;
