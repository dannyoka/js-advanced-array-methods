var container = document.querySelector('#container');

var API_URL = 'https://swapi.dev/api/people';

var myFamily = [
  { name: 'Danny', job: 'Coder' },
  { name: 'Kelli', job: 'Teacher' },
  { name: 'James', job: 'Coder' },
];

fetch(API_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.results);
    data.results.forEach(function (person) {
      var nameEl = document.createElement('h1');
      nameEl.innerText = person.name;
      var heightEl = document.createElement('p');
      heightEl.innerText = person.height;
      container.appendChild(nameEl);
      container.appendChild(heightEl);
    });
  });

// non forEach method
for (let i = 0; i < myFamily.length; i++) {
  console.log(`Hello, ${myFamily[i].name}, you are a ${myFamily[i].job}`);
}
// forEach method
myFamily.forEach(function (item) {
  console.log(`Hello ${item.name}, you are a ${item.job}`);
});

myFamily.forEach(function (person) {
  var personNameEl = document.createElement('h2');
  var personJobEl = document.createElement('p');
  personNameEl.innerText = person.name;
  personJobEl.innerText = person.job;
  container.appendChild(personNameEl);
  container.appendChild(personJobEl);
});

for (let i = 0; i < myFamily.length; i++) {
  var personNameEl = document.createElement('h2');
  var personJobEl = document.createElement('p');
  personNameEl.innerText = myFamily[i].name;
  personJobEl.innerText = myFamily[i].job;
  container.appendChild(personNameEl);
  container.appendChild(personJobEl);
}

// Array.map

var myFamilyNames = [];

for (let i = 0; i < myFamily.length; i++) {
  myFamilyNames.push(myFamily[i].name);
}

var myFamilyNamesMapped = myFamily.map(function (person) {
  return person.name;
});

var myNumbers = [1, 2, 3, 4, 5, 6];

var myNumbersSquare = [];

for (let i = 0; i < myNumbers.length; i++) {
  myNumbersSquare.push(myNumbers[i] * myNumbers[i]);
}

var myNumbersSquareMapped = myNumbers.map((number) => number * number);

console.log(myNumbersSquare);
console.log(myNumbersSquareMapped);

var lowerCaseNames = ['danny', 'kelli', 'james', 'deano', 'teddy'];

var upperCaseNames = lowerCaseNames.map(function (name) {
  return name.toUpperCase();
});

// filter

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var myFilteredNumbers = myNumbers.filter(function (number) {
  return number > 5;
});

console.log(myFilteredNumbers);

var codersInMyFamily = myFamily.filter(function (person) {
  return person.job === 'Coder';
});

console.log(codersInMyFamily);
