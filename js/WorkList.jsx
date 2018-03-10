import React from 'react';

const WorkList = ({ title, items }) => {
  const createListItems = items => {
    const listItems = items.map(item => <li> {item} </li>);
    return listItems;
  };
  return (
    <div className="work-list">
      <h4 className="uppercase"> {title} </h4>
      <ul>
        {createListItems(items)}
      </ul>
    </div>
  );
};

export default WorkList;
