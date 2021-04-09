'use strict';

/* Tab Event */

// tabAction
function tabAction(){
	// tabInit
	$('.tab-list').each(function () {
		var onIdx = $(this).children('.on').index(),
			tabId = $(this).attr('id');

		if (onIdx >= 0) {
			$('[data-tab=' + tabId + ']').find('.tab-cont').eq(onIdx).show();
		} else {
			return 0
		}
	});


	// tabAnimate
	$(document).on('click focus', '.tab-list > li', function () {
		var nowTab = $(this).parent('ul').attr('id');

		$(this).addClass('on').siblings('li').removeClass('on');

		var tabIdx = $(this).index();
		$('[data-tab=' + nowTab + ']').filter('.tab-contbox').children('.tab-cont').eq(tabIdx).show().siblings('.tab-cont').hide();
	});

}


// listTabScroll
function listTabScroll(){
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


/* Modal */

// openModal
function openModal(){
	$(document).on('click', '.modal-open', function () {
		var selectBtn = $(this).attr('id');

		$('[data-modal=' + selectBtn + ']').addClass('is-active');
	});
}

// closeModal
function closeModal(){
	$(document).on('click', '.modal-del-btn, .modal-confirm-btn', function () {
		$(this).closest('.modal').removeClass('is-active');
	});
}

// modalEvent
function modalEvent(){
	openModal();
	closeModal();
}


/* qna */
function qnaAction(){
	// qnaToggle
	$(document).on('click', '.qna-question', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$('.qna-question').removeClass('active');
			$(this).addClass('active');
		}

		if ($(this).next('.qna-answer').is(':animated')) return;


		$(this).next('.qna-answer').slideToggle(300);

		$(".qna-question").not(this).next('.qna-answer').slideUp(300);
	});


	// qnaAnswerClose
	$(document).on('click', '.qna-close-btn', function () {
		$(this).closest('.qna-answer').slideUp(300).siblings('.qna-question').removeClass('active');
	});

}