const firstDecember = new Date("2019-12-01").valueOf() / 1000;
const xmas = new Date("2019-12-25").valueOf() / 1000;
const difference = xmas - firstDecember;
const pb = document.getElementById("progress");
const pbl = document.getElementById("progressLabel");


function calcProgress() {
    let current = Math.floor(new Date().valueOf() / 1000);
    let currentDifference = xmas - current;
    let percentTotal = 100 / difference;
    let currentPercent = parseFloat((100 - (percentTotal * currentDifference)).toFixed(2));

    console.log("======================================");
    console.log("difference 1-25: " + difference);
    console.log("difference now - 25: " + (xmas - current));
    console.log("percent total: " + percentTotal);
    console.log("percent now: " + currentPercent);
    console.log("======================================");

    pb.setAttribute("style", "width: " + currentPercent + "%");
    pb.setAttribute("aria-valuenow", currentPercent, 10);
    pbl.innerHTML = currentPercent + "% loaded";

}


calcProgress()

setInterval(function() {
    calcProgress()
}, 1000);