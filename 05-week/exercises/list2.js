const empty = null;

export function arrayToList(arr) {
  if (arr.length === 0) {
    return empty;
  }
  const [value, ...rest] = arr;
  return {value, rest: arrayToList(rest)}; 
} 
// [1, 2, 3]
// arr = [1, 2, 3]
// value = 1
// rest = [2, 3]
// {value: 1, rest: arrayToList([2, 3])}

// [2, 3]
// arr = [2, 3]
// value = 2
// rest = [3]
// {value: 1, rest: {value: 2, rest: arrayToList([3])}}

// [3]
// arr = [3]
// value = 3
// rest = []
// {value: 1, rest: {value: 2, rest: {value: 3, rest: arrayToList([])}}}

export function listToArray(list) { 
  if (list === empty) {
    return [];
  }

  const value = list.value;
  return [value, ...listToArray(list.rest)]; 
}
// let a = {value: "some" , rest: {value: "some2", rest: null}}
// hd(a) === "some"
// hd(tail(a))
export function hd(list) {
  if (list === empty) {
    return empty;
  }
  return list.value; 
} 
export function tl(list) { 
  if(list === empty) {
    return empty;
  }
  return list.rest; 
} 
export function reduce(f, acc, list) { 
  if (list === empty) {
    return acc;
  }
  const result = f(acc, list.value);
  return reduce (f, result, list.rest)
 } 
export function map() { return null; } 
export function filter() { return null; }
