import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render(props) {
    const emoji = require("emoji-dictionary");

    let icon = this.props.emoji;
    if (icon !== undefined) {
      icon = emoji.getUnicode(icon);
    }

    return (

      <div className="card">
        <div className="card_content">
          <div className="card_content-text">
            {this.props.text}
          </div>

          <div className="card_content-emoji">
            {console.log(icon)}
            {icon}


          </div>


        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
