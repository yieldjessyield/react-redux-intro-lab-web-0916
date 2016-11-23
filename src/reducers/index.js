import {combineReducers} from 'redux';
import inventoryItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  // short hand property names
  inventoryItems
})

export default rootReducer;
