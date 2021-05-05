


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




        
$(document).ready(function ()  {
    
$(window).scroll(function ()  { 
    
if ($(window).scrollTop() > 121) {
    
$('#nav').addClass( 'navbar-fixed');
    
}
    
if ($(window).scrollTop() < 122) { 
    
$( '#nav').removeClass('navbar-fixed');
   
}
});
});  
    


      
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n); //a ovde plus vrrednost
}

function currentSlide(n) {
  showSlides(slideIndex = n); //ovde samo dodeljujemo -1
}

function showSlides(n) { //uzimamo ponovo parametar 1 ili -1
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}  // vracamo se na pocetak  
  if (n < 1) {
      slideIndex = slides.length
  } // ovim ako smo dosli do prvog prebacujemo ponovo na treci
    
  for (i = 0; i < slides.length; i++) { //prebacivanje stanja na none tj da ne budu vidljivi ako je 1, onda 2 3 nece biti vidljiv
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //aktivna tackica dobija novu klasu
  }
  slides[slideIndex-1].style.display = "block";  // selektovani ima status block
  dots[slideIndex-1].className += " active"; //promena naziva na klasu
}



