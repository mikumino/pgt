let pirate = document.getElementById("pgt");
let song = document.getElementById("song");
let isAwake = false;
let pirateImages = ["styles/images/pgt1.png", "styles/images/pgt.png"]

function changeImage() {
    if (isAwake) {
        isAwake = false;
        pirate.src = pirateImages[0];
        song.pause();
    }
    else {
        isAwake = true;
        pirate.src = pirateImages[1];
        song.play();
    }
}

pirate.addEventListener("click", changeImage);
