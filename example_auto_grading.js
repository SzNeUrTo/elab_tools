var value_of_x = [-10, -1, 1, 2, 3, 4, 9, 10, 100, 10000], row = 0, col = 0;

function grading(answer) {
	if (row == 0 && ("" + Math.sqrt(value_of_x[col]).toFixed(14)) == parseFloat(answer).toFixed(14)) return 1;
	else if (row == 1 && ("" + Math.log(value_of_x[col]).toFixed(14)) == parseFloat(answer).toFixed(14)) return 1;
	else if (row == 2 && ("" + Math.log10(value_of_x[col]).toFixed(14)) == parseFloat(answer).toFixed(14)) return 1;
	return 0;
}

$('.grading').each(function(i) {
	table = $($(this).find('table')[0]);
	table.find('td').each(function(j) {
		answer = $(this).find('input')[0];
		grade = 0;
		if (answer) {
			answer = answer.value.split('์').join('').split(' ').join('');
			grade = grading(answer);
			if (col == 9) row = (row + 1) % 3;
			col = (col + 1) % 10;
			$(this).find('input')[1].value = grade;
		}
	});
});

var save_button = $("[type='submit'"), index = 0;
setInterval(function() {
	save_button[index++].click(true);
}, 1000);