import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import Heading from './Heading';
import WorkItemMobile from './WorkItemMobile';
import ProgressBar from './ProgressBar';
import ProjectNavigation from './ProjectNavigation';
import Fade from './TextTransition';

class WorkLanding extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
    this.changeComponent = debounce(100, this.changeComponent);
    this.navigateToComponent = this.navigateToComponent.bind(this);
    this.onKeyChange = this.onKeyChange.bind(this);
  }
  state = {
    currentPage: 0,
    lastPageIndex: 5
  };
  componentDidMount() {
    window.addEventListener('wheel', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.onScroll, false);
  }

  onScroll = e => {
    if (e.deltaY < 0) {
      this.changeComponent('prev');
    }
    if (e.deltaY > 0) {
      this.changeComponent('next');
    }
  };

  onKeyChange = e => {
    const keyCode = e.which || e.keyCode;
    switch (keyCode) {
      // left
      case 37:
        this.changeComponent('prev');
        break;
      case 39:
        this.changeComponent('next');
        break;
      default:
        null;
    }
  };

  changeComponent(change) {
    const { currentPage, lastPageIndex } = this.state;
    switch (change) {
      case 'prev':
        return currentPage !== 0
          ? this.setState({ currentPage: currentPage - 1 })
          : this.setState({ currentPage: lastPageIndex });
      default:
        return currentPage !== lastPageIndex
          ? this.setState({ currentPage: currentPage + 1 })
          : this.setState({ currentPage: 0 });
    }
  }

  navigateToComponent(item) {
    return this.setState({ currentPage: item });
  }
  renderWorkItem = (works, i) => {
    const work = works[i];
    return (
      <div className={`main-content content-work work-${work.id}`}>
        <section className="work-item-heading">
          <div className="content">
            <Heading heading={work.name} subheading={work.description} />
            <Link
              to={`/work/${i}`}
              className="btn-white"
              style={{ textDecoration: 'none' }}
              key={work.id}
            >
              More Details
            </Link>
          </div>
        </section>
        <WorkItemMobile title={work.name} screen={work.images[0]} />
      </div>
    );
  };
  render() {
    const { workData } = this.props;
    const { currentPage, lastPageIndex } = this.state;

    return (
      <div>

        {this.renderWorkItem(workData, currentPage)}

        <ProgressBar page={currentPage} lastPageIndex={lastPageIndex} />
        <ProjectNavigation
          currentPage={currentPage}
          workData={workData}
          navigateToComponent={this.navigateToComponent}
        />
      </div>
    );
  }
}

export default WorkLanding;
