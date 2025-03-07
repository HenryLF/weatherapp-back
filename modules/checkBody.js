function checkBody(body, elem) {
//   if (Object.keys(body).length != elem.length) {
//     return false;
//   }
  for (let key of elem) {
    if (!Object.hasOwn(body, key) || body[key].length == 0) {
      return false;
    }
  }
  return true;
}

module.exports = checkBody;
