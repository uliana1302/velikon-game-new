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
  	let count = 0;
  	$(".button-next").click(function () {
  		count += 1;
  		// переход на локацию 2
  		if (count == 1) {
  		$(".sprite-l1, .oblaka, .menu-panel p:nth-of-type(1), .verev-1, .tablichka-1").css('display', 'none');
  		$(".sprite-l2, .belie, .menu-panel p:nth-of-type(2), .verev-2, .tablichka-2").css('display', 'block');
			$(".tablichka").css('width', '11vw')
  		// $(".tablichka").css('animation', 'tablichka 3s 3s');
  		}
  		// переход на локацию 3
  		if (count == 2) {
  		$(".sprite-l2, .belie, .verev-2, .tablichka-2, .menu-panel p:nth-of-type(2)").css('display', 'none');
  		$(".sprite-l3, .provoda, .verev-3, .tablichka-3, .menu-panel p:nth-of-type(3), .verev, .tablichka, .tablichka p:nth-of-type(3)").css('display', 'block');
  		}
  		// переход на локацию 4
  		if (count == 3) {
  		$(".sprite-l3, .provoda, .verev-3, .tablichka-3, .menu-panel p:nth-of-type(3)").css('display', 'none');
  		$(".sprite-l4, .ribi-musor, .verev-4, .tablichka-4, .menu-panel p:nth-of-type(4), .verev, .tablichka, .tablichka p:nth-of-type(4)").css('display', 'block');
  		}
  		// переход на последний экран
  		if (count == 4) {
  		$(".sprite-l4, .ribi-musor, .verev-4, .tablichka-4, .button-play, .button-next, .button-pause, .menu-panel").css('display', 'none');
  		$(".golova, .posl-text").css('display', 'block');
  		$(".button-restart").css('margin-left', '5vw');
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
	$(".b-1").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-1").css('display', 'none')
		}
	});
	$(".b-2").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-2").css('display', 'none')
		}
	});
	$(".b-3").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-3").css('display', 'none')
		}
	});
	$(".b-4").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-4").css('display', 'none')
		}
	});
	$(".b-5").draggable();
	$(".b-div").droppable ({
		out: function() {
			$(".b-5").css('display', 'none')
		}
	});

  // локация 3 (провода)

  $(".pr-1").click(function() {
	   $(this).addClass('pr-1_1');
		 });
	$(".pr-3").click(function() {
		 $(this).addClass('pr-3_1');
		 });
	$(".pr-4").click(function() {
		 $(this).addClass('pr-4_1');
		 });
	$(".pr-5").click(function() {
	   $(this).addClass('pr-5_1');
		 });
	$(".pr-6").click(function() {
	  	$(this).addClass('pr-6_1');
		 });
	$(".pr-8").click(function() {
	   $(this).addClass('pr-8_1');
		 });


  // локация 4 (море)
  $(".m").hover(function() {
		$(this).addClass('m-anim');
	});


});
