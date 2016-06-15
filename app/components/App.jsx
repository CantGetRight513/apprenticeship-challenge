import React from 'react';
import uuid from 'uuid';
import Items from './Items.jsx';




export default class App extends React.Component{
   constructor(props) {
      super(props);   
      
      this.state = {
         items: [
            {
               sku: uuid.v4(),
               name: 'Milk',
               price: 3.50 
            },   
            {
               sku: uuid.v4(),
               name: 'Eggs',
               price: 1 
            }
         ]  
      };
   }
   render() { 
      const {items} = this.state;
      return (
          <div>
            <button onClick={this.addItem}>+</button>
            <Items items={items} onDelete={this.deleteItem} />
          </div>
  )}
               
   addItem = () =>{
        this.setState({  
            items: this.state.items.concat([{
               sku: uuid.v4(),
               name: 'New Item'
            }])
        });
  }
  
  deleteItem = (sku, e) =>{
         e.stopPropagation();
         
         this.setState({
            items: this.state.items.filter(item => item.sku !== sku )
         })
  }
  
   
}
