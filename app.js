const totalPrice = (...rest) => {
  let sum = 0;
  rest.forEach((i) => {
    sum += i;
  });
  console.log(sum);
};
// console.log(totalPrice(50, 80));
// console.log(totalPrice(30, 80, 25));

// const totalNumber = (str) => {
//   return (arr = str.split("").reduce((sum, val) => sum + +val, 0));
// };
// console.log(totalNumber("123456"));

const totalNumber = (str) => {
  return str
    .split("")
    .filter((i) => !isNaN(i))
    .reduce((sum, val) => sum + +val, 0);
};
// console.log(totalNumber("12t34"));

function convertObject(...arr) {
  let obj = {};
  arr.forEach((item, inx) => (obj[inx] = item));
  return obj;
}
// console.log(convertObject("lorem", 5, true));
// console.log(convertObject(undefined, null));

function generateShape(integer) {
  let res = "";
  let row = "";

  for (let i = 0; i < integer; i++) {
    row += "+";
  }
  for (let j = 0; j < integer; j++) {
    res += `${row}\n`;
  }
  return res;
}

// console.log(generateShape(3));
function solution(str) {
  let len = str.length;
  let arr = str.split("");
  if (len % 2 === 0) {
    return arr;
  } else {
    return arr.push("_");
  }
}
// console.log(solution("abc"));
function sumDigits(number) {
  let str = number.toString();
  let strN = (number * -1).toString();
  console.log(strN);
  if (number > 0) {
    return str.split("").reduce((a, b) => a + +b, 0);
  } else if (number < 0) {
    return strN.split("").reduce((a, b) => a + +b, 0);
  }
}
// console.log(sumDigits(-32));
