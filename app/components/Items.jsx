import React from 'react';
export default ({items}) => (
   <ul>{items.map(item =>
      <li key={item.sku}>{item.name}</li>
   )}</ul>
)