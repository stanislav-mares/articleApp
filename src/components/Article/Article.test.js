import React from 'react';
import enzymeConfig from 'enzymeConfig/enzymeConfig';
import { shallow } from 'enzyme';

import Article from 'components/Article/Article';

describe('<Article />', () => {

  const article = {
    author: 'Eliana Franco',
    date: '2017-09-10T22:00:05.919Z',
    text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`
  };

  const wrongArticle1 = {
    author: 'Eliana Franco',
    date: '2017-09-10T22:00:05.919Z'
  };

  const wrongArticle2 = {
    author: 'Eliana Franco',
    date: '2017-09-10T22:00:05.919Z',
    text: ''
  };

  const wrongArticle3 = {
    date: '2017-09-10T22:00:05.919Z',
    text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`
  };

  const wrongArticle4 = {
    author: '',
    date: '2017-09-10T22:00:05.919Z',
    text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`
  };

  it('Testing if no text is rendered when no text is passed', () => {
    const component = shallow(<Article { ...wrongArticle1 }/>);

    expect(component.find('p').length).toBe(0);
  });

  it('Testing if no text is rendered when empty text is passed', () => {
    const component = shallow(<Article { ...wrongArticle2 }/>);

    expect(component.find('p').length).toBe(0);
  });

  it('Testing if no author and date is rendered when no author is passed', () => {
    const component = shallow(<Article { ...wrongArticle3 }/>);

    expect(component.find('h4').length).toBe(0);
  });

  it('Testing if no author and date is rendered when empty author is passed', () => {
    const component = shallow(<Article { ...wrongArticle4 }/>);

    expect(component.find('h4').length).toBe(0);
  });

  it('Testing structure of the Article component', () => {
    const component = shallow(<Article { ...article }/>);

    expect(component).toMatchSnapshot();
  });
});
