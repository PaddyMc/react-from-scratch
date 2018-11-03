import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { BrowserRouter  } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from "./routes"
import { hydrate, render } from 'react-dom';
//ReactDOM.render(
    // <App />, document.getElementById("root"));

    ReactDOM.render((
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      ), document.getElementById('root'))

// const rootElement = document.getElementById('root');
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }