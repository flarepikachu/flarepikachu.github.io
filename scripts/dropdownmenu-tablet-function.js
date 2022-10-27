function classdd() {
  var x = document.getElementById("class-dropdown");
  var y = document.getElementById("class");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function magedd() {
  var x = document.getElementById("mage-dropdown");
  var y = document.getElementById("mage");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function paladindd() {
  var x = document.getElementById("paladin-dropdown");
  var y = document.getElementById("paladin");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function warriordd() {
  var x = document.getElementById("warrior-dropdown");
  var y = document.getElementById("warrior");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function shamandd() {
  var x = document.getElementById("shaman-dropdown");
  var y = document.getElementById("shaman");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function roguedd() {
  var x = document.getElementById("rogue-dropdown");
  var y = document.getElementById("rogue");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function guildsdd() {
  var x = document.getElementById("guilds-dropdown");
  var y = document.getElementById("guilds");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}


function moneydd() {
  var x = document.getElementById("money-dropdown");
  var y = document.getElementById("money");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function weaponsdd() {
  var x = document.getElementById("weapons-dropdown");
  var y = document.getElementById("weapons");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "rgb(242, 95, 92)";
    y.style.padding = 0;
  } else {
    x.style.display = "block";
    y.style.backgroundColor = "rgb(202, 58, 56)";
    y.style.padding = "0.5rem 0.5rem";
  }
}

function navigationbar() {
  var x = document.getElementById("navigationbar-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var y = document.getElementById("dingleberry");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function navnew() {
  var x = document.getElementById("main-screen");
  var y = document.getElementById("cover-up");
  if (x.style.left = "0") {
    x.style.position = "absolute";
    x.style.left = "300px";
    x.style.height = "80vh";
    x.style.overflowX = "hidden";
    x.style.top = "10vh";
    x.style.boxShadow = "0 0 10px 2px black";
    y.style.zIndex = "100";
    x.style.transition = "all 0.5s ease-out";
    x.style.visibility = "visible"
  } 
}

function closemobilemenu() {
  var x = document.getElementById("main-screen");
  var y = document.getElementById("cover-up");
  if (x.style.left = "300") {
    x.style.left = "0";
    x.style.height = "100vh";
    x.style.width = "100vw";
    x.style.maxWidth = "none";
    x.style.overflowX = "auto";
    x.style.top = "0";
    x.style.boxShadow = "0";
    y.style.zIndex = "-1";
    x.style.visibility = "hidden"
  }
}

function dropdownsdesktop() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
