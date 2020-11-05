$(document).bind("contextmenu", function (e) {
  e.preventDefault();
});
$(document).keydown(function (e) {
  console.log(e.metaKey);
  if (e.which === 123) {
    return false;
  }
  if (e.metaKey == true) {
    return false;
  }
  if (event.keyCode == 123) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "I".charCodeAt(0) || e.keyCode == "i".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "C".charCodeAt(0) || e.keyCode == "c".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "J".charCodeAt(0) || e.keyCode == "j".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode == "U".charCodeAt(0) || e.keyCode == "u".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode == "S".charCodeAt(0) || e.keyCode == "s".charCodeAt(0))
  ) {
    return false;
  }
});
window.onresize = function () {
  if (window.outerHeight - window.innerHeight > 100) {
    console.log("Docked inspector was opened");
    $("body").empty();
  }
};
window.onload = function () {
  if (window.outerHeight - window.innerHeight > 100) {
    console.log("Docked inspector was opened");
    $("body").empty();
  }
};
