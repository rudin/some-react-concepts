import React, { Component } from 'react';

export default class PageContents extends Component {

  state = {
    content: [{title: 'Loading'}]
  }

  componentDidMount () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'content.json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200 || status == 0) {
        this.setState({content: xhr.response});
      } else {
        this.setState({content: [{title: 'Error'}]});
      }
    }.bind(this);
    xhr.send();
  }

  render () {
    const Content = this.state.content.map((some, index) => (
      <div key={index}>
        { some.title && <h3>{some.title}</h3> }
        <p>{some.paragraph}</p>
      </div>
    ));

    return <div>{Content}</div>;
  }
}