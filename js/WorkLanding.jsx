import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import Heading from './Heading';
import WorkItemMobile from './WorkItemMobile';
import ProgressBar from './ProgressBar';
import ProjectNavigation from './ProjectNavigation';

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
    lastPageIndex: 3
  };
  componentDidMount() {
    window.addEventListener('wheel', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.onScroll, false);
  }

  onScroll = e => {
    console.log(e);
    if (e.deltaY < 0) {
      // console.log('scrolling up');
      this.changeComponent('prev');
    }
    if (e.deltaY > 0) {
      // console.log('scrolling down');
      this.changeComponent('next');
    }
  };

  onKeyChange = e => {
    const keyCode = e.which || e.keyCode;
    switch (keyCode) {
      // left
      case 37:
        console.log('prev');
        this.changeComponent('prev');
        break;
      case 39:
        console.log('next');
        this.changeComponent('next');
        break;
      default:
        null;
    }
  };

  changeComponent(change) {
    const { currentPage, lastPageIndex } = this.state;
    console.log('change', change);
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
        <Heading heading={work.name} subheading={work.description} />
        <Link
          to={`/work-details/${i}`}
          className="btn-white"
          style={{ textDecoration: 'none' }}
          key={work.id}
        >
          More Details
        </Link>
        <WorkItemMobile />
      </div>
    );
  };
  render() {
    console.log(this.state, this.props);
    const { workData } = this.props;
    // console.log(workData);
    const { currentPage, lastPageIndex } = this.state;

    return (
      <div>
        {this.renderWorkItem(workData, currentPage)}
        <ProjectNavigation
          currentPage={currentPage}
          workData={workData}
          navigateToComponent={this.navigateToComponent}
        />
        <ProgressBar page={currentPage} lastPageIndex={lastPageIndex} />
      </div>
    );
  }
}

export default WorkLanding;
