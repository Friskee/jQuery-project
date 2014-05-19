$(document).ready(function() {
	$('main-grid').css({'width': '600px',
						'height': '600px'});
	
	for (var i = 0; i < 16; i++) {
		$('#grid-body').append('<tr>');
	}
	for (var i = 0; i < 16; i++) {
		$('tr').append('<td>');
	}	
	
	
						
	$('td').append('<div class="boxes">');
		
	$('div').css({width: '25px', height: '25px'});
	$('div').css({ 	'border-width': '1px', 
					'border-color': 'black', 
					'border-style': 'solid', 
					'background-color': 'black'
	});
					
	$('table').css({'border-spacing': '0',
					'margin': 'auto',
					'width': '600px',
					'height': '600px',
					'clear': 'both'});
	
						
	$('div').hover(function() {
		$(this).css({'background-color': 'grey'});
	});
	
	$('table').before('<div id="buttonDiv"><button id="clearButton" type="button">Clear Grid</button></div>');
	$('#buttonDiv').css({'text-align': 'center'});
						
	$('#clearButton').click(function() {
		$('.boxes').css({'background-color': 'black'});
		
		var userBoxes = prompt('How many rows/columns of boxes do you want to use?');
		
		$('#grid-body').empty();
		
		
	});
	
	if (userBoxes >= 1) {
		
	}
	
	
});