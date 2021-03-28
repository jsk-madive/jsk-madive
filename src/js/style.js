'use strict';

/* 
  Tab Event 
*/

// tabBar
function tabBar(MenuPosX, transition) {
  $('.tab-bar').css({
    left: MenuPosX + 'px',
    transition: 'left ' + transition + 's'
  });
}

// tabAnimate
function tabAnimate() {
  var tabList = $('.tabs');
  $('.tab-list > li.on').append('<i class="tab-bar"></i>');

  $(document).on('click focus', '.tab-list > li', function () {
    $(this).addClass('on').siblings('li').removeClass('on');

    var tabIdx = $(this).index();
    $(tabList).siblings('.tab-contbox').children('.tab-cont').eq(tabIdx).show().siblings('.tab-cont').hide();
    
    var MenuPosX = $(this).position().left;
    tabBar(MenuPosX, 0.3);

  });
}

$(window).on('resize', function () {
  var tabListCnt = $('.tab-list').length;
  if (tabListCnt > 0) {
    var MenuPosX = $('.tab-list > li.on').position().left;
    tabBar(MenuPosX, 0);
  } else {
    return 0
  }
});



// listTabScroll
function listTabScroll() {
  $('.subtab').each(function () {
    $(this).children('li').on({
      'click': function () {
        var leftP = $(this).offset().left;
        $(this).parent().animate({
          scrollLeft: leftP
        }, 100);
        $('.subtab > li').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
}



$(function () {
  // 탭 화면 초기화
  var nowTab = $('.tabs').children('ul').children('li.on').index();
  $('.tabs').siblings('.tab-contbox').children('.tab-cont').eq(nowTab).show();

  tabAnimate();
  listTabScroll();
});