import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';
import emoji from 'emoji-dictionary';

const CARD = [
  {
    id: 12,
    text: "test text",
    emoji: "heart"
  }
]

describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = shallow( <Card
      card={CARD}
      />);




    expect(wrapper).toMatchSnapshot();
  });
});
