import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Contact from './Contact';
import About from './About';
import { WorkLanding } from './WorkLanding';
import data from '../data.json';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* Landing page describing me */}
      <Route exact path="/" component={Landing} />
      {/* Landing pages describing work */}
      <Route
        path="/work/:id"
        component={props => {
          const selectedWork = data.works.find(
            work => props.match.params.id === work.id
          );
          return <WorkLanding work={selectedWork} {...props} />;
        }}
      />

      <Route exact path="/contact" component={Contact} />
      <Route
        exact
        path="/about"
        component={() => <About aboutData={data.about} />}
      />
      {/* Work details */}
      {/* <Route
        path="/work/:id/details"
        component={props => {
          const selectedWork = data.works.find(
            work => props.match.params.id === work.id
          );
          return <WorkLanding work={selectedWork} {...props} />;
        }}
      /> */}

      {/* About Me */}

      {/* Contact */}

    </Switch>
  </BrowserRouter>
);

export default App;
