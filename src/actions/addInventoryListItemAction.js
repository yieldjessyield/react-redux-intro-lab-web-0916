export default function addInventoryListItem(xquantity, xdescription) {
  const item = {quantity: xquantity, description: xdescription}
  return {type: 'ADD_INVENTORY_LIST_ITEM', payload: item}
}
