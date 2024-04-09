

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1; 


setInterval(function() {
  showSlides(slideIndex += 1);
}, 4000); 

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
  
  slides[slideIndex-1].classList.add("active");  
  dots[slideIndex-1].classList.add("active"); 
}



document.getElementById('image').addEventListener('mouseover', showInfo);
document.getElementById('image').addEventListener('mouseleave', hideInfo);

function showInfo(name,description,price) {  
  var name = name;
  var description = description;
  var price = price;

  // Comprobar si hay información para mostrar
  if (name || description || price) {
    document.getElementById('photoName').innerText = 'Nombre: ' + name;
    document.getElementById('photoDescription').innerText = 'Descripción: ' + description;
    document.getElementById('photoPrice').innerText = 'Precio: ' + price;
  
    var photoInfo = document.getElementById('photoInfo');
    photoInfo.style.display = 'block';
  
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block';

  }
}

function hideInfo() {
  document.getElementById('photoInfo').style.display = 'none';
  document.getElementById('closeButton').style.display = 'none';
}
