import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import Delete from './containers/HomeIs/Home';

// const routes = (
//     <Route>
//         <Route path='/' component={ Home } />
//         <Route path='/home' component={ Delete } />
//     </Route>
// );

const routes = [
    { component: App,
      routes: [
        { path: '/',
          component: Home,
          exact: true
        },
        { path: '/home',
          component: Delete
        }
      ]
    },
    // { path: '/',
    //       component: Home
    //  },
    //  { path: '/home',
    //       component: Delete
    //     }
  ]

export default routes;