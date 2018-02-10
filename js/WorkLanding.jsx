import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import Heading from './Heading';
import WorkItemMobile from './WorkItemMobile';
import ProgressBar from './ProgressBar';

class WorkLanding extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
    this.changeComponent = debounce(500, this.changeComponent);
  }
  state = {
    page: 0,
    numberOfPages: 3
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
      console.log('scrolling up');
      this.changeComponent('prev');
    }
    if (e.deltaY > 0) {
      console.log('scrolling down');
      this.changeComponent('next');
    }
  };

  changeComponent(change) {
    const currentPage = this.state.page;
    const numberOfPages = this.state.numberOfPages;
    console.log(currentPage, numberOfPages);
    switch (change) {
      case 'prev':
        return currentPage !== 0
          ? this.setState({ page: currentPage - 1 })
          : this.setState({ page: numberOfPages });
      default:
        return currentPage !== numberOfPages
          ? this.setState({ page: currentPage + 1 })
          : this.setState({ page: 0 });
    }

    // if (currentPage == 0){
    //   currentPage += change;
    // }
    // currentPage += change;
    // console.log(currentPage);
    // this.setState({page:  currentPage})
  }

  renderWorkItem = (works, i) => {
    const work = works[i];
    return (
      <Link
        to={`/work-details/${i}`}
        style={{ textDecoration: 'none' }}
        key={work.id}
      >
        <div className={`main-content work-${work.id}`}>
          <Heading heading={work.name} subheading={work.description} />
          <WorkItemMobile />
        </div>
      </Link>
    );
  };
  // renderWorkItems = works => {
  //   const fullWorks = works.map((work, i) => {
  //     return (
  //       <Link
  //         to={`/work-details/${i}`}
  //         style={{ textDecoration: 'none' }}
  //         key={work.id}
  //       >
  //         <div className={`main-content work-${work.id}`}>
  //           <Heading heading={work.name} subheading={work.description} />
  //           <WorkItemMobile />
  //         </div>
  //       </Link>
  //     );
  //   });
  //   return fullWorks;
  // };
  render() {
    const { workData } = this.props;
    // console.log(workData);
    const { page } = this.state;
    return (
      <div>
        {/* {this.renderWorkItems(workData)} */}
        {this.renderWorkItem(workData, page)}
        <ProgressBar />
      </div>
    );
  }
}

export default WorkLanding;
