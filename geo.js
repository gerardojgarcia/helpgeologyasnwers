
/// View More 


var rowslength = 4;
size_timelinediv = document.querySelectorAll(".topic-card").length;
console.log(size_timelinediv)//prints 11
var x = 2; //number of cards to be displayed
if (rowslength < 4) {
   // $("#loadMoreprodDiv").hide();
 		document.querySelector("#loadMoreprodDiv").style.display = "none";
  }
  if (x == 4) {
    //alert(rowslength)
    //$("#showlessprodDiv").hide();
    document.querySelector("#showlessprodDiv").style.display = "none";
   
  }
  showOnly(document.querySelectorAll(" .topic-card"),x);
  
  document.getElementById("loadMoreprodDiv").onclick =  function () {
    x = (x + 2 <= size_timelinediv) ? x + 2 : size_timelinediv;
   showOnly(document.querySelectorAll(".topic-card"),x);
    //$("#showlessprodDiv").show();
    document.querySelector("#showlessprodDiv").style.display = "block";
    
    if (x == size_timelinediv) {
      //$("#loadMoreprodDiv").hide();
      document.querySelector("#loadMoreprodDiv").style.display = "none";
    }
  }
  
  
  document.getElementById("showlessprodDiv").onclick = function () {
    x = (x - 2 <= 4) ? 2 : x - 2;
    showOnly(document.querySelectorAll(".topic-card"),x);
    document.querySelector("#loadMoreprodDiv").style.display = "block";
    document.querySelector("#showlessprodDiv").style.display = "block";
    //$("#loadMoreprodDiv").show();
    //$("#showlessprodDiv").show();
  
    if (x == 4) {
      document.querySelector("#showlessprodDiv").style.display = "none";
      //$("#showlessprodDiv").hide();
      
    }
  }
  
  function showOnly(nodeList, index) {
     for (i = 0; i < nodeList.length; i++ ) {
       nodeList[i].style.display = i<index ? "block": "none";
     }
	}

  //End View More


  // Video Modal
const playVideo = document.querySelectorAll('[data-modal-target]')
const closeVideo = document.querySelectorAll('[data-close-button]')

const overlay = document.getElementById('overlay')


playVideo.forEach(button => {

  button.addEventListener('click', () => { 
    const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal)
  })
  
})


closeVideo.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})



function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

}


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}






  // Video modal End  //////////////////////////////////////////////////////////////////


  /// Responsive Nav //////////////////////////////////////////////////////////////////

 


const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-items')
  const navLinks = document.querySelectorAll('.nav-items a')

  burger.addEventListener('click',() => {
    console.log('i was clicked')
    nav.classList.toggle('nav-active')
  })

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
    console.log(index);
  })
}

navSlide()


