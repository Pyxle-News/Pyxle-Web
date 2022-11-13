/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const scriptURL = 'https://script.google.com/macros/s/AKfycbywuLlAWki6S53SICEcFAUK328pHGTzV7aJ-PLT_dUdrejOKk8w022eeG98fkuKURz1ug/exec'
const form = document.querySelector('#submit-to-google-sheet')

form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
  function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav__menu") {
      x.className += " show-menu";
    } else {
      x.className = "nav__menu";
    }
  }

  AOS.init({
    offset: 50,
    duration: 800
  });