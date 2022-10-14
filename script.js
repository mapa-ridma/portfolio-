window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 20);
})

function openLink () {
    window.open("https://github.com/mapa-ridma?tab=repositories");
}