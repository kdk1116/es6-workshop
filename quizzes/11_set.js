function basicSet() {
  // What do you think this will return?
  const set = new Set()
  set.add(1)
  set.add(2)
  set.add(1)
  return set
}
// console.log(basicSet())
function unique() {
  // What do you think this will return?
  const obj = {a: 45, b: 50}
  const s = new Set()
  s.add(obj)
  s.add({a: 45, b: 50})
  return s
} // this is referential equality and works because obj is a different object that points to the same reference as the s.add{}
// console.log(unique())

function referentialEquality() {
	const obj1 = {a:45, b:50}
    const obj2 = {a:45, b:50}
    return obj1 === obj2
}
console.log(referentialEquality())

function initializeSet() {
  const arr = [1, 5, 7, 2, 9, 4]
  // TODO: change the following line
  // so that the Set t has array's contents
  const set = new Set(arr)
  return set
}
console.log(initializeSet())

function setInfo() {
  const obj = {a: 42}
  const set = new Set([1, 2, obj, 3, 4])
  // how do you get the size of the set?
  // how can you determine whether the set has a value?
  const [,,thirdItem] = set
  return {
    // fill these values in...
    size: set.size,
    hasObj: set.has(obj) !== -1,
    hasFive: set.has(5) !== -1,
    thirdItem,
  }
}
//console.log(setInfo())

function removeDuplicates() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  //const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)
  const uniqueArr = Array.from(new Set(arr))
  return uniqueArr
}
//console.log(removeDuplicates())

function iterateSets() {
  const set = new Set(['hey', 1, 2, 3, 4])
  // for .. of
  for (const item of set.entries()) {
    console.log(item)
  }
}
// iterateSets()

function spreadSets() {
  // what does this return?
  const set = new Set([1, 2, 3, 4])
  const array = [...set]
  return array
  }
// console.log(spreadSets())

function restSet() {
  // what does this return?
  const set = new Set([1, 2, 3, 4])
  const [first, second, ...rest] = set
  return rest
}
console.log(restSet())

// SOLUTION BELOW
// No peeking!

function initializeSetSOLUTION() {
  const arr = [1, 5, 7, 2, 9, 4]
  const t = new Set(arr)
  return t
}
// console.log(initializeSetSOLUTION())

function setInfoSOLUTION() {
  const obj = {a: 42}
  const set = new Set([1, 2, obj, 3, 4])
  const [, , thirdItem] = set
  return {
    size: set.size,
    hasObj: set.has(obj),
    hasFive: set.has(5),
    thirdItem,
  }
}
// log(setInfoSOLUTION())

function removeDuplicatesSOLUTION() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  const set = new Set(arr)
  const uniqueArr = Array.from(set)
  return uniqueArr
}
// console.log(removeDuplicatesSOLUTION())
