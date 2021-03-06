import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';
import main from './style/main.scss'

const api_key='10d35fcce7c02936d78262262d8ebda4';
class App extends Component {

  constructor(){
    super();
this.state={
  wheather_array : [],
  name_city : '',
  wheather_object : '',

}
  }

  

  

handleInputChange = (e) => {
  e.preventDefault();
  this.setState({
    name_city : e.target.value,
  })

}

handleSubmit= (e) =>{
  e.preventDefault();
  const name=this.state.name_city;
  
  
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${api_key}`)
    .then(res => {
     
      const wheather_object = res.data;
     
      this.setState({
        wheather_array : wheather_object.list,
        wheather_object
      })

    }).catch(error=> {
      
      console.log(error);
    })
  
}
 
  render() {

    

    return (
      <main className="App">
        <Title/>
        <Form  changeinput={this.handleInputChange} input_submit={this.handleSubmit }   />
        <Weather object={this.state.wheather_object} />


      </main>
    );
  }
}

export default App;
