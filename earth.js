const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-items')
const navLinks = document.querySelectorAll('.nav-items a')
const navItems = document.querySelectorAll('.nav-links')  



const navSlide = () => {
    
    burger.addEventListener('click',() => {

      nav.classList.toggle('nav-active')
    })
  
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
      console.log(index);
    })
  }
  
  navSlide()



navLength = navlinks.length

for(let i = 0; i < navLength; i++) {
    navLinks[i].addEventListener('click',() => {
      nav.classList.toggle('transform')
    })

}




