import React from 'react';
import './Quote.css';
import * as QuoteDB from '../../Constants/QuoteDB';

class Quote extends React.Component {
    render() {
        return (
            <div className="quoteWrapper">
                <div id="text">
                <p>{QuoteDB.QUOTES[this.props.quoteID].quote}</p>
                </div>
                <div id="author">
                <p>{QuoteDB.QUOTES[this.props.quoteID].author}</p>
                </div>
            </div>
        );
    }
}

export default Quote;