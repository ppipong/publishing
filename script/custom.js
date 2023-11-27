$(function(){

  /* include Files */
  $('#header-include').load('/include/header.html');
  $('#footer-include').load('/include/footer.html');
  
  /* Scroll Header fixd  */
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('header').addClass('active');
    } else {
      $('header').removeClass();
    }
  });
  /* Focus like */
  $('.like').click(function(){
    $(this).toggleClass('active');
  });

  /* early-bird-countdwon */
  $(".early-bird-countdwon")
    .countdown("2023/11/28", function(event) {
      $(this).html(
        event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
      );
  });

  /* Front slider */
  $('.front-slider-items').slick({
    infinite: true, // 마지막 슬라이드 다음에 처음으로 돌아가기
    arrows: false,
    dots: false,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    pauseOnHover: true // 마우스 올라갔을 때 잠시 멈춤
  });
  
  /* focus class silder */
  $('.focus-class-items').slick({
    slidesToShow: 4, // 최초에 보이는 개수
    slidesToScroll: 2, // 슬라이드 할때 보이는 개수
    arrows : true,
    dots : false
  });

});