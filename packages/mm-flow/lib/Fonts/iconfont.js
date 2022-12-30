'use strict';

/* eslint-disable  */
(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-all-screen" viewBox="0 0 1024 1024"><path d="M896 665.6a38.4 38.4 0 0 1 37.888 32.192L934.4 704v230.4H704a38.4 38.4 0 0 1-6.208-76.288L704 857.6h153.6V704a38.4 38.4 0 0 1 32.192-37.888L896 665.6z m-768 0a38.4 38.4 0 0 1 37.888 32.192L166.4 704v153.6H320a38.4 38.4 0 0 1 37.888 32.192L358.4 896a38.4 38.4 0 0 1-32.192 37.888L320 934.4H89.6V704a38.4 38.4 0 0 1 38.4-38.4z m175.104-328.32a32 32 0 0 1 31.488 26.24l0.512 5.76v281.408a32 32 0 0 1-63.488 5.76l-0.512-5.76V369.216a32 32 0 0 1 32-32z m413.568 0a32 32 0 0 1 31.488 26.24l0.512 5.76v281.408a32 32 0 0 1-63.488 5.76l-0.512-5.76V369.216a32 32 0 0 1 32-32zM517.888 541.504a35.456 35.456 0 1 1 0 70.848 35.456 35.456 0 0 1 0-70.848z m0-118.208a35.456 35.456 0 1 1 0 70.912 35.456 35.456 0 0 1 0-70.912zM934.4 89.6V320a38.4 38.4 0 0 1-76.288 6.208L857.6 320V166.4H704a38.4 38.4 0 0 1-37.888-32.192L665.6 128a38.4 38.4 0 0 1 32.192-37.888L704 89.6h230.4zM320 89.6a38.4 38.4 0 0 1 6.208 76.288L320 166.4H166.4V320a38.4 38.4 0 0 1-32.192 37.888L128 358.4a38.4 38.4 0 0 1-37.888-32.192L89.6 320V89.6H320z"  ></path></symbol><symbol id="icon-reset" viewBox="0 0 1024 1024"><path d="M896 665.6a38.4 38.4 0 0 1 37.888 32.192L934.4 704v230.4H704a38.4 38.4 0 0 1-6.208-76.288L704 857.6h153.6V704a38.4 38.4 0 0 1 32.192-37.888L896 665.6z m-768 0a38.4 38.4 0 0 1 37.888 32.192L166.4 704v153.6H320a38.4 38.4 0 0 1 37.888 32.192L358.4 896a38.4 38.4 0 0 1-32.192 37.888L320 934.4H89.6V704a38.4 38.4 0 0 1 38.4-38.4z m548.48-330.88c7.04 0 12.8 5.76 12.8 12.8v328.96a12.8 12.8 0 0 1-12.8 12.8H347.52a12.8 12.8 0 0 1-12.8-12.8V347.52c0-7.04 5.76-12.8 12.8-12.8h328.96z m-64.064 76.8H411.52v200.896h200.896V411.52zM934.4 89.6V320a38.4 38.4 0 0 1-76.288 6.208L857.6 320V166.4H704a38.4 38.4 0 0 1-37.888-32.192L665.6 128a38.4 38.4 0 0 1 32.192-37.888L704 89.6h230.4zM320 89.6a38.4 38.4 0 0 1 6.208 76.288L320 166.4H166.4V320a38.4 38.4 0 0 1-32.192 37.888L128 358.4a38.4 38.4 0 0 1-37.888-32.192L89.6 320V89.6H320z"  ></path></symbol></svg>'),
  (function (n) {
    var e = (e = document.getElementsByTagName('script'))[e.length - 1],
      t = e.getAttribute('data-injectcss'),
      e = e.getAttribute('data-disable-injectsvg');

    if (!e) {
      var a,
        _o,
        i,
        c,
        d,
        s = function s(e, t) {
          t.parentNode.insertBefore(e, t);
        };

      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;

        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (e) {
          console && console.log(e);
        }
      }

      (a = function a() {
        var e,
          t = document.createElement('div');
        (t.innerHTML = n._iconfont_svg_string_),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(a, 0)
            : ((_o = function o() {
                document.removeEventListener('DOMContentLoaded', _o, !1), a();
              }),
              document.addEventListener('DOMContentLoaded', _o, !1))
          : document.attachEvent &&
            ((i = a),
            (c = n.document),
            (d = !1),
            r(),
            (c.onreadystatechange = function () {
              'complete' == c.readyState && ((c.onreadystatechange = null), l());
            }));
    }

    function l() {
      d || ((d = !0), i());
    }

    function r() {
      try {
        c.documentElement.doScroll('left');
      } catch (e) {
        return void setTimeout(r, 50);
      }

      l();
    }
  })(window);
