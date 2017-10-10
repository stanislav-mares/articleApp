import 'jsdom-global/register'
import React from 'react';
import enzymeConfig from 'enzymeConfig/enzymeConfig';
import { mount, shallow } from 'enzyme';

import Application from 'components/Application/Application';

describe('<Application />', () => {

  document.__article = {
    author: 'Eliana Franco',
    date: '2017-09-10T22:00:05.919Z',
    text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
  };

  document.__comments = [
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
  ];

  document.__moreComments = [
    { id: 3, author: 'Germán Toro', text: 'Splendid!', date: '2017-09-11T14:30:05.919Z' },
    { id: 4, author: 'Elena Builes', text: 'Excelent!', date: '2017-09-11T11:30:05.919Z' },
  ];

  let componentShallow;
  let componentMount;

  beforeAll(() => {
    componentShallow = shallow(<Application />);
    componentMount = mount(<Application />);
  });

  it('Testing if no button (more comments) is rendered when no comment exists', () => {
    expect(componentMount.find('button').length).toBe(0);
  });

  it('Testing if getArtcile method works correctly', (done) => {

    const callback = (data) => {
      expect(componentMount.state().article).toEqual(data);
      done();
    }
    componentMount.instance().getArticle(callback);
  });

  it('Testing if getComments method works correctly', (done) => {

    const callback = (data) => {
      expect(componentMount.state().comments).toEqual(data);
      done();
    }
    componentMount.instance().getComments(callback);
  });

  it('Testing if getMoreComments method works correctly', (done) => {
    const callback = (newData) => {
      const expectedResult = [...prevBefore, ...newData];

      componentMount.state().comments.forEach((comment, i) => {
        const index = expectedResult.findIndex((item) => comment.id === item.id);
        expect(comment).toBe(expectedResult[index]);
      });
      done();
    }

    const prevBefore = componentMount.state().comments;
    componentMount.instance().getMoreComments(callback);
  });

  it('Testing structure of the App component', () => {
    expect(componentShallow).toMatchSnapshot();
  });
});
