/*
Warp Drive jQuery plugin
Version: 1.0.1

Written by Niklas Knaack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

!(function () {
  window.WarpDrive = function (t, e) {
    var o = {}
    if (
      ((o.width = 480),
      (o.height = 480),
      (o.autoResize = !1),
      (o.autoResizeMinWidth = null),
      (o.autoResizeMaxWidth = null),
      (o.autoResizeMinHeight = null),
      (o.autoResizeMaxHeight = null),
      (o.addMouseControls = !0),
      (o.addTouchControls = !0),
      (o.hideContextMenu = !0),
      (o.starCount = 6666),
      (o.starBgCount = 2222),
      (o.starBgColor = { r: 255, g: 255, b: 255 }),
      (o.starBgColorRangeMin = 10),
      (o.starBgColorRangeMax = 40),
      (o.starColor = { r: 255, g: 255, b: 255 }),
      (o.starColorRangeMin = 10),
      (o.starColorRangeMax = 100),
      (o.starfieldBackgroundColor = { r: 0, g: 0, b: 0 }),
      (o.starDirection = 1),
      (o.starSpeed = 20),
      (o.starSpeedMax = 200),
      (o.starSpeedAnimationDuration = 2),
      (o.starFov = 300),
      (o.starFovMin = 200),
      (o.starFovAnimationDuration = 2),
      (o.starRotationPermission = !0),
      (o.starRotationDirection = 1),
      (o.starRotationSpeed = 0),
      (o.starRotationSpeedMax = 1),
      (o.starRotationAnimationDuration = 2),
      (o.starWarpLineLength = 2),
      (o.starWarpTunnelDiameter = 100),
      (o.starFollowMouseSensitivity = 0.025),
      (o.starFollowMouseXAxis = !0),
      (o.starFollowMouseYAxis = !0),
      void 0 !== e)
    )
      for (var n in e) e.hasOwnProperty(n) && o.hasOwnProperty(n) && (o[n] = e[n])
    for (var n in o) o.hasOwnProperty(n) && n.indexOf('Duration') > -1 && (o[n] = 60 * o[n])
    if (
      ('string' == typeof o.starBgColor && o.starBgColor.indexOf('#') > -1
        ? (o.starBgColor = rt(o.starBgColor))
        : 'string' == typeof o.starBgColor && o.starBgColor.indexOf('rgb') > -1 && (o.starBgColor = it(o.starBgColor)),
      'string' == typeof o.starColor && o.starColor.indexOf('#') > -1
        ? (o.starColor = rt(o.starColor))
        : 'string' == typeof o.starColor && o.starColor.indexOf('rgb') > -1 && (o.starColor = it(o.starColor)),
      'string' == typeof o.starfieldBackgroundColor && o.starfieldBackgroundColor.indexOf('#') > -1
        ? (o.starfieldBackgroundColor = rt(o.starfieldBackgroundColor))
        : 'string' == typeof o.starfieldBackgroundColor &&
          o.starfieldBackgroundColor.indexOf('rgb') > -1 &&
          (o.starfieldBackgroundColor = it(o.starfieldBackgroundColor)),
      !t)
    )
      throw Error('\nNo div element found')
    var r,
      a,
      i,
      s,
      d,
      u,
      l,
      c,
      h,
      f,
      g,
      m,
      v,
      M = Math.PI / 180,
      x = (Math.PI, o.width),
      p = o.height,
      C = o.starCount,
      y = o.starBgCount,
      w = o.starBgColor,
      R = o.starBgColorRangeMin,
      z = o.starBgColorRangeMax,
      b = o.starColor,
      F = o.starColorRangeMin,
      L = o.starColorRangeMax,
      B = o.starfieldBackgroundColor,
      D = o.starDirection,
      A = o.starSpeed,
      E = A,
      W = o.starSpeedMax,
      k = o.starFovAnimationDuration,
      T = 0,
      I = o.starFov,
      O = o.starFovMin,
      S = I,
      H = o.starFovAnimationDuration,
      Q = H,
      q = 0,
      P = o.starRotationPermission,
      X = o.starRotationDirection,
      Y = o.starRotationSpeed,
      j = Y,
      _ = o.starRotationSpeedMax,
      N = o.starRotationAnimationDuration,
      $ = 0,
      G = o.starWarpLineLength,
      J = o.starWarpTunnelDiameter,
      K = o.starFollowMouseSensitivity,
      U = o.starFollowMouseXAxis,
      V = o.starFollowMouseYAxis,
      Z = 8e3,
      tt = 1 - O,
      et = Z,
      ot = !1
    function nt(t, e, o) {
      var n = t < 0 ? -1 * t : t,
        r = Math.round,
        a = parseInt,
        i = a(e.slice(1), 16),
        s = a((o || (t < 0 ? '#000000' : '#FFFFFF')).slice(1), 16),
        d = i >> 16,
        u = (i >> 8) & 255,
        l = 255 & i
      return (
        '#' +
        (
          16777216 +
          65536 * (r(((s >> 16) - d) * n) + d) +
          256 * (r((((s >> 8) & 255) - u) * n) + u) +
          (r(((255 & s) - l) * n) + l)
        )
          .toString(16)
          .slice(1)
      )
    }
    function rt(t) {
      t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, o, n) {
        return e + e + o + o + n + n
      })
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
      return e ? { r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) } : null
    }
    function at(t, e, o) {
      return '#' + (16777216 + (o | (e << 8) | (t << 16))).toString(16).slice(1)
    }
    function it(t) {
      var e = (t = t.replace(/\s+/g, '')).split('(')[1].split(')')[0].split(',')
      return { r: e[0], g: e[1], b: e[2] }
    }
    function st() {
      for (var t = 0, e = c.length; t < e; t += 4) (c[t] = B.r), (c[t + 1] = B.g), (c[t + 2] = B.b), (c[t + 3] = 0)
    }
    function dt(t, e, o, n, r, a) {
      var i = 4 * (t + e * x)
      ;(c[i] = c[i] + o), (c[i + 1] = c[i + 1] + n), (c[i + 2] = c[i + 2] + r), (c[i + 3] = a)
    }
    function ut(t, e, o, n, r, a, i, s) {
      for (
        var d = Math.abs(o - t), u = Math.abs(n - e), l = t < o ? 1 : -1, c = e < n ? 1 : -1, h = d - u, f = t, g = e;
        f > -1 && f < x && g > -1 && g < p && dt(f, g, r, a, i, s), f !== o || g !== n;

      ) {
        var m = 2 * h
        m > -d && ((h -= u), (f += l)), m < u && ((h += d), (g += c))
      }
    }
    function lt(t, e, o, n, r) {
      var a,
        i,
        s,
        d,
        u,
        l = at(n.r, n.g, n.b),
        c = at(r.r, r.g, r.b),
        h = [],
        f = []
      for (i = 0, s = 100; i <= s; i++) (a = i / 100), h.push(nt(a, l, c))
      for (i = 0, s = o - e; i <= s; i++) {
        var g = i + e
        f.push(h[g])
      }
      for (i = 0, s = f.length; i < s; i++) {
        for (h = [], d = 0, u = 100; d <= u; d++) (a = d / 100), h.push(rt(nt(a, l, f[i])))
        t.push(h)
      }
    }
    function ct(t, e) {
      var o = Math.random() * e - e / 2,
        n = Math.random() * e - e / 2
      if (t > 0) for (; Math.sqrt(o * o + n * n) < t; ) (o = Math.random() * e - e / 2), (n = Math.random() * e - e / 2)
      return { x: o, y: n }
    }
    function ht(t, e, o, n, r, a) {
      var i = {}
      return (i.x = t), (i.y = e), (i.z = o), (i.ox = n), (i.oy = r), (i.x2d = 0), (i.y2d = 0), i
    }
    function ft() {
      ;(v = requestAnimFrame(ft)),
        ot ||
          (function () {
            var t, e, o, n
            st(),
              P &&
                (g ? ($ += 1) > N && ($ = N) : ($ -= 1) < 0 && ($ = 0),
                (Y = Math.easeOutQuad($, j, _, N)),
                (q -= Y * X)),
              f
                ? ((T += 1) > k && (T = k),
                  (Q -= 1) < 0 && (Q = 0),
                  U && (h.x += (m.x - h.x) * K),
                  V && (h.y += (m.y - h.y) * K))
                : ((T -= 1) < 0 && (T = 0),
                  (Q += 1) > H && (Q = H),
                  U && (h.x += (d.width / 2 - h.x) * K),
                  V && (h.y += (d.height / 2 - h.y) * K)),
              (A = Math.easeOutQuad(T, 0, W - E, k) + E),
              (I = Math.easeInQuad(Q, 0, S - O, H) + O),
              (tt = 1 - I)
            var i = A * (A / (W / G))
            for (t = 0, e = a.length; t < e; t++)
              (o = a[t]),
                (n = I / (I + o.z)),
                (o.x2d = o.x * n + h.x),
                (o.y2d = o.y * n + h.y),
                o.x2d > -1 &&
                  o.x2d < x &&
                  o.y2d > -1 &&
                  o.y2d < p &&
                  dt(0 | o.x2d, 0 | o.y2d, o.color.r, o.color.g, o.color.b, 255)
            for (t = 0, e = r.length; t < e; t++) {
              if (
                (((o = r[t]).distanceTotal = Math.round(Z + I)),
                D >= 0
                  ? ((o.z -= A), (o.distance += A), o.z < tt && ((o.z = et), (o.distance = 0)))
                  : ((o.z += A), (o.distance -= A), o.z > et && ((o.z = tt), (o.distance = o.distanceTotal))),
                (o.color = o.colorLookupTable[Math.floor((o.distance / o.distanceTotal) * 100)]),
                (n = I / (I + o.z)),
                (o.x2d = o.x * n + h.x),
                (o.y2d = o.y * n + h.y),
                A === E)
              )
                o.x2d > -1 &&
                  o.x2d < x &&
                  o.y2d > -1 &&
                  o.y2d < p &&
                  dt(0 | o.x2d, 0 | o.y2d, o.color.r, o.color.g, o.color.b, 255)
              else {
                var s = o.z + i
                n = I / (I + s)
                var c = o.x * n + h.x,
                  v = o.y * n + h.y
                c > -1 &&
                  c < x &&
                  v > -1 &&
                  v < p &&
                  ut(0 | o.x2d, 0 | o.y2d, 0 | c, 0 | v, o.color.r, o.color.g, o.color.b, 255)
              }
              if (Y !== j) {
                var C = M * q,
                  y = Math.cos(C),
                  w = Math.sin(C)
                ;(o.x = y * o.ox + w * o.oy), (o.y = y * o.oy - w * o.ox)
              }
            }
            u.putImageData(l, 0, 0)
          })()
    }
    function gt(t) {
      mt()
    }
    function mt() {
      ;(x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
        (p = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
        o.autoResizeMinWidth && x < o.autoResizeMinWidth
          ? (x = o.autoResizeMinWidth)
          : o.autoResizeMaxWidth && x > o.autoResizeMaxWidth && (x = o.autoResizeMaxWidth),
        o.autoResizeMinHeight && p < o.autoResizeMinHeight
          ? (p = o.autoResizeMinHeight)
          : o.autoResizeMaxHeight && p > o.autoResizeMaxHeight && (p = o.autoResizeMaxHeight),
        d.setAttribute('width', x),
        d.setAttribute('height', p),
        (h = { x: d.width / 2, y: d.height / 2 }),
        (l = u.getImageData(0, 0, x, p)),
        (c = l.data)
    }
    function vt(t) {
      var e, o
      ;(e = t), (o = d.getBoundingClientRect()), (m = { x: e.clientX - o.left, y: e.clientY - o.top })
    }
    function Mt(t) {
      f = !0
    }
    function xt(t) {
      ;(f = !1), (g = !1)
    }
    function pt(t) {
      g = !0
    }
    function Ct(t) {
      g = !1
    }
    function yt(t) {
      t.preventDefault(), (g = !0), (f = !0)
    }
    function wt(t) {
      t.preventDefault(), (g = !1), (f = !1)
    }
    function Rt(t) {
      var e, o
      t.preventDefault(),
        (e = t),
        (o = d.getBoundingClientRect()),
        (m = { x: e.touches[0].clientX - o.left, y: e.touches[0].clientY - o.top })
    }
    function zt(t) {
      ;(g = !1), (f = !1)
    }
    ;(Math.easeInQuad = function (t, e, o, n) {
      return (o * t * t) / (n * n) + e
    }),
      (Math.easeOutQuad = function (t, e, o, n) {
        return (-o * t * t) / (n * n) + (2 * o * t) / n + e
      }),
      (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (t) {
          window.setTimeout(t, 1e3 / 60)
        }),
      (window.cancelAnimFrame =
        window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame),
      (this.pause = function () {
        ot = !0
      }),
      (this.unpause = function () {
        ot = !1
      }),
      (this.destroy = function () {
        window.cancelAnimFrame(v),
          o.autoResize && window.removeEventListener('resize', gt),
          o.addMouseControls &&
            (d.removeEventListener('mousemove', vt),
            d.removeEventListener('mousedown', pt),
            d.removeEventListener('mouseup', Ct),
            d.removeEventListener('mouseenter', Mt),
            d.removeEventListener('mouseleave', xt)),
          o.addTouchControls &&
            (d.removeEventListener('touchstart', yt),
            d.removeEventListener('touchend', wt),
            d.removeEventListener('touchmove', Rt),
            d.removeEventListener('touchcancel', zt)),
          st(),
          t.hasChildNodes() && t.removeChild(d),
          (i = []),
          (s = []),
          (r = []),
          (a = [])
      }),
      ((d = document.createElement('canvas')).style.backgroundColor = at(B.r, B.g, B.b)),
      d.setAttribute('width', x),
      d.setAttribute('height', p),
      o.addMouseControls &&
        (d.addEventListener('mousemove', vt, !1),
        d.addEventListener('mousedown', pt, !1),
        d.addEventListener('mouseup', Ct, !1),
        d.addEventListener('mouseenter', Mt, !1),
        d.addEventListener('mouseleave', xt, !1)),
      o.addTouchControls &&
        (d.addEventListener('touchstart', yt, !1),
        d.addEventListener('touchend', wt, !1),
        d.addEventListener('touchmove', Rt, !1),
        d.addEventListener('touchcancel', zt, !1)),
      o.hideContextMenu &&
        (d.oncontextmenu = function (t) {
          t.preventDefault()
        }),
      t.appendChild(d),
      (u = d.getContext('2d')),
      (l = u.getImageData(0, 0, x, p)),
      (c = l.data),
      (h = { x: d.width / 2, y: d.height / 2 }),
      (f = !1),
      (g = !1),
      (m = { x: h.x, y: h.y }),
      (s = []),
      (r = []),
      (a = []),
      lt((i = []), F, L, B, b),
      lt(s, R, z, B, w),
      (function () {
        var t, e, o, n, d, u
        for (t = 0; t < y; t++)
          (u = ct(0, 2e4)),
            (e = u.x),
            (o = u.y),
            (n = Math.round(Math.random() * Z)),
            ((d = ht(e, o, n, e, o)).colorIndex = Math.floor(Math.random() * s.length)),
            (d.colorLookupTable = s[d.colorIndex]),
            (d.color = d.colorLookupTable[Math.floor(100 * Math.random())]),
            a.push(d)
        for (t = 0; t < C; t++)
          (u = ct(J, 1e4)),
            (e = u.x),
            (o = u.y),
            (n = Math.round(Math.random() * Z)),
            ((d = ht(e, o, n, e, o)).distance = Z - n),
            (d.distanceTotal = Math.round(Z + I)),
            (d.colorIndex = Math.floor(Math.random() * i.length)),
            (d.colorLookupTable = i[d.colorIndex]),
            (d.color = d.colorLookupTable[Math.floor((d.distance / d.distanceTotal) * 100)]),
            r.push(d)
      })(),
      ft(),
      o.autoResize && (window.addEventListener('resize', gt), mt())
  }
})(),
  'undefined' != typeof jQuery &&
    (function (t) {
      t.fn.warpDrive = function (e) {
        var o = arguments
        return this.each(function () {
          if (t.data(this, 'plugin_WarpDrive')) {
            var n = t.data(this, 'plugin_WarpDrive')
            n[e]
              ? n[e].apply(this, Array.prototype.slice.call(o, 1))
              : t.error('Method ' + e + ' does not exist on jQuery.warpDrive')
          } else t.data(this, 'plugin_WarpDrive', new WarpDrive(this, e))
        })
      }
    })(jQuery)
