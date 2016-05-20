$(document).ready(function(){
    $('.event-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false

    });

  $('.login-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true
  });

  $('.file-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true
  });

  $('.theme-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });

  $('.live-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.select-time').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  function changeTab(){
    var target = $(this).data('target');

    $('#tab-navigation li').removeClass('selected');
    $('#tab-navigation li').addClass('noSelected');
    $(this).removeClass('noSelected');
    $(this).addClass('selected');
    $('.tabContainer').addClass('hidden');
    $(target).removeClass('hidden');
  }

  function increaseLikes(){
    var myString = $(this).children('.nLikes').first().html();
    var myInteger = parseInt(myString);
    var myNewInteger = myInteger + 1;
    var nlikesUp = myNewInteger.toString();

    $(this).children('.nLikes').first().html(nlikesUp);
  }

  $('#tab-navigation li').click(changeTab);
  $('.likes').click(increaseLikes);

  $('.list li').click(function(){
      var checkValue = $(this).find('input');
      var moreInfo =$(this).find('.more-option');


      if(checkValue.is(':checked')){

        moreInfo.addClass( "active" );
      }
      else{
        moreInfo.removeClass( "active" );
        console.log('no');
      }
  });
  $('.social-share .select-social li').click(function(){
    $('.select-social li').removeClass('active');
    $(this).addClass('active');
  });
  $(" .send-button  li").click(function(){
    $(this).toggleClass("active");
  });
  $(".social-list li").click(function(){
    $(this).toggleClass("actived");
  });

  $('.acordion__link').click(function(e){
    $(this).toggleClass('acordion__link--active');
    $(this).next().slideToggle('200ms');
  });

  $('.category-item').click(function(){
    $(".category-group ").addClass("hide");
    $(".subcategory").removeClass("hide");
  });
  $(".small-back").click(function(){
    $(".category-group").removeClass("hide");
    $(".subcategory").addClass("hide");
  });
  $(".subcategory-list li").click(function(){
    $(".subcategory-list li").removeClass("active");
    $(this).addClass("active");
    $(".select-theme").removeClass("hide");
  });
  $(".theme").click(function(){
    $(this).addClass("active");
  })


  //==== modal ===
  $('.attach-block, .more').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){
        $('.modal-block, .menu-block')
          .css('display', 'block') //
          .animate({opacity: 1}, 100);
      });
  });

  $('.close, #overlay, .cancel').click( function(){
    console.log('click');
    $('.modal-block, .menu-block')
      .animate({opacity: 0, top: '45%'}, 100,
        function(){
          $(this).css('display', 'none');
          $('#overlay').fadeOut(100);
        }
      );
  });

  alignCenter($('.modal-block'));
  function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px',
      top: ($(window).height() - elem.height()) / 2 + 'px'
    })
  }


   //==== my proffile switch ====
  $(".switch-list").click(function(){
    $(".my-profile-map ").removeClass('hide');
    $(".switch-map").removeClass('hide');
    $(".event-shouts").addClass('hide');
    $(this).addClass('hide');
  });
  $(".switch-map").click(function(){
    $(".switch-list").removeClass('hide');
    $(".event-shouts").removeClass('hide');
    $(".my-profile-map").addClass('hide');
    $(this).addClass('hide');
  });


  $(".type li").click(function(){
    $(".type li").removeClass('active');
    $(this).addClass('active');
  });
  $(".entrance-type li").click(function(){
    $(".entrance-type li").removeClass('active');
    $(this).addClass('active');
  });

  //advertise-block
  $(".toggle input").change(function(){
    var toggle = $(this);
    if(toggle.is(':checked')){
      $('.advertise-block').removeClass('hide');
    }
    else{
      $('.advertise-block').addClass('hide');
    }
  });

  $(".select-time .time").click(function(){
    $(".time").removeClass("active-time");
    $(this).addClass("active-time");
  });
  $(window).resize(function() {

  });
  var viewportHeight = $(window).height();
  $('.login-slider-item').css({ 'height': viewportHeight + "px" });


  //interest
  $('.interest-category .category-item').click(function(){
    $(this).toggleClass("active");
  });

  $('.interest-sub li').click(function(){
    $('.select-result').removeClass('hide');
    $('.more-block').removeClass('hide');
    $('.button-bar').removeClass('no-active');
  });

  //attends
  $('.attending-contact-list .attending-add-user').click(function(){
    var elemSelect = $(this).parent();
    elemSelect.appendTo( $('.attending-contact ul'));
  })
});



