import { arrayToList, listToArray, hd, tl, reduce, map, filter } from './list2';

test('returns a list', () => {
  expect(arrayToList([1, 2, 3])).toStrictEqual({
    value: 1,
    rest: { value: 2, rest: { value: 3, rest: null } },
  });
});

test('returns an array', () => {
  expect(
    listToArray({
      value: 1,
      rest: { value: 2, rest: { value: 3, rest: null } },
    }),
  ).toEqual([1, 2, 3]);
});

test('hd returns first element of list', () => {
  expect(hd(arrayToList([1, 2, 3]))).toEqual(1);
});

test('tail returns first element of list', () => {
  expect(listToArray(tl(arrayToList([1, 2, 3])))).toEqual([2, 3]);
});

test('reduce', () => {
  expect(reduce((a, b) => a + b, 0, arrayToList([1, 2, 3]))).toEqual(6);
});

test('map', () => {
  expect(map(a => a * 2, arrayToList([1, 2, 3]))).toEqual([2, 4, 6]);
});

test('filter', () => {
  expect(filter(a => a % 2 === 0, arrayToList([1, 2, 3]))).toEqual([2]);
});
// type 'a list = {value: 'a, rest: null|list}
