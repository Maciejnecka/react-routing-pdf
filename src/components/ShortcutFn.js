import React from 'react';
import { useHistory } from 'react-router-dom';

const ShortcutFn = () => {
  const history = useHistory();
  const handleChange = (e) => {
    history.push(e.target.value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">Wybierz strone</option>
      <option value="/">Home</option>
      <option value="/contact">Contact</option>
    </select>
  );
};

export default ShortcutFn;
