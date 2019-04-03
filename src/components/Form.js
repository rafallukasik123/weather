import React, { Component } from 'react';
import name from '../city.list.json'; 
import title from '../style/form.scss';
const citylist = [];

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



suggestions = () => {

  
  
 
  if(citylist.length!=0){
   
    
      const options = this.state.filteredCity.map(r => (
        <li key={r.toString()}>
          {r}
        </li>
        
      ))
      if(options.length<15){
        return <ul className="ul_list">{options}</ul>
      }
      else{
        return <ul ></ul>;
      }
      
      
    
  }else{
    return <ul></ul>;
  }
  
    
  
 
}
componentDidMount(){

  /*let promise1= new Promise(function(){
    for (let index = 0; index < name.length; index++) {
      if(name[index].country=='PL'){
        const element = name[index].name;
        let logiczna=true;  // domyslnie true nie powtorzylo sie
        citylist.forEach(temp => {
          if(element==temp){
            logiczna=false;//powtorzylo sie
          }
          else{

          }
  
});
        if(logiczna===true){
          citylist.push(element);
        }
        
        
        
      }
      else{
        
      }
     
      
    }

  });*/


}

  render() {

  

  

    return (
     
       <form className="form"  onSubmit={this.props.input_submit}>
     
      <div>
         <input
        className="search"
         placeholder="Search for..."
       onInput={this.filterCity.bind(this)}
        onChange={this.props.changeinput}
        required
        
       />
       <input className="button" type="submit" value="Get Weather"/>
     
       </div>
       <this.suggestions/>

       </form>
      
    );
  }
}

export default Form;