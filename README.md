# Wat?

Inspired by and compatable with ZURB's jQuery Raptorize Plugin 1.0 (http://www.ZURB.com/playground).  This is an API-compatible re-write of their plugin to support newer jQuery versions.  It's written in [CoffeeScript](http://coffeescript.org/).

Depends upon [Modernizr](http://modernizr.com/) with HTML5 Audio detection enabled.

**Demo:** http://mcoms.github.io/jquery-raptorize-coffee

# Usage

You'll need jQuery, a build of [Modernizr](http://modernizr.com/) with HTML5 Audio support and the plugin included to experience raptor awesomeness.

You'll also need the raptor assets in the `images` and `sounds` directories.

## Installing via Bower

You can install the package automatically using [Bower](http://bower.io/).

```zsh
bower install jquery-raptorize-coffee
```

## Basic web page
```html
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
```

## Advanced options
### Timer operation
```html
<script type="text/javascript">
  $(function(){
    $('body').raptorize({
      "enterOn": "timer",
      "delay": 12000 // 12 seconds.
    });
  });
</script>
```

### Konami code
```html
<script type="text/javascript">
  $(function(){
    $('body').raptorize({
      "enterOn": "konami-code"
    });
  });
</script>
```

# Building

You'll need [CoffeeScript](http://coffeescript.org/) installed.

```zsh
coffee --compile --output build/ jquery-raptorize.coffee
```

Using this in production? Just include the `jquery-raptorize.coffee` file in your asset pipeline. If you don't have one of those, you can build a minified version with [UglifyJS](https://github.com/mishoo/UglifyJS2).

```zsh
uglifyjs --comments /license/ --mangle --compress --output build/jquery-raptorize.min.js build/jquery-raptorize.js
```

## Using Rake

To build in one step, you can use [Rake](http://rake.rubyforge.org/) to run `rake build`.

```zsh
rake build    # Compile and Uglify the JS into the build directory
rake compile  # Compile the JS into the build directory
rake uglify   # Uglify the compiled JS in the build directory
```

# Contributing

If you'd like to improve the plugin, or heaven forbid, add unit tests, I'd love to have your contributions.

1. Fork the project
2. Make a topic branch (e.g. "added-raptor-hats")
3. Send a pull request
4. Run. Raptors move at 10 m/s and they [do not know fear](http://xkcd.com/135/).