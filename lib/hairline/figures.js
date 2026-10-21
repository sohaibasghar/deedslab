// Figure definitions drawn with the Hairline engine. Ported verbatim from the original build.
import x from "./engine";

const figures = {
  cut: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        lerp: i,
        prism: a,
        proj: o,
        rad: s,
        rings: c,
        seg: l,
        tdone: u,
        tset: d,
        tval: f,
        tween: p,
        disposer: m,
        mk: h,
        pointer: g,
        put: _,
        register: v,
        solid: y,
      } = x,
      b = 1.6,
      S = 5.2,
      C = Array.from({ length: 10 }, (e, t) => [
        1.2 * Math.sin(t * 2.1),
        1.1 * Math.cos(t * 1.7),
        1.4 * Math.sin(t * 1.3 + 0.5),
      ]),
      w = Array.from({ length: 10 }, (e, t) => [
        88 + 1.6 * Math.cos(t * 1.1),
        -3 + 1.2 * Math.sin(t * 2.3),
        -8 + 2 * Math.sin(t * 0.9),
      ]);
    function T(e, t, n, r) {
      let i = Math.cos(s(r)),
        a = Math.sin(s(r));
      return e.map((e) => {
        let r = e.u - 32,
          o = e.v - 21;
        return {
          u: t + 32 + r * i - o * a,
          v: n + 21 + r * a + o * i,
          nu: e.nu * i - e.nv * a,
          nv: e.nu * a + e.nv * i,
        };
      });
    }
    function E({ stage: s, svg: x, read: E }, D) {
      let O = m(),
        k = D,
        A = e(45, 0.5, 1.72);
      r(
        A,
        [
          [-12, -12, -4],
          [164, 54, -4],
          [164, -12, -4],
          [-12, 54, -4],
          [0, 0, 64],
          [152, 42, 64],
        ],
        200,
        166,
      );
      let j = o(A),
        M = n(A),
        N = h(`g`, {}, x),
        [P, F] = c(-12, -12, 164, 54, 9, 2);
      _(y(N), a(j, M, P, F, -4, 0));
      let [I, L] = c(0, 0, 64, 42, 3.2, 1),
        R = [
          [
            [6, 7.5],
            [28, 7.5],
          ],
          ...[15, 21.5, 28, 34.5].map((e) => [
            [6, e],
            [58, e],
          ]),
        ],
        z = [];
      for (let e = 0; e < 10; e++) {
        let t = h(`g`, {}, N),
          n = y(t),
          r = h(`path`, { class: `nf lo` }, t),
          i = h(`path`, { class: `nf` }, t),
          a = e >= 7;
        z.push({
          grp: t,
          el: n,
          rules: r,
          head: i,
          m: p(+!!a),
          z: p(a ? (9 - e) * S : e * S),
        });
      }
      function B(e, n, r) {
        let o = f(e.m, r),
          s = f(e.z, r) + 12 * Math.sin(Math.PI * t(o, 0, 1)),
          c = C[n],
          u = w[n],
          d = i(c[0], u[0], o),
          p = i(c[1], u[1], o),
          m = i(c[2], u[2], o);
        _(e.el, a(j, M, T(I, d, p, m), T(L, d, p, m), s, s + b));
        let h = (e) => {
          let [t] = T([{ u: e[0], v: e[1], nu: 0, nv: 0 }], d, p, m);
          return j(t.u, t.v, s + b);
        };
        (e.head.setAttribute(`d`, l(h(R[0][0]), h(R[0][1]))),
          e.rules.setAttribute(
            `d`,
            R.slice(1)
              .map(([e, t]) => l(h(e), h(t)))
              .join(``),
          ));
      }
      let V = ``;
      function H(e) {
        let t = [],
          n = [],
          r = [];
        (z.forEach((i, a) => {
          !u(i.m, e) || !u(i.z, e)
            ? r.push(a)
            : f(i.m, e) < 0.5
              ? t.push(a)
              : n.push(a);
        }),
          n.sort((e, t) => t - e));
        let i = [...t, ...n, ...r],
          a = i.join(`,`);
        if (a !== V) {
          V = a;
          for (let e of i) N.appendChild(z[e].grp);
        }
      }
      let ee = v(s, (e, t) => {
        let n = !1;
        return (
          H(t),
          z.forEach((e, r) => {
            (B(e, r, t), (!u(e.m, t) || !u(e.z, t)) && (n = !0));
          }),
          n
        );
      });
      O.add(ee.unregister);
      let te = z.map((e, t) => j(32, 21, t * S + b)[1]),
        ne = (e) => t(te.filter((t) => t >= e).length, 1, 10),
        re = 7,
        ie = !1;
      function ae(e, t) {
        let n = performance.now();
        if (e !== re) {
          let t = e < re ? re - 1 : re;
          (z.forEach((r, i) => {
            let a = i >= e,
              o = Math.abs(i - t) * k;
            (d(r.m, +!!a, n, o), d(r.z, a ? (9 - i) * S : i * S, n, o));
          }),
            (re = e));
        }
        ((ie = t),
          z.forEach((e, t) => e.el.sil.classList.toggle(`hi`, t === re - 1)),
          (E.textContent = ie ? `v1 · ${re}` : `rest`),
          ee.wake());
      }
      return (
        ae(7, !1),
        O.add(g(s, { move: (e) => ae(ne(e[1]), !0), leave: () => ae(7, !1) })),
        O.add(() => x.replaceChildren()),
        {
          set: (e) => {
            k = e;
          },
          destroy: O.dispose,
        }
      );
    }
    return {
      name: `cut`,
      means: `A pile of feature cards: the pointer sets where version one ends, and the cards above it are dealt onto a pile for later.`,
      rules: [1, 2, 5, 6],
      range: [0, 45, 90],
      tour: [[146, 100], [146, 176], [146, 143], null],
      mount: E,
    };
  })(),
  phone: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        lerp: i,
        poly: a,
        prism: o,
        proj: s,
        rad: c,
        ringAt: l,
        rings: u,
        rrect: d,
        unproj: f,
        tdone: p,
        tset: m,
        tval: h,
        tween: g,
        disposer: _,
        mk: v,
        pointer: y,
        put: b,
        register: S,
        solid: C,
      } = x,
      w = 3.5,
      T = 0.7,
      E = [
        [
          [7.5, 14, 38.5, 42, 2],
          [7.5, 48, 30.5, 51, 1.2],
          [7.5, 55, 24.5, 58, 1.2],
          [9.5, 74, 36.5, 81, 3.5],
        ],
        [
          [7.5, 14, 13.5, 20, 2.5],
          [16.5, 15.5, 36.5, 18.5, 1.2],
          [7.5, 26, 13.5, 32, 2.5],
          [16.5, 27.5, 32.5, 30.5, 1.2],
          [7.5, 38, 13.5, 44, 2.5],
          [16.5, 39.5, 34.5, 42.5, 1.2],
          [7.5, 50, 13.5, 56, 2.5],
          [16.5, 51.5, 28.5, 54.5, 1.2],
          [9.5, 74, 36.5, 81, 3.5],
        ],
        [
          [7.5, 14, 21.5, 33, 2],
          [24.5, 14, 38.5, 33, 2],
          [7.5, 36, 21.5, 55, 2],
          [24.5, 36, 38.5, 55, 2],
          [9.5, 74, 36.5, 81, 3.5],
        ],
      ];
    function D(e, t, n, r) {
      let i = Math.cos(c(r)),
        a = Math.sin(c(r));
      return e.map((e) => {
        let r = e.u - 23,
          o = e.v - 46;
        return {
          u: 23 + t + r * i - o * a,
          v: 46 + n + r * a + o * i,
          nu: e.nu * i - e.nv * a,
          nv: e.nu * a + e.nv * i,
        };
      });
    }
    function O({ stage: c, svg: x, read: O }, k) {
      let A = _(),
        j = k,
        M = e(45, 0.5, 2.12);
      r(
        M,
        [
          [0, 0, 0],
          [136, -12, 0],
          [136, 92, 0],
          [0, 92, 0],
          [0, 0, 15],
          [46, 92, 15],
        ],
        200,
        166,
      );
      let N = s(M),
        P = n(M),
        F = (e) => [46 + j + e * 9, -6 * e - 3, 4 - 5 * e],
        I = v(`g`, {}, x),
        [L, R] = u(0, 0, 46, 92, 8, 1.2);
      (b(C(I), o(N, P, L, R, 0, 5)),
        v(
          `path`,
          { d: a(l(N, d(2.9, 2.9, 43.1, 89.1, 5.5, 5), 5)), class: `nf lo` },
          I,
        ));
      let z = v(
          `path`,
          { d: a(l(N, d(18.5, 5.7, 27.5, 8.3, 1.3, 4), 7.3)), class: `nf` },
          I,
        ),
        [B, V] = u(w, w, 42.5, 88.5, 5, 0.8),
        H = E.map((e, t) => {
          let n = v(`g`, {}, I);
          return {
            grp: n,
            el: C(n),
            blocks: e,
            parts: e.map((t, r) =>
              v(`path`, { class: r === e.length - 1 ? `nf` : `nf lo` }, n),
            ),
            m: g(+(t < 1)),
          };
        });
      function ee(e, n, r) {
        let s = h(e.m, r),
          [c, u, f] = F(n),
          p = i(0, c, s),
          m = i(0, u, s),
          g = i(0, f, s),
          _ = i(5 + (2 - n) * T, n * T, s) + 9 * Math.sin(Math.PI * t(s, 0, 1));
        (b(e.el, o(N, P, D(B, p, m, g), D(V, p, m, g), _, _ + T * 0.6)),
          e.blocks.forEach(([t, n, r, i, o], s) =>
            e.parts[s].setAttribute(
              `d`,
              a(l(N, D(d(t, n, r, i, o, 3), p, m, g), _ + T * 0.6)),
            ),
          ));
      }
      let te = ``;
      function ne(e) {
        let t = [],
          n = [],
          r = [];
        (H.forEach((i, a) =>
          (p(i.m, e) ? (h(i.m, e) < 0.5 ? t : n) : r).push(a),
        ),
          t.sort((e, t) => t - e));
        let i = [t, n, r].map((e) => e.join(`.`)).join(`|`);
        if (i !== te) {
          te = i;
          for (let e of t) I.appendChild(H[e].grp);
          I.appendChild(z);
          for (let e of [...n, ...r]) I.appendChild(H[e].grp);
        }
      }
      let re = S(c, (e, t) => {
        let n = !1;
        return (
          ne(t),
          H.forEach((e, r) => {
            (ee(e, r, t), p(e.m, t) || (n = !0));
          }),
          n
        );
      });
      A.add(re.unregister);
      let ie = (e) =>
          1 + t(Math.floor((3 * f(M, e[0], e[1], 5)[1]) / 92), 0, 2),
        ae = 2;
      function U(e, t) {
        let n = performance.now();
        (e !== ae &&
          (H.forEach((t, r) =>
            m(t.m, +(r < e - 1), n, Math.abs(r - (e - 1)) * 45),
          ),
          (ae = e)),
          H.forEach((e, t) =>
            e.parts[e.parts.length - 1].classList.toggle(`hi`, t === ae - 1),
          ),
          (O.textContent = t ? `screen ${ae}` : `rest`),
          re.wake());
      }
      return (
        U(2, !1),
        A.add(y(c, { move: (e) => U(ie(e), !0), leave: () => U(2, !1) })),
        A.add(() => x.replaceChildren()),
        {
          set: (e) => {
            ((j = e), re.wake());
          },
          destroy: A.dispose,
        }
      );
    }
    return {
      name: `phone`,
      means: `A prototype's screens in a phone: moving down it taps through them, and each screen it leaves lands on the table beside it.`,
      rules: [1, 2, 5, 10],
      range: [10, 22, 34],
      tour: [[200, 100], [200, 200], [200, 150], null],
      mount: O,
    };
  })(),
  easel: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fillet: r,
        fit: i,
        hull: a,
        open: o,
        poly: s,
        prism: c,
        proj: l,
        rad: u,
        ringAt: d,
        rings: f,
        rrect: p,
        tdone: m,
        tset: h,
        tval: g,
        tween: _,
        disposer: v,
        mk: y,
        pointer: b,
        put: S,
        register: C,
        solid: w,
      } = x,
      T = 0.3,
      E = 1.8,
      D = Math.sin(u(12)),
      O = Math.cos(u(12)),
      k = 62 * D,
      A = 80 - 62 * O,
      j = [0.612, 0.612, 0.5],
      M = (e) => 12 + 0.9 * (4 - e),
      N = (e) => 347 - 0.7 * e,
      P = [
        [
          [
            [8, 22],
            [18, 30],
            [27, 26],
            [37, 39],
            [46, 45],
          ],
        ],
        [
          [
            [20, 16],
            [34, 16],
            [34, 46],
            [20, 46],
            [20, 16],
          ],
          [
            [24, 41],
            [30, 41],
          ],
        ],
        [10, 20, 30, 40].map((e, t) => [
          [e, 46],
          [e, 38 - t * 6],
          [e + 6, 38 - t * 6],
          [e + 6, 46],
        ]),
        [
          [
            [8, 32],
            [46, 32],
          ],
          ...[12, 24, 36, 48].map((e) => [
            [e - 2, 30],
            [e + 2, 30],
            [e + 2, 34],
            [e - 2, 34],
            [e - 2, 30],
          ]),
        ],
        [
          [
            [14, 18],
            [40, 18],
            [40, 44],
            [14, 44],
            [14, 18],
          ],
          [
            [20, 31],
            [34, 31],
          ],
        ],
      ];
    function F({ stage: x, svg: F, read: I }, L) {
      let R = v(),
        z = L,
        B = e(45, 0.5, 1.9);
      i(
        B,
        [
          [-8, k + 20, 0],
          [68, k + 20, 0],
          [30, -42, 0],
          [0, 0, 134],
          [60, 54, 80],
          [68, -4, 84],
        ],
        200,
        166,
      );
      let V = l(B),
        H = n(B),
        ee = (e, t, n, r) => {
          let i = 0.5 * (4 - e),
            a = Math.sin(u(t)),
            o = Math.cos(u(t));
          return V(3 + n, 1.5 + r * a + i * o, 78 - r * o + i * a);
        },
        te = r(
          [
            [0, 0],
            [54, 0],
            [54, 52],
            [0, 52],
          ],
          [0.6, 0.6, 2.6, 2.6],
        ),
        ne = p(-1.3, -1.3, 1.3, 1.3, 1.2, 3),
        re = (e, t) =>
          s(
            a(
              d(
                V,
                ne.map((t) => ({ ...t, u: t.u + e[0], v: t.v + e[1] })),
                e[2],
              ).concat(
                d(
                  V,
                  ne.map((e) => ({ ...e, u: e.u + t[0], v: e.v + t[1] })),
                  t[2],
                ),
              ),
            ),
          ),
        ie = y(`g`, {}, F);
      y(`path`, { d: re([30, -42, 0], [30, -1, 82]), class: `sil` }, ie);
      let ae = y(`g`, {}, ie),
        U = y(`g`, {}, ae),
        oe = (e, t, n) =>
          V(e, t * D - (n ? E * O : 0), 80 - t * O - (n ? E * D : 0)),
        W = r(
          [
            [0, 0],
            [60, 0],
            [60, 62],
            [0, 62],
          ],
          [1.5, 1.5, 1.5, 1.5],
        );
      (y(`path`, { d: s(W.map(([e, t]) => oe(e, t, !0))), class: `lo` }, U),
        y(`path`, { d: s(W.map(([e, t]) => oe(e, t, !1))), class: `sil` }, U));
      let G = P.map((e, t) => {
          let n = y(`g`, {}, ae);
          return {
            grp: n,
            sheet: y(`path`, { class: `sil` }, n),
            ink: y(`path`, { class: `nf lo` }, n),
            marks: e,
            a: _(t === 0 ? M(0) + 26 : M(t)),
          };
        }),
        [se, ce] = f(-3, -2, 63, 2.6, 1.4, 0.6);
      S(w(ie), c(V, H, se, ce, 76.5, 81));
      let [le, ue] = f(-5, k - 1.5, 65, k + 6, 1.4, 0.6);
      (S(w(ie), c(V, H, le, ue, A - 3, A)),
        y(`path`, { d: re([-7, k + 20, 0], [-3, 2, 84]), class: `sil` }, ie),
        y(`path`, { d: re([67, k + 20, 0], [63, 2, 84]), class: `sil` }, ie));
      function de(e, t, n) {
        let r = g(e.a, n),
          i = ([e, n]) => ee(t, r, e, n);
        e.sheet.setAttribute(`d`, s(te.map(i)));
        let a = j[1] * Math.cos(u(r)) + j[2] * Math.sin(u(r)) > 0;
        (e.ink.setAttribute(
          `d`,
          a ? e.marks.map((e) => o(e.map(i))).join(``) : ``,
        ),
          (e.depth =
            j[1] * 26 * Math.sin(u(r)) + j[2] * (80 - 26 * Math.cos(u(r)))));
      }
      let K = 1,
        fe = 1,
        pe = !1,
        me = 1,
        he = 0,
        ge = 0,
        _e = (e) => (e < K - 1 ? N(e) : M(e) + (!pe && e === 0 ? 26 : 0));
      function ve(e) {
        (G.forEach((t, n) => h(t.a, _e(n), e, 0)),
          G.forEach((e, t) => e.sheet.classList.toggle(`hi`, t === K - 1)));
      }
      let ye = ``,
        be = j[1] * 31 * D + j[2] * (80 - 31 * O);
      function xe() {
        let e = [
          { el: U, depth: be, key: `b` },
          ...G.map((e, t) => ({ el: e.grp, depth: e.depth, key: t })),
        ];
        e.sort((e, t) => e.depth - t.depth);
        let t = e.map((e) => e.key).join(``);
        if (t !== ye) {
          ye = t;
          for (let t of e) ae.appendChild(t.el);
        }
      }
      let q = C(x, (e, t) => {
        let n = !1;
        return (
          me !== fe && t - he >= 90 && (fe = me),
          K !== fe &&
            t - ge >= z &&
            ((K += Math.sign(fe - K)),
            (ge = t),
            ve(t),
            (I.textContent = pe ? `page ${K}` : `rest`)),
          G.forEach((e, r) => {
            (de(e, r, t), m(e.a, t) || (n = !0));
          }),
          xe(),
          n || K !== fe || me !== fe
        );
      });
      R.add(q.unregister);
      let Se = [V(0, 0, 80)[0], V(60, 0, 80)[0], V(0, k, A)[0], V(60, k, A)[0]],
        Ce = Math.min(...Se),
        we = Math.max(...Se),
        Te = 0,
        Ee = (e) => {
          let n = (5 * (e[0] - Ce)) / (we - Ce);
          return (
            (n < Te - T || n > Te + 1 + T) && (Te = t(Math.floor(n), 0, 4)),
            Te + 1
          );
        };
      function De(e, t, n) {
        (e !== me && ((me = e), (he = n)),
          t !== pe && ((pe = t), ve(n)),
          t || ((me = 1), (fe = 1), (Te = 0)),
          (I.textContent = t ? `page ${K}` : `rest`),
          q.wake());
      }
      return (
        ve(performance.now()),
        R.add(
          b(x, {
            move: (e) => De(Ee(e), !0, performance.now()),
            leave: () => De(1, !1, performance.now()),
          }),
        ),
        R.add(() => F.replaceChildren()),
        {
          set: (e) => {
            z = e;
          },
          destroy: R.dispose,
        }
      );
    }
    return {
      name: `easel`,
      means: `A flip chart on an easel: the pointer runs through the deck, and the pages before it flip over the bar, one after another.`,
      rules: [1, 2, 5, 6],
      range: [90, 170, 280],
      tour: [[160, 165], [250, 165], [205, 165], null],
      mount: F,
    };
  })(),
  abacus: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        hull: i,
        open: a,
        poly: o,
        prism: s,
        proj: c,
        ringAt: l,
        rings: u,
        rrect: d,
        run: f,
        seg: p,
        unproj: m,
        tdone: h,
        tset: g,
        tval: _,
        tween: v,
        disposer: y,
        mk: b,
        pointer: S,
        put: C,
        register: w,
        solid: T,
      } = x,
      E = 4.5,
      D = [0, 1, 2, 3].map((e) => 5 + (62 * (e + 0.5)) / 4),
      O = [3, 7, 2, 5],
      k = (e) => (e[0][0] <= e[e.length - 1][0] ? e : e.slice().reverse()),
      A = (e, t) =>
        e < 10 - t ? 6 + e * 6 : 102 - (10 - e) * 6 + 0.5999999999999996;
    function j(e, t, n, r) {
      let s = [
          [o(i(l(e, n, 0).concat(l(e, n, 5)))), `sil`],
          [o(l(e, r, 5)), `nf`],
          [
            a(
              l(
                e,
                f(r, (e) => !t(e)),
                0.4,
              ),
            ),
            `nf lo`,
          ],
        ],
        c = k(l(e, f(r, t), 5)),
        u = k(l(e, f(n, t), 5)),
        d = k(l(e, f(n, t), 0));
      return {
        far: s,
        near: [
          [o([...c, u[u.length - 1], ...d.slice().reverse(), u[0]]), `fo`],
          [a(u), `nf lo`],
          [a(c), `nf`],
          [a([u[0], ...d, u[u.length - 1]]), `nf sil`],
        ],
      };
    }
    function M({ stage: i, svg: a, read: o }, l) {
      let f = y(),
        x = l,
        k = e(45, 0.5, 2.3);
      r(
        k,
        [
          [0, 0, 0],
          [108, 0, 0],
          [0, 72, 0],
          [108, 72, 0],
          [0, 0, 8],
          [108, 72, 8],
        ],
        200,
        166,
      );
      let M = c(k),
        N = n(k),
        P = j(M, N, d(0, 0, 108, 72, 8, 6), d(5, 5, 103, 67, 3, 6)),
        F = b(`g`, {}, a);
      for (let [e, t] of P.far) b(`path`, { d: e, class: t }, F);
      let I = D.map((e, t) => {
        b(`path`, { d: p(M(5, e, E), M(103, e, E)), class: `nf` }, F);
        let n = [];
        for (let e = 0; e < 10; e++) {
          let r = T(F);
          n.push({ el: r, x: v(A(e, O[t])), drawn: NaN });
        }
        return { y: e, beads: n, c: O[t] };
      });
      for (let [e, t] of P.near) b(`path`, { d: e, class: t }, F);
      function L(e, t, n) {
        let r = _(e.x, n);
        if (r === e.drawn) return;
        e.drawn = r;
        let [i, a] = u(r, t - 5, r + 5.4, t + 5, 2.6, 0.8);
        C(e.el, s(M, N, i, a, 1, 8));
      }
      let R = w(i, (e, t) => {
        let n = !1;
        for (let e of I)
          for (let r of e.beads) (L(r, e.y, t), h(r.x, t) || (n = !0));
        return n;
      });
      f.add(R.unregister);
      function z(e) {
        let [n, r] = m(k, e[0], e[1], E);
        return [
          D.reduce(
            (e, t, n) => (Math.abs(r - t) < Math.abs(r - D[e]) ? n : e),
            0,
          ),
          t(Math.round((10 * (102 - n)) / 96), 0, 10),
        ];
      }
      let B = [1, O[1]];
      function V(e, n, r) {
        let i = performance.now();
        (I.forEach((t, r) => {
          let a = r === e ? n : O[r];
          if (a !== t.c) {
            let e = a > t.c ? 10 - t.c - 1 : 10 - t.c;
            (t.beads.forEach((t, n) => g(t.x, A(n, a), i, Math.abs(n - e) * x)),
              (t.c = a));
          }
        }),
          (B = [e, n]),
          I.forEach((e, n) =>
            e.beads.forEach((e, r) =>
              e.el.sil.classList.toggle(
                `hi`,
                n === B[0] && r === t(10 - B[1], 0, 9),
              ),
            ),
          ),
          (o.textContent = r ? `rod ${e + 1} · ${n}` : `rest`),
          R.wake());
      }
      return (
        V(1, O[1], !1),
        f.add(
          S(i, { move: (e) => V(...z(e), !0), leave: () => V(1, O[1], !1) }),
        ),
        f.add(() => a.replaceChildren()),
        {
          set: (e) => {
            x = e;
          },
          destroy: f.dispose,
        }
      );
    }
    return {
      name: `abacus`,
      means: `An abacus with a rod for each thing that moves a price: the pointer picks a rod and pushes its beads across, one after another.`,
      rules: [1, 2, 5, 6],
      range: [0, 40, 90],
      tour: [[122, 132], [313, 184], [215, 150], null],
      mount: M,
    };
  })(),
  fork: (() => {
    let {
        Cam: e,
        circ: t,
        clamp: n,
        facing: r,
        fit: i,
        lerp: a,
        prism: o,
        proj: s,
        rings: c,
        rrect: l,
        unproj: u,
        tdone: d,
        tset: f,
        tval: p,
        tween: m,
        disposer: h,
        mk: g,
        pointer: _,
        put: v,
        register: y,
        solid: b,
      } = x,
      S = [60, 50],
      C = [0, 50],
      w = { 1: [130, 15], 2: [130, 85] },
      T = 0.55;
    function E(e, t, n, r) {
      let i = t[0] - e[0],
        a = t[1] - e[1],
        o = Math.hypot(i, a),
        s = i / o,
        c = a / o,
        u = (t) =>
          t.map((t) => {
            let r = t.v - n / 2;
            return {
              u: e[0] + t.u * s - r * c,
              v: e[1] + t.u * c + r * s,
              nu: t.nu * s - t.nv * c,
              nv: t.nu * c + t.nv * s,
            };
          });
      return [u(l(0, 0, o, n, 3.2, 3)), u(l(r, r, o - r, n - r, 2.2, 3))];
    }
    let D = (e, t, n) => e.map((e) => ({ ...e, u: e.u + t, v: e.v + n }));
    function O({ stage: n, svg: l, read: x }, O) {
      let k = h(),
        A = O,
        j = 1,
        M = 1,
        N = e(45, 0.5, 1.78);
      i(
        N,
        [
          [-12, -12, 0],
          [150, -12, 0],
          [-12, 100, 0],
          [150, 100, 0],
          [130, 15, 26],
          [130, 85, 26],
        ],
        200,
        166,
      );
      let P = s(N),
        F = r(N),
        I = g(`g`, {}, l),
        [L, R] = c(-12, -12, 150, 100, 9, 2);
      v(b(I), o(P, F, L, R, -4, 0));
      let z = (e, t) => {
        let n = b(I);
        return (v(n, o(P, F, ...E(e, t, 13, 1), 0, 3)), n);
      };
      z(C, S);
      let B = { 1: z(S, w[1]), 2: z(S, w[2]) },
        V = b(I),
        H = t(10.5, 16),
        ee = t(9.2, 16);
      v(V, o(P, F, D(H, ...S), D(ee, ...S), 0, 3));
      let [te, ne] = c(122, 7, 138, 23, 2.6, 1),
        [re, ie] = c(121, 72, 143, 98, 3, 1.2),
        ae = [
          { el: b(I), r: te, i: ne, h: 9, up: m(0) },
          { el: b(I), r: re, i: ie, h: 22, up: m(0) },
        ],
        U = b(I),
        oe = t(6.2, 14),
        W = t(5, 14),
        G = m(T),
        se = (e) => {
          if (e <= 1) return [a(C[0], S[0], e), C[1]];
          let t = w[M],
            n = 0.8 * (e - 1);
          return [a(S[0], t[0], n), a(S[1], t[1], n)];
        };
      function ce(e) {
        let [t, n] = se(p(G, e));
        v(U, o(P, F, D(oe, t, n), D(W, t, n), 3, 9));
        for (let t of ae) {
          let n = 6 * p(t.up, e);
          v(t.el, o(P, F, t.r, t.i, n, n + t.h));
        }
      }
      let le = y(
        n,
        (e, t) => (
          M !== j && p(G, t) <= 1.001 && ((M = j), f(G, 2, t, A)),
          ce(t),
          !d(G, t) || M !== j || ae.some((e) => !d(e.up, t))
        ),
      );
      k.add(le.unregister);
      function ue(e, t) {
        let n = performance.now();
        ((j = e),
          t ? (M === e ? f(G, 2, n, A) : f(G, 1, n, 0)) : f(G, T, n, 0),
          ae.forEach((r, i) => f(r.up, t && e === i + 1 ? 1 : 0, n, t ? A : 0)),
          B[1].sil.classList.toggle(`hi`, e === 1),
          B[2].sil.classList.toggle(`hi`, e === 2),
          (x.textContent = t ? `path ${e}` : `rest`),
          le.wake());
      }
      return (
        ue(1, !1),
        k.add(
          _(n, {
            move: (e) => {
              let [, t] = u(N, e[0], e[1], 0);
              ue(t < S[1] ? 1 : 2, !0);
            },
            leave: () => ue(1, !1),
          }),
        ),
        k.add(() => l.replaceChildren()),
        {
          set: (e) => {
            A = e;
          },
          destroy: k.dispose,
        }
      );
    }
    return {
      name: `fork`,
      means: `A road that splits in two: the pointer's side picks a branch, and a puck rolls to the hub and rides out along it.`,
      rules: [1, 4, 5, 8],
      range: [0, 150, 300],
      tour: [[250, 120], [250, 215], [200, 165], null],
      mount: O,
    };
  })(),
  steps: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        prism: i,
        proj: a,
        rings: o,
        tdone: s,
        tset: c,
        tval: l,
        tween: u,
        disposer: d,
        mk: f,
        pointer: p,
        put: m,
        register: h,
        solid: g,
      } = x,
      _ = [11, 5, 2, 0.8],
      v = (e) => 7 + e * 5.5,
      y = (e) => e * 19;
    function b({ stage: t, svg: b, read: x }, S) {
      let C = d(),
        w = S,
        T = e(45, 0.5, 2.3);
      r(
        T,
        [
          [-12, -12, -4],
          [137, -12, -4],
          [-12, 38, -4],
          [137, 38, -4],
          [114, 0, v(6) + _[0] + 2],
        ],
        200,
        170,
      );
      let E = a(T),
        D = n(T),
        O = f(`g`, {}, b),
        [k, A] = o(-12, -12, 137, 38, 9, 2);
      m(g(O), i(E, D, k, A, -4, 0));
      let j = Array.from({ length: 7 }, (e, t) => {
          let [n, r] = o(y(t), 0, y(t) + 15, 26, 2.6, 1);
          return { el: g(O), r: n, c: r, up: u(0) };
        }),
        M = h(t, (e, t) => {
          let n = !1;
          return (
            j.forEach((e, r) => {
              let a = l(e.up, t);
              (m(e.el, i(E, D, e.r, e.c, a, a + v(r))), s(e.up, t) || (n = !0));
            }),
            n
          );
        });
      C.add(M.unregister);
      let N = j.map((e, t) => E(y(t) + 15 / 2, 13, v(t))[0]),
        P = (e) =>
          N.reduce(
            (t, n, r) => (Math.abs(n - e) < Math.abs(N[t] - e) ? r : t),
            0,
          ),
        F = 3,
        I = !1;
      function L(e, t) {
        let n = performance.now();
        (j.forEach((r, i) => {
          let a = Math.abs(i - e);
          (c(r.up, t ? _[Math.min(a, 3)] * 1 : 0, n, a * w),
            r.el.sil.classList.toggle(`hi`, i === e));
        }),
          (F = e),
          (I = t),
          (x.textContent = I ? `step ${F + 1}` : `rest`),
          M.wake());
      }
      return (
        L(3, !1),
        C.add(p(t, { move: (e) => L(P(e[0]), !0), leave: () => L(3, !1) })),
        C.add(() => b.replaceChildren()),
        {
          set: (e) => {
            w = e;
          },
          destroy: C.dispose,
        }
      );
    }
    return {
      name: `steps`,
      means: `Seven blocks, each a step taller than the last: the pointer picks a step, and it rises with its neighbours behind it.`,
      rules: [1, 2, 3, 5],
      range: [0, 45, 90],
      tour: [[120, 170], [250, 150], [330, 130], null],
      mount: b,
    };
  })(),
  keys: (() => {
    let {
        Cam: e,
        circ: t,
        clamp: n,
        facing: r,
        fit: i,
        poly: a,
        prism: o,
        proj: s,
        rad: c,
        ringAt: l,
        rings: u,
        rrect: d,
        unproj: f,
        tdone: p,
        tset: m,
        tval: h,
        tween: g,
        disposer: _,
        mk: v,
        pointer: y,
        put: b,
        register: S,
        solid: C,
      } = x,
      w = [0, 30, 60],
      T = [
        [0, -5],
        [7, 4],
        [-3, -3],
      ],
      E = (e, t, n, r) => {
        let i = Math.cos(c(r)),
          a = Math.sin(c(r));
        return e.map((e) => ({
          u: t + e.u * i - e.v * a,
          v: n + e.u * a + e.v * i,
          nu: e.nu * i - e.nv * a,
          nv: e.nu * a + e.nv * i,
        }));
      },
      D = [
        [t(9.5, 16), t(8.2, 16)],
        [d(8, -2.8, 52, 2.8, 1.6, 3), d(8.9, -1.9, 51.1, 1.9, 0.8, 3)],
        [d(38, 2.8, 44, 9, 1.2, 3), d(38.7, 3.5, 43.3, 8.3, 0.5, 3)],
        [d(46, 2.8, 52, 6.5, 1.2, 3), d(46.7, 3.5, 51.3, 5.8, 0.5, 3)],
      ],
      O = t(4.2, 14);
    function k({ stage: t, svg: n, read: c }, d) {
      let x = _(),
        k = d,
        A = e(45, 0.5, 2.3);
      i(
        A,
        [
          [-18, -20, 0],
          [64, -20, 0],
          [-18, 84, 0],
          [64, 84, 0],
          [30, 60, 13],
          [30, 0, 13],
        ],
        200,
        166,
      );
      let j = s(A),
        M = r(A),
        N = v(`g`, {}, n),
        [P, F] = u(-18, -20, 64, 84, 9, 2);
      b(C(N), o(j, M, P, F, -4, 0));
      let I = w.map((e, t) => ({
        row: e,
        parts: D.map(() => C(N)),
        hole: v(`path`, { class: `nf lo` }, N),
        up: g(0),
        dy: g(0),
        k: t,
      }));
      I.forEach((e) => e.parts[0].g.appendChild(e.hole));
      let L = S(t, (e, t) => {
        let n = !1;
        return (
          I.forEach((e) => {
            let r = h(e.up, t),
              [i, s] = T[e.k],
              c = e.row + h(e.dy, t);
            (D.forEach(([t, n], a) =>
              b(e.parts[a], o(j, M, E(t, i, c, s), E(n, i, c, s), r, r + 3)),
            ),
              e.hole.setAttribute(`d`, a(l(j, E(O, i, c, s), r + 3))),
              (!p(e.up, t) || !p(e.dy, t)) && (n = !0));
          }),
          n
        );
      });
      x.add(L.unregister);
      let R = (e) => {
        let [, t] = f(A, e[0], e[1], 0);
        return w.reduce(
          (e, n, r) => (Math.abs(n - t) < Math.abs(w[e] - t) ? r : e),
          0,
        );
      };
      function z(e, t) {
        let n = performance.now();
        (I.forEach((r, i) => {
          let a = Math.abs(i - e),
            o = a * k;
          (m(r.up, t && a === 0 ? 9 : 0, n, o),
            m(r.dy, t ? Math.sign(i - e) * 5 : 0, n, o),
            r.parts.forEach((t) => t.sil.classList.toggle(`hi`, i === e)));
        }),
          (c.textContent = t ? `key ${e + 1}` : `rest`),
          L.wake());
      }
      return (
        z(1, !1),
        x.add(y(t, { move: (e) => z(R(e), !0), leave: () => z(1, !1) })),
        x.add(() => n.replaceChildren()),
        {
          set: (e) => {
            k = e;
          },
          destroy: x.dispose,
        }
      );
    }
    return {
      name: `keys`,
      means: `Three keys on a mat: the pointer picks one, it lifts, and the others part to make room.`,
      rules: [1, 2, 4, 5],
      range: [0, 45, 90],
      tour: [[150, 120], [200, 200], [180, 160], null],
      mount: k,
    };
  })(),
  overlap: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        lerp: i,
        poly: a,
        prism: o,
        proj: s,
        ringAt: c,
        rings: l,
        spring: u,
        stepS: d,
        unproj: f,
        disposer: p,
        mk: m,
        pointer: h,
        put: g,
        register: _,
        solid: v,
      } = x,
      y = 3.6;
    function b({ stage: i, svg: c, read: b }, x) {
      let S = p(),
        C = e(45, 0.5, 1.8);
      r(
        C,
        [
          [-14, -10, 0],
          [150, -10, 0],
          [-14, 70, 0],
          [150, 70, 0],
          [90, 30, 12.6],
        ],
        200,
        166,
      );
      let w = s(C),
        T = n(C),
        E = m(`g`, {}, c),
        [D, O] = l(-14, -10, 150, 70, 9, 2);
      g(v(E), o(w, T, D, O, -4, 0));
      let [k, A] = l(46, 4, 136, 56, 3, 1.1);
      g(v(E), o(w, T, k, A, 0, 7));
      let j = v(E),
        M = m(`path`, { class: `nf hi` }, E),
        N = u(23, { k: x }),
        P = (e) => Math.max(0, Math.min(e + 44, 136) - Math.max(e, 46)),
        F = null;
      function I() {
        let e = N.x;
        if (e === F) return;
        F = e;
        let n = P(e),
          r = 7 * t(n / 10, 0, 1),
          [i, s] = l(e, 10, e + 44, 50, 3, 1.1);
        g(j, o(w, T, i, s, r, r + y));
        let c = Math.max(e, 46),
          u = Math.min(e + 44, 136);
        (M.setAttribute(
          `d`,
          n > 1
            ? a(
                [
                  [c + 1.5, 11.5],
                  [u - 1.5, 11.5],
                  [u - 1.5, 48.5],
                  [c + 1.5, 48.5],
                ].map(([e, t]) => w(e, t, r + y)),
              )
            : ``,
        ),
          (b.textContent = L ? `${Math.round((100 * n) / 44)}%` : `rest`));
      }
      let L = !1,
        R = _(i, (e) => {
          let t = d(N, e);
          return (I(), t);
        });
      return (
        S.add(R.unregister),
        I(),
        S.add(
          h(i, {
            move: (e) => {
              let [n] = f(C, e[0], e[1], 0);
              ((L = !0), (N.t = t(n - 22, 0, 80)), R.wake());
            },
            leave: () => {
              ((L = !1), (N.t = 23), R.wake());
            },
          }),
        ),
        S.add(() => c.replaceChildren()),
        {
          set: (e) => {
            N.k = e;
          },
          destroy: S.dispose,
        }
      );
    }
    return {
      name: `overlap`,
      means: `A short plate slides along a long one: where it lies over it is the part already paid for, outlined in the bright stroke.`,
      rules: [1, 3, 4, 8],
      range: [50, 100, 180],
      tour: [[130, 150], [250, 150], [330, 120], null],
      mount: b,
    };
  })(),
  track: (() => {
    let {
        Cam: e,
        circ: t,
        clamp: n,
        facing: r,
        fit: i,
        lerp: a,
        prism: o,
        proj: s,
        rings: c,
        rrect: l,
        spring: u,
        stepS: d,
        unproj: f,
        disposer: p,
        mk: m,
        pointer: h,
        put: g,
        register: _,
        solid: v,
      } = x,
      y = [
        [0, 0],
        [96, 0],
        [96, 52],
        [0, 52],
      ],
      b = [9, 12, 15, 18],
      S = 2.6,
      C = 1.4,
      w = (e, t, n) => e.map((e) => ({ ...e, u: e.u + t, v: e.v + n }));
    function T(e, t, n, r) {
      let i = t[0] - e[0],
        a = t[1] - e[1],
        o = Math.hypot(i, a),
        s = i / o,
        c = a / o,
        u = (t) =>
          t.map((t) => {
            let r = t.v - n / 2;
            return {
              u: e[0] + t.u * s - r * c,
              v: e[1] + t.u * c + r * s,
              nu: t.nu * s - t.nv * c,
              nv: t.nu * c + t.nv * s,
            };
          });
      return [u(l(0, 0, o, n, 3, 3)), u(l(r, r, o - r, n - r, 2, 3))];
    }
    let E = (e) => {
        let t = n(Math.floor(e), 0, 2),
          r = n(e - t, 0, 1);
        return [a(y[t][0], y[t + 1][0], r), a(y[t][1], y[t + 1][1], r)];
      },
      D = (e, t) => {
        let r = [1e9, 0];
        for (let i = 0; i < 3; i++) {
          let [a, o] = y[i],
            [s, c] = y[i + 1],
            l = s - a,
            u = c - o,
            d = n(((e - a) * l + (t - o) * u) / (l * l + u * u), 0, 1),
            f = Math.hypot(e - (a + l * d), t - (o + u * d));
          f < r[0] && (r = [f, i + d]);
        }
        return r[1];
      };
    function O({ stage: n, svg: a, read: l }, x) {
      let O = p(),
        k = e(45, 0.5, 1.85);
      i(
        k,
        [
          [-14, -14, 0],
          [110, -14, 0],
          [-14, 66, 0],
          [110, 66, 0],
          [96, 52, 24],
        ],
        200,
        166,
      );
      let A = s(k),
        j = r(k),
        M = m(`g`, {}, a),
        [N, P] = c(-14, -14, 110, 66, 9, 2);
      (g(v(M), o(A, j, N, P, -4, 0)),
        [0, 2, 1].forEach((e) =>
          g(v(M), o(A, j, ...T(y[e], y[e + 1], 12, 1), 0, S)),
        ));
      let F = m(`g`, {}, M),
        I = y.map(([e, t], n) => ({ el: v(F), x: e, y: t, key: e + t }));
      I.forEach((e, n) =>
        g(e.el, o(A, j, w(t(6, 14), e.x, e.y), w(t(5, 14), e.x, e.y), 0, b[n])),
      );
      let L = { el: v(F), key: 0 },
        R = t(5.4, 12),
        z = t(4.4, 12),
        B = u(C, { k: x }),
        V = null,
        H = ``;
      function ee() {
        if (B.x === V) return;
        V = B.x;
        let [e, t] = E(B.x);
        (g(L.el, o(A, j, w(R, e, t), w(z, e, t), S, 8.6)), (L.key = e + t + 5));
        let n = [...I, L].sort((e, t) => e.key - t.key),
          r = n.map((e) => e.key).join();
        if (r !== H) {
          H = r;
          for (let e of n) F.appendChild(e.el.g);
        }
      }
      let te = _(n, (e) => {
        let t = d(B, e);
        return (ee(), t);
      });
      O.add(te.unregister);
      let ne = -1;
      function re(e, t) {
        B.t = e;
        let n = Math.round(e);
        (n !== ne &&
          (I.forEach((e, t) => e.el.sil.classList.toggle(`hi`, t === n)),
          (ne = n)),
          (l.textContent = t ? `post ${n + 1}` : `rest`),
          te.wake());
      }
      return (
        ee(),
        re(C, !1),
        O.add(
          h(n, {
            move: (e) => {
              let [t, n] = f(k, e[0], e[1], 0);
              re(D(t, n), !0);
            },
            leave: () => re(C, !1),
          }),
        ),
        O.add(() => a.replaceChildren()),
        {
          set: (e) => {
            B.k = e;
          },
          destroy: O.dispose,
        }
      );
    }
    return {
      name: `track`,
      means: `A road in three legs with a post at each corner, each taller than the last: the pointer runs a puck along it.`,
      rules: [1, 3, 4, 8],
      range: [50, 100, 180],
      tour: [[130, 150], [250, 150], [300, 190], null],
      mount: O,
    };
  })(),
  zones: (() => {
    let {
        Cam: e,
        circ: t,
        clamp: n,
        facing: r,
        fit: i,
        lerp: a,
        open: o,
        prism: s,
        proj: c,
        rad: l,
        rings: u,
        rrect: d,
        seg: f,
        spring: p,
        stepS: m,
        unproj: h,
        disposer: g,
        mk: _,
        pointer: v,
        put: y,
        register: b,
        solid: S,
      } = x,
      C = [
        [30, 32],
        [100, 32],
      ],
      w = (e, t, n) => e.map((e) => ({ ...e, u: e.u + t, v: e.v + n }));
    function T(e, t, n, r) {
      let i = t[0] - e[0],
        a = t[1] - e[1],
        o = Math.hypot(i, a),
        s = i / o,
        c = a / o,
        l = (t) =>
          t.map((t) => {
            let r = t.v - n / 2;
            return {
              u: e[0] + t.u * s - r * c,
              v: e[1] + t.u * c + r * s,
              nu: t.nu * s - t.nv * c,
              nv: t.nu * c + t.nv * s,
            };
          });
      return [l(d(0, 0, o, n, 1.6, 3)), l(d(r, r, o - r, n - r, 0.8, 3))];
    }
    function E({ stage: a, svg: o, read: d }, x) {
      let E = g(),
        D = e(45, 0.5, 1.95);
      i(
        D,
        [
          [-12, -12, 0],
          [142, -12, 0],
          [-12, 76, 0],
          [142, 76, 0],
          [100, 32, 9],
        ],
        200,
        166,
      );
      let O = c(D),
        k = r(D),
        A = _(`g`, {}, o),
        [j, M] = u(-12, -12, 142, 76, 9, 2);
      y(S(A), s(O, k, j, M, -4, 0));
      let N = C.map(([e, n], r) => {
        y(S(A), s(O, k, w(t(25, 18), e, n), w(t(23.4, 18), e, n), 0, 6));
        let i = ``;
        for (let t = 0; t < 12; t++) {
          let r = l(t * 30),
            a = Math.sin(r),
            o = -Math.cos(r),
            s = t % 3 == 0 ? 16.5 : 19,
            c = 21.6;
          i += f(O(e + a * s, n + o * s, 6), O(e + a * c, n + o * c, 6));
        }
        return (
          _(`path`, { d: i, class: `nf lo` }, A),
          { el: S(A), x: e, y: n }
        );
      });
      (C.map(([e, n]) => {
        let r = S(A);
        return (
          y(r, s(O, k, w(t(2.6, 10), e, n), w(t(1.6, 10), e, n), 6, 11)),
          r
        );
      }),
        N[0].el.sil.classList.add(`hi`));
      let P = p(10, { k: x }),
        F = null;
      function I() {
        P.x !== F &&
          ((F = P.x),
          N.forEach((e, t) => {
            let n = l(((P.x + t * 5) % 12) * 30),
              r = [e.x + Math.sin(n) * 17, e.y - Math.cos(n) * 17];
            y(e.el, s(O, k, ...T([e.x, e.y], r, 3.4, 0.8), 6, 9));
          }));
      }
      let L = b(a, (e) => {
        let t = m(P, e);
        return (I(), t);
      });
      E.add(L.unregister);
      function R(e, t) {
        P.t = e;
        let n = Math.round(e) % 24;
        ((d.textContent = t ? `${n} · ${(n + 5) % 24}` : `rest`), L.wake());
      }
      return (
        I(),
        R(10, !1),
        E.add(
          v(a, {
            move: (e) => {
              let [t] = h(D, e[0], e[1], 0);
              R(n((t + 12) / 154, 0, 1) * 24, !0);
            },
            leave: () => R(10, !1),
          }),
        ),
        E.add(() => o.replaceChildren()),
        {
          set: (e) => {
            P.k = e;
          },
          destroy: E.dispose,
        }
      );
    }
    return {
      name: `zones`,
      means: `Two dials five hours apart: the pointer sets the time of day, and both hands follow.`,
      rules: [1, 3, 4, 8],
      range: [50, 100, 180],
      tour: [[130, 150], [250, 150], [200, 120], null],
      mount: E,
    };
  })(),
  draft: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fillet: r,
        fit: i,
        open: a,
        poly: o,
        prism: s,
        proj: c,
        rings: l,
        seg: u,
        spring: d,
        stepS: f,
        unproj: p,
        disposer: m,
        mk: h,
        pointer: g,
        put: _,
        register: v,
        solid: y,
      } = x,
      b = 3.6,
      S = b,
      C = [
        [9, 8, 58],
        [22, 8, 88],
        [28, 8, 88],
        [34, 8, 64],
        [41, 8, 88],
        [47, 8, 40],
      ],
      w = [
        [8, 5, 88, 13],
        [8, 19, 44, 38],
        [52, 19, 88, 38],
        [8, 44, 36, 56],
      ];
    function T({ stage: a, svg: x, read: T }, E) {
      let D = m(),
        O = e(45, 0.5, 1.95);
      i(
        O,
        [
          [-12, -12, 0],
          [108, -12, 0],
          [-12, 76, 0],
          [108, 76, 0],
          [48, 32, 10.6],
        ],
        200,
        166,
      );
      let k = c(O),
        A = n(O),
        j = h(`g`, {}, x),
        [M, N] = l(-12, -12, 108, 76, 9, 2);
      _(y(j), s(k, A, M, N, -4, 0));
      let [P, F] = l(0, 0, 96, 64, 3, 1.2);
      _(y(j), s(k, A, P, F, 0, b));
      let I = h(`path`, { class: `nf lo` }, j),
        L = h(`path`, { class: `nf` }, j),
        R = y(j);
      R.sil.classList.add(`hi`);
      let z = d(42, { k: E }),
        B = null;
      function V() {
        let e = z.x;
        if (e === B) return;
        ((B = e),
          I.setAttribute(
            `d`,
            C.map(([t, n, r]) =>
              n < e - 2 ? u(k(n, t, S), k(Math.min(r, e - 2), t, S)) : ``,
            ).join(``),
          ),
          L.setAttribute(
            `d`,
            w
              .map(([t, n, i, a]) => {
                let s = Math.max(t, e + 2);
                return s < i - 3
                  ? o(
                      r(
                        [
                          [s, n],
                          [i, n],
                          [i, a],
                          [s, a],
                        ],
                        [1.2, 1.2, 1.2, 1.2],
                        3,
                      ).map(([e, t]) => k(e, t, S)),
                    )
                  : ``;
              })
              .join(``),
          ));
        let [t, n] = l(e - 0.9, -3, e + 0.9, 67, 0.85, 0.3);
        _(R, s(k, A, t, n, S, 10.6));
      }
      let H = v(a, (e) => {
        let t = f(z, e);
        return (V(), t);
      });
      D.add(H.unregister);
      function ee(e, t) {
        ((z.t = e),
          (T.textContent = t ? `${Math.round((100 * e) / 96)}%` : `rest`),
          H.wake());
      }
      return (
        V(),
        D.add(
          g(a, {
            move: (e) => {
              let [n] = p(O, e[0], e[1], 0);
              ee(t(n, 6, 90), !0);
            },
            leave: () => ee(42, !1),
          }),
        ),
        D.add(() => x.replaceChildren()),
        {
          set: (e) => {
            z.k = e;
          },
          destroy: D.dispose,
        }
      );
    }
    return {
      name: `draft`,
      means: `A sheet ruled like a written draft on one side of a blade and laid out as a screen on the other: the pointer slides the blade.`,
      rules: [1, 3, 4, 8],
      range: [50, 100, 180],
      tour: [[140, 150], [250, 170], [200, 130], null],
      mount: T,
    };
  })(),
  site: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        open: i,
        poly: a,
        prism: o,
        proj: s,
        ringAt: c,
        rings: l,
        unproj: u,
        flatDot: d,
        mk: f,
        place: p,
        pointer: m,
        put: h,
        register: g,
        disposer: _,
        solid: v,
        tdone: y,
        tset: b,
        tval: S,
        tween: C,
      } = x,
      w = [-8, -8, 150, 112],
      T = [
        { x0: 12, y0: 40, x1: 52, y1: 82, full: 8, rest: 3 },
        { x0: 70, y0: 8, x1: 108, y1: 44, full: 5, rest: 2 },
        { x0: 88, y0: 60, x1: 132, y1: 96, full: 3, rest: 1 },
      ];
    function E({ stage: t, svg: i, read: x }, E) {
      let D = _(),
        O = e(45, 0.5, 1.95);
      r(
        O,
        [
          [w[0], w[1], -5],
          [w[2], w[1], -5],
          [w[0], w[3], -5],
          [w[2], w[3], -5],
          [32, 60, 52],
        ],
        200,
        166,
      );
      let k = s(O),
        A = n(O),
        j = E,
        M = -1,
        N = -1,
        P = 0,
        F = !1,
        I = f(`g`, {}, i),
        [L, R] = l(w[0], w[1], w[2], w[3], 9, 2.2);
      h(v(I), o(k, A, L, R, -5, 0));
      let z = T.map((e, t) => t).sort(
          (e, t) =>
            T[e].x0 +
            T[e].x1 +
            T[e].y0 +
            T[e].y1 -
            (T[t].x0 + T[t].x1 + T[t].y0 + T[t].y1),
        ),
        B = [];
      for (let e of z) {
        let t = T[e],
          [n, r] = l(t.x0, t.y0, t.x1, t.y1, 3, 1);
        f(
          `path`,
          {
            class: `nf dash`,
            d: a(c(k, l(t.x0 - 3, t.y0 - 3, t.x1 + 3, t.y1 + 3, 4, 1)[0], 0)),
          },
          I,
        );
        for (let [e, n] of [
          [t.x0 - 3, t.y0 - 3],
          [t.x1 + 3, t.y0 - 3],
          [t.x0 - 3, t.y1 + 3],
          [t.x1 + 3, t.y1 + 3],
        ])
          p(d(I, O, 0.9, `dot off`), k(e, n, 0));
        let i = [];
        for (let e = 0; e < t.full; e++)
          i.push({ el: v(I), a: C(+(e < t.rest)), drawn: NaN, hi: null });
        B.push({ i: e, ring: n, inner: r, floors: i });
      }
      let V = (e, t) =>
          M < 0 ? +(t < T[e.i].rest) : e.i === M ? 1 : +(t < T[e.i].rest),
        H = (e) => {
          let t = -1;
          return (
            e.floors.forEach((e, n) => {
              e.drawn > 0.3 * 6 && (t = n);
            }),
            t
          );
        },
        ee = () => (M >= 0 ? M : 0);
      function te(e) {
        let t = !1;
        for (let n of B)
          n.floors.forEach((r, i) => {
            let a = S(r.a, e);
            y(r.a, e) || (t = !0);
            let s = Math.round(a * 6 * 100) / 100;
            s !== r.drawn &&
              ((r.drawn = s),
              s < 0.35
                ? (r.el.sil.setAttribute(`d`, ``),
                  r.el.cr.setAttribute(`d`, ``))
                : h(r.el, o(k, A, n.ring, n.inner, i * 6, i * 6 + s)));
          });
        for (let e of B) {
          let t = H(e);
          e.floors.forEach((n, r) =>
            n.el.sil.classList.toggle(`hi`, e.i === ee() && r === t),
          );
        }
        return t;
      }
      function ne(e) {
        for (let t of B)
          t.floors.forEach((n, r) =>
            b(
              n.a,
              V(t, r),
              e,
              Math.abs(r - T[t.i].rest + (V(t, r) ? 0.5 : 0)) * j,
            ),
          );
      }
      let re = g(
        t,
        (e, t) => (
          N !== M &&
            N !== -1 &&
            t - P >= 90 &&
            ((M = N),
            ne(t),
            (x.textContent = `plot ${M + 1} · ${T[M].full} floors`)),
          te(t) || (N !== M && N !== -1)
        ),
      );
      D.add(re.unregister);
      let ie = (e) => {
        let [t, n] = u(O, e[0], e[1], 0);
        for (let e of B) {
          let r = T[e.i];
          if (t > r.x0 - 7 && t < r.x1 + 7 && n > r.y0 - 7 && n < r.y1 + 7)
            return e.i;
        }
        return N === -1 ? -1 : N;
      };
      function ae(e, t, n) {
        (e !== N && t && ((N = e), (P = n)),
          t !== F &&
            ((F = t),
            t || ((N = -1), (M = -1), ne(n), (x.textContent = `rest`))),
          re.wake());
      }
      return (
        ne(performance.now()),
        te(performance.now()),
        D.add(
          m(t, {
            move: (e) => ae(ie(e), !0, performance.now()),
            leave: () => ae(-1, !1, performance.now()),
          }),
        ),
        D.add(() => i.replaceChildren()),
        {
          set: (e) => {
            j = e;
          },
          destroy: D.dispose,
        }
      );
    }
    return {
      name: `site`,
      means: `Three plots marked out like a plan: the one the pointer stays on builds up floor by floor, and the others settle back.`,
      rules: [1, 2, 5, 6, 8],
      range: [30, 55, 90],
      tour: [[135, 147], [261, 163], [218, 213], null],
      mount: E,
    };
  })(),
  exploded: (() => {
    let {
        Cam: e,
        clamp: t,
        extremes: n,
        facing: r,
        fit: i,
        poly: a,
        prism: o,
        proj: s,
        ringAt: c,
        rings: l,
        rrect: u,
        seg: d,
        spring: f,
        stepS: p,
        disposer: m,
        flatDot: h,
        mk: g,
        place: _,
        pointer: v,
        put: y,
        register: b,
        solid: S,
      } = x,
      C = [
        {
          name: `surface`,
          r: [0, 0, 132, 96],
          rad: 7,
          segs: [
            [
              [1.5, 12],
              [130.5, 12],
            ],
          ],
          dots: [
            [7, 6],
            [13, 6],
            [19, 6],
          ],
        },
        {
          name: `sidebar`,
          r: [5, 17, 38, 91],
          rad: 4,
          segs: [
            [
              [10, 25],
              [28, 25],
            ],
            [
              [10, 33],
              [32, 33],
            ],
            [
              [10, 41],
              [24, 41],
            ],
            [
              [10, 49],
              [30, 49],
            ],
            [
              [10, 83],
              [22, 83],
            ],
          ],
        },
        {
          name: `card`,
          r: [48, 22, 120, 62],
          rad: 5,
          segs: [
            [
              [54, 30],
              [92, 30],
            ],
            [
              [54, 38],
              [112, 38],
            ],
            [
              [54, 46],
              [104, 46],
            ],
            [
              [54, 54],
              [80, 54],
            ],
          ],
        },
        {
          name: `popover`,
          r: [80, 50, 126, 86],
          rad: 4,
          segs: [
            [
              [86, 58],
              [118, 58],
            ],
            [
              [86, 74],
              [116, 74],
            ],
            [
              [86, 80],
              [108, 80],
            ],
          ],
          sel: [83, 62, 123, 70],
        },
      ],
      w = 0.18,
      T = 2.4;
    function E(e, t) {
      let n = !1;
      for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
        let [a, o] = t[r],
          [s, c] = t[i];
        o > e[1] != c > e[1] &&
          e[0] < ((s - a) * (e[1] - o)) / (c - o) + a &&
          (n = !n);
      }
      return n;
    }
    function D({ stage: x, svg: D, read: O }, k) {
      let A = m(),
        j = k,
        M = -1,
        N = null,
        P = f(w, { eps: 0.002 }),
        F = e(45, 0.5, 1.6);
      i(
        F,
        [
          [0, 0, 0],
          [132, 96, 0],
          [132, 0, 0],
          [0, 96, 0],
          [0, 0, 122.4],
          [132, 0, 122.4],
        ],
        200,
        125,
      );
      let I = s(F),
        L = r(F),
        R = g(`g`, {}, D),
        z = C.map((e, t) => {
          let [r, i] = l(...e.r, e.rad, 1.3),
            a = n(I, r),
            o = t > 0 ? g(`path`, { class: `nf dash` }, R) : null,
            s = S(R);
          return {
            ring: r,
            inner: i,
            ext: a,
            guide: o,
            el: s,
            marks: g(`path`, { class: `nf` }, s.g),
            selRing: e.sel ? u(...e.sel, 2) : null,
            selEl: e.sel ? g(`path`, { class: `nf sil` }, s.g) : null,
            dotEls: e.dots ? e.dots.map(() => h(s.g, F, 1.6, `nf`)) : null,
          };
        }),
        B = ([e, t, n, r], i) => [
          I(e, t, i),
          I(n, t, i),
          I(n, r, i),
          I(e, r, i),
        ];
      function V(e) {
        if (!e) return -1;
        for (let t = C.length - 1; t >= 0; t--)
          if (E(e, B(C[t].r, t * j * P.t + T))) return t;
        return -1;
      }
      function H(e) {
        e !== M &&
          ((M = e),
          z.forEach((t, n) => t.el.sil.classList.toggle(`hi`, n === e)),
          ee.wake());
      }
      let ee = b(x, (e) => {
        let t = p(P, e),
          n = (e) => e * j * P.x;
        return (
          C.forEach((e, t) => {
            let r = z[t],
              i = n(t),
              s = i + T;
            if (
              (y(r.el, o(I, L, r.ring, r.inner, i, s)),
              r.marks.setAttribute(
                `d`,
                e.segs
                  .map(([e, t]) => d(I(e[0], e[1], s), I(t[0], t[1], s)))
                  .join(``),
              ),
              r.selEl &&
                r.selRing &&
                r.selEl.setAttribute(`d`, a(c(I, r.selRing, s))),
              r.dotEls &&
                e.dots &&
                e.dots.forEach(([e, t], n) => _(r.dotEls[n], I(e, t, s))),
              r.guide)
            ) {
              let e = n(t - 1) + T;
              r.guide.setAttribute(
                `d`,
                r.ext.map((t) => d(I(t.u, t.v, i), I(t.u, t.v, e))).join(``),
              );
            }
          }),
          (O.textContent =
            M >= 0
              ? `0${M + 1} · ${C[M].name} · z ${n(M).toFixed(1)}`
              : P.t === w
                ? `rest`
                : `gap ${(j * P.x).toFixed(1)}`),
          t
        );
      });
      return (
        A.add(ee.unregister),
        A.add(
          v(x, {
            move: (e) => {
              ((N = e),
                (P.t = w + 0.8200000000000001 * t((e[0] - 60) / 280, 0, 1)),
                H(V(e)),
                ee.wake());
            },
            leave: () => {
              ((N = null), (P.t = w), H(-1), ee.wake());
            },
          }),
        ),
        A.add(() => D.replaceChildren()),
        {
          set: (e) => {
            ((j = e), N && H(V(N)), ee.wake());
          },
          destroy: A.dispose,
        }
      );
    }
    return {
      name: `exploded`,
      means: `An app window pulled apart into four layers: move right to lift them, and the layer under the pointer lights up.`,
      rules: [1, 2, 5, 6, 8],
      range: [12, 28, 40],
      tour: [[110, 120], [150, 90], [200, 70], null],
      mount: D,
    };
  })(),
  chat: (() => {
    let {
        Cam: e,
        clamp: t,
        facing: n,
        fit: r,
        poly: i,
        prism: a,
        proj: o,
        ringAt: s,
        rings: c,
        seg: l,
        spring: u,
        stepS: d,
        disposer: f,
        flatDot: p,
        mk: m,
        place: h,
        pointer: g,
        put: _,
        register: v,
        solid: y,
      } = x,
      b = [
        [0, 0, 132, 96, 7],
        [38, -6, 94, 104, 9],
      ],
      S = [
        { a: [58, 10, 124, 26], b: [43, -1, 89, 9], ra: [4, 2] },
        { a: [8, 32, 88, 48], b: [43, 14, 89, 40], ra: [4, 3] },
        { a: [48, 54, 124, 70], b: [43, 46, 89, 58], ra: [4, 2] },
        { a: [8, 76, 62, 88], b: [43, 62, 89, 74], ra: [4, 2] },
        { a: [60, 76, 124, 88], b: [43, 86, 89, 98], ra: [4, 6] },
      ],
      C = (e, t, n) => e + (t - e) * n,
      w = (e, t, n) => e.map((e, r) => C(e, t[r], n)),
      T = (e) => e * e * (3 - 2 * e);
    function E({ stage: i, svg: s, read: x }, E) {
      let D = f(),
        O = E,
        k = -1,
        A = u(0, { eps: 0.002 }),
        j = e(45, 0.5, 2.1);
      r(
        j,
        [
          [0, -6, 0],
          [132, -6, 0],
          [0, 104, 0],
          [132, 104, 0],
          [66, 50, 24],
        ],
        200,
        140,
      );
      let M = o(j),
        N = n(j),
        P = m(`g`, {}, s),
        F = y(P),
        I = m(`path`, { class: `nf` }, P),
        L = S.map((e, t) => t)
          .sort((e, t) => {
            let n = (e) =>
              e.a[0] +
              e.a[2] +
              e.a[1] +
              e.a[3] +
              e.b[0] +
              e.b[2] +
              e.b[1] +
              e.b[3];
            return n(S[e]) - n(S[t]);
          })
          .map((e) => {
            let t = y(P);
            return {
              i: e,
              el: t,
              marks: m(`path`, { class: `nf` }, t.g),
              dot: p(t.g, j, 1.5, `nf`),
            };
          });
      function R(e) {
        e !== k &&
          ((k = e),
          L.forEach((t) => t.el.sil.classList.toggle(`hi`, t.i === e)));
      }
      let z = v(i, (e) => {
        let n = d(A, e),
          r = t(A.x, 0, 1),
          i = T(r),
          o = w(b[0], b[1], i),
          [s, u] = c(o[0], o[1], o[2], o[3], o[4], 1.4);
        _(F, a(M, N, s, u, -3, 0));
        let f = Math.sin(Math.PI * i) * O;
        for (let e of L) {
          let t = S[e.i],
            n = w(t.a, t.b, i),
            r = C(t.ra[0], t.ra[1], i),
            o = 0.4 + f + 0,
            s = o + 2,
            [u, d] = c(n[0], n[1], n[2], n[3], r, 0.9);
          _(e.el, a(M, N, u, d, o, s));
          let p = (n[1] + n[3]) / 2,
            m = 4 + 2 * i,
            g = e.i % 2 == 0,
            v = g ? C(n[2] - m, n[0] + m, i) : n[0] + m;
          h(e.dot, M(v, p, s));
          let y = n[0] + m + 4,
            b = n[2] - m - (n[2] - n[0]) * 0.2 * (1 - i),
            x = g ? n[0] + m + 4 : y,
            T = g ? n[2] - m - 4 : b;
          e.marks.setAttribute(
            `d`,
            T - x > 6 ? l(M(x, p, s), M(C(T, b, i), p, s)) : ``,
          );
        }
        return (
          I.setAttribute(`d`, i > 0.9 ? l(M(60, -3.5, 0), M(72, -3.5, 0)) : ``),
          R(r > 0.6 ? 4 : 0),
          (x.textContent =
            r < 0.04
              ? `rest`
              : r > 0.96
                ? `prototype`
                : `${Math.round(r * 100)}%`),
          n
        );
      });
      return (
        D.add(z.unregister),
        D.add(
          g(i, {
            move: (e) => {
              ((A.t = t((e[0] - 120) / 150, 0, 1)), z.wake());
            },
            leave: () => {
              ((A.t = 0), z.wake());
            },
          }),
        ),
        D.add(() => s.replaceChildren()),
        {
          set: (e) => {
            ((O = e), z.wake());
          },
          destroy: D.dispose,
        }
      );
    }
    return {
      name: `chat`,
      means: `A chat becoming a product: move right and five messages become the screens of a phone app.`,
      rules: [1, 2, 5, 6, 8],
      range: [4, 9, 16],
      tour: [[150, 150], [240, 130], [300, 120], null],
      mount: E,
    };
  })(),
};

export default figures;
