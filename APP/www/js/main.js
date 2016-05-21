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

   //=========== time ========
  var Cal = function(divId) {

    //Store div id
    this.divId = divId;

    // Days of week, starting on Sunday
    this.DaysOfWeek = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

    // Months, stating on January
    this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    // Set the current month, year
    var d = new Date();

    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();

  };

// Goes to next month
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  };

// Goes to previous month
  Cal.prototype.previousMonth = function() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  };

// Show current month
  Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };

// Show month (year, month)
  Cal.prototype.showMonth = function(y, m) {

    var d = new Date()
    // First day of the week in the selected month
      , firstDayOfMonth = new Date(y, m, 1).getDay()
    // Last day of the selected month
      , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Last day of the previous month
      , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


    var html = '<table>';

    // Write selected month and year
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';


    // Write the header of the days of the week
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';

    // Write the days
    var i=1;
    do {

      var dow = new Date(y, m, i).getDay();

      // If Sunday, start new row
      if ( dow == 0 ) {
        html += '<tr>';
      }
      // If not Sunday but first day of the month
      // it will write the last days from the previous month
      else if ( i == 1 ) {
        html += '<tr>';
        var k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(var j=0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }

      // Write the current day in the loop
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      // If Saturday, closes the row
      if ( dow == 6 ) {
        html += '</tr>';
      }
      // If not Saturday, but last day of the selected month
      // it will write the next few days from the next month
      else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 6; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }

      i++;
    }while(i <= lastDateOfMonth);

    // Closes table
    html += '</table>';

    // Write HTML to the div
    document.getElementById(this.divId).innerHTML = html;
  };

// On Load of the window
  window.onload = function() {

    // Start calendar
    var c = new Cal("divCal");
    c.showcurr();

    // Bind next and previous button clicks
    //getId('btnNext').onclick = function() {
    //  c.nextMonth();
    //};
    //getId('btnPrev').onclick = function() {
    //  c.previousMonth();
    //};
  }

// Get element by id
  function getId(id) {
    return document.getElementById(id);
  }
});



