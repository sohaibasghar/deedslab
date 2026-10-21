// Hairline: the line-drawing engine behind Deeds Lab's figures. Ported verbatim from the original build.
const hairline = (() => {
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    n = Object.getOwnPropertyNames,
    r = Object.prototype.hasOwnProperty,
    i = (t, n) => {
      for (var r in n) e(t, r, { get: n[r], enumerable: !0 });
    },
    a = (i, a, o, s) => {
      if ((a && typeof a == `object`) || typeof a == `function`)
        for (let c of n(a))
          !r.call(i, c) &&
            c !== o &&
            e(i, c, {
              get: () => a[c],
              enumerable: !(s = t(a, c)) || s.enumerable,
            });
      return i;
    },
    o = (t) => a(e({}, `__esModule`, { value: !0 }), t),
    s = {};
  i(s, {
    Cam: () => h,
    EASE_LIFT: () => I,
    LAP: () => ve,
    bezier: () => F,
    circ: () => b,
    clamp: () => c,
    css: () => Pe,
    disposer: () => De,
    extremes: () => D,
    facing: () => C,
    fade: () => ae,
    fillet: () => O,
    fit: () => v,
    flatDot: () => ne,
    ghost: () => k,
    hull: () => x,
    inject: () => Ie,
    lerp: () => l,
    mk: () => H,
    open: () => m,
    place: () => re,
    pointer: () => _e,
    poly: () => f,
    prism: () => T,
    proj: () => g,
    put: () => te,
    r2: () => d,
    rad: () => u,
    reducedMotion: () => M,
    reflect: () => U,
    register: () => me,
    ringAt: () => S,
    rings: () => E,
    rrect: () => y,
    run: () => w,
    seg: () => p,
    setReducedMotion: () => j,
    solid: () => ee,
    spring: () => N,
    stepS: () => P,
    tdone: () => B,
    tour: () => Ee,
    tset: () => z,
    tval: () => R,
    tween: () => L,
    unproj: () => _,
  });
  var c = (e, t, n) => Math.max(t, Math.min(n, e)),
    l = (e, t, n) => e + (t - e) * n,
    u = (e) => (e * Math.PI) / 180,
    d = (e) => Math.round(e * 100) / 100,
    f = (e) => `M` + e.map((e) => d(e[0]) + ` ` + d(e[1])).join(`L`) + `Z`,
    p = (e, t) => `M${d(e[0])} ${d(e[1])}L${d(t[0])} ${d(t[1])}`,
    m = (e) =>
      e.length < 2 ? `` : `M` + e.map((e) => d(e[0]) + ` ` + d(e[1])).join(`L`),
    h = (e, t, n) => ({ az: u(e), k: t, S: n, ox: 0, oy: 0 });
  function g(e) {
    let t = Math.cos(e.az),
      n = Math.sin(e.az),
      r = Math.sqrt(1 - e.k * e.k);
    return (i, a, o) => {
      let s = i * t - a * n,
        c = i * n + a * t;
      return [e.ox + e.S * s, e.oy + e.S * (c * e.k - o * r)];
    };
  }
  function _(e, t, n, r) {
    let i = Math.cos(e.az),
      a = Math.sin(e.az),
      o = Math.sqrt(1 - e.k * e.k),
      s = (t - e.ox) / e.S,
      c = ((n - e.oy) / e.S + r * o) / e.k;
    return [s * i + c * a, -s * a + c * i];
  }
  function v(e, t, n, r) {
    ((e.ox = 0), (e.oy = 0));
    let i = g(e),
      a = 1e9,
      o = -1e9,
      s = 1e9,
      c = -1e9;
    for (let e of t) {
      let t = i(e[0], e[1], e[2]);
      ((a = Math.min(a, t[0])),
        (o = Math.max(o, t[0])),
        (s = Math.min(s, t[1])),
        (c = Math.max(c, t[1])));
    }
    ((e.ox = n - (a + o) / 2), (e.oy = r - (s + c) / 2));
  }
  function y(e, t, n, r, i, a = 4) {
    i = Math.max(0, Math.min(i, (n - e) / 2, (r - t) / 2));
    let o = [];
    for (let [s, c, l] of [
      [n - i, r - i, 0],
      [e + i, r - i, 90],
      [e + i, t + i, 180],
      [n - i, t + i, 270],
    ])
      for (let e = 0; e <= a; e++) {
        let t = u(l + (90 * e) / a),
          n = Math.cos(t),
          r = Math.sin(t);
        o.push({ u: s + i * n, v: c + i * r, nu: n, nv: r });
      }
    return o;
  }
  function b(e, t = 96) {
    let n = [];
    for (let r = 0; r < t; r++) {
      let i = (r / t) * Math.PI * 2,
        a = Math.cos(i),
        o = Math.sin(i);
      n.push({ u: e * a, v: e * o, nu: a, nv: o });
    }
    return n;
  }
  function x(e) {
    let t = e.slice().sort((e, t) => e[0] - t[0] || e[1] - t[1]),
      n = (e, t, n) =>
        (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]),
      r = [],
      i = [];
    for (let e of t) {
      for (; r.length > 1 && n(r[r.length - 2], r[r.length - 1], e) <= 0;)
        r.pop();
      r.push(e);
    }
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e];
      for (; i.length > 1 && n(i[i.length - 2], i[i.length - 1], r) <= 0;)
        i.pop();
      i.push(r);
    }
    return (r.pop(), i.pop(), r.concat(i));
  }
  var S = (e, t, n) => t.map((t) => e(t.u, t.v, n)),
    C = (e) => {
      let t = Math.sin(e.az),
        n = Math.cos(e.az);
      return (e) => e.nu * t + e.nv * n >= -1e-6;
    };
  function w(e, t) {
    let n = e.length,
      r = -1;
    for (let i = 0; i < n; i++)
      if (t(e[i]) && !t(e[(i + n - 1) % n])) {
        r = i;
        break;
      }
    if (r < 0) return t(e[0]) ? e.slice() : [];
    let i = [];
    for (let a = 0; a < n && t(e[(r + a) % n]); a++) i.push(e[(r + a) % n]);
    return i;
  }
  function T(e, t, n, r, i, a) {
    return {
      sil: f(x(S(e, n, a).concat(S(e, n, i)))),
      crease: r ? m(S(e, w(r, t), a)) : ``,
    };
  }
  var E = (e, t, n, r, i, a) => [
    y(e, t, n, r, i),
    y(e + a, t + a, n - a, r - a, Math.max(0.3, i - a)),
  ];
  function D(e, t) {
    let n = t.map((t) => e(t.u, t.v, 0)),
      r = 0,
      i = 0,
      a = 0;
    return (
      n.forEach((e, t) => {
        (e[0] < n[r][0] && (r = t),
          e[0] > n[i][0] && (i = t),
          e[1] > n[a][1] && (a = t));
      }),
      [t[r], t[i], t[a]]
    );
  }
  function O(e, t, n = 4) {
    let r = e.length,
      i = [];
    for (let a = 0; a < r; a++) {
      let o = e[(a + r - 1) % r],
        s = e[a],
        c = e[(a + 1) % r],
        l = Math.hypot(o[0] - s[0], o[1] - s[1]),
        u = Math.hypot(c[0] - s[0], c[1] - s[1]),
        d = Math.min(t[a], l / 2, u / 2),
        f = [s[0] + ((o[0] - s[0]) / l) * d, s[1] + ((o[1] - s[1]) / l) * d],
        p = [s[0] + ((c[0] - s[0]) / u) * d, s[1] + ((c[1] - s[1]) / u) * d];
      for (let e = 0; e <= n; e++) {
        let t = e / n,
          r = 1 - t;
        i.push([
          r * r * f[0] + 2 * r * t * s[0] + t * t * p[0],
          r * r * f[1] + 2 * r * t * s[1] + t * t * p[1],
        ]);
      }
    }
    return i;
  }
  function k(e, t, n, r, i) {
    let a = w(n, t),
      o = S(e, a, r - i);
    return {
      d:
        m(o) +
        [a[0], a[a.length - 1]]
          .map((t) => p(e(t.u, t.v, r), e(t.u, t.v, r - i)))
          .join(``),
      y0: Math.min(...S(e, a, r).map((e) => e[1])),
      y1: Math.max(...o.map((e) => e[1])) + 2,
    };
  }
  var A = !1,
    j = (e) => {
      A = e;
    },
    M = () => A;
  function N(e, t = {}) {
    return {
      x: e,
      v: 0,
      t: e,
      k: t.k ?? 100,
      c: t.c ?? 18,
      m: t.m ?? 1,
      eps: t.eps ?? 0.01,
    };
  }
  function P(e, t) {
    if (A) return ((e.x = e.t), (e.v = 0), !1);
    let n = Math.max(1, Math.ceil(t * 240)),
      r = t / n;
    for (let t = 0; t < n; t++) {
      let t = (-e.k * (e.x - e.t) - e.c * e.v) / e.m;
      ((e.v += t * r), (e.x += e.v * r));
    }
    return Math.abs(e.x - e.t) < e.eps && Math.abs(e.v) < e.eps * 10
      ? ((e.x = e.t), (e.v = 0), !1)
      : !0;
  }
  function F(e, t, n, r) {
    let i = 3 * e,
      a = 3 * (n - e) - i,
      o = 1 - i - a,
      s = 3 * t,
      c = 3 * (r - t) - s,
      l = 1 - s - c,
      u = (e) => ((o * e + a) * e + i) * e,
      d = (e) => ((l * e + c) * e + s) * e,
      f = (e) => (3 * o * e + 2 * a) * e + i;
    return (e) => {
      if (e <= 0) return 0;
      if (e >= 1) return 1;
      let t = e;
      for (let n = 0; n < 8; n++) {
        let n = u(t) - e;
        if (Math.abs(n) < 1e-5) break;
        let r = f(t);
        if (Math.abs(r) < 1e-6) break;
        t -= n / r;
      }
      if (!(t >= 0 && t <= 1) || Math.abs(u(t) - e) > 1e-4) {
        let n = 0,
          r = 1;
        t = e;
        for (let i = 0; i < 24; i++)
          (u(t) < e ? (n = t) : (r = t), (t = (n + r) / 2));
      }
      return d(t);
    };
  }
  var I = F(0.32, 0.72, 0, 1),
    L = (e, t = 700) => ({ from: e, to: e, t0: -1e9, dur: t }),
    R = (e, t) => {
      let n = c((t - e.t0) / e.dur, 0, 1);
      return e.from + (e.to - e.from) * (A ? 1 : I(n));
    },
    z = (e, t, n, r) => {
      e.to !== t && ((e.from = R(e, n)), (e.to = t), (e.t0 = n + r));
    },
    B = (e, t) => A || t >= e.t0 + e.dur,
    V = `http://www.w3.org/2000/svg`;
  function H(e, t, n) {
    let r = document.createElementNS(V, e);
    if (t) for (let e in t) r.setAttribute(e, String(t[e]));
    return (n && n.appendChild(r), r);
  }
  function ee(e) {
    let t = H(`g`, {}, e);
    return {
      g: t,
      sil: H(`path`, { class: `sil` }, t),
      cr: H(`path`, { class: `nf lo` }, t),
    };
  }
  var te = (e, t) => {
      (e.sil.setAttribute(`d`, t.sil), e.cr.setAttribute(`d`, t.crease));
    },
    ne = (e, t, n, r) =>
      H(`ellipse`, { rx: d(n * t.S), ry: d(n * t.S * t.k), class: r }, e),
    re = (e, t) => {
      (e.setAttribute(`cx`, String(d(t[0]))),
        e.setAttribute(`cy`, String(d(t[1]))));
    },
    ie = 0;
  function ae(e, t, n, r = 0.7) {
    let i = `hl-fd` + ++ie,
      a = H(`defs`, {}, e),
      o = H(
        `linearGradient`,
        {
          id: i + `g`,
          gradientUnits: `userSpaceOnUse`,
          x1: 0,
          y1: d(t),
          x2: 0,
          y2: d(n),
        },
        a,
      );
    (H(`stop`, { offset: 0, "stop-color": `#fff`, "stop-opacity": r }, o),
      H(`stop`, { offset: 1, "stop-color": `#fff`, "stop-opacity": 0 }, o));
    let s = H(
      `mask`,
      {
        id: i,
        maskUnits: `userSpaceOnUse`,
        x: 0,
        y: 0,
        width: 400,
        height: 320,
      },
      a,
    );
    return (
      H(
        `rect`,
        { x: 0, y: 0, width: 400, height: 320, fill: `url(#${i}g)` },
        s,
      ),
      `url(#${i})`
    );
  }
  function U(e, t, n, r, i, a, o) {
    let s = k(n, r, i, a, o),
      c = H(`g`, { class: `ghost`, mask: ae(e, s.y0, s.y1) }, t);
    H(`path`, { d: s.d }, c);
  }
  var oe = [],
    W = new Map(),
    G = 0,
    se = 0,
    ce = null,
    le = null;
  function ue() {
    let e = performance.now(),
      t = Math.min(0.05, Math.max(0, (e - se) / 1e3));
    se = e;
    let n = !1;
    for (let r of oe.slice())
      if (r.vis && r.awake) {
        try {
          r.awake = !!r.tick(t, e);
        } catch (e) {
          ((r.awake = !1),
            setTimeout(() => {
              throw e;
            }));
        }
        n ||= r.awake;
      }
    G = n ? requestAnimationFrame(ue) : 0;
  }
  function de(e) {
    ((e.awake = !0),
      (G ||= ((se = performance.now()), requestAnimationFrame(ue))));
  }
  var K = () => {
    (j(!!le?.matches), oe.forEach(de));
  };
  function fe() {
    ce ||
      ((ce = new IntersectionObserver(
        (e) => {
          for (let t of e) {
            let e = W.get(t.target);
            if (e)
              for (let n of e) ((n.vis = t.isIntersecting), n.vis && de(n));
          }
        },
        { rootMargin: `80px` },
      )),
      (le = matchMedia(`(prefers-reduced-motion: reduce)`)),
      j(le.matches),
      le.addEventListener(`change`, K));
  }
  function pe() {
    (G && cancelAnimationFrame(G),
      (G = 0),
      ce?.disconnect(),
      (ce = null),
      le?.removeEventListener(`change`, K),
      (le = null));
  }
  function me(e, t) {
    fe();
    let n = { stage: e, tick: t, vis: !1, awake: !0 };
    oe.push(n);
    let r = W.get(e);
    if (r) {
      for (let e of r) n.vis = e.vis;
      (r.add(n), n.vis && de(n));
    } else (W.set(e, new Set([n])), ce.observe(e));
    t(0, performance.now());
    let i = !1;
    return {
      wake: () => {
        i || de(n);
      },
      unregister: () => {
        if (i) return;
        ((i = !0), (oe = oe.filter((e) => e !== n)));
        let t = W.get(e);
        (t && (t.delete(n), t.size || (W.delete(e), ce?.unobserve(e))),
          oe.length || pe());
      },
    };
  }
  var he = new WeakMap(),
    ge = new WeakMap();
  function _e(e, t) {
    he.set(e, t);
    let n = 0,
      r = (t) => {
        let n = e.getBoundingClientRect();
        return [
          ((t.clientX - n.left) / n.width) * 400,
          ((t.clientY - n.top) / n.height) * 320,
        ];
      },
      i = (i) => {
        (clearTimeout(n), ge.get(e)?.hold(), t.move(r(i), i));
      },
      a = (i) => {
        (clearTimeout(n),
          ge.get(e)?.hold(),
          i.pointerType !== `mouse` && e.releasePointerCapture?.(i.pointerId),
          t.down ? t.down(r(i), i) : t.move(r(i), i));
      },
      o = (r) => {
        (clearTimeout(n),
          (n = window.setTimeout(
            () => {
              (t.leave(r), ge.get(e)?.release());
            },
            r.pointerType === `mouse` ? 0 : 1400,
          )));
      };
    return (
      e.addEventListener(`pointermove`, i),
      e.addEventListener(`pointerdown`, a),
      e.addEventListener(`pointerleave`, o),
      () => {
        (clearTimeout(n),
          he.get(e) === t && he.delete(e),
          e.removeEventListener(`pointermove`, i),
          e.removeEventListener(`pointerdown`, a),
          e.removeEventListener(`pointerleave`, o));
      }
    );
  }
  var ve = [[128, 150], [200, 118], [272, 150], [200, 206], null],
    ye = 900,
    be = 1200,
    xe = 1800,
    q = 1200,
    Se = 450,
    Ce = { pointerType: `ghost` },
    we = 0;
  function Te([e, t]) {
    let n = e - 200,
      r = t - 160;
    if (!n && !r) return [200, 320];
    let i = Math.min(
      n ? (n > 0 ? 200 : -200) / n : 1 / 0,
      r ? (r > 0 ? 160 : -160) / r : 1 / 0,
    );
    return [200 + n * i, 160 + r * i];
  }
  function Ee(e, t, n) {
    let r = 0,
      i = q + Se * (we++ % 4),
      a = -1,
      o = null,
      s = [200, 320],
      c = !1,
      l = e.contains(e.ownerDocument.activeElement),
      u = !1,
      d = () => {
        ((o = null), (a = -1), he.get(e)?.leave(Ce));
      },
      f = (u) => {
        if (c || l || !t.length) return !1;
        if (M()) return (o && d(), !1);
        if (i > 0) return ((i -= u * 1e3), !0);
        let f = t[r];
        if (f === null)
          return (o && d(), n?.(r), (r = (r + 1) % t.length), (i = xe), !0);
        let p = he.get(e);
        if (!p) return !0;
        (a < 0 && ((s = o ?? Te(f)), (a = 0)), (a = Math.min(ye, a + u * 1e3)));
        let m = I(a / ye);
        return (
          (o = [s[0] + (f[0] - s[0]) * m, s[1] + (f[1] - s[1]) * m]),
          p.move(o, Ce),
          a < ye || (n?.(r), (r = (r + 1) % t.length), (a = -1), (i = be)),
          !0
        );
      },
      p = () => {
        ((o = null), (a = -1));
      },
      m = () => {
        c || l || ((r = 0), (a = -1), (i = q), v.wake());
      },
      h = {
        hold: () => {
          ((c = !0), p());
        },
        release: () => {
          c && ((c = !1), m());
        },
      },
      g = () => {
        ((l = !0), p());
      },
      _ = (t) => {
        l && !e.contains(t.relatedTarget) && ((l = !1), m());
      };
    (e.addEventListener(`focusin`, g),
      e.addEventListener(`focusout`, _),
      ge.set(e, h));
    let v = me(e, f);
    return {
      stop: () => {
        u ||
          ((u = !0),
          v.unregister(),
          e.removeEventListener(`focusin`, g),
          e.removeEventListener(`focusout`, _),
          ge.get(e) === h && ge.delete(e),
          o && d());
      },
    };
  }
  function De() {
    let e = [];
    return {
      add: (t) => {
        e.push(t);
      },
      on: (t, n, r, i) => {
        let a = r;
        (t.addEventListener(n, a, i),
          e.push(() => t.removeEventListener(n, a, i)));
      },
      dispose: () => {
        let t = e;
        e = [];
        for (let e = t.length - 1; e >= 0; e--) t[e]();
      },
    };
  }
  var Oe = {
      plate: `#ffffff`,
      hi: `#232327`,
      edge: `#a4a4ac`,
      mid: `#c3c3c9`,
      lo: `#e0e0e4`,
    },
    ke = {
      plate: `#08090a`,
      hi: `#d0d6e0`,
      edge: `#5b5d64`,
      mid: `#3e3e44`,
      lo: `#29292d`,
    },
    Ae = [`plate`, `hi`, `edge`, `mid`, `lo`],
    je = (e) =>
      Ae.map((t) => `--hl-${t}:var(--hairline-${t},${e[t]});`).join(``),
    Me = `cubic-bezier(0.5,0,0.1,1)`,
    Ne = `:where([data-hairline]>svg)`;
  function Pe(e) {
    let t = Object.fromEntries(
      Ae.map((e) => [e, `light-dark(${Oe[e]},${ke[e]})`]),
    );
    return [
      `:where([data-hairline]){display:block;position:relative;aspect-ratio:5/4;touch-action:pan-y;user-select:none;-webkit-user-select:none;--hl-sw:var(--hairline-stroke,0.9);${je(Oe)}}`,
      e ? `:where([data-hairline]){${je(t)}}` : ``,
      `:where(.dark,[data-theme="dark"]) :where([data-hairline]){${je(ke)}}`,
      `:where([data-hairline][data-hairline-theme="light"]){${je(Oe)}}`,
      `:where([data-hairline][data-hairline-theme="dark"]){${je(ke)}}`,
      `:where([data-hairline]:focus-visible){outline:1.5px solid var(--hl-hi);outline-offset:2px}`,
      `${Ne}{position:absolute;inset:0;width:100%;height:100%;display:block}`,
      `:where([data-hairline]>[data-hairline-live]){position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`,
      `${Ne} :where(path,polygon,ellipse,line){fill:var(--hl-plate);stroke:var(--hl-mid);stroke-width:var(--hl-sw);vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round;transition:stroke 260ms ${Me}}`,
      `${Ne} :where(.nf){fill:none}`,
      `${Ne} :where(.fo){stroke:none}`,
      `${Ne} :where(.sil){stroke:var(--hl-edge)}`,
      `${Ne} :where(.hi){stroke:var(--hl-hi)}`,
      `${Ne} :where(.lo){stroke:var(--hl-lo)}`,
      `${Ne} :where(.dash){stroke-dasharray:1 3}`,
      `${Ne} :where(.dot){stroke:none;fill:var(--hl-hi);transition:fill 260ms ${Me}}`,
      `${Ne} :where(.dot.m){fill:var(--hl-edge)}`,
      `${Ne} :where(.dot.off){fill:var(--hl-lo)}`,
      `${Ne} :where(.ghost path){fill:none;stroke:var(--hl-mid)}`,
    ].join(``);
  }
  var Fe = new WeakSet();
  function Ie(e) {
    if (Fe.has(e)) return;
    Fe.add(e);
    let t = e.nodeType === 9 ? e : e.ownerDocument,
      n = t.defaultView,
      r = Pe(!!n?.CSS?.supports?.(`color`, `light-dark(#000,#fff)`));
    if (n && `adoptedStyleSheets` in e)
      try {
        let t = new n.CSSStyleSheet();
        (t.replaceSync(r),
          (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]));
        return;
      } catch {}
    let i = t.createElement(`style`);
    (i.setAttribute(`data-hairline-style`, ``),
      (i.textContent = r),
      (e.nodeType === 9 ? (t.head ?? t.documentElement) : e).appendChild(i));
  }
  return o(s);
})();

export default hairline;
