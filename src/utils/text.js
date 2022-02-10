const checkBlankText = str => {
  const checkMsg = str.replace(/(\s*)/g, '');
  if (checkMsg.length !== 0 && str !== '\n') {
    return true;
  }
  return false;
};

const textLenOverCut = str => {
  if (str.length > 10) return str.substr(0, 10) + '...';
  return str;
};

export { textLenOverCut, checkBlankText };
