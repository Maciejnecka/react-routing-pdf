import React from 'react';

class Shortcut extends React.Component {
  state = {
    redirect: null,
  };

  handleChange = (e) => {
    this.setState({
      redirect: e.target.value,
    });
  };
  render() {
    return (
      <select onChange={this.handleChange}>
        <option value="">Wybierz stronę</option>
        <option value="/">Home</option>
        <option value="/contact">Contact</option>
      </select>
    );
  }
}

export default Shortcut;
