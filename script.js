$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
    });
    
    /*challenge one*/
    $("p").text("Change the content of all p text's in one go!");

    /*Challenge two */
    $("p").append("<span>Add a span element to every p tag on the page");
    $("a").remove();
    $("div.card").empty();

    /*Challenge tree */

    // Creates a new script element
    var script = document.createElement('script');
    script.src = "//code.jquery.com/jquery-latest.min.js";
    document.head.appendChild(script);

    $("p").css("font-family");

    $("h2").css("font-family");

    $("p").text("Aaron");


    // Creates a new script element
    var script = document.createElement('script');
    script.src = "//code.jquery.com/jquery-latest.min.js";
    document.head.appendChild(script);

    $("p").css("background-color", "green");

    $("p").css("font-family", "Tahoma");

}); 
