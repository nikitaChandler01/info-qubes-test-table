import React from 'react';

const Row = (props) => {
  const {
    id,
    name,
    scriptValue,
    restictionsValue,
    courtesyValue
  } = props.data;
  return (
    <tr>
      <td>{name} | {id}</td>
      <td>{scriptValue ?? ''}</td>
      <td>{restictionsValue ?? ''}</td>
      <td>{courtesyValue ?? ''}</td>
    </tr>
  )
}

export default Row;
