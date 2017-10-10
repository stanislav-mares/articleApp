import React from 'react';
import enzymeConfig from 'enzymeConfig/enzymeConfig';
import { shallow } from 'enzyme';

import Comments from 'components/Comments/Comments';

describe('<Comments />', () => {

  const comments = [
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
    { id: 3, author: 'Germán Toro', text: 'Splendid!', date: '2017-09-11T14:30:05.919Z' },
    { id: 4, author: 'Elena Builes', text: 'Excelent!', date: '2017-09-11T11:30:05.919Z' },
  ];

  it('Testing if no comments are rendered if no comments are passed', () => {
    const component = shallow(<Comments comments={[]}/>);

    expect(component.find('li').length).toBe(0);
  });

  it('Testing if correct number of comments is rendered when some comments are passed', () => {
    const component = shallow(<Comments comments={comments}/>);

    expect(component.find('li').length).toBe(comments.length);
  });

  it('Testing structure of the Comments component', () => {
    const component = shallow(<Comments comments={[]}/>);

    expect(component).toMatchSnapshot();
  });
});
