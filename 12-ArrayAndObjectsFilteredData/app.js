let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1."name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

function latter(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name[0] == "t") {
      newArray.push(array[i].name);
    }
  }
  console.log(newArray);
}
latter(arr);

// 2.  "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

function latterFirstAndEnd(array2) {
  let secondArray = [];
  for (let i = 0; i < array2.length; i++) {
    if (
      array2[i].name[0] == "t" &&
      array2[i].name[array2[i].name.length - 1] == "t"
    ) {
      secondArray.push(array2[i].name);
    }
  }
  console.log(secondArray);
}
latterFirstAndEnd(arr);
