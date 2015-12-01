$(document).ready(function() {

	initial = true;

	//Make 16X16 grid
	//make the row


	if (initial) {
	for (var i = 0; i < 16; i++) {

		var $row = $('<tr></tr>'); //create a jQuery object

		for(var x = 0; x < 16; x++) {

			$row.append('<td class="square"></td>'); //add cells to that existing object
		}

		$('tbody').append($row); //add finished object to table
	}
	initial = false;
	}

	mouseHover();

	shake();

});

function mouseHover() {
		$('td.square').mouseenter(function() {
		$(this).addClass('hover');
		})
};

function shake() {
	$('#reset').click(function() {

		$('tr').remove();

		var grid = prompt("How detailed of a square grid do you want?");		

		for (var w = 0; w < grid; w++) {

			var $row = $('<tr></tr>');

			for(var j = 0; j < grid; j++) {

				$row.append('<td class="square"></td>');
			}

			$('tbody').append($row);
		}

		mouseHover();		
	})
};