import React, { Component } from 'react';
import * as actions from './actions/addInventoryListItemAction'
import getInventoryItems from './actions/inventoryItemsAction'
import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.onCreateItem = this.onCreateItem.bind(this)
  }

  onCreateItem(quantity, description) {
    this.props.actions.default(quantity, description)
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>

          <InventoryList items={this.props.InventoryListItems}/>
          <NewInventoryItem onCreateItem={this.onCreateItem}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {InventoryListItems: state.inventoryItems}
}

function mapDispatchToProps(dispatch) {
  // debugger
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;

// export default App;
