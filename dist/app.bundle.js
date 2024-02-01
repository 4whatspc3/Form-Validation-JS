(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(537),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);",
        ]),
          i.push([
            e.id,
            '* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\ninput[type="email"] {\n  appearance: none;\n  border: 1px solid #000000;\n  margin: 0;\n  font-size: 90%;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error,\nul {\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAIA;;EAEE,YAAY;EACZ;4DAC0D;AAC5D;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB",
              sourcesContent: [
                '* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\ninput[type="email"] {\n  appearance: none;\n  border: 1px solid #000000;\n  margin: 0;\n  font-size: 90%;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error,\nul {\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
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
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
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
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              u = a[l] || 0,
              d = "".concat(l, " ").concat(u);
            a[l] = u + 1;
            var p = t(d),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: d, updater: f, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, n) {
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
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), l = 0; l < a.length; l++) {
              var u = t(a[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
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
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
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
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options);
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
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        l = t(216),
        u = t.n(l),
        d = t(589),
        p = t.n(d),
        m = t(426),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = u()),
        n()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      const v = (() => {
        const {
            form: e,
            email: n,
            emailError: t,
          } = (() => {
            const e = document.querySelector("form"),
              n = document.querySelector("#user_email"),
              t = document.querySelector("#user_email + .error");
            function r() {
              n.validity.valueMissing
                ? (t.textContent = "You need to enter an email address")
                : n.validity.typeMismatch
                  ? (t.textContent =
                      "Entered value needs to be an email address")
                  : n.validity.tooShort &&
                    (t.textContent = `Email should be at least ${n.minLength} characters; you entered ${n.value.length}.`),
                (t.className = "error active");
            }
            return (
              n.addEventListener("input", (e) => {
                n.validity.valid
                  ? ((t.textContent = ""), (t.className = "error"))
                  : r();
              }),
              e.addEventListener("submit", (e) => {
                n.validity.valid || (r(), e.preventDefault());
              }),
              console.log("abelha"),
              { form: e, email: n, emailError: t }
            );
          })(),
          { country: r, countryError: o } = (() => {
            const e = document.querySelector("form"),
              n = document.querySelector("#country"),
              t = document.querySelector("#country + .error");
            function r() {
              n.validity.valueMissing &&
                (t.textContent = "You need to select a country"),
                (t.className = "error active");
            }
            return (
              n.addEventListener("click", () => {
                n.validity.valid
                  ? ((t.textContent = ""), (t.className = "error"))
                  : r(),
                  console.log("banana");
              }),
              e.addEventListener("submit", (e) => {
                n.validity.valid || (r(), e.preventDefault());
              }),
              { form: e, country: n, countryError: t }
            );
          })(),
          { zipCode: a, zipCodeError: i } = (() => {
            const e = document.querySelector("form"),
              n = document.querySelector("#zip_code"),
              t = document.querySelector("#zip_code + .error"),
              r = document.querySelector(".warnings");
            function o() {
              if (((t.className = "error active"), n.validity.valueMissing))
                t.textContent = "You need to enter a Zip Code";
              else if (n.validity.tooShort)
                t.textContent = `Zip Code should be at least ${n.minLength} characters; you entered ${n.value.length}.`;
              else {
                (t.className = "error"), i(r);
                const e = document.createElement("li");
                e.textContent = "Remember, you can only use numbers;";
                const n = document.createElement("li");
                n.textContent =
                  "The basic format consist of 5 digits, but you can add a hyphen and 4 more digits;";
                const o = document.createElement("li");
                (o.textContent =
                  "Some valid Zip Codes: 20521-9000; 42223; 85254;"),
                  r.append(e, n, o);
              }
            }
            function a(e) {
              return /^\d{5}(-\d{4})?$/.test(e);
            }
            function i(e) {
              e.replaceChildren();
            }
            return (
              n.addEventListener("input", () => {
                a(n.value)
                  ? ((t.textContent = ""), (t.className = "error"), i(r))
                  : o();
              }),
              e.addEventListener("submit", (e) => {
                !1 === a(n.value) && (o(), e.preventDefault());
              }),
              { form: e, zipCode: n, zipCodeError: t }
            );
          })();
        return {
          form: e,
          email: n,
          emailError: t,
          country: r,
          countryError: o,
          zipCode: a,
          zipCodeError: i,
        };
      })();
      v.form,
        v.email,
        v.emailError,
        v.country,
        v.countryError,
        v.zipCode,
        v.zipCodeError,
        console.log("abelha");
    })();
})();
//# sourceMappingURL=app.bundle.js.map
