    $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
    });

    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { 
            event.preventDefault();
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('html,body').animate({
                scrollTop: dest
            }, 800, 'swing');
            hashTagActive = this.hash;
        }
    });