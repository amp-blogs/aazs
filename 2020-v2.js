function haveCookie() {
    return _$_[0] in document
}

function setCookie(_, t, e) {
    if (!haveCookie()) return !1;
    var a = new Date;
    return a.setDate(a.getDate() + e), e = escape(t) + ("0" == e ? _$_[1] : _$_[2] + a.toUTCString()) + _$_[3], document.cookie = _ + _$_[4] + e, getCookie(_) === t
}

function testcookie() {
    return !!setCookie(_$_[5], _$_[6])
}

function getCookie(_) {
    if (!havecookie()) return _$_[1];
    var t, e, a, s = document.cookie.split(_$_[7]);
    for (t = 0; t < s.length; t++)
        if (e = s[t].substr(0, s[t].indexOf(_$_[4])), a = s[t].substr(s[t].indexOf(_$_[4]) + 1), (e = e.replace(/^\s+|\s+$/g, _$_[1])) == _) return unescape(a);
    return _$_[1]
}

function delCookie(_) {
    setCookie(_, _$_[1], -1)
}

function checkLocal() {
    return _$_[8] != typeof localStorage
}

function setLocal(_, t) {
    return !!checkLocal() && (localStorage.setItem(_, t), !0)
}

function getLocal(_) {
    return checkLocal() && (_ = localStorage.getItem(_)) ? _ : _$_[1]
}

function delLocal(_) {
    localStorage.removeItem(_)
}

function setCookieLocal(_, t) {
    return checkLocal() ? setLocal(_, t) : !!testCookie() && setCookie(_, t)
}

function getCookieLocal(_) {
    return checkLocal() ? getLocal(_) : testCookie() ? getCookie(_) : _$_[1]
}

function delCookieLocal(_) {
    return checkLocal() ? delLocal(_) : testCookie() ? delCookie(_) : _$_[1]
}

async function cmnu(_, i) {
    var r = _$_[21] + i + _$_[22];
    $(_$_[35], _).each(function () {
        var _ = $(this).text(),
            t = _.substr(0, 1),
            e = _.substr(1),
            a = $(this).find(_$_[23]).length ? _$_[24] + $(this).find(_$_[23]).attr(_$_[25]) + _$_[26] : _$_[1],
            s = $(this).find(_$_[28]).attr(_$_[27]);
        r = _$_[29] == t || _$_[30] == t ? r + (_$_[31] + s + _$_[22] + a + e + _$_[32]) : r + (_$_[33] + s + _$_[22] + a + _ + _$_[34] + i + _$_[22])
    }), r += _$_[36], $(_).html(r), $(_$_[37], _).each(function () {
        var _ = $(this);
        "0" == _.html().replace(rgx[0], _$_[1]).length && _.remove()
    }), $(_$_[35], _).each(function () {
        var _ = $(this);
        "0" == _.html().replace(rgx[0], _$_[1]).length && _.remove()
    })
}

