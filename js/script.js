var arr=[];
$(document).ready(function() {
	$("#icon-grid").on('click', function(event) {
		if ($("#icon-grid").hasClass('active')) {
			$("#icon-grid").removeClass('active');
			$("#icon-grid").attr('src', 'img/3_1.png');
			$("#icon-grid2").addClass('active');
			$("#icon-grid2").attr('src', 'img/4_2.png');
		}
		else{
			$("#icon-grid").addClass('active');
			$("#icon-grid").attr('src', 'img/3_2.png');
			$("#icon-grid2").removeClass('active');
			$("#icon-grid2").attr('src', 'img/4_1.png');
		}
		$(".card").css('width', '350px');
	});
	$("#icon-grid2").on('click', function(event) {
		if ($("#icon-grid2").hasClass('active')) {
			$("#icon-grid2").removeClass('active');
			$("#icon-grid2").attr('src', 'img/4_1.png');
			$("#icon-grid").addClass('active');
			$("#icon-grid").attr('src', 'img/3_2.png');
		}
		else{
			$("#icon-grid2").addClass('active');
			$("#icon-grid2").attr('src', 'img/4_2.png');
			$("#icon-grid").removeClass('active');
			$("#icon-grid").attr('src', 'img/3_1.png');
		}
		$(".card").css('width', '250px');
	});
});