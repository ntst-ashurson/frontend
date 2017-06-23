$(document).ready(function() {
	$(".chat-panel > .panel-body").on("mouseenter", function(){
		$("body").css("overflow-y", "hidden");
	});
	$(".chat-panel > .panel-body").on("mouseleave", function(){
		$("body").css("overflow-y", "auto");
	});
	$('#add-table-row').on( 'click', function () {
		var t = $('#dataTables-example').DataTable();
        t.row.add([
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "NEW ROW",
	        "New Row"
    	 ]).draw(false);
	    t.order([1, 'asc']).draw();
	    t.page('last').draw(false);
    } );
});