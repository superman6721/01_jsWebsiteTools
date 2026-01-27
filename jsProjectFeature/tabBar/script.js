const bars = document.getElementsByClassName('bars')[0];
const slideBar = document.getElementsByClassName("slideBar")[0];
const cross = document.getElementById("cross");

bars.addEventListener("click", ()=> {
    slideBar.style.right = 0;
    // slideBar.style.width = '300px';
})

cross.addEventListener("click", () => {
    slideBar.style.right = '-300px';
});