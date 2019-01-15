// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsYear = inventors.filter(
  inventor => inventor.year > 1499 && inventor.year < 1600
);

console.table(inventorsYear);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const inventorsFullName = inventors.map(
  inventor => inventor.first + " " + inventor.last
);
//const inventorsFullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(inventorsFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/*function compare(a, b) {
  const dateA = a.year;
  const dateB = b.year;

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}

console.table(inventors.sort(compare));*/

// ternary operator
console.table(inventors.sort((a, b) => (a.year > b.year ? 1 : -1)));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

/*const yearsLivedTotal = inventors
  .map(item => item.passed - item.year)
  .reduce((total, num) => total + num);

console.log(yearsLivedTotal);*/

const yearsLivedTotal = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);

console.log(yearsLivedTotal);

/*console.log(
  inventors.reduce((sum, { year, passed }) => sum + (passed - year), 0)
);*/

// 5. Sort the inventors by years lived

/*
function compareBirthDate(a, b) {
  const inventorA = a.passed - a.year;
  const inventorB = b.passed - b.year;

  let comparison = 0;
  if (inventorA > inventorB) {
    comparison = 1;
  } else if (inventorA < inventorB) {
    comparison = -1;
  }
  return comparison;
}

//console.log(inventors.sort(compareBirthDate));
*/

console.table(
  inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year ? -1 : 1))
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* 
const category = document.querySelector(".mw-category");
const link = Array.from(category.querySelectorAll('a'));
// or const links = [...category.querySelectorAll("a")];

const de = link
.map(link => link.textContent)
.filter(streetName => streetName.includes('de'));

console.log(de);
*/

// 7. sort Exercise
// Sort the people alphabetically by last name

/*
const sortLastName = people.sort((lastPerson, nextPerson) => {
  const [aLast, aFirst] = lastPerson.split(", ");
  const [bLast, bFirst] = nextPerson.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(sortLastName);
*/

const sortLastName = people.sort((a, b) =>
  a.split(", ") > b.split(", ") ? -1 : 1
);
console.log(sortLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transports = data.reduce(function(sum, item) {
  if (!sum[item]) {
    sum[item] = 0;
  }
  sum[item]++;
  return sum;
}, {});

console.log(transports);
