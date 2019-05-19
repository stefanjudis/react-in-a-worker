import React from 'react';
import { BrowserRouter, StaticRouter, Route, Link } from 'react-router-dom';
import { isSW } from './util/is-sw';
import Page from './pages/Page';
import routes from './routes';

function App(props) {
  console.log(props);
  return isSW() ? (
    <StaticRouter location={props.match.path} context={props.data}>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={props => {
            return <Page {...props} component={route.component} />;
          }}
        />
      ))}
    </StaticRouter>
  ) : (
    <BrowserRouter>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={props => {
            return <Page {...props} component={route.component} />;
          }}
        />
      ))}
    </BrowserRouter>
  );
}

export default App;
