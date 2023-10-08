const сhooseColor = document.querySelectorAll(".color-btn");
const сontentItem = document.querySelectorAll(".header-img");

сhooseColor.forEach(function (el) {
  el.addEventListener("click", open);
});

function open(ev) {
  const target = ev.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  сhooseColor.forEach(function (item) {
    item.classList.remove("color-btn--active");
  });

  target.classList.add("color-btn--active");
  сontentItem.forEach(function (el) {
    el.classList.remove("header-img__active");
  });

  contentActive.forEach(function (el) {
    el.classList.add("header-img__active");
  });
}
