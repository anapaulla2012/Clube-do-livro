$(document).ready(function() {
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
});
 
document.addEventListener("DOMContentLoaded", function() {
    const formSection = document.getElementById("formulario-inscricao");
    const openFormButton = document.querySelectorAll(".btn-default");
    
    openFormButton.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            formSection.style.display = "block";
        });
    });

    document.getElementById("inscricao-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Inscrição realizada com sucesso!");
        formSection.style.display = "none";
    });
});