async function lpost(_) {
    var t, e = _.find(_$_[38]),
        a = e.html(),
        s = [];
    t = [], s = _$_[39];
    var i = _.find(_$_[40]),
        r = _.find(_$_[41]),
        n = _.find(_$_[42]);
    t = _.find(_$_[43]).width();
    var o = $(_$_[45]).attr(_$_[44]);
    _ = (l = _.find(_$_[46])).text();
    var l = l.find(_$_[28]).attr(_$_[27]),
        d = 300 < t ? _$_[47] : _$_[48];
    if (r.attr(_$_[49], function (_, t) {
            return t.replace(_$_[51], _$_[52]).replace(_$_[50], d)
        }), i.length && (rgx[6].test(a) || rgx[8].test(a) ? (s = rgx[6].exec(rgx[6]), t = rgx[8].exec(a), s = null !== s ? s[5] : t[3], t = _$_[53] + s + _$_[52], s = _$_[54]) : t = rgx[5].test(a) ? (t = rgx[5].exec(a))[4].replace(rgx[7], _$_[55] + d + _$_[55]) : _$_[56], i.attr(_$_[49], _$_[56] === t ? _$_[57] : t)), -1 != r.attr(_$_[49]).indexOf(_$_[58]) && (r.append(_$_[59]), r.parent(_$_[61]).addClass(_$_[60])), rgx[9].test(a) ? s = _$_[54] : rgx[10].test(a) ? s = _$_[62] : rgx[11].test(a) ? s = _$_[63] : rgx[12].test(a) && (s = rgx[12].exec(a).index <= 5 ? _$_[64] : _$_[39]), n.prepend(_$_[65] + s + _$_[26]), rgx[29].test(a) && !hrev) {
        for (i = [], n = 0, s = (i = a.match(rgx[29])).length, t = 0; t < s; t++) n += parseInt(i[t].replace(rgx[29], _$_[66]).replace(/"/g, _$_[1]).replace(/'/g, _$_[1]));
        i = n / s, r.append(_$_[67] + rgx[1] + _$_[68] + i.toFixed(1) + _$_[69]), r.find(_$_[72]).css(_$_[70], 10 * i.toFixed(1) + _$_[71])
    }(a = a.replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > sumLength && (a = a.substring(0, sumLength) + _$_[74] + l + _$_[75] + o + _$_[76] + _ + _$_[22] + o + _$_[77]), e.html(a), r.attr(_$_[78], _$_[79] + (-1 != r.attr(_$_[49]).indexOf(_$_[80]) ? _$_[81] + r.attr(_$_[49]) + _$_[82] : _$_[57]) + _$_[83])
}

async function ajaxsrc(a) {
    ! function (_) {
        var c = {
                blogURL: _$_[1],
                srcBlank: _$_[56],
                findText: _$_[84],
                NotfindText: _$_[85],
                Showthumb: !0,
                LoadingText: _$_[86],
                viewMoreText: vmtx,
                scrthumbSize: 50,
                MaxPost: 10,
                summaryLength: 100
            },
            t = (c = _.extend({}, c, a), _(_$_[87])),
            e = t.find(_$_[88]);
        t.append(_$_[89] + rgx[1] + _$_[90]);
        var h = _(_$_[91]);
        t.on(_$_[92], function () {
            var d = e.val();
            return h.show().html(_$_[93] + c.LoadingText + _$_[94]), _.get((_$_[1] === c.blogURL ? window.location.protocol + _$_[95] + window.location.host : c.blogURL) + _$_[96] + d + _$_[97] + c.MaxPost, function (_) {
                var t, e, a, s, $, i, r = _.feed.entry;
                if (void 0 !== r) {
                    i = _$_[98] + c.findText + _$_[99] + d + _$_[100], i += _$_[101] + rgx[1] + _$_[102];
                    for (var n = 0, o = r.length; n < o; n++) {
                        var l = new RegExp(d, _$_[103]);
                        for (a = r[n].title.$t.replace(l, _$_[104] + d + _$_[105]), t = r[n].link.length, e = 0; e < t; e++) _$_[106] == r[n].link[e].rel && (s = r[n].link[e].href);
                        for (e = 0; e < t; e++) _$_[107] == r[n].link[e].rel && ($ = r[n].link[e].type), $ = _$_[39];
                        t = _$_[108] in r[n] ? r[n].content.$t : _$_[109] in r[n] ? r[n].summary.$t : _$_[1], _$_[110] in r[n] ? (e = r[n].media$thumbnail.url.replace(rgx[7], _$_[111] + c.scrthumbSize + _$_[112]), -1 != r[n].media$thumbnail.url.indexOf(_$_[58]) && (e = r[n].media$thumbnail.url.replace(_$_[113], _$_[114]), $ = _$_[54])) : rgx[6].test(t) || rgx[8].test(t) ? ($ = rgx[6].exec(rgx[6]), e = rgx[8].exec(t), e = _$_[53] + (null !== $ ? $[5] : e[3]) + _$_[52], $ = _$_[54]) : e = rgx[5].test(t) ? (e = rgx[5].exec(t))[4].replace(rgx[7], _$_[111] + c.scrthumbSize + _$_[112]) : c.srcBlank, rgx[9].test(t) ? $ = _$_[54] : rgx[10].test(t) ? $ = _$_[62] : rgx[11].test(t) ? $ = _$_[63] : rgx[12].test(t) && ($ = rgx[12].exec(t).index <= 5 ? _$_[64] : _$_[39]), (t = t.replace(rgx[15], _$_[1]).replace(/"/g, _$_[73]).replace(rgx[16], _$_[1])).length > c.summaryLength && (t = t.substring(0, c.summaryLength) + _$_[115]), t = t.replace(l, _$_[104] + d + _$_[105]), i += _$_[116] + rgx[30] + _$_[117] + (_$_[56] === e ? _$_[57] : _$_[118] + e + _$_[119]) + _$_[120] + s + _$_[121] + $ + _$_[122] + rgx[32] + _$_[123] + s + _$_[22] + a + _$_[77] + (0 < c.summaryLength ? _$_[124] + t + _$_[125] : _$_[1]) + _$_[94]
                    }
                    i += _$_[94] + (_.feed.openSearch$totalResults.$t > _.feed.openSearch$itemsPerPage.$t ? _$_[126] + d + _$_[22] + c.viewMoreText + _$_[99] + d + _$_[127] : _$_[1]), h.html(i)
                } else h.html(_$_[128] + c.NotfindText + _$_[129])
            }, _$_[130]), !1
        }), t.on(_$_[9], _$_[131], function () {
            return h.fadeOut(), !1
        })
    }(jQuery)
}

async function vmode(_) {
    function t() {
        return s.removeClass(_$_[132]).addClass(_$_[139]), $.removeClass(_$_[18]), i.addClass(_$_[18]), setCookieLocal(a.clist, null, 1e4), delCookieLocal(a.cgrid), !1
    }
    var e, a, s, $, i;
    e = jQuery, a = {
        viewdefault: _$_[132],
        clist: _$_[133],
        cgrid: _$_[134]
    }, a = e.extend({}, a, _), s = e(_$_[136]).find(_$_[135]), $ = e(_$_[137]), i = e(_$_[138]), e = function () {
        return s.addClass(_$_[132]).removeClass(_$_[139]), $.addClass(_$_[18]), i.removeClass(_$_[18]), setCookieLocal(a.cgrid, null, 1e4), delCookieLocal(a.clist), !1
    }, getCookieLocal(a.clist) && _$_[132] != a.viewdefault ? (t(), delCookieLocal(a.clist)) : getCookieLocal(a.cgrid) && _$_[132] != a.viewdefault ? (e(), delCookieLocal(a.cgrid)) : getCookieLocal(a.clist) ? (t(), delCookieLocal(a.clist)) : getCookieLocal(a.cgrid) ? (e(), delCookieLocal(a.cgrid)) : _$_[132] != a.viewdefault ? (t(), delCookieLocal(a.clist)) : (e(), delCookieLocal(a.cgrid)), $.click(e), i.click(t)
}

async function cdate() {
    $(_$_[146]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = mName;
        if (_$_[1] != _) var e = (a = _.substring(0, 10)).substring(0, 4),
            a = (_ = a.substring(5, 7), a.substring(8, 10)),
            s = t[parseInt(_, 10) - 1];
        $(this).parents(_$_[145]).find(_$_[144]).html(_$_[140] + a + _$_[141] + s + _$_[142] + e + _$_[143])
    })
}

async function lMore(_) {
    var t, e;
    t = jQuery, e = {
        olderPostsLink: _$_[1],
        loadMoreDiv: null,
        thumbnailSize: 400,
        summaryLength: 100,
        postContainerSelector: _$_[154],
        MoreText: lmtx,
        viewdefault: _$_[132],
        clist: _$_[133],
        cgrid: _$_[155],
        loading: !1
    }, e = t.extend({}, e, _), t(window), t(document)
}

async function pageNavi(_) {
    ! function (s) {
        function t(_) {
            (function (_) {
                var t = "";
                for (number = parseInt(l.numshowpage / 2), number == l.numshowpage - number && (l.numshowpage = 2 * number + 1), start = n - number, start < 1 && (start = 1), maxlen = parseInt(_ / l.postperpage) + 1, maxlen - 1 == _ / l.postperpage && --maxlen, akhir = start + l.numshowpage - 1, akhir > maxlen && (akhir = maxlen), _ = parseInt(n) - 1, 1 < n && (t = 2 == n ? "page" == r ? t + '<span class="showpage"><a href="">' + l.previous + "</a></span>" : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" + l.postperpage + '">' + l.previous + "</a></span>" : "page" == r ? t + '<span class="showpageNum"><a class="xpagex" href="#" alt="' + _ + '">' + l.previous + "</a></span>" : t + '<span class="showpageNum"><a class="xlabelx" href="#" alt="' + _ + '">' + l.previous + "</a></span>"), 1 < start && (t = "page" == r ? t + '<span class="showpageNum"><a href="">1</a></span>' : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" + l.postperpage + '">1</a></span>'), 2 < start && (t += '<span class="dotxpage"> ...  </span>'), _ = start; _ <= akhir; _++) t = n == _ ? t + '<span class="showpagePoint">' + _ + "</span>" : 1 == _ ? "page" == r ? t + '<span class="showpageNum"><a href="">1</a></span>' : t + '<span class="showpageNum"><a href="/search/label/' + o + "?&max-results=" + l.postperpage + '">1</a></span>' : "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' + _ + '">' + _ + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + _ + '">' + _ + "</a></span>";
                akhir < maxlen - 1 && (t += '<span class="dotxpage"> ... </span>'), akhir < maxlen && (t = "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' + maxlen + '">' + maxlen + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + maxlen + '">' + maxlen + "</a></span>"), _ = parseInt(n) + 1, n < maxlen && (t = "page" == r ? t + '<span class="showpageNum"><a href="#" class="xpagex" alt="' + _ + '">' + l.next + "</a></span>" : t + '<span class="showpageNum"><a href="#" class="xlabelx" alt="' + _ + '">' + l.next + "</a></span>"), _ = document.getElementsByName("pageArea");
                for (var e = document.getElementById("blog-pagerindex"), a = 0; a < _.length; a++) _[a].innerHTML = t;
                _ && 0 < _.length && (t = ""), e && (e.innerHTML = t), s(".blog-pagerindex").css("display", "block"), s(l.container).removeClass("load-next"), s(".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx").click(function () {
                    s(l.container).addClass("load-next"), s(".hfeed .loader").show();
                    var _ = s(this).attr("alt");
                    return jsonstart = (_ - 1) * l.postperpage, $ = _, "page" == r ? s.get(d + "/feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script", h, "jsonp") : s.get(d + "/feeds/posts/summary/-/" + o + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script", h, "jsonp"), !1
                })
            })(_ = parseInt(_.feed.openSearch$totalResults.$t, 10))
        }

        async function a() {
            var _ = c; - 1 != _.indexOf("/search/label/") && (o = -1 != _.indexOf("?updated-max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?updated-max")) : -1 != _.indexOf("?max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?max")) : -1 != _.indexOf("?&max") ? _.substring(_.indexOf("/search/label/") + 14, _.indexOf("?&max")) : _.substr(_.lastIndexOf("/"))), -1 == _.indexOf("?q=") && -1 == _.indexOf(".html") && (-1 == _.indexOf("/search/label/") ? (r = "page", -1 != _.indexOf("max-results=") && -1 != _.indexOf("#PageNo=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12, _.indexOf("#PageNo=")) : -1 != _.indexOf("max-results=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12) : l.postperpage = l.postperpage, n = -1 != c.indexOf("#PageNo=") ? c.substring(c.indexOf("#PageNo=") + 8, c.length) : 1, s.get(d + "/feeds/posts/summary?max-results=1&alt=json-in-script", t, "jsonp")) : (r = "label", -1 != _.indexOf("max-results=") && -1 != _.indexOf("#PageNo=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12, _.indexOf("#PageNo=")) : -1 != _.indexOf("max-results=") ? l.postperpage = _.substring(_.indexOf("max-results=") + 12) : l.postperpage = l.postperpage, n = -1 != c.indexOf("#PageNo=") ? c.substring(c.indexOf("#PageNo=") + 8, c.length) : 1, s.get(d + "/feeds/posts/summary/-/" + o + "?max-results=1&alt=json-in-script", t, "jsonp")))
        }
        var $, i, r, n, o, l = {
                postperpage: Npage,
                numshowpage: 3,
                previous: "&#171;",
                loadAjax: pajax,
                viewdefault: "list",
                container: ".hfeed-inner",
                clist: "hlist",
                cgrid: "hgrip",
                next: "&#187;"
            },
            d = (l = s.extend({}, l, _), window.location.protocol + "//" + window.location.host),
            c = location.href.replace(rgx[17], "");
        a();
        var h = function (_) {
            _ = (i = _.feed.entry[0]).published.$t.substring(0, 19) + i.published.$t.substring(23, 29), _ = encodeURIComponent(_);
            var t = "page" == r ? d + "/search?updated-max=" + _ + "&max-results=" + l.postperpage + "#PageNo=" + $ : d + "/search/label/" + o + "?updated-max=" + _ + "&max-results=" + l.postperpage + "#PageNo=" + $;
            if (l.loadAjax) {
                var e = rgx[14];
                s.get(t, function () {}, "html").done(function (_) {
                    (_ = s("<div></div>").append(_.replace(e, "")).find(l.container).children(".post-outer")).find(".index-post").each(function () {
                        lpost(s(this))
                    }), s(l.container).html(_), cdate(), vmode({
                        viewdefault: l.viewdefault,
                        clist: l.clist,
                        cgrid: l.cgrid
                    }), s(".blog-posts .loader").hide(), _.addClass(rgx[31]), c = t, a(), s("html, body").scrollTop(s("#main").offset().top - 50), window.disqus_shortname && s.getScript("https://" + window.disqus_shortname + ".disqus.com/blogger_index.js")
                })
            } else location.href = t
        }
    }(jQuery)
}

async function chside(_) {
    _.parents(_$_[206]).length && sSide && (_ = $(_$_[207]).height() + $(_$_[208]).height() + $(_$_[209]).height() + 30, $(_$_[210]).css({
        height: _
    }))
}

async function thewid(_, t) {
    var e, a = _.attr(_$_[211]),
        s = _.attr(_$_[212]),
        $ = void 0 !== _.attr(_$_[213]) ? _.attr(_$_[213]) : _$_[1],
        i = void 0 !== _.attr(_$_[214]) ? _.attr(_$_[214]) : _$_[1],
        r = /slider/.test(s);
    e = /gallery2/.test(s), /featured/.test(s);
    var n = /featured1/.test(s),
        o = /newsticker/.test(s),
        l = /carousel/.test(s),
        d = /timeline/.test(s),
        c = /(?=.*column2)(?=.*animated).*/.test(s),
        h = /(?=.*fbig1)(?=.*animated).*/.test(s);
    o ? t.find(_$_[216]).prepend(_$_[215]) : /(simple)/.test(s) ? t.append(_$_[1]) : -1 === a.indexOf(_$_[217]) && t.find(_$_[216]).wrapInner(_$_[223] + $ + _$_[219] + (_$_[220] === a ? _$_[1] : _$_[221] + a) + _$_[222] + Npage + _$_[224]).append(_$_[218] + $ + _$_[219] + (_$_[220] === a ? _$_[1] : _$_[221] + a) + _$_[222] + Npage + _$_[22] + mtx + _$_[77]), e = h ? mx.fb1a : c ? mx.cl2a : /(?=.*column1)(?=.*animated).*/.test(s) ? mx.cl1a : /fbig1/.test(s) ? mx.fb1 : /fbig2/.test(s) ? mx.fb2 : /gallery1/.test(s) ? mx.gl1 : e ? mx.gl2 : r ? mx.sl : /column1/.test(s) ? mx.cl1 : /column2/.test(s) ? mx.cl2 : /carousel1/.test(s) ? mx.cr1 : /carousel2/.test(s) ? mx.cr2 : /video/.test(s) ? mx.vi : o ? mx.nw : n ? mx.fd1 : /featured4/.test(s) ? mx.fd4 : /list/.test(s) ? mx.li : /gallery3/.test(s) ? mx.gl3 : d ? mx.li : /featured2/.test(s) ? mx.fd2 : /featured3/.test(s) ? mx.fd3 : /hot/.test(s) ? mx.ht : /ftpost/.test(s) ? mx.feat : /rcpost/.test(s) ? mx.rcpt : /rdpost/.test(s) ? mx.rdpt : 5, classname = r ? _$_[225] + s : /column/.test(s) ? _$_[226] + s : /fbig/.test(s) ? _$_[227] + s : /gallery/.test(s) ? _$_[228] + s : /featured/.test(s) ? _$_[229] + s : l ? _$_[230] + s : s, -1 != i.indexOf(_$_[231]) && t.children(_$_[216]).css({
        "background-color": i
    }), t.addClass(classname.replace(/animated/, _$_[1])).append(l ? _$_[232] : _$_[1]), _.RCWid({
        blogURL: $,
        maxPosts: e,
        maxPostsPerTag: /(hot|featured1|ftpost)/.test(s) && -1 !== a.indexOf(_$_[217]) ? 2 : -1 !== a.indexOf(_$_[217]) ? 5 : e,
        ShowTags: !!/(hot|featured|newsticker)/.test(s),
        tags: /(recent|random)/.test(a) ? null : a.split(_$_[217]),
        postType: r ? _$_[233] : l ? _$_[234] : o ? _$_[235] : /(featured1|featured2|featured3)/.test(s) ? _$_[236] : /featured4/.test(s) ? _$_[237] : _$_[1],
        ShowComment: !0,
        ShowImage: !0,
        auto: !!/autoplay/.test(s),
        review: !hrev,
        color: -1 != i.indexOf(_$_[231]) ? i : _$_[1],
        ShowPage: !!/pagenumber/.test(s),
        hoverEffect: !!/(gallery|list|newsticker)/.test(s),
        random: _$_[238] === a,
        effect: !!/fade/.test(s) && _$_[239],
        ShowDesc: !!/(featured|list|timeline|slider|newsticker|blogpost|halfpost|bigpost)/.test(s),
        wrapNum: /(featured1|featured4)/.test(s) ? 4 : (/featured2/.test(s), 5),
        summary: r || o || /(blogpost|halfpost|bigpost)/.test(s) ? 200 : d ? 85 : 150,
        ShowAuthor: hauthor,
        fbig: !!/(fbig|column2|gallery1|gallery2|hot)/.test(s),
        animated: !!/animated/.test(s),
        startFirst: !(!c && !h),
        slideSpeed: SSpeed
    }), _.removeAttr(_$_[240])
}

async function discall(t, _, e) {
    _.addClass(e), t.html(rgx[33]), postscribe(_$_[241], _$_[242] + dsqsn + _$_[243] + mx.dsq + _$_[244], {
        done: function () {
            var _ = $(_$_[241]).html().replace(rgx[13], _$_[1]);
            t.html(_), $(_$_[247]).each(function () {
                $(this).find(_$_[246]).wrapAll(_$_[245])
            }), $(_$_[241]).html(_$_[1])
        }
    })
}

async function flicall(t, _, e) {
    _.addClass(e), t.html(rgx[33]), postscribe(_$_[248], _$_[249] + mx.fl + _$_[250] + dO + _$_[251], {
        done: function () {
            var _ = $(_$_[248]).html().replace(rgx[14], _$_[1]);
            t.html(_$_[252] + _ + _$_[94]), $(_$_[248]).html(_$_[1])
        }
    })
}

async function crcom(_, t, e) {
    _.html(rgx[33]), t.addClass(e), _.RCom()
}

async function fbsdk() {
    var _, t, e, a;
    _ = document, t = _$_[261], e = _$_[262], a = _.getElementsByTagName(t)[0], _.getElementById(e) || ((_ = _.createElement(t)).id = e, _.src = _$_[263] + fblang + _$_[264], a.parentNode.insertBefore(_, a)), window.fbAsyncInit = function () {
        FB.init({
            appId: fbid,
            status: !0,
            xfbml: !0,
            cookie: !1,
            version: _$_[265]
        }), FB.Event.subscribe(_$_[266], function (_) {
            $.event.trigger({
                type: _$_[267],
                url: _
            })
        }), FB.Event.subscribe(_$_[268], function (_) {
            $.event.trigger({
                type: _$_[267],
                url: _
            })
        }), FB.Event.subscribe(_$_[269], function () {
            chside($(_$_[270])), $(_$_[270]).addClass(_$_[271])
        })
    }
}

async function crfbox(_, t) {
    var e = _.replace(rgx[28], _$_[1]);
    t.addClass(_$_[272]), t.html(_$_[273] + e + _$_[274])
}

async function ldwid(_, t, e, a) {
    _.length ? thewid(_, t) : rgx[23].test(a) ? discall(e, t, a) : rgx[24].test(a) ? flicall(e, t, a) : rgx[25].test(a) ? crcom(e, t, a) : rgx[27].test(a) ? crfbox(a, e) : /complex/g.test(a) && complx(a, t, e), t.addClass(_$_[275])
}

async function stickside(_, t, e) {
    var a = _.children(_$_[296]),
        s = _.offset().top,
        $ = _.height() - a.height() + s,
        i = a.height() + _$_[297],
        r = t;
    _.children(_$_[298]).length && (s += r = _.children(_$_[298]).outerHeight(!0) + 15), e < s ? a.removeClass(_$_[300]).css({
        position: _$_[299],
        top: r
    }) : $ < e ? a.removeClass(_$_[300]).css({
        position: _$_[299],
        bottom: _$_[301],
        top: _$_[302]
    }) : a.addClass(_$_[300]).css({
        top: t,
        height: i
    })
}
jQuery.easing.jswing = jQuery.easing.swing,
    async function (s) {
        s.fn.myTab = function (a) {
            return a = jQuery.extend({
                active: 1,
                showSpeed: 400
            }, a), this.each(function () {
                var _ = s(this),
                    t = _.children("[data-tab]"),
                    e = a.active - 1;
                _.addClass("simpleTab").prepend('<div class="tab-wrapper"></div>'), t.addClass("tab-content").each(function () {
                    s(this).hide(), _.find(".tab-wrapper").append('<div><span class="btn">' + s(this).data("tab") + "</span></div>")
                }).eq(e).show(), _.find(".tab-wrapper span").on("click", function () {
                    var _ = s(this).parent().index();
                    return s(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"), s(this).addClass("activeTab"), t.eq(_).is(":hidden") && t.hide().eq(_).fadeIn(a.showSpeed), !1
                }).eq(e).addClass("activeTab")
            })
        }
    }(jQuery),
    async function (i) {
        i.fn.hoverTimeout = function (e, a, s, $) {
            return this.each(function () {
                var _ = null,
                    t = i(this);
                t.hover(function () {
                    clearTimeout(_), _ = setTimeout(function () {
                        a.call(t)
                    }, e)
                }, function () {
                    clearTimeout(_), _ = setTimeout(function () {
                        $.call(t)
                    }, s)
                })
            })
        }
    }(jQuery),
    async function ($) {
        var i = {
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
            pauseButton: !($.fn.simplyScroll = function (_) {
                return this.each(function () {
                    new $.simplyScroll(this, _)
                })
            }),
            startOnLoad: !1
        };
        $.simplyScroll = function (_, t) {
            var e = this;
            this.o = $.extend({}, i, t || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal$/) && this.o.orientation == i.orientation) && "rtl" == $("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards$/) && this.o.direction == i.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
                start: "touchstart MozTouchDown",
                move: "touchmove MozTouchMove",
                end: "touchend touchcancel MozTouchRelease"
            } : {
                start: "mouseenter",
                end: "mouseleave"
            }, this.$list = $(_);
            var a = this.$list.children();
            if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < a.length) {
                var s = 0;
                (this.isHorizontal ? (a.each(function () {
                    s += $(this).outerWidth(!0)
                }), a.eq(0).outerWidth(!0) * a.length !== s) : (a.each(function () {
                    s += $(this).outerHeight(!0)
                }), a.eq(0).outerHeight(!0) * a.length !== s)) && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
                    float: "left",
                    width: s + "px"
                }) : this.$list.children().css({
                    height: s + "px"
                }))
            }
            this.o.startOnLoad ? $(void 0).load(function () {
                e.init()
            }) : this.init()
        }, $.simplyScroll.fn = $.simplyScroll.prototype = {}, $.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend, $.simplyScroll.fn.extend({
            init: function () {
                this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnForward = $(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
                var _ = Math.ceil(this.clipMax / this.itemMax);
                if (this.isAuto && "loop" == this.o.autoMode && (this.$list.css(this.dimension, this.posMax + this.itemMax * _ + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, _).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-_).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "none")))), this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
                    for (; 0 != this.itemMax % this.o.speed;)
                        if (0 == --this.o.speed) {
                            this.o.speed = 1;
                            break
                        }(c = this). trigger = null, this.funcMoveForward = function (_) {
                    void 0 !== _ && _.preventDefault(), c.trigger = c.isAuto || "end" != c.o.manualMode ? null : this, c.isAuto ? c.isForwards ? c.moveForward() : c.moveBack() : c.moveForward()
                }, this.funcMovePause = function () {
                    c.movePause()
                }, this.funcMoveStop = function () {
                    c.moveStop()
                }, this.funcMoveResume = function () {
                    c.moveResume()
                }, this.isAuto && (this.paused = !1, this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.o.pauseOnHover && !this.supportsTouch && this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume), this.funcMoveForward())
            },
            moveForward: function () {
                var _ = this;
                this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), _.interval = setInterval(function () {
                    _.$clip[0]["scroll" + _.scrollPos] < _.posMax - _.clipMax ? _.$clip[0]["scroll" + _.scrollPos] += _.o.speed : _.isLoop ? _.resetPos() : _.moveStop(_.movement)
                }, _.intervalDelay)
            },
            movePause: function () {
                clearInterval(this.interval)
            },
            moveStop: function (_) {
                this.movePause(), null !== this.trigger && (void 0 !== _ && $(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == _ ? this.moveBack() : this.moveForward())
            },
            moveResume: function () {
                "forward" == this.movement ? this.moveForward() : this.moveBack()
            },
            resetPos: function () {
                this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
            }
        })
    }(jQuery);
var _$_ = ["cookie", "", ";expires=", ";path=/", "=", "test", "ok", ";", "", "click", "", '<input class="emoKey" type="hidden" size="', '" value=" ', '" />', "select", "cursor", "pointer", "", "active", "", "", '<ul class="hide ', '">', "i", '<i class="', "class", '"></i>', "href", "a", "_", "-", '<a href="', "</a>", '</ul><a href="', '</a><ul class="hide ', "li", "</ul>", "ul", ".summary-content", "file-text-o", ".noimage", ".thumb-img", ".post-type", ".thumb-area", "title", ".jmptext", ".h2", "s400", "s300", "data-img", "s72-c", "/default.jpg", "/mqdefault.jpg", "https://img.youtube.com/vi/", "video-camera", "/", "no_image", "rgba(0, 0, 0, 0.15)", "img.youtube.com", '<span class="youtubeplay"><i class="fa fa-play-circle-o"></i></span>', "hyoutube", ".latest-img", "music", "camera-retro", "quote-left", '<i class="fa fa-', "$1", '<div class="review-place ', '"><span class="review-value">', '</span><div class="slice"><div class="bar"></div></div></div>', "width", "%", ".bar", "&quot;", '...<a href="', '" class="rmtext" title="', " ", "</a>", "style", "background:", "https", 'url("', '")', " no-repeat center center;background-size: cover", "", "", "", "#ajax-search-form", ":text", '<div class="src-result ', ' hide" id="search-result"></div>', "#search-result", "submit", '<div class="loader">', "</div>", "//", "/feeds/posts/default?alt=json-in-script&q=", "&max-results=", '<div class="src-header">', " &quot;", "&quot;</div>", '<a class="src-close ', '" href="/">&times;</a><div class="src-area">', "ig", "<span class='src-mark'>", "</span>", "alternate", "enclosure", "content", "summary", "media$thumbnail", "/s", "-c/", "default", "mqdefault", "...", '<div class="src-item"><div class="src-img-outer ', ' go-left"><a class="src-img show" " ', "url('", "')", ' no-repeat center center;background-size: cover" href="', '" ><div class="post-type absolute"><i class="fa fa- ', '"></i></div></a></div><a class="', ' src-title" href="#', '<p class="src-summary" >', "</p>", '<div class="src-morepost"><a class="show btn" title="more" href="/search?q=', "&quot;</a></div>", '<a class="close" href="/">&times;</a><strong>', "</strong>", "jsonp", ".src-close", "grid", "vlist", "vgrip", ".post-outer", ".blog-posts.hfeed", "#view .grid", "#view .list", "list", "<b>", "</b><div><span>", "</span><small>", "</small></div>", ".postdate", ".index-post", ".published", "div", "<div></div>", "a.blog-pager-older-link", "", "https://", ".disqus.com/blogger_index.js", "html", ".hfeed-inner", "vgrid", "item", '<a class="loadpost show" href="javascript:;">', '<div class="loader hide"></div>', '<div class="rct-loadmore no-decor" ></div>', ".blog-pagerindex", "«", "hlist", "hgrip", "&#187;", "page", '<span class="showpage"><a href="">', "</a></span>", '<span class="showpageNum"><a rel="noindex" href="/search/label/', "?&max-results=", '<span class="showpageNum"><a class="xpagex" href="#" alt="', '<span class="showpageNum"><a class="xlabelx" href="#" alt="', '<span class="showpageNum"><a href="">1</a></span>', '">1</a></span>', '<span class="dotxpage"> ... </span>', '<span class="showpagePoint">', '<span class="showpageNum"><a href="#" class="xpagex" alt="', '<span class="showpageNum"><a rel="noindex" href="#" class="xlabelx" alt="', "pageArea", "blog-pagerindex", "display", "block", "load-next", ".hfeed .loader", "alt", "/feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script", "/feeds/posts/summary/-/", "?start-index=", ".blog-pagerindex a.xpagex, .blog-pagerindex a.xlabelx", "/search/label/", "?updated-max", "?max", "?&max", "?q=", ".html", "max-results=", "#PageNo=", "/feeds/posts/summary?max-results=1&alt=json-in-script", "label", "?max-results=1&alt=json-in-script", "/search?updated-max=", "?updated-max=", ".blog-posts .loader", "#main", "html, body", ".sidebar-right", "#sidebar-top", "#sidebartabs", "#sidebar-bottom", ".sidebar-right .wrap-inner", "data-label", "data-type", "data-url", "data-color", " ", "h2", ",", '<a class="morepost btn" href="', "/search", "recent", "/label/", "?max-results=", '<a href="', '"></a>', "slider ", "column ", "fbig ", "gallery ", "featured ", "carousel ", "#", '<div class="owl-controls"><div class="owl-nav"></div></div>', "s", "c", "n", "fs", "f3", "random", "fade", "data-label data-url data-type data-color", "#drcmt", '<script async="async" src="https://', ".disqus.com/recent_comments_widget.js?num_items=", '&avatar_size=32&excerpt_length=100&hide_mods=0" ><\/script>', '<div class="disqus-summary" />', ".dsq-widget-user,.dsq-widget-comment,.dsq-widget-meta", ".dsq-widget-item", "", "", "", "", "", "{", "}", '<div class="recent-tab">', '<div data-tab="', "aazs-widget", ".recent-tab", "complex ", ".tab-content", "script", "facebook-jssdk", "https://connect.facebook.net/", "/sdk.js", "v4.0", "edge.create", "unlock_content", "message.send", "xfbml.render", ".FBbox", "load-done", "FBbox", '<div id="FBbox"><div class="fb-page" data-href="', '" data-width="550"></div></div>', "widget-loaded", "dhref-done", "", "/w400/", "", "", "", "", "", "", "", "", "", "", "", "", "", '<span class="hide">Facebook</span>', "", "", ".dhref", ".wrap-inner", "px", ".innerwrap", "absolute", "side-fixed", "0", "auto", "sub-menu", "sub-sub-menu", ".submenu", "thumb-outer", "animated zoomIn", "heading-text", '<div class="loader"></div>', ".varsumlength", ".varfixMenu", ".varmonthName", "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec", ".varstickySide", ".varsliderspeed", ".varnavipostpage", ".varmaxcommentdepth", ".vardateformat", "YYYY/MM/DD", ".varrcadminBlog", "y", ".varhideauthor", ".varhideLatest", ".varcseID", ".varhideEmo", ".varhomelist", ".varfeatpost", ".varhomePageNavi", ".varfbappsid", "160447341157187", ".varfblang", "en_US", ".vardajaxPageNavi", ".varsrctext", "Type and hit enter to search...", ".varntext", "Previous Article", ".varptext", "Next Article", ".varmtext", "", ".varlmtext", "", ".varvmtext", "", ".varreltext", "RELATED CONTENT", ".varrectext", "Recent Post", ".varrecotext", "Recommended For You", ".vartwitterauthor", "A_A_Z_S", ".vardisqusshortname", "", ".varshowrelated", ".varshowrecommended", ".varrelstyle", "carousel", ".varhexcerpt", ".varhreview", ".vartopbreakline", ".varbottombreakline", ".varautoplay", ".vartopbreaklineload", ".varbottombreaklineload", "", ".varrecentpost", ".varrandompost", ".varfeaturedpost", ".varrecentcomment", ".varfbig1", ".varfbig2", ".varfbig1animated", ".vargallery1", ".vargallery2", ".vargallery3", ".varcolumn1", ".varcolumn2", ".varcolumn1animated", ".varcolumn2animated", ".varnewsticker", ".varslider", ".varcarousel1", ".varcarousel2", ".varrelated", ".varvideo", ".varfeatured1", ".varfeatured2", ".varfeatured3", ".varfeatured4", ".varlist", ".varhot", ".vardisquscomment", "", ".vartimeline", "allaboutzodiacsigns", "", ".home-area #Blog1,.home-area .posts-title", "", ".item-topmeta", ".post-body", 'if (this.value==""){this.value="', '";}', 'if (this.value=="', '"){this.value="";}', ".errorsrc input,.search-form input", "text/javascript", "https", "https:", "https:", "//www.google.com/cse/cse.js?cx=", "", "#body-area", "custom-cse-aazs", "searchresults-only0", ".comments-tabs", ".canUrl", ".bposId", ".pstUrl", "<div data-tab='Google'><div class='tab-blogger'></div></div>", "<div data-tab='Disqus'><div class='tab-disqus' id='disqus_thread'></div></div>", "<div data-tab='Facebook'><div class='tab-facebook'><div class='fb-comments' data-numposts='5' data-width='100%' data-href='", "'></div></div></div>", "", "show", ".menu", ".", '<div class="sub-icon"><span class="sub-button ', ' btn"><i class="fa fa-caret-down"></i></span></div>', "submenu", "ul.", ' btn"><i class="fa fa-caret-right"></i></span></div>', "subsubmenu", "<span class='menu-desc'>", ".menu li a", "<span class='soc-desc'>", "<span class='soc-count'>", ".social-desc", "have-desc", ".menu-desc", ".main-menu li", ".sc-move", "padding-left", ".main-menu a", "a.home-icon", "left", '.main-menu a[href="#"]', "easeOutQuad", "nohover", ".home-icon", ".main-menu > li", ":not(:animated)", "easeInExpo", ".menu li", "", "", "", '<div class="emoWrap hide">', "", "iframe#comment-editor", " <amp-img width='36' height='36' layout='responsive' '' src='", "' alt='", "'/>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "data-tab", ".widget", "#sidebar-tabs1", ".labels-wrap", ".plabelsbtn", ".comments", "home-area", "#container", "index-area", "index", "#aazs", ".searchQuered", "archive", "ablist", "abgrip", "<div ", ".HTML", '"', '" ', "f2", "slide-width=630", ' class="widget-area mywidget hide"></div><div class="handle mywidget hide"></div>', '<div class="wid-pagenumber"></div>', '<a class="wid-pagenum btn" alt="1">«</a>', '<a class="wid-pagenum btn" alt="', '">«</a>', '<a class="wid-pagenum btn" alt="1">1</a>', "<span> ... </span>", "<span ", ";border-color:", ';background-image:initial" ', 'class="actual">', '">&#187;</a>', ".wid-pagenumber", '<div class="handle"></div><div class="handle2 json-process"><div class="loader"></div></div>', ".widget-area", ".handle2", "data-tag", "/feeds/posts/default?start-index=", "&orderby=published&alt=json-in-script", "/feeds/posts/default/-/", ".wid-pagenum", "replies", "text/html", 'class="review-place absolute"><span class="review-value">', '</span><div class="slice"><div "width:', '%" class="bar"></div></div></div>', ".blogspot", "com", ".blogspot.com", ".blog-posts", ".items:gt(", ")", ".handle", "hide", ".handle,.loader,.handle2", ".readmorebut", "noborder", "aazs", "owl-carousel", "fadeOut", "zoomIn", ".owl-nav", ".items", "<div class='wrapitem'></div>", "<div class='feat-wrapitem'></div>", '<div class="feat-wrapinner"></div>', ".feat-wrapitem:first-child", ".feat-wrapinner", "<div class='fbig-widget-area'></div>", "gallery", " hovergallery", "show botwid", ".hover-info", ".hoveffect", ".thumb-outer", ".rcthumb", "s150", "s600", "mega-menu", "feed-proc", "zoomIn animated", ".fbig-widget-area .items", "<div class='animated-item'></div>", ".animated-item", '<div class="animated-area"></div>', "mouseleave touchend", "start", "mouseenter touchstart", "stop", ".owl-carousel", "score", "d", ' class="', "first-item ", 'items"><div class="items-inner">', 'class="rcptime">', 'class="postdate absolute"><b>', "</small></div></div>", '<div class="table-cell thumb-outer', " hoveffect", '"><div class="mythumb thumb-area', " first-image", '"><div class="post-type absolute"><i class="fa fa-', '"></i></div><a class="rcthumb show" title="', '" href="', '" data-img="', '"', "ytimg.googleusercontent.com", "</a></div></div>", '"border-', "right", "-color:", 'class="', "first-area ", 'content-area table-cell">', '"color:', 'class="ct-before"><i class="fa fa-circle"></i></div>', "<p ", '"', "background-", "color:", 'class="heading-text"><a ', 'class="hoveffect"', ' href="', '</a></p><div class="metainfo">', '<div class="hide">', "</div> ", '<span class="wid-date"><i class="fa fa-calendar"></i> ', "DD", "MM", "YYYY", '<span class="widcomments"><i class="fa fa-comments-o"></i> <a href="', '"></a>', '<div class="psummary hide">', '<a class="readmorebut" href="', '#more" title="', '">More</a>', '<span class="rcptags absolute"><a ', 'class="btn" title="', "</div></div>", 'a[class="item-tag"]:lt(', '<h4><span class="title-wrap">', '</span></h4><div class="owl-nav"></div>', "/feeds/posts/summary?max-results=0&orderby=published&alt=json-in-script", "/feeds/posts/default?max-results=", "&orderby=published&start-index=", "&alt=json-in-script", "/feeds/comments/default?alt=json-in-script&orderby=published", '<div class="rcomment-area">', '<div class="rcomment-item', " rcadmin", " rcguest", '<amp-img class="rcomment-img" alt="', '" title="', '" href="', '" src="', '"/>', '<div class="rcomment-info"><a href="#', '</a><a class="rcomment-title" href=" ', '</a><div class="rcomment-meta"><div class="com-date"><b>', '</small></div></div><div class="com-time">', "</div></div></div>", '<div class="rcomment-summary">', '<div class="clear"></div></div>', " <amp-img layout='responsive' alt='emo' src='", "' class='emo' alt='", ".rcomment-summary", "<span></span>", "Anonymous", "", "g", '<div class="shrt shrt-$1" $2 $3>', ".post-body,.cm_body p,.HTML .widget-content", "icon", '<i class="fa shrt-icon ', "fa-", "Tab", "Dont Have any text content", ".shrt-content", "shrt-tabhtml", ".shrt-tab,.shrt-vtab", "", "", "", '<div class="acrd-content">', "My accordion", ".shrt-item", "current", ".acrd-toggle", "showed", ".acrd-content", ".shrt-accordion", "fast", ".acrd-content:visible", "h3.acrd-toggle", ".shrt-accordion .acrd-toggle", "src", "color", "featured", "height", "visual", "comments", "user", "playlist", '<div class="inlinestyle frame-shrt-soundcloud', " pfeatured", '"><amp-iframe width="', "320", '" height="', "130", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" scrolling="no" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/', "tracks", "users", "xxxxxxx", "&amp;color=", "ff5500", "&amp;auto_play=", "false", "&amp;hide_related=false&amp;show_comments=", "&amp;show_user=", "true", "&amp;show_reposts=false&amp;visual=", '"><div overflow="true"/></amp-iframe></div>', ".shrt-soundcloud", "highlight", "background", "info", "logo", '<div class="inlinestyle frame-shrt-dailymotion', '"><amp-iframe width="', "270", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.dailymotion.com/embed/video/', "x12k542", "?logo=", "1", "&info=", "&highlight=", "29b7ff", "&foreground=", "ffffff", "&background=", "000000", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-dailymotion", "control", "related", '<div class="inlinestyle frame-shrt-youtube', "370", '" layout="responsive" resizable="resizable" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" src="https://www.youtube.com/embed/', "9ua_4ajpP58", "?list=", "&amp;rel=", "&amp;controls=", "&amp;showinfo=", '" allowfullscreen><div overflow="true"/></amp-iframe></div>', ".shrt-youtube", '<div class="inlinestyle frame-shrt-map', '" src="https://www.google.com/maps/embed?pb=', '"></amp-iframe></div>', ".shrt-map", "shrt-message", ".shrt-alert, .shrt-warning, .shrt-update, .shrt-success, .shrt-info, .shrt-error", '<div class="headline">', '<div class="message-wrapper">', ".shrt-message", "url", "rel", 'href="', '"', '<a class="shrtImgUrl ', ' rel="', '<amp-img layout="responsive" class="shrtImg', '" width="', "", '"/>', ".shrt-img", "glpost", "br", ".shrt-pgallery,.shrt-bgallery", "type", '<pre data-codetype="', "HTML", "Add some code here", "</pre>", ".shrt-code", "pre", '<span class="line-number"></span>', '<span class="cl"></span>', "span", "<span>", "#contact", ".shrt-contact", '" class="jdshrt-tooltip">', "Insert Link Title", "Insert Tooltip Text", "</span></a>", ".shrt-tooltip", '<div class="shrt-slide-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ') no-repeat center center;background-size: cover;" href="', '"></a><div class="shrt-summary">', '<h3><a href="', "</a></h3>", "<p>", "shrt-inhtml", ".shrt-pslide", '<div class="shrt-carousel-item"><div class="shrt-inner"><a class="shrt-owl-img" "background: url(', ".shrt-pcarousel", "top", "review-value", '<div class="rev-item"><div class="rev-desc">', "", '</span></div><div class="rev-value-outer"><div class="rev-value" data-value="', '" "width:', '%"></div></div></div>', '<div class="rev-summary"><div class="rev-desc-place table-cell"><h4>', "", "</h4><span>", "", '</span></div><div class="rev-overall table-cell"><div class="overall-inner"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "", "</span></div></div></div>", '<div class="top-revscrore"><div class="c100"><div class="rev-score"></div><div class="slice"><div class="fill"></div><div class="bar"></div></div></div><span>', "</span></div>", ".rev-value", "data-value", ".rev-score", "p", ".c100", "rotate(", "deg)", ".c100 .bar", ".shrt-review", ".widget-content", 'data-url="', 'data-color="', '<div class="aazs-widget" data-label="', '" data-type="', ">", '<div class="aazs-widget" data-label="random" data-type="simple rcpost">', '<div class="aazs-widget" data-label="random" data-type="simple rdpost">', '" data-type="simple ftpost">', ".aazs-widget", ".post-body strike", ".post-title", ".post-body h2 strike", ".post-body h3 strike", ".post-subtitle", "id", ".post", "#post-url", "unlocked", "unlocked-", "</locktag>", "<locktag>", '<div class="locked-content"><div class="inner"><i class="color fa fa-lock"></i><div class="locked-content-actions"><div class="locked-content-action"><div class="fb-like" data-href="', '" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div></div></div></div></div>', "", ".item-post .post-body", "", "", "", "", "", "", ".item-area", ".cm_form", '<a href="#origin_cform" onclick="Reset_Comment_Form()">', "#r_f_c", "#comment-editor", "&parentID=", "#%7B", ".profile-sec .widget", ' hover" href="', '<a class="fa fa-', ".fa", "<div class='authoriconBox'></div>", ".profile-sec .widget-content", ".item-topmeta .fn", "All About Zodiac Signs", ".authoriconBox", ".authorProfile p", ".authorSocial", '<span class="', " hover", "fa fa-", '"></span>', ".authorSocial a", ".adsinside", "left-post", "body", "right-post", "left-side", "right-side", "full-post", "hide-adstitle", '<div class="adsinside-it ads-outer"></div>', ".adsinside-it", ".adsbelow", '<div class="adstitle', "", '"><div class="adspltop"></div>', "", ".adspltop", "", "", "", "", ".adsendpost", '<div class="adsbottom', "", '<div class="adsplbottom"></div></div>', ".bottom-infoitem", ".adsplbottom", "", '<input type="hidden" class="aazs-page"></input><input type="hidden" class="aazs-per-page"></input>', '<div class="page-place no-decor"></div>', "[lnt]", "[fnt]", '</div><div class="page-item">', '<div class="page-item">', ".page-place", ".aazs-page", ".aazs-per-page", '<a class="previous_link btn"><i class="fa fa-chevron-left"></i></a>', '<a class="page_link btn" data-title="', '" ","href"," longdesc="', '<a class="next_link btn"><i class="fa fa-chevron-right"></i></a>', "active_page", ".page_link:first", "none", ".active_page", ".page_link[longdesc=", "]", ".page_link", ".previous_link", ".next_link", "data-title", ".all_link", '@<a href="#c', ".cm_wrap .cm_body p", "#comment-form_", "#rc", "parentId", "data-level", "#c", ":first", ":first .cm_reply", '<div class="cm_wrap" id="c', '" data-level="', " .cm_child:first", "/s55-c/", ".cm-img", '<div class="nw_com"></div>', ".nw_com", ".comments-tabs .tab-wrapper div", ".comments-tabs .tab-wrapper", "table", "pfeatured", ".tr-caption", '<span class="pcaption absolute">', ".pfeatured", ".post-body img", ".post-featured", '<div class="slide-pfeatured"></div>', ".slide-pfeatured", ".glpost", ".separator", ".post-featured a", ".post-featured > a", ".post-featured img", "/s600/", '<div class="hide url-post"><input aria-label="Post Url" class="url-post-input" type="text" value="" ', '" /></div>', ".url-post", ".showlink", "hover", ".item-share a", ".item-snippet", ".body-area", "", "show-popup", "", "", "", "", "", "", '<a rel="noindex" class="menu-morepost', " random", '" href="/search', '"></a>', "mcarousel", '<div class="normal-tab">', ".normal-tab", '<a rel="noindex" class="menu-morepost" href="/search/label/', "mtab", "mbig", "menulinks", ".links-submenu .widget", ".links-submenu", '<div class="links-content"><h2>', '</h2><div class="widget-content">', ".links-content", "gridpost", '<a rel="noindex" class="grid-h2" href="/search', '<a rel="noindex" class="morepost btn" href="/search', "li.submenu", ".menu-search", ".mobile-search", ".social-icon", ".mobile-icons", ":hidden", ".mobile-menu .sub-icon", '<a class="blog-pager-older-link-item go-right oldernewerright" title="Next Article - [title] - posted on [date]" href="[url]"><span>', "</span><div>[title]</div></a>", '<a class="blog-pager-newer-link-item go-left oldernewerleft" title="Previous Article - [title] - posted on [date]" href="[url]"><span>', '<amp-img layout="responsive" alt="blog-pager" src="', "a.blog-pager-older-link-item", "a.blog-pager-newer-link-item", "data-trans", "#body-area *", "span.trans", "scroll", ".header-wrap", "scrolled", ".container", "scroll-up", "fixmenu-work", ".allaboutzodiacsigns", "15px", ".sidebar-left", "stickyside-work", ".widget-loaded", "#facebook-jssdk", "item-area", ".tab-disqus", "disqus-loaded", ".disqus.com/embed.js", "data-timestamp", "", "", "", "", ":", "a.icons-facebook", "a.dhref-done", "item-page-loaded", ".pager-isi", "/feeds/posts/default?alt=json-in-script&published-min=", "&max-results=0&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=", "&max-results=3&callback=?", "/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?", ".populars-img", ".img-change", 'background:url("', '") no-repeat center center;background-size: cover', "img-change", "showup", ".gotop", ".item-tag", ".reco-place", '<div class="reco-place blog-posts"><h4>', '</h4><div class="reco-inner"></div><span class="btn reco-close"><svg height="28" viewBox="0 3 24 24" width="28"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="#fff"></path></svg></span></div>', ".reco-inner", "showIt", "reco-click", ".reco-close", ".itemtags", ".footer-area", "related-work", "#related_posts", "related-work rel-", "fbig", "data-count", "data-number", ".tagscount", "[id=", "string", "transitioning", "1s ease-in-out", "a[href*=\\#]:not([href=\\#])", "transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", "resize", "small-wid", ".HTML > .widget-content", "small-post", ".tab-blogger #blogger_cm", "#blogger_cm", ".tab-blogger", "#Blog1", "#gPlusComment > div", ".main-wrapper", ".sidebar-right .innerwrap", ".sidebartabs", "min-height", "-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform", "translate3d(1px,1px,1px)", "", "", "ontouchstart", "touch", "Safari", "CriOS", "standalone", " translateZ(0)", "onorientationchange", "orientationchange", "click touchstart", "mousedown", "touchmove", "mousemove", "touchend", "mouseup", "0s", ".mobile-menu .tab-wrapper a,.sub-button,.sub-button .fa", "ms", "translate(", "px,0)", "", "", "#allaboutzodiacsigns", "", ".index-post-outer"],
    rgx = [/\s|&nbsp;/g, _$_[299], _$_[303], _$_[304], _$_[305], /(<|\[)amp-img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?(>|\])/i, /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/i, /\/s\d+(\-c)?\//i, /\[youtube +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?\]/i, /vimeo.com\/|dailymotion.com\/|youtube.com\/|youtu.be\/|\[dailymotion|\[youtube/i, /soundcloud.com\/|\[soundcloud/i, /\[gallery\]|\[pgallery|\[bgallery/i, /<blockquote>/i, /<(?:script|style)\b[^<]*(?:(?!<\/(?:script|style)>)<[^<]*)*<\/(?:script|style)>/gi, /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, /<\S[^>]*>/g, /\[\S[^\]]*\]/g, /(:?\?|&)m=(1|0)/g, /[^[\]]+(?=])/g, /recentpost/g, /randompost/g, /featuredpost/g, /featuredpost\//g, /disquscomment/g, /pn/g, /recentcomment/g, /pL/g, /FBbox/g, /FBbox\//g, /\[item *review-fe=("[^"]+") *\]/g, _$_[306], _$_[307], _$_[308], _$_[309], /(tooltip|dailymotion|youtube|soundcloud|code|accordion|content|item|alert|success|warning|update|error|info|tab|vtab|pgallery|bgallery|amp-img|contact|2column|3column|4column|pslide|pcarousel|map|review)/],
    sumLength = $(_$_[310]).length ? $(_$_[310]).attr(_$_[44]) : 200,
    fixM = !$(_$_[311]).length || _$_[235] != $(_$_[311]).attr(_$_[44]),
    mName = $(_$_[312]).length ? $(_$_[312]).attr(_$_[44]).split(_$_[217]) : _$_[313].split(_$_[76]),
    sSide = !$(_$_[314]).length || _$_[235] != $(_$_[314]).attr(_$_[44]),
    SSpeed = $(_$_[315]).length ? $(_$_[315]).attr(_$_[44]) : 5e3,
    Npage = $(_$_[316]).length ? $(_$_[316]).attr(_$_[44]) : 10,
    fC = $(_$_[317]).length ? $(_$_[317]).attr(_$_[44]) : 2,
    dformat = $(_$_[318]).length && _$_[235] != $(_$_[318]).attr(_$_[44]) ? $(_$_[318]).attr(_$_[44]) : _$_[319],
    admBlog = !$(_$_[320]).length || _$_[321] != $(_$_[320]).attr(_$_[44]),
    hauthor = !$(_$_[322]).length || _$_[321] != $(_$_[322]).attr(_$_[44]),
    hLast = !(!$(_$_[323]).length || _$_[321] != $(_$_[323]).attr(_$_[44])),
    gCSE = !(!$(_$_[324]).length || _$_[235] == $(_$_[324]).attr(_$_[44])),
    cseID = $(_$_[324]).length && _$_[235] != $(_$_[324]).attr(_$_[44]) ? $(_$_[324]).attr(_$_[44]) : _$_[1],
    hlist = !(!$(_$_[326]).length || _$_[321] != $(_$_[326]).attr(_$_[44])),
    fpost = !$(_$_[327]).length || _$_[235] != $(_$_[327]).attr(_$_[44]),
    hpagenav = !$(_$_[328]).length || _$_[235] != $(_$_[328]).attr(_$_[44]),
    fbid = $(_$_[329]).length ? $(_$_[329]).attr(_$_[44]) : _$_[330],
    fblang = $(_$_[331]).length ? $(_$_[331]).attr(_$_[44]) : _$_[332],
    pajax = !$(_$_[333]).length || _$_[321] != $(_$_[333]).attr(_$_[44]),
    stx = $(_$_[334]).length && _$_[235] != $(_$_[334]).attr(_$_[44]) ? $(_$_[334]).attr(_$_[44]) : _$_[335],
    ntx = $(_$_[336]).length && _$_[235] != $(_$_[336]).attr(_$_[44]) ? $(_$_[336]).attr(_$_[44]) : _$_[337],
    ptx = $(_$_[338]).length && _$_[235] != $(_$_[338]).attr(_$_[44]) ? $(_$_[338]).attr(_$_[44]) : _$_[339],
    mtx = $(_$_[340]).length && _$_[235] != $(_$_[340]).attr(_$_[44]) ? $(_$_[340]).attr(_$_[44]) : _$_[341],
    lmtx = $(_$_[342]).length && _$_[235] != $(_$_[342]).attr(_$_[44]) ? $(_$_[342]).attr(_$_[44]) : _$_[343],
    vmtx = $(_$_[344]).length && _$_[235] != $(_$_[344]).attr(_$_[44]) ? $(_$_[344]).attr(_$_[44]) : _$_[345],
    reltx = $(_$_[346]).length && _$_[235] != $(_$_[346]).attr(_$_[44]) ? $(_$_[346]).attr(_$_[44]) : _$_[347],
    rectx = $(_$_[348]).length && _$_[235] != $(_$_[348]).attr(_$_[44]) ? $(_$_[348]).attr(_$_[44]) : _$_[349],
    recotx = $(_$_[350]).length && _$_[235] != $(_$_[350]).attr(_$_[44]) ? $(_$_[350]).attr(_$_[44]) : _$_[351],
    twau = $(_$_[352]).length && _$_[235] != $(_$_[352]).attr(_$_[44]) ? $(_$_[352]).attr(_$_[44]) : _$_[353],
    dsqsn = $(_$_[354]).length && _$_[235] != $(_$_[354]).attr(_$_[44]) ? $(_$_[354]).attr(_$_[44]) : _$_[1],
    dO = $(_$_[355]).length && _$_[235] != $(_$_[355]).attr(_$_[44]) ? $(_$_[355]).attr(_$_[44]) : _$_[1],
    shrel = !$(_$_[356]).length || _$_[235] != $(_$_[356]).attr(_$_[44]),
    shreco = !(!$(_$_[357]).length || _$_[321] != $(_$_[357]).attr(_$_[44])),
    relst = $(_$_[358]).length ? $(_$_[358]).attr(_$_[44]) : _$_[359],
    hecpt = !(!$(_$_[360]).length || _$_[321] != $(_$_[360]).attr(_$_[44])),
    hrev = !(!$(_$_[361]).length || _$_[321] != $(_$_[361]).attr(_$_[44])),
    tbline = !(!$(_$_[362]).length || _$_[321] != $(_$_[362]).attr(_$_[44])),
    bbline = !(!$(_$_[363]).length || _$_[321] != $(_$_[363]).attr(_$_[44])),
    aplay = !(!$(_$_[364]).length || _$_[321] != $(_$_[364]).attr(_$_[44])),
    blinest = $(_$_[365]).length ? $(_$_[365]).attr(_$_[44]) : _$_[220],
    btlinest = $(_$_[366]).length ? $(_$_[366]).attr(_$_[44]) : _$_[220],
    dajaxsrc = !(!$(_$_[367]).length || _$_[321] != $(_$_[367]).attr(_$_[44])),
    mx = {
        rcpt: $(_$_[368]).length ? $(_$_[368]).attr(_$_[44]) : 4,
        rdpt: $(_$_[369]).length ? $(_$_[369]).attr(_$_[44]) : 4,
        feat: $(_$_[370]).length ? $(_$_[370]).attr(_$_[44]) : 4,
        com: $(_$_[371]).length ? $(_$_[371]).attr(_$_[44]) : 5,
        fb1: $(_$_[372]).length ? $(_$_[372]).attr(_$_[44]) : 5,
        fb2: $(_$_[373]).length ? $(_$_[373]).attr(_$_[44]) : 5,
        fb1a: $(_$_[374]).length ? $(_$_[374]).attr(_$_[44]) : 8,
        gl1: $(_$_[375]).length ? $(_$_[375]).attr(_$_[44]) : 10,
        gl2: $(_$_[376]).length ? $(_$_[376]).attr(_$_[44]) : 7,
        gl3: $(_$_[377]).length ? $(_$_[377]).attr(_$_[44]) : 6,
        cl1: $(_$_[378]).length ? $(_$_[378]).attr(_$_[44]) : 5,
        cl2: $(_$_[379]).length ? $(_$_[379]).attr(_$_[44]) : 5,
        cl1a: $(_$_[380]).length ? $(_$_[380]).attr(_$_[44]) : 9,
        cl2a: $(_$_[381]).length ? $(_$_[381]).attr(_$_[44]) : 8,
        nw: $(_$_[382]).length ? $(_$_[382]).attr(_$_[44]) : 9,
        sl: $(_$_[383]).length ? $(_$_[383]).attr(_$_[44]) : 5,
        cr1: $(_$_[384]).length ? $(_$_[384]).attr(_$_[44]) : 9,
        cr2: $(_$_[385]).length ? $(_$_[385]).attr(_$_[44]) : 9,
        rl: $(_$_[386]).length ? $(_$_[386]).attr(_$_[44]) : 9,
        vi: $(_$_[387]).length ? $(_$_[387]).attr(_$_[44]) : 6,
        fd1: $(_$_[388]).length ? $(_$_[388]).attr(_$_[44]) : 8,
        fd2: $(_$_[389]).length ? $(_$_[389]).attr(_$_[44]) : 10,
        fd3: $(_$_[390]).length ? $(_$_[390]).attr(_$_[44]) : 10,
        fd4: $(_$_[391]).length ? $(_$_[391]).attr(_$_[44]) : 7,
        lt: $(_$_[392]).length ? $(_$_[392]).attr(_$_[44]) : 6,
        ht: $(_$_[393]).length ? $(_$_[393]).attr(_$_[44]) : 4,
        dsq: $(_$_[394]).length ? $(_$_[394]).attr(_$_[44]) : 4,
        fl: $(_$_[395]).length ? $(_$_[395]).attr(_$_[44]) : 8,
        li: $(_$_[396]).length ? $(_$_[396]).attr(_$_[44]) : 5
    };
navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) && (document.getElementById(_$_[397]).className = document.getElementById(_$_[397]).className + _$_[398]), hLast && $(_$_[399]).hide(), hecpt && $(_$_[400]).hide(), $(_$_[402]).before($(_$_[401])), $(_$_[407]).attr({
    onblur: _$_[403] + stx + _$_[404],
    onfocus: _$_[405] + stx + _$_[406],
    fe: stx
});
var csystext = $(_$_[417]).text(),
    cnurl = $(_$_[418]).attr(_$_[44]),
    bpstid = $(_$_[419]).attr(_$_[44]),
    psturl = $(_$_[420]).attr(_$_[44]),
    bcom = _$_[421],
    dcom = _$_[422],
    fcom = _$_[423] + cnurl + _$_[424],
    scom = _$_[425] + bpstid + _$_[424];
if ($(_$_[417]).html(csystext.replace(/\[googlep\]/g, bcom).replace(/\[disqus\]/g, dcom).replace(/\[facebook\]/g, fcom)), $(_$_[427]).each(function () {
        cmnu(this, rgx[2]), $(this).addClass(_$_[426])
    }), $(_$_[428] + rgx[2]).each(function () {
        cmnu(this, rgx[3])
    }), $(_$_[432] + rgx[2]).parent(_$_[35]).addClass(_$_[431]).append(_$_[429] + rgx[1] + _$_[430]), $(_$_[432] + rgx[3]).parent(_$_[35]).addClass(_$_[434]).append(_$_[429] + rgx[1] + _$_[433]), $(_$_[436]).each(function () {
        $(this).html($(this).html().replace(/\[/g, _$_[435]).replace(/\]/g, _$_[105]))
    }), $(_$_[439]).each(function () {
        $(this).html($(this).html().replace(/\[/g, _$_[438]).replace(/\]/g, _$_[105]).replace(/\{/g, _$_[437]).replace(/\}/g, _$_[105]))
    }), $(_$_[441]).parents(_$_[35]).addClass(_$_[440]), 0 < $(_$_[442]).length) {
    var slide_nav = $(_$_[443]),
        current_pos = 0,
        current_menu_width = 0;
    $(_$_[445]).each(function () {
        var _ = $(this);
        if (_.attr(_$_[27]) == window.location.href && _.parents(rgx[4]).length) {
            var t = parseInt(_.parents(rgx[4]).css(_$_[444]));
            current_pos = _.parents(rgx[4]).position().left + t, current_menu_width = _.parents(rgx[4]).width()
        }
        slide_nav.css({
            width: current_menu_width,
            left: current_pos
        })
    }), 0 == current_pos && (current_pos = $(_$_[446]).position().left, slide_nav.css(_$_[447], current_pos)), $(_$_[448]).click(function () {
        var _ = parseInt($(this).parent().css(_$_[444]));
        current_pos = $(this).parent().position().left + _, current_menu_width = $(this).parent().width()
    }), $(window).resize(function () {
        $(_$_[445]).each(function () {
            var _ = $(this);
            if (_.attr(_$_[27]) == window.location.href && _.parents(rgx[4]).length) {
                var t = parseInt(_.parents(rgx[4]).css(_$_[444]));
                current_pos = _.parents(rgx[4]).position().left + t, current_menu_width = _.parents(rgx[4]).width()
            }
            slide_nav.css({
                width: current_menu_width,
                left: current_pos
            })
        }), 0 == current_pos && (current_pos = $(_$_[446]).position().left, slide_nav.css(_$_[447], current_pos))
    }), $(_$_[452]).hover(function () {
        var _ = parseInt($(this).css(_$_[444]));
        slide_nav.animate({
            width: $(this).width(),
            left: $(this).position().left + _
        }, {
            queue: !1,
            easing: _$_[449],
            duration: 250
        }), $(_$_[451]).addClass(_$_[450])
    }, {
        queue: !1,
        easing: _$_[449],
        duration: 250
    }), $(_$_[451]).removeClass(_$_[450])
}
$(_$_[455]).hoverTimeout(100, function () {
    $(this).children(_$_[37]).filter(_$_[453]).slideDown()
}, 300, function () {
    $(this).children(_$_[37]).slideUp(500, _$_[454])
}), $(_$_[145]).each(function () {
    lpost($(this))
});
var sfArr = function (_) {
        var t, e, a = _.length;
        if (0 === a) return !1;
        for (; --a;) t = Math.floor(Math.random() * (a + 1)), e = _[a], _[a] = _[t], _[t] = e;
        return _
    },
    gRdm = function (_, t) {
        return Math.floor(Math.random() * (t - _ + 1)) + _
    };
gCSE || dajaxsrc || ajaxsrc(), $(_$_[504]).find(_$_[503]).each(function () {
        title = $(this).find(_$_[216]).text(), $(this).attr(_$_[502], title)
    }), $(_$_[504]).myTab({
        active: 1
    }), $(_$_[506]).click(function () {
        var _ = $(this);
        return _.hasClass(_$_[18]) ? ($(_$_[505]).fadeOut(), _.removeClass(_$_[18])) : (_.addClass(_$_[18]), $(_$_[505]).fadeIn()), !1
    }), cdate(),
    function (_) {
        if (_(_$_[509]).hasClass(_$_[508]) && !hpagenav) hlist ? (lMore({
            viewdefault: _$_[139]
        }), vmode({
            viewdefault: _$_[139]
        })) : (lMore(), vmode());
        else if (_(_$_[509]).hasClass(_$_[508]) && hpagenav) {
            var t = _(_$_[154]).children(_$_[135]).length;
            hlist ? (pageNavi({
                postperpage: t,
                viewdefault: _$_[139],
                clist: _$_[133],
                cgrid: _$_[134]
            }), vmode({
                viewdefault: _$_[139],
                clist: _$_[133],
                cgrid: _$_[134]
            })) : (pageNavi({
                viewdefault: _$_[132],
                postperpage: t,
                clist: _$_[133],
                cgrid: _$_[134]
            }), vmode({
                viewdefault: _$_[132],
                clist: _$_[133],
                cgrid: _$_[134]
            }))
        }
        _(_$_[509]).hasClass(_$_[510]) && _(_$_[512]).hasClass(_$_[511]) && (pageNavi({
            viewdefault: _$_[139],
            clist: _$_[162],
            cgrid: _$_[163]
        }), vmode({
            viewdefault: _$_[139],
            clist: _$_[162],
            cgrid: _$_[163]
        })), (_(_$_[513]).length || _(_$_[512]).hasClass(_$_[514])) && (lMore({
            viewdefault: _$_[139],
            clist: _$_[515],
            cgrid: _$_[516]
        }), vmode({
            viewdefault: _$_[139],
            clist: _$_[515],
            cgrid: _$_[516]
        }))
    }(jQuery),
    function (A) {
        A.RCWid = function (_, e) {
            var j = this;
            j.$el = A(_), j.init = function () {
                j.options = A.extend({}, A.RCWid.defaultOptions, e), j.$el.html(_$_[517] + (_$_[1] != j.options.color && /hot/.test(j.$el.parents(_$_[518]).attr(_$_[25])) ? _$_[519] + j.options.color + _$_[520] : _$_[1]) + (_$_[521] === j.options.postType ? _$_[522] : _$_[1]) + _$_[523] + (j.options.ShowPage ? _$_[524] : _$_[1]) + rgx[33]);
                var f, v, x, b, w, y, C, k = 0,
                    t = null,
                    T = location.href.replace(rgx[17], _$_[1]),
                    S = document.location.hostname.split(_$_[428]),
                    L = j.options.maxPostsPerTag,
                    P = 3,
                    I = 1,
                    N = _$_[1] === j.options.blogURL ? window.location.protocol + _$_[95] + window.location.host : j.options.blogURL,
                    O = function (_) {
                        for (j.options.ShowPage && function (_) {
                                for (html = _$_[1], number = parseInt(P / 2), number == P - number && (P = 2 * number + 1), start = I - number, start < 1 && (start = 1), maximal = parseInt(_ / L) + 1, maximal - 1 == _ / L && --maximal, akhir = start + P - 1, akhir > maximal && (akhir = maximal), _ = parseInt(I) - 1, 1 < I && (html = 2 == I ? html + _$_[525] : html + (_$_[526] + _ + _$_[527])), 1 < start && (html += _$_[528]), 2 < start && (html += _$_[529]), _ = start; _ <= akhir; _++) html = I == _ ? html + (_$_[530] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[531] + j.options.color + _$_[532]) + _$_[533] + _ + _$_[105]) : 1 == _ ? html + _$_[528] : html + (_$_[526] + _ + _$_[22] + _ + _$_[77]);
                                akhir < maximal - 1 && (html += _$_[529]), akhir < maximal && (html += _$_[526] + maximal + _$_[22] + maximal + _$_[77]), _ = parseInt(I) + 1, I < maximal && (html += _$_[526] + _ + _$_[534]), j.$el.find(_$_[535]).html(html), j.$el.find(_$_[543]).click(function () {
                                    var _ = Number(A(this).attr(_$_[184]));
                                    j.$el.find(_$_[537]).after(_$_[536]), j.$el.find(_$_[538]).html(j.$el.find(_$_[537]).html()), j.$el.find(_$_[537]).html(_$_[1]);
                                    var t = _ * L - (L - 1),
                                        e = j.$el.find(_$_[535]).attr(_$_[539]);
                                    null == e ? A.get(N + _$_[540] + t + _$_[97] + L + _$_[541], O, _$_[130]) : A.get(N + _$_[542] + e + _$_[188] + t + _$_[97] + L + _$_[541], O, _$_[130]), I = _
                                })
                            }(e = parseInt(_.feed.openSearch$totalResults.$t, 10)), k++, v = _.feed.link.length, e = 0; e < v; e++)
                            if (_$_[106] == _.feed.link[e].rel) {
                                f = _.feed.link[e].href;
                                break
                            } if (entry = !0 === j.options.random ? sfArr(_.feed.entry) : _.feed.entry, void 0 !== entry)
                            for (var t = entry.length, e = 0; e < t; e++) {
                                var a, s, $, i, r, n, o, l, d, c = entry[e].link.length;
                                $ = [], s = [];
                                var h, p, m, u, g = _$_[1];
                                for (h = 0; h < c; h++)
                                    if (_$_[106] == entry[e].link[h].rel) {
                                        a = entry[e].link[h].href;
                                        break
                                    } for (h = 0; h < c; h++)
                                    if (_$_[544] == entry[e].link[h].rel && _$_[545] == entry[e].link[h].type) {
                                        i = Number(entry[e].link[h].title.split(_$_[76])[0]);
                                        break
                                    } for (h = 0; h < c; h++) {
                                    if (_$_[107] == entry[e].link[h].rel) {
                                        u = entry[e].link[h].type;
                                        break
                                    }
                                    u = _$_[39]
                                }
                                if (m = _$_[236] === j.options.postType && f !== window.location.protocol + _$_[95] + window.location.host + _$_[55] ? f.substr(f.lastIndexOf(_$_[55]) + 1) : void 0 !== entry[e].category ? entry[e].category[0].term : _$_[1], h = j.options.fbig && entry[e] === entry[0], p = entry[e] !== entry[0], c = _$_[108] in entry[e] ? entry[e].content.$t : _$_[109] in entry[e] ? entry[e].summary.$t : _$_[1], _$_[110] in entry[e] ? ($ = entry[e].media$thumbnail.url, -1 != entry[e].media$thumbnail.url.indexOf(_$_[58]) && ($ = entry[e].media$thumbnail.url.replace(_$_[113], _$_[114]), u = _$_[54])) : rgx[6].test(c) || rgx[8].test(c) ? ($ = rgx[6].exec(rgx[6]), s = rgx[8].exec(c), $ = _$_[53] + (null != $ ? $[5] : s[3]) + _$_[52], u = _$_[54]) : $ = rgx[5].test(c) ? (s = rgx[5].exec(c))[4] : _$_[56], rgx[9].test(c) ? u = _$_[54] : rgx[10].test(c) ? u = _$_[62] : rgx[11].test(c) ? u = _$_[63] : rgx[12].test(c) && (u = rgx[12].exec(c).index <= 5 ? _$_[64] : _$_[39]), rgx[29].test(c) && j.options.review) {
                                    for (g = [], s = 0, n = (g = c.match(rgx[29])).length, o = 0; o < n; o++) s += parseInt(g[o].replace(rgx[29], _$_[66]).replace(/"/g, _$_[1]).replace(/'/g, _$_[1]));
                                    g = s / n, g = _$_[517] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[546] + g.toFixed(1) + _$_[547] + 10 * g.toFixed(1) + _$_[548]
                                }(c = c.replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > j.options.summary && (c = c.substring(0, j.options.summary) + _$_[115]), s = entry[e].title.$t.replace(/"/g, _$_[73]), r = entry[e].published.$t.substring(0, 10), n = entry[e].published.$t.match(/\d+/g), n = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5]), dyn = r.substring(0, 4), o = Number(r.substring(0, 2)).toLocaleString() + Number(r.substring(2, 4)).toLocaleString(), l = r.substring(5, 7), d = r.substring(8, 10), r = entry[e].author[0].name.$t, -1 < window.location.href.indexOf(_$_[549]) && _$_[550] != S[S.length - 1] && (T = _$_[151] + S[0] + _$_[551] + document.location.pathname), j.$el.parents(_$_[552]).length ? T.toLowerCase() != a.toLowerCase() && M(a, s, $, c, o, d, l, i, r, h, p, m, u, g, n, dyn) : M(a, s, $, c, o, d, l, i, r, h, p, m, u, g, n, dyn)
                            }
                        if (k >= j.options.tags.length) {
                            if (0 < j.options.maxPosts && A(_$_[553] + (j.options.maxPosts - 1) + _$_[554], j.$el.find(_$_[555])).remove(), j.$el.find(_$_[537]).html(j.$el.find(_$_[555]).html()).removeClass(_$_[556]), j.$el.find(_$_[557]).remove(), e = j.$el.find(_$_[558]), a = j.$el.parents(_$_[518]).attr(_$_[25]), i = A(_$_[45]).attr(_$_[44]), e.attr(_$_[44], i + _$_[76] + e.attr(_$_[44])).text(i), /(newsticker|timeline|video|gallery|featured|hot|slider)/.test(a) && j.$el.addClass(_$_[559]), /(video|featured|hot|slider)/.test(a) && j.$el.addClass(_$_[560]), a = j.$el.find(_$_[537]), _$_[233] === j.options.postType) a.owlCarousel({
                                nav: !0,
                                autoplay: j.options.auto,
                                navText: [_$_[1], _$_[1]],
                                autoplayTimeout: j.options.slideSpeed,
                                loop: !0,
                                bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                responsiveClass: !0,
                                autoplayHoverPause: !0,
                                animateOut: _$_[239] === j.options.effect && _$_[562],
                                animateIn: _$_[239] === j.options.effect && _$_[563],
                                smartSpeed: 500,
                                items: 1,
                                responsiveRefreshRate: 500
                            }).addClass(_$_[561]);
                            else if (_$_[234] === j.options.postType) a.owlCarousel({
                                autoplay: j.options.auto,
                                margin: 0,
                                loop: !0,
                                autoplayTimeout: j.options.slideSpeed,
                                bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                nav: !0,
                                autoplayHoverPause: !0,
                                navText: [_$_[1], _$_[1]],
                                responsiveBaseElement: j.$el,
                                navContainer: j.$el.parents(_$_[503]).find(_$_[564]),
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
                            }).addClass(_$_[561]);
                            else if (_$_[235] === j.options.postType) a.simplyScroll();
                            else if (_$_[236] === j.options.postType) {
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += j.options.wrapNum) i.slice(e, e + j.options.wrapNum).wrapAll(_$_[566]);
                                a.owlCarousel({
                                    nav: !0,
                                    autoplay: j.options.auto,
                                    navText: [_$_[1], _$_[1]],
                                    autoplayTimeout: j.options.slideSpeed,
                                    loop: !0,
                                    responsiveClass: !0,
                                    autoplayHoverPause: !0,
                                    bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                    animateOut: _$_[239] === j.options.effect && _$_[562],
                                    animateIn: _$_[239] === j.options.effect && _$_[563],
                                    smartSpeed: 500,
                                    items: 1,
                                    responsiveRefreshRate: 500
                                }).addClass(_$_[561])
                            } else if (_$_[237] === j.options.postType) {
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += j.options.wrapNum) i.slice(e, e + j.options.wrapNum).wrapAll(_$_[567]);
                                a.find(_$_[569]).wrapInner(_$_[568]), a.find(_$_[570]).owlCarousel({
                                    nav: !0,
                                    autoplay: j.options.auto,
                                    navText: [_$_[1], _$_[1]],
                                    autoplayTimeout: j.options.slideSpeed,
                                    loop: !0,
                                    navigationText: !1,
                                    bColor: _$_[1] !== j.options.color ? j.options.color : _$_[1],
                                    responsiveClass: !0,
                                    autoplayHoverPause: !0,
                                    animateOut: _$_[239] === j.options.effect && _$_[562],
                                    animateIn: _$_[239] === j.options.effect && _$_[563],
                                    smartSpeed: 500,
                                    items: 1,
                                    responsiveRefreshRate: 500
                                }).addClass(_$_[561])
                            }
                            if (j.options.fbig)
                                for (i = a.children(_$_[565]), e = 0; e < i.length; e += i.length) i.slice(1, e + i.length).wrapAll(_$_[571]);
                            if (j.options.hoverEffect && j.$el.find(_$_[576]).hover(function () {
                                    var _, t = A(this),
                                        e = t.parents(_$_[565]).html(),
                                        a = t.height(),
                                        s = t.offset(),
                                        $ = A(document.body).width(),
                                        i = A(this).parents(_$_[503]).hasClass(_$_[572]) ? _$_[573] : _$_[1];
                                    $ < 320 + (_ = _ + t.width() - 320) ? _ = $ - 330 : _ < 10 && (_ = 10), A(_$_[575]).css({
                                        top: _$_[235] === j.options.postType ? s.top + a : s.top - 350,
                                        left: _
                                    }).addClass(_$_[574] + i).html(e)
                                }, async function () {
                                    var _ = A(this).parents(_$_[503]).hasClass(_$_[572]) ? _$_[573] : _$_[1];
                                    A(_$_[575]).removeClass(_$_[574] + _).html(_$_[1])
                                }), j.$el.find(_$_[577]).each(function () {
                                    b = A(this), x = b.find(_$_[578]), w = x.attr(_$_[49]), y = b.width(), C = y <= 180 ? _$_[579] : y <= 500 ? _$_[47] : _$_[580], (/(list|gallery|newsticker|blogpost|halfpost|complex)/.test(b.parents(_$_[518]).attr(_$_[25])) || b.parents(_$_[305]).hasClass(_$_[581])) && (C = _$_[47]), x.attr(_$_[78], _$_[79] + (-1 != w.indexOf(_$_[80]) ? _$_[81] + w.replace(rgx[7], _$_[55] + C + _$_[55]) + _$_[82] : _$_[57]) + _$_[83]), x.removeAttr(_$_[49])
                                }), j.$el.parents(_$_[518]).addClass(_$_[583]).removeClass(_$_[582]), j.options.animated)
                                if (j.options.startFirst) {
                                    for (i = a.find(_$_[584]), e = 0; e < i.length; e += i.length) i.slice(e, e + i.length).wrapAll(_$_[585]);
                                    (e = j.$el.find(_$_[586])).wrap(_$_[587]), e.simpleSpy().on(_$_[590], function () {
                                        jQuery(this).trigger(_$_[591])
                                    }).on(_$_[588], function () {
                                        jQuery(this).trigger(_$_[589])
                                    })
                                } else {
                                    for (i = a.children(_$_[565]), e = 0; e < i.length; e += i.length + 1) i.slice(e, e + i.length + 1).wrapAll(_$_[585]);
                                    (e = j.$el.find(_$_[586])).wrap(_$_[587]), e.simpleSpy({
                                        limit: 5
                                    }).on(_$_[590], function () {
                                        jQuery(this).trigger(_$_[591])
                                    }).on(_$_[588], function () {
                                        jQuery(this).trigger(_$_[589])
                                    })
                                } chside(j.$el), _$_[1] !== j.options.color && j.$el.parents(_$_[518]).find(_$_[592]).length && j.$el.parents(_$_[518]).find(_$_[564]).children().css({
                                "background-color": j.options.color
                            })
                        }
                    },
                    M = function (_, t, e, a, s, $, i, r, n, o, l, d, c, h, p, m) {
                        for (var u = A(_$_[565], j.$el.find(_$_[555])), g = 0, f = u.length; g < f; g++) {
                            var v = A(_$_[28], u.eq(g)),
                                x = R(v);
                            if (v.attr(_$_[27]) == _) {
                                for (t = ++x, (_ = v).attr(_$_[593], t), j.options.relevantTip && _.attr(_$_[44], j.options.relevantTip.replace(_$_[594], t)), j.options.postScoreClass && _.attr(_$_[25], j.options.postScoreClass + t), _ = g - 1; 0 <= _; _--)
                                    if (t = A(_$_[28], u.eq(_)), R(t) > x) return void(1 < g - _ && u.eq(_).after(u.eq(g)));
                                return void(0 < g && u.eq(0).before(u.eq(g)))
                            }
                        }
                        j.$el.find(_$_[555]).append(_$_[517] + (_$_[521] === j.options.postType ? _$_[522] : _$_[1]) + _$_[595] + (o ? _$_[596] : _$_[1]) + _$_[597] + (_$_[235] === j.options.postType ? _$_[517] + (_$_[1] != j.options.color ? _$_[519] + j.options.color + _$_[520] : _$_[1]) + _$_[598] + p.toLocaleTimeString().replace(/:\d+ /, _$_[76]) + _$_[94] : _$_[1]) + (o || /(n|c)/.test(j.options.postType) ? _$_[517] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[599] + $ + _$_[141] + mName[parseInt(i, 10) - 1] + _$_[142] + m + _$_[600] : _$_[1]) + (j.options.ShowImage ? _$_[601] + (j.$el.parents(_$_[503]).hasClass(_$_[572]) ? _$_[602] : _$_[1]) + _$_[603] + (o ? _$_[604] : _$_[1]) + _$_[605] + c + _$_[606] + t + _$_[607] + _ + _$_[608] + e + _$_[609] + (-1 != e.indexOf(_$_[58]) || -1 != e.indexOf(_$_[610]) ? _$_[59] : _$_[1]) + (j.options.review ? h : _$_[1]) + _$_[611] : _$_[1]) + _$_[517] + (/timeline/.test(j.$el.parents(_$_[503]).attr(_$_[25])) && _$_[1] !== j.options.color ? _$_[612] + (ts_isRTL() ? _$_[613] : _$_[447]) + _$_[614] + j.options.color + _$_[520] : _$_[1]) + _$_[615] + (o ? _$_[616] : _$_[1]) + _$_[617] + (/timeline/.test(j.$el.parents(_$_[503]).attr(_$_[25])) ? _$_[517] + (_$_[1] === j.options.color ? _$_[1] : _$_[618] + j.options.color + _$_[520]) + _$_[619] : _$_[1]) + _$_[620] + (/(featured4|slider1|newsticker)/.test(j.$el.parents(_$_[503]).attr(_$_[25])) && _$_[1] !== j.options.color ? _$_[621] + (/newsticker/.test(j.$el.parents(_$_[503]).attr(_$_[25])) ? _$_[1] : _$_[622]) + _$_[623] + j.options.color + _$_[520] : _$_[1]) + _$_[624] + (_$_[235] === j.options.postType || j.$el.parents(_$_[503]).hasClass(_$_[139]) ? _$_[625] : _$_[1]) + _$_[626] + _ + _$_[22] + t + _$_[627] + (j.options.ShowAuthor ? _$_[628] + n + _$_[629] : _$_[1]) + _$_[630] + dformat.replace(_$_[633], s).replace(_$_[632], Number(i).toLocaleString()).replace(_$_[631], Number($).toLocaleString()) + _$_[105] + (0 < r ? _$_[634] + _ + _$_[635] + r.toLocaleString() + _$_[167] : _$_[1]) + _$_[94] + (l && !j.options.ShowDesc ? _$_[1] : _$_[636] + a + (o ? _$_[637] + _ + _$_[638] + t + _$_[639] : _$_[1]) + _$_[94]) + _$_[94] + (j.options.ShowTags ? _$_[640] + (_$_[1] === j.options.color ? _$_[1] : _$_[519] + j.options.color + _$_[520]) + _$_[641] + d + _$_[607] + j.options.blogURL + _$_[190] + d + _$_[222] + Npage + _$_[22] + d + _$_[167] : _$_[1]) + _$_[642])
                    },
                    R = function (_) {
                        return 0 < (_ = parseInt(_.attr(_$_[593]))) ? _ : 1
                    };
                ! async function () {
                    var _ = (t = j.$el).parents(_$_[552]);
                    if (j.options.tags || (j.options.tags = [], A(_$_[643] + j.options.maxTags + _$_[554]).each(function () {
                            var _ = A.trim(A(this).text().replace(/\n/g, _$_[1])); - 1 == A.inArray(_, j.options.tags) && (j.options.tags[j.options.tags.length] = _)
                        }), _.length || (j.options.tags = [])), 0 !== j.options.tags.length || j.options.recentTitle)
                        if (_.length && A(_$_[644] + (0 === j.options.tags.length ? j.options.recentTitle : j.options.relatedTitle ? j.options.relatedTitle : _$_[1]) + _$_[645]).prependTo(t), 0 === j.options.tags.length) j.options.random ? A.get(N + _$_[646], function (_) {
                            var t = j.options.maxrandom > _.feed.openSearch$totalResults.$t ? _.feed.openSearch$totalResults.$t : j.options.maxrandom;
                            _ = j.options.maxPosts > _.feed.openSearch$totalResults.$t ? 1 : gRdm(1, t - j.options.maxPosts), A.get(N + _$_[647] + j.options.maxPosts + _$_[648] + _ + _$_[649], O, _$_[130])
                        }, _$_[130]) : A.get(N + _$_[647] + j.options.maxPostsPerTag + _$_[541], O, _$_[130]);
                        else
                            for (_ = 0; _ < j.options.tags.length; _++) A.get(N + _$_[542] + j.options.tags[_] + _$_[222] + j.options.maxPostsPerTag + _$_[541], O, _$_[130]), j.options.ShowPage && j.$el.find(_$_[535]).attr(_$_[539], j.options.tags[0])
                }()
            }, j.init()
        }, A.RCWid.defaultOptions = {
            blogURL: _$_[1],
            maxPosts: 5,
            maxTags: 4,
            maxPostsPerTag: 6,
            tags: null,
            ShowComment: !0,
            ShowImage: !0,
            ShowTags: !1,
            ShowAuthor: !1,
            ShowDesc: !1,
            maxrandom: 20,
            hoverEffect: !1,
            random: !0,
            fbig: !1,
            startFirst: !1,
            animated: !1,
            ShowPage: !0,
            auto: !1,
            effect: !1,
            review: !1,
            wrapNum: 4,
            summary: 120,
            color: _$_[1],
            relatedTitle: reltx,
            recentTitle: rectx,
            postScoreClass: _$_[1],
            relevantTip: _$_[1],
            slideSpeed: 5e3,
            postType: _$_[1]
        }, A.fn.RCWid = function (_) {
            return this.each(function () {
                new A.RCWid(this, _)
            })
        }
    }(jQuery),
    async function (v) {
        v.RCom = function (_, t) {
            var f = this;
            f.$el = v(_), f.init = function () {
                f.options = v.extend({}, v.RCom.defaultOptions, t), v.get((_$_[1] === f.options.blogURL ? window.location.protocol + _$_[95] + window.location.host : f.options.blogURL) + _$_[650], function (_) {
                    var t = _$_[1],
                        e = _$_[1];
                    _ = (n = _.feed).author[0].name ? n.author[0].name.$t : f.options.anon;
                    var a = n.author[0].gd$image.src.replace(rgx[7], _$_[111] + f.options.avatarSize + _$_[112]);
                    if (n.entry && 0 !== n.entry.length) {
                        t += _$_[651];
                        for (var s, $, i, r, n, o = 0, l = 0, d = (n = n.entry).length; l < d; ++l) {
                            i = (s = n[l]).published.$t.substring(0, 10);
                            var c = s.author[0].name ? s.author[0].name.$t : f.options.anon,
                                h = !!s.author[0].uri && s.author[0].uri.$t,
                                p = s.author[0].gd$image.src.replace(rgx[7], _$_[111] + f.options.avatarSize + _$_[112]),
                                m = (m = s.content ? s.content.$t : s.summary.$t).replace(/<br *\/?>|[\s]+/gi, _$_[76]).replace(/<.*?>|[<>]/g, _$_[1]).replace(rgx[16], _$_[1]),
                                u = (m = _$_[1] !== m && m.length > f.options.characters ? m.substring(0, f.options.characters) + _$_[115] : m, !1),
                                g = c === _ || p === a;
                            if (!g || f.options.showAdmin) {
                                for ($ = 0, r = s.link.length; $ < r; ++$) e = s.link[$], _$_[106] == e.rel && (u = e.href);
                                e = u.lastIndexOf(_$_[55]) + 1, $ = u.lastIndexOf(_$_[428]), e = u.split(_$_[30]).join(_$_[76]).substring(e, $) + _$_[115], r = s.published.$t.match(/\d+/g), r = new Date(r[0], r[1] - 1, r[2], r[3], r[4], r[5]), s = i.substring(0, 4), $ = i.substring(5, 7), i = i.substring(8, 10), o < f.options.numComments && (o++, t += _$_[652] + (g ? _$_[653] : _$_[654]) + _$_[22], t += f.options.Showimage ? _$_[655] + h + _$_[656] + c + _$_[657] + c + _$_[658] + p + _$_[659] : _$_[1], t += _$_[660] + h + _$_[22] + c + _$_[661] + u + _$_[22] + e + _$_[662] + i + _$_[141] + mName[parseInt($, 10) - 1] + _$_[142] + s + _$_[663] + r.toLocaleTimeString().replace(/:\d+ /, _$_[76]) + _$_[664], t += _$_[665] + m + _$_[94], t += _$_[666])
                            }
                        }
                        f.$el.html(t + _$_[94]), f.options.fs && (t = function (_, t, e) {
                            v(_$_[669]).each(function () {
                                v(this).html(v(this).html().replace(_, _$_[667] + t + _$_[668] + e + _$_[464]))
                            })
                        })(/\scheer/gi, _$_[dM]), chside(f.$el)
                    } else f.$el.html(_$_[670])
                }, _$_[130])
            }, f.init()
        }, v.RCom.defaultOptions = {
            blogURL: _$_[1],
            numComments: mx.com,
            characters: 100,
            avatarSize: 40,
            showAdmin: admBlog,
            anon: _$_[671],
            Showimage: !0,
            defaultAvatar: _$_[672]
        }, v.fn.RCom = function (_) {
            return this.each(function () {
                new v.RCom(this, _)
            })
        }
    }(jQuery), $(_$_[675]).each(function () {
        var _ = rgx[34],
            t = new RegExp(/\[/.source + _.source + /(.*?)(\/?)\]/.source, _$_[673]),
            e = (_ = new RegExp(/\[\//.source + _.source + /\]/.source, _$_[673]), $(this).html());
        t.test(e) && (e = e.replace(t, _$_[674]).replace(_, _$_[94]), $(this).html(e))
    }), $(_$_[683]).each(function () {
        $(this).find(_$_[681]).each(function () {
            var _ = $(this).attr(_$_[44]),
                t = $(this).attr(_$_[676]),
                e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
                a = $(this).html();
            $(this).html(null == a || _$_[1] == a ? _$_[680] : a).attr({
                "data-tab": (null == t || _$_[1] == t ? _$_[1] : e) + (null == _ || _$_[1] == _ ? _$_[679] : _),
                title: _$_[1]
            })
        }), $(this).parents(_$_[518]).addClass(_$_[682])
    }), $(_$_[683]).myTab(), $(_$_[694]).each(function () {
        var s = _$_[1];
        $(this).find(_$_[689]).each(function () {
            var _ = $(this).attr(_$_[44]),
                t = $(this).attr(_$_[676]),
                e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
                a = $(this).html();
            s += _$_[684] + (null == t || _$_[1] == t ? _$_[1] : e) + (null == _ || _$_[685] == _ ? _$_[1] : _) + _$_[686] + (_$_[687] + (null == a || _$_[1] == a ? _$_[688] : a) + _$_[94])
        }), $(this).html(s), $(this).children(_$_[691]).first().addClass(_$_[690]), $(this).children(_$_[693]).first().addClass(_$_[692])
    }), $(_$_[698]).click(function () {
        $(this).next(_$_[693]).addClass(_$_[692]).slideToggle(_$_[695]).siblings(_$_[696]).removeClass(_$_[692]).slideUp(_$_[695]), $(this).toggleClass(_$_[690]), $(this).siblings(_$_[697]).removeClass(_$_[690])
    }), $(_$_[726]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[302]),
            e = _.attr(_$_[699]),
            a = _.attr(_$_[700]),
            s = _.attr(_$_[70]),
            i = _.attr(_$_[701]),
            r = _.attr(_$_[702]),
            n = _.attr(_$_[703]),
            o = _.attr(_$_[704]),
            l = _.attr(_$_[705]),
            d = _.attr(_$_[706]);
        _.replaceWith(_$_[707] + (null == i || _$_[1] == i || _$_[301] == i ? _$_[1] : _$_[708]) + _$_[709] + (null == s || _$_[1] == s ? _$_[710] : s) + _$_[711] + (null == r || _$_[1] == r ? _$_[712] : r) + _$_[713] + (null == d || _$_[1] == d ? _$_[714] : 1 == d ? _$_[715] : d) + _$_[55] + (null == e || _$_[1] == e ? _$_[716] : e) + _$_[717] + (null == a || _$_[1] == a ? _$_[718] : a) + _$_[719] + (null == t || _$_[1] == t ? _$_[720] : t) + _$_[721] + (null == o || _$_[1] == o ? _$_[720] : o) + _$_[722] + (null == l || _$_[1] == l ? _$_[723] : l) + _$_[724] + (null == n || _$_[1] == n ? _$_[720] : n) + _$_[725])
    }), $(_$_[746]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[727]),
            e = _.attr(_$_[728]),
            a = _.attr(_$_[700]),
            s = _.attr(_$_[699]),
            i = _.attr(_$_[70]),
            r = _.attr(_$_[701]),
            n = _.attr(_$_[702]),
            o = _.attr(_$_[729]),
            l = _.attr(_$_[730]);
        _.replaceWith(_$_[731] + (null == r || _$_[1] == r || _$_[301] == r ? _$_[1] : _$_[708]) + _$_[732] + (null == i || _$_[1] == i ? _$_[710] : i) + _$_[711] + (null == n || _$_[1] == n ? _$_[733] : n) + _$_[734] + (null == s || _$_[1] == s ? _$_[735] : s) + _$_[736] + (null == l || _$_[1] == l ? _$_[737] : l) + _$_[738] + (null == o || _$_[1] == o ? _$_[737] : o) + _$_[739] + (null == t || _$_[1] == t ? _$_[740] : t) + _$_[741] + (null == a || _$_[1] == a ? _$_[742] : a) + _$_[743] + (null == e || _$_[1] == e ? _$_[744] : e) + _$_[745])
    }), $(_$_[758]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[70]),
            a = _.attr(_$_[702]),
            s = _.attr(_$_[729]),
            i = _.attr(_$_[701]),
            r = _.attr(_$_[747]),
            n = _.attr(_$_[706]),
            o = _.attr(_$_[748]);
        _.replaceWith(_$_[749] + (null == i || _$_[1] == i || _$_[301] == i ? _$_[1] : _$_[708]) + _$_[709] + (null == e || _$_[1] == e ? _$_[710] : e) + _$_[711] + (null == a || _$_[1] == a ? _$_[750] : a) + _$_[751] + (null == t || _$_[1] == t ? _$_[752] : t) + _$_[753] + (null == n || _$_[1] == n ? _$_[1] : n) + _$_[754] + (null == o || _$_[1] == o ? _$_[301] : o) + _$_[755] + (null == r || _$_[1] == r ? _$_[737] : r) + _$_[756] + (null == s || _$_[1] == s ? _$_[737] : s) + _$_[757])
    }), $(_$_[762]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[70]),
            a = _.attr(_$_[701]),
            s = _.attr(_$_[702]);
        _.replaceWith(_$_[759] + (null == a || _$_[1] == a || _$_[301] == a ? _$_[1] : _$_[708]) + _$_[709] + (null == e || _$_[1] == e ? _$_[710] : e) + _$_[711] + (null == s || _$_[1] == s ? _$_[750] : s) + _$_[760] + (null == t || _$_[1] == t ? _$_[1] : t) + _$_[761])
    }), $(_$_[764]).addClass(_$_[763]), $(_$_[767]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[676]),
            e = _$_[677] + (null == t || _$_[1] == t ? _$_[1] : _$_[678] + t) + _$_[26],
            a = $(this).html();
        null == _ && (_ = _$_[1]), _$_[1] != _ && (_ = _$_[765] + (null == t || _$_[1] == t ? _$_[1] : e) + _ + _$_[94]), $(this).html(_$_[766] + _ + (null == a ? _$_[1] : a) + _$_[94])
    }), $(_$_[778]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[699]),
            e = _.attr(_$_[768]),
            a = _.attr(_$_[769]),
            s = _.attr(_$_[701]),
            i = _$_[770] + e + _$_[771],
            r = _.attr(_$_[70]),
            n = _.attr(_$_[702]);
        _.replaceWith((null == e || _$_[1] == e ? _$_[1] : _$_[772] + (null == s || _$_[1] == s || _$_[301] == s ? _$_[1] : _$_[708]) + _$_[520] + (null == e || _$_[1] == e ? _$_[1] : i) + _$_[773] + (null == a || _$_[1] == a ? _$_[1] : a) + _$_[22]) + _$_[774] + (null == s || _$_[1] == s || _$_[301] == s ? _$_[1] : _$_[708]) + _$_[775] + (null == r || _$_[1] == r ? _$_[1] : r) + _$_[711] + (null == n || _$_[1] == n ? _$_[1] : n) + _$_[658] + (null == t || _$_[1] == t ? _$_[776] : t) + _$_[777] + (null == e || _$_[1] == e ? _$_[1] : _$_[77]))
    }), $(_$_[781]).each(function () {
        $(this).children(_$_[780]).remove()
    }).addClass(_$_[779]), $(_$_[787]).each(function () {
        var _ = $(this).attr(_$_[782]),
            t = $(this).html();
        _ = _$_[783] + (null == _ || _$_[1] == _ ? _$_[784] : _) + _$_[22] + (null == t || _$_[1] == t ? _$_[785] : t) + _$_[786], $(this).replaceWith(_)
    });
