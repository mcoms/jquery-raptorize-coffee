# Wat?

Inspired by and compatable with ZURB's jQuery Raptorize Plugin 1.0 (http://www.ZURB.com/playground).  This is an API-compatible re-write of their plugin to support newer jQuery versions.  It's written in [CoffeeScript](http://coffeescript.org/).

Depends upon Modernizr with HTML5 Audio detection enabled.

# Usage

You'll need jQuery, a build of [Modernizr](http://modernizr.com/) with HTML5 Audio support and the plugin included to experience raptor awesomeness.

You'll also need the raptor assets in the `images` and `sounds` directories.

## Basic web page
    <!DOCTYPE html>
    <html>
      <head>
        <title>Awesome Raptor Powa!</title>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="modernizr.js"></script>
        <script src="build/jquery-raptorize.js"></script>
        <script type="text/javascript">
          $(function(){
            $('#raptor-button').raptorize();
          });
        </script>
      </head>
      <body>
        <button id="raptor-button">Click for Raptor.</button>
        <p>There's more detailed instructions <a href="https://github.com/mcoms/jquery-raptorize-coffee">over on Github</a>.</p>
      </body>
    </html>

## Advanced options
### Timer operation
    <script type="text/javascript">
      $(function(){
        $('body').raptorize({
          "enterOn": "timer",
          "delay": 12000 // 12 seconds.
        });
      });
    </script>

### Konami code
    <script type="text/javascript">
      $(function(){
        $('body').raptorize({
          "enterOn": "konami-code"
        });
      });
    </script>

# Building

You'll need [CoffeeScript](http://coffeescript.org/) installed.

    coffee --compile --output build/ jquery-raptorize.coffee

# Contributing

If you'd like to improve the plugin, or heaven forbid, add unit tests, I'd love to have your contributions.

1. Fork the project
2. Make a topic branch (e.g. "added-raptor-hats")
3. Send a pull request
4. Run. Raptors move at 10 m/s and they [do not know fear](http://xkcd.com/135/).