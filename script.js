
// MOBIL RESPONSIVE
const menuIcon = document.getElementById('menu-icon');
const mobileDiv = document.getElementById('mobil-menu-bar');

function openMenuBar(){
mobileDiv.style.display = "flex"
menuIcon.style.display = "none"   
}

function closeMenuBar(){   
mobileDiv.style.display = "none"
menuIcon.style.display = "flex"
}

// MOBIL RESPONSIVE END



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));

showSlide(currentSlide);


  let scrollContainer = document.querySelector(".image-list");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "auto";
  });

  nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900
  });
  backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900
  });




  // HOW WE WORK



function changeImage(){
    let displayImage = document.getElementById("offer")
    // if(displayImage.src.match('./image/what we offer.png')){
    //     displayImage.src = './image/inbox.png'
    // }else{
    //     displayImage.src = './image/what we offer.png'
    // }
    console.log( displayImage);
}



