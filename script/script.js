//адаптив изображения
function ibg(){
   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }}}ibg();
   //

//================================================================================
//slickslider
   $(document).ready(function(){
      $('.slider').slick({
         arrows:false,
         dots:true,
         adaptiveHeight:true,
      });
      });
//========================================================================================
//бургер
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});
   //====================================================
   /*$(document).ready(function(){
      $('.menu a').ready(function(){
         if('http://site.ru'+$(this).attr('href')==window.location.href)
{
   $(this).addClass('active');
}
      });
   });*/



//типо подсвечивает пунк меню
   //=====================================================================================