import React from 'react';

export default ({name, price, onDelete}) => (
   <div>
      <span>{name} - {price}</span>
      <button onClick={onDelete}>x</button>
   </div>
);