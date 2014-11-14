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
(function(e){e.fn.shuffle=function(){e.each(this.get(),function(t,n){var r=e(n);var i=r.children();i.sort(function(){return.5-Math.random()});r.empty();i.appendTo(r)})}})(jQuery)