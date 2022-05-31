//Declarando variável
let btnContact = document.querySelector(".jl-btn-contact");

//Tela de loading
window.addEventListener("load", function () {
  let pagePreloader = document.querySelector(".jl-preloader");

  setTimeout(function () {
    pagePreloader.classList.add("jl-fade-out");
    pagePreloader.style.display = "none";
  }, 4000);
});

//Lógica do botão decontato
btnContact.addEventListener("click", function () {
  let boxContact = document.querySelector(".jl-contact-info");

  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
