const textS = 'H,e,l,l,o,w,o,r,l,d';
function reverseString(str) {
  return str.split(",").reverse().join("");
}
console.log(reverseString(textS));
