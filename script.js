const treasure = {
  x: 100,
  y: 200,
};

const info = document.getElementById("info");
const map = document.getElementById("map");
const coords = document.getElementById("coords");
const wrap = document.getElementById("wrap");

// map.width = 400;

console.log(map);
console.log(map.width);
console.log(map.height);

wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;

info.style = "width: 240px; border: solid lime; background: #fff5c0";
info.style.height = "48px";

map.onmousemove = function (event) {
  //   console.log(event);
};
