function weakMapInfo() {
  // what will this return?
  // weak map does not keep track of its size, not allow you to get values, key, or entries
  // purpose of weak map is when gc comes around if the only thing referencing an object is the weak map
  // it will get rid of the reference, where a regular map will not remove reference so you'll need to manage it
  // which can cause a memory leak. gc will remove stuff that is not being referenced
  const obj = {iHaveYouNow: true}
  const weakMap = new WeakMap([
    [{iDoNotHaveYouEver: true}, true],
    [obj, 'saweet'],
  ])
  return {
    size: weakMap.size,
    objValue: weakMap.get(obj),
    values: weakMap.values,
    keys: weakMap.keys,
    entries: weakMap.entries,
  }
}
console.log(weakMapInfo())
