jQuery.noConflict();
jQuery(function($) {
	$('#map').maphilight({
		fillColor: map_hilight_args.background_color,
		fillOpacity: map_hilight_args.opacity,
		strokeColor: map_hilight_args.border_color
	});
});
