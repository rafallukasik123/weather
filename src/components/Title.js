import React, { Component } from 'react';
import title from '../style/title.scss';


class Title extends Component {
  render() {
    return (
      <header>
      <h1>Weather app</h1>
      <p>Check the weather for any place in the world! </p>
      </header>
    );
  }
}

export default Title;