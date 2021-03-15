import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';



  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote= this.getQuote.bind(this);
    this.state = {
      quote: null
    };
  }


  componentDidMount() {
    this.getQuote();
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
        {
          this.state.quote
          ?<DisplayQuote quote={this.state.quote} />
          : <p>No data yet</p>
        }       
        
        <button type="button" onClick={this.getQuote}>Get Quote</button>

      </div>
    );
  }
}
export default App;
