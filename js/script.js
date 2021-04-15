$(window).bind('scroll',function(e){
    parallaxWithScroll();
});

function parallaxWithScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.3))+'px');
   $('.layer-2').css('top',(0-(scrolled*.6))+'px');
   $('.layer-3').css('top',(0-(scrolled*.9))+'px');
   $('.vangogh-1').css('top',(900-(scrolled*.8))+'px');
   $('.vangogh-2').css('top',(630-(scrolled*.6))+'px');
   $('.vangogh-3').css('top',(578-(scrolled*.4))+'px'); 
}


