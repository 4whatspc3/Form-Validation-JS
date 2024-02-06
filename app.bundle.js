(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => s });
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
            '* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  width: 100%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n  background-color: orange;\n  padding: 10px;\n}\n\n.title p {\n  text-align: center;\n}\n\n.main-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-container {\n  min-height: 350px;\n  width: 400px;\n  border-radius: 10px;\n  border: 1px solid orange;\n  border-bottom: 20px solid orange;\n  padding: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: left;\n  gap: 20px;\n}\n\ninput[type="email"] {\n  appearance: none;\n  border: 1px solid #000000;\n  margin: 0;\n  font-size: 90%;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:focus:invalid {\n  outline: none;\n}\n\nul {\n  list-style-type: none;\n}\n\n.error,\nul {\n  font-weight: bold;\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  margin-top: 6px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nul.warnings.active {\n  padding: 6px;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAIA;;EAEE,YAAY;EACZ;4DAC0D;AAC5D;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd",
              sourcesContent: [
                '* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  width: 100%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n  background-color: orange;\n  padding: 10px;\n}\n\n.title p {\n  text-align: center;\n}\n\n.main-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-container {\n  min-height: 350px;\n  width: 400px;\n  border-radius: 10px;\n  border: 1px solid orange;\n  border-bottom: 20px solid orange;\n  padding: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: left;\n  gap: 20px;\n}\n\ninput[type="email"] {\n  appearance: none;\n  border: 1px solid #000000;\n  margin: 0;\n  font-size: 90%;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:focus:invalid {\n  outline: none;\n}\n\nul {\n  list-style-type: none;\n}\n\n.error,\nul {\n  font-weight: bold;\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  margin-top: 6px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nul.warnings.active {\n  padding: 6px;\n}\n',
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
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
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
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var A = t(u),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== A) n[A].references++, n[A].updater(p);
            else {
              var m = o(p, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: u, updater: m, references: 1 });
            }
            i.push(u);
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
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = c;
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
        s = t(565),
        c = t.n(s),
        l = t(216),
        d = t.n(l),
        u = t(589),
        A = t.n(u),
        p = t(426),
        m = {};
      (m.styleTagTransform = A()),
        (m.setAttributes = c()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = d()),
        n()(p.Z, m),
        p.Z && p.Z.locals && p.Z.locals;
      const f = () => {
          const e = document.querySelector("form"),
            n = document.querySelector("#confirm_password"),
            t = document.querySelector("#confirm_password + .error");
          function r() {
            confirm_password.validity.valueMissing
              ? (t.textContent = "You need to type the password again")
              : confirm_password.value !== password.value &&
                (t.textContent = "Password does not match, try again"),
              (t.className = "error active");
          }
          return (
            n.addEventListener("input", (e) => {
              confirm_password.value === password.value
                ? ((t.textContent = ""), (t.className = "error"))
                : r();
            }),
            e.addEventListener("submit", (e) => {
              confirm_password.value !== password.value &&
                (r(), e.preventDefault());
            }),
            { form: e, confirm_password, confirmError: t }
          );
        },
        v = (() => {
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
                    : r();
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
                r = document.querySelector(".zip_code.warnings");
              function o() {
                if (((t.className = "error active"), n.validity.valueMissing))
                  t.textContent = "You need to enter a Zip Code";
                else if (n.validity.tooShort)
                  t.textContent = `Zip Code should be at least ${n.minLength} characters; you entered ${n.value.length}.`;
                else {
                  (t.className = "error"),
                    (t.textContent = ""),
                    (r.className = "zip_code warnings active"),
                    i(r);
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
                    ? ((t.textContent = ""),
                      (t.className = "error"),
                      (r.className = "zip_code warnings"),
                      i(r))
                    : o();
                }),
                e.addEventListener("submit", (e) => {
                  !1 === a(n.value) && (o(), e.preventDefault());
                }),
                { form: e, zipCode: n, zipCodeError: t }
              );
            })(),
            { password: s, passwordError: c } = (() => {
              const e = document.querySelector("form"),
                n = document.querySelector("#password"),
                t = document.querySelector("#password + .error"),
                r = document.querySelector(".password.warnings");
              let o;
              function a() {
                if (((t.className = "error active"), n.validity.valueMissing))
                  t.textContent = "You need to create a password";
                else {
                  (t.textContent = "The password must contain:"),
                    (t.className = "error"),
                    (t.textContent = ""),
                    (r.className = "password warnings active"),
                    i(r);
                  const e = document.createElement("li");
                  e.textContent = "Min. 8 characters;";
                  const n = document.createElement("li");
                  n.textContent = "Include lowercase letter;";
                  const o = document.createElement("li");
                  o.textContent = "Include uppercase letter;";
                  const a = document.createElement("li");
                  a.textContent = "Include number;";
                  const s = document.createElement("li");
                  (s.textContent = "Include a special character: #.-?!@$%^&*"),
                    r.append(e, n, o, a, s);
                }
              }
              function i(e) {
                e.replaceChildren();
              }
              return (
                n.addEventListener("input", () => {
                  var e;
                  n.value.length >= 8 &&
                  ((e = n.value), /[a-z]/.test(e)) &&
                  (function (e) {
                    return /[A-Z]/.test(e);
                  })(n.value) &&
                  (function (e) {
                    return /\d/.test(e);
                  })(n.value) &&
                  (function (e) {
                    return /[#.?!@$%^&*-]/.test(e);
                  })(n.value)
                    ? (i(r),
                      (t.textContent = ""),
                      (t.className = "error"),
                      (r.className = "password warnings"),
                      (o = !0))
                    : a();
                }),
                e.addEventListener("submit", (e) => {
                  !0 !== o && (a(), e.preventDefault());
                }),
                { form: e, password: n, passwordError: t }
              );
            })(),
            { confirm_password: l, confirmError: d } = f();
          return {
            form: e,
            email: n,
            emailError: t,
            country: r,
            countryError: o,
            zipCode: a,
            zipCodeError: i,
            password: s,
            passwordError: c,
            confirm_password: l,
            confirmError: d,
          };
        })();
      for (let e in v) v[e];
    })();
})();
//# sourceMappingURL=app.bundle.js.map
