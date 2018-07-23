$(document).ready(()=>{

    // JQuery Slider
    setInterval(function(){ 
      $('.imagesSlider > li:first')
        .next()
        .end()
        .appendTo('.imagesSlider');

        var currentDot = $('.active-dot');
        var nextDot = $('.active-dot').next();
   

        currentDot.removeClass('active-dot');
   
       if(nextDot.length === 0){
         nextDot = $('.dot').first();
       }

      nextDot.addClass('active-dot');


    }, 3000);



         // Slider arrow Right
  
      $('.arrowR').click(function(){
      $('.imagesSlider > li:last-child')
        .prev()
        .end()
        .prependTo('.imagesSlider');



      var currentDot = $('.active-dot');
      var nextDot = $('.active-dot').next();
   

        currentDot.removeClass('active-dot');
   
       if(nextDot.length === 0){
         nextDot = $('.dot').first();
       }

      nextDot.addClass('active-dot');
    });
      

         // Slider arrow Left

    $('.arrowL').click(function(){
      $('.imagesSlider > li:first')
        .next()
        .end()
        .appendTo('.imagesSlider');



      var currentDot = $('.active-dot');
      var prevDot = $('.active-dot').prev();
   

        currentDot.removeClass('active-dot');
   
       if(prevDot.length === 0){
         prevDot = $('.dot').last();
       }

      prevDot.addClass('active-dot');
    });




      // Slider dots

      $('.dot').on('click', ()=>{
       var index = $(event.currentTarget).index();
       $('.slider-dots  li').removeClass('active-dot');
       $(event.currentTarget).addClass('active-dot');
       $('.imagesSlider').eq(index).appendTo();
       $('.imagesSlider > li:first')
        .next()
        .end()
        .appendTo('.imagesSlider');
      });


      // JQuery Carousel

          // Carousel arrow Right

   $('.arrowRight').click(function(){
      $('.imagesCarousel > li:last-child')
        .prev()
        .end()
        .prependTo('.imagesCarousel');
    });
      
          // Carousel arrow Left

    $('.arrowLeft').click(function(){
      $('.imagesCarousel > li:first-child')
        .next()
        .end()
        .appendTo('.imagesCarousel');
    });



    // Menu Mobile

    $('.menuMobile').on('click', ()=>{
    	$('.btnContainer').slideToggle(500);
      //$('body').css('overflow-y', 'hidden');
    });
    $('.logIn').on('click', ()=>{
      $('.btnContainer').hide();
    });


    // LogIn

    $('.logIn').on('click', ()=>{
      $('.logForm').slideToggle(500);
      //$('body').css('overflow-y', 'hidden');
    });
    $('.menuMobile').on('click', ()=>{
      $('.logForm').hide();
    });




    // BaguetteBox

    baguetteBox.run('.productImage',{
       animation: 'slideIn',
       preload: 5
    });

    // BaguetteBox Mobile
    $('#baguetteBox-overlay').css({ 'zIndex': '9999999999999' });



    // Zoom

$('.details').zoom({
  magnify: 3,
  touch: false,
  duration: 200,
  on: 'grab'
});


    // Details Images

   $(".imageSmall").click(function() {
  var index = $(event.currentTarget).index();
   var imagem = $('.imageSmall img').eq(index).attr('src');

   $('#imageDetail').attr('src', imagem);

     $('.details').zoom({
    magnify: 3,
    touch: false,
    duration: 200,
    on: 'grab'
      });

   });


   // PopUp Gallery
    $("div > div", ".gallery").on('click', function(e){
      e.preventDefault();
      $(event.currentTarget).clone().appendTo('.window');
      $('#popUp').show();
    });

    $('#popUp').on('click',()=>{
         $('.window div').detach();
         $(event.currentTarget).hide();
    });




    //Search Result

     $('input').keypress(function(e) {

          if(e.which == 13){

            //alert('You pressed enter!');
            var value = $('.input').val();
            //alert(value);
            //$( window ).load(function() { 
            	window.location = 'search_result.html';
				  return;
				//});

            $( ".result" ).text(value);

          }

          //Não estou a conseguir que o .result seja substituído pelo value

          
    }); 







});


