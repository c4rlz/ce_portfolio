import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Landing from './Landing';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';
import WorkLanding from './WorkLanding';
import WorkDetails from './WorkDetails';
import data from '../data.json';

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };

  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <section className="page-main-inner">
            <Switch location={location}>
              <Route path="/" exact component={Landing} />
              <Route
                path="/about"
                component={() => <About aboutData={data.about} />}
              />
              <Route
                path="/work"
                component={() => <WorkLanding workData={data.works} />}
              />

              <Route
                path="/work-details/:id"
                component={props => {
                  const selectedWork = data.works.find(
                    // console.log(props.match.params.id, item.id)
                    item => parseInt(props.match.params.id, 10) === item.id
                  );
                  return <WorkDetails selectedWork={selectedWork} />;
                }}
              />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
