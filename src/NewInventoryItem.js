import React from 'react';

export default function NewInventoryItem(props){
  function submitItemForm(event){
    // alert('hello')
    event.preventDefault()
    // debugger
    const quant = event.target.children[0].children[1].value
    const desc = event.target.children[1].children[1].value
    props.onCreateItem(quant, desc)
  }


  return (
    <form onSubmit={submitItemForm} >
      <p><label>QUANITY</label><input type="text" id="quantity" /></p>
      <p><label>DESCRIPTION</label><input type="text" id="description" /></p>
      <p><input type="submit" id="submit" name="submit" /></p>
    </form>
  )

}
