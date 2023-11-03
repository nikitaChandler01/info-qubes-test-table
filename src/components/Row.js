import React from 'react';

const Row = (props) => {
  const name = props.nameOfCategory;
  const id = props.id;
  const hitCount = props.hitCount;
  const categories = {
    scripts: [23, 45, 89],
    restrictions: [56, 78, 8],
    courtesy: [10, 11, 47],
  }
  if (categories.scripts.includes(id)) {
    return <tr>
      <td>{name} | {id}</td>
      <td>{hitCount}</td>
      <td></td>
      <td></td>
    </tr>
  }
  if (categories.restrictions.includes(id)) {
    return <tr>
      <td>{name} | {id}</td>
      <td></td>
      <td>{hitCount}</td>
      <td></td>
    </tr>
  }
  if (categories.courtesy.includes(id)) {
    return <tr>
      <td>{name} | {id}</td>
      <td></td>
      <td></td>
      <td>{hitCount}</td>
    </tr>
  };
}

export default Row;
