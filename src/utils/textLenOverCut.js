const textLenOverCut = str => {
  const string = str.replace(/\n/g, '');

  if (str.length > 10) {
    return string.substr(0, 10) + '...';
  }
  return string;
};

export default textLenOverCut;
