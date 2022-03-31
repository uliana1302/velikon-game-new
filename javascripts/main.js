$(function () {

// основные js

	// запрет скролла страницы
	$("html,body").css("overflow","hidden");

	// изменение кнопки пауза на плэй
	$(".button-pause").click(function(){
		$(this).toggleClass("hidden");
	});

	// остановка анимации при кнопке пауза
	$(".button-pause").click(function(){
		$(".sprite-l1").toggleClass("sprite-l1-h");
		$(".sprite-l2").toggleClass("sprite-l2-h");
		$(".sprite-l3").toggleClass("sprite-l3-h");
		$(".sprite-l4").toggleClass("sprite-l4-h");
		$(".noga_1").toggleClass("noga_1-h");
		$(".noga_2").toggleClass("noga_2-h");
	});

	// перезагрузка страницы
	$(".button-restart").click(function(){
		location.reload();
	});

  // переход на другую локацию

  	// if($(".obl-1, .obl-2, .obl-3, .obl-4, .obl-5, .obl-6, .obl-7, .obl-8, .obl-9, .obl-10, .obl-11, .obl-12, .obl-13").css("opacity") == "0") {
  	// 	$(".sprite-l1").css('display', 'none');
  	// }

  	let count = 0;
  	$(".button-next").click(function () {
  		count += 1;
  		// переход на локацию 2
  		if (count == 1) {
  		$(".sprite-l1, .obl-1, .obl-2, .obl-3, .obl-4, .obl-5, .obl-6, .obl-7, .obl-8, .obl-9, .obl-10, .obl-11, .obl-12, .obl-13").css('display', 'none');
  		$(".sprite-l2, .b-1, .b-2, .b-3, .b-4, .b-5, .verevka-2").css('display', 'block');
  		// $(".tablichka").css('animation', 'tablichka 3s 3s');
  		}
  		// переход на локацию 3
  		if (count == 2) {
  		$(".sprite-l2, .b-1, .b-2, .b-3, .b-4, .b-5, .verevka-2").css('display', 'none');
  		$(".sprite-l3, .pr-1, .pr-2, .pr-3, .pr-4, .pr-5, .pr-6, .pr-7, .pr-8, .car-1, .car-2, .stolb-1, .stolb-2").css('display', 'block');
  		}
  		// переход на локацию 4
  		if (count == 3) {
  		$(".sprite-l3, .pr-1, .pr-2, .pr-3, .pr-4, .pr-5, .pr-6, .pr-7, .pr-8, .car-1, .car-2, .stolb-1, .stolb-2").css('display', 'none');
  		$(".sprite-l4, .kamni, .m-1, .m-2, .m-3, .m-4, .m-5, .m-6, .riba-1, .riba-2, .riba-3, .riba-4, .riba-5, .riba-6, .riba-7, .riba-8, .riba-9, .riba-10, .wave-1, .wave-2").css('display', 'block');
  		}
  		// переход на последний экран
  		if (count == 4) {
  		$(".sprite-l4, .kamni, .m-1, .m-2, .m-3, .m-4, .m-5, .m-6, .riba-1, .riba-2, .riba-3, .riba-4, .riba-5, .riba-6, .riba-7, .riba-8, .riba-9, .riba-10, .wave-1, .wave-2, .button-play, .button-next, .button-pause, .menu-panel").css('display', 'none');
  		$(".golova, .text-k1, .text-k2").css('display', 'block');
  		$(".button-restart").css('margin-left', '5vw');
  		// setTimeout(function () {
  		// 	$(".golova").css('opacity', '1');
  		// }, 300);

  		$(".noga_1").addClass("noga_1-h");
  		$(".noga_2").addClass("noga_2-h");
  		}

  	});

// js для взаимодействия с элементами

	// локация 1 (облака)
	$(".obl-1, .obl-2, .obl-3, .obl-4, .obl-5, .obl-6, .obl-7, .obl-8, .obl-9, .obl-10, .obl-11, .obl-12, .obl-13").click(function() {
		$(this).css('display', 'none');
	});

  // локация 2 (бельё)
	$(".b-1, .b-2, .b-3, .b-4, .b-5").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-1, .b-2, .b-3, .b-4, .b-5").css('display', 'none')
		}
	});

  // локация 3 (провода)

  // $(".pr-1, .pr-2, .pr-3, .pr-4, .pr-5, .pr-6, .pr-7, .pr-8").click(function() {
	//    $(this).css('opacity', '0');
	// });

  // $(".pr-1, .pr-2, .pr-3, .pr-4, .pr-5, .pr-6, .pr-7, .pr-8").hover(function(){
	//   $(".pr-1").css("display", "none");
  //   $(".pr-h-1").css("display", "block");
  //   $(".pr-2").css("display", "none");
  //   $(".pr-3").css("display", "none");
  //   $(".pr-h-3").css("display", "block");
  //   $(".pr-4").css("display", "none");
  //   $(".pr-h-4").css("display", "block");
  //   $(".pr-5").css("display", "none");
  //   $(".pr-h-5").css("display", "block");
  //   $(".pr-6").css("display", "none");
  //   $(".pr-h-6").css("display", "block");
  //   $(".pr-7").css("display", "none");
  //   $(".pr-8").css("display", "none");
  //   $(".pr-h-8").css("display", "block");
  // });

  // локация 4 (море)
  $(".m-1, .m-2, .m-3, .m-4, .m-5, .m-6").draggable({ axis: "x" });


});
