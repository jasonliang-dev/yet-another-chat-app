import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import DecoratedContainer from '#/components/decorated-container';

const rootStyles = { fontFamily: 'Lato, sans-serif' };

// routes are lazy loaded to split up bundle and reduce initial
// loading time.
// https://reactjs.org/docs/code-splitting.html
function App() {
  return (
    <div className="text-gray-900" style={rootStyles}>
      <Suspense fallback={<DecoratedContainer />}>
        <Switch>
          <Route
            exact
            path="/chat"
            component={React.lazy(() =>
              import(/* webpackChunkName: "chat" */ './routes/chat'),
            )}
          />
          <Route
            exact
            path="/register"
            component={React.lazy(() =>
              import(/* webpackChunkName: "register" */ './routes/register'),
            )}
          />
          <Route
            exact
            path="/login"
            component={React.lazy(() =>
              import(/* webpackChunkName: "login" */ './routes/login'),
            )}
          />
          <Route
            exact
            path="/"
            component={React.lazy(() =>
              import(/* webpackChunkName: "home" */ './routes/home'),
            )}
          />
          <Route
            path="*"
            component={React.lazy(() =>
              import(/* webpackChunkName: "notfound" */ './routes/notfound'),
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default hot(App);
