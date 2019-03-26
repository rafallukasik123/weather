import React, { Component } from 'react';

const citylist = ['Lublin','Biłgoraj','Świdnik'];

class Form extends Component {
constructor(props){
  super(props);

  this.state = {
    query: '',
    filteredCity: citylist
  }

  
}
handleInputChange = (e) => {
  this.setState({
    query: e.target.value
  })
}
filterCity(e) {
  const text = e.currentTarget.value;
  const filteredCity = this.getFilteredCityForText(text);
  this.setState({
    filteredCity 
  })
}

getFilteredCityForText(name) {
  return citylist.filter(id => id.toLowerCase().includes(name.toLowerCase()))
}



Suggestions = () => {
  const options = this.state.filteredCity.map(r => (
    <li key={r.toString()}>
      {r}
    </li>
  ))
  return <ul>{options}</ul>
}

  render() {
    return (
     
       <form onSubmit={this.props.input_submit}>
         <input
         placeholder="Search for..."
       onInput={this.filterCity.bind(this)}
        onChange={this.props.changeinput}
      
        
       />
       <input type="submit" value="Get Weather"/>
       <this.Suggestions/>

       </form>
      
    );
  }
}

export default Form;