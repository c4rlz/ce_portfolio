import React from 'react';
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

const FourOhFour = () => {
  return <h1>404</h1>;
};
const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 1000, exit: 200 };

  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          // appear
        >
          <section className="page-main-inner">
            <Switch location={location}>
              <Route exact path="/" component={Landing} />
              <Route
                path="/about"
                component={() => <About aboutData={data.about} />}
              />
              <Route
                exact
                path="/work"
                component={() => <WorkLanding workData={data.works} />}
              />

              <Route
                path="/work/1"
                component={props => {
                  console.log('hi');
                  const selectedWork = data.works.find(
                    item => parseInt(props.match.params.id, 10) === item.id
                  );
                  console.log('work', selectedWork);
                  return <WorkDetails selectedWork={selectedWork} />;
                }}
              />
              <Route path="/contact" component={Contact} />
              <Route component={FourOhFour} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
