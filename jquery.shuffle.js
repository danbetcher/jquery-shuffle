/*
 *	jQuery Shuffle Plugin
 *
 *	Copyright (c) Dan Betcher
 *	https://www.twitter.com/danbetcher
 *
 *	Documentation:
 *	https://github.com/danbetcher/jquery-shuffle
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
;(function ( $ ) {
    $.fn.shuffle = function() {
        
        // Loop through each instance
        $.each(this.get(), function(index, el) {
            // Collect the containing element
            var $el = $(el);
            
            // Find all the children inside
            var $find = $el.children();
            
            // Sort the passed elements in a random order
            $find.sort(function() {
                return 0.5 - Math.random();
            });
        
            // Remove the children
            $el.empty();
            
            // Put them back after they have been re-sorted
            $find.appendTo($el);
        });
    };
})(jQuery);