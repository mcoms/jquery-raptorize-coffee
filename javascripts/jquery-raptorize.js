// Generated by CoffeeScript 1.6.3
/*
jQuery Raptorize Plugin 2.0.1
https://github.com/mcoms/jquery-raptorize-coffee

Inspired by and compatable with ZURB's jQuery Raptorize Plugin 1.0 (http://www.ZURB.com/playground)
This is an API-compatible re-write of their plugin to support newer jQuery versions.
Depends upon Modernizr with HTML5 Audio detection enabled.

Free to use under the MIT license.
http://www.opensource.org/licenses/mit-license.php
*/


(function() {
  (function($) {
    return $.fn.raptorize = function(options) {
      var animate, arraysEqual, audioSupported, locked, raptor, raptorAudioMarkup, raptorImageMarkup, settings, watchForKonami;
      settings = $.extend({
        "enterOn": "click",
        "delayTime": 5000
      }, options);
      audioSupported = Modernizr.audio;
      raptorImageMarkup = '<img id="elRaptor" style="display: none" src="images/raptor.png" />';
      raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="sounds/raptor-sound.mp3" /><source src="sounds/raptor-sound.ogg" /></audio>';
      if (!$('#elRaptor').length) {
        $('body').append(raptorImageMarkup);
      }
      if (!($('#elRaptorShriek').length || !audioSupported)) {
        $('body').append(raptorAudioMarkup);
      }
      raptor = $('#elRaptor').css({
        "position": "fixed",
        "bottom": "-700px",
        "right": "0",
        "display": "block"
      });
      arraysEqual = function(array1, array2) {
        return array1.length === array2.length && array1.every(function(e, i) {
          return e === array2[i];
        });
      };
      watchForKonami = function() {
        var konamiCode, pressedKeys;
        pressedKeys = [];
        konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        return $(window).bind('keydown.raptorz', function(e) {
          pressedKeys.push(e.which);
          if (arraysEqual(pressedKeys.slice(-konamiCode.length), konamiCode)) {
            return animate();
          }
        });
      };
      locked = false;
      animate = function() {
        if (!locked) {
          locked = true;
          if (audioSupported) {
            $('#elRaptorShriek').get(0).play();
          }
          if (settings['enterOn'] === 'konami-code') {
            $(window).unbind('keydown.raptorz');
          }
          return raptor.animate({
            "bottom": "0"
          }, function() {
            return $(this).animate({
              "bottom": "-130px"
            }, 100, function() {
              var offset;
              offset = ($(this).position().left) + 400;
              return $(this).delay(300).animate({
                "right": offset
              }, 2200, function() {
                raptor = $('#elRaptor').css({
                  "bottom": "-700px",
                  "right": "0"
                });
                return locked = false;
              });
            });
          });
        }
      };
      if (settings['enterOn'] === 'timer') {
        setTimeout(animate, settings['delayTime']);
      }
      if (settings['enterOn'] === 'konami-code') {
        watchForKonami();
      }
      return this.each(function() {
        if (settings['enterOn'] === 'click') {
          return $(this).click(animate);
        }
      });
    };
  })(jQuery);

}).call(this);
