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

  deleteCard = (cardId) => {
    console.log(`The card with id ${cardId} will be deleted`)
    console.log(this.state.cards.length)
    const cards = this.state.cards;
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    this.setState({cards: cards})
    console.log(this.state.cards.length)

  }

  render() {

    const allCards = this.state.cards.map((item, i) => {

      const card = item.card

      const formattedCard = {
        id: card.id,
        text: card.text,
        emoji: card.emoji
      }

      return <Card
        key={card.id}
        card={formattedCard}
        deleteCardCallback={this.deleteCard}
        />
    });


    return (

      // <div>
      //   {cards.map(function(groupItem, key){ return (
      //     Object.keys(groupItem).map(function(item){return (
      //       <Card group={groupItem} item={item} />
      //     );})
      //   );})}
      // </div>


      <div className = "board">
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
