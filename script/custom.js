$(function(){
  /* include Files */
  $('#header-include').load('../include/header.html', function(){
    /* header navi megamenu */
   $(window).resize(function(){
    console.log($(window).width());
    /* 디바이스 너비 767 이상(태블릿, pc) */
    if($(window).innerWidth() > 767) {
      $('.trigger').click(function(){
        console.log('pc이벤트');
        $(this).toggleClass('active');
        $('.mega-navi').stop().slideToggle(300);
      });
      $('section').click(function(){
        $('.mega-navi').stop().slideUp(300);
      });
    /* 디바이스 너비 767 이하(모바일) */
    } else if($(window).innerWidth() < 767) {
    // } else {
      $('.trigger').click(function(){
        console.log('mo이벤트');
        $('.mega-navi').animate({'left' : 0}, 300);
      });
      $('section, .btn-mega-navi-close').click(function(){
        $('.mega-navi').animate({'left' : -300}, 300);
      });
    }
   }).resize();

    /* header navi megamenu - MO */
    $('.mega-navi-item b').click(function(){
      $('.mega-navi-item-wrap').slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).addClass('active');
      $(this).parent().siblings().children('b').removeClass('active');
    });
    $('.btn-mega-navi-close').click(function(){
      $('.mega-navi').stop().slideToggle();
    });

    /* toggle-pw */
    $('.toggle-pw').click(function(){
      // toggle icon shape
      $(this).toggleClass('bi-eye');
      // toggle input type
      var inputType = $(this).parent().children('input').attr('type');
      if(inputType == 'password') {
        $(this).parent().children('input').attr('type', 'text');
      } else {
        $(this).parent().children('input').attr('type', 'password');
      }
    });
    
    /* header login modal : open, hidden*/
    $('.btn-login').click(function(){
      $('.member-login-overlay').fadeIn();
      $('body').addClass('active');
    });
    $('.btn-modal-close').click(function(){
      $('.member-login-overlay').css('display','none');
      $('.class-share-overlay').css('display','none');
      $('body').removeClass('active');
    });
  });

  $('#footer-include').load('../include/footer.html');

  /* Scroll Header fixd  */
  $(window).scroll(function(){
    if($(this).scrollTop() > 150) {
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

  /* Class Detail Navigation */
  $('.class-detail-navigation a').click(function(e){
    $(this).addClass('active').siblings().removeClass('active');
    // smooth scrolling
    let linkLocation = $(this).attr('href');
    $('html, body').animate({
      scrollTop : $(linkLocation).offset().top
    }, 500);
    e.preventDefault();
  });

  /* Class curriculum-accordion */
  $('.chapter-title').click(function(){
    $(this).next().toggle();
    $(this).toggleClass('active');
  });

  /* class faq-accordion */
  $('.faq-title').click(function(){
    // 클릭한 것 펼치고 나머지는 접기
    $(this).next().slideToggle();
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

  /* category Detail buttons */
  $('.btn-shortcut').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
  /* paging buttons */
  $('.btn-paging').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
  
  /* btn-clear & btn-all-clear */
  // 갯수 카운터 만들기
  // $('#chk-item-count').clidren().length;

  $('.cart-item .btn-clear').click(function(){
    // $(this).parents('.cart-item').fadeOut(90);
    $(this).parents('.cart-item').remove();
  });
  $('.cart-wrap .btn-all-clear').click(function(){
    // $('.cart-items').hide();
    $('.cart-items').remove();
  });

  /* cart-chk input */
  $('.cart-chk-all').click(function(){
    if($(this).prop("checked")) {
      $('.check-status .cart-chk').prop("checked", true);
    } else {
      $('.check-status .cart-chk').prop("checked", false);
    }
    // attr과 prop
  });

  /* calss detail : share-modal, copied-link */
  $('.btn-sidebar-badge.share').click(function(){
    $('.class-share-overlay').fadeIn();
    $('body').addClass('active');
  });
  $('.share-link').click(function(){
    $('.copied-link').fadeIn(1000, function() {
      setTimeout(() => {
        $(this).fadeOut(1000)
      }, 2000);
    });
  });
  
});