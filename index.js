
let openMobileMenu = document.getElementById("openMobileMenu");
let closeMobileMenu = document.getElementById("closeMobileMenu");
let mobileNav = document.getElementById("mobileNav");
let mobileNavMain = document.getElementById("mobileNavMain");


openMobileMenu.addEventListener("click",()=>{
    openMobileMenu.classList.remove("mobileVisible");
    closeMobileMenu.classList.add("mobileVisible");
    mobileNav.classList.remove("invisibleMenu");
    mobileNavMain.classList.add("mobileNavMainOpen");

});


closeMobileMenu.addEventListener("click",()=>{
    closeMobileMenu.classList.remove("mobileVisible");
    openMobileMenu.classList.add("mobileVisible")
    mobileNav.classList.add("invisibleMenu");
    mobileNavMain.classList.remove("mobileNavMainOpen");
});