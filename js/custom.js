$(document).ready(function() {

	$('#type').change(function(e) {
		e.preventDefault();

		if( type.value === 'designer') {
			$('#mc-embedded-subscribe-form').attr('action', "http://sundar.us3.list-manage.com/subscribe/post?u=aa3c7ea557f2f7d7d0e073ee3&amp;id=b40988313d");
		} else if( type.value === 'supplier') {
			$('#mc-embedded-subscribe-form').attr('action', "http://sundar.us3.list-manage.com/subscribe/post?u=aa3c7ea557f2f7d7d0e073ee3&amp;id=ce3e25b20d");
		} else {
			$('#mc-embedded-subscribe-form').attr('action', '');
		}

	});

});