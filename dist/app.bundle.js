(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(537),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
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
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [t].concat([a]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = r.base ? c[0] + r.base : c[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = n(d),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: d, updater: f, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              t[s].references--;
            }
            for (var c = r(e, o), u = 0; u < a.length; u++) {
              var l = n(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        i = n.n(a),
        s = n(565),
        c = n.n(s),
        u = n(216),
        l = n.n(u),
        d = n(589),
        p = n.n(d),
        m = n(426),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = c()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = l()),
        t()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      const v = () => {
          const e = document.querySelector("form"),
            t = document.querySelector("#confirm_password"),
            n = document.querySelector("#confirm_password + .error");
          function r() {
            confirm_password.validity.valueMissing
              ? (n.textContent = "You need to type the password again")
              : confirm_password.value !== password.value &&
                (n.textContent = "Password does not match, try again"),
              (n.className = "error active");
          }
          return (
            t.addEventListener("input", (e) => {
              confirm_password.value === password.value
                ? ((n.textContent = ""), (n.className = "error"))
                : r();
            }),
            e.addEventListener("submit", (e) => {
              confirm_password.value !== password.value &&
                (r(), e.preventDefault());
            }),
            { form: e, confirm_password, confirmError: n }
          );
        },
        A = (() => {
          const {
              form: e,
              email: t,
              emailError: n,
            } = (() => {
              const e = document.querySelector("form"),
                t = document.querySelector("#user_email"),
                n = document.querySelector("#user_email + .error");
              function r() {
                t.validity.valueMissing
                  ? (n.textContent = "You need to enter an email address")
                  : t.validity.typeMismatch
                    ? (n.textContent =
                        "Entered value needs to be an email address")
                    : t.validity.tooShort &&
                      (n.textContent = `Email should be at least ${t.minLength} characters; you entered ${t.value.length}.`),
                  (n.className = "error active");
              }
              return (
                t.addEventListener("input", (e) => {
                  t.validity.valid
                    ? ((n.textContent = ""), (n.className = "error"))
                    : r();
                }),
                e.addEventListener("submit", (e) => {
                  t.validity.valid || (r(), e.preventDefault());
                }),
                { form: e, email: t, emailError: n }
              );
            })(),
            { country: r, countryError: o } = (() => {
              const e = document.querySelector("form"),
                t = document.querySelector("#country"),
                n = document.querySelector("#country + .error");
              function r() {
                t.validity.valueMissing &&
                  (n.textContent = "You need to select a country"),
                  (n.className = "error active");
              }
              return (
                t.addEventListener("click", () => {
                  t.validity.valid
                    ? ((n.textContent = ""), (n.className = "error"))
                    : r();
                }),
                e.addEventListener("submit", (e) => {
                  t.validity.valid || (r(), e.preventDefault());
                }),
                { form: e, country: t, countryError: n }
              );
            })(),
            { zipCode: a, zipCodeError: i } = (() => {
              const e = document.querySelector("form"),
                t = document.querySelector("#zip_code"),
                n = document.querySelector("#zip_code + .error"),
                r = document.querySelector(".zip_code.warnings");
              function o() {
                if (((n.className = "error active"), t.validity.valueMissing))
                  n.textContent = "You need to enter a Zip Code";
                else if (t.validity.tooShort)
                  n.textContent = `Zip Code should be at least ${t.minLength} characters; you entered ${t.value.length}.`;
                else {
                  (n.className = "error"), i(r);
                  const e = document.createElement("li");
                  e.textContent = "Remember, you can only use numbers;";
                  const t = document.createElement("li");
                  t.textContent =
                    "The basic format consist of 5 digits, but you can add a hyphen and 4 more digits;";
                  const o = document.createElement("li");
                  (o.textContent =
                    "Some valid Zip Codes: 20521-9000; 42223; 85254;"),
                    r.append(e, t, o);
                }
              }
              function a(e) {
                return /^\d{5}(-\d{4})?$/.test(e);
              }
              function i(e) {
                e.replaceChildren();
              }
              return (
                t.addEventListener("input", () => {
                  a(t.value)
                    ? ((n.textContent = ""), (n.className = "error"), i(r))
                    : o();
                }),
                e.addEventListener("submit", (e) => {
                  !1 === a(t.value) && (o(), e.preventDefault());
                }),
                { form: e, zipCode: t, zipCodeError: n }
              );
            })(),
            { password: s, passwordError: c } = (() => {
              const e = document.querySelector("form"),
                t = document.querySelector("#password"),
                n = document.querySelector("#password + .error"),
                r = document.querySelector(".password.warnings");
              let o;
              function a() {
                if (((n.className = "error active"), t.validity.valueMissing))
                  n.textContent = "You need to create a password";
                else {
                  (n.textContent = "The password must contain:"), i(r);
                  const e = document.createElement("li");
                  e.textContent = "Min. 8 characters;";
                  const t = document.createElement("li");
                  t.textContent = "Include lowercase letter;";
                  const o = document.createElement("li");
                  o.textContent = "Include uppercase letter;";
                  const a = document.createElement("li");
                  a.textContent = "Include number;";
                  const s = document.createElement("li");
                  (s.textContent = "Include a special character: #.-?!@$%^&*"),
                    r.append(e, t, o, a, s);
                }
              }
              function i(e) {
                e.replaceChildren();
              }
              return (
                t.addEventListener("input", () => {
                  var e;
                  t.value.length >= 8 &&
                  ((e = t.value), /[a-z]/.test(e)) &&
                  (function (e) {
                    return /[A-Z]/.test(e);
                  })(t.value) &&
                  (function (e) {
                    return /\d/.test(e);
                  })(t.value) &&
                  (function (e) {
                    return /[#.?!@$%^&*-]/.test(e);
                  })(t.value)
                    ? (i(r),
                      (n.textContent = ""),
                      (n.className = "error"),
                      (o = !0))
                    : a();
                }),
                e.addEventListener("submit", (e) => {
                  !0 !== o && (a(), e.preventDefault());
                }),
                { form: e, password: t, passwordError: n }
              );
            })(),
            { confirm_password: u, confirmError: l } = v();
          return {
            form: e,
            email: t,
            emailError: n,
            country: r,
            countryError: o,
            zipCode: a,
            zipCodeError: i,
            password: s,
            passwordError: c,
            confirm_password: u,
            confirmError: l,
          };
        })();
      for (let e in A) A[e];
    })();
})();
//# sourceMappingURL=app.bundle.js.map
