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

    // const cardList = CARD_DATA.cards.map((card) => {
    //   return {
    //     text: card.text,
    //     emoji: card.emoji
    //   }
    // });



    this.state = {
      cards: []
    };

  }

  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_CARDS_URL = "https://inspiration-board.herokuapp.com/boards/lindsay/cards";

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    // .catch((error) => {
    //   this.setState({
    //     error: error.message
    //   });
    // });
  }

  render() {
    // const allCards = this.state.cards.cardList;

    // console.log(this.state.cards.cardList)


    // const cardGrid = allCards.map((card, i) => {
    //   return <Card
    //     key={i}
    //     text={card.text}
    //     emoji={card.emoji}
    //     />
    // });

    const allCards = this.state.cards.map((card, i) => {

      const formattedCard = {
        id: card.card.id,
        text: card.card.text,
        emoji: card.card.emoji
      }

      return <Card
        key={card.card.id}
        card={formattedCard}
        />
    });


    return (
      <div className = "board">
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
