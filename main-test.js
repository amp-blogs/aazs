'use strict';
/**
 * @return {undefined}
 */
function ts_isRTL() {
}
!function(global, factory) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = global.document ? factory(global, true) : function(global) {
      if (!global.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(global);
    };
  } else {
    factory(global);
  }
}("undefined" != typeof window ? window : this, function(window, zoomAware) {
  /**
   * @param {string} t
   * @param {!Object} elem
   * @param {!Object} n
   * @return {undefined}
   */
  function createElement(t, elem, n) {
    var i;
    var node = (elem = elem || document).createElement("script");
    if (node.text = t, n) {
      for (i in packet) {
        if (n[i]) {
          node[i] = n[i];
        }
      }
    }
    elem.head.appendChild(node).parentNode.removeChild(node);
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function type(type) {
    return null == type ? type + "" : "object" == typeof type || "function" == typeof type ? class2type[toString.call(type)] || "object" : typeof type;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length;
    var ltype = type(obj);
    return !fn(obj) && !test(obj) && ("array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @return {?}
   */
  function callback(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  /**
   * @param {!Object} key
   * @param {!Object} value
   * @param {boolean} not
   * @return {?}
   */
  function filter(key, value, not) {
    return fn(value) ? jQuery.grep(key, function(context, i) {
      return !!value.call(context, i, context) !== not;
    }) : value.nodeType ? jQuery.grep(key, function(elem) {
      return elem === value !== not;
    }) : "string" != typeof value ? jQuery.grep(key, function(name) {
      return -1 < indexOf.call(value, name) !== not;
    }) : jQuery.filter(value, key, not);
  }
  /**
   * @param {(Array|Element)} cur
   * @param {number} dir
   * @return {?}
   */
  function sibling(cur, dir) {
    for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
    }
    return cur;
  }
  /**
   * @param {?} expPair
   * @return {?}
   */
  function failed(expPair) {
    return expPair;
  }
  /**
   * @param {?} state
   * @return {?}
   */
  function undefined(state) {
    throw state;
  }
  /**
   * @param {!Object} data
   * @param {!Function} path
   * @param {!Function} callback
   * @param {number} args
   * @return {undefined}
   */
  function resolve(data, path, callback, args) {
    var error;
    try {
      if (data && fn(error = data.promise)) {
        error.call(data).done(path).fail(callback);
      } else {
        if (data && fn(error = data.then)) {
          error.call(data, path, callback);
        } else {
          path.apply(void 0, [data].slice(args));
        }
      }
    } catch (success) {
      callback.apply(void 0, [success]);
    }
  }
  /**
   * @return {undefined}
   */
  function $__jsx_onload() {
    document.removeEventListener("DOMContentLoaded", $__jsx_onload);
    window.removeEventListener("load", $__jsx_onload);
    jQuery.ready();
  }
  /**
   * @param {?} context
   * @param {string} match
   * @return {?}
   */
  function dashToCapital(context, match) {
    return match.toUpperCase();
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function camelCase(str) {
    return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(tokensRegExp, dashToCapital);
  }
  /**
   * @return {undefined}
   */
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  /**
   * @param {!Object} elem
   * @param {string} type
   * @param {?} content
   * @return {?}
   */
  function set(elem, type, content) {
    var name;
    var value;
    if (void 0 === content && 1 === elem.nodeType) {
      if (name = "data-" + type.replace(rupper, "-$&").toLowerCase(), "string" == typeof(content = elem.getAttribute(name))) {
        try {
          /** @type {*} */
          content = "true" === (value = content) || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : contribRegex.test(value) ? JSON.parse(value) : value);
        } catch (e) {
        }
        $.set(elem, type, content);
      } else {
        content = void 0;
      }
    }
    return content;
  }
  /**
   * @param {(Object|string)} elem
   * @param {string} prop
   * @param {!Object} valueParts
   * @param {!Object} tween
   * @return {?}
   */
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted;
    var scale;
    /** @type {number} */
    var s = 20;
    /** @type {function(): ?} */
    var currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery.css(elem, prop, "");
    };
    var initial = currentValue();
    var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
    var initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      /** @type {number} */
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      /** @type {number} */
      initialInUnit = +initial || 1;
      for (; s--;) {
        jQuery.style(elem, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
          /** @type {number} */
          s = 0;
        }
        /** @type {number} */
        initialInUnit = initialInUnit / scale;
      }
      /** @type {number} */
      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
  }
  /**
   * @param {!Array} elements
   * @param {boolean} input
   * @return {?}
   */
  function show(elements, input) {
    var display;
    var elem;
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var i = 0;
    var eL = elements.length;
    for (; i < eL; i++) {
      if ((elem = elements[i]).style) {
        display = elem.style.display;
        if (input) {
          if ("none" === display) {
            values[i] = dataPriv.get(elem, "display") || null;
            if (!values[i]) {
              /** @type {string} */
              elem.style.display = "";
            }
          }
          if ("" === elem.style.display && isHidden(elem)) {
            values[i] = (b = c = a = void 0, c = (element = elem).ownerDocument, name = element.nodeName, (b = blocks[name]) || (a = c.body.appendChild(c.createElement(name)), b = jQuery.css(a, "display"), a.parentNode.removeChild(a), "none" === b && (b = "block"), blocks[name] = b));
          }
        } else {
          if ("none" !== display) {
            /** @type {string} */
            values[i] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
    }
    var element;
    var a;
    var c;
    var name;
    var b;
    /** @type {number} */
    i = 0;
    for (; i < eL; i++) {
      if (null != values[i]) {
        elements[i].style.display = values[i];
      }
    }
    return elements;
  }
  /**
   * @param {!Object} context
   * @param {number} tag
   * @return {?}
   */
  function getAll(context, tag) {
    var clone;
    return clone = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && callback(context, tag) ? jQuery.merge([context], clone) : clone;
  }
  /**
   * @param {number} elems
   * @param {!NodeList} refElements
   * @return {undefined}
   */
  function setGlobalEval(elems, refElements) {
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; i < length; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  /**
   * @param {!Array} elems
   * @param {!Object} context
   * @param {!Array} result
   * @param {!Object} element
   * @param {string} ignored
   * @return {?}
   */
  function buildFragment(elems, context, result, element, ignored) {
    var elem;
    var tmp;
    var tag;
    var wrap;
    var ret;
    var j;
    var fragment = context.createDocumentFragment();
    /** @type {!Array} */
    var results = [];
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; i < length; i++) {
      if ((elem = elems[i]) || 0 === elem) {
        if ("object" === type(elem)) {
          jQuery.merge(results, elem.nodeType ? [elem] : elem);
        } else {
          if (re_commas.test(elem)) {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (fullLinkRegex.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
            j = wrap[0];
            for (; j--;) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(results, tmp.childNodes);
            /** @type {string} */
            (tmp = fragment.firstChild).textContent = "";
          } else {
            results.push(context.createTextNode(elem));
          }
        }
      }
    }
    /** @type {string} */
    fragment.textContent = "";
    /** @type {number} */
    i = 0;
    for (; elem = results[i++];) {
      if (element && -1 < jQuery.inArray(elem, element)) {
        if (ignored) {
          ignored.push(elem);
        }
      } else {
        if (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), result) {
          /** @type {number} */
          j = 0;
          for (; elem = tmp[j++];) {
            if (opacityRe.test(elem.type || "")) {
              result.push(elem);
            }
          }
        }
      }
    }
    return fragment;
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @return {?}
   */
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (e) {
    }
  }
  /**
   * @param {!Object} f
   * @param {!Object} a
   * @param {!Object} value
   * @param {!Object} key
   * @param {!Object} fn
   * @param {number} data
   * @return {?}
   */
  function bind(f, a, value, key, fn, data) {
    var handler;
    var n;
    if ("object" == typeof a) {
      for (n in "string" != typeof value && (key = key || value, value = void 0), a) {
        bind(f, n, value, key, a[n], data);
      }
      return f;
    }
    if (null == key && null == fn ? (fn = value, key = value = void 0) : null == fn && ("string" == typeof value ? (fn = key, key = void 0) : (fn = key, key = value, value = void 0)), false === fn) {
      /** @type {function(): ?} */
      fn = returnFalse;
    } else {
      if (!fn) {
        return f;
      }
    }
    return 1 === data && (handler = fn, (fn = function(type) {
      return jQuery().off(type), handler.apply(this, arguments);
    }).guid = handler.guid || (handler.guid = jQuery.guid++)), f.each(function() {
      jQuery.event.add(this, a, fn, key, value);
    });
  }
  /**
   * @param {!Array} elem
   * @param {!Element} content
   * @return {?}
   */
  function manipulationTarget(elem, content) {
    return callback(elem, "table") && callback(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
  }
  /**
   * @param {!Element} elem
   * @return {?}
   */
  function root(elem) {
    return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function selector(s) {
    return "true/" === (s.type || "").slice(0, 5) ? s.type = s.type.slice(5) : s.removeAttribute("type"), s;
  }
  /**
   * @param {boolean} node
   * @param {!Object} elem
   * @return {undefined}
   */
  function cloneCopyEvent(node, elem) {
    var i;
    var tableslen;
    var key;
    var c;
    var s;
    var fn;
    var children;
    var obj;
    if (1 === elem.nodeType) {
      if (dataPriv.hasData(node) && (c = dataPriv.access(node), s = dataPriv.set(elem, c), obj = c.events)) {
        for (key in delete s.handle, s.events = {}, obj) {
          /** @type {number} */
          i = 0;
          tableslen = obj[key].length;
          for (; i < tableslen; i++) {
            jQuery.event.add(elem, key, obj[key][i]);
          }
        }
      }
      if ($.hasData(node)) {
        fn = $.access(node);
        children = jQuery.extend({}, fn);
        $.set(elem, children);
      }
    }
  }
  /**
   * @param {!Object} collection
   * @param {!Array} args
   * @param {!Function} callback
   * @param {boolean} ignored
   * @return {?}
   */
  function domManip(collection, args, callback, ignored) {
    /** @type {!Array<?>} */
    args = concat.apply([], args);
    var fragment;
    var first;
    var nodes;
    var tableslen;
    var node;
    var doc;
    /** @type {number} */
    var i = 0;
    var totalItems = collection.length;
    /** @type {number} */
    var minimumIdx = totalItems - 1;
    var str = args[0];
    var ret = fn(str);
    if (ret || 1 < totalItems && "string" == typeof str && !support.checkClone && partten.test(str)) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (ret) {
          args[0] = str.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (totalItems && (first = (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
      tableslen = (nodes = jQuery.map(getAll(fragment, "script"), root)).length;
      for (; i < totalItems; i++) {
        node = fragment;
        if (i !== minimumIdx) {
          node = jQuery.clone(node, true, true);
          if (tableslen) {
            jQuery.merge(nodes, getAll(node, "script"));
          }
        }
        callback.call(collection[i], node, i);
      }
      if (tableslen) {
        doc = nodes[nodes.length - 1].ownerDocument;
        jQuery.map(nodes, selector);
        /** @type {number} */
        i = 0;
        for (; i < tableslen; i++) {
          node = nodes[i];
          if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
            if (node.src && "module" !== (node.type || "").toLowerCase()) {
              if (jQuery._evalUrl) {
                jQuery._evalUrl(node.src);
              }
            } else {
              createElement(node.textContent.replace(rcharset, ""), doc, node);
            }
          }
        }
      }
    }
    return collection;
  }
  /**
   * @param {!Object} nodes
   * @param {!Function} selector
   * @param {string} keepData
   * @return {?}
   */
  function remove(nodes, selector, keepData) {
    var elem;
    var elems = selector ? jQuery.filter(selector, nodes) : nodes;
    /** @type {number} */
    var i = 0;
    for (; null != (elem = elems[i]); i++) {
      if (!(keepData || 1 !== elem.nodeType)) {
        jQuery.cleanData(getAll(elem));
      }
      if (elem.parentNode) {
        if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
          setGlobalEval(getAll(elem, "script"));
        }
        elem.parentNode.removeChild(elem);
      }
    }
    return nodes;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} computed
   * @return {?}
   */
  function curCSS(elem, name, computed) {
    var minWidth;
    var width;
    var maxWidth;
    var ret;
    var style = elem.style;
    return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && inlineAttributeCommentRegex.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = 
    maxWidth)), void 0 !== ret ? ret + "" : ret;
  }
  /**
   * @param {?} conditionFn
   * @param {!Function} hookFn
   * @return {?}
   */
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get : function() {
        if (!conditionFn()) {
          return (this.get = hookFn).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function camelize(name) {
    var t = jQuery.cssProps[name];
    return t || (t = jQuery.cssProps[name] = function(name) {
      if (name in style) {
        return name;
      }
      var UserSelect = name[0].toUpperCase() + name.slice(1);
      /** @type {number} */
      var i = prefixes.length;
      for (; i--;) {
        if ((name = prefixes[i] + UserSelect) in style) {
          return name;
        }
      }
    }(name) || name), t;
  }
  /**
   * @param {!Object} type
   * @param {string} value
   * @param {string} name
   * @return {?}
   */
  function _set(type, value, name) {
    /** @type {(Array<string>|null)} */
    var matches = regex.exec(value);
    return matches ? Math.max(0, matches[2] - (name || 0)) + (matches[3] || "px") : value;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {string} extra
   * @param {boolean} isBorderBox
   * @param {!Object} styles
   * @param {number} themeName
   * @return {?}
   */
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles, themeName) {
    /** @type {number} */
    var i = "width" === name ? 1 : 0;
    /** @type {number} */
    var value = 0;
    /** @type {number} */
    var val = 0;
    if (extra === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (; i < 4; i = i + 2) {
      if ("margin" === extra) {
        val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if ("content" === extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if ("margin" !== extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if ("padding" !== extra) {
          val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } else {
          value = value + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return !isBorderBox && 0 <= themeName && (val = val + Math.max(0, Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - themeName - val - value - .5))), val;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} extra
   * @return {?}
   */
  function getWidthOrHeight(elem, name, extra) {
    var styles = getStyles(elem);
    var value = curCSS(elem, name, styles);
    /** @type {boolean} */
    var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
    /** @type {boolean} */
    var valueIsBorderBox = isBorderBox;
    if (rnumnonpx.test(value)) {
      if (!extra) {
        return value;
      }
      /** @type {string} */
      value = "auto";
    }
    return valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || value === elem.style[name]), ("auto" === value || !parseFloat(value) && "inline" === jQuery.css(elem, "display", false, styles)) && (value = elem["offset" + name[0].toUpperCase() + name.slice(1)], valueIsBorderBox = true), (value = parseFloat(value) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, value) + "px";
  }
  /**
   * @param {!Array} type
   * @param {!Function} context
   * @param {string} object
   * @param {string} end
   * @param {number} easing
   * @return {?}
   */
  function Tween(type, context, object, end, easing) {
    return new Tween.prototype.init(type, context, object, end, easing);
  }
  /**
   * @return {undefined}
   */
  function step() {
    if (Ze) {
      if (false === document.hidden && window.requestAnimationFrame) {
        window.requestAnimationFrame(step);
      } else {
        window.setTimeout(step, jQuery.fx.interval);
      }
      jQuery.fx.tick();
    }
  }
  /**
   * @return {?}
   */
  function createFxNow() {
    return window.setTimeout(function() {
      fxNow = void 0;
    }), fxNow = Date.now();
  }
  /**
   * @param {string} type
   * @param {number} includeWidth
   * @return {?}
   */
  function genFx(type, includeWidth) {
    var which;
    /** @type {number} */
    var i = 0;
    var attrs = {
      height : type
    };
    /** @type {number} */
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i = i + (2 - includeWidth)) {
      attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
    }
    return includeWidth && (attrs.opacity = attrs.width = type), attrs;
  }
  /**
   * @param {?} value
   * @param {string} prop
   * @param {?} animation
   * @return {?}
   */
  function createTween(value, prop, animation) {
    var tween;
    var prev = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
    /** @type {number} */
    var p = 0;
    var s = prev.length;
    for (; p < s; p++) {
      if (tween = prev[p].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  /**
   * @param {!Object} elem
   * @param {?} properties
   * @param {!Object} options
   * @return {?}
   */
  function Animation(elem, properties, options) {
    var result;
    var s;
    /** @type {number} */
    var index = 0;
    var ncells = Animation.prefilters.length;
    var deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    });
    /**
     * @return {?}
     */
    var tick = function() {
      if (s) {
        return false;
      }
      var currentTime = fxNow || createFxNow();
      /** @type {number} */
      var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
      /** @type {number} */
      var percent = 1 - (remaining / animation.duration || 0);
      /** @type {number} */
      var i = 0;
      var length = animation.tweens.length;
      for (; i < length; i++) {
        animation.tweens[i].run(percent);
      }
      return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), false);
    };
    var animation = deferred.promise({
      elem : elem,
      props : jQuery.extend({}, properties),
      opts : jQuery.extend(true, {
        specialEasing : {},
        easing : jQuery.easing._default
      }, options),
      originalProperties : properties,
      originalOptions : options,
      startTime : fxNow || createFxNow(),
      duration : options.duration,
      tweens : [],
      createTween : function(prop, end) {
        var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        return animation.tweens.push(result), result;
      },
      stop : function(value) {
        /** @type {number} */
        var i = 0;
        var mid = value ? animation.tweens.length : 0;
        if (s) {
          return this;
        }
        /** @type {boolean} */
        s = true;
        for (; i < mid; i++) {
          animation.tweens[i].run(1);
        }
        return value ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, value])) : deferred.rejectWith(elem, [animation, value]), this;
      }
    });
    var props = animation.props;
    (function(res, object) {
      var key;
      var name;
      var value;
      var obj;
      var hooks;
      for (key in res) {
        if (value = object[name = camelCase(key)], obj = res[key], Array.isArray(obj) && (value = obj[1], obj = res[key] = obj[0]), key !== name && (res[name] = obj, delete res[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
          for (key in obj = hooks.expand(obj), delete res[name], obj) {
            if (!(key in res)) {
              res[key] = obj[key];
              object[key] = value;
            }
          }
        } else {
          object[name] = value;
        }
      }
    })(props, animation.opts.specialEasing);
    for (; index < ncells; index++) {
      if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
        return fn(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
      }
    }
    return jQuery.map(props, createTween, animation), fn(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
      elem : elem,
      anim : animation,
      queue : animation.opts.queue
    })), animation;
  }
  /**
   * @param {string} i
   * @return {?}
   */
  function log(i) {
    return (i.match(e) || []).join(" ");
  }
  /**
   * @param {!Node} elem
   * @return {?}
   */
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function each(value) {
    return Array.isArray(value) ? value : "string" == typeof value && value.match(e) || [];
  }
  /**
   * @param {string} o
   * @param {(Object|string)} data
   * @param {string} target
   * @param {!Function} next
   * @return {undefined}
   */
  function extend(o, data, target, next) {
    var p;
    if (Array.isArray(data)) {
      jQuery.each(data, function(canCreateDiscussions, response) {
        if (target || _stringBuilder.test(o)) {
          next(o, response);
        } else {
          extend(o + "[" + ("object" == typeof response && null != response ? canCreateDiscussions : "") + "]", response, target, next);
        }
      });
    } else {
      if (target || "object" !== type(data)) {
        next(o, data);
      } else {
        for (p in data) {
          extend(o + "[" + p + "]", data[p], target, next);
        }
      }
    }
  }
  /**
   * @param {!Object} structure
   * @return {?}
   */
  function addToPrefiltersOrTransports(structure) {
    return function(val, t) {
      if ("string" != typeof val) {
        /** @type {string} */
        t = val;
        /** @type {string} */
        val = "*";
      }
      var type;
      /** @type {number} */
      var c = 0;
      var replies = val.toLowerCase().match(e) || [];
      if (fn(t)) {
        for (; type = replies[c++];) {
          if ("+" === type[0]) {
            type = type.slice(1) || "*";
            (structure[type] = structure[type] || []).unshift(t);
          } else {
            (structure[type] = structure[type] || []).push(t);
          }
        }
      }
    };
  }
  /**
   * @param {!Object} structure
   * @param {?} settings
   * @param {!Object} originalOptions
   * @param {?} jqXHR
   * @return {?}
   */
  function inspectPrefiltersOrTransports(structure, settings, originalOptions, jqXHR) {
    /**
     * @param {string} index
     * @return {?}
     */
    function inspect(index) {
      var adapterFetchCalledWith;
      return parameters[index] = true, jQuery.each(structure[index] || [], function(canCreateDiscussions, prefilterOrFactory) {
        var options = prefilterOrFactory(settings, originalOptions, jqXHR);
        return "string" != typeof options || seekingTransport || parameters[options] ? seekingTransport ? !(adapterFetchCalledWith = options) : void 0 : (settings.dataTypes.unshift(options), inspect(options), false);
      }), adapterFetchCalledWith;
    }
    var parameters = {};
    /** @type {boolean} */
    var seekingTransport = structure === transports;
    return inspect(settings.dataTypes[0]) || !parameters["*"] && inspect("*");
  }
  /**
   * @param {?} target
   * @param {?} opts
   * @return {?}
   */
  function ajaxExtend(target, opts) {
    var key;
    var deep;
    var flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in opts) {
      if (void 0 !== opts[key]) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
      }
    }
    return deep && jQuery.extend(true, target, deep), target;
  }
  /** @type {!Array} */
  var arr = [];
  var document = window.document;
  /** @type {function(!Object): (Object|null)} */
  var getProto = Object.getPrototypeOf;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = arr.slice;
  /** @type {function(this:*, ...*): !Array<?>} */
  var concat = arr.concat;
  /** @type {function(this:IArrayLike<T>, ...T): number} */
  var push = arr.push;
  /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
  var indexOf = arr.indexOf;
  var class2type = {};
  /** @type {function(this:*): string} */
  var toString = class2type.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = class2type.hasOwnProperty;
  /** @type {function(this:!Function): string} */
  var fnToString = hasOwn.toString;
  /** @type {string} */
  var Mixin2 = fnToString.call(Object);
  var support = {};
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var fn = function(obj) {
    return "function" == typeof obj && "number" != typeof obj.nodeType;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var test = function(obj) {
    return null != obj && obj === obj.window;
  };
  var packet = {
    type : true,
    src : true,
    noModule : true
  };
  /**
   * @param {!Array} selector
   * @param {!Object} context
   * @return {?}
   */
  var jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
  };
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  jQuery.fn = jQuery.prototype = {
    jquery : "3.3.1",
    constructor : jQuery,
    length : 0,
    toArray : function() {
      return slice.call(this);
    },
    get : function(num) {
      return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
    },
    pushStack : function(a) {
      var elm = jQuery.merge(this.constructor(), a);
      return elm.prevObject = this, elm;
    },
    each : function(callback) {
      return jQuery.each(this, callback);
    },
    map : function(fn) {
      return this.pushStack(jQuery.map(this, function(elem, event) {
        return fn.call(elem, event, elem);
      }));
    },
    slice : function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    eq : function(id) {
      var size = this.length;
      var location = +id + (id < 0 ? size : 0);
      return this.pushStack(0 <= location && location < size ? [this[location]] : []);
    },
    end : function() {
      return this.prevObject || this.constructor();
    },
    push : push,
    sort : arr.sort,
    splice : arr.splice
  };
  /** @type {function(): ?} */
  jQuery.extend = jQuery.fn.extend = function() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    /** @type {number} */
    var i = 1;
    /** @type {number} */
    var length = arguments.length;
    /** @type {boolean} */
    var deep = false;
    if ("boolean" == typeof target) {
      /** @type {boolean} */
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (!("object" == typeof target || fn(target))) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if (null != (options = arguments[i])) {
        for (name in options) {
          src = target[name];
          if (target !== (copy = options[name])) {
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              if (copyIsArray) {
                /** @type {boolean} */
                copyIsArray = false;
                clone = src && Array.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }
              target[name] = jQuery.extend(deep, clone, copy);
            } else {
              if (void 0 !== copy) {
                target[name] = copy;
              }
            }
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando : "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady : true,
    error : function(type) {
      throw new Error(type);
    },
    noop : function() {
    },
    isPlainObject : function(obj) {
      var proto;
      var hasOwnProperty;
      return !(!obj || "[object Object]" !== toString.call(obj) || (proto = getProto(obj)) && ("function" != typeof(hasOwnProperty = hasOwn.call(proto, "constructor") && proto.constructor) || fnToString.call(hasOwnProperty) !== Mixin2));
    },
    isEmptyObject : function(obj) {
      var key;
      for (key in obj) {
        return false;
      }
      return true;
    },
    globalEval : function(script) {
      createElement(script);
    },
    each : function(object, callback) {
      var aLength;
      /** @type {number} */
      var i = 0;
      if (isArrayLike(object)) {
        aLength = object.length;
        for (; i < aLength && false !== callback.call(object[i], i, object[i]); i++) {
        }
      } else {
        for (i in object) {
          if (false === callback.call(object[i], i, object[i])) {
            break;
          }
        }
      }
      return object;
    },
    trim : function(text) {
      return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
    },
    makeArray : function(arr, o) {
      var obj = o || [];
      return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
    },
    inArray : function(elem, arr, i) {
      return null == arr ? -1 : indexOf.call(arr, elem, i);
    },
    merge : function(data, options) {
      /** @type {number} */
      var _jlen = +options.length;
      /** @type {number} */
      var k = 0;
      var index = data.length;
      for (; k < _jlen; k++) {
        data[index++] = options[k];
      }
      return data.length = index, data;
    },
    grep : function(array, callback, a) {
      /** @type {!Array} */
      var ret = [];
      /** @type {number} */
      var i = 0;
      var length = array.length;
      /** @type {boolean} */
      var booA = !a;
      for (; i < length; i++) {
        if (!callback(array[i], i) !== booA) {
          ret.push(array[i]);
        }
      }
      return ret;
    },
    map : function(obj, _, type) {
      var r;
      var value;
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var args = [];
      if (isArrayLike(obj)) {
        r = obj.length;
        for (; i < r; i++) {
          if (null != (value = _(obj[i], i, type))) {
            args.push(value);
          }
        }
      } else {
        for (i in obj) {
          if (null != (value = _(obj[i], i, type))) {
            args.push(value);
          }
        }
      }
      return concat.apply([], args);
    },
    guid : 1,
    support : support
  });
  if ("function" == typeof Symbol) {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
    class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
  });
  var Sizzle = function(window) {
    /**
     * @param {string} selector
     * @param {!Object} context
     * @param {!Array} results
     * @param {!Array} seed
     * @return {?}
     */
    function Sizzle(selector, context, results, seed) {
      var m;
      var i;
      var elem;
      var nid;
      var match;
      var groups;
      var newSelector;
      var newContext = context && context.ownerDocument;
      var undefined = context ? context.nodeType : 9;
      if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
        return results;
      }
      if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
        if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
          if (m = match[1]) {
            if (9 === undefined) {
              if (!(elem = context.getElementById(m))) {
                return results;
              }
              if (elem.id === m) {
                return results.push(elem), results;
              }
            } else {
              if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                return results.push(elem), results;
              }
            }
          } else {
            if (match[2]) {
              return push.apply(results, context.getElementsByTagName(selector)), results;
            }
            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              return push.apply(results, context.getElementsByClassName(m)), results;
            }
          }
        }
        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (1 !== undefined) {
            /** @type {!Object} */
            newContext = context;
            /** @type {string} */
            newSelector = selector;
          } else {
            if ("object" !== context.nodeName.toLowerCase()) {
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
              i = (groups = tokenize(selector)).length;
              for (; i--;) {
                /** @type {string} */
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context;
            }
          }
          if (newSelector) {
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (e) {
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * @return {?}
     */
    function createCache() {
      /** @type {!Array} */
      var lengths = [];
      return function cache(duration, url) {
        return lengths.push(duration + " ") > Expr.cacheLength && delete cache[lengths.shift()], cache[duration + " "] = url;
      };
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function markFunction(fn) {
      return fn[expando] = true, fn;
    }
    /**
     * @param {!Function} expect
     * @return {?}
     */
    function assert(expect) {
      var wrap = document.createElement("fieldset");
      try {
        return !!expect(wrap);
      } catch (e) {
        return false;
      } finally {
        if (wrap.parentNode) {
          wrap.parentNode.removeChild(wrap);
        }
        /** @type {null} */
        wrap = null;
      }
    }
    /**
     * @param {string} attrs
     * @param {!Function} handler
     * @return {undefined}
     */
    function addHandle(attrs, handler) {
      var arr = attrs.split("|");
      var i = arr.length;
      for (; i--;) {
        /** @type {!Function} */
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * @param {!Element} a
     * @param {!Element} b
     * @return {?}
     */
    function siblingCheck(a, b) {
      var cur = b && a;
      var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
      if (.num_const) {
        return .num_const;
      }
      if (cur) {
        for (; cur = cur.nextSibling;) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    /**
     * @param {!Object} selector
     * @return {?}
     */
    function jQuerify(selector) {
      return function(item) {
        return "input" === item.nodeName.toLowerCase() && item.type === selector;
      };
    }
    /**
     * @param {!Object} type
     * @return {?}
     */
    function createButtonPseudo(type) {
      return function(section) {
        var undefined = section.nodeName.toLowerCase();
        return ("input" === undefined || "button" === undefined) && section.type === type;
      };
    }
    /**
     * @param {boolean} disabled
     * @return {?}
     */
    function createDisabledPseudo(disabled) {
      return function(elem) {
        return "form" in elem ? elem.parentNode && false === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
      };
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function createPositionalPseudo(fn) {
      return markFunction(function(f) {
        return f = +f, markFunction(function(h, i) {
          var k;
          var args = fn([], h.length, f);
          var l = args.length;
          for (; l--;) {
            if (h[k = args[l]]) {
              /** @type {boolean} */
              h[k] = !(i[k] = h[k]);
            }
          }
        });
      });
    }
    /**
     * @param {!Node} context
     * @return {?}
     */
    function testContext(context) {
      return context && void 0 !== context.getElementsByTagName && context;
    }
    /**
     * @return {undefined}
     */
    function setFilters() {
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function toSelector(tokens) {
      /** @type {number} */
      var i = 0;
      var numTokens = tokens.length;
      /** @type {string} */
      var selector = "";
      for (; i < numTokens; i++) {
        /** @type {string} */
        selector = selector + tokens[i].value;
      }
      return selector;
    }
    /**
     * @param {!Function} matcher
     * @param {!Object} combinator
     * @param {string} base
     * @return {?}
     */
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir;
      var skip = combinator.next;
      var key = skip || dir;
      var checkNonElements = base && "parentNode" === key;
      /** @type {number} */
      var doneName = done++;
      return combinator.first ? function(elem, stat, context) {
        for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) {
            return matcher(elem, stat, context);
          }
        }
        return false;
      } : function(elem, stat, context) {
        var oldCache;
        var uniqueCache;
        var outerCache;
        /** @type {!Array} */
        var newCache = [dirruns, doneName];
        if (context) {
          for (; elem = elem[dir];) {
            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, stat, context)) {
              return true;
            }
          }
        } else {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              if (uniqueCache = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else {
                if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                }
                if ((uniqueCache[key] = newCache)[2] = matcher(elem, stat, context)) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    /**
     * @param {!Object} matchers
     * @return {?}
     */
    function elementMatcher(matchers) {
      return 1 < matchers.length ? function(elem, context, xml) {
        var i = matchers.length;
        for (; i--;) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    /**
     * @param {!Array} obj
     * @param {!Object} selector
     * @param {!Function} format
     * @param {!Object} a
     * @param {string} b
     * @return {?}
     */
    function fn(obj, selector, format, a, b) {
      var val;
      /** @type {!Array} */
      var ret = [];
      /** @type {number} */
      var o = 0;
      var ol = obj.length;
      /** @type {boolean} */
      var isDrawLayerVisibled = null != selector;
      for (; o < ol; o++) {
        if (val = obj[o]) {
          if (!(format && !format(val, a, b))) {
            ret.push(val);
            if (isDrawLayerVisibled) {
              selector.push(o);
            }
          }
        }
      }
      return ret;
    }
    /**
     * @param {!Function} n
     * @param {!Object} prev
     * @param {!Function} e
     * @param {!Object} t
     * @param {!Object} callback
     * @param {!Object} scope
     * @return {?}
     */
    function render(n, prev, e, t, callback, scope) {
      return t && !t[expando] && (t = render(t)), callback && !callback[expando] && (callback = render(callback, scope)), markFunction(function(data, list, context, d) {
        var key;
        var name;
        var value;
        /** @type {!Array} */
        var val = [];
        /** @type {!Array} */
        var options = [];
        var start = list.length;
        var parts = data || function(selector, set, results) {
          /** @type {number} */
          var i = 0;
          var l = set.length;
          for (; i < l; i++) {
            Sizzle(selector, set[i], results);
          }
          return results;
        }(prev || "*", context.nodeType ? [context] : context, []);
        var window = !n || !data && prev ? parts : fn(parts, val, n, context, d);
        var target = e ? callback || (data ? n : start || t) ? [] : list : window;
        if (e && e(window, target, context, d), t) {
          key = fn(target, options);
          t(key, [], context, d);
          name = key.length;
          for (; name--;) {
            if (value = key[name]) {
              /** @type {boolean} */
              target[options[name]] = !(window[options[name]] = value);
            }
          }
        }
        if (data) {
          if (callback || n) {
            if (callback) {
              /** @type {!Array} */
              key = [];
              name = target.length;
              for (; name--;) {
                if (value = target[name]) {
                  key.push(window[name] = value);
                }
              }
              callback(null, target = [], key, d);
            }
            name = target.length;
            for (; name--;) {
              if ((value = target[name]) && -1 < (key = callback ? indexOf(data, value) : val[name])) {
                /** @type {boolean} */
                data[key] = !(list[key] = value);
              }
            }
          }
        } else {
          target = fn(target === list ? target.splice(start, target.length) : target);
          if (callback) {
            callback(null, list, target, d);
          } else {
            push.apply(list, target);
          }
        }
      });
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function matcherFromTokens(tokens) {
      var checkContext;
      var matcher;
      var j;
      var len = tokens.length;
      var leadingRelative = Expr.relative[tokens[0].type];
      var implicitRelative = leadingRelative || Expr.relative[" "];
      /** @type {number} */
      var i = leadingRelative ? 1 : 0;
      var matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true);
      var matchAnyContext = addCombinator(function(value) {
        return -1 < indexOf(checkContext, value);
      }, implicitRelative, true);
      /** @type {!Array} */
      var matchers = [function(elem, context, xml) {
        var r = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        return checkContext = null, r;
      }];
      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          /** @type {!Array} */
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
            /** @type {number} */
            j = ++i;
            for (; j < len && !Expr.relative[tokens[j].type]; j++) {
            }
            return render(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
              value : " " === tokens[i - 2].type ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    var i;
    var support;
    var Expr;
    var isUndefined;
    var isXML;
    var tokenize;
    var compile;
    var select;
    var outermostContext;
    var sortInput;
    var ret;
    var setDocument;
    var document;
    var docElem;
    var documentIsHTML;
    var rbuggyQSA;
    var rbuggyMatches;
    var matches;
    var contains;
    /** @type {string} */
    var expando = "sizzle" + 1 * new Date;
    var preferredDoc = window.document;
    /** @type {number} */
    var dirruns = 0;
    /** @type {number} */
    var done = 0;
    var classCache = createCache();
    var tokenCache = createCache();
    var compilerCache = createCache();
    /**
     * @param {?} type
     * @param {?} string
     * @return {?}
     */
    var time = function(type, string) {
      return type === string && (ret = true), 0;
    };
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = {}.hasOwnProperty;
    /** @type {!Array} */
    var arr = [];
    /** @type {function(this:IArrayLike<T>): T} */
    var pop = arr.pop;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push_native = arr.push;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /**
     * @param {string} list
     * @param {!Object} value
     * @return {?}
     */
    var indexOf = function(list, value) {
      /** @type {number} */
      var i = 0;
      var listLength = list.length;
      for (; i < listLength; i++) {
        if (list[i] === value) {
          return i;
        }
      }
      return -1;
    };
    /** @type {string} */
    var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    /** @type {string} */
    var q = "[\\x20\\t\\r\\n\\f]";
    /** @type {string} */
    var escRightBracket = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+";
    /** @type {string} */
    var _end2 = "\\[" + q + "*(" + escRightBracket + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + q + "*\\]";
    /** @type {string} */
    var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
    /** @type {!RegExp} */
    var entityEscapeRegExp = new RegExp(q + "+", "g");
    /** @type {!RegExp} */
    var rtrim = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g");
    /** @type {!RegExp} */
    var chunker = new RegExp("^" + q + "*," + q + "*");
    /** @type {!RegExp} */
    var rcomma = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*");
    /** @type {!RegExp} */
    var rattributeQuotes = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g");
    /** @type {!RegExp} */
    var rpseudo = new RegExp(pseudos);
    /** @type {!RegExp} */
    var ridentifier = new RegExp("^" + escRightBracket + "$");
    var matchExpr = {
      ID : new RegExp("^#(" + escRightBracket + ")"),
      CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
      TAG : new RegExp("^(" + escRightBracket + "|[*])"),
      ATTR : new RegExp("^" + _end2),
      PSEUDO : new RegExp("^" + pseudos),
      CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
      bool : new RegExp("^(?:" + value + ")$", "i"),
      needsContext : new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
    };
    /** @type {!RegExp} */
    var inputNodeNames = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var rnoType = /^h\d$/i;
    /** @type {!RegExp} */
    var rnative = /^[^{]+\{\s*\[native \w/;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    /** @type {!RegExp} */
    var RE_PSEUDOS = /[+~]/;
    /** @type {!RegExp} */
    var name = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig");
    /**
     * @param {?} n
     * @param {string} name
     * @param {boolean} elem
     * @return {?}
     */
    var data = function(n, name, elem) {
      /** @type {number} */
      var c = "0x" + name - 65536;
      return c != c || elem ? name : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320);
    };
    /** @type {!RegExp} */
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    /**
     * @param {string} text
     * @param {number} ch
     * @return {?}
     */
    var fcssescape = function(text, ch) {
      return ch ? "\x00" === text ? "?" : text.slice(0, -1) + "\\" + text.charCodeAt(text.length - 1).toString(16) + " " : "\\" + text;
    };
    /**
     * @return {undefined}
     */
    var unloadHandler = function() {
      setDocument();
    };
    var disabledAncestor = addCombinator(function(elem) {
      return true === elem.disabled && ("form" in elem || "label" in elem);
    }, {
      dir : "parentNode",
      next : "legend"
    });
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (n) {
      push = {
        apply : arr.length ? function(target, obj) {
          push_native.apply(target, slice.call(obj));
        } : function(obj, key) {
          var i = obj.length;
          /** @type {number} */
          var kIndex = 0;
          for (; obj[i++] = key[kIndex++];) {
          }
          /** @type {number} */
          obj.length = i - 1;
        }
      };
    }
    for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return !!documentElement && "HTML" !== documentElement.nodeName;
    }, setDocument = Sizzle.setDocument = function(node) {
      var init;
      var subWindow;
      var doc = node ? node.ownerDocument || node : preferredDoc;
      return doc !== document && 9 === doc.nodeType && doc.documentElement && (docElem = (document = doc).documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, false) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(elm) {
        return elm.className = "i", !elm.getAttribute("className");
      }), support.getElementsByTagName = assert(function(testee) {
        return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
      }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(body) {
        return docElem.appendChild(body).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
      }), support.getById ? (Expr.filter.ID = function(elem) {
        var match = elem.replace(name, data);
        return function(e) {
          return e.getAttribute("id") === match;
        };
      }, Expr.find.ID = function(elem, context) {
        if (void 0 !== context.getElementById && documentIsHTML) {
          var c_style = context.getElementById(elem);
          return c_style ? [c_style] : [];
        }
      }) : (Expr.filter.ID = function(elem) {
        var n = elem.replace(name, data);
        return function(elem) {
          var exported = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
          return exported && exported.value === n;
        };
      }, Expr.find.ID = function(value, context) {
        if (void 0 !== context.getElementById && documentIsHTML) {
          var attr;
          var r;
          var ret;
          var tmp = context.getElementById(value);
          if (tmp) {
            if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
              return [tmp];
            }
            ret = context.getElementsByName(value);
            /** @type {number} */
            r = 0;
            for (; tmp = ret[r++];) {
              if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                return [tmp];
              }
            }
          }
          return [];
        }
      }), Expr.find.TAG = support.getElementsByTagName ? function(v, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(v) : support.qsa ? t.querySelectorAll(v) : void 0;
      } : function(selector, document) {
        var first;
        /** @type {!Array} */
        var tmp = [];
        /** @type {number} */
        var i = 0;
        var results = document.getElementsByTagName(selector);
        if ("*" === selector) {
          for (; first = results[i++];) {
            if (1 === first.nodeType) {
              tmp.push(first);
            }
          }
          return tmp;
        }
        return results;
      }, Expr.find.CLASS = support.getElementsByClassName && function(l, docDom) {
        if (void 0 !== docDom.getElementsByClassName && documentIsHTML) {
          return docDom.getElementsByClassName(l);
        }
      }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(container) {
        /** @type {string} */
        docElem.appendChild(container).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
        if (container.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + q + "*(?:''|\"\")");
        }
        if (!container.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + q + "*(?:value|" + value + ")");
        }
        if (!container.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        }
        if (!container.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }
        if (!container.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }
      }), assert(function(el) {
        /** @type {string} */
        el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D");
        if (el.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + q + "*[*^$|!~]?=");
        }
        if (2 !== el.querySelectorAll(":enabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        /** @type {boolean} */
        docElem.appendChild(el).disabled = true;
        if (2 !== el.querySelectorAll(":disabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        el.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
        support.disconnectedMatch = matches.call(el, "*");
        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), init = rnative.test(docElem.compareDocumentPosition), contains = init || rnative.test(docElem.contains) ? function(a, n) {
        var name = 9 === a.nodeType ? a.documentElement : a;
        var b = n && n.parentNode;
        return a === b || !(!b || 1 !== b.nodeType || !(name.contains ? name.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
      } : function(a, b) {
        if (b) {
          for (; b = b.parentNode;) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      }, time = init ? function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        /** @type {number} */
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return compare || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
      } : function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        var cur;
        /** @type {number} */
        var i = 0;
        var aup = a.parentNode;
        var bup = b.parentNode;
        /** @type {!Array} */
        var ap = [a];
        /** @type {!Array} */
        var bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }
        if (aup === bup) {
          return siblingCheck(a, b);
        }
        /** @type {!HTMLElement} */
        cur = a;
        for (; cur = cur.parentNode;) {
          ap.unshift(cur);
        }
        /** @type {!HTMLElement} */
        cur = b;
        for (; cur = cur.parentNode;) {
          bp.unshift(cur);
        }
        for (; ap[i] === bp[i];) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }), document;
    }, Sizzle.matches = function(expr, set) {
      return Sizzle(expr, null, null, set);
    }, Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
            return ret;
          }
        } catch (e) {
        }
      }
      return 0 < Sizzle(expr, document, null, [elem]).length;
    }, Sizzle.contains = function(context, item) {
      return (context.ownerDocument || context) !== document && setDocument(context), contains(context, item);
    }, Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()];
      var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
      return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    }, Sizzle.escape = function(text) {
      return (text + "").replace(rcssescape, fcssescape);
    }, Sizzle.error = function(type) {
      throw new Error("Syntax error, unrecognized expression: " + type);
    }, Sizzle.uniqueSort = function(results) {
      var elem;
      /** @type {!Array} */
      var duplicates = [];
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var i = 0;
      if (ret = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(time), ret) {
        for (; elem = results[i++];) {
          if (elem === results[i]) {
            /** @type {number} */
            j = duplicates.push(i);
          }
        }
        for (; j--;) {
          results.splice(duplicates[j], 1);
        }
      }
      return sortInput = null, results;
    }, isUndefined = Sizzle.getText = function(e) {
      var p;
      /** @type {string} */
      var value = "";
      /** @type {number} */
      var r = 0;
      var type = e.nodeType;
      if (type) {
        if (1 === type || 9 === type || 11 === type) {
          if ("string" == typeof e.textContent) {
            return e.textContent;
          }
          e = e.firstChild;
          for (; e; e = e.nextSibling) {
            value = value + isUndefined(e);
          }
        } else {
          if (3 === type || 4 === type) {
            return e.nodeValue;
          }
        }
      } else {
        for (; p = e[r++];) {
          value = value + isUndefined(p);
        }
      }
      return value;
    }, (Expr = Sizzle.selectors = {
      cacheLength : 50,
      createPseudo : markFunction,
      match : matchExpr,
      attrHandle : {},
      find : {},
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(result) {
          return result[1] = result[1].replace(name, data), result[3] = (result[3] || result[4] || result[5] || "").replace(name, data), "~=" === result[2] && (result[3] = " " + result[3] + " "), result.slice(0, 4);
        },
        CHILD : function(match) {
          return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
        },
        PSEUDO : function(match) {
          var excess;
          var unquoted = !match[6] && match[2];
          return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
        }
      },
      filter : {
        TAG : function(elem) {
          var nodeName = elem.replace(name, data).toLowerCase();
          return "*" === elem ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        CLASS : function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + q + ")" + className + "(" + q + "|$)")) && classCache(className, function(e) {
            return pattern.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR : function(name, string, value) {
          return function(elem) {
            var key = Sizzle.attr(elem, name);
            return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && -1 < key.indexOf(value) : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? -1 < (" " + key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
          };
        },
        CHILD : function(type, what, argument, first, last) {
          /** @type {boolean} */
          var simple = "nth" !== type.slice(0, 3);
          /** @type {boolean} */
          var forward = "last" !== type.slice(-4);
          /** @type {boolean} */
          var isStrict = "of-type" === what;
          return 1 === first && 0 === last ? function(tplDiv) {
            return !!tplDiv.parentNode;
          } : function(elem, canCreateDiscussions, isParentStrict) {
            var cache;
            var uniqueCache;
            var outerCache;
            var node;
            var nodeIndex;
            var start;
            /** @type {string} */
            var dir = simple !== forward ? "nextSibling" : "previousSibling";
            var parent = elem.parentNode;
            var iteratedVal = isStrict && elem.nodeName.toLowerCase();
            /** @type {boolean} */
            var dependency = !isParentStrict && !isStrict;
            /** @type {boolean} */
            var diff = false;
            if (parent) {
              if (simple) {
                for (; dir;) {
                  /** @type {!Node} */
                  node = elem;
                  for (; node = node[dir];) {
                    if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                      return false;
                    }
                  }
                  /** @type {(boolean|string)} */
                  start = dir = "only" === type && !start && "nextSibling";
                }
                return true;
              }
              if (start = [forward ? parent.firstChild : parent.lastChild], forward && dependency) {
                diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                  if (1 === node.nodeType && ++diff && node === elem) {
                    /** @type {!Array} */
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (dependency && (diff = nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]), false === diff) {
                  for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (dependency && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node !== elem));) {
                  }
                }
              }
              return (diff = diff - last) === first || diff % first == 0 && 0 <= diff / first;
            }
          };
        },
        PSEUDO : function(pseudo, argument) {
          var args;
          var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, result) {
            var j;
            var matched = fn(seed, argument);
            var i = matched.length;
            for (; i--;) {
              /** @type {boolean} */
              seed[j = indexOf(seed, matched[i])] = !(result[j] = matched[i]);
            }
          }) : function(responce) {
            return fn(responce, 0, args);
          }) : fn;
        }
      },
      pseudos : {
        not : markFunction(function(selector) {
          /** @type {!Array} */
          var a = [];
          /** @type {!Array} */
          var results = [];
          var matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(a, queue, n, context) {
            var bundle;
            var result = matcher(a, null, context, []);
            var i = a.length;
            for (; i--;) {
              if (bundle = result[i]) {
                /** @type {boolean} */
                a[i] = !(queue[i] = bundle);
              }
            }
          }) : function(sNewObjName, isSlidingUp, context) {
            return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
          };
        }),
        has : markFunction(function(selector) {
          return function(elem) {
            return 0 < Sizzle(selector, elem).length;
          };
        }),
        contains : markFunction(function(widget) {
          return widget = widget.replace(name, data), function(elem) {
            return -1 < (elem.textContent || elem.innerText || isUndefined(elem)).indexOf(widget);
          };
        }),
        lang : markFunction(function(lang) {
          return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(name, data).toLowerCase(), function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
              }
            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
            return false;
          };
        }),
        target : function(type) {
          var charListNotLatin = window.location && window.location.hash;
          return charListNotLatin && charListNotLatin.slice(1) === type.id;
        },
        root : function(elem) {
          return elem === docElem;
        },
        focus : function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        enabled : createDisabledPseudo(false),
        disabled : createDisabledPseudo(true),
        checked : function(elem) {
          var custom = elem.nodeName.toLowerCase();
          return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
        },
        selected : function(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
        },
        empty : function(elem) {
          elem = elem.firstChild;
          for (; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent : function(elem) {
          return !Expr.pseudos.empty(elem);
        },
        header : function(elem) {
          return rnoType.test(elem.nodeName);
        },
        input : function(target) {
          return inputNodeNames.test(target.nodeName);
        },
        button : function(elem) {
          var left = elem.nodeName.toLowerCase();
          return "input" === left && "button" === elem.type || "button" === left;
        },
        text : function(query) {
          var EXT;
          return "input" === query.nodeName.toLowerCase() && "text" === query.type && (null == (EXT = query.getAttribute("type")) || "text" === EXT.toLowerCase());
        },
        first : createPositionalPseudo(function() {
          return [0];
        }),
        last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
          return [isSlidingUp - 1];
        }),
        eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
          return [srcY < 0 ? srcY + pageHeight : srcY];
        }),
        even : createPositionalPseudo(function(e, parentLeft) {
          /** @type {number} */
          var left = 0;
          for (; left < parentLeft; left = left + 2) {
            e.push(left);
          }
          return e;
        }),
        odd : createPositionalPseudo(function(e, parentLeft) {
          /** @type {number} */
          var left = 1;
          for (; left < parentLeft; left = left + 2) {
            e.push(left);
          }
          return e;
        }),
        lt : createPositionalPseudo(function(carr, pageHeight, srcY) {
          var val = srcY < 0 ? srcY + pageHeight : srcY;
          for (; 0 <= --val;) {
            carr.push(val);
          }
          return carr;
        }),
        gt : createPositionalPseudo(function(rowIndexes, denominator, result) {
          var r = result < 0 ? result + denominator : result;
          for (; ++r < denominator;) {
            rowIndexes.push(r);
          }
          return rowIndexes;
        })
      }
    }).pseudos.nth = Expr.pseudos.eq, {
      radio : true,
      checkbox : true,
      file : true,
      password : true,
      image : true
    }) {
      Expr.pseudos[i] = jQuerify(i);
    }
    for (i in{
      submit : true,
      reset : true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched;
      var match;
      var tokens;
      var type;
      var soFar;
      var groups;
      var preFilters;
      var cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      /** @type {string} */
      soFar = selector;
      /** @type {!Array} */
      groups = [];
      preFilters = Expr.preFilter;
      for (; soFar;) {
        for (type in matched && !(match = chunker.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = false, (match = rcomma.exec(soFar)) && (matched = match.shift(), tokens.push({
          value : matched,
          type : match[0].replace(rtrim, " ")
        }), soFar = soFar.slice(matched.length)), Expr.filter) {
          if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value : matched,
              type : type,
              matches : match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }, compile = Sizzle.compile = function(selector, group) {
      var i;
      var da;
      var setMatchers;
      var bySet;
      var byElement;
      var superMatcher;
      /** @type {!Array} */
      var a1 = [];
      /** @type {!Array} */
      var a0 = [];
      var cached = compilerCache[selector + " "];
      if (!cached) {
        if (!group) {
          group = tokenize(selector);
        }
        i = group.length;
        for (; i--;) {
          if ((cached = matcherFromTokens(group[i]))[expando]) {
            a1.push(cached);
          } else {
            a0.push(cached);
          }
        }
        /** @type {string} */
        (cached = compilerCache(selector, (da = a0, setMatchers = a1, bySet = 0 < setMatchers.length, byElement = 0 < da.length, superMatcher = function(seed, context, xml, results, outermost) {
          var elem;
          var j;
          var matcher;
          /** @type {number} */
          var matchedCount = 0;
          /** @type {string} */
          var i = "0";
          var unmatched = seed && [];
          /** @type {!Array} */
          var data = [];
          var contextBackup = outermostContext;
          var elems = seed || byElement && Expr.find.TAG("*", outermost);
          var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
          var length = elems.length;
          if (outermost) {
            outermostContext = context === document || context || outermost;
          }
          for (; i !== length && null != (elem = elems[i]); i++) {
            if (byElement && elem) {
              /** @type {number} */
              j = 0;
              if (!(context || elem.ownerDocument === document)) {
                setDocument(elem);
                /** @type {boolean} */
                xml = !documentIsHTML;
              }
              for (; matcher = da[j++];) {
                if (matcher(elem, context || document, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
            /** @type {number} */
            j = 0;
            for (; matcher = setMatchers[j++];) {
              matcher(unmatched, data, context, xml);
            }
            if (seed) {
              if (0 < matchedCount) {
                for (; i--;) {
                  if (!(unmatched[i] || data[i])) {
                    data[i] = pop.call(results);
                  }
                }
              }
              data = fn(data);
            }
            push.apply(results, data);
            if (outermost && !seed && 0 < data.length && 1 < matchedCount + setMatchers.length) {
              Sizzle.uniqueSort(results);
            }
          }
          return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
        }, bySet ? markFunction(superMatcher) : superMatcher))).selector = selector;
      }
      return cached;
    }, select = Sizzle.select = function(selector, context, results, seed) {
      var i;
      var tokens;
      var token;
      var type;
      var f;
      /** @type {(!Function|boolean)} */
      var compiled = "function" == typeof selector && selector;
      var match = !seed && tokenize(selector = compiled.selector || selector);
      if (results = results || [], 1 === match.length) {
        if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (!(context = (Expr.find.ID(token.matches[0].replace(name, data), context) || [])[0])) {
            return results;
          }
          if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
          if ((f = Expr.find[type]) && (seed = f(token.matches[0].replace(name, data), RE_PSEUDOS.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens))) {
              return push.apply(results, seed), results;
            }
            break;
          }
        }
      }
      return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context), results;
    }, support.sortStable = expando.split("").sort(time).join("") === expando, support.detectDuplicates = !!ret, setDocument(), support.sortDetached = assert(function(html) {
      return 1 & html.compareDocumentPosition(document.createElement("fieldset"));
    }), assert(function(aItem) {
      return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
    }) || addHandle("type|href|height|width", function(e, t, n) {
      if (!n) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }
    }), support.attributes && assert(function(aItem) {
      return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
    }) || addHandle("value", function(src, canCreateDiscussions, n) {
      if (!n && "input" === src.nodeName.toLowerCase()) {
        return src.defaultValue;
      }
    }), assert(function(e) {
      return null == e.getAttribute("disabled");
    }) || addHandle(value, function(elem, name, n) {
      var val;
      if (!n) {
        return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }
    }), Sizzle;
  }(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  /**
   * @param {?} elem
   * @param {string} dir
   * @param {?} until
   * @return {?}
   */
  var dir = function(elem, dir, until) {
    /** @type {!Array} */
    var matched = [];
    /** @type {boolean} */
    var truncate = void 0 !== until;
    for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
      if (1 === elem.nodeType) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  /**
   * @param {!Object} node
   * @param {!Object} elem
   * @return {?}
   */
  var _sibling = function(node, elem) {
    /** @type {!Array} */
    var result = [];
    for (; node; node = node.nextSibling) {
      if (1 === node.nodeType && node !== elem) {
        result.push(node);
      }
    }
    return result;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  /** @type {!RegExp} */
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  /**
   * @param {string} expr
   * @param {!Object} elems
   * @param {string} not
   * @return {?}
   */
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
      return 1 === nodeToInspect.nodeType;
    }));
  };
  jQuery.fn.extend({
    find : function(val) {
      var i;
      var ret;
      var l = this.length;
      var self = this;
      if ("string" != typeof val) {
        return this.pushStack(jQuery(val).filter(function() {
          /** @type {number} */
          i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      /** @type {number} */
      i = 0;
      for (; i < l; i++) {
        jQuery.find(val, self[i], ret);
      }
      return 1 < l ? jQuery.uniqueSort(ret) : ret;
    },
    filter : function(val) {
      return this.pushStack(filter(this, val || [], false));
    },
    not : function(args) {
      return this.pushStack(filter(this, args || [], true));
    },
    is : function(arg) {
      return !!filter(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
    }
  });
  var rootjQuery;
  /** @type {!RegExp} */
  var myVivus = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (jQuery.fn.init = function(a, context, root) {
    var match;
    var i;
    if (!a) {
      return this;
    }
    if (root = root || rootjQuery, "string" == typeof a) {
      if (!(match = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : myVivus.exec(a)) || !match[1] && context) {
        return !context || context.jquery ? (context || root).find(a) : this.constructor(context).find(a);
      }
      if (match[1]) {
        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
          for (match in context) {
            if (fn(this[match])) {
              this[match](context[match]);
            } else {
              this.attr(match, context[match]);
            }
          }
        }
        return this;
      }
      return (i = document.getElementById(match[2])) && (this[0] = i, this.length = 1), this;
    }
    return a.nodeType ? (this[0] = a, this.length = 1, this) : fn(a) ? void 0 !== root.ready ? root.ready(a) : a(jQuery) : jQuery.makeArray(a, this);
  }).prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  /** @type {!RegExp} */
  var testRxp = /^(?:parents|prev(?:Until|All))/;
  var guaranteedUnique = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  jQuery.fn.extend({
    has : function(name) {
      var targets = jQuery(name, this);
      var l = targets.length;
      return this.filter(function() {
        /** @type {number} */
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest : function(selector, context) {
      var node;
      /** @type {number} */
      var j = 0;
      var i = this.length;
      /** @type {!Array} */
      var ret = [];
      var s = "string" != typeof selector && jQuery(selector);
      if (!rneedsContext.test(selector)) {
        for (; j < i; j++) {
          node = this[j];
          for (; node && node !== context; node = node.parentNode) {
            if (node.nodeType < 11 && (s ? -1 < s.index(node) : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
              ret.push(node);
              break;
            }
          }
        }
      }
      return this.pushStack(1 < ret.length ? jQuery.uniqueSort(ret) : ret);
    },
    index : function(elem) {
      return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add : function(name, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(name, context))));
    },
    addBack : function(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.each({
    parent : function(object) {
      var n = object.parentNode;
      return n && 11 !== n.nodeType ? n : null;
    },
    parents : function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil : function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next : function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev : function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll : function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll : function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil : function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil : function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings : function(elem) {
      return _sibling((elem.parentNode || {}).firstChild, elem);
    },
    children : function(elem) {
      return _sibling(elem.firstChild);
    },
    contents : function(elem) {
      return callback(elem, "iframe") ? elem.contentDocument : (callback(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
    }
  }, function(name, node) {
    /**
     * @param {boolean} callback
     * @param {boolean} fn
     * @return {?}
     */
    jQuery.fn[name] = function(callback, fn) {
      var ret = jQuery.map(this, node, callback);
      return "Until" !== name.slice(-5) && (fn = callback), fn && "string" == typeof fn && (ret = jQuery.filter(fn, ret)), 1 < this.length && (guaranteedUnique[name] || jQuery.uniqueSort(ret), testRxp.test(name) && ret.reverse()), this.pushStack(ret);
    };
  });
  /** @type {!RegExp} */
  var e = /[^\x20\t\r\n\f]+/g;
  /**
   * @param {string} options
   * @return {?}
   */
  jQuery.Callbacks = function(options) {
    var result;
    var pred;
    options = "string" == typeof options ? (result = options, pred = {}, jQuery.each(result.match(e) || [], function(canCreateDiscussions, v) {
      /** @type {boolean} */
      pred[v] = true;
    }), pred) : jQuery.extend({}, options);
    var costSum;
    var t;
    var gasSum;
    var geomColumnName;
    /** @type {!Array} */
    var list = [];
    /** @type {!Array} */
    var m = [];
    /** @type {number} */
    var i = -1;
    /**
     * @return {undefined}
     */
    var fire = function() {
      geomColumnName = geomColumnName || options.once;
      /** @type {boolean} */
      gasSum = costSum = true;
      for (; m.length; i = -1) {
        t = m.shift();
        for (; ++i < list.length;) {
          if (false === list[i].apply(t[0], t[1]) && options.stopOnFalse) {
            i = list.length;
            /** @type {boolean} */
            t = false;
          }
        }
      }
      if (!options.memory) {
        /** @type {boolean} */
        t = false;
      }
      /** @type {boolean} */
      costSum = false;
      if (geomColumnName) {
        /** @type {(Array|string)} */
        list = t ? [] : "";
      }
    };
    var self = {
      add : function() {
        return list && (t && !costSum && (i = list.length - 1, m.push(t)), function add(callback) {
          jQuery.each(callback, function(canCreateDiscussions, name) {
            if (fn(name)) {
              if (!(options.unique && self.has(name))) {
                list.push(name);
              }
            } else {
              if (name && name.length && "string" !== type(name)) {
                add(name);
              }
            }
          });
        }(arguments), t && !costSum && fire()), this;
      },
      remove : function() {
        return jQuery.each(arguments, function(canCreateDiscussions, t) {
          var index;
          for (; -1 < (index = jQuery.inArray(t, list, index));) {
            list.splice(index, 1);
            if (index <= i) {
              i--;
            }
          }
        }), this;
      },
      has : function(className) {
        return className ? -1 < jQuery.inArray(className, list) : 0 < list.length;
      },
      empty : function() {
        return list && (list = []), this;
      },
      disable : function() {
        return geomColumnName = m = [], list = t = "", this;
      },
      disabled : function() {
        return !list;
      },
      lock : function() {
        return geomColumnName = m = [], t || costSum || (list = t = ""), this;
      },
      locked : function() {
        return !!geomColumnName;
      },
      fireWith : function(context, args) {
        return geomColumnName || (args = [context, (args = args || []).slice ? args.slice() : args], m.push(args), costSum || fire()), this;
      },
      fire : function() {
        return self.fireWith(this, arguments), this;
      },
      fired : function() {
        return !!gasSum;
      }
    };
    return self;
  };
  jQuery.extend({
    Deferred : function(func) {
      /** @type {!Array} */
      var array = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
      /** @type {string} */
      var state = "pending";
      var promise = {
        state : function() {
          return state;
        },
        always : function() {
          return deferred.done(arguments).fail(arguments), this;
        },
        catch : function(c) {
          return promise.then(null, c);
        },
        pipe : function() {
          /** @type {!Arguments} */
          var result = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(array, function(canCreateDiscussions, tuple) {
              var callback = fn(result[tuple[4]]) && result[tuple[4]];
              deferred[tuple[1]](function() {
                var promise = callback && callback.apply(this, arguments);
                if (promise && fn(promise.promise)) {
                  promise.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, callback ? [promise] : arguments);
                }
              });
            });
            /** @type {null} */
            result = null;
          }).promise();
        },
        then : function(x, a, item) {
          /**
           * @param {number} index
           * @param {!Object} options
           * @param {!Function} callback
           * @param {boolean} args
           * @return {?}
           */
          function callback(index, options, callback, args) {
            return function() {
              var context = this;
              /** @type {!Arguments} */
              var values = arguments;
              /**
               * @return {undefined}
               */
              var apply = function() {
                var value;
                var self;
                if (!(index < i)) {
                  if ((value = callback.apply(context, values)) === options.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  self = value && ("object" == typeof value || "function" == typeof value) && value.then;
                  if (fn(self)) {
                    if (args) {
                      self.call(value, callback(i, options, failed, args), callback(i, options, undefined, args));
                    } else {
                      i++;
                      self.call(value, callback(i, options, failed, args), callback(i, options, undefined, args), callback(i, options, failed, options.notifyWith));
                    }
                  } else {
                    if (callback !== failed) {
                      context = void 0;
                      /** @type {!Array} */
                      values = [value];
                    }
                    (args || options.resolveWith)(context, values);
                  }
                }
              };
              /** @type {function(): undefined} */
              var method = args ? apply : function() {
                try {
                  apply();
                } catch (scheduled) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(scheduled, method.stackTrace);
                  }
                  if (i <= index + 1) {
                    if (callback !== undefined) {
                      context = void 0;
                      /** @type {!Array} */
                      values = [scheduled];
                    }
                    options.rejectWith(context, values);
                  }
                }
              };
              if (index) {
                method();
              } else {
                if (jQuery.Deferred.getStackHook) {
                  method.stackTrace = jQuery.Deferred.getStackHook();
                }
                window.setTimeout(method);
              }
            };
          }
          /** @type {number} */
          var i = 0;
          return jQuery.Deferred(function(self) {
            array[0][3].add(callback(0, self, fn(item) ? item : failed, self.notifyWith));
            array[1][3].add(callback(0, self, fn(x) ? x : failed));
            array[2][3].add(callback(0, self, fn(a) ? a : undefined));
          }).promise();
        },
        promise : function(context) {
          return null != context ? jQuery.extend(context, promise) : promise;
        }
      };
      var deferred = {};
      return jQuery.each(array, function(numRemoved, tuple) {
        var list = tuple[2];
        var stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, array[3 - numRemoved][2].disable, array[3 - numRemoved][3].disable, array[0][2].lock, array[0][3].lock);
        }
        list.add(tuple[3].fire);
        /**
         * @return {?}
         */
        deferred[tuple[0]] = function() {
          return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
    },
    when : function(data) {
      /** @type {number} */
      var sampleSize = arguments.length;
      var i = sampleSize;
      /** @type {!Array} */
      var elements = Array(i);
      /** @type {!Array<?>} */
      var args = slice.call(arguments);
      var d = jQuery.Deferred();
      /**
       * @param {undefined} i
       * @return {?}
       */
      var updateFn = function(i) {
        return function(value) {
          elements[i] = this;
          args[i] = 1 < arguments.length ? slice.call(arguments) : value;
          if (!--sampleSize) {
            d.resolveWith(elements, args);
          }
        };
      };
      if (sampleSize <= 1 && (resolve(data, d.done(updateFn(i)).resolve, d.reject, !sampleSize), "pending" === d.state() || fn(args[i] && args[i].then))) {
        return d.then();
      }
      for (; i--;) {
        resolve(args[i], updateFn(i), d.reject);
      }
      return d.promise();
    }
  });
  /** @type {!RegExp} */
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  /**
   * @param {?} error
   * @param {?} stack
   * @return {undefined}
   */
  jQuery.Deferred.exceptionHook = function(error, stack) {
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
  /**
   * @param {?} error
   * @return {undefined}
   */
  jQuery.readyException = function(error) {
    window.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  /**
   * @param {!Function} fn
   * @return {?}
   */
  jQuery.fn.ready = function(fn) {
    return readyList.then(fn).catch(function(e) {
      jQuery.readyException(e);
    }), this;
  };
  jQuery.extend({
    isReady : false,
    readyWait : 1,
    ready : function(prev) {
      if (!((true === prev ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = true) !== prev && 0 < --jQuery.readyWait)) {
        readyList.resolveWith(document, [jQuery]);
      }
    }
  });
  jQuery.ready.then = readyList.then;
  if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener("DOMContentLoaded", $__jsx_onload);
    window.addEventListener("load", $__jsx_onload);
  }
  /**
   * @param {string} elems
   * @param {!Function} callback
   * @param {string} key
   * @param {?} value
   * @param {number} chainable
   * @param {string} emptyGet
   * @param {boolean} raw
   * @return {?}
   */
  var access = function(elems, callback, key, value, chainable, emptyGet, raw) {
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    /** @type {boolean} */
    var bulk = null == key;
    if ("object" === type(key)) {
      for (i in chainable = true, key) {
        access(elems, callback, i, key[i], true, emptyGet, raw);
      }
    } else {
      if (void 0 !== value && (chainable = true, fn(value) || (raw = true), bulk && (raw ? (callback.call(elems, value), callback = null) : (bulk = callback, callback = function(elem, t, value) {
        return bulk.call(jQuery(elem), value);
      })), callback)) {
        for (; i < length; i++) {
          callback(elems[i], key, raw ? value : value.call(elems[i], i, callback(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? callback.call(elems) : length ? callback(elems[0], key) : emptyGet;
  };
  /** @type {!RegExp} */
  var _kerningNamesHash_escapeEscape = /^-ms-/;
  /** @type {!RegExp} */
  var tokensRegExp = /-([a-z])/g;
  /**
   * @param {!Object} selector
   * @return {?}
   */
  var match = function(selector) {
    return 1 === selector.nodeType || 9 === selector.nodeType || !+selector.nodeType;
  };
  /** @type {number} */
  Data.uid = 1;
  Data.prototype = {
    cache : function(node) {
      var value = node[this.expando];
      return value || (value = {}, match(node) && (node.nodeType ? node[this.expando] = value : Object.defineProperty(node, this.expando, {
        value : value,
        configurable : true
      }))), value;
    },
    set : function(type, key, name) {
      var name;
      var obj = this.cache(type);
      if ("string" == typeof key) {
        obj[camelCase(key)] = name;
      } else {
        for (name in key) {
          obj[camelCase(name)] = key[name];
        }
      }
      return obj;
    },
    get : function(data, key) {
      return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][camelCase(key)];
    },
    access : function(value, fn, key) {
      return void 0 === fn || fn && "string" == typeof fn && void 0 === key ? this.get(value, fn) : (this.set(value, fn, key), void 0 !== key ? key : fn);
    },
    remove : function(parent, name) {
      var i;
      var cache = parent[this.expando];
      if (void 0 !== cache) {
        if (void 0 !== name) {
          i = (name = Array.isArray(name) ? name.map(camelCase) : (name = camelCase(name)) in cache ? [name] : name.match(e) || []).length;
          for (; i--;) {
            delete cache[name[i]];
          }
        }
        if (void 0 === name || jQuery.isEmptyObject(cache)) {
          if (parent.nodeType) {
            parent[this.expando] = void 0;
          } else {
            delete parent[this.expando];
          }
        }
      }
    },
    hasData : function(owner) {
      var cache = owner[this.expando];
      return void 0 !== cache && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data;
  var $ = new Data;
  /** @type {!RegExp} */
  var contribRegex = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  /** @type {!RegExp} */
  var rupper = /[A-Z]/g;
  jQuery.extend({
    hasData : function(elem) {
      return $.hasData(elem) || dataPriv.hasData(elem);
    },
    data : function(type, name, key) {
      return $.access(type, name, key);
    },
    removeData : function(name, callback) {
      $.remove(name, callback);
    },
    _data : function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData : function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data : function(type, value) {
      var i;
      var name;
      var data;
      var elem = this[0];
      var attrs = elem && elem.attributes;
      if (void 0 === type) {
        if (this.length && (data = $.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
          i = attrs.length;
          for (; i--;) {
            if (attrs[i] && 0 === (name = attrs[i].name).indexOf("data-")) {
              name = camelCase(name.slice(5));
              set(elem, name, data[name]);
            }
          }
          dataPriv.set(elem, "hasDataAttrs", true);
        }
        return data;
      }
      return "object" == typeof type ? this.each(function() {
        $.set(this, type);
      }) : access(this, function(name) {
        var data;
        if (elem && void 0 === name) {
          if (void 0 !== (data = $.get(elem, type))) {
            return data;
          }
          if (void 0 !== (data = set(elem, type))) {
            return data;
          }
        } else {
          this.each(function() {
            $.set(this, type, name);
          });
        }
      }, null, value, 1 < arguments.length, null, true);
    },
    removeData : function(callback) {
      return this.each(function() {
        $.remove(this, callback);
      });
    }
  });
  jQuery.extend({
    queue : function(elem, type, data) {
      var q;
      if (elem) {
        return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || Array.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
      }
    },
    dequeue : function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type);
      var startLength = queue.length;
      var fn = queue.shift();
      var hooks = jQuery._queueHooks(elem, type);
      if ("inprogress" === fn) {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if ("fx" === type) {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, function() {
          jQuery.dequeue(elem, type);
        }, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks : function(elem, type) {
      /** @type {string} */
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty : jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue : function(type, data) {
      /** @type {number} */
      var setter = 2;
      return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if ("fx" === type && "inprogress" !== queue[0]) {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue : function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue : function(type) {
      return this.queue(type || "fx", []);
    },
    promise : function(type, result) {
      var sel;
      /** @type {number} */
      var r = 1;
      var defer = jQuery.Deferred();
      var elements = this;
      var i = this.length;
      /**
       * @return {undefined}
       */
      var resolve = function() {
        if (!--r) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if ("string" != typeof type) {
        /** @type {!Object} */
        result = type;
        type = void 0;
      }
      type = type || "fx";
      for (; i--;) {
        if ((sel = dataPriv.get(elements[i], type + "queueHooks")) && sel.empty) {
          r++;
          sel.empty.add(resolve);
        }
      }
      return resolve(), defer.promise(result);
    }
  });
  /** @type {string} */
  var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  /** @type {!RegExp} */
  var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
  /** @type {!Array} */
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  /**
   * @param {!Object} element
   * @param {!Object} root
   * @return {?}
   */
  var isHidden = function(element, root) {
    return "none" === (element = root || element).style.display || "" === element.style.display && jQuery.contains(element.ownerDocument, element) && "none" === jQuery.css(element, "display");
  };
  /**
   * @param {!Object} elem
   * @param {!Array} options
   * @param {!Function} callback
   * @param {number} args
   * @return {?}
   */
  var swap = function(elem, options, callback, args) {
    var ret;
    var name;
    var ea = {};
    for (name in options) {
      ea[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    for (name in ret = callback.apply(elem, args || []), options) {
      elem.style[name] = ea[name];
    }
    return ret;
  };
  var blocks = {};
  jQuery.fn.extend({
    show : function() {
      return show(this, true);
    },
    hide : function() {
      return show(this);
    },
    toggle : function(state) {
      return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  /** @type {!RegExp} */
  var reg = /^(?:checkbox|radio)$/i;
  /** @type {!RegExp} */
  var fullLinkRegex = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  /** @type {!RegExp} */
  var opacityRe = /^$|^module$|\/(?:java|ecma)script/i;
  var wrapMap = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    thead : [1, "<table>", "</table>"],
    col : [2, "<table><colgroup>", "</colgroup></table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default : [0, "", ""]
  };
  /** @type {!Array} */
  wrapMap.optgroup = wrapMap.option;
  /** @type {!Array} */
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  /** @type {!Array} */
  wrapMap.th = wrapMap.td;
  var avalon;
  var input;
  /** @type {!RegExp} */
  var re_commas = /<|&#?\w+;/;
  avalon = document.createDocumentFragment().appendChild(document.createElement("div"));
  (input = document.createElement("input")).setAttribute("type", "radio");
  input.setAttribute("checked", "checked");
  input.setAttribute("name", "t");
  avalon.appendChild(input);
  support.checkClone = avalon.cloneNode(true).cloneNode(true).lastChild.checked;
  /** @type {string} */
  avalon.innerHTML = "<textarea>x</textarea>";
  /** @type {boolean} */
  support.noCloneChecked = !!avalon.cloneNode(true).lastChild.defaultValue;
  var elem = document.documentElement;
  /** @type {!RegExp} */
  var receivedErrorEvents = /^key/;
  /** @type {!RegExp} */
  var receivedOpenEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  /** @type {!RegExp} */
  var exports = /^([^.]*)(?:\.(.+)|)/;
  jQuery.event = {
    global : {},
    add : function(elem, value, handler, data, selector) {
      var handleObjIn;
      var eventHandle;
      var BROWSER_ENGINES;
      var events;
      var j;
      var handleObj;
      var special;
      var handlers;
      var type;
      var d;
      var origType;
      var elemData = dataPriv.get(elem);
      if (elemData) {
        if (handler.handler) {
          handler = (handleObjIn = handler).handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery.find.matchesSelector(elem, selector);
        }
        if (!handler.guid) {
          /** @type {number} */
          handler.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = {};
        }
        if (!(eventHandle = elemData.handle)) {
          /** @type {function(!Object): ?} */
          eventHandle = elemData.handle = function(e) {
            return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        j = (value = (value || "").match(e) || [""]).length;
        for (; j--;) {
          type = origType = (BROWSER_ENGINES = exports.exec(value[j]) || [])[1];
          d = (BROWSER_ENGINES[2] || "").split(".").sort();
          if (type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type : type,
              origType : origType,
              data : data,
              handler : handler,
              guid : handler.guid,
              selector : selector,
              needsContext : selector && jQuery.expr.match.needsContext.test(selector),
              namespace : d.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              /** @type {number} */
              (handlers = events[type] = []).delegateCount = 0;
              if (!(special.setup && false !== special.setup.call(elem, data, d, eventHandle))) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            /** @type {boolean} */
            jQuery.event.global[type] = true;
          }
        }
      }
    },
    remove : function(elem, data, fn, selector, i) {
      var j;
      var origCount;
      var tmp;
      var events;
      var i;
      var handleObj;
      var special;
      var handlers;
      var type;
      var d;
      var level;
      var elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (elemData && (events = elemData.events)) {
        i = (data = (data || "").match(e) || [""]).length;
        for (; i--;) {
          if (type = level = (tmp = exports.exec(data[i]) || [])[1], d = (tmp[2] || "").split(".").sort(), type) {
            special = jQuery.event.special[type] || {};
            handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            for (; j--;) {
              handleObj = handlers[j];
              if (!(!i && level !== handleObj.origType || fn && fn.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!(special.teardown && false !== special.teardown.call(elem, d, elemData.handle))) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          } else {
            for (type in events) {
              jQuery.event.remove(elem, type + data[i], fn, selector, true);
            }
          }
        }
        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      }
    },
    dispatch : function(e) {
      var i;
      var j;
      var code;
      var matched;
      var handleObj;
      var handlerQueue;
      var event = jQuery.event.fix(e);
      /** @type {!Array} */
      var data = new Array(arguments.length);
      var handlers = (dataPriv.get(this, "events") || {})[event.type] || [];
      var special = jQuery.event.special[event.type] || {};
      data[0] = event;
      /** @type {number} */
      i = 1;
      for (; i < arguments.length; i++) {
        data[i] = arguments[i];
      }
      if (event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        /** @type {number} */
        i = 0;
        for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
          event.currentTarget = matched.elem;
          /** @type {number} */
          j = 0;
          for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
            if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              if (void 0 !== (code = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, data)) && false === (event.result = code)) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
        return special.postDispatch && special.postDispatch.call(this, event), event.result;
      }
    },
    handlers : function(event, handlers) {
      var i;
      var handleObj;
      var name;
      var matches;
      var fieldOrdinals;
      /** @type {!Array} */
      var handlerQueue = [];
      var delegateCount = handlers.delegateCount;
      var cur = event.target;
      if (delegateCount && cur.nodeType && !("click" === event.type && 1 <= event.button)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (1 === cur.nodeType && ("click" !== event.type || true !== cur.disabled)) {
            /** @type {!Array} */
            matches = [];
            fieldOrdinals = {};
            /** @type {number} */
            i = 0;
            for (; i < delegateCount; i++) {
              if (void 0 === fieldOrdinals[name = (handleObj = handlers[i]).selector + " "]) {
                fieldOrdinals[name] = handleObj.needsContext ? -1 < jQuery(name, this).index(cur) : jQuery.find(name, this, null, [cur]).length;
              }
              if (fieldOrdinals[name]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem : cur,
                handlers : matches
              });
            }
          }
        }
      }
      return cur = this, delegateCount < handlers.length && handlerQueue.push({
        elem : cur,
        handlers : handlers.slice(delegateCount)
      }), handlerQueue;
    },
    addProp : function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable : true,
        configurable : true,
        get : fn(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set : function(type) {
          Object.defineProperty(this, name, {
            enumerable : true,
            configurable : true,
            writable : true,
            value : type
          });
        }
      });
    },
    fix : function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          if (this !== safeActiveElement() && this.focus) {
            return this.focus(), false;
          }
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          if (this === safeActiveElement() && this.blur) {
            return this.blur(), false;
          }
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          if ("checkbox" === this.type && this.click && callback(this, "input")) {
            return this.click(), false;
          }
        },
        _default : function(event) {
          return callback(event.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(event) {
          if (void 0 !== event.result && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  };
  /**
   * @param {!Object} elem
   * @param {!Object} type
   * @param {?} fn
   * @return {undefined}
   */
  jQuery.removeEvent = function(elem, type, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, fn);
    }
  };
  /**
   * @param {!Object} src
   * @param {!Object} props
   * @return {?}
   */
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      /** @type {!Object} */
      this.originalEvent = src;
      this.type = src.type;
      /** @type {function(): ?} */
      this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
      this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      /** @type {!Object} */
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || Date.now();
    /** @type {boolean} */
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor : jQuery.Event,
    isDefaultPrevented : returnFalse,
    isPropagationStopped : returnFalse,
    isImmediatePropagationStopped : returnFalse,
    isSimulated : false,
    preventDefault : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey : true,
    bubbles : true,
    cancelable : true,
    changedTouches : true,
    ctrlKey : true,
    detail : true,
    eventPhase : true,
    metaKey : true,
    pageX : true,
    pageY : true,
    shiftKey : true,
    view : true,
    char : true,
    charCode : true,
    key : true,
    keyCode : true,
    button : true,
    buttons : true,
    clientX : true,
    clientY : true,
    offsetX : true,
    offsetY : true,
    pointerId : true,
    pointerType : true,
    screenX : true,
    screenY : true,
    targetTouches : true,
    toElement : true,
    touches : true,
    which : function(e) {
      var button = e.button;
      return null == e.which && receivedErrorEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedOpenEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType : fix,
      bindType : fix,
      handle : function(event) {
        var _ref12;
        var target = event.relatedTarget;
        var handleObj = event.handleObj;
        return target && (target === this || jQuery.contains(this, target)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
      }
    };
  });
  jQuery.fn.extend({
    on : function(name, fn, type, callback) {
      return bind(this, name, fn, type, callback);
    },
    one : function(context, handler, data, callback) {
      return bind(this, context, handler, data, callback, 1);
    },
    off : function(types, callback, fn) {
      var handleObj;
      var type;
      if (types && types.preventDefault && types.handleObj) {
        return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
      }
      if ("object" == typeof types) {
        for (type in types) {
          this.off(type, callback, types[type]);
        }
        return this;
      }
      return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
        jQuery.event.remove(this, types, fn, callback);
      });
    }
  });
  /** @type {!RegExp} */
  var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  /** @type {!RegExp} */
  var _tacet = /<script|<style|<link/i;
  /** @type {!RegExp} */
  var partten = /checked\s*(?:[^=]|=\s*.checked.)/i;
  /** @type {!RegExp} */
  var rcharset = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  jQuery.extend({
    htmlPrefilter : function(src) {
      return src.replace(regPlaceholder, "<$1></$2>");
    },
    clone : function(elem, n, array) {
      var i;
      var l;
      var srcElements;
      var destElements;
      var src;
      var target;
      var undefined;
      var clone = elem.cloneNode(true);
      var inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
        destElements = getAll(clone);
        /** @type {number} */
        i = 0;
        l = (srcElements = getAll(elem)).length;
        for (; i < l; i++) {
          src = srcElements[i];
          if ("input" === (undefined = (target = destElements[i]).nodeName.toLowerCase()) && reg.test(src.type)) {
            target.checked = src.checked;
          } else {
            if (!("input" !== undefined && "textarea" !== undefined)) {
              target.defaultValue = src.defaultValue;
            }
          }
        }
      }
      if (n) {
        if (array) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          /** @type {number} */
          i = 0;
          l = srcElements.length;
          for (; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
    },
    cleanData : function(elems) {
      var data;
      var elem;
      var type;
      var special = jQuery.event.special;
      /** @type {number} */
      var i = 0;
      for (; void 0 !== (elem = elems[i]); i++) {
        if (match(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = void 0;
          }
          if (elem[$.expando]) {
            elem[$.expando] = void 0;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach : function(context) {
      return remove(this, context, true);
    },
    remove : function(key) {
      return remove(this, key);
    },
    text : function(value) {
      return access(this, function(value) {
        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append : function() {
      return domManip(this, arguments, function(elem) {
        if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
          manipulationTarget(this, elem).appendChild(elem);
        }
      });
    },
    prepend : function() {
      return domManip(this, arguments, function(elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before : function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after : function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty : function() {
      var elem;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = this[i]); i++) {
        if (1 === elem.nodeType) {
          jQuery.cleanData(getAll(elem, false));
          /** @type {string} */
          elem.textContent = "";
        }
      }
      return this;
    },
    clone : function(c, i) {
      return c = null != c && c, i = null == i ? c : i, this.map(function() {
        return jQuery.clone(this, c, i);
      });
    },
    html : function(val) {
      return access(this, function(value) {
        var elem = this[0] || {};
        /** @type {number} */
        var thatpos = 0;
        var i = this.length;
        if (void 0 === value && 1 === elem.nodeType) {
          return elem.innerHTML;
        }
        if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(fullLinkRegex.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; thatpos < i; thatpos++) {
              if (1 === (elem = this[thatpos] || {}).nodeType) {
                jQuery.cleanData(getAll(elem, false));
                /** @type {number} */
                elem.innerHTML = value;
              }
            }
            /** @type {number} */
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, val, arguments.length);
    },
    replaceWith : function() {
      /** @type {!Array} */
      var ignored = [];
      return domManip(this, arguments, function(textualMod) {
        var thisParent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (thisParent) {
            thisParent.replaceChild(textualMod, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(original, name) {
    /**
     * @param {!Array} path
     * @return {?}
     */
    jQuery.fn[original] = function(path) {
      var param;
      /** @type {!Array} */
      var ret = [];
      var a = jQuery(path);
      /** @type {number} */
      var last = a.length - 1;
      /** @type {number} */
      var i = 0;
      for (; i <= last; i++) {
        param = i === last ? this : this.clone(true);
        jQuery(a[i])[name](param);
        push.apply(ret, param.get());
      }
      return this.pushStack(ret);
    };
  });
  /** @type {!RegExp} */
  var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
  /**
   * @param {!Object} elem
   * @return {?}
   */
  var getStyles = function(elem) {
    var win = elem.ownerDocument.defaultView;
    return win && win.opener || (win = window), win.getComputedStyle(elem);
  };
  /** @type {!RegExp} */
  var inlineAttributeCommentRegex = new RegExp(cssExpand.join("|"), "i");
  !function() {
    /**
     * @return {undefined}
     */
    function computeStyleTests() {
      if (div) {
        /** @type {string} */
        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        /** @type {string} */
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        elem.appendChild(container).appendChild(div);
        var style = window.getComputedStyle(div);
        /** @type {boolean} */
        res = "1%" !== style.top;
        /** @type {boolean} */
        s = 12 === parseRound(style.marginLeft);
        /** @type {string} */
        div.style.right = "60%";
        /** @type {boolean} */
        a = 36 === parseRound(style.right);
        /** @type {boolean} */
        r = 36 === parseRound(style.width);
        /** @type {string} */
        div.style.position = "absolute";
        /** @type {(boolean|string)} */
        position = 36 === div.offsetWidth || "absolute";
        elem.removeChild(container);
        /** @type {null} */
        div = null;
      }
    }
    /**
     * @param {?} fontSize
     * @return {?}
     */
    function parseRound(fontSize) {
      return Math.round(parseFloat(fontSize));
    }
    var res;
    var r;
    var position;
    var a;
    var s;
    var container = document.createElement("div");
    var div = document.createElement("div");
    if (div.style) {
      /** @type {string} */
      div.style.backgroundClip = "content-box";
      /** @type {string} */
      div.cloneNode(true).style.backgroundClip = "";
      /** @type {boolean} */
      support.clearCloneStyle = "content-box" === div.style.backgroundClip;
      jQuery.extend(support, {
        boxSizingReliable : function() {
          return computeStyleTests(), r;
        },
        pixelBoxStyles : function() {
          return computeStyleTests(), a;
        },
        pixelPosition : function() {
          return computeStyleTests(), res;
        },
        reliableMarginLeft : function() {
          return computeStyleTests(), s;
        },
        scrollboxSize : function() {
          return computeStyleTests(), position;
        }
      });
    }
  }();
  /** @type {!RegExp} */
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
  /** @type {!RegExp} */
  var ngTranslationProvider = /^--/;
  var cssShow = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var cssNormalTransform = {
    letterSpacing : "0",
    fontWeight : "400"
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "Moz", "ms"];
  var style = document.createElement("div").style;
  jQuery.extend({
    cssHooks : {
      opacity : {
        get : function(key, value) {
          if (value) {
            var val = curCSS(key, "opacity");
            return "" === val ? "1" : val;
          }
        }
      }
    },
    cssNumber : {
      animationIterationCount : true,
      columnCount : true,
      fillOpacity : true,
      flexGrow : true,
      flexShrink : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      order : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {},
    style : function(elem, name, value, extra) {
      if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
        var ret;
        var type;
        var hooks;
        var prop = camelCase(name);
        /** @type {boolean} */
        var versionByName = ngTranslationProvider.test(name);
        var style = elem.style;
        if (versionByName || (name = camelize(prop)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop], void 0 === value) {
          return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra)) ? ret : style[name];
        }
        if ("string" == (type = typeof value) && (ret = regex.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          /** @type {string} */
          type = "number";
        }
        if (null != value && value == value) {
          if ("number" === type) {
            /** @type {string} */
            value = value + (ret && ret[3] || (jQuery.cssNumber[prop] ? "" : "px"));
          }
          if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
            /** @type {string} */
            style[name] = "inherit";
          }
          if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)))) {
            if (versionByName) {
              style.setProperty(name, value);
            } else {
              /** @type {string} */
              style[name] = value;
            }
          }
        }
      }
    },
    css : function(value, name, extra, styles) {
      var val;
      var length;
      var hooks;
      var prop = camelCase(name);
      return ngTranslationProvider.test(name) || (name = camelize(prop)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop]) && "get" in hooks && (val = hooks.get(value, true, extra)), void 0 === val && (val = curCSS(value, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (length = parseFloat(val), true === extra || isFinite(length) ? length || 0 : val) : val;
    }
  });
  jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
    jQuery.cssHooks[name] = {
      get : function(elem, value, extra) {
        if (value) {
          return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          });
        }
      },
      set : function(elem, value, extra) {
        var matches;
        var styles = getStyles(elem);
        /** @type {boolean} */
        var valueIsBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
        var subtract = extra && augmentWidthOrHeight(elem, name, extra, valueIsBorderBox, styles);
        return valueIsBorderBox && support.scrollboxSize() === styles.position && (subtract = subtract - Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - parseFloat(styles[name]) - augmentWidthOrHeight(elem, name, "border", false, styles) - .5)), subtract && (matches = regex.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), _set(0, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
    if (canCreateDiscussions) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft : 0
      }, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand : function(expected) {
        /** @type {number} */
        var i = 0;
        var expanded = {};
        /** @type {!Array} */
        var stops = "string" == typeof expected ? expected.split(" ") : [expected];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
        }
        return expanded;
      }
    };
    if ("margin" !== prefix) {
      /** @type {function(!Object, string, string): ?} */
      jQuery.cssHooks[prefix + suffix].set = _set;
    }
  });
  jQuery.fn.extend({
    css : function(value, name) {
      return access(this, function(elem, name, undefined) {
        var styles;
        var l;
        var map = {};
        /** @type {number} */
        var i = 0;
        if (Array.isArray(name)) {
          styles = getStyles(elem);
          l = name.length;
          for (; i < l; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
      }, value, name, 1 < arguments.length);
    }
  });
  ((jQuery.Tween = Tween).prototype = {
    constructor : Tween,
    init : function(elem, options, prop, end, easing, unit) {
      /** @type {!Element} */
      this.elem = elem;
      /** @type {!Object} */
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      /** @type {!Object} */
      this.options = options;
      this.start = this.now = this.cur();
      /** @type {number} */
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur : function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run : function(percent) {
      var eased;
      var hooks = Tween.propHooks[this.prop];
      return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
    }
  }).init.prototype = Tween.prototype;
  (Tween.propHooks = {
    _default : {
      get : function(s) {
        var fitWidth;
        return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (fitWidth = jQuery.css(s.elem, s.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
      },
      set : function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else {
          if (1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop]) {
            tween.elem[tween.prop] = tween.now;
          } else {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          }
        }
      }
    }
  }).scrollTop = Tween.propHooks.scrollLeft = {
    set : function(target) {
      if (target.elem.nodeType && target.elem.parentNode) {
        target.elem[target.prop] = target.now;
      }
    }
  };
  jQuery.easing = {
    linear : function(p) {
      return p;
    },
    swing : function(p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    },
    _default : "swing"
  };
  /** @type {function(!Element, !Object, !Object, number, string, !Object): undefined} */
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow;
  var Ze;
  var checkbox;
  var opt;
  /** @type {!RegExp} */
  var trueRE = /^(?:toggle|show|hide)$/;
  /** @type {!RegExp} */
  var rrun = /queueHooks$/;
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners : {
      "*" : [function(prop, value) {
        var tween = this.createTween(prop, value);
        return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
      }]
    },
    tweener : function(props, callback) {
      if (fn(props)) {
        /** @type {!Object} */
        callback = props;
        /** @type {!Array} */
        props = ["*"];
      } else {
        props = props.match(e);
      }
      var prop;
      /** @type {number} */
      var i = 0;
      var inputsSize = props.length;
      for (; i < inputsSize; i++) {
        prop = props[i];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters : [function(elem, props, config) {
      var prop;
      var value;
      var matched;
      var hooks;
      var oldfire;
      var tween;
      var restoreDisplay;
      var display;
      /** @type {boolean} */
      var b = "width" in props || "height" in props;
      var anim = this;
      var orig = {};
      var style = elem.style;
      var hidden = elem.nodeType && isHidden(elem);
      var dataShow = dataPriv.get(elem, "fxshow");
      for (prop in config.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
        if (!hooks.unqueued) {
          oldfire();
        }
      }), hooks.unqueued++, anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      })), props) {
        if (value = props[prop], trueRE.test(value)) {
          if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
            if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
              continue;
            }
            /** @type {boolean} */
            hidden = true;
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      }
      if ((tween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
        for (prop in b && 1 === elem.nodeType && (config.overflow = [style.overflow, style.overflowX, style.overflowY], null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), "none" === (display = jQuery.css(elem, "display")) && (restoreDisplay ? display = restoreDisplay : (show([elem], true), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), show([elem]))), ("inline" === display || "inline-block" === 
        display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (tween || (anim.done(function() {
          style.display = restoreDisplay;
        }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), config.overflow && (style.overflow = "hidden", anim.always(function() {
          style.overflow = config.overflow[0];
          style.overflowX = config.overflow[1];
          style.overflowY = config.overflow[2];
        })), tween = false, orig) {
          if (!tween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display : restoreDisplay
              });
            }
            if (matched) {
              /** @type {boolean} */
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              show([elem], true);
            }
            anim.done(function() {
              for (prop in hidden || show([elem]), dataPriv.remove(elem, "fxshow"), orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = tween.start;
            if (hidden) {
              tween.end = tween.start;
              /** @type {number} */
              tween.start = 0;
            }
          }
        }
      }
    }],
    prefilter : function(callback, options) {
      if (options) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  /**
   * @param {string} speed
   * @param {string} easing
   * @param {string} callback
   * @return {?}
   */
  jQuery.speed = function(speed, easing, callback) {
    var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
      complete : callback || !callback && easing || fn(speed) && speed,
      duration : speed,
      easing : callback && easing || easing && !fn(easing) && easing
    };
    return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
      if (fn(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, opt;
  };
  jQuery.fn.extend({
    fadeTo : function(speed, to, callback, context) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({
        opacity : to
      }, speed, callback, context);
    },
    animate : function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop);
      var optall = jQuery.speed(speed, easing, callback);
      /**
       * @return {undefined}
       */
      var doAnimation = function() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);
        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      return doAnimation.finish = doAnimation, empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop : function(type, value, options) {
      /**
       * @param {!Object} range
       * @return {undefined}
       */
      var callback = function(range) {
        var start = range.stop;
        delete range.stop;
        start(options);
      };
      return "string" != typeof type && (options = value, value = type, type = void 0), value && false !== type && this.queue(type || "fx", []), this.each(function() {
        /** @type {boolean} */
        var out = true;
        /** @type {(boolean|string)} */
        var index = null != type && type + "queueHooks";
        /** @type {!Array} */
        var timers = jQuery.timers;
        var data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            callback(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              callback(data[index]);
            }
          }
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
            timers[index].anim.stop(options);
            /** @type {boolean} */
            out = false;
            timers.splice(index, 1);
          }
        }
        if (!(!out && options)) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish : function(type) {
      return false !== type && (type = type || "fx"), this.each(function() {
        var index;
        var data = dataPriv.get(this);
        var queue = data[type + "queue"];
        var hooks = data[type + "queueHooks"];
        /** @type {!Array} */
        var timers = jQuery.timers;
        var length = queue ? queue.length : 0;
        /** @type {boolean} */
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        /** @type {number} */
        index = 0;
        for (; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
    var cssFn = jQuery.fn[name];
    /**
     * @param {number} x
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[name] = function(x, callback, options) {
      return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
    };
  });
  jQuery.each({
    slideDown : genFx("show"),
    slideUp : genFx("hide"),
    slideToggle : genFx("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(original, props) {
    /**
     * @param {undefined} speed
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[original] = function(speed, callback, options) {
      return this.animate(props, speed, callback, options);
    };
  });
  /** @type {!Array} */
  jQuery.timers = [];
  /**
   * @return {undefined}
   */
  jQuery.fx.tick = function() {
    var maxBet;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var timers = jQuery.timers;
    /** @type {number} */
    fxNow = Date.now();
    for (; i < timers.length; i++) {
      if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = void 0;
  };
  /**
   * @param {string} fn
   * @return {undefined}
   */
  jQuery.fx.timer = function(fn) {
    jQuery.timers.push(fn);
    jQuery.fx.start();
  };
  /** @type {number} */
  jQuery.fx.interval = 13;
  /**
   * @return {undefined}
   */
  jQuery.fx.start = function() {
    if (!Ze) {
      /** @type {boolean} */
      Ze = true;
      step();
    }
  };
  /**
   * @return {undefined}
   */
  jQuery.fx.stop = function() {
    /** @type {null} */
    Ze = null;
  };
  jQuery.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  /**
   * @param {!Object} b
   * @param {!Object} type
   * @return {?}
   */
  jQuery.fn.delay = function(b, type) {
    return b = jQuery.fx && jQuery.fx.speeds[b] || b, type = type || "fx", this.queue(type, function(show, incoming_item) {
      var cb = window.setTimeout(show, b);
      /**
       * @return {undefined}
       */
      incoming_item.stop = function() {
        window.clearTimeout(cb);
      };
    });
  };
  checkbox = document.createElement("input");
  opt = document.createElement("select").appendChild(document.createElement("option"));
  /** @type {string} */
  checkbox.type = "checkbox";
  /** @type {boolean} */
  support.checkOn = "" !== checkbox.value;
  support.optSelected = opt.selected;
  /** @type {string} */
  (checkbox = document.createElement("input")).value = "t";
  /** @type {string} */
  checkbox.type = "radio";
  /** @type {boolean} */
  support.radioValue = "t" === checkbox.value;
  var boolHook;
  var attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr : function(type, value) {
      return access(this, jQuery.attr, type, value, 1 < arguments.length);
    },
    removeAttr : function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr : function(elem, name, value) {
      var ret;
      var hooks;
      var type = elem.nodeType;
      if (3 !== type && 8 !== type && 2 !== type) {
        return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : 
        null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
      }
    },
    attrHooks : {
      type : {
        set : function(text, value) {
          if (!support.radioValue && "radio" === value && callback(text, "input")) {
            var n = text.value;
            return text.setAttribute("type", value), n && (text.value = n), value;
          }
        }
      }
    },
    removeAttr : function(el, callback) {
      var DATA_ELEMENT_INVALID;
      /** @type {number} */
      var callbackCount = 0;
      var callbackVals = callback && callback.match(e);
      if (callbackVals && 1 === el.nodeType) {
        for (; DATA_ELEMENT_INVALID = callbackVals[callbackCount++];) {
          el.removeAttribute(DATA_ELEMENT_INVALID);
        }
      }
    }
  });
  boolHook = {
    set : function(value, key, name) {
      return false === key ? jQuery.removeAttr(value, name) : value.setAttribute(name, name), name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
    var s = attrHandle[name] || jQuery.find.attr;
    /**
     * @param {!Object} height
     * @param {string} status
     * @param {number} fps
     * @return {?}
     */
    attrHandle[name] = function(height, status, fps) {
      var ret;
      var handle;
      var lowercaseName = status.toLowerCase();
      return fps || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != s(height, status, fps) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
    };
  });
  /** @type {!RegExp} */
  var k_r_success_contrls = /^(?:input|select|textarea|button)$/i;
  /** @type {!RegExp} */
  var submittable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop : function(type, value) {
      return access(this, jQuery.prop, type, value, 1 < arguments.length);
    },
    removeProp : function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop : function(elem, name, value) {
      var ret;
      var hooks;
      var type = elem.nodeType;
      if (3 !== type && 8 !== type && 2 !== type) {
        return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
      }
    },
    propHooks : {
      tabIndex : {
        get : function(element) {
          var idx = jQuery.find.attr(element, "tabindex");
          return idx ? parseInt(idx, 10) : k_r_success_contrls.test(element.nodeName) || submittable.test(element.nodeName) && element.href ? 0 : -1;
        }
      }
    },
    propFix : {
      for : "htmlFor",
      class : "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get : function(e) {
        var elem = e.parentNode;
        return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
      },
      set : function(e) {
        var elem = e.parentNode;
        if (elem) {
          elem.selectedIndex;
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  jQuery.fn.extend({
    addClass : function(value) {
      var current;
      var elem;
      var n;
      var i;
      var max;
      var j;
      var y;
      /** @type {number} */
      var _ = 0;
      if (fn(value)) {
        return this.each(function(i) {
          jQuery(this).addClass(value.call(this, i, getClass(this)));
        });
      }
      if ((current = each(value)).length) {
        for (; elem = this[_++];) {
          if (i = getClass(elem), n = 1 === elem.nodeType && " " + log(i) + " ") {
            /** @type {number} */
            j = 0;
            for (; max = current[j++];) {
              if (n.indexOf(" " + max + " ") < 0) {
                /** @type {string} */
                n = n + (max + " ");
              }
            }
            if (i !== (y = log(n))) {
              elem.setAttribute("class", y);
            }
          }
        }
      }
      return this;
    },
    removeClass : function(value) {
      var current;
      var elem;
      var s;
      var i;
      var console;
      var j;
      var result;
      /** @type {number} */
      var _ = 0;
      if (fn(value)) {
        return this.each(function(i) {
          jQuery(this).removeClass(value.call(this, i, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((current = each(value)).length) {
        for (; elem = this[_++];) {
          if (i = getClass(elem), s = 1 === elem.nodeType && " " + log(i) + " ") {
            /** @type {number} */
            j = 0;
            for (; console = current[j++];) {
              for (; -1 < s.indexOf(" " + console + " ");) {
                /** @type {string} */
                s = s.replace(" " + console + " ", " ");
              }
            }
            if (i !== (result = log(s))) {
              elem.setAttribute("class", result);
            }
          }
        }
      }
      return this;
    },
    toggleClass : function(value, stateVal) {
      /** @type {string} */
      var undefined = typeof value;
      /** @type {boolean} */
      var s = "string" === undefined || Array.isArray(value);
      return "boolean" == typeof stateVal && s ? stateVal ? this.addClass(value) : this.removeClass(value) : fn(value) ? this.each(function(i) {
        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
      }) : this.each(function() {
        var className;
        var j;
        var $body;
        var current;
        if (s) {
          /** @type {number} */
          j = 0;
          $body = jQuery(this);
          current = each(value);
          for (; className = current[j++];) {
            if ($body.hasClass(className)) {
              $body.removeClass(className);
            } else {
              $body.addClass(className);
            }
          }
        } else {
          if (!(void 0 !== value && "boolean" !== undefined)) {
            if (className = getClass(this)) {
              dataPriv.set(this, "__className__", className);
            }
            if (this.setAttribute) {
              this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
            }
          }
        }
      });
    },
    hasClass : function(elem) {
      var exactLanguageCode;
      var value;
      /** @type {number} */
      var r = 0;
      /** @type {string} */
      exactLanguageCode = " " + elem + " ";
      for (; value = this[r++];) {
        if (1 === value.nodeType && -1 < (" " + log(getClass(value)) + " ").indexOf(exactLanguageCode)) {
          return true;
        }
      }
      return false;
    }
  });
  /** @type {!RegExp} */
  var n = /\r/g;
  jQuery.fn.extend({
    val : function(obj) {
      var hooks;
      var value;
      var key;
      var elem = this[0];
      return arguments.length ? (key = fn(obj), this.each(function(context) {
        var value;
        if (1 === this.nodeType) {
          if (null == (value = key ? obj.call(this, context, jQuery(this).val()) : obj)) {
            /** @type {string} */
            value = "";
          } else {
            if ("number" == typeof value) {
              /** @type {string} */
              value = value + "";
            } else {
              if (Array.isArray(value)) {
                value = jQuery.map(value, function(value) {
                  return null == value ? "" : value + "";
                });
              }
            }
          }
          if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
            this.value = value;
          }
        }
      })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value : void 0;
    }
  });
  jQuery.extend({
    valHooks : {
      option : {
        get : function(value) {
          var decodedValue = jQuery.find.attr(value, "value");
          return null != decodedValue ? decodedValue : log(jQuery.text(value));
        }
      },
      select : {
        get : function(e) {
          var value;
          var option;
          var i;
          var options = e.options;
          var index = e.selectedIndex;
          /** @type {boolean} */
          var one = "select-one" === e.type;
          /** @type {(Array|null)} */
          var values = one ? null : [];
          var max = one ? index + 1 : options.length;
          i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            if (((option = options[i]).selected || i === index) && !option.disabled && (!option.parentNode.disabled || !callback(option.parentNode, "optgroup"))) {
              if (value = jQuery(option).val(), one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set : function(model, value) {
          var outputFn;
          var b;
          var s = model.options;
          var result = jQuery.makeArray(value);
          var i = s.length;
          for (; i--;) {
            if ((b = s[i]).selected = -1 < jQuery.inArray(jQuery.valHooks.option.get(b), result)) {
              /** @type {boolean} */
              outputFn = true;
            }
          }
          return outputFn || (model.selectedIndex = -1), result;
        }
      }
    }
  });
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set : function(e, value) {
        if (Array.isArray(value)) {
          return e.checked = -1 < jQuery.inArray(jQuery(e).val(), value);
        }
      }
    };
    if (!support.checkOn) {
      /**
       * @param {!Object} key
       * @return {?}
       */
      jQuery.valHooks[this].get = function(key) {
        return null === key.getAttribute("value") ? "on" : key.value;
      };
    }
  });
  /** @type {boolean} */
  support.focusin = "onfocusin" in window;
  /** @type {!RegExp} */
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  /**
   * @param {!Event} e
   * @return {undefined}
   */
  var onInspectorMove = function(e) {
    e.stopPropagation();
  };
  jQuery.extend(jQuery.event, {
    trigger : function(event, value, context, data) {
      var index;
      var node;
      var elem;
      var bubbleType;
      var name;
      var changed;
      var special;
      var target;
      /** @type {!Array} */
      var stack = [context || document];
      var type = hasOwn.call(event, "type") ? event.type : event;
      var parts = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      if (node = target = elem = context = context || document, 3 !== context.nodeType && 8 !== context.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf(".") && (type = (parts = type.split(".")).shift(), parts.sort()), name = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = data ? 2 : 3, event.namespace = parts.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + 
      parts.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = context), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, data || !special.trigger || false !== special.trigger.apply(context, value))) {
        if (!data && !special.noBubble && !test(context)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            node = node.parentNode;
          }
          for (; node; node = node.parentNode) {
            stack.push(node);
            elem = node;
          }
          if (elem === (context.ownerDocument || document)) {
            stack.push(elem.defaultView || elem.parentWindow || window);
          }
        }
        /** @type {number} */
        index = 0;
        for (; (node = stack[index++]) && !event.isPropagationStopped();) {
          target = node;
          event.type = 1 < index ? bubbleType : special.bindType || type;
          if (changed = (dataPriv.get(node, "events") || {})[event.type] && dataPriv.get(node, "handle")) {
            changed.apply(node, value);
          }
          if ((changed = name && node[name]) && changed.apply && match(node)) {
            event.result = changed.apply(node, value);
            if (false === event.result) {
              event.preventDefault();
            }
          }
        }
        return event.type = type, data || event.isDefaultPrevented() || special._default && false !== special._default.apply(stack.pop(), value) || !match(context) || name && fn(context[type]) && !test(context) && ((elem = context[name]) && (context[name] = null), jQuery.event.triggered = type, event.isPropagationStopped() && target.addEventListener(type, onInspectorMove), context[type](), event.isPropagationStopped() && target.removeEventListener(type, onInspectorMove), jQuery.event.triggered = 
        void 0, elem && (context[name] = elem)), event.result;
      }
    },
    simulate : function(event, elem, options) {
      var r = jQuery.extend(new jQuery.Event, options, {
        type : event,
        isSimulated : true
      });
      jQuery.event.trigger(r, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger : function(type, a) {
      return this.each(function() {
        jQuery.event.trigger(type, a, this);
      });
    },
    triggerHandler : function(type, data) {
      var parent = this[0];
      if (parent) {
        return jQuery.event.trigger(type, data, parent, true);
      }
    }
  });
  if (!support.focusin) {
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(orig, name) {
      /**
       * @param {(Object|string)} event
       * @return {undefined}
       */
      var handler = function(event) {
        jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[name] = {
        setup : function() {
          var doc = this.ownerDocument || this;
          var t = dataPriv.access(doc, name);
          if (!t) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, name, (t || 0) + 1);
        },
        teardown : function() {
          var doc = this.ownerDocument || this;
          /** @type {number} */
          var attaches = dataPriv.access(doc, name) - 1;
          if (attaches) {
            dataPriv.access(doc, name, attaches);
          } else {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, name);
          }
        }
      };
    });
  }
  var location = window.location;
  /** @type {number} */
  var widgetUniqueIDIndex = Date.now();
  /** @type {!RegExp} */
  var rquery = /\?/;
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || "string" != typeof data) {
      return null;
    }
    try {
      xml = (new window.DOMParser).parseFromString(data, "text/xml");
    } catch (e) {
      xml = void 0;
    }
    return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
  };
  /** @type {!RegExp} */
  var _stringBuilder = /\[\]$/;
  /** @type {!RegExp} */
  var reVowels = /\r?\n/g;
  /** @type {!RegExp} */
  var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
  /** @type {!RegExp} */
  var rsubmittable = /^(?:input|select|textarea|keygen)/i;
  /**
   * @param {?} a
   * @param {string} obj
   * @return {?}
   */
  jQuery.param = function(a, obj) {
    var property;
    /** @type {!Array} */
    var displayUsedBy = [];
    /**
     * @param {?} e
     * @param {!Object} result
     * @return {undefined}
     */
    var add = function(e, result) {
      var value = fn(result) ? result() : result;
      /** @type {string} */
      displayUsedBy[displayUsedBy.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == value ? "" : value);
    };
    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (property in a) {
        extend(property, a[property], obj, add);
      }
    }
    return displayUsedBy.join("&");
  };
  jQuery.fn.extend({
    serialize : function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var string = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
      }).map(function(canCreateDiscussions, ctlParams) {
        var val = jQuery(this).val();
        return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }) : {
          name : ctlParams.name,
          value : val.replace(reVowels, "\r\n")
        };
      }).get();
    }
  });
  /** @type {!RegExp} */
  var jsre = /%20/g;
  /** @type {!RegExp} */
  var rhash = /#.*$/;
  /** @type {!RegExp} */
  var rts = /([?&])_=[^&]*/;
  /** @type {!RegExp} */
  var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  /** @type {!RegExp} */
  var re = /^(?:GET|HEAD)$/;
  /** @type {!RegExp} */
  var rprotocol = /^\/\//;
  var prefilters = {};
  var transports = {};
  /** @type {string} */
  var Pt = "*/".concat("*");
  var originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  jQuery.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : location.href,
      type : "GET",
      isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
      global : true,
      processData : true,
      async : true,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : Pt,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {
        xml : /\bxml\b/,
        html : /\bhtml/,
        json : /\bjson\b/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText",
        json : "responseJSON"
      },
      converters : {
        "* text" : String,
        "text html" : true,
        "text json" : JSON.parse,
        "text xml" : jQuery.parseXML
      },
      flatOptions : {
        url : true,
        context : true
      }
    },
    ajaxSetup : function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
    ajaxTransport : addToPrefiltersOrTransports(transports),
    ajax : function(url, options) {
      /**
       * @param {string} status
       * @param {!Object} nativeStatusText
       * @param {!Array} responses
       * @param {!Object} headers
       * @return {undefined}
       */
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess;
        var success;
        var error;
        var response;
        var modified;
        /** @type {!Object} */
        var statusText = nativeStatusText;
        if (!completed) {
          /** @type {boolean} */
          completed = true;
          if (showAboveTimeout) {
            window.clearTimeout(showAboveTimeout);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          /** @type {number} */
          jqXHR.readyState = 0 < status ? 4 : 0;
          /** @type {boolean} */
          isSuccess = 200 <= status && status < 300 || 304 === status;
          if (responses) {
            response = function(s, ajaxRequest, responses) {
              var ct;
              var type;
              var finalDataType;
              var firstDataType;
              var contents = s.contents;
              var dataTypes = s.dataTypes;
              for (; "*" === dataTypes[0];) {
                dataTypes.shift();
                if (void 0 === ct) {
                  ct = s.mimeType || ajaxRequest.getResponseHeader("Content-Type");
                }
              }
              if (ct) {
                for (type in contents) {
                  if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                  }
                }
              }
              if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
              } else {
                for (type in responses) {
                  if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    /** @type {string} */
                    finalDataType = type;
                    break;
                  }
                  if (!firstDataType) {
                    /** @type {string} */
                    firstDataType = type;
                  }
                }
                /** @type {(string|undefined)} */
                finalDataType = finalDataType || firstDataType;
              }
              if (finalDataType) {
                return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
              }
            }(s, jqXHR, responses);
          }
          response = function(s, response, jqXHR, isSuccess) {
            var conv2;
            var current;
            var conv;
            var data;
            var prev;
            var converters = {};
            var myFish = s.dataTypes.slice();
            if (myFish[1]) {
              for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
              }
            }
            current = myFish.shift();
            for (; current;) {
              if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = myFish.shift()) {
                if ("*" === current) {
                  current = prev;
                } else {
                  if ("*" !== prev && prev !== current) {
                    if (!(conv = converters[prev + " " + current] || converters["* " + current])) {
                      for (conv2 in converters) {
                        if ((data = conv2.split(" "))[1] === current && (conv = converters[prev + " " + data[0]] || converters["* " + data[0]])) {
                          if (true === conv) {
                            conv = converters[conv2];
                          } else {
                            if (true !== converters[conv2]) {
                              /** @type {string} */
                              current = data[0];
                              myFish.unshift(data[1]);
                            }
                          }
                          break;
                        }
                      }
                    }
                    if (true !== conv) {
                      if (conv && s.throws) {
                        response = conv(response);
                      } else {
                        try {
                          response = conv(response);
                        } catch (e) {
                          return {
                            state : "parsererror",
                            error : conv ? e : "No conversion from " + prev + " to " + current
                          };
                        }
                      }
                    }
                  }
                }
              }
            }
            return {
              state : "success",
              data : response
            };
          }(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                jQuery.lastModified[cacheURL] = modified;
              }
              if (modified = jqXHR.getResponseHeader("etag")) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (204 === status || "HEAD" === s.type) {
              /** @type {string} */
              statusText = "nocontent";
            } else {
              if (304 === status) {
                /** @type {string} */
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                /** @type {boolean} */
                isSuccess = !(error = response.error);
              }
            }
          } else {
            error = statusText;
            if (!(!status && statusText)) {
              /** @type {string} */
              statusText = "error";
              if (status < 0) {
                /** @type {number} */
                status = 0;
              }
            }
          }
          /** @type {string} */
          jqXHR.status = status;
          /** @type {string} */
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(obj, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(obj, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (c) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(obj, [jqXHR, statusText]);
          if (c) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof url) {
        /** @type {!Object} */
        options = url;
        url = void 0;
      }
      options = options || {};
      var transport;
      var cacheURL;
      var responseHeadersString;
      var p;
      var showAboveTimeout;
      var urlAnchor;
      var completed;
      var c;
      var i;
      var uncached;
      var s = jQuery.ajaxSetup({}, options);
      var obj = s.context || s;
      var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
      var deferred = jQuery.Deferred();
      var completeDeferred = jQuery.Callbacks("once memory");
      var statusCode = s.statusCode || {};
      var results = {};
      var requestHeadersNames = {};
      /** @type {string} */
      var status = "canceled";
      var jqXHR = {
        readyState : 0,
        getResponseHeader : function(header) {
          var d;
          if (completed) {
            if (!p) {
              p = {};
              for (; d = rheaders.exec(responseHeadersString);) {
                /** @type {string} */
                p[d[1].toLowerCase()] = d[2];
              }
            }
            d = p[header.toLowerCase()];
          }
          return null == d ? null : d;
        },
        getAllResponseHeaders : function() {
          return completed ? responseHeadersString : null;
        },
        setRequestHeader : function(name, value) {
          return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, results[name] = value), this;
        },
        overrideMimeType : function(type) {
          return null == completed && (s.mimeType = type), this;
        },
        statusCode : function(map) {
          var tmp;
          if (map) {
            if (completed) {
              jqXHR.always(map[jqXHR.status]);
            } else {
              for (tmp in map) {
                /** @type {!Array} */
                statusCode[tmp] = [statusCode[tmp], map[tmp]];
              }
            }
          }
          return this;
        },
        abort : function(type) {
          var statusText = type || status;
          return transport && transport.abort(statusText), done(0, statusText), this;
        }
      };
      if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(e) || [""], null == s.crossDomain) {
        urlAnchor = document.createElement("a");
        try {
          /** @type {string} */
          urlAnchor.href = s.url;
          /** @type {string} */
          urlAnchor.href = urlAnchor.href;
          /** @type {boolean} */
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          /** @type {boolean} */
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
        return jqXHR;
      }
      for (i in(c = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !re.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(jsre, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (s.processData || "string" == typeof s.data) && (cacheURL = cacheURL + ((rquery.test(cacheURL) ? 
      "&" : "?") + s.data), delete s.data), false === s.cache && (cacheURL = cacheURL.replace(rts, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && false !== s.contentType || options.contentType) && 
      jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : s.accepts["*"]), s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (false === s.beforeSend.call(obj, jqXHR, s) || completed)) {
        return jqXHR.abort();
      }
      if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
        if (jqXHR.readyState = 1, c && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
          return jqXHR;
        }
        if (s.async && 0 < s.timeout) {
          showAboveTimeout = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          /** @type {boolean} */
          completed = false;
          transport.send(results, done);
        } catch (success) {
          if (completed) {
            throw success;
          }
          done(-1, success);
        }
      } else {
        done(-1, "No Transport");
      }
      return jqXHR;
    },
    getJSON : function(name, callback, data) {
      return jQuery.get(name, callback, data, "json");
    },
    getScript : function(item, options) {
      return jQuery.get(item, void 0, options, "script");
    }
  });
  jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
    /**
     * @param {!Object} url
     * @param {!Object} e
     * @param {!Object} s
     * @param {!Object} o
     * @return {?}
     */
    jQuery[method] = function(url, e, s, o) {
      return fn(e) && (o = o || s, s = e, e = void 0), jQuery.ajax(jQuery.extend({
        url : url,
        type : method,
        dataType : o,
        data : e,
        success : s
      }, jQuery.isPlainObject(url) && url));
    };
  });
  /**
   * @param {string} url
   * @return {?}
   */
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url : url,
      type : "GET",
      dataType : "script",
      cache : true,
      async : false,
      global : false,
      throws : true
    });
  };
  jQuery.fn.extend({
    wrapAll : function(html) {
      var t;
      return this[0] && (fn(html) && (html = html.call(this[0])), t = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        var elem = this;
        for (; elem.firstElementChild;) {
          elem = elem.firstElementChild;
        }
        return elem;
      }).append(this)), this;
    },
    wrapInner : function(html) {
      return fn(html) ? this.each(function(i) {
        jQuery(this).wrapInner(html.call(this, i));
      }) : this.each(function() {
        var e = jQuery(this);
        var contents = e.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          e.append(html);
        }
      });
    },
    wrap : function(html) {
      var isFunction = fn(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap : function(fn) {
      return this.parent(fn).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      }), this;
    }
  });
  /**
   * @param {string} type
   * @return {?}
   */
  jQuery.expr.pseudos.hidden = function(type) {
    return !jQuery.expr.pseudos.visible(type);
  };
  /**
   * @param {!Element} elem
   * @return {?}
   */
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  /**
   * @return {?}
   */
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest;
    } catch (e) {
    }
  };
  var xhrSuccessStatus = {
    0 : 200,
    1223 : 204
  };
  var xhrSupported = jQuery.ajaxSettings.xhr();
  /** @type {boolean} */
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  /** @type {boolean} */
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback;
    var errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send : function(value, callback) {
          var name;
          var xhr = options.xhr();
          if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
            for (name in options.xhrFields) {
              xhr[name] = options.xhrFields[name];
            }
          }
          for (name in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || value["X-Requested-With"] || (value["X-Requested-With"] = "XMLHttpRequest"), value) {
            xhr.setRequestHeader(name, value[name]);
          }
          /**
           * @param {string} event
           * @return {?}
           */
          callback = function(event) {
            return function() {
              if (callback) {
                /** @type {null} */
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                if ("abort" === event) {
                  xhr.abort();
                } else {
                  if ("error" === event) {
                    if ("number" != typeof xhr.status) {
                      callback(0, "error");
                    } else {
                      callback(xhr.status, xhr.statusText);
                    }
                  } else {
                    callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                      binary : xhr.response
                    } : {
                      text : xhr.responseText
                    }, xhr.getAllResponseHeaders());
                  }
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
          if (void 0 !== xhr.onabort) {
            xhr.onabort = errorCallback;
          } else {
            /**
             * @return {undefined}
             */
            xhr.onreadystatechange = function() {
              if (4 === xhr.readyState) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain) {
      /** @type {boolean} */
      options.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /\b(?:java|ecma)script\b/
    },
    converters : {
      "text script" : function(value) {
        return jQuery.globalEval(value), value;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(settings) {
    if (void 0 === settings.cache) {
      /** @type {boolean} */
      settings.cache = false;
    }
    if (settings.crossDomain) {
      /** @type {string} */
      settings.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    var fileElem;
    var callback;
    if (s.crossDomain) {
      return {
        send : function(data, callback) {
          fileElem = jQuery("<script>").prop({
            charset : s.scriptCharset,
            src : s.url
          }).on("load error", callback = function(result) {
            fileElem.remove();
            /** @type {null} */
            callback = null;
            if (result) {
              callback("error" === result.type ? 404 : 200, result.type);
            }
          });
          document.head.appendChild(fileElem[0]);
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var summary;
  /** @type {!Array} */
  var oldCallbacks = [];
  /** @type {!RegExp} */
  var t = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
      return this[indexLookupKey] = true, indexLookupKey;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
    var callbackName;
    var overwritten;
    var responseContainer;
    /** @type {(boolean|string)} */
    var i = false !== s.jsonp && (t.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && t.test(s.data) && "data");
    if (i || "jsonp" === s.dataTypes[0]) {
      return callbackName = s.jsonpCallback = fn(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, i ? s[i] = s[i].replace(t, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
        return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
      }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
        /** @type {!Arguments} */
        responseContainer = arguments;
      }, scanners.always(function() {
        if (void 0 === overwritten) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && fn(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = void 0;
      }), "script";
    }
  });
  /** @type {boolean} */
  support.createHTMLDocument = ((summary = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === summary.childNodes.length);
  /**
   * @param {string} data
   * @param {!Object} context
   * @param {!Function} keepScripts
   * @return {?}
   */
  jQuery.parseHTML = function(data, context, keepScripts) {
    return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, context = false), context || (support.createHTMLDocument ? ((target = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, context.head.appendChild(target)) : context = document), scripts = !keepScripts && [], (parsed = rsingleTag.exec(data)) ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && 
    scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)));
    var target;
    var parsed;
    var scripts;
  };
  /**
   * @param {string} t
   * @param {!Object} value
   * @param {!Array} callback
   * @return {?}
   */
  jQuery.fn.load = function(t, value, callback) {
    var data;
    var method;
    var args;
    var res = this;
    var i = t.indexOf(" ");
    return -1 < i && (data = log(t.slice(i)), t = t.slice(0, i)), fn(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), 0 < res.length && jQuery.ajax({
      url : t,
      type : method || "GET",
      dataType : "html",
      data : value
    }).done(function(response) {
      /** @type {!Arguments} */
      args = arguments;
      res.html(data ? jQuery("<div>").append(jQuery.parseHTML(response)).find(data) : response);
    }).always(callback && function(type, a) {
      res.each(function() {
        callback.apply(this, args || [type.responseText, a, type]);
      });
    }), this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
    /**
     * @param {!Function} e
     * @return {?}
     */
    jQuery.fn[type] = function(e) {
      return this.on(type, e);
    };
  });
  /**
   * @param {?} elem
   * @return {?}
   */
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  jQuery.offset = {
    setOffset : function(element, options, x) {
      var xParent;
      var w;
      var a;
      var h;
      var curOffset;
      var value;
      var propertyName = jQuery.css(element, "position");
      var c = jQuery(element);
      var p = {};
      if ("static" === propertyName) {
        /** @type {string} */
        element.style.position = "relative";
      }
      curOffset = c.offset();
      a = jQuery.css(element, "top");
      value = jQuery.css(element, "left");
      if (("absolute" === propertyName || "fixed" === propertyName) && -1 < (a + value).indexOf("auto")) {
        h = (xParent = c.position()).top;
        w = xParent.left;
      } else {
        /** @type {number} */
        h = parseFloat(a) || 0;
        /** @type {number} */
        w = parseFloat(value) || 0;
      }
      if (fn(options)) {
        options = options.call(element, x, jQuery.extend({}, curOffset));
      }
      if (null != options.top) {
        /** @type {number} */
        p.top = options.top - curOffset.top + h;
      }
      if (null != options.left) {
        /** @type {number} */
        p.left = options.left - curOffset.left + w;
      }
      if ("using" in options) {
        options.using.call(element, p);
      } else {
        c.css(p);
      }
    }
  };
  jQuery.fn.extend({
    offset : function(y) {
      if (arguments.length) {
        return void 0 === y ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, y, i);
        });
      }
      var box;
      var win;
      var aTarget = this[0];
      return aTarget ? aTarget.getClientRects().length ? (box = aTarget.getBoundingClientRect(), win = aTarget.ownerDocument.defaultView, {
        top : box.top + win.pageYOffset,
        left : box.left + win.pageXOffset
      }) : {
        top : 0,
        left : 0
      } : void 0;
    },
    position : function() {
      if (this[0]) {
        var el;
        var offset;
        var node;
        var element = this[0];
        var parentOffset = {
          top : 0,
          left : 0
        };
        if ("fixed" === jQuery.css(element, "position")) {
          offset = element.getBoundingClientRect();
        } else {
          offset = this.offset();
          node = element.ownerDocument;
          el = element.offsetParent || node.documentElement;
          for (; el && (el === node.body || el === node.documentElement) && "static" === jQuery.css(el, "position");) {
            el = el.parentNode;
          }
          if (el && el !== element && 1 === el.nodeType) {
            (parentOffset = jQuery(el).offset()).top += jQuery.css(el, "borderTopWidth", true);
            parentOffset.left += jQuery.css(el, "borderLeftWidth", true);
          }
        }
        return {
          top : offset.top - parentOffset.top - jQuery.css(element, "marginTop", true),
          left : offset.left - parentOffset.left - jQuery.css(element, "marginLeft", true)
        };
      }
    },
    offsetParent : function() {
      return this.map(function() {
        var parent = this.offsetParent;
        for (; parent && "static" === jQuery.css(parent, "position");) {
          parent = parent.offsetParent;
        }
        return parent || elem;
      });
    }
  });
  jQuery.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(type, prop) {
    /** @type {boolean} */
    var top = "pageYOffset" === prop;
    /**
     * @param {?} value
     * @return {?}
     */
    jQuery.fn[type] = function(value) {
      return access(this, function(config, t, value) {
        var window;
        if (test(config) ? window = config : 9 === config.nodeType && (window = config.defaultView), void 0 === value) {
          return window ? window[prop] : config[t];
        }
        if (window) {
          window.scrollTo(top ? window.pageXOffset : value, top ? value : window.pageYOffset);
        } else {
          /** @type {number} */
          config[t] = value;
        }
      }, type, value, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(parent, val) {
      if (val) {
        return val = curCSS(parent, prop), rnumnonpx.test(val) ? jQuery(parent).position()[prop] + "px" : val;
      }
    });
  });
  jQuery.each({
    Height : "height",
    Width : "width"
  }, function(name, type) {
    jQuery.each({
      padding : "inner" + name,
      content : type,
      "" : "outer" + name
    }, function(defaultExtra, type) {
      /**
       * @param {boolean} margin
       * @param {(number|string)} boardManager
       * @return {?}
       */
      jQuery.fn[type] = function(margin, boardManager) {
        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
        var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
        return access(this, function(node, offset, undefined) {
          var doc;
          return test(node) ? 0 === type.indexOf("outer") ? node["inner" + name] : node.document.documentElement["client" + name] : 9 === node.nodeType ? (doc = node.documentElement, Math.max(node.body["scroll" + name], doc["scroll" + name], node.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(node, offset, extra) : jQuery.style(node, offset, undefined, extra);
        }, type, chainable ? margin : void 0, chainable);
      };
    });
  });
  jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, type) {
    /**
     * @param {string} data
     * @param {!Object} fn
     * @return {?}
     */
    jQuery.fn[type] = function(data, fn) {
      return 0 < arguments.length ? this.on(type, null, data, fn) : this.trigger(type);
    };
  });
  jQuery.fn.extend({
    hover : function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind : function(type, data, fn) {
      return this.on(type, null, data, fn);
    },
    unbind : function(selector, fn) {
      return this.off(selector, null, fn);
    },
    delegate : function(e, t, data, callback) {
      return this.on(t, e, data, callback);
    },
    undelegate : function(selector, event, fn) {
      return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", fn);
    }
  });
  /**
   * @param {!Object} p
   * @param {undefined} c
   * @return {?}
   */
  jQuery.proxy = function(p, c) {
    var b;
    var headArgs;
    var proxyFn;
    if ("string" == typeof c && (b = p[c], c = p, p = b), fn(p)) {
      return headArgs = slice.call(arguments, 2), (proxyFn = function() {
        return p.apply(c || this, headArgs.concat(slice.call(arguments)));
      }).guid = p.guid = p.guid || jQuery.guid++, proxyFn;
    }
  };
  /**
   * @param {?} hold
   * @return {undefined}
   */
  jQuery.holdReady = function(hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };
  /** @type {function(*): boolean} */
  jQuery.isArray = Array.isArray;
  /** @type {function(this:JSONType, string, function(string, *): *=): *} */
  jQuery.parseJSON = JSON.parse;
  /** @type {function(!Object, string): ?} */
  jQuery.nodeName = callback;
  /** @type {function(!Object): ?} */
  jQuery.isFunction = fn;
  /** @type {function(!Object): ?} */
  jQuery.isWindow = test;
  /** @type {function(!Object): ?} */
  jQuery.camelCase = camelCase;
  /** @type {function(string): ?} */
  jQuery.type = type;
  /** @type {function(): number} */
  jQuery.now = Date.now;
  /**
   * @param {string} value
   * @return {?}
   */
  jQuery.isNumeric = function(value) {
    var undefined = jQuery.type(value);
    return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
  };
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery;
  var old$ = window.$;
  return jQuery.noConflict = function(deep) {
    return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
  }, zoomAware || (window.jQuery = window.$ = jQuery), jQuery;
}), jQuery.ajaxSetup({
  cache : true
}), jQuery.easing.jswing = jQuery.easing.swing, function($) {
  /**
   * @param {?} options
   * @return {?}
   */
  $.fn.myTab = function(options) {
    return options = jQuery.extend({
      active : 1,
      showSpeed : 400
    }, options), this.each(function() {
      var e = $(this);
      var self = e.children("[data-tab]");
      /** @type {number} */
      var n = options.active - 1;
      e.addClass("simpleTab").prepend('<div class="tab-wrapper"></div>');
      self.addClass("tab-content").each(function() {
        $(this).hide();
        e.find(".tab-wrapper").append('<div><span class="btn">' + $(this).data("tab") + "</span></div>");
      }).eq(n).show();
      e.find(".tab-wrapper span").on("click", function() {
        var html = $(this).parent().index();
        return $(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), $(this).addClass("activeTab"), self.eq(html).is(":hidden") && self.hide().eq(html).fadeIn(options.showSpeed), false;
      }).eq(n).addClass("activeTab");
    });
  };
}(jQuery), function($) {
  /**
   * @param {number} interval
   * @param {!Function} c
   * @param {number} t
   * @param {!Function} f
   * @return {?}
   */
  $.fn.hoverTimeout = function(interval, c, t, f) {
    return this.each(function() {
      /** @type {null} */
      var i = null;
      var t = $(this);
      t.hover(function() {
        clearTimeout(i);
        /** @type {number} */
        i = setTimeout(function() {
          c.call(t);
        }, interval);
      }, function() {
        clearTimeout(i);
        /** @type {number} */
        i = setTimeout(function() {
          f.call(t);
        }, t);
      });
    });
  };
}(jQuery), function($, window, canCreateDiscussions) {
  var defaults = {
    customClass : "simply-scroll",
    frameRate : 30,
    speed : 1,
    orientation : "horizontal",
    auto : true,
    autoMode : "loop",
    manualMode : "end",
    direction : "forwards",
    pauseOnHover : true,
    pauseOnTouch : true,
    pauseButton : ($.fn.simplyScroll = function(url_or_data_or_function) {
      return this.each(function() {
        new $.simplyScroll(this, url_or_data_or_function);
      });
    }, false),
    startOnLoad : false
  };
  /**
   * @param {?} viewName
   * @param {number} parameters
   * @return {undefined}
   */
  $.simplyScroll = function(viewName, parameters) {
    var BDA = this;
    this.o = $.extend({}, defaults, parameters || {});
    /** @type {boolean} */
    this.isAuto = false !== this.o.auto && null !== this.o.autoMode.match(/^loop$/);
    /** @type {boolean} */
    this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal$/) && this.o.orientation == defaults.orientation) && "rtl" == $("html").attr("dir");
    /** @type {boolean} */
    this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards$/) && this.o.direction == defaults.direction && !this.isRTL;
    /** @type {boolean} */
    this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode;
    /** @type {({end: string, move: string, start: string}|{end: string, start: string})} */
    this.events = (this.supportsTouch = "createTouch" in document) ? {
      start : "touchstart MozTouchDown",
      move : "touchmove MozTouchMove",
      end : "touchend touchcancel MozTouchRelease"
    } : {
      start : "mouseenter",
      end : "mouseleave"
    };
    this.$list = $(viewName);
    var j_panels = this.$list.children();
    if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = false) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < j_panels.length) {
      /** @type {boolean} */
      var autoSized = false;
      /** @type {number} */
      var width = 0;
      if (this.isHorizontal) {
        j_panels.each(function() {
          width = width + $(this).outerWidth(true);
        });
        /** @type {boolean} */
        autoSized = j_panels.eq(0).outerWidth(true) * j_panels.length !== width;
      } else {
        j_panels.each(function() {
          width = width + $(this).outerHeight(true);
        });
        /** @type {boolean} */
        autoSized = j_panels.eq(0).outerHeight(true) * j_panels.length !== width;
      }
      if (autoSized) {
        this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list");
        if (this.isHorizontal) {
          this.$list.children().css({
            float : "left",
            width : width + "px"
          });
        } else {
          this.$list.children().css({
            height : width + "px"
          });
        }
      }
    }
    if (this.o.startOnLoad) {
      $(window).load(function() {
        BDA.init();
      });
    } else {
      this.init();
    }
  };
  $.simplyScroll.fn = $.simplyScroll.prototype = {};
  $.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend;
  $.simplyScroll.fn.extend({
    init : function() {
      this.$items = this.$list.children();
      this.$clip = this.$list.parent();
      this.$container = this.$clip.parent();
      this.$btnForward = $(".simply-scroll-forward", this.$container);
      if (this.isHorizontal) {
        this.itemMax = this.$items.eq(0).outerWidth(true);
        this.clipMax = this.$clip.width();
        /** @type {string} */
        this.dimension = "width";
        /** @type {string} */
        this.moveBackClass = "simply-scroll-btn-left";
        /** @type {string} */
        this.moveForwardClass = "simply-scroll-btn-right";
        /** @type {string} */
        this.scrollPos = "Left";
      } else {
        this.itemMax = this.$items.eq(0).outerHeight(true);
        this.clipMax = this.$clip.height();
        /** @type {string} */
        this.dimension = "height";
        /** @type {string} */
        this.moveBackClass = "simply-scroll-btn-up";
        /** @type {string} */
        this.moveForwardClass = "simply-scroll-btn-down";
        /** @type {string} */
        this.scrollPos = "Top";
      }
      /** @type {number} */
      this.posMin = 0;
      /** @type {number} */
      this.posMax = this.$items.length * this.itemMax;
      /** @type {number} */
      var i = Math.ceil(this.clipMax / this.itemMax);
      if (this.isAuto && "loop" == this.o.autoMode && (this.$list.css(this.dimension, this.posMax + this.itemMax * i + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, i).clone(true).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-i).clone(true).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "none")))), this.resetPos(), this.interval = null, 
      this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode) {
        for (; 0 != this.itemMax % this.o.speed;) {
          if (this.o.speed--, 0 === this.o.speed) {
            /** @type {number} */
            this.o.speed = 1;
            break;
          }
        }
      }
      /** @type {null} */
      (c = this).trigger = null;
      /**
       * @param {?} event
       * @return {undefined}
       */
      this.funcMoveForward = function(event) {
        if (void 0 !== event) {
          event.preventDefault();
        }
        c.trigger = c.isAuto || "end" != c.o.manualMode ? null : this;
        if (c.isAuto) {
          if (c.isForwards) {
            c.moveForward();
          } else {
            c.moveBack();
          }
        } else {
          c.moveForward();
        }
      };
      /**
       * @return {undefined}
       */
      this.funcMovePause = function() {
        c.movePause();
      };
      /**
       * @return {undefined}
       */
      this.funcMoveStop = function() {
        c.moveStop();
      };
      /**
       * @return {undefined}
       */
      this.funcMoveResume = function() {
        c.moveResume();
      };
      if (this.isAuto) {
        /** @type {boolean} */
        this.paused = false;
        if (this.supportsTouch && this.$items.find("a").length) {
          /** @type {boolean} */
          this.supportsTouch = false;
        }
        if (this.isAuto && this.o.pauseOnHover && !this.supportsTouch) {
          this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume);
        }
        this.funcMoveForward();
      }
    },
    moveForward : function() {
      var options = this;
      /** @type {string} */
      this.movement = "forward";
      if (null !== this.trigger) {
        this.$btnBack.removeClass("disabled");
      }
      /** @type {number} */
      options.interval = setInterval(function() {
        if (options.$clip[0]["scroll" + options.scrollPos] < options.posMax - options.clipMax) {
          options.$clip[0]["scroll" + options.scrollPos] += options.o.speed;
        } else {
          if (options.isLoop) {
            options.resetPos();
          } else {
            options.moveStop(options.movement);
          }
        }
      }, options.intervalDelay);
    },
    movePause : function() {
      clearInterval(this.interval);
    },
    moveStop : function(event) {
      this.movePause();
      if (null !== this.trigger) {
        if (void 0 !== event) {
          $(this.trigger).addClass("disabled");
        }
        /** @type {null} */
        this.trigger = null;
      }
      if (this.isAuto && "bounce" == this.o.autoMode) {
        if ("forward" == event) {
          this.moveBack();
        } else {
          this.moveForward();
        }
      }
    },
    moveResume : function() {
      if ("forward" == this.movement) {
        this.moveForward();
      } else {
        this.moveBack();
      }
    },
    resetPos : function() {
      this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition;
    }
  });
}(jQuery, window);
/** @type {!Array} */
var _$_662b = ["cookie", "", ";expires=", ";path=/", "=", "test", "ok", ";", "", "click", "", '<input class="emoKey" type="hidden" size="', '" value=" ', '" />', "select", "cursor", "pointer", "", "active", "", "", '<ul class="hide ', '">', "i", '<i class="', "class", '"></i>', "href", "a", "_", "-", '<a href="', "</a>", '</ul><a href="', '</a><ul class="hide ', "li", "</ul>", "ul", ".summary-content", "file-text-o", ".noimage", ".thumb-img", ".post-type", ".thumb-area", "title", ".jmptext", ".h2", 
"s400", "s300", "data-img", "s72-c", "/default.jpg", "/mqdefault.jpg", "https://img.youtube.com/vi/", "video-camera", "/", "no_image", "rgba(0, 0, 0, 0.15)", "img.youtube.com", '<span class="youtubeplay"><i class="fa fa-play-circle-o"></i></span>', "hyoutube", ".latest-img", "music", "camera-retro", "quote-left", '<i class="fa fa-', "$1", '<div class="review-place ', '"><span class="review-value">', '</span><div class="slice"><div class="bar"></div></div></div>', "width", "%", ".bar", "&quot;", '...<a href="', 
'" class="rmtext" title="', " ", "</a>", "style", "background:", "https", 'url("', '")', " no-repeat center center;background-size: cover", "", "", "", "#ajax-search-form", ":text", '<div class="src-result ', ' hide" id="search-result"></div>', "#search-result", "submit", '<div class="loader">', "</div>", "//", "/feeds/posts/default?alt=json-in-script&q=", "&max-results=", '<div class="src-header">', " &quot;", "&quot;</div>", '<a class="src-close ', '" href="/">&times;</a><div class="src-area">', 
"ig", "<span class='src-mark'>", "</span>", "alternate", "enclosure", "content", "summary", "media$thumbnail", "/s", "-c/", "default", "mqdefault", "...", '<div class="src-item"><div class="src-img-outer ', ' go-left"><a class="src-img show" " ', "url('", "')", ' no-repeat center center;background-size: cover" href="', '" ><div class="post-type absolute"><i class="fa fa- ', '"></i></div></a></div><a class="', ' src-title" href="#', '<p class="src-summary" >', "</p>", '<div class="src-morepost"><a class="show btn" title="more" href="/search?q=', 
"&quot;</a></div>", '<a class="close" href="/">&times;</a><strong>', "</strong>", "jsonp", ".src-close", "grid", "vlist", "vgrip", ".post-outer", ".blog-posts.hfeed", "#view .grid", "#view .list", "list", "<b>", "</b><div><span>", "</span><small>", "</small></div>", ".postdate", ".index-post", ".published", "div", "<div></div>", "a.blog-pager-older-link", "", "//", ".disqus.com/blogger_index.js", "html", ".hfeed-inner", "vgrid", "item", '<a class="loadpost show" href="javascript:;">', '<div class="loader hide">Loading...</div>', 
'<div class="rct-loadmore no-decor" ></div>', ".blog-pagerindex", "&#171;", "hlist", "hgrip", "&#187;", "page", '<span class="showpage"><a href="">', "</a></span>", '<span class="showpageNum"><a href="/search/label/', "?&max-results=", '<span class="showpageNum"><a class="xpagex" href="#" alt="', '<span class="showpageNum"><a class="xlabelx" href="#" alt="', '<span class="showpageNum"><a href="">1</a></span>', '">1</a></span>', '<span class="dotxpage"> ... </span>', '<span class="showpagePoint">', 
'<span class="showpageNum"><a href="#" class="xpagex" alt="', '<span class="showpageNum"><a href="#" class="xlabelx" alt="', "pageArea", "blog-pagerindex", "display", "block", "load-next", ".hfeed .loader", "alt", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script", "/feeds/posts/summary/-/", "?start-index=", ".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx", "/search/label/", "?updated-max", "?max", "?&max", "?q=", ".html", "max-results=", "#PageNo=", "/feeds/posts/summary?max-results=1&alt=json-in-script", 
"label", "?max-results=1&alt=json-in-script", "/search?updated-max=", "?updated-max=", ".blog-posts .loader", "#main", "html, body", ".sidebar-right", "#sidebar-top", "#sidebartabs", "#sidebar-bottom", ".sidebar-right .wrap-inner", "data-label", "data-type", "data-url", "data-color", '<i class="fa fa-flash"></i> ', "h2", ",", '<a class="morepost btn" href="', "/search", "recent", "/label/", "?max-results=", '<a href="', '"></a>', "slider ", "column ", "fbig ", "gallery ", "featured ", "carousel ", 
"#", '<div class="owl-controls"><div class="owl-nav"></div></div>', "s", "c", "n", "fs", "f3", "random", "fade", "data-label data-url data-type data-color", "#drcmt", '<script async="true" src="//', ".disqus.com/recent_comments_widget.js?num_items=", '&avatar_size=32&excerpt_length=100&hide_mods=0" >\x3c/script>', '<div class="disqus-summary" />', ".dsq-widget-user,.dsq-widget-comment,.dsq-widget-meta", ".dsq-widget-item", "", "", "", "", '<div class="aazs-flickr">', "{", "}", '<div class="recent-tab">', 
'<div data-tab="', "aazs-widget", ".recent-tab", "complex ", ".tab-content", "script", "facebook-jssdk", "//connect.facebook.net/", "/sdk.js", "v3.1", "edge.create", "unlock_content", "message.send", "xfbml.render", ".FBbox", "load-done", "FBbox", '<div id="FBbox"><div class="fb-page" data-href="', '" data-width="550"></div></div>', "widget-loaded", "dhref-done", "", "/w400/", "", "", "", "", "", "", "", "", "", "", "", "", "", '<span class="hide">Facebook</span>', '<span><b class="shre-ct a{total}">{total}</b></span>', 
"", ".dhref", ".wrap-inner", "px", ".innerwrap", "absolute", "side-fixed", "0", "auto", "sub-menu", "sub-sub-menu", ".submenu", "thumb-outer", "animated zoomIn", "heading-text", '<div class="loader"></div>', ".varsumlength", ".varfixMenu", ".varmonthName", "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec", ".varstickySide", ".varsliderspeed", ".varnavipostpage", ".varmaxcommentdepth", ".vardateformat", "YYYY/MM/DD", ".varrcadminBlog", "y", ".varhideauthor", ".varhideLatest", ".varcseID", ".varhideEmo", 
".varhomelist", ".varfeatpost", ".varhomePageNavi", ".varfbappsid", "160447341157187", ".varfblang", "en_US", ".vardajaxPageNavi", ".varsrctext", "Type and hit enter to search...", ".varntext", "Previous Article", ".varptext", "Next Article", ".varmtext", "More", ".varlmtext", "Load more entries...", ".varvmtext", "View More About", ".varreltext", "RELATED CONTENT", ".varrectext", "Recent Post", ".varrecotext", "Recommended For You", ".vartwitterauthor", "A_A_Z_S", ".vardisqusshortname", "", ".varshowrelated", 
".varshowrecommended", ".varrelstyle", "carousel", ".varhexcerpt", ".varhreview", ".vartopbreakline", ".varbottombreakline", ".varautoplay", ".vartopbreaklineload", ".varbottombreaklineload", "", ".varrecentpost", ".varrandompost", ".varfeaturedpost", ".varrecentcomment", ".varfbig1", ".varfbig2", ".varfbig1animated", ".vargallery1", ".vargallery2", ".vargallery3", ".varcolumn1", ".varcolumn2", ".varcolumn1animated", ".varcolumn2animated", ".varnewsticker", ".varslider", ".varcarousel1", ".varcarousel2", 
".varrelated", ".varvideo", ".varfeatured1", ".varfeatured2", ".varfeatured3", ".varfeatured4", ".varlist", ".varhot", ".vardisquscomment", ".varflickrbadge", ".vartimeline", "allaboutzodiacsigns", "", ".home-area #Blog1,.home-area .posts-title", "", ".item-topmeta", ".post-body", 'if (this.value == "") {this.value = "', '";}', 'if (this.value == "', '") {this.value = "";}', ".errorsrc input,.search-form input", "text/javascript", "https", "https:", "https:", "//www.google.com/cse/cse.js?cx=", "", 
"#body-area", "custom-cse-sevida", "searchresults-only0", ".comments-tabs", ".canUrl", ".bposId", ".pstUrl", "<div data-tab='Google+'><div class='tab-blogger'></div></div>", "<div data-tab='Disqus'><div class='tab-disqus'><div id='disqus_thread'></div></div></div>", "<div data-tab='Facebook'><div class='tab-facebook'><div class='fb-comments' data-numposts='5' data-width='100%' data-href='", "'></div></div></div>", "", "show", ".menu", ".", '<div class="sub-icon"><span class="sub-button ', ' btn"><i class="fa fa-caret-down"></i></span></div>', 
"submenu", "ul.", ' btn"><i class="fa fa-caret-right"></i></span></div>', "subsubmenu", "<span class='menu-desc'>", ".menu li a", "<span class='soc-desc'>", "<span class='soc-count'>", ".social-desc", "have-desc", ".menu-desc", ".main-menu li", ".sc-move", "padding-left", ".main-menu a", "a.home-icon", "left", '.main-menu a[href="#"]', "easeOutQuad", "nohover", ".home-icon", ".main-menu > li", ":not(:animated)", "easeInExpo", ".menu li", "", "", "", '<div class="emoWrap hide">', "", "iframe#comment-editor", 
" <amp-img width='36' height='36' layout='responsive' '' src='", "' alt='", "'/>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "data-tab", ".widget", "#sidebar-tabs1", ".labels-wrap", ".plabelsbtn", ".comments", "home-area", "#container", "index-area", "index", "#aazs", ".searchQuered", "archive", "ablist", "abgrip", "<div ", ".HTML", '"', '" ', "f2", "slide-width=630", ' class="widget-area mywidget hide"></div><div class="handle mywidget hide"></div>', 
'<div class="wid-pagenumber"></div>', '<a class="wid-pagenum btn" alt="1">&#171;</a>', '<a class="wid-pagenum btn" alt="', '">&#171;</a>', '<a class="wid-pagenum btn" alt="1">1</a>', "<span> ... </span>", "<span ", ";border-color:", ';background-image:initial" ', 'class="actual">', '">&#187;</a>', ".wid-pagenumber", '<div class="handle"></div><div class="handle2 json-process"><div class="loader"></div></div>', ".widget-area", ".handle2", "data-tag", "/feeds/posts/default?start-index=", "&orderby=published&alt=json-in-script", 
"/feeds/posts/default/-/", ".wid-pagenum", "replies", "text/html", 'class="review-place absolute"><span class="review-value">', '</span><div class="slice"><div "width:', '%" class="bar"></div></div></div>', ".blogspot", "com", ".blogspot.com", ".blog-posts", ".items:gt(", ")", ".handle", "hide", ".handle,.loader,.handle2", ".readmorebut", "noborder", "aazs", "owl-carousel", "fadeOut", "zoomIn", ".owl-nav", ".items", "<div class='wrapitem'></div>", "<div class='feat-wrapitem'></div>", '<div class="feat-wrapinner"></div>', 
".feat-wrapitem:first-child", ".feat-wrapinner", "<div class='fbig-widget-area'></div>", "gallery", " hovergallery", "show botwid", ".hover-info", ".hoveffect", ".thumb-outer", ".rcthumb", "s150", "s600", "mega-menu", "feed-proc", "zoomIn animated", ".fbig-widget-area .items", "<div class='animated-item'></div>", ".animated-item", '<div class="animated-area"></div>', "mouseleave touchend", "start", "mouseenter touchstart", "stop", ".owl-carousel", "score", "d", ' class="', "first-item ", 'items"><div class="items-inner">', 
'class="rcptime">', 'class="postdate absolute"><b>', "</small></div></div>", '<div class="table-cell thumb-outer', " hoveffect", '"><div class="mythumb thumb-area', " first-image", '"><div class="post-type absolute"><i class="fa fa-', '"></i></div><a class="rcthumb show" title="', '" href="', '" data-img="', '"', "ytimg.googleusercontent.com", "</a></div></div>", '"border-', "right", "-color:", 'class="', "first-area ", 'content-area table-cell">', '"color:', 'class="ct-before"><i class="fa fa-circle"></i></div>', 
"<h3 ", '"', "background-", "color:", 'class="heading-text"><a ', 'class="hoveffect"', ' href="', '</a></h3><div class="metainfo">', '<span class="wid-author"><i class="fa fa-user"></i> ', "</span> ", '<span class="wid-date"><i class="fa fa-calendar"></i> ', "DD", "MM", "YYYY", '<span class="widcomments"><i class="fa fa-comments"></i> <a href="', '#blogger_cm">', '<div class="psummary hide">', '<a class="readmorebut" href="', '#more" title="', '">More</a>', '<span class="rcptags absolute"><a ', 'class="btn" title="', 
"</div></div>", 'a[class="item-tag"]:lt(', '<h4><span class="title-wrap">', '</span></h4><div class="owl-nav"></div>', "/feeds/posts/summary?max-results=0&orderby=published&alt=json-in-script", "/feeds/posts/default?max-results=", "&orderby=published&start-index=", "&alt=json-in-script", "/feeds/comments/default?alt=json-in-script&orderby=published", '<div class="rcomment-area">', '<div class="rcomment-item', " rcadmin", " rcguest", '<img class="rcomment-img" alt="', '" title="', '" target="_blank" rel="noopener" href="', 
'" src="', '"/>', '<div class="rcomment-info"><b><a target="_blank" rel="nofollow noopener" href="#', '</a></b> on:<i><a class="rcomment-title" href=" ', '</a></i><div class="rcomment-meta"><div class="com-date"><b>', '</small></div></div><div class="com-time">', "</div></div></div>", '<div class="rcomment-summary">', '<div class="clear"></div></div>', " <amp-img layout='responsive' alt='emo' src='", "' class='emo' alt='", ".rcomment-summary", "<span>No result!</span>", "Anonymous", "", "g", '<div class="shrt shrt-$1" $2 $3>', 
".post-body,.cm_body p,.HTML .widget-content", "icon", '<i class="fa shrt-icon ', "fa-", "Tab", "Dont Have any text content", ".shrt-content", "shrt-tabhtml", ".shrt-tab,.shrt-vtab", "", "", "", '<div class="acrd-content">', "My accordion", ".shrt-item", "current", ".acrd-toggle", "showed", ".acrd-content", ".shrt-accordion", "fast", ".acrd-content:visible", "h3.acrd-toggle", ".shrt-accordion .acrd-toggle", "src", "color", "featured", "height", "visual", "comments", "user", "playlist", '<div class="inlinestyle frame-shrt-soundcloud', 
" pfeatured", '"><amp-iframe width="', "320", '" height="', "130", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/', "tracks", "users", "xxxxxxx", "&amp;color=", "ff5500", "&amp;auto_play=", "false", "&amp;hide_related=false&amp;show_comments=", "&amp;show_user=", "true", "&amp;show_reposts=false&amp;visual=", '"><div overflow="true"/></amp-iframe></div>', 
".shrt-soundcloud", "highlight", "background", "info", "logo", '<div class="inlinestyle frame-shrt-dailymotion', '"><amp-iframe width="', "270", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.dailymotion.com/embed/video/', "x12k542", "?logo=", "1", "&info=", "&highlight=", "29b7ff", "&foreground=", "ffffff", "&background=", "000000", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', 
".shrt-dailymotion", "control", "related", '<div class="inlinestyle frame-shrt-youtube', "370", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.youtube.com/embed/', "9ua_4ajpP58", "?list=", "&amp;rel=", "&amp;controls=", "&amp;showinfo=", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-youtube", '<div class="inlinestyle frame-shrt-map', '" src="https://www.google.com/maps/embed?pb=', 
'"></amp-iframe></div>', ".shrt-map", "shrt-message", ".shrt-alert, .shrt-warning, .shrt-update, .shrt-success, .shrt-info, .shrt-error", '<div class="headline">', '<div class="message-wrapper">', ".shrt-message", "url", "rel", 'href="', '"', '<a class="shrtImgUrl ', ' rel="', '<amp-img layout="responsive" class="shrtImg', '" width="', "", '"/>', ".shrt-img", "glpost", "br", ".shrt-pgallery,.shrt-bgallery", "type", '<pre data-codetype="', "HTML", "Add some code here", "</pre>", ".shrt-code", "pre", 
'<span class="line-number"></span>', '<span class="cl"></span>', "span", "<span>", "#contact", ".shrt-contact", '" class="jdshrt-tooltip">', "Insert Link Title", "Insert Tooltip Text", "</span></a>", ".shrt-tooltip", '<div class="shrt-slide-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ') no-repeat center center;background-size: cover;" href="', '"></a><div class="shrt-summary">', '<h3><a href="', "</a></h3>", "<p>", "shrt-inhtml", ".shrt-pslide", '<div class="shrt-carousel-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', 
".shrt-pcarousel", "top", "review-value", '<div class="rev-item"><div class="rev-desc">', "No Detail", '</span></div><div class="rev-value-outer"><div class="rev-value" data-value="', '" "width:', '%"></div></div></div>', '<div class="rev-summary"><div class="rev-desc-place table-cell"><h4>', "No Title", "</h4><span>", "No Description", '</span></div><div class="rev-overall table-cell"><div class="overall-inner"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', 
"No Label", "</span></div></div></div>", '<div class="top-revscrore"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "</span></div>", ".rev-value", "data-value", ".rev-score", "p", ".c100", "rotate(", "deg)", ".c100 .bar", ".shrt-review", ".widget-content", 'data-url="', 'data-color="', '<div class="aazs-widget" data-label="', '" data-type="', ">", '<div class="aazs-widget" data-label="random" data-type="simple rcpost">', 
'<div class="aazs-widget" data-label="random" data-type="simple rdpost">', '" data-type="simple ftpost">', ".aazs-widget", ".post-body strike", ".post-title", ".post-body h2 strike", ".post-body h3 strike", ".post-subtitle", "id", ".post", "#post-url", "unlocked", "unlocked-", "</locktag>", "<locktag>", '<div class="locked-content"><div class="inner"><i class="color fa fa-lock"></i><div class="locked-content-actions"><div class="locked-content-action"><div class="fb-like" data-href="', '" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div></div></div></div></div>', 
"", ".item-post .post-body", "", "", "", "", "", "", ".item-area", ".cm_form", '<a href="#origin_cform" onclick="Reset_Comment_Form()">', "#r_f_c", "#comment-editor", "&parentID=", "#%7B", ".profile-sec .widget", ' hover" href="', '<a class="fa fa-', ".fa", "<div class='authoriconBox'></div>", ".profile-sec .widget-content", ".item-topmeta .fn", "All About Zodiac Signs", ".authoriconBox", ".authorProfile p", ".authorSocial", '<span class="', " hover", "fa fa-", '"></span>', ".authorSocial a", ".adsinside", 
"left-post", "body", "right-post", "left-side", "right-side", "full-post", "hide-adstitle", '<div class="adsinside-it ads-outer"></div>', ".adsinside-it", ".adsbelow", '<div class="adstitle', "", '"><div class="adspltop"></div>', "", ".adspltop", "", "", "", "", ".adsendpost", '<div class="adsbottom', "", '<div class="adsplbottom"></div></div>', ".bottom-infoitem", ".adsplbottom", "", '<input type="hidden" class="aazs-page"></input><input type="hidden" class="aazs-per-page"></input>', '<div class="page-place no-decor"></div>', 
"[lnt]", "[fnt]", '</div><div class="page-item">', '<div class="page-item">', ".page-place", ".aazs-page", ".aazs-per-page", '<a class="previous_link btn"><i class="fa fa-chevron-left"></i></a>', '<a class="page_link btn" data-title="', '" ","href"," longdesc="', '<a class="next_link btn"><i class="fa fa-chevron-right"></i></a>', "active_page", ".page_link:first", "none", ".active_page", ".page_link[longdesc=", "]", ".page_link", ".previous_link", ".next_link", "data-title", ".all_link", '@<a href="#c', 
".cm_wrap .cm_body p", "#comment-form_", "#rc", "parentId", "data-level", "#c", ":first", ":first .cm_reply", '<div class="cm_wrap" id="c', '" data-level="', " .cm_child:first", "/s55-c/", ".cm-img", '<div class="nw_com"></div>', ".nw_com", ".comments-tabs .tab-wrapper div", ".comments-tabs .tab-wrapper", "table", "pfeatured", ".tr-caption", '<span class="pcaption absolute">', ".pfeatured", ".post-body img", ".post-featured", '<div class="slide-pfeatured"></div>', ".slide-pfeatured", ".glpost", ".separator", 
".post-featured a", ".post-featured > a", ".post-featured img", "/s600/", '<div class="hide url-post"><input aria-label="Post Url" class="url-post-input" type="text" value="" ', '" /></div>', ".url-post", ".showlink", "hover", ".item-share a", ".item-snippet", ".body-area", "", "show-popup", "", "", "", "", "", "", '<a class="menu-morepost', " random", '" href="/search', '"><i class="fa fa-plus"></i></a>', "mcarousel", '<div class="normal-tab">', ".normal-tab", '<a class="menu-morepost" href="/search/label/', 
"mtab", "mbig", "menulinks", ".links-submenu .widget", ".links-submenu", '<div class="links-content"><h2>', '</h2><div class="widget-content">', ".links-content", "gridpost", '<a class="grid-h2" href="/search', '<a class="morepost btn" href="/search', "li.submenu", ".menu-search", ".mobile-search", ".social-icon", ".mobile-icons", ":hidden", ".mobile-menu .sub-icon", '<a class="blog-pager-older-link-item go-right oldernewerright" title="Next Article - [title] - posted on [date]" href="[url]"><span>', 
"</span><div>[title]</div></a>", '<a class="blog-pager-newer-link-item go-left oldernewerleft" title="Previous Article - [title] - posted on [date]" href="[url]"><span>', '<amp-img layout="responsive" alt="blog-pager" src="', "a.blog-pager-older-link-item", "a.blog-pager-newer-link-item", "data-trans", "#body-area *", "span.trans", "scroll", ".header-wrap", "scrolled", ".container", "scroll-up", "fixmenu-work", ".allaboutzodiacsigns", "15px", ".sidebar-left", "stickyside-work", ".widget-loaded", 
"#facebook-jssdk", "item-area", ".tab-disqus", "disqus-loaded", ".disqus.com/embed.js", "data-timestamp", "", "", "", "", ":", "a.icons-facebook", "a.dhref-done", "item-page-loaded", ".pager-isi", "/feeds/posts/default?alt=json-in-script&published-min=", "&max-results=0&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=", "&max-results=3&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?", ".populars-img", ".img-change", 'background:url("', 
'") no-repeat center center;background-size: cover', "img-change", "showup", ".gotop", ".item-tag", ".reco-place", '<div class="reco-place blog-posts"><h4>', '</h4><div class="reco-inner"></div><span class="btn reco-close"><i class="fa fa-close"></i></span></div>', ".reco-inner", "showIt", "reco-click", ".reco-close", ".itemtags", ".footer-area", "related-work", "#related_posts", "related-work rel-", "fbig", "data-count", "data-number", ".tagscount", "[id=", "string", "transitioning", "1s ease-in-out", 
"a[href*=\\#]:not([href=\\#])", "transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", "resize", "small-wid", ".HTML > .widget-content", "small-post", ".tab-blogger #blogger_cm", "#blogger_cm", ".tab-blogger", "#gPlusComment", "#Blog1", "#gPlusComment > div", ".main-wrapper", ".sidebar-right .innerwrap", ".sidebartabs", "min-height", "-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform", "translate3d(1px,1px,1px)", "", "", "ontouchstart", "touch", "Safari", 
"CriOS", "standalone", " translateZ(0)", "onorientationchange", "orientationchange", "click touchstart", "mousedown", "touchmove", "mousemove", "touchend", "mouseup", "0s", ".mobile-menu .tab-wrapper a,.sub-button,.sub-button .fa", "ms", "translate(", "px,0)", "", "", "#allaboutzodiacsigns", "", ".index-post-outer"];
/**
 * @return {?}
 */
function haveCookie() {
  return _$_662b[0] in document;
}
/**
 * @param {!Function} name
 * @param {!Object} value
 * @param {number} expires
 * @return {?}
 */
function setCookie(name, value, expires) {
  if (!haveCookie()) {
    return false;
  }
  /** @type {!Date} */
  var d = new Date;
  return d.setDate(d.getDate() + expires), expires = escape(value) + (null == expires ? _$_662b[1] : _$_662b[2] + d.toUTCString()) + _$_662b[3], document.cookie = name + _$_662b[4] + expires, getCookie(name) === value;
}
/**
 * @return {?}
 */
function testcookie() {
  return !!setCookie(_$_662b[5], _$_662b[6]);
}
/**
 * @param {string} name
 * @return {?}
 */
function getCookie(name) {
  if (!havecookie()) {
    return _$_662b[1];
  }
  var i;
  var latestLineText;
  var str_out;
  /** @type {!Array<string>} */
  var commentTags = document.cookie.split(_$_662b[7]);
  /** @type {number} */
  i = 0;
  for (; i < commentTags.length; i++) {
    if (latestLineText = commentTags[i].substr(0, commentTags[i].indexOf(_$_662b[4])), str_out = commentTags[i].substr(commentTags[i].indexOf(_$_662b[4]) + 1), (latestLineText = latestLineText.replace(/^\s+|\s+$/g, _$_662b[1])) == name) {
      return unescape(str_out);
    }
  }
  return _$_662b[1];
}
/**
 * @param {!Function} name
 * @return {undefined}
 */
function delCookie(name) {
  setCookie(name, _$_662b[1], -1);
}
/**
 * @return {?}
 */
function checkLocal() {
  return _$_662b[8] != typeof localStorage;
}
/**
 * @param {?} key
 * @param {!Object} value
 * @return {?}
 */
function setLocal(key, value) {
  return !!checkLocal() && (localStorage.setItem(key, value), true);
}
/**
 * @param {number} name
 * @return {?}
 */
function getLocal(name) {
  return checkLocal() && (name = localStorage.getItem(name)) ? name : _$_662b[1];
}
/**
 * @param {?} mirrorName
 * @return {undefined}
 */
function delLocal(mirrorName) {
  localStorage.removeItem(mirrorName);
}
/**
 * @param {?} token
 * @param {!Object} uid
 * @return {?}
 */
function setCookieLocal(token, uid) {
  return checkLocal() ? setLocal(token, uid) : !!testCookie() && setCookie(token, uid);
}
/**
 * @param {undefined} target
 * @return {?}
 */
function getCookieLocal(target) {
  return checkLocal() ? getLocal(target) : testCookie() ? getCookie(target) : _$_662b[1];
}
/**
 * @param {?} key
 * @return {?}
 */
function delCookieLocal(key) {
  return checkLocal() ? delLocal(key) : testCookie() ? delCookie(key) : _$_662b[1];
}
/**
 * @param {?} e
 * @param {?} islongclick
 * @return {undefined}
 */
function cmnu(e, islongclick) {
  var html = _$_662b[21] + islongclick + _$_662b[22];
  $(_$_662b[35], e).each(function() {
    var e = $(this).text();
    var id = e.substr(0, 1);
    var components = e.substr(1);
    var d = $(this).find(_$_662b[23]).length ? _$_662b[24] + $(this).find(_$_662b[23]).attr(_$_662b[25]) + _$_662b[26] : _$_662b[1];
    var i = $(this).find(_$_662b[28]).attr(_$_662b[27]);
    html = _$_662b[29] == id || _$_662b[30] == id ? html + (_$_662b[31] + i + _$_662b[22] + d + components + _$_662b[32]) : html + (_$_662b[33] + i + _$_662b[22] + d + e + _$_662b[34] + islongclick + _$_662b[22]);
  });
  html = html + _$_662b[36];
  $(e).html(html);
  $(_$_662b[37], e).each(function() {
    var e = $(this);
    if (0 == e.html().replace(rgx[0], _$_662b[1]).length) {
      e.remove();
    }
  });
  $(_$_662b[35], e).each(function() {
    var e = $(this);
    if (0 == e.html().replace(rgx[0], _$_662b[1]).length) {
      e.remove();
    }
  });
}
/**
 * @param {!Array} $tabSelector
 * @return {undefined}
 */
function lpost($tabSelector) {
  var i;
  var tilecontent = $tabSelector.find(_$_662b[38]);
  var text = tilecontent.html();
  /** @type {!Array} */
  var c = [];
  /** @type {!Array} */
  i = [];
  c = _$_662b[39];
  var t = $tabSelector.find(_$_662b[40]);
  var s = $tabSelector.find(_$_662b[41]);
  var b = $tabSelector.find(_$_662b[42]);
  i = $tabSelector.find(_$_662b[43]).width();
  var _ = $(_$_662b[45]).attr(_$_662b[44]);
  $tabSelector = ($panel = $tabSelector.find(_$_662b[46])).text();
  var $panel = $panel.find(_$_662b[28]).attr(_$_662b[27]);
  var frameworkLibScriptTag = 300 < i ? _$_662b[47] : _$_662b[48];
  if (s.attr(_$_662b[49], function(canCreateDiscussions, originalBaseURL) {
    return originalBaseURL.replace(_$_662b[51], _$_662b[52]).replace(_$_662b[50], frameworkLibScriptTag);
  }), t.length && (rgx[6].test(text) || rgx[8].test(text) ? (c = rgx[6].exec(rgx[6]), i = rgx[8].exec(text), c = null != c ? c[5] : i[3], i = _$_662b[53] + c + _$_662b[52], c = _$_662b[54]) : i = rgx[5].test(text) ? (i = rgx[5].exec(text))[4].replace(rgx[7], _$_662b[55] + frameworkLibScriptTag + _$_662b[55]) : _$_662b[56], t.attr(_$_662b[49], _$_662b[56] === i ? _$_662b[57] : i)), -1 != s.attr(_$_662b[49]).indexOf(_$_662b[58]) && (s.append(_$_662b[59]), s.parent(_$_662b[61]).addClass(_$_662b[60])), 
  rgx[9].test(text) ? c = _$_662b[54] : rgx[10].test(text) ? c = _$_662b[62] : rgx[11].test(text) ? c = _$_662b[63] : rgx[12].test(text) && (c = rgx[12].exec(text).index <= 5 ? _$_662b[64] : _$_662b[39]), b.prepend(_$_662b[65] + c + _$_662b[26]), rgx[29].test(text) && !hrev) {
    /** @type {!Array} */
    t = [];
    /** @type {number} */
    b = 0;
    c = (t = text.match(rgx[29])).length;
    /** @type {number} */
    i = 0;
    for (; i < c; i++) {
      /** @type {number} */
      b = b + parseInt(t[i].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
    }
    /** @type {number} */
    t = b / c;
    s.append(_$_662b[67] + rgx[1] + _$_662b[68] + t.toFixed(1) + _$_662b[69]);
    s.find(_$_662b[72]).css(_$_662b[70], 10 * t.toFixed(1) + _$_662b[71]);
  }
  if ((text = text.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > sumLength) {
    text = text.substring(0, sumLength) + _$_662b[74] + $panel + _$_662b[75] + _ + _$_662b[76] + $tabSelector + _$_662b[22] + _ + _$_662b[77];
  }
  tilecontent.html(text);
  s.attr(_$_662b[78], _$_662b[79] + (-1 != s.attr(_$_662b[49]).indexOf(_$_662b[80]) ? _$_662b[81] + s.attr(_$_662b[49]) + _$_662b[82] : _$_662b[57]) + _$_662b[83]);
}
/**
 * @param {?} extra
 * @return {undefined}
 */
function ajaxsrc(extra) {
  !function(jQuery) {
    var body = {
      blogURL : _$_662b[1],
      srcBlank : _$_662b[56],
      findText : _$_662b[84],
      NotfindText : _$_662b[85],
      Showthumb : true,
      LoadingText : _$_662b[86],
      viewMoreText : vmtx,
      scrthumbSize : 50,
      MaxPost : 10,
      summaryLength : 100
    };
    var t = (body = jQuery.extend({}, body, extra), jQuery(_$_662b[87]));
    var $conditionsRuleMajor = t.find(_$_662b[88]);
    t.append(_$_662b[89] + rgx[1] + _$_662b[90]);
    var toggle_object = jQuery(_$_662b[91]);
    t.on(_$_662b[92], function() {
      var f = $conditionsRuleMajor.val();
      return toggle_object.show().html(_$_662b[93] + body.LoadingText + _$_662b[94]), jQuery.get((_$_662b[1] === body.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : body.blogURL) + _$_662b[96] + f + _$_662b[97] + body.MaxPost, function(data) {
        var t;
        var k;
        var dmgVals;
        var testListPath;
        var currentFieldType;
        var html;
        var results = data.feed.entry;
        if (void 0 !== results) {
          html = _$_662b[98] + body.findText + _$_662b[99] + f + _$_662b[100];
          html = html + (_$_662b[101] + rgx[1] + _$_662b[102]);
          /** @type {number} */
          var i = 0;
          var l = results.length;
          for (; i < l; i++) {
            /** @type {!RegExp} */
            var c = new RegExp(f, _$_662b[103]);
            dmgVals = results[i].title.$t.replace(c, _$_662b[104] + f + _$_662b[105]);
            t = results[i].link.length;
            /** @type {number} */
            k = 0;
            for (; k < t; k++) {
              if (_$_662b[106] == results[i].link[k].rel) {
                testListPath = results[i].link[k].href;
              }
            }
            /** @type {number} */
            k = 0;
            for (; k < t; k++) {
              if (_$_662b[107] == results[i].link[k].rel) {
                currentFieldType = results[i].link[k].type;
                break;
              }
              currentFieldType = _$_662b[39];
            }
            t = _$_662b[108] in results[i] ? results[i].content.$t : _$_662b[109] in results[i] ? results[i].summary.$t : _$_662b[1];
            if (_$_662b[110] in results[i]) {
              k = results[i].media$thumbnail.url.replace(rgx[7], _$_662b[111] + body.scrthumbSize + _$_662b[112]);
              if (-1 != results[i].media$thumbnail.url.indexOf(_$_662b[58])) {
                k = results[i].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]);
                currentFieldType = _$_662b[54];
              }
            } else {
              if (rgx[6].test(t) || rgx[8].test(t)) {
                currentFieldType = rgx[6].exec(rgx[6]);
                k = rgx[8].exec(t);
                k = _$_662b[53] + (null != currentFieldType ? currentFieldType[5] : k[3]) + _$_662b[52];
                currentFieldType = _$_662b[54];
              } else {
                k = rgx[5].test(t) ? (k = rgx[5].exec(t))[4].replace(rgx[7], _$_662b[111] + body.scrthumbSize + _$_662b[112]) : body.srcBlank;
              }
            }
            if (rgx[9].test(t)) {
              currentFieldType = _$_662b[54];
            } else {
              if (rgx[10].test(t)) {
                currentFieldType = _$_662b[62];
              } else {
                if (rgx[11].test(t)) {
                  currentFieldType = _$_662b[63];
                } else {
                  if (rgx[12].test(t)) {
                    currentFieldType = rgx[12].exec(t).index <= 5 ? _$_662b[64] : _$_662b[39];
                  }
                }
              }
            }
            if ((t = t.replace(rgx[15], _$_662b[1]).replace(/"/g, _$_662b[73]).replace(rgx[16], _$_662b[1])).length > body.summaryLength) {
              t = t.substring(0, body.summaryLength) + _$_662b[115];
            }
            t = t.replace(c, _$_662b[104] + f + _$_662b[105]);
            html = html + (_$_662b[116] + rgx[30] + _$_662b[117] + (_$_662b[56] === k ? _$_662b[57] : _$_662b[118] + k + _$_662b[119]) + _$_662b[120] + testListPath + _$_662b[121] + currentFieldType + _$_662b[122] + rgx[32] + _$_662b[123] + testListPath + _$_662b[22] + dmgVals + _$_662b[77] + (0 < body.summaryLength ? _$_662b[124] + t + _$_662b[125] : _$_662b[1]) + _$_662b[94]);
          }
          html = html + (_$_662b[94] + (data.feed.openSearch$totalResults.$t > data.feed.openSearch$itemsPerPage.$t ? _$_662b[126] + f + _$_662b[22] + body.viewMoreText + _$_662b[99] + f + _$_662b[127] : _$_662b[1]));
          toggle_object.html(html);
        } else {
          toggle_object.html(_$_662b[128] + body.NotfindText + _$_662b[129]);
        }
      }, _$_662b[130]), false;
    });
    t.on(_$_662b[9], _$_662b[131], function() {
      return toggle_object.fadeOut(), false;
    });
  }(jQuery);
}
/**
 * @param {?} s
 * @return {undefined}
 */
function vmode(s) {
  !function($) {
    var ps = {
      viewdefault : _$_662b[132],
      clist : _$_662b[133],
      cgrid : _$_662b[134]
    };
    var $allPanels = (ps = $.extend({}, ps, s), $(_$_662b[136]).find(_$_662b[135]));
    var i = $(_$_662b[137]);
    var r = $(_$_662b[138]);
    /**
     * @return {?}
     */
    $ = function() {
      return $allPanels.addClass(_$_662b[132]).removeClass(_$_662b[139]), i.addClass(_$_662b[18]), r.removeClass(_$_662b[18]), setCookieLocal(ps.cgrid, null, 1e4), delCookieLocal(ps.clist), false;
    };
    /**
     * @return {?}
     */
    var turnChrono = function() {
      return $allPanels.removeClass(_$_662b[132]).addClass(_$_662b[139]), i.removeClass(_$_662b[18]), r.addClass(_$_662b[18]), setCookieLocal(ps.clist, null, 1e4), delCookieLocal(ps.cgrid), false;
    };
    if (getCookieLocal(ps.clist) && _$_662b[132] != ps.viewdefault) {
      turnChrono();
      delCookieLocal(ps.clist);
    } else {
      if (getCookieLocal(ps.cgrid) && _$_662b[132] != ps.viewdefault) {
        $();
        delCookieLocal(ps.cgrid);
      } else {
        if (getCookieLocal(ps.clist)) {
          turnChrono();
          delCookieLocal(ps.clist);
        } else {
          if (getCookieLocal(ps.cgrid)) {
            $();
            delCookieLocal(ps.cgrid);
          } else {
            if (_$_662b[132] != ps.viewdefault) {
              turnChrono();
              delCookieLocal(ps.clist);
            } else {
              $();
              delCookieLocal(ps.cgrid);
            }
          }
        }
      }
    }
    i.click($);
    r.click(turnChrono);
  }(jQuery);
}
/**
 * @return {undefined}
 */
function cdate() {
  $(_$_662b[146]).each(function() {
    var siblingLevel = $(this).attr(_$_662b[44]);
    var tiledImageBRs = mName;
    if (_$_662b[1] != siblingLevel) {
      var n = (b = siblingLevel.substring(0, 10)).substring(0, 4);
      var b = (siblingLevel = b.substring(5, 7), b.substring(8, 10));
      var tiledImageBR = tiledImageBRs[parseInt(siblingLevel, 10) - 1];
    }
    $(this).parents(_$_662b[145]).find(_$_662b[144]).html(_$_662b[140] + b + _$_662b[141] + tiledImageBR + _$_662b[142] + n + _$_662b[143]);
  });
}
/**
 * @param {?} config
 * @return {undefined}
 */
function lMore(config) {
  var $;
  var info;
  $ = jQuery;
  info = {
    olderPostsLink : _$_662b[1],
    loadMoreDiv : null,
    thumbnailSize : 400,
    summaryLength : 100,
    postContainerSelector : _$_662b[154],
    MoreText : lmtx,
    viewdefault : _$_662b[132],
    clist : _$_662b[133],
    cgrid : _$_662b[155],
    loading : false
  };
  info = $.extend({}, info, config);
  $(window);
  $(document);
  rgx[14];
}
/**
 * @param {?} e
 * @return {undefined}
 */
function pageNavi(e) {
  !function($) {
    var buffer;
    var video;
    var vertical;
    var b;
    var path;
    var result = {
      postperpage : Npage,
      numshowpage : 3,
      previous : _$_662b[161],
      ec : pajax,
      viewdefault : _$_662b[139],
      container : _$_662b[154],
      clist : _$_662b[162],
      cgrid : _$_662b[163],
      next : _$_662b[164]
    };
    /** @type {string} */
    var prefix = (result = $.extend({}, result, e), window.location.protocol + _$_662b[95] + window.location.host);
    /** @type {string} */
    var match = location.href.replace(rgx[17], _$_662b[1]);
    /**
     * @param {!Object} res
     * @return {undefined}
     */
    var update = function(res) {
      !function(w) {
        var length = _$_662b[1];
        /** @type {number} */
        nomerkiri = parseInt(result.numshowpage / 2);
        if (nomerkiri == result.numshowpage - nomerkiri) {
          /** @type {number} */
          result.numshowpage = 2 * nomerkiri + 1;
        }
        /** @type {number} */
        mulai = b - nomerkiri;
        if (mulai < 1) {
          /** @type {number} */
          mulai = 1;
        }
        /** @type {number} */
        maksimal = parseInt(w / result.postperpage) + 1;
        if (maksimal - 1 == w / result.postperpage) {
          --maksimal;
        }
        /** @type {number} */
        akhir = mulai + result.numshowpage - 1;
        if (akhir > maksimal) {
          /** @type {number} */
          akhir = maksimal;
        }
        /** @type {number} */
        w = parseInt(b) - 1;
        if (1 < b) {
          length = 2 == b ? _$_662b[165] == vertical ? length + (_$_662b[166] + result.previous + _$_662b[167]) : length + (_$_662b[168] + path + _$_662b[169] + result.postperpage + _$_662b[22] + result.previous + _$_662b[167]) : _$_662b[165] == vertical ? length + (_$_662b[170] + w + _$_662b[22] + result.previous + _$_662b[167]) : length + (_$_662b[171] + w + _$_662b[22] + result.previous + _$_662b[167]);
        }
        if (1 < mulai) {
          length = _$_662b[165] == vertical ? length + _$_662b[172] : length + (_$_662b[168] + path + _$_662b[169] + result.postperpage + _$_662b[173]);
        }
        if (2 < mulai) {
          length = length + _$_662b[174];
        }
        /** @type {number} */
        w = mulai;
        for (; w <= akhir; w++) {
          length = b == w ? length + (_$_662b[175] + w + _$_662b[105]) : 1 == w ? _$_662b[165] == vertical ? length + _$_662b[172] : length + (_$_662b[168] + path + _$_662b[169] + result.postperpage + _$_662b[173]) : _$_662b[165] == vertical ? length + (_$_662b[176] + w + _$_662b[22] + w + _$_662b[167]) : length + (_$_662b[177] + w + _$_662b[22] + w + _$_662b[167]);
        }
        if (akhir < maksimal - 1) {
          length = length + _$_662b[174];
        }
        if (akhir < maksimal) {
          length = _$_662b[165] == vertical ? length + (_$_662b[176] + maksimal + _$_662b[22] + maksimal + _$_662b[167]) : length + (_$_662b[177] + maksimal + _$_662b[22] + maksimal + _$_662b[167]);
        }
        /** @type {number} */
        w = parseInt(b) + 1;
        if (b < maksimal) {
          length = _$_662b[165] == vertical ? length + (_$_662b[176] + w + _$_662b[22] + result.next + _$_662b[167]) : length + (_$_662b[177] + w + _$_662b[22] + result.next + _$_662b[167]);
        }
        /** @type {!NodeList<Element>} */
        w = document.getElementsByName(_$_662b[178]);
        /** @type {(Element|null)} */
        var item = document.getElementById(_$_662b[179]);
        /** @type {number} */
        var i = 0;
        for (; i < w.length; i++) {
          w[i].innerHTML = length;
        }
        if (w && 0 < w.length) {
          length = _$_662b[1];
        }
        if (item) {
          item.innerHTML = length;
        }
        $(_$_662b[160]).css(_$_662b[180], _$_662b[181]);
        $(result.container).removeClass(_$_662b[182]);
        $(_$_662b[189]).click(function() {
          $(result.container).addClass(_$_662b[182]);
          $(_$_662b[183]).show();
          var val = $(this).attr(_$_662b[184]);
          return jsonstart = (val - 1) * result.postperpage, buffer = val, _$_662b[165] == vertical ? $.get(prefix + _$_662b[185] + jsonstart + _$_662b[186], init, _$_662b[130]) : $.get(prefix + _$_662b[187] + path + _$_662b[188] + jsonstart + _$_662b[186], init, _$_662b[130]), false;
        });
      }(res = parseInt(res.feed.openSearch$totalResults.$t, 10));
    };
    /**
     * @return {undefined}
     */
    var findMultiplicationBrackets = function() {
      var m = match;
      if (-1 != m.indexOf(_$_662b[190])) {
        path = -1 != m.indexOf(_$_662b[191]) ? m.substring(m.indexOf(_$_662b[190]) + 14, m.indexOf(_$_662b[191])) : -1 != m.indexOf(_$_662b[192]) ? m.substring(m.indexOf(_$_662b[190]) + 14, m.indexOf(_$_662b[192])) : -1 != m.indexOf(_$_662b[193]) ? m.substring(m.indexOf(_$_662b[190]) + 14, m.indexOf(_$_662b[193])) : m.substr(m.lastIndexOf(_$_662b[55]));
      }
      if (-1 == m.indexOf(_$_662b[194]) && -1 == m.indexOf(_$_662b[195])) {
        if (-1 == m.indexOf(_$_662b[190])) {
          vertical = _$_662b[165];
          if (-1 != m.indexOf(_$_662b[196]) && -1 != m.indexOf(_$_662b[197])) {
            result.postperpage = m.substring(m.indexOf(_$_662b[196]) + 12, m.indexOf(_$_662b[197]));
          } else {
            if (-1 != m.indexOf(_$_662b[196])) {
              result.postperpage = m.substring(m.indexOf(_$_662b[196]) + 12);
            } else {
              result.postperpage = result.postperpage;
            }
          }
          b = -1 != match.indexOf(_$_662b[197]) ? match.substring(match.indexOf(_$_662b[197]) + 8, match.length) : 1;
          $.get(prefix + _$_662b[198], update, _$_662b[130]);
        } else {
          vertical = _$_662b[199];
          if (-1 != m.indexOf(_$_662b[196]) && -1 != m.indexOf(_$_662b[197])) {
            result.postperpage = m.substring(m.indexOf(_$_662b[196]) + 12, m.indexOf(_$_662b[197]));
          } else {
            if (-1 != m.indexOf(_$_662b[196])) {
              result.postperpage = m.substring(m.indexOf(_$_662b[196]) + 12);
            } else {
              result.postperpage = result.postperpage;
            }
          }
          b = -1 != match.indexOf(_$_662b[197]) ? match.substring(match.indexOf(_$_662b[197]) + 8, match.length) : 1;
          $.get(prefix + _$_662b[187] + path + _$_662b[200], update, _$_662b[130]);
        }
      }
    };
    findMultiplicationBrackets();
    /**
     * @param {!Object} body
     * @return {undefined}
     */
    var init = function(body) {
      body = (video = body.feed.entry[0]).published.$t.substring(0, 19) + video.published.$t.substring(23, 29);
      /** @type {string} */
      body = encodeURIComponent(body);
      var target = _$_662b[165] == vertical ? prefix + _$_662b[201] + body + _$_662b[97] + result.postperpage + _$_662b[197] + buffer : prefix + _$_662b[190] + path + _$_662b[202] + body + _$_662b[97] + result.postperpage + _$_662b[197] + buffer;
      if (result.ec) {
        var r = rgx[14];
        $.get(target, function() {
        }, _$_662b[153]).done(function(html) {
          (html = $(_$_662b[148]).append(html.replace(r, _$_662b[1])).find(result.container).children(_$_662b[135])).find(_$_662b[145]).each(function() {
            lpost($(this));
          });
          $(result.container).html(html);
          cdate();
          vmode({
            viewdefault : result.viewdefault,
            clist : result.clist,
            cgrid : result.cgrid
          });
          $(_$_662b[203]).hide();
          html.addClass(rgx[31]);
          match = target;
          findMultiplicationBrackets();
          $(_$_662b[205]).scrollTop($(_$_662b[204]).offset().top - 50);
          if (window.gapi && window.gapi.plusone && window.gapi.plusone.go) {
            window.gapi.plusone.go();
          }
          if (window.disqus_shortname) {
            $.getScript(_$_662b[151] + window.disqus_shortname + _$_662b[152]);
          }
          if (window.FB && window.FB.XFBML && window.FB.XFBML.parse) {
            window.FB.XFBML.parse();
          }
        });
      } else {
        location.href = target;
      }
    };
  }(jQuery);
}
/**
 * @param {string} e
 * @return {undefined}
 */
function chside(e) {
  if (e.parents(_$_662b[206]).length && sSide) {
    e = (e = $(_$_662b[207]).height()) + $(_$_662b[208]).height() + $(_$_662b[209]).height() + 30;
    $(_$_662b[210]).css({
      height : e
    });
  }
}
/**
 * @param {!Object} $
 * @param {!Object} t
 * @return {undefined}
 */
function thewid($, t) {
  var m;
  var r = $.attr(_$_662b[211]);
  var src = $.attr(_$_662b[212]);
  var a = void 0 !== $.attr(_$_662b[213]) ? $.attr(_$_662b[213]) : _$_662b[1];
  var clr = void 0 !== $.attr(_$_662b[214]) ? $.attr(_$_662b[214]) : _$_662b[1];
  /** @type {boolean} */
  var c = /slider/.test(src);
  /** @type {boolean} */
  m = /gallery2/.test(src);
  /featured/.test(src);
  /** @type {boolean} */
  var parsed1 = /featured1/.test(src);
  /** @type {boolean} */
  var code = /newsticker/.test(src);
  /** @type {boolean} */
  var result = /carousel/.test(src);
  /** @type {boolean} */
  var withGCC = /timeline/.test(src);
  /** @type {boolean} */
  var old_src = /(?=.*column2)(?=.*animated).*/.test(src);
  /** @type {boolean} */
  var cs = /(?=.*fbig1)(?=.*animated).*/.test(src);
  if (code) {
    t.find(_$_662b[216]).prepend(_$_662b[215]);
  } else {
    if (/(simple)/.test(src)) {
      t.append(_$_662b[1]);
    } else {
      if (-1 === r.indexOf(_$_662b[217])) {
        t.find(_$_662b[216]).wrapInner(_$_662b[223] + a + _$_662b[219] + (_$_662b[220] === r ? _$_662b[1] : _$_662b[221] + r) + _$_662b[222] + Npage + _$_662b[224]).append(_$_662b[218] + a + _$_662b[219] + (_$_662b[220] === r ? _$_662b[1] : _$_662b[221] + r) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]);
      }
    }
  }
  m = cs ? mx.fb1a : old_src ? mx.cl2a : /(?=.*column1)(?=.*animated).*/.test(src) ? mx.cl1a : /fbig1/.test(src) ? mx.fb1 : /fbig2/.test(src) ? mx.fb2 : /gallery1/.test(src) ? mx.gl1 : m ? mx.gl2 : c ? mx.sl : /column1/.test(src) ? mx.cl1 : /column2/.test(src) ? mx.cl2 : /carousel1/.test(src) ? mx.cr1 : /carousel2/.test(src) ? mx.cr2 : /video/.test(src) ? mx.vi : code ? mx.nw : parsed1 ? mx.fd1 : /featured4/.test(src) ? mx.fd4 : /list/.test(src) ? mx.li : /gallery3/.test(src) ? mx.gl3 : withGCC ? 
  mx.li : /featured2/.test(src) ? mx.fd2 : /featured3/.test(src) ? mx.fd3 : /hot/.test(src) ? mx.ht : /ftpost/.test(src) ? mx.feat : /rcpost/.test(src) ? mx.rcpt : /rdpost/.test(src) ? mx.rdpt : 5;
  classname = c ? _$_662b[225] + src : /column/.test(src) ? _$_662b[226] + src : /fbig/.test(src) ? _$_662b[227] + src : /gallery/.test(src) ? _$_662b[228] + src : /featured/.test(src) ? _$_662b[229] + src : result ? _$_662b[230] + src : src;
  if (-1 != clr.indexOf(_$_662b[231])) {
    t.children(_$_662b[216]).css({
      "background-color" : clr
    });
  }
  t.addClass(classname.replace(/animated/, _$_662b[1])).append(result ? _$_662b[232] : _$_662b[1]);
  $.RCWid({
    blogURL : a,
    maxPosts : m,
    maxPostsPerTag : /(hot|featured1|ftpost)/.test(src) && -1 !== r.indexOf(_$_662b[217]) ? 2 : -1 !== r.indexOf(_$_662b[217]) ? 5 : m,
    ShowTags : !!/(hot|featured|newsticker)/.test(src),
    tags : /(recent|random)/.test(r) ? null : r.split(_$_662b[217]),
    postType : c ? _$_662b[233] : result ? _$_662b[234] : code ? _$_662b[235] : /(featured1|featured2|featured3)/.test(src) ? _$_662b[236] : /featured4/.test(src) ? _$_662b[237] : _$_662b[1],
    ShowComment : true,
    ShowImage : true,
    auto : !!/autoplay/.test(src),
    review : !hrev,
    color : -1 != clr.indexOf(_$_662b[231]) ? clr : _$_662b[1],
    ShowPage : !!/pagenumber/.test(src),
    hoverEffect : !!/(gallery|list|newsticker)/.test(src),
    random : _$_662b[238] === r,
    effect : !!/fade/.test(src) && _$_662b[239],
    ShowDesc : !!/(featured|list|timeline|slider|newsticker|blogpost|halfpost|bigpost)/.test(src),
    wrapNum : /(featured1|featured4)/.test(src) ? 4 : (/featured2/.test(src), 5),
    summary : c || code || /(blogpost|halfpost|bigpost)/.test(src) ? 200 : withGCC ? 85 : 150,
    ShowAuthor : hauthor,
    fbig : !!/(fbig|column2|gallery1|gallery2|hot)/.test(src),
    animated : !!/animated/.test(src),
    startFirst : !(!old_src && !cs),
    slideSpeed : SSpeed
  });
  $.removeAttr(_$_662b[240]);
}
/**
 * @param {!Object} x
 * @param {!Object} cb
 * @param {!Object} node
 * @return {undefined}
 */
function discall(x, cb, node) {
  cb.addClass(node);
  x.html(rgx[33]);
  postscribe(_$_662b[241], _$_662b[242] + dsqsn + _$_662b[243] + mx.dsq + _$_662b[244], {
    done : function() {
      var html = $(_$_662b[241]).html().replace(rgx[13], _$_662b[1]);
      x.html(html);
      $(_$_662b[247]).each(function() {
        $(this).find(_$_662b[246]).wrapAll(_$_662b[245]);
      });
      $(_$_662b[241]).html(_$_662b[1]);
    }
  });
}
/**
 * @param {!Object} g
 * @param {!Object} status
 * @param {!Object} str
 * @return {undefined}
 */
function flicall(g, status, str) {
  status.addClass(str);
  g.html(rgx[33]);
  postscribe(_$_662b[248], _$_662b[249] + mx.fl + _$_662b[250] + dO + _$_662b[251], {
    done : function() {
      var e = $(_$_662b[248]).html().replace(rgx[14], _$_662b[1]);
      g.html(_$_662b[252] + e + _$_662b[94]);
      $(_$_662b[248]).html(_$_662b[1]);
    }
  });
}
/**
 * @param {!Object} g
 * @param {!Object} text
 * @param {!Object} node
 * @return {undefined}
 */
function crcom(g, text, node) {
  g.html(rgx[33]);
  text.addClass(node);
  g.RCom();
}
/**
 * @return {undefined}
 */
function fbsdk() {
  var el;
  var o;
  var n;
  var wafCss;
  /** @type {!HTMLDocument} */
  el = document;
  o = _$_662b[261];
  n = _$_662b[262];
  /** @type {!Element} */
  wafCss = el.getElementsByTagName(o)[0];
  if (!el.getElementById(n)) {
    (el = el.createElement(o)).id = n;
    el.src = _$_662b[263] + fblang + _$_662b[264];
    wafCss.parentNode.insertBefore(el, wafCss);
  }
  /**
   * @return {undefined}
   */
  window.fbAsyncInit = function() {
    FB.init({
      appId : fbid,
      status : true,
      xfbml : true,
      cookie : false,
      version : _$_662b[265]
    });
    FB.Event.subscribe(_$_662b[266], function(logErrorUrl) {
      $.event.trigger({
        type : _$_662b[267],
        url : logErrorUrl
      });
    });
    FB.Event.subscribe(_$_662b[268], function(logErrorUrl) {
      $.event.trigger({
        type : _$_662b[267],
        url : logErrorUrl
      });
    });
    FB.Event.subscribe(_$_662b[269], function() {
      chside($(_$_662b[270]));
      $(_$_662b[270]).addClass(_$_662b[271]);
    });
  };
}
/**
 * @param {string} str
 * @param {!Object} i
 * @return {undefined}
 */
function crfbox(str, i) {
  var n = str.replace(rgx[28], _$_662b[1]);
  i.addClass(_$_662b[272]);
  i.html(_$_662b[273] + n + _$_662b[274]);
}
/**
 * @param {!Object} code
 * @param {!Object} t
 * @param {!Object} n
 * @param {undefined} funName
 * @return {undefined}
 */
function ldwid(code, t, n, funName) {
  if (code.length) {
    thewid(code, t);
  } else {
    if (rgx[23].test(funName)) {
      discall(n, t, funName);
    } else {
      if (rgx[24].test(funName)) {
        flicall(n, t, funName);
      } else {
        if (rgx[25].test(funName)) {
          crcom(n, t, funName);
        } else {
          if (rgx[27].test(funName)) {
            crfbox(funName, n);
          } else {
            if (/complex/g.test(funName)) {
              complx(funName, t, n);
            }
          }
        }
      }
    }
  }
  t.addClass(_$_662b[275]);
}
/**
 * @param {!Object} tar
 * @param {number} t
 * @param {undefined} pos
 * @return {undefined}
 */
function stickside(tar, t, pos) {
  var $photowrapper = tar.children(_$_662b[296]);
  var offset = tar.offset().top;
  var newSelectionStart = tar.height() - $photowrapper.height() + offset;
  var dxdydust = $photowrapper.height() + _$_662b[297];
  /** @type {number} */
  var tt = t;
  if (tar.children(_$_662b[298]).length) {
    offset = offset + (tt = tar.children(_$_662b[298]).outerHeight(true) + 15);
  }
  if (pos < offset) {
    $photowrapper.removeClass(_$_662b[300]).css({
      position : _$_662b[299],
      top : tt
    });
  } else {
    if (newSelectionStart < pos) {
      $photowrapper.removeClass(_$_662b[300]).css({
        position : _$_662b[299],
        bottom : _$_662b[301],
        top : _$_662b[302]
      });
    } else {
      $photowrapper.addClass(_$_662b[300]).css({
        top : t,
        height : dxdydust
      });
    }
  }
}
/** @type {!Array} */
var rgx = [/\s|&nbsp;/g, _$_662b[299], _$_662b[303], _$_662b[304], _$_662b[305], /(<|\[)img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?(>|\])/i, /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/i, /\/s\d+(\-c)?\//i, /\[youtube +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?\]/i, /vimeo.com\/|dailymotion.com\/|youtube.com\/|youtu.be\/|\[dailymotion|\[youtube/i, /soundcloud.com\/|\[soundcloud/i, /\[gallery\]|\[pgallery|\[bgallery/i, /<blockquote>/i, /<(?:script|style)\b[^<]*(?:(?!<\/(?:script|style)>)<[^<]*)*<\/(?:script|style)>/gi, 
/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, /<\S[^>]*>/g, /\[\S[^\]]*\]/g, /(:?\?|&)m=(1|0)/g, /[^[\]]+(?=])/g, /recentpost/g, /randompost/g, /featuredpost/g, /featuredpost\//g, /disquscomment/g, /pn/g, /recentcomment/g, /pL/g, /FBbox/g, /FBbox\//g, /\[item *review-fe=("[^"]+") *\]/g, _$_662b[306], _$_662b[307], _$_662b[308], _$_662b[309], /(tooltip|dailymotion|youtube|soundcloud|code|accordion|content|item|alert|success|warning|update|error|info|tab|vtab|pgallery|bgallery|img|contact|2column|3column|4column|pslide|pcarousel|map|review)/];
var sumLength = $(_$_662b[310]).length ? $(_$_662b[310]).attr(_$_662b[44]) : 200;
/** @type {boolean} */
var fixM = !$(_$_662b[311]).length || _$_662b[235] != $(_$_662b[311]).attr(_$_662b[44]);
var mName = $(_$_662b[312]).length ? $(_$_662b[312]).attr(_$_662b[44]).split(_$_662b[217]) : _$_662b[313].split(_$_662b[76]);
/** @type {boolean} */
var sSide = !$(_$_662b[314]).length || _$_662b[235] != $(_$_662b[314]).attr(_$_662b[44]);
var SSpeed = $(_$_662b[315]).length ? $(_$_662b[315]).attr(_$_662b[44]) : 5e3;
var Npage = $(_$_662b[316]).length ? $(_$_662b[316]).attr(_$_662b[44]) : 20;
var fC = $(_$_662b[317]).length ? $(_$_662b[317]).attr(_$_662b[44]) : 2;
var dformat = $(_$_662b[318]).length && _$_662b[235] != $(_$_662b[318]).attr(_$_662b[44]) ? $(_$_662b[318]).attr(_$_662b[44]) : _$_662b[319];
/** @type {boolean} */
var admBlog = !$(_$_662b[320]).length || _$_662b[321] != $(_$_662b[320]).attr(_$_662b[44]);
/** @type {boolean} */
var hauthor = !$(_$_662b[322]).length || _$_662b[321] != $(_$_662b[322]).attr(_$_662b[44]);
/** @type {boolean} */
var hLast = !(!$(_$_662b[323]).length || _$_662b[321] != $(_$_662b[323]).attr(_$_662b[44]));
/** @type {boolean} */
var gCSE = !(!$(_$_662b[324]).length || _$_662b[235] == $(_$_662b[324]).attr(_$_662b[44]));
var cseID = $(_$_662b[324]).length && _$_662b[235] != $(_$_662b[324]).attr(_$_662b[44]) ? $(_$_662b[324]).attr(_$_662b[44]) : _$_662b[1];
/** @type {boolean} */
var hEmo = !$(_$_662b[325]).length || _$_662b[321] != $(_$_662b[325]).attr(_$_662b[44]);
/** @type {boolean} */
var hlist = !(!$(_$_662b[326]).length || _$_662b[321] != $(_$_662b[326]).attr(_$_662b[44]));
/** @type {boolean} */
var fpost = !$(_$_662b[327]).length || _$_662b[235] != $(_$_662b[327]).attr(_$_662b[44]);
/** @type {boolean} */
var hpagenav = !$(_$_662b[328]).length || _$_662b[235] != $(_$_662b[328]).attr(_$_662b[44]);
var fbid = $(_$_662b[329]).length ? $(_$_662b[329]).attr(_$_662b[44]) : _$_662b[330];
var fblang = $(_$_662b[331]).length ? $(_$_662b[331]).attr(_$_662b[44]) : _$_662b[332];
/** @type {boolean} */
var pajax = !$(_$_662b[333]).length || _$_662b[321] != $(_$_662b[333]).attr(_$_662b[44]);
var stx = $(_$_662b[334]).length && _$_662b[235] != $(_$_662b[334]).attr(_$_662b[44]) ? $(_$_662b[334]).attr(_$_662b[44]) : _$_662b[335];
var ntx = $(_$_662b[336]).length && _$_662b[235] != $(_$_662b[336]).attr(_$_662b[44]) ? $(_$_662b[336]).attr(_$_662b[44]) : _$_662b[337];
var ptx = $(_$_662b[338]).length && _$_662b[235] != $(_$_662b[338]).attr(_$_662b[44]) ? $(_$_662b[338]).attr(_$_662b[44]) : _$_662b[339];
var mtx = $(_$_662b[340]).length && _$_662b[235] != $(_$_662b[340]).attr(_$_662b[44]) ? $(_$_662b[340]).attr(_$_662b[44]) : _$_662b[341];
var lmtx = $(_$_662b[342]).length && _$_662b[235] != $(_$_662b[342]).attr(_$_662b[44]) ? $(_$_662b[342]).attr(_$_662b[44]) : _$_662b[343];
var vmtx = $(_$_662b[344]).length && _$_662b[235] != $(_$_662b[344]).attr(_$_662b[44]) ? $(_$_662b[344]).attr(_$_662b[44]) : _$_662b[345];
var reltx = $(_$_662b[346]).length && _$_662b[235] != $(_$_662b[346]).attr(_$_662b[44]) ? $(_$_662b[346]).attr(_$_662b[44]) : _$_662b[347];
var rectx = $(_$_662b[348]).length && _$_662b[235] != $(_$_662b[348]).attr(_$_662b[44]) ? $(_$_662b[348]).attr(_$_662b[44]) : _$_662b[349];
var recotx = $(_$_662b[350]).length && _$_662b[235] != $(_$_662b[350]).attr(_$_662b[44]) ? $(_$_662b[350]).attr(_$_662b[44]) : _$_662b[351];
var twau = $(_$_662b[352]).length && _$_662b[235] != $(_$_662b[352]).attr(_$_662b[44]) ? $(_$_662b[352]).attr(_$_662b[44]) : _$_662b[353];
var dsqsn = $(_$_662b[354]).length && _$_662b[235] != $(_$_662b[354]).attr(_$_662b[44]) ? $(_$_662b[354]).attr(_$_662b[44]) : _$_662b[1];
var dO = $(_$_662b[355]).length && _$_662b[235] != $(_$_662b[355]).attr(_$_662b[44]) ? $(_$_662b[355]).attr(_$_662b[44]) : _$_662b[1];
/** @type {boolean} */
var shrel = !$(_$_662b[356]).length || _$_662b[235] != $(_$_662b[356]).attr(_$_662b[44]);
/** @type {boolean} */
var shreco = !(!$(_$_662b[357]).length || _$_662b[321] != $(_$_662b[357]).attr(_$_662b[44]));
var relst = $(_$_662b[358]).length ? $(_$_662b[358]).attr(_$_662b[44]) : _$_662b[359];
/** @type {boolean} */
var hecpt = !(!$(_$_662b[360]).length || _$_662b[321] != $(_$_662b[360]).attr(_$_662b[44]));
/** @type {boolean} */
var hrev = !(!$(_$_662b[361]).length || _$_662b[321] != $(_$_662b[361]).attr(_$_662b[44]));
/** @type {boolean} */
var tbline = !(!$(_$_662b[362]).length || _$_662b[321] != $(_$_662b[362]).attr(_$_662b[44]));
/** @type {boolean} */
var bbline = !(!$(_$_662b[363]).length || _$_662b[321] != $(_$_662b[363]).attr(_$_662b[44]));
/** @type {boolean} */
var aplay = !(!$(_$_662b[364]).length || _$_662b[321] != $(_$_662b[364]).attr(_$_662b[44]));
var blinest = $(_$_662b[365]).length ? $(_$_662b[365]).attr(_$_662b[44]) : _$_662b[220];
var btlinest = $(_$_662b[366]).length ? $(_$_662b[366]).attr(_$_662b[44]) : _$_662b[220];
/** @type {boolean} */
var dajaxsrc = !(!$(_$_662b[367]).length || _$_662b[321] != $(_$_662b[367]).attr(_$_662b[44]));
var mx = {
  rcpt : $(_$_662b[368]).length ? $(_$_662b[368]).attr(_$_662b[44]) : 4,
  rdpt : $(_$_662b[369]).length ? $(_$_662b[369]).attr(_$_662b[44]) : 4,
  feat : $(_$_662b[370]).length ? $(_$_662b[370]).attr(_$_662b[44]) : 4,
  com : $(_$_662b[371]).length ? $(_$_662b[371]).attr(_$_662b[44]) : 5,
  fb1 : $(_$_662b[372]).length ? $(_$_662b[372]).attr(_$_662b[44]) : 5,
  fb2 : $(_$_662b[373]).length ? $(_$_662b[373]).attr(_$_662b[44]) : 5,
  fb1a : $(_$_662b[374]).length ? $(_$_662b[374]).attr(_$_662b[44]) : 8,
  gl1 : $(_$_662b[375]).length ? $(_$_662b[375]).attr(_$_662b[44]) : 10,
  gl2 : $(_$_662b[376]).length ? $(_$_662b[376]).attr(_$_662b[44]) : 7,
  gl3 : $(_$_662b[377]).length ? $(_$_662b[377]).attr(_$_662b[44]) : 6,
  cl1 : $(_$_662b[378]).length ? $(_$_662b[378]).attr(_$_662b[44]) : 5,
  cl2 : $(_$_662b[379]).length ? $(_$_662b[379]).attr(_$_662b[44]) : 5,
  cl1a : $(_$_662b[380]).length ? $(_$_662b[380]).attr(_$_662b[44]) : 9,
  cl2a : $(_$_662b[381]).length ? $(_$_662b[381]).attr(_$_662b[44]) : 8,
  nw : $(_$_662b[382]).length ? $(_$_662b[382]).attr(_$_662b[44]) : 9,
  sl : $(_$_662b[383]).length ? $(_$_662b[383]).attr(_$_662b[44]) : 5,
  cr1 : $(_$_662b[384]).length ? $(_$_662b[384]).attr(_$_662b[44]) : 9,
  cr2 : $(_$_662b[385]).length ? $(_$_662b[385]).attr(_$_662b[44]) : 9,
  rl : $(_$_662b[386]).length ? $(_$_662b[386]).attr(_$_662b[44]) : 9,
  vi : $(_$_662b[387]).length ? $(_$_662b[387]).attr(_$_662b[44]) : 6,
  fd1 : $(_$_662b[388]).length ? $(_$_662b[388]).attr(_$_662b[44]) : 8,
  fd2 : $(_$_662b[389]).length ? $(_$_662b[389]).attr(_$_662b[44]) : 10,
  fd3 : $(_$_662b[390]).length ? $(_$_662b[390]).attr(_$_662b[44]) : 10,
  fd4 : $(_$_662b[391]).length ? $(_$_662b[391]).attr(_$_662b[44]) : 7,
  lt : $(_$_662b[392]).length ? $(_$_662b[392]).attr(_$_662b[44]) : 6,
  ht : $(_$_662b[393]).length ? $(_$_662b[393]).attr(_$_662b[44]) : 4,
  dsq : $(_$_662b[394]).length ? $(_$_662b[394]).attr(_$_662b[44]) : 4,
  fl : $(_$_662b[395]).length ? $(_$_662b[395]).attr(_$_662b[44]) : 8,
  li : $(_$_662b[396]).length ? $(_$_662b[396]).attr(_$_662b[44]) : 5
};
$.ajaxSetup({
  cache : true
}), navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) && (document.getElementById(_$_662b[397]).className = document.getElementById(_$_662b[397]).className + _$_662b[398]), hLast && $(_$_662b[399]).hide(), hecpt && $(_$_662b[400]).hide(), $(_$_662b[402]).before($(_$_662b[401])), $(_$_662b[407]).attr({
  onblur : _$_662b[403] + stx + _$_662b[404],
  onfocus : _$_662b[405] + stx + _$_662b[406],
  fe : stx
}), gCSE && (function() {
  var e = cseID;
  /** @type {!Element} */
  var z = document.createElement(_$_662b[261]);
  z.type = _$_662b[408];
  /** @type {boolean} */
  z.async = true;
  z.src = (_$_662b[409] == document.location.protocol ? _$_662b[410] : _$_662b[411]) + _$_662b[412] + e;
  (e = document.getElementsByTagName(_$_662b[261])[0]).parentNode.insertBefore(z, e);
}(), $(_$_662b[414]).append(_$_662b[413]));
var csystext = $(_$_662b[417]).text();
var cnurl = $(_$_662b[418]).attr(_$_662b[44]);
var bpstid = $(_$_662b[419]).attr(_$_662b[44]);
var psturl = $(_$_662b[420]).attr(_$_662b[44]);
var bcom = _$_662b[421];
var dcom = _$_662b[422];
var fcom = _$_662b[423] + cnurl + _$_662b[424];
var scom = _$_662b[425] + bpstid + _$_662b[424];
if ($(_$_662b[417]).html(csystext.replace(/\[googlep\]/g, bcom).replace(/\[disqus\]/g, dcom).replace(/\[facebook\]/g, fcom)), $(_$_662b[427]).each(function() {
  cmnu(this, rgx[2]);
  $(this).addClass(_$_662b[426]);
}), $(_$_662b[428] + rgx[2]).each(function() {
  cmnu(this, rgx[3]);
}), $(_$_662b[432] + rgx[2]).parent(_$_662b[35]).addClass(_$_662b[431]).append(_$_662b[429] + rgx[1] + _$_662b[430]), $(_$_662b[432] + rgx[3]).parent(_$_662b[35]).addClass(_$_662b[434]).append(_$_662b[429] + rgx[1] + _$_662b[433]), $(_$_662b[436]).each(function() {
  $(this).html($(this).html().replace(/\[/g, _$_662b[435]).replace(/\]/g, _$_662b[105]));
}), $(_$_662b[439]).each(function() {
  $(this).html($(this).html().replace(/\[/g, _$_662b[438]).replace(/\]/g, _$_662b[105]).replace(/\{/g, _$_662b[437]).replace(/\}/g, _$_662b[105]));
}), $(_$_662b[441]).parents(_$_662b[35]).addClass(_$_662b[440]), 0 < $(_$_662b[442]).length) {
  var slide_nav = $(_$_662b[443]);
  /** @type {number} */
  var current_pos = 0;
  /** @type {number} */
  var current_menu_width = 0;
  $(_$_662b[445]).each(function() {
    var clickedLink = $(this);
    if (clickedLink.attr(_$_662b[27]) == window.location.href && clickedLink.parents(rgx[4]).length) {
      /** @type {number} */
      var marg = parseInt(clickedLink.parents(rgx[4]).css(_$_662b[444]));
      current_pos = clickedLink.parents(rgx[4]).position().left + marg;
      current_menu_width = clickedLink.parents(rgx[4]).width();
    }
    slide_nav.css({
      width : current_menu_width,
      left : current_pos
    });
  });
  if (0 == current_pos) {
    current_pos = $(_$_662b[446]).position().left;
    slide_nav.css(_$_662b[447], current_pos);
  }
  $(_$_662b[448]).click(function() {
    /** @type {number} */
    var marg = parseInt($(this).parent().css(_$_662b[444]));
    current_pos = $(this).parent().position().left + marg;
    current_menu_width = $(this).parent().width();
  });
  $(window).resize(function() {
    $(_$_662b[445]).each(function() {
      var clickedLink = $(this);
      if (clickedLink.attr(_$_662b[27]) == window.location.href && clickedLink.parents(rgx[4]).length) {
        /** @type {number} */
        var marg = parseInt(clickedLink.parents(rgx[4]).css(_$_662b[444]));
        current_pos = clickedLink.parents(rgx[4]).position().left + marg;
        current_menu_width = clickedLink.parents(rgx[4]).width();
      }
      slide_nav.css({
        width : current_menu_width,
        left : current_pos
      });
    });
    if (0 == current_pos) {
      current_pos = $(_$_662b[446]).position().left;
      slide_nav.css(_$_662b[447], current_pos);
    }
  });
  $(_$_662b[452]).hover(function() {
    /** @type {number} */
    var borderLeftWidth = parseInt($(this).css(_$_662b[444]));
    slide_nav.animate({
      width : $(this).width(),
      left : $(this).position().left + borderLeftWidth
    }, {
      queue : false,
      easing : _$_662b[449],
      duration : 250
    });
    $(_$_662b[451]).addClass(_$_662b[450]);
  }, function() {
    slide_nav.animate({
      width : current_menu_width,
      left : current_pos
    }, {
      queue : false,
      easing : _$_662b[449],
      duration : 250
    });
    $(_$_662b[451]).removeClass(_$_662b[450]);
  });
}
$(_$_662b[455]).hoverTimeout(100, function() {
  $(this).children(_$_662b[37]).filter(_$_662b[453]).slideDown();
}, 300, function() {
  $(this).children(_$_662b[37]).slideUp(500, _$_662b[454]);
}), $(_$_662b[145]).each(function() {
  lpost($(this));
});
/**
 * @param {!Object} deps
 * @return {?}
 */
var sfArr = function(deps) {
  var name;
  var dep;
  var i = deps.length;
  if (0 === i) {
    return false;
  }
  for (; --i;) {
    /** @type {number} */
    name = Math.floor(Math.random() * (i + 1));
    dep = deps[i];
    deps[i] = deps[name];
    deps[name] = dep;
  }
  return deps;
};
/**
 * @param {number} currentNumber
 * @param {number} connectNumber
 * @return {?}
 */
var gRdm = function(currentNumber, connectNumber) {
  return Math.floor(Math.random() * (connectNumber - currentNumber + 1)) + currentNumber;
};
gCSE || dajaxsrc || ajaxsrc(), $(_$_662b[504]).find(_$_662b[503]).each(function() {
  title = $(this).find(_$_662b[216]).text();
  $(this).attr(_$_662b[502], title);
}), $(_$_662b[504]).myTab({
  active : 1
}), $(_$_662b[506]).click(function() {
  var $tabHeading = $(this);
  return $tabHeading.hasClass(_$_662b[18]) ? ($(_$_662b[505]).fadeOut(), $tabHeading.removeClass(_$_662b[18])) : ($tabHeading.addClass(_$_662b[18]), $(_$_662b[505]).fadeIn()), false;
}), cdate(), $(_$_662b[507]).length && hEmo && myemo(), function($) {
  if ($(_$_662b[509]).hasClass(_$_662b[508]) && !hpagenav) {
    if (hlist) {
      lMore({
        viewdefault : _$_662b[139]
      });
      vmode({
        viewdefault : _$_662b[139]
      });
    } else {
      lMore();
      vmode();
    }
  } else {
    if ($(_$_662b[509]).hasClass(_$_662b[508]) && hpagenav) {
      var readersLength = $(_$_662b[154]).children(_$_662b[135]).length;
      if (hlist) {
        pageNavi({
          postperpage : readersLength,
          viewdefault : _$_662b[139],
          clist : _$_662b[133],
          cgrid : _$_662b[134]
        });
        vmode({
          viewdefault : _$_662b[139],
          clist : _$_662b[133],
          cgrid : _$_662b[134]
        });
      } else {
        pageNavi({
          viewdefault : _$_662b[132],
          postperpage : readersLength,
          clist : _$_662b[133],
          cgrid : _$_662b[134]
        });
        vmode({
          viewdefault : _$_662b[132],
          clist : _$_662b[133],
          cgrid : _$_662b[134]
        });
      }
    }
  }
  if ($(_$_662b[509]).hasClass(_$_662b[510]) && $(_$_662b[512]).hasClass(_$_662b[511])) {
    pageNavi({
      viewdefault : _$_662b[139],
      clist : _$_662b[162],
      cgrid : _$_662b[163]
    });
    vmode({
      viewdefault : _$_662b[139],
      clist : _$_662b[162],
      cgrid : _$_662b[163]
    });
  }
  if ($(_$_662b[513]).length || $(_$_662b[512]).hasClass(_$_662b[514])) {
    lMore({
      viewdefault : _$_662b[139],
      clist : _$_662b[515],
      cgrid : _$_662b[516]
    });
    vmode({
      viewdefault : _$_662b[139],
      clist : _$_662b[515],
      cgrid : _$_662b[516]
    });
  }
}(jQuery), function($) {
  /**
   * @param {?} content
   * @param {?} settings
   * @return {undefined}
   */
  $.RCWid = function(content, settings) {
    var self = this;
    self.$el = $(content);
    /**
     * @return {undefined}
     */
    self.init = function() {
      self.options = $.extend({}, $.RCWid.defaultOptions, settings);
      self.$el.html(_$_662b[517] + (_$_662b[1] != self.options.color && /hot/.test(self.$el.parents(_$_662b[518]).attr(_$_662b[25])) ? _$_662b[519] + self.options.color + _$_662b[520] : _$_662b[1]) + (_$_662b[521] === self.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[523] + (self.options.ShowPage ? _$_662b[524] : _$_662b[1]) + rgx[33]);
      var cleaned;
      var dataUriLength;
      var currentSelectBoxOption;
      var $dropdownMenu;
      var originalBaseURL;
      var w;
      var C;
      /** @type {number} */
      var patchInd = 0;
      /** @type {null} */
      var $el = null;
      /** @type {string} */
      var currentNick = location.href.replace(rgx[17], _$_662b[1]);
      /** @type {!Array<string>} */
      var expRecords = document.location.hostname.split(_$_662b[428]);
      var r = self.options.maxPostsPerTag;
      /** @type {number} */
      var sMeters = 3;
      /** @type {number} */
      var height = 1;
      var k = _$_662b[1] === self.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : self.options.blogURL;
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      var init = function(data) {
        if (self.options.ShowPage) {
          (function(width) {
            html = _$_662b[1];
            /** @type {number} */
            nomerkiri = parseInt(sMeters / 2);
            if (nomerkiri == sMeters - nomerkiri) {
              /** @type {number} */
              sMeters = 2 * nomerkiri + 1;
            }
            /** @type {number} */
            mulai = height - nomerkiri;
            if (mulai < 1) {
              /** @type {number} */
              mulai = 1;
            }
            /** @type {number} */
            maksimal = parseInt(width / r) + 1;
            if (maksimal - 1 == width / r) {
              --maksimal;
            }
            /** @type {number} */
            akhir = mulai + sMeters - 1;
            if (akhir > maksimal) {
              /** @type {number} */
              akhir = maksimal;
            }
            /** @type {number} */
            width = parseInt(height) - 1;
            if (1 < height) {
              html = 2 == height ? html + _$_662b[525] : html + (_$_662b[526] + width + _$_662b[527]);
            }
            if (1 < mulai) {
              html = html + _$_662b[528];
            }
            if (2 < mulai) {
              html = html + _$_662b[529];
            }
            /** @type {number} */
            width = mulai;
            for (; width <= akhir; width++) {
              html = height == width ? html + (_$_662b[530] + (_$_662b[1] === self.options.color ? _$_662b[1] : _$_662b[519] + self.options.color + _$_662b[531] + self.options.color + _$_662b[532]) + _$_662b[533] + width + _$_662b[105]) : 1 == width ? html + _$_662b[528] : html + (_$_662b[526] + width + _$_662b[22] + width + _$_662b[77]);
            }
            if (akhir < maksimal - 1) {
              html = html + _$_662b[529];
            }
            if (akhir < maksimal) {
              html = html + (_$_662b[526] + maksimal + _$_662b[22] + maksimal + _$_662b[77]);
            }
            /** @type {number} */
            width = parseInt(height) + 1;
            if (height < maksimal) {
              html = html + (_$_662b[526] + width + _$_662b[534]);
            }
            self.$el.find(_$_662b[535]).html(html);
            self.$el.find(_$_662b[543]).click(function() {
              /** @type {number} */
              var value = Number($(this).attr(_$_662b[184]));
              self.$el.find(_$_662b[537]).after(_$_662b[536]);
              self.$el.find(_$_662b[538]).html(self.$el.find(_$_662b[537]).html());
              self.$el.find(_$_662b[537]).html(_$_662b[1]);
              /** @type {number} */
              var err = value * r - (r - 1);
              var node = self.$el.find(_$_662b[535]).attr(_$_662b[539]);
              if (null == node || null == node) {
                $.get(k + _$_662b[540] + err + _$_662b[97] + r + _$_662b[541], init, _$_662b[130]);
              } else {
                $.get(k + _$_662b[542] + node + _$_662b[188] + err + _$_662b[97] + r + _$_662b[541], init, _$_662b[130]);
              }
              /** @type {number} */
              height = value;
            });
          })(j = parseInt(data.feed.openSearch$totalResults.$t, 10));
        }
        patchInd++;
        dataUriLength = data.feed.link.length;
        /** @type {number} */
        j = 0;
        for (; j < dataUriLength; j++) {
          if (_$_662b[106] == data.feed.link[j].rel) {
            cleaned = data.feed.link[j].href;
            break;
          }
        }
        if (entry = true === self.options.random ? sfArr(data.feed.entry) : data.feed.entry, void 0 !== entry) {
          var collectionCount = entry.length;
          /** @type {number} */
          var j = 0;
          for (; j < collectionCount; j++) {
            var body;
            var i;
            var b;
            var s;
            var val;
            var d;
            var f;
            var cb;
            var next;
            var x = entry[j].link.length;
            /** @type {!Array} */
            b = [];
            /** @type {!Array} */
            i = [];
            var k;
            var showCalInConv;
            var m;
            var a;
            var t = _$_662b[1];
            /** @type {number} */
            k = 0;
            for (; k < x; k++) {
              if (_$_662b[106] == entry[j].link[k].rel) {
                body = entry[j].link[k].href;
                break;
              }
            }
            /** @type {number} */
            k = 0;
            for (; k < x; k++) {
              if (_$_662b[544] == entry[j].link[k].rel && _$_662b[545] == entry[j].link[k].type) {
                /** @type {number} */
                s = Number(entry[j].link[k].title.split(_$_662b[76])[0]);
                break;
              }
            }
            /** @type {number} */
            k = 0;
            for (; k < x; k++) {
              if (_$_662b[107] == entry[j].link[k].rel) {
                a = entry[j].link[k].type;
                break;
              }
              a = _$_662b[39];
            }
            if (m = _$_662b[236] === self.options.postType && cleaned !== window.location.protocol + _$_662b[95] + window.location.host + _$_662b[55] ? cleaned.substr(cleaned.lastIndexOf(_$_662b[55]) + 1) : void 0 !== entry[j].category ? entry[j].category[0].term : _$_662b[1], k = self.options.fbig && entry[j] === entry[0], showCalInConv = entry[j] !== entry[0], x = _$_662b[108] in entry[j] ? entry[j].content.$t : _$_662b[109] in entry[j] ? entry[j].summary.$t : _$_662b[1], _$_662b[110] in entry[j] ? 
            (b = entry[j].media$thumbnail.url, -1 != entry[j].media$thumbnail.url.indexOf(_$_662b[58]) && (b = entry[j].media$thumbnail.url.replace(_$_662b[113], _$_662b[114]), a = _$_662b[54])) : rgx[6].test(x) || rgx[8].test(x) ? (b = rgx[6].exec(rgx[6]), i = rgx[8].exec(x), b = _$_662b[53] + (null != b ? b[5] : i[3]) + _$_662b[52], a = _$_662b[54]) : b = rgx[5].test(x) ? (i = rgx[5].exec(x))[4] : _$_662b[56], rgx[9].test(x) ? a = _$_662b[54] : rgx[10].test(x) ? a = _$_662b[62] : rgx[11].test(x) ? 
            a = _$_662b[63] : rgx[12].test(x) && (a = rgx[12].exec(x).index <= 5 ? _$_662b[64] : _$_662b[39]), rgx[29].test(x) && self.options.review) {
              /** @type {!Array} */
              t = [];
              /** @type {number} */
              i = 0;
              d = (t = x.match(rgx[29])).length;
              /** @type {number} */
              f = 0;
              for (; f < d; f++) {
                /** @type {number} */
                i = i + parseInt(t[f].replace(rgx[29], _$_662b[66]).replace(/"/g, _$_662b[1]).replace(/'/g, _$_662b[1]));
              }
              /** @type {number} */
              t = i / d;
              t = _$_662b[517] + (_$_662b[1] === self.options.color ? _$_662b[1] : _$_662b[519] + self.options.color + _$_662b[520]) + _$_662b[546] + t.toFixed(1) + _$_662b[547] + 10 * t.toFixed(1) + _$_662b[548];
            }
            if ((x = x.replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > self.options.summary) {
              x = x.substring(0, self.options.summary) + _$_662b[115];
            }
            i = entry[j].title.$t.replace(/"/g, _$_662b[73]);
            val = entry[j].published.$t.substring(0, 10);
            d = entry[j].published.$t.match(/\d+/g);
            /** @type {!Date} */
            d = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
            dyn = val.substring(0, 4);
            /** @type {string} */
            f = Number(val.substring(0, 2)).toLocaleString() + Number(val.substring(2, 4)).toLocaleString();
            cb = val.substring(5, 7);
            next = val.substring(8, 10);
            val = entry[j].author[0].name.$t;
            if (-1 < window.location.href.indexOf(_$_662b[549]) && _$_662b[550] != expRecords[expRecords.length - 1]) {
              /** @type {string} */
              currentNick = _$_662b[151] + expRecords[0] + _$_662b[551] + document.location.pathname;
            }
            if (self.$el.parents(_$_662b[552]).length) {
              if (currentNick.toLowerCase() != body.toLowerCase()) {
                update(body, i, b, x, f, next, cb, s, val, k, showCalInConv, m, a, t, d, dyn);
              }
            } else {
              update(body, i, b, x, f, next, cb, s, val, k, showCalInConv, m, a, t, d, dyn);
            }
          }
        }
        if (patchInd >= self.options.tags.length) {
          if (0 < self.options.maxPosts && $(_$_662b[553] + (self.options.maxPosts - 1) + _$_662b[554], self.$el.find(_$_662b[555])).remove(), self.$el.find(_$_662b[537]).html(self.$el.find(_$_662b[555]).html()).removeClass(_$_662b[556]), self.$el.find(_$_662b[557]).remove(), j = self.$el.find(_$_662b[558]), body = self.$el.parents(_$_662b[518]).attr(_$_662b[25]), s = $(_$_662b[45]).attr(_$_662b[44]), j.attr(_$_662b[44], s + _$_662b[76] + j.attr(_$_662b[44])).text(s), /(newsticker|timeline|video|gallery|featured|hot|slider)/.test(body) && 
          self.$el.addClass(_$_662b[559]), /(video|featured|hot|slider)/.test(body) && self.$el.addClass(_$_662b[560]), body = self.$el.find(_$_662b[537]), _$_662b[233] === self.options.postType) {
            body.owlCarousel({
              nav : true,
              rtl : ts_isRTL(),
              autoplay : self.options.auto,
              navText : [_$_662b[1], _$_662b[1]],
              autoplayTimeout : self.options.slideSpeed,
              loop : true,
              bColor : _$_662b[1] !== self.options.color ? self.options.color : _$_662b[1],
              responsiveClass : true,
              autoplayHoverPause : true,
              animateOut : _$_662b[239] === self.options.effect && _$_662b[562],
              animateIn : _$_662b[239] === self.options.effect && _$_662b[563],
              smartSpeed : 500,
              items : 1,
              responsiveRefreshRate : 500
            }).addClass(_$_662b[561]);
          } else {
            if (_$_662b[234] === self.options.postType) {
              body.owlCarousel({
                autoplay : self.options.auto,
                margin : 0,
                loop : true,
                autoplayTimeout : self.options.slideSpeed,
                rtl : ts_isRTL(),
                bColor : _$_662b[1] !== self.options.color ? self.options.color : _$_662b[1],
                nav : true,
                autoplayHoverPause : true,
                navText : [_$_662b[1], _$_662b[1]],
                responsiveBaseElement : self.$el,
                navContainer : self.$el.parents(_$_662b[503]).find(_$_662b[564]),
                responsive : {
                  0 : {
                    items : 1
                  },
                  401 : {
                    items : 2
                  },
                  660 : {
                    items : 3
                  },
                  1E3 : {
                    items : 4
                  }
                }
              }).addClass(_$_662b[561]);
            } else {
              if (_$_662b[235] === self.options.postType) {
                body.simplyScroll();
              } else {
                if (_$_662b[236] === self.options.postType) {
                  s = body.children(_$_662b[565]);
                  /** @type {number} */
                  j = 0;
                  for (; j < s.length; j = j + self.options.wrapNum) {
                    s.slice(j, j + self.options.wrapNum).wrapAll(_$_662b[566]);
                  }
                  body.owlCarousel({
                    nav : true,
                    rtl : ts_isRTL(),
                    autoplay : self.options.auto,
                    navText : [_$_662b[1], _$_662b[1]],
                    autoplayTimeout : self.options.slideSpeed,
                    loop : true,
                    responsiveClass : true,
                    autoplayHoverPause : true,
                    bColor : _$_662b[1] !== self.options.color ? self.options.color : _$_662b[1],
                    animateOut : _$_662b[239] === self.options.effect && _$_662b[562],
                    animateIn : _$_662b[239] === self.options.effect && _$_662b[563],
                    smartSpeed : 500,
                    items : 1,
                    responsiveRefreshRate : 500
                  }).addClass(_$_662b[561]);
                } else {
                  if (_$_662b[237] === self.options.postType) {
                    s = body.children(_$_662b[565]);
                    /** @type {number} */
                    j = 0;
                    for (; j < s.length; j = j + self.options.wrapNum) {
                      s.slice(j, j + self.options.wrapNum).wrapAll(_$_662b[567]);
                    }
                    body.find(_$_662b[569]).wrapInner(_$_662b[568]);
                    body.find(_$_662b[570]).owlCarousel({
                      nav : true,
                      rtl : ts_isRTL(),
                      autoplay : self.options.auto,
                      navText : [_$_662b[1], _$_662b[1]],
                      autoplayTimeout : self.options.slideSpeed,
                      loop : true,
                      navigationText : false,
                      bColor : _$_662b[1] !== self.options.color ? self.options.color : _$_662b[1],
                      responsiveClass : true,
                      autoplayHoverPause : true,
                      animateOut : _$_662b[239] === self.options.effect && _$_662b[562],
                      animateIn : _$_662b[239] === self.options.effect && _$_662b[563],
                      smartSpeed : 500,
                      items : 1,
                      responsiveRefreshRate : 500
                    }).addClass(_$_662b[561]);
                  }
                }
              }
            }
          }
          if (self.options.fbig) {
            s = body.children(_$_662b[565]);
            /** @type {number} */
            j = 0;
            for (; j < s.length; j = j + s.length) {
              s.slice(1, j + s.length).wrapAll(_$_662b[571]);
            }
          }
          if (self.options.hoverEffect && self.$el.find(_$_662b[576]).hover(function() {
            var result;
            var t = $(this);
            var html = t.parents(_$_662b[565]).html();
            var deltaY = t.height();
            var state = t.offset();
            var aPart = $(document.body).width();
            var classShiftLeft = $(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
            result = state.left;
            if (ts_isRTL()) {
              /** @type {number} */
              result = result + t.width() - 320;
            }
            if (aPart < result + 320) {
              /** @type {number} */
              result = aPart - 330;
            } else {
              if (result < 10) {
                /** @type {number} */
                result = 10;
              }
            }
            $(_$_662b[575]).css({
              top : _$_662b[235] === self.options.postType ? state.top + deltaY : state.top - 350,
              left : result
            }).addClass(_$_662b[574] + classShiftLeft).html(html);
          }, function() {
            var menuMaxDepth = $(this).parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[573] : _$_662b[1];
            $(_$_662b[575]).removeClass(_$_662b[574] + menuMaxDepth).html(_$_662b[1]);
          }), self.$el.find(_$_662b[577]).each(function() {
            $dropdownMenu = $(this);
            currentSelectBoxOption = $dropdownMenu.find(_$_662b[578]);
            originalBaseURL = currentSelectBoxOption.attr(_$_662b[49]);
            w = $dropdownMenu.width();
            C = w <= 180 ? _$_662b[579] : w <= 500 ? _$_662b[47] : _$_662b[580];
            if (/(list|gallery|newsticker|blogpost|halfpost|complex)/.test($dropdownMenu.parents(_$_662b[518]).attr(_$_662b[25])) || $dropdownMenu.parents(_$_662b[305]).hasClass(_$_662b[581])) {
              C = _$_662b[47];
            }
            currentSelectBoxOption.attr(_$_662b[78], _$_662b[79] + (-1 != originalBaseURL.indexOf(_$_662b[80]) ? _$_662b[81] + originalBaseURL.replace(rgx[7], _$_662b[55] + C + _$_662b[55]) + _$_662b[82] : _$_662b[57]) + _$_662b[83]);
            currentSelectBoxOption.removeAttr(_$_662b[49]);
          }), self.$el.parents(_$_662b[518]).addClass(_$_662b[583]).removeClass(_$_662b[582]), self.options.animated) {
            if (self.options.startFirst) {
              s = body.find(_$_662b[584]);
              /** @type {number} */
              j = 0;
              for (; j < s.length; j = j + s.length) {
                s.slice(j, j + s.length).wrapAll(_$_662b[585]);
              }
              (j = self.$el.find(_$_662b[586])).wrap(_$_662b[587]);
              j.simpleSpy().on(_$_662b[590], function() {
                jQuery(this).trigger(_$_662b[591]);
              }).on(_$_662b[588], function() {
                jQuery(this).trigger(_$_662b[589]);
              });
            } else {
              s = body.children(_$_662b[565]);
              /** @type {number} */
              j = 0;
              for (; j < s.length; j = j + (s.length + 1)) {
                s.slice(j, j + s.length + 1).wrapAll(_$_662b[585]);
              }
              (j = self.$el.find(_$_662b[586])).wrap(_$_662b[587]);
              j.simpleSpy({
                limit : 5
              }).on(_$_662b[590], function() {
                jQuery(this).trigger(_$_662b[591]);
              }).on(_$_662b[588], function() {
                jQuery(this).trigger(_$_662b[589]);
              });
            }
          }
          chside(self.$el);
          if (_$_662b[1] !== self.options.color && self.$el.parents(_$_662b[518]).find(_$_662b[592]).length) {
            self.$el.parents(_$_662b[518]).find(_$_662b[564]).children().css({
              "background-color" : self.options.color
            });
          }
        }
      };
      /**
       * @param {number} el
       * @param {string} value
       * @param {!Array} name
       * @param {?} handler
       * @param {string} i
       * @param {?} n
       * @param {?} str
       * @param {string} val
       * @param {?} keys
       * @param {string} object
       * @param {boolean} op
       * @param {?} b
       * @param {?} rect
       * @param {?} cb
       * @param {!Date} date
       * @param {?} num
       * @return {?}
       */
      var update = function(el, value, name, handler, i, n, str, val, keys, object, op, b, rect, cb, date, num) {
        var that = $(_$_662b[565], self.$el.find(_$_662b[555]));
        /** @type {number} */
        var data = 0;
        var max = that.length;
        for (; data < max; data++) {
          var input = $(_$_662b[28], that.eq(data));
          var param = parse(input);
          if (input.attr(_$_662b[27]) == el) {
            /** @type {number} */
            value = ++param;
            (el = input).attr(_$_662b[593], value);
            if (self.options.relevantTip) {
              el.attr(_$_662b[44], self.options.relevantTip.replace(_$_662b[594], value));
            }
            if (self.options.postScoreClass) {
              el.attr(_$_662b[25], self.options.postScoreClass + value);
            }
            /** @type {number} */
            el = data - 1;
            for (; 0 <= el; el--) {
              if (value = $(_$_662b[28], that.eq(el)), parse(value) > param) {
                return void(1 < data - el && that.eq(el).after(that.eq(data)));
              }
            }
            return void(0 < data && that.eq(0).before(that.eq(data)));
          }
        }
        self.$el.find(_$_662b[555]).append(_$_662b[517] + (_$_662b[521] === self.options.postType ? _$_662b[522] : _$_662b[1]) + _$_662b[595] + (object ? _$_662b[596] : _$_662b[1]) + _$_662b[597] + (_$_662b[235] === self.options.postType ? _$_662b[517] + (_$_662b[1] != self.options.color ? _$_662b[519] + self.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[598] + date.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[94] : _$_662b[1]) + (object || /(n|c)/.test(self.options.postType) ? 
        _$_662b[517] + (_$_662b[1] === self.options.color ? _$_662b[1] : _$_662b[519] + self.options.color + _$_662b[520]) + _$_662b[599] + n + _$_662b[141] + mName[parseInt(str, 10) - 1] + _$_662b[142] + num + _$_662b[600] : _$_662b[1]) + (self.options.ShowImage ? _$_662b[601] + (self.$el.parents(_$_662b[503]).hasClass(_$_662b[572]) ? _$_662b[602] : _$_662b[1]) + _$_662b[603] + (object ? _$_662b[604] : _$_662b[1]) + _$_662b[605] + rect + _$_662b[606] + value + _$_662b[607] + el + _$_662b[608] + 
        name + _$_662b[609] + (-1 != name.indexOf(_$_662b[58]) || -1 != name.indexOf(_$_662b[610]) ? _$_662b[59] : _$_662b[1]) + (self.options.review ? cb : _$_662b[1]) + _$_662b[611] : _$_662b[1]) + _$_662b[517] + (/timeline/.test(self.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== self.options.color ? _$_662b[612] + (ts_isRTL() ? _$_662b[613] : _$_662b[447]) + _$_662b[614] + self.options.color + _$_662b[520] : _$_662b[1]) + _$_662b[615] + (object ? _$_662b[616] : _$_662b[1]) + _$_662b[617] + 
        (/timeline/.test(self.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[517] + (_$_662b[1] === self.options.color ? _$_662b[1] : _$_662b[618] + self.options.color + _$_662b[520]) + _$_662b[619] : _$_662b[1]) + _$_662b[620] + (/(featured4|slider1|newsticker)/.test(self.$el.parents(_$_662b[503]).attr(_$_662b[25])) && _$_662b[1] !== self.options.color ? _$_662b[621] + (/newsticker/.test(self.$el.parents(_$_662b[503]).attr(_$_662b[25])) ? _$_662b[1] : _$_662b[622]) + _$_662b[623] + self.options.color + 
        _$_662b[520] : _$_662b[1]) + _$_662b[624] + (_$_662b[235] === self.options.postType || self.$el.parents(_$_662b[503]).hasClass(_$_662b[139]) ? _$_662b[625] : _$_662b[1]) + _$_662b[626] + el + _$_662b[22] + value + _$_662b[627] + (self.options.ShowAuthor ? _$_662b[628] + keys + _$_662b[629] : _$_662b[1]) + _$_662b[630] + dformat.replace(_$_662b[633], i).replace(_$_662b[632], Number(str).toLocaleString()).replace(_$_662b[631], Number(n).toLocaleString()) + _$_662b[105] + (0 < val ? _$_662b[634] + 
        el + _$_662b[635] + val.toLocaleString() + _$_662b[167] : _$_662b[1]) + _$_662b[94] + (op && !self.options.ShowDesc ? _$_662b[1] : _$_662b[636] + handler + (object ? _$_662b[637] + el + _$_662b[638] + value + _$_662b[639] : _$_662b[1]) + _$_662b[94]) + _$_662b[94] + (self.options.ShowTags ? _$_662b[640] + (_$_662b[1] === self.options.color ? _$_662b[1] : _$_662b[519] + self.options.color + _$_662b[520]) + _$_662b[641] + b + _$_662b[607] + self.options.blogURL + _$_662b[190] + b + _$_662b[222] + 
        Npage + _$_662b[22] + b + _$_662b[167] : _$_662b[1]) + _$_662b[642]);
      };
      /**
       * @param {!Object} n
       * @return {?}
       */
      var parse = function(n) {
        return 0 < (n = parseInt(n.attr(_$_662b[593]))) ? n : 1;
      };
      !function() {
        var i = ($el = self.$el).parents(_$_662b[552]);
        if (self.options.tags || (self.options.tags = [], $(_$_662b[643] + self.options.maxTags + _$_662b[554]).each(function() {
          var e = $.trim($(this).text().replace(/\n/g, _$_662b[1]));
          if (-1 == $.inArray(e, self.options.tags)) {
            self.options.tags[self.options.tags.length] = e;
          }
        }), i.length || (self.options.tags = [])), 0 !== self.options.tags.length || self.options.recentTitle) {
          if (i.length && $(_$_662b[644] + (0 === self.options.tags.length ? self.options.recentTitle : self.options.relatedTitle ? self.options.relatedTitle : _$_662b[1]) + _$_662b[645]).prependTo($el), 0 === self.options.tags.length) {
            if (self.options.random) {
              $.get(k + _$_662b[646], function(data) {
                var t = self.options.maxrandom > data.feed.openSearch$totalResults.$t ? data.feed.openSearch$totalResults.$t : self.options.maxrandom;
                data = self.options.maxPosts > data.feed.openSearch$totalResults.$t ? 1 : gRdm(1, t - self.options.maxPosts);
                $.get(k + _$_662b[647] + self.options.maxPosts + _$_662b[648] + data + _$_662b[649], init, _$_662b[130]);
              }, _$_662b[130]);
            } else {
              $.get(k + _$_662b[647] + self.options.maxPostsPerTag + _$_662b[541], init, _$_662b[130]);
            }
          } else {
            /** @type {number} */
            i = 0;
            for (; i < self.options.tags.length; i++) {
              $.get(k + _$_662b[542] + self.options.tags[i] + _$_662b[222] + self.options.maxPostsPerTag + _$_662b[541], init, _$_662b[130]);
              if (self.options.ShowPage) {
                self.$el.find(_$_662b[535]).attr(_$_662b[539], self.options.tags[0]);
              }
            }
          }
        }
      }();
    };
    self.init();
  };
  $.RCWid.defaultOptions = {
    blogURL : _$_662b[1],
    maxPosts : 5,
    maxTags : 4,
    maxPostsPerTag : 6,
    tags : null,
    ShowComment : true,
    ShowImage : true,
    ShowTags : false,
    ShowAuthor : false,
    ShowDesc : false,
    maxrandom : 30,
    hoverEffect : false,
    random : false,
    fbig : false,
    startFirst : false,
    animated : false,
    ShowPage : false,
    auto : false,
    effect : false,
    review : false,
    wrapNum : 4,
    summary : 120,
    color : _$_662b[1],
    relatedTitle : reltx,
    recentTitle : rectx,
    postScoreClass : _$_662b[1],
    relevantTip : _$_662b[1],
    slideSpeed : 5e3,
    postType : _$_662b[1]
  };
  /**
   * @param {boolean} select_options
   * @return {?}
   */
  $.fn.RCWid = function(select_options) {
    return this.each(function() {
      new $.RCWid(this, select_options);
    });
  };
}(jQuery), function($) {
  /**
   * @param {?} selector
   * @param {?} options
   * @return {undefined}
   */
  $.RCom = function(selector, options) {
    var self = this;
    self.$el = $(selector);
    /**
     * @return {undefined}
     */
    self.init = function() {
      self.options = $.extend({}, $.RCom.defaultOptions, options);
      $.get((_$_662b[1] === self.options.blogURL ? window.location.protocol + _$_662b[95] + window.location.host : self.options.blogURL) + _$_662b[650], function(root) {
        var test = _$_662b[1];
        var a = _$_662b[1];
        root = (data = root.feed).author[0].name ? data.author[0].name.$t : self.options.anon;
        var y = data.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + self.options.avatarSize + _$_662b[112]);
        if (data.entry && 0 !== data.entry.length) {
          test = test + _$_662b[651];
          var item;
          var j;
          var s;
          var d;
          var data;
          /** @type {number} */
          var l = 0;
          /** @type {number} */
          var i = 0;
          var patchLen = (data = data.entry).length;
          for (; i < patchLen; ++i) {
            s = (item = data[i]).published.$t.substring(0, 10);
            var type = item.author[0].name ? item.author[0].name.$t : self.options.anon;
            var $ = !!item.author[0].uri && item.author[0].uri.$t;
            var key = item.author[0].gd$image.src.replace(rgx[7], _$_662b[111] + self.options.avatarSize + _$_662b[112]);
            var r = (r = item.content ? item.content.$t : item.summary.$t).replace(/<br *\/?>|[\s]+/gi, _$_662b[76]).replace(/<.*?>|[<>]/g, _$_662b[1]).replace(rgx[16], _$_662b[1]);
            /** @type {boolean} */
            var temp = (r = _$_662b[1] !== r && r.length > self.options.characters ? r.substring(0, self.options.characters) + _$_662b[115] : r, false);
            /** @type {boolean} */
            var f = type === root || key === y;
            if (!f || self.options.showAdmin) {
              /** @type {number} */
              j = 0;
              d = item.link.length;
              for (; j < d; ++j) {
                a = item.link[j];
                if (_$_662b[106] == a.rel) {
                  temp = a.href;
                }
              }
              a = temp.lastIndexOf(_$_662b[55]) + 1;
              j = temp.lastIndexOf(_$_662b[428]);
              a = temp.split(_$_662b[30]).join(_$_662b[76]).substring(a, j) + _$_662b[115];
              d = item.published.$t.match(/\d+/g);
              /** @type {!Date} */
              d = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
              item = s.substring(0, 4);
              j = s.substring(5, 7);
              s = s.substring(8, 10);
              if (l < self.options.numComments) {
                l++;
                test = test + (_$_662b[652] + (f ? _$_662b[653] : _$_662b[654]) + _$_662b[22]);
                test = test + (self.options.Showimage ? _$_662b[655] + $ + _$_662b[656] + type + _$_662b[657] + type + _$_662b[658] + key + _$_662b[659] : _$_662b[1]);
                test = test + (_$_662b[660] + $ + _$_662b[22] + type + _$_662b[661] + temp + _$_662b[22] + a + _$_662b[662] + s + _$_662b[141] + mName[parseInt(j, 10) - 1] + _$_662b[142] + item + _$_662b[663] + d.toLocaleTimeString().replace(/:\d+ /, _$_662b[76]) + _$_662b[664]);
                test = test + (_$_662b[665] + r + _$_662b[94]);
                test = test + _$_662b[666];
              }
            }
          }
          self.$el.html(test + _$_662b[94]);
          if (self.options.fs) {
            (test = function(dir, t, i) {
              $(_$_662b[669]).each(function() {
                $(this).html($(this).html().replace(dir, _$_662b[667] + t + _$_662b[668] + i + _$_662b[464]));
              });
            })(/\scheer/gi, emoIMG.dL, _$_662b[dM]);
          }
          chside(self.$el);
        } else {
          self.$el.html(_$_662b[670]);
        }
      }, _$_662b[130]);
    };
    self.init();
  };
  $.RCom.defaultOptions = {
    blogURL : _$_662b[1],
    numComments : mx.com,
    characters : 100,
    avatarSize : 40,
    fs : hEmo,
    showAdmin : admBlog,
    anon : _$_662b[671],
    Showimage : true,
    defaultAvatar : _$_662b[672]
  };
  /**
   * @param {boolean} url_or_data_or_function
   * @return {?}
   */
  $.fn.RCom = function(url_or_data_or_function) {
    return this.each(function() {
      new $.RCom(this, url_or_data_or_function);
    });
  };
}(jQuery), $(_$_662b[675]).each(function() {
  var r = rgx[34];
  /** @type {!RegExp} */
  var t = new RegExp(/\[/.source + r.source + /(.*?)(\/?)\]/.source, _$_662b[673]);
  var code = (r = new RegExp(/\[\//.source + r.source + /\]/.source, _$_662b[673]), $(this).html());
  if (t.test(code)) {
    code = code.replace(t, _$_662b[674]).replace(r, _$_662b[94]);
    $(this).html(code);
  }
}), $(_$_662b[683]).each(function() {
  $(this).find(_$_662b[681]).each(function() {
    var ext = $(this).attr(_$_662b[44]);
    var id = $(this).attr(_$_662b[676]);
    var bn = _$_662b[677] + (null == id || _$_662b[1] == id ? _$_662b[1] : _$_662b[678] + id) + _$_662b[26];
    var text = $(this).html();
    $(this).html(null == text || _$_662b[1] == text ? _$_662b[680] : text).attr({
      "data-tab" : (null == id || _$_662b[1] == id ? _$_662b[1] : bn) + (null == ext || _$_662b[1] == ext ? _$_662b[679] : ext),
      title : _$_662b[1]
    });
  });
  $(this).parents(_$_662b[518]).addClass(_$_662b[682]);
}), $(_$_662b[683]).myTab(), $(_$_662b[694]).each(function() {
  var html = _$_662b[1];
  $(this).find(_$_662b[689]).each(function() {
    var e = $(this).attr(_$_662b[44]);
    var id = $(this).attr(_$_662b[676]);
    var n = _$_662b[677] + (null == id || _$_662b[1] == id ? _$_662b[1] : _$_662b[678] + id) + _$_662b[26];
    var s = $(this).html();
    html = html + (_$_662b[684] + (null == id || _$_662b[1] == id ? _$_662b[1] : n) + (null == e || _$_662b[685] == e ? _$_662b[1] : e) + _$_662b[686] + (_$_662b[687] + (null == s || _$_662b[1] == s ? _$_662b[688] : s) + _$_662b[94]));
  });
  $(this).html(html);
  $(this).children(_$_662b[691]).first().addClass(_$_662b[690]);
  $(this).children(_$_662b[693]).first().addClass(_$_662b[692]);
}), $(_$_662b[698]).click(function() {
  $(this).next(_$_662b[693]).addClass(_$_662b[692]).slideToggle(_$_662b[695]).siblings(_$_662b[696]).removeClass(_$_662b[692]).slideUp(_$_662b[695]);
  $(this).toggleClass(_$_662b[690]);
  $(this).siblings(_$_662b[697]).removeClass(_$_662b[690]);
}), $(_$_662b[726]).each(function() {
  var $inno = $(this);
  var id = $inno.attr(_$_662b[302]);
  var n = $inno.attr(_$_662b[699]);
  var r = $inno.attr(_$_662b[700]);
  var j = $inno.attr(_$_662b[70]);
  var b = $inno.attr(_$_662b[701]);
  var s = $inno.attr(_$_662b[702]);
  var o = $inno.attr(_$_662b[703]);
  var _ = $inno.attr(_$_662b[704]);
  var undefined = $inno.attr(_$_662b[705]);
  var c = $inno.attr(_$_662b[706]);
  $inno.replaceWith(_$_662b[707] + (null == b || _$_662b[1] == b || _$_662b[301] == b ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == j || _$_662b[1] == j ? _$_662b[710] : j) + _$_662b[711] + (null == s || _$_662b[1] == s ? _$_662b[712] : s) + _$_662b[713] + (null == c || _$_662b[1] == c ? _$_662b[714] : 1 == c ? _$_662b[715] : c) + _$_662b[55] + (null == n || _$_662b[1] == n ? _$_662b[716] : n) + _$_662b[717] + (null == r || _$_662b[1] == r ? _$_662b[718] : r) + _$_662b[719] + (null == id || 
  _$_662b[1] == id ? _$_662b[720] : id) + _$_662b[721] + (null == _ || _$_662b[1] == _ ? _$_662b[720] : _) + _$_662b[722] + (null == undefined || _$_662b[1] == undefined ? _$_662b[723] : undefined) + _$_662b[724] + (null == o || _$_662b[1] == o ? _$_662b[720] : o) + _$_662b[725]);
}), $(_$_662b[746]).each(function() {
  var $inno = $(this);
  var id = $inno.attr(_$_662b[727]);
  var n = $inno.attr(_$_662b[728]);
  var r = $inno.attr(_$_662b[700]);
  var j = $inno.attr(_$_662b[699]);
  var b = $inno.attr(_$_662b[70]);
  var s = $inno.attr(_$_662b[701]);
  var o = $inno.attr(_$_662b[702]);
  var _ = $inno.attr(_$_662b[729]);
  var undefined = $inno.attr(_$_662b[730]);
  $inno.replaceWith(_$_662b[731] + (null == s || _$_662b[1] == s || _$_662b[301] == s ? _$_662b[1] : _$_662b[708]) + _$_662b[732] + (null == b || _$_662b[1] == b ? _$_662b[710] : b) + _$_662b[711] + (null == o || _$_662b[1] == o ? _$_662b[733] : o) + _$_662b[734] + (null == j || _$_662b[1] == j ? _$_662b[735] : j) + _$_662b[736] + (null == undefined || _$_662b[1] == undefined ? _$_662b[737] : undefined) + _$_662b[738] + (null == _ || _$_662b[1] == _ ? _$_662b[737] : _) + _$_662b[739] + (null == id || 
  _$_662b[1] == id ? _$_662b[740] : id) + _$_662b[741] + (null == r || _$_662b[1] == r ? _$_662b[742] : r) + _$_662b[743] + (null == n || _$_662b[1] == n ? _$_662b[744] : n) + _$_662b[745]);
}), $(_$_662b[758]).each(function() {
  var $inno = $(this);
  var id = $inno.attr(_$_662b[699]);
  var n = $inno.attr(_$_662b[70]);
  var r = $inno.attr(_$_662b[702]);
  var j = $inno.attr(_$_662b[729]);
  var b = $inno.attr(_$_662b[701]);
  var s = $inno.attr(_$_662b[747]);
  var o = $inno.attr(_$_662b[706]);
  var _ = $inno.attr(_$_662b[748]);
  $inno.replaceWith(_$_662b[749] + (null == b || _$_662b[1] == b || _$_662b[301] == b ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == r || _$_662b[1] == r ? _$_662b[750] : r) + _$_662b[751] + (null == id || _$_662b[1] == id ? _$_662b[752] : id) + _$_662b[753] + (null == o || _$_662b[1] == o ? _$_662b[1] : o) + _$_662b[754] + (null == _ || _$_662b[1] == _ ? _$_662b[301] : _) + _$_662b[755] + (null == s || _$_662b[1] == s ? _$_662b[737] : 
  s) + _$_662b[756] + (null == j || _$_662b[1] == j ? _$_662b[737] : j) + _$_662b[757]);
}), $(_$_662b[762]).each(function() {
  var $inno = $(this);
  var id = $inno.attr(_$_662b[699]);
  var n = $inno.attr(_$_662b[70]);
  var s = $inno.attr(_$_662b[701]);
  var j = $inno.attr(_$_662b[702]);
  $inno.replaceWith(_$_662b[759] + (null == s || _$_662b[1] == s || _$_662b[301] == s ? _$_662b[1] : _$_662b[708]) + _$_662b[709] + (null == n || _$_662b[1] == n ? _$_662b[710] : n) + _$_662b[711] + (null == j || _$_662b[1] == j ? _$_662b[750] : j) + _$_662b[760] + (null == id || _$_662b[1] == id ? _$_662b[1] : id) + _$_662b[761]);
}), $(_$_662b[764]).addClass(_$_662b[763]), $(_$_662b[767]).each(function() {
  var assetsbadgesbadge_ = $(this).attr(_$_662b[44]);
  var id = $(this).attr(_$_662b[676]);
  var n = _$_662b[677] + (null == id || _$_662b[1] == id ? _$_662b[1] : _$_662b[678] + id) + _$_662b[26];
  var count = $(this).html();
  if (null == assetsbadgesbadge_) {
    assetsbadgesbadge_ = _$_662b[1];
  }
  if (_$_662b[1] != assetsbadgesbadge_) {
    assetsbadgesbadge_ = _$_662b[765] + (null == id || _$_662b[1] == id ? _$_662b[1] : n) + assetsbadgesbadge_ + _$_662b[94];
  }
  $(this).html(_$_662b[766] + assetsbadgesbadge_ + (null == count ? _$_662b[1] : count) + _$_662b[94]);
}), $(_$_662b[778]).each(function() {
  var $inno = $(this);
  var id = $inno.attr(_$_662b[699]);
  var n = $inno.attr(_$_662b[768]);
  var r = $inno.attr(_$_662b[769]);
  var j = $inno.attr(_$_662b[701]);
  var a = _$_662b[770] + n + _$_662b[771];
  var s = $inno.attr(_$_662b[70]);
  var o = $inno.attr(_$_662b[702]);
  $inno.replaceWith((null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[772] + (null == j || _$_662b[1] == j || _$_662b[301] == j ? _$_662b[1] : _$_662b[708]) + _$_662b[520] + (null == n || _$_662b[1] == n ? _$_662b[1] : a) + _$_662b[773] + (null == r || _$_662b[1] == r ? _$_662b[1] : r) + _$_662b[22]) + _$_662b[774] + (null == j || _$_662b[1] == j || _$_662b[301] == j ? _$_662b[1] : _$_662b[708]) + _$_662b[775] + (null == s || _$_662b[1] == s ? _$_662b[1] : s) + _$_662b[711] + (null == o || _$_662b[1] == 
  o ? _$_662b[1] : o) + _$_662b[658] + (null == id || _$_662b[1] == id ? _$_662b[776] : id) + _$_662b[777] + (null == n || _$_662b[1] == n ? _$_662b[1] : _$_662b[77]));
}), $(_$_662b[781]).each(function() {
  $(this).children(_$_662b[780]).remove();
}).addClass(_$_662b[779]), $(_$_662b[787]).each(function() {
  var $oldButton = $(this).attr(_$_662b[782]);
  var id = $(this).html();
  $oldButton = _$_662b[783] + (null == $oldButton || _$_662b[1] == $oldButton ? _$_662b[784] : $oldButton) + _$_662b[22] + (null == id || _$_662b[1] == id ? _$_662b[785] : id) + _$_662b[786];
  $(this).replaceWith($oldButton);
});
/** @type {!NodeList<Element>} */
var e = document.getElementsByTagName(_$_662b[788]);
/** @type {number} */
var t = e.length;
/** @type {number} */
var n = 0;
for (; n < t; n++) {
  /** @type {string} */
  e[n].innerHTML = _$_662b[789] + e[n].innerHTML + _$_662b[790];
  /** @type {number} */
  var r = e[n].innerHTML.split(/\n/).length;
  /** @type {number} */
  var i = 0;
  for (; i < r; i++) {
    /** @type {!Element} */
    var s = e[n].getElementsByTagName(_$_662b[791])[0];
    s.innerHTML += _$_662b[792] + (i + 1) + _$_662b[105];
  }
}
$(_$_662b[794]).each(function() {
  $(this).html($(_$_662b[793]).html());
}), $(_$_662b[799]).each(function() {
  var $oldButton = $(this).attr(_$_662b[768]);
  var id = $(this).attr(_$_662b[44]);
  var n = $(this).html();
  $oldButton = _$_662b[223] + (null == $oldButton || _$_662b[1] == $oldButton ? _$_662b[231] : $oldButton) + _$_662b[795] + (null == id || _$_662b[1] == id ? _$_662b[796] : id) + _$_662b[792] + (null == n || _$_662b[1] == n ? _$_662b[797] : n) + _$_662b[798];
  $(this).replaceWith($oldButton);
}), $(_$_662b[807]).each(function() {
  var selected = _$_662b[1];
  $(this).find(_$_662b[689]).each(function() {
    var e = $(this).attr(_$_662b[44]);
    var id = $(this).attr(_$_662b[768]);
    var n = $(this).attr(_$_662b[699]);
    var r = $(this).html();
    selected = selected + (_$_662b[800] + n + _$_662b[801] + (null == id || _$_662b[1] == id ? n : id) + _$_662b[802] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[803] + (null == id || _$_662b[1] == id ? n : id) + _$_662b[22] + e + _$_662b[804]) + (_$_662b[1] == r ? _$_662b[1] : _$_662b[805] + r + _$_662b[125]) + _$_662b[664]);
  });
  $(this).html(selected).parents(_$_662b[518]).addClass(_$_662b[806]);
  $(this).owlCarousel({
    nav : true,
    rtl : ts_isRTL(),
    autoplay : true,
    navText : [_$_662b[1], _$_662b[1]],
    autoplayTimeout : 5e3,
    loop : true,
    responsiveClass : true,
    animateOut : _$_662b[562],
    animateIn : _$_662b[563],
    autoplayHoverPause : true,
    smartSpeed : 500,
    items : 1,
    responsiveRefreshRate : 500
  }).addClass(_$_662b[561]);
}), $(_$_662b[809]).each(function() {
  var id = _$_662b[1];
  var t = $(this);
  t.find(_$_662b[689]).each(function() {
    var e = $(this).attr(_$_662b[44]);
    var url = $(this).attr(_$_662b[768]);
    var n = $(this).attr(_$_662b[699]);
    var r = $(this).html();
    id = id + (_$_662b[808] + n + _$_662b[801] + (null == url || _$_662b[1] == url ? n : url) + _$_662b[802] + (null == e || _$_662b[1] == e ? _$_662b[1] : _$_662b[803] + (null == url || _$_662b[1] == url ? n : url) + _$_662b[22] + e + _$_662b[804]) + (_$_662b[1] == r ? _$_662b[1] : _$_662b[805] + r + _$_662b[125]) + _$_662b[664]);
  });
  t.html(id);
  t.owlCarousel({
    autoplay : true,
    margin : 2,
    loop : true,
    autoplayTimeout : 5e3,
    rtl : ts_isRTL(),
    nav : true,
    autoplayHoverPause : true,
    responsiveBaseElement : t,
    navText : [_$_662b[1], _$_662b[1]],
    responsive : {
      0 : {
        items : 1
      },
      401 : {
        items : 2
      },
      660 : {
        items : 3
      },
      1E3 : {
        items : 4
      }
    }
  }).addClass(_$_662b[561]);
}), $(_$_662b[834]).each(function() {
  var e = $(this);
  var i = e.attr(_$_662b[810]);
  e.html(e.html().replace(/&nbsp;/g, _$_662b[1]));
  e.find(_$_662b[689]).each(function() {
    var $inno = $(this);
    var len = $inno.attr(_$_662b[811]);
    var n = (len = Number(null == len || _$_662b[1] == len ? 0 : len), $inno.html());
    $inno.replaceWith(_$_662b[812] + (null == n || _$_662b[1] == n ? _$_662b[813] : n) + _$_662b[792] + len + _$_662b[814] + len + _$_662b[815] + 10 * len + _$_662b[816]);
  });
  e.find(_$_662b[681]).each(function() {
    var e = $(this);
    var t = e.attr(_$_662b[44]);
    var n = e.attr(_$_662b[199]);
    var s = e.html();
    t = _$_662b[817] + (null == t || _$_662b[1] == t ? _$_662b[818] : t) + _$_662b[819] + (null == s || _$_662b[1] == s ? _$_662b[820] : s) + _$_662b[821] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[823];
    if (null != i && _$_662b[737] == i) {
      $(_$_662b[402]).prepend(_$_662b[824] + (null == n || _$_662b[1] == n ? _$_662b[822] : n) + _$_662b[825]);
    }
    e.replaceWith(t);
  });
  var text = e.find(_$_662b[826]);
  var h = text.length;
  /** @type {number} */
  var ms = 0;
  text.each(function() {
    ms = ms + parseInt($(this).attr(_$_662b[827]));
  });
  /** @type {number} */
  h = 10 * (text = (ms / h).toFixed(1)) / 100 * 360;
  $(_$_662b[828]).html(text);
  $(_$_662b[830]).addClass(_$_662b[829] + 10 * text);
  $(_$_662b[833]).css({
    "-webkit-transform" : _$_662b[831] + h + _$_662b[832],
    "-moz-transform" : _$_662b[831] + h + _$_662b[832],
    "-ms-transform" : _$_662b[831] + h + _$_662b[832],
    "-o-transform" : _$_662b[831] + h + _$_662b[832],
    transform : _$_662b[831] + h + _$_662b[832]
  });
  e.children(_$_662b[780]).remove();
}), $(_$_662b[518]).each(function() {
  var e;
  var navi;
  var e0;
  var jQFieldset = $(this);
  var container = jQFieldset.children(_$_662b[835]);
  var a = container.text();
  var x = rgx[33] + _$_662b[94];
  if (rgx[18].test(a)) {
    a = (e = a.match(rgx[18]))[0].replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
    e0 = e[1];
    e = -1 != (navi = void 0 !== e[2] ? e[2] : _$_662b[1]).indexOf(_$_662b[80]) ? _$_662b[836] + navi + _$_662b[771] : _$_662b[1];
    navi = -1 != navi.indexOf(_$_662b[231]) ? _$_662b[837] + navi + _$_662b[771] : _$_662b[1];
    container.html(_$_662b[838] + a + _$_662b[839] + e0 + _$_662b[520] + navi + _$_662b[76] + e + _$_662b[840] + x);
    jQFieldset.addClass(_$_662b[582]);
  } else {
    if (rgx[19].test(a)) {
      jQFieldset.addClass(_$_662b[582]);
      container.html(_$_662b[841] + x);
    } else {
      if (rgx[20].test(a)) {
        jQFieldset.addClass(_$_662b[582]);
        container.html(_$_662b[842] + x);
      } else {
        if (rgx[21].test(a)) {
          jQFieldset.addClass(_$_662b[582]);
          jQFieldset = -1 != a.indexOf(_$_662b[55]) ? a.replace(rgx[22], _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]) : _$_662b[1];
          container.html(_$_662b[838] + jQFieldset + _$_662b[843] + x);
        }
      }
    }
  }
});
var title1;
var title2;
var title3;
var winHe = $(window).height();
if ($(_$_662b[518]).each(function() {
  var e = $(this);
  var t = e.children(_$_662b[835]);
  var executableCode = e.find(_$_662b[844]);
  var N_LOG_FUNCTION_ENTER = t.text();
  var i = .1 * e.height() - winHe + e.offset().top;
  var cell_amount = $(document).scrollTop();
  if (!e.hasClass(_$_662b[275])) {
    if (i < cell_amount) {
      ldwid(executableCode, e, t, N_LOG_FUNCTION_ENTER);
    }
  }
}), $(_$_662b[845]).length && (title1 = $(_$_662b[846]), title2 = $(_$_662b[847]), title3 = $(_$_662b[848]), title1.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) == title2.text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]) && (title1.html(title2.html()), title2.parent().remove()), title3.length && ($(_$_662b[849]).html(title3.html()), title3.parent().remove())), $(_$_662b[860]).each(function() {
  /** @type {!Array} */
  var nodes = [];
  var html = $(this).html();
  var a = $(_$_662b[851]).attr(_$_662b[850]);
  var e = $(_$_662b[852]).attr(_$_662b[108]);
  /** @type {!RegExp} */
  var t = /\[lock\]/g;
  /** @type {!RegExp} */
  var n = /\[\/lock\]/g;
  if (t.test(html) && n.test(html)) {
    if (_$_662b[853] == getCookieLocal(_$_662b[854] + a)) {
      html = html.replace(t, _$_662b[1]).replace(n, _$_662b[1]);
      $(this).html(html);
    } else {
      $(this).html($(this).html().replace(t, _$_662b[856]).replace(n, _$_662b[855]));
      $(this).find(_$_662b[859]).each(function() {
        nodes.push($(this).html());
        $(this).replaceWith(_$_662b[857] + e + _$_662b[858]);
      });
      $(document).on(_$_662b[267], function(n) {
        if (_$_662b[8] != typeof n) {
          /** @type {string} */
          var e = window.location.href;
          if ((n = n.url) && (-1 != n.indexOf(e) || -1 != e.indexOf(n))) {
            html = $(_$_662b[860]).html();
            /** @type {number} */
            var id = 0;
            $(_$_662b[861]).each(function() {
              if (_$_662b[8] != typeof nodes[id]) {
                $(this).replaceWith(nodes[id]);
              }
              id++;
            });
            setCookieLocal(_$_662b[854] + a, _$_662b[853]);
          }
        }
      });
    }
  }
}), $(_$_662b[862]).length && (window.twttr = function(base, o, frame_id) {
  var t;
  /** @type {!Element} */
  var wafCss = base.getElementsByTagName(o)[0];
  return base.getElementById(frame_id) ? void 0 : ((base = base.createElement(o)).id = frame_id, base.src = _$_662b[864], wafCss.parentNode.insertBefore(base, wafCss), window.twttr || (t = {
    _e : [],
    ready : function(val) {
      t._e.push(val);
    }
  }));
}(document, _$_662b[261], _$_662b[863]), twttr.ready(function(prefsEditor) {
  prefsEditor.events.bind(_$_662b[865], function(NameSpace) {
    $.event.trigger({
      type : _$_662b[267],
      url : NameSpace.target.baseURI
    });
  });
})), ($(_$_662b[270]).length || $(_$_662b[866]).length) && fbsdk(), $(_$_662b[867]).length) {
  /**
   * @param {?} clicked_el
   * @return {undefined}
   */
  var Display_Reply_Form = function(clicked_el) {
    par_id = $(clicked_el).attr(_$_662b[850]);
    par_id = Valid_Par_Id(par_id);
    html = $(Cur_Cform_Hdr).html();
    if (_$_662b[868] == Cur_Cform_Hdr) {
      reset_html = _$_662b[869] + Msgs.addComment + _$_662b[77];
      $(Cur_Cform_Hdr).html(reset_html);
    } else {
      $(Cur_Cform_Hdr).html(_$_662b[1]);
    }
    Cur_Cform_Hdr = _$_662b[870] + par_id;
    $(Cur_Cform_Hdr).html(html);
    $(_$_662b[871]).attr(_$_662b[699], Cform_Ins_ParID(par_id));
  };
  /**
   * @return {undefined}
   */
  var Reset_Comment_Form = function() {
    html = $(Cur_Cform_Hdr).html();
    $(Cur_Cform_Hdr).html(_$_662b[1]);
    Cur_Cform_Hdr = _$_662b[868];
    $(Cur_Cform_Hdr).html(html);
    $(_$_662b[871]).attr(_$_662b[699], Cur_Cform_Url);
  };
  /**
   * @param {?} id
   * @return {?}
   */
  var Cform_Ins_ParID = function(id) {
    return id = _$_662b[872] + id + _$_662b[873], n_cform_url = Cur_Cform_Url.replace(/#%7B/, id), n_cform_url;
  };
  /**
   * @param {string} id
   * @return {?}
   */
  var Valid_Par_Id = function(id) {
    return -1 != (r = id.indexOf(_$_662b[234])) && (id = id.substring(r + 1)), id;
  };
  if (0 < $(_$_662b[874]).length && $(_$_662b[512]).hasClass(_$_662b[156])) {
    $(_$_662b[879]).each(function() {
      var dat = $(this).html().replace(/\{/g, _$_662b[876]).replace(/#/g, _$_662b[875]).replace(/\}/g, _$_662b[224]);
      $(this).html(dat);
      dat = $(this).children(_$_662b[877]);
      /** @type {number} */
      var i = 0;
      for (; i < dat.length; i = i + (dat.length + 1)) {
        dat.slice(i, i + dat.length + 1).wrapAll(_$_662b[878]);
      }
    });
    $(_$_662b[874]).each(function() {
      /** @type {!RegExp} */
      var value = /(\r\n|\n|\r)/gm;
      var stripedItem = $(_$_662b[880]).length ? $(_$_662b[880]).text().replace(value, _$_662b[1]) : _$_662b[881];
      var html = (value = (html = $(this)).children(_$_662b[216]).html().replace(value, _$_662b[1]), html.find(_$_662b[882]).html());
      if (stripedItem === value) {
        if (_$_662b[1] === $(_$_662b[883]).html()) {
          $(_$_662b[883]).html(desnya);
        }
        $(_$_662b[884]).html(html);
        $(_$_662b[889]).each(function() {
          var originalBaseURL = $(this).attr(_$_662b[25]);
          $(this).wrap(_$_662b[885] + originalBaseURL.replace(_$_662b[887], _$_662b[1]).replace(_$_662b[886], _$_662b[1]) + _$_662b[888]);
        });
      }
    });
  }
  var $postbody = $(_$_662b[402]).html();
  var $adsisi = $(_$_662b[890]);
  /** @type {!RegExp} */
  var myrgx = /\[(full-post|left-post|right-post|left-side|right-side|hideadstitle)\]/g;
  if (/\[left-post\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[891]) : /\[right-post\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[893]) : /\[left-side\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[894]) : /\[right-side\]/.test($postbody) ? $(_$_662b[892]).addClass(_$_662b[895]) : /\[full-post\]/.test($postbody) && $(_$_662b[892]).addClass(_$_662b[896]), /\[hideadstitle\]/.test($postbody) && $(_$_662b[892]).addClass(_$_662b[897]), myrgx.test($postbody) && $(_$_662b[402]).html($postbody.replace(myrgx, 
  _$_662b[1])), $postbody = $(_$_662b[402]).html(), /\[ads-post\]/.test($postbody) && ($(_$_662b[402]).html($postbody.replace(/\[ads-post\]/, _$_662b[898])), $(_$_662b[899]).html($adsisi.detach())), $postbody = $(_$_662b[402]).html(), $(_$_662b[900]).length && !/\[hidetitleads\]/.test($postbody) && ($(_$_662b[402]).before(_$_662b[901] + (tbline ? _$_662b[902] : _$_662b[1]) + _$_662b[903] + (tbline ? _$_662b[904] : _$_662b[1]) + _$_662b[642]), $(_$_662b[905]).html($(_$_662b[900]).detach()), !hecpt && 
  $(_$_662b[400]).length && ($(_$_662b[907]).prepend(_$_662b[906] + $(_$_662b[400]).html() + _$_662b[94]), $(_$_662b[400]).remove()), $(_$_662b[908]).length)) {
    /** @type {number} */
    var len = $(_$_662b[909]).length ? 3 : 8;
    $(_$_662b[908]).RCWid({
      maxPosts : len,
      maxPostsPerTag : 9,
      ShowImage : false,
      ShowComment : true,
      random : _$_662b[238] === blinest,
      tags : /(recent|random)/.test(blinest) ? [] : null,
      ShowAuthor : false
    });
  }
  if ($(_$_662b[910]).length && !/\[hidebottomads\]/.test($postbody) && ($(_$_662b[914]).before(_$_662b[911] + (bbline ? _$_662b[902] : _$_662b[1]) + _$_662b[22] + (bbline ? _$_662b[912] : _$_662b[1]) + _$_662b[913]), $(_$_662b[915]).html($(_$_662b[910]).detach()), $(_$_662b[916]).length && $(_$_662b[916]).RCWid({
    maxPosts : 5,
    maxPostsPerTag : 9,
    ShowImage : true,
    ShowComment : true,
    random : _$_662b[238] === btlinest,
    tags : /(recent|random)/.test(btlinest) ? [] : null,
    ShowAuthor : false
  })), /\[(hidetitleads|hideendads)\]/.test($postbody) && $(_$_662b[402]).html($postbody.replace(/\[(hidetitleads|hideendads)\]/g, _$_662b[1])), $postbody = $(_$_662b[402]).html(), /\[next\]/.test($postbody)) {
    $(_$_662b[851]).prepend(_$_662b[917]);
    $(_$_662b[914]).before(_$_662b[918]);
    $(_$_662b[402]).prepend(_$_662b[920]).append(_$_662b[919]);
    var pbodyhtml = $(_$_662b[402]).html();
    $(_$_662b[402]).html(pbodyhtml.replace(/\[fnt\]/g, _$_662b[922]).replace(/\[next\]/g, _$_662b[921]).replace(/\[lnt\]/g, _$_662b[94]));
    /** @type {number} */
    var show_per_page = 1;
    var $this = $(_$_662b[851]);
    contentnya = $this.find(_$_662b[402]);
    number_of_items = contentnya.children().length;
    /** @type {number} */
    number_of_pages = Math.ceil(number_of_items / show_per_page);
    pageplace = $this.find(_$_662b[923]);
    curpagenya = $this.find(_$_662b[924]);
    perpagenya = $this.find(_$_662b[925]);
    curpagenya.val(0);
    perpagenya.val(show_per_page);
    var navigation_html = _$_662b[926];
    /** @type {number} */
    var current_link = 0;
    for (; number_of_pages > current_link;) {
      navigation_html = navigation_html + (_$_662b[927] + current_link + _$_662b[928] + current_link + _$_662b[22] + (current_link + 1) + _$_662b[77]);
      current_link++;
    }
    navigation_html = navigation_html + _$_662b[929];
    pageplace.html(navigation_html);
    pageplace.find(_$_662b[931]).addClass(_$_662b[930]);
    contentnya.children().css(_$_662b[180], _$_662b[932]);
    contentnya.children().slice(0, show_per_page).css(_$_662b[180], _$_662b[181]);
    /**
     * @param {number} page_num
     * @return {undefined}
     */
    var go_to_page = function(page_num) {
      /** @type {number} */
      var ipp = parseInt(perpagenya.val());
      /** @type {number} */
      start_from = page_num * ipp;
      /** @type {number} */
      end_on = start_from + ipp;
      contentnya.children().css(_$_662b[180], _$_662b[932]).slice(start_from, end_on).css(_$_662b[180], _$_662b[181]);
      $this.find(_$_662b[934] + page_num + _$_662b[935]).addClass(_$_662b[930]).siblings(_$_662b[933]).removeClass(_$_662b[930]);
      curpagenya.val(page_num);
      $(_$_662b[205]).animate({
        scrollTop : $(_$_662b[402]).offset().top - 80
      }, 1e3);
    };
    $this.find(_$_662b[937]).on(_$_662b[9], function() {
      var locateClickedTd = $this.find(_$_662b[933]);
      return new_page = parseInt(curpagenya.val()) - 1, 1 == locateClickedTd.prev(_$_662b[936]).length && go_to_page(new_page), false;
    });
    $this.find(_$_662b[938]).on(_$_662b[9], function() {
      var deletedChar = $this.find(_$_662b[933]);
      return new_page = parseInt(curpagenya.val()) + 1, 1 == deletedChar.next(_$_662b[936]).length && go_to_page(new_page), false;
    });
    $this.find(_$_662b[936]).on(_$_662b[9], function() {
      var which_page_num = $(this).attr(_$_662b[939]);
      return go_to_page(which_page_num), false;
    });
    $this.find(_$_662b[940]).on(_$_662b[9], function() {
      return $(this).attr(_$_662b[939]), contentnya.children().css(_$_662b[180], _$_662b[181]), pageplace.hide(), $(_$_662b[205]).animate({
        scrollTop : $(_$_662b[402]).offset().top - 80
      }, 1e3), false;
    });
  }
  $(_$_662b[954]).each(function() {
    var originalBaseURL = $(this).attr(_$_662b[699]);
    $(this).attr(_$_662b[699], originalBaseURL.replace(/\/s[0-9]+(\-c)?\//, _$_662b[953])).addClass(_$_662b[426]);
  });
  $(_$_662b[507]).append(_$_662b[955]);
  $(_$_662b[956]).append($(_$_662b[417]));
  $(_$_662b[417]).myTab();
  if (1 == $(_$_662b[957]).length) {
    $(_$_662b[958]).hide();
  }
  $(_$_662b[964]).each(function() {
    var e = $(this);
    var str = e.attr(_$_662b[44]);
    var currentPageLink = e.parent(_$_662b[28]);
    var el_form_group = e.parents(_$_662b[959]);
    if (!(null == str && _$_662b[1] == str || !/\{featured\}/.exec(str))) {
      e.attr(_$_662b[44], str.replace(/\{featured\}/, _$_662b[1]));
      if (currentPageLink.length) {
        currentPageLink.addClass(_$_662b[960]);
      } else {
        e.addClass(_$_662b[960]);
      }
      if (el_form_group.length) {
        el_form_group.addClass(_$_662b[556]);
        e = el_form_group.find(_$_662b[961]).text();
        el_form_group.find(_$_662b[963]).append(_$_662b[962] + e + _$_662b[105]);
      }
    }
  });
  var txtnyaaa = $(_$_662b[402]).html();
  /** @type {!Array} */
  var imgjd = [];
  var pfeat = (imgjd = /<img\s+[^>]*src="([^"]*)"[^>]*>/.exec(txtnyaaa), $(_$_662b[963]));
  if (pfeat.length) {
    $(_$_662b[963]).each(function() {
      $(_$_662b[965]).append($(this));
    });
    if (1 < pfeat.length) {
      $(_$_662b[965]).wrapInner(_$_662b[966]);
      $(_$_662b[967]).owlCarousel({
        nav : true,
        rtl : ts_isRTL(),
        navText : [_$_662b[1], _$_662b[1]],
        loop : true,
        responsiveClass : true,
        autoplayHoverPause : true,
        smartSpeed : 500,
        items : 1,
        responsiveRefreshRate : 500
      }).addClass(_$_662b[561]);
    }
  } else {
    if (null != imgjd && imgjd.index <= 480 && fpost) {
      var img = $(_$_662b[964]).first();
      var par = img.parent(_$_662b[28]);
      var pars = img.parents(_$_662b[959]);
      var gpars = img.parents(_$_662b[968]);
      var pars2 = img.parents(_$_662b[969]);
      if (!gpars.length) {
        if ($(_$_662b[965]).append(par.length ? par : img), pars2.addClass(_$_662b[556]), pars.length) {
          var text = pars.find(_$_662b[961]).text();
          $(_$_662b[970]).append(_$_662b[962] + text + _$_662b[105]);
          pars.addClass(_$_662b[556]);
        }
        if ($(_$_662b[971]).length) {
          $(_$_662b[971]).removeAttr(_$_662b[78]);
        }
      }
    }
  }
  var link = $(_$_662b[852]).attr(_$_662b[108]);
  $(_$_662b[401]).after(_$_662b[974] + link + _$_662b[975]);
  $(_$_662b[977]).click(function() {
    var $tabHeading = $(this);
    return $tabHeading.hasClass(_$_662b[18]) ? ($(_$_662b[976]).hide(), $tabHeading.removeClass(_$_662b[18])) : ($tabHeading.addClass(_$_662b[18]), $(_$_662b[976]).show().children().focus().select()), false;
  });
  $(_$_662b[979]).addClass(_$_662b[978]);
}
$(_$_662b[980]).each(function() {
  $(this).html($(this).html().replace(rgx[16], _$_662b[1]));
});
var $outer = $(_$_662b[981]);
var $contact = $(_$_662b[982]);
$(_$_662b[984]).click(function() {
  return $contact.hasClass(_$_662b[583]) || ($contact.addClass(_$_662b[583]), $outer.addClass(_$_662b[983])), false;
}), $(_$_662b[985]).click(function() {
  return $contact.removeClass(_$_662b[583]), $outer.removeClass(_$_662b[983]), false;
}), $(document).on(_$_662b[9], function(jEvent) {
  if (!$(jEvent.target).is(_$_662b[986])) {
    $contact.removeClass(_$_662b[583]);
    $outer.removeClass(_$_662b[983]);
  }
}), $(_$_662b[988]).each(function() {
  var e = $(this);
  e.parents(_$_662b[503]);
  e = e.html();
  $(_$_662b[987]).append(e);
}), $(_$_662b[1009]).one(_$_662b[590], function() {
  var e = $(this);
  var results = e.find(_$_662b[35]);
  var val = results.text();
  if (/grid/g.test(val)) {
    val = val.replace(/grid\//g, _$_662b[1]);
    e.addClass(_$_662b[581]);
    results.RCWid({
      maxPosts : 4,
      random : _$_662b[238] === val,
      review : !hrev,
      ShowTags : !!/(recent|random)/.test(val),
      tags : /(recent|random)/.test(val) ? null : val.split(_$_662b[217])
    }).addClass(_$_662b[989]);
    results.append(_$_662b[990] + (_$_662b[238] === val ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === val ? _$_662b[1] : _$_662b[221] + val) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[132]);
  } else {
    if (/mcarousel/g.test(val)) {
      var keywordResults = e.parents(_$_662b[987]);
      val = val.replace(/mcarousel\//g, _$_662b[1]);
      e.addClass(_$_662b[581]);
      results.RCWid({
        maxPosts : 9,
        random : _$_662b[238] === val,
        review : !hrev,
        auto : aplay,
        postType : keywordResults.length ? _$_662b[1] : _$_662b[234],
        ShowTags : !!/(recent|random)/.test(val),
        tags : /(recent|random)/.test(val) ? null : val.split(_$_662b[217])
      }).addClass(_$_662b[989]);
      results.append(_$_662b[990] + (_$_662b[238] === val ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === val ? _$_662b[1] : _$_662b[221] + val) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[994]);
    } else {
      if (/mtab/g.test(val)) {
        keywordResults = (val = val.replace(/mtab\//g, _$_662b[1])).split(_$_662b[217]);
        val = _$_662b[995];
        /** @type {number} */
        var i = 0;
        for (; i < keywordResults.length; i++) {
          val = val + (_$_662b[256] + keywordResults[i] + _$_662b[22] + keywordResults[i] + _$_662b[94]);
        }
        results.html(val + _$_662b[94]);
        results.find(_$_662b[996]).myTab();
        e.addClass(_$_662b[581]);
        results.find(_$_662b[260]).each(function() {
          var componentsStr = $(this).text();
          $(this).RCWid({
            maxPosts : 4,
            review : !hrev,
            tags : componentsStr.split(_$_662b[217])
          }).addClass(_$_662b[989]);
          $(this).append(_$_662b[997] + componentsStr + _$_662b[222] + Npage + _$_662b[993]);
        });
        results.addClass(_$_662b[998]);
      } else {
        if (/mbig/g.test(val)) {
          val = val.replace(/mbig\//g, _$_662b[1]);
          e.addClass(_$_662b[581]);
          results.RCWid({
            maxPosts : 7,
            random : _$_662b[238] === val,
            maxPostsPerTag : /(recent|random)/.test(val) || 1 == val.split(_$_662b[217]).length ? 7 : 4,
            tags : /(recent|random)/.test(val) ? null : val.split(_$_662b[217]),
            fbig : true,
            review : !hrev,
            summary : 100
          });
          results.append(_$_662b[990] + (_$_662b[238] === val ? _$_662b[991] : _$_662b[1]) + _$_662b[992] + (_$_662b[220] === val ? _$_662b[1] : _$_662b[221] + val) + _$_662b[222] + Npage + _$_662b[993]).addClass(_$_662b[999]);
        } else {
          if (/links/g.test(val)) {
            e.addClass(_$_662b[581]);
            results.html(_$_662b[1]);
            results.addClass(_$_662b[1e3]);
            e = $(_$_662b[1001]);
            $(_$_662b[1002]).hide();
            e.each(function() {
              var e = $(this).children(_$_662b[216]).html();
              var t = $(this).children(_$_662b[835]).html();
              results.append(_$_662b[1003] + e + _$_662b[1004] + t + _$_662b[642]);
            });
            results.find(_$_662b[835]).each(function() {
              if (texnya = $(this).text(), /gridpost/g.test(texnya)) {
                var $list = $(this).parents(_$_662b[987]);
                var t = texnya.replace(/gridpost\//g, _$_662b[1]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
                $(this).RCWid({
                  maxPosts : 4,
                  random : _$_662b[238] === t,
                  ShowTags : !!/(recent|random)/.test(t),
                  review : !hrev,
                  postType : $list.length ? _$_662b[1] : _$_662b[234],
                  tags : /(recent|random)/.test(t) ? null : t.split(_$_662b[217])
                }).addClass(_$_662b[989]);
                ($list = $(this).parent(_$_662b[1005])).addClass(_$_662b[1006]);
                if (_$_662b[238] !== t) {
                  $list.find(_$_662b[216]).wrapInner(_$_662b[1007] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[224]);
                  $list.find(_$_662b[216]).append(_$_662b[1008] + (_$_662b[220] === t ? _$_662b[1] : _$_662b[221] + t) + _$_662b[222] + Npage + _$_662b[22] + mtx + _$_662b[77]);
                }
              }
            });
          }
        }
      }
    }
  }
}), $(_$_662b[1011]).html($(_$_662b[1010]).html()), $(_$_662b[1013]).html($(_$_662b[1012]).html()), $(_$_662b[1015]).click(function() {
  var $menuElementWrapper = $(this).parent(_$_662b[35]).children(_$_662b[37]);
  return $menuElementWrapper.is(_$_662b[1014]) ? ($menuElementWrapper.slideDown(), $(this).addClass(_$_662b[18])) : ($menuElementWrapper.slideUp(), $(this).removeClass(_$_662b[18])), false;
}), $(_$_662b[987]).css({
  "max-height" : $(window).height() - 140
});
var maxSummaryLength = sumLength;
var olderLink = _$_662b[1016] + ptx + _$_662b[1017];
var newerLink = _$_662b[1018] + ntx + _$_662b[1017];
var defaultImage = _$_662b[776];
/**
 * @param {!Object} data
 * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} src
 * @return {?}
 */
var getThumb = function(data, src) {
  var id;
  /** @type {(Array|HTMLCollection|Node|NodeList|Window|string)} */
  var url = src;
  id = data.content.$t;
  try {
    url = data.media$thumbnail.url;
  } catch (e) {
    if (rgx[6].test(id) || rgx[8].test(id)) {
      url = rgx[6].exec(rgx[6]);
      id = rgx[8].exec(id);
      url = _$_662b[53] + (null != url ? url[5] : id[3]) + _$_662b[51];
    } else {
      url = rgx[5].test(id) ? (id = rgx[5].exec(id))[4] : src;
    }
  }
  return url;
};
/**
 * @param {?} link
 * @param {string} value
 * @param {(Array|Document|DocumentFragment|Element|HTMLCollection|NodeList|string)} data
 * @param {!Object} item
 * @return {undefined}
 */
var setLink = function(link, value, data, item) {
  var d = item.published.$t.match(/\d+/g);
  /** @type {!Date} */
  d = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
  data = getThumb(item, data);
  var processUrl = $(link).attr(_$_662b[27]);
  if ((str = (str = _$_662b[108] in item ? item.content.$t : _$_662b[109] in item ? item.summary.$t : _$_662b[1]).replace(rgx[15], _$_662b[1]).replace(rgx[16], _$_662b[1]).replace(/"/g, _$_662b[73])).length > maxSummaryLength) {
    var separatorStartIndex = (str = str.substring(0, maxSummaryLength)).lastIndexOf(_$_662b[76]);
    var str = str.substring(0, separatorStartIndex) + _$_662b[115];
  }
  value = (value = (value = (value = (value = (value = value.replace(/\[title\]/g, item.title.$t)).replace(/\[date\]/g, d.toLocaleDateString())).replace(/\[datetime\]/g, d.toLocaleString())).replace(/\[summary\]/g, str)).replace(/\[thumburl\]/g, data)).replace(/\[url\]/g, processUrl);
  d = _$_662b[1];
  if (_$_662b[1] != data) {
    d = _$_662b[1019] + data + _$_662b[22];
  }
  value = value.replace(/\[img\]/g, d);
  $(link).replaceWith(value);
};
/**
 * @param {!Object} selectedHostFolder
 * @return {undefined}
 */
var setOlderLink = function(selectedHostFolder) {
  setLink(_$_662b[1020], olderLink, defaultImage, selectedHostFolder);
};
/**
 * @param {!Object} selectedHostFolder
 * @return {undefined}
 */
var setNewerLink = function(selectedHostFolder) {
  setLink(_$_662b[1021], newerLink, defaultImage, selectedHostFolder);
};
$(_$_662b[1024]).each(function() {
  var nextContent = $(this).attr(_$_662b[44]);
  var wordSelection = $(this).attr(_$_662b[1022]);
  $(_$_662b[1023]).replaceText(nextContent, wordSelection);
});
var target;
var scroll;
/** @type {number} */
var lastScrollTop = 0;
$(window).on(_$_662b[1025], function() {
  var end = $(this).scrollTop();
  if (fixM) {
    if (end >= $(_$_662b[1026]).height() + 60) {
      $(_$_662b[1028]).addClass(_$_662b[1027]);
      if (lastScrollTop < end) {
        if ($(_$_662b[1026]).hasClass(_$_662b[1029])) {
          $(_$_662b[1026]).removeClass(_$_662b[1029]);
        }
      } else {
        $(_$_662b[1026]).addClass(_$_662b[1029]);
      }
      lastScrollTop = end;
    } else {
      $(_$_662b[1028]).removeClass(_$_662b[1027]);
    }
    if (!$(_$_662b[1031]).hasClass(_$_662b[1030])) {
      $(_$_662b[1031]).addClass(_$_662b[1030]);
    }
  }
  if (sSide && 960 < $(this).width()) {
    if (1 < $(_$_662b[206]).width()) {
      stickside($(_$_662b[206]), _$_662b[1032], end);
    }
    if (1 < $(_$_662b[1033]).width()) {
      stickside($(_$_662b[1033]), _$_662b[1032], end);
    }
    if (!$(_$_662b[1031]).hasClass(_$_662b[1034])) {
      $(_$_662b[1031]).addClass(_$_662b[1034]);
    }
  }
  var elem;
  var options;
  var port;
  var expRecords;
  var host;
  var node;
  var papa;
  var doc;
  var script;
  var c = $(_$_662b[518]).length;
  if ($(_$_662b[1035]).length < c) {
    /** @type {boolean} */
    var asc = 1 <= end;
    $(_$_662b[518]).each(function() {
      if (!$(this).hasClass(_$_662b[275])) {
        var e = $(this);
        var t = e.children(_$_662b[835]);
        var executableCode = e.find(_$_662b[844]);
        var N_LOG_FUNCTION_ENTER = t.text();
        if (asc) {
          ldwid(executableCode, e, t, N_LOG_FUNCTION_ENTER);
        }
      }
    });
  }
  if ($(_$_662b[1036]).length || fbsdk(), $(_$_662b[354]).length && $(_$_662b[509]).hasClass(_$_662b[1037]) && $(_$_662b[1038]).length && !$(_$_662b[354]).hasClass(_$_662b[1039]) && ((script = (doc = document).createElement(_$_662b[261])).src = _$_662b[95] + dsqsn + _$_662b[1040], script.setAttribute(_$_662b[1041], +new Date), (doc.head || doc.body).appendChild(script), $(_$_662b[354]).addClass(_$_662b[1039])), $(_$_662b[1042]).length && $(_$_662b[1043]).length && !$(_$_662b[1042]).hasClass(_$_662b[1044])) {
    var mass_spec_log = $(_$_662b[1042]).attr(_$_662b[44]);
    elem = window.SPOTIM = {};
    /** @type {!HTMLDocument} */
    options = document;
    port = _$_662b[1045];
    /** @type {(Node|null)} */
    papa = (expRecords = options.getElementsByTagName(_$_662b[261]))[expRecords.length - 1].parentNode;
    elem.spotId = mass_spec_log;
    /** @type {(Node|null)} */
    host = elem.parentElement = papa;
    (node = options.createElement(_$_662b[261])).type = _$_662b[408];
    /** @type {boolean} */
    node.async = true;
    node.src = (_$_662b[410] === options.location.protocol ? _$_662b[409] : _$_662b[80]) + _$_662b[1046] + port;
    (host || options.body || options.head).appendChild(node);
    $(_$_662b[1042]).addClass(_$_662b[1044]);
  }
  if ($(_$_662b[1047]).length && !$(_$_662b[1048]).length) {
    socialct($(_$_662b[851]));
  }
  if ((c = $(_$_662b[146]).attr(_$_662b[44])) && _$_662b[1] != c && $(_$_662b[512]).hasClass(_$_662b[156]) && !$(_$_662b[1050]).hasClass(_$_662b[1049])) {
    $(_$_662b[1050]).addClass(_$_662b[1049]);
    $.getJSON(_$_662b[1051] + encodeURIComponent(c) + _$_662b[1052], function(res) {
      if (1 < (res = parseInt(res.feed.openSearch$totalResults.$t))) {
        $.getJSON(_$_662b[1053] + (res - 1) + _$_662b[1054], function(data) {
          setNewerLink(data.feed.entry[0]);
          if (1 < parseInt(data.feed.openSearch$totalResults.$t) - parseInt(data.feed.openSearch$startIndex.$t)) {
            setOlderLink(data.feed.entry[2]);
          }
        });
      } else {
        $.getJSON(_$_662b[1055], function(data) {
          setOlderLink(data.feed.entry[0]);
        });
      }
    });
  }
  if ($(_$_662b[1056]).length && !$(_$_662b[1057]).length) {
    $(_$_662b[1056]).each(function() {
      $(this).attr(_$_662b[78], _$_662b[1058] + $(this).attr(_$_662b[49]) + _$_662b[1059]);
      $(this).removeAttr(_$_662b[49]);
      $(this).addClass(_$_662b[1060]);
    });
  }
  if (250 <= end) {
    $(_$_662b[1062]).addClass(_$_662b[1061]);
  } else {
    $(_$_662b[1062]).removeClass(_$_662b[1061]);
  }
  if (shreco && $(_$_662b[1063]).length && $(_$_662b[512]).hasClass(_$_662b[156])) {
    if (!$(_$_662b[1064]).length) {
      $(_$_662b[981]).append(_$_662b[1065] + recotx + _$_662b[1066]);
      $(_$_662b[1067]).RCWid({
        maxPosts : 3,
        maxPostsPerTag : 5,
        ShowComment : true,
        ShowImage : true,
        ShowDesc : false,
        summary : 100,
        ShowAuthor : hauthor
      });
      $(_$_662b[1070]).on(_$_662b[9], function() {
        return $(_$_662b[1064]).hasClass(_$_662b[1068]) ? $(_$_662b[1064]).removeClass(_$_662b[1068]).addClass(_$_662b[1069]) : $(_$_662b[1064]).addClass(_$_662b[1068]), false;
      });
    }
    if (end > $(_$_662b[1071]).offset().top - 400 && end < $(_$_662b[1072]).offset().top - $(_$_662b[1072]).height() && 960 < $(this).width()) {
      $(_$_662b[1064]).addClass(_$_662b[1068]);
    } else {
      $(_$_662b[1064]).removeClass(_$_662b[1068]);
    }
  }
  if (shrel && 1 < end && !$(_$_662b[1074]).hasClass(_$_662b[1073])) {
    $(_$_662b[1074]).RCWid({
      maxPosts : _$_662b[359] === relst ? mx.rl : _$_662b[1076] === relst ? mx.fb1 : 6,
      maxPostsPerTag : 6,
      auto : aplay,
      postType : _$_662b[359] === relst ? _$_662b[234] : _$_662b[1],
      ShowDesc : _$_662b[1076] === relst
    }).addClass(_$_662b[1075] + relst);
  }
}), $(_$_662b[1063]).each(function() {
  var n;
  /** @type {number} */
  var number = 1;
  var vid = $(this);
  n = $(this).text().replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
  $(_$_662b[1079]).each(function() {
    var migrationBarrier;
    var $deepPage = $(this);
    migrationBarrier = $deepPage.attr(_$_662b[44]).replace(/(\r\n|\n|\r)/gm, _$_662b[1]);
    number = $deepPage.attr(_$_662b[1077]);
    if (!(n !== migrationBarrier || vid.attr(_$_662b[1078]))) {
      vid.attr(_$_662b[1078], number);
    }
  });
}), $(_$_662b[1084]).on(_$_662b[9], function(event) {
  if (location.pathname.replace(/^\//, _$_662b[1]) == this.pathname.replace(/^\//, _$_662b[1]) && location.hostname == this.hostname && (target = (target = $(this.hash)).length ? target : $(_$_662b[1080] + this.hash.slice(1) + _$_662b[935])).length) {
    if (_$_662b[1081] == typeof document.body.style.transitionProperty) {
      event.preventDefault();
      if ((event = $(document).height() - $(window).height()) < (scroll = target.offset().top)) {
        /** @type {!Object} */
        scroll = event;
      }
      $(_$_662b[153]).css({
        "margin-top" : $(window).scrollTop() - scroll + _$_662b[297],
        transition : _$_662b[1083]
      }).data(_$_662b[1082], true);
    } else {
      $(_$_662b[205]).animate({
        scrollTop : scroll
      }, 1e3);
    }
  }
}), $(_$_662b[153]).on(_$_662b[1085], function(e) {
  if (e.target == e.currentTarget && true === $(this).data(_$_662b[1082])) {
    $(this).removeAttr(_$_662b[78]).data(_$_662b[1082], false);
    $(_$_662b[205]).scrollTop(scroll);
  }
}), $(window).on(_$_662b[1086], function() {
  $(_$_662b[1088]).each(function() {
    if ($(this).width() < 680) {
      $(this).addClass(_$_662b[1087]);
    } else {
      $(this).removeClass(_$_662b[1087]);
    }
  });
  if ((neededWidth = (currentArrowButton = $(_$_662b[154])).width()) < 680) {
    currentArrowButton.addClass(_$_662b[1089]);
  } else {
    currentArrowButton.removeClass(_$_662b[1089]);
  }
  if ($(_$_662b[1036]).length && window.FB && window.FB.XFBML && window.FB.XFBML.parse) {
    window.FB.XFBML.parse;
  }
  if (!$(_$_662b[1090]).length) {
    $(_$_662b[1092]).append($(_$_662b[1091]));
  }
  if ($(_$_662b[1093]).length) {
    neededWidth = $(_$_662b[1094]).width();
    $(_$_662b[1095]).css({
      width : neededWidth
    });
  }
  var dist = $(window).width();
  var currentArrowButton = $(_$_662b[1096]).height();
  var apppageslobbycreatestep_ = $(_$_662b[1097]).height();
  var stepName = $(_$_662b[207]).height();
  var Cancel = $(_$_662b[1098]).height();
  var a = $(_$_662b[209]).height();
  var neededWidth = $(_$_662b[1033]).width();
  if (960 < dist) {
    if (currentArrowButton < (dist = apppageslobbycreatestep_ + stepName + Cancel + a)) {
      $(_$_662b[1096]).css(_$_662b[1099], dist + _$_662b[297]);
    } else {
      $(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]);
    }
    if (neededWidth < 100) {
      $(_$_662b[1033]).addClass(_$_662b[556]);
    }
  } else {
    $(_$_662b[1096]).css(_$_662b[1099], _$_662b[301]);
    if (100 < neededWidth) {
      $(_$_662b[1033]).removeClass(_$_662b[556]);
    }
  }
}).trigger(_$_662b[1086]);
/**
 * @param {!Window} window
 * @param {!Object} document
 * @return {?}
 */
var Bamboo = function(window, document) {
  /**
   * @return {?}
   */
  function transform3DSupported() {
    var expRecords;
    var elem = document.createElement(_$_662b[829]);
    var map = {
      webkitTransform : _$_662b[1100],
      OTransform : _$_662b[1101],
      msTransform : _$_662b[1102],
      MozTransform : _$_662b[1103],
      transform : _$_662b[1104]
    };
    var i;
    for (i in document.body.insertBefore(elem, null), map) {
      if (void 0 !== elem.style[i]) {
        elem.style[i] = _$_662b[1105];
        expRecords = window.getComputedStyle(elem).getPropertyValue(map[i]);
      }
    }
    return document.body.removeChild(elem), void 0 !== expRecords && 0 < expRecords.length && _$_662b[932] !== expRecords;
  }
  $(_$_662b[1106]);
  var _data;
  var n;
  var $viewport = $(_$_662b[981]);
  var container = $viewport.parent().children(_$_662b[1107]);
  /** @type {boolean} */
  var isTouch = (n = false, _$_662b[1108] in window || window.DocumentTouch && document instanceof DocumentTouch ? (n = true, $(_$_662b[153]).addClass(_$_662b[1109])) : $(_$_662b[153]).addClass(_$_662b[16]), n);
  /** @type {number} */
  var data = (_data = 0, navigator.userAgent.match(/(iPhone|iPod)/i) && -1 != navigator.userAgent.indexOf(_$_662b[1110]) && -1 == navigator.userAgent.indexOf(_$_662b[1111]) && (_data = 60), _$_662b[1112] in window.navigator && window.navigator.standalone && (_data = 0), _data);
  var zoomDif = (transform3DSupported = transform3DSupported()) ? _$_662b[1113] : _$_662b[1];
  var firstValidEvent = _$_662b[1114] in window ? _$_662b[1115] : _$_662b[1086];
  var b = (isTouch ? _$_662b[1116] : _$_662b[1117], isTouch ? _$_662b[1118] : _$_662b[1119]);
  var touchmove = isTouch ? _$_662b[1120] : _$_662b[1121];
  /**
   * @param {!NodeList} opts
   * @return {undefined}
   */
  var Bamboo = function(opts) {
    for (i in this.options = {
      menu : true,
      breakpoint : 1e3,
      menuWidth : 300,
      headerHeight : 50,
      snapThreshold : null,
      resize : null
    }, opts) {
      this.options[i] = opts[i];
    }
    this.resizeSite();
    $(window).on(firstValidEvent, this.resizeSite.bind(this));
    container.on(b, this._move.bind(this));
    $viewport.on(touchmove, this._end.bind(this));
  };
  return Bamboo.prototype = {
    info : {},
    x : 0,
    dx : 0,
    ox : null,
    tgt : null,
    desktop : false,
    dimensions : function() {
      return [this.info.docWidth, this.info.docHeight];
    },
    offset : function() {
      return data;
    },
    resizeSite : function() {
      this.info.docHeight = $(window).height();
      this.info.docWidth = $(window).width();
      this.layout();
      this.snapThreshold = null === this.options.snapThreshold ? Math.round(.25 * this.info.docWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.info.docWidth * this.options.snapThreshold.replace(_$_662b[71], _$_662b[1]) / 100) : this.options.snapThreshold;
      if (this.options.resize) {
        this.options.resize();
      }
    },
    layout : function() {
      /** @type {boolean} */
      this.desktop = !(this.info.docWidth < this.options.breakpoint);
    },
    _move : function(e) {
      if (this.initiated && !this.desktop && this.options.menu) {
        var point = isTouch ? e.originalEvent.touches[0] : e;
        this.stepsX += Math.abs(point.pageX - this.pointX);
        this.stepsY += Math.abs(point.pageY - this.pointY);
        if (!(this.stepsX < 10 && this.stepsY < 10)) {
          if (!this.directionLocked && this.stepsY > this.stepsX) {
            /** @type {boolean} */
            this.initiated = false;
          } else {
            e.preventDefault();
            /** @type {boolean} */
            this.directionLocked = true;
            if (this.ox) {
              /** @type {number} */
              e = parseInt(point.pageX) - this.ox;
              /** @type {number} */
              this.dx = e - this.x;
              /** @type {!Object} */
              this.x = e;
              this._moveContainer(e);
            }
          }
        }
      }
    },
    _end : function(e) {
      if (this.initiated && !this.desktop && this.options.menu) {
        /** @type {number} */
        e = parseInt((isTouch ? e.originalEvent.changedTouches[0] : e).pageX) - parseInt(this.ox);
        if (this.dx <= 0 && !this.tgt.is(_$_662b[1123])) {
          this._animateTo(e, 0);
        } else {
          this._animateTo(e, this.options.menuWidth);
        }
        if (0 === this.dx && 0 === e && this.tgt.is(_$_662b[1106])) {
          this._animateTo(this.options.menuWidth, this.options.menuWidth);
        }
        /** @type {null} */
        this.ox = null;
        /** @type {number} */
        this.dx = 0;
        /** @type {boolean} */
        this.initiated = false;
      }
    },
    _animateTo : function(x, to) {
      container.css({
        "transition-duration" : Math.floor(100 * x / this.snapThreshold) + _$_662b[1124],
        transform : _$_662b[1125] + to + _$_662b[1126] + zoomDif
      });
      this._toggleCover(to);
    },
    _moveContainer : function(x) {
      container.css({
        transform : _$_662b[1125] + x + _$_662b[1126] + zoomDif
      });
    },
    _toggleCover : function(to) {
      if (to > this.options.menuWidth - 50) {
        $viewport.addClass(_$_662b[1127]);
        $(_$_662b[1129]).addClass(_$_662b[1128]);
      } else {
        $viewport.removeClass(_$_662b[1127]);
        $(_$_662b[1129]).removeClass(_$_662b[1128]);
      }
    }
  }, Bamboo;
};
/** @type {null} */
var scrollTimer = null;
$(window).scroll(function() {
  var r = $(this).height();
  /** @type {number} */
  var x = r / $(document).height() * r;
  /** @type {number} */
  var c = $(this).scrollTop() / ($(document).height() - r);
  /** @type {number} */
  r = c * (r - x) + x / 2 - $("#scroll").height() / 2;
  $("#scroll").css("top", r).text(" " + Math.round(100 * c) + "%").fadeIn(100);
  if (null !== scrollTimer) {
    clearTimeout(scrollTimer);
  }
  /** @type {number} */
  scrollTimer = setTimeout(function() {
    $("#scroll").fadeOut();
  }, 1500);
});
/**
 * @return {undefined}
 */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage : "en",
    includedLanguages : "ar,bg,ca,cs,da,de,el,es,fa,fi,fr,hi,hu,id,it,ja,ko,ne,nl,no,pa,pl,pt,ru,sv,th,tl,tr,zh-CN",
    layout : google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay : false,
    gaTrack : true,
    gaId : "UA-92570002-1"
  }, "google_translate_element");
}
jQuery(document).ready(function() {
  $.getScript("https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
});
(function() {
  /**
   * @param {?} options
   * @return {?}
   */
  function p$jscomp$13(options) {
    return void 0 !== options;
  }
  /**
   * @return {undefined}
   */
  function aa$jscomp$0() {
  }
  /**
   * @param {!Function} fn
   * @return {undefined}
   */
  function ba$jscomp$0(fn) {
    /**
     * @return {?}
     */
    fn.yb = function() {
      return fn.zf ? fn.zf : fn.zf = new fn;
    };
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function ca$jscomp$0(value) {
    /** @type {string} */
    var s = typeof value;
    if ("object" == s) {
      if (value) {
        if (value instanceof Array) {
          return "array";
        }
        if (value instanceof Object) {
          return s;
        }
        /** @type {string} */
        var oldCondition = Object.prototype.toString.call(value);
        if ("[object Window]" == oldCondition) {
          return "object";
        }
        if ("[object Array]" == oldCondition || "number" == typeof value.length && "undefined" != typeof value.splice && "undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")) {
          return "array";
        }
        if ("[object Function]" == oldCondition || "undefined" != typeof value.call && "undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call")) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == s && "undefined" == typeof value.call) {
        return "object";
      }
    }
    return s;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function da$jscomp$0(value) {
    return "array" == ca$jscomp$0(value);
  }
  /**
   * @param {string} d
   * @return {?}
   */
  function ea$jscomp$0(d) {
    var type = ca$jscomp$0(d);
    return "array" == type || "object" == type && "number" == typeof d.length;
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function q$jscomp$3(str) {
    return "string" == typeof str;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function fa$jscomp$0(a) {
    return "number" == typeof a;
  }
  /**
   * @param {string} fn
   * @return {?}
   */
  function r$jscomp$201(fn) {
    return "function" == ca$jscomp$0(fn);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function ga$jscomp$0(value) {
    /** @type {string} */
    var type = typeof value;
    return "object" == type && null != value || "function" == type;
  }
  /**
   * @param {!Function} state
   * @param {?} a
   * @param {?} callback
   * @return {?}
   */
  function ha$jscomp$0(state, a, callback) {
    return state.call.apply(state.bind, arguments);
  }
  /**
   * @param {!Function} node
   * @param {?} n
   * @param {?} rn
   * @return {?}
   */
  function ia$jscomp$0(node, n, rn) {
    if (!node) {
      throw Error();
    }
    if (2 < arguments.length) {
      /** @type {!Array<?>} */
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        /** @type {!Array<?>} */
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return node.apply(n, c);
      };
    }
    return function() {
      return node.apply(n, arguments);
    };
  }
  /**
   * @param {!Function} callback
   * @param {?} args
   * @param {?} index
   * @return {?}
   */
  function u$jscomp$22(callback, args, index) {
    /** @type {function(!Function, ?, ?): ?} */
    u$jscomp$22 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha$jscomp$0 : ia$jscomp$0;
    return u$jscomp$22.apply(null, arguments);
  }
  /**
   * @param {!Object} data
   * @param {!Function} name
   * @return {undefined}
   */
  function ka$jscomp$0(data, name) {
    /**
     * @return {undefined}
     */
    function Promise() {
    }
    Promise.prototype = name.prototype;
    data.ph = name.prototype;
    data.prototype = new Promise;
    /** @type {!Object} */
    data.prototype.constructor = data;
    /**
     * @param {!Object} a
     * @param {?} id
     * @param {?} px
     * @return {?}
     */
    data.lh = function(a, id, px) {
      /** @type {!Array} */
      var args = Array(arguments.length - 2);
      /** @type {number} */
      var i = 2;
      for (; i < arguments.length; i++) {
        args[i - 2] = arguments[i];
      }
      return name.prototype[id].apply(a, args);
    };
  }
  /**
   * @param {?} expr
   * @return {undefined}
   */
  function la$jscomp$0(expr) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, la$jscomp$0);
    } else {
      /** @type {string} */
      var stack = Error().stack;
      if (stack) {
        /** @type {string} */
        this.stack = stack;
      }
    }
    if (expr) {
      /** @type {string} */
      this.message = String(expr);
    }
  }
  /**
   * @param {!Object} name
   * @param {!Function} path
   * @return {undefined}
   */
  function v$jscomp$5(name, path) {
    var key;
    for (key in name) {
      path.call(void 0, name[key], key, name);
    }
  }
  /**
   * @param {!Object} v
   * @param {!Function} t
   * @return {?}
   */
  function ma$jscomp$0(v, t) {
    var ndx = {};
    var k;
    for (k in v) {
      ndx[k] = t.call(void 0, v[k], k, v);
    }
    return ndx;
  }
  /**
   * @param {!Object} o
   * @param {!Function} n
   * @return {?}
   */
  function na$jscomp$0(o, n) {
    var p;
    for (p in o) {
      if (!n.call(void 0, o[p], p, o)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {?} a
   * @return {?}
   */
  function oa$jscomp$0(a) {
    /** @type {number} */
    var .num_const = 0;
    var j;
    for (j in a) {
      .num_const++;
    }
    return .num_const;
  }
  /**
   * @param {?} fn
   * @return {?}
   */
  function pa$jscomp$0(fn) {
    var __enc;
    for (__enc in fn) {
      return __enc;
    }
  }
  /**
   * @param {!Array} b
   * @return {?}
   */
  function qa$jscomp$0(b) {
    /** @type {!Array} */
    var c = [];
    /** @type {number} */
    var xp = 0;
    var prop;
    for (prop in b) {
      c[xp++] = b[prop];
    }
    return c;
  }
  /**
   * @param {!Array} d
   * @return {?}
   */
  function ra$jscomp$0(d) {
    /** @type {!Array} */
    var b = [];
    /** @type {number} */
    var bi = 0;
    var n;
    for (n in d) {
      /** @type {string} */
      b[bi++] = n;
    }
    return b;
  }
  /**
   * @param {!Object} selector
   * @param {?} style
   * @return {?}
   */
  function sa$jscomp$0(selector, style) {
    var i;
    for (i in selector) {
      if (selector[i] == style) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {!Object} data
   * @param {!Function} t
   * @param {!Object} f
   * @return {?}
   */
  function ta$jscomp$0(data, t, f) {
    var i;
    for (i in data) {
      if (t.call(f, data[i], i, data)) {
        return i;
      }
    }
  }
  /**
   * @param {!Object} number
   * @param {!Function} a
   * @return {?}
   */
  function ua$jscomp$0(number, a) {
    var i = ta$jscomp$0(number, a, void 0);
    return i && number[i];
  }
  /**
   * @param {?} a
   * @return {?}
   */
  function va$jscomp$0(a) {
    var j;
    for (j in a) {
      return false;
    }
    return true;
  }
  /**
   * @param {!Array} a
   * @return {?}
   */
  function wa$jscomp$0(a) {
    var obj = {};
    var prop;
    for (prop in a) {
      obj[prop] = a[prop];
    }
    return obj;
  }
  /**
   * @param {string} c
   * @param {?} initlength
   * @return {undefined}
   */
  function ya$jscomp$0(c, initlength) {
    var k;
    var o;
    /** @type {number} */
    var arg = 1;
    for (; arg < arguments.length; arg++) {
      o = arguments[arg];
      for (k in o) {
        c[k] = o[k];
      }
      /** @type {number} */
      var i = 0;
      for (; i < xa$jscomp$0.length; i++) {
        /** @type {string} */
        k = xa$jscomp$0[i];
        if (Object.prototype.hasOwnProperty.call(o, k)) {
          c[k] = o[k];
        }
      }
    }
  }
  /**
   * @param {string} a$jscomp$136
   * @return {?}
   */
  function za$jscomp$0(a$jscomp$136) {
    /** @type {string} */
    a$jscomp$136 = String(a$jscomp$136);
    if (/^\s*$/.test(a$jscomp$136) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a$jscomp$136.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
      try {
        return eval("(" + a$jscomp$136 + ")");
      } catch (b) {
      }
    }
    throw Error("Invalid JSON string: " + a$jscomp$136);
  }
  /**
   * @return {undefined}
   */
  function Aa$jscomp$0() {
    this.Vd = void 0;
  }
  /**
   * @param {?} options
   * @param {string} value
   * @param {!Array} result
   * @return {undefined}
   */
  function Ba$jscomp$0(options, value, result) {
    switch(typeof value) {
      case "string":
        Ca$jscomp$0(value, result);
        break;
      case "number":
        result.push(isFinite(value) && !isNaN(value) ? value : "null");
        break;
      case "boolean":
        result.push(value);
        break;
      case "undefined":
        result.push("null");
        break;
      case "object":
        if (null == value) {
          result.push("null");
          break;
        }
        if (da$jscomp$0(value)) {
          var d = value.length;
          result.push("[");
          /** @type {string} */
          var e = "";
          /** @type {number} */
          var i = 0;
          for (; i < d; i++) {
            result.push(e);
            e = value[i];
            Ba$jscomp$0(options, options.Vd ? options.Vd.call(value, String(i), e) : e, result);
            /** @type {string} */
            e = ",";
          }
          result.push("]");
          break;
        }
        result.push("{");
        /** @type {string} */
        d = "";
        for (i in value) {
          if (Object.prototype.hasOwnProperty.call(value, i)) {
            e = value[i];
            if ("function" != typeof e) {
              result.push(d);
              Ca$jscomp$0(i, result);
              result.push(":");
              Ba$jscomp$0(options, options.Vd ? options.Vd.call(value, i, e) : e, result);
              /** @type {string} */
              d = ",";
            }
          }
        }
        result.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof value);
    }
  }
  /**
   * @param {!Object} name
   * @param {!Array} arg1
   * @return {undefined}
   */
  function Ca$jscomp$0(name, arg1) {
    arg1.push('"', name.replace(Ea$jscomp$0, function(p) {
      if (p in Da$jscomp$0) {
        return Da$jscomp$0[p];
      }
      var default_favicon = p.charCodeAt(0);
      /** @type {string} */
      var webRoot = "\\u";
      if (16 > default_favicon) {
        /** @type {string} */
        webRoot = webRoot + "000";
      } else {
        if (256 > default_favicon) {
          /** @type {string} */
          webRoot = webRoot + "00";
        } else {
          if (4096 > default_favicon) {
            /** @type {string} */
            webRoot = webRoot + "0";
          }
        }
      }
      return Da$jscomp$0[p] = webRoot + default_favicon.toString(16);
    }), '"');
  }
  /**
   * @return {?}
   */
  function Fa$jscomp$0() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ja$jscomp$0()).toString(36);
  }
  /**
   * @return {undefined}
   */
  function Ia$jscomp$0() {
    /** @type {number} */
    this.Ya = -1;
  }
  /**
   * @return {undefined}
   */
  function Ja$jscomp$0() {
    /** @type {number} */
    this.Ya = -1;
    /** @type {number} */
    this.Ya = 64;
    /** @type {!Array} */
    this.P = [];
    /** @type {!Array} */
    this.pe = [];
    /** @type {!Array} */
    this.eg = [];
    /** @type {!Array} */
    this.Od = [];
    /** @type {number} */
    this.Od[0] = 128;
    /** @type {number} */
    var indexLookupKey = 1;
    for (; indexLookupKey < this.Ya; ++indexLookupKey) {
      /** @type {number} */
      this.Od[indexLookupKey] = 0;
    }
    /** @type {number} */
    this.ge = this.ec = 0;
    this.reset();
  }
  /**
   * @param {!Object} obj
   * @param {number} v
   * @param {number} b
   * @return {undefined}
   */
  function Ka$jscomp$0(obj, v, b) {
    if (!b) {
      /** @type {number} */
      b = 0;
    }
    var versions = obj.eg;
    if (q$jscomp$3(v)) {
      /** @type {number} */
      var i = 0;
      for (; 16 > i; i++) {
        /** @type {number} */
        versions[i] = v.charCodeAt(b) << 24 | v.charCodeAt(b + 1) << 16 | v.charCodeAt(b + 2) << 8 | v.charCodeAt(b + 3);
        b = b + 4;
      }
    } else {
      /** @type {number} */
      i = 0;
      for (; 16 > i; i++) {
        /** @type {number} */
        versions[i] = v[b] << 24 | v[b + 1] << 16 | v[b + 2] << 8 | v[b + 3];
        b = b + 4;
      }
    }
    /** @type {number} */
    i = 16;
    for (; 80 > i; i++) {
      /** @type {number} */
      var f = versions[i - 3] ^ versions[i - 8] ^ versions[i - 14] ^ versions[i - 16];
      /** @type {number} */
      versions[i] = (f << 1 | f >>> 31) & 4294967295;
    }
    v = obj.P[0];
    b = obj.P[1];
    var c = obj.P[2];
    var d = obj.P[3];
    var e = obj.P[4];
    var unpm_unpm;
    /** @type {number} */
    i = 0;
    for (; 80 > i; i++) {
      if (40 > i) {
        if (20 > i) {
          /** @type {number} */
          f = d ^ b & (c ^ d);
          /** @type {number} */
          unpm_unpm = 1518500249;
        } else {
          /** @type {number} */
          f = b ^ c ^ d;
          /** @type {number} */
          unpm_unpm = 1859775393;
        }
      } else {
        if (60 > i) {
          /** @type {number} */
          f = b & c | d & (b | c);
          /** @type {number} */
          unpm_unpm = 2400959708;
        } else {
          /** @type {number} */
          f = b ^ c ^ d;
          /** @type {number} */
          unpm_unpm = 3395469782;
        }
      }
      /** @type {number} */
      f = (v << 5 | v >>> 27) + f + e + unpm_unpm + versions[i] & 4294967295;
      e = d;
      d = c;
      /** @type {number} */
      c = (b << 30 | b >>> 2) & 4294967295;
      /** @type {number} */
      b = v;
      /** @type {number} */
      v = f;
    }
    /** @type {number} */
    obj.P[0] = obj.P[0] + v & 4294967295;
    /** @type {number} */
    obj.P[1] = obj.P[1] + b & 4294967295;
    /** @type {number} */
    obj.P[2] = obj.P[2] + c & 4294967295;
    /** @type {number} */
    obj.P[3] = obj.P[3] + d & 4294967295;
    /** @type {number} */
    obj.P[4] = obj.P[4] + e & 4294967295;
  }
  /**
   * @param {string} o
   * @param {!Function} f
   * @return {?}
   */
  function Ra$jscomp$0(o, f) {
    var idx = Sa$jscomp$0(o, f, void 0);
    return 0 > idx ? null : q$jscomp$3(o) ? o.charAt(idx) : o[idx];
  }
  /**
   * @param {string} object
   * @param {!Function} callback
   * @param {!Object} scope
   * @return {?}
   */
  function Sa$jscomp$0(object, callback, scope) {
    var length = object.length;
    var arraylike = q$jscomp$3(object) ? object.split("") : object;
    /** @type {number} */
    var index = 0;
    for (; index < length; index++) {
      if (index in arraylike && callback.call(scope, arraylike[index], index, object)) {
        return index;
      }
    }
    return -1;
  }
  /**
   * @param {?} a
   * @param {string} lower
   * @return {undefined}
   */
  function Ta$jscomp$0(a, lower) {
    var c = La$jscomp$0(a, lower);
    if (0 <= c) {
      x$jscomp$78.splice.call(a, c, 1);
    }
  }
  /**
   * @param {!Array} a
   * @param {?} fn
   * @param {number} mas
   * @return {?}
   */
  function Ua$jscomp$0(a, fn, mas) {
    return 2 >= arguments.length ? x$jscomp$78.slice.call(a, fn) : x$jscomp$78.slice.call(a, fn, mas);
  }
  /**
   * @param {!Array} input
   * @param {!Function} fn
   * @return {undefined}
   */
  function Va$jscomp$0(input, fn) {
    input.sort(fn || Wa$jscomp$0);
  }
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  function Wa$jscomp$0(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  /**
   * @param {?} a
   * @return {undefined}
   */
  function Xa$jscomp$0(a) {
    n$jscomp$273.setTimeout(function() {
      throw a;
    }, 0);
  }
  /**
   * @return {?}
   */
  function Za$jscomp$0() {
    var Channel = n$jscomp$273.MessageChannel;
    if ("undefined" === typeof Channel && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == w$jscomp$10.indexOf("Presto")) {
      /**
       * @return {undefined}
       */
      Channel = function() {
        /** @type {!Element} */
        var doc = document.createElement("iframe");
        /** @type {string} */
        doc.style.display = "none";
        /** @type {string} */
        doc.src = "";
        document.documentElement.appendChild(doc);
        var window = doc.contentWindow;
        doc = window.document;
        doc.open();
        doc.write("");
        doc.close();
        /** @type {string} */
        var asyncMsg = "callImmediate" + Math.random();
        /** @type {string} */
        var origin = "file:" == window.location.protocol ? "*" : window.location.protocol + "//" + window.location.host;
        doc = u$jscomp$22(function(event) {
          if (("*" == origin || event.origin == origin) && event.data == asyncMsg) {
            this.port1.onmessage();
          }
        }, this);
        window.addEventListener("message", doc, false);
        this.port1 = {};
        this.port2 = {
          postMessage : function() {
            window.postMessage(asyncMsg, origin);
          }
        };
      };
    }
    if ("undefined" !== typeof Channel && -1 == w$jscomp$10.indexOf("Trident") && -1 == w$jscomp$10.indexOf("MSIE")) {
      var channel = new Channel;
      var b = {};
      var t = b;
      /**
       * @return {undefined}
       */
      channel.port1.onmessage = function() {
        if (p$jscomp$13(b.next)) {
          b = b.next;
          var callback_send_audio_to_audio_player = b.hb;
          /** @type {null} */
          b.hb = null;
          callback_send_audio_to_audio_player();
        }
      };
      return function(hb) {
        t.next = {
          hb : hb
        };
        t = t.next;
        channel.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(notify_success) {
      /** @type {!Element} */
      var scriptElem = document.createElement("script");
      /**
       * @return {undefined}
       */
      scriptElem.onreadystatechange = function() {
        /** @type {null} */
        scriptElem.onreadystatechange = null;
        scriptElem.parentNode.removeChild(scriptElem);
        /** @type {null} */
        scriptElem = null;
        notify_success();
        /** @type {null} */
        notify_success = null;
      };
      document.documentElement.appendChild(scriptElem);
    } : function(a) {
      n$jscomp$273.setTimeout(a, 0);
    };
  }
  /**
   * @param {!Function} a
   * @param {!Object} v
   * @return {undefined}
   */
  function $a$jscomp$0(a, v) {
    if (!ab$jscomp$0) {
      bb$jscomp$0();
    }
    if (!cb$jscomp$0) {
      ab$jscomp$0();
      /** @type {boolean} */
      cb$jscomp$0 = true;
    }
    db$jscomp$1.push(new eb$jscomp$0(a, v));
  }
  /**
   * @return {undefined}
   */
  function bb$jscomp$0() {
    if (n$jscomp$273.Promise && n$jscomp$273.Promise.resolve) {
      var auth = n$jscomp$273.Promise.resolve();
      /**
       * @return {undefined}
       */
      ab$jscomp$0 = function() {
        auth.then(fb$jscomp$0);
      };
    } else {
      /**
       * @return {undefined}
       */
      ab$jscomp$0 = function() {
        /** @type {function(): undefined} */
        var fn = fb$jscomp$0;
        if (!r$jscomp$201(n$jscomp$273.setImmediate) || n$jscomp$273.Window && n$jscomp$273.Window.prototype && n$jscomp$273.Window.prototype.setImmediate == n$jscomp$273.setImmediate) {
          if (!Ya$jscomp$0) {
            Ya$jscomp$0 = Za$jscomp$0();
          }
          Ya$jscomp$0(fn);
        } else {
          n$jscomp$273.setImmediate(fn);
        }
      };
    }
  }
  /**
   * @return {undefined}
   */
  function fb$jscomp$0() {
    for (; db$jscomp$1.length;) {
      /** @type {!Array} */
      var cellBreakPositions = db$jscomp$1;
      /** @type {!Array} */
      db$jscomp$1 = [];
      /** @type {number} */
      var i = 0;
      for (; i < cellBreakPositions.length; i++) {
        var p = cellBreakPositions[i];
        try {
          p.yg.call(p.scope);
        } catch (valueProgess) {
          Xa$jscomp$0(valueProgess);
        }
      }
    }
    /** @type {boolean} */
    cb$jscomp$0 = false;
  }
  /**
   * @param {!Function} errorValue
   * @param {!Object} materializeInnerObservables
   * @return {undefined}
   */
  function eb$jscomp$0(errorValue, materializeInnerObservables) {
    /** @type {!Function} */
    this.yg = errorValue;
    /** @type {!Object} */
    this.scope = materializeInnerObservables;
  }
  /**
   * @param {string} obj
   * @param {boolean} clear
   * @return {?}
   */
  function nb$jscomp$0(obj, clear) {
    if (!ea$jscomp$0(obj)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    ob$jscomp$0();
    var points = clear ? lb$jscomp$0 : kb$jscomp$0;
    /** @type {!Array} */
    var context = [];
    /** @type {number} */
    var idx = 0;
    for (; idx < obj.length; idx = idx + 3) {
      var i = obj[idx];
      /** @type {boolean} */
      var str = idx + 1 < obj.length;
      var b = str ? obj[idx + 1] : 0;
      /** @type {boolean} */
      var type = idx + 2 < obj.length;
      var key = type ? obj[idx + 2] : 0;
      /** @type {number} */
      var j = i >> 2;
      /** @type {number} */
      i = (i & 3) << 4 | b >> 4;
      /** @type {number} */
      b = (b & 15) << 2 | key >> 6;
      /** @type {number} */
      key = key & 63;
      if (!type) {
        /** @type {number} */
        key = 64;
        if (!str) {
          /** @type {number} */
          b = 64;
        }
      }
      context.push(points[j], points[i], points[b], points[key]);
    }
    return context.join("");
  }
  /**
   * @return {undefined}
   */
  function ob$jscomp$0() {
    if (!kb$jscomp$0) {
      kb$jscomp$0 = {};
      lb$jscomp$0 = {};
      mb$jscomp$0 = {};
      /** @type {number} */
      var i = 0;
      for (; 65 > i; i++) {
        /** @type {string} */
        kb$jscomp$0[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i);
        /** @type {string} */
        lb$jscomp$0[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(i);
        /** @type {number} */
        mb$jscomp$0[lb$jscomp$0[i]] = i;
        if (62 <= i) {
          /** @type {number} */
          mb$jscomp$0["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i)] = i;
        }
      }
    }
  }
  /**
   * @param {!Function} ext
   * @param {?} f
   * @return {undefined}
   */
  function pb$jscomp$0(ext, f) {
    /** @type {number} */
    this.N = qb$jscomp$0;
    this.Rf = void 0;
    /** @type {null} */
    this.Ba = this.Ha = null;
    /** @type {boolean} */
    this.yd = this.ye = false;
    if (ext == rb$jscomp$0) {
      sb$jscomp$0(this, tb$jscomp$0, f);
    } else {
      try {
        var i = this;
        ext.call(f, function(a) {
          sb$jscomp$0(i, tb$jscomp$0, a);
        }, function(anObject) {
          if (!(anObject instanceof ub$jscomp$0)) {
            try {
              if (anObject instanceof Error) {
                throw anObject;
              }
              throw Error("Promise rejected.");
            } catch (b) {
            }
          }
          sb$jscomp$0(i, vb$jscomp$0, anObject);
        });
      } catch (eventsConfigRegistry) {
        sb$jscomp$0(this, vb$jscomp$0, eventsConfigRegistry);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function rb$jscomp$0() {
  }
  /**
   * @param {!Object} key
   * @param {?} iterator
   * @return {undefined}
   */
  function xb$jscomp$0(key, iterator) {
    if (key.N == qb$jscomp$0) {
      if (key.Ha) {
        var c = key.Ha;
        if (c.Ba) {
          /** @type {number} */
          var end = 0;
          /** @type {number} */
          var start = -1;
          /** @type {number} */
          var i = 0;
          var o;
          for (; o = c.Ba[i]; i++) {
            if (o = o.o) {
              if (end++, o == key && (start = i), 0 <= start && 1 < end) {
                break;
              }
            }
          }
          if (0 <= start) {
            if (c.N == qb$jscomp$0 && 1 == end) {
              xb$jscomp$0(c, iterator);
            } else {
              end = c.Ba.splice(start, 1)[0];
              yb$jscomp$0(c, end, vb$jscomp$0, iterator);
            }
          }
        }
        /** @type {null} */
        key.Ha = null;
      } else {
        sb$jscomp$0(key, vb$jscomp$0, iterator);
      }
    }
  }
  /**
   * @param {!Object} fn
   * @param {string} properties
   * @return {undefined}
   */
  function zb$jscomp$0(fn, properties) {
    if (!(fn.Ba && fn.Ba.length || fn.N != tb$jscomp$0 && fn.N != vb$jscomp$0)) {
      Ab$jscomp$0(fn);
    }
    if (!fn.Ba) {
      /** @type {!Array} */
      fn.Ba = [];
    }
    fn.Ba.push(properties);
  }
  /**
   * @param {!Object} type
   * @param {!Function} s
   * @param {!Function} c
   * @param {!Object} data
   * @return {?}
   */
  function wb$jscomp$0(type, s, c, data) {
    var opts = {
      o : null,
      Hf : null,
      Jf : null
    };
    opts.o = new pb$jscomp$0(function(p, m) {
      opts.Hf = s ? function(type) {
        try {
          var block = s.call(data, type);
          p(block);
        } catch (template) {
          m(template);
        }
      } : p;
      opts.Jf = c ? function(b) {
        try {
          var result = c.call(data, b);
          if (!p$jscomp$13(result) && b instanceof ub$jscomp$0) {
            m(b);
          } else {
            p(result);
          }
        } catch (template) {
          m(template);
        }
      } : m;
    });
    /** @type {!Object} */
    opts.o.Ha = type;
    zb$jscomp$0(type, opts);
    return opts.o;
  }
  /**
   * @param {!Object} data
   * @param {!Object} t
   * @param {?} object
   * @return {undefined}
   */
  function sb$jscomp$0(data, t, object) {
    if (data.N == qb$jscomp$0) {
      if (data == object) {
        /** @type {number} */
        t = vb$jscomp$0;
        /** @type {!TypeError} */
        object = new TypeError("Promise cannot resolve to itself");
      } else {
        var d;
        if (object) {
          try {
            /** @type {boolean} */
            d = !!object.$goog_Thenable;
          } catch (e) {
            /** @type {boolean} */
            d = false;
          }
        } else {
          /** @type {boolean} */
          d = false;
        }
        if (d) {
          /** @type {number} */
          data.N = 1;
          object.then(data.Yf, data.Zf, data);
          return;
        }
        if (ga$jscomp$0(object)) {
          try {
            var c = object.then;
            if (r$jscomp$201(c)) {
              Bb$jscomp$0(data, object, c);
              return;
            }
          } catch (newobject) {
            /** @type {number} */
            t = vb$jscomp$0;
            object = newobject;
          }
        }
      }
      data.Rf = object;
      /** @type {!Object} */
      data.N = t;
      /** @type {null} */
      data.Ha = null;
      Ab$jscomp$0(data);
      if (!(t != vb$jscomp$0 || object instanceof ub$jscomp$0)) {
        Cb$jscomp$0(data, object);
      }
    }
  }
  /**
   * @param {!Object} names
   * @param {?} callback
   * @param {!Function} result
   * @return {undefined}
   */
  function Bb$jscomp$0(names, callback, result) {
    /**
     * @param {?} n
     * @return {undefined}
     */
    function y(n) {
      if (!f) {
        /** @type {boolean} */
        f = true;
        names.Zf(n);
      }
    }
    /**
     * @param {?} t
     * @return {undefined}
     */
    function e(t) {
      if (!f) {
        /** @type {boolean} */
        f = true;
        names.Yf(t);
      }
    }
    /** @type {number} */
    names.N = 1;
    /** @type {boolean} */
    var f = false;
    try {
      result.call(callback, e, y);
    } catch (threshold) {
      y(threshold);
    }
  }
  /**
   * @param {!Object} rule
   * @return {undefined}
   */
  function Ab$jscomp$0(rule) {
    if (!rule.ye) {
      /** @type {boolean} */
      rule.ye = true;
      $a$jscomp$0(rule.wg, rule);
    }
  }
  /**
   * @param {!Object} from
   * @param {!Object} to
   * @param {number} value
   * @param {?} start
   * @return {undefined}
   */
  function yb$jscomp$0(from, to, value, start) {
    if (value == tb$jscomp$0) {
      to.Hf(start);
    } else {
      if (to.o) {
        for (; from && from.yd; from = from.Ha) {
          /** @type {boolean} */
          from.yd = false;
        }
      }
      to.Jf(start);
    }
  }
  /**
   * @param {!Object} from
   * @param {?} callback
   * @return {undefined}
   */
  function Cb$jscomp$0(from, callback) {
    /** @type {boolean} */
    from.yd = true;
    $a$jscomp$0(function() {
      if (from.yd) {
        Db$jscomp$0.call(null, callback);
      }
    });
  }
  /**
   * @param {?} i
   * @return {undefined}
   */
  function ub$jscomp$0(i) {
    la$jscomp$0.call(this, i);
  }
  /**
   * @param {!Object} o
   * @param {string} value
   * @return {?}
   */
  function y$jscomp$63(o, value) {
    return Object.prototype.hasOwnProperty.call(o, value);
  }
  /**
   * @param {!Object} value
   * @param {string} str
   * @return {?}
   */
  function z$jscomp$13(value, str) {
    if (Object.prototype.hasOwnProperty.call(value, str)) {
      return value[str];
    }
  }
  /**
   * @param {!Object} a
   * @param {!Function} b
   * @return {undefined}
   */
  function Fb$jscomp$0(a, b) {
    var d;
    for (d in a) {
      if (Object.prototype.hasOwnProperty.call(a, d)) {
        b(d, a[d]);
      }
    }
  }
  /**
   * @param {!Object} cX1
   * @return {?}
   */
  function Gb$jscomp$0(cX1) {
    var nArr = {};
    Fb$jscomp$0(cX1, function(tag, n) {
      nArr[tag] = n;
    });
    return nArr;
  }
  /**
   * @param {!Object} b
   * @return {?}
   */
  function Hb$jscomp$0(b) {
    return "object" === typeof b && null !== b;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function Ib$jscomp$0(obj) {
    /** @type {!Array} */
    var codesDeps = [];
    Fb$jscomp$0(obj, function(qov, options) {
      if (da$jscomp$0(options)) {
        Ma$jscomp$0(options, function(fileFullpath) {
          codesDeps.push(encodeURIComponent(qov) + "=" + encodeURIComponent(fileFullpath));
        });
      } else {
        codesDeps.push(encodeURIComponent(qov) + "=" + encodeURIComponent(options));
      }
    });
    return codesDeps.length ? "&" + codesDeps.join("&") : "";
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function Jb$jscomp$0(a) {
    var img_envs = {};
    a = a.replace(/^\?/, "").split("&");
    Ma$jscomp$0(a, function(env_data) {
      if (env_data) {
        env_data = env_data.split("=");
        img_envs[env_data[0]] = env_data[1];
      }
    });
    return img_envs;
  }
  /**
   * @param {boolean} a
   * @param {string} b
   * @return {undefined}
   */
  function Kb$jscomp$0(a, b) {
    if (!a) {
      throw Lb$jscomp$0(b);
    }
  }
  /**
   * @param {string} tag
   * @return {?}
   */
  function Lb$jscomp$0(tag) {
    return Error("Firebase (" + Eb$jscomp$0 + ") INTERNAL ASSERT FAILED: " + tag);
  }
  /**
   * @return {undefined}
   */
  function B$jscomp$2() {
    var callbackTwo = this;
    /** @type {null} */
    this.reject = this.resolve = null;
    this.D = new Mb$jscomp$0(function(resolve, reject) {
      /** @type {!Function} */
      callbackTwo.resolve = resolve;
      /** @type {!Function} */
      callbackTwo.reject = reject;
    });
  }
  /**
   * @param {!Object} n
   * @param {!Object} b
   * @return {?}
   */
  function C$jscomp$3(n, b) {
    return function(c, a) {
      if (c) {
        n.reject(c);
      } else {
        n.resolve(a);
      }
      if (r$jscomp$201(b)) {
        Nb$jscomp$0(n.D);
        if (1 === b.length) {
          b(c);
        } else {
          b(c, a);
        }
      }
    };
  }
  /**
   * @param {?} t
   * @return {undefined}
   */
  function Nb$jscomp$0(t) {
    t.then(void 0, aa$jscomp$0);
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function Ob$jscomp$0(a) {
    /** @type {!Array} */
    var b = [];
    /** @type {number} */
    var bi = 0;
    /** @type {number} */
    var i = 0;
    for (; i < a.length; i++) {
      var e = a.charCodeAt(i);
      if (55296 <= e && 56319 >= e) {
        /** @type {number} */
        e = e - 55296;
        i++;
        Kb$jscomp$0(i < a.length, "Surrogate pair missing trail surrogate.");
        /** @type {number} */
        e = 65536 + (e << 10) + (a.charCodeAt(i) - 56320);
      }
      if (128 > e) {
        b[bi++] = e;
      } else {
        if (2048 > e) {
          /** @type {number} */
          b[bi++] = e >> 6 | 192;
        } else {
          if (65536 > e) {
            /** @type {number} */
            b[bi++] = e >> 12 | 224;
          } else {
            /** @type {number} */
            b[bi++] = e >> 18 | 240;
            /** @type {number} */
            b[bi++] = e >> 12 & 63 | 128;
          }
          /** @type {number} */
          b[bi++] = e >> 6 & 63 | 128;
        }
        /** @type {number} */
        b[bi++] = e & 63 | 128;
      }
    }
    return b;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function Pb$jscomp$0(a) {
    /** @type {number} */
    var val = 0;
    /** @type {number} */
    var i = 0;
    for (; i < a.length; i++) {
      var d = a.charCodeAt(i);
      if (128 > d) {
        val++;
      } else {
        if (2048 > d) {
          /** @type {number} */
          val = val + 2;
        } else {
          if (55296 <= d && 56319 >= d) {
            /** @type {number} */
            val = val + 4;
            i++;
          } else {
            /** @type {number} */
            val = val + 3;
          }
        }
      }
    }
    return val;
  }
  /**
   * @param {string} z
   * @param {number} a
   * @param {number} c
   * @param {number} d
   * @return {undefined}
   */
  function D$jscomp$3(z, a, c, d) {
    var ret;
    if (d < a) {
      /** @type {string} */
      ret = "at least " + a;
    } else {
      if (d > c) {
        /** @type {string} */
        ret = 0 === c ? "none" : "no more than " + c;
      }
    }
    if (ret) {
      throw Error(z + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + ret + ".");
    }
  }
  /**
   * @param {string} a
   * @param {number} value
   * @param {boolean} optional
   * @return {?}
   */
  function E$jscomp$3(a, value, optional) {
    /** @type {string} */
    var argName = "";
    switch(value) {
      case 1:
        /** @type {string} */
        argName = optional ? "first" : "First";
        break;
      case 2:
        /** @type {string} */
        argName = optional ? "second" : "Second";
        break;
      case 3:
        /** @type {string} */
        argName = optional ? "third" : "Third";
        break;
      case 4:
        /** @type {string} */
        argName = optional ? "fourth" : "Fourth";
        break;
      default:
        throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
    }
    return a = a + " failed: " + (argName + " argument ");
  }
  /**
   * @param {string} a
   * @param {number} n
   * @param {!Object} c
   * @param {boolean} i
   * @return {undefined}
   */
  function F$jscomp$2(a, n, c, i) {
    if ((!i || p$jscomp$13(c)) && !r$jscomp$201(c)) {
      throw Error(E$jscomp$3(a, n, i) + "must be a valid function.");
    }
  }
  /**
   * @param {string} a
   * @param {number} i
   * @param {!Object} b
   * @return {undefined}
   */
  function Qb$jscomp$0(a, i, b) {
    if (p$jscomp$13(b) && (!ga$jscomp$0(b) || null === b)) {
      throw Error(E$jscomp$3(a, i, true) + "must be a valid context object.");
    }
  }
  /**
   * @param {string} b
   * @return {?}
   */
  function Rb$jscomp$0(b) {
    return "undefined" !== typeof JSON && p$jscomp$13(JSON.parse) ? JSON.parse(b) : za$jscomp$0(b);
  }
  /**
   * @param {string} y
   * @return {?}
   */
  function G$jscomp$2(y) {
    if ("undefined" !== typeof JSON && p$jscomp$13(JSON.stringify)) {
      /** @type {string} */
      y = JSON.stringify(y);
    } else {
      /** @type {!Array} */
      var b = [];
      Ba$jscomp$0(new Aa$jscomp$0, y, b);
      /** @type {string} */
      y = b.join("");
    }
    return y;
  }
  /**
   * @return {undefined}
   */
  function Sb$jscomp$0() {
    this.Zd = H$jscomp$2;
  }
  /**
   * @return {undefined}
   */
  function Tb$jscomp$0() {
  }
  /**
   * @param {string} url
   * @param {string} srcOrHref
   * @param {string} parentElement
   * @return {undefined}
   */
  function Vb$jscomp$0(url, srcOrHref, parentElement) {
    /** @type {string} */
    this.bg = url;
    /** @type {string} */
    this.Oa = srcOrHref;
    /** @type {string} */
    this.Nd = parentElement;
  }
  /**
   * @return {undefined}
   */
  function Zb$jscomp$0() {
    /** @type {!Array} */
    this.xb = [];
  }
  /**
   * @param {?} s
   * @param {!Array} fn
   * @return {undefined}
   */
  function $b$jscomp$0(s, fn) {
    /** @type {null} */
    var params = null;
    /** @type {number} */
    var ii = 0;
    for (; ii < fn.length; ii++) {
      var obj = fn[ii];
      var args = obj.cc();
      if (!(null === params || args.ea(params.cc()))) {
        s.xb.push(params);
        /** @type {null} */
        params = null;
      }
      if (null === params) {
        params = new ac$jscomp$0(args);
      }
      params.add(obj);
    }
    if (params) {
      s.xb.push(params);
    }
  }
  /**
   * @param {?} s
   * @param {!Object} args
   * @param {?} callback
   * @return {undefined}
   */
  function bc$jscomp$0(s, args, callback) {
    $b$jscomp$0(s, callback);
    cc$jscomp$0(s, function(result) {
      return result.ea(args);
    });
  }
  /**
   * @param {?} s
   * @param {string} val
   * @param {?} obj
   * @return {undefined}
   */
  function dc$jscomp$0(s, val, obj) {
    $b$jscomp$0(s, obj);
    cc$jscomp$0(s, function(value) {
      return value.contains(val) || val.contains(value);
    });
  }
  /**
   * @param {?} p
   * @param {!Function} c
   * @return {undefined}
   */
  function cc$jscomp$0(p, c) {
    /** @type {boolean} */
    var c = true;
    /** @type {number} */
    var i = 0;
    for (; i < p.xb.length; i++) {
      var e = p.xb[i];
      if (e) {
        if (e = e.cc(), c(e)) {
          e = p.xb[i];
          /** @type {number} */
          var f = 0;
          for (; f < e.xd.length; f++) {
            var oldValue = e.xd[f];
            if (null !== oldValue) {
              /** @type {null} */
              e.xd[f] = null;
              var filterByGeometryChecked = oldValue.Zb();
              if (ec$jscomp$0) {
                fc$jscomp$0("event: " + oldValue.toString());
              }
              gc$jscomp$0(filterByGeometryChecked);
            }
          }
          /** @type {null} */
          p.xb[i] = null;
        } else {
          /** @type {boolean} */
          c = false;
        }
      }
    }
    if (c) {
      /** @type {!Array} */
      p.xb = [];
    }
  }
  /**
   * @param {?} prop
   * @return {undefined}
   */
  function ac$jscomp$0(prop) {
    this.ta = prop;
    /** @type {!Array} */
    this.xd = [];
  }
  /**
   * @param {!Object} a
   * @param {string} b
   * @param {string} p
   * @param {string} c
   * @return {undefined}
   */
  function J$jscomp$2(a, b, p, c) {
    /** @type {!Object} */
    this.type = a;
    /** @type {string} */
    this.Na = b;
    /** @type {string} */
    this.Za = p;
    /** @type {string} */
    this.Oe = c;
    this.Td = void 0;
  }
  /**
   * @param {(!Function|RegExp|string)} ctx
   * @return {?}
   */
  function hc$jscomp$0(ctx) {
    return new J$jscomp$2(ic$jscomp$0, ctx);
  }
  /**
   * @param {string} a
   * @param {?} b
   * @param {?} variableNames
   * @param {number} bindingRecords
   * @return {undefined}
   */
  function jc$jscomp$0(a, b, variableNames, bindingRecords) {
    this.xe = b;
    this.be = variableNames;
    /** @type {number} */
    this.Td = bindingRecords;
    /** @type {string} */
    this.wd = a;
  }
  /**
   * @param {?} usePrompt
   * @param {!Error} err
   * @param {string} tmpPath
   * @return {undefined}
   */
  function kc$jscomp$0(usePrompt, err, tmpPath) {
    this.xe = usePrompt;
    /** @type {!Error} */
    this.error = err;
    /** @type {string} */
    this.path = tmpPath;
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {boolean} variableNames
   * @return {undefined}
   */
  function Xb$jscomp$0(a, b, variableNames) {
    /** @type {string} */
    this.A = a;
    /** @type {string} */
    this.ga = b;
    /** @type {boolean} */
    this.Yb = variableNames;
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function lc$jscomp$0(name) {
    return name.ga;
  }
  /**
   * @param {?} desiredHeight
   * @return {?}
   */
  function mc$jscomp$0(desiredHeight) {
    return desiredHeight.Yb;
  }
  /**
   * @param {!Function} v
   * @param {!Object} a
   * @return {?}
   */
  function nc$jscomp$0(v, a) {
    return a.e() ? v.ga && !v.Yb : Wb$jscomp$0(v, K$jscomp$2(a));
  }
  /**
   * @param {!Function} v
   * @param {string} x
   * @return {?}
   */
  function Wb$jscomp$0(v, x) {
    return v.ga && !v.Yb || v.A.Fa(x);
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function oc$jscomp$0(a) {
    /** @type {!Object} */
    this.pg = a;
    /** @type {null} */
    this.Gd = null;
  }
  /**
   * @param {?} size
   * @param {!Object} elem
   * @return {undefined}
   */
  function pc$jscomp$0(size, elem) {
    this.Vf = {};
    this.hd = new oc$jscomp$0(size);
    /** @type {!Object} */
    this.da = elem;
    /** @type {number} */
    var timeout = 1E4 + 2E4 * Math.random();
    setTimeout(u$jscomp$22(this.Of, this), Math.floor(timeout));
  }
  /**
   * @return {undefined}
   */
  function qc$jscomp$0() {
    this.Hc = {};
  }
  /**
   * @param {?} task
   * @param {string} i
   * @param {number} n
   * @return {undefined}
   */
  function rc$jscomp$0(task, i, n) {
    if (!p$jscomp$13(n)) {
      /** @type {number} */
      n = 1;
    }
    if (!y$jscomp$63(task.Hc, i)) {
      /** @type {number} */
      task.Hc[i] = 0;
    }
    task.Hc[i] += n;
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function uc$jscomp$0(key) {
    key = key.toString();
    if (!sc$jscomp$0[key]) {
      sc$jscomp$0[key] = new qc$jscomp$0;
    }
    return sc$jscomp$0[key];
  }
  /**
   * @param {string} expiration
   * @param {?} cb
   * @return {?}
   */
  function vc$jscomp$0(expiration, cb) {
    var key = expiration.toString();
    if (!tc$jscomp$0[key]) {
      tc$jscomp$0[key] = cb();
    }
    return tc$jscomp$0[key];
  }
  /**
   * @param {string} a
   * @param {string} b
   * @return {undefined}
   */
  function L$jscomp$3(a, b) {
    /** @type {string} */
    this.name = a;
    /** @type {string} */
    this.U = b;
  }
  /**
   * @param {?} n
   * @param {boolean} v
   * @return {?}
   */
  function wc$jscomp$0(n, v) {
    return new L$jscomp$3(n, v);
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function xc$jscomp$0(a, b) {
    return yc$jscomp$0(a.name, b.name);
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function zc$jscomp$0(a, b) {
    return yc$jscomp$0(a, b);
  }
  /**
   * @param {!Object} result
   * @param {string} value
   * @param {number} lazyEmit
   * @return {undefined}
   */
  function Ac$jscomp$0(result, value, lazyEmit) {
    /** @type {number} */
    this.type = Bc$jscomp$0;
    /** @type {!Object} */
    this.source = result;
    /** @type {string} */
    this.path = value;
    /** @type {number} */
    this.Ja = lazyEmit;
  }
  /**
   * @param {!Object} data
   * @param {string} key
   * @return {undefined}
   */
  function Cc$jscomp$0(data, key) {
    /** @type {number} */
    this.type = Dc$jscomp$0;
    /** @type {!Object} */
    this.source = data;
    /** @type {string} */
    this.path = key;
  }
  /**
   * @param {string} muted
   * @param {number} driver
   * @return {undefined}
   */
  function Ec$jscomp$0(muted, driver) {
    /** @type {string} */
    this.Pa = muted;
    this.xa = driver ? driver : Fc$jscomp$0;
  }
  /**
   * @param {!Function} that
   * @param {!Object} files
   * @return {?}
   */
  function Gc$jscomp$0(that, files) {
    var timeMod;
    var state = that.xa;
    /** @type {null} */
    var cursor = null;
    for (; !state.e();) {
      timeMod = that.Pa(files, state.key);
      if (0 === timeMod) {
        if (state.left.e()) {
          return cursor ? cursor.key : null;
        }
        state = state.left;
        for (; !state.right.e();) {
          state = state.right;
        }
        return state.key;
      }
      if (0 > timeMod) {
        state = state.left;
      } else {
        if (0 < timeMod) {
          cursor = state;
          state = state.right;
        }
      }
    }
    throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  /**
   * @param {!Object} b
   * @param {number} i
   * @param {?} c
   * @param {?} t
   * @param {number} n
   * @return {undefined}
   */
  function Hc$jscomp$0(b, i, c, t, n) {
    this.Xd = n || null;
    this.Je = t;
    /** @type {!Array} */
    this.Ta = [];
    /** @type {number} */
    n = 1;
    for (; !b.e();) {
      if (n = i ? c(b.key, i) : 1, t && (n = n * -1), 0 > n) {
        b = this.Je ? b.left : b.right;
      } else {
        if (0 === n) {
          this.Ta.push(b);
          break;
        } else {
          this.Ta.push(b);
          b = this.Je ? b.right : b.left;
        }
      }
    }
  }
  /**
   * @param {!Object} x
   * @return {?}
   */
  function Ic$jscomp$0(x) {
    if (0 === x.Ta.length) {
      return null;
    }
    var b = x.Ta.pop();
    var c;
    c = x.Xd ? x.Xd(b.key, b.value) : {
      key : b.key,
      value : b.value
    };
    if (x.Je) {
      b = b.left;
      for (; !b.e();) {
        x.Ta.push(b);
        b = b.right;
      }
    } else {
      b = b.right;
      for (; !b.e();) {
        x.Ta.push(b);
        b = b.left;
      }
    }
    return c;
  }
  /**
   * @param {?} x
   * @return {?}
   */
  function Jc$jscomp$0(x) {
    if (0 === x.Ta.length) {
      return null;
    }
    var c;
    c = x.Ta;
    c = c[c.length - 1];
    return x.Xd ? x.Xd(c.key, c.value) : {
      key : c.key,
      value : c.value
    };
  }
  /**
   * @param {string} value
   * @param {!Object} html
   * @param {string} color
   * @param {?} left
   * @param {?} right
   * @return {undefined}
   */
  function Kc$jscomp$0(value, html, color, left, right) {
    /** @type {string} */
    this.key = value;
    /** @type {!Object} */
    this.value = html;
    this.color = null != color ? color : true;
    this.left = null != left ? left : Fc$jscomp$0;
    this.right = null != right ? right : Fc$jscomp$0;
  }
  /**
   * @param {number} action
   * @return {?}
   */
  function Lc$jscomp$0(action) {
    return action.left.e() ? action : Lc$jscomp$0(action.left);
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function Nc$jscomp$0(data) {
    if (data.left.e()) {
      return Fc$jscomp$0;
    }
    if (!(data.left.ha() || data.left.left.ha())) {
      data = Oc$jscomp$0(data);
    }
    data = data.$(null, null, null, Nc$jscomp$0(data.left), null);
    return Mc$jscomp$0(data);
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function Mc$jscomp$0(data) {
    if (data.right.ha() && !data.left.ha()) {
      data = Rc$jscomp$0(data);
    }
    if (data.left.ha() && data.left.left.ha()) {
      data = Pc$jscomp$0(data);
    }
    if (data.left.ha() && data.right.ha()) {
      data = Qc$jscomp$0(data);
    }
    return data;
  }
  /**
   * @param {!Object} json
   * @return {?}
   */
  function Oc$jscomp$0(json) {
    json = Qc$jscomp$0(json);
    if (json.right.left.ha()) {
      json = json.$(null, null, null, null, Pc$jscomp$0(json.right));
      json = Rc$jscomp$0(json);
      json = Qc$jscomp$0(json);
    }
    return json;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function Rc$jscomp$0(options) {
    return options.right.$(null, null, options.color, options.$(null, null, true, null, options.right.left), null);
  }
  /**
   * @param {!Object} that
   * @return {?}
   */
  function Pc$jscomp$0(that) {
    return that.left.$(null, null, that.color, null, that.$(null, null, true, that.left.right, null));
  }
  /**
   * @param {!Object} root
   * @return {?}
   */
  function Qc$jscomp$0(root) {
    return root.$(null, null, !root.color, root.left.$(null, null, !root.left.color, null, null), root.right.$(null, null, !root.right.color, null, null));
  }
  /**
   * @return {undefined}
   */
  function Sc$jscomp$0() {
  }
  /**
   * @param {!Object} value
   * @param {string} object
   * @return {?}
   */
  function Tc$jscomp$0(value, object) {
    return value && "object" === typeof value ? (O$jscomp$3(".sv" in value, "Unexpected leaf node or priority contents"), object[value[".sv"]]) : value;
  }
  /**
   * @param {!Object} match
   * @param {string} type
   * @return {?}
   */
  function Uc$jscomp$0(match, type) {
    var a = new Vc$jscomp$0;
    Wc$jscomp$0(match, new P$jscomp$3(""), function(fp, end) {
      a.rc(fp, Xc$jscomp$0(end, type));
    });
    return a;
  }
  /**
   * @param {!Object} node
   * @param {string} size
   * @return {?}
   */
  function Xc$jscomp$0(node, size) {
    var value = node.C().J();
    value = Tc$jscomp$0(value, size);
    var f;
    if (node.L()) {
      var resizeUrl = Tc$jscomp$0(node.Ea(), size);
      return resizeUrl !== node.Ea() || value !== node.C().J() ? new Yc$jscomp$0(resizeUrl, Q$jscomp$2(value)) : node;
    }
    /** @type {!Object} */
    f = node;
    if (value !== node.C().J()) {
      f = f.ia(new Yc$jscomp$0(value));
    }
    node.R(R$jscomp$2, function(date, document) {
      var n = Xc$jscomp$0(document, size);
      if (n !== document) {
        f = f.W(date, n);
      }
    });
    return f;
  }
  /**
   * @return {undefined}
   */
  function Zc$jscomp$0() {
    this.Ac = {};
  }
  /**
   * @param {!Object} context
   * @return {undefined}
   */
  function $c$jscomp$0(context) {
    /** @type {!Object} */
    this.Ic = context;
    /** @type {string} */
    this.Sd = "firebase:";
  }
  /**
   * @param {string} storageType
   * @return {?}
   */
  function ad$jscomp$0(storageType) {
    try {
      if ("undefined" !== typeof window && "undefined" !== typeof window[storageType]) {
        var storage = window[storageType];
        storage.setItem("firebase:sentinel", "cache");
        storage.removeItem("firebase:sentinel");
        return new $c$jscomp$0(storage);
      }
    } catch (c) {
    }
    return new Zc$jscomp$0;
  }
  /**
   * @param {string} message
   * @param {string} spec
   * @param {string} level
   * @param {?} date
   * @param {!Object} format
   * @return {undefined}
   */
  function dd$jscomp$0(message, spec, level, date, format) {
    this.host = message.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf(".") + 1);
    /** @type {string} */
    this.ob = spec;
    /** @type {string} */
    this.lc = level;
    this.jh = date;
    this.Rd = format || "";
    this.ab = bd$jscomp$0.get("host:" + message) || this.host;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {undefined}
   */
  function ed$jscomp$0(a, b) {
    if (b !== a.ab) {
      /** @type {!Object} */
      a.ab = b;
      if ("s-" === a.ab.substr(0, 2)) {
        bd$jscomp$0.set("host:" + a.host, a.ab);
      }
    }
  }
  /**
   * @param {!Object} m
   * @param {string} name
   * @param {!Object} obj
   * @return {?}
   */
  function fd$jscomp$0(m, name, obj) {
    O$jscomp$3("string" === typeof name, "typeof type must == string");
    O$jscomp$3("object" === typeof obj, "typeof params must == object");
    if (name === gd$jscomp$0) {
      /** @type {string} */
      name = (m.ob ? "wss://" : "ws://") + m.ab + "/.ws?";
    } else {
      if (name === hd$jscomp$0) {
        /** @type {string} */
        name = (m.ob ? "https://" : "http://") + m.ab + "/.lp?";
      } else {
        throw Error("Unknown connection type: " + name);
      }
    }
    if (m.host !== m.ab) {
      obj.ns = m.lc;
    }
    /** @type {!Array} */
    var text = [];
    v$jscomp$5(obj, function(fileExtension, url) {
      text.push(url + "=" + fileExtension);
    });
    return name + text.join("&");
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function kd$jscomp$0(s) {
    try {
      var result;
      if ("undefined" !== typeof atob) {
        /** @type {string} */
        result = atob(s);
      } else {
        ob$jscomp$0();
        var a = mb$jscomp$0;
        /** @type {!Array} */
        var b = [];
        /** @type {number} */
        var i = 0;
        for (; i < s.length;) {
          var e1 = a[s.charAt(i++)];
          var e2 = i < s.length ? a[s.charAt(i)] : 0;
          ++i;
          var k = i < s.length ? a[s.charAt(i)] : 64;
          ++i;
          var exponent = i < s.length ? a[s.charAt(i)] : 64;
          ++i;
          if (null == e1 || null == e2 || null == k || null == exponent) {
            throw Error();
          }
          b.push(e1 << 2 | e2 >> 4);
          if (64 != k) {
            b.push(e2 << 4 & 240 | k >> 2);
            if (64 != exponent) {
              b.push(k << 6 & 192 | exponent);
            }
          }
        }
        if (8192 > b.length) {
          /** @type {string} */
          result = String.fromCharCode.apply(null, b);
        } else {
          /** @type {string} */
          s = "";
          /** @type {number} */
          a = 0;
          for (; a < b.length; a = a + 8192) {
            /** @type {string} */
            s = s + String.fromCharCode.apply(null, Ua$jscomp$0(b, a, a + 8192));
          }
          /** @type {string} */
          result = s;
        }
      }
      return result;
    } catch (clonedOptions) {
      fc$jscomp$0("base64Decode failed: ", clonedOptions);
    }
    return null;
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function ld$jscomp$0(data) {
    var b = Ob$jscomp$0(data);
    data = new Ja$jscomp$0;
    data.update(b);
    /** @type {!Array} */
    b = [];
    /** @type {number} */
    var j = 8 * data.ge;
    if (56 > data.ec) {
      data.update(data.Od, 56 - data.ec);
    } else {
      data.update(data.Od, data.Ya - (data.ec - 56));
    }
    /** @type {number} */
    var i = data.Ya - 1;
    for (; 56 <= i; i--) {
      /** @type {number} */
      data.pe[i] = j & 255;
      /** @type {number} */
      j = j / 256;
    }
    Ka$jscomp$0(data, data.pe);
    /** @type {number} */
    i = j = 0;
    for (; 5 > i; i++) {
      /** @type {number} */
      var cbs = 24;
      for (; 0 <= cbs; cbs = cbs - 8) {
        /** @type {number} */
        b[j] = data.P[i] >> cbs & 255;
        ++j;
      }
    }
    return nb$jscomp$0(b);
  }
  /**
   * @param {?} ast
   * @return {?}
   */
  function md$jscomp$0(ast) {
    /** @type {string} */
    var message = "";
    /** @type {number} */
    var index = 0;
    for (; index < arguments.length; index++) {
      /** @type {string} */
      message = ea$jscomp$0(arguments[index]) ? message + md$jscomp$0.apply(null, arguments[index]) : "object" === typeof arguments[index] ? message + G$jscomp$2(arguments[index]) : message + arguments[index];
      /** @type {string} */
      message = message + " ";
    }
    return message;
  }
  /**
   * @param {number} c
   * @param {?} a
   * @return {undefined}
   */
  function od$jscomp$0(c, a) {
    Kb$jscomp$0(!a || true === c || false === c, "Can't turn on custom loggers persistently.");
    if (true === c) {
      if ("undefined" !== typeof console) {
        if ("function" === typeof console.log) {
          ec$jscomp$0 = u$jscomp$22(console.log, console);
        } else {
          if ("object" === typeof console.log) {
            /**
             * @param {?} a
             * @return {undefined}
             */
            ec$jscomp$0 = function(a) {
              console.log(a);
            };
          }
        }
      }
      if (a) {
        cd$jscomp$0.set("logging_enabled", true);
      }
    } else {
      if (r$jscomp$201(c)) {
        /** @type {number} */
        ec$jscomp$0 = c;
      } else {
        /** @type {null} */
        ec$jscomp$0 = null;
        cd$jscomp$0.remove("logging_enabled");
      }
    }
  }
  /**
   * @param {string} s
   * @return {undefined}
   */
  function fc$jscomp$0(s) {
    if (true === nd$jscomp$0) {
      /** @type {boolean} */
      nd$jscomp$0 = false;
      if (null === ec$jscomp$0 && true === cd$jscomp$0.get("logging_enabled")) {
        od$jscomp$0(true);
      }
    }
    if (ec$jscomp$0) {
      var x = md$jscomp$0.apply(null, arguments);
      ec$jscomp$0(x);
    }
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function pd$jscomp$0(val) {
    return function() {
      fc$jscomp$0(val, arguments);
    };
  }
  /**
   * @param {string} baton
   * @return {undefined}
   */
  function qd$jscomp$0(baton) {
    if ("undefined" !== typeof console) {
      /** @type {string} */
      var b = "FIREBASE INTERNAL ERROR: " + md$jscomp$0.apply(null, arguments);
      if ("undefined" !== typeof console.error) {
        console.error(b);
      } else {
        console.log(b);
      }
    }
  }
  /**
   * @param {string} context
   * @return {undefined}
   */
  function rd$jscomp$0(context) {
    var cssobj = md$jscomp$0.apply(null, arguments);
    throw Error("FIREBASE FATAL ERROR: " + cssobj);
  }
  /**
   * @param {string} n
   * @return {undefined}
   */
  function S$jscomp$3(n) {
    if ("undefined" !== typeof console) {
      /** @type {string} */
      var deprecationWarning = "FIREBASE WARNING: " + md$jscomp$0.apply(null, arguments);
      if ("undefined" !== typeof console.warn) {
        console.warn(deprecationWarning);
      } else {
        console.log(deprecationWarning);
      }
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function sd$jscomp$0(data) {
    /** @type {string} */
    var address = "";
    /** @type {string} */
    var host = "";
    /** @type {string} */
    var height = "";
    /** @type {string} */
    var s = "";
    /** @type {boolean} */
    var orderBy = true;
    /** @type {string} */
    var protocol = "https";
    /** @type {number} */
    var value = 443;
    if (q$jscomp$3(data)) {
      var index = data.indexOf("//");
      if (0 <= index) {
        protocol = data.substring(0, index - 1);
        data = data.substring(index + 2);
      }
      index = data.indexOf("/");
      if (-1 === index) {
        index = data.length;
      }
      address = data.substring(0, index);
      /** @type {string} */
      s = "";
      data = data.substring(index).split("/");
      /** @type {number} */
      index = 0;
      for (; index < data.length; index++) {
        if (0 < data[index].length) {
          var label = data[index];
          try {
            /** @type {string} */
            label = decodeURIComponent(label.replace(/\+/g, " "));
          } catch (t) {
          }
          /** @type {string} */
          s = s + ("/" + label);
        }
      }
      data = address.split(".");
      if (3 === data.length) {
        host = data[1];
        height = data[0].toLowerCase();
      } else {
        if (2 === data.length) {
          host = data[0];
        }
      }
      index = address.indexOf(":");
      if (0 <= index) {
        /** @type {boolean} */
        orderBy = "https" === protocol || "wss" === protocol;
        value = address.substring(index + 1);
        if (isFinite(value)) {
          /** @type {string} */
          value = String(value);
        }
        /** @type {number} */
        value = q$jscomp$3(value) ? /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10) : NaN;
      }
    }
    return {
      host : address,
      port : value,
      domain : host,
      fh : height,
      ob : orderBy,
      scheme : protocol,
      bd : s
    };
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function td$jscomp$0(value) {
    return fa$jscomp$0(value) && (value != value || value == Number.POSITIVE_INFINITY || value == Number.NEGATIVE_INFINITY);
  }
  /**
   * @param {!Function} target
   * @return {undefined}
   */
  function ud$jscomp$0(target) {
    if ("complete" === document.readyState) {
      target();
    } else {
      /** @type {boolean} */
      var b = false;
      /**
       * @return {undefined}
       */
      var callback = function() {
        if (document.body) {
          if (!b) {
            /** @type {boolean} */
            b = true;
            target();
          }
        } else {
          setTimeout(callback, Math.floor(10));
        }
      };
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback, false);
        window.addEventListener("load", callback, false);
      } else {
        if (document.attachEvent) {
          document.attachEvent("onreadystatechange", function() {
            if ("complete" === document.readyState) {
              callback();
            }
          });
          window.attachEvent("onload", callback);
        }
      }
    }
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function yc$jscomp$0(a, b) {
    if (a === b) {
      return 0;
    }
    if ("[MIN_NAME]" === a || "[MAX_NAME]" === b) {
      return -1;
    }
    if ("[MIN_NAME]" === b || "[MAX_NAME]" === a) {
      return 1;
    }
    var v = vd$jscomp$0(a);
    var maxV = vd$jscomp$0(b);
    return null !== v ? null !== maxV ? 0 == v - maxV ? a.length - b.length : v - maxV : -1 : null !== maxV ? 1 : a < b ? -1 : 1;
  }
  /**
   * @param {string} a
   * @param {!Object} b
   * @return {?}
   */
  function wd$jscomp$0(a, b) {
    if (b && a in b) {
      return b[a];
    }
    throw Error("Missing required key (" + a + ") in object: " + G$jscomp$2(b));
  }
  /**
   * @param {boolean} b
   * @return {?}
   */
  function xd$jscomp$0(b) {
    if ("object" !== typeof b || null === b) {
      return G$jscomp$2(b);
    }
    /** @type {!Array} */
    var keys = [];
    var key;
    for (key in b) {
      keys.push(key);
    }
    keys.sort();
    /** @type {string} */
    key = "{";
    /** @type {number} */
    var i = 0;
    for (; i < keys.length; i++) {
      if (0 !== i) {
        /** @type {string} */
        key = key + ",";
      }
      /** @type {string} */
      key = key + G$jscomp$2(keys[i]);
      /** @type {string} */
      key = key + ":";
      /** @type {string} */
      key = key + xd$jscomp$0(b[keys[i]]);
    }
    return key + "}";
  }
  /**
   * @param {string} s
   * @param {number} l
   * @return {?}
   */
  function yd$jscomp$0(s, l) {
    if (s.length <= l) {
      return [s];
    }
    /** @type {!Array} */
    var intervalOptions = [];
    /** @type {number} */
    var i = 0;
    for (; i < s.length; i = i + l) {
      if (i + l > s) {
        intervalOptions.push(s.substring(i, s.length));
      } else {
        intervalOptions.push(s.substring(i, i + l));
      }
    }
    return intervalOptions;
  }
  /**
   * @param {!Array} a
   * @param {!Function} b
   * @return {undefined}
   */
  function zd$jscomp$0(a, b) {
    if (da$jscomp$0(a)) {
      /** @type {number} */
      var d = 0;
      for (; d < a.length; ++d) {
        b(d, a[d]);
      }
    } else {
      v$jscomp$5(a, b);
    }
  }
  /**
   * @param {number} i
   * @return {?}
   */
  function Ad$jscomp$0(i) {
    O$jscomp$3(!td$jscomp$0(i), "Invalid JSON number");
    var r;
    var c;
    var d;
    var a;
    if (0 === i) {
      /** @type {number} */
      d = c = 0;
      /** @type {number} */
      r = -Infinity === 1 / i ? 1 : 0;
    } else {
      /** @type {boolean} */
      r = 0 > i;
      /** @type {number} */
      i = Math.abs(i);
      if (i >= Math.pow(2, -1022)) {
        /** @type {number} */
        d = Math.min(Math.floor(Math.log(i) / Math.LN2), 1023);
        /** @type {number} */
        c = d + 1023;
        /** @type {number} */
        d = Math.round(i * Math.pow(2, 52 - d) - Math.pow(2, 52));
      } else {
        /** @type {number} */
        c = 0;
        /** @type {number} */
        d = Math.round(i / Math.pow(2, -1074));
      }
    }
    /** @type {!Array} */
    a = [];
    /** @type {number} */
    i = 52;
    for (; i; --i) {
      a.push(d % 2 ? 1 : 0);
      /** @type {number} */
      d = Math.floor(d / 2);
    }
    /** @type {number} */
    i = 11;
    for (; i; --i) {
      a.push(c % 2 ? 1 : 0);
      /** @type {number} */
      c = Math.floor(c / 2);
    }
    a.push(r ? 1 : 0);
    a.reverse();
    /** @type {string} */
    r = a.join("");
    /** @type {string} */
    c = "";
    /** @type {number} */
    i = 0;
    for (; 64 > i; i = i + 8) {
      /** @type {string} */
      d = parseInt(r.substr(i, 8), 2).toString(16);
      if (1 === d.length) {
        /** @type {string} */
        d = "0" + d;
      }
      /** @type {string} */
      c = c + d;
    }
    return c.toLowerCase();
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function vd$jscomp$0(value) {
    return Bd$jscomp$0.test(value) && (value = Number(value), -2147483648 <= value && 2147483647 >= value) ? value : null;
  }
  /**
   * @param {!Function} check
   * @return {undefined}
   */
  function gc$jscomp$0(check) {
    try {
      check();
    } catch (logItem) {
      setTimeout(function() {
        S$jscomp$3("Exception was thrown by user callback.", logItem.stack || "");
        throw logItem;
      }, Math.floor(0));
    }
  }
  /**
   * @param {!Function} s
   * @param {?} code
   * @return {undefined}
   */
  function T$jscomp$3(s, code) {
    if (r$jscomp$201(s)) {
      /** @type {!Array<?>} */
      var c = Array.prototype.slice.call(arguments, 1).slice();
      gc$jscomp$0(function() {
        s.apply(null, c);
      });
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function Cd$jscomp$0(value) {
    var b = {};
    var hpost = {};
    var maindata3 = {};
    /** @type {string} */
    var name = "";
    try {
      var f = value.split(".");
      b = Rb$jscomp$0(kd$jscomp$0(f[0]) || "");
      hpost = Rb$jscomp$0(kd$jscomp$0(f[1]) || "");
      name = f[2];
      maindata3 = hpost.d || {};
      delete hpost.d;
    } catch (g) {
    }
    return {
      mh : b,
      Ec : hpost,
      data : maindata3,
      bh : name
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function Dd$jscomp$0(name) {
    name = Cd$jscomp$0(name).Ec;
    return "object" === typeof name && name.hasOwnProperty("iat") ? z$jscomp$13(name, "iat") : null;
  }
  /**
   * @param {string} r
   * @return {?}
   */
  function Ed$jscomp$0(r) {
    r = Cd$jscomp$0(r);
    var source = r.Ec;
    return !!r.bh && !!source && "object" === typeof source && source.hasOwnProperty("iat");
  }
  /**
   * @param {!Object} other
   * @return {undefined}
   */
  function Fd$jscomp$0(other) {
    /** @type {!Object} */
    this.Y = other;
    this.g = other.n.g;
  }
  /**
   * @param {!Object} f
   * @param {!Array} a
   * @param {?} val
   * @param {!Object} formStyles
   * @return {?}
   */
  function Gd$jscomp$0(f, a, val, formStyles) {
    /** @type {!Array} */
    var bCreateNode = [];
    /** @type {!Array} */
    var q = [];
    Ma$jscomp$0(a, function(geocode) {
      if ("child_changed" === geocode.type && f.g.Dd(geocode.Oe, geocode.Na)) {
        q.push(new J$jscomp$2("child_moved", geocode.Na, geocode.Za));
      }
    });
    Hd$jscomp$0(f, bCreateNode, "child_removed", a, formStyles, val);
    Hd$jscomp$0(f, bCreateNode, "child_added", a, formStyles, val);
    Hd$jscomp$0(f, bCreateNode, "child_moved", q, formStyles, val);
    Hd$jscomp$0(f, bCreateNode, "child_changed", a, formStyles, val);
    Hd$jscomp$0(f, bCreateNode, ic$jscomp$0, a, formStyles, val);
    return bCreateNode;
  }
  /**
   * @param {!Object} a
   * @param {!Array} b
   * @param {string} type
   * @param {!Array} key
   * @param {!Object} obj
   * @param {?} v
   * @return {undefined}
   */
  function Hd$jscomp$0(a, b, type, key, obj, v) {
    key = Na$jscomp$0(key, function(listenerDetails) {
      return listenerDetails.type === type;
    });
    Va$jscomp$0(key, u$jscomp$22(a.qg, a));
    Ma$jscomp$0(key, function(event) {
      var e = Id$jscomp$0(a, event, v);
      Ma$jscomp$0(obj, function(that) {
        if (that.Qf(event.type)) {
          b.push(that.createEvent(e, a.Y));
        }
      });
    });
  }
  /**
   * @param {!Object} config
   * @param {!Object} state
   * @param {?} ns
   * @return {?}
   */
  function Id$jscomp$0(config, state, ns) {
    if ("value" !== state.type && "child_removed" !== state.type) {
      state.Td = ns.wf(state.Za, state.Na, config.g);
    }
    return state;
  }
  /**
   * @return {undefined}
   */
  function Jd$jscomp$0() {
    this.ib = {};
  }
  /**
   * @param {!Object} node
   * @param {string} child
   * @return {undefined}
   */
  function Kd$jscomp$0(node, child) {
    var id = child.type;
    var name = child.Za;
    O$jscomp$3("child_added" == id || "child_changed" == id || "child_removed" == id, "Only child changes supported for tracking");
    O$jscomp$3(".priority" !== name, "Only non-priority child changes can be tracked.");
    var c = z$jscomp$13(node.ib, name);
    if (c) {
      var type = c.type;
      if ("child_added" == id && "child_removed" == type) {
        node.ib[name] = new J$jscomp$2("child_changed", child.Na, name, c.Na);
      } else {
        if ("child_removed" == id && "child_added" == type) {
          delete node.ib[name];
        } else {
          if ("child_removed" == id && "child_changed" == type) {
            node.ib[name] = new J$jscomp$2("child_removed", c.Oe, name);
          } else {
            if ("child_changed" == id && "child_added" == type) {
              node.ib[name] = new J$jscomp$2("child_added", child.Na, name);
            } else {
              if ("child_changed" == id && "child_changed" == type) {
                node.ib[name] = new J$jscomp$2("child_changed", child.Na, name, c.Oe);
              } else {
                throw jd$jscomp$0("Illegal combination of changes: " + child + " occurred after " + c);
              }
            }
          }
        }
      }
    } else {
      /** @type {string} */
      node.ib[name] = child;
    }
  }
  /**
   * @param {string} g
   * @return {undefined}
   */
  function Ld$jscomp$0(g) {
    /** @type {string} */
    this.g = g;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function Md$jscomp$0(node) {
    this.Fe = new Ld$jscomp$0(node.g);
    this.g = node.g;
    var p;
    if (node.oa) {
      p = Nd$jscomp$0(node);
      p = node.g.Sc(Od$jscomp$0(node), p);
    } else {
      p = node.g.Wc();
    }
    this.gd = p;
    if (node.ra) {
      p = Pd$jscomp$0(node);
      node = node.g.Sc(Rd$jscomp$0(node), p);
    } else {
      node = node.g.Tc();
    }
    /** @type {!Object} */
    this.Jc = node;
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function Sd$jscomp$0(data) {
    this.ua = new Md$jscomp$0(data);
    this.g = data.g;
    O$jscomp$3(data.la, "Only valid if limit has been set");
    this.ma = data.ma;
    /** @type {boolean} */
    this.Nb = !Td$jscomp$0(data);
  }
  /**
   * @param {!Object} a
   * @param {!Object} v
   * @param {string} x
   * @param {!Object} y
   * @param {number} context
   * @param {!Object} arg
   * @return {?}
   */
  function Ud$jscomp$0(a, v, x, y, context, arg) {
    var addIndexEntries;
    if (a.Nb) {
      var when = Vd$jscomp$0(a.g);
      /**
       * @param {?} callback
       * @param {?} req
       * @return {?}
       */
      addIndexEntries = function(callback, req) {
        return when(req, callback);
      };
    } else {
      addIndexEntries = Vd$jscomp$0(a.g);
    }
    O$jscomp$3(v.Hb() == a.ma, "");
    var item = new L$jscomp$3(x, y);
    var key = a.Nb ? Wd$jscomp$0(v, a.g) : Xd$jscomp$0(v, a.g);
    var template = a.ua.matches(item);
    if (v.Fa(x)) {
      var score_label = v.T(x);
      key = context.Ce(a.g, key, a.Nb);
      for (; null != key && (key.name == x || v.Fa(key.name));) {
        key = context.Ce(a.g, key, a.Nb);
      }
      context = null == key ? 1 : addIndexEntries(key, item);
      if (template && !y.e() && 0 <= context) {
        return null != arg && Kd$jscomp$0(arg, new J$jscomp$2("child_changed", y, x, score_label)), v.W(x, y);
      }
      if (null != arg) {
        Kd$jscomp$0(arg, new J$jscomp$2("child_removed", score_label, x));
      }
      v = v.W(x, H$jscomp$2);
      return null != key && a.ua.matches(key) ? (null != arg && Kd$jscomp$0(arg, new J$jscomp$2("child_added", key.U, key.name)), v.W(key.name, key.U)) : v;
    }
    return y.e() ? v : template && 0 <= addIndexEntries(key, item) ? (null != arg && (Kd$jscomp$0(arg, new J$jscomp$2("child_removed", key.U, key.name)), Kd$jscomp$0(arg, new J$jscomp$2("child_added", y, x))), v.W(x, y).W(key.name, H$jscomp$2)) : v;
  }
  /**
   * @param {string} username
   * @param {?} game_count
   * @return {undefined}
   */
  function Yd$jscomp$0(username, game_count) {
    /** @type {string} */
    this.me = username;
    this.og = game_count;
  }
  /**
   * @param {string} other
   * @return {undefined}
   */
  function Zd$jscomp$0(other) {
    /** @type {string} */
    this.X = other;
  }
  /**
   * @param {?} cmd
   * @param {!Window} options
   * @param {!Object} val
   * @param {!Object} c
   * @param {(Object|string)} callback
   * @param {string} e
   * @return {?}
   */
  function ie$jscomp$2(cmd, options, val, c, callback, e) {
    var n = options.Q;
    if (null != c.xc(val)) {
      return options;
    }
    var a;
    if (val.e()) {
      O$jscomp$3(lc$jscomp$0(options.w()), "If change path is empty, we must have complete server data");
      if (mc$jscomp$0(options.w())) {
        callback = Yb$jscomp$0(options);
        c = c.Cc(callback instanceof fe$jscomp$2 ? callback : H$jscomp$2);
      } else {
        c = c.Aa(Yb$jscomp$0(options));
      }
      e = cmd.X.ya(options.Q.j(), c, e);
    } else {
      var i = K$jscomp$2(val);
      if (".priority" == i) {
        O$jscomp$3(1 == le$jscomp$2(val), "Can't have a priority with additional path components");
        e = n.j();
        a = options.w().j();
        c = c.nd(val, e, a);
        e = null != c ? cmd.X.ia(e, c) : n.j();
      } else {
        var y = N$jscomp$3(val);
        if (Wb$jscomp$0(n, i)) {
          a = options.w().j();
          c = c.nd(val, n.j(), a);
          c = null != c ? n.j().T(i).H(y, c) : n.j().T(i);
        } else {
          c = c.Bc(i, options.w());
        }
        e = null != c ? cmd.X.H(n.j(), i, c, y, callback, e) : n.j();
      }
    }
    return ge$jscomp$2(options, e, n.ga || val.e(), cmd.X.Ra());
  }
  /**
   * @param {?} node
   * @param {!Object} t
   * @param {!Object} a
   * @param {?} i
   * @param {!Object} x
   * @param {!Object} y
   * @param {string} f
   * @param {string} start
   * @return {?}
   */
  function ae$jscomp$2(node, t, a, i, x, y, f, start) {
    var v = t.w();
    f = f ? node.X : node.X.$b();
    if (a.e()) {
      i = f.ya(v.j(), i, null);
    } else {
      if (f.Ra() && !v.Yb) {
        i = v.j().H(a, i);
        i = f.ya(v.j(), i, null);
      } else {
        var x = K$jscomp$2(a);
        if (!nc$jscomp$0(v, a) && 1 < le$jscomp$2(a)) {
          return t;
        }
        var o = N$jscomp$3(a);
        i = v.j().T(x).H(o, i);
        i = ".priority" == x ? f.ia(v.j(), i) : f.H(v.j(), x, i, o, Ub$jscomp$0, null);
      }
    }
    v = v.ga || a.e();
    t = new je$jscomp$1(t.Q, new Xb$jscomp$0(i, v, f.Ra()));
    return ie$jscomp$2(node, t, a, x, new Vb$jscomp$0(x, t, y), start);
  }
  /**
   * @param {!Object} d
   * @param {!Object} node
   * @param {!Object} child
   * @param {!Object} data
   * @param {!Object} e
   * @param {!Object} i
   * @param {string} value
   * @return {?}
   */
  function $d$jscomp$0(d, node, child, data, e, i, value) {
    var v = node.Q;
    e = new Vb$jscomp$0(e, node, i);
    if (child.e()) {
      value = d.X.ya(node.Q.j(), data, value);
      d = ge$jscomp$2(node, value, true, d.X.Ra());
    } else {
      if (i = K$jscomp$2(child), ".priority" === i) {
        value = d.X.ia(node.Q.j(), data);
        d = ge$jscomp$2(node, value, v.ga, v.Yb);
      } else {
        child = N$jscomp$3(child);
        var args = v.j().T(i);
        if (!child.e()) {
          var f = e.uf(i);
          data = null != f ? ".priority" === me$jscomp$2(child) && f.S(child.parent()).e() ? f : f.H(child, data) : H$jscomp$2;
        }
        if (args.ea(data)) {
          /** @type {!Object} */
          d = node;
        } else {
          value = d.X.H(v.j(), i, data, child, e, value);
          d = ge$jscomp$2(node, value, v.ga, d.X.Ra());
        }
      }
    }
    return d;
  }
  /**
   * @param {!Object} t
   * @param {!Window} obj
   * @param {!Object} c
   * @param {!Object} name
   * @param {!Object} m
   * @param {!Object} callback
   * @param {string} p
   * @return {?}
   */
  function ce$jscomp$2(t, obj, c, name, m, callback, p) {
    /** @type {!Window} */
    var a = obj;
    ne$jscomp$2(name, function(Y, release) {
      var X = c.o(Y);
      if (Wb$jscomp$0(obj.Q, K$jscomp$2(X))) {
        a = $d$jscomp$0(t, a, X, release, m, callback, p);
      }
    });
    ne$jscomp$2(name, function(Y, release) {
      var X = c.o(Y);
      if (!Wb$jscomp$0(obj.Q, K$jscomp$2(X))) {
        a = $d$jscomp$0(t, a, X, release, m, callback, p);
      }
    });
    return a;
  }
  /**
   * @param {string} g
   * @param {!Object} b
   * @return {?}
   */
  function oe$jscomp$2(g, b) {
    ne$jscomp$2(b, function(a, v) {
      g = g.H(a, v);
    });
    return g;
  }
  /**
   * @param {?} scope
   * @param {!Object} config
   * @param {!Object} p
   * @param {number} q
   * @param {!Object} cb
   * @param {!Object} e
   * @param {string} f
   * @param {string} m
   * @return {?}
   */
  function de$jscomp$2(scope, config, p, q, cb, e, f, m) {
    if (config.w().j().e() && !lc$jscomp$0(config.w())) {
      return config;
    }
    /** @type {!Object} */
    var ret = config;
    p = p.e() ? q : pe$jscomp$2(qe$jscomp$1, p, q);
    var params = config.w().j();
    p.children.ka(function(x, a) {
      if (params.Fa(x)) {
        var i = config.w().j().T(x);
        i = oe$jscomp$2(i, a);
        ret = ae$jscomp$2(scope, ret, new P$jscomp$3(x), i, cb, e, f, m);
      }
    });
    p.children.ka(function(x, d) {
      /** @type {boolean} */
      var result = !Wb$jscomp$0(config.w(), x) && null == d.value;
      if (!(params.Fa(x) || result)) {
        result = config.w().j().T(x);
        result = oe$jscomp$2(result, d);
        ret = ae$jscomp$2(scope, ret, new P$jscomp$3(x), result, cb, e, f, m);
      }
    });
    return ret;
  }
  /**
   * @param {?} child
   * @param {!Object} element
   * @param {!Object} x
   * @param {!Object} b
   * @param {!Object} a
   * @param {!Object} p
   * @param {string} f
   * @return {?}
   */
  function he$jscomp$2(child, element, x, b, a, p, f) {
    if (null != a.xc(x)) {
      return element;
    }
    var c = mc$jscomp$0(element.w());
    var m = element.w();
    if (null != b.value) {
      if (x.e() && m.ga || nc$jscomp$0(m, x)) {
        return ae$jscomp$2(child, element, x, m.j().S(x), a, p, c, f);
      }
      if (x.e()) {
        var result = qe$jscomp$1;
        m.j().R(re$jscomp$2, function(len, a) {
          result = result.set(new P$jscomp$3(len), a);
        });
        return de$jscomp$2(child, element, x, result, a, p, c, f);
      }
      return element;
    }
    result = qe$jscomp$1;
    ne$jscomp$2(b, function(url) {
      var j = x.o(url);
      if (nc$jscomp$0(m, j)) {
        result = result.set(url, m.j().S(j));
      }
    });
    return de$jscomp$2(child, element, x, result, a, p, c, f);
  }
  /**
   * @return {undefined}
   */
  function se$jscomp$2() {
  }
  /**
   * @param {!Array} r
   * @return {?}
   */
  function Vd$jscomp$0(r) {
    return u$jscomp$22(r.compare, r);
  }
  /**
   * @param {!Object} val
   * @return {undefined}
   */
  function ve$jscomp$2(val) {
    O$jscomp$3(!val.e() && ".priority" !== K$jscomp$2(val), "Can't create PathIndex with empty path or .priority key");
    /** @type {!Object} */
    this.gc = val;
  }
  /**
   * @return {undefined}
   */
  function xe$jscomp$2() {
  }
  /**
   * @return {undefined}
   */
  function ye$jscomp$2() {
  }
  /**
   * @return {undefined}
   */
  function ze$jscomp$1() {
  }
  /**
   * @return {undefined}
   */
  function Ce$jscomp$1() {
    /** @type {boolean} */
    this.Xb = this.ra = this.Pb = this.oa = this.la = false;
    /** @type {number} */
    this.ma = 0;
    /** @type {string} */
    this.Rb = "";
    /** @type {null} */
    this.ic = null;
    /** @type {string} */
    this.Bb = "";
    /** @type {null} */
    this.fc = null;
    /** @type {string} */
    this.zb = "";
    this.g = R$jscomp$2;
  }
  /**
   * @param {!Object} parent
   * @return {?}
   */
  function Td$jscomp$0(parent) {
    return "" === parent.Rb ? parent.oa : "l" === parent.Rb;
  }
  /**
   * @param {!Object} v
   * @return {?}
   */
  function Od$jscomp$0(v) {
    O$jscomp$3(v.oa, "Only valid if start has been set");
    return v.ic;
  }
  /**
   * @param {!Object} query
   * @return {?}
   */
  function Nd$jscomp$0(query) {
    O$jscomp$3(query.oa, "Only valid if start has been set");
    return query.Pb ? query.Bb : "[MIN_NAME]";
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function Rd$jscomp$0(node) {
    O$jscomp$3(node.ra, "Only valid if end has been set");
    return node.fc;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function Pd$jscomp$0(node) {
    O$jscomp$3(node.ra, "Only valid if end has been set");
    return node.Xb ? node.zb : "[MAX_NAME]";
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function Ee$jscomp$1(self) {
    var node = new Ce$jscomp$1;
    node.la = self.la;
    node.ma = self.ma;
    node.oa = self.oa;
    node.ic = self.ic;
    node.Pb = self.Pb;
    node.Bb = self.Bb;
    node.ra = self.ra;
    node.fc = self.fc;
    node.Xb = self.Xb;
    node.zb = self.zb;
    node.g = self.g;
    return node;
  }
  /**
   * @param {!Object} f
   * @param {string} x
   * @return {?}
   */
  function Fe$jscomp$1(f, x) {
    var c = Ee$jscomp$1(f);
    /** @type {string} */
    c.g = x;
    return c;
  }
  /**
   * @param {!Object} params
   * @return {?}
   */
  function Ge$jscomp$1(params) {
    var data = {};
    if (params.oa) {
      data.sp = params.ic;
      if (params.Pb) {
        data.sn = params.Bb;
      }
    }
    if (params.ra) {
      data.ep = params.fc;
      if (params.Xb) {
        data.en = params.zb;
      }
    }
    if (params.la) {
      data.l = params.ma;
      var value = params.Rb;
      if ("" === value) {
        /** @type {string} */
        value = Td$jscomp$0(params) ? "l" : "r";
      }
      data.vf = value;
    }
    if (params.g !== R$jscomp$2) {
      data.i = params.g.toString();
    }
    return data;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function He$jscomp$1(node) {
    return !(node.oa || node.ra || node.la);
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function Ie$jscomp$1(item) {
    return He$jscomp$1(item) && item.g == R$jscomp$2;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function Je$jscomp$1(node) {
    var options = {};
    if (Ie$jscomp$1(node)) {
      return options;
    }
    var key;
    if (node.g === R$jscomp$2) {
      /** @type {string} */
      key = "$priority";
    } else {
      if (node.g === Be$jscomp$1) {
        /** @type {string} */
        key = "$value";
      } else {
        if (node.g === re$jscomp$2) {
          /** @type {string} */
          key = "$key";
        } else {
          O$jscomp$3(node.g instanceof ve$jscomp$2, "Unrecognized index type!");
          key = node.g.toString();
        }
      }
    }
    options.orderBy = G$jscomp$2(key);
    if (node.oa) {
      options.startAt = G$jscomp$2(node.ic);
      if (node.Pb) {
        options.startAt += "," + G$jscomp$2(node.Bb);
      }
    }
    if (node.ra) {
      options.endAt = G$jscomp$2(node.fc);
      if (node.Xb) {
        options.endAt += "," + G$jscomp$2(node.zb);
      }
    }
    if (node.la) {
      if (Td$jscomp$0(node)) {
        options.limitToFirst = node.ma;
      } else {
        options.limitToLast = node.ma;
      }
    }
    return options;
  }
  /**
   * @param {?} a
   * @param {!Function} b
   * @return {undefined}
   */
  function Ke$jscomp$1(a, b) {
    this.Ed = a;
    /** @type {!Function} */
    this.hc = b;
  }
  /**
   * @param {?} slot
   * @param {string} data
   * @param {!Array} options
   * @return {?}
   */
  function Le$jscomp$1(slot, data, options) {
    var d = ma$jscomp$0(slot.Ed, function(key, s) {
      var b = z$jscomp$13(slot.hc, s);
      O$jscomp$3(b, "Missing index implementation for " + s);
      if (key === te$jscomp$2) {
        if (b.Lc(data.U)) {
          /** @type {!Array} */
          var param = [];
          var p = options.ac(wc$jscomp$0);
          var node = Ic$jscomp$0(p);
          for (; node;) {
            if (node.name != data.name) {
              param.push(node);
            }
            node = Ic$jscomp$0(p);
          }
          param.push(data);
          return Me$jscomp$1(param, Vd$jscomp$0(b));
        }
        return te$jscomp$2;
      }
      b = options.get(data.name);
      /** @type {string} */
      param = key;
      if (b) {
        param = param.remove(new L$jscomp$3(data.name, b));
      }
      return param.Sa(data, data.U);
    });
    return new Ke$jscomp$1(d, slot.hc);
  }
  /**
   * @param {?} scope
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function Ne$jscomp$1(scope, a, b) {
    var d = ma$jscomp$0(scope.Ed, function(state) {
      if (state === te$jscomp$2) {
        return state;
      }
      var reducer = b.get(a.name);
      return reducer ? state.remove(new L$jscomp$3(a.name, reducer)) : state;
    });
    return new Ke$jscomp$1(d, scope.hc);
  }
  /**
   * @param {!Object} data
   * @param {!Object} ca
   * @return {undefined}
   */
  function Yc$jscomp$0(data, ca) {
    /** @type {!Object} */
    this.B = data;
    O$jscomp$3(p$jscomp$13(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
    this.ca = ca || H$jscomp$2;
    Pe$jscomp$1(this.ca);
    /** @type {null} */
    this.Gb = null;
  }
  /**
   * @param {!Object} val
   * @param {!Array} ca
   * @param {!Object} fi
   * @return {undefined}
   */
  function fe$jscomp$2(val, ca, fi) {
    /** @type {!Object} */
    this.m = val;
    if (this.ca = ca) {
      Pe$jscomp$1(this.ca);
    }
    if (val.e()) {
      O$jscomp$3(!this.ca || this.ca.e(), "An empty node cannot have a priority");
    }
    /** @type {!Object} */
    this.Ab = fi;
    /** @type {null} */
    this.Gb = null;
  }
  /**
   * @param {!Object} part
   * @param {!Function} value
   * @return {?}
   */
  function Wd$jscomp$0(part, value) {
    var next;
    next = (next = Te$jscomp$1(part, value)) ? (next = next.Vc()) && next.name : part.m.Vc();
    return next ? new L$jscomp$3(next, part.m.get(next)) : null;
  }
  /**
   * @param {!Object} part
   * @param {!Function} value
   * @return {?}
   */
  function Xd$jscomp$0(part, value) {
    var next;
    next = (next = Te$jscomp$1(part, value)) ? (next = next.jc()) && next.name : part.m.jc();
    return next ? new L$jscomp$3(next, part.m.get(next)) : null;
  }
  /**
   * @param {!Object} content
   * @param {!Function} type
   * @return {?}
   */
  function Te$jscomp$1(content, type) {
    return type === re$jscomp$2 ? null : content.Ab.get(type.toString());
  }
  /**
   * @param {!Object} x
   * @param {!Object} a
   * @return {?}
   */
  function Q$jscomp$2(x, a) {
    if (null === x) {
      return H$jscomp$2;
    }
    /** @type {null} */
    var value = null;
    if ("object" === typeof x && ".priority" in x) {
      value = x[".priority"];
    } else {
      if ("undefined" !== typeof a) {
        /** @type {!Object} */
        value = a;
      }
    }
    O$jscomp$3(null === value || "string" === typeof value || "number" === typeof value || "object" === typeof value && ".sv" in value, "Invalid priority type found: " + typeof value);
    if ("object" === typeof x && ".value" in x && null !== x[".value"]) {
      x = x[".value"];
    }
    if ("object" !== typeof x || ".sv" in x) {
      return new Yc$jscomp$0(x, Q$jscomp$2(value));
    }
    if (x instanceof Array) {
      var res = H$jscomp$2;
      /** @type {!Object} */
      var e = x;
      v$jscomp$5(e, function(ver, d) {
        if (y$jscomp$63(e, d) && "." !== d.substring(0, 1)) {
          var p = Q$jscomp$2(ver);
          if (p.L() || !p.e()) {
            res = res.W(d, p);
          }
        }
      });
      return res.ia(Q$jscomp$2(value));
    }
    /** @type {!Array} */
    var files = [];
    /** @type {boolean} */
    var g = false;
    /** @type {!Object} */
    var result = x;
    Fb$jscomp$0(result, function(id) {
      if ("string" !== typeof id || "." !== id.substring(0, 1)) {
        var self = Q$jscomp$2(result[id]);
        if (!self.e()) {
          g = g || !self.C().e();
          files.push(new L$jscomp$3(id, self));
        }
      }
    });
    if (0 == files.length) {
      return H$jscomp$2;
    }
    var fileSubLists = Me$jscomp$1(files, xc$jscomp$0, function(a) {
      return a.name;
    }, zc$jscomp$0);
    if (g) {
      var facetFile = Me$jscomp$1(files, Vd$jscomp$0(R$jscomp$2));
      return new fe$jscomp$2(fileSubLists, Q$jscomp$2(value), new Ke$jscomp$1({
        ".priority" : facetFile
      }, {
        ".priority" : R$jscomp$2
      }));
    }
    return new fe$jscomp$2(fileSubLists, Q$jscomp$2(value), Oe$jscomp$1);
  }
  /**
   * @param {number} a
   * @return {undefined}
   */
  function Ve$jscomp$1(a) {
    /** @type {number} */
    this.count = parseInt(Math.log(a + 1) / Ue$jscomp$1, 10);
    /** @type {number} */
    this.nf = this.count - 1;
    /** @type {number} */
    this.ng = a + 1 & parseInt(Array(this.count + 1).join("1"), 2);
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function We$jscomp$1(context) {
    /** @type {boolean} */
    var b = !(context.ng & 1 << context.nf);
    context.nf--;
    return b;
  }
  /**
   * @param {!Array} params
   * @param {!Function} num
   * @param {!Function} s
   * @param {!Function} min
   * @return {?}
   */
  function Me$jscomp$1(params, num, s, min) {
    /**
     * @param {number} i
     * @param {string} size
     * @return {?}
     */
    function format(i, size) {
      /** @type {number} */
      var l = size - i;
      if (0 == l) {
        return null;
      }
      if (1 == l) {
        var n = params[i];
        var t = s ? s(n) : n;
        return new Kc$jscomp$0(t, n.U, false, null, null);
      }
      n = parseInt(l / 2, 10) + i;
      l = format(i, n);
      var d = format(n + 1, size);
      n = params[n];
      t = s ? s(n) : n;
      return new Kc$jscomp$0(t, n.U, false, l, d);
    }
    params.sort(num);
    var f = function(ret) {
      /**
       * @param {number} offset
       * @param {string} name
       * @return {undefined}
       */
      function init(offset, name) {
        /** @type {number} */
        var n = len - offset;
        var i = len;
        /** @type {number} */
        len = len - offset;
        i = format(n + 1, i);
        n = params[n];
        var m = s ? s(n) : n;
        i = new Kc$jscomp$0(m, n.U, name, null, i);
        if (f) {
          f.left = i;
        } else {
          commonIndex = i;
        }
        f = i;
      }
      /** @type {null} */
      var f = null;
      /** @type {null} */
      var commonIndex = null;
      var len = params.length;
      /** @type {number} */
      var n = 0;
      for (; n < ret.count; ++n) {
        var err = We$jscomp$1(ret);
        /** @type {number} */
        var OFFSET_ZERO = Math.pow(2, ret.count - (n + 1));
        if (err) {
          init(OFFSET_ZERO, false);
        } else {
          init(OFFSET_ZERO, false);
          init(OFFSET_ZERO, true);
        }
      }
      return commonIndex;
    }(new Ve$jscomp$1(params.length));
    return null !== f ? new Ec$jscomp$0(min || num, f) : new Ec$jscomp$0(min || num);
  }
  /**
   * @param {number} s
   * @return {?}
   */
  function Re$jscomp$1(s) {
    return "number" === typeof s ? "number:" + Ad$jscomp$0(s) : "string:" + s;
  }
  /**
   * @param {!Object} global
   * @return {undefined}
   */
  function Pe$jscomp$1(global) {
    if (global.L()) {
      var value = global.J();
      O$jscomp$3("string" === typeof value || "number" === typeof value || "object" === typeof value && y$jscomp$63(value, ".sv"), "Priority must be a string or number.");
    } else {
      O$jscomp$3(global === we$jscomp$1 || global.e(), "priority of unexpected type.");
    }
    O$jscomp$3(global === we$jscomp$1 || global.C().e(), "Priority nodes can't have a priority of their own.");
  }
  /**
   * @return {undefined}
   */
  function Xe$jscomp$1() {
    fe$jscomp$2.call(this, new Ec$jscomp$0(zc$jscomp$0), H$jscomp$2, Oe$jscomp$1);
  }
  /**
   * @param {!Array} noise
   * @param {string} point
   * @return {undefined}
   */
  function je$jscomp$1(noise, point) {
    /** @type {!Array} */
    this.Q = noise;
    /** @type {string} */
    this.ae = point;
  }
  /**
   * @param {!Object} b
   * @param {string} list
   * @param {!Function} a
   * @param {!Function} val
   * @return {?}
   */
  function ge$jscomp$2(b, list, a, val) {
    return new je$jscomp$1(new Xb$jscomp$0(list, a, val), b.ae);
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function ke$jscomp$1(node) {
    return node.Q.ga ? node.Q.j() : null;
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function Yb$jscomp$0(result) {
    return result.ae.ga ? result.ae.j() : null;
  }
  /**
   * @param {!Object} obj
   * @param {!Window} root
   * @return {undefined}
   */
  function Ye$jscomp$1(obj, root) {
    /** @type {!Object} */
    this.Y = obj;
    var data = obj.n;
    var d = new Ld$jscomp$0(data.g);
    data = He$jscomp$1(data) ? new Ld$jscomp$0(data.g) : data.la ? new Sd$jscomp$0(data) : new Md$jscomp$0(data);
    this.Nf = new Zd$jscomp$0(data);
    var m = root.w();
    var $ = root.Q;
    var bMin = d.ya(H$jscomp$2, m.j(), null);
    var s = data.ya(H$jscomp$2, $.j(), null);
    this.Oa = new je$jscomp$1(new Xb$jscomp$0(s, $.ga, data.Ra()), new Xb$jscomp$0(bMin, m.ga, d.Ra()));
    /** @type {!Array} */
    this.$a = [];
    this.ug = new Fd$jscomp$0(obj);
  }
  /**
   * @param {?} _cmy
   * @return {?}
   */
  function Ze$jscomp$1(_cmy) {
    return _cmy.Y;
  }
  /**
   * @param {?} f
   * @param {boolean} n
   * @return {?}
   */
  function af$jscomp$0(f, n) {
    var m = f.Oa.Q;
    /** @type {!Array} */
    var root = [];
    if (!m.j().L()) {
      m.j().R(R$jscomp$2, function(sendcallback, i) {
        root.push(new J$jscomp$2("child_added", i, sendcallback));
      });
    }
    if (m.ga) {
      root.push(hc$jscomp$0(m.j()));
    }
    return $e$jscomp$2(f, root, m.j(), n);
  }
  /**
   * @param {?} file
   * @param {!Array} key
   * @param {?} text
   * @param {string} name
   * @return {?}
   */
  function $e$jscomp$2(file, key, text, name) {
    return Gd$jscomp$0(file.ug, key, text, name ? [name] : file.$a);
  }
  /**
   * @param {!Object} source
   * @param {string} stack
   * @param {!Object} length
   * @return {undefined}
   */
  function bf$jscomp$0(source, stack, length) {
    /** @type {number} */
    this.type = be$jscomp$2;
    /** @type {!Object} */
    this.source = source;
    /** @type {string} */
    this.path = stack;
    /** @type {!Object} */
    this.children = length;
  }
  /**
   * @param {string} perface
   * @param {(RegExp|string)} pervertex
   * @return {undefined}
   */
  function cf$jscomp$0(perface, pervertex) {
    this.f = pd$jscomp$0("p:rest:");
    /** @type {string} */
    this.G = perface;
    /** @type {(RegExp|string)} */
    this.Kb = pervertex;
    /** @type {null} */
    this.Ca = null;
    this.ba = {};
  }
  /**
   * @param {!Object} a
   * @param {?} f
   * @return {?}
   */
  function df$jscomp$0(a, f) {
    if (p$jscomp$13(f)) {
      return "tag$" + f;
    }
    O$jscomp$3(Ie$jscomp$1(a.n), "should have a tag if it's not a default query.");
    return a.path.toString();
  }
  /**
   * @param {!Object} self
   * @param {string} value
   * @param {!Object} a
   * @param {!Function} j
   * @return {undefined}
   */
  function ef$jscomp$0(self, value, a, j) {
    a = a || {};
    /** @type {string} */
    a.format = "export";
    if (self.Ca) {
      a.auth = self.Ca;
    }
    /** @type {string} */
    var name = (self.G.ob ? "https://" : "http://") + self.G.host + value + "?" + Ib$jscomp$0(a);
    self.f("Sending REST request for " + name);
    /** @type {!XMLHttpRequest} */
    var e = new XMLHttpRequest;
    /**
     * @return {undefined}
     */
    e.onreadystatechange = function() {
      if (j && 4 === e.readyState) {
        self.f("REST Response for " + name + " received. status:", e.status, "response:", e.responseText);
        /** @type {null} */
        var data = null;
        if (200 <= e.status && 300 > e.status) {
          try {
            data = Rb$jscomp$0(e.responseText);
          } catch (c) {
            S$jscomp$3("Failed to parse JSON response for " + name + ": " + e.responseText);
          }
          j(null, data);
        } else {
          if (401 !== e.status && 404 !== e.status) {
            S$jscomp$3("Got unsuccessful REST response for " + name + " Status: " + e.status);
          }
          j(e.status);
        }
        /** @type {null} */
        j = null;
      }
    };
    e.open("GET", name, true);
    e.send();
  }
  /**
   * @param {string} c
   * @return {undefined}
   */
  function ff$jscomp$0(c) {
    O$jscomp$3(da$jscomp$0(c) && 0 < c.length, "Requires a non-empty array");
    /** @type {string} */
    this.fg = c;
    this.Rc = {};
  }
  /**
   * @param {!Object} type
   * @param {!Object} v
   * @return {undefined}
   */
  function gf$jscomp$0(type, v) {
    O$jscomp$3(Ra$jscomp$0(type.fg, function(allele) {
      return allele === v;
    }), "Unknown event: " + v);
  }
  /**
   * @return {undefined}
   */
  function jf$jscomp$0() {
    ff$jscomp$0.call(this, ["online"]);
    /** @type {boolean} */
    this.oc = true;
    if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
      var obj = this;
      window.addEventListener("online", function() {
        if (!obj.oc) {
          /** @type {boolean} */
          obj.oc = true;
          obj.ie("online", true);
        }
      }, false);
      window.addEventListener("offline", function() {
        if (obj.oc) {
          /** @type {boolean} */
          obj.oc = false;
          obj.ie("online", false);
        }
      }, false);
    }
  }
  /**
   * @return {undefined}
   */
  function kf$jscomp$0() {
    ff$jscomp$0.call(this, ["visible"]);
    var propertyName;
    var visibilityChange;
    if ("undefined" !== typeof document && "undefined" !== typeof document.addEventListener) {
      if ("undefined" !== typeof document.hidden) {
        /** @type {string} */
        visibilityChange = "visibilitychange";
        /** @type {string} */
        propertyName = "hidden";
      } else {
        if ("undefined" !== typeof document.mozHidden) {
          /** @type {string} */
          visibilityChange = "mozvisibilitychange";
          /** @type {string} */
          propertyName = "mozHidden";
        } else {
          if ("undefined" !== typeof document.msHidden) {
            /** @type {string} */
            visibilityChange = "msvisibilitychange";
            /** @type {string} */
            propertyName = "msHidden";
          } else {
            if ("undefined" !== typeof document.webkitHidden) {
              /** @type {string} */
              visibilityChange = "webkitvisibilitychange";
              /** @type {string} */
              propertyName = "webkitHidden";
            }
          }
        }
      }
    }
    /** @type {boolean} */
    this.Sb = true;
    if (visibilityChange) {
      var $scope = this;
      document.addEventListener(visibilityChange, function() {
        /** @type {boolean} */
        var obj = !document[propertyName];
        if (obj !== $scope.Sb) {
          /** @type {boolean} */
          $scope.Sb = obj;
          $scope.ie("visible", obj);
        }
      }, false);
    }
  }
  /**
   * @param {string} a
   * @param {number} b
   * @return {undefined}
   */
  function P$jscomp$3(a, b) {
    if (1 == arguments.length) {
      this.u = a.split("/");
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var i = 0;
      for (; i < this.u.length; i++) {
        if (0 < this.u[i].length) {
          this.u[n] = this.u[i];
          n++;
        }
      }
      /** @type {number} */
      this.u.length = n;
      /** @type {number} */
      this.aa = 0;
    } else {
      /** @type {string} */
      this.u = a;
      /** @type {number} */
      this.aa = b;
    }
  }
  /**
   * @param {!Object} val
   * @param {!Object} el
   * @return {?}
   */
  function lf$jscomp$0(val, el) {
    var tmp = K$jscomp$2(val);
    if (null === tmp) {
      return el;
    }
    if (tmp === K$jscomp$2(el)) {
      return lf$jscomp$0(N$jscomp$3(val), N$jscomp$3(el));
    }
    throw Error("INTERNAL ERROR: innerPath (" + el + ") is not within outerPath (" + val + ")");
  }
  /**
   * @param {string} a
   * @param {string} f
   * @return {?}
   */
  function mf$jscomp$0(a, f) {
    var n = a.slice();
    var d = f.slice();
    /** @type {number} */
    var i = 0;
    for (; i < n.length && i < d.length; i++) {
      var result = yc$jscomp$0(n[i], d[i]);
      if (0 !== result) {
        return result;
      }
    }
    return n.length === d.length ? 0 : n.length < d.length ? -1 : 1;
  }
  /**
   * @param {!Object} x
   * @return {?}
   */
  function K$jscomp$2(x) {
    return x.aa >= x.u.length ? null : x.u[x.aa];
  }
  /**
   * @param {!Object} args
   * @return {?}
   */
  function le$jscomp$2(args) {
    return args.u.length - args.aa;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function N$jscomp$3(val) {
    var cont = val.aa;
    if (cont < val.u.length) {
      cont++;
    }
    return new P$jscomp$3(val.u, cont);
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function me$jscomp$2(data) {
    return data.aa < data.u.length ? data.u[data.u.length - 1] : null;
  }
  /**
   * @param {string} n
   * @param {string} msg
   * @return {undefined}
   */
  function nf$jscomp$0(n, msg) {
    this.Ua = n.slice();
    /** @type {number} */
    this.Ka = Math.max(1, this.Ua.length);
    /** @type {string} */
    this.pf = msg;
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < this.Ua.length; layer_i++) {
      this.Ka += Pb$jscomp$0(this.Ua[layer_i]);
    }
    of$jscomp$0(this);
  }
  /**
   * @param {?} config
   * @return {undefined}
   */
  function of$jscomp$0(config) {
    if (768 < config.Ka) {
      throw Error(config.pf + "has a key path longer than 768 bytes (" + config.Ka + ").");
    }
    if (32 < config.Ua.length) {
      throw Error(config.pf + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + pf$jscomp$0(config));
    }
  }
  /**
   * @param {?} v
   * @return {?}
   */
  function pf$jscomp$0(v) {
    return 0 == v.Ua.length ? "" : "in property '" + v.Ua.join(".") + "'";
  }
  /**
   * @param {!Object} string
   * @param {number} options
   * @return {undefined}
   */
  function qf$jscomp$0(string, options) {
    /** @type {!Object} */
    this.value = string;
    this.children = options || rf$jscomp$0;
  }
  /**
   * @param {!Object} x
   * @return {?}
   */
  function sf$jscomp$0(x) {
    var result = qe$jscomp$1;
    v$jscomp$5(x, function(a, len) {
      result = result.set(new P$jscomp$3(len), a);
    });
    return result;
  }
  /**
   * @param {!Object} options
   * @param {!Object} parent
   * @param {!Function} callback
   * @return {?}
   */
  function tf$jscomp$0(options, parent, callback) {
    if (null != options.value && callback(options.value)) {
      return {
        path : M$jscomp$2,
        value : options.value
      };
    }
    if (parent.e()) {
      return null;
    }
    var a = K$jscomp$2(parent);
    options = options.children.get(a);
    return null !== options ? (parent = tf$jscomp$0(options, N$jscomp$3(parent), callback), null != parent ? {
      path : (new P$jscomp$3(a)).o(parent.path),
      value : parent.value
    } : null) : null;
  }
  /**
   * @param {!Object} term
   * @param {!Object} text
   * @return {?}
   */
  function uf$jscomp$0(term, text) {
    return tf$jscomp$0(term, text, function() {
      return true;
    });
  }
  /**
   * @param {!Object} status
   * @param {!Object} e
   * @param {number} direction
   * @return {?}
   */
  function pe$jscomp$2(status, e, direction) {
    if (e.e()) {
      return direction;
    }
    var a = K$jscomp$2(e);
    e = pe$jscomp$2(status.children.get(a) || qe$jscomp$1, N$jscomp$3(e), direction);
    a = e.e() ? status.children.remove(a) : status.children.Sa(a, e);
    return new qf$jscomp$0(status.value, a);
  }
  /**
   * @param {!Object} a
   * @param {!Function} f
   * @return {?}
   */
  function vf$jscomp$0(a, f) {
    return wf$jscomp$0(a, M$jscomp$2, f);
  }
  /**
   * @param {!Object} b
   * @param {!Object} m
   * @param {!Function} func
   * @return {?}
   */
  function wf$jscomp$0(b, m, func) {
    var d = {};
    b.children.ka(function(i, n) {
      d[i] = wf$jscomp$0(n, m.o(i), func);
    });
    return func(m, b.value, d);
  }
  /**
   * @param {!Object} f
   * @param {!Object} d
   * @param {!Function} v
   * @return {?}
   */
  function xf$jscomp$0(f, d, v) {
    return yf$jscomp$0(f, d, M$jscomp$2, v);
  }
  /**
   * @param {!Object} data
   * @param {!Object} word
   * @param {!Object} c
   * @param {!Function} d
   * @return {?}
   */
  function yf$jscomp$0(data, word, c, d) {
    var node = data.value ? d(c, data.value) : false;
    if (node) {
      return node;
    }
    if (word.e()) {
      return null;
    }
    node = K$jscomp$2(word);
    return (data = data.children.get(node)) ? yf$jscomp$0(data, N$jscomp$3(word), c.o(node), d) : null;
  }
  /**
   * @param {!Object} g
   * @param {!Object} text
   * @param {!Function} len
   * @return {undefined}
   */
  function zf$jscomp$0(g, text, len) {
    Af$jscomp$0(g, text, M$jscomp$2, len);
  }
  /**
   * @param {!Object} item
   * @param {!Object} word
   * @param {!Object} node
   * @param {!Function} iterator
   * @return {?}
   */
  function Af$jscomp$0(item, word, node, iterator) {
    if (word.e()) {
      return item;
    }
    if (item.value) {
      iterator(node, item.value);
    }
    var i = K$jscomp$2(word);
    return (item = item.children.get(i)) ? Af$jscomp$0(item, N$jscomp$3(word), node.o(i), iterator) : qe$jscomp$1;
  }
  /**
   * @param {!Object} a
   * @param {!Function} b
   * @return {undefined}
   */
  function ne$jscomp$2(a, b) {
    Bf$jscomp$0(a, M$jscomp$2, b);
  }
  /**
   * @param {!Object} op
   * @param {!Object} expected
   * @param {!Function} equals
   * @return {undefined}
   */
  function Bf$jscomp$0(op, expected, equals) {
    op.children.ka(function(d, attOp) {
      Bf$jscomp$0(attOp, expected.o(d), equals);
    });
    if (op.value) {
      equals(expected, op.value);
    }
  }
  /**
   * @param {!Object} $tab
   * @param {!Function} e
   * @return {undefined}
   */
  function Cf$jscomp$0($tab, e) {
    $tab.children.ka(function(context, temp) {
      if (temp.value) {
        e(context, temp.value);
      }
    });
  }
  /**
   * @param {string} sPath
   * @param {string} sDomain
   * @param {!Object} bSecure
   * @return {undefined}
   */
  function Df$jscomp$0(sPath, sDomain, bSecure) {
    /** @type {number} */
    this.type = ee$jscomp$2;
    this.source = Ef$jscomp$0;
    /** @type {string} */
    this.path = sPath;
    /** @type {string} */
    this.Ub = sDomain;
    /** @type {!Object} */
    this.Yd = bSecure;
  }
  /**
   * @param {string} who
   * @param {boolean} tf
   * @param {number} isSlidingUp
   * @param {string} $cont
   * @return {undefined}
   */
  function Ff$jscomp$0(who, tf, isSlidingUp, $cont) {
    /** @type {string} */
    this.Ae = who;
    /** @type {boolean} */
    this.tf = tf;
    /** @type {number} */
    this.Lb = isSlidingUp;
    /** @type {string} */
    this.ef = $cont;
    O$jscomp$3(!$cont || tf, "Tagged queries must be from server.");
  }
  /**
   * @param {string} other
   * @return {undefined}
   */
  function Hf$jscomp$0(other) {
    /** @type {string} */
    this.Z = other;
  }
  /**
   * @param {?} p
   * @param {!Object} a
   * @param {?} i
   * @return {?}
   */
  function Jf$jscomp$0(p, a, i) {
    if (a.e()) {
      return new Hf$jscomp$0(new qf$jscomp$0(i));
    }
    var v = uf$jscomp$0(p.Z, a);
    if (null != v) {
      var val = v.path;
      v = v.value;
      a = lf$jscomp$0(val, a);
      v = v.H(a, i);
      return new Hf$jscomp$0(p.Z.set(val, v));
    }
    p = pe$jscomp$2(p.Z, a, new qf$jscomp$0(i));
    return new Hf$jscomp$0(p);
  }
  /**
   * @param {?} p
   * @param {string} a
   * @param {!Object} b
   * @return {?}
   */
  function Kf$jscomp$0(p, a, b) {
    var y = p;
    Fb$jscomp$0(b, function(d, f) {
      y = Jf$jscomp$0(y, a.o(d), f);
    });
    return y;
  }
  /**
   * @param {!Function} val
   * @param {!Object} key
   * @return {?}
   */
  function Lf$jscomp$0(val, key) {
    var s = uf$jscomp$0(val.Z, key);
    return null != s ? val.Z.get(s.path).S(lf$jscomp$0(s.path, key)) : null;
  }
  /**
   * @param {?} self
   * @return {?}
   */
  function Mf$jscomp$0(self) {
    /** @type {!Array} */
    var markers = [];
    var p = self.Z.value;
    if (null != p) {
      if (!p.L()) {
        p.R(R$jscomp$2, function(id, map) {
          markers.push(new L$jscomp$3(id, map));
        });
      }
    } else {
      self.Z.children.ka(function(id, a) {
        if (null != a.value) {
          markers.push(new L$jscomp$3(id, a.value));
        }
      });
    }
    return markers;
  }
  /**
   * @param {!Function} object
   * @param {string} value
   * @return {?}
   */
  function Nf$jscomp$0(object, value) {
    if (value.e()) {
      return object;
    }
    var tween = Lf$jscomp$0(object, value);
    return null != tween ? new Hf$jscomp$0(new qf$jscomp$0(tween)) : new Hf$jscomp$0(object.Z.subtree(value));
  }
  /**
   * @param {!Object} x
   * @param {!Object} type
   * @param {!Object} item
   * @return {?}
   */
  function Of$jscomp$0(x, type, item) {
    if (null != type.value) {
      return item.H(x, type.value);
    }
    /** @type {null} */
    var i = null;
    type.children.ka(function(d, value) {
      if (".priority" === d) {
        O$jscomp$3(null !== value.value, "Priority writes must always be leaf nodes");
        i = value.value;
      } else {
        item = Of$jscomp$0(x.o(d), value, item);
      }
    });
    if (!(item.S(x).e() || null === i)) {
      item = item.H(x.o(".priority"), i);
    }
    return item;
  }
  /**
   * @return {undefined}
   */
  function Pf$jscomp$0() {
    this.V = If$jscomp$0;
    /** @type {!Array} */
    this.pa = [];
    /** @type {number} */
    this.Pc = -1;
  }
  /**
   * @param {!Object} data
   * @param {number} all
   * @return {?}
   */
  function Qf$jscomp$0(data, all) {
    /** @type {number} */
    var i = 0;
    for (; i < data.pa.length; i++) {
      var repo = data.pa[i];
      if (repo.md === all) {
        return repo;
      }
    }
    return null;
  }
  /**
   * @param {!Object} result
   * @param {undefined} value
   * @return {?}
   */
  function Rf$jscomp$0(result, value) {
    return result.Ja ? result.path.contains(value) : !!ta$jscomp$0(result.children, function(canCreateDiscussions, i) {
      return result.path.o(i).contains(value);
    });
  }
  /**
   * @param {!Object} oPresentationNode
   * @return {?}
   */
  function Tf$jscomp$0(oPresentationNode) {
    return oPresentationNode.visible;
  }
  /**
   * @param {!NodeList} p
   * @param {!Function} f
   * @param {string} c
   * @return {?}
   */
  function Sf$jscomp$0(p, f, c) {
    var ret = If$jscomp$0;
    /** @type {number} */
    var i = 0;
    for (; i < p.length; ++i) {
      var item = p[i];
      if (f(item)) {
        var a = item.path;
        if (item.Ja) {
          if (c.contains(a)) {
            a = lf$jscomp$0(c, a);
            ret = Jf$jscomp$0(ret, a, item.Ja);
          } else {
            if (a.contains(c)) {
              a = lf$jscomp$0(a, c);
              ret = Jf$jscomp$0(ret, M$jscomp$2, item.Ja.S(a));
            }
          }
        } else {
          if (item.children) {
            if (c.contains(a)) {
              a = lf$jscomp$0(c, a);
              ret = Kf$jscomp$0(ret, a, item.children);
            } else {
              if (a.contains(c)) {
                if (a = lf$jscomp$0(a, c), a.e()) {
                  ret = Kf$jscomp$0(ret, M$jscomp$2, item.children);
                } else {
                  if (item = z$jscomp$13(item.children, K$jscomp$2(a))) {
                    item = item.S(N$jscomp$3(a));
                    ret = Jf$jscomp$0(ret, M$jscomp$2, item);
                  }
                }
              }
            }
          } else {
            throw jd$jscomp$0("WriteRecord should have .snap or .children");
          }
        }
      }
    }
    return ret;
  }
  /**
   * @param {!Object} a
   * @param {string} b
   * @return {undefined}
   */
  function Uf$jscomp$0(a, b) {
    /** @type {!Object} */
    this.Qb = a;
    /** @type {string} */
    this.Z = b;
  }
  /**
   * @return {undefined}
   */
  function Vf$jscomp$0() {
    this.children = {};
    /** @type {number} */
    this.pd = 0;
    /** @type {null} */
    this.value = null;
  }
  /**
   * @param {string} g
   * @param {!Object} type
   * @param {string} is_capturing
   * @return {undefined}
   */
  function Wf$jscomp$0(g, type, is_capturing) {
    this.Jd = g ? g : "";
    this.Ha = type ? type : null;
    this.A = is_capturing ? is_capturing : new Vf$jscomp$0;
  }
  /**
   * @param {?} context
   * @param {string} x
   * @return {?}
   */
  function Xf$jscomp$0(context, x) {
    var a = x instanceof P$jscomp$3 ? x : new P$jscomp$3(x);
    var scope = context;
    var node;
    for (; null !== (node = K$jscomp$2(a));) {
      scope = new Wf$jscomp$0(node, scope, z$jscomp$13(scope.A.children, node) || new Vf$jscomp$0);
      a = N$jscomp$3(a);
    }
    return scope;
  }
  /**
   * @param {!Object} s
   * @param {!Object} result
   * @return {undefined}
   */
  function Yf$jscomp$0(s, result) {
    O$jscomp$3("undefined" !== typeof result, "Cannot set value to undefined");
    /** @type {!Object} */
    s.A.value = result;
    Zf$jscomp$0(s);
  }
  /**
   * @param {!Object} e
   * @param {!Function} $
   * @param {boolean} name
   * @param {boolean} deps
   * @return {undefined}
   */
  function $f$jscomp$0(e, $, name, deps) {
    if (name && !deps) {
      $(e);
    }
    e.R(function(id) {
      $f$jscomp$0(id, $, true, deps);
    });
    if (name && deps) {
      $(e);
    }
  }
  /**
   * @param {?} c
   * @param {!Function} f
   * @return {undefined}
   */
  function ag$jscomp$0(c, f) {
    var surface = c.parent();
    for (; null !== surface && !f(surface);) {
      surface = surface.parent();
    }
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function Zf$jscomp$0(a) {
    if (null !== a.Ha) {
      var c = a.Ha;
      var i = a.Jd;
      var excludeSynced = a.e();
      var excludeNotSynced = y$jscomp$63(c.A.children, i);
      if (excludeSynced && excludeNotSynced) {
        delete c.A.children[i];
        c.A.pd--;
        Zf$jscomp$0(c);
      } else {
        if (!(excludeSynced || excludeNotSynced)) {
          c.A.children[i] = a.A;
          c.A.pd++;
          Zf$jscomp$0(c);
        }
      }
    }
  }
  /**
   * @param {string} d
   * @return {?}
   */
  function eg$jscomp$0(d) {
    return q$jscomp$3(d) && 0 !== d.length && !bg$jscomp$0.test(d);
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function fg$jscomp$0(a) {
    return null === a || q$jscomp$3(a) || fa$jscomp$0(a) && !td$jscomp$0(a) || ga$jscomp$0(a) && y$jscomp$63(a, ".sv");
  }
  /**
   * @param {string} a
   * @param {!Object} b
   * @param {?} c
   * @param {boolean} s
   * @return {undefined}
   */
  function gg$jscomp$0(a, b, c, s) {
    if (!(s && !p$jscomp$13(b))) {
      hg$jscomp$0(E$jscomp$3(a, 1, s), b, c);
    }
  }
  /**
   * @param {string} z
   * @param {string} data
   * @param {?} x
   * @return {undefined}
   */
  function hg$jscomp$0(z, data, x) {
    if (x instanceof P$jscomp$3) {
      x = new nf$jscomp$0(x, z);
    }
    if (!p$jscomp$13(data)) {
      throw Error(z + "contains undefined " + pf$jscomp$0(x));
    }
    if (r$jscomp$201(data)) {
      throw Error(z + "contains a function " + pf$jscomp$0(x) + " with contents: " + data.toString());
    }
    if (td$jscomp$0(data)) {
      throw Error(z + "contains " + data.toString() + " " + pf$jscomp$0(x));
    }
    if (q$jscomp$3(data) && data.length > 10485760 / 3 && 10485760 < Pb$jscomp$0(data)) {
      throw Error(z + "contains a string greater than 10485760 utf8 bytes " + pf$jscomp$0(x) + " ('" + data.substring(0, 50) + "...')");
    }
    if (ga$jscomp$0(data)) {
      /** @type {boolean} */
      var d = false;
      /** @type {boolean} */
      var forceNew = false;
      Fb$jscomp$0(data, function(a, testItemData) {
        if (".value" === a) {
          /** @type {boolean} */
          d = true;
        } else {
          if (".priority" !== a && ".sv" !== a && (forceNew = true, !eg$jscomp$0(a))) {
            throw Error(z + " contains an invalid key (" + a + ") " + pf$jscomp$0(x) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
          }
        }
        x.push(a);
        hg$jscomp$0(z, testItemData, x);
        x.pop();
      });
      if (d && forceNew) {
        throw Error(z + ' contains ".value" child ' + pf$jscomp$0(x) + " in addition to actual children.");
      }
    }
  }
  /**
   * @param {string} s
   * @param {!Array} p
   * @return {undefined}
   */
  function ig$jscomp$0(s, p) {
    var i;
    var b;
    /** @type {number} */
    i = 0;
    for (; i < p.length; i++) {
      b = p[i];
      var a = b.slice();
      /** @type {number} */
      var j = 0;
      for (; j < a.length; j++) {
        if ((".priority" !== a[j] || j !== a.length - 1) && !eg$jscomp$0(a[j])) {
          throw Error(s + "contains an invalid key (" + a[j] + ") in path " + b.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
      }
    }
    p.sort(mf$jscomp$0);
    /** @type {null} */
    a = null;
    /** @type {number} */
    i = 0;
    for (; i < p.length; i++) {
      b = p[i];
      if (null !== a && a.contains(b)) {
        throw Error(s + "contains a path " + a.toString() + " that is ancestor of another path " + b.toString());
      }
      a = b;
    }
  }
  /**
   * @param {string} d
   * @param {!Object} options
   * @param {!Object} shape
   * @return {undefined}
   */
  function jg$jscomp$0(d, options, shape) {
    var html = E$jscomp$3(d, 1, false);
    if (!ga$jscomp$0(options) || da$jscomp$0(options)) {
      throw Error(html + " must be an object containing the children to replace.");
    }
    /** @type {!Array} */
    var e = [];
    Fb$jscomp$0(options, function(filePath, dataRendered) {
      var p = new P$jscomp$3(filePath);
      hg$jscomp$0(html, dataRendered, shape.o(p));
      if (".priority" === me$jscomp$2(p) && !fg$jscomp$0(dataRendered)) {
        throw Error(html + "contains an invalid value for '" + p.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
      }
      e.push(p);
    });
    ig$jscomp$0(html, e);
  }
  /**
   * @param {string} input
   * @param {number} options
   * @param {!Object} key
   * @return {undefined}
   */
  function kg$jscomp$0(input, options, key) {
    if (td$jscomp$0(key)) {
      throw Error(E$jscomp$3(input, options, false) + "is " + key.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
    }
    if (!fg$jscomp$0(key)) {
      throw Error(E$jscomp$3(input, options, false) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
    }
  }
  /**
   * @param {string} d
   * @param {string} event
   * @param {boolean} data
   * @return {undefined}
   */
  function lg$jscomp$0(d, event, data) {
    if (!data || p$jscomp$13(event)) {
      switch(event) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
          break;
        default:
          throw Error(E$jscomp$3(d, 1, data) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
      }
    }
  }
  /**
   * @param {string} f
   * @param {string} a
   * @return {undefined}
   */
  function mg$jscomp$0(f, a) {
    if (p$jscomp$13(a) && !eg$jscomp$0(a)) {
      throw Error(E$jscomp$3(f, 2, true) + 'was an invalid key: "' + a + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }
  }
  /**
   * @param {string} e
   * @param {string} name
   * @return {undefined}
   */
  function ng$jscomp$0(e, name) {
    if (!q$jscomp$3(name) || 0 === name.length || cg$jscomp$0.test(name)) {
      throw Error(E$jscomp$3(e, 1, false) + 'was an invalid path: "' + name + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }
  }
  /**
   * @param {string} name
   * @param {!Object} val
   * @return {undefined}
   */
  function og$jscomp$0(name, val) {
    if (".info" === K$jscomp$2(val)) {
      throw Error(name + " failed: Can't modify data under /.info/");
    }
  }
  /**
   * @param {string} context
   * @param {!Object} options
   * @return {undefined}
   */
  function pg$jscomp$0(context, options) {
    if (!q$jscomp$3(options)) {
      throw Error(E$jscomp$3(context, 1, false) + "must be a valid credential (a string).");
    }
  }
  /**
   * @param {string} a
   * @param {number} b
   * @param {string} dir
   * @return {undefined}
   */
  function qg$jscomp$0(a, b, dir) {
    if (!q$jscomp$3(dir)) {
      throw Error(E$jscomp$3(a, b, false) + "must be a valid string.");
    }
  }
  /**
   * @param {string} t
   * @param {string} a
   * @return {undefined}
   */
  function rg$jscomp$0(t, a) {
    qg$jscomp$0(t, 1, a);
    if (!dg$jscomp$0.test(a)) {
      throw Error(E$jscomp$3(t, 1, false) + "'" + a + "' is not a valid authentication provider.");
    }
  }
  /**
   * @param {string} a
   * @param {number} b
   * @param {!Object} h
   * @param {boolean} i
   * @return {undefined}
   */
  function sg$jscomp$0(a, b, h, i) {
    if (!i || p$jscomp$13(h)) {
      if (!ga$jscomp$0(h) || null === h) {
        throw Error(E$jscomp$3(a, b, i) + "must be a valid object.");
      }
    }
  }
  /**
   * @param {string} t
   * @param {!Object} d
   * @param {string} attribute
   * @return {undefined}
   */
  function tg$jscomp$0(t, d, attribute) {
    if (!ga$jscomp$0(d) || !y$jscomp$63(d, attribute)) {
      throw Error(E$jscomp$3(t, 1, false) + 'must contain the key "' + attribute + '"');
    }
    if (!q$jscomp$3(z$jscomp$13(d, attribute))) {
      throw Error(E$jscomp$3(t, 1, false) + 'must contain the key "' + attribute + '" with type "string"');
    }
  }
  /**
   * @return {undefined}
   */
  function ug$jscomp$0() {
    this.set = {};
  }
  /**
   * @param {!Object} message
   * @param {!Function} e
   * @return {undefined}
   */
  function vg$jscomp$0(message, e) {
    v$jscomp$5(message.set, function(n, context) {
      e(context, n);
    });
  }
  /**
   * @return {undefined}
   */
  function Vc$jscomp$0() {
    /** @type {null} */
    this.m = this.B = null;
  }
  /**
   * @param {!Object} a
   * @param {!Object} parent
   * @return {?}
   */
  function wg$jscomp$0(a, parent) {
    if (parent.e()) {
      return a.B = null, a.m = null, true;
    }
    if (null !== a.B) {
      if (a.B.L()) {
        return false;
      }
      var node = a.B;
      /** @type {null} */
      a.B = null;
      node.R(R$jscomp$2, function(x, options) {
        a.rc(new P$jscomp$3(x), options);
      });
      return wg$jscomp$0(a, parent);
    }
    return null !== a.m ? (node = K$jscomp$2(parent), parent = N$jscomp$3(parent), a.m.contains(node) && wg$jscomp$0(a.m.get(node), parent) && a.m.remove(node), a.m.e() ? (a.m = null, true) : false) : true;
  }
  /**
   * @param {!Object} m
   * @param {string} a
   * @param {!Function} f
   * @return {undefined}
   */
  function Wc$jscomp$0(m, a, f) {
    if (null !== m.B) {
      f(a, m.B);
    } else {
      m.R(function(id_article, column_reordering_1_1) {
        var post = new P$jscomp$3(a.toString() + "/" + id_article);
        Wc$jscomp$0(column_reordering_1_1, post, f);
      });
    }
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {!Object} variableNames
   * @return {undefined}
   */
  function yg$jscomp$0(a, b, variableNames) {
    this.qd = a || {};
    this.he = b || {};
    this.fb = variableNames || {};
    if (!this.qd.remember) {
      /** @type {string} */
      this.qd.remember = "default";
    }
  }
  /**
   * @param {!Object} arg1
   * @return {?}
   */
  function Ag$jscomp$0(arg1) {
    var oldSortOrder = {};
    var indexByPlot = {};
    Fb$jscomp$0(arg1 || {}, function(b, i) {
      if (0 <= La$jscomp$0(zg$jscomp$0, b)) {
        oldSortOrder[b] = i;
      } else {
        indexByPlot[b] = i;
      }
    });
    return new yg$jscomp$0(oldSortOrder, {}, indexByPlot);
  }
  /**
   * @param {?} img
   * @param {(Array|HTMLCanvasElement|HTMLImageElement|string)} x
   * @return {undefined}
   */
  function Bg$jscomp$0(img, x) {
    /** @type {string} */
    this.Ue = ["session", img.Rd, img.lc].join(":");
    /** @type {(Array|HTMLCanvasElement|HTMLImageElement|string)} */
    this.ee = x;
  }
  /**
   * @return {?}
   */
  function Cg$jscomp$0() {
    return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : "";
  }
  /**
   * @return {?}
   */
  function Dg$jscomp$0() {
    return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg$jscomp$0());
  }
  /**
   * @return {?}
   */
  function Eg$jscomp$0() {
    return "undefined" !== typeof location && /^file:\//.test(location.href);
  }
  /**
   * @param {number} min
   * @return {?}
   */
  function Fg$jscomp$0(min) {
    var val = Cg$jscomp$0();
    if ("" === val) {
      return false;
    }
    if ("Microsoft Internet Explorer" === navigator.appName) {
      if ((val = val.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < val.length) {
        return parseFloat(val[1]) >= min;
      }
    } else {
      if (-1 < val.indexOf("Trident") && (val = val.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < val.length) {
        return parseFloat(val[1]) >= min;
      }
    }
    return false;
  }
  /**
   * @return {?}
   */
  function Gg$jscomp$0() {
    /** @type {(Object|null)} */
    var frames = window.opener.frames;
    var i;
    /** @type {number} */
    i = frames.length - 1;
    for (; 0 <= i; i--) {
      try {
        if (frames[i].location.protocol === window.location.protocol && frames[i].location.host === window.location.host && "__winchan_relay_frame" === frames[i].name) {
          return frames[i];
        }
      } catch (c) {
      }
    }
    return null;
  }
  /**
   * @param {!Object} elem
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function Hg$jscomp$0(elem, type, fn) {
    if (elem.attachEvent) {
      elem.attachEvent("on" + type, fn);
    } else {
      if (elem.addEventListener) {
        elem.addEventListener(type, fn, false);
      }
    }
  }
  /**
   * @param {!Object} elem
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function Ig$jscomp$0(elem, type, fn) {
    if (elem.detachEvent) {
      elem.detachEvent("on" + type, fn);
    } else {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, fn, false);
      }
    }
  }
  /**
   * @param {string} i
   * @return {?}
   */
  function Jg$jscomp$0(i) {
    if (!/^https?:\/\//.test(i)) {
      /** @type {string} */
      i = window.location.href;
    }
    /** @type {(Array<string>|null)} */
    var temp = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(i);
    return temp ? temp[1] : i;
  }
  /**
   * @param {string} aDraggedText
   * @return {?}
   */
  function Kg$jscomp$0(aDraggedText) {
    /** @type {string} */
    var np = "";
    try {
      aDraggedText = aDraggedText.replace(/.*\?/, "");
      var p = Jb$jscomp$0(aDraggedText);
      if (p && y$jscomp$63(p, "__firebase_request_key")) {
        np = z$jscomp$13(p, "__firebase_request_key");
      }
    } catch (d) {
    }
    return np;
  }
  /**
   * @return {undefined}
   */
  function Lg$jscomp$0() {
    try {
      /** @type {string} */
      var url = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "");
      /** @type {string} */
      url = url.replace(/\?$/, "");
      /** @type {string} */
      url = url.replace(/^#+$/, "");
      /** @type {string} */
      document.location.hash = url;
    } catch (b) {
    }
  }
  /**
   * @return {?}
   */
  function Mg$jscomp$0() {
    var regularSchema = sd$jscomp$0(xg$jscomp$0);
    return regularSchema.scheme + "://" + regularSchema.host + "/v2";
  }
  /**
   * @param {string} id_article
   * @return {?}
   */
  function Ng$jscomp$0(id_article) {
    return Mg$jscomp$0() + "/" + id_article + "/auth/channel";
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function Og$jscomp$0(a) {
    var modelWithColumnsWidth = this;
    /** @type {!Object} */
    this.hb = a;
    /** @type {string} */
    this.fe = "*";
    if (Fg$jscomp$0(8)) {
      this.Uc = this.Cd = Gg$jscomp$0();
    } else {
      /** @type {(Window|null)} */
      this.Uc = window.opener;
      /** @type {!Window} */
      this.Cd = window;
    }
    if (!modelWithColumnsWidth.Uc) {
      throw "Unable to find relay frame";
    }
    Hg$jscomp$0(this.Cd, "message", u$jscomp$22(this.nc, this));
    Hg$jscomp$0(this.Cd, "message", u$jscomp$22(this.Ff, this));
    try {
      Pg$jscomp$0(this, {
        a : "ready"
      });
    } catch (c) {
      Hg$jscomp$0(this.Uc, "load", function() {
        Pg$jscomp$0(modelWithColumnsWidth, {
          a : "ready"
        });
      });
    }
    Hg$jscomp$0(window, "unload", u$jscomp$22(this.Ng, this));
  }
  /**
   * @param {?} model
   * @param {string} url
   * @return {undefined}
   */
  function Pg$jscomp$0(model, url) {
    url = G$jscomp$2(url);
    if (Fg$jscomp$0(8)) {
      model.Uc.doPost(url, model.fe);
    } else {
      model.Uc.postMessage(url, model.fe);
    }
  }
  /**
   * @param {?} a
   * @return {undefined}
   */
  function Qg$jscomp$0(a) {
    this.tc = Fa$jscomp$0() + Fa$jscomp$0() + Fa$jscomp$0();
    this.Kf = a;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function Sg$jscomp$0(type) {
    /** @type {!Error} */
    var e = Error(z$jscomp$13(Rg$jscomp$0, type), type);
    /** @type {string} */
    e.code = type;
    return e;
  }
  /**
   * @param {!Object} opts
   * @return {undefined}
   */
  function Tg$jscomp$0(opts) {
    var userAgent;
    if (!(userAgent = !opts.window_features)) {
      userAgent = Cg$jscomp$0();
      /** @type {boolean} */
      userAgent = -1 !== userAgent.indexOf("Fennec/") || -1 !== userAgent.indexOf("Firefox/") && -1 !== userAgent.indexOf("Android");
    }
    if (userAgent) {
      opts.window_features = void 0;
    }
    if (!opts.window_name) {
      /** @type {string} */
      opts.window_name = "_blank";
    }
    /** @type {!Object} */
    this.options = opts;
  }
  /**
   * @param {!Object} args
   * @return {undefined}
   */
  function Ug$jscomp$0(args) {
    if (!args.method) {
      /** @type {string} */
      args.method = "GET";
    }
    if (!args.headers) {
      args.headers = {};
    }
    if (!args.headers.content_type) {
      /** @type {string} */
      args.headers.content_type = "application/json";
    }
    args.headers.content_type = args.headers.content_type.toLowerCase();
    /** @type {!Object} */
    this.options = args;
  }
  /**
   * @param {?} a
   * @return {undefined}
   */
  function Vg$jscomp$0(a) {
    this.tc = Fa$jscomp$0() + Fa$jscomp$0() + Fa$jscomp$0();
    this.Kf = a;
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function Wg$jscomp$0(options) {
    if (!options.callback_parameter) {
      /** @type {string} */
      options.callback_parameter = "callback";
    }
    /** @type {!Object} */
    this.options = options;
    window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {};
  }
  /**
   * @param {string} node
   * @param {string} a
   * @param {string} fn
   * @return {undefined}
   */
  function Xg$jscomp$0(node, a, fn) {
    setTimeout(function() {
      try {
        /** @type {!Element} */
        var el = document.createElement("script");
        /** @type {string} */
        el.type = "text/javascript";
        /** @type {string} */
        el.id = node;
        /** @type {boolean} */
        el.async = true;
        /** @type {string} */
        el.src = a;
        /**
         * @return {undefined}
         */
        el.onerror = function() {
          /** @type {(Element|null)} */
          var sc = document.getElementById(node);
          if (null !== sc) {
            sc.parentNode.removeChild(sc);
          }
          if (fn) {
            fn(Sg$jscomp$0("NETWORK_ERROR"));
          }
        };
        /** @type {!NodeList<Element>} */
        var bodies = document.getElementsByTagName("head");
        (bodies && 0 != bodies.length ? bodies[0] : document.documentElement).appendChild(el);
      } catch (f) {
        if (fn) {
          fn(Sg$jscomp$0("NETWORK_ERROR"));
        }
      }
    }, 0);
  }
  /**
   * @param {string} g
   * @param {?} data
   * @param {?} linkedEntities
   * @param {(RegExp|string)} force
   * @return {undefined}
   */
  function Yg$jscomp$0(g, data, linkedEntities, force) {
    ff$jscomp$0.call(this, ["auth_status"]);
    /** @type {string} */
    this.G = g;
    this.hf = data;
    this.ih = linkedEntities;
    /** @type {(RegExp|string)} */
    this.Pe = force;
    this.wc = new Bg$jscomp$0(g, [bd$jscomp$0, cd$jscomp$0]);
    /** @type {null} */
    this.qb = null;
    /** @type {boolean} */
    this.We = false;
    Zg$jscomp$0(this);
  }
  /**
   * @param {undefined} value
   * @return {undefined}
   */
  function Zg$jscomp$0(value) {
    if (cd$jscomp$0.get("redirect_request_id")) {
      $g$jscomp$0(value);
    }
    var obj = value.wc.get();
    if (obj && obj.token) {
      ah$jscomp$0(value, obj);
      value.hf(obj.token, function(testItemData, childCompute) {
        bh$jscomp$0(value, testItemData, childCompute, false, obj.token, obj);
      }, function(g, bbls) {
        ch$jscomp$0(value, "resumeSession()", g, bbls);
      });
    } else {
      ah$jscomp$0(value, null);
    }
  }
  /**
   * @param {!Object} args
   * @param {!Object} callback
   * @param {!Object} target
   * @param {number} n
   * @param {!Function} id
   * @param {!Function} attachmentName
   * @return {undefined}
   */
  function dh$jscomp$0(args, callback, target, n, id, attachmentName) {
    if ("firebaseio-demo.com" === args.G.domain) {
      S$jscomp$3("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");
    }
    args.hf(callback, function(testItemData, childCompute) {
      bh$jscomp$0(args, testItemData, childCompute, true, callback, target, n || {}, id);
    }, function(g, bbls) {
      ch$jscomp$0(args, "auth()", g, bbls, attachmentName);
    });
  }
  /**
   * @param {!Object} opts
   * @param {!Function} b
   * @return {undefined}
   */
  function eh$jscomp$0(opts, b) {
    opts.wc.clear();
    ah$jscomp$0(opts, null);
    opts.ih(function(type, url) {
      if ("ok" === type) {
        T$jscomp$3(b, null);
      } else {
        var code = (type || "error").toUpperCase();
        var error = code;
        if (url) {
          /** @type {string} */
          error = error + (": " + url);
        }
        /** @type {!Error} */
        error = Error(error);
        error.code = code;
        T$jscomp$3(b, error);
      }
    });
  }
  /**
   * @param {string} result
   * @param {!Object} data
   * @param {string} value
   * @param {boolean} _
   * @param {(Object|string)} x
   * @param {!Object} s
   * @param {!Object} config
   * @param {!Function} $
   * @return {undefined}
   */
  function bh$jscomp$0(result, data, value, _, x, s, config, $) {
    if ("ok" === data) {
      if (_) {
        data = value.auth;
        /** @type {!Object} */
        s.auth = data;
        s.expires = value.expires;
        s.token = Ed$jscomp$0(x) ? x : "";
        /** @type {null} */
        value = null;
        if (data && y$jscomp$63(data, "uid")) {
          value = z$jscomp$13(data, "uid");
        } else {
          if (y$jscomp$63(s, "uid")) {
            value = z$jscomp$13(s, "uid");
          }
        }
        /** @type {string} */
        s.uid = value;
        /** @type {string} */
        value = "custom";
        if (data && y$jscomp$63(data, "provider")) {
          value = z$jscomp$13(data, "provider");
        } else {
          if (y$jscomp$63(s, "provider")) {
            value = z$jscomp$13(s, "provider");
          }
        }
        /** @type {string} */
        s.provider = value;
        result.wc.clear();
        if (Ed$jscomp$0(x)) {
          config = config || {};
          value = bd$jscomp$0;
          if ("sessionOnly" === config.remember) {
            value = cd$jscomp$0;
          }
          if ("none" !== config.remember) {
            result.wc.set(s, value);
          }
        }
        ah$jscomp$0(result, s);
      }
      T$jscomp$3($, null, s);
    } else {
      result.wc.clear();
      ah$jscomp$0(result, null);
      s = result = (data || "error").toUpperCase();
      if (value) {
        /** @type {string} */
        s = s + (": " + value);
      }
      /** @type {!Error} */
      s = Error(s);
      /** @type {string} */
      s.code = result;
      T$jscomp$3($, s);
    }
  }
  /**
   * @param {!Object} e
   * @param {string} el
   * @param {string} context
   * @param {string} message
   * @param {!Function} value
   * @return {undefined}
   */
  function ch$jscomp$0(e, el, context, message, value) {
    S$jscomp$3(el + " was canceled: " + message);
    e.wc.clear();
    ah$jscomp$0(e, null);
    /** @type {!Error} */
    e = Error(message);
    e.code = context.toUpperCase();
    T$jscomp$3(value, e);
  }
  /**
   * @param {!Object} b
   * @param {string} name
   * @param {!Object} str
   * @param {!Object} event
   * @param {!Function} torrentGroup
   * @return {undefined}
   */
  function fh$jscomp$0(b, name, str, event, torrentGroup) {
    gh$jscomp$0(b);
    str = new yg$jscomp$0(event || {}, {}, str || {});
    hh$jscomp$0(b, [Ug$jscomp$0, Wg$jscomp$0], "/auth/" + name, str, torrentGroup);
  }
  /**
   * @param {!Object} data
   * @param {string} ch
   * @param {!Object} hash
   * @param {!Function} index
   * @return {undefined}
   */
  function ih$jscomp$0(data, ch, hash, index) {
    gh$jscomp$0(data);
    /** @type {!Array} */
    var c = [Tg$jscomp$0, Vg$jscomp$0];
    hash = Ag$jscomp$0(hash);
    /** @type {number} */
    var width = 625;
    if ("anonymous" === ch || "password" === ch) {
      setTimeout(function() {
        T$jscomp$3(index, Sg$jscomp$0("TRANSPORT_UNAVAILABLE"));
      }, 0);
    } else {
      if ("github" === ch) {
        /** @type {number} */
        width = 1025;
      }
      /** @type {string} */
      hash.he.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=" + width + ",top=" + ("object" === typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" === typeof screen ? .5 * (screen.width - width) : 0);
      hash.he.relay_url = Ng$jscomp$0(data.G.lc);
      hash.he.requestWithCredential = u$jscomp$22(data.uc, data);
      hh$jscomp$0(data, c, "/auth/" + ch, hash, index);
    }
  }
  /**
   * @param {string} a
   * @return {undefined}
   */
  function $g$jscomp$0(a) {
    var b = cd$jscomp$0.get("redirect_request_id");
    if (b) {
      var c = cd$jscomp$0.get("redirect_client_options");
      cd$jscomp$0.remove("redirect_request_id");
      cd$jscomp$0.remove("redirect_client_options");
      /** @type {!Array} */
      var d = [Ug$jscomp$0, Wg$jscomp$0];
      b = {
        requestId : b,
        requestKey : Kg$jscomp$0(document.location.hash)
      };
      c = new yg$jscomp$0(c, {}, b);
      /** @type {boolean} */
      a.We = true;
      Lg$jscomp$0();
      hh$jscomp$0(a, d, "/auth/session", c, function() {
        /** @type {boolean} */
        this.We = false;
      }.bind(a));
    }
  }
  /**
   * @param {!Object} d
   * @param {!Array} v
   * @param {string} key
   * @param {!Object} x
   * @param {!Function} text
   * @return {undefined}
   */
  function hh$jscomp$0(d, v, key, x, text) {
    jh$jscomp$0(d, v, key, x, function(cmp, t) {
      if (!cmp && t && t.token && t.uid) {
        dh$jscomp$0(d, t.token, t, x.qd, function(a, name) {
          if (a) {
            T$jscomp$3(text, a);
          } else {
            T$jscomp$3(text, null, name);
          }
        });
      } else {
        T$jscomp$3(text, cmp || Sg$jscomp$0("UNKNOWN_ERROR"));
      }
    });
  }
  /**
   * @param {!Object} data
   * @param {!Object} params
   * @param {string} name
   * @param {!Object} res
   * @param {!Function} e
   * @return {undefined}
   */
  function jh$jscomp$0(data, params, name, res, e) {
    params = Na$jscomp$0(params, function(BarcodeScannerService) {
      return "function" === typeof BarcodeScannerService.isAvailable && BarcodeScannerService.isAvailable();
    });
    if (0 === params.length) {
      setTimeout(function() {
        T$jscomp$3(e, Sg$jscomp$0("TRANSPORT_UNAVAILABLE"));
      }, 0);
    } else {
      params = new (params.shift())(res.he);
      res = Gb$jscomp$0(res.fb);
      /** @type {string} */
      res.v = "js-" + Eb$jscomp$0;
      res.transport = params.Fc();
      /** @type {boolean} */
      res.suppress_status_codes = true;
      /** @type {string} */
      data = Mg$jscomp$0() + "/" + data.G.lc + name;
      params.open(data, res, function(compiledClientFn, data) {
        if (compiledClientFn) {
          T$jscomp$3(e, compiledClientFn);
        } else {
          if (data && data.error) {
            /** @type {!Error} */
            var err = Error(data.error.message);
            err.code = data.error.code;
            err.details = data.error.details;
            T$jscomp$3(e, err);
          } else {
            T$jscomp$3(e, null, data);
          }
        }
      });
    }
  }
  /**
   * @param {!Object} o
   * @param {!Object} source
   * @return {undefined}
   */
  function ah$jscomp$0(o, source) {
    /** @type {boolean} */
    var c = null !== o.qb || null !== source;
    /** @type {!Object} */
    o.qb = source;
    if (c) {
      o.ie("auth_status", source);
    }
    o.Pe(null !== source);
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function gh$jscomp$0(data) {
    var b = data.G;
    if ("firebaseio.com" !== b.domain && "firebaseio-demo.com" !== b.domain && "auth.firebase.com" === xg$jscomp$0) {
      throw Error("This custom Firebase server ('" + data.G.domain + "') does not support delegated login.");
    }
  }
  /**
   * @param {(RegExp|string)} nc
   * @return {undefined}
   */
  function kh$jscomp$0(nc) {
    /** @type {(RegExp|string)} */
    this.nc = nc;
    /** @type {!Array} */
    this.Qd = [];
    /** @type {number} */
    this.Wb = 0;
    /** @type {number} */
    this.te = -1;
    /** @type {null} */
    this.Jb = null;
  }
  /**
   * @param {?} s
   * @param {string} px
   * @param {!Function} text
   * @return {undefined}
   */
  function lh$jscomp$0(s, px, text) {
    /** @type {string} */
    s.te = px;
    /** @type {!Function} */
    s.Jb = text;
    if (s.te < s.Wb) {
      s.Jb();
      /** @type {null} */
      s.Jb = null;
    }
  }
  /**
   * @param {string} state
   * @param {?} field
   * @param {?} values
   * @return {undefined}
   */
  function mh$jscomp$0(state, field, values) {
    state.Qd[field] = values;
    for (; state.Qd[state.Wb];) {
      var array = state.Qd[state.Wb];
      delete state.Qd[state.Wb];
      /** @type {number} */
      var i = 0;
      for (; i < array.length; ++i) {
        if (array[i]) {
          /** @type {string} */
          var params = state;
          gc$jscomp$0(function() {
            params.nc(array[i]);
          });
        }
      }
      if (state.Wb === state.te) {
        if (state.Jb) {
          clearTimeout(state.Jb);
          state.Jb();
          /** @type {null} */
          state.Jb = null;
        }
        break;
      }
      state.Wb++;
    }
  }
  /**
   * @param {string} date
   * @param {undefined} y
   * @param {string} updPx
   * @param {!Function} noPub
   * @return {undefined}
   */
  function nh$jscomp$0(date, y, updPx, noPub) {
    /** @type {string} */
    this.ue = date;
    this.f = pd$jscomp$0(date);
    /** @type {number} */
    this.rb = this.sb = 0;
    this.Xa = uc$jscomp$0(y);
    /** @type {string} */
    this.Xf = updPx;
    /** @type {boolean} */
    this.Kc = false;
    /** @type {!Function} */
    this.Fb = noPub;
    /**
     * @param {!Object} func
     * @return {?}
     */
    this.ld = function(func) {
      return fd$jscomp$0(y, hd$jscomp$0, func);
    };
  }
  /**
   * @param {?} self
   * @param {!Array} a
   * @return {undefined}
   */
  function rh$jscomp$0(self, a) {
    var n = G$jscomp$2(a).length;
    self.rb += n;
    rc$jscomp$0(self.Xa, "bytes_received", n);
  }
  /**
   * @param {!Object} f
   * @param {?} a
   * @param {string} lb
   * @param {string} newHalfedge
   * @return {undefined}
   */
  function qh$jscomp$0(f, a, lb, newHalfedge) {
    /** @type {string} */
    this.ld = newHalfedge;
    /** @type {string} */
    this.lb = lb;
    this.Te = new ug$jscomp$0;
    /** @type {!Array} */
    this.cd = [];
    /** @type {number} */
    this.we = Math.floor(1E8 * Math.random());
    /** @type {boolean} */
    this.$d = true;
    this.ke = id$jscomp$5();
    /** @type {!Object} */
    window["pLPCommand" + this.ke] = f;
    window["pRTLPCB" + this.ke] = a;
    /** @type {!Element} */
    f = document.createElement("iframe");
    /** @type {string} */
    f.style.display = "none";
    if (document.body) {
      document.body.appendChild(f);
      try {
        if (!f.contentWindow.document) {
          fc$jscomp$0("No IE domain setting required");
        }
      } catch (e) {
        /** @type {string} */
        f.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())";
      }
    } else {
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    }
    if (f.contentDocument) {
      f.jb = f.contentDocument;
    } else {
      if (f.contentWindow) {
        f.jb = f.contentWindow.document;
      } else {
        if (f.document) {
          /** @type {!Document} */
          f.jb = f.document;
        }
      }
    }
    /** @type {!Object} */
    this.Ga = f;
    /** @type {string} */
    f = "";
    if (this.Ga.src && "javascript:" === this.Ga.src.substr(0, 11)) {
      /** @type {string} */
      f = '<script>document.domain="' + document.domain + '";\x3c/script>';
    }
    /** @type {string} */
    f = "<html><body>" + f + "</body></html>";
    try {
      this.Ga.jb.open();
      this.Ga.jb.write(f);
      this.Ga.jb.close();
    } catch (n) {
      fc$jscomp$0("frame writing exception");
      if (n.stack) {
        fc$jscomp$0(n.stack);
      }
      fc$jscomp$0(n);
    }
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function th$jscomp$0(node) {
    if (node.oe && node.$d && node.Te.count() < (0 < node.cd.length ? 2 : 1)) {
      node.we++;
      var self = {};
      self.id = node.Gg;
      self.pw = node.Hg;
      self.ser = node.we;
      self = node.ld(self);
      /** @type {string} */
      var c = "";
      /** @type {number} */
      var name = 0;
      for (; 0 < node.cd.length;) {
        if (1870 >= node.cd[0].of.length + 30 + c.length) {
          var val = node.cd.shift();
          /** @type {string} */
          c = c + "&seg" + name + "=" + val.Yg + "&ts" + name + "=" + val.hh + "&d" + name + "=" + val.of;
          name++;
        } else {
          break;
        }
      }
      uh$jscomp$0(node, self + c, node.we);
      return true;
    }
    return false;
  }
  /**
   * @param {!Object} path
   * @param {string} a
   * @param {undefined} s
   * @return {undefined}
   */
  function uh$jscomp$0(path, a, s) {
    /**
     * @return {undefined}
     */
    function render() {
      path.Te.remove(s);
      th$jscomp$0(path);
    }
    path.Te.add(s, 1);
    /** @type {number} */
    var promise = setTimeout(render, Math.floor(25E3));
    sh$jscomp$2(path, a, function() {
      clearTimeout(promise);
      render();
    });
  }
  /**
   * @param {!Object} a
   * @param {string} f
   * @param {!Function} cb
   * @return {undefined}
   */
  function sh$jscomp$2(a, f, cb) {
    setTimeout(function() {
      try {
        if (a.$d) {
          var script = a.Ga.jb.createElement("script");
          /** @type {string} */
          script.type = "text/javascript";
          /** @type {boolean} */
          script.async = true;
          /** @type {string} */
          script.src = f;
          /** @type {function(): undefined} */
          script.onload = script.onreadystatechange = function() {
            var state = script.readyState;
            if (!(state && "loaded" !== state && "complete" !== state)) {
              /** @type {null} */
              script.onload = script.onreadystatechange = null;
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              cb();
            }
          };
          /**
           * @return {undefined}
           */
          script.onerror = function() {
            fc$jscomp$0("Long-poll script failed to load: " + f);
            /** @type {boolean} */
            a.$d = false;
            a.close();
          };
          a.Ga.jb.body.appendChild(script);
        }
      } catch (e) {
      }
    }, Math.floor(1));
  }
  /**
   * @param {!Object} opts
   * @param {undefined} w
   * @param {string} h
   * @param {!Function} data
   * @return {undefined}
   */
  function wh$jscomp$0(opts, w, h, data) {
    /** @type {!Object} */
    this.ue = opts;
    this.f = pd$jscomp$0(this.ue);
    /** @type {null} */
    this.frames = this.Nc = null;
    /** @type {number} */
    this.rb = this.sb = this.ff = 0;
    this.Xa = uc$jscomp$0(w);
    opts = {
      v : "5"
    };
    if ("undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com")) {
      /** @type {string} */
      opts.r = "f";
    }
    if (h) {
      /** @type {string} */
      opts.s = h;
    }
    if (data) {
      /** @type {!Function} */
      opts.ls = data;
    }
    this.jf = fd$jscomp$0(w, gd$jscomp$0, opts);
  }
  /**
   * @param {!Object} args
   * @param {boolean} thisObj
   * @return {undefined}
   */
  function zh$jscomp$0(args, thisObj) {
    args.frames.push(thisObj);
    if (args.frames.length == args.ff) {
      var headers = args.frames.join("");
      /** @type {null} */
      args.frames = null;
      headers = Rb$jscomp$0(headers);
      args.Lg(headers);
    }
  }
  /**
   * @param {number} item
   * @return {undefined}
   */
  function yh$jscomp$0(item) {
    clearInterval(item.Nc);
    /** @type {number} */
    item.Nc = setInterval(function() {
      if (item.La) {
        Ah$jscomp$0(item, "0");
      }
      yh$jscomp$0(item);
    }, Math.floor(45E3));
  }
  /**
   * @param {number} e
   * @param {string} b
   * @return {undefined}
   */
  function Ah$jscomp$0(e, b) {
    try {
      e.La.send(b);
    } catch (err) {
      e.f("Exception thrown from WebSocket.send():", err.message || err.data, "Closing connection.");
      setTimeout(u$jscomp$22(e.bb, e), 0);
    }
  }
  /**
   * @param {?} f
   * @return {undefined}
   */
  function Bh$jscomp$0(f) {
    Ch$jscomp$0(this, f);
  }
  /**
   * @param {?} r
   * @param {?} x
   * @return {undefined}
   */
  function Ch$jscomp$0(r, x) {
    var c = wh$jscomp$0 && wh$jscomp$0.isAvailable();
    var node = c && !(bd$jscomp$0.Af || true === bd$jscomp$0.get("previous_websocket_failure"));
    if (x.jh) {
      if (!c) {
        S$jscomp$3("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
      }
      /** @type {boolean} */
      node = true;
    }
    if (node) {
      /** @type {!Array} */
      r.jd = [wh$jscomp$0];
    } else {
      /** @type {!Array} */
      var sockets = r.jd = [];
      zd$jscomp$0(Dh$jscomp$0, function(a, connection) {
        if (connection && connection.isAvailable()) {
          sockets.push(connection);
        }
      });
    }
  }
  /**
   * @param {?} j
   * @return {?}
   */
  function Eh$jscomp$0(j) {
    if (0 < j.jd.length) {
      return j.jd[0];
    }
    throw Error("No transports available");
  }
  /**
   * @param {string} pluginid
   * @param {string} pluginType
   * @param {(RegExp|string)} plugins
   * @param {!Element} uiCustomize
   * @param {!AudioNode} branchData
   * @param {!AudioNode} beforeZero
   * @param {!Function} afterZero
   * @return {undefined}
   */
  function Fh$jscomp$0(pluginid, pluginType, plugins, uiCustomize, branchData, beforeZero, afterZero) {
    /** @type {string} */
    this.id = pluginid;
    this.f = pd$jscomp$0("c:" + this.id + ":");
    /** @type {(RegExp|string)} */
    this.nc = plugins;
    /** @type {!Element} */
    this.Zc = uiCustomize;
    /** @type {!AudioNode} */
    this.na = branchData;
    /** @type {!AudioNode} */
    this.Re = beforeZero;
    /** @type {string} */
    this.G = pluginType;
    /** @type {!Array} */
    this.Pd = [];
    /** @type {number} */
    this.kf = 0;
    this.Wf = new Bh$jscomp$0(pluginType);
    /** @type {number} */
    this.N = 0;
    /** @type {!Function} */
    this.Fb = afterZero;
    this.f("Connection created");
    Gh$jscomp$0(this);
  }
  /**
   * @param {!Object} p
   * @return {undefined}
   */
  function Gh$jscomp$0(p) {
    var timeout = Eh$jscomp$0(p.Wf);
    p.K = new timeout("c:" + p.id + ":" + p.kf++, p.G, void 0, p.Fb);
    p.Ve = timeout.responsesRequiredToBeHealthy || 0;
    var c = Hh$jscomp$0(p, p.K);
    var d = Ih$jscomp$0(p, p.K);
    p.kd = p.K;
    p.ed = p.K;
    /** @type {null} */
    p.F = null;
    /** @type {boolean} */
    p.Eb = false;
    setTimeout(function() {
      if (p.K) {
        p.K.open(c, d);
      }
    }, Math.floor(0));
    timeout = timeout.healthyTimeout || 0;
    if (0 < timeout) {
      /** @type {number} */
      p.Bd = setTimeout(function() {
        /** @type {null} */
        p.Bd = null;
        if (!p.Eb) {
          if (p.K && 102400 < p.K.rb) {
            p.f("Connection exceeded healthy timeout but has received " + p.K.rb + " bytes.  Marking connection healthy.");
            /** @type {boolean} */
            p.Eb = true;
            p.K.Hd();
          } else {
            if (p.K && 10240 < p.K.sb) {
              p.f("Connection exceeded healthy timeout but has sent " + p.K.sb + " bytes.  Leaving connection alive.");
            } else {
              p.f("Closing unhealthy connection after timeout.");
              p.close();
            }
          }
        }
      }, Math.floor(timeout));
    }
  }
  /**
   * @param {!Object} options
   * @param {boolean} key
   * @return {?}
   */
  function Ih$jscomp$0(options, key) {
    return function(type) {
      if (key === options.K) {
        /** @type {null} */
        options.K = null;
        if (type || 0 !== options.N) {
          if (1 === options.N) {
            options.f("Realtime connection lost.");
          }
        } else {
          options.f("Realtime connection failed.");
          if ("s-" === options.G.ab.substr(0, 2)) {
            bd$jscomp$0.remove("host:" + options.G.host);
            options.G.ab = options.G.host;
          }
        }
        options.close();
      } else {
        if (key === options.F) {
          options.f("Secondary connection lost.");
          type = options.F;
          /** @type {null} */
          options.F = null;
          if (!(options.kd !== type && options.ed !== type)) {
            options.close();
          }
        } else {
          options.f("closing an old connection");
        }
      }
    };
  }
  /**
   * @param {!Object} options
   * @param {boolean} key
   * @return {?}
   */
  function Hh$jscomp$0(options, key) {
    return function(c) {
      if (2 != options.N) {
        if (key === options.ed) {
          var e = wd$jscomp$0("t", c);
          c = wd$jscomp$0("d", c);
          if ("c" == e) {
            if (e = wd$jscomp$0("t", c), "d" in c) {
              if (c = c.d, "h" === e) {
                e = c.ts;
                var to = c.v;
                var t = c.h;
                options.Uf = c.s;
                ed$jscomp$0(options.G, t);
                if (0 == options.N) {
                  options.K.start();
                  Jh$jscomp$0(options, options.K, e);
                  if ("5" !== to) {
                    S$jscomp$3("Protocol version mismatch detected");
                  }
                  c = options.Wf;
                  if (c = 1 < c.jd.length ? c.jd[1] : null) {
                    Kh$jscomp$0(options, c);
                  }
                }
              } else {
                if ("n" === e) {
                  options.f("recvd end transmission on primary");
                  options.ed = options.F;
                  /** @type {number} */
                  c = 0;
                  for (; c < options.Pd.length; ++c) {
                    options.Ld(options.Pd[c]);
                  }
                  /** @type {!Array} */
                  options.Pd = [];
                  Lh$jscomp$0(options);
                } else {
                  if ("s" === e) {
                    options.f("Connection shutdown command received. Shutting down...");
                    if (options.Re) {
                      options.Re(c);
                      /** @type {null} */
                      options.Re = null;
                    }
                    /** @type {null} */
                    options.na = null;
                    options.close();
                  } else {
                    if ("r" === e) {
                      options.f("Reset packet received.  New host: " + c);
                      ed$jscomp$0(options.G, c);
                      if (1 === options.N) {
                        options.close();
                      } else {
                        Mh$jscomp$0(options);
                        Gh$jscomp$0(options);
                      }
                    } else {
                      if ("e" === e) {
                        qd$jscomp$0("Server Error: " + c);
                      } else {
                        if ("o" === e) {
                          options.f("got pong on primary.");
                          Nh$jscomp$0(options);
                          Oh$jscomp$0(options);
                        } else {
                          qd$jscomp$0("Unknown control packet command: " + e);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if ("d" == e) {
              options.Ld(c);
            }
          }
        } else {
          if (key === options.F) {
            if (e = wd$jscomp$0("t", c), c = wd$jscomp$0("d", c), "c" == e) {
              if ("t" in c) {
                c = c.t;
                if ("a" === c) {
                  Ph$jscomp$0(options);
                } else {
                  if ("r" === c) {
                    options.f("Got a reset on secondary, closing it");
                    options.F.close();
                    if (!(options.kd !== options.F && options.ed !== options.F)) {
                      options.close();
                    }
                  } else {
                    if ("o" === c) {
                      options.f("got pong on secondary.");
                      options.Tf--;
                      Ph$jscomp$0(options);
                    }
                  }
                }
              }
            } else {
              if ("d" == e) {
                options.Pd.push(c);
              } else {
                throw Error("Unknown protocol layer: " + e);
              }
            }
          } else {
            options.f("message on old connection");
          }
        }
      }
    };
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function Lh$jscomp$0(options) {
    if (options.kd === options.F && options.ed === options.F) {
      options.f("cleaning up and promoting a connection: " + options.F.ue);
      options.K = options.F;
      /** @type {null} */
      options.F = null;
    }
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function Ph$jscomp$0(options) {
    if (0 >= options.Tf) {
      options.f("Secondary connection is healthy.");
      /** @type {boolean} */
      options.Eb = true;
      options.F.Hd();
      options.F.start();
      options.f("sending client ack on secondary");
      options.F.send({
        t : "c",
        d : {
          t : "a",
          d : {}
        }
      });
      options.f("Ending transmission on primary");
      options.K.send({
        t : "c",
        d : {
          t : "n",
          d : {}
        }
      });
      options.kd = options.F;
      Lh$jscomp$0(options);
    } else {
      options.f("sending ping on secondary.");
      options.F.send({
        t : "c",
        d : {
          t : "p",
          d : {}
        }
      });
    }
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function Nh$jscomp$0(options) {
    if (!options.Eb) {
      options.Ve--;
      if (0 >= options.Ve) {
        options.f("Primary connection is healthy.");
        /** @type {boolean} */
        options.Eb = true;
        options.K.Hd();
      }
    }
  }
  /**
   * @param {!Object} params
   * @param {!Function} Finder
   * @return {undefined}
   */
  function Kh$jscomp$0(params, Finder) {
    params.F = new Finder("c:" + params.id + ":" + params.kf++, params.G, params.Uf);
    params.Tf = Finder.responsesRequiredToBeHealthy || 0;
    params.F.open(Hh$jscomp$0(params, params.F), Ih$jscomp$0(params, params.F));
    setTimeout(function() {
      if (params.F) {
        params.f("Timed out trying to upgrade.");
        params.F.close();
      }
    }, Math.floor(6E4));
  }
  /**
   * @param {!Object} options
   * @param {!Function} n
   * @param {undefined} width
   * @return {undefined}
   */
  function Jh$jscomp$0(options, n, width) {
    options.f("Realtime connection established.");
    /** @type {!Function} */
    options.K = n;
    /** @type {number} */
    options.N = 1;
    if (options.Zc) {
      options.Zc(width, options.Uf);
      /** @type {null} */
      options.Zc = null;
    }
    if (0 === options.Ve) {
      options.f("Primary connection is healthy.");
      /** @type {boolean} */
      options.Eb = true;
    } else {
      setTimeout(function() {
        Oh$jscomp$0(options);
      }, Math.floor(5E3));
    }
  }
  /**
   * @param {!Object} test
   * @return {undefined}
   */
  function Oh$jscomp$0(test) {
    if (!(test.Eb || 1 !== test.N)) {
      test.f("sending ping on primary.");
      Qh$jscomp$0(test, {
        t : "c",
        d : {
          t : "p",
          d : {}
        }
      });
    }
  }
  /**
   * @param {!Object} $scope
   * @param {undefined} fn
   * @return {undefined}
   */
  function Qh$jscomp$0($scope, fn) {
    if (1 !== $scope.N) {
      throw "Connection is not connected";
    }
    $scope.kd.send(fn);
  }
  /**
   * @param {!Object} t
   * @return {undefined}
   */
  function Mh$jscomp$0(t) {
    t.f("Shutting down all connections");
    if (t.K) {
      t.K.close();
      /** @type {null} */
      t.K = null;
    }
    if (t.F) {
      t.F.close();
      /** @type {null} */
      t.F = null;
    }
    if (t.Bd) {
      clearTimeout(t.Bd);
      /** @type {null} */
      t.Bd = null;
    }
  }
  /**
   * @param {string} g
   * @param {(RegExp|string)} status
   * @param {(RegExp|string)} message
   * @param {(RegExp|string)} extraPayload
   * @return {undefined}
   */
  function Rh$jscomp$0(g, status, message, extraPayload) {
    /** @type {number} */
    this.id = Sh$jscomp$0++;
    this.f = pd$jscomp$0("p:" + this.id + ":");
    /** @type {boolean} */
    this.Bf = this.Ie = false;
    this.ba = {};
    /** @type {!Array} */
    this.sa = [];
    /** @type {number} */
    this.ad = 0;
    /** @type {!Array} */
    this.Yc = [];
    /** @type {boolean} */
    this.qa = false;
    /** @type {number} */
    this.eb = 1E3;
    /** @type {number} */
    this.Id = 3E5;
    /** @type {(RegExp|string)} */
    this.Kb = status;
    /** @type {(RegExp|string)} */
    this.Xc = message;
    /** @type {(RegExp|string)} */
    this.Se = extraPayload;
    /** @type {string} */
    this.G = g;
    /** @type {null} */
    this.wb = this.Ca = this.Ma = this.Fb = this.$e = null;
    /** @type {boolean} */
    this.Sb = false;
    this.Wd = {};
    /** @type {number} */
    this.Xg = 0;
    /** @type {boolean} */
    this.rf = true;
    /** @type {null} */
    this.Oc = this.Ke = null;
    Th$jscomp$0(this, 0);
    kf$jscomp$0.yb().Ib("visible", this.Og, this);
    if (-1 === g.host.indexOf("fblocal")) {
      jf$jscomp$0.yb().Ib("online", this.Mg, this);
    }
  }
  /**
   * @param {!Object} f
   * @param {!Object} res
   * @return {undefined}
   */
  function Vh$jscomp$0(f, res) {
    var params = res.Ug;
    var key = params.path.toString();
    var name = params.wa();
    f.f("Listen on " + key + " for " + name);
    var o = {
      p : key
    };
    if (res.tag) {
      o.q = Ge$jscomp$1(params.n);
      o.t = res.tag;
    }
    o.h = res.Ad();
    f.Ia("q", o, function(options) {
      var value = options.d;
      var i = options.s;
      if (value && "object" === typeof value && y$jscomp$63(value, "w")) {
        var out = z$jscomp$13(value, "w");
        if (da$jscomp$0(out) && 0 <= La$jscomp$0(out, "no_index")) {
          S$jscomp$3("Using an unspecified index. Consider adding " + ('".indexOn": "' + params.n.g.toString() + '"') + " at " + params.path.toString() + " to your security rules for better performance");
        }
      }
      if ((f.ba[key] && f.ba[key][name]) === res) {
        f.f("listen response", options);
        if ("ok" !== i) {
          Wh$jscomp$0(f, key, name);
        }
        if (res.I) {
          res.I(i, value);
        }
      }
    });
  }
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function Xh$jscomp$0(params) {
    var data = params.Ca;
    if (params.qa && data) {
      params.Ia("auth", {
        cred : data.rg
      }, function(result) {
        var type = result.s;
        result = result.d || "error";
        if ("ok" !== type && params.Ca === data) {
          /** @type {null} */
          params.Ca = null;
        }
        if (data.sf) {
          if ("ok" !== type && data.od) {
            data.od(type, result);
          }
        } else {
          /** @type {boolean} */
          data.sf = true;
          if (data.Dc) {
            data.Dc(type, result);
          }
        }
      });
    }
  }
  /**
   * @param {!Object} template
   * @param {string} name
   * @param {!Object} key
   * @param {!Object} part
   * @param {!Function} value
   * @return {undefined}
   */
  function Yh$jscomp$0(template, name, key, part, value) {
    key = {
      p : key,
      d : part
    };
    template.f("onDisconnect " + name, key);
    template.Ia(name, key, function(val) {
      if (value) {
        setTimeout(function() {
          value(val.s, val.d);
        }, Math.floor(0));
      }
    });
  }
  /**
   * @param {(Object|boolean)} options
   * @param {string} name
   * @param {string} value
   * @param {!Object} a
   * @param {!Function} b
   * @param {number} g
   * @return {undefined}
   */
  function Zh$jscomp$0(options, name, value, a, b, g) {
    a = {
      p : value,
      d : a
    };
    if (p$jscomp$13(g)) {
      /** @type {number} */
      a.h = g;
    }
    options.sa.push({
      action : name,
      Pf : a,
      I : b
    });
    options.ad++;
    /** @type {number} */
    name = options.sa.length - 1;
    if (options.qa) {
      $h$jscomp$0(options, name);
    } else {
      options.f("Buffering put: " + value);
    }
  }
  /**
   * @param {!Object} data
   * @param {!Object} key
   * @return {undefined}
   */
  function $h$jscomp$0(data, key) {
    var a = data.sa[key].action;
    var prevLen = data.sa[key].Pf;
    var $ = data.sa[key].I;
    data.sa[key].Vg = data.qa;
    data.Ia(a, prevLen, function(val) {
      data.f(a + " response", val);
      delete data.sa[key];
      data.ad--;
      if (0 === data.ad) {
        /** @type {!Array} */
        data.sa = [];
      }
      if ($) {
        $(val.s, val.d);
      }
    });
  }
  /**
   * @param {!Object} value
   * @param {number} delta
   * @return {undefined}
   */
  function Th$jscomp$0(value, delta) {
    O$jscomp$3(!value.Ma, "Scheduling a connect when we're already connected/ing?");
    if (value.wb) {
      clearTimeout(value.wb);
    }
    /** @type {number} */
    value.wb = setTimeout(function() {
      /** @type {null} */
      value.wb = null;
      ci$jscomp$0(value);
    }, Math.floor(delta));
  }
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function ci$jscomp$0(params) {
    if (di$jscomp$0(params)) {
      params.f("Making a connection attempt");
      /** @type {number} */
      params.Ke = (new Date).getTime();
      /** @type {null} */
      params.Oc = null;
      var event = u$jscomp$22(params.Ld, params);
      var el = u$jscomp$22(params.Zc, params);
      var ed = u$jscomp$22(params.If, params);
      /** @type {string} */
      var latDelta = params.id + ":" + Uh$jscomp$0++;
      params.Ma = new Fh$jscomp$0(latDelta, params.G, event, el, ed, function(b) {
        S$jscomp$3(b + " (" + params.G.toString() + ")");
        /** @type {boolean} */
        params.Bf = true;
      }, params.Fb);
    }
  }
  /**
   * @param {?} data
   * @param {?} entity
   * @param {string} name
   * @return {undefined}
   */
  function ai$jscomp$0(data, entity, name) {
    name = name ? Oa$jscomp$0(name, function(t) {
      return xd$jscomp$0(t);
    }).join("$") : "default";
    if ((data = Wh$jscomp$0(data, entity, name)) && data.I) {
      data.I("permission_denied");
    }
  }
  /**
   * @param {!Object} f
   * @param {?} name
   * @param {string} o
   * @return {?}
   */
  function Wh$jscomp$0(f, name, o) {
    name = (new P$jscomp$3(name)).toString();
    var port;
    if (p$jscomp$13(f.ba[name])) {
      port = f.ba[name][o];
      delete f.ba[name][o];
      if (0 === oa$jscomp$0(f.ba[name])) {
        delete f.ba[name];
      }
    } else {
      port = void 0;
    }
    return port;
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function bi$jscomp$0(data) {
    Xh$jscomp$0(data);
    v$jscomp$5(data.ba, function(name) {
      v$jscomp$5(name, function(nbres) {
        Vh$jscomp$0(data, nbres);
      });
    });
    /** @type {number} */
    var key = 0;
    for (; key < data.sa.length; key++) {
      if (data.sa[key]) {
        $h$jscomp$0(data, key);
      }
    }
    for (; data.Yc.length;) {
      key = data.Yc.shift();
      Yh$jscomp$0(data, key.action, key.bd, key.data, key.I);
    }
  }
  /**
   * @param {!Object} provider
   * @return {?}
   */
  function di$jscomp$0(provider) {
    var b;
    b = jf$jscomp$0.yb().oc;
    return !provider.Bf && !provider.Ie && b;
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {undefined}
   */
  function ei$jscomp$0(a, b) {
    this.committed = a;
    this.snapshot = b;
  }
  /**
   * @param {!Array} el
   * @param {?} instance
   * @return {undefined}
   */
  function V$jscomp$2(el, instance) {
    /** @type {!Array} */
    this.dd = el;
    this.ta = instance;
  }
  /**
   * @param {string} a
   * @param {string} t
   * @param {string} val
   * @return {undefined}
   */
  function W$jscomp$2(a, t, val) {
    /** @type {string} */
    this.A = a;
    /** @type {string} */
    this.Y = t;
    /** @type {string} */
    this.g = val;
  }
  /**
   * @param {!Object} s
   * @param {string} a
   * @param {string} b
   * @return {undefined}
   */
  function ii$jscomp$0(s, a, b) {
    /** @type {!Object} */
    this.Vb = s;
    /** @type {string} */
    this.tb = a;
    this.vb = b || null;
  }
  /**
   * @param {string} a
   * @param {string} b
   * @param {string} variableNames
   * @return {undefined}
   */
  function ji$jscomp$0(a, b, variableNames) {
    /** @type {string} */
    this.ja = a;
    /** @type {string} */
    this.tb = b;
    /** @type {string} */
    this.vb = variableNames;
  }
  /**
   * @return {undefined}
   */
  function ki$jscomp$0() {
    this.za = {};
  }
  /**
   * @param {boolean} rejectedItem
   * @return {?}
   */
  function mi$jscomp$0(rejectedItem) {
    return Na$jscomp$0(qa$jscomp$0(rejectedItem.za), function(result) {
      return !He$jscomp$1(result.Y.n);
    });
  }
  /**
   * @param {boolean} a
   * @param {!Object} b
   * @return {?}
   */
  function ni$jscomp$0(a, b) {
    if (He$jscomp$1(b.n)) {
      return li$jscomp$0(a);
    }
    var STATIC_CHIPS_TEMPLATE = b.wa();
    return z$jscomp$13(a.za, STATIC_CHIPS_TEMPLATE);
  }
  /**
   * @param {boolean} var_args
   * @return {?}
   */
  function li$jscomp$0(var_args) {
    return ua$jscomp$0(var_args.za, function(result) {
      return He$jscomp$1(result.Y.n);
    }) || null;
  }
  /**
   * @param {?} a
   * @return {undefined}
   */
  function oi$jscomp$0(a) {
    this.va = qe$jscomp$1;
    this.mb = new Pf$jscomp$0;
    this.df = {};
    this.qc = {};
    this.Qc = a;
  }
  /**
   * @param {!Object} b
   * @param {string} name
   * @param {!Object} data
   * @param {number} target
   * @param {string} a
   * @return {?}
   */
  function pi$jscomp$0(b, name, data, target, a) {
    var options = b.mb;
    /** @type {string} */
    var value = a;
    O$jscomp$3(target > options.Pc, "Stacking an older write on top of newer ones");
    if (!p$jscomp$13(value)) {
      /** @type {boolean} */
      value = true;
    }
    options.pa.push({
      path : name,
      Ja : data,
      md : target,
      visible : value
    });
    if (value) {
      options.V = Jf$jscomp$0(options.V, name, data);
    }
    /** @type {number} */
    options.Pc = target;
    return a ? qi$jscomp$0(b, new Ac$jscomp$0(Ef$jscomp$0, name, data)) : [];
  }
  /**
   * @param {!Object} e
   * @param {string} context
   * @param {!Object} options
   * @param {number} max
   * @return {?}
   */
  function ri$jscomp$0(e, context, options, max) {
    var self = e.mb;
    O$jscomp$3(max > self.Pc, "Stacking an older merge on top of newer ones");
    self.pa.push({
      path : context,
      children : options,
      md : max,
      visible : true
    });
    self.V = Kf$jscomp$0(self.V, context, options);
    /** @type {number} */
    self.Pc = max;
    options = sf$jscomp$0(options);
    return qi$jscomp$0(e, new bf$jscomp$0(Ef$jscomp$0, context, options));
  }
  /**
   * @param {!Object} e
   * @param {number} d
   * @param {boolean} name
   * @return {?}
   */
  function si$jscomp$0(e, d, name) {
    name = name || false;
    var row = Qf$jscomp$0(e.mb, d);
    if (e.mb.Ud(d)) {
      var date = qe$jscomp$1;
      if (null != row.Ja) {
        date = date.set(M$jscomp$2, true);
      } else {
        Fb$jscomp$0(row.children, function(pdk, end) {
          date = date.set(new P$jscomp$3(pdk), end);
        });
      }
      return qi$jscomp$0(e, new Df$jscomp$0(row.path, date, name));
    }
    return [];
  }
  /**
   * @param {!Object} window
   * @param {!Object} n
   * @param {!Object} l
   * @return {?}
   */
  function ti$jscomp$0(window, n, l) {
    l = sf$jscomp$0(l);
    return qi$jscomp$0(window, new bf$jscomp$0(Gf$jscomp$0, n, l));
  }
  /**
   * @param {!Object} c
   * @param {!Object} label
   * @param {!Object} data
   * @param {string} name
   * @return {?}
   */
  function ui$jscomp$0(c, label, data, name) {
    name = vi$jscomp$0(c, name);
    if (null != name) {
      var item = wi$jscomp$0(name);
      name = item.path;
      item = item.Lb;
      label = lf$jscomp$0(name, label);
      data = new Ac$jscomp$0(new Ff$jscomp$0(false, true, item, true), label, data);
      return xi$jscomp$0(c, name, data);
    }
    return [];
  }
  /**
   * @param {!Object} d
   * @param {!Object} s
   * @param {!Object} result
   * @param {string} i
   * @return {?}
   */
  function yi$jscomp$0(d, s, result, i) {
    if (i = vi$jscomp$0(d, i)) {
      var item = wi$jscomp$0(i);
      i = item.path;
      item = item.Lb;
      s = lf$jscomp$0(i, s);
      result = sf$jscomp$0(result);
      result = new bf$jscomp$0(new Ff$jscomp$0(false, true, item, true), s, result);
      return xi$jscomp$0(d, i, result);
    }
    return [];
  }
  /**
   * @param {!Object} a_val
   * @return {?}
   */
  function Ci$jscomp$0(a_val) {
    return vf$jscomp$0(a_val, function(a, file, name) {
      if (file && null != li$jscomp$0(file)) {
        return [li$jscomp$0(file)];
      }
      /** @type {!Array} */
      var confirmMessage = [];
      if (file) {
        confirmMessage = mi$jscomp$0(file);
      }
      v$jscomp$5(name, function(file) {
        confirmMessage = confirmMessage.concat(file);
      });
      return confirmMessage;
    });
  }
  /**
   * @param {!Object} data
   * @param {!NodeList} binary
   * @return {undefined}
   */
  function Gi$jscomp$0(data, binary) {
    /** @type {number} */
    var i = 0;
    for (; i < binary.length; ++i) {
      var f = binary[i];
      if (!He$jscomp$1(f.n)) {
        f = zi$jscomp$0(f);
        var c = data.qc[f];
        delete data.qc[f];
        delete data.df["_" + c];
      }
    }
  }
  /**
   * @param {!Object} A
   * @return {?}
   */
  function Ei$jscomp$0(A) {
    return He$jscomp$1(A.n) && !Ie$jscomp$1(A.n) ? A.Mb() : A;
  }
  /**
   * @param {!Array} o
   * @param {!Object} c
   * @param {?} t
   * @return {?}
   */
  function Bi$jscomp$0(o, c, t) {
    var a = c.path;
    var b = Fi$jscomp$0(o, c);
    t = Di$jscomp$0(o, t);
    c = o.Qc.af(Ei$jscomp$0(c), b, t.Ad, t.I);
    a = o.va.subtree(a);
    if (b) {
      O$jscomp$3(null == li$jscomp$0(a.value), "If we're adding a query, it shouldn't be shadowed");
    } else {
      b = vf$jscomp$0(a, function(incomingTSpan, file, name) {
        if (!incomingTSpan.e() && file && null != li$jscomp$0(file)) {
          return [Ze$jscomp$1(li$jscomp$0(file))];
        }
        /** @type {!Array} */
        var rowChunk = [];
        if (file) {
          rowChunk = rowChunk.concat(Oa$jscomp$0(mi$jscomp$0(file), function(_cmy) {
            return _cmy.Y;
          }));
        }
        v$jscomp$5(name, function(cellValue) {
          rowChunk = rowChunk.concat(cellValue);
        });
        return rowChunk;
      });
      /** @type {number} */
      a = 0;
      for (; a < b.length; ++a) {
        t = b[a];
        o.Qc.de(Ei$jscomp$0(t), Fi$jscomp$0(o, t));
      }
    }
    return c;
  }
  /**
   * @param {!Array} a
   * @param {!Object} b
   * @return {?}
   */
  function Di$jscomp$0(a, b) {
    var s = b.Y;
    var el = Fi$jscomp$0(a, s);
    return {
      Ad : function() {
        return (b.w() || H$jscomp$2).hash();
      },
      I : function(type) {
        if ("ok" === type) {
          if (el) {
            var e = s.path;
            if (type = vi$jscomp$0(a, el)) {
              var cfg = wi$jscomp$0(type);
              type = cfg.path;
              cfg = cfg.Lb;
              e = lf$jscomp$0(type, e);
              e = new Cc$jscomp$0(new Ff$jscomp$0(false, true, cfg, true), e);
              type = xi$jscomp$0(a, type, e);
            } else {
              /** @type {!Array} */
              type = [];
            }
          } else {
            type = qi$jscomp$0(a, new Cc$jscomp$0(Gf$jscomp$0, s.path));
          }
          return type;
        }
        /** @type {string} */
        e = "Unknown Error";
        if ("too_big" === type) {
          /** @type {string} */
          e = "The data requested exceeds the maximum size that can be accessed with a single request.";
        } else {
          if ("permission_denied" == type) {
            /** @type {string} */
            e = "Client doesn't have permission to access the desired data.";
          } else {
            if ("unavailable" == type) {
              /** @type {string} */
              e = "The service is unavailable";
            }
          }
        }
        /** @type {!Error} */
        e = Error(type + " at " + s.path.toString() + ": " + e);
        e.code = type.toUpperCase();
        return a.nb(s, null, e);
      }
    };
  }
  /**
   * @param {!Object} o
   * @return {?}
   */
  function zi$jscomp$0(o) {
    return o.path.toString() + "$" + o.wa();
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function wi$jscomp$0(str) {
    var k = str.indexOf("$");
    O$jscomp$3(-1 !== k && k < str.length - 1, "Bad queryKey.");
    return {
      Lb : str.substr(k + 1),
      path : new P$jscomp$3(str.substr(0, k))
    };
  }
  /**
   * @param {!Object} result
   * @param {string} id
   * @return {?}
   */
  function vi$jscomp$0(result, id) {
    var opts = result.df;
    /** @type {string} */
    var name = "_" + id;
    return name in opts ? opts[name] : void 0;
  }
  /**
   * @param {!Array} d
   * @param {!Object} s
   * @return {?}
   */
  function Fi$jscomp$0(d, s) {
    var srcURL = zi$jscomp$0(s);
    return z$jscomp$13(d.qc, srcURL);
  }
  /**
   * @param {!Object} b
   * @param {string} d
   * @param {!Object} i
   * @return {?}
   */
  function xi$jscomp$0(b, d, i) {
    var o = b.va.get(d);
    O$jscomp$3(o, "Missing sync point for query tag that we're tracking");
    return o.gb(i, new Uf$jscomp$0(d, b.mb), null);
  }
  /**
   * @param {!Object} o
   * @param {!Object} errorLevel
   * @return {?}
   */
  function qi$jscomp$0(o, errorLevel) {
    return Hi$jscomp$0(o, errorLevel, o.va, null, new Uf$jscomp$0(M$jscomp$2, o.mb));
  }
  /**
   * @param {!Object} name
   * @param {!Object} self
   * @param {!Object} data
   * @param {!Object} c
   * @param {string} f
   * @return {?}
   */
  function Hi$jscomp$0(name, self, data, c, f) {
    if (self.path.e()) {
      return Ii$jscomp$0(name, self, data, c, f);
    }
    var m = data.get(M$jscomp$2);
    if (null == c && null != m) {
      c = m.kb(M$jscomp$2);
    }
    /** @type {!Array} */
    var assert = [];
    var i = K$jscomp$2(self.path);
    var link = self.$c(i);
    if ((data = data.children.get(i)) && link) {
      var config = c ? c.T(i) : null;
      i = f.o(i);
      /** @type {!Array<?>} */
      assert = assert.concat(Hi$jscomp$0(name, link, data, config, i));
    }
    if (m) {
      /** @type {!Array<?>} */
      assert = assert.concat(m.gb(self, f, c));
    }
    return assert;
  }
  /**
   * @param {!Object} uri
   * @param {!Object} t
   * @param {!Object} d
   * @param {!Object} c
   * @param {string} f
   * @return {?}
   */
  function Ii$jscomp$0(uri, t, d, c, f) {
    var m = d.get(M$jscomp$2);
    if (null == c && null != m) {
      c = m.kb(M$jscomp$2);
    }
    /** @type {!Array} */
    var assert = [];
    d.children.ka(function(i, parent) {
      var config = c ? c.T(i) : null;
      var options = f.o(i);
      var A = t.$c(i);
      if (A) {
        assert = assert.concat(Ii$jscomp$0(uri, A, parent, config, options));
      }
    });
    if (m) {
      assert = assert.concat(m.gb(t, f, c));
    }
    return assert;
  }
  /**
   * @param {string} date
   * @param {string} bcString
   * @return {undefined}
   */
  function Ji$jscomp$0(date, bcString) {
    /** @type {string} */
    this.G = date;
    this.Xa = uc$jscomp$0(date);
    /** @type {null} */
    this.hd = null;
    this.fa = new Zb$jscomp$0;
    /** @type {number} */
    this.Kd = 1;
    /** @type {null} */
    this.Va = null;
    if (bcString || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) {
      this.da = new cf$jscomp$0(this.G, u$jscomp$22(this.Kb, this));
      setTimeout(u$jscomp$22(this.Xc, this, true), 0);
    } else {
      this.da = this.Va = new Rh$jscomp$0(this.G, u$jscomp$22(this.Kb, this), u$jscomp$22(this.Xc, this), u$jscomp$22(this.Se, this));
    }
    this.eh = vc$jscomp$0(date, u$jscomp$22(function() {
      return new pc$jscomp$0(this.Xa, this.da);
    }, this));
    this.yc = new Wf$jscomp$0;
    this.Ge = new Sb$jscomp$0;
    var exports = this;
    this.Fd = new oi$jscomp$0({
      af : function(a, b, n, f) {
        /** @type {!Array} */
        b = [];
        n = exports.Ge.j(a.path);
        if (!n.e()) {
          b = qi$jscomp$0(exports.Fd, new Ac$jscomp$0(Gf$jscomp$0, a.path, n));
          setTimeout(function() {
            f("ok");
          }, 0);
        }
        return b;
      },
      de : aa$jscomp$0
    });
    Ki$jscomp$0(this, "connected", false);
    this.na = new Vc$jscomp$0;
    this.O = new Yg$jscomp$0(date, u$jscomp$22(this.da.O, this.da), u$jscomp$22(this.da.je, this.da), u$jscomp$22(this.Pe, this));
    /** @type {number} */
    this.ud = 0;
    /** @type {null} */
    this.He = null;
    this.M = new oi$jscomp$0({
      af : function(err, n, f, g) {
        exports.da.Cf(err, f, n, function(form_gra_time, addWidget) {
          var fieldset = g(form_gra_time, addWidget);
          dc$jscomp$0(exports.fa, err.path, fieldset);
        });
        return [];
      },
      de : function(p, m) {
        exports.da.$f(p, m);
      }
    });
  }
  /**
   * @param {string} to
   * @return {?}
   */
  function Li$jscomp$0(to) {
    to = to.Ge.j(new P$jscomp$3(".info/serverTimeOffset")).J() || 0;
    return (new Date).getTime() + to;
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function Mi$jscomp$0(item) {
    item = item = {
      timestamp : Li$jscomp$0(item)
    };
    item.timestamp = item.timestamp || (new Date).getTime();
    return item;
  }
  /**
   * @param {!Object} menu
   * @param {!Object} name
   * @param {?} value
   * @return {undefined}
   */
  function Ki$jscomp$0(menu, name, value) {
    name = new P$jscomp$3("/.info/" + name);
    value = Q$jscomp$2(value);
    var node = menu.Ge;
    node.Zd = node.Zd.H(name, value);
    value = qi$jscomp$0(menu.Fd, new Ac$jscomp$0(Gf$jscomp$0, name, value));
    dc$jscomp$0(menu.fa, name, value);
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function Oi$jscomp$0(data) {
    data.f("onDisconnectEvents");
    var b = Mi$jscomp$0(data);
    /** @type {!Array} */
    var c = [];
    Wc$jscomp$0(Uc$jscomp$0(data.na, b), M$jscomp$2, function(ff, canCreateDiscussions) {
      c = c.concat(qi$jscomp$0(data.M, new Ac$jscomp$0(Gf$jscomp$0, ff, canCreateDiscussions)));
      var results = Qi$jscomp$0(data, ff);
      Ni$jscomp$0(data, results);
    });
    data.na = new Vc$jscomp$0;
    dc$jscomp$0(data.fa, M$jscomp$2, c);
  }
  /**
   * @param {!Object} options
   * @param {!Object} cb
   * @param {!Object} id
   * @param {!Function} patScores
   * @return {undefined}
   */
  function fi$jscomp$0(options, cb, id, patScores) {
    var ret = Q$jscomp$2(id);
    options.da.Qe(cb.toString(), ret.J(true), function(ok, skeletonId) {
      if ("ok" === ok) {
        options.na.rc(cb, ret);
      }
      Pi$jscomp$0(patScores, ok, skeletonId);
    });
  }
  /**
   * @param {!Object} searchItemObject
   * @param {!Object} callback
   * @param {!Object} options
   * @param {!Object} el
   * @param {!Function} enhancements
   * @return {undefined}
   */
  function gi$jscomp$0(searchItemObject, callback, options, el, enhancements) {
    var key = Q$jscomp$2(options, el);
    searchItemObject.da.Qe(callback.toString(), key.J(true), function(ok, skeletonId) {
      if ("ok" === ok) {
        searchItemObject.na.rc(callback, key);
      }
      Pi$jscomp$0(enhancements, ok, skeletonId);
    });
  }
  /**
   * @param {!Object} data
   * @param {string} hash
   * @param {string} result
   * @param {!Function} value
   * @return {undefined}
   */
  function hi$jscomp$0(data, hash, result, value) {
    /** @type {boolean} */
    var e = true;
    var com;
    for (com in result) {
      /** @type {boolean} */
      e = false;
    }
    if (e) {
      fc$jscomp$0("onDisconnect().update() called with empty data.  Don't do anything.");
      Pi$jscomp$0(value, "ok");
    } else {
      data.da.Gf(hash.toString(), result, function(ok, skeletonId) {
        if ("ok" === ok) {
          var i;
          for (i in result) {
            var ret = Q$jscomp$2(result[i]);
            data.na.rc(hash.o(i), ret);
          }
        }
        Pi$jscomp$0(value, ok, skeletonId);
      });
    }
  }
  /**
   * @param {!Object} data
   * @param {!Object} start
   * @param {?} on
   * @return {undefined}
   */
  function Ri$jscomp$0(data, start, on) {
    on = ".info" === K$jscomp$2(start.path) ? data.Fd.Tb(start, on) : data.M.Tb(start, on);
    bc$jscomp$0(data.fa, start.path, on);
  }
  /**
   * @param {!Function} obj
   * @param {string} type
   * @param {string} name
   * @return {undefined}
   */
  function Pi$jscomp$0(obj, type, name) {
    if (obj) {
      gc$jscomp$0(function() {
        if ("ok" == type) {
          obj(null);
        } else {
          var s = (type || "error").toUpperCase();
          var e = s;
          if (name) {
            /** @type {string} */
            e = e + (": " + name);
          }
          /** @type {!Error} */
          e = Error(e);
          e.code = s;
          obj(e);
        }
      });
    }
  }
  /**
   * @param {!Object} e
   * @param {string} name
   * @param {!Object} data
   * @param {string} value
   * @param {string} cell
   * @return {undefined}
   */
  function Si$jscomp$0(e, name, data, value, cell) {
    /**
     * @return {undefined}
     */
    function f() {
    }
    e.f("transaction on " + name);
    var instance = new X$jscomp$2(e, name);
    instance.Ib("value", f);
    data = {
      path : name,
      update : data,
      I : value,
      status : null,
      Lf : id$jscomp$5(),
      gf : cell,
      Sf : 0,
      le : function() {
        instance.mc("value", f);
      },
      ne : null,
      Da : null,
      rd : null,
      sd : null,
      td : null
    };
    value = e.M.Aa(name, void 0) || H$jscomp$2;
    /** @type {string} */
    data.rd = value;
    value = data.update(value.J());
    if (p$jscomp$13(value)) {
      hg$jscomp$0("transaction failed: Data returned ", value, data.path);
      /** @type {number} */
      data.status = 1;
      cell = Xf$jscomp$0(e.yc, name);
      var doc = cell.Ea() || [];
      doc.push(data);
      Yf$jscomp$0(cell, doc);
      if ("object" === typeof value && null !== value && y$jscomp$63(value, ".priority")) {
        doc = z$jscomp$13(value, ".priority");
        O$jscomp$3(fg$jscomp$0(doc), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
      } else {
        doc = (e.M.Aa(name) || H$jscomp$2).C().J();
      }
      cell = Mi$jscomp$0(e);
      value = Q$jscomp$2(value, doc);
      cell = Xc$jscomp$0(value, cell);
      /** @type {string} */
      data.sd = value;
      /** @type {string} */
      data.td = cell;
      /** @type {number} */
      data.Da = e.Kd++;
      data = pi$jscomp$0(e.M, name, cell, data.Da, data.gf);
      dc$jscomp$0(e.fa, name, data);
      Ti$jscomp$0(e);
    } else {
      data.le();
      /** @type {null} */
      data.sd = null;
      /** @type {null} */
      data.td = null;
      if (data.I) {
        e = new W$jscomp$2(data.rd, new X$jscomp$2(e, data.path), R$jscomp$2);
        data.I(null, false, e);
      }
    }
  }
  /**
   * @param {!Object} o
   * @param {string} b
   * @return {undefined}
   */
  function Ti$jscomp$0(o, b) {
    var c = b || o.yc;
    if (!b) {
      Ui$jscomp$0(o, c);
    }
    if (null !== c.Ea()) {
      var d = Vi$jscomp$0(o, c);
      O$jscomp$3(0 < d.length, "Sending zero length transaction queue");
      if (Qa$jscomp$0(d, function(testsStatus) {
        return 1 === testsStatus.status;
      })) {
        Wi$jscomp$0(o, c.path(), d);
      }
    } else {
      if (c.zd()) {
        c.R(function(b) {
          Ti$jscomp$0(o, b);
        });
      }
    }
  }
  /**
   * @param {!Object} self
   * @param {string} event
   * @param {string} data
   * @return {undefined}
   */
  function Wi$jscomp$0(self, event, data) {
    var t = Oa$jscomp$0(data, function(a) {
      return a.Da;
    });
    var opts = self.M.Aa(event, t) || H$jscomp$2;
    t = opts;
    opts = opts.hash();
    /** @type {number} */
    var i = 0;
    for (; i < data.length; i++) {
      var item = data[i];
      O$jscomp$3(1 === item.status, "tryToSendTransactionQueue_: items in queue should all be run.");
      /** @type {number} */
      item.status = 2;
      item.Sf++;
      var y = lf$jscomp$0(event, item.path);
      t = t.H(y, item.sd);
    }
    t = t.J(true);
    self.da.put(event.toString(), t, function(rows) {
      self.f("transaction put response", {
        path : event.toString(),
        status : rows
      });
      /** @type {!Array} */
      var e = [];
      if ("ok" === rows) {
        /** @type {!Array} */
        rows = [];
        /** @type {number} */
        i = 0;
        for (; i < data.length; i++) {
          /** @type {number} */
          data[i].status = 3;
          /** @type {!Array<?>} */
          e = e.concat(si$jscomp$0(self.M, data[i].Da));
          if (data[i].I) {
            var x1 = data[i].td;
            var instance = new X$jscomp$2(self, data[i].path);
            rows.push(u$jscomp$22(data[i].I, null, null, true, new W$jscomp$2(x1, instance, R$jscomp$2)));
          }
          data[i].le();
        }
        Ui$jscomp$0(self, Xf$jscomp$0(self.yc, event));
        Ti$jscomp$0(self);
        dc$jscomp$0(self.fa, event, e);
        /** @type {number} */
        i = 0;
        for (; i < rows.length; i++) {
          gc$jscomp$0(rows[i]);
        }
      } else {
        if ("datastale" === rows) {
          /** @type {number} */
          i = 0;
          for (; i < data.length; i++) {
            /** @type {number} */
            data[i].status = 4 === data[i].status ? 5 : 1;
          }
        } else {
          S$jscomp$3("transaction at " + event.toString() + " failed: " + rows);
          /** @type {number} */
          i = 0;
          for (; i < data.length; i++) {
            /** @type {number} */
            data[i].status = 5;
            /** @type {string} */
            data[i].ne = rows;
          }
        }
        Ni$jscomp$0(self, event);
      }
    }, opts);
  }
  /**
   * @param {!Object} a
   * @param {!Object} v
   * @return {?}
   */
  function Ni$jscomp$0(a, v) {
    var url = Xi$jscomp$0(a, v);
    var nearFile = url.path();
    url = Vi$jscomp$0(a, url);
    Yi$jscomp$0(a, url, nearFile);
    return nearFile;
  }
  /**
   * @param {!Object} node
   * @param {!Object} item
   * @param {undefined} file
   * @return {undefined}
   */
  function Yi$jscomp$0(node, item, file) {
    if (0 !== item.length) {
      /** @type {!Array} */
      var result = [];
      /** @type {!Array} */
      var urlParams = [];
      var f = Na$jscomp$0(item, function(testsStatus) {
        return 1 === testsStatus.status;
      });
      f = Oa$jscomp$0(f, function(a) {
        return a.Da;
      });
      /** @type {number} */
      var i = 0;
      for (; i < item.length; i++) {
        var data = item[i];
        var target = lf$jscomp$0(file, data.path);
        /** @type {boolean} */
        var l = false;
        var msg;
        O$jscomp$3(null !== target, "rerunTransactionsUnderNode_: relativePath should not be null.");
        if (5 === data.status) {
          /** @type {boolean} */
          l = true;
          msg = data.ne;
          /** @type {!Array<?>} */
          urlParams = urlParams.concat(si$jscomp$0(node.M, data.Da, true));
        } else {
          if (1 === data.status) {
            if (25 <= data.Sf) {
              /** @type {boolean} */
              l = true;
              /** @type {string} */
              msg = "maxretry";
              /** @type {!Array<?>} */
              urlParams = urlParams.concat(si$jscomp$0(node.M, data.Da, true));
            } else {
              var key = node.M.Aa(data.path, f) || H$jscomp$2;
              data.rd = key;
              var value = item[i].update(key.J());
              if (p$jscomp$13(value)) {
                hg$jscomp$0("transaction failed: Data returned ", value, data.path);
                target = Q$jscomp$2(value);
                if (!("object" === typeof value && null != value && y$jscomp$63(value, ".priority"))) {
                  target = target.ia(key.C());
                }
                key = data.Da;
                value = Mi$jscomp$0(node);
                value = Xc$jscomp$0(target, value);
                data.sd = target;
                data.td = value;
                /** @type {number} */
                data.Da = node.Kd++;
                Ta$jscomp$0(f, key);
                /** @type {!Array<?>} */
                urlParams = urlParams.concat(pi$jscomp$0(node.M, data.path, value, data.Da, data.gf));
                /** @type {!Array<?>} */
                urlParams = urlParams.concat(si$jscomp$0(node.M, key, true));
              } else {
                /** @type {boolean} */
                l = true;
                /** @type {string} */
                msg = "nodata";
                /** @type {!Array<?>} */
                urlParams = urlParams.concat(si$jscomp$0(node.M, data.Da, true));
              }
            }
          }
        }
        dc$jscomp$0(node.fa, file, urlParams);
        /** @type {!Array} */
        urlParams = [];
        if (l) {
          /** @type {number} */
          item[i].status = 3;
          setTimeout(item[i].le, Math.floor(0));
          if (item[i].I) {
            if ("nodata" === msg) {
              data = new X$jscomp$2(node, item[i].path);
              result.push(u$jscomp$22(item[i].I, null, null, false, new W$jscomp$2(item[i].rd, data, R$jscomp$2)));
            } else {
              result.push(u$jscomp$22(item[i].I, null, Error(msg), false, null));
            }
          }
        }
      }
      Ui$jscomp$0(node, node.yc);
      /** @type {number} */
      i = 0;
      for (; i < result.length; i++) {
        gc$jscomp$0(result[i]);
      }
      Ti$jscomp$0(node);
    }
  }
  /**
   * @param {!Object} actual
   * @param {!Object} val
   * @return {?}
   */
  function Xi$jscomp$0(actual, val) {
    var start;
    var parsed = actual.yc;
    for (; null !== (start = K$jscomp$2(val)) && null === parsed.Ea();) {
      parsed = Xf$jscomp$0(parsed, start);
      val = N$jscomp$3(val);
    }
    return parsed;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} module
   * @return {?}
   */
  function Vi$jscomp$0(obj, module) {
    /** @type {!Array} */
    var payload = [];
    Zi$jscomp$0(obj, module, payload);
    payload.sort(function(b, a) {
      return b.Lf - a.Lf;
    });
    return payload;
  }
  /**
   * @param {!Object} num
   * @param {!Object} parent
   * @param {!Array} fragment
   * @return {undefined}
   */
  function Zi$jscomp$0(num, parent, fragment) {
    var cells = parent.Ea();
    if (null !== cells) {
      /** @type {number} */
      var i = 0;
      for (; i < cells.length; i++) {
        fragment.push(cells[i]);
      }
    }
    parent.R(function(reportsElement) {
      Zi$jscomp$0(num, reportsElement, fragment);
    });
  }
  /**
   * @param {!Object} element
   * @param {!Object} opts
   * @return {undefined}
   */
  function Ui$jscomp$0(element, opts) {
    var ret = opts.Ea();
    if (ret) {
      /** @type {number} */
      var cnt = 0;
      /** @type {number} */
      var i = 0;
      for (; i < ret.length; i++) {
        if (3 !== ret[i].status) {
          ret[cnt] = ret[i];
          cnt++;
        }
      }
      /** @type {number} */
      ret.length = cnt;
      Yf$jscomp$0(opts, 0 < ret.length ? ret : null);
    }
    opts.R(function(options_obejct) {
      Ui$jscomp$0(element, options_obejct);
    });
  }
  /**
   * @param {!Object} type
   * @param {string} key
   * @return {?}
   */
  function Qi$jscomp$0(type, key) {
    var c = Xi$jscomp$0(type, key).path();
    var id = Xf$jscomp$0(type.yc, key);
    ag$jscomp$0(id, function(derTrigger) {
      $i$jscomp$0(type, derTrigger);
    });
    $i$jscomp$0(type, id);
    $f$jscomp$0(id, function(derTrigger) {
      $i$jscomp$0(type, derTrigger);
    });
    return c;
  }
  /**
   * @param {!Object} data
   * @param {!Object} key
   * @return {undefined}
   */
  function $i$jscomp$0(data, key) {
    var r = key.Ea();
    if (null !== r) {
      /** @type {!Array} */
      var result = [];
      /** @type {!Array} */
      var e = [];
      /** @type {number} */
      var j = -1;
      /** @type {number} */
      var i = 0;
      for (; i < r.length; i++) {
        if (4 !== r[i].status) {
          if (2 === r[i].status) {
            O$jscomp$3(j === i - 1, "All SENT items should be at beginning of queue.");
            /** @type {number} */
            j = i;
            /** @type {number} */
            r[i].status = 4;
            /** @type {string} */
            r[i].ne = "set";
          } else {
            O$jscomp$3(1 === r[i].status, "Unexpected transaction status in abort");
            r[i].le();
            /** @type {!Array<?>} */
            e = e.concat(si$jscomp$0(data.M, r[i].Da, true));
            if (r[i].I) {
              result.push(u$jscomp$22(r[i].I, null, Error("set"), false, null));
            }
          }
        }
      }
      if (-1 === j) {
        Yf$jscomp$0(key, null);
      } else {
        /** @type {number} */
        r.length = j + 1;
      }
      dc$jscomp$0(data.fa, key.path(), e);
      /** @type {number} */
      i = 0;
      for (; i < result.length; i++) {
        gc$jscomp$0(result[i]);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function aj$jscomp$0() {
    this.sc = {};
    /** @type {boolean} */
    this.ag = false;
  }
  /**
   * @param {string} d
   * @param {string} date
   * @param {string} y
   * @param {number} node
   * @return {undefined}
   */
  function Y$jscomp$2(d, date, y, node) {
    /** @type {string} */
    this.k = d;
    /** @type {string} */
    this.path = date;
    /** @type {string} */
    this.n = y;
    /** @type {number} */
    this.pc = node;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function bj$jscomp$0(node) {
    /** @type {null} */
    var x = null;
    /** @type {null} */
    var o = null;
    if (node.oa) {
      x = Od$jscomp$0(node);
    }
    if (node.ra) {
      o = Rd$jscomp$0(node);
    }
    if (node.g === re$jscomp$2) {
      if (node.oa) {
        if ("[MIN_NAME]" != Nd$jscomp$0(node)) {
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        }
        if ("string" !== typeof x) {
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
        }
      }
      if (node.ra) {
        if ("[MAX_NAME]" != Pd$jscomp$0(node)) {
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        }
        if ("string" !== typeof o) {
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
        }
      }
    } else {
      if (node.g === R$jscomp$2) {
        if (null != x && !fg$jscomp$0(x) || null != o && !fg$jscomp$0(o)) {
          throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        }
      } else {
        if (O$jscomp$3(node.g instanceof ve$jscomp$2 || node.g === Be$jscomp$1, "unknown index type."), null != x && "object" === typeof x || null != o && "object" === typeof o) {
          throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
        }
      }
    }
  }
  /**
   * @param {?} node
   * @return {undefined}
   */
  function cj$jscomp$0(node) {
    if (node.oa && node.ra && node.la && (!node.la || "" === node.Rb)) {
      throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
    }
  }
  /**
   * @param {!Object} s
   * @param {string} index
   * @return {undefined}
   */
  function dj$jscomp$0(s, index) {
    if (true === s.pc) {
      throw Error(index + ": You can't combine multiple orderBy calls.");
    }
  }
  /**
   * @param {string} a
   * @param {!Object} b
   * @param {!Object} s
   * @return {?}
   */
  function ej$jscomp$0(a, b, s) {
    var result = {
      cancel : null,
      Qa : null
    };
    if (b && s) {
      /** @type {!Object} */
      result.cancel = b;
      F$jscomp$2(a, 3, result.cancel, true);
      /** @type {!Object} */
      result.Qa = s;
      Qb$jscomp$0(a, 4, result.Qa);
    } else {
      if (b) {
        if ("object" === typeof b && null !== b) {
          /** @type {!Object} */
          result.Qa = b;
        } else {
          if ("function" === typeof b) {
            /** @type {!Object} */
            result.cancel = b;
          } else {
            throw Error(E$jscomp$3(a, 3, true) + " must either be a cancel callback or a context object.");
          }
        }
      }
    }
    return result;
  }
  /**
   * @param {(Object|string)} a
   * @param {(Object|string)} v
   * @return {undefined}
   */
  function X$jscomp$2(a, v) {
    var val;
    var t;
    var s;
    if (a instanceof Ji$jscomp$0) {
      /** @type {(Object|string)} */
      val = a;
      /** @type {(Object|string)} */
      t = v;
    } else {
      D$jscomp$3("new Firebase", 1, 2, arguments.length);
      t = sd$jscomp$0(arguments[0]);
      val = t.fh;
      if ("firebase" === t.domain) {
        rd$jscomp$0(t.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
      }
      if (!(val && "undefined" != val)) {
        rd$jscomp$0("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
      }
      if (!t.ob) {
        if ("undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:")) {
          S$jscomp$3("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        }
      }
      val = new dd$jscomp$0(t.host, t.ob, val, "ws" === t.scheme || "wss" === t.scheme);
      t = new P$jscomp$3(t.bd);
      s = t.toString();
      var k;
      if (!(k = !q$jscomp$3(val.host) || 0 === val.host.length || !eg$jscomp$0(val.lc)) && (k = 0 !== s.length)) {
        if (s) {
          s = s.replace(/^\/*\.info(\/|$)/, "/");
        }
        /** @type {boolean} */
        k = !(q$jscomp$3(s) && 0 !== s.length && !cg$jscomp$0.test(s));
      }
      if (k) {
        throw Error(E$jscomp$3("new Firebase", 1, false) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
      }
      if (v) {
        if (v instanceof aj$jscomp$0) {
          /** @type {(Object|string)} */
          s = v;
        } else {
          if (q$jscomp$3(v)) {
            s = aj$jscomp$0.yb();
            /** @type {(Object|string)} */
            val.Rd = v;
          } else {
            throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
          }
        }
      } else {
        s = aj$jscomp$0.yb();
      }
      k = val.toString();
      var c = z$jscomp$13(s.sc, k);
      if (!c) {
        c = new Ji$jscomp$0(val, s.ag);
        s.sc[k] = c;
      }
      val = c;
    }
    Y$jscomp$2.call(this, val, t, De$jscomp$1, false);
    this.then = void 0;
    this["catch"] = void 0;
  }
  var h$jscomp$18;
  var n$jscomp$273 = this;
  /** @type {function(): number} */
  var ja$jscomp$0 = Date.now || function() {
    return +new Date;
  };
  ka$jscomp$0(la$jscomp$0, Error);
  /** @type {string} */
  la$jscomp$0.prototype.name = "CustomError";
  /** @type {!Array<string>} */
  var xa$jscomp$0 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var Da$jscomp$0 = {
    '"' : '\\"',
    "\\" : "\\\\",
    "/" : "\\/",
    "\b" : "\\b",
    "\f" : "\\f",
    "\n" : "\\n",
    "\r" : "\\r",
    "\t" : "\\t",
    "\x0B" : "\\u000b"
  };
  /** @type {!RegExp} */
  var Ea$jscomp$0 = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  var w$jscomp$10;
  a: {
    var Ga$jscomp$0 = n$jscomp$273.navigator;
    if (Ga$jscomp$0) {
      var Ha$jscomp$0 = Ga$jscomp$0.userAgent;
      if (Ha$jscomp$0) {
        w$jscomp$10 = Ha$jscomp$0;
        break a;
      }
    }
    /** @type {string} */
    w$jscomp$10 = "";
  }
  ka$jscomp$0(Ja$jscomp$0, Ia$jscomp$0);
  /**
   * @return {undefined}
   */
  Ja$jscomp$0.prototype.reset = function() {
    /** @type {number} */
    this.P[0] = 1732584193;
    /** @type {number} */
    this.P[1] = 4023233417;
    /** @type {number} */
    this.P[2] = 2562383102;
    /** @type {number} */
    this.P[3] = 271733878;
    /** @type {number} */
    this.P[4] = 3285377520;
    /** @type {number} */
    this.ge = this.ec = 0;
  };
  /**
   * @param {?} a
   * @param {number} b
   * @return {undefined}
   */
  Ja$jscomp$0.prototype.update = function(a, b) {
    if (null != a) {
      if (!p$jscomp$13(b)) {
        b = a.length;
      }
      /** @type {number} */
      var c = b - this.Ya;
      /** @type {number} */
      var x = 0;
      var r = this.pe;
      var i = this.ec;
      for (; x < b;) {
        if (0 == i) {
          for (; x <= c;) {
            Ka$jscomp$0(this, a, x);
            x = x + this.Ya;
          }
        }
        if (q$jscomp$3(a)) {
          for (; x < b;) {
            if (r[i] = a.charCodeAt(x), ++i, ++x, i == this.Ya) {
              Ka$jscomp$0(this, r);
              /** @type {number} */
              i = 0;
              break;
            }
          }
        } else {
          for (; x < b;) {
            if (r[i] = a[x], ++i, ++x, i == this.Ya) {
              Ka$jscomp$0(this, r);
              /** @type {number} */
              i = 0;
              break;
            }
          }
        }
      }
      this.ec = i;
      this.ge += b;
    }
  };
  var x$jscomp$78 = Array.prototype;
  /** @type {function(?, string, ?): ?} */
  var La$jscomp$0 = x$jscomp$78.indexOf ? function(a, type, refC) {
    return x$jscomp$78.indexOf.call(a, type, refC);
  } : function(a, value, i) {
    i = null == i ? 0 : 0 > i ? Math.max(0, a.length + i) : i;
    if (q$jscomp$3(a)) {
      return q$jscomp$3(value) && 1 == value.length ? a.indexOf(value, i) : -1;
    }
    for (; i < a.length; i++) {
      if (i in a && a[i] === value) {
        return i;
      }
    }
    return -1;
  };
  /** @type {function(!Object, !Function, ?): undefined} */
  var Ma$jscomp$0 = x$jscomp$78.forEach ? function(source, p1__3354_SHARP_, refC) {
    x$jscomp$78.forEach.call(source, p1__3354_SHARP_, refC);
  } : function(path, util, c) {
    var length = path.length;
    var keys = q$jscomp$3(path) ? path.split("") : path;
    /** @type {number} */
    var i = 0;
    for (; i < length; i++) {
      if (i in keys) {
        util.call(c, keys[i], i, path);
      }
    }
  };
  /** @type {function(!Object, !Function, ?): ?} */
  var Na$jscomp$0 = x$jscomp$78.filter ? function(obj, p1__3354_SHARP_, refC) {
    return x$jscomp$78.filter.call(obj, p1__3354_SHARP_, refC);
  } : function(path, util, repo) {
    var length = path.length;
    /** @type {!Array} */
    var resp = [];
    /** @type {number} */
    var offset = 0;
    var value = q$jscomp$3(path) ? path.split("") : path;
    /** @type {number} */
    var key = 0;
    for (; key < length; key++) {
      if (key in value) {
        var val = value[key];
        if (util.call(repo, val, key, path)) {
          resp[offset++] = val;
        }
      }
    }
    return resp;
  };
  /** @type {function(string, !Function, ?): ?} */
  var Oa$jscomp$0 = x$jscomp$78.map ? function(data, p1__3354_SHARP_, refC) {
    return x$jscomp$78.map.call(data, p1__3354_SHARP_, refC);
  } : function(path, callback, img) {
    var length = path.length;
    /** @type {!Array} */
    var result = Array(length);
    var value = q$jscomp$3(path) ? path.split("") : path;
    /** @type {number} */
    var key = 0;
    for (; key < length; key++) {
      if (key in value) {
        result[key] = callback.call(img, value[key], key, path);
      }
    }
    return result;
  };
  /** @type {function(!Object, !Function, number, ?): ?} */
  var Pa$jscomp$0 = x$jscomp$78.reduce ? function(a, val, addedRenderer, r) {
    /** @type {!Array} */
    var data = [];
    /** @type {number} */
    var i = 1;
    /** @type {number} */
    var argl = arguments.length;
    for (; i < argl; i++) {
      data.push(arguments[i]);
    }
    if (r) {
      data[0] = u$jscomp$22(val, r);
    }
    return x$jscomp$78.reduce.apply(a, data);
  } : function(props, self, checking, o) {
    /** @type {number} */
    var ret = checking;
    Ma$jscomp$0(props, function(linear, extra) {
      ret = self.call(o, ret, linear, extra, props);
    });
    return ret;
  };
  /** @type {function(?, !Function, ?): ?} */
  var Qa$jscomp$0 = x$jscomp$78.every ? function(deps, p1__3354_SHARP_, refC) {
    return x$jscomp$78.every.call(deps, p1__3354_SHARP_, refC);
  } : function(path, util, c) {
    var length = path.length;
    var keys = q$jscomp$3(path) ? path.split("") : path;
    /** @type {number} */
    var i = 0;
    for (; i < length; i++) {
      if (i in keys && !util.call(c, keys[i], i, path)) {
        return false;
      }
    }
    return true;
  };
  var Ya$jscomp$0;
  var ab$jscomp$0;
  /** @type {boolean} */
  var cb$jscomp$0 = false;
  /** @type {!Array} */
  var db$jscomp$1 = [];
  [].push(function() {
    /** @type {boolean} */
    cb$jscomp$0 = false;
    /** @type {!Array} */
    db$jscomp$1 = [];
  });
  /** @type {boolean} */
  var gb$jscomp$0 = -1 != w$jscomp$10.indexOf("Opera") || -1 != w$jscomp$10.indexOf("OPR");
  /** @type {boolean} */
  var hb$jscomp$0 = -1 != w$jscomp$10.indexOf("Trident") || -1 != w$jscomp$10.indexOf("MSIE");
  /** @type {boolean} */
  var ib$jscomp$0 = -1 != w$jscomp$10.indexOf("Gecko") && -1 == w$jscomp$10.toLowerCase().indexOf("webkit") && !(-1 != w$jscomp$10.indexOf("Trident") || -1 != w$jscomp$10.indexOf("MSIE"));
  /** @type {boolean} */
  var jb$jscomp$0 = -1 != w$jscomp$10.toLowerCase().indexOf("webkit");
  (function() {
    /** @type {string} */
    var result = "";
    var t;
    if (gb$jscomp$0 && n$jscomp$273.opera) {
      return result = n$jscomp$273.opera.version, r$jscomp$201(result) ? result() : result;
    }
    if (ib$jscomp$0) {
      /** @type {!RegExp} */
      t = /rv:([^\);]+)(\)|;)/;
    } else {
      if (hb$jscomp$0) {
        /** @type {!RegExp} */
        t = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
      } else {
        if (jb$jscomp$0) {
          /** @type {!RegExp} */
          t = /WebKit\/(\S+)/;
        }
      }
    }
    if (t) {
      result = (result = t.exec(w$jscomp$10)) ? result[1] : "";
    }
    return hb$jscomp$0 && (t = (t = n$jscomp$273.document) ? t.documentMode : void 0, t > parseFloat(result)) ? String(t) : result;
  })();
  /** @type {null} */
  var kb$jscomp$0 = null;
  /** @type {null} */
  var lb$jscomp$0 = null;
  /** @type {null} */
  var mb$jscomp$0 = null;
  /** @type {number} */
  var qb$jscomp$0 = 0;
  /** @type {number} */
  var tb$jscomp$0 = 2;
  /** @type {number} */
  var vb$jscomp$0 = 3;
  /**
   * @param {!Function} error
   * @param {string} type
   * @param {!Object} f
   * @return {?}
   */
  pb$jscomp$0.prototype.then = function(error, type, f) {
    return wb$jscomp$0(this, r$jscomp$201(error) ? error : null, r$jscomp$201(type) ? type : null, f);
  };
  /** @type {function(!Function, string, !Object): ?} */
  pb$jscomp$0.prototype.then = pb$jscomp$0.prototype.then;
  /** @type {boolean} */
  pb$jscomp$0.prototype.$goog_Thenable = true;
  h$jscomp$18 = pb$jscomp$0.prototype;
  /**
   * @param {!Function} command
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.gh = function(command, data) {
    return wb$jscomp$0(this, null, command, data);
  };
  /**
   * @param {?} el
   * @return {undefined}
   */
  h$jscomp$18.cancel = function(el) {
    if (this.N == qb$jscomp$0) {
      $a$jscomp$0(function() {
        var childIterator = new ub$jscomp$0(el);
        xb$jscomp$0(this, childIterator);
      }, this);
    }
  };
  /**
   * @param {?} a
   * @return {undefined}
   */
  h$jscomp$18.Yf = function(a) {
    /** @type {number} */
    this.N = qb$jscomp$0;
    sb$jscomp$0(this, tb$jscomp$0, a);
  };
  /**
   * @param {?} ast
   * @return {undefined}
   */
  h$jscomp$18.Zf = function(ast) {
    /** @type {number} */
    this.N = qb$jscomp$0;
    sb$jscomp$0(this, vb$jscomp$0, ast);
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.wg = function() {
    for (; this.Ba && this.Ba.length;) {
      var spheres = this.Ba;
      /** @type {null} */
      this.Ba = null;
      /** @type {number} */
      var iter_sph = 0;
      for (; iter_sph < spheres.length; iter_sph++) {
        yb$jscomp$0(this, spheres[iter_sph], this.N, this.Rf);
      }
    }
    /** @type {boolean} */
    this.ye = false;
  };
  /** @type {function(?): undefined} */
  var Db$jscomp$0 = Xa$jscomp$0;
  ka$jscomp$0(ub$jscomp$0, la$jscomp$0);
  /** @type {string} */
  ub$jscomp$0.prototype.name = "cancel";
  /** @type {string} */
  var Eb$jscomp$0 = Eb$jscomp$0 || "2.4.2";
  var Mb$jscomp$0 = n$jscomp$273.Promise || pb$jscomp$0;
  /** @type {function(!Function, !Object): ?} */
  pb$jscomp$0.prototype["catch"] = pb$jscomp$0.prototype.gh;
  /**
   * @param {!Object} f
   * @return {?}
   */
  Sb$jscomp$0.prototype.j = function(f) {
    return this.Zd.S(f);
  };
  /**
   * @return {?}
   */
  Sb$jscomp$0.prototype.toString = function() {
    return this.Zd.toString();
  };
  /**
   * @return {?}
   */
  Tb$jscomp$0.prototype.uf = function() {
    return null;
  };
  /**
   * @return {?}
   */
  Tb$jscomp$0.prototype.Ce = function() {
    return null;
  };
  var Ub$jscomp$0 = new Tb$jscomp$0;
  /**
   * @param {boolean} i
   * @return {?}
   */
  Vb$jscomp$0.prototype.uf = function(i) {
    var j = this.Oa.Q;
    if (Wb$jscomp$0(j, i)) {
      return j.j().T(i);
    }
    j = null != this.Nd ? new Xb$jscomp$0(this.Nd, true, false) : this.Oa.w();
    return this.bg.Bc(i, j);
  };
  /**
   * @param {string} data
   * @param {(Object|string)} id
   * @param {undefined} h
   * @return {?}
   */
  Vb$jscomp$0.prototype.Ce = function(data, id, h) {
    var y = null != this.Nd ? this.Nd : Yb$jscomp$0(this.Oa);
    data = this.bg.qe(y, id, 1, h, data);
    return 0 === data.length ? null : data[0];
  };
  /**
   * @param {!Function} type
   * @return {undefined}
   */
  ac$jscomp$0.prototype.add = function(type) {
    this.xd.push(type);
  };
  /**
   * @return {?}
   */
  ac$jscomp$0.prototype.cc = function() {
    return this.ta;
  };
  /** @type {string} */
  var ic$jscomp$0 = "value";
  /**
   * @return {?}
   */
  jc$jscomp$0.prototype.cc = function() {
    var options = this.be.Mb();
    return "value" === this.wd ? options.path : options.parent().path;
  };
  /**
   * @return {?}
   */
  jc$jscomp$0.prototype.De = function() {
    return this.wd;
  };
  /**
   * @return {?}
   */
  jc$jscomp$0.prototype.Zb = function() {
    return this.xe.Zb(this);
  };
  /**
   * @return {?}
   */
  jc$jscomp$0.prototype.toString = function() {
    return this.cc().toString() + ":" + this.wd + ":" + G$jscomp$2(this.be.qf());
  };
  /**
   * @return {?}
   */
  kc$jscomp$0.prototype.cc = function() {
    return this.path;
  };
  /**
   * @return {?}
   */
  kc$jscomp$0.prototype.De = function() {
    return "cancel";
  };
  /**
   * @return {?}
   */
  kc$jscomp$0.prototype.Zb = function() {
    return this.xe.Zb(this);
  };
  /**
   * @return {?}
   */
  kc$jscomp$0.prototype.toString = function() {
    return this.path.toString() + ":cancel";
  };
  /**
   * @return {?}
   */
  Xb$jscomp$0.prototype.j = function() {
    return this.A;
  };
  /**
   * @return {?}
   */
  oc$jscomp$0.prototype.get = function() {
    var item = this.pg.get();
    var bbox = wa$jscomp$0(item);
    if (this.Gd) {
      var sizeAttr;
      for (sizeAttr in this.Gd) {
        bbox[sizeAttr] -= this.Gd[sizeAttr];
      }
    }
    this.Gd = item;
    return bbox;
  };
  /**
   * @return {undefined}
   */
  pc$jscomp$0.prototype.Of = function() {
    var jobInfoUpdate = this.hd.get();
    var jobInfo = {};
    /** @type {boolean} */
    var c = false;
    var i;
    for (i in jobInfoUpdate) {
      if (0 < jobInfoUpdate[i] && y$jscomp$63(this.Vf, i)) {
        jobInfo[i] = jobInfoUpdate[i];
        /** @type {boolean} */
        c = true;
      }
    }
    if (c) {
      this.da.Ye(jobInfo);
    }
    setTimeout(u$jscomp$22(this.Of, this), Math.floor(6E5 * Math.random()));
  };
  /**
   * @return {?}
   */
  qc$jscomp$0.prototype.get = function() {
    return wa$jscomp$0(this.Hc);
  };
  var sc$jscomp$0 = {};
  var tc$jscomp$0 = {};
  /**
   * @param {string} i
   * @return {?}
   */
  Ac$jscomp$0.prototype.$c = function(i) {
    return this.path.e() ? new Ac$jscomp$0(this.source, M$jscomp$2, this.Ja.T(i)) : new Ac$jscomp$0(this.source, N$jscomp$3(this.path), this.Ja);
  };
  /**
   * @return {?}
   */
  Ac$jscomp$0.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ja.toString() + ")";
  };
  /**
   * @return {?}
   */
  Cc$jscomp$0.prototype.$c = function() {
    return this.path.e() ? new Cc$jscomp$0(this.source, M$jscomp$2) : new Cc$jscomp$0(this.source, N$jscomp$3(this.path));
  };
  /**
   * @return {?}
   */
  Cc$jscomp$0.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)";
  };
  h$jscomp$18 = Ec$jscomp$0.prototype;
  /**
   * @param {string} value
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.Sa = function(value, data) {
    return new Ec$jscomp$0(this.Pa, this.xa.Sa(value, data, this.Pa).$(null, null, false, null, null));
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  h$jscomp$18.remove = function(value) {
    return new Ec$jscomp$0(this.Pa, this.xa.remove(value, this.Pa).$(null, null, false, null, null));
  };
  /**
   * @param {!Object} id
   * @return {?}
   */
  h$jscomp$18.get = function(id) {
    var group_container;
    var current = this.xa;
    for (; !current.e();) {
      group_container = this.Pa(id, current.key);
      if (0 === group_container) {
        return current.value;
      }
      if (0 > group_container) {
        current = current.left;
      } else {
        if (0 < group_container) {
          current = current.right;
        }
      }
    }
    return null;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return this.xa.e();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.count = function() {
    return this.xa.count();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Vc = function() {
    return this.xa.Vc();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.jc = function() {
    return this.xa.jc();
  };
  /**
   * @param {!Function} f
   * @return {?}
   */
  h$jscomp$18.ka = function(f) {
    return this.xa.ka(f);
  };
  /**
   * @param {!Object} var_args
   * @return {?}
   */
  h$jscomp$18.ac = function(var_args) {
    return new Hc$jscomp$0(this.xa, null, this.Pa, false, var_args);
  };
  /**
   * @param {string} args
   * @param {string} name
   * @return {?}
   */
  h$jscomp$18.bc = function(args, name) {
    return new Hc$jscomp$0(this.xa, args, this.Pa, false, name);
  };
  /**
   * @param {!Function} val
   * @param {number} n
   * @return {?}
   */
  h$jscomp$18.dc = function(val, n) {
    return new Hc$jscomp$0(this.xa, val, this.Pa, true, n);
  };
  /**
   * @param {number} server
   * @return {?}
   */
  h$jscomp$18.xf = function(server) {
    return new Hc$jscomp$0(this.xa, null, this.Pa, true, server);
  };
  h$jscomp$18 = Kc$jscomp$0.prototype;
  /**
   * @param {?} name
   * @param {!Object} path
   * @param {string} context
   * @param {?} e
   * @param {?} id
   * @return {?}
   */
  h$jscomp$18.$ = function(name, path, context, e, id) {
    return new Kc$jscomp$0(null != name ? name : this.key, null != path ? path : this.value, null != context ? context : this.color, null != e ? e : this.left, null != id ? id : this.right);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.count = function() {
    return this.left.count() + 1 + this.right.count();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return false;
  };
  /**
   * @param {!Function} f
   * @return {?}
   */
  h$jscomp$18.ka = function(f) {
    return this.left.ka(f) || f(this.key, this.value) || this.right.ka(f);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Vc = function() {
    return Lc$jscomp$0(this).key;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.jc = function() {
    return this.right.e() ? this.key : this.right.jc();
  };
  /**
   * @param {string} a
   * @param {!Object} value
   * @param {?} equals
   * @return {?}
   */
  h$jscomp$18.Sa = function(a, value, equals) {
    var obj;
    var f;
    f = this;
    obj = equals(a, f.key);
    f = 0 > obj ? f.$(null, null, null, f.left.Sa(a, value, equals), null) : 0 === obj ? f.$(null, value, null, null, null) : f.$(null, null, null, null, f.right.Sa(a, value, equals));
    return Mc$jscomp$0(f);
  };
  /**
   * @param {!Object} input
   * @param {!Object} callback
   * @return {?}
   */
  h$jscomp$18.remove = function(input, callback) {
    var self;
    var event;
    self = this;
    if (0 > callback(input, self.key)) {
      if (!(self.left.e() || self.left.ha() || self.left.left.ha())) {
        self = Oc$jscomp$0(self);
      }
      self = self.$(null, null, null, self.left.remove(input, callback), null);
    } else {
      if (self.left.ha()) {
        self = Pc$jscomp$0(self);
      }
      if (!(self.right.e() || self.right.ha() || self.right.left.ha())) {
        self = Qc$jscomp$0(self);
        if (self.left.left.ha()) {
          self = Pc$jscomp$0(self);
          self = Qc$jscomp$0(self);
        }
      }
      if (0 === callback(input, self.key)) {
        if (self.right.e()) {
          return Fc$jscomp$0;
        }
        event = Lc$jscomp$0(self.right);
        self = self.$(event.key, event.value, null, null, Nc$jscomp$0(self.right));
      }
      self = self.$(null, null, null, null, self.right.remove(input, callback));
    }
    return Mc$jscomp$0(self);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.ha = function() {
    return this.color;
  };
  h$jscomp$18 = Sc$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.$ = function() {
    return this;
  };
  /**
   * @param {string} d
   * @param {!Object} s
   * @return {?}
   */
  h$jscomp$18.Sa = function(d, s) {
    return new Kc$jscomp$0(d, s, null);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.remove = function() {
    return this;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.count = function() {
    return 0;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return true;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.ka = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Vc = function() {
    return null;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.jc = function() {
    return null;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.ha = function() {
    return false;
  };
  var Fc$jscomp$0 = new Sc$jscomp$0;
  /**
   * @param {!Object} type
   * @param {string} value
   * @return {undefined}
   */
  Zc$jscomp$0.prototype.set = function(type, value) {
    if (null == value) {
      delete this.Ac[type];
    } else {
      /** @type {string} */
      this.Ac[type] = value;
    }
  };
  /**
   * @param {!Object} p
   * @return {?}
   */
  Zc$jscomp$0.prototype.get = function(p) {
    return y$jscomp$63(this.Ac, p) ? this.Ac[p] : null;
  };
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  Zc$jscomp$0.prototype.remove = function(key) {
    delete this.Ac[key];
  };
  /** @type {boolean} */
  Zc$jscomp$0.prototype.Af = true;
  h$jscomp$18 = $c$jscomp$0.prototype;
  /**
   * @param {!Object} type
   * @param {string} value
   * @return {undefined}
   */
  h$jscomp$18.set = function(type, value) {
    if (null == value) {
      this.Ic.removeItem(this.Sd + type);
    } else {
      this.Ic.setItem(this.Sd + type, G$jscomp$2(value));
    }
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  h$jscomp$18.get = function(value) {
    value = this.Ic.getItem(this.Sd + value);
    return null == value ? null : Rb$jscomp$0(value);
  };
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  h$jscomp$18.remove = function(key) {
    this.Ic.removeItem(this.Sd + key);
  };
  /** @type {boolean} */
  h$jscomp$18.Af = false;
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return this.Ic.toString();
  };
  var bd$jscomp$0 = ad$jscomp$0("localStorage");
  var cd$jscomp$0 = ad$jscomp$0("sessionStorage");
  /**
   * @return {?}
   */
  dd$jscomp$0.prototype.toString = function() {
    /** @type {string} */
    var uri = (this.ob ? "https://" : "http://") + this.host;
    if (this.Rd) {
      /** @type {string} */
      uri = uri + ("<" + this.Rd + ">");
    }
    return uri;
  };
  var id$jscomp$5 = function() {
    /** @type {number} */
    var a = 1;
    return function() {
      return a++;
    };
  }();
  /** @type {function(boolean, string): undefined} */
  var O$jscomp$3 = Kb$jscomp$0;
  /** @type {function(string): ?} */
  var jd$jscomp$0 = Lb$jscomp$0;
  /** @type {null} */
  var ec$jscomp$0 = null;
  /** @type {boolean} */
  var nd$jscomp$0 = true;
  /** @type {!RegExp} */
  var Bd$jscomp$0 = /^-?\d{1,10}$/;
  /**
   * @param {?} b
   * @param {?} a
   * @return {?}
   */
  Fd$jscomp$0.prototype.qg = function(b, a) {
    if (null == b.Za || null == a.Za) {
      throw jd$jscomp$0("Should only compare child_ events.");
    }
    return this.g.compare(new L$jscomp$3(b.Za, b.Na), new L$jscomp$3(a.Za, a.Na));
  };
  h$jscomp$18 = Ld$jscomp$0.prototype;
  /**
   * @param {!Object} v
   * @param {!Object} d
   * @param {!Object} t
   * @param {!Object} x
   * @param {!Object} f
   * @param {string} val
   * @return {?}
   */
  h$jscomp$18.H = function(v, d, t, x, f, val) {
    O$jscomp$3(v.Mc(this.g), "A node must be indexed if only a child is updated");
    f = v.T(d);
    if (f.S(x).ea(t.S(x)) && f.e() == t.e()) {
      return v;
    }
    if (null != val) {
      if (t.e()) {
        if (v.Fa(d)) {
          Kd$jscomp$0(val, new J$jscomp$2("child_removed", f, d));
        } else {
          O$jscomp$3(v.L(), "A child remove without an old child only makes sense on a leaf node");
        }
      } else {
        if (f.e()) {
          Kd$jscomp$0(val, new J$jscomp$2("child_added", t, d));
        } else {
          Kd$jscomp$0(val, new J$jscomp$2("child_changed", t, d, f));
        }
      }
    }
    return v.L() && t.e() ? v : v.W(d, t).pb(this.g);
  };
  /**
   * @param {!Object} type
   * @param {!Object} node
   * @param {string} obj
   * @return {?}
   */
  h$jscomp$18.ya = function(type, node, obj) {
    if (null != obj) {
      if (!type.L()) {
        type.R(R$jscomp$2, function(a, ctx) {
          if (!node.Fa(a)) {
            Kd$jscomp$0(obj, new J$jscomp$2("child_removed", ctx, a));
          }
        });
      }
      if (!node.L()) {
        node.R(R$jscomp$2, function(i, item) {
          if (type.Fa(i)) {
            var els = type.T(i);
            if (!els.ea(item)) {
              Kd$jscomp$0(obj, new J$jscomp$2("child_changed", item, i, els));
            }
          } else {
            Kd$jscomp$0(obj, new J$jscomp$2("child_added", item, i));
          }
        });
      }
    }
    return node.pb(this.g);
  };
  /**
   * @param {!Object} n
   * @param {!Object} node
   * @return {?}
   */
  h$jscomp$18.ia = function(n, node) {
    return n.e() ? H$jscomp$2 : n.ia(node);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Ra = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.$b = function() {
    return this;
  };
  h$jscomp$18 = Md$jscomp$0.prototype;
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.matches = function(a) {
    return 0 >= this.g.compare(this.gd, a) && 0 >= this.g.compare(a, this.Jc);
  };
  /**
   * @param {!Object} a
   * @param {!Object} v
   * @param {!Object} c
   * @param {!Object} b
   * @param {!Object} e
   * @param {string} f
   * @return {?}
   */
  h$jscomp$18.H = function(a, v, c, b, e, f) {
    if (!this.matches(new L$jscomp$3(v, c))) {
      c = H$jscomp$2;
    }
    return this.Fe.H(a, v, c, b, e, f);
  };
  /**
   * @param {!Object} y
   * @param {!Object} node
   * @param {string} obj
   * @return {?}
   */
  h$jscomp$18.ya = function(y, node, obj) {
    if (node.L()) {
      node = H$jscomp$2;
    }
    var g = node.pb(this.g);
    g = g.ia(H$jscomp$2);
    var self = this;
    node.R(R$jscomp$2, function(d, playSpeed) {
      if (!self.matches(new L$jscomp$3(d, playSpeed))) {
        g = g.W(d, H$jscomp$2);
      }
    });
    return this.Fe.ya(y, g, obj);
  };
  /**
   * @param {!Object} n
   * @return {?}
   */
  h$jscomp$18.ia = function(n) {
    return n;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Ra = function() {
    return true;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.$b = function() {
    return this.Fe;
  };
  h$jscomp$18 = Sd$jscomp$0.prototype;
  /**
   * @param {!Object} v
   * @param {!Object} i
   * @param {!Object} c
   * @param {!Object} b
   * @param {?} e
   * @param {string} f
   * @return {?}
   */
  h$jscomp$18.H = function(v, i, c, b, e, f) {
    if (!this.ua.matches(new L$jscomp$3(i, c))) {
      c = H$jscomp$2;
    }
    return v.T(i).ea(c) ? v : v.Hb() < this.ma ? this.ua.$b().H(v, i, c, b, e, f) : Ud$jscomp$0(this, v, i, c, e, f);
  };
  /**
   * @param {!Object} val
   * @param {!Object} obj
   * @param {string} arg
   * @return {?}
   */
  h$jscomp$18.ya = function(val, obj, arg) {
    var t;
    if (obj.L() || obj.e()) {
      t = H$jscomp$2.pb(this.g);
    } else {
      if (2 * this.ma < obj.Hb() && obj.Mc(this.g)) {
        t = H$jscomp$2.pb(this.g);
        obj = this.Nb ? obj.dc(this.ua.Jc, this.g) : obj.bc(this.ua.gd, this.g);
        /** @type {number} */
        var e = 0;
        for (; 0 < obj.Ta.length && e < this.ma;) {
          var a = Ic$jscomp$0(obj);
          var g;
          if (g = this.Nb ? 0 >= this.g.compare(this.ua.gd, a) : 0 >= this.g.compare(a, this.ua.Jc)) {
            t = t.W(a.name, a.U);
            e++;
          } else {
            break;
          }
        }
      } else {
        t = obj.pb(this.g);
        t = t.ia(H$jscomp$2);
        var passedValue1;
        var passedValue2;
        var f;
        if (this.Nb) {
          obj = t.xf(this.g);
          passedValue1 = this.ua.Jc;
          passedValue2 = this.ua.gd;
          var g = Vd$jscomp$0(this.g);
          /**
           * @param {!Object} a
           * @param {!Object} b
           * @return {?}
           */
          f = function(a, b) {
            return g(b, a);
          };
        } else {
          obj = t.ac(this.g);
          passedValue1 = this.ua.gd;
          passedValue2 = this.ua.Jc;
          f = Vd$jscomp$0(this.g);
        }
        /** @type {number} */
        e = 0;
        /** @type {boolean} */
        var extnds = false;
        for (; 0 < obj.Ta.length;) {
          a = Ic$jscomp$0(obj);
          if (!extnds && 0 >= f(passedValue1, a)) {
            /** @type {boolean} */
            extnds = true;
          }
          if (g = extnds && e < this.ma && 0 >= f(a, passedValue2)) {
            e++;
          } else {
            t = t.W(a.name, H$jscomp$2);
          }
        }
      }
    }
    return this.ua.$b().ya(val, t, arg);
  };
  /**
   * @param {!Object} n
   * @return {?}
   */
  h$jscomp$18.ia = function(n) {
    return n;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Ra = function() {
    return true;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.$b = function() {
    return this.ua.$b();
  };
  /**
   * @param {!Object} node
   * @param {string} val
   * @param {!Object} result
   * @param {!Object} item
   * @return {?}
   */
  Zd$jscomp$0.prototype.gb = function(node, val, result, item) {
    var f = new Jd$jscomp$0;
    var e;
    if (val.type === Bc$jscomp$0) {
      if (val.source.Ae) {
        result = $d$jscomp$0(this, node, val.path, val.Ja, result, item, f);
      } else {
        O$jscomp$3(val.source.tf, "Unknown source.");
        e = val.source.ef || mc$jscomp$0(node.w()) && !val.path.e();
        result = ae$jscomp$2(this, node, val.path, val.Ja, result, item, e, f);
      }
    } else {
      if (val.type === be$jscomp$2) {
        if (val.source.Ae) {
          result = ce$jscomp$2(this, node, val.path, val.children, result, item, f);
        } else {
          O$jscomp$3(val.source.tf, "Unknown source.");
          e = val.source.ef || mc$jscomp$0(node.w());
          result = de$jscomp$2(this, node, val.path, val.children, result, item, e, f);
        }
      } else {
        if (val.type === ee$jscomp$2) {
          if (val.Yd) {
            if (val = val.path, null != result.xc(val)) {
              /** @type {!Object} */
              result = node;
            } else {
              e = new Vb$jscomp$0(result, node, item);
              item = node.Q.j();
              if (val.e() || ".priority" === K$jscomp$2(val)) {
                if (lc$jscomp$0(node.w())) {
                  val = result.Aa(Yb$jscomp$0(node));
                } else {
                  val = node.w().j();
                  O$jscomp$3(val instanceof fe$jscomp$2, "serverChildren would be complete if leaf node");
                  val = result.Cc(val);
                }
                val = this.X.ya(item, val, f);
              } else {
                var value = K$jscomp$2(val);
                var y = result.Bc(value, node.w());
                if (null == y && Wb$jscomp$0(node.w(), value)) {
                  y = item.T(value);
                }
                val = null != y ? this.X.H(item, value, y, N$jscomp$3(val), e, f) : node.Q.j().Fa(value) ? this.X.H(item, value, H$jscomp$2, N$jscomp$3(val), e, f) : item;
                if (val.e() && lc$jscomp$0(node.w())) {
                  item = result.Aa(Yb$jscomp$0(node));
                  if (item.L()) {
                    val = this.X.ya(val, item, f);
                  }
                }
              }
              item = lc$jscomp$0(node.w()) || null != result.xc(M$jscomp$2);
              result = ge$jscomp$2(node, val, item, this.X.Ra());
            }
          } else {
            result = he$jscomp$2(this, node, val.path, val.Ub, result, item, f);
          }
        } else {
          if (val.type === Dc$jscomp$0) {
            item = val.path;
            val = node.w();
            e = val.j();
            value = val.ga || item.e();
            result = ie$jscomp$2(this, new je$jscomp$1(node.Q, new Xb$jscomp$0(e, value, val.Yb)), item, result, Ub$jscomp$0, f);
          } else {
            throw jd$jscomp$0("Unknown operation type: " + val.type);
          }
        }
      }
    }
    f = qa$jscomp$0(f.ib);
    /** @type {!Object} */
    item = result;
    val = item.Q;
    if (val.ga) {
      e = val.j().L() || val.j().e();
      value = ke$jscomp$1(node);
      if (0 < f.length || !node.Q.ga || e && !val.j().ea(value) || !val.j().C().ea(value.C())) {
        f.push(hc$jscomp$0(ke$jscomp$1(item)));
      }
    }
    return new Yd$jscomp$0(result, f);
  };
  var te$jscomp$2 = {};
  /**
   * @param {(!Function|RegExp|string)} a
   * @param {(!Function|RegExp|string)} b
   * @return {?}
   */
  se$jscomp$2.prototype.Dd = function(a, b) {
    return 0 !== this.compare(new L$jscomp$3("[MIN_NAME]", a), new L$jscomp$3("[MIN_NAME]", b));
  };
  /**
   * @return {?}
   */
  se$jscomp$2.prototype.Wc = function() {
    return ue$jscomp$2;
  };
  ka$jscomp$0(ve$jscomp$2, se$jscomp$2);
  h$jscomp$18 = ve$jscomp$2.prototype;
  /**
   * @param {?} minClientHubInvocation
   * @return {?}
   */
  h$jscomp$18.Lc = function(minClientHubInvocation) {
    return !minClientHubInvocation.S(this.gc).e();
  };
  /**
   * @param {!Object} key
   * @param {!Object} item
   * @return {?}
   */
  h$jscomp$18.compare = function(key, item) {
    var value = key.U.S(this.gc);
    var length = item.U.S(this.gc);
    value = value.Gc(length);
    return 0 === value ? yc$jscomp$0(key.name, item.name) : value;
  };
  /**
   * @param {!Object} callback
   * @param {!Object} id
   * @return {?}
   */
  h$jscomp$18.Sc = function(callback, id) {
    var i = Q$jscomp$2(callback);
    i = H$jscomp$2.H(this.gc, i);
    return new L$jscomp$3(id, i);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Tc = function() {
    var a = H$jscomp$2.H(this.gc, we$jscomp$1);
    return new L$jscomp$3("[MAX_NAME]", a);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return this.gc.slice().join("/");
  };
  ka$jscomp$0(xe$jscomp$2, se$jscomp$2);
  h$jscomp$18 = xe$jscomp$2.prototype;
  /**
   * @param {!Object} node
   * @param {!Object} params
   * @return {?}
   */
  h$jscomp$18.compare = function(node, params) {
    var value = node.U.C();
    var length = params.U.C();
    value = value.Gc(length);
    return 0 === value ? yc$jscomp$0(node.name, params.name) : value;
  };
  /**
   * @param {?} _cmy
   * @return {?}
   */
  h$jscomp$18.Lc = function(_cmy) {
    return !_cmy.C().e();
  };
  /**
   * @param {?} _cmy
   * @param {?} Lua5_1
   * @return {?}
   */
  h$jscomp$18.Dd = function(_cmy, Lua5_1) {
    return !_cmy.C().ea(Lua5_1.C());
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Wc = function() {
    return ue$jscomp$2;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Tc = function() {
    return new L$jscomp$3("[MAX_NAME]", new Yc$jscomp$0("[PRIORITY-POST]", we$jscomp$1));
  };
  /**
   * @param {!Object} input
   * @param {!Object} id
   * @return {?}
   */
  h$jscomp$18.Sc = function(input, id) {
    var els = Q$jscomp$2(input);
    return new L$jscomp$3(id, new Yc$jscomp$0("[PRIORITY-POST]", els));
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return ".priority";
  };
  var R$jscomp$2 = new xe$jscomp$2;
  ka$jscomp$0(ye$jscomp$2, se$jscomp$2);
  h$jscomp$18 = ye$jscomp$2.prototype;
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  h$jscomp$18.compare = function(a, b) {
    return yc$jscomp$0(a.name, b.name);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Lc = function() {
    throw jd$jscomp$0("KeyIndex.isDefinedOn not expected to be called.");
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Dd = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Wc = function() {
    return ue$jscomp$2;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Tc = function() {
    return new L$jscomp$3("[MAX_NAME]", H$jscomp$2);
  };
  /**
   * @param {(Object|string)} id
   * @return {?}
   */
  h$jscomp$18.Sc = function(id) {
    O$jscomp$3(q$jscomp$3(id), "KeyIndex indexValue must always be a string.");
    return new L$jscomp$3(id, H$jscomp$2);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return ".key";
  };
  var re$jscomp$2 = new ye$jscomp$2;
  ka$jscomp$0(ze$jscomp$1, se$jscomp$2);
  h$jscomp$18 = ze$jscomp$1.prototype;
  /**
   * @param {!Object} node
   * @param {!Object} query
   * @return {?}
   */
  h$jscomp$18.compare = function(node, query) {
    var self = node.U.Gc(query.U);
    return 0 === self ? yc$jscomp$0(node.name, query.name) : self;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Lc = function() {
    return true;
  };
  /**
   * @param {?} result
   * @param {!Object} r
   * @return {?}
   */
  h$jscomp$18.Dd = function(result, r) {
    return !result.ea(r);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Wc = function() {
    return ue$jscomp$2;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Tc = function() {
    return Ae$jscomp$1;
  };
  /**
   * @param {!Object} input
   * @param {!Object} id
   * @return {?}
   */
  h$jscomp$18.Sc = function(input, id) {
    var els = Q$jscomp$2(input);
    return new L$jscomp$3(id, els);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return ".value";
  };
  var Be$jscomp$1 = new ze$jscomp$1;
  var De$jscomp$1 = new Ce$jscomp$1;
  h$jscomp$18 = Ce$jscomp$1.prototype;
  /**
   * @param {string} choiceIndex
   * @return {?}
   */
  h$jscomp$18.Le = function(choiceIndex) {
    var node = Ee$jscomp$1(this);
    /** @type {boolean} */
    node.la = true;
    /** @type {string} */
    node.ma = choiceIndex;
    /** @type {string} */
    node.Rb = "";
    return node;
  };
  /**
   * @param {string} params
   * @return {?}
   */
  h$jscomp$18.Me = function(params) {
    var node = Ee$jscomp$1(this);
    /** @type {boolean} */
    node.la = true;
    /** @type {string} */
    node.ma = params;
    /** @type {string} */
    node.Rb = "l";
    return node;
  };
  /**
   * @param {string} a
   * @return {?}
   */
  h$jscomp$18.Ne = function(a) {
    var params = Ee$jscomp$1(this);
    /** @type {boolean} */
    params.la = true;
    /** @type {string} */
    params.ma = a;
    /** @type {string} */
    params.Rb = "r";
    return params;
  };
  /**
   * @param {string} obj
   * @param {string} callback
   * @return {?}
   */
  h$jscomp$18.ce = function(obj, callback) {
    var query = Ee$jscomp$1(this);
    /** @type {boolean} */
    query.oa = true;
    if (!p$jscomp$13(obj)) {
      /** @type {null} */
      obj = null;
    }
    /** @type {string} */
    query.ic = obj;
    if (null != callback) {
      /** @type {boolean} */
      query.Pb = true;
      /** @type {string} */
      query.Bb = callback;
    } else {
      /** @type {boolean} */
      query.Pb = false;
      /** @type {string} */
      query.Bb = "";
    }
    return query;
  };
  /**
   * @param {!Object} b
   * @param {string} v
   * @return {?}
   */
  h$jscomp$18.vd = function(b, v) {
    var node = Ee$jscomp$1(this);
    /** @type {boolean} */
    node.ra = true;
    if (!p$jscomp$13(b)) {
      /** @type {null} */
      b = null;
    }
    /** @type {!Object} */
    node.fc = b;
    if (p$jscomp$13(v)) {
      /** @type {boolean} */
      node.Xb = true;
      /** @type {string} */
      node.zb = v;
    } else {
      /** @type {boolean} */
      node.oh = false;
      /** @type {string} */
      node.zb = "";
    }
    return node;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return G$jscomp$2(Ge$jscomp$1(this));
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  Ke$jscomp$1.prototype.get = function(type) {
    var key = z$jscomp$13(this.Ed, type);
    if (!key) {
      throw Error("No index defined for " + type);
    }
    return key === te$jscomp$2 ? null : key;
  };
  var Oe$jscomp$1 = new Ke$jscomp$1({
    ".priority" : te$jscomp$2
  }, {
    ".priority" : R$jscomp$2
  });
  /** @type {!Array} */
  var Qe$jscomp$1 = ["object", "boolean", "number", "string"];
  h$jscomp$18 = Yc$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.L = function() {
    return true;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.C = function() {
    return this.ca;
  };
  /**
   * @param {!Object} n
   * @return {?}
   */
  h$jscomp$18.ia = function(n) {
    return new Yc$jscomp$0(this.B, n);
  };
  /**
   * @param {string} val
   * @return {?}
   */
  h$jscomp$18.T = function(val) {
    return ".priority" === val ? this.ca : H$jscomp$2;
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.S = function(a) {
    return a.e() ? this : ".priority" === K$jscomp$2(a) ? this.ca : H$jscomp$2;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Fa = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.wf = function() {
    return null;
  };
  /**
   * @param {string} date
   * @param {!Object} val
   * @return {?}
   */
  h$jscomp$18.W = function(date, val) {
    return ".priority" === date ? this.ia(val) : val.e() && ".priority" !== date ? this : H$jscomp$2.W(date, val).ia(this.ca);
  };
  /**
   * @param {!Object} a
   * @param {!Object} val
   * @return {?}
   */
  h$jscomp$18.H = function(a, val) {
    var tmp = K$jscomp$2(a);
    if (null === tmp) {
      return val;
    }
    if (val.e() && ".priority" !== tmp) {
      return this;
    }
    O$jscomp$3(".priority" !== tmp || 1 === le$jscomp$2(a), ".priority must be the last token in a path");
    return this.W(tmp, H$jscomp$2.H(N$jscomp$3(a), val));
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Hb = function() {
    return 0;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.R = function() {
    return false;
  };
  /**
   * @param {number} a
   * @return {?}
   */
  h$jscomp$18.J = function(a) {
    return a && !this.C().e() ? {
      ".value" : this.Ea(),
      ".priority" : this.C().J()
    } : this.Ea();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.hash = function() {
    if (null === this.Gb) {
      /** @type {string} */
      var sName = "";
      if (!this.ca.e()) {
        /** @type {string} */
        sName = sName + ("priority:" + Re$jscomp$1(this.ca.J()) + ":");
      }
      /** @type {string} */
      var Mobile = typeof this.B;
      /** @type {string} */
      sName = sName + (Mobile + ":");
      /** @type {string} */
      sName = "number" === Mobile ? sName + Ad$jscomp$0(this.B) : sName + this.B;
      this.Gb = ld$jscomp$0(sName);
    }
    return this.Gb;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Ea = function() {
    return this.B;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  h$jscomp$18.Gc = function(key) {
    if (key === H$jscomp$2) {
      return 1;
    }
    if (key instanceof fe$jscomp$2) {
      return -1;
    }
    O$jscomp$3(key.L(), "Unknown node type");
    /** @type {string} */
    var block = typeof key.B;
    /** @type {string} */
    var Number = typeof this.B;
    var start = La$jscomp$0(Qe$jscomp$1, block);
    var end = La$jscomp$0(Qe$jscomp$1, Number);
    O$jscomp$3(0 <= start, "Unknown leaf type: " + block);
    O$jscomp$3(0 <= end, "Unknown leaf type: " + Number);
    return start === end ? "object" === Number ? 0 : this.B < key.B ? -1 : this.B === key.B ? 0 : 1 : end - start;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.pb = function() {
    return this;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Mc = function() {
    return true;
  };
  /**
   * @param {!Object} o
   * @return {?}
   */
  h$jscomp$18.ea = function(o) {
    return o === this ? true : o.L() ? this.B === o.B && this.ca.ea(o.ca) : false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return G$jscomp$2(this.J(true));
  };
  h$jscomp$18 = fe$jscomp$2.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.L = function() {
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.C = function() {
    return this.ca || H$jscomp$2;
  };
  /**
   * @param {!Object} n
   * @return {?}
   */
  h$jscomp$18.ia = function(n) {
    return this.m.e() ? this : new fe$jscomp$2(this.m, n, this.Ab);
  };
  /**
   * @param {string} value
   * @return {?}
   */
  h$jscomp$18.T = function(value) {
    if (".priority" === value) {
      return this.C();
    }
    value = this.m.get(value);
    return null === value ? H$jscomp$2 : value;
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.S = function(a) {
    var x = K$jscomp$2(a);
    return null === x ? this : this.T(x).S(N$jscomp$3(a));
  };
  /**
   * @param {string} value
   * @return {?}
   */
  h$jscomp$18.Fa = function(value) {
    return null !== this.m.get(value);
  };
  /**
   * @param {string} a
   * @param {!Object} r
   * @return {?}
   */
  h$jscomp$18.W = function(a, r) {
    O$jscomp$3(r, "We should always be passing snapshot nodes");
    if (".priority" === a) {
      return this.ia(r);
    }
    var c = new L$jscomp$3(a, r);
    var p;
    var round;
    if (r.e()) {
      p = this.m.remove(a);
      c = Ne$jscomp$1(this.Ab, c, this.m);
    } else {
      p = this.m.Sa(a, r);
      c = Le$jscomp$1(this.Ab, c, this.m);
    }
    round = p.e() ? H$jscomp$2 : this.ca;
    return new fe$jscomp$2(p, round, c);
  };
  /**
   * @param {!Object} a
   * @param {!Object} val
   * @return {?}
   */
  h$jscomp$18.H = function(a, val) {
    var x = K$jscomp$2(a);
    if (null === x) {
      return val;
    }
    O$jscomp$3(".priority" !== K$jscomp$2(a) || 1 === le$jscomp$2(a), ".priority must be the last token in a path");
    var r = this.T(x).H(N$jscomp$3(a), val);
    return this.W(x, r);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return this.m.e();
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Hb = function() {
    return this.m.count();
  };
  /** @type {!RegExp} */
  var Se$jscomp$1 = /^(0|[1-9]\d*)$/;
  h$jscomp$18 = fe$jscomp$2.prototype;
  /**
   * @param {number} n
   * @return {?}
   */
  h$jscomp$18.J = function(n) {
    if (this.e()) {
      return null;
    }
    var o = {};
    /** @type {number} */
    var c = 0;
    /** @type {number} */
    var i = 0;
    /** @type {boolean} */
    var has_body = true;
    this.R(R$jscomp$2, function(key, params) {
      o[key] = params.J(n);
      c++;
      if (has_body && Se$jscomp$1.test(key)) {
        /** @type {number} */
        i = Math.max(i, Number(key));
      } else {
        /** @type {boolean} */
        has_body = false;
      }
    });
    if (!n && has_body && i < 2 * c) {
      /** @type {!Array} */
      var d = [];
      var prop;
      for (prop in o) {
        d[prop] = o[prop];
      }
      return d;
    }
    if (n && !this.C().e()) {
      o[".priority"] = this.C().J();
    }
    return o;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.hash = function() {
    if (null === this.Gb) {
      /** @type {string} */
      var name = "";
      if (!this.C().e()) {
        name = name + ("priority:" + Re$jscomp$1(this.C().J()) + ":");
      }
      this.R(R$jscomp$2, function(b, modDep) {
        var id = modDep.hash();
        if ("" !== id) {
          name = name + (":" + b + ":" + id);
        }
      });
      this.Gb = "" === name ? "" : ld$jscomp$0(name);
    }
    return this.Gb;
  };
  /**
   * @param {!Object} node
   * @param {string} func
   * @param {!Function} that
   * @return {?}
   */
  h$jscomp$18.wf = function(node, func, that) {
    return (that = Te$jscomp$1(this, that)) ? (node = Gc$jscomp$0(that, new L$jscomp$3(node, func))) ? node.name : null : Gc$jscomp$0(this.m, node);
  };
  /**
   * @param {!Function} x
   * @param {!Function} r
   * @return {?}
   */
  h$jscomp$18.R = function(x, r) {
    var label = Te$jscomp$1(this, x);
    return label ? label.ka(function(options) {
      return r(options.name, options.U);
    }) : this.m.ka(r);
  };
  /**
   * @param {string} key
   * @return {?}
   */
  h$jscomp$18.ac = function(key) {
    return this.bc(key.Wc(), key);
  };
  /**
   * @param {!Object} state
   * @param {!Object} obj
   * @return {?}
   */
  h$jscomp$18.bc = function(state, obj) {
    var node = Te$jscomp$1(this, obj);
    if (node) {
      return node.bc(state, function(a) {
        return a;
      });
    }
    node = this.m.bc(state.name, wc$jscomp$0);
    var value = Jc$jscomp$0(node);
    for (; null != value && 0 > obj.compare(value, state);) {
      Ic$jscomp$0(node);
      value = Jc$jscomp$0(node);
    }
    return node;
  };
  /**
   * @param {undefined} i
   * @return {?}
   */
  h$jscomp$18.xf = function(i) {
    return this.dc(i.Tc(), i);
  };
  /**
   * @param {!Object} val
   * @param {!Array} item
   * @return {?}
   */
  h$jscomp$18.dc = function(val, item) {
    var state = Te$jscomp$1(this, item);
    if (state) {
      return state.dc(val, function(a) {
        return a;
      });
    }
    state = this.m.dc(val.name, wc$jscomp$0);
    var d = Jc$jscomp$0(state);
    for (; null != d && 0 < item.compare(d, val);) {
      Ic$jscomp$0(state);
      d = Jc$jscomp$0(state);
    }
    return state;
  };
  /**
   * @param {!Object} word
   * @return {?}
   */
  h$jscomp$18.Gc = function(word) {
    return this.e() ? word.e() ? 0 : -1 : word.L() || word.e() ? 1 : word === we$jscomp$1 ? -1 : 0;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  h$jscomp$18.pb = function(value) {
    if (value === re$jscomp$2 || sa$jscomp$0(this.Ab.hc, value.toString())) {
      return this;
    }
    var env = this.Ab;
    var d = this.m;
    O$jscomp$3(value !== re$jscomp$2, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    /** @type {!Array} */
    var key = [];
    /** @type {boolean} */
    var method = false;
    d = d.ac(wc$jscomp$0);
    var p = Ic$jscomp$0(d);
    for (; p;) {
      method = method || value.Lc(p.U);
      key.push(p);
      p = Ic$jscomp$0(d);
    }
    key = method ? Me$jscomp$1(key, Vd$jscomp$0(value)) : te$jscomp$2;
    method = value.toString();
    d = wa$jscomp$0(env.hc);
    /** @type {!Object} */
    d[method] = value;
    value = wa$jscomp$0(env.Ed);
    value[method] = key;
    return new fe$jscomp$2(this.m, this.ca, new Ke$jscomp$1(value, d));
  };
  /**
   * @param {string} type
   * @return {?}
   */
  h$jscomp$18.Mc = function(type) {
    return type === re$jscomp$2 || sa$jscomp$0(this.Ab.hc, type.toString());
  };
  /**
   * @param {!Object} item
   * @return {?}
   */
  h$jscomp$18.ea = function(item) {
    if (item === this) {
      return true;
    }
    if (item.L()) {
      return false;
    }
    if (this.C().ea(item.C()) && this.m.count() === item.m.count()) {
      var r = this.ac(R$jscomp$2);
      item = item.ac(R$jscomp$2);
      var data = Ic$jscomp$0(r);
      var node = Ic$jscomp$0(item);
      for (; data && node;) {
        if (data.name !== node.name || !data.U.ea(node.U)) {
          return false;
        }
        data = Ic$jscomp$0(r);
        node = Ic$jscomp$0(item);
      }
      return null === data && null === node;
    }
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return G$jscomp$2(this.J(true));
  };
  /** @type {number} */
  var Ue$jscomp$1 = Math.log(2);
  var H$jscomp$2 = new fe$jscomp$2(new Ec$jscomp$0(zc$jscomp$0), null, Oe$jscomp$1);
  ka$jscomp$0(Xe$jscomp$1, fe$jscomp$2);
  h$jscomp$18 = Xe$jscomp$1.prototype;
  /**
   * @param {?} prop
   * @return {?}
   */
  h$jscomp$18.Gc = function(prop) {
    return prop === this ? 0 : 1;
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.ea = function(a) {
    return a === this;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.C = function() {
    return this;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.T = function() {
    return H$jscomp$2;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return false;
  };
  var we$jscomp$1 = new Xe$jscomp$1;
  var ue$jscomp$2 = new L$jscomp$3("[MIN_NAME]", H$jscomp$2);
  var Ae$jscomp$1 = new L$jscomp$3("[MAX_NAME]", we$jscomp$1);
  /**
   * @return {?}
   */
  je$jscomp$1.prototype.w = function() {
    return this.ae;
  };
  h$jscomp$18 = Ye$jscomp$1.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.w = function() {
    return this.Oa.w().j();
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.kb = function(a) {
    var out = Yb$jscomp$0(this.Oa);
    return out && (He$jscomp$1(this.Y.n) || !a.e() && !out.T(K$jscomp$2(a)).e()) ? out.S(a) : null;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return 0 === this.$a.length;
  };
  /**
   * @param {boolean} a
   * @return {undefined}
   */
  h$jscomp$18.Tb = function(a) {
    this.$a.push(a);
  };
  /**
   * @param {!Object} n
   * @param {!Object} o
   * @return {?}
   */
  h$jscomp$18.nb = function(n, o) {
    /** @type {!Array} */
    var t_chksum = [];
    if (o) {
      O$jscomp$3(null == n, "A cancel should cancel all event registrations.");
      var d = this.Y.path;
      Ma$jscomp$0(this.$a, function(r) {
        if (r = r.lf(o, d)) {
          t_chksum.push(r);
        }
      });
    }
    if (n) {
      /** @type {!Array} */
      var r = [];
      /** @type {number} */
      var i = 0;
      for (; i < this.$a.length; ++i) {
        var tp = this.$a[i];
        if (!tp.matches(n)) {
          r.push(tp);
        } else {
          if (n.yf()) {
            /** @type {!Array<?>} */
            r = r.concat(this.$a.slice(i + 1));
            break;
          }
        }
      }
      /** @type {!Array<?>} */
      this.$a = r;
    } else {
      /** @type {!Array} */
      this.$a = [];
    }
    return t_chksum;
  };
  /**
   * @param {!Object} obj
   * @param {!Object} c
   * @param {!Object} result
   * @return {?}
   */
  h$jscomp$18.gb = function(obj, c, result) {
    if (obj.type === be$jscomp$2 && null !== obj.source.Lb) {
      O$jscomp$3(Yb$jscomp$0(this.Oa), "We should always have a full cache before handling merges");
      O$jscomp$3(ke$jscomp$1(this.Oa), "Missing event cache, even though we have a server cache");
    }
    var cell = this.Oa;
    obj = this.Nf.gb(cell, obj, c, result);
    c = this.Nf;
    result = obj.me;
    O$jscomp$3(result.Q.j().Mc(c.X.g), "Event snap not indexed");
    O$jscomp$3(result.w().j().Mc(c.X.g), "Server snap not indexed");
    O$jscomp$3(lc$jscomp$0(obj.me.w()) || !lc$jscomp$0(cell.w()), "Once a server snap is complete, it should never go back");
    this.Oa = obj.me;
    return $e$jscomp$2(this, obj.og, obj.me.Q.j(), null);
  };
  /**
   * @param {!Object} step
   * @return {?}
   */
  bf$jscomp$0.prototype.$c = function(step) {
    if (this.path.e()) {
      return step = this.children.subtree(new P$jscomp$3(step)), step.e() ? null : step.value ? new Ac$jscomp$0(this.source, M$jscomp$2, step.value) : new bf$jscomp$0(this.source, M$jscomp$2, step);
    }
    O$jscomp$3(K$jscomp$2(this.path) === step, "Can't get a merge for a child not on the path of the operation");
    return new bf$jscomp$0(this.source, N$jscomp$3(this.path), this.children);
  };
  /**
   * @return {?}
   */
  bf$jscomp$0.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  };
  h$jscomp$18 = cf$jscomp$0.prototype;
  /**
   * @param {!Object} d
   * @param {?} i
   * @param {boolean} p
   * @param {!Function} doneCallback
   * @return {undefined}
   */
  h$jscomp$18.Cf = function(d, i, p, doneCallback) {
    var isCreditCard_1 = d.path.toString();
    this.f("Listen called for " + isCreditCard_1 + " " + d.wa());
    var folder = df$jscomp$0(d, p);
    var FolderShape = {};
    this.ba[folder] = FolderShape;
    d = Je$jscomp$1(d.n);
    var store = this;
    ef$jscomp$0(this, isCreditCard_1 + ".json", d, function(err, cind) {
      /** @type {!AudioNode} */
      var i = cind;
      if (404 === err) {
        /** @type {null} */
        err = i = null;
      }
      if (null === err) {
        store.Kb(isCreditCard_1, i, false, p);
      }
      if (z$jscomp$13(store.ba, folder) === FolderShape) {
        doneCallback(err ? 401 == err ? "permission_denied" : "rest_error:" + err : "ok", null);
      }
    });
  };
  /**
   * @param {!Object} id
   * @param {number} name
   * @return {undefined}
   */
  h$jscomp$18.$f = function(id, name) {
    var folder = df$jscomp$0(id, name);
    delete this.ba[folder];
  };
  /**
   * @param {string} type
   * @param {?} callback
   * @return {undefined}
   */
  h$jscomp$18.O = function(type, callback) {
    /** @type {string} */
    this.Ca = type;
    var result = Cd$jscomp$0(type);
    var data = result.data;
    result = result.Ec && result.Ec.exp;
    if (callback) {
      callback("ok", {
        auth : data,
        expires : result
      });
    }
  };
  /**
   * @param {?} require
   * @return {undefined}
   */
  h$jscomp$18.je = function(require) {
    /** @type {null} */
    this.Ca = null;
    require("ok", null);
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Qe = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Gf = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Md = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.put = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Df = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Ye = function() {
  };
  /**
   * @param {string} evt
   * @param {boolean} min
   * @return {undefined}
   */
  ff$jscomp$0.prototype.ie = function(evt, min) {
    var c;
    c = this.Rc[evt] || [];
    var column = c.length;
    if (0 < column) {
      /** @type {!Array} */
      var ret = Array(column);
      /** @type {number} */
      var i = 0;
      for (; i < column; i++) {
        ret[i] = c[i];
      }
      /** @type {!Array} */
      c = ret;
    } else {
      /** @type {!Array} */
      c = [];
    }
    /** @type {number} */
    column = 0;
    for (; column < c.length; column++) {
      c[column].Dc.apply(c[column].Qa, Array.prototype.slice.call(arguments, 1));
    }
  };
  /**
   * @param {!Object} name
   * @param {!Function} a
   * @param {string} val
   * @return {undefined}
   */
  ff$jscomp$0.prototype.Ib = function(name, a, val) {
    gf$jscomp$0(this, name);
    this.Rc[name] = this.Rc[name] || [];
    this.Rc[name].push({
      Dc : a,
      Qa : val
    });
    if (name = this.Ee(name)) {
      a.apply(val, name);
    }
  };
  /**
   * @param {string} x
   * @param {string} opts
   * @param {string} fn
   * @return {undefined}
   */
  ff$jscomp$0.prototype.mc = function(x, opts, fn) {
    gf$jscomp$0(this, x);
    x = this.Rc[x] || [];
    /** @type {number} */
    var i = 0;
    for (; i < x.length; i++) {
      if (x[i].Dc === opts && (!fn || fn === x[i].Qa)) {
        x.splice(i, 1);
        break;
      }
    }
  };
  var hf$jscomp$0 = function() {
    /** @type {number} */
    var a = 0;
    /** @type {!Array} */
    var b = [];
    return function(c) {
      /** @type {boolean} */
      var d = c === a;
      /** @type {number} */
      a = c;
      /** @type {!Array} */
      var rd = Array(8);
      /** @type {number} */
      var f = 7;
      for (; 0 <= f; f--) {
        /** @type {string} */
        rd[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64);
        /** @type {number} */
        c = Math.floor(c / 64);
      }
      O$jscomp$3(0 === c, "Cannot push at time == 0");
      /** @type {string} */
      c = rd.join("");
      if (d) {
        /** @type {number} */
        f = 11;
        for (; 0 <= f && 63 === b[f]; f--) {
          /** @type {number} */
          b[f] = 0;
        }
        b[f]++;
      } else {
        /** @type {number} */
        f = 0;
        for (; 12 > f; f++) {
          /** @type {number} */
          b[f] = Math.floor(64 * Math.random());
        }
      }
      /** @type {number} */
      f = 0;
      for (; 12 > f; f++) {
        /** @type {string} */
        c = c + "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
      }
      O$jscomp$3(20 === c.length, "nextPushId: Length should be 20.");
      return c;
    };
  }();
  ka$jscomp$0(jf$jscomp$0, ff$jscomp$0);
  /**
   * @param {!Object} type
   * @return {?}
   */
  jf$jscomp$0.prototype.Ee = function(type) {
    O$jscomp$3("online" === type, "Unknown event type: " + type);
    return [this.oc];
  };
  ba$jscomp$0(jf$jscomp$0);
  ka$jscomp$0(kf$jscomp$0, ff$jscomp$0);
  /**
   * @param {!Object} state
   * @return {?}
   */
  kf$jscomp$0.prototype.Ee = function(state) {
    O$jscomp$3("visible" === state, "Unknown event type: " + state);
    return [this.Sb];
  };
  ba$jscomp$0(kf$jscomp$0);
  h$jscomp$18 = P$jscomp$3.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    /** @type {string} */
    var current_path = "";
    var i = this.aa;
    for (; i < this.u.length; i++) {
      if ("" !== this.u[i]) {
        /** @type {string} */
        current_path = current_path + ("/" + this.u[i]);
      }
    }
    return current_path || "/";
  };
  /**
   * @param {number} start
   * @return {?}
   */
  h$jscomp$18.slice = function(start) {
    return this.u.slice(this.aa + (start || 0));
  };
  /**
   * @return {?}
   */
  h$jscomp$18.parent = function() {
    if (this.aa >= this.u.length) {
      return null;
    }
    /** @type {!Array} */
    var x = [];
    var i = this.aa;
    for (; i < this.u.length - 1; i++) {
      x.push(this.u[i]);
    }
    return new P$jscomp$3(x, 0);
  };
  /**
   * @param {!Object} x
   * @return {?}
   */
  h$jscomp$18.o = function(x) {
    /** @type {!Array} */
    var items = [];
    var i = this.aa;
    for (; i < this.u.length; i++) {
      items.push(this.u[i]);
    }
    if (x instanceof P$jscomp$3) {
      i = x.aa;
      for (; i < x.u.length; i++) {
        items.push(x.u[i]);
      }
    } else {
      x = x.split("/");
      /** @type {number} */
      i = 0;
      for (; i < x.length; i++) {
        if (0 < x[i].length) {
          items.push(x[i]);
        }
      }
    }
    return new P$jscomp$3(items, 0);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return this.aa >= this.u.length;
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.ea = function(data) {
    if (le$jscomp$2(this) !== le$jscomp$2(data)) {
      return false;
    }
    var j = this.aa;
    var i = data.aa;
    for (; j <= this.u.length; j++, i++) {
      if (this.u[j] !== data.u[i]) {
        return false;
      }
    }
    return true;
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.contains = function(data) {
    var i = this.aa;
    var index = data.aa;
    if (le$jscomp$2(this) > le$jscomp$2(data)) {
      return false;
    }
    for (; i < this.u.length;) {
      if (this.u[i] !== data.u[index]) {
        return false;
      }
      ++i;
      ++index;
    }
    return true;
  };
  var M$jscomp$2 = new P$jscomp$3("");
  /**
   * @param {string} obj
   * @return {undefined}
   */
  nf$jscomp$0.prototype.push = function(obj) {
    if (0 < this.Ua.length) {
      this.Ka += 1;
    }
    this.Ua.push(obj);
    this.Ka += Pb$jscomp$0(obj);
    of$jscomp$0(this);
  };
  /**
   * @return {undefined}
   */
  nf$jscomp$0.prototype.pop = function() {
    var valueProgess = this.Ua.pop();
    this.Ka -= Pb$jscomp$0(valueProgess);
    if (0 < this.Ua.length) {
      --this.Ka;
    }
  };
  var rf$jscomp$0 = new Ec$jscomp$0(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  h$jscomp$18 = qf$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return null === this.value && this.children.e();
  };
  /**
   * @param {!Object} node
   * @return {?}
   */
  h$jscomp$18.subtree = function(node) {
    if (node.e()) {
      return this;
    }
    var range = this.children.get(K$jscomp$2(node));
    return null !== range ? range.subtree(N$jscomp$3(node)) : qe$jscomp$1;
  };
  /**
   * @param {!Object} node
   * @param {string} value
   * @return {?}
   */
  h$jscomp$18.set = function(node, value) {
    if (node.e()) {
      return new qf$jscomp$0(value, this.children);
    }
    var a = K$jscomp$2(node);
    var i = (this.children.get(a) || qe$jscomp$1).set(N$jscomp$3(node), value);
    a = this.children.Sa(a, i);
    return new qf$jscomp$0(this.value, a);
  };
  /**
   * @param {!Object} node
   * @return {?}
   */
  h$jscomp$18.remove = function(node) {
    if (node.e()) {
      return this.children.e() ? qe$jscomp$1 : new qf$jscomp$0(null, this.children);
    }
    var parent = K$jscomp$2(node);
    var range = this.children.get(parent);
    return range ? (node = range.remove(N$jscomp$3(node)), parent = node.e() ? this.children.remove(parent) : this.children.Sa(parent, node), null === this.value && parent.e() ? qe$jscomp$1 : new qf$jscomp$0(this.value, parent)) : this;
  };
  /**
   * @param {!Object} node
   * @return {?}
   */
  h$jscomp$18.get = function(node) {
    if (node.e()) {
      return this.value;
    }
    var range = this.children.get(K$jscomp$2(node));
    return range ? range.get(N$jscomp$3(node)) : null;
  };
  var qe$jscomp$1 = new qf$jscomp$0(null);
  /**
   * @return {?}
   */
  qf$jscomp$0.prototype.toString = function() {
    var b = {};
    ne$jscomp$2(this, function(pingErr, unzippedCode) {
      b[pingErr.toString()] = unzippedCode.toString();
    });
    return G$jscomp$2(b);
  };
  /**
   * @param {!Object} x
   * @return {?}
   */
  Df$jscomp$0.prototype.$c = function(x) {
    if (this.path.e()) {
      if (null != this.Ub.value) {
        return O$jscomp$3(this.Ub.children.e(), "affectedTree should not have overlapping affected paths."), this;
      }
      x = this.Ub.subtree(new P$jscomp$3(x));
      return new Df$jscomp$0(M$jscomp$2, x, this.Yd);
    }
    O$jscomp$3(K$jscomp$2(this.path) === x, "operationForChild called for unrelated child.");
    return new Df$jscomp$0(N$jscomp$3(this.path), this.Ub, this.Yd);
  };
  /**
   * @return {?}
   */
  Df$jscomp$0.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Yd + " affectedTree=" + this.Ub + ")";
  };
  /** @type {number} */
  var Bc$jscomp$0 = 0;
  /** @type {number} */
  var be$jscomp$2 = 1;
  /** @type {number} */
  var ee$jscomp$2 = 2;
  /** @type {number} */
  var Dc$jscomp$0 = 3;
  var Ef$jscomp$0 = new Ff$jscomp$0(true, false, null, false);
  var Gf$jscomp$0 = new Ff$jscomp$0(false, true, null, false);
  /**
   * @return {?}
   */
  Ff$jscomp$0.prototype.toString = function() {
    return this.Ae ? "user" : this.ef ? "server(queryID=" + this.Lb + ")" : "server";
  };
  var If$jscomp$0 = new Hf$jscomp$0(new qf$jscomp$0(null));
  /**
   * @param {!Object} e
   * @return {?}
   */
  Hf$jscomp$0.prototype.Ud = function(e) {
    if (e.e()) {
      return If$jscomp$0;
    }
    e = pe$jscomp$2(this.Z, e, qe$jscomp$1);
    return new Hf$jscomp$0(e);
  };
  /**
   * @return {?}
   */
  Hf$jscomp$0.prototype.e = function() {
    return this.Z.e();
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Hf$jscomp$0.prototype.apply = function(obj) {
    return Of$jscomp$0(M$jscomp$2, this.Z, obj);
  };
  h$jscomp$18 = Pf$jscomp$0.prototype;
  /**
   * @param {number} unit
   * @return {?}
   */
  h$jscomp$18.Ud = function(unit) {
    var n = Sa$jscomp$0(this.pa, function(options) {
      return options.md === unit;
    });
    O$jscomp$3(0 <= n, "removeWrite called with nonexistent writeId.");
    var action = this.pa[n];
    this.pa.splice(n, 1);
    var value = action.visible;
    /** @type {boolean} */
    var e = false;
    /** @type {number} */
    var len = this.pa.length - 1;
    for (; value && 0 <= len;) {
      var e = this.pa[len];
      if (e.visible) {
        if (len >= n && Rf$jscomp$0(e, action.path)) {
          /** @type {boolean} */
          value = false;
        } else {
          if (action.path.contains(e.path)) {
            /** @type {boolean} */
            e = true;
          }
        }
      }
      len--;
    }
    if (value) {
      if (e) {
        this.V = Sf$jscomp$0(this.pa, Tf$jscomp$0, M$jscomp$2);
        this.Pc = 0 < this.pa.length ? this.pa[this.pa.length - 1].md : -1;
      } else {
        if (action.Ja) {
          this.V = this.V.Ud(action.path);
        } else {
          var svd_results = this;
          v$jscomp$5(action.children, function(a, d) {
            svd_results.V = svd_results.V.Ud(action.path.o(d));
          });
        }
      }
      return true;
    }
    return false;
  };
  /**
   * @param {string} b
   * @param {(Object|string)} e
   * @param {boolean} f
   * @param {boolean} d
   * @return {?}
   */
  h$jscomp$18.Aa = function(b, e, f, d) {
    if (f || d) {
      var c = Nf$jscomp$0(this.V, b);
      return !d && c.e() ? e : d || null != e || null != Lf$jscomp$0(c, M$jscomp$2) ? (c = Sf$jscomp$0(this.pa, function(node) {
        return (node.visible || d) && (!f || !(0 <= La$jscomp$0(f, node.md))) && (node.path.contains(b) || b.contains(node.path));
      }, b), e = e || H$jscomp$2, c.apply(e)) : null;
    }
    c = Lf$jscomp$0(this.V, b);
    if (null != c) {
      return c;
    }
    c = Nf$jscomp$0(this.V, b);
    return c.e() ? e : null != e || null != Lf$jscomp$0(c, M$jscomp$2) ? (e = e || H$jscomp$2, c.apply(e)) : null;
  };
  /**
   * @param {string} name
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.Cc = function(name, data) {
    var t = H$jscomp$2;
    var node = Lf$jscomp$0(this.V, name);
    if (node) {
      if (!node.L()) {
        node.R(R$jscomp$2, function(d, orig) {
          t = t.W(d, orig);
        });
      }
    } else {
      if (data) {
        var context = Nf$jscomp$0(this.V, name);
        data.R(R$jscomp$2, function(d, b) {
          var x = Nf$jscomp$0(context, new P$jscomp$3(d)).apply(b);
          t = t.W(d, x);
        });
        Ma$jscomp$0(Mf$jscomp$0(context), function(left) {
          t = t.W(left.name, left.U);
        });
      } else {
        context = Nf$jscomp$0(this.V, name);
        Ma$jscomp$0(Mf$jscomp$0(context), function(left) {
          t = t.W(left.name, left.U);
        });
      }
    }
    return t;
  };
  /**
   * @param {!Object} a
   * @param {string} x
   * @param {!Object} depth
   * @param {!Object} time
   * @return {?}
   */
  h$jscomp$18.nd = function(a, x, depth, time) {
    O$jscomp$3(depth || time, "Either existingEventSnap or existingServerSnap must exist");
    a = a.o(x);
    if (null != Lf$jscomp$0(this.V, a)) {
      return null;
    }
    a = Nf$jscomp$0(this.V, a);
    return a.e() ? time.S(x) : a.apply(time.S(x));
  };
  /**
   * @param {string} d
   * @param {string} i
   * @param {!Object} vector
   * @return {?}
   */
  h$jscomp$18.Bc = function(d, i, vector) {
    d = d.o(i);
    var depth = Lf$jscomp$0(this.V, d);
    return null != depth ? depth : Wb$jscomp$0(vector, i) ? Nf$jscomp$0(this.V, d).apply(vector.j().T(i)) : null;
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.xc = function(a) {
    return Lf$jscomp$0(this.V, a);
  };
  /**
   * @param {!Function} item
   * @param {!Object} source
   * @param {!Object} data
   * @param {number} end
   * @param {string} position
   * @param {!Array} a
   * @return {?}
   */
  h$jscomp$18.qe = function(item, source, data, end, position, a) {
    var node;
    item = Nf$jscomp$0(this.V, item);
    node = Lf$jscomp$0(item, M$jscomp$2);
    if (null == node) {
      if (null != source) {
        node = item.apply(source);
      } else {
        return [];
      }
    }
    node = node.pb(a);
    if (node.e() || node.L()) {
      return [];
    }
    /** @type {!Array} */
    source = [];
    item = Vd$jscomp$0(a);
    position = position ? node.dc(data, a) : node.bc(data, a);
    a = Ic$jscomp$0(position);
    for (; a && source.length < end;) {
      if (0 !== item(a, data)) {
        source.push(a);
      }
      a = Ic$jscomp$0(position);
    }
    return source;
  };
  h$jscomp$18 = Uf$jscomp$0.prototype;
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Object} f
   * @return {?}
   */
  h$jscomp$18.Aa = function(a, b, f) {
    return this.Z.Aa(this.Qb, a, b, f);
  };
  /**
   * @param {string} key
   * @return {?}
   */
  h$jscomp$18.Cc = function(key) {
    return this.Z.Cc(this.Qb, key);
  };
  /**
   * @param {(Object|string)} time
   * @param {!Object} x
   * @param {!Object} name
   * @return {?}
   */
  h$jscomp$18.nd = function(time, x, name) {
    return this.Z.nd(this.Qb, time, x, name);
  };
  /**
   * @param {string} e
   * @return {?}
   */
  h$jscomp$18.xc = function(e) {
    return this.Z.xc(this.Qb.o(e));
  };
  /**
   * @param {(Object|string)} t
   * @param {(Object|string)} time
   * @param {?} param
   * @param {boolean} container
   * @param {?} download
   * @return {?}
   */
  h$jscomp$18.qe = function(t, time, param, container, download) {
    return this.Z.qe(this.Qb, t, time, param, container, download);
  };
  /**
   * @param {string} time
   * @param {!Object} position
   * @return {?}
   */
  h$jscomp$18.Bc = function(time, position) {
    return this.Z.Bc(this.Qb, time, position);
  };
  /**
   * @param {string} o
   * @return {?}
   */
  h$jscomp$18.o = function(o) {
    return new Uf$jscomp$0(this.Qb.o(o), this.Z);
  };
  h$jscomp$18 = Wf$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.Ea = function() {
    return this.A.value;
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.clear = function() {
    /** @type {null} */
    this.A.value = null;
    this.A.children = {};
    /** @type {number} */
    this.A.pd = 0;
    Zf$jscomp$0(this);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.zd = function() {
    return 0 < this.A.pd;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return null === this.Ea() && !this.zd();
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  h$jscomp$18.R = function(callback) {
    var ProofOfPatienceRequired = this;
    v$jscomp$5(this.A.children, function(q, enlivenedObjects) {
      callback(new Wf$jscomp$0(enlivenedObjects, ProofOfPatienceRequired, q));
    });
  };
  /**
   * @return {?}
   */
  h$jscomp$18.path = function() {
    return new P$jscomp$3(null === this.Ha ? this.Jd : this.Ha.path() + "/" + this.Jd);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.name = function() {
    return this.Jd;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.parent = function() {
    return this.Ha;
  };
  /** @type {!RegExp} */
  var bg$jscomp$0 = /[\[\].#$\/\u0000-\u001F\u007F]/;
  /** @type {!RegExp} */
  var cg$jscomp$0 = /[\[\].#$\u0000-\u001F\u007F]/;
  /** @type {!RegExp} */
  var dg$jscomp$0 = /^[a-zA-Z][a-zA-Z._\-+]+$/;
  h$jscomp$18 = ug$jscomp$0.prototype;
  /**
   * @param {!Function} name
   * @param {?} value
   * @return {undefined}
   */
  h$jscomp$18.add = function(name, value) {
    this.set[name] = null !== value ? value : true;
  };
  /**
   * @param {string} d
   * @return {?}
   */
  h$jscomp$18.contains = function(d) {
    return y$jscomp$63(this.set, d);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  h$jscomp$18.get = function(key) {
    return this.contains(key) ? this.set[key] : void 0;
  };
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  h$jscomp$18.remove = function(key) {
    delete this.set[key];
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.clear = function() {
    this.set = {};
  };
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return va$jscomp$0(this.set);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.count = function() {
    return oa$jscomp$0(this.set);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.keys = function() {
    /** @type {!Array} */
    var ret = [];
    v$jscomp$5(this.set, function(b, c) {
      ret.push(c);
    });
    return ret;
  };
  /**
   * @param {!Object} val
   * @return {?}
   */
  Vc$jscomp$0.prototype.find = function(val) {
    if (null != this.B) {
      return this.B.S(val);
    }
    if (val.e() || null == this.m) {
      return null;
    }
    var a = K$jscomp$2(val);
    val = N$jscomp$3(val);
    return this.m.contains(a) ? this.m.get(a).find(val) : null;
  };
  /**
   * @param {!Object} a
   * @param {!Object} n
   * @return {undefined}
   */
  Vc$jscomp$0.prototype.rc = function(a, n) {
    if (a.e()) {
      /** @type {!Object} */
      this.B = n;
      /** @type {null} */
      this.m = null;
    } else {
      if (null !== this.B) {
        this.B = this.B.H(a, n);
      } else {
        if (null == this.m) {
          this.m = new ug$jscomp$0;
        }
        var value = K$jscomp$2(a);
        if (!this.m.contains(value)) {
          this.m.add(value, new Vc$jscomp$0);
        }
        value = this.m.get(value);
        a = N$jscomp$3(a);
        value.rc(a, n);
      }
    }
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  Vc$jscomp$0.prototype.R = function(callback) {
    if (null !== this.m) {
      vg$jscomp$0(this.m, function(identifierPositions, exisObj) {
        callback(identifierPositions, exisObj);
      });
    }
  };
  /** @type {string} */
  var xg$jscomp$0 = "auth.firebase.com";
  /** @type {!Array} */
  var zg$jscomp$0 = ["remember", "redirectTo"];
  /**
   * @param {string} value
   * @param {string} key
   * @return {undefined}
   */
  Bg$jscomp$0.prototype.set = function(value, key) {
    if (!key) {
      if (this.ee.length) {
        key = this.ee[0];
      } else {
        throw Error("fb.login.SessionManager : No storage options available!");
      }
    }
    key.set(this.Ue, value);
  };
  /**
   * @return {?}
   */
  Bg$jscomp$0.prototype.get = function() {
    var a = Oa$jscomp$0(this.ee, u$jscomp$22(this.Bg, this));
    a = Na$jscomp$0(a, function(a) {
      return null !== a;
    });
    Va$jscomp$0(a, function(rasterizeData, emailtoken) {
      return Dd$jscomp$0(emailtoken.token) - Dd$jscomp$0(rasterizeData.token);
    });
    return 0 < a.length ? a.shift() : null;
  };
  /**
   * @param {!Object} img
   * @return {?}
   */
  Bg$jscomp$0.prototype.Bg = function(img) {
    try {
      var trello = img.get(this.Ue);
      if (trello && trello.token) {
        return trello;
      }
    } catch (c) {
    }
    return null;
  };
  /**
   * @return {undefined}
   */
  Bg$jscomp$0.prototype.clear = function() {
    var self = this;
    Ma$jscomp$0(this.ee, function(scores) {
      scores.remove(self.Ue);
    });
  };
  /**
   * @param {!Object} op
   * @return {undefined}
   */
  Og$jscomp$0.prototype.nc = function(op) {
    var config = this;
    var that;
    try {
      that = Rb$jscomp$0(op.data);
    } catch (d) {
    }
    if (that && "request" === that.a) {
      Ig$jscomp$0(window, "message", this.nc);
      this.fe = op.origin;
      if (this.hb) {
        setTimeout(function() {
          config.hb(config.fe, that.d, function(i, isDisabled) {
            /** @type {boolean} */
            config.mg = !isDisabled;
            config.hb = void 0;
            Pg$jscomp$0(config, {
              a : "response",
              d : i,
              forceKeepWindowOpen : isDisabled
            });
          });
        }, 0);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Og$jscomp$0.prototype.Ng = function() {
    try {
      Ig$jscomp$0(this.Cd, "message", this.Ff);
    } catch (a) {
    }
    if (this.hb) {
      Pg$jscomp$0(this, {
        a : "error",
        d : "unknown closed window"
      });
      this.hb = void 0;
    }
    try {
      window.close();
    } catch (b) {
    }
  };
  /**
   * @param {!Object} simpleselect
   * @return {undefined}
   */
  Og$jscomp$0.prototype.Ff = function(simpleselect) {
    if (this.mg && "die" === simpleselect.data) {
      try {
        window.close();
      } catch (b) {
      }
    }
  };
  /**
   * @param {!Object} value
   * @param {!Object} options
   * @return {undefined}
   */
  Qg$jscomp$0.prototype.open = function(value, options) {
    cd$jscomp$0.set("redirect_request_id", this.tc);
    cd$jscomp$0.set("redirect_request_id", this.tc);
    options.requestId = this.tc;
    options.redirectTo = options.redirectTo || window.location.href;
    /** @type {string} */
    value = value + ((/\?/.test(value) ? "" : "?") + Ib$jscomp$0(options));
    /** @type {!Object} */
    window.location = value;
  };
  /**
   * @return {?}
   */
  Qg$jscomp$0.isAvailable = function() {
    return !Eg$jscomp$0() && !Dg$jscomp$0();
  };
  /**
   * @return {?}
   */
  Qg$jscomp$0.prototype.Fc = function() {
    return "redirect";
  };
  var Rg$jscomp$0 = {
    NETWORK_ERROR : "Unable to contact the Firebase server.",
    SERVER_ERROR : "An unknown server error occurred.",
    TRANSPORT_UNAVAILABLE : "There are no login transports available for the requested method.",
    REQUEST_INTERRUPTED : "The browser redirected the page before the login request could complete.",
    USER_CANCELLED : "The user cancelled authentication."
  };
  /**
   * @param {string} id
   * @param {!Object} value
   * @param {string} cb
   * @return {?}
   */
  Tg$jscomp$0.prototype.open = function(id, value, cb) {
    /**
     * @param {boolean} verbose
     * @return {undefined}
     */
    function init(verbose) {
      if (iframe) {
        document.body.removeChild(iframe);
        iframe = void 0;
      }
      if (timer) {
        timer = clearInterval(timer);
      }
      Ig$jscomp$0(window, "message", onres);
      Ig$jscomp$0(window, "unload", init);
      if (win && !verbose) {
        try {
          win.close();
        } catch (b) {
          target.postMessage("die", err);
        }
      }
      win = target = void 0;
    }
    /**
     * @param {!Object} res
     * @return {undefined}
     */
    function onres(res) {
      if (res.origin === err) {
        try {
          var message = Rb$jscomp$0(res.data);
          if ("ready" === message.a) {
            target.postMessage(msgData, err);
          } else {
            if ("error" === message.a) {
              init(false);
              if (cb) {
                cb(message.d);
                /** @type {null} */
                cb = null;
              }
            } else {
              if ("response" === message.a) {
                init(message.forceKeepWindowOpen);
                if (cb) {
                  cb(null, message.d);
                  /** @type {null} */
                  cb = null;
                }
              }
            }
          }
        } catch (e) {
        }
      }
    }
    var find_msg = Fg$jscomp$0(8);
    var iframe;
    var target;
    if (!this.options.relay_url) {
      return cb(Error("invalid arguments: origin of url and relay_url must match"));
    }
    var err = Jg$jscomp$0(id);
    if (err !== Jg$jscomp$0(this.options.relay_url)) {
      if (cb) {
        setTimeout(function() {
          cb(Error("invalid arguments: origin of url and relay_url must match"));
        }, 0);
      }
    } else {
      if (find_msg) {
        /** @type {!Element} */
        iframe = document.createElement("iframe");
        iframe.setAttribute("src", this.options.relay_url);
        /** @type {string} */
        iframe.style.display = "none";
        iframe.setAttribute("name", "__winchan_relay_frame");
        document.body.appendChild(iframe);
        target = iframe.contentWindow;
      }
      /** @type {string} */
      id = id + ((/\?/.test(id) ? "" : "?") + Ib$jscomp$0(value));
      /** @type {(Window|null)} */
      var win = window.open(id, this.options.window_name, this.options.window_features);
      if (!target) {
        target = win;
      }
      /** @type {number} */
      var timer = setInterval(function() {
        if (win && win.closed) {
          init(false);
          if (cb) {
            cb(Sg$jscomp$0("USER_CANCELLED"));
            /** @type {null} */
            cb = null;
          }
        }
      }, 500);
      var msgData = G$jscomp$2({
        a : "request",
        d : value
      });
      Hg$jscomp$0(window, "unload", init);
      Hg$jscomp$0(window, "message", onres);
    }
  };
  /**
   * @return {?}
   */
  Tg$jscomp$0.isAvailable = function() {
    var ua;
    if (ua = "postMessage" in window && !Eg$jscomp$0()) {
      if (!(ua = Dg$jscomp$0() || "undefined" !== typeof navigator && (!!Cg$jscomp$0().match(/Windows Phone/) || !!window.Windows && /^ms-appx:/.test(location.href)))) {
        ua = Cg$jscomp$0();
        /** @type {boolean} */
        ua = "undefined" !== typeof navigator && "undefined" !== typeof window && !!(ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i) || ua.match(/CriOS/) || ua.match(/Twitter for iPhone/) || ua.match(/FBAN\/FBIOS/) || window.navigator.standalone);
      }
      /** @type {boolean} */
      ua = !ua;
    }
    return ua && !Cg$jscomp$0().match(/PhantomJS/);
  };
  /**
   * @return {?}
   */
  Tg$jscomp$0.prototype.Fc = function() {
    return "popup";
  };
  /**
   * @param {string} url
   * @param {string} value
   * @param {string} b
   * @return {undefined}
   */
  Ug$jscomp$0.prototype.open = function(url, value, b) {
    /**
     * @return {undefined}
     */
    function gen() {
      if (b) {
        b(Sg$jscomp$0("REQUEST_INTERRUPTED"));
        /** @type {null} */
        b = null;
      }
    }
    /** @type {!XMLHttpRequest} */
    var request = new XMLHttpRequest;
    var method = this.options.method.toUpperCase();
    var json;
    Hg$jscomp$0(window, "beforeunload", gen);
    /**
     * @return {undefined}
     */
    request.onreadystatechange = function() {
      if (b && 4 === request.readyState) {
        var PLAY;
        if (200 <= request.status && 300 > request.status) {
          try {
            PLAY = Rb$jscomp$0(request.responseText);
          } catch (b) {
          }
          b(null, PLAY);
        } else {
          if (500 <= request.status && 600 > request.status) {
            b(Sg$jscomp$0("SERVER_ERROR"));
          } else {
            b(Sg$jscomp$0("NETWORK_ERROR"));
          }
        }
        /** @type {null} */
        b = null;
        Ig$jscomp$0(window, "beforeunload", gen);
      }
    };
    if ("GET" === method) {
      /** @type {string} */
      url = url + ((/\?/.test(url) ? "" : "?") + Ib$jscomp$0(value));
      /** @type {null} */
      json = null;
    } else {
      var type = this.options.headers.content_type;
      if ("application/json" === type) {
        json = G$jscomp$2(value);
      }
      if ("application/x-www-form-urlencoded" === type) {
        json = Ib$jscomp$0(value);
      }
    }
    request.open(method, url, true);
    url = {
      "X-Requested-With" : "XMLHttpRequest",
      Accept : "application/json;text/plain"
    };
    ya$jscomp$0(url, this.options.headers);
    var key;
    for (key in url) {
      request.setRequestHeader(key, url[key]);
    }
    request.send(json);
  };
  /**
   * @return {?}
   */
  Ug$jscomp$0.isAvailable = function() {
    var u;
    if (u = !!window.XMLHttpRequest) {
      u = Cg$jscomp$0();
      u = !(u.match(/MSIE/) || u.match(/Trident/)) || Fg$jscomp$0(10);
    }
    return u;
  };
  /**
   * @return {?}
   */
  Ug$jscomp$0.prototype.Fc = function() {
    return "json";
  };
  /**
   * @param {string} a
   * @param {!Object} b
   * @param {string} c
   * @return {undefined}
   */
  Vg$jscomp$0.prototype.open = function(a, b, c) {
    /**
     * @return {undefined}
     */
    function callback() {
      if (c) {
        c(Sg$jscomp$0("USER_CANCELLED"));
        /** @type {null} */
        c = null;
      }
    }
    var data = this;
    var parsed = sd$jscomp$0(xg$jscomp$0);
    var ref;
    b.requestId = this.tc;
    /** @type {string} */
    b.redirectTo = parsed.scheme + "://" + parsed.host + "/blank/page.html";
    /** @type {string} */
    a = a + (/\?/.test(a) ? "" : "?");
    /** @type {string} */
    a = a + Ib$jscomp$0(b);
    if ((ref = window.open(a, "_blank", "location=no")) && r$jscomp$201(ref.addEventListener)) {
      ref.addEventListener("loadstart", function(p) {
        var c;
        if (c = p && p.url) {
          a: {
            try {
              /** @type {!Element} */
              var a = document.createElement("a");
              a.href = p.url;
              /** @type {boolean} */
              c = a.host === parsed.host && "/blank/page.html" === a.pathname;
              break a;
            } catch (t) {
            }
            /** @type {boolean} */
            c = false;
          }
        }
        if (c) {
          p = Kg$jscomp$0(p.url);
          ref.removeEventListener("exit", callback);
          ref.close();
          p = new yg$jscomp$0(null, null, {
            requestId : data.tc,
            requestKey : p
          });
          data.Kf.requestWithCredential("/auth/session", p, c);
          /** @type {null} */
          c = null;
        }
      });
      ref.addEventListener("exit", callback);
    } else {
      c(Sg$jscomp$0("TRANSPORT_UNAVAILABLE"));
    }
  };
  /**
   * @return {?}
   */
  Vg$jscomp$0.isAvailable = function() {
    return Dg$jscomp$0();
  };
  /**
   * @return {?}
   */
  Vg$jscomp$0.prototype.Fc = function() {
    return "redirect";
  };
  /**
   * @param {string} params
   * @param {!Object} value
   * @param {string} callback
   * @return {undefined}
   */
  Wg$jscomp$0.prototype.open = function(params, value, callback) {
    /**
     * @return {undefined}
     */
    function d() {
      if (callback) {
        callback(Sg$jscomp$0("REQUEST_INTERRUPTED"));
        /** @type {null} */
        callback = null;
      }
    }
    /**
     * @return {undefined}
     */
    function initEvents() {
      setTimeout(function() {
        window.__firebase_auth_jsonp[id] = void 0;
        if (va$jscomp$0(window.__firebase_auth_jsonp)) {
          window.__firebase_auth_jsonp = void 0;
        }
        try {
          /** @type {(Element|null)} */
          var gobel = document.getElementById(id);
          if (gobel) {
            gobel.parentNode.removeChild(gobel);
          }
        } catch (b) {
        }
      }, 1);
      Ig$jscomp$0(window, "beforeunload", d);
    }
    /** @type {string} */
    var id = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
    /** @type {string} */
    value[this.options.callback_parameter] = "__firebase_auth_jsonp." + id;
    /** @type {string} */
    params = params + ((/\?/.test(params) ? "" : "?") + Ib$jscomp$0(value));
    Hg$jscomp$0(window, "beforeunload", d);
    /**
     * @param {?} webhookMsg
     * @return {undefined}
     */
    window.__firebase_auth_jsonp[id] = function(webhookMsg) {
      if (callback) {
        callback(null, webhookMsg);
        /** @type {null} */
        callback = null;
      }
      initEvents();
    };
    Xg$jscomp$0(id, params, callback);
  };
  /**
   * @return {?}
   */
  Wg$jscomp$0.isAvailable = function() {
    return "undefined" !== typeof document && null != document.createElement;
  };
  /**
   * @return {?}
   */
  Wg$jscomp$0.prototype.Fc = function() {
    return "json";
  };
  ka$jscomp$0(Yg$jscomp$0, ff$jscomp$0);
  h$jscomp$18 = Yg$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.Be = function() {
    return this.qb || null;
  };
  /**
   * @param {!Object} filename
   * @param {!Function} source
   * @return {undefined}
   */
  h$jscomp$18.ve = function(filename, source) {
    gh$jscomp$0(this);
    var comp = Ag$jscomp$0(filename);
    /** @type {string} */
    comp.fb._method = "POST";
    this.uc("/users", comp, function(a, name) {
      if (a) {
        T$jscomp$3(source, a);
      } else {
        T$jscomp$3(source, a, name);
      }
    });
  };
  /**
   * @param {!Object} obj
   * @param {!Function} delim
   * @return {undefined}
   */
  h$jscomp$18.Xe = function(obj, delim) {
    var state = this;
    gh$jscomp$0(this);
    /** @type {string} */
    var colname = "/users/" + encodeURIComponent(obj.email);
    var conf = Ag$jscomp$0(obj);
    /** @type {string} */
    conf.fb._method = "DELETE";
    this.uc(colname, conf, function(a, b) {
      if (!a && b && b.uid && state.qb && state.qb.uid && state.qb.uid === b.uid) {
        eh$jscomp$0(state);
      }
      T$jscomp$3(delim, a);
    });
  };
  /**
   * @param {!Object} data
   * @param {!Function} point
   * @return {undefined}
   */
  h$jscomp$18.se = function(data, point) {
    gh$jscomp$0(this);
    /** @type {string} */
    var string = "/users/" + encodeURIComponent(data.email) + "/password";
    var conf = Ag$jscomp$0(data);
    /** @type {string} */
    conf.fb._method = "PUT";
    conf.fb.password = data.newPassword;
    this.uc(string, conf, function(a) {
      T$jscomp$3(point, a);
    });
  };
  /**
   * @param {!Object} params
   * @param {!Function} value
   * @return {undefined}
   */
  h$jscomp$18.re = function(params, value) {
    gh$jscomp$0(this);
    /** @type {string} */
    var URI = "/users/" + encodeURIComponent(params.oldEmail) + "/email";
    var request = Ag$jscomp$0(params);
    /** @type {string} */
    request.fb._method = "PUT";
    request.fb.email = params.newEmail;
    request.fb.password = params.password;
    this.uc(URI, request, function(a) {
      T$jscomp$3(value, a);
    });
  };
  /**
   * @param {!Object} obj
   * @param {!Function} delim
   * @return {undefined}
   */
  h$jscomp$18.Ze = function(obj, delim) {
    gh$jscomp$0(this);
    /** @type {string} */
    var string = "/users/" + encodeURIComponent(obj.email) + "/password";
    var conf = Ag$jscomp$0(obj);
    /** @type {string} */
    conf.fb._method = "POST";
    this.uc(string, conf, function(a) {
      T$jscomp$3(delim, a);
    });
  };
  /**
   * @param {string} d
   * @param {!Object} id
   * @param {!Function} txt
   * @return {undefined}
   */
  h$jscomp$18.uc = function(d, id, txt) {
    jh$jscomp$0(this, [Ug$jscomp$0, Wg$jscomp$0], d, id, txt);
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  h$jscomp$18.Ee = function(type) {
    O$jscomp$3("auth_status" === type, 'initial event must be of type "auth_status"');
    return this.We ? null : [this.qb];
  };
  /** @type {string} */
  var gd$jscomp$0 = "websocket";
  /** @type {string} */
  var hd$jscomp$0 = "long_polling";
  var oh$jscomp$0;
  var ph$jscomp$0;
  /**
   * @param {!Object} type
   * @param {string} name
   * @return {undefined}
   */
  nh$jscomp$0.prototype.open = function(type, name) {
    /** @type {number} */
    this.mf = 0;
    /** @type {string} */
    this.na = name;
    this.Ef = new kh$jscomp$0(type);
    /** @type {boolean} */
    this.Db = false;
    var self = this;
    /** @type {number} */
    this.ub = setTimeout(function() {
      self.f("Timed out trying to connect.");
      self.bb();
      /** @type {null} */
      self.ub = null;
    }, Math.floor(3E4));
    ud$jscomp$0(function() {
      if (!self.Db) {
        self.Wa = new qh$jscomp$0(function(len, val, navigatorType, canCreateDiscussions, isSlidingUp) {
          rh$jscomp$0(self, arguments);
          if (self.Wa) {
            if (self.ub && (clearTimeout(self.ub), self.ub = null), self.Kc = true, "start" == len) {
              /** @type {string} */
              self.id = val;
              /** @type {string} */
              self.Mf = navigatorType;
            } else {
              if ("close" === len) {
                if (val) {
                  /** @type {boolean} */
                  self.Wa.$d = false;
                  lh$jscomp$0(self.Ef, val, function() {
                    self.bb();
                  });
                } else {
                  self.bb();
                }
              } else {
                throw Error("Unrecognized command received: " + len);
              }
            }
          }
        }, function(trace, initHashBlocks) {
          rh$jscomp$0(self, arguments);
          mh$jscomp$0(self.Ef, trace, initHashBlocks);
        }, function() {
          self.bb();
        }, self.ld);
        var options = {
          start : "t"
        };
        /** @type {number} */
        options.ser = Math.floor(1E8 * Math.random());
        if (self.Wa.ke) {
          options.cb = self.Wa.ke;
        }
        /** @type {string} */
        options.v = "5";
        if (self.Xf) {
          options.s = self.Xf;
        }
        if (self.Fb) {
          options.ls = self.Fb;
        }
        if ("undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com")) {
          /** @type {string} */
          options.r = "f";
        }
        options = self.ld(options);
        self.f("Connecting via long-poll to " + options);
        sh$jscomp$2(self.Wa, options, function() {
        });
      }
    });
  };
  /**
   * @return {undefined}
   */
  nh$jscomp$0.prototype.start = function() {
    var node = this.Wa;
    var pass = this.Mf;
    node.Gg = this.id;
    node.Hg = pass;
    /** @type {boolean} */
    node.oe = true;
    for (; th$jscomp$0(node);) {
    }
    node = this.id;
    pass = this.Mf;
    /** @type {!Element} */
    this.kc = document.createElement("iframe");
    var obj = {
      dframe : "t"
    };
    obj.id = node;
    obj.pw = pass;
    this.kc.src = this.ld(obj);
    /** @type {string} */
    this.kc.style.display = "none";
    document.body.appendChild(this.kc);
  };
  /**
   * @return {?}
   */
  nh$jscomp$0.isAvailable = function() {
    return oh$jscomp$0 || !ph$jscomp$0 && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.kh) && true;
  };
  h$jscomp$18 = nh$jscomp$0.prototype;
  /**
   * @return {undefined}
   */
  h$jscomp$18.Hd = function() {
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.fd = function() {
    /** @type {boolean} */
    this.Db = true;
    if (this.Wa) {
      this.Wa.close();
      /** @type {null} */
      this.Wa = null;
    }
    if (this.kc) {
      document.body.removeChild(this.kc);
      /** @type {null} */
      this.kc = null;
    }
    if (this.ub) {
      clearTimeout(this.ub);
      /** @type {null} */
      this.ub = null;
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.bb = function() {
    if (!this.Db) {
      this.f("Longpoll is closing itself");
      this.fd();
      if (this.na) {
        this.na(this.Kc);
        /** @type {null} */
        this.na = null;
      }
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.close = function() {
    if (!this.Db) {
      this.f("Longpoll is being closed.");
      this.fd();
    }
  };
  /**
   * @param {string} b
   * @return {undefined}
   */
  h$jscomp$18.send = function(b) {
    b = G$jscomp$2(b);
    this.sb += b.length;
    rc$jscomp$0(this.Xa, "bytes_sent", b.length);
    b = Ob$jscomp$0(b);
    b = nb$jscomp$0(b, true);
    b = yd$jscomp$0(b, 1840);
    /** @type {number} */
    var i = 0;
    for (; i < b.length; i++) {
      var header = this.Wa;
      header.cd.push({
        Yg : this.mf,
        hh : b.length,
        of : b[i]
      });
      if (header.oe) {
        th$jscomp$0(header);
      }
      this.mf++;
    }
  };
  /**
   * @return {undefined}
   */
  qh$jscomp$0.prototype.close = function() {
    /** @type {boolean} */
    this.oe = false;
    if (this.Ga) {
      /** @type {string} */
      this.Ga.jb.body.innerHTML = "";
      var dialogObj = this;
      setTimeout(function() {
        if (null !== dialogObj.Ga) {
          document.body.removeChild(dialogObj.Ga);
          /** @type {null} */
          dialogObj.Ga = null;
        }
      }, Math.floor(0));
    }
    var confirmcallback = this.lb;
    if (confirmcallback) {
      /** @type {null} */
      this.lb = null;
      confirmcallback();
    }
  };
  /** @type {null} */
  var vh$jscomp$0 = null;
  if ("undefined" !== typeof MozWebSocket) {
    vh$jscomp$0 = MozWebSocket;
  } else {
    if ("undefined" !== typeof WebSocket) {
      /** @type {function(new:WebSocket, string, string=): ?} */
      vh$jscomp$0 = WebSocket;
    }
  }
  var xh$jscomp$0;
  /**
   * @param {!Object} type
   * @param {string} name
   * @return {undefined}
   */
  wh$jscomp$0.prototype.open = function(type, name) {
    /** @type {string} */
    this.lb = name;
    /** @type {!Object} */
    this.Lg = type;
    this.f("Websocket connecting to " + this.jf);
    /** @type {boolean} */
    this.Kc = false;
    bd$jscomp$0.set("previous_websocket_failure", true);
    try {
      this.La = new vh$jscomp$0(this.jf);
    } catch (err) {
      this.f("Error instantiating WebSocket.");
      var name = err.message || err.data;
      if (name) {
        this.f(name);
      }
      this.bb();
      return;
    }
    var self = this;
    /**
     * @return {undefined}
     */
    this.La.onopen = function() {
      self.f("Websocket connected.");
      /** @type {boolean} */
      self.Kc = true;
    };
    /**
     * @return {undefined}
     */
    this.La.onclose = function() {
      self.f("Websocket connection was disconnected.");
      /** @type {null} */
      self.La = null;
      self.bb();
    };
    /**
     * @param {!Object} a
     * @return {undefined}
     */
    this.La.onmessage = function(a) {
      if (null !== self.La) {
        if (a = a.data, self.rb += a.length, rc$jscomp$0(self.Xa, "bytes_received", a.length), yh$jscomp$0(self), null !== self.frames) {
          zh$jscomp$0(self, a);
        } else {
          a: {
            O$jscomp$3(null === self.frames, "We already have a frame buffer");
            if (6 >= a.length) {
              /** @type {number} */
              var b = Number(a);
              if (!isNaN(b)) {
                /** @type {number} */
                self.ff = b;
                /** @type {!Array} */
                self.frames = [];
                /** @type {null} */
                a = null;
                break a;
              }
            }
            /** @type {number} */
            self.ff = 1;
            /** @type {!Array} */
            self.frames = [];
          }
          if (null !== a) {
            zh$jscomp$0(self, a);
          }
        }
      }
    };
    /**
     * @param {string} data
     * @return {undefined}
     */
    this.La.onerror = function(data) {
      self.f("WebSocket error.  Closing connection.");
      if (data = data.message || data.data) {
        self.f(data);
      }
      self.bb();
    };
  };
  /**
   * @return {undefined}
   */
  wh$jscomp$0.prototype.start = function() {
  };
  /**
   * @return {?}
   */
  wh$jscomp$0.isAvailable = function() {
    /** @type {boolean} */
    var a = false;
    if ("undefined" !== typeof navigator && navigator.userAgent) {
      /** @type {(Array<string>|null)} */
      var rDefs = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
      if (rDefs && 1 < rDefs.length && 4.4 > parseFloat(rDefs[1])) {
        /** @type {boolean} */
        a = true;
      }
    }
    return !a && null !== vh$jscomp$0 && !xh$jscomp$0;
  };
  /** @type {number} */
  wh$jscomp$0.responsesRequiredToBeHealthy = 2;
  /** @type {number} */
  wh$jscomp$0.healthyTimeout = 3E4;
  h$jscomp$18 = wh$jscomp$0.prototype;
  /**
   * @return {undefined}
   */
  h$jscomp$18.Hd = function() {
    bd$jscomp$0.remove("previous_websocket_failure");
  };
  /**
   * @param {string} b
   * @return {undefined}
   */
  h$jscomp$18.send = function(b) {
    yh$jscomp$0(this);
    b = G$jscomp$2(b);
    this.sb += b.length;
    rc$jscomp$0(this.Xa, "bytes_sent", b.length);
    b = yd$jscomp$0(b, 16384);
    if (1 < b.length) {
      Ah$jscomp$0(this, String(b.length));
    }
    /** @type {number} */
    var i = 0;
    for (; i < b.length; i++) {
      Ah$jscomp$0(this, b[i]);
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.fd = function() {
    /** @type {boolean} */
    this.Db = true;
    if (this.Nc) {
      clearInterval(this.Nc);
      /** @type {null} */
      this.Nc = null;
    }
    if (this.La) {
      this.La.close();
      /** @type {null} */
      this.La = null;
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.bb = function() {
    if (!this.Db) {
      this.f("WebSocket is closing itself");
      this.fd();
      if (this.lb) {
        this.lb(this.Kc);
        /** @type {null} */
        this.lb = null;
      }
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.close = function() {
    if (!this.Db) {
      this.f("WebSocket is being closed");
      this.fd();
    }
  };
  /** @type {!Array} */
  var Dh$jscomp$0 = [nh$jscomp$0, wh$jscomp$0];
  /**
   * @param {string} name
   * @return {undefined}
   */
  Fh$jscomp$0.prototype.Ia = function(name) {
    Qh$jscomp$0(this, {
      t : "d",
      d : name
    });
  };
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  Fh$jscomp$0.prototype.Ld = function(a) {
    Nh$jscomp$0(this);
    this.nc(a);
  };
  /**
   * @return {undefined}
   */
  Fh$jscomp$0.prototype.close = function() {
    if (2 !== this.N) {
      this.f("Closing realtime connection.");
      /** @type {number} */
      this.N = 2;
      Mh$jscomp$0(this);
      if (this.na) {
        this.na();
        /** @type {null} */
        this.na = null;
      }
    }
  };
  /** @type {number} */
  var Sh$jscomp$0 = 0;
  /** @type {number} */
  var Uh$jscomp$0 = 0;
  h$jscomp$18 = Rh$jscomp$0.prototype;
  /**
   * @param {string} a
   * @param {string} s
   * @param {!Function} id
   * @return {undefined}
   */
  h$jscomp$18.Ia = function(a, s, id) {
    /** @type {number} */
    var j = ++this.Xg;
    a = {
      r : j,
      a : a,
      b : s
    };
    this.f(G$jscomp$2(a));
    O$jscomp$3(this.qa, "sendRequest call when we're not connected not allowed.");
    this.Ma.Ia(a);
    if (id) {
      /** @type {!Function} */
      this.Wd[j] = id;
    }
  };
  /**
   * @param {!Object} post
   * @param {?} i
   * @param {string} tag
   * @param {!Function} lutDescriptor
   * @return {undefined}
   */
  h$jscomp$18.Cf = function(post, i, tag, lutDescriptor) {
    var id = post.wa();
    var IS_HANDLED = post.path.toString();
    this.f("Listen called for " + IS_HANDLED + " " + id);
    this.ba[IS_HANDLED] = this.ba[IS_HANDLED] || {};
    O$jscomp$3(Ie$jscomp$1(post.n) || !He$jscomp$1(post.n), "listen() called for non-default but complete query");
    O$jscomp$3(!this.ba[IS_HANDLED][id], "listen() called twice for same path/queryId.");
    post = {
      I : lutDescriptor,
      Ad : i,
      Ug : post,
      tag : tag
    };
    /** @type {!Object} */
    this.ba[IS_HANDLED][id] = post;
    if (this.qa) {
      Vh$jscomp$0(this, post);
    }
  };
  /**
   * @param {string} type
   * @param {!Object} x
   * @param {!Function} a
   * @return {undefined}
   */
  h$jscomp$18.O = function(type, x, a) {
    this.Ca = {
      rg : type,
      sf : false,
      Dc : x,
      od : a
    };
    this.f("Authenticating using credential: " + type);
    Xh$jscomp$0(this);
    if (!(x = 40 == type.length)) {
      type = Cd$jscomp$0(type).Ec;
      /** @type {boolean} */
      x = "object" === typeof type && true === z$jscomp$13(type, "admin");
    }
    if (x) {
      this.f("Admin auth credential detected.  Reducing max reconnect time.");
      /** @type {number} */
      this.Id = 3E4;
    }
  };
  /**
   * @param {?} $
   * @return {undefined}
   */
  h$jscomp$18.je = function($) {
    /** @type {null} */
    this.Ca = null;
    if (this.qa) {
      this.Ia("unauth", {}, function(ts) {
        $(ts.s, ts.d);
      });
    }
  };
  /**
   * @param {!Object} e
   * @param {number} h
   * @return {undefined}
   */
  h$jscomp$18.$f = function(e, h) {
    var p = e.path.toString();
    var queryConditions = e.wa();
    this.f("Unlisten called for " + p + " " + queryConditions);
    O$jscomp$3(Ie$jscomp$1(e.n) || !He$jscomp$1(e.n), "unlisten() called for non-default but complete query");
    if (Wh$jscomp$0(this, p, queryConditions) && this.qa) {
      var num = Ge$jscomp$1(e.n);
      this.f("Unlisten on " + p + " for " + queryConditions);
      p = {
        p : p
      };
      if (h) {
        p.q = num;
        /** @type {number} */
        p.t = h;
      }
      this.Ia("n", p);
    }
  };
  /**
   * @param {!Object} actionType
   * @param {!Object} action
   * @param {!Function} callbackId
   * @return {undefined}
   */
  h$jscomp$18.Qe = function(actionType, action, callbackId) {
    if (this.qa) {
      Yh$jscomp$0(this, "o", actionType, action, callbackId);
    } else {
      this.Yc.push({
        bd : actionType,
        action : "o",
        data : action,
        I : callbackId
      });
    }
  };
  /**
   * @param {!Object} actionType
   * @param {!Object} action
   * @param {!Function} callbackId
   * @return {undefined}
   */
  h$jscomp$18.Gf = function(actionType, action, callbackId) {
    if (this.qa) {
      Yh$jscomp$0(this, "om", actionType, action, callbackId);
    } else {
      this.Yc.push({
        bd : actionType,
        action : "om",
        data : action,
        I : callbackId
      });
    }
  };
  /**
   * @param {!Object} data
   * @param {!Function} callbackId
   * @return {undefined}
   */
  h$jscomp$18.Md = function(data, callbackId) {
    if (this.qa) {
      Yh$jscomp$0(this, "oc", data, null, callbackId);
    } else {
      this.Yc.push({
        bd : data,
        action : "oc",
        data : null,
        I : callbackId
      });
    }
  };
  /**
   * @param {string} cb
   * @param {!Object} t
   * @param {!Function} req
   * @param {undefined} key
   * @return {undefined}
   */
  h$jscomp$18.put = function(cb, t, req, key) {
    Zh$jscomp$0(this, "p", cb, t, req, key);
  };
  /**
   * @param {string} session_id
   * @param {!Object} f
   * @param {!Function} s
   * @param {undefined} n
   * @return {undefined}
   */
  h$jscomp$18.Df = function(session_id, f, s, n) {
    Zh$jscomp$0(this, "m", session_id, f, s, n);
  };
  /**
   * @param {number} y
   * @return {undefined}
   */
  h$jscomp$18.Ye = function(y) {
    if (this.qa) {
      y = {
        c : y
      };
      this.f("reportStats", y);
      this.Ia("s", y, function(outValue) {
        if ("ok" !== outValue.s) {
          this.f("reportStats", "Error sending stats: " + outValue.d);
        }
      });
    }
  };
  /**
   * @param {string} b
   * @return {undefined}
   */
  h$jscomp$18.Ld = function(b) {
    if ("r" in b) {
      this.f("from server: " + G$jscomp$2(b));
      var y = b.r;
      var c = this.Wd[y];
      if (c) {
        delete this.Wd[y];
        c(b.b);
      }
    } else {
      if ("error" in b) {
        throw "A server-side error has occurred: " + b.error;
      }
      if ("a" in b) {
        y = b.a;
        c = b.b;
        this.f("handleServerMessage", y, c);
        if ("d" === y) {
          this.Kb(c.p, c.d, false, c.t);
        } else {
          if ("m" === y) {
            this.Kb(c.p, c.d, true, c.t);
          } else {
            if ("c" === y) {
              ai$jscomp$0(this, c.p, c.q);
            } else {
              if ("ac" === y) {
                b = c.s;
                y = c.d;
                c = this.Ca;
                /** @type {null} */
                this.Ca = null;
                if (c && c.od) {
                  c.od(b, y);
                }
              } else {
                if ("sd" === y) {
                  if (this.$e) {
                    this.$e(c);
                  } else {
                    if ("msg" in c && "undefined" !== typeof console) {
                      console.log("FIREBASE: " + c.msg.replace("\n", "\nFIREBASE: "));
                    }
                  }
                } else {
                  qd$jscomp$0("Unrecognized action received from server: " + G$jscomp$2(y) + "\nAre you using the latest client?");
                }
              }
            }
          }
        }
      }
    }
  };
  /**
   * @param {number} a
   * @param {!Function} b
   * @return {undefined}
   */
  h$jscomp$18.Zc = function(a, b) {
    this.f("connection ready");
    /** @type {boolean} */
    this.qa = true;
    /** @type {number} */
    this.Oc = (new Date).getTime();
    this.Se({
      serverTimeOffset : a - (new Date).getTime()
    });
    /** @type {!Function} */
    this.Fb = b;
    if (this.rf) {
      var charsetBitSize = {};
      /** @type {number} */
      charsetBitSize["sdk.js." + Eb$jscomp$0.replace(/\./g, "-")] = 1;
      if (Dg$jscomp$0()) {
        /** @type {number} */
        charsetBitSize["framework.cordova"] = 1;
      } else {
        if ("object" === typeof navigator && "ReactNative" === navigator.product) {
          /** @type {number} */
          charsetBitSize["framework.reactnative"] = 1;
        }
      }
      this.Ye(charsetBitSize);
    }
    bi$jscomp$0(this);
    /** @type {boolean} */
    this.rf = false;
    this.Xc(true);
  };
  /**
   * @param {boolean} a
   * @return {undefined}
   */
  h$jscomp$18.Og = function(a) {
    if (a && !this.Sb && this.eb === this.Id) {
      this.f("Window became visible.  Reducing delay.");
      /** @type {number} */
      this.eb = 1E3;
      if (!this.Ma) {
        Th$jscomp$0(this, 0);
      }
    }
    /** @type {boolean} */
    this.Sb = a;
  };
  /**
   * @param {?} a
   * @return {undefined}
   */
  h$jscomp$18.Mg = function(a) {
    if (a) {
      this.f("Browser went online.");
      /** @type {number} */
      this.eb = 1E3;
      if (!this.Ma) {
        Th$jscomp$0(this, 0);
      }
    } else {
      this.f("Browser went offline.  Killing connection.");
      if (this.Ma) {
        this.Ma.close();
      }
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.If = function() {
    this.f("data client disconnected");
    /** @type {boolean} */
    this.qa = false;
    /** @type {null} */
    this.Ma = null;
    /** @type {number} */
    var i = 0;
    for (; i < this.sa.length; i++) {
      var t = this.sa[i];
      if (t && "h" in t.Pf && t.Vg) {
        if (t.I) {
          t.I("disconnect");
        }
        delete this.sa[i];
        this.ad--;
      }
    }
    if (0 === this.ad) {
      /** @type {!Array} */
      this.sa = [];
    }
    this.Wd = {};
    if (di$jscomp$0(this)) {
      if (this.Sb) {
        if (this.Oc) {
          if (3E4 < (new Date).getTime() - this.Oc) {
            /** @type {number} */
            this.eb = 1E3;
          }
          /** @type {null} */
          this.Oc = null;
        }
      } else {
        this.f("Window isn't visible.  Delaying reconnect.");
        this.eb = this.Id;
        /** @type {number} */
        this.Ke = (new Date).getTime();
      }
      /** @type {number} */
      i = Math.max(0, this.eb - ((new Date).getTime() - this.Ke));
      /** @type {number} */
      i = i * Math.random();
      this.f("Trying to reconnect in " + i + "ms");
      Th$jscomp$0(this, i);
      /** @type {number} */
      this.eb = Math.min(this.Id, 1.3 * this.eb);
    }
    this.Xc(false);
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Cb = function() {
    /** @type {boolean} */
    this.Ie = true;
    if (this.Ma) {
      this.Ma.close();
    } else {
      if (this.wb) {
        clearTimeout(this.wb);
        /** @type {null} */
        this.wb = null;
      }
      if (this.qa) {
        this.If();
      }
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.vc = function() {
    /** @type {boolean} */
    this.Ie = false;
    /** @type {number} */
    this.eb = 1E3;
    if (!this.Ma) {
      Th$jscomp$0(this, 0);
    }
  };
  var U$jscomp$2 = {
    zg : function() {
      /** @type {boolean} */
      oh$jscomp$0 = xh$jscomp$0 = true;
    }
  };
  /** @type {function(): undefined} */
  U$jscomp$2.forceLongPolling = U$jscomp$2.zg;
  /**
   * @return {undefined}
   */
  U$jscomp$2.Ag = function() {
    /** @type {boolean} */
    ph$jscomp$0 = true;
  };
  /** @type {function(): undefined} */
  U$jscomp$2.forceWebSockets = U$jscomp$2.Ag;
  /**
   * @return {?}
   */
  U$jscomp$2.Eg = function() {
    return wh$jscomp$0.isAvailable();
  };
  /** @type {function(): ?} */
  U$jscomp$2.isWebSocketsAvailable = U$jscomp$2.Eg;
  /**
   * @param {!Object} a
   * @param {!AudioNode} b
   * @return {undefined}
   */
  U$jscomp$2.ah = function(a, b) {
    /** @type {!AudioNode} */
    a.k.Va.$e = b;
  };
  /** @type {function(!Object, !AudioNode): undefined} */
  U$jscomp$2.setSecurityDebugCallback = U$jscomp$2.ah;
  /**
   * @param {!Object} length
   * @param {!Arguments} buffer
   * @return {undefined}
   */
  U$jscomp$2.bf = function(length, buffer) {
    length.k.bf(buffer);
  };
  /** @type {function(!Object, !Arguments): undefined} */
  U$jscomp$2.stats = U$jscomp$2.bf;
  /**
   * @param {!Object} v
   * @param {undefined} u
   * @return {undefined}
   */
  U$jscomp$2.cf = function(v, u) {
    v.k.cf(u);
  };
  /** @type {function(!Object, undefined): undefined} */
  U$jscomp$2.statsIncrementCounter = U$jscomp$2.cf;
  /**
   * @param {!Object} cmd
   * @return {?}
   */
  U$jscomp$2.ud = function(cmd) {
    return cmd.k.ud;
  };
  /** @type {function(!Object): ?} */
  U$jscomp$2.dataUpdateCount = U$jscomp$2.ud;
  /**
   * @param {!Object} a
   * @param {!AudioNode} b
   * @return {undefined}
   */
  U$jscomp$2.Dg = function(a, b) {
    /** @type {!AudioNode} */
    a.k.He = b;
  };
  /** @type {function(!Object, !AudioNode): undefined} */
  U$jscomp$2.interceptServerData = U$jscomp$2.Dg;
  /**
   * @param {?} a
   * @return {undefined}
   */
  U$jscomp$2.Kg = function(a) {
    new Og$jscomp$0(a);
  };
  /** @type {function(?): undefined} */
  U$jscomp$2.onPopupOpen = U$jscomp$2.Kg;
  /**
   * @param {string} a
   * @return {undefined}
   */
  U$jscomp$2.Zg = function(a) {
    /** @type {string} */
    xg$jscomp$0 = a;
  };
  /** @type {function(string): undefined} */
  U$jscomp$2.setAuthenticationServer = U$jscomp$2.Zg;
  /**
   * @param {undefined} i
   * @return {?}
   */
  V$jscomp$2.prototype.cancel = function(i) {
    D$jscomp$3("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
    F$jscomp$2("Firebase.onDisconnect().cancel", 1, i, true);
    var obj = new B$jscomp$2;
    this.dd.Md(this.ta, C$jscomp$3(obj, i));
    return obj.D;
  };
  /** @type {function(undefined): ?} */
  V$jscomp$2.prototype.cancel = V$jscomp$2.prototype.cancel;
  /**
   * @param {!Object} x
   * @return {?}
   */
  V$jscomp$2.prototype.remove = function(x) {
    D$jscomp$3("Firebase.onDisconnect().remove", 0, 1, arguments.length);
    og$jscomp$0("Firebase.onDisconnect().remove", this.ta);
    F$jscomp$2("Firebase.onDisconnect().remove", 1, x, true);
    var obj = new B$jscomp$2;
    fi$jscomp$0(this.dd, this.ta, null, C$jscomp$3(obj, x));
    return obj.D;
  };
  /** @type {function(!Object): ?} */
  V$jscomp$2.prototype.remove = V$jscomp$2.prototype.remove;
  /**
   * @param {!Object} b
   * @param {string} key
   * @return {?}
   */
  V$jscomp$2.prototype.set = function(b, key) {
    D$jscomp$3("Firebase.onDisconnect().set", 1, 2, arguments.length);
    og$jscomp$0("Firebase.onDisconnect().set", this.ta);
    gg$jscomp$0("Firebase.onDisconnect().set", b, this.ta, false);
    F$jscomp$2("Firebase.onDisconnect().set", 2, key, true);
    var obj = new B$jscomp$2;
    fi$jscomp$0(this.dd, this.ta, b, C$jscomp$3(obj, key));
    return obj.D;
  };
  /** @type {function(!Object, string): ?} */
  V$jscomp$2.prototype.set = V$jscomp$2.prototype.set;
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Object} c
   * @return {?}
   */
  V$jscomp$2.prototype.Ob = function(a, b, c) {
    D$jscomp$3("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
    og$jscomp$0("Firebase.onDisconnect().setWithPriority", this.ta);
    gg$jscomp$0("Firebase.onDisconnect().setWithPriority", a, this.ta, false);
    kg$jscomp$0("Firebase.onDisconnect().setWithPriority", 2, b);
    F$jscomp$2("Firebase.onDisconnect().setWithPriority", 3, c, true);
    var obj = new B$jscomp$2;
    gi$jscomp$0(this.dd, this.ta, a, b, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  V$jscomp$2.prototype.setWithPriority = V$jscomp$2.prototype.Ob;
  /**
   * @param {string} options
   * @param {?} d
   * @return {?}
   */
  V$jscomp$2.prototype.update = function(options, d) {
    D$jscomp$3("Firebase.onDisconnect().update", 1, 2, arguments.length);
    og$jscomp$0("Firebase.onDisconnect().update", this.ta);
    if (da$jscomp$0(options)) {
      var result = {};
      /** @type {number} */
      var i = 0;
      for (; i < options.length; ++i) {
        result["" + i] = options[i];
      }
      options = result;
      S$jscomp$3("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    jg$jscomp$0("Firebase.onDisconnect().update", options, this.ta);
    F$jscomp$2("Firebase.onDisconnect().update", 2, d, true);
    result = new B$jscomp$2;
    hi$jscomp$0(this.dd, this.ta, options, C$jscomp$3(result, d));
    return result.D;
  };
  /** @type {function(string, ?): ?} */
  V$jscomp$2.prototype.update = V$jscomp$2.prototype.update;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.J = function() {
    D$jscomp$3("Firebase.DataSnapshot.val", 0, 0, arguments.length);
    return this.A.J();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.val = W$jscomp$2.prototype.J;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.qf = function() {
    D$jscomp$3("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
    return this.A.J(true);
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.exportVal = W$jscomp$2.prototype.qf;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.xg = function() {
    D$jscomp$3("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
    return !this.A.e();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.exists = W$jscomp$2.prototype.xg;
  /**
   * @param {string} x
   * @return {?}
   */
  W$jscomp$2.prototype.o = function(x) {
    D$jscomp$3("Firebase.DataSnapshot.child", 0, 1, arguments.length);
    if (fa$jscomp$0(x)) {
      /** @type {string} */
      x = String(x);
    }
    ng$jscomp$0("Firebase.DataSnapshot.child", x);
    var x1 = new P$jscomp$3(x);
    var x2 = this.Y.o(x1);
    return new W$jscomp$2(this.A.S(x1), x2, R$jscomp$2);
  };
  /** @type {function(string): ?} */
  W$jscomp$2.prototype.child = W$jscomp$2.prototype.o;
  /**
   * @param {string} x
   * @return {?}
   */
  W$jscomp$2.prototype.Fa = function(x) {
    D$jscomp$3("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
    ng$jscomp$0("Firebase.DataSnapshot.hasChild", x);
    var item = new P$jscomp$3(x);
    return !this.A.S(item).e();
  };
  /** @type {function(string): ?} */
  W$jscomp$2.prototype.hasChild = W$jscomp$2.prototype.Fa;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.C = function() {
    D$jscomp$3("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
    return this.A.C().J();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.getPriority = W$jscomp$2.prototype.C;
  /**
   * @param {!Object} callback
   * @return {?}
   */
  W$jscomp$2.prototype.forEach = function(callback) {
    D$jscomp$3("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
    F$jscomp$2("Firebase.DataSnapshot.forEach", 1, callback, false);
    if (this.A.L()) {
      return false;
    }
    var M = this;
    return !!this.A.R(this.g, function(d, enlivenedObjects) {
      return callback(new W$jscomp$2(enlivenedObjects, M.Y.o(d), R$jscomp$2));
    });
  };
  /** @type {function(!Object): ?} */
  W$jscomp$2.prototype.forEach = W$jscomp$2.prototype.forEach;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.zd = function() {
    D$jscomp$3("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
    return this.A.L() ? false : !this.A.e();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.hasChildren = W$jscomp$2.prototype.zd;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.name = function() {
    S$jscomp$3("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");
    D$jscomp$3("Firebase.DataSnapshot.name", 0, 0, arguments.length);
    return this.key();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.name = W$jscomp$2.prototype.name;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.key = function() {
    D$jscomp$3("Firebase.DataSnapshot.key", 0, 0, arguments.length);
    return this.Y.key();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.key = W$jscomp$2.prototype.key;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.Hb = function() {
    D$jscomp$3("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
    return this.A.Hb();
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.numChildren = W$jscomp$2.prototype.Hb;
  /**
   * @return {?}
   */
  W$jscomp$2.prototype.Mb = function() {
    D$jscomp$3("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
    return this.Y;
  };
  /** @type {function(): ?} */
  W$jscomp$2.prototype.ref = W$jscomp$2.prototype.Mb;
  h$jscomp$18 = ii$jscomp$0.prototype;
  /**
   * @param {string} rbd
   * @return {?}
   */
  h$jscomp$18.Qf = function(rbd) {
    return "value" === rbd;
  };
  /**
   * @param {?} o
   * @param {!Object} def
   * @return {?}
   */
  h$jscomp$18.createEvent = function(o, def) {
    var g = def.n.g;
    return new jc$jscomp$0("value", this, new W$jscomp$2(o.Na, def.Mb(), g));
  };
  /**
   * @param {!Object} val
   * @return {?}
   */
  h$jscomp$18.Zb = function(val) {
    var b = this.vb;
    if ("cancel" === val.De()) {
      O$jscomp$3(this.tb, "Raising a cancel event on a listener with no cancel callback");
      var context = this.tb;
      return function() {
        context.call(b, val.error);
      };
    }
    var message = this.Vb;
    return function() {
      message.call(b, val.be);
    };
  };
  /**
   * @param {!Object} x
   * @param {!Object} fn
   * @return {?}
   */
  h$jscomp$18.lf = function(x, fn) {
    return this.tb ? new kc$jscomp$0(this, x, fn) : null;
  };
  /**
   * @param {!Object} tree
   * @return {?}
   */
  h$jscomp$18.matches = function(tree) {
    return tree instanceof ii$jscomp$0 ? tree.Vb && this.Vb ? tree.Vb === this.Vb && tree.vb === this.vb : true : false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.yf = function() {
    return null !== this.Vb;
  };
  h$jscomp$18 = ji$jscomp$0.prototype;
  /**
   * @param {string} b
   * @return {?}
   */
  h$jscomp$18.Qf = function(b) {
    b = "children_added" === b ? "child_added" : b;
    return ("children_removed" === b ? "child_removed" : b) in this.ja;
  };
  /**
   * @param {!Object} x
   * @param {!Object} fn
   * @return {?}
   */
  h$jscomp$18.lf = function(x, fn) {
    return this.tb ? new kc$jscomp$0(this, x, fn) : null;
  };
  /**
   * @param {!Object} error
   * @param {!Object} result
   * @return {?}
   */
  h$jscomp$18.createEvent = function(error, result) {
    O$jscomp$3(null != error.Za, "Child events should have a childName.");
    var x2 = result.Mb().o(error.Za);
    return new jc$jscomp$0(error.type, this, new W$jscomp$2(error.Na, x2, result.n.g), error.Td);
  };
  /**
   * @param {!Object} exports
   * @return {?}
   */
  h$jscomp$18.Zb = function(exports) {
    var operations = this.vb;
    if ("cancel" === exports.De()) {
      O$jscomp$3(this.tb, "Raising a cancel event on a listener with no cancel callback");
      var t = this.tb;
      return function() {
        t.call(operations, exports.error);
      };
    }
    var app = this.ja[exports.wd];
    return function() {
      app.call(operations, exports.be, exports.Td);
    };
  };
  /**
   * @param {!Object} node
   * @return {?}
   */
  h$jscomp$18.matches = function(node) {
    if (node instanceof ji$jscomp$0) {
      if (!this.ja || !node.ja) {
        return true;
      }
      if (this.vb === node.vb) {
        var i = oa$jscomp$0(node.ja);
        if (i === oa$jscomp$0(this.ja)) {
          if (1 === i) {
            i = pa$jscomp$0(node.ja);
            var j = pa$jscomp$0(this.ja);
            return j === i && (!node.ja[i] || !this.ja[j] || node.ja[i] === this.ja[j]);
          }
          return na$jscomp$0(this.ja, function(oldComponent, c) {
            return node.ja[c] === oldComponent;
          });
        }
      }
    }
    return false;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.yf = function() {
    return null !== this.ja;
  };
  h$jscomp$18 = ki$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.e = function() {
    return va$jscomp$0(this.za);
  };
  /**
   * @param {!Object} a
   * @param {string} b
   * @param {!Object} i
   * @return {?}
   */
  h$jscomp$18.gb = function(a, b, i) {
    var o = a.source.Lb;
    if (null !== o) {
      return o = z$jscomp$13(this.za, o), O$jscomp$3(null != o, "SyncTree gave us an op for an invalid query."), o.gb(a, b, i);
    }
    /** @type {!Array} */
    var x = [];
    v$jscomp$5(this.za, function(o) {
      x = x.concat(o.gb(a, b, i));
    });
    return x;
  };
  /**
   * @param {!Object} data
   * @param {?} f
   * @param {?} c
   * @param {string} a
   * @param {string} s
   * @return {?}
   */
  h$jscomp$18.Tb = function(data, f, c, a, s) {
    var name = data.wa();
    var node = z$jscomp$13(this.za, name);
    if (!node) {
      node = c.Aa(s ? a : null);
      /** @type {boolean} */
      var k = false;
      if (node) {
        /** @type {boolean} */
        k = true;
      } else {
        node = a instanceof fe$jscomp$2 ? c.Cc(a) : H$jscomp$2;
        /** @type {boolean} */
        k = false;
      }
      node = new Ye$jscomp$1(data, new je$jscomp$1(new Xb$jscomp$0(node, k, false), new Xb$jscomp$0(a, s, false)));
      this.za[name] = node;
    }
    node.Tb(f);
    return af$jscomp$0(node, f);
  };
  /**
   * @param {!Object} data
   * @param {!Object} name
   * @param {!Object} o
   * @return {?}
   */
  h$jscomp$18.nb = function(data, name, o) {
    var method = data.wa();
    /** @type {!Array} */
    var v = [];
    /** @type {!Array} */
    var l = [];
    /** @type {boolean} */
    var g = null != li$jscomp$0(this);
    if ("default" === method) {
      var ContentFlowGlobal = this;
      v$jscomp$5(this.za, function(self, name) {
        l = l.concat(self.nb(name, o));
        if (self.e()) {
          delete ContentFlowGlobal.za[name];
          if (!He$jscomp$1(self.Y.n)) {
            v.push(self.Y);
          }
        }
      });
    } else {
      var p = z$jscomp$13(this.za, method);
      if (p) {
        l = l.concat(p.nb(name, o));
        if (p.e()) {
          delete this.za[method];
          if (!He$jscomp$1(p.Y.n)) {
            v.push(p.Y);
          }
        }
      }
    }
    if (g && null == li$jscomp$0(this)) {
      v.push(new X$jscomp$2(data.k, data.path));
    }
    return {
      Wg : v,
      vg : l
    };
  };
  /**
   * @param {!Object} a
   * @return {?}
   */
  h$jscomp$18.kb = function(a) {
    /** @type {null} */
    var b = null;
    v$jscomp$5(this.za, function(conf) {
      b = b || conf.kb(a);
    });
    return b;
  };
  /**
   * @param {!Object} b
   * @param {?} type
   * @return {?}
   */
  oi$jscomp$0.prototype.Tb = function(b, type) {
    var s = b.path;
    /** @type {null} */
    var value = null;
    /** @type {boolean} */
    var Handlebars = false;
    zf$jscomp$0(this.va, s, function(a, context) {
      var elem = lf$jscomp$0(a, s);
      value = value || context.kb(elem);
      Handlebars = Handlebars || null != li$jscomp$0(context);
    });
    var data = this.va.get(s);
    if (data) {
      Handlebars = Handlebars || null != li$jscomp$0(data);
      value = value || data.kb(M$jscomp$2);
    } else {
      data = new ki$jscomp$0;
      this.va = this.va.set(s, data);
    }
    var res;
    if (null != value) {
      /** @type {boolean} */
      res = true;
    } else {
      /** @type {boolean} */
      res = false;
      value = H$jscomp$2;
      Cf$jscomp$0(this.va.subtree(s), function(date, inlineSteps) {
        var m = inlineSteps.kb(M$jscomp$2);
        if (m) {
          value = value.W(date, m);
        }
      });
    }
    /** @type {boolean} */
    var OtherHandlebars = null != ni$jscomp$0(data, b);
    if (!OtherHandlebars && !He$jscomp$1(b.n)) {
      var m = zi$jscomp$0(b);
      O$jscomp$3(!(m in this.qc), "View does not exist, but we have a tag");
      /** @type {number} */
      var name = Ai$jscomp$0++;
      /** @type {number} */
      this.qc[m] = name;
      this.df["_" + name] = m;
    }
    res = data.Tb(b, type, new Uf$jscomp$0(s, this.mb), value, res);
    if (!(OtherHandlebars || Handlebars)) {
      data = ni$jscomp$0(data, b);
      res = res.concat(Bi$jscomp$0(this, b, data));
    }
    return res;
  };
  /**
   * @param {!Object} o
   * @param {!Object} s
   * @param {!Object} e
   * @return {?}
   */
  oi$jscomp$0.prototype.nb = function(o, s, e) {
    var a = o.path;
    var data = this.va.get(a);
    /** @type {!Array} */
    var ret = [];
    if (data && ("default" === o.wa() || null != ni$jscomp$0(data, o))) {
      ret = data.nb(o, s, e);
      if (data.e()) {
        this.va = this.va.remove(a);
      }
      data = ret.Wg;
      ret = ret.vg;
      /** @type {boolean} */
      s = -1 !== Sa$jscomp$0(data, function(__webpack_require__) {
        return He$jscomp$1(__webpack_require__.n);
      });
      var xstr = xf$jscomp$0(this.va, a, function(a, context) {
        return null != li$jscomp$0(context);
      });
      if (s && !xstr && (a = this.va.subtree(a), !a.e())) {
        a = Ci$jscomp$0(a);
        /** @type {number} */
        var i = 0;
        for (; i < a.length; ++i) {
          var e = a[i];
          var y = e.Y;
          e = Di$jscomp$0(this, e);
          this.Qc.af(Ei$jscomp$0(y), Fi$jscomp$0(this, y), e.Ad, e.I);
        }
      }
      if (!xstr && 0 < data.length && !e) {
        if (s) {
          this.Qc.de(Ei$jscomp$0(o), null);
        } else {
          var options = this;
          Ma$jscomp$0(data, function(o) {
            o.wa();
            var p = options.qc[zi$jscomp$0(o)];
            options.Qc.de(Ei$jscomp$0(o), p);
          });
        }
      }
      Gi$jscomp$0(this, data);
    }
    return ret;
  };
  /**
   * @param {string} s
   * @param {!Object} f
   * @return {?}
   */
  oi$jscomp$0.prototype.Aa = function(s, f) {
    var vm = this.mb;
    var p = xf$jscomp$0(this.va, s, function(a, conf) {
      var r = lf$jscomp$0(a, s);
      if (r = conf.kb(r)) {
        return r;
      }
    });
    return vm.Aa(s, p, f, true);
  };
  /** @type {number} */
  var Ai$jscomp$0 = 1;
  h$jscomp$18 = Ji$jscomp$0.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    return (this.G.ob ? "https://" : "http://") + this.G.host;
  };
  /**
   * @return {?}
   */
  h$jscomp$18.name = function() {
    return this.G.lc;
  };
  /**
   * @param {!Array} x
   * @param {?} value
   * @param {boolean} i
   * @param {string} p
   * @return {undefined}
   */
  h$jscomp$18.Kb = function(x, value, i, p) {
    this.ud++;
    var i = new P$jscomp$3(x);
    value = this.He ? this.He(x, value) : value;
    /** @type {!Array} */
    x = [];
    if (p) {
      if (i) {
        value = ma$jscomp$0(value, function(grayscale) {
          return Q$jscomp$2(grayscale);
        });
        x = yi$jscomp$0(this.M, i, value, p);
      } else {
        value = Q$jscomp$2(value);
        x = ui$jscomp$0(this.M, i, value, p);
      }
    } else {
      if (i) {
        p = ma$jscomp$0(value, function(grayscale) {
          return Q$jscomp$2(grayscale);
        });
        x = ti$jscomp$0(this.M, i, p);
      } else {
        p = Q$jscomp$2(value);
        x = qi$jscomp$0(this.M, new Ac$jscomp$0(Gf$jscomp$0, i, p));
      }
    }
    p = i;
    if (0 < x.length) {
      p = Ni$jscomp$0(this, i);
    }
    dc$jscomp$0(this.fa, p, x);
  };
  /**
   * @param {boolean} a
   * @return {undefined}
   */
  h$jscomp$18.Xc = function(a) {
    Ki$jscomp$0(this, "connected", a);
    if (false === a) {
      Oi$jscomp$0(this);
    }
  };
  /**
   * @param {!Array} val
   * @return {undefined}
   */
  h$jscomp$18.Se = function(val) {
    var SAMPLE_MENU = this;
    zd$jscomp$0(val, function(childCompute, skeletonId) {
      Ki$jscomp$0(SAMPLE_MENU, skeletonId, childCompute);
    });
  };
  /**
   * @param {?} childCompute
   * @return {undefined}
   */
  h$jscomp$18.Pe = function(childCompute) {
    Ki$jscomp$0(this, "authenticated", childCompute);
  };
  /**
   * @param {string} base
   * @param {!Object} value
   * @param {!Object} el
   * @param {!Function} enhancements
   * @return {undefined}
   */
  h$jscomp$18.Ob = function(base, value, el, enhancements) {
    this.f("set", {
      path : base.toString(),
      value : value,
      nh : el
    });
    var result = Mi$jscomp$0(this);
    value = Q$jscomp$2(value, el);
    result = Xc$jscomp$0(value, result);
    /** @type {number} */
    var obj = this.Kd++;
    result = pi$jscomp$0(this.M, base, result, obj, true);
    $b$jscomp$0(this.fa, result);
    var data = this;
    this.da.put(base.toString(), value.J(true), function(ok, skeletonId) {
      /** @type {boolean} */
      var status = "ok" === ok;
      if (!status) {
        S$jscomp$3("set at " + base + " failed: " + ok);
      }
      status = si$jscomp$0(data.M, obj, !status);
      dc$jscomp$0(data.fa, base, status);
      Pi$jscomp$0(enhancements, ok, skeletonId);
    });
    result = Qi$jscomp$0(this, base);
    Ni$jscomp$0(this, result);
    dc$jscomp$0(this.fa, result, []);
  };
  /**
   * @param {string} data
   * @param {!Object} c
   * @param {!Function} horizontal
   * @return {undefined}
   */
  h$jscomp$18.update = function(data, c, horizontal) {
    this.f("update", {
      path : data.toString(),
      value : c
    });
    /** @type {boolean} */
    var d = true;
    var opts = Mi$jscomp$0(this);
    var children = {};
    v$jscomp$5(c, function(a, i) {
      /** @type {boolean} */
      d = false;
      var result = Q$jscomp$2(a);
      children[i] = Xc$jscomp$0(result, opts);
    });
    if (d) {
      fc$jscomp$0("update() called with empty data.  Don't do anything.");
      Pi$jscomp$0(horizontal, "ok");
    } else {
      /** @type {number} */
      var obj = this.Kd++;
      var item = ri$jscomp$0(this.M, data, children, obj);
      $b$jscomp$0(this.fa, item);
      var duration = this;
      this.da.Df(data.toString(), c, function(ok, skeletonId) {
        /** @type {boolean} */
        var status = "ok" === ok;
        if (!status) {
          S$jscomp$3("update at " + data + " failed: " + ok);
        }
        status = si$jscomp$0(duration.M, obj, !status);
        /** @type {string} */
        var event = data;
        if (0 < status.length) {
          event = Ni$jscomp$0(duration, data);
        }
        dc$jscomp$0(duration.fa, event, status);
        Pi$jscomp$0(horizontal, ok, skeletonId);
      });
      c = Qi$jscomp$0(this, data);
      Ni$jscomp$0(this, c);
      dc$jscomp$0(this.fa, data, []);
    }
  };
  /**
   * @param {!Object} height
   * @param {!Function} margin
   * @return {undefined}
   */
  h$jscomp$18.Md = function(height, margin) {
    var options = this;
    this.da.Md(height.toString(), function(ok, skeletonId) {
      if ("ok" === ok) {
        wg$jscomp$0(options.na, height);
      }
      Pi$jscomp$0(margin, ok, skeletonId);
    });
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.Cb = function() {
    if (this.Va) {
      this.Va.Cb();
    }
  };
  /**
   * @return {undefined}
   */
  h$jscomp$18.vc = function() {
    if (this.Va) {
      this.Va.vc();
    }
  };
  /**
   * @param {!Array} buffer
   * @return {undefined}
   */
  h$jscomp$18.bf = function(buffer) {
    if ("undefined" !== typeof console) {
      if (buffer) {
        if (!this.hd) {
          this.hd = new oc$jscomp$0(this.Xa);
        }
        buffer = this.hd.get();
      } else {
        buffer = this.Xa.get();
      }
      var y1 = Pa$jscomp$0(ra$jscomp$0(buffer), function(hatWidth, pointColors) {
        return Math.max(pointColors.length, hatWidth);
      }, 0);
      var index;
      for (index in buffer) {
        var next = buffer[index];
        /** @type {number} */
        var t = index.length;
        for (; t < y1 + 2; t++) {
          /** @type {string} */
          index = index + " ";
        }
        console.log(index + next);
      }
    }
  };
  /**
   * @param {string} v
   * @return {undefined}
   */
  h$jscomp$18.cf = function(v) {
    rc$jscomp$0(this.Xa, v);
    /** @type {boolean} */
    this.eh.Vf[v] = true;
  };
  /**
   * @param {string} event
   * @return {undefined}
   */
  h$jscomp$18.f = function(event) {
    /** @type {string} */
    var data = "";
    if (this.Va) {
      /** @type {string} */
      data = this.Va.id + ":";
    }
    fc$jscomp$0(data, arguments);
  };
  /**
   * @return {undefined}
   */
  aj$jscomp$0.prototype.Cb = function() {
    var i;
    for (i in this.sc) {
      this.sc[i].Cb();
    }
  };
  /**
   * @return {undefined}
   */
  aj$jscomp$0.prototype.vc = function() {
    var i;
    for (i in this.sc) {
      this.sc[i].vc();
    }
  };
  /**
   * @return {undefined}
   */
  aj$jscomp$0.prototype.ze = function() {
    /** @type {boolean} */
    this.ag = true;
  };
  ba$jscomp$0(aj$jscomp$0);
  /** @type {function(): undefined} */
  aj$jscomp$0.prototype.interrupt = aj$jscomp$0.prototype.Cb;
  /** @type {function(): undefined} */
  aj$jscomp$0.prototype.resume = aj$jscomp$0.prototype.vc;
  h$jscomp$18 = Y$jscomp$2.prototype;
  /**
   * @return {?}
   */
  h$jscomp$18.Mb = function() {
    D$jscomp$3("Query.ref", 0, 0, arguments.length);
    return new X$jscomp$2(this.k, this.path);
  };
  /**
   * @param {string} name
   * @param {!Function} c
   * @param {string} t
   * @param {!Object} data
   * @return {?}
   */
  h$jscomp$18.Ib = function(name, c, t, data) {
    D$jscomp$3("Query.on", 2, 4, arguments.length);
    lg$jscomp$0("Query.on", name, false);
    F$jscomp$2("Query.on", 2, c, false);
    var p = ej$jscomp$0("Query.on", t, data);
    if ("value" === name) {
      Ri$jscomp$0(this.k, this, new ii$jscomp$0(c, p.cancel || null, p.Qa || null));
    } else {
      var otherComps = {};
      /** @type {!Function} */
      otherComps[name] = c;
      Ri$jscomp$0(this.k, this, new ji$jscomp$0(otherComps, p.cancel, p.Qa));
    }
    return c;
  };
  /**
   * @param {string} x
   * @param {string} y
   * @param {string} opts
   * @return {undefined}
   */
  h$jscomp$18.mc = function(x, y, opts) {
    D$jscomp$3("Query.off", 0, 3, arguments.length);
    lg$jscomp$0("Query.off", x, true);
    F$jscomp$2("Query.off", 2, y, true);
    Qb$jscomp$0("Query.off", 3, opts);
    /** @type {null} */
    var fn = null;
    /** @type {null} */
    var data = null;
    if ("value" === x) {
      fn = new ii$jscomp$0(y || null, null, opts || null);
    } else {
      if (x) {
        if (y) {
          data = {};
          /** @type {string} */
          data[x] = y;
        }
        fn = new ji$jscomp$0(data, null, opts || null);
      }
    }
    data = this.k;
    fn = ".info" === K$jscomp$2(this.path) ? data.Fd.nb(this, fn) : data.M.nb(this, fn);
    bc$jscomp$0(data.fa, this.path, fn);
  };
  /**
   * @param {string} name
   * @param {!Function} c
   * @return {?}
   */
  h$jscomp$18.Pg = function(name, c) {
    /**
     * @param {!Function} a
     * @return {undefined}
     */
    function b(a) {
      if (logInDeferred) {
        /** @type {boolean} */
        logInDeferred = false;
        d.mc(name, b);
        if (c) {
          c.call(_self.Qa, a);
        }
        obj.resolve(a);
      }
    }
    D$jscomp$3("Query.once", 1, 4, arguments.length);
    lg$jscomp$0("Query.once", name, false);
    F$jscomp$2("Query.once", 2, c, true);
    var _self = ej$jscomp$0("Query.once", arguments[2], arguments[3]);
    var d = this;
    /** @type {boolean} */
    var logInDeferred = true;
    var obj = new B$jscomp$2;
    Nb$jscomp$0(obj.D);
    this.Ib(name, b, function(objBackup) {
      d.mc(name, b);
      if (_self.cancel) {
        _self.cancel.call(_self.Qa, objBackup);
      }
      obj.reject(objBackup);
    });
    return obj.D;
  };
  /**
   * @param {number} a
   * @return {?}
   */
  h$jscomp$18.Le = function(a) {
    S$jscomp$3("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");
    D$jscomp$3("Query.limit", 1, 1, arguments.length);
    if (!fa$jscomp$0(a) || Math.floor(a) !== a || 0 >= a) {
      throw Error("Query.limit: First argument must be a positive integer.");
    }
    if (this.n.la) {
      throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
    }
    var b = this.n.Le(a);
    cj$jscomp$0(b);
    return new Y$jscomp$2(this.k, this.path, b, this.pc);
  };
  /**
   * @param {number} a
   * @return {?}
   */
  h$jscomp$18.Me = function(a) {
    D$jscomp$3("Query.limitToFirst", 1, 1, arguments.length);
    if (!fa$jscomp$0(a) || Math.floor(a) !== a || 0 >= a) {
      throw Error("Query.limitToFirst: First argument must be a positive integer.");
    }
    if (this.n.la) {
      throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    }
    return new Y$jscomp$2(this.k, this.path, this.n.Me(a), this.pc);
  };
  /**
   * @param {number} a
   * @return {?}
   */
  h$jscomp$18.Ne = function(a) {
    D$jscomp$3("Query.limitToLast", 1, 1, arguments.length);
    if (!fa$jscomp$0(a) || Math.floor(a) !== a || 0 >= a) {
      throw Error("Query.limitToLast: First argument must be a positive integer.");
    }
    if (this.n.la) {
      throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    }
    return new Y$jscomp$2(this.k, this.path, this.n.Ne(a), this.pc);
  };
  /**
   * @param {string} undefined
   * @return {?}
   */
  h$jscomp$18.Qg = function(undefined) {
    D$jscomp$3("Query.orderByChild", 1, 1, arguments.length);
    if ("$key" === undefined) {
      throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
    }
    if ("$priority" === undefined) {
      throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
    }
    if ("$value" === undefined) {
      throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
    }
    ng$jscomp$0("Query.orderByChild", undefined);
    dj$jscomp$0(this, "Query.orderByChild");
    var p = new P$jscomp$3(undefined);
    if (p.e()) {
      throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
    }
    p = new ve$jscomp$2(p);
    p = Fe$jscomp$1(this.n, p);
    bj$jscomp$0(p);
    return new Y$jscomp$2(this.k, this.path, p, true);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Rg = function() {
    D$jscomp$3("Query.orderByKey", 0, 0, arguments.length);
    dj$jscomp$0(this, "Query.orderByKey");
    var n = Fe$jscomp$1(this.n, re$jscomp$2);
    bj$jscomp$0(n);
    return new Y$jscomp$2(this.k, this.path, n, true);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Sg = function() {
    D$jscomp$3("Query.orderByPriority", 0, 0, arguments.length);
    dj$jscomp$0(this, "Query.orderByPriority");
    var r = Fe$jscomp$1(this.n, R$jscomp$2);
    bj$jscomp$0(r);
    return new Y$jscomp$2(this.k, this.path, r, true);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.Tg = function() {
    D$jscomp$3("Query.orderByValue", 0, 0, arguments.length);
    dj$jscomp$0(this, "Query.orderByValue");
    var n = Fe$jscomp$1(this.n, Be$jscomp$1);
    bj$jscomp$0(n);
    return new Y$jscomp$2(this.k, this.path, n, true);
  };
  /**
   * @param {!Array} a
   * @param {string} c
   * @return {?}
   */
  h$jscomp$18.ce = function(a, c) {
    D$jscomp$3("Query.startAt", 0, 2, arguments.length);
    gg$jscomp$0("Query.startAt", a, this.path, true);
    mg$jscomp$0("Query.startAt", c);
    var nodes = this.n.ce(a, c);
    cj$jscomp$0(nodes);
    bj$jscomp$0(nodes);
    if (this.n.oa) {
      throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
    }
    if (!p$jscomp$13(a)) {
      /** @type {null} */
      c = a = null;
    }
    return new Y$jscomp$2(this.k, this.path, nodes, this.pc);
  };
  /**
   * @param {!Object} d
   * @param {string} v
   * @return {?}
   */
  h$jscomp$18.vd = function(d, v) {
    D$jscomp$3("Query.endAt", 0, 2, arguments.length);
    gg$jscomp$0("Query.endAt", d, this.path, true);
    mg$jscomp$0("Query.endAt", v);
    var expected = this.n.vd(d, v);
    cj$jscomp$0(expected);
    bj$jscomp$0(expected);
    if (this.n.ra) {
      throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
    }
    return new Y$jscomp$2(this.k, this.path, expected, this.pc);
  };
  /**
   * @param {undefined} a
   * @param {string} f
   * @return {?}
   */
  h$jscomp$18.tg = function(a, f) {
    D$jscomp$3("Query.equalTo", 1, 2, arguments.length);
    gg$jscomp$0("Query.equalTo", a, this.path, false);
    mg$jscomp$0("Query.equalTo", f);
    if (this.n.oa) {
      throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
    }
    if (this.n.ra) {
      throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
    }
    return this.ce(a, f).vd(a, f);
  };
  /**
   * @return {?}
   */
  h$jscomp$18.toString = function() {
    D$jscomp$3("Query.toString", 0, 0, arguments.length);
    var options = this.path;
    /** @type {string} */
    var current_path = "";
    var i = options.aa;
    for (; i < options.u.length; i++) {
      if ("" !== options.u[i]) {
        /** @type {string} */
        current_path = current_path + ("/" + encodeURIComponent(String(options.u[i])));
      }
    }
    return this.k.toString() + (current_path || "/");
  };
  /**
   * @return {?}
   */
  h$jscomp$18.wa = function() {
    var pageCount = xd$jscomp$0(Ge$jscomp$1(this.n));
    return "{}" === pageCount ? "default" : pageCount;
  };
  /** @type {function(): ?} */
  Y$jscomp$2.prototype.ref = Y$jscomp$2.prototype.Mb;
  /** @type {function(string, !Function, string, !Object): ?} */
  Y$jscomp$2.prototype.on = Y$jscomp$2.prototype.Ib;
  /** @type {function(string, string, string): undefined} */
  Y$jscomp$2.prototype.off = Y$jscomp$2.prototype.mc;
  /** @type {function(string, !Function): ?} */
  Y$jscomp$2.prototype.once = Y$jscomp$2.prototype.Pg;
  /** @type {function(string): ?} */
  Y$jscomp$2.prototype.limit = Y$jscomp$2.prototype.Le;
  /** @type {function(string): ?} */
  Y$jscomp$2.prototype.limitToFirst = Y$jscomp$2.prototype.Me;
  /** @type {function(string): ?} */
  Y$jscomp$2.prototype.limitToLast = Y$jscomp$2.prototype.Ne;
  /** @type {function(string): ?} */
  Y$jscomp$2.prototype.orderByChild = Y$jscomp$2.prototype.Qg;
  /** @type {function(): ?} */
  Y$jscomp$2.prototype.orderByKey = Y$jscomp$2.prototype.Rg;
  /** @type {function(): ?} */
  Y$jscomp$2.prototype.orderByPriority = Y$jscomp$2.prototype.Sg;
  /** @type {function(): ?} */
  Y$jscomp$2.prototype.orderByValue = Y$jscomp$2.prototype.Tg;
  /** @type {function(string, string): ?} */
  Y$jscomp$2.prototype.startAt = Y$jscomp$2.prototype.ce;
  /** @type {function(!Object, string): ?} */
  Y$jscomp$2.prototype.endAt = Y$jscomp$2.prototype.vd;
  /** @type {function(undefined, string): ?} */
  Y$jscomp$2.prototype.equalTo = Y$jscomp$2.prototype.tg;
  /** @type {function(): ?} */
  Y$jscomp$2.prototype.toString = Y$jscomp$2.prototype.toString;
  var Z$jscomp$2 = {};
  /** @type {function(string, (RegExp|string), (RegExp|string), (RegExp|string)): undefined} */
  Z$jscomp$2.zc = Rh$jscomp$0;
  /** @type {function(string, (RegExp|string), (RegExp|string), (RegExp|string)): undefined} */
  Z$jscomp$2.DataConnection = Z$jscomp$2.zc;
  /**
   * @param {string} p
   * @param {!Function} n
   * @return {undefined}
   */
  Rh$jscomp$0.prototype.dh = function(p, n) {
    this.Ia("q", {
      p : p
    }, n);
  };
  /** @type {function(string, !Function): undefined} */
  Z$jscomp$2.zc.prototype.simpleListen = Z$jscomp$2.zc.prototype.dh;
  /**
   * @param {number} p
   * @param {!Function} pluginName
   * @return {undefined}
   */
  Rh$jscomp$0.prototype.sg = function(p, pluginName) {
    this.Ia("echo", {
      d : p
    }, pluginName);
  };
  /** @type {function(number, !Function): undefined} */
  Z$jscomp$2.zc.prototype.echo = Z$jscomp$2.zc.prototype.sg;
  /** @type {function(): undefined} */
  Rh$jscomp$0.prototype.interrupt = Rh$jscomp$0.prototype.Cb;
  /** @type {function(string, string, (RegExp|string), !Element, !AudioNode, !AudioNode, !Function): undefined} */
  Z$jscomp$2.dg = Fh$jscomp$0;
  /** @type {function(string, string, (RegExp|string), !Element, !AudioNode, !AudioNode, !Function): undefined} */
  Z$jscomp$2.RealTimeConnection = Z$jscomp$2.dg;
  /** @type {function(string): undefined} */
  Fh$jscomp$0.prototype.sendRequest = Fh$jscomp$0.prototype.Ia;
  /** @type {function(): undefined} */
  Fh$jscomp$0.prototype.close = Fh$jscomp$0.prototype.close;
  /**
   * @param {?} $$cookieWriter
   * @return {?}
   */
  Z$jscomp$2.Cg = function($$cookieWriter) {
    /** @type {function(?, ?, !Function, ?): undefined} */
    var data = Rh$jscomp$0.prototype.put;
    /**
     * @param {?} length
     * @param {?} text
     * @param {!Function} url
     * @param {?} s
     * @return {undefined}
     */
    Rh$jscomp$0.prototype.put = function(length, text, url, s) {
      if (p$jscomp$13(s)) {
        s = $$cookieWriter();
      }
      data.call(this, length, text, url, s);
    };
    return function() {
      /** @type {function(?, ?, !Function, ?): undefined} */
      Rh$jscomp$0.prototype.put = data;
    };
  };
  /** @type {function(?): ?} */
  Z$jscomp$2.hijackHash = Z$jscomp$2.Cg;
  /** @type {function(string, string, string, ?, !Object): undefined} */
  Z$jscomp$2.cg = dd$jscomp$0;
  /** @type {function(string, string, string, ?, !Object): undefined} */
  Z$jscomp$2.ConnectionTarget = Z$jscomp$2.cg;
  /**
   * @param {?} data
   * @return {?}
   */
  Z$jscomp$2.wa = function(data) {
    return data.wa();
  };
  /** @type {function(?): ?} */
  Z$jscomp$2.queryIdentifier = Z$jscomp$2.wa;
  /**
   * @param {!Object} curVal
   * @return {?}
   */
  Z$jscomp$2.Fg = function(curVal) {
    return curVal.k.Va.ba;
  };
  /** @type {function(!Object): ?} */
  Z$jscomp$2.listens = Z$jscomp$2.Fg;
  /**
   * @param {?} a
   * @return {undefined}
   */
  Z$jscomp$2.ze = function(a) {
    a.ze();
  };
  /** @type {function(?): undefined} */
  Z$jscomp$2.forceRestClient = Z$jscomp$2.ze;
  ka$jscomp$0(X$jscomp$2, Y$jscomp$2);
  /** @type {function((Object|string), (Object|string)): undefined} */
  var fj$jscomp$0 = X$jscomp$2;
  /** @type {!Array} */
  var gj$jscomp$0 = ["Firebase"];
  var hj$jscomp$0 = n$jscomp$273;
  if (!(gj$jscomp$0[0] in hj$jscomp$0 || !hj$jscomp$0.execScript)) {
    hj$jscomp$0.execScript("var " + gj$jscomp$0[0]);
  }
  var ij$jscomp$0;
  for (; gj$jscomp$0.length && (ij$jscomp$0 = gj$jscomp$0.shift());) {
    if (!gj$jscomp$0.length && p$jscomp$13(fj$jscomp$0)) {
      /** @type {function((Object|string), (Object|string)): undefined} */
      hj$jscomp$0[ij$jscomp$0] = fj$jscomp$0;
    } else {
      hj$jscomp$0 = hj$jscomp$0[ij$jscomp$0] ? hj$jscomp$0[ij$jscomp$0] : hj$jscomp$0[ij$jscomp$0] = {};
    }
  }
  /**
   * @return {undefined}
   */
  X$jscomp$2.goOffline = function() {
    D$jscomp$3("Firebase.goOffline", 0, 0, arguments.length);
    aj$jscomp$0.yb().Cb();
  };
  /**
   * @return {undefined}
   */
  X$jscomp$2.goOnline = function() {
    D$jscomp$3("Firebase.goOnline", 0, 0, arguments.length);
    aj$jscomp$0.yb().vc();
  };
  /** @type {function(number, ?): undefined} */
  X$jscomp$2.enableLogging = od$jscomp$0;
  X$jscomp$2.ServerValue = {
    TIMESTAMP : {
      ".sv" : "timestamp"
    }
  };
  /** @type {string} */
  X$jscomp$2.SDK_VERSION = Eb$jscomp$0;
  X$jscomp$2.INTERNAL = U$jscomp$2;
  /** @type {function(): undefined} */
  X$jscomp$2.Context = aj$jscomp$0;
  X$jscomp$2.TEST_ACCESS = Z$jscomp$2;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.name = function() {
    S$jscomp$3("Firebase.name() being deprecated. Please use Firebase.key() instead.");
    D$jscomp$3("Firebase.name", 0, 0, arguments.length);
    return this.key();
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.name = X$jscomp$2.prototype.name;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.key = function() {
    D$jscomp$3("Firebase.key", 0, 0, arguments.length);
    return this.path.e() ? null : me$jscomp$2(this.path);
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.key = X$jscomp$2.prototype.key;
  /**
   * @param {string} x
   * @return {?}
   */
  X$jscomp$2.prototype.o = function(x) {
    D$jscomp$3("Firebase.child", 1, 1, arguments.length);
    if (fa$jscomp$0(x)) {
      /** @type {string} */
      x = String(x);
    } else {
      if (!(x instanceof P$jscomp$3)) {
        if (null === K$jscomp$2(this.path)) {
          /** @type {string} */
          var b = x;
          if (b) {
            b = b.replace(/^\/*\.info(\/|$)/, "/");
          }
          ng$jscomp$0("Firebase.child", b);
        } else {
          ng$jscomp$0("Firebase.child", x);
        }
      }
    }
    return new X$jscomp$2(this.k, this.path.o(x));
  };
  /** @type {function(string): ?} */
  X$jscomp$2.prototype.child = X$jscomp$2.prototype.o;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.parent = function() {
    D$jscomp$3("Firebase.parent", 0, 0, arguments.length);
    var attr = this.path.parent();
    return null === attr ? null : new X$jscomp$2(this.k, attr);
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.parent = X$jscomp$2.prototype.parent;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.root = function() {
    D$jscomp$3("Firebase.ref", 0, 0, arguments.length);
    var child = this;
    for (; null !== child.parent();) {
      child = child.parent();
    }
    return child;
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.root = X$jscomp$2.prototype.root;
  /**
   * @param {!Object} b
   * @param {string} key
   * @return {?}
   */
  X$jscomp$2.prototype.set = function(b, key) {
    D$jscomp$3("Firebase.set", 1, 2, arguments.length);
    og$jscomp$0("Firebase.set", this.path);
    gg$jscomp$0("Firebase.set", b, this.path, false);
    F$jscomp$2("Firebase.set", 2, key, true);
    var obj = new B$jscomp$2;
    this.k.Ob(this.path, b, null, C$jscomp$3(obj, key));
    return obj.D;
  };
  /** @type {function(!Object, string): ?} */
  X$jscomp$2.prototype.set = X$jscomp$2.prototype.set;
  /**
   * @param {!Array} options
   * @param {?} key
   * @return {?}
   */
  X$jscomp$2.prototype.update = function(options, key) {
    D$jscomp$3("Firebase.update", 1, 2, arguments.length);
    og$jscomp$0("Firebase.update", this.path);
    if (da$jscomp$0(options)) {
      var result = {};
      /** @type {number} */
      var i = 0;
      for (; i < options.length; ++i) {
        result["" + i] = options[i];
      }
      options = result;
      S$jscomp$3("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    jg$jscomp$0("Firebase.update", options, this.path);
    F$jscomp$2("Firebase.update", 2, key, true);
    result = new B$jscomp$2;
    this.k.update(this.path, options, C$jscomp$3(result, key));
    return result.D;
  };
  /** @type {function(!Array, ?): ?} */
  X$jscomp$2.prototype.update = X$jscomp$2.prototype.update;
  /**
   * @param {!Object} c
   * @param {!Object} f
   * @param {!Object} d
   * @return {?}
   */
  X$jscomp$2.prototype.Ob = function(c, f, d) {
    D$jscomp$3("Firebase.setWithPriority", 2, 3, arguments.length);
    og$jscomp$0("Firebase.setWithPriority", this.path);
    gg$jscomp$0("Firebase.setWithPriority", c, this.path, false);
    kg$jscomp$0("Firebase.setWithPriority", 2, f);
    F$jscomp$2("Firebase.setWithPriority", 3, d, true);
    if (".length" === this.key() || ".keys" === this.key()) {
      throw "Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
    }
    var obj = new B$jscomp$2;
    this.k.Ob(this.path, c, f, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  X$jscomp$2.prototype.setWithPriority = X$jscomp$2.prototype.Ob;
  /**
   * @param {!Object} type
   * @return {?}
   */
  X$jscomp$2.prototype.remove = function(type) {
    D$jscomp$3("Firebase.remove", 0, 1, arguments.length);
    og$jscomp$0("Firebase.remove", this.path);
    F$jscomp$2("Firebase.remove", 1, type, true);
    return this.set(null, type);
  };
  /** @type {function(!Object): ?} */
  X$jscomp$2.prototype.remove = X$jscomp$2.prototype.remove;
  /**
   * @param {undefined} type
   * @param {undefined} f
   * @param {boolean} t
   * @return {?}
   */
  X$jscomp$2.prototype.transaction = function(type, f, t) {
    D$jscomp$3("Firebase.transaction", 1, 3, arguments.length);
    og$jscomp$0("Firebase.transaction", this.path);
    F$jscomp$2("Firebase.transaction", 1, type, false);
    F$jscomp$2("Firebase.transaction", 2, f, true);
    if (p$jscomp$13(t) && "boolean" != typeof t) {
      throw Error(E$jscomp$3("Firebase.transaction", 3, true) + "must be a boolean.");
    }
    if (".length" === this.key() || ".keys" === this.key()) {
      throw "Firebase.transaction failed: " + this.key() + " is a read-only object.";
    }
    if ("undefined" === typeof t) {
      /** @type {boolean} */
      t = true;
    }
    var self = new B$jscomp$2;
    if (r$jscomp$201(f)) {
      Nb$jscomp$0(self.D);
    }
    Si$jscomp$0(this.k, this.path, type, function(a, url, text) {
      if (a) {
        self.reject(a);
      } else {
        self.resolve(new ei$jscomp$0(url, text));
      }
      if (r$jscomp$201(f)) {
        f(a, url, text);
      }
    }, t);
    return self.D;
  };
  /** @type {function(undefined, undefined, boolean): ?} */
  X$jscomp$2.prototype.transaction = X$jscomp$2.prototype.transaction;
  /**
   * @param {!Object} id
   * @param {undefined} d
   * @return {?}
   */
  X$jscomp$2.prototype.$g = function(id, d) {
    D$jscomp$3("Firebase.setPriority", 1, 2, arguments.length);
    og$jscomp$0("Firebase.setPriority", this.path);
    kg$jscomp$0("Firebase.setPriority", 1, id);
    F$jscomp$2("Firebase.setPriority", 2, d, true);
    var obj = new B$jscomp$2;
    this.k.Ob(this.path.o(".priority"), id, null, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.setPriority = X$jscomp$2.prototype.$g;
  /**
   * @param {string} obj
   * @param {string} type
   * @return {?}
   */
  X$jscomp$2.prototype.push = function(obj, type) {
    D$jscomp$3("Firebase.push", 0, 2, arguments.length);
    og$jscomp$0("Firebase.push", this.path);
    gg$jscomp$0("Firebase.push", obj, this.path, true);
    F$jscomp$2("Firebase.push", 2, type, true);
    var res = Li$jscomp$0(this.k);
    var d = hf$jscomp$0(res);
    res = this.o(d);
    if (null != obj) {
      var table = this;
      var n = res.set(obj, type).then(function() {
        return table.o(d);
      });
      res.then = u$jscomp$22(n.then, n);
      res["catch"] = u$jscomp$22(n.then, n, void 0);
      if (r$jscomp$201(type)) {
        Nb$jscomp$0(n);
      }
    }
    return res;
  };
  /** @type {function(string, string): ?} */
  X$jscomp$2.prototype.push = X$jscomp$2.prototype.push;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.lb = function() {
    og$jscomp$0("Firebase.onDisconnect", this.path);
    return new V$jscomp$2(this.k, this.path);
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.onDisconnect = X$jscomp$2.prototype.lb;
  /**
   * @param {string} type
   * @param {?} a
   * @param {!Function} x
   * @return {?}
   */
  X$jscomp$2.prototype.O = function(type, a, x) {
    S$jscomp$3("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");
    D$jscomp$3("Firebase.auth", 1, 3, arguments.length);
    pg$jscomp$0("Firebase.auth", type);
    F$jscomp$2("Firebase.auth", 2, a, true);
    F$jscomp$2("Firebase.auth", 3, a, true);
    var obj = new B$jscomp$2;
    dh$jscomp$0(this.k.O, type, {}, {
      remember : "none"
    }, C$jscomp$3(obj, a), x);
    return obj.D;
  };
  /** @type {function(string, ?, !Function): ?} */
  X$jscomp$2.prototype.auth = X$jscomp$2.prototype.O;
  /**
   * @param {undefined} d
   * @return {?}
   */
  X$jscomp$2.prototype.je = function(d) {
    D$jscomp$3("Firebase.unauth", 0, 1, arguments.length);
    F$jscomp$2("Firebase.unauth", 1, d, true);
    var obj = new B$jscomp$2;
    eh$jscomp$0(this.k.O, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(undefined): ?} */
  X$jscomp$2.prototype.unauth = X$jscomp$2.prototype.je;
  /**
   * @return {?}
   */
  X$jscomp$2.prototype.Be = function() {
    D$jscomp$3("Firebase.getAuth", 0, 0, arguments.length);
    return this.k.O.Be();
  };
  /** @type {function(): ?} */
  X$jscomp$2.prototype.getAuth = X$jscomp$2.prototype.Be;
  /**
   * @param {!Object} d
   * @param {undefined} now
   * @return {undefined}
   */
  X$jscomp$2.prototype.Jg = function(d, now) {
    D$jscomp$3("Firebase.onAuth", 1, 2, arguments.length);
    F$jscomp$2("Firebase.onAuth", 1, d, false);
    Qb$jscomp$0("Firebase.onAuth", 2, now);
    this.k.O.Ib("auth_status", d, now);
  };
  /** @type {function(!Object, undefined): undefined} */
  X$jscomp$2.prototype.onAuth = X$jscomp$2.prototype.Jg;
  /**
   * @param {undefined} c
   * @param {undefined} params
   * @return {undefined}
   */
  X$jscomp$2.prototype.Ig = function(c, params) {
    D$jscomp$3("Firebase.offAuth", 1, 2, arguments.length);
    F$jscomp$2("Firebase.offAuth", 1, c, false);
    Qb$jscomp$0("Firebase.offAuth", 2, params);
    this.k.O.mc("auth_status", c, params);
  };
  /** @type {function(undefined, undefined): undefined} */
  X$jscomp$2.prototype.offAuth = X$jscomp$2.prototype.Ig;
  /**
   * @param {!Object} fn
   * @param {!Object} c
   * @param {!Object} d
   * @return {?}
   */
  X$jscomp$2.prototype.hg = function(fn, c, d) {
    D$jscomp$3("Firebase.authWithCustomToken", 1, 3, arguments.length);
    if (2 === arguments.length && Hb$jscomp$0(c)) {
      /** @type {!Object} */
      d = c;
      c = void 0;
    }
    pg$jscomp$0("Firebase.authWithCustomToken", fn);
    F$jscomp$2("Firebase.authWithCustomToken", 2, c, true);
    sg$jscomp$0("Firebase.authWithCustomToken", 3, d, true);
    var obj = new B$jscomp$2;
    dh$jscomp$0(this.k.O, fn, {}, d || {}, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  X$jscomp$2.prototype.authWithCustomToken = X$jscomp$2.prototype.hg;
  /**
   * @param {string} k
   * @param {!Object} c
   * @param {!Object} h
   * @return {?}
   */
  X$jscomp$2.prototype.ig = function(k, c, h) {
    D$jscomp$3("Firebase.authWithOAuthPopup", 1, 3, arguments.length);
    if (2 === arguments.length && Hb$jscomp$0(c)) {
      /** @type {!Object} */
      h = c;
      c = void 0;
    }
    rg$jscomp$0("Firebase.authWithOAuthPopup", k);
    F$jscomp$2("Firebase.authWithOAuthPopup", 2, c, true);
    sg$jscomp$0("Firebase.authWithOAuthPopup", 3, h, true);
    var obj = new B$jscomp$2;
    ih$jscomp$0(this.k.O, k, h, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(string, !Object, !Object): ?} */
  X$jscomp$2.prototype.authWithOAuthPopup = X$jscomp$2.prototype.ig;
  /**
   * @param {string} name
   * @param {!Object} d
   * @param {!Object} target
   * @return {?}
   */
  X$jscomp$2.prototype.jg = function(name, d, target) {
    D$jscomp$3("Firebase.authWithOAuthRedirect", 1, 3, arguments.length);
    if (2 === arguments.length && Hb$jscomp$0(d)) {
      /** @type {!Object} */
      target = d;
      d = void 0;
    }
    rg$jscomp$0("Firebase.authWithOAuthRedirect", name);
    F$jscomp$2("Firebase.authWithOAuthRedirect", 2, d, false);
    sg$jscomp$0("Firebase.authWithOAuthRedirect", 3, target, true);
    var obj = new B$jscomp$2;
    var b = this.k.O;
    /** @type {!Object} */
    var a = target;
    var text = C$jscomp$3(obj, d);
    gh$jscomp$0(b);
    /** @type {!Array} */
    var c = [Qg$jscomp$0];
    a = Ag$jscomp$0(a);
    if ("anonymous" === name || "firebase" === name) {
      T$jscomp$3(text, Sg$jscomp$0("TRANSPORT_UNAVAILABLE"));
    } else {
      cd$jscomp$0.set("redirect_client_options", a.qd);
      hh$jscomp$0(b, c, "/auth/" + name, a, text);
    }
    return obj.D;
  };
  /** @type {function(string, !Object, !Object): ?} */
  X$jscomp$2.prototype.authWithOAuthRedirect = X$jscomp$2.prototype.jg;
  /**
   * @param {string} input
   * @param {string} options
   * @param {!Object} d
   * @param {!Object} key
   * @return {?}
   */
  X$jscomp$2.prototype.kg = function(input, options, d, key) {
    D$jscomp$3("Firebase.authWithOAuthToken", 2, 4, arguments.length);
    if (3 === arguments.length && Hb$jscomp$0(d)) {
      /** @type {!Object} */
      key = d;
      d = void 0;
    }
    rg$jscomp$0("Firebase.authWithOAuthToken", input);
    F$jscomp$2("Firebase.authWithOAuthToken", 3, d, true);
    sg$jscomp$0("Firebase.authWithOAuthToken", 4, key, true);
    var obj = new B$jscomp$2;
    if (q$jscomp$3(options)) {
      qg$jscomp$0("Firebase.authWithOAuthToken", 2, options);
      fh$jscomp$0(this.k.O, input + "/token", {
        access_token : options
      }, key, C$jscomp$3(obj, d));
    } else {
      sg$jscomp$0("Firebase.authWithOAuthToken", 2, options, false);
      fh$jscomp$0(this.k.O, input + "/token", options, key, C$jscomp$3(obj, d));
    }
    return obj.D;
  };
  /** @type {function(string, string, !Object, !Object): ?} */
  X$jscomp$2.prototype.authWithOAuthToken = X$jscomp$2.prototype.kg;
  /**
   * @param {!Object} c
   * @param {!Object} d
   * @return {?}
   */
  X$jscomp$2.prototype.gg = function(c, d) {
    D$jscomp$3("Firebase.authAnonymously", 0, 2, arguments.length);
    if (1 === arguments.length && Hb$jscomp$0(c)) {
      /** @type {!Object} */
      d = c;
      c = void 0;
    }
    F$jscomp$2("Firebase.authAnonymously", 1, c, true);
    sg$jscomp$0("Firebase.authAnonymously", 2, d, true);
    var obj = new B$jscomp$2;
    fh$jscomp$0(this.k.O, "anonymous", {}, d, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(!Object, !Object): ?} */
  X$jscomp$2.prototype.authAnonymously = X$jscomp$2.prototype.gg;
  /**
   * @param {undefined} x
   * @param {!Object} c
   * @param {!Object} data
   * @return {?}
   */
  X$jscomp$2.prototype.lg = function(x, c, data) {
    D$jscomp$3("Firebase.authWithPassword", 1, 3, arguments.length);
    if (2 === arguments.length && Hb$jscomp$0(c)) {
      /** @type {!Object} */
      data = c;
      c = void 0;
    }
    sg$jscomp$0("Firebase.authWithPassword", 1, x, false);
    tg$jscomp$0("Firebase.authWithPassword", x, "email");
    tg$jscomp$0("Firebase.authWithPassword", x, "password");
    F$jscomp$2("Firebase.authWithPassword", 2, c, true);
    sg$jscomp$0("Firebase.authWithPassword", 3, data, true);
    var obj = new B$jscomp$2;
    fh$jscomp$0(this.k.O, "password", x, data, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(undefined, !Object, !Object): ?} */
  X$jscomp$2.prototype.authWithPassword = X$jscomp$2.prototype.lg;
  /**
   * @param {!Object} m
   * @param {undefined} d
   * @return {?}
   */
  X$jscomp$2.prototype.ve = function(m, d) {
    D$jscomp$3("Firebase.createUser", 1, 2, arguments.length);
    sg$jscomp$0("Firebase.createUser", 1, m, false);
    tg$jscomp$0("Firebase.createUser", m, "email");
    tg$jscomp$0("Firebase.createUser", m, "password");
    F$jscomp$2("Firebase.createUser", 2, d, true);
    var obj = new B$jscomp$2;
    this.k.O.ve(m, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.createUser = X$jscomp$2.prototype.ve;
  /**
   * @param {!Object} m
   * @param {undefined} d
   * @return {?}
   */
  X$jscomp$2.prototype.Xe = function(m, d) {
    D$jscomp$3("Firebase.removeUser", 1, 2, arguments.length);
    sg$jscomp$0("Firebase.removeUser", 1, m, false);
    tg$jscomp$0("Firebase.removeUser", m, "email");
    tg$jscomp$0("Firebase.removeUser", m, "password");
    F$jscomp$2("Firebase.removeUser", 2, d, true);
    var obj = new B$jscomp$2;
    this.k.O.Xe(m, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.removeUser = X$jscomp$2.prototype.Xe;
  /**
   * @param {!Object} data
   * @param {undefined} c
   * @return {?}
   */
  X$jscomp$2.prototype.se = function(data, c) {
    D$jscomp$3("Firebase.changePassword", 1, 2, arguments.length);
    sg$jscomp$0("Firebase.changePassword", 1, data, false);
    tg$jscomp$0("Firebase.changePassword", data, "email");
    tg$jscomp$0("Firebase.changePassword", data, "oldPassword");
    tg$jscomp$0("Firebase.changePassword", data, "newPassword");
    F$jscomp$2("Firebase.changePassword", 2, c, true);
    var obj = new B$jscomp$2;
    this.k.O.se(data, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.changePassword = X$jscomp$2.prototype.se;
  /**
   * @param {!Object} p
   * @param {undefined} c
   * @return {?}
   */
  X$jscomp$2.prototype.re = function(p, c) {
    D$jscomp$3("Firebase.changeEmail", 1, 2, arguments.length);
    sg$jscomp$0("Firebase.changeEmail", 1, p, false);
    tg$jscomp$0("Firebase.changeEmail", p, "oldEmail");
    tg$jscomp$0("Firebase.changeEmail", p, "newEmail");
    tg$jscomp$0("Firebase.changeEmail", p, "password");
    F$jscomp$2("Firebase.changeEmail", 2, c, true);
    var obj = new B$jscomp$2;
    this.k.O.re(p, C$jscomp$3(obj, c));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.changeEmail = X$jscomp$2.prototype.re;
  /**
   * @param {!Object} m
   * @param {undefined} d
   * @return {?}
   */
  X$jscomp$2.prototype.Ze = function(m, d) {
    D$jscomp$3("Firebase.resetPassword", 1, 2, arguments.length);
    sg$jscomp$0("Firebase.resetPassword", 1, m, false);
    tg$jscomp$0("Firebase.resetPassword", m, "email");
    F$jscomp$2("Firebase.resetPassword", 2, d, true);
    var obj = new B$jscomp$2;
    this.k.O.Ze(m, C$jscomp$3(obj, d));
    return obj.D;
  };
  /** @type {function(!Object, undefined): ?} */
  X$jscomp$2.prototype.resetPassword = X$jscomp$2.prototype.Ze;
})();
$.each($("span[id]"), function(canCreateDiscussions, mediaFile) {
  var BUE = $(mediaFile).parent().find(".postviews");
  var userRef = new Firebase("https://aazs-17bc0.firebaseio.com/pages/id/" + $(mediaFile).attr("id"));
  userRef.once("value", function(value) {
    value = value.val();
    /** @type {boolean} */
    var d = false;
    if (null == value) {
      value = {
        value : 0
      };
      /** @type {string} */
      value.url = window.location.href;
      value.id = $(mediaFile).attr("id");
      /** @type {boolean} */
      d = true;
    }
    BUE.text(value.value);
    value.value++;
    if ("/" != window.location.pathname) {
      if (d) {
        userRef.set(value);
      } else {
        userRef.child("value").set(value.value);
      }
    }
  });
});
eval(function(p, a, c, k, e, r) {
  /**
   * @param {number} c
   * @return {?}
   */
  e = function(c) {
    return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };
  if (!"".replace(/^/, String)) {
    for (; c--;) {
      r[e(c)] = k[c] || e(c);
    }
    /** @type {!Array} */
    k = [function(cmd) {
      return r[cmd];
    }];
    /**
     * @return {?}
     */
    e = function() {
      return "\\w+";
    };
    /** @type {number} */
    c = 1;
  }
  for (; c--;) {
    if (k[c]) {
      /** @type {string} */
      p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    }
  }
  return p;
}('\'I R\';f.5=b(i,3,2){h(1<v.y&&"[C H]"!==p(3)){h(2=f.J({},2),(k===3||w 0===3)&&(2.4=-1),"z"==A 2.4){o 7=2.4;o 6=2.4=u K;6.L(6.P()+7)}j 3=p(3),d.5=[e(i),"=",2.q?3:e(3),2.4?"; 4="+2.4.x():"",2.c?"; c="+2.c:"",2.g?"; g="+2.g:"",2.m?"; m":""].B("")}2=3||{};6=2.q?b(s){j s}:D;j(7=(u E("(?:^|; )"+e(i)+"=([^;]*)")).F(d.5))?6(7[1]):k};f(d).G(b($){h("n"!=$.5("8-9-a")){$(".r-9-8-a").M(N).O("t");$(".Q-l-S, .l").T(b(){$(".r-9-8-a").U().V("t")})}$.5("8-9-a","n",{c:"/",4:1})});', 58, 58, "||options|value|expires|cookie|now|days|popup|email|box|function|path|document|encodeURIComponent|jQuery|domain|if|name|return|null|button|secure|yes|var|String|raw|outer||normal|new|arguments|void|toUTCString|length|number|typeof|join|object|decodeURIComponent|RegExp|exec|ready|Object|use|extend|Date|setDate|delay|15E3|fadeIn|getDate|exit|strict|subbox|click|stop|fadeOut".split("|"), 
0, {}));
