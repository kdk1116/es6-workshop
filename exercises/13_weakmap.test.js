test('has a set method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  // Create a new WeakMap called 'myMap'
  // Add a new entry. Use key as the key and values as the value
  const myMap = new WeakMap()
  myMap.set(key, value)
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  // If you make it this far, write a class with private member variables, using WeakMaps
  const privateProperties = new WeakMap()

  class Person {
    constructor(name, age) {
      privateProperties.set(this, {
        name, age,
      })
    }
    getName() {
      return privateProperties.get(this).name
    }

    getAge() {
      return privateProperties.get(this).age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=WeakMaps&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
