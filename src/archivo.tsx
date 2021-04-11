import React from 'react';
import './App.css';
//import './App';

//creo la classe person con la propiedad nombre:
class Person extends React.Component {
  state: { name: string; };
  constructor(props: any) {
    super(props);
    this.state = {
        name: ""}
}


 render() {
    return (
        <div>
            <h1 className="nombre1">  {this.state.name= "Julian"} </h1>
    <span className="nombre2">  {this.state.name= "Fernando"} </span>
    <p className="nombre3">  {this.state.name= "Mariano"} </p>
    </div>
    );

  }
}

export default Person;
