import React from 'react';

const InventoryList = (props) => {
  return (
    <ul className="list-group col-lg-6 col-lg-offset-3">
      {props.items.map((item) => {
        return <li>quantity: {item.quantity} description: {item.description}</li>
      })}
    </ul>
  )
}

export default InventoryList;
