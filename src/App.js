import React, { Component } from 'react';
import './App.css';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {term: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n  *[James Riall Github](https://github.com/jriall)*"};
  }
  render() {
    var marked = require('marked');

    return (
      <div className="row display">
        <h1 id="header">Markdown Previewer</h1>
        <div className="col-md-6 input-column">
          <textarea id="input-box" rows="26" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        </div>
        <div className="col-md-6 output-column">
          <div id="output-box" dangerouslySetInnerHTML={{__html: marked(this.state.term)}} />
        </div>
      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox />
      </div>
    );
  }
}

export default App;