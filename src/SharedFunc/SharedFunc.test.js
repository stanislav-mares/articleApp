import dateSort from 'SharedFunc/SharedFunc';

describe('SharedFunc', () => {

  const unsortedComments = [
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
    { id: 3, author: 'Germán Toro', text: 'Splendid!', date: '2017-09-11T14:30:05.919Z' },
    { id: 4, author: 'Elena Builes', text: 'Excelent!', date: '2017-09-11T11:30:05.919Z' },
  ];

  const sortedComments = [
    { id: 3, author: 'Germán Toro', text: 'Splendid!', date: '2017-09-11T14:30:05.919Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 4, author: 'Elena Builes', text: 'Excelent!', date: '2017-09-11T11:30:05.919Z' },
  ];

  it('Testing if function sorts data correctly (descending order)', () => {
    expect(dateSort(unsortedComments)).toEqual(sortedComments);
  });
});
