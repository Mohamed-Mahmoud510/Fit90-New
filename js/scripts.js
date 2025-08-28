(function ($) {
  $(document).ready(function () {
    "use strict";


    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


    // LOGO HOVER
    $(".site-menu ul li").hover(function () {
        $('.site-menu ul li').not(this).css({
          "opacity": "0.3"
        });
      },
      function () {
        $('.site-menu ul li').not(this).css({
          "opacity": "1"
        });
      });


    // HAMBURGER MENU
    $('.hamburger-menu').on('click', function (e) {
      $(this).toggleClass('open');
      $(".side-widget").toggleClass('active');
      $("body").toggleClass("overflow");
    });


    // PAGE TRANSITION
    $('body a').on('click', function (e) {

      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1200);

        }
      }
    });


  });
  // END DOCUMENT READY

  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });



  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });


  // WOW ANIMATION 
  wow = new WOW({
    animateClass: 'animated',
    offset: 0
  });
  wow.init();


  // CAROUSEL CLASSES SLIDER
  var swiper = new Swiper('.carousel-classes', {
    slidesPerView: '3',
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
	   breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });


  // MAIN SLIDER
  var swiper = new Swiper('.main-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    speed: 600,
    loop: 'true',
    touchRatio: 0,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no');
        }
      }
    });
  });


  // PRELOADER
  $(window).load(function () {
    $("body").addClass("page-loaded");
  });

    /*--------------------------------------------------------------
    15. BMI
--------------------------------------------------------------*/

let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let age = document.querySelector('#age')
let Gender = document.querySelector('#Gender')
let calcBmi= document.querySelector("#calc")
let Status
let parag
calcBmi.addEventListener("click",async function() {
  bmicalcFirst = weight.value / Math.pow(height.value/100 , 2)
  bmicalc =`"${bmicalcFirst}"`.split("").slice(1,7).join("")
  if (bmicalc < 16 ) {
     Status = "Under Weight";
     parag =  "u need to gain more weight Fit 90 can make u biger than BIGRAMY"
  } else if (16 <= bmicalc &&  bmicalc <= 25) {
     Status = "Normal Weight";
     parag =  "u look so good but start now with Fit 90 to be new Ronnie Coleman"
  }else if (25,1 <= bmicalc &&  bmicalc <= 30){
    Status = "Over Weight";
    parag =  "u need to be in Fit 90 to lose some fats and gain Alot muscles"
  }else if (30.1 <= bmicalc &&  bmicalc <= 35){
    Status = "Obses II Weight";
    parag =  "why u still in your home Fit 90 is your new home"
  }else if (35.1 <= bmicalc &&  bmicalc <= 40){
    Status = "Obses III Weight";
    parag =  "Fit 90 here to Ignite your fats"
  }else{
   Status = "Too Much";
    parag =  "Fit 90 can't support this body"
  }
  clearFields()
  resultBMI(bmicalc,Status,parag)
})
function clearFields() {
  height.value = null;
  weight.value = null;
  age.value = null;
  // Gender.value = "Gender..."; 
}
function resultBMI(bmicalc,Status,parag) {
 let cartona = `                <div class="col-md-6 mt-3">
                    <h2>
                      BMI : ${bmicalc}
                    </h2>
                </div>
                <div class="col-md-6 mt-3">
                    <h2>
                        ${Status}
                    </h2>
                </div>
                <div class="col-md-12 mt-4">
                <h5 >${parag}</h5>
                </div>
                </div>`
                document.getElementById('myData').innerHTML = cartona
}

})(jQuery);
