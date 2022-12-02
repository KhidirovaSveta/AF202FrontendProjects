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
  console.log("Task №1: ", newArray);
}
latter(arr);

// 2.  "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

function latterFirstAndEnd(array2) {
  let count = 0;
  for (let i = 0; i < array2.length; i++) {
    if (
      array2[i].name[0] == "t" &&
      array2[i].name[array2[i].name.length - 1] == "t"
    ) {
      count++;
    }
  }
  console.log("Task №2: ", count);
}
latterFirstAndEnd(arr);

// 3.  "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

function keyWord(array3) {
  let sum = 0;
  for (let i = 0; i < array3.length; i++) {
    if (
      array3[i].name[0] == "t" &&
      array3[i].name[array3[i].name.length - 1] == "t"
    ) {
      sum += array3[i].key;
    }
  }
  console.log("Task №3: ", sum);
}
keyWord(arr);

// 7. "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

function nameFour(array7) {
  let newArr = [];
  for (let i = 0; i < array7.length; i++) {
    if (array7[i].name.length == 4) {
      newArr.push(array7[i].name);
    }
  }
  console.log("Task №7: ", newArr);
}
nameFour(arr);

// 8. en boyuk "key" - i olan obyektin "name"-i ni tapin

function bigObj(array8) {
  let max = 0;
  let string = "";
  for (let i = 0; i < array8.length; i++) {
    if (array8[i].key > max) {
      max = array8[i].key;
      string = array8[i].name;
    }
  }
  console.log("Task №8: ", max + " " +string);
}
bigObj(arr);


// function bigObj(array8) {
//   let max = 0;
//   let arrneew = [];
//   for (let i = 0; i < array8.length; i++) {
//     if (array8[i].key > max) {
//       max = array8[i].key;
//       arrneew = array8[i].name;
//     }
//   }
//   console.log("Task №8: ", max + " " +arrneew);
// }
// bigObj(arr);
// 11.  key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

function bigKey(array11) {
  let arrayNew = [];
  for (let i = 0; i < array11.length; i++) {
    if (array11[i].name[0] == "l" && array11[i].key > 10) {
      arrayNew.push(array11[i].name);
    }
  }
  console.log("Task №11: ", arrayNew);
}
bigKey(arr);


// 4. "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

function dev(array4) {
  for (let i = 0; i < array4.length; i++) {
    if (array4[i].name[array4[i].name.length - 1] == "e") {
      array4[i].name = "SuperDev";
    }
  }
  console.log("Task №4: ", array4);
}
dev(arr);
