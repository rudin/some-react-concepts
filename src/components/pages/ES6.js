import React, { Component } from 'react';
export default class ES6 extends Component {
  constructor() {
    super();
    // this.addProductTo1AndCopy = ::this.addProductTo1AndCopy;
    this.addProductTo2 = ::this.addProductTo2;
  }
  state = {
    products1: [
      {
        name: 'Phone'
      },
      {
        name: 'Keyboard'
      }
    ],
    products2: [
    ],
    products3: [
    ],
  }
  addProductTo1AndCopy() {
    const products1 = this.state.products1;
    products1.push(
      {
        name: 'Banana'
      }
    );
    const products2 = products1;
    const products3 = [...products1];
    this.setState({
      products1,
      products2,
      products3
    });
  }
  addProductTo2() {
    const products2 = this.state.products2;
    products2.push(
      {
        name: 'Car'
      }
    );
    this.setState({
      products2
    });
  }
  render() {
    const { products1, products2, products3 } = this.state;
    const ProductElements1 = products1.map((product, index) => <div key={index}>{product.name}</div>);
    const ProductElements2 = products2.map((product, index) => <div key={index}>{product.name}</div>);
    const ProductElements3 = products3.map((product, index) => <div key={index}>{product.name}</div>);
    return (
      <div style={{textAlign: 'center', padding: '2em'}}>
        <h4>ES6 + IMMUTABILITY</h4>
        <button onClick={() => this.addProductTo1AndCopy()}>Add Product To 1 and 'copy' 1 to 2 and 3</button>
        <br/>
        <button onClick={this.addProductTo2}>Add Product To 2</button>
        <h3>1</h3>
        <div>{ProductElements1}</div>
        <h3>2</h3>
        <div>{ProductElements2}</div>
        <h3>3</h3>
        <div>{ProductElements3}</div>
      </div>
    );
  }
}