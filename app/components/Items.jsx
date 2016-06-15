import React from 'react';
import Item from './Item.jsx';

export default ({items, onDelete=() => {}}) => (
   <ul>{items.map(({sku, name, price}) =>
       <li key={sku}>
         <Item
            onDelete={onDelete.bind(null, sku)}
            name={name}
            price={price} />
       </li>
   )}</ul>
)