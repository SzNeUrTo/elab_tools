$('.scorebox').each(function() {$(this).after("<button class='btn_point' value='1'>SugarSeeker</button>"); $(this).val(1); $(this).parent().find('button').css('background', 'green').css('color', 'white')});
$('.btn_point').click(function(e) {
	e.preventDefault();
	var index = $(this).parent().find('.btn_point').index(this);
	var scorebox = $(this).parent().find('.scorebox')[index];
	var grading = (parseInt(this.value) + 1) % 2;
	scorebox.value = grading;
	this.value = grading;
	// this.innerHTML = (grading ? "PPPP" : "XXXX");
	this.innerHTML = "SugarSeeker";
	this.style.background = (grading ? "green" : "red");
});