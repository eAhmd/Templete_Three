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