/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var ME = Object.create;
    var On = Object.defineProperty;
    var DE = Object.getOwnPropertyDescriptor;
    var FE = Object.getOwnPropertyNames;
    var qE = Object.getPrototypeOf,
        GE = Object.prototype.hasOwnProperty;
    var le = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Oe = (e, t) => {
            for (var n in t) On(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        aa = (e, t, n, r) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of FE(t)) !GE.call(e, i) && i !== n && On(e, i, {
                    get: () => t[i],
                    enumerable: !(r = DE(t, i)) || r.enumerable
                });
            return e
        };
    var ie = (e, t, n) => (n = e != null ? ME(qE(e)) : {}, aa(t || !e || !e.__esModule ? On(n, "default", {
            value: e,
            enumerable: !0
        }) : n, e)),
        Ue = e => aa(On({}, "__esModule", {
            value: !0
        }), e);
    var Br = f(() => {
        "use strict";
        window.tram = function(e) {
            function t(c, E) {
                var I = new D.Bare;
                return I.init(c, E)
            }

            function n(c) {
                return c.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }

            function r(c) {
                var E = parseInt(c.slice(1), 16),
                    I = E >> 16 & 255,
                    b = E >> 8 & 255,
                    v = 255 & E;
                return [I, b, v]
            }

            function i(c, E, I) {
                return "#" + (1 << 24 | c << 16 | E << 8 | I).toString(16).slice(1)
            }

            function o() {}

            function a(c, E) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof E + "] " + E)
            }

            function s(c, E, I) {
                l("Units do not match [" + c + "]: " + E + ", " + I)
            }

            function u(c, E, I) {
                if (E !== void 0 && (I = E), c === void 0) return I;
                var b = I;
                return Ur.test(c) || !An.test(c) ? b = parseInt(c, 10) : An.test(c) && (b = 1e3 * parseFloat(c)), 0 > b && (b = 0), b === b ? b : I
            }

            function l(c) {
                fe.debug && window && window.console.warn(c)
            }

            function g(c) {
                for (var E = -1, I = c ? c.length : 0, b = []; ++E < I;) {
                    var v = c[E];
                    v && b.push(v)
                }
                return b
            }
            var p = function(c, E, I) {
                    function b($) {
                        return typeof $ == "object"
                    }

                    function v($) {
                        return typeof $ == "function"
                    }

                    function A() {}

                    function B($, ue) {
                        function F() {
                            var _e = new J;
                            return v(_e.init) && _e.init.apply(_e, arguments), _e
                        }

                        function J() {}
                        ue === I && (ue = $, $ = Object), F.Bare = J;
                        var ee, he = A[c] = $[c],
                            Ve = J[c] = F[c] = new A;
                        return Ve.constructor = F, F.mixin = function(_e) {
                            return J[c] = F[c] = B(F, _e)[c], F
                        }, F.open = function(_e) {
                            if (ee = {}, v(_e) ? ee = _e.call(F, Ve, he, F, $) : b(_e) && (ee = _e), b(ee))
                                for (var jt in ee) E.call(ee, jt) && (Ve[jt] = ee[jt]);
                            return v(Ve.init) || (Ve.init = $), F
                        }, F.open(ue)
                    }
                    return B
                }("prototype", {}.hasOwnProperty),
                d = {
                    ease: ["ease", function(c, E, I, b) {
                        var v = (c /= b) * c,
                            A = v * c;
                        return E + I * (-2.75 * A * v + 11 * v * v + -15.5 * A + 8 * v + .25 * c)
                    }],
                    "ease-in": ["ease-in", function(c, E, I, b) {
                        var v = (c /= b) * c,
                            A = v * c;
                        return E + I * (-1 * A * v + 3 * v * v + -3 * A + 2 * v)
                    }],
                    "ease-out": ["ease-out", function(c, E, I, b) {
                        var v = (c /= b) * c,
                            A = v * c;
                        return E + I * (.3 * A * v + -1.6 * v * v + 2.2 * A + -1.8 * v + 1.9 * c)
                    }],
                    "ease-in-out": ["ease-in-out", function(c, E, I, b) {
                        var v = (c /= b) * c,
                            A = v * c;
                        return E + I * (2 * A * v + -5 * v * v + 2 * A + 2 * v)
                    }],
                    linear: ["linear", function(c, E, I, b) {
                        return I * c / b + E
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, E, I, b) {
                        return I * (c /= b) * c + E
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, E, I, b) {
                        return -I * (c /= b) * (c - 2) + E
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, E, I, b) {
                        return (c /= b / 2) < 1 ? I / 2 * c * c + E : -I / 2 * (--c * (c - 2) - 1) + E
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, E, I, b) {
                        return I * (c /= b) * c * c + E
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, E, I, b) {
                        return I * ((c = c / b - 1) * c * c + 1) + E
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, E, I, b) {
                        return (c /= b / 2) < 1 ? I / 2 * c * c * c + E : I / 2 * ((c -= 2) * c * c + 2) + E
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, E, I, b) {
                        return I * (c /= b) * c * c * c + E
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, E, I, b) {
                        return -I * ((c = c / b - 1) * c * c * c - 1) + E
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, E, I, b) {
                        return (c /= b / 2) < 1 ? I / 2 * c * c * c * c + E : -I / 2 * ((c -= 2) * c * c * c - 2) + E
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, E, I, b) {
                        return I * (c /= b) * c * c * c * c + E
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, E, I, b) {
                        return I * ((c = c / b - 1) * c * c * c * c + 1) + E
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, E, I, b) {
                        return (c /= b / 2) < 1 ? I / 2 * c * c * c * c * c + E : I / 2 * ((c -= 2) * c * c * c * c + 2) + E
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, E, I, b) {
                        return -I * Math.cos(c / b * (Math.PI / 2)) + I + E
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, E, I, b) {
                        return I * Math.sin(c / b * (Math.PI / 2)) + E
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, E, I, b) {
                        return -I / 2 * (Math.cos(Math.PI * c / b) - 1) + E
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, E, I, b) {
                        return c === 0 ? E : I * Math.pow(2, 10 * (c / b - 1)) + E
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, E, I, b) {
                        return c === b ? E + I : I * (-Math.pow(2, -10 * c / b) + 1) + E
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, E, I, b) {
                        return c === 0 ? E : c === b ? E + I : (c /= b / 2) < 1 ? I / 2 * Math.pow(2, 10 * (c - 1)) + E : I / 2 * (-Math.pow(2, -10 * --c) + 2) + E
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, E, I, b) {
                        return -I * (Math.sqrt(1 - (c /= b) * c) - 1) + E
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, E, I, b) {
                        return I * Math.sqrt(1 - (c = c / b - 1) * c) + E
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, E, I, b) {
                        return (c /= b / 2) < 1 ? -I / 2 * (Math.sqrt(1 - c * c) - 1) + E : I / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + E
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, E, I, b, v) {
                        return v === void 0 && (v = 1.70158), I * (c /= b) * c * ((v + 1) * c - v) + E
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, E, I, b, v) {
                        return v === void 0 && (v = 1.70158), I * ((c = c / b - 1) * c * ((v + 1) * c + v) + 1) + E
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, E, I, b, v) {
                        return v === void 0 && (v = 1.70158), (c /= b / 2) < 1 ? I / 2 * c * c * (((v *= 1.525) + 1) * c - v) + E : I / 2 * ((c -= 2) * c * (((v *= 1.525) + 1) * c + v) + 2) + E
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                y = document,
                _ = window,
                S = "bkwld-tram",
                m = /[\-\.0-9]/g,
                w = /[A-Z]/,
                O = "number",
                C = /^(rgb|#)/,
                R = /(em|cm|mm|in|pt|pc|px)$/,
                x = /(em|cm|mm|in|pt|pc|px|%)$/,
                q = /(deg|rad|turn)$/,
                V = "unitless",
                k = /(all|none) 0s ease 0s/,
                W = /^(width|height)$/,
                Y = " ",
                N = y.createElement("a"),
                T = ["Webkit", "Moz", "O", "ms"],
                P = ["-webkit-", "-moz-", "-o-", "-ms-"],
                U = function(c) {
                    if (c in N.style) return {
                        dom: c,
                        css: c
                    };
                    var E, I, b = "",
                        v = c.split("-");
                    for (E = 0; E < v.length; E++) b += v[E].charAt(0).toUpperCase() + v[E].slice(1);
                    for (E = 0; E < T.length; E++)
                        if (I = T[E] + b, I in N.style) return {
                            dom: I,
                            css: P[E] + c
                        }
                },
                G = t.support = {
                    bind: Function.prototype.bind,
                    transform: U("transform"),
                    transition: U("transition"),
                    backface: U("backface-visibility"),
                    timing: U("transition-timing-function")
                };
            if (G.transition) {
                var Z = G.timing.dom;
                if (N.style[Z] = d["ease-in-back"][0], !N.style[Z])
                    for (var Q in h) d[Q][0] = h[Q]
            }
            var L = t.frame = function() {
                    var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return c && G.bind ? c.bind(_) : function(E) {
                        _.setTimeout(E, 16)
                    }
                }(),
                X = t.now = function() {
                    var c = _.performance,
                        E = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return E && G.bind ? E.bind(c) : Date.now || function() {
                        return +new Date
                    }
                }(),
                H = p(function(c) {
                    function E(z, re) {
                        var de = g(("" + z).split(Y)),
                            ae = de[0];
                        re = re || {};
                        var Ie = Kt[ae];
                        if (!Ie) return l("Unsupported property: " + ae);
                        if (!re.weak || !this.props[ae]) {
                            var Le = Ie[0],
                                Se = this.props[ae];
                            return Se || (Se = this.props[ae] = new Le.Bare), Se.init(this.$el, de, Ie, re), Se
                        }
                    }

                    function I(z, re, de) {
                        if (z) {
                            var ae = typeof z;
                            if (re || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ae == "number" && re) return this.timer = new ne({
                                duration: z,
                                context: this,
                                complete: A
                            }), void(this.active = !0);
                            if (ae == "string" && re) {
                                switch (z) {
                                    case "hide":
                                        F.call(this);
                                        break;
                                    case "stop":
                                        B.call(this);
                                        break;
                                    case "redraw":
                                        J.call(this);
                                        break;
                                    default:
                                        E.call(this, z, de && de[1])
                                }
                                return A.call(this)
                            }
                            if (ae == "function") return void z.call(this, this);
                            if (ae == "object") {
                                var Ie = 0;
                                Ve.call(this, z, function(Ee, NE) {
                                    Ee.span > Ie && (Ie = Ee.span), Ee.stop(), Ee.animate(NE)
                                }, function(Ee) {
                                    "wait" in Ee && (Ie = u(Ee.wait, 0))
                                }), he.call(this), Ie > 0 && (this.timer = new ne({
                                    duration: Ie,
                                    context: this
                                }), this.active = !0, re && (this.timer.complete = A));
                                var Le = this,
                                    Se = !1,
                                    Sn = {};
                                L(function() {
                                    Ve.call(Le, z, function(Ee) {
                                        Ee.active && (Se = !0, Sn[Ee.name] = Ee.nextStyle)
                                    }), Se && Le.$el.css(Sn)
                                })
                            }
                        }
                    }

                    function b(z) {
                        z = u(z, 0), this.active ? this.queue.push({
                            options: z
                        }) : (this.timer = new ne({
                            duration: z,
                            context: this,
                            complete: A
                        }), this.active = !0)
                    }

                    function v(z) {
                        return this.active ? (this.queue.push({
                            options: z,
                            args: arguments
                        }), void(this.timer.complete = A)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function A() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var z = this.queue.shift();
                            I.call(this, z.options, !0, z.args)
                        }
                    }

                    function B(z) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var re;
                        typeof z == "string" ? (re = {}, re[z] = 1) : re = typeof z == "object" && z != null ? z : this.props, Ve.call(this, re, _e), he.call(this)
                    }

                    function $(z) {
                        B.call(this, z), Ve.call(this, z, jt, PE)
                    }

                    function ue(z) {
                        typeof z != "string" && (z = "block"), this.el.style.display = z
                    }

                    function F() {
                        B.call(this), this.el.style.display = "none"
                    }

                    function J() {
                        this.el.offsetHeight
                    }

                    function ee() {
                        B.call(this), e.removeData(this.el, S), this.$el = this.el = null
                    }

                    function he() {
                        var z, re, de = [];
                        this.upstream && de.push(this.upstream);
                        for (z in this.props) re = this.props[z], re.active && de.push(re.string);
                        de = de.join(","), this.style !== de && (this.style = de, this.el.style[G.transition.dom] = de)
                    }

                    function Ve(z, re, de) {
                        var ae, Ie, Le, Se, Sn = re !== _e,
                            Ee = {};
                        for (ae in z) Le = z[ae], ae in Xe ? (Ee.transform || (Ee.transform = {}), Ee.transform[ae] = Le) : (w.test(ae) && (ae = n(ae)), ae in Kt ? Ee[ae] = Le : (Se || (Se = {}), Se[ae] = Le));
                        for (ae in Ee) {
                            if (Le = Ee[ae], Ie = this.props[ae], !Ie) {
                                if (!Sn) continue;
                                Ie = E.call(this, ae)
                            }
                            re.call(this, Ie, Le)
                        }
                        de && Se && de.call(this, Se)
                    }

                    function _e(z) {
                        z.stop()
                    }

                    function jt(z, re) {
                        z.set(re)
                    }

                    function PE(z) {
                        this.$el.css(z)
                    }

                    function Pe(z, re) {
                        c[z] = function() {
                            return this.children ? LE.call(this, re, arguments) : (this.el && re.apply(this, arguments), this)
                        }
                    }

                    function LE(z, re) {
                        var de, ae = this.children.length;
                        for (de = 0; ae > de; de++) z.apply(this.children[de], re);
                        return this
                    }
                    c.init = function(z) {
                        if (this.$el = e(z), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, fe.keepInherited && !fe.fallback) {
                            var re = Wt(this.el, "transition");
                            re && !k.test(re) && (this.upstream = re)
                        }
                        G.backface && fe.hideBackface && tt(this.el, G.backface.css, "hidden")
                    }, Pe("add", E), Pe("start", I), Pe("wait", b), Pe("then", v), Pe("next", A), Pe("stop", B), Pe("set", $), Pe("show", ue), Pe("hide", F), Pe("redraw", J), Pe("destroy", ee)
                }),
                D = p(H, function(c) {
                    function E(I, b) {
                        var v = e.data(I, S) || e.data(I, S, new H.Bare);
                        return v.el || v.init(I), b ? v.start(b) : v
                    }
                    c.init = function(I, b) {
                        var v = e(I);
                        if (!v.length) return this;
                        if (v.length === 1) return E(v[0], b);
                        var A = [];
                        return v.each(function(B, $) {
                            A.push(E($, b))
                        }), this.children = A, this
                    }
                }),
                M = p(function(c) {
                    function E() {
                        var A = this.get();
                        this.update("auto");
                        var B = this.get();
                        return this.update(A), B
                    }

                    function I(A, B, $) {
                        return B !== void 0 && ($ = B), A in d ? A : $
                    }

                    function b(A) {
                        var B = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
                        return (B ? i(B[1], B[2], B[3]) : A).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var v = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    c.init = function(A, B, $, ue) {
                        this.$el = A, this.el = A[0];
                        var F = B[0];
                        $[2] && (F = $[2]), zt[F] && (F = zt[F]), this.name = F, this.type = $[1], this.duration = u(B[1], this.duration, v.duration), this.ease = I(B[2], this.ease, v.ease), this.delay = u(B[3], this.delay, v.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = W.test(this.name), this.unit = ue.unit || this.unit || fe.defaultUnit, this.angle = ue.angle || this.angle || fe.defaultAngle, fe.fallback || ue.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + Y + this.duration + "ms" + (this.ease != "ease" ? Y + d[this.ease][0] : "") + (this.delay ? Y + this.delay + "ms" : ""))
                    }, c.set = function(A) {
                        A = this.convert(A, this.type), this.update(A), this.redraw()
                    }, c.transition = function(A) {
                        this.active = !0, A = this.convert(A, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), A == "auto" && (A = E.call(this))), this.nextStyle = A
                    }, c.fallback = function(A) {
                        var B = this.el.style[this.name] || this.convert(this.get(), this.type);
                        A = this.convert(A, this.type), this.auto && (B == "auto" && (B = this.convert(this.get(), this.type)), A == "auto" && (A = E.call(this))), this.tween = new j({
                            from: B,
                            to: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.get = function() {
                        return Wt(this.el, this.name)
                    }, c.update = function(A) {
                        tt(this.el, this.name, A)
                    }, c.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, tt(this.el, this.name, this.get()));
                        var A = this.tween;
                        A && A.context && A.destroy()
                    }, c.convert = function(A, B) {
                        if (A == "auto" && this.auto) return A;
                        var $, ue = typeof A == "number",
                            F = typeof A == "string";
                        switch (B) {
                            case O:
                                if (ue) return A;
                                if (F && A.replace(m, "") === "") return +A;
                                $ = "number(unitless)";
                                break;
                            case C:
                                if (F) {
                                    if (A === "" && this.original) return this.original;
                                    if (B.test(A)) return A.charAt(0) == "#" && A.length == 7 ? A : b(A)
                                }
                                $ = "hex or rgb string";
                                break;
                            case R:
                                if (ue) return A + this.unit;
                                if (F && B.test(A)) return A;
                                $ = "number(px) or string(unit)";
                                break;
                            case x:
                                if (ue) return A + this.unit;
                                if (F && B.test(A)) return A;
                                $ = "number(px) or string(unit or %)";
                                break;
                            case q:
                                if (ue) return A + this.angle;
                                if (F && B.test(A)) return A;
                                $ = "number(deg) or string(angle)";
                                break;
                            case V:
                                if (ue || F && x.test(A)) return A;
                                $ = "number(unitless) or string(unit or %)"
                        }
                        return a($, A), A
                    }, c.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                K = p(M, function(c, E) {
                    c.init = function() {
                        E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), C))
                    }
                }),
                te = p(M, function(c, E) {
                    c.init = function() {
                        E.init.apply(this, arguments), this.animate = this.fallback
                    }, c.get = function() {
                        return this.$el[this.name]()
                    }, c.update = function(I) {
                        this.$el[this.name](I)
                    }
                }),
                oe = p(M, function(c, E) {
                    function I(b, v) {
                        var A, B, $, ue, F;
                        for (A in b) ue = Xe[A], $ = ue[0], B = ue[1] || A, F = this.convert(b[A], $), v.call(this, B, F, $)
                    }
                    c.init = function() {
                        E.init.apply(this, arguments), this.current || (this.current = {}, Xe.perspective && fe.perspective && (this.current.perspective = fe.perspective, tt(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, c.set = function(b) {
                        I.call(this, b, function(v, A) {
                            this.current[v] = A
                        }), tt(this.el, this.name, this.style(this.current)), this.redraw()
                    }, c.transition = function(b) {
                        var v = this.values(b);
                        this.tween = new ge({
                            current: this.current,
                            values: v,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var A, B = {};
                        for (A in this.current) B[A] = A in v ? v[A] : this.current[A];
                        this.active = !0, this.nextStyle = this.style(B)
                    }, c.fallback = function(b) {
                        var v = this.values(b);
                        this.tween = new ge({
                            current: this.current,
                            values: v,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.update = function() {
                        tt(this.el, this.name, this.style(this.current))
                    }, c.style = function(b) {
                        var v, A = "";
                        for (v in b) A += v + "(" + b[v] + ") ";
                        return A
                    }, c.values = function(b) {
                        var v, A = {};
                        return I.call(this, b, function(B, $, ue) {
                            A[B] = $, this.current[B] === void 0 && (v = 0, ~B.indexOf("scale") && (v = 1), this.current[B] = this.convert(v, ue))
                        }), A
                    }
                }),
                j = p(function(c) {
                    function E(F) {
                        $.push(F) === 1 && L(I)
                    }

                    function I() {
                        var F, J, ee, he = $.length;
                        if (he)
                            for (L(I), J = X(), F = he; F--;) ee = $[F], ee && ee.render(J)
                    }

                    function b(F) {
                        var J, ee = e.inArray(F, $);
                        ee >= 0 && (J = $.slice(ee + 1), $.length = ee, J.length && ($ = $.concat(J)))
                    }

                    function v(F) {
                        return Math.round(F * ue) / ue
                    }

                    function A(F, J, ee) {
                        return i(F[0] + ee * (J[0] - F[0]), F[1] + ee * (J[1] - F[1]), F[2] + ee * (J[2] - F[2]))
                    }
                    var B = {
                        ease: d.ease[1],
                        from: 0,
                        to: 1
                    };
                    c.init = function(F) {
                        this.duration = F.duration || 0, this.delay = F.delay || 0;
                        var J = F.ease || B.ease;
                        d[J] && (J = d[J][1]), typeof J != "function" && (J = B.ease), this.ease = J, this.update = F.update || o, this.complete = F.complete || o, this.context = F.context || this, this.name = F.name;
                        var ee = F.from,
                            he = F.to;
                        ee === void 0 && (ee = B.from), he === void 0 && (he = B.to), this.unit = F.unit || "", typeof ee == "number" && typeof he == "number" ? (this.begin = ee, this.change = he - ee) : this.format(he, ee), this.value = this.begin + this.unit, this.start = X(), F.autoplay !== !1 && this.play()
                    }, c.play = function() {
                        this.active || (this.start || (this.start = X()), this.active = !0, E(this))
                    }, c.stop = function() {
                        this.active && (this.active = !1, b(this))
                    }, c.render = function(F) {
                        var J, ee = F - this.start;
                        if (this.delay) {
                            if (ee <= this.delay) return;
                            ee -= this.delay
                        }
                        if (ee < this.duration) {
                            var he = this.ease(ee, 0, 1, this.duration);
                            return J = this.startRGB ? A(this.startRGB, this.endRGB, he) : v(this.begin + he * this.change), this.value = J + this.unit, void this.update.call(this.context, this.value)
                        }
                        J = this.endHex || this.begin + this.change, this.value = J + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, c.format = function(F, J) {
                        if (J += "", F += "", F.charAt(0) == "#") return this.startRGB = r(J), this.endRGB = r(F), this.endHex = F, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ee = J.replace(m, ""),
                                he = F.replace(m, "");
                            ee !== he && s("tween", J, F), this.unit = ee
                        }
                        J = parseFloat(J), F = parseFloat(F), this.begin = this.value = J, this.change = F - J
                    }, c.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var $ = [],
                        ue = 1e3
                }),
                ne = p(j, function(c) {
                    c.init = function(E) {
                        this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
                    }, c.render = function(E) {
                        var I = E - this.start;
                        I < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                ge = p(j, function(c, E) {
                    c.init = function(I) {
                        this.context = I.context, this.update = I.update, this.tweens = [], this.current = I.current;
                        var b, v;
                        for (b in I.values) v = I.values[b], this.current[b] !== v && this.tweens.push(new j({
                            name: b,
                            from: this.current[b],
                            to: v,
                            duration: I.duration,
                            delay: I.delay,
                            ease: I.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, c.render = function(I) {
                        var b, v, A = this.tweens.length,
                            B = !1;
                        for (b = A; b--;) v = this.tweens[b], v.context && (v.render(I), this.current[v.name] = v.value, B = !0);
                        return B ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, c.destroy = function() {
                        if (E.destroy.call(this), this.tweens) {
                            var I, b = this.tweens.length;
                            for (I = b; I--;) this.tweens[I].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                fe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !G.transition,
                    agentTests: []
                };
            t.fallback = function(c) {
                if (!G.transition) return fe.fallback = !0;
                fe.agentTests.push("(" + c + ")");
                var E = new RegExp(fe.agentTests.join("|"), "i");
                fe.fallback = E.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
                return new j(c)
            }, t.delay = function(c, E, I) {
                return new ne({
                    complete: E,
                    duration: c,
                    context: I
                })
            }, e.fn.tram = function(c) {
                return t.call(null, this, c)
            };
            var tt = e.style,
                Wt = e.css,
                zt = {
                    transform: G.transform && G.transform.css
                },
                Kt = {
                    color: [K, C],
                    background: [K, C, "background-color"],
                    "outline-color": [K, C],
                    "border-color": [K, C],
                    "border-top-color": [K, C],
                    "border-right-color": [K, C],
                    "border-bottom-color": [K, C],
                    "border-left-color": [K, C],
                    "border-width": [M, R],
                    "border-top-width": [M, R],
                    "border-right-width": [M, R],
                    "border-bottom-width": [M, R],
                    "border-left-width": [M, R],
                    "border-spacing": [M, R],
                    "letter-spacing": [M, R],
                    margin: [M, R],
                    "margin-top": [M, R],
                    "margin-right": [M, R],
                    "margin-bottom": [M, R],
                    "margin-left": [M, R],
                    padding: [M, R],
                    "padding-top": [M, R],
                    "padding-right": [M, R],
                    "padding-bottom": [M, R],
                    "padding-left": [M, R],
                    "outline-width": [M, R],
                    opacity: [M, O],
                    top: [M, x],
                    right: [M, x],
                    bottom: [M, x],
                    left: [M, x],
                    "font-size": [M, x],
                    "text-indent": [M, x],
                    "word-spacing": [M, x],
                    width: [M, x],
                    "min-width": [M, x],
                    "max-width": [M, x],
                    height: [M, x],
                    "min-height": [M, x],
                    "max-height": [M, x],
                    "line-height": [M, V],
                    "scroll-top": [te, O, "scrollTop"],
                    "scroll-left": [te, O, "scrollLeft"]
                },
                Xe = {};
            G.transform && (Kt.transform = [oe], Xe = {
                x: [x, "translateX"],
                y: [x, "translateY"],
                rotate: [q],
                rotateX: [q],
                rotateY: [q],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [q],
                skewX: [q],
                skewY: [q]
            }), G.transform && G.backface && (Xe.z = [x, "translateZ"], Xe.rotateZ = [q], Xe.scaleZ = [O], Xe.perspective = [R]);
            var Ur = /ms/,
                An = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ua = f((yF, sa) => {
        "use strict";
        var XE = window.$,
            VE = Br() && XE.tram;
        sa.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                n = Array.prototype,
                r = Object.prototype,
                i = Function.prototype,
                o = n.push,
                a = n.slice,
                s = n.concat,
                u = r.toString,
                l = r.hasOwnProperty,
                g = n.forEach,
                p = n.map,
                d = n.reduce,
                h = n.reduceRight,
                y = n.filter,
                _ = n.every,
                S = n.some,
                m = n.indexOf,
                w = n.lastIndexOf,
                O = Array.isArray,
                C = Object.keys,
                R = i.bind,
                x = e.each = e.forEach = function(T, P, U) {
                    if (T == null) return T;
                    if (g && T.forEach === g) T.forEach(P, U);
                    else if (T.length === +T.length) {
                        for (var G = 0, Z = T.length; G < Z; G++)
                            if (P.call(U, T[G], G, T) === t) return
                    } else
                        for (var Q = e.keys(T), G = 0, Z = Q.length; G < Z; G++)
                            if (P.call(U, T[Q[G]], Q[G], T) === t) return;
                    return T
                };
            e.map = e.collect = function(T, P, U) {
                var G = [];
                return T == null ? G : p && T.map === p ? T.map(P, U) : (x(T, function(Z, Q, L) {
                    G.push(P.call(U, Z, Q, L))
                }), G)
            }, e.find = e.detect = function(T, P, U) {
                var G;
                return q(T, function(Z, Q, L) {
                    if (P.call(U, Z, Q, L)) return G = Z, !0
                }), G
            }, e.filter = e.select = function(T, P, U) {
                var G = [];
                return T == null ? G : y && T.filter === y ? T.filter(P, U) : (x(T, function(Z, Q, L) {
                    P.call(U, Z, Q, L) && G.push(Z)
                }), G)
            };
            var q = e.some = e.any = function(T, P, U) {
                P || (P = e.identity);
                var G = !1;
                return T == null ? G : S && T.some === S ? T.some(P, U) : (x(T, function(Z, Q, L) {
                    if (G || (G = P.call(U, Z, Q, L))) return t
                }), !!G)
            };
            e.contains = e.include = function(T, P) {
                return T == null ? !1 : m && T.indexOf === m ? T.indexOf(P) != -1 : q(T, function(U) {
                    return U === P
                })
            }, e.delay = function(T, P) {
                var U = a.call(arguments, 2);
                return setTimeout(function() {
                    return T.apply(null, U)
                }, P)
            }, e.defer = function(T) {
                return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(T) {
                var P, U, G;
                return function() {
                    P || (P = !0, U = arguments, G = this, VE.frame(function() {
                        P = !1, T.apply(G, U)
                    }))
                }
            }, e.debounce = function(T, P, U) {
                var G, Z, Q, L, X, H = function() {
                    var D = e.now() - L;
                    D < P ? G = setTimeout(H, P - D) : (G = null, U || (X = T.apply(Q, Z), Q = Z = null))
                };
                return function() {
                    Q = this, Z = arguments, L = e.now();
                    var D = U && !G;
                    return G || (G = setTimeout(H, P)), D && (X = T.apply(Q, Z), Q = Z = null), X
                }
            }, e.defaults = function(T) {
                if (!e.isObject(T)) return T;
                for (var P = 1, U = arguments.length; P < U; P++) {
                    var G = arguments[P];
                    for (var Z in G) T[Z] === void 0 && (T[Z] = G[Z])
                }
                return T
            }, e.keys = function(T) {
                if (!e.isObject(T)) return [];
                if (C) return C(T);
                var P = [];
                for (var U in T) e.has(T, U) && P.push(U);
                return P
            }, e.has = function(T, P) {
                return l.call(T, P)
            }, e.isObject = function(T) {
                return T === Object(T)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var V = /(.)^/,
                k = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                W = /\\|'|\r|\n|\u2028|\u2029/g,
                Y = function(T) {
                    return "\\" + k[T]
                },
                N = /^\s*(\w|\$)+\s*$/;
            return e.template = function(T, P, U) {
                !P && U && (P = U), P = e.defaults({}, P, e.templateSettings);
                var G = RegExp([(P.escape || V).source, (P.interpolate || V).source, (P.evaluate || V).source].join("|") + "|$", "g"),
                    Z = 0,
                    Q = "__p+='";
                T.replace(G, function(D, M, K, te, oe) {
                    return Q += T.slice(Z, oe).replace(W, Y), Z = oe + D.length, M ? Q += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : K ? Q += `'+
((__t=(` + K + `))==null?'':__t)+
'` : te && (Q += `';
` + te + `
__p+='`), D
                }), Q += `';
`;
                var L = P.variable;
                if (L) {
                    if (!N.test(L)) throw new Error("variable is not a bare identifier: " + L)
                } else Q = `with(obj||{}){
` + Q + `}
`, L = "obj";
                Q = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Q + `return __p;
`;
                var X;
                try {
                    X = new Function(P.variable || "obj", "_", Q)
                } catch (D) {
                    throw D.source = Q, D
                }
                var H = function(D) {
                    return X.call(this, D, e)
                };
                return H.source = "function(" + L + `){
` + Q + "}", H
            }, e
        }()
    });
    var ke = f((mF, Ea) => {
        "use strict";
        var se = {},
            Et = {},
            yt = [],
            Hr = window.Webflow || [],
            nt = window.jQuery,
            Me = nt(window),
            UE = nt(document),
            Be = nt.isFunction,
            Ne = se._ = ua(),
            la = se.tram = Br() && nt.tram,
            xn = !1,
            Wr = !1;
        la.config.hideBackface = !1;
        la.config.keepInherited = !0;
        se.define = function(e, t, n) {
            Et[e] && da(Et[e]);
            var r = Et[e] = t(nt, Ne, n) || {};
            return fa(r), r
        };
        se.require = function(e) {
            return Et[e]
        };

        function fa(e) {
            se.env() && (Be(e.design) && Me.on("__wf_design", e.design), Be(e.preview) && Me.on("__wf_preview", e.preview)), Be(e.destroy) && Me.on("__wf_destroy", e.destroy), e.ready && Be(e.ready) && BE(e)
        }

        function BE(e) {
            if (xn) {
                e.ready();
                return
            }
            Ne.contains(yt, e.ready) || yt.push(e.ready)
        }

        function da(e) {
            Be(e.design) && Me.off("__wf_design", e.design), Be(e.preview) && Me.off("__wf_preview", e.preview), Be(e.destroy) && Me.off("__wf_destroy", e.destroy), e.ready && Be(e.ready) && kE(e)
        }

        function kE(e) {
            yt = Ne.filter(yt, function(t) {
                return t !== e.ready
            })
        }
        se.push = function(e) {
            if (xn) {
                Be(e) && e();
                return
            }
            Hr.push(e)
        };
        se.env = function(e) {
            var t = window.__wf_design,
                n = typeof t < "u";
            if (!e) return n;
            if (e === "design") return n && t;
            if (e === "preview") return n && !t;
            if (e === "slug") return n && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var wn = navigator.userAgent.toLowerCase(),
            pa = se.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            HE = se.env.chrome = /chrome/.test(wn) && /Google/.test(navigator.vendor) && parseInt(wn.match(/chrome\/(\d+)\./)[1], 10),
            WE = se.env.ios = /(ipod|iphone|ipad)/.test(wn);
        se.env.safari = /safari/.test(wn) && !HE && !WE;
        var kr;
        pa && UE.on("touchstart mousedown", function(e) {
            kr = e.target
        });
        se.validClick = pa ? function(e) {
            return e === kr || nt.contains(e, kr)
        } : function() {
            return !0
        };
        var ga = "resize.webflow orientationchange.webflow load.webflow",
            zE = "scroll.webflow " + ga;
        se.resize = zr(Me, ga);
        se.scroll = zr(Me, zE);
        se.redraw = zr();

        function zr(e, t) {
            var n = [],
                r = {};
            return r.up = Ne.throttle(function(i) {
                Ne.each(n, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, r.up), r.on = function(i) {
                typeof i == "function" && (Ne.contains(n, i) || n.push(i))
            }, r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = Ne.filter(n, function(o) {
                    return o !== i
                })
            }, r
        }
        se.location = function(e) {
            window.location = e
        };
        se.env() && (se.location = function() {});
        se.ready = function() {
            xn = !0, Wr ? KE() : Ne.each(yt, ca), Ne.each(Hr, ca), se.resize.up()
        };

        function ca(e) {
            Be(e) && e()
        }

        function KE() {
            Wr = !1, Ne.each(Et, fa)
        }
        var ut;
        se.load = function(e) {
            ut.then(e)
        };

        function ha() {
            ut && (ut.reject(), Me.off("load", ut.resolve)), ut = new nt.Deferred, Me.on("load", ut.resolve)
        }
        se.destroy = function(e) {
            e = e || {}, Wr = !0, Me.triggerHandler("__wf_destroy"), e.domready != null && (xn = e.domready), Ne.each(Et, da), se.resize.off(), se.scroll.off(), se.redraw.off(), yt = [], Hr = [], ut.state() === "pending" && ha()
        };
        nt(se.ready);
        ha();
        Ea.exports = window.Webflow = se
    });
    var va = f((vF, ma) => {
        "use strict";
        var ya = ke();
        ya.define("brand", ma.exports = function(e) {
            var t = {},
                n = document,
                r = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var h = r.attr("data-wf-status"),
                    y = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && a.hostname !== y && (h = !0), h && !s && (l = l || p(), d(), setTimeout(d, 500), e(n).off(u, g).on(u, g))
            };

            function g() {
                var h = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }

            function p() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(y, _), h[0]
            }

            function d() {
                var h = i.children(o),
                    y = h.length && h.get(0) === l,
                    _ = ya.env("editor");
                if (y) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(), _ || i.append(l)
            }
            return t
        })
    });
    var Ia = f((_F, _a) => {
        "use strict";
        var Kr = ke();
        Kr.define("edit", _a.exports = function(e, t, n) {
            if (n = n || {}, (Kr.env("test") || Kr.env("frame")) && !n.fixture && !jE()) return {
                exit: 1
            };
            var r = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, l = n.load || d,
                g = !1;
            try {
                g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            g ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);

            function p() {
                u || /\?edit/.test(a.hash) && l()
            }

            function d() {
                u = !0, window.WebflowEditor = !0, i.off(s, p), w(function(C) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(C)
                    })
                })
            }

            function h(C) {
                return function(R) {
                    if (!R) {
                        console.error("Could not load editor data");
                        return
                    }
                    R.thirdPartyCookiesSupported = C, y(S(R.scriptPath), function() {
                        window.WebflowEditor(R)
                    })
                }
            }

            function y(C, R) {
                e.ajax({
                    type: "GET",
                    url: C,
                    dataType: "script",
                    cache: !0
                }).then(R, _)
            }

            function _(C, R, x) {
                throw console.error("Could not load editor script: " + R), x
            }

            function S(C) {
                return C.indexOf("//") >= 0 ? C : m("https://editor-api.webflow.com" + C)
            }

            function m(C) {
                return C.replace(/([^:])\/\//g, "$1/")
            }

            function w(C) {
                var R = window.document.createElement("iframe");
                R.src = "https://webflow.com/site/third-party-cookie-check.html", R.style.display = "none", R.sandbox = "allow-scripts allow-same-origin";
                var x = function(q) {
                    q.data === "WF_third_party_cookies_unsupported" ? (O(R, x), C(!1)) : q.data === "WF_third_party_cookies_supported" && (O(R, x), C(!0))
                };
                R.onerror = function() {
                    O(R, x), C(!1)
                }, window.addEventListener("message", x, !1), window.document.body.appendChild(R)
            }

            function O(C, R) {
                window.removeEventListener("message", R, !1), C.remove()
            }
            return r
        });

        function jE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var ba = f((IF, Ta) => {
        "use strict";
        var YE = ke();
        YE.define("focus-visible", Ta.exports = function() {
            function e(n) {
                var r = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList)
                }

                function u(O) {
                    var C = O.type,
                        R = O.tagName;
                    return !!(R === "INPUT" && a[C] && !O.readOnly || R === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }

                function l(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }

                function g(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }

                function p(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (s(n.activeElement) && l(n.activeElement), r = !0)
                }

                function d() {
                    r = !1
                }

                function h(O) {
                    s(O.target) && (r || u(O.target)) && l(O.target)
                }

                function y(O) {
                    s(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), g(O.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (r = !0), S())
                }

                function S() {
                    document.addEventListener("mousemove", w), document.addEventListener("mousedown", w), document.addEventListener("mouseup", w), document.addEventListener("pointermove", w), document.addEventListener("pointerdown", w), document.addEventListener("pointerup", w), document.addEventListener("touchmove", w), document.addEventListener("touchstart", w), document.addEventListener("touchend", w)
                }

                function m() {
                    document.removeEventListener("mousemove", w), document.removeEventListener("mousedown", w), document.removeEventListener("mouseup", w), document.removeEventListener("pointermove", w), document.removeEventListener("pointerdown", w), document.removeEventListener("pointerup", w), document.removeEventListener("touchmove", w), document.removeEventListener("touchstart", w), document.removeEventListener("touchend", w)
                }

                function w(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (r = !1, m())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", _, !0), S(), n.addEventListener("focus", h, !0), n.addEventListener("blur", y, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Oa = f((TF, Sa) => {
        "use strict";
        var Aa = ke();
        Aa.define("focus", Sa.exports = function() {
            var e = [],
                t = !1;

            function n(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function r(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                r(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Aa.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Ra = f((bF, xa) => {
        "use strict";
        var jr = window.jQuery,
            He = {},
            Rn = [],
            wa = ".w-ix",
            Cn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, jr(t).triggerHandler(He.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, jr(t).triggerHandler(He.types.OUTRO))
                }
            };
        He.triggers = {};
        He.types = {
            INTRO: "w-ix-intro" + wa,
            OUTRO: "w-ix-outro" + wa
        };
        He.init = function() {
            for (var e = Rn.length, t = 0; t < e; t++) {
                var n = Rn[t];
                n[0](0, n[1])
            }
            Rn = [], jr.extend(He.triggers, Cn)
        };
        He.async = function() {
            for (var e in Cn) {
                var t = Cn[e];
                Cn.hasOwnProperty(e) && (He.triggers[e] = function(n, r) {
                    Rn.push([t, r])
                })
            }
        };
        He.async();
        xa.exports = He
    });
    var Na = f((AF, La) => {
        "use strict";
        var Yr = Ra();

        function Ca(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
        }
        var $E = window.jQuery,
            Pn = {},
            Pa = ".w-ix",
            QE = {
                reset: function(e, t) {
                    Yr.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Yr.triggers.intro(e, t), Ca(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Yr.triggers.outro(e, t), Ca(t, "COMPONENT_INACTIVE")
                }
            };
        Pn.triggers = {};
        Pn.types = {
            INTRO: "w-ix-intro" + Pa,
            OUTRO: "w-ix-outro" + Pa
        };
        $E.extend(Pn.triggers, QE);
        La.exports = Pn
    });
    var $r = f((SF, Ma) => {
        var ZE = typeof global == "object" && global && global.Object === Object && global;
        Ma.exports = ZE
    });
    var De = f((OF, Da) => {
        var JE = $r(),
            ey = typeof self == "object" && self && self.Object === Object && self,
            ty = JE || ey || Function("return this")();
        Da.exports = ty
    });
    var mt = f((wF, Fa) => {
        var ny = De(),
            ry = ny.Symbol;
        Fa.exports = ry
    });
    var Va = f((xF, Xa) => {
        var qa = mt(),
            Ga = Object.prototype,
            iy = Ga.hasOwnProperty,
            oy = Ga.toString,
            Yt = qa ? qa.toStringTag : void 0;

        function ay(e) {
            var t = iy.call(e, Yt),
                n = e[Yt];
            try {
                e[Yt] = void 0;
                var r = !0
            } catch {}
            var i = oy.call(e);
            return r && (t ? e[Yt] = n : delete e[Yt]), i
        }
        Xa.exports = ay
    });
    var Ba = f((RF, Ua) => {
        var sy = Object.prototype,
            uy = sy.toString;

        function cy(e) {
            return uy.call(e)
        }
        Ua.exports = cy
    });
    var rt = f((CF, Wa) => {
        var ka = mt(),
            ly = Va(),
            fy = Ba(),
            dy = "[object Null]",
            py = "[object Undefined]",
            Ha = ka ? ka.toStringTag : void 0;

        function gy(e) {
            return e == null ? e === void 0 ? py : dy : Ha && Ha in Object(e) ? ly(e) : fy(e)
        }
        Wa.exports = gy
    });
    var Qr = f((PF, za) => {
        function hy(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        za.exports = hy
    });
    var Zr = f((LF, Ka) => {
        var Ey = Qr(),
            yy = Ey(Object.getPrototypeOf, Object);
        Ka.exports = yy
    });
    var $e = f((NF, ja) => {
        function my(e) {
            return e != null && typeof e == "object"
        }
        ja.exports = my
    });
    var Jr = f((MF, $a) => {
        var vy = rt(),
            _y = Zr(),
            Iy = $e(),
            Ty = "[object Object]",
            by = Function.prototype,
            Ay = Object.prototype,
            Ya = by.toString,
            Sy = Ay.hasOwnProperty,
            Oy = Ya.call(Object);

        function wy(e) {
            if (!Iy(e) || vy(e) != Ty) return !1;
            var t = _y(e);
            if (t === null) return !0;
            var n = Sy.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && Ya.call(n) == Oy
        }
        $a.exports = wy
    });
    var Qa = f(ei => {
        "use strict";
        Object.defineProperty(ei, "__esModule", {
            value: !0
        });
        ei.default = xy;

        function xy(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }
    });
    var Za = f((ni, ti) => {
        "use strict";
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        var Ry = Qa(),
            Cy = Py(Ry);

        function Py(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var vt;
        typeof self < "u" ? vt = self : typeof window < "u" ? vt = window : typeof global < "u" ? vt = global : typeof ti < "u" ? vt = ti : vt = Function("return this")();
        var Ly = (0, Cy.default)(vt);
        ni.default = Ly
    });
    var ri = f($t => {
        "use strict";
        $t.__esModule = !0;
        $t.ActionTypes = void 0;
        $t.default = ns;
        var Ny = Jr(),
            My = ts(Ny),
            Dy = Za(),
            Ja = ts(Dy);

        function ts(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var es = $t.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function ns(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
                if (typeof n != "function") throw new Error("Expected the enhancer to be a function.");
                return n(ns)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function l() {
                s === a && (s = a.slice())
            }

            function g() {
                return o
            }

            function p(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var S = !0;
                return l(), s.push(_),
                    function() {
                        if (S) {
                            S = !1, l();
                            var w = s.indexOf(_);
                            s.splice(w, 1)
                        }
                    }
            }

            function d(_) {
                if (!(0, My.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var S = a = s, m = 0; m < S.length; m++) S[m]();
                return _
            }

            function h(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, d({
                    type: es.INIT
                })
            }

            function y() {
                var _, S = p;
                return _ = {
                    subscribe: function(w) {
                        if (typeof w != "object") throw new TypeError("Expected the observer to be an object.");

                        function O() {
                            w.next && w.next(g())
                        }
                        O();
                        var C = S(O);
                        return {
                            unsubscribe: C
                        }
                    }
                }, _[Ja.default] = function() {
                    return this
                }, _
            }
            return d({
                type: es.INIT
            }), r = {
                dispatch: d,
                subscribe: p,
                getState: g,
                replaceReducer: h
            }, r[Ja.default] = y, r
        }
    });
    var oi = f(ii => {
        "use strict";
        ii.__esModule = !0;
        ii.default = Fy;

        function Fy(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var os = f(ai => {
        "use strict";
        ai.__esModule = !0;
        ai.default = Uy;
        var rs = ri(),
            qy = Jr(),
            GF = is(qy),
            Gy = oi(),
            XF = is(Gy);

        function is(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Xy(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Vy(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, {
                        type: rs.ActionTypes.INIT
                    });
                if (typeof r > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + rs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Uy(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1) var a;
            var s;
            try {
                Vy(n)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    g = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var d = !1, h = {}, y = 0; y < o.length; y++) {
                    var _ = o[y],
                        S = n[_],
                        m = l[_],
                        w = S(m, g);
                    if (typeof w > "u") {
                        var O = Xy(_, g);
                        throw new Error(O)
                    }
                    h[_] = w, d = d || w !== m
                }
                return d ? h : l
            }
        }
    });
    var ss = f(si => {
        "use strict";
        si.__esModule = !0;
        si.default = By;

        function as(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function By(e, t) {
            if (typeof e == "function") return as(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i],
                    a = e[o];
                typeof a == "function" && (r[o] = as(a, t))
            }
            return r
        }
    });
    var ci = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = ky;

        function ky() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var r = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    });
    var us = f(li => {
        "use strict";
        li.__esModule = !0;
        var Hy = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        li.default = jy;
        var Wy = ci(),
            zy = Ky(Wy);

        function Ky(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function jy() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(r) {
                return function(i, o, a) {
                    var s = r(i, o, a),
                        u = s.dispatch,
                        l = [],
                        g = {
                            getState: s.getState,
                            dispatch: function(d) {
                                return u(d)
                            }
                        };
                    return l = t.map(function(p) {
                        return p(g)
                    }), u = zy.default.apply(void 0, l)(s.dispatch), Hy({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var fi = f(Ce => {
        "use strict";
        Ce.__esModule = !0;
        Ce.compose = Ce.applyMiddleware = Ce.bindActionCreators = Ce.combineReducers = Ce.createStore = void 0;
        var Yy = ri(),
            $y = _t(Yy),
            Qy = os(),
            Zy = _t(Qy),
            Jy = ss(),
            em = _t(Jy),
            tm = us(),
            nm = _t(tm),
            rm = ci(),
            im = _t(rm),
            om = oi(),
            HF = _t(om);

        function _t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ce.createStore = $y.default;
        Ce.combineReducers = Zy.default;
        Ce.bindActionCreators = em.default;
        Ce.applyMiddleware = nm.default;
        Ce.compose = im.default
    });
    var Fe, di, We, am, sm, Ln, um, pi = le(() => {
        "use strict";
        Fe = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, di = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, We = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, am = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, sm = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Ln = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, um = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Te, cm, Nn = le(() => {
        "use strict";
        Te = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, cm = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var lm, cs = le(() => {
        "use strict";
        lm = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var fm, dm, pm, gm, hm, Em, ym, gi, ls = le(() => {
        "use strict";
        Nn();
        ({
            TRANSFORM_MOVE: fm,
            TRANSFORM_SCALE: dm,
            TRANSFORM_ROTATE: pm,
            TRANSFORM_SKEW: gm,
            STYLE_SIZE: hm,
            STYLE_FILTER: Em,
            STYLE_FONT_VARIATION: ym
        } = Te), gi = {
            [fm]: !0,
            [dm]: !0,
            [pm]: !0,
            [gm]: !0,
            [hm]: !0,
            [Em]: !0,
            [ym]: !0
        }
    });
    var ye = {};
    Oe(ye, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Mm,
        IX2_ANIMATION_FRAME_CHANGED: () => xm,
        IX2_CLEAR_REQUESTED: () => Sm,
        IX2_ELEMENT_STATE_CHANGED: () => Nm,
        IX2_EVENT_LISTENER_ADDED: () => Om,
        IX2_EVENT_STATE_CHANGED: () => wm,
        IX2_INSTANCE_ADDED: () => Cm,
        IX2_INSTANCE_REMOVED: () => Lm,
        IX2_INSTANCE_STARTED: () => Pm,
        IX2_MEDIA_QUERIES_DEFINED: () => Fm,
        IX2_PARAMETER_CHANGED: () => Rm,
        IX2_PLAYBACK_REQUESTED: () => bm,
        IX2_PREVIEW_REQUESTED: () => Tm,
        IX2_RAW_DATA_IMPORTED: () => mm,
        IX2_SESSION_INITIALIZED: () => vm,
        IX2_SESSION_STARTED: () => _m,
        IX2_SESSION_STOPPED: () => Im,
        IX2_STOP_REQUESTED: () => Am,
        IX2_TEST_FRAME_RENDERED: () => qm,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Dm
    });
    var mm, vm, _m, Im, Tm, bm, Am, Sm, Om, wm, xm, Rm, Cm, Pm, Lm, Nm, Mm, Dm, Fm, qm, fs = le(() => {
        "use strict";
        mm = "IX2_RAW_DATA_IMPORTED", vm = "IX2_SESSION_INITIALIZED", _m = "IX2_SESSION_STARTED", Im = "IX2_SESSION_STOPPED", Tm = "IX2_PREVIEW_REQUESTED", bm = "IX2_PLAYBACK_REQUESTED", Am = "IX2_STOP_REQUESTED", Sm = "IX2_CLEAR_REQUESTED", Om = "IX2_EVENT_LISTENER_ADDED", wm = "IX2_EVENT_STATE_CHANGED", xm = "IX2_ANIMATION_FRAME_CHANGED", Rm = "IX2_PARAMETER_CHANGED", Cm = "IX2_INSTANCE_ADDED", Pm = "IX2_INSTANCE_STARTED", Lm = "IX2_INSTANCE_REMOVED", Nm = "IX2_ELEMENT_STATE_CHANGED", Mm = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Dm = "IX2_VIEWPORT_WIDTH_CHANGED", Fm = "IX2_MEDIA_QUERIES_DEFINED", qm = "IX2_TEST_FRAME_RENDERED"
    });
    var ve = {};
    Oe(ve, {
        ABSTRACT_NODE: () => Dv,
        AUTO: () => Av,
        BACKGROUND: () => mv,
        BACKGROUND_COLOR: () => yv,
        BAR_DELIMITER: () => wv,
        BORDER_COLOR: () => vv,
        BOUNDARY_SELECTOR: () => Bm,
        CHILDREN: () => xv,
        COLON_DELIMITER: () => Ov,
        COLOR: () => _v,
        COMMA_DELIMITER: () => Sv,
        CONFIG_UNIT: () => $m,
        CONFIG_VALUE: () => zm,
        CONFIG_X_UNIT: () => Km,
        CONFIG_X_VALUE: () => km,
        CONFIG_Y_UNIT: () => jm,
        CONFIG_Y_VALUE: () => Hm,
        CONFIG_Z_UNIT: () => Ym,
        CONFIG_Z_VALUE: () => Wm,
        DISPLAY: () => Iv,
        FILTER: () => pv,
        FLEX: () => Tv,
        FONT_VARIATION_SETTINGS: () => gv,
        HEIGHT: () => Ev,
        HTML_ELEMENT: () => Nv,
        IMMEDIATE_CHILDREN: () => Rv,
        IX2_ID_DELIMITER: () => Gm,
        OPACITY: () => dv,
        PARENT: () => Pv,
        PLAIN_OBJECT: () => Mv,
        PRESERVE_3D: () => Lv,
        RENDER_GENERAL: () => qv,
        RENDER_PLUGIN: () => Xv,
        RENDER_STYLE: () => Gv,
        RENDER_TRANSFORM: () => Fv,
        ROTATE_X: () => av,
        ROTATE_Y: () => sv,
        ROTATE_Z: () => uv,
        SCALE_3D: () => ov,
        SCALE_X: () => nv,
        SCALE_Y: () => rv,
        SCALE_Z: () => iv,
        SIBLINGS: () => Cv,
        SKEW: () => cv,
        SKEW_X: () => lv,
        SKEW_Y: () => fv,
        TRANSFORM: () => Qm,
        TRANSLATE_3D: () => tv,
        TRANSLATE_X: () => Zm,
        TRANSLATE_Y: () => Jm,
        TRANSLATE_Z: () => ev,
        WF_PAGE: () => Xm,
        WIDTH: () => hv,
        WILL_CHANGE: () => bv,
        W_MOD_IX: () => Um,
        W_MOD_JS: () => Vm
    });
    var Gm, Xm, Vm, Um, Bm, km, Hm, Wm, zm, Km, jm, Ym, $m, Qm, Zm, Jm, ev, tv, nv, rv, iv, ov, av, sv, uv, cv, lv, fv, dv, pv, gv, hv, Ev, yv, mv, vv, _v, Iv, Tv, bv, Av, Sv, Ov, wv, xv, Rv, Cv, Pv, Lv, Nv, Mv, Dv, Fv, qv, Gv, Xv, ds = le(() => {
        "use strict";
        Gm = "|", Xm = "data-wf-page", Vm = "w-mod-js", Um = "w-mod-ix", Bm = ".w-dyn-item", km = "xValue", Hm = "yValue", Wm = "zValue", zm = "value", Km = "xUnit", jm = "yUnit", Ym = "zUnit", $m = "unit", Qm = "transform", Zm = "translateX", Jm = "translateY", ev = "translateZ", tv = "translate3d", nv = "scaleX", rv = "scaleY", iv = "scaleZ", ov = "scale3d", av = "rotateX", sv = "rotateY", uv = "rotateZ", cv = "skew", lv = "skewX", fv = "skewY", dv = "opacity", pv = "filter", gv = "font-variation-settings", hv = "width", Ev = "height", yv = "backgroundColor", mv = "background", vv = "borderColor", _v = "color", Iv = "display", Tv = "flex", bv = "willChange", Av = "AUTO", Sv = ",", Ov = ":", wv = "|", xv = "CHILDREN", Rv = "IMMEDIATE_CHILDREN", Cv = "SIBLINGS", Pv = "PARENT", Lv = "preserve-3d", Nv = "HTML_ELEMENT", Mv = "PLAIN_OBJECT", Dv = "ABSTRACT_NODE", Fv = "RENDER_TRANSFORM", qv = "RENDER_GENERAL", Gv = "RENDER_STYLE", Xv = "RENDER_PLUGIN"
    });
    var ps = {};
    Oe(ps, {
        ActionAppliesTo: () => cm,
        ActionTypeConsts: () => Te,
        EventAppliesTo: () => di,
        EventBasedOn: () => We,
        EventContinuousMouseAxes: () => am,
        EventLimitAffectedElements: () => sm,
        EventTypeConsts: () => Fe,
        IX2EngineActionTypes: () => ye,
        IX2EngineConstants: () => ve,
        InteractionTypeConsts: () => lm,
        QuickEffectDirectionConsts: () => um,
        QuickEffectIds: () => Ln,
        ReducedMotionTypes: () => gi
    });
    var we = le(() => {
        "use strict";
        pi();
        Nn();
        cs();
        ls();
        fs();
        ds();
        Nn();
        pi()
    });
    var Vv, gs, hs = le(() => {
        "use strict";
        we();
        ({
            IX2_RAW_DATA_IMPORTED: Vv
        } = ye), gs = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Vv:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var It = f(pe => {
        "use strict";
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        var Uv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        pe.clone = Dn;
        pe.addLast = ms;
        pe.addFirst = vs;
        pe.removeLast = _s;
        pe.removeFirst = Is;
        pe.insert = Ts;
        pe.removeAt = bs;
        pe.replaceAt = As;
        pe.getIn = Fn;
        pe.set = qn;
        pe.setIn = Gn;
        pe.update = Os;
        pe.updateIn = ws;
        pe.merge = xs;
        pe.mergeDeep = Rs;
        pe.mergeIn = Cs;
        pe.omit = Ps;
        pe.addDefaults = Ls;
        var Es = "INVALID_ARGS";

        function ys(e) {
            throw new Error(e)
        }

        function hi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Bv = {}.hasOwnProperty;

        function Dn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = hi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }

        function xe(e, t, n) {
            var r = n;
            r == null && ys(Es);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var g = hi(l);
                    if (g.length)
                        for (var p = 0; p <= g.length; p++) {
                            var d = g[p];
                            if (!(e && r[d] !== void 0)) {
                                var h = l[d];
                                t && Mn(r[d]) && Mn(h) && (h = xe(e, t, r[d], h)), !(h === void 0 || h === r[d]) && (i || (i = !0, r = Dn(r)), r[d] = h)
                            }
                        }
                }
            }
            return r
        }

        function Mn(e) {
            var t = typeof e > "u" ? "undefined" : Uv(e);
            return e != null && (t === "object" || t === "function")
        }

        function ms(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function vs(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function _s(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Is(e) {
            return e.length ? e.slice(1) : e
        }

        function Ts(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }

        function bs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function As(e, t, n) {
            if (e[t] === n) return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
            return i[t] = n, i
        }

        function Fn(e, t) {
            if (!Array.isArray(t) && ys(Es), e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n ? .[i], n === void 0) return n
                }
                return n
            }
        }

        function qn(e, t, n) {
            var r = typeof t == "number" ? [] : {},
                i = e ? ? r;
            if (i[t] === n) return i;
            var o = Dn(i);
            return o[t] = n, o
        }

        function Ss(e, t, n, r) {
            var i = void 0,
                o = t[r];
            if (r === t.length - 1) i = n;
            else {
                var a = Mn(e) && Mn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = Ss(a, t, n, r + 1)
            }
            return qn(e, o, i)
        }

        function Gn(e, t, n) {
            return t.length ? Ss(e, t, n, 0) : n
        }

        function Os(e, t, n) {
            var r = e ? .[t],
                i = n(r);
            return qn(e, t, i)
        }

        function ws(e, t, n) {
            var r = Fn(e, t),
                i = n(r);
            return Gn(e, t, i)
        }

        function xs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !1, !1, e, t, n, r, i, o].concat(s)) : xe(!1, !1, e, t, n, r, i, o)
        }

        function Rs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !1, !0, e, t, n, r, i, o].concat(s)) : xe(!1, !0, e, t, n, r, i, o)
        }

        function Cs(e, t, n, r, i, o, a) {
            var s = Fn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, g = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++) g[p - 7] = arguments[p];
            return g.length ? u = xe.call.apply(xe, [null, !1, !1, s, n, r, i, o, a].concat(g)) : u = xe(!1, !1, s, n, r, i, o, a), Gn(e, t, u)
        }

        function Ps(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (Bv.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r) return e;
            for (var o = {}, a = hi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Ls(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !0, !1, e, t, n, r, i, o].concat(s)) : xe(!0, !1, e, t, n, r, i, o)
        }
        var kv = {
            clone: Dn,
            addLast: ms,
            addFirst: vs,
            removeLast: _s,
            removeFirst: Is,
            insert: Ts,
            removeAt: bs,
            replaceAt: As,
            getIn: Fn,
            set: qn,
            setIn: Gn,
            update: Os,
            updateIn: ws,
            merge: xs,
            mergeDeep: Rs,
            mergeIn: Cs,
            omit: Ps,
            addDefaults: Ls
        };
        pe.default = kv
    });
    var Ms, Hv, Wv, zv, Kv, jv, Ns, Ds, Fs = le(() => {
        "use strict";
        we();
        Ms = ie(It()), {
            IX2_PREVIEW_REQUESTED: Hv,
            IX2_PLAYBACK_REQUESTED: Wv,
            IX2_STOP_REQUESTED: zv,
            IX2_CLEAR_REQUESTED: Kv
        } = ye, jv = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Ns = Object.create(null, {
            [Hv]: {
                value: "preview"
            },
            [Wv]: {
                value: "playback"
            },
            [zv]: {
                value: "stop"
            },
            [Kv]: {
                value: "clear"
            }
        }), Ds = (e = jv, t) => {
            if (t.type in Ns) {
                let n = [Ns[t.type]];
                return (0, Ms.setIn)(e, [n], { ...t.payload
                })
            }
            return e
        }
    });
    var be, Yv, $v, Qv, Zv, Jv, e_, t_, n_, r_, i_, qs, o_, Gs, Xs = le(() => {
        "use strict";
        we();
        be = ie(It()), {
            IX2_SESSION_INITIALIZED: Yv,
            IX2_SESSION_STARTED: $v,
            IX2_TEST_FRAME_RENDERED: Qv,
            IX2_SESSION_STOPPED: Zv,
            IX2_EVENT_LISTENER_ADDED: Jv,
            IX2_EVENT_STATE_CHANGED: e_,
            IX2_ANIMATION_FRAME_CHANGED: t_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: n_,
            IX2_VIEWPORT_WIDTH_CHANGED: r_,
            IX2_MEDIA_QUERIES_DEFINED: i_
        } = ye, qs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, o_ = 20, Gs = (e = qs, t) => {
            switch (t.type) {
                case Yv:
                    {
                        let {
                            hasBoundaryNodes: n,
                            reducedMotion: r
                        } = t.payload;
                        return (0, be.merge)(e, {
                            hasBoundaryNodes: n,
                            reducedMotion: r
                        })
                    }
                case $v:
                    return (0, be.set)(e, "active", !0);
                case Qv:
                    {
                        let {
                            payload: {
                                step: n = o_
                            }
                        } = t;
                        return (0, be.set)(e, "tick", e.tick + n)
                    }
                case Zv:
                    return qs;
                case t_:
                    {
                        let {
                            payload: {
                                now: n
                            }
                        } = t;
                        return (0, be.set)(e, "tick", n)
                    }
                case Jv:
                    {
                        let n = (0, be.addLast)(e.eventListeners, t.payload);
                        return (0, be.set)(e, "eventListeners", n)
                    }
                case e_:
                    {
                        let {
                            stateKey: n,
                            newState: r
                        } = t.payload;
                        return (0, be.setIn)(e, ["eventState", n], r)
                    }
                case n_:
                    {
                        let {
                            actionListId: n,
                            isPlaying: r
                        } = t.payload;
                        return (0, be.setIn)(e, ["playbackState", n], r)
                    }
                case r_:
                    {
                        let {
                            width: n,
                            mediaQueries: r
                        } = t.payload,
                        i = r.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: l
                            } = r[a];
                            if (n >= u && n <= l) {
                                o = s;
                                break
                            }
                        }
                        return (0, be.merge)(e, {
                            viewportWidth: n,
                            mediaQueryKey: o
                        })
                    }
                case i_:
                    return (0, be.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Us = f((l2, Vs) => {
        function a_() {
            this.__data__ = [], this.size = 0
        }
        Vs.exports = a_
    });
    var Xn = f((f2, Bs) => {
        function s_(e, t) {
            return e === t || e !== e && t !== t
        }
        Bs.exports = s_
    });
    var Qt = f((d2, ks) => {
        var u_ = Xn();

        function c_(e, t) {
            for (var n = e.length; n--;)
                if (u_(e[n][0], t)) return n;
            return -1
        }
        ks.exports = c_
    });
    var Ws = f((p2, Hs) => {
        var l_ = Qt(),
            f_ = Array.prototype,
            d_ = f_.splice;

        function p_(e) {
            var t = this.__data__,
                n = l_(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : d_.call(t, n, 1), --this.size, !0
        }
        Hs.exports = p_
    });
    var Ks = f((g2, zs) => {
        var g_ = Qt();

        function h_(e) {
            var t = this.__data__,
                n = g_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        zs.exports = h_
    });
    var Ys = f((h2, js) => {
        var E_ = Qt();

        function y_(e) {
            return E_(this.__data__, e) > -1
        }
        js.exports = y_
    });
    var Qs = f((E2, $s) => {
        var m_ = Qt();

        function v_(e, t) {
            var n = this.__data__,
                r = m_(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }
        $s.exports = v_
    });
    var Zt = f((y2, Zs) => {
        var __ = Us(),
            I_ = Ws(),
            T_ = Ks(),
            b_ = Ys(),
            A_ = Qs();

        function Tt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Tt.prototype.clear = __;
        Tt.prototype.delete = I_;
        Tt.prototype.get = T_;
        Tt.prototype.has = b_;
        Tt.prototype.set = A_;
        Zs.exports = Tt
    });
    var eu = f((m2, Js) => {
        var S_ = Zt();

        function O_() {
            this.__data__ = new S_, this.size = 0
        }
        Js.exports = O_
    });
    var nu = f((v2, tu) => {
        function w_(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
        tu.exports = w_
    });
    var iu = f((_2, ru) => {
        function x_(e) {
            return this.__data__.get(e)
        }
        ru.exports = x_
    });
    var au = f((I2, ou) => {
        function R_(e) {
            return this.__data__.has(e)
        }
        ou.exports = R_
    });
    var ze = f((T2, su) => {
        function C_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        su.exports = C_
    });
    var Ei = f((b2, uu) => {
        var P_ = rt(),
            L_ = ze(),
            N_ = "[object AsyncFunction]",
            M_ = "[object Function]",
            D_ = "[object GeneratorFunction]",
            F_ = "[object Proxy]";

        function q_(e) {
            if (!L_(e)) return !1;
            var t = P_(e);
            return t == M_ || t == D_ || t == N_ || t == F_
        }
        uu.exports = q_
    });
    var lu = f((A2, cu) => {
        var G_ = De(),
            X_ = G_["__core-js_shared__"];
        cu.exports = X_
    });
    var pu = f((S2, du) => {
        var yi = lu(),
            fu = function() {
                var e = /[^.]+$/.exec(yi && yi.keys && yi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function V_(e) {
            return !!fu && fu in e
        }
        du.exports = V_
    });
    var mi = f((O2, gu) => {
        var U_ = Function.prototype,
            B_ = U_.toString;

        function k_(e) {
            if (e != null) {
                try {
                    return B_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        gu.exports = k_
    });
    var Eu = f((w2, hu) => {
        var H_ = Ei(),
            W_ = pu(),
            z_ = ze(),
            K_ = mi(),
            j_ = /[\\^$.*+?()[\]{}|]/g,
            Y_ = /^\[object .+?Constructor\]$/,
            $_ = Function.prototype,
            Q_ = Object.prototype,
            Z_ = $_.toString,
            J_ = Q_.hasOwnProperty,
            eI = RegExp("^" + Z_.call(J_).replace(j_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function tI(e) {
            if (!z_(e) || W_(e)) return !1;
            var t = H_(e) ? eI : Y_;
            return t.test(K_(e))
        }
        hu.exports = tI
    });
    var mu = f((x2, yu) => {
        function nI(e, t) {
            return e ? .[t]
        }
        yu.exports = nI
    });
    var it = f((R2, vu) => {
        var rI = Eu(),
            iI = mu();

        function oI(e, t) {
            var n = iI(e, t);
            return rI(n) ? n : void 0
        }
        vu.exports = oI
    });
    var Vn = f((C2, _u) => {
        var aI = it(),
            sI = De(),
            uI = aI(sI, "Map");
        _u.exports = uI
    });
    var Jt = f((P2, Iu) => {
        var cI = it(),
            lI = cI(Object, "create");
        Iu.exports = lI
    });
    var Au = f((L2, bu) => {
        var Tu = Jt();

        function fI() {
            this.__data__ = Tu ? Tu(null) : {}, this.size = 0
        }
        bu.exports = fI
    });
    var Ou = f((N2, Su) => {
        function dI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Su.exports = dI
    });
    var xu = f((M2, wu) => {
        var pI = Jt(),
            gI = "__lodash_hash_undefined__",
            hI = Object.prototype,
            EI = hI.hasOwnProperty;

        function yI(e) {
            var t = this.__data__;
            if (pI) {
                var n = t[e];
                return n === gI ? void 0 : n
            }
            return EI.call(t, e) ? t[e] : void 0
        }
        wu.exports = yI
    });
    var Cu = f((D2, Ru) => {
        var mI = Jt(),
            vI = Object.prototype,
            _I = vI.hasOwnProperty;

        function II(e) {
            var t = this.__data__;
            return mI ? t[e] !== void 0 : _I.call(t, e)
        }
        Ru.exports = II
    });
    var Lu = f((F2, Pu) => {
        var TI = Jt(),
            bI = "__lodash_hash_undefined__";

        function AI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = TI && t === void 0 ? bI : t, this
        }
        Pu.exports = AI
    });
    var Mu = f((q2, Nu) => {
        var SI = Au(),
            OI = Ou(),
            wI = xu(),
            xI = Cu(),
            RI = Lu();

        function bt(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        bt.prototype.clear = SI;
        bt.prototype.delete = OI;
        bt.prototype.get = wI;
        bt.prototype.has = xI;
        bt.prototype.set = RI;
        Nu.exports = bt
    });
    var qu = f((G2, Fu) => {
        var Du = Mu(),
            CI = Zt(),
            PI = Vn();

        function LI() {
            this.size = 0, this.__data__ = {
                hash: new Du,
                map: new(PI || CI),
                string: new Du
            }
        }
        Fu.exports = LI
    });
    var Xu = f((X2, Gu) => {
        function NI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Gu.exports = NI
    });
    var en = f((V2, Vu) => {
        var MI = Xu();

        function DI(e, t) {
            var n = e.__data__;
            return MI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        Vu.exports = DI
    });
    var Bu = f((U2, Uu) => {
        var FI = en();

        function qI(e) {
            var t = FI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Uu.exports = qI
    });
    var Hu = f((B2, ku) => {
        var GI = en();

        function XI(e) {
            return GI(this, e).get(e)
        }
        ku.exports = XI
    });
    var zu = f((k2, Wu) => {
        var VI = en();

        function UI(e) {
            return VI(this, e).has(e)
        }
        Wu.exports = UI
    });
    var ju = f((H2, Ku) => {
        var BI = en();

        function kI(e, t) {
            var n = BI(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }
        Ku.exports = kI
    });
    var Un = f((W2, Yu) => {
        var HI = qu(),
            WI = Bu(),
            zI = Hu(),
            KI = zu(),
            jI = ju();

        function At(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        At.prototype.clear = HI;
        At.prototype.delete = WI;
        At.prototype.get = zI;
        At.prototype.has = KI;
        At.prototype.set = jI;
        Yu.exports = At
    });
    var Qu = f((z2, $u) => {
        var YI = Zt(),
            $I = Vn(),
            QI = Un(),
            ZI = 200;

        function JI(e, t) {
            var n = this.__data__;
            if (n instanceof YI) {
                var r = n.__data__;
                if (!$I || r.length < ZI - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new QI(r)
            }
            return n.set(e, t), this.size = n.size, this
        }
        $u.exports = JI
    });
    var vi = f((K2, Zu) => {
        var eT = Zt(),
            tT = eu(),
            nT = nu(),
            rT = iu(),
            iT = au(),
            oT = Qu();

        function St(e) {
            var t = this.__data__ = new eT(e);
            this.size = t.size
        }
        St.prototype.clear = tT;
        St.prototype.delete = nT;
        St.prototype.get = rT;
        St.prototype.has = iT;
        St.prototype.set = oT;
        Zu.exports = St
    });
    var ec = f((j2, Ju) => {
        var aT = "__lodash_hash_undefined__";

        function sT(e) {
            return this.__data__.set(e, aT), this
        }
        Ju.exports = sT
    });
    var nc = f((Y2, tc) => {
        function uT(e) {
            return this.__data__.has(e)
        }
        tc.exports = uT
    });
    var ic = f(($2, rc) => {
        var cT = Un(),
            lT = ec(),
            fT = nc();

        function Bn(e) {
            var t = -1,
                n = e == null ? 0 : e.length;
            for (this.__data__ = new cT; ++t < n;) this.add(e[t])
        }
        Bn.prototype.add = Bn.prototype.push = lT;
        Bn.prototype.has = fT;
        rc.exports = Bn
    });
    var ac = f((Q2, oc) => {
        function dT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        oc.exports = dT
    });
    var uc = f((Z2, sc) => {
        function pT(e, t) {
            return e.has(t)
        }
        sc.exports = pT
    });
    var _i = f((J2, cc) => {
        var gT = ic(),
            hT = ac(),
            ET = uc(),
            yT = 1,
            mT = 2;

        function vT(e, t, n, r, i, o) {
            var a = n & yT,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var l = o.get(e),
                g = o.get(t);
            if (l && g) return l == t && g == e;
            var p = -1,
                d = !0,
                h = n & mT ? new gT : void 0;
            for (o.set(e, t), o.set(t, e); ++p < s;) {
                var y = e[p],
                    _ = t[p];
                if (r) var S = a ? r(_, y, p, t, e, o) : r(y, _, p, e, t, o);
                if (S !== void 0) {
                    if (S) continue;
                    d = !1;
                    break
                }
                if (h) {
                    if (!hT(t, function(m, w) {
                            if (!ET(h, w) && (y === m || i(y, m, n, r, o))) return h.push(w)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(y === _ || i(y, _, n, r, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), d
        }
        cc.exports = vT
    });
    var fc = f((eq, lc) => {
        var _T = De(),
            IT = _T.Uint8Array;
        lc.exports = IT
    });
    var pc = f((tq, dc) => {
        function TT(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }), n
        }
        dc.exports = TT
    });
    var hc = f((nq, gc) => {
        function bT(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }), n
        }
        gc.exports = bT
    });
    var _c = f((rq, vc) => {
        var Ec = mt(),
            yc = fc(),
            AT = Xn(),
            ST = _i(),
            OT = pc(),
            wT = hc(),
            xT = 1,
            RT = 2,
            CT = "[object Boolean]",
            PT = "[object Date]",
            LT = "[object Error]",
            NT = "[object Map]",
            MT = "[object Number]",
            DT = "[object RegExp]",
            FT = "[object Set]",
            qT = "[object String]",
            GT = "[object Symbol]",
            XT = "[object ArrayBuffer]",
            VT = "[object DataView]",
            mc = Ec ? Ec.prototype : void 0,
            Ii = mc ? mc.valueOf : void 0;

        function UT(e, t, n, r, i, o, a) {
            switch (n) {
                case VT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case XT:
                    return !(e.byteLength != t.byteLength || !o(new yc(e), new yc(t)));
                case CT:
                case PT:
                case MT:
                    return AT(+e, +t);
                case LT:
                    return e.name == t.name && e.message == t.message;
                case DT:
                case qT:
                    return e == t + "";
                case NT:
                    var s = OT;
                case FT:
                    var u = r & xT;
                    if (s || (s = wT), e.size != t.size && !u) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    r |= RT, a.set(e, t);
                    var g = ST(s(e), s(t), r, i, o, a);
                    return a.delete(e), g;
                case GT:
                    if (Ii) return Ii.call(e) == Ii.call(t)
            }
            return !1
        }
        vc.exports = UT
    });
    var kn = f((iq, Ic) => {
        function BT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
        Ic.exports = BT
    });
    var me = f((oq, Tc) => {
        var kT = Array.isArray;
        Tc.exports = kT
    });
    var Ti = f((aq, bc) => {
        var HT = kn(),
            WT = me();

        function zT(e, t, n) {
            var r = t(e);
            return WT(e) ? r : HT(r, n(e))
        }
        bc.exports = zT
    });
    var Sc = f((sq, Ac) => {
        function KT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
        Ac.exports = KT
    });
    var bi = f((uq, Oc) => {
        function jT() {
            return []
        }
        Oc.exports = jT
    });
    var Ai = f((cq, xc) => {
        var YT = Sc(),
            $T = bi(),
            QT = Object.prototype,
            ZT = QT.propertyIsEnumerable,
            wc = Object.getOwnPropertySymbols,
            JT = wc ? function(e) {
                return e == null ? [] : (e = Object(e), YT(wc(e), function(t) {
                    return ZT.call(e, t)
                }))
            } : $T;
        xc.exports = JT
    });
    var Cc = f((lq, Rc) => {
        function eb(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        Rc.exports = eb
    });
    var Lc = f((fq, Pc) => {
        var tb = rt(),
            nb = $e(),
            rb = "[object Arguments]";

        function ib(e) {
            return nb(e) && tb(e) == rb
        }
        Pc.exports = ib
    });
    var tn = f((dq, Dc) => {
        var Nc = Lc(),
            ob = $e(),
            Mc = Object.prototype,
            ab = Mc.hasOwnProperty,
            sb = Mc.propertyIsEnumerable,
            ub = Nc(function() {
                return arguments
            }()) ? Nc : function(e) {
                return ob(e) && ab.call(e, "callee") && !sb.call(e, "callee")
            };
        Dc.exports = ub
    });
    var qc = f((pq, Fc) => {
        function cb() {
            return !1
        }
        Fc.exports = cb
    });
    var Hn = f((nn, Ot) => {
        var lb = De(),
            fb = qc(),
            Vc = typeof nn == "object" && nn && !nn.nodeType && nn,
            Gc = Vc && typeof Ot == "object" && Ot && !Ot.nodeType && Ot,
            db = Gc && Gc.exports === Vc,
            Xc = db ? lb.Buffer : void 0,
            pb = Xc ? Xc.isBuffer : void 0,
            gb = pb || fb;
        Ot.exports = gb
    });
    var Wn = f((gq, Uc) => {
        var hb = 9007199254740991,
            Eb = /^(?:0|[1-9]\d*)$/;

        function yb(e, t) {
            var n = typeof e;
            return t = t ? ? hb, !!t && (n == "number" || n != "symbol" && Eb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Uc.exports = yb
    });
    var zn = f((hq, Bc) => {
        var mb = 9007199254740991;

        function vb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mb
        }
        Bc.exports = vb
    });
    var Hc = f((Eq, kc) => {
        var _b = rt(),
            Ib = zn(),
            Tb = $e(),
            bb = "[object Arguments]",
            Ab = "[object Array]",
            Sb = "[object Boolean]",
            Ob = "[object Date]",
            wb = "[object Error]",
            xb = "[object Function]",
            Rb = "[object Map]",
            Cb = "[object Number]",
            Pb = "[object Object]",
            Lb = "[object RegExp]",
            Nb = "[object Set]",
            Mb = "[object String]",
            Db = "[object WeakMap]",
            Fb = "[object ArrayBuffer]",
            qb = "[object DataView]",
            Gb = "[object Float32Array]",
            Xb = "[object Float64Array]",
            Vb = "[object Int8Array]",
            Ub = "[object Int16Array]",
            Bb = "[object Int32Array]",
            kb = "[object Uint8Array]",
            Hb = "[object Uint8ClampedArray]",
            Wb = "[object Uint16Array]",
            zb = "[object Uint32Array]",
            ce = {};
        ce[Gb] = ce[Xb] = ce[Vb] = ce[Ub] = ce[Bb] = ce[kb] = ce[Hb] = ce[Wb] = ce[zb] = !0;
        ce[bb] = ce[Ab] = ce[Fb] = ce[Sb] = ce[qb] = ce[Ob] = ce[wb] = ce[xb] = ce[Rb] = ce[Cb] = ce[Pb] = ce[Lb] = ce[Nb] = ce[Mb] = ce[Db] = !1;

        function Kb(e) {
            return Tb(e) && Ib(e.length) && !!ce[_b(e)]
        }
        kc.exports = Kb
    });
    var zc = f((yq, Wc) => {
        function jb(e) {
            return function(t) {
                return e(t)
            }
        }
        Wc.exports = jb
    });
    var jc = f((rn, wt) => {
        var Yb = $r(),
            Kc = typeof rn == "object" && rn && !rn.nodeType && rn,
            on = Kc && typeof wt == "object" && wt && !wt.nodeType && wt,
            $b = on && on.exports === Kc,
            Si = $b && Yb.process,
            Qb = function() {
                try {
                    var e = on && on.require && on.require("util").types;
                    return e || Si && Si.binding && Si.binding("util")
                } catch {}
            }();
        wt.exports = Qb
    });
    var Kn = f((mq, Qc) => {
        var Zb = Hc(),
            Jb = zc(),
            Yc = jc(),
            $c = Yc && Yc.isTypedArray,
            eA = $c ? Jb($c) : Zb;
        Qc.exports = eA
    });
    var Oi = f((vq, Zc) => {
        var tA = Cc(),
            nA = tn(),
            rA = me(),
            iA = Hn(),
            oA = Wn(),
            aA = Kn(),
            sA = Object.prototype,
            uA = sA.hasOwnProperty;

        function cA(e, t) {
            var n = rA(e),
                r = !n && nA(e),
                i = !n && !r && iA(e),
                o = !n && !r && !i && aA(e),
                a = n || r || i || o,
                s = a ? tA(e.length, String) : [],
                u = s.length;
            for (var l in e)(t || uA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || oA(l, u))) && s.push(l);
            return s
        }
        Zc.exports = cA
    });
    var jn = f((_q, Jc) => {
        var lA = Object.prototype;

        function fA(e) {
            var t = e && e.constructor,
                n = typeof t == "function" && t.prototype || lA;
            return e === n
        }
        Jc.exports = fA
    });
    var tl = f((Iq, el) => {
        var dA = Qr(),
            pA = dA(Object.keys, Object);
        el.exports = pA
    });
    var Yn = f((Tq, nl) => {
        var gA = jn(),
            hA = tl(),
            EA = Object.prototype,
            yA = EA.hasOwnProperty;

        function mA(e) {
            if (!gA(e)) return hA(e);
            var t = [];
            for (var n in Object(e)) yA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        nl.exports = mA
    });
    var ct = f((bq, rl) => {
        var vA = Ei(),
            _A = zn();

        function IA(e) {
            return e != null && _A(e.length) && !vA(e)
        }
        rl.exports = IA
    });
    var an = f((Aq, il) => {
        var TA = Oi(),
            bA = Yn(),
            AA = ct();

        function SA(e) {
            return AA(e) ? TA(e) : bA(e)
        }
        il.exports = SA
    });
    var al = f((Sq, ol) => {
        var OA = Ti(),
            wA = Ai(),
            xA = an();

        function RA(e) {
            return OA(e, xA, wA)
        }
        ol.exports = RA
    });
    var cl = f((Oq, ul) => {
        var sl = al(),
            CA = 1,
            PA = Object.prototype,
            LA = PA.hasOwnProperty;

        function NA(e, t, n, r, i, o) {
            var a = n & CA,
                s = sl(e),
                u = s.length,
                l = sl(t),
                g = l.length;
            if (u != g && !a) return !1;
            for (var p = u; p--;) {
                var d = s[p];
                if (!(a ? d in t : LA.call(t, d))) return !1
            }
            var h = o.get(e),
                y = o.get(t);
            if (h && y) return h == t && y == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var S = a; ++p < u;) {
                d = s[p];
                var m = e[d],
                    w = t[d];
                if (r) var O = a ? r(w, m, d, t, e, o) : r(m, w, d, e, t, o);
                if (!(O === void 0 ? m === w || i(m, w, n, r, o) : O)) {
                    _ = !1;
                    break
                }
                S || (S = d == "constructor")
            }
            if (_ && !S) {
                var C = e.constructor,
                    R = t.constructor;
                C != R && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof R == "function" && R instanceof R) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        ul.exports = NA
    });
    var fl = f((wq, ll) => {
        var MA = it(),
            DA = De(),
            FA = MA(DA, "DataView");
        ll.exports = FA
    });
    var pl = f((xq, dl) => {
        var qA = it(),
            GA = De(),
            XA = qA(GA, "Promise");
        dl.exports = XA
    });
    var hl = f((Rq, gl) => {
        var VA = it(),
            UA = De(),
            BA = VA(UA, "Set");
        gl.exports = BA
    });
    var wi = f((Cq, El) => {
        var kA = it(),
            HA = De(),
            WA = kA(HA, "WeakMap");
        El.exports = WA
    });
    var $n = f((Pq, bl) => {
        var xi = fl(),
            Ri = Vn(),
            Ci = pl(),
            Pi = hl(),
            Li = wi(),
            Tl = rt(),
            xt = mi(),
            yl = "[object Map]",
            zA = "[object Object]",
            ml = "[object Promise]",
            vl = "[object Set]",
            _l = "[object WeakMap]",
            Il = "[object DataView]",
            KA = xt(xi),
            jA = xt(Ri),
            YA = xt(Ci),
            $A = xt(Pi),
            QA = xt(Li),
            lt = Tl;
        (xi && lt(new xi(new ArrayBuffer(1))) != Il || Ri && lt(new Ri) != yl || Ci && lt(Ci.resolve()) != ml || Pi && lt(new Pi) != vl || Li && lt(new Li) != _l) && (lt = function(e) {
            var t = Tl(e),
                n = t == zA ? e.constructor : void 0,
                r = n ? xt(n) : "";
            if (r) switch (r) {
                case KA:
                    return Il;
                case jA:
                    return yl;
                case YA:
                    return ml;
                case $A:
                    return vl;
                case QA:
                    return _l
            }
            return t
        });
        bl.exports = lt
    });
    var Pl = f((Lq, Cl) => {
        var Ni = vi(),
            ZA = _i(),
            JA = _c(),
            e0 = cl(),
            Al = $n(),
            Sl = me(),
            Ol = Hn(),
            t0 = Kn(),
            n0 = 1,
            wl = "[object Arguments]",
            xl = "[object Array]",
            Qn = "[object Object]",
            r0 = Object.prototype,
            Rl = r0.hasOwnProperty;

        function i0(e, t, n, r, i, o) {
            var a = Sl(e),
                s = Sl(t),
                u = a ? xl : Al(e),
                l = s ? xl : Al(t);
            u = u == wl ? Qn : u, l = l == wl ? Qn : l;
            var g = u == Qn,
                p = l == Qn,
                d = u == l;
            if (d && Ol(e)) {
                if (!Ol(t)) return !1;
                a = !0, g = !1
            }
            if (d && !g) return o || (o = new Ni), a || t0(e) ? ZA(e, t, n, r, i, o) : JA(e, t, u, n, r, i, o);
            if (!(n & n0)) {
                var h = g && Rl.call(e, "__wrapped__"),
                    y = p && Rl.call(t, "__wrapped__");
                if (h || y) {
                    var _ = h ? e.value() : e,
                        S = y ? t.value() : t;
                    return o || (o = new Ni), i(_, S, n, r, o)
                }
            }
            return d ? (o || (o = new Ni), e0(e, t, n, r, i, o)) : !1
        }
        Cl.exports = i0
    });
    var Mi = f((Nq, Ml) => {
        var o0 = Pl(),
            Ll = $e();

        function Nl(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Ll(e) && !Ll(t) ? e !== e && t !== t : o0(e, t, n, r, Nl, i)
        }
        Ml.exports = Nl
    });
    var Fl = f((Mq, Dl) => {
        var a0 = vi(),
            s0 = Mi(),
            u0 = 1,
            c0 = 2;

        function l0(e, t, n, r) {
            var i = n.length,
                o = i,
                a = !r;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = n[i];
                var u = s[0],
                    l = e[u],
                    g = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var p = new a0;
                    if (r) var d = r(l, g, u, e, t, p);
                    if (!(d === void 0 ? s0(g, l, u0 | c0, r, p) : d)) return !1
                }
            }
            return !0
        }
        Dl.exports = l0
    });
    var Di = f((Dq, ql) => {
        var f0 = ze();

        function d0(e) {
            return e === e && !f0(e)
        }
        ql.exports = d0
    });
    var Xl = f((Fq, Gl) => {
        var p0 = Di(),
            g0 = an();

        function h0(e) {
            for (var t = g0(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, p0(i)]
            }
            return t
        }
        Gl.exports = h0
    });
    var Fi = f((qq, Vl) => {
        function E0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        Vl.exports = E0
    });
    var Bl = f((Gq, Ul) => {
        var y0 = Fl(),
            m0 = Xl(),
            v0 = Fi();

        function _0(e) {
            var t = m0(e);
            return t.length == 1 && t[0][2] ? v0(t[0][0], t[0][1]) : function(n) {
                return n === e || y0(n, e, t)
            }
        }
        Ul.exports = _0
    });
    var sn = f((Xq, kl) => {
        var I0 = rt(),
            T0 = $e(),
            b0 = "[object Symbol]";

        function A0(e) {
            return typeof e == "symbol" || T0(e) && I0(e) == b0
        }
        kl.exports = A0
    });
    var Zn = f((Vq, Hl) => {
        var S0 = me(),
            O0 = sn(),
            w0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            x0 = /^\w*$/;

        function R0(e, t) {
            if (S0(e)) return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || O0(e) ? !0 : x0.test(e) || !w0.test(e) || t != null && e in Object(t)
        }
        Hl.exports = R0
    });
    var Kl = f((Uq, zl) => {
        var Wl = Un(),
            C0 = "Expected a function";

        function qi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(C0);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o, a
            };
            return n.cache = new(qi.Cache || Wl), n
        }
        qi.Cache = Wl;
        zl.exports = qi
    });
    var Yl = f((Bq, jl) => {
        var P0 = Kl(),
            L0 = 500;

        function N0(e) {
            var t = P0(e, function(r) {
                    return n.size === L0 && n.clear(), r
                }),
                n = t.cache;
            return t
        }
        jl.exports = N0
    });
    var Ql = f((kq, $l) => {
        var M0 = Yl(),
            D0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            F0 = /\\(\\)?/g,
            q0 = M0(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(D0, function(n, r, i, o) {
                    t.push(i ? o.replace(F0, "$1") : r || n)
                }), t
            });
        $l.exports = q0
    });
    var Gi = f((Hq, Zl) => {
        function G0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
        Zl.exports = G0
    });
    var of = f((Wq, rf) => {
        var Jl = mt(),
            X0 = Gi(),
            V0 = me(),
            U0 = sn(),
            B0 = 1 / 0,
            ef = Jl ? Jl.prototype : void 0,
            tf = ef ? ef.toString : void 0;

        function nf(e) {
            if (typeof e == "string") return e;
            if (V0(e)) return X0(e, nf) + "";
            if (U0(e)) return tf ? tf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -B0 ? "-0" : t
        }
        rf.exports = nf
    });
    var sf = f((zq, af) => {
        var k0 = of ();

        function H0(e) {
            return e == null ? "" : k0(e)
        }
        af.exports = H0
    });
    var un = f((Kq, uf) => {
        var W0 = me(),
            z0 = Zn(),
            K0 = Ql(),
            j0 = sf();

        function Y0(e, t) {
            return W0(e) ? e : z0(e, t) ? [e] : K0(j0(e))
        }
        uf.exports = Y0
    });
    var Rt = f((jq, cf) => {
        var $0 = sn(),
            Q0 = 1 / 0;

        function Z0(e) {
            if (typeof e == "string" || $0(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -Q0 ? "-0" : t
        }
        cf.exports = Z0
    });
    var Jn = f((Yq, lf) => {
        var J0 = un(),
            eS = Rt();

        function tS(e, t) {
            t = J0(t, e);
            for (var n = 0, r = t.length; e != null && n < r;) e = e[eS(t[n++])];
            return n && n == r ? e : void 0
        }
        lf.exports = tS
    });
    var er = f(($q, ff) => {
        var nS = Jn();

        function rS(e, t, n) {
            var r = e == null ? void 0 : nS(e, t);
            return r === void 0 ? n : r
        }
        ff.exports = rS
    });
    var pf = f((Qq, df) => {
        function iS(e, t) {
            return e != null && t in Object(e)
        }
        df.exports = iS
    });
    var hf = f((Zq, gf) => {
        var oS = un(),
            aS = tn(),
            sS = me(),
            uS = Wn(),
            cS = zn(),
            lS = Rt();

        function fS(e, t, n) {
            t = oS(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i;) {
                var a = lS(t[r]);
                if (!(o = e != null && n(e, a))) break;
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && cS(i) && uS(a, i) && (sS(e) || aS(e)))
        }
        gf.exports = fS
    });
    var yf = f((Jq, Ef) => {
        var dS = pf(),
            pS = hf();

        function gS(e, t) {
            return e != null && pS(e, t, dS)
        }
        Ef.exports = gS
    });
    var vf = f((e1, mf) => {
        var hS = Mi(),
            ES = er(),
            yS = yf(),
            mS = Zn(),
            vS = Di(),
            _S = Fi(),
            IS = Rt(),
            TS = 1,
            bS = 2;

        function AS(e, t) {
            return mS(e) && vS(t) ? _S(IS(e), t) : function(n) {
                var r = ES(n, e);
                return r === void 0 && r === t ? yS(n, e) : hS(t, r, TS | bS)
            }
        }
        mf.exports = AS
    });
    var tr = f((t1, _f) => {
        function SS(e) {
            return e
        }
        _f.exports = SS
    });
    var Xi = f((n1, If) => {
        function OS(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        If.exports = OS
    });
    var bf = f((r1, Tf) => {
        var wS = Jn();

        function xS(e) {
            return function(t) {
                return wS(t, e)
            }
        }
        Tf.exports = xS
    });
    var Sf = f((i1, Af) => {
        var RS = Xi(),
            CS = bf(),
            PS = Zn(),
            LS = Rt();

        function NS(e) {
            return PS(e) ? RS(LS(e)) : CS(e)
        }
        Af.exports = NS
    });
    var ot = f((o1, Of) => {
        var MS = Bl(),
            DS = vf(),
            FS = tr(),
            qS = me(),
            GS = Sf();

        function XS(e) {
            return typeof e == "function" ? e : e == null ? FS : typeof e == "object" ? qS(e) ? DS(e[0], e[1]) : MS(e) : GS(e)
        }
        Of.exports = XS
    });
    var Vi = f((a1, wf) => {
        var VS = ot(),
            US = ct(),
            BS = an();

        function kS(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!US(t)) {
                    var o = VS(n, 3);
                    t = BS(t), n = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        wf.exports = kS
    });
    var Ui = f((s1, xf) => {
        function HS(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        xf.exports = HS
    });
    var Cf = f((u1, Rf) => {
        var WS = /\s/;

        function zS(e) {
            for (var t = e.length; t-- && WS.test(e.charAt(t)););
            return t
        }
        Rf.exports = zS
    });
    var Lf = f((c1, Pf) => {
        var KS = Cf(),
            jS = /^\s+/;

        function YS(e) {
            return e && e.slice(0, KS(e) + 1).replace(jS, "")
        }
        Pf.exports = YS
    });
    var nr = f((l1, Df) => {
        var $S = Lf(),
            Nf = ze(),
            QS = sn(),
            Mf = 0 / 0,
            ZS = /^[-+]0x[0-9a-f]+$/i,
            JS = /^0b[01]+$/i,
            eO = /^0o[0-7]+$/i,
            tO = parseInt;

        function nO(e) {
            if (typeof e == "number") return e;
            if (QS(e)) return Mf;
            if (Nf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Nf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = $S(e);
            var n = JS.test(e);
            return n || eO.test(e) ? tO(e.slice(2), n ? 2 : 8) : ZS.test(e) ? Mf : +e
        }
        Df.exports = nO
    });
    var Gf = f((f1, qf) => {
        var rO = nr(),
            Ff = 1 / 0,
            iO = 17976931348623157e292;

        function oO(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = rO(e), e === Ff || e === -Ff) {
                var t = e < 0 ? -1 : 1;
                return t * iO
            }
            return e === e ? e : 0
        }
        qf.exports = oO
    });
    var Bi = f((d1, Xf) => {
        var aO = Gf();

        function sO(e) {
            var t = aO(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Xf.exports = sO
    });
    var Uf = f((p1, Vf) => {
        var uO = Ui(),
            cO = ot(),
            lO = Bi(),
            fO = Math.max;

        function dO(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = n == null ? 0 : lO(n);
            return i < 0 && (i = fO(r + i, 0)), uO(e, cO(t, 3), i)
        }
        Vf.exports = dO
    });
    var ki = f((g1, Bf) => {
        var pO = Vi(),
            gO = Uf(),
            hO = pO(gO);
        Bf.exports = hO
    });
    var Wf = {};
    Oe(Wf, {
        ELEMENT_MATCHES: () => EO,
        FLEX_PREFIXED: () => Hi,
        IS_BROWSER_ENV: () => qe,
        TRANSFORM_PREFIXED: () => at,
        TRANSFORM_STYLE_PREFIXED: () => ir,
        withBrowser: () => rr
    });
    var Hf, qe, rr, EO, Hi, at, kf, ir, or = le(() => {
        "use strict";
        Hf = ie(ki()), qe = typeof window < "u", rr = (e, t) => qe ? e() : t, EO = rr(() => (0, Hf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Hi = rr(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                n = "";
            try {
                let {
                    length: r
                } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return n
            } catch {
                return n
            }
        }, "flex"), at = rr(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    n = "Transform",
                    {
                        length: r
                    } = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), kf = at.split("transform")[0], ir = kf ? kf + "TransformStyle" : "transformStyle"
    });
    var Wi = f((h1, $f) => {
        var yO = 4,
            mO = .001,
            vO = 1e-7,
            _O = 10,
            cn = 11,
            ar = 1 / (cn - 1),
            IO = typeof Float32Array == "function";

        function zf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Kf(e, t) {
            return 3 * t - 6 * e
        }

        function jf(e) {
            return 3 * e
        }

        function sr(e, t, n) {
            return ((zf(t, n) * e + Kf(t, n)) * e + jf(t)) * e
        }

        function Yf(e, t, n) {
            return 3 * zf(t, n) * e * e + 2 * Kf(t, n) * e + jf(t)
        }

        function TO(e, t, n, r, i) {
            var o, a, s = 0;
            do a = t + (n - t) / 2, o = sr(a, r, i) - e, o > 0 ? n = a : t = a; while (Math.abs(o) > vO && ++s < _O);
            return a
        }

        function bO(e, t, n, r) {
            for (var i = 0; i < yO; ++i) {
                var o = Yf(t, n, r);
                if (o === 0) return t;
                var a = sr(t, n, r) - e;
                t -= a / o
            }
            return t
        }
        $f.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = IO ? new Float32Array(cn) : new Array(cn);
            if (t !== n || r !== i)
                for (var a = 0; a < cn; ++a) o[a] = sr(a * ar, t, r);

            function s(u) {
                for (var l = 0, g = 1, p = cn - 1; g !== p && o[g] <= u; ++g) l += ar;
                --g;
                var d = (u - o[g]) / (o[g + 1] - o[g]),
                    h = l + d * ar,
                    y = Yf(h, t, r);
                return y >= mO ? bO(u, h, t, r) : y === 0 ? h : TO(u, l, l + ar, t, r)
            }
            return function(l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : sr(s(l), n, i)
            }
        }
    });
    var fn = {};
    Oe(fn, {
        bounce: () => ow,
        bouncePast: () => aw,
        ease: () => AO,
        easeIn: () => SO,
        easeInOut: () => wO,
        easeOut: () => OO,
        inBack: () => $O,
        inCirc: () => zO,
        inCubic: () => PO,
        inElastic: () => JO,
        inExpo: () => kO,
        inOutBack: () => ZO,
        inOutCirc: () => jO,
        inOutCubic: () => NO,
        inOutElastic: () => tw,
        inOutExpo: () => WO,
        inOutQuad: () => CO,
        inOutQuart: () => FO,
        inOutQuint: () => XO,
        inOutSine: () => BO,
        inQuad: () => xO,
        inQuart: () => MO,
        inQuint: () => qO,
        inSine: () => VO,
        outBack: () => QO,
        outBounce: () => YO,
        outCirc: () => KO,
        outCubic: () => LO,
        outElastic: () => ew,
        outExpo: () => HO,
        outQuad: () => RO,
        outQuart: () => DO,
        outQuint: () => GO,
        outSine: () => UO,
        swingFrom: () => rw,
        swingFromTo: () => nw,
        swingTo: () => iw
    });

    function xO(e) {
        return Math.pow(e, 2)
    }

    function RO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function CO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function PO(e) {
        return Math.pow(e, 3)
    }

    function LO(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function NO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function MO(e) {
        return Math.pow(e, 4)
    }

    function DO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function FO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function qO(e) {
        return Math.pow(e, 5)
    }

    function GO(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function XO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function VO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function UO(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function BO(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function kO(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function HO(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function WO(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function zO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function KO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function jO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function YO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function $O(e) {
        let t = Qe;
        return e * e * ((t + 1) * e - t)
    }

    function QO(e) {
        let t = Qe;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function ZO(e) {
        let t = Qe;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function JO(e) {
        let t = Qe,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }

    function ew(e) {
        let t = Qe,
            n = 0,
            r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }

    function tw(e) {
        let t = Qe,
            n = 0,
            r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }

    function nw(e) {
        let t = Qe;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function rw(e) {
        let t = Qe;
        return e * e * ((t + 1) * e - t)
    }

    function iw(e) {
        let t = Qe;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function ow(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function aw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var ln, Qe, AO, SO, OO, wO, zi = le(() => {
        "use strict";
        ln = ie(Wi()), Qe = 1.70158, AO = (0, ln.default)(.25, .1, .25, 1), SO = (0, ln.default)(.42, 0, 1, 1), OO = (0, ln.default)(0, 0, .58, 1), wO = (0, ln.default)(.42, 0, .58, 1)
    });
    var Zf = {};
    Oe(Zf, {
        applyEasing: () => uw,
        createBezierEasing: () => sw,
        optimizeFloat: () => dn
    });

    function dn(e, t = 5, n = 10) {
        let r = Math.pow(n, t),
            i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function sw(e) {
        return (0, Qf.default)(...e)
    }

    function uw(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : dn(n ? t > 0 ? n(t) : t : t > 0 && e && fn[e] ? fn[e](t) : t)
    }
    var Qf, Ki = le(() => {
        "use strict";
        zi();
        Qf = ie(Wi())
    });
    var td = {};
    Oe(td, {
        createElementState: () => ed,
        ixElements: () => Tw,
        mergeActionState: () => ji
    });

    function ed(e, t, n, r, i) {
        let o = n === cw ? (0, Ct.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Ct.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }

    function ji(e, t, n, r, i) {
        let o = Aw(i);
        return (0, Ct.mergeIn)(e, [t, Iw, n], r, o)
    }

    function Aw(e) {
        let {
            config: t
        } = e;
        return bw.reduce((n, r) => {
            let i = r[0],
                o = r[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (n[o] = s), n
        }, {})
    }
    var Ct, y1, cw, m1, lw, fw, dw, pw, gw, hw, Ew, yw, mw, vw, _w, Jf, Iw, Tw, bw, nd = le(() => {
        "use strict";
        Ct = ie(It());
        we();
        ({
            HTML_ELEMENT: y1,
            PLAIN_OBJECT: cw,
            ABSTRACT_NODE: m1,
            CONFIG_X_VALUE: lw,
            CONFIG_Y_VALUE: fw,
            CONFIG_Z_VALUE: dw,
            CONFIG_VALUE: pw,
            CONFIG_X_UNIT: gw,
            CONFIG_Y_UNIT: hw,
            CONFIG_Z_UNIT: Ew,
            CONFIG_UNIT: yw
        } = ve), {
            IX2_SESSION_STOPPED: mw,
            IX2_INSTANCE_ADDED: vw,
            IX2_ELEMENT_STATE_CHANGED: _w
        } = ye, Jf = {}, Iw = "refState", Tw = (e = Jf, t = {}) => {
            switch (t.type) {
                case mw:
                    return Jf;
                case vw:
                    {
                        let {
                            elementId: n,
                            element: r,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, Ct.getIn)(u, [n, r]) !== r && (u = ed(u, r, a, n, o)),
                        ji(u, n, s, i, o)
                    }
                case _w:
                    {
                        let {
                            elementId: n,
                            actionTypeId: r,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return ji(e, n, r, i, o)
                    }
                default:
                    return e
            }
        };
        bw = [
            [lw, gw],
            [fw, hw],
            [dw, Ew],
            [pw, yw]
        ]
    });
    var rd = f(Yi => {
        "use strict";
        Object.defineProperty(Yi, "__esModule", {
            value: !0
        });

        function Sw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        Sw(Yi, {
            clearPlugin: function() {
                return Lw
            },
            createPluginInstance: function() {
                return Cw
            },
            getPluginConfig: function() {
                return Ow
            },
            getPluginDestination: function() {
                return Rw
            },
            getPluginDuration: function() {
                return ww
            },
            getPluginOrigin: function() {
                return xw
            },
            renderPlugin: function() {
                return Pw
            }
        });
        var Ow = e => e.value,
            ww = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let n = parseFloat(e.getAttribute("data-duration"));
                return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            xw = e => e || {
                value: 0
            },
            Rw = e => ({
                value: e.value
            }),
            Cw = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            Pw = (e, t, n) => {
                if (!e) return;
                let r = t[n.actionTypeId].value / 100;
                e.goToFrame(e.frames * r)
            },
            Lw = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var od = f($i => {
        "use strict";
        Object.defineProperty($i, "__esModule", {
            value: !0
        });

        function Nw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        Nw($i, {
            clearPlugin: function() {
                return kw
            },
            createPluginInstance: function() {
                return Uw
            },
            getPluginConfig: function() {
                return qw
            },
            getPluginDestination: function() {
                return Vw
            },
            getPluginDuration: function() {
                return Gw
            },
            getPluginOrigin: function() {
                return Xw
            },
            renderPlugin: function() {
                return Bw
            }
        });
        var Mw = e => document.querySelector(`[data-w-id="${e}"]`),
            Dw = () => window.Webflow.require("spline"),
            Fw = (e, t) => e.filter(n => !t.includes(n)),
            qw = (e, t) => e.value[t],
            Gw = () => null,
            id = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            Xw = (e, t) => {
                let n = t.config.value,
                    r = Object.keys(n);
                if (e) {
                    let o = Object.keys(e),
                        a = Fw(r, o);
                    return a.length ? a.reduce((u, l) => (u[l] = id[l], u), e) : e
                }
                return r.reduce((o, a) => (o[a] = id[a], o), {})
            },
            Vw = e => e.value,
            Uw = (e, t) => {
                let n = t ? .config ? .target ? .pluginElement;
                return n ? Mw(n) : null
            },
            Bw = (e, t, n) => {
                let r = Dw(),
                    i = r.getInstance(e),
                    o = n.config.target.objectId,
                    a = s => {
                        if (!s) throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && s.findObjectById(o);
                        if (!u) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                    };
                i ? a(i.spline) : r.setLoadHandler(e, a)
            },
            kw = () => null
    });
    var ad = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });

        function Hw(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        Hw(Ji, {
            clearPlugin: function() {
                return Jw
            },
            createPluginInstance: function() {
                return Qw
            },
            getPluginConfig: function() {
                return Kw
            },
            getPluginDestination: function() {
                return $w
            },
            getPluginDuration: function() {
                return jw
            },
            getPluginOrigin: function() {
                return Yw
            },
            renderPlugin: function() {
                return Zw
            }
        });
        var Qi = "--wf-rive-fit",
            Zi = "--wf-rive-alignment",
            Ww = e => document.querySelector(`[data-w-id="${e}"]`),
            zw = () => window.Webflow.require("rive"),
            Kw = (e, t) => e.value.inputs[t],
            jw = () => null,
            Yw = (e, t) => {
                if (e) return e;
                let n = {},
                    {
                        inputs: r = {}
                    } = t.config.value;
                for (let i in r) r[i] == null && (n[i] = 0);
                return n
            },
            $w = e => e.value.inputs ? ? {},
            Qw = (e, t) => {
                if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                let r = t ? .config ? .target ? .pluginElement;
                return r ? Ww(r) : null
            },
            Zw = (e, {
                PLUGIN_RIVE: t
            }, n) => {
                let r = zw(),
                    i = r.getInstance(e),
                    o = r.rive.StateMachineInputType,
                    {
                        name: a,
                        inputs: s = {}
                    } = n.config.value || {};

                function u(l) {
                    if (l.loaded) g();
                    else {
                        let p = () => {
                            g(), l ? .off("load", p)
                        };
                        l ? .on("load", p)
                    }

                    function g() {
                        let p = l.stateMachineInputs(a);
                        if (p != null) {
                            if (l.isPlaying || l.play(a, !1), Qi in s || Zi in s) {
                                let d = l.layout,
                                    h = s[Qi] ? ? d.fit,
                                    y = s[Zi] ? ? d.alignment;
                                (h !== d.fit || y !== d.alignment) && (l.layout = d.copyWith({
                                    fit: h,
                                    alignment: y
                                }))
                            }
                            for (let d in s) {
                                if (d === Qi || d === Zi) continue;
                                let h = p.find(y => y.name === d);
                                if (h != null) switch (h.type) {
                                    case o.Boolean:
                                        {
                                            if (s[d] != null) {
                                                let y = !!s[d];
                                                h.value = y
                                            }
                                            break
                                        }
                                    case o.Number:
                                        {
                                            let y = t[d];y != null && (h.value = y);
                                            break
                                        }
                                    case o.Trigger:
                                        {
                                            s[d] && h.fire();
                                            break
                                        }
                                }
                            }
                        }
                    }
                }
                i ? .rive ? u(i.rive) : r.setLoadHandler(e, u)
            },
            Jw = (e, t) => null
    });
    var to = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });
        Object.defineProperty(eo, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return ex
            }
        });
        var sd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function ex(e) {
            let t, n, r, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof sd[o] == "string" ? sd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), n = parseInt(u[1] + u[1], 16), r = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), n = parseInt(u.substring(2, 4), 16), r = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * g,
                    h = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    y = p - d / 2,
                    _, S, m;
                l >= 0 && l < 60 ? (_ = d, S = h, m = 0) : l >= 60 && l < 120 ? (_ = h, S = d, m = 0) : l >= 120 && l < 180 ? (_ = 0, S = d, m = h) : l >= 180 && l < 240 ? (_ = 0, S = h, m = d) : l >= 240 && l < 300 ? (_ = h, S = 0, m = d) : (_ = d, S = 0, m = h), t = Math.round((_ + y) * 255), n = Math.round((S + y) * 255), r = Math.round((m + y) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * p - 1)) * g,
                    h = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    y = p - d / 2,
                    _, S, m;
                l >= 0 && l < 60 ? (_ = d, S = h, m = 0) : l >= 60 && l < 120 ? (_ = h, S = d, m = 0) : l >= 120 && l < 180 ? (_ = 0, S = d, m = h) : l >= 180 && l < 240 ? (_ = 0, S = h, m = d) : l >= 240 && l < 300 ? (_ = h, S = 0, m = d) : (_ = d, S = 0, m = h), t = Math.round((_ + y) * 255), n = Math.round((S + y) * 255), r = Math.round((m + y) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    });
    var ud = f(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });

        function tx(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        tx(no, {
            clearPlugin: function() {
                return cx
            },
            createPluginInstance: function() {
                return sx
            },
            getPluginConfig: function() {
                return rx
            },
            getPluginDestination: function() {
                return ax
            },
            getPluginDuration: function() {
                return ix
            },
            getPluginOrigin: function() {
                return ox
            },
            renderPlugin: function() {
                return ux
            }
        });
        var nx = to(),
            rx = (e, t) => e.value[t],
            ix = () => null,
            ox = (e, t) => {
                if (e) return e;
                let n = t.config.value,
                    r = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(r);
                if (n.size != null) return {
                    size: parseInt(i, 10)
                };
                if (n.red != null && n.green != null && n.blue != null) return (0, nx.normalizeColor)(i)
            },
            ax = e => e.value,
            sx = () => null,
            ux = (e, t, n) => {
                let r = n.config.target.objectId,
                    i = n.config.value.unit,
                    {
                        PLUGIN_VARIABLE: o
                    } = t,
                    {
                        size: a,
                        red: s,
                        green: u,
                        blue: l,
                        alpha: g
                    } = o,
                    p;
                a != null && (p = a + i), s != null && l != null && u != null && g != null && (p = `rgba(${s}, ${u}, ${l}, ${g})`), p != null && document.documentElement.style.setProperty(r, p)
            },
            cx = (e, t) => {
                let n = t.config.target.objectId;
                document.documentElement.style.removeProperty(n)
            }
    });
    var ld = f(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        Object.defineProperty(ro, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return gx
            }
        });
        var ur = (we(), Ue(ps)),
            lx = cr(rd()),
            fx = cr(od()),
            dx = cr(ad()),
            px = cr(ud());

        function cd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (cd = function(r) {
                return r ? n : t
            })(e)
        }

        function cr(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = cd(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
        var gx = new Map([
            [ur.ActionTypeConsts.PLUGIN_LOTTIE, { ...lx
            }],
            [ur.ActionTypeConsts.PLUGIN_SPLINE, { ...fx
            }],
            [ur.ActionTypeConsts.PLUGIN_RIVE, { ...dx
            }],
            [ur.ActionTypeConsts.PLUGIN_VARIABLE, { ...px
            }]
        ])
    });
    var fd = {};
    Oe(fd, {
        clearPlugin: () => co,
        createPluginInstance: () => Ex,
        getPluginConfig: () => oo,
        getPluginDestination: () => so,
        getPluginDuration: () => hx,
        getPluginOrigin: () => ao,
        isPluginType: () => ft,
        renderPlugin: () => uo
    });

    function ft(e) {
        return io.pluginMethodMap.has(e)
    }
    var io, dt, oo, ao, hx, so, Ex, uo, co, lo = le(() => {
        "use strict";
        or();
        io = ie(ld());
        dt = e => t => {
            if (!qe) return () => null;
            let n = io.pluginMethodMap.get(t);
            if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }, oo = dt("getPluginConfig"), ao = dt("getPluginOrigin"), hx = dt("getPluginDuration"), so = dt("getPluginDestination"), Ex = dt("createPluginInstance"), uo = dt("renderPlugin"), co = dt("clearPlugin")
    });
    var pd = f((O1, dd) => {
        function yx(e, t) {
            return e == null || e !== e ? t : e
        }
        dd.exports = yx
    });
    var hd = f((w1, gd) => {
        function mx(e, t, n, r) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
            return n
        }
        gd.exports = mx
    });
    var yd = f((x1, Ed) => {
        function vx(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (n(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Ed.exports = vx
    });
    var vd = f((R1, md) => {
        var _x = yd(),
            Ix = _x();
        md.exports = Ix
    });
    var fo = f((C1, _d) => {
        var Tx = vd(),
            bx = an();

        function Ax(e, t) {
            return e && Tx(e, t, bx)
        }
        _d.exports = Ax
    });
    var Td = f((P1, Id) => {
        var Sx = ct();

        function Ox(e, t) {
            return function(n, r) {
                if (n == null) return n;
                if (!Sx(n)) return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Object(n);
                    (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }
        Id.exports = Ox
    });
    var po = f((L1, bd) => {
        var wx = fo(),
            xx = Td(),
            Rx = xx(wx);
        bd.exports = Rx
    });
    var Sd = f((N1, Ad) => {
        function Cx(e, t, n, r, i) {
            return i(e, function(o, a, s) {
                n = r ? (r = !1, o) : t(n, o, a, s)
            }), n
        }
        Ad.exports = Cx
    });
    var wd = f((M1, Od) => {
        var Px = hd(),
            Lx = po(),
            Nx = ot(),
            Mx = Sd(),
            Dx = me();

        function Fx(e, t, n) {
            var r = Dx(e) ? Px : Mx,
                i = arguments.length < 3;
            return r(e, Nx(t, 4), n, i, Lx)
        }
        Od.exports = Fx
    });
    var Rd = f((D1, xd) => {
        var qx = Ui(),
            Gx = ot(),
            Xx = Bi(),
            Vx = Math.max,
            Ux = Math.min;

        function Bx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r) return -1;
            var i = r - 1;
            return n !== void 0 && (i = Xx(n), i = n < 0 ? Vx(r + i, 0) : Ux(i, r - 1)), qx(e, Gx(t, 3), i, !0)
        }
        xd.exports = Bx
    });
    var Pd = f((F1, Cd) => {
        var kx = Vi(),
            Hx = Rd(),
            Wx = kx(Hx);
        Cd.exports = Wx
    });

    function Ld(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function zx(e, t) {
        if (Ld(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !Ld(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    var go, Nd = le(() => {
        "use strict";
        go = zx
    });
    var Qd = {};
    Oe(Qd, {
        cleanupHTMLElement: () => kR,
        clearAllStyles: () => BR,
        clearObjectCache: () => cR,
        getActionListProgress: () => WR,
        getAffectedElements: () => vo,
        getComputedStyle: () => yR,
        getDestinationValues: () => AR,
        getElementId: () => pR,
        getInstanceId: () => fR,
        getInstanceOrigin: () => _R,
        getItemConfigByKey: () => bR,
        getMaxDurationItemIndex: () => $d,
        getNamespacedParameterId: () => jR,
        getRenderType: () => Kd,
        getStyleProp: () => SR,
        mediaQueriesEqual: () => $R,
        observeStore: () => ER,
        reduceListToGroup: () => zR,
        reifyState: () => gR,
        renderHTMLElement: () => OR,
        shallowEqual: () => go,
        shouldAllowMediaQuery: () => YR,
        shouldNamespaceEventParameter: () => KR,
        stringifyTarget: () => QR
    });

    function cR() {
        lr.clear()
    }

    function fR() {
        return "i" + lR++
    }

    function pR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t) return r.id
        }
        return "e" + dR++
    }

    function gR({
        events: e,
        actionLists: t,
        site: n
    } = {}) {
        let r = (0, gr.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = n && n.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function ER({
        store: e,
        select: t,
        onChange: n,
        comparator: r = hR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            r(l, s) || (s = l, n(s, e))
        }
        return a
    }

    function Fd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function vo({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: r,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((N, T) => N.concat(vo({
            config: {
                target: T
            },
            event: t,
            eventTarget: n,
            elementRoot: r,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: g,
            matchSelector: p,
            elementContains: d,
            isSiblingNode: h
        } = i, {
            target: y
        } = e;
        if (!y) return [];
        let {
            id: _,
            objectId: S,
            selector: m,
            selectorGuids: w,
            appliesTo: O,
            useEventTarget: C
        } = Fd(y);
        if (S) return [lr.has(S) ? lr.get(S) : lr.set(S, {}).get(S)];
        if (O === di.PAGE) {
            let N = a(_);
            return N ? [N] : []
        }
        let x = (t ? .action ? .config ? .affectedElements ? ? {})[_ || m] || {},
            q = !!(x.id || x.selector),
            V, k, W, Y = t && s(Fd(t.target));
        if (q ? (V = x.limitAffectedElements, k = Y, W = s(x)) : k = W = s({
                id: _,
                selector: m,
                selectorGuids: w
            }), t && C) {
            let N = n && (W || C === !0) ? [n] : u(Y);
            if (W) {
                if (C === aR) return u(W).filter(T => N.some(P => d(T, P)));
                if (C === Md) return u(W).filter(T => N.some(P => d(P, T)));
                if (C === Dd) return u(W).filter(T => N.some(P => h(P, T)))
            }
            return N
        }
        return k == null || W == null ? [] : qe && r ? u(W).filter(N => r.contains(N)) : V === Md ? u(k, W) : V === oR ? l(u(k)).filter(p(W)) : V === Dd ? g(u(k)).filter(p(W)) : u(W)
    }

    function yR({
        element: e,
        actionItem: t
    }) {
        if (!qe) return {};
        let {
            actionTypeId: n
        } = t;
        switch (n) {
            case Dt:
            case Ft:
            case qt:
            case Gt:
            case Er:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function _R(e, t = {}, n = {}, r, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = r;
        if (ft(a)) return ao(a)(t[a], r);
        switch (r.actionTypeId) {
            case Lt:
            case Nt:
            case Mt:
            case En:
                return t[r.actionTypeId] || _o[r.actionTypeId];
            case yn:
                return mR(t[r.actionTypeId], r.config.filters);
            case mn:
                return vR(t[r.actionTypeId], r.config.fontVariations);
            case Hd:
                return {
                    value: (0, Ze.default)(parseFloat(o(e, dr)), 1)
                };
            case Dt:
                {
                    let s = o(e, Ke),
                        u = o(e, je),
                        l, g;
                    return r.config.widthUnit === st ? l = qd.test(s) ? parseFloat(s) : parseFloat(n.width) : l = (0, Ze.default)(parseFloat(s), parseFloat(n.width)),
                    r.config.heightUnit === st ? g = qd.test(u) ? parseFloat(u) : parseFloat(n.height) : g = (0, Ze.default)(parseFloat(u), parseFloat(n.height)),
                    {
                        widthValue: l,
                        heightValue: g
                    }
                }
            case Ft:
            case qt:
            case Gt:
                return XR({
                    element: e,
                    actionTypeId: r.actionTypeId,
                    computedStyle: n,
                    getStyle: o
                });
            case Er:
                return {
                    value: (0, Ze.default)(o(e, pr), n.display)
                };
            case uR:
                return t[r.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function AR({
        element: e,
        actionItem: t,
        elementApi: n
    }) {
        if (ft(t.actionTypeId)) return so(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Lt:
            case Nt:
            case Mt:
            case En:
                {
                    let {
                        xValue: r,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: r,
                        yValue: i,
                        zValue: o
                    }
                }
            case Dt:
                {
                    let {
                        getStyle: r,
                        setStyle: i,
                        getProperty: o
                    } = n,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!qe) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (a === st) {
                        let g = r(e, Ke);
                        i(e, Ke, ""), u = o(e, "offsetWidth"), i(e, Ke, g)
                    }
                    if (s === st) {
                        let g = r(e, je);
                        i(e, je, ""), l = o(e, "offsetHeight"), i(e, je, g)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case Ft:
            case qt:
            case Gt:
                {
                    let {
                        rValue: r,
                        gValue: i,
                        bValue: o,
                        aValue: a,
                        globalSwatchId: s
                    } = t.config;
                    if (s && s.startsWith("--")) {
                        let {
                            getStyle: u
                        } = n, l = u(e, s), g = (0, Vd.normalizeColor)(l);
                        return {
                            rValue: g.red,
                            gValue: g.green,
                            bValue: g.blue,
                            aValue: g.alpha
                        }
                    }
                    return {
                        rValue: r,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case yn:
                return t.config.filters.reduce(IR, {});
            case mn:
                return t.config.fontVariations.reduce(TR, {});
            default:
                {
                    let {
                        value: r
                    } = t.config;
                    return {
                        value: r
                    }
                }
        }
    }

    function Kd(e) {
        if (/^TRANSFORM_/.test(e)) return Bd;
        if (/^STYLE_/.test(e)) return yo;
        if (/^GENERAL_/.test(e)) return Eo;
        if (/^PLUGIN_/.test(e)) return kd
    }

    function SR(e, t) {
        return e === yo ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function OR(e, t, n, r, i, o, a, s, u) {
        switch (s) {
            case Bd:
                return PR(e, t, n, i, a);
            case yo:
                return VR(e, t, n, i, o, a);
            case Eo:
                return UR(e, i, a);
            case kd:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (ft(l)) return uo(l)(u, t, i)
                }
        }
    }

    function PR(e, t, n, r, i) {
        let o = CR.map(s => {
                let u = _o[s],
                    {
                        xValue: l = u.xValue,
                        yValue: g = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: d = "",
                        yUnit: h = "",
                        zUnit: y = ""
                    } = t[s] || {};
                switch (s) {
                    case Lt:
                        return `${Yx}(${l}${d}, ${g}${h}, ${p}${y})`;
                    case Nt:
                        return `${$x}(${l}${d}, ${g}${h}, ${p}${y})`;
                    case Mt:
                        return `${Qx}(${l}${d}) ${Zx}(${g}${h}) ${Jx}(${p}${y})`;
                    case En:
                        return `${eR}(${l}${d}, ${g}${h})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        pt(e, at, i), a(e, at, o), MR(r, n) && a(e, ir, tR)
    }

    function LR(e, t, n, r) {
        let i = (0, gr.default)(t, (a, s, u) => `${a} ${u}(${s}${RR(u,n)})`, ""),
            {
                setStyle: o
            } = r;
        pt(e, pn, r), o(e, pn, i)
    }

    function NR(e, t, n, r) {
        let i = (0, gr.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = r;
        pt(e, gn, r), o(e, gn, i)
    }

    function MR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: n,
        zValue: r
    }) {
        return e === Lt && r !== void 0 || e === Nt && r !== void 0 || e === Mt && (t !== void 0 || n !== void 0)
    }

    function GR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }

    function XR({
        element: e,
        actionTypeId: t,
        computedStyle: n,
        getStyle: r
    }) {
        let i = mo[t],
            o = r(e, i),
            a = FR.test(o) ? o : n[i],
            s = GR(qR, a).split(hn);
        return {
            rValue: (0, Ze.default)(parseInt(s[0], 10), 255),
            gValue: (0, Ze.default)(parseInt(s[1], 10), 255),
            bValue: (0, Ze.default)(parseInt(s[2], 10), 255),
            aValue: (0, Ze.default)(parseFloat(s[3]), 1)
        }
    }

    function VR(e, t, n, r, i, o) {
        let {
            setStyle: a
        } = o;
        switch (r.actionTypeId) {
            case Dt:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = r.config,
                    {
                        widthValue: l,
                        heightValue: g
                    } = n;l !== void 0 && (s === st && (s = "px"), pt(e, Ke, o), a(e, Ke, l + s)),
                    g !== void 0 && (u === st && (u = "px"), pt(e, je, o), a(e, je, g + u));
                    break
                }
            case yn:
                {
                    LR(e, n, r.config, o);
                    break
                }
            case mn:
                {
                    NR(e, n, r.config, o);
                    break
                }
            case Ft:
            case qt:
            case Gt:
                {
                    let s = mo[r.actionTypeId],
                        u = Math.round(n.rValue),
                        l = Math.round(n.gValue),
                        g = Math.round(n.bValue),
                        p = n.aValue;pt(e, s, o),
                    a(e, s, p >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = r.config;pt(e, i, o),
                    a(e, i, n.value + s);
                    break
                }
        }
    }

    function UR(e, t, n) {
        let {
            setStyle: r
        } = n;
        switch (t.actionTypeId) {
            case Er:
                {
                    let {
                        value: i
                    } = t.config;i === nR && qe ? r(e, pr, Hi) : r(e, pr, i);
                    return
                }
        }
    }

    function pt(e, t, n) {
        if (!qe) return;
        let r = zd[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, a = i(e, Pt);
        if (!a) {
            o(e, Pt, r);
            return
        }
        let s = a.split(hn).map(Wd);
        s.indexOf(r) === -1 && o(e, Pt, s.concat(r).join(hn))
    }

    function jd(e, t, n) {
        if (!qe) return;
        let r = zd[t];
        if (!r) return;
        let {
            getStyle: i,
            setStyle: o
        } = n, a = i(e, Pt);
        !a || a.indexOf(r) === -1 || o(e, Pt, a.split(hn).map(Wd).filter(s => s !== r).join(hn))
    }

    function BR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: n
        } = e.getState(), {
            events: r = {},
            actionLists: i = {}
        } = n;
        Object.keys(r).forEach(o => {
            let a = r[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                l = i[u];
            l && Gd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Gd({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Gd({
        actionList: e = {},
        event: t,
        elementApi: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e;
        r && r.forEach(o => {
            Xd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                Xd({
                    actionGroup: s,
                    event: t,
                    elementApi: n
                })
            })
        })
    }

    function Xd({
        actionGroup: e,
        event: t,
        elementApi: n
    }) {
        let {
            actionItems: r
        } = e;
        r.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            ft(o) ? s = u => co(o)(u, i) : s = Yd({
                effect: HR,
                actionTypeId: o,
                elementApi: n
            }), vo({
                config: a,
                event: t,
                elementApi: n
            }).forEach(s)
        })
    }

    function kR(e, t, n) {
        let {
            setStyle: r,
            getStyle: i
        } = n, {
            actionTypeId: o
        } = t;
        if (o === Dt) {
            let {
                config: a
            } = t;
            a.widthUnit === st && r(e, Ke, ""), a.heightUnit === st && r(e, je, "")
        }
        i(e, Pt) && Yd({
            effect: jd,
            actionTypeId: o,
            elementApi: n
        })(e)
    }

    function HR(e, t, n) {
        let {
            setStyle: r
        } = n;
        jd(e, t, n), r(e, t, ""), t === at && r(e, ir, "")
    }

    function $d(e) {
        let t = 0,
            n = 0;
        return e.forEach((r, i) => {
            let {
                config: o
            } = r, a = o.delay + o.duration;
            a >= t && (t = a, n = i)
        }), n
    }

    function WR(e, t) {
        let {
            actionItemGroups: n,
            useFirstGroupAsInitialState: r
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return n.forEach((u, l) => {
            if (r && l === 0) return;
            let {
                actionItems: g
            } = u, p = g[$d(g)], {
                config: d,
                actionTypeId: h
            } = p;
            i.id === p.id && (s = a + o);
            let y = Kd(h) === Eo ? 0 : d.duration;
            a += d.delay + y
        }), a > 0 ? dn(s / a) : 0
    }

    function zR({
        actionList: e,
        actionItemId: t,
        rawData: n
    }) {
        let {
            actionItemGroups: r,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, hr.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return r && r.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: l
            }) => l.some(a))
        }), (0, hr.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function KR(e, {
        basedOn: t
    }) {
        return e === Fe.SCROLLING_IN_VIEW && (t === We.ELEMENT || t == null) || e === Fe.MOUSE_MOVE && t === We.ELEMENT
    }

    function jR(e, t) {
        return e + sR + t
    }

    function YR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function $R(e, t) {
        return go(e && e.sort(), t && t.sort())
    }

    function QR(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + ho + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: n = "",
            useEventTarget: r = ""
        } = e;
        return t + ho + n + ho + r
    }
    var Ze, gr, fr, hr, Vd, Kx, jx, Yx, $x, Qx, Zx, Jx, eR, tR, nR, dr, pn, gn, Ke, je, Ud, rR, iR, Md, oR, Dd, aR, pr, Pt, st, hn, sR, ho, Bd, Eo, yo, kd, Lt, Nt, Mt, En, Hd, yn, mn, Dt, Ft, qt, Gt, Er, uR, Wd, mo, zd, lr, lR, dR, hR, qd, mR, vR, IR, TR, bR, _o, wR, xR, RR, CR, DR, FR, qR, Yd, Zd = le(() => {
        "use strict";
        Ze = ie(pd()), gr = ie(wd()), fr = ie(Pd()), hr = ie(It());
        we();
        Nd();
        Ki();
        Vd = ie(to());
        lo();
        or();
        ({
            BACKGROUND: Kx,
            TRANSFORM: jx,
            TRANSLATE_3D: Yx,
            SCALE_3D: $x,
            ROTATE_X: Qx,
            ROTATE_Y: Zx,
            ROTATE_Z: Jx,
            SKEW: eR,
            PRESERVE_3D: tR,
            FLEX: nR,
            OPACITY: dr,
            FILTER: pn,
            FONT_VARIATION_SETTINGS: gn,
            WIDTH: Ke,
            HEIGHT: je,
            BACKGROUND_COLOR: Ud,
            BORDER_COLOR: rR,
            COLOR: iR,
            CHILDREN: Md,
            IMMEDIATE_CHILDREN: oR,
            SIBLINGS: Dd,
            PARENT: aR,
            DISPLAY: pr,
            WILL_CHANGE: Pt,
            AUTO: st,
            COMMA_DELIMITER: hn,
            COLON_DELIMITER: sR,
            BAR_DELIMITER: ho,
            RENDER_TRANSFORM: Bd,
            RENDER_GENERAL: Eo,
            RENDER_STYLE: yo,
            RENDER_PLUGIN: kd
        } = ve), {
            TRANSFORM_MOVE: Lt,
            TRANSFORM_SCALE: Nt,
            TRANSFORM_ROTATE: Mt,
            TRANSFORM_SKEW: En,
            STYLE_OPACITY: Hd,
            STYLE_FILTER: yn,
            STYLE_FONT_VARIATION: mn,
            STYLE_SIZE: Dt,
            STYLE_BACKGROUND_COLOR: Ft,
            STYLE_BORDER: qt,
            STYLE_TEXT_COLOR: Gt,
            GENERAL_DISPLAY: Er,
            OBJECT_VALUE: uR
        } = Te, Wd = e => e.trim(), mo = Object.freeze({
            [Ft]: Ud,
            [qt]: rR,
            [Gt]: iR
        }), zd = Object.freeze({
            [at]: jx,
            [Ud]: Kx,
            [dr]: dr,
            [pn]: pn,
            [Ke]: Ke,
            [je]: je,
            [gn]: gn
        }), lr = new Map;
        lR = 1;
        dR = 1;
        hR = (e, t) => e === t;
        qd = /px/, mR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = wR[r.type]), n), e || {}), vR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = xR[r.type] || r.defaultValue || 0), n), e || {});
        IR = (e, t) => (t && (e[t.type] = t.value || 0), e), TR = (e, t) => (t && (e[t.type] = t.value || 0), e), bR = (e, t, n) => {
            if (ft(e)) return oo(e)(n, t);
            switch (e) {
                case yn:
                    {
                        let r = (0, fr.default)(n.filters, ({
                            type: i
                        }) => i === t);
                        return r ? r.value : 0
                    }
                case mn:
                    {
                        let r = (0, fr.default)(n.fontVariations, ({
                            type: i
                        }) => i === t);
                        return r ? r.value : 0
                    }
                default:
                    return n[t]
            }
        };
        _o = {
            [Lt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Nt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Mt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [En]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, wR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), xR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), RR = (e, t) => {
            let n = (0, fr.default)(t.filters, ({
                type: r
            }) => r === e);
            if (n && n.unit) return n.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, CR = Object.keys(_o);
        DR = "\\(([^)]+)\\)", FR = /^rgb/, qR = RegExp(`rgba?${DR}`);
        Yd = ({
            effect: e,
            actionTypeId: t,
            elementApi: n
        }) => r => {
            switch (t) {
                case Lt:
                case Nt:
                case Mt:
                case En:
                    e(r, at, n);
                    break;
                case yn:
                    e(r, pn, n);
                    break;
                case mn:
                    e(r, gn, n);
                    break;
                case Hd:
                    e(r, dr, n);
                    break;
                case Dt:
                    e(r, Ke, n), e(r, je, n);
                    break;
                case Ft:
                case qt:
                case Gt:
                    e(r, mo[t], n);
                    break;
                case Er:
                    e(r, pr, n);
                    break
            }
        }
    });
    var gt = f(Io => {
        "use strict";
        Object.defineProperty(Io, "__esModule", {
            value: !0
        });

        function ZR(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        ZR(Io, {
            IX2BrowserSupport: function() {
                return JR
            },
            IX2EasingUtils: function() {
                return tC
            },
            IX2Easings: function() {
                return eC
            },
            IX2ElementsReducer: function() {
                return nC
            },
            IX2VanillaPlugins: function() {
                return rC
            },
            IX2VanillaUtils: function() {
                return iC
            }
        });
        var JR = Xt((or(), Ue(Wf))),
            eC = Xt((zi(), Ue(fn))),
            tC = Xt((Ki(), Ue(Zf))),
            nC = Xt((nd(), Ue(td))),
            rC = Xt((lo(), Ue(fd))),
            iC = Xt((Zd(), Ue(Qd)));

        function Jd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (Jd = function(r) {
                return r ? n : t
            })(e)
        }

        function Xt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = Jd(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
    });
    var mr, Je, oC, aC, sC, uC, cC, lC, yr, ep, fC, dC, To, pC, gC, hC, EC, tp, np = le(() => {
        "use strict";
        we();
        mr = ie(gt()), Je = ie(It()), {
            IX2_RAW_DATA_IMPORTED: oC,
            IX2_SESSION_STOPPED: aC,
            IX2_INSTANCE_ADDED: sC,
            IX2_INSTANCE_STARTED: uC,
            IX2_INSTANCE_REMOVED: cC,
            IX2_ANIMATION_FRAME_CHANGED: lC
        } = ye, {
            optimizeFloat: yr,
            applyEasing: ep,
            createBezierEasing: fC
        } = mr.IX2EasingUtils, {
            RENDER_GENERAL: dC
        } = ve, {
            getItemConfigByKey: To,
            getRenderType: pC,
            getStyleProp: gC
        } = mr.IX2VanillaUtils, hC = (e, t) => {
            let {
                position: n,
                parameterId: r,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: g,
                skipToValue: p
            } = e, {
                parameters: d
            } = t.payload, h = Math.max(1 - a, .01), y = d[r];
            y == null && (h = 1, y = s);
            let _ = Math.max(y, 0) || 0,
                S = yr(_ - n),
                m = g ? p : yr(n + S * h),
                w = m * 100;
            if (m === n && e.current) return e;
            let O, C, R, x;
            for (let V = 0, {
                    length: k
                } = i; V < k; V++) {
                let {
                    keyframe: W,
                    actionItems: Y
                } = i[V];
                if (V === 0 && (O = Y[0]), w >= W) {
                    O = Y[0];
                    let N = i[V + 1],
                        T = N && w !== W;
                    C = T ? N.actionItems[0] : null, T && (R = W / 100, x = (N.keyframe - W) / 100)
                }
            }
            let q = {};
            if (O && !C)
                for (let V = 0, {
                        length: k
                    } = o; V < k; V++) {
                    let W = o[V];
                    q[W] = To(u, W, O.config)
                } else if (O && C && R !== void 0 && x !== void 0) {
                    let V = (m - R) / x,
                        k = O.config.easing,
                        W = ep(k, V, l);
                    for (let Y = 0, {
                            length: N
                        } = o; Y < N; Y++) {
                        let T = o[Y],
                            P = To(u, T, O.config),
                            Z = (To(u, T, C.config) - P) * W + P;
                        q[T] = Z
                    }
                }
            return (0, Je.merge)(e, {
                position: m,
                current: q
            })
        }, EC = (e, t) => {
            let {
                active: n,
                origin: r,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: l,
                destinationKeys: g,
                pluginDuration: p,
                instanceDelay: d,
                customEasingFn: h,
                skipMotion: y
            } = e, _ = u.config.easing, {
                duration: S,
                delay: m
            } = u.config;
            p != null && (S = p), m = d ? ? m, a === dC ? S = 0 : (o || y) && (S = m = 0);
            let {
                now: w
            } = t.payload;
            if (n && r) {
                let O = w - (i + m);
                if (s) {
                    let V = w - i,
                        k = S + m,
                        W = yr(Math.min(Math.max(0, V / k), 1));
                    e = (0, Je.set)(e, "verboseTimeElapsed", k * W)
                }
                if (O < 0) return e;
                let C = yr(Math.min(Math.max(0, O / S), 1)),
                    R = ep(_, C, h),
                    x = {},
                    q = null;
                return g.length && (q = g.reduce((V, k) => {
                    let W = l[k],
                        Y = parseFloat(r[k]) || 0,
                        T = (parseFloat(W) - Y) * R + Y;
                    return V[k] = T, V
                }, {})), x.current = q, x.position = C, C === 1 && (x.active = !1, x.complete = !0), (0, Je.merge)(e, x)
            }
            return e
        }, tp = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case oC:
                    return t.payload.ixInstances || Object.freeze({});
                case aC:
                    return Object.freeze({});
                case sC:
                    {
                        let {
                            instanceId: n,
                            elementId: r,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: g,
                            origin: p,
                            destination: d,
                            immediate: h,
                            verbose: y,
                            continuous: _,
                            parameterId: S,
                            actionGroups: m,
                            smoothing: w,
                            restingValue: O,
                            pluginInstance: C,
                            pluginDuration: R,
                            instanceDelay: x,
                            skipMotion: q,
                            skipToValue: V
                        } = t.payload,
                        {
                            actionTypeId: k
                        } = i,
                        W = pC(k),
                        Y = gC(W, k),
                        N = Object.keys(d).filter(P => d[P] != null && typeof d[P] != "string"),
                        {
                            easing: T
                        } = i.config;
                        return (0, Je.set)(e, n, {
                            id: n,
                            elementId: r,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: d,
                            destinationKeys: N,
                            immediate: h,
                            verbose: y,
                            current: null,
                            actionItem: i,
                            actionTypeId: k,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: l,
                            renderType: W,
                            isCarrier: g,
                            styleProp: Y,
                            continuous: _,
                            parameterId: S,
                            actionGroups: m,
                            smoothing: w,
                            restingValue: O,
                            pluginInstance: C,
                            pluginDuration: R,
                            instanceDelay: x,
                            skipMotion: q,
                            skipToValue: V,
                            customEasingFn: Array.isArray(T) && T.length === 4 ? fC(T) : void 0
                        })
                    }
                case uC:
                    {
                        let {
                            instanceId: n,
                            time: r
                        } = t.payload;
                        return (0, Je.mergeIn)(e, [n], {
                            active: !0,
                            complete: !1,
                            start: r
                        })
                    }
                case cC:
                    {
                        let {
                            instanceId: n
                        } = t.payload;
                        if (!e[n]) return e;
                        let r = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== n && (r[s] = e[s])
                        }
                        return r
                    }
                case lC:
                    {
                        let n = e,
                            r = Object.keys(e),
                            {
                                length: i
                            } = r;
                        for (let o = 0; o < i; o++) {
                            let a = r[o],
                                s = e[a],
                                u = s.continuous ? hC : EC;
                            n = (0, Je.set)(n, a, u(s, t))
                        }
                        return n
                    }
                default:
                    return e
            }
        }
    });
    var yC, mC, vC, rp, ip = le(() => {
        "use strict";
        we();
        ({
            IX2_RAW_DATA_IMPORTED: yC,
            IX2_SESSION_STOPPED: mC,
            IX2_PARAMETER_CHANGED: vC
        } = ye), rp = (e = {}, t) => {
            switch (t.type) {
                case yC:
                    return t.payload.ixParameters || {};
                case mC:
                    return {};
                case vC:
                    {
                        let {
                            key: n,
                            value: r
                        } = t.payload;
                        return e[n] = r,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var sp = {};
    Oe(sp, {
        default: () => IC
    });
    var op, ap, _C, IC, up = le(() => {
        "use strict";
        op = ie(fi());
        hs();
        Fs();
        Xs();
        ap = ie(gt());
        np();
        ip();
        ({
            ixElements: _C
        } = ap.IX2ElementsReducer), IC = (0, op.combineReducers)({
            ixData: gs,
            ixRequest: Ds,
            ixSession: Gs,
            ixElements: _C,
            ixInstances: tp,
            ixParameters: rp
        })
    });
    var lp = f((eG, cp) => {
        var TC = rt(),
            bC = me(),
            AC = $e(),
            SC = "[object String]";

        function OC(e) {
            return typeof e == "string" || !bC(e) && AC(e) && TC(e) == SC
        }
        cp.exports = OC
    });
    var dp = f((tG, fp) => {
        var wC = Xi(),
            xC = wC("length");
        fp.exports = xC
    });
    var gp = f((nG, pp) => {
        var RC = "\\ud800-\\udfff",
            CC = "\\u0300-\\u036f",
            PC = "\\ufe20-\\ufe2f",
            LC = "\\u20d0-\\u20ff",
            NC = CC + PC + LC,
            MC = "\\ufe0e\\ufe0f",
            DC = "\\u200d",
            FC = RegExp("[" + DC + RC + NC + MC + "]");

        function qC(e) {
            return FC.test(e)
        }
        pp.exports = qC
    });
    var bp = f((rG, Tp) => {
        var Ep = "\\ud800-\\udfff",
            GC = "\\u0300-\\u036f",
            XC = "\\ufe20-\\ufe2f",
            VC = "\\u20d0-\\u20ff",
            UC = GC + XC + VC,
            BC = "\\ufe0e\\ufe0f",
            kC = "[" + Ep + "]",
            bo = "[" + UC + "]",
            Ao = "\\ud83c[\\udffb-\\udfff]",
            HC = "(?:" + bo + "|" + Ao + ")",
            yp = "[^" + Ep + "]",
            mp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            vp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            WC = "\\u200d",
            _p = HC + "?",
            Ip = "[" + BC + "]?",
            zC = "(?:" + WC + "(?:" + [yp, mp, vp].join("|") + ")" + Ip + _p + ")*",
            KC = Ip + _p + zC,
            jC = "(?:" + [yp + bo + "?", bo, mp, vp, kC].join("|") + ")",
            hp = RegExp(Ao + "(?=" + Ao + ")|" + jC + KC, "g");

        function YC(e) {
            for (var t = hp.lastIndex = 0; hp.test(e);) ++t;
            return t
        }
        Tp.exports = YC
    });
    var Sp = f((iG, Ap) => {
        var $C = dp(),
            QC = gp(),
            ZC = bp();

        function JC(e) {
            return QC(e) ? ZC(e) : $C(e)
        }
        Ap.exports = JC
    });
    var wp = f((oG, Op) => {
        var eP = Yn(),
            tP = $n(),
            nP = ct(),
            rP = lp(),
            iP = Sp(),
            oP = "[object Map]",
            aP = "[object Set]";

        function sP(e) {
            if (e == null) return 0;
            if (nP(e)) return rP(e) ? iP(e) : e.length;
            var t = tP(e);
            return t == oP || t == aP ? e.size : eP(e).length
        }
        Op.exports = sP
    });
    var Rp = f((aG, xp) => {
        var uP = "Expected a function";

        function cP(e) {
            if (typeof e != "function") throw new TypeError(uP);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        xp.exports = cP
    });
    var So = f((sG, Cp) => {
        var lP = it(),
            fP = function() {
                try {
                    var e = lP(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Cp.exports = fP
    });
    var Oo = f((uG, Lp) => {
        var Pp = So();

        function dP(e, t, n) {
            t == "__proto__" && Pp ? Pp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        Lp.exports = dP
    });
    var Mp = f((cG, Np) => {
        var pP = Oo(),
            gP = Xn(),
            hP = Object.prototype,
            EP = hP.hasOwnProperty;

        function yP(e, t, n) {
            var r = e[t];
            (!(EP.call(e, t) && gP(r, n)) || n === void 0 && !(t in e)) && pP(e, t, n)
        }
        Np.exports = yP
    });
    var qp = f((lG, Fp) => {
        var mP = Mp(),
            vP = un(),
            _P = Wn(),
            Dp = ze(),
            IP = Rt();

        function TP(e, t, n, r) {
            if (!Dp(e)) return e;
            t = vP(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = IP(t[i]),
                    l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var g = s[u];
                    l = r ? r(g, u, s) : void 0, l === void 0 && (l = Dp(g) ? g : _P(t[i + 1]) ? [] : {})
                }
                mP(s, u, l), s = s[u]
            }
            return e
        }
        Fp.exports = TP
    });
    var Xp = f((fG, Gp) => {
        var bP = Jn(),
            AP = qp(),
            SP = un();

        function OP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i;) {
                var a = t[r],
                    s = bP(e, a);
                n(s, a) && AP(o, SP(a, e), s)
            }
            return o
        }
        Gp.exports = OP
    });
    var Up = f((dG, Vp) => {
        var wP = kn(),
            xP = Zr(),
            RP = Ai(),
            CP = bi(),
            PP = Object.getOwnPropertySymbols,
            LP = PP ? function(e) {
                for (var t = []; e;) wP(t, RP(e)), e = xP(e);
                return t
            } : CP;
        Vp.exports = LP
    });
    var kp = f((pG, Bp) => {
        function NP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e)) t.push(n);
            return t
        }
        Bp.exports = NP
    });
    var Wp = f((gG, Hp) => {
        var MP = ze(),
            DP = jn(),
            FP = kp(),
            qP = Object.prototype,
            GP = qP.hasOwnProperty;

        function XP(e) {
            if (!MP(e)) return FP(e);
            var t = DP(e),
                n = [];
            for (var r in e) r == "constructor" && (t || !GP.call(e, r)) || n.push(r);
            return n
        }
        Hp.exports = XP
    });
    var Kp = f((hG, zp) => {
        var VP = Oi(),
            UP = Wp(),
            BP = ct();

        function kP(e) {
            return BP(e) ? VP(e, !0) : UP(e)
        }
        zp.exports = kP
    });
    var Yp = f((EG, jp) => {
        var HP = Ti(),
            WP = Up(),
            zP = Kp();

        function KP(e) {
            return HP(e, zP, WP)
        }
        jp.exports = KP
    });
    var Qp = f((yG, $p) => {
        var jP = Gi(),
            YP = ot(),
            $P = Xp(),
            QP = Yp();

        function ZP(e, t) {
            if (e == null) return {};
            var n = jP(QP(e), function(r) {
                return [r]
            });
            return t = YP(t), $P(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        $p.exports = ZP
    });
    var Jp = f((mG, Zp) => {
        var JP = ot(),
            eL = Rp(),
            tL = Qp();

        function nL(e, t) {
            return tL(e, eL(JP(t)))
        }
        Zp.exports = nL
    });
    var tg = f((vG, eg) => {
        var rL = Yn(),
            iL = $n(),
            oL = tn(),
            aL = me(),
            sL = ct(),
            uL = Hn(),
            cL = jn(),
            lL = Kn(),
            fL = "[object Map]",
            dL = "[object Set]",
            pL = Object.prototype,
            gL = pL.hasOwnProperty;

        function hL(e) {
            if (e == null) return !0;
            if (sL(e) && (aL(e) || typeof e == "string" || typeof e.splice == "function" || uL(e) || lL(e) || oL(e))) return !e.length;
            var t = iL(e);
            if (t == fL || t == dL) return !e.size;
            if (cL(e)) return !rL(e).length;
            for (var n in e)
                if (gL.call(e, n)) return !1;
            return !0
        }
        eg.exports = hL
    });
    var rg = f((_G, ng) => {
        var EL = Oo(),
            yL = fo(),
            mL = ot();

        function vL(e, t) {
            var n = {};
            return t = mL(t, 3), yL(e, function(r, i, o) {
                EL(n, i, t(r, i, o))
            }), n
        }
        ng.exports = vL
    });
    var og = f((IG, ig) => {
        function _L(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }
        ig.exports = _L
    });
    var sg = f((TG, ag) => {
        var IL = tr();

        function TL(e) {
            return typeof e == "function" ? e : IL
        }
        ag.exports = TL
    });
    var cg = f((bG, ug) => {
        var bL = og(),
            AL = po(),
            SL = sg(),
            OL = me();

        function wL(e, t) {
            var n = OL(e) ? bL : AL;
            return n(e, SL(t))
        }
        ug.exports = wL
    });
    var fg = f((AG, lg) => {
        var xL = De(),
            RL = function() {
                return xL.Date.now()
            };
        lg.exports = RL
    });
    var gg = f((SG, pg) => {
        var CL = ze(),
            wo = fg(),
            dg = nr(),
            PL = "Expected a function",
            LL = Math.max,
            NL = Math.min;

        function ML(e, t, n) {
            var r, i, o, a, s, u, l = 0,
                g = !1,
                p = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(PL);
            t = dg(t) || 0, CL(n) && (g = !!n.leading, p = "maxWait" in n, o = p ? LL(dg(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d);

            function h(x) {
                var q = r,
                    V = i;
                return r = i = void 0, l = x, a = e.apply(V, q), a
            }

            function y(x) {
                return l = x, s = setTimeout(m, t), g ? h(x) : a
            }

            function _(x) {
                var q = x - u,
                    V = x - l,
                    k = t - q;
                return p ? NL(k, o - V) : k
            }

            function S(x) {
                var q = x - u,
                    V = x - l;
                return u === void 0 || q >= t || q < 0 || p && V >= o
            }

            function m() {
                var x = wo();
                if (S(x)) return w(x);
                s = setTimeout(m, _(x))
            }

            function w(x) {
                return s = void 0, d && r ? h(x) : (r = i = void 0, a)
            }

            function O() {
                s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0
            }

            function C() {
                return s === void 0 ? a : w(wo())
            }

            function R() {
                var x = wo(),
                    q = S(x);
                if (r = arguments, i = this, u = x, q) {
                    if (s === void 0) return y(u);
                    if (p) return clearTimeout(s), s = setTimeout(m, t), h(u)
                }
                return s === void 0 && (s = setTimeout(m, t)), a
            }
            return R.cancel = O, R.flush = C, R
        }
        pg.exports = ML
    });
    var Eg = f((OG, hg) => {
        var DL = gg(),
            FL = ze(),
            qL = "Expected a function";

        function GL(e, t, n) {
            var r = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(qL);
            return FL(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), DL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        hg.exports = GL
    });
    var mg = {};
    Oe(mg, {
        actionListPlaybackChanged: () => Ut,
        animationFrameChanged: () => _r,
        clearRequested: () => cN,
        elementStateChanged: () => Do,
        eventListenerAdded: () => vr,
        eventStateChanged: () => Lo,
        instanceAdded: () => No,
        instanceRemoved: () => Mo,
        instanceStarted: () => Ir,
        mediaQueriesDefined: () => qo,
        parameterChanged: () => Vt,
        playbackRequested: () => sN,
        previewRequested: () => aN,
        rawDataImported: () => xo,
        sessionInitialized: () => Ro,
        sessionStarted: () => Co,
        sessionStopped: () => Po,
        stopRequested: () => uN,
        testFrameRendered: () => lN,
        viewportWidthChanged: () => Fo
    });
    var yg, XL, VL, UL, BL, kL, HL, WL, zL, KL, jL, YL, $L, QL, ZL, JL, eN, tN, nN, rN, iN, oN, xo, Ro, Co, Po, aN, sN, uN, cN, vr, lN, Lo, _r, Vt, No, Ir, Mo, Do, Ut, Fo, qo, Tr = le(() => {
        "use strict";
        we();
        yg = ie(gt()), {
            IX2_RAW_DATA_IMPORTED: XL,
            IX2_SESSION_INITIALIZED: VL,
            IX2_SESSION_STARTED: UL,
            IX2_SESSION_STOPPED: BL,
            IX2_PREVIEW_REQUESTED: kL,
            IX2_PLAYBACK_REQUESTED: HL,
            IX2_STOP_REQUESTED: WL,
            IX2_CLEAR_REQUESTED: zL,
            IX2_EVENT_LISTENER_ADDED: KL,
            IX2_TEST_FRAME_RENDERED: jL,
            IX2_EVENT_STATE_CHANGED: YL,
            IX2_ANIMATION_FRAME_CHANGED: $L,
            IX2_PARAMETER_CHANGED: QL,
            IX2_INSTANCE_ADDED: ZL,
            IX2_INSTANCE_STARTED: JL,
            IX2_INSTANCE_REMOVED: eN,
            IX2_ELEMENT_STATE_CHANGED: tN,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: nN,
            IX2_VIEWPORT_WIDTH_CHANGED: rN,
            IX2_MEDIA_QUERIES_DEFINED: iN
        } = ye, {
            reifyState: oN
        } = yg.IX2VanillaUtils, xo = e => ({
            type: XL,
            payload: { ...oN(e)
            }
        }), Ro = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: VL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Co = () => ({
            type: UL
        }), Po = () => ({
            type: BL
        }), aN = ({
            rawData: e,
            defer: t
        }) => ({
            type: kL,
            payload: {
                defer: t,
                rawData: e
            }
        }), sN = ({
            actionTypeId: e = Te.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: r,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: HL,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), uN = e => ({
            type: WL,
            payload: {
                actionListId: e
            }
        }), cN = () => ({
            type: zL
        }), vr = (e, t) => ({
            type: KL,
            payload: {
                target: e,
                listenerParams: t
            }
        }), lN = (e = 1) => ({
            type: jL,
            payload: {
                step: e
            }
        }), Lo = (e, t) => ({
            type: YL,
            payload: {
                stateKey: e,
                newState: t
            }
        }), _r = (e, t) => ({
            type: $L,
            payload: {
                now: e,
                parameters: t
            }
        }), Vt = (e, t) => ({
            type: QL,
            payload: {
                key: e,
                value: t
            }
        }), No = e => ({
            type: ZL,
            payload: { ...e
            }
        }), Ir = (e, t) => ({
            type: JL,
            payload: {
                instanceId: e,
                time: t
            }
        }), Mo = e => ({
            type: eN,
            payload: {
                instanceId: e
            }
        }), Do = (e, t, n, r) => ({
            type: tN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }), Ut = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: nN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Fo = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: rN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), qo = () => ({
            type: iN
        })
    });
    var Ae = {};
    Oe(Ae, {
        elementContains: () => Vo,
        getChildElements: () => _N,
        getClosestElement: () => vn,
        getProperty: () => hN,
        getQuerySelector: () => Xo,
        getRefType: () => Uo,
        getSiblingElements: () => IN,
        getStyle: () => gN,
        getValidDocument: () => yN,
        isSiblingNode: () => vN,
        matchSelector: () => EN,
        queryDocument: () => mN,
        setStyle: () => pN
    });

    function pN(e, t, n) {
        e.style[t] = n
    }

    function gN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function hN(e, t) {
        return e[t]
    }

    function EN(e) {
        return t => t[Go](e)
    }

    function Xo({
        id: e,
        selector: t
    }) {
        if (e) {
            let n = e;
            if (e.indexOf(vg) !== -1) {
                let r = e.split(vg),
                    i = r[0];
                if (n = r[1], i !== document.documentElement.getAttribute(Ig)) return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }

    function yN(e) {
        return e == null || e === document.documentElement.getAttribute(Ig) ? document : null
    }

    function mN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Vo(e, t) {
        return e.contains(t)
    }

    function vN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function _N(e) {
        let t = [];
        for (let n = 0, {
                length: r
            } = e || []; n < r; n++) {
            let {
                children: i
            } = e[n], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function IN(e = []) {
        let t = [],
            n = [];
        for (let r = 0, {
                length: i
            } = e; r < i; r++) {
            let {
                parentNode: o
            } = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) continue;
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function Uo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? fN : dN : null
    }
    var _g, Go, vg, fN, dN, Ig, vn, Tg = le(() => {
        "use strict";
        _g = ie(gt());
        we();
        ({
            ELEMENT_MATCHES: Go
        } = _g.IX2BrowserSupport), {
            IX2_ID_DELIMITER: vg,
            HTML_ELEMENT: fN,
            PLAIN_OBJECT: dN,
            WF_PAGE: Ig
        } = ve;
        vn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
                if (n[Go] && n[Go](t)) return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    });
    var Bo = f((RG, Ag) => {
        var TN = ze(),
            bg = Object.create,
            bN = function() {
                function e() {}
                return function(t) {
                    if (!TN(t)) return {};
                    if (bg) return bg(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        Ag.exports = bN
    });
    var br = f((CG, Sg) => {
        function AN() {}
        Sg.exports = AN
    });
    var Sr = f((PG, Og) => {
        var SN = Bo(),
            ON = br();

        function Ar(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Ar.prototype = SN(ON.prototype);
        Ar.prototype.constructor = Ar;
        Og.exports = Ar
    });
    var Cg = f((LG, Rg) => {
        var wg = mt(),
            wN = tn(),
            xN = me(),
            xg = wg ? wg.isConcatSpreadable : void 0;

        function RN(e) {
            return xN(e) || wN(e) || !!(xg && e && e[xg])
        }
        Rg.exports = RN
    });
    var Ng = f((NG, Lg) => {
        var CN = kn(),
            PN = Cg();

        function Pg(e, t, n, r, i) {
            var o = -1,
                a = e.length;
            for (n || (n = PN), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && n(s) ? t > 1 ? Pg(s, t - 1, n, r, i) : CN(i, s) : r || (i[i.length] = s)
            }
            return i
        }
        Lg.exports = Pg
    });
    var Dg = f((MG, Mg) => {
        var LN = Ng();

        function NN(e) {
            var t = e == null ? 0 : e.length;
            return t ? LN(e, 1) : []
        }
        Mg.exports = NN
    });
    var qg = f((DG, Fg) => {
        function MN(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Fg.exports = MN
    });
    var Vg = f((FG, Xg) => {
        var DN = qg(),
            Gg = Math.max;

        function FN(e, t, n) {
            return t = Gg(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, i = -1, o = Gg(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
                    return s[t] = n(a), DN(e, this, s)
                }
        }
        Xg.exports = FN
    });
    var Bg = f((qG, Ug) => {
        function qN(e) {
            return function() {
                return e
            }
        }
        Ug.exports = qN
    });
    var Wg = f((GG, Hg) => {
        var GN = Bg(),
            kg = So(),
            XN = tr(),
            VN = kg ? function(e, t) {
                return kg(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: GN(t),
                    writable: !0
                })
            } : XN;
        Hg.exports = VN
    });
    var Kg = f((XG, zg) => {
        var UN = 800,
            BN = 16,
            kN = Date.now;

        function HN(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = kN(),
                    i = BN - (r - n);
                if (n = r, i > 0) {
                    if (++t >= UN) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        zg.exports = HN
    });
    var Yg = f((VG, jg) => {
        var WN = Wg(),
            zN = Kg(),
            KN = zN(WN);
        jg.exports = KN
    });
    var Qg = f((UG, $g) => {
        var jN = Dg(),
            YN = Vg(),
            $N = Yg();

        function QN(e) {
            return $N(YN(e, void 0, jN), e + "")
        }
        $g.exports = QN
    });
    var eh = f((BG, Jg) => {
        var Zg = wi(),
            ZN = Zg && new Zg;
        Jg.exports = ZN
    });
    var nh = f((kG, th) => {
        function JN() {}
        th.exports = JN
    });
    var ko = f((HG, ih) => {
        var rh = eh(),
            eM = nh(),
            tM = rh ? function(e) {
                return rh.get(e)
            } : eM;
        ih.exports = tM
    });
    var ah = f((WG, oh) => {
        var nM = {};
        oh.exports = nM
    });
    var Ho = f((zG, uh) => {
        var sh = ah(),
            rM = Object.prototype,
            iM = rM.hasOwnProperty;

        function oM(e) {
            for (var t = e.name + "", n = sh[t], r = iM.call(sh, t) ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        uh.exports = oM
    });
    var wr = f((KG, ch) => {
        var aM = Bo(),
            sM = br(),
            uM = 4294967295;

        function Or(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = uM, this.__views__ = []
        }
        Or.prototype = aM(sM.prototype);
        Or.prototype.constructor = Or;
        ch.exports = Or
    });
    var fh = f((jG, lh) => {
        function cM(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        lh.exports = cM
    });
    var ph = f((YG, dh) => {
        var lM = wr(),
            fM = Sr(),
            dM = fh();

        function pM(e) {
            if (e instanceof lM) return e.clone();
            var t = new fM(e.__wrapped__, e.__chain__);
            return t.__actions__ = dM(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        dh.exports = pM
    });
    var Eh = f(($G, hh) => {
        var gM = wr(),
            gh = Sr(),
            hM = br(),
            EM = me(),
            yM = $e(),
            mM = ph(),
            vM = Object.prototype,
            _M = vM.hasOwnProperty;

        function xr(e) {
            if (yM(e) && !EM(e) && !(e instanceof gM)) {
                if (e instanceof gh) return e;
                if (_M.call(e, "__wrapped__")) return mM(e)
            }
            return new gh(e)
        }
        xr.prototype = hM.prototype;
        xr.prototype.constructor = xr;
        hh.exports = xr
    });
    var mh = f((QG, yh) => {
        var IM = wr(),
            TM = ko(),
            bM = Ho(),
            AM = Eh();

        function SM(e) {
            var t = bM(e),
                n = AM[t];
            if (typeof n != "function" || !(t in IM.prototype)) return !1;
            if (e === n) return !0;
            var r = TM(n);
            return !!r && e === r[0]
        }
        yh.exports = SM
    });
    var Th = f((ZG, Ih) => {
        var vh = Sr(),
            OM = Qg(),
            wM = ko(),
            Wo = Ho(),
            xM = me(),
            _h = mh(),
            RM = "Expected a function",
            CM = 8,
            PM = 32,
            LM = 128,
            NM = 256;

        function MM(e) {
            return OM(function(t) {
                var n = t.length,
                    r = n,
                    i = vh.prototype.thru;
                for (e && t.reverse(); r--;) {
                    var o = t[r];
                    if (typeof o != "function") throw new TypeError(RM);
                    if (i && !a && Wo(o) == "wrapper") var a = new vh([], !0)
                }
                for (r = a ? r : n; ++r < n;) {
                    o = t[r];
                    var s = Wo(o),
                        u = s == "wrapper" ? wM(o) : void 0;
                    u && _h(u[0]) && u[1] == (LM | CM | PM | NM) && !u[4].length && u[9] == 1 ? a = a[Wo(u[0])].apply(a, u[3]) : a = o.length == 1 && _h(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments,
                        g = l[0];
                    if (a && l.length == 1 && xM(g)) return a.plant(g).value();
                    for (var p = 0, d = n ? t[p].apply(this, l) : g; ++p < n;) d = t[p].call(this, d);
                    return d
                }
            })
        }
        Ih.exports = MM
    });
    var Ah = f((JG, bh) => {
        var DM = Th(),
            FM = DM();
        bh.exports = FM
    });
    var Oh = f((eX, Sh) => {
        function qM(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Sh.exports = qM
    });
    var xh = f((tX, wh) => {
        var GM = Oh(),
            zo = nr();

        function XM(e, t, n) {
            return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = zo(n), n = n === n ? n : 0), t !== void 0 && (t = zo(t), t = t === t ? t : 0), GM(zo(e), t, n)
        }
        wh.exports = XM
    });
    var qh, Gh, Xh, Vh, VM, UM, BM, kM, HM, WM, zM, KM, jM, YM, $M, QM, ZM, JM, eD, Uh, Bh, tD, nD, rD, kh, iD, oD, Hh, aD, Ko, Wh, Rh, Ch, zh, In, sD, Ye, Kh, uD, Re, Ge, Tn, jh, jo, Ph, Yo, cD, _n, lD, fD, dD, Yh, Lh, pD, Nh, gD, hD, ED, Mh, Rr, Cr, Dh, Fh, $h, Qh = le(() => {
        "use strict";
        qh = ie(Ah()), Gh = ie(er()), Xh = ie(xh());
        we();
        $o();
        Tr();
        Vh = ie(gt()), {
            MOUSE_CLICK: VM,
            MOUSE_SECOND_CLICK: UM,
            MOUSE_DOWN: BM,
            MOUSE_UP: kM,
            MOUSE_OVER: HM,
            MOUSE_OUT: WM,
            DROPDOWN_CLOSE: zM,
            DROPDOWN_OPEN: KM,
            SLIDER_ACTIVE: jM,
            SLIDER_INACTIVE: YM,
            TAB_ACTIVE: $M,
            TAB_INACTIVE: QM,
            NAVBAR_CLOSE: ZM,
            NAVBAR_OPEN: JM,
            MOUSE_MOVE: eD,
            PAGE_SCROLL_DOWN: Uh,
            SCROLL_INTO_VIEW: Bh,
            SCROLL_OUT_OF_VIEW: tD,
            PAGE_SCROLL_UP: nD,
            SCROLLING_IN_VIEW: rD,
            PAGE_FINISH: kh,
            ECOMMERCE_CART_CLOSE: iD,
            ECOMMERCE_CART_OPEN: oD,
            PAGE_START: Hh,
            PAGE_SCROLL: aD
        } = Fe, Ko = "COMPONENT_ACTIVE", Wh = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Rh
        } = ve, {
            getNamespacedParameterId: Ch
        } = Vh.IX2VanillaUtils, zh = e => t => typeof t == "object" && e(t) ? !0 : t, In = zh(({
            element: e,
            nativeEvent: t
        }) => e === t.target), sD = zh(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), Ye = (0, qh.default)([In, sD]), Kh = (e, t) => {
            if (t) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: r
                } = n, i = r[t];
                if (i && !cD[i.eventTypeId]) return i
            }
            return null
        }, uD = ({
            store: e,
            event: t
        }) => {
            let {
                action: n
            } = t, {
                autoStopEventId: r
            } = n.config;
            return !!Kh(e, r)
        }, Re = ({
            store: e,
            event: t,
            element: n,
            eventStateKey: r
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, l = Kh(e, u);
            return l && Bt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Rh + r.split(Rh)[1],
                actionListId: (0, Gh.default)(l, "action.config.actionListId")
            }), Bt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }), bn({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }), i
        }, Ge = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r, Tn = {
            handler: Ge(Ye, Re)
        }, jh = { ...Tn,
            types: [Ko, Wh].join(" ")
        }, jo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Ph = "mouseover mouseout", Yo = {
            types: jo
        }, cD = {
            PAGE_START: Hh,
            PAGE_FINISH: kh
        }, _n = (() => {
            let e = window.pageXOffset !== void 0,
                n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0, Xh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), lD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), fD = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: n,
                target: r,
                relatedTarget: i
            } = t, o = e.contains(r);
            if (n === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(n === "mouseout" && o && a)
        }, dD = e => {
            let {
                element: t,
                event: {
                    config: n
                }
            } = e, {
                clientWidth: r,
                clientHeight: i
            } = _n(), o = n.scrollOffsetValue, u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return lD(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }, Yh = e => (t, n) => {
            let {
                type: r
            } = t.nativeEvent, i = [Ko, Wh].indexOf(r) !== -1 ? r === Ko : n.isActive, o = { ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }, Lh = e => (t, n) => {
            let r = {
                elementHovered: fD(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }, pD = e => (t, n) => {
            let r = { ...n,
                elementVisible: dD(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }, Nh = e => (t, n = {}) => {
            let {
                stiffScrollTop: r,
                scrollHeight: i,
                innerHeight: o
            } = _n(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = a, g = l === "PX", p = i - o, d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d) return n;
            let h = (g ? u : o * (u || 0) / 100) / p,
                y, _, S = 0;
            n && (y = d > n.percentTop, _ = n.scrollingDown !== y, S = _ ? d : n.anchorTop);
            let m = s === Uh ? d >= S + h : d <= S - h,
                w = { ...n,
                    percentTop: d,
                    inBounds: m,
                    anchorTop: S,
                    scrollingDown: y
                };
            return n && m && (_ || w.inBounds !== n.inBounds) && e(t, w) || w
        }, gD = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, hD = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t), r
        }, ED = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t), r
        }, Mh = e => (t, n = {
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }, Rr = (e = !0) => ({ ...jh,
            handler: Ge(e ? Ye : In, Yh((t, n) => n.isActive ? Tn.handler(t, n) : n))
        }), Cr = (e = !0) => ({ ...jh,
            handler: Ge(e ? Ye : In, Yh((t, n) => n.isActive ? n : Tn.handler(t, n)))
        }), Dh = { ...Yo,
            handler: pD((e, t) => {
                let {
                    elementVisible: n
                } = t, {
                    event: r,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === Bh === n ? (Re(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Fh = .05, $h = {
            [jM]: Rr(),
            [YM]: Cr(),
            [KM]: Rr(),
            [zM]: Cr(),
            [JM]: Rr(!1),
            [ZM]: Cr(!1),
            [$M]: Rr(),
            [QM]: Cr(),
            [oD]: {
                types: "ecommerce-cart-open",
                handler: Ge(Ye, Re)
            },
            [iD]: {
                types: "ecommerce-cart-close",
                handler: Ge(Ye, Re)
            },
            [VM]: {
                types: "click",
                handler: Ge(Ye, Mh((e, {
                    clickCount: t
                }) => {
                    uD(e) ? t === 1 && Re(e) : Re(e)
                }))
            },
            [UM]: {
                types: "click",
                handler: Ge(Ye, Mh((e, {
                    clickCount: t
                }) => {
                    t === 2 && Re(e)
                }))
            },
            [BM]: { ...Tn,
                types: "mousedown"
            },
            [kM]: { ...Tn,
                types: "mouseup"
            },
            [HM]: {
                types: Ph,
                handler: Ge(Ye, Lh((e, t) => {
                    t.elementHovered && Re(e)
                }))
            },
            [WM]: {
                types: Ph,
                handler: Ge(Ye, Lh((e, t) => {
                    t.elementHovered || Re(e)
                }))
            },
            [eD]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: n,
                    nativeEvent: r,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: g = 0
                    } = n, {
                        clientX: p = o.clientX,
                        clientY: d = o.clientY,
                        pageX: h = o.pageX,
                        pageY: y = o.pageY
                    } = r, _ = s === "X_AXIS", S = r.type === "mouseout", m = g / 100, w = u, O = !1;
                    switch (a) {
                        case We.VIEWPORT:
                            {
                                m = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case We.PAGE:
                            {
                                let {
                                    scrollLeft: C,
                                    scrollTop: R,
                                    scrollWidth: x,
                                    scrollHeight: q
                                } = _n();m = _ ? Math.min(C + h, x) / x : Math.min(R + y, q) / q;
                                break
                            }
                        case We.ELEMENT:
                        default:
                            {
                                w = Ch(i, u);
                                let C = r.type.indexOf("mouse") === 0;
                                if (C && Ye({
                                        element: t,
                                        nativeEvent: r
                                    }) !== !0) break;
                                let R = t.getBoundingClientRect(),
                                    {
                                        left: x,
                                        top: q,
                                        width: V,
                                        height: k
                                    } = R;
                                if (!C && !gD({
                                        left: p,
                                        top: d
                                    }, R)) break;O = !0,
                                m = _ ? (p - x) / V : (d - q) / k;
                                break
                            }
                    }
                    return S && (m > 1 - Fh || m < Fh) && (m = Math.round(m)), (a !== We.ELEMENT || O || O !== o.elementHovered) && (m = l ? 1 - m : m, e.dispatch(Vt(w, m))), {
                        elementHovered: O,
                        clientX: p,
                        clientY: d,
                        pageX: h,
                        pageY: y
                    }
                }
            },
            [aD]: {
                types: jo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: n,
                        reverse: r
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = _n(), s = i / (o - a);
                    s = r ? 1 - s : s, e.dispatch(Vt(n, s))
                }
            },
            [rD]: {
                types: jo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: n,
                    eventStateKey: r
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: l
                    } = _n(), {
                        basedOn: g,
                        selectedAxis: p,
                        continuousParameterGroupId: d,
                        startsEntering: h,
                        startsExiting: y,
                        addEndOffset: _,
                        addStartOffset: S,
                        addOffsetValue: m = 0,
                        endOffsetValue: w = 0
                    } = n, O = p === "X_AXIS";
                    if (g === We.VIEWPORT) {
                        let C = O ? o / s : a / u;
                        return C !== i.scrollPercent && t.dispatch(Vt(d, C)), {
                            scrollPercent: C
                        }
                    } else {
                        let C = Ch(r, d),
                            R = e.getBoundingClientRect(),
                            x = (S ? m : 0) / 100,
                            q = (_ ? w : 0) / 100;
                        x = h ? x : 1 - x, q = y ? q : 1 - q;
                        let V = R.top + Math.min(R.height * x, l),
                            W = R.top + R.height * q - V,
                            Y = Math.min(l + W, u),
                            T = Math.min(Math.max(0, l - V), Y) / Y;
                        return T !== i.scrollPercent && t.dispatch(Vt(C, T)), {
                            scrollPercent: T
                        }
                    }
                }
            },
            [Bh]: Dh,
            [tD]: Dh,
            [Uh]: { ...Yo,
                handler: Nh((e, t) => {
                    t.scrollingDown && Re(e)
                })
            },
            [nD]: { ...Yo,
                handler: Nh((e, t) => {
                    t.scrollingDown || Re(e)
                })
            },
            [kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ge(In, hD(Re))
            },
            [Hh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ge(In, ED(Re))
            }
        }
    });
    var gE = {};
    Oe(gE, {
        observeRequests: () => FD,
        startActionGroup: () => bn,
        startEngine: () => Fr,
        stopActionGroup: () => Bt,
        stopAllActionGroups: () => fE,
        stopEngine: () => qr
    });

    function FD(e) {
        ht({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: XD
        }), ht({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: VD
        }), ht({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: UD
        }), ht({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: BD
        })
    }

    function qD(e) {
        ht({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                qr(e), sE({
                    store: e,
                    elementApi: Ae
                }), Fr({
                    store: e,
                    allowEvents: !0
                }), uE()
            }
        })
    }

    function GD(e, t) {
        let n = ht({
            store: e,
            select: ({
                ixSession: r
            }) => r.tick,
            onChange: r => {
                t(r), n()
            }
        })
    }

    function XD({
        rawData: e,
        defer: t
    }, n) {
        let r = () => {
            Fr({
                store: n,
                rawData: e,
                allowEvents: !0
            }), uE()
        };
        t ? setTimeout(r, 0) : r()
    }

    function uE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function VD(e, t) {
        let {
            actionTypeId: n,
            actionListId: r,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: g
        } = e;
        if (r && i && g && s) {
            let p = g.actionLists[r];
            p && (g = SD({
                actionList: p,
                actionItemId: i,
                rawData: g
            }))
        }
        if (Fr({
                store: t,
                rawData: g,
                allowEvents: a,
                testManual: u
            }), r && n === Te.GENERAL_START_ACTION || Qo(n)) {
            Bt({
                store: t,
                actionListId: r
            }), lE({
                store: t,
                actionListId: r,
                eventId: o
            });
            let p = bn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: s,
                verbose: l
            });
            l && p && t.dispatch(Ut({
                actionListId: r,
                isPlaying: !s
            }))
        }
    }

    function UD({
        actionListId: e
    }, t) {
        e ? Bt({
            store: t,
            actionListId: e
        }) : fE({
            store: t
        }), qr(t)
    }

    function BD(e, t) {
        qr(t), sE({
            store: t,
            elementApi: Ae
        })
    }

    function Fr({
        store: e,
        rawData: t,
        allowEvents: n,
        testManual: r
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(xo(t)), i.active || (e.dispatch(Ro({
            hasBoundaryNodes: !!document.querySelector(Lr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), n && (jD(e), kD(), e.getState().ixSession.hasDefinedMediaQueries && qD(e)), e.dispatch(Co()), HD(e, r))
    }

    function kD() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(Zh) === -1 && (e.className += ` ${Zh}`)
    }

    function HD(e, t) {
        let n = r => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(_r(r, o)), t ? GD(e, n) : requestAnimationFrame(n))
        };
        n(window.performance.now())
    }

    function qr(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: n
            } = t;
            n.forEach(WD), RD(), e.dispatch(Po())
        }
    }

    function WD({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function zD({
        store: e,
        eventStateKey: t,
        eventTarget: n,
        eventId: r,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: g
        } = e.getState(), {
            events: p
        } = l, d = p[r], {
            eventTypeId: h
        } = d, y = {}, _ = {}, S = [], {
            continuousActionGroups: m
        } = a, {
            id: w
        } = a;
        OD(h, i) && (w = wD(t, w));
        let O = g.hasBoundaryNodes && n ? vn(n, Lr) : null;
        m.forEach(C => {
            let {
                keyframe: R,
                actionItems: x
            } = C;
            x.forEach(q => {
                let {
                    actionTypeId: V
                } = q, {
                    target: k
                } = q.config;
                if (!k) return;
                let W = k.boundaryMode ? O : null,
                    Y = CD(k) + Zo + V;
                if (_[Y] = KD(_[Y], R, q), !y[Y]) {
                    y[Y] = !0;
                    let {
                        config: N
                    } = q;
                    Nr({
                        config: N,
                        event: d,
                        eventTarget: n,
                        elementRoot: W,
                        elementApi: Ae
                    }).forEach(T => {
                        S.push({
                            element: T,
                            key: Y
                        })
                    })
                }
            })
        }), S.forEach(({
            element: C,
            key: R
        }) => {
            let x = _[R],
                q = (0, et.default)(x, "[0].actionItems[0]", {}),
                {
                    actionTypeId: V
                } = q,
                W = (V === Te.PLUGIN_RIVE ? (q.config ? .target ? .selectorGuids || []).length === 0 : Dr(V)) ? ea(V)(C, q) : null,
                Y = Jo({
                    element: C,
                    actionItem: q,
                    elementApi: Ae
                }, W);
            ta({
                store: e,
                element: C,
                eventId: r,
                actionListId: o,
                actionItem: q,
                destination: Y,
                continuous: !0,
                parameterId: w,
                actionGroups: x,
                smoothing: s,
                restingValue: u,
                pluginInstance: W
            })
        })
    }

    function KD(e = [], t, n) {
        let r = [...e],
            i;
        return r.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = r.length, r.push({
            keyframe: t,
            actionItems: []
        })), r[i].actionItems.push(n), r
    }

    function jD(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: n
        } = t;
        cE(e), (0, kt.default)(n, (i, o) => {
            let a = $h[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            eF({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: r
        } = e.getState();
        r.eventListeners.length && $D(e)
    }

    function $D(e) {
        let t = () => {
            cE(e)
        };
        YD.forEach(n => {
            window.addEventListener(n, t), e.dispatch(vr(window, [n, t]))
        }), t()
    }

    function cE(e) {
        let {
            ixSession: t,
            ixData: n
        } = e.getState(), r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = n;
            e.dispatch(Fo({
                width: r,
                mediaQueries: i
            }))
        }
    }

    function eF({
        logic: e,
        store: t,
        events: n
    }) {
        tF(n);
        let {
            types: r,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = QD(n, JD);
        if (!(0, tE.default)(s)) return;
        (0, kt.default)(s, (p, d) => {
            let h = n[d],
                {
                    action: y,
                    id: _,
                    mediaQueries: S = o.mediaQueryKeys
                } = h,
                {
                    actionListId: m
                } = y.config;
            PD(S, o.mediaQueryKeys) || t.dispatch(qo()), y.actionTypeId === Te.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(O => {
                let {
                    continuousParameterGroupId: C
                } = O, R = (0, et.default)(a, `${m}.continuousParameterGroups`, []), x = (0, eE.default)(R, ({
                    id: k
                }) => k === C), q = (O.smoothing || 0) / 100, V = (O.restingState || 0) / 100;
                x && p.forEach((k, W) => {
                    let Y = _ + Zo + W;
                    zD({
                        store: t,
                        eventStateKey: Y,
                        eventTarget: k,
                        eventId: _,
                        eventConfig: O,
                        actionListId: m,
                        parameterGroup: x,
                        smoothing: q,
                        restingValue: V
                    })
                })
            }), (y.actionTypeId === Te.GENERAL_START_ACTION || Qo(y.actionTypeId)) && lE({
                store: t,
                actionListId: m,
                eventId: _
            })
        });
        let u = p => {
                let {
                    ixSession: d
                } = t.getState();
                ZD(s, (h, y, _) => {
                    let S = n[y],
                        m = d.eventState[_],
                        {
                            action: w,
                            mediaQueries: O = o.mediaQueryKeys
                        } = S;
                    if (!Mr(O, d.mediaQueryKey)) return;
                    let C = (R = {}) => {
                        let x = i({
                            store: t,
                            element: h,
                            event: S,
                            eventConfig: R,
                            nativeEvent: p,
                            eventStateKey: _
                        }, m);
                        LD(x, m) || t.dispatch(Lo(_, x))
                    };
                    w.actionTypeId === Te.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(C) : C()
                })
            },
            l = (0, oE.default)(u, DD),
            g = ({
                target: p = document,
                types: d,
                throttle: h
            }) => {
                d.split(" ").filter(Boolean).forEach(y => {
                    let _ = h ? l : u;
                    p.addEventListener(y, _), t.dispatch(vr(p, [y, _]))
                })
            };
        Array.isArray(r) ? r.forEach(g) : typeof r == "string" && g(e)
    }

    function tF(e) {
        if (!MD) return;
        let t = {},
            n = "";
        for (let r in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[r], a = Xo(o);
            t[a] || (i === Fe.MOUSE_CLICK || i === Fe.MOUSE_SECOND_CLICK) && (t[a] = !0, n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n, document.body.appendChild(r)
        }
    }

    function lE({
        store: e,
        actionListId: t,
        eventId: n
    }) {
        let {
            ixData: r,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = r, s = a[n], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, et.default)(u, "actionItemGroups[0].actionItems", []),
                g = (0, et.default)(s, "mediaQueries", r.mediaQueryKeys);
            if (!Mr(g, i.mediaQueryKey)) return;
            l.forEach(p => {
                let {
                    config: d,
                    actionTypeId: h
                } = p, y = d ? .target ? .useEventTarget === !0 && d ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d, _ = Nr({
                    config: y,
                    event: s,
                    elementApi: Ae
                }), S = Dr(h);
                _.forEach(m => {
                    let w = S ? ea(h)(m, p) : null;
                    ta({
                        destination: Jo({
                            element: m,
                            actionItem: p,
                            elementApi: Ae
                        }, w),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: w
                    })
                })
            })
        }
    }

    function fE({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, kt.default)(t, n => {
            if (!n.continuous) {
                let {
                    actionListId: r,
                    verbose: i
                } = n;
                na(n, e), i && e.dispatch(Ut({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        })
    }

    function Bt({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && n ? vn(n, Lr) : null;
        (0, kt.default)(o, u => {
            let l = (0, et.default)(u, "actionItem.config.target.boundaryMode"),
                g = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && g) {
                if (s && l && !Vo(s, u.element)) return;
                na(u, e), u.verbose && e.dispatch(Ut({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function bn({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: r,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: g
        } = u, p = g[t] || {}, {
            mediaQueries: d = u.mediaQueryKeys
        } = p, h = (0, et.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: y,
            useFirstGroupAsInitialState: _
        } = h;
        if (!y || !y.length) return !1;
        o >= y.length && (0, et.default)(p, "config.loop") && (o = 0), o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && Qo(p.action ? .actionTypeId) ? p.config.delay : void 0,
            w = (0, et.default)(y, [o, "actionItems"], []);
        if (!w.length || !Mr(d, l.mediaQueryKey)) return !1;
        let O = l.hasBoundaryNodes && n ? vn(n, Lr) : null,
            C = TD(w),
            R = !1;
        return w.forEach((x, q) => {
            let {
                config: V,
                actionTypeId: k
            } = x, W = Dr(k), {
                target: Y
            } = V;
            if (!Y) return;
            let N = Y.boundaryMode ? O : null;
            Nr({
                config: V,
                event: p,
                eventTarget: n,
                elementRoot: N,
                elementApi: Ae
            }).forEach((P, U) => {
                let G = W ? ea(k)(P, x) : null,
                    Z = W ? ND(k)(P, x) : null;
                R = !0;
                let Q = C === q && U === 0,
                    L = bD({
                        element: P,
                        actionItem: x
                    }),
                    X = Jo({
                        element: P,
                        actionItem: x,
                        elementApi: Ae
                    }, G);
                ta({
                    store: e,
                    element: P,
                    actionItem: x,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: Q,
                    computedStyle: L,
                    destination: X,
                    immediate: a,
                    verbose: s,
                    pluginInstance: G,
                    pluginDuration: Z,
                    instanceDelay: m
                })
            })
        }), R
    }

    function ta(e) {
        let {
            store: t,
            computedStyle: n,
            ...r
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: l,
            eventId: g
        } = r, p = !u, d = _D(), {
            ixElements: h,
            ixSession: y,
            ixData: _
        } = t.getState(), S = vD(h, i), {
            refState: m
        } = h[S] || {}, w = Uo(i), O = y.reducedMotion && gi[o.actionTypeId], C;
        if (O && u) switch (_.events[g] ? .eventTypeId) {
            case Fe.MOUSE_MOVE:
            case Fe.MOUSE_MOVE_IN_VIEWPORT:
                C = l;
                break;
            default:
                C = .5;
                break
        }
        let R = AD(i, m, n, o, Ae, s);
        if (t.dispatch(No({
                instanceId: d,
                elementId: S,
                origin: R,
                refType: w,
                skipMotion: O,
                skipToValue: C,
                ...r
            })), dE(document.body, "ix2-animation-started", d), a) {
            nF(t, d);
            return
        }
        ht({
            store: t,
            select: ({
                ixInstances: x
            }) => x[d],
            onChange: pE
        }), p && t.dispatch(Ir(d, y.tick))
    }

    function na(e, t) {
        dE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: n,
            actionItem: r
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[n] || {};
        a === aE && xD(o, r, Ae), t.dispatch(Mo(e.id))
    }

    function dE(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function nF(e, t) {
        let {
            ixParameters: n
        } = e.getState();
        e.dispatch(Ir(t, 0)), e.dispatch(_r(performance.now(), n));
        let {
            ixInstances: r
        } = e.getState();
        pE(r[t], e)
    }

    function pE(e, t) {
        let {
            active: n,
            continuous: r,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: l,
            groupIndex: g,
            eventId: p,
            eventTarget: d,
            eventStateKey: h,
            actionListId: y,
            isCarrier: _,
            styleProp: S,
            verbose: m,
            pluginInstance: w
        } = e, {
            ixData: O,
            ixSession: C
        } = t.getState(), {
            events: R
        } = O, x = R && R[p] ? R[p] : {}, {
            mediaQueries: q = O.mediaQueryKeys
        } = x;
        if (Mr(q, C.mediaQueryKey) && (r || n || i)) {
            if (l || u === mD && i) {
                t.dispatch(Do(o, s, l, a));
                let {
                    ixElements: V
                } = t.getState(), {
                    ref: k,
                    refType: W,
                    refState: Y
                } = V[o] || {}, N = Y && Y[s];
                (W === aE || Dr(s)) && ID(k, Y, N, p, a, S, Ae, u, w)
            }
            if (i) {
                if (_) {
                    let V = bn({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: h,
                        actionListId: y,
                        groupIndex: g + 1,
                        verbose: m
                    });
                    m && !V && t.dispatch(Ut({
                        actionListId: y,
                        isPlaying: !1
                    }))
                }
                na(e, t)
            }
        }
    }
    var eE, et, tE, nE, rE, iE, kt, oE, Pr, yD, Qo, Zo, Lr, aE, mD, Zh, Nr, vD, Jo, ht, _D, ID, sE, TD, bD, AD, SD, OD, wD, Mr, xD, RD, CD, PD, LD, Dr, ea, ND, Jh, MD, DD, YD, QD, ZD, JD, $o = le(() => {
        "use strict";
        eE = ie(ki()), et = ie(er()), tE = ie(wp()), nE = ie(Jp()), rE = ie(tg()), iE = ie(rg()), kt = ie(cg()), oE = ie(Eg());
        we();
        Pr = ie(gt());
        Tr();
        Tg();
        Qh();
        yD = Object.keys(Ln), Qo = e => yD.includes(e), {
            COLON_DELIMITER: Zo,
            BOUNDARY_SELECTOR: Lr,
            HTML_ELEMENT: aE,
            RENDER_GENERAL: mD,
            W_MOD_IX: Zh
        } = ve, {
            getAffectedElements: Nr,
            getElementId: vD,
            getDestinationValues: Jo,
            observeStore: ht,
            getInstanceId: _D,
            renderHTMLElement: ID,
            clearAllStyles: sE,
            getMaxDurationItemIndex: TD,
            getComputedStyle: bD,
            getInstanceOrigin: AD,
            reduceListToGroup: SD,
            shouldNamespaceEventParameter: OD,
            getNamespacedParameterId: wD,
            shouldAllowMediaQuery: Mr,
            cleanupHTMLElement: xD,
            clearObjectCache: RD,
            stringifyTarget: CD,
            mediaQueriesEqual: PD,
            shallowEqual: LD
        } = Pr.IX2VanillaUtils, {
            isPluginType: Dr,
            createPluginInstance: ea,
            getPluginDuration: ND
        } = Pr.IX2VanillaPlugins, Jh = navigator.userAgent, MD = Jh.match(/iPad/i) || Jh.match(/iPhone/), DD = 12;
        YD = ["resize", "orientationchange"];
        QD = (e, t) => (0, nE.default)((0, iE.default)(e, t), rE.default), ZD = (e, t) => {
            (0, kt.default)(e, (n, r) => {
                n.forEach((i, o) => {
                    let a = r + Zo + o;
                    t(i, r, a)
                })
            })
        }, JD = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Nr({
                config: t,
                elementApi: Ae
            })
        }
    });
    var yE = f(ia => {
        "use strict";
        Object.defineProperty(ia, "__esModule", {
            value: !0
        });

        function rF(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
        rF(ia, {
            actions: function() {
                return aF
            },
            destroy: function() {
                return EE
            },
            init: function() {
                return lF
            },
            setEnv: function() {
                return cF
            },
            store: function() {
                return Gr
            }
        });
        var iF = fi(),
            oF = sF((up(), Ue(sp))),
            ra = ($o(), Ue(gE)),
            aF = uF((Tr(), Ue(mg)));

        function sF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function hE(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (hE = function(r) {
                return r ? n : t
            })(e)
        }

        function uF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var n = hE(t);
            if (n && n.has(e)) return n.get(e);
            var r = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e, n && n.set(e, r), r
        }
        var Gr = (0, iF.createStore)(oF.default);

        function cF(e) {
            e() && (0, ra.observeRequests)(Gr)
        }

        function lF(e) {
            EE(), (0, ra.startEngine)({
                store: Gr,
                rawData: e,
                allowEvents: !0
            })
        }

        function EE() {
            (0, ra.stopEngine)(Gr)
        }
    });
    var IE = f((fX, _E) => {
        "use strict";
        var mE = ke(),
            vE = yE();
        vE.setEnv(mE.env);
        mE.define("ix2", _E.exports = function() {
            return vE
        })
    });
    var bE = f((dX, TE) => {
        "use strict";
        var Ht = ke();
        Ht.define("links", TE.exports = function(e, t) {
            var n = {},
                r = e(window),
                i, o = Ht.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                g = /\/$/,
                p, d;
            n.ready = n.design = n.preview = h;

            function h() {
                i = o && Ht.env("design"), d = Ht.env("slug") || a.pathname || "", Ht.scroll.off(_), p = [];
                for (var m = document.links, w = 0; w < m.length; ++w) y(m[w]);
                p.length && (Ht.scroll.on(_), _())
            }

            function y(m) {
                if (!m.getAttribute("hreflang")) {
                    var w = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = w, !(w.indexOf(":") >= 0)) {
                        var O = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var C = e(s.hash);
                            C.length && p.push({
                                link: O,
                                sec: C,
                                active: !1
                            });
                            return
                        }
                        if (!(w === "#" || w === "")) {
                            var R = s.href === a.href || w === d || l.test(w) && g.test(d);
                            S(O, u, R)
                        }
                    }
                }
            }

            function _() {
                var m = r.scrollTop(),
                    w = r.height();
                t.each(p, function(O) {
                    if (!O.link.attr("hreflang")) {
                        var C = O.link,
                            R = O.sec,
                            x = R.offset().top,
                            q = R.outerHeight(),
                            V = w * .5,
                            k = R.is(":visible") && x + q - V >= m && x + V <= m + w;
                        O.active !== k && (O.active = k, S(C, u, k))
                    }
                })
            }

            function S(m, w, O) {
                var C = m.hasClass(w);
                O && C || !O && !C || (O ? m.addClass(w) : m.removeClass(w))
            }
            return n
        })
    });
    var SE = f((pX, AE) => {
        "use strict";
        var Xr = ke();
        Xr.define("scroll", AE.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                n = window.location,
                r = y() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                    window.setTimeout(N, 15)
                },
                u = Xr.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                g = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(d));

            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function S(N) {
                return _.test(N.hash) && N.host + N.pathname === n.host + n.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function w() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function O(N, T) {
                var P;
                switch (T) {
                    case "add":
                        P = N.attr("tabindex"), P ? N.attr("data-wf-tabindex-swap", P) : N.attr("tabindex", "-1");
                        break;
                    case "remove":
                        P = N.attr("data-wf-tabindex-swap"), P ? (N.attr("tabindex", P), N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                        break
                }
                N.toggleClass("wf-force-outline-none", T === "add")
            }

            function C(N) {
                var T = N.currentTarget;
                if (!(Xr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))) {
                    var P = S(T) ? T.hash : "";
                    if (P !== "") {
                        var U = e(P);
                        U.length && (N && (N.preventDefault(), N.stopPropagation()), R(P, N), window.setTimeout(function() {
                            x(U, function() {
                                O(U, "add"), U.get(0).focus({
                                    preventScroll: !0
                                }), O(U, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }

            function R(N) {
                if (n.hash !== N && r && r.pushState && !(Xr.env.chrome && n.protocol === "file:")) {
                    var T = r.state && r.state.hash;
                    T !== N && r.pushState({
                        hash: N
                    }, "", N)
                }
            }

            function x(N, T) {
                var P = i.scrollTop(),
                    U = q(N);
                if (P !== U) {
                    var G = V(N, P, U),
                        Z = Date.now(),
                        Q = function() {
                            var L = Date.now() - Z;
                            window.scroll(0, k(P, U, L, G)), L <= G ? s(Q) : typeof T == "function" && T()
                        };
                    s(Q)
                }
            }

            function q(N) {
                var T = e(l),
                    P = T.css("position") === "fixed" ? T.outerHeight() : 0,
                    U = N.offset().top - P;
                if (N.data("scroll") === "mid") {
                    var G = i.height() - P,
                        Z = N.outerHeight();
                    Z < G && (U -= Math.round((G - Z) / 2))
                }
                return U
            }

            function V(N, T, P) {
                if (w()) return 0;
                var U = 1;
                return a.add(N).each(function(G, Z) {
                    var Q = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(Q) && Q >= 0 && (U = Q)
                }), (472.143 * Math.log(Math.abs(T - P) + 125) - 2e3) * U
            }

            function k(N, T, P, U) {
                return P > U ? T : N + (T - N) * W(P / U)
            }

            function W(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }

            function Y() {
                var {
                    WF_CLICK_EMPTY: N,
                    WF_CLICK_SCROLL: T
                } = t;
                o.on(T, p, C), o.on(N, g, function(P) {
                    P.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: Y
            }
        })
    });
    var wE = f((gX, OE) => {
        "use strict";
        var fF = ke();
        fF.define("touch", OE.exports = function(e) {
            var t = {},
                n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new r(o) : null
            };

            function r(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, g;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", h, !1), o.addEventListener("touchcancel", y, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", h, !1), o.addEventListener("mouseout", y, !1);

                function p(S) {
                    var m = S.touches;
                    m && m.length > 1 || (a = !0, m ? (s = !0, l = m[0].clientX) : l = S.clientX, g = l)
                }

                function d(S) {
                    if (a) {
                        if (s && S.type === "mousemove") {
                            S.preventDefault(), S.stopPropagation();
                            return
                        }
                        var m = S.touches,
                            w = m ? m[0].clientX : S.clientX,
                            O = w - g;
                        g = w, Math.abs(O) > u && n && String(n()) === "" && (i("swipe", S, {
                            direction: O > 0 ? "right" : "left"
                        }), y())
                    }
                }

                function h(S) {
                    if (a && (a = !1, s && S.type === "mouseup")) {
                        S.preventDefault(), S.stopPropagation(), s = !1;
                        return
                    }
                }

                function y() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", h, !1), o.removeEventListener("touchcancel", y, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", h, !1), o.removeEventListener("mouseout", y, !1), o = null
                }
                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var xE = f(oa => {
        "use strict";
        Object.defineProperty(oa, "__esModule", {
            value: !0
        });
        Object.defineProperty(oa, "default", {
            enumerable: !0,
            get: function() {
                return dF
            }
        });

        function dF(e, t, n, r, i, o, a, s, u, l, g, p, d) {
            return function(h) {
                e(h);
                var y = h.form,
                    _ = {
                        name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                        pageId: y.attr("data-wf-page-id") || "",
                        elementId: y.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: n.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                        trackingCookies: r()
                    };
                let S = y.attr("data-wf-flow");
                S && (_.wfFlow = S), i(h);
                var m = o(y, _.fields);
                if (m) return a(m);
                if (_.fileUploads = s(y), u(h), !l) {
                    g(h);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(w) {
                    w && w.code === 200 && (h.success = !0), g(h)
                }).fail(function() {
                    g(h)
                })
            }
        }
    });
    var CE = f((EX, RE) => {
        "use strict";
        var Vr = ke(),
            pF = (e, t, n, r) => {
                let i = document.createElement("div");
                t.appendChild(i), turnstile.render(i, {
                    sitekey: e,
                    callback: function(o) {
                        return n(o)
                    },
                    "error-callback": function() {
                        r()
                    }
                })
            };
        Vr.define("forms", RE.exports = function(e, t) {
            var n = {},
                r = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, l = /e(-)?mail/i,
                g = /^\S+@\S+$/,
                p = window.alert,
                d = Vr.env(),
                h, y, _, S = /list-manage[1-9]?.com/i,
                m = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            n.ready = n.design = n.preview = function() {
                w(), !d && !h && C()
            };

            function w() {
                u = e("html").attr("data-wf-site"), y = "https://webflow.com/api/v1/form/" + u, a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${y}/signFile`, i = e(s + " form"), i.length && i.each(O)
            }

            function O(L, X) {
                var H = e(X),
                    D = e.data(X, s);
                D || (D = e.data(X, s, {
                    form: H
                })), R(D);
                var M = H.closest("div.w-form");
                D.done = M.find("> .w-form-done"), D.fail = M.find("> .w-form-fail"), D.fileUploads = M.find(".w-file-upload"), D.fileUploads.each(function(oe) {
                    G(oe, D)
                });
                var K = D.form.attr("aria-label") || D.form.attr("data-name") || "Form";
                D.done.attr("aria-label") || D.form.attr("aria-label", K), D.done.attr("tabindex", "-1"), D.done.attr("role", "region"), D.done.attr("aria-label") || D.done.attr("aria-label", K + " success"), D.fail.attr("tabindex", "-1"), D.fail.attr("role", "region"), D.fail.attr("aria-label") || D.fail.attr("aria-label", K + " failure");
                var te = D.action = H.attr("action");
                if (D.handler = null, D.redirect = H.attr("data-redirect"), S.test(te)) {
                    D.handler = T;
                    return
                }
                if (!te) {
                    if (u) {
                        D.handler = (() => {
                            let oe = xE().default;
                            return oe(R, o, Vr, W, U, q, p, V, x, u, P, e, y)
                        })();
                        return
                    }
                    m()
                }
            }

            function C() {
                h = !0;
                let L = r.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
                if (L) {
                    let j = document.createElement("script");
                    j.src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(j), j.onload = () => {
                        r.on("submit", s + " form", function(ne) {
                            var ge = e.data(this, s);
                            x(ge), ge.handler && (ge.evt = ne, ne.preventDefault(), pF(L, this, fe => ge.handler({ ...ge,
                                turnstileToken: fe
                            }), () => {
                                ge.fail.toggle(!0), ge.fail.focus(), R(ge)
                            }))
                        })
                    }
                } else r.on("submit", s + " form", function(j) {
                    var ne = e.data(this, s);
                    ne.handler && (ne.evt = j, ne.handler(ne))
                });
                let X = ".w-checkbox-input",
                    H = ".w-radio-input",
                    D = "w--redirected-checked",
                    M = "w--redirected-focus",
                    K = "w--redirected-focus-visible",
                    te = ":focus-visible, [data-wf-focus-visible]",
                    oe = [
                        ["checkbox", X],
                        ["radio", H]
                    ];
                r.on("change", s + ' form input[type="checkbox"]:not(' + X + ")", j => {
                    e(j.target).siblings(X).toggleClass(D)
                }), r.on("change", s + ' form input[type="radio"]', j => {
                    e(`input[name="${j.target.name}"]:not(${X})`).map((ge, fe) => e(fe).siblings(H).removeClass(D));
                    let ne = e(j.target);
                    ne.hasClass("w-radio-input") || ne.siblings(H).addClass(D)
                }), oe.forEach(([j, ne]) => {
                    r.on("focus", s + ` form input[type="${j}"]:not(` + ne + ")", ge => {
                        e(ge.target).siblings(ne).addClass(M), e(ge.target).filter(te).siblings(ne).addClass(K)
                    }), r.on("blur", s + ` form input[type="${j}"]:not(` + ne + ")", ge => {
                        e(ge.target).siblings(ne).removeClass(`${M} ${K}`)
                    })
                })
            }

            function R(L) {
                var X = L.btn = L.form.find(':input[type="submit"]');
                L.wait = L.btn.attr("data-wait") || null, L.success = !1, X.prop("disabled", !1), L.label && X.val(L.label)
            }

            function x(L) {
                var X = L.btn,
                    H = L.wait;
                X.prop("disabled", !0), H && (L.label = X.val(), X.val(H))
            }

            function q(L, X) {
                var H = null;
                return X = X || {}, L.find(':input:not([type="submit"]):not([type="file"])').each(function(D, M) {
                    var K = e(M),
                        te = K.attr("type"),
                        oe = K.attr("data-name") || K.attr("name") || "Field " + (D + 1);
                    oe = encodeURIComponent(oe);
                    var j = K.val();
                    if (te === "checkbox") j = K.is(":checked");
                    else if (te === "radio") {
                        if (X[oe] === null || typeof X[oe] == "string") return;
                        j = L.find('input[name="' + K.attr("name") + '"]:checked').val() || null
                    }
                    typeof j == "string" && (j = e.trim(j)), X[oe] = j, H = H || Y(K, te, oe, j)
                }), H
            }

            function V(L) {
                var X = {};
                return L.find(':input[type="file"]').each(function(H, D) {
                    var M = e(D),
                        K = M.attr("data-name") || M.attr("name") || "File " + (H + 1),
                        te = M.attr("data-value");
                    typeof te == "string" && (te = e.trim(te)), X[K] = te
                }), X
            }
            let k = {
                _mkto_trk: "marketo"
            };

            function W() {
                return document.cookie.split("; ").reduce(function(X, H) {
                    let D = H.split("="),
                        M = D[0];
                    if (M in k) {
                        let K = k[M],
                            te = D.slice(1).join("=");
                        X[K] = te
                    }
                    return X
                }, {})
            }

            function Y(L, X, H, D) {
                var M = null;
                return X === "password" ? M = "Passwords cannot be submitted." : L.attr("required") ? D ? l.test(L.attr("type")) && (g.test(D) || (M = "Please enter a valid email address for: " + H)) : M = "Please fill out the required field: " + H : H === "g-recaptcha-response" && !D && (M = "Please confirm you\u2019re not a robot."), M
            }

            function N(L) {
                U(L), P(L)
            }

            function T(L) {
                R(L);
                var X = L.form,
                    H = {};
                if (/^https/.test(o.href) && !/^https/.test(L.action)) {
                    X.attr("method", "post");
                    return
                }
                U(L);
                var D = q(X, H);
                if (D) return p(D);
                x(L);
                var M;
                t.each(H, function(j, ne) {
                    l.test(ne) && (H.EMAIL = j), /^((full[ _-]?)?name)$/i.test(ne) && (M = j), /^(first[ _-]?name)$/i.test(ne) && (H.FNAME = j), /^(last[ _-]?name)$/i.test(ne) && (H.LNAME = j)
                }), M && !H.FNAME && (M = M.split(" "), H.FNAME = M[0], H.LNAME = H.LNAME || M[1]);
                var K = L.action.replace("/post?", "/post-json?") + "&c=?",
                    te = K.indexOf("u=") + 2;
                te = K.substring(te, K.indexOf("&", te));
                var oe = K.indexOf("id=") + 3;
                oe = K.substring(oe, K.indexOf("&", oe)), H["b_" + te + "_" + oe] = "", e.ajax({
                    url: K,
                    data: H,
                    dataType: "jsonp"
                }).done(function(j) {
                    L.success = j.result === "success" || /already/.test(j.msg), L.success || console.info("MailChimp error: " + j.msg), P(L)
                }).fail(function() {
                    P(L)
                })
            }

            function P(L) {
                var X = L.form,
                    H = L.redirect,
                    D = L.success;
                if (D && H) {
                    Vr.location(H);
                    return
                }
                L.done.toggle(D), L.fail.toggle(!D), D ? L.done.focus() : L.fail.focus(), X.toggle(!D), R(L)
            }

            function U(L) {
                L.evt && L.evt.preventDefault(), L.evt = null
            }

            function G(L, X) {
                if (!X.fileUploads || !X.fileUploads[L]) return;
                var H, D = e(X.fileUploads[L]),
                    M = D.find("> .w-file-upload-default"),
                    K = D.find("> .w-file-upload-uploading"),
                    te = D.find("> .w-file-upload-success"),
                    oe = D.find("> .w-file-upload-error"),
                    j = M.find(".w-file-upload-input"),
                    ne = M.find(".w-file-upload-label"),
                    ge = ne.children(),
                    fe = oe.find(".w-file-upload-error-msg"),
                    tt = te.find(".w-file-upload-file"),
                    Wt = te.find(".w-file-remove-link"),
                    zt = tt.find(".w-file-upload-file-name"),
                    Kt = fe.attr("data-w-size-error"),
                    Xe = fe.attr("data-w-type-error"),
                    Ur = fe.attr("data-w-generic-error");
                if (d || ne.on("click keydown", function(v) {
                        v.type === "keydown" && v.which !== 13 && v.which !== 32 || (v.preventDefault(), j.click())
                    }), ne.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), Wt.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), d) j.on("click", function(v) {
                    v.preventDefault()
                }), ne.on("click", function(v) {
                    v.preventDefault()
                }), ge.on("click", function(v) {
                    v.preventDefault()
                });
                else {
                    Wt.on("click keydown", function(v) {
                        if (v.type === "keydown") {
                            if (v.which !== 13 && v.which !== 32) return;
                            v.preventDefault()
                        }
                        j.removeAttr("data-value"), j.val(""), zt.html(""), M.toggle(!0), te.toggle(!1), ne.focus()
                    }), j.on("change", function(v) {
                        H = v.target && v.target.files && v.target.files[0], H && (M.toggle(!1), oe.toggle(!1), K.toggle(!0), K.focus(), zt.text(H.name), b() || x(X), X.fileUploads[L].uploading = !0, Z(H, E))
                    });
                    var An = ne.outerHeight();
                    j.height(An), j.width(1)
                }

                function c(v) {
                    var A = v.responseJSON && v.responseJSON.msg,
                        B = Ur;
                    typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0 ? B = Xe : typeof A == "string" && A.indexOf("MaxFileSizeError") === 0 && (B = Kt), fe.text(B), j.removeAttr("data-value"), j.val(""), K.toggle(!1), M.toggle(!0), oe.toggle(!0), oe.focus(), X.fileUploads[L].uploading = !1, b() || R(X)
                }

                function E(v, A) {
                    if (v) return c(v);
                    var B = A.fileName,
                        $ = A.postData,
                        ue = A.fileId,
                        F = A.s3Url;
                    j.attr("data-value", ue), Q(F, $, H, B, I)
                }

                function I(v) {
                    if (v) return c(v);
                    K.toggle(!1), te.css("display", "inline-block"), te.focus(), X.fileUploads[L].uploading = !1, b() || R(X)
                }

                function b() {
                    var v = X.fileUploads && X.fileUploads.toArray() || [];
                    return v.some(function(A) {
                        return A.uploading
                    })
                }
            }

            function Z(L, X) {
                var H = new URLSearchParams({
                    name: L.name,
                    size: L.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${H}`,
                    crossDomain: !0
                }).done(function(D) {
                    X(null, D)
                }).fail(function(D) {
                    X(D)
                })
            }

            function Q(L, X, H, D, M) {
                var K = new FormData;
                for (var te in X) K.append(te, X[te]);
                K.append("file", H, D), e.ajax({
                    type: "POST",
                    url: L,
                    data: K,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(oe) {
                    M(oe)
                })
            }
            return n
        })
    });
    va();
    Ia();
    ba();
    Oa();
    Na();
    IE();
    bE();
    SE();
    wE();
    CE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|b60fd352-a0aa-70fb-ab78-6a5d05bbacd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|b60fd352-a0aa-70fb-ab78-6a5d05bbacd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1677897610999
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678053945649
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678053945649
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678055746351
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678055746351
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|3810876f-88a5-c72e-2e50-9f9ee6af2d4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|3810876f-88a5-c72e-2e50-9f9ee6af2d4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678342203489
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|3810876f-88a5-c72e-2e50-9f9ee6af2d4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|3810876f-88a5-c72e-2e50-9f9ee6af2d4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678342203489
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "ee1e9c3e-a1c6-2190-15b3-1daea0409ed7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ee1e9c3e-a1c6-2190-15b3-1daea0409ed7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679040970811
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "ee1e9c3e-a1c6-2190-15b3-1daea0409ed7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "ee1e9c3e-a1c6-2190-15b3-1daea0409ed7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679040970811
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681276177666
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681276177666
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681276177666
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5563a3cb-73dd-a799-e562-4184cbf0689f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681276177666
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681417982799
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681417982799
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681417982799
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681417982799
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1681852791131
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682013453876
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682013453876
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682013453876
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682013453876
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6402a76850984809244a5491|4be31747-e192-97f3-7f0d-748497f1086d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|4be31747-e192-97f3-7f0d-748497f1086d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682734472567
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|4576fc15-9dbb-f71b-e876-abcad10fab7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|4576fc15-9dbb-f71b-e876-abcad10fab7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682734960038
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682891056718
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682891056718
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682921630939
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682921630939
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|b60fd352-a0aa-70fb-ab78-6a5d05bbacd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|b60fd352-a0aa-70fb-ab78-6a5d05bbacd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683306803966
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|4576fc15-9dbb-f71b-e876-abcad10fab7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|4576fc15-9dbb-f71b-e876-abcad10fab7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683307105136
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683310217631
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683311188795
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683311909165
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683315798623
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|81bb28b3-0cac-8b9c-c382-04fd4917df75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683316111189
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|cb198c5c-8f1f-0bfc-7f66-0461e3dc703c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683316322648
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683317375602
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683317653004
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683440165119
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683591599224
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683591599225
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683620409474
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|1c98ec29-4361-fca3-2737-cb524bb470b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683620409475
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683652423864
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683652423864
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683652423864
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491|2792ad2a-87dc-29f6-4fc0-1fede7706894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683652423864
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683709698547
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|4aafda63-d1f2-524d-d498-c936c4687b33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683709698548
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742406125
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742406125
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742406125
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742406125
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742425211
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742425211
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742425211
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683742425211
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683790089298
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683790089298
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683790089298
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683790089298
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686066432557
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686112389226
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686112389228
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416d99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5|799aa54d-e1f4-ce89-fcc5-18fd48416da8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686156990858
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686197517500
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686197517500
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686197517500
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686197517500
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686197580718
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|3d9ce843-400e-c598-e207-61609749c035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201198434
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-213"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686201589847
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686237392238
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686280889093
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686376173520
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686376911362
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686376977624
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686376986432
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|68730f40-0368-57e9-0865-8904ebd1b022",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9|efd5c51e-748e-280d-c20c-932a76dbe245",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6484146ba33c9251581230b9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686377580015
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686504062388
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686504062388
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686504062388
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686504062388
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505436269
        },
        "e-292": {
            "id": "e-292",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-291"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505436269
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505436269
        },
        "e-295": {
            "id": "e-295",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505436269
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505502922
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-306"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505502922
        },
        "e-306": {
            "id": "e-306",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-305"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505502922
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-308"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686505502922
        },
        "e-309": {
            "id": "e-309",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-310"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63fee6e571f3fd170a224efa|7a203214-350c-c54a-5251-c2245e043fe3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686509879452
        },
        "e-311": {
            "id": "e-311",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-312"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|d064b528-ba6b-ba7c-205a-7434d828cc8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686510258680
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481f0d04925598d43d8c1d7|86583f65-864a-aba1-7190-716d7087efe9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686510279208
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688451164303
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-315"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688451164303
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6402a76850984809244a5491",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688592782649
        },
        "e-321": {
            "id": "e-321",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-322"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688598784949
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d92e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688598784952
        },
        "e-333": {
            "id": "e-333",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-334"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688921724811
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-333"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688921724811
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-338"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688921812074
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688921812074
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689092252468
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|daff05a0-c6aa-4fe8-b1ea-dd1f08fa7bd7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689092252472
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-342"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689092480297
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689092480300
        },
        "e-345": {
            "id": "e-345",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-346"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689296111711
        },
        "e-346": {
            "id": "e-346",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-345"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689296111711
        },
        "e-347": {
            "id": "e-347",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689296440088
        },
        "e-348": {
            "id": "e-348",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-347"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689296440124
        },
        "e-351": {
            "id": "e-351",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-352"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689707719154
        },
        "e-352": {
            "id": "e-352",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-351"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689707719154
        },
        "e-353": {
            "id": "e-353",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-354"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689707826588
        },
        "e-354": {
            "id": "e-354",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-353"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e13f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689707826590
        },
        "e-355": {
            "id": "e-355",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-356"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689739781919
        },
        "e-356": {
            "id": "e-356",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-355"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689739781919
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689740042954
        },
        "e-358": {
            "id": "e-358",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-357"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d3fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689740042956
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-359"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "63dcb6e1a80e9435e330f4c5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690698267422
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "nav-to-info",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-indicator-pill",
                            "selectorGuids": ["c60f583b-1fac-0cbe-71b8-6ff40f5da271"]
                        },
                        "xValue": 86,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-indicator-glow",
                            "selectorGuids": ["eed83ad3-7ed1-781f-cbef-9d35c594115a"]
                        },
                        "xValue": 88,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".swipe-indicator-wrapper",
                            "selectorGuids": ["77f87003-7937-c0f0-95f6-2bf73234b0d2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677895870041
        },
        "a-5": {
            "id": "a-5",
            "title": "page-load-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 1400,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678053952382
        },
        "a-43": {
            "id": "a-43",
            "title": "hero-slide-up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|87a46662-54f3-370f-de15-afe2ed7aa161"
                        },
                        "yValue": 64,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|87a46662-54f3-370f-de15-afe2ed7aa161"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".glare-item-top.outer-edge",
                            "selectorGuids": ["c957d7c0-1bb9-bb80-0472-27090a619083", "57f58893-0e6f-3092-0274-0996c0a12e1d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".glare-item-top.inner-edge",
                            "selectorGuids": ["c957d7c0-1bb9-bb80-0472-27090a619083", "5c132abf-ef2d-ade0-9009-48f7e79fe365"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|e5c05ec2-ee56-ccf5-1f20-8a056c33fa25"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|87a46662-54f3-370f-de15-afe2ed7aa161"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|87a46662-54f3-370f-de15-afe2ed7aa161"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outQuint",
                        "duration": 2000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|e5c05ec2-ee56-ccf5-1f20-8a056c33fa25"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".glare-item-top.outer-edge",
                            "selectorGuids": ["c957d7c0-1bb9-bb80-0472-27090a619083", "57f58893-0e6f-3092-0274-0996c0a12e1d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-43-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1200,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".glare-item-top.inner-edge",
                            "selectorGuids": ["c957d7c0-1bb9-bb80-0472-27090a619083", "5c132abf-ef2d-ade0-9009-48f7e79fe365"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683584020491
        },
        "a-46": {
            "id": "a-46",
            "title": "info-slide-up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|ebb7b94a-cfb8-2119-3fb7-43900efa7861"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|ebb7b94a-cfb8-2119-3fb7-43900efa7861"
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d642383d"
                        },
                        "yValue": 88,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d642383d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d6423830"
                        },
                        "yValue": 88,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d6423830"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "id": "6402a76850984809244a5491|ebb7b94a-cfb8-2119-3fb7-43900efa7861"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "6402a76850984809244a5491|ebb7b94a-cfb8-2119-3fb7-43900efa7861"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d642383d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d642383d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-46-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d6423830"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "id": "6402a76850984809244a5491|e76561cf-25f4-3924-12f3-01e4d6423830"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683616154817
        },
        "a-6": {
            "id": "a-6",
            "title": "hide-mobile-scroll-indicator",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".swipe-indicator-wrapper",
                            "selectorGuids": ["77f87003-7937-c0f0-95f6-2bf73234b0d2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".swipe-indicator-wrapper",
                            "selectorGuids": ["77f87003-7937-c0f0-95f6-2bf73234b0d2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678342260153
        },
        "a-7": {
            "id": "a-7",
            "title": "reveal-mobile-scroll-indicator",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "selector": ".swipe-indicator-wrapper",
                            "selectorGuids": ["77f87003-7937-c0f0-95f6-2bf73234b0d2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678342260153
        },
        "a-9": {
            "id": "a-9",
            "title": "hide-mobile-menu-on-footer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1679040982269
        },
        "a-10": {
            "id": "a-10",
            "title": "show-mobile-menu-on-footer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".section-nav-mobile",
                            "selectorGuids": ["18ee2146-4a5b-566e-7922-e1d56083e4fd"]
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1679040982269
        },
        "a-15": {
            "id": "a-15",
            "title": "switch-activate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64360ee5259cd09cc418ab78|ab068811-59ed-1ead-46b5-2e276418bef8"
                        },
                        "globalSwatchId": "",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 0.05
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "globalSwatchId": "0fef959f",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "xValue": 20,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64360ee5259cd09cc418ab78|ab068811-59ed-1ead-46b5-2e276418bef8"
                        },
                        "globalSwatchId": "0fef959f",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 1
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "globalSwatchId": "486d815c",
                        "rValue": 16,
                        "bValue": 16,
                        "gValue": 16,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1681269620231
        },
        "a-16": {
            "id": "a-16",
            "title": "switch-deactivate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "globalSwatchId": "0fef959f",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64360ee5259cd09cc418ab78|ab068811-59ed-1ead-46b5-2e276418bef8"
                        },
                        "globalSwatchId": "",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 0.05
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".switch-handle",
                            "selectorGuids": ["3c7fd456-8bf5-5c9f-ce5f-009a041430d6"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1681269620231
        },
        "a-19": {
            "id": "a-19",
            "title": "media-switch-stadiabt-finalflow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|b3358fb2-cc40-da0c-3cf6-4f79afc2cc1e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|b3358fb2-cc40-da0c-3cf6-4f79afc2cc1e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1681276263414
        },
        "a-18": {
            "id": "a-18",
            "title": "media-default-sandbox",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "selector": ".image-default",
                            "selectorGuids": ["79469575-c1c1-696c-b0a9-22e6c03e73c6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1681271137871
        },
        "a-23": {
            "id": "a-23",
            "title": "media-switch-illustrationstatus",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1681418093650
        },
        "a-24": {
            "id": "a-24",
            "title": "media-default-illustrationstatus",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|5475d9e6-8fec-9684-cba2-b30138ff029f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1681418093650
        },
        "a-29": {
            "id": "a-29",
            "title": "desktop-hero-arrow-loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "value": 0.2,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "yValue": 24,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|657cd5a2-6e44-e2a2-e8e0-d1144b4099e1"
                        },
                        "value": 0.4,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1681852805434
        },
        "a-30": {
            "id": "a-30",
            "title": "media-switch-card",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1681955689898
        },
        "a-31": {
            "id": "a-31",
            "title": "media-default-card",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|0000efd3-eb3b-80e2-a0f2-d283633bfe9d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1681955689898
        },
        "a-2": {
            "id": "a-2",
            "title": "nav-to-work",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav-indicator-pill.info",
                            "selectorGuids": ["c60f583b-1fac-0cbe-71b8-6ff40f5da271", "9b6915f0-f70a-a2c4-b2a9-62e9528c703f"]
                        },
                        "xValue": -86,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-indicator-glow.info",
                            "selectorGuids": ["eed83ad3-7ed1-781f-cbef-9d35c594115a", "92096ed7-98fe-5827-2f1e-b6bc69397027"]
                        },
                        "xValue": -88,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1677897748736
        },
        "a-33": {
            "id": "a-33",
            "title": "project-card-hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card-colour",
                            "selectorGuids": ["d3282d23-0376-efba-6ef2-95afcaf78b70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbnail",
                            "selectorGuids": ["77d25a44-09b8-3677-4a75-db92b56c42a6"]
                        },
                        "yValue": -24,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-projectcard-arrow",
                            "selectorGuids": ["8639dfc4-8957-f8dd-7b63-a2be9df6fb36"]
                        },
                        "xValue": 10,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card-colour",
                            "selectorGuids": ["d3282d23-0376-efba-6ef2-95afcaf78b70"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1682891122609
        },
        "a-34": {
            "id": "a-34",
            "title": "project-card-unhover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbnail",
                            "selectorGuids": ["77d25a44-09b8-3677-4a75-db92b56c42a6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-projectcard-arrow",
                            "selectorGuids": ["8639dfc4-8957-f8dd-7b63-a2be9df6fb36"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card-colour",
                            "selectorGuids": ["d3282d23-0376-efba-6ef2-95afcaf78b70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1682891122609
        },
        "a-35": {
            "id": "a-35",
            "title": "page-load-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".loading-overlay",
                            "selectorGuids": ["2d292d3d-abd6-127f-714a-0872080b47d8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1678053952382
        },
        "a-36": {
            "id": "a-36",
            "title": "top-nav-upwards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-nav",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".section-nav",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28"]
                        },
                        "yValue": -80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".section-nav",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683316123970
        },
        "a-37": {
            "id": "a-37",
            "title": "project-top-nav-downwards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "yValue": -80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683317411177
        },
        "a-38": {
            "id": "a-38",
            "title": "project-top-nav-upwards-main-nav-downwards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-nav.pseudo",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28", "88dbc2a8-594d-5045-e459-3060aba109db"]
                        },
                        "yValue": -300,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section-nav.pseudo",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28", "88dbc2a8-594d-5045-e459-3060aba109db"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "yValue": -80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".section-nav.pseudo",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28", "88dbc2a8-594d-5045-e459-3060aba109db"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 800,
                        "target": {
                            "selector": ".section-nav.pseudo",
                            "selectorGuids": ["838d34ec-ca41-1cc4-22cb-f602853a7c28", "88dbc2a8-594d-5045-e459-3060aba109db"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683317411177
        },
        "a-42": {
            "id": "a-42",
            "title": "sidebar-fade-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".sidebar-content",
                            "selectorGuids": ["6900379d-17a8-01d6-004e-8409c90ffb7c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1500,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".sidebar-content",
                            "selectorGuids": ["6900379d-17a8-01d6-004e-8409c90ffb7c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683440183725
        },
        "a-44": {
            "id": "a-44",
            "title": "open-mobile-menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-44-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-44-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 36,
                        "yValue": -24,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-44-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "zValue": null,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-44-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-44-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "zValue": null,
                        "locked": true
                    }
                }, {
                    "id": "a-44-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683591628753
        },
        "a-45": {
            "id": "a-45",
            "title": "close-mobile-menu",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 36,
                        "yValue": -24,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "zValue": null,
                        "locked": true
                    }
                }, {
                    "id": "a-45-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-popup-menu",
                            "selectorGuids": ["bcf3ebd2-d551-7b79-5dd9-9828c27931a3"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683591628753
        },
        "a-49": {
            "id": "a-49",
            "title": "spin-to-close-icon",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -360,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683620417288
        },
        "a-50": {
            "id": "a-50",
            "title": "spin-to-contacts-icon",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact-close",
                            "selectorGuids": ["9b5dcfed-eb80-d890-f58f-5b27b0343c82"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-contact",
                            "selectorGuids": ["8f29dd33-e355-343c-1aff-f5cb9c1a477d"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683620417288
        },
        "a-52": {
            "id": "a-52",
            "title": "back-arrow-move",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-back-to-home",
                            "selectorGuids": ["e1957f2e-f249-ae70-1a9b-b0d763a8fe35"]
                        },
                        "xValue": -4,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683709650470
        },
        "a-53": {
            "id": "a-53",
            "title": "back-arrow-return",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-back-to-home",
                            "selectorGuids": ["e1957f2e-f249-ae70-1a9b-b0d763a8fe35"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683709650470
        },
        "a-54": {
            "id": "a-54",
            "title": "media-switch-stadiabt-boilerplate-a",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41ca"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41ca"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683751510440
        },
        "a-55": {
            "id": "a-55",
            "title": "media-default-stadiabt-boilerplate-a",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|1fafe64c-9094-b3c7-cb0d-1f567abc41ca"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683751510440
        },
        "a-56": {
            "id": "a-56",
            "title": "media-switch-stadiabt-boilerplate-b",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683751709590
        },
        "a-57": {
            "id": "a-57",
            "title": "media-default-stadiabt-boilerplate-b",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|2d9b0dd2-d81e-f59c-ce08-cc03b32f925e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683751709590
        },
        "a-58": {
            "id": "a-58",
            "title": "media-switch-stadiabt-illustration-style",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c78"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c78"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683790256125
        },
        "a-59": {
            "id": "a-59",
            "title": "media-default-stadiabt-illustration-style",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "63fee6e571f3fd170a224efa|97034c6a-806a-92a6-0051-1926d4754c78"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683790256125
        },
        "a-60": {
            "id": "a-60",
            "title": "portrait-scroll-loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "value": 0.4,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1600,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1600,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|639c1ddc-5c21-49e1-78f5-0a8638af6d6f"
                        },
                        "value": 0.4,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686066442824
        },
        "a-61": {
            "id": "a-61",
            "title": "portrait-load-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|c0b7da05-9e29-47c9-f176-90a460b08cbc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|c0b7da05-9e29-47c9-f176-90a460b08cbc"
                        },
                        "yValue": 48,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|4f6a279d-1b18-5bf3-32ea-1e08b6e39e5e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|4f6a279d-1b18-5bf3-32ea-1e08b6e39e5e"
                        },
                        "yValue": 48,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|bdb6c1db-35db-c342-e8af-29cb87d2c4d4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|bdb6c1db-35db-c342-e8af-29cb87d2c4d4"
                        },
                        "yValue": 48,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "yValue": 64,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "outQuint",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|c0b7da05-9e29-47c9-f176-90a460b08cbc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuint",
                        "duration": 800,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|c0b7da05-9e29-47c9-f176-90a460b08cbc"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|4f6a279d-1b18-5bf3-32ea-1e08b6e39e5e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|4f6a279d-1b18-5bf3-32ea-1e08b6e39e5e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|bdb6c1db-35db-c342-e8af-29cb87d2c4d4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|bdb6c1db-35db-c342-e8af-29cb87d2c4d4"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1200,
                        "easing": "outQuint",
                        "duration": 2000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-61-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1200,
                        "easing": "outQuint",
                        "duration": 2000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|f0e1f336-2513-8fe9-5ccf-c79169a260b6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686112411981
        },
        "a-62": {
            "id": "a-62",
            "title": "project-banner-upwards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".project-banner-image-wrapper",
                            "selectorGuids": ["d520cd66-7fa6-984b-c9f7-b809d6d4bc8f"]
                        },
                        "yValue": 64,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-62-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".project-banner-image-wrapper",
                            "selectorGuids": ["d520cd66-7fa6-984b-c9f7-b809d6d4bc8f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-62-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "outQuint",
                        "duration": 1500,
                        "target": {
                            "selector": ".project-banner-image-wrapper",
                            "selectorGuids": ["d520cd66-7fa6-984b-c9f7-b809d6d4bc8f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-62-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuint",
                        "duration": 1500,
                        "target": {
                            "selector": ".project-banner-image-wrapper",
                            "selectorGuids": ["d520cd66-7fa6-984b-c9f7-b809d6d4bc8f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686280895170
        },
        "a-63": {
            "id": "a-63",
            "title": "project-top-nav-upwards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-63-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-63-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "selector": ".section-back",
                            "selectorGuids": ["7a415fd6-5673-d762-1d0f-bc19d6e3ce96"]
                        },
                        "yValue": -80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683317411177
        },
        "a-64": {
            "id": "a-64",
            "title": "mobile-info-image-load-in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|4920c37e-a1d1-1c8b-1c4f-d6b1b623315c"
                        },
                        "yValue": 64,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|4920c37e-a1d1-1c8b-1c4f-d6b1b623315c"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|b9ae1c22-0f87-485a-7347-8de08ae6e0b9"
                        },
                        "yValue": 64,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6402a76850984809244a5491|b9ae1c22-0f87-485a-7347-8de08ae6e0b9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "6402a76850984809244a5491|b9ae1c22-0f87-485a-7347-8de08ae6e0b9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "6402a76850984809244a5491|b9ae1c22-0f87-485a-7347-8de08ae6e0b9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "6402a76850984809244a5491|4920c37e-a1d1-1c8b-1c4f-d6b1b623315c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuint",
                        "duration": 1200,
                        "target": {
                            "id": "6402a76850984809244a5491|4920c37e-a1d1-1c8b-1c4f-d6b1b623315c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1688592806938
        },
        "a-65": {
            "id": "a-65",
            "title": "media-switch-thn-vertical",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d931"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d931"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1688598794851
        },
        "a-66": {
            "id": "a-66",
            "title": "media-default-thn-vertical",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|9c6ca053-0320-66b0-3837-970922c0d931"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1688598885592
        },
        "a-67": {
            "id": "a-67",
            "title": "media-switch-thn-audit-1-2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|4a55d783-8175-d1cd-c16b-ce423de2d1fe"
                        },
                        "value": 0.002,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689092270442
        },
        "a-68": {
            "id": "a-68",
            "title": "media-default-thn-audit-1-2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "selector": ".image-default",
                            "selectorGuids": ["79469575-c1c1-696c-b0a9-22e6c03e73c6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689092341445
        },
        "a-69": {
            "id": "a-69",
            "title": "media-switch-thn-audit-3-4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ed9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689092487755
        },
        "a-70": {
            "id": "a-70",
            "title": "media-default-thn-audit-3-4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|310436df-059e-e2c0-4a51-26ef1fa13ed9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689092518556
        },
        "a-71": {
            "id": "a-71",
            "title": "media-switch-thn-layout",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|4cd52a75-3b7a-2e2d-0009-b13814a7e4ba"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689296446306
        },
        "a-72": {
            "id": "a-72",
            "title": "media-default-thn-layout",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "selector": ".image-default",
                            "selectorGuids": ["79469575-c1c1-696c-b0a9-22e6c03e73c6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689296542544
        },
        "a-73": {
            "id": "a-73",
            "title": "media-switch-thn-graphs",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e142"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689707830193
        },
        "a-74": {
            "id": "a-74",
            "title": "media-default-thn-graphs",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|51977298-9a34-dba0-b778-18449908e142"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689707907852
        },
        "a-75": {
            "id": "a-75",
            "title": "media-switch-thn-timeline",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d400"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689740046626
        },
        "a-76": {
            "id": "a-76",
            "title": "media-default-thn-timeline",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 200,
                        "target": {
                            "id": "64330d489d91c606f6d44990|592b3a78-8d1e-18c0-5603-46c97b62d400"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689740074892
        },
        "a-77": {
            "id": "a-77",
            "title": "shine-loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "xValue": -25,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-77-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "zValue": 15,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-77-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "value": 0.15,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutQuad",
                        "duration": 2000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "xValue": 80,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 3000,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "xValue": -25,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "63dcb6e1a80e9435e330f4c5|815c1c00-4c7f-93a9-0e8b-6fe29ddf0962"
                        },
                        "value": 0.15,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1690698275475
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});