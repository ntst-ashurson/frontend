$(document).ready(function() {
	$(".chat-panel > .panel-body").on("mouseenter", function(){
		$("body").css("overflow-y", "hidden");
	});
	$(".chat-panel > .panel-body").on("mouseleave", function(){
		$("body").css("overflow-y", "auto");
	});
	$(".tab-controls .tab-button").on('click', function(e) {
		$(this).closest('.tab-container').find('.tab-item.active').removeClass("active");
		$(this).closest('.tab-container').find('.insert-row.active').removeClass("active");
		$(this).closest('.tab-container').find('.tab-controls .tab-button.active').removeClass("active");
		$(this).addClass("active");
		$(this).closest('.tab-container').find('.tab-item:nth-child('+$(this).attr('data-index')+')').addClass("active");
		$(this).closest('.tab-container').find('.insert-row[data-index='+$(this).attr('data-index')+']').addClass("active");
	});
	$(document).on("keydown", ".td-input input", function(e){
		//IF ADDING ROW
		if(e.which == 13 && $(this).closest("tr").index()+1 == $(this).closest("tbody").children().length)
		{
			var appendstring = 
			"<tr>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' disabled/></td>" +
            "</tr>";

			$(this).closest("tbody").append(appendstring);
			var col = $(this).closest("td").index();
			$(this).closest("tbody").find("tr:last-child").find("td:nth-child("+(col+1)+")").find("input").focus();
		}
		//going down
		else if(e.which == 13 || e.which == 40)
		{
			var col = 1 + $(this).closest("td").index();
			var row = 2 + $(this).closest("tr").index();
			$(this).closest("tbody").find("tr:nth-child("+row+")").find("td:nth-child("+col+")").find("input").focus();
		}
		//going up
		else if(e.which == 38)
		{
			var col = 1 + $(this).closest("td").index();
			var row = $(this).closest("tr").index();
			$(this).closest("tbody").find("tr:nth-child("+row+")").find("td:nth-child("+col+")").find("input").focus();
		}
		//going left
		else if(e.which == 37)
		{
			var col = $(this).closest("td").index();
			var row = 1 + $(this).closest("tr").index();
			$(this).closest("tbody").find("tr:nth-child("+row+")").find("td:nth-child("+col+")").find("input").focus();
		}
		//going right
		else if(e.which == 39)
		{
			var col = 2 + $(this).closest("td").index();
			var row = 1 + $(this).closest("tr").index();
			$(this).closest("tbody").find("tr:nth-child("+row+")").find("td:nth-child("+col+")").find("input").focus();
		}
	});
	$("#insert-participant-button").on("click", function() {
		var contents = $("#insert-participant").find("tbody").children();
		var newamt = contents.length;
		$("#participant-table").closest('.panel').find('.badge').each(function() {
			$(this).html(parseInt($(this).html())+newamt);
		},newamt);
		$("#participant-table").find("tbody").prepend(contents);
		var newtr = 
			"<tr>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' /></td>" +
                "<td class='td-input'><input type='text' disabled /></td>" +
            "</tr>";
		$("#insert-participant").find("tbody").append(newtr);
	});
});