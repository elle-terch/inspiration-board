import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      text: "",
      emoji: "",
      id: ""
    }
    console.log(this.props)
  }

  onInputChange = (event) => {

    console.log("I'm on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }


  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji
    };

    this.setState({
      text: '',
      emoji: ''
    });

    console.log("created a new card", newCard);
    this.props.addCardCallback(newCard);
  }


  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">
          Create a New Card!
        </div>
        <form className = "new-card-form__form"
          onSubmit={this.onFormSubmit}>
          <br />

        <div>
          <label className="new-card-form__form-label" htmlFor="text">
              Text:&nbsp;&nbsp;
          </label>

          <input className="new-card-form__form-textarea"
            name="text"
            value={this.state.text}
            onChange={this.onInputChange}>
            </input>
        </div>

        <br />

        <div>
          <label className="new-card-form__form-label" htmlFor="emoji">
            Emoji:&nbsp;&nbsp;
          </label>

          <select className="new-card-form__form-select" value={this.state.value} onChange={this.onInputChange}>
            <option value="">no emoji</option>
            <option value="heart_eyes">{emoji.getUnicode("heart_eyes")}</option>
            <option value="beer">{emoji.getUnicode("beer")}</option>
            <option value="clap">{emoji.getUnicode("clap")}</option>
            <option value="sparkling_heart">{emoji.getUnicode("sparkling_heart")}</option>
            <option value="heart_eyes_cat">{emoji.getUnicode("heart_eyes_cat")}</option>
            <option value="dog">{emoji.getUnicode("dog")}</option>
          </select>
        </div>

        <input className="new-card-form__form-button"
          type="submit"
          value="Add Card"
        />

        </form>
      </div>
    )
  }

}


export default NewCardForm;
