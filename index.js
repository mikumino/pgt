let pirate = document.getElementById("pgt");
let song = document.getElementById("song");

function changeImage() {
    if (pirate.style.opacity == "100") {
        pirate.style.opacity = "0";
        song.play();
    }
    else {
        pirate.style.opacity = "100";
        song.pause();
    }
}

pirate.addEventListener("click", changeImage);
