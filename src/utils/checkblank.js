const checkBlankText = str => {
  const checkMsg = str.replace(/(\s*)/g, '');
  if (checkMsg.length !== 0 && str !== '\n') {
    return true;
  }
  return false;
};

export default checkBlankText;
