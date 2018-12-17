import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';
import emoji from 'emoji-dictionary';


const CARD = {
  card:
  {
    emoji: ":)",
    id: 213,
    text: "test text"
  }
}

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Card
      emoji = {CARD.emoji}
      text = {CARD.text}
      />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
