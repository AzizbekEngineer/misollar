//1-Misol
function palindromNumber(number) {
  let reverse = +number.toString().split("").reverse().join("");
  if (reverse === number) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindromNumber(3));

//2-Mmisol Keyigi sonni toping

function foo(...rest) {
  if (rest.length === 0) return 0;
  return rest[rest.length - 1] + rest[1] - rest[0];
}

// console.log(foo(1, 3, 5)); //7
// console.log(foo(1, 4, 7, 10)); //13
// console.log(foo(1, 3)); // 5

//3-Misol
function objFunc(obj) {
  return Object.values(obj)
    .filter((i) => +i && i != true)
    .reduce((a, b) => a + +b, 0);
}
// console.log(objFunc({ a: 5, b: true }));
// console.log(objFunc({ a: 5, b: true, c: "6" }));

//4-Misol
function doo(number) {
  let arr = number.toString().split("");

  let newArr = Array.from(new Set(arr));
  return +newArr.join("");
}
// console.log(doo(112233441155));

//5-Misol
function deleteStr(str) {
  let newRes = str.split("");
  if (!str.endsWith("?")) {
    return str;
  } else {
    while (newRes[newRes.length - 1] === "?") {
      newRes.pop();
    }
    return newRes.join("");
  }
}
// console.log(deleteStr("sal?om?"));
// console.log(deleteStr("sal??om?"));
// console.log(deleteStr("sal?om?????"));
