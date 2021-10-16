const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);
const elementApp = document.getElementsByTagName("p");
elementApp[0].innerHTML = sum;

const array2 = ["Sỹ Dũng", "Mai Chi", "Quốc Thắng", "Hoàng Anh", "Yến Vi"];
const elementApp2 = document.querySelector(".lesson-2");
for (let i = 0; i < array2.length; i++) {
  elementApp2.innerHTML += `<p>${array2[i]}</p>`;
}
console.log(elementApp2.innerHTML);

function beforeFunction() {
  var newItem = document.createElement("li");
  var textnode = document.createTextNode("chèn ở đầu");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);
}
function afterFunction() {
  var newItem = document.createElement("li");
  var textnode = document.createTextNode("chèn ở cuối");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.appendChild(newItem, list.childNodes[2]);
}

// const ex2 = document.querySelector(".lesson2-2");
// let arrayChuoi = ["haha", "hehe"];
// function printScreen2(arrayChuoi) {
//   for (let i = 0; i < arrayChuoi.length; i++) {
//     ex2.innerHTML += `<p>${arrayChuoi[i]}</p>`;
//   }
// }
// printScreen2(arrayChuoi);

// console.log("---------------------------Bài 2.2:-------------------------------");
// let para1 = document.createElement("p");
// console.log(ex2);
// para1.innerHTML = "insert ở đầu";
// ex2.insertBefore(para1, document.getElementsByTagName("p")[0]);
// let para2 = document.createElement("p");
// para2.innerHTML = "insert ở cuối";
// ex2.appendChild(para2);

function hideTextFunction() {
  let text = document.querySelector(".text");
  let background = document.querySelector(".lesson-3");
  text.style.display = "none";
  background.style.background = "brown";
}
function hideBackFunction() {
  let back = document.querySelector(".lesson-3");
  let text = document.querySelector(".btn-maintenance");
  let text2 = document.querySelector(".btn-back");
  let text3 = document.querySelector(".text-maintenance");
  text2.style.display = "block";
  back.style.display = "none";
  text.style.display = "none";
  text3.style.display = "block";
  text3.style.margin = "auto";
}
function showBackFunction() {
  let text2 = document.querySelector(".btn-back");
  let text = document.querySelector(".btn-maintenance");
  let back = document.querySelector(".lesson-3");
  let text3 = document.querySelector(".text-maintenance");
  back.style.display = "block";
  text2.style.display = "none";
  text.style.display = "block";
  text.style.margin = "auto";
  text3.style.display = "none";
}

const modal = document.getElementsByClassName("modal")[0];
console.log(modal);
// const imageModal = document.getElementsByClassName('full-img')[0]
// console.log(imageModal)
const imageModal = document.querySelector(".full-img");
console.log(imageModal);

// Tạo sự kiện click, doi url image va show popup
// .addEventListener()
const listImage = document.querySelectorAll(".img-container img");
console.log(listImage);

listImage.forEach((element) => {
  element.addEventListener("click", function () {
    // Open modal
    modal.classList.add("open");
    const attrImg = element.getAttribute("alt");
    // Set new url image
    imageModal.src = "./img/full/" + attrImg + ".jpg";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});
