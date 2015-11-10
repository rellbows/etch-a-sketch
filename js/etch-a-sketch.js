//jQuery to create 4X4 grid using CSS

/* $(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		$('div#container').append('<div class="square"></div>');
	}
}); */

// jQuery to create 4X4 grid using a html table

$(document).ready(function() {

	//make the row

	for (i = 0; i < 4; i++) {
		var $row = $('<tr>');
		$('div#container').append($row);

			//make the cells

			for(x = 0; x < 4; x++) {
				$row.append($('<td class="square">'));
			}
	}
})