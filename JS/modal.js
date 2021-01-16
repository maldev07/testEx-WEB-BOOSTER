function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}

document.addEventListener("click", function (e) {
  if (hasClass(e.target, "buy__item")) {
    modal = document.querySelector(".modal");
    modal.classList.add("show");
    modal.classList.remove("hide");
    itemName = document.querySelector(".modal__name");
    itemName.textContent = "Парикмахерское кресло «Норм» гидравлическое";
  }
});
document.addEventListener("click", function (e) {
  if (hasClass(e.target, "modal__close")) {
    modal = document.querySelector(".modal");
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
});
