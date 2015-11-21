//jQuery to create 4X4 grid using CSS

/* $(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		$('div#container').append('<div class="square"></div>');
	}
}); */

// jQuery to create 4X4 grid using a html table

$(document).ready(function() {

	initial = true;

	//Make 16X16 grid
	//make the row


	if (initial) {
		for (var i = 0; i < 16; i++) {
			$row = $('<tr></tr>');
			// $('div#container').append('<tr>'); gives a much larger grid. Why? See second loop.
			$('tbody').append($row); //works

				//make the cells

				for(var x = 0; x < 16; x++) {
					// $('tr').append($('<td class="square">')); 
					$($row).append($('<td class="square">'));
				}
		}
		initial = false;
	}

	mouseHover();

	shake();
/* Moved out of inital page loading

	$('#reset').click(function() {
		$('td.square.hover').removeClass('hover');
		var grid = prompt("How detailed of a square grid do you want?");
		console.log(grid); //made it this far...
		for (w = 0; w < grid; w++) {
			console.log(x);
			$('table').append($row);
				for(j = 0; j < grid; j++)
					$($row).append($('<td class="square">'));
		}
	});*/

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
		console.log(grid); //made it this far...
		

		for (var w = 0; w < grid; w++) {
			console.log(w + "row"); //made it here...
			$('tbody').append('<tr />');


				for(var j = 0; j < grid; j++) {
					console.log(j + "cell");
					$('tr').append('<td class="square"></td>');
				}
		}

		mouseHover();		
	})
};