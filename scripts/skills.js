

function popup1() {
  var x = document.getElementById("popup-1");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup1m() {
  var x = document.getElementById("popup-1-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup2() {
  var x = document.getElementById("popup-2");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup2m() {
  var x = document.getElementById("popup-2-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup3() {
  var x = document.getElementById("popup-3");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup3m() {
  var x = document.getElementById("popup-3-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup4() {
  var x = document.getElementById("popup-4");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup4m() {
  var x = document.getElementById("popup-4-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup5() {
  var x = document.getElementById("popup-5");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}

function popup5m() {
  var x = document.getElementById("popup-5-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")
  x.style.display = "block";
  closer.style.display = "block";
  dimple.classList.toggle('dimmer-active')
}



function closepopups() {
  for (let i = 1; i < 6; i++) {
  var x = document.getElementById("popup-"+i);
  var y = document.getElementById("popup-"+i+"-m");
  var dimple = document.getElementById("dim");
  var closer = document.getElementById("closer")

  if (x.style.display === "block") {
    x.style.display = "none";
    closer.style.display = "none";
    dimple.classList.toggle('dimmer-active')
  }
  else if (y.style.display === "block") {
    y.style.display = "none";
    closer.style.display = "none";
    dimple.classList.toggle('dimmer-active')
  }
}
}
// function align1() {
//   var x = document.getElementById("1-tier-4-desc-1");
//   var x2 = document.getElementById("1-tier-4-1");
//   var y = document.getElementById("1-tier-4-desc-2");
//   var y2 = document.getElementById("1-tier-4-2");
//   var uu = documents.getElementsByClassName("uu")
//   console.log("upgrade 1");
//   console.log(x.offsetHeight);
//   console.log("upgrade 2");
//   console.log(y.offsetHeight);
//   if (x.offsetHeight > y.offsetHeight) {
//     y.style.height = x.offsetHeight-20+"px";
//     y2.style.height = x.offsetHeight-20+"px";
//     uu.style.height = "auto";
//   } else {
//     x.style.height = y.offsetHeight-20+"px";
//     x2.style.height = y.offsetHeight-20+"px";
//     console.log("black");
//     uu.style.height = "auto";
//   }
// }

// function align2() {
//   var x = document.getElementById("2-tier-4-desc-1");
//   var x2 = document.getElementById("2-tier-4-1");
//   var y = document.getElementById("2-tier-4-desc-2");
//   var y2 = document.getElementById("2-tier-4-2");

//   console.log("upgrade 1");
//   console.log(x.offsetHeight);
//   console.log("upgrade 2");
//   console.log(y.offsetHeight);
//   if (x.offsetHeight > y.offsetHeight) {
//     y.style.height = x.offsetHeight-20+"px";
//     y2.style.height = x.offsetHeight-20+"px";
//     // uu.style.height = "auto";
//   } else {
//     x.style.height = y.offsetHeight-20+"px";
//     x2.style.height = y.offsetHeight-20+"px";
//     console.log("black");
//     // uu.style.height = "auto";
//   }
// }

