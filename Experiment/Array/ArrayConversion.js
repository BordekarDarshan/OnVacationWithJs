const demo = {
  hats: {
    id: 1,
    name: "hats",
  },
  sneakers: {
    id: 2,
    name: "sneakers",
  },
  mens: {
    id: 3,
    name: "mens",
  },
  womens: {
    id: 4,
    name: "womens",
  },
};

// object.keys put object properties [first layer] in array.
const arrConvert = Object.keys(demo);

const result = arrConvert.map((data) => demo[data]);

const otherArr = [
  {
    id: 1,
    name: "hats",
  },
  {
    id: 2,
    name: "sneakers",
  },
  {
    id: 3,
    name: "mens",
  },
  {
    id: 4,
    name: "womens",
  },
];

const property = (arr, id) => arr.find((data) => data.id === id);

let propertyOutput = property(otherArr, 1);
console.log(propertyOutput);
