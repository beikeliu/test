const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
function fn(strs) {
  const hash = {}
  strs.forEach(str => {
    const x = str.split('').sort().join('')
    if (Array.isArray(hash[x])) {
      hash[x].push(str);
    } else {
      hash[x] = [str];
    }
  })
  const result = [];
  Object.keys(hash).forEach(key => {
    result.push(hash[key]);
  })
  return result;
}
const result = fn(strs);
console.log(result);
