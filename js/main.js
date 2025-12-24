$(document).ready(function(){ //시작
  $(".depth2, .depth2-bg").hide();

  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $(".depth2-bg").stop().fadeIn();
    $("header").addClass("active");
  });

  $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $(".depth2-bg").stop().fadeOut();
    $("header").removeClass("active");
  });

  //검색영역
  $(".search").hide();
  $("header .utill .btn-search").click(function(){
    $(".search").fadeToggle();
    $("header").toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".mgnb-wrap").hide();
  $(".btn-menu").click(function(){
    $(".mgnb-wrap").fadeIn();
  });
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });

  $(".mgnb > li").click(function(){
    $(this).children(".mdepth2").slideToggle();
  });


  //mb
  const mb = new Swiper('.mb',{
    loop:true,
    speed:1000,
    
    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
    
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true
    },
	  
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 
    },
  });

  //mb-control
  $(".mb-play").hide();

  $(".mb-pause").click(function(){
    mb.autoplay.stop();
    $(".mb-play").show();
    $(".mb-pause").hide();
  });
  $(".mb-play").click(function(){
    mb.autoplay.start();
    $(".mb-pause").show();
    $(".mb-play").hide();
  });

  const news_list = new Swiper('.news-list',{
    loop:true,
    speed:800,
    direction: "vertical",

    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
  }); //스와이퍼 닫힘



  const prd_list = new Swiper('.prd-list',{
    loop:true,
    speed:800,

    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },

    slidesPerView:1.5,
    spaceBetween: 20,
    breakpoints: {
      768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
      1400: {
            slidesPerView: 5,
            spaceBetween: 50,
      },
    },

    pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true
    },
  }); //스와이퍼 닫힘

  //아코디언 배너
  $("#store ul li").eq(0).addClass("active");
  $("#store ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

  $("#brand .brand-img ul li").not(":first").hide();
  $("#brand .brand-name ul li").eq(0).addClass("active");

  $("#brand .brand-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $("#brand .brand-img ul li").eq(idx).fadeIn().siblings().hide();
  });

    AOS.init();
  
}); //끝