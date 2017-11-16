import React from 'react';

const Checkbox = (props) => {
  return (
    <div className="item">
      <input type="checkbox" onClick={props.onClick} checked={props.checked}/>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default Checkbox;
