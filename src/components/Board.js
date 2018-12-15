import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    const cardList = CARD_DATA.cards.map((card) => {
      return {
        text: card.text,
        emoji: card.emoji
      }
    });

    this.state = {
      cards: {cardList}
    };

    console.log(typeof this.state.cards)
  }

  render() {
    const allCards = this.state.cards.cardList;

    // console.log(this.state.cards.cardList)


    const test = allCards.map((card, i) => {
      return <Card
        key={i}
        text={card.text}
        emoji={card.emoji}
        />
    });

    return (
      <div>
        Board
        {test}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
