// select image
var like_btn = document.querySelector(".like-btn")

function like() {
    like_btn.style.color = "red"
}

// side navbar
var side_navbar = document.querySelector(".side-navbar")

function opennavbar() {
    side_navbar.style.left = "0"
}

function closenavbar() {
    side_navbar.style.left = "-70%"
}

var latest_post_like_btn = document.querySelector(".latest-post-like-btn")

function like_latest_post() {
    latest_post_like_btn.style.color = "red"
}


document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (event.key == "F12" ||
        (event.ctrlKey && event.shiftKey && event.key == "I") ||
        (event.ctrlKey && event.shiftKey && event.key == "J") ||
        (event.ctrlKey && event.key == "U") ||
        (event.ctrlKey && event.key == "S") ||
        (event.ctrlKey && event.key == "H")) {
        event.preventDefault(); // Block inspect element shortcuts
    }
});