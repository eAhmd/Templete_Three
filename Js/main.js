let scrol = document.querySelector(".scroll");
window.addEventListener("scroll", function() {
    window.scrollY >= 600 ? scrol.style.display = "block" : scrol.style.display = "none";
});
scrol.onclick = function() {
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};
let countDate = new Date("Dec 31,2021 23:59:59").getTime();
let countertime = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDate - dateNow;
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let hour = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(dateDiff % (1000 * 60) / (1000));



    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
    if (dateDiff < 0) {
        clearInterval(countertime);
    }

}, 1000);

let skill = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");
spans.forEach((e) => {
    e.style.width = "0";
})
window.addEventListener("scroll", function() {
    if (window.scrollY >= skill.offsetTop) {
        spans.forEach((el) => {
            el.style.width = el.dataset.width;

        });
    }
});
let state = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false;
window.addEventListener("scroll", function() {
    if (window.scrollY >= state.offsetTop) {
        if (!started) {
            numbers.forEach((num) => countStats(num));
        }

        started = true;
    }
});

function countStats(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;

        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 4000 / goal);
}