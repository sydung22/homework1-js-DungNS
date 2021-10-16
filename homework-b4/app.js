// BOM: window, location, screen, history

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

// Demo, làm tiếp yêu cầu scroll
const links = document.querySelectorAll(".nav-link");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("attr-id"));
    el.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  });
});

function changeColor() {
  document.getElementById("backgrd").style.cssText = `
  color : rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)});
  background : rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}
