// 1. how could we make `add` be the main export?
function add(a, b) {
  return a + b
}
//module.exports = add
//exports.foo = foo
// new es6 export any module that exports this by default will get add
//export default add

// 2. how could we make `foo` be an extra export?
const foo = 'bar'

// 3. how could we also export `theAnswer`?
export const theAnswer = 42

// 4. how could we declare and export a variable
// at declaration time?
export const theQuestion = ['life', 'universe', 'everything']

// 5. how could we do all of these named exports
// with a single declaration?

export {foo, theAnswer, theQuestion}
// 6. how could we export `foo`, but make users
// use the name `bar`?
export {foo as bar}

// 7. how could we give the default export an
// alias? (like we did with the last one?)
export {add as default}

// 8. how could we do all of the exports (including
// the default export) with a single declaration?
export {
  theQuestion, 
  foo,
  theAnswer, 
  add as default,
}

// 9. how could we take all the exports from
// './module-b' and re-export them as a part of
// our own module?
export * from './module-b' 

// 10. how could we take only _some_ of the exports
// from './module-b' and re-export them as a part
// of our own module?
export {e1, e3} from './module-b'

// 11. how could we take the default export from
// './module-b' and re-export it with a different
// name in our own module?
export {default as myOwnThing} from './module-b'
/*


SOLUTIONS ARE BELOW









 */

// But they're commented out because JavaScript

// 1.
// export default add

// 2.
// export {foo}

// 3.
// export {theAnswer}

// 4.
// export const theQuestion = ['life', 'universe', 'everything']

// 5.
// export {foo, theAnswer, theQuestion}

// 6.
// export {foo as bar}

// 7.
// trick question. Not possible/necessary!

// 8.
// export {foo, theAnswer, theQuestion, add as default}

// 9.
// export * from './module-b'

// 10.
// export {default, e1, e3} from './module-b'

// 11.
// export {default as myOwnThing} from './module-b'
