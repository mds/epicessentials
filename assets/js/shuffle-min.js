/**
 * @name    Shuffle Letters
 * @author    Martin Angelov
 * @version   1.0
 * @url     http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license   MIT License
 */
!function($){function t(t){var e="";"lowerLetter"==t?e="epic":"upperLetter"==t?e="epic":"symbol"==t&&(e=",.?/\\(^)![]{}*&^%$#'\"");var a=e.split("");return a[Math.floor(Math.random()*a.length)]}$.fn.shuffleLetters=function(e){var a=$.extend({step:3,fps:30,text:"",callback:function(){}},e);return this.each(function(){var e=$(this),r="";if(e.data("animated"))return!0;e.data("animated",!0),r=a.text?a.text.split(""):e.text().split("");for(var n=[],i=[],s=0;s<r.length;s++){var o=r[s];" "!=o?(/[a-z]/.test(o)?n[s]="lowerLetter":/[A-Z]/.test(o)?n[s]="upperLetter":n[s]="symbol",i.push(s)):n[s]="space"}e.html(""),function s(o){var l,f=i.length,u=r.slice(0);if(o>f)return e.data("animated",!1),void a.callback(e);for(l=Math.max(o,0);l<f;l++)l<o+a.step?u[i[l]]=t(n[i[l]]):u[i[l]]="";e.text(u.join("")),setTimeout(function(){s(o+1)},1e3/a.fps)}(-a.step)})}}(jQuery);