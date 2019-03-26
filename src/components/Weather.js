import React, { Component } from 'react';


class Weather extends Component {
constructor(props){
  super(props);

}



  render() {

   
    if(this.props.object===''){
      return (
        <section>
        


        </section>
      );
    }
    else{


        const icon=this.props.object.list[0].weather[0].icon;
        const iconurlnow = "http://openweathermap.org/img/w/" + icon + ".png";
        const time=this.props.object.list[0].dt_txt;
        const location=this.props.object.city.name;
        const main=this.props.object.list[0].weather[0].main;
        const description=this.props.object.list[0].weather[0].description;
        let temperature=this.props.object.list[0].main.temp/272.15;
        temperature=temperature.toFixed(2);

        const icon2=this.props.object.list[1].weather[0].icon;
        const iconurlnow2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
        const time2=this.props.object.list[1].dt_txt;
        
        const main2=this.props.object.list[1].weather[0].main;
        const description2=this.props.object.list[1].weather[0].description;
        let temperature2=this.props.object.list[1].main.temp/272.15;
        temperature2=temperature2.toFixed(2);


      return (
        <section>
                <div>
                <p> <span>Location:</span>  <span>{location}</span>  </p>
                <p> <span>Weather last update <span>{time}</span>:</span>  <span>{main}</span>  : <span>{description}</span> </p>
                <div><img src={iconurlnow} alt="icon weather"/>  <span>Current temperature : {temperature} &#8451; </span>    </div>
                </div>

                  <div>
                    <h2>Next hours</h2>
                    <p> <span>Weather next update <span>{time2}</span>:</span>  <span>{main2}</span>  : <span>{description2}</span> </p>
                <div><img src={iconurlnow2} alt="icon weather"/>  <span>Predicted temperature : {temperature2} &#8451; </span>    </div>

                  </div>
        </section>
      );
    }
    
  }
}

export default Weather;