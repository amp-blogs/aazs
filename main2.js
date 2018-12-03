function ts_isRTL() {}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(w, e) {
    "use strict";
    var t = [],
        C = w.document,
        r = Object.getPrototypeOf,
        o = t.slice,
        p = t.concat,
        _ = t.push,
        i = t.indexOf,
        n = {},
        a = n.toString,
        h = n.hasOwnProperty,
        s = h.toString,
        l = s.call(Object),
        f = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var r, i = (t = t || C).createElement("script");
        if (i.text = e, n)
            for (r in c) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e
    }
    var k = function(e, t) {
            return new k.fn.init(e, t)
        },
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function u(e) {
        var t = !!e && "length" in e && e.length,
            n = y(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: "3.3.1",
        constructor: k,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: _,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, a, s = arguments[0] || {},
            o = 1,
            _ = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[o] || {}, o++), "object" == typeof s || m(s) || (s = {}), o === _ && (s = this, o--); o < _; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && k.isPlainObject(n) ? n : {}, s[t] = k.extend(l, a, r)) : void 0 !== r && (s[t] = r));
        return s
    }, k.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== a.call(e) || (t = r(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || s.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            v(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (u(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (u(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : _.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, a = e.length, s = !n; i < a; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (u(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return p.apply([], s)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var $ = function(n) {
        var e, $, v, a, i, d, b, p, y, _, l, x, w, s, C, h, o, c, f, k = "sizzle" + 1 * new Date,
            m = n.document,
            T = 0,
            r = 0,
            u = se(),
            g = se(),
            S = se(),
            L = function(e, t) {
                return e === t && (l = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            E = t.pop,
            j = t.push,
            A = t.push,
            D = t.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + q + "*(" + M + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + q + "*\\]",
            R = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            H = new RegExp(q + "+", "g"),
            B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            F = new RegExp("^" + q + "*," + q + "*"),
            W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            z = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
            U = new RegExp(R),
            X = new RegExp("^" + M + "$"),
            Q = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            V = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                x()
            },
            ie = me(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            A.apply(t = D.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (n) {
            A = {
                apply: t.length ? function(e, t) {
                    j.apply(e, D.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, r) {
            var i, a, s, o, _, l, c, b = t && t.ownerDocument,
                u = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u) return n;
            if (!r && ((t ? t.ownerDocument || t : m) !== w && x(t), t = t || w, C)) {
                if (11 !== u && (_ = J.exec(e)))
                    if (i = _[1]) {
                        if (9 === u) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (b && (s = b.getElementById(i)) && f(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (_[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = _[3]) && $.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(i)), n
                    } if ($.qsa && !S[e + " "] && (!h || !h.test(e))) {
                    if (1 !== u) b = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ne) : t.setAttribute("id", o = k), a = (l = d(e)).length; a--;) l[a] = "#" + o + " " + fe(l[a]);
                        c = l.join(","), b = K.test(e) && pe(t.parentNode) || t
                    }
                    if (c) try {
                        return A.apply(n, b.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        o === k && t.removeAttribute("id")
                    }
                }
            }
            return p(e.replace(B, "$1"), t, n, r)
        }

        function se() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > v.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[k] = !0, e
        }

        function _e(e) {
            var t = w.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) v.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function be(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ue(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function $e(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function de(s) {
            return oe(function(a) {
                return a = +a, oe(function(e, t) {
                    for (var n, r = s([], e.length, a), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in $ = ae.support = {}, i = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = ae.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== w && 9 === r.nodeType && r.documentElement && (s = (w = r).documentElement, C = !i(w), m !== w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), $.attributes = _e(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), $.getElementsByTagName = _e(function(e) {
                    return e.appendChild(w.createComment("")), !e.getElementsByTagName("*").length
                }), $.getElementsByClassName = G.test(w.getElementsByClassName), $.getById = _e(function(e) {
                    return s.appendChild(e).id = k, !w.getElementsByName || !w.getElementsByName(k).length
                }), $.getById ? (v.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, v.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (v.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, v.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, r, i, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (i = t.getElementsByName(e), r = 0; a = i[r++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), v.find.TAG = $.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : $.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return a
                }, v.find.CLASS = $.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, o = [], h = [], ($.qsa = G.test(w.querySelectorAll)) && (_e(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || h.push("\\[" + q + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + k + "-]").length || h.push("~="), e.querySelectorAll(":checked").length || h.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || h.push(".#.+[+~]")
                }), _e(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = w.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && h.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), ($.matchesSelector = G.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && _e(function(e) {
                    $.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), o.push("!=", R)
                }), h = h.length && new RegExp(h.join("|")), o = o.length && new RegExp(o.join("|")), t = G.test(s.compareDocumentPosition), f = t || G.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !$.sortDetached && t.compareDocumentPosition(e) === n ? e === w || e.ownerDocument === m && f(m, e) ? -1 : t === w || t.ownerDocument === m && f(m, t) ? 1 : _ ? O(_, e) - O(_, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!i || !a) return e === w ? -1 : t === w ? 1 : i ? -1 : a ? 1 : _ ? O(_, e) - O(_, t) : 0;
                    if (i === a) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (; s[r] === o[r];) r++;
                    return r ? ce(s[r], o[r]) : s[r] === m ? -1 : o[r] === m ? 1 : 0
                }), w
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== w && x(e), t = t.replace(z, "='$1']"), $.matchesSelector && C && !S[t + " "] && (!o || !o.test(t)) && (!h || !h.test(t))) try {
                    var n = c.call(e, t);
                    if (n || $.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ae(t, w, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== w && x(e), f(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== w && x(e);
                var n = v.attrHandle[t.toLowerCase()],
                    r = n && N.call(v.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : $.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(te, ne)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !$.detectDuplicates, _ = !$.sortStable && e.slice(0), e.sort(L), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return _ = null, e
            }, a = ae.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += a(t);
                return n
            }, (v = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: Q,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = u[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && u(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(H, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(d, e, t, p, h) {
                        var f = "nth" !== d.slice(0, 3),
                            m = "last" !== d.slice(-4),
                            g = "of-type" === e;
                        return 1 === p && 0 === h ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, a, s, o, _, l = f !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                b = g && e.nodeName.toLowerCase(),
                                u = !n && !g,
                                $ = !1;
                            if (c) {
                                if (f) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (g ? s.nodeName.toLowerCase() === b : 1 === s.nodeType) return !1;
                                        _ = l = "only" === d && !_ && "nextSibling"
                                    }
                                    return !0
                                }
                                if (_ = [m ? c.firstChild : c.lastChild], m && u) {
                                    for ($ = (o = (r = (i = (a = (s = c)[k] || (s[k] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[d] || [])[0] === T && r[1]) && r[2], s = o && c.childNodes[o]; s = ++o && s && s[l] || ($ = o = 0) || _.pop();)
                                        if (1 === s.nodeType && ++$ && s === e) {
                                            i[d] = [T, o, $];
                                            break
                                        }
                                } else if (u && ($ = o = (r = (i = (a = (s = e)[k] || (s[k] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[d] || [])[0] === T && r[1]), !1 === $)
                                    for (;
                                        (s = ++o && s && s[l] || ($ = o = 0) || _.pop()) && ((g ? s.nodeName.toLowerCase() !== b : 1 !== s.nodeType) || !++$ || (u && ((i = (a = s[k] || (s[k] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[d] = [T, $]), s !== e)););
                                return ($ -= h) === p || $ % p == 0 && 0 <= $ / p
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, s = v.pseudos[e] || v.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[k] ? s(a) : 1 < s.length ? (t = [e, e, "", a], v.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, r = s(e, a), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            o = b(e.replace(B, "$1"));
                        return o[k] ? oe(function(e, t, n, r) {
                            for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, o(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: $e(!1),
                    disabled: $e(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !v.pseudos.empty(e)
                    },
                    header: function(e) {
                        return V.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: de(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: de(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: de(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = v.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) v.pseudos[e] = be(e);
        for (e in {
                submit: !0,
                reset: !0
            }) v.pseudos[e] = ue(e);

        function he() {}

        function fe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(o, e, t) {
            var _ = e.dir,
                l = e.next,
                c = l || _,
                b = t && "parentNode" === c,
                u = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[_];)
                    if (1 === e.nodeType || b) return o(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, a, s = [T, u];
                if (n) {
                    for (; e = e[_];)
                        if ((1 === e.nodeType || b) && o(e, t, n)) return !0
                } else
                    for (; e = e[_];)
                        if (1 === e.nodeType || b)
                            if (i = (a = e[k] || (e[k] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[_] || e;
                            else {
                                if ((r = i[c]) && r[0] === T && r[1] === u) return s[2] = r[2];
                                if ((i[c] = s)[2] = o(e, t, n)) return !0
                            } return !1
            }
        }

        function ge(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function ve(e, t, n, r, i) {
            for (var a, s = [], o = 0, _ = e.length, l = null != t; o < _; o++)(a = e[o]) && (n && !n(a, r, i) || (s.push(a), l && t.push(o)));
            return s
        }

        function ye($, d, p, h, f, e) {
            return h && !h[k] && (h = ye(h)), f && !f[k] && (f = ye(f, e)), oe(function(e, t, n, r) {
                var i, a, s, o = [],
                    _ = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                        return n
                    }(d || "*", n.nodeType ? [n] : n, []),
                    b = !$ || !e && d ? c : ve(c, o, $, n, r),
                    u = p ? f || (e ? $ : l || h) ? [] : t : b;
                if (p && p(b, u, n, r), h)
                    for (i = ve(u, _), h(i, [], n, r), a = i.length; a--;)(s = i[a]) && (u[_[a]] = !(b[_[a]] = s));
                if (e) {
                    if (f || $) {
                        if (f) {
                            for (i = [], a = u.length; a--;)(s = u[a]) && i.push(b[a] = s);
                            f(null, u = [], i, r)
                        }
                        for (a = u.length; a--;)(s = u[a]) && -1 < (i = f ? O(e, s) : o[a]) && (e[i] = !(t[i] = s))
                    }
                } else u = ve(u === t ? u.splice(l, u.length) : u), f ? f(null, t, u, r) : A.apply(t, u)
            })
        }

        function xe(e) {
            for (var i, t, n, r = e.length, a = v.relative[e[0].type], s = a || v.relative[" "], o = a ? 1 : 0, _ = me(function(e) {
                    return e === i
                }, s, !0), l = me(function(e) {
                    return -1 < O(i, e)
                }, s, !0), c = [function(e, t, n) {
                    var r = !a && (n || t !== y) || ((i = t).nodeType ? _(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; o < r; o++)
                if (t = v.relative[e[o].type]) c = [me(ge(c), t)];
                else {
                    if ((t = v.filter[e[o].type].apply(null, e[o].matches))[k]) {
                        for (n = ++o; n < r && !v.relative[e[n].type]; n++);
                        return ye(1 < o && ge(c), 1 < o && fe(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, o < n && xe(e.slice(o, n)), n < r && xe(e = e.slice(n)), n < r && fe(e))
                    }
                    c.push(t)
                } return ge(c)
        }
        return he.prototype = v.filters = v.pseudos, v.setFilters = new he, d = ae.tokenize = function(e, t) {
            var n, r, i, a, s, o, _, l = g[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, o = [], _ = v.preFilter; s;) {
                for (a in n && !(r = F.exec(s)) || (r && (s = s.slice(r[0].length) || s), o.push(i = [])), n = !1, (r = W.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), s = s.slice(n.length)), v.filter) !(r = Q[a].exec(s)) || _[a] && !(r = _[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : g(e, o).slice(0)
        }, b = ae.compile = function(e, t) {
            var n, h, f, m, g, r, i = [],
                a = [],
                s = S[e + " "];
            if (!s) {
                for (t || (t = d(e)), n = t.length; n--;)(s = xe(t[n]))[k] ? i.push(s) : a.push(s);
                (s = S(e, (h = a, f = i, m = 0 < f.length, g = 0 < h.length, r = function(e, t, n, r, i) {
                    var a, s, o, _ = 0,
                        l = "0",
                        c = e && [],
                        b = [],
                        u = y,
                        $ = e || g && v.find.TAG("*", i),
                        d = T += null == u ? 1 : Math.random() || .1,
                        p = $.length;
                    for (i && (y = t === w || t || i); l !== p && null != (a = $[l]); l++) {
                        if (g && a) {
                            for (s = 0, t || a.ownerDocument === w || (x(a), n = !C); o = h[s++];)
                                if (o(a, t || w, n)) {
                                    r.push(a);
                                    break
                                } i && (T = d)
                        }
                        m && ((a = !o && a) && _--, e && c.push(a))
                    }
                    if (_ += l, m && l !== _) {
                        for (s = 0; o = f[s++];) o(c, b, t, n);
                        if (e) {
                            if (0 < _)
                                for (; l--;) c[l] || b[l] || (b[l] = E.call(r));
                            b = ve(b)
                        }
                        A.apply(r, b), i && !e && 0 < b.length && 1 < _ + f.length && ae.uniqueSort(r)
                    }
                    return i && (T = d, y = u), c
                }, m ? oe(r) : r))).selector = e
            }
            return s
        }, p = ae.select = function(e, t, n, r) {
            var i, a, s, o, _, l = "function" == typeof e && e,
                c = !r && d(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && C && v.relative[a[1].type]) {
                    if (!(t = (v.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !v.relative[o = s.type]);)
                    if ((_ = v.find[o]) && (r = _(s.matches[0].replace(Z, ee), K.test(a[0].type) && pe(t.parentNode) || t))) {
                        if (a.splice(i, 1), !(e = r.length && fe(a))) return A.apply(n, r), n;
                        break
                    }
            }
            return (l || b(e, c))(r, t, !C, n, !t || K.test(e) && pe(t.parentNode) || t), n
        }, $.sortStable = k.split("").sort(L).join("") === k, $.detectDuplicates = !!l, x(), $.sortDetached = _e(function(e) {
            return 1 & e.compareDocumentPosition(w.createElement("fieldset"))
        }), _e(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), $.attributes && _e(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), _e(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ae
    }(w);
    k.find = $, k.expr = $.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = $.uniqueSort, k.text = $.getText, k.isXMLDoc = $.isXML, k.contains = $.contains, k.escapeSelector = $.escape;
    var d = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                } return r
        },
        x = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        T = k.expr.match.needsContext;

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && T.test(e) ? k(e) : e || [], !1).length
        }
    });
    var E, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || E, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), L.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, E = k(C);
    var A = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                a = [],
                s = "string" != typeof e && k(e);
            if (!T.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        } return this.pushStack(1 < a.length ? k.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (D[r] || k.uniqueSort(n), A.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function q(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, a, s, o = [],
            _ = [],
            l = -1,
            c = function() {
                for (s = s || r.once, a = i = !0; _.length; l = -1)
                    for (t = _.shift(); ++l < o.length;) !1 === o[l].apply(t[0], t[1]) && r.stopOnFalse && (l = o.length, t = !1);
                r.memory || (t = !1), i = !1, s && (o = t ? [] : "")
            },
            b = {
                add: function() {
                    return o && (t && !i && (l = o.length - 1, _.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && b.has(t) || o.push(t) : t && t.length && "string" !== y(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, o, n));) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, o) : 0 < o.length
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return s = _ = [], o = t = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = _ = [], t || i || (o = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], _.push(t), i || c()), this
                },
                fire: function() {
                    return b.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return b
    }, k.extend({
        Deferred: function(e) {
            var a = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(a, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                o[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var _ = 0;

                        function l(i, a, s, o) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < _)) {
                                            if ((e = s.apply(n, r)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? o ? t.call(e, l(_, a, q, o), l(_, a, M, o)) : (_++, t.call(e, l(_, a, q, o), l(_, a, M, o), l(_, a, q, a.notifyWith))) : (s !== q && (n = void 0, r = [e]), (o || a.resolveWith)(n, r))
                                        }
                                    },
                                    t = o ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), _ <= i + 1 && (s !== M && (n = void 0, r = [e]), a.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), w.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            a[0][3].add(l(0, e, m(r) ? r : q, e.notifyWith)), a[1][3].add(l(0, e, m(t) ? t : q)), a[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, s) : s
                    }
                },
                o = {};
            return k.each(a, function(e, t) {
                var n = t[2],
                    r = t[5];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = n.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = o.call(arguments),
                a = k.Deferred(),
                s = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? o.call(arguments) : e, --n || a.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, a.done(s(t)).resolve, a.reject, !n), "pending" === a.state() || m(i[t] && i[t].then))) return a.then();
            for (; t--;) I(i[t], s(t), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        w.console && w.console.warn && e && R.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        w.setTimeout(function() {
            throw e
        })
    };
    var H = k.Deferred();

    function B() {
        C.removeEventListener("DOMContentLoaded", B), w.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return H.then(e).catch(function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || H.resolveWith(C, [k])
        }
    }), k.ready.then = H.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? w.setTimeout(k.ready) : (C.addEventListener("DOMContentLoaded", B), w.addEventListener("load", B));
    var F = function(e, t, n, r, i, a, s) {
            var o = 0,
                _ = e.length,
                l = null == n;
            if ("object" === y(n))
                for (o in i = !0, n) F(e, t, o, n[o], !0, a, s);
            else if (void 0 !== r && (i = !0, m(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; o < _; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
            return i ? e : l ? t.call(e) : _ ? t(e[0], n) : a
        },
        W = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(W, "ms-").replace(z, U)
    }
    var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var V = new Y,
        G = new Y,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return G.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, a = this[0],
                s = a && a.attributes;
            if (void 0 === n) {
                if (this.length && (i = G.get(a), 1 === a.nodeType && !V.get(a, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(a, r, i[r]));
                    V.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : F(this, function(e) {
                var t;
                if (a && void 0 === e) {
                    if (void 0 !== (t = G.get(a, n))) return t;
                    if (void 0 !== (t = Z(a, n))) return t
                } else this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    V.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                a = this,
                s = this.length,
                o = function() {
                    --r || i.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = V.get(a[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
            return o(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
        },
        ie = function(e, t, n, r) {
            var i, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            for (a in i = n.apply(e, r || []), t) e.style[a] = s[a];
            return i
        };

    function ae(e, t, n, r) {
        var i, a, s = 20,
            o = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            _ = o(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +_) && te.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (_ /= 2, l = l || c[3], c = +_ || 1; s--;) k.style(e, t, c + l), (1 - a) * (1 - (a = o() / _ || .5)) <= 0 && (s = 0), c /= a;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +_ || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var se = {};

    function oe(e, t) {
        for (var n, r, i = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (n = r.style.display, t ? ("none" === n && (i[a] = V.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && re(r) && (i[a] = (b = l = _ = void 0, l = (o = r).ownerDocument, c = o.nodeName, (b = se[c]) || (_ = l.body.appendChild(l.createElement(c)), b = k.css(_, "display"), _.parentNode.removeChild(_), "none" === b && (b = "block"), se[c] = b)))) : "none" !== n && (i[a] = "none", V.set(r, "display", n)));
        var o, _, l, c, b;
        for (a = 0; a < s; a++) null != i[a] && (e[a].style.display = i[a]);
        return e
    }
    k.fn.extend({
        show: function() {
            return oe(this, !0)
        },
        hide: function() {
            return oe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var _e = /^(?:checkbox|radio)$/i,
        le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ue(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? k.merge([e], n) : n
    }

    function $e(e, t) {
        for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td;
    var de, pe, he = /<|&#?\w+;/;

    function fe(e, t, n, r, i) {
        for (var a, s, o, _, l, c, b = t.createDocumentFragment(), u = [], $ = 0, d = e.length; $ < d; $++)
            if ((a = e[$]) || 0 === a)
                if ("object" === y(a)) k.merge(u, a.nodeType ? [a] : a);
                else if (he.test(a)) {
            for (s = s || b.appendChild(t.createElement("div")), o = (le.exec(a) || ["", ""])[1].toLowerCase(), _ = be[o] || be._default, s.innerHTML = _[1] + k.htmlPrefilter(a) + _[2], c = _[0]; c--;) s = s.lastChild;
            k.merge(u, s.childNodes), (s = b.firstChild).textContent = ""
        } else u.push(t.createTextNode(a));
        for (b.textContent = "", $ = 0; a = u[$++];)
            if (r && -1 < k.inArray(a, r)) i && i.push(a);
            else if (l = k.contains(a.ownerDocument, a), s = ue(b.appendChild(a), "script"), l && $e(s), n)
            for (c = 0; a = s[c++];) ce.test(a.type || "") && n.push(a);
        return b
    }
    de = C.createDocumentFragment().appendChild(C.createElement("div")), (pe = C.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), de.appendChild(pe), f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
    var me = C.documentElement,
        ge = /^key/,
        ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ye = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function we() {
        return !1
    }

    function Ce() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function ke(e, t, n, r, i, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, o, n, r, t[o], a);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
        else if (!i) return e;
        return 1 === a && (s = i, (i = function(e) {
            return k().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var a, s, o, _, l, c, b, u, $, d, p, h = V.get(t);
            if (h)
                for (n.handler && (n = (a = n).handler, i = a.selector), i && k.find.matchesSelector(me, i), n.guid || (n.guid = k.guid++), (_ = h.events) || (_ = h.events = {}), (s = h.handle) || (s = h.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(P) || [""]).length; l--;) $ = p = (o = ye.exec(e[l]) || [])[1], d = (o[2] || "").split(".").sort(), $ && (b = k.event.special[$] || {}, $ = (i ? b.delegateType : b.bindType) || $, b = k.event.special[$] || {}, c = k.extend({
                    type: $,
                    origType: p,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, a), (u = _[$]) || ((u = _[$] = []).delegateCount = 0, b.setup && !1 !== b.setup.call(t, r, d, s) || t.addEventListener && t.addEventListener($, s)), b.add && (b.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? u.splice(u.delegateCount++, 0, c) : u.push(c), k.event.global[$] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, s, o, _, l, c, b, u, $, d, p, h = V.hasData(e) && V.get(e);
            if (h && (_ = h.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if ($ = p = (o = ye.exec(t[l]) || [])[1], d = (o[2] || "").split(".").sort(), $) {
                        for (b = k.event.special[$] || {}, u = _[$ = (r ? b.delegateType : b.bindType) || $] || [], o = o[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = u.length; a--;) c = u[a], !i && p !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (u.splice(a, 1), c.selector && u.delegateCount--, b.remove && b.remove.call(e, c));
                        s && !u.length && (b.teardown && !1 !== b.teardown.call(e, d, h.handle) || k.removeEvent(e, $, h.handle), delete _[$])
                    } else
                        for ($ in _) k.event.remove(e, $ + t[l], n, r, !0);
                k.isEmptyObject(_) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, a, s, o = k.event.fix(e),
                _ = new Array(arguments.length),
                l = (V.get(this, "events") || {})[o.type] || [],
                c = k.event.special[o.type] || {};
            for (_[0] = o, t = 1; t < arguments.length; t++) _[t] = arguments[t];
            if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
                for (s = k.event.handlers.call(this, o, l), t = 0;
                    (i = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = i.elem, n = 0;
                        (a = i.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (r = ((k.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, _)) && !1 === (o.result = r) && (o.preventDefault(), o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, s, o = [],
                _ = t.delegateCount,
                l = e.target;
            if (_ && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (a = [], s = {}, n = 0; n < _; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), s[i] && a.push(r);
                        a.length && o.push({
                            elem: l,
                            handlers: a
                        })
                    } return l = this, _ < t.length && o.push({
                elem: l,
                handlers: t.slice(_)
            }), o
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ce() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return S(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ee(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ae(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, r, i, a, s, o, _, l;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (a = V.access(e), s = V.set(t, a), l = a.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            G.hasData(e) && (o = G.access(e), _ = k.extend({}, o), G.set(t, _))
        }
    }

    function Oe(n, r, i, a) {
        r = p.apply([], r);
        var e, t, s, o, _, l, c = 0,
            b = n.length,
            u = b - 1,
            $ = r[0],
            d = m($);
        if (d || 1 < b && "string" == typeof $ && !f.checkClone && Le.test($)) return n.each(function(e) {
            var t = n.eq(e);
            d && (r[0] = $.call(this, e, t.html())), Oe(t, r, i, a)
        });
        if (b && (t = (e = fe(r, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (s = k.map(ue(e, "script"), je)).length; c < b; c++) _ = e, c !== u && (_ = k.clone(_, !0, !0), o && k.merge(s, ue(_, "script"))), i.call(n[c], _, c);
            if (o)
                for (l = s[s.length - 1].ownerDocument, k.map(s, Ae), c = 0; c < o; c++) _ = s[c], ce.test(_.type || "") && !V.access(_, "globalEval") && k.contains(l, _) && (_.src && "module" !== (_.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(_.src) : v(_.textContent.replace(Ne, ""), l, _))
        }
        return n
    }

    function Pe(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || k.cleanData(ue(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && $e(ue(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, a, s, o, _, l, c = e.cloneNode(!0),
                b = k.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (s = ue(c), r = 0, i = (a = ue(e)).length; r < i; r++) o = a[r], "input" === (l = (_ = s[r]).nodeName.toLowerCase()) && _e.test(o.type) ? _.checked = o.checked : "input" !== l && "textarea" !== l || (_.defaultValue = o.defaultValue);
            if (t)
                if (n)
                    for (a = a || ue(e), s = s || ue(c), r = 0, i = a.length; r < i; r++) De(a[r], s[r]);
                else De(e, c);
            return 0 < (s = ue(c, "script")).length && $e(s, !b && ue(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Q(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[V.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ee(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ue(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !be[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Oe(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ue(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, a = 0; a <= i; a++) t = a === i ? this : this.clone(!0), k(r[a])[s](t), _.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Me = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = w), t.getComputedStyle(e)
        },
        Ie = new RegExp(ne.join("|"), "i");

    function Re(e, t, n) {
        var r, i, a, s, o = e.style;
        return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (s = k.style(e, t)), !f.pixelBoxStyles() && qe.test(s) && Ie.test(t) && (r = o.width, i = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = i, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function He(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (_) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", _.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(o).appendChild(_);
                var e = w.getComputedStyle(_);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), _.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), _.style.position = "absolute", i = 36 === _.offsetWidth || "absolute", me.removeChild(o), _ = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, a, s, o = C.createElement("div"),
            _ = C.createElement("div");
        _.style && (_.style.backgroundClip = "content-box", _.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === _.style.backgroundClip, k.extend(f, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ue = ["Webkit", "Moz", "ms"],
        Xe = C.createElement("div").style;

    function Qe(e) {
        var t = k.cssProps[e];
        return t || (t = k.cssProps[e] = function(e) {
            if (e in Xe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e), t
    }

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ve(e, t, n, r, i, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            _ = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (_ += k.css(e, n + ne[s], !0, i)), r ? ("content" === n && (_ -= k.css(e, "padding" + ne[s], !0, i)), "margin" !== n && (_ -= k.css(e, "border" + ne[s] + "Width", !0, i))) : (_ += k.css(e, "padding" + ne[s], !0, i), "padding" !== n ? _ += k.css(e, "border" + ne[s] + "Width", !0, i) : o += k.css(e, "border" + ne[s] + "Width", !0, i));
        return !r && 0 <= a && (_ += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - _ - o - .5))), _
    }

    function Ge(e, t, n) {
        var r = Me(e),
            i = Re(e, t, r),
            a = "border-box" === k.css(e, "boxSizing", !1, r),
            s = a;
        if (qe.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return s = s && (f.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === k.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ve(e, t, n || (a ? "border" : "content"), s, r, i) + "px"
    }

    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, s, o = X(t),
                    _ = Fe.test(t),
                    l = e.style;
                if (_ || (t = Qe(o)), s = k.cssHooks[t] || k.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" == (a = typeof n) && (i = te.exec(n)) && i[1] && (n = ae(e, t, i), a = "number"), null != n && n == n && ("number" === a && (n += i && i[3] || (k.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (_ ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, a, s, o = X(t);
            return Fe.test(t) || (t = Qe(o)), (s = k.cssHooks[t] || k.cssHooks[o]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Re(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, o) {
        k.cssHooks[o] = {
            get: function(e, t, n) {
                if (t) return !Be.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, o, n) : ie(e, We, function() {
                    return Ge(e, o, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Me(e),
                    a = "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n && Ve(e, o, n, a, i);
                return a && f.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(i[o]) - Ve(e, o, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[o] = t, t = k.css(e, o)), Ye(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = He(f.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, a) {
        k.cssHooks[i + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + a] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + a].set = Ye)
    }), k.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; s < i; s++) a[t[s]] = k.css(e, t[s], !1, r);
                    return a
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = Je).prototype = {
        constructor: Je,
        init: function(e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = Je.prototype.init, k.fx.step = {};
    var Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function it() {
        Ze && (!1 === C.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(it) : w.setTimeout(it, k.fx.interval), k.fx.tick())
    }

    function at() {
        return w.setTimeout(function() {
            Ke = void 0
        }), Ke = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var r, i = (_t.tweeners[t] || []).concat(_t.tweeners["*"]), a = 0, s = i.length; a < s; a++)
            if (r = i[a].call(n, t, e)) return r
    }

    function _t(a, e, t) {
        var n, s, r = 0,
            i = _t.prefilters.length,
            o = k.Deferred().always(function() {
                delete _.elem
            }),
            _ = function() {
                if (s) return !1;
                for (var e = Ke || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return o.notifyWith(a, [l, n, t]), n < 1 && i ? t : (i || o.notifyWith(a, [l, 1, 0]), o.resolveWith(a, [l]), !1)
            },
            l = o.promise({
                elem: a,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ke || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(a, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (o.notifyWith(a, [l, 1, 0]), o.resolveWith(a, [l, e])) : o.rejectWith(a, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, a, s;
                for (n in e)
                    if (i = t[r = X(n)], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (s = k.cssHooks[r]) && "expand" in s)
                        for (n in a = s.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = _t.prefilters[r].call(l, a, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, ot, l), m(l.opts.start) && l.opts.start.call(a, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(_, {
            elem: a,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(_t, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], _t.tweeners[n] = _t.tweeners[n] || [], _t.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, a, s, o, _, l, c, b = "width" in t || "height" in t,
                u = this,
                $ = {},
                d = e.style,
                p = e.nodeType && re(e),
                h = V.get(e, "fxshow");
            for (r in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || o()
                }), s.unqueued++, u.always(function() {
                    u.always(function() {
                        s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (i = t[r], nt.test(i)) {
                    if (delete t[r], a = a || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    $[r] = h && h[r] || k.style(e, r)
                } if ((_ = !k.isEmptyObject(t)) || !k.isEmptyObject($))
                for (r in b && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = h && h.display) && (l = V.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (oe([e], !0), l = e.style.display || l, c = k.css(e, "display"), oe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (_ || (u.done(function() {
                        d.display = l
                    }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function() {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), _ = !1, $) _ || (h ? "hidden" in h && (p = h.hidden) : h = V.access(e, "fxshow", {
                    display: l
                }), a && (h.hidden = !p), p && oe([e], !0), u.done(function() {
                    for (r in p || oe([e]), V.remove(e, "fxshow"), $) k.style(e, r, $[r])
                })), _ = ot(p ? h[r] : 0, r, u), r in h || (h[r] = _.start, p && (_.end = _.start, _.start = 0))
        }],
        prefilter: function(e, t) {
            t ? _t.prefilters.unshift(e) : _t.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                a = k.speed(e, n, r),
                s = function() {
                    var e = _t(this, k.extend({}, t), a);
                    (i || V.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(i, e, a) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(a)
            };
            return "string" != typeof i && (a = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = V.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && rt.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                !e && a || k.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = V.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = k.timers,
                    a = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ke = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        Ze || (Ze = !0, it())
    }, k.fx.stop = function() {
        Ze = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = w.setTimeout(e, r);
            t.stop = function() {
                w.clearTimeout(n)
            }
        })
    }, et = C.createElement("input"), tt = C.createElement("select").appendChild(C.createElement("option")), et.type = "checkbox", f.checkOn = "" !== et.value, f.optSelected = tt.selected, (et = C.createElement("input")).value = "t", et.type = "radio", f.radioValue = "t" === et.value;
    var lt, ct = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return F(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === a && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ct[t] || k.find.attr;
        ct[t] = function(e, t, n) {
            var r, i, a = t.toLowerCase();
            return n || (i = ct[a], ct[a] = r, r = null != s(e, t, n) ? a : null, ct[a] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;

    function $t(e) {
        return (e.match(P) || []).join(" ")
    }

    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function pt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return F(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, a, s, o, _ = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, dt(this)))
            });
            if ((e = pt(t)).length)
                for (; n = this[_++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + $t(i) + " ") {
                        for (s = 0; a = e[s++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        i !== (o = $t(r)) && n.setAttribute("class", o)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, a, s, o, _ = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = pt(t)).length)
                for (; n = this[_++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + $t(i) + " ") {
                        for (s = 0; a = e[s++];)
                            for (; - 1 < r.indexOf(" " + a + " ");) r = r.replace(" " + a + " ", " ");
                        i !== (o = $t(r)) && n.setAttribute("class", o)
                    } return this
        },
        toggleClass: function(i, t) {
            var a = typeof i,
                s = "string" === a || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, dt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0, n = k(this), r = pt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== a || ((e = dt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + $t(dt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ht, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : $t(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        o = s ? null : [],
                        _ = s ? a + 1 : i.length;
                    for (r = a < 0 ? _ : s ? a : 0; r < _; r++)
                        if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), s) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = k.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < k.inArray(k.valHooks.option.get(r), a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, f.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), f.focusin = "onfocusin" in w;
    var ft = /^(?:focusinfocus|focusoutblur)$/,
        mt = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, a, s, o, _, l, c, b, u = [n || C],
                $ = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = b = s = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !ft.test($ + k.event.triggered) && (-1 < $.indexOf(".") && ($ = (d = $.split(".")).shift(), d.sort()), _ = $.indexOf(":") < 0 && "on" + $, (e = e[k.expando] ? e : new k.Event($, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[$] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !g(n)) {
                    for (o = c.delegateType || $, ft.test(o + $) || (a = a.parentNode); a; a = a.parentNode) u.push(a), s = a;
                    s === (n.ownerDocument || C) && u.push(s.defaultView || s.parentWindow || w)
                }
                for (i = 0;
                    (a = u[i++]) && !e.isPropagationStopped();) b = a, e.type = 1 < i ? o : c.bindType || $, (l = (V.get(a, "events") || {})[e.type] && V.get(a, "handle")) && l.apply(a, t), (l = _ && a[_]) && l.apply && Q(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = $, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !Q(n) || _ && m(n[$]) && !g(n) && ((s = n[_]) && (n[_] = null), k.event.triggered = $, e.isPropagationStopped() && b.addEventListener($, mt), n[$](), e.isPropagationStopped() && b.removeEventListener($, mt), k.event.triggered = void 0, s && (n[_] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), f.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = V.access(e, r);
                t || e.addEventListener(n, i, !0), V.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = V.access(e, r) - 1;
                t ? V.access(e, r, t) : (e.removeEventListener(n, i, !0), V.remove(e, r))
            }
        }
    });
    var gt = w.location,
        vt = Date.now(),
        yt = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new w.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var xt = /\[\]$/,
        wt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function Tt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || xt.test(n) ? i(n, t) : Tt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== y(e)) i(n, e);
        else
            for (t in e) Tt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Tt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && kt.test(this.nodeName) && !Ct.test(e) && (this.checked || !_e.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            }).get()
        }
    });
    var St = /%20/g,
        Lt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        At = /^\/\//,
        Dt = {},
        Ot = {},
        Pt = "*/".concat("*"),
        qt = C.createElement("a");

    function Mt(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
        }
    }

    function It(t, i, a, s) {
        var o = {},
            _ = t === Ot;

        function l(e) {
            var r;
            return o[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, a, s);
                return "string" != typeof n || _ || o[n] ? _ ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !o["*"] && l("*")
    }

    function Rt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    qt.href = gt.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
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
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, k.ajaxSettings), t) : Rt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(Dt),
        ajaxTransport: Mt(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, b, u, n, $, r, d, p, i, a, h = k.ajaxSetup({}, t),
                f = h.context || h,
                m = h.context && (f.nodeType || f.jquery) ? k(f) : k.event,
                g = k.Deferred(),
                v = k.Callbacks("once memory"),
                y = h.statusCode || {},
                s = {},
                o = {},
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!n)
                                for (n = {}; t = Et.exec(u);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return d ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == d && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == d && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (d) x.always(e[x.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (g.promise(x), h.url = ((e || h.url || gt.href) + "").replace(At, gt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = h.url, r.href = r.href, h.crossDomain = qt.protocol + "//" + qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), It(Dt, h, t, x), d) return x;
            for (i in (p = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), b = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+")) : (a = h.url.slice(b.length), h.data && (h.processData || "string" == typeof h.data) && (b += (yt.test(b) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (b = b.replace(Nt, "$1"), a = (yt.test(b) ? "&" : "?") + "_=" + vt++ + a), h.url = b + a), h.ifModified && (k.lastModified[b] && x.setRequestHeader("If-Modified-Since", k.lastModified[b]), k.etag[b] && x.setRequestHeader("If-None-Match", k.etag[b])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, x, h) || d)) return x.abort();
            if (_ = "abort", v.add(h.complete), x.done(h.success), x.fail(h.error), c = It(Ot, h, t, x)) {
                if (x.readyState = 1, p && m.trigger("ajaxSend", [x, h]), d) return x;
                h.async && 0 < h.timeout && ($ = w.setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    d = !1, c.send(s, l)
                } catch (e) {
                    if (d) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, a, s, o, _, l = t;
                d || (d = !0, $ && w.clearTimeout($), c = void 0, u = r || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (o = function(e, t, n) {
                    for (var r, i, a, s, o = e.contents, _ = e.dataTypes;
                        "*" === _[0];) _.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in o)
                            if (o[i] && o[i].test(r)) {
                                _.unshift(i);
                                break
                            } if (_[0] in n) a = _[0];
                    else {
                        for (i in n) {
                            if (!_[0] || e.converters[i + " " + _[0]]) {
                                a = i;
                                break
                            }
                            s || (s = i)
                        }
                        a = a || s
                    }
                    if (a) return a !== _[0] && _.unshift(a), n[a]
                }(h, x, n)), o = function(e, t, n, r) {
                    var i, a, s, o, _, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (a = c.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !_ && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), _ = a, a = c.shift())
                            if ("*" === a) a = _;
                            else if ("*" !== _ && _ !== a) {
                        if (!(s = l[_ + " " + a] || l["* " + a]))
                            for (i in l)
                                if ((o = i.split(" "))[1] === a && (s = l[_ + " " + o[0]] || l["* " + o[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (a = o[0], c.unshift(o[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + _ + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, o, x, i), i ? (h.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (k.lastModified[b] = _), (_ = x.getResponseHeader("etag")) && (k.etag[b] = _)), 204 === e || "HEAD" === h.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = o.state, a = o.data, i = !(s = o.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || l) + "", i ? g.resolveWith(f, [a, l, x]) : g.rejectWith(f, [x, l, s]), x.statusCode(y), y = void 0, p && m.trigger(i ? "ajaxSuccess" : "ajaxError", [x, h, i ? a : s]), v.fireWith(f, [x, l]), p && (m.trigger("ajaxComplete", [x, h]), --k.active || k.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new w.XMLHttpRequest
        } catch (e) {}
    };
    var Ht = {
            0: 200,
            1223: 204
        },
        Bt = k.ajaxSettings.xhr();
    f.cors = !!Bt && "withCredentials" in Bt, f.ajax = Bt = !!Bt, k.ajaxTransport(function(i) {
        var a, s;
        if (f.cors || Bt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                a = function(e) {
                    return function() {
                        a && (a = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ht[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = a(), s = r.onerror = r.ontimeout = a("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && w.setTimeout(function() {
                        a && s()
                    })
                }, a = a("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (a) throw e
                }
            },
            abort: function() {
                a && a()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = k("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ft, Wt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || k.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, a, s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(zt, "$1" + r) : !1 !== e.jsonp && (e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || k.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", i = w[r], w[r] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === i ? k(w).removeProp(r) : w[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Wt.push(r)), a && m(i) && i(a[0]), a = i = void 0
        }), "script"
    }), f.createHTMLDocument = ((Ft = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), a = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = fe([e], t, a), a && a.length && k(a).remove(), k.merge([], i.childNodes)));
        var r, i, a
    }, k.fn.load = function(e, t, n) {
        var r, i, a, s = this,
            o = e.indexOf(" ");
        return -1 < o && (r = $t(e.slice(o)), e = e.slice(0, o)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, s, o, _, l = k.css(e, "position"),
                c = k(e),
                b = {};
            "static" === l && (e.style.position = "relative"), o = c.offset(), a = k.css(e, "top"), _ = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (a + _).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(a) || 0, i = parseFloat(_) || 0), m(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (b.top = t.top - o.top + s), null != t.left && (b.left = t.left - o.left + i), "using" in t ? t.using.call(e, b) : c.css(b)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || me
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var a = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(a ? r.pageXOffset : n, a ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = He(f.pixelPosition, function(e, t) {
            if (t) return t = Re(e, n), qe.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        k.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(r, a) {
            k.fn[a] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, o, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = S, k.isFunction = m, k.isWindow = g, k.camelCase = X, k.type = y, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Ut = w.jQuery,
        Xt = w.$;
    return k.noConflict = function(e) {
        return w.$ === k && (w.$ = Xt), e && w.jQuery === k && (w.jQuery = Ut), k
    }, e || (w.jQuery = w.$ = k), k
}), jQuery.ajaxSetup({
        cache: !0
    }), jQuery.easing.jswing = jQuery.easing.swing,
    function(i) {
        i.fn.myTab = function(r) {
            return r = jQuery.extend({
                active: 1,
                showSpeed: 400
            }, r), this.each(function() {
                var e = i(this),
                    t = e.children("[data-tab]"),
                    n = r.active - 1;
                e.addClass("simpleTab").prepend('<div class="tab-wrapper"></div>'), t.addClass("tab-content").each(function() {
                    i(this).hide(), e.find(".tab-wrapper").append('<div><span class="btn">' + i(this).data("tab") + "</span></div>")
                }).eq(n).show(), e.find(".tab-wrapper span").on("click", function() {
                    var e = i(this).parent().index();
                    return i(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), i(this).addClass("activeTab"), t.eq(e).is(":hidden") && t.hide().eq(e).fadeIn(r.showSpeed), !1
                }).eq(n).addClass("activeTab")
            })
        }
    }(jQuery),
    function(s) {
        s.fn.hoverTimeout = function(n, r, i, a) {
            return this.each(function() {
                var e = null,
                    t = s(this);
                t.hover(function() {
                    clearTimeout(e), e = setTimeout(function() {
                        r.call(t)
                    }, n)
                }, function() {
                    clearTimeout(e), e = setTimeout(function() {
                        a.call(t)
                    }, i)
                })
            })
        }
    }(jQuery),
    function(s, o, e) {
        var _ = {
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
            pauseButton: (s.fn.simplyScroll = function(e) {
                return this.each(function() {
                    new s.simplyScroll(this, e)
                })
            }, !1),
            startOnLoad: !1
        };
        s.simplyScroll = function(e, t) {
            var n = this;
            this.o = s.extend({}, _, t || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal$/) && this.o.orientation == _.orientation) && "rtl" == s("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards$/) && this.o.direction == _.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
                start: "touchstart MozTouchDown",
                move: "touchmove MozTouchMove",
                end: "touchend touchcancel MozTouchRelease"
            } : {
                start: "mouseenter",
                end: "mouseleave"
            }, this.$list = s(e);
            var r = this.$list.children();
            if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < r.length) {
                var i = !1,
                    a = 0;
                this.isHorizontal ? (r.each(function() {
                    a += s(this).outerWidth(!0)
                }), i = r.eq(0).outerWidth(!0) * r.length !== a) : (r.each(function() {
                    a += s(this).outerHeight(!0)
                }), i = r.eq(0).outerHeight(!0) * r.length !== a), i && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
                    float: "left",
                    width: a + "px"
                }) : this.$list.children().css({
                    height: a + "px"
                }))
            }
            this.o.startOnLoad ? s(o).load(function() {
                n.init()
            }) : this.init()
        }, s.simplyScroll.fn = s.simplyScroll.prototype = {}, s.simplyScroll.fn.extend = s.simplyScroll.extend = s.extend, s.simplyScroll.fn.extend({
            init: function() {
                this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnForward = s(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
                var e = Math.ceil(this.clipMax / this.itemMax);
                if (this.isAuto && "loop" == this.o.autoMode && (this.$list.css(this.dimension, this.posMax + this.itemMax * e + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, e).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-e).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "none")))), this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
                    for (; 0 != this.itemMax % this.o.speed;)
                        if (this.o.speed--, 0 === this.o.speed) {
                            this.o.speed = 1;
                            break
                        }(c = this). trigger = null, this.funcMoveForward = function(e) {
                    void 0 !== e && e.preventDefault(), c.trigger = c.isAuto || "end" != c.o.manualMode ? null : this, c.isAuto ? c.isForwards ? c.moveForward() : c.moveBack() : c.moveForward()
                }, this.funcMovePause = function() {
                    c.movePause()
                }, this.funcMoveStop = function() {
                    c.moveStop()
                }, this.funcMoveResume = function() {
                    c.moveResume()
                }, this.isAuto && (this.paused = !1, this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.isAuto && this.o.pauseOnHover && !this.supportsTouch && this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume), this.funcMoveForward())
            },
            moveForward: function() {
                var e = this;
                this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), e.interval = setInterval(function() {
                    e.$clip[0]["scroll" + e.scrollPos] < e.posMax - e.clipMax ? e.$clip[0]["scroll" + e.scrollPos] += e.o.speed : e.isLoop ? e.resetPos() : e.moveStop(e.movement)
                }, e.intervalDelay)
            },
            movePause: function() {
                clearInterval(this.interval)
            },
            moveStop: function(e) {
                this.movePause(), null !== this.trigger && (void 0 !== e && s(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == e ? this.moveBack() : this.moveForward())
            },
            moveResume: function() {
                "forward" == this.movement ? this.moveForward() : this.moveBack()
            },
            resetPos: function() {
                this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
            }
        })
    }(jQuery, window);
var _$_662b = ["cookie", "", ";expires=", ";path=/", "=", "test", "ok", ";", "", "click", "", '<input class="emoKey" type="hidden" size="', '" value=" ', '" />', "select", "cursor", "pointer", "", "active", "", "", '<ul class="hide ', '">', "i", '<i class="', "class", '"></i>', "href", "a", "_", "-", '<a href="', "</a>", '</ul><a href="', '</a><ul class="hide ', "li", "</ul>", "ul", ".summary-content", "file-text-o", ".noimage", ".thumb-img", ".post-type", ".thumb-area", "title", ".jmptext", ".h2", "s400", "s300", "data-img", "s72-c", "/default.jpg", "/mqdefault.jpg", "https://img.youtube.com/vi/", "video-camera", "/", "no_image", "rgba(0, 0, 0, 0.15)", "img.youtube.com", '<span class="youtubeplay"><i class="fa fa-play-circle-o"></i></span>', "hyoutube", ".latest-img", "music", "camera-retro", "quote-left", '<i class="fa fa-', "$1", '<div class="review-place ', '"><span class="review-value">', '</span><div class="slice"><div class="bar"></div></div></div>', "width", "%", ".bar", "&quot;", '...<a href="', '" class="rmtext" title="', " ", "</a>", "style", "background:", "https", 'url("', '")', " no-repeat center center;background-size: cover", "", "", "", "#ajax-search-form", ":text", '<div class="src-result ', ' hide" id="search-result"></div>', "#search-result", "submit", '<div class="loader">', "</div>", "//", "/feeds/posts/default?alt=json-in-script&q=", "&max-results=", '<div class="src-header">', " &quot;", "&quot;</div>", '<a class="src-close ', '" href="/">&times;</a><div class="src-area">', "ig", "<span class='src-mark'>", "</span>", "alternate", "enclosure", "content", "summary", "media$thumbnail", "/s", "-c/", "default", "mqdefault", "...", '<div class="src-item"><div class="src-img-outer ', ' go-left"><a class="src-img show" " ', "url('", "')", ' no-repeat center center;background-size: cover" href="', '" ><div class="post-type absolute"><i class="fa fa- ', '"></i></div></a></div><a class="', ' src-title" href="#', '<p class="src-summary" >', "</p>", '<div class="src-morepost"><a class="show btn" title="more" href="/search?q=', "&quot;</a></div>", '<a class="close" href="/">&times;</a><strong>', "</strong>", "jsonp", ".src-close", "grid", "vlist", "vgrip", ".post-outer", ".blog-posts.hfeed", "#view .grid", "#view .list", "list", "<b>", "</b><div><span>", "</span><small>", "</small></div>", ".postdate", ".index-post", ".published", "div", "<div></div>", "a.blog-pager-older-link", "", "//", ".disqus.com/blogger_index.js", "html", ".hfeed-inner", "vgrid", "item", '<a class="loadpost show" href="javascript:;">', '<div class="loader hide">Loading...</div>', '<div class="rct-loadmore no-decor" ></div>', ".blog-pagerindex", "&#171;", "hlist", "hgrip", "&#187;", "page", '<span class="showpage"><a href="">', "</a></span>", '<span class="showpageNum"><a href="/search/label/', "?&max-results=", '<span class="showpageNum"><a class="xpagex" href="#" alt="', '<span class="showpageNum"><a class="xlabelx" href="#" alt="', '<span class="showpageNum"><a href="">1</a></span>', '">1</a></span>', '<span class="dotxpage"> ... </span>', '<span class="showpagePoint">', '<span class="showpageNum"><a href="#" class="xpagex" alt="', '<span class="showpageNum"><a href="#" class="xlabelx" alt="', "pageArea", "blog-pagerindex", "display", "block", "load-next", ".hfeed .loader", "alt", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script", "/feeds/posts/summary/-/", "?start-index=", ".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx", "/search/label/", "?updated-max", "?max", "?&max", "?q=", ".html", "max-results=", "#PageNo=", "/feeds/posts/summary?max-results=1&alt=json-in-script", "label", "?max-results=1&alt=json-in-script", "/search?updated-max=", "?updated-max=", ".blog-posts .loader", "#main", "html, body", ".sidebar-right", "#sidebar-top", "#sidebartabs", "#sidebar-bottom", ".sidebar-right .wrap-inner", "data-label", "data-type", "data-url", "data-color", '<i class="fa fa-flash"></i> ', "h2", ",", '<a class="morepost btn" href="', "/search", "recent", "/label/", "?max-results=", '<a href="', '"></a>', "slider ", "column ", "fbig ", "gallery ", "featured ", "carousel ", "#", '<div class="owl-controls"><div class="owl-nav"></div></div>', "s", "c", "n", "fs", "f3", "random", "fade", "data-label data-url data-type data-color", "#drcmt", '<script async="true" src="//', ".disqus.com/recent_comments_widget.js?num_items=", '&avatar_size=32&excerpt_length=100&hide_mods=0" ><\/script>', '<div class="disqus-summary" />', ".dsq-widget-user,.dsq-widget-comment,.dsq-widget-meta", ".dsq-widget-item", "", "", "", "", '<div class="aazs-flickr">', "{", "}", '<div class="recent-tab">', '<div data-tab="', "aazs-widget", ".recent-tab", "complex ", ".tab-content", "script", "facebook-jssdk", "//connect.facebook.net/", "/sdk.js", "v3.1", "edge.create", "unlock_content", "message.send", "xfbml.render", ".FBbox", "load-done", "FBbox", '<div id="FBbox"><div class="fb-page" data-href="', '" data-width="550"></div></div>', "widget-loaded", "dhref-done", "", "/w400/", "", "", "", "", "", "", "", "", "", "", "", "", "", '<span class="hide">Facebook</span>', '<span><b class="shre-ct a{total}">{total}</b></span>', "", ".dhref", ".wrap-inner", "px", ".innerwrap", "absolute", "side-fixed", "0", "auto", "sub-menu", "sub-sub-menu", ".submenu", "thumb-outer", "animated zoomIn", "heading-text", '<div class="loader"></div>', ".varsumlength", ".varfixMenu", ".varmonthName", "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec", ".varstickySide", ".varsliderspeed", ".varnavipostpage", ".varmaxcommentdepth", ".vardateformat", "YYYY/MM/DD", ".varrcadminBlog", "y", ".varhideauthor", ".varhideLatest", ".varcseID", ".varhideEmo", ".varhomelist", ".varfeatpost", ".varhomePageNavi", ".varfbappsid", "160447341157187", ".varfblang", "en_US", ".vardajaxPageNavi", ".varsrctext", "Type and hit enter to search...", ".varntext", "Previous Article", ".varptext", "Next Article", ".varmtext", "More", ".varlmtext", "Load more entries...", ".varvmtext", "View More About", ".varreltext", "RELATED CONTENT", ".varrectext", "Recent Post", ".varrecotext", "Recommended For You", ".vartwitterauthor", "A_A_Z_S", ".vardisqusshortname", "", ".varshowrelated", ".varshowrecommended", ".varrelstyle", "carousel", ".varhexcerpt", ".varhreview", ".vartopbreakline", ".varbottombreakline", ".varautoplay", ".vartopbreaklineload", ".varbottombreaklineload", "", ".varrecentpost", ".varrandompost", ".varfeaturedpost", ".varrecentcomment", ".varfbig1", ".varfbig2", ".varfbig1animated", ".vargallery1", ".vargallery2", ".vargallery3", ".varcolumn1", ".varcolumn2", ".varcolumn1animated", ".varcolumn2animated", ".varnewsticker", ".varslider", ".varcarousel1", ".varcarousel2", ".varrelated", ".varvideo", ".varfeatured1", ".varfeatured2", ".varfeatured3", ".varfeatured4", ".varlist", ".varhot", ".vardisquscomment", ".varflickrbadge", ".vartimeline", "allaboutzodiacsigns", "", ".home-area #Blog1,.home-area .posts-title", "", ".item-topmeta", ".post-body", 'if (this.value == "") {this.value = "', '";}', 'if (this.value == "', '") {this.value = "";}', ".errorsrc input,.search-form input", "text/javascript", "https", "https:", "https:", "//www.google.com/cse/cse.js?cx=", "", "#body-area", "custom-cse-sevida", "searchresults-only0", ".comments-tabs", ".canUrl", ".bposId", ".pstUrl", "<div data-tab='Google+'><div class='tab-blogger'></div></div>", "<div data-tab='Disqus'><div class='tab-disqus'><div id='disqus_thread'></div></div></div>", "<div data-tab='Facebook'><div class='tab-facebook'><div class='fb-comments' data-numposts='5' data-width='100%' data-href='", "'></div></div></div>", "", "show", ".menu", ".", '<div class="sub-icon"><span class="sub-button ', ' btn"><i class="fa fa-caret-down"></i></span></div>', "submenu", "ul.", ' btn"><i class="fa fa-caret-right"></i></span></div>', "subsubmenu", "<span class='menu-desc'>", ".menu li a", "<span class='soc-desc'>", "<span class='soc-count'>", ".social-desc", "have-desc", ".menu-desc", ".main-menu li", ".sc-move", "padding-left", ".main-menu a", "a.home-icon", "left", '.main-menu a[href="#"]', "easeOutQuad", "nohover", ".home-icon", ".main-menu > li", ":not(:animated)", "easeInExpo", ".menu li", "", "", "", '<div class="emoWrap hide">', "", "iframe#comment-editor", " <amp-img width='36' height='36' layout='responsive' '' src='", "' alt='", "'/>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "data-tab", ".widget", "#sidebar-tabs1", ".labels-wrap", ".plabelsbtn", ".comments", "home-area", "#container", "index-area", "index", "#aazs", ".searchQuered", "archive", "ablist", "abgrip", "<div ", ".HTML", '"', '" ', "f2", "slide-width=630", ' class="widget-area mywidget hide"></div><div class="handle mywidget hide"></div>', '<div class="wid-pagenumber"></div>', '<a class="wid-pagenum btn" alt="1">&#171;</a>', '<a class="wid-pagenum btn" alt="', '">&#171;</a>', '<a class="wid-pagenum btn" alt="1">1</a>', "<span> ... </span>", "<span ", ";border-color:", ';background-image:initial" ', 'class="actual">', '">&#187;</a>', ".wid-pagenumber", '<div class="handle"></div><div class="handle2 json-process"><div class="loader"></div></div>', ".widget-area", ".handle2", "data-tag", "/feeds/posts/default?start-index=", "&orderby=published&alt=json-in-script", "/feeds/posts/default/-/", ".wid-pagenum", "replies", "text/html", 'class="review-place absolute"><span class="review-value">', '</span><div class="slice"><div "width:', '%" class="bar"></div></div></div>', ".blogspot", "com", ".blogspot.com", ".blog-posts", ".items:gt(", ")", ".handle", "hide", ".handle,.loader,.handle2", ".readmorebut", "noborder", "aazs", "owl-carousel", "fadeOut", "zoomIn", ".owl-nav", ".items", "<div class='wrapitem'></div>", "<div class='feat-wrapitem'></div>", '<div class="feat-wrapinner"></div>', ".feat-wrapitem:first-child", ".feat-wrapinner", "<div class='fbig-widget-area'></div>", "gallery", " hovergallery", "show botwid", ".hover-info", ".hoveffect", ".thumb-outer", ".rcthumb", "s150", "s600", "mega-menu", "feed-proc", "zoomIn animated", ".fbig-widget-area .items", "<div class='animated-item'></div>", ".animated-item", '<div class="animated-area"></div>', "mouseleave touchend", "start", "mouseenter touchstart", "stop", ".owl-carousel", "score", "d", ' class="', "first-item ", 'items"><div class="items-inner">', 'class="rcptime">', 'class="postdate absolute"><b>', "</small></div></div>", '<div class="table-cell thumb-outer', " hoveffect", '"><div class="mythumb thumb-area', " first-image", '"><div class="post-type absolute"><i class="fa fa-', '"></i></div><a class="rcthumb show" title="', '" href="', '" data-img="', '"', "ytimg.googleusercontent.com", "</a></div></div>", '"border-', "right", "-color:", 'class="', "first-area ", 'content-area table-cell">', '"color:', 'class="ct-before"><i class="fa fa-circle"></i></div>', "<h3 ", '"', "background-", "color:", 'class="heading-text"><a ', 'class="hoveffect"', ' href="', '</a></h3><div class="metainfo">', '<span class="wid-author"><i class="fa fa-user"></i> ', "</span> ", '<span class="wid-date"><i class="fa fa-calendar"></i> ', "DD", "MM", "YYYY", '<span class="widcomments"><i class="fa fa-comments"></i> <a href="', '#blogger_cm">', '<div class="psummary hide">', '<a class="readmorebut" href="', '#more" title="', '">More</a>', '<span class="rcptags absolute"><a ', 'class="btn" title="', "</div></div>", 'a[class="item-tag"]:lt(', '<h4><span class="title-wrap">', '</span></h4><div class="owl-nav"></div>', "/feeds/posts/summary?max-results=0&orderby=published&alt=json-in-script", "/feeds/posts/default?max-results=", "&orderby=published&start-index=", "&alt=json-in-script", "/feeds/comments/default?alt=json-in-script&orderby=published", '<div class="rcomment-area">', '<div class="rcomment-item', " rcadmin", " rcguest", '<img class="rcomment-img" alt="', '" title="', '" target="_blank" rel="noopener" href="', '" src="', '"/>', '<div class="rcomment-info"><b><a target="_blank" rel="nofollow noopener" href="#', '</a></b> on:<i><a class="rcomment-title" href=" ', '</a></i><div class="rcomment-meta"><div class="com-date"><b>', '</small></div></div><div class="com-time">', "</div></div></div>", '<div class="rcomment-summary">', '<div class="clear"></div></div>', " <amp-img layout='responsive' alt='emo' src='", "' class='emo' alt='", ".rcomment-summary", "<span>No result!</span>", "Anonymous", "", "g", '<div class="shrt shrt-$1" $2 $3>', ".post-body,.cm_body p,.HTML .widget-content", "icon", '<i class="fa shrt-icon ', "fa-", "Tab", "Dont Have any text content", ".shrt-content", "shrt-tabhtml", ".shrt-tab,.shrt-vtab", "", "", "", '<div class="acrd-content">', "My accordion", ".shrt-item", "current", ".acrd-toggle", "showed", ".acrd-content", ".shrt-accordion", "fast", ".acrd-content:visible", ".acrd-toggle", ".shrt-accordion .acrd-toggle", "src", "color", "featured", "height", "visual", "comments", "user", "playlist", '<div class="inlinestyle frame-shrt-soundcloud', " pfeatured", '"><amp-iframe width="', "320", '" height="', "130", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/', "tracks", "users", "xxxxxxx", "&amp;color=", "ff5500", "&amp;auto_play=", "false", "&amp;hide_related=false&amp;show_comments=", "&amp;show_user=", "true", "&amp;show_reposts=false&amp;visual=", '"><div overflow="true"/></amp-iframe></div>', ".shrt-soundcloud", "highlight", "background", "info", "logo", '<div class="inlinestyle frame-shrt-dailymotion', '"><amp-iframe width="', "270", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.dailymotion.com/embed/video/', "x12k542", "?logo=", "1", "&info=", "&highlight=", "29b7ff", "&foreground=", "ffffff", "&background=", "000000", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-dailymotion", "control", "related", '<div class="inlinestyle frame-shrt-youtube', "370", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.youtube.com/embed/', "9ua_4ajpP58", "?list=", "&amp;rel=", "&amp;controls=", "&amp;showinfo=", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-youtube", '<div class="inlinestyle frame-shrt-map', '" src="https://www.google.com/maps/embed?pb=', '"></amp-iframe></div>', ".shrt-map", "shrt-message", ".shrt-alert, .shrt-warning, .shrt-update, .shrt-success, .shrt-info, .shrt-error", '<div class="headline">', '<div class="message-wrapper">', ".shrt-message", "url", "rel", 'href="', '"', '<a class="shrtImgUrl ', ' rel="', '<amp-img layout="responsive" class="shrtImg', '" width="', "", '"/>', ".shrt-img", "glpost", "br", ".shrt-pgallery,.shrt-bgallery", "type", '<pre data-codetype="', "HTML", "Add some code here", "</pre>", ".shrt-code", "pre", '<span class="line-number"></span>', '<span class="cl"></span>', "span", "<span>", "#contact", ".shrt-contact", '" class="jdshrt-tooltip">', "Insert Link Title", "Insert Tooltip Text", "</span></a>", ".shrt-tooltip", '<div class="shrt-slide-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ') no-repeat center center;background-size: cover;" href="', '"></a><div class="shrt-summary">', '<h3><a href="', "</a></h3>", "<p>", "shrt-inhtml", ".shrt-pslide", '<div class="shrt-carousel-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ".shrt-pcarousel", "top", "review-value", '<div class="rev-item"><div class="rev-desc">', "No Detail", '</span></div><div class="rev-value-outer"><div class="rev-value" data-value="', '" "width:', '%"></div></div></div>', '<div class="rev-summary"><div class="rev-desc-place table-cell"><h4>', "No Title", "</h4><span>", "No Description", '</span></div><div class="rev-overall table-cell"><div class="overall-inner"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "No Label", "</span></div></div></div>", '<div class="top-revscrore"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "</span></div>", ".rev-value", "data-value", ".rev-score", "p", ".c100", "rotate(", "deg)", ".c100 .bar", ".shrt-review", ".widget-content", 'data-url="', 'data-color="', '<div class="aazs-widget" data-label="', '" data-type="', ">", '<div class="aazs-widget" data-label="random" data-type="simple rcpost">', '<div class="aazs-widget" data-label="random" data-type="simple rdpost">', '" data-type="simple ftpost">', ".aazs-widget", ".post-body strike", ".post-title", ".post-body h2 strike", ".post-body h3 strike", ".post-subtitle", "id", ".post", "#post-url", "unlocked", "unlocked-", "</locktag>", "<locktag>", '<div class="locked-content"><div class="inner"><i class="color fa fa-lock"></i><div class="locked-content-actions"><div class="locked-content-action"><div class="fb-like" data-href="', '" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div></div></div></div></div>', "", ".item-post .post-body", "", "", "", "", "", "", ".item-area", ".cm_form", '<a href="#origin_cform" onclick="Reset_Comment_Form()">', "#r_f_c", "#comment-editor", "&parentID=", "#%7B", ".profile-sec .widget", ' hover" href="', '<a class="fa fa-', ".fa", "<div class='authoriconBox'></div>", ".profile-sec .widget-content", ".item-topmeta .fn", "All About Zodiac Signs", ".authoriconBox", ".authorProfile p", ".authorSocial", '<span class="', " hover", "fa fa-", '"></span>', ".authorSocial a", ".adsinside", "left-post", "body", "right-post", "left-side", "right-side", "full-post", "hide-adstitle", '<div class="adsinside-it ads-outer"></div>', ".adsinside-it", ".adsbelow", '<div class="adstitle', "", '"><div class="adspltop"></div>', "", ".adspltop", "", "", "", "", ".adsendpost", '<div class="adsbottom', "", '<div class="adsplbottom"></div></div>', ".bottom-infoitem", ".adsplbottom", "", '<input type="hidden" class="aazs-page"></input><input type="hidden" class="aazs-per-page"></input>', '<div class="page-place no-decor"></div>', "[lnt]", "[fnt]", '</div><div class="page-item">', '<div class="page-item">', ".page-place", ".aazs-page", ".aazs-per-page", '<a class="previous_link btn"><i class="fa fa-chevron-left"></i></a>', '<a class="page_link btn" data-title="', '" ","href"," longdesc="', '<a class="next_link btn"><i class="fa fa-chevron-right"></i></a>', "active_page", ".page_link:first", "none", ".active_page", ".page_link[longdesc=", "]", ".page_link", ".previous_link", ".next_link", "data-title", ".all_link", '@<a href="#c', ".cm_wrap .cm_body p", "#comment-form_", "#rc", "parentId", "data-level", "#c", ":first", ":first .cm_reply", '<div class="cm_wrap" id="c', '" data-level="', " .cm_child:first", "/s55-c/", ".cm-img", '<div class="nw_com"></div>', ".nw_com", ".comments-tabs .tab-wrapper div", ".comments-tabs .tab-wrapper", "table", "pfeatured", ".tr-caption", '<span class="pcaption absolute">', ".pfeatured", ".post-body img", ".post-featured", '<div class="slide-pfeatured"></div>', ".slide-pfeatured", ".glpost", ".separator", ".post-featured a", ".post-featured > a", ".post-featured img", "/s600/", '<div class="hide url-post"><input aria-label="Post Url" class="url-post-input" type="text" value="" ', '" /></div>', ".url-post", ".showlink", "hover", ".item-share a", ".item-snippet", ".body-area", "", "show-popup", "", "", "", "", "", "", '<a class="menu-morepost', " random", '" href="/search', '"><i class="fa fa-plus"></i></a>', "mcarousel", '<div class="normal-tab">', ".normal-tab", '<a class="menu-morepost" href="/search/label/', "mtab", "mbig", "menulinks", ".links-submenu .widget", ".links-submenu", '<div class="links-content"><h2>', '</h2><div class="widget-content">', ".links-content", "gridpost", '<a class="grid-h2" href="/search', '<a class="morepost btn" href="/search', "li.submenu", ".menu-search", ".mobile-search", ".social-icon", ".mobile-icons", ":hidden", ".mobile-menu .sub-icon", '<a class="blog-pager-older-link-item go-right oldernewerright" title="Next Article - [title] - posted on [date]" href="[url]"><span>', "</span><div>[title]</div></a>", '<a class="blog-pager-newer-link-item go-left oldernewerleft" title="Previous Article - [title] - posted on [date]" href="[url]"><span>', '<amp-img layout="responsive" alt="blog-pager" src="', "a.blog-pager-older-link-item", "a.blog-pager-newer-link-item", "data-trans", "#body-area *", "span.trans", "scroll", ".header-wrap", "scrolled", ".container", "scroll-up", "fixmenu-work", ".allaboutzodiacsigns", "15px", ".sidebar-left", "stickyside-work", ".widget-loaded", "#facebook-jssdk", "item-area", ".tab-disqus", "disqus-loaded", ".disqus.com/embed.js", "data-timestamp", "", "", "", "", ":", "a.icons-facebook", "a.dhref-done", "item-page-loaded", ".pager-isi", "/feeds/posts/default?alt=json-in-script&published-min=", "&max-results=0&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=", "&max-results=3&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?", ".populars-img", ".img-change", 'background:url("', '") no-repeat center center;background-size: cover', "img-change", "showup", ".gotop", ".item-tag", ".reco-place", '<div class="reco-place blog-posts"><h4>', '</h4><div class="reco-inner"></div><span class="btn reco-close"><i class="fa fa-close"></i></span></div>', ".reco-inner", "showIt", "reco-click", ".reco-close", ".itemtags", ".footer-area", "related-work", "#related_posts", "related-work rel-", "fbig", "data-count", "data-number", ".tagscount", "[id=", "string", "transitioning", "1s ease-in-out", "a[href*=\\#]:not([href=\\#])", "transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", "resize", "small-wid", ".HTML > .widget-content", "small-post", ".tab-blogger #blogger_cm", "#blogger_cm", ".tab-blogger", "#gPlusComment", "#Blog1", "#gPlusComment > div", ".main-wrapper", ".sidebar-right .innerwrap", ".sidebartabs", "min-height", "-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform", "translate3d(1px,1px,1px)", "", "", "ontouchstart", "touch", "Safari", "CriOS", "standalone", " translateZ(0)", "onorientationchange", "orientationchange", "click touchstart", "mousedown", "touchmove", "mousemove", "touchend", "mouseup", "0s", ".mobile-menu .tab-wrapper a,.sub-button,.sub-button .fa", "ms", "translate(", "px,0)", "", "", "#allaboutzodiacsigns", "", ".index-post-outer"];

function haveCookie() {
    return _$_662b[0] in document
}

function setCookie(e, t, n) {
    if (!haveCookie()) return !1;
    var r = new Date;
    return r.setDate(r.getDate() + n), n = escape(t) + (null == n ? _$_662b[1] : _$_662b[2] + r.toUTCString()) + _$_662b[3], document.cookie = e + _$_662b[4] + n, getCookie(e) === t
}

function testcookie() {
    return !!setCookie(_$_662b[5], _$_662b[6])
}

function getCookie(e) {
    if (!havecookie()) return _$_662b[1];
    var t, n, r, i = document.cookie.split(_$_662b[7]);
    for (t = 0; t < i.length; t++)
        if (n = i[t].substr(0, i[t].indexOf(_$_662b[4])), r = i[t].substr(i[t].indexOf(_$_662b[4]) + 1), (n = n.replace(/^\s+|\s+$/g, _$_662b[1])) == e) return unescape(r);
    return _$_662b[1]
}

function delCookie(e) {
    setCookie(e, _$_662b[1], -1)
}

function checkLocal() {
    return _$_662b[8] != typeof localStorage
}

function setLocal(e, t) {
    return !!checkLocal() && (localStorage.setItem(e, t), !0)
}

function getLocal(e) {
    return checkLocal() && (e = localStorage.getItem(e)) ? e : _$_662b[1]
}

function delLocal(e) {
    localStorage.removeItem(e)
}

function setCookieLocal(e, t) {
    return checkLocal() ? setLocal(e, t) : !!testCookie() && setCookie(e, t)
}

function getCookieLocal(e) {
    return checkLocal() ? getLocal(e) : testCookie() ? getCookie(e) : _$_662b[1]
}

function delCookieLocal(e) {
    return checkLocal() ? delLocal(e) : testCookie() ? delCookie(e) : _$_662b[1]
}

function cmnu(e, a) {
    var s = _$_662b[21] + a + _$_662b[22];
    $(_$_662b[35], e).each(function() {
        var e = $(this).text(),
            t = e.substr(0, 1),
            n = e.substr(1),
            r = $(this).find(_$_662b[23]).length ? _$_662b[24] + $(this).find(_$_662b[23]).attr(_$_662b[25]) + _$_662b[26] : _$_662b[1],
            i = $(this).find(_$_662b[28]).attr(_$_662b[27]);
        s = _$_662b[29] == t || _$_662b[30] == t ? s + (_$_662b[31] + i + _$_662b[22] + r + n + _$_662b[32]) : s + (_$_662b[33] + i + _$_662b[22] + r + e + _$_662b[34] + a + _$_662b[22])
    }), s += _$_662b[36], $(e).html(s), $(_$_662b[37], e).each(function() {
        var e = $(this);
        0 == e.html().replace(rgx[0], _$_662b[1]).length && e.remove()
    }), $(_$_662b[35], e).each(function() {
        var e = $(this);
        0 == e.html().replace(rgx[0], _$_662b[1]).length && e.remove()
    })
}

function lpost(e) {
    var t, n = e.find(_$_662b[38]),
        r = n.html(),
        i = [];
    t = [], i = _$_662b[39];
    var a = e.find(_$_662b[40]),
        s = e.find(_$_662b[41]),
        o = e.find(_$_662b[42]);
    t = e.find(_$_662b[43]).width();
    var _ = $(_$_662b[45]).attr(_$_662b[44]);
    e = (l = e.find(_$_662b[46])).text();
    var l = l.find(_$_662b[28]).attr(_$_662b[27]),
        c = 300 < t ? _$_662b[47] : _$_662b[48];
    if (s.attr(_$_662b[49], function(e, t) {
            return t.replace(_$_662b[51], _$_662b[52]).replace(_$_662b[50], c)
        }), a.length && (rgx[6].test(r) || rgx[8].test(r) ? (i = rgx[6].exec(rgx[6]), t = rgx[8].exec(r), i = null != i ? i[5] : t[3], t = _$_662b[53] + i + _$_662b[52], i = _$_662b[54]) : t = rgx[5].test(r) ? (t = rgx[5].exec(r))[4].replace(rgx[7], _$_662b[55] + c + _$_662b[55]) : _$_662b[56], a.attr(_$_662b[49], _$_662b[56] === t ? _$_662b[57] : t)), -1 != s.attr(_$_662b[49]).indexOf(_$_662b[58]) && (s.append(_$_662b[59]), s.parent(_$_662b[61]).addClass(_$_662b[60])), rgx[9].test(r) ? i = _$_662b[54] : rgx[10].test(r) ? i = _$_662b[62] : rgx[11].test(r) ? i = _$_662b[63] : rgx[12].test(r) && (i = rgx[12].exec(r).index <= 5 ? _$_662b[64] : _$_662b[39]), o.prepend(_$_662b[65] + i + _$_662b[26]), rgx[29].test(r) && !hrev) {
        for (a = [], o = 0, i = (a = r.match(rgx[29])).length, t = 0; t < i; t++) o += parseInt(a[t].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
        a = o / i, s.append(_$_662b[67] + rgx[1] + _$_662b[68] + a.toFixed(1) + _$_662b[69]), s.find(_$_662b[72]).css(_$_662b[70], 10 * a.toFixed(1) + _$_662b[71])
    }(r = r.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > sumLength && (r = r.substring(0, sumLength) + _$_662b[74] + l + _$_662b[75] + _ + _$_662b[76] + e + _$_662b[22] + _ + _$_662b[77]), n.html(r), s.attr(_$_662b[78], _$_662b[79] + (-1 != s.attr(_$_662b[49]).indexOf(_$_662b[80]) ? _$_662b[81] + s.attr(_$_662b[49]) + _$_662b[82] : _$_662b[57]) + _$_662b[83])
}

function ajaxsrc(r) {
    ! function(e) {
        var u = {
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
            t = (u = e.extend({}, u, r), e(_$_662b[87])),
            n = t.find(_$_662b[88]);
        t.append(_$_662b[89] + rgx[1] + _$_662b[90]);
        var $ = e(_$_662b[91]);
        t.on(_$_662b[92], function() {
            var b = n.val();
            return $.show().html(_$_662b[93] + u.LoadingText + _$_662b[94]), e.get((_$_662b[1] === u.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : u.blogURL) + _$_662b[96] + b + _$_662b[97] + u.MaxPost, function(e) {
                var t, n, r, i, a, s, o = e.feed.entry;
                if (void 0 !== o) {
                    s = _$_662b[98] + u.findText + _$_662b[99] + b + _$_662b[100], s += _$_662b[101] + rgx[1] + _$_662b[102];
                    for (var _ = 0, l = o.length; _ < l; _++) {
                        var c = new RegExp(b, _$_662b[103]);
                        for (r = o[_].title.$t.replace(c, _$_662b[104] + b + _$_662b[105]), t = o[_].link.length, n = 0; n < t; n++) _$_662b[106] == o[_].link[n].rel && (i = o[_].link[n].href);
                        for (n = 0; n < t; n++) {
                            if (_$_662b[107] == o[_].link[n].rel) {
                                a = o[_].link[n].type;
                                break
                            }
                            a = _$_662b[39]
                        }
                        t = _$_662b[108] in o[_] ? o[_].content.$t : _$_662b[109] in o[_] ? o[_].summary.$t : _$_662b[1], _$_662b[110] in o[_] ? (n = o[_].media$thumbnail.url.replace(rgx[7], _$_662b[111] + u.scrthumbSize + _$_662b[112]), -1 != o[_].media$thumbnail.url.indexOf(_$_662b[58]) && (n = o[_].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]), a = _$_662b[54])) : rgx[6].test(t) || rgx[8].test(t) ? (a = rgx[6].exec(rgx[6]), n = rgx[8].exec(t), n = _$_662b[53] + (null != a ? a[5] : n[3]) + _$_662b[52], a = _$_662b[54]) : n = rgx[5].test(t) ? (n = rgx[5].exec(t))[4].replace(rgx[7], _$_662b[111] + u.scrthumbSize + _$_662b[112]) : u.srcBlank, rgx[9].test(t) ? a = _$_662b[54] : rgx[10].test(t) ? a = _$_662b[62] : rgx[11].test(t) ? a = _$_662b[63] : rgx[12].test(t) && (a = rgx[12].exec(t).index <= 5 ? _$_662b[64] : _$_662b[39]), (t = t.replace(rgx[15], _$_662b[1]).replace(/"/g, _$_662b[73]).replace(rgx[16], _$_662b[1])).length > u.summaryLength && (t = t.substring(0, u.summaryLength) + _$_662b[115]), t = t.replace(c, _$_662b[104] + b + _$_662b[105]), s += _$_662b[116] + rgx[30] + _$_662b[117] + (_$_662b[56] === n ? _$_662b[57] : _$_662b[118] + n + _$_662b[119]) + _$_662b[120] + i + _$_662b[121] + a + _$_662b[122] + rgx[32] + _$_662b[123] + i + _$_662b[22] + r + _$_662b[77] + (0 < u.summaryLength ? _$_662b[124] + t + _$_662b[125] : _$_662b[1]) + _$_662b[94]
                    }
                    s += _$_662b[94] + (e.feed.openSearch$totalResults.$t > e.feed.openSearch$itemsPerPage.$t ? _$_662b[126] + b + _$_662b[22] + u.viewMoreText + _$_662b[99] + b + _$_662b[127] : _$_662b[1]), $.html(s)
                } else $.html(_$_662b[128] + u.NotfindText + _$_662b[129])
            }, _$_662b[130]), !1
        }), t.on(_$_662b[9], _$_662b[131], function() {
            return $.fadeOut(), !1
        })
    }(jQuery)
}

function vmode(s) {
    ! function(e) {
        var t = {
                viewdefault: _$_662b[132],
                clist: _$_662b[133],
                cgrid: _$_662b[134]
            },
            n = (t = e.extend({}, t, s), e(_$_662b[136]).find(_$_662b[135])),
            r = e(_$_662b[137]),
            i = e(_$_662b[138]);
        e = function() {
            return n.addClass(_$_662b[132]).removeClass(_$_662b[139]), r.addClass(_$_662b[18]), i.removeClass(_$_662b[18]), setCookieLocal(t.cgrid, null, 1e4), delCookieLocal(t.clist), !1
        };
        var a = function() {
            return n.removeClass(_$_662b[132]).addClass(_$_662b[139]), r.removeClass(_$_662b[18]), i.addClass(_$_662b[18]), setCookieLocal(t.clist, null, 1e4), delCookieLocal(t.cgrid), !1
        };
        getCookieLocal(t.clist) && _$_662b[132] != t.viewdefault ? (a(), delCookieLocal(t.clist)) : getCookieLocal(t.cgrid) && _$_662b[132] != t.viewdefault ? (e(), delCookieLocal(t.cgrid)) : getCookieLocal(t.clist) ? (a(), delCookieLocal(t.clist)) : getCookieLocal(t.cgrid) ? (e(), delCookieLocal(t.cgrid)) : _$_662b[132] != t.viewdefault ? (a(), delCookieLocal(t.clist)) : (e(), delCookieLocal(t.cgrid)), r.click(e), i.click(a)
    }(jQuery)
}

function cdate() {
    $(_$_662b[146]).each(function() {
        var e = $(this).attr(_$_662b[44]),
            t = mName;
        if (_$_662b[1] != e) var n = (r = e.substring(0, 10)).substring(0, 4),
            r = (e = r.substring(5, 7), r.substring(8, 10)),
            i = t[parseInt(e, 10) - 1];
        $(this).parents(_$_662b[145]).find(_$_662b[144]).html(_$_662b[140] + r + _$_662b[141] + i + _$_662b[142] + n + _$_662b[143])
    })
}

function lMore(e) {
    var t, n;
    t = jQuery, n = {
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
    }, n = t.extend({}, n, e), t(window), t(document), rgx[14]
}

function pageNavi(e) {
    ! function(i) {
        var a, r, s, o, _, l = {
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
            c = (l = i.extend({}, l, e), window.location.protocol + _$_662b[95] + window.location.host),
            b = location.href.replace(rgx[17], _$_662b[1]),
            t = function(e) {
                ! function(e) {
                    var t = _$_662b[1];
                    for (nomerkiri = parseInt(l.numshowpage / 2), nomerkiri == l.numshowpage - nomerkiri && (l.numshowpage = 2 * nomerkiri + 1), mulai = o - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(e / l.postperpage) + 1, maksimal - 1 == e / l.postperpage && --maksimal, akhir = mulai + l.numshowpage - 1, akhir > maksimal && (akhir = maksimal), e = parseInt(o) - 1, 1 < o && (t = 2 == o ? _$_662b[165] == s ? t + (_$_662b[166] + l.previous + _$_662b[167]) : t + (_$_662b[168] + _ + _$_662b[169] + l.postperpage + _$_662b[22] + l.previous + _$_662b[167]) : _$_662b[165] == s ? t + (_$_662b[170] + e + _$_662b[22] + l.previous + _$_662b[167]) : t + (_$_662b[171] + e + _$_662b[22] + l.previous + _$_662b[167])), 1 < mulai && (t = _$_662b[165] == s ? t + _$_662b[172] : t + (_$_662b[168] + _ + _$_662b[169] + l.postperpage + _$_662b[173])), 2 < mulai && (t += _$_662b[174]), e = mulai; e <= akhir; e++) t = o == e ? t + (_$_662b[175] + e + _$_662b[105]) : 1 == e ? _$_662b[165] == s ? t + _$_662b[172] : t + (_$_662b[168] + _ + _$_662b[169] + l.postperpage + _$_662b[173]) : _$_662b[165] == s ? t + (_$_662b[176] + e + _$_662b[22] + e + _$_662b[167]) : t + (_$_662b[177] + e + _$_662b[22] + e + _$_662b[167]);
                    akhir < maksimal - 1 && (t += _$_662b[174]), akhir < maksimal && (t = _$_662b[165] == s ? t + (_$_662b[176] + maksimal + _$_662b[22] + maksimal + _$_662b[167]) : t + (_$_662b[177] + maksimal + _$_662b[22] + maksimal + _$_662b[167])), e = parseInt(o) + 1, o < maksimal && (t = _$_662b[165] == s ? t + (_$_662b[176] + e + _$_662b[22] + l.next + _$_662b[167]) : t + (_$_662b[177] + e + _$_662b[22] + l.next + _$_662b[167])), e = document.getElementsByName(_$_662b[178]);
                    for (var n = document.getElementById(_$_662b[179]), r = 0; r < e.length; r++) e[r].innerHTML = t;
                    e && 0 < e.length && (t = _$_662b[1]), n && (n.innerHTML = t), i(_$_662b[160]).css(_$_662b[180], _$_662b[181]), i(l.container).removeClass(_$_662b[182]), i(_$_662b[189]).click(function() {
                        i(l.container).addClass(_$_662b[182]), i(_$_662b[183]).show();
                        var e = i(this).attr(_$_662b[184]);
                        return jsonstart = (e - 1) * l.postperpage, a = e, _$_662b[165] == s ? i.get(c + _$_662b[185] + jsonstart + _$_662b[186], $, _$_662b[130]) : i.get(c + _$_662b[187] + _ + _$_662b[188] + jsonstart + _$_662b[186], $, _$_662b[130]), !1
                    })
                }(e = parseInt(e.feed.openSearch$totalResults.$t, 10))
            },
            u = function() {
                var e = b; - 1 != e.indexOf(_$_662b[190]) && (_ = -1 != e.indexOf(_$_662b[191]) ? e.substring(e.indexOf(_$_662b[190]) + 14, e.indexOf(_$_662b[191])) : -1 != e.indexOf(_$_662b[192]) ? e.substring(e.indexOf(_$_662b[190]) + 14, e.indexOf(_$_662b[192])) : -1 != e.indexOf(_$_662b[193]) ? e.substring(e.indexOf(_$_662b[190]) + 14, e.indexOf(_$_662b[193])) : e.substr(e.lastIndexOf(_$_662b[55]))), -1 == e.indexOf(_$_662b[194]) && -1 == e.indexOf(_$_662b[195]) && (-1 == e.indexOf(_$_662b[190]) ? (s = _$_662b[165], -1 != e.indexOf(_$_662b[196]) && -1 != e.indexOf(_$_662b[197]) ? l.postperpage = e.substring(e.indexOf(_$_662b[196]) + 12, e.indexOf(_$_662b[197])) : -1 != e.indexOf(_$_662b[196]) ? l.postperpage = e.substring(e.indexOf(_$_662b[196]) + 12) : l.postperpage = l.postperpage, o = -1 != b.indexOf(_$_662b[197]) ? b.substring(b.indexOf(_$_662b[197]) + 8, b.length) : 1, i.get(c + _$_662b[198], t, _$_662b[130])) : (s = _$_662b[199], -1 != e.indexOf(_$_662b[196]) && -1 != e.indexOf(_$_662b[197]) ? l.postperpage = e.substring(e.indexOf(_$_662b[196]) + 12, e.indexOf(_$_662b[197])) : -1 != e.indexOf(_$_662b[196]) ? l.postperpage = e.substring(e.indexOf(_$_662b[196]) + 12) : l.postperpage = l.postperpage, o = -1 != b.indexOf(_$_662b[197]) ? b.substring(b.indexOf(_$_662b[197]) + 8, b.length) : 1, i.get(c + _$_662b[187] + _ + _$_662b[200], t, _$_662b[130])))
            };
        u();
        var $ = function(e) {
            e = (r = e.feed.entry[0]).published.$t.substring(0, 19) + r.published.$t.substring(23, 29), e = encodeURIComponent(e);
            var t = _$_662b[165] == s ? c + _$_662b[201] + e + _$_662b[97] + l.postperpage + _$_662b[197] + a : c + _$_662b[190] + _ + _$_662b[202] + e + _$_662b[97] + l.postperpage + _$_662b[197] + a;
            if (l.ec) {
                var n = rgx[14];
                i.get(t, function() {}, _$_662b[153]).done(function(e) {
                    (e = i(_$_662b[148]).append(e.replace(n, _$_662b[1])).find(l.container).children(_$_662b[135])).find(_$_662b[145]).each(function() {
                        lpost(i(this))
                    }), i(l.container).html(e), cdate(), vmode({
                        viewdefault: l.viewdefault,
                        clist: l.clist,
                        cgrid: l.cgrid
                    }), i(_$_662b[203]).hide(), e.addClass(rgx[31]), b = t, u(), i(_$_662b[205]).scrollTop(i(_$_662b[204]).offset().top - 50), window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(), window.disqus_shortname && i.getScript(_$_662b[151] + window.disqus_shortname + _$_662b[152]), window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse()
                })
            } else location.href = t
        }
    }(jQuery)
}

function chside(e) {
    e.parents(_$_662b[206]).length && sSide && (e = (e = $(_$_662b[207]).height()) + $(_$_662b[208]).height() + $(_$_662b[209]).height() + 30, $(_$_662b[210]).css({
        height: e
    }))
}

function thewid(e, t) {
    var n, r = e.attr(_$_662b[211]),
        i = e.attr(_$_662b[212]),
        a = void 0 !== e.attr(_$_662b[213]) ? e.attr(_$_662b[213]) : _$_662b[1],
        s = void 0 !== e.attr(_$_662b[214]) ? e.attr(_$_662b[214]) : _$_662b[1],
        o = /slider/.test(i);
    n = /gallery2/.test(i), /featured/.test(i);
    var _ = /featured1/.test(i),
        l = /newsticker/.test(i),
        c = /carousel/.test(i),
        b = /timeline/.test(i),
        u = /(?=.*column2)(?=.*animated).*/.test(i),
        $ = /(?=.*fbig1)(?=.*animated).*/.test(i);
    l ? t.find(_$_662b[216]).prepend(_$_662b[215]) : /(simple)/.test(i) ? t.append(_$_662b[1]) : -1 === r.indexOf(_$_662b[217]) && t.find(_$_662b[216]).wrapInner(_$_662b[223] + a + _$_662b[219] + (_$_662b[220] === r ? _$_662b[1] : _$_662b[221] + r) + _$_662b[222] + Npage + _$_662b[224]).append(_$_662b[218] + a + _$_662b[219] + (_$_662b[220] === r ? _$_662b[1] : _$_662b[221] + r) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]), n = $ ? mx.fb1a : u ? mx.cl2a : /(?=.*column1)(?=.*animated).*/.test(i) ? mx.cl1a : /fbig1/.test(i) ? mx.fb1 : /fbig2/.test(i) ? mx.fb2 : /gallery1/.test(i) ? mx.gl1 : n ? mx.gl2 : o ? mx.sl : /column1/.test(i) ? mx.cl1 : /column2/.test(i) ? mx.cl2 : /carousel1/.test(i) ? mx.cr1 : /carousel2/.test(i) ? mx.cr2 : /video/.test(i) ? mx.vi : l ? mx.nw : _ ? mx.fd1 : /featured4/.test(i) ? mx.fd4 : /list/.test(i) ? mx.li : /gallery3/.test(i) ? mx.gl3 : b ? mx.li : /featured2/.test(i) ? mx.fd2 : /featured3/.test(i) ? mx.fd3 : /hot/.test(i) ? mx.ht : /ftpost/.test(i) ? mx.feat : /rcpost/.test(i) ? mx.rcpt : /rdpost/.test(i) ? mx.rdpt : 5, classname = o ? _$_662b[225] + i : /column/.test(i) ? _$_662b[226] + i : /fbig/.test(i) ? _$_662b[227] + i : /gallery/.test(i) ? _$_662b[228] + i : /featured/.test(i) ? _$_662b[229] + i : c ? _$_662b[230] + i : i, -1 != s.indexOf(_$_662b[231]) && t.children(_$_662b[216]).css({
        "background-color": s
    }), t.addClass(classname.replace(/animated/, _$_662b[1])).append(c ? _$_662b[232] : _$_662b[1]), e.RCWid({
        blogURL: a,
        maxPosts: n,
        maxPostsPerTag: /(hot|featured1|ftpost)/.test(i) && -1 !== r.indexOf(_$_662b[217]) ? 2 : -1 !== r.indexOf(_$_662b[217]) ? 5 : n,
        ShowTags: !!/(hot|featured|newsticker)/.test(i),
        tags: /(recent|random)/.test(r) ? null : r.split(_$_662b[217]),
        postType: o ? _$_662b[233] : c ? _$_662b[234] : l ? _$_662b[235] : /(featured1|featured2|featured3)/.test(i) ? _$_662b[236] : /featured4/.test(i) ? _$_662b[237] : _$_662b[1],
        ShowComment: !0,
        ShowImage: !0,
        auto: !!/autoplay/.test(i),
        review: !hrev,
        color: -1 != s.indexOf(_$_662b[231]) ? s : _$_662b[1],
        ShowPage: !!/pagenumber/.test(i),
        hoverEffect: !!/(gallery|list|newsticker)/.test(i),
        random: _$_662b[238] === r,
        effect: !!/fade/.test(i) && _$_662b[239],
        ShowDesc: !!/(featured|list|timeline|slider|newsticker|blogpost|halfpost|bigpost)/.test(i),
        wrapNum: /(featured1|featured4)/.test(i) ? 4 : (/featured2/.test(i), 5),
        summary: o || l || /(blogpost|halfpost|bigpost)/.test(i) ? 200 : b ? 85 : 150,
        ShowAuthor: hauthor,
        fbig: !!/(fbig|column2|gallery1|gallery2|hot)/.test(i),
        animated: !!/animated/.test(i),
        startFirst: !(!u && !$),
        slideSpeed: SSpeed
    }), e.removeAttr(_$_662b[240])
}

function discall(t, e, n) {
    e.addClass(n), t.html(rgx[33]), postscribe(_$_662b[241], _$_662b[242] + dsqsn + _$_662b[243] + mx.dsq + _$_662b[244], {
        done: function() {
            var e = $(_$_662b[241]).html().replace(rgx[13], _$_662b[1]);
            t.html(e), $(_$_662b[247]).each(function() {
                $(this).find(_$_662b[246]).wrapAll(_$_662b[245])
            }), $(_$_662b[241]).html(_$_662b[1])
        }
    })
}

function flicall(t, e, n) {
    e.addClass(n), t.html(rgx[33]), postscribe(_$_662b[248], _$_662b[249] + mx.fl + _$_662b[250] + dO + _$_662b[251], {
        done: function() {
            var e = $(_$_662b[248]).html().replace(rgx[14], _$_662b[1]);
            t.html(_$_662b[252] + e + _$_662b[94]), $(_$_662b[248]).html(_$_662b[1])
        }
    })
}

function crcom(e, t, n) {
    e.html(rgx[33]), t.addClass(n), e.RCom()
}

function fbsdk() {
    var e, t, n, r;
    e = document, t = _$_662b[261], n = _$_662b[262], r = e.getElementsByTagName(t)[0], e.getElementById(n) || ((e = e.createElement(t)).id = n, e.src = _$_662b[263] + fblang + _$_662b[264], r.parentNode.insertBefore(e, r)), window.fbAsyncInit = function() {
        FB.init({
            appId: fbid,
            status: !0,
            xfbml: !0,
            cookie: !1,
            version: _$_662b[265]
        }), FB.Event.subscribe(_$_662b[266], function(e) {
            $.event.trigger({
                type: _$_662b[267],
                url: e
            })
        }), FB.Event.subscribe(_$_662b[268], function(e) {
            $.event.trigger({
                type: _$_662b[267],
                url: e
            })
        }), FB.Event.subscribe(_$_662b[269], function() {
            chside($(_$_662b[270])), $(_$_662b[270]).addClass(_$_662b[271])
        })
    }
}

function crfbox(e, t) {
    var n = e.replace(rgx[28], _$_662b[1]);
    t.addClass(_$_662b[272]), t.html(_$_662b[273] + n + _$_662b[274])
}

function ldwid(e, t, n, r) {
    e.length ? thewid(e, t) : rgx[23].test(r) ? discall(n, t, r) : rgx[24].test(r) ? flicall(n, t, r) : rgx[25].test(r) ? crcom(n, t, r) : rgx[27].test(r) ? crfbox(r, n) : /complex/g.test(r) && complx(r, t, n), t.addClass(_$_662b[275])
}

function stickside(e, t, n) {
    var r = e.children(_$_662b[296]),
        i = e.offset().top,
        a = e.height() - r.height() + i,
        s = r.height() + _$_662b[297],
        o = t;
    e.children(_$_662b[298]).length && (i += o = e.children(_$_662b[298]).outerHeight(!0) + 15), n < i ? r.removeClass(_$_662b[300]).css({
        position: _$_662b[299],
        top: o
    }) : a < n ? r.removeClass(_$_662b[300]).css({
        position: _$_662b[299],
        bottom: _$_662b[301],
        top: _$_662b[302]
    }) : r.addClass(_$_662b[300]).css({
        top: t,
        height: s
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
}), gCSE && (function() {
    var e = cseID,
        t = document.createElement(_$_662b[261]);
    t.type = _$_662b[408], t.async = !0, t.src = (_$_662b[409] == document.location.protocol ? _$_662b[410] : _$_662b[411]) + _$_662b[412] + e, (e = document.getElementsByTagName(_$_662b[261])[0]).parentNode.insertBefore(t, e)
}(), $(_$_662b[414]).append(_$_662b[413]));
var csystext = $(_$_662b[417]).text(),
    cnurl = $(_$_662b[418]).attr(_$_662b[44]),
    bpstid = $(_$_662b[419]).attr(_$_662b[44]),
    psturl = $(_$_662b[420]).attr(_$_662b[44]),
    bcom = _$_662b[421],
    dcom = _$_662b[422],
    fcom = _$_662b[423] + cnurl + _$_662b[424],
    scom = _$_662b[425] + bpstid + _$_662b[424];
if ($(_$_662b[417]).html(csystext.replace(/\[googlep\]/g, bcom).replace(/\[disqus\]/g, dcom).replace(/\[facebook\]/g, fcom)), $(_$_662b[427]).each(function() {
        cmnu(this, rgx[2]), $(this).addClass(_$_662b[426])
    }), $(_$_662b[428] + rgx[2]).each(function() {
        cmnu(this, rgx[3])
    }), $(_$_662b[432] + rgx[2]).parent(_$_662b[35]).addClass(_$_662b[431]).append(_$_662b[429] + rgx[1] + _$_662b[430]), $(_$_662b[432] + rgx[3]).parent(_$_662b[35]).addClass(_$_662b[434]).append(_$_662b[429] + rgx[1] + _$_662b[433]), $(_$_662b[436]).each(function() {
        $(this).html($(this).html().replace(/\[/g, _$_662b[435]).replace(/\]/g, _$_662b[105]))
    }), $(_$_662b[439]).each(function() {
        $(this).html($(this).html().replace(/\[/g, _$_662b[438]).replace(/\]/g, _$_662b[105]).replace(/\{/g, _$_662b[437]).replace(/\}/g, _$_662b[105]))
    }), $(_$_662b[441]).parents(_$_662b[35]).addClass(_$_662b[440]), 0 < $(_$_662b[442]).length) {
    var slide_nav = $(_$_662b[443]),
        current_pos = 0,
        current_menu_width = 0;
    $(_$_662b[445]).each(function() {
        var e = $(this);
        if (e.attr(_$_662b[27]) == window.location.href && e.parents(rgx[4]).length) {
            var t = parseInt(e.parents(rgx[4]).css(_$_662b[444]));
            current_pos = e.parents(rgx[4]).position().left + t, current_menu_width = e.parents(rgx[4]).width()
        }
        slide_nav.css({
            width: current_menu_width,
            left: current_pos
        })
    }), 0 == current_pos && (current_pos = $(_$_662b[446]).position().left, slide_nav.css(_$_662b[447], current_pos)), $(_$_662b[448]).click(function() {
        var e = parseInt($(this).parent().css(_$_662b[444]));
        current_pos = $(this).parent().position().left + e, current_menu_width = $(this).parent().width()
    }), $(window).resize(function() {
        $(_$_662b[445]).each(function() {
            var e = $(this);
            if (e.attr(_$_662b[27]) == window.location.href && e.parents(rgx[4]).length) {
                var t = parseInt(e.parents(rgx[4]).css(_$_662b[444]));
                current_pos = e.parents(rgx[4]).position().left + t, current_menu_width = e.parents(rgx[4]).width()
            }
            slide_nav.css({
                width: current_menu_width,
                left: current_pos
            })
        }), 0 == current_pos && (current_pos = $(_$_662b[446]).position().left, slide_nav.css(_$_662b[447], current_pos))
    }), $(_$_662b[452]).hover(function() {
        var e = parseInt($(this).css(_$_662b[444]));
        slide_nav.animate({
            width: $(this).width(),
            left: $(this).position().left + e
        }, {
            queue: !1,
            easing: _$_662b[449],
            duration: 250
        }), $(_$_662b[451]).addClass(_$_662b[450])
    }, function() {
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
$(_$_662b[455]).hoverTimeout(100, function() {
    $(this).children(_$_662b[37]).filter(_$_662b[453]).slideDown()
}, 300, function() {
    $(this).children(_$_662b[37]).slideUp(500, _$_662b[454])
}), $(_$_662b[145]).each(function() {
    lpost($(this))
});
var sfArr = function(e) {
        var t, n, r = e.length;
        if (0 === r) return !1;
        for (; --r;) t = Math.floor(Math.random() * (r + 1)), n = e[r], e[r] = e[t], e[t] = n;
        return e
    },
    gRdm = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    };
gCSE || dajaxsrc || ajaxsrc(), $(_$_662b[504]).find(_$_662b[503]).each(function() {
        title = $(this).find(_$_662b[216]).text(), $(this).attr(_$_662b[502], title)
    }), $(_$_662b[504]).myTab({
        active: 1
    }), $(_$_662b[506]).click(function() {
        var e = $(this);
        return e.hasClass(_$_662b[18]) ? ($(_$_662b[505]).fadeOut(), e.removeClass(_$_662b[18])) : (e.addClass(_$_662b[18]), $(_$_662b[505]).fadeIn()), !1
    }), cdate(), $(_$_662b[507]).length && hEmo && myemo(),
    function(e) {
        if (e(_$_662b[509]).hasClass(_$_662b[508]) && !hpagenav) hlist ? (lMore({
            viewdefault: _$_662b[139]
        }), vmode({
            viewdefault: _$_662b[139]
        })) : (lMore(), vmode());
        else if (e(_$_662b[509]).hasClass(_$_662b[508]) && hpagenav) {
            var t = e(_$_662b[154]).children(_$_662b[135]).length;
            hlist ? (pageNavi({
                postperpage: t,
                viewdefault: _$_662b[139],
                clist: _$_662b[133],
                cgrid: _$_662b[134]
            }), vmode({
                viewdefault: _$_662b[139],
                clist: _$_662b[133],
                cgrid: _$_662b[134]
            })) : (pageNavi({
                viewdefault: _$_662b[132],
                postperpage: t,
                clist: _$_662b[133],
                cgrid: _$_662b[134]
            }), vmode({
                viewdefault: _$_662b[132],
                clist: _$_662b[133],
                cgrid: _$_662b[134]
            }))
        }
        e(_$_662b[509]).hasClass(_$_662b[510]) && e(_$_662b[512]).hasClass(_$_662b[511]) && (pageNavi({
            viewdefault: _$_662b[139],
            clist: _$_662b[162],
            cgrid: _$_662b[163]
        }), vmode({
            viewdefault: _$_662b[139],
            clist: _$_662b[162],
            cgrid: _$_662b[163]
        })), (e(_$_662b[513]).length || e(_$_662b[512]).hasClass(_$_662b[514])) && (lMore({
            viewdefault: _$_662b[139],
            clist: _$_662b[515],
            cgrid: _$_662b[516]
        }), vmode({
            viewdefault: _$_662b[139],
            clist: _$_662b[515],
            cgrid: _$_662b[516]
        }))
    }(jQuery),
    function(q) {
        q.RCWid = function(e, n) {
            var P = this;
            P.$el = q(e), P.init = function() {
                P.options = q.extend({}, q.RCWid.defaultOptions, n), P.$el.html(_$_662b[517] + (_$_662b[1] != P.options.color && /hot/.test(P.$el.parents(_$_662b[518]).attr(_$_662b[25])) ? _$_662b[519] + P.options.color + _$_662b[520] : _$_662b[1]) + (_$_662b[521] === P.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[523] + (P.options.ShowPage ? _$_662b[524] : _$_662b[1]) + rgx[33]);
                var m, g, v, y, x, w, C, k = 0,
                    t = null,
                    T = location.href.replace(rgx[17], _$_662b[1]),
                    S = document.location.hostname.split(_$_662b[428]),
                    L = P.options.maxPostsPerTag,
                    N = 3,
                    E = 1,
                    j = _$_662b[1] === P.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : P.options.blogURL,
                    A = function(e) {
                        for (P.options.ShowPage && function(e) {
                                for (html = _$_662b[1], nomerkiri = parseInt(N / 2), nomerkiri == N - nomerkiri && (N = 2 * nomerkiri + 1), mulai = E - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(e / L) + 1, maksimal - 1 == e / L && --maksimal, akhir = mulai + N - 1, akhir > maksimal && (akhir = maksimal), e = parseInt(E) - 1, 1 < E && (html = 2 == E ? html + _$_662b[525] : html + (_$_662b[526] + e + _$_662b[527])), 1 < mulai && (html += _$_662b[528]), 2 < mulai && (html += _$_662b[529]), e = mulai; e <= akhir; e++) html = E == e ? html + (_$_662b[530] + (_$_662b[1] === P.options.color ? _$_662b[1] : _$_662b[519] + P.options.color + _$_662b[531] + P.options.color + _$_662b[532]) + _$_662b[533] + e + _$_662b[105]) : 1 == e ? html + _$_662b[528] : html + (_$_662b[526] + e + _$_662b[22] + e + _$_662b[77]);
                                akhir < maksimal - 1 && (html += _$_662b[529]), akhir < maksimal && (html += _$_662b[526] + maksimal + _$_662b[22] + maksimal + _$_662b[77]), e = parseInt(E) + 1, E < maksimal && (html += _$_662b[526] + e + _$_662b[534]), P.$el.find(_$_662b[535]).html(html), P.$el.find(_$_662b[543]).click(function() {
                                    var e = Number(q(this).attr(_$_662b[184]));
                                    P.$el.find(_$_662b[537]).after(_$_662b[536]), P.$el.find(_$_662b[538]).html(P.$el.find(_$_662b[537]).html()), P.$el.find(_$_662b[537]).html(_$_662b[1]);
                                    var t = e * L - (L - 1),
                                        n = P.$el.find(_$_662b[535]).attr(_$_662b[539]);
                                    null == n || null == n ? q.get(j + _$_662b[540] + t + _$_662b[97] + L + _$_662b[541], A, _$_662b[130]) : q.get(j + _$_662b[542] + n + _$_662b[188] + t + _$_662b[97] + L + _$_662b[541], A, _$_662b[130]), E = e
                                })
                            }(n = parseInt(e.feed.openSearch$totalResults.$t, 10)), k++, g = e.feed.link.length, n = 0; n < g; n++)
                            if (_$_662b[106] == e.feed.link[n].rel) {
                                m = e.feed.link[n].href;
                                break
                            } if (entry = !0 === P.options.random ? sfArr(e.feed.entry) : e.feed.entry, void 0 !== entry)
                            for (var t = entry.length, n = 0; n < t; n++) {
                                var r, i, a, s, o, _, l, c, b, u = entry[n].link.length;
                                a = [], i = [];
                                var $, d, p, h, f = _$_662b[1];
                                for ($ = 0; $ < u; $++)
                                    if (_$_662b[106] == entry[n].link[$].rel) {
                                        r = entry[n].link[$].href;
                                        break
                                    } for ($ = 0; $ < u; $++)
                                    if (_$_662b[544] == entry[n].link[$].rel && _$_662b[545] == entry[n].link[$].type) {
                                        s = Number(entry[n].link[$].title.split(_$_662b[76])[0]);
                                        break
                                    } for ($ = 0; $ < u; $++) {
                                    if (_$_662b[107] == entry[n].link[$].rel) {
                                        h = entry[n].link[$].type;
                                        break
                                    }
                                    h = _$_662b[39]
                                }
                                if (p = _$_662b[236] === P.options.postType && m !== window.location.protocol + _$_662b[95] + window.location.host + _$_662b[55] ? m.substr(m.lastIndexOf(_$_662b[55]) + 1) : void 0 !== entry[n].category ? entry[n].category[0].term : _$_662b[1], $ = P.options.fbig && entry[n] === entry[0], d = entry[n] !== entry[0], u = _$_662b[108] in entry[n] ? entry[n].content.$t : _$_662b[109] in entry[n] ? entry[n].summary.$t : _$_662b[1], _$_662b[110] in entry[n] ? (a = entry[n].media$thumbnail.url, -1 != entry[n].media$thumbnail.url.indexOf(_$_662b[58]) && (a = entry[n].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]), h = _$_662b[54])) : rgx[6].test(u) || rgx[8].test(u) ? (a = rgx[6].exec(rgx[6]), i = rgx[8].exec(u), a = _$_662b[53] + (null != a ? a[5] : i[3]) + _$_662b[52], h = _$_662b[54]) : a = rgx[5].test(u) ? (i = rgx[5].exec(u))[4] : _$_662b[56], rgx[9].test(u) ? h = _$_662b[54] : rgx[10].test(u) ? h = _$_662b[62] : rgx[11].test(u) ? h = _$_662b[63] : rgx[12].test(u) && (h = rgx[12].exec(u).index <= 5 ? _$_662b[64] : _$_662b[39]), rgx[29].test(u) && P.options.review) {
                                    for (f = [], i = 0, _ = (f = u.match(rgx[29])).length, l = 0; l < _; l++) i += parseInt(f[l].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
                                    f = i / _, f = _$_662b[517] + (_$_662b[1] === P.options.color ? _$_662b[1] : _$_662b[519] + P.options.color + _$_662b[520]) + _$_662b[546] + f.toFixed(1) + _$_662b[547] + 10 * f.toFixed(1) + _$_662b[548]
                                }(u = u.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > P.options.summary && (u = u.substring(0, P.options.summary) + _$_662b[115]), i = entry[n].title.$t.replace(/"/g, _$_662b[73]), o = entry[n].published.$t.substring(0, 10), _ = entry[n].published.$t.match(/\d+/g), _ = new Date(_[0], _[1] - 1, _[2], _[3], _[4], _[5]), dyn = o.substring(0, 4), l = Number(o.substring(0, 2)).toLocaleString() + Number(o.substring(2, 4)).toLocaleString(), c = o.substring(5, 7), b = o.substring(8, 10), o = entry[n].author[0].name.$t, -1 < window.location.href.indexOf(_$_662b[549]) && _$_662b[550] != S[S.length - 1] && (T = _$_662b[151] + S[0] + _$_662b[551] + document.location.pathname), P.$el.parents(_$_662b[552]).length ? T.toLowerCase() != r.toLowerCase() && D(r, i, a, u, l, b, c, s, o, $, d, p, h, f, _, dyn) : D(r, i, a, u, l, b, c, s, o, $, d, p, h, f, _, dyn)
                            }
                        if (k >= P.options.tags.length) {
                            if (0 < P.options.maxPosts && q(_$_662b[553] + (P.options.maxPosts - 1) + _$_662b[554], P.$el.find(_$_662b[555])).remove(), P.$el.find(_$_662b[537]).html(P.$el.find(_$_662b[555]).html()).removeClass(_$_662b[556]), P.$el.find(_$_662b[557]).remove(), n = P.$el.find(_$_662b[558]), r = P.$el.parents(_$_662b[518]).attr(_$_662b[25]), s = q(_$_662b[45]).attr(_$_662b[44]), n.attr(_$_662b[44], s + _$_662b[76] + n.attr(_$_662b[44])).text(s), /(newsticker|timeline|video|gallery|featured|hot|slider)/.test(r) && P.$el.addClass(_$_662b[559]), /(video|featured|hot|slider)/.test(r) && P.$el.addClass(_$_662b[560]), r = P.$el.find(_$_662b[537]), _$_662b[233] === P.options.postType) r.owlCarousel({
                                nav: !0,
                                rtl: ts_isRTL(),
                                autoplay: P.options.auto,
                                navText: [_$_662b[1], _$_662b[1]],
                                autoplayTimeout: P.options.slideSpeed,
                                loop: !0,
                                bColor: _$_662b[1] !== P.options.color ? P.options.color : _$_662b[1],
                                responsiveClass: !0,
                                autoplayHoverPause: !0,
                                animateOut: _$_662b[239] === P.options.effect && _$_662b[562],
                                animateIn: _$_662b[239] === P.options.effect && _$_662b[563],
                                smartSpeed: 500,
                                items: 1,
                                responsiveRefreshRate: 500
                            }).addClass(_$_662b[561]);
                            else if (_$_662b[234] === P.options.postType) r.owlCarousel({
                                autoplay: P.options.auto,
                                margin: 0,
                                loop: !0,
                                autoplayTimeout: P.options.slideSpeed,
                                rtl: ts_isRTL(),
                                bColor: _$_662b[1] !== P.options.color ? P.options.color : _$_662b[1],
                                nav: !0,
                                autoplayHoverPause: !0,
                                navText: [_$_662b[1], _$_662b[1]],
                                responsiveBaseElement: P.$el,
                                navContainer: P.$el.parents(_$_662b[503]).find(_$_662b[564]),
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
                            else if (_$_662b[235] === P.options.postType) r.simplyScroll();
                            else if (_$_662b[236] === P.options.postType) {
                                for (s = r.children(_$_662b[565]), n = 0; n < s.length; n += P.options.wrapNum) s.slice(n, n + P.options.wrapNum).wrapAll(_$_662b[566]);
                                r.owlCarousel({
                                    nav: !0,
                                    rtl: ts_isRTL(),
                                    autoplay: P.options.auto,
                                    navText: [_$_662b[1], _$_662b[1]],
                                    autoplayTimeout: P.options.slideSpeed,
                                    loop: !0,
                                    responsiveClass: !0,
                                    autoplayHoverPause: !0,
                                    bColor: _$_662b[1] !== P.options.color ? P.options.color : _$_662b[1],
                                    animateOut: _$_662b[239] === P.options.effect && _$_662b[562],
                                    animateIn: _$_662b[239] === P.options.effect && _$_662b[563],
                                    smartSpeed: 500,
                                    items: 1,
                                    responsiveRefreshRate: 500
                                }).addClass(_$_662b[561])
                            } else if (_$_662b[237] === P.options.postType) {
                                for (s = r.children(_$_662b[565]), n = 0; n < s.length; n += P.options.wrapNum) s.slice(n, n + P.options.wrapNum).wrapAll(_$_662b[567]);
                                r.find(_$_662b[569]).wrapInner(_$_662b[568]), r.find(_$_662b[570]).owlCarousel({
                                    nav: !0,
                                    rtl: ts_isRTL(),
                                    autoplay: P.options.auto,
                                    navText: [_$_662b[1], _$_662b[1]],
                                    autoplayTimeout: P.options.slideSpeed,
                                    loop: !0,
                                    navigationText: !1,
                                    bColor: _$_662b[1] !== P.options.color ? P.options.color : _$_662b[1],
                                    responsiveClass: !0,
                                    autoplayHoverPause: !0,
                                    animateOut: _$_662b[239] === P.options.effect && _$_662b[562],
                                    animateIn: _$_662b[239] === P.options.effect && _$_662b[563],
                                    smartSpeed: 500,
                                    items: 1,
                                    responsiveRefreshRate: 500
                                }).addClass(_$_662b[561])
                            }
                            if (P.options.fbig)
                                for (s = r.children(_$_662b[565]), n = 0; n < s.length; n += s.length) s.slice(1, n + s.length).wrapAll(_$_662b[571]);
                            if (P.options.hoverEffect && P.$el.find(_$_662b[576]).hover(function() {
                                    var e, t = q(this),
                                        n = t.parents(_$_662b[565]).html(),
                                        r = t.height(),
                                        i = t.offset(),
                                        a = q(document.body).width(),
                                        s = q(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
                                    e = i.left, ts_isRTL() && (e = e + t.width() - 320), a < e + 320 ? e = a - 330 : e < 10 && (e = 10), q(_$_662b[575]).css({
                                        top: _$_662b[235] === P.options.postType ? i.top + r : i.top - 350,
                                        left: e
                                    }).addClass(_$_662b[574] + s).html(n)
                                }, function() {
                                    var e = q(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
                                    q(_$_662b[575]).removeClass(_$_662b[574] + e).html(_$_662b[1])
                                }), P.$el.find(_$_662b[577]).each(function() {
                                    y = q(this), v = y.find(_$_662b[578]), x = v.attr(_$_662b[49]), w = y.width(), C = w <= 180 ? _$_662b[579] : w <= 500 ? _$_662b[47] : _$_662b[580], (/(list|gallery|newsticker|blogpost|halfpost|complex)/.test(y.parents(_$_662b[518]).attr(_$_662b[25])) || y.parents(_$_662b[305]).hasClass(_$_662b[581])) && (C = _$_662b[47]), v.attr(_$_662b[78], _$_662b[79] + (-1 != x.indexOf(_$_662b[80]) ? _$_662b[81] + x.replace(rgx[7], _$_662b[55] + C + _$_662b[55]) + _$_662b[82] : _$_662b[57]) + _$_662b[83]), v.removeAttr(_$_662b[49])
                                }), P.$el.parents(_$_662b[518]).addClass(_$_662b[583]).removeClass(_$_662b[582]), P.options.animated)
                                if (P.options.startFirst) {
                                    for (s = r.find(_$_662b[584]), n = 0; n < s.length; n += s.length) s.slice(n, n + s.length).wrapAll(_$_662b[585]);
                                    (n = P.$el.find(_$_662b[586])).wrap(_$_662b[587]), n.simpleSpy().on(_$_662b[590], function() {
                                        jQuery(this).trigger(_$_662b[591])
                                    }).on(_$_662b[588], function() {
                                        jQuery(this).trigger(_$_662b[589])
                                    })
                                } else {
                                    for (s = r.children(_$_662b[565]), n = 0; n < s.length; n += s.length + 1) s.slice(n, n + s.length + 1).wrapAll(_$_662b[585]);
                                    (n = P.$el.find(_$_662b[586])).wrap(_$_662b[587]), n.simpleSpy({
                                        limit: 5
                                    }).on(_$_662b[590], function() {
                                        jQuery(this).trigger(_$_662b[591])
                                    }).on(_$_662b[588], function() {
                                        jQuery(this).trigger(_$_662b[589])
                                    })
                                } chside(P.$el), _$_662b[1] !== P.options.color && P.$el.parents(_$_662b[518]).find(_$_662b[592]).length && P.$el.parents(_$_662b[518]).find(_$_662b[564]).children().css({
                                "background-color": P.options.color
                            })
                        }
                    },
                    D = function(e, t, n, r, i, a, s, o, _, l, c, b, u, $, d, p) {
                        for (var h = q(_$_662b[565], P.$el.find(_$_662b[555])), f = 0, m = h.length; f < m; f++) {
                            var g = q(_$_662b[28], h.eq(f)),
                                v = O(g);
                            if (g.attr(_$_662b[27]) == e) {
                                for (t = ++v, (e = g).attr(_$_662b[593], t), P.options.relevantTip && e.attr(_$_662b[44], P.options.relevantTip.replace(_$_662b[594], t)), P.options.postScoreClass && e.attr(_$_662b[25], P.options.postScoreClass + t), e = f - 1; 0 <= e; e--)
                                    if (t = q(_$_662b[28], h.eq(e)), O(t) > v) return void(1 < f - e && h.eq(e).after(h.eq(f)));
                                return void(0 < f && h.eq(0).before(h.eq(f)))
                            }
                        }
                        P.$el.find(_$_662b[555]).append(_$_662b[517] + (_$_662b[521] === P.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[595] + (l ? _$_662b[596] : _$_662b[1]) + _$_662b[597] + (_$_662b[235] === P.options.postType ? _$_662b[517] + (_$_662b[1] != P.options.color ? _$_662b[519] + P.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[598] + d.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[94] : _$_662b[1]) + (l || /(n|c)/.test(P.options.postType) ? _$_662b[517] + (_$_662b[1] === P.options.color ? _$_662b[1] : _$_662b[519] + P.options.color + _$_662b[520]) + _$_662b[599] + a + _$_662b[141] + mName[parseInt(s, 10) - 1] + _$_662b[142] + p + _$_662b[600] : _$_662b[1]) + (P.options.ShowImage ? _$_662b[601] + (P.$el.parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[602] : _$_662b[1]) + _$_662b[603] + (l ? _$_662b[604] : _$_662b[1]) + _$_662b[605] + u + _$_662b[606] + t + _$_662b[607] + e + _$_662b[608] + n + _$_662b[609] + (-1 != n.indexOf(_$_662b[58]) || -1 != n.indexOf(_$_662b[610]) ? _$_662b[59] : _$_662b[1]) + (P.options.review ? $ : _$_662b[1]) + _$_662b[611] : _$_662b[1]) + _$_662b[517] + (/timeline/.test(P.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== P.options.color ? _$_662b[612] + (ts_isRTL() ? _$_662b[613] : _$_662b[447]) + _$_662b[614] + P.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[615] + (l ? _$_662b[616] : _$_662b[1]) + _$_662b[617] + (/timeline/.test(P.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[517] + (_$_662b[1] === P.options.color ? _$_662b[1] : _$_662b[618] + P.options.color + _$_662b[520]) + _$_662b[619] : _$_662b[1]) + _$_662b[620] + (/(featured4|slider1|newsticker)/.test(P.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== P.options.color ? _$_662b[621] + (/newsticker/.test(P.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[1] : _$_662b[622]) + _$_662b[623] + P.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[624] + (_$_662b[235] === P.options.postType || P.$el.parents(_$_662b[503]).hasClass(_$_662b[139]) ? _$_662b[625] : _$_662b[1]) + _$_662b[626] + e + _$_662b[22] + t + _$_662b[627] + (P.options.ShowAuthor ? _$_662b[628] + _ + _$_662b[629] : _$_662b[1]) + _$_662b[630] + dformat.replace(_$_662b[633], i).replace(_$_662b[632], Number(s).toLocaleString()).replace(_$_662b[631], Number(a).toLocaleString()) + _$_662b[105] + (0 < o ? _$_662b[634] + e + _$_662b[635] + o.toLocaleString() + _$_662b[167] : _$_662b[1]) + _$_662b[94] + (c && !P.options.ShowDesc ? _$_662b[1] : _$_662b[636] + r + (l ? _$_662b[637] + e + _$_662b[638] + t + _$_662b[639] : _$_662b[1]) + _$_662b[94]) + _$_662b[94] + (P.options.ShowTags ? _$_662b[640] + (_$_662b[1] === P.options.color ? _$_662b[1] : _$_662b[519] + P.options.color + _$_662b[520]) + _$_662b[641] + b + _$_662b[607] + P.options.blogURL + _$_662b[190] + b + _$_662b[222] + Npage + _$_662b[22] + b + _$_662b[167] : _$_662b[1]) + _$_662b[642])
                    },
                    O = function(e) {
                        return 0 < (e = parseInt(e.attr(_$_662b[593]))) ? e : 1
                    };
                ! function() {
                    var e = (t = P.$el).parents(_$_662b[552]);
                    if (P.options.tags || (P.options.tags = [], q(_$_662b[643] + P.options.maxTags + _$_662b[554]).each(function() {
                            var e = q.trim(q(this).text().replace(/\n/g, _$_662b[1])); - 1 == q.inArray(e, P.options.tags) && (P.options.tags[P.options.tags.length] = e)
                        }), e.length || (P.options.tags = [])), 0 !== P.options.tags.length || P.options.recentTitle)
                        if (e.length && q(_$_662b[644] + (0 === P.options.tags.length ? P.options.recentTitle : P.options.relatedTitle ? P.options.relatedTitle : _$_662b[1]) + _$_662b[645]).prependTo(t), 0 === P.options.tags.length) P.options.random ? q.get(j + _$_662b[646], function(e) {
                            var t = P.options.maxrandom > e.feed.openSearch$totalResults.$t ? e.feed.openSearch$totalResults.$t : P.options.maxrandom;
                            e = P.options.maxPosts > e.feed.openSearch$totalResults.$t ? 1 : gRdm(1, t - P.options.maxPosts), q.get(j + _$_662b[647] + P.options.maxPosts + _$_662b[648] + e + _$_662b[649], A, _$_662b[130])
                        }, _$_662b[130]) : q.get(j + _$_662b[647] + P.options.maxPostsPerTag + _$_662b[541], A, _$_662b[130]);
                        else
                            for (e = 0; e < P.options.tags.length; e++) q.get(j + _$_662b[542] + P.options.tags[e] + _$_662b[222] + P.options.maxPostsPerTag + _$_662b[541], A, _$_662b[130]), P.options.ShowPage && P.$el.find(_$_662b[535]).attr(_$_662b[539], P.options.tags[0])
                }()
            }, P.init()
        }, q.RCWid.defaultOptions = {
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
        }, q.fn.RCWid = function(e) {
            return this.each(function() {
                new q.RCWid(this, e)
            })
        }
    }(jQuery),
    function(g) {
        g.RCom = function(e, t) {
            var m = this;
            m.$el = g(e), m.init = function() {
                m.options = g.extend({}, g.RCom.defaultOptions, t), g.get((_$_662b[1] === m.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : m.options.blogURL) + _$_662b[650], function(e) {
                    var t = _$_662b[1],
                        n = _$_662b[1];
                    e = (_ = e.feed).author[0].name ? _.author[0].name.$t : m.options.anon;
                    var r = _.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + m.options.avatarSize + _$_662b[112]);
                    if (_.entry && 0 !== _.entry.length) {
                        t += _$_662b[651];
                        for (var i, a, s, o, _, l = 0, c = 0, b = (_ = _.entry).length; c < b; ++c) {
                            s = (i = _[c]).published.$t.substring(0, 10);
                            var u = i.author[0].name ? i.author[0].name.$t : m.options.anon,
                                $ = !!i.author[0].uri && i.author[0].uri.$t,
                                d = i.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + m.options.avatarSize + _$_662b[112]),
                                p = (p = i.content ? i.content.$t : i.summary.$t).replace(/<br *\/?>|[\s]+/gi, _$_662b[76]).replace(/<.*?>|[<>]/g, _$_662b[1]).replace(rgx[16], _$_662b[1]),
                                h = (p = _$_662b[1] !== p && p.length > m.options.characters ? p.substring(0, m.options.characters) + _$_662b[115] : p, !1),
                                f = u === e || d === r;
                            if (!f || m.options.showAdmin) {
                                for (a = 0, o = i.link.length; a < o; ++a) n = i.link[a], _$_662b[106] == n.rel && (h = n.href);
                                n = h.lastIndexOf(_$_662b[55]) + 1, a = h.lastIndexOf(_$_662b[428]), n = h.split(_$_662b[30]).join(_$_662b[76]).substring(n, a) + _$_662b[115], o = i.published.$t.match(/\d+/g), o = new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5]), i = s.substring(0, 4), a = s.substring(5, 7), s = s.substring(8, 10), l < m.options.numComments && (l++, t += _$_662b[652] + (f ? _$_662b[653] : _$_662b[654]) + _$_662b[22], t += m.options.Showimage ? _$_662b[655] + $ + _$_662b[656] + u + _$_662b[657] + u + _$_662b[658] + d + _$_662b[659] : _$_662b[1], t += _$_662b[660] + $ + _$_662b[22] + u + _$_662b[661] + h + _$_662b[22] + n + _$_662b[662] + s + _$_662b[141] + mName[parseInt(a, 10) - 1] + _$_662b[142] + i + _$_662b[663] + o.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[664], t += _$_662b[665] + p + _$_662b[94], t += _$_662b[666])
                            }
                        }
                        m.$el.html(t + _$_662b[94]), m.options.fs && (t = function(e, t, n) {
                            g(_$_662b[669]).each(function() {
                                g(this).html(g(this).html().replace(e, _$_662b[667] + t + _$_662b[668] + n + _$_662b[464]))
                            })
                        })(/\scheer/gi, emoIMG.dL, _$_662b[dM]), chside(m.$el)
                    } else m.$el.html(_$_662b[670])
                }, _$_662b[130])
            }, m.init()
        }, g.RCom.defaultOptions = {
            blogURL: _$_662b[1],
            numComments: mx.com,
            characters: 100,
            avatarSize: 40,
            fs: hEmo,
            showAdmin: admBlog,
            anon: _$_662b[671],
            Showimage: !0,
            defaultAvatar: _$_662b[672]
        }, g.fn.RCom = function(e) {
            return this.each(function() {
                new g.RCom(this, e)
            })
        }
    }(jQuery), $(_$_662b[675]).each(function() {
        var e = rgx[34],
            t = new RegExp(/\[/.source + e.source + /(.*?)(\/?)\]/.source, _$_662b[673]),
            n = (e = new RegExp(/\[\//.source + e.source + /\]/.source, _$_662b[673]), $(this).html());
        t.test(n) && (n = n.replace(t, _$_662b[674]).replace(e, _$_662b[94]), $(this).html(n))
    }), $(_$_662b[683]).each(function() {
        $(this).find(_$_662b[681]).each(function() {
            var e = $(this).attr(_$_662b[44]),
                t = $(this).attr(_$_662b[676]),
                n = _$_662b[677] + (null == t || _$_662b[1] == t ? _$_662b[1] : _$_662b[678] + t) + _$_662b[26],
                r = $(this).html();
            $(this).html(null == r || _$_662b[1] == r ? _$_662b[680] : r).attr({
                "data-tab": (null == t || _$_662b[1] == t ? _$_662b[1] : n) + (null == e || _$_662b[1] == e ? _$_662b[679] : e),
                title: _$_662b[1]
            })
        }), $(this).parents(_$_662b[518]).addClass(_$_662b[682])
    }), $(_$_662b[683]).myTab(), $(_$_662b[694]).each(function() {
        var i = _$_662b[1];
        $(this).find(_$_662b[689]).each(function() {
            var e = $(this).attr(_$_662b[44]),
                t = $(this).attr(_$_662b[676]),
                n = _$_662b[677] + (null == t || _$_662b[1] == t ? _$_662b[1] : _$_662b[678] + t) + _$_662b[26],
                r = $(this).html();
            i += _$_662b[684] + (null == t || _$_662b[1] == t ? _$_662b[1] : n) + (null == e || _$_662b[685] == e ? _$_662b[1] : e) + _$_662b[686] + (_$_662b[687] + (null == r || _$_662b[1] == r ? _$_662b[688] : r) + _$_662b[94])
        }), $(this).html(i), $(this).children(_$_662b[691]).first().addClass(_$_662b[690]), $(this).children(_$_662b[693]).first().addClass(_$_662b[692])
    }), $(_$_662b[698]).click(function() {
        $(this).next(_$_662b[693]).addClass(_$_662b[692]).slideToggle(_$_662b[695]).siblings(_$_662b[696]).removeClass(_$_662b[692]).slideUp(_$_662b[695]), $(this).toggleClass(_$_662b[690]), $(this).siblings(_$_662b[697]).removeClass(_$_662b[690])
    }), $(_$_662b[726]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[302]),
            n = e.attr(_$_662b[699]),
            r = e.attr(_$_662b[700]),
            i = e.attr(_$_662b[70]),
            a = e.attr(_$_662b[701]),
            s = e.attr(_$_662b[702]),
            o = e.attr(_$_662b[703]),
            _ = e.attr(_$_662b[704]),
            l = e.attr(_$_662b[705]),
            c = e.attr(_$_662b[706]);
        e.replaceWith(_$_662b[707] + (null == a || _$_662b[1] == a || _$_662b[301] == a ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == i || _$_662b[1] == i ? _$_662b[710] : i) + _$_662b[711] + (null == s || _$_662b[1] == s ? _$_662b[712] : s) + _$_662b[713] + (null == c || _$_662b[1] == c ? _$_662b[714] : 1 == c ? _$_662b[715] : c) + _$_662b[55] + (null == n || _$_662b[1] == n ? _$_662b[716] : n) + _$_662b[717] + (null == r || _$_662b[1] == r ? _$_662b[718] : r) + _$_662b[719] + (null == t || _$_662b[1] == t ? _$_662b[720] : t) + _$_662b[721] + (null == _ || _$_662b[1] == _ ? _$_662b[720] : _) + _$_662b[722] + (null == l || _$_662b[1] == l ? _$_662b[723] : l) + _$_662b[724] + (null == o || _$_662b[1] == o ? _$_662b[720] : o) + _$_662b[725])
    }), $(_$_662b[746]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[727]),
            n = e.attr(_$_662b[728]),
            r = e.attr(_$_662b[700]),
            i = e.attr(_$_662b[699]),
            a = e.attr(_$_662b[70]),
            s = e.attr(_$_662b[701]),
            o = e.attr(_$_662b[702]),
            _ = e.attr(_$_662b[729]),
            l = e.attr(_$_662b[730]);
        e.replaceWith(_$_662b[731] + (null == s || _$_662b[1] == s || _$_662b[301] == s ? _$_662b[1] : _$_662b[708]) + _$_662b[732] + (null == a || _$_662b[1] == a ? _$_662b[710] : a) + _$_662b[711] + (null == o || _$_662b[1] == o ? _$_662b[733] : o) + _$_662b[734] + (null == i || _$_662b[1] == i ? _$_662b[735] : i) + _$_662b[736] + (null == l || _$_662b[1] == l ? _$_662b[737] : l) + _$_662b[738] + (null == _ || _$_662b[1] == _ ? _$_662b[737] : _) + _$_662b[739] + (null == t || _$_662b[1] == t ? _$_662b[740] : t) + _$_662b[741] + (null == r || _$_662b[1] == r ? _$_662b[742] : r) + _$_662b[743] + (null == n || _$_662b[1] == n ? _$_662b[744] : n) + _$_662b[745])
    }), $(_$_662b[758]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[699]),
            n = e.attr(_$_662b[70]),
            r = e.attr(_$_662b[702]),
            i = e.attr(_$_662b[729]),
            a = e.attr(_$_662b[701]),
            s = e.attr(_$_662b[747]),
            o = e.attr(_$_662b[706]),
            _ = e.attr(_$_662b[748]);
        e.replaceWith(_$_662b[749] + (null == a || _$_662b[1] == a || _$_662b[301] == a ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == r || _$_662b[1] == r ? _$_662b[750] : r) + _$_662b[751] + (null == t || _$_662b[1] == t ? _$_662b[752] : t) + _$_662b[753] + (null == o || _$_662b[1] == o ? _$_662b[1] : o) + _$_662b[754] + (null == _ || _$_662b[1] == _ ? _$_662b[301] : _) + _$_662b[755] + (null == s || _$_662b[1] == s ? _$_662b[737] : s) + _$_662b[756] + (null == i || _$_662b[1] == i ? _$_662b[737] : i) + _$_662b[757])
    }), $(_$_662b[762]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[699]),
            n = e.attr(_$_662b[70]),
            r = e.attr(_$_662b[701]),
            i = e.attr(_$_662b[702]);
        e.replaceWith(_$_662b[759] + (null == r || _$_662b[1] == r || _$_662b[301] == r ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == i || _$_662b[1] == i ? _$_662b[750] : i) + _$_662b[760] + (null == t || _$_662b[1] == t ? _$_662b[1] : t) + _$_662b[761])
    }), $(_$_662b[764]).addClass(_$_662b[763]), $(_$_662b[767]).each(function() {
        var e = $(this).attr(_$_662b[44]),
            t = $(this).attr(_$_662b[676]),
            n = _$_662b[677] + (null == t || _$_662b[1] == t ? _$_662b[1] : _$_662b[678] + t) + _$_662b[26],
            r = $(this).html();
        null == e && (e = _$_662b[1]), _$_662b[1] != e && (e = _$_662b[765] + (null == t || _$_662b[1] == t ? _$_662b[1] : n) + e + _$_662b[94]), $(this).html(_$_662b[766] + e + (null == r ? _$_662b[1] : r) + _$_662b[94])
    }), $(_$_662b[778]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[699]),
            n = e.attr(_$_662b[768]),
            r = e.attr(_$_662b[769]),
            i = e.attr(_$_662b[701]),
            a = _$_662b[770] + n + _$_662b[771],
            s = e.attr(_$_662b[70]),
            o = e.attr(_$_662b[702]);
        e.replaceWith((null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[772] + (null == i || _$_662b[1] == i || _$_662b[301] == i ? _$_662b[1] : _$_662b[708]) + _$_662b[520] + (null == n || _$_662b[1] == n ? _$_662b[1] : a) + _$_662b[773] + (null == r || _$_662b[1] == r ? _$_662b[1] : r) + _$_662b[22]) + _$_662b[774] + (null == i || _$_662b[1] == i || _$_662b[301] == i ? _$_662b[1] : _$_662b[708]) + _$_662b[775] + (null == s || _$_662b[1] == s ? _$_662b[1] : s) + _$_662b[711] + (null == o || _$_662b[1] == o ? _$_662b[1] : o) + _$_662b[658] + (null == t || _$_662b[1] == t ? _$_662b[776] : t) + _$_662b[777] + (null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[77]))
    }), $(_$_662b[781]).each(function() {
        $(this).children(_$_662b[780]).remove()
    }).addClass(_$_662b[779]), $(_$_662b[787]).each(function() {
        var e = $(this).attr(_$_662b[782]),
            t = $(this).html();
        e = _$_662b[783] + (null == e || _$_662b[1] == e ? _$_662b[784] : e) + _$_662b[22] + (null == t || _$_662b[1] == t ? _$_662b[785] : t) + _$_662b[786], $(this).replaceWith(e)
    });
for (var e = document.getElementsByTagName(_$_662b[788]), t = e.length, n = 0; n < t; n++) {
    e[n].innerHTML = _$_662b[789] + e[n].innerHTML + _$_662b[790];
    for (var r = e[n].innerHTML.split(/\n/).length, i = 0; i < r; i++) {
        var s = e[n].getElementsByTagName(_$_662b[791])[0];
        s.innerHTML += _$_662b[792] + (i + 1) + _$_662b[105]
    }
}
$(_$_662b[794]).each(function() {
    $(this).html($(_$_662b[793]).html())
}), $(_$_662b[799]).each(function() {
    var e = $(this).attr(_$_662b[768]),
        t = $(this).attr(_$_662b[44]),
        n = $(this).html();
    e = _$_662b[223] + (null == e || _$_662b[1] == e ? _$_662b[231] : e) + _$_662b[795] + (null == t || _$_662b[1] == t ? _$_662b[796] : t) + _$_662b[792] + (null == n || _$_662b[1] == n ? _$_662b[797] : n) + _$_662b[798], $(this).replaceWith(e)
}), $(_$_662b[807]).each(function() {
    var i = _$_662b[1];
    $(this).find(_$_662b[689]).each(function() {
        var e = $(this).attr(_$_662b[44]),
            t = $(this).attr(_$_662b[768]),
            n = $(this).attr(_$_662b[699]),
            r = $(this).html();
        i += _$_662b[800] + n + _$_662b[801] + (null == t || _$_662b[1] == t ? n : t) + _$_662b[802] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[803] + (null == t || _$_662b[1] == t ? n : t) + _$_662b[22] + e + _$_662b[804]) + (_$_662b[1] == r ? _$_662b[1] : _$_662b[805] + r + _$_662b[125]) + _$_662b[664]
    }), $(this).html(i).parents(_$_662b[518]).addClass(_$_662b[806]), $(this).owlCarousel({
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
}), $(_$_662b[809]).each(function() {
    var i = _$_662b[1],
        e = $(this);
    e.find(_$_662b[689]).each(function() {
        var e = $(this).attr(_$_662b[44]),
            t = $(this).attr(_$_662b[768]),
            n = $(this).attr(_$_662b[699]),
            r = $(this).html();
        i += _$_662b[808] + n + _$_662b[801] + (null == t || _$_662b[1] == t ? n : t) + _$_662b[802] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[803] + (null == t || _$_662b[1] == t ? n : t) + _$_662b[22] + e + _$_662b[804]) + (_$_662b[1] == r ? _$_662b[1] : _$_662b[805] + r + _$_662b[125]) + _$_662b[664]
    }), e.html(i), e.owlCarousel({
        autoplay: !0,
        margin: 2,
        loop: !0,
        autoplayTimeout: 5e3,
        rtl: ts_isRTL(),
        nav: !0,
        autoplayHoverPause: !0,
        responsiveBaseElement: e,
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
}), $(_$_662b[834]).each(function() {
    var e = $(this),
        i = e.attr(_$_662b[810]);
    e.html(e.html().replace(/&nbsp;/g, _$_662b[1])), e.find(_$_662b[689]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[811]),
            n = (t = Number(null == t || _$_662b[1] == t ? 0 : t), e.html());
        e.replaceWith(_$_662b[812] + (null == n || _$_662b[1] == n ? _$_662b[813] : n) + _$_662b[792] + t + _$_662b[814] + t + _$_662b[815] + 10 * t + _$_662b[816])
    }), e.find(_$_662b[681]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[44]),
            n = e.attr(_$_662b[199]),
            r = e.html();
        t = _$_662b[817] + (null == t || _$_662b[1] == t ? _$_662b[818] : t) + _$_662b[819] + (null == r || _$_662b[1] == r ? _$_662b[820] : r) + _$_662b[821] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[823], null != i && _$_662b[737] == i && $(_$_662b[402]).prepend(_$_662b[824] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[825]), e.replaceWith(t)
    });
    var t = e.find(_$_662b[826]),
        n = t.length,
        r = 0;
    t.each(function() {
        r += parseInt($(this).attr(_$_662b[827]))
    }), n = 10 * (t = (r / n).toFixed(1)) / 100 * 360, $(_$_662b[828]).html(t), $(_$_662b[830]).addClass(_$_662b[829] + 10 * t), $(_$_662b[833]).css({
        "-webkit-transform": _$_662b[831] + n + _$_662b[832],
        "-moz-transform": _$_662b[831] + n + _$_662b[832],
        "-ms-transform": _$_662b[831] + n + _$_662b[832],
        "-o-transform": _$_662b[831] + n + _$_662b[832],
        transform: _$_662b[831] + n + _$_662b[832]
    }), e.children(_$_662b[780]).remove()
}), $(_$_662b[518]).each(function() {
    var e, t, n, r = $(this),
        i = r.children(_$_662b[835]),
        a = i.text(),
        s = rgx[33] + _$_662b[94];
    rgx[18].test(a) ? (a = (e = a.match(rgx[18]))[0].replace(/(\r\n|\n|\r)/gm, _$_662b[1]), n = e[1], e = -1 != (t = void 0 !== e[2] ? e[2] : _$_662b[1]).indexOf(_$_662b[80]) ? _$_662b[836] + t + _$_662b[771] : _$_662b[1], t = -1 != t.indexOf(_$_662b[231]) ? _$_662b[837] + t + _$_662b[771] : _$_662b[1], i.html(_$_662b[838] + a + _$_662b[839] + n + _$_662b[520] + t + _$_662b[76] + e + _$_662b[840] + s), r.addClass(_$_662b[582])) : rgx[19].test(a) ? (r.addClass(_$_662b[582]), i.html(_$_662b[841] + s)) : rgx[20].test(a) ? (r.addClass(_$_662b[582]), i.html(_$_662b[842] + s)) : rgx[21].test(a) && (r.addClass(_$_662b[582]), r = -1 != a.indexOf(_$_662b[55]) ? a.replace(rgx[22], _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]) : _$_662b[1], i.html(_$_662b[838] + r + _$_662b[843] + s))
});
var title1, title2, title3, winHe = $(window).height();
if ($(_$_662b[518]).each(function() {
        var e = $(this),
            t = e.children(_$_662b[835]),
            n = e.find(_$_662b[844]),
            r = t.text(),
            i = .1 * e.height() - winHe + e.offset().top,
            a = $(document).scrollTop();
        e.hasClass(_$_662b[275]) || i < a && ldwid(n, e, t, r)
    }), $(_$_662b[845]).length && (title1 = $(_$_662b[846]), title2 = $(_$_662b[847]), title3 = $(_$_662b[848]), title1.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) == title2.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) && (title1.html(title2.html()), title2.parent().remove()), title3.length && ($(_$_662b[849]).html(title3.html()), title3.parent().remove())), $(_$_662b[860]).each(function() {
        var r = [],
            i = $(this).html(),
            a = $(_$_662b[851]).attr(_$_662b[850]),
            e = $(_$_662b[852]).attr(_$_662b[108]),
            t = /\[lock\]/g,
            n = /\[\/lock\]/g;
        t.test(i) && n.test(i) && (_$_662b[853] == getCookieLocal(_$_662b[854] + a) ? (i = i.replace(t, _$_662b[1]).replace(n, _$_662b[1]), $(this).html(i)) : ($(this).html($(this).html().replace(t, _$_662b[856]).replace(n, _$_662b[855])), $(this).find(_$_662b[859]).each(function() {
            r.push($(this).html()), $(this).replaceWith(_$_662b[857] + e + _$_662b[858])
        }), $(document).on(_$_662b[267], function(e) {
            if (_$_662b[8] != typeof e) {
                var t = window.location.href;
                if ((e = e.url) && (-1 != e.indexOf(t) || -1 != t.indexOf(e))) {
                    i = $(_$_662b[860]).html();
                    var n = 0;
                    $(_$_662b[861]).each(function() {
                        _$_662b[8] != typeof r[n] && $(this).replaceWith(r[n]), n++
                    }), setCookieLocal(_$_662b[854] + a, _$_662b[853])
                }
            }
        })))
    }), $(_$_662b[862]).length && (window.twttr = function(e, t, n) {
        var r, i = e.getElementsByTagName(t)[0];
        return e.getElementById(n) ? void 0 : ((e = e.createElement(t)).id = n, e.src = _$_662b[864], i.parentNode.insertBefore(e, i), window.twttr || (r = {
            _e: [],
            ready: function(e) {
                r._e.push(e)
            }
        }))
    }(document, _$_662b[261], _$_662b[863]), twttr.ready(function(e) {
        e.events.bind(_$_662b[865], function(e) {
            $.event.trigger({
                type: _$_662b[267],
                url: e.target.baseURI
            })
        })
    })), ($(_$_662b[270]).length || $(_$_662b[866]).length) && fbsdk(), $(_$_662b[867]).length) {
    var Display_Reply_Form = function(e) {
            par_id = $(e).attr(_$_662b[850]), par_id = Valid_Par_Id(par_id), html = $(Cur_Cform_Hdr).html(), _$_662b[868] == Cur_Cform_Hdr ? (reset_html = _$_662b[869] + Msgs.addComment + _$_662b[77], $(Cur_Cform_Hdr).html(reset_html)) : $(Cur_Cform_Hdr).html(_$_662b[1]), Cur_Cform_Hdr = _$_662b[870] + par_id, $(Cur_Cform_Hdr).html(html), $(_$_662b[871]).attr(_$_662b[699], Cform_Ins_ParID(par_id))
        },
        Reset_Comment_Form = function() {
            html = $(Cur_Cform_Hdr).html(), $(Cur_Cform_Hdr).html(_$_662b[1]), Cur_Cform_Hdr = _$_662b[868], $(Cur_Cform_Hdr).html(html), $(_$_662b[871]).attr(_$_662b[699], Cur_Cform_Url)
        },
        Cform_Ins_ParID = function(e) {
            return e = _$_662b[872] + e + _$_662b[873], n_cform_url = Cur_Cform_Url.replace(/#%7B/, e), n_cform_url
        },
        Valid_Par_Id = function(e) {
            return -1 != (r = e.indexOf(_$_662b[234])) && (e = e.substring(r + 1)), e
        };
    0 < $(_$_662b[874]).length && $(_$_662b[512]).hasClass(_$_662b[156]) && ($(_$_662b[879]).each(function() {
        var e = $(this).html().replace(/\{/g, _$_662b[876]).replace(/#/g, _$_662b[875]).replace(/\}/g, _$_662b[224]);
        $(this).html(e), e = $(this).children(_$_662b[877]);
        for (var t = 0; t < e.length; t += e.length + 1) e.slice(t, t + e.length + 1).wrapAll(_$_662b[878])
    }), $(_$_662b[874]).each(function() {
        var e = /(\r\n|\n|\r)/gm,
            t = $(_$_662b[880]).length ? $(_$_662b[880]).text().replace(e, _$_662b[1]) : _$_662b[881],
            n = (e = (n = $(this)).children(_$_662b[216]).html().replace(e, _$_662b[1]), n.find(_$_662b[882]).html());
        t === e && (_$_662b[1] === $(_$_662b[883]).html() && $(_$_662b[883]).html(desnya), $(_$_662b[884]).html(n), $(_$_662b[889]).each(function() {
            var e = $(this).attr(_$_662b[25]);
            $(this).wrap(_$_662b[885] + e.replace(_$_662b[887], _$_662b[1]).replace(_$_662b[886], _$_662b[1]) + _$_662b[888])
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
        var go_to_page = function(e) {
            var t = parseInt(perpagenya.val());
            start_from = e * t, end_on = start_from + t, contentnya.children().css(_$_662b[180], _$_662b[932]).slice(start_from, end_on).css(_$_662b[180], _$_662b[181]), $this.find(_$_662b[934] + e + _$_662b[935]).addClass(_$_662b[930]).siblings(_$_662b[933]).removeClass(_$_662b[930]), curpagenya.val(e), $(_$_662b[205]).animate({
                scrollTop: $(_$_662b[402]).offset().top - 80
            }, 1e3)
        };
        $this.find(_$_662b[937]).on(_$_662b[9], function() {
            var e = $this.find(_$_662b[933]);
            return new_page = parseInt(curpagenya.val()) - 1, 1 == e.prev(_$_662b[936]).length && go_to_page(new_page), !1
        }), $this.find(_$_662b[938]).on(_$_662b[9], function() {
            var e = $this.find(_$_662b[933]);
            return new_page = parseInt(curpagenya.val()) + 1, 1 == e.next(_$_662b[936]).length && go_to_page(new_page), !1
        }), $this.find(_$_662b[936]).on(_$_662b[9], function() {
            var e = $(this).attr(_$_662b[939]);
            return go_to_page(e), !1
        }), $this.find(_$_662b[940]).on(_$_662b[9], function() {
            return $(this).attr(_$_662b[939]), contentnya.children().css(_$_662b[180], _$_662b[181]), pageplace.hide(), $(_$_662b[205]).animate({
                scrollTop: $(_$_662b[402]).offset().top - 80
            }, 1e3), !1
        })
    }
    $(_$_662b[954]).each(function() {
        var e = $(this).attr(_$_662b[699]);
        $(this).attr(_$_662b[699], e.replace(/\/s[0-9]+(\-c)?\//, _$_662b[953])).addClass(_$_662b[426])
    }), $(_$_662b[507]).append(_$_662b[955]), $(_$_662b[956]).append($(_$_662b[417])), $(_$_662b[417]).myTab(), 1 == $(_$_662b[957]).length && $(_$_662b[958]).hide(), $(_$_662b[964]).each(function() {
        var e = $(this),
            t = e.attr(_$_662b[44]),
            n = e.parent(_$_662b[28]),
            r = e.parents(_$_662b[959]);
        null == t && _$_662b[1] == t || !/\{featured\}/.exec(t) || (e.attr(_$_662b[44], t.replace(/\{featured\}/, _$_662b[1])), n.length ? n.addClass(_$_662b[960]) : e.addClass(_$_662b[960]), r.length && (r.addClass(_$_662b[556]), e = r.find(_$_662b[961]).text(), r.find(_$_662b[963]).append(_$_662b[962] + e + _$_662b[105])))
    });
    var txtnyaaa = $(_$_662b[402]).html(),
        imgjd = [],
        pfeat = (imgjd = /<img\s+[^>]*src="([^"]*)"[^>]*>/.exec(txtnyaaa), $(_$_662b[963]));
    if (pfeat.length) $(_$_662b[963]).each(function() {
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
    $(_$_662b[401]).after(_$_662b[974] + link + _$_662b[975]), $(_$_662b[977]).click(function() {
        var e = $(this);
        return e.hasClass(_$_662b[18]) ? ($(_$_662b[976]).hide(), e.removeClass(_$_662b[18])) : (e.addClass(_$_662b[18]), $(_$_662b[976]).show().children().focus().select()), !1
    }), $(_$_662b[979]).addClass(_$_662b[978])
}
$(_$_662b[980]).each(function() {
    $(this).html($(this).html().replace(rgx[16], _$_662b[1]))
});
var $outer = $(_$_662b[981]),
    $contact = $(_$_662b[982]);
$(_$_662b[984]).click(function() {
    return $contact.hasClass(_$_662b[583]) || ($contact.addClass(_$_662b[583]), $outer.addClass(_$_662b[983])), !1
}), $(_$_662b[985]).click(function() {
    return $contact.removeClass(_$_662b[583]), $outer.removeClass(_$_662b[983]), !1
}), $(document).on(_$_662b[9], function(e) {
    $(e.target).is(_$_662b[986]) || ($contact.removeClass(_$_662b[583]), $outer.removeClass(_$_662b[983]))
}), $(_$_662b[988]).each(function() {
    var e = $(this);
    e.parents(_$_662b[503]), e = e.html(), $(_$_662b[987]).append(e)
}), $(_$_662b[1009]).one(_$_662b[590], function() {
    var e = $(this),
        n = e.find(_$_662b[35]),
        t = n.text();
    if (/grid/g.test(t)) t = t.replace(/grid\//g, _$_662b[1]), e.addClass(_$_662b[581]), n.RCWid({
        maxPosts: 4,
        random: _$_662b[238] === t,
        review: !hrev,
        ShowTags: !!/(recent|random)/.test(t),
        tags: /(recent|random)/.test(t) ? null : t.split(_$_662b[217])
    }).addClass(_$_662b[989]), n.append(_$_662b[990] + (_$_662b[238] === t ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[132]);
    else if (/mcarousel/g.test(t)) {
        var r = e.parents(_$_662b[987]);
        t = t.replace(/mcarousel\//g, _$_662b[1]), e.addClass(_$_662b[581]), n.RCWid({
            maxPosts: 9,
            random: _$_662b[238] === t,
            review: !hrev,
            auto: aplay,
            postType: r.length ? _$_662b[1] : _$_662b[234],
            ShowTags: !!/(recent|random)/.test(t),
            tags: /(recent|random)/.test(t) ? null : t.split(_$_662b[217])
        }).addClass(_$_662b[989]), n.append(_$_662b[990] + (_$_662b[238] === t ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[994])
    } else if (/mtab/g.test(t)) {
        r = (t = t.replace(/mtab\//g, _$_662b[1])).split(_$_662b[217]), t = _$_662b[995];
        for (var i = 0; i < r.length; i++) t += _$_662b[256] + r[i] + _$_662b[22] + r[i] + _$_662b[94];
        n.html(t + _$_662b[94]), n.find(_$_662b[996]).myTab(), e.addClass(_$_662b[581]), n.find(_$_662b[260]).each(function() {
            var e = $(this).text();
            $(this).RCWid({
                maxPosts: 4,
                review: !hrev,
                tags: e.split(_$_662b[217])
            }).addClass(_$_662b[989]), $(this).append(_$_662b[997] + e + _$_662b[222] + Npage + _$_662b[993])
        }), n.addClass(_$_662b[998])
    } else /mbig/g.test(t) ? (t = t.replace(/mbig\//g, _$_662b[1]), e.addClass(_$_662b[581]), n.RCWid({
        maxPosts: 7,
        random: _$_662b[238] === t,
        maxPostsPerTag: /(recent|random)/.test(t) || 1 == t.split(_$_662b[217]).length ? 7 : 4,
        tags: /(recent|random)/.test(t) ? null : t.split(_$_662b[217]),
        fbig: !0,
        review: !hrev,
        summary: 100
    }), n.append(_$_662b[990] + (_$_662b[238] === t ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[999])) : /links/g.test(t) && (e.addClass(_$_662b[581]), n.html(_$_662b[1]), n.addClass(_$_662b[1e3]), e = $(_$_662b[1001]), $(_$_662b[1002]).hide(), e.each(function() {
        var e = $(this).children(_$_662b[216]).html(),
            t = $(this).children(_$_662b[835]).html();
        n.append(_$_662b[1003] + e + _$_662b[1004] + t + _$_662b[642])
    }), n.find(_$_662b[835]).each(function() {
        if (texnya = $(this).text(), /gridpost/g.test(texnya)) {
            var e = $(this).parents(_$_662b[987]),
                t = texnya.replace(/gridpost\//g, _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
            $(this).RCWid({
                maxPosts: 4,
                random: _$_662b[238] === t,
                ShowTags: !!/(recent|random)/.test(t),
                review: !hrev,
                postType: e.length ? _$_662b[1] : _$_662b[234],
                tags: /(recent|random)/.test(t) ? null : t.split(_$_662b[217])
            }).addClass(_$_662b[989]), (e = $(this).parent(_$_662b[1005])).addClass(_$_662b[1006]), _$_662b[238] !== t && (e.find(_$_662b[216]).wrapInner(_$_662b[1007] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[224]), e.find(_$_662b[216]).append(_$_662b[1008] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]))
        }
    }))
}), $(_$_662b[1011]).html($(_$_662b[1010]).html()), $(_$_662b[1013]).html($(_$_662b[1012]).html()), $(_$_662b[1015]).click(function() {
    var e = $(this).parent(_$_662b[35]).children(_$_662b[37]);
    return e.is(_$_662b[1014]) ? (e.slideDown(), $(this).addClass(_$_662b[18])) : (e.slideUp(), $(this).removeClass(_$_662b[18])), !1
}), $(_$_662b[987]).css({
    "max-height": $(window).height() - 140
});
var maxSummaryLength = sumLength,
    olderLink = _$_662b[1016] + ptx + _$_662b[1017],
    newerLink = _$_662b[1018] + ntx + _$_662b[1017],
    defaultImage = _$_662b[776],
    getThumb = function(e, t) {
        var n, r = t;
        n = e.content.$t;
        try {
            r = e.media$thumbnail.url
        } catch (e) {
            rgx[6].test(n) || rgx[8].test(n) ? (r = rgx[6].exec(rgx[6]), n = rgx[8].exec(n), r = _$_662b[53] + (null != r ? r[5] : n[3]) + _$_662b[51]) : r = rgx[5].test(n) ? (n = rgx[5].exec(n))[4] : t
        }
        return r
    },
    setLink = function(e, t, n, r) {
        var i = r.published.$t.match(/\d+/g);
        i = new Date(i[0], i[1] - 1, i[2], i[3], i[4], i[5]), n = getThumb(r, n);
        var a = $(e).attr(_$_662b[27]);
        if ((o = (o = _$_662b[108] in r ? r.content.$t : _$_662b[109] in r ? r.summary.$t : _$_662b[1]).replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > maxSummaryLength) var s = (o = o.substring(0, maxSummaryLength)).lastIndexOf(_$_662b[76]),
            o = o.substring(0, s) + _$_662b[115];
        t = (t = (t = (t = (t = (t = t.replace(/\[title\]/g, r.title.$t)).replace(/\[date\]/g, i.toLocaleDateString())).replace(/\[datetime\]/g, i.toLocaleString())).replace(/\[summary\]/g, o)).replace(/\[thumburl\]/g, n)).replace(/\[url\]/g, a), i = _$_662b[1], _$_662b[1] != n && (i = _$_662b[1019] + n + _$_662b[22]), t = t.replace(/\[img\]/g, i), $(e).replaceWith(t)
    },
    setOlderLink = function(e) {
        setLink(_$_662b[1020], olderLink, defaultImage, e)
    },
    setNewerLink = function(e) {
        setLink(_$_662b[1021], newerLink, defaultImage, e)
    };
$(_$_662b[1024]).each(function() {
    var e = $(this).attr(_$_662b[44]),
        t = $(this).attr(_$_662b[1022]);
    $(_$_662b[1023]).replaceText(e, t)
});
var target, scroll, lastScrollTop = 0;
$(window).on(_$_662b[1025], function() {
    var e = $(this).scrollTop();
    fixM && (e >= $(_$_662b[1026]).height() + 60 ? ($(_$_662b[1028]).addClass(_$_662b[1027]), lastScrollTop < e ? $(_$_662b[1026]).hasClass(_$_662b[1029]) && $(_$_662b[1026]).removeClass(_$_662b[1029]) : $(_$_662b[1026]).addClass(_$_662b[1029]), lastScrollTop = e) : $(_$_662b[1028]).removeClass(_$_662b[1027]), $(_$_662b[1031]).hasClass(_$_662b[1030]) || $(_$_662b[1031]).addClass(_$_662b[1030])), sSide && 960 < $(this).width() && (1 < $(_$_662b[206]).width() && stickside($(_$_662b[206]), _$_662b[1032], e), 1 < $(_$_662b[1033]).width() && stickside($(_$_662b[1033]), _$_662b[1032], e), $(_$_662b[1031]).hasClass(_$_662b[1034]) || $(_$_662b[1031]).addClass(_$_662b[1034]));
    var t, n, r, i, a, s, o, _, l, c = $(_$_662b[518]).length;
    if ($(_$_662b[1035]).length < c) {
        var b = 1 <= e;
        $(_$_662b[518]).each(function() {
            if (!$(this).hasClass(_$_662b[275])) {
                var e = $(this),
                    t = e.children(_$_662b[835]),
                    n = e.find(_$_662b[844]),
                    r = t.text();
                b && ldwid(n, e, t, r)
            }
        })
    }
    if ($(_$_662b[1036]).length || fbsdk(), $(_$_662b[354]).length && $(_$_662b[509]).hasClass(_$_662b[1037]) && $(_$_662b[1038]).length && !$(_$_662b[354]).hasClass(_$_662b[1039]) && ((l = (_ = document).createElement(_$_662b[261])).src = _$_662b[95] + dsqsn + _$_662b[1040], l.setAttribute(_$_662b[1041], +new Date), (_.head || _.body).appendChild(l), $(_$_662b[354]).addClass(_$_662b[1039])), $(_$_662b[1042]).length && $(_$_662b[1043]).length && !$(_$_662b[1042]).hasClass(_$_662b[1044])) {
        var u = $(_$_662b[1042]).attr(_$_662b[44]);
        t = window.SPOTIM = {}, n = document, r = _$_662b[1045], o = (i = n.getElementsByTagName(_$_662b[261]))[i.length - 1].parentNode, t.spotId = u, a = t.parentElement = o, (s = n.createElement(_$_662b[261])).type = _$_662b[408], s.async = !0, s.src = (_$_662b[410] === n.location.protocol ? _$_662b[409] : _$_662b[80]) + _$_662b[1046] + r, (a || n.body || n.head).appendChild(s), $(_$_662b[1042]).addClass(_$_662b[1044])
    }
    $(_$_662b[1047]).length && !$(_$_662b[1048]).length && socialct($(_$_662b[851])), (c = $(_$_662b[146]).attr(_$_662b[44])) && _$_662b[1] != c && $(_$_662b[512]).hasClass(_$_662b[156]) && !$(_$_662b[1050]).hasClass(_$_662b[1049]) && ($(_$_662b[1050]).addClass(_$_662b[1049]), $.getJSON(_$_662b[1051] + encodeURIComponent(c) + _$_662b[1052], function(e) {
        1 < (e = parseInt(e.feed.openSearch$totalResults.$t)) ? $.getJSON(_$_662b[1053] + (e - 1) + _$_662b[1054], function(e) {
            setNewerLink(e.feed.entry[0]), 1 < parseInt(e.feed.openSearch$totalResults.$t) - parseInt(e.feed.openSearch$startIndex.$t) && setOlderLink(e.feed.entry[2])
        }) : $.getJSON(_$_662b[1055], function(e) {
            setOlderLink(e.feed.entry[0])
        })
    })), $(_$_662b[1056]).length && !$(_$_662b[1057]).length && $(_$_662b[1056]).each(function() {
        $(this).attr(_$_662b[78], _$_662b[1058] + $(this).attr(_$_662b[49]) + _$_662b[1059]), $(this).removeAttr(_$_662b[49]), $(this).addClass(_$_662b[1060])
    }), 250 <= e ? $(_$_662b[1062]).addClass(_$_662b[1061]) : $(_$_662b[1062]).removeClass(_$_662b[1061]), shreco && $(_$_662b[1063]).length && $(_$_662b[512]).hasClass(_$_662b[156]) && ($(_$_662b[1064]).length || ($(_$_662b[981]).append(_$_662b[1065] + recotx + _$_662b[1066]), $(_$_662b[1067]).RCWid({
        maxPosts: 3,
        maxPostsPerTag: 5,
        ShowComment: !0,
        ShowImage: !0,
        ShowDesc: !1,
        summary: 100,
        ShowAuthor: hauthor
    }), $(_$_662b[1070]).on(_$_662b[9], function() {
        return $(_$_662b[1064]).hasClass(_$_662b[1068]) ? $(_$_662b[1064]).removeClass(_$_662b[1068]).addClass(_$_662b[1069]) : $(_$_662b[1064]).addClass(_$_662b[1068]), !1
    })), e > $(_$_662b[1071]).offset().top - 400 && e < $(_$_662b[1072]).offset().top - $(_$_662b[1072]).height() && 960 < $(this).width() ? $(_$_662b[1064]).addClass(_$_662b[1068]) : $(_$_662b[1064]).removeClass(_$_662b[1068])), shrel && 1 < e && !$(_$_662b[1074]).hasClass(_$_662b[1073]) && $(_$_662b[1074]).RCWid({
        maxPosts: _$_662b[359] === relst ? mx.rl : _$_662b[1076] === relst ? mx.fb1 : 6,
        maxPostsPerTag: 6,
        auto: aplay,
        postType: _$_662b[359] === relst ? _$_662b[234] : _$_662b[1],
        ShowDesc: _$_662b[1076] === relst
    }).addClass(_$_662b[1075] + relst)
}), $(_$_662b[1063]).each(function() {
    var n, r = 1,
        i = $(this);
    n = $(this).text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]), $(_$_662b[1079]).each(function() {
        var e, t = $(this);
        e = t.attr(_$_662b[44]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]), r = t.attr(_$_662b[1077]), n !== e || i.attr(_$_662b[1078]) || i.attr(_$_662b[1078], r)
    })
}), $(_$_662b[1084]).on(_$_662b[9], function(e) {
    location.pathname.replace(/^\//, _$_662b[1]) == this.pathname.replace(/^\//, _$_662b[1]) && location.hostname == this.hostname && (target = (target = $(this.hash)).length ? target : $(_$_662b[1080] + this.hash.slice(1) + _$_662b[935])).length && (_$_662b[1081] == typeof document.body.style.transitionProperty ? (e.preventDefault(), (e = $(document).height() - $(window).height()) < (scroll = target.offset().top) && (scroll = e), $(_$_662b[153]).css({
        "margin-top": $(window).scrollTop() - scroll + _$_662b[297],
        transition: _$_662b[1083]
    }).data(_$_662b[1082], !0)) : $(_$_662b[205]).animate({
        scrollTop: scroll
    }, 1e3))
}), $(_$_662b[153]).on(_$_662b[1085], function(e) {
    e.target == e.currentTarget && !0 === $(this).data(_$_662b[1082]) && ($(this).removeAttr(_$_662b[78]).data(_$_662b[1082], !1), $(_$_662b[205]).scrollTop(scroll))
}), $(window).on(_$_662b[1086], function() {
    $(_$_662b[1088]).each(function() {
        $(this).width() < 680 ? $(this).addClass(_$_662b[1087]) : $(this).removeClass(_$_662b[1087])
    }), (s = (t = $(_$_662b[154])).width()) < 680 ? t.addClass(_$_662b[1089]) : t.removeClass(_$_662b[1089]), $(_$_662b[1036]).length && window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse, $(_$_662b[1090]).length || $(_$_662b[1092]).append($(_$_662b[1091])), $(_$_662b[1093]).length && (s = $(_$_662b[1094]).width(), $(_$_662b[1095]).css({
        width: s
    }));
    var e = $(window).width(),
        t = $(_$_662b[1096]).height(),
        n = $(_$_662b[1097]).height(),
        r = $(_$_662b[207]).height(),
        i = $(_$_662b[1098]).height(),
        a = $(_$_662b[209]).height(),
        s = $(_$_662b[1033]).width();
    960 < e ? (t < (e = n + r + i + a) ? $(_$_662b[1096]).css(_$_662b[1099], e + _$_662b[297]) : $(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]), s < 100 && $(_$_662b[1033]).addClass(_$_662b[556])) : ($(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]), 100 < s && $(_$_662b[1033]).removeClass(_$_662b[556]))
}).trigger(_$_662b[1086]);
var Bamboo = function(a, s) {
        function e() {
            var e, t = s.createElement(_$_662b[829]),
                n = {
                    webkitTransform: _$_662b[1100],
                    OTransform: _$_662b[1101],
                    msTransform: _$_662b[1102],
                    MozTransform: _$_662b[1103],
                    transform: _$_662b[1104]
                };
            for (var r in s.body.insertBefore(t, null), n) void 0 !== t.style[r] && (t.style[r] = _$_662b[1105], e = a.getComputedStyle(t).getPropertyValue(n[r]));
            return s.body.removeChild(t), void 0 !== e && 0 < e.length && _$_662b[932] !== e
        }
        $(_$_662b[1106]);
        var t, n, r = $(_$_662b[981]),
            o = r.parent().children(_$_662b[1107]),
            _ = (n = !1, _$_662b[1108] in a || a.DocumentTouch && s instanceof DocumentTouch ? (n = !0, $(_$_662b[153]).addClass(_$_662b[1109])) : $(_$_662b[153]).addClass(_$_662b[16]), n),
            l = (t = 0, navigator.userAgent.match(/(iPhone|iPod)/i) && -1 != navigator.userAgent.indexOf(_$_662b[1110]) && -1 == navigator.userAgent.indexOf(_$_662b[1111]) && (t = 60), _$_662b[1112] in a.navigator && a.navigator.standalone && (t = 0), t),
            c = (e = e()) ? _$_662b[1113] : _$_662b[1],
            b = _$_662b[1114] in a ? _$_662b[1115] : _$_662b[1086],
            u = (_ ? _$_662b[1116] : _$_662b[1117], _ ? _$_662b[1118] : _$_662b[1119]),
            d = _ ? _$_662b[1120] : _$_662b[1121],
            p = function(e) {
                for (i in this.options = {
                        menu: !0,
                        breakpoint: 1e3,
                        menuWidth: 300,
                        headerHeight: 50,
                        snapThreshold: null,
                        resize: null
                    }, e) this.options[i] = e[i];
                this.resizeSite(), $(a).on(b, this.resizeSite.bind(this)), o.on(u, this._move.bind(this)), r.on(d, this._end.bind(this))
            };
        return p.prototype = {
            info: {},
            x: 0,
            dx: 0,
            ox: null,
            tgt: null,
            desktop: !1,
            dimensions: function() {
                return [this.info.docWidth, this.info.docHeight]
            },
            offset: function() {
                return l
            },
            resizeSite: function() {
                this.info.docHeight = $(a).height(), this.info.docWidth = $(a).width(), this.layout(), this.snapThreshold = null === this.options.snapThreshold ? Math.round(.25 * this.info.docWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.info.docWidth * this.options.snapThreshold.replace(_$_662b[71], _$_662b[1]) / 100) : this.options.snapThreshold, this.options.resize && this.options.resize()
            },
            layout: function() {
                this.desktop = !(this.info.docWidth < this.options.breakpoint)
            },
            _move: function(e) {
                if (this.initiated && !this.desktop && this.options.menu) {
                    var t = _ ? e.originalEvent.touches[0] : e;
                    this.stepsX += Math.abs(t.pageX - this.pointX), this.stepsY += Math.abs(t.pageY - this.pointY), this.stepsX < 10 && this.stepsY < 10 || (!this.directionLocked && this.stepsY > this.stepsX ? this.initiated = !1 : (e.preventDefault(), this.directionLocked = !0, this.ox && (e = parseInt(t.pageX) - this.ox, this.dx = e - this.x, this.x = e, this._moveContainer(e))))
                }
            },
            _end: function(e) {
                this.initiated && !this.desktop && this.options.menu && (e = parseInt((_ ? e.originalEvent.changedTouches[0] : e).pageX) - parseInt(this.ox), this.dx <= 0 && !this.tgt.is(_$_662b[1123]) ? this._animateTo(e, 0) : this._animateTo(e, this.options.menuWidth), 0 === this.dx && 0 === e && this.tgt.is(_$_662b[1106]) && this._animateTo(this.options.menuWidth, this.options.menuWidth), this.ox = null, this.dx = 0, this.initiated = !1)
            },
            _animateTo: function(e, t) {
                o.css({
                    "transition-duration": Math.floor(100 * e / this.snapThreshold) + _$_662b[1124],
                    transform: _$_662b[1125] + t + _$_662b[1126] + c
                }), this._toggleCover(t)
            },
            _moveContainer: function(e) {
                o.css({
                    transform: _$_662b[1125] + e + _$_662b[1126] + c
                })
            },
            _toggleCover: function(e) {
                e > this.options.menuWidth - 50 ? (r.addClass(_$_662b[1127]), $(_$_662b[1129]).addClass(_$_662b[1128])) : (r.removeClass(_$_662b[1127]), $(_$_662b[1129]).removeClass(_$_662b[1128]))
            }
        }, p
    },
    scrollTimer = null;
$(window).scroll(function() {
    var e = $(this).height(),
        t = e / $(document).height() * e,
        n = $(this).scrollTop() / ($(document).height() - e);
    e = n * (e - t) + t / 2 - $("#scroll").height() / 2, $("#scroll").css("top", e).text(" " + Math.round(100 * n) + "%").fadeIn(100), null !== scrollTimer && clearTimeout(scrollTimer), scrollTimer = setTimeout(function() {
        $("#scroll").fadeOut()
    }, 1500)
});

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
jQuery(document).ready(function() {
    $.getScript("https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit")
});
(function() {
    var h, n = this;

    function p(a) {
        return void 0 !== a
    }

    function aa() {}

    function ba(a) {
        a.yb = function() {
            return a.zf ? a.zf : a.zf = new a
        }
    }

    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function da(a) {
        return "array" == ca(a)
    }

    function ea(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function q(a) {
        return "string" == typeof a
    }

    function fa(a) {
        return "number" == typeof a
    }

    function r(a) {
        return "function" == ca(a)
    }

    function ga(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function u(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return u.apply(null, arguments)
    }
    var ja = Date.now || function() {
        return +new Date
    };

    function ka(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ph = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.lh = function(a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    };

    function la(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, la);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    ka(la, Error);
    la.prototype.name = "CustomError";

    function v(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function ma(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    }

    function na(a, b) {
        for (var c in a)
            if (!b.call(void 0, a[c], c, a)) return !1;
        return !0
    }

    function oa(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function pa(a) {
        for (var b in a) return b
    }

    function qa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function ra(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function sa(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function ta(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    }

    function ua(a, b) {
        var c = ta(a, b, void 0);
        return c && a[c]
    }

    function va(a) {
        for (var b in a) return !1;
        return !0
    }

    function wa(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ya(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < xa.length; f++) c = xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function za(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function Aa() {
        this.Vd = void 0
    }

    function Ba(a, b, c) {
        switch (typeof b) {
            case "string":
                Ca(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (da(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Ba(a, a.Vd ? a.Vd.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Ca(f, c), c.push(":"), Ba(a, a.Vd ? a.Vd.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var Da = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Ca(a, b) {
        b.push('"', a.replace(Ea, function(a) {
            if (a in Da) return Da[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Da[a] = e + b.toString(16)
        }), '"')
    };

    function Fa() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ja()).toString(36)
    };
    var w;
    a: {
        var Ga = n.navigator;
        if (Ga) {
            var Ha = Ga.userAgent;
            if (Ha) {
                w = Ha;
                break a
            }
        }
        w = ""
    };

    function Ia() {
        this.Ya = -1
    };

    function Ja() {
        this.Ya = -1;
        this.Ya = 64;
        this.P = [];
        this.pe = [];
        this.eg = [];
        this.Od = [];
        this.Od[0] = 128;
        for (var a = 1; a < this.Ya; ++a) this.Od[a] = 0;
        this.ge = this.ec = 0;
        this.reset()
    }
    ka(Ja, Ia);
    Ja.prototype.reset = function() {
        this.P[0] = 1732584193;
        this.P[1] = 4023233417;
        this.P[2] = 2562383102;
        this.P[3] = 271733878;
        this.P[4] = 3285377520;
        this.ge = this.ec = 0
    };

    function Ka(a, b, c) {
        c || (c = 0);
        var d = a.eg;
        if (q(b))
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.P[0];
        c = a.P[1];
        for (var g = a.P[2], k = a.P[3], m = a.P[4], l, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = k ^ c & (g ^ k), l = 1518500249) : (f = c ^ g ^ k, l = 1859775393) : 60 > e ? (f = c & g | k & (c | g), l = 2400959708) : (f = c ^ g ^ k, l = 3395469782), f = (b << 5 | b >>> 27) + f + m + l + d[e] & 4294967295, m = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.P[0] = a.P[0] + b & 4294967295;
        a.P[1] = a.P[1] + c & 4294967295;
        a.P[2] = a.P[2] + g & 4294967295;
        a.P[3] = a.P[3] + k & 4294967295;
        a.P[4] = a.P[4] + m & 4294967295
    }
    Ja.prototype.update = function(a, b) {
        if (null != a) {
            p(b) || (b = a.length);
            for (var c = b - this.Ya, d = 0, e = this.pe, f = this.ec; d < b;) {
                if (0 == f)
                    for (; d <= c;) Ka(this, a, d), d += this.Ya;
                if (q(a))
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Ya) {
                            Ka(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.Ya) {
                                Ka(this, e);
                                f = 0;
                                break
                            }
            }
            this.ec = f;
            this.ge += b
        }
    };
    var x = Array.prototype,
        La = x.indexOf ? function(a, b, c) {
            return x.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ma = x.forEach ? function(a, b, c) {
            x.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Na = x.filter ? function(a, b, c) {
            return x.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var m = g[k];
                    b.call(c, m, k, a) && (e[f++] = m)
                } return e
        },
        Oa = x.map ? function(a, b, c) {
            return x.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Pa = x.reduce ? function(a, b, c, d) {
            for (var e = [], f = 1, g = arguments.length; f < g; f++) e.push(arguments[f]);
            d && (e[0] = u(b, d));
            return x.reduce.apply(a, e)
        } : function(a, b, c, d) {
            var e = c;
            Ma(a, function(c, g) {
                e = b.call(d, e, c, g, a)
            });
            return e
        },
        Qa = x.every ? function(a, b, c) {
            return x.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function Ra(a, b) {
        var c = Sa(a, b, void 0);
        return 0 > c ? null : q(a) ? a.charAt(c) : a[c]
    }

    function Sa(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ta(a, b) {
        var c = La(a, b);
        0 <= c && x.splice.call(a, c, 1)
    }

    function Ua(a, b, c) {
        return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c)
    }

    function Va(a, b) {
        a.sort(b || Wa)
    }

    function Wa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };

    function Xa(a) {
        n.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Ya;

    function Za() {
        var a = n.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == w.indexOf("Presto") && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = u(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && -1 == w.indexOf("Trident") && -1 == w.indexOf("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (p(c.next)) {
                    c = c.next;
                    var a = c.hb;
                    c.hb = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    hb: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            n.setTimeout(a, 0)
        }
    };

    function $a(a, b) {
        ab || bb();
        cb || (ab(), cb = !0);
        db.push(new eb(a, b))
    }
    var ab;

    function bb() {
        if (n.Promise && n.Promise.resolve) {
            var a = n.Promise.resolve();
            ab = function() {
                a.then(fb)
            }
        } else ab = function() {
            var a = fb;
            !r(n.setImmediate) || n.Window && n.Window.prototype && n.Window.prototype.setImmediate == n.setImmediate ? (Ya || (Ya = Za()), Ya(a)) : n.setImmediate(a)
        }
    }
    var cb = !1,
        db = [];
    [].push(function() {
        cb = !1;
        db = []
    });

    function fb() {
        for (; db.length;) {
            var a = db;
            db = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.yg.call(c.scope)
                } catch (d) {
                    Xa(d)
                }
            }
        }
        cb = !1
    }

    function eb(a, b) {
        this.yg = a;
        this.scope = b
    };
    var gb = -1 != w.indexOf("Opera") || -1 != w.indexOf("OPR"),
        hb = -1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE"),
        ib = -1 != w.indexOf("Gecko") && -1 == w.toLowerCase().indexOf("webkit") && !(-1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE")),
        jb = -1 != w.toLowerCase().indexOf("webkit");
    (function() {
        var a = "",
            b;
        if (gb && n.opera) return a = n.opera.version, r(a) ? a() : a;
        ib ? b = /rv\:([^\);]+)(\)|;)/ : hb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : jb && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(w)) ? a[1] : "");
        return hb && (b = (b = n.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
    })();
    var kb = null,
        lb = null,
        mb = null;

    function nb(a, b) {
        if (!ea(a)) throw Error("encodeByteArray takes an array as a parameter");
        ob();
        for (var c = b ? lb : kb, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                g = e + 1 < a.length,
                k = g ? a[e + 1] : 0,
                m = e + 2 < a.length,
                l = m ? a[e + 2] : 0,
                t = f >> 2,
                f = (f & 3) << 4 | k >> 4,
                k = (k & 15) << 2 | l >> 6,
                l = l & 63;
            m || (l = 64, g || (k = 64));
            d.push(c[t], c[f], c[k], c[l])
        }
        return d.join("")
    }

    function ob() {
        if (!kb) {
            kb = {};
            lb = {};
            mb = {};
            for (var a = 0; 65 > a; a++) kb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), lb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), mb[lb[a]] = a, 62 <= a && (mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
        }
    };

    function pb(a, b) {
        this.N = qb;
        this.Rf = void 0;
        this.Ba = this.Ha = null;
        this.yd = this.ye = !1;
        if (a == rb) sb(this, tb, b);
        else try {
            var c = this;
            a.call(b, function(a) {
                sb(c, tb, a)
            }, function(a) {
                if (!(a instanceof ub)) try {
                    if (a instanceof Error) throw a;
                    throw Error("Promise rejected.");
                } catch (b) {}
                sb(c, vb, a)
            })
        } catch (d) {
            sb(this, vb, d)
        }
    }
    var qb = 0,
        tb = 2,
        vb = 3;

    function rb() {}
    pb.prototype.then = function(a, b, c) {
        return wb(this, r(a) ? a : null, r(b) ? b : null, c)
    };
    pb.prototype.then = pb.prototype.then;
    pb.prototype.$goog_Thenable = !0;
    h = pb.prototype;
    h.gh = function(a, b) {
        return wb(this, null, a, b)
    };
    h.cancel = function(a) {
        this.N == qb && $a(function() {
            var b = new ub(a);
            xb(this, b)
        }, this)
    };

    function xb(a, b) {
        if (a.N == qb)
            if (a.Ha) {
                var c = a.Ha;
                if (c.Ba) {
                    for (var d = 0, e = -1, f = 0, g; g = c.Ba[f]; f++)
                        if (g = g.o)
                            if (d++, g == a && (e = f), 0 <= e && 1 < d) break;
                    0 <= e && (c.N == qb && 1 == d ? xb(c, b) : (d = c.Ba.splice(e, 1)[0], yb(c, d, vb, b)))
                }
                a.Ha = null
            } else sb(a, vb, b)
    }

    function zb(a, b) {
        a.Ba && a.Ba.length || a.N != tb && a.N != vb || Ab(a);
        a.Ba || (a.Ba = []);
        a.Ba.push(b)
    }

    function wb(a, b, c, d) {
        var e = {
            o: null,
            Hf: null,
            Jf: null
        };
        e.o = new pb(function(a, g) {
            e.Hf = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (l) {
                    g(l)
                }
            } : a;
            e.Jf = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !p(e) && b instanceof ub ? g(b) : a(e)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.o.Ha = a;
        zb(a, e);
        return e.o
    }
    h.Yf = function(a) {
        this.N = qb;
        sb(this, tb, a)
    };
    h.Zf = function(a) {
        this.N = qb;
        sb(this, vb, a)
    };

    function sb(a, b, c) {
        if (a.N == qb) {
            if (a == c) b = vb, c = new TypeError("Promise cannot resolve to itself");
            else {
                var d;
                if (c) try {
                    d = !!c.$goog_Thenable
                } catch (e) {
                    d = !1
                } else d = !1;
                if (d) {
                    a.N = 1;
                    c.then(a.Yf, a.Zf, a);
                    return
                }
                if (ga(c)) try {
                    var f = c.then;
                    if (r(f)) {
                        Bb(a, c, f);
                        return
                    }
                } catch (g) {
                    b = vb, c = g
                }
            }
            a.Rf = c;
            a.N = b;
            a.Ha = null;
            Ab(a);
            b != vb || c instanceof ub || Cb(a, c)
        }
    }

    function Bb(a, b, c) {
        function d(b) {
            f || (f = !0, a.Zf(b))
        }

        function e(b) {
            f || (f = !0, a.Yf(b))
        }
        a.N = 1;
        var f = !1;
        try {
            c.call(b, e, d)
        } catch (g) {
            d(g)
        }
    }

    function Ab(a) {
        a.ye || (a.ye = !0, $a(a.wg, a))
    }
    h.wg = function() {
        for (; this.Ba && this.Ba.length;) {
            var a = this.Ba;
            this.Ba = null;
            for (var b = 0; b < a.length; b++) yb(this, a[b], this.N, this.Rf)
        }
        this.ye = !1
    };

    function yb(a, b, c, d) {
        if (c == tb) b.Hf(d);
        else {
            if (b.o)
                for (; a && a.yd; a = a.Ha) a.yd = !1;
            b.Jf(d)
        }
    }

    function Cb(a, b) {
        a.yd = !0;
        $a(function() {
            a.yd && Db.call(null, b)
        })
    }
    var Db = Xa;

    function ub(a) {
        la.call(this, a)
    }
    ka(ub, la);
    ub.prototype.name = "cancel";
    var Eb = Eb || "2.4.2";

    function y(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function z(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b)) return a[b]
    }

    function Fb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function Gb(a) {
        var b = {};
        Fb(a, function(a, d) {
            b[a] = d
        });
        return b
    }

    function Hb(a) {
        return "object" === typeof a && null !== a
    };

    function Ib(a) {
        var b = [];
        Fb(a, function(a, d) {
            da(d) ? Ma(d, function(d) {
                b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
            }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
        });
        return b.length ? "&" + b.join("&") : ""
    }

    function Jb(a) {
        var b = {};
        a = a.replace(/^\?/, "").split("&");
        Ma(a, function(a) {
            a && (a = a.split("="), b[a[0]] = a[1])
        });
        return b
    };

    function Kb(a, b) {
        if (!a) throw Lb(b);
    }

    function Lb(a) {
        return Error("Firebase (" + Eb + ") INTERNAL ASSERT FAILED: " + a)
    };
    var Mb = n.Promise || pb;
    pb.prototype["catch"] = pb.prototype.gh;

    function B() {
        var a = this;
        this.reject = this.resolve = null;
        this.D = new Mb(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    }

    function C(a, b) {
        return function(c, d) {
            c ? a.reject(c) : a.resolve(d);
            r(b) && (Nb(a.D), 1 === b.length ? b(c) : b(c, d))
        }
    }

    function Nb(a) {
        a.then(void 0, aa)
    };

    function Ob(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, Kb(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    }

    function Pb(a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3
        }
        return b
    };

    function D(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        if (e) throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
    }

    function E(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        return a = a + " failed: " + (d + " argument ")
    }

    function F(a, b, c, d) {
        if ((!d || p(c)) && !r(c)) throw Error(E(a, b, d) + "must be a valid function.");
    }

    function Qb(a, b, c) {
        if (p(c) && (!ga(c) || null === c)) throw Error(E(a, b, !0) + "must be a valid context object.");
    };

    function Rb(a) {
        return "undefined" !== typeof JSON && p(JSON.parse) ? JSON.parse(a) : za(a)
    }

    function G(a) {
        if ("undefined" !== typeof JSON && p(JSON.stringify)) a = JSON.stringify(a);
        else {
            var b = [];
            Ba(new Aa, a, b);
            a = b.join("")
        }
        return a
    };

    function Sb() {
        this.Zd = H
    }
    Sb.prototype.j = function(a) {
        return this.Zd.S(a)
    };
    Sb.prototype.toString = function() {
        return this.Zd.toString()
    };

    function Tb() {}
    Tb.prototype.uf = function() {
        return null
    };
    Tb.prototype.Ce = function() {
        return null
    };
    var Ub = new Tb;

    function Vb(a, b, c) {
        this.bg = a;
        this.Oa = b;
        this.Nd = c
    }
    Vb.prototype.uf = function(a) {
        var b = this.Oa.Q;
        if (Wb(b, a)) return b.j().T(a);
        b = null != this.Nd ? new Xb(this.Nd, !0, !1) : this.Oa.w();
        return this.bg.Bc(a, b)
    };
    Vb.prototype.Ce = function(a, b, c) {
        var d = null != this.Nd ? this.Nd : Yb(this.Oa);
        a = this.bg.qe(d, b, 1, c, a);
        return 0 === a.length ? null : a[0]
    };

    function Zb() {
        this.xb = []
    }

    function $b(a, b) {
        for (var c = null, d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.cc();
            null === c || f.ea(c.cc()) || (a.xb.push(c), c = null);
            null === c && (c = new ac(f));
            c.add(e)
        }
        c && a.xb.push(c)
    }

    function bc(a, b, c) {
        $b(a, c);
        cc(a, function(a) {
            return a.ea(b)
        })
    }

    function dc(a, b, c) {
        $b(a, c);
        cc(a, function(a) {
            return a.contains(b) || b.contains(a)
        })
    }

    function cc(a, b) {
        for (var c = !0, d = 0; d < a.xb.length; d++) {
            var e = a.xb[d];
            if (e)
                if (e = e.cc(), b(e)) {
                    for (var e = a.xb[d], f = 0; f < e.xd.length; f++) {
                        var g = e.xd[f];
                        if (null !== g) {
                            e.xd[f] = null;
                            var k = g.Zb();
                            ec && fc("event: " + g.toString());
                            gc(k)
                        }
                    }
                    a.xb[d] = null
                } else c = !1
        }
        c && (a.xb = [])
    }

    function ac(a) {
        this.ta = a;
        this.xd = []
    }
    ac.prototype.add = function(a) {
        this.xd.push(a)
    };
    ac.prototype.cc = function() {
        return this.ta
    };

    function J(a, b, c, d) {
        this.type = a;
        this.Na = b;
        this.Za = c;
        this.Oe = d;
        this.Td = void 0
    }

    function hc(a) {
        return new J(ic, a)
    }
    var ic = "value";

    function jc(a, b, c, d) {
        this.xe = b;
        this.be = c;
        this.Td = d;
        this.wd = a
    }
    jc.prototype.cc = function() {
        var a = this.be.Mb();
        return "value" === this.wd ? a.path : a.parent().path
    };
    jc.prototype.De = function() {
        return this.wd
    };
    jc.prototype.Zb = function() {
        return this.xe.Zb(this)
    };
    jc.prototype.toString = function() {
        return this.cc().toString() + ":" + this.wd + ":" + G(this.be.qf())
    };

    function kc(a, b, c) {
        this.xe = a;
        this.error = b;
        this.path = c
    }
    kc.prototype.cc = function() {
        return this.path
    };
    kc.prototype.De = function() {
        return "cancel"
    };
    kc.prototype.Zb = function() {
        return this.xe.Zb(this)
    };
    kc.prototype.toString = function() {
        return this.path.toString() + ":cancel"
    };

    function Xb(a, b, c) {
        this.A = a;
        this.ga = b;
        this.Yb = c
    }

    function lc(a) {
        return a.ga
    }

    function mc(a) {
        return a.Yb
    }

    function nc(a, b) {
        return b.e() ? a.ga && !a.Yb : Wb(a, K(b))
    }

    function Wb(a, b) {
        return a.ga && !a.Yb || a.A.Fa(b)
    }
    Xb.prototype.j = function() {
        return this.A
    };

    function oc(a) {
        this.pg = a;
        this.Gd = null
    }
    oc.prototype.get = function() {
        var a = this.pg.get(),
            b = wa(a);
        if (this.Gd)
            for (var c in this.Gd) b[c] -= this.Gd[c];
        this.Gd = a;
        return b
    };

    function pc(a, b) {
        this.Vf = {};
        this.hd = new oc(a);
        this.da = b;
        var c = 1E4 + 2E4 * Math.random();
        setTimeout(u(this.Of, this), Math.floor(c))
    }
    pc.prototype.Of = function() {
        var a = this.hd.get(),
            b = {},
            c = !1,
            d;
        for (d in a) 0 < a[d] && y(this.Vf, d) && (b[d] = a[d], c = !0);
        c && this.da.Ye(b);
        setTimeout(u(this.Of, this), Math.floor(6E5 * Math.random()))
    };

    function qc() {
        this.Hc = {}
    }

    function rc(a, b, c) {
        p(c) || (c = 1);
        y(a.Hc, b) || (a.Hc[b] = 0);
        a.Hc[b] += c
    }
    qc.prototype.get = function() {
        return wa(this.Hc)
    };
    var sc = {},
        tc = {};

    function uc(a) {
        a = a.toString();
        sc[a] || (sc[a] = new qc);
        return sc[a]
    }

    function vc(a, b) {
        var c = a.toString();
        tc[c] || (tc[c] = b());
        return tc[c]
    };

    function L(a, b) {
        this.name = a;
        this.U = b
    }

    function wc(a, b) {
        return new L(a, b)
    };

    function xc(a, b) {
        return yc(a.name, b.name)
    }

    function zc(a, b) {
        return yc(a, b)
    };

    function Ac(a, b, c) {
        this.type = Bc;
        this.source = a;
        this.path = b;
        this.Ja = c
    }
    Ac.prototype.$c = function(a) {
        return this.path.e() ? new Ac(this.source, M, this.Ja.T(a)) : new Ac(this.source, N(this.path), this.Ja)
    };
    Ac.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ja.toString() + ")"
    };

    function Cc(a, b) {
        this.type = Dc;
        this.source = a;
        this.path = b
    }
    Cc.prototype.$c = function() {
        return this.path.e() ? new Cc(this.source, M) : new Cc(this.source, N(this.path))
    };
    Cc.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
    };

    function Ec(a, b) {
        this.Pa = a;
        this.xa = b ? b : Fc
    }
    h = Ec.prototype;
    h.Sa = function(a, b) {
        return new Ec(this.Pa, this.xa.Sa(a, b, this.Pa).$(null, null, !1, null, null))
    };
    h.remove = function(a) {
        return new Ec(this.Pa, this.xa.remove(a, this.Pa).$(null, null, !1, null, null))
    };
    h.get = function(a) {
        for (var b, c = this.xa; !c.e();) {
            b = this.Pa(a, c.key);
            if (0 === b) return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return null
    };

    function Gc(a, b) {
        for (var c, d = a.xa, e = null; !d.e();) {
            c = a.Pa(b, d.key);
            if (0 === c) {
                if (d.left.e()) return e ? e.key : null;
                for (d = d.left; !d.right.e();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
    }
    h.e = function() {
        return this.xa.e()
    };
    h.count = function() {
        return this.xa.count()
    };
    h.Vc = function() {
        return this.xa.Vc()
    };
    h.jc = function() {
        return this.xa.jc()
    };
    h.ka = function(a) {
        return this.xa.ka(a)
    };
    h.ac = function(a) {
        return new Hc(this.xa, null, this.Pa, !1, a)
    };
    h.bc = function(a, b) {
        return new Hc(this.xa, a, this.Pa, !1, b)
    };
    h.dc = function(a, b) {
        return new Hc(this.xa, a, this.Pa, !0, b)
    };
    h.xf = function(a) {
        return new Hc(this.xa, null, this.Pa, !0, a)
    };

    function Hc(a, b, c, d, e) {
        this.Xd = e || null;
        this.Je = d;
        this.Ta = [];
        for (e = 1; !a.e();)
            if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e) a = this.Je ? a.left : a.right;
            else if (0 === e) {
            this.Ta.push(a);
            break
        } else this.Ta.push(a), a = this.Je ? a.right : a.left
    }

    function Ic(a) {
        if (0 === a.Ta.length) return null;
        var b = a.Ta.pop(),
            c;
        c = a.Xd ? a.Xd(b.key, b.value) : {
            key: b.key,
            value: b.value
        };
        if (a.Je)
            for (b = b.left; !b.e();) a.Ta.push(b), b = b.right;
        else
            for (b = b.right; !b.e();) a.Ta.push(b), b = b.left;
        return c
    }

    function Jc(a) {
        if (0 === a.Ta.length) return null;
        var b;
        b = a.Ta;
        b = b[b.length - 1];
        return a.Xd ? a.Xd(b.key, b.value) : {
            key: b.key,
            value: b.value
        }
    }

    function Kc(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = null != c ? c : !0;
        this.left = null != d ? d : Fc;
        this.right = null != e ? e : Fc
    }
    h = Kc.prototype;
    h.$ = function(a, b, c, d, e) {
        return new Kc(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
    };
    h.count = function() {
        return this.left.count() + 1 + this.right.count()
    };
    h.e = function() {
        return !1
    };
    h.ka = function(a) {
        return this.left.ka(a) || a(this.key, this.value) || this.right.ka(a)
    };

    function Lc(a) {
        return a.left.e() ? a : Lc(a.left)
    }
    h.Vc = function() {
        return Lc(this).key
    };
    h.jc = function() {
        return this.right.e() ? this.key : this.right.jc()
    };
    h.Sa = function(a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.$(null, null, null, e.left.Sa(a, b, c), null) : 0 === d ? e.$(null, b, null, null, null) : e.$(null, null, null, null, e.right.Sa(a, b, c));
        return Mc(e)
    };

    function Nc(a) {
        if (a.left.e()) return Fc;
        a.left.ha() || a.left.left.ha() || (a = Oc(a));
        a = a.$(null, null, null, Nc(a.left), null);
        return Mc(a)
    }
    h.remove = function(a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key)) c.left.e() || c.left.ha() || c.left.left.ha() || (c = Oc(c)), c = c.$(null, null, null, c.left.remove(a, b), null);
        else {
            c.left.ha() && (c = Pc(c));
            c.right.e() || c.right.ha() || c.right.left.ha() || (c = Qc(c), c.left.left.ha() && (c = Pc(c), c = Qc(c)));
            if (0 === b(a, c.key)) {
                if (c.right.e()) return Fc;
                d = Lc(c.right);
                c = c.$(d.key, d.value, null, null, Nc(c.right))
            }
            c = c.$(null, null, null, null, c.right.remove(a, b))
        }
        return Mc(c)
    };
    h.ha = function() {
        return this.color
    };

    function Mc(a) {
        a.right.ha() && !a.left.ha() && (a = Rc(a));
        a.left.ha() && a.left.left.ha() && (a = Pc(a));
        a.left.ha() && a.right.ha() && (a = Qc(a));
        return a
    }

    function Oc(a) {
        a = Qc(a);
        a.right.left.ha() && (a = a.$(null, null, null, null, Pc(a.right)), a = Rc(a), a = Qc(a));
        return a
    }

    function Rc(a) {
        return a.right.$(null, null, a.color, a.$(null, null, !0, null, a.right.left), null)
    }

    function Pc(a) {
        return a.left.$(null, null, a.color, null, a.$(null, null, !0, a.left.right, null))
    }

    function Qc(a) {
        return a.$(null, null, !a.color, a.left.$(null, null, !a.left.color, null, null), a.right.$(null, null, !a.right.color, null, null))
    }

    function Sc() {}
    h = Sc.prototype;
    h.$ = function() {
        return this
    };
    h.Sa = function(a, b) {
        return new Kc(a, b, null)
    };
    h.remove = function() {
        return this
    };
    h.count = function() {
        return 0
    };
    h.e = function() {
        return !0
    };
    h.ka = function() {
        return !1
    };
    h.Vc = function() {
        return null
    };
    h.jc = function() {
        return null
    };
    h.ha = function() {
        return !1
    };
    var Fc = new Sc;

    function Tc(a, b) {
        return a && "object" === typeof a ? (O(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function Uc(a, b) {
        var c = new Vc;
        Wc(a, new P(""), function(a, e) {
            c.rc(a, Xc(e, b))
        });
        return c
    }

    function Xc(a, b) {
        var c = a.C().J(),
            c = Tc(c, b),
            d;
        if (a.L()) {
            var e = Tc(a.Ea(), b);
            return e !== a.Ea() || c !== a.C().J() ? new Yc(e, Q(c)) : a
        }
        d = a;
        c !== a.C().J() && (d = d.ia(new Yc(c)));
        a.R(R, function(a, c) {
            var e = Xc(c, b);
            e !== c && (d = d.W(a, e))
        });
        return d
    };

    function Zc() {
        this.Ac = {}
    }
    Zc.prototype.set = function(a, b) {
        null == b ? delete this.Ac[a] : this.Ac[a] = b
    };
    Zc.prototype.get = function(a) {
        return y(this.Ac, a) ? this.Ac[a] : null
    };
    Zc.prototype.remove = function(a) {
        delete this.Ac[a]
    };
    Zc.prototype.Af = !0;

    function $c(a) {
        this.Ic = a;
        this.Sd = "firebase:"
    }
    h = $c.prototype;
    h.set = function(a, b) {
        null == b ? this.Ic.removeItem(this.Sd + a) : this.Ic.setItem(this.Sd + a, G(b))
    };
    h.get = function(a) {
        a = this.Ic.getItem(this.Sd + a);
        return null == a ? null : Rb(a)
    };
    h.remove = function(a) {
        this.Ic.removeItem(this.Sd + a)
    };
    h.Af = !1;
    h.toString = function() {
        return this.Ic.toString()
    };

    function ad(a) {
        try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
                var b = window[a];
                b.setItem("firebase:sentinel", "cache");
                b.removeItem("firebase:sentinel");
                return new $c(b)
            }
        } catch (c) {}
        return new Zc
    }
    var bd = ad("localStorage"),
        cd = ad("sessionStorage");

    function dd(a, b, c, d, e) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.ob = b;
        this.lc = c;
        this.jh = d;
        this.Rd = e || "";
        this.ab = bd.get("host:" + a) || this.host
    }

    function ed(a, b) {
        b !== a.ab && (a.ab = b, "s-" === a.ab.substr(0, 2) && bd.set("host:" + a.host, a.ab))
    }

    function fd(a, b, c) {
        O("string" === typeof b, "typeof type must == string");
        O("object" === typeof c, "typeof params must == object");
        if (b === gd) b = (a.ob ? "wss://" : "ws://") + a.ab + "/.ws?";
        else if (b === hd) b = (a.ob ? "https://" : "http://") + a.ab + "/.lp?";
        else throw Error("Unknown connection type: " + b);
        a.host !== a.ab && (c.ns = a.lc);
        var d = [];
        v(c, function(a, b) {
            d.push(b + "=" + a)
        });
        return b + d.join("&")
    }
    dd.prototype.toString = function() {
        var a = (this.ob ? "https://" : "http://") + this.host;
        this.Rd && (a += "<" + this.Rd + ">");
        return a
    };
    var id = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(),
        O = Kb,
        jd = Lb;

    function kd(a) {
        try {
            var b;
            if ("undefined" !== typeof atob) b = atob(a);
            else {
                ob();
                for (var c = mb, d = [], e = 0; e < a.length;) {
                    var f = c[a.charAt(e++)],
                        g = e < a.length ? c[a.charAt(e)] : 0;
                    ++e;
                    var k = e < a.length ? c[a.charAt(e)] : 64;
                    ++e;
                    var m = e < a.length ? c[a.charAt(e)] : 64;
                    ++e;
                    if (null == f || null == g || null == k || null == m) throw Error();
                    d.push(f << 2 | g >> 4);
                    64 != k && (d.push(g << 4 & 240 | k >> 2), 64 != m && d.push(k << 6 & 192 | m))
                }
                if (8192 > d.length) b = String.fromCharCode.apply(null, d);
                else {
                    a = "";
                    for (c = 0; c < d.length; c += 8192) a += String.fromCharCode.apply(null, Ua(d, c, c + 8192));
                    b = a
                }
            }
            return b
        } catch (l) {
            fc("base64Decode failed: ", l)
        }
        return null
    }

    function ld(a) {
        var b = Ob(a);
        a = new Ja;
        a.update(b);
        var b = [],
            c = 8 * a.ge;
        56 > a.ec ? a.update(a.Od, 56 - a.ec) : a.update(a.Od, a.Ya - (a.ec - 56));
        for (var d = a.Ya - 1; 56 <= d; d--) a.pe[d] = c & 255, c /= 256;
        Ka(a, a.pe);
        for (d = c = 0; 5 > d; d++)
            for (var e = 24; 0 <= e; e -= 8) b[c] = a.P[d] >> e & 255, ++c;
        return nb(b)
    }

    function md(a) {
        for (var b = "", c = 0; c < arguments.length; c++) b = ea(arguments[c]) ? b + md.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + G(arguments[c]) : b + arguments[c], b += " ";
        return b
    }
    var ec = null,
        nd = !0;

    function od(a, b) {
        Kb(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
        !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? ec = u(console.log, console) : "object" === typeof console.log && (ec = function(a) {
            console.log(a)
        })), b && cd.set("logging_enabled", !0)) : r(a) ? ec = a : (ec = null, cd.remove("logging_enabled"))
    }

    function fc(a) {
        !0 === nd && (nd = !1, null === ec && !0 === cd.get("logging_enabled") && od(!0));
        if (ec) {
            var b = md.apply(null, arguments);
            ec(b)
        }
    }

    function pd(a) {
        return function() {
            fc(a, arguments)
        }
    }

    function qd(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE INTERNAL ERROR: " + md.apply(null, arguments);
            "undefined" !== typeof console.error ? console.error(b) : console.log(b)
        }
    }

    function rd(a) {
        var b = md.apply(null, arguments);
        throw Error("FIREBASE FATAL ERROR: " + b);
    }

    function S(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE WARNING: " + md.apply(null, arguments);
            "undefined" !== typeof console.warn ? console.warn(b) : console.log(b)
        }
    }

    function sd(a) {
        var b = "",
            c = "",
            d = "",
            e = "",
            f = !0,
            g = "https",
            k = 443;
        if (q(a)) {
            var m = a.indexOf("//");
            0 <= m && (g = a.substring(0, m - 1), a = a.substring(m + 2));
            m = a.indexOf("/"); - 1 === m && (m = a.length);
            b = a.substring(0, m);
            e = "";
            a = a.substring(m).split("/");
            for (m = 0; m < a.length; m++)
                if (0 < a[m].length) {
                    var l = a[m];
                    try {
                        l = decodeURIComponent(l.replace(/\+/g, " "))
                    } catch (t) {}
                    e += "/" + l
                } a = b.split(".");
            3 === a.length ? (c = a[1], d = a[0].toLowerCase()) : 2 === a.length && (c = a[0]);
            m = b.indexOf(":");
            0 <= m && (f = "https" === g || "wss" === g, k = b.substring(m + 1), isFinite(k) && (k = String(k)), k = q(k) ? /^\s*-?0x/i.test(k) ? parseInt(k, 16) : parseInt(k, 10) : NaN)
        }
        return {
            host: b,
            port: k,
            domain: c,
            fh: d,
            ob: f,
            scheme: g,
            bd: e
        }
    }

    function td(a) {
        return fa(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function ud(a) {
        if ("complete" === document.readyState) a();
        else {
            var b = !1,
                c = function() {
                    document.body ? b || (b = !0, a()) : setTimeout(c, Math.floor(10))
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && c()
            }), window.attachEvent("onload", c))
        }
    }

    function yc(a, b) {
        if (a === b) return 0;
        if ("[MIN_NAME]" === a || "[MAX_NAME]" === b) return -1;
        if ("[MIN_NAME]" === b || "[MAX_NAME]" === a) return 1;
        var c = vd(a),
            d = vd(b);
        return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1
    }

    function wd(a, b) {
        if (b && a in b) return b[a];
        throw Error("Missing required key (" + a + ") in object: " + G(b));
    }

    function xd(a) {
        if ("object" !== typeof a || null === a) return G(a);
        var b = [],
            c;
        for (c in a) b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++) 0 !== d && (c += ","), c += G(b[d]), c += ":", c += xd(a[b[d]]);
        return c + "}"
    }

    function yd(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function zd(a, b) {
        if (da(a))
            for (var c = 0; c < a.length; ++c) b(c, a[c]);
        else v(a, b)
    }

    function Ad(a) {
        O(!td(a), "Invalid JSON number");
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; --a) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; --a) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
        return c.toLowerCase()
    }
    var Bd = /^-?\d{1,10}$/;

    function vd(a) {
        return Bd.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null
    }

    function gc(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function() {
                S("Exception was thrown by user callback.", b.stack || "");
                throw b;
            }, Math.floor(0))
        }
    }

    function T(a, b) {
        if (r(a)) {
            var c = Array.prototype.slice.call(arguments, 1).slice();
            gc(function() {
                a.apply(null, c)
            })
        }
    };

    function Cd(a) {
        var b = {},
            c = {},
            d = {},
            e = "";
        try {
            var f = a.split("."),
                b = Rb(kd(f[0]) || ""),
                c = Rb(kd(f[1]) || ""),
                e = f[2],
                d = c.d || {};
            delete c.d
        } catch (g) {}
        return {
            mh: b,
            Ec: c,
            data: d,
            bh: e
        }
    }

    function Dd(a) {
        a = Cd(a).Ec;
        return "object" === typeof a && a.hasOwnProperty("iat") ? z(a, "iat") : null
    }

    function Ed(a) {
        a = Cd(a);
        var b = a.Ec;
        return !!a.bh && !!b && "object" === typeof b && b.hasOwnProperty("iat")
    };

    function Fd(a) {
        this.Y = a;
        this.g = a.n.g
    }

    function Gd(a, b, c, d) {
        var e = [],
            f = [];
        Ma(b, function(b) {
            "child_changed" === b.type && a.g.Dd(b.Oe, b.Na) && f.push(new J("child_moved", b.Na, b.Za))
        });
        Hd(a, e, "child_removed", b, d, c);
        Hd(a, e, "child_added", b, d, c);
        Hd(a, e, "child_moved", f, d, c);
        Hd(a, e, "child_changed", b, d, c);
        Hd(a, e, ic, b, d, c);
        return e
    }

    function Hd(a, b, c, d, e, f) {
        d = Na(d, function(a) {
            return a.type === c
        });
        Va(d, u(a.qg, a));
        Ma(d, function(c) {
            var d = Id(a, c, f);
            Ma(e, function(e) {
                e.Qf(c.type) && b.push(e.createEvent(d, a.Y))
            })
        })
    }

    function Id(a, b, c) {
        "value" !== b.type && "child_removed" !== b.type && (b.Td = c.wf(b.Za, b.Na, a.g));
        return b
    }
    Fd.prototype.qg = function(a, b) {
        if (null == a.Za || null == b.Za) throw jd("Should only compare child_ events.");
        return this.g.compare(new L(a.Za, a.Na), new L(b.Za, b.Na))
    };

    function Jd() {
        this.ib = {}
    }

    function Kd(a, b) {
        var c = b.type,
            d = b.Za;
        O("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
        O(".priority" !== d, "Only non-priority child changes can be tracked.");
        var e = z(a.ib, d);
        if (e) {
            var f = e.type;
            if ("child_added" == c && "child_removed" == f) a.ib[d] = new J("child_changed", b.Na, d, e.Na);
            else if ("child_removed" == c && "child_added" == f) delete a.ib[d];
            else if ("child_removed" == c && "child_changed" == f) a.ib[d] = new J("child_removed", e.Oe, d);
            else if ("child_changed" == c && "child_added" == f) a.ib[d] = new J("child_added", b.Na, d);
            else if ("child_changed" == c && "child_changed" == f) a.ib[d] = new J("child_changed", b.Na, d, e.Oe);
            else throw jd("Illegal combination of changes: " + b + " occurred after " + e);
        } else a.ib[d] = b
    };

    function Ld(a) {
        this.g = a
    }
    h = Ld.prototype;
    h.H = function(a, b, c, d, e, f) {
        O(a.Mc(this.g), "A node must be indexed if only a child is updated");
        e = a.T(b);
        if (e.S(d).ea(c.S(d)) && e.e() == c.e()) return a;
        null != f && (c.e() ? a.Fa(b) ? Kd(f, new J("child_removed", e, b)) : O(a.L(), "A child remove without an old child only makes sense on a leaf node") : e.e() ? Kd(f, new J("child_added", c, b)) : Kd(f, new J("child_changed", c, b, e)));
        return a.L() && c.e() ? a : a.W(b, c).pb(this.g)
    };
    h.ya = function(a, b, c) {
        null != c && (a.L() || a.R(R, function(a, e) {
            b.Fa(a) || Kd(c, new J("child_removed", e, a))
        }), b.L() || b.R(R, function(b, e) {
            if (a.Fa(b)) {
                var f = a.T(b);
                f.ea(e) || Kd(c, new J("child_changed", e, b, f))
            } else Kd(c, new J("child_added", e, b))
        }));
        return b.pb(this.g)
    };
    h.ia = function(a, b) {
        return a.e() ? H : a.ia(b)
    };
    h.Ra = function() {
        return !1
    };
    h.$b = function() {
        return this
    };

    function Md(a) {
        this.Fe = new Ld(a.g);
        this.g = a.g;
        var b;
        a.oa ? (b = Nd(a), b = a.g.Sc(Od(a), b)) : b = a.g.Wc();
        this.gd = b;
        a.ra ? (b = Pd(a), a = a.g.Sc(Rd(a), b)) : a = a.g.Tc();
        this.Jc = a
    }
    h = Md.prototype;
    h.matches = function(a) {
        return 0 >= this.g.compare(this.gd, a) && 0 >= this.g.compare(a, this.Jc)
    };
    h.H = function(a, b, c, d, e, f) {
        this.matches(new L(b, c)) || (c = H);
        return this.Fe.H(a, b, c, d, e, f)
    };
    h.ya = function(a, b, c) {
        b.L() && (b = H);
        var d = b.pb(this.g),
            d = d.ia(H),
            e = this;
        b.R(R, function(a, b) {
            e.matches(new L(a, b)) || (d = d.W(a, H))
        });
        return this.Fe.ya(a, d, c)
    };
    h.ia = function(a) {
        return a
    };
    h.Ra = function() {
        return !0
    };
    h.$b = function() {
        return this.Fe
    };

    function Sd(a) {
        this.ua = new Md(a);
        this.g = a.g;
        O(a.la, "Only valid if limit has been set");
        this.ma = a.ma;
        this.Nb = !Td(a)
    }
    h = Sd.prototype;
    h.H = function(a, b, c, d, e, f) {
        this.ua.matches(new L(b, c)) || (c = H);
        return a.T(b).ea(c) ? a : a.Hb() < this.ma ? this.ua.$b().H(a, b, c, d, e, f) : Ud(this, a, b, c, e, f)
    };
    h.ya = function(a, b, c) {
        var d;
        if (b.L() || b.e()) d = H.pb(this.g);
        else if (2 * this.ma < b.Hb() && b.Mc(this.g)) {
            d = H.pb(this.g);
            b = this.Nb ? b.dc(this.ua.Jc, this.g) : b.bc(this.ua.gd, this.g);
            for (var e = 0; 0 < b.Ta.length && e < this.ma;) {
                var f = Ic(b),
                    g;
                if (g = this.Nb ? 0 >= this.g.compare(this.ua.gd, f) : 0 >= this.g.compare(f, this.ua.Jc)) d = d.W(f.name, f.U), e++;
                else break
            }
        } else {
            d = b.pb(this.g);
            d = d.ia(H);
            var k, m, l;
            if (this.Nb) {
                b = d.xf(this.g);
                k = this.ua.Jc;
                m = this.ua.gd;
                var t = Vd(this.g);
                l = function(a, b) {
                    return t(b, a)
                }
            } else b = d.ac(this.g), k = this.ua.gd, m = this.ua.Jc, l = Vd(this.g);
            for (var e = 0, A = !1; 0 < b.Ta.length;) f = Ic(b), !A && 0 >= l(k, f) && (A = !0), (g = A && e < this.ma && 0 >= l(f, m)) ? e++ : d = d.W(f.name, H)
        }
        return this.ua.$b().ya(a, d, c)
    };
    h.ia = function(a) {
        return a
    };
    h.Ra = function() {
        return !0
    };
    h.$b = function() {
        return this.ua.$b()
    };

    function Ud(a, b, c, d, e, f) {
        var g;
        if (a.Nb) {
            var k = Vd(a.g);
            g = function(a, b) {
                return k(b, a)
            }
        } else g = Vd(a.g);
        O(b.Hb() == a.ma, "");
        var m = new L(c, d),
            l = a.Nb ? Wd(b, a.g) : Xd(b, a.g),
            t = a.ua.matches(m);
        if (b.Fa(c)) {
            for (var A = b.T(c), l = e.Ce(a.g, l, a.Nb); null != l && (l.name == c || b.Fa(l.name));) l = e.Ce(a.g, l, a.Nb);
            e = null == l ? 1 : g(l, m);
            if (t && !d.e() && 0 <= e) return null != f && Kd(f, new J("child_changed", d, c, A)), b.W(c, d);
            null != f && Kd(f, new J("child_removed", A, c));
            b = b.W(c, H);
            return null != l && a.ua.matches(l) ? (null != f && Kd(f, new J("child_added", l.U, l.name)), b.W(l.name, l.U)) : b
        }
        return d.e() ? b : t && 0 <= g(l, m) ? (null != f && (Kd(f, new J("child_removed", l.U, l.name)), Kd(f, new J("child_added", d, c))), b.W(c, d).W(l.name, H)) : b
    };

    function Yd(a, b) {
        this.me = a;
        this.og = b
    }

    function Zd(a) {
        this.X = a
    }
    Zd.prototype.gb = function(a, b, c, d) {
        var e = new Jd,
            f;
        if (b.type === Bc) b.source.Ae ? c = $d(this, a, b.path, b.Ja, c, d, e) : (O(b.source.tf, "Unknown source."), f = b.source.ef || mc(a.w()) && !b.path.e(), c = ae(this, a, b.path, b.Ja, c, d, f, e));
        else if (b.type === be) b.source.Ae ? c = ce(this, a, b.path, b.children, c, d, e) : (O(b.source.tf, "Unknown source."), f = b.source.ef || mc(a.w()), c = de(this, a, b.path, b.children, c, d, f, e));
        else if (b.type === ee)
            if (b.Yd)
                if (b = b.path, null != c.xc(b)) c = a;
                else {
                    f = new Vb(c, a, d);
                    d = a.Q.j();
                    if (b.e() || ".priority" === K(b)) lc(a.w()) ? b = c.Aa(Yb(a)) : (b = a.w().j(), O(b instanceof fe, "serverChildren would be complete if leaf node"), b = c.Cc(b)), b = this.X.ya(d, b, e);
                    else {
                        var g = K(b),
                            k = c.Bc(g, a.w());
                        null == k && Wb(a.w(), g) && (k = d.T(g));
                        b = null != k ? this.X.H(d, g, k, N(b), f, e) : a.Q.j().Fa(g) ? this.X.H(d, g, H, N(b), f, e) : d;
                        b.e() && lc(a.w()) && (d = c.Aa(Yb(a)), d.L() && (b = this.X.ya(b, d, e)))
                    }
                    d = lc(a.w()) || null != c.xc(M);
                    c = ge(a, b, d, this.X.Ra())
                }
        else c = he(this, a, b.path, b.Ub, c, d, e);
        else if (b.type === Dc) d = b.path, b = a.w(), f = b.j(), g = b.ga || d.e(), c = ie(this, new je(a.Q, new Xb(f, g, b.Yb)), d, c, Ub, e);
        else throw jd("Unknown operation type: " + b.type);
        e = qa(e.ib);
        d = c;
        b = d.Q;
        b.ga && (f = b.j().L() || b.j().e(), g = ke(a), (0 < e.length || !a.Q.ga || f && !b.j().ea(g) || !b.j().C().ea(g.C())) && e.push(hc(ke(d))));
        return new Yd(c, e)
    };

    function ie(a, b, c, d, e, f) {
        var g = b.Q;
        if (null != d.xc(c)) return b;
        var k;
        if (c.e()) O(lc(b.w()), "If change path is empty, we must have complete server data"), mc(b.w()) ? (e = Yb(b), d = d.Cc(e instanceof fe ? e : H)) : d = d.Aa(Yb(b)), f = a.X.ya(b.Q.j(), d, f);
        else {
            var m = K(c);
            if (".priority" == m) O(1 == le(c), "Can't have a priority with additional path components"), f = g.j(), k = b.w().j(), d = d.nd(c, f, k), f = null != d ? a.X.ia(f, d) : g.j();
            else {
                var l = N(c);
                Wb(g, m) ? (k = b.w().j(), d = d.nd(c, g.j(), k), d = null != d ? g.j().T(m).H(l, d) : g.j().T(m)) : d = d.Bc(m, b.w());
                f = null != d ? a.X.H(g.j(), m, d, l, e, f) : g.j()
            }
        }
        return ge(b, f, g.ga || c.e(), a.X.Ra())
    }

    function ae(a, b, c, d, e, f, g, k) {
        var m = b.w();
        g = g ? a.X : a.X.$b();
        if (c.e()) d = g.ya(m.j(), d, null);
        else if (g.Ra() && !m.Yb) d = m.j().H(c, d), d = g.ya(m.j(), d, null);
        else {
            var l = K(c);
            if (!nc(m, c) && 1 < le(c)) return b;
            var t = N(c);
            d = m.j().T(l).H(t, d);
            d = ".priority" == l ? g.ia(m.j(), d) : g.H(m.j(), l, d, t, Ub, null)
        }
        m = m.ga || c.e();
        b = new je(b.Q, new Xb(d, m, g.Ra()));
        return ie(a, b, c, e, new Vb(e, b, f), k)
    }

    function $d(a, b, c, d, e, f, g) {
        var k = b.Q;
        e = new Vb(e, b, f);
        if (c.e()) g = a.X.ya(b.Q.j(), d, g), a = ge(b, g, !0, a.X.Ra());
        else if (f = K(c), ".priority" === f) g = a.X.ia(b.Q.j(), d), a = ge(b, g, k.ga, k.Yb);
        else {
            c = N(c);
            var m = k.j().T(f);
            if (!c.e()) {
                var l = e.uf(f);
                d = null != l ? ".priority" === me(c) && l.S(c.parent()).e() ? l : l.H(c, d) : H
            }
            m.ea(d) ? a = b : (g = a.X.H(k.j(), f, d, c, e, g), a = ge(b, g, k.ga, a.X.Ra()))
        }
        return a
    }

    function ce(a, b, c, d, e, f, g) {
        var k = b;
        ne(d, function(d, l) {
            var t = c.o(d);
            Wb(b.Q, K(t)) && (k = $d(a, k, t, l, e, f, g))
        });
        ne(d, function(d, l) {
            var t = c.o(d);
            Wb(b.Q, K(t)) || (k = $d(a, k, t, l, e, f, g))
        });
        return k
    }

    function oe(a, b) {
        ne(b, function(b, d) {
            a = a.H(b, d)
        });
        return a
    }

    function de(a, b, c, d, e, f, g, k) {
        if (b.w().j().e() && !lc(b.w())) return b;
        var m = b;
        c = c.e() ? d : pe(qe, c, d);
        var l = b.w().j();
        c.children.ka(function(c, d) {
            if (l.Fa(c)) {
                var I = b.w().j().T(c),
                    I = oe(I, d);
                m = ae(a, m, new P(c), I, e, f, g, k)
            }
        });
        c.children.ka(function(c, d) {
            var I = !Wb(b.w(), c) && null == d.value;
            l.Fa(c) || I || (I = b.w().j().T(c), I = oe(I, d), m = ae(a, m, new P(c), I, e, f, g, k))
        });
        return m
    }

    function he(a, b, c, d, e, f, g) {
        if (null != e.xc(c)) return b;
        var k = mc(b.w()),
            m = b.w();
        if (null != d.value) {
            if (c.e() && m.ga || nc(m, c)) return ae(a, b, c, m.j().S(c), e, f, k, g);
            if (c.e()) {
                var l = qe;
                m.j().R(re, function(a, b) {
                    l = l.set(new P(a), b)
                });
                return de(a, b, c, l, e, f, k, g)
            }
            return b
        }
        l = qe;
        ne(d, function(a) {
            var b = c.o(a);
            nc(m, b) && (l = l.set(a, m.j().S(b)))
        });
        return de(a, b, c, l, e, f, k, g)
    };

    function se() {}
    var te = {};

    function Vd(a) {
        return u(a.compare, a)
    }
    se.prototype.Dd = function(a, b) {
        return 0 !== this.compare(new L("[MIN_NAME]", a), new L("[MIN_NAME]", b))
    };
    se.prototype.Wc = function() {
        return ue
    };

    function ve(a) {
        O(!a.e() && ".priority" !== K(a), "Can't create PathIndex with empty path or .priority key");
        this.gc = a
    }
    ka(ve, se);
    h = ve.prototype;
    h.Lc = function(a) {
        return !a.S(this.gc).e()
    };
    h.compare = function(a, b) {
        var c = a.U.S(this.gc),
            d = b.U.S(this.gc),
            c = c.Gc(d);
        return 0 === c ? yc(a.name, b.name) : c
    };
    h.Sc = function(a, b) {
        var c = Q(a),
            c = H.H(this.gc, c);
        return new L(b, c)
    };
    h.Tc = function() {
        var a = H.H(this.gc, we);
        return new L("[MAX_NAME]", a)
    };
    h.toString = function() {
        return this.gc.slice().join("/")
    };

    function xe() {}
    ka(xe, se);
    h = xe.prototype;
    h.compare = function(a, b) {
        var c = a.U.C(),
            d = b.U.C(),
            c = c.Gc(d);
        return 0 === c ? yc(a.name, b.name) : c
    };
    h.Lc = function(a) {
        return !a.C().e()
    };
    h.Dd = function(a, b) {
        return !a.C().ea(b.C())
    };
    h.Wc = function() {
        return ue
    };
    h.Tc = function() {
        return new L("[MAX_NAME]", new Yc("[PRIORITY-POST]", we))
    };
    h.Sc = function(a, b) {
        var c = Q(a);
        return new L(b, new Yc("[PRIORITY-POST]", c))
    };
    h.toString = function() {
        return ".priority"
    };
    var R = new xe;

    function ye() {}
    ka(ye, se);
    h = ye.prototype;
    h.compare = function(a, b) {
        return yc(a.name, b.name)
    };
    h.Lc = function() {
        throw jd("KeyIndex.isDefinedOn not expected to be called.");
    };
    h.Dd = function() {
        return !1
    };
    h.Wc = function() {
        return ue
    };
    h.Tc = function() {
        return new L("[MAX_NAME]", H)
    };
    h.Sc = function(a) {
        O(q(a), "KeyIndex indexValue must always be a string.");
        return new L(a, H)
    };
    h.toString = function() {
        return ".key"
    };
    var re = new ye;

    function ze() {}
    ka(ze, se);
    h = ze.prototype;
    h.compare = function(a, b) {
        var c = a.U.Gc(b.U);
        return 0 === c ? yc(a.name, b.name) : c
    };
    h.Lc = function() {
        return !0
    };
    h.Dd = function(a, b) {
        return !a.ea(b)
    };
    h.Wc = function() {
        return ue
    };
    h.Tc = function() {
        return Ae
    };
    h.Sc = function(a, b) {
        var c = Q(a);
        return new L(b, c)
    };
    h.toString = function() {
        return ".value"
    };
    var Be = new ze;

    function Ce() {
        this.Xb = this.ra = this.Pb = this.oa = this.la = !1;
        this.ma = 0;
        this.Rb = "";
        this.ic = null;
        this.Bb = "";
        this.fc = null;
        this.zb = "";
        this.g = R
    }
    var De = new Ce;

    function Td(a) {
        return "" === a.Rb ? a.oa : "l" === a.Rb
    }

    function Od(a) {
        O(a.oa, "Only valid if start has been set");
        return a.ic
    }

    function Nd(a) {
        O(a.oa, "Only valid if start has been set");
        return a.Pb ? a.Bb : "[MIN_NAME]"
    }

    function Rd(a) {
        O(a.ra, "Only valid if end has been set");
        return a.fc
    }

    function Pd(a) {
        O(a.ra, "Only valid if end has been set");
        return a.Xb ? a.zb : "[MAX_NAME]"
    }

    function Ee(a) {
        var b = new Ce;
        b.la = a.la;
        b.ma = a.ma;
        b.oa = a.oa;
        b.ic = a.ic;
        b.Pb = a.Pb;
        b.Bb = a.Bb;
        b.ra = a.ra;
        b.fc = a.fc;
        b.Xb = a.Xb;
        b.zb = a.zb;
        b.g = a.g;
        return b
    }
    h = Ce.prototype;
    h.Le = function(a) {
        var b = Ee(this);
        b.la = !0;
        b.ma = a;
        b.Rb = "";
        return b
    };
    h.Me = function(a) {
        var b = Ee(this);
        b.la = !0;
        b.ma = a;
        b.Rb = "l";
        return b
    };
    h.Ne = function(a) {
        var b = Ee(this);
        b.la = !0;
        b.ma = a;
        b.Rb = "r";
        return b
    };
    h.ce = function(a, b) {
        var c = Ee(this);
        c.oa = !0;
        p(a) || (a = null);
        c.ic = a;
        null != b ? (c.Pb = !0, c.Bb = b) : (c.Pb = !1, c.Bb = "");
        return c
    };
    h.vd = function(a, b) {
        var c = Ee(this);
        c.ra = !0;
        p(a) || (a = null);
        c.fc = a;
        p(b) ? (c.Xb = !0, c.zb = b) : (c.oh = !1, c.zb = "");
        return c
    };

    function Fe(a, b) {
        var c = Ee(a);
        c.g = b;
        return c
    }

    function Ge(a) {
        var b = {};
        a.oa && (b.sp = a.ic, a.Pb && (b.sn = a.Bb));
        a.ra && (b.ep = a.fc, a.Xb && (b.en = a.zb));
        if (a.la) {
            b.l = a.ma;
            var c = a.Rb;
            "" === c && (c = Td(a) ? "l" : "r");
            b.vf = c
        }
        a.g !== R && (b.i = a.g.toString());
        return b
    }

    function He(a) {
        return !(a.oa || a.ra || a.la)
    }

    function Ie(a) {
        return He(a) && a.g == R
    }

    function Je(a) {
        var b = {};
        if (Ie(a)) return b;
        var c;
        a.g === R ? c = "$priority" : a.g === Be ? c = "$value" : a.g === re ? c = "$key" : (O(a.g instanceof ve, "Unrecognized index type!"), c = a.g.toString());
        b.orderBy = G(c);
        a.oa && (b.startAt = G(a.ic), a.Pb && (b.startAt += "," + G(a.Bb)));
        a.ra && (b.endAt = G(a.fc), a.Xb && (b.endAt += "," + G(a.zb)));
        a.la && (Td(a) ? b.limitToFirst = a.ma : b.limitToLast = a.ma);
        return b
    }
    h.toString = function() {
        return G(Ge(this))
    };

    function Ke(a, b) {
        this.Ed = a;
        this.hc = b
    }
    Ke.prototype.get = function(a) {
        var b = z(this.Ed, a);
        if (!b) throw Error("No index defined for " + a);
        return b === te ? null : b
    };

    function Le(a, b, c) {
        var d = ma(a.Ed, function(d, f) {
            var g = z(a.hc, f);
            O(g, "Missing index implementation for " + f);
            if (d === te) {
                if (g.Lc(b.U)) {
                    for (var k = [], m = c.ac(wc), l = Ic(m); l;) l.name != b.name && k.push(l), l = Ic(m);
                    k.push(b);
                    return Me(k, Vd(g))
                }
                return te
            }
            g = c.get(b.name);
            k = d;
            g && (k = k.remove(new L(b.name, g)));
            return k.Sa(b, b.U)
        });
        return new Ke(d, a.hc)
    }

    function Ne(a, b, c) {
        var d = ma(a.Ed, function(a) {
            if (a === te) return a;
            var d = c.get(b.name);
            return d ? a.remove(new L(b.name, d)) : a
        });
        return new Ke(d, a.hc)
    }
    var Oe = new Ke({
        ".priority": te
    }, {
        ".priority": R
    });

    function Yc(a, b) {
        this.B = a;
        O(p(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
        this.ca = b || H;
        Pe(this.ca);
        this.Gb = null
    }
    var Qe = ["object", "boolean", "number", "string"];
    h = Yc.prototype;
    h.L = function() {
        return !0
    };
    h.C = function() {
        return this.ca
    };
    h.ia = function(a) {
        return new Yc(this.B, a)
    };
    h.T = function(a) {
        return ".priority" === a ? this.ca : H
    };
    h.S = function(a) {
        return a.e() ? this : ".priority" === K(a) ? this.ca : H
    };
    h.Fa = function() {
        return !1
    };
    h.wf = function() {
        return null
    };
    h.W = function(a, b) {
        return ".priority" === a ? this.ia(b) : b.e() && ".priority" !== a ? this : H.W(a, b).ia(this.ca)
    };
    h.H = function(a, b) {
        var c = K(a);
        if (null === c) return b;
        if (b.e() && ".priority" !== c) return this;
        O(".priority" !== c || 1 === le(a), ".priority must be the last token in a path");
        return this.W(c, H.H(N(a), b))
    };
    h.e = function() {
        return !1
    };
    h.Hb = function() {
        return 0
    };
    h.R = function() {
        return !1
    };
    h.J = function(a) {
        return a && !this.C().e() ? {
            ".value": this.Ea(),
            ".priority": this.C().J()
        } : this.Ea()
    };
    h.hash = function() {
        if (null === this.Gb) {
            var a = "";
            this.ca.e() || (a += "priority:" + Re(this.ca.J()) + ":");
            var b = typeof this.B,
                a = a + (b + ":"),
                a = "number" === b ? a + Ad(this.B) : a + this.B;
            this.Gb = ld(a)
        }
        return this.Gb
    };
    h.Ea = function() {
        return this.B
    };
    h.Gc = function(a) {
        if (a === H) return 1;
        if (a instanceof fe) return -1;
        O(a.L(), "Unknown node type");
        var b = typeof a.B,
            c = typeof this.B,
            d = La(Qe, b),
            e = La(Qe, c);
        O(0 <= d, "Unknown leaf type: " + b);
        O(0 <= e, "Unknown leaf type: " + c);
        return d === e ? "object" === c ? 0 : this.B < a.B ? -1 : this.B === a.B ? 0 : 1 : e - d
    };
    h.pb = function() {
        return this
    };
    h.Mc = function() {
        return !0
    };
    h.ea = function(a) {
        return a === this ? !0 : a.L() ? this.B === a.B && this.ca.ea(a.ca) : !1
    };
    h.toString = function() {
        return G(this.J(!0))
    };

    function fe(a, b, c) {
        this.m = a;
        (this.ca = b) && Pe(this.ca);
        a.e() && O(!this.ca || this.ca.e(), "An empty node cannot have a priority");
        this.Ab = c;
        this.Gb = null
    }
    h = fe.prototype;
    h.L = function() {
        return !1
    };
    h.C = function() {
        return this.ca || H
    };
    h.ia = function(a) {
        return this.m.e() ? this : new fe(this.m, a, this.Ab)
    };
    h.T = function(a) {
        if (".priority" === a) return this.C();
        a = this.m.get(a);
        return null === a ? H : a
    };
    h.S = function(a) {
        var b = K(a);
        return null === b ? this : this.T(b).S(N(a))
    };
    h.Fa = function(a) {
        return null !== this.m.get(a)
    };
    h.W = function(a, b) {
        O(b, "We should always be passing snapshot nodes");
        if (".priority" === a) return this.ia(b);
        var c = new L(a, b),
            d, e;
        b.e() ? (d = this.m.remove(a), c = Ne(this.Ab, c, this.m)) : (d = this.m.Sa(a, b), c = Le(this.Ab, c, this.m));
        e = d.e() ? H : this.ca;
        return new fe(d, e, c)
    };
    h.H = function(a, b) {
        var c = K(a);
        if (null === c) return b;
        O(".priority" !== K(a) || 1 === le(a), ".priority must be the last token in a path");
        var d = this.T(c).H(N(a), b);
        return this.W(c, d)
    };
    h.e = function() {
        return this.m.e()
    };
    h.Hb = function() {
        return this.m.count()
    };
    var Se = /^(0|[1-9]\d*)$/;
    h = fe.prototype;
    h.J = function(a) {
        if (this.e()) return null;
        var b = {},
            c = 0,
            d = 0,
            e = !0;
        this.R(R, function(f, g) {
            b[f] = g.J(a);
            c++;
            e && Se.test(f) ? d = Math.max(d, Number(f)) : e = !1
        });
        if (!a && e && d < 2 * c) {
            var f = [],
                g;
            for (g in b) f[g] = b[g];
            return f
        }
        a && !this.C().e() && (b[".priority"] = this.C().J());
        return b
    };
    h.hash = function() {
        if (null === this.Gb) {
            var a = "";
            this.C().e() || (a += "priority:" + Re(this.C().J()) + ":");
            this.R(R, function(b, c) {
                var d = c.hash();
                "" !== d && (a += ":" + b + ":" + d)
            });
            this.Gb = "" === a ? "" : ld(a)
        }
        return this.Gb
    };
    h.wf = function(a, b, c) {
        return (c = Te(this, c)) ? (a = Gc(c, new L(a, b))) ? a.name : null : Gc(this.m, a)
    };

    function Wd(a, b) {
        var c;
        c = (c = Te(a, b)) ? (c = c.Vc()) && c.name : a.m.Vc();
        return c ? new L(c, a.m.get(c)) : null
    }

    function Xd(a, b) {
        var c;
        c = (c = Te(a, b)) ? (c = c.jc()) && c.name : a.m.jc();
        return c ? new L(c, a.m.get(c)) : null
    }
    h.R = function(a, b) {
        var c = Te(this, a);
        return c ? c.ka(function(a) {
            return b(a.name, a.U)
        }) : this.m.ka(b)
    };
    h.ac = function(a) {
        return this.bc(a.Wc(), a)
    };
    h.bc = function(a, b) {
        var c = Te(this, b);
        if (c) return c.bc(a, function(a) {
            return a
        });
        for (var c = this.m.bc(a.name, wc), d = Jc(c); null != d && 0 > b.compare(d, a);) Ic(c), d = Jc(c);
        return c
    };
    h.xf = function(a) {
        return this.dc(a.Tc(), a)
    };
    h.dc = function(a, b) {
        var c = Te(this, b);
        if (c) return c.dc(a, function(a) {
            return a
        });
        for (var c = this.m.dc(a.name, wc), d = Jc(c); null != d && 0 < b.compare(d, a);) Ic(c), d = Jc(c);
        return c
    };
    h.Gc = function(a) {
        return this.e() ? a.e() ? 0 : -1 : a.L() || a.e() ? 1 : a === we ? -1 : 0
    };
    h.pb = function(a) {
        if (a === re || sa(this.Ab.hc, a.toString())) return this;
        var b = this.Ab,
            c = this.m;
        O(a !== re, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        for (var d = [], e = !1, c = c.ac(wc), f = Ic(c); f;) e = e || a.Lc(f.U), d.push(f), f = Ic(c);
        d = e ? Me(d, Vd(a)) : te;
        e = a.toString();
        c = wa(b.hc);
        c[e] = a;
        a = wa(b.Ed);
        a[e] = d;
        return new fe(this.m, this.ca, new Ke(a, c))
    };
    h.Mc = function(a) {
        return a === re || sa(this.Ab.hc, a.toString())
    };
    h.ea = function(a) {
        if (a === this) return !0;
        if (a.L()) return !1;
        if (this.C().ea(a.C()) && this.m.count() === a.m.count()) {
            var b = this.ac(R);
            a = a.ac(R);
            for (var c = Ic(b), d = Ic(a); c && d;) {
                if (c.name !== d.name || !c.U.ea(d.U)) return !1;
                c = Ic(b);
                d = Ic(a)
            }
            return null === c && null === d
        }
        return !1
    };

    function Te(a, b) {
        return b === re ? null : a.Ab.get(b.toString())
    }
    h.toString = function() {
        return G(this.J(!0))
    };

    function Q(a, b) {
        if (null === a) return H;
        var c = null;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        O(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
        "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a) return new Yc(a, Q(c));
        if (a instanceof Array) {
            var d = H,
                e = a;
            v(e, function(a, b) {
                if (y(e, b) && "." !== b.substring(0, 1)) {
                    var c = Q(a);
                    if (c.L() || !c.e()) d = d.W(b, c)
                }
            });
            return d.ia(Q(c))
        }
        var f = [],
            g = !1,
            k = a;
        Fb(k, function(a) {
            if ("string" !== typeof a || "." !== a.substring(0, 1)) {
                var b = Q(k[a]);
                b.e() || (g = g || !b.C().e(), f.push(new L(a, b)))
            }
        });
        if (0 == f.length) return H;
        var m = Me(f, xc, function(a) {
            return a.name
        }, zc);
        if (g) {
            var l = Me(f, Vd(R));
            return new fe(m, Q(c), new Ke({
                ".priority": l
            }, {
                ".priority": R
            }))
        }
        return new fe(m, Q(c), Oe)
    }
    var Ue = Math.log(2);

    function Ve(a) {
        this.count = parseInt(Math.log(a + 1) / Ue, 10);
        this.nf = this.count - 1;
        this.ng = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function We(a) {
        var b = !(a.ng & 1 << a.nf);
        a.nf--;
        return b
    }

    function Me(a, b, c, d) {
        function e(b, d) {
            var f = d - b;
            if (0 == f) return null;
            if (1 == f) {
                var l = a[b],
                    t = c ? c(l) : l;
                return new Kc(t, l.U, !1, null, null)
            }
            var l = parseInt(f / 2, 10) + b,
                f = e(b, l),
                A = e(l + 1, d),
                l = a[l],
                t = c ? c(l) : l;
            return new Kc(t, l.U, !1, f, A)
        }
        a.sort(b);
        var f = function(b) {
            function d(b, g) {
                var k = t - b,
                    A = t;
                t -= b;
                var A = e(k + 1, A),
                    k = a[k],
                    I = c ? c(k) : k,
                    A = new Kc(I, k.U, g, null, A);
                f ? f.left = A : l = A;
                f = A
            }
            for (var f = null, l = null, t = a.length, A = 0; A < b.count; ++A) {
                var I = We(b),
                    Qd = Math.pow(2, b.count - (A + 1));
                I ? d(Qd, !1) : (d(Qd, !1), d(Qd, !0))
            }
            return l
        }(new Ve(a.length));
        return null !== f ? new Ec(d || b, f) : new Ec(d || b)
    }

    function Re(a) {
        return "number" === typeof a ? "number:" + Ad(a) : "string:" + a
    }

    function Pe(a) {
        if (a.L()) {
            var b = a.J();
            O("string" === typeof b || "number" === typeof b || "object" === typeof b && y(b, ".sv"), "Priority must be a string or number.")
        } else O(a === we || a.e(), "priority of unexpected type.");
        O(a === we || a.C().e(), "Priority nodes can't have a priority of their own.")
    }
    var H = new fe(new Ec(zc), null, Oe);

    function Xe() {
        fe.call(this, new Ec(zc), H, Oe)
    }
    ka(Xe, fe);
    h = Xe.prototype;
    h.Gc = function(a) {
        return a === this ? 0 : 1
    };
    h.ea = function(a) {
        return a === this
    };
    h.C = function() {
        return this
    };
    h.T = function() {
        return H
    };
    h.e = function() {
        return !1
    };
    var we = new Xe,
        ue = new L("[MIN_NAME]", H),
        Ae = new L("[MAX_NAME]", we);

    function je(a, b) {
        this.Q = a;
        this.ae = b
    }

    function ge(a, b, c, d) {
        return new je(new Xb(b, c, d), a.ae)
    }

    function ke(a) {
        return a.Q.ga ? a.Q.j() : null
    }
    je.prototype.w = function() {
        return this.ae
    };

    function Yb(a) {
        return a.ae.ga ? a.ae.j() : null
    };

    function Ye(a, b) {
        this.Y = a;
        var c = a.n,
            d = new Ld(c.g),
            c = He(c) ? new Ld(c.g) : c.la ? new Sd(c) : new Md(c);
        this.Nf = new Zd(c);
        var e = b.w(),
            f = b.Q,
            g = d.ya(H, e.j(), null),
            k = c.ya(H, f.j(), null);
        this.Oa = new je(new Xb(k, f.ga, c.Ra()), new Xb(g, e.ga, d.Ra()));
        this.$a = [];
        this.ug = new Fd(a)
    }

    function Ze(a) {
        return a.Y
    }
    h = Ye.prototype;
    h.w = function() {
        return this.Oa.w().j()
    };
    h.kb = function(a) {
        var b = Yb(this.Oa);
        return b && (He(this.Y.n) || !a.e() && !b.T(K(a)).e()) ? b.S(a) : null
    };
    h.e = function() {
        return 0 === this.$a.length
    };
    h.Tb = function(a) {
        this.$a.push(a)
    };
    h.nb = function(a, b) {
        var c = [];
        if (b) {
            O(null == a, "A cancel should cancel all event registrations.");
            var d = this.Y.path;
            Ma(this.$a, function(a) {
                (a = a.lf(b, d)) && c.push(a)
            })
        }
        if (a) {
            for (var e = [], f = 0; f < this.$a.length; ++f) {
                var g = this.$a[f];
                if (!g.matches(a)) e.push(g);
                else if (a.yf()) {
                    e = e.concat(this.$a.slice(f + 1));
                    break
                }
            }
            this.$a = e
        } else this.$a = [];
        return c
    };
    h.gb = function(a, b, c) {
        a.type === be && null !== a.source.Lb && (O(Yb(this.Oa), "We should always have a full cache before handling merges"), O(ke(this.Oa), "Missing event cache, even though we have a server cache"));
        var d = this.Oa;
        a = this.Nf.gb(d, a, b, c);
        b = this.Nf;
        c = a.me;
        O(c.Q.j().Mc(b.X.g), "Event snap not indexed");
        O(c.w().j().Mc(b.X.g), "Server snap not indexed");
        O(lc(a.me.w()) || !lc(d.w()), "Once a server snap is complete, it should never go back");
        this.Oa = a.me;
        return $e(this, a.og, a.me.Q.j(), null)
    };

    function af(a, b) {
        var c = a.Oa.Q,
            d = [];
        c.j().L() || c.j().R(R, function(a, b) {
            d.push(new J("child_added", b, a))
        });
        c.ga && d.push(hc(c.j()));
        return $e(a, d, c.j(), b)
    }

    function $e(a, b, c, d) {
        return Gd(a.ug, b, c, d ? [d] : a.$a)
    };

    function bf(a, b, c) {
        this.type = be;
        this.source = a;
        this.path = b;
        this.children = c
    }
    bf.prototype.$c = function(a) {
        if (this.path.e()) return a = this.children.subtree(new P(a)), a.e() ? null : a.value ? new Ac(this.source, M, a.value) : new bf(this.source, M, a);
        O(K(this.path) === a, "Can't get a merge for a child not on the path of the operation");
        return new bf(this.source, N(this.path), this.children)
    };
    bf.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    };

    function cf(a, b) {
        this.f = pd("p:rest:");
        this.G = a;
        this.Kb = b;
        this.Ca = null;
        this.ba = {}
    }

    function df(a, b) {
        if (p(b)) return "tag$" + b;
        O(Ie(a.n), "should have a tag if it's not a default query.");
        return a.path.toString()
    }
    h = cf.prototype;
    h.Cf = function(a, b, c, d) {
        var e = a.path.toString();
        this.f("Listen called for " + e + " " + a.wa());
        var f = df(a, c),
            g = {};
        this.ba[f] = g;
        a = Je(a.n);
        var k = this;
        ef(this, e + ".json", a, function(a, b) {
            var t = b;
            404 === a && (a = t = null);
            null === a && k.Kb(e, t, !1, c);
            z(k.ba, f) === g && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null)
        })
    };
    h.$f = function(a, b) {
        var c = df(a, b);
        delete this.ba[c]
    };
    h.O = function(a, b) {
        this.Ca = a;
        var c = Cd(a),
            d = c.data,
            c = c.Ec && c.Ec.exp;
        b && b("ok", {
            auth: d,
            expires: c
        })
    };
    h.je = function(a) {
        this.Ca = null;
        a("ok", null)
    };
    h.Qe = function() {};
    h.Gf = function() {};
    h.Md = function() {};
    h.put = function() {};
    h.Df = function() {};
    h.Ye = function() {};

    function ef(a, b, c, d) {
        c = c || {};
        c.format = "export";
        a.Ca && (c.auth = a.Ca);
        var e = (a.G.ob ? "https://" : "http://") + a.G.host + b + "?" + Ib(c);
        a.f("Sending REST request for " + e);
        var f = new XMLHttpRequest;
        f.onreadystatechange = function() {
            if (d && 4 === f.readyState) {
                a.f("REST Response for " + e + " received. status:", f.status, "response:", f.responseText);
                var b = null;
                if (200 <= f.status && 300 > f.status) {
                    try {
                        b = Rb(f.responseText)
                    } catch (c) {
                        S("Failed to parse JSON response for " + e + ": " + f.responseText)
                    }
                    d(null, b)
                } else 401 !== f.status && 404 !== f.status && S("Got unsuccessful REST response for " + e + " Status: " + f.status), d(f.status);
                d = null
            }
        };
        f.open("GET", e, !0);
        f.send()
    };

    function ff(a) {
        O(da(a) && 0 < a.length, "Requires a non-empty array");
        this.fg = a;
        this.Rc = {}
    }
    ff.prototype.ie = function(a, b) {
        var c;
        c = this.Rc[a] || [];
        var d = c.length;
        if (0 < d) {
            for (var e = Array(d), f = 0; f < d; f++) e[f] = c[f];
            c = e
        } else c = [];
        for (d = 0; d < c.length; d++) c[d].Dc.apply(c[d].Qa, Array.prototype.slice.call(arguments, 1))
    };
    ff.prototype.Ib = function(a, b, c) {
        gf(this, a);
        this.Rc[a] = this.Rc[a] || [];
        this.Rc[a].push({
            Dc: b,
            Qa: c
        });
        (a = this.Ee(a)) && b.apply(c, a)
    };
    ff.prototype.mc = function(a, b, c) {
        gf(this, a);
        a = this.Rc[a] || [];
        for (var d = 0; d < a.length; d++)
            if (a[d].Dc === b && (!c || c === a[d].Qa)) {
                a.splice(d, 1);
                break
            }
    };

    function gf(a, b) {
        O(Ra(a.fg, function(a) {
            return a === b
        }), "Unknown event: " + b)
    };
    var hf = function() {
        var a = 0,
            b = [];
        return function(c) {
            var d = c === a;
            a = c;
            for (var e = Array(8), f = 7; 0 <= f; f--) e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
            O(0 === c, "Cannot push at time == 0");
            c = e.join("");
            if (d) {
                for (f = 11; 0 <= f && 63 === b[f]; f--) b[f] = 0;
                b[f]++
            } else
                for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
            for (f = 0; 12 > f; f++) c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
            O(20 === c.length, "nextPushId: Length should be 20.");
            return c
        }
    }();

    function jf() {
        ff.call(this, ["online"]);
        this.oc = !0;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function() {
                a.oc || (a.oc = !0, a.ie("online", !0))
            }, !1);
            window.addEventListener("offline", function() {
                a.oc && (a.oc = !1, a.ie("online", !1))
            }, !1)
        }
    }
    ka(jf, ff);
    jf.prototype.Ee = function(a) {
        O("online" === a, "Unknown event type: " + a);
        return [this.oc]
    };
    ba(jf);

    function kf() {
        ff.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.Sb = !0;
        if (b) {
            var c = this;
            document.addEventListener(b, function() {
                var b = !document[a];
                b !== c.Sb && (c.Sb = b, c.ie("visible", b))
            }, !1)
        }
    }
    ka(kf, ff);
    kf.prototype.Ee = function(a) {
        O("visible" === a, "Unknown event type: " + a);
        return [this.Sb]
    };
    ba(kf);

    function P(a, b) {
        if (1 == arguments.length) {
            this.u = a.split("/");
            for (var c = 0, d = 0; d < this.u.length; d++) 0 < this.u[d].length && (this.u[c] = this.u[d], c++);
            this.u.length = c;
            this.aa = 0
        } else this.u = a, this.aa = b
    }

    function lf(a, b) {
        var c = K(a);
        if (null === c) return b;
        if (c === K(b)) return lf(N(a), N(b));
        throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
    }

    function mf(a, b) {
        for (var c = a.slice(), d = b.slice(), e = 0; e < c.length && e < d.length; e++) {
            var f = yc(c[e], d[e]);
            if (0 !== f) return f
        }
        return c.length === d.length ? 0 : c.length < d.length ? -1 : 1
    }

    function K(a) {
        return a.aa >= a.u.length ? null : a.u[a.aa]
    }

    function le(a) {
        return a.u.length - a.aa
    }

    function N(a) {
        var b = a.aa;
        b < a.u.length && b++;
        return new P(a.u, b)
    }

    function me(a) {
        return a.aa < a.u.length ? a.u[a.u.length - 1] : null
    }
    h = P.prototype;
    h.toString = function() {
        for (var a = "", b = this.aa; b < this.u.length; b++) "" !== this.u[b] && (a += "/" + this.u[b]);
        return a || "/"
    };
    h.slice = function(a) {
        return this.u.slice(this.aa + (a || 0))
    };
    h.parent = function() {
        if (this.aa >= this.u.length) return null;
        for (var a = [], b = this.aa; b < this.u.length - 1; b++) a.push(this.u[b]);
        return new P(a, 0)
    };
    h.o = function(a) {
        for (var b = [], c = this.aa; c < this.u.length; c++) b.push(this.u[c]);
        if (a instanceof P)
            for (c = a.aa; c < a.u.length; c++) b.push(a.u[c]);
        else
            for (a = a.split("/"), c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c]);
        return new P(b, 0)
    };
    h.e = function() {
        return this.aa >= this.u.length
    };
    h.ea = function(a) {
        if (le(this) !== le(a)) return !1;
        for (var b = this.aa, c = a.aa; b <= this.u.length; b++, c++)
            if (this.u[b] !== a.u[c]) return !1;
        return !0
    };
    h.contains = function(a) {
        var b = this.aa,
            c = a.aa;
        if (le(this) > le(a)) return !1;
        for (; b < this.u.length;) {
            if (this.u[b] !== a.u[c]) return !1;
            ++b;
            ++c
        }
        return !0
    };
    var M = new P("");

    function nf(a, b) {
        this.Ua = a.slice();
        this.Ka = Math.max(1, this.Ua.length);
        this.pf = b;
        for (var c = 0; c < this.Ua.length; c++) this.Ka += Pb(this.Ua[c]); of (this)
    }
    nf.prototype.push = function(a) {
        0 < this.Ua.length && (this.Ka += 1);
        this.Ua.push(a);
        this.Ka += Pb(a); of (this)
    };
    nf.prototype.pop = function() {
        var a = this.Ua.pop();
        this.Ka -= Pb(a);
        0 < this.Ua.length && --this.Ka
    };

    function of (a) {
        if (768 < a.Ka) throw Error(a.pf + "has a key path longer than 768 bytes (" + a.Ka + ").");
        if (32 < a.Ua.length) throw Error(a.pf + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + pf(a));
    }

    function pf(a) {
        return 0 == a.Ua.length ? "" : "in property '" + a.Ua.join(".") + "'"
    };

    function qf(a, b) {
        this.value = a;
        this.children = b || rf
    }
    var rf = new Ec(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1
    });

    function sf(a) {
        var b = qe;
        v(a, function(a, d) {
            b = b.set(new P(d), a)
        });
        return b
    }
    h = qf.prototype;
    h.e = function() {
        return null === this.value && this.children.e()
    };

    function tf(a, b, c) {
        if (null != a.value && c(a.value)) return {
            path: M,
            value: a.value
        };
        if (b.e()) return null;
        var d = K(b);
        a = a.children.get(d);
        return null !== a ? (b = tf(a, N(b), c), null != b ? {
            path: (new P(d)).o(b.path),
            value: b.value
        } : null) : null
    }

    function uf(a, b) {
        return tf(a, b, function() {
            return !0
        })
    }
    h.subtree = function(a) {
        if (a.e()) return this;
        var b = this.children.get(K(a));
        return null !== b ? b.subtree(N(a)) : qe
    };
    h.set = function(a, b) {
        if (a.e()) return new qf(b, this.children);
        var c = K(a),
            d = (this.children.get(c) || qe).set(N(a), b),
            c = this.children.Sa(c, d);
        return new qf(this.value, c)
    };
    h.remove = function(a) {
        if (a.e()) return this.children.e() ? qe : new qf(null, this.children);
        var b = K(a),
            c = this.children.get(b);
        return c ? (a = c.remove(N(a)), b = a.e() ? this.children.remove(b) : this.children.Sa(b, a), null === this.value && b.e() ? qe : new qf(this.value, b)) : this
    };
    h.get = function(a) {
        if (a.e()) return this.value;
        var b = this.children.get(K(a));
        return b ? b.get(N(a)) : null
    };

    function pe(a, b, c) {
        if (b.e()) return c;
        var d = K(b);
        b = pe(a.children.get(d) || qe, N(b), c);
        d = b.e() ? a.children.remove(d) : a.children.Sa(d, b);
        return new qf(a.value, d)
    }

    function vf(a, b) {
        return wf(a, M, b)
    }

    function wf(a, b, c) {
        var d = {};
        a.children.ka(function(a, f) {
            d[a] = wf(f, b.o(a), c)
        });
        return c(b, a.value, d)
    }

    function xf(a, b, c) {
        return yf(a, b, M, c)
    }

    function yf(a, b, c, d) {
        var e = a.value ? d(c, a.value) : !1;
        if (e) return e;
        if (b.e()) return null;
        e = K(b);
        return (a = a.children.get(e)) ? yf(a, N(b), c.o(e), d) : null
    }

    function zf(a, b, c) {
        Af(a, b, M, c)
    }

    function Af(a, b, c, d) {
        if (b.e()) return a;
        a.value && d(c, a.value);
        var e = K(b);
        return (a = a.children.get(e)) ? Af(a, N(b), c.o(e), d) : qe
    }

    function ne(a, b) {
        Bf(a, M, b)
    }

    function Bf(a, b, c) {
        a.children.ka(function(a, e) {
            Bf(e, b.o(a), c)
        });
        a.value && c(b, a.value)
    }

    function Cf(a, b) {
        a.children.ka(function(a, d) {
            d.value && b(a, d.value)
        })
    }
    var qe = new qf(null);
    qf.prototype.toString = function() {
        var a = {};
        ne(this, function(b, c) {
            a[b.toString()] = c.toString()
        });
        return G(a)
    };

    function Df(a, b, c) {
        this.type = ee;
        this.source = Ef;
        this.path = a;
        this.Ub = b;
        this.Yd = c
    }
    Df.prototype.$c = function(a) {
        if (this.path.e()) {
            if (null != this.Ub.value) return O(this.Ub.children.e(), "affectedTree should not have overlapping affected paths."), this;
            a = this.Ub.subtree(new P(a));
            return new Df(M, a, this.Yd)
        }
        O(K(this.path) === a, "operationForChild called for unrelated child.");
        return new Df(N(this.path), this.Ub, this.Yd)
    };
    Df.prototype.toString = function() {
        return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Yd + " affectedTree=" + this.Ub + ")"
    };
    var Bc = 0,
        be = 1,
        ee = 2,
        Dc = 3;

    function Ff(a, b, c, d) {
        this.Ae = a;
        this.tf = b;
        this.Lb = c;
        this.ef = d;
        O(!d || b, "Tagged queries must be from server.")
    }
    var Ef = new Ff(!0, !1, null, !1),
        Gf = new Ff(!1, !0, null, !1);
    Ff.prototype.toString = function() {
        return this.Ae ? "user" : this.ef ? "server(queryID=" + this.Lb + ")" : "server"
    };

    function Hf(a) {
        this.Z = a
    }
    var If = new Hf(new qf(null));

    function Jf(a, b, c) {
        if (b.e()) return new Hf(new qf(c));
        var d = uf(a.Z, b);
        if (null != d) {
            var e = d.path,
                d = d.value;
            b = lf(e, b);
            d = d.H(b, c);
            return new Hf(a.Z.set(e, d))
        }
        a = pe(a.Z, b, new qf(c));
        return new Hf(a)
    }

    function Kf(a, b, c) {
        var d = a;
        Fb(c, function(a, c) {
            d = Jf(d, b.o(a), c)
        });
        return d
    }
    Hf.prototype.Ud = function(a) {
        if (a.e()) return If;
        a = pe(this.Z, a, qe);
        return new Hf(a)
    };

    function Lf(a, b) {
        var c = uf(a.Z, b);
        return null != c ? a.Z.get(c.path).S(lf(c.path, b)) : null
    }

    function Mf(a) {
        var b = [],
            c = a.Z.value;
        null != c ? c.L() || c.R(R, function(a, c) {
            b.push(new L(a, c))
        }) : a.Z.children.ka(function(a, c) {
            null != c.value && b.push(new L(a, c.value))
        });
        return b
    }

    function Nf(a, b) {
        if (b.e()) return a;
        var c = Lf(a, b);
        return null != c ? new Hf(new qf(c)) : new Hf(a.Z.subtree(b))
    }
    Hf.prototype.e = function() {
        return this.Z.e()
    };
    Hf.prototype.apply = function(a) {
        return Of(M, this.Z, a)
    };

    function Of(a, b, c) {
        if (null != b.value) return c.H(a, b.value);
        var d = null;
        b.children.ka(function(b, f) {
            ".priority" === b ? (O(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = Of(a.o(b), f, c)
        });
        c.S(a).e() || null === d || (c = c.H(a.o(".priority"), d));
        return c
    };

    function Pf() {
        this.V = If;
        this.pa = [];
        this.Pc = -1
    }

    function Qf(a, b) {
        for (var c = 0; c < a.pa.length; c++) {
            var d = a.pa[c];
            if (d.md === b) return d
        }
        return null
    }
    h = Pf.prototype;
    h.Ud = function(a) {
        var b = Sa(this.pa, function(b) {
            return b.md === a
        });
        O(0 <= b, "removeWrite called with nonexistent writeId.");
        var c = this.pa[b];
        this.pa.splice(b, 1);
        for (var d = c.visible, e = !1, f = this.pa.length - 1; d && 0 <= f;) {
            var g = this.pa[f];
            g.visible && (f >= b && Rf(g, c.path) ? d = !1 : c.path.contains(g.path) && (e = !0));
            f--
        }
        if (d) {
            if (e) this.V = Sf(this.pa, Tf, M), this.Pc = 0 < this.pa.length ? this.pa[this.pa.length - 1].md : -1;
            else if (c.Ja) this.V = this.V.Ud(c.path);
            else {
                var k = this;
                v(c.children, function(a, b) {
                    k.V = k.V.Ud(c.path.o(b))
                })
            }
            return !0
        }
        return !1
    };
    h.Aa = function(a, b, c, d) {
        if (c || d) {
            var e = Nf(this.V, a);
            return !d && e.e() ? b : d || null != b || null != Lf(e, M) ? (e = Sf(this.pa, function(b) {
                return (b.visible || d) && (!c || !(0 <= La(c, b.md))) && (b.path.contains(a) || a.contains(b.path))
            }, a), b = b || H, e.apply(b)) : null
        }
        e = Lf(this.V, a);
        if (null != e) return e;
        e = Nf(this.V, a);
        return e.e() ? b : null != b || null != Lf(e, M) ? (b = b || H, e.apply(b)) : null
    };
    h.Cc = function(a, b) {
        var c = H,
            d = Lf(this.V, a);
        if (d) d.L() || d.R(R, function(a, b) {
            c = c.W(a, b)
        });
        else if (b) {
            var e = Nf(this.V, a);
            b.R(R, function(a, b) {
                var d = Nf(e, new P(a)).apply(b);
                c = c.W(a, d)
            });
            Ma(Mf(e), function(a) {
                c = c.W(a.name, a.U)
            })
        } else e = Nf(this.V, a), Ma(Mf(e), function(a) {
            c = c.W(a.name, a.U)
        });
        return c
    };
    h.nd = function(a, b, c, d) {
        O(c || d, "Either existingEventSnap or existingServerSnap must exist");
        a = a.o(b);
        if (null != Lf(this.V, a)) return null;
        a = Nf(this.V, a);
        return a.e() ? d.S(b) : a.apply(d.S(b))
    };
    h.Bc = function(a, b, c) {
        a = a.o(b);
        var d = Lf(this.V, a);
        return null != d ? d : Wb(c, b) ? Nf(this.V, a).apply(c.j().T(b)) : null
    };
    h.xc = function(a) {
        return Lf(this.V, a)
    };
    h.qe = function(a, b, c, d, e, f) {
        var g;
        a = Nf(this.V, a);
        g = Lf(a, M);
        if (null == g)
            if (null != b) g = a.apply(b);
            else return [];
        g = g.pb(f);
        if (g.e() || g.L()) return [];
        b = [];
        a = Vd(f);
        e = e ? g.dc(c, f) : g.bc(c, f);
        for (f = Ic(e); f && b.length < d;) 0 !== a(f, c) && b.push(f), f = Ic(e);
        return b
    };

    function Rf(a, b) {
        return a.Ja ? a.path.contains(b) : !!ta(a.children, function(c, d) {
            return a.path.o(d).contains(b)
        })
    }

    function Tf(a) {
        return a.visible
    }

    function Sf(a, b, c) {
        for (var d = If, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (b(f)) {
                var g = f.path;
                if (f.Ja) c.contains(g) ? (g = lf(c, g), d = Jf(d, g, f.Ja)) : g.contains(c) && (g = lf(g, c), d = Jf(d, M, f.Ja.S(g)));
                else if (f.children)
                    if (c.contains(g)) g = lf(c, g), d = Kf(d, g, f.children);
                    else {
                        if (g.contains(c))
                            if (g = lf(g, c), g.e()) d = Kf(d, M, f.children);
                            else if (f = z(f.children, K(g))) f = f.S(N(g)), d = Jf(d, M, f)
                    }
                else throw jd("WriteRecord should have .snap or .children");
            }
        }
        return d
    }

    function Uf(a, b) {
        this.Qb = a;
        this.Z = b
    }
    h = Uf.prototype;
    h.Aa = function(a, b, c) {
        return this.Z.Aa(this.Qb, a, b, c)
    };
    h.Cc = function(a) {
        return this.Z.Cc(this.Qb, a)
    };
    h.nd = function(a, b, c) {
        return this.Z.nd(this.Qb, a, b, c)
    };
    h.xc = function(a) {
        return this.Z.xc(this.Qb.o(a))
    };
    h.qe = function(a, b, c, d, e) {
        return this.Z.qe(this.Qb, a, b, c, d, e)
    };
    h.Bc = function(a, b) {
        return this.Z.Bc(this.Qb, a, b)
    };
    h.o = function(a) {
        return new Uf(this.Qb.o(a), this.Z)
    };

    function Vf() {
        this.children = {};
        this.pd = 0;
        this.value = null
    }

    function Wf(a, b, c) {
        this.Jd = a ? a : "";
        this.Ha = b ? b : null;
        this.A = c ? c : new Vf
    }

    function Xf(a, b) {
        for (var c = b instanceof P ? b : new P(b), d = a, e; null !== (e = K(c));) d = new Wf(e, d, z(d.A.children, e) || new Vf), c = N(c);
        return d
    }
    h = Wf.prototype;
    h.Ea = function() {
        return this.A.value
    };

    function Yf(a, b) {
        O("undefined" !== typeof b, "Cannot set value to undefined");
        a.A.value = b;
        Zf(a)
    }
    h.clear = function() {
        this.A.value = null;
        this.A.children = {};
        this.A.pd = 0;
        Zf(this)
    };
    h.zd = function() {
        return 0 < this.A.pd
    };
    h.e = function() {
        return null === this.Ea() && !this.zd()
    };
    h.R = function(a) {
        var b = this;
        v(this.A.children, function(c, d) {
            a(new Wf(d, b, c))
        })
    };

    function $f(a, b, c, d) {
        c && !d && b(a);
        a.R(function(a) {
            $f(a, b, !0, d)
        });
        c && d && b(a)
    }

    function ag(a, b) {
        for (var c = a.parent(); null !== c && !b(c);) c = c.parent()
    }
    h.path = function() {
        return new P(null === this.Ha ? this.Jd : this.Ha.path() + "/" + this.Jd)
    };
    h.name = function() {
        return this.Jd
    };
    h.parent = function() {
        return this.Ha
    };

    function Zf(a) {
        if (null !== a.Ha) {
            var b = a.Ha,
                c = a.Jd,
                d = a.e(),
                e = y(b.A.children, c);
            d && e ? (delete b.A.children[c], b.A.pd--, Zf(b)) : d || e || (b.A.children[c] = a.A, b.A.pd++, Zf(b))
        }
    };
    var bg = /[\[\].#$\/\u0000-\u001F\u007F]/,
        cg = /[\[\].#$\u0000-\u001F\u007F]/,
        dg = /^[a-zA-Z][a-zA-Z._\-+]+$/;

    function eg(a) {
        return q(a) && 0 !== a.length && !bg.test(a)
    }

    function fg(a) {
        return null === a || q(a) || fa(a) && !td(a) || ga(a) && y(a, ".sv")
    }

    function gg(a, b, c, d) {
        d && !p(b) || hg(E(a, 1, d), b, c)
    }

    function hg(a, b, c) {
        c instanceof P && (c = new nf(c, a));
        if (!p(b)) throw Error(a + "contains undefined " + pf(c));
        if (r(b)) throw Error(a + "contains a function " + pf(c) + " with contents: " + b.toString());
        if (td(b)) throw Error(a + "contains " + b.toString() + " " + pf(c));
        if (q(b) && b.length > 10485760 / 3 && 10485760 < Pb(b)) throw Error(a + "contains a string greater than 10485760 utf8 bytes " + pf(c) + " ('" + b.substring(0, 50) + "...')");
        if (ga(b)) {
            var d = !1,
                e = !1;
            Fb(b, function(b, g) {
                if (".value" === b) d = !0;
                else if (".priority" !== b && ".sv" !== b && (e = !0, !eg(b))) throw Error(a + " contains an invalid key (" + b + ") " + pf(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                c.push(b);
                hg(a, g, c);
                c.pop()
            });
            if (d && e) throw Error(a + ' contains ".value" child ' + pf(c) + " in addition to actual children.");
        }
    }

    function ig(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            for (var e = d.slice(), f = 0; f < e.length; f++)
                if ((".priority" !== e[f] || f !== e.length - 1) && !eg(e[f])) throw Error(a + "contains an invalid key (" + e[f] + ") in path " + d.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
        b.sort(mf);
        e = null;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            if (null !== e && e.contains(d)) throw Error(a + "contains a path " + e.toString() + " that is ancestor of another path " + d.toString());
            e = d
        }
    }

    function jg(a, b, c) {
        var d = E(a, 1, !1);
        if (!ga(b) || da(b)) throw Error(d + " must be an object containing the children to replace.");
        var e = [];
        Fb(b, function(a, b) {
            var k = new P(a);
            hg(d, b, c.o(k));
            if (".priority" === me(k) && !fg(b)) throw Error(d + "contains an invalid value for '" + k.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
            e.push(k)
        });
        ig(d, e)
    }

    function kg(a, b, c) {
        if (td(c)) throw Error(E(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!fg(c)) throw Error(E(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
    }

    function lg(a, b, c) {
        if (!c || p(b)) switch (b) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                throw Error(E(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
    }

    function mg(a, b) {
        if (p(b) && !eg(b)) throw Error(E(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }

    function ng(a, b) {
        if (!q(b) || 0 === b.length || cg.test(b)) throw Error(E(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }

    function og(a, b) {
        if (".info" === K(b)) throw Error(a + " failed: Can't modify data under /.info/");
    }

    function pg(a, b) {
        if (!q(b)) throw Error(E(a, 1, !1) + "must be a valid credential (a string).");
    }

    function qg(a, b, c) {
        if (!q(c)) throw Error(E(a, b, !1) + "must be a valid string.");
    }

    function rg(a, b) {
        qg(a, 1, b);
        if (!dg.test(b)) throw Error(E(a, 1, !1) + "'" + b + "' is not a valid authentication provider.");
    }

    function sg(a, b, c, d) {
        if (!d || p(c))
            if (!ga(c) || null === c) throw Error(E(a, b, d) + "must be a valid object.");
    }

    function tg(a, b, c) {
        if (!ga(b) || !y(b, c)) throw Error(E(a, 1, !1) + 'must contain the key "' + c + '"');
        if (!q(z(b, c))) throw Error(E(a, 1, !1) + 'must contain the key "' + c + '" with type "string"');
    };

    function ug() {
        this.set = {}
    }
    h = ug.prototype;
    h.add = function(a, b) {
        this.set[a] = null !== b ? b : !0
    };
    h.contains = function(a) {
        return y(this.set, a)
    };
    h.get = function(a) {
        return this.contains(a) ? this.set[a] : void 0
    };
    h.remove = function(a) {
        delete this.set[a]
    };
    h.clear = function() {
        this.set = {}
    };
    h.e = function() {
        return va(this.set)
    };
    h.count = function() {
        return oa(this.set)
    };

    function vg(a, b) {
        v(a.set, function(a, d) {
            b(d, a)
        })
    }
    h.keys = function() {
        var a = [];
        v(this.set, function(b, c) {
            a.push(c)
        });
        return a
    };

    function Vc() {
        this.m = this.B = null
    }
    Vc.prototype.find = function(a) {
        if (null != this.B) return this.B.S(a);
        if (a.e() || null == this.m) return null;
        var b = K(a);
        a = N(a);
        return this.m.contains(b) ? this.m.get(b).find(a) : null
    };
    Vc.prototype.rc = function(a, b) {
        if (a.e()) this.B = b, this.m = null;
        else if (null !== this.B) this.B = this.B.H(a, b);
        else {
            null == this.m && (this.m = new ug);
            var c = K(a);
            this.m.contains(c) || this.m.add(c, new Vc);
            c = this.m.get(c);
            a = N(a);
            c.rc(a, b)
        }
    };

    function wg(a, b) {
        if (b.e()) return a.B = null, a.m = null, !0;
        if (null !== a.B) {
            if (a.B.L()) return !1;
            var c = a.B;
            a.B = null;
            c.R(R, function(b, c) {
                a.rc(new P(b), c)
            });
            return wg(a, b)
        }
        return null !== a.m ? (c = K(b), b = N(b), a.m.contains(c) && wg(a.m.get(c), b) && a.m.remove(c), a.m.e() ? (a.m = null, !0) : !1) : !0
    }

    function Wc(a, b, c) {
        null !== a.B ? c(b, a.B) : a.R(function(a, e) {
            var f = new P(b.toString() + "/" + a);
            Wc(e, f, c)
        })
    }
    Vc.prototype.R = function(a) {
        null !== this.m && vg(this.m, function(b, c) {
            a(b, c)
        })
    };
    var xg = "auth.firebase.com";

    function yg(a, b, c) {
        this.qd = a || {};
        this.he = b || {};
        this.fb = c || {};
        this.qd.remember || (this.qd.remember = "default")
    }
    var zg = ["remember", "redirectTo"];

    function Ag(a) {
        var b = {},
            c = {};
        Fb(a || {}, function(a, e) {
            0 <= La(zg, a) ? b[a] = e : c[a] = e
        });
        return new yg(b, {}, c)
    };

    function Bg(a, b) {
        this.Ue = ["session", a.Rd, a.lc].join(":");
        this.ee = b
    }
    Bg.prototype.set = function(a, b) {
        if (!b)
            if (this.ee.length) b = this.ee[0];
            else throw Error("fb.login.SessionManager : No storage options available!");
        b.set(this.Ue, a)
    };
    Bg.prototype.get = function() {
        var a = Oa(this.ee, u(this.Bg, this)),
            a = Na(a, function(a) {
                return null !== a
            });
        Va(a, function(a, c) {
            return Dd(c.token) - Dd(a.token)
        });
        return 0 < a.length ? a.shift() : null
    };
    Bg.prototype.Bg = function(a) {
        try {
            var b = a.get(this.Ue);
            if (b && b.token) return b
        } catch (c) {}
        return null
    };
    Bg.prototype.clear = function() {
        var a = this;
        Ma(this.ee, function(b) {
            b.remove(a.Ue)
        })
    };

    function Cg() {
        return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function Dg() {
        return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg())
    }

    function Eg() {
        return "undefined" !== typeof location && /^file:\//.test(location.href)
    }

    function Fg(a) {
        var b = Cg();
        if ("" === b) return !1;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            if ((b = b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < b.length) return parseFloat(b[1]) >= a
        } else if (-1 < b.indexOf("Trident") && (b = b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < b.length) return parseFloat(b[1]) >= a;
        return !1
    };

    function Gg() {
        var a = window.opener.frames,
            b;
        for (b = a.length - 1; 0 <= b; b--) try {
            if (a[b].location.protocol === window.location.protocol && a[b].location.host === window.location.host && "__winchan_relay_frame" === a[b].name) return a[b]
        } catch (c) {}
        return null
    }

    function Hg(a, b, c) {
        a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Ig(a, b, c) {
        a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function Jg(a) {
        /^https?:\/\//.test(a) || (a = window.location.href);
        var b = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);
        return b ? b[1] : a
    }

    function Kg(a) {
        var b = "";
        try {
            a = a.replace(/.*\?/, "");
            var c = Jb(a);
            c && y(c, "__firebase_request_key") && (b = z(c, "__firebase_request_key"))
        } catch (d) {}
        return b
    }

    function Lg() {
        try {
            var a = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, ""),
                a = a.replace(/\?$/, ""),
                a = a.replace(/^#+$/, "");
            document.location.hash = a
        } catch (b) {}
    }

    function Mg() {
        var a = sd(xg);
        return a.scheme + "://" + a.host + "/v2"
    }

    function Ng(a) {
        return Mg() + "/" + a + "/auth/channel"
    };

    function Og(a) {
        var b = this;
        this.hb = a;
        this.fe = "*";
        Fg(8) ? this.Uc = this.Cd = Gg() : (this.Uc = window.opener, this.Cd = window);
        if (!b.Uc) throw "Unable to find relay frame";
        Hg(this.Cd, "message", u(this.nc, this));
        Hg(this.Cd, "message", u(this.Ff, this));
        try {
            Pg(this, {
                a: "ready"
            })
        } catch (c) {
            Hg(this.Uc, "load", function() {
                Pg(b, {
                    a: "ready"
                })
            })
        }
        Hg(window, "unload", u(this.Ng, this))
    }

    function Pg(a, b) {
        b = G(b);
        Fg(8) ? a.Uc.doPost(b, a.fe) : a.Uc.postMessage(b, a.fe)
    }
    Og.prototype.nc = function(a) {
        var b = this,
            c;
        try {
            c = Rb(a.data)
        } catch (d) {}
        c && "request" === c.a && (Ig(window, "message", this.nc), this.fe = a.origin, this.hb && setTimeout(function() {
            b.hb(b.fe, c.d, function(a, c) {
                b.mg = !c;
                b.hb = void 0;
                Pg(b, {
                    a: "response",
                    d: a,
                    forceKeepWindowOpen: c
                })
            })
        }, 0))
    };
    Og.prototype.Ng = function() {
        try {
            Ig(this.Cd, "message", this.Ff)
        } catch (a) {}
        this.hb && (Pg(this, {
            a: "error",
            d: "unknown closed window"
        }), this.hb = void 0);
        try {
            window.close()
        } catch (b) {}
    };
    Og.prototype.Ff = function(a) {
        if (this.mg && "die" === a.data) try {
            window.close()
        } catch (b) {}
    };

    function Qg(a) {
        this.tc = Fa() + Fa() + Fa();
        this.Kf = a
    }
    Qg.prototype.open = function(a, b) {
        cd.set("redirect_request_id", this.tc);
        cd.set("redirect_request_id", this.tc);
        b.requestId = this.tc;
        b.redirectTo = b.redirectTo || window.location.href;
        a += (/\?/.test(a) ? "" : "?") + Ib(b);
        window.location = a
    };
    Qg.isAvailable = function() {
        return !Eg() && !Dg()
    };
    Qg.prototype.Fc = function() {
        return "redirect"
    };
    var Rg = {
        NETWORK_ERROR: "Unable to contact the Firebase server.",
        SERVER_ERROR: "An unknown server error occurred.",
        TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.",
        REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.",
        USER_CANCELLED: "The user cancelled authentication."
    };

    function Sg(a) {
        var b = Error(z(Rg, a), a);
        b.code = a;
        return b
    };

    function Tg(a) {
        var b;
        (b = !a.window_features) || (b = Cg(), b = -1 !== b.indexOf("Fennec/") || -1 !== b.indexOf("Firefox/") && -1 !== b.indexOf("Android"));
        b && (a.window_features = void 0);
        a.window_name || (a.window_name = "_blank");
        this.options = a
    }
    Tg.prototype.open = function(a, b, c) {
        function d(a) {
            g && (document.body.removeChild(g), g = void 0);
            t && (t = clearInterval(t));
            Ig(window, "message", e);
            Ig(window, "unload", d);
            if (l && !a) try {
                l.close()
            } catch (b) {
                k.postMessage("die", m)
            }
            l = k = void 0
        }

        function e(a) {
            if (a.origin === m) try {
                var b = Rb(a.data);
                "ready" === b.a ? k.postMessage(A, m) : "error" === b.a ? (d(!1), c && (c(b.d), c = null)) : "response" === b.a && (d(b.forceKeepWindowOpen), c && (c(null, b.d), c = null))
            } catch (e) {}
        }
        var f = Fg(8),
            g, k;
        if (!this.options.relay_url) return c(Error("invalid arguments: origin of url and relay_url must match"));
        var m = Jg(a);
        if (m !== Jg(this.options.relay_url)) c && setTimeout(function() {
            c(Error("invalid arguments: origin of url and relay_url must match"))
        }, 0);
        else {
            f && (g = document.createElement("iframe"), g.setAttribute("src", this.options.relay_url), g.style.display = "none", g.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(g), k = g.contentWindow);
            a += (/\?/.test(a) ? "" : "?") + Ib(b);
            var l = window.open(a, this.options.window_name, this.options.window_features);
            k || (k = l);
            var t = setInterval(function() {
                    l && l.closed && (d(!1), c && (c(Sg("USER_CANCELLED")), c = null))
                }, 500),
                A = G({
                    a: "request",
                    d: b
                });
            Hg(window, "unload", d);
            Hg(window, "message", e)
        }
    };
    Tg.isAvailable = function() {
        var a;
        if (a = "postMessage" in window && !Eg())(a = Dg() || "undefined" !== typeof navigator && (!!Cg().match(/Windows Phone/) || !!window.Windows && /^ms-appx:/.test(location.href))) || (a = Cg(), a = "undefined" !== typeof navigator && "undefined" !== typeof window && !!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i) || a.match(/CriOS/) || a.match(/Twitter for iPhone/) || a.match(/FBAN\/FBIOS/) || window.navigator.standalone)), a = !a;
        return a && !Cg().match(/PhantomJS/)
    };
    Tg.prototype.Fc = function() {
        return "popup"
    };

    function Ug(a) {
        a.method || (a.method = "GET");
        a.headers || (a.headers = {});
        a.headers.content_type || (a.headers.content_type = "application/json");
        a.headers.content_type = a.headers.content_type.toLowerCase();
        this.options = a
    }
    Ug.prototype.open = function(a, b, c) {
        function d() {
            c && (c(Sg("REQUEST_INTERRUPTED")), c = null)
        }
        var e = new XMLHttpRequest,
            f = this.options.method.toUpperCase(),
            g;
        Hg(window, "beforeunload", d);
        e.onreadystatechange = function() {
            if (c && 4 === e.readyState) {
                var a;
                if (200 <= e.status && 300 > e.status) {
                    try {
                        a = Rb(e.responseText)
                    } catch (b) {}
                    c(null, a)
                } else 500 <= e.status && 600 > e.status ? c(Sg("SERVER_ERROR")) : c(Sg("NETWORK_ERROR"));
                c = null;
                Ig(window, "beforeunload", d)
            }
        };
        if ("GET" === f) a += (/\?/.test(a) ? "" : "?") + Ib(b), g = null;
        else {
            var k = this.options.headers.content_type;
            "application/json" === k && (g = G(b));
            "application/x-www-form-urlencoded" === k && (g = Ib(b))
        }
        e.open(f, a, !0);
        a = {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json;text/plain"
        };
        ya(a, this.options.headers);
        for (var m in a) e.setRequestHeader(m, a[m]);
        e.send(g)
    };
    Ug.isAvailable = function() {
        var a;
        if (a = !!window.XMLHttpRequest) a = Cg(), a = !(a.match(/MSIE/) || a.match(/Trident/)) || Fg(10);
        return a
    };
    Ug.prototype.Fc = function() {
        return "json"
    };

    function Vg(a) {
        this.tc = Fa() + Fa() + Fa();
        this.Kf = a
    }
    Vg.prototype.open = function(a, b, c) {
        function d() {
            c && (c(Sg("USER_CANCELLED")), c = null)
        }
        var e = this,
            f = sd(xg),
            g;
        b.requestId = this.tc;
        b.redirectTo = f.scheme + "://" + f.host + "/blank/page.html";
        a += /\?/.test(a) ? "" : "?";
        a += Ib(b);
        (g = window.open(a, "_blank", "location=no")) && r(g.addEventListener) ? (g.addEventListener("loadstart", function(a) {
            var b;
            if (b = a && a.url) a: {
                try {
                    var l = document.createElement("a");
                    l.href = a.url;
                    b = l.host === f.host && "/blank/page.html" === l.pathname;
                    break a
                } catch (t) {}
                b = !1
            }
            b && (a = Kg(a.url), g.removeEventListener("exit", d), g.close(), a = new yg(null, null, {
                requestId: e.tc,
                requestKey: a
            }), e.Kf.requestWithCredential("/auth/session", a, c), c = null)
        }), g.addEventListener("exit", d)) : c(Sg("TRANSPORT_UNAVAILABLE"))
    };
    Vg.isAvailable = function() {
        return Dg()
    };
    Vg.prototype.Fc = function() {
        return "redirect"
    };

    function Wg(a) {
        a.callback_parameter || (a.callback_parameter = "callback");
        this.options = a;
        window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {}
    }
    Wg.prototype.open = function(a, b, c) {
        function d() {
            c && (c(Sg("REQUEST_INTERRUPTED")), c = null)
        }

        function e() {
            setTimeout(function() {
                window.__firebase_auth_jsonp[f] = void 0;
                va(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
                try {
                    var a = document.getElementById(f);
                    a && a.parentNode.removeChild(a)
                } catch (b) {}
            }, 1);
            Ig(window, "beforeunload", d)
        }
        var f = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
        b[this.options.callback_parameter] = "__firebase_auth_jsonp." + f;
        a += (/\?/.test(a) ? "" : "?") + Ib(b);
        Hg(window, "beforeunload", d);
        window.__firebase_auth_jsonp[f] = function(a) {
            c && (c(null, a), c = null);
            e()
        };
        Xg(f, a, c)
    };

    function Xg(a, b, c) {
        setTimeout(function() {
            try {
                var d = document.createElement("script");
                d.type = "text/javascript";
                d.id = a;
                d.async = !0;
                d.src = b;
                d.onerror = function() {
                    var b = document.getElementById(a);
                    null !== b && b.parentNode.removeChild(b);
                    c && c(Sg("NETWORK_ERROR"))
                };
                var e = document.getElementsByTagName("head");
                (e && 0 != e.length ? e[0] : document.documentElement).appendChild(d)
            } catch (f) {
                c && c(Sg("NETWORK_ERROR"))
            }
        }, 0)
    }
    Wg.isAvailable = function() {
        return "undefined" !== typeof document && null != document.createElement
    };
    Wg.prototype.Fc = function() {
        return "json"
    };

    function Yg(a, b, c, d) {
        ff.call(this, ["auth_status"]);
        this.G = a;
        this.hf = b;
        this.ih = c;
        this.Pe = d;
        this.wc = new Bg(a, [bd, cd]);
        this.qb = null;
        this.We = !1;
        Zg(this)
    }
    ka(Yg, ff);
    h = Yg.prototype;
    h.Be = function() {
        return this.qb || null
    };

    function Zg(a) {
        cd.get("redirect_request_id") && $g(a);
        var b = a.wc.get();
        b && b.token ? (ah(a, b), a.hf(b.token, function(c, d) {
            bh(a, c, d, !1, b.token, b)
        }, function(b, d) {
            ch(a, "resumeSession()", b, d)
        })) : ah(a, null)
    }

    function dh(a, b, c, d, e, f) {
        "firebaseio-demo.com" === a.G.domain && S("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");
        a.hf(b, function(f, k) {
            bh(a, f, k, !0, b, c, d || {}, e)
        }, function(b, c) {
            ch(a, "auth()", b, c, f)
        })
    }

    function eh(a, b) {
        a.wc.clear();
        ah(a, null);
        a.ih(function(a, d) {
            if ("ok" === a) T(b, null);
            else {
                var e = (a || "error").toUpperCase(),
                    f = e;
                d && (f += ": " + d);
                f = Error(f);
                f.code = e;
                T(b, f)
            }
        })
    }

    function bh(a, b, c, d, e, f, g, k) {
        "ok" === b ? (d && (b = c.auth, f.auth = b, f.expires = c.expires, f.token = Ed(e) ? e : "", c = null, b && y(b, "uid") ? c = z(b, "uid") : y(f, "uid") && (c = z(f, "uid")), f.uid = c, c = "custom", b && y(b, "provider") ? c = z(b, "provider") : y(f, "provider") && (c = z(f, "provider")), f.provider = c, a.wc.clear(), Ed(e) && (g = g || {}, c = bd, "sessionOnly" === g.remember && (c = cd), "none" !== g.remember && a.wc.set(f, c)), ah(a, f)), T(k, null, f)) : (a.wc.clear(), ah(a, null), f = a = (b || "error").toUpperCase(), c && (f += ": " + c), f = Error(f), f.code = a, T(k, f))
    }

    function ch(a, b, c, d, e) {
        S(b + " was canceled: " + d);
        a.wc.clear();
        ah(a, null);
        a = Error(d);
        a.code = c.toUpperCase();
        T(e, a)
    }

    function fh(a, b, c, d, e) {
        gh(a);
        c = new yg(d || {}, {}, c || {});
        hh(a, [Ug, Wg], "/auth/" + b, c, e)
    }

    function ih(a, b, c, d) {
        gh(a);
        var e = [Tg, Vg];
        c = Ag(c);
        var f = 625;
        "anonymous" === b || "password" === b ? setTimeout(function() {
            T(d, Sg("TRANSPORT_UNAVAILABLE"))
        }, 0) : ("github" === b && (f = 1025), c.he.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=" + f + ",top=" + ("object" === typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" === typeof screen ? .5 * (screen.width - f) : 0), c.he.relay_url = Ng(a.G.lc), c.he.requestWithCredential = u(a.uc, a), hh(a, e, "/auth/" + b, c, d))
    }

    function $g(a) {
        var b = cd.get("redirect_request_id");
        if (b) {
            var c = cd.get("redirect_client_options");
            cd.remove("redirect_request_id");
            cd.remove("redirect_client_options");
            var d = [Ug, Wg],
                b = {
                    requestId: b,
                    requestKey: Kg(document.location.hash)
                },
                c = new yg(c, {}, b);
            a.We = !0;
            Lg();
            hh(a, d, "/auth/session", c, function() {
                this.We = !1
            }.bind(a))
        }
    }
    h.ve = function(a, b) {
        gh(this);
        var c = Ag(a);
        c.fb._method = "POST";
        this.uc("/users", c, function(a, c) {
            a ? T(b, a) : T(b, a, c)
        })
    };
    h.Xe = function(a, b) {
        var c = this;
        gh(this);
        var d = "/users/" + encodeURIComponent(a.email),
            e = Ag(a);
        e.fb._method = "DELETE";
        this.uc(d, e, function(a, d) {
            !a && d && d.uid && c.qb && c.qb.uid && c.qb.uid === d.uid && eh(c);
            T(b, a)
        })
    };
    h.se = function(a, b) {
        gh(this);
        var c = "/users/" + encodeURIComponent(a.email) + "/password",
            d = Ag(a);
        d.fb._method = "PUT";
        d.fb.password = a.newPassword;
        this.uc(c, d, function(a) {
            T(b, a)
        })
    };
    h.re = function(a, b) {
        gh(this);
        var c = "/users/" + encodeURIComponent(a.oldEmail) + "/email",
            d = Ag(a);
        d.fb._method = "PUT";
        d.fb.email = a.newEmail;
        d.fb.password = a.password;
        this.uc(c, d, function(a) {
            T(b, a)
        })
    };
    h.Ze = function(a, b) {
        gh(this);
        var c = "/users/" + encodeURIComponent(a.email) + "/password",
            d = Ag(a);
        d.fb._method = "POST";
        this.uc(c, d, function(a) {
            T(b, a)
        })
    };
    h.uc = function(a, b, c) {
        jh(this, [Ug, Wg], a, b, c)
    };

    function hh(a, b, c, d, e) {
        jh(a, b, c, d, function(b, c) {
            !b && c && c.token && c.uid ? dh(a, c.token, c, d.qd, function(a, b) {
                a ? T(e, a) : T(e, null, b)
            }) : T(e, b || Sg("UNKNOWN_ERROR"))
        })
    }

    function jh(a, b, c, d, e) {
        b = Na(b, function(a) {
            return "function" === typeof a.isAvailable && a.isAvailable()
        });
        0 === b.length ? setTimeout(function() {
            T(e, Sg("TRANSPORT_UNAVAILABLE"))
        }, 0) : (b = new(b.shift())(d.he), d = Gb(d.fb), d.v = "js-" + Eb, d.transport = b.Fc(), d.suppress_status_codes = !0, a = Mg() + "/" + a.G.lc + c, b.open(a, d, function(a, b) {
            if (a) T(e, a);
            else if (b && b.error) {
                var c = Error(b.error.message);
                c.code = b.error.code;
                c.details = b.error.details;
                T(e, c)
            } else T(e, null, b)
        }))
    }

    function ah(a, b) {
        var c = null !== a.qb || null !== b;
        a.qb = b;
        c && a.ie("auth_status", b);
        a.Pe(null !== b)
    }
    h.Ee = function(a) {
        O("auth_status" === a, 'initial event must be of type "auth_status"');
        return this.We ? null : [this.qb]
    };

    function gh(a) {
        var b = a.G;
        if ("firebaseio.com" !== b.domain && "firebaseio-demo.com" !== b.domain && "auth.firebase.com" === xg) throw Error("This custom Firebase server ('" + a.G.domain + "') does not support delegated login.");
    };
    var gd = "websocket",
        hd = "long_polling";

    function kh(a) {
        this.nc = a;
        this.Qd = [];
        this.Wb = 0;
        this.te = -1;
        this.Jb = null
    }

    function lh(a, b, c) {
        a.te = b;
        a.Jb = c;
        a.te < a.Wb && (a.Jb(), a.Jb = null)
    }

    function mh(a, b, c) {
        for (a.Qd[b] = c; a.Qd[a.Wb];) {
            var d = a.Qd[a.Wb];
            delete a.Qd[a.Wb];
            for (var e = 0; e < d.length; ++e)
                if (d[e]) {
                    var f = a;
                    gc(function() {
                        f.nc(d[e])
                    })
                } if (a.Wb === a.te) {
                a.Jb && (clearTimeout(a.Jb), a.Jb(), a.Jb = null);
                break
            }
            a.Wb++
        }
    };

    function nh(a, b, c, d) {
        this.ue = a;
        this.f = pd(a);
        this.rb = this.sb = 0;
        this.Xa = uc(b);
        this.Xf = c;
        this.Kc = !1;
        this.Fb = d;
        this.ld = function(a) {
            return fd(b, hd, a)
        }
    }
    var oh, ph;
    nh.prototype.open = function(a, b) {
        this.mf = 0;
        this.na = b;
        this.Ef = new kh(a);
        this.Db = !1;
        var c = this;
        this.ub = setTimeout(function() {
            c.f("Timed out trying to connect.");
            c.bb();
            c.ub = null
        }, Math.floor(3E4));
        ud(function() {
            if (!c.Db) {
                c.Wa = new qh(function(a, b, d, k, m) {
                    rh(c, arguments);
                    if (c.Wa)
                        if (c.ub && (clearTimeout(c.ub), c.ub = null), c.Kc = !0, "start" == a) c.id = b, c.Mf = d;
                        else if ("close" === a) b ? (c.Wa.$d = !1, lh(c.Ef, b, function() {
                        c.bb()
                    })) : c.bb();
                    else throw Error("Unrecognized command received: " + a);
                }, function(a, b) {
                    rh(c, arguments);
                    mh(c.Ef, a, b)
                }, function() {
                    c.bb()
                }, c.ld);
                var a = {
                    start: "t"
                };
                a.ser = Math.floor(1E8 * Math.random());
                c.Wa.ke && (a.cb = c.Wa.ke);
                a.v = "5";
                c.Xf && (a.s = c.Xf);
                c.Fb && (a.ls = c.Fb);
                "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
                a = c.ld(a);
                c.f("Connecting via long-poll to " + a);
                sh(c.Wa, a, function() {})
            }
        })
    };
    nh.prototype.start = function() {
        var a = this.Wa,
            b = this.Mf;
        a.Gg = this.id;
        a.Hg = b;
        for (a.oe = !0; th(a););
        a = this.id;
        b = this.Mf;
        this.kc = document.createElement("iframe");
        var c = {
            dframe: "t"
        };
        c.id = a;
        c.pw = b;
        this.kc.src = this.ld(c);
        this.kc.style.display = "none";
        document.body.appendChild(this.kc)
    };
    nh.isAvailable = function() {
        return oh || !ph && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.kh) && !0
    };
    h = nh.prototype;
    h.Hd = function() {};
    h.fd = function() {
        this.Db = !0;
        this.Wa && (this.Wa.close(), this.Wa = null);
        this.kc && (document.body.removeChild(this.kc), this.kc = null);
        this.ub && (clearTimeout(this.ub), this.ub = null)
    };
    h.bb = function() {
        this.Db || (this.f("Longpoll is closing itself"), this.fd(), this.na && (this.na(this.Kc), this.na = null))
    };
    h.close = function() {
        this.Db || (this.f("Longpoll is being closed."), this.fd())
    };
    h.send = function(a) {
        a = G(a);
        this.sb += a.length;
        rc(this.Xa, "bytes_sent", a.length);
        a = Ob(a);
        a = nb(a, !0);
        a = yd(a, 1840);
        for (var b = 0; b < a.length; b++) {
            var c = this.Wa;
            c.cd.push({
                Yg: this.mf,
                hh: a.length,
                of: a[b]
            });
            c.oe && th(c);
            this.mf++
        }
    };

    function rh(a, b) {
        var c = G(b).length;
        a.rb += c;
        rc(a.Xa, "bytes_received", c)
    }

    function qh(a, b, c, d) {
        this.ld = d;
        this.lb = c;
        this.Te = new ug;
        this.cd = [];
        this.we = Math.floor(1E8 * Math.random());
        this.$d = !0;
        this.ke = id();
        window["pLPCommand" + this.ke] = a;
        window["pRTLPCB" + this.ke] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || fc("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        a.contentDocument ? a.jb = a.contentDocument : a.contentWindow ? a.jb = a.contentWindow.document : a.document && (a.jb = a.document);
        this.Ga = a;
        a = "";
        this.Ga.src && "javascript:" === this.Ga.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";\x3c/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.Ga.jb.open(), this.Ga.jb.write(a), this.Ga.jb.close()
        } catch (f) {
            fc("frame writing exception"), f.stack && fc(f.stack), fc(f)
        }
    }
    qh.prototype.close = function() {
        this.oe = !1;
        if (this.Ga) {
            this.Ga.jb.body.innerHTML = "";
            var a = this;
            setTimeout(function() {
                null !== a.Ga && (document.body.removeChild(a.Ga), a.Ga = null)
            }, Math.floor(0))
        }
        var b = this.lb;
        b && (this.lb = null, b())
    };

    function th(a) {
        if (a.oe && a.$d && a.Te.count() < (0 < a.cd.length ? 2 : 1)) {
            a.we++;
            var b = {};
            b.id = a.Gg;
            b.pw = a.Hg;
            b.ser = a.we;
            for (var b = a.ld(b), c = "", d = 0; 0 < a.cd.length;)
                if (1870 >= a.cd[0].of.length + 30 + c.length) {
                    var e = a.cd.shift(),
                        c = c + "&seg" + d + "=" + e.Yg + "&ts" + d + "=" + e.hh + "&d" + d + "=" + e.of;
                    d++
                } else break;
            uh(a, b + c, a.we);
            return !0
        }
        return !1
    }

    function uh(a, b, c) {
        function d() {
            a.Te.remove(c);
            th(a)
        }
        a.Te.add(c, 1);
        var e = setTimeout(d, Math.floor(25E3));
        sh(a, b, function() {
            clearTimeout(e);
            d()
        })
    }

    function sh(a, b, c) {
        setTimeout(function() {
            try {
                if (a.$d) {
                    var d = a.Ga.jb.createElement("script");
                    d.type = "text/javascript";
                    d.async = !0;
                    d.src = b;
                    d.onload = d.onreadystatechange = function() {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), c())
                    };
                    d.onerror = function() {
                        fc("Long-poll script failed to load: " + b);
                        a.$d = !1;
                        a.close()
                    };
                    a.Ga.jb.body.appendChild(d)
                }
            } catch (e) {}
        }, Math.floor(1))
    };
    var vh = null;
    "undefined" !== typeof MozWebSocket ? vh = MozWebSocket : "undefined" !== typeof WebSocket && (vh = WebSocket);

    function wh(a, b, c, d) {
        this.ue = a;
        this.f = pd(this.ue);
        this.frames = this.Nc = null;
        this.rb = this.sb = this.ff = 0;
        this.Xa = uc(b);
        a = {
            v: "5"
        };
        "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
        c && (a.s = c);
        d && (a.ls = d);
        this.jf = fd(b, gd, a)
    }
    var xh;
    wh.prototype.open = function(a, b) {
        this.lb = b;
        this.Lg = a;
        this.f("Websocket connecting to " + this.jf);
        this.Kc = !1;
        bd.set("previous_websocket_failure", !0);
        try {
            this.La = new vh(this.jf)
        } catch (c) {
            this.f("Error instantiating WebSocket.");
            var d = c.message || c.data;
            d && this.f(d);
            this.bb();
            return
        }
        var e = this;
        this.La.onopen = function() {
            e.f("Websocket connected.");
            e.Kc = !0
        };
        this.La.onclose = function() {
            e.f("Websocket connection was disconnected.");
            e.La = null;
            e.bb()
        };
        this.La.onmessage = function(a) {
            if (null !== e.La)
                if (a = a.data, e.rb += a.length, rc(e.Xa, "bytes_received", a.length), yh(e), null !== e.frames) zh(e, a);
                else {
                    a: {
                        O(null === e.frames, "We already have a frame buffer");
                        if (6 >= a.length) {
                            var b = Number(a);
                            if (!isNaN(b)) {
                                e.ff = b;
                                e.frames = [];
                                a = null;
                                break a
                            }
                        }
                        e.ff = 1;e.frames = []
                    }
                    null !== a && zh(e, a)
                }
        };
        this.La.onerror = function(a) {
            e.f("WebSocket error.  Closing connection.");
            (a = a.message || a.data) && e.f(a);
            e.bb()
        }
    };
    wh.prototype.start = function() {};
    wh.isAvailable = function() {
        var a = !1;
        if ("undefined" !== typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
        }
        return !a && null !== vh && !xh
    };
    wh.responsesRequiredToBeHealthy = 2;
    wh.healthyTimeout = 3E4;
    h = wh.prototype;
    h.Hd = function() {
        bd.remove("previous_websocket_failure")
    };

    function zh(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.ff) {
            var c = a.frames.join("");
            a.frames = null;
            c = Rb(c);
            a.Lg(c)
        }
    }
    h.send = function(a) {
        yh(this);
        a = G(a);
        this.sb += a.length;
        rc(this.Xa, "bytes_sent", a.length);
        a = yd(a, 16384);
        1 < a.length && Ah(this, String(a.length));
        for (var b = 0; b < a.length; b++) Ah(this, a[b])
    };
    h.fd = function() {
        this.Db = !0;
        this.Nc && (clearInterval(this.Nc), this.Nc = null);
        this.La && (this.La.close(), this.La = null)
    };
    h.bb = function() {
        this.Db || (this.f("WebSocket is closing itself"), this.fd(), this.lb && (this.lb(this.Kc), this.lb = null))
    };
    h.close = function() {
        this.Db || (this.f("WebSocket is being closed"), this.fd())
    };

    function yh(a) {
        clearInterval(a.Nc);
        a.Nc = setInterval(function() {
            a.La && Ah(a, "0");
            yh(a)
        }, Math.floor(45E3))
    }

    function Ah(a, b) {
        try {
            a.La.send(b)
        } catch (c) {
            a.f("Exception thrown from WebSocket.send():", c.message || c.data, "Closing connection."), setTimeout(u(a.bb, a), 0)
        }
    };

    function Bh(a) {
        Ch(this, a)
    }
    var Dh = [nh, wh];

    function Ch(a, b) {
        var c = wh && wh.isAvailable(),
            d = c && !(bd.Af || !0 === bd.get("previous_websocket_failure"));
        b.jh && (c || S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
        if (d) a.jd = [wh];
        else {
            var e = a.jd = [];
            zd(Dh, function(a, b) {
                b && b.isAvailable() && e.push(b)
            })
        }
    }

    function Eh(a) {
        if (0 < a.jd.length) return a.jd[0];
        throw Error("No transports available");
    };

    function Fh(a, b, c, d, e, f, g) {
        this.id = a;
        this.f = pd("c:" + this.id + ":");
        this.nc = c;
        this.Zc = d;
        this.na = e;
        this.Re = f;
        this.G = b;
        this.Pd = [];
        this.kf = 0;
        this.Wf = new Bh(b);
        this.N = 0;
        this.Fb = g;
        this.f("Connection created");
        Gh(this)
    }

    function Gh(a) {
        var b = Eh(a.Wf);
        a.K = new b("c:" + a.id + ":" + a.kf++, a.G, void 0, a.Fb);
        a.Ve = b.responsesRequiredToBeHealthy || 0;
        var c = Hh(a, a.K),
            d = Ih(a, a.K);
        a.kd = a.K;
        a.ed = a.K;
        a.F = null;
        a.Eb = !1;
        setTimeout(function() {
            a.K && a.K.open(c, d)
        }, Math.floor(0));
        b = b.healthyTimeout || 0;
        0 < b && (a.Bd = setTimeout(function() {
            a.Bd = null;
            a.Eb || (a.K && 102400 < a.K.rb ? (a.f("Connection exceeded healthy timeout but has received " + a.K.rb + " bytes.  Marking connection healthy."), a.Eb = !0, a.K.Hd()) : a.K && 10240 < a.K.sb ? a.f("Connection exceeded healthy timeout but has sent " + a.K.sb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()))
        }, Math.floor(b)))
    }

    function Ih(a, b) {
        return function(c) {
            b === a.K ? (a.K = null, c || 0 !== a.N ? 1 === a.N && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.G.ab.substr(0, 2) && (bd.remove("host:" + a.G.host), a.G.ab = a.G.host)), a.close()) : b === a.F ? (a.f("Secondary connection lost."), c = a.F, a.F = null, a.kd !== c && a.ed !== c || a.close()) : a.f("closing an old connection")
        }
    }

    function Hh(a, b) {
        return function(c) {
            if (2 != a.N)
                if (b === a.ed) {
                    var d = wd("t", c);
                    c = wd("d", c);
                    if ("c" == d) {
                        if (d = wd("t", c), "d" in c)
                            if (c = c.d, "h" === d) {
                                var d = c.ts,
                                    e = c.v,
                                    f = c.h;
                                a.Uf = c.s;
                                ed(a.G, f);
                                0 == a.N && (a.K.start(), Jh(a, a.K, d), "5" !== e && S("Protocol version mismatch detected"), c = a.Wf, (c = 1 < c.jd.length ? c.jd[1] : null) && Kh(a, c))
                            } else if ("n" === d) {
                            a.f("recvd end transmission on primary");
                            a.ed = a.F;
                            for (c = 0; c < a.Pd.length; ++c) a.Ld(a.Pd[c]);
                            a.Pd = [];
                            Lh(a)
                        } else "s" === d ? (a.f("Connection shutdown command received. Shutting down..."), a.Re && (a.Re(c), a.Re = null), a.na = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), ed(a.G, c), 1 === a.N ? a.close() : (Mh(a), Gh(a))) : "e" === d ? qd("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), Nh(a), Oh(a)) : qd("Unknown control packet command: " + d)
                    } else "d" == d && a.Ld(c)
                } else if (b === a.F)
                if (d = wd("t", c), c = wd("d", c), "c" == d) "t" in c && (c = c.t, "a" === c ? Ph(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.F.close(), a.kd !== a.F && a.ed !== a.F || a.close()) : "o" === c && (a.f("got pong on secondary."), a.Tf--, Ph(a)));
                else if ("d" == d) a.Pd.push(c);
            else throw Error("Unknown protocol layer: " + d);
            else a.f("message on old connection")
        }
    }
    Fh.prototype.Ia = function(a) {
        Qh(this, {
            t: "d",
            d: a
        })
    };

    function Lh(a) {
        a.kd === a.F && a.ed === a.F && (a.f("cleaning up and promoting a connection: " + a.F.ue), a.K = a.F, a.F = null)
    }

    function Ph(a) {
        0 >= a.Tf ? (a.f("Secondary connection is healthy."), a.Eb = !0, a.F.Hd(), a.F.start(), a.f("sending client ack on secondary"), a.F.send({
            t: "c",
            d: {
                t: "a",
                d: {}
            }
        }), a.f("Ending transmission on primary"), a.K.send({
            t: "c",
            d: {
                t: "n",
                d: {}
            }
        }), a.kd = a.F, Lh(a)) : (a.f("sending ping on secondary."), a.F.send({
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }
    Fh.prototype.Ld = function(a) {
        Nh(this);
        this.nc(a)
    };

    function Nh(a) {
        a.Eb || (a.Ve--, 0 >= a.Ve && (a.f("Primary connection is healthy."), a.Eb = !0, a.K.Hd()))
    }

    function Kh(a, b) {
        a.F = new b("c:" + a.id + ":" + a.kf++, a.G, a.Uf);
        a.Tf = b.responsesRequiredToBeHealthy || 0;
        a.F.open(Hh(a, a.F), Ih(a, a.F));
        setTimeout(function() {
            a.F && (a.f("Timed out trying to upgrade."), a.F.close())
        }, Math.floor(6E4))
    }

    function Jh(a, b, c) {
        a.f("Realtime connection established.");
        a.K = b;
        a.N = 1;
        a.Zc && (a.Zc(c, a.Uf), a.Zc = null);
        0 === a.Ve ? (a.f("Primary connection is healthy."), a.Eb = !0) : setTimeout(function() {
            Oh(a)
        }, Math.floor(5E3))
    }

    function Oh(a) {
        a.Eb || 1 !== a.N || (a.f("sending ping on primary."), Qh(a, {
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }

    function Qh(a, b) {
        if (1 !== a.N) throw "Connection is not connected";
        a.kd.send(b)
    }
    Fh.prototype.close = function() {
        2 !== this.N && (this.f("Closing realtime connection."), this.N = 2, Mh(this), this.na && (this.na(), this.na = null))
    };

    function Mh(a) {
        a.f("Shutting down all connections");
        a.K && (a.K.close(), a.K = null);
        a.F && (a.F.close(), a.F = null);
        a.Bd && (clearTimeout(a.Bd), a.Bd = null)
    };

    function Rh(a, b, c, d) {
        this.id = Sh++;
        this.f = pd("p:" + this.id + ":");
        this.Bf = this.Ie = !1;
        this.ba = {};
        this.sa = [];
        this.ad = 0;
        this.Yc = [];
        this.qa = !1;
        this.eb = 1E3;
        this.Id = 3E5;
        this.Kb = b;
        this.Xc = c;
        this.Se = d;
        this.G = a;
        this.wb = this.Ca = this.Ma = this.Fb = this.$e = null;
        this.Sb = !1;
        this.Wd = {};
        this.Xg = 0;
        this.rf = !0;
        this.Oc = this.Ke = null;
        Th(this, 0);
        kf.yb().Ib("visible", this.Og, this); - 1 === a.host.indexOf("fblocal") && jf.yb().Ib("online", this.Mg, this)
    }
    var Sh = 0,
        Uh = 0;
    h = Rh.prototype;
    h.Ia = function(a, b, c) {
        var d = ++this.Xg;
        a = {
            r: d,
            a: a,
            b: b
        };
        this.f(G(a));
        O(this.qa, "sendRequest call when we're not connected not allowed.");
        this.Ma.Ia(a);
        c && (this.Wd[d] = c)
    };
    h.Cf = function(a, b, c, d) {
        var e = a.wa(),
            f = a.path.toString();
        this.f("Listen called for " + f + " " + e);
        this.ba[f] = this.ba[f] || {};
        O(Ie(a.n) || !He(a.n), "listen() called for non-default but complete query");
        O(!this.ba[f][e], "listen() called twice for same path/queryId.");
        a = {
            I: d,
            Ad: b,
            Ug: a,
            tag: c
        };
        this.ba[f][e] = a;
        this.qa && Vh(this, a)
    };

    function Vh(a, b) {
        var c = b.Ug,
            d = c.path.toString(),
            e = c.wa();
        a.f("Listen on " + d + " for " + e);
        var f = {
            p: d
        };
        b.tag && (f.q = Ge(c.n), f.t = b.tag);
        f.h = b.Ad();
        a.Ia("q", f, function(f) {
            var k = f.d,
                m = f.s;
            if (k && "object" === typeof k && y(k, "w")) {
                var l = z(k, "w");
                da(l) && 0 <= La(l, "no_index") && S("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.n.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance")
            }(a.ba[d] && a.ba[d][e]) === b && (a.f("listen response", f), "ok" !== m && Wh(a, d, e), b.I && b.I(m, k))
        })
    }
    h.O = function(a, b, c) {
        this.Ca = {
            rg: a,
            sf: !1,
            Dc: b,
            od: c
        };
        this.f("Authenticating using credential: " + a);
        Xh(this);
        (b = 40 == a.length) || (a = Cd(a).Ec, b = "object" === typeof a && !0 === z(a, "admin"));
        b && (this.f("Admin auth credential detected.  Reducing max reconnect time."), this.Id = 3E4)
    };
    h.je = function(a) {
        this.Ca = null;
        this.qa && this.Ia("unauth", {}, function(b) {
            a(b.s, b.d)
        })
    };

    function Xh(a) {
        var b = a.Ca;
        a.qa && b && a.Ia("auth", {
            cred: b.rg
        }, function(c) {
            var d = c.s;
            c = c.d || "error";
            "ok" !== d && a.Ca === b && (a.Ca = null);
            b.sf ? "ok" !== d && b.od && b.od(d, c) : (b.sf = !0, b.Dc && b.Dc(d, c))
        })
    }
    h.$f = function(a, b) {
        var c = a.path.toString(),
            d = a.wa();
        this.f("Unlisten called for " + c + " " + d);
        O(Ie(a.n) || !He(a.n), "unlisten() called for non-default but complete query");
        if (Wh(this, c, d) && this.qa) {
            var e = Ge(a.n);
            this.f("Unlisten on " + c + " for " + d);
            c = {
                p: c
            };
            b && (c.q = e, c.t = b);
            this.Ia("n", c)
        }
    };
    h.Qe = function(a, b, c) {
        this.qa ? Yh(this, "o", a, b, c) : this.Yc.push({
            bd: a,
            action: "o",
            data: b,
            I: c
        })
    };
    h.Gf = function(a, b, c) {
        this.qa ? Yh(this, "om", a, b, c) : this.Yc.push({
            bd: a,
            action: "om",
            data: b,
            I: c
        })
    };
    h.Md = function(a, b) {
        this.qa ? Yh(this, "oc", a, null, b) : this.Yc.push({
            bd: a,
            action: "oc",
            data: null,
            I: b
        })
    };

    function Yh(a, b, c, d, e) {
        c = {
            p: c,
            d: d
        };
        a.f("onDisconnect " + b, c);
        a.Ia(b, c, function(a) {
            e && setTimeout(function() {
                e(a.s, a.d)
            }, Math.floor(0))
        })
    }
    h.put = function(a, b, c, d) {
        Zh(this, "p", a, b, c, d)
    };
    h.Df = function(a, b, c, d) {
        Zh(this, "m", a, b, c, d)
    };

    function Zh(a, b, c, d, e, f) {
        d = {
            p: c,
            d: d
        };
        p(f) && (d.h = f);
        a.sa.push({
            action: b,
            Pf: d,
            I: e
        });
        a.ad++;
        b = a.sa.length - 1;
        a.qa ? $h(a, b) : a.f("Buffering put: " + c)
    }

    function $h(a, b) {
        var c = a.sa[b].action,
            d = a.sa[b].Pf,
            e = a.sa[b].I;
        a.sa[b].Vg = a.qa;
        a.Ia(c, d, function(d) {
            a.f(c + " response", d);
            delete a.sa[b];
            a.ad--;
            0 === a.ad && (a.sa = []);
            e && e(d.s, d.d)
        })
    }
    h.Ye = function(a) {
        this.qa && (a = {
            c: a
        }, this.f("reportStats", a), this.Ia("s", a, function(a) {
            "ok" !== a.s && this.f("reportStats", "Error sending stats: " + a.d)
        }))
    };
    h.Ld = function(a) {
        if ("r" in a) {
            this.f("from server: " + G(a));
            var b = a.r,
                c = this.Wd[b];
            c && (delete this.Wd[b], c(a.b))
        } else {
            if ("error" in a) throw "A server-side error has occurred: " + a.error;
            "a" in a && (b = a.a, c = a.b, this.f("handleServerMessage", b, c), "d" === b ? this.Kb(c.p, c.d, !1, c.t) : "m" === b ? this.Kb(c.p, c.d, !0, c.t) : "c" === b ? ai(this, c.p, c.q) : "ac" === b ? (a = c.s, b = c.d, c = this.Ca, this.Ca = null, c && c.od && c.od(a, b)) : "sd" === b ? this.$e ? this.$e(c) : "msg" in c && "undefined" !== typeof console && console.log("FIREBASE: " + c.msg.replace("\n", "\nFIREBASE: ")) : qd("Unrecognized action received from server: " + G(b) + "\nAre you using the latest client?"))
        }
    };
    h.Zc = function(a, b) {
        this.f("connection ready");
        this.qa = !0;
        this.Oc = (new Date).getTime();
        this.Se({
            serverTimeOffset: a - (new Date).getTime()
        });
        this.Fb = b;
        if (this.rf) {
            var c = {};
            c["sdk.js." + Eb.replace(/\./g, "-")] = 1;
            Dg() ? c["framework.cordova"] = 1 : "object" === typeof navigator && "ReactNative" === navigator.product && (c["framework.reactnative"] = 1);
            this.Ye(c)
        }
        bi(this);
        this.rf = !1;
        this.Xc(!0)
    };

    function Th(a, b) {
        O(!a.Ma, "Scheduling a connect when we're already connected/ing?");
        a.wb && clearTimeout(a.wb);
        a.wb = setTimeout(function() {
            a.wb = null;
            ci(a)
        }, Math.floor(b))
    }
    h.Og = function(a) {
        a && !this.Sb && this.eb === this.Id && (this.f("Window became visible.  Reducing delay."), this.eb = 1E3, this.Ma || Th(this, 0));
        this.Sb = a
    };
    h.Mg = function(a) {
        a ? (this.f("Browser went online."), this.eb = 1E3, this.Ma || Th(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Ma && this.Ma.close())
    };
    h.If = function() {
        this.f("data client disconnected");
        this.qa = !1;
        this.Ma = null;
        for (var a = 0; a < this.sa.length; a++) {
            var b = this.sa[a];
            b && "h" in b.Pf && b.Vg && (b.I && b.I("disconnect"), delete this.sa[a], this.ad--)
        }
        0 === this.ad && (this.sa = []);
        this.Wd = {};
        di(this) && (this.Sb ? this.Oc && (3E4 < (new Date).getTime() - this.Oc && (this.eb = 1E3), this.Oc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.eb = this.Id, this.Ke = (new Date).getTime()), a = Math.max(0, this.eb - ((new Date).getTime() - this.Ke)), a *= Math.random(), this.f("Trying to reconnect in " + a + "ms"), Th(this, a), this.eb = Math.min(this.Id, 1.3 * this.eb));
        this.Xc(!1)
    };

    function ci(a) {
        if (di(a)) {
            a.f("Making a connection attempt");
            a.Ke = (new Date).getTime();
            a.Oc = null;
            var b = u(a.Ld, a),
                c = u(a.Zc, a),
                d = u(a.If, a),
                e = a.id + ":" + Uh++;
            a.Ma = new Fh(e, a.G, b, c, d, function(b) {
                S(b + " (" + a.G.toString() + ")");
                a.Bf = !0
            }, a.Fb)
        }
    }
    h.Cb = function() {
        this.Ie = !0;
        this.Ma ? this.Ma.close() : (this.wb && (clearTimeout(this.wb), this.wb = null), this.qa && this.If())
    };
    h.vc = function() {
        this.Ie = !1;
        this.eb = 1E3;
        this.Ma || Th(this, 0)
    };

    function ai(a, b, c) {
        c = c ? Oa(c, function(a) {
            return xd(a)
        }).join("$") : "default";
        (a = Wh(a, b, c)) && a.I && a.I("permission_denied")
    }

    function Wh(a, b, c) {
        b = (new P(b)).toString();
        var d;
        p(a.ba[b]) ? (d = a.ba[b][c], delete a.ba[b][c], 0 === oa(a.ba[b]) && delete a.ba[b]) : d = void 0;
        return d
    }

    function bi(a) {
        Xh(a);
        v(a.ba, function(b) {
            v(b, function(b) {
                Vh(a, b)
            })
        });
        for (var b = 0; b < a.sa.length; b++) a.sa[b] && $h(a, b);
        for (; a.Yc.length;) b = a.Yc.shift(), Yh(a, b.action, b.bd, b.data, b.I)
    }

    function di(a) {
        var b;
        b = jf.yb().oc;
        return !a.Bf && !a.Ie && b
    };
    var U = {
        zg: function() {
            oh = xh = !0
        }
    };
    U.forceLongPolling = U.zg;
    U.Ag = function() {
        ph = !0
    };
    U.forceWebSockets = U.Ag;
    U.Eg = function() {
        return wh.isAvailable()
    };
    U.isWebSocketsAvailable = U.Eg;
    U.ah = function(a, b) {
        a.k.Va.$e = b
    };
    U.setSecurityDebugCallback = U.ah;
    U.bf = function(a, b) {
        a.k.bf(b)
    };
    U.stats = U.bf;
    U.cf = function(a, b) {
        a.k.cf(b)
    };
    U.statsIncrementCounter = U.cf;
    U.ud = function(a) {
        return a.k.ud
    };
    U.dataUpdateCount = U.ud;
    U.Dg = function(a, b) {
        a.k.He = b
    };
    U.interceptServerData = U.Dg;
    U.Kg = function(a) {
        new Og(a)
    };
    U.onPopupOpen = U.Kg;
    U.Zg = function(a) {
        xg = a
    };
    U.setAuthenticationServer = U.Zg;

    function ei(a, b) {
        this.committed = a;
        this.snapshot = b
    };

    function V(a, b) {
        this.dd = a;
        this.ta = b
    }
    V.prototype.cancel = function(a) {
        D("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        F("Firebase.onDisconnect().cancel", 1, a, !0);
        var b = new B;
        this.dd.Md(this.ta, C(b, a));
        return b.D
    };
    V.prototype.cancel = V.prototype.cancel;
    V.prototype.remove = function(a) {
        D("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        og("Firebase.onDisconnect().remove", this.ta);
        F("Firebase.onDisconnect().remove", 1, a, !0);
        var b = new B;
        fi(this.dd, this.ta, null, C(b, a));
        return b.D
    };
    V.prototype.remove = V.prototype.remove;
    V.prototype.set = function(a, b) {
        D("Firebase.onDisconnect().set", 1, 2, arguments.length);
        og("Firebase.onDisconnect().set", this.ta);
        gg("Firebase.onDisconnect().set", a, this.ta, !1);
        F("Firebase.onDisconnect().set", 2, b, !0);
        var c = new B;
        fi(this.dd, this.ta, a, C(c, b));
        return c.D
    };
    V.prototype.set = V.prototype.set;
    V.prototype.Ob = function(a, b, c) {
        D("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        og("Firebase.onDisconnect().setWithPriority", this.ta);
        gg("Firebase.onDisconnect().setWithPriority", a, this.ta, !1);
        kg("Firebase.onDisconnect().setWithPriority", 2, b);
        F("Firebase.onDisconnect().setWithPriority", 3, c, !0);
        var d = new B;
        gi(this.dd, this.ta, a, b, C(d, c));
        return d.D
    };
    V.prototype.setWithPriority = V.prototype.Ob;
    V.prototype.update = function(a, b) {
        D("Firebase.onDisconnect().update", 1, 2, arguments.length);
        og("Firebase.onDisconnect().update", this.ta);
        if (da(a)) {
            for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
            a = c;
            S("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        jg("Firebase.onDisconnect().update", a, this.ta);
        F("Firebase.onDisconnect().update", 2, b, !0);
        c = new B;
        hi(this.dd, this.ta, a, C(c, b));
        return c.D
    };
    V.prototype.update = V.prototype.update;

    function W(a, b, c) {
        this.A = a;
        this.Y = b;
        this.g = c
    }
    W.prototype.J = function() {
        D("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.A.J()
    };
    W.prototype.val = W.prototype.J;
    W.prototype.qf = function() {
        D("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.A.J(!0)
    };
    W.prototype.exportVal = W.prototype.qf;
    W.prototype.xg = function() {
        D("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
        return !this.A.e()
    };
    W.prototype.exists = W.prototype.xg;
    W.prototype.o = function(a) {
        D("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        fa(a) && (a = String(a));
        ng("Firebase.DataSnapshot.child", a);
        var b = new P(a),
            c = this.Y.o(b);
        return new W(this.A.S(b), c, R)
    };
    W.prototype.child = W.prototype.o;
    W.prototype.Fa = function(a) {
        D("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        ng("Firebase.DataSnapshot.hasChild", a);
        var b = new P(a);
        return !this.A.S(b).e()
    };
    W.prototype.hasChild = W.prototype.Fa;
    W.prototype.C = function() {
        D("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.A.C().J()
    };
    W.prototype.getPriority = W.prototype.C;
    W.prototype.forEach = function(a) {
        D("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        F("Firebase.DataSnapshot.forEach", 1, a, !1);
        if (this.A.L()) return !1;
        var b = this;
        return !!this.A.R(this.g, function(c, d) {
            return a(new W(d, b.Y.o(c), R))
        })
    };
    W.prototype.forEach = W.prototype.forEach;
    W.prototype.zd = function() {
        D("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.A.L() ? !1 : !this.A.e()
    };
    W.prototype.hasChildren = W.prototype.zd;
    W.prototype.name = function() {
        S("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");
        D("Firebase.DataSnapshot.name", 0, 0, arguments.length);
        return this.key()
    };
    W.prototype.name = W.prototype.name;
    W.prototype.key = function() {
        D("Firebase.DataSnapshot.key", 0, 0, arguments.length);
        return this.Y.key()
    };
    W.prototype.key = W.prototype.key;
    W.prototype.Hb = function() {
        D("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.A.Hb()
    };
    W.prototype.numChildren = W.prototype.Hb;
    W.prototype.Mb = function() {
        D("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.Y
    };
    W.prototype.ref = W.prototype.Mb;

    function ii(a, b, c) {
        this.Vb = a;
        this.tb = b;
        this.vb = c || null
    }
    h = ii.prototype;
    h.Qf = function(a) {
        return "value" === a
    };
    h.createEvent = function(a, b) {
        var c = b.n.g;
        return new jc("value", this, new W(a.Na, b.Mb(), c))
    };
    h.Zb = function(a) {
        var b = this.vb;
        if ("cancel" === a.De()) {
            O(this.tb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.tb;
            return function() {
                c.call(b, a.error)
            }
        }
        var d = this.Vb;
        return function() {
            d.call(b, a.be)
        }
    };
    h.lf = function(a, b) {
        return this.tb ? new kc(this, a, b) : null
    };
    h.matches = function(a) {
        return a instanceof ii ? a.Vb && this.Vb ? a.Vb === this.Vb && a.vb === this.vb : !0 : !1
    };
    h.yf = function() {
        return null !== this.Vb
    };

    function ji(a, b, c) {
        this.ja = a;
        this.tb = b;
        this.vb = c
    }
    h = ji.prototype;
    h.Qf = function(a) {
        a = "children_added" === a ? "child_added" : a;
        return ("children_removed" === a ? "child_removed" : a) in this.ja
    };
    h.lf = function(a, b) {
        return this.tb ? new kc(this, a, b) : null
    };
    h.createEvent = function(a, b) {
        O(null != a.Za, "Child events should have a childName.");
        var c = b.Mb().o(a.Za);
        return new jc(a.type, this, new W(a.Na, c, b.n.g), a.Td)
    };
    h.Zb = function(a) {
        var b = this.vb;
        if ("cancel" === a.De()) {
            O(this.tb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.tb;
            return function() {
                c.call(b, a.error)
            }
        }
        var d = this.ja[a.wd];
        return function() {
            d.call(b, a.be, a.Td)
        }
    };
    h.matches = function(a) {
        if (a instanceof ji) {
            if (!this.ja || !a.ja) return !0;
            if (this.vb === a.vb) {
                var b = oa(a.ja);
                if (b === oa(this.ja)) {
                    if (1 === b) {
                        var b = pa(a.ja),
                            c = pa(this.ja);
                        return c === b && (!a.ja[b] || !this.ja[c] || a.ja[b] === this.ja[c])
                    }
                    return na(this.ja, function(b, c) {
                        return a.ja[c] === b
                    })
                }
            }
        }
        return !1
    };
    h.yf = function() {
        return null !== this.ja
    };

    function ki() {
        this.za = {}
    }
    h = ki.prototype;
    h.e = function() {
        return va(this.za)
    };
    h.gb = function(a, b, c) {
        var d = a.source.Lb;
        if (null !== d) return d = z(this.za, d), O(null != d, "SyncTree gave us an op for an invalid query."), d.gb(a, b, c);
        var e = [];
        v(this.za, function(d) {
            e = e.concat(d.gb(a, b, c))
        });
        return e
    };
    h.Tb = function(a, b, c, d, e) {
        var f = a.wa(),
            g = z(this.za, f);
        if (!g) {
            var g = c.Aa(e ? d : null),
                k = !1;
            g ? k = !0 : (g = d instanceof fe ? c.Cc(d) : H, k = !1);
            g = new Ye(a, new je(new Xb(g, k, !1), new Xb(d, e, !1)));
            this.za[f] = g
        }
        g.Tb(b);
        return af(g, b)
    };
    h.nb = function(a, b, c) {
        var d = a.wa(),
            e = [],
            f = [],
            g = null != li(this);
        if ("default" === d) {
            var k = this;
            v(this.za, function(a, d) {
                f = f.concat(a.nb(b, c));
                a.e() && (delete k.za[d], He(a.Y.n) || e.push(a.Y))
            })
        } else {
            var m = z(this.za, d);
            m && (f = f.concat(m.nb(b, c)), m.e() && (delete this.za[d], He(m.Y.n) || e.push(m.Y)))
        }
        g && null == li(this) && e.push(new X(a.k, a.path));
        return {
            Wg: e,
            vg: f
        }
    };

    function mi(a) {
        return Na(qa(a.za), function(a) {
            return !He(a.Y.n)
        })
    }
    h.kb = function(a) {
        var b = null;
        v(this.za, function(c) {
            b = b || c.kb(a)
        });
        return b
    };

    function ni(a, b) {
        if (He(b.n)) return li(a);
        var c = b.wa();
        return z(a.za, c)
    }

    function li(a) {
        return ua(a.za, function(a) {
            return He(a.Y.n)
        }) || null
    };

    function oi(a) {
        this.va = qe;
        this.mb = new Pf;
        this.df = {};
        this.qc = {};
        this.Qc = a
    }

    function pi(a, b, c, d, e) {
        var f = a.mb,
            g = e;
        O(d > f.Pc, "Stacking an older write on top of newer ones");
        p(g) || (g = !0);
        f.pa.push({
            path: b,
            Ja: c,
            md: d,
            visible: g
        });
        g && (f.V = Jf(f.V, b, c));
        f.Pc = d;
        return e ? qi(a, new Ac(Ef, b, c)) : []
    }

    function ri(a, b, c, d) {
        var e = a.mb;
        O(d > e.Pc, "Stacking an older merge on top of newer ones");
        e.pa.push({
            path: b,
            children: c,
            md: d,
            visible: !0
        });
        e.V = Kf(e.V, b, c);
        e.Pc = d;
        c = sf(c);
        return qi(a, new bf(Ef, b, c))
    }

    function si(a, b, c) {
        c = c || !1;
        var d = Qf(a.mb, b);
        if (a.mb.Ud(b)) {
            var e = qe;
            null != d.Ja ? e = e.set(M, !0) : Fb(d.children, function(a, b) {
                e = e.set(new P(a), b)
            });
            return qi(a, new Df(d.path, e, c))
        }
        return []
    }

    function ti(a, b, c) {
        c = sf(c);
        return qi(a, new bf(Gf, b, c))
    }

    function ui(a, b, c, d) {
        d = vi(a, d);
        if (null != d) {
            var e = wi(d);
            d = e.path;
            e = e.Lb;
            b = lf(d, b);
            c = new Ac(new Ff(!1, !0, e, !0), b, c);
            return xi(a, d, c)
        }
        return []
    }

    function yi(a, b, c, d) {
        if (d = vi(a, d)) {
            var e = wi(d);
            d = e.path;
            e = e.Lb;
            b = lf(d, b);
            c = sf(c);
            c = new bf(new Ff(!1, !0, e, !0), b, c);
            return xi(a, d, c)
        }
        return []
    }
    oi.prototype.Tb = function(a, b) {
        var c = a.path,
            d = null,
            e = !1;
        zf(this.va, c, function(a, b) {
            var f = lf(a, c);
            d = d || b.kb(f);
            e = e || null != li(b)
        });
        var f = this.va.get(c);
        f ? (e = e || null != li(f), d = d || f.kb(M)) : (f = new ki, this.va = this.va.set(c, f));
        var g;
        null != d ? g = !0 : (g = !1, d = H, Cf(this.va.subtree(c), function(a, b) {
            var c = b.kb(M);
            c && (d = d.W(a, c))
        }));
        var k = null != ni(f, a);
        if (!k && !He(a.n)) {
            var m = zi(a);
            O(!(m in this.qc), "View does not exist, but we have a tag");
            var l = Ai++;
            this.qc[m] = l;
            this.df["_" + l] = m
        }
        g = f.Tb(a, b, new Uf(c, this.mb), d, g);
        k || e || (f = ni(f, a), g = g.concat(Bi(this, a, f)));
        return g
    };
    oi.prototype.nb = function(a, b, c) {
        var d = a.path,
            e = this.va.get(d),
            f = [];
        if (e && ("default" === a.wa() || null != ni(e, a))) {
            f = e.nb(a, b, c);
            e.e() && (this.va = this.va.remove(d));
            e = f.Wg;
            f = f.vg;
            b = -1 !== Sa(e, function(a) {
                return He(a.n)
            });
            var g = xf(this.va, d, function(a, b) {
                return null != li(b)
            });
            if (b && !g && (d = this.va.subtree(d), !d.e()))
                for (var d = Ci(d), k = 0; k < d.length; ++k) {
                    var m = d[k],
                        l = m.Y,
                        m = Di(this, m);
                    this.Qc.af(Ei(l), Fi(this, l), m.Ad, m.I)
                }
            if (!g && 0 < e.length && !c)
                if (b) this.Qc.de(Ei(a), null);
                else {
                    var t = this;
                    Ma(e, function(a) {
                        a.wa();
                        var b = t.qc[zi(a)];
                        t.Qc.de(Ei(a), b)
                    })
                } Gi(this, e)
        }
        return f
    };
    oi.prototype.Aa = function(a, b) {
        var c = this.mb,
            d = xf(this.va, a, function(b, c) {
                var d = lf(b, a);
                if (d = c.kb(d)) return d
            });
        return c.Aa(a, d, b, !0)
    };

    function Ci(a) {
        return vf(a, function(a, c, d) {
            if (c && null != li(c)) return [li(c)];
            var e = [];
            c && (e = mi(c));
            v(d, function(a) {
                e = e.concat(a)
            });
            return e
        })
    }

    function Gi(a, b) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (!He(d.n)) {
                var d = zi(d),
                    e = a.qc[d];
                delete a.qc[d];
                delete a.df["_" + e]
            }
        }
    }

    function Ei(a) {
        return He(a.n) && !Ie(a.n) ? a.Mb() : a
    }

    function Bi(a, b, c) {
        var d = b.path,
            e = Fi(a, b);
        c = Di(a, c);
        b = a.Qc.af(Ei(b), e, c.Ad, c.I);
        d = a.va.subtree(d);
        if (e) O(null == li(d.value), "If we're adding a query, it shouldn't be shadowed");
        else
            for (e = vf(d, function(a, b, c) {
                    if (!a.e() && b && null != li(b)) return [Ze(li(b))];
                    var d = [];
                    b && (d = d.concat(Oa(mi(b), function(a) {
                        return a.Y
                    })));
                    v(c, function(a) {
                        d = d.concat(a)
                    });
                    return d
                }), d = 0; d < e.length; ++d) c = e[d], a.Qc.de(Ei(c), Fi(a, c));
        return b
    }

    function Di(a, b) {
        var c = b.Y,
            d = Fi(a, c);
        return {
            Ad: function() {
                return (b.w() || H).hash()
            },
            I: function(b) {
                if ("ok" === b) {
                    if (d) {
                        var f = c.path;
                        if (b = vi(a, d)) {
                            var g = wi(b);
                            b = g.path;
                            g = g.Lb;
                            f = lf(b, f);
                            f = new Cc(new Ff(!1, !0, g, !0), f);
                            b = xi(a, b, f)
                        } else b = []
                    } else b = qi(a, new Cc(Gf, c.path));
                    return b
                }
                f = "Unknown Error";
                "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b && (f = "The service is unavailable");
                f = Error(b + " at " + c.path.toString() + ": " + f);
                f.code = b.toUpperCase();
                return a.nb(c, null, f)
            }
        }
    }

    function zi(a) {
        return a.path.toString() + "$" + a.wa()
    }

    function wi(a) {
        var b = a.indexOf("$");
        O(-1 !== b && b < a.length - 1, "Bad queryKey.");
        return {
            Lb: a.substr(b + 1),
            path: new P(a.substr(0, b))
        }
    }

    function vi(a, b) {
        var c = a.df,
            d = "_" + b;
        return d in c ? c[d] : void 0
    }

    function Fi(a, b) {
        var c = zi(b);
        return z(a.qc, c)
    }
    var Ai = 1;

    function xi(a, b, c) {
        var d = a.va.get(b);
        O(d, "Missing sync point for query tag that we're tracking");
        return d.gb(c, new Uf(b, a.mb), null)
    }

    function qi(a, b) {
        return Hi(a, b, a.va, null, new Uf(M, a.mb))
    }

    function Hi(a, b, c, d, e) {
        if (b.path.e()) return Ii(a, b, c, d, e);
        var f = c.get(M);
        null == d && null != f && (d = f.kb(M));
        var g = [],
            k = K(b.path),
            m = b.$c(k);
        if ((c = c.children.get(k)) && m) var l = d ? d.T(k) : null,
            k = e.o(k),
            g = g.concat(Hi(a, m, c, l, k));
        f && (g = g.concat(f.gb(b, e, d)));
        return g
    }

    function Ii(a, b, c, d, e) {
        var f = c.get(M);
        null == d && null != f && (d = f.kb(M));
        var g = [];
        c.children.ka(function(c, f) {
            var l = d ? d.T(c) : null,
                t = e.o(c),
                A = b.$c(c);
            A && (g = g.concat(Ii(a, A, f, l, t)))
        });
        f && (g = g.concat(f.gb(b, e, d)));
        return g
    };

    function Ji(a, b) {
        this.G = a;
        this.Xa = uc(a);
        this.hd = null;
        this.fa = new Zb;
        this.Kd = 1;
        this.Va = null;
        b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) ? (this.da = new cf(this.G, u(this.Kb, this)), setTimeout(u(this.Xc, this, !0), 0)) : this.da = this.Va = new Rh(this.G, u(this.Kb, this), u(this.Xc, this), u(this.Se, this));
        this.eh = vc(a, u(function() {
            return new pc(this.Xa, this.da)
        }, this));
        this.yc = new Wf;
        this.Ge = new Sb;
        var c = this;
        this.Fd = new oi({
            af: function(a, b, f, g) {
                b = [];
                f = c.Ge.j(a.path);
                f.e() || (b = qi(c.Fd, new Ac(Gf, a.path, f)), setTimeout(function() {
                    g("ok")
                }, 0));
                return b
            },
            de: aa
        });
        Ki(this, "connected", !1);
        this.na = new Vc;
        this.O = new Yg(a, u(this.da.O, this.da), u(this.da.je, this.da), u(this.Pe, this));
        this.ud = 0;
        this.He = null;
        this.M = new oi({
            af: function(a, b, f, g) {
                c.da.Cf(a, f, b, function(b, e) {
                    var f = g(b, e);
                    dc(c.fa, a.path, f)
                });
                return []
            },
            de: function(a, b) {
                c.da.$f(a, b)
            }
        })
    }
    h = Ji.prototype;
    h.toString = function() {
        return (this.G.ob ? "https://" : "http://") + this.G.host
    };
    h.name = function() {
        return this.G.lc
    };

    function Li(a) {
        a = a.Ge.j(new P(".info/serverTimeOffset")).J() || 0;
        return (new Date).getTime() + a
    }

    function Mi(a) {
        a = a = {
            timestamp: Li(a)
        };
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }
    h.Kb = function(a, b, c, d) {
        this.ud++;
        var e = new P(a);
        b = this.He ? this.He(a, b) : b;
        a = [];
        d ? c ? (b = ma(b, function(a) {
            return Q(a)
        }), a = yi(this.M, e, b, d)) : (b = Q(b), a = ui(this.M, e, b, d)) : c ? (d = ma(b, function(a) {
            return Q(a)
        }), a = ti(this.M, e, d)) : (d = Q(b), a = qi(this.M, new Ac(Gf, e, d)));
        d = e;
        0 < a.length && (d = Ni(this, e));
        dc(this.fa, d, a)
    };
    h.Xc = function(a) {
        Ki(this, "connected", a);
        !1 === a && Oi(this)
    };
    h.Se = function(a) {
        var b = this;
        zd(a, function(a, d) {
            Ki(b, d, a)
        })
    };
    h.Pe = function(a) {
        Ki(this, "authenticated", a)
    };

    function Ki(a, b, c) {
        b = new P("/.info/" + b);
        c = Q(c);
        var d = a.Ge;
        d.Zd = d.Zd.H(b, c);
        c = qi(a.Fd, new Ac(Gf, b, c));
        dc(a.fa, b, c)
    }
    h.Ob = function(a, b, c, d) {
        this.f("set", {
            path: a.toString(),
            value: b,
            nh: c
        });
        var e = Mi(this);
        b = Q(b, c);
        var e = Xc(b, e),
            f = this.Kd++,
            e = pi(this.M, a, e, f, !0);
        $b(this.fa, e);
        var g = this;
        this.da.put(a.toString(), b.J(!0), function(b, c) {
            var e = "ok" === b;
            e || S("set at " + a + " failed: " + b);
            e = si(g.M, f, !e);
            dc(g.fa, a, e);
            Pi(d, b, c)
        });
        e = Qi(this, a);
        Ni(this, e);
        dc(this.fa, e, [])
    };
    h.update = function(a, b, c) {
        this.f("update", {
            path: a.toString(),
            value: b
        });
        var d = !0,
            e = Mi(this),
            f = {};
        v(b, function(a, b) {
            d = !1;
            var c = Q(a);
            f[b] = Xc(c, e)
        });
        if (d) fc("update() called with empty data.  Don't do anything."), Pi(c, "ok");
        else {
            var g = this.Kd++,
                k = ri(this.M, a, f, g);
            $b(this.fa, k);
            var m = this;
            this.da.Df(a.toString(), b, function(b, d) {
                var e = "ok" === b;
                e || S("update at " + a + " failed: " + b);
                var e = si(m.M, g, !e),
                    f = a;
                0 < e.length && (f = Ni(m, a));
                dc(m.fa, f, e);
                Pi(c, b, d)
            });
            b = Qi(this, a);
            Ni(this, b);
            dc(this.fa, a, [])
        }
    };

    function Oi(a) {
        a.f("onDisconnectEvents");
        var b = Mi(a),
            c = [];
        Wc(Uc(a.na, b), M, function(b, e) {
            c = c.concat(qi(a.M, new Ac(Gf, b, e)));
            var f = Qi(a, b);
            Ni(a, f)
        });
        a.na = new Vc;
        dc(a.fa, M, c)
    }
    h.Md = function(a, b) {
        var c = this;
        this.da.Md(a.toString(), function(d, e) {
            "ok" === d && wg(c.na, a);
            Pi(b, d, e)
        })
    };

    function fi(a, b, c, d) {
        var e = Q(c);
        a.da.Qe(b.toString(), e.J(!0), function(c, g) {
            "ok" === c && a.na.rc(b, e);
            Pi(d, c, g)
        })
    }

    function gi(a, b, c, d, e) {
        var f = Q(c, d);
        a.da.Qe(b.toString(), f.J(!0), function(c, d) {
            "ok" === c && a.na.rc(b, f);
            Pi(e, c, d)
        })
    }

    function hi(a, b, c, d) {
        var e = !0,
            f;
        for (f in c) e = !1;
        e ? (fc("onDisconnect().update() called with empty data.  Don't do anything."), Pi(d, "ok")) : a.da.Gf(b.toString(), c, function(e, f) {
            if ("ok" === e)
                for (var m in c) {
                    var l = Q(c[m]);
                    a.na.rc(b.o(m), l)
                }
            Pi(d, e, f)
        })
    }

    function Ri(a, b, c) {
        c = ".info" === K(b.path) ? a.Fd.Tb(b, c) : a.M.Tb(b, c);
        bc(a.fa, b.path, c)
    }
    h.Cb = function() {
        this.Va && this.Va.Cb()
    };
    h.vc = function() {
        this.Va && this.Va.vc()
    };
    h.bf = function(a) {
        if ("undefined" !== typeof console) {
            a ? (this.hd || (this.hd = new oc(this.Xa)), a = this.hd.get()) : a = this.Xa.get();
            var b = Pa(ra(a), function(a, b) {
                    return Math.max(b.length, a)
                }, 0),
                c;
            for (c in a) {
                for (var d = a[c], e = c.length; e < b + 2; e++) c += " ";
                console.log(c + d)
            }
        }
    };
    h.cf = function(a) {
        rc(this.Xa, a);
        this.eh.Vf[a] = !0
    };
    h.f = function(a) {
        var b = "";
        this.Va && (b = this.Va.id + ":");
        fc(b, arguments)
    };

    function Pi(a, b, c) {
        a && gc(function() {
            if ("ok" == b) a(null);
            else {
                var d = (b || "error").toUpperCase(),
                    e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };

    function Si(a, b, c, d, e) {
        function f() {}
        a.f("transaction on " + b);
        var g = new X(a, b);
        g.Ib("value", f);
        c = {
            path: b,
            update: c,
            I: d,
            status: null,
            Lf: id(),
            gf: e,
            Sf: 0,
            le: function() {
                g.mc("value", f)
            },
            ne: null,
            Da: null,
            rd: null,
            sd: null,
            td: null
        };
        d = a.M.Aa(b, void 0) || H;
        c.rd = d;
        d = c.update(d.J());
        if (p(d)) {
            hg("transaction failed: Data returned ", d, c.path);
            c.status = 1;
            e = Xf(a.yc, b);
            var k = e.Ea() || [];
            k.push(c);
            Yf(e, k);
            "object" === typeof d && null !== d && y(d, ".priority") ? (k = z(d, ".priority"), O(fg(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : k = (a.M.Aa(b) || H).C().J();
            e = Mi(a);
            d = Q(d, k);
            e = Xc(d, e);
            c.sd = d;
            c.td = e;
            c.Da = a.Kd++;
            c = pi(a.M, b, e, c.Da, c.gf);
            dc(a.fa, b, c);
            Ti(a)
        } else c.le(), c.sd = null, c.td = null, c.I && (a = new W(c.rd, new X(a, c.path), R), c.I(null, !1, a))
    }

    function Ti(a, b) {
        var c = b || a.yc;
        b || Ui(a, c);
        if (null !== c.Ea()) {
            var d = Vi(a, c);
            O(0 < d.length, "Sending zero length transaction queue");
            Qa(d, function(a) {
                return 1 === a.status
            }) && Wi(a, c.path(), d)
        } else c.zd() && c.R(function(b) {
            Ti(a, b)
        })
    }

    function Wi(a, b, c) {
        for (var d = Oa(c, function(a) {
                return a.Da
            }), e = a.M.Aa(b, d) || H, d = e, e = e.hash(), f = 0; f < c.length; f++) {
            var g = c[f];
            O(1 === g.status, "tryToSendTransactionQueue_: items in queue should all be run.");
            g.status = 2;
            g.Sf++;
            var k = lf(b, g.path),
                d = d.H(k, g.sd)
        }
        d = d.J(!0);
        a.da.put(b.toString(), d, function(d) {
            a.f("transaction put response", {
                path: b.toString(),
                status: d
            });
            var e = [];
            if ("ok" === d) {
                d = [];
                for (f = 0; f < c.length; f++) {
                    c[f].status = 3;
                    e = e.concat(si(a.M, c[f].Da));
                    if (c[f].I) {
                        var g = c[f].td,
                            k = new X(a, c[f].path);
                        d.push(u(c[f].I, null, null, !0, new W(g, k, R)))
                    }
                    c[f].le()
                }
                Ui(a, Xf(a.yc, b));
                Ti(a);
                dc(a.fa, b, e);
                for (f = 0; f < d.length; f++) gc(d[f])
            } else {
                if ("datastale" === d)
                    for (f = 0; f < c.length; f++) c[f].status = 4 === c[f].status ? 5 : 1;
                else
                    for (S("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++) c[f].status = 5, c[f].ne = d;
                Ni(a, b)
            }
        }, e)
    }

    function Ni(a, b) {
        var c = Xi(a, b),
            d = c.path(),
            c = Vi(a, c);
        Yi(a, c, d);
        return d
    }

    function Yi(a, b, c) {
        if (0 !== b.length) {
            for (var d = [], e = [], f = Na(b, function(a) {
                    return 1 === a.status
                }), f = Oa(f, function(a) {
                    return a.Da
                }), g = 0; g < b.length; g++) {
                var k = b[g],
                    m = lf(c, k.path),
                    l = !1,
                    t;
                O(null !== m, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === k.status) l = !0, t = k.ne, e = e.concat(si(a.M, k.Da, !0));
                else if (1 === k.status)
                    if (25 <= k.Sf) l = !0, t = "maxretry", e = e.concat(si(a.M, k.Da, !0));
                    else {
                        var A = a.M.Aa(k.path, f) || H;
                        k.rd = A;
                        var I = b[g].update(A.J());
                        p(I) ? (hg("transaction failed: Data returned ", I, k.path), m = Q(I), "object" === typeof I && null != I && y(I, ".priority") || (m = m.ia(A.C())), A = k.Da, I = Mi(a), I = Xc(m, I), k.sd = m, k.td = I, k.Da = a.Kd++, Ta(f, A), e = e.concat(pi(a.M, k.path, I, k.Da, k.gf)), e = e.concat(si(a.M, A, !0))) : (l = !0, t = "nodata", e = e.concat(si(a.M, k.Da, !0)))
                    } dc(a.fa, c, e);
                e = [];
                l && (b[g].status = 3, setTimeout(b[g].le, Math.floor(0)), b[g].I && ("nodata" === t ? (k = new X(a, b[g].path), d.push(u(b[g].I, null, null, !1, new W(b[g].rd, k, R)))) : d.push(u(b[g].I, null, Error(t), !1, null))))
            }
            Ui(a, a.yc);
            for (g = 0; g < d.length; g++) gc(d[g]);
            Ti(a)
        }
    }

    function Xi(a, b) {
        for (var c, d = a.yc; null !== (c = K(b)) && null === d.Ea();) d = Xf(d, c), b = N(b);
        return d
    }

    function Vi(a, b) {
        var c = [];
        Zi(a, b, c);
        c.sort(function(a, b) {
            return a.Lf - b.Lf
        });
        return c
    }

    function Zi(a, b, c) {
        var d = b.Ea();
        if (null !== d)
            for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.R(function(b) {
            Zi(a, b, c)
        })
    }

    function Ui(a, b) {
        var c = b.Ea();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            Yf(b, 0 < c.length ? c : null)
        }
        b.R(function(b) {
            Ui(a, b)
        })
    }

    function Qi(a, b) {
        var c = Xi(a, b).path(),
            d = Xf(a.yc, b);
        ag(d, function(b) {
            $i(a, b)
        });
        $i(a, d);
        $f(d, function(b) {
            $i(a, b)
        });
        return c
    }

    function $i(a, b) {
        var c = b.Ea();
        if (null !== c) {
            for (var d = [], e = [], f = -1, g = 0; g < c.length; g++) 4 !== c[g].status && (2 === c[g].status ? (O(f === g - 1, "All SENT items should be at beginning of queue."), f = g, c[g].status = 4, c[g].ne = "set") : (O(1 === c[g].status, "Unexpected transaction status in abort"), c[g].le(), e = e.concat(si(a.M, c[g].Da, !0)), c[g].I && d.push(u(c[g].I, null, Error("set"), !1, null)))); - 1 === f ? Yf(b, null) : c.length = f + 1;
            dc(a.fa, b.path(), e);
            for (g = 0; g < d.length; g++) gc(d[g])
        }
    };

    function aj() {
        this.sc = {};
        this.ag = !1
    }
    aj.prototype.Cb = function() {
        for (var a in this.sc) this.sc[a].Cb()
    };
    aj.prototype.vc = function() {
        for (var a in this.sc) this.sc[a].vc()
    };
    aj.prototype.ze = function() {
        this.ag = !0
    };
    ba(aj);
    aj.prototype.interrupt = aj.prototype.Cb;
    aj.prototype.resume = aj.prototype.vc;

    function Y(a, b, c, d) {
        this.k = a;
        this.path = b;
        this.n = c;
        this.pc = d
    }

    function bj(a) {
        var b = null,
            c = null;
        a.oa && (b = Od(a));
        a.ra && (c = Rd(a));
        if (a.g === re) {
            if (a.oa) {
                if ("[MIN_NAME]" != Nd(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !== typeof b) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
            if (a.ra) {
                if ("[MAX_NAME]" != Pd(a)) throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if ("string" !== typeof c) throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
        } else if (a.g === R) {
            if (null != b && !fg(b) || null != c && !fg(c)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (O(a.g instanceof ve || a.g === Be, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
    }

    function cj(a) {
        if (a.oa && a.ra && a.la && (!a.la || "" === a.Rb)) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
    }

    function dj(a, b) {
        if (!0 === a.pc) throw Error(b + ": You can't combine multiple orderBy calls.");
    }
    h = Y.prototype;
    h.Mb = function() {
        D("Query.ref", 0, 0, arguments.length);
        return new X(this.k, this.path)
    };
    h.Ib = function(a, b, c, d) {
        D("Query.on", 2, 4, arguments.length);
        lg("Query.on", a, !1);
        F("Query.on", 2, b, !1);
        var e = ej("Query.on", c, d);
        if ("value" === a) Ri(this.k, this, new ii(b, e.cancel || null, e.Qa || null));
        else {
            var f = {};
            f[a] = b;
            Ri(this.k, this, new ji(f, e.cancel, e.Qa))
        }
        return b
    };
    h.mc = function(a, b, c) {
        D("Query.off", 0, 3, arguments.length);
        lg("Query.off", a, !0);
        F("Query.off", 2, b, !0);
        Qb("Query.off", 3, c);
        var d = null,
            e = null;
        "value" === a ? d = new ii(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new ji(e, null, c || null));
        e = this.k;
        d = ".info" === K(this.path) ? e.Fd.nb(this, d) : e.M.nb(this, d);
        bc(e.fa, this.path, d)
    };
    h.Pg = function(a, b) {
        function c(k) {
            f && (f = !1, e.mc(a, c), b && b.call(d.Qa, k), g.resolve(k))
        }
        D("Query.once", 1, 4, arguments.length);
        lg("Query.once", a, !1);
        F("Query.once", 2, b, !0);
        var d = ej("Query.once", arguments[2], arguments[3]),
            e = this,
            f = !0,
            g = new B;
        Nb(g.D);
        this.Ib(a, c, function(b) {
            e.mc(a, c);
            d.cancel && d.cancel.call(d.Qa, b);
            g.reject(b)
        });
        return g.D
    };
    h.Le = function(a) {
        S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");
        D("Query.limit", 1, 1, arguments.length);
        if (!fa(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limit: First argument must be a positive integer.");
        if (this.n.la) throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
        var b = this.n.Le(a);
        cj(b);
        return new Y(this.k, this.path, b, this.pc)
    };
    h.Me = function(a) {
        D("Query.limitToFirst", 1, 1, arguments.length);
        if (!fa(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToFirst: First argument must be a positive integer.");
        if (this.n.la) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new Y(this.k, this.path, this.n.Me(a), this.pc)
    };
    h.Ne = function(a) {
        D("Query.limitToLast", 1, 1, arguments.length);
        if (!fa(a) || Math.floor(a) !== a || 0 >= a) throw Error("Query.limitToLast: First argument must be a positive integer.");
        if (this.n.la) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new Y(this.k, this.path, this.n.Ne(a), this.pc)
    };
    h.Qg = function(a) {
        D("Query.orderByChild", 1, 1, arguments.length);
        if ("$key" === a) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        if ("$priority" === a) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        if ("$value" === a) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        ng("Query.orderByChild", a);
        dj(this, "Query.orderByChild");
        var b = new P(a);
        if (b.e()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
        b = new ve(b);
        b = Fe(this.n, b);
        bj(b);
        return new Y(this.k, this.path, b, !0)
    };
    h.Rg = function() {
        D("Query.orderByKey", 0, 0, arguments.length);
        dj(this, "Query.orderByKey");
        var a = Fe(this.n, re);
        bj(a);
        return new Y(this.k, this.path, a, !0)
    };
    h.Sg = function() {
        D("Query.orderByPriority", 0, 0, arguments.length);
        dj(this, "Query.orderByPriority");
        var a = Fe(this.n, R);
        bj(a);
        return new Y(this.k, this.path, a, !0)
    };
    h.Tg = function() {
        D("Query.orderByValue", 0, 0, arguments.length);
        dj(this, "Query.orderByValue");
        var a = Fe(this.n, Be);
        bj(a);
        return new Y(this.k, this.path, a, !0)
    };
    h.ce = function(a, b) {
        D("Query.startAt", 0, 2, arguments.length);
        gg("Query.startAt", a, this.path, !0);
        mg("Query.startAt", b);
        var c = this.n.ce(a, b);
        cj(c);
        bj(c);
        if (this.n.oa) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
        p(a) || (b = a = null);
        return new Y(this.k, this.path, c, this.pc)
    };
    h.vd = function(a, b) {
        D("Query.endAt", 0, 2, arguments.length);
        gg("Query.endAt", a, this.path, !0);
        mg("Query.endAt", b);
        var c = this.n.vd(a, b);
        cj(c);
        bj(c);
        if (this.n.ra) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
        return new Y(this.k, this.path, c, this.pc)
    };
    h.tg = function(a, b) {
        D("Query.equalTo", 1, 2, arguments.length);
        gg("Query.equalTo", a, this.path, !1);
        mg("Query.equalTo", b);
        if (this.n.oa) throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
        if (this.n.ra) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
        return this.ce(a, b).vd(a, b)
    };
    h.toString = function() {
        D("Query.toString", 0, 0, arguments.length);
        for (var a = this.path, b = "", c = a.aa; c < a.u.length; c++) "" !== a.u[c] && (b += "/" + encodeURIComponent(String(a.u[c])));
        return this.k.toString() + (b || "/")
    };
    h.wa = function() {
        var a = xd(Ge(this.n));
        return "{}" === a ? "default" : a
    };

    function ej(a, b, c) {
        var d = {
            cancel: null,
            Qa: null
        };
        if (b && c) d.cancel = b, F(a, 3, d.cancel, !0), d.Qa = c, Qb(a, 4, d.Qa);
        else if (b)
            if ("object" === typeof b && null !== b) d.Qa = b;
            else if ("function" === typeof b) d.cancel = b;
        else throw Error(E(a, 3, !0) + " must either be a cancel callback or a context object.");
        return d
    }
    Y.prototype.ref = Y.prototype.Mb;
    Y.prototype.on = Y.prototype.Ib;
    Y.prototype.off = Y.prototype.mc;
    Y.prototype.once = Y.prototype.Pg;
    Y.prototype.limit = Y.prototype.Le;
    Y.prototype.limitToFirst = Y.prototype.Me;
    Y.prototype.limitToLast = Y.prototype.Ne;
    Y.prototype.orderByChild = Y.prototype.Qg;
    Y.prototype.orderByKey = Y.prototype.Rg;
    Y.prototype.orderByPriority = Y.prototype.Sg;
    Y.prototype.orderByValue = Y.prototype.Tg;
    Y.prototype.startAt = Y.prototype.ce;
    Y.prototype.endAt = Y.prototype.vd;
    Y.prototype.equalTo = Y.prototype.tg;
    Y.prototype.toString = Y.prototype.toString;
    var Z = {};
    Z.zc = Rh;
    Z.DataConnection = Z.zc;
    Rh.prototype.dh = function(a, b) {
        this.Ia("q", {
            p: a
        }, b)
    };
    Z.zc.prototype.simpleListen = Z.zc.prototype.dh;
    Rh.prototype.sg = function(a, b) {
        this.Ia("echo", {
            d: a
        }, b)
    };
    Z.zc.prototype.echo = Z.zc.prototype.sg;
    Rh.prototype.interrupt = Rh.prototype.Cb;
    Z.dg = Fh;
    Z.RealTimeConnection = Z.dg;
    Fh.prototype.sendRequest = Fh.prototype.Ia;
    Fh.prototype.close = Fh.prototype.close;
    Z.Cg = function(a) {
        var b = Rh.prototype.put;
        Rh.prototype.put = function(c, d, e, f) {
            p(f) && (f = a());
            b.call(this, c, d, e, f)
        };
        return function() {
            Rh.prototype.put = b
        }
    };
    Z.hijackHash = Z.Cg;
    Z.cg = dd;
    Z.ConnectionTarget = Z.cg;
    Z.wa = function(a) {
        return a.wa()
    };
    Z.queryIdentifier = Z.wa;
    Z.Fg = function(a) {
        return a.k.Va.ba
    };
    Z.listens = Z.Fg;
    Z.ze = function(a) {
        a.ze()
    };
    Z.forceRestClient = Z.ze;

    function X(a, b) {
        var c, d, e;
        if (a instanceof Ji) c = a, d = b;
        else {
            D("new Firebase", 1, 2, arguments.length);
            d = sd(arguments[0]);
            c = d.fh;
            "firebase" === d.domain && rd(d.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
            c && "undefined" != c || rd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
            d.ob || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
            c = new dd(d.host, d.ob, c, "ws" === d.scheme || "wss" === d.scheme);
            d = new P(d.bd);
            e = d.toString();
            var f;
            !(f = !q(c.host) || 0 === c.host.length || !eg(c.lc)) && (f = 0 !== e.length) && (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), f = !(q(e) && 0 !== e.length && !cg.test(e)));
            if (f) throw Error(E("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
            if (b)
                if (b instanceof aj) e = b;
                else if (q(b)) e = aj.yb(), c.Rd = b;
            else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
            else e = aj.yb();
            f = c.toString();
            var g = z(e.sc, f);
            g || (g = new Ji(c, e.ag), e.sc[f] = g);
            c = g
        }
        Y.call(this, c, d, De, !1);
        this.then = void 0;
        this["catch"] = void 0
    }
    ka(X, Y);
    var fj = X,
        gj = ["Firebase"],
        hj = n;
    gj[0] in hj || !hj.execScript || hj.execScript("var " + gj[0]);
    for (var ij; gj.length && (ij = gj.shift());) !gj.length && p(fj) ? hj[ij] = fj : hj = hj[ij] ? hj[ij] : hj[ij] = {};
    X.goOffline = function() {
        D("Firebase.goOffline", 0, 0, arguments.length);
        aj.yb().Cb()
    };
    X.goOnline = function() {
        D("Firebase.goOnline", 0, 0, arguments.length);
        aj.yb().vc()
    };
    X.enableLogging = od;
    X.ServerValue = {
        TIMESTAMP: {
            ".sv": "timestamp"
        }
    };
    X.SDK_VERSION = Eb;
    X.INTERNAL = U;
    X.Context = aj;
    X.TEST_ACCESS = Z;
    X.prototype.name = function() {
        S("Firebase.name() being deprecated. Please use Firebase.key() instead.");
        D("Firebase.name", 0, 0, arguments.length);
        return this.key()
    };
    X.prototype.name = X.prototype.name;
    X.prototype.key = function() {
        D("Firebase.key", 0, 0, arguments.length);
        return this.path.e() ? null : me(this.path)
    };
    X.prototype.key = X.prototype.key;
    X.prototype.o = function(a) {
        D("Firebase.child", 1, 1, arguments.length);
        if (fa(a)) a = String(a);
        else if (!(a instanceof P))
            if (null === K(this.path)) {
                var b = a;
                b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
                ng("Firebase.child", b)
            } else ng("Firebase.child", a);
        return new X(this.k, this.path.o(a))
    };
    X.prototype.child = X.prototype.o;
    X.prototype.parent = function() {
        D("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return null === a ? null : new X(this.k, a)
    };
    X.prototype.parent = X.prototype.parent;
    X.prototype.root = function() {
        D("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; null !== a.parent();) a = a.parent();
        return a
    };
    X.prototype.root = X.prototype.root;
    X.prototype.set = function(a, b) {
        D("Firebase.set", 1, 2, arguments.length);
        og("Firebase.set", this.path);
        gg("Firebase.set", a, this.path, !1);
        F("Firebase.set", 2, b, !0);
        var c = new B;
        this.k.Ob(this.path, a, null, C(c, b));
        return c.D
    };
    X.prototype.set = X.prototype.set;
    X.prototype.update = function(a, b) {
        D("Firebase.update", 1, 2, arguments.length);
        og("Firebase.update", this.path);
        if (da(a)) {
            for (var c = {}, d = 0; d < a.length; ++d) c["" + d] = a[d];
            a = c;
            S("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        jg("Firebase.update", a, this.path);
        F("Firebase.update", 2, b, !0);
        c = new B;
        this.k.update(this.path, a, C(c, b));
        return c.D
    };
    X.prototype.update = X.prototype.update;
    X.prototype.Ob = function(a, b, c) {
        D("Firebase.setWithPriority", 2, 3, arguments.length);
        og("Firebase.setWithPriority", this.path);
        gg("Firebase.setWithPriority", a, this.path, !1);
        kg("Firebase.setWithPriority", 2, b);
        F("Firebase.setWithPriority", 3, c, !0);
        if (".length" === this.key() || ".keys" === this.key()) throw "Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
        var d = new B;
        this.k.Ob(this.path, a, b, C(d, c));
        return d.D
    };
    X.prototype.setWithPriority = X.prototype.Ob;
    X.prototype.remove = function(a) {
        D("Firebase.remove", 0, 1, arguments.length);
        og("Firebase.remove", this.path);
        F("Firebase.remove", 1, a, !0);
        return this.set(null, a)
    };
    X.prototype.remove = X.prototype.remove;
    X.prototype.transaction = function(a, b, c) {
        D("Firebase.transaction", 1, 3, arguments.length);
        og("Firebase.transaction", this.path);
        F("Firebase.transaction", 1, a, !1);
        F("Firebase.transaction", 2, b, !0);
        if (p(c) && "boolean" != typeof c) throw Error(E("Firebase.transaction", 3, !0) + "must be a boolean.");
        if (".length" === this.key() || ".keys" === this.key()) throw "Firebase.transaction failed: " + this.key() + " is a read-only object.";
        "undefined" === typeof c && (c = !0);
        var d = new B;
        r(b) && Nb(d.D);
        Si(this.k, this.path, a, function(a, c, g) {
            a ? d.reject(a) : d.resolve(new ei(c, g));
            r(b) && b(a, c, g)
        }, c);
        return d.D
    };
    X.prototype.transaction = X.prototype.transaction;
    X.prototype.$g = function(a, b) {
        D("Firebase.setPriority", 1, 2, arguments.length);
        og("Firebase.setPriority", this.path);
        kg("Firebase.setPriority", 1, a);
        F("Firebase.setPriority", 2, b, !0);
        var c = new B;
        this.k.Ob(this.path.o(".priority"), a, null, C(c, b));
        return c.D
    };
    X.prototype.setPriority = X.prototype.$g;
    X.prototype.push = function(a, b) {
        D("Firebase.push", 0, 2, arguments.length);
        og("Firebase.push", this.path);
        gg("Firebase.push", a, this.path, !0);
        F("Firebase.push", 2, b, !0);
        var c = Li(this.k),
            d = hf(c),
            c = this.o(d);
        if (null != a) {
            var e = this,
                f = c.set(a, b).then(function() {
                    return e.o(d)
                });
            c.then = u(f.then, f);
            c["catch"] = u(f.then, f, void 0);
            r(b) && Nb(f)
        }
        return c
    };
    X.prototype.push = X.prototype.push;
    X.prototype.lb = function() {
        og("Firebase.onDisconnect", this.path);
        return new V(this.k, this.path)
    };
    X.prototype.onDisconnect = X.prototype.lb;
    X.prototype.O = function(a, b, c) {
        S("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");
        D("Firebase.auth", 1, 3, arguments.length);
        pg("Firebase.auth", a);
        F("Firebase.auth", 2, b, !0);
        F("Firebase.auth", 3, b, !0);
        var d = new B;
        dh(this.k.O, a, {}, {
            remember: "none"
        }, C(d, b), c);
        return d.D
    };
    X.prototype.auth = X.prototype.O;
    X.prototype.je = function(a) {
        D("Firebase.unauth", 0, 1, arguments.length);
        F("Firebase.unauth", 1, a, !0);
        var b = new B;
        eh(this.k.O, C(b, a));
        return b.D
    };
    X.prototype.unauth = X.prototype.je;
    X.prototype.Be = function() {
        D("Firebase.getAuth", 0, 0, arguments.length);
        return this.k.O.Be()
    };
    X.prototype.getAuth = X.prototype.Be;
    X.prototype.Jg = function(a, b) {
        D("Firebase.onAuth", 1, 2, arguments.length);
        F("Firebase.onAuth", 1, a, !1);
        Qb("Firebase.onAuth", 2, b);
        this.k.O.Ib("auth_status", a, b)
    };
    X.prototype.onAuth = X.prototype.Jg;
    X.prototype.Ig = function(a, b) {
        D("Firebase.offAuth", 1, 2, arguments.length);
        F("Firebase.offAuth", 1, a, !1);
        Qb("Firebase.offAuth", 2, b);
        this.k.O.mc("auth_status", a, b)
    };
    X.prototype.offAuth = X.prototype.Ig;
    X.prototype.hg = function(a, b, c) {
        D("Firebase.authWithCustomToken", 1, 3, arguments.length);
        2 === arguments.length && Hb(b) && (c = b, b = void 0);
        pg("Firebase.authWithCustomToken", a);
        F("Firebase.authWithCustomToken", 2, b, !0);
        sg("Firebase.authWithCustomToken", 3, c, !0);
        var d = new B;
        dh(this.k.O, a, {}, c || {}, C(d, b));
        return d.D
    };
    X.prototype.authWithCustomToken = X.prototype.hg;
    X.prototype.ig = function(a, b, c) {
        D("Firebase.authWithOAuthPopup", 1, 3, arguments.length);
        2 === arguments.length && Hb(b) && (c = b, b = void 0);
        rg("Firebase.authWithOAuthPopup", a);
        F("Firebase.authWithOAuthPopup", 2, b, !0);
        sg("Firebase.authWithOAuthPopup", 3, c, !0);
        var d = new B;
        ih(this.k.O, a, c, C(d, b));
        return d.D
    };
    X.prototype.authWithOAuthPopup = X.prototype.ig;
    X.prototype.jg = function(a, b, c) {
        D("Firebase.authWithOAuthRedirect", 1, 3, arguments.length);
        2 === arguments.length && Hb(b) && (c = b, b = void 0);
        rg("Firebase.authWithOAuthRedirect", a);
        F("Firebase.authWithOAuthRedirect", 2, b, !1);
        sg("Firebase.authWithOAuthRedirect", 3, c, !0);
        var d = new B,
            e = this.k.O,
            f = c,
            g = C(d, b);
        gh(e);
        var k = [Qg],
            f = Ag(f);
        "anonymous" === a || "firebase" === a ? T(g, Sg("TRANSPORT_UNAVAILABLE")) : (cd.set("redirect_client_options", f.qd), hh(e, k, "/auth/" + a, f, g));
        return d.D
    };
    X.prototype.authWithOAuthRedirect = X.prototype.jg;
    X.prototype.kg = function(a, b, c, d) {
        D("Firebase.authWithOAuthToken", 2, 4, arguments.length);
        3 === arguments.length && Hb(c) && (d = c, c = void 0);
        rg("Firebase.authWithOAuthToken", a);
        F("Firebase.authWithOAuthToken", 3, c, !0);
        sg("Firebase.authWithOAuthToken", 4, d, !0);
        var e = new B;
        q(b) ? (qg("Firebase.authWithOAuthToken", 2, b), fh(this.k.O, a + "/token", {
            access_token: b
        }, d, C(e, c))) : (sg("Firebase.authWithOAuthToken", 2, b, !1), fh(this.k.O, a + "/token", b, d, C(e, c)));
        return e.D
    };
    X.prototype.authWithOAuthToken = X.prototype.kg;
    X.prototype.gg = function(a, b) {
        D("Firebase.authAnonymously", 0, 2, arguments.length);
        1 === arguments.length && Hb(a) && (b = a, a = void 0);
        F("Firebase.authAnonymously", 1, a, !0);
        sg("Firebase.authAnonymously", 2, b, !0);
        var c = new B;
        fh(this.k.O, "anonymous", {}, b, C(c, a));
        return c.D
    };
    X.prototype.authAnonymously = X.prototype.gg;
    X.prototype.lg = function(a, b, c) {
        D("Firebase.authWithPassword", 1, 3, arguments.length);
        2 === arguments.length && Hb(b) && (c = b, b = void 0);
        sg("Firebase.authWithPassword", 1, a, !1);
        tg("Firebase.authWithPassword", a, "email");
        tg("Firebase.authWithPassword", a, "password");
        F("Firebase.authWithPassword", 2, b, !0);
        sg("Firebase.authWithPassword", 3, c, !0);
        var d = new B;
        fh(this.k.O, "password", a, c, C(d, b));
        return d.D
    };
    X.prototype.authWithPassword = X.prototype.lg;
    X.prototype.ve = function(a, b) {
        D("Firebase.createUser", 1, 2, arguments.length);
        sg("Firebase.createUser", 1, a, !1);
        tg("Firebase.createUser", a, "email");
        tg("Firebase.createUser", a, "password");
        F("Firebase.createUser", 2, b, !0);
        var c = new B;
        this.k.O.ve(a, C(c, b));
        return c.D
    };
    X.prototype.createUser = X.prototype.ve;
    X.prototype.Xe = function(a, b) {
        D("Firebase.removeUser", 1, 2, arguments.length);
        sg("Firebase.removeUser", 1, a, !1);
        tg("Firebase.removeUser", a, "email");
        tg("Firebase.removeUser", a, "password");
        F("Firebase.removeUser", 2, b, !0);
        var c = new B;
        this.k.O.Xe(a, C(c, b));
        return c.D
    };
    X.prototype.removeUser = X.prototype.Xe;
    X.prototype.se = function(a, b) {
        D("Firebase.changePassword", 1, 2, arguments.length);
        sg("Firebase.changePassword", 1, a, !1);
        tg("Firebase.changePassword", a, "email");
        tg("Firebase.changePassword", a, "oldPassword");
        tg("Firebase.changePassword", a, "newPassword");
        F("Firebase.changePassword", 2, b, !0);
        var c = new B;
        this.k.O.se(a, C(c, b));
        return c.D
    };
    X.prototype.changePassword = X.prototype.se;
    X.prototype.re = function(a, b) {
        D("Firebase.changeEmail", 1, 2, arguments.length);
        sg("Firebase.changeEmail", 1, a, !1);
        tg("Firebase.changeEmail", a, "oldEmail");
        tg("Firebase.changeEmail", a, "newEmail");
        tg("Firebase.changeEmail", a, "password");
        F("Firebase.changeEmail", 2, b, !0);
        var c = new B;
        this.k.O.re(a, C(c, b));
        return c.D
    };
    X.prototype.changeEmail = X.prototype.re;
    X.prototype.Ze = function(a, b) {
        D("Firebase.resetPassword", 1, 2, arguments.length);
        sg("Firebase.resetPassword", 1, a, !1);
        tg("Firebase.resetPassword", a, "email");
        F("Firebase.resetPassword", 2, b, !0);
        var c = new B;
        this.k.O.Ze(a, C(c, b));
        return c.D
    };
    X.prototype.resetPassword = X.prototype.Ze
})();
$.each($("span[id]"), function(f, b) {
    var e = $(b).parent().find(".postviews"),
        c = new Firebase("https://aazs-17bc0.firebaseio.com/pages/id/" + $(b).attr("id"));
    c.once("value", function(a) {
        a = a.val();
        var d = !1;
        null == a && (a = {
            value: 0
        }, a.url = window.location.href, a.id = $(b).attr("id"), d = !0);
        e.text(a.value);
        a.value++;
        "/" != window.location.pathname && (d ? c.set(a) : c.child("value").set(a.value))
    })
});
'use strict';
jQuery.cookie = function(name, value, options) {
    if (1 < arguments.length && "[object Object]" !== String(value)) {
        if (options = jQuery.extend({}, options), (null === value || void 0 === value) && (options.expires = -1), "number" == typeof options.expires) {
            var days = options.expires;
            var now = options.expires = new Date;
            now.setDate(now.getDate() + days)
        }
        return value = String(value), document.cookie = [encodeURIComponent(name), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
    }
    options = value || {};
    now = options.raw ? function(s) {
        return s
    } : decodeURIComponent;
    return (days = (new RegExp("(?:^|; )" + encodeURIComponent(name) + "=([^;]*)")).exec(document.cookie)) ? now(days[1]) : null
};
jQuery(document).ready(function($) {
    if ("yes" != $.cookie("popup-email-box")) {
        $(".outer-email-popup-box").delay(15E3).fadeIn("normal");
        $(".exit-button-subbox, .button").click(function() {
            $(".outer-email-popup-box").stop().fadeOut("normal")
        })
    }
    $.cookie("popup-email-box", "yes", {
        path: "/",
        expires: 1
    })
})
