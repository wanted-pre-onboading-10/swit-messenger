const removeLastNewline = str => {
  return str.replace(/\n$/g, '');
};

const textLenOverCut = str => {
  str.replace(/\n/g, ' ');
  if (str.length > 10) return str.substr(0, 10) + '...';
  return str;
};

export { removeLastNewline, textLenOverCut };
