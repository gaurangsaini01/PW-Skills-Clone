const navLinks=document.querySelector(".nav-links")
function onToggle(e){
    e.name=e.name==='menu'?'close':'menu';
    navLinks.classList.toggle('top-[100%]')
}