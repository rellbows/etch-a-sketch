//jQuery to create 4X4 grid using CSS

/* $(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		$('div#container').append('<div class="square"></div>');
	}
}); */

// jQuery to create 4X4 grid using a html table

$(document).ready(function() {

	//Make 4X4 grid
	//make the row

	for (i = 0; i < 4; i++) {
		var $row = $('<tr>');
		// $('div#container').append('<tr>'); gives a much larger grid. Why? See second loop.
		$('div#container').append($row); //works

			//make the cells

			for(x = 0; x < 4; x++) {
				// $('tr').append($('<td class="square">')); 
				$($row).append($('<td class="square">'));
			}
	}
	//Mouse hover
	$('td.square').mouseenter(function() {
		$(this).addClass('hover');
	})

	$('#reset').click(function() {
		$('td.square.hover').removeClass('hover');
	})

});