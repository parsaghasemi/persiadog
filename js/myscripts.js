$(document).ready(function() {

	$('.link-gallery').click(function(){
		var descripcion = $(this).attr('title');
		$('#caption').html(descripcion);
	  	var img = $(this).find('img');
	  	var src = img.attr('src')
	  	$('#img01').attr('src', src);
		$('#myModal').css('display','block');
		$('.modal-backdrop').remove();
	});

	$('.close').click(function(){
		$('#myModal').css('display','none');
	});

});
