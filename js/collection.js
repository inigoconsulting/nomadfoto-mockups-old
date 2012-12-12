        (function($) {
                var populate_gallery = function (node, images) {
                var gallerylen = 0;
                $.each(images, function (idx, image) {
                    node.append('<li><a href="' + image.url + '" class="img-polaroid"><img src="' + image.url + '" /></a></li>');
                })
            }
            $(document).ready(function() {
                $('.folder').hide();
                $('#collect').toggle(function (ev) {
                    $('.folder').show("slow");
                }, function (ev) {
                    $('.folder').hide("slow")
                });
                $.getJSON('json/images.json', {}, function (data) {
                    populate_gallery($('#collections'), data)
                    $('#collections').sortable().disableSelection();
                });
                $('#collections li').draggable();
            });
        })(jQuery);
