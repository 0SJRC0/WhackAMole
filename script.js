const tubes = document.querySelectorAll(".tube");
const badicon = document.querySelector(".fa-bomb");
const goodicon = document.querySelector(".fa-check");
const greaticon = document.querySelector(".fa-check-double");


function RandomSpawnIcon() {
    let randomicon = Math.floor(Math.random() * 3) + 1;
    console.log(randomicon);
}

RandomSpawnIcon()