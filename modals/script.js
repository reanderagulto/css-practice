(function ($, w, d, h, b) {
    $(document).ready(function () {
        /**
         * Construct.
         */
        function __construct() {
            modalShow();
        }

        function modalShow(){
            let $button = $('#modal-button');
            $button.on('click', function(){
                console.log("Clicked");
            });
        }
        
        /**
         * Instantiate
         */
        __construct();
    });
    $(w).on('load', function () {
        $('body').addClass('siteloaded');
    });
})(jQuery, window, document, 'html', 'body');