import React, { Component } from 'react';
import axios from 'axios';

const api_key='10d35fcce7c02936d78262262d8ebda4';

class Weather extends Component {
constructor(props){
  super(props);

}



  render() {

    console.log(this.props.object);
    if(this.props.object===''){
      return (
        <section>
        


        </section>
      );
    }
    else{


        const icon=this.props.object.list[0].weather[0].icon;
        const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        const time=this.props.object.list[0].dt_txt;
        const location=this.props.object.city.name;
        const main=this.props.object.list[0].weather[0].main;
        const description=this.props.object.list[0].weather[0].description;
console.log(time);

      return (
        <section>
          <p> <span>Location:</span>  <span>{location}</span>  </p>
          <p> <span>Now Weather last update <span>{time}</span>:</span>  <span>{main}</span>  : <span>{description}</span> </p>
          <div><img src={iconurl}/>     </div>

        </section>
      );
    }
    
  }
}

export default Weather;