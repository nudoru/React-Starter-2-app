import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../rh-components/rh-Footer';
import ComponentsTesting from '../pages/ComponentsTesting';
import FormTesting from '../pages/FormTesting';
import TemplatePage from '../pages/TemplatePage';
import PageModule from '../rh-components/rh-PageModule';
import {AppHeader} from '../components/AppHeader';

const RouteMessage = ({children}) =>
  <div>
    <PageModule>
      <div className="color-bg-body">
        <h1>{children}</h1>
      </div>
    </PageModule>
  </div>;

export const AppRouter = ({config}) =>
  <Router>
    <div className="application-container">
      <AppHeader config={config}/>
      <div className="application-content">
        <Switch>
          <Route exact path="/" component={ComponentsTesting}/>
          <Route path="/forms" component={FormTesting}/>
          <Route path="/t" component={TemplatePage}/>
          <Route path="/404" render={() => <RouteMessage>There's nothing
            here.</RouteMessage>}/>
          <Route render={() => <RouteMessage>There's nothing
            here.</RouteMessage>}/>
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>;