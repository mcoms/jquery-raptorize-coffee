###
jQuery Raptorize Plugin 2.0.0
https://github.com/mcoms/jquery-raptorize-coffee

Inspired by and compatable with ZURB's jQuery Raptorize Plugin 1.0 (http://www.ZURB.com/playground)
This is an API-compatible re-write of their plugin to support newer jQuery versions.
Depends upon Modernizr with HTML5 Audio detection enabled.

Free to use under the MIT license.
http://www.opensource.org/licenses/mit-license.php
###

(($) ->
  $.fn.raptorize = (options) ->
    settings = $.extend {
        "enterOn": "click",
        "delayTime": 5000,
      }, options
    audioSupported = Modernizr.audio

    raptorImageMarkup = '<img id="elRaptor" style="display: none" src="/images/raptor.png" />'
    raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="/sounds/raptor-sound.mp3" /><source src="/sounds/raptor-sound.ogg" /></audio>';
    $('body').append(raptorImageMarkup) unless $('#elRaptor').length
    $('body').append(raptorAudioMarkup) unless $('#elRaptorShriek').length or not audioSupported
    raptor = $('#elRaptor').css({
    	"position":"fixed",
    	"bottom": "-700px",
    	"right" : "0",
    	"display" : "block"
    })

    # Thanks to http://stackoverflow.com/questions/11142666/is-there-an-idiomatic-way-to-test-array-equality-in-coffeescript
    arraysEqual = (array1, array2) ->
      array1.length is array2.length and array1.every (e,i) -> e is array2[i] 

    watchForKonami = ->
      pressedKeys = []
      konamiCode = [38,38,40,40,37,39,37,39,66,65]
      $(window).bind('keydown.raptorz', (e) ->
        pressedKeys.push e.which
        animate() if arraysEqual(pressedKeys[-(konamiCode.length)..], konamiCode)
      )

    animate = ->
      $('#elRaptorShriek').get(0).play() if audioSupported
      $(window).unbind('keydown.raptorz') if settings['enterOn'] is 'konami-code'
      raptor.animate({
        "bottom": "0"
      }, ->
        $(this).animate({
          "bottom": "-130px"
        }, 100, ->
          offset = (($(this).position().left)+400)
          $(this).delay(300).animate({
            "right": offset
          }, 2200, ->
            raptor = $('#elRaptor').css({
              "bottom": "-700px",
              "right": "0"
            })
          )
        )
      )

    setTimeout(animate, settings['delayTime']) if settings['enterOn'] is 'timer'
    watchForKonami() if settings['enterOn'] is 'konami-code'

    return this.each(->
        $(this).click(animate) if settings['enterOn'] is 'click'
      )
)(jQuery)