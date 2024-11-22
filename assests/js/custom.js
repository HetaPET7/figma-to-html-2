

AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
  });

    $('.hero-section .owl-carousel').owlCarousel({
    loop: true,
    nav: true,    
    smartSpeed: 800,
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,  
    autoplaySpeed: 1000, 
    stopOnHover: false ,
    responsive:{
        0:{
            items:1
        }
    }
})
    $('.year-round-slider .owl-carousel').owlCarousel({
    loop: true,
    nav: true,    
    smartSpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        1024: {
            items: 1.5
        }
    }
})
    $('.product-collection-slider .owl-carousel').owlCarousel({
    loop: true,
    nav: true,    
    smartSpeed: 800,
    mouseDrag: false,
    margin: 80,
    responsive:{
        0: {
            items: 1,
            margin: 20
        },
        991:{
            items:2,
            margin: 20
        },
        1200: {
            items: 3
        }
    }
})
$('.start-journey .owl-carousel').owlCarousel({
    nav: true,    
    smartSpeed: 800,
    mouseDrag: false,
    margin: 20,
    responsive:{
        0: {
            items: 1,
            margin: 20
        },
        991:{
            items:2,
            margin: 20
        },
        1500: {
            items: 3
        }
    }
})
// Get the header
const header = document.getElementById('header');

function handleScroll() {
  if (window.scrollY ) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll);

//faq

$(document).ready(function() {
  $(".faq-question:first").next(".faq-answer").slideDown();
  $(".faq-question:first").addClass("faq-active");

  $(".faq-question").click(function() {
    $(this).next(".faq-answer").slideToggle();
    $(this).toggleClass("faq-active");
  });
});


    // Get the elements
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    const headerContainer = document.querySelector('header');

    menuIcon.addEventListener('click', function() {

    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        body.style.overflow = 'hidden';
        headerContainer.classList.add('mobile-menu-open');
    } else {
        body.style.overflow = ''; 
        headerContainer.classList.remove('mobile-menu-open');
    }
});

