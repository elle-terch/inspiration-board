import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render(props) {
    // const emoji = require("emoji-dictionary");

    let icon = this.props.emoji;
    if (icon !== undefined) {
      icon = emoji.getUnicode(icon);
    }

    return (

      <div className="card">
        <div className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>

          <p className="card__content-emoji">
            {icon}
          </p>


        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
