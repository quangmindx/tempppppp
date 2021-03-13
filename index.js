var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".playVideo");
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the iframe from  youtube

let playVid = document.querySelector(".video");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

var close1 = document.getElementsByClassName("close1")[0];

var modal1 = document.getElementById("myModal-1");

// Get the button that opens the modal
var btn1 = document.querySelector("#modal-1");

btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
close1.onclick = function () {
  modal1.style.display = "none";
};

// ------------

var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn2 = document.querySelector("#modal-2");

btn2.onclick = function () {
  modal2.style.display = "block";
};
let close2 = document.querySelector(".close2");
close2.onclick = function () {
  modal2.style.display = "none";
};

//   -------------
var close3 = document.getElementsByClassName("close3")[0];

// Get the button that opens the modal
var modal3 = document.getElementById("myModal-3");
var btn3 = document.querySelector("#modal-3");
btn3.addEventListener("click", () => {
  modal3.style.display = "block";
});
close3.onclick = function () {
  modal3.style.display = "none";
};
//   -------------
var close4 = document.getElementsByClassName("close4")[0];

var modal4 = document.getElementById("myModal-4");

// Get the button that opens the modal
var btn4 = document.querySelector("#modal-4");

btn4.onclick = function () {
  modal4.style.display = "block";
};

close4.onclick = function () {
  modal4.style.display = "none";
};
