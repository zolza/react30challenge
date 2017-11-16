import React, { Component } from 'react';
import './App.css';
import Checkbox from './Checkbox';

const itemsList = []

class App extends Component {

  constructor(){
    super()
    this.state = {
      checking: false,
      itemsList: [
        {id: 1, checked: false, p: "This is an inbox layout."},
        {id: 2, checked: false, p: "Check one item"},
        {id: 3, checked: false, p: "Hold down your Shift key"},
        {id: 4, checked: false, p: "Check a lower item"},
        {id: 5, checked: false, p: "Everything inbetween should also be set to checked"},
        {id: 6, checked: false, p: "Try do it with out any libraries"},
        {id: 7, checked: false, p: "Just regular JavaScript"},
        {id: 8, checked: false, p: "Good Luck!"},
        {id: 9, checked: false, p: "Don't forget to tweet your result!"}
      ],
      lastChecked: false
    }
  }

  handleClick(id) {
    const itemsListUpdate = this.state.itemsList.map(item => {
      if(item.id === id) {
        item.checked = !item.checked

      }
      return item
    })
    const checkedId = itemsListUpdate.checked ? id : false;

    console.log(itemsListUpdate);

    this.setState({itemsList: itemsListUpdate, lastChecked: checkedId})
  }

  renderCheckboxes(items) {
    return items.map(item =>(
        <Checkbox
          key = {item.id}
          paragraph = {item.p}
          checked = {item.checked}
          onClick = {this.handleClick.bind(this, item.id)}
        />
    ))
  }

  render() {
    return (
      <div className="inbox">
        {this.renderCheckboxes(this.state.itemsList)}
      </div>
    );
  }
}

export default App;
