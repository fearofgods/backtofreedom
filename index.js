const d = new Date();

let countDownTarget = new Date(`Dec 23, 2022 17:30:0`).getTime();

let update = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownTarget - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("main-component").innerHTML =
        `<p id="info"><span id="day">${day} days - </span><span id="hour">${hour} hours - </span><span id="minute">${minute} mins - </span><span id="second">${second} secs</span></p>`;
    if (distance < 0) {
        clearInterval(distance);
        document.getElementById("main-component").innerHTML = '<p id="info">Freedom Freedom!</p>'
    }
}, 1000)