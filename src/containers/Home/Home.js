import React, { Component } from "react"
import "./Home.css";
import { renderRoutes } from 'react-router-config'
class Home extends Component{
  render(){
    return(
      <div>
        <h1> Hello, Home! </h1>
      </div>
    );
  }
}

// const Home = ({ route }) => (
//   <div>
//     <h2>Home</h2>
//     {renderRoutes(route.routes)}
    
//   </div>
// )

export default Home;