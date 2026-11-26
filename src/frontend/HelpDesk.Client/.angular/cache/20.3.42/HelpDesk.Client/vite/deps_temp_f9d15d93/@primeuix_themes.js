import "./chunk-R2QGWZ7S.js";

// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function v() {
  let s4 = /* @__PURE__ */ new Map(), r3 = { on(n2, t3) {
    let e2 = s4.get(n2);
    return e2 ? e2.push(t3) : e2 = [t3], s4.set(n2, e2), r3;
  }, off(n2, t3) {
    let e2 = s4.get(n2);
    if (e2) {
      let o2 = e2.indexOf(t3);
      o2 !== -1 && e2.splice(o2, 1);
    }
    return r3;
  }, emit(n2, ...t3) {
    let e2 = s4.get(n2);
    e2 && e2.forEach((o2) => {
      o2(t3[0]);
    });
  }, clear() {
    s4.clear();
  } };
  return r3;
}

// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/object/index.mjs
var ce = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty;
var ge = Object.prototype.propertyIsEnumerable;
var q = (e2, t3, n2) => t3 in e2 ? ce(e2, t3, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t3] = n2;
var E = (e2, t3) => {
  for (var n2 in t3 || (t3 = {})) pe.call(t3, n2) && q(e2, n2, t3[n2]);
  if ($) for (var n2 of $(t3)) ge.call(t3, n2) && q(e2, n2, t3[n2]);
  return e2;
};
function p(e2) {
  return e2 == null || e2 === "" || Array.isArray(e2) && e2.length === 0 || !(e2 instanceof Date) && typeof e2 == "object" && Object.keys(e2).length === 0;
}
function m(e2) {
  return typeof e2 == "function" && "call" in e2 && "apply" in e2;
}
function l(e2) {
  return !p(e2);
}
function s(e2, t3 = true) {
  return e2 instanceof Object && e2.constructor === Object && (t3 || Object.keys(e2).length !== 0);
}
var me = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function S(e2, t3, n2, r3 = /* @__PURE__ */ new WeakSet()) {
  let o2 = E({}, e2);
  Object.keys(o2).length === 0 && !n2.has(t3) && n2.set(t3, o2);
  let u2 = !r3.has(t3);
  return u2 && r3.add(t3), Object.keys(t3).forEach((i2) => {
    var y, k2;
    if (me.has(i2)) return;
    let f = i2, a3 = t3[f];
    s(a3) && f in e2 && s(e2[f]) ? o2[f] = r3.has(a3) ? (y = n2.get(a3)) != null ? y : S({}, a3, n2, r3) : S(e2[f], a3, n2, r3) : s(a3) ? o2[f] = (k2 = n2.get(a3)) != null ? k2 : S({}, a3, n2, r3) : o2[f] = a3;
  }), u2 && r3.delete(t3), o2;
}
function F(...e2) {
  return e2.reduce((t3, n2) => S(t3, n2 || {}, /* @__PURE__ */ new WeakMap()), {});
}
function x(e2, ...t3) {
  return m(e2) ? e2(...t3) : e2;
}
function c(e2, t3 = true) {
  return typeof e2 == "string" && (t3 || e2 !== "");
}
function C(e2) {
  return c(e2) ? e2.replace(/(-|_)/g, "").toLowerCase() : e2;
}
function K(e2, t3 = "", n2 = {}) {
  let r3 = C(t3).split("."), o2 = r3.shift();
  if (o2) {
    if (s(e2) || Array.isArray(e2)) {
      let u2 = Object.keys(e2).find((i2) => C(i2) === o2) || "";
      return K(x(e2[u2], n2), r3.join("."), n2);
    }
    return;
  }
  return x(e2, n2);
}
function A(e2, t3 = true) {
  return Array.isArray(e2) && (t3 || e2.length !== 0);
}
function Z(e2) {
  return l(e2) && !isNaN(e2);
}
function H(e2, t3) {
  if (t3) {
    t3.lastIndex = 0;
    let n2 = t3.test(e2);
    return t3.lastIndex = 0, n2;
  }
  return false;
}
function Q(...e2) {
  return F(...e2);
}
function de(e2, t3) {
  let n2 = 0;
  for (; t3 - 1 - n2 >= 0 && e2[t3 - 1 - n2] === "\\"; ) n2++;
  return n2 % 2 === 1;
}
function X(e2) {
  return e2.replace(/[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function B(e2) {
  if (!e2) return e2;
  let t3 = "", n2 = "", r3 = 0;
  for (; r3 < e2.length; ) {
    let o2 = e2[r3];
    if (o2 === "/" && e2[r3 + 1] === "*") {
      let u2 = e2.indexOf("*/", r3 + 2);
      r3 = u2 === -1 ? e2.length : u2 + 2;
    } else if (o2 === '"' || o2 === "'") {
      t3 += X(n2), n2 = "";
      let u2 = r3 + 1;
      for (; u2 < e2.length && (e2[u2] !== o2 || de(e2, u2)); ) u2++;
      t3 += e2.slice(r3, Math.min(u2 + 1, e2.length)), r3 = u2 + 1;
    } else n2 += o2, r3++;
  }
  return (t3 + X(n2)).trim();
}
function N(e2 = {}, t3 = "") {
  return Object.entries(e2).reduce((n2, [r3, o2]) => {
    let u2 = t3 ? `${t3}.${r3}` : r3;
    return s(o2) ? n2 = n2.concat(N(o2, u2)) : n2.push(u2), n2;
  }, []);
}
function fe(e2) {
  return c(e2) ? e2.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e2;
}
function ae(e2) {
  return c(e2) ? e2.replace(/[A-Z]/g, (t3, n2) => n2 === 0 ? t3 : "." + t3.toLowerCase()).toLowerCase() : e2;
}

// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/dom/index.mjs
function Q2(t3) {
  return (t3 != null ? t3 : "").replace(/<\/(style)/gi, "<\\/$1");
}
function J(t3) {
  return String(t3).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function K2(t3 = {}) {
  return Object.keys(t3).filter((e2) => /^[^\s"'<>/=]+$/.test(e2)).map((e2) => `${e2}="${J(t3[e2])}"`);
}
function tt(t3, e2 = {}) {
  return t3 ? `<style${K2(e2).reduce((o2, n2) => `${o2} ${n2}`, "")}>${Q2(t3)}</style>` : "";
}

// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/zindex/index.mjs
function g() {
  let r3 = [], i2 = (e2, n2, t3 = 999) => {
    let s4 = u2(e2, n2, t3), o2 = s4.value + (s4.key === e2 ? 0 : t3) + 1;
    return r3.push({ key: e2, value: o2 }), o2;
  }, d2 = (e2) => {
    r3 = r3.filter((n2) => n2.value !== e2);
  }, a3 = (e2, n2) => u2(e2, n2).value, u2 = (e2, n2, t3 = 0) => [...r3].reverse().find((s4) => n2 ? true : s4.key === e2) || { key: e2, value: t3 }, l3 = (e2) => e2 && parseInt(e2.style.zIndex, 10) || 0;
  return { get: l3, set: (e2, n2, t3) => {
    n2 && (n2.style.zIndex = String(i2(e2, true, t3)));
  }, clear: (e2) => {
    e2 && (d2(l3(e2)), e2.style.zIndex = "");
  }, getCurrent: (e2) => a3(e2, false) };
}
var x2 = g();

// node_modules/@primeuix/themes/node_modules/@primeuix/styled/dist/chunk-J33ABP3O.mjs
var e = Object.defineProperty;
var t = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var s2 = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty;
var i = Object.prototype.propertyIsEnumerable;
var o = (t3, r3, s4) => r3 in t3 ? e(t3, r3, { enumerable: true, configurable: true, writable: true, value: s4 }) : t3[r3] = s4;
var l2 = (e2, t3) => {
  for (var r3 in t3 || (t3 = {})) n.call(t3, r3) && o(e2, r3, t3[r3]);
  if (s2) for (var r3 of s2(t3)) i.call(t3, r3) && o(e2, r3, t3[r3]);
  return e2;
};
var a = (e2, s4) => t(e2, r(s4));
var c2 = (e2, t3) => {
  var r3 = {};
  for (var o2 in e2) n.call(e2, o2) && t3.indexOf(o2) < 0 && (r3[o2] = e2[o2]);
  if (null != e2 && s2) for (var o2 of s2(e2)) t3.indexOf(o2) < 0 && i.call(e2, o2) && (r3[o2] = e2[o2]);
  return r3;
};
var d = v();
var $2 = /{([^{}]*)}/g;
var k = /(?:^|\D)(\d+\s+[+*/-]\s+\d+)/g;
var b = /var\((?:(?!var\()[^)])+\)/g;
function x3(e2) {
  return c(e2) ? e2.replace(/[A-Z]/g, (e3, t3) => 0 === t3 ? e3 : "." + e3.toLowerCase()).toLowerCase() : e2;
}
function O(e2, t3) {
  A(e2) ? e2.push(...t3 || []) : s(e2) && Object.assign(e2, t3);
}
function _(e2) {
  return s(e2) && Object.prototype.hasOwnProperty.call(e2, "$value") && Object.prototype.hasOwnProperty.call(e2, "$type") ? e2.$value : e2;
}
function w(e2, t3 = "") {
  if (!["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((e3) => t3.endsWith(e3))) {
    return `${e2}`.trim().split(" ").map((e3) => Z(e3) ? `${e3}px` : e3).join(" ");
  }
  return e2;
}
function C2(e2) {
  return /[^\w-]/.test(e2) ? e2.replace(/ /g, "").replace(/[^\w]/g, "-") : e2;
}
function P(e2 = "", t3 = "") {
  return C2(`${c(e2, false) && c(t3, false) ? `${e2}-` : e2}${t3}`);
}
function j(e2 = "", t3 = "") {
  return `--${P(e2, t3)}`;
}
function N2(e2 = "") {
  let t3 = 0;
  for (let r3 = 0; r3 < e2.length; r3++) {
    const s4 = e2.charCodeAt(r3);
    123 !== s4 && 125 !== s4 || t3++;
  }
  return t3 % 2 != 0;
}
var T = (e2) => -1 === e2.indexOf("\r") && -1 === e2.indexOf("\f") ? e2 : e2.replace(/\r\n?|\f/g, "\n");
var A2 = (e2) => 32 === e2 || 9 === e2 || 10 === e2 || 12 === e2 || 13 === e2;
var L = (e2) => e2 >= 48 && e2 <= 57 || (32 | e2) >= 97 && (32 | e2) <= 102;
var R = (e2) => e2 >= 128 || 45 === e2 || 95 === e2 || e2 >= 48 && e2 <= 57 || (32 | e2) >= 97 && (32 | e2) <= 122;
function M(e2) {
  if (-1 !== e2.indexOf("\0")) return false;
  const t3 = T(e2), r3 = t3.length;
  let s4 = 0, n2 = 0, i2 = false, o2 = 0;
  for (; o2 < r3; ) {
    const e3 = t3[o2++];
    if ("\\" === e3) {
      if (o2 >= r3) return false;
      let e4 = 0;
      for (; e4 < 6 && L(t3.charCodeAt(o2)); ) o2++, e4++;
      e4 ? A2(t3.charCodeAt(o2)) && o2++ : o2++, i2 = true;
    } else if ('"' === e3 || "'" === e3) for (; ; ) {
      if (o2 >= r3) return false;
      const s5 = t3[o2++];
      if (s5 === e3) break;
      if ("\\" === s5) o2++;
      else if ("\n" === s5 || "\r" === s5 || "\f" === s5) return false;
    }
    else if ("(" === e3) {
      if (i2) return false;
      if (108 == (32 | t3.charCodeAt(o2 - 2)) && 114 == (32 | t3.charCodeAt(o2 - 3)) && 117 == (32 | t3.charCodeAt(o2 - 4)) && !R(t3.charCodeAt(o2 - 5)) && "#" !== t3[o2 - 5] && "@" !== t3[o2 - 5]) {
        let e4 = o2;
        for (; e4 < r3 && A2(t3.charCodeAt(e4)); ) e4++;
        if ('"' !== t3[e4] && "'" !== t3[e4]) {
          for (; ; ) {
            if (e4 >= r3) return false;
            const s5 = t3.charCodeAt(e4++);
            if (41 === s5) break;
            if (A2(s5)) {
              for (; e4 < r3 && A2(t3.charCodeAt(e4)); ) e4++;
              if (41 !== t3.charCodeAt(e4++)) return false;
              break;
            }
            if (34 === s5 || 39 === s5 || 40 === s5 || s5 <= 8 || 11 === s5 || s5 >= 14 && s5 <= 31 || 127 === s5) return false;
            if (92 === s5) {
              if (e4 >= r3 || 10 === t3.charCodeAt(e4)) return false;
              let s6 = 0;
              for (; s6 < 6 && L(t3.charCodeAt(e4)); ) e4++, s6++;
              s6 ? A2(t3.charCodeAt(e4)) && e4++ : e4++;
            }
          }
          o2 = e4;
          continue;
        }
      }
      if (n2++ > 29) return false;
      s4 <<= 1;
    } else if ("[" === e3) {
      if (n2++ > 29) return false;
      s4 = s4 << 1 | 1;
    } else if (")" === e3 || "]" === e3) {
      if (n2-- < 1 || (1 & s4) != ("]" === e3 ? 1 : 0)) return false;
      s4 >>= 1;
    } else if ("/" === e3 && "*" === t3[o2]) {
      const e4 = t3.indexOf("*/", o2 + 1);
      if (e4 < 0) return false;
      o2 = e4 + 2;
    } else {
      if (";" === e3 || "{" === e3 || "}" === e3 || "<" === e3) return false;
      R(t3.charCodeAt(o2 - 1)) || (i2 = false);
    }
  }
  return 0 === n2;
}
function V(e2, t3 = "", r3 = "", s4 = [], n2) {
  if (c(e2)) {
    if (e2.length > 1e5) return;
    const t4 = e2.trim();
    if (N2(t4)) return;
    if (H(t4, $2)) {
      const e3 = t4.replace($2, (e4) => {
        const t5 = e4.replace(/{|}/g, "").split(".").filter((e5) => !s4.some((t6) => H(e5, t6)));
        return `var(${j(r3, fe(t5.join("-")))}${l(n2) ? `, ${n2}` : ""})`;
      });
      if (!M(e3)) return;
      return H(e3.replace(b, "0"), k) ? `calc(${e3})` : e3;
    }
    return M(t4) ? t4 : void 0;
  }
  if (Z(e2)) return e2;
}
function E2(e2 = {}, t3) {
  if (c(t3)) {
    const r3 = t3.trim();
    return H(r3, $2) ? r3.replace($2, (t4) => K(e2, t4.replace(/{|}/g, ""))) : r3;
  }
  if (Z(t3)) return t3;
}
function I(e2, t3, r3) {
  c(t3, false) && e2.push(`${t3}:${r3};`);
}
function D(e2, t3) {
  return e2 ? `${e2}{${t3}}` : "";
}
var K3;
var W = ["icon"];
function z(e2, t3) {
  if (!t3 || "p" === t3 || "string" != typeof e2 || !e2) return e2;
  const r3 = /^p-[a-z]/.test(t3) ? `p\\-${t3.slice(2)}` : t3, { css: s4, attribute: n2 } = null != K3 ? K3 : (() => {
    const e3 = `(?!(?:${W.join("|")})(?!\\w))`, t4 = new RegExp(String.raw`\/\*[\s\S]*?(?:\*\/|$)|"(?:[^"\\\n\r\f]|\\[\s\S])*"?|'(?:[^'\\\n\r\f]|\\[\s\S])*'?|\\[\s\S]|(?:^|[^\w\\-])[uU][rR][lL]\((?!\s*["'])[^)]*\)?|(\.p-${e3}(?=[a-z]))|(\[\s*[cC][lL][aA][sS][sS]\s*[~^*]=\s*(?:"[ \t]*p-(?:[^"\\\n\r\f]|\\[\s\S])*"?|'[ \t]*p-(?:[^'\\\n\r\f]|\\[\s\S])*'?|p-))`, "g");
    return null != K3 ? K3 : K3 = { css: t4, attribute: new RegExp(String.raw`(=\s*["']?[ \t]*)p-${e3}`) };
  })();
  return e2.replace(s4, (e3, t4, s5) => t4 ? `.${r3}-` : s5 ? s5.replace(n2, (e4, t5) => `${t5}${r3}-`) : e3);
}
function U(e2, t3) {
  let r3 = e2.indexOf("dt(");
  if (-1 === r3) return e2;
  const s4 = [];
  for (; -1 !== r3; ) {
    let t4 = 1, n3 = e2.indexOf("dt(", r3 + 3), i3 = e2.indexOf(")", r3 + 3);
    for (; -1 !== i3; ) if (-1 !== n3 && n3 < i3) t4++, n3 = e2.indexOf("dt(", n3 + 3);
    else {
      if (0 === --t4) break;
      i3 = e2.indexOf(")", i3 + 1);
    }
    if (-1 === i3) break;
    s4.push([r3, i3]), r3 = e2.indexOf("dt(", i3 + 1);
  }
  if (!s4.length) return e2;
  const n2 = new Array(s4.length);
  for (let r4 = s4.length - 1; r4 >= 0; r4--) {
    const [i3, o3] = s4[r4];
    n2[r4] = String(t3(...Z2(e2.slice(i3 + 3, o3), t3)));
  }
  let i2 = "", o2 = 0;
  for (let t4 = 0; t4 < s4.length; t4++) i2 += e2.slice(o2, s4[t4][0]) + n2[t4], o2 = s4[t4][1] + 1;
  return i2 + e2.slice(o2);
}
function Z2(e2, t3) {
  const r3 = [];
  let s4 = 0, n2 = null, i2 = 0;
  for (let o2 = 0; o2 <= e2.length; o2++) {
    const l3 = e2[o2];
    if ('"' !== l3 && "'" !== l3 && "`" !== l3 || "\\" === e2[o2 - 1] || (n2 = n2 === l3 ? null : l3), !n2 && ("(" === l3 && i2++, ")" === l3 && i2--, ("," === l3 || o2 === e2.length) && 0 === i2)) {
      const n3 = e2.slice(s4, o2).trim();
      r3.push(n3.startsWith("dt(") ? U(n3, t3) : q2(n3)), s4 = o2 + 1;
    }
  }
  return r3;
}
function q2(e2) {
  const t3 = e2[0];
  if (('"' === t3 || "'" === t3 || "`" === t3) && e2[e2.length - 1] === t3) return e2.slice(1, -1);
  const r3 = Number(e2);
  return isNaN(r3) ? e2 : r3;
}
var F2 = "primeui.base";
function G(e2, t3) {
  const r3 = null == t3 ? void 0 : t3.replace(/^@layer\s*/, "").replace(/;\s*$/, "").trim();
  if (e2 && r3) {
    const t4 = r3.split(",").map((e3) => e3.trim()), s5 = t4.indexOf(e2.slice(0, e2.lastIndexOf(".")));
    if (s5 > 0) return t4.splice(s5 + 1, 0, e2), `@layer ${t4.join(",")};`;
  }
  const s4 = [e2, r3].filter(l).join(",");
  return l(s4) ? `@layer ${s4};` : t3;
}
function H2(e2) {
  return 4 === e2.length ? `#${e2[1]}${e2[1]}${e2[2]}${e2[2]}${e2[3]}${e2[3]}` : e2;
}
function J2(e2) {
  const t3 = parseInt(e2.substring(1), 16);
  return { r: t3 >> 16 & 255, g: t3 >> 8 & 255, b: 255 & t3 };
}
var Q3 = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
var X2 = (e2, t3, r3) => {
  if (!Q3.test(e2) || !Q3.test(t3)) return t3;
  e2 = H2(e2), t3 = H2(t3);
  const s4 = (2 * (r3 / 100) - 1 + 1) / 2, n2 = 1 - s4, i2 = J2(e2), o2 = J2(t3);
  return (function(e3, t4, r4) {
    return `#${e3.toString(16).padStart(2, "0")}${t4.toString(16).padStart(2, "0")}${r4.toString(16).padStart(2, "0")}`;
  })(Math.round(i2.r * s4 + o2.r * n2), Math.round(i2.g * s4 + o2.g * n2), Math.round(i2.b * s4 + o2.b * n2));
};
var Y = (e2, t3) => X2("#000000", e2, t3);
var ee = (e2, t3) => X2("#ffffff", e2, t3);
var me2 = { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false, cssVariables: true, scoped: false } };
var ge2 = (e2, t3, r3) => ({ name: t3, theme: e2.theme, params: r3, defaults: e2.defaults, region: e2._region(), set: { layerNames: e2.setLayerNames.bind(e2) }, dt: e2._dt });
var ve = /^[A-Za-z_][\w-]*$/;
var ye = (e2) => {
  if (void 0 !== e2 && "" !== e2 && ("string" != typeof e2 || !ve.test(e2))) throw new TypeError('[primeuix] classPrefix takes letters, digits, "_" or "-".');
};
var Se = class {
  constructor(e2) {
    this.defaults = me2, this._theme = void 0, this._layerNames = /* @__PURE__ */ new Set(), this._loadedStyleNames = /* @__PURE__ */ new Set(), this._loadingStyles = /* @__PURE__ */ new Set(), this._tokens = {}, this._scopedTokenPaths = /* @__PURE__ */ new Set();
    for (let e3 = Object.getPrototypeOf(this); e3 && e3 !== Object.prototype; e3 = Object.getPrototypeOf(e3)) for (const t3 of Object.getOwnPropertyNames(e3)) "constructor" === t3 || Object.prototype.hasOwnProperty.call(this, t3) || Object.defineProperty(this, t3, a(l2({}, Object.getOwnPropertyDescriptor(e3, t3)), { enumerable: true }));
    this.service = e2;
  }
  static get defaults() {
    return me2;
  }
  _styleId() {
    return this.key ? this.styleName.bind(this) : void 0;
  }
  _region() {
  }
  styleName(e2) {
    var t3;
    const { prefix: r3 = "p", classPrefix: s4 = "p" } = this.options, n2 = null != (t3 = this.key) ? t3 : "p" === s4 ? "" : `${r3}-${s4}`;
    return n2 ? `${e2}@${n2}` : e2;
  }
  update(e2 = {}) {
    const { theme: t3 } = e2;
    if (t3) {
      const e3 = l2(l2({}, this.defaults.options), t3.options);
      ye(e3.classPrefix), this._theme = a(l2({}, t3), { options: e3 }), this._tokens = Be.createTokens(this.preset, this.defaults), this.resetCaches();
    }
  }
  get theme() {
    return this._theme;
  }
  get preset() {
    var e2;
    return (null == (e2 = this.theme) ? void 0 : e2.preset) || {};
  }
  get options() {
    var e2;
    return (null == (e2 = this.theme) ? void 0 : e2.options) || {};
  }
  get tokens() {
    return this._tokens;
  }
  hasScopedTokenPath(e2) {
    return this._scopedTokenPaths.has(e2);
  }
  getScopedTokenPaths() {
    return [...this._scopedTokenPaths];
  }
  addScopedToken(e2) {
    let t3 = false;
    return l(e2) && N(e2).forEach((e3) => {
      const r3 = ae(e3);
      this._scopedTokenPaths.has(r3) || (this._scopedTokenPaths.add(r3), t3 = true);
    }), t3;
  }
  clearScopedTokenPaths() {
    this._scopedTokenPaths.clear();
  }
  getTheme() {
    return this.theme;
  }
  setTheme(e2) {
    this.update({ theme: e2 }), this.service.emit("theme:change", e2);
  }
  getPreset() {
    return this.preset;
  }
  setPreset(e2) {
    this._theme = a(l2({}, this.theme), { preset: e2 }), this._tokens = Be.createTokens(e2, this.defaults), this.resetCaches(), this.service.emit("preset:change", e2), this.service.emit("theme:change", this.theme);
  }
  getOptions() {
    return this.options;
  }
  setOptions(e2) {
    ye(null == e2 ? void 0 : e2.classPrefix), this._theme = a(l2({}, this.theme), { options: e2 }), this.resetStyleCaches(), this.service.emit("options:change", e2), this.service.emit("theme:change", this.theme);
  }
  resetStyleCaches() {
    this.clearLoadedStyleNames(), this.clearLayerNames();
  }
  resetCaches() {
    this.resetStyleCaches(), this.clearScopedTokenPaths();
  }
  getLayerNames() {
    return [...this._layerNames];
  }
  setLayerNames(e2) {
    this._layerNames.add(e2);
  }
  clearLayerNames() {
    this._layerNames.clear();
  }
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  }
  isStyleNameLoaded(e2) {
    return this._loadedStyleNames.has(e2);
  }
  setLoadedStyleName(e2) {
    this._loadedStyleNames.add(e2);
  }
  deleteLoadedStyleName(e2) {
    this._loadedStyleNames.delete(e2);
  }
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
  getTokenValue(e2) {
    return Be.getTokenValue(this.tokens, e2, this.defaults);
  }
  getCommon(e2 = "", t3) {
    return Be.getCommon(ge2(this, e2, t3));
  }
  getComponent(e2 = "", t3) {
    return Be.getPresetC(ge2(this, e2, t3));
  }
  getDirective(e2 = "", t3) {
    return Be.getPresetD(ge2(this, e2, t3));
  }
  getCustomPreset(e2 = "", t3, r3, s4) {
    var n2, i2, o2;
    const c3 = l2({}, this._region());
    return r3 && Object.assign(c3, { selector: null != (i2 = null == (n2 = c3.within) ? void 0 : n2.call(c3, r3)) ? i2 : r3, darkSelector: null == (o2 = c3.within) ? void 0 : o2.call(c3, r3, true) }), Be.getPreset(a(l2({}, ge2(this, e2, s4)), { preset: t3, options: this.options, region: c3, isScopedTokenPaths: true }));
  }
  getLayerOrderCSS(e2 = "") {
    return Be.getLayerOrder(e2, this.options, { names: this.getLayerNames() }, this.defaults);
  }
  transformCSS(e2 = "", t3, r3 = "style", s4) {
    return Be.transformCSS(e2, t3, s4, r3, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults, void 0, this._region());
  }
  getCommonStyleSheet(e2 = "", t3, r3 = {}, s4) {
    return Be.getCommonStyleSheet(a(l2({}, ge2(this, e2, t3)), { props: r3, styleId: null != s4 ? s4 : this._styleId() }));
  }
  getStyleSheet(e2, t3, r3 = {}, s4) {
    return Be.getStyleSheet(a(l2({}, ge2(this, e2, t3)), { props: r3, styleId: null != s4 ? s4 : this._styleId() }));
  }
  onStyleMounted(e2) {
    this._loadingStyles.add(e2);
  }
  onStyleUpdated(e2) {
    this._loadingStyles.add(e2);
  }
  onStyleLoaded(e2, { name: t3 }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t3), this.service.emit(`theme:${t3}:load`, e2), this._loadingStyles.size || this.service.emit("theme:load"));
  }
};
var $e = new Se(d);
var xe = (e2, t3, r3, s4, n2, i2) => {
  if ("string" != typeof t3) return null != t3 ? t3 : e2.getTokenValue(r3);
  if ($2.lastIndex = 0, !$2.test(t3)) return t3;
  const o2 = r3.slice(0, r3.indexOf("."));
  return V(t3.replace($2, (t4) => {
    const r4 = t4.slice(1, -1), s5 = r4.indexOf(".");
    if ((-1 === s5 ? r4 : r4.slice(0, s5)) !== o2) return t4;
    const n3 = e2.getTokenValue(r4);
    return null == n3 ? t4 : `${n3}`;
  }), void 0, s4, [n2], i2);
};
var Oe = (e2, t3, r3, s4, n2) => {
  var i2, o2, l3, a3;
  const c3 = ((e3, t4) => {
    const r4 = e3.split(".");
    let s5 = "";
    for (let e4 = 0; e4 < r4.length; e4++) {
      const n3 = x3(r4[e4]);
      t4.lastIndex = 0, t4.test(n3) || (s5 = s5 ? `${s5}.${n3}` : n3);
    }
    return s5;
  })(t3, s4), u2 = e2.tokens;
  let d2 = Be._caches.strict.get(u2);
  d2 || Be._caches.strict.set(u2, d2 = /* @__PURE__ */ new Map());
  const h = null == n2 || "object" != typeof n2, p2 = h && null != n2 ? `${r3}|${c3}|${n2}` : `${r3}|${c3}`;
  let f = h ? d2.get(p2) : void 0;
  if (!(void 0 !== f || h && d2.has(p2))) {
    const t4 = null == (i2 = u2[c3]) ? void 0 : i2.paths, m2 = null == t4 ? void 0 : t4.find((e3) => "none" === e3.scheme), g2 = null != (o2 = null == t4 ? void 0 : t4.find((e3) => "light" === e3.scheme)) ? o2 : m2, v2 = null != (l3 = null == t4 ? void 0 : t4.find((e3) => "dark" === e3.scheme)) ? l3 : m2;
    if (g2 && v2 && g2 !== v2) {
      const t5 = xe(e2, g2.value, c3, r3, s4, n2), i3 = xe(e2, v2.value, c3, r3, s4, n2);
      f = t5 === i3 ? t5 : `light-dark(${t5},${i3})`;
    } else f = xe(e2, null == (a3 = null != g2 ? g2 : v2) ? void 0 : a3.value, c3, r3, s4, n2);
    "string" != typeof f || M(f) || (f = void 0), h && d2.set(p2, f);
  }
  return e2.hasScopedTokenPath(c3) ? V(`{${c3}}`, void 0, r3, [s4], f) : f;
};
var _e = (e2) => we($e, e2);
var we = (e2, t3) => {
  var r3, s4, n2;
  const i2 = e2.getTheme(), o2 = `${null != (r3 = je(e2, i2, t3, void 0, "variable")) ? r3 : ""}`;
  return { name: null != (n2 = null == (s4 = o2.match(/--[\w-]+/g)) ? void 0 : s4[0]) ? n2 : "", variable: o2, value: je(e2, i2, t3, void 0, "value") };
};
var Ce = (e2, t3, r3) => je($e, $e.getTheme(), e2, t3, r3);
var Pe = (e2 = {}, t3, r3, s4) => je($e, e2, t3, r3, s4);
var je = (e2, t3 = {}, r3, s4, n2) => {
  var i2, o2, l3, a3, c3;
  if (!r3) return "";
  const u2 = e2.defaults, d2 = null == t3 ? void 0 : t3.options, h = null == u2 ? void 0 : u2.variable, p2 = null != (o2 = null == d2 ? void 0 : d2.prefix) ? o2 : null == (i2 = null == u2 ? void 0 : u2.options) ? void 0 : i2.prefix, f = null == (c3 = null != (a3 = null == d2 ? void 0 : d2.cssVariables) ? a3 : null == (l3 = null == u2 ? void 0 : u2.options) ? void 0 : l3.cssVariables) || c3;
  if ("value" === n2) return e2.getTokenValue(r3);
  if (p(n2) && !f) return Oe(e2, r3, p2, h.excludedKeyRegex, s4);
  const m2 = "object" == typeof s4 && null !== s4 || !h.excludedKeyRegex ? void 0 : Ae(h.excludedKeyRegex), g2 = m2 && `${p2}\0${r3}\0${null != s4 ? s4 : ""}\0${void 0 === s4 ? 0 : "number" == typeof s4 ? 1 : 2}`;
  let v2 = null == m2 ? void 0 : m2.get(g2);
  if (void 0 === v2 && !(null == m2 ? void 0 : m2.has(g2))) {
    v2 = V(H(r3, $2) ? r3 : `{${r3}}`, void 0, p2, [h.excludedKeyRegex], s4), m2 && (m2.size >= Ne && m2.clear(), m2.set(g2, v2));
  }
  return v2;
};
var Ne = 4096;
var Te = /* @__PURE__ */ new WeakMap();
var Ae = (e2) => {
  let t3 = Te.get(e2);
  return t3 || Te.set(e2, t3 = /* @__PURE__ */ new Map()), t3;
};
var Me = (...e2) => {
  var t3;
  return `${null != (t3 = Ce(...e2)) ? t3 : ""}`;
};
function Ie(e2, ...t3) {
  var r3;
  const s4 = null == (r3 = $e.getOptions()) ? void 0 : r3.classPrefix;
  if (e2 instanceof Array) {
    return z(U(e2.reduce((e3, r4, s5) => {
      var n2;
      return e3 + r4 + (null != (n2 = x(t3[s5], { dt: Ce })) ? n2 : "");
    }, ""), Me), s4);
  }
  return z(x(e2, { dt: Ce }), s4);
}
var Ke = (e2 = {}, t3 = $e) => {
  let { preset: r3, options: s4 } = e2;
  return { preset(e3) {
    return r3 = r3 ? Q(r3, e3) : e3, this;
  }, options(e3) {
    return s4 = s4 ? l2(l2({}, s4), e3) : e3, this;
  }, primaryPalette(e3) {
    const { semantic: t4 } = r3 || {};
    return r3 = a(l2({}, r3), { semantic: a(l2({}, t4), { primary: e3 }) }), this;
  }, surfacePalette(e3) {
    var t4, s5, n2;
    const i2 = null != (t4 = null == r3 ? void 0 : r3.semantic) ? t4 : {}, o2 = e3 && Object.prototype.hasOwnProperty.call(e3, "light") ? e3.light : e3, c3 = e3 && Object.prototype.hasOwnProperty.call(e3, "dark") ? e3.dark : e3, u2 = { colorScheme: { light: l2(l2({}, null == (s5 = i2.colorScheme) ? void 0 : s5.light), !!o2 && { surface: o2 }), dark: l2(l2({}, null == (n2 = i2.colorScheme) ? void 0 : n2.dark), !!c3 && { surface: c3 }) } };
    return r3 = a(l2({}, r3), { semantic: l2(l2({}, i2), u2) }), this;
  }, define: ({ useDefaultPreset: e3 = false, useDefaultOptions: n2 = false } = {}) => ({ preset: e3 ? t3.getPreset() : r3, options: n2 ? t3.getOptions() : s4 }), update({ mergePresets: e3 = true, mergeOptions: n2 = true } = {}) {
    const i2 = { preset: e3 ? Q(t3.getPreset(), null != r3 ? r3 : {}) : r3, options: n2 ? l2(l2({}, t3.getOptions()), s4) : s4 };
    return t3.setTheme(i2), i2;
  }, use(e3) {
    const r4 = this.define(e3);
    return t3.setTheme(r4), r4;
  } };
};
function Ze(e2, t3 = {}) {
  const r3 = $e.defaults.variable, { prefix: s4 = r3.prefix, selector: n2 = r3.selector, excludedKeyRegex: i2 = r3.excludedKeyRegex } = t3, o2 = [], l3 = [], a3 = [{ node: e2, path: s4 }];
  for (; a3.length; ) {
    const { node: e3, path: t4 } = a3.pop();
    for (const r4 of Object.keys(e3)) {
      const n3 = _(e3[r4]), c4 = H(r4, i2) ? P(t4) : P(t4, fe(r4));
      if (s(n3)) a3.push({ node: n3, path: c4 });
      else {
        const e4 = j(c4), t5 = V(n3, c4, s4, [i2]);
        void 0 === t5 && "string" == typeof n3 || I(l3, e4, null == t5 ? t5 : `${t5}`);
        let r5 = c4;
        s4 && r5.startsWith(s4 + "-") && (r5 = r5.slice(s4.length + 1)), o2.push(r5.replace(/-/g, "."));
      }
    }
  }
  const c3 = l3.join("");
  return { value: l3, tokens: o2, declarations: c3, css: D(n2, c3) };
}
var qe = (...e2) => [...new Set(e2.flatMap((e3) => null != e3 ? e3 : []))];
var Be = { _caches: { value: /* @__PURE__ */ new WeakMap(), strict: /* @__PURE__ */ new WeakMap() }, regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e2) {
  return { type: "class", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e2) {
  const t3 = /^(\[[^\]]*\])+$/.test(e2.trim()) ? `:host(${e2})` : `:host${e2}`;
  return { type: "attr", selector: `:root${e2},${t3}`, matched: this.pattern.test(e2.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e2) {
  return { type: "media", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, system: { pattern: /^system$/, resolve(e2) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e2.trim()) };
} }, custom: { resolve: (e2) => ({ type: "custom", selector: e2, matched: true }) } }, resolve(e2) {
  const t3 = Object.keys(this.rules).filter((e3) => "custom" !== e3).map((e3) => this.rules[e3]);
  return [e2].flat().map((e3) => {
    var r3;
    return null != (r3 = t3.map((t4) => t4.resolve(e3)).find((e4) => e4.matched)) ? r3 : this.rules.custom.resolve(e3);
  });
} }, _toVariables: (e2, t3) => Ze(e2, { prefix: null == t3 ? void 0 : t3.prefix }), getCommon({ name: e2 = "", theme: t3 = {}, params: r3, set: s4, defaults: n2, selector: i2, region: o2, dt: l3 }) {
  const { preset: a3, options: u2 } = t3;
  let d2, h, p2, f, m2, g2, v2;
  if (l(a3)) {
    const { primitive: t4, semantic: r4, extend: y } = a3, S2 = r4 || {}, { colorScheme: $3 } = S2, k2 = c2(S2, ["colorScheme"]), b2 = y || {}, { colorScheme: x4 } = b2, O2 = c2(b2, ["colorScheme"]), _2 = $3 || {}, { dark: w2 } = _2, C3 = c2(_2, ["dark"]), P3 = x4 || {}, { dark: j2 } = P3, N3 = c2(P3, ["dark"]), T2 = (e3, t5) => {
      var r5;
      const s5 = l(t5) ? this._toVariables({ [e3]: t5 }, u2) : {};
      return [null != (r5 = s5.declarations) ? r5 : "", s5.tokens];
    }, [A3, L2] = T2("primitive", t4), [R2, M2] = T2("semantic", k2), [V2, E3] = T2("light", C3), [I3, D3] = T2("dark", w2), [K5, W3] = T2("semantic", O2), [U3, Z3] = T2("light", N3), [q4, B2] = T2("dark", j2);
    d2 = this.transformCSS(e2, A3, "light", "variable", u2, s4, n2, i2, o2), h = L2;
    p2 = `${this.transformCSS(e2, `${R2}${V2}`, "light", "variable", u2, s4, n2, i2, o2)}${this.transformCSS(e2, `${I3}`, "dark", "variable", u2, s4, n2, i2, o2)}`, f = qe(M2, E3, D3);
    m2 = `${this.transformCSS(e2, `${K5}${U3}color-scheme:light`, "light", "variable", u2, s4, n2, i2, o2)}${this.transformCSS(e2, `${q4}color-scheme:dark`, "dark", "variable", u2, s4, n2, i2, o2)}`, g2 = qe(W3, Z3, B2), v2 = z(x(a3.css, { dt: null != l3 ? l3 : Ce }), null == u2 ? void 0 : u2.classPrefix);
  }
  return { primitive: { css: d2, tokens: h }, semantic: { css: p2, tokens: f }, global: { css: m2, tokens: g2 }, style: v2 };
}, getPreset({ name: e2 = "", preset: t3 = {}, options: r3, params: s4, set: n2, defaults: i2, selector: o2, region: a3, isScopedTokenPaths: u2, dt: d2 }) {
  var h, p2, f, m2;
  let g2, v2, y;
  if (l(t3) && (null == (h = null == r3 ? void 0 : r3.cssVariables) || h || u2)) {
    const s5 = e2.replace("-directive", ""), u3 = t3, { colorScheme: h2, extend: S2, css: $3 } = u3, k2 = c2(u3, ["colorScheme", "extend", "css"]), b2 = S2 || {}, { colorScheme: x4 } = b2, O2 = c2(b2, ["colorScheme"]), _2 = h2 || {}, { dark: w2 } = _2, C3 = c2(_2, ["dark"]), P3 = x4 || {}, { dark: j2 } = P3, N3 = c2(P3, ["dark"]), T2 = l(k2) ? this._toVariables({ [s5]: l2(l2({}, k2), O2) }, r3) : {}, A3 = l(C3) ? this._toVariables({ [s5]: l2(l2({}, C3), N3) }, r3) : {}, L2 = l(w2) ? this._toVariables({ [s5]: l2(l2({}, w2), j2) }, r3) : {};
    g2 = `${this.transformCSS(s5, `${null != (p2 = T2.declarations) ? p2 : ""}${null != (f = A3.declarations) ? f : ""}`, "light", "variable", r3, n2, i2, o2, a3)}${this.transformCSS(s5, null != (m2 = L2.declarations) ? m2 : "", "dark", "variable", r3, n2, i2, o2, a3)}`, v2 = qe(T2.tokens, A3.tokens, L2.tokens), y = z(x($3, { dt: null != d2 ? d2 : Ce }), null == r3 ? void 0 : r3.classPrefix);
  }
  return { css: g2, tokens: v2, style: y };
}, getScopedSelector(e2, t3) {
  if ((null == t3 ? void 0 : t3.scoped) && e2) return `[data-styled="${e2}"]`;
}, withinRuntime: (e2, t3) => e2 && t3 ? `${t3} ${e2}` : null != e2 ? e2 : t3, withinRegion(e2, t3, r3 = {}) {
  var s4;
  const n2 = e2 && !t3 && (null == (s4 = r3.within) ? void 0 : s4.call(r3, e2));
  return a(l2({}, r3), n2 ? { selector: n2, darkSelector: r3.within(e2, true) } : { selector: this.withinRuntime(e2, null != t3 ? t3 : r3.selector), darkSelector: r3.darkSelector && this.withinRuntime(e2, r3.darkSelector) });
}, getPresetC({ name: e2 = "", theme: t3 = {}, params: r3, set: s4, defaults: n2, selector: i2, region: o2, dt: l3 }) {
  var a3;
  const { preset: c3, options: u2 } = t3, d2 = null == (a3 = null == c3 ? void 0 : c3.components) ? void 0 : a3[e2], h = this.getScopedSelector(e2, u2);
  return this.getPreset({ name: e2, preset: d2, options: u2, params: r3, set: s4, defaults: n2, region: this.withinRegion(h, i2, o2), dt: l3 });
}, getPresetD({ name: e2 = "", theme: t3 = {}, params: r3, set: s4, defaults: n2, selector: i2, region: o2, dt: l3 }) {
  var a3, c3;
  const u2 = e2.replace("-directive", ""), { preset: d2, options: h } = t3, p2 = (null == (a3 = null == d2 ? void 0 : d2.components) ? void 0 : a3[u2]) || (null == (c3 = null == d2 ? void 0 : d2.directives) ? void 0 : c3[u2]), f = this.getScopedSelector(u2, h);
  return this.getPreset({ name: u2, preset: p2, options: h, params: r3, set: s4, defaults: n2, region: this.withinRegion(f, i2, o2), dt: l3 });
}, applyDarkColorScheme(e2) {
  const t3 = e2.darkModeSelector;
  return !("none" === t3 || false === t3);
}, getColorSchemeOption(e2, t3) {
  var r3;
  return this.applyDarkColorScheme(e2) ? this.regex.resolve(true === e2.darkModeSelector ? t3.options.darkModeSelector : null != (r3 = e2.darkModeSelector) ? r3 : t3.options.darkModeSelector) : [];
}, getLayerOrder(e2, t3 = {}, r3, s4) {
  const { cssLayer: n2 } = t3;
  if (n2) {
    return `@layer ${x(n2.order || n2.name || "primeui", r3)}`;
  }
  return "";
}, getCommonStyleSheet({ name: e2 = "", theme: t3 = {}, params: r3, props: s4 = {}, set: n2, defaults: i2, selector: o2, region: l3, styleId: a3 = (e3) => e3, dt: c3 }) {
  const u2 = this.getCommon({ name: e2, theme: t3, params: r3, set: n2, defaults: i2, selector: o2, region: l3, dt: c3 }), d2 = K2(s4).join(" ");
  return Object.entries(u2 || {}).reduce((e3, [t4, r4]) => {
    if (s(r4) && Object.prototype.hasOwnProperty.call(r4, "css")) {
      const s5 = B(r4.css);
      e3.push(`<style type="text/css" ${this.styleIdAttributes(a3(`${t4}-variables`))} ${d2}>${Q2(s5)}</style>`);
    }
    return e3;
  }, []).join("");
}, getStyleSheet({ name: e2 = "", theme: t3 = {}, params: r3, props: s4 = {}, set: n2, defaults: i2, selector: o2, region: l3, styleId: a3 = (e3) => e3, dt: c3 }) {
  var u2;
  const d2 = { name: e2, theme: t3, params: r3, set: n2, defaults: i2, selector: o2, region: l3, dt: c3 }, h = null == (u2 = e2.includes("-directive") ? this.getPresetD(d2) : this.getPresetC(d2)) ? void 0 : u2.css, p2 = K2(s4).join(" ");
  return h ? `<style type="text/css" ${this.styleIdAttributes(a3(`${e2}-variables`))} ${p2}>${Q2(B(h))}</style>` : "";
}, styleIdAttributes: (e2) => `data-primevue-style-id="${J(e2)}"`, createTokens(e2 = {}, t3, r3 = "", s4 = "", n2 = /* @__PURE__ */ Object.create(null)) {
  const i2 = function(e3, t4, r4, s5) {
    return e3.replace($2, (e4) => {
      var n3;
      const i3 = e4.slice(1, -1), o3 = this.tokens[i3];
      if (!o3) return console.warn(`Token not found for path: ${i3}`), "__UNRESOLVED__";
      const l4 = o3.computed(t4, r4, s5);
      if (Array.isArray(l4) && 2 === l4.length) {
        const e5 = l4[0].value, t5 = l4[1].value;
        return e5 === t5 ? null != e5 ? e5 : "__UNRESOLVED__" : `light-dark(${e5},${t5})`;
      }
      return null != (n3 = null == l4 ? void 0 : l4.value) ? n3 : "__UNRESOLVED__";
    });
  }, o2 = function(e3, t4, r4, s5) {
    if (-1 === e3.indexOf("light-dark(")) return e3;
    const n3 = [], l4 = e3.length;
    let a4 = 0;
    for (; a4 < l4; ) {
      const c3 = e3.indexOf("light-dark(", a4);
      if (-1 === c3) {
        n3.push(e3.slice(a4));
        break;
      }
      n3.push(e3.slice(a4, c3));
      let u2 = 1, d2 = c3 + 11, h = -1;
      for (; d2 < l4 && u2 > 0; ) {
        const t5 = e3.charCodeAt(d2);
        40 === t5 ? u2++ : 41 === t5 ? u2-- : 44 === t5 && 1 === u2 && -1 === h && (h = d2), d2++;
      }
      if (0 !== u2 || -1 === h) {
        n3.push(e3.slice(c3));
        break;
      }
      const p2 = e3.slice(c3 + 11, h).trim(), f = e3.slice(h + 1, d2 - 1).trim();
      if ("light" === t4 || "dark" === t4) n3.push(o2.call(this, "light" === t4 ? p2 : f, t4, r4, s5));
      else {
        const e4 = i2.call(this, o2.call(this, p2, "light", r4, s5), "light", r4, s5), t5 = i2.call(this, o2.call(this, f, "dark", r4, s5), "dark", r4, s5);
        n3.push(e4 === t5 ? e4 : `light-dark(${e4},${t5})`);
      }
      a4 = d2;
    }
    return n3.join("");
  }, l3 = function(e3, t4 = {}, r4 = []) {
    if (r4.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: e3, path: this.path, paths: t4, value: void 0 };
    r4.push(this.path), t4.name = this.path, t4.binding || (t4.binding = {});
    let s5 = this.value;
    if ("string" == typeof this.value) {
      const n3 = this.value.trim(), l4 = -1 !== n3.indexOf("light-dark("), a4 = -1 !== n3.indexOf("{");
      if (l4 || a4) {
        const a5 = l4 ? o2.call(this, n3, e3, t4, r4) : n3, c3 = -1 !== a5.indexOf("{") ? i2.call(this, a5, e3, t4, r4) : a5;
        k.lastIndex = 0, b.lastIndex = 0, s5 = k.test(c3.replace(b, "0")) ? `calc(${c3})` : c3;
      }
    }
    return p(t4.binding) && delete t4.binding, r4.pop(), { colorScheme: e3, path: this.path, paths: t4, value: "string" == typeof s5 && -1 !== s5.indexOf("__UNRESOLVED__") ? void 0 : s5 };
  }, a3 = (e3, r4, s5) => {
    Object.entries(e3).forEach(([e4, i3]) => {
      const o3 = H(e4, t3.variable.excludedKeyRegex) ? r4 : r4 ? `${r4}.${x3(e4)}` : x3(e4), c3 = s5 ? [s5, e4].join(".") : e4;
      if (s(i3)) a3(i3, o3, c3);
      else {
        const e5 = { path: c3, value: i3, scheme: c3.includes("colorScheme.light") ? "light" : c3.includes("colorScheme.dark") ? "dark" : "none", computed: l3, tokens: n2 }, t4 = n2[o3];
        if (t4) t4.paths.push(e5);
        else {
          const t5 = { paths: [e5] };
          t5.computed = /* @__PURE__ */ ((e6) => (t6, r5 = {}, s6 = []) => {
            const n3 = e6.paths;
            if (1 === n3.length) {
              const e7 = n3[0], i4 = "none" !== e7.scheme ? e7.scheme : t6;
              return e7.computed(i4, r5.binding, s6);
            }
            if (t6 && "none" !== t6) for (let e7 = 0; e7 < n3.length; e7++) {
              const i4 = n3[e7];
              if (i4.scheme === t6) return i4.computed(t6, r5.binding, s6);
            }
            return n3.map((e7) => e7.computed(e7.scheme, r5[e7.scheme], s6));
          })(t5), n2[o3] = t5;
        }
      }
    });
  };
  return a3(e2, r3, s4), n2;
}, getTokenValue(e2, t3, r3) {
  let s4 = this._caches.value.get(e2);
  s4 || this._caches.value.set(e2, s4 = /* @__PURE__ */ new Map());
  const n2 = s4.get(t3);
  if (void 0 !== n2 || s4.has(t3)) return n2;
  const i2 = r3.variable.excludedKeyRegex, o2 = t3.split("."), l3 = [];
  for (let e3 = 0; e3 < o2.length; e3++) {
    const t4 = o2[e3];
    i2.lastIndex = 0, i2.test(t4.toLowerCase()) || l3.push(t4);
  }
  const a3 = l3.join("."), c3 = -1 !== t3.indexOf("colorScheme.light") ? "light" : -1 !== t3.indexOf("colorScheme.dark") ? "dark" : void 0, u2 = e2[a3];
  if (!(null == u2 ? void 0 : u2.paths)) return void s4.set(t3, void 0);
  const d2 = (e3) => {
    var t4;
    const r4 = u2.computed(e3);
    return Array.isArray(r4) ? null == (t4 = r4.find((t5) => (null == t5 ? void 0 : t5.colorScheme) === e3)) ? void 0 : t4.value : null == r4 ? void 0 : r4.value;
  };
  let h;
  if (c3) h = d2(c3);
  else {
    const e3 = d2("light"), t4 = d2("dark");
    h = void 0 === e3 && void 0 === t4 ? void 0 : void 0 === e3 ? t4 : void 0 === t4 || e3 === t4 ? e3 : `light-dark(${e3},${t4})`;
  }
  return s4.set(t3, h), h;
}, getSelectorRule(e2, t3, r3, s4, n2 = ":root,:host", i2) {
  if ("class" === r3 || "attr" === r3) {
    if (!t3) return D(e2, s4);
    const n3 = e2.split(/,(?=:host\()/).flatMap((e3) => {
      if (e3.startsWith(":host")) return [`${e3} ${t3}`];
      return [("attr" === r3 && /^:root(\[[^\]]*\])+$/.test(e3) ? e3.slice(5) : e3) + t3, `${e3} ${t3}`];
    });
    return D((null == i2 ? void 0 : i2.darkSelector) ? [...n3, i2.darkSelector].join(",") : n3.join(","), s4);
  }
  return D(e2, D(null != t3 ? t3 : n2, s4));
}, transformCSS(e2, t3, r3, s4, n2 = {}, i2, o2, l3, a3) {
  var c3, u2;
  if (l(t3)) {
    const { cssLayer: d2 } = n2;
    if ("style" === s4) t3 = z(t3, n2.classPrefix), (null == a3 ? void 0 : a3.scope) && (t3 = a3.scope(t3));
    else {
      const e3 = this.getColorSchemeOption(n2, o2), s5 = null != (u2 = null == (c3 = null == o2 ? void 0 : o2.variable) ? void 0 : c3.selector) ? u2 : ":root,:host", i3 = null != l3 ? l3 : null == a3 ? void 0 : a3.selector;
      t3 = "dark" === r3 ? e3.reduce((e4, { type: r4, selector: n3 }) => (l(n3) && (e4 += n3.includes("[CSS]") ? n3.replace("[CSS]", () => t3) : this.getSelectorRule(n3, i3, r4, t3, s5, a3)), e4), "") : D(null != i3 ? i3 : s5, t3);
    }
    if (d2) {
      const r4 = { name: "primeui", order: "primeui" };
      s(d2) && (r4.name = x(d2.name, { name: e2, type: s4 })), l(r4.name) && (t3 = D(`@layer ${r4.name}`, t3), null == i2 || i2.layerNames(r4.name));
    }
    return t3;
  }
  return "";
} };
var Fe = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var Ge = (e2) => {
  if (H(e2, $2)) {
    const t3 = e2.replace(/{|}/g, "");
    return Fe.reduce((e3, r3) => (e3[r3] = `{${t3}.${r3}}`, e3), {});
  }
  return Fe.reduce((t3, r3, s4) => (t3[r3] = s4 <= 5 ? ee(e2, 19 * (5 - s4)) : Y(e2, 15 * (s4 - 5)), t3), {});
};

// node_modules/@primeuix/themes/node_modules/@primeuix/styled/dist/index.mjs
function U2(e2, ...t3) {
  return F(e2, ...t3);
}
var W2 = (e2) => {
  let s4 = q3.get(e2);
  return s4 || (s4 = { usePreset(t3, ...s5) {
    const r3 = F(t3, ...s5);
    return e2.setPreset(r3), r3;
  }, updatePreset(...t3) {
    const s5 = F(e2.getPreset(), ...t3);
    return e2.setPreset(s5), s5;
  }, useTheme: (s5) => Ke(s5, e2).update({ mergePresets: false, mergeOptions: false }), updatePrimaryPalette: (s5) => Ke({}, e2).primaryPalette(null != s5 ? s5 : {}).update().preset, updateSurfacePalette: (s5) => Ke({}, e2).surfacePalette(null != s5 ? s5 : {}).update().preset }, q3.set(e2, s4)), s4;
};
var q3 = /* @__PURE__ */ new WeakMap();
function D2(...e2) {
  const t3 = F($e.getPreset(), ...e2);
  return $e.setPreset(t3), t3;
}
function F3(e2) {
  return Ke().primaryPalette(null != e2 ? e2 : {}).update().preset;
}
function G2(e2) {
  return Ke().surfacePalette(null != e2 ? e2 : {}).update().preset;
}
function I2(e2, ...t3) {
  const s4 = F(e2, ...t3);
  return $e.setPreset(s4), s4;
}
function K4(e2) {
  return Ke(e2).update({ mergePresets: false, mergeOptions: false });
}
var Q4 = class {
  constructor({ attrs: e2 } = {}) {
    this._styles = /* @__PURE__ */ new Map(), this._attrs = e2 || {};
  }
  get(e2) {
    return this._styles.get(e2);
  }
  has(e2) {
    return this._styles.has(e2);
  }
  delete(e2) {
    this._styles.delete(e2);
  }
  clear() {
    this._styles.clear();
  }
  add(e2, t3) {
    if (l(t3)) {
      const s4 = { name: e2, css: t3, attrs: this._attrs, markup: tt(t3, this._attrs) };
      this._styles.set(e2, a(l2({}, s4), { element: this.createStyleElement(s4) }));
    }
  }
  update() {
  }
  getStyles() {
    return this._styles;
  }
  getAllCSS() {
    return [...this._styles.values()].map((e2) => e2.css).filter((e2) => !!e2);
  }
  getAllMarkup() {
    return [...this._styles.values()].map((e2) => e2.markup).filter((e2) => !!e2);
  }
  getAllElements() {
    return [...this._styles.values()].map((e2) => e2.element);
  }
  createStyleElement(e2 = {}) {
  }
};

// node_modules/@primeuix/themes/dist/index.mjs
var t2 = (t3, ...a3) => U2(t3, ...a3);
var a2 = (...t3) => D2(...t3);
var r2 = (t3) => F3(t3);
var s3 = (t3) => G2(t3);
var u = (t3, ...a3) => I2(t3, ...a3);
var P2 = (theme) => K4(theme);
export {
  _e as $dt,
  Ke as $t,
  k as CALC_REGEX,
  W as CLASS_PREFIX_KEEP,
  $2 as EXPR_REGEX,
  F2 as PREFLIGHT_LAYER,
  Q4 as StyleSheet,
  $e as Theme,
  d as ThemeService,
  Be as ThemeUtils,
  b as VAR_REGEX,
  G as composeLayerOrder,
  Ie as css,
  t2 as definePreset,
  Ce as dt,
  Pe as dtwt,
  U as evaluateDtExpressions,
  W2 as getActionsInstance,
  E2 as getComputedValue,
  D as getRule,
  j as getVariableName,
  V as getVariableValue,
  N2 as hasOddBraces,
  O as merge,
  X2 as mix,
  Ge as palette,
  I as setProperty,
  Y as shade,
  ee as tint,
  C2 as toNormalizePrefix,
  P as toNormalizeVariable,
  x3 as toTokenKey,
  w as toUnit,
  _ as toValue,
  Ze as toVariables,
  a2 as updatePreset,
  r2 as updatePrimaryPalette,
  s3 as updateSurfacePalette,
  u as usePreset,
  P2 as useTheme
};
//# sourceMappingURL=@primeuix_themes.js.map
