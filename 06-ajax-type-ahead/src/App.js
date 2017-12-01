import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import Ul from './Ul';
import Li from './Li';
import Span from './Span';
import './Global'

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      storeCities: [],
    }
  };

  mapCities = (cities, text) => {
    const matches = cities.filter(record => {
      const regex = new RegExp(text, 'gi');
      const city = record.city.match(regex);
      const state = record.state.match(regex);
      return city || state
    })
    return matches
};

  handleCities = (e) => {
    this.setState({
      storeCities: this.mapCities(cities, e.target.value),
      inputValue:e.target.value,
    });
  }


  renderCity = (itemStr, matchStr) => {
    const matchRg = new RegExp(matchStr, 'gi');
    return itemStr.split(matchRg).reduce((prev, curr, i) => [prev, <Span highlighted key={i}>{itemStr.match(matchRg)[0]}</Span>, curr])
  }

  renderCities = (records, matchStr) => {

    return records.map((record, index) => {

      return (
        <Li key={index}>
          <Span>{this.renderCity(`${record.city}, ${record.state}`, matchStr)}</Span>
          <Span>{record.population}</Span>
        </Li>
      )
    })
  }

  render() {

    return (
        <Form>

          <Input
            type="text"
            placeholder="City or state"
            onChange={this.handleCities}/>

          {this.state.inputValue &&
          <Ul>
            {this.renderCities(this.state.storeCities, this.state.inputValue)}
          </Ul>}

        </Form>
    );
  }
}

export default App;
