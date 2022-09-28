var x = document.getElementById("guilds-dropdown");
x.onload = function guildsdd() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}