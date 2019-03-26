import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';

const api_key='10d35fcce7c02936d78262262d8ebda4';
class App extends Component {

  constructor(){
    super();

  }

  

  componentDidMount(){
    
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Lublin&APPID=${api_key}`)
    .then(res => {
      const persons = res.data.list[0].weather[0].main;
      console.log(persons);
    })
  }

 
  render() {
    return (
      <main className="App">
        <Title/>
        <Form/>
        <Weather/>


      </main>
    );
  }
}

export default App;
