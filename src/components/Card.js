import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  handleClick = () => {
    console.log(`button was clicked! ID = ${this.props.card.id}`)
    this.props.deleteCardCallback(this.props.card.id)
  }

  render(props) {
    console.log(this.props.card.id)

    let icon = this.props.card.emoji;
    if (icon !== null) {
      icon = emoji.getUnicode(icon);
    }


    return (

      <div className="card">
        <div className="card__content">
          <p className="card__content-text">
            {this.props.card.text}
          </p>

          <p className="card__content-emoji">
            {icon}
          </p>
          <button onClick={this.handleClick} type="submit">Delete</button>


        </div>
      </div>
    )
  }
}

Card.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string
};

export default Card;