for (var e = document.getElementsByTagName(_$_[788]), t = e.length, n = 0; n < t; n++) {
    e[n].innerHTML = _$_[789] + e[n].innerHTML + _$_[790];
    for (var r = e[n].innerHTML.split(/\n/).length, i = 0; i < r; i++) {
        var s = e[n].getElementsByTagName(_$_[791])[0];
        s.innerHTML += _$_[792] + (i + 1) + _$_[105]
    }
}
$(_$_[794]).each(function () {
    $(this).html($(_$_[793]).html())
}), $(_$_[799]).each(function () {
    var _ = $(this).attr(_$_[768]),
        t = $(this).attr(_$_[44]),
        e = $(this).html();
    _ = _$_[223] + (null == _ || _$_[1] == _ ? _$_[231] : _) + _$_[795] + (null == t || _$_[1] == t ? _$_[796] : t) + _$_[792] + (null == e || _$_[1] == e ? _$_[797] : e) + _$_[798], $(this).replaceWith(_)
}), $(_$_[807]).each(function () {
    var s = _$_[1];
    $(this).find(_$_[689]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[768]),
            e = $(this).attr(_$_[699]),
            a = $(this).html();
        s += _$_[800] + e + _$_[801] + (null == t || _$_[1] == t ? e : t) + _$_[802] + (null == _ || _$_[1] == _ ? _$_[1] : _$_[803] + (null == t || _$_[1] == t ? e : t) + _$_[22] + _ + _$_[804]) + (_$_[1] == a ? _$_[1] : _$_[805] + a + _$_[125]) + _$_[664]
    }), $(this).html(s).parents(_$_[518]).addClass(_$_[806]), $(this).owlCarousel({
        nav: !0,
        autoplay: !0,
        navText: [_$_[1], _$_[1]],
        autoplayTimeout: 5e3,
        loop: !0,
        responsiveClass: !0,
        animateOut: _$_[562],
        animateIn: _$_[563],
        autoplayHoverPause: !0,
        smartSpeed: 500,
        items: 1,
        responsiveRefreshRate: 500
    }).addClass(_$_[561])
}), $(_$_[809]).each(function () {
    var s = _$_[1],
        _ = $(this);
    _.find(_$_[689]).each(function () {
        var _ = $(this).attr(_$_[44]),
            t = $(this).attr(_$_[768]),
            e = $(this).attr(_$_[699]),
            a = $(this).html();
        s += _$_[808] + e + _$_[801] + (null == t || _$_[1] == t ? e : t) + _$_[802] + (null == _ || _$_[1] == _ ? _$_[1] : _$_[803] + (null == t || _$_[1] == t ? e : t) + _$_[22] + _ + _$_[804]) + (_$_[1] == a ? _$_[1] : _$_[805] + a + _$_[125]) + _$_[664]
    }), _.html(s), _.owlCarousel({
        autoplay: !0,
        margin: 2,
        loop: !0,
        autoplayTimeout: 5e3,
        nav: !0,
        autoplayHoverPause: !0,
        responsiveBaseElement: _,
        navText: [_$_[1], _$_[1]],
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
    }).addClass(_$_[561])
}), $(_$_[834]).each(function () {
    var _ = $(this),
        s = _.attr(_$_[810]);
    _.html(_.html().replace(/&nbsp;/g, _$_[1])), _.find(_$_[689]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[811]),
            e = (t = Number(null == t || _$_[1] == t ? 0 : t), _.html());
        _.replaceWith(_$_[812] + (null == e || _$_[1] == e ? _$_[813] : e) + _$_[792] + t + _$_[814] + t + _$_[815] + 10 * t + _$_[816])
    }), _.find(_$_[681]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[44]),
            e = _.attr(_$_[199]),
            a = _.html();
        t = _$_[817] + (null == t || _$_[1] == t ? _$_[818] : t) + _$_[819] + (null == a || _$_[1] == a ? _$_[820] : a) + _$_[821] + (null == e || _$_[1] == e ? _$_[822] : e) + _$_[823], null != s && _$_[737] == s && $(_$_[402]).prepend(_$_[824] + (null == e || _$_[1] == e ? _$_[822] : e) + _$_[825]), _.replaceWith(t)
    });
    var t = _.find(_$_[826]),
        e = t.length,
        a = 0;
    t.each(function () {
        a += parseInt($(this).attr(_$_[827]))
    }), e = 10 * (t = (a / e).toFixed(1)) / 100 * 360, $(_$_[828]).html(t), $(_$_[830]).addClass(_$_[829] + 10 * t), $(_$_[833]).css({
        "-webkit-transform": _$_[831] + e + _$_[832],
        "-moz-transform": _$_[831] + e + _$_[832],
        "-ms-transform": _$_[831] + e + _$_[832],
        "-o-transform": _$_[831] + e + _$_[832],
        transform: _$_[831] + e + _$_[832]
    }), _.children(_$_[780]).remove()
}), $(_$_[518]).each(function () {
    var _, t, e, a = $(this),
        s = a.children(_$_[835]),
        i = s.text(),
        r = rgx[33] + _$_[94];
    rgx[18].test(i) ? (i = (_ = i.match(rgx[18]))[0].replace(/(\r\n|\n|\r)/gm, _$_[1]), e = _[1], _ = -1 != (t = void 0 !== _[2] ? _[2] : _$_[1]).indexOf(_$_[80]) ? _$_[836] + t + _$_[771] : _$_[1], t = -1 != t.indexOf(_$_[231]) ? _$_[837] + t + _$_[771] : _$_[1], s.html(_$_[838] + i + _$_[839] + e + _$_[520] + t + _$_[76] + _ + _$_[840] + r), a.addClass(_$_[582])) : rgx[19].test(i) ? (a.addClass(_$_[582]), s.html(_$_[841] + r)) : rgx[20].test(i) ? (a.addClass(_$_[582]), s.html(_$_[842] + r)) : rgx[21].test(i) && (a.addClass(_$_[582]), a = -1 != i.indexOf(_$_[55]) ? i.replace(rgx[22], _$_[1]).replace(/(\r\n|\n|\r)/gm, _$_[1]) : _$_[1], s.html(_$_[838] + a + _$_[843] + r))
});
var title1, title2, title3, winHe = $(window).height();
if ($(_$_[518]).each(function () {
        var _ = $(this),
            t = _.children(_$_[835]),
            e = _.find(_$_[844]),
            a = t.text(),
            s = .1 * _.height() - winHe + _.offset().top,
            i = $(document).scrollTop();
        _.hasClass(_$_[275]) || s < i && ldwid(e, _, t, a)
    }), $(_$_[845]).length && (title1 = $(_$_[846]), title2 = $(_$_[847]), title3 = $(_$_[848]), title1.text().replace(/(\r\n|\n|\r)/gm, _$_[1]) == title2.text().replace(/(\r\n|\n|\r)/gm, _$_[1]) && (title1.html(title2.html()), title2.parent().remove()), title3.length && ($(_$_[849]).html(title3.html()), title3.parent().remove())), $(_$_[860]).each(function () {
        var a = [],
            s = $(this).html(),
            i = $(_$_[851]).attr(_$_[850]),
            _ = $(_$_[852]).attr(_$_[108]),
            t = /\[lock\]/g,
            e = /\[\/lock\]/g;
        t.test(s) && e.test(s) && (_$_[853] == getCookieLocal(_$_[854] + i) ? (s = s.replace(t, _$_[1]).replace(e, _$_[1]), $(this).html(s)) : ($(this).html($(this).html().replace(t, _$_[856]).replace(e, _$_[855])), $(this).find(_$_[859]).each(function () {
            a.push($(this).html()), $(this).replaceWith(_$_[857] + _ + _$_[858])
        }), $(document).on(_$_[267], function (_) {
            if (_$_[8] != typeof _) {
                var t = window.location.href;
                if ((_ = _.url) && (-1 != _.indexOf(t) || -1 != t.indexOf(_))) {
                    s = $(_$_[860]).html();
                    var e = 0;
                    $(_$_[861]).each(function () {
                        _$_[8] != typeof a[e] && $(this).replaceWith(a[e]), e++
                    }), setCookieLocal(_$_[854] + i, _$_[853])
                }
            }
        })))
    }), $(_$_[862]).length && (window.twttr = function (_, t, e) {
        var a, s = _.getElementsByTagName(t)[0];
        return _.getElementById(e) ? void 0 : ((_ = _.createElement(t)).id = e, _.src = _$_[864], s.parentNode.insertBefore(_, s), window.twttr || (a = {
            _e: [],
            ready: function (_) {
                a._e.push(_)
            }
        }))
    }(document, _$_[261], _$_[863]), twttr.ready(function (_) {
        _.events.bind(_$_[865], function (_) {
            $.event.trigger({
                type: _$_[267],
                url: _.target.baseURI
            })
        })
    })), ($(_$_[270]).length || $(_$_[866]).length) && fbsdk(), $(_$_[867]).length) {
    var Display_Reply_Form = function (_) {
            par_id = $(_).attr(_$_[850]), par_id = Valid_Par_Id(par_id), html = $(Cur_Cform_Hdr).html(), _$_[868] == Cur_Cform_Hdr ? (reset_html = _$_[869] + Msgs.addComment + _$_[77], $(Cur_Cform_Hdr).html(reset_html)) : $(Cur_Cform_Hdr).html(_$_[1]), Cur_Cform_Hdr = _$_[870] + par_id, $(Cur_Cform_Hdr).html(html), $(_$_[871]).attr(_$_[699], Cform_Ins_ParID(par_id))
        },
        Reset_Comment_Form = function () {
            html = $(Cur_Cform_Hdr).html(), $(Cur_Cform_Hdr).html(_$_[1]), Cur_Cform_Hdr = _$_[868], $(Cur_Cform_Hdr).html(html), $(_$_[871]).attr(_$_[699], Cur_Cform_Url)
        },
        Cform_Ins_ParID = function (_) {
            return _ = _$_[872] + _ + _$_[873], n_cform_url = Cur_Cform_Url.replace(/#%7B/, _), n_cform_url
        },
        Valid_Par_Id = function (_) {
            return -1 != (r = _.indexOf(_$_[234])) && (_ = _.substring(r + 1)), _
        };
    0 < $(_$_[874]).length && $(_$_[512]).hasClass(_$_[156]) && ($(_$_[879]).each(function () {
        var _ = $(this).html().replace(/\{/g, _$_[876]).replace(/#/g, _$_[875]).replace(/\}/g, _$_[224]);
        $(this).html(_), _ = $(this).children(_$_[877]);
        for (var t = 0; t < _.length; t += _.length + 1) _.slice(t, t + _.length + 1).wrapAll(_$_[878])
    }), $(_$_[874]).each(function () {
        var _ = /(\r\n|\n|\r)/gm,
            t = $(_$_[880]).length ? $(_$_[880]).text().replace(_, _$_[1]) : _$_[881],
            e = (_ = (e = $(this)).children(_$_[216]).html().replace(_, _$_[1]), e.find(_$_[882]).html());
        t === _ && (_$_[1] === $(_$_[883]).html() && $(_$_[883]).html(desnya), $(_$_[884]).html(e), $(_$_[889]).each(function () {
            var _ = $(this).attr(_$_[25]);
            $(this).wrap(_$_[885] + _.replace(_$_[887], _$_[1]).replace(_$_[886], _$_[1]) + _$_[888])
        }))
    }));
    var $postbody = $(_$_[402]).html(),
        $adsisi = $(_$_[890]),
        myrgx = /\[(full-post|left-post|right-post|left-side|right-side|hideadstitle)\]/g;
    if (/\[left-post\]/.test($postbody) ? $(_$_[892]).addClass(_$_[891]) : /\[right-post\]/.test($postbody) ? $(_$_[892]).addClass(_$_[893]) : /\[left-side\]/.test($postbody) ? $(_$_[892]).addClass(_$_[894]) : /\[right-side\]/.test($postbody) ? $(_$_[892]).addClass(_$_[895]) : /\[full-post\]/.test($postbody) && $(_$_[892]).addClass(_$_[896]), /\[hideadstitle\]/.test($postbody) && $(_$_[892]).addClass(_$_[897]), myrgx.test($postbody) && $(_$_[402]).html($postbody.replace(myrgx, _$_[1])), $postbody = $(_$_[402]).html(), /\[ads-post\]/.test($postbody) && ($(_$_[402]).html($postbody.replace(/\[ads-post\]/, _$_[898])), $(_$_[899]).html($adsisi.detach())), $postbody = $(_$_[402]).html(), $(_$_[900]).length && !/\[hidetitleads\]/.test($postbody) && ($(_$_[402]).before(_$_[901] + (tbline ? _$_[902] : _$_[1]) + _$_[903] + (tbline ? _$_[904] : _$_[1]) + _$_[642]), $(_$_[905]).html($(_$_[900]).detach()), !hecpt && $(_$_[400]).length && ($(_$_[907]).prepend(_$_[906] + $(_$_[400]).html() + _$_[94]), $(_$_[400]).remove()), $(_$_[908]).length)) {
        var len = $(_$_[909]).length ? 3 : 8;
        $(_$_[908]).RCWid({
            maxPosts: len,
            maxPostsPerTag: 9,
            ShowImage: !1,
            ShowComment: !0,
            random: _$_[238] === blinest,
            tags: /(recent|random)/.test(blinest) ? [] : null,
            ShowAuthor: !1
        })
    }
    if ($(_$_[910]).length && !/\[hidebottomads\]/.test($postbody) && ($(_$_[914]).before(_$_[911] + (bbline ? _$_[902] : _$_[1]) + _$_[22] + (bbline ? _$_[912] : _$_[1]) + _$_[913]), $(_$_[915]).html($(_$_[910]).detach()), $(_$_[916]).length && $(_$_[916]).RCWid({
            maxPosts: 5,
            maxPostsPerTag: 9,
            ShowImage: !0,
            ShowComment: !0,
            random: _$_[238] === btlinest,
            tags: /(recent|random)/.test(btlinest) ? [] : null,
            ShowAuthor: !1
        })), /\[(hidetitleads|hideendads)\]/.test($postbody) && $(_$_[402]).html($postbody.replace(/\[(hidetitleads|hideendads)\]/g, _$_[1])), $postbody = $(_$_[402]).html(), /\[next\]/.test($postbody)) {
        $(_$_[851]).prepend(_$_[917]), $(_$_[914]).before(_$_[918]), $(_$_[402]).prepend(_$_[920]).append(_$_[919]);
        var pbodyhtml = $(_$_[402]).html();
        $(_$_[402]).html(pbodyhtml.replace(/\[fnt\]/g, _$_[922]).replace(/\[next\]/g, _$_[921]).replace(/\[lnt\]/g, _$_[94]));
        var show_per_page = 1,
            $this = $(_$_[851]);
        contentnya = $this.find(_$_[402]), number_of_items = contentnya.children().length, number_of_pages = Math.ceil(number_of_items / show_per_page), pageplace = $this.find(_$_[923]), curpagenya = $this.find(_$_[924]), perpagenya = $this.find(_$_[925]), curpagenya.val(0), perpagenya.val(show_per_page);
        for (var navigation_html = _$_[926], current_link = 0; number_of_pages > current_link;) navigation_html += _$_[927] + current_link + _$_[928] + current_link + _$_[22] + (current_link + 1) + _$_[77], current_link++;
        navigation_html += _$_[929], pageplace.html(navigation_html), pageplace.find(_$_[931]).addClass(_$_[930]), contentnya.children().css(_$_[180], _$_[932]), contentnya.children().slice(0, show_per_page).css(_$_[180], _$_[181]);
        var go_to_page = function (_) {
            var t = parseInt(perpagenya.val());
            start_from = _ * t, end_on = start_from + t, contentnya.children().css(_$_[180], _$_[932]).slice(start_from, end_on).css(_$_[180], _$_[181]), $this.find(_$_[934] + _ + _$_[935]).addClass(_$_[930]).siblings(_$_[933]).removeClass(_$_[930]), curpagenya.val(_), $(_$_[205]).animate({
                scrollTop: $(_$_[402]).offset().top - 80
            }, 1e3)
        };
        $this.find(_$_[937]).on(_$_[9], function () {
            var _ = $this.find(_$_[933]);
            return new_page = parseInt(curpagenya.val()) - 1, 1 == _.prev(_$_[936]).length && go_to_page(new_page), !1
        }), $this.find(_$_[938]).on(_$_[9], function () {
            var _ = $this.find(_$_[933]);
            return new_page = parseInt(curpagenya.val()) + 1, 1 == _.next(_$_[936]).length && go_to_page(new_page), !1
        }), $this.find(_$_[936]).on(_$_[9], function () {
            var _ = $(this).attr(_$_[939]);
            return go_to_page(_), !1
        }), $this.find(_$_[940]).on(_$_[9], function () {
            return $(this).attr(_$_[939]), contentnya.children().css(_$_[180], _$_[181]), pageplace.hide(), $(_$_[205]).animate({
                scrollTop: $(_$_[402]).offset().top - 80
            }, 1e3), !1
        })
    }
    $(_$_[954]).each(function () {
        var _ = $(this).attr(_$_[699]);
        $(this).attr(_$_[699], _.replace(/\/s[0-9]+(\-c)?\//, _$_[953])).addClass(_$_[426])
    }), $(_$_[507]).append(_$_[955]), $(_$_[956]).append($(_$_[417])), $(_$_[417]).myTab(), 1 == $(_$_[957]).length && $(_$_[958]).hide(), $(_$_[964]).each(function () {
        var _ = $(this),
            t = _.attr(_$_[44]),
            e = _.parent(_$_[28]),
            a = _.parents(_$_[959]);
        null == t && _$_[1] == t || !/\{featured\}/.exec(t) || (_.attr(_$_[44], t.replace(/\{featured\}/, _$_[1])), e.length ? e.addClass(_$_[960]) : _.addClass(_$_[960]), a.length && (a.addClass(_$_[556]), _ = a.find(_$_[961]).text(), a.find(_$_[963]).append(_$_[962] + _ + _$_[105])))
    });
    var txtnyaaa = $(_$_[402]).html(),
        imgjd = [],
        pfeat = (imgjd = /<amp-img\s+[^>]*src="([^"]*)"[^>]*>/.exec(txtnyaaa), $(_$_[963]));
    if (pfeat.length) $(_$_[963]).each(function () {
        $(_$_[965]).append($(this))
    }), 1 < pfeat.length && ($(_$_[965]).wrapInner(_$_[966]), $(_$_[967]).owlCarousel({
        nav: !0,
        navText: [_$_[1], _$_[1]],
        loop: !0,
        responsiveClass: !0,
        autoplayHoverPause: !0,
        smartSpeed: 500,
        items: 1,
        responsiveRefreshRate: 500
    }).addClass(_$_[561]));
    else if (null != imgjd && imgjd.index <= 480 && fpost) {
        var img = $(_$_[964]).first(),
            par = img.parent(_$_[28]),
            pars = img.parents(_$_[959]),
            gpars = img.parents(_$_[968]),
            pars2 = img.parents(_$_[969]);
        if (!gpars.length) {
            if ($(_$_[965]).append(par.length ? par : img), pars2.addClass(_$_[556]), pars.length) {
                var text = pars.find(_$_[961]).text();
                $(_$_[970]).append(_$_[962] + text + _$_[105]), pars.addClass(_$_[556])
            }
            $(_$_[971]).length && $(_$_[971]).removeAttr(_$_[78])
        }
    }
    var link = $(_$_[852]).attr(_$_[108]);
    $(_$_[401]).after(_$_[974] + link + _$_[975]), $(_$_[977]).click(function () {
        var _ = $(this);
        return _.hasClass(_$_[18]) ? ($(_$_[976]).hide(), _.removeClass(_$_[18])) : (_.addClass(_$_[18]), $(_$_[976]).show().children().focus().select()), !1
    }), $(_$_[979]).addClass(_$_[978])
}
$(_$_[980]).each(function () {
    $(this).html($(this).html().replace(rgx[16], _$_[1]))
});
var $outer = $(_$_[981]),
    $contact = $(_$_[982]);
$(_$_[984]).click(function () {
    return $contact.hasClass(_$_[583]) || ($contact.addClass(_$_[583]), $outer.addClass(_$_[983])), !1
}), $(_$_[985]).click(function () {
    return $contact.removeClass(_$_[583]), $outer.removeClass(_$_[983]), !1
}), $(document).on(_$_[9], function (_) {
    $(_.target).is(_$_[986]) || ($contact.removeClass(_$_[583]), $outer.removeClass(_$_[983]))
}), $(_$_[988]).each(function () {
    var _ = $(this);
    _.parents(_$_[503]), _ = _.html(), $(_$_[987]).append(_)
}), $(_$_[1009]).one(_$_[590], function () {
    var _ = $(this),
        e = _.find(_$_[35]),
        t = e.text();
    if (/grid/g.test(t)) t = t.replace(/grid\//g, _$_[1]), _.addClass(_$_[581]), e.RCWid({
        maxPosts: 4,
        random: _$_[238] === t,
        review: !hrev,
        ShowTags: !!/(recent|random)/.test(t),
        tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
    }).addClass(_$_[989]), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[132]);
    else if (/mcarousel/g.test(t)) {
        var a = _.parents(_$_[987]);
        t = t.replace(/mcarousel\//g, _$_[1]), _.addClass(_$_[581]), e.RCWid({
            maxPosts: 9,
            random: _$_[238] === t,
            review: !hrev,
            auto: aplay,
            postType: a.length ? _$_[1] : _$_[234],
            ShowTags: !!/(recent|random)/.test(t),
            tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
        }).addClass(_$_[989]), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[994])
    } else if (/mtab/g.test(t)) {
        a = (t = t.replace(/mtab\//g, _$_[1])).split(_$_[217]), t = _$_[995];
        for (var s = 0; s < a.length; s++) t += _$_[256] + a[s] + _$_[22] + a[s] + _$_[94];
        e.html(t + _$_[94]), e.find(_$_[996]).myTab(), _.addClass(_$_[581]), e.find(_$_[260]).each(function () {
            var _ = $(this).text();
            $(this).RCWid({
                maxPosts: 4,
                review: !hrev,
                tags: _.split(_$_[217])
            }).addClass(_$_[989]), $(this).append(_$_[997] + _ + _$_[222] + Npage + _$_[993])
        }), e.addClass(_$_[998])
    } else /mbig/g.test(t) ? (t = t.replace(/mbig\//g, _$_[1]), _.addClass(_$_[581]), e.RCWid({
        maxPosts: 7,
        random: _$_[238] === t,
        maxPostsPerTag: /(recent|random)/.test(t) || 1 == t.split(_$_[217]).length ? 7 : 4,
        tags: /(recent|random)/.test(t) ? null : t.split(_$_[217]),
        fbig: !0,
        review: !hrev,
        summary: 100
    }), e.append(_$_[990] + (_$_[238] === t ? _$_[991] : _$_[1]) + _$_[992] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[993]).addClass(_$_[999])) : /links/g.test(t) && (_.addClass(_$_[581]), e.html(_$_[1]), e.addClass(_$_[1e3]), _ = $(_$_[1001]), $(_$_[1002]).hide(), _.each(function () {
        var _ = $(this).children(_$_[216]).html(),
            t = $(this).children(_$_[835]).html();
        e.append(_$_[1003] + _ + _$_[1004] + t + _$_[642])
    }), e.find(_$_[835]).each(function () {
        if (texnya = $(this).text(), /gridpost/g.test(texnya)) {
            var _ = $(this).parents(_$_[987]),
                t = texnya.replace(/gridpost\//g, _$_[1]).replace(/(\r\n|\n|\r)/gm, _$_[1]);
            $(this).RCWid({
                maxPosts: 4,
                random: _$_[238] === t,
                ShowTags: !!/(recent|random)/.test(t),
                review: !hrev,
                postType: _.length ? _$_[1] : _$_[234],
                tags: /(recent|random)/.test(t) ? null : t.split(_$_[217])
            }).addClass(_$_[989]), (_ = $(this).parent(_$_[1005])).addClass(_$_[1006]), _$_[238] !== t && (_.find(_$_[216]).wrapInner(_$_[1007] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[224]), _.find(_$_[216]).append(_$_[1008] + (_$_[220] === t ? _$_[1] : _$_[221] + t) + _$_[222] + Npage + _$_[22] + mtx + _$_[77]))
        }
    }))
}), $(_$_[1011]).html($(_$_[1010]).html()), $(_$_[1013]).html($(_$_[1012]).html()), $(_$_[1015]).click(function () {
    var _ = $(this).parent(_$_[35]).children(_$_[37]);
    return _.is(_$_[1014]) ? (_.slideDown(), $(this).addClass(_$_[18])) : (_.slideUp(), $(this).removeClass(_$_[18])), !1
}), $(_$_[987]).css({
    "max-height": $(window).height() - 140
});
var maxSummaryLength = sumLength,
    olderLink = _$_[1016] + ptx + _$_[1017],
    newerLink = _$_[1018] + ntx + _$_[1017],
    defaultImage = _$_[776],
    getThumb = function (_, t) {
        var e, a = t;
        e = _.content.$t;
        try {
            a = _.media$thumbnail.url
        } catch (_) {
            a = rgx[6].test(e) || rgx[8].test(e) ? (a = rgx[6].exec(rgx[6]), e = rgx[8].exec(e), _$_[53] + (null != a ? a[5] : e[3]) + _$_[51]) : rgx[5].test(e) ? (e = rgx[5].exec(e))[4] : t
        }
        return a
    },
    setLink = function (_, t, e, a) {
        var s = a.published.$t.match(/\d+/g);
        s = new Date(s[0], s[1] - 1, s[2], s[3], s[4], s[5]), e = getThumb(a, e);
        var i = $(_).attr(_$_[27]);
        if ((n = (n = _$_[108] in a ? a.content.$t : _$_[109] in a ? a.summary.$t : _$_[1]).replace(rgx[15], _$_[1]).replace(rgx[16], _$_[1]).replace(/"/g, _$_[73])).length > maxSummaryLength) var r = (n = n.substring(0, maxSummaryLength)).lastIndexOf(_$_[76]),
            n = n.substring(0, r) + _$_[115];
        t = t.replace(/\[title\]/g, a.title.$t).replace(/\[date\]/g, s.toLocaleDateString().replace(/\[datetime\]/g, s.toLocaleString().replace(/\[summary\]/g, n)).replace(/\[thumburl\]/g, e)).replace(/\[url\]/g, i), s = _$_[1], _$_[1] != e && (s = _$_[1019] + e + _$_[22]), t = t.replace(/\[amp-img\]/g, s), $(_).replaceWith(t)
    },
    setOlderLink = function (_) {
        setLink(_$_[1020], olderLink, defaultImage, _)
    },
    setNewerLink = function (_) {
        setLink(_$_[1021], newerLink, defaultImage, _)
    };
$(_$_[1024]).each(function () {
    var _ = $(this).attr(_$_[44]),
        t = $(this).attr(_$_[1022]);
    $(_$_[1023]).replaceText(_, t)
});
var target, scroll, lastScrollTop = 0;
$(window).on(_$_[1025], function () {
    var _ = $(this).scrollTop();
    fixM && (_ >= $(_$_[1026]).height() + 60 ? ($(_$_[1028]).addClass(_$_[1027]), lastScrollTop < _ ? $(_$_[1026]).hasClass(_$_[1029]) && $(_$_[1026]).removeClass(_$_[1029]) : $(_$_[1026]).addClass(_$_[1029]), lastScrollTop = _) : $(_$_[1028]).removeClass(_$_[1027]), $(_$_[1031]).hasClass(_$_[1030]) || $(_$_[1031]).addClass(_$_[1030])), sSide && 960 < $(this).width() && (1 < $(_$_[206]).width() && stickside($(_$_[206]), _$_[1032], _), 1 < $(_$_[1033]).width() && stickside($(_$_[1033]), _$_[1032], _), $(_$_[1031]).hasClass(_$_[1034]) || $(_$_[1031]).addClass(_$_[1034]));
    var t, e, a, s, i, r, n, o, l, d = $(_$_[518]).length;
    if ($(_$_[1035]).length < d) {
        var c = 1 <= _;
        $(_$_[518]).each(function () {
            if (!$(this).hasClass(_$_[275])) {
                var _ = $(this),
                    t = _.children(_$_[835]),
                    e = _.find(_$_[844]),
                    a = t.text();
                c && ldwid(e, _, t, a)
            }
        })
    }
    if ($(_$_[1036]).length || fbsdk(), $(_$_[354]).length && $(_$_[509]).hasClass(_$_[1037]) && $(_$_[1038]).length && !$(_$_[354]).hasClass(_$_[1039]) && ((l = (o = document).createElement(_$_[261])).src = _$_[95] + dsqsn + _$_[1040], l.setAttribute(_$_[1041], +new Date), (o.head || o.body).appendChild(l), $(_$_[354]).addClass(_$_[1039])), $(_$_[1042]).length && $(_$_[1043]).length && !$(_$_[1042]).hasClass(_$_[1044])) {
        var h = $(_$_[1042]).attr(_$_[44]);
        t = window.SPOTIM = {}, e = document, a = _$_[1045], n = (s = e.getElementsByTagName(_$_[261]))[s.length - 1].parentNode, t.spotId = h, i = t.parentElement = n, (r = e.createElement(_$_[261])).type = _$_[408], r.async = !0, r.src = (_$_[410] === e.location.protocol ? _$_[409] : _$_[80]) + _$_[1046] + a, (i || e.body || e.head).appendChild(r), $(_$_[1042]).addClass(_$_[1044])
    }
    $(_$_[1047]).length && !$(_$_[1048]).length && socialct($(_$_[851])), (d = $(_$_[146]).attr(_$_[44])) && _$_[1] != d && $(_$_[512]).hasClass(_$_[156]) && !$(_$_[1050]).hasClass(_$_[1049]) && ($(_$_[1050]).addClass(_$_[1049]), $.getJSON(_$_[1051] + encodeURIComponent(d) + _$_[1052], function (_) {
        1 < (_ = parseInt(_.feed.openSearch$totalResults.$t)) ? $.getJSON(_$_[1053] + (_ - 1) + _$_[1054], function (_) {
            setNewerLink(_.feed.entry[0]), 1 < parseInt(_.feed.openSearch$totalResults.$t) - parseInt(_.feed.openSearch$startIndex.$t) && setOlderLink(_.feed.entry[2])
        }) : $.getJSON(_$_[1055], function (_) {
            setOlderLink(_.feed.entry[0])
        })
    })), $(_$_[1056]).length && !$(_$_[1057]).length && $(_$_[1056]).each(function () {
        $(this).attr(_$_[78], _$_[1058] + $(this).attr(_$_[49]) + _$_[1059]), $(this).removeAttr(_$_[49]), $(this).addClass(_$_[1060])
    }), 250 <= _ ? $(_$_[1062]).addClass(_$_[1061]) : $(_$_[1062]).removeClass(_$_[1061]), shreco && $(_$_[1063]).length && $(_$_[512]).hasClass(_$_[156]) && ($(_$_[1064]).length || ($(_$_[981]).append(_$_[1065] + recotx + _$_[1066]), $(_$_[1067]).RCWid({
        maxPosts: 2,
        maxPostsPerTag: 4,
        ShowComment: !0,
        ShowImage: !0,
        ShowDesc: !1,
        summary: 100,
        ShowAuthor: hauthor
    }), $(_$_[1070]).on(_$_[9], function () {
        return $(_$_[1064]).hasClass(_$_[1068]) ? $(_$_[1064]).removeClass(_$_[1068]).addClass(_$_[1069]) : $(_$_[1064]).addClass(_$_[1068]), !1
    })), _ > $(_$_[1071]).offset().top - 400 && _ < $(_$_[1072]).offset().top - $(_$_[1072]).height() && 960 < $(this).width() ? $(_$_[1064]).addClass(_$_[1068]) : $(_$_[1064]).removeClass(_$_[1068])), shrel && 1 < _ && !$(_$_[1074]).hasClass(_$_[1073]) && $(_$_[1074]).RCWid({
        maxPosts: _$_[359] === relst ? mx.rl : _$_[1076] === relst ? mx.fb1 : 6,
        maxPostsPerTag: 6,
        auto: aplay,
        postType: _$_[359] === relst ? _$_[234] : _$_[1],
        ShowDesc: _$_[1076] === relst
    }).addClass(_$_[1075] + relst)
}), $(_$_[1063]).each(function () {
    var e, a = 1,
        s = $(this);
    e = $(this).text().replace(/(\r\n|\n|\r)/gm, _$_[1]), $(_$_[1079]).each(function () {
        var _, t = $(this);
        _ = t.attr(_$_[44]).replace(/(\r\n|\n|\r)/gm, _$_[1]), a = t.attr(_$_[1077]), e !== _ || s.attr(_$_[1078]) || s.attr(_$_[1078], a)
    })
}), $(_$_[1084]).on(_$_[9], function (_) {
    location.pathname.replace(/^\//, _$_[1]) == this.pathname.replace(/^\//, _$_[1]) && location.hostname == this.hostname && (target = (target = $(this.hash)).length ? target : $(_$_[1080] + this.hash.slice(1) + _$_[935])).length && (_$_[1081] == typeof document.body.style.transitionProperty ? (_.preventDefault(), (_ = $(document).height() - $(window).height()) < (scroll = target.offset().top) && (scroll = _), $(_$_[153]).css({
        "margin-top": $(window).scrollTop() - scroll + _$_[297],
        transition: _$_[1083]
    }).data(_$_[1082], !0)) : $(_$_[205]).animate({
        scrollTop: scroll
    }, 1e3))
}), $(_$_[153]).on(_$_[1085], function (_) {
    _.target == _.currentTarget && !0 === $(this).data(_$_[1082]) && ($(this).removeAttr(_$_[78]).data(_$_[1082], !1), $(_$_[205]).scrollTop(scroll))
}), $(window).on(_$_[1086], function () {
    $(_$_[1088]).each(function () {
        $(this).width() < 680 ? $(this).addClass(_$_[1087]) : $(this).removeClass(_$_[1087])
    }), (r = (t = $(_$_[154])).width()) < 680 ? t.addClass(_$_[1089]) : t.removeClass(_$_[1089]), $(_$_[1090]).length || $(_$_[1092]).append($(_$_[1091])), $(_$_[1093]).length && (r = $(_$_[1094]).width(), $(_$_[1095]).css({
        width: r
    }));
    var _ = $(window).width(),
        t = $(_$_[1096]).height(),
        e = $(_$_[1097]).height(),
        a = $(_$_[207]).height(),
        s = $(_$_[1098]).height(),
        i = $(_$_[209]).height(),
        r = $(_$_[1033]).width();
    960 < _ ? (t < (_ = e + a + s + i) ? $(_$_[1096]).css(_$_[1099], _ + _$_[297]) : $(_$_[1096]).css(_$_[1099], _$_[301]), r < 100 && $(_$_[1033]).addClass(_$_[556])) : ($(_$_[1096]).css(_$_[1099], _$_[301]), 100 < r && $(_$_[1033]).removeClass(_$_[556]))
}).trigger(_$_[1086]);
var Bamboo = function (t, _) {
    async function e(_) {
        for (i in this.options = {
                menu: !0,
                breakpoint: 1e3,
                menuWidth: 300,
                headerHeight: 50,
                snapThreshold: null,
                resize: null
            }, _) this.options[i] = _[i];
        this.resizeSite(), $(t).on(c, this.resizeSite.bind(this)), n.on(h, this._move.bind(this)), r.on(p, this._end.bind(this))
    }
    $(_$_[1106]);
    var a, s, r = $(_$_[981]),
        n = r.parent().children(_$_[1107]),
        o = (s = !1, _$_[1108] in t || t.DocumentTouch && _ instanceof DocumentTouch ? (s = !0, $(_$_[153]).addClass(_$_[1109])) : $(_$_[153]).addClass(_$_[16]), s),
        l = (a = 0, navigator.userAgent.match(/(iPhone|iPod)/i) && -1 != navigator.userAgent.indexOf(_$_[1110]) && -1 == navigator.userAgent.indexOf(_$_[1111]) && (a = 60), _$_[1112] in t.navigator && t.navigator.standalone && (a = 0), a),
        c = _$_[1114] in t ? _$_[1115] : _$_[1086],
        p = o ? _$_[1120] : _$_[1121];
    return e.prototype = {
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
            return l
        },
        resizeSite: function () {
            this.info.docHeight = $(t).height(), this.info.docWidth = $(t).width(), this.layout(), this.snapThreshold = null === this.options.snapThreshold ? Math.round(.25 * this.info.docWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.info.docWidth * this.options.snapThreshold.replace(_$_[71], _$_[1]) / 100) : this.options.snapThreshold, this.options.resize && this.options.resize()
        },
        layout: function () {
            this.desktop = !(this.info.docWidth < this.options.breakpoint)
        },
        _move: function (_) {
            if (this.initiated && !this.desktop && this.options.menu) {
                var t = o ? _.originalEvent.touches[0] : _;
                this.stepsX += Math.abs(t.pageX - this.pointX), this.stepsY += Math.abs(t.pageY - this.pointY), this.stepsX < 10 && this.stepsY < 10 || (!this.directionLocked && this.stepsY > this.stepsX ? this.initiated = !1 : (_.preventDefault(), this.directionLocked = !0, this.ox && (_ = parseInt(t.pageX) - this.ox, this.dx = _ - this.x, this.x = _, this._moveContainer(_))))
            }
        },
        _end: function (_) {
            this.initiated && !this.desktop && this.options.menu && (_ = parseInt((o ? _.originalEvent.changedTouches[0] : _).pageX) - parseInt(this.ox), this.dx <= 0 && !this.tgt.is(_$_[1123]) ? this._animateTo(_, 0) : this._animateTo(_, this.options.menuWidth), 0 === this.dx && 0 === _ && this.tgt.is(_$_[1106]) && this._animateTo(this.options.menuWidth, this.options.menuWidth), this.ox = null, this.dx = 0, this.initiated = !1)
        },
        _animateTo: function (_, t) {
            n.css({
                "transition-duration": Math.floor(100 * _ / this.snapThreshold) + _$_[1124],
                transform: _$_[1125] + t + _$_[1126] + d
            }), this._toggleCover(t)
        },
        _moveContainer: function (_) {
            n.css({
                transform: _$_[1125] + _ + _$_[1126] + d
            })
        },
        _toggleCover: function (_) {
            _ > this.options.menuWidth - 50 ? (r.addClass(_$_[1127]), $(_$_[1129]).addClass(_$_[1128])) : (r.removeClass(_$_[1127]), $(_$_[1129]).removeClass(_$_[1128]))
        }
    }, e
}
//firebase
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(17(){17 g(a){au a;}19 aa=8o 0,j=!0,k=37,l=!1;17 ba(a){1a 17(){1a 13[a]}}17 o(a){1a 17(){1a a}}19 r,ca=13;17 da(){}17 ea(a){a.3I=17(){1a a.ed?a.ed:a.ed=1e a}}17 fa(a){19 b=1k a;1c("1z"==b)1c(a){1c(a 3J 38)1a"4P";1c(a 3J 69)1a b;19 c=69.1b.1l.1v(a);1c("[1z 7k]"==c)1a"1z";1c("[1z 38]"==c||"3r"==1k a.1d&&"1u"!=1k a.6L&&"1u"!=1k a.6M&&!a.6M("6L"))1a"4P";1c("[1z 7l]"==c||"1u"!=1k a.1v&&"1u"!=1k a.6M&&!a.6M("1v"))1a"17"}1n 1a"37";1n 1c("17"==b&&"1u"==1k a.1v)1a"1z";1a b}17 s(a){1a a!==aa}17 2a(a){19 b=fa(a);1a"4P"==b||"1z"==b&&"3r"==1k a.1d}17 u(a){1a"3s"==1k a}17 1T(a){1a"3r"==1k a}17 1W(a){19 b=1k a;1a"1z"==b&&a!=k||"17"==b}1w.3K(8p*1w.4Q()).1l(36);17 2m(a,b,c){1a a.1v.2n(a.7m,1j)}17 2o(a,b,c){a||g(1t());1c(2<1j.1d){19 d=38.1b.6N.1v(1j,2);1a 17(){19 c=38.1b.6N.1v(1j);38.1b.av.2n(c,d);1a a.2n(b,c)}}1a 17(){1a a.2n(b,1j)}}17 v(a,b,c){v=7l.1b.7m&&-1!=7l.1b.7m.1l().3t("aw 6O")?2m:2o;1a v.2n(k,1j)}17 1H(a,b){17 c(){}c.1b=b.1b;a.6a=b.1b;a.1b=1e c};17 2p(a){a=5u(a);1c(/^\\s*$/.3L(a)?0:/^[\\],:{}\\s\\7n\\7o]*$/.3L(a.3M(/\\\\["\\\\\\/ax]/g,"@").3M(/"[^"\\\\\\n\\r\\7n\\7o\\7p-\\ay\\az-\\7q\\aA-\\aB]*"|aC|aD|37|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,"]").3M(/(?:^|:|,)(?:[\\s\\7n\\7o]*\\[)+/g,"")))3N{1a aE("("+a+")")}3O(b){}g(1t("aF 4R 3s: "+a))}17 2O(){13.2q=aa}17 2b(a,b,c){6P(1k b){1J"3s":2r(b,c);1C;1J"3r":c.1g(aG(b)&&!8q(b)?b:"37");1C;1J"7r":c.1g(b);1C;1J"1u":c.1g("37");1C;1J"1z":1c(b==k){c.1g("37");1C}1c("4P"==fa(b)){19 d=b.1d;c.1g("[");1f(19 e="",f=0;f<d;f++)c.1g(e),e=b[f],2b(a,a.2q?a.2q.1v(b,5u(f),e):e,c),e=",";c.1g("]");1C}c.1g("{");d="";1f(f 1o b)69.1b.6Q.1v(b,f)&&(e=b[f],"17"!=1k e&&(c.1g(d),2r(f,c),c.1g(":"),2b(a,a.2q?a.2q.1v(b,f,e):e,c),d=","));c.1g("}");1C;1J"17":1C;3P:g(1t("6b 2s: "+1k b))}}19 2c={\'"\':\'\\\\"\',"\\\\":"\\\\\\\\","/":"\\\\/","\\b":"\\\\b","\\f":"\\\\f","\\n":"\\\\n","\\r":"\\\\r","\\t":"\\\\t","\\aH":"\\\\aI"},2P=/\\7s/.3L("\\7s")?/[\\\\\\"\\7p-\\7q\\8r-\\7s]/g:/[\\\\\\"\\7p-\\7q\\8r-\\aJ]/g;17 2r(a,b){b.1g(\'"\',a.3M(2P,17(a){1c(a 1o 2c)1a 2c[a];19 b=a.6R(0),e="\\\\u";16>b?e+="aK":8s>b?e+="aL":aM>b&&(e+="0");1a 2c[a]=e+b.1l(16)}),\'"\')};17 2d(a){1a"1u"!==1k 4R&&s(4R.8t)?4R.8t(a):2p(a)}17 w(a){1c("1u"!==1k 4R&&s(4R.8u))a=4R.8u(a);1n{19 b=[];2b(1e 2O,a,b);a=b.39("")}1a a};17 2e(a){1f(19 b=[],c=0,d=0;d<a.1d;d++){19 e=a.6R(d);8v<=e&&aN>=e&&(e-=8v,d++,y(d<a.1d,"aO aP aQ aR aS."),e=8w+(e<<10)+(a.6R(d)-aT));6c>e?b[c++]=e:(aU>e?b[c++]=e>>6|aV:(8w>e?b[c++]=e>>12|aW:(b[c++]=e>>18|aX,b[c++]=e>>12&63|6c),b[c++]=e>>6&63|6c),b[c++]=e&63|6c)}1a b};17 z(a,b,c,d){19 e;d<b?e="at aY "+b:d>c&&(e=0===c?"7t":"8x aZ 8y "+c);e&&g(1t(a+" 1M: b0 6d 4S "+d+(1===d?" 6S.":" 1j.")+" b1 "+e+"."))}17 A(a,b,c){19 d="";6P(b){1J 1:d=c?"b2":"8z";1C;1J 2:d=c?"8A":"b3";1C;1J 3:d=c?"b4":"b5";1C;1J 4:d=c?"b6":"b7";1C;3P:2Q.b8(l,"b9 6d 4S bf > 4.  bg 2t 1A 8B?")}1a a+" 1M: "+(d+" 6S ")}17 B(a,b,c,d){(!d||s(c))&&"17"!=fa(c)&&g(1t(A(a,b,d)+"2u be a 4T 17."))}17 2v(a,b,c){s(c)&&(!1W(c)||c===k)&&g(1t(A(a,b,j)+"2u be a 4T 8C 1z."))};17 C(a,b){1a 69.1b.6Q.1v(a,b)}17 1N(a,b){1c(69.1b.6Q.1v(a,b))1a a[b]};19 2Q={},2R=/[\\[\\].#$\\/]/,2w=/[\\[\\].#$]/;17 2f(a){1a u(a)&&0!==a.1d&&!2R.3L(a)}17 1X(a,b,c){(!c||s(b))&&2g(A(a,1,c),b)}17 2g(a,b,c,d){c||(c=0);d||(d=[]);s(b)||g(1t(a+"2h 1u"+21(d)));"17"==fa(b)&&g(1t(a+"2h a 17"+21(d)+" 4S 8D: "+b.1l()));2S(b)&&g(1t(a+"2h "+b.1l()+21(d)));5v<c&&g(1e bh(a+"2h a bi 1z 1m ("+d.6N(0,bj).39(".")+"...)"));u(b)&&(b.1d>7u/3&&7u<2e(b).1d)&&g(1t(a+"2h a 3s bk 8y 7u bl bm"+21(d)+" (\'"+b.3u(0,50)+"...\')"));1c(1W(b))1f(19 e 1o b)C(b,e)&&(".1Y"!==e&&(".1m"!==e&&".4U"!==e&&!2f(e))&&g(1t(a+"2h an 7v 1r ("+e+")"+21(d)+\'.  bn 2u be 7w-5w 7x 5x 6e\\\'t 6T ".", "#", "$", "/", "[", 3Q "]"\')),d.1g(e),2g(a,b[e],c+1,d),d.8E())}17 21(a){1a 0==a.1d?"":" 1o bo \'"+a.39(".")+"\'"}17 2T(a,b){1W(b)||g(1t(A(a,1,l)+" 2u be an 1z bp 5y 4b 2t 3M."));1X(a,b,l)}17 22(a,b,c,d){1c(!d||s(c))c!==k&&(!1T(c)&&!u(c)&&(!1W(c)||!C(c,".4U")))&&g(1t(A(a,b,d)+"2u be a 4T 5z 1Y (a 3s, 3r, 3Q 37)."))}17 2x(a,b,c){1c(!c||s(b))6P(b){1J"1m":1J"4c":1J"4V":1J"5A":1J"5B":1C;3P:g(1t(A(a,1,c)+\'2u be a 4T 7y 2s: "1m", "4c", "4V", "5A", 3Q "5B".\'))}}17 3a(a,b){s(b)&&!2f(b)&&g(1t(A(a,2,j)+\'6U an 7v 1r: "\'+b+\'".  1h 4d 2u be 7w-5w 7x 5x 6e\\\'t 6T ".", "#", "$", "/", "[", 3Q "]").\'))}17 2y(a,b){(!u(b)||0===b.1d||2w.3L(b))&&g(1t(A(a,1,l)+\'6U an 7v 1i: "\'+b+\'". bq 2u be 7w-5w 7x 5x 6e\\\'t 6T ".", "#", "$", "[", 3Q "]"\'))}17 D(a,b){".4e"===E(b)&&g(1t(a+" 1M: 7z\'t br 2z bs /.4e/"))};17 F(a,b,c,d,e,f,h){13.n=a;13.1i=b;13.2S=c;13.da=d;13.2v=e;13.2g=f;13.3b=h;s(13.da)&&(s(13.2g)&&s(13.2S))&&g("1E: 7z\'t bt 6f(), 6g(), 5x 6V().")}F.1b.3R=17(){z("1E.6h",0,0,1j.1d);1a 1e H(13.n,13.1i)};F.1b.6h=F.1b.3R;F.1b.3v=17(a,b){z("1E.1U",2,4,1j.1d);2x("1E.1U",a,l);B("1E.1U",2,b,l);19 c=3c("1E.1U",1j[2],1j[3]);13.n.4f(13,a,b,c.1Z,c.T);1a b};F.1b.1U=F.1b.3v;F.1b.2A=17(a,b,c){z("1E.6i",0,3,1j.1d);2x("1E.6i",a,j);B("1E.6i",2,b,j);2v("1E.6i",3,c);13.n.fc(13,a,b,c)};F.1b.6i=F.1b.2A;F.1b.3w=17(a,b){17 c(h){f&&(f=l,e.2A(a,c),b.1v(d.T,h))}z("1E.5C",2,4,1j.1d);2x("1E.5C",a,l);B("1E.5C",2,b,l);19 d=3c("1E.5C",1j[2],1j[3]),e=13,f=j;13.3v(a,c,17(b){e.2A(a,c);d.1Z&&d.1Z.1v(d.T,b)})};F.1b.5C=F.1b.3w;F.1b.5D=17(a){z("1E.6V",1,1,1j.1d);(!1T(a)||1w.3K(a)!==a||0>=a)&&g("1E.6V: 8z 6S 2u be a bu bv.");1a 1e F(13.n,13.1i,a,13.da,13.2v,13.2g,13.3b)};F.1b.6V=F.1b.5D;F.1b.6j=17(a,b){z("1E.6f",0,2,1j.1d);22("1E.6f",1,a,j);3a("1E.6f",b);s(a)||(b=a=k);1a 1e F(13.n,13.1i,13.2S,a,b,13.2g,13.3b)};F.1b.6f=F.1b.6j;F.1b.3S=17(a,b){z("1E.6g",0,2,1j.1d);22("1E.6g",1,a,j);3a("1E.6g",b);1a 1e F(13.n,13.1i,13.2S,13.da,13.2v,a,b)};F.1b.6g=F.1b.3S;17 2U(a){19 b={};s(a.da)&&(b.bw=a.da);s(a.2v)&&(b.bx=a.2v);s(a.2g)&&(b.ep=a.2g);s(a.3b)&&(b.en=a.3b);s(a.2S)&&(b.l=a.2S);s(a.da)&&(s(a.2v)&&a.da===k&&a.2v===k)&&(b.bz="l");1a b}F.1b.2V=17(){19 a=2V(2U(13));1a"{}"===a?"3P":a};17 3c(a,b,c){19 d={};b&&c?(d.1Z=b,B(a,3,d.1Z,j),d.T=c,2v(a,4,d.T)):b&&("1z"===1k b&&b!==k?d.T=b:"17"===1k b?d.1Z=b:g(1t(A(a,3,j)+"2u bA be a 1Z bB 3Q a 8C 1z.")));1a d};17 J(a){1c(a 3J J)1a a;1c(1==1j.1d){13.m=a.3T("/");1f(19 b=0,c=0;c<13.m.1d;c++)0<13.m[c].1d&&(13.m[b]=13.m[c],b++);13.m.1d=b;13.Z=0}1n 13.m=1j[0],13.Z=1j[1]}17 E(a){1a a.Z>=a.m.1d?k:a.m[a.Z]}17 1O(a){19 b=a.Z;b<a.m.1d&&b++;1a 1e J(a.m,b)}r=J.1b;r.1l=17(){1f(19 a="",b=13.Z;b<13.m.1d;b++)""!==13.m[b]&&(a+="/"+13.m[b]);1a a||"/"};r.1G=17(){1c(13.Z>=13.m.1d)1a k;1f(19 a=[],b=13.Z;b<13.m.1d-1;b++)a.1g(13.m[b]);1a 1e J(a,0)};r.F=17(a){1f(19 b=[],c=13.Z;c<13.m.1d;c++)b.1g(13.m[c]);1c(a 3J J)1f(c=a.Z;c<a.m.1d;c++)b.1g(a.m[c]);1n{a=a.3T("/");1f(c=0;c<a.1d;c++)0<a[c].1d&&b.1g(a[c])}1a 1e J(b,0)};r.f=17(){1a 13.Z>=13.m.1d};17 3d(a,b){19 c=E(a);1c(c===k)1a b;1c(c===E(b))1a 3d(1O(a),1O(b));g("6W 7A: bC ("+b+") 2W 3x bD bE ("+a+")")}r.2h=17(a){19 b=0;1c(13.m.1d>a.m.1d)1a l;1f(;b<13.m.1d;){1c(13.m[b]!==a.m[b])1a l;++b}1a j};17 3y(){13.4b={};13.4W=0;13.1m=k}17 23(a,b,c){13.2T=a?a:"";13.3e=b?b:k;13.z=c?c:1e 3y}17 K(a,b){1f(19 c=b 3J J?b:1e J(b),d=a,e;(e=E(c))!==k;)d=1e 23(e,d,1N(d.z.4b,e)||1e 3y),c=1O(c);1a d}r=23.1b;r.k=17(){1a 13.z.1m};17 1P(a,b){y("1u"!==1k b);a.z.1m=b;3b(a)}r.2B=17(){1a 0<13.z.4W};r.f=17(){1a 13.k()===k&&!13.2B()};r.w=17(a){1f(19 b 1o 13.z.4b)a(1e 23(b,13,13.z.4b[b]))};17 2C(a,b,c,d){c&&!d&&b(a);a.w(17(a){2C(a,b,j,d)});c&&d&&b(a)}17 2X(a,b,c){1f(a=c?a:a.1G();a!==k;){1c(b(a))1a j;a=a.1G()}1a l}r.1i=17(){1a 1e J(13.3e===k?13.2T:13.3e.1i()+"/"+13.2T)};r.1q=ba("2T");r.1G=ba("3e");17 3b(a){1c(a.3e!==k){19 b=a.3e,c=a.2T,d=a.f(),e=C(b.z.4b,c);d&&e?(2D b.z.4b[c],b.z.4W--,3b(b)):!d&&!e&&(b.z.4b[c]=a.z,b.z.4W++,3b(b))}};17 26(a,b){13.3y=a?a:3U;13.ca=b?b:2E}17 3U(a,b){1a a<b?-1:a>b?1:0}r=26.1b;r.2b=17(a,b){1a 1e 26(13.3y,13.ca.2b(a,b,13.3y).1K(k,k,l,k,k))};r.1y=17(a){1a 1e 26(13.3y,13.ca.1y(a,13.3y).1K(k,k,l,k,k))};r.1I=17(a){1f(19 b,c=13.ca;!c.f();){b=13.3y(a,c.1r);1c(0===b)1a c.1m;0>b?c=c.1s:0<b&&(c=c.1B)}1a k};17 3v(a,b){1f(19 c,d=a.ca,e=k;!d.f();){c=a.3y(b,d.1r);1c(0===c){1c(d.1s.f())1a e?e.1r:k;1f(d=d.1s;!d.1B.f();)d=d.1B;1a d.1r}0>c?d=d.1s:0<c&&(e=d,d=d.1B)}g(1t("bF 2t bG bH 1r 1f a bI 1r.  bJ bK?"))}r.f=17(){1a 13.ca.f()};r.2i=17(){1a 13.ca.2i()};r.3z=17(){1a 13.ca.3z()};r.3U=17(){1a 13.ca.3U()};r.21=17(a){1a 13.ca.21(a)};r.1O=17(a){1a 13.ca.1O(a)};r.26=17(a){1a 1e 3V(13.ca,a)};17 3V(a,b){13.5E=b;1f(13.4g=[];!a.f();)13.4g.1g(a),a=a.1s}17 2F(a){1c(0===a.4g.1d)1a k;19 b=a.4g.8E(),c;c=a.5E?a.5E(b.1r,b.1m):{1r:b.1r,1m:b.1m};1f(b=b.1B;!b.f();)a.4g.1g(b),b=b.1s;1a c}17 $a(a,b,c,d,e){13.1r=a;13.1m=b;13.4h=c!=k?c:j;13.1s=d!=k?d:2E;13.1B=e!=k?e:2E}r=$a.1b;r.1K=17(a,b,c,d,e){1a 1e $a(a!=k?a:13.1r,b!=k?b:13.1m,c!=k?c:13.4h,d!=k?d:13.1s,e!=k?e:13.1B)};r.2i=17(){1a 13.1s.2i()+1+13.1B.2i()};r.f=o(l);r.21=17(a){1a 13.1s.21(a)||a(13.1r,13.1m)||13.1B.21(a)};r.1O=17(a){1a 13.1B.1O(a)||a(13.1r,13.1m)||13.1s.1O(a)};17 ab(a){1a a.1s.f()?a:ab(a.1s)}r.3z=17(){1a ab(13).1r};r.3U=17(){1a 13.1B.f()?13.1r:13.1B.3U()};r.2b=17(a,b,c){19 d,e;e=13;d=c(a,e.1r);e=0>d?e.1K(k,k,k,e.1s.2b(a,b,c),k):0===d?e.1K(k,b,k,k,k):e.1K(k,k,k,k,e.1B.2b(a,b,c));1a db(e)};17 eb(a){1c(a.1s.f())1a 2E;!a.1s.O()&&!a.1s.1s.O()&&(a=fb(a));a=a.1K(k,k,k,eb(a.1s),k);1a db(a)}r.1y=17(a,b){19 c,d;c=13;1c(0>b(a,c.1r))!c.1s.f()&&(!c.1s.O()&&!c.1s.1s.O())&&(c=fb(c)),c=c.1K(k,k,k,c.1s.1y(a,b),k);1n{c.1s.O()&&(c=2Y(c));!c.1B.f()&&(!c.1B.O()&&!c.1B.1s.O())&&(c=2Z(c),c.1s.1s.O()&&(c=2Y(c),c=2Z(c)));1c(0===b(a,c.1r)){1c(c.1B.f())1a 2E;d=ab(c.1B);c=c.1K(d.1r,d.1m,k,k,eb(c.1B))}c=c.1K(k,k,k,k,c.1B.1y(a,b))}1a db(c)};r.O=ba("4h");17 db(a){a.1B.O()&&!a.1s.O()&&(a=3W(a));a.1s.O()&&a.1s.1s.O()&&(a=2Y(a));a.1s.O()&&a.1B.O()&&(a=2Z(a));1a a}17 fb(a){a=2Z(a);a.1B.1s.O()&&(a=a.1K(k,k,k,k,2Y(a.1B)),a=3W(a),a=2Z(a));1a a}17 3W(a){19 b;b=a.1K(k,k,j,k,a.1B.1s);1a a.1B.1K(k,k,a.4h,b,k)}17 2Y(a){19 b;b=a.1K(k,k,j,a.1s.1B,k);1a a.1s.1K(k,k,a.4h,k,b)}17 2Z(a){19 b,c;b=a.1s.1K(k,k,!a.1s.4h,k,k);c=a.1B.1K(k,k,!a.1B.4h,k,k);1a a.1K(k,k,!a.4h,b,c)}17 4i(){}r=4i.1b;r.1K=17(){1a 13};r.2b=17(a,b){1a 1e $a(a,b,aa,aa,aa)};r.1y=17(){1a 13};r.2i=o(0);r.f=o(j);r.21=o(l);r.1O=o(l);r.3z=o(k);r.3U=o(k);r.O=o(l);19 2E=1e 4i;17 3f(a){13.4j=a;13.bc="5z:"}3f.1b.1p=17(a,b){b==k?13.4j.7B(13.bc+a):13.4j.8F(13.bc+a,w(b))};3f.1b.1I=17(a){a=13.4j.bL(13.bc+a);1a a==k?k:2d(a)};3f.1b.1y=17(a){13.4j.7B(13.bc+a)};17 3g(){13.3W={}}3g.1b.1p=17(a,b){b==k?2D 13.3W[a]:13.3W[a]=b};3g.1b.1I=17(a){1a C(13.3W,a)?13.3W[a]:k};3g.1b.1y=17(a){2D 13.3W[a]};17 3I(a){3N{1c("1u"!==1k 1L&&"1u"!==1k 1L[a]){19 b=1L[a];b.8F("5z:8G","bM");b.7B("5z:8G");1a 1e 3f(b)}}3O(c){}1a 1e 3g}19 2B=3I("bN"),3A=3I("bO");17 3B(a,b,c,d){13.1Q=a.7C();13.4X=13.1Q.6k(13.1Q.3t(".")+1);13.4k=b;13.4l=c;13.fa=d||2B.1I("1Q:"+a)||13.1Q}17 3X(a,b){b!==a.fa&&(a.fa=b,"s-"===a.fa.6k(0,2)&&2B.1p("1Q:"+a.1Q,a.fa))}3B.1b.1l=17(){1a(13.4k?"5F://":"7D://")+13.1Q};17 4m(){};17 3h(){13.B=[];13.2G=[];13.6l=[];13.4n=[];13.4n[0]=6c;1f(19 a=1;64>a;++a)13.4n[a]=0;13.7E()}1H(3h,4m);3h.1b.7E=17(){13.B[0]=bP;13.B[1]=bQ;13.B[2]=bR;13.B[3]=bS;13.B[4]=bT;13.5G=13.3A=0};17 3z(a,b){19 c;c||(c=0);1f(19 d=a.6l,e=c;e<c+64;e+=4)d[e/4]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3];1f(e=16;80>e;e++){19 f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4o}c=a.B[0];1f(19 h=a.B[1],i=a.B[2],m=a.B[3],n=a.B[4],p,e=0;80>e;e++)40>e?20>e?(f=m^h&(i^m),p=bU):(f=h^i^m,p=bV):60>e?(f=h&i|m&(h|i),p=bW):(f=h^i^m,p=bX),f=(c<<5|c>>>27)+f+n+p+d[e]&4o,n=m,m=i,i=(h<<30|h>>>2)&4o,h=c,c=f;a.B[0]=a.B[0]+c&4o;a.B[1]=a.B[1]+h&4o;a.B[2]=a.B[2]+i&4o;a.B[3]=a.B[3]+m&4o;a.B[4]=a.B[4]+n&4o}3h.1b.1A=17(a,b){s(b)||(b=a.1d);19 c=13.2G,d=13.3A,e=0;1c(u(a))1f(;e<b;)c[d++]=a.6R(e++),64==d&&(3z(13,c),d=0);1n 1f(;e<b;)c[d++]=a[e++],64==d&&(3z(13,c),d=0);13.3A=d;13.5G+=b};19 2A=38.1b,32=2A.4Y?17(a,b,c){2A.4Y.1v(a,b,c)}:17(a,b,c){1f(19 d=a.1d,e=u(a)?a.3T(""):a,f=0;f<d;f++)f 1o e&&b.1v(c,e[f],f,a)},3i=2A.8H?17(a,b,c){1a 2A.8H.1v(a,b,c)}:17(a,b,c){1f(19 d=a.1d,e=38(d),f=u(a)?a.3T(""):a,h=0;h<d;h++)h 1o f&&(e[h]=b.1v(c,f[h],h,a));1a e},4p=2A.8I?17(a,b,c){1a 2A.8I.1v(a,b,c)}:17(a,b,c){1f(19 d=a.1d,e=u(a)?a.3T(""):a,f=0;f<d;f++)1c(f 1o e&&!b.1v(c,e[f],f,a))1a l;1a j};19 2H,3C,3e,3D;17 3Y(){1a ca.5H?ca.5H.7F:k}3D=3e=3C=2H=l;19 3j;1c(3j=3Y()){19 4q=ca.5H;2H=0==3j.3t("bY");3C=!2H&&-1!=3j.3t("8J");3e=!2H&&-1!=3j.3t("8K");3D=!2H&&!3e&&"bZ"==4q.c0}19 4r=3C,4s=3D,4t=3e;19 33;1c(2H&&ca.8L){19 3Z=ca.8L.8M;"17"==1k 3Z&&3Z()}1n 4s?33=/c1\\:([^\\);]+)(\\)|;)/:4r?33=/8J\\s+([^\\);]+)(\\)|;)/:4t&&(33=/8K\\/(\\S+)/),33&&33.c2(3Y());19 3k=k,3E=k;17 4f(a,b){2a(a)||g(1t("c3 c4 an 4P as a c5"));1c(!3k){3k={};3E={};1f(19 c=0;65>c;c++)3k[c]="8N+/=".6m(c),3E[c]="8N-c6.".6m(c)}1f(19 c=b?3E:3k,d=[],e=0;e<a.1d;e+=3){19 f=a[e],h=e+1<a.1d,i=h?a[e+1]:0,m=e+2<a.1d,n=m?a[e+2]:0,p=f>>2,f=(f&3)<<4|i>>4,i=(i&15)<<2|n>>6,n=n&63;m||(n=64,h||(i=64));d.1g(c[p],c[f],c[i],c[n])}1a d.39("")};19 3l,4Z=1;3l=17(){1a 4Z++};17 y(a,b){a||g(1t("1h 6W c7 c8:"+b))}17 4j(a){19 b=2e(a),a=1e 3h;a.1A(b);19 b=[],c=8*a.5G;56>a.3A?a.1A(a.4n,56-a.3A):a.1A(a.4n,64-(a.3A-56));1f(19 d=63;56<=d;d--)a.2G[d]=c&8O,c/=8s;3z(a,a.2G);1f(d=c=0;5>d;d++)1f(19 e=24;0<=e;e-=8)b[c++]=a.B[d]>>e&8O;1a 4f(b)}17 3m(){1f(19 a="",b=0;b<1j.1d;b++)a=2a(1j[b])?a+3m.2n(k,1j[b]):"1z"===1k 1j[b]?a+w(1j[b]):a+1j[b],a+=" ";1a a}19 2I=k,4l=j;17 L(){4l===j&&(4l=l,2I===k&&3A.1I("7G")===j&&4g(j));1c(2I){19 a=3m.2n(k,1j);2I(a)}}17 3F(a){1a 17(){L(a,1j)}}17 41(){1c("1u"!==1k 1R){19 a="6n 6W 7A: "+3m.2n(k,1j);"1u"!==1k 1R.4u?1R.4u(a):1R.3n(a)}}17 51(){19 a=3m.2n(k,1j);g(1t("6n c9 7A: "+a))}17 M(){1c("1u"!==1k 1R){19 a="6n cf: "+3m.2n(k,1j);"1u"!==1k 1R.8P?1R.8P(a):1R.3n(a)}}17 2S(a){1a 1T(a)&&(a!=a||a==6o.cg||a==6o.ch)}17 2J(a,b){1a a!==b?a===k?-1:b===k?1:1k a!==1k b?"3r"===1k a?-1:1:a>b?1:-1:0}17 2K(a,b){1c(a===b)1a 0;19 c=4n(a),d=4n(b);1a c!==k?d!==k?c-d:-1:d!==k?1:a<b?-1:1}17 $b(a,b){1c(b&&a 1o b)1a b[a];g(1t("ci 8Q 1r ("+a+") 1o 1z: "+w(b)))}17 2V(a){1c("1z"!==1k a||a===k)1a w(a);19 b=[],c;1f(c 1o a)b.1g(c);b.7H();c="{";1f(19 d=0;d<b.1d;d++)0!==d&&(c+=","),c+=w(b[d]),c+=":",c+=2V(a[b[d]]);1a c+"}"}17 ac(a,b){1c(a.1d<=b)1a[a];1f(19 c=[],d=0;d<a.1d;d+=b)d+b>a?c.1g(a.3u(d,a.1d)):c.1g(a.3u(d,d+b));1a c}17 bc(a,b){1c("4P"==fa(a))1f(19 c=0;c<a.1d;++c)b(c,a[c]);1n cc(a,b)}17 dc(a){y(!2S(a));19 b,c,d,e;0===a?(d=c=0,b=-cj===1/a?1:0):(b=0>a,a=1w.ck(a),a>=1w.6p(2,-cl)?(d=1w.8R(1w.3K(1w.3n(a)/1w.cm),8S),c=d+8S,d=1w.8T(a*1w.6p(2,52-d)-1w.6p(2,52))):(c=0,d=1w.8T(a/1w.6p(2,-cn))));e=[];1f(a=52;a;a-=1)e.1g(d%2?1:0),d=1w.3K(d/2);1f(a=11;a;a-=1)e.1g(c%2?1:0),c=1w.3K(c/2);e.1g(b?1:0);e.co();b=e.39("");c="";1f(a=0;64>a;a+=8)d=6X(b.6k(a,8),2).1l(16),1===d.1d&&(d="0"+d),c+=d;1a c.7C()}19 ec=/^-?\\d{1,10}$/;17 4n(a){1a ec.3L(a)&&(a=6o(a),-8p<=a&&cp>=a)?a:k}17 fc(a){3N{a()}3O(b){2L(17(){g(b)})}};17 2q(a,b){13.D=a;y(13.D!==k,"cq 8U\'t be 8V 4S 37 1m.");13.3V="1u"!==1k b?b:k}r=2q.1b;r.N=o(j);r.j=ba("3V");r.2f=17(a){1a 1e 2q(13.D,a)};r.M=17(){1a N};r.Q=17(a){1a E(a)===k?13:N};r.ea=o(k);r.H=17(a,b){1a(1e O).H(a,b).2f(13.3V)};r.2w=17(a,b){19 c=E(a);1a c===k?b:13.H(c,N.2w(1O(a),b))};r.f=o(l);r.3F=o(0);r.V=17(a){1a a&&13.j()!==k?{".1m":13.k(),".1Y":13.j()}:13.k()};r.3o=17(){19 a="";13.j()!==k&&(a+="1Y:"+4k(13.j())+":");19 b=1k 13.D,a=a+(b+":"),a="3r"===b?a+dc(13.D):a+13.D;1a 4j(a)};r.k=ba("D");r.1l=17(){1a"3s"===1k 13.D?\'"\'+13.D+\'"\':13.D};17 3G(a,b){1a 2J(a.1W,b.1W)||2K(a.1q,b.1q)}17 53(a,b){1a 2K(a.1q,b.1q)}17 4v(a,b){1a 2K(a,b)};17 O(a,b){13.o=a||1e 26(4v);13.3V="1u"!==1k b?b:k}r=O.1b;r.N=o(l);r.j=ba("3V");r.2f=17(a){1a 1e O(13.o,a)};r.H=17(a,b){19 c=13.o.1y(a);b&&b.f()&&(b=k);b!==k&&(c=c.2b(a,b));1a b&&b.j()!==k?1e 3p(c,k,13.3V):1e O(c,13.3V)};r.2w=17(a,b){19 c=E(a);1c(c===k)1a b;19 d=13.M(c).2w(1O(a),b);1a 13.H(c,d)};r.f=17(){1a 13.o.f()};r.3F=17(){1a 13.o.2i()};19 54=/^\\d+$/;r=O.1b;r.V=17(a){1c(13.f())1a k;19 b={},c=0,d=0,e=j;13.w(17(f,h){b[f]=h.V(a);c++;e&&54.3L(f)?d=1w.6Y(d,6o(f)):e=l});1c(!a&&e&&d<2*c){19 f=[],h;1f(h 1o b)f[h]=b[h];1a f}a&&13.j()!==k&&(b[".1Y"]=13.j());1a b};r.3o=17(){19 a="";13.j()!==k&&(a+="1Y:"+4k(13.j())+":");13.w(17(b,c){19 d=c.3o();""!==d&&(a+=":"+b+":"+d)});1a""===a?"":4j(a)};r.M=17(a){a=13.o.1I(a);1a a===k?N:a};r.Q=17(a){19 b=E(a);1a b===k?13:13.M(b).Q(1O(a))};r.ea=17(a){1a 3v(13.o,a)};r.cd=17(){1a 13.o.3z()};r.dd=17(){1a 13.o.3U()};r.w=17(a){1a 13.o.21(a)};r.4w=17(a){1a 13.o.1O(a)};r.26=17(){1a 13.o.26()};r.1l=17(){19 a="{",b=j;13.w(17(c,d){b?b=l:a+=", ";a+=\'"\'+c+\'" : \'+d.1l()});1a a+="}"};19 N=1e O;17 3p(a,b,c){O.1v(13,a,c);b===k&&(b=1e 26(3G),a.21(17(a,c){b=b.2b({1q:a,1W:c.j()},c)}));13.2Q=b}1H(3p,O);r=3p.1b;r.H=17(a,b){19 c=13.M(a),d=13.o,e=13.2Q;c!==k&&(d=d.1y(a),e=e.1y({1q:a,1W:c.j()}));b&&b.f()&&(b=k);b!==k&&(d=d.2b(a,b),e=e.2b({1q:a,1W:b.j()},b));1a 1e 3p(d,e,13.j())};r.ea=17(a,b){19 c=3v(13.2Q,{1q:a,1W:b.j()});1a c?c.1q:k};r.w=17(a){1a 13.2Q.21(17(b,c){1a a(b.1q,c)})};r.4w=17(a){1a 13.2Q.1O(17(b,c){1a a(b.1q,c)})};r.26=17(){1a 13.2Q.26(17(a,b){1a{1r:a.1q,1m:b}})};r.cd=17(){1a 13.2Q.f()?k:13.2Q.3z().1q};r.dd=17(){1a 13.2Q.f()?k:13.2Q.3U().1q};17 Q(a,b){1c(a===k)1a N;19 c=k;"1z"===1k a&&".1Y"1o a?c=a[".1Y"]:"1u"!==1k b&&(c=b);y(c===k||"3s"===1k c||"3r"===1k c||"1z"===1k c&&".4U"1o c);"1z"===1k a&&(".1m"1o a&&a[".1m"]!==k)&&(a=a[".1m"]);1c("1z"!==1k a||".4U"1o a)1a 1e 2q(a,c);1c(a 3J 38){19 d=N;cc(a,17(b,c){1c(C(a,c)&&"."!==c.3u(0,1)){19 e=Q(b);1c(e.N()||!e.f())d=d.H(c,e)}});1a d.2f(c)}19 e=[],f={},h=l;bc(a,17(b,c){1c("3s"!==1k c||"."!==c.3u(0,1)){19 d=Q(a[c]);d.f()||(h=h||d.j()!==k,e.1g({1q:c,1W:d.j()}),f[c]=d)}});19 i=4x(e,f,l);1c(h){19 m=4x(e,f,j);1a 1e 3p(i,m,c)}1a 1e O(i,c)}19 4y=1w.3n(2);17 5I(a){13.2i=6X(1w.3n(a+1)/4y);13.$c=13.2i-1;13.6q=a+1&6X(38(13.2i+1).39("1"),2)}17 4x(a,b,c){17 d(d,f){19 h=n-d,p=n;n-=d;19 q=a[h].1q,h=1e $a(c?a[h]:q,b[q],f,k,e(h+1,p));i?i.1s=h:m=h;i=h}17 e(d,f){19 h=f-d;1c(0==h)1a k;1c(1==h){19 h=a[d].1q,i=c?a[d]:h;1a 1e $a(i,b[h],l,k,k)}19 i=6X(h/2)+d,m=e(d,i),n=e(i+1,f),h=a[i].1q,i=c?a[i]:h;1a 1e $a(i,b[h],l,m,n)}19 f=c?3G:53;a.7H(f);19 h,f=1e 5I(a.1d),i=k,m=k,n=a.1d;1f(h=0;h<f.2i;++h){19 p=!(f.6q&1<<f.$c);f.$c--;19 q=1w.6p(2,f.2i-(h+1));p?d(q,l):(d(q,l),d(q,j))}h=m;f=c?3G:4v;1a h!==k?1e 26(f,h):1e 26(f)}17 4k(a){1a"3r"===1k a?"3r:"+dc(a):"3s:"+a};17 R(a,b){13.z=a;13.ec=b}R.1b.V=17(){z("1h.2M.8W",0,0,1j.1d);1a 13.z.V()};R.1b.8W=R.1b.V;R.1b.6r=17(){z("1h.2M.8X",0,0,1j.1d);1a 13.z.V(j)};R.1b.8X=R.1b.6r;R.1b.F=17(a){z("1h.2M.55",0,1,1j.1d);1T(a)&&(a=5u(a));2y("1h.2M.55",a);19 b=1e J(a),c=13.ec.F(b);1a 1e R(13.z.Q(b),c)};R.1b.55=R.1b.F;R.1b.4z=17(a){z("1h.2M.7I",1,1,1j.1d);2y("1h.2M.7I",a);19 b=1e J(a);1a!13.z.Q(b).f()};R.1b.7I=R.1b.4z;R.1b.j=17(){z("1h.2M.8Y",0,0,1j.1d);1a 13.z.j()};R.1b.8Y=R.1b.j;R.1b.4Y=17(a){z("1h.2M.4Y",1,1,1j.1d);B("1h.2M.4Y",1,a,l);1c(13.z.N())1a l;19 b=13;1a 13.z.w(17(c,d){1a a(1e R(d,b.ec.F(c)))})};R.1b.4Y=R.1b.4Y;R.1b.2B=17(){z("1h.2M.8Z",0,0,1j.1d);1a 13.z.N()?l:!13.z.f()};R.1b.8Z=R.1b.2B;R.1b.1q=17(){z("1h.2M.1q",0,0,1j.1d);1a 13.ec.1q()};R.1b.1q=R.1b.1q;R.1b.3F=17(){z("1h.2M.90",0,0,1j.1d);1a 13.z.3F()};R.1b.90=R.1b.3F;R.1b.3R=17(){z("1h.2M.6h",0,0,1j.1d);1a 13.ec};R.1b.6h=R.1b.3R;17 2G(a){y("4P"==fa(a)&&0<a.1d);13.57=a;13.3h={}}2G.1b.4A=17(){};2G.1b.58=17(a){1f(19 b=13.3h[a]||[],c=0;c<b.1d;c++)b[c].X.2n(b[c].T,38.1b.6N.1v(1j,1))};2G.1b.3v=17(a,b,c){4W(13,a);13.3h[a]=13.3h[a]||[];13.3h[a].1g({X:b,T:c});(a=13.4A(a))&&b.2n(c,a)};2G.1b.2A=17(a,b,c){4W(13,a);1f(19 a=13.3h[a]||[],d=0;d<a.1d;d++)1c(a[d].X===b&&(!c||c===a[d].T)){a.6L(d,1);1C}};17 4W(a,b){19 c=a.57,d;a:{d=17(a){1a a===b};1f(19 e=c.1d,f=u(c)?c.3T(""):c,h=0;h<e;h++)1c(h 1o f&&d.1v(aa,f[h])){d=h;1C a}d=-1}y(0>d?k:u(c)?c.6m(d):c[d],"6b 7y: "+b)};17 42(){2G.1v(13,["5J"]);19 a,b;"1u"!==1k 1x&&"1u"!==1k 1x.4B&&("1u"!==1k 1x.91?(b="cr",a="91"):"1u"!==1k 1x.92?(b="cs",a="92"):"1u"!==1k 1x.93?(b="ct",a="93"):"1u"!==1k 1x.94&&(b="cu",a="94"));13.2Y=j;1c(b){19 c=13;1x.4B(b,17(){19 b=!1x[a];1c(b!==c.2Y){c.2Y=b;c.58("5J",b)}},l)}}1H(42,2G);ea(42);42.1b.4A=17(a){y("5J"===a);1a[13.2Y]};17 5K(a){13.59=a;13.ac=[];13.1P=0;13.42=-1;13.2U=k};17 cc(a,b){1f(19 c 1o a)b.1v(aa,a[c],c,a)}17 5a(a){19 b={},c;1f(c 1o a)b[c]=a[c];1a b};17 5b(){13.4i={}}17 34(a,b,c){s(c)||(c=1);C(a.4i,b)||(a.4i[b]=0);a.4i[b]+=c}5b.1b.1I=17(){1a 5a(13.4i)};17 4w(a){13.6s=a;13.3m=k}4w.1b.1I=17(){19 a=13.6s.1I(),b=5a(a);1c(13.3m)1f(19 c 1o 13.3m)b[c]-=13.3m[c];13.3m=a;1a b};17 5c(a,b){13.5L={};13.4v=1e 4w(a);13.u=b;2L(v(13.4C,13),10+cv*1w.4Q())}5c.1b.4C=17(){19 a=13.4v.1I(),b={},c=l,d;1f(d 1o a)0<a[d]&&C(13.5L,d)&&(b[d]=a[d],c=j);c&&(a=13.u,a.P&&(b={c:b},a.e("cw",b),a.2x("s",b)));2L(v(13.4C,13),cx*1w.4Q())};19 4A={},4D={};17 4z(a){a=a.1l();4A[a]||(4A[a]=1e 5b);1a 4A[a]};17 43(){13.1p={}}r=43.1b;r.6t=17(a,b){13.1p[a]=b!==k?b:j};r.2h=17(a){1a C(13.1p,a)};r.1I=17(a){1a 13.2h(a)?13.1p[a]:aa};r.1y=17(a){2D 13.1p[a]};r.f=17(){19 a;a:{1f(a 1o 13.1p){a=l;1C a}a=j}1a a};r.2i=17(){19 a=0,b;1f(b 1o 13.1p)a++;1a a};17 28(a,b){1f(19 c 1o a.1p)C(a.1p,c)&&b(c,a.1p[c])}r.4d=17(){19 a=[],b;1f(b 1o 13.1p)C(13.1p,b)&&a.1g(b);1a a};19 5M="cy",5N="cz";17 2N(a,b,c){13.5K=a;13.e=3F(a);13.6Z=b;13.$=4z(b);13.53=c;13.3f=l;13.3E=17(a){b.1Q!==b.fa&&(a.95=b.4l);19 c=[],f;1f(f 1o a)a.6Q(f)&&c.1g(f+"="+a[f]);1a(b.4k?"5F://":"7D://")+b.fa+"/.cA?"+c.39("&")}}19 5d,59;2N.1b.5O=17(a,b){17 c(){1c(!d.3c){d.2o=1e 5e(17(a,b,c,e,f){34(d.$,"7J",w(1j).1d);1c(d.2o)1c(d.ba&&(5f(d.ba),d.ba=k),d.3f=j,"5P"==a)d.1V=b,d.5Q=c;1n 1c("1F"===a)1c(b){d.2o.3G=l;19 h=d.fd;h.42=b;h.2U=17(){d.22()};h.42<h.1P&&(h.2U(),h.2U=k)}1n d.22();1n g(1t("96 7K 70: "+a))},17(a,b){34(d.$,"7J",w(1j).1d);19 c=d.fd;1f(c.ac[a]=b;c.ac[c.1P];){19 e=c.ac[c.1P];2D c.ac[c.1P];1f(19 f=0;f<e.1d;++f)1c(e[f]){19 h=c;fc(17(){h.59(e[f])})}1c(c.1P===c.42){c.2U&&(5f(c.2U),c.2U(),c.2U=k);1C}c.1P++}},17(){d.22()},d.3E);19 a={5P:"t"};a.97=1w.3K(98*1w.4Q());d.2o.54&&(a.cb=d.2o.54);a.v="5";d.53&&(a.s=d.53);a=d.3E(a);d.e("cB cC cD-99 2t "+a);5g(d.2o,a,17(){})}}13.5R=0;13.R=b;13.fd=1e 5K(a);13.3c=l;19 d=13;13.ba=2L(17(){d.e("cE 9a 9b 2t 7L.");d.22();d.ba=k},71);1c("7M"===1x.7N)c();1n{19 e=l,f=17(){1x.3q?e||(e=j,c()):2L(f,10)};1x.4B?(1x.4B("cF",f,l),1L.4B("9c",f,l)):1x.7O&&(1x.7O("7P",17(){"7M"===1x.7N&&f()},l),1L.7O("7Q",f,l))}};2N.1b.5P=17(){19 a=13.2o,b=13.5Q;a.72=13.1V;a.6u=b;1f(a.4E=j;4F(a););a=13.1V;b=13.5Q;13.2E=1x.7R("9d");19 c={cG:"t"};c.1V=a;c.9e=b;a=13.3E(c);13.2E.6v=a;13.2E.9f.9g="7t";1x.3q.7S(13.2E)};2N.6w=17(){1a!59&&!("1z"===1k 1L&&1L.7T&&1L.7T.cH&&!/^7T/.3L(1L.73.cI))&&!("1z"===1k 9h&&"1z"===1k 9h.74)&&(5d||j)};2N.1b.33=17(){13.3c=j;13.2o&&(13.2o.1F(),13.2o=k);13.2E&&(1x.3q.7U(13.2E),13.2E=k);13.ba&&(5f(13.ba),13.ba=k)};2N.1b.22=17(){13.3c||(13.e("9i 2W 75 9j"),13.33(),13.R&&(13.R(13.3f),13.R=k))};2N.1b.1F=17(){13.3c||(13.e("9i 2W 76 9k."),13.33())};2N.1b.4G=17(a){a=w(a);34(13.$,"9l",a.1d);1f(19 a=2e(a),a=4f(a,j),a=ac(a,cJ),b=0;b<a.1d;b++){19 c=13.2o;c.3Y.1g({44:13.5R,5h:a.1d,ad:a[b]});c.4E&&4F(c);13.5R++}};17 5e(a,b,c,d){13.3E=d;13.1T=c;13.5g=1e 43;13.3Y=[];13.5a=1w.3K(98*1w.4Q());13.3G=j;13.54=3l();1L[5M+13.54]=a;1L[5N+13.54]=b;a=1x.7R("9d");a.9f.9g="7t";1c(1x.3q){1x.3q.7S(a);3N{a.7V.1x||L("9m cK 4X cL 8Q")}3O(e){a.6v="7W:8o((17(){1x.5O();1x.4X=\'"+1x.4X+"\';1x.1F();})())"}}1n g("cM 3q 9n 3x cN. cO 2t cP 1h cQ cR 5y 1x 2W 9o.");a.9p?a.1X=a.9p:a.7V?a.1X=a.7V.1x:a.1x&&(a.1X=a.1x);13.Y=a;a="";13.Y.6v&&"7W:"===13.Y.6v.6k(0,11)&&(a=\'<77>1x.4X="\'+1x.4X+\'";<\\/77>\');a="<9q><3q>"+a+"</3q></9q>";3N{13.Y.1X.5O(),13.Y.1X.cS(a),13.Y.1X.1F()}3O(f){L("9r cT cU"),f.9s&&L(f.9s),L(f)}}5e.1b.1F=17(){13.4E=l;1c(13.Y){13.Y.1X.3q.cV="";19 a=13;2L(17(){a.Y!==k&&(1x.3q.7U(a.Y),a.Y=k)},0)}19 b=13.1T;b&&(13.1T=k,b())};17 4F(a){1c(a.4E&&a.3G&&a.5g.2i()<(0<a.3Y.1d?2:1)){a.5a++;19 b={};b.1V=a.72;b.9e=a.6u;b.97=a.5a;1f(19 b=a.3E(b),c="",d=0;0<a.3Y.1d;)1c(cW>=a.3Y[0].ad.1d+30+c.1d){19 e=a.3Y.7X(),c=c+"&cX"+d+"="+e.44+"&9t"+d+"="+e.5h+"&d"+d+"="+e.ad;d++}1n 1C;19 b=b+c,f=a.5a;a.5g.6t(f);19 h=17(){a.5g.1y(f);4F(a)},i=2L(h,cY);5g(a,b,17(){5f(i);h()});1a j}1a l}17 5g(a,b,c){2L(17(){3N{1c(a.3G){19 d=a.Y.1X.7R("77");d.2s="cZ/7W";d.d0=j;d.6v=b;d.7Q=d.7P=17(){19 a=d.7N;1c(!a||"d1"===a||"7M"===a)d.7Q=d.7P=k,d.9u&&d.9u.7U(d),c()};d.9v=17(){L("d2-99 77 1M 2t 9c: "+b);a.3G=l;a.1F()};a.Y.1X.3q.7S(d)}}3O(e){}},1)};19 3R=k;"1u"!==1k 9w?3R=9w:"1u"!==1k 6x&&(3R=6x);17 S(a,b,c){13.5K=a;13.e=3F(13.5K);13.45=13.3X=k;13.2j=0;13.$=4z(b);13.23=(b.4k?"d3://":"9x://")+b.fa+"/.9x?v=5";b.1Q!==b.fa&&(13.23=13.23+"&95="+b.4l);c&&(13.23=13.23+"&s="+c)}19 5i;S.1b.5O=17(a,b){13.1T=b;13.4H=a;13.e("78 d4 2t "+13.23);13.W=1e 3R(13.23);13.3f=l;2B.1p("7Y",j);19 c=13;13.ba=2L(17(){c.e("78 d5 9a 9b 2t 7L.");4I(c);c.22()},71);13.W.d6=17(){c.e("78 5S.");c.3f=j;4I(c);2B.1y("7Y")};13.W.d7=17(){c.e("78 35 6U 9y.");c.W=k;c.22()};13.W.d8=17(a){1c(c.W!==k)1c(a=a.2z,34(c.$,"7J",a.1d),4J(c),c.45!==k)5j(c,a);1n{a:{y(c.45===k,"7Z 9z 81 a 9r d9");1c(6>=a.1d){19 b=6o(a);1c(!8q(b)){c.2j=b;c.45=[];a=k;1C a}}c.2j=1;c.45=[]}a!==k&&5j(c,a)}};13.W.9v=17(a){c.e("6x 4u.  9A 35.");a.2z&&c.e(a.2z);c.22()}};S.1b.5P=17(){};S.6w=17(){19 a=l;1c("1u"!==1k 5H&&5H.7F){19 b=5H.7F.df(/dg ([0-9]{0,}\\.[0-9]{0,})/);b&&1<b.1d&&4.4>dh(b[1])&&(a=j)}1a!a&&3R!==k&&!5i};17 5j(a,b){a.45.1g(b);1c(a.45.1d==a.2j){19 c=a.45.39("");a.45=k;c=2d(c);a.4H(c)}}S.1b.4G=17(a){4J(13);a=w(a);34(13.$,"9l",a.1d);a=ac(a,di);1<a.1d&&13.W.4G(5u(a.1d));1f(19 b=0;b<a.1d;b++)13.W.4G(a[b])};S.1b.33=17(){13.3c=j;4I(13);13.3X&&(9B(13.3X),13.3X=k);13.W&&(13.W.1F(),13.W=k)};S.1b.22=17(){13.3c||(13.e("6x 2W 75 9j"),13.33(),13.1T&&(13.1T(13.3f),13.1T=k))};S.1b.1F=17(){13.3c||(13.e("6x 2W 76 9k"),13.33())};17 4J(a){9B(a.3X);a.3X=dj(17(){a.W&&a.W.4G("0");4J(a)},dk)}17 4I(a){a.ba&&(5f(a.ba),a.ba=k)};17 5L(){19 a=[];S&&S.6w()&&!2B.1I("7Y")?a.1g(S):bc(5T,17(b,c){c&&c.6w()&&a.1g(c)});13.3p=a}19 5T=[2N,{6w:o(l)},S];17 2j(a,b,c,d,e,f){13.1V=a;13.e=3F("c:"+13.1V+":");13.59=c;13.4p=d;13.R=e;13.5d=f;13.K=b;13.$b=[];13.5U=0;13.5k=1e 5L;13.1N=0;13.e("82 8V");5G(13)}17 5G(a){19 b;19 c=a.5k;0<c.3p.1d?b=c.3p[0]:g(1t("9m dl dm"));a.L=1e b("c:"+a.1V+":"+a.5U++,a.K);19 d=5k(a,a.L),e=58(a,a.L);a.3Z=a.L;a.4t=a.L;a.A=k;2L(17(){a.L&&a.L.5O(d,e)},0)}17 58(a,b){1a 17(c){b===a.L?(a.L=k,!c&&0===a.1N?(a.e("83 35 1M."),"s-"===a.K.fa.6k(0,2)&&(2B.1y("1Q:"+a.K.1Q),a.K.fa=a.K.1Q)):1===a.1N&&a.e("83 35 dn."),a.1F()):b===a.A?(c=a.A,a.A=k,(a.3Z===c||a.4t===c)&&a.1F()):a.e("75 an 9C 35")}}17 5k(a,b){1a 17(c){1c(2!=a.1N)1c(b===a.4t){19 d=$b("t",c),c=$b("d",c);1c("c"==d){1c(d=$b("t",c),"d"1o c)1c(c=c.d,"h"===d){19 d=c.9t,e=c.v,f=c.h;a.53=c.s;3X(a.K,f);1c(0==a.1N&&(a.L.5P(),c=a.L,a.e("83 35 dp."),a.L=c,a.1N=1,a.4p&&(a.4p(d),a.4p=k),"5"!==e&&M("dq 8M dr 9D"),c=1<a.5k.3p.1d?a.5k.3p[1]:k))a.A=1e c("c:"+a.1V+":"+a.5U++,a.K,a.53),a.A.5O(5k(a,a.A),58(a,a.A))}1n 1c("n"===d){a.e("ds dt 9E 1U 9F");a.4t=a.A;1f(c=0;c<a.$b.1d;++c)a.2J(a.$b[c]);a.$b=[];5U(a)}1n"s"===d?(a.e("82 du 7K 70. 9G 9H..."),a.5d&&(a.5d(c),a.5d=k),a.R=k,a.1F()):"r"===d?(a.e("dv 9I 70.  dw 1Q: "+c),3X(a.K,c),1===a.1N?a.1F():($c(a),5G(a))):"e"===d?41("dx 1t: "+c):41("6b dy 9I 7K: "+d)}1n"d"==d&&a.2J(c)}1n b===a.A?(d=$b("t",c),c=$b("d",c),"c"==d?"t"1o c&&(c=c.t,"a"===c?(a.A.5P(),a.e("dz 84 dA 1U 9J"),a.A.4G({t:"c",d:{t:"a",d:{}}}),a.e("dB 9E 1U 9F"),a.L.4G({t:"c",d:{t:"n",d:{}}}),a.3Z=a.A,5U(a)):"r"===c&&(a.e("dC a 7E 1U 9J, 75 8B"),a.A.1F(),(a.3Z===a.A||a.4t===a.A)&&a.1F())):"d"==d?a.$b.1g(c):g(1t("6b 85 dD: "+d))):a.e("dE 1U 9C 35")}}2j.1b.3H=17(a){a={t:"d",d:a};1!==13.1N&&g("82 2W 3x 5S");13.3Z.4G(a)};17 5U(a){a.3Z===a.A&&a.4t===a.A&&(a.e("dF dG 5x dH a 35: "+a.A.5K),a.L=a.A,a.A=k)}2j.1b.2J=17(a){13.59(a)};2j.1b.1F=17(){2!==13.1N&&(13.e("9A dI 35."),13.1N=2,$c(13),13.R&&(13.R(),13.R=k))};17 $c(a){a.e("9G 9H 9K dJ");a.L&&(a.L.1F(),a.L=k);a.A&&(a.A.1F(),a.A=k)};17 ad(){2G.1v(13,["5l"]);13.2H=j;1c("1u"!==1k 1L&&"1u"!==1k 1L.4B){19 a=13;1L.4B("5l",17(){a.2H||a.58("5l",j);a.2H=j},l);1L.4B("9L",17(){a.2H&&a.58("5l",l);a.2H=l},l)}}1H(ad,2G);ea(ad);ad.1b.4A=17(a){y("5l"===a);1a[13.2H]};17 bd(a,b,c,d,e,f){13.1V=cd++;13.e=3F("p:"+13.1V+":");13.3d=j;13.2a={};13.U=[];13.3C=0;13.3i=[];13.P=l;13.2c=5v;13.2I=dK;13.2K=b||da;13.51=c||da;13.32=d||da;13.5e=e||da;13.4D=f||da;13.K=a;13.5i=k;13.4s={};13.5m=0;13.4m=13.5M=k;dd(13,0);42.3I().3v("5J",13.5V,13);-1===a.1Q.3t("dL")&&ad.3I().3v("5l",13.5W,13)}19 cd=0,ed=0;r=bd.1b;r.2x=17(a,b,c){19 d=++13.5m,a={r:d,a:a,b:b};13.e(w(a));y(13.P,"dM 1v 9M 46\'6y 3x 5S 3x dN.");13.2m.3H(a);c&&(13.4s[d]=c)};17 fd(a,b,c,d,e){a.e("dO 1U "+b+" 1f "+c);19 f={p:b},d=3i(d,17(a){1a 2U(a)});"{}"!==c&&(f.q=d);f.h=a.4D(b);a.2x("l",f,17(d){a.e("9N 86",d);d=d.s;"29"!==d&&5n(a,b,c);e&&e(d)})}r.2Z=17(a,b,c){13.3a={79:a,bd:l,X:b,3l:c};13.e("dP 9O 87: "+13.3a);5X(13);1c(!(b=40==a.1d))a:{19 d;3N{19 e=a.3T(".");1c(3!==e.1d){b=l;1C a}19 f;b:{3N{1c("1u"!==1k 9P){f=9P(e[1]);1C b}}3O(h){L("dQ 1M: ",h)}f=k}f!==k&&(d=2d(f))}3O(i){L("dR 1M",i)}b="1z"===1k d&&1N(d,"dS")===j}b&&(13.e("dT 47 87 9D.  9Q 6Y 7a dU."),13.2I=71)};r.3k=17(a){2D 13.3a;13.32(l);13.P&&13.2x("7b",{},17(b){a(b.s)})};17 5X(a){19 b=a.3a;a.P&&b&&a.2x("47",{dV:b.79},17(c){19 d=c.s,c=c.d||"4u";"29"!==d&&a.3a===b&&2D a.3a;a.32("29"===d);b.bd?"29"!==d&&b.3l&&b.3l(d,c):(b.bd=j,b.X&&b.X(d,c))})}17 1V(a,b,c,d){b=b.1l();5n(a,b,c)&&a.P&&(a.e("dW 1U "+b+" 1f "+c),b={p:b},d=3i(d,17(a){1a 2U(a)}),"{}"!==c&&(b.q=d),a.2x("u",b))}17 5Q(a,b,c,d){a.P?4C(a,"o",b,c,d):a.3i.1g({4F:b,5o:"o",2z:c,C:d})}r.2N=17(a,b){13.P?4C(13,"4y",a,k,b):13.3i.1g({4F:a,5o:"4y",2z:k,C:b})};17 4C(a,b,c,d,e){c={p:c,d:d};a.e("1D "+b,c);a.2x(b,c,17(a){e&&2L(17(){e(a.s)},0)})}r.6z=17(a,b,c,d){5Y(13,"p",a,b,c,d)};17 5Y(a,b,c,d,e,f){c={p:c,d:d};s(f)&&(c.h=f);a.U.1g({5o:b,5Y:c,C:e});a.3C++;b=a.U.1d-1;a.P&&5E(a,b)}17 5E(a,b){19 c=a.U[b].5o,d=a.U[b].5Y,e=a.U[b].C;a.U[b].4K=a.P;a.2x(c,d,17(d){a.e(c+" 86",d);2D a.U[b];a.3C--;0===a.3C&&(a.U=[]);e&&e(d.s)})}r.2J=17(a){1c("r"1o a){13.e("88 89: "+w(a));19 b=a.r,c=13.4s[b];c&&(2D 13.4s[b],c(a.b))}1n"4u"1o a&&g("A 89-dX 4u 9n dY: "+a.4u),"a"1o a&&(b=a.a,a=a.b,13.e("dZ",b,a),"d"===b?13.2K(a.p,a.d):"m"===b?13.2K(a.p,a.d,j):"c"===b?(b=a.p,a=(a=a.q)?3i(a,17(a){1a 2V(a)}).39("$"):"{}",(a=5n(13,b,a))&&a.C&&a.C("7c")):"ac"===b?(b=a.s,a=a.d,c=13.3a,2D 13.3a,c&&c.3l&&c.3l(b,a),13.32(l)):"5Z"===b?13.5i?13.5i(a):"9R"1o a&&"1u"!==1k 1R&&1R.3n("6n: "+a.9R.3M("\\n","\\e0: ")):41("96 5o 70 88 89: "+w(b)+"\\e1 e2 9O 5y e3 84?"))};r.4p=17(a){13.e("35 9o");13.P=j;13.4m=(1e 4L).4M();13.5e({9S:a-(1e 4L).4M()});5X(13);1f(19 b 1o 13.2a)1f(19 c 1o 13.2a[b])a=13.2a[b][c],fd(13,b,c,a.2F,a.C);1f(b=0;b<13.U.1d;b++)13.U[b]&&5E(13,b);1f(;13.3i.1d;)b=13.3i.7X(),4C(13,b.5o,b.4F,b.2z,b.C);13.51(j)};17 dd(a,b){y(!a.2m,"e4 a 7L 9M 46\'6y 9z 5S/e5?");a.2C&&5f(a.2C);a.2C=2L(17(){a.2C=k;1c(a.3d){a.e("e6 a 35 e7");a.5M=(1e 4L).4M();a.4m=k;19 b=v(a.2J,a),d=v(a.4p,a),e=v(a.5n,a),f=a.1V+":"+ed++;a.2m=1e 2j(f,a.K,b,d,e,17(b){M(b+" ("+a.K.1l()+")");a.3d=l})}},b)}r.5V=17(a){a&&(!13.2Y&&13.2c===13.2I)&&(13.e("7k e8 5J.  9Q e9."),13.2c=5v,13.2m||dd(13,0));13.2Y=a};r.5W=17(a){a?(13.e("9T 9U 5l.  ef."),13.2c=5v,13.3d=j,13.2m||dd(13,0)):(13.e("9T 9U 9L.  eg 35; eh\'t 7a."),13.3d=l,13.2m&&13.2m.1F())};r.5n=17(){13.e("2z 84 9y");13.P=l;13.2m=k;1f(19 a=0;a<13.U.1d;a++){19 b=13.U[a];b&&("h"1o b.5Y&&b.4K)&&(b.C&&b.C("ei"),2D 13.U[a],13.3C--)}0===13.3C&&(13.U=[]);1c(13.3d)13.2Y?13.4m&&(71<(1e 4L).4M()-13.4m&&(13.2c=5v),13.4m=k):(13.e("7k ej\'t 5J.  ek 7a."),13.2c=13.2I,13.5M=(1e 4L).4M()),a=1w.6Y(0,13.2c-((1e 4L).4M()-13.5M)),a*=1w.4Q(),13.e("el 2t 7a 1o "+a+"em"),dd(13,a),13.2c=1w.8R(13.2I,1.3*13.2c);1n 1f(19 c 1o 13.4s)2D 13.4s[c];13.51(l)};r.2y=17(){13.3d=l;13.2m?13.2m.1F():(13.2C&&(5f(13.2C),13.2C=k),13.P&&13.5n())};r.ab=17(){13.3d=j;13.2c=5v;13.P||dd(13,0)};17 5n(a,b,c){b=(1e J(b)).1l();c||(c="{}");19 d=a.2a[b][c];2D a.2a[b][c];1a d};17 48(){13.o=13.D=k}17 3H(a,b,c){1c(b.f())a.D=c,a.o=k;1n 1c(a.D!==k)a.D=a.D.2w(b,c);1n{a.o==k&&(a.o=1e 43);19 d=E(b);a.o.2h(d)||a.o.6t(d,1e 48);a=a.o.1I(d);b=1O(b);3H(a,b,c)}}17 5p(a,b){1c(b.f())1a a.D=k,a.o=k,j;1c(a.D!==k){1c(a.D.N())1a l;19 c=a.D;a.D=k;c.w(17(b,c){3H(a,1e J(b),c)});1a 5p(a,b)}1a a.o!==k?(c=E(b),b=1O(b),a.o.2h(c)&&5p(a.o.1I(c),b)&&a.o.1y(c),a.o.f()?(a.o=k,j):l):j}17 5q(a,b,c){a.D!==k?c(b,a.D):a.w(17(a,e){19 f=1e J(b.1l()+"/"+a);5q(e,f,c)})}48.1b.w=17(a){13.o!==k&&28(13.o,17(b,c){a(b,c)})};17 49(){13.2P=N}17 T(a,b){1a a.2P.Q(b)}17 U(a,b,c){a.2P=a.2P.2w(b,c)}49.1b.1l=17(){1a 13.2P.1l()};17 5Z(){13.2d=1e 49;13.I=1e 49;13.2p=1e 49;13.3D=1e 23}17 4N(a,b){1f(19 c=T(a.2d,b),d=T(a.I,b),e=K(a.3D,b),f=l,h=e;h!==k;){1c(h.k()!==k){f=j;1C}h=h.1G()}1c(f)1a l;c=6l(c,d,e);1a c!==d?(U(a.I,b,c),j):l}17 6l(a,b,c){1c(c.f())1a a;1c(c.k()!==k)1a b;a=a||N;c.w(17(d){19 d=d.1q(),e=a.M(d),f=b.M(d),h=K(c,d),e=6l(e,f,h);a=a.H(d,e)});1a a}5Z.1b.1p=17(a,b){19 c=13,d=[];32(b,17(a){19 b=a.1i,a=a.2r,h=3l();1P(K(c.3D,b),h);U(c.I,b,a);d.1g({1i:b,6A:h})});1a d};17 57(a,b){32(b,17(b){19 d=b.6A,b=K(a.3D,b.1i),e=b.k();y(e!==k,"9V 5r 3x be 37.");e===d&&1P(b,k)})};17 6q(){13.2X=[]}17 6s(a,b){1c(0!==b.1d)1f(19 c=0;c<b.1d;c++)a.2X.1g(b[c])}6q.1b.4q=17(){1f(19 a=0;a<13.2X.1d;a++)1c(13.2X[a]){19 b=13.2X[a];13.2X[a]=k;79(b)}13.2X=[]};17 79(a){19 b=a.X,c=a.5p,d=a.3j;fc(17(){b(c,d)})};17 V(a,b,c,d){13.2s=a;13.2e=b;13.aa=c;13.3j=d};17 3S(a){13.J=a;13.2O=[];13.34=1e 6q}17 6r(a,b,c,d,e){a.2O.1g({2s:b,X:c,1Z:d,T:e});19 d=[],f=6B(a.i);a.3B&&f.1g(1e V("1m",a.i));1f(19 h=0;h<f.1d;h++)1c(f[h].2s===b){19 i=1e H(a.J.n,a.J.1i);f[h].aa&&(i=i.F(f[h].aa));d.1g({X:e?v(c,e):c,5p:1e R(f[h].2e,i),3j:f[h].3j})}6s(a.34,d)}3S.1b.cc=17(a,b){b=13.dc(a,b);b!=k&&6C(13,b)};17 6C(a,b){1f(19 c=[],d=0;d<b.1d;d++){19 e=b[d],f=e.2s,h=1e H(a.J.n,a.J.1i);b[d].aa&&(h=h.F(b[d].aa));h=1e R(b[d].2e,h);"1m"===e.2s&&!h.2B()?f+="("+h.V()+")":"1m"!==e.2s&&(f+=" "+h.1q());L(a.J.n.u.1V+": 7y:"+a.J.1i+":"+a.J.2V()+":"+f);1f(f=0;f<a.2O.1d;f++){19 i=a.2O[f];b[d].2s===i.2s&&c.1g({X:i.T?v(i.X,i.T):i.X,5p:h,3j:e.3j})}}6s(a.34,c)}3S.1b.4q=17(){13.34.4q()};17 6B(a){19 b=[];1c(!a.N()){19 c=k;a.w(17(a,e){b.1g(1e V("4c",e,a,c));c=a})}1a b}17 5D(a){a.3B||(a.3B=j,6C(a,[1e V("1m",a.i)]))};17 5s(a,b){3S.1v(13,a);13.i=b}1H(5s,3S);5s.1b.dc=17(a,b){13.i=a;13.3B&&b!=k&&b.1g(1e V("1m",13.i));1a b};5s.1b.3g=17(){1a{}};17 72(a,b){13.4Z=a;13.5N=b}17 6u(a,b,c,d,e){19 f=a.Q(c),h=b.Q(c),d=1e 72(d,e),e=4H(d,c,f,h),h=!f.f()&&!h.f()&&f.j()!==h.j();1c(e||h){f=c;1f(c=e;f.1G()!==k;){19 i=a.Q(f),e=b.Q(f),m=f.1G();1c(!d.4Z||K(d.4Z,m).k()){19 n=b.Q(m),p=[],f=f.Z<f.m.1d?f.m[f.m.1d-1]:k;i.f()?(i=n.ea(f,e),p.1g(1e V("4c",e,f,i))):e.f()?p.1g(1e V("4V",i,f)):(i=n.ea(f,e),h&&p.1g(1e V("5B",e,f,i)),c&&p.1g(1e V("5A",e,f,i)));d.5N(m,n,p)}h&&(h=l,c=j);f=m}}}17 4H(a,b,c,d){19 e,f=[];c===d?e=l:c.N()&&d.N()?e=c.k()!==d.k():c.N()?(5W(a,b,N,d,f),e=j):d.N()?(5W(a,b,c,N,f),e=j):e=5W(a,b,c,d,f);e?a.5N(b,d,f):c.j()!==d.j()&&a.5N(b,d,k);1a e}17 5W(a,b,c,d,e){19 f=l,h=!a.4Z||!K(a.4Z,b).f(),i=[],m=[],n=[],p=[],q={},t={},x,P,I,G;x=c.26();I=2F(x);P=d.26();1f(G=2F(P);I!==k||G!==k;){c=I===k?1:G===k?-1:I.1r===G.1r?0:3G({1q:I.1r,1W:I.1m.j()},{1q:G.1r,1W:G.1m.j()});1c(0>c)f=1N(q,I.1r),s(f)?(n.1g({5c:I,5T:i[f]}),i[f]=k):(t[I.1r]=m.1d,m.1g(I)),f=j,I=2F(x);1n{1c(0<c)f=1N(t,G.1r),s(f)?(n.1g({5c:m[f],5T:G}),m[f]=k):(q[G.1r]=i.1d,i.1g(G)),f=j;1n{c=b.F(G.1r);1c(c=4H(a,c,I.1m,G.1m))p.1g(G),f=j;I.1m.j()!==G.1m.j()&&(n.1g({5c:I,5T:G}),f=j);I=2F(x)}G=2F(P)}1c(!h&&f)1a j}1f(h=0;h<m.1d;h++)1c(q=m[h])c=b.F(q.1r),4H(a,c,q.1m,N),e.1g(1e V("4V",q.1m,q.1r));1f(h=0;h<i.1d;h++)1c(q=i[h])c=b.F(q.1r),m=d.ea(q.1r,q.1m),4H(a,c,N,q.1m),e.1g(1e V("4c",q.1m,q.1r,m));1f(h=0;h<n.1d;h++)q=n[h].5c,i=n[h].5T,c=b.F(i.1r),m=d.ea(i.1r,i.1m),e.1g(1e V("5B",i.1m,i.1r,m)),(c=4H(a,c,q.1m,i.1m))&&p.1g(i);1f(h=0;h<p.1d;h++)a=p[h],m=d.ea(a.1r,a.1m),e.1g(1e V("5A",a.1m,a.1r,m));1a f};17 5V(){13.S=13.2R=k;13.1p={}}1H(5V,43);r=5V.1b;r.7d=17(a){13.2R=a};17 3w(a){1a a.2h("3P")}17 4K(a){1a a.2R!=k&&3w(a)}r.8a=17(){1a 3w(13)?13.1I("3P"):k};r.1i=ba("S");r.1l=17(){1a 3i(13.4d(),17(a){1a"3P"===a?"{}":a}).39("$")};r.2F=17(){19 a=[];28(13,17(b,c){a.1g(c.J)});1a a};17 4O(a,b){3S.1v(13,a);13.i=N;13.dc(b,6B(b))}1H(4O,3S);4O.1b.dc=17(a,b){1c(b===k)1a b;19 c=[],d=13.J;s(d.da)&&(s(d.2v)&&d.2v!=k?c.1g(17(a,b){19 c=2J(b,d.da);1a 0<c||0===c&&0<=2K(a,d.2v)}):c.1g(17(a,b){1a 0<=2J(b,d.da)}));s(d.2g)&&(s(d.3b)?c.1g(17(a,b){19 c=2J(b,d.2g);1a 0>c||0===c&&0>=2K(a,d.3b)}):c.1g(17(a,b){1a 0>=2J(b,d.2g)}));19 e=k,f=k;1c(s(13.J.2S))1c(s(13.J.da)){1c(e=6D(a,c,13.J.2S,l)){19 h=a.M(e).j();c.1g(17(a,b){19 c=2J(b,h);1a 0>c||0===c&&0>=2K(a,e)})}}1n 1c(f=6D(a,c,13.J.2S,j)){19 i=a.M(f).j();c.1g(17(a,b){19 c=2J(b,i);1a 0<c||0===c&&0<=2K(a,f)})}1f(19 m=[],n=[],p=[],q=[],t=0;t<b.1d;t++){19 x=b[t].aa,P=b[t].2e;6P(b[t].2s){1J"4c":5m(c,x,P)&&(13.i=13.i.H(x,P),n.1g(b[t]));1C;1J"4V":13.i.M(x).f()||(13.i=13.i.H(x,k),m.1g(b[t]));1C;1J"5A":!13.i.M(x).f()&&5m(c,x,P)&&(13.i=13.i.H(x,P),q.1g(b[t]));1C;1J"5B":19 I=!13.i.M(x).f(),G=5m(c,x,P);I?G?(13.i=13.i.H(x,P),p.1g(b[t])):(m.1g(1e V("4V",13.i.M(x),x)),13.i=13.i.H(x,k)):G&&(13.i=13.i.H(x,P),n.1g(b[t]))}}19 5R=e||f;1c(5R){19 6E=(t=f!==k)?13.i.cd():13.i.dd(),4E=l,bb=l,cb=13;(t?a.4w:a.w).1v(a,17(a,b){!bb&&6E===k&&(bb=j);1c(bb&&4E)1a j;4E?(m.1g(1e V("4V",cb.i.M(a),a)),cb.i=cb.i.H(a,k)):bb&&(n.1g(1e V("4c",b,a)),cb.i=cb.i.H(a,b));6E===a&&(bb=j);a===5R&&(4E=j)})}1f(t=0;t<n.1d;t++)c=n[t],x=13.i.ea(c.aa,c.2e),m.1g(1e V("4c",c.2e,c.aa,x));1f(t=0;t<p.1d;t++)c=p[t],x=13.i.ea(c.aa,c.2e),m.1g(1e V("5B",c.2e,c.aa,x));1f(t=0;t<q.1d;t++)c=q[t],x=13.i.ea(c.aa,c.2e),m.1g(1e V("5A",c.2e,c.aa,x));13.3B&&0<m.1d&&m.1g(1e V("1m",13.i));1a m};17 6D(a,b,c,d){1c(a.N())1a k;19 e=k;(d?a.4w:a.w).1v(a,17(a,d){1c(5m(b,a,d)&&(e=a,c--,0===c))1a j});1a e}17 5m(a,b,c){1f(19 d=0;d<a.1d;d++)1c(!a[d](b,c.j()))1a l;1a j}4O.1b.4z=17(a){1a 13.i.M(a)!==N};4O.1b.3g=17(a,b,c){19 d={};13.i.N()||13.i.w(17(a){d[a]=3});19 e=13.i,c=T(c,1e J("")),f=1e 23;1P(K(f,13.J.1i),j);19 b=N.2w(a,b),h=13;6u(c,b,a,f,17(a,b,c){c!==k&&a.1l()===h.J.1i.1l()&&h.dc(b,c)});13.i.N()?cc(d,17(a,b){d[b]=2}):(13.i.w(17(a){C(d,a)||(d[a]=1)}),cc(d,17(a,b){h.i.M(b).f()&&(d[b]=2)}));13.i=e;1a d};17 44(a,b){13.u=a;13.g=b;13.41=b.2P;13.1H=1e 23}44.1b.4f=17(a,b,c,d,e){19 f=a.1i,h=K(13.1H,f),i=h.k();i===k?(i=1e 5V,1P(h,i)):y(!i.f(),"7Z 8U\'t be eo 5w eq");19 m=a.2V();1c(i.2h(m))a=i.1I(m),6r(a,b,c,d,e);1n{19 n=13.g.2P.Q(f),n=a="3P"===a.2V()?1e 5s(a,n):1e 4O(a,n);1c(4K(i)||6A(h))i.6t(m,n),i.S||(i.S=n.J.1i);1n{19 p,q;i.f()||(p=i.1l(),q=i.2F());i.6t(m,n);i.S||(i.S=n.J.1i);i.7d(61(13,i));p&&q&&1V(13.u,i.1i(),p,q)}4K(i)&&2C(h,17(a){1c(a=a.k()){a.2R&&a.2R();a.2R=k}});6r(a,b,c,d,e);(b=(b=2X(K(13.1H,f),17(a){19 b;1c(b=a.k())1c(b=a.k().8a())b=a.k().8a().3B;1c(b)1a j},j))||13.u===k&&!T(13.g,f).f())&&5D(a)}a.4q()};17 6F(a,b,c,d,e){19 f=a.1I(b),h;1c(h=f){h=l;1f(19 i=f.2O.1d-1;0<=i;i--){19 m=f.2O[i];1c((!c||m.2s===c)&&(!d||m.X===d)&&(!e||m.T===e))1c(f.2O.6L(i,1),h=j,c&&d)1C}h=h&&!(0<f.2O.1d)}(c=h)&&a.1y(b);1a c}44.1b.fc=17(a,b,c,d){19 e=K(13.1H,a.1i).k();1a e===k?k:6j(13,e,a,b,c,d)};17 6j(a,b,c,d,e,f){19 h=b.1i(),h=K(a.1H,h),c=c?c.2V():k,i=[];c&&"3P"!==c?6F(b,c,d,e,f)&&i.1g(c):32(b.4d(),17(a){6F(b,a,d,e,f)&&i.1g(a)});b.f()&&1P(h,k);c=6A(h);1c(0<i.1d&&!c){1f(19 m=h,n=h.1G(),c=l;!c&&n;){19 p=n.k();1c(p){y(!4K(p));19 q=m.1q(),t=l;28(p,17(a,b){t=b.4z(q)||t});t&&(c=j)}m=n;n=n.1G()}m=k;1c(!4K(b)){n=b.2R;b.2R=k;19 x=[],P=17(b){19 c=b.k();1c(c&&3w(c))x.1g(c.1i()),c.2R==k&&c.7d(61(a,c));1n{1c(c){c.2R!=k||c.7d(61(a,c));19 d={};28(c,17(a,b){b.i.w(17(a){C(d,a)||(d[a]=j,a=c.1i().F(a),x.1g(a))})})}b.w(P)}};P(h);m=x;n&&n()}1a c?k:m}1a k}17 5h(a,b,c){2C(K(a.1H,b),17(a){(a=a.k())&&28(a,17(a,b){5D(b)})},c,j)}17 W(a,b,c){17 d(a){do{1c(h[a.1l()])1a j;a=a.1G()}er(a!==k);1a l}19 e=a.41,f=a.g.2P;a.41=f;1f(19 h={},i=0;i<c.1d;i++)h[c[i].1l()]=j;6u(e,f,b,a.1H,17(c,e,f){1c(b.2h(c)){19 h=d(c);h&&5h(a,c,l);a.cc(c,e,f);h&&5h(a,c,j)}1n a.cc(c,e,f)});d(b)&&5h(a,b,j);74(a,b)}17 74(a,b){19 c=K(a.1H,b);2C(c,17(a){(a=a.k())&&28(a,17(a,b){b.4q()})},j,j);2X(c,17(a){(a=a.k())&&28(a,17(a,b){b.4q()})},l)}44.1b.cc=17(a,b,c){a=K(13.1H,a).k();a!==k&&28(a,17(a,e){e.cc(b,c)})};17 6A(a){1a 2X(a,17(a){1a a.k()&&4K(a.k())})}17 61(a,b){1c(a.u){19 c=a.u,d=b.1i(),e=b.1l(),f=b.2F(),h,i=b.4d(),m=3w(b),n=a.u,p=17(c){1c("29"!==c){19 d="6b 1t";"es"===c?d="9W 2z et eu 5y ev ew ex 6e be ey 4S a ez eA.":"7c"==c?d="eB eC\'t 81 eD 2t 9X 5y eF 2z.":"9Y"==c&&(d="9W eG 2W 9Y");19 e=1t(c+": "+d);e.6O=c.8b();M("1U() 3Q 5C() 1f "+b.1i().1l()+" 1M: "+e.1l());b&&(28(b,17(a,b){1f(19 c=0;c<b.2O.1d;c++){19 d=b.2O[c];d.1Z&&(d.T?v(d.1Z,d.T):d.1Z)(e)}}),6j(a,b))}1n h||(m?5h(a,b.1i(),j):32(i,17(a){(a=b.1I(a))&&5D(a)}),74(a,b.1i()))},q=b.1l(),t=b.1i().1l();n.2a[t]=n.2a[t]||{};y(!n.2a[t][q],"9N() 6d eH 1f eI 1i/eJ.");n.2a[t][q]={2F:b.2F(),C:p};n.P&&fd(n,t,q,b.2F(),p);1a 17(){h=j;1V(c,d,e,f)}}1a da}44.1b.3g=17(a,b,c,d){19 e={};28(b,17(b,h){19 i=h.3g(a,c,d);cc(i,17(a,b){e[b]=3===a?3:(1N(e,b)||a)===a?a:3})});c.N()||c.w(17(a){C(e,a)||(e[a]=4)});1a e};17 6Z(a,b,c,d,e){19 f=b.1i(),b=a.3g(f,b,d,e),h=N,i=[];cc(b,17(b,n){19 p=1e J(n);3===b||1===b?h=h.H(n,d.Q(p)):(2===b&&i.1g({1i:f.F(n),2r:N}),i=i.62(6a(a,d.Q(p),K(c,p),e)))});1a[{1i:f,2r:h}].62(i)}17 66(a,b,c,d){19 e;a:{19 f=K(a.1H,b);e=f.1G();1f(19 h=[];e!==k;){19 i=e.k();1c(i!==k){1c(3w(i)){e=[{1i:b,2r:c}];1C a}i=a.3g(b,i,c,d);f=1N(i,f.1q());1c(3===f||1===f){e=[{1i:b,2r:c}];1C a}2===f&&h.1g({1i:b,2r:N})}f=e;e=e.1G()}e=h}1c(1==e.1d&&(!e[0].2r.f()||c.f()))1a e;h=K(a.1H,b);f=h.k();f!==k?3w(f)?e.1g({1i:b,2r:c}):e=e.62(6Z(a,f,h,c,d)):e=e.62(6a(a,c,h,d));1a e}17 6a(a,b,c,d){19 e=c.k();1c(e!==k)1a 3w(e)?[{1i:c.1i(),2r:b}]:6Z(a,e,c,b,d);19 f=[];c.w(17(c){19 e=b.N()?N:b.M(c.1q()),c=6a(a,e,c,d);f=f.62(c)});1a f};17 $d(a,b){1c(!a||"1z"!==1k a)1a a;y(".4U"1o a,"eK eL eM 3Q 1Y 8D");1a b[a[".4U"]]}17 ae(a,b){19 c=$d(a.j(),b),d;1c(a.N()){19 e=$d(a.k(),b);1a e!==a.k()||c!==a.j()?1e 2q(e,c):a}d=a;c!==a.j()&&(d=d.2f(c));a.w(17(a,c){19 e=ae(c,b);e!==c&&(d=d.H(a,e))});1a d};17 be(a){13.K=a;13.$=4z(a);13.u=1e bd(13.K,v(13.2K,13),v(13.51,13),v(13.32,13),v(13.5e,13),v(13.4D,13));19 b=v(17(){1a 1e 5c(13.$,13.u)},13),a=a.1l();4D[a]||(4D[a]=b());13.5q=4D[a];13.eb=1e 23;13.fb=1e 49;13.g=1e 5Z;13.G=1e 44(13.u,13.g.2p);13.43=1e 49;13.28=1e 44(k,13.43);ce(13,"5S",l);ce(13,"9Z",l);13.R=1e 48;13.5b=0}r=be.1b;r.1l=17(){1a(13.K.4k?"5F://":"7D://")+13.K.1Q};r.1q=17(){1a 13.K.4l};17 de(a){a=T(a.43,1e J(".4e/9S")).V()||0;1a(1e 4L).4M()+a}17 ee(a){a=a={7e:de(a)};a.7e=a.7e||(1e 4L).4M();1a a}r.2K=17(a,b,c){13.5b++;19 d,e,f=[];9<=a.1d&&a.eN(".1Y")===a.1d-9?(d=1e J(a.3u(0,a.1d-9)),e=T(13.g.2d,d).2f(b),f.1g(d)):c?(d=1e J(a),e=T(13.g.2d,d),cc(b,17(a,b){19 c=1e J(b);".1Y"===b?e=e.2f(a):(e=e.2w(c,Q(a)),f.1g(d.F(b)))})):(d=1e J(a),e=Q(b),f.1g(d));a=66(13.G,d,e,13.g.I);b=l;1f(c=0;c<a.1d;++c){19 h=a[c],i=13.g,m=h.1i;U(i.2d,m,h.2r);b=4N(i,m)||b}b&&(d=fe(13,d));W(13.G,d,f)};r.51=17(a){ce(13,"5S",a);1c(a===l){13.e("eO");19 b=13,c=[],d=ee(13),a=5q,e=1e 48;5q(13.R,1e J(""),17(a,b){3H(e,a,ae(b,d))});a(e,1e J(""),17(a,d){19 e=66(b.G,a,d,b.g.I);c.1g.2n(c,b.g.1p(a,e));e=7f(b,a);fe(b,e);W(b.G,e,[a])});57(13.g,c);13.R=1e 48}};r.5e=17(a){19 b=13;bc(a,17(a,d){ce(b,d,a)})};r.4D=17(a){a=1e J(a);1a T(13.g.2d,a).3o()};r.32=17(a){ce(13,"9Z",a)};17 ce(a,b,c){b=1e J("/.4e/"+b);U(a.43,b,Q(c));W(a.28,b,[b])}r.2Z=17(a,b,c){"7g-8c.7h"===13.K.4X&&M("6G.47() 3x a0 1U 8c (*.7g-8c.7h) a1. 6H 6I 1U eP (*.7g.7h) a1 7i.");13.u.2Z(a,17(a,c){X(b,a,c)},17(a,b){M("47() 6U eQ: "+b);1c(c){19 f=1t(b);f.6O=a.8b();c(f)}})};r.3k=17(a){13.u.3k(17(b){X(a,b)})};r.bb=17(a,b,c,d){13.e("1p",{1i:a.1l(),1m:b,1W:c});19 e=ee(13),b=Q(b,c),e=ae(b,e),e=66(13.G,a,e,13.g.I),f=13.g.1p(a,e),h=13;13.u.6z(a.1l(),b.V(j),17(b){"29"!==b&&M("1p at "+a+" 1M: "+b);57(h.g,f);4N(h.g,a);19 c=fe(h,a);W(h.G,c,[]);X(d,b)});e=7f(13,a);fe(13,e);W(13.G,e,[a])};r.1A=17(a,b,c){13.e("1A",{1i:a.1l(),1m:b});19 d=T(13.g.2p,a),e=j,f=[],h=ee(13),i=[],m;1f(m 1o b){19 e=l,n=Q(b[m]),n=ae(n,h),d=d.H(m,n),p=a.F(m);f.1g(p);n=66(13.G,p,n,13.g.I);i=i.62(13.g.1p(a,n))}1c(e)L("1A() 6d 4S 5w 2z.  a2\'t do a3."),X(c,"29");1n{19 q=13;5Y(13.u,"m",a.1l(),b,17(b){y("29"===b||"7c"===b,"eR at "+a+" 1M.");"29"!==b&&M("1A at "+a+" 1M: "+b);57(q.g,i);4N(q.g,a);19 d=fe(q,a);W(q.G,d,[]);X(c,b)},aa);b=7f(13,a);fe(13,b);W(q.G,b,f)}};r.4I=17(a,b,c){13.e("5t",{1i:a.1l(),1W:b});19 d=ee(13),d=$d(b,d),d=T(13.g.I,a).2f(d),d=66(13.G,a,d,13.g.I),e=13.g.1p(a,d),f=13;13.u.6z(a.1l()+"/.1Y",b,17(b){"7c"===b&&M("5t at "+a+" 1M: "+b);57(f.g,e);4N(f.g,a);19 d=fe(f,a);W(f.G,d,[]);X(c,b)});b=fe(13,a);W(f.G,b,[])};r.2N=17(a,b){19 c=13;13.u.2N(a.1l(),17(d){"29"===d&&5p(c.R,a);X(b,d)})};17 8d(a,b,c,d){19 e=Q(c);5Q(a.u,b.1l(),e.V(j),17(c){"29"===c&&3H(a.R,b,e);X(d,c)})}17 8e(a){34(a.$,"a4");a.5q.5L.a4=j}r.4f=17(a,b,c,d,e){".4e"===E(a.1i)?13.28.4f(a,b,c,d,e):13.G.4f(a,b,c,d,e)};r.fc=17(a,b,c,d){1c(".4e"===E(a.1i))13.28.fc(a,b,c,d);1n{b=13.G.fc(a,b,c,d);1c(c=b!==k){1f(19 c=13.g,d=a.1i,e=[],f=0;f<b.1d;++f)e[f]=T(c.2d,b[f]);U(c.2d,d,N);1f(f=0;f<b.1d;++f)U(c.2d,b[f],e[f]);c=4N(c,d)}c&&(y(13.g.2p.2P===13.G.41,"7Z 5r 81 eS eT eU eV by eW.  eX, 46\'eY eZ f0 f1."),U(13.g.2p,a.1i,T(13.g.I,a.1i)),13.G.41=13.g.2p.2P)}};r.2y=17(){13.u.2y()};r.ab=17(){13.u.ab()};r.4J=17(a){1c("1u"!==1k 1R){a?(13.4v||(13.4v=1e 4w(13.$)),a=13.4v.1I()):a=13.$.1I();19 b=a,c=[],d=0,e;1f(e 1o b)c[d++]=e;19 f=17(a,b){1a 1w.6Y(b.1d,a)};1c(c.a5)e=c.a5(f,0);1n{19 h=0;32(c,17(a){h=f.1v(aa,h,a)});e=h}1f(19 i 1o a){b=a[i];1f(c=i.1d;c<e+2;c++)i+=" ";1R.3n(i+b)}}};r.5j=17(a){34(13.$,a);13.5q.5L[a]=j};r.e=17(){L("r:"+13.u.1V+":",1j)};17 X(a,b,c){a&&fc(17(){1c("29"==b)a(k,c);1n{19 d=(b||"4u").8b(),e=d;c&&(e+=": "+c);e=1t(e);e.6O=d;a(e)}})};17 6J(a,b){19 c=b||a.eb;b||6K(a,c);1c(c.k()!==k){19 d=8f(a,c);y(0<d.1d);1c(4p(d,17(a){1a 1===a.1S})){1f(19 e=c.1i(),f=0;f<d.1d;f++)y(1===d[f].1S,"f2: a6 1o a7 5r 9K be f3."),d[f].1S=2,d[f].48++;c=T(a.g.I,e).3o();U(a.g.I,e,T(a.g.2p,e));1f(19 h=T(a.fb,e).V(j),i=3l(),m={},n=0;n<d.1d;n++)d[n].5I&&(m[d[n].1i.1l()]=d[n].1i);19 p=[],q;1f(q 1o m)p.1g(m[q]);1f(f=0;f<p.1d;f++)1P(K(a.g.3D,p[f]),i);a.u.6z(e.1l(),h,17(b){a.e("2k 6z 86",{1i:e.1l(),1S:b});1f(f=0;f<p.1d;f++){19 c=K(a.g.3D,p[f]),h=c.k();y(h!==k,"f4: 9V 5r 3x be 37.");h===i&&(1P(c,k),U(a.g.I,p[f],T(a.g.2d,p[f])))}1c("29"===b){b=[];1f(f=0;f<d.1d;f++)d[f].1S=3,d[f].C&&(c=8g(a,d[f].1i),b.1g(v(d[f].C,k,k,j,c))),d[f].4x();6K(a,K(a.eb,e));6J(a);1f(f=0;f<b.1d;f++)fc(b[f])}1n{1c("f5"===b)1f(f=0;f<d.1d;f++)d[f].1S=4===d[f].1S?5:1;1n{M("2k at "+e+" 1M: "+b);1f(f=0;f<d.1d;f++)d[f].1S=5,d[f].4y=b}b=fe(a,e);W(a.G,b,[e])}},c)}}1n c.2B()&&c.w(17(b){6J(a,b)})}17 fe(a,b){19 c=8h(a,b),d=c.1i(),e=8f(a,c);U(a.g.2p,d,T(a.g.I,d));U(a.fb,d,T(a.g.I,d));1c(0!==e.1d){1f(19 f=c=T(a.g.2p,d),h=[],i=0;i<e.1d;i++){19 m=3d(d,e[i].1i),n=l,p;y(m!==k,"f6: f7 5r 3x be 37.");1c(5===e[i].1S)n=j,p=e[i].4y;1n 1c(1===e[i].1S)1c(25<=e[i].48)n=j,p="f8";1n{19 q=e[i].1A(c.Q(m).V());s(q)?(2g("2k 1M: a8 a9 ",q),q=Q(q),c=c.2w(m,q),e[i].5I&&(f=f.2w(m,q))):(n=j,p="af")}n&&(e[i].1S=3,2L(e[i].4x,0),e[i].C&&(n=1e H(a,e[i].1i),m=1e R(c.Q(m),n),"af"===p?h.1g(v(e[i].C,k,k,l,m)):h.1g(v(e[i].C,k,1t(p),l,m))))}p=T(a.g.I,d).j();c=c.2f(p);f=f.2f(p);U(a.fb,d,c);U(a.g.2p,d,f);6K(a,a.eb);1f(i=0;i<h.1d;i++)fc(h[i]);6J(a)}1a d}17 8h(a,b){1f(19 c,d=a.eb;(c=E(b))!==k&&d.k()===k;)d=K(d,c),b=1O(b);1a d}17 8f(a,b){19 c=[];8i(a,b,c);c.7H(17(a,b){1a a.5X-b.5X});1a c}17 8i(a,b,c){19 d=b.k();1c(d!==k)1f(19 e=0;e<d.1d;e++)c.1g(d[e]);b.w(17(b){8i(a,b,c)})}17 6K(a,b){19 c=b.k();1c(c){1f(19 d=0,e=0;e<c.1d;e++)3!==c[e].1S&&(c[d]=c[e],d++);c.1d=d;1P(b,0<c.1d?c:k)}b.w(17(b){6K(a,b)})}17 7f(a,b){19 c=8h(a,b).1i(),d=K(a.eb,b);2X(d,17(a){7j(a)});7j(d);2C(d,17(a){7j(a)});1a c}17 7j(a){19 b=a.k();1c(b!==k){1f(19 c=[],d=-1,e=0;e<b.1d;e++)4!==b[e].1S&&(2===b[e].1S?(y(d===e-1,"f9 ff a6 5r be at fg fh a7."),d=e,b[e].1S=4,b[e].4y="1p"):(y(1===b[e].1S),b[e].4x(),b[e].C&&c.1g(v(b[e].C,k,1t("1p"),l,k))));-1===d?1P(a,k):b.1d=d+1;1f(e=0;e<c.1d;e++)fc(c[e])}}17 8g(a,b){19 c=1e H(a,b);1a 1e R(T(a.fb,b),c)};17 Y(){13.$a={}}ea(Y);Y.1b.2y=17(){1f(19 a 1o 13.$a)13.$a[a].2y()};Y.1b.ag=Y.1b.2y;Y.1b.ab=17(){1f(19 a 1o 13.$a)13.$a[a].ab()};Y.1b.fi=Y.1b.ab;19 Z={6E:17(a){19 b=O.1b.3o;O.1b.3o=a;19 c=2q.1b.3o;2q.1b.3o=a;1a 17(){O.1b.3o=b;2q.1b.3o=c}}};Z.fj=Z.6E;Z.2V=17(a){1a a.2V()};Z.fk=Z.2V;Z.5s=17(a){1a a.n.u.2a};Z.fl=Z.5s;Z.4O=17(a){1a a.n.u.2m};Z.fm=Z.4O;Z.5Z=bd;Z.fn=Z.5Z;bd.1b.ah=bd.1b.2x;bd.1b.ag=bd.1b.2y;Z.4N=2j;Z.fo=Z.4N;2j.1b.ah=2j.1b.3H;2j.1b.1F=2j.1b.1F;Z.49=3B;Z.fp=Z.49;Z.6B=17(){5d=5i=j};Z.fq=Z.6B;Z.6C=17(){59=j};Z.fr=Z.6C;Z.6F=17(a,b){a.n.u.5i=b};Z.fs=Z.6F;Z.4J=17(a,b){a.n.4J(b)};Z.ft=Z.4J;Z.5j=17(a,b){a.n.5j(b)};Z.fu=Z.5j;Z.5b=17(a){1a a.n.5b};17 $(a,b,c){13.4r=a;13.S=b;13.2T=c}$.1b.1Z=17(a){z("1h.1D().1Z",0,1,1j.1d);B("1h.1D().1Z",1,a,j);13.4r.2N(13.S,a)};$.1b.1Z=$.1b.1Z;$.1b.1y=17(a){z("1h.1D().1y",0,1,1j.1d);D("1h.1D().1y",13.S);B("1h.1D().1y",1,a,j);8d(13.4r,13.S,k,a)};$.1b.1y=$.1b.1y;$.1b.1p=17(a,b){z("1h.1D().1p",1,2,1j.1d);D("1h.1D().1p",13.S);1X("1h.1D().1p",a,l);B("1h.1D().1p",2,b,j);8d(13.4r,13.S,a,b)};$.1b.1p=$.1b.1p;$.1b.bb=17(a,b,c){z("1h.1D().2l",2,3,1j.1d);D("1h.1D().2l",13.S);1X("1h.1D().2l",a,l);22("1h.1D().2l",2,b,l);B("1h.1D().2l",3,c,j);(".1d"===13.2T||".4d"===13.2T)&&g("1h.1D().2l 1M: "+13.2T+" 2W a 8j-7i 1z.");19 d=13.4r,e=13.S,f=Q(a,b);5Q(d.u,e.1l(),f.V(j),17(a){"29"===a&&3H(d.R,e,f);X(c,a)})};$.1b.2l=$.1b.bb;$.1b.1A=17(a,b){z("1h.1D().1A",1,2,1j.1d);D("1h.1D().1A",13.S);2T("1h.1D().1A",a);B("1h.1D().1A",2,b,j);19 c=13.4r,d=13.S,e=j,f;1f(f 1o a)e=l;1c(e)L("1D().1A() 6d 4S 5w 2z.  a2\'t do a3."),X(b,j);1n{e=c.u;f=d.1l();19 h=17(e){1c("29"===e)1f(19 f 1o a){19 h=Q(a[f]);3H(c.R,d.F(f),h)}X(b,e)};e.P?4C(e,"ai",f,a,h):e.3i.1g({4F:f,5o:"ai",2z:a,C:h})}};$.1b.1A=$.1b.1A;19 8k,6y=0,67=[];8k=17(a){19 b=a===6y;6y=a;1f(19 c=38(8),d=7;0<=d;d--)c[d]="-aj".6m(a%64),a=1w.3K(a/64);y(0===a);a=c.39("");1c(b){1f(d=11;0<=d&&63===67[d];d--)67[d]=0;67[d]++}1n 1f(d=0;12>d;d++)67[d]=1w.3K(64*1w.4Q());1f(d=0;12>d;d++)a+="-aj".6m(67[d]);y(20===a.1d,"fv: fw 5r be 20.");1a a};17 H(){19 a,b,c;1c(1j[0]3J be)c=1j[0],a=1j[1];1n{z("1e 1h",1,2,1j.1d);19 d=1j[0];b=a="";19 e=j,f="";1c(u(d)){19 h=d.3t("//");1c(0<=h)19 i=d.3u(0,h-1),d=d.3u(h+2);h=d.3t("/");-1===h&&(h=d.1d);a=d.3u(0,h);19 d=d.3u(h+1),m=a.3T(".");1c(3==m.1d){h=m[2].3t(":");e=0<=h?"5F"===i:j;1c("5z"===m[1])51(a+" 2W 8x fx a0. 6H 6I <fy 6n>.7g.7h 8l");1n{b=m[0];f="";d=("/"+d).3T("/");1f(i=0;i<d.1d;i++)1c(0<d[i].1d){h=d[i];3N{h=fz(h.3M(/\\+/g," "))}3O(n){}f+="/"+h}}b=b.7C()}1n b=k}e||"1u"!==1k 1L&&(1L.73&&1L.73.85&&-1!==1L.73.85.3t("5F:"))&&M("fA 1h 9X 88 a fB fC. 6H 6I 5F 1o fD 2t 1e 1h().");a=1e 3B(a,e,b);b=1e J(f);e=b.1l();1c(!(d=!u(a.1Q)))1c(!(d=0===a.1Q.1d))1c(!(d=!2f(a.4l)))1c(d=0!==e.1d)e&&(e=e.3M(/^\\/*\\.4e(\\/|$)/,"/")),d=!(u(e)&&0!==e.1d&&!2w.3L(e));d&&g(1t(A("1e 1h",1,l)+\'2u be a 4T 5z fE 5x 5y 1i 6e\\\'t 6T ".", "#", "$", "[", 3Q "]".\'));1j[1]?1j[1]3J Y?c=1j[1]:g(1t("fF a 4T 1h.ak 1f 8A 6S 2t 1e 1h()")):c=Y.3I();e=a.1l();d=1N(c.$a,e);d||(d=1e be(a),c.$a[e]=d);c=d;a=b}F.1v(13,c,a)}1H(H,F);19 8m=H,68=["1h"],4a=ca;!(68[0]1o 4a)&&4a.al&&4a.al("19 "+68[0]);1f(19 46;68.1d&&(46=68.7X());)!68.1d&&s(8m)?4a[46]=8m:4a=4a[46]?4a[46]:4a[46]={};H.1b.1q=17(){z("1h.1q",0,0,1j.1d);1a 13.1i.f()?k:13.1i.Z<13.1i.m.1d?13.1i.m[13.1i.m.1d-1]:k};H.1b.1q=H.1b.1q;H.1b.F=17(a){z("1h.55",1,1,1j.1d);1c(1T(a))a=5u(a);1n 1c(!(a 3J J))1c(E(13.1i)===k){19 b=a;b&&(b=b.3M(/^\\/*\\.4e(\\/|$)/,"/"));2y("1h.55",b)}1n 2y("1h.55",a);1a 1e H(13.n,13.1i.F(a))};H.1b.55=H.1b.F;H.1b.1G=17(){z("1h.1G",0,0,1j.1d);19 a=13.1i.1G();1a a===k?k:1e H(13.n,a)};H.1b.1G=H.1b.1G;H.1b.8n=17(){z("1h.6h",0,0,1j.1d);1f(19 a=13;a.1G()!==k;)a=a.1G();1a a};H.1b.8n=H.1b.8n;H.1b.1l=17(){z("1h.1l",0,0,1j.1d);19 a;1c(13.1G()===k)a=13.n.1l();1n{a=13.1G().1l()+"/";19 b=13.1q();a+=fG(5u(b))}1a a};H.1b.1l=H.1b.1l;H.1b.1p=17(a,b){z("1h.1p",1,2,1j.1d);D("1h.1p",13.1i);1X("1h.1p",a,l);B("1h.1p",2,b,j);1a 13.n.bb(13.1i,a,k,b)};H.1b.1p=H.1b.1p;H.1b.1A=17(a,b){z("1h.1A",1,2,1j.1d);D("1h.1A",13.1i);2T("1h.1A",a);B("1h.1A",2,b,j);C(a,".1Y")&&g(1t("1A() fH 3x fI fJ fK .1Y."));1a 13.n.1A(13.1i,a,b)};H.1b.1A=H.1b.1A;H.1b.bb=17(a,b,c){z("1h.2l",2,3,1j.1d);D("1h.2l",13.1i);1X("1h.2l",a,l);22("1h.2l",2,b,l);B("1h.2l",3,c,j);(".1d"===13.1q()||".4d"===13.1q())&&g("1h.2l 1M: "+13.1q()+" 2W a 8j-7i 1z.");1a 13.n.bb(13.1i,a,b,c)};H.1b.2l=H.1b.bb;H.1b.1y=17(a){z("1h.1y",0,1,1j.1d);D("1h.1y",13.1i);B("1h.1y",1,a,j);13.1p(k,a)};H.1b.1y=H.1b.1y;H.1b.2k=17(a,b,c){17 d(){}z("1h.2k",1,3,1j.1d);D("1h.2k",13.1i);B("1h.2k",1,a,l);B("1h.2k",2,b,j);s(c)&&"7r"!=1k c&&g(1t(A("1h.2k",3,j)+"2u be a 7r."));(".1d"===13.1q()||".4d"===13.1q())&&g("1h.2k 1M: "+13.1q()+" 2W a 8j-7i 1z.");"1u"===1k c&&(c=j);19 e=13.n,f=13.1i,h=c;e.e("2k 1U "+f);19 i=1e H(e,f);i.3v("1m",d);19 h={1i:f,1A:a,C:b,1S:k,5X:3l(),5I:h,48:0,4x:17(){i.2A("1m",d)},4y:k},m=h.1A(T(e.fb,f).V());1c(s(m)){2g("2k 1M: a8 a9 ",m);h.1S=1;19 n=K(e.eb,f),p=n.k()||[];p.1g(h);1P(n,p);p="1z"===1k m&&m!==k&&C(m,".1Y")?m[".1Y"]:T(e.g.I,f).j();n=ee(e);m=Q(m,p);m=ae(m,n);U(e.fb,f,m);h.5I&&(U(e.g.2p,f,m),W(e.G,f,[f]));6J(e)}1n h.4x(),h.C&&(e=8g(e,f),h.C(k,l,e))};H.1b.2k=H.1b.2k;H.1b.4I=17(a,b){z("1h.5t",1,2,1j.1d);D("1h.5t",13.1i);22("1h.5t",1,a,l);B("1h.5t",2,b,j);13.n.4I(13.1i,a,b)};H.1b.5t=H.1b.4I;H.1b.1g=17(a,b){z("1h.1g",0,2,1j.1d);D("1h.1g",13.1i);1X("1h.1g",a,j);B("1h.1g",2,b,j);19 c=de(13.n),c=8k(c),c=13.F(c);"1u"!==1k a&&a!==k&&c.1p(a,b);1a c};H.1b.1g=H.1b.1g;H.1b.1T=17(){1a 1e $(13.n,13.1i,13.1q())};H.1b.1D=H.1b.1T;H.1b.6D=17(){M("6G.am() 76 ao. 6H 6I 6G.1D().1y() 8l.");13.1T().1y();8e(13.n)};H.1b.am=H.1b.6D;H.1b.61=17(a){M("6G.ap(1m) 76 ao. 6H 6I 6G.1D().1p(1m) 8l.");13.1T().1p(a);8e(13.n)};H.1b.ap=H.1b.61;H.1b.2Z=17(a,b,c){z("1h.47",1,3,1j.1d);u(a)||g(1t(A("1h.47",1,l)+"2u be a 4T 87 (a 3s)."));B("1h.47",2,b,j);B("1h.47",3,b,j);13.n.2Z(a,b,c)};H.1b.47=H.1b.2Z;H.1b.3k=17(a){z("1h.7b",0,1,1j.1d);B("1h.7b",1,a,j);13.n.3k(a)};H.1b.7b=H.1b.3k;H.aq=17(){z("1h.aq",0,0,1j.1d);Y.3I().2y()};H.ar=17(){z("1h.ar",0,0,1j.1d);Y.3I().ab()};17 4g(a,b){y(!b||a===j||a===l,"7z\'t fL 1U fM fN fO.");a===j?("1u"!==1k 1R&&("17"===1k 1R.3n?2I=v(1R.3n,1R):"1z"===1k 1R.3n&&(2I=17(a){1R.3n(a)})),b&&3A.1p("7G",j)):a?2I=a:(2I=k,3A.1y("7G"))}H.fP=4g;H.fQ={fR:{".4U":"7e"}};H.6W=Z;H.ak=Y})();',62,984,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||||function||var|return|prototype|if|length|new|for|push|Firebase|path|arguments|typeof|toString|value|else|in|set|name|key|left|Error|undefined|call|Math|document|remove|object|update|right|break|onDisconnect|Query|close|parent|la|get|case|copy|window|failed|wa|Ma|Qa|host|console|status|ha|on|id|ia|Aa|priority|cancel||Ca|Fa|Pa|||Ua||Ec|ok|ga|oa|qa|sa|ta|za|Ba|contains|count|Uc|transaction|setWithPriority|ja|apply|ka|ma|gc|pa|type|to|must|va|ya|Ga|Ia|data|ub|nb|Sa|delete|Wa|Za|rc|yb|Rb|Xb|Yb|setTimeout|DataSnapshot|Hc|na|ra|ua|xa|Da|Ea|Ka|La|is|Ta|gb|hb|||vb|Ib|xc|connection||null|Array|join|Ha|Ra|Ja|Na|Ab|kb|lb|sb|wb|Db|Kb|Nb|Qb|log|hash|lc|body|number|string|indexOf|substring|Xa|Ld|not|Oa|tb|ob|pb|zb|Bb|Lb|Ub|ic|od|mb|instanceof|floor|test|replace|try|catch|default|or|Nc|zd|split|Va|Ya|ib|qb|Cb|Jb||Vb|tc|Dc|Qd|frames|we|auth|nd|rd|ve|children|child_added|keys|info|Mb|Tb|color|jb|Pb|hc|Sb|rb|Zb|4294967295|xb|Eb|Fb|Gb|Hb|error|kc|yc|nc|oc|Cc|Ac|addEventListener|kd|Bc|pc|Mc|send|Id|Pc|Qc|Md|Date|getTime|td|Nd|array|random|JSON|with|valid|sv|child_removed|sc|domain|forEach|Ob||Wb||jc|mc|child||vd|Xc|Jc|vc|wc|zc|Ic|Kc|clearTimeout|Lc|Vd|Oc|Rc|Wc|online|Pd|gd|action|pd|qd|should|Fd|setPriority|String|1E3|empty|and|the|firebase|child_changed|child_moved|once|Ed|md|https|Vc|navigator|qc|visible|uc|Sc|Fc|Gc|open|start|jd|Zc|connected|Tc|Yc|Kd|Jd|hd|ld|sd||Sd|concat||||Zd|se|ue|Object|Yd|Unknown|128|called|can|startAt|endAt|ref|off|Ud|substr|ud|charAt|FIREBASE|Number|pow|wd|Ad|xd|add|Hd|src|isAvailable|WebSocket|re|put|Rd|Bd|Cd|Od|Dd|Td|FirebaseRef|Please|use|je|ke|splice|propertyIsEnumerable|slice|code|switch|hasOwnProperty|charCodeAt|argument|contain|was|limit|INTERNAL|parseInt|max|Xd|received|3E4|Gd|location|Wd|closing|being|script|Websocket|yd|reconnect|unauth|permission_denied|setActive|timestamp|ge|firebaseio|com|only|pe|Window|Function|bind|u2028|u2029|x00|x1f|boolean|uffff|none|10485760|invalid|non|strings|event|Can|ERROR|removeItem|toLowerCase|http|reset|userAgent|logging_enabled|sort|hasChild|bytes_received|command|connect|complete|readyState|attachEvent|onreadystatechange|onload|createElement|appendChild|chrome|removeChild|contentWindow|javascript|shift|previous_websocket_failure|We||have|Connection|Realtime|client|protocol|response|credential|from|server|defaultView|toUpperCase|demo|he|ie|le|me|ne|oe|read|qe|instead|te|root|void|2147483648|isNaN|x7f|256|parse|stringify|55296|65536|no|than|First|second|it|context|contents|pop|setItem|sentinel|map|every|MSIE|WebKit|opera|version|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|255|warn|required|min|1023|round|shouldn|created|val|exportVal|getPriority|hasChildren|numChildren|hidden|mozHidden|msHidden|webkitHidden|ns|Unrecognized|ser|1E8|poll|out|trying|load|iframe|pw|style|display|Windows|Longpoll|itself|closed|bytes_sent|No|has|ready|contentDocument|html|frame|stack|ts|parentNode|onerror|MozWebSocket|ws|disconnected|already|Closing|clearInterval|old|detected|transmission|primary|Shutting|down|packet|secondary|all|offline|when|listen|using|atob|Reducing|msg|serverTimeOffset|Browser|went|pendingPut|The|access|unavailable|authenticated|supported|Firebases|Don|anything|deprecated_on_disconnect|reduce|items|queue|Data|returned||||||nodata|interrupt|sendRequest|om|0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz|Context|execScript|removeOnDisconnect||deprecated|setOnDisconnect|goOffline|goOnline|||throw|unshift|native|bfnrtu|x08|x10|x80|x9f|true|false|eval|Invalid|isFinite|x0B|u000b|xff|000|00|4096|56319|Surrogate|pair|missing|trail|surrogate|56320|2048|192|224|240|least|more|Was|Expects|first|Second|third|Third|fourth|Fourth|assert|errorPrefix_||||||argumentNumber|Need|TypeError|cyclic|100|greater|utf8|bytes|Keys|property|containing|Paths|modify|under|combine|positive|integer|sp|sn||vf|either|callback|innerPath|within|outerPath|Attempted|find|predecessor|nonexistent|What|gives|getItem|cache|localStorage|sessionStorage|1732584193|4023233417|2562383102|271733878|3285377520|1518500249|1859775393|2400959708|3395469782|Opera|Gecko|product|rv|exec|encodeByteArray|takes|parameter|_|ASSERT|FAILED|FATAL||||||WARNING|POSITIVE_INFINITY|NEGATIVE_INFINITY|Missing|Infinity|abs|1022|LN2|1074|reverse|2147483647|LeafNode|visibilitychange|mozvisibilitychange|msvisibilitychange|webkitvisibilitychange|6E4|reportStats|6E5|pLPCommand|pRTLPCB|lp|Connecting|via|long|Timed|DOMContentLoaded|dframe|extension|href|1840|IE|setting|Document|initialized|Wait|initialize|until|after|write|writing|exception|innerHTML|1870|seg|25E3|text|async|loaded|Long|wss|connecting|timed|onopen|onclose|onmessage|buffer||||||match|Android|parseFloat|16384|setInterval|45E3|transports|available|lost||established|Protocol|mismatch|recvd|end|shutdown|Reset|New|Server|control|sending|ack|Ending|Got|layer|message|cleaning|up|promoting|realtime|connections|3E5|fblocal|sendRequest_|allowed|Listen|Authenticating|base64DecodeIfNativeSupport|isAdminAuthToken_|admin|Admin|time|cred|Unlisten|side|occurred|handleServerMessage|nFIREBASE|nAre|you|latest|Scheduling|ing|Making|attempt|became|delay||||||Reconnecting|Killing|don|disconnect|isn|Delaying|Trying|ms||storing||QueryMaps|while|too_big|requested|exceeds|maximum|size|that|accessed|single|request|Client|doesn|permission||desired|service|twice|same|queryId|Unexpected|leaf|node|lastIndexOf|onDisconnectEvents|production|canceled|merge|raised|any|outstanding|events|now|Else|ll|blow|them|away|tryToSendTransactionQueue_|run|sendTransactionQueue_|datastale|rerunTransactionsUnderNode_|relativePath|maxretry|All||||||SENT|beginning|of|resume|hijackHash|queryIdentifier|listens|refConnection|DataConnection|RealTimeConnection|ConnectionTarget|forceLongPolling|forceWebSockets|setSecurityDebugCallback|stats|statsIncrementCounter|NextPushId|Length|longer|YOUR|decodeURIComponent|Insecure|secure|page|calls|URL|Expected|encodeURIComponent|does|currently|support|updating|turn|custom|loggers|persistently|enableLogging|ServerValue|TIMESTAMP'.split('|'),0,{}));
