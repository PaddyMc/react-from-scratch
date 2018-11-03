import React, { Component } from "react"
import { hot } from "react-hot-loader";
import Menu from "../../components/Menu/Menu"
//import routes from '../../routes'
//import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import { renderRoutes } from 'react-router-config'

// class App extends Component{
//   render(){
//     return(
//         <div className="App">
//             {/* <Router> */}
//                 <Menu />
//             {/* </Router> */}
//             {renderRoutes(route.routes)}
//         </div>
//     );
//   }
// }
const App = ({ route }) => (
    <div>
      <h1>Root</h1>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
      <Menu />
    </div>
  )
export default App;