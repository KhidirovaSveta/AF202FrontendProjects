let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".inputValue");

let contactForm = document.querySelector("#contact-form");
let contactValue = document.querySelectorAll("#contactValue");
let contactBtn = document.querySelector("#contactBtn");

let modal = document.querySelector("#myModal");
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close");
let subLink = document.querySelector("#subscribe");

let subs = document.querySelector("#subValue");
let modalBtn = document.querySelector(".modalBtn");

let icon = document.querySelector(".icon");
let scrollBar = document.querySelector(".scroll-bar");

let removeScroll = document.querySelector(".remove-scroll");

let reservetionArray = JSON.parse(localStorage.getItem("reservation")) ?? [];

let subArray = JSON.parse(localStorage.getItem("subscribe")) ?? [];

let contactArray = JSON.parse(localStorage.getItem("contact")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  allInputs.forEach((i) => {
    i.value === "" && alert("Please, fill all fields.");
  });

  let reservetionObj = {
    checkIn: "",
    checkOut: "",
    adults: "",
    kids: "",
  };

  reservetionObj.checkIn = allInputs[0].value;
  reservetionObj.checkOut = allInputs[1].value;
  reservetionObj.adults = allInputs[2].value;
  reservetionObj.kids = allInputs[3].value;

  reservetionArray.push(reservetionObj);

  localStorage.setItem("reservation", JSON.stringify(reservetionArray));
  allInputs.forEach((input) => (input.value = ""));

});

// contact local storage

contactBtn.addEventListener("click", function (event) {
  event.preventDefault();

  contactValue.forEach((i) => {
    i.value === "" && alert("Please, fill all fields.");
  });

  let contactObj = {
    name: "",
    email: "",
    message: "",
  };

  contactObj.name = contactValue[0].value;
  contactObj.email = contactValue[1].value;
  contactObj.message = contactValue[2].value;

  contactArray.push(contactObj);

  localStorage.setItem("contact", JSON.stringify(contactArray));
  contactValue.forEach((input) => (input.value = ""));

});

// sub local storage

modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  subArray.push(subs.value);
  localStorage.setItem("subscribe", JSON.stringify(subArray));
  subs.value = ""
});

// modal

subLink.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

// close the modal
span.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});


// respons menu

icon.addEventListener("click", function (e) {
  e.preventDefault();
  scrollBar.style.display = "block";
});

removeScroll.addEventListener("click", function (e) {
  e.preventDefault();
  scrollBar.style.display = "none";
});

// img gallery

let image = document.querySelector(".big-img");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let image3 = document.querySelector(".img3");
let image4 = document.querySelector(".img4");

image1.addEventListener("click", function () {
  image.src = "assets/images/livingroom1.jfif";
  image1.style.opacity = 1;
  image4.style.opacity = 0.5;
  image2.style.opacity = 0.5;
  image3.style.opacity = 0.5;
});
image2.addEventListener("click", function () {
  image.src = "assets/images/kitchen-room2.jfif";
  image2.style.opacity = 1;
  image4.style.opacity = 0.5;
  image3.style.opacity = 0.5;
  image1.style.opacity = 0.5;
});
image3.addEventListener("click", function () {
  image.src = "assets/images/bedroom3.jfif";
  image3.style.opacity = 1;
  image4.style.opacity = 0.5;
  image2.style.opacity = 0.5;
  image1.style.opacity = 0.5;
});
image4.addEventListener("click", function () {
  image.src = "assets/images/livingroom4.jfif";
  image4.style.opacity = 1;
  image3.style.opacity = 0.5;
  image2.style.opacity = 0.5;
  image1.style.opacity = 0.5;
});

