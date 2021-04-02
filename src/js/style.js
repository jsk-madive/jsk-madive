'use strict';

/* Tab Event */


// tabAnimate
function tabAnimate() {
  var tabs = $('.tabs');

  $(document).on('click focus', '.tab-list > li', function () {
    $(this).addClass('on').siblings('li').removeClass('on');

    var tabIdx = $(this).index();
    $(tabs).siblings('.tab-contbox').children('.tab-cont').eq(tabIdx).show().siblings('.tab-cont').hide();
  });
}



// listTabScroll
function listTabScroll() {
  $('.subtab').each(function () {
    $(this).children('li').on({
      'click': function click() {
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


// inputChkAll
function inputChkAll(){
  // 전체 선택
  $(document).on('click', '.inputchk-all', function () {
    var allChkId = $(this).attr('id'),
      $chkList = $('input[name=' + allChkId + ']');

    if ($(this).is(':checked')) {
      $chkList.prop('checked', true);
    } else {
      $chkList.prop('checked', false);
    }
  });

  // 체크박스 개수
  $(document).on('click', 'input:checkbox', function () {
    var chkName = $(this).attr('name'),
      chkTotalCnt = $('input[name=' + chkName + ']').length,
      chkedCnt = $('input[name=' + chkName + ']:checked').length;

    if (chkTotalCnt == chkedCnt) {
      $('#' + chkName).prop('checked', true);
    } else if (chkTotalCnt > chkedCnt) {
      $('#' + chkName).prop('checked', false);
    }
  });
}


$(function () {
  // 탭 화면 초기화
  var nowTab = $('.tabs').children('ul').children('li.on').index();
  $('.tabs').siblings('.tab-contbox').children('.tab-cont').eq(nowTab).show();

  tabAnimate();
  listTabScroll();
  inputChkAll();
});