(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"/dDc":function(n,t,i){"use strict";var o={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},a={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},e=[],r=[];function s(){var n=document.createElement("div"),t=n.style;function i(n,i){for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];for(var e in a)if(e in t){i.push(a[e]);break}}}"AnimationEvent"in window||(delete o.animationstart.animation,delete a.animationend.animation),"TransitionEvent"in window||(delete o.transitionstart.transition,delete a.transitionend.transition),i(o,e),i(a,r)}function m(n,t,i){n.addEventListener(t,i,!1)}function d(n,t,i){n.removeEventListener(t,i,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&s();var f={startEvents:e,addStartEventListener:function(n,t){0!==e.length?e.forEach((function(i){m(n,i,t)})):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==e.length&&e.forEach((function(i){d(n,i,t)}))},endEvents:r,addEndEventListener:function(n,t){0!==r.length?r.forEach((function(i){m(n,i,t)})):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==r.length&&r.forEach((function(i){d(n,i,t)}))}};t["a"]=f}}]);