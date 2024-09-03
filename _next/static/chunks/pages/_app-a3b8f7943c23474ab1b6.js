(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        3646: function(e, t, n) {
            var r = n(7228);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        9713: function(e) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        6860: function(e) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        8206: function(e) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        319: function(e, t, n) {
            var r = n(3646),
                a = n(6860),
                i = n(379),
                o = n(8206);
            e.exports = function(e) {
                return r(e) || a(e) || i(e) || o()
            }
        },
        7544: function(e, t, n) {
            e.exports = n(6381)
        },
        3367: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var a = ((r = n(7294)) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = a
        },
        7845: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = o, t.useAmp = function() {
                return o(a.default.useContext(i.AmpStateContext))
            };
            var r, a = (r = n(7294)) && r.__esModule ? r : {
                    default: r
                },
                i = n(3367);

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    a = void 0 !== r && r,
                    i = e.hasQuery,
                    o = void 0 !== i && i;
                return n || a && o
            }
        },
        7947: function(e, t, n) {
            "use strict";
            var r = n(9713);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            t.__esModule = !0, t.defaultHead = d, t.default = void 0;
            var i, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(7294)),
                s = (i = n(617)) && i.__esModule ? i : {
                    default: i
                },
                c = n(3367),
                l = n(4287),
                f = n(7845);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function p(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var m = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                return e.reduce((function(e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(p, []).reverse().concat(d(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(a) {
                        var i = !0,
                            o = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            o = !0;
                            var s = a.key.slice(a.key.indexOf("$") + 1);
                            e.has(s) ? i = !1 : e.add(s)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                t.has(a.type) ? i = !1 : t.add(a.type);
                                break;
                            case "meta":
                                for (var c = 0, l = m.length; c < l; c++) {
                                    var f = m[c];
                                    if (a.props.hasOwnProperty(f))
                                        if ("charSet" === f) n.has(f) ? i = !1 : n.add(f);
                                        else {
                                            var u = a.props[f],
                                                d = r[f] || new Set;
                                            "name" === f && o || !d.has(u) ? (d.add(u), r[f] = d) : i = !1
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(e, n) {
                    var i = e.key || n;
                    if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                            return e.props.href.startsWith(t)
                        }))) {
                        var s = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? a(Object(n), !0).forEach((function(t) {
                                    r(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.props || {});
                        return s["data-href"] = s.href, s.href = void 0, s["data-optimized-fonts"] = !0, o.default.cloneElement(e, s)
                    }
                    return o.default.cloneElement(e, {
                        key: i
                    })
                }))
            }

            function g(e) {
                var t = e.children,
                    n = (0, o.useContext)(c.AmpStateContext),
                    r = (0, o.useContext)(l.HeadManagerContext);
                return o.default.createElement(s.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: (0, f.isInAmpMode)(n)
                }, t)
            }
            g.rewind = function() {};
            var v = g;
            t.default = v
        },
        617: function(e, t, n) {
            "use strict";
            var r = n(319),
                a = n(4575),
                i = n(3913),
                o = (n(1506), n(2205)),
                s = n(8585),
                c = n(9754);

            function l(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var a = c(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var f = n(7294),
                u = function(e) {
                    o(n, e);
                    var t = l(n);

                    function n(e) {
                        var i;
                        return a(this, n), (i = t.call(this, e))._hasHeadManager = void 0, i.emitChange = function() {
                            i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                        }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i
                    }
                    return i(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(f.Component);
            t.default = u
        },
        6381: function(e, t, n) {
            "use strict";
            var r = n(7757),
                a = n(4575),
                i = n(3913),
                o = n(2205),
                s = n(8585),
                c = n(9754),
                l = n(8926);

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var a = c(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var u = n(5318);
            t.default = void 0;
            var d = u(n(7294)),
                p = n(3937);

            function m(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l(r.mark((function e(t) {
                    var n, a, i;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.Component, a = t.ctx, e.next = 3, (0, p.loadGetInitialProps)(n, a);
                            case 3:
                                return i = e.sent, e.abrupt("return", {
                                    pageProps: i
                                });
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            p.AppInitialProps, p.NextWebVitalsMetric;
            var g = function(e) {
                o(n, e);
                var t = f(n);

                function n() {
                    return a(this, n), t.apply(this, arguments)
                }
                return i(n, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        throw e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.router,
                            n = e.Component,
                            r = e.pageProps,
                            a = e.__N_SSG,
                            i = e.__N_SSP;
                        return d.default.createElement(n, Object.assign({}, r, a || i ? {} : {
                            url: v(t)
                        }))
                    }
                }]), n
            }(d.default.Component);

            function v(e) {
                var t = e.pathname,
                    n = e.asPath,
                    r = e.query;
                return {
                    get query() {
                        return r
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return n
                    },
                    back: function() {
                        e.back()
                    },
                    push: function(t, n) {
                        return e.push(t, n)
                    },
                    pushTo: function(t, n) {
                        var r = n ? t : "",
                            a = n || t;
                        return e.push(r, a)
                    },
                    replace: function(t, n) {
                        return e.replace(t, n)
                    },
                    replaceTo: function(t, n) {
                        var r = n ? t : "",
                            a = n || t;
                        return e.replace(r, a)
                    }
                }
            }
            t.default = g, g.origGetInitialProps = m, g.getInitialProps = m
        },
        7645: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n(5893);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n(7294);
            var u = n(7544),
                d = n(7129),
                p = (n(7807), n(8857), n(6390), n(1785)),
                m = n.n(p);
            n(1299);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function v(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var a = f(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(l, e);
                var t, n, r, c = v(l);

                function l() {
                    return i(this, l), c.apply(this, arguments)
                }
                return t = l, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        m().initialize({
                            gtmId: "GTM-MJKW76N"
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.Component,
                            n = e.pageProps;
                        return n.path = this.props.router.asPath, (0, a.jsx)(d.default, {
                            children: (0, a.jsx)(t, g({}, n))
                        })
                    }
                }]) && o(t.prototype, n), r && o(t, r), l
            }(u.default)
        },
        7129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return et
                }
            });
            var r = n(5893),
                a = n(1779),
                i = n(5722),
                o = n(1201),
                s = n(8154),
                c = n(5169);

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (c) {
                        a = !0, i = c
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var m = function() {},
                h = {},
                g = {},
                v = {
                    mark: m,
                    measure: m
                };
            try {
                "undefined" !== typeof window && (h = window), "undefined" !== typeof document && (g = document), "undefined" !== typeof MutationObserver && MutationObserver, "undefined" !== typeof performance && (v = performance)
            } catch (tt) {}
            var y = (h.navigator || {}).userAgent,
                b = void 0 === y ? "" : y,
                x = h,
                w = g,
                j = v,
                k = (x.document, !!w.documentElement && !!w.head && "function" === typeof w.addEventListener && "function" === typeof w.createElement),
                N = (~b.indexOf("MSIE") || b.indexOf("Trident/"), "svg-inline--fa"),
                O = "data-fa-i2svg",
                _ = (function() {
                    try {} catch (tt) {
                        return !1
                    }
                }(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                M = _.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                P = {
                    GROUP: "group",
                    SWAP_OPACITY: "swap-opacity",
                    PRIMARY: "primary",
                    SECONDARY: "secondary"
                },
                C = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", P.GROUP, P.SWAP_OPACITY, P.PRIMARY, P.SECONDARY].concat(_.map((function(e) {
                    return "".concat(e, "x")
                }))).concat(M.map((function(e) {
                    return "w-".concat(e)
                }))), x.FontAwesomeConfig || {});
            if (w && "function" === typeof w.querySelector) {
                [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach((function(e) {
                    var t = p(e, 2),
                        n = t[0],
                        r = t[1],
                        a = function(e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function(e) {
                            var t = w.querySelector("script[" + e + "]");
                            if (t) return t.getAttribute(e)
                        }(n));
                    void 0 !== a && null !== a && (C[r] = a)
                }))
            }
            var S = d({}, {
                familyPrefix: "fa",
                replacementClass: N,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            }, C);
            S.autoReplaceSvg || (S.observeMutations = !1);
            var A = d({}, S);
            x.FontAwesomeConfig = A;
            var E = x || {};
            E.___FONT_AWESOME___ || (E.___FONT_AWESOME___ = {}), E.___FONT_AWESOME___.styles || (E.___FONT_AWESOME___.styles = {}), E.___FONT_AWESOME___.hooks || (E.___FONT_AWESOME___.hooks = {}), E.___FONT_AWESOME___.shims || (E.___FONT_AWESOME___.shims = []);
            var I = E.___FONT_AWESOME___,
                z = [];
            k && ((w.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(w.readyState) || w.addEventListener("DOMContentLoaded", (function e() {
                w.removeEventListener("DOMContentLoaded", e), 1, z.map((function(e) {
                    return e()
                }))
            })));
            var T, L = "pending",
                D = "settled",
                R = "fulfilled",
                W = "rejected",
                H = function() {},
                F = "undefined" !== typeof n.g && "undefined" !== typeof n.g.process && "function" === typeof n.g.process.emit,
                q = "undefined" === typeof setImmediate ? setTimeout : setImmediate,
                Y = [];

            function B() {
                for (var e = 0; e < Y.length; e++) Y[e][0](Y[e][1]);
                Y = [], T = !1
            }

            function U(e, t) {
                Y.push([e, t]), T || (T = !0, q(B, 0))
            }

            function X(e) {
                var t = e.owner,
                    n = t._state,
                    r = t._data,
                    a = e[n],
                    i = e.then;
                if ("function" === typeof a) {
                    n = R;
                    try {
                        r = a(r)
                    } catch (tt) {
                        J(i, tt)
                    }
                }
                G(i, r) || (n === R && V(i, r), n === W && J(i, r))
            }

            function G(e, t) {
                var n;
                try {
                    if (e === t) throw new TypeError("A promises callback cannot return that same promise.");
                    if (t && ("function" === typeof t || "object" === l(t))) {
                        var r = t.then;
                        if ("function" === typeof r) return r.call(t, (function(r) {
                            n || (n = !0, t === r ? Z(e, r) : V(e, r))
                        }), (function(t) {
                            n || (n = !0, J(e, t))
                        })), !0
                    }
                } catch (tt) {
                    return n || J(e, tt), !0
                }
                return !1
            }

            function V(e, t) {
                e !== t && G(e, t) || Z(e, t)
            }

            function Z(e, t) {
                e._state === L && (e._state = D, e._data = t, U(K, e))
            }

            function J(e, t) {
                e._state === L && (e._state = D, e._data = t, U($, e))
            }

            function Q(e) {
                e._then = e._then.forEach(X)
            }

            function K(e) {
                e._state = R, Q(e)
            }

            function $(e) {
                e._state = W, Q(e), !e._handled && F && n.g.process.emit("unhandledRejection", e._data, e)
            }

            function ee(e) {
                n.g.process.emit("rejectionHandled", e)
            }

            function te(e) {
                if ("function" !== typeof e) throw new TypeError("Promise resolver " + e + " is not a function");
                if (this instanceof te === !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._then = [],
                    function(e, t) {
                        function n(e) {
                            J(t, e)
                        }
                        try {
                            e((function(e) {
                                V(t, e)
                            }), n)
                        } catch (tt) {
                            n(tt)
                        }
                    }(e, this)
            }
            te.prototype = {
                constructor: te,
                _state: L,
                _then: null,
                _data: void 0,
                _handled: !1,
                then: function(e, t) {
                    var n = {
                        owner: this,
                        then: new this.constructor(H),
                        fulfilled: e,
                        rejected: t
                    };
                    return !t && !e || this._handled || (this._handled = !0, this._state === W && F && U(ee, this)), this._state === R || this._state === W ? U(X, n) : this._then.push(n), n.then
                },
                catch: function(e) {
                    return this.then(null, e)
                }
            }, te.all = function(e) {
                if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.all().");
                return new te((function(t, n) {
                    var r = [],
                        a = 0;

                    function i(e) {
                        return a++,
                            function(n) {
                                r[e] = n, --a || t(r)
                            }
                    }
                    for (var o, s = 0; s < e.length; s++)(o = e[s]) && "function" === typeof o.then ? o.then(i(s), n) : r[s] = o;
                    a || t(r)
                }))
            }, te.race = function(e) {
                if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.race().");
                return new te((function(t, n) {
                    for (var r, a = 0; a < e.length; a++)(r = e[a]) && "function" === typeof r.then ? r.then(t, n) : t(r)
                }))
            }, te.resolve = function(e) {
                return e && "object" === l(e) && e.constructor === te ? e : new te((function(t) {
                    t(e)
                }))
            }, te.reject = function(e) {
                return new te((function(t, n) {
                    n(e)
                }))
            };
            var ne = {
                size: 16,
                x: 0,
                y: 0,
                rotate: 0,
                flipX: !1,
                flipY: !1
            };

            function re(e) {
                if (e && k) {
                    var t = w.createElement("style");
                    t.setAttribute("type", "text/css"), t.innerHTML = e;
                    for (var n = w.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                        var i = n[a],
                            o = (i.tagName || "").toUpperCase();
                        ["STYLE", "LINK"].indexOf(o) > -1 && (r = i)
                    }
                    return w.head.insertBefore(t, r), e
                }
            }

            function ae() {
                for (var e = 12, t = ""; e-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return t
            }

            function ie(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function oe(e) {
                return Object.keys(e || {}).reduce((function(t, n) {
                    return t + "".concat(n, ": ").concat(e[n], ";")
                }), "")
            }

            function se(e) {
                return e.size !== ne.size || e.x !== ne.x || e.y !== ne.y || e.rotate !== ne.rotate || e.flipX || e.flipY
            }

            function ce(e) {
                var t = e.transform,
                    n = e.containerWidth,
                    r = e.iconWidth,
                    a = {
                        transform: "translate(".concat(n / 2, " 256)")
                    },
                    i = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                    o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                    s = "rotate(".concat(t.rotate, " 0 0)");
                return {
                    outer: a,
                    inner: {
                        transform: "".concat(i, " ").concat(o, " ").concat(s)
                    },
                    path: {
                        transform: "translate(".concat(r / 2 * -1, " -256)")
                    }
                }
            }
            var le = {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%"
            };

            function fe(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
            }

            function ue(e) {
                var t = e.icons,
                    n = t.main,
                    r = t.mask,
                    a = e.prefix,
                    i = e.iconName,
                    o = e.transform,
                    s = e.symbol,
                    c = e.title,
                    l = e.maskId,
                    f = e.titleId,
                    u = e.extra,
                    p = e.watchable,
                    m = void 0 !== p && p,
                    h = r.found ? r : n,
                    g = h.width,
                    v = h.height,
                    y = "fak" === a,
                    b = y ? "" : "fa-w-".concat(Math.ceil(g / v * 16)),
                    x = [A.replacementClass, i ? "".concat(A.familyPrefix, "-").concat(i) : "", b].filter((function(e) {
                        return -1 === u.classes.indexOf(e)
                    })).filter((function(e) {
                        return "" !== e || !!e
                    })).concat(u.classes).join(" "),
                    w = {
                        children: [],
                        attributes: d({}, u.attributes, {
                            "data-prefix": a,
                            "data-icon": i,
                            class: x,
                            role: u.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(g, " ").concat(v)
                        })
                    },
                    j = y && !~u.classes.indexOf("fa-fw") ? {
                        width: "".concat(g / v * 16 * .0625, "em")
                    } : {};
                m && (w.attributes[O] = ""), c && w.children.push({
                    tag: "title",
                    attributes: {
                        id: w.attributes["aria-labelledby"] || "title-".concat(f || ae())
                    },
                    children: [c]
                });
                var k = d({}, w, {
                        prefix: a,
                        iconName: i,
                        main: n,
                        mask: r,
                        maskId: l,
                        transform: o,
                        symbol: s,
                        styles: d({}, j, u.styles)
                    }),
                    N = r.found && n.found ? function(e) {
                        var t, n = e.children,
                            r = e.attributes,
                            a = e.main,
                            i = e.mask,
                            o = e.maskId,
                            s = e.transform,
                            c = a.width,
                            l = a.icon,
                            f = i.width,
                            u = i.icon,
                            p = ce({
                                transform: s,
                                containerWidth: f,
                                iconWidth: c
                            }),
                            m = {
                                tag: "rect",
                                attributes: d({}, le, {
                                    fill: "white"
                                })
                            },
                            h = l.children ? {
                                children: l.children.map(fe)
                            } : {},
                            g = {
                                tag: "g",
                                attributes: d({}, p.inner),
                                children: [fe(d({
                                    tag: l.tag,
                                    attributes: d({}, l.attributes, p.path)
                                }, h))]
                            },
                            v = {
                                tag: "g",
                                attributes: d({}, p.outer),
                                children: [g]
                            },
                            y = "mask-".concat(o || ae()),
                            b = "clip-".concat(o || ae()),
                            x = {
                                tag: "mask",
                                attributes: d({}, le, {
                                    id: y,
                                    maskUnits: "userSpaceOnUse",
                                    maskContentUnits: "userSpaceOnUse"
                                }),
                                children: [m, v]
                            },
                            w = {
                                tag: "defs",
                                children: [{
                                    tag: "clipPath",
                                    attributes: {
                                        id: b
                                    },
                                    children: (t = u, "g" === t.tag ? t.children : [t])
                                }, x]
                            };
                        return n.push(w, {
                            tag: "rect",
                            attributes: d({
                                fill: "currentColor",
                                "clip-path": "url(#".concat(b, ")"),
                                mask: "url(#".concat(y, ")")
                            }, le)
                        }), {
                            children: n,
                            attributes: r
                        }
                    }(k) : function(e) {
                        var t = e.children,
                            n = e.attributes,
                            r = e.main,
                            a = e.transform,
                            i = oe(e.styles);
                        if (i.length > 0 && (n.style = i), se(a)) {
                            var o = ce({
                                transform: a,
                                containerWidth: r.width,
                                iconWidth: r.width
                            });
                            t.push({
                                tag: "g",
                                attributes: d({}, o.outer),
                                children: [{
                                    tag: "g",
                                    attributes: d({}, o.inner),
                                    children: [{
                                        tag: r.icon.tag,
                                        children: r.icon.children,
                                        attributes: d({}, r.icon.attributes, o.path)
                                    }]
                                }]
                            })
                        } else t.push(r.icon);
                        return {
                            children: t,
                            attributes: n
                        }
                    }(k),
                    _ = N.children,
                    M = N.attributes;
                return k.children = _, k.attributes = M, s ? function(e) {
                    var t = e.prefix,
                        n = e.iconName,
                        r = e.children,
                        a = e.attributes,
                        i = e.symbol;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: d({}, a, {
                                id: !0 === i ? "".concat(t, "-").concat(A.familyPrefix, "-").concat(n) : i
                            }),
                            children: r
                        }]
                    }]
                }(k) : function(e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        a = e.attributes,
                        i = e.styles,
                        o = e.transform;
                    if (se(o) && n.found && !r.found) {
                        var s = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        a.style = oe(d({}, i, {
                            "transform-origin": "".concat(s.x + o.x / 16, "em ").concat(s.y + o.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: a,
                        children: t
                    }]
                }(k)
            }
            var de = function() {},
                pe = (A.measurePerformance && j && j.mark && j.measure, function(e, t, n, r) {
                    var a, i, o, s = Object.keys(e),
                        c = s.length,
                        l = void 0 !== r ? function(e, t) {
                            return function(n, r, a, i) {
                                return e.call(t, n, r, a, i)
                            }
                        }(t, r) : t;
                    for (void 0 === n ? (a = 1, o = e[s[0]]) : (a = 0, o = n); a < c; a++) o = l(o, e[i = s[a]], i, e);
                    return o
                });

            function me(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.skipHooks,
                    a = void 0 !== r && r,
                    i = Object.keys(t).reduce((function(e, n) {
                        var r = t[n];
                        return !!r.icon ? e[r.iconName] = r.icon : e[n] = r, e
                    }), {});
                "function" !== typeof I.hooks.addPack || a ? I.styles[e] = d({}, I.styles[e] || {}, i) : I.hooks.addPack(e, i), "fas" === e && me("fa", t)
            }
            var he = I.styles,
                ge = I.shims,
                ve = function() {
                    var e = function(e) {
                        return pe(he, (function(t, n, r) {
                            return t[r] = pe(n, e, {}), t
                        }), {})
                    };
                    e((function(e, t, n) {
                        return t[3] && (e[t[3]] = n), e
                    })), e((function(e, t, n) {
                        var r = t[2];
                        return e[n] = n, r.forEach((function(t) {
                            e[t] = n
                        })), e
                    }));
                    var t = "far" in he;
                    pe(ge, (function(e, n) {
                        var r = n[0],
                            a = n[1],
                            i = n[2];
                        return "far" !== a || t || (a = "fas"), e[r] = {
                            prefix: a,
                            iconName: i
                        }, e
                    }), {})
                };
            ve();
            I.styles;

            function ye(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }

            function be(e) {
                var t = e.tag,
                    n = e.attributes,
                    r = void 0 === n ? {} : n,
                    a = e.children,
                    i = void 0 === a ? [] : a;
                return "string" === typeof e ? ie(e) : "<".concat(t, " ").concat(function(e) {
                    return Object.keys(e || {}).reduce((function(t, n) {
                        return t + "".concat(n, '="').concat(ie(e[n]), '" ')
                    }), "").trim()
                }(r), ">").concat(i.map(be).join(""), "</").concat(t, ">")
            }
            var xe = function(e) {
                var t = {
                    size: 16,
                    x: 0,
                    y: 0,
                    flipX: !1,
                    flipY: !1,
                    rotate: 0
                };
                return e ? e.toLowerCase().split(" ").reduce((function(e, t) {
                    var n = t.toLowerCase().split("-"),
                        r = n[0],
                        a = n.slice(1).join("-");
                    if (r && "h" === a) return e.flipX = !0, e;
                    if (r && "v" === a) return e.flipY = !0, e;
                    if (a = parseFloat(a), isNaN(a)) return e;
                    switch (r) {
                        case "grow":
                            e.size = e.size + a;
                            break;
                        case "shrink":
                            e.size = e.size - a;
                            break;
                        case "left":
                            e.x = e.x - a;
                            break;
                        case "right":
                            e.x = e.x + a;
                            break;
                        case "up":
                            e.y = e.y - a;
                            break;
                        case "down":
                            e.y = e.y + a;
                            break;
                        case "rotate":
                            e.rotate = e.rotate + a
                    }
                    return e
                }), t) : t
            };

            function we(e) {
                this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
            }
            we.prototype = Object.create(Error.prototype), we.prototype.constructor = we;
            var je = {
                    fill: "currentColor"
                },
                ke = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s"
                },
                Ne = {
                    tag: "path",
                    attributes: d({}, je, {
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    })
                },
                Oe = d({}, ke, {
                    attributeName: "opacity"
                });
            d({}, je, {
                cx: "256",
                cy: "364",
                r: "28"
            }), d({}, ke, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
            }), d({}, Oe, {
                values: "1;0;1;1;0;1;"
            }), d({}, je, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }), d({}, Oe, {
                values: "1;0;0;0;0;1;"
            }), d({}, je, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }), d({}, Oe, {
                values: "0;0;1;1;0;0;"
            }), I.styles;

            function _e(e) {
                var t = e[0],
                    n = e[1],
                    r = p(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(A.familyPrefix, "-").concat(P.GROUP)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(A.familyPrefix, "-").concat(P.SECONDARY),
                                fill: "currentColor",
                                d: r[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(A.familyPrefix, "-").concat(P.PRIMARY),
                                fill: "currentColor",
                                d: r[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: r
                        }
                    }
                }
            }
            I.styles;

            function Me() {
                var e = "fa",
                    t = N,
                    n = A.familyPrefix,
                    r = A.replacementClass,
                    a = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
                if (n !== e || r !== t) {
                    var i = new RegExp("\\.".concat(e, "\\-"), "g"),
                        o = new RegExp("\\--".concat(e, "\\-"), "g"),
                        s = new RegExp("\\.".concat(t), "g");
                    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r))
                }
                return a
            }

            function Pe() {
                A.autoAddCss && !Ie && (re(Me()), Ie = !0)
            }

            function Ce(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function() {
                        return e.abstract.map((function(e) {
                            return be(e)
                        }))
                    }
                }), Object.defineProperty(e, "node", {
                    get: function() {
                        if (k) {
                            var t = w.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function Se(e) {
                var t = e.prefix,
                    n = void 0 === t ? "fa" : t,
                    r = e.iconName;
                if (r) return ye(Ee.definitions, n, r) || ye(I.styles, n, r)
            }
            var Ae, Ee = new(function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "add",
                        value: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var a = n.reduce(this._pullDefinitions, {});
                            Object.keys(a).forEach((function(t) {
                                e.definitions[t] = d({}, e.definitions[t] || {}, a[t]), me(t, a[t]), ve()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(e, t) {
                            var n = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(n).map((function(t) {
                                var r = n[t],
                                    a = r.prefix,
                                    i = r.iconName,
                                    o = r.icon;
                                e[a] || (e[a] = {}), e[a][i] = o
                            })), e
                        }
                    }]) && f(t.prototype, n), r && f(t, r), e
                }()),
                Ie = !1,
                ze = {
                    transform: function(e) {
                        return xe(e)
                    }
                },
                Te = (Ae = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? ne : n,
                        a = t.symbol,
                        i = void 0 !== a && a,
                        o = t.mask,
                        s = void 0 === o ? null : o,
                        c = t.maskId,
                        l = void 0 === c ? null : c,
                        f = t.title,
                        u = void 0 === f ? null : f,
                        p = t.titleId,
                        m = void 0 === p ? null : p,
                        h = t.classes,
                        g = void 0 === h ? [] : h,
                        v = t.attributes,
                        y = void 0 === v ? {} : v,
                        b = t.styles,
                        x = void 0 === b ? {} : b;
                    if (e) {
                        var w = e.prefix,
                            j = e.iconName,
                            k = e.icon;
                        return Ce(d({
                            type: "icon"
                        }, e), (function() {
                            return Pe(), A.autoA11y && (u ? y["aria-labelledby"] = "".concat(A.replacementClass, "-title-").concat(m || ae()) : (y["aria-hidden"] = "true", y.focusable = "false")), ue({
                                icons: {
                                    main: _e(k),
                                    mask: s ? _e(s.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: w,
                                iconName: j,
                                transform: d({}, ne, r),
                                symbol: i,
                                title: u,
                                maskId: l,
                                titleId: m,
                                extra: {
                                    attributes: y,
                                    styles: x,
                                    classes: g
                                }
                            })
                        }))
                    }
                }, function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (e || {}).icon ? e : Se(e || {}),
                        r = t.mask;
                    return r && (r = (r || {}).icon ? r : Se(r || {})), Ae(n, d({}, t, {
                        mask: r
                    }))
                }),
                Le = n(5697),
                De = n.n(Le),
                Re = n(7294);

            function We(e) {
                return (We = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function He(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fe(Object(n), !0).forEach((function(t) {
                        He(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ye(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function Be(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function Ue(e) {
                return t = e, (t -= 0) === t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, t) {
                    return t ? t.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var t
            }

            function Xe(e) {
                return e.split(";").map((function(e) {
                    return e.trim()
                })).filter((function(e) {
                    return e
                })).reduce((function(e, t) {
                    var n, r = t.indexOf(":"),
                        a = Ue(t.slice(0, r)),
                        i = t.slice(r + 1).trim();
                    return a.startsWith("webkit") ? e[(n = a, n.charAt(0).toUpperCase() + n.slice(1))] = i : e[a] = i, e
                }), {})
            }
            var Ge = !1;
            try {
                Ge = !0
            } catch (tt) {}

            function Ve(e) {
                return ze.icon ? ze.icon(e) : null === e ? null : "object" === We(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" === typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function Ze(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? He({}, e, t) : {}
            }

            function Je(e) {
                var t = e.forwardedRef,
                    n = Ye(e, ["forwardedRef"]),
                    r = n.icon,
                    a = n.mask,
                    i = n.symbol,
                    o = n.className,
                    s = n.title,
                    c = n.titleId,
                    l = Ve(r),
                    f = Ze("classes", [].concat(Be(function(e) {
                        var t, n = e.spin,
                            r = e.pulse,
                            a = e.fixedWidth,
                            i = e.inverse,
                            o = e.border,
                            s = e.listItem,
                            c = e.flip,
                            l = e.size,
                            f = e.rotation,
                            u = e.pull,
                            d = (He(t = {
                                "fa-spin": n,
                                "fa-pulse": r,
                                "fa-fw": a,
                                "fa-inverse": i,
                                "fa-border": o,
                                "fa-li": s,
                                "fa-flip-horizontal": "horizontal" === c || "both" === c,
                                "fa-flip-vertical": "vertical" === c || "both" === c
                            }, "fa-".concat(l), "undefined" !== typeof l && null !== l), He(t, "fa-rotate-".concat(f), "undefined" !== typeof f && null !== f && 0 !== f), He(t, "fa-pull-".concat(u), "undefined" !== typeof u && null !== u), He(t, "fa-swap-opacity", e.swapOpacity), t);
                        return Object.keys(d).map((function(e) {
                            return d[e] ? e : null
                        })).filter((function(e) {
                            return e
                        }))
                    }(n)), Be(o.split(" ")))),
                    u = Ze("transform", "string" === typeof n.transform ? ze.transform(n.transform) : n.transform),
                    d = Ze("mask", Ve(a)),
                    p = Te(l, qe({}, f, {}, u, {}, d, {
                        symbol: i,
                        title: s,
                        titleId: c
                    }));
                if (!p) return function() {
                    var e;
                    !Ge && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", l), null;
                var m = p.abstract,
                    h = {
                        ref: t
                    };
                return Object.keys(n).forEach((function(e) {
                    Je.defaultProps.hasOwnProperty(e) || (h[e] = n[e])
                })), Qe(m[0], h)
            }
            Je.displayName = "FontAwesomeIcon", Je.propTypes = {
                border: De().bool,
                className: De().string,
                mask: De().oneOfType([De().object, De().array, De().string]),
                fixedWidth: De().bool,
                inverse: De().bool,
                flip: De().oneOf(["horizontal", "vertical", "both"]),
                icon: De().oneOfType([De().object, De().array, De().string]),
                listItem: De().bool,
                pull: De().oneOf(["right", "left"]),
                pulse: De().bool,
                rotation: De().oneOf([0, 90, 180, 270]),
                size: De().oneOf(["lg", "xs", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: De().bool,
                symbol: De().oneOfType([De().bool, De().string]),
                title: De().string,
                transform: De().oneOfType([De().string, De().object]),
                swapOpacity: De().bool
            }, Je.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                fixedWidth: !1,
                inverse: !1,
                flip: null,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                symbol: !1,
                title: "",
                transform: null,
                swapOpacity: !1
            };
            var Qe = function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("string" === typeof n) return n;
                    var a = (n.children || []).map((function(n) {
                            return e(t, n)
                        })),
                        i = Object.keys(n.attributes || {}).reduce((function(e, t) {
                            var r = n.attributes[t];
                            switch (t) {
                                case "class":
                                    e.attrs.className = r, delete n.attributes.class;
                                    break;
                                case "style":
                                    e.attrs.style = Xe(r);
                                    break;
                                default:
                                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[Ue(t)] = r
                            }
                            return e
                        }), {
                            attrs: {}
                        }),
                        o = r.style,
                        s = void 0 === o ? {} : o,
                        c = Ye(r, ["style"]);
                    return i.attrs.style = qe({}, i.attrs.style, {}, s), t.apply(void 0, [n.tag, qe({}, i.attrs, {}, c)].concat(Be(a)))
                }.bind(null, Re.createElement),
                Ke = {
                    prefix: "fas",
                    iconName: "chevron-up",
                    icon: [448, 512, [], "f077", "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]
                },
                $e = {
                    prefix: "fas",
                    iconName: "times",
                    icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
                },
                et = function(e) {
                    var t = e.children.props.path,
                        n = (0, Re.useState)(!1),
                        l = n[0],
                        f = n[1],
                        u = (0, Re.useState)(!1),
                        d = u[0],
                        p = u[1],
                        m = function(e) {
                            var n = e.target.href.split("/");
                            t = "/" + n[3], f(!l), p(!1)
                        };
                    (0, Re.useEffect)((function() {
                        p("/#frequently-asked-question" === t)
                    }), [p]);
                    return (0, r.jsxs)("div", {
                        className: "rat-app whole-body",
                        children: [(0, r.jsx)("header", {
                            children: (0, r.jsx)("div", {
                                className: "rat-app header-area",
                                children: (0, r.jsx)("nav", {
                                    className: "navbar navbar-expand-lg navbar-light",
                                    children: (0, r.jsxs)("div", {
                                        className: "container",
                                        children: [(0, r.jsx)("div", {
                                            className: "logo",
                                            children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("img", {
                                                    src: "../images/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, r.jsx)("button", {
                                            className: "btn btn-dark menu",
                                            type: "button",
                                            "data-bs-target": "#navbarSupportedContent",
                                            "aria-label": "Toggle navigation",
                                            onClick: function() {
                                                f(!l)
                                            },
                                            children: (0, r.jsxs)("div", {
                                                className: "menu-button-box",
                                                children: [(0, r.jsx)("span", {
                                                    id: "hamburger",
                                                    className: l ? "hamburger d-none" : "hamburger d-block",
                                                    children: (0, r.jsxs)("svg", {
                                                        width: "106",
                                                        height: "74",
                                                        viewBox: "0 0 106 74",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, r.jsx)("rect", {
                                                            width: "106",
                                                            height: "17",
                                                            rx: "8.5",
                                                            fill: "#fff"
                                                        }), (0, r.jsx)("rect", {
                                                            x: "23",
                                                            y: "29",
                                                            width: "83",
                                                            height: "17",
                                                            rx: "8.5",
                                                            fill: "#fff"
                                                        }), (0, r.jsx)("rect", {
                                                            x: "50",
                                                            y: "57",
                                                            width: "56",
                                                            height: "17",
                                                            rx: "8.5",
                                                            fill: "#fff"
                                                        })]
                                                    })
                                                }), (0, r.jsx)("span", {
                                                    id: "close-menu",
                                                    className: l ? "close d-block" : "close d-none",
                                                    children: (0, r.jsx)(Je, {
                                                        icon: $e
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: l ? "collapse navbar-collapse show" : "collapse navbar-collapse",
                                            id: "navbarSupportedContent",
                                            children: (0, r.jsxs)("ul", {
                                                className: "header-menu ms-auto",
                                                children: [(0, r.jsx)("li", {
                                                    className: "nav-item",
                                                    children: (0, r.jsx)("a", {
                                                        className: "nav-link active",
                                                        "aria-current": "page",
                                                        href: "#home",
                                                        onClick: m,
                                                        children: "Home"
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    className: "nav-item",
                                                    children: (0, r.jsx)("a", {
                                                        className: "nav-link active",
                                                        "aria-current": "page",
                                                        href: "#features",
                                                        onClick: m,
                                                        children: "features"
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    className: "nav-item",
                                                    children: (0, r.jsx)("a", {
                                                        className: "nav-link active",
                                                        "aria-current": "page",
                                                        href: "#download",
                                                        onClick: m,
                                                        children: "Download"
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    className: "nav-item",
                                                    children: (0, r.jsx)("a", {
                                                        className: "nav-link active",
                                                        "aria-current": "page",
                                                        href: "#contact",
                                                        onClick: m,
                                                        children: "Contact Us"
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    className: "nav-item",
                                                    children: (0, r.jsx)("a", {
                                                        className: "nav-link active",
                                                        "aria-current": "page",
                                                        href: "#frequently-asked-question",
                                                        onClick: function(e) {
                                                            f(!l), p(!0)
                                                        },
                                                        children: "FAQ"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), d ? (0, r.jsx)(c.default, {}) : null, d ? null : (0, r.jsx)(i.default, {}), d ? null : (0, r.jsx)(a.default, {}), d ? null : (0, r.jsx)(o.default, {}), d ? null : (0, r.jsx)(s.default, {}), (0, r.jsx)("footer", {
                            children: (0, r.jsx)("div", {
                                className: "rat-app footer-area",
                                children: (0, r.jsxs)("div", {
                                    className: "container",
                                    children: [(0, r.jsx)("div", {
                                        className: "row",
                                        children: (0, r.jsx)("div", {
                                            className: "col-12",
                                            children: (0, r.jsx)("div", {
                                                className: "footer-copyright",
                                                children: (0, r.jsxs)("small", {
                                                    children: ["\xa9 2021 All rights reserved ", (0, r.jsx)("a", {
                                                        href: "https://www.rayoinnovations.com/",
                                                        children: "Rayo Innovations"
                                                    })]
                                                })
                                            })
                                        })
                                    }), d ? null : (0, r.jsx)("div", {
                                        className: "site-view",
                                        children: (0, r.jsx)("a", {
                                            href: "#home",
                                            className: "btn btn-dark up-arrow",
                                            children: (0, r.jsx)(Je, {
                                                icon: Ke
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        5722: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                a = (n(7294), n(9008));
            t.default = function() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.default, {
                        children: [(0, r.jsx)("title", {
                            children: "Attendance App"
                        }), (0, r.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            href: "/images/attendance_logo.png"
                        })]
                    }), (0, r.jsx)("section", {
                        id: "home",
                        children: (0, r.jsx)("div", {
                            className: "rat-app banner-area",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center banner-view",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-lg-6 col-md-6 col-xs-12",
                                        children: (0, r.jsx)("div", {
                                            className: "left-side",
                                            children: (0, r.jsx)("div", {
                                                className: "device-image",
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/banner-image.png",
                                                    alt: "home image",
                                                    className: "img-fluid"
                                                })
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-lg-6 col-md-6 col-xs-12",
                                        children: (0, r.jsxs)("div", {
                                            className: "left-side",
                                            children: [(0, r.jsxs)("div", {
                                                className: "banner-text mb-4",
                                                children: [(0, r.jsx)("h1", {
                                                    className: "mb-4",
                                                    children: "Attendance App to track employee attendance"
                                                }), (0, r.jsxs)("ul", {
                                                    children: [(0, r.jsx)("li", {
                                                        children: "Mark Attendance"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Geofencing"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Manage Leave"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Manage Missing Punch"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Roles for Employee With Some Extra Access"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Machine Integration"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "button-box mb-5",
                                                children: [(0, r.jsx)("a", {
                                                    href: "https://play.google.com/store/apps/details?id=com.rayo.AttendanceApp&referrer=utm_source%3Dwebsite%26utm_medium%3Dlink%26utm_campaign%3Dwebsite",
                                                    className: "btn btn-dark app-btn",
                                                    children: (0, r.jsx)("img", {
                                                        src: "/images/app-store-badge.svg",
                                                        alt: ""
                                                    })
                                                }), (0, r.jsx)("a", {
                                                    href: "https://apps.apple.com/app/apple-store/id1505698773?pt=120594778&ct=website&mt=8",
                                                    className: "btn btn-dark app-btn",
                                                    children: (0, r.jsx)("img", {
                                                        src: "/images/google-play-badge.svg",
                                                        alt: ""
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
        },
        8154: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893);
            n(7294);
            t.default = function() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("section", {
                        id: "contact",
                        children: (0, r.jsx)("form", {
                            action: "contact-form",
                            children: (0, r.jsx)("div", {
                                className: "rat-app contact-area",
                                children: (0, r.jsx)("div", {
                                    className: "container",
                                    children: (0, r.jsx)("div", {
                                        className: "conatct-whole-box",
                                        children: (0, r.jsx)("div", {
                                            className: "row",
                                            children: (0, r.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, r.jsx)("div", {
                                                    className: "contact-text text-center mb-4",
                                                    children: (0, r.jsx)("h2", {
                                                        children: "We love new friends"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    className: "social-icons",
                                                    children: [(0, r.jsx)("a", {
                                                        href: "https://www.facebook.com/people/Attendance-App/100075080317012/",
                                                        className: "social-link facebook",
                                                        children: (0, r.jsxs)("svg", {
                                                            width: "51",
                                                            height: "51",
                                                            viewBox: "0 0 51 51",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0, r.jsx)("path", {
                                                                d: "M25.499 48.3733C38.1321 48.3733 48.3733 38.1321 48.3733 25.499C48.3733 12.8659 38.1321 2.62476 25.499 2.62476C12.8659 2.62476 2.62476 12.8659 2.62476 25.499C2.62476 38.1321 12.8659 48.3733 25.499 48.3733Z",
                                                                stroke: "black",
                                                                "stroke-width": "4",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            }), (0, r.jsx)("path", {
                                                                d: "M35.03 15.9681H31.2176C30.4657 15.9649 29.7207 16.1107 29.0255 16.3969C28.3302 16.6832 27.6986 17.1043 27.1669 17.636C26.6353 18.1676 26.2142 18.7993 25.9279 19.4945C25.6416 20.1897 25.4959 20.9348 25.499 21.6866V48.3733",
                                                                stroke: "black",
                                                                "stroke-width": "4",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            }), (0, r.jsx)("path", {
                                                                d: "M17.8743 29.3115H33.1238",
                                                                stroke: "black",
                                                                "stroke-width": "4",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("a", {
                                                        href: "https://instagram.com/attendanceapplication?utm_medium=copy_link",
                                                        className: "social-link instagram",
                                                        children: (0, r.jsxs)("svg", {
                                                            width: "50",
                                                            height: "51",
                                                            viewBox: "0 0 50 51",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0, r.jsx)("path", {
                                                                d: "M25 35.7788C30.5228 35.7788 35 31.3017 35 25.7788C35 20.256 30.5228 15.7788 25 15.7788C19.4772 15.7788 15 20.256 15 25.7788C15 31.3017 19.4772 35.7788 25 35.7788Z",
                                                                stroke: "black",
                                                                "stroke-width": "4"
                                                            }), (0, r.jsx)("path", {
                                                                d: "M36 2.77881H14C7.37258 2.77881 2 8.15139 2 14.7788V36.7788C2 43.4062 7.37258 48.7788 14 48.7788H36C42.6274 48.7788 48 43.4062 48 36.7788V14.7788C48 8.15139 42.6274 2.77881 36 2.77881Z",
                                                                stroke: "black",
                                                                "stroke-width": "4",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            }), (0, r.jsx)("path", {
                                                                d: "M38 15.7791C39.6569 15.7791 41 14.4359 41 12.7791C41 11.1222 39.6569 9.77905 38 9.77905C36.3431 9.77905 35 11.1222 35 12.7791C35 14.4359 36.3431 15.7791 38 15.7791Z",
                                                                fill: "black"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: "helpline-box",
                                                    children: (0, r.jsx)("div", {
                                                        className: "service-box",
                                                        children: (0, r.jsx)("div", {
                                                            className: "service-info",
                                                            children: (0, r.jsx)("a", {
                                                                href: "mailto:help@employeeattendanceapp.com",
                                                                children: "help@employeeattendanceapp.com"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        1201: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893);
            n(7294);
            t.default = function() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("section", {
                        id: "download",
                        children: (0, r.jsx)("div", {
                            className: "rat-app download-area",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsx)("div", {
                                    className: "row",
                                    children: (0, r.jsx)("div", {
                                        className: "col-12",
                                        children: (0, r.jsxs)("div", {
                                            className: "download-whole-part",
                                            children: [(0, r.jsx)("div", {
                                                className: "download-text",
                                                children: (0, r.jsx)("h2", {
                                                    children: "Download Now"
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "download-box",
                                                children: [(0, r.jsx)("div", {
                                                    className: "download-app",
                                                    children: (0, r.jsx)("a", {
                                                        href: "https://play.google.com/store/apps/details?id=com.rayo.AttendanceApp&referrer=utm_source%3Dwebsite%26utm_medium%3Dlink%26utm_campaign%3Dwebsite",
                                                        className: "play-store",
                                                        children: (0, r.jsx)("img", {
                                                            src: "/images/google-play-badge.svg",
                                                            className: "img-fluid"
                                                        })
                                                    })
                                                }), (0, r.jsx)("div", {
                                                    className: "download-app",
                                                    children: (0, r.jsx)("a", {
                                                        href: "https://apps.apple.com/app/apple-store/id1505698773?pt=120594778&ct=website&mt=8",
                                                        className: "app-store",
                                                        children: (0, r.jsx)("img", {
                                                            src: "/images/app-store-badge.svg",
                                                            className: "img-fluid"
                                                        })
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "bottom-image",
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/mobile-screen-image.png",
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        5169: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                a = n(7294),
                i = n(9008);
            t.default = function() {
                return (0, a.useEffect)((function() {
                    window.scrollTo(0, 0)
                })), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.default, {
                        children: [(0, r.jsx)("title", {
                            children: "Attendance App"
                        }), (0, r.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            href: "/images/attendance_logo.png"
                        })]
                    }), (0, r.jsx)("section", {
                        id: "faq",
                        children: (0, r.jsx)("div", {
                            className: "rat-app faq-area",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsxs)("div", {
                                    className: "faq-whole-box",
                                    children: [(0, r.jsx)("div", {
                                        className: "download-text faq-title",
                                        children: (0, r.jsx)("h2", {
                                            children: "Frequently Asked Questions"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "grid-container",
                                        children: [(0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "What is the use case ?"
                                            }), (0, r.jsx)("p", {
                                                children: "App provides an easy way to track employees' attendance. Support hourly and daily basis as well."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "What is a workspace ?"
                                            }), (0, r.jsx)("p", {
                                                children: "Each workspace represents a group of employees."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "Does an employee need separate accounts for different workspaces ?"
                                            }), (0, r.jsx)("p", {
                                                children: "No, Users can have multiple workspaces and they can switch the workspaces as they need."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "Can I restrict employees to use the app from a certain geographical location only ?"
                                            }), (0, r.jsx)("p", {
                                                children: "Yes, you can turn on the geographical restrictions."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "I do have a biometric machine at the office can I integrate it with the app ?"
                                            }), (0, r.jsx)("p", {
                                                children: "Yes, We do provide API to integrate external systems."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "Where can I find the detailed docs ?"
                                            }), (0, r.jsx)("p", {
                                                children: "We are working on the docs which will be published soon. Please contact us in case you have any confusion."
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "item",
                                            children: [(0, r.jsx)("h4", {
                                                children: "How can I get help ?"
                                            }), (0, r.jsxs)("p", {
                                                children: ["Please drop an email to ", (0, r.jsx)("a", {
                                                    href: "mailTo:help@employeeattendanceapp.com",
                                                    children: "help@employeeattendanceapp.com"
                                                }), " we will reach out to you."]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
        },
        1779: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893);
            n(7294);
            t.default = function() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("section", {
                        id: "features",
                        children: (0, r.jsx)("div", {
                            className: "rat-app feature-area",
                            children: (0, r.jsxs)("div", {
                                className: "container",
                                children: [(0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/configurable_weekdays.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "Configurable Weekdays"
                                            }), (0, r.jsx)("p", {
                                                children: "You can select your organization's configurable days of week for filter out weekends at the time of add organization. You also change this settings."
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke flex-row-reverse",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/manage_holidays.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "Manage Holidays"
                                            }), (0, r.jsx)("p", {
                                                children: "Holidays added by admin are yearly listed for all other users of organization. Holidays added by admin are yearly listed for all other users of an organization."
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/manage_leaves.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "Manage Leaves"
                                            }), (0, r.jsx)("p", {
                                                children: "HR can simply approve or reject the leaves applied by the employees. The system will instantly notify the employees of the actions performed by the HR."
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke flex-row-reverse",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/manage-missing-punch.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "Manage missing punch"
                                            }), (0, r.jsx)("p", {
                                                children: "Employees can apply the missing punch request if they forgot the punch. HR of admin can accept or reject the request. The list of missing punch shows the status of the request."
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/geofancing-support.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "Geofencing Support Available"
                                            }), (0, r.jsx)("p", {
                                                children: "This feature allows an admin to set geographical areas to limit where an employee is permitted to mark attendance."
                                            })]
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row justify-content-center align-items-center middle-stroke flex-row-reverse",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsx)("div", {
                                            className: "image",
                                            children: (0, r.jsx)("img", {
                                                src: "images/external-system-integration.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-md-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "text",
                                            children: [(0, r.jsx)("h3", {
                                                children: "External System Integration"
                                            }), (0, r.jsx)("p", {
                                                children: "An organization can have a key that is used for machine integration. The employees also get the unique machine-ID per organization."
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        6363: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(7645)
            }])
        },
        1299: function() {},
        6390: function() {},
        8857: function() {},
        7807: function() {},
        9008: function(e, t, n) {
            e.exports = n(7947)
        },
        6421: function(e, t, n) {
            "use strict";
            var r, a = n(6425),
                i = (r = a) && r.__esModule ? r : {
                    default: r
                };
            var o = {
                tags: function(e) {
                    var t = e.id,
                        n = e.events,
                        r = e.dataLayer,
                        a = e.dataLayerName,
                        o = e.preview,
                        s = "&gtm_auth=" + e.auth,
                        c = "&gtm_preview=" + o;
                    return t || (0, i.default)("GTM Id is required"), {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + c + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(n).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + c + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + a + "','" + t + "');",
                        dataLayerVar: this.dataLayer(r, a)
                    }
                },
                dataLayer: function(e, t) {
                    return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
                }
            };
            e.exports = o
        },
        8676: function(e, t, n) {
            "use strict";
            var r, a = n(6421),
                i = (r = a) && r.__esModule ? r : {
                    default: r
                };
            var o = {
                dataScript: function(e) {
                    var t = document.createElement("script");
                    return t.innerHTML = e, t
                },
                gtm: function(e) {
                    var t = i.default.tags(e);
                    return {
                        noScript: function() {
                            var e = document.createElement("noscript");
                            return e.innerHTML = t.iframe, e
                        },
                        script: function() {
                            var e = document.createElement("script");
                            return e.innerHTML = t.script, e
                        },
                        dataScript: this.dataScript(t.dataLayerVar)
                    }
                },
                initialize: function(e) {
                    var t = e.gtmId,
                        n = e.events,
                        r = void 0 === n ? {} : n,
                        a = e.dataLayer,
                        i = e.dataLayerName,
                        o = void 0 === i ? "dataLayer" : i,
                        s = e.auth,
                        c = void 0 === s ? "" : s,
                        l = e.preview,
                        f = void 0 === l ? "" : l,
                        u = this.gtm({
                            id: t,
                            events: r,
                            dataLayer: a || void 0,
                            dataLayerName: o,
                            auth: c,
                            preview: f
                        });
                    a && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0])
                },
                dataLayer: function(e) {
                    var t = e.dataLayer,
                        n = e.dataLayerName,
                        r = void 0 === n ? "dataLayer" : n;
                    if (window[r]) return window[r].push(t);
                    var a = i.default.dataLayer(t, r),
                        o = this.dataScript(a);
                    document.head.insertBefore(o, document.head.childNodes[0])
                }
            };
            e.exports = o
        },
        1785: function(e, t, n) {
            "use strict";
            var r, a = n(8676),
                i = (r = a) && r.__esModule ? r : {
                    default: r
                };
            e.exports = i.default
        },
        6425: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                console.warn("[react-gtm]", e)
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function() {
            return t(6363), t(2441)
        }));
        var n = e.O();
        _N_E = n
    }
]);