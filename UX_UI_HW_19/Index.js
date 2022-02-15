console.log("Your Index.js file is loaded correctly");

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

$(document).ready(function(){
    $("button").click(function(){
      alert("YOONHEE KIM'S RESUME IS NOT AVAILABLE AT THE MOMENTS.");
    });
  });

  $(document).ready(function(){
    $('.resume').click(function(){
      alert("YOONHEE KIM'S RESUME IS NOT AVAILABLE AT THE MOMENTS.");
    });
  });


  $(document).ready(function(){
    $(".contact-flip").click(function(){
      $('.contact-panel').slideDown(2000)
    });
  });

  $(document).ready(function(){
    $(".contact-flip").click(function(){
      $('.contact-panel').slideUp(7000)
    });
  });