function ts_isRTL() {}! function (t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function (x, t) {
	"use strict";
	var e = [],
		k = x.document,
		i = Object.getPrototypeOf,
		s = e.slice,
		p = e.concat,
		l = e.push,
		r = e.indexOf,
		n = {},
		o = n.toString,
		b = n.hasOwnProperty,
		a = b.toString,
		c = a.call(Object),
		$ = {},
		g = function (t) {
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		m = function (t) {
			return null != t && t === t.window
		},
		u = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function v(t, e, n) {
		var i, r = (e = e || k).createElement("script");
		if (r.text = t, n)
			for (i in u) n[i] && (r[i] = n[i]);
		e.head.appendChild(r).parentNode.removeChild(r)
	}

	function y(t) {
		return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
	}
	var C = function (t, e) {
			return new C.fn.init(t, e)
		},
		h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function f(t) {
		var e = !!t && "length" in t && t.length,
			n = y(t);
		return !g(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}
	C.fn = C.prototype = {
		jquery: "3.3.1",
		constructor: C,
		length: 0,
		toArray: function () {
			return s.call(this)
		},
		get: function (t) {
			return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function (t) {
			var e = C.merge(this.constructor(), t);
			return e.prevObject = this, e
		},
		each: function (t) {
			return C.each(this, t)
		},
		map: function (n) {
			return this.pushStack(C.map(this, function (t, e) {
				return n.call(t, e, t)
			}))
		},
		slice: function () {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (t) {
			var e = this.length,
				n = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= n && n < e ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: e.sort,
		splice: e.splice
	}, C.extend = C.fn.extend = function () {
		var t, e, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (t = arguments[s]))
				for (e in t) n = a[e], a !== (i = t[e]) && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, a[e] = C.extend(c, o, i)) : void 0 !== i && (a[e] = i));
		return a
	}, C.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (t) {
			throw new Error(t)
		},
		noop: function () {},
		isPlainObject: function (t) {
			var e, n;
			return !(!t || "[object Object]" !== o.call(t) || (e = i(t)) && ("function" != typeof (n = b.call(e, "constructor") && e.constructor) || a.call(n) !== c))
		},
		isEmptyObject: function (t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		globalEval: function (t) {
			v(t)
		},
		each: function (t, e) {
			var n, i = 0;
			if (f(t))
				for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for (i in t)
					if (!1 === e.call(t[i], i, t[i])) break; return t
		},
		trim: function (t) {
			return null == t ? "" : (t + "").replace(h, "")
		},
		makeArray: function (t, e) {
			var n = e || [];
			return null != t && (f(Object(t)) ? C.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
		},
		inArray: function (t, e, n) {
			return null == e ? -1 : r.call(e, t, n)
		},
		merge: function (t, e) {
			for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
			return t.length = r, t
		},
		grep: function (t, e, n) {
			for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)!e(t[r], r) !== a && i.push(t[r]);
			return i
		},
		map: function (t, e, n) {
			var i, r, o = 0,
				a = [];
			if (f(t))
				for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r);
			else
				for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
			return p.apply([], a)
		},
		guid: 1,
		support: $
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = e[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
		n["[object " + e + "]"] = e.toLowerCase()
	});
	var _ = function (n) {
		var t, _, v, o, r, d, h, p, y, l, c, w, x, a, k, b, s, u, $, C = "sizzle" + 1 * new Date,
			g = n.document,
			T = 0,
			i = 0,
			f = bv(),
			m = bv(),
			S = bv(),
			E = function (t, e) {
				return t === e && (c = !0), 0
			},
			j = {}.hasOwnProperty,
			e = [],
			A = e.pop,
			O = e.push,
			F = e.push,
			L = e.slice,
			N = function (t, e) {
				for (var n = 0, i = t.length; n < i; n++)
					if (t[n] === e) return n;
				return -1
			},
			D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			P = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			R = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
			I = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
			q = new RegExp(P + "+", "g"),
			W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
			H = new RegExp("^" + P + "*," + P + "*"),
			B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
			U = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
			X = new RegExp(I),
			Q = new RegExp("^" + M + "$"),
			z = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + I),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + D + ")$", "i"),
				needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
			},
			K = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			V = /^[^{]+\{\s*\[native \w/,
			G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			J = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
			be = function (t, e, n) {
				var i = "0x" + e - 65536;
				return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			nt = function (t, e) {
				return e ? "\0" === t ? "?" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
			},
			it = function () {
				w()
			},
			rt = by(function (t) {
				return !0 === t.disabled && ("form" in t || "label" in t)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			F.apply(e = L.call(g.childNodes), g.childNodes), e[g.childNodes.length].nodeType
		} catch (n) {
			F = {
				apply: e.length ? function (t, e) {
					O.apply(t, L.call(e))
				} : function (t, e) {
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}

		function ot(t, e, n, i) {
			var r, o, a, s, l, c, u, h = e && e.ownerDocument,
				f = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
			if (!i && ((e ? e.ownerDocument || e : g) !== x && w(e), e = e || x, k)) {
				if (11 !== f && (l = G.exec(t)))
					if (r = l[1]) {
						if (9 === f) {
							if (!(a = e.getElementById(r))) return n;
							if (a.id === r) return n.push(a), n
						} else if (h && (a = h.getElementById(r)) && $(e, a) && a.id === r) return n.push(a), n
					} else {
						if (l[2]) return F.apply(n, e.getElementsByTagName(t)), n;
						if ((r = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return F.apply(n, e.getElementsByClassName(r)), n
					}
				if (_.qsa && !S[t + " "] && (!b || !b.test(t))) {
					if (1 !== f) h = e, u = t;
					else if ("object" !== e.nodeName.toLowerCase()) {
						for ((s = e.getAttribute("id")) ? s = s.replace(et, nt) : e.setAttribute("id", s = C), o = (c = d(t)).length; o--;) c[o] = "#" + s + " " + $t(c[o]);
						u = c.join(","), h = J.test(t) && pt(e.parentNode) || e
					}
					if (u) try {
						return F.apply(n, h.querySelectorAll(u)), n
					} catch (t) {} finally {
						s === C && e.removeAttribute("id")
					}
				}
			}
			return p(t.replace(W, "$1"), e, n, i)
		}

		function bv() {
			var i = [];
			return function t(e, n) {
				return i.push(e + " ") > v.cacheLength && delete t[i.shift()], t[e + " "] = n
			}
		}

		function st(t) {
			return t[C] = !0, t
		}

		function bw(t) {
			var e = x.createElement("fieldset");
			try {
				return !!t(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function ct(t, e) {
			for (var n = t.split("|"), i = n.length; i--;) v.attrHandle[n[i]] = e
		}

		function ut(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === e) return -1;
			return t ? 1 : -1
		}

		function ht(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function ft(n) {
			return function (t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === n
			}
		}

		function _t(e) {
			return function (t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function bx(a) {
			return st(function (o) {
				return o = +o, st(function (t, e) {
					for (var n, i = a([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
				})
			})
		}

		function pt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for (t in _ = ot.support = {}, r = ot.isXML = function (t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return !!e && "HTML" !== e.nodeName
		}, w = ot.setDocument = function (t) {
			var e, n, i = t ? t.ownerDocument || t : g;
			return i !== x && 9 === i.nodeType && i.documentElement && (a = (x = i).documentElement, k = !r(x), g !== x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), _.attributes = bw(function (t) {
				return t.className = "i", !t.getAttribute("className")
			}), _.getElementsByTagName = bw(function (t) {
				return t.appendChild(x.createComment("")), !t.getElementsByTagName("*").length
			}), _.getElementsByClassName = V.test(x.getElementsByClassName), _.getById = bw(function (t) {
				return a.appendChild(t).id = C, !x.getElementsByName || !x.getElementsByName(C).length
			}), _.getById ? (v.filter.ID = function (t) {
				var e = t.replace(Z, be);
				return function (t) {
					return t.getAttribute("id") === e
				}
			}, v.find.ID = function (t, e) {
				if (void 0 !== e.getElementById && k) {
					var n = e.getElementById(t);
					return n ? [n] : []
				}
			}) : (v.filter.ID = function (t) {
				var n = t.replace(Z, be);
				return function (t) {
					var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
					return e && e.value === n
				}
			}, v.find.ID = function (t, e) {
				if (void 0 !== e.getElementById && k) {
					var n, i, r, o = e.getElementById(t);
					if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
						for (r = e.getElementsByName(t), i = 0; o = r[i++];)
							if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
					}
					return []
				}
			}), v.find.TAG = _.getElementsByTagName ? function (t, e) {
				return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
			} : function (t, e) {
				var n, i = [],
					r = 0,
					o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, v.find.CLASS = _.getElementsByClassName && function (t, e) {
				if (void 0 !== e.getElementsByClassName && k) return e.getElementsByClassName(t)
			}, s = [], b = [], (_.qsa = V.test(x.querySelectorAll)) && (bw(function (t) {
				a.appendChild(t).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + P + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + P + "*(?:value|" + D + ")"), t.querySelectorAll("[id~=" + C + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + C + "+*").length || b.push(".#.+[+~]")
			}), bw(function (t) {
				t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var e = x.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + P + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
			})), (_.matchesSelector = V.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && bw(function (t) {
				_.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), s.push("!=", I)
			}), b = b.length && new RegExp(b.join("|")), s = s.length && new RegExp(s.join("|")), e = V.test(a.compareDocumentPosition), $ = e || V.test(a.contains) ? function (t, e) {
				var n = 9 === t.nodeType ? t.documentElement : t,
					i = e && e.parentNode;
				return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
			} : function (t, e) {
				if (e)
					for (; e = e.parentNode;)
						if (e === t) return !0;
				return !1
			}, E = e ? function (t, e) {
				if (t === e) return c = !0, 0;
				var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === x || t.ownerDocument === g && $(g, t) ? -1 : e === x || e.ownerDocument === g && $(g, e) ? 1 : l ? N(l, t) - N(l, e) : 0 : 4 & n ? -1 : 1)
			} : function (t, e) {
				if (t === e) return c = !0, 0;
				var n, i = 0,
					r = t.parentNode,
					o = e.parentNode,
					a = [t],
					s = [e];
				if (!r || !o) return t === x ? -1 : e === x ? 1 : r ? -1 : o ? 1 : l ? N(l, t) - N(l, e) : 0;
				if (r === o) return ut(t, e);
				for (n = t; n = n.parentNode;) a.unshift(n);
				for (n = e; n = n.parentNode;) s.unshift(n);
				for (; a[i] === s[i];) i++;
				return i ? ut(a[i], s[i]) : a[i] === g ? -1 : s[i] === g ? 1 : 0
			}), x
		}, ot.matches = function (t, e) {
			return ot(t, null, null, e)
		}, ot.matchesSelector = function (t, e) {
			if ((t.ownerDocument || t) !== x && w(t), e = e.replace(U, "='$1']"), _.matchesSelector && k && !S[e + " "] && (!s || !s.test(e)) && (!b || !b.test(e))) try {
				var n = u.call(t, e);
				if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
			} catch (t) {}
			return 0 < ot(e, x, null, [t]).length
		}, ot.contains = function (t, e) {
			return (t.ownerDocument || t) !== x && w(t), $(t, e)
		}, ot.attr = function (t, e) {
			(t.ownerDocument || t) !== x && w(t);
			var n = v.attrHandle[e.toLowerCase()],
				i = n && j.call(v.attrHandle, e.toLowerCase()) ? n(t, e, !k) : void 0;
			return void 0 !== i ? i : _.attributes || !k ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}, ot.escape = function (t) {
			return (t + "").replace(et, nt)
		}, ot.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, ot.uniqueSort = function (t) {
			var e, n = [],
				i = 0,
				r = 0;
			if (c = !_.detectDuplicates, l = !_.sortStable && t.slice(0), t.sort(E), c) {
				for (; e = t[r++];) e === t[r] && (i = n.push(r));
				for (; i--;) t.splice(n[i], 1)
			}
			return l = null, t
		}, o = ot.getText = function (t) {
			var e, n = "",
				i = 0,
				r = t.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
				} else if (3 === r || 4 === r) return t.nodeValue
			} else
				for (; e = t[i++];) n += o(e);
			return n
		}, (v = ot.selectors = {
			cacheLength: 50,
			createPseudo: st,
			match: z,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (t) {
					return t[1] = t[1].replace(Z, be), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function (t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
				},
				PSEUDO: function (t) {
					var e, n = !t[6] && t[2];
					return z.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t) {
					var e = t.replace(Z, be).toLowerCase();
					return "*" === t ? function () {
						return !0
					} : function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function (t) {
					var e = f[t + " "];
					return e || (e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) && f(t, function (t) {
						return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function (n, i, r) {
					return function (t) {
						var e = ot.attr(t, n);
						return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(q, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
					}
				},
				CHILD: function (d, t, e, p, b) {
					var $ = "nth" !== d.slice(0, 3),
						g = "last" !== d.slice(-4),
						m = "of-type" === t;
					return 1 === p && 0 === b ? function (t) {
						return !!t.parentNode
					} : function (t, e, n) {
						var i, r, o, a, s, l, c = $ !== g ? "nextSibling" : "previousSibling",
							u = t.parentNode,
							h = m && t.nodeName.toLowerCase(),
							f = !n && !m,
							_ = !1;
						if (u) {
							if ($) {
								for (; c;) {
									for (a = t; a = a[c];)
										if (m ? a.nodeName.toLowerCase() === h : 1 === a.nodeType) return !1;
									l = c = "only" === d && !l && "nextSibling"
								}
								return !0
							}
							if (l = [g ? u.firstChild : u.lastChild], g && f) {
								for (_ = (s = (i = (r = (o = (a = u)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] || [])[0] === T && i[1]) && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (_ = s = 0) || l.pop();)
									if (1 === a.nodeType && ++_ && a === t) {
										r[d] = [T, s, _];
										break
									}
							} else if (f && (_ = s = (i = (r = (o = (a = t)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] || [])[0] === T && i[1]), !1 === _)
								for (;
									(a = ++s && a && a[c] || (_ = s = 0) || l.pop()) && ((m ? a.nodeName.toLowerCase() !== h : 1 !== a.nodeType) || !++_ || (f && ((r = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] = [T, _]), a !== t)););
							return (_ -= b) === p || _ % p == 0 && 0 <= _ / p
						}
					}
				},
				PSEUDO: function (t, o) {
					var e, a = v.pseudos[t] || v.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
					return a[C] ? a(o) : 1 < a.length ? (e = [t, t, "", o], v.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, e) {
						for (var n, i = a(t, o), r = i.length; r--;) t[n = N(t, i[r])] = !(e[n] = i[r])
					}) : function (t) {
						return a(t, 0, e)
					}) : a
				}
			},
			pseudos: {
				not: st(function (t) {
					var i = [],
						r = [],
						s = h(t.replace(W, "$1"));
					return s[C] ? st(function (t, e, n, i) {
						for (var r, o = s(t, null, i, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
					}) : function (t, e, n) {
						return i[0] = t, s(i, null, n, r), i[0] = null, !r.pop()
					}
				}),
				has: st(function (e) {
					return function (t) {
						return 0 < ot(e, t).length
					}
				}),
				contains: st(function (e) {
					return e = e.replace(Z, be),
						function (t) {
							return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
						}
				}),
				lang: st(function (n) {
					return Q.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(Z, be).toLowerCase(),
						function (t) {
							var e;
							do {
								if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var e = n.location && n.location.hash;
					return e && e.slice(1) === t.id
				},
				root: function (t) {
					return t === a
				},
				focus: function (t) {
					return t === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: _t(!1),
				disabled: _t(!0),
				checked: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				},
				selected: function (t) {
					return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
				},
				empty: function (t) {
					for (t = t.firstChild; t; t = t.nextSibling)
						if (t.nodeType < 6) return !1;
					return !0
				},
				parent: function (t) {
					return !v.pseudos.empty(t)
				},
				header: function (t) {
					return Y.test(t.nodeName)
				},
				input: function (t) {
					return K.test(t.nodeName)
				},
				button: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function (t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: bx(function () {
					return [0]
				}),
				last: bx(function (t, e) {
					return [e - 1]
				}),
				eq: bx(function (t, e, n) {
					return [n < 0 ? n + e : n]
				}),
				even: bx(function (t, e) {
					for (var n = 0; n < e; n += 2) t.push(n);
					return t
				}),
				odd: bx(function (t, e) {
					for (var n = 1; n < e; n += 2) t.push(n);
					return t
				}),
				lt: bx(function (t, e, n) {
					for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
					return t
				}),
				gt: bx(function (t, e, n) {
					for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
					return t
				})
			}
		}).pseudos.nth = v.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) v.pseudos[t] = ht(t);
		for (t in {
			submit: !0,
			reset: !0
		}) v.pseudos[t] = ft(t);

		function bt() {}

		function $t(t) {
			for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
			return i
		}

		function by(s, t, e) {
			var l = t.dir,
				c = t.next,
				u = c || l,
				h = e && "parentNode" === u,
				f = i++;
			return t.first ? function (t, e, n) {
				for (; t = t[l];)
					if (1 === t.nodeType || h) return s(t, e, n);
				return !1
			} : function (t, e, n) {
				var i, r, o, a = [T, f];
				if (n) {
					for (; t = t[l];)
						if ((1 === t.nodeType || h) && s(t, e, n)) return !0
				} else
					for (; t = t[l];)
						if (1 === t.nodeType || h)
							if (r = (o = t[C] || (t[C] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;
							else {
								if ((i = r[u]) && i[0] === T && i[1] === f) return a[2] = i[2];
								if ((r[u] = a)[2] = s(t, e, n)) return !0
							} return !1
			}
		}

		function mt(r) {
			return 1 < r.length ? function (t, e, n) {
				for (var i = r.length; i--;)
					if (!r[i](t, e, n)) return !1;
				return !0
			} : r[0]
		}

		function vt(t, e, n, i, r) {
			for (var o, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), c && e.push(s)));
			return a
		}

		function yt(_, d, p, b, $, t) {
			return b && !b[C] && (b = yt(b)), $ && !$[C] && ($ = yt($, t)), st(function (t, e, n, i) {
				var r, o, a, s = [],
					l = [],
					c = e.length,
					u = t || function (t, e, n) {
						for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
						return n
					}(d || "*", n.nodeType ? [n] : n, []),
					h = !_ || !t && d ? u : vt(u, s, _, n, i),
					f = p ? $ || (t ? _ : c || b) ? [] : e : h;
				if (p && p(h, f, n, i), b)
					for (r = vt(f, l), b(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[l[o]] = !(h[l[o]] = a));
				if (t) {
					if ($ || _) {
						if ($) {
							for (r = [], o = f.length; o--;)(a = f[o]) && r.push(h[o] = a);
							$(null, f = [], r, i)
						}
						for (o = f.length; o--;)(a = f[o]) && -1 < (r = $ ? N(t, a) : s[o]) && (t[r] = !(e[r] = a))
					}
				} else f = vt(f === e ? f.splice(c, f.length) : f), $ ? $(null, e, f, i) : F.apply(e, f)
			})
		}

		function wt(t) {
			for (var r, e, n, i = t.length, o = v.relative[t[0].type], a = o || v.relative[" "], s = o ? 1 : 0, l = by(function (t) {
				return t === r
			}, a, !0), c = by(function (t) {
				return -1 < N(r, t)
			}, a, !0), u = [
				function (t, e, n) {
					var i = !o && (n || e !== y) || ((r = e).nodeType ? l(t, e, n) : c(t, e, n));
					return r = null, i
				}
			]; s < i; s++)
				if (e = v.relative[t[s].type]) u = [by(mt(u), e)];
				else {
					if ((e = v.filter[t[s].type].apply(null, t[s].matches))[C]) {
						for (n = ++s; n < i && !v.relative[t[n].type]; n++);
						return yt(1 < s && mt(u), 1 < s && $t(t.slice(0, s - 1).concat({
							value: " " === t[s - 2].type ? "*" : ""
						})).replace(W, "$1"), e, s < n && wt(t.slice(s, n)), n < i && wt(t = t.slice(n)), n < i && $t(t))
					}
					u.push(e)
				}
			return mt(u)
		}
		return bt.prototype = v.filters = v.pseudos, v.setFilters = new bt, d = ot.tokenize = function (t, e) {
			var n, i, r, o, a, s, l, c = m[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (a = t, s = [], l = v.preFilter; a;) {
				for (o in n && !(i = H.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = B.exec(a)) && (n = i.shift(), r.push({
					value: n,
					type: i[0].replace(W, " ")
				}), a = a.slice(n.length)), v.filter)!(i = z[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
					value: n,
					type: o,
					matches: i
				}), a = a.slice(n.length));
				if (!n) break
			}
			return e ? a.length : a ? ot.error(t) : m(t, s).slice(0)
		}, h = ot.compile = function (t, e) {
			var n, b, $, g, m, i, r = [],
				o = [],
				a = S[t + " "];
			if (!a) {
				for (e || (e = d(t)), n = e.length; n--;)(a = wt(e[n]))[C] ? r.push(a) : o.push(a);
				(a = S(t, (b = o, $ = r, g = 0 < $.length, m = 0 < b.length, i = function (t, e, n, i, r) {
					var o, a, s, l = 0,
						c = "0",
						u = t && [],
						h = [],
						f = y,
						_ = t || m && v.find.TAG("*", r),
						d = T += null == f ? 1 : Math.random() || .1,
						p = _.length;
					for (r && (y = e === x || e || r); c !== p && null != (o = _[c]); c++) {
						if (m && o) {
							for (a = 0, e || o.ownerDocument === x || (w(o), n = !k); s = b[a++];)
								if (s(o, e || x, n)) {
									i.push(o);
									break
								}
							r && (T = d)
						}
						g && ((o = !s && o) && l--, t && u.push(o))
					}
					if (l += c, g && c !== l) {
						for (a = 0; s = $[a++];) s(u, h, e, n);
						if (t) {
							if (0 < l)
								for (; c--;) u[c] || h[c] || (h[c] = A.call(i));
							h = vt(h)
						}
						F.apply(i, h), r && !t && 0 < h.length && 1 < l + $.length && ot.uniqueSort(i)
					}
					return r && (T = d, y = f), u
				}, g ? st(i) : i))).selector = t
			}
			return a
		}, p = ot.select = function (t, e, n, i) {
			var r, o, a, s, l, c = "function" == typeof t && t,
				u = !i && d(t = c.selector || t);
			if (n = n || [], 1 === u.length) {
				if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === e.nodeType && k && v.relative[o[1].type]) {
					if (!(e = (v.find.ID(a.matches[0].replace(Z, be), e) || [])[0])) return n;
					c && (e = e.parentNode), t = t.slice(o.shift().value.length)
				}
				for (r = z.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !v.relative[s = a.type]);)
					if ((l = v.find[s]) && (i = l(a.matches[0].replace(Z, be), J.test(o[0].type) && pt(e.parentNode) || e))) {
						if (o.splice(r, 1), !(t = i.length && $t(o))) return F.apply(n, i), n;
						break
					}
			}
			return (c || h(t, u))(i, e, !k, n, !e || J.test(t) && pt(e.parentNode) || e), n
		}, _.sortStable = C.split("").sort(E).join("") === C, _.detectDuplicates = !!c, w(), _.sortDetached = bw(function (t) {
			return 1 & t.compareDocumentPosition(x.createElement("fieldset"))
		}), bw(function (t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || ct("type|href|height|width", function (t, e, n) {
			if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), _.attributes && bw(function (t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || ct("value", function (t, e, n) {
			if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		}), bw(function (t) {
			return null == t.getAttribute("disabled")
		}) || ct(D, function (t, e, n) {
			var i;
			if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}), ot
	}(x);
	C.find = _, C.expr = _.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = _.uniqueSort, C.text = _.getText, C.isXMLDoc = _.isXML, C.contains = _.contains, C.escapeSelector = _.escape;
	var d = function (t, e, n) {
			for (var i = [], r = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (r && C(t).is(n)) break;
					i.push(t)
				}
			return i
		},
		w = function (t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		},
		T = C.expr.match.needsContext;

	function S(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}
	var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(t, n, i) {
		return g(n) ? C.grep(t, function (t, e) {
			return !!n.call(t, e, t) !== i
		}) : n.nodeType ? C.grep(t, function (t) {
			return t === n !== i
		}) : "string" != typeof n ? C.grep(t, function (t) {
			return -1 < r.call(n, t) !== i
		}) : C.filter(n, t, i)
	}
	C.filter = function (t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? C.find.matchesSelector(i, t) ? [i] : [] : C.find.matches(t, C.grep(e, function (t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function (t) {
			var e, n, i = this.length,
				r = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function () {
				for (e = 0; e < i; e++)
					if (C.contains(r[e], this)) return !0
			}));
			for (n = this.pushStack([]), e = 0; e < i; e++) C.find(t, r[e], n);
			return 1 < i ? C.uniqueSort(n) : n
		},
		filter: function (t) {
			return this.pushStack(j(this, t || [], !1))
		},
		not: function (t) {
			return this.pushStack(j(this, t || [], !0))
		},
		is: function (t) {
			return !!j(this, "string" == typeof t && T.test(t) ? C(t) : t || [], !1).length
		}
	});
	var A, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(C.fn.init = function (t, e, n) {
		var i, r;
		if (!t) return this;
		if (n = n || A, "string" == typeof t) {
			if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
			if (i[1]) {
				if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), E.test(i[1]) && C.isPlainObject(e))
					for (i in e) g(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
				return this
			}
			return (r = k.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(C) : C.makeArray(t, this)
	}).prototype = C.fn, A = C(k);
	var F = /^(?:parents|prev(?:Until|All))/,
		L = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function N(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	C.fn.extend({
		has: function (t) {
			var e = C(t, this),
				n = e.length;
			return this.filter(function () {
				for (var t = 0; t < n; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function (t, e) {
			var n, i = 0,
				r = this.length,
				o = [],
				a = "string" != typeof t && C(t);
			if (!T.test(t))
				for (; i < r; i++)
					for (n = this[i]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
							o.push(n);
							break
						}
			return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
		},
		index: function (t) {
			return t ? "string" == typeof t ? r.call(C(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (t, e) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), C.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function (t) {
			return d(t, "parentNode")
		},
		parentsUntil: function (t, e, n) {
			return d(t, "parentNode", n)
		},
		next: function (t) {
			return N(t, "nextSibling")
		},
		prev: function (t) {
			return N(t, "previousSibling")
		},
		nextAll: function (t) {
			return d(t, "nextSibling")
		},
		prevAll: function (t) {
			return d(t, "previousSibling")
		},
		nextUntil: function (t, e, n) {
			return d(t, "nextSibling", n)
		},
		prevUntil: function (t, e, n) {
			return d(t, "previousSibling", n)
		},
		siblings: function (t) {
			return w((t.parentNode || {}).firstChild, t)
		},
		children: function (t) {
			return w(t.firstChild)
		},
		contents: function (t) {
			return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
		}
	}, function (i, r) {
		C.fn[i] = function (t, e) {
			var n = C.map(this, r, t);
			return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = C.filter(e, n)), 1 < this.length && (L[i] || C.uniqueSort(n), F.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var D = /[^\x20\t\r\n\f]+/g;

	function P(t) {
		return t
	}

	function M(t) {
		throw t
	}

	function R(t, e, n, i) {
		var r;
		try {
			t && g(r = t.promise) ? r.call(t).done(e).fail(n) : t && g(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
		} catch (t) {
			n.apply(void 0, [t])
		}
	}
	C.Callbacks = function (i) {
		var t, n;
		i = "string" == typeof i ? (t = i, n = {}, C.each(t.match(D) || [], function (t, e) {
			n[e] = !0
		}), n) : C.extend({}, i);
		var r, e, o, a, s = [],
			l = [],
			c = -1,
			u = function () {
				for (a = a || i.once, o = r = !0; l.length; c = -1)
					for (e = l.shift(); ++c < s.length;)!1 === s[c].apply(e[0], e[1]) && i.stopOnFalse && (c = s.length, e = !1);
				i.memory || (e = !1), r = !1, a && (s = e ? [] : "")
			},
			h = {
				add: function () {
					return s && (e && !r && (c = s.length - 1, l.push(e)), function n(t) {
						C.each(t, function (t, e) {
							g(e) ? i.unique && h.has(e) || s.push(e) : e && e.length && "string" !== y(e) && n(e)
						})
					}(arguments), e && !r && u()), this
				},
				remove: function () {
					return C.each(arguments, function (t, e) {
						for (var n; - 1 < (n = C.inArray(e, s, n));) s.splice(n, 1), n <= c && c--
					}), this
				},
				has: function (t) {
					return t ? -1 < C.inArray(t, s) : 0 < s.length
				},
				empty: function () {
					return s && (s = []), this
				},
				disable: function () {
					return a = l = [], s = e = "", this
				},
				disabled: function () {
					return !s
				},
				lock: function () {
					return a = l = [], e || r || (s = e = ""), this
				},
				locked: function () {
					return !!a
				},
				fireWith: function (t, e) {
					return a || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || u()), this
				},
				fire: function () {
					return h.fireWith(this, arguments), this
				},
				fired: function () {
					return !!o
				}
			};
		return h
	}, C.extend({
		Deferred: function (t) {
			var o = [
					["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
					["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				a = {
					state: function () {
						return r
					},
					always: function () {
						return s.done(arguments).fail(arguments), this
					},
					catch: function (t) {
						return a.then(null, t)
					},
					pipe: function () {
						var r = arguments;
						return C.Deferred(function (i) {
							C.each(o, function (t, e) {
								var n = g(r[e[4]]) && r[e[4]];
								s[e[1]](function () {
									var t = n && n.apply(this, arguments);
									t && g(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
								})
							}), r = null
						}).promise()
					},
					then: function (e, n, i) {
						var l = 0;

						function c(r, o, a, s) {
							return function () {
								var n = this,
									i = arguments,
									t = function () {
										var t, e;
										if (!(r < l)) {
											if ((t = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
											e = t && ("object" == typeof t || "function" == typeof t) && t.then, g(e) ? s ? e.call(t, c(l, o, P, s), c(l, o, M, s)) : (l++, e.call(t, c(l, o, P, s), c(l, o, M, s), c(l, o, P, o.notifyWith))) : (a !== P && (n = void 0, i = [t]), (s || o.resolveWith)(n, i))
										}
									},
									e = s ? t : function () {
										try {
											t()
										} catch (t) {
											C.Deferred.exceptionHook && C.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (a !== M && (n = void 0, i = [t]), o.rejectWith(n, i))
										}
									};
								r ? e() : (C.Deferred.getStackHook && (e.stackTrace = C.Deferred.getStackHook()), x.setTimeout(e))
							}
						}
						return C.Deferred(function (t) {
							o[0][3].add(c(0, t, g(i) ? i : P, t.notifyWith)), o[1][3].add(c(0, t, g(e) ? e : P)), o[2][3].add(c(0, t, g(n) ? n : M))
						}).promise()
					},
					promise: function (t) {
						return null != t ? C.extend(t, a) : a
					}
				},
				s = {};
			return C.each(o, function (t, e) {
				var n = e[2],
					i = e[5];
				a[e[1]] = n.add, i && n.add(function () {
					r = i
				}, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), s[e[0]] = function () {
					return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[e[0] + "With"] = n.fireWith
			}), a.promise(s), t && t.call(s, s), s
		},
		when: function (t) {
			var n = arguments.length,
				e = n,
				i = Array(e),
				r = s.call(arguments),
				o = C.Deferred(),
				a = function (e) {
					return function (t) {
						i[e] = this, r[e] = 1 < arguments.length ? s.call(arguments) : t, --n || o.resolveWith(i, r)
					}
				};
			if (n <= 1 && (R(t, o.done(a(e)).resolve, o.reject, !n), "pending" === o.state() || g(r[e] && r[e].then))) return o.then();
			for (; e--;) R(r[e], a(e), o.reject);
			return o.promise()
		}
	});
	var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	C.Deferred.exceptionHook = function (t, e) {
		x.console && x.console.warn && t && I.test(t.name) && x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
	}, C.readyException = function (t) {
		x.setTimeout(function () {
			throw t
		})
	};
	var q = C.Deferred();

	function W() {
		k.removeEventListener("DOMContentLoaded", W), x.removeEventListener("load", W), C.ready()
	}
	C.fn.ready = function (t) {
		return q.then(t).catch(function (t) {
			C.readyException(t)
		}), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (t) {
			(!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0) !== t && 0 < --C.readyWait || q.resolveWith(k, [C])
		}
	}), C.ready.then = q.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? x.setTimeout(C.ready) : (k.addEventListener("DOMContentLoaded", W), x.addEventListener("load", W));
	var H = function (t, e, n, i, r, o, a) {
			var s = 0,
				l = t.length,
				c = null == n;
			if ("object" === y(n))
				for (s in r = !0, n) H(t, e, s, n[s], !0, o, a);
			else if (void 0 !== i && (r = !0, g(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
				return c.call(C(t), n)
			})), e))
				for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
			return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
		},
		B = /^-ms-/,
		U = /-([a-z])/g;

	function X(t, e) {
		return e.toUpperCase()
	}

	function Q(t) {
		return t.replace(B, "ms-").replace(U, X)
	}
	var z = function (t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	};

	function K() {
		this.expando = C.expando + K.uid++
	}
	K.uid = 1, K.prototype = {
		cache: function (t) {
			var e = t[this.expando];
			return e || (e = {}, z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function (t, e, n) {
			var i, r = this.cache(t);
			if ("string" == typeof e) r[Q(e)] = n;
			else
				for (i in e) r[Q(i)] = e[i];
			return r
		},
		get: function (t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)]
		},
		access: function (t, e, n) {
			return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function (t, e) {
			var n, i = t[this.expando];
			if (void 0 !== i) {
				if (void 0 !== e) {
					n = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in i ? [e] : e.match(D) || []).length;
					for (; n--;) delete i[e[n]]
				}(void 0 === e || C.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function (t) {
			var e = t[this.expando];
			return void 0 !== e && !C.isEmptyObject(e)
		}
	};
	var Y = new K,
		V = new K,
		G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		J = /[A-Z]/g;

	function Z(t, e, n) {
		var i, r;
		if (void 0 === n && 1 === t.nodeType)
			if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
				try {
					n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
				} catch (t) {}
				V.set(t, e, n)
			} else n = void 0;
		return n
	}
	C.extend({
		hasData: function (t) {
			return V.hasData(t) || Y.hasData(t)
		},
		data: function (t, e, n) {
			return V.access(t, e, n)
		},
		removeData: function (t, e) {
			V.remove(t, e)
		},
		_data: function (t, e, n) {
			return Y.access(t, e, n)
		},
		_removeData: function (t, e) {
			Y.remove(t, e)
		}
	}), C.fn.extend({
		data: function (n, t) {
			var e, i, r, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (r = V.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					for (e = a.length; e--;) a[e] && 0 === (i = a[e].name).indexOf("data-") && (i = Q(i.slice(5)), Z(o, i, r[i]));
					Y.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof n ? this.each(function () {
				V.set(this, n)
			}) : H(this, function (t) {
				var e;
				if (o && void 0 === t) {
					if (void 0 !== (e = V.get(o, n))) return e;
					if (void 0 !== (e = Z(o, n))) return e
				} else this.each(function () {
					V.set(this, n, t)
				})
			}, null, t, 1 < arguments.length, null, !0)
		},
		removeData: function (t) {
			return this.each(function () {
				V.remove(this, t)
			})
		}
	}), C.extend({
		queue: function (t, e, n) {
			var i;
			if (t) return e = (e || "fx") + "queue", i = Y.get(t, e), n && (!i || Array.isArray(n) ? i = Y.access(t, e, C.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (t, e) {
			e = e || "fx";
			var n = C.queue(t, e),
				i = n.length,
				r = n.shift(),
				o = C._queueHooks(t, e);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
				C.dequeue(t, e)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function (t, e) {
			var n = e + "queueHooks";
			return Y.get(t, n) || Y.access(t, n, {
				empty: C.Callbacks("once memory").add(function () {
					Y.remove(t, [e + "queue", n])
				})
			})
		}
	}), C.fn.extend({
		queue: function (e, n) {
			var t = 2;
			return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === n ? this : this.each(function () {
				var t = C.queue(this, e, n);
				C._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
			})
		},
		dequeue: function (t) {
			return this.each(function () {
				C.dequeue(this, t)
			})
		},
		clearQueue: function (t) {
			return this.queue(t || "fx", [])
		},
		promise: function (t, e) {
			var n, i = 1,
				r = C.Deferred(),
				o = this,
				a = this.length,
				s = function () {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Y.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(e)
		}
	});
	var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		et = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
		nt = ["Top", "Right", "Bottom", "Left"],
		it = function (t, e) {
			return "none" === (t = e || t).style.display || "" === t.style.display && C.contains(t.ownerDocument, t) && "none" === C.css(t, "display")
		},
		rt = function (t, e, n, i) {
			var r, o, a = {};
			for (o in e) a[o] = t.style[o], t.style[o] = e[o];
			for (o in r = n.apply(t, i || []), e) t.style[o] = a[o];
			return r
		};

	function ot(t, e, n, i) {
		var r, o, a = 20,
			s = i ? function () {
				return i.cur()
			} : function () {
				return C.css(t, e, "")
			},
			l = s(),
			c = n && n[3] || (C.cssNumber[e] ? "" : "px"),
			u = (C.cssNumber[e] || "px" !== c && +l) && et.exec(C.css(t, e));
		if (u && u[3] !== c) {
			for (l /= 2, c = c || u[3], u = +l || 1; a--;) C.style(t, e, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
			u *= 2, C.style(t, e, u + c), n = n || []
		}
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
	}
	var bv = {};

	function st(t, e) {
		for (var n, i, r = [], o = 0, a = t.length; o < a; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && it(i) && (r[o] = (h = c = l = void 0, c = (s = i).ownerDocument, u = s.nodeName, (h = bv[u]) || (l = c.body.appendChild(c.createElement(u)), h = C.css(l, "display"), l.parentNode.removeChild(l), "none" === h && (h = "block"), bv[u] = h)))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));
		var s, l, c, u, h;
		for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
		return t
	}
	C.fn.extend({
		show: function () {
			return st(this, !0)
		},
		hide: function () {
			return st(this)
		},
		toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				it(this) ? C(this).show() : C(this).hide()
			})
		}
	});
	var bw = /^(?:checkbox|radio)$/i,
		ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ut = /^$|^module$|\/(?:java|ecma)script/i,
		ht = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ft(t, e) {
		var n;
		return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? C.merge([t], n) : n
	}

	function _t(t, e) {
		for (var n = 0, i = t.length; n < i; n++) Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"))
	}
	ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
	var bx, pt, bt = /<|&#?\w+;/;

	function $t(t, e, n, i, r) {
		for (var o, a, s, l, c, u, h = e.createDocumentFragment(), f = [], _ = 0, d = t.length; _ < d; _++)
			if ((o = t[_]) || 0 === o)
				if ("object" === y(o)) C.merge(f, o.nodeType ? [o] : o);
				else if (bt.test(o)) {
			for (a = a || h.appendChild(e.createElement("div")), s = (ct.exec(o) || ["", ""])[1].toLowerCase(), l = ht[s] || ht._default, a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
			C.merge(f, a.childNodes), (a = h.firstChild).textContent = ""
		} else f.push(e.createTextNode(o));
		for (h.textContent = "", _ = 0; o = f[_++];)
			if (i && -1 < C.inArray(o, i)) r && r.push(o);
			else if (c = C.contains(o.ownerDocument, o), a = ft(h.appendChild(o), "script"), c && _t(a), n)
			for (u = 0; o = a[u++];) ut.test(o.type || "") && n.push(o);
		return h
	}
	bx = k.createDocumentFragment().appendChild(k.createElement("div")), (pt = k.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), bx.appendChild(pt), $.checkClone = bx.cloneNode(!0).cloneNode(!0).lastChild.checked, bx.innerHTML = "<textarea>x</textarea>", $.noCloneChecked = !!bx.cloneNode(!0).lastChild.defaultValue;
	var by = k.documentElement,
		mt = /^key/,
		vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		yt = /^([^.]*)(?:\.(.+)|)/;

	function wt() {
		return !0
	}

	function xt() {
		return !1
	}

	function kt() {
		try {
			return k.activeElement
		} catch (t) {}
	}

	function Ct(t, e, n, i, r, o) {
		var a, s;
		if ("object" == typeof e) {
			for (s in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, s, n, i, e[s], o);
			return t
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xt;
		else if (!r) return t;
		return 1 === o && (a = r, (r = function (t) {
			return C().off(t), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = C.guid++)), t.each(function () {
			C.event.add(this, e, r, i, n)
		})
	}
	C.event = {
		global: {},
		add: function (e, t, n, i, r) {
			var o, a, s, l, c, u, h, f, _, d, p, b = Y.get(e);
			if (b)
				for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(by, r), n.guid || (n.guid = C.guid++), (l = b.events) || (l = b.events = {}), (a = b.handle) || (a = b.handle = function (t) {
					return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
				}), c = (t = (t || "").match(D) || [""]).length; c--;) _ = p = (s = yt.exec(t[c]) || [])[1], d = (s[2] || "").split(".").sort(), _ && (h = C.event.special[_] || {}, _ = (r ? h.delegateType : h.bindType) || _, h = C.event.special[_] || {}, u = C.extend({
					type: _,
					origType: p,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && C.expr.match.needsContext.test(r),
					namespace: d.join(".")
				}, o), (f = l[_]) || ((f = l[_] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, d, a) || e.addEventListener && e.addEventListener(_, a)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[_] = !0)
		},
		remove: function (t, e, n, i, r) {
			var o, a, s, l, c, u, h, f, _, d, p, b = Y.hasData(t) && Y.get(t);
			if (b && (l = b.events)) {
				for (c = (e = (e || "").match(D) || [""]).length; c--;)
					if (_ = p = (s = yt.exec(e[c]) || [])[1], d = (s[2] || "").split(".").sort(), _) {
						for (h = C.event.special[_] || {}, f = l[_ = (i ? h.delegateType : h.bindType) || _] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && p !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
						a && !f.length && (h.teardown && !1 !== h.teardown.call(t, d, b.handle) || C.removeEvent(t, _, b.handle), delete l[_])
					} else
						for (_ in l) C.event.remove(t, _ + e[c], n, i, !0);
				C.isEmptyObject(l) && Y.remove(t, "handle events")
			}
		},
		dispatch: function (t) {
			var e, n, i, r, o, a, s = C.event.fix(t),
				l = new Array(arguments.length),
				c = (Y.get(this, "events") || {})[s.type] || [],
				u = C.event.special[s.type] || {};
			for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
			if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
				for (a = C.event.handlers.call(this, s, c), e = 0;
					(r = a[e++]) && !s.isPropagationStopped();)
					for (s.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, s), s.result
			}
		},
		handlers: function (t, e) {
			var n, i, r, o, a, s = [],
				l = e.delegateCount,
				c = t.target;
			if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
						for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length), a[r] && o.push(i);
						o.length && s.push({
							elem: c,
							handlers: o
						})
					}
			return c = this, l < e.length && s.push({
				elem: c,
				handlers: e.slice(l)
			}), s
		},
		addProp: function (e, t) {
			Object.defineProperty(C.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: g(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (t) {
			return t[C.expando] ? t : new C.Event(t)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== kt() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === kt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
				},
				_default: function (t) {
					return S(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, C.removeEvent = function (t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	}, C.Event = function (t, e) {
		if (!(this instanceof C.Event)) return new C.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: xt,
		isPropagationStopped: xt,
		isImmediatePropagationStopped: xt,
		isSimulated: !1,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function (t) {
			var e = t.button;
			return null == t.which && mt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && vt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
		}
	}, C.event.addProp), C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (t, r) {
		C.event.special[t] = {
			delegateType: r,
			bindType: r,
			handle: function (t) {
				var e, n = t.relatedTarget,
					i = t.handleObj;
				return n && (n === this || C.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
			}
		}
	}), C.fn.extend({
		on: function (t, e, n, i) {
			return Ct(this, t, e, n, i)
		},
		one: function (t, e, n, i) {
			return Ct(this, t, e, n, i, 1)
		},
		off: function (t, e, n) {
			var i, r;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, C(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each(function () {
				C.event.remove(this, t, n, e)
			})
		}
	});
	var bz = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		St = /<script|<style|<link/i,
		Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
		jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function At(t, e) {
		return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
	}

	function Ot(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function Ft(t) {
		return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
	}

	function Lt(t, e) {
		var n, i, r, o, a, s, l, c;
		if (1 === e.nodeType) {
			if (Y.hasData(t) && (o = Y.access(t), a = Y.set(e, o), c = o.events))
				for (r in delete a.handle, a.events = {}, c)
					for (n = 0, i = c[r].length; n < i; n++) C.event.add(e, r, c[r][n]);
			V.hasData(t) && (s = V.access(t), l = C.extend({}, s), V.set(e, l))
		}
	}

	function Nt(n, i, r, o) {
		i = p.apply([], i);
		var t, e, a, s, l, c, u = 0,
			h = n.length,
			f = h - 1,
			_ = i[0],
			d = g(_);
		if (d || 1 < h && "string" == typeof _ && !$.checkClone && Et.test(_)) return n.each(function (t) {
			var e = n.eq(t);
			d && (i[0] = _.call(this, t, e.html())), Nt(e, i, r, o)
		});
		if (h && (e = (t = $t(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
			for (s = (a = C.map(ft(t, "script"), Ot)).length; u < h; u++) l = t, u !== f && (l = C.clone(l, !0, !0), s && C.merge(a, ft(l, "script"))), r.call(n[u], l, u);
			if (s)
				for (c = a[a.length - 1].ownerDocument, C.map(a, Ft), u = 0; u < s; u++) l = a[u], ut.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : v(l.textContent.replace(jt, ""), c, l))
		}
		return n
	}

	function Dt(t, e, n) {
		for (var i, r = e ? C.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(ft(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && _t(ft(i, "script")), i.parentNode.removeChild(i));
		return t
	}
	C.extend({
		htmlPrefilter: function (t) {
			return t.replace(bz, "<$1></$2>")
		},
		clone: function (t, e, n) {
			var i, r, o, a, s, l, c, u = t.cloneNode(!0),
				h = C.contains(t.ownerDocument, t);
			if (!($.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (a = ft(u), i = 0, r = (o = ft(t)).length; i < r; i++) s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && bw.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
			if (e)
				if (n)
					for (o = o || ft(t), a = a || ft(u), i = 0, r = o.length; i < r; i++) Lt(o[i], a[i]);
				else Lt(t, u);
			return 0 < (a = ft(u, "script")).length && _t(a, !h && ft(t, "script")), u
		},
		cleanData: function (t) {
			for (var e, n, i, r = C.event.special, o = 0; void 0 !== (n = t[o]); o++)
				if (z(n)) {
					if (e = n[Y.expando]) {
						if (e.events)
							for (i in e.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
						n[Y.expando] = void 0
					}
					n[V.expando] && (n[V.expando] = void 0)
				}
		}
	}), C.fn.extend({
		detach: function (t) {
			return Dt(this, t, !0)
		},
		remove: function (t) {
			return Dt(this, t)
		},
		text: function (t) {
			return H(this, function (t) {
				return void 0 === t ? C.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function () {
			return Nt(this, arguments, function (t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
			})
		},
		prepend: function () {
			return Nt(this, arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = At(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function () {
			return Nt(this, arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function () {
			return Nt(this, arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(ft(t, !1)), t.textContent = "");
			return this
		},
		clone: function (t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function () {
				return C.clone(this, t, e)
			})
		},
		html: function (t) {
			return H(this, function (t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !St.test(t) && !ht[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = C.htmlPrefilter(t);
					try {
						for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (C.cleanData(ft(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function () {
			var n = [];
			return Nt(this, arguments, function (t) {
				var e = this.parentNode;
				C.inArray(this, n) < 0 && (C.cleanData(ft(this)), e && e.replaceChild(t, this))
			}, n)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, a) {
		C.fn[t] = function (t) {
			for (var e, n = [], i = C(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), C(i[o])[a](e), l.apply(n, e.get());
			return this.pushStack(n)
		}
	});
	var bA = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
		Mt = function (t) {
			var e = t.ownerDocument.defaultView;
			return e && e.opener || (e = x), e.getComputedStyle(t)
		},
		Rt = new RegExp(nt.join("|"), "i");

	function It(t, e, n) {
		var i, r, o, a, s = t.style;
		return (n = n || Mt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || C.contains(t.ownerDocument, t) || (a = C.style(t, e)), !$.pixelBoxStyles() && bA.test(a) && Rt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function qt(t, e) {
		return {
			get: function () {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}! function () {
		function t() {
			if (l) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", by.appendChild(s).appendChild(l);
				var t = x.getComputedStyle(l);
				n = "1%" !== t.top, a = 12 === e(t.marginLeft), l.style.right = "60%", o = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", by.removeChild(s), l = null
			}
		}

		function e(t) {
			return Math.round(parseFloat(t))
		}
		var n, i, r, o, a, s = k.createElement("div"),
			l = k.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", $.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend($, {
			boxSizingReliable: function () {
				return t(), i
			},
			pixelBoxStyles: function () {
				return t(), o
			},
			pixelPosition: function () {
				return t(), n
			},
			reliableMarginLeft: function () {
				return t(), a
			},
			scrollboxSize: function () {
				return t(), r
			}
		}))
	}();
	var bB = /^(none|table(?!-c[ea]).+)/,
		Ht = /^--/,
		Bt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ut = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xt = ["Webkit", "Moz", "ms"],
		Qt = k.createElement("div").style;

	function zt(t) {
		var e = C.cssProps[t];
		return e || (e = C.cssProps[t] = function (t) {
			if (t in Qt) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--;)
				if ((t = Xt[n] + e) in Qt) return t
		}(t) || t), e
	}

	function Kt(t, e, n) {
		var i = et.exec(e);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
	}

	function Yt(t, e, n, i, r, o) {
		var a = "width" === e ? 1 : 0,
			s = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (l += C.css(t, n + nt[a], !0, r)), i ? ("content" === n && (l -= C.css(t, "padding" + nt[a], !0, r)), "margin" !== n && (l -= C.css(t, "border" + nt[a] + "Width", !0, r))) : (l += C.css(t, "padding" + nt[a], !0, r), "padding" !== n ? l += C.css(t, "border" + nt[a] + "Width", !0, r) : s += C.css(t, "border" + nt[a] + "Width", !0, r));
		return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5))), l
	}

	function Vt(t, e, n) {
		var i = Mt(t),
			r = It(t, e, i),
			o = "border-box" === C.css(t, "boxSizing", !1, i),
			a = o;
		if (bA.test(r)) {
			if (!n) return r;
			r = "auto"
		}
		return a = a && ($.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === C.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (r = parseFloat(r) || 0) + Yt(t, e, n || (o ? "border" : "content"), a, i, r) + "px"
	}

	function Gt(t, e, n, i, r) {
		return new Gt.prototype.init(t, e, n, i, r)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var n = It(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, a, s = Q(e),
					l = Ht.test(e),
					c = t.style;
				if (l || (e = zt(s)), a = C.cssHooks[e] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : c[e];
				"string" == (o = typeof n) && (r = et.exec(n)) && r[1] && (n = ot(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), $.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
			}
		},
		css: function (t, e, n, i) {
			var r, o, a, s = Q(e);
			return Ht.test(e) || (e = zt(s)), (a = C.cssHooks[e] || C.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = It(t, e, i)), "normal" === r && e in Ut && (r = Ut[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), C.each(["height", "width"], function (t, s) {
		C.cssHooks[s] = {
			get: function (t, e, n) {
				if (e) return !bB.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, s, n) : rt(t, Bt, function () {
					return Vt(t, s, n)
				})
			},
			set: function (t, e, n) {
				var i, r = Mt(t),
					o = "border-box" === C.css(t, "boxSizing", !1, r),
					a = n && Yt(t, s, n, o, r);
				return o && $.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - Yt(t, s, "border", !1, r) - .5)), a && (i = et.exec(e)) && "px" !== (i[3] || "px") && (t.style[s] = e, e = C.css(t, s)), Kt(0, e, a)
			}
		}
	}), C.cssHooks.marginLeft = qt($.reliableMarginLeft, function (t, e) {
		if (e) return (parseFloat(It(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
			marginLeft: 0
		}, function () {
			return t.getBoundingClientRect().left
		})) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (r, o) {
		C.cssHooks[r + o] = {
			expand: function (t) {
				for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + nt[e] + o] = i[e] || i[e - 2] || i[0];
				return n
			}
		}, "margin" !== r && (C.cssHooks[r + o].set = Kt)
	}), C.fn.extend({
		css: function (t, e) {
			return H(this, function (t, e, n) {
				var i, r, o = {},
					a = 0;
				if (Array.isArray(e)) {
					for (i = Mt(t), r = e.length; a < r; a++) o[e[a]] = C.css(t, e[a], !1, i);
					return o
				}
				return void 0 !== n ? C.style(t, e, n) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		}
	}), ((C.Tween = Gt).prototype = {
		constructor: Gt,
		init: function (t, e, n, i, r, o) {
			this.elem = t, this.prop = n, this.easing = r || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var t = Gt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Gt.propHooks._default.get(this)
		},
		run: function (t) {
			var e, n = Gt.propHooks[this.prop];
			return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
		}
	}).init.prototype = Gt.prototype, (Gt.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			},
			set: function (t) {
				C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}).scrollTop = Gt.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, C.easing = {
		linear: function (t) {
			return t
		},
		swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = Gt.prototype.init, C.fx.step = {};
	var bC, Zt, te, ee, ne = /^(?:toggle|show|hide)$/,
		ie = /queueHooks$/;

	function re() {
		Zt && (!1 === k.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(re) : x.setTimeout(re, C.fx.interval), C.fx.tick())
	}

	function oe() {
		return x.setTimeout(function () {
			bC = void 0
		}), bC = Date.now()
	}

	function ae(t, e) {
		var n, i = 0,
			r = {
				height: t
			};
		for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
		return e && (r.opacity = r.width = t), r
	}

	function se(t, e, n) {
		for (var i, r = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, a = r.length; o < a; o++)
			if (i = r[o].call(n, e, t)) return i
	}

	function le(o, t, e) {
		var n, a, i = 0,
			r = le.prefilters.length,
			s = C.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (a) return !1;
				for (var t = bC || oe(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
				return s.notifyWith(o, [c, n, e]), n < 1 && r ? e : (r || s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c]), !1)
			},
			c = s.promise({
				elem: o,
				props: C.extend({}, t),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: bC || oe(),
				duration: e.duration,
				tweens: [],
				createTween: function (t, e) {
					var n = C.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function (t) {
					var e = 0,
						n = t ? c.tweens.length : 0;
					if (a) return this;
					for (a = !0; e < n; e++) c.tweens[e].run(1);
					return t ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, t])) : s.rejectWith(o, [c, t]), this
				}
			}),
			u = c.props;
		for (function (t, e) {
			var n, i, r, o, a;
			for (n in t)
				if (r = e[i = Q(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = C.cssHooks[i]) && "expand" in a)
					for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
				else e[i] = r
		}(u, c.opts.specialEasing); i < r; i++)
			if (n = le.prefilters[i].call(c, o, u, c.opts)) return g(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return C.map(u, se, c), g(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
			elem: o,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	C.Animation = C.extend(le, {
		tweeners: {
			"*": [
				function (t, e) {
					var n = this.createTween(t, e);
					return ot(n.elem, t, et.exec(e), n), n
				}
			]
		},
		tweener: function (t, e) {
			g(t) ? (e = t, t = ["*"]) : t = t.match(D);
			for (var n, i = 0, r = t.length; i < r; i++) n = t[i], le.tweeners[n] = le.tweeners[n] || [], le.tweeners[n].unshift(e)
		},
		prefilters: [
			function (t, e, n) {
				var i, r, o, a, s, l, c, u, h = "width" in e || "height" in e,
					f = this,
					_ = {},
					d = t.style,
					p = t.nodeType && it(t),
					b = Y.get(t, "fxshow");
				for (i in n.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
					a.unqueued || s()
				}), a.unqueued++, f.always(function () {
					f.always(function () {
						a.unqueued--, C.queue(t, "fx").length || a.empty.fire()
					})
				})), e)
					if (r = e[i], ne.test(r)) {
						if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
							if ("show" !== r || !b || void 0 === b[i]) continue;
							p = !0
						}
						_[i] = b && b[i] || C.style(t, i)
					}
				if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(_))
					for (i in h && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (c = b && b.display) && (c = Y.get(t, "display")), "none" === (u = C.css(t, "display")) && (c ? u = c : (st([t], !0), c = t.style.display || c, u = C.css(t, "display"), st([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(t, "float") && (l || (f.done(function () {
						d.display = c
					}), null == c && (u = d.display, c = "none" === u ? "" : u)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
						d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
					})), l = !1, _) l || (b ? "hidden" in b && (p = b.hidden) : b = Y.access(t, "fxshow", {
						display: c
					}), o && (b.hidden = !p), p && st([t], !0), f.done(function () {
						for (i in p || st([t]), Y.remove(t, "fxshow"), _) C.style(t, i, _[i])
					})), l = se(p ? b[i] : 0, i, f), i in b || (b[i] = l.start, p && (l.end = l.start, l.start = 0))
			}
		],
		prefilter: function (t, e) {
			e ? le.prefilters.unshift(t) : le.prefilters.push(t)
		}
	}), C.speed = function (t, e, n) {
		var i = t && "object" == typeof t ? C.extend({}, t) : {
			complete: n || !n && e || g(t) && t,
			duration: t,
			easing: n && e || e && !g(e) && e
		};
		return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			g(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
		}, i
	}, C.fn.extend({
		fadeTo: function (t, e, n, i) {
			return this.filter(it).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function (e, t, n, i) {
			var r = C.isEmptyObject(e),
				o = C.speed(t, n, i),
				a = function () {
					var t = le(this, C.extend({}, e), o);
					(r || Y.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function (r, t, o) {
			var a = function (t) {
				var e = t.stop;
				delete t.stop, e(o)
			};
			return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
				var t = !0,
					e = null != r && r + "queueHooks",
					n = C.timers,
					i = Y.get(this);
				if (e) i[e] && i[e].stop && a(i[e]);
				else
					for (e in i) i[e] && i[e].stop && ie.test(e) && a(i[e]);
				for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
				!t && o || C.dequeue(this, r)
			})
		},
		finish: function (a) {
			return !1 !== a && (a = a || "fx"), this.each(function () {
				var t, e = Y.get(this),
					n = e[a + "queue"],
					i = e[a + "queueHooks"],
					r = C.timers,
					o = n ? n.length : 0;
				for (e.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === a && (r[t].anim.stop(!0), r.splice(t, 1));
				for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function (t, i) {
		var r = C.fn[i];
		C.fn[i] = function (t, e, n) {
			return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(ae(i, !0), t, e, n)
		}
	}), C.each({
		slideDown: ae("show"),
		slideUp: ae("hide"),
		slideToggle: ae("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (t, i) {
		C.fn[t] = function (t, e, n) {
			return this.animate(i, t, e, n)
		}
	}), C.timers = [], C.fx.tick = function () {
		var t, e = 0,
			n = C.timers;
		for (bC = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
		n.length || C.fx.stop(), bC = void 0
	}, C.fx.timer = function (t) {
		C.timers.push(t), C.fx.start()
	}, C.fx.interval = 13, C.fx.start = function () {
		Zt || (Zt = !0, re())
	}, C.fx.stop = function () {
		Zt = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function (i, t) {
		return i = C.fx && C.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
			var n = x.setTimeout(t, i);
			e.stop = function () {
				x.clearTimeout(n)
			}
		})
	}, te = k.createElement("input"), ee = k.createElement("select").appendChild(k.createElement("option")), te.type = "checkbox", $.checkOn = "" !== te.value, $.optSelected = ee.selected, (te = k.createElement("input")).value = "t", te.type = "radio", $.radioValue = "t" === te.value;
	var bD, ue = C.expr.attrHandle;
	C.fn.extend({
		attr: function (t, e) {
			return H(this, C.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function (t) {
			return this.each(function () {
				C.removeAttr(this, t)
			})
		}
	}), C.extend({
		attr: function (t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? C.prop(t, e, n) : (1 === o && C.isXMLDoc(t) || (r = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? bD : void 0)), void 0 !== n ? null === n ? void C.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = C.find.attr(t, e)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function (t, e) {
					if (!$.radioValue && "radio" === e && S(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function (t, e) {
			var n, i = 0,
				r = e && e.match(D);
			if (r && 1 === t.nodeType)
				for (; n = r[i++];) t.removeAttribute(n)
		}
	}), bD = {
		set: function (t, e, n) {
			return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
		var a = ue[e] || C.find.attr;
		ue[e] = function (t, e, n) {
			var i, r, o = e.toLowerCase();
			return n || (r = ue[o], ue[o] = i, i = null != a(t, e, n) ? o : null, ue[o] = r), i
		}
	});
	var bE = /^(?:input|select|textarea|button)$/i,
		fe = /^(?:a|area)$/i;

	function _e(t) {
		return (t.match(D) || []).join(" ")
	}

	function de(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function pe(t) {
		return Array.isArray(t) ? t : "string" == typeof t && t.match(D) || []
	}
	C.fn.extend({
		prop: function (t, e) {
			return H(this, C.prop, t, e, 1 < arguments.length)
		},
		removeProp: function (t) {
			return this.each(function () {
				delete this[C.propFix[t] || t]
			})
		}
	}), C.extend({
		prop: function (t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e, r = C.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function (t) {
					var e = C.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : bE.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), $.optSelected || (C.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function (t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		C.propFix[this.toLowerCase()] = this
	}), C.fn.extend({
		addClass: function (e) {
			var t, n, i, r, o, a, s, l = 0;
			if (g(e)) return this.each(function (t) {
				C(this).addClass(e.call(this, t, de(this)))
			});
			if ((t = pe(e)).length)
				for (; n = this[l++];)
					if (r = de(n), i = 1 === n.nodeType && " " + _e(r) + " ") {
						for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						r !== (s = _e(i)) && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, i, r, o, a, s, l = 0;
			if (g(e)) return this.each(function (t) {
				C(this).removeClass(e.call(this, t, de(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((t = pe(e)).length)
				for (; n = this[l++];)
					if (r = de(n), i = 1 === n.nodeType && " " + _e(r) + " ") {
						for (a = 0; o = t[a++];)
							for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						r !== (s = _e(i)) && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function (r, e) {
			var o = typeof r,
				a = "string" === o || Array.isArray(r);
			return "boolean" == typeof e && a ? e ? this.addClass(r) : this.removeClass(r) : g(r) ? this.each(function (t) {
				C(this).toggleClass(r.call(this, t, de(this), e), e)
			}) : this.each(function () {
				var t, e, n, i;
				if (a)
					for (e = 0, n = C(this), i = pe(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else void 0 !== r && "boolean" !== o || ((t = de(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function (t) {
			var e, n, i = 0;
			for (e = " " + t + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + _e(de(n)) + " ").indexOf(e)) return !0;
			return !1
		}
	});
	var bF = /\r/g;
	C.fn.extend({
		val: function (n) {
			var i, t, r, e = this[0];
			return arguments.length ? (r = g(n), this.each(function (t) {
				var e;
				1 === this.nodeType && (null == (e = r ? n.call(this, t, C(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function (t) {
					return null == t ? "" : t + ""
				})), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
			})) : e ? (i = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(bF, "") : null == t ? "" : t : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = C.find.attr(t, "value");
					return null != e ? e : _e(C.text(t))
				}
			},
			select: {
				get: function (t) {
					var e, n, i, r = t.options,
						o = t.selectedIndex,
						a = "select-one" === t.type,
						s = a ? null : [],
						l = a ? o + 1 : r.length;
					for (i = o < 0 ? l : a ? o : 0; i < l; i++)
						if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
							if (e = C(n).val(), a) return e;
							s.push(e)
						}
					return s
				},
				set: function (t, e) {
					for (var n, i, r = t.options, o = C.makeArray(e), a = r.length; a--;)((i = r[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}
	}), C.each(["radio", "checkbox"], function () {
		C.valHooks[this] = {
			set: function (t, e) {
				if (Array.isArray(e)) return t.checked = -1 < C.inArray(C(t).val(), e)
			}
		}, $.checkOn || (C.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), $.focusin = "onfocusin" in x;
	var bG = /^(?:focusinfocus|focusoutblur)$/,
		ge = function (t) {
			t.stopPropagation()
		};
	C.extend(C.event, {
		trigger: function (t, e, n, i) {
			var r, o, a, s, l, c, u, h, f = [n || k],
				_ = b.call(t, "type") ? t.type : t,
				d = b.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = h = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !bG.test(_ + C.event.triggered) && (-1 < _.indexOf(".") && (_ = (d = _.split(".")).shift(), d.sort()), l = _.indexOf(":") < 0 && "on" + _, (t = t[C.expando] ? t : new C.Event(_, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : C.makeArray(e, [t]), u = C.event.special[_] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, e))) {
				if (!i && !u.noBubble && !m(n)) {
					for (s = u.delegateType || _, bG.test(s + _) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
					a === (n.ownerDocument || k) && f.push(a.defaultView || a.parentWindow || x)
				}
				for (r = 0;
					(o = f[r++]) && !t.isPropagationStopped();) h = o, t.type = 1 < r ? s : u.bindType || _, (c = (Y.get(o, "events") || {})[t.type] && Y.get(o, "handle")) && c.apply(o, e), (c = l && o[l]) && c.apply && z(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
				return t.type = _, i || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), e) || !z(n) || l && g(n[_]) && !m(n) && ((a = n[l]) && (n[l] = null), C.event.triggered = _, t.isPropagationStopped() && h.addEventListener(_, ge), n[_](), t.isPropagationStopped() && h.removeEventListener(_, ge), C.event.triggered = void 0, a && (n[l] = a)), t.result
			}
		},
		simulate: function (t, e, n) {
			var i = C.extend(new C.Event, n, {
				type: t,
				isSimulated: !0
			});
			C.event.trigger(i, null, e)
		}
	}), C.fn.extend({
		trigger: function (t, e) {
			return this.each(function () {
				C.event.trigger(t, e, this)
			})
		},
		triggerHandler: function (t, e) {
			var n = this[0];
			if (n) return C.event.trigger(t, e, n, !0)
		}
	}), $.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function (n, i) {
		var r = function (t) {
			C.event.simulate(i, t.target, C.event.fix(t))
		};
		C.event.special[i] = {
			setup: function () {
				var t = this.ownerDocument || this,
					e = Y.access(t, i);
				e || t.addEventListener(n, r, !0), Y.access(t, i, (e || 0) + 1)
			},
			teardown: function () {
				var t = this.ownerDocument || this,
					e = Y.access(t, i) - 1;
				e ? Y.access(t, i, e) : (t.removeEventListener(n, r, !0), Y.remove(t, i))
			}
		}
	});
	var bH = x.location,
		ve = Date.now(),
		ye = /\?/;
	C.parseXML = function (t) {
		var e;
		if (!t || "string" != typeof t) return null;
		try {
			e = (new x.DOMParser).parseFromString(t, "text/xml")
		} catch (t) {
			e = void 0
		}
		return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
	};
	var bI = /\[\]$/,
		xe = /\r?\n/g,
		ke = /^(?:submit|button|image|reset|file)$/i,
		Ce = /^(?:input|select|textarea|keygen)/i;

	function Te(n, t, i, r) {
		var e;
		if (Array.isArray(t)) C.each(t, function (t, e) {
			i || bI.test(n) ? r(n, e) : Te(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
		});
		else if (i || "object" !== y(t)) r(n, t);
		else
			for (e in t) Te(n + "[" + e + "]", t[e], i, r)
	}
	C.param = function (t, e) {
		var n, i = [],
			r = function (t, e) {
				var n = g(e) ? e() : e;
				i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function () {
			r(this.name, this.value)
		});
		else
			for (n in t) Te(n, t[n], e, r);
		return i.join("&")
	}, C.fn.extend({
		serialize: function () {
			return C.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var t = C.prop(this, "elements");
				return t ? C.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !C(this).is(":disabled") && Ce.test(this.nodeName) && !ke.test(t) && (this.checked || !bw.test(t))
			}).map(function (t, e) {
				var n = C(this).val();
				return null == n ? null : Array.isArray(n) ? C.map(n, function (t) {
					return {
						name: e.name,
						value: t.replace(xe, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(xe, "\r\n")
				}
			}).get()
		}
	});
	var bJ = /%20/g,
		Ee = /#.*$/,
		je = /([?&])_=[^&]*/,
		Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Oe = /^(?:GET|HEAD)$/,
		Fe = /^\/\//,
		Le = {},
		Ne = {},
		De = "*/".concat("*"),
		Pe = k.createElement("a");

	function Me(o) {
		return function (t, e) {
			"string" != typeof t && (e = t, t = "*");
			var n, i = 0,
				r = t.toLowerCase().match(D) || [];
			if (g(e))
				for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
		}
	}

	function Re(e, r, o, a) {
		var s = {},
			l = e === Ne;

		function c(t) {
			var i;
			return s[t] = !0, C.each(e[t] || [], function (t, e) {
				var n = e(r, o, a);
				return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
			}), i
		}
		return c(r.dataTypes[0]) || !s["*"] && c("*")
	}

	function Ie(t, e) {
		var n, i, r = C.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
		return i && C.extend(!0, t, i), t
	}
	Pe.href = bH.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: bH.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bH.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": De,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (t, e) {
			return e ? Ie(Ie(t, C.ajaxSettings), e) : Ie(C.ajaxSettings, t)
		},
		ajaxPrefilter: Me(Le),
		ajaxTransport: Me(Ne),
		ajax: function (t, e) {
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var u, h, f, n, _, i, d, p, r, o, b = C.ajaxSetup({}, e),
				$ = b.context || b,
				g = b.context && ($.nodeType || $.jquery) ? C($) : C.event,
				m = C.Deferred(),
				v = C.Callbacks("once memory"),
				y = b.statusCode || {},
				a = {},
				s = {},
				l = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function (t) {
						var e;
						if (d) {
							if (!n)
								for (n = {}; e = Ae.exec(f);) n[e[1].toLowerCase()] = e[2];
							e = n[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function () {
						return d ? f : null
					},
					setRequestHeader: function (t, e) {
						return null == d && (t = s[t.toLowerCase()] = s[t.toLowerCase()] || t, a[t] = e), this
					},
					overrideMimeType: function (t) {
						return null == d && (b.mimeType = t), this
					},
					statusCode: function (t) {
						var e;
						if (t)
							if (d) w.always(t[w.status]);
							else
								for (e in t) y[e] = [y[e], t[e]];
						return this
					},
					abort: function (t) {
						var e = t || l;
						return u && u.abort(e), c(0, e), this
					}
				};
			if (m.promise(w), b.url = ((t || b.url || bH.href) + "").replace(Fe, bH.protocol + "//"), b.type = e.method || e.type || b.method || b.type, b.dataTypes = (b.dataType || "*").toLowerCase().match(D) || [""], null == b.crossDomain) {
				i = k.createElement("a");
				try {
					i.href = b.url, i.href = i.href, b.crossDomain = Pe.protocol + "//" + Pe.host != i.protocol + "//" + i.host
				} catch (t) {
					b.crossDomain = !0
				}
			}
			if (b.data && b.processData && "string" != typeof b.data && (b.data = C.param(b.data, b.traditional)), Re(Le, b, e, w), d) return w;
			for (r in (p = C.event && b.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), b.type = b.type.toUpperCase(), b.hasContent = !Oe.test(b.type), h = b.url.replace(Ee, ""), b.hasContent ? b.data && b.processData && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && (b.data = b.data.replace(bJ, "+")) : (o = b.url.slice(h.length), b.data && (b.processData || "string" == typeof b.data) && (h += (ye.test(h) ? "&" : "?") + b.data, delete b.data), !1 === b.cache && (h = h.replace(je, "$1"), o = (ye.test(h) ? "&" : "?") + "_=" + ve+++o), b.url = h + o), b.ifModified && (C.lastModified[h] && w.setRequestHeader("If-Modified-Since", C.lastModified[h]), C.etag[h] && w.setRequestHeader("If-None-Match", C.etag[h])), (b.data && b.hasContent && !1 !== b.contentType || e.contentType) && w.setRequestHeader("Content-Type", b.contentType), w.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + ("*" !== b.dataTypes[0] ? "," + De + "; q=0.01" : "") : b.accepts["*"]), b.headers) w.setRequestHeader(r, b.headers[r]);
			if (b.beforeSend && (!1 === b.beforeSend.call($, w, b) || d)) return w.abort();
			if (l = "abort", v.add(b.complete), w.done(b.success), w.fail(b.error), u = Re(Ne, b, e, w)) {
				if (w.readyState = 1, p && g.trigger("ajaxSend", [w, b]), d) return w;
				b.async && 0 < b.timeout && (_ = x.setTimeout(function () {
					w.abort("timeout")
				}, b.timeout));
				try {
					d = !1, u.send(a, c)
				} catch (t) {
					if (d) throw t;
					c(-1, t)
				}
			} else c(-1, "No Transport");

			function c(t, e, n, i) {
				var r, o, a, s, l, c = e;
				d || (d = !0, _ && x.clearTimeout(_), u = void 0, f = i || "", w.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (s = function (t, e, n) {
					for (var i, r, o, a, s = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
					if (i)
						for (r in s)
							if (s[r] && s[r].test(i)) {
								l.unshift(r);
								break
							}
					if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || t.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							a || (a = r)
						}
						o = o || a
					} if (o) return o !== l[0] && l.unshift(o), n[o]
				}(b, w, n)), s = function (t, e, n, i) {
					var r, o, a, s, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
					for (o = u.shift(); o;)
						if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(a = c[l + " " + o] || c["* " + o]))
							for (r in c)
								if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
									!0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
									break
								}
						if (!0 !== a)
							if (a && t.throws) e = a(e);
							else try {
								e = a(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: a ? t : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(b, s, w, r), r ? (b.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (C.lastModified[h] = l), (l = w.getResponseHeader("etag")) && (C.etag[h] = l)), 204 === t || "HEAD" === b.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !t && c || (c = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || c) + "", r ? m.resolveWith($, [o, c, w]) : m.rejectWith($, [w, c, a]), w.statusCode(y), y = void 0, p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [w, b, r ? o : a]), v.fireWith($, [w, c]), p && (g.trigger("ajaxComplete", [w, b]), --C.active || C.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function (t, e, n) {
			return C.get(t, e, n, "json")
		},
		getScript: function (t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function (t, r) {
		C[r] = function (t, e, n, i) {
			return g(e) && (i = i || n, n = e, e = void 0), C.ajax(C.extend({
				url: t,
				type: r,
				dataType: i,
				data: e,
				success: n
			}, C.isPlainObject(t) && t))
		}
	}), C._evalUrl = function (t) {
		return C.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, C.fn.extend({
		wrapAll: function (t) {
			var e;
			return this[0] && (g(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this
		},
		wrapInner: function (n) {
			return g(n) ? this.each(function (t) {
				C(this).wrapInner(n.call(this, t))
			}) : this.each(function () {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(n) : t.append(n)
			})
		},
		wrap: function (e) {
			var n = g(e);
			return this.each(function (t) {
				C(this).wrapAll(n ? e.call(this, t) : e)
			})
		},
		unwrap: function (t) {
			return this.parent(t).not("body").each(function () {
				C(this).replaceWith(this.childNodes)
			}), this
		}
	}), C.expr.pseudos.hidden = function (t) {
		return !C.expr.pseudos.visible(t)
	}, C.expr.pseudos.visible = function (t) {
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
	}, C.ajaxSettings.xhr = function () {
		try {
			return new x.XMLHttpRequest
		} catch (t) {}
	};
	var bK = {
			0: 200,
			1223: 204
		},
		We = C.ajaxSettings.xhr();
	$.cors = !!We && "withCredentials" in We, $.ajax = We = !!We, C.ajaxTransport(function (r) {
		var o, a;
		if ($.cors || We && !r.crossDomain) return {
			send: function (t, e) {
				var n, i = r.xhr();
				if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (n in r.xhrFields) i[n] = r.xhrFields[n];
				for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
				o = function (t) {
					return function () {
						o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(bK[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
					4 === i.readyState && x.setTimeout(function () {
						o && a()
					})
				}, o = o("abort");
				try {
					i.send(r.hasContent && r.data || null)
				} catch (t) {
					if (o) throw t
				}
			},
			abort: function () {
				o && o()
			}
		}
	}), C.ajaxPrefilter(function (t) {
		t.crossDomain && (t.contents.script = !1)
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (t) {
				return C.globalEval(t), t
			}
		}
	}), C.ajaxPrefilter("script", function (t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), C.ajaxTransport("script", function (n) {
		var i, r;
		if (n.crossDomain) return {
			send: function (t, e) {
				i = C("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", r = function (t) {
					i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), k.head.appendChild(i[0])
			},
			abort: function () {
				r && r()
			}
		}
	});
	var bL, Be = [],
		Ue = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = Be.pop() || C.expando + "_" + ve++;
			return this[t] = !0, t
		}
	}), C.ajaxPrefilter("json jsonp", function (t, e, n) {
		var i, r, o, a = !1 !== t.jsonp && (Ue.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(t.data) && "data");
		if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ue, "$1" + i) : !1 !== t.jsonp && (t.url += (ye.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return o || C.error(i + " was not called"), o[0]
		}, t.dataTypes[0] = "json", r = x[i], x[i] = function () {
			o = arguments
		}, n.always(function () {
			void 0 === r ? C(x).removeProp(i) : x[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Be.push(i)), o && g(r) && r(o[0]), o = r = void 0
		}), "script"
	}), $.createHTMLDocument = ((bL = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === bL.childNodes.length), C.parseHTML = function (t, e, n) {
		return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || ($.createHTMLDocument ? ((i = (e = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, e.head.appendChild(i)) : e = k), o = !n && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = $t([t], e, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
		var i, r, o
	}, C.fn.load = function (t, e, n) {
		var i, r, o, a = this,
			s = t.indexOf(" ");
		return -1 < s && (i = _e(t.slice(s)), t = t.slice(0, s)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < a.length && C.ajax({
			url: t,
			type: r || "GET",
			dataType: "html",
			data: e
		}).done(function (t) {
			o = arguments, a.html(i ? C("<div>").append(C.parseHTML(t)).find(i) : t)
		}).always(n && function (t, e) {
			a.each(function () {
				n.apply(this, o || [t.responseText, e, t])
			})
		}), this
	}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		C.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), C.expr.pseudos.animated = function (e) {
		return C.grep(C.timers, function (t) {
			return e === t.elem
		}).length
	}, C.offset = {
		setOffset: function (t, e, n) {
			var i, r, o, a, s, l, c = C.css(t, "position"),
				u = C(t),
				h = {};
			"static" === c && (t.style.position = "relative"), s = u.offset(), o = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g(e) && (e = e.call(t, n, C.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + r), "using" in e ? e.using.call(t, h) : u.css(h)
		}
	}, C.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				C.offset.setOffset(this, e, t)
			});
			var t, n, i = this[0];
			return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function () {
			if (this[0]) {
				var t, e, n, i = this[0],
					r = {
						top: 0,
						left: 0
					};
				if ("fixed" === C.css(i, "position")) e = i.getBoundingClientRect();
				else {
					for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
					t && t !== i && 1 === t.nodeType && ((r = C(t).offset()).top += C.css(t, "borderTopWidth", !0), r.left += C.css(t, "borderLeftWidth", !0))
				}
				return {
					top: e.top - r.top - C.css(i, "marginTop", !0),
					left: e.left - r.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || by
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, r) {
		var o = "pageYOffset" === r;
		C.fn[e] = function (t) {
			return H(this, function (t, e, n) {
				var i;
				if (m(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[r] : t[e];
				i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n
			}, e, t, arguments.length)
		}
	}), C.each(["top", "left"], function (t, n) {
		C.cssHooks[n] = qt($.pixelPosition, function (t, e) {
			if (e) return e = It(t, n), bA.test(e) ? C(t).position()[n] + "px" : e
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function (a, s) {
		C.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function (i, o) {
			C.fn[o] = function (t, e) {
				var n = arguments.length && (i || "boolean" != typeof t),
					r = i || (!0 === t || !0 === e ? "margin" : "border");
				return H(this, function (t, e, n) {
					var i;
					return m(t) ? 0 === o.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + a], i["scroll" + a], t.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(t, e, r) : C.style(t, e, n, r)
				}, s, n ? t : void 0, n)
			}
		})
	}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
		C.fn[n] = function (t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), C.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), C.fn.extend({
		bind: function (t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function (t, e) {
			return this.off(t, null, e)
		},
		delegate: function (t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function (t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	}), C.proxy = function (t, e) {
		var n, i, r;
		if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return i = s.call(arguments, 2), (r = function () {
			return t.apply(e || this, i.concat(s.call(arguments)))
		}).guid = t.guid = t.guid || C.guid++, r
	}, C.holdReady = function (t) {
		t ? C.readyWait++ : C.ready(!0)
	}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = S, C.isFunction = g, C.isWindow = m, C.camelCase = Q, C.type = y, C.now = Date.now, C.isNumeric = function (t) {
		var e = C.type(t);
		return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return C
	});
	var bM = x.jQuery,
		Qe = x.$;
	return C.noConflict = function (t) {
		return x.$ === C && (x.$ = Qe), t && x.jQuery === C && (x.jQuery = bM), C
	}, t || (x.jQuery = x.$ = C), C
}), jQuery.ajaxSetup({
	cache: !0
}), jQuery.easing.jswing = jQuery.easing.swing,
function (r) {
	r.fn.myTab = function (i) {
		return i = jQuery.extend({
			active: 1,
			showSpeed: 400
		}, i), this.each(function () {
			var t = r(this),
				e = t.children("[data-tab]"),
				n = i.active - 1;
			t.addClass("simpleTab").prepend('<div class="tab-wrapper"></div>'), e.addClass("tab-content").each(function () {
				r(this).hide(), t.find(".tab-wrapper").append('<div><span class="btn">' + r(this).data("tab") + "</span></div>")
			}).eq(n).show(), t.find(".tab-wrapper span").on("click", function () {
				var t = r(this).parent().index();
				return r(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), r(this).addClass("activeTab"), e.eq(t).is(":hidden") && e.hide().eq(t).fadeIn(i.showSpeed), !1
			}).eq(n).addClass("activeTab")
		})
	}
}(jQuery),
function (a) {
	a.fn.hoverTimeout = function (n, i, r, o) {
		return this.each(function () {
			var t = null,
				e = a(this);
			e.hover(function () {
				clearTimeout(t), t = setTimeout(function () {
					i.call(e)
				}, n)
			}, function () {
				clearTimeout(t), t = setTimeout(function () {
					o.call(e)
				}, r)
			})
		})
	}
}(jQuery),
function (a, s, t) {
	var l = {
		customClass: "simply-scroll",
		frameRate: 30,
		speed: 1,
		orientation: "horizontal",
		auto: !0,
		autoMode: "loop",
		manualMode: "end",
		direction: "forwards",
		pauseOnHover: !0,
		pauseOnTouch: !0,
		pauseButton: (a.fn.simplyScroll = function (t) {
			return this.each(function () {
				new a.simplyScroll(this, t)
			})
		}, !1),
		startOnLoad: !1
	};
	a.simplyScroll = function (t, e) {
		var n = this;
		this.o = a.extend({}, l, e || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal$/) && this.o.orientation == l.orientation) && "rtl" == a("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards$/) && this.o.direction == l.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
			start: "touchstart MozTouchDown",
			move: "touchmove MozTouchMove",
			end: "touchend touchcancel MozTouchRelease"
		} : {
			start: "mouseenter",
			end: "mouseleave"
		}, this.$list = a(t);
		var i = this.$list.children();
		if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < i.length) {
			var r = !1,
				o = 0;
			this.isHorizontal ? (i.each(function () {
				o += a(this).outerWidth(!0)
			}), r = i.eq(0).outerWidth(!0) * i.length !== o) : (i.each(function () {
				o += a(this).outerHeight(!0)
			}), r = i.eq(0).outerHeight(!0) * i.length !== o), r && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
				float: "left",
				width: o + "px"
			}) : this.$list.children().css({
				height: o + "px"
			}))
		}
		this.o.startOnLoad ? a(s).load(function () {
			n.init()
		}) : this.init()
	}, a.simplyScroll.fn = a.simplyScroll.prototype = {}, a.simplyScroll.fn.extend = a.simplyScroll.extend = a.extend, a.simplyScroll.fn.extend({
		init: function () {
			this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnForward = a(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
			var t = Math.ceil(this.clipMax / this.itemMax);
			if (this.isAuto && "loop" == this.o.autoMode && (this.$list.css(this.dimension, this.posMax + this.itemMax * t + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, t).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-t).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "none")))), this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
				for (; 0 != this.itemMax % this.o.speed;)
					if (this.o.speed--, 0 === this.o.speed) {
						this.o.speed = 1;
						break
					}(c = this).trigger = null, this.funcMoveForward = function (t) {
				void 0 !== t && t.preventDefault(), c.trigger = c.isAuto || "end" != c.o.manualMode ? null : this, c.isAuto ? c.isForwards ? c.moveForward() : c.moveBack() : c.moveForward()
			}, this.funcMovePause = function () {
				c.movePause()
			}, this.funcMoveStop = function () {
				c.moveStop()
			}, this.funcMoveResume = function () {
				c.moveResume()
			}, this.isAuto && (this.paused = !1, this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.isAuto && this.o.pauseOnHover && !this.supportsTouch && this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume), this.funcMoveForward())
		},
		moveForward: function () {
			var t = this;
			this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), t.interval = setInterval(function () {
				t.$clip[0]["scroll" + t.scrollPos] < t.posMax - t.clipMax ? t.$clip[0]["scroll" + t.scrollPos] += t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
			}, t.intervalDelay)
		},
		movePause: function () {
			clearInterval(this.interval)
		},
		moveStop: function (t) {
			this.movePause(), null !== this.trigger && (void 0 !== t && a(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == t ? this.moveBack() : this.moveForward())
		},
		moveResume: function () {
			"forward" == this.movement ? this.moveForward() : this.moveBack()
		},
		resetPos: function () {
			this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
		}
	})
}(jQuery, window);
var _$_662b = ["cookie", "", ";expires=", ";path=/", "=", "test", "ok", ";", "", "click", "", '<input class="emoKey" type="hidden" size="', '" value=" ', '" />', "select", "cursor", "pointer", "", "active", "", "", '<ul class="hide ', '">', "i", '<i class="', "class", '"></i>', "href", "a", "_", "-", '<a href="', "</a>", '</ul><a href="', '</a><ul class="hide ', "li", "</ul>", "ul", ".summary-content", "file-text-o", ".noimage", ".thumb-img", ".post-type", ".thumb-area", "title", ".jmptext", ".h2", "s400", "s300", "data-img", "s72-c", "/default.jpg", "/mqdefault.jpg", "https://img.youtube.com/vi/", "video-camera", "/", "no_image", "rgba(0, 0, 0, 0.15)", "img.youtube.com", '<span class="youtubeplay"><i class="fa fa-play-circle-o"></i></span>', "hyoutube", ".latest-img", "music", "camera-retro", "quote-left", '<i class="fa fa-', "$1", '<div class="review-place ', '"><span class="review-value">', '</span><div class="slice"><div class="bar"></div></div></div>', "width", "%", ".bar", "&quot;", '...<a href="', '" class="rmtext" title="', " ", "</a>", "style", "background:", "https", 'url("', '")', " no-repeat center center;background-size: cover", "", "", "", "#ajax-search-form", ":text", '<div class="src-result ', ' hide" id="search-result"></div>', "#search-result", "submit", '<div class="loader">', "</div>", "//", "/feeds/posts/default?alt=json-in-script&q=", "&max-results=", '<div class="src-header">', " &quot;", "&quot;</div>", '<a class="src-close ', '" href="/">&times;</a><div class="src-area">', "ig", "<span class='src-mark'>", "</span>", "alternate", "enclosure", "content", "summary", "media$thumbnail", "/s", "-c/", "default", "mqdefault", "...", '<div class="src-item"><div class="src-img-outer ', ' go-left"><a class="src-img show" " ', "url('", "')", ' no-repeat center center;background-size: cover" href="', '" ><div class="post-type absolute"><i class="fa fa- ', '"></i></div></a></div><a class="', ' src-title" href="#', '<p class="src-summary" >', "</p>", '<div class="src-morepost"><a class="show btn" title="more" href="/search?q=', "&quot;</a></div>", '<a class="close" href="/">&times;</a><strong>', "</strong>", "jsonp", ".src-close", "grid", "vlist", "vgrip", ".post-outer", ".blog-posts.hfeed", "#view .grid", "#view .list", "list", "<b>", "</b><div><span>", "</span><small>", "</small></div>", ".postdate", ".index-post", ".published", "div", "<div></div>", "a.blog-pager-older-link", "", "//", ".disqus.com/blogger_index.js", "html", ".hfeed-inner", "vgrid", "item", '<a class="loadpost show" href="javascript:;">', '<div class="loader hide">Loading...</div>', '<div class="rct-loadmore no-decor" ></div>', ".blog-pagerindex", "«", "hlist", "hgrip", "&#187;", "page", '<span class="showpage"><a href="">', "</a></span>", '<span class="showpageNum"><a href="/search/label/', "?&max-results=", '<span class="showpageNum"><a class="xpagex" href="#" alt="', '<span class="showpageNum"><a class="xlabelx" href="#" alt="', '<span class="showpageNum"><a href="">1</a></span>', '">1</a></span>', '<span class="dotxpage"> ... </span>', '<span class="showpagePoint">', '<span class="showpageNum"><a href="#" class="xpagex" alt="', '<span class="showpageNum"><a href="#" class="xlabelx" alt="', "pageArea", "blog-pagerindex", "display", "block", "load-next", ".hfeed .loader", "alt", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script", "/feeds/posts/summary/-/", "?start-index=", ".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx", "/search/label/", "?updated-max", "?max", "?&max", "?q=", ".html", "max-results=", "#PageNo=", "/feeds/posts/summary?max-results=1&alt=json-in-script", "label", "?max-results=1&alt=json-in-script", "/search?updated-max=", "?updated-max=", ".blog-posts .loader", "#main", "html, body", ".sidebar-right", "#sidebar-top", "#sidebartabs", "#sidebar-bottom", ".sidebar-right .wrap-inner", "data-label", "data-type", "data-url", "data-color", '<i class="fa fa-flash"></i> ', "h2", ",", '<a class="morepost btn" href="', "/search", "recent", "/label/", "?max-results=", '<a href="', '"></a>', "slider ", "column ", "fbig ", "gallery ", "featured ", "carousel ", "#", '<div class="owl-controls"><div class="owl-nav"></div></div>', "s", "c", "n", "fs", "f3", "random", "fade", "data-label data-url data-type data-color", "#drcmt", '<script async="true" src="//', ".disqus.com/recent_comments_widget.js?num_items=", '&avatar_size=32&excerpt_length=100&hide_mods=0" ><\/script>', '<div class="disqus-summary" />', ".dsq-widget-user,.dsq-widget-comment,.dsq-widget-meta", ".dsq-widget-item", "", "", "", "", '<div class="aazs-flickr">', "{", "}", '<div class="recent-tab">', '<div data-tab="', "aazs-widget", ".recent-tab", "complex ", ".tab-content", "script", "facebook-jssdk", "//connect.facebook.net/", "/sdk.js", "v3.2", "edge.create", "unlock_content", "message.send", "xfbml.render", ".FBbox", "load-done", "FBbox", '<div id="FBbox"><div class="fb-page" data-href="', '" data-width="550"></div></div>', "widget-loaded", "dhref-done", "", "/w400/", "", "", "", "", "", "", "", "", "", "", "", "", "", '<span class="hide">Facebook</span>', '<span><b class="shre-ct a{total}">{total}</b></span>', "", ".dhref", ".wrap-inner", "px", ".innerwrap", "absolute", "side-fixed", "0", "auto", "sub-menu", "sub-sub-menu", ".submenu", "thumb-outer", "animated zoomIn", "heading-text", '<div class="loader"></div>', ".varsumlength", ".varfixMenu", ".varmonthName", "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec", ".varstickySide", ".varsliderspeed", ".varnavipostpage", ".varmaxcommentdepth", ".vardateformat", "YYYY/MM/DD", ".varrcadminBlog", "y", ".varhideauthor", ".varhideLatest", ".varcseID", ".varhideEmo", ".varhomelist", ".varfeatpost", ".varhomePageNavi", ".varfbappsid", "160447341157187", ".varfblang", "en_US", ".vardajaxPageNavi", ".varsrctext", "Type and hit enter to search...", ".varntext", "Previous Article", ".varptext", "Next Article", ".varmtext", "More", ".varlmtext", "Load more entries...", ".varvmtext", "View More About", ".varreltext", "RELATED CONTENT", ".varrectext", "Recent Post", ".varrecotext", "Recommended For You", ".vartwitterauthor", "A_A_Z_S", ".vardisqusshortname", "", ".varshowrelated", ".varshowrecommended", ".varrelstyle", "carousel", ".varhexcerpt", ".varhreview", ".vartopbreakline", ".varbottombreakline", ".varautoplay", ".vartopbreaklineload", ".varbottombreaklineload", "", ".varrecentpost", ".varrandompost", ".varfeaturedpost", ".varrecentcomment", ".varfbig1", ".varfbig2", ".varfbig1animated", ".vargallery1", ".vargallery2", ".vargallery3", ".varcolumn1", ".varcolumn2", ".varcolumn1animated", ".varcolumn2animated", ".varnewsticker", ".varslider", ".varcarousel1", ".varcarousel2", ".varrelated", ".varvideo", ".varfeatured1", ".varfeatured2", ".varfeatured3", ".varfeatured4", ".varlist", ".varhot", ".vardisquscomment", ".varflickrbadge", ".vartimeline", "allaboutzodiacsigns", "", ".home-area #Blog1,.home-area .posts-title", "", ".item-topmeta", ".post-body", 'if (this.value==""){this.value="', '";}', 'if (this.value=="', '"){this.value="";}', ".errorsrc input,.search-form input", "text/javascript", "https", "https:", "https:", "//www.google.com/cse/cse.js?cx=", "", "#body-area", "custom-cse-sevida", "searchresults-only0", ".comments-tabs", ".canUrl", ".bposId", ".pstUrl", "<div data-tab='Google+'><div class='tab-blogger'></div></div>", "<div data-tab='Disqus'><div class='tab-disqus'><div id='disqus_thread'></div></div></div>", "<div data-tab='Facebook'><div class='tab-facebook'><div class='fb-comments' data-numposts='5' data-width='100%' data-href='", "'></div></div></div>", "", "show", ".menu", ".", '<div class="sub-icon"><span class="sub-button ', ' btn"><i class="fa fa-caret-down"></i></span></div>', "submenu", "ul.", ' btn"><i class="fa fa-caret-right"></i></span></div>', "subsubmenu", "<span class='menu-desc'>", ".menu li a", "<span class='soc-desc'>", "<span class='soc-count'>", ".social-desc", "have-desc", ".menu-desc", ".main-menu li", ".sc-move", "padding-left", ".main-menu a", "a.home-icon", "left", '.main-menu a[href="#"]', "easeOutQuad", "nohover", ".home-icon", ".main-menu > li", ":not(:animated)", "easeInExpo", ".menu li", "", "", "", '<div class="emoWrap hide">', "", "iframe#comment-editor", " <amp-img width='36' height='36' layout='responsive' '' src='", "' alt='", "'/>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "data-tab", ".widget", "#sidebar-tabs1", ".labels-wrap", ".plabelsbtn", ".comments", "home-area", "#container", "index-area", "index", "#aazs", ".searchQuered", "archive", "ablist", "abgrip", "<div ", ".HTML", '"', '" ', "f2", "slide-width=630", ' class="widget-area mywidget hide"></div><div class="handle mywidget hide"></div>', '<div class="wid-pagenumber"></div>', '<a class="wid-pagenum btn" alt="1">«</a>', '<a class="wid-pagenum btn" alt="', '">«</a>', '<a class="wid-pagenum btn" alt="1">1</a>', "<span> ... </span>", "<span ", ";border-color:", ';background-image:initial" ', 'class="actual">', '">&#187;</a>', ".wid-pagenumber", '<div class="handle"></div><div class="handle2 json-process"><div class="loader"></div></div>', ".widget-area", ".handle2", "data-tag", "/feeds/posts/default?start-index=", "&orderby=published&alt=json-in-script", "/feeds/posts/default/-/", ".wid-pagenum", "replies", "text/html", 'class="review-place absolute"><span class="review-value">', '</span><div class="slice"><div "width:', '%" class="bar"></div></div></div>', ".blogspot", "com", ".blogspot.com", ".blog-posts", ".items:gt(", ")", ".handle", "hide", ".handle,.loader,.handle2", ".readmorebut", "noborder", "aazs", "owl-carousel", "fadeOut", "zoomIn", ".owl-nav", ".items", "<div class='wrapitem'></div>", "<div class='feat-wrapitem'></div>", '<div class="feat-wrapinner"></div>', ".feat-wrapitem:first-child", ".feat-wrapinner", "<div class='fbig-widget-area'></div>", "gallery", " hovergallery", "show botwid", ".hover-info", ".hoveffect", ".thumb-outer", ".rcthumb", "s150", "s600", "mega-menu", "feed-proc", "zoomIn animated", ".fbig-widget-area .items", "<div class='animated-item'></div>", ".animated-item", '<div class="animated-area"></div>', "mouseleave touchend", "start", "mouseenter touchstart", "stop", ".owl-carousel", "score", "d", ' class="', "first-item ", 'items"><div class="items-inner">', 'class="rcptime">', 'class="postdate absolute"><b>', "</small></div></div>", '<div class="table-cell thumb-outer', " hoveffect", '"><div class="mythumb thumb-area', " first-image", '"><div class="post-type absolute"><i class="fa fa-', '"></i></div><a class="rcthumb show" title="', '" href="', '" data-img="', '"', "ytimg.googleusercontent.com", "</a></div></div>", '"border-', "right", "-color:", 'class="', "first-area ", 'content-area table-cell">', '"color:', 'class="ct-before"><i class="fa fa-circle"></i></div>', "<h3 ", '"', "background-", "color:", 'class="heading-text"><a ', 'class="hoveffect"', ' href="', '</a></h3><div class="metainfo">', '<span class="wid-author"><i class="fa fa-user"></i> ', "</span> ", '<span class="wid-date"><i class="fa fa-calendar"></i> ', "DD", "MM", "YYYY", '<span class="widcomments"><i class="fa fa-comments"></i> <a href="', '#blogger_cm">', '<div class="psummary hide">', '<a class="readmorebut" href="', '#more" title="', '">More</a>', '<span class="rcptags absolute"><a ', 'class="btn" title="', "</div></div>", 'a[class="item-tag"]:lt(', '<h4><span class="title-wrap">', '</span></h4><div class="owl-nav"></div>', "/feeds/posts/summary?max-results=0&orderby=published&alt=json-in-script", "/feeds/posts/default?max-results=", "&orderby=published&start-index=", "&alt=json-in-script", "/feeds/comments/default?alt=json-in-script&orderby=published", '<div class="rcomment-area">', '<div class="rcomment-item', " rcadmin", " rcguest", '<img class="rcomment-img" alt="', '" title="', '" target="_blank" rel="noopener" href="', '" src="', '"/>', '<div class="rcomment-info"><b><a target="_blank" rel="nofollow noopener" href="#', '</a></b> on:<i><a class="rcomment-title" href=" ', '</a></i><div class="rcomment-meta"><div class="com-date"><b>', '</small></div></div><div class="com-time">', "</div></div></div>", '<div class="rcomment-summary">', '<div class="clear"></div></div>', " <amp-img layout='responsive' alt='emo' src='", "' class='emo' alt='", ".rcomment-summary", "<span>No result!</span>", "Anonymous", "", "g", '<div class="shrt shrt-$1" $2 $3>', ".post-body,.cm_body p,.HTML .widget-content", "icon", '<i class="fa shrt-icon ', "fa-", "Tab", "Dont Have any text content", ".shrt-content", "shrt-tabhtml", ".shrt-tab,.shrt-vtab", "", "", "", '<div class="acrd-content">', "My accordion", ".shrt-item", "current", ".acrd-toggle", "showed", ".acrd-content", ".shrt-accordion", "fast", ".acrd-content:visible", "h3.acrd-toggle", ".shrt-accordion .acrd-toggle", "src", "color", "featured", "height", "visual", "comments", "user", "playlist", '<div class="inlinestyle frame-shrt-soundcloud', " pfeatured", '"><amp-iframe width="', "320", '" height="', "130", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/', "tracks", "users", "xxxxxxx", "&amp;color=", "ff5500", "&amp;auto_play=", "false", "&amp;hide_related=false&amp;show_comments=", "&amp;show_user=", "true", "&amp;show_reposts=false&amp;visual=", '"><div overflow="true"/></amp-iframe></div>', ".shrt-soundcloud", "highlight", "background", "info", "logo", '<div class="inlinestyle frame-shrt-dailymotion', '"><amp-iframe width="', "270", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.dailymotion.com/embed/video/', "x12k542", "?logo=", "1", "&info=", "&highlight=", "29b7ff", "&foreground=", "ffffff", "&background=", "000000", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-dailymotion", "control", "related", '<div class="inlinestyle frame-shrt-youtube', "370", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.youtube.com/embed/', "9ua_4ajpP58", "?list=", "&amp;rel=", "&amp;controls=", "&amp;showinfo=", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-youtube", '<div class="inlinestyle frame-shrt-map', '" src="https://www.google.com/maps/embed?pb=', '"></amp-iframe></div>', ".shrt-map", "shrt-message", ".shrt-alert, .shrt-warning, .shrt-update, .shrt-success, .shrt-info, .shrt-error", '<div class="headline">', '<div class="message-wrapper">', ".shrt-message", "url", "rel", 'href="', '"', '<a class="shrtImgUrl ', ' rel="', '<amp-img layout="responsive" class="shrtImg', '" width="', "", '"/>', ".shrt-img", "glpost", "br", ".shrt-pgallery,.shrt-bgallery", "type", '<pre data-codetype="', "HTML", "Add some code here", "</pre>", ".shrt-code", "pre", '<span class="line-number"></span>', '<span class="cl"></span>', "span", "<span>", "#contact", ".shrt-contact", '" class="jdshrt-tooltip">', "Insert Link Title", "Insert Tooltip Text", "</span></a>", ".shrt-tooltip", '<div class="shrt-slide-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ') no-repeat center center;background-size: cover;" href="', '"></a><div class="shrt-summary">', '<h3><a href="', "</a></h3>", "<p>", "shrt-inhtml", ".shrt-pslide", '<div class="shrt-carousel-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ".shrt-pcarousel", "top", "review-value", '<div class="rev-item"><div class="rev-desc">', "No Detail", '</span></div><div class="rev-value-outer"><div class="rev-value" data-value="', '" "width:', '%"></div></div></div>', '<div class="rev-summary"><div class="rev-desc-place table-cell"><h4>', "No Title", "</h4><span>", "No Description", '</span></div><div class="rev-overall table-cell"><div class="overall-inner"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "No Label", "</span></div></div></div>", '<div class="top-revscrore"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "</span></div>", ".rev-value", "data-value", ".rev-score", "p", ".c100", "rotate(", "deg)", ".c100 .bar", ".shrt-review", ".widget-content", 'data-url="', 'data-color="', '<div class="aazs-widget" data-label="', '" data-type="', ">", '<div class="aazs-widget" data-label="random" data-type="simple rcpost">', '<div class="aazs-widget" data-label="random" data-type="simple rdpost">', '" data-type="simple ftpost">', ".aazs-widget", ".post-body strike", ".post-title", ".post-body h2 strike", ".post-body h3 strike", ".post-subtitle", "id", ".post", "#post-url", "unlocked", "unlocked-", "</locktag>", "<locktag>", '<div class="locked-content"><div class="inner"><i class="color fa fa-lock"></i><div class="locked-content-actions"><div class="locked-content-action"><div class="fb-like" data-href="', '" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div></div></div></div></div>', "", ".item-post .post-body", "", "", "", "", "", "", ".item-area", ".cm_form", '<a href="#origin_cform" onclick="Reset_Comment_Form()">', "#r_f_c", "#comment-editor", "&parentID=", "#%7B", ".profile-sec .widget", ' hover" href="', '<a class="fa fa-', ".fa", "<div class='authoriconBox'></div>", ".profile-sec .widget-content", ".item-topmeta .fn", "All About Zodiac Signs", ".authoriconBox", ".authorProfile p", ".authorSocial", '<span class="', " hover", "fa fa-", '"></span>', ".authorSocial a", ".adsinside", "left-post", "body", "right-post", "left-side", "right-side", "full-post", "hide-adstitle", '<div class="adsinside-it ads-outer"></div>', ".adsinside-it", ".adsbelow", '<div class="adstitle', "", '"><div class="adspltop"></div>', "", ".adspltop", "", "", "", "", ".adsendpost", '<div class="adsbottom', "", '<div class="adsplbottom"></div></div>', ".bottom-infoitem", ".adsplbottom", "", '<input type="hidden" class="aazs-page"></input><input type="hidden" class="aazs-per-page"></input>', '<div class="page-place no-decor"></div>', "[lnt]", "[fnt]", '</div><div class="page-item">', '<div class="page-item">', ".page-place", ".aazs-page", ".aazs-per-page", '<a class="previous_link btn"><i class="fa fa-chevron-left"></i></a>', '<a class="page_link btn" data-title="', '" ","href"," longdesc="', '<a class="next_link btn"><i class="fa fa-chevron-right"></i></a>', "active_page", ".page_link:first", "none", ".active_page", ".page_link[longdesc=", "]", ".page_link", ".previous_link", ".next_link", "data-title", ".all_link", '@<a href="#c', ".cm_wrap .cm_body p", "#comment-form_", "#rc", "parentId", "data-level", "#c", ":first", ":first .cm_reply", '<div class="cm_wrap" id="c', '" data-level="', " .cm_child:first", "/s55-c/", ".cm-img", '<div class="nw_com"></div>', ".nw_com", ".comments-tabs .tab-wrapper div", ".comments-tabs .tab-wrapper", "table", "pfeatured", ".tr-caption", '<span class="pcaption absolute">', ".pfeatured", ".post-body img", ".post-featured", '<div class="slide-pfeatured"></div>', ".slide-pfeatured", ".glpost", ".separator", ".post-featured a", ".post-featured > a", ".post-featured img", "/s600/", '<div class="hide url-post"><input aria-label="Post Url" class="url-post-input" type="text" value="" ', '" /></div>', ".url-post", ".showlink", "hover", ".item-share a", ".item-snippet", ".body-area", "", "show-popup", "", "", "", "", "", "", '<a class="menu-morepost', " random", '" href="/search', '"><i class="fa fa-plus"></i></a>', "mcarousel", '<div class="normal-tab">', ".normal-tab", '<a class="menu-morepost" href="/search/label/', "mtab", "mbig", "menulinks", ".links-submenu .widget", ".links-submenu", '<div class="links-content"><h2>', '</h2><div class="widget-content">', ".links-content", "gridpost", '<a class="grid-h2" href="/search', '<a class="morepost btn" href="/search', "li.submenu", ".menu-search", ".mobile-search", ".social-icon", ".mobile-icons", ":hidden", ".mobile-menu .sub-icon", '<a class="blog-pager-older-link-item go-right oldernewerright" title="Next Article - [title] - posted on [date]" href="[url]"><span>', "</span><div>[title]</div></a>", '<a class="blog-pager-newer-link-item go-left oldernewerleft" title="Previous Article - [title] - posted on [date]" href="[url]"><span>', '<amp-img layout="responsive" alt="blog-pager" src="', "a.blog-pager-older-link-item", "a.blog-pager-newer-link-item", "data-trans", "#body-area *", "span.trans", "scroll", ".header-wrap", "scrolled", ".container", "scroll-up", "fixmenu-work", ".allaboutzodiacsigns", "15px", ".sidebar-left", "stickyside-work", ".widget-loaded", "#facebook-jssdk", "item-area", ".tab-disqus", "disqus-loaded", ".disqus.com/embed.js", "data-timestamp", "", "", "", "", ":", "a.icons-facebook", "a.dhref-done", "item-page-loaded", ".pager-isi", "/feeds/posts/default?alt=json-in-script&published-min=", "&max-results=0&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=", "&max-results=3&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?", ".populars-img", ".img-change", 'background:url("', '") no-repeat center center;background-size: cover', "img-change", "showup", ".gotop", ".item-tag", ".reco-place", '<div class="reco-place blog-posts"><h4>', '</h4><div class="reco-inner"></div><span class="btn reco-close"><i class="fa fa-close"></i></span></div>', ".reco-inner", "showIt", "reco-click", ".reco-close", ".itemtags", ".footer-area", "related-work", "#related_posts", "related-work rel-", "fbig", "data-count", "data-number", ".tagscount", "[id=", "string", "transitioning", "1s ease-in-out", "a[href*=\\#]:not([href=\\#])", "transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", "resize", "small-wid", ".HTML > .widget-content", "small-post", ".tab-blogger #blogger_cm", "#blogger_cm", ".tab-blogger", "#gPlusComment", "#Blog1", "#gPlusComment > div", ".main-wrapper", ".sidebar-right .innerwrap", ".sidebartabs", "min-height", "-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform", "translate3d(1px,1px,1px)", "", "", "ontouchstart", "touch", "Safari", "CriOS", "standalone", " translateZ(0)", "onorientationchange", "orientationchange", "click touchstart", "mousedown", "touchmove", "mousemove", "touchend", "mouseup", "0s", ".mobile-menu .tab-wrapper a,.sub-button,.sub-button .fa", "ms", "translate(", "px,0)", "", "", "#allaboutzodiacsigns", "", ".index-post-outer"];

function haveCookie() {
	return _$_662b[0] in document
}

function setCookie(t, e, n) {
	if (!haveCookie()) return !1;
	var i = new Date;
	return i.setDate(i.getDate() + n), n = escape(e) + (null == n ? _$_662b[1] : _$_662b[2] + i.toUTCString()) + _$_662b[3], document.cookie = t + _$_662b[4] + n, getCookie(t) === e
}

function testcookie() {
	return !!setCookie(_$_662b[5], _$_662b[6])
}

function getCookie(t) {
	if (!havecookie()) return _$_662b[1];
	var e, n, i, r = document.cookie.split(_$_662b[7]);
	for (e = 0; e < r.length; e++)
		if (n = r[e].substr(0, r[e].indexOf(_$_662b[4])), i = r[e].substr(r[e].indexOf(_$_662b[4]) + 1), (n = n.replace(/^\s+|\s+$/g, _$_662b[1])) == t) return unescape(i);
	return _$_662b[1]
}

function delCookie(t) {
	setCookie(t, _$_662b[1], -1)
}

function checkLocal() {
	return _$_662b[8] != typeof localStorage
}

function setLocal(t, e) {
	return !!checkLocal() && (localStorage.setItem(t, e), !0)
}

function getLocal(t) {
	return checkLocal() && (t = localStorage.getItem(t)) ? t : _$_662b[1]
}

function delLocal(t) {
	localStorage.removeItem(t)
}

function setCookieLocal(t, e) {
	return checkLocal() ? setLocal(t, e) : !!testCookie() && setCookie(t, e)
}

function getCookieLocal(t) {
	return checkLocal() ? getLocal(t) : testCookie() ? getCookie(t) : _$_662b[1]
}

function delCookieLocal(t) {
	return checkLocal() ? delLocal(t) : testCookie() ? delCookie(t) : _$_662b[1]
}

function cmnu(t, o) {
	var a = _$_662b[21] + o + _$_662b[22];
	$(_$_662b[35], t).each(function () {
		var t = $(this).text(),
			e = t.substr(0, 1),
			n = t.substr(1),
			i = $(this).find(_$_662b[23]).length ? _$_662b[24] + $(this).find(_$_662b[23]).attr(_$_662b[25]) + _$_662b[26] : _$_662b[1],
			r = $(this).find(_$_662b[28]).attr(_$_662b[27]);
		a = _$_662b[29] == e || _$_662b[30] == e ? a + (_$_662b[31] + r + _$_662b[22] + i + n + _$_662b[32]) : a + (_$_662b[33] + r + _$_662b[22] + i + t + _$_662b[34] + o + _$_662b[22])
	}), a += _$_662b[36], $(t).html(a), $(_$_662b[37], t).each(function () {
		var t = $(this);
		0 == t.html().replace(rgx[0], _$_662b[1]).length && t.remove()
	}), $(_$_662b[35], t).each(function () {
		var t = $(this);
		0 == t.html().replace(rgx[0], _$_662b[1]).length && t.remove()
	})
}

function lpost(t) {
	var e, n = t.find(_$_662b[38]),
		i = n.html(),
		r = [];
	e = [], r = _$_662b[39];
	var o = t.find(_$_662b[40]),
		a = t.find(_$_662b[41]),
		s = t.find(_$_662b[42]);
	e = t.find(_$_662b[43]).width();
	var l = $(_$_662b[45]).attr(_$_662b[44]);
	t = (c = t.find(_$_662b[46])).text();
	var c = c.find(_$_662b[28]).attr(_$_662b[27]),
		u = 300 < e ? _$_662b[47] : _$_662b[48];
	if (a.attr(_$_662b[49], function (t, e) {
		return e.replace(_$_662b[51], _$_662b[52]).replace(_$_662b[50], u)
	}), o.length && (rgx[6].test(i) || rgx[8].test(i) ? (r = rgx[6].exec(rgx[6]), e = rgx[8].exec(i), r = null != r ? r[5] : e[3], e = _$_662b[53] + r + _$_662b[52], r = _$_662b[54]) : e = rgx[5].test(i) ? (e = rgx[5].exec(i))[4].replace(rgx[7], _$_662b[55] + u + _$_662b[55]) : _$_662b[56], o.attr(_$_662b[49], _$_662b[56] === e ? _$_662b[57] : e)), -1 != a.attr(_$_662b[49]).indexOf(_$_662b[58]) && (a.append(_$_662b[59]), a.parent(_$_662b[61]).addClass(_$_662b[60])), rgx[9].test(i) ? r = _$_662b[54] : rgx[10].test(i) ? r = _$_662b[62] : rgx[11].test(i) ? r = _$_662b[63] : rgx[12].test(i) && (r = rgx[12].exec(i).index <= 5 ? _$_662b[64] : _$_662b[39]), s.prepend(_$_662b[65] + r + _$_662b[26]), rgx[29].test(i) && !hrev) {
		for (o = [], s = 0, r = (o = i.match(rgx[29])).length, e = 0; e < r; e++) s += parseInt(o[e].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
		o = s / r, a.append(_$_662b[67] + rgx[1] + _$_662b[68] + o.toFixed(1) + _$_662b[69]), a.find(_$_662b[72]).css(_$_662b[70], 10 * o.toFixed(1) + _$_662b[71])
	}(i = i.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > sumLength && (i = i.substring(0, sumLength) + _$_662b[74] + c + _$_662b[75] + l + _$_662b[76] + t + _$_662b[22] + l + _$_662b[77]), n.html(i), a.attr(_$_662b[78], _$_662b[79] + (-1 != a.attr(_$_662b[49]).indexOf(_$_662b[80]) ? _$_662b[81] + a.attr(_$_662b[49]) + _$_662b[82] : _$_662b[57]) + _$_662b[83])
}

function ajaxsrc(i) {
	! function (t) {
		var f = {
				blogURL: _$_662b[1],
				srcBlank: _$_662b[56],
				findText: _$_662b[84],
				NotfindText: _$_662b[85],
				Showthumb: !0,
				LoadingText: _$_662b[86],
				viewMoreText: vmtx,
				scrthumbSize: 50,
				MaxPost: 10,
				summaryLength: 100
			},
			e = (f = t.extend({}, f, i), t(_$_662b[87])),
			n = e.find(_$_662b[88]);
		e.append(_$_662b[89] + rgx[1] + _$_662b[90]);
		var _ = t(_$_662b[91]);
		e.on(_$_662b[92], function () {
			var h = n.val();
			return _.show().html(_$_662b[93] + f.LoadingText + _$_662b[94]), t.get((_$_662b[1] === f.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : f.blogURL) + _$_662b[96] + h + _$_662b[97] + f.MaxPost, function (t) {
				var e, n, i, r, o, a, s = t.feed.entry;
				if (void 0 !== s) {
					a = _$_662b[98] + f.findText + _$_662b[99] + h + _$_662b[100], a += _$_662b[101] + rgx[1] + _$_662b[102];
					for (var l = 0, c = s.length; l < c; l++) {
						var u = new RegExp(h, _$_662b[103]);
						for (i = s[l].title.$t.replace(u, _$_662b[104] + h + _$_662b[105]), e = s[l].link.length, n = 0; n < e; n++) _$_662b[106] == s[l].link[n].rel && (r = s[l].link[n].href);
						for (n = 0; n < e; n++) {
							if (_$_662b[107] == s[l].link[n].rel) {
								o = s[l].link[n].type;
								break
							}
							o = _$_662b[39]
						}
						e = _$_662b[108] in s[l] ? s[l].content.$t : _$_662b[109] in s[l] ? s[l].summary.$t : _$_662b[1], _$_662b[110] in s[l] ? (n = s[l].media$thumbnail.url.replace(rgx[7], _$_662b[111] + f.scrthumbSize + _$_662b[112]), -1 != s[l].media$thumbnail.url.indexOf(_$_662b[58]) && (n = s[l].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]), o = _$_662b[54])) : rgx[6].test(e) || rgx[8].test(e) ? (o = rgx[6].exec(rgx[6]), n = rgx[8].exec(e), n = _$_662b[53] + (null != o ? o[5] : n[3]) + _$_662b[52], o = _$_662b[54]) : n = rgx[5].test(e) ? (n = rgx[5].exec(e))[4].replace(rgx[7], _$_662b[111] + f.scrthumbSize + _$_662b[112]) : f.srcBlank, rgx[9].test(e) ? o = _$_662b[54] : rgx[10].test(e) ? o = _$_662b[62] : rgx[11].test(e) ? o = _$_662b[63] : rgx[12].test(e) && (o = rgx[12].exec(e).index <= 5 ? _$_662b[64] : _$_662b[39]), (e = e.replace(rgx[15], _$_662b[1]).replace(/"/g, _$_662b[73]).replace(rgx[16], _$_662b[1])).length > f.summaryLength && (e = e.substring(0, f.summaryLength) + _$_662b[115]), e = e.replace(u, _$_662b[104] + h + _$_662b[105]), a += _$_662b[116] + rgx[30] + _$_662b[117] + (_$_662b[56] === n ? _$_662b[57] : _$_662b[118] + n + _$_662b[119]) + _$_662b[120] + r + _$_662b[121] + o + _$_662b[122] + rgx[32] + _$_662b[123] + r + _$_662b[22] + i + _$_662b[77] + (0 < f.summaryLength ? _$_662b[124] + e + _$_662b[125] : _$_662b[1]) + _$_662b[94]
					}
					a += _$_662b[94] + (t.feed.openSearch$totalResults.$t > t.feed.openSearch$itemsPerPage.$t ? _$_662b[126] + h + _$_662b[22] + f.viewMoreText + _$_662b[99] + h + _$_662b[127] : _$_662b[1]), _.html(a)
				} else _.html(_$_662b[128] + f.NotfindText + _$_662b[129])
			}, _$_662b[130]), !1
		}), e.on(_$_662b[9], _$_662b[131], function () {
			return _.fadeOut(), !1
		})
	}(jQuery)
}

function vmode(a) {
	! function (t) {
		var e = {
				viewdefault: _$_662b[132],
				clist: _$_662b[133],
				cgrid: _$_662b[134]
			},
			n = (e = t.extend({}, e, a), t(_$_662b[136]).find(_$_662b[135])),
			i = t(_$_662b[137]),
			r = t(_$_662b[138]);
		t = function () {
			return n.addClass(_$_662b[132]).removeClass(_$_662b[139]), i.addClass(_$_662b[18]), r.removeClass(_$_662b[18]), setCookieLocal(e.cgrid, null, 1e4), delCookieLocal(e.clist), !1
		};
		var o = function () {
			return n.removeClass(_$_662b[132]).addClass(_$_662b[139]), i.removeClass(_$_662b[18]), r.addClass(_$_662b[18]), setCookieLocal(e.clist, null, 1e4), delCookieLocal(e.cgrid), !1
		};
		getCookieLocal(e.clist) && _$_662b[132] != e.viewdefault ? (o(), delCookieLocal(e.clist)) : getCookieLocal(e.cgrid) && _$_662b[132] != e.viewdefault ? (t(), delCookieLocal(e.cgrid)) : getCookieLocal(e.clist) ? (o(), delCookieLocal(e.clist)) : getCookieLocal(e.cgrid) ? (t(), delCookieLocal(e.cgrid)) : _$_662b[132] != e.viewdefault ? (o(), delCookieLocal(e.clist)) : (t(), delCookieLocal(e.cgrid)), i.click(t), r.click(o)
	}(jQuery)
}

function cdate() {
	$(_$_662b[146]).each(function () {
		var t = $(this).attr(_$_662b[44]),
			e = mName;
		if (_$_662b[1] != t) var n = (i = t.substring(0, 10)).substring(0, 4),
			i = (t = i.substring(5, 7), i.substring(8, 10)),
			r = e[parseInt(t, 10) - 1];
		$(this).parents(_$_662b[145]).find(_$_662b[144]).html(_$_662b[140] + i + _$_662b[141] + r + _$_662b[142] + n + _$_662b[143])
	})
}

function lMore(t) {
	var e, n;
	e = jQuery, n = {
		olderPostsLink: _$_662b[1],
		loadMoreDiv: null,
		thumbnailSize: 400,
		summaryLength: 100,
		postContainerSelector: _$_662b[154],
		MoreText: lmtx,
		viewdefault: _$_662b[132],
		clist: _$_662b[133],
		cgrid: _$_662b[155],
		loading: !1
	}, n = e.extend({}, n, t), e(window), e(document), rgx[14]
}

function pageNavi(t) {
	! function (r) {
		var o, i, a, s, l, c = {
				postperpage: Npage,
				numshowpage: 3,
				previous: _$_662b[161],
				ec: pajax,
				viewdefault: _$_662b[139],
				container: _$_662b[154],
				clist: _$_662b[162],
				cgrid: _$_662b[163],
				next: _$_662b[164]
			},
			u = (c = r.extend({}, c, t), window.location.protocol + _$_662b[95] + window.location.host),
			h = location.href.replace(rgx[17], _$_662b[1]),
			e = function (t) {
				! function (t) {
					var e = _$_662b[1];
					for (nomerkiri = parseInt(c.numshowpage / 2), nomerkiri == c.numshowpage - nomerkiri && (c.numshowpage = 2 * nomerkiri + 1), mulai = s - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(t / c.postperpage) + 1, maksimal - 1 == t / c.postperpage && --maksimal, akhir = mulai + c.numshowpage - 1, akhir > maksimal && (akhir = maksimal), t = parseInt(s) - 1, 1 < s && (e = 2 == s ? _$_662b[165] == a ? e + (_$_662b[166] + c.previous + _$_662b[167]) : e + (_$_662b[168] + l + _$_662b[169] + c.postperpage + _$_662b[22] + c.previous + _$_662b[167]) : _$_662b[165] == a ? e + (_$_662b[170] + t + _$_662b[22] + c.previous + _$_662b[167]) : e + (_$_662b[171] + t + _$_662b[22] + c.previous + _$_662b[167])), 1 < mulai && (e = _$_662b[165] == a ? e + _$_662b[172] : e + (_$_662b[168] + l + _$_662b[169] + c.postperpage + _$_662b[173])), 2 < mulai && (e += _$_662b[174]), t = mulai; t <= akhir; t++) e = s == t ? e + (_$_662b[175] + t + _$_662b[105]) : 1 == t ? _$_662b[165] == a ? e + _$_662b[172] : e + (_$_662b[168] + l + _$_662b[169] + c.postperpage + _$_662b[173]) : _$_662b[165] == a ? e + (_$_662b[176] + t + _$_662b[22] + t + _$_662b[167]) : e + (_$_662b[177] + t + _$_662b[22] + t + _$_662b[167]);
					akhir < maksimal - 1 && (e += _$_662b[174]), akhir < maksimal && (e = _$_662b[165] == a ? e + (_$_662b[176] + maksimal + _$_662b[22] + maksimal + _$_662b[167]) : e + (_$_662b[177] + maksimal + _$_662b[22] + maksimal + _$_662b[167])), t = parseInt(s) + 1, s < maksimal && (e = _$_662b[165] == a ? e + (_$_662b[176] + t + _$_662b[22] + c.next + _$_662b[167]) : e + (_$_662b[177] + t + _$_662b[22] + c.next + _$_662b[167])), t = document.getElementsByName(_$_662b[178]);
					for (var n = document.getElementById(_$_662b[179]), i = 0; i < t.length; i++) t[i].innerHTML = e;
					t && 0 < t.length && (e = _$_662b[1]), n && (n.innerHTML = e), r(_$_662b[160]).css(_$_662b[180], _$_662b[181]), r(c.container).removeClass(_$_662b[182]), r(_$_662b[189]).click(function () {
						r(c.container).addClass(_$_662b[182]), r(_$_662b[183]).show();
						var t = r(this).attr(_$_662b[184]);
						return jsonstart = (t - 1) * c.postperpage, o = t, _$_662b[165] == a ? r.get(u + _$_662b[185] + jsonstart + _$_662b[186], _, _$_662b[130]) : r.get(u + _$_662b[187] + l + _$_662b[188] + jsonstart + _$_662b[186], _, _$_662b[130]), !1
					})
				}(t = parseInt(t.feed.openSearch$totalResults.$t, 10))
			},
			f = function () {
				var t = h; - 1 != t.indexOf(_$_662b[190]) && (l = -1 != t.indexOf(_$_662b[191]) ? t.substring(t.indexOf(_$_662b[190]) + 14, t.indexOf(_$_662b[191])) : -1 != t.indexOf(_$_662b[192]) ? t.substring(t.indexOf(_$_662b[190]) + 14, t.indexOf(_$_662b[192])) : -1 != t.indexOf(_$_662b[193]) ? t.substring(t.indexOf(_$_662b[190]) + 14, t.indexOf(_$_662b[193])) : t.substr(t.lastIndexOf(_$_662b[55]))), -1 == t.indexOf(_$_662b[194]) && -1 == t.indexOf(_$_662b[195]) && (-1 == t.indexOf(_$_662b[190]) ? (a = _$_662b[165], -1 != t.indexOf(_$_662b[196]) && -1 != t.indexOf(_$_662b[197]) ? c.postperpage = t.substring(t.indexOf(_$_662b[196]) + 12, t.indexOf(_$_662b[197])) : -1 != t.indexOf(_$_662b[196]) ? c.postperpage = t.substring(t.indexOf(_$_662b[196]) + 12) : c.postperpage = c.postperpage, s = -1 != h.indexOf(_$_662b[197]) ? h.substring(h.indexOf(_$_662b[197]) + 8, h.length) : 1, r.get(u + _$_662b[198], e, _$_662b[130])) : (a = _$_662b[199], -1 != t.indexOf(_$_662b[196]) && -1 != t.indexOf(_$_662b[197]) ? c.postperpage = t.substring(t.indexOf(_$_662b[196]) + 12, t.indexOf(_$_662b[197])) : -1 != t.indexOf(_$_662b[196]) ? c.postperpage = t.substring(t.indexOf(_$_662b[196]) + 12) : c.postperpage = c.postperpage, s = -1 != h.indexOf(_$_662b[197]) ? h.substring(h.indexOf(_$_662b[197]) + 8, h.length) : 1, r.get(u + _$_662b[187] + l + _$_662b[200], e, _$_662b[130])))
			};
		f();
		var _ = function (t) {
			t = (i = t.feed.entry[0]).published.$t.substring(0, 19) + i.published.$t.substring(23, 29), t = encodeURIComponent(t);
			var e = _$_662b[165] == a ? u + _$_662b[201] + t + _$_662b[97] + c.postperpage + _$_662b[197] + o : u + _$_662b[190] + l + _$_662b[202] + t + _$_662b[97] + c.postperpage + _$_662b[197] + o;
			if (c.ec) {
				var n = rgx[14];
				r.get(e, function () {}, _$_662b[153]).done(function (t) {
					(t = r(_$_662b[148]).append(t.replace(n, _$_662b[1])).find(c.container).children(_$_662b[135])).find(_$_662b[145]).each(function () {
						lpost(r(this))
					}), r(c.container).html(t), cdate(), vmode({
						viewdefault: c.viewdefault,
						clist: c.clist,
						cgrid: c.cgrid
					}), r(_$_662b[203]).hide(), t.addClass(rgx[31]), h = e, f(), r(_$_662b[205]).scrollTop(r(_$_662b[204]).offset().top - 50), window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(), window.disqus_shortname && r.getScript(_$_662b[151] + window.disqus_shortname + _$_662b[152]), window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse()
				})
			} else location.href = e
		}
	}(jQuery)
}

function chside(t) {
	t.parents(_$_662b[206]).length && sSide && (t = (t = $(_$_662b[207]).height()) + $(_$_662b[208]).height() + $(_$_662b[209]).height() + 30, $(_$_662b[210]).css({
		height: t
	}))
}

function thewid(t, e) {
	var n, i = t.attr(_$_662b[211]),
		r = t.attr(_$_662b[212]),
		o = void 0 !== t.attr(_$_662b[213]) ? t.attr(_$_662b[213]) : _$_662b[1],
		a = void 0 !== t.attr(_$_662b[214]) ? t.attr(_$_662b[214]) : _$_662b[1],
		s = /slider/.test(r);
	n = /gallery2/.test(r), /featured/.test(r);
	var l = /featured1/.test(r),
		c = /newsticker/.test(r),
		u = /carousel/.test(r),
		h = /timeline/.test(r),
		f = /(?=.*column2)(?=.*animated).*/.test(r),
		_ = /(?=.*fbig1)(?=.*animated).*/.test(r);
	c ? e.find(_$_662b[216]).prepend(_$_662b[215]) : /(simple)/.test(r) ? e.append(_$_662b[1]) : -1 === i.indexOf(_$_662b[217]) && e.find(_$_662b[216]).wrapInner(_$_662b[223] + o + _$_662b[219] + (_$_662b[220] === i ? _$_662b[1] : _$_662b[221] + i) + _$_662b[222] + Npage + _$_662b[224]).append(_$_662b[218] + o + _$_662b[219] + (_$_662b[220] === i ? _$_662b[1] : _$_662b[221] + i) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]), n = _ ? mx.fb1a : f ? mx.cl2a : /(?=.*column1)(?=.*animated).*/.test(r) ? mx.cl1a : /fbig1/.test(r) ? mx.fb1 : /fbig2/.test(r) ? mx.fb2 : /gallery1/.test(r) ? mx.gl1 : n ? mx.gl2 : s ? mx.sl : /column1/.test(r) ? mx.cl1 : /column2/.test(r) ? mx.cl2 : /carousel1/.test(r) ? mx.cr1 : /carousel2/.test(r) ? mx.cr2 : /video/.test(r) ? mx.vi : c ? mx.nw : l ? mx.fd1 : /featured4/.test(r) ? mx.fd4 : /list/.test(r) ? mx.li : /gallery3/.test(r) ? mx.gl3 : h ? mx.li : /featured2/.test(r) ? mx.fd2 : /featured3/.test(r) ? mx.fd3 : /hot/.test(r) ? mx.ht : /ftpost/.test(r) ? mx.feat : /rcpost/.test(r) ? mx.rcpt : /rdpost/.test(r) ? mx.rdpt : 5, classname = s ? _$_662b[225] + r : /column/.test(r) ? _$_662b[226] + r : /fbig/.test(r) ? _$_662b[227] + r : /gallery/.test(r) ? _$_662b[228] + r : /featured/.test(r) ? _$_662b[229] + r : u ? _$_662b[230] + r : r, -1 != a.indexOf(_$_662b[231]) && e.children(_$_662b[216]).css({
		"background-color": a
	}), e.addClass(classname.replace(/animated/, _$_662b[1])).append(u ? _$_662b[232] : _$_662b[1]), t.RCWid({
		blogURL: o,
		maxPosts: n,
		maxPostsPerTag: /(hot|featured1|ftpost)/.test(r) && -1 !== i.indexOf(_$_662b[217]) ? 2 : -1 !== i.indexOf(_$_662b[217]) ? 5 : n,
		ShowTags: !!/(hot|featured|newsticker)/.test(r),
		tags: /(recent|random)/.test(i) ? null : i.split(_$_662b[217]),
		postType: s ? _$_662b[233] : u ? _$_662b[234] : c ? _$_662b[235] : /(featured1|featured2|featured3)/.test(r) ? _$_662b[236] : /featured4/.test(r) ? _$_662b[237] : _$_662b[1],
		ShowComment: !0,
		ShowImage: !0,
		auto: !!/autoplay/.test(r),
		review: !hrev,
		color: -1 != a.indexOf(_$_662b[231]) ? a : _$_662b[1],
		ShowPage: !!/pagenumber/.test(r),
		hoverEffect: !!/(gallery|list|newsticker)/.test(r),
		random: _$_662b[238] === i,
		effect: !!/fade/.test(r) && _$_662b[239],
		ShowDesc: !!/(featured|list|timeline|slider|newsticker|blogpost|halfpost|bigpost)/.test(r),
		wrapNum: /(featured1|featured4)/.test(r) ? 4 : (/featured2/.test(r), 5),
		summary: s || c || /(blogpost|halfpost|bigpost)/.test(r) ? 200 : h ? 85 : 150,
		ShowAuthor: hauthor,
		fbig: !!/(fbig|column2|gallery1|gallery2|hot)/.test(r),
		animated: !!/animated/.test(r),
		startFirst: !(!f && !_),
		slideSpeed: SSpeed
	}), t.removeAttr(_$_662b[240])
}

function discall(e, t, n) {
	t.addClass(n), e.html(rgx[33]), postscribe(_$_662b[241], _$_662b[242] + dsqsn + _$_662b[243] + mx.dsq + _$_662b[244], {
		done: function () {
			var t = $(_$_662b[241]).html().replace(rgx[13], _$_662b[1]);
			e.html(t), $(_$_662b[247]).each(function () {
				$(this).find(_$_662b[246]).wrapAll(_$_662b[245])
			}), $(_$_662b[241]).html(_$_662b[1])
		}
	})
}

function flicall(e, t, n) {
	t.addClass(n), e.html(rgx[33]), postscribe(_$_662b[248], _$_662b[249] + mx.fl + _$_662b[250] + dO + _$_662b[251], {
		done: function () {
			var t = $(_$_662b[248]).html().replace(rgx[14], _$_662b[1]);
			e.html(_$_662b[252] + t + _$_662b[94]), $(_$_662b[248]).html(_$_662b[1])
		}
	})
}

function crcom(t, e, n) {
	t.html(rgx[33]), e.addClass(n), t.RCom()
}

function fbsdk() {
	var t, e, n, i;
	t = document, e = _$_662b[261], n = _$_662b[262], i = t.getElementsByTagName(e)[0], t.getElementById(n) || ((t = t.createElement(e)).id = n, t.src = _$_662b[263] + fblang + _$_662b[264], i.parentNode.insertBefore(t, i)), window.fbAsyncInit = function () {
		FB.init({
			appId: fbid,
			status: !0,
			xfbml: !0,
			cookie: !1,
			version: _$_662b[265]
		}), FB.Event.subscribe(_$_662b[266], function (t) {
			$.event.trigger({
				type: _$_662b[267],
				url: t
			})
		}), FB.Event.subscribe(_$_662b[268], function (t) {
			$.event.trigger({
				type: _$_662b[267],
				url: t
			})
		}), FB.Event.subscribe(_$_662b[269], function () {
			chside($(_$_662b[270])), $(_$_662b[270]).addClass(_$_662b[271])
		})
	}
}

function crfbox(t, e) {
	var n = t.replace(rgx[28], _$_662b[1]);
	e.addClass(_$_662b[272]), e.html(_$_662b[273] + n + _$_662b[274])
}

function ldwid(t, e, n, i) {
	t.length ? thewid(t, e) : rgx[23].test(i) ? discall(n, e, i) : rgx[24].test(i) ? flicall(n, e, i) : rgx[25].test(i) ? crcom(n, e, i) : rgx[27].test(i) ? crfbox(i, n) : /complex/g.test(i) && complx(i, e, n), e.addClass(_$_662b[275])
}

function stickside(t, e, n) {
	var i = t.children(_$_662b[296]),
		r = t.offset().top,
		o = t.height() - i.height() + r,
		a = i.height() + _$_662b[297],
		s = e;
	t.children(_$_662b[298]).length && (r += s = t.children(_$_662b[298]).outerHeight(!0) + 15), n < r ? i.removeClass(_$_662b[300]).css({
		position: _$_662b[299],
		top: s
	}) : o < n ? i.removeClass(_$_662b[300]).css({
		position: _$_662b[299],
		bottom: _$_662b[301],
		top: _$_662b[302]
	}) : i.addClass(_$_662b[300]).css({
		top: e,
		height: a
	})
}
var rgx = [/\s|&nbsp;/g, _$_662b[299], _$_662b[303], _$_662b[304], _$_662b[305], /(<|\[)img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?(>|\])/i, /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/i, /\/s\d+(\-c)?\//i, /\[youtube +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?\]/i, /vimeo.com\/|dailymotion.com\/|youtube.com\/|youtu.be\/|\[dailymotion|\[youtube/i, /soundcloud.com\/|\[soundcloud/i, /\[gallery\]|\[pgallery|\[bgallery/i, /<blockquote>/i, /<(?:script|style)\b[^<]*(?:(?!<\/(?:script|style)>)<[^<]*)*<\/(?:script|style)>/gi, /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, /<\S[^>]*>/g, /\[\S[^\]]*\]/g, /(:?\?|&)m=(1|0)/g, /[^[\]]+(?=])/g, /recentpost/g, /randompost/g, /featuredpost/g, /featuredpost\//g, /disquscomment/g, /pn/g, /recentcomment/g, /pL/g, /FBbox/g, /FBbox\//g, /\[item *review-fe=("[^"]+") *\]/g, _$_662b[306], _$_662b[307], _$_662b[308], _$_662b[309], /(tooltip|dailymotion|youtube|soundcloud|code|accordion|content|item|alert|success|warning|update|error|info|tab|vtab|pgallery|bgallery|img|contact|2column|3column|4column|pslide|pcarousel|map|review)/],
	sumLength = $(_$_662b[310]).length ? $(_$_662b[310]).attr(_$_662b[44]) : 200,
	fixM = !$(_$_662b[311]).length || _$_662b[235] != $(_$_662b[311]).attr(_$_662b[44]),
	mName = $(_$_662b[312]).length ? $(_$_662b[312]).attr(_$_662b[44]).split(_$_662b[217]) : _$_662b[313].split(_$_662b[76]),
	sSide = !$(_$_662b[314]).length || _$_662b[235] != $(_$_662b[314]).attr(_$_662b[44]),
	SSpeed = $(_$_662b[315]).length ? $(_$_662b[315]).attr(_$_662b[44]) : 5e3,
	Npage = $(_$_662b[316]).length ? $(_$_662b[316]).attr(_$_662b[44]) : 20,
	fC = $(_$_662b[317]).length ? $(_$_662b[317]).attr(_$_662b[44]) : 2,
	dformat = $(_$_662b[318]).length && _$_662b[235] != $(_$_662b[318]).attr(_$_662b[44]) ? $(_$_662b[318]).attr(_$_662b[44]) : _$_662b[319],
	admBlog = !$(_$_662b[320]).length || _$_662b[321] != $(_$_662b[320]).attr(_$_662b[44]),
	hauthor = !$(_$_662b[322]).length || _$_662b[321] != $(_$_662b[322]).attr(_$_662b[44]),
	hLast = !(!$(_$_662b[323]).length || _$_662b[321] != $(_$_662b[323]).attr(_$_662b[44])),
	gCSE = !(!$(_$_662b[324]).length || _$_662b[235] == $(_$_662b[324]).attr(_$_662b[44])),
	cseID = $(_$_662b[324]).length && _$_662b[235] != $(_$_662b[324]).attr(_$_662b[44]) ? $(_$_662b[324]).attr(_$_662b[44]) : _$_662b[1],
	hEmo = !$(_$_662b[325]).length || _$_662b[321] != $(_$_662b[325]).attr(_$_662b[44]),
	hlist = !(!$(_$_662b[326]).length || _$_662b[321] != $(_$_662b[326]).attr(_$_662b[44])),
	fpost = !$(_$_662b[327]).length || _$_662b[235] != $(_$_662b[327]).attr(_$_662b[44]),
	hpagenav = !$(_$_662b[328]).length || _$_662b[235] != $(_$_662b[328]).attr(_$_662b[44]),
	fbid = $(_$_662b[329]).length ? $(_$_662b[329]).attr(_$_662b[44]) : _$_662b[330],
	fblang = $(_$_662b[331]).length ? $(_$_662b[331]).attr(_$_662b[44]) : _$_662b[332],
	pajax = !$(_$_662b[333]).length || _$_662b[321] != $(_$_662b[333]).attr(_$_662b[44]),
	stx = $(_$_662b[334]).length && _$_662b[235] != $(_$_662b[334]).attr(_$_662b[44]) ? $(_$_662b[334]).attr(_$_662b[44]) : _$_662b[335],
	ntx = $(_$_662b[336]).length && _$_662b[235] != $(_$_662b[336]).attr(_$_662b[44]) ? $(_$_662b[336]).attr(_$_662b[44]) : _$_662b[337],
	ptx = $(_$_662b[338]).length && _$_662b[235] != $(_$_662b[338]).attr(_$_662b[44]) ? $(_$_662b[338]).attr(_$_662b[44]) : _$_662b[339],
	mtx = $(_$_662b[340]).length && _$_662b[235] != $(_$_662b[340]).attr(_$_662b[44]) ? $(_$_662b[340]).attr(_$_662b[44]) : _$_662b[341],
	lmtx = $(_$_662b[342]).length && _$_662b[235] != $(_$_662b[342]).attr(_$_662b[44]) ? $(_$_662b[342]).attr(_$_662b[44]) : _$_662b[343],
	vmtx = $(_$_662b[344]).length && _$_662b[235] != $(_$_662b[344]).attr(_$_662b[44]) ? $(_$_662b[344]).attr(_$_662b[44]) : _$_662b[345],
	reltx = $(_$_662b[346]).length && _$_662b[235] != $(_$_662b[346]).attr(_$_662b[44]) ? $(_$_662b[346]).attr(_$_662b[44]) : _$_662b[347],
	rectx = $(_$_662b[348]).length && _$_662b[235] != $(_$_662b[348]).attr(_$_662b[44]) ? $(_$_662b[348]).attr(_$_662b[44]) : _$_662b[349],
	recotx = $(_$_662b[350]).length && _$_662b[235] != $(_$_662b[350]).attr(_$_662b[44]) ? $(_$_662b[350]).attr(_$_662b[44]) : _$_662b[351],
	twau = $(_$_662b[352]).length && _$_662b[235] != $(_$_662b[352]).attr(_$_662b[44]) ? $(_$_662b[352]).attr(_$_662b[44]) : _$_662b[353],
	dsqsn = $(_$_662b[354]).length && _$_662b[235] != $(_$_662b[354]).attr(_$_662b[44]) ? $(_$_662b[354]).attr(_$_662b[44]) : _$_662b[1],
	dO = $(_$_662b[355]).length && _$_662b[235] != $(_$_662b[355]).attr(_$_662b[44]) ? $(_$_662b[355]).attr(_$_662b[44]) : _$_662b[1],
	shrel = !$(_$_662b[356]).length || _$_662b[235] != $(_$_662b[356]).attr(_$_662b[44]),
	shreco = !(!$(_$_662b[357]).length || _$_662b[321] != $(_$_662b[357]).attr(_$_662b[44])),
	relst = $(_$_662b[358]).length ? $(_$_662b[358]).attr(_$_662b[44]) : _$_662b[359],
	hecpt = !(!$(_$_662b[360]).length || _$_662b[321] != $(_$_662b[360]).attr(_$_662b[44])),
	hrev = !(!$(_$_662b[361]).length || _$_662b[321] != $(_$_662b[361]).attr(_$_662b[44])),
	tbline = !(!$(_$_662b[362]).length || _$_662b[321] != $(_$_662b[362]).attr(_$_662b[44])),
	bbline = !(!$(_$_662b[363]).length || _$_662b[321] != $(_$_662b[363]).attr(_$_662b[44])),
	aplay = !(!$(_$_662b[364]).length || _$_662b[321] != $(_$_662b[364]).attr(_$_662b[44])),
	blinest = $(_$_662b[365]).length ? $(_$_662b[365]).attr(_$_662b[44]) : _$_662b[220],
	btlinest = $(_$_662b[366]).length ? $(_$_662b[366]).attr(_$_662b[44]) : _$_662b[220],
	dajaxsrc = !(!$(_$_662b[367]).length || _$_662b[321] != $(_$_662b[367]).attr(_$_662b[44])),
	mx = {
		rcpt: $(_$_662b[368]).length ? $(_$_662b[368]).attr(_$_662b[44]) : 4,
		rdpt: $(_$_662b[369]).length ? $(_$_662b[369]).attr(_$_662b[44]) : 4,
		feat: $(_$_662b[370]).length ? $(_$_662b[370]).attr(_$_662b[44]) : 4,
		com: $(_$_662b[371]).length ? $(_$_662b[371]).attr(_$_662b[44]) : 5,
		fb1: $(_$_662b[372]).length ? $(_$_662b[372]).attr(_$_662b[44]) : 5,
		fb2: $(_$_662b[373]).length ? $(_$_662b[373]).attr(_$_662b[44]) : 5,
		fb1a: $(_$_662b[374]).length ? $(_$_662b[374]).attr(_$_662b[44]) : 8,
		gl1: $(_$_662b[375]).length ? $(_$_662b[375]).attr(_$_662b[44]) : 10,
		gl2: $(_$_662b[376]).length ? $(_$_662b[376]).attr(_$_662b[44]) : 7,
		gl3: $(_$_662b[377]).length ? $(_$_662b[377]).attr(_$_662b[44]) : 6,
		cl1: $(_$_662b[378]).length ? $(_$_662b[378]).attr(_$_662b[44]) : 5,
		cl2: $(_$_662b[379]).length ? $(_$_662b[379]).attr(_$_662b[44]) : 5,
		cl1a: $(_$_662b[380]).length ? $(_$_662b[380]).attr(_$_662b[44]) : 9,
		cl2a: $(_$_662b[381]).length ? $(_$_662b[381]).attr(_$_662b[44]) : 8,
		nw: $(_$_662b[382]).length ? $(_$_662b[382]).attr(_$_662b[44]) : 9,
		sl: $(_$_662b[383]).length ? $(_$_662b[383]).attr(_$_662b[44]) : 5,
		cr1: $(_$_662b[384]).length ? $(_$_662b[384]).attr(_$_662b[44]) : 9,
		cr2: $(_$_662b[385]).length ? $(_$_662b[385]).attr(_$_662b[44]) : 9,
		rl: $(_$_662b[386]).length ? $(_$_662b[386]).attr(_$_662b[44]) : 9,
		vi: $(_$_662b[387]).length ? $(_$_662b[387]).attr(_$_662b[44]) : 6,
		fd1: $(_$_662b[388]).length ? $(_$_662b[388]).attr(_$_662b[44]) : 8,
		fd2: $(_$_662b[389]).length ? $(_$_662b[389]).attr(_$_662b[44]) : 10,
		fd3: $(_$_662b[390]).length ? $(_$_662b[390]).attr(_$_662b[44]) : 10,
		fd4: $(_$_662b[391]).length ? $(_$_662b[391]).attr(_$_662b[44]) : 7,
		lt: $(_$_662b[392]).length ? $(_$_662b[392]).attr(_$_662b[44]) : 6,
		ht: $(_$_662b[393]).length ? $(_$_662b[393]).attr(_$_662b[44]) : 4,
		dsq: $(_$_662b[394]).length ? $(_$_662b[394]).attr(_$_662b[44]) : 4,
		fl: $(_$_662b[395]).length ? $(_$_662b[395]).attr(_$_662b[44]) : 8,
		li: $(_$_662b[396]).length ? $(_$_662b[396]).attr(_$_662b[44]) : 5
	};
$.ajaxSetup({
	cache: !0
}), navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) && (document.getElementById(_$_662b[397]).className = document.getElementById(_$_662b[397]).className + _$_662b[398]), hLast && $(_$_662b[399]).hide(), hecpt && $(_$_662b[400]).hide(), $(_$_662b[402]).before($(_$_662b[401])), $(_$_662b[407]).attr({
	onblur: _$_662b[403] + stx + _$_662b[404],
	onfocus: _$_662b[405] + stx + _$_662b[406],
	fe: stx
}), gCSE && (function () {
	var t = cseID,
		e = document.createElement(_$_662b[261]);
	e.type = _$_662b[408], e.async = !0, e.src = (_$_662b[409] == document.location.protocol ? _$_662b[410] : _$_662b[411]) + _$_662b[412] + t, (t = document.getElementsByTagName(_$_662b[261])[0]).parentNode.insertBefore(e, t)
}(), $(_$_662b[414]).append(_$_662b[413]));
var csystext = $(_$_662b[417]).text(),
	cnurl = $(_$_662b[418]).attr(_$_662b[44]),
	bpstid = $(_$_662b[419]).attr(_$_662b[44]),
	psturl = $(_$_662b[420]).attr(_$_662b[44]),
	bcom = _$_662b[421],
	dcom = _$_662b[422],
	fcom = _$_662b[423] + cnurl + _$_662b[424],
	scom = _$_662b[425] + bpstid + _$_662b[424];
if ($(_$_662b[417]).html(csystext.replace(/\[googlep\]/g, bcom).replace(/\[disqus\]/g, dcom).replace(/\[facebook\]/g, fcom)), $(_$_662b[427]).each(function () {
	cmnu(this, rgx[2]), $(this).addClass(_$_662b[426])
}), $(_$_662b[428] + rgx[2]).each(function () {
	cmnu(this, rgx[3])
}), $(_$_662b[432] + rgx[2]).parent(_$_662b[35]).addClass(_$_662b[431]).append(_$_662b[429] + rgx[1] + _$_662b[430]), $(_$_662b[432] + rgx[3]).parent(_$_662b[35]).addClass(_$_662b[434]).append(_$_662b[429] + rgx[1] + _$_662b[433]), $(_$_662b[436]).each(function () {
	$(this).html($(this).html().replace(/\[/g, _$_662b[435]).replace(/\]/g, _$_662b[105]))
}), $(_$_662b[439]).each(function () {
	$(this).html($(this).html().replace(/\[/g, _$_662b[438]).replace(/\]/g, _$_662b[105]).replace(/\{/g, _$_662b[437]).replace(/\}/g, _$_662b[105]))
}), $(_$_662b[441]).parents(_$_662b[35]).addClass(_$_662b[440]), 0 < $(_$_662b[442]).length) {
	var slide_nav = $(_$_662b[443]),
		current_pos = 0,
		current_menu_width = 0;
	$(_$_662b[445]).each(function () {
		var t = $(this);
		if (t.attr(_$_662b[27]) == window.location.href && t.parents(rgx[4]).length) {
			var e = parseInt(t.parents(rgx[4]).css(_$_662b[444]));
			current_pos = t.parents(rgx[4]).position().left + e, current_menu_width = t.parents(rgx[4]).width()
		}
		slide_nav.css({
			width: current_menu_width,
			left: current_pos
		})
	}), 0 == current_pos && (current_pos = $(_$_662b[446]).position().left, slide_nav.css(_$_662b[447], current_pos)), $(_$_662b[448]).click(function () {
		var t = parseInt($(this).parent().css(_$_662b[444]));
		current_pos = $(this).parent().position().left + t, current_menu_width = $(this).parent().width()
	}), $(window).resize(function () {
		$(_$_662b[445]).each(function () {
			var t = $(this);
			if (t.attr(_$_662b[27]) == window.location.href && t.parents(rgx[4]).length) {
				var e = parseInt(t.parents(rgx[4]).css(_$_662b[444]));
				current_pos = t.parents(rgx[4]).position().left + e, current_menu_width = t.parents(rgx[4]).width()
			}
			slide_nav.css({
				width: current_menu_width,
				left: current_pos
			})
		}), 0 == current_pos && (current_pos = $(_$_662b[446]).position().left, slide_nav.css(_$_662b[447], current_pos))
	}), $(_$_662b[452]).hover(function () {
		var t = parseInt($(this).css(_$_662b[444]));
		slide_nav.animate({
			width: $(this).width(),
			left: $(this).position().left + t
		}, {
			queue: !1,
			easing: _$_662b[449],
			duration: 250
		}), $(_$_662b[451]).addClass(_$_662b[450])
	}, function () {
		slide_nav.animate({
			width: current_menu_width,
			left: current_pos
		}, {
			queue: !1,
			easing: _$_662b[449],
			duration: 250
		}), $(_$_662b[451]).removeClass(_$_662b[450])
	})
}
$(_$_662b[455]).hoverTimeout(100, function () {
	$(this).children(_$_662b[37]).filter(_$_662b[453]).slideDown()
}, 300, function () {
	$(this).children(_$_662b[37]).slideUp(500, _$_662b[454])
}), $(_$_662b[145]).each(function () {
	lpost($(this))
});
var sfArr = function (t) {
		var e, n, i = t.length;
		if (0 === i) return !1;
		for (; --i;) e = Math.floor(Math.random() * (i + 1)), n = t[i], t[i] = t[e], t[e] = n;
		return t
	},
	gRdm = function (t, e) {
		return Math.floor(Math.random() * (e - t + 1)) + t
	};
gCSE || dajaxsrc || ajaxsrc(), $(_$_662b[504]).find(_$_662b[503]).each(function () {
	title = $(this).find(_$_662b[216]).text(), $(this).attr(_$_662b[502], title)
}), $(_$_662b[504]).myTab({
	active: 1
}), $(_$_662b[506]).click(function () {
	var t = $(this);
	return t.hasClass(_$_662b[18]) ? ($(_$_662b[505]).fadeOut(), t.removeClass(_$_662b[18])) : (t.addClass(_$_662b[18]), $(_$_662b[505]).fadeIn()), !1
}), cdate(), $(_$_662b[507]).length && hEmo && myemo(),
function (t) {
	if (t(_$_662b[509]).hasClass(_$_662b[508]) && !hpagenav) hlist ? (lMore({
		viewdefault: _$_662b[139]
	}), vmode({
		viewdefault: _$_662b[139]
	})) : (lMore(), vmode());
	else if (t(_$_662b[509]).hasClass(_$_662b[508]) && hpagenav) {
		var e = t(_$_662b[154]).children(_$_662b[135]).length;
		hlist ? (pageNavi({
			postperpage: e,
			viewdefault: _$_662b[139],
			clist: _$_662b[133],
			cgrid: _$_662b[134]
		}), vmode({
			viewdefault: _$_662b[139],
			clist: _$_662b[133],
			cgrid: _$_662b[134]
		})) : (pageNavi({
			viewdefault: _$_662b[132],
			postperpage: e,
			clist: _$_662b[133],
			cgrid: _$_662b[134]
		}), vmode({
			viewdefault: _$_662b[132],
			clist: _$_662b[133],
			cgrid: _$_662b[134]
		}))
	}
	t(_$_662b[509]).hasClass(_$_662b[510]) && t(_$_662b[512]).hasClass(_$_662b[511]) && (pageNavi({
		viewdefault: _$_662b[139],
		clist: _$_662b[162],
		cgrid: _$_662b[163]
	}), vmode({
		viewdefault: _$_662b[139],
		clist: _$_662b[162],
		cgrid: _$_662b[163]
	})), (t(_$_662b[513]).length || t(_$_662b[512]).hasClass(_$_662b[514])) && (lMore({
		viewdefault: _$_662b[139],
		clist: _$_662b[515],
		cgrid: _$_662b[516]
	}), vmode({
		viewdefault: _$_662b[139],
		clist: _$_662b[515],
		cgrid: _$_662b[516]
	}))
}(jQuery),
function (P) {
	P.RCWid = function (t, n) {
		var D = this;
		D.$el = P(t), D.init = function () {
			D.options = P.extend({}, P.RCWid.defaultOptions, n), D.$el.html(_$_662b[517] + (_$_662b[1] != D.options.color && /hot/.test(D.$el.parents(_$_662b[518]).attr(_$_662b[25])) ? _$_662b[519] + D.options.color + _$_662b[520] : _$_662b[1]) + (_$_662b[521] === D.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[523] + (D.options.ShowPage ? _$_662b[524] : _$_662b[1]) + rgx[33]);
			var g, m, v, y, w, x, k, C = 0,
				e = null,
				T = location.href.replace(rgx[17], _$_662b[1]),
				S = document.location.hostname.split(_$_662b[428]),
				E = D.options.maxPostsPerTag,
				j = 3,
				A = 1,
				O = _$_662b[1] === D.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : D.options.blogURL,
				F = function (t) {
					for (D.options.ShowPage && function (t) {
						for (html = _$_662b[1], nomerkiri = parseInt(j / 2), nomerkiri == j - nomerkiri && (j = 2 * nomerkiri + 1), mulai = A - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(t / E) + 1, maksimal - 1 == t / E && --maksimal, akhir = mulai + j - 1, akhir > maksimal && (akhir = maksimal), t = parseInt(A) - 1, 1 < A && (html = 2 == A ? html + _$_662b[525] : html + (_$_662b[526] + t + _$_662b[527])), 1 < mulai && (html += _$_662b[528]), 2 < mulai && (html += _$_662b[529]), t = mulai; t <= akhir; t++) html = A == t ? html + (_$_662b[530] + (_$_662b[1] === D.options.color ? _$_662b[1] : _$_662b[519] + D.options.color + _$_662b[531] + D.options.color + _$_662b[532]) + _$_662b[533] + t + _$_662b[105]) : 1 == t ? html + _$_662b[528] : html + (_$_662b[526] + t + _$_662b[22] + t + _$_662b[77]);
						akhir < maksimal - 1 && (html += _$_662b[529]), akhir < maksimal && (html += _$_662b[526] + maksimal + _$_662b[22] + maksimal + _$_662b[77]), t = parseInt(A) + 1, A < maksimal && (html += _$_662b[526] + t + _$_662b[534]), D.$el.find(_$_662b[535]).html(html), D.$el.find(_$_662b[543]).click(function () {
							var t = Number(P(this).attr(_$_662b[184]));
							D.$el.find(_$_662b[537]).after(_$_662b[536]), D.$el.find(_$_662b[538]).html(D.$el.find(_$_662b[537]).html()), D.$el.find(_$_662b[537]).html(_$_662b[1]);
							var e = t * E - (E - 1),
								n = D.$el.find(_$_662b[535]).attr(_$_662b[539]);
							null == n || null == n ? P.get(O + _$_662b[540] + e + _$_662b[97] + E + _$_662b[541], F, _$_662b[130]) : P.get(O + _$_662b[542] + n + _$_662b[188] + e + _$_662b[97] + E + _$_662b[541], F, _$_662b[130]), A = t
						})
					}(n = parseInt(t.feed.openSearch$totalResults.$t, 10)), C++, m = t.feed.link.length, n = 0; n < m; n++)
						if (_$_662b[106] == t.feed.link[n].rel) {
							g = t.feed.link[n].href;
							break
						}
					if (entry = !0 === D.options.random ? sfArr(t.feed.entry) : t.feed.entry, void 0 !== entry)
						for (var e = entry.length, n = 0; n < e; n++) {
							var i, r, o, a, s, l, c, u, h, f = entry[n].link.length;
							o = [], r = [];
							var _, d, p, b, $ = _$_662b[1];
							for (_ = 0; _ < f; _++)
								if (_$_662b[106] == entry[n].link[_].rel) {
									i = entry[n].link[_].href;
									break
								}
							for (_ = 0; _ < f; _++)
								if (_$_662b[544] == entry[n].link[_].rel && _$_662b[545] == entry[n].link[_].type) {
									a = Number(entry[n].link[_].title.split(_$_662b[76])[0]);
									break
								}
							for (_ = 0; _ < f; _++) {
								if (_$_662b[107] == entry[n].link[_].rel) {
									b = entry[n].link[_].type;
									break
								}
								b = _$_662b[39]
							}
							if (p = _$_662b[236] === D.options.postType && g !== window.location.protocol + _$_662b[95] + window.location.host + _$_662b[55] ? g.substr(g.lastIndexOf(_$_662b[55]) + 1) : void 0 !== entry[n].category ? entry[n].category[0].term : _$_662b[1], _ = D.options.fbig && entry[n] === entry[0], d = entry[n] !== entry[0], f = _$_662b[108] in entry[n] ? entry[n].content.$t : _$_662b[109] in entry[n] ? entry[n].summary.$t : _$_662b[1], _$_662b[110] in entry[n] ? (o = entry[n].media$thumbnail.url, -1 != entry[n].media$thumbnail.url.indexOf(_$_662b[58]) && (o = entry[n].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]), b = _$_662b[54])) : rgx[6].test(f) || rgx[8].test(f) ? (o = rgx[6].exec(rgx[6]), r = rgx[8].exec(f), o = _$_662b[53] + (null != o ? o[5] : r[3]) + _$_662b[52], b = _$_662b[54]) : o = rgx[5].test(f) ? (r = rgx[5].exec(f))[4] : _$_662b[56], rgx[9].test(f) ? b = _$_662b[54] : rgx[10].test(f) ? b = _$_662b[62] : rgx[11].test(f) ? b = _$_662b[63] : rgx[12].test(f) && (b = rgx[12].exec(f).index <= 5 ? _$_662b[64] : _$_662b[39]), rgx[29].test(f) && D.options.review) {
								for ($ = [], r = 0, l = ($ = f.match(rgx[29])).length, c = 0; c < l; c++) r += parseInt($[c].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
								$ = r / l, $ = _$_662b[517] + (_$_662b[1] === D.options.color ? _$_662b[1] : _$_662b[519] + D.options.color + _$_662b[520]) + _$_662b[546] + $.toFixed(1) + _$_662b[547] + 10 * $.toFixed(1) + _$_662b[548]
							}(f = f.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > D.options.summary && (f = f.substring(0, D.options.summary) + _$_662b[115]), r = entry[n].title.$t.replace(/"/g, _$_662b[73]), s = entry[n].published.$t.substring(0, 10), l = entry[n].published.$t.match(/\d+/g), l = new Date(l[0], l[1] - 1, l[2], l[3], l[4], l[5]), dyn = s.substring(0, 4), c = Number(s.substring(0, 2)).toLocaleString() + Number(s.substring(2, 4)).toLocaleString(), u = s.substring(5, 7), h = s.substring(8, 10), s = entry[n].author[0].name.$t, -1 < window.location.href.indexOf(_$_662b[549]) && _$_662b[550] != S[S.length - 1] && (T = _$_662b[151] + S[0] + _$_662b[551] + document.location.pathname), D.$el.parents(_$_662b[552]).length ? T.toLowerCase() != i.toLowerCase() && L(i, r, o, f, c, h, u, a, s, _, d, p, b, $, l, dyn) : L(i, r, o, f, c, h, u, a, s, _, d, p, b, $, l, dyn)
						}
					if (C >= D.options.tags.length) {
						if (0 < D.options.maxPosts && P(_$_662b[553] + (D.options.maxPosts - 1) + _$_662b[554], D.$el.find(_$_662b[555])).remove(), D.$el.find(_$_662b[537]).html(D.$el.find(_$_662b[555]).html()).removeClass(_$_662b[556]), D.$el.find(_$_662b[557]).remove(), n = D.$el.find(_$_662b[558]), i = D.$el.parents(_$_662b[518]).attr(_$_662b[25]), a = P(_$_662b[45]).attr(_$_662b[44]), n.attr(_$_662b[44], a + _$_662b[76] + n.attr(_$_662b[44])).text(a), /(newsticker|timeline|video|gallery|featured|hot|slider)/.test(i) && D.$el.addClass(_$_662b[559]), /(video|featured|hot|slider)/.test(i) && D.$el.addClass(_$_662b[560]), i = D.$el.find(_$_662b[537]), _$_662b[233] === D.options.postType) i.owlCarousel({
							nav: !0,
							rtl: ts_isRTL(),
							autoplay: D.options.auto,
							navText: [_$_662b[1], _$_662b[1]],
							autoplayTimeout: D.options.slideSpeed,
							loop: !0,
							bColor: _$_662b[1] !== D.options.color ? D.options.color : _$_662b[1],
							responsiveClass: !0,
							autoplayHoverPause: !0,
							animateOut: _$_662b[239] === D.options.effect && _$_662b[562],
							animateIn: _$_662b[239] === D.options.effect && _$_662b[563],
							smartSpeed: 500,
							items: 1,
							responsiveRefreshRate: 500
						}).addClass(_$_662b[561]);
						else if (_$_662b[234] === D.options.postType) i.owlCarousel({
							autoplay: D.options.auto,
							margin: 0,
							loop: !0,
							autoplayTimeout: D.options.slideSpeed,
							rtl: ts_isRTL(),
							bColor: _$_662b[1] !== D.options.color ? D.options.color : _$_662b[1],
							nav: !0,
							autoplayHoverPause: !0,
							navText: [_$_662b[1], _$_662b[1]],
							responsiveBaseElement: D.$el,
							navContainer: D.$el.parents(_$_662b[503]).find(_$_662b[564]),
							responsive: {
								0: {
									items: 1
								},
								401: {
									items: 2
								},
								660: {
									items: 3
								},
								1e3: {
									items: 4
								}
							}
						}).addClass(_$_662b[561]);
						else if (_$_662b[235] === D.options.postType) i.simplyScroll();
						else if (_$_662b[236] === D.options.postType) {
							for (a = i.children(_$_662b[565]), n = 0; n < a.length; n += D.options.wrapNum) a.slice(n, n + D.options.wrapNum).wrapAll(_$_662b[566]);
							i.owlCarousel({
								nav: !0,
								rtl: ts_isRTL(),
								autoplay: D.options.auto,
								navText: [_$_662b[1], _$_662b[1]],
								autoplayTimeout: D.options.slideSpeed,
								loop: !0,
								responsiveClass: !0,
								autoplayHoverPause: !0,
								bColor: _$_662b[1] !== D.options.color ? D.options.color : _$_662b[1],
								animateOut: _$_662b[239] === D.options.effect && _$_662b[562],
								animateIn: _$_662b[239] === D.options.effect && _$_662b[563],
								smartSpeed: 500,
								items: 1,
								responsiveRefreshRate: 500
							}).addClass(_$_662b[561])
						} else if (_$_662b[237] === D.options.postType) {
							for (a = i.children(_$_662b[565]), n = 0; n < a.length; n += D.options.wrapNum) a.slice(n, n + D.options.wrapNum).wrapAll(_$_662b[567]);
							i.find(_$_662b[569]).wrapInner(_$_662b[568]), i.find(_$_662b[570]).owlCarousel({
								nav: !0,
								rtl: ts_isRTL(),
								autoplay: D.options.auto,
								navText: [_$_662b[1], _$_662b[1]],
								autoplayTimeout: D.options.slideSpeed,
								loop: !0,
								navigationText: !1,
								bColor: _$_662b[1] !== D.options.color ? D.options.color : _$_662b[1],
								responsiveClass: !0,
								autoplayHoverPause: !0,
								animateOut: _$_662b[239] === D.options.effect && _$_662b[562],
								animateIn: _$_662b[239] === D.options.effect && _$_662b[563],
								smartSpeed: 500,
								items: 1,
								responsiveRefreshRate: 500
							}).addClass(_$_662b[561])
						}
						if (D.options.fbig)
							for (a = i.children(_$_662b[565]), n = 0; n < a.length; n += a.length) a.slice(1, n + a.length).wrapAll(_$_662b[571]);
						if (D.options.hoverEffect && D.$el.find(_$_662b[576]).hover(function () {
							var t, e = P(this),
								n = e.parents(_$_662b[565]).html(),
								i = e.height(),
								r = e.offset(),
								o = P(document.body).width(),
								a = P(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
							t = r.left, ts_isRTL() && (t = t + e.width() - 320), o < t + 320 ? t = o - 330 : t < 10 && (t = 10), P(_$_662b[575]).css({
								top: _$_662b[235] === D.options.postType ? r.top + i : r.top - 350,
								left: t
							}).addClass(_$_662b[574] + a).html(n)
						}, function () {
							var t = P(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
							P(_$_662b[575]).removeClass(_$_662b[574] + t).html(_$_662b[1])
						}), D.$el.find(_$_662b[577]).each(function () {
							y = P(this), v = y.find(_$_662b[578]), w = v.attr(_$_662b[49]), x = y.width(), k = x <= 180 ? _$_662b[579] : x <= 500 ? _$_662b[47] : _$_662b[580], (/(list|gallery|newsticker|blogpost|halfpost|complex)/.test(y.parents(_$_662b[518]).attr(_$_662b[25])) || y.parents(_$_662b[305]).hasClass(_$_662b[581])) && (k = _$_662b[47]), v.attr(_$_662b[78], _$_662b[79] + (-1 != w.indexOf(_$_662b[80]) ? _$_662b[81] + w.replace(rgx[7], _$_662b[55] + k + _$_662b[55]) + _$_662b[82] : _$_662b[57]) + _$_662b[83]), v.removeAttr(_$_662b[49])
						}), D.$el.parents(_$_662b[518]).addClass(_$_662b[583]).removeClass(_$_662b[582]), D.options.animated)
							if (D.options.startFirst) {
								for (a = i.find(_$_662b[584]), n = 0; n < a.length; n += a.length) a.slice(n, n + a.length).wrapAll(_$_662b[585]);
								(n = D.$el.find(_$_662b[586])).wrap(_$_662b[587]), n.simpleSpy().on(_$_662b[590], function () {
									jQuery(this).trigger(_$_662b[591])
								}).on(_$_662b[588], function () {
									jQuery(this).trigger(_$_662b[589])
								})
							} else {
								for (a = i.children(_$_662b[565]), n = 0; n < a.length; n += a.length + 1) a.slice(n, n + a.length + 1).wrapAll(_$_662b[585]);
								(n = D.$el.find(_$_662b[586])).wrap(_$_662b[587]), n.simpleSpy({
									limit: 5
								}).on(_$_662b[590], function () {
									jQuery(this).trigger(_$_662b[591])
								}).on(_$_662b[588], function () {
									jQuery(this).trigger(_$_662b[589])
								})
							}
						chside(D.$el), _$_662b[1] !== D.options.color && D.$el.parents(_$_662b[518]).find(_$_662b[592]).length && D.$el.parents(_$_662b[518]).find(_$_662b[564]).children().css({
							"background-color": D.options.color
						})
					}
				},
				L = function (t, e, n, i, r, o, a, s, l, c, u, h, f, _, d, p) {
					for (var b = P(_$_662b[565], D.$el.find(_$_662b[555])), $ = 0, g = b.length; $ < g; $++) {
						var m = P(_$_662b[28], b.eq($)),
							v = N(m);
						if (m.attr(_$_662b[27]) == t) {
							for (e = ++v, (t = m).attr(_$_662b[593], e), D.options.relevantTip && t.attr(_$_662b[44], D.options.relevantTip.replace(_$_662b[594], e)), D.options.postScoreClass && t.attr(_$_662b[25], D.options.postScoreClass + e), t = $ - 1; 0 <= t; t--)
								if (e = P(_$_662b[28], b.eq(t)), N(e) > v) return void(1 < $ - t && b.eq(t).after(b.eq($)));
							return void(0 < $ && b.eq(0).before(b.eq($)))
						}
					}
					D.$el.find(_$_662b[555]).append(_$_662b[517] + (_$_662b[521] === D.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[595] + (c ? _$_662b[596] : _$_662b[1]) + _$_662b[597] + (_$_662b[235] === D.options.postType ? _$_662b[517] + (_$_662b[1] != D.options.color ? _$_662b[519] + D.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[598] + d.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[94] : _$_662b[1]) + (c || /(n|c)/.test(D.options.postType) ? _$_662b[517] + (_$_662b[1] === D.options.color ? _$_662b[1] : _$_662b[519] + D.options.color + _$_662b[520]) + _$_662b[599] + o + _$_662b[141] + mName[parseInt(a, 10) - 1] + _$_662b[142] + p + _$_662b[600] : _$_662b[1]) + (D.options.ShowImage ? _$_662b[601] + (D.$el.parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[602] : _$_662b[1]) + _$_662b[603] + (c ? _$_662b[604] : _$_662b[1]) + _$_662b[605] + f + _$_662b[606] + e + _$_662b[607] + t + _$_662b[608] + n + _$_662b[609] + (-1 != n.indexOf(_$_662b[58]) || -1 != n.indexOf(_$_662b[610]) ? _$_662b[59] : _$_662b[1]) + (D.options.review ? _ : _$_662b[1]) + _$_662b[611] : _$_662b[1]) + _$_662b[517] + (/timeline/.test(D.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== D.options.color ? _$_662b[612] + (ts_isRTL() ? _$_662b[613] : _$_662b[447]) + _$_662b[614] + D.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[615] + (c ? _$_662b[616] : _$_662b[1]) + _$_662b[617] + (/timeline/.test(D.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[517] + (_$_662b[1] === D.options.color ? _$_662b[1] : _$_662b[618] + D.options.color + _$_662b[520]) + _$_662b[619] : _$_662b[1]) + _$_662b[620] + (/(featured4|slider1|newsticker)/.test(D.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== D.options.color ? _$_662b[621] + (/newsticker/.test(D.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[1] : _$_662b[622]) + _$_662b[623] + D.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[624] + (_$_662b[235] === D.options.postType || D.$el.parents(_$_662b[503]).hasClass(_$_662b[139]) ? _$_662b[625] : _$_662b[1]) + _$_662b[626] + t + _$_662b[22] + e + _$_662b[627] + (D.options.ShowAuthor ? _$_662b[628] + l + _$_662b[629] : _$_662b[1]) + _$_662b[630] + dformat.replace(_$_662b[633], r).replace(_$_662b[632], Number(a).toLocaleString()).replace(_$_662b[631], Number(o).toLocaleString()) + _$_662b[105] + (0 < s ? _$_662b[634] + t + _$_662b[635] + s.toLocaleString() + _$_662b[167] : _$_662b[1]) + _$_662b[94] + (u && !D.options.ShowDesc ? _$_662b[1] : _$_662b[636] + i + (c ? _$_662b[637] + t + _$_662b[638] + e + _$_662b[639] : _$_662b[1]) + _$_662b[94]) + _$_662b[94] + (D.options.ShowTags ? _$_662b[640] + (_$_662b[1] === D.options.color ? _$_662b[1] : _$_662b[519] + D.options.color + _$_662b[520]) + _$_662b[641] + h + _$_662b[607] + D.options.blogURL + _$_662b[190] + h + _$_662b[222] + Npage + _$_662b[22] + h + _$_662b[167] : _$_662b[1]) + _$_662b[642])
				},
				N = function (t) {
					return 0 < (t = parseInt(t.attr(_$_662b[593]))) ? t : 1
				};
			! function () {
				var t = (e = D.$el).parents(_$_662b[552]);
				if (D.options.tags || (D.options.tags = [], P(_$_662b[643] + D.options.maxTags + _$_662b[554]).each(function () {
					var t = P.trim(P(this).text().replace(/\n/g, _$_662b[1])); - 1 == P.inArray(t, D.options.tags) && (D.options.tags[D.options.tags.length] = t)
				}), t.length || (D.options.tags = [])), 0 !== D.options.tags.length || D.options.recentTitle)
					if (t.length && P(_$_662b[644] + (0 === D.options.tags.length ? D.options.recentTitle : D.options.relatedTitle ? D.options.relatedTitle : _$_662b[1]) + _$_662b[645]).prependTo(e), 0 === D.options.tags.length) D.options.random ? P.get(O + _$_662b[646], function (t) {
						var e = D.options.maxrandom > t.feed.openSearch$totalResults.$t ? t.feed.openSearch$totalResults.$t : D.options.maxrandom;
						t = D.options.maxPosts > t.feed.openSearch$totalResults.$t ? 1 : gRdm(1, e - D.options.maxPosts), P.get(O + _$_662b[647] + D.options.maxPosts + _$_662b[648] + t + _$_662b[649], F, _$_662b[130])
					}, _$_662b[130]) : P.get(O + _$_662b[647] + D.options.maxPostsPerTag + _$_662b[541], F, _$_662b[130]);
					else
						for (t = 0; t < D.options.tags.length; t++) P.get(O + _$_662b[542] + D.options.tags[t] + _$_662b[222] + D.options.maxPostsPerTag + _$_662b[541], F, _$_662b[130]), D.options.ShowPage && D.$el.find(_$_662b[535]).attr(_$_662b[539], D.options.tags[0])
			}()
		}, D.init()
	}, P.RCWid.defaultOptions = {
		blogURL: _$_662b[1],
		maxPosts: 5,
		maxTags: 4,
		maxPostsPerTag: 6,
		tags: null,
		ShowComment: !0,
		ShowImage: !0,
		ShowTags: !1,
		ShowAuthor: !1,
		ShowDesc: !1,
		maxrandom: 30,
		hoverEffect: !1,
		random: !1,
		fbig: !1,
		startFirst: !1,
		animated: !1,
		ShowPage: !1,
		auto: !1,
		effect: !1,
		review: !1,
		wrapNum: 4,
		summary: 120,
		color: _$_662b[1],
		relatedTitle: reltx,
		recentTitle: rectx,
		postScoreClass: _$_662b[1],
		relevantTip: _$_662b[1],
		slideSpeed: 5e3,
		postType: _$_662b[1]
	}, P.fn.RCWid = function (t) {
		return this.each(function () {
			new P.RCWid(this, t)
		})
	}
}(jQuery),
function (m) {
	m.RCom = function (t, e) {
		var g = this;
		g.$el = m(t), g.init = function () {
			g.options = m.extend({}, m.RCom.defaultOptions, e), m.get((_$_662b[1] === g.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : g.options.blogURL) + _$_662b[650], function (t) {
				var e = _$_662b[1],
					n = _$_662b[1];
				t = (l = t.feed).author[0].name ? l.author[0].name.$t : g.options.anon;
				var i = l.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + g.options.avatarSize + _$_662b[112]);
				if (l.entry && 0 !== l.entry.length) {
					e += _$_662b[651];
					for (var r, o, a, s, l, c = 0, u = 0, h = (l = l.entry).length; u < h; ++u) {
						a = (r = l[u]).published.$t.substring(0, 10);
						var f = r.author[0].name ? r.author[0].name.$t : g.options.anon,
							_ = !!r.author[0].uri && r.author[0].uri.$t,
							d = r.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + g.options.avatarSize + _$_662b[112]),
							p = (p = r.content ? r.content.$t : r.summary.$t).replace(/<br *\/?>|[\s]+/gi, _$_662b[76]).replace(/<.*?>|[<>]/g, _$_662b[1]).replace(rgx[16], _$_662b[1]),
							b = (p = _$_662b[1] !== p && p.length > g.options.characters ? p.substring(0, g.options.characters) + _$_662b[115] : p, !1),
							$ = f === t || d === i;
						if (!$ || g.options.showAdmin) {
							for (o = 0, s = r.link.length; o < s; ++o) n = r.link[o], _$_662b[106] == n.rel && (b = n.href);
							n = b.lastIndexOf(_$_662b[55]) + 1, o = b.lastIndexOf(_$_662b[428]), n = b.split(_$_662b[30]).join(_$_662b[76]).substring(n, o) + _$_662b[115], s = r.published.$t.match(/\d+/g), s = new Date(s[0], s[1] - 1, s[2], s[3], s[4], s[5]), r = a.substring(0, 4), o = a.substring(5, 7), a = a.substring(8, 10), c < g.options.numComments && (c++, e += _$_662b[652] + ($ ? _$_662b[653] : _$_662b[654]) + _$_662b[22], e += g.options.Showimage ? _$_662b[655] + _ + _$_662b[656] + f + _$_662b[657] + f + _$_662b[658] + d + _$_662b[659] : _$_662b[1], e += _$_662b[660] + _ + _$_662b[22] + f + _$_662b[661] + b + _$_662b[22] + n + _$_662b[662] + a + _$_662b[141] + mName[parseInt(o, 10) - 1] + _$_662b[142] + r + _$_662b[663] + s.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[664], e += _$_662b[665] + p + _$_662b[94], e += _$_662b[666])
						}
					}
					g.$el.html(e + _$_662b[94]), g.options.fs && (e = function (t, e, n) {
						m(_$_662b[669]).each(function () {
							m(this).html(m(this).html().replace(t, _$_662b[667] + e + _$_662b[668] + n + _$_662b[464]))
						})
					})(/\scheer/gi, emoIMG.dL, _$_662b[dM]), chside(g.$el)
				} else g.$el.html(_$_662b[670])
			}, _$_662b[130])
		}, g.init()
	}, m.RCom.defaultOptions = {
		blogURL: _$_662b[1],
		numComments: mx.com,
		characters: 100,
		avatarSize: 40,
		fs: hEmo,
		showAdmin: admBlog,
		anon: _$_662b[671],
		Showimage: !0,
		defaultAvatar: _$_662b[672]
	}, m.fn.RCom = function (t) {
		return this.each(function () {
			new m.RCom(this, t)
		})
	}
}(jQuery), $(_$_662b[675]).each(function () {
	var t = rgx[34],
		e = new RegExp(/\[/.source + t.source + /(.*?)(\/?)\]/.source, _$_662b[673]),
		n = (t = new RegExp(/\[\//.source + t.source + /\]/.source, _$_662b[673]), $(this).html());
	e.test(n) && (n = n.replace(e, _$_662b[674]).replace(t, _$_662b[94]), $(this).html(n))
}), $(_$_662b[683]).each(function () {
	$(this).find(_$_662b[681]).each(function () {
		var t = $(this).attr(_$_662b[44]),
			e = $(this).attr(_$_662b[676]),
			n = _$_662b[677] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[678] + e) + _$_662b[26],
			i = $(this).html();
		$(this).html(null == i || _$_662b[1] == i ? _$_662b[680] : i).attr({
			"data-tab": (null == e || _$_662b[1] == e ? _$_662b[1] : n) + (null == t || _$_662b[1] == t ? _$_662b[679] : t),
			title: _$_662b[1]
		})
	}), $(this).parents(_$_662b[518]).addClass(_$_662b[682])
}), $(_$_662b[683]).myTab(), $(_$_662b[694]).each(function () {
	var r = _$_662b[1];
	$(this).find(_$_662b[689]).each(function () {
		var t = $(this).attr(_$_662b[44]),
			e = $(this).attr(_$_662b[676]),
			n = _$_662b[677] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[678] + e) + _$_662b[26],
			i = $(this).html();
		r += _$_662b[684] + (null == e || _$_662b[1] == e ? _$_662b[1] : n) + (null == t || _$_662b[685] == t ? _$_662b[1] : t) + _$_662b[686] + (_$_662b[687] + (null == i || _$_662b[1] == i ? _$_662b[688] : i) + _$_662b[94])
	}), $(this).html(r), $(this).children(_$_662b[691]).first().addClass(_$_662b[690]), $(this).children(_$_662b[693]).first().addClass(_$_662b[692])
}), $(_$_662b[698]).click(function () {
	$(this).next(_$_662b[693]).addClass(_$_662b[692]).slideToggle(_$_662b[695]).siblings(_$_662b[696]).removeClass(_$_662b[692]).slideUp(_$_662b[695]), $(this).toggleClass(_$_662b[690]), $(this).siblings(_$_662b[697]).removeClass(_$_662b[690])
}), $(_$_662b[726]).each(function () {
	var t = $(this),
		e = t.attr(_$_662b[302]),
		n = t.attr(_$_662b[699]),
		i = t.attr(_$_662b[700]),
		r = t.attr(_$_662b[70]),
		o = t.attr(_$_662b[701]),
		a = t.attr(_$_662b[702]),
		s = t.attr(_$_662b[703]),
		l = t.attr(_$_662b[704]),
		c = t.attr(_$_662b[705]),
		u = t.attr(_$_662b[706]);
	t.replaceWith(_$_662b[707] + (null == o || _$_662b[1] == o || _$_662b[301] == o ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == r || _$_662b[1] == r ? _$_662b[710] : r) + _$_662b[711] + (null == a || _$_662b[1] == a ? _$_662b[712] : a) + _$_662b[713] + (null == u || _$_662b[1] == u ? _$_662b[714] : 1 == u ? _$_662b[715] : u) + _$_662b[55] + (null == n || _$_662b[1] == n ? _$_662b[716] : n) + _$_662b[717] + (null == i || _$_662b[1] == i ? _$_662b[718] : i) + _$_662b[719] + (null == e || _$_662b[1] == e ? _$_662b[720] : e) + _$_662b[721] + (null == l || _$_662b[1] == l ? _$_662b[720] : l) + _$_662b[722] + (null == c || _$_662b[1] == c ? _$_662b[723] : c) + _$_662b[724] + (null == s || _$_662b[1] == s ? _$_662b[720] : s) + _$_662b[725])
}), $(_$_662b[746]).each(function () {
	var t = $(this),
		e = t.attr(_$_662b[727]),
		n = t.attr(_$_662b[728]),
		i = t.attr(_$_662b[700]),
		r = t.attr(_$_662b[699]),
		o = t.attr(_$_662b[70]),
		a = t.attr(_$_662b[701]),
		s = t.attr(_$_662b[702]),
		l = t.attr(_$_662b[729]),
		c = t.attr(_$_662b[730]);
	t.replaceWith(_$_662b[731] + (null == a || _$_662b[1] == a || _$_662b[301] == a ? _$_662b[1] : _$_662b[708]) + _$_662b[732] + (null == o || _$_662b[1] == o ? _$_662b[710] : o) + _$_662b[711] + (null == s || _$_662b[1] == s ? _$_662b[733] : s) + _$_662b[734] + (null == r || _$_662b[1] == r ? _$_662b[735] : r) + _$_662b[736] + (null == c || _$_662b[1] == c ? _$_662b[737] : c) + _$_662b[738] + (null == l || _$_662b[1] == l ? _$_662b[737] : l) + _$_662b[739] + (null == e || _$_662b[1] == e ? _$_662b[740] : e) + _$_662b[741] + (null == i || _$_662b[1] == i ? _$_662b[742] : i) + _$_662b[743] + (null == n || _$_662b[1] == n ? _$_662b[744] : n) + _$_662b[745])
}), $(_$_662b[758]).each(function () {
	var t = $(this),
		e = t.attr(_$_662b[699]),
		n = t.attr(_$_662b[70]),
		i = t.attr(_$_662b[702]),
		r = t.attr(_$_662b[729]),
		o = t.attr(_$_662b[701]),
		a = t.attr(_$_662b[747]),
		s = t.attr(_$_662b[706]),
		l = t.attr(_$_662b[748]);
	t.replaceWith(_$_662b[749] + (null == o || _$_662b[1] == o || _$_662b[301] == o ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == i || _$_662b[1] == i ? _$_662b[750] : i) + _$_662b[751] + (null == e || _$_662b[1] == e ? _$_662b[752] : e) + _$_662b[753] + (null == s || _$_662b[1] == s ? _$_662b[1] : s) + _$_662b[754] + (null == l || _$_662b[1] == l ? _$_662b[301] : l) + _$_662b[755] + (null == a || _$_662b[1] == a ? _$_662b[737] : a) + _$_662b[756] + (null == r || _$_662b[1] == r ? _$_662b[737] : r) + _$_662b[757])
}), $(_$_662b[762]).each(function () {
	var t = $(this),
		e = t.attr(_$_662b[699]),
		n = t.attr(_$_662b[70]),
		i = t.attr(_$_662b[701]),
		r = t.attr(_$_662b[702]);
	t.replaceWith(_$_662b[759] + (null == i || _$_662b[1] == i || _$_662b[301] == i ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == r || _$_662b[1] == r ? _$_662b[750] : r) + _$_662b[760] + (null == e || _$_662b[1] == e ? _$_662b[1] : e) + _$_662b[761])
}), $(_$_662b[764]).addClass(_$_662b[763]), $(_$_662b[767]).each(function () {
	var t = $(this).attr(_$_662b[44]),
		e = $(this).attr(_$_662b[676]),
		n = _$_662b[677] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[678] + e) + _$_662b[26],
		i = $(this).html();
	null == t && (t = _$_662b[1]), _$_662b[1] != t && (t = _$_662b[765] + (null == e || _$_662b[1] == e ? _$_662b[1] : n) + t + _$_662b[94]), $(this).html(_$_662b[766] + t + (null == i ? _$_662b[1] : i) + _$_662b[94])
}), $(_$_662b[778]).each(function () {
	var t = $(this),
		e = t.attr(_$_662b[699]),
		n = t.attr(_$_662b[768]),
		i = t.attr(_$_662b[769]),
		r = t.attr(_$_662b[701]),
		o = _$_662b[770] + n + _$_662b[771],
		a = t.attr(_$_662b[70]),
		s = t.attr(_$_662b[702]);
	t.replaceWith((null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[772] + (null == r || _$_662b[1] == r || _$_662b[301] == r ? _$_662b[1] : _$_662b[708]) + _$_662b[520] + (null == n || _$_662b[1] == n ? _$_662b[1] : o) + _$_662b[773] + (null == i || _$_662b[1] == i ? _$_662b[1] : i) + _$_662b[22]) + _$_662b[774] + (null == r || _$_662b[1] == r || _$_662b[301] == r ? _$_662b[1] : _$_662b[708]) + _$_662b[775] + (null == a || _$_662b[1] == a ? _$_662b[1] : a) + _$_662b[711] + (null == s || _$_662b[1] == s ? _$_662b[1] : s) + _$_662b[658] + (null == e || _$_662b[1] == e ? _$_662b[776] : e) + _$_662b[777] + (null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[77]))
}), $(_$_662b[781]).each(function () {
	$(this).children(_$_662b[780]).remove()
}).addClass(_$_662b[779]), $(_$_662b[787]).each(function () {
	var t = $(this).attr(_$_662b[782]),
		e = $(this).html();
	t = _$_662b[783] + (null == t || _$_662b[1] == t ? _$_662b[784] : t) + _$_662b[22] + (null == e || _$_662b[1] == e ? _$_662b[785] : e) + _$_662b[786], $(this).replaceWith(t)
});
for (var e = document.getElementsByTagName(_$_662b[788]), t = e.length, n = 0; n < t; n++) {
	e[n].innerHTML = _$_662b[789] + e[n].innerHTML + _$_662b[790];
	for (var r = e[n].innerHTML.split(/\n/).length, i = 0; i < r; i++) {
		var s = e[n].getElementsByTagName(_$_662b[791])[0];
		s.innerHTML += _$_662b[792] + (i + 1) + _$_662b[105]
	}
}
$(_$_662b[794]).each(function () {
	$(this).html($(_$_662b[793]).html())
}), $(_$_662b[799]).each(function () {
	var t = $(this).attr(_$_662b[768]),
		e = $(this).attr(_$_662b[44]),
		n = $(this).html();
	t = _$_662b[223] + (null == t || _$_662b[1] == t ? _$_662b[231] : t) + _$_662b[795] + (null == e || _$_662b[1] == e ? _$_662b[796] : e) + _$_662b[792] + (null == n || _$_662b[1] == n ? _$_662b[797] : n) + _$_662b[798], $(this).replaceWith(t)
}), $(_$_662b[807]).each(function () {
	var r = _$_662b[1];
	$(this).find(_$_662b[689]).each(function () {
		var t = $(this).attr(_$_662b[44]),
			e = $(this).attr(_$_662b[768]),
			n = $(this).attr(_$_662b[699]),
			i = $(this).html();
		r += _$_662b[800] + n + _$_662b[801] + (null == e || _$_662b[1] == e ? n : e) + _$_662b[802] + (null == t || _$_662b[1] == t ? _$_662b[1] : _$_662b[803] + (null == e || _$_662b[1] == e ? n : e) + _$_662b[22] + t + _$_662b[804]) + (_$_662b[1] == i ? _$_662b[1] : _$_662b[805] + i + _$_662b[125]) + _$_662b[664]
	}), $(this).html(r).parents(_$_662b[518]).addClass(_$_662b[806]), $(this).owlCarousel({
		nav: !0,
		rtl: ts_isRTL(),
		autoplay: !0,
		navText: [_$_662b[1], _$_662b[1]],
		autoplayTimeout: 5e3,
		loop: !0,
		responsiveClass: !0,
		animateOut: _$_662b[562],
		animateIn: _$_662b[563],
		autoplayHoverPause: !0,
		smartSpeed: 500,
		items: 1,
		responsiveRefreshRate: 500
	}).addClass(_$_662b[561])
}), $(_$_662b[809]).each(function () {
	var r = _$_662b[1],
		t = $(this);
	t.find(_$_662b[689]).each(function () {
		var t = $(this).attr(_$_662b[44]),
			e = $(this).attr(_$_662b[768]),
			n = $(this).attr(_$_662b[699]),
			i = $(this).html();
		r += _$_662b[808] + n + _$_662b[801] + (null == e || _$_662b[1] == e ? n : e) + _$_662b[802] + (null == t || _$_662b[1] == t ? _$_662b[1] : _$_662b[803] + (null == e || _$_662b[1] == e ? n : e) + _$_662b[22] + t + _$_662b[804]) + (_$_662b[1] == i ? _$_662b[1] : _$_662b[805] + i + _$_662b[125]) + _$_662b[664]
	}), t.html(r), t.owlCarousel({
		autoplay: !0,
		margin: 2,
		loop: !0,
		autoplayTimeout: 5e3,
		rtl: ts_isRTL(),
		nav: !0,
		autoplayHoverPause: !0,
		responsiveBaseElement: t,
		navText: [_$_662b[1], _$_662b[1]],
		responsive: {
			0: {
				items: 1
			},
			401: {
				items: 2
			},
			660: {
				items: 3
			},
			1e3: {
				items: 4
			}
		}
	}).addClass(_$_662b[561])
}), $(_$_662b[834]).each(function () {
	var t = $(this),
		r = t.attr(_$_662b[810]);
	t.html(t.html().replace(/&nbsp;/g, _$_662b[1])), t.find(_$_662b[689]).each(function () {
		var t = $(this),
			e = t.attr(_$_662b[811]),
			n = (e = Number(null == e || _$_662b[1] == e ? 0 : e), t.html());
		t.replaceWith(_$_662b[812] + (null == n || _$_662b[1] == n ? _$_662b[813] : n) + _$_662b[792] + e + _$_662b[814] + e + _$_662b[815] + 10 * e + _$_662b[816])
	}), t.find(_$_662b[681]).each(function () {
		var t = $(this),
			e = t.attr(_$_662b[44]),
			n = t.attr(_$_662b[199]),
			i = t.html();
		e = _$_662b[817] + (null == e || _$_662b[1] == e ? _$_662b[818] : e) + _$_662b[819] + (null == i || _$_662b[1] == i ? _$_662b[820] : i) + _$_662b[821] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[823], null != r && _$_662b[737] == r && $(_$_662b[402]).prepend(_$_662b[824] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[825]), t.replaceWith(e)
	});
	var e = t.find(_$_662b[826]),
		n = e.length,
		i = 0;
	e.each(function () {
		i += parseInt($(this).attr(_$_662b[827]))
	}), n = 10 * (e = (i / n).toFixed(1)) / 100 * 360, $(_$_662b[828]).html(e), $(_$_662b[830]).addClass(_$_662b[829] + 10 * e), $(_$_662b[833]).css({
		"-webkit-transform": _$_662b[831] + n + _$_662b[832],
		"-moz-transform": _$_662b[831] + n + _$_662b[832],
		"-ms-transform": _$_662b[831] + n + _$_662b[832],
		"-o-transform": _$_662b[831] + n + _$_662b[832],
		transform: _$_662b[831] + n + _$_662b[832]
	}), t.children(_$_662b[780]).remove()
}), $(_$_662b[518]).each(function () {
	var t, e, n, i = $(this),
		r = i.children(_$_662b[835]),
		o = r.text(),
		a = rgx[33] + _$_662b[94];
	rgx[18].test(o) ? (o = (t = o.match(rgx[18]))[0].replace(/(\r\n|\n|\r)/gm, _$_662b[1]), n = t[1], t = -1 != (e = void 0 !== t[2] ? t[2] : _$_662b[1]).indexOf(_$_662b[80]) ? _$_662b[836] + e + _$_662b[771] : _$_662b[1], e = -1 != e.indexOf(_$_662b[231]) ? _$_662b[837] + e + _$_662b[771] : _$_662b[1], r.html(_$_662b[838] + o + _$_662b[839] + n + _$_662b[520] + e + _$_662b[76] + t + _$_662b[840] + a), i.addClass(_$_662b[582])) : rgx[19].test(o) ? (i.addClass(_$_662b[582]), r.html(_$_662b[841] + a)) : rgx[20].test(o) ? (i.addClass(_$_662b[582]), r.html(_$_662b[842] + a)) : rgx[21].test(o) && (i.addClass(_$_662b[582]), i = -1 != o.indexOf(_$_662b[55]) ? o.replace(rgx[22], _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]) : _$_662b[1], r.html(_$_662b[838] + i + _$_662b[843] + a))
});
var title1, title2, title3, winHe = $(window).height();
if ($(_$_662b[518]).each(function () {
	var t = $(this),
		e = t.children(_$_662b[835]),
		n = t.find(_$_662b[844]),
		i = e.text(),
		r = .1 * t.height() - winHe + t.offset().top,
		o = $(document).scrollTop();
	t.hasClass(_$_662b[275]) || r < o && ldwid(n, t, e, i)
}), $(_$_662b[845]).length && (title1 = $(_$_662b[846]), title2 = $(_$_662b[847]), title3 = $(_$_662b[848]), title1.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) == title2.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) && (title1.html(title2.html()), title2.parent().remove()), title3.length && ($(_$_662b[849]).html(title3.html()), title3.parent().remove())), $(_$_662b[860]).each(function () {
	var i = [],
		r = $(this).html(),
		o = $(_$_662b[851]).attr(_$_662b[850]),
		t = $(_$_662b[852]).attr(_$_662b[108]),
		e = /\[lock\]/g,
		n = /\[\/lock\]/g;
	e.test(r) && n.test(r) && (_$_662b[853] == getCookieLocal(_$_662b[854] + o) ? (r = r.replace(e, _$_662b[1]).replace(n, _$_662b[1]), $(this).html(r)) : ($(this).html($(this).html().replace(e, _$_662b[856]).replace(n, _$_662b[855])), $(this).find(_$_662b[859]).each(function () {
		i.push($(this).html()), $(this).replaceWith(_$_662b[857] + t + _$_662b[858])
	}), $(document).on(_$_662b[267], function (t) {
		if (_$_662b[8] != typeof t) {
			var e = window.location.href;
			if ((t = t.url) && (-1 != t.indexOf(e) || -1 != e.indexOf(t))) {
				r = $(_$_662b[860]).html();
				var n = 0;
				$(_$_662b[861]).each(function () {
					_$_662b[8] != typeof i[n] && $(this).replaceWith(i[n]), n++
				}), setCookieLocal(_$_662b[854] + o, _$_662b[853])
			}
		}
	})))
}), $(_$_662b[862]).length && (window.twttr = function (t, e, n) {
	var i, r = t.getElementsByTagName(e)[0];
	return t.getElementById(n) ? void 0 : ((t = t.createElement(e)).id = n, t.src = _$_662b[864], r.parentNode.insertBefore(t, r), window.twttr || (i = {
		_e: [],
		ready: function (t) {
			i._e.push(t)
		}
	}))
}(document, _$_662b[261], _$_662b[863]), twttr.ready(function (t) {
	t.events.bind(_$_662b[865], function (t) {
		$.event.trigger({
			type: _$_662b[267],
			url: t.target.baseURI
		})
	})
})), ($(_$_662b[270]).length || $(_$_662b[866]).length) && fbsdk(), $(_$_662b[867]).length) {
	var Display_Reply_Form = function (t) {
			par_id = $(t).attr(_$_662b[850]), par_id = Valid_Par_Id(par_id), html = $(Cur_Cform_Hdr).html(), _$_662b[868] == Cur_Cform_Hdr ? (reset_html = _$_662b[869] + Msgs.addComment + _$_662b[77], $(Cur_Cform_Hdr).html(reset_html)) : $(Cur_Cform_Hdr).html(_$_662b[1]), Cur_Cform_Hdr = _$_662b[870] + par_id, $(Cur_Cform_Hdr).html(html), $(_$_662b[871]).attr(_$_662b[699], Cform_Ins_ParID(par_id))
		},
		Reset_Comment_Form = function () {
			html = $(Cur_Cform_Hdr).html(), $(Cur_Cform_Hdr).html(_$_662b[1]), Cur_Cform_Hdr = _$_662b[868], $(Cur_Cform_Hdr).html(html), $(_$_662b[871]).attr(_$_662b[699], Cur_Cform_Url)
		},
		Cform_Ins_ParID = function (t) {
			return t = _$_662b[872] + t + _$_662b[873], n_cform_url = Cur_Cform_Url.replace(/#%7B/, t), n_cform_url
		},
		Valid_Par_Id = function (t) {
			return -1 != (r = t.indexOf(_$_662b[234])) && (t = t.substring(r + 1)), t
		};
	0 < $(_$_662b[874]).length && $(_$_662b[512]).hasClass(_$_662b[156]) && ($(_$_662b[879]).each(function () {
		var t = $(this).html().replace(/\{/g, _$_662b[876]).replace(/#/g, _$_662b[875]).replace(/\}/g, _$_662b[224]);
		$(this).html(t), t = $(this).children(_$_662b[877]);
		for (var e = 0; e < t.length; e += t.length + 1) t.slice(e, e + t.length + 1).wrapAll(_$_662b[878])
	}), $(_$_662b[874]).each(function () {
		var t = /(\r\n|\n|\r)/gm,
			e = $(_$_662b[880]).length ? $(_$_662b[880]).text().replace(t, _$_662b[1]) : _$_662b[881],
			n = (t = (n = $(this)).children(_$_662b[216]).html().replace(t, _$_662b[1]), n.find(_$_662b[882]).html());
		e === t && (_$_662b[1] === $(_$_662b[883]).html() && $(_$_662b[883]).html(desnya), $(_$_662b[884]).html(n), $(_$_662b[889]).each(function () {
			var t = $(this).attr(_$_662b[25]);
			$(this).wrap(_$_662b[885] + t.replace(_$_662b[887], _$_662b[1]).replace(_$_662b[886], _$_662b[1]) + _$_662b[888])
		}))
	}));
	var $postbody = $(_$_662b[402]).html(),
		$adsisi = $(_$_662b[890]),
		myrgx = /\[(full-post|left-post|right-post|left-side|right-side|hideadstitle)\]/g;
	if (/\[left-post\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[891]) : /\[right-post\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[893]) : /\[left-side\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[894]) : /\[right-side\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[895]) : /\[full-post\]/.test($postbody) && $(_$_662b[892]).addClass(_$_662b[896]), /\[hideadstitle\]/.test($postbody) && $(_$_662b[892]).addClass(_$_662b[897]), myrgx.test($postbody) && $(_$_662b[402]).html($postbody.replace(myrgx, _$_662b[1])), $postbody = $(_$_662b[402]).html(), /\[ads-post\]/.test($postbody) && ($(_$_662b[402]).html($postbody.replace(/\[ads-post\]/, _$_662b[898])), $(_$_662b[899]).html($adsisi.detach())), $postbody = $(_$_662b[402]).html(), $(_$_662b[900]).length && !/\[hidetitleads\]/.test($postbody) && ($(_$_662b[402]).before(_$_662b[901] + (tbline ? _$_662b[902] : _$_662b[1]) + _$_662b[903] + (tbline ? _$_662b[904] : _$_662b[1]) + _$_662b[642]), $(_$_662b[905]).html($(_$_662b[900]).detach()), !hecpt && $(_$_662b[400]).length && ($(_$_662b[907]).prepend(_$_662b[906] + $(_$_662b[400]).html() + _$_662b[94]), $(_$_662b[400]).remove()), $(_$_662b[908]).length)) {
		var len = $(_$_662b[909]).length ? 3 : 8;
		$(_$_662b[908]).RCWid({
			maxPosts: len,
			maxPostsPerTag: 9,
			ShowImage: !1,
			ShowComment: !0,
			random: _$_662b[238] === blinest,
			tags: /(recent|random)/.test(blinest) ? [] : null,
			ShowAuthor: !1
		})
	}
	if ($(_$_662b[910]).length && !/\[hidebottomads\]/.test($postbody) && ($(_$_662b[914]).before(_$_662b[911] + (bbline ? _$_662b[902] : _$_662b[1]) + _$_662b[22] + (bbline ? _$_662b[912] : _$_662b[1]) + _$_662b[913]), $(_$_662b[915]).html($(_$_662b[910]).detach()), $(_$_662b[916]).length && $(_$_662b[916]).RCWid({
		maxPosts: 5,
		maxPostsPerTag: 9,
		ShowImage: !0,
		ShowComment: !0,
		random: _$_662b[238] === btlinest,
		tags: /(recent|random)/.test(btlinest) ? [] : null,
		ShowAuthor: !1
	})), /\[(hidetitleads|hideendads)\]/.test($postbody) && $(_$_662b[402]).html($postbody.replace(/\[(hidetitleads|hideendads)\]/g, _$_662b[1])), $postbody = $(_$_662b[402]).html(), /\[next\]/.test($postbody)) {
		$(_$_662b[851]).prepend(_$_662b[917]), $(_$_662b[914]).before(_$_662b[918]), $(_$_662b[402]).prepend(_$_662b[920]).append(_$_662b[919]);
		var pbodyhtml = $(_$_662b[402]).html();
		$(_$_662b[402]).html(pbodyhtml.replace(/\[fnt\]/g, _$_662b[922]).replace(/\[next\]/g, _$_662b[921]).replace(/\[lnt\]/g, _$_662b[94]));
		var show_per_page = 1,
			$this = $(_$_662b[851]);
		contentnya = $this.find(_$_662b[402]), number_of_items = contentnya.children().length, number_of_pages = Math.ceil(number_of_items / show_per_page), pageplace = $this.find(_$_662b[923]), curpagenya = $this.find(_$_662b[924]), perpagenya = $this.find(_$_662b[925]), curpagenya.val(0), perpagenya.val(show_per_page);
		for (var navigation_html = _$_662b[926], current_link = 0; number_of_pages > current_link;) navigation_html += _$_662b[927] + current_link + _$_662b[928] + current_link + _$_662b[22] + (current_link + 1) + _$_662b[77], current_link++;
		navigation_html += _$_662b[929], pageplace.html(navigation_html), pageplace.find(_$_662b[931]).addClass(_$_662b[930]), contentnya.children().css(_$_662b[180], _$_662b[932]), contentnya.children().slice(0, show_per_page).css(_$_662b[180], _$_662b[181]);
		var go_to_page = function (t) {
			var e = parseInt(perpagenya.val());
			start_from = t * e, end_on = start_from + e, contentnya.children().css(_$_662b[180], _$_662b[932]).slice(start_from, end_on).css(_$_662b[180], _$_662b[181]), $this.find(_$_662b[934] + t + _$_662b[935]).addClass(_$_662b[930]).siblings(_$_662b[933]).removeClass(_$_662b[930]), curpagenya.val(t), $(_$_662b[205]).animate({
				scrollTop: $(_$_662b[402]).offset().top - 80
			}, 1e3)
		};
		$this.find(_$_662b[937]).on(_$_662b[9], function () {
			var t = $this.find(_$_662b[933]);
			return new_page = parseInt(curpagenya.val()) - 1, 1 == t.prev(_$_662b[936]).length && go_to_page(new_page), !1
		}), $this.find(_$_662b[938]).on(_$_662b[9], function () {
			var t = $this.find(_$_662b[933]);
			return new_page = parseInt(curpagenya.val()) + 1, 1 == t.next(_$_662b[936]).length && go_to_page(new_page), !1
		}), $this.find(_$_662b[936]).on(_$_662b[9], function () {
			var t = $(this).attr(_$_662b[939]);
			return go_to_page(t), !1
		}), $this.find(_$_662b[940]).on(_$_662b[9], function () {
			return $(this).attr(_$_662b[939]), contentnya.children().css(_$_662b[180], _$_662b[181]), pageplace.hide(), $(_$_662b[205]).animate({
				scrollTop: $(_$_662b[402]).offset().top - 80
			}, 1e3), !1
		})
	}
	$(_$_662b[954]).each(function () {
		var t = $(this).attr(_$_662b[699]);
		$(this).attr(_$_662b[699], t.replace(/\/s[0-9]+(\-c)?\//, _$_662b[953])).addClass(_$_662b[426])
	}), $(_$_662b[507]).append(_$_662b[955]), $(_$_662b[956]).append($(_$_662b[417])), $(_$_662b[417]).myTab(), 1 == $(_$_662b[957]).length && $(_$_662b[958]).hide(), $(_$_662b[964]).each(function () {
		var t = $(this),
			e = t.attr(_$_662b[44]),
			n = t.parent(_$_662b[28]),
			i = t.parents(_$_662b[959]);
		null == e && _$_662b[1] == e || !/\{featured\}/.exec(e) || (t.attr(_$_662b[44], e.replace(/\{featured\}/, _$_662b[1])), n.length ? n.addClass(_$_662b[960]) : t.addClass(_$_662b[960]), i.length && (i.addClass(_$_662b[556]), t = i.find(_$_662b[961]).text(), i.find(_$_662b[963]).append(_$_662b[962] + t + _$_662b[105])))
	});
	var txtnyaaa = $(_$_662b[402]).html(),
		imgjd = [],
		pfeat = (imgjd = /<img\s+[^>]*src="([^"]*)"[^>]*>/.exec(txtnyaaa), $(_$_662b[963]));
	if (pfeat.length) $(_$_662b[963]).each(function () {
		$(_$_662b[965]).append($(this))
	}), 1 < pfeat.length && ($(_$_662b[965]).wrapInner(_$_662b[966]), $(_$_662b[967]).owlCarousel({
		nav: !0,
		rtl: ts_isRTL(),
		navText: [_$_662b[1], _$_662b[1]],
		loop: !0,
		responsiveClass: !0,
		autoplayHoverPause: !0,
		smartSpeed: 500,
		items: 1,
		responsiveRefreshRate: 500
	}).addClass(_$_662b[561]));
	else if (null != imgjd && imgjd.index <= 480 && fpost) {
		var img = $(_$_662b[964]).first(),
			par = img.parent(_$_662b[28]),
			pars = img.parents(_$_662b[959]),
			gpars = img.parents(_$_662b[968]),
			pars2 = img.parents(_$_662b[969]);
		if (!gpars.length) {
			if ($(_$_662b[965]).append(par.length ? par : img), pars2.addClass(_$_662b[556]), pars.length) {
				var text = pars.find(_$_662b[961]).text();
				$(_$_662b[970]).append(_$_662b[962] + text + _$_662b[105]), pars.addClass(_$_662b[556])
			}
			$(_$_662b[971]).length && $(_$_662b[971]).removeAttr(_$_662b[78])
		}
	}
	var link = $(_$_662b[852]).attr(_$_662b[108]);
	$(_$_662b[401]).after(_$_662b[974] + link + _$_662b[975]), $(_$_662b[977]).click(function () {
		var t = $(this);
		return t.hasClass(_$_662b[18]) ? ($(_$_662b[976]).hide(), t.removeClass(_$_662b[18])) : (t.addClass(_$_662b[18]), $(_$_662b[976]).show().children().focus().select()), !1
	}), $(_$_662b[979]).addClass(_$_662b[978])
}
$(_$_662b[980]).each(function () {
	$(this).html($(this).html().replace(rgx[16], _$_662b[1]))
});
var $outer = $(_$_662b[981]),
	$contact = $(_$_662b[982]);
$(_$_662b[984]).click(function () {
	return $contact.hasClass(_$_662b[583]) || ($contact.addClass(_$_662b[583]), $outer.addClass(_$_662b[983])), !1
}), $(_$_662b[985]).click(function () {
	return $contact.removeClass(_$_662b[583]), $outer.removeClass(_$_662b[983]), !1
}), $(document).on(_$_662b[9], function (t) {
	$(t.target).is(_$_662b[986]) || ($contact.removeClass(_$_662b[583]), $outer.removeClass(_$_662b[983]))
}), $(_$_662b[988]).each(function () {
	var t = $(this);
	t.parents(_$_662b[503]), t = t.html(), $(_$_662b[987]).append(t)
}), $(_$_662b[1009]).one(_$_662b[590], function () {
	var t = $(this),
		n = t.find(_$_662b[35]),
		e = n.text();
	if (/grid/g.test(e)) e = e.replace(/grid\//g, _$_662b[1]), t.addClass(_$_662b[581]), n.RCWid({
		maxPosts: 4,
		random: _$_662b[238] === e,
		review: !hrev,
		ShowTags: !!/(recent|random)/.test(e),
		tags: /(recent|random)/.test(e) ? null : e.split(_$_662b[217])
	}).addClass(_$_662b[989]), n.append(_$_662b[990] + (_$_662b[238] === e ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === e ? _$_662b[1] : _$_662b[221] + e) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[132]);
	else if (/mcarousel/g.test(e)) {
		var i = t.parents(_$_662b[987]);
		e = e.replace(/mcarousel\//g, _$_662b[1]), t.addClass(_$_662b[581]), n.RCWid({
			maxPosts: 9,
			random: _$_662b[238] === e,
			review: !hrev,
			auto: aplay,
			postType: i.length ? _$_662b[1] : _$_662b[234],
			ShowTags: !!/(recent|random)/.test(e),
			tags: /(recent|random)/.test(e) ? null : e.split(_$_662b[217])
		}).addClass(_$_662b[989]), n.append(_$_662b[990] + (_$_662b[238] === e ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === e ? _$_662b[1] : _$_662b[221] + e) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[994])
	} else if (/mtab/g.test(e)) {
		i = (e = e.replace(/mtab\//g, _$_662b[1])).split(_$_662b[217]), e = _$_662b[995];
		for (var r = 0; r < i.length; r++) e += _$_662b[256] + i[r] + _$_662b[22] + i[r] + _$_662b[94];
		n.html(e + _$_662b[94]), n.find(_$_662b[996]).myTab(), t.addClass(_$_662b[581]), n.find(_$_662b[260]).each(function () {
			var t = $(this).text();
			$(this).RCWid({
				maxPosts: 4,
				review: !hrev,
				tags: t.split(_$_662b[217])
			}).addClass(_$_662b[989]), $(this).append(_$_662b[997] + t + _$_662b[222] + Npage + _$_662b[993])
		}), n.addClass(_$_662b[998])
	} else /mbig/g.test(e) ? (e = e.replace(/mbig\//g, _$_662b[1]), t.addClass(_$_662b[581]), n.RCWid({
		maxPosts: 7,
		random: _$_662b[238] === e,
		maxPostsPerTag: /(recent|random)/.test(e) || 1 == e.split(_$_662b[217]).length ? 7 : 4,
		tags: /(recent|random)/.test(e) ? null : e.split(_$_662b[217]),
		fbig: !0,
		review: !hrev,
		summary: 100
	}), n.append(_$_662b[990] + (_$_662b[238] === e ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === e ? _$_662b[1] : _$_662b[221] + e) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[999])) : /links/g.test(e) && (t.addClass(_$_662b[581]), n.html(_$_662b[1]), n.addClass(_$_662b[1e3]), t = $(_$_662b[1001]), $(_$_662b[1002]).hide(), t.each(function () {
		var t = $(this).children(_$_662b[216]).html(),
			e = $(this).children(_$_662b[835]).html();
		n.append(_$_662b[1003] + t + _$_662b[1004] + e + _$_662b[642])
	}), n.find(_$_662b[835]).each(function () {
		if (texnya = $(this).text(), /gridpost/g.test(texnya)) {
			var t = $(this).parents(_$_662b[987]),
				e = texnya.replace(/gridpost\//g, _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
			$(this).RCWid({
				maxPosts: 4,
				random: _$_662b[238] === e,
				ShowTags: !!/(recent|random)/.test(e),
				review: !hrev,
				postType: t.length ? _$_662b[1] : _$_662b[234],
				tags: /(recent|random)/.test(e) ? null : e.split(_$_662b[217])
			}).addClass(_$_662b[989]), (t = $(this).parent(_$_662b[1005])).addClass(_$_662b[1006]), _$_662b[238] !== e && (t.find(_$_662b[216]).wrapInner(_$_662b[1007] + (_$_662b[220] === e ? _$_662b[1] : _$_662b[221] + e) + _$_662b[222] + Npage + _$_662b[224]), t.find(_$_662b[216]).append(_$_662b[1008] + (_$_662b[220] === e ? _$_662b[1] : _$_662b[221] + e) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]))
		}
	}))
}), $(_$_662b[1011]).html($(_$_662b[1010]).html()), $(_$_662b[1013]).html($(_$_662b[1012]).html()), $(_$_662b[1015]).click(function () {
	var t = $(this).parent(_$_662b[35]).children(_$_662b[37]);
	return t.is(_$_662b[1014]) ? (t.slideDown(), $(this).addClass(_$_662b[18])) : (t.slideUp(), $(this).removeClass(_$_662b[18])), !1
}), $(_$_662b[987]).css({
	"max-height": $(window).height() - 140
});
var maxSummaryLength = sumLength,
	olderLink = _$_662b[1016] + ptx + _$_662b[1017],
	newerLink = _$_662b[1018] + ntx + _$_662b[1017],
	defaultImage = _$_662b[776],
	getThumb = function (t, e) {
		var n, i = e;
		n = t.content.$t;
		try {
			i = t.media$thumbnail.url
		} catch (t) {
			rgx[6].test(n) || rgx[8].test(n) ? (i = rgx[6].exec(rgx[6]), n = rgx[8].exec(n), i = _$_662b[53] + (null != i ? i[5] : n[3]) + _$_662b[51]) : i = rgx[5].test(n) ? (n = rgx[5].exec(n))[4] : e
		}
		return i
	},
	setLink = function (t, e, n, i) {
		var r = i.published.$t.match(/\d+/g);
		r = new Date(r[0], r[1] - 1, r[2], r[3], r[4], r[5]), n = getThumb(i, n);
		var o = $(t).attr(_$_662b[27]);
		if ((s = (s = _$_662b[108] in i ? i.content.$t : _$_662b[109] in i ? i.summary.$t : _$_662b[1]).replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > maxSummaryLength) var a = (s = s.substring(0, maxSummaryLength)).lastIndexOf(_$_662b[76]),
			s = s.substring(0, a) + _$_662b[115];
		e = (e = (e = (e = (e = (e = e.replace(/\[title\]/g, i.title.$t)).replace(/\[date\]/g, r.toLocaleDateString())).replace(/\[datetime\]/g, r.toLocaleString())).replace(/\[summary\]/g, s)).replace(/\[thumburl\]/g, n)).replace(/\[url\]/g, o), r = _$_662b[1], _$_662b[1] != n && (r = _$_662b[1019] + n + _$_662b[22]), e = e.replace(/\[img\]/g, r), $(t).replaceWith(e)
	},
	setOlderLink = function (t) {
		setLink(_$_662b[1020], olderLink, defaultImage, t)
	},
	setNewerLink = function (t) {
		setLink(_$_662b[1021], newerLink, defaultImage, t)
	};
$(_$_662b[1024]).each(function () {
	var t = $(this).attr(_$_662b[44]),
		e = $(this).attr(_$_662b[1022]);
	$(_$_662b[1023]).replaceText(t, e)
});
var target, scroll, lastScrollTop = 0;
$(window).on(_$_662b[1025], function () {
	var t = $(this).scrollTop();
	fixM && (t >= $(_$_662b[1026]).height() + 60 ? ($(_$_662b[1028]).addClass(_$_662b[1027]), lastScrollTop < t ? $(_$_662b[1026]).hasClass(_$_662b[1029]) && $(_$_662b[1026]).removeClass(_$_662b[1029]) : $(_$_662b[1026]).addClass(_$_662b[1029]), lastScrollTop = t) : $(_$_662b[1028]).removeClass(_$_662b[1027]), $(_$_662b[1031]).hasClass(_$_662b[1030]) || $(_$_662b[1031]).addClass(_$_662b[1030])), sSide && 960 < $(this).width() && (1 < $(_$_662b[206]).width() && stickside($(_$_662b[206]), _$_662b[1032], t), 1 < $(_$_662b[1033]).width() && stickside($(_$_662b[1033]), _$_662b[1032], t), $(_$_662b[1031]).hasClass(_$_662b[1034]) || $(_$_662b[1031]).addClass(_$_662b[1034]));
	var e, n, i, r, o, a, s, l, c, u = $(_$_662b[518]).length;
	if ($(_$_662b[1035]).length < u) {
		var h = 1 <= t;
		$(_$_662b[518]).each(function () {
			if (!$(this).hasClass(_$_662b[275])) {
				var t = $(this),
					e = t.children(_$_662b[835]),
					n = t.find(_$_662b[844]),
					i = e.text();
				h && ldwid(n, t, e, i)
			}
		})
	}
	if ($(_$_662b[1036]).length || fbsdk(), $(_$_662b[354]).length && $(_$_662b[509]).hasClass(_$_662b[1037]) && $(_$_662b[1038]).length && !$(_$_662b[354]).hasClass(_$_662b[1039]) && ((c = (l = document).createElement(_$_662b[261])).src = _$_662b[95] + dsqsn + _$_662b[1040], c.setAttribute(_$_662b[1041], +new Date), (l.head || l.body).appendChild(c), $(_$_662b[354]).addClass(_$_662b[1039])), $(_$_662b[1042]).length && $(_$_662b[1043]).length && !$(_$_662b[1042]).hasClass(_$_662b[1044])) {
		var f = $(_$_662b[1042]).attr(_$_662b[44]);
		e = window.SPOTIM = {}, n = document, i = _$_662b[1045], s = (r = n.getElementsByTagName(_$_662b[261]))[r.length - 1].parentNode, e.spotId = f, o = e.parentElement = s, (a = n.createElement(_$_662b[261])).type = _$_662b[408], a.async = !0, a.src = (_$_662b[410] === n.location.protocol ? _$_662b[409] : _$_662b[80]) + _$_662b[1046] + i, (o || n.body || n.head).appendChild(a), $(_$_662b[1042]).addClass(_$_662b[1044])
	}
	$(_$_662b[1047]).length && !$(_$_662b[1048]).length && socialct($(_$_662b[851])), (u = $(_$_662b[146]).attr(_$_662b[44])) && _$_662b[1] != u && $(_$_662b[512]).hasClass(_$_662b[156]) && !$(_$_662b[1050]).hasClass(_$_662b[1049]) && ($(_$_662b[1050]).addClass(_$_662b[1049]), $.getJSON(_$_662b[1051] + encodeURIComponent(u) + _$_662b[1052], function (t) {
		1 < (t = parseInt(t.feed.openSearch$totalResults.$t)) ? $.getJSON(_$_662b[1053] + (t - 1) + _$_662b[1054], function (t) {
			setNewerLink(t.feed.entry[0]), 1 < parseInt(t.feed.openSearch$totalResults.$t) - parseInt(t.feed.openSearch$startIndex.$t) && setOlderLink(t.feed.entry[2])
		}) : $.getJSON(_$_662b[1055], function (t) {
			setOlderLink(t.feed.entry[0])
		})
	})), $(_$_662b[1056]).length && !$(_$_662b[1057]).length && $(_$_662b[1056]).each(function () {
		$(this).attr(_$_662b[78], _$_662b[1058] + $(this).attr(_$_662b[49]) + _$_662b[1059]), $(this).removeAttr(_$_662b[49]), $(this).addClass(_$_662b[1060])
	}), 250 <= t ? $(_$_662b[1062]).addClass(_$_662b[1061]) : $(_$_662b[1062]).removeClass(_$_662b[1061]), shreco && $(_$_662b[1063]).length && $(_$_662b[512]).hasClass(_$_662b[156]) && ($(_$_662b[1064]).length || ($(_$_662b[981]).append(_$_662b[1065] + recotx + _$_662b[1066]), $(_$_662b[1067]).RCWid({
		maxPosts: 3,
		maxPostsPerTag: 5,
		ShowComment: !0,
		ShowImage: !0,
		ShowDesc: !1,
		summary: 100,
		ShowAuthor: hauthor
	}), $(_$_662b[1070]).on(_$_662b[9], function () {
		return $(_$_662b[1064]).hasClass(_$_662b[1068]) ? $(_$_662b[1064]).removeClass(_$_662b[1068]).addClass(_$_662b[1069]) : $(_$_662b[1064]).addClass(_$_662b[1068]), !1
	})), t > $(_$_662b[1071]).offset().top - 400 && t < $(_$_662b[1072]).offset().top - $(_$_662b[1072]).height() && 960 < $(this).width() ? $(_$_662b[1064]).addClass(_$_662b[1068]) : $(_$_662b[1064]).removeClass(_$_662b[1068])), shrel && 1 < t && !$(_$_662b[1074]).hasClass(_$_662b[1073]) && $(_$_662b[1074]).RCWid({
		maxPosts: _$_662b[359] === relst ? mx.rl : _$_662b[1076] === relst ? mx.fb1 : 6,
		maxPostsPerTag: 6,
		auto: aplay,
		postType: _$_662b[359] === relst ? _$_662b[234] : _$_662b[1],
		ShowDesc: _$_662b[1076] === relst
	}).addClass(_$_662b[1075] + relst)
}), $(_$_662b[1063]).each(function () {
	var n, i = 1,
		r = $(this);
	n = $(this).text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]), $(_$_662b[1079]).each(function () {
		var t, e = $(this);
		t = e.attr(_$_662b[44]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]), i = e.attr(_$_662b[1077]), n !== t || r.attr(_$_662b[1078]) || r.attr(_$_662b[1078], i)
	})
}), $(_$_662b[1084]).on(_$_662b[9], function (t) {
	location.pathname.replace(/^\//, _$_662b[1]) == this.pathname.replace(/^\//, _$_662b[1]) && location.hostname == this.hostname && (target = (target = $(this.hash)).length ? target : $(_$_662b[1080] + this.hash.slice(1) + _$_662b[935])).length && (_$_662b[1081] == typeof document.body.style.transitionProperty ? (t.preventDefault(), (t = $(document).height() - $(window).height()) < (scroll = target.offset().top) && (scroll = t), $(_$_662b[153]).css({
		"margin-top": $(window).scrollTop() - scroll + _$_662b[297],
		transition: _$_662b[1083]
	}).data(_$_662b[1082], !0)) : $(_$_662b[205]).animate({
		scrollTop: scroll
	}, 1e3))
}), $(_$_662b[153]).on(_$_662b[1085], function (t) {
	t.target == t.currentTarget && !0 === $(this).data(_$_662b[1082]) && ($(this).removeAttr(_$_662b[78]).data(_$_662b[1082], !1), $(_$_662b[205]).scrollTop(scroll))
}), $(window).on(_$_662b[1086], function () {
	$(_$_662b[1088]).each(function () {
		$(this).width() < 680 ? $(this).addClass(_$_662b[1087]) : $(this).removeClass(_$_662b[1087])
	}), (a = (e = $(_$_662b[154])).width()) < 680 ? e.addClass(_$_662b[1089]) : e.removeClass(_$_662b[1089]), $(_$_662b[1036]).length && window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse, $(_$_662b[1090]).length || $(_$_662b[1092]).append($(_$_662b[1091])), $(_$_662b[1093]).length && (a = $(_$_662b[1094]).width(), $(_$_662b[1095]).css({
		width: a
	}));
	var t = $(window).width(),
		e = $(_$_662b[1096]).height(),
		n = $(_$_662b[1097]).height(),
		i = $(_$_662b[207]).height(),
		r = $(_$_662b[1098]).height(),
		o = $(_$_662b[209]).height(),
		a = $(_$_662b[1033]).width();
	960 < t ? (e < (t = n + i + r + o) ? $(_$_662b[1096]).css(_$_662b[1099], t + _$_662b[297]) : $(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]), a < 100 && $(_$_662b[1033]).addClass(_$_662b[556])) : ($(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]), 100 < a && $(_$_662b[1033]).removeClass(_$_662b[556]))
}).trigger(_$_662b[1086]);
var Bamboo = function (r, o) {
		function t() {
			var t, e = o.createElement(_$_662b[829]),
				n = {
					webkitTransform: _$_662b[1100],
					OTransform: _$_662b[1101],
					msTransform: _$_662b[1102],
					MozTransform: _$_662b[1103],
					transform: _$_662b[1104]
				};
			for (var i in o.body.insertBefore(e, null), n) void 0 !== e.style[i] && (e.style[i] = _$_662b[1105], t = r.getComputedStyle(e).getPropertyValue(n[i]));
			return o.body.removeChild(e), void 0 !== t && 0 < t.length && _$_662b[932] !== t
		}
		$(_$_662b[1106]);
		var e, n, a = $(_$_662b[981]),
			s = a.parent().children(_$_662b[1107]),
			l = (n = !1, _$_662b[1108] in r || r.DocumentTouch && o instanceof DocumentTouch ? (n = !0, $(_$_662b[153]).addClass(_$_662b[1109])) : $(_$_662b[153]).addClass(_$_662b[16]), n),
			c = (e = 0, navigator.userAgent.match(/(iPhone|iPod)/i) && -1 != navigator.userAgent.indexOf(_$_662b[1110]) && -1 == navigator.userAgent.indexOf(_$_662b[1111]) && (e = 60), _$_662b[1112] in r.navigator && r.navigator.standalone && (e = 0), e),
			u = (t = t()) ? _$_662b[1113] : _$_662b[1],
			h = _$_662b[1114] in r ? _$_662b[1115] : _$_662b[1086],
			f = (l ? _$_662b[1116] : _$_662b[1117], l ? _$_662b[1118] : _$_662b[1119]),
			_ = l ? _$_662b[1120] : _$_662b[1121],
			d = function (t) {
				for (i in this.options = {
					menu: !0,
					breakpoint: 1e3,
					menuWidth: 300,
					headerHeight: 50,
					snapThreshold: null,
					resize: null
				}, t) this.options[i] = t[i];
				this.resizeSite(), $(r).on(h, this.resizeSite.bind(this)), s.on(f, this._move.bind(this)), a.on(_, this._end.bind(this))
			};
		return d.prototype = {
			info: {},
			x: 0,
			dx: 0,
			ox: null,
			tgt: null,
			desktop: !1,
			dimensions: function () {
				return [this.info.docWidth, this.info.docHeight]
			},
			offset: function () {
				return c
			},
			resizeSite: function () {
				this.info.docHeight = $(r).height(), this.info.docWidth = $(r).width(), this.layout(), this.snapThreshold = null === this.options.snapThreshold ? Math.round(.25 * this.info.docWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.info.docWidth * this.options.snapThreshold.replace(_$_662b[71], _$_662b[1]) / 100) : this.options.snapThreshold, this.options.resize && this.options.resize()
			},
			layout: function () {
				this.desktop = !(this.info.docWidth < this.options.breakpoint)
			},
			_move: function (t) {
				if (this.initiated && !this.desktop && this.options.menu) {
					var e = l ? t.originalEvent.touches[0] : t;
					this.stepsX += Math.abs(e.pageX - this.pointX), this.stepsY += Math.abs(e.pageY - this.pointY), this.stepsX < 10 && this.stepsY < 10 || (!this.directionLocked && this.stepsY > this.stepsX ? this.initiated = !1 : (t.preventDefault(), this.directionLocked = !0, this.ox && (t = parseInt(e.pageX) - this.ox, this.dx = t - this.x, this.x = t, this._moveContainer(t))))
				}
			},
			_end: function (t) {
				this.initiated && !this.desktop && this.options.menu && (t = parseInt((l ? t.originalEvent.changedTouches[0] : t).pageX) - parseInt(this.ox), this.dx <= 0 && !this.tgt.is(_$_662b[1123]) ? this._animateTo(t, 0) : this._animateTo(t, this.options.menuWidth), 0 === this.dx && 0 === t && this.tgt.is(_$_662b[1106]) && this._animateTo(this.options.menuWidth, this.options.menuWidth), this.ox = null, this.dx = 0, this.initiated = !1)
			},
			_animateTo: function (t, e) {
				s.css({
					"transition-duration": Math.floor(100 * t / this.snapThreshold) + _$_662b[1124],
					transform: _$_662b[1125] + e + _$_662b[1126] + u
				}), this._toggleCover(e)
			},
			_moveContainer: function (t) {
				s.css({
					transform: _$_662b[1125] + t + _$_662b[1126] + u
				})
			},
			_toggleCover: function (t) {
				t > this.options.menuWidth - 50 ? (a.addClass(_$_662b[1127]), $(_$_662b[1129]).addClass(_$_662b[1128])) : (a.removeClass(_$_662b[1127]), $(_$_662b[1129]).removeClass(_$_662b[1128]))
			}
		}, d
	},
	scrollTimer = null;

function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: "en",
		includedLanguages: "ar,bg,ca,cs,da,de,el,es,fa,fi,fr,hi,hu,id,it,ja,ko,ne,nl,no,pa,pl,pt,ru,sv,th,tl,tr,zh-CN",
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
		autoDisplay: !1,
		gaTrack: !0,
		gaId: "UA-92570002-1"
	}, "google_translate_element")
}
$(window).scroll(function () {
	var t = $(this).height(),
		e = t / $(document).height() * t,
		n = $(this).scrollTop() / ($(document).height() - t);
	t = n * (t - e) + e / 2 - $("#scroll").height() / 2, $("#scroll").css("top", t).text(" " + Math.round(100 * n) + "%").fadeIn(100), null !== scrollTimer && clearTimeout(scrollTimer), scrollTimer = setTimeout(function () {
		$("#scroll").fadeOut()
	}, 1500)
}), jQuery(document).ready(function () {
	! function () {
		function i(t) {
			var e = document.getElementsByTagName("head")[0];
			e || (e = document.body.parentNode.appendChild(document.createElement("head"))), e.appendChild(t)
		}
		var r = new Date;
		window.addEventListener && void 0 === document.readyState && window.addEventListener("DOMContentLoaded", function () {
			document.readyState = "complete"
		}, !1),
		function (t) {
			t = t.split(".");
			for (var e = window, n = 0; n < t.length; ++n)
				if (!(e = e[t[n]])) return !1;
			return !0
		}("google.translate.Element") || function () {
			for (var t = ["google", "translate", "_const"], e = window, n = 0; n < t.length; ++n) e = e.hasOwnProperty ? e.hasOwnProperty(t[n]) ? e[t[n]] : e[t[n]] = {} : e[t[n]] || (e[t[n]] = {});
			(t = e)._cest = r, r = void 0, t._cl = "en", t._cuc = "googleTranslateElementInit", t._ctkk = "429293.489125427", t._pah = "translate.googleapis.com", t._pas = "https://", t._plla = "translate.googleapis.com/translate_a/l", t._ps = "https://translate.googleapis.com/translate_static/css/translateelement.css", t._puh = "translate.google.com", t = t._ps, (e = document.createElement("link")).type = "text/css", e.async = "true", e.rel = "stylesheet", e.charset = "UTF-8", e.href = t, i(e), (t = document.createElement("script")).type = "text/javascript", t.async = "true", t.charset = "UTF-8", t.src = "https://translate.googleapis.com/translate_static/js/element/main.js", i(t)
		}()
	}()
}), ! function () {
	var e = "fbclid";
	if (-1 !== location.search.indexOf(e + "=")) {
		var c = "";
		try {
			var a = new URL(location);
			a.searchParams.delete(e), c = a.href
		} catch (a) {
			var r = new RegExp("[?&]" + e + "=.*$");
			c = location.search.replace(r, ""), c = location.pathname + c + location.hash
		}
		history.replaceState(null, "", c)
	}
}(),
function () {
	var h, n = this;

	function p(t) {
		return void 0 !== t
	}

	function aa() {}

	function ba(t) {
		t.yb = function () {
			return t.zf ? t.zf : t.zf = new t
		}
	}

	function ca(t) {
		var e = typeof t;
		if ("object" == e) {
			if (!t) return "null";
			if (t instanceof Array) return "array";
			if (t instanceof Object) return e;
			var n = Object.prototype.toString.call(t);
			if ("[object Window]" == n) return "object";
			if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
			if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
		} else if ("function" == e && void 0 === t.call) return "object";
		return e
	}

	function da(t) {
		return "array" == ca(t)
	}

	function ea(t) {
		var e = ca(t);
		return "array" == e || "object" == e && "number" == typeof t.length
	}

	function q(t) {
		return "string" == typeof t
	}

	function fa(t) {
		return "number" == typeof t
	}

	function r(t) {
		return "function" == ca(t)
	}

	function ga(t) {
		var e = typeof t;
		return "object" == e && null != t || "function" == e
	}

	function ha(t, e, n) {
		return t.call.apply(t.bind, arguments)
	}

	function ia(e, n, t) {
		if (!e) throw Error();
		if (2 < arguments.length) {
			var i = Array.prototype.slice.call(arguments, 2);
			return function () {
				var t = Array.prototype.slice.call(arguments);
				return Array.prototype.unshift.apply(t, i), e.apply(n, t)
			}
		}
		return function () {
			return e.apply(n, arguments)
		}
	}

	function u(t, e, n) {
		return (u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia).apply(null, arguments)
	}
	var b = Date.now || function () {
		return +new Date
	};

	function ka(t, o) {
		function e() {}
		e.prototype = o.prototype, t.ph = o.prototype, t.prototype = new e, (t.prototype.constructor = t).lh = function (t, e, n) {
			for (var i = Array(arguments.length - 2), r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
			return o.prototype[e].apply(t, i)
		}
	}

	function la(t) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, la);
		else {
			var e = Error().stack;
			e && (this.stack = e)
		}
		t && (this.message = String(t))
	}

	function v(t, e) {
		for (var n in t) e.call(void 0, t[n], n, t)
	}

	function ma(t, e) {
		var n, i = {};
		for (n in t) i[n] = e.call(void 0, t[n], n, t);
		return i
	}

	function na(t, e) {
		for (var n in t)
			if (!e.call(void 0, t[n], n, t)) return !1;
		return !0
	}

	function oa(t) {
		var e, n = 0;
		for (e in t) n++;
		return n
	}

	function pa(t) {
		for (var e in t) return e
	}

	function qa(t) {
		var e, n = [],
			i = 0;
		for (e in t) n[i++] = t[e];
		return n
	}

	function ra(t) {
		var e, n = [],
			i = 0;
		for (e in t) n[i++] = e;
		return n
	}

	function sa(t, e) {
		for (var n in t)
			if (t[n] == e) return !0;
		return !1
	}

	function ta(t, e, n) {
		for (var i in t)
			if (e.call(n, t[i], i, t)) return i
	}

	function ua(t, e) {
		var n = ta(t, e, void 0);
		return n && t[n]
	}

	function va(t) {
		for (var e in t) return !1;
		return !0
	}

	function wa(t) {
		var e, n = {};
		for (e in t) n[e] = t[e];
		return n
	}
	ka(la, Error), la.prototype.name = "CustomError";
	var d = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function ya(t, e) {
		for (var n, i, r = 1; r < arguments.length; r++) {
			for (n in i = arguments[r]) t[n] = i[n];
			for (var o = 0; o < d.length; o++) n = d[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		}
	}

	function za(a) {
		if (a = String(a), !/^\s*$/.test(a) && /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
			return eval("(" + a + ")")
		} catch (t) {}
		throw Error("Invalid JSON string: " + a)
	}

	function Aa() {
		this.Vd = void 0
	}

	function Ba(t, e, n) {
		switch (typeof e) {
		case "string":
			Ca(e, n);
			break;
		case "number":
			n.push(isFinite(e) && !isNaN(e) ? e : "null");
			break;
		case "boolean":
			n.push(e);
			break;
		case "undefined":
			n.push("null");
			break;
		case "object":
			if (null == e) {
				n.push("null");
				break
			}
			if (da(e)) {
				var i = e.length;
				n.push("[");
				for (var r = "", o = 0; o < i; o++) n.push(r), r = e[o], Ba(t, t.Vd ? t.Vd.call(e, String(o), r) : r, n), r = ",";
				n.push("]");
				break
			}
			for (o in n.push("{"), i = "", e) Object.prototype.hasOwnProperty.call(e, o) && ("function" != typeof (r = e[o]) && (n.push(i), Ca(o, n), n.push(":"), Ba(t, t.Vd ? t.Vd.call(e, o, r) : r, n), i = ","));
			n.push("}");
			break;
		case "function":
			break;
		default:
			throw Error("Unknown type: " + typeof e)
		}
	}
	var g = {
			'"': '\\"',
			"\\": "\\\\",
			"/": "\\/",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\v": "\\u000b"
		},
		Ea = /\uffff/.test(" ") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
		w;

	function Ca(t, e) {
		e.push('"', t.replace(Ea, function (t) {
			if (t in g) return g[t];
			var e = t.charCodeAt(0),
				n = "\\u";
			return e < 16 ? n += "000" : e < 256 ? n += "00" : e < 4096 && (n += "0"), g[t] = n + e.toString(16)
		}), '"')
	}

	function Fa() {
		return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ b()).toString(36)
	}
	t: {
		var j = n.navigator;
		if (j) {
			var k = j.userAgent;
			if (k) {
				w = k;
				break t
			}
		}
		w = ""
	}

	function Ia() {
		this.Ya = -1
	}

	function Ja() {
		this.Ya = -1, this.Ya = 64, this.P = [], this.pe = [], this.eg = [], this.Od = [], this.Od[0] = 128;
		for (var t = 1; t < this.Ya; ++t) this.Od[t] = 0;
		this.ge = this.ec = 0, this.reset()
	}

	function Ka(t, e, n) {
		n || (n = 0);
		var i = t.eg;
		if (q(e))
			for (var r = 0; r < 16; r++) i[r] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
		else
			for (r = 0; r < 16; r++) i[r] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
		for (r = 16; r < 80; r++) {
			var o = i[r - 3] ^ i[r - 8] ^ i[r - 14] ^ i[r - 16];
			i[r] = 4294967295 & (o << 1 | o >>> 31)
		}
		e = t.P[0], n = t.P[1];
		var a, s = t.P[2],
			l = t.P[3],
			c = t.P[4];
		for (r = 0; r < 80; r++) r < 40 ? r < 20 ? (o = l ^ n & (s ^ l), a = 1518500249) : (o = n ^ s ^ l, a = 1859775393) : r < 60 ? (o = n & s | l & (n | s), a = 2400959708) : (o = n ^ s ^ l, a = 3395469782), o = (e << 5 | e >>> 27) + o + c + a + i[r] & 4294967295, c = l, l = s, s = 4294967295 & (n << 30 | n >>> 2), n = e, e = o;
		t.P[0] = t.P[0] + e & 4294967295, t.P[1] = t.P[1] + n & 4294967295, t.P[2] = t.P[2] + s & 4294967295, t.P[3] = t.P[3] + l & 4294967295, t.P[4] = t.P[4] + c & 4294967295
	}
	ka(Ja, Ia),
	Ja.prototype.reset = function () {
		this.P[0] = 1732584193, this.P[1] = 4023233417, this.P[2] = 2562383102, this.P[3] = 271733878, this.P[4] = 3285377520, this.ge = this.ec = 0
	},
	Ja.prototype.update = function (t, e) {
		if (null != t) {
			p(e) || (e = t.length);
			for (var n = e - this.Ya, i = 0, r = this.pe, o = this.ec; i < e;) {
				if (0 == o)
					for (; i <= n;) Ka(this, t, i), i += this.Ya;
				if (q(t)) {
					for (; i < e;)
						if (r[o] = t.charCodeAt(i), ++i, ++o == this.Ya) {
							Ka(this, r), o = 0;
							break
						}
				} else
					for (; i < e;)
						if (r[o] = t[i], ++i, ++o == this.Ya) {
							Ka(this, r), o = 0;
							break
						}
			}
			this.ec = o, this.ge += e
		}
	};
	var x = Array.prototype,
		La = x.indexOf ? function (t, e, n) {
			return x.indexOf.call(t, e, n)
		} : function (t, e, n) {
			if (n = null == n ? 0 : n < 0 ? Math.max(0, t.length + n) : n, q(t)) return q(e) && 1 == e.length ? t.indexOf(e, n) : -1;
			for (; n < t.length; n++)
				if (n in t && t[n] === e) return n;
			return -1
		},
		Ma = x.forEach ? function (t, e, n) {
			x.forEach.call(t, e, n)
		} : function (t, e, n) {
			for (var i = t.length, r = q(t) ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t)
		},
		Na = x.filter ? function (t, e, n) {
			return x.filter.call(t, e, n)
		} : function (t, e, n) {
			for (var i = t.length, r = [], o = 0, a = q(t) ? t.split("") : t, s = 0; s < i; s++)
				if (s in a) {
					var l = a[s];
					e.call(n, l, s, t) && (r[o++] = l)
				}
			return r
		},
		Oa = x.map ? function (t, e, n) {
			return x.map.call(t, e, n)
		} : function (t, e, n) {
			for (var i = t.length, r = Array(i), o = q(t) ? t.split("") : t, a = 0; a < i; a++) a in o && (r[a] = e.call(n, o[a], a, t));
			return r
		},
		Pa = x.reduce ? function (t, e, n, i) {
			for (var r = [], o = 1, a = arguments.length; o < a; o++) r.push(arguments[o]);
			return i && (r[0] = u(e, i)), x.reduce.apply(t, r)
		} : function (n, i, t, r) {
			var o = t;
			return Ma(n, function (t, e) {
				o = i.call(r, o, t, e, n)
			}), o
		},
		Qa = x.every ? function (t, e, n) {
			return x.every.call(t, e, n)
		} : function (t, e, n) {
			for (var i = t.length, r = q(t) ? t.split("") : t, o = 0; o < i; o++)
				if (o in r && !e.call(n, r[o], o, t)) return !1;
			return !0
		},
		Ya, ab;

	function Ra(t, e) {
		var n = Sa(t, e, void 0);
		return n < 0 ? null : q(t) ? t.charAt(n) : t[n]
	}

	function Sa(t, e, n) {
		for (var i = t.length, r = q(t) ? t.split("") : t, o = 0; o < i; o++)
			if (o in r && e.call(n, r[o], o, t)) return o;
		return -1
	}

	function Ta(t, e) {
		var n = La(t, e);
		0 <= n && x.splice.call(t, n, 1)
	}

	function Ua(t, e, n) {
		return arguments.length <= 2 ? x.slice.call(t, e) : x.slice.call(t, e, n)
	}

	function Va(t, e) {
		t.sort(e || Wa)
	}

	function Wa(t, e) {
		return e < t ? 1 : t < e ? -1 : 0
	}

	function Xa(t) {
		n.setTimeout(function () {
			throw t
		}, 0)
	}

	function Za() {
		var t = n.MessageChannel;
		if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && -1 == w.indexOf("Presto") && (t = function () {
			(i = document.createElement("iframe")).style.display = "none", i.src = "", document.documentElement.appendChild(i);
			var t = i.contentWindow;
			(i = t.document).open(), i.write(""), i.close();
			var e = "callImmediate" + Math.random(),
				n = "file:" == t.location.protocol ? "*" : t.location.protocol + "//" + t.location.host,
				i = u(function (t) {
					"*" != n && t.origin != n || t.data != e || this.port1.onmessage()
				}, this);
			t.addEventListener("message", i, !1), this.port1 = {}, this.port2 = {
				postMessage: function () {
					t.postMessage(e, n)
				}
			}
		}), void 0 !== t && -1 == w.indexOf("Trident") && -1 == w.indexOf("MSIE")) {
			var e = new t,
				i = {},
				r = i;
			return e.port1.onmessage = function () {
					if (p(i.next)) {
						var t = (i = i.next).hb;
						i.hb = null, t()
					}
				},
				function (t) {
					r.next = {
						hb: t
					}, r = r.next, e.port2.postMessage(0)
				}
		}
		return "undefined" != typeof document && "onreadystatechange" in document.createElement("script") ? function (t) {
			var e = document.createElement("script");
			e.onreadystatechange = function () {
				e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
			}, document.documentElement.appendChild(e)
		} : function (t) {
			n.setTimeout(t, 0)
		}
	}

	function $a(t, e) {
		ab || bb(), m || (ab(), m = !0), db.push(new eb(t, e))
	}

	function bb() {
		if (n.Promise && n.Promise.resolve) {
			var t = n.Promise.resolve();
			ab = function () {
				t.then(fb)
			}
		} else ab = function () {
			var t = fb;
			!r(n.setImmediate) || n.Window && n.Window.prototype && n.Window.prototype.setImmediate == n.setImmediate ? (Ya || (Ya = Za()), Ya(t)) : n.setImmediate(t)
		}
	}
	var m = !1,
		db = [];

	function fb() {
		for (; db.length;) {
			var t = db;
			db = [];
			for (var e = 0; e < t.length; e++) {
				var n = t[e];
				try {
					n.yg.call(n.scope)
				} catch (t) {
					Xa(t)
				}
			}
		}
		m = !1
	}

	function eb(t, e) {
		this.yg = t, this.scope = e
	}[].push(function () {
		m = !1, db = []
	});
	var A = -1 != w.indexOf("Opera") || -1 != w.indexOf("OPR"),
		hb = -1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE"),
		ib = -1 != w.indexOf("Gecko") && -1 == w.toLowerCase().indexOf("webkit") && !(-1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE")),
		jb = -1 != w.toLowerCase().indexOf("webkit"),
		s2, r2;
	r2 = "", A && n.opera ? r(r2 = n.opera.version) && r2() : (ib ? s2 = /rv\:([^\);]+)(\)|;)/ : hb ? s2 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : jb && (s2 = /WebKit\/(\S+)/), s2 && (r2 = (r2 = s2.exec(w)) ? r2[1] : ""), hb && (s2 = (s2 = n.document) ? s2.documentMode : void 0) > parseFloat(r2) && String(s2));
	var I = null,
		lb = null,
		mb = null;

	function nb(t, e) {
		if (!ea(t)) throw Error("encodeByteArray takes an array as a parameter");
		ob();
		for (var n = e ? lb : I, i = [], r = 0; r < t.length; r += 3) {
			var o = t[r],
				a = r + 1 < t.length,
				s = a ? t[r + 1] : 0,
				l = r + 2 < t.length,
				c = o >> 2,
				u = (o = (3 & o) << 4 | s >> 4, s = (15 & s) << 2 | (u = l ? t[r + 2] : 0) >> 6, 63 & u);
			l || (u = 64, a || (s = 64)), i.push(n[c], n[o], n[s], n[u])
		}
		return i.join("")
	}

	function ob() {
		if (!I) {
			I = {}, lb = {}, mb = {};
			for (var t = 0; t < 65; t++) I[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), lb[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t), 62 <= (mb[lb[t]] = t) && (mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t)] = t)
		}
	}

	function pb(t, e) {
		if (this.N = bd, this.Rf = void 0, this.Ba = this.Ha = null, this.yd = this.ye = !1, t == rb) sb(this, tb, e);
		else try {
			var n = this;
			t.call(e, function (t) {
				sb(n, tb, t)
			}, function (t) {
				if (!(t instanceof ub)) try {
					if (t instanceof Error) throw t;
					throw Error("Promise rejected.")
				} catch (t) {}
				sb(n, vb, t)
			})
		} catch (t) {
			sb(this, vb, t)
		}
	}
	var bd = 0,
		tb = 2,
		vb = 3;

	function rb() {}

	function xb(t, e) {
		if (t.N == bd)
			if (t.Ha) {
				var n = t.Ha;
				if (n.Ba) {
					for (var i, r = 0, o = -1, a = 0;
						(i = n.Ba[a]) && !((i = i.o) && (r++, i == t && (o = a), 0 <= o && 1 < r)); a++);
					0 <= o && (n.N == bd && 1 == r ? xb(n, e) : yb(n, r = n.Ba.splice(o, 1)[0], vb, e))
				}
				t.Ha = null
			} else sb(t, vb, e)
	}

	function zb(t, e) {
		t.Ba && t.Ba.length || t.N != tb && t.N != vb || Ab(t), t.Ba || (t.Ba = []), t.Ba.push(e)
	}

	function wb(t, r, o, a) {
		var e = {
			o: null,
			Hf: null,
			Jf: null
		};
		return e.o = new pb(function (n, i) {
			e.Hf = r ? function (t) {
				try {
					var e = r.call(a, t);
					n(e)
				} catch (t) {
					i(t)
				}
			} : n, e.Jf = o ? function (t) {
				try {
					var e = o.call(a, t);
					!p(e) && t instanceof ub ? i(t) : n(e)
				} catch (t) {
					i(t)
				}
			} : i
		}), zb(e.o.Ha = t, e), e.o
	}

	function sb(t, e, n) {
		if (t.N == bd) {
			if (t == n) e = vb, n = new TypeError("Promise cannot resolve to itself");
			else {
				var i;
				if (n) try {
					i = !!n.$goog_Thenable
				} catch (t) {
					i = !1
				} else i = !1;
				if (i) return t.N = 1, void n.then(t.Yf, t.Zf, t);
				if (ga(n)) try {
					var o = n.then;
					if (r(o)) return void Bb(t, n, o)
				} catch (t) {
					e = vb, n = t
				}
			}
			t.Rf = n, t.N = e, t.Ha = null, Ab(t), e != vb || n instanceof ub || Cb(t, n)
		}
	}

	function Bb(e, t, n) {
		function i(t) {
			r || (r = !0, e.Zf(t))
		}
		var r = !(e.N = 1);
		try {
			n.call(t, function (t) {
				r || (r = !0, e.Yf(t))
			}, i)
		} catch (t) {
			i(t)
		}
	}

	function Ab(t) {
		t.ye || (t.ye = !0, $a(t.wg, t))
	}

	function yb(t, e, n, i) {
		if (n == tb) e.Hf(i);
		else {
			if (e.o)
				for (; t && t.yd; t = t.Ha) t.yd = !1;
			e.Jf(i)
		}
	}

	function Cb(t, e) {
		t.yd = !0, $a(function () {
			t.yd && bg.call(null, e)
		})
	}
	pb.prototype.then = function (t, e, n) {
		return wb(this, r(t) ? t : null, r(e) ? e : null, n)
	}, pb.prototype.then = pb.prototype.then, pb.prototype.$goog_Thenable = !0, h = pb.prototype, h.gh = function (t, e) {
		return wb(this, null, t, e)
	}, h.cancel = function (t) {
		this.N == bd && $a(function () {
			xb(this, new ub(t))
		}, this)
	}, h.Yf = function (t) {
		this.N = bd, sb(this, tb, t)
	}, h.Zf = function (t) {
		this.N = bd, sb(this, vb, t)
	}, h.wg = function () {
		for (; this.Ba && this.Ba.length;) {
			var t = this.Ba;
			this.Ba = null;
			for (var e = 0; e < t.length; e++) yb(this, t[e], this.N, this.Rf)
		}
		this.ye = !1
	};
	var bg = Xa;

	function ub(t) {
		la.call(this, t)
	}
	ka(ub, la), ub.prototype.name = "cancel";
	var bk = bk || "2.4.2";

	function y(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}

	function z(t, e) {
		if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
	}

	function Fb(t, e) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
	}

	function Gb(t) {
		var n = {};
		return Fb(t, function (t, e) {
			n[t] = e
		}), n
	}

	function Hb(t) {
		return "object" == typeof t && null !== t
	}

	function Ib(t) {
		var n = [];
		return Fb(t, function (e, t) {
			da(t) ? Ma(t, function (t) {
				n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
			}) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
		}), n.length ? "&" + n.join("&") : ""
	}

	function Jb(t) {
		var e = {};
		return t = t.replace(/^\?/, "").split("&"), Ma(t, function (t) {
			t && (t = t.split("="), e[t[0]] = t[1])
		}), e
	}

	function Kb(t, e) {
		if (!t) throw Lb(e)
	}

	function Lb(t) {
		return Error("Firebase (" + bk + ") INTERNAL ASSERT FAILED: " + t)
	}
	var bl = n.Promise || pb;

	function B() {
		var n = this;
		this.reject = this.resolve = null, this.D = new bl(function (t, e) {
			n.resolve = t, n.reject = e
		})
	}

	function C(n, i) {
		return function (t, e) {
			t ? n.reject(t) : n.resolve(e), r(i) && (Nb(n.D), 1 === i.length ? i(t) : i(t, e))
		}
	}

	function Nb(t) {
		t.then(void 0, aa)
	}

	function Ob(t) {
		for (var e = [], n = 0, i = 0; i < t.length; i++) {
			var r = t.charCodeAt(i);
			55296 <= r && r <= 56319 && (r -= 55296, Kb(++i < t.length, "Surrogate pair missing trail surrogate."), r = 65536 + (r << 10) + (t.charCodeAt(i) - 56320)), r < 128 ? e[n++] = r : (r < 2048 ? e[n++] = r >> 6 | 192 : (r < 65536 ? e[n++] = r >> 12 | 224 : (e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128), e[n++] = r >> 6 & 63 | 128), e[n++] = 63 & r | 128)
		}
		return e
	}

	function Pb(t) {
		for (var e = 0, n = 0; n < t.length; n++) {
			var i = t.charCodeAt(n);
			i < 128 ? e++ : i < 2048 ? e += 2 : 55296 <= i && i <= 56319 ? (e += 4, n++) : e += 3
		}
		return e
	}

	function D(t, e, n, i) {
		var r;
		if (i < e ? r = "at least " + e : n < i && (r = 0 === n ? "none" : "no more than " + n), r) throw Error(t + " failed: Was called with " + i + (1 === i ? " argument." : " arguments.") + " Expects " + r + ".")
	}

	function E(t, e, n) {
		var i = "";
		switch (e) {
		case 1:
			i = n ? "first" : "First";
			break;
		case 2:
			i = n ? "second" : "Second";
			break;
		case 3:
			i = n ? "third" : "Third";
			break;
		case 4:
			i = n ? "fourth" : "Fourth";
			break;
		default:
			throw Error("errorPrefix called with argumentNumber > 4. Need to update it?")
		}
		return t + " failed: " + i + " argument "
	}

	function F(t, e, n, i) {
		if ((!i || p(n)) && !r(n)) throw Error(E(t, e, i) + "must be a valid function.")
	}

	function Qb(t, e, n) {
		if (p(n) && (!ga(n) || null === n)) throw Error(E(t, e, !0) + "must be a valid context object.")
	}

	function Rb(t) {
		return "undefined" != typeof JSON && p(JSON.parse) ? JSON.parse(t) : za(t)
	}

	function G(t) {
		if ("undefined" != typeof JSON && p(JSON.stringify)) t = JSON.stringify(t);
		else {
			var e = [];
			Ba(new Aa, t, e), t = e.join("")
		}
		return t
	}

	function Sb() {
		this.Zd = H
	}

	function Tb() {}
	pb.prototype.catch = pb.prototype.gh, Sb.prototype.j = function (t) {
		return this.Zd.S(t)
	}, Sb.prototype.toString = function () {
		return this.Zd.toString()
	}, Tb.prototype.uf = function () {
		return null
	}, Tb.prototype.Ce = function () {
		return null
	};
	var bm = new Tb;

	function Vb(t, e, n) {
		this.bg = t, this.Oa = e, this.Nd = n
	}

	function Zb() {
		this.xb = []
	}

	function $b(t, e) {
		for (var n = null, i = 0; i < e.length; i++) {
			var r = e[i],
				o = r.cc();
			null === n || o.ea(n.cc()) || (t.xb.push(n), n = null), null === n && (n = new ac(o)), n.add(r)
		}
		n && t.xb.push(n)
	}

	function bc(t, e, n) {
		$b(t, n), cc(t, function (t) {
			return t.ea(e)
		})
	}

	function dc(t, e, n) {
		$b(t, n), cc(t, function (t) {
			return t.contains(e) || e.contains(t)
		})
	}

	function cc(t, e) {
		for (var n = !0, i = 0; i < t.xb.length; i++) {
			if (r = t.xb[i])
				if (e(r = r.cc())) {
					for (var r = t.xb[i], o = 0; o < r.xd.length; o++) {
						var a = r.xd[o];
						if (null !== a) {
							r.xd[o] = null;
							var s = a.Zb();
							bs && fc("event: " + a.toString()), gc(s)
						}
					}
					t.xb[i] = null
				} else n = !1
		}
		n && (t.xb = [])
	}

	function ac(t) {
		this.ta = t, this.xd = []
	}

	function J(t, e, n, i) {
		this.type = t, this.Na = e, this.Za = n, this.Oe = i, this.Td = void 0
	}

	function hc(t) {
		return new J(bn, t)
	}
	Vb.prototype.uf = function (t) {
		var e = this.Oa.Q;
		return Wb(e, t) ? e.j().T(t) : (e = null != this.Nd ? new Xb(this.Nd, !0, !1) : this.Oa.w(), this.bg.Bc(t, e))
	}, Vb.prototype.Ce = function (t, e, n) {
		var i = null != this.Nd ? this.Nd : Yb(this.Oa);
		return 0 === (t = this.bg.qe(i, e, 1, n, t)).length ? null : t[0]
	}, ac.prototype.add = function (t) {
		this.xd.push(t)
	}, ac.prototype.cc = function () {
		return this.ta
	};
	var bn = "value";

	function jc(t, e, n, i) {
		this.xe = e, this.be = n, this.Td = i, this.wd = t
	}

	function kc(t, e, n) {
		this.xe = t, this.error = e, this.path = n
	}

	function Xb(t, e, n) {
		this.A = t, this.ga = e, this.Yb = n
	}

	function lc(t) {
		return t.ga
	}

	function mc(t) {
		return t.Yb
	}

	function nc(t, e) {
		return e.e() ? t.ga && !t.Yb : Wb(t, K(e))
	}

	function Wb(t, e) {
		return t.ga && !t.Yb || t.A.Fa(e)
	}

	function oc(t) {
		this.pg = t, this.Gd = null
	}

	function pc(t, e) {
		this.Vf = {}, this.hd = new oc(t), this.da = e;
		var n = 1e4 + 2e4 * Math.random();
		setTimeout(u(this.Of, this), Math.floor(n))
	}

	function qc() {
		this.Hc = {}
	}

	function rc(t, e, n) {
		p(n) || (n = 1), y(t.Hc, e) || (t.Hc[e] = 0), t.Hc[e] += n
	}
	jc.prototype.cc = function () {
		var t = this.be.Mb();
		return "value" === this.wd ? t.path : t.parent().path
	}, jc.prototype.De = function () {
		return this.wd
	}, jc.prototype.Zb = function () {
		return this.xe.Zb(this)
	}, jc.prototype.toString = function () {
		return this.cc().toString() + ":" + this.wd + ":" + G(this.be.qf())
	}, kc.prototype.cc = function () {
		return this.path
	}, kc.prototype.De = function () {
		return "cancel"
	}, kc.prototype.Zb = function () {
		return this.xe.Zb(this)
	}, kc.prototype.toString = function () {
		return this.path.toString() + ":cancel"
	}, Xb.prototype.j = function () {
		return this.A
	}, oc.prototype.get = function () {
		var t = this.pg.get(),
			e = wa(t);
		if (this.Gd)
			for (var n in this.Gd) e[n] -= this.Gd[n];
		return this.Gd = t, e
	}, pc.prototype.Of = function () {
		var t, e = this.hd.get(),
			n = {},
			i = !1;
		for (t in e) 0 < e[t] && y(this.Vf, t) && (n[t] = e[t], i = !0);
		i && this.da.Ye(n), setTimeout(u(this.Of, this), Math.floor(6e5 * Math.random()))
	}, qc.prototype.get = function () {
		return wa(this.Hc)
	};
	var bo = {},
		tc = {};

	function uc(t) {
		return t = t.toString(), bo[t] || (bo[t] = new qc), bo[t]
	}

	function vc(t, e) {
		var n = t.toString();
		return tc[n] || (tc[n] = e()), tc[n]
	}

	function L(t, e) {
		this.name = t, this.U = e
	}

	function wc(t, e) {
		return new L(t, e)
	}

	function xc(t, e) {
		return yc(t.name, e.name)
	}

	function zc(t, e) {
		return yc(t, e)
	}

	function Ac(t, e, n) {
		this.type = bG, this.source = t, this.path = e, this.Ja = n
	}

	function Cc(t, e) {
		this.type = Dc, this.source = t, this.path = e
	}

	function Ec(t, e) {
		this.Pa = t, this.xa = e || bp
	}

	function Gc(t, e) {
		for (var n, i = t.xa, r = null; !i.e();) {
			if (0 === (n = t.Pa(e, i.key))) {
				if (i.left.e()) return r ? r.key : null;
				for (i = i.left; !i.right.e();) i = i.right;
				return i.key
			}
			n < 0 ? i = i.left : 0 < n && (i = (r = i).right)
		}
		throw Error("Attempted to find predecessor key for a nonexistent key. What gives?")
	}

	function Hc(t, e, n, i, r) {
		for (this.Xd = r || null, this.Je = i, this.Ta = [], r = 1; !t.e();)
			if (r = e ? n(t.key, e) : 1, i && (r *= -1), r < 0) t = this.Je ? t.left : t.right;
			else {
				if (0 === r) {
					this.Ta.push(t);
					break
				}
				this.Ta.push(t), t = this.Je ? t.right : t.left
			}
	}

	function Ic(t) {
		if (0 === t.Ta.length) return null;
		var e, n = t.Ta.pop();
		if (e = t.Xd ? t.Xd(n.key, n.value) : {
			key: n.key,
			value: n.value
		}, t.Je)
			for (n = n.left; !n.e();) t.Ta.push(n), n = n.right;
		else
			for (n = n.right; !n.e();) t.Ta.push(n), n = n.left;
		return e
	}

	function Jc(t) {
		return 0 === t.Ta.length ? null : (e = (e = t.Ta)[e.length - 1], t.Xd ? t.Xd(e.key, e.value) : {
			key: e.key,
			value: e.value
		});
		var e
	}

	function Kc(t, e, n, i, r) {
		this.key = t, this.value = e, this.color = null == n || n, this.left = null != i ? i : bp, this.right = null != r ? r : bp
	}

	function Lc(t) {
		return t.left.e() ? t : Lc(t.left)
	}

	function Nc(t) {
		return t.left.e() ? bp : (t.left.ha() || t.left.left.ha() || (t = Oc(t)), Mc(t = t.$(null, null, null, Nc(t.left), null)))
	}

	function Mc(t) {
		return t.right.ha() && !t.left.ha() && (t = Rc(t)), t.left.ha() && t.left.left.ha() && (t = Pc(t)), t.left.ha() && t.right.ha() && (t = Qc(t)), t
	}

	function Oc(t) {
		return (t = Qc(t)).right.left.ha() && (t = Qc(t = Rc(t = t.$(null, null, null, null, Pc(t.right))))), t
	}

	function Rc(t) {
		return t.right.$(null, null, t.color, t.$(null, null, !0, null, t.right.left), null)
	}

	function Pc(t) {
		return t.left.$(null, null, t.color, null, t.$(null, null, !0, t.left.right, null))
	}

	function Qc(t) {
		return t.$(null, null, !t.color, t.left.$(null, null, !t.left.color, null, null), t.right.$(null, null, !t.right.color, null, null))
	}

	function Sc() {}
	Ac.prototype.$c = function (t) {
		return this.path.e() ? new Ac(this.source, M, this.Ja.T(t)) : new Ac(this.source, N(this.path), this.Ja)
	}, Ac.prototype.toString = function () {
		return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ja.toString() + ")"
	}, Cc.prototype.$c = function () {
		return this.path.e() ? new Cc(this.source, M) : new Cc(this.source, N(this.path))
	}, Cc.prototype.toString = function () {
		return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
	}, h = Ec.prototype, h.Sa = function (t, e) {
		return new Ec(this.Pa, this.xa.Sa(t, e, this.Pa).$(null, null, !1, null, null))
	}, h.remove = function (t) {
		return new Ec(this.Pa, this.xa.remove(t, this.Pa).$(null, null, !1, null, null))
	}, h.get = function (t) {
		for (var e, n = this.xa; !n.e();) {
			if (0 === (e = this.Pa(t, n.key))) return n.value;
			e < 0 ? n = n.left : 0 < e && (n = n.right)
		}
		return null
	}, h.e = function () {
		return this.xa.e()
	}, h.count = function () {
		return this.xa.count()
	}, h.Vc = function () {
		return this.xa.Vc()
	}, h.jc = function () {
		return this.xa.jc()
	}, h.ka = function (t) {
		return this.xa.ka(t)
	}, h.ac = function (t) {
		return new Hc(this.xa, null, this.Pa, !1, t)
	}, h.bc = function (t, e) {
		return new Hc(this.xa, t, this.Pa, !1, e)
	}, h.dc = function (t, e) {
		return new Hc(this.xa, t, this.Pa, !0, e)
	}, h.xf = function (t) {
		return new Hc(this.xa, null, this.Pa, !0, t)
	}, h = Kc.prototype, h.$ = function (t, e, n, i, r) {
		return new Kc(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != i ? i : this.left, null != r ? r : this.right)
	}, h.count = function () {
		return this.left.count() + 1 + this.right.count()
	}, h.e = function () {
		return !1
	}, h.ka = function (t) {
		return this.left.ka(t) || t(this.key, this.value) || this.right.ka(t)
	}, h.Vc = function () {
		return Lc(this).key
	}, h.jc = function () {
		return this.right.e() ? this.key : this.right.jc()
	}, h.Sa = function (t, e, n) {
		var i, r;
		return Mc(r = (i = n(t, (r = this).key)) < 0 ? r.$(null, null, null, r.left.Sa(t, e, n), null) : 0 === i ? r.$(null, e, null, null, null) : r.$(null, null, null, null, r.right.Sa(t, e, n)))
	}, h.remove = function (t, e) {
		var n, i;
		if (e(t, (n = this).key) < 0) n.left.e() || n.left.ha() || n.left.left.ha() || (n = Oc(n)), n = n.$(null, null, null, n.left.remove(t, e), null);
		else {
			if (n.left.ha() && (n = Pc(n)), n.right.e() || n.right.ha() || n.right.left.ha() || (n = Qc(n)).left.left.ha() && (n = Qc(n = Pc(n))), 0 === e(t, n.key)) {
				if (n.right.e()) return bp;
				i = Lc(n.right), n = n.$(i.key, i.value, null, null, Nc(n.right))
			}
			n = n.$(null, null, null, null, n.right.remove(t, e))
		}
		return Mc(n)
	}, h.ha = function () {
		return this.color
	}, h = Sc.prototype, h.$ = function () {
		return this
	}, h.Sa = function (t, e) {
		return new Kc(t, e, null)
	}, h.remove = function () {
		return this
	}, h.count = function () {
		return 0
	}, h.e = function () {
		return !0
	}, h.ka = function () {
		return !1
	}, h.Vc = function () {
		return null
	}, h.jc = function () {
		return null
	}, h.ha = function () {
		return !1
	};
	var bp = new Sc;

	function Tc(t, e) {
		return t && "object" == typeof t ? (O(".sv" in t, "Unexpected leaf node or priority contents"), e[t[".sv"]]) : t
	}

	function Uc(t, n) {
		var i = new Vc;
		return Wc(t, new P(""), function (t, e) {
			i.rc(t, Xc(e, n))
		}), i
	}

	function Xc(t, i) {
		var r, e = Tc(e = t.C().J(), i);
		if (t.L()) {
			var n = Tc(t.Ea(), i);
			return n !== t.Ea() || e !== t.C().J() ? new Yc(n, Q(e)) : t
		}
		return e !== (r = t).C().J() && (r = r.ia(new Yc(e))), t.R(R, function (t, e) {
			var n = Xc(e, i);
			n !== e && (r = r.W(t, n))
		}), r
	}

	function Zc() {
		this.Ac = {}
	}

	function $c(t) {
		this.Ic = t, this.Sd = "firebase:"
	}

	function ad(t) {
		try {
			if ("undefined" != typeof window && void 0 !== window[t]) {
				var e = window[t];
				return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new $c(e)
			}
		} catch (t) {}
		return new Zc
	}
	Zc.prototype.set = function (t, e) {
		null == e ? delete this.Ac[t] : this.Ac[t] = e
	}, Zc.prototype.get = function (t) {
		return y(this.Ac, t) ? this.Ac[t] : null
	}, Zc.prototype.remove = function (t) {
		delete this.Ac[t]
	}, Zc.prototype.Af = !0, h = $c.prototype, h.set = function (t, e) {
		null == e ? this.Ic.removeItem(this.Sd + t) : this.Ic.setItem(this.Sd + t, G(e))
	}, h.get = function (t) {
		return null == (t = this.Ic.getItem(this.Sd + t)) ? null : Rb(t)
	}, h.remove = function (t) {
		this.Ic.removeItem(this.Sd + t)
	}, h.Af = !1, h.toString = function () {
		return this.Ic.toString()
	};
	var bq = ad("localStorage"),
		cd = ad("sessionStorage");

	function dd(t, e, n, i, r) {
		this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.ob = e, this.lc = n, this.jh = i, this.Rd = r || "", this.ab = bq.get("host:" + t) || this.host
	}

	function ed(t, e) {
		e !== t.ab && (t.ab = e, "s-" === t.ab.substr(0, 2) && bq.set("host:" + t.host, t.ab))
	}

	function fd(t, e, n) {
		if (O("string" == typeof e, "typeof type must==string"), O("object" == typeof n, "typeof params must==object"), e === bN) e = (t.ob ? "wss://" : "ws://") + t.ab + "/.ws?";
		else {
			if (e !== hd) throw Error("Unknown connection type: " + e);
			e = (t.ob ? "https://" : "http://") + t.ab + "/.lp?"
		}
		t.host !== t.ab && (n.ns = t.lc);
		var i = [];
		return v(n, function (t, e) {
			i.push(e + "=" + t)
		}), e + i.join("&")
	}
	dd.prototype.toString = function () {
		var t = (this.ob ? "https://" : "http://") + this.host;
		return this.Rd && (t += "<" + this.Rd + ">"), t
	};
	var br = (s8 = 1, function () {
			return s8++
		}),
		O = Kb,
		jd = Lb,
		s8;

	function kd(t) {
		try {
			var e;
			if ("undefined" != typeof atob) e = atob(t);
			else {
				ob();
				for (var n = mb, i = [], r = 0; r < t.length;) {
					var o = n[t.charAt(r++)],
						a = r < t.length ? n[t.charAt(r)] : 0,
						s = ++r < t.length ? n[t.charAt(r)] : 64,
						l = ++r < t.length ? n[t.charAt(r)] : 64;
					if (++r, null == o || null == a || null == s || null == l) throw Error();
					i.push(o << 2 | a >> 4), 64 != s && (i.push(a << 4 & 240 | s >> 2), 64 != l && i.push(s << 6 & 192 | l))
				}
				if (i.length < 8192) e = String.fromCharCode.apply(null, i);
				else {
					for (t = "", n = 0; n < i.length; n += 8192) t += String.fromCharCode.apply(null, Ua(i, n, n + 8192));
					e = t
				}
			}
			return e
		} catch (t) {
			fc("base64Decode failed: ", t)
		}
		return null
	}

	function ld(t) {
		var e = Ob(t);
		(t = new Ja).update(e);
		e = [];
		var n = 8 * t.ge;
		t.ec < 56 ? t.update(t.Od, 56 - t.ec) : t.update(t.Od, t.Ya - (t.ec - 56));
		for (var i = t.Ya - 1; 56 <= i; i--) t.pe[i] = 255 & n, n /= 256;
		for (Ka(t, t.pe), i = n = 0; i < 5; i++)
			for (var r = 24; 0 <= r; r -= 8) e[n] = t.P[i] >> r & 255, ++n;
		return nb(e)
	}

	function md(t) {
		for (var e = "", n = 0; n < arguments.length; n++) e = ea(arguments[n]) ? e + md.apply(null, arguments[n]) : "object" == typeof arguments[n] ? e + G(arguments[n]) : e + arguments[n], e += " ";
		return e
	}
	var bs = null,
		nd = !0;

	function od(t, e) {
		Kb(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? ("undefined" != typeof console && ("function" == typeof console.log ? bs = u(console.log, console) : "object" == typeof console.log && (bs = function (t) {
			console.log(t)
		})), e && cd.set("logging_enabled", !0)) : r(t) ? bs = t : (bs = null, cd.remove("logging_enabled"))
	}

	function fc(t) {
		if (!0 === nd && (nd = !1, null === bs && !0 === cd.get("logging_enabled") && od(!0)), bs) {
			var e = md.apply(null, arguments);
			bs(e)
		}
	}

	function pd(t) {
		return function () {
			fc(t, arguments)
		}
	}

	function qd(t) {
		if ("undefined" != typeof console) {
			var e = "FIREBASE INTERNAL ERROR: " + md.apply(null, arguments);
			void 0 !== console.error ? console.error(e) : console.log(e)
		}
	}

	function rd(t) {
		var e = md.apply(null, arguments);
		throw Error("FIREBASE FATAL ERROR: " + e)
	}

	function S(t) {
		if ("undefined" != typeof console) {
			var e = "FIREBASE WARNING: " + md.apply(null, arguments);
			void 0 !== console.warn ? console.warn(e) : console.log(e)
		}
	}

	function sd(t) {
		var e = "",
			n = "",
			i = "",
			r = "",
			o = !0,
			a = "https",
			s = 443;
		if (q(t)) {
			var l = t.indexOf("//");
			for (0 <= l && (a = t.substring(0, l - 1), t = t.substring(l + 2)), -1 === (l = t.indexOf("/")) && (l = t.length), e = t.substring(0, l), r = "", t = t.substring(l).split("/"), l = 0; l < t.length; l++)
				if (0 < t[l].length) {
					var c = t[l];
					try {
						c = decodeURIComponent(c.replace(/\+/g, " "))
					} catch (t) {}
					r += "/" + c
				}
			3 === (t = e.split(".")).length ? (n = t[1], i = t[0].toLowerCase()) : 2 === t.length && (n = t[0]), 0 <= (l = e.indexOf(":")) && (o = "https" === a || "wss" === a, s = e.substring(l + 1), isFinite(s) && (s = String(s)), s = q(s) ? /^\s*-?0x/i.test(s) ? parseInt(s, 16) : parseInt(s, 10) : NaN)
		}
		return {
			host: e,
			port: s,
			domain: n,
			fh: i,
			ob: o,
			scheme: a,
			bd: r
		}
	}

	function td(t) {
		return fa(t) && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY)
	}

	function ud(t) {
		if ("complete" === document.readyState) t();
		else {
			var e = !1,
				n = function () {
					document.body ? e || (e = !0, t()) : setTimeout(n, Math.floor(10))
				};
			document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
				"complete" === document.readyState && n()
			}), window.attachEvent("onload", n))
		}
	}

	function yc(t, e) {
		if (t === e) return 0;
		if ("[MIN_NAME]" === t || "[MAX_NAME]" === e) return -1;
		if ("[MIN_NAME]" === e || "[MAX_NAME]" === t) return 1;
		var n = vd(t),
			i = vd(e);
		return null !== n ? null !== i ? 0 == n - i ? t.length - e.length : n - i : -1 : null !== i ? 1 : t < e ? -1 : 1
	}

	function wd(t, e) {
		if (e && t in e) return e[t];
		throw Error("Missing required key (" + t + ") in object: " + G(e))
	}

	function xd(t) {
		if ("object" != typeof t || null === t) return G(t);
		var e, n = [];
		for (e in t) n.push(e);
		n.sort(), e = "{";
		for (var i = 0; i < n.length; i++) 0 !== i && (e += ","), e += G(n[i]), e += ":", e += xd(t[n[i]]);
		return e + "}"
	}

	function yd(t, e) {
		if (t.length <= e) return [t];
		for (var n = [], i = 0; i < t.length; i += e) t < i + e ? n.push(t.substring(i, t.length)) : n.push(t.substring(i, i + e));
		return n
	}

	function zd(t, e) {
		if (da(t))
			for (var n = 0; n < t.length; ++n) e(n, t[n]);
		else v(t, e)
	}

	function Ad(t) {
		var e, n, i, r;
		for (O(!td(t), "Invalid JSON number"), 0 === t ? (i = n = 0, e = -1 / 0 == 1 / t ? 1 : 0) : (e = t < 0, (t = Math.abs(t)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023, i = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, i = Math.round(t / Math.pow(2, -1074)))), r = [], t = 52; t; --t) r.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
		for (t = 11; t; --t) r.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
		for (r.push(e ? 1 : 0), r.reverse(), e = r.join(""), n = "", t = 0; t < 64; t += 8) 1 === (i = parseInt(e.substr(t, 8), 2).toString(16)).length && (i = "0" + i), n += i;
		return n.toLowerCase()
	}
	var bt = /^-?\d{1,10}$/;

	function vd(t) {
		return bt.test(t) && (-2147483648 <= (t = Number(t)) && t <= 2147483647) ? t : null
	}

	function gc(t) {
		try {
			t()
		} catch (t) {
			setTimeout(function () {
				throw S("Exception was thrown by user callback.", t.stack || ""), t
			}, Math.floor(0))
		}
	}

	function T(t, e) {
		if (r(t)) {
			var n = Array.prototype.slice.call(arguments, 1).slice();
			gc(function () {
				t.apply(null, n)
			})
		}
	}

	function Cd(t) {
		var e = {},
			n = {},
			i = {},
			r = "";
		try {
			var o = t.split(".");
			e = Rb(kd(o[0]) || ""), n = Rb(kd(o[1]) || ""), r = o[2], i = n.d || {};
			delete n.d
		} catch (t) {}
		return {
			mh: e,
			Ec: n,
			data: i,
			bh: r
		}
	}

	function Dd(t) {
		return "object" == typeof (t = Cd(t).Ec) && t.hasOwnProperty("iat") ? z(t, "iat") : null
	}

	function Ed(t) {
		var e = (t = Cd(t)).Ec;
		return !!t.bh && !!e && "object" == typeof e && e.hasOwnProperty("iat")
	}

	function Fd(t) {
		this.Y = t, this.g = t.n.g
	}

	function Gd(e, t, n, i) {
		var r = [],
			o = [];
		return Ma(t, function (t) {
			"child_changed" === t.type && e.g.Dd(t.Oe, t.Na) && o.push(new J("child_moved", t.Na, t.Za))
		}), Hd(e, r, "child_removed", t, i, n), Hd(e, r, "child_added", t, i, n), Hd(e, r, "child_moved", o, i, n), Hd(e, r, "child_changed", t, i, n), Hd(e, r, bn, t, i, n), r
	}

	function Hd(i, r, e, t, o, a) {
		Va(t = Na(t, function (t) {
			return t.type === e
		}), u(i.qg, i)), Ma(t, function (e) {
			var n = Id(i, e, a);
			Ma(o, function (t) {
				t.Qf(e.type) && r.push(t.createEvent(n, i.Y))
			})
		})
	}

	function Id(t, e, n) {
		return "value" !== e.type && "child_removed" !== e.type && (e.Td = n.wf(e.Za, e.Na, t.g)), e
	}

	function Jd() {
		this.ib = {}
	}

	function Kd(t, e) {
		var n = e.type,
			i = e.Za;
		O("child_added" == n || "child_changed" == n || "child_removed" == n, "Only child changes supported for tracking"), O(".priority" !== i, "Only non-priority child changes can be tracked.");
		var r = z(t.ib, i);
		if (r) {
			var o = r.type;
			if ("child_added" == n && "child_removed" == o) t.ib[i] = new J("child_changed", e.Na, i, r.Na);
			else if ("child_removed" == n && "child_added" == o) delete t.ib[i];
			else if ("child_removed" == n && "child_changed" == o) t.ib[i] = new J("child_removed", r.Oe, i);
			else if ("child_changed" == n && "child_added" == o) t.ib[i] = new J("child_added", e.Na, i);
			else {
				if ("child_changed" != n || "child_changed" != o) throw jd("Illegal combination of changes: " + e + " occurred after " + r);
				t.ib[i] = new J("child_changed", e.Na, i, r.Oe)
			}
		} else t.ib[i] = e
	}

	function Ld(t) {
		this.g = t
	}

	function Md(t) {
		var e;
		this.Fe = new Ld(t.g), this.g = t.g, t.oa ? (e = Nd(t), e = t.g.Sc(Od(t), e)) : e = t.g.Wc(), this.gd = e, t.ra ? (e = Pd(t), t = t.g.Sc(Rd(t), e)) : t = t.g.Tc(), this.Jc = t
	}

	function Sd(t) {
		this.ua = new Md(t), this.g = t.g, O(t.la, "Only valid if limit has been set"), this.ma = t.ma, this.Nb = !Td(t)
	}

	function Ud(t, e, n, i, r, o) {
		var a;
		if (t.Nb) {
			var s = Vd(t.g);
			a = function (t, e) {
				return s(e, t)
			}
		} else a = Vd(t.g);
		O(e.Hb() == t.ma, "");
		var l = new L(n, i),
			c = t.Nb ? Wd(e, t.g) : Xd(e, t.g),
			u = t.ua.matches(l);
		if (e.Fa(n)) {
			var h = e.T(n);
			for (c = r.Ce(t.g, c, t.Nb); null != c && (c.name == n || e.Fa(c.name));) c = r.Ce(t.g, c, t.Nb);
			return r = null == c ? 1 : a(c, l), u && !i.e() && 0 <= r ? (null != o && Kd(o, new J("child_changed", i, n, h)), e.W(n, i)) : (null != o && Kd(o, new J("child_removed", h, n)), e = e.W(n, H), null != c && t.ua.matches(c) ? (null != o && Kd(o, new J("child_added", c.U, c.name)), e.W(c.name, c.U)) : e)
		}
		return i.e() ? e : u && 0 <= a(c, l) ? (null != o && (Kd(o, new J("child_removed", c.U, c.name)), Kd(o, new J("child_added", i, n))), e.W(n, i).W(c.name, H)) : e
	}

	function Yd(t, e) {
		this.me = t, this.og = e
	}

	function Zd(t) {
		this.X = t
	}

	function ie(t, e, n, i, r, o) {
		var a, s = e.Q;
		if (null != i.xc(n)) return e;
		if (n.e()) O(lc(e.w()), "If change path is empty, we must have complete server data"), mc(e.w()) ? (r = Yb(e), i = i.Cc(r instanceof fe ? r : H)) : i = i.Aa(Yb(e)), o = t.X.ya(e.Q.j(), i, o);
		else {
			var l = K(n);
			if (".priority" == l) O(1 == le(n), "Can't have a priority with additional path components"), o = s.j(), a = e.w().j(), o = null != (i = i.nd(n, o, a)) ? t.X.ia(o, i) : s.j();
			else {
				var c = N(n);
				Wb(s, l) ? (a = e.w().j(), i = null != (i = i.nd(n, s.j(), a)) ? s.j().T(l).H(c, i) : s.j().T(l)) : i = i.Bc(l, e.w()), o = null != i ? t.X.H(s.j(), l, i, c, r, o) : s.j()
			}
		}
		return ge(e, o, s.ga || n.e(), t.X.Ra())
	}

	function ae(t, e, n, i, r, o, a, s) {
		var l = e.w();
		if (a = a ? t.X : t.X.$b(), n.e()) i = a.ya(l.j(), i, null);
		else if (a.Ra() && !l.Yb) i = l.j().H(n, i), i = a.ya(l.j(), i, null);
		else {
			var c = K(n);
			if (!nc(l, n) && 1 < le(n)) return e;
			var u = N(n);
			i = l.j().T(c).H(u, i), i = ".priority" == c ? a.ia(l.j(), i) : a.H(l.j(), c, i, u, bm, null)
		}
		return l = l.ga || n.e(), ie(t, e = new je(e.Q, new Xb(i, l, a.Ra())), n, r, new Vb(r, e, o), s)
	}

	function $d(t, e, n, i, r, o, a) {
		var s = e.Q;
		if (r = new Vb(r, e, o), n.e()) t = ge(e, a = t.X.ya(e.Q.j(), i, a), !0, t.X.Ra());
		else if (".priority" === (o = K(n))) t = ge(e, a = t.X.ia(e.Q.j(), i), s.ga, s.Yb);
		else {
			n = N(n);
			var l = s.j().T(o);
			if (!n.e()) {
				var c = r.uf(o);
				i = null != c ? ".priority" === me(n) && c.S(n.parent()).e() ? c : c.H(n, i) : H
			}
			l.ea(i) ? t = e : t = ge(e, a = t.X.H(s.j(), o, i, n, r, a), s.ga, t.X.Ra())
		}
		return t
	}

	function ce(i, r, o, t, a, s, l) {
		var c = r;
		return ne(t, function (t, e) {
			var n = o.o(t);
			Wb(r.Q, K(n)) && (c = $d(i, c, n, e, a, s, l))
		}), ne(t, function (t, e) {
			var n = o.o(t);
			Wb(r.Q, K(n)) || (c = $d(i, c, n, e, a, s, l))
		}), c
	}

	function oe(n, t) {
		return ne(t, function (t, e) {
			n = n.H(t, e)
		}), n
	}

	function de(i, r, t, e, o, a, s, l) {
		if (r.w().j().e() && !lc(r.w())) return r;
		var c = r;
		t = t.e() ? e : pe(bF, t, e);
		var u = r.w().j();
		return t.children.ka(function (t, e) {
			if (u.Fa(t)) {
				var n = oe(n = r.w().j().T(t), e);
				c = ae(i, c, new P(t), n, o, a, s, l)
			}
		}), t.children.ka(function (t, e) {
			var n = !Wb(r.w(), t) && null == e.value;
			u.Fa(t) || n || (n = oe(n = r.w().j().T(t), e), c = ae(i, c, new P(t), n, o, a, s, l))
		}), c
	}

	function he(t, e, n, i, r, o, a) {
		if (null != r.xc(n)) return e;
		var s = mc(e.w()),
			l = e.w();
		if (null != i.value) {
			if (n.e() && l.ga || nc(l, n)) return ae(t, e, n, l.j().S(n), r, o, s, a);
			if (n.e()) {
				var c = bF;
				return l.j().R(bv, function (t, e) {
					c = c.set(new P(t), e)
				}), de(t, e, n, c, r, o, s, a)
			}
			return e
		}
		return c = bF, ne(i, function (t) {
			var e = n.o(t);
			nc(l, e) && (c = c.set(t, l.j().S(e)))
		}), de(t, e, n, c, r, o, s, a)
	}

	function se() {}
	Fd.prototype.qg = function (t, e) {
		if (null == t.Za || null == e.Za) throw jd("Should only compare child_ events.");
		return this.g.compare(new L(t.Za, t.Na), new L(e.Za, e.Na))
	}, h = Ld.prototype, h.H = function (t, e, n, i, r, o) {
		return O(t.Mc(this.g), "A node must be indexed if only a child is updated"), (r = t.T(e)).S(i).ea(n.S(i)) && r.e() == n.e() ? t : (null != o && (n.e() ? t.Fa(e) ? Kd(o, new J("child_removed", r, e)) : O(t.L(), "A child remove without an old child only makes sense on a leaf node") : r.e() ? Kd(o, new J("child_added", n, e)) : Kd(o, new J("child_changed", n, e, r))), t.L() && n.e() ? t : t.W(e, n).pb(this.g))
	}, h.ya = function (i, n, r) {
		return null != r && (i.L() || i.R(R, function (t, e) {
			n.Fa(t) || Kd(r, new J("child_removed", e, t))
		}), n.L() || n.R(R, function (t, e) {
			if (i.Fa(t)) {
				var n = i.T(t);
				n.ea(e) || Kd(r, new J("child_changed", e, t, n))
			} else Kd(r, new J("child_added", e, t))
		})), n.pb(this.g)
	}, h.ia = function (t, e) {
		return t.e() ? H : t.ia(e)
	}, h.Ra = function () {
		return !1
	}, h.$b = function () {
		return this
	}, h = Md.prototype, h.matches = function (t) {
		return this.g.compare(this.gd, t) <= 0 && this.g.compare(t, this.Jc) <= 0
	}, h.H = function (t, e, n, i, r, o) {
		return this.matches(new L(e, n)) || (n = H), this.Fe.H(t, e, n, i, r, o)
	}, h.ya = function (t, e, n) {
		e.L() && (e = H);
		var i = (i = e.pb(this.g)).ia(H),
			r = this;
		return e.R(R, function (t, e) {
			r.matches(new L(t, e)) || (i = i.W(t, H))
		}), this.Fe.ya(t, i, n)
	}, h.ia = function (t) {
		return t
	}, h.Ra = function () {
		return !0
	}, h.$b = function () {
		return this.Fe
	}, h = Sd.prototype, h.H = function (t, e, n, i, r, o) {
		return this.ua.matches(new L(e, n)) || (n = H), t.T(e).ea(n) ? t : t.Hb() < this.ma ? this.ua.$b().H(t, e, n, i, r, o) : Ud(this, t, e, n, r, o)
	}, h.ya = function (t, e, n) {
		var i;
		if (e.L() || e.e()) i = H.pb(this.g);
		else if (2 * this.ma < e.Hb() && e.Mc(this.g)) {
			i = H.pb(this.g), e = this.Nb ? e.dc(this.ua.Jc, this.g) : e.bc(this.ua.gd, this.g);
			for (var r = 0; 0 < e.Ta.length && r < this.ma;) {
				var o = Ic(e);
				if (!(this.Nb ? this.g.compare(this.ua.gd, o) <= 0 : this.g.compare(o, this.ua.Jc) <= 0)) break;
				i = i.W(o.name, o.U), r++
			}
		} else {
			var a, s, l;
			if (i = (i = e.pb(this.g)).ia(H), this.Nb) {
				e = i.xf(this.g), a = this.ua.Jc, s = this.ua.gd;
				var c = Vd(this.g);
				l = function (t, e) {
					return c(e, t)
				}
			} else e = i.ac(this.g), a = this.ua.gd, s = this.ua.Jc, l = Vd(this.g);
			r = 0;
			for (var u = !1; 0 < e.Ta.length;) o = Ic(e), !u && l(a, o) <= 0 && (u = !0), u && r < this.ma && l(o, s) <= 0 ? r++ : i = i.W(o.name, H)
		}
		return this.ua.$b().ya(t, i, n)
	}, h.ia = function (t) {
		return t
	}, h.Ra = function () {
		return !0
	}, h.$b = function () {
		return this.ua.$b()
	}, Zd.prototype.gb = function (t, e, n, i) {
		var r, o = new Jd;
		if (e.type === bG) e.source.Ae ? n = $d(this, t, e.path, e.Ja, n, i, o) : (O(e.source.tf, "Unknown source."), r = e.source.ef || mc(t.w()) && !e.path.e(), n = ae(this, t, e.path, e.Ja, n, i, r, o));
		else if (e.type === be) e.source.Ae ? n = ce(this, t, e.path, e.children, n, i, o) : (O(e.source.tf, "Unknown source."), r = e.source.ef || mc(t.w()), n = de(this, t, e.path, e.children, n, i, r, o));
		else if (e.type === ee)
			if (e.Yd)
				if (e = e.path, null != n.xc(e)) n = t;
				else {
					if (r = new Vb(n, t, i), i = t.Q.j(), e.e() || ".priority" === K(e)) lc(t.w()) ? e = n.Aa(Yb(t)) : (e = t.w().j(), O(e instanceof fe, "serverChildren would be complete if leaf node"), e = n.Cc(e)), e = this.X.ya(i, e, o);
					else {
						var a = K(e),
							s = n.Bc(a, t.w());
						null == s && Wb(t.w(), a) && (s = i.T(a)), (e = null != s ? this.X.H(i, a, s, N(e), r, o) : t.Q.j().Fa(a) ? this.X.H(i, a, H, N(e), r, o) : i).e() && lc(t.w()) && ((i = n.Aa(Yb(t))).L() && (e = this.X.ya(e, i, o)))
					}
					n = ge(t, e, i = lc(t.w()) || null != n.xc(M), this.X.Ra())
				} else n = he(this, t, e.path, e.Ub, n, i, o);
		else {
			if (e.type !== Dc) throw jd("Unknown operation type: " + e.type);
			i = e.path, r = (e = t.w()).j(), a = e.ga || i.e(), n = ie(this, new je(t.Q, new Xb(r, a, e.Yb)), i, n, bm, o)
		}
		return o = qa(o.ib), (e = (i = n).Q).ga && (r = e.j().L() || e.j().e(), a = ke(t), (0 < o.length || !t.Q.ga || r && !e.j().ea(a) || !e.j().C().ea(a.C())) && o.push(hc(ke(i)))), new Yd(n, o)
	};
	var bu = {};

	function Vd(t) {
		return u(t.compare, t)
	}

	function ve(t) {
		O(!t.e() && ".priority" !== K(t), "Can't create PathIndex with empty path or .priority key"), this.gc = t
	}

	function xe() {}
	se.prototype.Dd = function (t, e) {
		return 0 !== this.compare(new L("[MIN_NAME]", t), new L("[MIN_NAME]", e))
	}, se.prototype.Wc = function () {
		return ue
	}, ka(ve, se), h = ve.prototype, h.Lc = function (t) {
		return !t.S(this.gc).e()
	}, h.compare = function (t, e) {
		var n = t.U.S(this.gc),
			i = e.U.S(this.gc);
		return 0 === (n = n.Gc(i)) ? yc(t.name, e.name) : n
	}, h.Sc = function (t, e) {
		var n = Q(t);
		return new L(e, n = H.H(this.gc, n))
	}, h.Tc = function () {
		return new L("[MAX_NAME]", H.H(this.gc, bC))
	}, h.toString = function () {
		return this.gc.slice().join("/")
	}, ka(xe, se), h = xe.prototype, h.compare = function (t, e) {
		var n = t.U.C(),
			i = e.U.C();
		return 0 === (n = n.Gc(i)) ? yc(t.name, e.name) : n
	}, h.Lc = function (t) {
		return !t.C().e()
	}, h.Dd = function (t, e) {
		return !t.C().ea(e.C())
	}, h.Wc = function () {
		return ue
	}, h.Tc = function () {
		return new L("[MAX_NAME]", new Yc("[PRIORITY-POST]", bC))
	}, h.Sc = function (t, e) {
		return new L(e, new Yc("[PRIORITY-POST]", Q(t)))
	}, h.toString = function () {
		return ".priority"
	};
	var R = new xe;

	function ye() {}
	ka(ye, se), h = ye.prototype, h.compare = function (t, e) {
		return yc(t.name, e.name)
	}, h.Lc = function () {
		throw jd("KeyIndex.isDefinedOn not expected to be called.")
	}, h.Dd = function () {
		return !1
	}, h.Wc = function () {
		return ue
	}, h.Tc = function () {
		return new L("[MAX_NAME]", H)
	}, h.Sc = function (t) {
		return O(q(t), "KeyIndex indexValue must always be a string."), new L(t, H)
	}, h.toString = function () {
		return ".key"
	};
	var bv = new ye;

	function ze() {}
	ka(ze, se), h = ze.prototype, h.compare = function (t, e) {
		var n = t.U.Gc(e.U);
		return 0 === n ? yc(t.name, e.name) : n
	}, h.Lc = function () {
		return !0
	}, h.Dd = function (t, e) {
		return !t.ea(e)
	}, h.Wc = function () {
		return ue
	}, h.Tc = function () {
		return Ae
	}, h.Sc = function (t, e) {
		return new L(e, Q(t))
	}, h.toString = function () {
		return ".value"
	};
	var bw = new ze;

	function Ce() {
		this.Xb = this.ra = this.Pb = this.oa = this.la = !1, this.ma = 0, this.Rb = "", this.ic = null, this.Bb = "", this.fc = null, this.zb = "", this.g = R
	}
	var bx = new Ce;

	function Td(t) {
		return "" === t.Rb ? t.oa : "l" === t.Rb
	}

	function Od(t) {
		return O(t.oa, "Only valid if start has been set"), t.ic
	}

	function Nd(t) {
		return O(t.oa, "Only valid if start has been set"), t.Pb ? t.Bb : "[MIN_NAME]"
	}

	function Rd(t) {
		return O(t.ra, "Only valid if end has been set"), t.fc
	}

	function Pd(t) {
		return O(t.ra, "Only valid if end has been set"), t.Xb ? t.zb : "[MAX_NAME]"
	}

	function Ee(t) {
		var e = new Ce;
		return e.la = t.la, e.ma = t.ma, e.oa = t.oa, e.ic = t.ic, e.Pb = t.Pb, e.Bb = t.Bb, e.ra = t.ra, e.fc = t.fc, e.Xb = t.Xb, e.zb = t.zb, e.g = t.g, e
	}

	function Fe(t, e) {
		var n = Ee(t);
		return n.g = e, n
	}

	function Ge(t) {
		var e = {};
		if (t.oa && (e.sp = t.ic, t.Pb && (e.sn = t.Bb)), t.ra && (e.ep = t.fc, t.Xb && (e.en = t.zb)), t.la) {
			e.l = t.ma;
			var n = t.Rb;
			"" === n && (n = Td(t) ? "l" : "r"), e.vf = n
		}
		return t.g !== R && (e.i = t.g.toString()), e
	}

	function He(t) {
		return !(t.oa || t.ra || t.la)
	}

	function Ie(t) {
		return He(t) && t.g == R
	}

	function Je(t) {
		var e, n = {};
		return Ie(t) || (t.g === R ? e = "$priority" : t.g === bw ? e = "$value" : t.g === bv ? e = "$key" : (O(t.g instanceof ve, "Unrecognized index type!"), e = t.g.toString()), n.orderBy = G(e), t.oa && (n.startAt = G(t.ic), t.Pb && (n.startAt += "," + G(t.Bb))), t.ra && (n.endAt = G(t.fc), t.Xb && (n.endAt += "," + G(t.zb))), t.la && (Td(t) ? n.limitToFirst = t.ma : n.limitToLast = t.ma)), n
	}

	function Ke(t, e) {
		this.Ed = t, this.hc = e
	}

	function Le(a, s, l) {
		return new Ke(ma(a.Ed, function (t, e) {
			var n = z(a.hc, e);
			if (O(n, "Missing index implementation for " + e), t === bu) {
				if (n.Lc(s.U)) {
					for (var i = [], r = l.ac(wc), o = Ic(r); o;) o.name != s.name && i.push(o), o = Ic(r);
					return i.push(s), Me(i, Vd(n))
				}
				return bu
			}
			return i = t, (n = l.get(s.name)) && (i = i.remove(new L(s.name, n))), i.Sa(s, s.U)
		}), a.hc)
	}

	function Ne(t, n, i) {
		return new Ke(ma(t.Ed, function (t) {
			if (t === bu) return t;
			var e = i.get(n.name);
			return e ? t.remove(new L(n.name, e)) : t
		}), t.hc)
	}
	h = Ce.prototype, h.Le = function (t) {
		var e = Ee(this);
		return e.la = !0, e.ma = t, e.Rb = "", e
	}, h.Me = function (t) {
		var e = Ee(this);
		return e.la = !0, e.ma = t, e.Rb = "l", e
	}, h.Ne = function (t) {
		var e = Ee(this);
		return e.la = !0, e.ma = t, e.Rb = "r", e
	}, h.ce = function (t, e) {
		var n = Ee(this);
		return n.oa = !0, p(t) || (t = null), n.ic = t, null != e ? (n.Pb = !0, n.Bb = e) : (n.Pb = !1, n.Bb = ""), n
	}, h.vd = function (t, e) {
		var n = Ee(this);
		return n.ra = !0, p(t) || (t = null), n.fc = t, p(e) ? (n.Xb = !0, n.zb = e) : (n.oh = !1, n.zb = ""), n
	}, h.toString = function () {
		return G(Ge(this))
	}, Ke.prototype.get = function (t) {
		var e = z(this.Ed, t);
		if (!e) throw Error("No index defined for " + t);
		return e === bu ? null : e
	};
	var by = new Ke({
		".priority": bu
	}, {
		".priority": R
	});

	function Yc(t, e) {
		this.B = t, O(p(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value."), this.ca = e || H, Pe(this.ca), this.Gb = null
	}
	var bz = ["object", "boolean", "number", "string"];

	function fe(t, e, n) {
		this.m = t, (this.ca = e) && Pe(this.ca), t.e() && O(!this.ca || this.ca.e(), "An empty node cannot have a priority"), this.Ab = n, this.Gb = null
	}
	h = Yc.prototype, h.L = function () {
		return !0
	}, h.C = function () {
		return this.ca
	}, h.ia = function (t) {
		return new Yc(this.B, t)
	}, h.T = function (t) {
		return ".priority" === t ? this.ca : H
	}, h.S = function (t) {
		return t.e() ? this : ".priority" === K(t) ? this.ca : H
	}, h.Fa = function () {
		return !1
	}, h.wf = function () {
		return null
	}, h.W = function (t, e) {
		return ".priority" === t ? this.ia(e) : e.e() && ".priority" !== t ? this : H.W(t, e).ia(this.ca)
	}, h.H = function (t, e) {
		var n = K(t);
		return null === n ? e : e.e() && ".priority" !== n ? this : (O(".priority" !== n || 1 === le(t), ".priority must be the last token in a path"), this.W(n, H.H(N(t), e)))
	}, h.e = function () {
		return !1
	}, h.Hb = function () {
		return 0
	}, h.R = function () {
		return !1
	}, h.J = function (t) {
		return t && !this.C().e() ? {
			".value": this.Ea(),
			".priority": this.C().J()
		} : this.Ea()
	}, h.hash = function () {
		if (null === this.Gb) {
			var t = "";
			this.ca.e() || (t += "priority:" + Re(this.ca.J()) + ":");
			var e = typeof this.B;
			t = t + (e + ":"), t = "number" === e ? t + Ad(this.B) : t + this.B;
			this.Gb = ld(t)
		}
		return this.Gb
	}, h.Ea = function () {
		return this.B
	}, h.Gc = function (t) {
		if (t === H) return 1;
		if (t instanceof fe) return -1;
		O(t.L(), "Unknown node type");
		var e = typeof t.B,
			n = typeof this.B,
			i = La(bz, e),
			r = La(bz, n);
		return O(0 <= i, "Unknown leaf type: " + e), O(0 <= r, "Unknown leaf type: " + n), i === r ? "object" === n ? 0 : this.B < t.B ? -1 : this.B === t.B ? 0 : 1 : r - i
	}, h.pb = function () {
		return this
	}, h.Mc = function () {
		return !0
	}, h.ea = function (t) {
		return t === this || !!t.L() && (this.B === t.B && this.ca.ea(t.ca))
	}, h.toString = function () {
		return G(this.J(!0))
	}, h = fe.prototype, h.L = function () {
		return !1
	}, h.C = function () {
		return this.ca || H
	}, h.ia = function (t) {
		return this.m.e() ? this : new fe(this.m, t, this.Ab)
	}, h.T = function (t) {
		return ".priority" === t ? this.C() : null === (t = this.m.get(t)) ? H : t
	}, h.S = function (t) {
		var e = K(t);
		return null === e ? this : this.T(e).S(N(t))
	}, h.Fa = function (t) {
		return null !== this.m.get(t)
	}, h.W = function (t, e) {
		if (O(e, "We should always be passing snapshot nodes"), ".priority" === t) return this.ia(e);
		var n, i = new L(t, e);
		return e.e() ? (n = this.m.remove(t), i = Ne(this.Ab, i, this.m)) : (n = this.m.Sa(t, e), i = Le(this.Ab, i, this.m)), new fe(n, n.e() ? H : this.ca, i)
	}, h.H = function (t, e) {
		var n = K(t);
		if (null === n) return e;
		O(".priority" !== K(t) || 1 === le(t), ".priority must be the last token in a path");
		var i = this.T(n).H(N(t), e);
		return this.W(n, i)
	}, h.e = function () {
		return this.m.e()
	}, h.Hb = function () {
		return this.m.count()
	};
	var bA = /^(0|[1-9]\d*)$/;

	function Wd(t, e) {
		var n;
		return (n = (n = Te(t, e)) ? (n = n.Vc()) && n.name : t.m.Vc()) ? new L(n, t.m.get(n)) : null
	}

	function Xd(t, e) {
		var n;
		return (n = (n = Te(t, e)) ? (n = n.jc()) && n.name : t.m.jc()) ? new L(n, t.m.get(n)) : null
	}

	function Te(t, e) {
		return e === bv ? null : t.Ab.get(e.toString())
	}

	function Q(t, e) {
		if (null === t) return H;
		var n = null;
		if ("object" == typeof t && ".priority" in t ? n = t[".priority"] : void 0 !== e && (n = e), O(null === n || "string" == typeof n || "number" == typeof n || "object" == typeof n && ".sv" in n, "Invalid priority type found: " + typeof n), "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv" in t) return new Yc(t, Q(n));
		if (t instanceof Array) {
			var i = H,
				r = t;
			return v(r, function (t, e) {
				if (y(r, e) && "." !== e.substring(0, 1)) {
					var n = Q(t);
					!n.L() && n.e() || (i = i.W(e, n))
				}
			}), i.ia(Q(n))
		}
		var o = [],
			a = !1,
			s = t;
		if (Fb(s, function (t) {
			if ("string" != typeof t || "." !== t.substring(0, 1)) {
				var e = Q(s[t]);
				e.e() || (a = a || !e.C().e(), o.push(new L(t, e)))
			}
		}), 0 == o.length) return H;
		var l = Me(o, xc, function (t) {
			return t.name
		}, zc);
		if (a) {
			var c = Me(o, Vd(R));
			return new fe(l, Q(n), new Ke({
				".priority": c
			}, {
				".priority": R
			}))
		}
		return new fe(l, Q(n), by)
	}
	h = fe.prototype, h.J = function (n) {
		if (this.e()) return null;
		var i = {},
			r = 0,
			o = 0,
			a = !0;
		if (this.R(R, function (t, e) {
			i[t] = e.J(n), r++, a && bA.test(t) ? o = Math.max(o, Number(t)) : a = !1
		}), !n && a && o < 2 * r) {
			var t, e = [];
			for (t in i) e[t] = i[t];
			return e
		}
		return n && !this.C().e() && (i[".priority"] = this.C().J()), i
	}, h.hash = function () {
		if (null === this.Gb) {
			var i = "";
			this.C().e() || (i += "priority:" + Re(this.C().J()) + ":"), this.R(R, function (t, e) {
				var n = e.hash();
				"" !== n && (i += ":" + t + ":" + n)
			}), this.Gb = "" === i ? "" : ld(i)
		}
		return this.Gb
	}, h.wf = function (t, e, n) {
		return (n = Te(this, n)) ? (t = Gc(n, new L(t, e))) ? t.name : null : Gc(this.m, t)
	}, h.R = function (t, e) {
		var n = Te(this, t);
		return n ? n.ka(function (t) {
			return e(t.name, t.U)
		}) : this.m.ka(e)
	}, h.ac = function (t) {
		return this.bc(t.Wc(), t)
	}, h.bc = function (t, e) {
		if (n = Te(this, e)) return n.bc(t, function (t) {
			return t
		});
		for (var n, i = Jc(n = this.m.bc(t.name, wc)); null != i && e.compare(i, t) < 0;) Ic(n), i = Jc(n);
		return n
	}, h.xf = function (t) {
		return this.dc(t.Tc(), t)
	}, h.dc = function (t, e) {
		if (n = Te(this, e)) return n.dc(t, function (t) {
			return t
		});
		for (var n, i = Jc(n = this.m.dc(t.name, wc)); null != i && 0 < e.compare(i, t);) Ic(n), i = Jc(n);
		return n
	}, h.Gc = function (t) {
		return this.e() ? t.e() ? 0 : -1 : t.L() || t.e() ? 1 : t === bC ? -1 : 0
	}, h.pb = function (t) {
		if (t === bv || sa(this.Ab.hc, t.toString())) return this;
		var e = this.Ab,
			n = this.m;
		O(t !== bv, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
		for (var i = [], r = !1, o = Ic(n = n.ac(wc)); o;) r = r || t.Lc(o.U), i.push(o), o = Ic(n);
		return i = r ? Me(i, Vd(t)) : bu, r = t.toString(), (n = wa(e.hc))[r] = t, (t = wa(e.Ed))[r] = i, new fe(this.m, this.ca, new Ke(t, n))
	}, h.Mc = function (t) {
		return t === bv || sa(this.Ab.hc, t.toString())
	}, h.ea = function (t) {
		if (t === this) return !0;
		if (t.L()) return !1;
		if (this.C().ea(t.C()) && this.m.count() === t.m.count()) {
			var e = this.ac(R);
			t = t.ac(R);
			for (var n = Ic(e), i = Ic(t); n && i;) {
				if (n.name !== i.name || !n.U.ea(i.U)) return !1;
				n = Ic(e), i = Ic(t)
			}
			return null === n && null === i
		}
		return !1
	}, h.toString = function () {
		return G(this.J(!0))
	};
	var bB = Math.log(2);

	function Ve(t) {
		this.count = parseInt(Math.log(t + 1) / bB, 10), this.nf = this.count - 1, this.ng = t + 1 & parseInt(Array(this.count + 1).join("1"), 2)
	}

	function We(t) {
		var e = !(t.ng & 1 << t.nf);
		return t.nf--, e
	}

	function Me(l, t, c, e) {
		l.sort(t);
		var n = function (t) {
			function e(t, e) {
				var n = a - t,
					i = a;
				a -= t;
				i = function t(e, n) {
					if (0 == (r = n - e)) return null;
					if (1 == r) {
						var i = l[e];
						return new Kc(c ? c(i) : i, i.U, !1, null, null)
					}
					var r = t(e, i = parseInt(r / 2, 10) + e),
						o = t(i + 1, n);
					i = l[i];
					return new Kc(c ? c(i) : i, i.U, !1, r, o)
				}(n + 1, i), n = l[n], i = new Kc(c ? c(n) : n, n.U, e, null, i);
				r ? r.left = i : o = i, r = i
			}
			for (var r = null, o = null, a = l.length, n = 0; n < t.count; ++n) {
				var i = We(t),
					s = Math.pow(2, t.count - (n + 1));
				i ? e(s, !1) : (e(s, !1), e(s, !0))
			}
			return o
		}(new Ve(l.length));
		return null !== n ? new Ec(e || t, n) : new Ec(e || t)
	}

	function Re(t) {
		return "number" == typeof t ? "number:" + Ad(t) : "string:" + t
	}

	function Pe(t) {
		if (t.L()) {
			var e = t.J();
			O("string" == typeof e || "number" == typeof e || "object" == typeof e && y(e, ".sv"), "Priority must be a string or number.")
		} else O(t === bC || t.e(), "priority of unexpected type.");
		O(t === bC || t.C().e(), "Priority nodes can't have a priority of their own.")
	}
	var H = new fe(new Ec(zc), null, by);

	function Xe() {
		fe.call(this, new Ec(zc), H, by)
	}
	ka(Xe, fe), h = Xe.prototype, h.Gc = function (t) {
		return t === this ? 0 : 1
	}, h.ea = function (t) {
		return t === this
	}, h.C = function () {
		return this
	}, h.T = function () {
		return H
	}, h.e = function () {
		return !1
	};
	var bC = new Xe,
		ue = new L("[MIN_NAME]", H),
		Ae = new L("[MAX_NAME]", bC);

	function je(t, e) {
		this.Q = t, this.ae = e
	}

	function ge(t, e, n, i) {
		return new je(new Xb(e, n, i), t.ae)
	}

	function ke(t) {
		return t.Q.ga ? t.Q.j() : null
	}

	function Yb(t) {
		return t.ae.ga ? t.ae.j() : null
	}

	function Ye(t, e) {
		var n = new Ld((i = (this.Y = t).n).g),
			i = He(i) ? new Ld(i.g) : i.la ? new Sd(i) : new Md(i);
		this.Nf = new Zd(i);
		var r = e.w(),
			o = e.Q,
			a = n.ya(H, r.j(), null),
			s = i.ya(H, o.j(), null);
		this.Oa = new je(new Xb(s, o.ga, i.Ra()), new Xb(a, r.ga, n.Ra())), this.$a = [], this.ug = new Fd(t)
	}

	function Ze(t) {
		return t.Y
	}

	function af(t, e) {
		var n = t.Oa.Q,
			i = [];
		return n.j().L() || n.j().R(R, function (t, e) {
			i.push(new J("child_added", e, t))
		}), n.ga && i.push(hc(n.j())), $e(t, i, n.j(), e)
	}

	function $e(t, e, n, i) {
		return Gd(t.ug, e, n, i ? [i] : t.$a)
	}

	function bf(t, e, n) {
		this.type = be, this.source = t, this.path = e, this.children = n
	}

	function cf(t, e) {
		this.f = pd("p:rest:"), this.G = t, this.Kb = e, this.Ca = null, this.ba = {}
	}

	function df(t, e) {
		return p(e) ? "tag$" + e : (O(Ie(t.n), "should have a tag if it's not a default query."), t.path.toString())
	}

	function ef(e, t, n, i) {
		(n = n || {}).format = "export", e.Ca && (n.auth = e.Ca);
		var r = (e.G.ob ? "https://" : "http://") + e.G.host + t + "?" + Ib(n);
		e.f("Sending REST request for " + r);
		var o = new XMLHttpRequest;
		o.onreadystatechange = function () {
			if (i && 4 === o.readyState) {
				e.f("REST Response for " + r + " received. status:", o.status, "response:", o.responseText);
				var t = null;
				if (200 <= o.status && o.status < 300) {
					try {
						t = Rb(o.responseText)
					} catch (t) {
						S("Failed to parse JSON response for " + r + ": " + o.responseText)
					}
					i(null, t)
				} else 401 !== o.status && 404 !== o.status && S("Got unsuccessful REST response for " + r + " Status: " + o.status), i(o.status);
				i = null
			}
		}, o.open("GET", r, !0), o.send()
	}

	function ff(t) {
		O(da(t) && 0 < t.length, "Requires a non-empty array"), this.fg = t, this.Rc = {}
	}

	function gf(t, e) {
		O(Ra(t.fg, function (t) {
			return t === e
		}), "Unknown event: " + e)
	}
	je.prototype.w = function () {
		return this.ae
	}, h = Ye.prototype, h.w = function () {
		return this.Oa.w().j()
	}, h.kb = function (t) {
		var e = Yb(this.Oa);
		return e && (He(this.Y.n) || !t.e() && !e.T(K(t)).e()) ? e.S(t) : null
	}, h.e = function () {
		return 0 === this.$a.length
	}, h.Tb = function (t) {
		this.$a.push(t)
	}, h.nb = function (t, e) {
		var n = [];
		if (e) {
			O(null == t, "A cancel should cancel all event registrations.");
			var i = this.Y.path;
			Ma(this.$a, function (t) {
				(t = t.lf(e, i)) && n.push(t)
			})
		}
		if (t) {
			for (var r = [], o = 0; o < this.$a.length; ++o) {
				var a = this.$a[o];
				if (a.matches(t)) {
					if (t.yf()) {
						r = r.concat(this.$a.slice(o + 1));
						break
					}
				} else r.push(a)
			}
			this.$a = r
		} else this.$a = [];
		return n
	}, h.gb = function (t, e, n) {
		t.type === be && null !== t.source.Lb && (O(Yb(this.Oa), "We should always have a full cache before handling merges"), O(ke(this.Oa), "Missing event cache, even though we have a server cache"));
		var i = this.Oa;
		return t = this.Nf.gb(i, t, e, n), e = this.Nf, n = t.me, O(n.Q.j().Mc(e.X.g), "Event snap not indexed"), O(n.w().j().Mc(e.X.g), "Server snap not indexed"), O(lc(t.me.w()) || !lc(i.w()), "Once a server snap is complete, it should never go back"), this.Oa = t.me, $e(this, t.og, t.me.Q.j(), null)
	}, bf.prototype.$c = function (t) {
		return this.path.e() ? (t = this.children.subtree(new P(t))).e() ? null : t.value ? new Ac(this.source, M, t.value) : new bf(this.source, M, t) : (O(K(this.path) === t, "Can't get a merge for a child not on the path of the operation"), new bf(this.source, N(this.path), this.children))
	}, bf.prototype.toString = function () {
		return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
	}, h = cf.prototype, h.Cf = function (t, e, i, r) {
		var o = t.path.toString();
		this.f("Listen called for " + o + " " + t.wa());
		var a = df(t, i),
			s = {};
		this.ba[a] = s, t = Je(t.n);
		var l = this;
		ef(this, o + ".json", t, function (t, e) {
			var n = e;
			404 === t && (t = n = null), null === t && l.Kb(o, n, !1, i), z(l.ba, a) === s && r(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null)
		})
	}, h.$f = function (t, e) {
		var n = df(t, e);
		delete this.ba[n]
	}, h.O = function (t, e) {
		var n = (i = Cd(this.Ca = t)).data,
			i = i.Ec && i.Ec.exp;
		e && e("ok", {
			auth: n,
			expires: i
		})
	}, h.je = function (t) {
		t("ok", this.Ca = null)
	}, h.Qe = function () {}, h.Gf = function () {}, h.Md = function () {}, h.put = function () {}, h.Df = function () {}, h.Ye = function () {}, ff.prototype.ie = function (t, e) {
		var n, i = (n = this.Rc[t] || []).length;
		if (0 < i) {
			for (var r = Array(i), o = 0; o < i; o++) r[o] = n[o];
			n = r
		} else n = [];
		for (i = 0; i < n.length; i++) n[i].Dc.apply(n[i].Qa, Array.prototype.slice.call(arguments, 1))
	}, ff.prototype.Ib = function (t, e, n) {
		gf(this, t), this.Rc[t] = this.Rc[t] || [], this.Rc[t].push({
			Dc: e,
			Qa: n
		}), (t = this.Ee(t)) && e.apply(n, t)
	}, ff.prototype.mc = function (t, e, n) {
		gf(this, t), t = this.Rc[t] || [];
		for (var i = 0; i < t.length; i++)
			if (t[i].Dc === e && (!n || n === t[i].Qa)) {
				t.splice(i, 1);
				break
			}
	};
	var bD = (mja = 0, nja = [], function (t) {
			var e = t === mja;
			mja = t;
			for (var n = Array(8), i = 7; 0 <= i; i--) n[i] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(t % 64), t = Math.floor(t / 64);
			if (O(0 === t, "Cannot push at time==0"), t = n.join(""), e) {
				for (i = 11; 0 <= i && 63 === nja[i]; i--) nja[i] = 0;
				nja[i]++
			} else
				for (i = 0; i < 12; i++) nja[i] = Math.floor(64 * Math.random());
			for (i = 0; i < 12; i++) t += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(nja[i]);
			return O(20 === t.length, "nextPushId: Length should be 20."), t
		}),
		mja, nja;

	function jf() {
		if (ff.call(this, ["online"]), this.oc = !0, "undefined" != typeof window && void 0 !== window.addEventListener) {
			var t = this;
			window.addEventListener("online", function () {
				t.oc || (t.oc = !0, t.ie("online", !0))
			}, !1), window.addEventListener("offline", function () {
				t.oc && (t.oc = !1, t.ie("online", !1))
			}, !1)
		}
	}

	function kf() {
		var e, t;
		if (ff.call(this, ["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), this.Sb = !0, t) {
			var n = this;
			document.addEventListener(t, function () {
				var t = !document[e];
				t !== n.Sb && (n.Sb = t, n.ie("visible", t))
			}, !1)
		}
	}

	function P(t, e) {
		if (1 == arguments.length) {
			this.u = t.split("/");
			for (var n = 0, i = 0; i < this.u.length; i++) 0 < this.u[i].length && (this.u[n] = this.u[i], n++);
			this.u.length = n, this.aa = 0
		} else this.u = t, this.aa = e
	}

	function lf(t, e) {
		var n = K(t);
		if (null === n) return e;
		if (n === K(e)) return lf(N(t), N(e));
		throw Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")")
	}

	function mf(t, e) {
		for (var n = t.slice(), i = e.slice(), r = 0; r < n.length && r < i.length; r++) {
			var o = yc(n[r], i[r]);
			if (0 !== o) return o
		}
		return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
	}

	function K(t) {
		return t.aa >= t.u.length ? null : t.u[t.aa]
	}

	function le(t) {
		return t.u.length - t.aa
	}

	function N(t) {
		var e = t.aa;
		return e < t.u.length && e++, new P(t.u, e)
	}

	function me(t) {
		return t.aa < t.u.length ? t.u[t.u.length - 1] : null
	}
	ka(jf, ff), jf.prototype.Ee = function (t) {
		return O("online" === t, "Unknown event type: " + t), [this.oc]
	}, ba(jf), ka(kf, ff), kf.prototype.Ee = function (t) {
		return O("visible" === t, "Unknown event type: " + t), [this.Sb]
	}, ba(kf), h = P.prototype, h.toString = function () {
		for (var t = "", e = this.aa; e < this.u.length; e++) "" !== this.u[e] && (t += "/" + this.u[e]);
		return t || "/"
	}, h.slice = function (t) {
		return this.u.slice(this.aa + (t || 0))
	}, h.parent = function () {
		if (this.aa >= this.u.length) return null;
		for (var t = [], e = this.aa; e < this.u.length - 1; e++) t.push(this.u[e]);
		return new P(t, 0)
	}, h.o = function (t) {
		for (var e = [], n = this.aa; n < this.u.length; n++) e.push(this.u[n]);
		if (t instanceof P)
			for (n = t.aa; n < t.u.length; n++) e.push(t.u[n]);
		else
			for (t = t.split("/"), n = 0; n < t.length; n++) 0 < t[n].length && e.push(t[n]);
		return new P(e, 0)
	}, h.e = function () {
		return this.aa >= this.u.length
	}, h.ea = function (t) {
		if (le(this) !== le(t)) return !1;
		for (var e = this.aa, n = t.aa; e <= this.u.length; e++, n++)
			if (this.u[e] !== t.u[n]) return !1;
		return !0
	}, h.contains = function (t) {
		var e = this.aa,
			n = t.aa;
		if (le(this) > le(t)) return !1;
		for (; e < this.u.length;) {
			if (this.u[e] !== t.u[n]) return !1;
			++e, ++n
		}
		return !0
	};
	var M = new P("");

	function nf(t, e) {
		this.Ua = t.slice(), this.Ka = Math.max(1, this.Ua.length), this.pf = e;
		for (var n = 0; n < this.Ua.length; n++) this.Ka += Pb(this.Ua[n]);
		of(this)
	}

	function of(t) {
		if (768 < t.Ka) throw Error(t.pf + "has a key path longer than 768 bytes (" + t.Ka + ").");
		if (32 < t.Ua.length) throw Error(t.pf + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + pf(t))
	}

	function pf(t) {
		return 0 == t.Ua.length ? "" : "in property '" + t.Ua.join(".") + "'"
	}

	function qf(t, e) {
		this.value = t, this.children = e || bE
	}
	nf.prototype.push = function (t) {
		0 < this.Ua.length && (this.Ka += 1), this.Ua.push(t), this.Ka += Pb(t), of(this)
	}, nf.prototype.pop = function () {
		var t = this.Ua.pop();
		this.Ka -= Pb(t), 0 < this.Ua.length && --this.Ka
	};
	var bE = new Ec(function (t, e) {
		return t === e ? 0 : t < e ? -1 : 1
	});

	function sf(t) {
		var n = bF;
		return v(t, function (t, e) {
			n = n.set(new P(e), t)
		}), n
	}

	function tf(t, e, n) {
		if (null != t.value && n(t.value)) return {
			path: M,
			value: t.value
		};
		if (e.e()) return null;
		var i = K(e);
		return null !== (t = t.children.get(i)) ? null != (e = tf(t, N(e), n)) ? {
			path: new P(i).o(e.path),
			value: e.value
		} : null : null
	}

	function uf(t, e) {
		return tf(t, e, function () {
			return !0
		})
	}

	function pe(t, e, n) {
		if (e.e()) return n;
		var i = K(e);
		return i = (e = pe(t.children.get(i) || bF, N(e), n)).e() ? t.children.remove(i) : t.children.Sa(i, e), new qf(t.value, i)
	}

	function vf(t, e) {
		return wf(t, M, e)
	}

	function wf(t, n, i) {
		var r = {};
		return t.children.ka(function (t, e) {
			r[t] = wf(e, n.o(t), i)
		}), i(n, t.value, r)
	}

	function xf(t, e, n) {
		return yf(t, e, M, n)
	}

	function yf(t, e, n, i) {
		var r = !!t.value && i(n, t.value);
		return r || (e.e() ? null : (r = K(e), (t = t.children.get(r)) ? yf(t, N(e), n.o(r), i) : null))
	}

	function zf(t, e, n) {
		Af(t, e, M, n)
	}

	function Af(t, e, n, i) {
		if (e.e()) return t;
		t.value && i(n, t.value);
		var r = K(e);
		return (t = t.children.get(r)) ? Af(t, N(e), n.o(r), i) : bF
	}

	function ne(t, e) {
		Bf(t, M, e)
	}

	function Bf(t, n, i) {
		t.children.ka(function (t, e) {
			Bf(e, n.o(t), i)
		}), t.value && i(n, t.value)
	}

	function Cf(t, n) {
		t.children.ka(function (t, e) {
			e.value && n(t, e.value)
		})
	}
	h = qf.prototype, h.e = function () {
		return null === this.value && this.children.e()
	}, h.subtree = function (t) {
		if (t.e()) return this;
		var e = this.children.get(K(t));
		return null !== e ? e.subtree(N(t)) : bF
	}, h.set = function (t, e) {
		if (t.e()) return new qf(e, this.children);
		var n = K(t),
			i = (this.children.get(n) || bF).set(N(t), e);
		n = this.children.Sa(n, i);
		return new qf(this.value, n)
	}, h.remove = function (t) {
		if (t.e()) return this.children.e() ? bF : new qf(null, this.children);
		var e = K(t),
			n = this.children.get(e);
		return n ? (e = (t = n.remove(N(t))).e() ? this.children.remove(e) : this.children.Sa(e, t), null === this.value && e.e() ? bF : new qf(this.value, e)) : this
	}, h.get = function (t) {
		if (t.e()) return this.value;
		var e = this.children.get(K(t));
		return e ? e.get(N(t)) : null
	};
	var bF = new qf(null);

	function Df(t, e, n) {
		this.type = ee, this.source = bH, this.path = t, this.Ub = e, this.Yd = n
	}
	qf.prototype.toString = function () {
		var n = {};
		return ne(this, function (t, e) {
			n[t.toString()] = e.toString()
		}), G(n)
	}, Df.prototype.$c = function (t) {
		return this.path.e() ? null != this.Ub.value ? (O(this.Ub.children.e(), "affectedTree should not have overlapping affected paths."), this) : (t = this.Ub.subtree(new P(t)), new Df(M, t, this.Yd)) : (O(K(this.path) === t, "operationForChild called for unrelated child."), new Df(N(this.path), this.Ub, this.Yd))
	}, Df.prototype.toString = function () {
		return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Yd + " affectedTree=" + this.Ub + ")"
	};
	var bG = 0,
		be = 1,
		ee = 2,
		Dc = 3;

	function Ff(t, e, n, i) {
		this.Ae = t, this.tf = e, this.Lb = n, this.ef = i, O(!i || e, "Tagged queries must be from server.")
	}
	var bH = new Ff(!0, !1, null, !1),
		Gf = new Ff(!1, !0, null, !1);

	function Hf(t) {
		this.Z = t
	}
	Ff.prototype.toString = function () {
		return this.Ae ? "user" : this.ef ? "server(queryID=" + this.Lb + ")" : "server"
	};
	var bI = new Hf(new qf(null));

	function Jf(t, e, n) {
		if (e.e()) return new Hf(new qf(n));
		if (null != (r = uf(t.Z, e))) {
			var i = r.path,
				r = r.value;
			return e = lf(i, e), r = r.H(e, n), new Hf(t.Z.set(i, r))
		}
		return new Hf(t = pe(t.Z, e, new qf(n)))
	}

	function Kf(t, n, e) {
		var i = t;
		return Fb(e, function (t, e) {
			i = Jf(i, n.o(t), e)
		}), i
	}

	function Lf(t, e) {
		var n = uf(t.Z, e);
		return null != n ? t.Z.get(n.path).S(lf(n.path, e)) : null
	}

	function Mf(t) {
		var n = [],
			e = t.Z.value;
		return null != e ? e.L() || e.R(R, function (t, e) {
			n.push(new L(t, e))
		}) : t.Z.children.ka(function (t, e) {
			null != e.value && n.push(new L(t, e.value))
		}), n
	}

	function Nf(t, e) {
		if (e.e()) return t;
		var n = Lf(t, e);
		return new Hf(null != n ? new qf(n) : t.Z.subtree(e))
	}

	function Of(n, t, i) {
		if (null != t.value) return i.H(n, t.value);
		var r = null;
		return t.children.ka(function (t, e) {
			".priority" === t ? (O(null !== e.value, "Priority writes must always be leaf nodes"), r = e.value) : i = Of(n.o(t), e, i)
		}), i.S(n).e() || null === r || (i = i.H(n.o(".priority"), r)), i
	}

	function Pf() {
		this.V = bI, this.pa = [], this.Pc = -1
	}

	function Qf(t, e) {
		for (var n = 0; n < t.pa.length; n++) {
			var i = t.pa[n];
			if (i.md === e) return i
		}
		return null
	}

	function Rf(n, i) {
		return n.Ja ? n.path.contains(i) : !!ta(n.children, function (t, e) {
			return n.path.o(e).contains(i)
		})
	}

	function Tf(t) {
		return t.visible
	}

	function Sf(t, e, n) {
		for (var i = bI, r = 0; r < t.length; ++r) {
			var o = t[r];
			if (e(o)) {
				var a = o.path;
				if (o.Ja) n.contains(a) ? i = Jf(i, a = lf(n, a), o.Ja) : a.contains(n) && (a = lf(a, n), i = Jf(i, M, o.Ja.S(a)));
				else {
					if (!o.children) throw jd("WriteRecord should have .snap or .children");
					n.contains(a) ? i = Kf(i, a = lf(n, a), o.children) : a.contains(n) && ((a = lf(a, n)).e() ? i = Kf(i, M, o.children) : (o = z(o.children, K(a))) && (o = o.S(N(a)), i = Jf(i, M, o)))
				}
			}
		}
		return i
	}

	function Uf(t, e) {
		this.Qb = t, this.Z = e
	}

	function Vf() {
		this.children = {}, this.pd = 0, this.value = null
	}

	function Wf(t, e, n) {
		this.Jd = t || "", this.Ha = e || null, this.A = n || new Vf
	}

	function Xf(t, e) {
		for (var n, i = e instanceof P ? e : new P(e), r = t; null !== (n = K(i));) r = new Wf(n, r, z(r.A.children, n) || new Vf), i = N(i);
		return r
	}

	function Yf(t, e) {
		O(void 0 !== e, "Cannot set value to undefined"), t.A.value = e, Zf(t)
	}

	function $f(t, e, n, i) {
		n && !i && e(t), t.R(function (t) {
			$f(t, e, !0, i)
		}), n && i && e(t)
	}

	function ag(t, e) {
		for (var n = t.parent(); null !== n && !e(n);) n = n.parent()
	}

	function Zf(t) {
		if (null !== t.Ha) {
			var e = t.Ha,
				n = t.Jd,
				i = t.e(),
				r = y(e.A.children, n);
			i && r ? (delete e.A.children[n], e.A.pd--, Zf(e)) : i || r || (e.A.children[n] = t.A, e.A.pd++, Zf(e))
		}
	}
	Hf.prototype.Ud = function (t) {
		return t.e() ? bI : new Hf(t = pe(this.Z, t, bF))
	}, Hf.prototype.e = function () {
		return this.Z.e()
	}, Hf.prototype.apply = function (t) {
		return Of(M, this.Z, t)
	}, h = Pf.prototype, h.Ud = function (e) {
		var t = Sa(this.pa, function (t) {
			return t.md === e
		});
		O(0 <= t, "removeWrite called with nonexistent writeId.");
		var n = this.pa[t];
		this.pa.splice(t, 1);
		for (var i = n.visible, r = !1, o = this.pa.length - 1; i && 0 <= o;) {
			var a = this.pa[o];
			a.visible && (t <= o && Rf(a, n.path) ? i = !1 : n.path.contains(a.path) && (r = !0)), o--
		}
		if (i) {
			if (r) this.V = Sf(this.pa, Tf, M), this.Pc = 0 < this.pa.length ? this.pa[this.pa.length - 1].md : -1;
			else if (n.Ja) this.V = this.V.Ud(n.path);
			else {
				var s = this;
				v(n.children, function (t, e) {
					s.V = s.V.Ud(n.path.o(e))
				})
			}
			return !0
		}
		return !1
	}, h.Aa = function (e, t, n, i) {
		if (n || i) {
			var r = Nf(this.V, e);
			return !i && r.e() ? t : i || null != t || null != Lf(r, M) ? (r = Sf(this.pa, function (t) {
				return (t.visible || i) && (!n || !(0 <= La(n, t.md))) && (t.path.contains(e) || e.contains(t.path))
			}, e), t = t || H, r.apply(t)) : null
		}
		return null != (r = Lf(this.V, e)) ? r : (r = Nf(this.V, e)).e() ? t : null != t || null != Lf(r, M) ? (t = t || H, r.apply(t)) : null
	}, h.Cc = function (t, e) {
		var i = H,
			n = Lf(this.V, t);
		if (n) n.L() || n.R(R, function (t, e) {
			i = i.W(t, e)
		});
		else if (e) {
			var r = Nf(this.V, t);
			e.R(R, function (t, e) {
				var n = Nf(r, new P(t)).apply(e);
				i = i.W(t, n)
			}), Ma(Mf(r), function (t) {
				i = i.W(t.name, t.U)
			})
		} else r = Nf(this.V, t), Ma(Mf(r), function (t) {
			i = i.W(t.name, t.U)
		});
		return i
	}, h.nd = function (t, e, n, i) {
		return O(n || i, "Either existingEventSnap or existingServerSnap must exist"), t = t.o(e), null != Lf(this.V, t) ? null : (t = Nf(this.V, t)).e() ? i.S(e) : t.apply(i.S(e))
	}, h.Bc = function (t, e, n) {
		t = t.o(e);
		var i = Lf(this.V, t);
		return null != i ? i : Wb(n, e) ? Nf(this.V, t).apply(n.j().T(e)) : null
	}, h.xc = function (t) {
		return Lf(this.V, t)
	}, h.qe = function (t, e, n, i, r, o) {
		var a;
		if (null == (a = Lf(t = Nf(this.V, t), M))) {
			if (null == e) return [];
			a = t.apply(e)
		}
		if ((a = a.pb(o)).e() || a.L()) return [];
		for (e = [], t = Vd(o), o = Ic(r = r ? a.dc(n, o) : a.bc(n, o)); o && e.length < i;) 0 !== t(o, n) && e.push(o), o = Ic(r);
		return e
	}, h = Uf.prototype, h.Aa = function (t, e, n) {
		return this.Z.Aa(this.Qb, t, e, n)
	}, h.Cc = function (t) {
		return this.Z.Cc(this.Qb, t)
	}, h.nd = function (t, e, n) {
		return this.Z.nd(this.Qb, t, e, n)
	}, h.xc = function (t) {
		return this.Z.xc(this.Qb.o(t))
	}, h.qe = function (t, e, n, i, r) {
		return this.Z.qe(this.Qb, t, e, n, i, r)
	}, h.Bc = function (t, e) {
		return this.Z.Bc(this.Qb, t, e)
	}, h.o = function (t) {
		return new Uf(this.Qb.o(t), this.Z)
	}, h = Wf.prototype, h.Ea = function () {
		return this.A.value
	}, h.clear = function () {
		this.A.value = null, this.A.children = {}, this.A.pd = 0, Zf(this)
	}, h.zd = function () {
		return 0 < this.A.pd
	}, h.e = function () {
		return null === this.Ea() && !this.zd()
	}, h.R = function (n) {
		var i = this;
		v(this.A.children, function (t, e) {
			n(new Wf(e, i, t))
		})
	}, h.path = function () {
		return new P(null === this.Ha ? this.Jd : this.Ha.path() + "/" + this.Jd)
	}, h.name = function () {
		return this.Jd
	}, h.parent = function () {
		return this.Ha
	};
	var bJ = /[\[\].#$\/\u0000-\u001F\u007F]/,
		cg = /[\[\].#$\u0000-\u001F\u007F]/,
		dg = /^[a-zA-Z][a-zA-Z._\-+]+$/;

	function eg(t) {
		return q(t) && 0 !== t.length && !bJ.test(t)
	}

	function fg(t) {
		return null === t || q(t) || fa(t) && !td(t) || ga(t) && y(t, ".sv")
	}

	function gg(t, e, n, i) {
		i && !p(e) || hg(E(t, 1, i), e, n)
	}

	function hg(n, t, i) {
		if (i instanceof P && (i = new nf(i, n)), !p(t)) throw Error(n + "contains undefined " + pf(i));
		if (r(t)) throw Error(n + "contains a function " + pf(i) + " with contents: " + t.toString());
		if (td(t)) throw Error(n + "contains " + t.toString() + " " + pf(i));
		if (q(t) && t.length > 10485760 / 3 && 10485760 < Pb(t)) throw Error(n + "contains a string greater than 10485760 utf8 bytes " + pf(i) + " ('" + t.substring(0, 50) + "...')");
		if (ga(t)) {
			var o = !1,
				a = !1;
			if (Fb(t, function (t, e) {
				if (".value" === t) o = !0;
				else if (".priority" !== t && ".sv" !== t && (a = !0, !eg(t))) throw Error(n + " contains an invalid key (" + t + ") " + pf(i) + '. Keys must be non-empty strings and can\'t contain ".","#","$","/","[", or "]"');
				i.push(t), hg(n, e, i), i.pop()
			}), o && a) throw Error(n + ' contains ".value" child ' + pf(i) + " in addition to actual children.")
		}
	}

	function ig(t, e) {
		var n, i;
		for (n = 0; n < e.length; n++)
			for (var r = (i = e[n]).slice(), o = 0; o < r.length; o++)
				if ((".priority" !== r[o] || o !== r.length - 1) && !eg(r[o])) throw Error(t + "contains an invalid key (" + r[o] + ") in path " + i.toString() + '. Keys must be non-empty strings and can\'t contain ".","#","$","/","[", or "]"');
		for (e.sort(mf), r = null, n = 0; n < e.length; n++) {
			if (i = e[n], null !== r && r.contains(i)) throw Error(t + "contains a path " + r.toString() + " that is ancestor of another path " + i.toString());
			r = i
		}
	}

	function jg(t, e, i) {
		var r = E(t, 1, !1);
		if (!ga(e) || da(e)) throw Error(r + " must be an object containing the children to replace.");
		var o = [];
		Fb(e, function (t, e) {
			var n = new P(t);
			if (hg(r, e, i.o(n)), ".priority" === me(n) && !fg(e)) throw Error(r + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
			o.push(n)
		}), ig(r, o)
	}

	function kg(t, e, n) {
		if (td(n)) throw Error(E(t, e, !1) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
		if (!fg(n)) throw Error(E(t, e, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
	}

	function lg(t, e, n) {
		if (!n || p(e)) switch (e) {
		case "value":
		case "child_added":
		case "child_removed":
		case "child_changed":
		case "child_moved":
			break;
		default:
			throw Error(E(t, 1, n) + 'must be a valid event type: "value","child_added","child_removed","child_changed", or "child_moved".')
		}
	}

	function mg(t, e) {
		if (p(e) && !eg(e)) throw Error(E(t, 2, !0) + 'was an invalid key: "' + e + '". Firebase keys must be non-empty strings and can\'t contain ".","#","$","/","[", or "]").')
	}

	function ng(t, e) {
		if (!q(e) || 0 === e.length || cg.test(e)) throw Error(E(t, 1, !1) + 'was an invalid path: "' + e + '". Paths must be non-empty strings and can\'t contain ".","#","$","[", or "]"')
	}

	function og(t, e) {
		if (".info" === K(e)) throw Error(t + " failed: Can't modify data under /.info/")
	}

	function pg(t, e) {
		if (!q(e)) throw Error(E(t, 1, !1) + "must be a valid credential (a string).")
	}

	function qg(t, e, n) {
		if (!q(n)) throw Error(E(t, e, !1) + "must be a valid string.")
	}

	function rg(t, e) {
		if (qg(t, 1, e), !dg.test(e)) throw Error(E(t, 1, !1) + "'" + e + "' is not a valid authentication provider.")
	}

	function sg(t, e, n, i) {
		if ((!i || p(n)) && (!ga(n) || null === n)) throw Error(E(t, e, i) + "must be a valid object.")
	}

	function tg(t, e, n) {
		if (!ga(e) || !y(e, n)) throw Error(E(t, 1, !1) + 'must contain the key "' + n + '"');
		if (!q(z(e, n))) throw Error(E(t, 1, !1) + 'must contain the key "' + n + '" with type "string"')
	}

	function ug() {
		this.set = {}
	}

	function vg(t, n) {
		v(t.set, function (t, e) {
			n(e, t)
		})
	}

	function Vc() {
		this.m = this.B = null
	}

	function wg(n, t) {
		if (t.e()) return n.B = null, !(n.m = null);
		if (null !== n.B) {
			if (n.B.L()) return !1;
			var e = n.B;
			return n.B = null, e.R(R, function (t, e) {
				n.rc(new P(t), e)
			}), wg(n, t)
		}
		return null === n.m || (e = K(t), t = N(t), n.m.contains(e) && wg(n.m.get(e), t) && n.m.remove(e), !!n.m.e() && !(n.m = null))
	}

	function Wc(t, n, i) {
		null !== t.B ? i(n, t.B) : t.R(function (t, e) {
			Wc(e, new P(n.toString() + "/" + t), i)
		})
	}
	h = ug.prototype, h.add = function (t, e) {
		this.set[t] = null === e || e
	}, h.contains = function (t) {
		return y(this.set, t)
	}, h.get = function (t) {
		return this.contains(t) ? this.set[t] : void 0
	}, h.remove = function (t) {
		delete this.set[t]
	}, h.clear = function () {
		this.set = {}
	}, h.e = function () {
		return va(this.set)
	}, h.count = function () {
		return oa(this.set)
	}, h.keys = function () {
		var n = [];
		return v(this.set, function (t, e) {
			n.push(e)
		}), n
	}, Vc.prototype.find = function (t) {
		if (null != this.B) return this.B.S(t);
		if (t.e() || null == this.m) return null;
		var e = K(t);
		return t = N(t), this.m.contains(e) ? this.m.get(e).find(t) : null
	}, Vc.prototype.rc = function (t, e) {
		if (t.e()) this.B = e, this.m = null;
		else if (null !== this.B) this.B = this.B.H(t, e);
		else {
			null == this.m && (this.m = new ug);
			var n = K(t);
			this.m.contains(n) || this.m.add(n, new Vc), n = this.m.get(n), t = N(t), n.rc(t, e)
		}
	}, Vc.prototype.R = function (n) {
		null !== this.m && vg(this.m, function (t, e) {
			n(t, e)
		})
	};
	var bK = "auth.firebase.com";

	function yg(t, e, n) {
		this.qd = t || {}, this.he = e || {}, this.fb = n || {}, this.qd.remember || (this.qd.remember = "default")
	}
	var bL = ["remember", "redirectTo"];

	function Ag(t) {
		var n = {},
			i = {};
		return Fb(t || {}, function (t, e) {
			0 <= La(bL, t) ? n[t] = e : i[t] = e
		}), new yg(n, {}, i)
	}

	function Bg(t, e) {
		this.Ue = ["session", t.Rd, t.lc].join(":"), this.ee = e
	}

	function Cg() {
		return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
	}

	function Dg() {
		return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg())
	}

	function Eg() {
		return "undefined" != typeof location && /^file:\//.test(location.href)
	}

	function Fg(t) {
		var e = Cg();
		if ("" === e) return !1;
		if ("Microsoft Internet Explorer" === navigator.appName) {
			if ((e = e.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < e.length) return parseFloat(e[1]) >= t
		} else if (-1 < e.indexOf("Trident") && (e = e.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < e.length) return parseFloat(e[1]) >= t;
		return !1
	}

	function Gg() {
		var t, e = window.opener.frames;
		for (t = e.length - 1; 0 <= t; t--) try {
			if (e[t].location.protocol === window.location.protocol && e[t].location.host === window.location.host && "__winchan_relay_frame" === e[t].name) return e[t]
		} catch (t) {}
		return null
	}

	function Hg(t, e, n) {
		t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener && t.addEventListener(e, n, !1)
	}

	function Ig(t, e, n) {
		t.detachEvent ? t.detachEvent("on" + e, n) : t.removeEventListener && t.removeEventListener(e, n, !1)
	}

	function Jg(t) {
		/^https?:\/\//.test(t) || (t = window.location.href);
		var e = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);
		return e ? e[1] : t
	}

	function Kg(t) {
		var e = "";
		try {
			var n = Jb(t = t.replace(/.*\?/, ""));
			n && y(n, "__firebase_request_key") && (e = z(n, "__firebase_request_key"))
		} catch (t) {}
		return e
	}

	function Lg() {
		try {
			var t = (t = (t = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "")).replace(/\?$/, "")).replace(/^#+$/, "");
			document.location.hash = t
		} catch (t) {}
	}

	function Mg() {
		var t = sd(bK);
		return t.scheme + "://" + t.host + "/v2"
	}

	function Ng(t) {
		return Mg() + "/" + t + "/auth/channel"
	}

	function Og(t) {
		var e = this;
		if (this.hb = t, this.fe = "*", Fg(8) ? this.Uc = this.Cd = Gg() : (this.Uc = window.opener, this.Cd = window), !e.Uc) throw "Unable to find relay frame";
		Hg(this.Cd, "message", u(this.nc, this)), Hg(this.Cd, "message", u(this.Ff, this));
		try {
			Pg(this, {
				a: "ready"
			})
		} catch (t) {
			Hg(this.Uc, "load", function () {
				Pg(e, {
					a: "ready"
				})
			})
		}
		Hg(window, "unload", u(this.Ng, this))
	}

	function Pg(t, e) {
		e = G(e), Fg(8) ? t.Uc.doPost(e, t.fe) : t.Uc.postMessage(e, t.fe)
	}

	function Qg(t) {
		this.tc = Fa() + Fa() + Fa(), this.Kf = t
	}
	Bg.prototype.set = function (t, e) {
		if (!e) {
			if (!this.ee.length) throw Error("fb.login.SessionManager : No storage options available!");
			e = this.ee[0]
		}
		e.set(this.Ue, t)
	}, Bg.prototype.get = function () {
		var t = Oa(this.ee, u(this.Bg, this));
		return Va(t = Na(t, function (t) {
			return null !== t
		}), function (t, e) {
			return Dd(e.token) - Dd(t.token)
		}), 0 < t.length ? t.shift() : null
	}, Bg.prototype.Bg = function (t) {
		try {
			var e = t.get(this.Ue);
			if (e && e.token) return e
		} catch (t) {}
		return null
	}, Bg.prototype.clear = function () {
		var e = this;
		Ma(this.ee, function (t) {
			t.remove(e.Ue)
		})
	}, Og.prototype.nc = function (t) {
		var e, n = this;
		try {
			e = Rb(t.data)
		} catch (t) {}
		e && "request" === e.a && (Ig(window, "message", this.nc), this.fe = t.origin, this.hb && setTimeout(function () {
			n.hb(n.fe, e.d, function (t, e) {
				n.mg = !e, n.hb = void 0, Pg(n, {
					a: "response",
					d: t,
					forceKeepWindowOpen: e
				})
			})
		}, 0))
	}, Og.prototype.Ng = function () {
		try {
			Ig(this.Cd, "message", this.Ff)
		} catch (t) {}
		this.hb && (Pg(this, {
			a: "error",
			d: "unknown closed window"
		}), this.hb = void 0);
		try {
			window.close()
		} catch (t) {}
	}, Og.prototype.Ff = function (t) {
		if (this.mg && "die" === t.data) try {
			window.close()
		} catch (t) {}
	}, Qg.prototype.open = function (t, e) {
		cd.set("redirect_request_id", this.tc), cd.set("redirect_request_id", this.tc), e.requestId = this.tc, e.redirectTo = e.redirectTo || window.location.href, t += (/\?/.test(t) ? "" : "?") + Ib(e), window.location = t
	}, Qg.isAvailable = function () {
		return !Eg() && !Dg()
	}, Qg.prototype.Fc = function () {
		return "redirect"
	};
	var bM = {
		NETWORK_ERROR: "Unable to contact the Firebase server.",
		SERVER_ERROR: "An unknown server error occurred.",
		TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.",
		REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.",
		USER_CANCELLED: "The user cancelled authentication."
	};

	function Sg(t) {
		var e = Error(z(bM, t), t);
		return e.code = t, e
	}

	function Tg(t) {
		var e;
		(e = !t.window_features) || (e = -1 !== (e = Cg()).indexOf("Fennec/") || -1 !== e.indexOf("Firefox/") && -1 !== e.indexOf("Android")), e && (t.window_features = void 0), t.window_name || (t.window_name = "_blank"), this.options = t
	}

	function Ug(t) {
		t.method || (t.method = "GET"), t.headers || (t.headers = {}), t.headers.content_type || (t.headers.content_type = "application/json"), t.headers.content_type = t.headers.content_type.toLowerCase(), this.options = t
	}

	function Vg(t) {
		this.tc = Fa() + Fa() + Fa(), this.Kf = t
	}

	function Wg(t) {
		t.callback_parameter || (t.callback_parameter = "callback"), this.options = t, window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {}
	}

	function Xg(n, i, r) {
		setTimeout(function () {
			try {
				var t = document.createElement("script");
				t.type = "text/javascript", t.id = n, t.async = !0, t.src = i, t.onerror = function () {
					var t = document.getElementById(n);
					null !== t && t.parentNode.removeChild(t), r && r(Sg("NETWORK_ERROR"))
				};
				var e = document.getElementsByTagName("head");
				(e && 0 != e.length ? e[0] : document.documentElement).appendChild(t)
			} catch (t) {
				r && r(Sg("NETWORK_ERROR"))
			}
		}, 0)
	}

	function Yg(t, e, n, i) {
		ff.call(this, ["auth_status"]), this.G = t, this.hf = e, this.ih = n, this.Pe = i, this.wc = new Bg(t, [bq, cd]), this.qb = null, this.We = !1, Zg(this)
	}

	function Zg(n) {
		cd.get("redirect_request_id") && $g(n);
		var i = n.wc.get();
		i && i.token ? (ah(n, i), n.hf(i.token, function (t, e) {
			bh(n, t, e, !1, i.token, i)
		}, function (t, e) {
			ch(n, "resumeSession()", t, e)
		})) : ah(n, null)
	}

	function dh(n, i, r, o, a, s) {
		"firebaseio-demo.com" === n.G.domain && S("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com."), n.hf(i, function (t, e) {
			bh(n, t, e, !0, i, r, o || {}, a)
		}, function (t, e) {
			ch(n, "auth()", t, e, s)
		})
	}

	function eh(t, r) {
		t.wc.clear(), ah(t, null), t.ih(function (t, e) {
			if ("ok" === t) T(r, null);
			else {
				var n = (t || "error").toUpperCase(),
					i = n;
				e && (i += ": " + e), (i = Error(i)).code = n, T(r, i)
			}
		})
	}

	function bh(t, e, n, i, r, o, a, s) {
		"ok" === e ? (i && (e = n.auth, o.auth = e, o.expires = n.expires, o.token = Ed(r) ? r : "", n = null, e && y(e, "uid") ? n = z(e, "uid") : y(o, "uid") && (n = z(o, "uid")), o.uid = n, n = "custom", e && y(e, "provider") ? n = z(e, "provider") : y(o, "provider") && (n = z(o, "provider")), o.provider = n, t.wc.clear(), Ed(r) && (n = bq, "sessionOnly" === (a = a || {}).remember && (n = cd), "none" !== a.remember && t.wc.set(o, n)), ah(t, o)), T(s, null, o)) : (t.wc.clear(), ah(t, null), o = t = (e || "error").toUpperCase(), n && (o += ": " + n), (o = Error(o)).code = t, T(s, o))
	}

	function ch(t, e, n, i, r) {
		S(e + " was canceled: " + i), t.wc.clear(), ah(t, null), (t = Error(i)).code = n.toUpperCase(), T(r, t)
	}

	function fh(t, e, n, i, r) {
		gh(t), hh(t, [Ug, Wg], "/auth/" + e, n = new yg(i || {}, {}, n || {}), r)
	}

	function ih(t, e, n, i) {
		gh(t);
		var r = [Tg, Vg];
		n = Ag(n);
		var o = 625;
		"anonymous" === e || "password" === e ? setTimeout(function () {
			T(i, Sg("TRANSPORT_UNAVAILABLE"))
		}, 0) : ("github" === e && (o = 1025), n.he.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=" + o + ",top=" + ("object" == typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" == typeof screen ? .5 * (screen.width - o) : 0), n.he.relay_url = Ng(t.G.lc), n.he.requestWithCredential = u(t.uc, t), hh(t, r, "/auth/" + e, n, i))
	}

	function $g(t) {
		if (n = cd.get("redirect_request_id")) {
			var e = cd.get("redirect_client_options");
			cd.remove("redirect_request_id"), cd.remove("redirect_client_options");
			var n, i = [Ug, Wg];
			e = new yg(e, {}, n = {
				requestId: n,
				requestKey: Kg(document.location.hash)
			});
			t.We = !0, Lg(), hh(t, i, "/auth/session", e, function () {
				this.We = !1
			}.bind(t))
		}
	}

	function hh(n, t, e, i, r) {
		jh(n, t, e, i, function (t, e) {
			!t && e && e.token && e.uid ? dh(n, e.token, e, i.qd, function (t, e) {
				t ? T(r, t) : T(r, null, e)
			}) : T(r, t || Sg("UNKNOWN_ERROR"))
		})
	}

	function jh(t, e, n, i, r) {
		0 === (e = Na(e, function (t) {
			return "function" == typeof t.isAvailable && t.isAvailable()
		})).length ? setTimeout(function () {
			T(r, Sg("TRANSPORT_UNAVAILABLE"))
		}, 0) : (e = new(e.shift())(i.he), (i = Gb(i.fb)).v = "js-" + bk, i.transport = e.Fc(), i.suppress_status_codes = !0, t = Mg() + "/" + t.G.lc + n, e.open(t, i, function (t, e) {
			if (t) T(r, t);
			else if (e && e.error) {
				var n = Error(e.error.message);
				n.code = e.error.code, n.details = e.error.details, T(r, n)
			} else T(r, null, e)
		}))
	}

	function ah(t, e) {
		var n = null !== t.qb || null !== e;
		t.qb = e, n && t.ie("auth_status", e), t.Pe(null !== e)
	}

	function gh(t) {
		var e = t.G;
		if ("firebaseio.com" !== e.domain && "firebaseio-demo.com" !== e.domain && "auth.firebase.com" === bK) throw Error("This custom Firebase server ('" + t.G.domain + "') does not support delegated login.")
	}
	Tg.prototype.open = function (t, e, n) {
		function i(t) {
			if (o && (document.body.removeChild(o), o = void 0), u && (u = clearInterval(u)), Ig(window, "message", r), Ig(window, "unload", i), c && !t) try {
				c.close()
			} catch (t) {
				a.postMessage("die", l)
			}
			c = a = void 0
		}

		function r(t) {
			if (t.origin === l) try {
				var e = Rb(t.data);
				"ready" === e.a ? a.postMessage(h, l) : "error" === e.a ? (i(!1), n && (n(e.d), n = null)) : "response" === e.a && (i(e.forceKeepWindowOpen), n && (n(null, e.d), n = null))
			} catch (t) {}
		}
		var o, a, s = Fg(8);
		if (!this.options.relay_url) return n(Error("invalid arguments: origin of url and relay_url must match"));
		var l = Jg(t);
		if (l !== Jg(this.options.relay_url)) n && setTimeout(function () {
			n(Error("invalid arguments: origin of url and relay_url must match"))
		}, 0);
		else {
			s && ((o = document.createElement("iframe")).setAttribute("src", this.options.relay_url), o.style.display = "none", o.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(o), a = o.contentWindow), t += (/\?/.test(t) ? "" : "?") + Ib(e);
			var c = window.open(t, this.options.window_name, this.options.window_features);
			a || (a = c);
			var u = setInterval(function () {
					c && c.closed && (i(!1), n && (n(Sg("USER_CANCELLED")), n = null))
				}, 500),
				h = G({
					a: "request",
					d: e
				});
			Hg(window, "unload", i), Hg(window, "message", r)
		}
	}, Tg.isAvailable = function () {
		var t;
		return (t = "postMessage" in window && !Eg()) && ((t = Dg() || "undefined" != typeof navigator && (!!Cg().match(/Windows Phone/) || !!window.Windows && /^ms-appx:/.test(location.href))) || (t = Cg(), t = "undefined" != typeof navigator && "undefined" != typeof window && !!(t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i) || t.match(/CriOS/) || t.match(/Twitter for iPhone/) || t.match(/FBAN\/FBIOS/) || window.navigator.standalone)), t = !t), t && !Cg().match(/PhantomJS/)
	}, Tg.prototype.Fc = function () {
		return "popup"
	}, Ug.prototype.open = function (t, e, n) {
		function i() {
			n && (n(Sg("REQUEST_INTERRUPTED")), n = null)
		}
		var r, o = new XMLHttpRequest,
			a = this.options.method.toUpperCase();
		if (Hg(window, "beforeunload", i), o.onreadystatechange = function () {
			if (n && 4 === o.readyState) {
				var t;
				if (200 <= o.status && o.status < 300) {
					try {
						t = Rb(o.responseText)
					} catch (t) {}
					n(null, t)
				} else 500 <= o.status && o.status < 600 ? n(Sg("SERVER_ERROR")) : n(Sg("NETWORK_ERROR"));
				n = null, Ig(window, "beforeunload", i)
			}
		}, "GET" === a) t += (/\?/.test(t) ? "" : "?") + Ib(e), r = null;
		else {
			var s = this.options.headers.content_type;
			"application/json" === s && (r = G(e)), "application/x-www-form-urlencoded" === s && (r = Ib(e))
		}
		for (var l in o.open(a, t, !0), ya(t = {
			"X-Requested-With": "XMLHttpRequest",
			Accept: "application/json;text/plain"
		}, this.options.headers), t) o.setRequestHeader(l, t[l]);
		o.send(r)
	}, Ug.isAvailable = function () {
		var t;
		return (t = !!window.XMLHttpRequest) && (t = !((t = Cg()).match(/MSIE/) || t.match(/Trident/)) || Fg(10)), t
	}, Ug.prototype.Fc = function () {
		return "json"
	}, Vg.prototype.open = function (t, e, i) {
		function o() {
			i && (i(Sg("USER_CANCELLED")), i = null)
		}
		var a, s = this,
			l = sd(bK);
		e.requestId = this.tc, e.redirectTo = l.scheme + "://" + l.host + "/blank/page.html", t += /\?/.test(t) ? "" : "?", t += Ib(e), (a = window.open(t, "_blank", "location=no")) && r(a.addEventListener) ? (a.addEventListener("loadstart", function (t) {
			var e;
			if (e = t && t.url) t: {
				try {
					var n = document.createElement("a");
					n.href = t.url, e = n.host === l.host && "/blank/page.html" === n.pathname;
					break t
				} catch (t) {}
				e = !1
			}
			e && (t = Kg(t.url), a.removeEventListener("exit", o), a.close(), t = new yg(null, null, {
				requestId: s.tc,
				requestKey: t
			}), s.Kf.requestWithCredential("/auth/session", t, i), i = null)
		}), a.addEventListener("exit", o)) : i(Sg("TRANSPORT_UNAVAILABLE"))
	}, Vg.isAvailable = function () {
		return Dg()
	}, Vg.prototype.Fc = function () {
		return "redirect"
	}, Wg.prototype.open = function (t, e, n) {
		function i() {
			n && (n(Sg("REQUEST_INTERRUPTED")), n = null)
		}
		var r = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
		e[this.options.callback_parameter] = "__firebase_auth_jsonp." + r, t += (/\?/.test(t) ? "" : "?") + Ib(e), Hg(window, "beforeunload", i), window.__firebase_auth_jsonp[r] = function (t) {
			n && (n(null, t), n = null), setTimeout(function () {
				window.__firebase_auth_jsonp[r] = void 0, va(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
				try {
					var t = document.getElementById(r);
					t && t.parentNode.removeChild(t)
				} catch (t) {}
			}, 1), Ig(window, "beforeunload", i)
		}, Xg(r, t, n)
	}, Wg.isAvailable = function () {
		return "undefined" != typeof document && null != document.createElement
	}, Wg.prototype.Fc = function () {
		return "json"
	}, ka(Yg, ff), h = Yg.prototype, h.Be = function () {
		return this.qb || null
	}, h.ve = function (t, n) {
		gh(this);
		var e = Ag(t);
		e.fb._method = "POST", this.uc("/users", e, function (t, e) {
			t ? T(n, t) : T(n, t, e)
		})
	}, h.Xe = function (t, n) {
		var i = this;
		gh(this);
		var e = "/users/" + encodeURIComponent(t.email),
			r = Ag(t);
		r.fb._method = "DELETE", this.uc(e, r, function (t, e) {
			!t && e && e.uid && i.qb && i.qb.uid && i.qb.uid === e.uid && eh(i), T(n, t)
		})
	}, h.se = function (t, e) {
		gh(this);
		var n = "/users/" + encodeURIComponent(t.email) + "/password",
			i = Ag(t);
		i.fb._method = "PUT", i.fb.password = t.newPassword, this.uc(n, i, function (t) {
			T(e, t)
		})
	}, h.re = function (t, e) {
		gh(this);
		var n = "/users/" + encodeURIComponent(t.oldEmail) + "/email",
			i = Ag(t);
		i.fb._method = "PUT", i.fb.email = t.newEmail, i.fb.password = t.password, this.uc(n, i, function (t) {
			T(e, t)
		})
	}, h.Ze = function (t, e) {
		gh(this);
		var n = "/users/" + encodeURIComponent(t.email) + "/password",
			i = Ag(t);
		i.fb._method = "POST", this.uc(n, i, function (t) {
			T(e, t)
		})
	}, h.uc = function (t, e, n) {
		jh(this, [Ug, Wg], t, e, n)
	}, h.Ee = function (t) {
		return O("auth_status" === t, 'initial event must be of type "auth_status"'), this.We ? null : [this.qb]
	};
	var bN = "websocket",
		hd = "long_polling",
		oh, ph;

	function kh(t) {
		this.nc = t, this.Qd = [], this.Wb = 0, this.te = -1, this.Jb = null
	}

	function lh(t, e, n) {
		t.te = e, t.Jb = n, t.te < t.Wb && (t.Jb(), t.Jb = null)
	}

	function mh(t, e, n) {
		for (t.Qd[e] = n; t.Qd[t.Wb];) {
			var i = t.Qd[t.Wb];
			delete t.Qd[t.Wb];
			for (var r = 0; r < i.length; ++r)
				if (i[r]) {
					var o = t;
					gc(function () {
						o.nc(i[r])
					})
				}
			if (t.Wb === t.te) {
				t.Jb && (clearTimeout(t.Jb), t.Jb(), t.Jb = null);
				break
			}
			t.Wb++
		}
	}

	function nh(t, e, n, i) {
		this.ue = t, this.f = pd(t), this.rb = this.sb = 0, this.Xa = uc(e), this.Xf = n, this.Kc = !1, this.Fb = i, this.ld = function (t) {
			return fd(e, hd, t)
		}
	}

	function rh(t, e) {
		var n = G(e).length;
		t.rb += n, rc(t.Xa, "bytes_received", n)
	}

	function qh(e, t, n, i) {
		if (this.ld = i, this.lb = n, this.Te = new ug, this.cd = [], this.we = Math.floor(1e8 * Math.random()), this.$d = !0, this.ke = br(), window["pLPCommand" + this.ke] = e, window["pRTLPCB" + this.ke] = t, (e = document.createElement("iframe")).style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
		document.body.appendChild(e);
		try {
			e.contentWindow.document || fc("No IE domain setting required")
		} catch (t) {
			e.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
		}
		e.contentDocument ? e.jb = e.contentDocument : e.contentWindow ? e.jb = e.contentWindow.document : e.document && (e.jb = e.document), this.Ga = e, e = "", this.Ga.src && "javascript:" === this.Ga.src.substr(0, 11) && (e = '<script>document.domain="' + document.domain + '";<\/script>'), e = "<html><body>" + e + "</body></html>";
		try {
			this.Ga.jb.open(), this.Ga.jb.write(e), this.Ga.jb.close()
		} catch (t) {
			fc("frame writing exception"), t.stack && fc(t.stack), fc(t)
		}
	}

	function th(t) {
		if (t.oe && t.$d && t.Te.count() < (0 < t.cd.length ? 2 : 1)) {
			t.we++, (e = {}).id = t.Gg, e.pw = t.Hg, e.ser = t.we;
			for (var e = t.ld(e), n = "", i = 0; 0 < t.cd.length && t.cd[0].of.length + 30 + n.length <= 1870;) {
				var r = t.cd.shift();
				n = n + "&seg" + i + "=" + r.Yg + "&ts" + i + "=" + r.hh + "&d" + i + "=" + r.of;
				i++
			}
			return uh(t, e + n, t.we), !0
		}
		return !1
	}

	function uh(t, e, n) {
		function i() {
			t.Te.remove(n), th(t)
		}
		t.Te.add(n, 1);
		var r = setTimeout(i, Math.floor(25e3));
		sh(t, e, function () {
			clearTimeout(r), i()
		})
	}

	function sh(t, n, i) {
		setTimeout(function () {
			try {
				if (t.$d) {
					var e = t.Ga.jb.createElement("script");
					e.type = "text/javascript", e.async = !0, e.src = n, e.onload = e.onreadystatechange = function () {
						var t = e.readyState;
						t && "loaded" !== t && "complete" !== t || (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), i())
					}, e.onerror = function () {
						fc("Long-poll script failed to load: " + n), t.$d = !1, t.close()
					}, t.Ga.jb.body.appendChild(e)
				}
			} catch (t) {}
		}, Math.floor(1))
	}
	nh.prototype.open = function (t, e) {
		this.mf = 0, this.na = e, this.Ef = new kh(t), this.Db = !1;
		var o = this;
		this.ub = setTimeout(function () {
			o.f("Timed out trying to connect."), o.bb(), o.ub = null
		}, Math.floor(3e4)), ud(function () {
			if (!o.Db) {
				o.Wa = new qh(function (t, e, n, i, r) {
					if (rh(o, arguments), o.Wa)
						if (o.ub && (clearTimeout(o.ub), o.ub = null), o.Kc = !0, "start" == t) o.id = e, o.Mf = n;
						else {
							if ("close" !== t) throw Error("Unrecognized command received: " + t);
							e ? (o.Wa.$d = !1, lh(o.Ef, e, function () {
								o.bb()
							})) : o.bb()
						}
				}, function (t, e) {
					rh(o, arguments), mh(o.Ef, t, e)
				}, function () {
					o.bb()
				}, o.ld);
				var t = {
					start: "t"
				};
				t.ser = Math.floor(1e8 * Math.random()), o.Wa.ke && (t.cb = o.Wa.ke), t.v = "5", o.Xf && (t.s = o.Xf), o.Fb && (t.ls = o.Fb), "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (t.r = "f"), t = o.ld(t), o.f("Connecting via long-poll to " + t), sh(o.Wa, t, function () {})
			}
		})
	}, nh.prototype.start = function () {
		var t = this.Wa,
			e = this.Mf;
		for (t.Gg = this.id, t.Hg = e, t.oe = !0; th(t););
		t = this.id, e = this.Mf, this.kc = document.createElement("iframe");
		var n = {
			dframe: "t"
		};
		n.id = t, n.pw = e, this.kc.src = this.ld(n), this.kc.style.display = "none", document.body.appendChild(this.kc)
	}, nh.isAvailable = function () {
		return oh || !ph && "undefined" != typeof document && null != document.createElement && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.kh) && !0
	}, h = nh.prototype, h.Hd = function () {}, h.fd = function () {
		this.Db = !0, this.Wa && (this.Wa.close(), this.Wa = null), this.kc && (document.body.removeChild(this.kc), this.kc = null), this.ub && (clearTimeout(this.ub), this.ub = null)
	}, h.bb = function () {
		this.Db || (this.f("Longpoll is closing itself"), this.fd(), this.na && (this.na(this.Kc), this.na = null))
	}, h.close = function () {
		this.Db || (this.f("Longpoll is being closed."), this.fd())
	}, h.send = function (t) {
		t = G(t), this.sb += t.length, rc(this.Xa, "bytes_sent", t.length), t = yd(t = nb(t = Ob(t), !0), 1840);
		for (var e = 0; e < t.length; e++) {
			var n = this.Wa;
			n.cd.push({
				Yg: this.mf,
				hh: t.length,
				of: t[e]
			}), n.oe && th(n), this.mf++
		}
	}, qh.prototype.close = function () {
		if (this.oe = !1, this.Ga) {
			this.Ga.jb.body.innerHTML = "";
			var t = this;
			setTimeout(function () {
				null !== t.Ga && (document.body.removeChild(t.Ga), t.Ga = null)
			}, Math.floor(0))
		}
		var e = this.lb;
		e && (this.lb = null, e())
	};
	var bO = null,
		xh;

	function wh(t, e, n, i) {
		this.ue = t, this.f = pd(this.ue), this.frames = this.Nc = null, this.rb = this.sb = this.ff = 0, this.Xa = uc(e), t = {
			v: "5"
		}, "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (t.r = "f"), n && (t.s = n), i && (t.ls = i), this.jf = fd(e, bN, t)
	}

	function zh(t, e) {
		if (t.frames.push(e), t.frames.length == t.ff) {
			var n = t.frames.join("");
			t.frames = null, n = Rb(n), t.Lg(n)
		}
	}

	function yh(t) {
		clearInterval(t.Nc), t.Nc = setInterval(function () {
			t.La && Ah(t, "0"), yh(t)
		}, Math.floor(45e3))
	}

	function Ah(e, t) {
		try {
			e.La.send(t)
		} catch (t) {
			e.f("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(u(e.bb, e), 0)
		}
	}

	function Bh(t) {
		Ch(this, t)
	}
	"undefined" != typeof MozWebSocket ? bO = MozWebSocket : "undefined" != typeof WebSocket && (bO = WebSocket), wh.prototype.open = function (t, e) {
		this.lb = e, this.Lg = t, this.f("Websocket connecting to " + this.jf), this.Kc = !1, bq.set("previous_websocket_failure", !0);
		try {
			this.La = new bO(this.jf)
		} catch (t) {
			this.f("Error instantiating WebSocket.");
			var n = t.message || t.data;
			return n && this.f(n), void this.bb()
		}
		var i = this;
		this.La.onopen = function () {
			i.f("Websocket connected."), i.Kc = !0
		}, this.La.onclose = function () {
			i.f("Websocket connection was disconnected."), i.La = null, i.bb()
		}, this.La.onmessage = function (t) {
			if (null !== i.La)
				if (t = t.data, i.rb += t.length, rc(i.Xa, "bytes_received", t.length), yh(i), null !== i.frames) zh(i, t);
				else {
					t: {
						if (O(null === i.frames, "We already have a frame buffer"), t.length <= 6) {
							var e = Number(t);
							if (!isNaN(e)) {
								i.ff = e, i.frames = [], t = null;
								break t
							}
						}
						i.ff = 1, i.frames = []
					}
					null !== t && zh(i, t)
				}
		}, this.La.onerror = function (t) {
			i.f("WebSocket error. Closing connection."), (t = t.message || t.data) && i.f(t), i.bb()
		}
	}, wh.prototype.start = function () {}, wh.isAvailable = function () {
		var t = !1;
		if ("undefined" != typeof navigator && navigator.userAgent) {
			var e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
			e && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0)
		}
		return !t && null !== bO && !xh
	}, wh.responsesRequiredToBeHealthy = 2, wh.healthyTimeout = 3e4, h = wh.prototype, h.Hd = function () {
		bq.remove("previous_websocket_failure")
	}, h.send = function (t) {
		yh(this), t = G(t), this.sb += t.length, rc(this.Xa, "bytes_sent", t.length), 1 < (t = yd(t, 16384)).length && Ah(this, String(t.length));
		for (var e = 0; e < t.length; e++) Ah(this, t[e])
	}, h.fd = function () {
		this.Db = !0, this.Nc && (clearInterval(this.Nc), this.Nc = null), this.La && (this.La.close(), this.La = null)
	}, h.bb = function () {
		this.Db || (this.f("WebSocket is closing itself"), this.fd(), this.lb && (this.lb(this.Kc), this.lb = null))
	}, h.close = function () {
		this.Db || (this.f("WebSocket is being closed"), this.fd())
	};
	var bP = [nh, wh];

	function Ch(t, e) {
		var n = wh && wh.isAvailable(),
			i = n && !(bq.Af || !0 === bq.get("previous_websocket_failure"));
		if (e.jh && (n || S("wss:// URL used, but browser isn't known to support websockets. Trying anyway."), i = !0), i) t.jd = [wh];
		else {
			var r = t.jd = [];
			zd(bP, function (t, e) {
				e && e.isAvailable() && r.push(e)
			})
		}
	}

	function Eh(t) {
		if (0 < t.jd.length) return t.jd[0];
		throw Error("No transports available")
	}

	function Fh(t, e, n, i, r, o, a) {
		this.id = t, this.f = pd("c:" + this.id + ":"), this.nc = n, this.Zc = i, this.na = r, this.Re = o, this.G = e, this.Pd = [], this.kf = 0, this.Wf = new Bh(e), this.N = 0, this.Fb = a, this.f("Connection created"), Gh(this)
	}

	function Gh(t) {
		var e = Eh(t.Wf);
		t.K = new e("c:" + t.id + ":" + t.kf++, t.G, void 0, t.Fb), t.Ve = e.responsesRequiredToBeHealthy || 0;
		var n = Hh(t, t.K),
			i = Ih(t, t.K);
		t.kd = t.K, t.ed = t.K, t.F = null, t.Eb = !1, setTimeout(function () {
			t.K && t.K.open(n, i)
		}, Math.floor(0)), 0 < (e = e.healthyTimeout || 0) && (t.Bd = setTimeout(function () {
			t.Bd = null, t.Eb || (t.K && 102400 < t.K.rb ? (t.f("Connection exceeded healthy timeout but has received " + t.K.rb + " bytes. Marking connection healthy."), t.Eb = !0, t.K.Hd()) : t.K && 10240 < t.K.sb ? t.f("Connection exceeded healthy timeout but has sent " + t.K.sb + " bytes. Leaving connection alive.") : (t.f("Closing unhealthy connection after timeout."), t.close()))
		}, Math.floor(e)))
	}

	function Ih(e, n) {
		return function (t) {
			n === e.K ? (e.K = null, t || 0 !== e.N ? 1 === e.N && e.f("Realtime connection lost.") : (e.f("Realtime connection failed."), "s-" === e.G.ab.substr(0, 2) && (bq.remove("host:" + e.G.host), e.G.ab = e.G.host)), e.close()) : n === e.F ? (e.f("Secondary connection lost."), t = e.F, e.F = null, e.kd !== t && e.ed !== t || e.close()) : e.f("closing an old connection")
		}
	}

	function Hh(r, o) {
		return function (t) {
			if (2 != r.N)
				if (o === r.ed) {
					var e = wd("t", t);
					if (t = wd("d", t), "c" == e) {
						if (e = wd("t", t), "d" in t)
							if (t = t.d, "h" === e) {
								e = t.ts;
								var n = t.v,
									i = t.h;
								r.Uf = t.s, ed(r.G, i), 0 == r.N && (r.K.start(), Jh(r, r.K, e), "5" !== n && S("Protocol version mismatch detected"), (t = 1 < (t = r.Wf).jd.length ? t.jd[1] : null) && Kh(r, t))
							} else if ("n" === e) {
							for (r.f("recvd end transmission on primary"), r.ed = r.F, t = 0; t < r.Pd.length; ++t) r.Ld(r.Pd[t]);
							r.Pd = [], Lh(r)
						} else "s" === e ? (r.f("Connection shutdown command received. Shutting down..."), r.Re && (r.Re(t), r.Re = null), r.na = null, r.close()) : "r" === e ? (r.f("Reset packet received. New host: " + t), ed(r.G, t), 1 === r.N ? r.close() : (Mh(r), Gh(r))) : "e" === e ? qd("Server Error: " + t) : "o" === e ? (r.f("got pong on primary."), Nh(r), Oh(r)) : qd("Unknown control packet command: " + e)
					} else "d" == e && r.Ld(t)
				} else if (o === r.F)
				if (e = wd("t", t), t = wd("d", t), "c" == e) "t" in t && ("a" === (t = t.t) ? Ph(r) : "r" === t ? (r.f("Got a reset on secondary, closing it"), r.F.close(), r.kd !== r.F && r.ed !== r.F || r.close()) : "o" === t && (r.f("got pong on secondary."), r.Tf--, Ph(r)));
				else {
					if ("d" != e) throw Error("Unknown protocol layer: " + e);
					r.Pd.push(t)
				} else r.f("message on old connection")
		}
	}

	function Lh(t) {
		t.kd === t.F && t.ed === t.F && (t.f("cleaning up and promoting a connection: " + t.F.ue), t.K = t.F, t.F = null)
	}

	function Ph(t) {
		t.Tf <= 0 ? (t.f("Secondary connection is healthy."), t.Eb = !0, t.F.Hd(), t.F.start(), t.f("sending client ack on secondary"), t.F.send({
			t: "c",
			d: {
				t: "a",
				d: {}
			}
		}), t.f("Ending transmission on primary"), t.K.send({
			t: "c",
			d: {
				t: "n",
				d: {}
			}
		}), t.kd = t.F, Lh(t)) : (t.f("sending ping on secondary."), t.F.send({
			t: "c",
			d: {
				t: "p",
				d: {}
			}
		}))
	}

	function Nh(t) {
		t.Eb || (t.Ve--, t.Ve <= 0 && (t.f("Primary connection is healthy."), t.Eb = !0, t.K.Hd()))
	}

	function Kh(t, e) {
		t.F = new e("c:" + t.id + ":" + t.kf++, t.G, t.Uf), t.Tf = e.responsesRequiredToBeHealthy || 0, t.F.open(Hh(t, t.F), Ih(t, t.F)), setTimeout(function () {
			t.F && (t.f("Timed out trying to upgrade."), t.F.close())
		}, Math.floor(6e4))
	}

	function Jh(t, e, n) {
		t.f("Realtime connection established."), t.K = e, t.N = 1, t.Zc && (t.Zc(n, t.Uf), t.Zc = null), 0 === t.Ve ? (t.f("Primary connection is healthy."), t.Eb = !0) : setTimeout(function () {
			Oh(t)
		}, Math.floor(5e3))
	}

	function Oh(t) {
		t.Eb || 1 !== t.N || (t.f("sending ping on primary."), Qh(t, {
			t: "c",
			d: {
				t: "p",
				d: {}
			}
		}))
	}

	function Qh(t, e) {
		if (1 !== t.N) throw "Connection is not connected";
		t.kd.send(e)
	}

	function Mh(t) {
		t.f("Shutting down all connections"), t.K && (t.K.close(), t.K = null), t.F && (t.F.close(), t.F = null), t.Bd && (clearTimeout(t.Bd), t.Bd = null)
	}

	function Rh(t, e, n, i) {
		this.id = bQ++, this.f = pd("p:" + this.id + ":"), this.Bf = this.Ie = !1, this.ba = {}, this.sa = [], this.ad = 0, this.Yc = [], this.qa = !1, this.eb = 1e3, this.Id = 3e5, this.Kb = e, this.Xc = n, this.Se = i, this.G = t, this.wb = this.Ca = this.Ma = this.Fb = this.$e = null, this.Sb = !1, this.Wd = {}, this.Xg = 0, this.rf = !0, this.Oc = this.Ke = null, Th(this, 0), kf.yb().Ib("visible", this.Og, this), -1 === t.host.indexOf("fblocal") && jf.yb().Ib("online", this.Mg, this)
	}
	Fh.prototype.Ia = function (t) {
		Qh(this, {
			t: "d",
			d: t
		})
	}, Fh.prototype.Ld = function (t) {
		Nh(this), this.nc(t)
	}, Fh.prototype.close = function () {
		2 !== this.N && (this.f("Closing realtime connection."), this.N = 2, Mh(this), this.na && (this.na(), this.na = null))
	};
	var bQ = 0,
		Uh = 0;

	function Vh(r, o) {
		var a = o.Ug,
			s = a.path.toString(),
			l = a.wa();
		r.f("Listen on " + s + " for " + l);
		var t = {
			p: s
		};
		o.tag && (t.q = Ge(a.n), t.t = o.tag), t.h = o.Ad(), r.Ia("q", t, function (t) {
			var e = t.d,
				n = t.s;
			if (e && "object" == typeof e && y(e, "w")) {
				var i = z(e, "w");
				da(i) && 0 <= La(i, "no_index") && S('Using an unspecified index. Consider adding ".indexOn": "' + a.n.g.toString() + '" at ' + a.path.toString() + " to your security rules for better performance")
			}(r.ba[s] && r.ba[s][l]) === o && (r.f("listen response", t), "ok" !== n && Wh(r, s, l), o.I && o.I(n, e))
		})
	}

	function Xh(n) {
		var i = n.Ca;
		n.qa && i && n.Ia("auth", {
			cred: i.rg
		}, function (t) {
			var e = t.s;
			t = t.d || "error", "ok" !== e && n.Ca === i && (n.Ca = null), i.sf ? "ok" !== e && i.od && i.od(e, t) : (i.sf = !0, i.Dc && i.Dc(e, t))
		})
	}

	function Yh(t, e, n, i, r) {
		n = {
			p: n,
			d: i
		}, t.f("onDisconnect " + e, n), t.Ia(e, n, function (t) {
			r && setTimeout(function () {
				r(t.s, t.d)
			}, Math.floor(0))
		})
	}

	function Zh(t, e, n, i, r, o) {
		i = {
			p: n,
			d: i
		}, p(o) && (i.h = o), t.sa.push({
			action: e,
			Pf: i,
			I: r
		}), t.ad++, e = t.sa.length - 1, t.qa ? $h(t, e) : t.f("Buffering put: " + n)
	}

	function $h(e, n) {
		var i = e.sa[n].action,
			t = e.sa[n].Pf,
			r = e.sa[n].I;
		e.sa[n].Vg = e.qa, e.Ia(i, t, function (t) {
			e.f(i + " response", t), delete e.sa[n], e.ad--, 0 === e.ad && (e.sa = []), r && r(t.s, t.d)
		})
	}

	function Th(t, e) {
		O(!t.Ma, "Scheduling a connect when we're already connected/ing?"), t.wb && clearTimeout(t.wb), t.wb = setTimeout(function () {
			t.wb = null, ci(t)
		}, Math.floor(e))
	}

	function ci(e) {
		if (di(e)) {
			e.f("Making a connection attempt"), e.Ke = (new Date).getTime(), e.Oc = null;
			var t = u(e.Ld, e),
				n = u(e.Zc, e),
				i = u(e.If, e),
				r = e.id + ":" + Uh++;
			e.Ma = new Fh(r, e.G, t, n, i, function (t) {
				S(t + " (" + e.G.toString() + ")"), e.Bf = !0
			}, e.Fb)
		}
	}

	function ai(t, e, n) {
		(t = Wh(t, e, n = n ? Oa(n, function (t) {
			return xd(t)
		}).join("$") : "default")) && t.I && t.I("permission_denied")
	}

	function Wh(t, e, n) {
		var i;
		return e = new P(e).toString(), p(t.ba[e]) ? (i = t.ba[e][n], delete t.ba[e][n], 0 === oa(t.ba[e]) && delete t.ba[e]) : i = void 0, i
	}

	function bi(e) {
		Xh(e), v(e.ba, function (t) {
			v(t, function (t) {
				Vh(e, t)
			})
		});
		for (var t = 0; t < e.sa.length; t++) e.sa[t] && $h(e, t);
		for (; e.Yc.length;) t = e.Yc.shift(), Yh(e, t.action, t.bd, t.data, t.I)
	}

	function di(t) {
		var e;
		return e = jf.yb().oc, !t.Bf && !t.Ie && e
	}
	h = Rh.prototype, h.Ia = function (t, e, n) {
		var i = ++this.Xg;
		t = {
			r: i,
			a: t,
			b: e
		}, this.f(G(t)), O(this.qa, "sendRequest call when we're not connected not allowed."), this.Ma.Ia(t), n && (this.Wd[i] = n)
	}, h.Cf = function (t, e, n, i) {
		var r = t.wa(),
			o = t.path.toString();
		this.f("Listen called for " + o + " " + r), this.ba[o] = this.ba[o] || {}, O(Ie(t.n) || !He(t.n), "listen() called for non-default but complete query"), O(!this.ba[o][r], "listen() called twice for same path/queryId."), t = {
			I: i,
			Ad: e,
			Ug: t,
			tag: n
		}, this.ba[o][r] = t, this.qa && Vh(this, t)
	}, h.O = function (t, e, n) {
		this.Ca = {
			rg: t,
			sf: !1,
			Dc: e,
			od: n
		}, this.f("Authenticating using credential: " + t), Xh(this), (e = 40 == t.length) || (e = "object" == typeof (t = Cd(t).Ec) && !0 === z(t, "admin")), e && (this.f("Admin auth credential detected. Reducing max reconnect time."), this.Id = 3e4)
	}, h.je = function (e) {
		this.Ca = null, this.qa && this.Ia("unauth", {}, function (t) {
			e(t.s, t.d)
		})
	}, h.$f = function (t, e) {
		var n = t.path.toString(),
			i = t.wa();
		if (this.f("Unlisten called for " + n + " " + i), O(Ie(t.n) || !He(t.n), "unlisten() called for non-default but complete query"), Wh(this, n, i) && this.qa) {
			var r = Ge(t.n);
			this.f("Unlisten on " + n + " for " + i), n = {
				p: n
			}, e && (n.q = r, n.t = e), this.Ia("n", n)
		}
	}, h.Qe = function (t, e, n) {
		this.qa ? Yh(this, "o", t, e, n) : this.Yc.push({
			bd: t,
			action: "o",
			data: e,
			I: n
		})
	}, h.Gf = function (t, e, n) {
		this.qa ? Yh(this, "om", t, e, n) : this.Yc.push({
			bd: t,
			action: "om",
			data: e,
			I: n
		})
	}, h.Md = function (t, e) {
		this.qa ? Yh(this, "oc", t, null, e) : this.Yc.push({
			bd: t,
			action: "oc",
			data: null,
			I: e
		})
	}, h.put = function (t, e, n, i) {
		Zh(this, "p", t, e, n, i)
	}, h.Df = function (t, e, n, i) {
		Zh(this, "m", t, e, n, i)
	}, h.Ye = function (t) {
		this.qa && (t = {
			c: t
		}, this.f("reportStats", t), this.Ia("s", t, function (t) {
			"ok" !== t.s && this.f("reportStats", "Error sending stats: " + t.d)
		}))
	}, h.Ld = function (t) {
		if ("r" in t) {
			this.f("from server: " + G(t));
			var e = t.r,
				n = this.Wd[e];
			n && (delete this.Wd[e], n(t.b))
		} else {
			if ("error" in t) throw "A server-side error has occurred: " + t.error;
			"a" in t && (e = t.a, n = t.b, this.f("handleServerMessage", e, n), "d" === e ? this.Kb(n.p, n.d, !1, n.t) : "m" === e ? this.Kb(n.p, n.d, !0, n.t) : "c" === e ? ai(this, n.p, n.q) : "ac" === e ? (t = n.s, e = n.d, n = this.Ca, this.Ca = null, n && n.od && n.od(t, e)) : "sd" === e ? this.$e ? this.$e(n) : "msg" in n && "undefined" != typeof console && console.log("FIREBASE: " + n.msg.replace("\n", "\nFIREBASE: ")) : qd("Unrecognized action received from server: " + G(e) + "\nAre you using the latest client?"))
		}
	}, h.Zc = function (t, e) {
		if (this.f("connection ready"), this.qa = !0, this.Oc = (new Date).getTime(), this.Se({
			serverTimeOffset: t - (new Date).getTime()
		}), this.Fb = e, this.rf) {
			var n = {};
			n["sdk.js." + bk.replace(/\./g, "-")] = 1, Dg() ? n["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (n["framework.reactnative"] = 1), this.Ye(n)
		}
		bi(this), this.rf = !1, this.Xc(!0)
	}, h.Og = function (t) {
		t && !this.Sb && this.eb === this.Id && (this.f("Window became visible. Reducing delay."), this.eb = 1e3, this.Ma || Th(this, 0)), this.Sb = t
	}, h.Mg = function (t) {
		t ? (this.f("Browser went online."), this.eb = 1e3, this.Ma || Th(this, 0)) : (this.f("Browser went offline. Killing connection."), this.Ma && this.Ma.close())
	}, h.If = function () {
		this.f("data client disconnected"), this.qa = !1, this.Ma = null;
		for (var t = 0; t < this.sa.length; t++) {
			var e = this.sa[t];
			e && "h" in e.Pf && e.Vg && (e.I && e.I("disconnect"), delete this.sa[t], this.ad--)
		}
		0 === this.ad && (this.sa = []), this.Wd = {}, di(this) && (this.Sb ? this.Oc && (3e4 < (new Date).getTime() - this.Oc && (this.eb = 1e3), this.Oc = null) : (this.f("Window isn't visible. Delaying reconnect."), this.eb = this.Id, this.Ke = (new Date).getTime()), t = Math.max(0, this.eb - ((new Date).getTime() - this.Ke)), t *= Math.random(), this.f("Trying to reconnect in " + t + "ms"), Th(this, t), this.eb = Math.min(this.Id, 1.3 * this.eb)), this.Xc(!1)
	}, h.Cb = function () {
		this.Ie = !0, this.Ma ? this.Ma.close() : (this.wb && (clearTimeout(this.wb), this.wb = null), this.qa && this.If())
	}, h.vc = function () {
		this.Ie = !1, this.eb = 1e3, this.Ma || Th(this, 0)
	};
	var U = {
		zg: function () {
			oh = xh = !0
		}
	};

	function ei(t, e) {
		this.committed = t, this.snapshot = e
	}

	function V(t, e) {
		this.dd = t, this.ta = e
	}

	function W(t, e, n) {
		this.A = t, this.Y = e, this.g = n
	}

	function ii(t, e, n) {
		this.Vb = t, this.tb = e, this.vb = n || null
	}

	function ji(t, e, n) {
		this.ja = t, this.tb = e, this.vb = n
	}

	function ki() {
		this.za = {}
	}

	function mi(t) {
		return Na(qa(t.za), function (t) {
			return !He(t.Y.n)
		})
	}

	function ni(t, e) {
		if (He(e.n)) return li(t);
		var n = e.wa();
		return z(t.za, n)
	}

	function li(t) {
		return ua(t.za, function (t) {
			return He(t.Y.n)
		}) || null
	}

	function oi(t) {
		this.va = bF, this.mb = new Pf, this.df = {}, this.qc = {}, this.Qc = t
	}

	function pi(t, e, n, i, r) {
		var o = t.mb,
			a = r;
		return O(i > o.Pc, "Stacking an older write on top of newer ones"), p(a) || (a = !0), o.pa.push({
			path: e,
			Ja: n,
			md: i,
			visible: a
		}), a && (o.V = Jf(o.V, e, n)), o.Pc = i, r ? qi(t, new Ac(bH, e, n)) : []
	}

	function ri(t, e, n, i) {
		var r = t.mb;
		return O(i > r.Pc, "Stacking an older merge on top of newer ones"), r.pa.push({
			path: e,
			children: n,
			md: i,
			visible: !0
		}), r.V = Kf(r.V, e, n), r.Pc = i, n = sf(n), qi(t, new bf(bH, e, n))
	}

	function si(t, e, n) {
		n = n || !1;
		var i = Qf(t.mb, e);
		if (t.mb.Ud(e)) {
			var r = bF;
			return null != i.Ja ? r = r.set(M, !0) : Fb(i.children, function (t, e) {
				r = r.set(new P(t), e)
			}), qi(t, new Df(i.path, r, n))
		}
		return []
	}

	function ti(t, e, n) {
		return n = sf(n), qi(t, new bf(Gf, e, n))
	}

	function ui(t, e, n, i) {
		if (null != (i = vi(t, i))) {
			var r = wi(i);
			return i = r.path, r = r.Lb, e = lf(i, e), xi(t, i, n = new Ac(new Ff(!1, !0, r, !0), e, n))
		}
		return []
	}

	function yi(t, e, n, i) {
		if (i = vi(t, i)) {
			var r = wi(i);
			return i = r.path, r = r.Lb, e = lf(i, e), n = sf(n), xi(t, i, n = new bf(new Ff(!1, !0, r, !0), e, n))
		}
		return []
	}

	function Ci(t) {
		return vf(t, function (t, e, n) {
			if (e && null != li(e)) return [li(e)];
			var i = [];
			return e && (i = mi(e)), v(n, function (t) {
				i = i.concat(t)
			}), i
		})
	}

	function Gi(t, e) {
		for (var n = 0; n < e.length; ++n) {
			if (!He((i = e[n]).n)) {
				var i = zi(i),
					r = t.qc[i];
				delete t.qc[i], delete t.df["_" + r]
			}
		}
	}

	function Ei(t) {
		return He(t.n) && !Ie(t.n) ? t.Mb() : t
	}

	function Bi(t, e, n) {
		var i = e.path,
			r = Fi(t, e);
		if (n = Di(t, n), e = t.Qc.af(Ei(e), r, n.Ad, n.I), i = t.va.subtree(i), r) O(null == li(i.value), "If we're adding a query, it shouldn't be shadowed");
		else
			for (r = vf(i, function (t, e, n) {
				if (!t.e() && e && null != li(e)) return [Ze(li(e))];
				var i = [];
				return e && (i = i.concat(Oa(mi(e), function (t) {
					return t.Y
				}))), v(n, function (t) {
					i = i.concat(t)
				}), i
			}), i = 0; i < r.length; ++i) n = r[i], t.Qc.de(Ei(n), Fi(t, n));
		return e
	}

	function Di(i, t) {
		var r = t.Y,
			o = Fi(i, r);
		return {
			Ad: function () {
				return (t.w() || H).hash()
			},
			I: function (t) {
				if ("ok" === t) {
					if (o) {
						var e = r.path;
						if (t = vi(i, o)) {
							var n = wi(t);
							t = n.path, n = n.Lb, e = lf(t, e), e = new Cc(new Ff(!1, !0, n, !0), e), t = xi(i, t, e)
						} else t = []
					} else t = qi(i, new Cc(Gf, r.path));
					return t
				}
				return e = "Unknown Error", "too_big" === t ? e = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == t ? e = "Client doesn't have permission to access the desired data." : "unavailable" == t && (e = "The service is unavailable"), (e = Error(t + " at " + r.path.toString() + ": " + e)).code = t.toUpperCase(), i.nb(r, null, e)
			}
		}
	}

	function zi(t) {
		return t.path.toString() + "$" + t.wa()
	}

	function wi(t) {
		var e = t.indexOf("$");
		return O(-1 !== e && e < t.length - 1, "Bad queryKey."), {
			Lb: t.substr(e + 1),
			path: new P(t.substr(0, e))
		}
	}

	function vi(t, e) {
		var n = t.df,
			i = "_" + e;
		return i in n ? n[i] : void 0
	}

	function Fi(t, e) {
		var n = zi(e);
		return z(t.qc, n)
	}
	U.forceLongPolling = U.zg, U.Ag = function () {
		ph = !0
	}, U.forceWebSockets = U.Ag, U.Eg = function () {
		return wh.isAvailable()
	}, U.isWebSocketsAvailable = U.Eg, U.ah = function (t, e) {
		t.k.Va.$e = e
	}, U.setSecurityDebugCallback = U.ah, U.bf = function (t, e) {
		t.k.bf(e)
	}, U.stats = U.bf, U.cf = function (t, e) {
		t.k.cf(e)
	}, U.statsIncrementCounter = U.cf, U.ud = function (t) {
		return t.k.ud
	}, U.dataUpdateCount = U.ud, U.Dg = function (t, e) {
		t.k.He = e
	}, U.interceptServerData = U.Dg, U.Kg = function (t) {
		new Og(t)
	}, U.onPopupOpen = U.Kg, U.Zg = function (t) {
		bK = t
	}, U.setAuthenticationServer = U.Zg, V.prototype.cancel = function (t) {
		D("Firebase.onDisconnect().cancel", 0, 1, arguments.length), F("Firebase.onDisconnect().cancel", 1, t, !0);
		var e = new B;
		return this.dd.Md(this.ta, C(e, t)), e.D
	}, V.prototype.cancel = V.prototype.cancel, V.prototype.remove = function (t) {
		D("Firebase.onDisconnect().remove", 0, 1, arguments.length), og("Firebase.onDisconnect().remove", this.ta), F("Firebase.onDisconnect().remove", 1, t, !0);
		var e = new B;
		return fi(this.dd, this.ta, null, C(e, t)), e.D
	}, V.prototype.remove = V.prototype.remove, V.prototype.set = function (t, e) {
		D("Firebase.onDisconnect().set", 1, 2, arguments.length), og("Firebase.onDisconnect().set", this.ta), gg("Firebase.onDisconnect().set", t, this.ta, !1), F("Firebase.onDisconnect().set", 2, e, !0);
		var n = new B;
		return fi(this.dd, this.ta, t, C(n, e)), n.D
	}, V.prototype.set = V.prototype.set, V.prototype.Ob = function (t, e, n) {
		D("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length), og("Firebase.onDisconnect().setWithPriority", this.ta), gg("Firebase.onDisconnect().setWithPriority", t, this.ta, !1), kg("Firebase.onDisconnect().setWithPriority", 2, e), F("Firebase.onDisconnect().setWithPriority", 3, n, !0);
		var i = new B;
		return gi(this.dd, this.ta, t, e, C(i, n)), i.D
	}, V.prototype.setWithPriority = V.prototype.Ob, V.prototype.update = function (t, e) {
		if (D("Firebase.onDisconnect().update", 1, 2, arguments.length), og("Firebase.onDisconnect().update", this.ta), da(t)) {
			for (var n = {}, i = 0; i < t.length; ++i) n["" + i] = t[i];
			t = n, S("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
		}
		return jg("Firebase.onDisconnect().update", t, this.ta), F("Firebase.onDisconnect().update", 2, e, !0), n = new B, hi(this.dd, this.ta, t, C(n, e)), n.D
	}, V.prototype.update = V.prototype.update, W.prototype.J = function () {
		return D("Firebase.DataSnapshot.val", 0, 0, arguments.length), this.A.J()
	}, W.prototype.val = W.prototype.J, W.prototype.qf = function () {
		return D("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length), this.A.J(!0)
	}, W.prototype.exportVal = W.prototype.qf, W.prototype.xg = function () {
		return D("Firebase.DataSnapshot.exists", 0, 0, arguments.length), !this.A.e()
	}, W.prototype.exists = W.prototype.xg, W.prototype.o = function (t) {
		D("Firebase.DataSnapshot.child", 0, 1, arguments.length), fa(t) && (t = String(t)), ng("Firebase.DataSnapshot.child", t);
		var e = new P(t),
			n = this.Y.o(e);
		return new W(this.A.S(e), n, R)
	}, W.prototype.child = W.prototype.o, W.prototype.Fa = function (t) {
		D("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length), ng("Firebase.DataSnapshot.hasChild", t);
		var e = new P(t);
		return !this.A.S(e).e()
	}, W.prototype.hasChild = W.prototype.Fa, W.prototype.C = function () {
		return D("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length), this.A.C().J()
	}, W.prototype.getPriority = W.prototype.C, W.prototype.forEach = function (n) {
		if (D("Firebase.DataSnapshot.forEach", 1, 1, arguments.length), F("Firebase.DataSnapshot.forEach", 1, n, !1), this.A.L()) return !1;
		var i = this;
		return !!this.A.R(this.g, function (t, e) {
			return n(new W(e, i.Y.o(t), R))
		})
	}, W.prototype.forEach = W.prototype.forEach, W.prototype.zd = function () {
		return D("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length), !this.A.L() && !this.A.e()
	}, W.prototype.hasChildren = W.prototype.zd, W.prototype.name = function () {
		return S("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead."), D("Firebase.DataSnapshot.name", 0, 0, arguments.length), this.key()
	}, W.prototype.name = W.prototype.name, W.prototype.key = function () {
		return D("Firebase.DataSnapshot.key", 0, 0, arguments.length), this.Y.key()
	}, W.prototype.key = W.prototype.key, W.prototype.Hb = function () {
		return D("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length), this.A.Hb()
	}, W.prototype.numChildren = W.prototype.Hb, W.prototype.Mb = function () {
		return D("Firebase.DataSnapshot.ref", 0, 0, arguments.length), this.Y
	}, W.prototype.ref = W.prototype.Mb, h = ii.prototype, h.Qf = function (t) {
		return "value" === t
	}, h.createEvent = function (t, e) {
		var n = e.n.g;
		return new jc("value", this, new W(t.Na, e.Mb(), n))
	}, h.Zb = function (t) {
		var e = this.vb;
		if ("cancel" === t.De()) {
			O(this.tb, "Raising a cancel event on a listener with no cancel callback");
			var n = this.tb;
			return function () {
				n.call(e, t.error)
			}
		}
		var i = this.Vb;
		return function () {
			i.call(e, t.be)
		}
	}, h.lf = function (t, e) {
		return this.tb ? new kc(this, t, e) : null
	}, h.matches = function (t) {
		return t instanceof ii && (!t.Vb || !this.Vb || t.Vb === this.Vb && t.vb === this.vb)
	}, h.yf = function () {
		return null !== this.Vb
	}, h = ji.prototype, h.Qf = function (t) {
		return ("children_removed" === (t = "children_added" === t ? "child_added" : t) ? "child_removed" : t) in this.ja
	}, h.lf = function (t, e) {
		return this.tb ? new kc(this, t, e) : null
	}, h.createEvent = function (t, e) {
		O(null != t.Za, "Child events should have a childName.");
		var n = e.Mb().o(t.Za);
		return new jc(t.type, this, new W(t.Na, n, e.n.g), t.Td)
	}, h.Zb = function (t) {
		var e = this.vb;
		if ("cancel" === t.De()) {
			O(this.tb, "Raising a cancel event on a listener with no cancel callback");
			var n = this.tb;
			return function () {
				n.call(e, t.error)
			}
		}
		var i = this.ja[t.wd];
		return function () {
			i.call(e, t.be, t.Td)
		}
	}, h.matches = function (n) {
		if (n instanceof ji) {
			if (!this.ja || !n.ja) return !0;
			if (this.vb === n.vb)
				if ((t = oa(n.ja)) === oa(this.ja)) {
					if (1 === t) {
						var t = pa(n.ja),
							e = pa(this.ja);
						return !(e !== t || n.ja[t] && this.ja[e] && n.ja[t] !== this.ja[e])
					}
					return na(this.ja, function (t, e) {
						return n.ja[e] === t
					})
				}
		}
		return !1
	}, h.yf = function () {
		return null !== this.ja
	}, h = ki.prototype, h.e = function () {
		return va(this.za)
	}, h.gb = function (e, n, i) {
		var t = e.source.Lb;
		if (null !== t) return t = z(this.za, t), O(null != t, "SyncTree gave us an op for an invalid query."), t.gb(e, n, i);
		var r = [];
		return v(this.za, function (t) {
			r = r.concat(t.gb(e, n, i))
		}), r
	}, h.Tb = function (t, e, n, i, r) {
		var o = t.wa();
		if (!(a = z(this.za, o))) {
			var a, s = !1;
			(a = n.Aa(r ? i : null)) ? s = !0 : (a = i instanceof fe ? n.Cc(i) : H, s = !1), a = new Ye(t, new je(new Xb(a, s, !1), new Xb(i, r, !1))), this.za[o] = a
		}
		return a.Tb(e), af(a, e)
	}, h.nb = function (t, n, i) {
		var e = t.wa(),
			r = [],
			o = [],
			a = null != li(this);
		if ("default" === e) {
			var s = this;
			v(this.za, function (t, e) {
				o = o.concat(t.nb(n, i)), t.e() && (delete s.za[e], He(t.Y.n) || r.push(t.Y))
			})
		} else {
			var l = z(this.za, e);
			l && (o = o.concat(l.nb(n, i)), l.e() && (delete this.za[e], He(l.Y.n) || r.push(l.Y)))
		}
		return a && null == li(this) && r.push(new X(t.k, t.path)), {
			Wg: r,
			vg: o
		}
	}, h.kb = function (e) {
		var n = null;
		return v(this.za, function (t) {
			n = n || t.kb(e)
		}), n
	}, oi.prototype.Tb = function (t, e) {
		var i = t.path,
			r = null,
			o = !1;
		zf(this.va, i, function (t, e) {
			var n = lf(t, i);
			r = r || e.kb(n), o = o || null != li(e)
		});
		var n, a = this.va.get(i);
		a ? (o = o || null != li(a), r = r || a.kb(M)) : (a = new ki, this.va = this.va.set(i, a)), null != r ? n = !0 : (n = !1, r = H, Cf(this.va.subtree(i), function (t, e) {
			var n = e.kb(M);
			n && (r = r.W(t, n))
		}));
		var s = null != ni(a, t);
		if (!s && !He(t.n)) {
			var l = zi(t);
			O(!(l in this.qc), "View does not exist, but we have a tag");
			var c = bR++;
			this.qc[l] = c, this.df["_" + c] = l
		}
		return n = a.Tb(t, e, new Uf(i, this.mb), r, n), s || o || (a = ni(a, t), n = n.concat(Bi(this, t, a))), n
	}, oi.prototype.nb = function (t, e, n) {
		var i = t.path,
			r = this.va.get(i),
			o = [];
		if (r && ("default" === t.wa() || null != ni(r, t))) {
			o = r.nb(t, e, n), r.e() && (this.va = this.va.remove(i)), r = o.Wg, o = o.vg, e = -1 !== Sa(r, function (t) {
				return He(t.n)
			});
			var a = xf(this.va, i, function (t, e) {
				return null != li(e)
			});
			if (e && !a && !(i = this.va.subtree(i)).e()) {
				i = Ci(i);
				for (var s = 0; s < i.length; ++s) {
					var l = (c = i[s]).Y,
						c = Di(this, c);
					this.Qc.af(Ei(l), Fi(this, l), c.Ad, c.I)
				}
			}
			if (!a && 0 < r.length && !n)
				if (e) this.Qc.de(Ei(t), null);
				else {
					var u = this;
					Ma(r, function (t) {
						t.wa();
						var e = u.qc[zi(t)];
						u.Qc.de(Ei(t), e)
					})
				}
			Gi(this, r)
		}
		return o
	}, oi.prototype.Aa = function (i, t) {
		var e = this.mb,
			n = xf(this.va, i, function (t, e) {
				var n = lf(t, i);
				if (n = e.kb(n)) return n
			});
		return e.Aa(i, n, t, !0)
	};
	var bR = 1;

	function xi(t, e, n) {
		var i = t.va.get(e);
		return O(i, "Missing sync point for query tag that we're tracking"), i.gb(n, new Uf(e, t.mb), null)
	}

	function qi(t, e) {
		return Hi(t, e, t.va, null, new Uf(M, t.mb))
	}

	function Hi(t, e, n, i, r) {
		if (e.path.e()) return Ii(t, e, n, i, r);
		var o = n.get(M);
		null == i && null != o && (i = o.kb(M));
		var a = [],
			s = K(e.path),
			l = e.$c(s);
		if ((n = n.children.get(s)) && l) {
			var c = i ? i.T(s) : null;
			s = r.o(s), a = a.concat(Hi(t, l, n, c, s))
		}
		return o && (a = a.concat(o.gb(e, r, i))), a
	}

	function Ii(o, a, t, s, l) {
		var e = t.get(M);
		null == s && null != e && (s = e.kb(M));
		var c = [];
		return t.children.ka(function (t, e) {
			var n = s ? s.T(t) : null,
				i = l.o(t),
				r = a.$c(t);
			r && (c = c.concat(Ii(o, r, e, n, i)))
		}), e && (c = c.concat(e.gb(a, l, s))), c
	}

	function Ji(t, e) {
		this.G = t, this.Xa = uc(t), this.hd = null, this.fa = new Zb, this.Kd = 1, this.Va = null, e || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) ? (this.da = new cf(this.G, u(this.Kb, this)), setTimeout(u(this.Xc, this, !0), 0)) : this.da = this.Va = new Rh(this.G, u(this.Kb, this), u(this.Xc, this), u(this.Se, this)), this.eh = vc(t, u(function () {
			return new pc(this.Xa, this.da)
		}, this)), this.yc = new Wf, this.Ge = new Sb;
		var o = this;
		this.Fd = new oi({
			af: function (t, e, n, i) {
				return e = [], (n = o.Ge.j(t.path)).e() || (e = qi(o.Fd, new Ac(Gf, t.path, n)), setTimeout(function () {
					i("ok")
				}, 0)), e
			},
			de: aa
		}), Ki(this, "connected", !1), this.na = new Vc, this.O = new Yg(t, u(this.da.O, this.da), u(this.da.je, this.da), u(this.Pe, this)), this.ud = 0, this.He = null, this.M = new oi({
			af: function (i, t, e, r) {
				return o.da.Cf(i, e, t, function (t, e) {
					var n = r(t, e);
					dc(o.fa, i.path, n)
				}), []
			},
			de: function (t, e) {
				o.da.$f(t, e)
			}
		})
	}

	function Li(t) {
		return t = t.Ge.j(new P(".info/serverTimeOffset")).J() || 0, (new Date).getTime() + t
	}

	function Mi(t) {
		return (t = t = {
			timestamp: Li(t)
		}).timestamp = t.timestamp || (new Date).getTime(), t
	}

	function Ki(t, e, n) {
		e = new P("/.info/" + e), n = Q(n);
		var i = t.Ge;
		i.Zd = i.Zd.H(e, n), n = qi(t.Fd, new Ac(Gf, e, n)), dc(t.fa, e, n)
	}

	function Oi(i) {
		i.f("onDisconnectEvents");
		var t = Mi(i),
			r = [];
		Wc(Uc(i.na, t), M, function (t, e) {
			r = r.concat(qi(i.M, new Ac(Gf, t, e)));
			var n = Qi(i, t);
			Ni(i, n)
		}), i.na = new Vc, dc(i.fa, M, r)
	}

	function fi(n, i, t, r) {
		var o = Q(t);
		n.da.Qe(i.toString(), o.J(!0), function (t, e) {
			"ok" === t && n.na.rc(i, o), Pi(r, t, e)
		})
	}

	function gi(n, i, t, e, r) {
		var o = Q(t, e);
		n.da.Qe(i.toString(), o.J(!0), function (t, e) {
			"ok" === t && n.na.rc(i, o), Pi(r, t, e)
		})
	}

	function hi(r, o, a, s) {
		var t, e = !0;
		for (t in a) e = !1;
		e ? (fc("onDisconnect().update() called with empty data. Don't do anything."), Pi(s, "ok")) : r.da.Gf(o.toString(), a, function (t, e) {
			if ("ok" === t)
				for (var n in a) {
					var i = Q(a[n]);
					r.na.rc(o.o(n), i)
				}
			Pi(s, t, e)
		})
	}

	function Ri(t, e, n) {
		n = ".info" === K(e.path) ? t.Fd.Tb(e, n) : t.M.Tb(e, n), bc(t.fa, e.path, n)
	}

	function Pi(n, i, r) {
		n && gc(function () {
			if ("ok" == i) n(null);
			else {
				var t = (i || "error").toUpperCase(),
					e = t;
				r && (e += ": " + r), (e = Error(e)).code = t, n(e)
			}
		})
	}

	function Si(t, e, n, i, r) {
		function o() {}
		t.f("transaction on " + e);
		var a = new X(t, e);
		if (a.Ib("value", o), n = {
			path: e,
			update: n,
			I: i,
			status: null,
			Lf: br(),
			gf: r,
			Sf: 0,
			le: function () {
				a.mc("value", o)
			},
			ne: null,
			Da: null,
			rd: null,
			sd: null,
			td: null
		}, i = t.M.Aa(e, void 0) || H, n.rd = i, p(i = n.update(i.J()))) {
			hg("transaction failed: Data returned ", i, n.path), n.status = 1;
			var s = (r = Xf(t.yc, e)).Ea() || [];
			s.push(n), Yf(r, s), "object" == typeof i && null !== i && y(i, ".priority") ? (s = z(i, ".priority"), O(fg(s), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : s = (t.M.Aa(e) || H).C().J(), r = Mi(t), r = Xc(i = Q(i, s), r), n.sd = i, n.td = r, n.Da = t.Kd++, n = pi(t.M, e, r, n.Da, n.gf), dc(t.fa, e, n), Ti(t)
		} else n.le(), n.sd = null, n.td = null, n.I && (t = new W(n.rd, new X(t, n.path), R), n.I(null, !1, t))
	}

	function Ti(e, t) {
		var n = t || e.yc;
		if (t || Ui(e, n), null !== n.Ea()) {
			var i = Vi(e, n);
			O(0 < i.length, "Sending zero length transaction queue"), Qa(i, function (t) {
				return 1 === t.status
			}) && Wi(e, n.path(), i)
		} else n.zd() && n.R(function (t) {
			Ti(e, t)
		})
	}

	function Wi(r, o, a) {
		for (var t = Oa(a, function (t) {
			return t.Da
		}), e = (t = e = r.M.Aa(o, t) || H, e.hash()), s = 0; s < a.length; s++) {
			var n = a[s];
			O(1 === n.status, "tryToSendTransactionQueue_: items in queue should all be run."), n.status = 2, n.Sf++;
			var i = lf(o, n.path);
			t = t.H(i, n.sd)
		}
		t = t.J(!0), r.da.put(o.toString(), t, function (t) {
			r.f("transaction put response", {
				path: o.toString(),
				status: t
			});
			var e = [];
			if ("ok" === t) {
				for (t = [], s = 0; s < a.length; s++) {
					if (a[s].status = 3, e = e.concat(si(r.M, a[s].Da)), a[s].I) {
						var n = a[s].td,
							i = new X(r, a[s].path);
						t.push(u(a[s].I, null, null, !0, new W(n, i, R)))
					}
					a[s].le()
				}
				for (Ui(r, Xf(r.yc, o)), Ti(r), dc(r.fa, o, e), s = 0; s < t.length; s++) gc(t[s])
			} else {
				if ("datastale" === t)
					for (s = 0; s < a.length; s++) a[s].status = 4 === a[s].status ? 5 : 1;
				else
					for (S("transaction at " + o.toString() + " failed: " + t), s = 0; s < a.length; s++) a[s].status = 5, a[s].ne = t;
				Ni(r, o)
			}
		}, e)
	}

	function Ni(t, e) {
		var n, i = (n = Xi(t, e)).path();
		return Yi(t, n = Vi(t, n), i), i
	}

	function Yi(t, e, n) {
		if (0 !== e.length) {
			for (var i = [], r = [], o = Na(e, function (t) {
				return 1 === t.status
			}), a = (o = Oa(o, function (t) {
				return t.Da
			}), 0); a < e.length; a++) {
				var s, l = e[a],
					c = lf(n, l.path),
					h = !1;
				if (O(null !== c, "rerunTransactionsUnderNode_: relativePath should not be null."), 5 === l.status) h = !0, s = l.ne, r = r.concat(si(t.M, l.Da, !0));
				else if (1 === l.status)
					if (25 <= l.Sf) h = !0, s = "maxretry", r = r.concat(si(t.M, l.Da, !0));
					else {
						var f = t.M.Aa(l.path, o) || H;
						l.rd = f;
						var _ = e[a].update(f.J());
						p(_) ? (hg("transaction failed: Data returned ", _, l.path), c = Q(_), "object" == typeof _ && null != _ && y(_, ".priority") || (c = c.ia(f.C())), f = l.Da, _ = Xc(c, _ = Mi(t)), l.sd = c, l.td = _, l.Da = t.Kd++, Ta(o, f), r = (r = r.concat(pi(t.M, l.path, _, l.Da, l.gf))).concat(si(t.M, f, !0))) : (h = !0, s = "nodata", r = r.concat(si(t.M, l.Da, !0)))
					}
				dc(t.fa, n, r), r = [], h && (e[a].status = 3, setTimeout(e[a].le, Math.floor(0)), e[a].I && ("nodata" === s ? (l = new X(t, e[a].path), i.push(u(e[a].I, null, null, !1, new W(e[a].rd, l, R)))) : i.push(u(e[a].I, null, Error(s), !1, null))))
			}
			for (Ui(t, t.yc), a = 0; a < i.length; a++) gc(i[a]);
			Ti(t)
		}
	}

	function Xi(t, e) {
		for (var n, i = t.yc; null !== (n = K(e)) && null === i.Ea();) i = Xf(i, n), e = N(e);
		return i
	}

	function Vi(t, e) {
		var n = [];
		return Zi(t, e, n), n.sort(function (t, e) {
			return t.Lf - e.Lf
		}), n
	}

	function Zi(e, t, n) {
		var i = t.Ea();
		if (null !== i)
			for (var r = 0; r < i.length; r++) n.push(i[r]);
		t.R(function (t) {
			Zi(e, t, n)
		})
	}

	function Ui(e, t) {
		var n = t.Ea();
		if (n) {
			for (var i = 0, r = 0; r < n.length; r++) 3 !== n[r].status && (n[i] = n[r], i++);
			n.length = i, Yf(t, 0 < n.length ? n : null)
		}
		t.R(function (t) {
			Ui(e, t)
		})
	}

	function Qi(e, t) {
		var n = Xi(e, t).path(),
			i = Xf(e.yc, t);
		return ag(i, function (t) {
			$i(e, t)
		}), $i(e, i), $f(i, function (t) {
			$i(e, t)
		}), n
	}

	function $i(t, e) {
		var n = e.Ea();
		if (null !== n) {
			for (var i = [], r = [], o = -1, a = 0; a < n.length; a++) 4 !== n[a].status && (2 === n[a].status ? (O(o === a - 1, "All SENT items should be at beginning of queue."), n[o = a].status = 4, n[a].ne = "set") : (O(1 === n[a].status, "Unexpected transaction status in abort"), n[a].le(), r = r.concat(si(t.M, n[a].Da, !0)), n[a].I && i.push(u(n[a].I, null, Error("set"), !1, null))));
			for (-1 === o ? Yf(e, null) : n.length = o + 1, dc(t.fa, e.path(), r), a = 0; a < i.length; a++) gc(i[a])
		}
	}

	function aj() {
		this.sc = {}, this.ag = !1
	}

	function Y(t, e, n, i) {
		this.k = t, this.path = e, this.n = n, this.pc = i
	}

	function bj(t) {
		var e = null,
			n = null;
		if (t.oa && (e = Od(t)), t.ra && (n = Rd(t)), t.g === bv) {
			if (t.oa) {
				if ("[MIN_NAME]" != Nd(t)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
				if ("string" != typeof e) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
			}
			if (t.ra) {
				if ("[MAX_NAME]" != Pd(t)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
				if ("string" != typeof n) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
			}
		} else if (t.g === R) {
			if (null != e && !fg(e) || null != n && !fg(n)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
		} else if (O(t.g instanceof ve || t.g === bw, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
	}

	function cj(t) {
		if (t.oa && t.ra && t.la && (!t.la || "" === t.Rb)) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
	}

	function dj(t, e) {
		if (!0 === t.pc) throw Error(e + ": You can't combine multiple orderBy calls.")
	}

	function ej(t, e, n) {
		var i = {
			cancel: null,
			Qa: null
		};
		if (e && n) i.cancel = e, F(t, 3, i.cancel, !0), i.Qa = n, Qb(t, 4, i.Qa);
		else if (e)
			if ("object" == typeof e && null !== e) i.Qa = e;
			else {
				if ("function" != typeof e) throw Error(E(t, 3, !0) + " must either be a cancel callback or a context object.");
				i.cancel = e
			}
		return i
	}
	h = Ji.prototype, h.toString = function () {
		return (this.G.ob ? "https://" : "http://") + this.G.host
	}, h.name = function () {
		return this.G.lc
	}, h.Kb = function (t, e, n, i) {
		this.ud++;
		var r = new P(t);
		e = this.He ? this.He(t, e) : e, t = [], i ? n ? (e = ma(e, function (t) {
			return Q(t)
		}), t = yi(this.M, r, e, i)) : (e = Q(e), t = ui(this.M, r, e, i)) : n ? (i = ma(e, function (t) {
			return Q(t)
		}), t = ti(this.M, r, i)) : (i = Q(e), t = qi(this.M, new Ac(Gf, r, i))), i = r, 0 < t.length && (i = Ni(this, r)), dc(this.fa, i, t)
	}, h.Xc = function (t) {
		Ki(this, "connected", t), !1 === t && Oi(this)
	}, h.Se = function (t) {
		var n = this;
		zd(t, function (t, e) {
			Ki(n, e, t)
		})
	}, h.Pe = function (t) {
		Ki(this, "authenticated", t)
	}, h.Ob = function (i, t, e, r) {
		this.f("set", {
			path: i.toString(),
			value: t,
			nh: e
		});
		var n = Mi(this),
			o = (n = Xc(t = Q(t, e), n), this.Kd++);
		n = pi(this.M, i, n, o, !0);
		$b(this.fa, n);
		var a = this;
		this.da.put(i.toString(), t.J(!0), function (t, e) {
			var n = "ok" === t;
			n || S("set at " + i + " failed: " + t), n = si(a.M, o, !n), dc(a.fa, i, n), Pi(r, t, e)
		}), Ni(this, n = Qi(this, i)), dc(this.fa, n, [])
	}, h.update = function (r, t, o) {
		this.f("update", {
			path: r.toString(),
			value: t
		});
		var i = !0,
			a = Mi(this),
			s = {};
		if (v(t, function (t, e) {
			i = !1;
			var n = Q(t);
			s[e] = Xc(n, a)
		}), i) fc("update() called with empty data. Don't do anything."), Pi(o, "ok");
		else {
			var l = this.Kd++,
				e = ri(this.M, r, s, l);
			$b(this.fa, e);
			var c = this;
			this.da.Df(r.toString(), t, function (t, e) {
				(n = "ok" === t) || S("update at " + r + " failed: " + t);
				var n = si(c.M, l, !n),
					i = r;
				0 < n.length && (i = Ni(c, r)), dc(c.fa, i, n), Pi(o, t, e)
			}), Ni(this, t = Qi(this, r)), dc(this.fa, r, [])
		}
	}, h.Md = function (n, i) {
		var r = this;
		this.da.Md(n.toString(), function (t, e) {
			"ok" === t && wg(r.na, n), Pi(i, t, e)
		})
	}, h.Cb = function () {
		this.Va && this.Va.Cb()
	}, h.vc = function () {
		this.Va && this.Va.vc()
	}, h.bf = function (t) {
		if ("undefined" != typeof console) {
			t ? (this.hd || (this.hd = new oc(this.Xa)), t = this.hd.get()) : t = this.Xa.get();
			var e, n = Pa(ra(t), function (t, e) {
				return Math.max(e.length, t)
			}, 0);
			for (e in t) {
				for (var i = t[e], r = e.length; r < n + 2; r++) e += " ";
				console.log(e + i)
			}
		}
	}, h.cf = function (t) {
		rc(this.Xa, t), this.eh.Vf[t] = !0
	}, h.f = function (t) {
		var e = "";
		this.Va && (e = this.Va.id + ":"), fc(e, arguments)
	}, aj.prototype.Cb = function () {
		for (var t in this.sc) this.sc[t].Cb()
	}, aj.prototype.vc = function () {
		for (var t in this.sc) this.sc[t].vc()
	}, aj.prototype.ze = function () {
		this.ag = !0
	}, ba(aj), aj.prototype.interrupt = aj.prototype.Cb, aj.prototype.resume = aj.prototype.vc, h = Y.prototype, h.Mb = function () {
		return D("Query.ref", 0, 0, arguments.length), new X(this.k, this.path)
	}, h.Ib = function (t, e, n, i) {
		D("Query.on", 2, 4, arguments.length), lg("Query.on", t, !1), F("Query.on", 2, e, !1);
		var r = ej("Query.on", n, i);
		if ("value" === t) Ri(this.k, this, new ii(e, r.cancel || null, r.Qa || null));
		else {
			var o = {};
			o[t] = e, Ri(this.k, this, new ji(o, r.cancel, r.Qa))
		}
		return e
	}, h.mc = function (t, e, n) {
		D("Query.off", 0, 3, arguments.length), lg("Query.off", t, !0), F("Query.off", 2, e, !0), Qb("Query.off", 3, n);
		var i = null,
			r = null;
		"value" === t ? i = new ii(e || null, null, n || null) : t && (e && ((r = {})[t] = e), i = new ji(r, null, n || null)), r = this.k, i = ".info" === K(this.path) ? r.Fd.nb(this, i) : r.M.nb(this, i), bc(r.fa, this.path, i)
	}, h.Pg = function (e, n) {
		function i(t) {
			a && (a = !1, o.mc(e, i), n && n.call(r.Qa, t), s.resolve(t))
		}
		D("Query.once", 1, 4, arguments.length), lg("Query.once", e, !1), F("Query.once", 2, n, !0);
		var r = ej("Query.once", arguments[2], arguments[3]),
			o = this,
			a = !0,
			s = new B;
		return Nb(s.D), this.Ib(e, i, function (t) {
			o.mc(e, i), r.cancel && r.cancel.call(r.Qa, t), s.reject(t)
		}), s.D
	}, h.Le = function (t) {
		if (S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead."), D("Query.limit", 1, 1, arguments.length), !fa(t) || Math.floor(t) !== t || t <= 0) throw Error("Query.limit: First argument must be a positive integer.");
		if (this.n.la) throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
		var e = this.n.Le(t);
		return cj(e), new Y(this.k, this.path, e, this.pc)
	}, h.Me = function (t) {
		if (D("Query.limitToFirst", 1, 1, arguments.length), !fa(t) || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToFirst: First argument must be a positive integer.");
		if (this.n.la) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
		return new Y(this.k, this.path, this.n.Me(t), this.pc)
	}, h.Ne = function (t) {
		if (D("Query.limitToLast", 1, 1, arguments.length), !fa(t) || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToLast: First argument must be a positive integer.");
		if (this.n.la) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
		return new Y(this.k, this.path, this.n.Ne(t), this.pc)
	}, h.Qg = function (t) {
		if (D("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw Error('Query.orderByChild: "$key" is invalid. Use Query.orderByKey() instead.');
		if ("$priority" === t) throw Error('Query.orderByChild: "$priority" is invalid. Use Query.orderByPriority() instead.');
		if ("$value" === t) throw Error('Query.orderByChild: "$value" is invalid. Use Query.orderByValue() instead.');
		ng("Query.orderByChild", t), dj(this, "Query.orderByChild");
		var e = new P(t);
		if (e.e()) throw Error("Query.orderByChild: cannot pass in empty path. Use Query.orderByValue() instead.");
		return e = new ve(e), bj(e = Fe(this.n, e)), new Y(this.k, this.path, e, !0)
	}, h.Rg = function () {
		D("Query.orderByKey", 0, 0, arguments.length), dj(this, "Query.orderByKey");
		var t = Fe(this.n, bv);
		return bj(t), new Y(this.k, this.path, t, !0)
	}, h.Sg = function () {
		D("Query.orderByPriority", 0, 0, arguments.length), dj(this, "Query.orderByPriority");
		var t = Fe(this.n, R);
		return bj(t), new Y(this.k, this.path, t, !0)
	}, h.Tg = function () {
		D("Query.orderByValue", 0, 0, arguments.length), dj(this, "Query.orderByValue");
		var t = Fe(this.n, bw);
		return bj(t), new Y(this.k, this.path, t, !0)
	}, h.ce = function (t, e) {
		D("Query.startAt", 0, 2, arguments.length), gg("Query.startAt", t, this.path, !0), mg("Query.startAt", e);
		var n = this.n.ce(t, e);
		if (cj(n), bj(n), this.n.oa) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
		return p(t) || (e = t = null), new Y(this.k, this.path, n, this.pc)
	}, h.vd = function (t, e) {
		D("Query.endAt", 0, 2, arguments.length), gg("Query.endAt", t, this.path, !0), mg("Query.endAt", e);
		var n = this.n.vd(t, e);
		if (cj(n), bj(n), this.n.ra) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
		return new Y(this.k, this.path, n, this.pc)
	}, h.tg = function (t, e) {
		if (D("Query.equalTo", 1, 2, arguments.length), gg("Query.equalTo", t, this.path, !1), mg("Query.equalTo", e), this.n.oa) throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
		if (this.n.ra) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
		return this.ce(t, e).vd(t, e)
	}, h.toString = function () {
		D("Query.toString", 0, 0, arguments.length);
		for (var t = this.path, e = "", n = t.aa; n < t.u.length; n++) "" !== t.u[n] && (e += "/" + encodeURIComponent(String(t.u[n])));
		return this.k.toString() + (e || "/")
	}, h.wa = function () {
		var t = xd(Ge(this.n));
		return "{}" === t ? "default" : t
	}, Y.prototype.ref = Y.prototype.Mb, Y.prototype.on = Y.prototype.Ib, Y.prototype.off = Y.prototype.mc, Y.prototype.once = Y.prototype.Pg, Y.prototype.limit = Y.prototype.Le, Y.prototype.limitToFirst = Y.prototype.Me, Y.prototype.limitToLast = Y.prototype.Ne, Y.prototype.orderByChild = Y.prototype.Qg, Y.prototype.orderByKey = Y.prototype.Rg, Y.prototype.orderByPriority = Y.prototype.Sg, Y.prototype.orderByValue = Y.prototype.Tg, Y.prototype.startAt = Y.prototype.ce, Y.prototype.endAt = Y.prototype.vd, Y.prototype.equalTo = Y.prototype.tg, Y.prototype.toString = Y.prototype.toString;
	var Z = {};

	function X(t, e) {
		var n, i, r;
		if (t instanceof Ji) n = t, i = e;
		else {
			var o;
			if (D("new Firebase", 1, 2, arguments.length), n = (i = sd(t)).fh, "firebase" === i.domain && rd(i.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n && "undefined" != n || rd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), i.ob || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."), n = new dd(i.host, i.ob, n, "ws" === i.scheme || "wss" === i.scheme), r = (i = new P(i.bd)).toString(), !(o = !q(n.host) || 0 === n.host.length || !eg(n.lc)) && (o = 0 !== r.length) && (r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), o = !(q(r) && 0 !== r.length && !cg.test(r))), o) throw Error(E("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".","#","$","[", or "]".');
			if (e)
				if (e instanceof aj) r = e;
				else {
					if (!q(e)) throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
					r = aj.yb(), n.Rd = e
				} else r = aj.yb();
			o = n.toString();
			var a = z(r.sc, o);
			a || (a = new Ji(n, r.ag), r.sc[o] = a), n = a
		}
		Y.call(this, n, i, bx, !1), this.then = void 0, this.catch = void 0
	}
	Z.zc = Rh, Z.DataConnection = Z.zc, Rh.prototype.dh = function (t, e) {
		this.Ia("q", {
			p: t
		}, e)
	}, Z.zc.prototype.simpleListen = Z.zc.prototype.dh, Rh.prototype.sg = function (t, e) {
		this.Ia("echo", {
			d: t
		}, e)
	}, Z.zc.prototype.echo = Z.zc.prototype.sg, Rh.prototype.interrupt = Rh.prototype.Cb, Z.dg = Fh, Z.RealTimeConnection = Z.dg, Fh.prototype.sendRequest = Fh.prototype.Ia, Fh.prototype.close = Fh.prototype.close, Z.Cg = function (r) {
		var o = Rh.prototype.put;
		return Rh.prototype.put = function (t, e, n, i) {
				p(i) && (i = r()), o.call(this, t, e, n, i)
			},
			function () {
				Rh.prototype.put = o
			}
	}, Z.hijackHash = Z.Cg, Z.cg = dd, Z.ConnectionTarget = Z.cg, Z.wa = function (t) {
		return t.wa()
	}, Z.queryIdentifier = Z.wa, Z.Fg = function (t) {
		return t.k.Va.ba
	}, Z.listens = Z.Fg, Z.ze = function (t) {
		t.ze()
	}, Z.forceRestClient = Z.ze, ka(X, Y);
	var bS = X,
		gj = ["Firebase"],
		hj = n,
		ij;
	gj[0] in hj || !hj.execScript || hj.execScript("var " + gj[0]);
	for (; gj.length && (ij = gj.shift());)!gj.length && p(bS) ? hj[ij] = bS : hj = hj[ij] ? hj[ij] : hj[ij] = {};
	X.goOffline = function () {
		D("Firebase.goOffline", 0, 0, arguments.length), aj.yb().Cb()
	}, X.goOnline = function () {
		D("Firebase.goOnline", 0, 0, arguments.length), aj.yb().vc()
	}, X.enableLogging = od, X.ServerValue = {
		TIMESTAMP: {
			".sv": "timestamp"
		}
	}, X.SDK_VERSION = bk, X.INTERNAL = U, X.Context = aj, X.TEST_ACCESS = Z, X.prototype.name = function () {
		return S("Firebase.name() being deprecated. Please use Firebase.key() instead."), D("Firebase.name", 0, 0, arguments.length), this.key()
	}, X.prototype.name = X.prototype.name, X.prototype.key = function () {
		return D("Firebase.key", 0, 0, arguments.length), this.path.e() ? null : me(this.path)
	}, X.prototype.key = X.prototype.key, X.prototype.o = function (t) {
		if (D("Firebase.child", 1, 1, arguments.length), fa(t)) t = String(t);
		else if (!(t instanceof P))
			if (null === K(this.path)) {
				var e = t;
				e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), ng("Firebase.child", e)
			} else ng("Firebase.child", t);
		return new X(this.k, this.path.o(t))
	}, X.prototype.child = X.prototype.o, X.prototype.parent = function () {
		D("Firebase.parent", 0, 0, arguments.length);
		var t = this.path.parent();
		return null === t ? null : new X(this.k, t)
	}, X.prototype.parent = X.prototype.parent, X.prototype.root = function () {
		D("Firebase.ref", 0, 0, arguments.length);
		for (var t = this; null !== t.parent();) t = t.parent();
		return t
	}, X.prototype.root = X.prototype.root, X.prototype.set = function (t, e) {
		D("Firebase.set", 1, 2, arguments.length), og("Firebase.set", this.path), gg("Firebase.set", t, this.path, !1), F("Firebase.set", 2, e, !0);
		var n = new B;
		return this.k.Ob(this.path, t, null, C(n, e)), n.D
	}, X.prototype.set = X.prototype.set, X.prototype.update = function (t, e) {
		if (D("Firebase.update", 1, 2, arguments.length), og("Firebase.update", this.path), da(t)) {
			for (var n = {}, i = 0; i < t.length; ++i) n["" + i] = t[i];
			t = n, S("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
		}
		return jg("Firebase.update", t, this.path), F("Firebase.update", 2, e, !0), n = new B, this.k.update(this.path, t, C(n, e)), n.D
	}, X.prototype.update = X.prototype.update, X.prototype.Ob = function (t, e, n) {
		if (D("Firebase.setWithPriority", 2, 3, arguments.length), og("Firebase.setWithPriority", this.path), gg("Firebase.setWithPriority", t, this.path, !1), kg("Firebase.setWithPriority", 2, e), F("Firebase.setWithPriority", 3, n, !0), ".length" === this.key() || ".keys" === this.key()) throw "Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
		var i = new B;
		return this.k.Ob(this.path, t, e, C(i, n)), i.D
	}, X.prototype.setWithPriority = X.prototype.Ob, X.prototype.remove = function (t) {
		return D("Firebase.remove", 0, 1, arguments.length), og("Firebase.remove", this.path), F("Firebase.remove", 1, t, !0), this.set(null, t)
	}, X.prototype.remove = X.prototype.remove, X.prototype.transaction = function (t, i, e) {
		if (D("Firebase.transaction", 1, 3, arguments.length), og("Firebase.transaction", this.path), F("Firebase.transaction", 1, t, !1), F("Firebase.transaction", 2, i, !0), p(e) && "boolean" != typeof e) throw Error(E("Firebase.transaction", 3, !0) + "must be a boolean.");
		if (".length" === this.key() || ".keys" === this.key()) throw "Firebase.transaction failed: " + this.key() + " is a read-only object.";
		void 0 === e && (e = !0);
		var o = new B;
		return r(i) && Nb(o.D), Si(this.k, this.path, t, function (t, e, n) {
			t ? o.reject(t) : o.resolve(new ei(e, n)), r(i) && i(t, e, n)
		}, e), o.D
	}, X.prototype.transaction = X.prototype.transaction, X.prototype.$g = function (t, e) {
		D("Firebase.setPriority", 1, 2, arguments.length), og("Firebase.setPriority", this.path), kg("Firebase.setPriority", 1, t), F("Firebase.setPriority", 2, e, !0);
		var n = new B;
		return this.k.Ob(this.path.o(".priority"), t, null, C(n, e)), n.D
	}, X.prototype.setPriority = X.prototype.$g, X.prototype.push = function (t, e) {
		D("Firebase.push", 0, 2, arguments.length), og("Firebase.push", this.path), gg("Firebase.push", t, this.path, !0), F("Firebase.push", 2, e, !0);
		var n = Li(this.k),
			i = bD(n);
		n = this.o(i);
		if (null != t) {
			var o = this,
				a = n.set(t, e).then(function () {
					return o.o(i)
				});
			n.then = u(a.then, a), n.catch = u(a.then, a, void 0), r(e) && Nb(a)
		}
		return n
	}, X.prototype.push = X.prototype.push, X.prototype.lb = function () {
		return og("Firebase.onDisconnect", this.path), new V(this.k, this.path)
	}, X.prototype.onDisconnect = X.prototype.lb, X.prototype.O = function (t, e, n) {
		S("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead."), D("Firebase.auth", 1, 3, arguments.length), pg("Firebase.auth", t), F("Firebase.auth", 2, e, !0), F("Firebase.auth", 3, e, !0);
		var i = new B;
		return dh(this.k.O, t, {}, {
			remember: "none"
		}, C(i, e), n), i.D
	}, X.prototype.auth = X.prototype.O, X.prototype.je = function (t) {
		D("Firebase.unauth", 0, 1, arguments.length), F("Firebase.unauth", 1, t, !0);
		var e = new B;
		return eh(this.k.O, C(e, t)), e.D
	}, X.prototype.unauth = X.prototype.je, X.prototype.Be = function () {
		return D("Firebase.getAuth", 0, 0, arguments.length), this.k.O.Be()
	}, X.prototype.getAuth = X.prototype.Be, X.prototype.Jg = function (t, e) {
		D("Firebase.onAuth", 1, 2, arguments.length), F("Firebase.onAuth", 1, t, !1), Qb("Firebase.onAuth", 2, e), this.k.O.Ib("auth_status", t, e)
	}, X.prototype.onAuth = X.prototype.Jg, X.prototype.Ig = function (t, e) {
		D("Firebase.offAuth", 1, 2, arguments.length), F("Firebase.offAuth", 1, t, !1), Qb("Firebase.offAuth", 2, e), this.k.O.mc("auth_status", t, e)
	}, X.prototype.offAuth = X.prototype.Ig, X.prototype.hg = function (t, e, n) {
		D("Firebase.authWithCustomToken", 1, 3, arguments.length), 2 === arguments.length && Hb(e) && (n = e, e = void 0), pg("Firebase.authWithCustomToken", t), F("Firebase.authWithCustomToken", 2, e, !0), sg("Firebase.authWithCustomToken", 3, n, !0);
		var i = new B;
		return dh(this.k.O, t, {}, n || {}, C(i, e)), i.D
	}, X.prototype.authWithCustomToken = X.prototype.hg, X.prototype.ig = function (t, e, n) {
		D("Firebase.authWithOAuthPopup", 1, 3, arguments.length), 2 === arguments.length && Hb(e) && (n = e, e = void 0), rg("Firebase.authWithOAuthPopup", t), F("Firebase.authWithOAuthPopup", 2, e, !0), sg("Firebase.authWithOAuthPopup", 3, n, !0);
		var i = new B;
		return ih(this.k.O, t, n, C(i, e)), i.D
	}, X.prototype.authWithOAuthPopup = X.prototype.ig, X.prototype.jg = function (t, e, n) {
		D("Firebase.authWithOAuthRedirect", 1, 3, arguments.length), 2 === arguments.length && Hb(e) && (n = e, e = void 0), rg("Firebase.authWithOAuthRedirect", t), F("Firebase.authWithOAuthRedirect", 2, e, !1), sg("Firebase.authWithOAuthRedirect", 3, n, !0);
		var i = new B,
			r = this.k.O,
			o = n,
			a = C(i, e);
		gh(r);
		var s = [Qg];
		o = Ag(o);
		return "anonymous" === t || "firebase" === t ? T(a, Sg("TRANSPORT_UNAVAILABLE")) : (cd.set("redirect_client_options", o.qd), hh(r, s, "/auth/" + t, o, a)), i.D
	}, X.prototype.authWithOAuthRedirect = X.prototype.jg, X.prototype.kg = function (t, e, n, i) {
		D("Firebase.authWithOAuthToken", 2, 4, arguments.length), 3 === arguments.length && Hb(n) && (i = n, n = void 0), rg("Firebase.authWithOAuthToken", t), F("Firebase.authWithOAuthToken", 3, n, !0), sg("Firebase.authWithOAuthToken", 4, i, !0);
		var r = new B;
		return q(e) ? (qg("Firebase.authWithOAuthToken", 2, e), fh(this.k.O, t + "/token", {
			access_token: e
		}, i, C(r, n))) : (sg("Firebase.authWithOAuthToken", 2, e, !1), fh(this.k.O, t + "/token", e, i, C(r, n))), r.D
	}, X.prototype.authWithOAuthToken = X.prototype.kg, X.prototype.gg = function (t, e) {
		D("Firebase.authAnonymously", 0, 2, arguments.length), 1 === arguments.length && Hb(t) && (e = t, t = void 0), F("Firebase.authAnonymously", 1, t, !0), sg("Firebase.authAnonymously", 2, e, !0);
		var n = new B;
		return fh(this.k.O, "anonymous", {}, e, C(n, t)), n.D
	}, X.prototype.authAnonymously = X.prototype.gg, X.prototype.lg = function (t, e, n) {
		D("Firebase.authWithPassword", 1, 3, arguments.length), 2 === arguments.length && Hb(e) && (n = e, e = void 0), sg("Firebase.authWithPassword", 1, t, !1), tg("Firebase.authWithPassword", t, "email"), tg("Firebase.authWithPassword", t, "password"), F("Firebase.authWithPassword", 2, e, !0), sg("Firebase.authWithPassword", 3, n, !0);
		var i = new B;
		return fh(this.k.O, "password", t, n, C(i, e)), i.D
	}, X.prototype.authWithPassword = X.prototype.lg, X.prototype.ve = function (t, e) {
		D("Firebase.createUser", 1, 2, arguments.length), sg("Firebase.createUser", 1, t, !1), tg("Firebase.createUser", t, "email"), tg("Firebase.createUser", t, "password"), F("Firebase.createUser", 2, e, !0);
		var n = new B;
		return this.k.O.ve(t, C(n, e)), n.D
	}, X.prototype.createUser = X.prototype.ve, X.prototype.Xe = function (t, e) {
		D("Firebase.removeUser", 1, 2, arguments.length), sg("Firebase.removeUser", 1, t, !1), tg("Firebase.removeUser", t, "email"), tg("Firebase.removeUser", t, "password"), F("Firebase.removeUser", 2, e, !0);
		var n = new B;
		return this.k.O.Xe(t, C(n, e)), n.D
	}, X.prototype.removeUser = X.prototype.Xe, X.prototype.se = function (t, e) {
		D("Firebase.changePassword", 1, 2, arguments.length), sg("Firebase.changePassword", 1, t, !1), tg("Firebase.changePassword", t, "email"), tg("Firebase.changePassword", t, "oldPassword"), tg("Firebase.changePassword", t, "newPassword"), F("Firebase.changePassword", 2, e, !0);
		var n = new B;
		return this.k.O.se(t, C(n, e)), n.D
	}, X.prototype.changePassword = X.prototype.se, X.prototype.re = function (t, e) {
		D("Firebase.changeEmail", 1, 2, arguments.length), sg("Firebase.changeEmail", 1, t, !1), tg("Firebase.changeEmail", t, "oldEmail"), tg("Firebase.changeEmail", t, "newEmail"), tg("Firebase.changeEmail", t, "password"), F("Firebase.changeEmail", 2, e, !0);
		var n = new B;
		return this.k.O.re(t, C(n, e)), n.D
	}, X.prototype.changeEmail = X.prototype.re, X.prototype.Ze = function (t, e) {
		D("Firebase.resetPassword", 1, 2, arguments.length), sg("Firebase.resetPassword", 1, t, !1), tg("Firebase.resetPassword", t, "email"), F("Firebase.resetPassword", 2, e, !0);
		var n = new B;
		return this.k.O.Ze(t, C(n, e)), n.D
	}, X.prototype.resetPassword = X.prototype.Ze
}(), $.each($("span[id]"), function (t, n) {
	var i = $(n).parent().find(".postviews"),
		r = new Firebase("https://aazs-17bc0.firebaseio.com/pages/id/" + $(n).attr("id"));
	r.once("value", function (t) {
		var e = !1;
		null == (t = t.val()) && ((t = {
			value: 0
		}).url = window.location.href, t.id = $(n).attr("id"), e = !0), i.text(t.value), t.value++, "/" != window.location.pathname && (e ? r.set(t) : r.child("value").set(t.value))
	})
}), 'use strict';
jQuery.cookie = function (a, b, c) {
	if (1 < arguments.length && "[object Object]" !== String(b)) {
		if (c = jQuery.extend({}, c), (null === b || void 0 === b) && (c.expires = -1), "number" == typeof c.expires) {
			var d = c.expires;
			var e = c.expires = new Date;
			e.setDate(e.getDate() + d)
		}
		return b = String(b), document.cookie = [encodeURIComponent(a), "=", c.raw ? b : encodeURIComponent(b), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
	}
	c = b || {};
	e = c.raw ? function (s) {
		return s
	} : decodeURIComponent;
	return (d = (new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)")).exec(document.cookie)) ? e(d[1]) : null
};
jQuery(document).ready(function ($) {
	if ("yes" != $.cookie("popup-email-box")) {
		$(".outer-email-popup-box").delay(15E3).fadeIn("normal");
		$(".exit-button-subbox, .button").click(function () {
			$(".outer-email-popup-box").stop().fadeOut("normal")
		})
	}
	$.cookie("popup-email-box", "yes", {
		path: "/",
		expires: 1
	})
});
