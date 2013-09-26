## 2.0.2 (2013-09-25)

Bugfixes:

 * Limit the Konami Code buffer to store the last _n_ characters. Since the Konami Code buffer stored every key press, it could get needlessly large on sites where users typed lots per request. Fix thanks to [stem](https://github.com/mcoms/jquery-raptorize-coffee/pull/1).

## 2.0.1 (2013-07-11)

Features:

 * Can now be built using [Rake](http://rake.rubyforge.org/)

Bugfixes:

 * Added locking support as per the original plugin. Now the raptor can't be triggered again while it's currently animating. Raptors [can pick locks](http://xkcd.com/135/), but they are slowed by them.

## 2.0.0 (2013-07-10)

Initial release.

Features:

 * Raptors
 * [Modernizr](http://modernizr.com/) support for audio feature detection
 * Compatibility with latest jQuery
 * API compatibility with [ZURB's plugin](http://zurb.com/playground/jquery-raptorize)
 * Installable via [Bower](http://bower.io/) (jquery-raptorize-coffee)