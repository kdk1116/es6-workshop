import log from './pretty-log'

function getAverage() {
  // refactor with object destructuring
  const obj = {x: 3.6, y: 7.8, z: 4.3}
  const {x,y,z} = obj
  return Math.floor((x + y + z) / 3.0)
}
//log(getAverage())

function getAvgTemp() {
  // refactor with nested destructuring
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const {
    unit,
    today: {
      max: maxToday,
      min: minToday,
    },
    tomorrow: {
      max: maxTomorrow,
      min: minTomorrow,
    }, 
  } = weather 

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  }
}
 //log(getAvgTemp())

function getFirstTwo() {
  // refactor with array destructuring
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [firstItem, secondItem] = arr 

  return {
    firstItem: firstItem,
    secondItem: secondItem,
  }
}
//log(getFirstTwo())

function getElements() {
  // returns 1st, 2nd and last element from an array
  // refactor with skipped destructuring for arrays
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second, , , fifth]= arr

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}
// log(getElements())

function getSecondItem() {
  // refactor with nested destructuring of arrays
  const food = [
    ['carrots', 'beans', 'peas', 'lettuce'],
    ['apple', 'mango', 'orange'],
    ['cookies', 'cake', 'pizza', 'chocolate'],
  ]

  const [
    [, firstItem], 
    [, secondItem], 
    [,thirdItem]
  ] = food


  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}
// log(getSecondItem())

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: {
        3: {
          title: enemyTitle,
          name: enemyName,
        },
      }
    },

  } = info 

  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
 // log(nestedArrayAndObject())

function defaultValues() {
  const bench = {type: 'Piano', adjustable: false}
  const {
    legs: legCount = getDefaultLegCount(),
  } = bench
  return legCount

  function getDefaultLegCount() {
    return 4
  }
}
// log(defaultValues())

function ontoAnObject() {
  // refactor this to destructuring
  const array = [1, 2, 3, 4, 5, 6]
  const object = {}
  object.one = array[0]
  object.two = array[1]
  object.three = array[2]
  object.rest = array.slice(3)
  return object
}
// log(ontoAnObject())

/*







SOLUTIONS ARE BELOW









 */

function getAverageSOLUTION() {
  const obj = {x: 3.6, y: 7.8, z: 4.3}
  const {x, y, z} = obj
  return Math.floor((x + y + z) / 3.0)
}
// log(getAverageSOLUTION())

function getAvgTempSOLUTION() {
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const {
    unit,
    today: {max: maxToday, min: minToday},
    tomorrow: {max: maxTomorrow, min: minTomorrow},
  } = weather

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  }
}
// log(getAvgTempSOLUTION())

function getFirstTwoSOLUTION() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second] = arr

  return {
    first: first,
    second: second,
  }
}
// log(getFirstTwoSOLUTION())

function getElementsSOLUTION() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second, , , fifth] = arr

  return {
    first: first,
    second: second,
    fifth: fifth,
  }
}
// log(getElementsSOLUTION())

function getSecondItemSOLUTION() {
  const food = [
    ['carrots', 'beans', 'peas', 'lettuce'],
    ['apple', 'mango', 'orange'],
    ['cookies', 'cake', 'pizza', 'chocolate'],
  ]
  const [[, firstItem], [, secondItem], [, thirdItem]] = food

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  }
}
// log(getSecondItemSOLUTION())

function nestedArrayAndObjectSOLUTION() {
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [, , , {title: enemyTitle, name: enemyName}],
    },
  } = info
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
// log(nestedArrayAndObjectSOLUTION())

function defaultValuesSOLUTION() {
  const bench = {type: 'Piano', adjustable: false}
  const {legs: legCount = getDefaultLegCount()} = bench
  return legCount

  function getDefaultLegCount() {
    return 4
  }
}
// log(defaultValuesSOLUTION())

function ontoAnObjectSOLUTION() {
  const array = [1, 2, 3, 4, 5, 6]
  const object = {}; // <-- one place a semicolon is required
  [
    object.one,
    object.two,
    object.three,
    ...object.rest
  ] = array 
  return object
}
 //log(ontoAnObjectSOLUTION())

/* eslint object-shorthand:0 */
