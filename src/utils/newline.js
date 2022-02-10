const removeLastNewline = str => {
  return str.replace(/\n$/g, '');
};

const newlineToSpace = str => {
  return str.replace(/\n/g, ' ');
};

const countNewline = str => {
  return str.split('\n').length;
};

export { removeLastNewline, newlineToSpace, countNewline };
