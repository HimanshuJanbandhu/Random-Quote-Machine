import React from 'react';
import './QuoteBox.css';
import Quote from '../Quote/Quote';
import {DBsize} from '../../Constants/QuoteDB';
import * as Mixer from '../../Constants/Colors';

class QuoteBox extends React.Component {
    constructor() {
        super();
        this.state = {
            quoteNum : Math.floor(Math.random() * DBsize),
            colorNum : Math.floor(Math.random() * Mixer.colorSize)
        };
        this.nextRan = this.nextRan.bind(this);
    }

    nextRan() {
        this.setState({
            quoteNum: Math.floor(Math.random() * DBsize),
            colorNum : Math.floor(Math.random() * Mixer.colorSize)
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div id="quote-box" style = {{borderColor : Mixer.COLORS[this.state.colorNum]}}>
                    <Quote quoteID={this.state.quoteNum} />
                    <input type = "button" id="new-quote" className = "btn btn-primary" onClick={this.nextRan} value="Next"/>
                    <a className = "btn btn-info" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">TweetQuote</a>
                </div>
            </div>
        );
    }
}

export default QuoteBox;