


$(function(){
    //*jquery code
   let nav = $('nav')
    $(window).scroll(function(){
      let scrTop = $(window).scrollTop();
        
        if(scrTop>400){
           nav.addClass('navFixed')
        }else{
           nav.removeClass('navFixed')
        }
    });
    //*preloader
    let preloader = $('.preloader')
    $(window).on('load',function(){
      preloader.fadeout('500');
    })
});