(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => s });
        var o = t(537),
          r = t.n(o),
          a = t(645),
          i = t.n(a)()(r());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);",
        ]),
          i.push([
            e.id,
            '* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n    font-family: \'Roboto\', system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\ninput[type="email"] {\n    appearance: none;\n    border: 1px solid #000000;\n    margin: 0;\n    font-size: 90%;\n}\n\ninput:invalid {\n    border-color: #900;\n    background-color: #fdd;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\n.error {\n    font-size: 80%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n    padding: 0.3em;\n}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAIA;;IAEI,YAAY;IACZ,oIAAoI;AACxI;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,cAAc;AAClB",
              sourcesContent: [
                '* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\');\n\nhtml,\nbody {\n    height: 100%;\n    font-family: \'Roboto\', system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\ninput[type="email"] {\n    appearance: none;\n    border: 1px solid #000000;\n    margin: 0;\n    font-size: 90%;\n}\n\ninput:invalid {\n    border-color: #900;\n    background-color: #fdd;\n}\n\ninput:focus:invalid {\n    outline: none;\n}\n\n.error {\n    font-size: 80%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n    padding: 0.3em;\n}',
              ],
              sourceRoot: "",
            },
          ]);
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  o && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (o && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o,
                ),
              a = "/*# ".concat(r, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === e) {
              t = o;
              break;
            }
          return t;
        }
        function o(e, o) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = o.base ? c[0] + o.base : c[0],
              u = a[l] || 0,
              d = "".concat(l, " ").concat(u);
            a[l] = u + 1;
            var p = t(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var A = r(f, o);
              (o.byIndex = s),
                n.splice(s, 0, { identifier: d, updater: A, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function r(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = o(e, r), l = 0; l < a.length; l++) {
              var u = t(a[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var o = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(o, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var a = (n[o] = { id: o, exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        o = t(795),
        r = t.n(o),
        a = t(569),
        i = t.n(a),
        s = t(565),
        c = t.n(s),
        l = t(216),
        u = t.n(l),
        d = t(589),
        p = t.n(d),
        f = t(426),
        A = {};
      (A.styleTagTransform = p()),
        (A.setAttributes = c()),
        (A.insert = i().bind(null, "head")),
        (A.domAPI = r()),
        (A.insertStyleElement = u()),
        n()(f.Z, A),
        f.Z && f.Z.locals && f.Z.locals;
      const m = (() => {
        const {
          form: e,
          email: n,
          emailError: t,
        } = (() => {
          const e = document.querySelector("form"),
            n = document.querySelector("#user_email"),
            t = document.querySelector("#user_email + .error");
          function o() {
            n.validity.valueMissing
              ? (t.textContent = "You need to enter an email address")
              : n.validity.typeMismatch
                ? (t.textContent = "Entered value needs to be an email address")
                : n.validity.tooShort &&
                  (t.textContent = `Email should be at least ${n.minLength} characters; you entered ${n.value.length}.`),
              (t.className = "error active");
          }
          return (
            n.addEventListener("input", (e) => {
              n.validity.valid
                ? ((t.textContent = ""), (t.className = "error"))
                : o();
            }),
            e.addEventListener("submit", (e) => {
              n.validity.valid || (o(), e.preventDefault());
            }),
            console.log("abelha"),
            { form: e, email: n, emailError: t }
          );
        })();
        return { form: e, email: n, emailError: t };
      })();
      m.form, m.email, m.emailError, console.log("abelha");
    })();
})();
//# sourceMappingURL=app.bundle.js.map