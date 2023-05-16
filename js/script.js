//This is for JS
let menu = document.getElementsByClassName("menu")[0]; // Access the first element from the collection

if (window.innerWidth >= 768) {
    menu.style.background = "none";
    menu.style.boxShadow = "none";
} else {
    menu.style.backgroundColor = "var(--color-white)";
    menu.style.boxShadow = "0 -8px 0 0 var(--color-white), 0 8px 0 0 var(--color-white)";
}
