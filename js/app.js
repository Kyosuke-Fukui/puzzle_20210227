window.onload = function () {
  var img = document.getElementById("myPuzzle");
  snapfit.add(img, {
    mixed: true,
    polygon: true,
    level: 1,
  });
};

document.getElementById("btn").onclick = function () {
  window.location.reload();
};
