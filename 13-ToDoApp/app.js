let search = document.querySelector("#search");
let addBtn = document.querySelector("#addBtn");
let box = document.querySelector("#box");
let deleteBtn = document.querySelector("#deleteBtn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(box);
  if (search.value == "") {
    alert("Write something");
  } else {
    let divTask = document.createElement("div");
    divTask.className = "taskDiv";

    let custumP = document.createElement("p");
    custumP.className = "custumP";
    custumP.innerText = search.value;
    search.value = "";

    let divBtn = document.createElement("div");
    divBtn.className = "div";
    divBtn.id = "div";
    
  
    let btnEdit = document.createElement("button");
    btnEdit.className = "btn";
    btnEdit.innerText = "Edit";
    divBtn.appendChild(btnEdit);

    // let icon = document.createElement("i");
    // icon.className = "fa-solid fa-bars";
    // divTask.appendChild(icon);
    // icon.addEventListener("click", myFunction);

    // function myFunction() {
    //   let x = document.getElementById("div");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }
      
   
    let btnDelete = document.createElement("button");
    btnDelete.className = "btn2";
    btnDelete.innerText = "Delete";
    divBtn.appendChild(btnDelete);

    divTask.appendChild(custumP);
    divTask.appendChild(divBtn);
    box.appendChild(divTask);

    btnDelete.addEventListener("click", function () {
      box.removeChild(divTask);
    });


    btnEdit.addEventListener("click", function (){
      search.value = custumP.innerText;
      addBtn.addEventListener("click", function () {
        custumP.innerText = search.value;
        box.removeChild (divTask);
      });
    });
  }
})
    
  

deleteBtn.addEventListener("click", function () {
  setTimeout(() => {
    box.innerHTML = " ";
  }, 2000);

  setTimeout(() => {
    box.innerText = "";
  }, 1000);
});