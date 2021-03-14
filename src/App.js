import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';


const quoteFirst= 
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  }
  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote= this.getQuote.bind(this);
    this.state = {
      quote: quoteFirst
    };
  }
  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get Quote</button>

      </div>
    );
  }
}
export default App;
