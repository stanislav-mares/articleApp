const dateSort = (array) => {

  const sorted = array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return sorted;
}

export default dateSort;
