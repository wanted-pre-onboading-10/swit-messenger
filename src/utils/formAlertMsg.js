function formAlertMsg(curMsg) {
  if (curMsg.length > 10) curMsg = curMsg.slice(0, 10) + '...';
  return curMsg;
}

export default formAlertMsg;
