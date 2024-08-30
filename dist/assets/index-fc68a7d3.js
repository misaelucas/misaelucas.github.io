function W6(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(r, o);
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === 'childList')
        for (const i of a.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (a.credentials = 'omit')
          : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = n(o);
    fetch(o.href, a);
  }
})();
function H6(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(r, o);
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
})();
function q6(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var K4 = { exports: {} },
  Ed = {},
  Q4 = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Os = Symbol.for('react.element'),
  K6 = Symbol.for('react.portal'),
  Q6 = Symbol.for('react.fragment'),
  Y6 = Symbol.for('react.strict_mode'),
  G6 = Symbol.for('react.profiler'),
  X6 = Symbol.for('react.provider'),
  Z6 = Symbol.for('react.context'),
  J6 = Symbol.for('react.forward_ref'),
  ek = Symbol.for('react.suspense'),
  tk = Symbol.for('react.memo'),
  nk = Symbol.for('react.lazy'),
  dv = Symbol.iterator;
function rk(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (dv && e[dv]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Y4 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  G4 = Object.assign,
  X4 = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = X4),
    (this.updater = n || Y4);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Z4() {}
Z4.prototype = Ni.prototype;
function _0(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = X4),
    (this.updater = n || Y4);
}
var z0 = (_0.prototype = new Z4());
z0.constructor = _0;
G4(z0, Ni.prototype);
z0.isPureReactComponent = !0;
var fv = Array.isArray,
  J4 = Object.prototype.hasOwnProperty,
  N0 = { current: null },
  e3 = { key: !0, ref: !0, __self: !0, __source: !0 };
function t3(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = '' + t.key),
    t))
      J4.call(t, r) && !e3.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Os,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: N0.current,
  };
}
function ok(e, t) {
  return {
    $$typeof: Os,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function R0(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Os;
}
function ak(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pv = /\/+/g;
function fp(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? ak('' + e.key)
    : t.toString(36);
}
function Hu(e, t, n, r, o) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Os:
          case K6:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + fp(i, 0) : r),
      fv(o)
        ? ((n = ''),
          e != null && (n = e.replace(pv, '$&/') + '/'),
          Hu(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (R0(o) &&
            (o = ok(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(pv, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), fv(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = r + fp(a, l);
      i += Hu(a, t, n, s, o);
    }
  else if (((s = rk(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = r + fp(a, l++)), (i += Hu(a, t, n, s, o));
  else if (a === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function nu(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Hu(e, r, '', '', function (a) {
      return t.call(n, a, o++);
    }),
    r
  );
}
function ik(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Et = { current: null },
  qu = { transition: null },
  lk = {
    ReactCurrentDispatcher: Et,
    ReactCurrentBatchConfig: qu,
    ReactCurrentOwner: N0,
  };
q.Children = {
  map: nu,
  forEach: function (e, t, n) {
    nu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!R0(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
q.Component = Ni;
q.Fragment = Q6;
q.Profiler = G6;
q.PureComponent = _0;
q.StrictMode = Y6;
q.Suspense = ek;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = G4({}, e.props),
    o = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = N0.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      J4.call(t, s) &&
        !e3.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Os, type: e.type, key: o, ref: a, props: r, _owner: i };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Z6,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: X6, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = t3;
q.createFactory = function (e) {
  var t = t3.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: J6, render: e };
};
q.isValidElement = R0;
q.lazy = function (e) {
  return { $$typeof: nk, _payload: { _status: -1, _result: e }, _init: ik };
};
q.memo = function (e, t) {
  return { $$typeof: tk, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = qu.transition;
  qu.transition = {};
  try {
    e();
  } finally {
    qu.transition = t;
  }
};
q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
q.useCallback = function (e, t) {
  return Et.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Et.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Et.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Et.current.useEffect(e, t);
};
q.useId = function () {
  return Et.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Et.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Et.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Et.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Et.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Et.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Et.current.useRef(e);
};
q.useState = function (e) {
  return Et.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Et.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Et.current.useTransition();
};
q.version = '18.2.0';
Q4.exports = q;
var z = Q4.exports;
const qt = q6(z),
  wm = H6({ __proto__: null, default: qt }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sk = z,
  uk = Symbol.for('react.element'),
  ck = Symbol.for('react.fragment'),
  dk = Object.prototype.hasOwnProperty,
  fk = sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  pk = { key: !0, ref: !0, __self: !0, __source: !0 };
function n3(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) dk.call(t, r) && !pk.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: uk,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: fk.current,
  };
}
Ed.Fragment = ck;
Ed.jsx = n3;
Ed.jsxs = n3;
K4.exports = Ed;
var C = K4.exports,
  km = {},
  r3 = { exports: {} },
  nn = {},
  o3 = { exports: {} },
  a3 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, T) {
    var O = $.length;
    $.push(T);
    e: for (; 0 < O; ) {
      var B = (O - 1) >>> 1,
        W = $[B];
      if (0 < o(W, T)) ($[B] = T), ($[O] = W), (O = B);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var T = $[0],
      O = $.pop();
    if (O !== T) {
      $[0] = O;
      e: for (var B = 0, W = $.length, Ve = W >>> 1; B < Ve; ) {
        var se = 2 * (B + 1) - 1,
          st = $[se],
          Oe = se + 1,
          Bt = $[Oe];
        if (0 > o(st, O))
          Oe < W && 0 > o(Bt, st)
            ? (($[B] = Bt), ($[Oe] = O), (B = Oe))
            : (($[B] = st), ($[se] = O), (B = se));
        else if (Oe < W && 0 > o(Bt, O)) ($[B] = Bt), ($[Oe] = O), (B = Oe);
        else break e;
      }
    }
    return T;
  }
  function o($, T) {
    var O = $.sortIndex - T.sortIndex;
    return O !== 0 ? O : $.id - T.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var s = [],
    u = [],
    f = 1,
    h = null,
    p = 3,
    y = !1,
    v = !1,
    g = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m($) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= $)
        r(u), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(u);
    }
  }
  function x($) {
    if (((g = !1), m($), !v))
      if (n(s) !== null) (v = !0), we(b);
      else {
        var T = n(u);
        T !== null && ge(x, T.startTime - $);
      }
  }
  function b($, T) {
    (v = !1), g && ((g = !1), d(_), (_ = -1)), (y = !0);
    var O = p;
    try {
      for (
        m(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || ($ && !A()));

      ) {
        var B = h.callback;
        if (typeof B == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var W = B(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof W == 'function' ? (h.callback = W) : h === n(s) && r(s),
            m(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var Ve = !0;
      else {
        var se = n(u);
        se !== null && ge(x, se.startTime - T), (Ve = !1);
      }
      return Ve;
    } finally {
      (h = null), (p = O), (y = !1);
    }
  }
  var k = !1,
    w = null,
    _ = -1,
    M = 5,
    P = -1;
  function A() {
    return !(e.unstable_now() - P < M);
  }
  function H() {
    if (w !== null) {
      var $ = e.unstable_now();
      P = $;
      var T = !0;
      try {
        T = w(!0, $);
      } finally {
        T ? Q() : ((k = !1), (w = null));
      }
    } else k = !1;
  }
  var Q;
  if (typeof c == 'function')
    Q = function () {
      c(H);
    };
  else if (typeof MessageChannel < 'u') {
    var ue = new MessageChannel(),
      re = ue.port2;
    (ue.port1.onmessage = H),
      (Q = function () {
        re.postMessage(null);
      });
  } else
    Q = function () {
      S(H, 0);
    };
  function we($) {
    (w = $), k || ((k = !0), Q());
  }
  function ge($, T) {
    _ = S(function () {
      $(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), we(b));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function ($) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var O = p;
      p = T;
      try {
        return $();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, T) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var O = p;
      p = $;
      try {
        return T();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function ($, T, O) {
      var B = e.unstable_now();
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? B + O : B))
          : (O = B),
        $)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = O + W),
        ($ = {
          id: f++,
          callback: T,
          priorityLevel: $,
          startTime: O,
          expirationTime: W,
          sortIndex: -1,
        }),
        O > B
          ? (($.sortIndex = O),
            t(u, $),
            n(s) === null &&
              $ === n(u) &&
              (g ? (d(_), (_ = -1)) : (g = !0), ge(x, O - B)))
          : (($.sortIndex = W), t(s, $), v || y || ((v = !0), we(b))),
        $
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function ($) {
      var T = p;
      return function () {
        var O = p;
        p = T;
        try {
          return $.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(a3);
o3.exports = a3;
var mk = o3.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i3 = z,
  en = mk;
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var l3 = new Set(),
  Ul = {};
function ra(e, t) {
  fi(e, t), fi(e + 'Capture', t);
}
function fi(e, t) {
  for (Ul[e] = t, e = 0; e < t.length; e++) l3.add(t[e]);
}
var kr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Sm = Object.prototype.hasOwnProperty,
  hk =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mv = {},
  hv = {};
function gk(e) {
  return Sm.call(hv, e)
    ? !0
    : Sm.call(mv, e)
      ? !1
      : hk.test(e)
        ? (hv[e] = !0)
        : ((mv[e] = !0), !1);
}
function vk(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function yk(e, t, n, r) {
  if (t === null || typeof t > 'u' || vk(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $t(e, t, n, r, o, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var it = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    it[e] = new $t(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  it[t] = new $t(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  it[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  it[e] = new $t(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    it[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  it[e] = new $t(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  it[e] = new $t(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  it[e] = new $t(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  it[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var j0 = /[\-:]([a-z])/g;
function T0(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(j0, T0);
    it[t] = new $t(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(j0, T0);
    it[t] = new $t(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(j0, T0);
  it[t] = new $t(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  it[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
it.xlinkHref = new $t(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  it[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function O0(e, t, n, r) {
  var o = it.hasOwnProperty(t) ? it[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (yk(t, n, o, r) && (n = null),
    r || o === null
      ? gk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jr = i3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ru = Symbol.for('react.element'),
  $a = Symbol.for('react.portal'),
  Pa = Symbol.for('react.fragment'),
  M0 = Symbol.for('react.strict_mode'),
  Cm = Symbol.for('react.profiler'),
  s3 = Symbol.for('react.provider'),
  u3 = Symbol.for('react.context'),
  L0 = Symbol.for('react.forward_ref'),
  Em = Symbol.for('react.suspense'),
  $m = Symbol.for('react.suspense_list'),
  I0 = Symbol.for('react.memo'),
  Lr = Symbol.for('react.lazy'),
  c3 = Symbol.for('react.offscreen'),
  gv = Symbol.iterator;
function Wi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (gv && e[gv]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $e = Object.assign,
  pp;
function fl(e) {
  if (pp === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pp = (t && t[1]) || '';
    }
  return (
    `
` +
    pp +
    e
  );
}
var mp = !1;
function hp(e, t) {
  if (!e || mp) return '';
  mp = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          a = r.stack.split(`
`),
          i = o.length - 1,
          l = a.length - 1;
        1 <= i && 0 <= l && o[i] !== a[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== a[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== a[l])) {
                var s =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (mp = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? fl(e) : '';
}
function xk(e) {
  switch (e.tag) {
    case 5:
      return fl(e.type);
    case 16:
      return fl('Lazy');
    case 13:
      return fl('Suspense');
    case 19:
      return fl('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = hp(e.type, !1)), e;
    case 11:
      return (e = hp(e.type.render, !1)), e;
    case 1:
      return (e = hp(e.type, !0)), e;
    default:
      return '';
  }
}
function Pm(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Pa:
      return 'Fragment';
    case $a:
      return 'Portal';
    case Cm:
      return 'Profiler';
    case M0:
      return 'StrictMode';
    case Em:
      return 'Suspense';
    case $m:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case u3:
        return (e.displayName || 'Context') + '.Consumer';
      case s3:
        return (e._context.displayName || 'Context') + '.Provider';
      case L0:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case I0:
        return (
          (t = e.displayName || null), t !== null ? t : Pm(e.type) || 'Memo'
        );
      case Lr:
        (t = e._payload), (e = e._init);
        try {
          return Pm(e(t));
        } catch {}
    }
  return null;
}
function bk(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Pm(t);
    case 8:
      return t === M0 ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function vo(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function d3(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function wk(e) {
  var t = d3(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), a.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ou(e) {
  e._valueTracker || (e._valueTracker = wk(e));
}
function f3(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = d3(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Sc(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _m(e, t) {
  var n = t.checked;
  return $e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vv(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function p3(e, t) {
  (t = t.checked), t != null && O0(e, 'checked', t, !1);
}
function zm(e, t) {
  p3(e, t);
  var n = vo(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Nm(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Nm(e, t.type, vo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yv(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Nm(e, t, n) {
  (t !== 'number' || Sc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var pl = Array.isArray;
function Ga(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + vo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rm(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return $e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function xv(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (pl(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: vo(n) };
}
function m3(e, t) {
  var n = vo(t.value),
    r = vo(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function bv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function h3(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function jm(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? h3(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var au,
  g3 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        au = au || document.createElement('div'),
          au.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = au.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kk = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(kl).forEach(function (e) {
  kk.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kl[t] = kl[e]);
  });
});
function v3(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (kl.hasOwnProperty(e) && kl[e])
      ? ('' + t).trim()
      : t + 'px';
}
function y3(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = v3(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Sk = $e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Tm(e, t) {
  if (t) {
    if (Sk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62));
  }
}
function Om(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Mm = null;
function A0(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lm = null,
  Xa = null,
  Za = null;
function wv(e) {
  if ((e = Is(e))) {
    if (typeof Lm != 'function') throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Nd(t)), Lm(e.stateNode, e.type, t));
  }
}
function x3(e) {
  Xa ? (Za ? Za.push(e) : (Za = [e])) : (Xa = e);
}
function b3() {
  if (Xa) {
    var e = Xa,
      t = Za;
    if (((Za = Xa = null), wv(e), t)) for (e = 0; e < t.length; e++) wv(t[e]);
  }
}
function w3(e, t) {
  return e(t);
}
function k3() {}
var gp = !1;
function S3(e, t, n) {
  if (gp) return e(t, n);
  gp = !0;
  try {
    return w3(e, t, n);
  } finally {
    (gp = !1), (Xa !== null || Za !== null) && (k3(), b3());
  }
}
function Wl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nd(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
  return n;
}
var Im = !1;
if (kr)
  try {
    var Hi = {};
    Object.defineProperty(Hi, 'passive', {
      get: function () {
        Im = !0;
      },
    }),
      window.addEventListener('test', Hi, Hi),
      window.removeEventListener('test', Hi, Hi);
  } catch {
    Im = !1;
  }
function Ck(e, t, n, r, o, a, i, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Sl = !1,
  Cc = null,
  Ec = !1,
  Am = null,
  Ek = {
    onError: function (e) {
      (Sl = !0), (Cc = e);
    },
  };
function $k(e, t, n, r, o, a, i, l, s) {
  (Sl = !1), (Cc = null), Ck.apply(Ek, arguments);
}
function Pk(e, t, n, r, o, a, i, l, s) {
  if (($k.apply(this, arguments), Sl)) {
    if (Sl) {
      var u = Cc;
      (Sl = !1), (Cc = null);
    } else throw Error(R(198));
    Ec || ((Ec = !0), (Am = u));
  }
}
function oa(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function C3(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kv(e) {
  if (oa(e) !== e) throw Error(R(188));
}
function _k(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = oa(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === n) return kv(o), e;
        if (a === r) return kv(o), t;
        a = a.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = a);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = a);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = a.child; l; ) {
          if (l === n) {
            (i = !0), (n = a), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = a), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function E3(e) {
  return (e = _k(e)), e !== null ? $3(e) : null;
}
function $3(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $3(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var P3 = en.unstable_scheduleCallback,
  Sv = en.unstable_cancelCallback,
  zk = en.unstable_shouldYield,
  Nk = en.unstable_requestPaint,
  Me = en.unstable_now,
  Rk = en.unstable_getCurrentPriorityLevel,
  F0 = en.unstable_ImmediatePriority,
  _3 = en.unstable_UserBlockingPriority,
  $c = en.unstable_NormalPriority,
  jk = en.unstable_LowPriority,
  z3 = en.unstable_IdlePriority,
  $d = null,
  or = null;
function Tk(e) {
  if (or && typeof or.onCommitFiberRoot == 'function')
    try {
      or.onCommitFiberRoot($d, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var In = Math.clz32 ? Math.clz32 : Lk,
  Ok = Math.log,
  Mk = Math.LN2;
function Lk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ok(e) / Mk) | 0)) | 0;
}
var iu = 64,
  lu = 4194304;
function ml(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = ml(l)) : ((a &= i), a !== 0 && (r = ml(a)));
  } else (i = n & ~o), i !== 0 ? (r = ml(i)) : a !== 0 && (r = ml(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - In(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ik(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ak(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - In(a),
      l = 1 << i,
      s = o[i];
    s === -1
      ? (!(l & n) || l & r) && (o[i] = Ik(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function Fm(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function N3() {
  var e = iu;
  return (iu <<= 1), !(iu & 4194240) && (iu = 64), e;
}
function vp(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ms(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - In(t)),
    (e[t] = n);
}
function Fk(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - In(n),
      a = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
  }
}
function D0(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - In(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function R3(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var j3,
  B0,
  T3,
  O3,
  M3,
  Dm = !1,
  su = [],
  Gr = null,
  Xr = null,
  Zr = null,
  Hl = new Map(),
  ql = new Map(),
  Dr = [],
  Dk =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Cv(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Gr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Zr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Hl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ql.delete(t.pointerId);
  }
}
function qi(e, t, n, r, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o],
      }),
      t !== null && ((t = Is(t)), t !== null && B0(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Bk(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Gr = qi(Gr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Xr = qi(Xr, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Zr = qi(Zr, e, t, n, r, o)), !0;
    case 'pointerover':
      var a = o.pointerId;
      return Hl.set(a, qi(Hl.get(a) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (a = o.pointerId), ql.set(a, qi(ql.get(a) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function L3(e) {
  var t = To(e.target);
  if (t !== null) {
    var n = oa(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = C3(n)), t !== null)) {
          (e.blockedOn = t),
            M3(e.priority, function () {
              T3(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ku(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bm(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Mm = r), n.target.dispatchEvent(r), (Mm = null);
    } else return (t = Is(n)), t !== null && B0(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ev(e, t, n) {
  Ku(e) && n.delete(t);
}
function Uk() {
  (Dm = !1),
    Gr !== null && Ku(Gr) && (Gr = null),
    Xr !== null && Ku(Xr) && (Xr = null),
    Zr !== null && Ku(Zr) && (Zr = null),
    Hl.forEach(Ev),
    ql.forEach(Ev);
}
function Ki(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Dm ||
      ((Dm = !0),
      en.unstable_scheduleCallback(en.unstable_NormalPriority, Uk)));
}
function Kl(e) {
  function t(o) {
    return Ki(o, e);
  }
  if (0 < su.length) {
    Ki(su[0], e);
    for (var n = 1; n < su.length; n++) {
      var r = su[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gr !== null && Ki(Gr, e),
      Xr !== null && Ki(Xr, e),
      Zr !== null && Ki(Zr, e),
      Hl.forEach(t),
      ql.forEach(t),
      n = 0;
    n < Dr.length;
    n++
  )
    (r = Dr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dr.length && ((n = Dr[0]), n.blockedOn === null); )
    L3(n), n.blockedOn === null && Dr.shift();
}
var Ja = jr.ReactCurrentBatchConfig,
  _c = !0;
function Vk(e, t, n, r) {
  var o = oe,
    a = Ja.transition;
  Ja.transition = null;
  try {
    (oe = 1), U0(e, t, n, r);
  } finally {
    (oe = o), (Ja.transition = a);
  }
}
function Wk(e, t, n, r) {
  var o = oe,
    a = Ja.transition;
  Ja.transition = null;
  try {
    (oe = 4), U0(e, t, n, r);
  } finally {
    (oe = o), (Ja.transition = a);
  }
}
function U0(e, t, n, r) {
  if (_c) {
    var o = Bm(e, t, n, r);
    if (o === null) Pp(e, t, r, zc, n), Cv(e, r);
    else if (Bk(o, e, t, n, r)) r.stopPropagation();
    else if ((Cv(e, r), t & 4 && -1 < Dk.indexOf(e))) {
      for (; o !== null; ) {
        var a = Is(o);
        if (
          (a !== null && j3(a),
          (a = Bm(e, t, n, r)),
          a === null && Pp(e, t, r, zc, n),
          a === o)
        )
          break;
        o = a;
      }
      o !== null && r.stopPropagation();
    } else Pp(e, t, r, null, n);
  }
}
var zc = null;
function Bm(e, t, n, r) {
  if (((zc = null), (e = A0(r)), (e = To(e)), e !== null))
    if (((t = oa(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = C3(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (zc = e), null;
}
function I3(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Rk()) {
        case F0:
          return 1;
        case _3:
          return 4;
        case $c:
        case jk:
          return 16;
        case z3:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wr = null,
  V0 = null,
  Qu = null;
function A3() {
  if (Qu) return Qu;
  var e,
    t = V0,
    n = t.length,
    r,
    o = 'value' in Wr ? Wr.value : Wr.textContent,
    a = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[a - r]; r++);
  return (Qu = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yu(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function uu() {
  return !0;
}
function $v() {
  return !1;
}
function rn(e) {
  function t(n, r, o, a, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? uu
        : $v),
      (this.isPropagationStopped = $v),
      this
    );
  }
  return (
    $e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = uu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = uu));
      },
      persist: function () {},
      isPersistent: uu,
    }),
    t
  );
}
var Ri = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  W0 = rn(Ri),
  Ls = $e({}, Ri, { view: 0, detail: 0 }),
  Hk = rn(Ls),
  yp,
  xp,
  Qi,
  Pd = $e({}, Ls, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: H0,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Qi &&
            (Qi && e.type === 'mousemove'
              ? ((yp = e.screenX - Qi.screenX), (xp = e.screenY - Qi.screenY))
              : (xp = yp = 0),
            (Qi = e)),
          yp);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xp;
    },
  }),
  Pv = rn(Pd),
  qk = $e({}, Pd, { dataTransfer: 0 }),
  Kk = rn(qk),
  Qk = $e({}, Ls, { relatedTarget: 0 }),
  bp = rn(Qk),
  Yk = $e({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gk = rn(Yk),
  Xk = $e({}, Ri, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zk = rn(Xk),
  Jk = $e({}, Ri, { data: 0 }),
  _v = rn(Jk),
  e8 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  t8 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  n8 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function r8(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = n8[e]) ? !!t[e] : !1;
}
function H0() {
  return r8;
}
var o8 = $e({}, Ls, {
    key: function (e) {
      if (e.key) {
        var t = e8[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Yu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? t8[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: H0,
    charCode: function (e) {
      return e.type === 'keypress' ? Yu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Yu(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  a8 = rn(o8),
  i8 = $e({}, Pd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zv = rn(i8),
  l8 = $e({}, Ls, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: H0,
  }),
  s8 = rn(l8),
  u8 = $e({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c8 = rn(u8),
  d8 = $e({}, Pd, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  f8 = rn(d8),
  p8 = [9, 13, 27, 32],
  q0 = kr && 'CompositionEvent' in window,
  Cl = null;
kr && 'documentMode' in document && (Cl = document.documentMode);
var m8 = kr && 'TextEvent' in window && !Cl,
  F3 = kr && (!q0 || (Cl && 8 < Cl && 11 >= Cl)),
  Nv = String.fromCharCode(32),
  Rv = !1;
function D3(e, t) {
  switch (e) {
    case 'keyup':
      return p8.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function B3(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var _a = !1;
function h8(e, t) {
  switch (e) {
    case 'compositionend':
      return B3(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Rv = !0), Nv);
    case 'textInput':
      return (e = t.data), e === Nv && Rv ? null : e;
    default:
      return null;
  }
}
function g8(e, t) {
  if (_a)
    return e === 'compositionend' || (!q0 && D3(e, t))
      ? ((e = A3()), (Qu = V0 = Wr = null), (_a = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return F3 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var v8 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!v8[e.type] : t === 'textarea';
}
function U3(e, t, n, r) {
  x3(r),
    (t = Nc(t, 'onChange')),
    0 < t.length &&
      ((n = new W0('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var El = null,
  Ql = null;
function y8(e) {
  J3(e, 0);
}
function _d(e) {
  var t = Ra(e);
  if (f3(t)) return e;
}
function x8(e, t) {
  if (e === 'change') return t;
}
var V3 = !1;
if (kr) {
  var wp;
  if (kr) {
    var kp = 'oninput' in document;
    if (!kp) {
      var Tv = document.createElement('div');
      Tv.setAttribute('oninput', 'return;'),
        (kp = typeof Tv.oninput == 'function');
    }
    wp = kp;
  } else wp = !1;
  V3 = wp && (!document.documentMode || 9 < document.documentMode);
}
function Ov() {
  El && (El.detachEvent('onpropertychange', W3), (Ql = El = null));
}
function W3(e) {
  if (e.propertyName === 'value' && _d(Ql)) {
    var t = [];
    U3(t, Ql, e, A0(e)), S3(y8, t);
  }
}
function b8(e, t, n) {
  e === 'focusin'
    ? (Ov(), (El = t), (Ql = n), El.attachEvent('onpropertychange', W3))
    : e === 'focusout' && Ov();
}
function w8(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return _d(Ql);
}
function k8(e, t) {
  if (e === 'click') return _d(t);
}
function S8(e, t) {
  if (e === 'input' || e === 'change') return _d(t);
}
function C8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bn = typeof Object.is == 'function' ? Object.is : C8;
function Yl(e, t) {
  if (Bn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Sm.call(t, o) || !Bn(e[o], t[o])) return !1;
  }
  return !0;
}
function Mv(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lv(e, t) {
  var n = Mv(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mv(n);
  }
}
function H3(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? H3(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function q3() {
  for (var e = window, t = Sc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sc(e.document);
  }
  return t;
}
function K0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function E8(e) {
  var t = q3(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    H3(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && K0(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          a = Math.min(r.start, o);
        (r = r.end === void 0 ? a : Math.min(r.end, o)),
          !e.extend && a > r && ((o = r), (r = a), (a = o)),
          (o = Lv(n, a));
        var i = Lv(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $8 = kr && 'documentMode' in document && 11 >= document.documentMode,
  za = null,
  Um = null,
  $l = null,
  Vm = !1;
function Iv(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vm ||
    za == null ||
    za !== Sc(r) ||
    ((r = za),
    'selectionStart' in r && K0(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($l && Yl($l, r)) ||
      (($l = r),
      (r = Nc(Um, 'onSelect')),
      0 < r.length &&
        ((t = new W0('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = za))));
}
function cu(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Na = {
    animationend: cu('Animation', 'AnimationEnd'),
    animationiteration: cu('Animation', 'AnimationIteration'),
    animationstart: cu('Animation', 'AnimationStart'),
    transitionend: cu('Transition', 'TransitionEnd'),
  },
  Sp = {},
  K3 = {};
kr &&
  ((K3 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Na.animationend.animation,
    delete Na.animationiteration.animation,
    delete Na.animationstart.animation),
  'TransitionEvent' in window || delete Na.transitionend.transition);
function zd(e) {
  if (Sp[e]) return Sp[e];
  if (!Na[e]) return e;
  var t = Na[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in K3) return (Sp[e] = t[n]);
  return e;
}
var Q3 = zd('animationend'),
  Y3 = zd('animationiteration'),
  G3 = zd('animationstart'),
  X3 = zd('transitionend'),
  Z3 = new Map(),
  Av =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function wo(e, t) {
  Z3.set(e, t), ra(t, [e]);
}
for (var Cp = 0; Cp < Av.length; Cp++) {
  var Ep = Av[Cp],
    P8 = Ep.toLowerCase(),
    _8 = Ep[0].toUpperCase() + Ep.slice(1);
  wo(P8, 'on' + _8);
}
wo(Q3, 'onAnimationEnd');
wo(Y3, 'onAnimationIteration');
wo(G3, 'onAnimationStart');
wo('dblclick', 'onDoubleClick');
wo('focusin', 'onFocus');
wo('focusout', 'onBlur');
wo(X3, 'onTransitionEnd');
fi('onMouseEnter', ['mouseout', 'mouseover']);
fi('onMouseLeave', ['mouseout', 'mouseover']);
fi('onPointerEnter', ['pointerout', 'pointerover']);
fi('onPointerLeave', ['pointerout', 'pointerover']);
ra(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
ra(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
ra('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ra(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
ra(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
ra(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var hl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  z8 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(hl));
function Fv(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Pk(r, t, void 0, e), (e.currentTarget = null);
}
function J3(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
          Fv(o, l, u), (a = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && o.isPropagationStopped())
          )
            break e;
          Fv(o, l, u), (a = s);
        }
    }
  }
  if (Ec) throw ((e = Am), (Ec = !1), (Am = null), e);
}
function fe(e, t) {
  var n = t[Qm];
  n === void 0 && (n = t[Qm] = new Set());
  var r = e + '__bubble';
  n.has(r) || (e5(t, e, 2, !1), n.add(r));
}
function $p(e, t, n) {
  var r = 0;
  t && (r |= 4), e5(n, e, r, t);
}
var du = '_reactListening' + Math.random().toString(36).slice(2);
function Gl(e) {
  if (!e[du]) {
    (e[du] = !0),
      l3.forEach(function (n) {
        n !== 'selectionchange' && (z8.has(n) || $p(n, !1, e), $p(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[du] || ((t[du] = !0), $p('selectionchange', !1, t));
  }
}
function e5(e, t, n, r) {
  switch (I3(t)) {
    case 1:
      var o = Vk;
      break;
    case 4:
      o = Wk;
      break;
    default:
      o = U0;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Im ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Pp(e, t, n, r, o) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = To(l)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  S3(function () {
    var u = a,
      f = A0(n),
      h = [];
    e: {
      var p = Z3.get(e);
      if (p !== void 0) {
        var y = W0,
          v = e;
        switch (e) {
          case 'keypress':
            if (Yu(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = a8;
            break;
          case 'focusin':
            (v = 'focus'), (y = bp);
            break;
          case 'focusout':
            (v = 'blur'), (y = bp);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = bp;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Pv;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Kk;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = s8;
            break;
          case Q3:
          case Y3:
          case G3:
            y = Gk;
            break;
          case X3:
            y = c8;
            break;
          case 'scroll':
            y = Hk;
            break;
          case 'wheel':
            y = f8;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = Zk;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = zv;
        }
        var g = (t & 4) !== 0,
          S = !g && e === 'scroll',
          d = g ? (p !== null ? p + 'Capture' : null) : p;
        g = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              d !== null && ((x = Wl(c, d)), x != null && g.push(Xl(c, x, m)))),
            S)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((p = new y(p, v, null, n, f)), h.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== Mm &&
            (v = n.relatedTarget || n.fromElement) &&
            (To(v) || v[Sr]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? To(v) : null),
              v !== null &&
                ((S = oa(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((g = Pv),
            (x = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = zv),
              (x = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (S = y == null ? p : Ra(y)),
            (m = v == null ? p : Ra(v)),
            (p = new g(x, c + 'leave', y, n, f)),
            (p.target = S),
            (p.relatedTarget = m),
            (x = null),
            To(f) === u &&
              ((g = new g(d, c + 'enter', v, n, f)),
              (g.target = m),
              (g.relatedTarget = S),
              (x = g)),
            (S = x),
            y && v)
          )
            t: {
              for (g = y, d = v, c = 0, m = g; m; m = fa(m)) c++;
              for (m = 0, x = d; x; x = fa(x)) m++;
              for (; 0 < c - m; ) (g = fa(g)), c--;
              for (; 0 < m - c; ) (d = fa(d)), m--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = fa(g)), (d = fa(d));
              }
              g = null;
            }
          else g = null;
          y !== null && Dv(h, p, y, g, !1),
            v !== null && S !== null && Dv(h, S, v, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? Ra(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var b = x8;
        else if (jv(p))
          if (V3) b = S8;
          else {
            b = w8;
            var k = b8;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = k8);
        if (b && (b = b(e, u))) {
          U3(h, b, n, f);
          break e;
        }
        k && k(e, p, u),
          e === 'focusout' &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === 'number' &&
            Nm(p, 'number', p.value);
      }
      switch (((k = u ? Ra(u) : window), e)) {
        case 'focusin':
          (jv(k) || k.contentEditable === 'true') &&
            ((za = k), (Um = u), ($l = null));
          break;
        case 'focusout':
          $l = Um = za = null;
          break;
        case 'mousedown':
          Vm = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Vm = !1), Iv(h, n, f);
          break;
        case 'selectionchange':
          if ($8) break;
        case 'keydown':
        case 'keyup':
          Iv(h, n, f);
      }
      var w;
      if (q0)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        _a
          ? D3(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (F3 &&
          n.locale !== 'ko' &&
          (_a || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && _a && (w = A3())
            : ((Wr = f),
              (V0 = 'value' in Wr ? Wr.value : Wr.textContent),
              (_a = !0))),
        (k = Nc(u, _)),
        0 < k.length &&
          ((_ = new _v(_, e, null, n, f)),
          h.push({ event: _, listeners: k }),
          w ? (_.data = w) : ((w = B3(n)), w !== null && (_.data = w)))),
        (w = m8 ? h8(e, n) : g8(e, n)) &&
          ((u = Nc(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new _v('onBeforeInput', 'beforeinput', null, n, f)),
            h.push({ event: f, listeners: u }),
            (f.data = w)));
    }
    J3(h, t);
  });
}
function Xl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Nc(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      a = o.stateNode;
    o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = Wl(e, n)),
      a != null && r.unshift(Xl(e, a, o)),
      (a = Wl(e, t)),
      a != null && r.push(Xl(e, a, o))),
      (e = e.return);
  }
  return r;
}
function fa(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dv(e, t, n, r, o) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = Wl(n, a)), s != null && i.unshift(Xl(n, s, l)))
        : o || ((s = Wl(n, a)), s != null && i.push(Xl(n, s, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var N8 = /\r\n?/g,
  R8 = /\u0000|\uFFFD/g;
function Bv(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      N8,
      `
`
    )
    .replace(R8, '');
}
function fu(e, t, n) {
  if (((t = Bv(t)), Bv(e) !== t && n)) throw Error(R(425));
}
function Rc() {}
var Wm = null,
  Hm = null;
function qm(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Km = typeof setTimeout == 'function' ? setTimeout : void 0,
  j8 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Uv = typeof Promise == 'function' ? Promise : void 0,
  T8 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Uv < 'u'
        ? function (e) {
            return Uv.resolve(null).then(e).catch(O8);
          }
        : Km;
function O8(e) {
  setTimeout(function () {
    throw e;
  });
}
function _p(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Kl(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Kl(t);
}
function Jr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Vv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  er = '__reactFiber$' + ji,
  Zl = '__reactProps$' + ji,
  Sr = '__reactContainer$' + ji,
  Qm = '__reactEvents$' + ji,
  M8 = '__reactListeners$' + ji,
  L8 = '__reactHandles$' + ji;
function To(e) {
  var t = e[er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Sr] || n[er])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vv(e); e !== null; ) {
          if ((n = e[er])) return n;
          e = Vv(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Is(e) {
  return (
    (e = e[er] || e[Sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ra(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Nd(e) {
  return e[Zl] || null;
}
var Ym = [],
  ja = -1;
function ko(e) {
  return { current: e };
}
function me(e) {
  0 > ja || ((e.current = Ym[ja]), (Ym[ja] = null), ja--);
}
function ce(e, t) {
  ja++, (Ym[ja] = e.current), (e.current = t);
}
var yo = {},
  vt = ko(yo),
  Tt = ko(!1),
  Ho = yo;
function pi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    a;
  for (a in n) o[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ot(e) {
  return (e = e.childContextTypes), e != null;
}
function jc() {
  me(Tt), me(vt);
}
function Wv(e, t, n) {
  if (vt.current !== yo) throw Error(R(168));
  ce(vt, t), ce(Tt, n);
}
function t5(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, bk(e) || 'Unknown', o));
  return $e({}, n, r);
}
function Tc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yo),
    (Ho = vt.current),
    ce(vt, e),
    ce(Tt, Tt.current),
    !0
  );
}
function Hv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = t5(e, t, Ho)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      me(Tt),
      me(vt),
      ce(vt, e))
    : me(Tt),
    ce(Tt, n);
}
var fr = null,
  Rd = !1,
  zp = !1;
function n5(e) {
  fr === null ? (fr = [e]) : fr.push(e);
}
function I8(e) {
  (Rd = !0), n5(e);
}
function So() {
  if (!zp && fr !== null) {
    zp = !0;
    var e = 0,
      t = oe;
    try {
      var n = fr;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (fr = null), (Rd = !1);
    } catch (o) {
      throw (fr !== null && (fr = fr.slice(e + 1)), P3(F0, So), o);
    } finally {
      (oe = t), (zp = !1);
    }
  }
  return null;
}
var Ta = [],
  Oa = 0,
  Oc = null,
  Mc = 0,
  pn = [],
  mn = 0,
  qo = null,
  mr = 1,
  hr = '';
function zo(e, t) {
  (Ta[Oa++] = Mc), (Ta[Oa++] = Oc), (Oc = e), (Mc = t);
}
function r5(e, t, n) {
  (pn[mn++] = mr), (pn[mn++] = hr), (pn[mn++] = qo), (qo = e);
  var r = mr;
  e = hr;
  var o = 32 - In(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var a = 32 - In(t) + o;
  if (30 < a) {
    var i = o - (o % 5);
    (a = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (mr = (1 << (32 - In(t) + o)) | (n << o) | r),
      (hr = a + e);
  } else (mr = (1 << a) | (n << o) | r), (hr = e);
}
function Q0(e) {
  e.return !== null && (zo(e, 1), r5(e, 1, 0));
}
function Y0(e) {
  for (; e === Oc; )
    (Oc = Ta[--Oa]), (Ta[Oa] = null), (Mc = Ta[--Oa]), (Ta[Oa] = null);
  for (; e === qo; )
    (qo = pn[--mn]),
      (pn[mn] = null),
      (hr = pn[--mn]),
      (pn[mn] = null),
      (mr = pn[--mn]),
      (pn[mn] = null);
}
var Gt = null,
  Kt = null,
  xe = !1,
  Mn = null;
function o5(e, t) {
  var n = vn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Gt = e), (Kt = Jr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Kt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qo !== null ? { id: mr, overflow: hr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Gt = e),
            (Kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gm(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xm(e) {
  if (xe) {
    var t = Kt;
    if (t) {
      var n = t;
      if (!qv(e, t)) {
        if (Gm(e)) throw Error(R(418));
        t = Jr(n.nextSibling);
        var r = Gt;
        t && qv(e, t)
          ? o5(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (Gt = e));
      }
    } else {
      if (Gm(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (Gt = e);
    }
  }
}
function Kv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function pu(e) {
  if (e !== Gt) return !1;
  if (!xe) return Kv(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !qm(e.type, e.memoizedProps))),
    t && (t = Kt))
  ) {
    if (Gm(e)) throw (a5(), Error(R(418)));
    for (; t; ) o5(e, t), (t = Jr(t.nextSibling));
  }
  if ((Kv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Kt = Jr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Kt = null;
    }
  } else Kt = Gt ? Jr(e.stateNode.nextSibling) : null;
  return !0;
}
function a5() {
  for (var e = Kt; e; ) e = Jr(e.nextSibling);
}
function mi() {
  (Kt = Gt = null), (xe = !1);
}
function G0(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
var A8 = jr.ReactCurrentBatchConfig;
function Rn(e, t) {
  if (e && e.defaultProps) {
    (t = $e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Lc = ko(null),
  Ic = null,
  Ma = null,
  X0 = null;
function Z0() {
  X0 = Ma = Ic = null;
}
function J0(e) {
  var t = Lc.current;
  me(Lc), (e._currentValue = t);
}
function Zm(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ei(e, t) {
  (Ic = e),
    (X0 = Ma = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Rt = !0), (e.firstContext = null));
}
function wn(e) {
  var t = e._currentValue;
  if (X0 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ma === null)) {
      if (Ic === null) throw Error(R(308));
      (Ma = e), (Ic.dependencies = { lanes: 0, firstContext: e });
    } else Ma = Ma.next = e;
  return t;
}
var Oo = null;
function eh(e) {
  Oo === null ? (Oo = [e]) : Oo.push(e);
}
function i5(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), eh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Cr(e, r)
  );
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ir = !1;
function th(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function l5(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function eo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Cr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), eh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Cr(e, n)
  );
}
function Gu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), D0(e, n);
  }
}
function Qv(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (o = a = i) : (a = a.next = i), (n = n.next);
      } while (n !== null);
      a === null ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ac(e, t, n, r) {
  var o = e.updateQueue;
  Ir = !1;
  var a = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), i === null ? (a = u) : (i.next = u), (i = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== i &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var h = o.baseState;
    (i = 0), (f = u = s = null), (l = a);
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            g = l;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == 'function')) {
                h = v.call(y, h, p);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (p = typeof v == 'function' ? v.call(y, h, p) : v),
                p == null)
              )
                break e;
              h = $e({}, h, p);
              break e;
            case 2:
              Ir = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [l]) : p.push(l));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (s = h)) : (f = f.next = y),
          (i |= p);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = h),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else a === null && (o.shared.lanes = 0);
    (Qo |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Yv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var s5 = new i3.Component().refs;
function Jm(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jd = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? oa(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      o = no(e),
      a = yr(r, o);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = eo(e, a, o)),
      t !== null && (An(t, e, o, r), Gu(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      o = no(e),
      a = yr(r, o);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = eo(e, a, o)),
      t !== null && (An(t, e, o, r), Gu(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = St(),
      r = no(e),
      o = yr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = eo(e, o, r)),
      t !== null && (An(t, e, r, n), Gu(t, e, r));
  },
};
function Gv(e, t, n, r, o, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Yl(n, r) || !Yl(o, a)
        : !0
  );
}
function u5(e, t, n) {
  var r = !1,
    o = yo,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = wn(a))
      : ((o = Ot(t) ? Ho : vt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? pi(e, o) : yo)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jd),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Xv(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jd.enqueueReplaceState(t, t.state, null);
}
function e1(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = s5), th(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null
    ? (o.context = wn(a))
    : ((a = Ot(t) ? Ho : vt.current), (o.context = pi(e, a))),
    (o.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (Jm(e, t, a, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && jd.enqueueReplaceState(o, o.state, null),
      Ac(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Yi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        a = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            l === s5 && (l = o.refs = {}),
              i === null ? delete l[a] : (l[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != 'string') throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function mu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Zv(e) {
  var t = e._init;
  return t(e._payload);
}
function c5(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [c]), (d.flags |= 16)) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = ro(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags |= 2), c) : m)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, m, x) {
    return c === null || c.tag !== 6
      ? ((c = Lp(m, d.mode, x)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function s(d, c, m, x) {
    var b = m.type;
    return b === Pa
      ? f(d, c, m.props.children, x, m.key)
      : c !== null &&
          (c.elementType === b ||
            (typeof b == 'object' &&
              b !== null &&
              b.$$typeof === Lr &&
              Zv(b) === c.type))
        ? ((x = o(c, m.props)), (x.ref = Yi(d, c, m)), (x.return = d), x)
        : ((x = nc(m.type, m.key, m.props, null, d.mode, x)),
          (x.ref = Yi(d, c, m)),
          (x.return = d),
          x);
  }
  function u(d, c, m, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Ip(m, d.mode, x)), (c.return = d), c)
      : ((c = o(c, m.children || [])), (c.return = d), c);
  }
  function f(d, c, m, x, b) {
    return c === null || c.tag !== 7
      ? ((c = Uo(m, d.mode, x, b)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function h(d, c, m) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = Lp('' + c, d.mode, m)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ru:
          return (
            (m = nc(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = Yi(d, null, c)),
            (m.return = d),
            m
          );
        case $a:
          return (c = Ip(c, d.mode, m)), (c.return = d), c;
        case Lr:
          var x = c._init;
          return h(d, x(c._payload), m);
      }
      if (pl(c) || Wi(c))
        return (c = Uo(c, d.mode, m, null)), (c.return = d), c;
      mu(d, c);
    }
    return null;
  }
  function p(d, c, m, x) {
    var b = c !== null ? c.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return b !== null ? null : l(d, c, '' + m, x);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ru:
          return m.key === b ? s(d, c, m, x) : null;
        case $a:
          return m.key === b ? u(d, c, m, x) : null;
        case Lr:
          return (b = m._init), p(d, c, b(m._payload), x);
      }
      if (pl(m) || Wi(m)) return b !== null ? null : f(d, c, m, x, null);
      mu(d, m);
    }
    return null;
  }
  function y(d, c, m, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (d = d.get(m) || null), l(c, d, '' + x, b);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case ru:
          return (d = d.get(x.key === null ? m : x.key) || null), s(c, d, x, b);
        case $a:
          return (d = d.get(x.key === null ? m : x.key) || null), u(c, d, x, b);
        case Lr:
          var k = x._init;
          return y(d, c, m, k(x._payload), b);
      }
      if (pl(x) || Wi(x)) return (d = d.get(m) || null), f(c, d, x, b, null);
      mu(c, x);
    }
    return null;
  }
  function v(d, c, m, x) {
    for (
      var b = null, k = null, w = c, _ = (c = 0), M = null;
      w !== null && _ < m.length;
      _++
    ) {
      w.index > _ ? ((M = w), (w = null)) : (M = w.sibling);
      var P = p(d, w, m[_], x);
      if (P === null) {
        w === null && (w = M);
        break;
      }
      e && w && P.alternate === null && t(d, w),
        (c = a(P, c, _)),
        k === null ? (b = P) : (k.sibling = P),
        (k = P),
        (w = M);
    }
    if (_ === m.length) return n(d, w), xe && zo(d, _), b;
    if (w === null) {
      for (; _ < m.length; _++)
        (w = h(d, m[_], x)),
          w !== null &&
            ((c = a(w, c, _)), k === null ? (b = w) : (k.sibling = w), (k = w));
      return xe && zo(d, _), b;
    }
    for (w = r(d, w); _ < m.length; _++)
      (M = y(w, d, _, m[_], x)),
        M !== null &&
          (e && M.alternate !== null && w.delete(M.key === null ? _ : M.key),
          (c = a(M, c, _)),
          k === null ? (b = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        w.forEach(function (A) {
          return t(d, A);
        }),
      xe && zo(d, _),
      b
    );
  }
  function g(d, c, m, x) {
    var b = Wi(m);
    if (typeof b != 'function') throw Error(R(150));
    if (((m = b.call(m)), m == null)) throw Error(R(151));
    for (
      var k = (b = null), w = c, _ = (c = 0), M = null, P = m.next();
      w !== null && !P.done;
      _++, P = m.next()
    ) {
      w.index > _ ? ((M = w), (w = null)) : (M = w.sibling);
      var A = p(d, w, P.value, x);
      if (A === null) {
        w === null && (w = M);
        break;
      }
      e && w && A.alternate === null && t(d, w),
        (c = a(A, c, _)),
        k === null ? (b = A) : (k.sibling = A),
        (k = A),
        (w = M);
    }
    if (P.done) return n(d, w), xe && zo(d, _), b;
    if (w === null) {
      for (; !P.done; _++, P = m.next())
        (P = h(d, P.value, x)),
          P !== null &&
            ((c = a(P, c, _)), k === null ? (b = P) : (k.sibling = P), (k = P));
      return xe && zo(d, _), b;
    }
    for (w = r(d, w); !P.done; _++, P = m.next())
      (P = y(w, d, _, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && w.delete(P.key === null ? _ : P.key),
          (c = a(P, c, _)),
          k === null ? (b = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        w.forEach(function (H) {
          return t(d, H);
        }),
      xe && zo(d, _),
      b
    );
  }
  function S(d, c, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Pa &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case ru:
          e: {
            for (var b = m.key, k = c; k !== null; ) {
              if (k.key === b) {
                if (((b = m.type), b === Pa)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (c = o(k, m.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  k.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Lr &&
                    Zv(b) === k.type)
                ) {
                  n(d, k.sibling),
                    (c = o(k, m.props)),
                    (c.ref = Yi(d, k, m)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            m.type === Pa
              ? ((c = Uo(m.props.children, d.mode, x, m.key)),
                (c.return = d),
                (d = c))
              : ((x = nc(m.type, m.key, m.props, null, d.mode, x)),
                (x.ref = Yi(d, c, m)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case $a:
          e: {
            for (k = m.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = Ip(m, d.mode, x)), (c.return = d), (d = c);
          }
          return i(d);
        case Lr:
          return (k = m._init), S(d, c, k(m._payload), x);
      }
      if (pl(m)) return v(d, c, m, x);
      if (Wi(m)) return g(d, c, m, x);
      mu(d, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = Lp(m, d.mode, x)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return S;
}
var hi = c5(!0),
  d5 = c5(!1),
  As = {},
  ar = ko(As),
  Jl = ko(As),
  es = ko(As);
function Mo(e) {
  if (e === As) throw Error(R(174));
  return e;
}
function nh(e, t) {
  switch ((ce(es, t), ce(Jl, e), ce(ar, As), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : jm(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = jm(t, e));
  }
  me(ar), ce(ar, t);
}
function gi() {
  me(ar), me(Jl), me(es);
}
function f5(e) {
  Mo(es.current);
  var t = Mo(ar.current),
    n = jm(t, e.type);
  t !== n && (ce(Jl, e), ce(ar, n));
}
function rh(e) {
  Jl.current === e && (me(ar), me(Jl));
}
var ke = ko(0);
function Fc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Np = [];
function oh() {
  for (var e = 0; e < Np.length; e++)
    Np[e]._workInProgressVersionPrimary = null;
  Np.length = 0;
}
var Xu = jr.ReactCurrentDispatcher,
  Rp = jr.ReactCurrentBatchConfig,
  Ko = 0,
  Ce = null,
  We = null,
  Qe = null,
  Dc = !1,
  Pl = !1,
  ts = 0,
  F8 = 0;
function ut() {
  throw Error(R(321));
}
function ah(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Bn(e[n], t[n])) return !1;
  return !0;
}
function ih(e, t, n, r, o, a) {
  if (
    ((Ko = a),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xu.current = e === null || e.memoizedState === null ? V8 : W8),
    (e = n(r, o)),
    Pl)
  ) {
    a = 0;
    do {
      if (((Pl = !1), (ts = 0), 25 <= a)) throw Error(R(301));
      (a += 1),
        (Qe = We = null),
        (t.updateQueue = null),
        (Xu.current = H8),
        (e = n(r, o));
    } while (Pl);
  }
  if (
    ((Xu.current = Bc),
    (t = We !== null && We.next !== null),
    (Ko = 0),
    (Qe = We = Ce = null),
    (Dc = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function lh() {
  var e = ts !== 0;
  return (ts = 0), e;
}
function Qn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Qe === null ? (Ce.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
}
function kn() {
  if (We === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = We.next;
  var t = Qe === null ? Ce.memoizedState : Qe.next;
  if (t !== null) (Qe = t), (We = e);
  else {
    if (e === null) throw Error(R(310));
    (We = e),
      (e = {
        memoizedState: We.memoizedState,
        baseState: We.baseState,
        baseQueue: We.baseQueue,
        queue: We.queue,
        next: null,
      }),
      Qe === null ? (Ce.memoizedState = Qe = e) : (Qe = Qe.next = e);
  }
  return Qe;
}
function ns(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function jp(e) {
  var t = kn(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = We,
    o = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = a.next), (a.next = i);
    }
    (r.baseQueue = o = a), (n.pending = null);
  }
  if (o !== null) {
    (a = o.next), (r = r.baseState);
    var l = (i = null),
      s = null,
      u = a;
    do {
      var f = u.lane;
      if ((Ko & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = h), (i = r)) : (s = s.next = h),
          (Ce.lanes |= f),
          (Qo |= f);
      }
      u = u.next;
    } while (u !== null && u !== a);
    s === null ? (i = r) : (s.next = l),
      Bn(r, t.memoizedState) || (Rt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (a = o.lane), (Ce.lanes |= a), (Qo |= a), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tp(e) {
  var t = kn(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    a = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== o);
    Bn(a, t.memoizedState) || (Rt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function p5() {}
function m5(e, t) {
  var n = Ce,
    r = kn(),
    o = t(),
    a = !Bn(r.memoizedState, o);
  if (
    (a && ((r.memoizedState = o), (Rt = !0)),
    (r = r.queue),
    sh(v5.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Qe !== null && Qe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rs(9, g5.bind(null, n, r, o, t), void 0, null),
      Ge === null)
    )
      throw Error(R(349));
    Ko & 30 || h5(n, t, o);
  }
  return o;
}
function h5(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function g5(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), y5(t) && x5(e);
}
function v5(e, t, n) {
  return n(function () {
    y5(t) && x5(e);
  });
}
function y5(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bn(e, n);
  } catch {
    return !0;
  }
}
function x5(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function Jv(e) {
  var t = Qn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ns,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = U8.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function rs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function b5() {
  return kn().memoizedState;
}
function Zu(e, t, n, r) {
  var o = Qn();
  (Ce.flags |= e),
    (o.memoizedState = rs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Td(e, t, n, r) {
  var o = kn();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (We !== null) {
    var i = We.memoizedState;
    if (((a = i.destroy), r !== null && ah(r, i.deps))) {
      o.memoizedState = rs(t, n, a, r);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = rs(1 | t, n, a, r));
}
function ey(e, t) {
  return Zu(8390656, 8, e, t);
}
function sh(e, t) {
  return Td(2048, 8, e, t);
}
function w5(e, t) {
  return Td(4, 2, e, t);
}
function k5(e, t) {
  return Td(4, 4, e, t);
}
function S5(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function C5(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Td(4, 4, S5.bind(null, t, e), n)
  );
}
function uh() {}
function E5(e, t) {
  var n = kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ah(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $5(e, t) {
  var n = kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ah(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function P5(e, t, n) {
  return Ko & 21
    ? (Bn(n, t) || ((n = N3()), (Ce.lanes |= n), (Qo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = n));
}
function D8(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Rp.transition;
  Rp.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Rp.transition = r);
  }
}
function _5() {
  return kn().memoizedState;
}
function B8(e, t, n) {
  var r = no(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    z5(e))
  )
    N5(t, n);
  else if (((n = i5(e, t, n, r)), n !== null)) {
    var o = St();
    An(n, e, r, o), R5(n, t, r);
  }
}
function U8(e, t, n) {
  var r = no(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (z5(e)) N5(t, o);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = a(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Bn(l, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), eh(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = i5(e, t, o, r)),
      n !== null && ((o = St()), An(n, e, r, o), R5(n, t, r));
  }
}
function z5(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function N5(e, t) {
  Pl = Dc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function R5(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), D0(e, n);
  }
}
var Bc = {
    readContext: wn,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useInsertionEffect: ut,
    useLayoutEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useMutableSource: ut,
    useSyncExternalStore: ut,
    useId: ut,
    unstable_isNewReconciler: !1,
  },
  V8 = {
    readContext: wn,
    useCallback: function (e, t) {
      return (Qn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wn,
    useEffect: ey,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zu(4194308, 4, S5.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = B8.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jv,
    useDebugValue: uh,
    useDeferredValue: function (e) {
      return (Qn().memoizedState = e);
    },
    useTransition: function () {
      var e = Jv(!1),
        t = e[0];
      return (e = D8.bind(null, e[1])), (Qn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        o = Qn();
      if (xe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ge === null)) throw Error(R(349));
        Ko & 30 || h5(r, t, n);
      }
      o.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (o.queue = a),
        ey(v5.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        rs(9, g5.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qn(),
        t = Ge.identifierPrefix;
      if (xe) {
        var n = hr,
          r = mr;
        (n = (r & ~(1 << (32 - In(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ts++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = F8++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  W8 = {
    readContext: wn,
    useCallback: E5,
    useContext: wn,
    useEffect: sh,
    useImperativeHandle: C5,
    useInsertionEffect: w5,
    useLayoutEffect: k5,
    useMemo: $5,
    useReducer: jp,
    useRef: b5,
    useState: function () {
      return jp(ns);
    },
    useDebugValue: uh,
    useDeferredValue: function (e) {
      var t = kn();
      return P5(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = jp(ns)[0],
        t = kn().memoizedState;
      return [e, t];
    },
    useMutableSource: p5,
    useSyncExternalStore: m5,
    useId: _5,
    unstable_isNewReconciler: !1,
  },
  H8 = {
    readContext: wn,
    useCallback: E5,
    useContext: wn,
    useEffect: sh,
    useImperativeHandle: C5,
    useInsertionEffect: w5,
    useLayoutEffect: k5,
    useMemo: $5,
    useReducer: Tp,
    useRef: b5,
    useState: function () {
      return Tp(ns);
    },
    useDebugValue: uh,
    useDeferredValue: function (e) {
      var t = kn();
      return We === null ? (t.memoizedState = e) : P5(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = Tp(ns)[0],
        t = kn().memoizedState;
      return [e, t];
    },
    useMutableSource: p5,
    useSyncExternalStore: m5,
    useId: _5,
    unstable_isNewReconciler: !1,
  };
function vi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += xk(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Op(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function t1(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var q8 = typeof WeakMap == 'function' ? WeakMap : Map;
function j5(e, t, n) {
  (n = yr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vc || ((Vc = !0), (c1 = r)), t1(e, t);
    }),
    n
  );
}
function T5(e, t, n) {
  (n = yr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        t1(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        t1(e, t),
          typeof r != 'function' &&
            (to === null ? (to = new Set([this])) : to.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function ty(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new q8();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = iS.bind(null, e, t, n)), t.then(e, e));
}
function ny(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ry(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yr(-1, 1)), (t.tag = 2), eo(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var K8 = jr.ReactCurrentOwner,
  Rt = !1;
function xt(e, t, n, r) {
  t.child = e === null ? d5(t, null, n, r) : hi(t, e.child, n, r);
}
function oy(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return (
    ei(t, o),
    (r = ih(e, t, n, r, a, o)),
    (n = lh()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Er(e, t, o))
      : (xe && n && Q0(t), (t.flags |= 1), xt(e, t, r, o), t.child)
  );
}
function ay(e, t, n, r, o) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !vh(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), O5(e, t, a, r, o))
      : ((e = nc(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & o))) {
    var i = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yl), n(i, r) && e.ref === t.ref)
    )
      return Er(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ro(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function O5(e, t, n, r, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Yl(a, r) && e.ref === t.ref)
      if (((Rt = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
        e.flags & 131072 && (Rt = !0);
      else return (t.lanes = e.lanes), Er(e, t, o);
  }
  return n1(e, t, n, r, o);
}
function M5(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Ia, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(Ia, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        ce(Ia, Ut),
        (Ut |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(Ia, Ut),
      (Ut |= r);
  return xt(e, t, o, n), t.child;
}
function L5(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function n1(e, t, n, r, o) {
  var a = Ot(n) ? Ho : vt.current;
  return (
    (a = pi(t, a)),
    ei(t, o),
    (n = ih(e, t, n, r, a, o)),
    (r = lh()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Er(e, t, o))
      : (xe && r && Q0(t), (t.flags |= 1), xt(e, t, n, o), t.child)
  );
}
function iy(e, t, n, r, o) {
  if (Ot(n)) {
    var a = !0;
    Tc(t);
  } else a = !1;
  if ((ei(t, o), t.stateNode === null))
    Ju(e, t), u5(t, n, r), e1(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var s = i.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = wn(u))
      : ((u = Ot(n) ? Ho : vt.current), (u = pi(t, u)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Xv(t, i, r, u)),
      (Ir = !1);
    var p = t.memoizedState;
    (i.state = p),
      Ac(t, r, i, o),
      (s = t.memoizedState),
      l !== r || p !== s || Tt.current || Ir
        ? (typeof f == 'function' && (Jm(t, n, f, r), (s = t.memoizedState)),
          (l = Ir || Gv(t, n, l, r, p, s, u))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      l5(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Rn(t.type, l)),
      (i.props = u),
      (h = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = wn(s))
        : ((s = Ot(n) ? Ho : vt.current), (s = pi(t, s)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== h || p !== s) && Xv(t, i, r, s)),
      (Ir = !1),
      (p = t.memoizedState),
      (i.state = p),
      Ac(t, r, i, o);
    var v = t.memoizedState;
    l !== h || p !== v || Tt.current || Ir
      ? (typeof y == 'function' && (Jm(t, n, y, r), (v = t.memoizedState)),
        (u = Ir || Gv(t, n, u, r, p, v, s) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return r1(e, t, n, r, a, o);
}
function r1(e, t, n, r, o, a) {
  L5(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Hv(t, n, !1), Er(e, t, a);
  (r = t.stateNode), (K8.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hi(t, e.child, null, a)), (t.child = hi(t, null, l, a)))
      : xt(e, t, l, a),
    (t.memoizedState = r.state),
    o && Hv(t, n, !0),
    t.child
  );
}
function I5(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wv(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wv(e, t.context, !1),
    nh(e, t.containerInfo);
}
function ly(e, t, n, r, o) {
  return mi(), G0(o), (t.flags |= 256), xt(e, t, n, r), t.child;
}
var o1 = { dehydrated: null, treeContext: null, retryLane: 0 };
function a1(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function A5(e, t, n) {
  var r = t.pendingProps,
    o = ke.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(ke, o & 1),
    e === null)
  )
    return (
      Xm(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Ld(i, r, 0, null)),
              (e = Uo(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = a1(n)),
              (t.memoizedState = o1),
              e)
            : ch(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Q8(e, t, i, r, l, o, n);
  if (a) {
    (a = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ro(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (a = ro(l, a)) : ((a = Uo(a, i, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? a1(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = o1),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = ro(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ch(e, t) {
  return (
    (t = Ld({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hu(e, t, n, r) {
  return (
    r !== null && G0(r),
    hi(t, e.child, null, n),
    (e = ch(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Q8(e, t, n, r, o, a, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Op(Error(R(422)))), hu(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (o = t.mode),
          (r = Ld({ mode: 'visible', children: r.children }, o, 0, null)),
          (a = Uo(a, o, i, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && hi(t, e.child, null, i),
          (t.child.memoizedState = a1(i)),
          (t.memoizedState = o1),
          a);
  if (!(t.mode & 1)) return hu(e, t, i, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(R(419))), (r = Op(a, r, void 0)), hu(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), Rt || l)) {
    if (((r = Ge), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), Cr(e, o), An(r, e, o, -1));
    }
    return gh(), (r = Op(Error(R(421)))), hu(e, t, i, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Kt = Jr(o.nextSibling)),
      (Gt = t),
      (xe = !0),
      (Mn = null),
      e !== null &&
        ((pn[mn++] = mr),
        (pn[mn++] = hr),
        (pn[mn++] = qo),
        (mr = e.id),
        (hr = e.overflow),
        (qo = t)),
      (t = ch(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zm(e.return, t, n);
}
function Mp(e, t, n, r, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o));
}
function F5(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    a = r.tail;
  if ((xt(e, t, r.children, n), (r = ke.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sy(e, n, t);
        else if (e.tag === 19) sy(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Fc(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Mp(t, !1, o, n, a);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Mp(t, !0, n, null, a);
        break;
      case 'together':
        Mp(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ju(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Er(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ro(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ro(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Y8(e, t, n) {
  switch (t.tag) {
    case 3:
      I5(t), mi();
      break;
    case 5:
      f5(t);
      break;
    case 1:
      Ot(t.type) && Tc(t);
      break;
    case 4:
      nh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ce(Lc, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? A5(e, t, n)
            : (ce(ke, ke.current & 1),
              (e = Er(e, t, n)),
              e !== null ? e.sibling : null);
      ce(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return F5(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), M5(e, t, n);
  }
  return Er(e, t, n);
}
var D5, i1, B5, U5;
D5 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
i1 = function () {};
B5 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Mo(ar.current);
    var a = null;
    switch (n) {
      case 'input':
        (o = _m(e, o)), (r = _m(e, r)), (a = []);
        break;
      case 'select':
        (o = $e({}, o, { value: void 0 })),
          (r = $e({}, r, { value: void 0 })),
          (a = []);
        break;
      case 'textarea':
        (o = Rm(e, o)), (r = Rm(e, r)), (a = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Rc);
    }
    Tm(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ul.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                l[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (a || (a = []), a.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (a = a || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ul.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && fe('scroll', e),
                    a || l === s || (a = []))
                  : (a = a || []).push(u, s));
    }
    n && (a = a || []).push('style', n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
U5 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gi(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function G8(e, t, n) {
  var r = t.pendingProps;
  switch ((Y0(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(t), null;
    case 1:
      return Ot(t.type) && jc(), ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gi(),
        me(Tt),
        me(vt),
        oh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Mn !== null && (p1(Mn), (Mn = null)))),
        i1(e, t),
        ct(t),
        null
      );
    case 5:
      rh(t);
      var o = Mo(es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        B5(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return ct(t), null;
        }
        if (((e = Mo(ar.current)), pu(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[er] = t), (r[Zl] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              fe('cancel', r), fe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              fe('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < hl.length; o++) fe(hl[o], r);
              break;
            case 'source':
              fe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              fe('error', r), fe('load', r);
              break;
            case 'details':
              fe('toggle', r);
              break;
            case 'input':
              vv(r, a), fe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                fe('invalid', r);
              break;
            case 'textarea':
              xv(r, a), fe('invalid', r);
          }
          Tm(n, a), (o = null);
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      fu(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      fu(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : Ul.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  fe('scroll', r);
            }
          switch (n) {
            case 'input':
              ou(r), yv(r, a, !0);
              break;
            case 'textarea':
              ou(r), bv(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = Rc);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = h3(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[er] = t),
            (e[Zl] = r),
            D5(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Om(n, r)), n)) {
              case 'dialog':
                fe('cancel', e), fe('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                fe('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < hl.length; o++) fe(hl[o], e);
                o = r;
                break;
              case 'source':
                fe('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                fe('error', e), fe('load', e), (o = r);
                break;
              case 'details':
                fe('toggle', e), (o = r);
                break;
              case 'input':
                vv(e, r), (o = _m(e, r)), fe('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = $e({}, r, { value: void 0 })),
                  fe('invalid', e);
                break;
              case 'textarea':
                xv(e, r), (o = Rm(e, r)), fe('invalid', e);
                break;
              default:
                o = r;
            }
            Tm(n, o), (l = o);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === 'style'
                  ? y3(e, s)
                  : a === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && g3(e, s))
                    : a === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && Vl(e, s)
                        : typeof s == 'number' && Vl(e, '' + s)
                      : a !== 'suppressContentEditableWarning' &&
                        a !== 'suppressHydrationWarning' &&
                        a !== 'autoFocus' &&
                        (Ul.hasOwnProperty(a)
                          ? s != null && a === 'onScroll' && fe('scroll', e)
                          : s != null && O0(e, a, s, i));
              }
            switch (n) {
              case 'input':
                ou(e), yv(e, r, !1);
                break;
              case 'textarea':
                ou(e), bv(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + vo(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Ga(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Ga(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Rc);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) U5(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
        if (((n = Mo(es.current)), Mo(ar.current), pu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[er] = t),
            (a = r.nodeValue !== n) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                fu(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fu(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[er] = t),
            (t.stateNode = r);
      }
      return ct(t), null;
    case 13:
      if (
        (me(ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && Kt !== null && t.mode & 1 && !(t.flags & 128))
          a5(), mi(), (t.flags |= 98560), (a = !1);
        else if (((a = pu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(R(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(R(317));
            a[er] = t;
          } else
            mi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (a = !1);
        } else Mn !== null && (p1(Mn), (Mn = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ke.current & 1 ? qe === 0 && (qe = 3) : gh())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        gi(), i1(e, t), e === null && Gl(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return J0(t.type._context), ct(t), null;
    case 17:
      return Ot(t.type) && jc(), ct(t), null;
    case 19:
      if ((me(ke), (a = t.memoizedState), a === null)) return ct(t), null;
      if (((r = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (r) Gi(a, !1);
        else {
          if (qe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Fc(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Gi(a, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(ke, (ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Me() > yi &&
            ((t.flags |= 128), (r = !0), Gi(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fc(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gi(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !i.alternate && !xe)
            )
              return ct(t), null;
          } else
            2 * Me() - a.renderingStartTime > yi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gi(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = a.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Me()),
          (t.sibling = null),
          (n = ke.current),
          ce(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        hh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function X8(e, t) {
  switch ((Y0(t), t.tag)) {
    case 1:
      return (
        Ot(t.type) && jc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gi(),
        me(Tt),
        me(vt),
        oh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rh(t), null;
    case 13:
      if (
        (me(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        mi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return me(ke), null;
    case 4:
      return gi(), null;
    case 10:
      return J0(t.type._context), null;
    case 22:
    case 23:
      return hh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gu = !1,
  ht = !1,
  Z8 = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function La(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        je(e, t, r);
      }
    else n.current = null;
}
function V5(e, t, n) {
  try {
    n();
  } catch (r) {
    je(e, t, r);
  }
}
var uy = !1;
function J8(e, t) {
  if (((Wm = _c), (e = q3()), K0(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            s = -1,
            u = 0,
            f = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (o !== 0 && h.nodeType !== 3) || (l = i + o),
                h !== a || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++u === o && (l = i),
                p === a && ++f === r && (s = i),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hm = { focusedElem: e, selectionRange: n }, _c = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    S = v.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Rn(t.type, g),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (x) {
          je(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = uy), (uy = !1), v;
}
function _l(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        (o.destroy = void 0), a !== void 0 && V5(t, n, a);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Od(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function l1(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function W5(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), W5(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[er], delete t[Zl], delete t[Qm], delete t[M8], delete t[L8])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function H5(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || H5(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function s1(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Rc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (s1(e, t, n), e = e.sibling; e !== null; ) s1(e, t, n), (e = e.sibling);
}
function u1(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (u1(e, t, n), e = e.sibling; e !== null; ) u1(e, t, n), (e = e.sibling);
}
var et = null,
  Tn = !1;
function Or(e, t, n) {
  for (n = n.child; n !== null; ) q5(e, t, n), (n = n.sibling);
}
function q5(e, t, n) {
  if (or && typeof or.onCommitFiberUnmount == 'function')
    try {
      or.onCommitFiberUnmount($d, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ht || La(n, t);
    case 6:
      var r = et,
        o = Tn;
      (et = null),
        Or(e, t, n),
        (et = r),
        (Tn = o),
        et !== null &&
          (Tn
            ? ((e = et),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null &&
        (Tn
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8
              ? _p(e.parentNode, n)
              : e.nodeType === 1 && _p(e, n),
            Kl(e))
          : _p(et, n.stateNode));
      break;
    case 4:
      (r = et),
        (o = Tn),
        (et = n.stateNode.containerInfo),
        (Tn = !0),
        Or(e, t, n),
        (et = r),
        (Tn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ht &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var a = o,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && V5(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Or(e, t, n);
      break;
    case 1:
      if (
        !ht &&
        (La(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          je(n, t, l);
        }
      Or(e, t, n);
      break;
    case 21:
      Or(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ht = (r = ht) || n.memoizedState !== null), Or(e, t, n), (ht = r))
        : Or(e, t, n);
      break;
    default:
      Or(e, t, n);
  }
}
function dy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Z8()),
      t.forEach(function (r) {
        var o = sS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function zn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var a = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (et = l.stateNode), (Tn = !1);
              break e;
            case 3:
              (et = l.stateNode.containerInfo), (Tn = !0);
              break e;
            case 4:
              (et = l.stateNode.containerInfo), (Tn = !0);
              break e;
          }
          l = l.return;
        }
        if (et === null) throw Error(R(160));
        q5(a, i, o), (et = null), (Tn = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        je(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) K5(t, e), (t = t.sibling);
}
function K5(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((zn(t, e), qn(e), r & 4)) {
        try {
          _l(3, e, e.return), Od(3, e);
        } catch (g) {
          je(e, e.return, g);
        }
        try {
          _l(5, e, e.return);
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 1:
      zn(t, e), qn(e), r & 512 && n !== null && La(n, n.return);
      break;
    case 5:
      if (
        (zn(t, e),
        qn(e),
        r & 512 && n !== null && La(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Vl(o, '');
        } catch (g) {
          je(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          i = n !== null ? n.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && a.type === 'radio' && a.name != null && p3(o, a),
              Om(l, i);
            var u = Om(l, a);
            for (i = 0; i < s.length; i += 2) {
              var f = s[i],
                h = s[i + 1];
              f === 'style'
                ? y3(o, h)
                : f === 'dangerouslySetInnerHTML'
                  ? g3(o, h)
                  : f === 'children'
                    ? Vl(o, h)
                    : O0(o, f, h, u);
            }
            switch (l) {
              case 'input':
                zm(o, a);
                break;
              case 'textarea':
                m3(o, a);
                break;
              case 'select':
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var y = a.value;
                y != null
                  ? Ga(o, !!a.multiple, y, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Ga(o, !!a.multiple, a.defaultValue, !0)
                      : Ga(o, !!a.multiple, a.multiple ? [] : '', !1));
            }
            o[Zl] = a;
          } catch (g) {
            je(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((zn(t, e), qn(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (a = e.memoizedProps);
        try {
          o.nodeValue = a;
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (zn(t, e), qn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kl(t.containerInfo);
        } catch (g) {
          je(e, e.return, g);
        }
      break;
    case 4:
      zn(t, e), qn(e);
      break;
    case 13:
      zn(t, e),
        qn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ph = Me())),
        r & 4 && dy(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ht = (u = ht) || f), zn(t, e), (ht = u)) : zn(t, e),
        qn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (L = e, f = e.child; f !== null; ) {
            for (h = L = f; L !== null; ) {
              switch (((p = L), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _l(4, p, p.return);
                  break;
                case 1:
                  La(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      je(r, n, g);
                    }
                  }
                  break;
                case 5:
                  La(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    py(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (L = y)) : py(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((a = o.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((l = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = v3('display', i)));
              } catch (g) {
                je(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (g) {
                je(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      zn(t, e), qn(e), r & 4 && dy(e);
      break;
    case 21:
      break;
    default:
      zn(t, e), qn(e);
  }
}
function qn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (H5(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vl(o, ''), (r.flags &= -33));
          var a = cy(e);
          u1(e, a, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = cy(e);
          s1(e, l, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      je(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function eS(e, t, n) {
  (L = e), Q5(e);
}
function Q5(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      a = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || gu;
      if (!i) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || ht;
        l = gu;
        var u = ht;
        if (((gu = i), (ht = s) && !u))
          for (L = o; L !== null; )
            (i = L),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? my(o)
                : s !== null
                  ? ((s.return = i), (L = s))
                  : my(o);
        for (; a !== null; ) (L = a), Q5(a), (a = a.sibling);
        (L = o), (gu = l), (ht = u);
      }
      fy(e);
    } else
      o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (L = a)) : fy(e);
  }
}
function fy(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || Od(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Rn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Yv(t, a, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yv(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && Kl(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        ht || (t.flags & 512 && l1(t));
      } catch (p) {
        je(t, t.return, p);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function py(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function my(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Od(4, t);
          } catch (s) {
            je(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              je(t, o, s);
            }
          }
          var a = t.return;
          try {
            l1(t);
          } catch (s) {
            je(t, a, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            l1(t);
          } catch (s) {
            je(t, i, s);
          }
      }
    } catch (s) {
      je(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var tS = Math.ceil,
  Uc = jr.ReactCurrentDispatcher,
  dh = jr.ReactCurrentOwner,
  xn = jr.ReactCurrentBatchConfig,
  Y = 0,
  Ge = null,
  Fe = null,
  ot = 0,
  Ut = 0,
  Ia = ko(0),
  qe = 0,
  os = null,
  Qo = 0,
  Md = 0,
  fh = 0,
  zl = null,
  zt = null,
  ph = 0,
  yi = 1 / 0,
  cr = null,
  Vc = !1,
  c1 = null,
  to = null,
  vu = !1,
  Hr = null,
  Wc = 0,
  Nl = 0,
  d1 = null,
  ec = -1,
  tc = 0;
function St() {
  return Y & 6 ? Me() : ec !== -1 ? ec : (ec = Me());
}
function no(e) {
  return e.mode & 1
    ? Y & 2 && ot !== 0
      ? ot & -ot
      : A8.transition !== null
        ? (tc === 0 && (tc = N3()), tc)
        : ((e = oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : I3(e.type))),
          e)
    : 1;
}
function An(e, t, n, r) {
  if (50 < Nl) throw ((Nl = 0), (d1 = null), Error(R(185)));
  Ms(e, n, r),
    (!(Y & 2) || e !== Ge) &&
      (e === Ge && (!(Y & 2) && (Md |= n), qe === 4 && Br(e, ot)),
      Mt(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((yi = Me() + 500), Rd && So()));
}
function Mt(e, t) {
  var n = e.callbackNode;
  Ak(e, t);
  var r = Pc(e, e === Ge ? ot : 0);
  if (r === 0)
    n !== null && Sv(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sv(n), t === 1))
      e.tag === 0 ? I8(hy.bind(null, e)) : n5(hy.bind(null, e)),
        T8(function () {
          !(Y & 6) && So();
        }),
        (n = null);
    else {
      switch (R3(r)) {
        case 1:
          n = F0;
          break;
        case 4:
          n = _3;
          break;
        case 16:
          n = $c;
          break;
        case 536870912:
          n = z3;
          break;
        default:
          n = $c;
      }
      n = nx(n, Y5.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Y5(e, t) {
  if (((ec = -1), (tc = 0), Y & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (ti() && e.callbackNode !== n) return null;
  var r = Pc(e, e === Ge ? ot : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Hc(e, r);
  else {
    t = r;
    var o = Y;
    Y |= 2;
    var a = X5();
    (Ge !== e || ot !== t) && ((cr = null), (yi = Me() + 500), Bo(e, t));
    do
      try {
        oS();
        break;
      } catch (l) {
        G5(e, l);
      }
    while (1);
    Z0(),
      (Uc.current = a),
      (Y = o),
      Fe !== null ? (t = 0) : ((Ge = null), (ot = 0), (t = qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Fm(e)), o !== 0 && ((r = o), (t = f1(e, o)))), t === 1)
    )
      throw ((n = os), Bo(e, 0), Br(e, r), Mt(e, Me()), n);
    if (t === 6) Br(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !nS(o) &&
          ((t = Hc(e, r)),
          t === 2 && ((a = Fm(e)), a !== 0 && ((r = a), (t = f1(e, a)))),
          t === 1))
      )
        throw ((n = os), Bo(e, 0), Br(e, r), Mt(e, Me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          No(e, zt, cr);
          break;
        case 3:
          if (
            (Br(e, r), (r & 130023424) === r && ((t = ph + 500 - Me()), 10 < t))
          ) {
            if (Pc(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              St(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Km(No.bind(null, e, zt, cr), t);
            break;
          }
          No(e, zt, cr);
          break;
        case 4:
          if ((Br(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - In(r);
            (a = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~a);
          }
          if (
            ((r = o),
            (r = Me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * tS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Km(No.bind(null, e, zt, cr), r);
            break;
          }
          No(e, zt, cr);
          break;
        case 5:
          No(e, zt, cr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Mt(e, Me()), e.callbackNode === n ? Y5.bind(null, e) : null;
}
function f1(e, t) {
  var n = zl;
  return (
    e.current.memoizedState.isDehydrated && (Bo(e, t).flags |= 256),
    (e = Hc(e, t)),
    e !== 2 && ((t = zt), (zt = n), t !== null && p1(t)),
    e
  );
}
function p1(e) {
  zt === null ? (zt = e) : zt.push.apply(zt, e);
}
function nS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = o.getSnapshot;
          o = o.value;
          try {
            if (!Bn(a(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Br(e, t) {
  for (
    t &= ~fh,
      t &= ~Md,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - In(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hy(e) {
  if (Y & 6) throw Error(R(327));
  ti();
  var t = Pc(e, 0);
  if (!(t & 1)) return Mt(e, Me()), null;
  var n = Hc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fm(e);
    r !== 0 && ((t = r), (n = f1(e, r)));
  }
  if (n === 1) throw ((n = os), Bo(e, 0), Br(e, t), Mt(e, Me()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    No(e, zt, cr),
    Mt(e, Me()),
    null
  );
}
function mh(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((yi = Me() + 500), Rd && So());
  }
}
function Yo(e) {
  Hr !== null && Hr.tag === 0 && !(Y & 6) && ti();
  var t = Y;
  Y |= 1;
  var n = xn.transition,
    r = oe;
  try {
    if (((xn.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (xn.transition = n), (Y = t), !(Y & 6) && So();
  }
}
function hh() {
  (Ut = Ia.current), me(Ia);
}
function Bo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), j8(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((Y0(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && jc();
          break;
        case 3:
          gi(), me(Tt), me(vt), oh();
          break;
        case 5:
          rh(r);
          break;
        case 4:
          gi();
          break;
        case 13:
          me(ke);
          break;
        case 19:
          me(ke);
          break;
        case 10:
          J0(r.type._context);
          break;
        case 22:
        case 23:
          hh();
      }
      n = n.return;
    }
  if (
    ((Ge = e),
    (Fe = e = ro(e.current, null)),
    (ot = Ut = t),
    (qe = 0),
    (os = null),
    (fh = Md = Qo = 0),
    (zt = zl = null),
    Oo !== null)
  ) {
    for (t = 0; t < Oo.length; t++)
      if (((n = Oo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          a = n.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Oo = null;
  }
  return e;
}
function G5(e, t) {
  do {
    var n = Fe;
    try {
      if ((Z0(), (Xu.current = Bc), Dc)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Dc = !1;
      }
      if (
        ((Ko = 0),
        (Qe = We = Ce = null),
        (Pl = !1),
        (ts = 0),
        (dh.current = null),
        n === null || n.return === null)
      ) {
        (qe = 1), (os = t), (Fe = null);
        break;
      }
      e: {
        var a = e,
          i = n.return,
          l = n,
          s = t;
        if (
          ((t = ot),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            f = l,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = ny(i);
          if (y !== null) {
            (y.flags &= -257),
              ry(y, i, l, a, t),
              y.mode & 1 && ty(a, u, t),
              (t = y),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ty(a, u, t), gh();
              break e;
            }
            s = Error(R(426));
          }
        } else if (xe && l.mode & 1) {
          var S = ny(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ry(S, i, l, a, t),
              G0(vi(s, l));
            break e;
          }
        }
        (a = s = vi(s, l)),
          qe !== 4 && (qe = 2),
          zl === null ? (zl = [a]) : zl.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var d = j5(a, s, t);
              Qv(a, d);
              break e;
            case 1:
              l = s;
              var c = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (to === null || !to.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var x = T5(a, l, t);
                Qv(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      J5(n);
    } catch (b) {
      (t = b), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function X5() {
  var e = Uc.current;
  return (Uc.current = Bc), e === null ? Bc : e;
}
function gh() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
    Ge === null || (!(Qo & 268435455) && !(Md & 268435455)) || Br(Ge, ot);
}
function Hc(e, t) {
  var n = Y;
  Y |= 2;
  var r = X5();
  (Ge !== e || ot !== t) && ((cr = null), Bo(e, t));
  do
    try {
      rS();
      break;
    } catch (o) {
      G5(e, o);
    }
  while (1);
  if ((Z0(), (Y = n), (Uc.current = r), Fe !== null)) throw Error(R(261));
  return (Ge = null), (ot = 0), qe;
}
function rS() {
  for (; Fe !== null; ) Z5(Fe);
}
function oS() {
  for (; Fe !== null && !zk(); ) Z5(Fe);
}
function Z5(e) {
  var t = tx(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? J5(e) : (Fe = t),
    (dh.current = null);
}
function J5(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X8(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (qe = 6), (Fe = null);
        return;
      }
    } else if (((n = G8(n, t, Ut)), n !== null)) {
      Fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function No(e, t, n) {
  var r = oe,
    o = xn.transition;
  try {
    (xn.transition = null), (oe = 1), aS(e, t, n, r);
  } finally {
    (xn.transition = o), (oe = r);
  }
  return null;
}
function aS(e, t, n, r) {
  do ti();
  while (Hr !== null);
  if (Y & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Fk(e, a),
    e === Ge && ((Fe = Ge = null), (ot = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vu ||
      ((vu = !0),
      nx($c, function () {
        return ti(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = xn.transition), (xn.transition = null);
    var i = oe;
    oe = 1;
    var l = Y;
    (Y |= 4),
      (dh.current = null),
      J8(e, n),
      K5(n, e),
      E8(Hm),
      (_c = !!Wm),
      (Hm = Wm = null),
      (e.current = n),
      eS(n),
      Nk(),
      (Y = l),
      (oe = i),
      (xn.transition = a);
  } else e.current = n;
  if (
    (vu && ((vu = !1), (Hr = e), (Wc = o)),
    (a = e.pendingLanes),
    a === 0 && (to = null),
    Tk(n.stateNode),
    Mt(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vc) throw ((Vc = !1), (e = c1), (c1 = null), e);
  return (
    Wc & 1 && e.tag !== 0 && ti(),
    (a = e.pendingLanes),
    a & 1 ? (e === d1 ? Nl++ : ((Nl = 0), (d1 = e))) : (Nl = 0),
    So(),
    null
  );
}
function ti() {
  if (Hr !== null) {
    var e = R3(Wc),
      t = xn.transition,
      n = oe;
    try {
      if (((xn.transition = null), (oe = 16 > e ? 16 : e), Hr === null))
        var r = !1;
      else {
        if (((e = Hr), (Hr = null), (Wc = 0), Y & 6)) throw Error(R(331));
        var o = Y;
        for (Y |= 4, L = e.current; L !== null; ) {
          var a = L,
            i = a.child;
          if (L.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (L = u; L !== null; ) {
                  var f = L;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(8, f, a);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (L = h);
                  else
                    for (; L !== null; ) {
                      f = L;
                      var p = f.sibling,
                        y = f.return;
                      if ((W5(f), f === u)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (L = p);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              L = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (L = i);
          else
            e: for (; L !== null; ) {
              if (((a = L), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _l(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (L = d);
                break e;
              }
              L = a.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          i = L;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (L = m);
          else
            e: for (i = c; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Od(9, l);
                  }
                } catch (b) {
                  je(l, l.return, b);
                }
              if (l === i) {
                L = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (L = x);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((Y = o), So(), or && typeof or.onPostCommitFiberRoot == 'function')
        )
          try {
            or.onPostCommitFiberRoot($d, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (xn.transition = t);
    }
  }
  return !1;
}
function gy(e, t, n) {
  (t = vi(n, t)),
    (t = j5(e, t, 1)),
    (e = eo(e, t, 1)),
    (t = St()),
    e !== null && (Ms(e, 1, t), Mt(e, t));
}
function je(e, t, n) {
  if (e.tag === 3) gy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (to === null || !to.has(r)))
        ) {
          (e = vi(n, e)),
            (e = T5(t, e, 1)),
            (t = eo(t, e, 1)),
            (e = St()),
            t !== null && (Ms(t, 1, e), Mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function iS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = St()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ge === e &&
      (ot & n) === n &&
      (qe === 4 || (qe === 3 && (ot & 130023424) === ot && 500 > Me() - ph)
        ? Bo(e, 0)
        : (fh |= n)),
    Mt(e, t);
}
function ex(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = lu), (lu <<= 1), !(lu & 130023424) && (lu = 4194304))
      : (t = 1));
  var n = St();
  (e = Cr(e, t)), e !== null && (Ms(e, t, n), Mt(e, n));
}
function lS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ex(e, n);
}
function sS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), ex(e, n);
}
var tx;
tx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Tt.current) Rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Rt = !1), Y8(e, t, n);
      Rt = !!(e.flags & 131072);
    }
  else (Rt = !1), xe && t.flags & 1048576 && r5(t, Mc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ju(e, t), (e = t.pendingProps);
      var o = pi(t, vt.current);
      ei(t, n), (o = ih(null, t, r, e, o, n));
      var a = lh();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ot(r) ? ((a = !0), Tc(t)) : (a = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            th(t),
            (o.updater = jd),
            (t.stateNode = o),
            (o._reactInternals = t),
            e1(t, r, e, n),
            (t = r1(null, t, r, !0, a, n)))
          : ((t.tag = 0), xe && a && Q0(t), xt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ju(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = cS(r)),
          (e = Rn(r, e)),
          o)
        ) {
          case 0:
            t = n1(null, t, r, e, n);
            break e;
          case 1:
            t = iy(null, t, r, e, n);
            break e;
          case 11:
            t = oy(null, t, r, e, n);
            break e;
          case 14:
            t = ay(null, t, r, Rn(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rn(r, o)),
        n1(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rn(r, o)),
        iy(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((I5(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (o = a.element),
          l5(e, t),
          Ac(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (o = vi(Error(R(423)), t)), (t = ly(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = vi(Error(R(424)), t)), (t = ly(e, t, r, n, o));
            break e;
          } else
            for (
              Kt = Jr(t.stateNode.containerInfo.firstChild),
                Gt = t,
                xe = !0,
                Mn = null,
                n = d5(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mi(), r === o)) {
            t = Er(e, t, n);
            break e;
          }
          xt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        f5(t),
        e === null && Xm(t),
        (r = t.type),
        (o = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = o.children),
        qm(r, o) ? (i = null) : a !== null && qm(r, a) && (t.flags |= 32),
        L5(e, t),
        xt(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Xm(t), null;
    case 13:
      return A5(e, t, n);
    case 4:
      return (
        nh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hi(t, null, r, n)) : xt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rn(r, o)),
        oy(e, t, r, o, n)
      );
    case 7:
      return xt(e, t, t.pendingProps, n), t.child;
    case 8:
      return xt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (i = o.value),
          ce(Lc, r._currentValue),
          (r._currentValue = i),
          a !== null)
        )
          if (Bn(a.value, i)) {
            if (a.children === o.children && !Tt.current) {
              t = Er(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                i = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (a.tag === 1) {
                      (s = yr(-1, n & -n)), (s.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      Zm(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Zm(i, n, t),
                  (i = a.sibling);
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    (a.return = i.return), (i = a);
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        xt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ei(t, n),
        (o = wn(o)),
        (r = r(o)),
        (t.flags |= 1),
        xt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Rn(r, t.pendingProps)),
        (o = Rn(r.type, o)),
        ay(e, t, r, o, n)
      );
    case 15:
      return O5(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rn(r, o)),
        Ju(e, t),
        (t.tag = 1),
        Ot(r) ? ((e = !0), Tc(t)) : (e = !1),
        ei(t, n),
        u5(t, r, o),
        e1(t, r, o, n),
        r1(null, t, r, !0, e, n)
      );
    case 19:
      return F5(e, t, n);
    case 22:
      return M5(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function nx(e, t) {
  return P3(e, t);
}
function uS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vn(e, t, n, r) {
  return new uS(e, t, n, r);
}
function vh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cS(e) {
  if (typeof e == 'function') return vh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === L0)) return 11;
    if (e === I0) return 14;
  }
  return 2;
}
function ro(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nc(e, t, n, r, o, a) {
  var i = 2;
  if (((r = e), typeof e == 'function')) vh(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Pa:
        return Uo(n.children, o, a, t);
      case M0:
        (i = 8), (o |= 8);
        break;
      case Cm:
        return (
          (e = vn(12, n, t, o | 2)), (e.elementType = Cm), (e.lanes = a), e
        );
      case Em:
        return (e = vn(13, n, t, o)), (e.elementType = Em), (e.lanes = a), e;
      case $m:
        return (e = vn(19, n, t, o)), (e.elementType = $m), (e.lanes = a), e;
      case c3:
        return Ld(n, o, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case s3:
              i = 10;
              break e;
            case u3:
              i = 9;
              break e;
            case L0:
              i = 11;
              break e;
            case I0:
              i = 14;
              break e;
            case Lr:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = vn(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Uo(e, t, n, r) {
  return (e = vn(7, e, r, t)), (e.lanes = n), e;
}
function Ld(e, t, n, r) {
  return (
    (e = vn(22, e, r, t)),
    (e.elementType = c3),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Lp(e, t, n) {
  return (e = vn(6, e, null, t)), (e.lanes = n), e;
}
function Ip(e, t, n) {
  return (
    (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vp(0)),
    (this.expirationTimes = vp(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vp(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function yh(e, t, n, r, o, a, i, l, s) {
  return (
    (e = new dS(e, t, n, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = vn(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    th(a),
    e
  );
}
function fS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $a,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rx(e) {
  if (!e) return yo;
  e = e._reactInternals;
  e: {
    if (oa(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ot(n)) return t5(e, n, t);
  }
  return t;
}
function ox(e, t, n, r, o, a, i, l, s) {
  return (
    (e = yh(n, r, !0, e, o, a, i, l, s)),
    (e.context = rx(null)),
    (n = e.current),
    (r = St()),
    (o = no(n)),
    (a = yr(r, o)),
    (a.callback = t ?? null),
    eo(n, a, o),
    (e.current.lanes = o),
    Ms(e, o, r),
    Mt(e, r),
    e
  );
}
function Id(e, t, n, r) {
  var o = t.current,
    a = St(),
    i = no(o);
  return (
    (n = rx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yr(a, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = eo(o, t, i)),
    e !== null && (An(e, o, i, a), Gu(e, o, i)),
    i
  );
}
function qc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xh(e, t) {
  vy(e, t), (e = e.alternate) && vy(e, t);
}
function pS() {
  return null;
}
var ax =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function bh(e) {
  this._internalRoot = e;
}
Ad.prototype.render = bh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Id(e, t, null, null);
};
Ad.prototype.unmount = bh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yo(function () {
      Id(null, e, null, null);
    }),
      (t[Sr] = null);
  }
};
function Ad(e) {
  this._internalRoot = e;
}
Ad.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = O3();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dr.length && t !== 0 && t < Dr[n].priority; n++);
    Dr.splice(n, 0, e), n === 0 && L3(e);
  }
};
function wh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fd(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function yy() {}
function mS(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var u = qc(i);
        a.call(u);
      };
    }
    var i = ox(t, r, e, 0, null, !1, !1, '', yy);
    return (
      (e._reactRootContainer = i),
      (e[Sr] = i.current),
      Gl(e.nodeType === 8 ? e.parentNode : e),
      Yo(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = qc(s);
      l.call(u);
    };
  }
  var s = yh(e, 0, !1, null, null, !1, !1, '', yy);
  return (
    (e._reactRootContainer = s),
    (e[Sr] = s.current),
    Gl(e.nodeType === 8 ? e.parentNode : e),
    Yo(function () {
      Id(t, s, n, r);
    }),
    s
  );
}
function Dd(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = qc(i);
        l.call(s);
      };
    }
    Id(t, i, e, o);
  } else i = mS(n, t, e, o, r);
  return qc(i);
}
j3 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ml(t.pendingLanes);
        n !== 0 &&
          (D0(t, n | 1), Mt(t, Me()), !(Y & 6) && ((yi = Me() + 500), So()));
      }
      break;
    case 13:
      Yo(function () {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = St();
          An(r, e, 1, o);
        }
      }),
        xh(e, 1);
  }
};
B0 = function (e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = St();
      An(t, e, 134217728, n);
    }
    xh(e, 134217728);
  }
};
T3 = function (e) {
  if (e.tag === 13) {
    var t = no(e),
      n = Cr(e, t);
    if (n !== null) {
      var r = St();
      An(n, e, t, r);
    }
    xh(e, t);
  }
};
O3 = function () {
  return oe;
};
M3 = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Lm = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((zm(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nd(r);
            if (!o) throw Error(R(90));
            f3(r), zm(r, o);
          }
        }
      }
      break;
    case 'textarea':
      m3(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Ga(e, !!n.multiple, t, !1);
  }
};
w3 = mh;
k3 = Yo;
var hS = { usingClientEntryPoint: !1, Events: [Is, Ra, Nd, x3, b3, mh] },
  Xi = {
    findFiberByHostInstance: To,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  gS = {
    bundleType: Xi.bundleType,
    version: Xi.version,
    rendererPackageName: Xi.rendererPackageName,
    rendererConfig: Xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = E3(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xi.findFiberByHostInstance || pS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yu.isDisabled && yu.supportsFiber)
    try {
      ($d = yu.inject(gS)), (or = yu);
    } catch {}
}
nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS;
nn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wh(t)) throw Error(R(200));
  return fS(e, t, null, n);
};
nn.createRoot = function (e, t) {
  if (!wh(e)) throw Error(R(299));
  var n = !1,
    r = '',
    o = ax;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = yh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Sr] = t.current),
    Gl(e.nodeType === 8 ? e.parentNode : e),
    new bh(t)
  );
};
nn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)));
  return (e = E3(t)), (e = e === null ? null : e.stateNode), e;
};
nn.flushSync = function (e) {
  return Yo(e);
};
nn.hydrate = function (e, t, n) {
  if (!Fd(t)) throw Error(R(200));
  return Dd(null, e, t, !0, n);
};
nn.hydrateRoot = function (e, t, n) {
  if (!wh(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    a = '',
    i = ax;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ox(t, null, e, 1, n ?? null, o, !1, a, i)),
    (e[Sr] = t.current),
    Gl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ad(t);
};
nn.render = function (e, t, n) {
  if (!Fd(t)) throw Error(R(200));
  return Dd(null, e, t, !1, n);
};
nn.unmountComponentAtNode = function (e) {
  if (!Fd(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Yo(function () {
        Dd(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sr] = null);
        });
      }),
      !0)
    : !1;
};
nn.unstable_batchedUpdates = mh;
nn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fd(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Dd(e, t, n, !1, r);
};
nn.version = '18.2.0-next-9e3b772b8-20220608';
function ix() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix);
    } catch (e) {
      console.error(e);
    }
}
ix(), (r3.exports = nn);
var vS = r3.exports,
  xy = vS;
(km.createRoot = xy.createRoot), (km.hydrateRoot = xy.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}
var qr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(qr || (qr = {}));
const by = 'popstate';
function yS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: a, search: i, hash: l } = r.location;
    return m1(
      '',
      { pathname: a, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Kc(o);
  }
  return bS(t, n, null, e);
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function kh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xS() {
  return Math.random().toString(36).substr(2, 8);
}
function wy(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function m1(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    as(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ti(t) : t,
      { state: n, key: (t && t.key) || r || xS() }
    )
  );
}
function Kc(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ti(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function bS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: a = !1 } = r,
    i = o.history,
    l = qr.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), i.replaceState(as({}, i.state, { idx: u }), ''));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    l = qr.Pop;
    let S = f(),
      d = S == null ? null : S - u;
    (u = S), s && s({ action: l, location: g.location, delta: d });
  }
  function p(S, d) {
    l = qr.Push;
    let c = m1(g.location, S, d);
    n && n(c, S), (u = f() + 1);
    let m = wy(c, u),
      x = g.createHref(c);
    try {
      i.pushState(m, '', x);
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b;
      o.location.assign(x);
    }
    a && s && s({ action: l, location: g.location, delta: 1 });
  }
  function y(S, d) {
    l = qr.Replace;
    let c = m1(g.location, S, d);
    n && n(c, S), (u = f());
    let m = wy(c, u),
      x = g.createHref(c);
    i.replaceState(m, '', x),
      a && s && s({ action: l, location: g.location, delta: 0 });
  }
  function v(S) {
    let d = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      c = typeof S == 'string' ? S : Kc(S);
    return (
      Be(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, d)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(S) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(by, h),
        (s = S),
        () => {
          o.removeEventListener(by, h), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: v,
    encodeLocation(S) {
      let d = v(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: p,
    replace: y,
    go(S) {
      return i.go(S);
    },
  };
  return g;
}
var ky;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ky || (ky = {}));
function wS(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Ti(t) : t,
    o = Sh(r.pathname || '/', n);
  if (o == null) return null;
  let a = lx(e);
  kS(a);
  let i = null;
  for (let l = 0; i == null && l < a.length; ++l) i = RS(a[l], OS(o));
  return i;
}
function lx(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (a, i, l) => {
    let s = {
      relativePath: l === void 0 ? a.path || '' : l,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a,
    };
    s.relativePath.startsWith('/') &&
      (Be(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = oo([r, s.relativePath]),
      f = n.concat(s);
    a.children &&
      a.children.length > 0 &&
      (Be(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      lx(a.children, t, f, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: zS(u, a.index), routesMeta: f });
  };
  return (
    e.forEach((a, i) => {
      var l;
      if (a.path === '' || !((l = a.path) != null && l.includes('?'))) o(a, i);
      else for (let s of sx(a.path)) o(a, i, s);
    }),
    t
  );
}
function sx(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    a = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [a, ''] : [a];
  let i = sx(r.join('/')),
    l = [];
  return (
    l.push(...i.map((s) => (s === '' ? a : [a, s].join('/')))),
    o && l.push(...i),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function kS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : NS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const SS = /^:\w+$/,
  CS = 3,
  ES = 2,
  $S = 1,
  PS = 10,
  _S = -2,
  Sy = (e) => e === '*';
function zS(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Sy) && (r += _S),
    t && (r += ES),
    n
      .filter((o) => !Sy(o))
      .reduce((o, a) => o + (SS.test(a) ? CS : a === '' ? $S : PS), r)
  );
}
function NS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, r) => n === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function RS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    a = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      s = i === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      f = jS(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = l.route;
    a.push({
      params: r,
      pathname: oo([o, f.pathname]),
      pathnameBase: AS(oo([o, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== '/' && (o = oo([o, f.pathnameBase]));
  }
  return a;
}
function jS(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = TS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let a = o[0],
    i = a.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((s, u, f) => {
      if (u === '*') {
        let h = l[f] || '';
        i = a.slice(0, a.length - h.length).replace(/(.)\/+$/, '$1');
      }
      return (s[u] = MS(l[f] || '', u)), s;
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e,
  };
}
function TS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (a, i) => (r.push(i), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function OS(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      kh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function MS(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      kh(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Sh(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function LS(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Ti(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : IS(n, t)) : t,
    search: FS(r),
    hash: DS(o),
  };
}
function IS(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((r) => {
      r === '..' ? n.length > 1 && n.pop() : r !== '.' && n.push(r);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ap(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ux(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function cx(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Ti(e))
    : ((o = as({}, e)),
      Be(
        !o.pathname || !o.pathname.includes('?'),
        Ap('?', 'pathname', 'search', o)
      ),
      Be(
        !o.pathname || !o.pathname.includes('#'),
        Ap('#', 'pathname', 'hash', o)
      ),
      Be(!o.search || !o.search.includes('#'), Ap('#', 'search', 'hash', o)));
  let a = e === '' || o.pathname === '',
    i = a ? '/' : o.pathname,
    l;
  if (r || i == null) l = n;
  else {
    let h = t.length - 1;
    if (i.startsWith('..')) {
      let p = i.split('/');
      for (; p[0] === '..'; ) p.shift(), (h -= 1);
      o.pathname = p.join('/');
    }
    l = h >= 0 ? t[h] : '/';
  }
  let s = LS(o, l),
    u = i && i !== '/' && i.endsWith('/'),
    f = (a || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || f) && (s.pathname += '/'), s;
}
const oo = (e) => e.join('/').replace(/\/\/+/g, '/'),
  AS = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  FS = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  DS = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function BS(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const dx = ['post', 'put', 'patch', 'delete'];
new Set(dx);
const US = ['get', ...dx];
new Set(US);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qc() {
  return (
    (Qc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qc.apply(this, arguments)
  );
}
const Ch = z.createContext(null),
  VS = z.createContext(null),
  Oi = z.createContext(null),
  Bd = z.createContext(null),
  aa = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fx = z.createContext(null);
function WS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Fs() || Be(!1);
  let { basename: r, navigator: o } = z.useContext(Oi),
    { hash: a, pathname: i, search: l } = mx(e, { relative: n }),
    s = i;
  return (
    r !== '/' && (s = i === '/' ? r : oo([r, i])),
    o.createHref({ pathname: s, search: l, hash: a })
  );
}
function Fs() {
  return z.useContext(Bd) != null;
}
function Ud() {
  return Fs() || Be(!1), z.useContext(Bd).location;
}
function px(e) {
  z.useContext(Oi).static || z.useLayoutEffect(e);
}
function HS() {
  let { isDataRoute: e } = z.useContext(aa);
  return e ? o7() : qS();
}
function qS() {
  Fs() || Be(!1);
  let e = z.useContext(Ch),
    { basename: t, navigator: n } = z.useContext(Oi),
    { matches: r } = z.useContext(aa),
    { pathname: o } = Ud(),
    a = JSON.stringify(ux(r).map((l) => l.pathnameBase)),
    i = z.useRef(!1);
  return (
    px(() => {
      i.current = !0;
    }),
    z.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof l == 'number') {
          n.go(l);
          return;
        }
        let u = cx(l, JSON.parse(a), o, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (u.pathname = u.pathname === '/' ? t : oo([t, u.pathname])),
          (s.replace ? n.replace : n.push)(u, s.state, s);
      },
      [t, n, a, o, e]
    )
  );
}
function mx(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = z.useContext(aa),
    { pathname: o } = Ud(),
    a = JSON.stringify(ux(r).map((i) => i.pathnameBase));
  return z.useMemo(() => cx(e, JSON.parse(a), o, n === 'path'), [e, a, o, n]);
}
function KS(e, t) {
  return QS(e, t);
}
function QS(e, t, n) {
  Fs() || Be(!1);
  let { navigator: r } = z.useContext(Oi),
    { matches: o } = z.useContext(aa),
    a = o[o.length - 1],
    i = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : '/';
  a && a.route;
  let s = Ud(),
    u;
  if (t) {
    var f;
    let g = typeof t == 'string' ? Ti(t) : t;
    l === '/' || ((f = g.pathname) != null && f.startsWith(l)) || Be(!1),
      (u = g);
  } else u = s;
  let h = u.pathname || '/',
    p = l === '/' ? h : h.slice(l.length) || '/',
    y = wS(e, { pathname: p }),
    v = JS(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: oo([
              l,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? l
                : oo([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && v
    ? z.createElement(
        Bd.Provider,
        {
          value: {
            location: Qc(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: qr.Pop,
          },
        },
        v
      )
    : v;
}
function YS() {
  let e = r7(),
    t = BS(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return z.createElement(
    z.Fragment,
    null,
    z.createElement('h2', null, 'Unexpected Application Error!'),
    z.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? z.createElement('pre', { style: r }, n) : null,
    o
  );
}
const GS = z.createElement(YS, null);
class XS extends z.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? z.createElement(
          aa.Provider,
          { value: this.props.routeContext },
          z.createElement(fx.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ZS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = z.useContext(Ch);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    z.createElement(aa.Provider, { value: t }, r)
  );
}
function JS(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let l = a.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    l >= 0 || Be(!1), (a = a.slice(0, Math.min(a.length, l + 1)));
  }
  return a.reduceRight((l, s, u) => {
    let f = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      h = null;
    n && (h = s.route.errorElement || GS);
    let p = t.concat(a.slice(0, u + 1)),
      y = () => {
        let v;
        return (
          f
            ? (v = h)
            : s.route.Component
              ? (v = z.createElement(s.route.Component, null))
              : s.route.element
                ? (v = s.route.element)
                : (v = l),
          z.createElement(ZS, {
            match: s,
            routeContext: { outlet: l, matches: p, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? z.createElement(XS, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: f,
          children: y(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var h1;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate');
})(h1 || (h1 = {}));
var is;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(is || (is = {}));
function e7(e) {
  let t = z.useContext(Ch);
  return t || Be(!1), t;
}
function t7(e) {
  let t = z.useContext(VS);
  return t || Be(!1), t;
}
function n7(e) {
  let t = z.useContext(aa);
  return t || Be(!1), t;
}
function hx(e) {
  let t = n7(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Be(!1), n.route.id;
}
function r7() {
  var e;
  let t = z.useContext(fx),
    n = t7(is.UseRouteError),
    r = hx(is.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function o7() {
  let { router: e } = e7(h1.UseNavigateStable),
    t = hx(is.UseNavigateStable),
    n = z.useRef(!1);
  return (
    px(() => {
      n.current = !0;
    }),
    z.useCallback(
      function (r, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof r == 'number'
              ? e.navigate(r)
              : e.navigate(r, Qc({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function gl(e) {
  Be(!1);
}
function a7(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = qr.Pop,
    navigator: a,
    static: i = !1,
  } = e;
  Fs() && Be(!1);
  let l = t.replace(/^\/*/, '/'),
    s = z.useMemo(() => ({ basename: l, navigator: a, static: i }), [l, a, i]);
  typeof r == 'string' && (r = Ti(r));
  let {
      pathname: u = '/',
      search: f = '',
      hash: h = '',
      state: p = null,
      key: y = 'default',
    } = r,
    v = z.useMemo(() => {
      let g = Sh(u, l);
      return g == null
        ? null
        : {
            location: { pathname: g, search: f, hash: h, state: p, key: y },
            navigationType: o,
          };
    }, [l, u, f, h, p, y, o]);
  return v == null
    ? null
    : z.createElement(
        Oi.Provider,
        { value: s },
        z.createElement(Bd.Provider, { children: n, value: v })
      );
}
function i7(e) {
  let { children: t, location: n } = e;
  return KS(g1(t), n);
}
var Cy;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(Cy || (Cy = {}));
new Promise(() => {});
function g1(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    z.Children.forEach(e, (r, o) => {
      if (!z.isValidElement(r)) return;
      let a = [...t, o];
      if (r.type === z.Fragment) {
        n.push.apply(n, g1(r.props.children, a));
        return;
      }
      r.type !== gl && Be(!1), !r.props.index || !r.props.children || Be(!1);
      let i = {
        id: r.props.id || a.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = g1(r.props.children, a)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function v1() {
  return (
    (v1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    v1.apply(this, arguments)
  );
}
function l7(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function s7(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function u7(e, t) {
  return e.button === 0 && (!t || t === '_self') && !s7(e);
}
const c7 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  d7 = 'startTransition',
  Ey = wm[d7];
function f7(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    a = z.useRef();
  a.current == null && (a.current = yS({ window: o, v5Compat: !0 }));
  let i = a.current,
    [l, s] = z.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = z.useCallback(
      (h) => {
        u && Ey ? Ey(() => s(h)) : s(h);
      },
      [s, u]
    );
  return (
    z.useLayoutEffect(() => i.listen(f), [i, f]),
    z.createElement(a7, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
const p7 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  m7 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xu = z.forwardRef(function (e, t) {
    let {
        onClick: n,
        relative: r,
        reloadDocument: o,
        replace: a,
        state: i,
        target: l,
        to: s,
        preventScrollReset: u,
      } = e,
      f = l7(e, c7),
      { basename: h } = z.useContext(Oi),
      p,
      y = !1;
    if (typeof s == 'string' && m7.test(s) && ((p = s), p7))
      try {
        let d = new URL(window.location.href),
          c = s.startsWith('//') ? new URL(d.protocol + s) : new URL(s),
          m = Sh(c.pathname, h);
        c.origin === d.origin && m != null
          ? (s = m + c.search + c.hash)
          : (y = !0);
      } catch {}
    let v = WS(s, { relative: r }),
      g = h7(s, {
        replace: a,
        state: i,
        target: l,
        preventScrollReset: u,
        relative: r,
      });
    function S(d) {
      n && n(d), d.defaultPrevented || g(d);
    }
    return z.createElement(
      'a',
      v1({}, f, { href: p || v, onClick: y || o ? n : S, ref: t, target: l })
    );
  });
var $y;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})($y || ($y = {}));
var Py;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Py || (Py = {}));
function h7(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: a,
      relative: i,
    } = t === void 0 ? {} : t,
    l = HS(),
    s = Ud(),
    u = mx(e, { relative: i });
  return z.useCallback(
    (f) => {
      if (u7(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Kc(s) === Kc(u);
        l(e, { replace: h, state: o, preventScrollReset: a, relative: i });
      }
    },
    [s, l, u, r, o, n, e, a, i]
  );
}
const g7 = '/assets/homegengar-aa17295e.png';
function Vd() {
  return C.jsxs('div', {
    className: 'flex justify-between fade-in text-white font-mono mt-4',
    children: [
      C.jsxs('div', {
        className: 'flex text-xl underline underline-offset-4',
        children: [
          C.jsx('div', {
            className: 'mx-2 mr-4',
            children: C.jsxs(xu, {
              to: '/',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                C.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                C.jsx('img', {
                  src: g7,
                  alt: 'Home',
                  className: 'relative z-10',
                  style: { width: '50px', height: '40px' },
                }),
              ],
            }),
          }),
          C.jsx('div', {
            className: 'mx-2',
            children: C.jsxs(xu, {
              to: '/blog',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                C.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                C.jsx('span', { className: 'relative z-10', children: 'blog' }),
              ],
            }),
          }),
          C.jsx('div', {
            className: 'mx-2',
            children: C.jsxs(xu, {
              to: '/literature',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                C.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                C.jsx('span', {
                  className: 'relative z-10',
                  children: 'literature',
                }),
              ],
            }),
          }),
          C.jsx('div', {
            className: 'mx-2 ml-4',
            children: C.jsxs(xu, {
              to: '/contact',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                C.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                C.jsx('span', {
                  className: 'relative z-10',
                  children: 'contact',
                }),
              ],
            }),
          }),
        ],
      }),
      C.jsx('div', {}),
    ],
  });
}
const v7 = { black: '#000', white: '#fff' },
  ls = v7,
  y7 = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  pa = y7,
  x7 = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  ma = x7,
  b7 = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  ha = b7,
  w7 = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  ga = w7,
  k7 = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  va = k7,
  S7 = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Zi = S7,
  C7 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  E7 = C7;
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    F.apply(this, arguments)
  );
}
function Ca(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function gx(e) {
  if (!Ca(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = gx(e[n]);
    }),
    t
  );
}
function xr(e, t, n = { clone: !0 }) {
  const r = n.clone ? F({}, e) : e;
  return (
    Ca(e) &&
      Ca(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (Ca(t[o]) && o in e && Ca(e[o])
            ? (r[o] = xr(e[o], t[o], n))
            : n.clone
              ? (r[o] = Ca(t[o]) ? gx(t[o]) : t[o])
              : (r[o] = t[o]));
      }),
    r
  );
}
function xi(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
function wt(e) {
  if (typeof e != 'string') throw new Error(xi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $7(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const P7 = typeof window < 'u' ? z.useLayoutEffect : z.useEffect,
  _7 = P7;
function bu(e) {
  const t = z.useRef(e);
  return (
    _7(() => {
      t.current = e;
    }),
    z.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function _y(...e) {
  return z.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              $7(n, t);
            });
          },
    e
  );
}
let Wd = !0,
  y1 = !1,
  zy;
const z7 = {
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
  'datetime-local': !0,
};
function N7(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && z7[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function R7(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Wd = !0);
}
function Fp() {
  Wd = !1;
}
function j7() {
  this.visibilityState === 'hidden' && y1 && (Wd = !0);
}
function T7(e) {
  e.addEventListener('keydown', R7, !0),
    e.addEventListener('mousedown', Fp, !0),
    e.addEventListener('pointerdown', Fp, !0),
    e.addEventListener('touchstart', Fp, !0),
    e.addEventListener('visibilitychange', j7, !0);
}
function O7(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Wd || N7(t);
}
function M7() {
  const e = z.useCallback((o) => {
      o != null && T7(o.ownerDocument);
    }, []),
    t = z.useRef(!1);
  function n() {
    return t.current
      ? ((y1 = !0),
        window.clearTimeout(zy),
        (zy = window.setTimeout(() => {
          y1 = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return O7(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Eh(e, t) {
  const n = F({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = F({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          a = t[r];
        (n[r] = {}),
          !a || !Object.keys(a)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = a)
              : ((n[r] = F({}, a)),
                Object.keys(o).forEach((i) => {
                  n[r][i] = Eh(o[i], a[i]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function vx(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((a, i) => {
          if (i) {
            const l = t(i);
            l !== '' && a.push(l), n && n[i] && a.push(n[i]);
          }
          return a;
        }, [])
        .join(' ');
    }),
    r
  );
}
const Ny = (e) => e,
  L7 = () => {
    let e = Ny;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ny;
      },
    };
  },
  I7 = L7(),
  A7 = I7,
  F7 = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    readOnly: 'readOnly',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected',
  };
function $h(e, t, n = 'Mui') {
  const r = F7[t];
  return r ? `${n}-${r}` : `${A7.generate(e)}-${t}`;
}
function Ph(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = $h(e, o, n);
    }),
    r
  );
}
const yx = '$$material';
function En(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function xx(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var D7 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  B7 = xx(function (e) {
    return (
      D7.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function U7(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function V7(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var W7 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var a;
        r.tags.length === 0
          ? r.insertionPoint
            ? (a = r.insertionPoint.nextSibling)
            : r.prepend
              ? (a = r.container.firstChild)
              : (a = r.before)
          : (a = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, a),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(V7(this));
        var r = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = U7(r);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else r.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  pt = '-ms-',
  Yc = '-moz-',
  X = '-webkit-',
  bx = 'comm',
  _h = 'rule',
  zh = 'decl',
  H7 = '@import',
  wx = '@keyframes',
  q7 = '@layer',
  K7 = Math.abs,
  Hd = String.fromCharCode,
  Q7 = Object.assign;
function Y7(e, t) {
  return nt(e, 0) ^ 45
    ? (((((((t << 2) ^ nt(e, 0)) << 2) ^ nt(e, 1)) << 2) ^ nt(e, 2)) << 2) ^
        nt(e, 3)
    : 0;
}
function kx(e) {
  return e.trim();
}
function G7(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, n) {
  return e.replace(t, n);
}
function x1(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ss(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function Nh(e) {
  return e.length;
}
function wu(e, t) {
  return t.push(e), e;
}
function X7(e, t) {
  return e.map(t).join('');
}
var qd = 1,
  bi = 1,
  Sx = 0,
  Ft = 0,
  Ie = 0,
  Mi = '';
function Kd(e, t, n, r, o, a, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: a,
    line: qd,
    column: bi,
    length: i,
    return: '',
  };
}
function Ji(e, t) {
  return Q7(Kd('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Z7() {
  return Ie;
}
function J7() {
  return (
    (Ie = Ft > 0 ? nt(Mi, --Ft) : 0), bi--, Ie === 10 && ((bi = 1), qd--), Ie
  );
}
function Xt() {
  return (
    (Ie = Ft < Sx ? nt(Mi, Ft++) : 0), bi++, Ie === 10 && ((bi = 1), qd++), Ie
  );
}
function ir() {
  return nt(Mi, Ft);
}
function rc() {
  return Ft;
}
function Ds(e, t) {
  return ss(Mi, e, t);
}
function us(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cx(e) {
  return (qd = bi = 1), (Sx = Gn((Mi = e))), (Ft = 0), [];
}
function Ex(e) {
  return (Mi = ''), e;
}
function oc(e) {
  return kx(Ds(Ft - 1, b1(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function e9(e) {
  for (; (Ie = ir()) && Ie < 33; ) Xt();
  return us(e) > 2 || us(Ie) > 3 ? '' : ' ';
}
function t9(e, t) {
  for (
    ;
    --t &&
    Xt() &&
    !(Ie < 48 || Ie > 102 || (Ie > 57 && Ie < 65) || (Ie > 70 && Ie < 97));

  );
  return Ds(e, rc() + (t < 6 && ir() == 32 && Xt() == 32));
}
function b1(e) {
  for (; Xt(); )
    switch (Ie) {
      case e:
        return Ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && b1(Ie);
        break;
      case 40:
        e === 41 && b1(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Ft;
}
function n9(e, t) {
  for (; Xt() && e + Ie !== 47 + 10 && !(e + Ie === 42 + 42 && ir() === 47); );
  return '/*' + Ds(t, Ft - 1) + '*' + Hd(e === 47 ? e : Xt());
}
function r9(e) {
  for (; !us(ir()); ) Xt();
  return Ds(e, Ft);
}
function o9(e) {
  return Ex(ac('', null, null, null, [''], (e = Cx(e)), 0, [0], e));
}
function ac(e, t, n, r, o, a, i, l, s) {
  for (
    var u = 0,
      f = 0,
      h = i,
      p = 0,
      y = 0,
      v = 0,
      g = 1,
      S = 1,
      d = 1,
      c = 0,
      m = '',
      x = o,
      b = a,
      k = r,
      w = m;
    S;

  )
    switch (((v = c), (c = Xt()))) {
      case 40:
        if (v != 108 && nt(w, h - 1) == 58) {
          x1((w += J(oc(c), '&', '&\f')), '&\f') != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += oc(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += e9(v);
        break;
      case 92:
        w += t9(rc() - 1, 7);
        continue;
      case 47:
        switch (ir()) {
          case 42:
          case 47:
            wu(a9(n9(Xt(), rc()), t, n), s);
            break;
          default:
            w += '/';
        }
        break;
      case 123 * g:
        l[u++] = Gn(w) * d;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            d == -1 && (w = J(w, /\f/g, '')),
              y > 0 &&
                Gn(w) - h &&
                wu(
                  y > 32
                    ? jy(w + ';', r, n, h - 1)
                    : jy(J(w, ' ', '') + ';', r, n, h - 2),
                  s
                );
            break;
          case 59:
            w += ';';
          default:
            if (
              (wu((k = Ry(w, t, n, u, f, o, l, m, (x = []), (b = []), h)), a),
              c === 123)
            )
              if (f === 0) ac(w, t, k, k, x, a, h, l, b);
              else
                switch (p === 99 && nt(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ac(
                      e,
                      k,
                      k,
                      r && wu(Ry(e, k, k, 0, 0, o, l, m, o, (x = []), h), b),
                      o,
                      b,
                      h,
                      l,
                      r ? x : b
                    );
                    break;
                  default:
                    ac(w, k, k, k, [''], b, 0, l, b);
                }
        }
        (u = f = y = 0), (g = d = 1), (m = w = ''), (h = i);
        break;
      case 58:
        (h = 1 + Gn(w)), (y = v);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && J7() == 125) continue;
        }
        switch (((w += Hd(c)), c * g)) {
          case 38:
            d = f > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            (l[u++] = (Gn(w) - 1) * d), (d = 1);
            break;
          case 64:
            ir() === 45 && (w += oc(Xt())),
              (p = ir()),
              (f = h = Gn((m = w += r9(rc())))),
              c++;
            break;
          case 45:
            v === 45 && Gn(w) == 2 && (g = 0);
        }
    }
  return a;
}
function Ry(e, t, n, r, o, a, i, l, s, u, f) {
  for (
    var h = o - 1, p = o === 0 ? a : [''], y = Nh(p), v = 0, g = 0, S = 0;
    v < r;
    ++v
  )
    for (var d = 0, c = ss(e, h + 1, (h = K7((g = i[v])))), m = e; d < y; ++d)
      (m = kx(g > 0 ? p[d] + ' ' + c : J(c, /&\f/g, p[d]))) && (s[S++] = m);
  return Kd(e, t, n, o === 0 ? _h : l, s, u, f);
}
function a9(e, t, n) {
  return Kd(e, t, n, bx, Hd(Z7()), ss(e, 2, -2), 0);
}
function jy(e, t, n, r) {
  return Kd(e, t, n, zh, ss(e, 0, r), ss(e, r + 1, -1), r);
}
function ni(e, t) {
  for (var n = '', r = Nh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function i9(e, t, n, r) {
  switch (e.type) {
    case q7:
      if (e.children.length) break;
    case H7:
    case zh:
      return (e.return = e.return || e.value);
    case bx:
      return '';
    case wx:
      return (e.return = e.value + '{' + ni(e.children, r) + '}');
    case _h:
      e.value = e.props.join(',');
  }
  return Gn((n = ni(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function l9(e) {
  var t = Nh(e);
  return function (n, r, o, a) {
    for (var i = '', l = 0; l < t; l++) i += e[l](n, r, o, a) || '';
    return i;
  };
}
function s9(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var u9 = function (e, t, n) {
    for (
      var r = 0, o = 0;
      (r = o), (o = ir()), r === 38 && o === 12 && (t[n] = 1), !us(o);

    )
      Xt();
    return Ds(e, Ft);
  },
  c9 = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (us(r)) {
        case 0:
          r === 38 && ir() === 12 && (t[n] = 1), (e[n] += u9(Ft - 1, t, n));
          break;
        case 2:
          e[n] += oc(r);
          break;
        case 4:
          if (r === 44) {
            (e[++n] = ir() === 58 ? '&\f' : ''), (t[n] = e[n].length);
            break;
          }
        default:
          e[n] += Hd(r);
      }
    while ((r = Xt()));
    return e;
  },
  d9 = function (e, t) {
    return Ex(c9(Cx(e), t));
  },
  Ty = new WeakMap(),
  f9 = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          n = e.parent,
          r = e.column === n.column && e.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ty.get(n)) &&
        !r
      ) {
        Ty.set(e, !0);
        for (
          var o = [], a = d9(t, o), i = n.props, l = 0, s = 0;
          l < a.length;
          l++
        )
          for (var u = 0; u < i.length; u++, s++)
            e.props[s] = o[l] ? a[l].replace(/&\f/g, i[u]) : i[u] + ' ' + a[l];
      }
    }
  },
  p9 = function (e) {
    if (e.type === 'decl') {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''));
    }
  };
function $x(e, t) {
  switch (Y7(e, t)) {
    case 5103:
      return X + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + Yc + e + pt + e + e;
    case 6828:
    case 4268:
      return X + e + pt + e + e;
    case 6165:
      return X + e + pt + 'flex-' + e + e;
    case 5187:
      return (
        X + e + J(e, /(\w+).+(:[^]+)/, X + 'box-$1$2' + pt + 'flex-$1$2') + e
      );
    case 5443:
      return X + e + pt + 'flex-item-' + J(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        X +
        e +
        pt +
        'flex-line-pack' +
        J(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return X + e + pt + J(e, 'shrink', 'negative') + e;
    case 5292:
      return X + e + pt + J(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        X +
        'box-' +
        J(e, '-grow', '') +
        X +
        e +
        pt +
        J(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return X + J(e, /([^-])(transform)/g, '$1' + X + '$2') + e;
    case 6187:
      return (
        J(J(J(e, /(zoom-|grab)/, X + '$1'), /(image-set)/, X + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, X + '$1$`$1');
    case 4968:
      return (
        J(
          J(e, /(.+:)(flex-)?(.*)/, X + 'box-pack:$3' + pt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        X +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, X + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Gn(e) - 1 - t > 6)
        switch (nt(e, t + 1)) {
          case 109:
            if (nt(e, t + 4) !== 45) break;
          case 102:
            return (
              J(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  X +
                  '$2-$3$1' +
                  Yc +
                  (nt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~x1(e, 'stretch')
              ? $x(J(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115) break;
    case 6444:
      switch (nt(e, Gn(e) - 3 - (~x1(e, '!important') && 10))) {
        case 107:
          return J(e, ':', ':' + X) + e;
        case 101:
          return (
            J(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                X +
                (nt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                X +
                '$2$3$1' +
                pt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return X + e + pt + J(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return X + e + pt + J(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return X + e + pt + J(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return X + e + pt + e + e;
  }
  return e;
}
var m9 = function (e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case zh:
          e.return = $x(e.value, e.length);
          break;
        case wx:
          return ni([Ji(e, { value: J(e.value, '@', '@' + X) })], r);
        case _h:
          if (e.length)
            return X7(e.props, function (o) {
              switch (G7(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ni(
                    [Ji(e, { props: [J(o, /:(read-\w+)/, ':' + Yc + '$1')] })],
                    r
                  );
                case '::placeholder':
                  return ni(
                    [
                      Ji(e, {
                        props: [J(o, /:(plac\w+)/, ':' + X + 'input-$1')],
                      }),
                      Ji(e, { props: [J(o, /:(plac\w+)/, ':' + Yc + '$1')] }),
                      Ji(e, { props: [J(o, /:(plac\w+)/, pt + 'input-$1')] }),
                    ],
                    r
                  );
              }
              return '';
            });
      }
  },
  h9 = [m9],
  g9 = function (e) {
    var t = e.key;
    if (t === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (v) {
        var g = v.getAttribute('data-emotion');
        g.indexOf(' ') !== -1 &&
          (document.head.appendChild(v), v.setAttribute('data-s', ''));
      });
    }
    var r = e.stylisPlugins || h9,
      o = {},
      a,
      i = [];
    (a = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (v) {
          for (
            var g = v.getAttribute('data-emotion').split(' '), S = 1;
            S < g.length;
            S++
          )
            o[g[S]] = !0;
          i.push(v);
        }
      );
    var l,
      s = [f9, p9];
    {
      var u,
        f = [
          i9,
          s9(function (v) {
            u.insert(v);
          }),
        ],
        h = l9(s.concat(r, f)),
        p = function (v) {
          return ni(o9(v), h);
        };
      l = function (v, g, S, d) {
        (u = S),
          p(v ? v + '{' + g.styles + '}' : g.styles),
          d && (y.inserted[g.name] = !0);
      };
    }
    var y = {
      key: t,
      sheet: new W7({
        key: t,
        container: a,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(i), y;
  },
  Px = { exports: {} },
  ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze = typeof Symbol == 'function' && Symbol.for,
  Rh = Ze ? Symbol.for('react.element') : 60103,
  jh = Ze ? Symbol.for('react.portal') : 60106,
  Qd = Ze ? Symbol.for('react.fragment') : 60107,
  Yd = Ze ? Symbol.for('react.strict_mode') : 60108,
  Gd = Ze ? Symbol.for('react.profiler') : 60114,
  Xd = Ze ? Symbol.for('react.provider') : 60109,
  Zd = Ze ? Symbol.for('react.context') : 60110,
  Th = Ze ? Symbol.for('react.async_mode') : 60111,
  Jd = Ze ? Symbol.for('react.concurrent_mode') : 60111,
  ef = Ze ? Symbol.for('react.forward_ref') : 60112,
  tf = Ze ? Symbol.for('react.suspense') : 60113,
  v9 = Ze ? Symbol.for('react.suspense_list') : 60120,
  nf = Ze ? Symbol.for('react.memo') : 60115,
  rf = Ze ? Symbol.for('react.lazy') : 60116,
  y9 = Ze ? Symbol.for('react.block') : 60121,
  x9 = Ze ? Symbol.for('react.fundamental') : 60117,
  b9 = Ze ? Symbol.for('react.responder') : 60118,
  w9 = Ze ? Symbol.for('react.scope') : 60119;
function on(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Rh:
        switch (((e = e.type), e)) {
          case Th:
          case Jd:
          case Qd:
          case Gd:
          case Yd:
          case tf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Zd:
              case ef:
              case rf:
              case nf:
              case Xd:
                return e;
              default:
                return t;
            }
        }
      case jh:
        return t;
    }
  }
}
function _x(e) {
  return on(e) === Jd;
}
ie.AsyncMode = Th;
ie.ConcurrentMode = Jd;
ie.ContextConsumer = Zd;
ie.ContextProvider = Xd;
ie.Element = Rh;
ie.ForwardRef = ef;
ie.Fragment = Qd;
ie.Lazy = rf;
ie.Memo = nf;
ie.Portal = jh;
ie.Profiler = Gd;
ie.StrictMode = Yd;
ie.Suspense = tf;
ie.isAsyncMode = function (e) {
  return _x(e) || on(e) === Th;
};
ie.isConcurrentMode = _x;
ie.isContextConsumer = function (e) {
  return on(e) === Zd;
};
ie.isContextProvider = function (e) {
  return on(e) === Xd;
};
ie.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Rh;
};
ie.isForwardRef = function (e) {
  return on(e) === ef;
};
ie.isFragment = function (e) {
  return on(e) === Qd;
};
ie.isLazy = function (e) {
  return on(e) === rf;
};
ie.isMemo = function (e) {
  return on(e) === nf;
};
ie.isPortal = function (e) {
  return on(e) === jh;
};
ie.isProfiler = function (e) {
  return on(e) === Gd;
};
ie.isStrictMode = function (e) {
  return on(e) === Yd;
};
ie.isSuspense = function (e) {
  return on(e) === tf;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Qd ||
    e === Jd ||
    e === Gd ||
    e === Yd ||
    e === tf ||
    e === v9 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === rf ||
        e.$$typeof === nf ||
        e.$$typeof === Xd ||
        e.$$typeof === Zd ||
        e.$$typeof === ef ||
        e.$$typeof === x9 ||
        e.$$typeof === b9 ||
        e.$$typeof === w9 ||
        e.$$typeof === y9))
  );
};
ie.typeOf = on;
Px.exports = ie;
var k9 = Px.exports,
  zx = k9,
  S9 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  C9 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Nx = {};
Nx[zx.ForwardRef] = S9;
Nx[zx.Memo] = C9;
var E9 = !0;
function $9(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var Rx = function (e, t, n) {
    var r = e.key + '-' + t.name;
    (n === !1 || E9 === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = t.styles);
  },
  P9 = function (e, t, n) {
    Rx(e, t, n);
    var r = e.key + '-' + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? '.' + r : '', o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function _9(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var z9 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  N9 = /[A-Z]|^ms/g,
  R9 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  jx = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Oy = function (e) {
    return e != null && typeof e != 'boolean';
  },
  Dp = xx(function (e) {
    return jx(e) ? e : e.replace(N9, '-$&').toLowerCase();
  }),
  My = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(R9, function (n, r, o) {
            return (Xn = { name: r, styles: o, next: Xn }), r;
          });
    }
    return z9[e] !== 1 && !jx(e) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
function cs(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (Xn = { name: n.name, styles: n.styles, next: Xn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Xn = { name: r.name, styles: r.styles, next: Xn }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return j9(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var a = Xn,
          i = n(e);
        return (Xn = a), cs(e, t, i);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function j9(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += cs(e, t, n[o]) + ';';
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != 'object')
        t != null && t[i] !== void 0
          ? (r += a + '{' + t[i] + '}')
          : Oy(i) && (r += Dp(a) + ':' + My(a, i) + ';');
      else if (
        Array.isArray(i) &&
        typeof i[0] == 'string' &&
        (t == null || t[i[0]] === void 0)
      )
        for (var l = 0; l < i.length; l++)
          Oy(i[l]) && (r += Dp(a) + ':' + My(a, i[l]) + ';');
      else {
        var s = cs(e, t, i);
        switch (a) {
          case 'animation':
          case 'animationName': {
            r += Dp(a) + ':' + s + ';';
            break;
          }
          default:
            r += a + '{' + s + '}';
        }
      }
    }
  return r;
}
var Ly = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Xn,
  Tx = function (e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == 'object' &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      o = '';
    Xn = void 0;
    var a = e[0];
    a == null || a.raw === void 0
      ? ((r = !1), (o += cs(n, t, a)))
      : (o += a[0]);
    for (var i = 1; i < e.length; i++) (o += cs(n, t, e[i])), r && (o += a[i]);
    Ly.lastIndex = 0;
    for (var l = '', s; (s = Ly.exec(o)) !== null; ) l += '-' + s[1];
    var u = _9(o) + l;
    return { name: u, styles: o, next: Xn };
  },
  T9 = function (e) {
    return e();
  },
  O9 = wm.useInsertionEffect ? wm.useInsertionEffect : !1,
  M9 = O9 || T9,
  Ox = z.createContext(typeof HTMLElement < 'u' ? g9({ key: 'css' }) : null);
Ox.Provider;
var L9 = function (e) {
    return z.forwardRef(function (t, n) {
      var r = z.useContext(Ox);
      return e(t, r, n);
    });
  },
  Mx = z.createContext({});
function I9() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Tx(t);
}
var Oh = function () {
    var e = I9.apply(void 0, arguments),
      t = 'animation-' + e.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  A9 = B7,
  F9 = function (e) {
    return e !== 'theme';
  },
  Iy = function (e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96 ? A9 : F9;
  },
  Ay = function (e, t, n) {
    var r;
    if (t) {
      var o = t.shouldForwardProp;
      r =
        e.__emotion_forwardProp && o
          ? function (a) {
              return e.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof r != 'function' && n && (r = e.__emotion_forwardProp), r;
  },
  D9 = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Rx(t, n, r),
      M9(function () {
        return P9(t, n, r);
      }),
      null
    );
  },
  B9 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      a,
      i;
    n !== void 0 && ((a = n.label), (i = n.target));
    var l = Ay(t, n, r),
      s = l || Iy(o),
      u = !s('as');
    return function () {
      var f = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (a !== void 0 && h.push('label:' + a + ';'),
        f[0] == null || f[0].raw === void 0)
      )
        h.push.apply(h, f);
      else {
        h.push(f[0][0]);
        for (var p = f.length, y = 1; y < p; y++) h.push(f[y], f[0][y]);
      }
      var v = L9(function (g, S, d) {
        var c = (u && g.as) || o,
          m = '',
          x = [],
          b = g;
        if (g.theme == null) {
          b = {};
          for (var k in g) b[k] = g[k];
          b.theme = z.useContext(Mx);
        }
        typeof g.className == 'string'
          ? (m = $9(S.registered, x, g.className))
          : g.className != null && (m = g.className + ' ');
        var w = Tx(h.concat(x), S.registered, b);
        (m += S.key + '-' + w.name), i !== void 0 && (m += ' ' + i);
        var _ = u && l === void 0 ? Iy(c) : s,
          M = {};
        for (var P in g) (u && P === 'as') || (_(P) && (M[P] = g[P]));
        return (
          (M.className = m),
          (M.ref = d),
          z.createElement(
            z.Fragment,
            null,
            z.createElement(D9, {
              cache: S,
              serialized: w,
              isStringTag: typeof c == 'string',
            }),
            z.createElement(c, M)
          )
        );
      });
      return (
        (v.displayName =
          a !== void 0
            ? a
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = h),
        (v.__emotion_forwardProp = l),
        Object.defineProperty(v, 'toString', {
          value: function () {
            return '.' + i;
          },
        }),
        (v.withComponent = function (g, S) {
          return e(g, F({}, n, S, { shouldForwardProp: Ay(v, S, !0) })).apply(
            void 0,
            h
          );
        }),
        v
      );
    };
  },
  U9 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  w1 = B9.bind();
U9.forEach(function (e) {
  w1[e] = w1(e);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function V9(e, t) {
  return w1(e, t);
}
const W9 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  H9 = ['values', 'unit', 'step'],
  q9 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => F({}, n, { [r.key]: r.val }), {})
    );
  };
function K9(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = En(e, H9),
    a = q9(t),
    i = Object.keys(a);
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, y) {
    const v = i.indexOf(y);
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == 'number' ? t[i[v]] : y) - r / 100}${n})`;
  }
  function f(p) {
    return i.indexOf(p) + 1 < i.length ? u(p, i[i.indexOf(p) + 1]) : l(p);
  }
  function h(p) {
    const y = i.indexOf(p);
    return y === 0
      ? l(i[1])
      : y === i.length - 1
        ? s(i[y])
        : u(p, i[i.indexOf(p) + 1]).replace('@media', '@media not all and');
  }
  return F(
    {
      keys: i,
      values: a,
      up: l,
      down: s,
      between: u,
      only: f,
      not: h,
      unit: n,
    },
    o
  );
}
const Q9 = { borderRadius: 4 },
  Y9 = Q9;
function Rl(e, t) {
  return t ? xr(e, t, { clone: !1 }) : e;
}
const Mh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Fy = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Mh[e]}px)`,
  };
function $r(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Fy;
    return t.reduce((a, i, l) => ((a[o.up(o.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || Fy;
    return Object.keys(t).reduce((a, i) => {
      if (Object.keys(o.values || Mh).indexOf(i) !== -1) {
        const l = o.up(i);
        a[l] = n(t[i], i);
      } else {
        const l = i;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function G9(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((n, r) => {
          const o = e.up(r);
          return (n[o] = {}), n;
        }, {})) || {}
  );
}
function X9(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function of(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, a) => (o && o[a] ? o[a] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Gc(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = of(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function te(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    a = (i) => {
      if (i[t] == null) return null;
      const l = i[t],
        s = i.theme,
        u = of(s, r) || {};
      return $r(i, l, (f) => {
        let h = Gc(u, o, f);
        return (
          f === h &&
            typeof f == 'string' &&
            (h = Gc(u, o, `${t}${f === 'default' ? '' : wt(f)}`, f)),
          n === !1 ? h : { [n]: h }
        );
      });
    };
  return (a.propTypes = {}), (a.filterProps = [t]), a;
}
function Z9(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const J9 = { m: 'margin', p: 'padding' },
  eC = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Dy = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  tC = Z9((e) => {
    if (e.length > 2)
      if (Dy[e]) e = Dy[e];
      else return [e];
    const [t, n] = e.split(''),
      r = J9[t],
      o = eC[n] || '';
    return Array.isArray(o) ? o.map((a) => r + a) : [r + o];
  }),
  Lh = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Ih = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Lh, ...Ih];
function Bs(e, t, n, r) {
  var o;
  const a = (o = of(e, t, !1)) != null ? o : n;
  return typeof a == 'number'
    ? (i) => (typeof i == 'string' ? i : a * i)
    : Array.isArray(a)
      ? (i) => (typeof i == 'string' ? i : a[i])
      : typeof a == 'function'
        ? a
        : () => {};
}
function Lx(e) {
  return Bs(e, 'spacing', 8);
}
function Us(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function nC(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Us(t, n)), r), {});
}
function rC(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = tC(n),
    a = nC(o, r),
    i = e[n];
  return $r(e, i, a);
}
function Ix(e, t) {
  const n = Lx(e.theme);
  return Object.keys(e)
    .map((r) => rC(e, t, r, n))
    .reduce(Rl, {});
}
function _e(e) {
  return Ix(e, Lh);
}
_e.propTypes = {};
_e.filterProps = Lh;
function ze(e) {
  return Ix(e, Ih);
}
ze.propTypes = {};
ze.filterProps = Ih;
function oC(e = 8) {
  if (e.mui) return e;
  const t = Lx({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const a = t(o);
          return typeof a == 'number' ? `${a}px` : a;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function af(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((a) => {
          r[a] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, a) => (t[a] ? Rl(o, t[a](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function tr(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const aC = te({ prop: 'border', themeKey: 'borders', transform: tr }),
  iC = te({ prop: 'borderTop', themeKey: 'borders', transform: tr }),
  lC = te({ prop: 'borderRight', themeKey: 'borders', transform: tr }),
  sC = te({ prop: 'borderBottom', themeKey: 'borders', transform: tr }),
  uC = te({ prop: 'borderLeft', themeKey: 'borders', transform: tr }),
  cC = te({ prop: 'borderColor', themeKey: 'palette' }),
  dC = te({ prop: 'borderTopColor', themeKey: 'palette' }),
  fC = te({ prop: 'borderRightColor', themeKey: 'palette' }),
  pC = te({ prop: 'borderBottomColor', themeKey: 'palette' }),
  mC = te({ prop: 'borderLeftColor', themeKey: 'palette' }),
  lf = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Bs(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Us(t, r) });
      return $r(e, e.borderRadius, n);
    }
    return null;
  };
lf.propTypes = {};
lf.filterProps = ['borderRadius'];
af(aC, iC, lC, sC, uC, cC, dC, fC, pC, mC, lf);
const sf = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Bs(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Us(t, r) });
    return $r(e, e.gap, n);
  }
  return null;
};
sf.propTypes = {};
sf.filterProps = ['gap'];
const uf = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Bs(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Us(t, r) });
    return $r(e, e.columnGap, n);
  }
  return null;
};
uf.propTypes = {};
uf.filterProps = ['columnGap'];
const cf = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Bs(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Us(t, r) });
    return $r(e, e.rowGap, n);
  }
  return null;
};
cf.propTypes = {};
cf.filterProps = ['rowGap'];
const hC = te({ prop: 'gridColumn' }),
  gC = te({ prop: 'gridRow' }),
  vC = te({ prop: 'gridAutoFlow' }),
  yC = te({ prop: 'gridAutoColumns' }),
  xC = te({ prop: 'gridAutoRows' }),
  bC = te({ prop: 'gridTemplateColumns' }),
  wC = te({ prop: 'gridTemplateRows' }),
  kC = te({ prop: 'gridTemplateAreas' }),
  SC = te({ prop: 'gridArea' });
af(sf, uf, cf, hC, gC, vC, yC, xC, bC, wC, kC, SC);
function ri(e, t) {
  return t === 'grey' ? t : e;
}
const CC = te({ prop: 'color', themeKey: 'palette', transform: ri }),
  EC = te({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: ri,
  }),
  $C = te({ prop: 'backgroundColor', themeKey: 'palette', transform: ri });
af(CC, EC, $C);
function Wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const PC = te({ prop: 'width', transform: Wt }),
  Ah = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (r = r.breakpoints) == null ||
            (r = r.values) == null
              ? void 0
              : r[n]) ||
            Mh[n] ||
            Wt(n),
        };
      };
      return $r(e, e.maxWidth, t);
    }
    return null;
  };
Ah.filterProps = ['maxWidth'];
const _C = te({ prop: 'minWidth', transform: Wt }),
  zC = te({ prop: 'height', transform: Wt }),
  NC = te({ prop: 'maxHeight', transform: Wt }),
  RC = te({ prop: 'minHeight', transform: Wt });
te({ prop: 'size', cssProperty: 'width', transform: Wt });
te({ prop: 'size', cssProperty: 'height', transform: Wt });
const jC = te({ prop: 'boxSizing' });
af(PC, Ah, _C, zC, NC, RC, jC);
const TC = {
    border: { themeKey: 'borders', transform: tr },
    borderTop: { themeKey: 'borders', transform: tr },
    borderRight: { themeKey: 'borders', transform: tr },
    borderBottom: { themeKey: 'borders', transform: tr },
    borderLeft: { themeKey: 'borders', transform: tr },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: lf },
    color: { themeKey: 'palette', transform: ri },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: ri,
    },
    backgroundColor: { themeKey: 'palette', transform: ri },
    p: { style: ze },
    pt: { style: ze },
    pr: { style: ze },
    pb: { style: ze },
    pl: { style: ze },
    px: { style: ze },
    py: { style: ze },
    padding: { style: ze },
    paddingTop: { style: ze },
    paddingRight: { style: ze },
    paddingBottom: { style: ze },
    paddingLeft: { style: ze },
    paddingX: { style: ze },
    paddingY: { style: ze },
    paddingInline: { style: ze },
    paddingInlineStart: { style: ze },
    paddingInlineEnd: { style: ze },
    paddingBlock: { style: ze },
    paddingBlockStart: { style: ze },
    paddingBlockEnd: { style: ze },
    m: { style: _e },
    mt: { style: _e },
    mr: { style: _e },
    mb: { style: _e },
    ml: { style: _e },
    mx: { style: _e },
    my: { style: _e },
    margin: { style: _e },
    marginTop: { style: _e },
    marginRight: { style: _e },
    marginBottom: { style: _e },
    marginLeft: { style: _e },
    marginX: { style: _e },
    marginY: { style: _e },
    marginInline: { style: _e },
    marginInlineStart: { style: _e },
    marginInlineEnd: { style: _e },
    marginBlock: { style: _e },
    marginBlockStart: { style: _e },
    marginBlockEnd: { style: _e },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ '@media print': { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: sf },
    rowGap: { style: cf },
    columnGap: { style: uf },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: Wt },
    maxWidth: { style: Ah },
    minWidth: { transform: Wt },
    height: { transform: Wt },
    maxHeight: { transform: Wt },
    minHeight: { transform: Wt },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  Fh = TC;
function OC(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function MC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function LC() {
  function e(n, r, o, a) {
    const i = { [n]: r, theme: o },
      l = a[n];
    if (!l) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: f, style: h } = l;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const p = of(o, u) || {};
    return h
      ? h(i)
      : $r(i, r, (y) => {
          let v = Gc(p, f, y);
          return (
            y === v &&
              typeof y == 'string' &&
              (v = Gc(p, f, `${n}${y === 'default' ? '' : wt(y)}`, y)),
            s === !1 ? v : { [s]: v }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: a = {} } = n || {};
    if (!o) return null;
    const i = (r = a.unstable_sxConfig) != null ? r : Fh;
    function l(s) {
      let u = s;
      if (typeof s == 'function') u = s(a);
      else if (typeof s != 'object') return s;
      if (!u) return null;
      const f = G9(a.breakpoints),
        h = Object.keys(f);
      let p = f;
      return (
        Object.keys(u).forEach((y) => {
          const v = MC(u[y], a);
          if (v != null)
            if (typeof v == 'object')
              if (i[y]) p = Rl(p, e(y, v, a, i));
              else {
                const g = $r({ theme: a }, v, (S) => ({ [y]: S }));
                OC(g, v) ? (p[y] = t({ sx: v, theme: a })) : (p = Rl(p, g));
              }
            else p = Rl(p, e(y, v, a, i));
        }),
        X9(h, p)
      );
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Ax = LC();
Ax.filterProps = ['sx'];
const Dh = Ax,
  IC = ['breakpoints', 'palette', 'spacing', 'shape'];
function Bh(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: a = {} } = e,
    i = En(e, IC),
    l = K9(n),
    s = oC(o);
  let u = xr(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: F({ mode: 'light' }, r),
      spacing: s,
      shape: F({}, Y9, a),
    },
    i
  );
  return (
    (u = t.reduce((f, h) => xr(f, h), u)),
    (u.unstable_sxConfig = F({}, Fh, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Dh({ sx: f, theme: this });
    }),
    u
  );
}
function AC(e) {
  return Object.keys(e).length === 0;
}
function FC(e = null) {
  const t = z.useContext(Mx);
  return !t || AC(t) ? e : t;
}
const DC = Bh();
function BC(e = DC) {
  return FC(e);
}
function Fx(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Fx(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function un() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Fx(e)) && (r && (r += ' '), (r += t));
  return r;
}
const UC = ['variant'];
function By(e) {
  return e.length === 0;
}
function Dx(e) {
  const { variant: t } = e,
    n = En(e, UC);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += By(r) ? e[o] : wt(e[o]))
          : (r += `${By(r) ? o : wt(o)}${wt(e[o].toString())}`);
      }),
    r
  );
}
const VC = [
  'name',
  'slot',
  'skipVariantsResolver',
  'skipSx',
  'overridesResolver',
];
function WC(e) {
  return Object.keys(e).length === 0;
}
function HC(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const qC = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  KC = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const a = Dx(o.props);
        r[a] = o.style;
      }),
      r
    );
  },
  QC = (e, t, n, r) => {
    var o;
    const { ownerState: a = {} } = e,
      i = [],
      l =
        n == null || (o = n.components) == null || (o = o[r]) == null
          ? void 0
          : o.variants;
    return (
      l &&
        l.forEach((s) => {
          let u = !0;
          Object.keys(s.props).forEach((f) => {
            a[f] !== s.props[f] && e[f] !== s.props[f] && (u = !1);
          }),
            u && i.push(t[Dx(s.props)]);
        }),
      i
    );
  };
function ic(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const YC = Bh();
function el({ defaultTheme: e, theme: t, themeId: n }) {
  return WC(t) ? e : t[n] || t;
}
function GC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = YC,
      rootShouldForwardProp: r = ic,
      slotShouldForwardProp: o = ic,
    } = e,
    a = (i) =>
      Dh(F({}, i, { theme: el(F({}, i, { defaultTheme: n, themeId: t })) }));
  return (
    (a.__mui_systemSx = !0),
    (i, l = {}) => {
      W9(i, (x) => x.filter((b) => !(b != null && b.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: f,
          skipSx: h,
          overridesResolver: p,
        } = l,
        y = En(l, VC),
        v = f !== void 0 ? f : (u && u !== 'Root') || !1,
        g = h || !1;
      let S,
        d = ic;
      u === 'Root' ? (d = r) : u ? (d = o) : HC(i) && (d = void 0);
      const c = V9(i, F({ shouldForwardProp: d, label: S }, y)),
        m = (x, ...b) => {
          const k = b
            ? b.map((P) =>
                typeof P == 'function' && P.__emotion_real !== P
                  ? (A) =>
                      P(
                        F({}, A, {
                          theme: el(F({}, A, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : P
              )
            : [];
          let w = x;
          s &&
            p &&
            k.push((P) => {
              const A = el(F({}, P, { defaultTheme: n, themeId: t })),
                H = qC(s, A);
              if (H) {
                const Q = {};
                return (
                  Object.entries(H).forEach(([ue, re]) => {
                    Q[ue] =
                      typeof re == 'function' ? re(F({}, P, { theme: A })) : re;
                  }),
                  p(P, Q)
                );
              }
              return null;
            }),
            s &&
              !v &&
              k.push((P) => {
                const A = el(F({}, P, { defaultTheme: n, themeId: t }));
                return QC(P, KC(s, A), A, s);
              }),
            g || k.push(a);
          const _ = k.length - b.length;
          if (Array.isArray(x) && _ > 0) {
            const P = new Array(_).fill('');
            (w = [...x, ...P]), (w.raw = [...x.raw, ...P]);
          } else
            typeof x == 'function' &&
              x.__emotion_real !== x &&
              (w = (P) =>
                x(
                  F({}, P, {
                    theme: el(F({}, P, { defaultTheme: n, themeId: t })),
                  })
                ));
          const M = c(w, ...k);
          return i.muiName && (M.muiName = i.muiName), M;
        };
      return c.withConfig && (m.withConfig = c.withConfig), m;
    }
  );
}
function XC(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Eh(t.components[n].defaultProps, r);
}
function ZC({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = BC(n);
  return r && (o = o[r] || o), XC({ theme: o, name: t, props: e });
}
function Uh(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function JC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function Go(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Go(JC(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(xi(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error(xi(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((a) => parseFloat(a))), { type: n, values: r, colorSpace: o }
  );
}
function df(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, a) => (a < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function eE(e) {
  e = Go(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    a = r * Math.min(o, 1 - o),
    i = (u, f = (u + n / 30) % 12) =>
      o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = 'rgb';
  const s = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((l += 'a'), s.push(t[3])), df({ type: l, values: s })
  );
}
function Uy(e) {
  e = Go(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Go(eE(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function tE(e, t) {
  const n = Uy(e),
    r = Uy(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ku(e, t) {
  return (
    (e = Go(e)),
    (t = Uh(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    df(e)
  );
}
function nE(e, t) {
  if (((e = Go(e)), (t = Uh(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return df(e);
}
function rE(e, t) {
  if (((e = Go(e)), (t = Uh(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return df(e);
}
function oE(e, t) {
  return F(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
const aE = ['mode', 'contrastThreshold', 'tonalOffset'],
  Vy = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: ls.white, default: ls.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Bp = {
    text: {
      primary: ls.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: ls.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Wy(e, t, n, r) {
  const o = r.light || r,
    a = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
        ? (e.light = rE(e.main, o))
        : t === 'dark' && (e.dark = nE(e.main, a)));
}
function iE(e = 'light') {
  return e === 'dark'
    ? { main: ha[200], light: ha[50], dark: ha[400] }
    : { main: ha[700], light: ha[400], dark: ha[800] };
}
function lE(e = 'light') {
  return e === 'dark'
    ? { main: ma[200], light: ma[50], dark: ma[400] }
    : { main: ma[500], light: ma[300], dark: ma[700] };
}
function sE(e = 'light') {
  return e === 'dark'
    ? { main: pa[500], light: pa[300], dark: pa[700] }
    : { main: pa[700], light: pa[400], dark: pa[800] };
}
function uE(e = 'light') {
  return e === 'dark'
    ? { main: ga[400], light: ga[300], dark: ga[700] }
    : { main: ga[700], light: ga[500], dark: ga[900] };
}
function cE(e = 'light') {
  return e === 'dark'
    ? { main: va[400], light: va[300], dark: va[700] }
    : { main: va[800], light: va[500], dark: va[900] };
}
function dE(e = 'light') {
  return e === 'dark'
    ? { main: Zi[400], light: Zi[300], dark: Zi[700] }
    : { main: '#ed6c02', light: Zi[500], dark: Zi[900] };
}
function fE(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = En(e, aE),
    a = e.primary || iE(t),
    i = e.secondary || lE(t),
    l = e.error || sE(t),
    s = e.info || uE(t),
    u = e.success || cE(t),
    f = e.warning || dE(t);
  function h(v) {
    return tE(v, Bp.text.primary) >= n ? Bp.text.primary : Vy.text.primary;
  }
  const p = ({
      color: v,
      name: g,
      mainShade: S = 500,
      lightShade: d = 300,
      darkShade: c = 700,
    }) => {
      if (
        ((v = F({}, v)),
        !v.main && v[S] && (v.main = v[S]),
        !v.hasOwnProperty('main'))
      )
        throw new Error(xi(11, g ? ` (${g})` : '', S));
      if (typeof v.main != 'string')
        throw new Error(xi(12, g ? ` (${g})` : '', JSON.stringify(v.main)));
      return (
        Wy(v, 'light', d, r),
        Wy(v, 'dark', c, r),
        v.contrastText || (v.contrastText = h(v.main)),
        v
      );
    },
    y = { dark: Bp, light: Vy };
  return xr(
    F(
      {
        common: F({}, ls),
        mode: t,
        primary: p({ color: a, name: 'primary' }),
        secondary: p({
          color: i,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: p({ color: l, name: 'error' }),
        warning: p({ color: f, name: 'warning' }),
        info: p({ color: s, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: E7,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: p,
        tonalOffset: r,
      },
      y[t]
    ),
    o
  );
}
const pE = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function mE(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Hy = { textTransform: 'uppercase' },
  qy = '"Roboto", "Helvetica", "Arial", sans-serif';
function hE(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = qy,
      fontSize: o = 14,
      fontWeightLight: a = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: f,
      pxToRem: h,
    } = n,
    p = En(n, pE),
    y = o / 14,
    v = h || ((d) => `${(d / u) * y}rem`),
    g = (d, c, m, x, b) =>
      F(
        { fontFamily: r, fontWeight: d, fontSize: v(c), lineHeight: m },
        r === qy ? { letterSpacing: `${mE(x / c)}em` } : {},
        b,
        f
      ),
    S = {
      h1: g(a, 96, 1.167, -1.5),
      h2: g(a, 60, 1.2, -0.5),
      h3: g(i, 48, 1.167, 0),
      h4: g(i, 34, 1.235, 0.25),
      h5: g(i, 24, 1.334, 0),
      h6: g(l, 20, 1.6, 0.15),
      subtitle1: g(i, 16, 1.75, 0.15),
      subtitle2: g(l, 14, 1.57, 0.1),
      body1: g(i, 16, 1.5, 0.15),
      body2: g(i, 14, 1.43, 0.15),
      button: g(l, 14, 1.75, 0.4, Hy),
      caption: g(i, 12, 1.66, 0.4),
      overline: g(i, 12, 2.66, 1, Hy),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return xr(
    F(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: a,
        fontWeightRegular: i,
        fontWeightMedium: l,
        fontWeightBold: s,
      },
      S
    ),
    p,
    { clone: !1 }
  );
}
const gE = 0.2,
  vE = 0.14,
  yE = 0.12;
function ve(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gE})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vE})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yE})`,
  ].join(',');
}
const xE = [
    'none',
    ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  bE = xE,
  wE = ['duration', 'easing', 'delay'],
  kE = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  SE = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ky(e) {
  return `${Math.round(e)}ms`;
}
function CE(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function EE(e) {
  const t = F({}, kE, e.easing),
    n = F({}, SE, e.duration);
  return F(
    {
      getAutoHeightDuration: CE,
      create: (r = ['all'], o = {}) => {
        const {
          duration: a = n.standard,
          easing: i = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          En(o, wE),
          (Array.isArray(r) ? r : [r])
            .map(
              (s) =>
                `${s} ${typeof a == 'string' ? a : Ky(a)} ${i} ${typeof l == 'string' ? l : Ky(l)}`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const $E = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  PE = $E,
  _E = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function zE(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: a = {},
    } = e,
    i = En(e, _E);
  if (e.vars) throw new Error(xi(18));
  const l = fE(r),
    s = Bh(e);
  let u = xr(s, {
    mixins: oE(s.breakpoints, n),
    palette: l,
    shadows: bE.slice(),
    typography: hE(l, a),
    transitions: EE(o),
    zIndex: F({}, PE),
  });
  return (
    (u = xr(u, i)),
    (u = t.reduce((f, h) => xr(f, h), u)),
    (u.unstable_sxConfig = F({}, Fh, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Dh({ sx: f, theme: this });
    }),
    u
  );
}
const NE = zE(),
  Bx = NE;
function Vh({ props: e, name: t }) {
  return ZC({ props: e, name: t, defaultTheme: Bx, themeId: yx });
}
const Ux = (e) => ic(e) && e !== 'classes',
  RE = GC({ themeId: yx, defaultTheme: Bx, rootShouldForwardProp: Ux }),
  ia = RE;
function k1(e, t) {
  return (
    (k1 = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    k1(e, t)
  );
}
function jE(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    k1(e, t);
}
const Qy = qt.createContext(null);
function TE(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Wh(e, t) {
  var n = function (o) {
      return t && z.isValidElement(o) ? t(o) : o;
    },
    r = Object.create(null);
  return (
    e &&
      z.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function OE(e, t) {
  (e = e || {}), (t = t || {});
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = Object.create(null),
    o = [];
  for (var a in e) a in t ? o.length && ((r[a] = o), (o = [])) : o.push(a);
  var i,
    l = {};
  for (var s in t) {
    if (r[s])
      for (i = 0; i < r[s].length; i++) {
        var u = r[s][i];
        l[r[s][i]] = n(u);
      }
    l[s] = n(s);
  }
  for (i = 0; i < o.length; i++) l[o[i]] = n(o[i]);
  return l;
}
function Lo(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function ME(e, t) {
  return Wh(e.children, function (n) {
    return z.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Lo(n, 'appear', e),
      enter: Lo(n, 'enter', e),
      exit: Lo(n, 'exit', e),
    });
  });
}
function LE(e, t, n) {
  var r = Wh(e.children),
    o = OE(t, r);
  return (
    Object.keys(o).forEach(function (a) {
      var i = o[a];
      if (z.isValidElement(i)) {
        var l = a in t,
          s = a in r,
          u = t[a],
          f = z.isValidElement(u) && !u.props.in;
        s && (!l || f)
          ? (o[a] = z.cloneElement(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: Lo(i, 'exit', e),
              enter: Lo(i, 'enter', e),
            }))
          : !s && l && !f
            ? (o[a] = z.cloneElement(i, { in: !1 }))
            : s &&
              l &&
              z.isValidElement(u) &&
              (o[a] = z.cloneElement(i, {
                onExited: n.bind(null, i),
                in: u.props.in,
                exit: Lo(i, 'exit', e),
                enter: Lo(i, 'enter', e),
              }));
      }
    }),
    o
  );
}
var IE =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  AE = {
    component: 'div',
    childFactory: function (e) {
      return e;
    },
  },
  Hh = (function (e) {
    jE(t, e);
    function t(r, o) {
      var a;
      a = e.call(this, r, o) || this;
      var i = a.handleExited.bind(TE(a));
      return (
        (a.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        a
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (r, o) {
        var a = o.children,
          i = o.handleExited,
          l = o.firstRender;
        return { children: l ? ME(r, i) : LE(r, a, i), firstRender: !1 };
      }),
      (n.handleExited = function (r, o) {
        var a = Wh(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(o),
          this.mounted &&
            this.setState(function (i) {
              var l = F({}, i.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (n.render = function () {
        var r = this.props,
          o = r.component,
          a = r.childFactory,
          i = En(r, ['component', 'childFactory']),
          l = this.state.contextValue,
          s = IE(this.state.children).map(a);
        return (
          delete i.appear,
          delete i.enter,
          delete i.exit,
          o === null
            ? qt.createElement(Qy.Provider, { value: l }, s)
            : qt.createElement(
                Qy.Provider,
                { value: l },
                qt.createElement(o, i, s)
              )
        );
      }),
      t
    );
  })(qt.Component);
Hh.propTypes = {};
Hh.defaultProps = AE;
const FE = Hh;
function DE(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: a,
      rippleSize: i,
      in: l,
      onExited: s,
      timeout: u,
    } = e,
    [f, h] = z.useState(!1),
    p = un(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: i, height: i, top: -(i / 2) + a, left: -(i / 2) + o },
    v = un(n.child, f && n.childLeaving, r && n.childPulsate);
  return (
    !l && !f && h(!0),
    z.useEffect(() => {
      if (!l && s != null) {
        const g = setTimeout(s, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [s, l, u]),
    C.jsx('span', {
      className: p,
      style: y,
      children: C.jsx('span', { className: v }),
    })
  );
}
const BE = Ph('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  cn = BE,
  UE = ['center', 'classes', 'className'];
let ff = (e) => e,
  Yy,
  Gy,
  Xy,
  Zy;
const S1 = 550,
  VE = 80,
  WE = Oh(
    Yy ||
      (Yy = ff`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  HE = Oh(
    Gy ||
      (Gy = ff`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  qE = Oh(
    Xy ||
      (Xy = ff`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  KE = ia('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  QE = ia(DE, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Zy ||
      (Zy = ff`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    cn.rippleVisible,
    WE,
    S1,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    cn.child,
    cn.childLeaving,
    HE,
    S1,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cn.childPulsate,
    qE,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  YE = z.forwardRef(function (e, t) {
    const n = Vh({ props: e, name: 'MuiTouchRipple' }),
      { center: r = !1, classes: o = {}, className: a } = n,
      i = En(n, UE),
      [l, s] = z.useState([]),
      u = z.useRef(0),
      f = z.useRef(null);
    z.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const h = z.useRef(!1),
      p = z.useRef(0),
      y = z.useRef(null),
      v = z.useRef(null);
    z.useEffect(
      () => () => {
        p.current && clearTimeout(p.current);
      },
      []
    );
    const g = z.useCallback(
        (m) => {
          const {
            pulsate: x,
            rippleX: b,
            rippleY: k,
            rippleSize: w,
            cb: _,
          } = m;
          s((M) => [
            ...M,
            C.jsx(
              QE,
              {
                classes: {
                  ripple: un(o.ripple, cn.ripple),
                  rippleVisible: un(o.rippleVisible, cn.rippleVisible),
                  ripplePulsate: un(o.ripplePulsate, cn.ripplePulsate),
                  child: un(o.child, cn.child),
                  childLeaving: un(o.childLeaving, cn.childLeaving),
                  childPulsate: un(o.childPulsate, cn.childPulsate),
                },
                timeout: S1,
                pulsate: x,
                rippleX: b,
                rippleY: k,
                rippleSize: w,
              },
              u.current
            ),
          ]),
            (u.current += 1),
            (f.current = _);
        },
        [o]
      ),
      S = z.useCallback(
        (m = {}, x = {}, b = () => {}) => {
          const {
            pulsate: k = !1,
            center: w = r || x.pulsate,
            fakeElement: _ = !1,
          } = x;
          if ((m == null ? void 0 : m.type) === 'mousedown' && h.current) {
            h.current = !1;
            return;
          }
          (m == null ? void 0 : m.type) === 'touchstart' && (h.current = !0);
          const M = _ ? null : v.current,
            P = M
              ? M.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let A, H, Q;
          if (
            w ||
            m === void 0 ||
            (m.clientX === 0 && m.clientY === 0) ||
            (!m.clientX && !m.touches)
          )
            (A = Math.round(P.width / 2)), (H = Math.round(P.height / 2));
          else {
            const { clientX: ue, clientY: re } =
              m.touches && m.touches.length > 0 ? m.touches[0] : m;
            (A = Math.round(ue - P.left)), (H = Math.round(re - P.top));
          }
          if (w)
            (Q = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3)),
              Q % 2 === 0 && (Q += 1);
          else {
            const ue =
                Math.max(Math.abs((M ? M.clientWidth : 0) - A), A) * 2 + 2,
              re = Math.max(Math.abs((M ? M.clientHeight : 0) - H), H) * 2 + 2;
            Q = Math.sqrt(ue ** 2 + re ** 2);
          }
          m != null && m.touches
            ? y.current === null &&
              ((y.current = () => {
                g({ pulsate: k, rippleX: A, rippleY: H, rippleSize: Q, cb: b });
              }),
              (p.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, VE)))
            : g({ pulsate: k, rippleX: A, rippleY: H, rippleSize: Q, cb: b });
        },
        [r, g]
      ),
      d = z.useCallback(() => {
        S({}, { pulsate: !0 });
      }, [S]),
      c = z.useCallback((m, x) => {
        if (
          (clearTimeout(p.current),
          (m == null ? void 0 : m.type) === 'touchend' && y.current)
        ) {
          y.current(),
            (y.current = null),
            (p.current = setTimeout(() => {
              c(m, x);
            }));
          return;
        }
        (y.current = null),
          s((b) => (b.length > 0 ? b.slice(1) : b)),
          (f.current = x);
      }, []);
    return (
      z.useImperativeHandle(t, () => ({ pulsate: d, start: S, stop: c }), [
        d,
        S,
        c,
      ]),
      C.jsx(
        KE,
        F({ className: un(cn.root, o.root, a), ref: v }, i, {
          children: C.jsx(FE, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  GE = YE;
function XE(e) {
  return $h('MuiButtonBase', e);
}
const ZE = Ph('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  JE = ZE,
  e$ = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  t$ = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = vx({ root: ['root', t && 'disabled', n && 'focusVisible'] }, XE, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  n$ = ia('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${JE.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  r$ = z.forwardRef(function (e, t) {
    const n = Vh({ props: e, name: 'MuiButtonBase' }),
      {
        action: r,
        centerRipple: o = !1,
        children: a,
        className: i,
        component: l = 'button',
        disabled: s = !1,
        disableRipple: u = !1,
        disableTouchRipple: f = !1,
        focusRipple: h = !1,
        LinkComponent: p = 'a',
        onBlur: y,
        onClick: v,
        onContextMenu: g,
        onDragLeave: S,
        onFocus: d,
        onFocusVisible: c,
        onKeyDown: m,
        onKeyUp: x,
        onMouseDown: b,
        onMouseLeave: k,
        onMouseUp: w,
        onTouchEnd: _,
        onTouchMove: M,
        onTouchStart: P,
        tabIndex: A = 0,
        TouchRippleProps: H,
        touchRippleRef: Q,
        type: ue,
      } = n,
      re = En(n, e$),
      we = z.useRef(null),
      ge = z.useRef(null),
      $ = _y(ge, Q),
      { isFocusVisibleRef: T, onFocus: O, onBlur: B, ref: W } = M7(),
      [Ve, se] = z.useState(!1);
    s && Ve && se(!1),
      z.useImperativeHandle(
        r,
        () => ({
          focusVisible: () => {
            se(!0), we.current.focus();
          },
        }),
        []
      );
    const [st, Oe] = z.useState(!1);
    z.useEffect(() => {
      Oe(!0);
    }, []);
    const Bt = st && !u && !s;
    z.useEffect(() => {
      Ve && h && !u && st && ge.current.pulsate();
    }, [u, h, Ve, st]);
    function Pn(V, U, eu = f) {
      return bu(
        (tu) => (U && U(tu), !eu && ge.current && ge.current[V](tu), !0)
      );
    }
    const _n = Pn('start', b),
      np = Pn('stop', g),
      rp = Pn('stop', S),
      op = Pn('stop', w),
      ap = Pn('stop', (V) => {
        Ve && V.preventDefault(), k && k(V);
      }),
      ip = Pn('start', P),
      lp = Pn('stop', _),
      sp = Pn('stop', M),
      up = Pn(
        'stop',
        (V) => {
          B(V), T.current === !1 && se(!1), y && y(V);
        },
        !1
      ),
      cp = bu((V) => {
        we.current || (we.current = V.currentTarget),
          O(V),
          T.current === !0 && (se(!0), c && c(V)),
          d && d(V);
      }),
      Ui = () => {
        const V = we.current;
        return l && l !== 'button' && !(V.tagName === 'A' && V.href);
      },
      Po = z.useRef(!1),
      Vi = bu((V) => {
        h &&
          !Po.current &&
          Ve &&
          ge.current &&
          V.key === ' ' &&
          ((Po.current = !0),
          ge.current.stop(V, () => {
            ge.current.start(V);
          })),
          V.target === V.currentTarget &&
            Ui() &&
            V.key === ' ' &&
            V.preventDefault(),
          m && m(V),
          V.target === V.currentTarget &&
            Ui() &&
            V.key === 'Enter' &&
            !s &&
            (V.preventDefault(), v && v(V));
      }),
      dp = bu((V) => {
        h &&
          V.key === ' ' &&
          ge.current &&
          Ve &&
          !V.defaultPrevented &&
          ((Po.current = !1),
          ge.current.stop(V, () => {
            ge.current.pulsate(V);
          })),
          x && x(V),
          v &&
            V.target === V.currentTarget &&
            Ui() &&
            V.key === ' ' &&
            !V.defaultPrevented &&
            v(V);
      });
    let da = l;
    da === 'button' && (re.href || re.to) && (da = p);
    const Hn = {};
    da === 'button'
      ? ((Hn.type = ue === void 0 ? 'button' : ue), (Hn.disabled = s))
      : (!re.href && !re.to && (Hn.role = 'button'),
        s && (Hn['aria-disabled'] = s));
    const _o = _y(t, W, we),
      Zs = F({}, n, {
        centerRipple: o,
        component: l,
        disabled: s,
        disableRipple: u,
        disableTouchRipple: f,
        focusRipple: h,
        tabIndex: A,
        focusVisible: Ve,
      }),
      Js = t$(Zs);
    return C.jsxs(
      n$,
      F(
        {
          as: da,
          className: un(Js.root, i),
          ownerState: Zs,
          onBlur: up,
          onClick: v,
          onContextMenu: np,
          onFocus: cp,
          onKeyDown: Vi,
          onKeyUp: dp,
          onMouseDown: _n,
          onMouseLeave: ap,
          onMouseUp: op,
          onDragLeave: rp,
          onTouchEnd: lp,
          onTouchMove: sp,
          onTouchStart: ip,
          ref: _o,
          tabIndex: s ? -1 : A,
          type: ue,
        },
        Hn,
        re,
        { children: [a, Bt ? C.jsx(GE, F({ ref: $, center: o }, H)) : null] }
      )
    );
  }),
  o$ = r$;
function a$(e) {
  return $h('MuiButton', e);
}
const i$ = Ph('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  Su = i$,
  l$ = z.createContext({}),
  s$ = l$,
  u$ = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  c$ = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: a,
        classes: i,
      } = e,
      l = {
        root: [
          'root',
          a,
          `${a}${wt(t)}`,
          `size${wt(o)}`,
          `${a}Size${wt(o)}`,
          t === 'inherit' && 'colorInherit',
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['startIcon', `iconSize${wt(o)}`],
        endIcon: ['endIcon', `iconSize${wt(o)}`],
      },
      s = vx(l, a$, i);
    return F({}, i, s);
  },
  Vx = (e) =>
    F(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  d$ = ia(o$, {
    shouldForwardProp: (e) => Ux(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${wt(n.color)}`],
        t[`size${wt(n.size)}`],
        t[`${n.variant}Size${wt(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        a =
          e.palette.mode === 'light'
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return F(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': F(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ku(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : ku(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : ku(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : a,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          '&:active': F(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Su.focusVisible}`]: F(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Su.disabled}`]: F(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === 'outlined' && {
          padding: '5px 15px',
          border: '1px solid currentColor',
        },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${ku(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && {
          color: 'inherit',
          borderColor: 'currentColor',
        },
        t.size === 'small' &&
          t.variant === 'text' && {
            padding: '4px 5px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'text' && {
            padding: '8px 11px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Su.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Su.disabled}`]: { boxShadow: 'none' },
      }
  ),
  f$ = ia('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${wt(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    F(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      Vx(e)
    )
  ),
  p$ = ia('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${wt(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    F(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      Vx(e)
    )
  ),
  m$ = z.forwardRef(function (e, t) {
    const n = z.useContext(s$),
      r = Eh(n, e),
      o = Vh({ props: r, name: 'MuiButton' }),
      {
        children: a,
        color: i = 'primary',
        component: l = 'button',
        className: s,
        disabled: u = !1,
        disableElevation: f = !1,
        disableFocusRipple: h = !1,
        endIcon: p,
        focusVisibleClassName: y,
        fullWidth: v = !1,
        size: g = 'medium',
        startIcon: S,
        type: d,
        variant: c = 'text',
      } = o,
      m = En(o, u$),
      x = F({}, o, {
        color: i,
        component: l,
        disabled: u,
        disableElevation: f,
        disableFocusRipple: h,
        fullWidth: v,
        size: g,
        type: d,
        variant: c,
      }),
      b = c$(x),
      k =
        S && C.jsx(f$, { className: b.startIcon, ownerState: x, children: S }),
      w = p && C.jsx(p$, { className: b.endIcon, ownerState: x, children: p });
    return C.jsxs(
      d$,
      F(
        {
          ownerState: x,
          className: un(n.className, b.root, s),
          component: l,
          disabled: u,
          focusRipple: !h,
          focusVisibleClassName: un(b.focusVisible, y),
          ref: t,
          type: d,
        },
        m,
        { classes: b, children: [k, a, w] }
      )
    );
  }),
  h$ = m$,
  g$ = ia(h$)(() => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 500ms ease-in-out',
    '&:hover': { transform: 'scale(1.1)', borderColor: 'rgb(219, 39, 119)' },
  }));
function v$() {
  const e = 'https://github.com/misaelucas';
  return C.jsx(g$, {
    href: e,
    target: '_blank',
    rel: 'noreferrer',
    variant: 'outlined',
    size: 'large',
    sx: {
      width: 150,
      fontFamily: 'monospace',
      fontSize: '1.10rem',
      color: 'rgb(219, 39, 119)',
      borderColor: 'rgb(219, 39, 119)',
    },
    children: 'Github',
  });
}
var Wx = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Jy = qt.createContext && qt.createContext(Wx),
  ao =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ao =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        ao.apply(this, arguments)
      );
    },
  y$ =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function Hx(e) {
  return (
    e &&
    e.map(function (t, n) {
      return qt.createElement(t.tag, ao({ key: n }, t.attr), Hx(t.child));
    })
  );
}
function Vn(e) {
  return function (t) {
    return qt.createElement(x$, ao({ attr: ao({}, e.attr) }, t), Hx(e.child));
  };
}
function x$(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      a = e.title,
      i = y$(e, ['attr', 'size', 'title']),
      l = o || n.size || '1em',
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      qt.createElement(
        'svg',
        ao(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: s,
            style: ao(ao({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        a && qt.createElement('title', null, a),
        e.children
      )
    );
  };
  return Jy !== void 0
    ? qt.createElement(Jy.Consumer, null, function (n) {
        return t(n);
      })
    : t(Wx);
}
function b$(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z',
        },
      },
    ],
  })(e);
}
function w$(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
      },
    ],
  })(e);
}
function Up(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z',
        },
      },
    ],
  })(e);
}
function e2(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z',
        },
      },
    ],
  })(e);
}
function k$(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z',
        },
      },
    ],
  })(e);
}
function S$(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
        },
      },
    ],
  })(e);
}
function t2(e) {
  return Vn({
    tag: 'svg',
    attr: { viewBox: '0 0 320 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
        },
      },
    ],
  })(e);
}
function C$(e) {
  return Vn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z',
        },
      },
    ],
  })(e);
}
function E$(e) {
  return Vn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z',
        },
      },
    ],
  })(e);
}
function $$(e) {
  return Vn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
        },
      },
    ],
  })(e);
}
const P$ = C.jsxs('svg', {
    stroke: 'currentColor',
    fill: 'currentColor',
    strokeWidth: '0',
    role: 'img',
    viewBox: '0 0 24 24',
    height: '1em',
    width: '1em',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      C.jsx('title', { children: 'Material-UI Icon' }),
      C.jsx('path', {
        d: 'M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z',
      }),
    ],
  }),
  _$ = () => {
    const e = [
        {
          name: 'Anabolic Archives',
          description:
            'Uma aplicação onde usuários podem criar protocolos estéticos e filtrar de acordo com os próprios parâmetros. Fullstack, em desenvolvimento.',
          icon: C.jsx(k$, {}),
          technologiesUsed: ['React', 'TailwindCSS', 'Firebase', 'Material-UI'],
          link: 'https://github.com/misaelucas/anabolica',
        },
        {
          name: 'Baldersbra',
          description:
            'Aplicação em React Native que calcula macros utilizando fórmulas científicas, ele determina a TMB do usuário e fornece as calorias necessárias para seu objetivo.',
          icon: C.jsx(t2, {}),
          technologiesUsed: ['React Native', 'Expo'],
          link: 'https://github.com/misaelucas/baldersbra',
        },
        {
          name: 'Centro Médico Hebrom',
          description:
            'Clínica médica, Single Page Application intuitiva, UI/UX focado em levar o usuário a agendar consultas.',
          icon: C.jsx(e2, {}),
          technologiesUsed: ['React', 'TailwindCSS'],
          link: 'https://centromedicohebrom.com.br',
        },
        {
          name: 'Express CRUD',
          description:
            'API RESTful básico com funcionalidade CRUD para gerenciar uma coleção de usuários.',
          icon: C.jsx(Up, {}),
          technologiesUsed: ['Node.js', 'Express'],
          link: 'https://github.com/misaelucas/crud/',
        },
      ],
      t = {
        React: { icon: C.jsx(e2, {}), bgClass: 'bg-blue-500', name: 'React' },
        Firebase: {
          icon: C.jsx(E$, {}),
          bgClass: 'bg-yellow-600',
          name: 'Firebase',
        },
        'Node.js': {
          icon: C.jsx(Up, {}),
          bgClass: 'bg-green-500',
          name: 'Node.js',
        },
        TailwindCSS: {
          icon: C.jsx($$, {}),
          bgClass: 'bg-sky-600',
          name: 'TailwindCSS',
        },
        'React Native': {
          icon: C.jsx(t2, {}),
          bgClass: 'bg-blue-500',
          name: 'React Native',
        },
        Expo: { icon: C.jsx(C$, {}), bgClass: 'bg-purple-600', name: 'Expo' },
        'Material-UI': {
          icon: P$,
          bgClass: 'bg-indigo-500',
          name: 'Material-UI',
        },
        Express: {
          icon: C.jsx(Up, {}),
          bgClass: 'bg-gray-900',
          name: 'Express',
        },
      };
    return C.jsxs('div', {
      className: 'flex flex-col gap-6 bg-cool-blue p-4 -ml-2 rounded-lg',
      children: [
        C.jsxs('div', {
          className: 'relative blur-opacity group',
          children: [
            C.jsx('div', {
              className:
                'mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 lg:text-3xl font-bold mt-12 w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white',
              children: 'My Work',
            }),
            C.jsx('div', {
              className:
                'absolute underline bottom-0 left-0 w-full h-0.5 bg-pink-600 transition-colors duration-300',
            }),
          ],
        }),
        C.jsx('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto',
          children: e.map((n, r) =>
            C.jsxs(
              'a',
              {
                href: n.link,
                target: '_blank',
                rel: 'noopener noreferrer',
                className:
                  'flex flex-col text-white bg-slate-800 font-mono rounded-lg p-4 shadow-lg hover:bg-pink-700 transition duration-500 ease-in-out transform-gpu hover:scale-105',
                children: [
                  C.jsx('h3', {
                    className: 'text-xl mb-2 md:mb-4',
                    children: n.name,
                  }),
                  C.jsx('p', {
                    className: 'mt-2 mb-4 flex-grow',
                    children: n.description,
                  }),
                  C.jsx('div', {
                    className: 'mt-4 grid grid-cols-2 gap-2',
                    children: n.technologiesUsed.map((o, a) =>
                      C.jsxs(
                        'div',
                        {
                          className: `flex items-center justify-center h-10 md:h-12 rounded-md ${t[o].bgClass}`,
                          children: [
                            t[o].icon,
                            C.jsx('span', {
                              className: 'text-white text-xs ml-1',
                              children: t[o].name,
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                ],
              },
              r
            )
          ),
        }),
      ],
    });
  };
function z$(e) {
  return Vn({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
        },
      },
    ],
  })(e);
}
const pf = () => {
    const e = 'surfing at the internetz';
    return C.jsx('div', {
      className: 'flex flex-wrap justify-center text-sm',
      children: C.jsxs('div', {
        className: 'flex my-2 ',
        children: [
          C.jsx('a', {
            href: 'https://leekspin.com/',
            className:
              'rainbow underline underline-offset-4 mr-1 decoration-white',
            children: e,
          }),
          C.jsx('span', { className: 'ml-1 text-white', children: '-' }),
          C.jsx('a', {
            className:
              'ml-2 underline underline-offset-4 decoration-white hover:text-pink-500',
            href: 'https://github.com/misaelucas',
            children: 'misa',
          }),
          C.jsx('a', {
            className: 'ml-2 text-xl ',
            href: 'https://github.com/misaelucas',
            children: C.jsx(z$, {}),
          }),
        ],
      }),
    });
  },
  N$ = '/assets/gengar-3f099e90.gif',
  R$ = () =>
    C.jsx('div', {
      className:
        'bio flex mt-12 lg:mt-16 text-white justify-center font-mono flex-col',
      children: C.jsxs('div', {
        className: 'flex flex-col ml-8 sm:ml-12 md:ml-20 lg:ml-24',
        children: [
          C.jsx('div', {
            className:
              'font-bold font-sans text-3xl sm:text-4xl md:text-4xl sm:-ml-4 lg:text-5xl tracking-wider',
            children: C.jsxs('div', {
              className: 'flex items-center',
              children: [
                C.jsx('span', { children: 'Hi, I’m Misa.' }),
                C.jsx('img', { src: N$, alt: '', className: 'ml-2 self-end' }),
              ],
            }),
          }),
          C.jsx('div', {
            className: 'text-xl leading-7 mt-4 tracking-tight px-5 lg:w-3/4',
            children:
              'Tenho 24 anos, atualmente trabalho com desenvolvimento web. Também me interesso profundamente por muay thai, estoicismo e bons poemas.',
          }),
          C.jsx('div', {
            className: 'leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4',
            children:
              'Esta é minha página pessoal, fique à vontade para navegar, aqui você poderá encontrar meu portfólio, coisas que gosto de pensar que são interessantes, e a convergência de minhas considerações e percepções sobre a vida.',
          }),
          C.jsxs('div', {
            className: 'leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4',
            children: [
              'Por enquanto, eu desenvolvo dependendo fortemente de',
              ' ',
              C.jsx('a', {
                href: 'https://react.dev/',
                className: 'underline text-blue-500 ',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'React',
              }),
              ', ',
              C.jsx('a', {
                href: 'https://tailwindcss.com/',
                className: 'underline text-sky-500',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Tailwind CSS',
              }),
              ' e ',
              C.jsx('a', {
                href: 'https://openai.com/',
                className: 'underline text-yellow-500',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Firebase.',
              }),
              ' ',
              C.jsx('p', {
                className: 'mt-1  ',
                children:
                  'Todo o meu trabalho é feito com uma abordagem mobile first e design minimalista.',
              }),
              C.jsx('div', { className: 'mt-8', children: C.jsx(v$, {}) }),
            ],
          }),
          C.jsx('div', { className: 'mr-2 -ml-2 ', children: C.jsx(_$, {}) }),
          C.jsx(pf, {}),
        ],
      }),
    });
function j$() {
  return (
    console.log(
      'Howdy, fellow struggler. If you happen to spot any errors, specially about website responsiveness, you can reach me at misaelucas@gmail.com, i will be happy to know.'
    ),
    C.jsxs('div', {
      className: 'App fade-in overflow-hidden',
      children: [C.jsx(Vd, {}), C.jsx(R$, {})],
    })
  );
}
const T$ = '/assets/meandgengar-685e93cd.gif';
function O$() {
  const [e, t] = z.useState(!1),
    [n, r] = z.useState(!0);
  return (
    z.useEffect(() => {
      const o = setTimeout(() => {
          r(!1);
        }, 1500),
        a = setTimeout(() => {
          t(!0);
        }, 1e3);
      return () => {
        clearTimeout(o), clearTimeout(a);
      };
    }, []),
    C.jsxs('div', {
      className: 'contact-container',
      children: [
        C.jsx(Vd, {}),
        C.jsx('div', {
          className: 'content-container',
          children:
            e &&
            C.jsx(C.Fragment, {
              children: C.jsxs('div', {
                className: 'text-center',
                children: [
                  C.jsx('div', {
                    className:
                      'text-xl text-white -mt-20 sm:text-2xl md:text-3xl font-bold mb-4',
                    children: 'Olá, você pode falar comigo por aqui:',
                  }),
                  C.jsxs('div', {
                    className: 'flex justify-center space-x-2 sm:space-x-4',
                    children: [
                      C.jsx('a', {
                        href: 'https://www.linkedin.com/in/misael-lucas/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'text-4xl text-white hover:text-blue-400 transition-colors',
                        children: C.jsx(w$, {}),
                      }),
                      C.jsx('a', {
                        href: 'https://discordapp.com/users/271460156083142656',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'text-4xl text-white hover:text-blue-400 transition-colors',
                        children: C.jsx(b$, {}),
                      }),
                      C.jsx('a', {
                        href: 'mailto:misaelucas@gmail.com',
                        className:
                          'text-4xl text-white hover:text-blue-400 transition-colors',
                        children: C.jsx(S$, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        C.jsx(pf, {}),
        n &&
          C.jsx('div', {
            className:
              'fixed inset-0 bg-cover bg-center bg-no-repeat max-h-screen overflow-hidden transition-opacity duration-500',
            style: { backgroundImage: `url(${T$})`, opacity: e ? 0 : 1 },
          }),
      ],
    })
  );
}
const M$ = () =>
  C.jsxs('div', {
    className: 'flex flex-col font-bold text-justify p-4 sm:p-2 lg:p-1 xl:p-0 ',
    children: [
      C.jsx('p', {
        className: 'mt-3',
        children:
          'A maioria dos homens em todas as suas buscas e interesses os segue em total ignorância sobre qual é a natureza de cada um ou mesmo qual é o valor prático de cada um; em vez disso, eles são atraídos por opinião, prazer ou hábito. Tampouco, por outro lado, no caso daquelas atividades e interesses dos quais eles se abstêm e nos quais evitam se envolver, eles se abstêm porque sabem quais são prejudiciais ou qual é a natureza do dano que acarretam; em vez disso, também nessas questões, tudo o que eles observam que seus vizinhos evitam ou coisas que se tornou seu costume evitar ou que eles supõem que serão desagradáveis para eles e têm a reputação de serem acompanhadas de alguma dor, essas coisas eles geralmente veem com desconfiança.',
      }),
      C.jsxs('p', {
        className: 'mt-3 ',
        children: [
          'Além disso, embora as sensações de prazer e de dor sejam comuns a todos os homens - embora alguns sejam escravizados por elas em menor grau e outros em maior grau - a questão de opinião varia e não é a mesma para todos. Assim acontece que alguns elogiam ou censuram isso e outros aquilo, muitas vezes agindo em desacordo a esse respeito. Por exemplo, a dor é experimentada tanto pelo indiano quanto pelo espartano quando são feridos ou queimados, assim como pelo frígio e pelo lídio; no entanto, enquanto o indiano e o espartano se recusam a fraquejar porque foram endurecidos para isso, o frígio e o lídio fraquejam porque são fracos e não endurecidos. Mais uma vez, embora o prazer seja inevitavelmente experimentado nas relações sexuais e na comida e na bebida que são prazerosas, não apenas pelos jônios, mas também pelos tessálios,',
          ' ',
          C.jsx('a', {
            href: 'https://pt.wikipedia.org/wiki/Magna_Gr%C3%A9cia',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'underline underline-offset-2 text-sky-300 hover:scale-100',
            children: 'gregos italianos',
          }),
          ', getanos, indianos e espartanos, ainda assim alguns não pensam em todos para tais gratificações e não procuram conhecer nenhum deles, enquanto os outros aceitariam a morte como preço para obter um pouco mais de prazer.',
          ' ',
        ],
      }),
      C.jsx('p', {
        className: 'mt-3 ',
        children:
          'Agora, aparentemente, a questão da opinião é de todo tipo concebível e as diferenças encontradas nesta questão são muito numerosas e muito grandes. E é por causa desse fato que em nenhuma raça de animais se encontraria tanta discórdia, nem se encontraria em nenhuma raça tão divergente consigo mesma - tome, por exemplo, cavalos ou cães ou leões ou gado ou veados; ao contrário, animais semelhantes se comportam da mesma forma na alimentação, na procriação e na criação de seus filhotes, e têm os mesmos apetites e as mesmas aversões. A razão é que, em geral, eles seguem apenas o que é agradável e evitam o que é doloroso. Mas a raça humana, que por natureza participa da sabedoria, embora fique aquém dela por causa do mau julgamento e da indiferença, é interiormente cheia de opinião e auto-engano. Além disso, os homens diferem uns dos outros em tudo - no vestuário e na vestimenta, na comida e nos prazeres sexuais, na honra e na desonra - de acordo com as nações e cidades. E da mesma forma também com a cidade, cada um tem sua própria ambição individual - um para obter tanta terra quanto possível, outro prata, outro escravos, outro todas essas coisas juntas, outro para ser admirado por sua eloqüência e assim ter maior poder do que seus semelhantes, outro se esforça apenas para ser inteligente e adquirir experiência na política, outro para ter influência por algum outro motivo, outro para se entregar ao luxo ao máximo.',
      }),
      C.jsx('p', {
        className: 'mt-3 ',
        children:
          'Agora, como eu estava dizendo, em nenhuma dessas atividades, com toda a probabilidade, mesmo aqueles que são considerados os melhores em sua linha a levariam a cabo com sucesso. Pois, não sabendo o que é melhor ou o que é pior ou o que é vantajoso, eles não exercem nenhuma escolha. Mas aquele que desejou sabedoria e pensou em como deveria cuidar de si mesmo e que educação deveria receber para se tornar um homem bom e superior às massas, ele, eu digo, foi abençoado com um bom caráter e com além disso, uma fortuna correspondente. Pois há esperança de que, se ele investigar e receber instrução, descobrirá o que é necessário e com que objetivo e propósito deve conduzir e regular tudo o mais.',
      }),
      C.jsxs('p', {
        className: 'mt-3 ',
        children: [
          'Mas aquele que compreende isso seria a partir desse momento bem-sucedido em todas as coisas, tanto nas que são consideradas mais importantes quanto nas que são consideradas menos; e quer ele acompanhe as corridas de cavalos ou se dedique à música ou à agricultura, ou se ele desejar ser um general ou ocupar os outros cargos ou conduzir os outros negócios públicos em sua cidade, ele fará tudo bem. e não cometeria erros em nada. No entanto, sem esse entendimento, enquanto em cada um de seus trabalhos ele pode às vezes parecer bem-sucedido tanto para si mesmo quanto para seus vizinhos - por exemplo, se como agricultor ele fosse feliz com suas colheitas, ou se ele tivesse mais do que o conhecimento comum com o manejo de cavalos, ou se ele tivesse um conhecimento razoavelmente bom de música, ou se em competições atléticas ele pudesse superar seus competidores - ainda assim, no geral, ele falharia, já que estaria trabalhando nessas coisas para nenhum fim bom nem de modo a obter benefícios.',
          ' ',
        ],
      }),
      C.jsx('p', {
        className: 'mt-3 ',
        children:
          'Portanto, ele é incapaz de prosperar, assim como alguém não pode fazer uma viagem bem-sucedida se não sabe para onde está navegando, sendo levado ao acaso no mar, com seu navio navegando em linha reta em um momento, caso a sorte assim o determine, mas no próximo momento oscilando, em um momento com o vento a favor, no próximo contra o vento. Na verdade, assim como com a lira, os músicos primeiro ajustam a corda do meio e depois afinam as outras para harmonizar com ela - caso contrário, nunca conseguirão qualquer harmonia - assim também na vida, os homens devem primeiro compreender o que é melhor e, tendo feito disso seu objetivo, devem fazer tudo o mais em referência a isso; caso contrário, sua vida estará fora de harmonia e desafinada, muito provavelmente.',
      }),
    ],
  });
function L$() {
  const e = [
    {
      author: 'Dião Crisóstomo',
      title: 'O Sexagésimo Oitavo Discurso: Sobre Opinião',
      text: C.jsx(M$, {}),
    },
  ];
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(Vd, {}),
      C.jsx('div', {
        className: 'text-white font-mono mx-auto max-w-3xl fade-in mt-8',
        children: e.map((t, n) =>
          C.jsxs(
            'div',
            {
              className:
                'py-8 border-t border-white font-sans font-bold border-opacity-25 last:border-b text-center',
              children: [
                C.jsx('h2', {
                  className: 'text-3xl mb-4 ',
                  children: t.author,
                }),
                C.jsx('h3', {
                  className: 'text-xl sm:text-2xl mb-2 px-5 ',
                  children: t.title,
                }),
                C.jsx('p', { className: 'max-w-11/12', children: t.text }),
              ],
            },
            n
          )
        ),
      }),
      C.jsx(pf, {}),
    ],
  });
}
const I$ = () =>
    C.jsx('div', {
      className: 'font-mono ',
      children: C.jsxs('div', {
        className: 'font-mono',
        children: [
          C.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Nos últimos meses eu tenho investido a maior parte do tempo tentando cuidar da minha saúde mental, entre eiras e beiras, conquistei estabilidade suficiente para amar minhas idiossincrasias, depois de tanto tempo...',
          }),
          C.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Imagino que a ideia de referências seja um tanto boba, pois todo escritor decente preza exclusivamente pela emoção, pela experiência, pelo correlato objetivo. Ainda tô tentando abandonar minha vaidade intelectual (COITADOOOO), mas é um negócio difícil assimilar a sabedoria "não só na memória, senão nos olhos, no coração, no estômago." Esse aqui vale referenciar, o livro me ajudou muito - Siddharta, de Hermann Hesse.',
          }),
          C.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Diariamente, estou gastando quase que meu dia inteiro programando p/ fazer o deploy de um projeto grande, mas daí hoje vi uma notícia que me deu vontade de voltar a escrever. Fui refatorar meu site pessoal (que não tem quase nada kkk) para criar um blog e falar sobre esse negócio que rolou na UFSC (meu coração se encheu de animosidade, há anos eu não assisto TV ou mídia tradicional e sou extremamente leigo politicamente, + penso que um amplo entendimento da natureza humana em harmonia c/ um repertório filosófico é suficiente p/ tratar de um espectro enorme desses assuntos) e dei até risada de como meu código era ruim. Fico feliz de perceber o progresso. Tô refatorando ele, e vou fazer um texto desses assuntos aí. Daí: deu vontade de escrever, fui refatorar o código, lembrei que ia esquecer se não anotasse, esqueci os assuntos importantes, kkkkkk. É só uma catarse, e pros meus amigos, não é hipomania não. Dei uma limpada no meu instagram, é muito zoada a forma como isso aqui é usado majoritariamente.',
          }),
          C.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              '"Ocasionalmente, deixo cair uma xícara de chá para quebrar no chão de propósito. Não fico satisfeito quando não se recompõe. Algum dia, talvez, aquela xícara retornará"',
          }),
          C.jsx('p', {
            className: 'mb-4 mt-2 text-lg font-bold',
            children: 'A tua vida inspira outras vidas.',
          }),
          C.jsx('a', {
            href: 'https://www.youtube.com/watch?v=UtdqpL3kbbc',
            className:
              'mb-4 pt-2 text-md underline  underline-offset-2 text-pink-500 font-bold hover:text-sky-400 transition duration-300 ease-in-out transform-gpu hover:scale-105 ',
            children: 'Chip the Cup - Song by Patriot Series',
          }),
        ],
      }),
    }),
  A$ = () => {
    const e = [
        {
          id: 1,
          date: '14 de Julho de 2023',
          title: 'Chip the Cup',
          content: C.jsx(I$, {}),
        },
      ],
      [t, n] = z.useState(null),
      r = (o) => {
        n(o === t ? null : o);
      };
    return C.jsxs('div', {
      className: 'flex flex-col fade-in min-h-screen',
      children: [
        C.jsxs('div', {
          className: 'flex-grow',
          children: [
            C.jsx(Vd, {}),
            C.jsx('div', {
              className:
                'flex justify-center flex-wrap text-center text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white',
              children: 'Creed Thoughts',
            }),
            C.jsx('div', {
              className: 'flex justify-start',
              children: C.jsx('div', {
                className: 'w-full mx-auto',
                children: C.jsxs('div', {
                  className: 'max-w-3xl mx-auto ml-12',
                  children: [
                    C.jsx('h2', {
                      className:
                        'text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white',
                      children: 'Blog Posts',
                    }),
                    e.map((o) =>
                      C.jsxs(
                        'div',
                        {
                          className: `p-4 my-2 bg-gray-700 hover:bg-gray-800 duration-500 rounded-lg cursor-pointer ${t === o.id ? 'w-full -ml-5 sm:-ml-0 bg-gray-800' : 'w-11/12 '}`,
                          onClick: () => r(o.id),
                          children: [
                            C.jsxs('div', {
                              className: 'flex justify-between items-center',
                              children: [
                                C.jsx('h3', {
                                  className:
                                    'text-xl text-sky-400 lg:text-2xl xl:text-2xl font-bold mb-2 text-white',
                                  children: o.title,
                                }),
                                C.jsx('p', {
                                  className:
                                    'text-gray-400 font-mono !text-white',
                                  children: o.date,
                                }),
                              ],
                            }),
                            t === o.id &&
                              C.jsx('div', {
                                className: 'mt-4 text-white ',
                                children: o.content,
                              }),
                          ],
                        },
                        o.id
                      )
                    ),
                  ],
                }),
              }),
            }),
          ],
        }),
        C.jsx(pf, {}),
      ],
    });
  },
  F$ = km.createRoot(document.getElementById('root'));
F$.render(
  C.jsx(f7, {
    children: C.jsxs(i7, {
      children: [
        C.jsx(gl, { path: '/', element: C.jsx(j$, {}) }),
        C.jsx(gl, { path: '/contact', element: C.jsx(O$, {}) }),
        C.jsx(gl, { path: '/literature', element: C.jsx(L$, {}) }),
        C.jsx(gl, { path: '/blog', element: C.jsx(A$, {}) }),
      ],
    }),
  })
);
function D$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var qx = { exports: {} },
  mf = {},
  Kx = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vs = Symbol.for('react.element'),
  B$ = Symbol.for('react.portal'),
  U$ = Symbol.for('react.fragment'),
  V$ = Symbol.for('react.strict_mode'),
  W$ = Symbol.for('react.profiler'),
  H$ = Symbol.for('react.provider'),
  q$ = Symbol.for('react.context'),
  K$ = Symbol.for('react.forward_ref'),
  Q$ = Symbol.for('react.suspense'),
  Y$ = Symbol.for('react.memo'),
  G$ = Symbol.for('react.lazy'),
  n2 = Symbol.iterator;
function X$(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (n2 && e[n2]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Qx = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yx = Object.assign,
  Gx = {};
function Li(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gx),
    (this.updater = n || Qx);
}
Li.prototype.isReactComponent = {};
Li.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Li.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Xx() {}
Xx.prototype = Li.prototype;
function qh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gx),
    (this.updater = n || Qx);
}
var Kh = (qh.prototype = new Xx());
Kh.constructor = qh;
Yx(Kh, Li.prototype);
Kh.isPureReactComponent = !0;
var r2 = Array.isArray,
  Zx = Object.prototype.hasOwnProperty,
  Qh = { current: null },
  Jx = { key: !0, ref: !0, __self: !0, __source: !0 };
function eb(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = '' + t.key),
    t))
      Zx.call(t, r) && !Jx.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Vs,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: Qh.current,
  };
}
function Z$(e, t) {
  return {
    $$typeof: Vs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yh(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Vs;
}
function J$(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var o2 = /\/+/g;
function Vp(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? J$('' + e.key)
    : t.toString(36);
}
function lc(e, t, n, r, o) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Vs:
          case B$:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + Vp(i, 0) : r),
      r2(o)
        ? ((n = ''),
          e != null && (n = e.replace(o2, '$&/') + '/'),
          lc(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Yh(o) &&
            (o = Z$(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(o2, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), r2(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = r + Vp(a, l);
      i += lc(a, t, n, s, o);
    }
  else if (((s = X$(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = r + Vp(a, l++)), (i += lc(a, t, n, s, o));
  else if (a === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function Cu(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    lc(e, r, '', '', function (a) {
      return t.call(n, a, o++);
    }),
    r
  );
}
function eP(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pt = { current: null },
  sc = { transition: null },
  tP = {
    ReactCurrentDispatcher: Pt,
    ReactCurrentBatchConfig: sc,
    ReactCurrentOwner: Qh,
  };
K.Children = {
  map: Cu,
  forEach: function (e, t, n) {
    Cu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Cu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yh(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
K.Component = Li;
K.Fragment = U$;
K.Profiler = W$;
K.PureComponent = qh;
K.StrictMode = V$;
K.Suspense = Q$;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tP;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Yx({}, e.props),
    o = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = Qh.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Zx.call(t, s) &&
        !Jx.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Vs, type: e.type, key: o, ref: a, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: q$,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: H$, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = eb;
K.createFactory = function (e) {
  var t = eb.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: K$, render: e };
};
K.isValidElement = Yh;
K.lazy = function (e) {
  return { $$typeof: G$, _payload: { _status: -1, _result: e }, _init: eP };
};
K.memo = function (e, t) {
  return { $$typeof: Y$, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = sc.transition;
  sc.transition = {};
  try {
    e();
  } finally {
    sc.transition = t;
  }
};
K.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
K.useCallback = function (e, t) {
  return Pt.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Pt.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Pt.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Pt.current.useEffect(e, t);
};
K.useId = function () {
  return Pt.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Pt.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Pt.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Pt.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Pt.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Pt.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Pt.current.useRef(e);
};
K.useState = function (e) {
  return Pt.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Pt.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Pt.current.useTransition();
};
K.version = '18.2.0';
Kx.exports = K;
var N = Kx.exports;
const Qt = D$(N),
  C1 = W6({ __proto__: null, default: Qt }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nP = N,
  rP = Symbol.for('react.element'),
  oP = Symbol.for('react.fragment'),
  aP = Object.prototype.hasOwnProperty,
  iP = nP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lP = { key: !0, ref: !0, __self: !0, __source: !0 };
function tb(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) aP.call(t, r) && !lP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: rP,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: iP.current,
  };
}
mf.Fragment = oP;
mf.jsx = tb;
mf.jsxs = tb;
qx.exports = mf;
var E = qx.exports,
  E1 = {},
  nb = { exports: {} },
  an = {},
  rb = { exports: {} },
  ob = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, T) {
    var O = $.length;
    $.push(T);
    e: for (; 0 < O; ) {
      var B = (O - 1) >>> 1,
        W = $[B];
      if (0 < o(W, T)) ($[B] = T), ($[O] = W), (O = B);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var T = $[0],
      O = $.pop();
    if (O !== T) {
      $[0] = O;
      e: for (var B = 0, W = $.length, Ve = W >>> 1; B < Ve; ) {
        var se = 2 * (B + 1) - 1,
          st = $[se],
          Oe = se + 1,
          Bt = $[Oe];
        if (0 > o(st, O))
          Oe < W && 0 > o(Bt, st)
            ? (($[B] = Bt), ($[Oe] = O), (B = Oe))
            : (($[B] = st), ($[se] = O), (B = se));
        else if (Oe < W && 0 > o(Bt, O)) ($[B] = Bt), ($[Oe] = O), (B = Oe);
        else break e;
      }
    }
    return T;
  }
  function o($, T) {
    var O = $.sortIndex - T.sortIndex;
    return O !== 0 ? O : $.id - T.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var s = [],
    u = [],
    f = 1,
    h = null,
    p = 3,
    y = !1,
    v = !1,
    g = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m($) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= $)
        r(u), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(u);
    }
  }
  function x($) {
    if (((g = !1), m($), !v))
      if (n(s) !== null) (v = !0), we(b);
      else {
        var T = n(u);
        T !== null && ge(x, T.startTime - $);
      }
  }
  function b($, T) {
    (v = !1), g && ((g = !1), d(_), (_ = -1)), (y = !0);
    var O = p;
    try {
      for (
        m(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || ($ && !A()));

      ) {
        var B = h.callback;
        if (typeof B == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var W = B(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof W == 'function' ? (h.callback = W) : h === n(s) && r(s),
            m(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var Ve = !0;
      else {
        var se = n(u);
        se !== null && ge(x, se.startTime - T), (Ve = !1);
      }
      return Ve;
    } finally {
      (h = null), (p = O), (y = !1);
    }
  }
  var k = !1,
    w = null,
    _ = -1,
    M = 5,
    P = -1;
  function A() {
    return !(e.unstable_now() - P < M);
  }
  function H() {
    if (w !== null) {
      var $ = e.unstable_now();
      P = $;
      var T = !0;
      try {
        T = w(!0, $);
      } finally {
        T ? Q() : ((k = !1), (w = null));
      }
    } else k = !1;
  }
  var Q;
  if (typeof c == 'function')
    Q = function () {
      c(H);
    };
  else if (typeof MessageChannel < 'u') {
    var ue = new MessageChannel(),
      re = ue.port2;
    (ue.port1.onmessage = H),
      (Q = function () {
        re.postMessage(null);
      });
  } else
    Q = function () {
      S(H, 0);
    };
  function we($) {
    (w = $), k || ((k = !0), Q());
  }
  function ge($, T) {
    _ = S(function () {
      $(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), we(b));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function ($) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var O = p;
      p = T;
      try {
        return $();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, T) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var O = p;
      p = $;
      try {
        return T();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function ($, T, O) {
      var B = e.unstable_now();
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? B + O : B))
          : (O = B),
        $)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = O + W),
        ($ = {
          id: f++,
          callback: T,
          priorityLevel: $,
          startTime: O,
          expirationTime: W,
          sortIndex: -1,
        }),
        O > B
          ? (($.sortIndex = O),
            t(u, $),
            n(s) === null &&
              $ === n(u) &&
              (g ? (d(_), (_ = -1)) : (g = !0), ge(x, O - B)))
          : (($.sortIndex = W), t(s, $), v || y || ((v = !0), we(b))),
        $
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function ($) {
      var T = p;
      return function () {
        var O = p;
        p = T;
        try {
          return $.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(ob);
rb.exports = ob;
var sP = rb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ab = N,
  tn = sP;
function j(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ib = new Set(),
  ds = {};
function la(e, t) {
  wi(e, t), wi(e + 'Capture', t);
}
function wi(e, t) {
  for (ds[e] = t, e = 0; e < t.length; e++) ib.add(t[e]);
}
var Pr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  $1 = Object.prototype.hasOwnProperty,
  uP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  a2 = {},
  i2 = {};
function cP(e) {
  return $1.call(i2, e)
    ? !0
    : $1.call(a2, e)
      ? !1
      : uP.test(e)
        ? (i2[e] = !0)
        : ((a2[e] = !0), !1);
}
function dP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function fP(e, t, n, r) {
  if (t === null || typeof t > 'u' || dP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _t(e, t, n, r, o, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var lt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    lt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  lt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  lt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  lt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    lt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  lt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  lt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  lt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  lt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gh = /[\-:]([a-z])/g;
function Xh(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Gh, Xh);
    lt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Gh, Xh);
    lt[t] = new _t(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Gh, Xh);
  lt[t] = new _t(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  lt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new _t(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  lt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zh(e, t, n, r) {
  var o = lt.hasOwnProperty(t) ? lt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (fP(t, n, o, r) && (n = null),
    r || o === null
      ? cP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tr = ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Eu = Symbol.for('react.element'),
  Aa = Symbol.for('react.portal'),
  Fa = Symbol.for('react.fragment'),
  Jh = Symbol.for('react.strict_mode'),
  P1 = Symbol.for('react.profiler'),
  lb = Symbol.for('react.provider'),
  sb = Symbol.for('react.context'),
  eg = Symbol.for('react.forward_ref'),
  _1 = Symbol.for('react.suspense'),
  z1 = Symbol.for('react.suspense_list'),
  tg = Symbol.for('react.memo'),
  Ar = Symbol.for('react.lazy'),
  ub = Symbol.for('react.offscreen'),
  l2 = Symbol.iterator;
function tl(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (l2 && e[l2]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Pe = Object.assign,
  Wp;
function vl(e) {
  if (Wp === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wp = (t && t[1]) || '';
    }
  return (
    `
` +
    Wp +
    e
  );
}
var Hp = !1;
function qp(e, t) {
  if (!e || Hp) return '';
  Hp = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          a = r.stack.split(`
`),
          i = o.length - 1,
          l = a.length - 1;
        1 <= i && 0 <= l && o[i] !== a[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== a[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== a[l])) {
                var s =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Hp = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? vl(e) : '';
}
function pP(e) {
  switch (e.tag) {
    case 5:
      return vl(e.type);
    case 16:
      return vl('Lazy');
    case 13:
      return vl('Suspense');
    case 19:
      return vl('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = qp(e.type, !1)), e;
    case 11:
      return (e = qp(e.type.render, !1)), e;
    case 1:
      return (e = qp(e.type, !0)), e;
    default:
      return '';
  }
}
function N1(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Fa:
      return 'Fragment';
    case Aa:
      return 'Portal';
    case P1:
      return 'Profiler';
    case Jh:
      return 'StrictMode';
    case _1:
      return 'Suspense';
    case z1:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case sb:
        return (e.displayName || 'Context') + '.Consumer';
      case lb:
        return (e._context.displayName || 'Context') + '.Provider';
      case eg:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case tg:
        return (
          (t = e.displayName || null), t !== null ? t : N1(e.type) || 'Memo'
        );
      case Ar:
        (t = e._payload), (e = e._init);
        try {
          return N1(e(t));
        } catch {}
    }
  return null;
}
function mP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return N1(t);
    case 8:
      return t === Jh ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function xo(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function cb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function hP(e) {
  var t = cb(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), a.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $u(e) {
  e._valueTracker || (e._valueTracker = hP(e));
}
function db(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = cb(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xc(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function R1(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function s2(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function fb(e, t) {
  (t = t.checked), t != null && Zh(e, 'checked', t, !1);
}
function j1(e, t) {
  fb(e, t);
  var n = xo(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? T1(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && T1(e, t.type, xo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function u2(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function T1(e, t, n) {
  (t !== 'number' || Xc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var yl = Array.isArray;
function oi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + xo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function O1(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function c2(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (yl(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: xo(n) };
}
function pb(e, t) {
  var n = xo(t.value),
    r = xo(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function d2(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function mb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function M1(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? mb(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Pu,
  hb = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Pu = Pu || document.createElement('div'),
          Pu.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Pu.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gP = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(jl).forEach(function (e) {
  gP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jl[t] = jl[e]);
  });
});
function gb(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (jl.hasOwnProperty(e) && jl[e])
      ? ('' + t).trim()
      : t + 'px';
}
function vb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = gb(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var vP = Pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function L1(e, t) {
  if (t) {
    if (vP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function I1(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var A1 = null;
function ng(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var F1 = null,
  ai = null,
  ii = null;
function f2(e) {
  if ((e = qs(e))) {
    if (typeof F1 != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = xf(t)), F1(e.stateNode, e.type, t));
  }
}
function yb(e) {
  ai ? (ii ? ii.push(e) : (ii = [e])) : (ai = e);
}
function xb() {
  if (ai) {
    var e = ai,
      t = ii;
    if (((ii = ai = null), f2(e), t)) for (e = 0; e < t.length; e++) f2(t[e]);
  }
}
function bb(e, t) {
  return e(t);
}
function wb() {}
var Kp = !1;
function kb(e, t, n) {
  if (Kp) return e(t, n);
  Kp = !0;
  try {
    return bb(e, t, n);
  } finally {
    (Kp = !1), (ai !== null || ii !== null) && (wb(), xb());
  }
}
function ps(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xf(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var D1 = !1;
if (Pr)
  try {
    var nl = {};
    Object.defineProperty(nl, 'passive', {
      get: function () {
        D1 = !0;
      },
    }),
      window.addEventListener('test', nl, nl),
      window.removeEventListener('test', nl, nl);
  } catch {
    D1 = !1;
  }
function yP(e, t, n, r, o, a, i, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Tl = !1,
  Zc = null,
  Jc = !1,
  B1 = null,
  xP = {
    onError: function (e) {
      (Tl = !0), (Zc = e);
    },
  };
function bP(e, t, n, r, o, a, i, l, s) {
  (Tl = !1), (Zc = null), yP.apply(xP, arguments);
}
function wP(e, t, n, r, o, a, i, l, s) {
  if ((bP.apply(this, arguments), Tl)) {
    if (Tl) {
      var u = Zc;
      (Tl = !1), (Zc = null);
    } else throw Error(j(198));
    Jc || ((Jc = !0), (B1 = u));
  }
}
function sa(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Sb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function p2(e) {
  if (sa(e) !== e) throw Error(j(188));
}
function kP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sa(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === n) return p2(o), e;
        if (a === r) return p2(o), t;
        a = a.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = a);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = a);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = a.child; l; ) {
          if (l === n) {
            (i = !0), (n = a), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = a), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Cb(e) {
  return (e = kP(e)), e !== null ? Eb(e) : null;
}
function Eb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $b = tn.unstable_scheduleCallback,
  m2 = tn.unstable_cancelCallback,
  SP = tn.unstable_shouldYield,
  CP = tn.unstable_requestPaint,
  Le = tn.unstable_now,
  EP = tn.unstable_getCurrentPriorityLevel,
  rg = tn.unstable_ImmediatePriority,
  Pb = tn.unstable_UserBlockingPriority,
  ed = tn.unstable_NormalPriority,
  $P = tn.unstable_LowPriority,
  _b = tn.unstable_IdlePriority,
  hf = null,
  lr = null;
function PP(e) {
  if (lr && typeof lr.onCommitFiberRoot == 'function')
    try {
      lr.onCommitFiberRoot(hf, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fn = Math.clz32 ? Math.clz32 : NP,
  _P = Math.log,
  zP = Math.LN2;
function NP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_P(e) / zP) | 0)) | 0;
}
var _u = 64,
  zu = 4194304;
function xl(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function td(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = xl(l)) : ((a &= i), a !== 0 && (r = xl(a)));
  } else (i = n & ~o), i !== 0 ? (r = xl(i)) : a !== 0 && (r = xl(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function RP(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jP(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - Fn(a),
      l = 1 << i,
      s = o[i];
    s === -1
      ? (!(l & n) || l & r) && (o[i] = RP(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function U1(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zb() {
  var e = _u;
  return (_u <<= 1), !(_u & 4194240) && (_u = 64), e;
}
function Qp(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ws(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fn(t)),
    (e[t] = n);
}
function TP(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Fn(n),
      a = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
  }
}
function og(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ae = 0;
function Nb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rb,
  ag,
  jb,
  Tb,
  Ob,
  V1 = !1,
  Nu = [],
  io = null,
  lo = null,
  so = null,
  ms = new Map(),
  hs = new Map(),
  Ur = [],
  OP =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function h2(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      io = null;
      break;
    case 'dragenter':
    case 'dragleave':
      lo = null;
      break;
    case 'mouseover':
    case 'mouseout':
      so = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ms.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      hs.delete(t.pointerId);
  }
}
function rl(e, t, n, r, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o],
      }),
      t !== null && ((t = qs(t)), t !== null && ag(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function MP(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (io = rl(io, e, t, n, r, o)), !0;
    case 'dragenter':
      return (lo = rl(lo, e, t, n, r, o)), !0;
    case 'mouseover':
      return (so = rl(so, e, t, n, r, o)), !0;
    case 'pointerover':
      var a = o.pointerId;
      return ms.set(a, rl(ms.get(a) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (a = o.pointerId), hs.set(a, rl(hs.get(a) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Mb(e) {
  var t = Io(e.target);
  if (t !== null) {
    var n = sa(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sb(n)), t !== null)) {
          (e.blockedOn = t),
            Ob(e.priority, function () {
              jb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function uc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = W1(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (A1 = r), n.target.dispatchEvent(r), (A1 = null);
    } else return (t = qs(n)), t !== null && ag(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function g2(e, t, n) {
  uc(e) && n.delete(t);
}
function LP() {
  (V1 = !1),
    io !== null && uc(io) && (io = null),
    lo !== null && uc(lo) && (lo = null),
    so !== null && uc(so) && (so = null),
    ms.forEach(g2),
    hs.forEach(g2);
}
function ol(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    V1 ||
      ((V1 = !0),
      tn.unstable_scheduleCallback(tn.unstable_NormalPriority, LP)));
}
function gs(e) {
  function t(o) {
    return ol(o, e);
  }
  if (0 < Nu.length) {
    ol(Nu[0], e);
    for (var n = 1; n < Nu.length; n++) {
      var r = Nu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    io !== null && ol(io, e),
      lo !== null && ol(lo, e),
      so !== null && ol(so, e),
      ms.forEach(t),
      hs.forEach(t),
      n = 0;
    n < Ur.length;
    n++
  )
    (r = Ur[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ur.length && ((n = Ur[0]), n.blockedOn === null); )
    Mb(n), n.blockedOn === null && Ur.shift();
}
var li = Tr.ReactCurrentBatchConfig,
  nd = !0;
function IP(e, t, n, r) {
  var o = ae,
    a = li.transition;
  li.transition = null;
  try {
    (ae = 1), ig(e, t, n, r);
  } finally {
    (ae = o), (li.transition = a);
  }
}
function AP(e, t, n, r) {
  var o = ae,
    a = li.transition;
  li.transition = null;
  try {
    (ae = 4), ig(e, t, n, r);
  } finally {
    (ae = o), (li.transition = a);
  }
}
function ig(e, t, n, r) {
  if (nd) {
    var o = W1(e, t, n, r);
    if (o === null) om(e, t, r, rd, n), h2(e, r);
    else if (MP(o, e, t, n, r)) r.stopPropagation();
    else if ((h2(e, r), t & 4 && -1 < OP.indexOf(e))) {
      for (; o !== null; ) {
        var a = qs(o);
        if (
          (a !== null && Rb(a),
          (a = W1(e, t, n, r)),
          a === null && om(e, t, r, rd, n),
          a === o)
        )
          break;
        o = a;
      }
      o !== null && r.stopPropagation();
    } else om(e, t, r, null, n);
  }
}
var rd = null;
function W1(e, t, n, r) {
  if (((rd = null), (e = ng(r)), (e = Io(e)), e !== null))
    if (((t = sa(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rd = e), null;
}
function Lb(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (EP()) {
        case rg:
          return 1;
        case Pb:
          return 4;
        case ed:
        case $P:
          return 16;
        case _b:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null,
  lg = null,
  cc = null;
function Ib() {
  if (cc) return cc;
  var e,
    t = lg,
    n = t.length,
    r,
    o = 'value' in Kr ? Kr.value : Kr.textContent,
    a = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[a - r]; r++);
  return (cc = o.slice(e, 1 < r ? 1 - r : void 0));
}
function dc(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ru() {
  return !0;
}
function v2() {
  return !1;
}
function ln(e) {
  function t(n, r, o, a, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ru
        : v2),
      (this.isPropagationStopped = v2),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ru));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ru));
      },
      persist: function () {},
      isPersistent: Ru,
    }),
    t
  );
}
var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sg = ln(Ii),
  Hs = Pe({}, Ii, { view: 0, detail: 0 }),
  FP = ln(Hs),
  Yp,
  Gp,
  al,
  gf = Pe({}, Hs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ug,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== al &&
            (al && e.type === 'mousemove'
              ? ((Yp = e.screenX - al.screenX), (Gp = e.screenY - al.screenY))
              : (Gp = Yp = 0),
            (al = e)),
          Yp);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Gp;
    },
  }),
  y2 = ln(gf),
  DP = Pe({}, gf, { dataTransfer: 0 }),
  BP = ln(DP),
  UP = Pe({}, Hs, { relatedTarget: 0 }),
  Xp = ln(UP),
  VP = Pe({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  WP = ln(VP),
  HP = Pe({}, Ii, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qP = ln(HP),
  KP = Pe({}, Ii, { data: 0 }),
  x2 = ln(KP),
  QP = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  YP = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  GP = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function XP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = GP[e]) ? !!t[e] : !1;
}
function ug() {
  return XP;
}
var ZP = Pe({}, Hs, {
    key: function (e) {
      if (e.key) {
        var t = QP[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = dc(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? YP[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ug,
    charCode: function (e) {
      return e.type === 'keypress' ? dc(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? dc(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  JP = ln(ZP),
  e_ = Pe({}, gf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  b2 = ln(e_),
  t_ = Pe({}, Hs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ug,
  }),
  n_ = ln(t_),
  r_ = Pe({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o_ = ln(r_),
  a_ = Pe({}, gf, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  i_ = ln(a_),
  l_ = [9, 13, 27, 32],
  cg = Pr && 'CompositionEvent' in window,
  Ol = null;
Pr && 'documentMode' in document && (Ol = document.documentMode);
var s_ = Pr && 'TextEvent' in window && !Ol,
  Ab = Pr && (!cg || (Ol && 8 < Ol && 11 >= Ol)),
  w2 = String.fromCharCode(32),
  k2 = !1;
function Fb(e, t) {
  switch (e) {
    case 'keyup':
      return l_.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Db(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Da = !1;
function u_(e, t) {
  switch (e) {
    case 'compositionend':
      return Db(t);
    case 'keypress':
      return t.which !== 32 ? null : ((k2 = !0), w2);
    case 'textInput':
      return (e = t.data), e === w2 && k2 ? null : e;
    default:
      return null;
  }
}
function c_(e, t) {
  if (Da)
    return e === 'compositionend' || (!cg && Fb(e, t))
      ? ((e = Ib()), (cc = lg = Kr = null), (Da = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ab && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var d_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function S2(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!d_[e.type] : t === 'textarea';
}
function Bb(e, t, n, r) {
  yb(r),
    (t = od(t, 'onChange')),
    0 < t.length &&
      ((n = new sg('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ml = null,
  vs = null;
function f_(e) {
  Zb(e, 0);
}
function vf(e) {
  var t = Va(e);
  if (db(t)) return e;
}
function p_(e, t) {
  if (e === 'change') return t;
}
var Ub = !1;
if (Pr) {
  var Zp;
  if (Pr) {
    var Jp = 'oninput' in document;
    if (!Jp) {
      var C2 = document.createElement('div');
      C2.setAttribute('oninput', 'return;'),
        (Jp = typeof C2.oninput == 'function');
    }
    Zp = Jp;
  } else Zp = !1;
  Ub = Zp && (!document.documentMode || 9 < document.documentMode);
}
function E2() {
  Ml && (Ml.detachEvent('onpropertychange', Vb), (vs = Ml = null));
}
function Vb(e) {
  if (e.propertyName === 'value' && vf(vs)) {
    var t = [];
    Bb(t, vs, e, ng(e)), kb(f_, t);
  }
}
function m_(e, t, n) {
  e === 'focusin'
    ? (E2(), (Ml = t), (vs = n), Ml.attachEvent('onpropertychange', Vb))
    : e === 'focusout' && E2();
}
function h_(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return vf(vs);
}
function g_(e, t) {
  if (e === 'click') return vf(t);
}
function v_(e, t) {
  if (e === 'input' || e === 'change') return vf(t);
}
function y_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Un = typeof Object.is == 'function' ? Object.is : y_;
function ys(e, t) {
  if (Un(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$1.call(t, o) || !Un(e[o], t[o])) return !1;
  }
  return !0;
}
function $2(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function P2(e, t) {
  var n = $2(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $2(n);
  }
}
function Wb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Wb(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Hb() {
  for (var e = window, t = Xc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xc(e.document);
  }
  return t;
}
function dg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function x_(e) {
  var t = Hb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && dg(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          a = Math.min(r.start, o);
        (r = r.end === void 0 ? a : Math.min(r.end, o)),
          !e.extend && a > r && ((o = r), (r = a), (a = o)),
          (o = P2(n, a));
        var i = P2(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var b_ = Pr && 'documentMode' in document && 11 >= document.documentMode,
  Ba = null,
  H1 = null,
  Ll = null,
  q1 = !1;
function _2(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  q1 ||
    Ba == null ||
    Ba !== Xc(r) ||
    ((r = Ba),
    'selectionStart' in r && dg(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ll && ys(Ll, r)) ||
      ((Ll = r),
      (r = od(H1, 'onSelect')),
      0 < r.length &&
        ((t = new sg('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ba))));
}
function ju(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ua = {
    animationend: ju('Animation', 'AnimationEnd'),
    animationiteration: ju('Animation', 'AnimationIteration'),
    animationstart: ju('Animation', 'AnimationStart'),
    transitionend: ju('Transition', 'TransitionEnd'),
  },
  em = {},
  qb = {};
Pr &&
  ((qb = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ua.animationend.animation,
    delete Ua.animationiteration.animation,
    delete Ua.animationstart.animation),
  'TransitionEvent' in window || delete Ua.transitionend.transition);
function yf(e) {
  if (em[e]) return em[e];
  if (!Ua[e]) return e;
  var t = Ua[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qb) return (em[e] = t[n]);
  return e;
}
var Kb = yf('animationend'),
  Qb = yf('animationiteration'),
  Yb = yf('animationstart'),
  Gb = yf('transitionend'),
  Xb = new Map(),
  z2 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Co(e, t) {
  Xb.set(e, t), la(t, [e]);
}
for (var tm = 0; tm < z2.length; tm++) {
  var nm = z2[tm],
    w_ = nm.toLowerCase(),
    k_ = nm[0].toUpperCase() + nm.slice(1);
  Co(w_, 'on' + k_);
}
Co(Kb, 'onAnimationEnd');
Co(Qb, 'onAnimationIteration');
Co(Yb, 'onAnimationStart');
Co('dblclick', 'onDoubleClick');
Co('focusin', 'onFocus');
Co('focusout', 'onBlur');
Co(Gb, 'onTransitionEnd');
wi('onMouseEnter', ['mouseout', 'mouseover']);
wi('onMouseLeave', ['mouseout', 'mouseover']);
wi('onPointerEnter', ['pointerout', 'pointerover']);
wi('onPointerLeave', ['pointerout', 'pointerover']);
la(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
la(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
la('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
la(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
la(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
la(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var bl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  S_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bl));
function N2(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), wP(r, t, void 0, e), (e.currentTarget = null);
}
function Zb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
          N2(o, l, u), (a = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && o.isPropagationStopped())
          )
            break e;
          N2(o, l, u), (a = s);
        }
    }
  }
  if (Jc) throw ((e = B1), (Jc = !1), (B1 = null), e);
}
function pe(e, t) {
  var n = t[X1];
  n === void 0 && (n = t[X1] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Jb(t, e, 2, !1), n.add(r));
}
function rm(e, t, n) {
  var r = 0;
  t && (r |= 4), Jb(n, e, r, t);
}
var Tu = '_reactListening' + Math.random().toString(36).slice(2);
function xs(e) {
  if (!e[Tu]) {
    (e[Tu] = !0),
      ib.forEach(function (n) {
        n !== 'selectionchange' && (S_.has(n) || rm(n, !1, e), rm(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tu] || ((t[Tu] = !0), rm('selectionchange', !1, t));
  }
}
function Jb(e, t, n, r) {
  switch (Lb(t)) {
    case 1:
      var o = IP;
      break;
    case 4:
      o = AP;
      break;
    default:
      o = ig;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !D1 ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function om(e, t, n, r, o) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Io(l)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  kb(function () {
    var u = a,
      f = ng(n),
      h = [];
    e: {
      var p = Xb.get(e);
      if (p !== void 0) {
        var y = sg,
          v = e;
        switch (e) {
          case 'keypress':
            if (dc(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = JP;
            break;
          case 'focusin':
            (v = 'focus'), (y = Xp);
            break;
          case 'focusout':
            (v = 'blur'), (y = Xp);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Xp;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = y2;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = BP;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = n_;
            break;
          case Kb:
          case Qb:
          case Yb:
            y = WP;
            break;
          case Gb:
            y = o_;
            break;
          case 'scroll':
            y = FP;
            break;
          case 'wheel':
            y = i_;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = qP;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = b2;
        }
        var g = (t & 4) !== 0,
          S = !g && e === 'scroll',
          d = g ? (p !== null ? p + 'Capture' : null) : p;
        g = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              d !== null && ((x = ps(c, d)), x != null && g.push(bs(c, x, m)))),
            S)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((p = new y(p, v, null, n, f)), h.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== A1 &&
            (v = n.relatedTarget || n.fromElement) &&
            (Io(v) || v[_r]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Io(v) : null),
              v !== null &&
                ((S = sa(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((g = y2),
            (x = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = b2),
              (x = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (S = y == null ? p : Va(y)),
            (m = v == null ? p : Va(v)),
            (p = new g(x, c + 'leave', y, n, f)),
            (p.target = S),
            (p.relatedTarget = m),
            (x = null),
            Io(f) === u &&
              ((g = new g(d, c + 'enter', v, n, f)),
              (g.target = m),
              (g.relatedTarget = S),
              (x = g)),
            (S = x),
            y && v)
          )
            t: {
              for (g = y, d = v, c = 0, m = g; m; m = ya(m)) c++;
              for (m = 0, x = d; x; x = ya(x)) m++;
              for (; 0 < c - m; ) (g = ya(g)), c--;
              for (; 0 < m - c; ) (d = ya(d)), m--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = ya(g)), (d = ya(d));
              }
              g = null;
            }
          else g = null;
          y !== null && R2(h, p, y, g, !1),
            v !== null && S !== null && R2(h, S, v, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? Va(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var b = p_;
        else if (S2(p))
          if (Ub) b = v_;
          else {
            b = h_;
            var k = m_;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = g_);
        if (b && (b = b(e, u))) {
          Bb(h, b, n, f);
          break e;
        }
        k && k(e, p, u),
          e === 'focusout' &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === 'number' &&
            T1(p, 'number', p.value);
      }
      switch (((k = u ? Va(u) : window), e)) {
        case 'focusin':
          (S2(k) || k.contentEditable === 'true') &&
            ((Ba = k), (H1 = u), (Ll = null));
          break;
        case 'focusout':
          Ll = H1 = Ba = null;
          break;
        case 'mousedown':
          q1 = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (q1 = !1), _2(h, n, f);
          break;
        case 'selectionchange':
          if (b_) break;
        case 'keydown':
        case 'keyup':
          _2(h, n, f);
      }
      var w;
      if (cg)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        Da
          ? Fb(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (Ab &&
          n.locale !== 'ko' &&
          (Da || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Da && (w = Ib())
            : ((Kr = f),
              (lg = 'value' in Kr ? Kr.value : Kr.textContent),
              (Da = !0))),
        (k = od(u, _)),
        0 < k.length &&
          ((_ = new x2(_, e, null, n, f)),
          h.push({ event: _, listeners: k }),
          w ? (_.data = w) : ((w = Db(n)), w !== null && (_.data = w)))),
        (w = s_ ? u_(e, n) : c_(e, n)) &&
          ((u = od(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new x2('onBeforeInput', 'beforeinput', null, n, f)),
            h.push({ event: f, listeners: u }),
            (f.data = w)));
    }
    Zb(h, t);
  });
}
function bs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function od(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      a = o.stateNode;
    o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = ps(e, n)),
      a != null && r.unshift(bs(e, a, o)),
      (a = ps(e, t)),
      a != null && r.push(bs(e, a, o))),
      (e = e.return);
  }
  return r;
}
function ya(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function R2(e, t, n, r, o) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = ps(n, a)), s != null && i.unshift(bs(n, s, l)))
        : o || ((s = ps(n, a)), s != null && i.push(bs(n, s, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var C_ = /\r\n?/g,
  E_ = /\u0000|\uFFFD/g;
function j2(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      C_,
      `
`
    )
    .replace(E_, '');
}
function Ou(e, t, n) {
  if (((t = j2(t)), j2(e) !== t && n)) throw Error(j(425));
}
function ad() {}
var K1 = null,
  Q1 = null;
function Y1(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var G1 = typeof setTimeout == 'function' ? setTimeout : void 0,
  $_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  T2 = typeof Promise == 'function' ? Promise : void 0,
  P_ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof T2 < 'u'
        ? function (e) {
            return T2.resolve(null).then(e).catch(__);
          }
        : G1;
function __(e) {
  setTimeout(function () {
    throw e;
  });
}
function am(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), gs(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  gs(t);
}
function uo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function O2(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ai = Math.random().toString(36).slice(2),
  nr = '__reactFiber$' + Ai,
  ws = '__reactProps$' + Ai,
  _r = '__reactContainer$' + Ai,
  X1 = '__reactEvents$' + Ai,
  z_ = '__reactListeners$' + Ai,
  N_ = '__reactHandles$' + Ai;
function Io(e) {
  var t = e[nr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_r] || n[nr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = O2(e); e !== null; ) {
          if ((n = e[nr])) return n;
          e = O2(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qs(e) {
  return (
    (e = e[nr] || e[_r]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Va(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function xf(e) {
  return e[ws] || null;
}
var Z1 = [],
  Wa = -1;
function Eo(e) {
  return { current: e };
}
function he(e) {
  0 > Wa || ((e.current = Z1[Wa]), (Z1[Wa] = null), Wa--);
}
function de(e, t) {
  Wa++, (Z1[Wa] = e.current), (e.current = t);
}
var bo = {},
  yt = Eo(bo),
  Lt = Eo(!1),
  Xo = bo;
function ki(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    a;
  for (a in n) o[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function It(e) {
  return (e = e.childContextTypes), e != null;
}
function id() {
  he(Lt), he(yt);
}
function M2(e, t, n) {
  if (yt.current !== bo) throw Error(j(168));
  de(yt, t), de(Lt, n);
}
function ew(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, mP(e) || 'Unknown', o));
  return Pe({}, n, r);
}
function ld(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bo),
    (Xo = yt.current),
    de(yt, e),
    de(Lt, Lt.current),
    !0
  );
}
function L2(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = ew(e, t, Xo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(Lt),
      he(yt),
      de(yt, e))
    : he(Lt),
    de(Lt, n);
}
var pr = null,
  bf = !1,
  im = !1;
function tw(e) {
  pr === null ? (pr = [e]) : pr.push(e);
}
function R_(e) {
  (bf = !0), tw(e);
}
function $o() {
  if (!im && pr !== null) {
    im = !0;
    var e = 0,
      t = ae;
    try {
      var n = pr;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pr = null), (bf = !1);
    } catch (o) {
      throw (pr !== null && (pr = pr.slice(e + 1)), $b(rg, $o), o);
    } finally {
      (ae = t), (im = !1);
    }
  }
  return null;
}
var Ha = [],
  qa = 0,
  sd = null,
  ud = 0,
  hn = [],
  gn = 0,
  Zo = null,
  gr = 1,
  vr = '';
function Ro(e, t) {
  (Ha[qa++] = ud), (Ha[qa++] = sd), (sd = e), (ud = t);
}
function nw(e, t, n) {
  (hn[gn++] = gr), (hn[gn++] = vr), (hn[gn++] = Zo), (Zo = e);
  var r = gr;
  e = vr;
  var o = 32 - Fn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var a = 32 - Fn(t) + o;
  if (30 < a) {
    var i = o - (o % 5);
    (a = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (gr = (1 << (32 - Fn(t) + o)) | (n << o) | r),
      (vr = a + e);
  } else (gr = (1 << a) | (n << o) | r), (vr = e);
}
function fg(e) {
  e.return !== null && (Ro(e, 1), nw(e, 1, 0));
}
function pg(e) {
  for (; e === sd; )
    (sd = Ha[--qa]), (Ha[qa] = null), (ud = Ha[--qa]), (Ha[qa] = null);
  for (; e === Zo; )
    (Zo = hn[--gn]),
      (hn[gn] = null),
      (vr = hn[--gn]),
      (hn[gn] = null),
      (gr = hn[--gn]),
      (hn[gn] = null);
}
var Zt = null,
  Yt = null,
  be = !1,
  Ln = null;
function rw(e, t) {
  var n = yn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function I2(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Zt = e), (Yt = uo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Zt = e), (Yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zo !== null ? { id: gr, overflow: vr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = yn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Zt = e),
            (Yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function J1(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function e0(e) {
  if (be) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!I2(e, t)) {
        if (J1(e)) throw Error(j(418));
        t = uo(n.nextSibling);
        var r = Zt;
        t && I2(e, t)
          ? rw(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (be = !1), (Zt = e));
      }
    } else {
      if (J1(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (be = !1), (Zt = e);
    }
  }
}
function A2(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Zt = e;
}
function Mu(e) {
  if (e !== Zt) return !1;
  if (!be) return A2(e), (be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Y1(e.type, e.memoizedProps))),
    t && (t = Yt))
  ) {
    if (J1(e)) throw (ow(), Error(j(418)));
    for (; t; ) rw(e, t), (t = uo(t.nextSibling));
  }
  if ((A2(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Yt = uo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Yt = null;
    }
  } else Yt = Zt ? uo(e.stateNode.nextSibling) : null;
  return !0;
}
function ow() {
  for (var e = Yt; e; ) e = uo(e.nextSibling);
}
function Si() {
  (Yt = Zt = null), (be = !1);
}
function mg(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
var j_ = Tr.ReactCurrentBatchConfig;
function jn(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var cd = Eo(null),
  dd = null,
  Ka = null,
  hg = null;
function gg() {
  hg = Ka = dd = null;
}
function vg(e) {
  var t = cd.current;
  he(cd), (e._currentValue = t);
}
function t0(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function si(e, t) {
  (dd = e),
    (hg = Ka = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (jt = !0), (e.firstContext = null));
}
function Sn(e) {
  var t = e._currentValue;
  if (hg !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ka === null)) {
      if (dd === null) throw Error(j(308));
      (Ka = e), (dd.dependencies = { lanes: 0, firstContext: e });
    } else Ka = Ka.next = e;
  return t;
}
var Ao = null;
function yg(e) {
  Ao === null ? (Ao = [e]) : Ao.push(e);
}
function aw(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), yg(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zr(e, r)
  );
}
function zr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Fr = !1;
function xg(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function iw(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function br(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function co(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), yg(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zr(e, n)
  );
}
function fc(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), og(e, n);
  }
}
function F2(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (o = a = i) : (a = a.next = i), (n = n.next);
      } while (n !== null);
      a === null ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fd(e, t, n, r) {
  var o = e.updateQueue;
  Fr = !1;
  var a = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), i === null ? (a = u) : (i.next = u), (i = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== i &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var h = o.baseState;
    (i = 0), (f = u = s = null), (l = a);
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            g = l;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == 'function')) {
                h = v.call(y, h, p);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (p = typeof v == 'function' ? v.call(y, h, p) : v),
                p == null)
              )
                break e;
              h = Pe({}, h, p);
              break e;
            case 2:
              Fr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [l]) : p.push(l));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (s = h)) : (f = f.next = y),
          (i |= p);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = h),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else a === null && (o.shared.lanes = 0);
    (ea |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function D2(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var lw = new ab.Component().refs;
function n0(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wf = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sa(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ct(),
      o = po(e),
      a = br(r, o);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = co(e, a, o)),
      t !== null && (Dn(t, e, o, r), fc(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ct(),
      o = po(e),
      a = br(r, o);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = co(e, a, o)),
      t !== null && (Dn(t, e, o, r), fc(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ct(),
      r = po(e),
      o = br(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = co(e, o, r)),
      t !== null && (Dn(t, e, r, n), fc(t, e, r));
  },
};
function B2(e, t, n, r, o, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ys(n, r) || !ys(o, a)
        : !0
  );
}
function sw(e, t, n) {
  var r = !1,
    o = bo,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = Sn(a))
      : ((o = It(t) ? Xo : yt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? ki(e, o) : bo)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wf),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function U2(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wf.enqueueReplaceState(t, t.state, null);
}
function r0(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = lw), xg(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null
    ? (o.context = Sn(a))
    : ((a = It(t) ? Xo : yt.current), (o.context = ki(e, a))),
    (o.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (n0(e, t, a, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && wf.enqueueReplaceState(o, o.state, null),
      fd(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function il(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        a = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            l === lw && (l = o.refs = {}),
              i === null ? delete l[a] : (l[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Lu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function V2(e) {
  var t = e._init;
  return t(e._payload);
}
function uw(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [c]), (d.flags |= 16)) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = mo(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags |= 2), c) : m)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, m, x) {
    return c === null || c.tag !== 6
      ? ((c = pm(m, d.mode, x)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function s(d, c, m, x) {
    var b = m.type;
    return b === Fa
      ? f(d, c, m.props.children, x, m.key)
      : c !== null &&
          (c.elementType === b ||
            (typeof b == 'object' &&
              b !== null &&
              b.$$typeof === Ar &&
              V2(b) === c.type))
        ? ((x = o(c, m.props)), (x.ref = il(d, c, m)), (x.return = d), x)
        : ((x = yc(m.type, m.key, m.props, null, d.mode, x)),
          (x.ref = il(d, c, m)),
          (x.return = d),
          x);
  }
  function u(d, c, m, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = mm(m, d.mode, x)), (c.return = d), c)
      : ((c = o(c, m.children || [])), (c.return = d), c);
  }
  function f(d, c, m, x, b) {
    return c === null || c.tag !== 7
      ? ((c = Wo(m, d.mode, x, b)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function h(d, c, m) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = pm('' + c, d.mode, m)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Eu:
          return (
            (m = yc(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = il(d, null, c)),
            (m.return = d),
            m
          );
        case Aa:
          return (c = mm(c, d.mode, m)), (c.return = d), c;
        case Ar:
          var x = c._init;
          return h(d, x(c._payload), m);
      }
      if (yl(c) || tl(c))
        return (c = Wo(c, d.mode, m, null)), (c.return = d), c;
      Lu(d, c);
    }
    return null;
  }
  function p(d, c, m, x) {
    var b = c !== null ? c.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return b !== null ? null : l(d, c, '' + m, x);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Eu:
          return m.key === b ? s(d, c, m, x) : null;
        case Aa:
          return m.key === b ? u(d, c, m, x) : null;
        case Ar:
          return (b = m._init), p(d, c, b(m._payload), x);
      }
      if (yl(m) || tl(m)) return b !== null ? null : f(d, c, m, x, null);
      Lu(d, m);
    }
    return null;
  }
  function y(d, c, m, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (d = d.get(m) || null), l(c, d, '' + x, b);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Eu:
          return (d = d.get(x.key === null ? m : x.key) || null), s(c, d, x, b);
        case Aa:
          return (d = d.get(x.key === null ? m : x.key) || null), u(c, d, x, b);
        case Ar:
          var k = x._init;
          return y(d, c, m, k(x._payload), b);
      }
      if (yl(x) || tl(x)) return (d = d.get(m) || null), f(c, d, x, b, null);
      Lu(c, x);
    }
    return null;
  }
  function v(d, c, m, x) {
    for (
      var b = null, k = null, w = c, _ = (c = 0), M = null;
      w !== null && _ < m.length;
      _++
    ) {
      w.index > _ ? ((M = w), (w = null)) : (M = w.sibling);
      var P = p(d, w, m[_], x);
      if (P === null) {
        w === null && (w = M);
        break;
      }
      e && w && P.alternate === null && t(d, w),
        (c = a(P, c, _)),
        k === null ? (b = P) : (k.sibling = P),
        (k = P),
        (w = M);
    }
    if (_ === m.length) return n(d, w), be && Ro(d, _), b;
    if (w === null) {
      for (; _ < m.length; _++)
        (w = h(d, m[_], x)),
          w !== null &&
            ((c = a(w, c, _)), k === null ? (b = w) : (k.sibling = w), (k = w));
      return be && Ro(d, _), b;
    }
    for (w = r(d, w); _ < m.length; _++)
      (M = y(w, d, _, m[_], x)),
        M !== null &&
          (e && M.alternate !== null && w.delete(M.key === null ? _ : M.key),
          (c = a(M, c, _)),
          k === null ? (b = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        w.forEach(function (A) {
          return t(d, A);
        }),
      be && Ro(d, _),
      b
    );
  }
  function g(d, c, m, x) {
    var b = tl(m);
    if (typeof b != 'function') throw Error(j(150));
    if (((m = b.call(m)), m == null)) throw Error(j(151));
    for (
      var k = (b = null), w = c, _ = (c = 0), M = null, P = m.next();
      w !== null && !P.done;
      _++, P = m.next()
    ) {
      w.index > _ ? ((M = w), (w = null)) : (M = w.sibling);
      var A = p(d, w, P.value, x);
      if (A === null) {
        w === null && (w = M);
        break;
      }
      e && w && A.alternate === null && t(d, w),
        (c = a(A, c, _)),
        k === null ? (b = A) : (k.sibling = A),
        (k = A),
        (w = M);
    }
    if (P.done) return n(d, w), be && Ro(d, _), b;
    if (w === null) {
      for (; !P.done; _++, P = m.next())
        (P = h(d, P.value, x)),
          P !== null &&
            ((c = a(P, c, _)), k === null ? (b = P) : (k.sibling = P), (k = P));
      return be && Ro(d, _), b;
    }
    for (w = r(d, w); !P.done; _++, P = m.next())
      (P = y(w, d, _, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && w.delete(P.key === null ? _ : P.key),
          (c = a(P, c, _)),
          k === null ? (b = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        w.forEach(function (H) {
          return t(d, H);
        }),
      be && Ro(d, _),
      b
    );
  }
  function S(d, c, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Fa &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Eu:
          e: {
            for (var b = m.key, k = c; k !== null; ) {
              if (k.key === b) {
                if (((b = m.type), b === Fa)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (c = o(k, m.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  k.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Ar &&
                    V2(b) === k.type)
                ) {
                  n(d, k.sibling),
                    (c = o(k, m.props)),
                    (c.ref = il(d, k, m)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            m.type === Fa
              ? ((c = Wo(m.props.children, d.mode, x, m.key)),
                (c.return = d),
                (d = c))
              : ((x = yc(m.type, m.key, m.props, null, d.mode, x)),
                (x.ref = il(d, c, m)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case Aa:
          e: {
            for (k = m.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = mm(m, d.mode, x)), (c.return = d), (d = c);
          }
          return i(d);
        case Ar:
          return (k = m._init), S(d, c, k(m._payload), x);
      }
      if (yl(m)) return v(d, c, m, x);
      if (tl(m)) return g(d, c, m, x);
      Lu(d, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = pm(m, d.mode, x)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return S;
}
var Ci = uw(!0),
  cw = uw(!1),
  Ks = {},
  sr = Eo(Ks),
  ks = Eo(Ks),
  Ss = Eo(Ks);
function Fo(e) {
  if (e === Ks) throw Error(j(174));
  return e;
}
function bg(e, t) {
  switch ((de(Ss, t), de(ks, e), de(sr, Ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : M1(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = M1(t, e));
  }
  he(sr), de(sr, t);
}
function Ei() {
  he(sr), he(ks), he(Ss);
}
function dw(e) {
  Fo(Ss.current);
  var t = Fo(sr.current),
    n = M1(t, e.type);
  t !== n && (de(ks, e), de(sr, n));
}
function wg(e) {
  ks.current === e && (he(sr), he(ks));
}
var Se = Eo(0);
function pd(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lm = [];
function kg() {
  for (var e = 0; e < lm.length; e++)
    lm[e]._workInProgressVersionPrimary = null;
  lm.length = 0;
}
var pc = Tr.ReactCurrentDispatcher,
  sm = Tr.ReactCurrentBatchConfig,
  Jo = 0,
  Ee = null,
  He = null,
  Ye = null,
  md = !1,
  Il = !1,
  Cs = 0,
  T_ = 0;
function dt() {
  throw Error(j(321));
}
function Sg(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Un(e[n], t[n])) return !1;
  return !0;
}
function Cg(e, t, n, r, o, a) {
  if (
    ((Jo = a),
    (Ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pc.current = e === null || e.memoizedState === null ? I_ : A_),
    (e = n(r, o)),
    Il)
  ) {
    a = 0;
    do {
      if (((Il = !1), (Cs = 0), 25 <= a)) throw Error(j(301));
      (a += 1),
        (Ye = He = null),
        (t.updateQueue = null),
        (pc.current = F_),
        (e = n(r, o));
    } while (Il);
  }
  if (
    ((pc.current = hd),
    (t = He !== null && He.next !== null),
    (Jo = 0),
    (Ye = He = Ee = null),
    (md = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Eg() {
  var e = Cs !== 0;
  return (Cs = 0), e;
}
function Yn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? (Ee.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function Cn() {
  if (He === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = He.next;
  var t = Ye === null ? Ee.memoizedState : Ye.next;
  if (t !== null) (Ye = t), (He = e);
  else {
    if (e === null) throw Error(j(310));
    (He = e),
      (e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null,
      }),
      Ye === null ? (Ee.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function Es(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function um(e) {
  var t = Cn(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = He,
    o = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = a.next), (a.next = i);
    }
    (r.baseQueue = o = a), (n.pending = null);
  }
  if (o !== null) {
    (a = o.next), (r = r.baseState);
    var l = (i = null),
      s = null,
      u = a;
    do {
      var f = u.lane;
      if ((Jo & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = h), (i = r)) : (s = s.next = h),
          (Ee.lanes |= f),
          (ea |= f);
      }
      u = u.next;
    } while (u !== null && u !== a);
    s === null ? (i = r) : (s.next = l),
      Un(r, t.memoizedState) || (jt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (a = o.lane), (Ee.lanes |= a), (ea |= a), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function cm(e) {
  var t = Cn(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    a = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== o);
    Un(a, t.memoizedState) || (jt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function fw() {}
function pw(e, t) {
  var n = Ee,
    r = Cn(),
    o = t(),
    a = !Un(r.memoizedState, o);
  if (
    (a && ((r.memoizedState = o), (jt = !0)),
    (r = r.queue),
    $g(gw.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $s(9, hw.bind(null, n, r, o, t), void 0, null),
      Xe === null)
    )
      throw Error(j(349));
    Jo & 30 || mw(n, t, o);
  }
  return o;
}
function mw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vw(t) && yw(e);
}
function gw(e, t, n) {
  return n(function () {
    vw(t) && yw(e);
  });
}
function vw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Un(e, n);
  } catch {
    return !0;
  }
}
function yw(e) {
  var t = zr(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function W2(e) {
  var t = Yn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Es,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = L_.bind(null, Ee, e)),
    [t.memoizedState, e]
  );
}
function $s(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xw() {
  return Cn().memoizedState;
}
function mc(e, t, n, r) {
  var o = Yn();
  (Ee.flags |= e),
    (o.memoizedState = $s(1 | t, n, void 0, r === void 0 ? null : r));
}
function kf(e, t, n, r) {
  var o = Cn();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (He !== null) {
    var i = He.memoizedState;
    if (((a = i.destroy), r !== null && Sg(r, i.deps))) {
      o.memoizedState = $s(t, n, a, r);
      return;
    }
  }
  (Ee.flags |= e), (o.memoizedState = $s(1 | t, n, a, r));
}
function H2(e, t) {
  return mc(8390656, 8, e, t);
}
function $g(e, t) {
  return kf(2048, 8, e, t);
}
function bw(e, t) {
  return kf(4, 2, e, t);
}
function ww(e, t) {
  return kf(4, 4, e, t);
}
function kw(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kf(4, 4, kw.bind(null, t, e), n)
  );
}
function Pg() {}
function Cw(e, t) {
  var n = Cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sg(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ew(e, t) {
  var n = Cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sg(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $w(e, t, n) {
  return Jo & 21
    ? (Un(n, t) || ((n = zb()), (Ee.lanes |= n), (ea |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (jt = !0)), (e.memoizedState = n));
}
function O_(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sm.transition;
  sm.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (sm.transition = r);
  }
}
function Pw() {
  return Cn().memoizedState;
}
function M_(e, t, n) {
  var r = po(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _w(e))
  )
    zw(t, n);
  else if (((n = aw(e, t, n, r)), n !== null)) {
    var o = Ct();
    Dn(n, e, r, o), Nw(n, t, r);
  }
}
function L_(e, t, n) {
  var r = po(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_w(e)) zw(t, o);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = a(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Un(l, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), yg(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = aw(e, t, o, r)),
      n !== null && ((o = Ct()), Dn(n, e, r, o), Nw(n, t, r));
  }
}
function _w(e) {
  var t = e.alternate;
  return e === Ee || (t !== null && t === Ee);
}
function zw(e, t) {
  Il = md = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Nw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), og(e, n);
  }
}
var hd = {
    readContext: Sn,
    useCallback: dt,
    useContext: dt,
    useEffect: dt,
    useImperativeHandle: dt,
    useInsertionEffect: dt,
    useLayoutEffect: dt,
    useMemo: dt,
    useReducer: dt,
    useRef: dt,
    useState: dt,
    useDebugValue: dt,
    useDeferredValue: dt,
    useTransition: dt,
    useMutableSource: dt,
    useSyncExternalStore: dt,
    useId: dt,
    unstable_isNewReconciler: !1,
  },
  I_ = {
    readContext: Sn,
    useCallback: function (e, t) {
      return (Yn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Sn,
    useEffect: H2,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mc(4194308, 4, kw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = M_.bind(null, Ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: W2,
    useDebugValue: Pg,
    useDeferredValue: function (e) {
      return (Yn().memoizedState = e);
    },
    useTransition: function () {
      var e = W2(!1),
        t = e[0];
      return (e = O_.bind(null, e[1])), (Yn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ee,
        o = Yn();
      if (be) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Xe === null)) throw Error(j(349));
        Jo & 30 || mw(r, t, n);
      }
      o.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (o.queue = a),
        H2(gw.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        $s(9, hw.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yn(),
        t = Xe.identifierPrefix;
      if (be) {
        var n = vr,
          r = gr;
        (n = (r & ~(1 << (32 - Fn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Cs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = T_++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  A_ = {
    readContext: Sn,
    useCallback: Cw,
    useContext: Sn,
    useEffect: $g,
    useImperativeHandle: Sw,
    useInsertionEffect: bw,
    useLayoutEffect: ww,
    useMemo: Ew,
    useReducer: um,
    useRef: xw,
    useState: function () {
      return um(Es);
    },
    useDebugValue: Pg,
    useDeferredValue: function (e) {
      var t = Cn();
      return $w(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = um(Es)[0],
        t = Cn().memoizedState;
      return [e, t];
    },
    useMutableSource: fw,
    useSyncExternalStore: pw,
    useId: Pw,
    unstable_isNewReconciler: !1,
  },
  F_ = {
    readContext: Sn,
    useCallback: Cw,
    useContext: Sn,
    useEffect: $g,
    useImperativeHandle: Sw,
    useInsertionEffect: bw,
    useLayoutEffect: ww,
    useMemo: Ew,
    useReducer: cm,
    useRef: xw,
    useState: function () {
      return cm(Es);
    },
    useDebugValue: Pg,
    useDeferredValue: function (e) {
      var t = Cn();
      return He === null ? (t.memoizedState = e) : $w(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = cm(Es)[0],
        t = Cn().memoizedState;
      return [e, t];
    },
    useMutableSource: fw,
    useSyncExternalStore: pw,
    useId: Pw,
    unstable_isNewReconciler: !1,
  };
function $i(e, t) {
  try {
    var n = '',
      r = t;
    do (n += pP(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function dm(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function o0(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var D_ = typeof WeakMap == 'function' ? WeakMap : Map;
function Rw(e, t, n) {
  (n = br(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vd || ((vd = !0), (m0 = r)), o0(e, t);
    }),
    n
  );
}
function jw(e, t, n) {
  (n = br(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        o0(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        o0(e, t),
          typeof r != 'function' &&
            (fo === null ? (fo = new Set([this])) : fo.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function q2(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new D_();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ez.bind(null, e, t, n)), t.then(e, e));
}
function K2(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Q2(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = br(-1, 1)), (t.tag = 2), co(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var B_ = Tr.ReactCurrentOwner,
  jt = !1;
function bt(e, t, n, r) {
  t.child = e === null ? cw(t, null, n, r) : Ci(t, e.child, n, r);
}
function Y2(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return (
    si(t, o),
    (r = Cg(e, t, n, r, a, o)),
    (n = Eg()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nr(e, t, o))
      : (be && n && fg(t), (t.flags |= 1), bt(e, t, r, o), t.child)
  );
}
function G2(e, t, n, r, o) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !Mg(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Tw(e, t, a, r, o))
      : ((e = yc(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & o))) {
    var i = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ys), n(i, r) && e.ref === t.ref)
    )
      return Nr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mo(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tw(e, t, n, r, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (ys(a, r) && e.ref === t.ref)
      if (((jt = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
        e.flags & 131072 && (jt = !0);
      else return (t.lanes = e.lanes), Nr(e, t, o);
  }
  return a0(e, t, n, r, o);
}
function Ow(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(Ya, Vt),
        (Vt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(Ya, Vt),
          (Vt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        de(Ya, Vt),
        (Vt |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(Ya, Vt),
      (Vt |= r);
  return bt(e, t, o, n), t.child;
}
function Mw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function a0(e, t, n, r, o) {
  var a = It(n) ? Xo : yt.current;
  return (
    (a = ki(t, a)),
    si(t, o),
    (n = Cg(e, t, n, r, a, o)),
    (r = Eg()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nr(e, t, o))
      : (be && r && fg(t), (t.flags |= 1), bt(e, t, n, o), t.child)
  );
}
function X2(e, t, n, r, o) {
  if (It(n)) {
    var a = !0;
    ld(t);
  } else a = !1;
  if ((si(t, o), t.stateNode === null))
    hc(e, t), sw(t, n, r), r0(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var s = i.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Sn(u))
      : ((u = It(n) ? Xo : yt.current), (u = ki(t, u)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && U2(t, i, r, u)),
      (Fr = !1);
    var p = t.memoizedState;
    (i.state = p),
      fd(t, r, i, o),
      (s = t.memoizedState),
      l !== r || p !== s || Lt.current || Fr
        ? (typeof f == 'function' && (n0(t, n, f, r), (s = t.memoizedState)),
          (l = Fr || B2(t, n, l, r, p, s, u))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      iw(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : jn(t.type, l)),
      (i.props = u),
      (h = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Sn(s))
        : ((s = It(n) ? Xo : yt.current), (s = ki(t, s)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== h || p !== s) && U2(t, i, r, s)),
      (Fr = !1),
      (p = t.memoizedState),
      (i.state = p),
      fd(t, r, i, o);
    var v = t.memoizedState;
    l !== h || p !== v || Lt.current || Fr
      ? (typeof y == 'function' && (n0(t, n, y, r), (v = t.memoizedState)),
        (u = Fr || B2(t, n, u, r, p, v, s) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return i0(e, t, n, r, a, o);
}
function i0(e, t, n, r, o, a) {
  Mw(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && L2(t, n, !1), Nr(e, t, a);
  (r = t.stateNode), (B_.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ci(t, e.child, null, a)), (t.child = Ci(t, null, l, a)))
      : bt(e, t, l, a),
    (t.memoizedState = r.state),
    o && L2(t, n, !0),
    t.child
  );
}
function Lw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? M2(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && M2(e, t.context, !1),
    bg(e, t.containerInfo);
}
function Z2(e, t, n, r, o) {
  return Si(), mg(o), (t.flags |= 256), bt(e, t, n, r), t.child;
}
var l0 = { dehydrated: null, treeContext: null, retryLane: 0 };
function s0(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Iw(e, t, n) {
  var r = t.pendingProps,
    o = Se.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    de(Se, o & 1),
    e === null)
  )
    return (
      e0(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Ef(i, r, 0, null)),
              (e = Wo(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = s0(n)),
              (t.memoizedState = l0),
              e)
            : _g(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return U_(e, t, i, r, l, o, n);
  if (a) {
    (a = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = mo(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (a = mo(l, a)) : ((a = Wo(a, i, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? s0(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = l0),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = mo(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _g(e, t) {
  return (
    (t = Ef({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Iu(e, t, n, r) {
  return (
    r !== null && mg(r),
    Ci(t, e.child, null, n),
    (e = _g(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function U_(e, t, n, r, o, a, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = dm(Error(j(422)))), Iu(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (o = t.mode),
          (r = Ef({ mode: 'visible', children: r.children }, o, 0, null)),
          (a = Wo(a, o, i, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && Ci(t, e.child, null, i),
          (t.child.memoizedState = s0(i)),
          (t.memoizedState = l0),
          a);
  if (!(t.mode & 1)) return Iu(e, t, i, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(j(419))), (r = dm(a, r, void 0)), Iu(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), jt || l)) {
    if (((r = Xe), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), zr(e, o), Dn(r, e, o, -1));
    }
    return Og(), (r = dm(Error(j(421)))), Iu(e, t, i, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tz.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Yt = uo(o.nextSibling)),
      (Zt = t),
      (be = !0),
      (Ln = null),
      e !== null &&
        ((hn[gn++] = gr),
        (hn[gn++] = vr),
        (hn[gn++] = Zo),
        (gr = e.id),
        (vr = e.overflow),
        (Zo = t)),
      (t = _g(t, r.children)),
      (t.flags |= 4096),
      t);
}
function J2(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), t0(e.return, t, n);
}
function fm(e, t, n, r, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o));
}
function Aw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    a = r.tail;
  if ((bt(e, t, r.children, n), (r = Se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && J2(e, n, t);
        else if (e.tag === 19) J2(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(Se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && pd(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          fm(t, !1, o, n, a);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && pd(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        fm(t, !0, n, null, a);
        break;
      case 'together':
        fm(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hc(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ea |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mo(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mo(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function V_(e, t, n) {
  switch (t.tag) {
    case 3:
      Lw(t), Si();
      break;
    case 5:
      dw(t);
      break;
    case 1:
      It(t.type) && ld(t);
      break;
    case 4:
      bg(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      de(cd, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(Se, Se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Iw(e, t, n)
            : (de(Se, Se.current & 1),
              (e = Nr(e, t, n)),
              e !== null ? e.sibling : null);
      de(Se, Se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Aw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        de(Se, Se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ow(e, t, n);
  }
  return Nr(e, t, n);
}
var Fw, u0, Dw, Bw;
Fw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
u0 = function () {};
Dw = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fo(sr.current);
    var a = null;
    switch (n) {
      case 'input':
        (o = R1(e, o)), (r = R1(e, r)), (a = []);
        break;
      case 'select':
        (o = Pe({}, o, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (a = []);
        break;
      case 'textarea':
        (o = O1(e, o)), (r = O1(e, r)), (a = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ad);
    }
    L1(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (ds.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                l[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (a || (a = []), a.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (a = a || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (ds.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && pe('scroll', e),
                    a || l === s || (a = []))
                  : (a = a || []).push(u, s));
    }
    n && (a = a || []).push('style', n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ll(e, t) {
  if (!be)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ft(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function W_(e, t, n) {
  var r = t.pendingProps;
  switch ((pg(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ft(t), null;
    case 1:
      return It(t.type) && id(), ft(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ei(),
        he(Lt),
        he(yt),
        kg(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ln !== null && (v0(Ln), (Ln = null)))),
        u0(e, t),
        ft(t),
        null
      );
    case 5:
      wg(t);
      var o = Fo(Ss.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dw(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return ft(t), null;
        }
        if (((e = Fo(sr.current)), Mu(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[nr] = t), (r[ws] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              pe('cancel', r), pe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < bl.length; o++) pe(bl[o], r);
              break;
            case 'source':
              pe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              pe('error', r), pe('load', r);
              break;
            case 'details':
              pe('toggle', r);
              break;
            case 'input':
              s2(r, a), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                pe('invalid', r);
              break;
            case 'textarea':
              c2(r, a), pe('invalid', r);
          }
          L1(n, a), (o = null);
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Ou(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Ou(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : ds.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  pe('scroll', r);
            }
          switch (n) {
            case 'input':
              $u(r), u2(r, a, !0);
              break;
            case 'textarea':
              $u(r), d2(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = ad);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = mb(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[nr] = t),
            (e[ws] = r),
            Fw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = I1(n, r)), n)) {
              case 'dialog':
                pe('cancel', e), pe('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < bl.length; o++) pe(bl[o], e);
                o = r;
                break;
              case 'source':
                pe('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', e), pe('load', e), (o = r);
                break;
              case 'details':
                pe('toggle', e), (o = r);
                break;
              case 'input':
                s2(e, r), (o = R1(e, r)), pe('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Pe({}, r, { value: void 0 })),
                  pe('invalid', e);
                break;
              case 'textarea':
                c2(e, r), (o = O1(e, r)), pe('invalid', e);
                break;
              default:
                o = r;
            }
            L1(n, o), (l = o);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === 'style'
                  ? vb(e, s)
                  : a === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && hb(e, s))
                    : a === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && fs(e, s)
                        : typeof s == 'number' && fs(e, '' + s)
                      : a !== 'suppressContentEditableWarning' &&
                        a !== 'suppressHydrationWarning' &&
                        a !== 'autoFocus' &&
                        (ds.hasOwnProperty(a)
                          ? s != null && a === 'onScroll' && pe('scroll', e)
                          : s != null && Zh(e, a, s, i));
              }
            switch (n) {
              case 'input':
                $u(e), u2(e, r, !1);
                break;
              case 'textarea':
                $u(e), d2(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + xo(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? oi(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      oi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ad);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ft(t), null;
    case 6:
      if (e && t.stateNode != null) Bw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = Fo(Ss.current)), Fo(sr.current), Mu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nr] = t),
            (a = r.nodeValue !== n) && ((e = Zt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ou(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ou(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nr] = t),
            (t.stateNode = r);
      }
      return ft(t), null;
    case 13:
      if (
        (he(Se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (be && Yt !== null && t.mode & 1 && !(t.flags & 128))
          ow(), Si(), (t.flags |= 98560), (a = !1);
        else if (((a = Mu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(j(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(j(317));
            a[nr] = t;
          } else
            Si(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ft(t), (a = !1);
        } else Ln !== null && (v0(Ln), (Ln = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Se.current & 1 ? Ke === 0 && (Ke = 3) : Og())),
          t.updateQueue !== null && (t.flags |= 4),
          ft(t),
          null);
    case 4:
      return (
        Ei(), u0(e, t), e === null && xs(t.stateNode.containerInfo), ft(t), null
      );
    case 10:
      return vg(t.type._context), ft(t), null;
    case 17:
      return It(t.type) && id(), ft(t), null;
    case 19:
      if ((he(Se), (a = t.memoizedState), a === null)) return ft(t), null;
      if (((r = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (r) ll(a, !1);
        else {
          if (Ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = pd(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ll(a, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(Se, (Se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Le() > Pi &&
            ((t.flags |= 128), (r = !0), ll(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pd(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ll(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !i.alternate && !be)
            )
              return ft(t), null;
          } else
            2 * Le() - a.renderingStartTime > Pi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ll(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = a.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Le()),
          (t.sibling = null),
          (n = Se.current),
          de(Se, r ? (n & 1) | 2 : n & 1),
          t)
        : (ft(t), null);
    case 22:
    case 23:
      return (
        Tg(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Vt & 1073741824 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ft(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function H_(e, t) {
  switch ((pg(t), t.tag)) {
    case 1:
      return (
        It(t.type) && id(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ei(),
        he(Lt),
        he(yt),
        kg(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wg(t), null;
    case 13:
      if (
        (he(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Si();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(Se), null;
    case 4:
      return Ei(), null;
    case 10:
      return vg(t.type._context), null;
    case 22:
    case 23:
      return Tg(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Au = !1,
  gt = !1,
  q_ = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null;
function Qa(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Te(e, t, r);
      }
    else n.current = null;
}
function c0(e, t, n) {
  try {
    n();
  } catch (r) {
    Te(e, t, r);
  }
}
var e4 = !1;
function K_(e, t) {
  if (((K1 = nd), (e = Hb()), dg(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            s = -1,
            u = 0,
            f = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (o !== 0 && h.nodeType !== 3) || (l = i + o),
                h !== a || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++u === o && (l = i),
                p === a && ++f === r && (s = i),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Q1 = { focusedElem: e, selectionRange: n }, nd = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    S = v.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : jn(t.type, g),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (x) {
          Te(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (v = e4), (e4 = !1), v;
}
function Al(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        (o.destroy = void 0), a !== void 0 && c0(t, n, a);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Sf(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function d0(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Uw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Uw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nr], delete t[ws], delete t[X1], delete t[z_], delete t[N_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function t4(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vw(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function f0(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ad));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (f0(e, t, n), e = e.sibling; e !== null; ) f0(e, t, n), (e = e.sibling);
}
function p0(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (p0(e, t, n), e = e.sibling; e !== null; ) p0(e, t, n), (e = e.sibling);
}
var tt = null,
  On = !1;
function Mr(e, t, n) {
  for (n = n.child; n !== null; ) Ww(e, t, n), (n = n.sibling);
}
function Ww(e, t, n) {
  if (lr && typeof lr.onCommitFiberUnmount == 'function')
    try {
      lr.onCommitFiberUnmount(hf, n);
    } catch {}
  switch (n.tag) {
    case 5:
      gt || Qa(n, t);
    case 6:
      var r = tt,
        o = On;
      (tt = null),
        Mr(e, t, n),
        (tt = r),
        (On = o),
        tt !== null &&
          (On
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (On
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? am(e.parentNode, n)
              : e.nodeType === 1 && am(e, n),
            gs(e))
          : am(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (o = On),
        (tt = n.stateNode.containerInfo),
        (On = !0),
        Mr(e, t, n),
        (tt = r),
        (On = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !gt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var a = o,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && c0(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Mr(e, t, n);
      break;
    case 1:
      if (
        !gt &&
        (Qa(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Te(n, t, l);
        }
      Mr(e, t, n);
      break;
    case 21:
      Mr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((gt = (r = gt) || n.memoizedState !== null), Mr(e, t, n), (gt = r))
        : Mr(e, t, n);
      break;
    default:
      Mr(e, t, n);
  }
}
function n4(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new q_()),
      t.forEach(function (r) {
        var o = nz.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var a = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (tt = l.stateNode), (On = !1);
              break e;
            case 3:
              (tt = l.stateNode.containerInfo), (On = !0);
              break e;
            case 4:
              (tt = l.stateNode.containerInfo), (On = !0);
              break e;
          }
          l = l.return;
        }
        if (tt === null) throw Error(j(160));
        Ww(a, i, o), (tt = null), (On = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Te(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hw(t, e), (t = t.sibling);
}
function Hw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nn(t, e), Kn(e), r & 4)) {
        try {
          Al(3, e, e.return), Sf(3, e);
        } catch (g) {
          Te(e, e.return, g);
        }
        try {
          Al(5, e, e.return);
        } catch (g) {
          Te(e, e.return, g);
        }
      }
      break;
    case 1:
      Nn(t, e), Kn(e), r & 512 && n !== null && Qa(n, n.return);
      break;
    case 5:
      if (
        (Nn(t, e),
        Kn(e),
        r & 512 && n !== null && Qa(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          fs(o, '');
        } catch (g) {
          Te(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          i = n !== null ? n.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && a.type === 'radio' && a.name != null && fb(o, a),
              I1(l, i);
            var u = I1(l, a);
            for (i = 0; i < s.length; i += 2) {
              var f = s[i],
                h = s[i + 1];
              f === 'style'
                ? vb(o, h)
                : f === 'dangerouslySetInnerHTML'
                  ? hb(o, h)
                  : f === 'children'
                    ? fs(o, h)
                    : Zh(o, f, h, u);
            }
            switch (l) {
              case 'input':
                j1(o, a);
                break;
              case 'textarea':
                pb(o, a);
                break;
              case 'select':
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var y = a.value;
                y != null
                  ? oi(o, !!a.multiple, y, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? oi(o, !!a.multiple, a.defaultValue, !0)
                      : oi(o, !!a.multiple, a.multiple ? [] : '', !1));
            }
            o[ws] = a;
          } catch (g) {
            Te(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Nn(t, e), Kn(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (a = e.memoizedProps);
        try {
          o.nodeValue = a;
        } catch (g) {
          Te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Nn(t, e), Kn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gs(t.containerInfo);
        } catch (g) {
          Te(e, e.return, g);
        }
      break;
    case 4:
      Nn(t, e), Kn(e);
      break;
    case 13:
      Nn(t, e),
        Kn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Rg = Le())),
        r & 4 && n4(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((gt = (u = gt) || f), Nn(t, e), (gt = u)) : Nn(t, e),
        Kn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (I = e, f = e.child; f !== null; ) {
            for (h = I = f; I !== null; ) {
              switch (((p = I), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Al(4, p, p.return);
                  break;
                case 1:
                  Qa(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Te(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Qa(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    o4(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (I = y)) : o4(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((a = o.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((l = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = gb('display', i)));
              } catch (g) {
                Te(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (g) {
                Te(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Nn(t, e), Kn(e), r & 4 && n4(e);
      break;
    case 21:
      break;
    default:
      Nn(t, e), Kn(e);
  }
}
function Kn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (fs(o, ''), (r.flags &= -33));
          var a = t4(e);
          p0(e, a, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = t4(e);
          f0(e, l, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      Te(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Q_(e, t, n) {
  (I = e), qw(e);
}
function qw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      a = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Au;
      if (!i) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || gt;
        l = Au;
        var u = gt;
        if (((Au = i), (gt = s) && !u))
          for (I = o; I !== null; )
            (i = I),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? a4(o)
                : s !== null
                  ? ((s.return = i), (I = s))
                  : a4(o);
        for (; a !== null; ) (I = a), qw(a), (a = a.sibling);
        (I = o), (Au = l), (gt = u);
      }
      r4(e);
    } else
      o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (I = a)) : r4(e);
  }
}
function r4(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || Sf(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !gt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && D2(t, a, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                D2(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && gs(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        gt || (t.flags & 512 && d0(t));
      } catch (p) {
        Te(t, t.return, p);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function o4(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function a4(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sf(4, t);
          } catch (s) {
            Te(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Te(t, o, s);
            }
          }
          var a = t.return;
          try {
            d0(t);
          } catch (s) {
            Te(t, a, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            d0(t);
          } catch (s) {
            Te(t, i, s);
          }
      }
    } catch (s) {
      Te(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var Y_ = Math.ceil,
  gd = Tr.ReactCurrentDispatcher,
  zg = Tr.ReactCurrentOwner,
  bn = Tr.ReactCurrentBatchConfig,
  G = 0,
  Xe = null,
  De = null,
  at = 0,
  Vt = 0,
  Ya = Eo(0),
  Ke = 0,
  Ps = null,
  ea = 0,
  Cf = 0,
  Ng = 0,
  Fl = null,
  Nt = null,
  Rg = 0,
  Pi = 1 / 0,
  dr = null,
  vd = !1,
  m0 = null,
  fo = null,
  Fu = !1,
  Qr = null,
  yd = 0,
  Dl = 0,
  h0 = null,
  gc = -1,
  vc = 0;
function Ct() {
  return G & 6 ? Le() : gc !== -1 ? gc : (gc = Le());
}
function po(e) {
  return e.mode & 1
    ? G & 2 && at !== 0
      ? at & -at
      : j_.transition !== null
        ? (vc === 0 && (vc = zb()), vc)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lb(e.type))),
          e)
    : 1;
}
function Dn(e, t, n, r) {
  if (50 < Dl) throw ((Dl = 0), (h0 = null), Error(j(185)));
  Ws(e, n, r),
    (!(G & 2) || e !== Xe) &&
      (e === Xe && (!(G & 2) && (Cf |= n), Ke === 4 && Vr(e, at)),
      At(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Pi = Le() + 500), bf && $o()));
}
function At(e, t) {
  var n = e.callbackNode;
  jP(e, t);
  var r = td(e, e === Xe ? at : 0);
  if (r === 0)
    n !== null && m2(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && m2(n), t === 1))
      e.tag === 0 ? R_(i4.bind(null, e)) : tw(i4.bind(null, e)),
        P_(function () {
          !(G & 6) && $o();
        }),
        (n = null);
    else {
      switch (Nb(r)) {
        case 1:
          n = rg;
          break;
        case 4:
          n = Pb;
          break;
        case 16:
          n = ed;
          break;
        case 536870912:
          n = _b;
          break;
        default:
          n = ed;
      }
      n = e6(n, Kw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Kw(e, t) {
  if (((gc = -1), (vc = 0), G & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (ui() && e.callbackNode !== n) return null;
  var r = td(e, e === Xe ? at : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xd(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var a = Yw();
    (Xe !== e || at !== t) && ((dr = null), (Pi = Le() + 500), Vo(e, t));
    do
      try {
        Z_();
        break;
      } catch (l) {
        Qw(e, l);
      }
    while (1);
    gg(),
      (gd.current = a),
      (G = o),
      De !== null ? (t = 0) : ((Xe = null), (at = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = U1(e)), o !== 0 && ((r = o), (t = g0(e, o)))), t === 1)
    )
      throw ((n = Ps), Vo(e, 0), Vr(e, r), At(e, Le()), n);
    if (t === 6) Vr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !G_(o) &&
          ((t = xd(e, r)),
          t === 2 && ((a = U1(e)), a !== 0 && ((r = a), (t = g0(e, a)))),
          t === 1))
      )
        throw ((n = Ps), Vo(e, 0), Vr(e, r), At(e, Le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          jo(e, Nt, dr);
          break;
        case 3:
          if (
            (Vr(e, r), (r & 130023424) === r && ((t = Rg + 500 - Le()), 10 < t))
          ) {
            if (td(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ct(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = G1(jo.bind(null, e, Nt, dr), t);
            break;
          }
          jo(e, Nt, dr);
          break;
        case 4:
          if ((Vr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Fn(r);
            (a = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~a);
          }
          if (
            ((r = o),
            (r = Le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Y_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = G1(jo.bind(null, e, Nt, dr), r);
            break;
          }
          jo(e, Nt, dr);
          break;
        case 5:
          jo(e, Nt, dr);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return At(e, Le()), e.callbackNode === n ? Kw.bind(null, e) : null;
}
function g0(e, t) {
  var n = Fl;
  return (
    e.current.memoizedState.isDehydrated && (Vo(e, t).flags |= 256),
    (e = xd(e, t)),
    e !== 2 && ((t = Nt), (Nt = n), t !== null && v0(t)),
    e
  );
}
function v0(e) {
  Nt === null ? (Nt = e) : Nt.push.apply(Nt, e);
}
function G_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = o.getSnapshot;
          o = o.value;
          try {
            if (!Un(a(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vr(e, t) {
  for (
    t &= ~Ng,
      t &= ~Cf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function i4(e) {
  if (G & 6) throw Error(j(327));
  ui();
  var t = td(e, 0);
  if (!(t & 1)) return At(e, Le()), null;
  var n = xd(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = U1(e);
    r !== 0 && ((t = r), (n = g0(e, r)));
  }
  if (n === 1) throw ((n = Ps), Vo(e, 0), Vr(e, t), At(e, Le()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jo(e, Nt, dr),
    At(e, Le()),
    null
  );
}
function jg(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Pi = Le() + 500), bf && $o());
  }
}
function ta(e) {
  Qr !== null && Qr.tag === 0 && !(G & 6) && ui();
  var t = G;
  G |= 1;
  var n = bn.transition,
    r = ae;
  try {
    if (((bn.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (bn.transition = n), (G = t), !(G & 6) && $o();
  }
}
function Tg() {
  (Vt = Ya.current), he(Ya);
}
function Vo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $_(n)), De !== null))
    for (n = De.return; n !== null; ) {
      var r = n;
      switch ((pg(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && id();
          break;
        case 3:
          Ei(), he(Lt), he(yt), kg();
          break;
        case 5:
          wg(r);
          break;
        case 4:
          Ei();
          break;
        case 13:
          he(Se);
          break;
        case 19:
          he(Se);
          break;
        case 10:
          vg(r.type._context);
          break;
        case 22:
        case 23:
          Tg();
      }
      n = n.return;
    }
  if (
    ((Xe = e),
    (De = e = mo(e.current, null)),
    (at = Vt = t),
    (Ke = 0),
    (Ps = null),
    (Ng = Cf = ea = 0),
    (Nt = Fl = null),
    Ao !== null)
  ) {
    for (t = 0; t < Ao.length; t++)
      if (((n = Ao[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          a = n.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Ao = null;
  }
  return e;
}
function Qw(e, t) {
  do {
    var n = De;
    try {
      if ((gg(), (pc.current = hd), md)) {
        for (var r = Ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        md = !1;
      }
      if (
        ((Jo = 0),
        (Ye = He = Ee = null),
        (Il = !1),
        (Cs = 0),
        (zg.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (Ps = t), (De = null);
        break;
      }
      e: {
        var a = e,
          i = n.return,
          l = n,
          s = t;
        if (
          ((t = at),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            f = l,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = K2(i);
          if (y !== null) {
            (y.flags &= -257),
              Q2(y, i, l, a, t),
              y.mode & 1 && q2(a, u, t),
              (t = y),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              q2(a, u, t), Og();
              break e;
            }
            s = Error(j(426));
          }
        } else if (be && l.mode & 1) {
          var S = K2(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Q2(S, i, l, a, t),
              mg($i(s, l));
            break e;
          }
        }
        (a = s = $i(s, l)),
          Ke !== 4 && (Ke = 2),
          Fl === null ? (Fl = [a]) : Fl.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var d = Rw(a, s, t);
              F2(a, d);
              break e;
            case 1:
              l = s;
              var c = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (fo === null || !fo.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var x = jw(a, l, t);
                F2(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xw(n);
    } catch (b) {
      (t = b), De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Yw() {
  var e = gd.current;
  return (gd.current = hd), e === null ? hd : e;
}
function Og() {
  (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
    Xe === null || (!(ea & 268435455) && !(Cf & 268435455)) || Vr(Xe, at);
}
function xd(e, t) {
  var n = G;
  G |= 2;
  var r = Yw();
  (Xe !== e || at !== t) && ((dr = null), Vo(e, t));
  do
    try {
      X_();
      break;
    } catch (o) {
      Qw(e, o);
    }
  while (1);
  if ((gg(), (G = n), (gd.current = r), De !== null)) throw Error(j(261));
  return (Xe = null), (at = 0), Ke;
}
function X_() {
  for (; De !== null; ) Gw(De);
}
function Z_() {
  for (; De !== null && !SP(); ) Gw(De);
}
function Gw(e) {
  var t = Jw(e.alternate, e, Vt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xw(e) : (De = t),
    (zg.current = null);
}
function Xw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = H_(n, t)), n !== null)) {
        (n.flags &= 32767), (De = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (De = null);
        return;
      }
    } else if (((n = W_(n, t, Vt)), n !== null)) {
      De = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function jo(e, t, n) {
  var r = ae,
    o = bn.transition;
  try {
    (bn.transition = null), (ae = 1), J_(e, t, n, r);
  } finally {
    (bn.transition = o), (ae = r);
  }
  return null;
}
function J_(e, t, n, r) {
  do ui();
  while (Qr !== null);
  if (G & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (TP(e, a),
    e === Xe && ((De = Xe = null), (at = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fu ||
      ((Fu = !0),
      e6(ed, function () {
        return ui(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = bn.transition), (bn.transition = null);
    var i = ae;
    ae = 1;
    var l = G;
    (G |= 4),
      (zg.current = null),
      K_(e, n),
      Hw(n, e),
      x_(Q1),
      (nd = !!K1),
      (Q1 = K1 = null),
      (e.current = n),
      Q_(n),
      CP(),
      (G = l),
      (ae = i),
      (bn.transition = a);
  } else e.current = n;
  if (
    (Fu && ((Fu = !1), (Qr = e), (yd = o)),
    (a = e.pendingLanes),
    a === 0 && (fo = null),
    PP(n.stateNode),
    At(e, Le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vd) throw ((vd = !1), (e = m0), (m0 = null), e);
  return (
    yd & 1 && e.tag !== 0 && ui(),
    (a = e.pendingLanes),
    a & 1 ? (e === h0 ? Dl++ : ((Dl = 0), (h0 = e))) : (Dl = 0),
    $o(),
    null
  );
}
function ui() {
  if (Qr !== null) {
    var e = Nb(yd),
      t = bn.transition,
      n = ae;
    try {
      if (((bn.transition = null), (ae = 16 > e ? 16 : e), Qr === null))
        var r = !1;
      else {
        if (((e = Qr), (Qr = null), (yd = 0), G & 6)) throw Error(j(331));
        var o = G;
        for (G |= 4, I = e.current; I !== null; ) {
          var a = I,
            i = a.child;
          if (I.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (I = u; I !== null; ) {
                  var f = I;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(8, f, a);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (I = h);
                  else
                    for (; I !== null; ) {
                      f = I;
                      var p = f.sibling,
                        y = f.return;
                      if ((Uw(f), f === u)) {
                        I = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (I = p);
                        break;
                      }
                      I = y;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              I = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (I = i);
          else
            e: for (; I !== null; ) {
              if (((a = I), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Al(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (I = d);
                break e;
              }
              I = a.return;
            }
        }
        var c = e.current;
        for (I = c; I !== null; ) {
          i = I;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (I = m);
          else
            e: for (i = c; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sf(9, l);
                  }
                } catch (b) {
                  Te(l, l.return, b);
                }
              if (l === i) {
                I = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (I = x);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((G = o), $o(), lr && typeof lr.onPostCommitFiberRoot == 'function')
        )
          try {
            lr.onPostCommitFiberRoot(hf, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (bn.transition = t);
    }
  }
  return !1;
}
function l4(e, t, n) {
  (t = $i(n, t)),
    (t = Rw(e, t, 1)),
    (e = co(e, t, 1)),
    (t = Ct()),
    e !== null && (Ws(e, 1, t), At(e, t));
}
function Te(e, t, n) {
  if (e.tag === 3) l4(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        l4(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (fo === null || !fo.has(r)))
        ) {
          (e = $i(n, e)),
            (e = jw(t, e, 1)),
            (t = co(t, e, 1)),
            (e = Ct()),
            t !== null && (Ws(t, 1, e), At(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ez(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ct()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Xe === e &&
      (at & n) === n &&
      (Ke === 4 || (Ke === 3 && (at & 130023424) === at && 500 > Le() - Rg)
        ? Vo(e, 0)
        : (Ng |= n)),
    At(e, t);
}
function Zw(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zu), (zu <<= 1), !(zu & 130023424) && (zu = 4194304))
      : (t = 1));
  var n = Ct();
  (e = zr(e, t)), e !== null && (Ws(e, t, n), At(e, n));
}
function tz(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zw(e, n);
}
function nz(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Zw(e, n);
}
var Jw;
Jw = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Lt.current) jt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (jt = !1), V_(e, t, n);
      jt = !!(e.flags & 131072);
    }
  else (jt = !1), be && t.flags & 1048576 && nw(t, ud, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hc(e, t), (e = t.pendingProps);
      var o = ki(t, yt.current);
      si(t, n), (o = Cg(null, t, r, e, o, n));
      var a = Eg();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            It(r) ? ((a = !0), ld(t)) : (a = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xg(t),
            (o.updater = wf),
            (t.stateNode = o),
            (o._reactInternals = t),
            r0(t, r, e, n),
            (t = i0(null, t, r, !0, a, n)))
          : ((t.tag = 0), be && a && fg(t), bt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hc(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = oz(r)),
          (e = jn(r, e)),
          o)
        ) {
          case 0:
            t = a0(null, t, r, e, n);
            break e;
          case 1:
            t = X2(null, t, r, e, n);
            break e;
          case 11:
            t = Y2(null, t, r, e, n);
            break e;
          case 14:
            t = G2(null, t, r, jn(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jn(r, o)),
        a0(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jn(r, o)),
        X2(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Lw(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (o = a.element),
          iw(e, t),
          fd(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (o = $i(Error(j(423)), t)), (t = Z2(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = $i(Error(j(424)), t)), (t = Z2(e, t, r, n, o));
            break e;
          } else
            for (
              Yt = uo(t.stateNode.containerInfo.firstChild),
                Zt = t,
                be = !0,
                Ln = null,
                n = cw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Si(), r === o)) {
            t = Nr(e, t, n);
            break e;
          }
          bt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dw(t),
        e === null && e0(t),
        (r = t.type),
        (o = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Y1(r, o) ? (i = null) : a !== null && Y1(r, a) && (t.flags |= 32),
        Mw(e, t),
        bt(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && e0(t), null;
    case 13:
      return Iw(e, t, n);
    case 4:
      return (
        bg(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ci(t, null, r, n)) : bt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jn(r, o)),
        Y2(e, t, r, o, n)
      );
    case 7:
      return bt(e, t, t.pendingProps, n), t.child;
    case 8:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (i = o.value),
          de(cd, r._currentValue),
          (r._currentValue = i),
          a !== null)
        )
          if (Un(a.value, i)) {
            if (a.children === o.children && !Lt.current) {
              t = Nr(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                i = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (a.tag === 1) {
                      (s = br(-1, n & -n)), (s.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      t0(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  t0(i, n, t),
                  (i = a.sibling);
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    (a.return = i.return), (i = a);
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        bt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        si(t, n),
        (o = Sn(o)),
        (r = r(o)),
        (t.flags |= 1),
        bt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = jn(r, t.pendingProps)),
        (o = jn(r.type, o)),
        G2(e, t, r, o, n)
      );
    case 15:
      return Tw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jn(r, o)),
        hc(e, t),
        (t.tag = 1),
        It(r) ? ((e = !0), ld(t)) : (e = !1),
        si(t, n),
        sw(t, r, o),
        r0(t, r, o, n),
        i0(null, t, r, !0, e, n)
      );
    case 19:
      return Aw(e, t, n);
    case 22:
      return Ow(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function e6(e, t) {
  return $b(e, t);
}
function rz(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function yn(e, t, n, r) {
  return new rz(e, t, n, r);
}
function Mg(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function oz(e) {
  if (typeof e == 'function') return Mg(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eg)) return 11;
    if (e === tg) return 14;
  }
  return 2;
}
function mo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = yn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yc(e, t, n, r, o, a) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Mg(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Fa:
        return Wo(n.children, o, a, t);
      case Jh:
        (i = 8), (o |= 8);
        break;
      case P1:
        return (
          (e = yn(12, n, t, o | 2)), (e.elementType = P1), (e.lanes = a), e
        );
      case _1:
        return (e = yn(13, n, t, o)), (e.elementType = _1), (e.lanes = a), e;
      case z1:
        return (e = yn(19, n, t, o)), (e.elementType = z1), (e.lanes = a), e;
      case ub:
        return Ef(n, o, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case lb:
              i = 10;
              break e;
            case sb:
              i = 9;
              break e;
            case eg:
              i = 11;
              break e;
            case tg:
              i = 14;
              break e;
            case Ar:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = yn(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Wo(e, t, n, r) {
  return (e = yn(7, e, r, t)), (e.lanes = n), e;
}
function Ef(e, t, n, r) {
  return (
    (e = yn(22, e, r, t)),
    (e.elementType = ub),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function pm(e, t, n) {
  return (e = yn(6, e, null, t)), (e.lanes = n), e;
}
function mm(e, t, n) {
  return (
    (t = yn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function az(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qp(0)),
    (this.expirationTimes = Qp(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qp(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Lg(e, t, n, r, o, a, i, l, s) {
  return (
    (e = new az(e, t, n, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = yn(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xg(a),
    e
  );
}
function iz(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Aa,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function t6(e) {
  if (!e) return bo;
  e = e._reactInternals;
  e: {
    if (sa(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (It(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (It(n)) return ew(e, n, t);
  }
  return t;
}
function n6(e, t, n, r, o, a, i, l, s) {
  return (
    (e = Lg(n, r, !0, e, o, a, i, l, s)),
    (e.context = t6(null)),
    (n = e.current),
    (r = Ct()),
    (o = po(n)),
    (a = br(r, o)),
    (a.callback = t ?? null),
    co(n, a, o),
    (e.current.lanes = o),
    Ws(e, o, r),
    At(e, r),
    e
  );
}
function $f(e, t, n, r) {
  var o = t.current,
    a = Ct(),
    i = po(o);
  return (
    (n = t6(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = br(a, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = co(o, t, i)),
    e !== null && (Dn(e, o, i, a), fc(e, o, i)),
    i
  );
}
function bd(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function s4(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ig(e, t) {
  s4(e, t), (e = e.alternate) && s4(e, t);
}
function lz() {
  return null;
}
var r6 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ag(e) {
  this._internalRoot = e;
}
Pf.prototype.render = Ag.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  $f(e, t, null, null);
};
Pf.prototype.unmount = Ag.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ta(function () {
      $f(null, e, null, null);
    }),
      (t[_r] = null);
  }
};
function Pf(e) {
  this._internalRoot = e;
}
Pf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ur.length && t !== 0 && t < Ur[n].priority; n++);
    Ur.splice(n, 0, e), n === 0 && Mb(e);
  }
};
function Fg(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _f(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function u4() {}
function sz(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var u = bd(i);
        a.call(u);
      };
    }
    var i = n6(t, r, e, 0, null, !1, !1, '', u4);
    return (
      (e._reactRootContainer = i),
      (e[_r] = i.current),
      xs(e.nodeType === 8 ? e.parentNode : e),
      ta(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = bd(s);
      l.call(u);
    };
  }
  var s = Lg(e, 0, !1, null, null, !1, !1, '', u4);
  return (
    (e._reactRootContainer = s),
    (e[_r] = s.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    ta(function () {
      $f(t, s, n, r);
    }),
    s
  );
}
function zf(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = bd(i);
        l.call(s);
      };
    }
    $f(t, i, e, o);
  } else i = sz(n, t, e, o, r);
  return bd(i);
}
Rb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xl(t.pendingLanes);
        n !== 0 &&
          (og(t, n | 1), At(t, Le()), !(G & 6) && ((Pi = Le() + 500), $o()));
      }
      break;
    case 13:
      ta(function () {
        var r = zr(e, 1);
        if (r !== null) {
          var o = Ct();
          Dn(r, e, 1, o);
        }
      }),
        Ig(e, 1);
  }
};
ag = function (e) {
  if (e.tag === 13) {
    var t = zr(e, 134217728);
    if (t !== null) {
      var n = Ct();
      Dn(t, e, 134217728, n);
    }
    Ig(e, 134217728);
  }
};
jb = function (e) {
  if (e.tag === 13) {
    var t = po(e),
      n = zr(e, t);
    if (n !== null) {
      var r = Ct();
      Dn(n, e, t, r);
    }
    Ig(e, t);
  }
};
Tb = function () {
  return ae;
};
Ob = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
F1 = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((j1(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = xf(r);
            if (!o) throw Error(j(90));
            db(r), j1(r, o);
          }
        }
      }
      break;
    case 'textarea':
      pb(e, n);
      break;
    case 'select':
      (t = n.value), t != null && oi(e, !!n.multiple, t, !1);
  }
};
bb = jg;
wb = ta;
var uz = { usingClientEntryPoint: !1, Events: [qs, Va, xf, yb, xb, jg] },
  sl = {
    findFiberByHostInstance: Io,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  cz = {
    bundleType: sl.bundleType,
    version: sl.version,
    rendererPackageName: sl.rendererPackageName,
    rendererConfig: sl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sl.findFiberByHostInstance || lz,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Du.isDisabled && Du.supportsFiber)
    try {
      (hf = Du.inject(cz)), (lr = Du);
    } catch {}
}
an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uz;
an.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fg(t)) throw Error(j(200));
  return iz(e, t, null, n);
};
an.createRoot = function (e, t) {
  if (!Fg(e)) throw Error(j(299));
  var n = !1,
    r = '',
    o = r6;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Lg(e, 1, !1, null, null, n, !1, r, o)),
    (e[_r] = t.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    new Ag(t)
  );
};
an.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = Cb(t)), (e = e === null ? null : e.stateNode), e;
};
an.flushSync = function (e) {
  return ta(e);
};
an.hydrate = function (e, t, n) {
  if (!_f(t)) throw Error(j(200));
  return zf(null, e, t, !0, n);
};
an.hydrateRoot = function (e, t, n) {
  if (!Fg(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    a = '',
    i = r6;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = n6(t, null, e, 1, n ?? null, o, !1, a, i)),
    (e[_r] = t.current),
    xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Pf(t);
};
an.render = function (e, t, n) {
  if (!_f(t)) throw Error(j(200));
  return zf(null, e, t, !1, n);
};
an.unmountComponentAtNode = function (e) {
  if (!_f(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (ta(function () {
        zf(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_r] = null);
        });
      }),
      !0)
    : !1;
};
an.unstable_batchedUpdates = jg;
an.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_f(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return zf(e, t, n, !1, r);
};
an.version = '18.2.0-next-9e3b772b8-20220608';
function o6() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o6);
    } catch (e) {
      console.error(e);
    }
}
o6(), (nb.exports = an);
var dz = nb.exports,
  c4 = dz;
(E1.createRoot = c4.createRoot), (E1.hydrateRoot = c4.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
var Yr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Yr || (Yr = {}));
const d4 = 'popstate';
function fz(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: a, search: i, hash: l } = r.location;
    return y0(
      '',
      { pathname: a, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : wd(o);
  }
  return mz(t, n, null, e);
}
function Ue(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Dg(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function pz() {
  return Math.random().toString(36).substr(2, 8);
}
function f4(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function y0(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _s(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Fi(t) : t,
      { state: n, key: (t && t.key) || r || pz() }
    )
  );
}
function wd(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Fi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function mz(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: a = !1 } = r,
    i = o.history,
    l = Yr.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), i.replaceState(_s({}, i.state, { idx: u }), ''));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    l = Yr.Pop;
    let S = f(),
      d = S == null ? null : S - u;
    (u = S), s && s({ action: l, location: g.location, delta: d });
  }
  function p(S, d) {
    l = Yr.Push;
    let c = y0(g.location, S, d);
    n && n(c, S), (u = f() + 1);
    let m = f4(c, u),
      x = g.createHref(c);
    try {
      i.pushState(m, '', x);
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b;
      o.location.assign(x);
    }
    a && s && s({ action: l, location: g.location, delta: 1 });
  }
  function y(S, d) {
    l = Yr.Replace;
    let c = y0(g.location, S, d);
    n && n(c, S), (u = f());
    let m = f4(c, u),
      x = g.createHref(c);
    i.replaceState(m, '', x),
      a && s && s({ action: l, location: g.location, delta: 0 });
  }
  function v(S) {
    let d = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      c = typeof S == 'string' ? S : wd(S);
    return (
      Ue(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, d)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(S) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(d4, h),
        (s = S),
        () => {
          o.removeEventListener(d4, h), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: v,
    encodeLocation(S) {
      let d = v(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: p,
    replace: y,
    go(S) {
      return i.go(S);
    },
  };
  return g;
}
var p4;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(p4 || (p4 = {}));
function hz(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Fi(t) : t,
    o = Bg(r.pathname || '/', n);
  if (o == null) return null;
  let a = a6(e);
  gz(a);
  let i = null;
  for (let l = 0; i == null && l < a.length; ++l) i = Ez(a[l], _z(o));
  return i;
}
function a6(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (a, i, l) => {
    let s = {
      relativePath: l === void 0 ? a.path || '' : l,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a,
    };
    s.relativePath.startsWith('/') &&
      (Ue(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = ho([r, s.relativePath]),
      f = n.concat(s);
    a.children &&
      a.children.length > 0 &&
      (Ue(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      a6(a.children, t, f, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: Sz(u, a.index), routesMeta: f });
  };
  return (
    e.forEach((a, i) => {
      var l;
      if (a.path === '' || !((l = a.path) != null && l.includes('?'))) o(a, i);
      else for (let s of i6(a.path)) o(a, i, s);
    }),
    t
  );
}
function i6(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    a = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [a, ''] : [a];
  let i = i6(r.join('/')),
    l = [];
  return (
    l.push(...i.map((s) => (s === '' ? a : [a, s].join('/')))),
    o && l.push(...i),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function gz(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Cz(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vz = /^:\w+$/,
  yz = 3,
  xz = 2,
  bz = 1,
  wz = 10,
  kz = -2,
  m4 = (e) => e === '*';
function Sz(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(m4) && (r += kz),
    t && (r += xz),
    n
      .filter((o) => !m4(o))
      .reduce((o, a) => o + (vz.test(a) ? yz : a === '' ? bz : wz), r)
  );
}
function Cz(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ez(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    a = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      s = i === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      f = $z(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = l.route;
    a.push({
      params: r,
      pathname: ho([o, f.pathname]),
      pathnameBase: jz(ho([o, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== '/' && (o = ho([o, f.pathnameBase]));
  }
  return a;
}
function $z(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Pz(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let a = o[0],
    i = a.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((u, f, h) => {
      if (f === '*') {
        let p = l[h] || '';
        i = a.slice(0, a.length - p.length).replace(/(.)\/+$/, '$1');
      }
      return (u[f] = zz(l[h] || '', f)), u;
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e,
  };
}
function Pz(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Dg(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, l) => (r.push(l), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function _z(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Dg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function zz(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Dg(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Bg(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Nz(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Fi(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Rz(n, t)) : t,
    search: Tz(r),
    hash: Oz(o),
  };
}
function Rz(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function hm(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function l6(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function s6(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Fi(e))
    : ((o = _s({}, e)),
      Ue(
        !o.pathname || !o.pathname.includes('?'),
        hm('?', 'pathname', 'search', o)
      ),
      Ue(
        !o.pathname || !o.pathname.includes('#'),
        hm('#', 'pathname', 'hash', o)
      ),
      Ue(!o.search || !o.search.includes('#'), hm('#', 'search', 'hash', o)));
  let a = e === '' || o.pathname === '',
    i = a ? '/' : o.pathname,
    l;
  if (r || i == null) l = n;
  else {
    let h = t.length - 1;
    if (i.startsWith('..')) {
      let p = i.split('/');
      for (; p[0] === '..'; ) p.shift(), (h -= 1);
      o.pathname = p.join('/');
    }
    l = h >= 0 ? t[h] : '/';
  }
  let s = Nz(o, l),
    u = i && i !== '/' && i.endsWith('/'),
    f = (a || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || f) && (s.pathname += '/'), s;
}
const ho = (e) => e.join('/').replace(/\/\/+/g, '/'),
  jz = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Tz = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Oz = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Mz(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const u6 = ['post', 'put', 'patch', 'delete'];
new Set(u6);
const Lz = ['get', ...u6];
new Set(Lz);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kd() {
  return (
    (kd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kd.apply(this, arguments)
  );
}
const Ug = N.createContext(null),
  Iz = N.createContext(null),
  Di = N.createContext(null),
  Nf = N.createContext(null),
  ua = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  c6 = N.createContext(null);
function Az(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qs() || Ue(!1);
  let { basename: r, navigator: o } = N.useContext(Di),
    { hash: a, pathname: i, search: l } = f6(e, { relative: n }),
    s = i;
  return (
    r !== '/' && (s = i === '/' ? r : ho([r, i])),
    o.createHref({ pathname: s, search: l, hash: a })
  );
}
function Qs() {
  return N.useContext(Nf) != null;
}
function Rf() {
  return Qs() || Ue(!1), N.useContext(Nf).location;
}
function d6(e) {
  N.useContext(Di).static || N.useLayoutEffect(e);
}
function Fz() {
  let { isDataRoute: e } = N.useContext(ua);
  return e ? Zz() : Dz();
}
function Dz() {
  Qs() || Ue(!1);
  let e = N.useContext(Ug),
    { basename: t, navigator: n } = N.useContext(Di),
    { matches: r } = N.useContext(ua),
    { pathname: o } = Rf(),
    a = JSON.stringify(l6(r).map((s) => s.pathnameBase)),
    i = N.useRef(!1);
  return (
    d6(() => {
      i.current = !0;
    }),
    N.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let f = s6(s, JSON.parse(a), o, u.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : ho([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, a, o, e]
    )
  );
}
function f6(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = N.useContext(ua),
    { pathname: o } = Rf(),
    a = JSON.stringify(l6(r).map((i) => i.pathnameBase));
  return N.useMemo(() => s6(e, JSON.parse(a), o, n === 'path'), [e, a, o, n]);
}
function Bz(e, t) {
  return Uz(e, t);
}
function Uz(e, t, n) {
  Qs() || Ue(!1);
  let { navigator: r } = N.useContext(Di),
    { matches: o } = N.useContext(ua),
    a = o[o.length - 1],
    i = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : '/';
  a && a.route;
  let s = Rf(),
    u;
  if (t) {
    var f;
    let g = typeof t == 'string' ? Fi(t) : t;
    l === '/' || ((f = g.pathname) != null && f.startsWith(l)) || Ue(!1),
      (u = g);
  } else u = s;
  let h = u.pathname || '/',
    p = l === '/' ? h : h.slice(l.length) || '/',
    y = hz(e, { pathname: p }),
    v = Kz(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: ho([
              l,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? l
                : ho([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && v
    ? N.createElement(
        Nf.Provider,
        {
          value: {
            location: kd(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: Yr.Pop,
          },
        },
        v
      )
    : v;
}
function Vz() {
  let e = Xz(),
    t = Mz(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    a = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unexpected Application Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? N.createElement('pre', { style: o }, n) : null,
    a
  );
}
const Wz = N.createElement(Vz, null);
class Hz extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? N.createElement(
          ua.Provider,
          { value: this.props.routeContext },
          N.createElement(c6.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function qz(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.useContext(Ug);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(ua.Provider, { value: t }, r)
  );
}
function Kz(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let l = a.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    l >= 0 || Ue(!1), (a = a.slice(0, Math.min(a.length, l + 1)));
  }
  return a.reduceRight((l, s, u) => {
    let f = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      h = null;
    n && (h = s.route.errorElement || Wz);
    let p = t.concat(a.slice(0, u + 1)),
      y = () => {
        let v;
        return (
          f
            ? (v = h)
            : s.route.Component
              ? (v = N.createElement(s.route.Component, null))
              : s.route.element
                ? (v = s.route.element)
                : (v = l),
          N.createElement(qz, {
            match: s,
            routeContext: { outlet: l, matches: p, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? N.createElement(Hz, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: f,
          children: y(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var x0;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate');
})(x0 || (x0 = {}));
var zs;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(zs || (zs = {}));
function Qz(e) {
  let t = N.useContext(Ug);
  return t || Ue(!1), t;
}
function Yz(e) {
  let t = N.useContext(Iz);
  return t || Ue(!1), t;
}
function Gz(e) {
  let t = N.useContext(ua);
  return t || Ue(!1), t;
}
function p6(e) {
  let t = Gz(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ue(!1), n.route.id;
}
function Xz() {
  var e;
  let t = N.useContext(c6),
    n = Yz(zs.UseRouteError),
    r = p6(zs.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Zz() {
  let { router: e } = Qz(x0.UseNavigateStable),
    t = p6(zs.UseNavigateStable),
    n = N.useRef(!1);
  return (
    d6(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (o, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, kd({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
function wl(e) {
  Ue(!1);
}
function Jz(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Yr.Pop,
    navigator: a,
    static: i = !1,
  } = e;
  Qs() && Ue(!1);
  let l = t.replace(/^\/*/, '/'),
    s = N.useMemo(() => ({ basename: l, navigator: a, static: i }), [l, a, i]);
  typeof r == 'string' && (r = Fi(r));
  let {
      pathname: u = '/',
      search: f = '',
      hash: h = '',
      state: p = null,
      key: y = 'default',
    } = r,
    v = N.useMemo(() => {
      let g = Bg(u, l);
      return g == null
        ? null
        : {
            location: { pathname: g, search: f, hash: h, state: p, key: y },
            navigationType: o,
          };
    }, [l, u, f, h, p, y, o]);
  return v == null
    ? null
    : N.createElement(
        Di.Provider,
        { value: s },
        N.createElement(Nf.Provider, { children: n, value: v })
      );
}
function eN(e) {
  let { children: t, location: n } = e;
  return Bz(b0(t), n);
}
var h4;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(h4 || (h4 = {}));
new Promise(() => {});
function b0(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, o) => {
      if (!N.isValidElement(r)) return;
      let a = [...t, o];
      if (r.type === N.Fragment) {
        n.push.apply(n, b0(r.props.children, a));
        return;
      }
      r.type !== wl && Ue(!1), !r.props.index || !r.props.children || Ue(!1);
      let i = {
        id: r.props.id || a.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = b0(r.props.children, a)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function w0() {
  return (
    (w0 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    w0.apply(this, arguments)
  );
}
function tN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function nN(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rN(e, t) {
  return e.button === 0 && (!t || t === '_self') && !nN(e);
}
const oN = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  aN = 'startTransition',
  g4 = C1[aN];
function iN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    a = N.useRef();
  a.current == null && (a.current = fz({ window: o, v5Compat: !0 }));
  let i = a.current,
    [l, s] = N.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = N.useCallback(
      (h) => {
        u && g4 ? g4(() => s(h)) : s(h);
      },
      [s, u]
    );
  return (
    N.useLayoutEffect(() => i.listen(f), [i, f]),
    N.createElement(Jz, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
const lN =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  sN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gm = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: a,
        replace: i,
        state: l,
        target: s,
        to: u,
        preventScrollReset: f,
      } = t,
      h = tN(t, oN),
      { basename: p } = N.useContext(Di),
      y,
      v = !1;
    if (typeof u == 'string' && sN.test(u) && ((y = u), lN))
      try {
        let c = new URL(window.location.href),
          m = u.startsWith('//') ? new URL(c.protocol + u) : new URL(u),
          x = Bg(m.pathname, p);
        m.origin === c.origin && x != null
          ? (u = x + m.search + m.hash)
          : (v = !0);
      } catch {}
    let g = Az(u, { relative: o }),
      S = uN(u, {
        replace: i,
        state: l,
        target: s,
        preventScrollReset: f,
        relative: o,
      });
    function d(c) {
      r && r(c), c.defaultPrevented || S(c);
    }
    return N.createElement(
      'a',
      w0({}, h, { href: y || g, onClick: v || a ? r : d, ref: n, target: s })
    );
  });
var v4;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher');
})(v4 || (v4 = {}));
var y4;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(y4 || (y4 = {}));
function uN(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: a,
      relative: i,
    } = t === void 0 ? {} : t,
    l = Fz(),
    s = Rf(),
    u = f6(e, { relative: i });
  return N.useCallback(
    (f) => {
      if (rN(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : wd(s) === wd(u);
        l(e, { replace: h, state: o, preventScrollReset: a, relative: i });
      }
    },
    [s, l, u, r, o, n, e, a, i]
  );
}
const cN = '/assets/homegengar-aa17295e.png';
function jf() {
  return E.jsxs('div', {
    className: 'flex justify-between fade-in text-white font-mono mt-4',
    children: [
      E.jsxs('div', {
        className: 'flex text-xl underline underline-offset-4',
        children: [
          E.jsx('div', {
            className: 'mx-2 mr-4',
            children: E.jsxs(gm, {
              to: '/',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                E.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                E.jsx('img', {
                  src: cN,
                  alt: 'Home',
                  className: 'relative z-10',
                  style: { width: '50px', height: '40px' },
                }),
              ],
            }),
          }),
          E.jsx('div', {
            className: 'mx-2',
            children: E.jsxs(gm, {
              to: '/literature',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                E.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                E.jsx('span', {
                  className: 'relative z-10',
                  children: 'literature',
                }),
              ],
            }),
          }),
          E.jsx('div', {
            className: 'mx-2 ml-4',
            children: E.jsxs(gm, {
              to: '/contact',
              className: 'px-2 py-1 rounded relative overflow-hidden group',
              children: [
                E.jsx('span', {
                  className:
                    'absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500',
                }),
                E.jsx('span', {
                  className: 'relative z-10',
                  children: 'contact',
                }),
              ],
            }),
          }),
        ],
      }),
      E.jsx('div', {}),
    ],
  });
}
const dN = { black: '#000', white: '#fff' },
  Ns = dN,
  fN = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  xa = fN,
  pN = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  ba = pN,
  mN = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  wa = mN,
  hN = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  ka = hN,
  gN = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  Sa = gN,
  vN = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  ul = vN,
  yN = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  xN = yN;
function D() {
  return (
    (D = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    D.apply(this, arguments)
  );
}
function Ea(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function m6(e) {
  if (!Ea(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = m6(e[n]);
    }),
    t
  );
}
function wr(e, t, n = { clone: !0 }) {
  const r = n.clone ? D({}, e) : e;
  return (
    Ea(e) &&
      Ea(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (Ea(t[o]) && o in e && Ea(e[o])
            ? (r[o] = wr(e[o], t[o], n))
            : n.clone
              ? (r[o] = Ea(t[o]) ? m6(t[o]) : t[o])
              : (r[o] = t[o]));
      }),
    r
  );
}
function _i(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
function kt(e) {
  if (typeof e != 'string') throw new Error(_i(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function bN(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const wN = typeof window < 'u' ? N.useLayoutEffect : N.useEffect,
  kN = wN;
function Bu(e) {
  const t = N.useRef(e);
  return (
    kN(() => {
      t.current = e;
    }),
    N.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function x4(...e) {
  return N.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              bN(n, t);
            });
          },
    e
  );
}
let Tf = !0,
  k0 = !1,
  b4;
const SN = {
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
  'datetime-local': !0,
};
function CN(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && SN[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function EN(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Tf = !0);
}
function vm() {
  Tf = !1;
}
function $N() {
  this.visibilityState === 'hidden' && k0 && (Tf = !0);
}
function PN(e) {
  e.addEventListener('keydown', EN, !0),
    e.addEventListener('mousedown', vm, !0),
    e.addEventListener('pointerdown', vm, !0),
    e.addEventListener('touchstart', vm, !0),
    e.addEventListener('visibilitychange', $N, !0);
}
function _N(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Tf || CN(t);
}
function zN() {
  const e = N.useCallback((o) => {
      o != null && PN(o.ownerDocument);
    }, []),
    t = N.useRef(!1);
  function n() {
    return t.current
      ? ((k0 = !0),
        window.clearTimeout(b4),
        (b4 = window.setTimeout(() => {
          k0 = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return _N(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Vg(e, t) {
  const n = D({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = D({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          a = t[r];
        (n[r] = {}),
          !a || !Object.keys(a)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = a)
              : ((n[r] = D({}, a)),
                Object.keys(o).forEach((i) => {
                  n[r][i] = Vg(o[i], a[i]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function h6(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((a, i) => {
          if (i) {
            const l = t(i);
            l !== '' && a.push(l), n && n[i] && a.push(n[i]);
          }
          return a;
        }, [])
        .join(' ');
    }),
    r
  );
}
const w4 = (e) => e,
  NN = () => {
    let e = w4;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = w4;
      },
    };
  },
  RN = NN(),
  jN = RN,
  TN = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    readOnly: 'readOnly',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected',
  };
function Wg(e, t, n = 'Mui') {
  const r = TN[t];
  return r ? `${n}-${r}` : `${jN.generate(e)}-${t}`;
}
function Hg(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Wg(e, o, n);
    }),
    r
  );
}
const g6 = '$$material';
function $n(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function v6(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ON =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  MN = v6(function (e) {
    return (
      ON.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function LN(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function IN(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var AN = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var a;
        r.tags.length === 0
          ? r.insertionPoint
            ? (a = r.insertionPoint.nextSibling)
            : r.prepend
              ? (a = r.container.firstChild)
              : (a = r.before)
          : (a = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, a),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(IN(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = LN(o);
          try {
            a.insertRule(r, a.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  mt = '-ms-',
  Sd = '-moz-',
  Z = '-webkit-',
  y6 = 'comm',
  qg = 'rule',
  Kg = 'decl',
  FN = '@import',
  x6 = '@keyframes',
  DN = '@layer',
  BN = Math.abs,
  Of = String.fromCharCode,
  UN = Object.assign;
function VN(e, t) {
  return rt(e, 0) ^ 45
    ? (((((((t << 2) ^ rt(e, 0)) << 2) ^ rt(e, 1)) << 2) ^ rt(e, 2)) << 2) ^
        rt(e, 3)
    : 0;
}
function b6(e) {
  return e.trim();
}
function WN(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, n) {
  return e.replace(t, n);
}
function S0(e, t) {
  return e.indexOf(t);
}
function rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rs(e, t, n) {
  return e.slice(t, n);
}
function Zn(e) {
  return e.length;
}
function Qg(e) {
  return e.length;
}
function Uu(e, t) {
  return t.push(e), e;
}
function HN(e, t) {
  return e.map(t).join('');
}
var Mf = 1,
  zi = 1,
  w6 = 0,
  Dt = 0,
  Ae = 0,
  Bi = '';
function Lf(e, t, n, r, o, a, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: a,
    line: Mf,
    column: zi,
    length: i,
    return: '',
  };
}
function cl(e, t) {
  return UN(Lf('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function qN() {
  return Ae;
}
function KN() {
  return (
    (Ae = Dt > 0 ? rt(Bi, --Dt) : 0), zi--, Ae === 10 && ((zi = 1), Mf--), Ae
  );
}
function Jt() {
  return (
    (Ae = Dt < w6 ? rt(Bi, Dt++) : 0), zi++, Ae === 10 && ((zi = 1), Mf++), Ae
  );
}
function ur() {
  return rt(Bi, Dt);
}
function xc() {
  return Dt;
}
function Ys(e, t) {
  return Rs(Bi, e, t);
}
function js(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function k6(e) {
  return (Mf = zi = 1), (w6 = Zn((Bi = e))), (Dt = 0), [];
}
function S6(e) {
  return (Bi = ''), e;
}
function bc(e) {
  return b6(Ys(Dt - 1, C0(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function QN(e) {
  for (; (Ae = ur()) && Ae < 33; ) Jt();
  return js(e) > 2 || js(Ae) > 3 ? '' : ' ';
}
function YN(e, t) {
  for (
    ;
    --t &&
    Jt() &&
    !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97));

  );
  return Ys(e, xc() + (t < 6 && ur() == 32 && Jt() == 32));
}
function C0(e) {
  for (; Jt(); )
    switch (Ae) {
      case e:
        return Dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && C0(Ae);
        break;
      case 40:
        e === 41 && C0(e);
        break;
      case 92:
        Jt();
        break;
    }
  return Dt;
}
function GN(e, t) {
  for (; Jt() && e + Ae !== 47 + 10; )
    if (e + Ae === 42 + 42 && ur() === 47) break;
  return '/*' + Ys(t, Dt - 1) + '*' + Of(e === 47 ? e : Jt());
}
function XN(e) {
  for (; !js(ur()); ) Jt();
  return Ys(e, Dt);
}
function ZN(e) {
  return S6(wc('', null, null, null, [''], (e = k6(e)), 0, [0], e));
}
function wc(e, t, n, r, o, a, i, l, s) {
  for (
    var u = 0,
      f = 0,
      h = i,
      p = 0,
      y = 0,
      v = 0,
      g = 1,
      S = 1,
      d = 1,
      c = 0,
      m = '',
      x = o,
      b = a,
      k = r,
      w = m;
    S;

  )
    switch (((v = c), (c = Jt()))) {
      case 40:
        if (v != 108 && rt(w, h - 1) == 58) {
          S0((w += ee(bc(c), '&', '&\f')), '&\f') != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += bc(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += QN(v);
        break;
      case 92:
        w += YN(xc() - 1, 7);
        continue;
      case 47:
        switch (ur()) {
          case 42:
          case 47:
            Uu(JN(GN(Jt(), xc()), t, n), s);
            break;
          default:
            w += '/';
        }
        break;
      case 123 * g:
        l[u++] = Zn(w) * d;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            d == -1 && (w = ee(w, /\f/g, '')),
              y > 0 &&
                Zn(w) - h &&
                Uu(
                  y > 32
                    ? S4(w + ';', r, n, h - 1)
                    : S4(ee(w, ' ', '') + ';', r, n, h - 2),
                  s
                );
            break;
          case 59:
            w += ';';
          default:
            if (
              (Uu((k = k4(w, t, n, u, f, o, l, m, (x = []), (b = []), h)), a),
              c === 123)
            )
              if (f === 0) wc(w, t, k, k, x, a, h, l, b);
              else
                switch (p === 99 && rt(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wc(
                      e,
                      k,
                      k,
                      r && Uu(k4(e, k, k, 0, 0, o, l, m, o, (x = []), h), b),
                      o,
                      b,
                      h,
                      l,
                      r ? x : b
                    );
                    break;
                  default:
                    wc(w, k, k, k, [''], b, 0, l, b);
                }
        }
        (u = f = y = 0), (g = d = 1), (m = w = ''), (h = i);
        break;
      case 58:
        (h = 1 + Zn(w)), (y = v);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && KN() == 125) continue;
        }
        switch (((w += Of(c)), c * g)) {
          case 38:
            d = f > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            (l[u++] = (Zn(w) - 1) * d), (d = 1);
            break;
          case 64:
            ur() === 45 && (w += bc(Jt())),
              (p = ur()),
              (f = h = Zn((m = w += XN(xc())))),
              c++;
            break;
          case 45:
            v === 45 && Zn(w) == 2 && (g = 0);
        }
    }
  return a;
}
function k4(e, t, n, r, o, a, i, l, s, u, f) {
  for (
    var h = o - 1, p = o === 0 ? a : [''], y = Qg(p), v = 0, g = 0, S = 0;
    v < r;
    ++v
  )
    for (var d = 0, c = Rs(e, h + 1, (h = BN((g = i[v])))), m = e; d < y; ++d)
      (m = b6(g > 0 ? p[d] + ' ' + c : ee(c, /&\f/g, p[d]))) && (s[S++] = m);
  return Lf(e, t, n, o === 0 ? qg : l, s, u, f);
}
function JN(e, t, n) {
  return Lf(e, t, n, y6, Of(qN()), Rs(e, 2, -2), 0);
}
function S4(e, t, n, r) {
  return Lf(e, t, n, Kg, Rs(e, 0, r), Rs(e, r + 1, -1), r);
}
function ci(e, t) {
  for (var n = '', r = Qg(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function eR(e, t, n, r) {
  switch (e.type) {
    case DN:
      if (e.children.length) break;
    case FN:
    case Kg:
      return (e.return = e.return || e.value);
    case y6:
      return '';
    case x6:
      return (e.return = e.value + '{' + ci(e.children, r) + '}');
    case qg:
      e.value = e.props.join(',');
  }
  return Zn((n = ci(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function tR(e) {
  var t = Qg(e);
  return function (n, r, o, a) {
    for (var i = '', l = 0; l < t; l++) i += e[l](n, r, o, a) || '';
    return i;
  };
}
function nR(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var rR = function (t, n, r) {
    for (
      var o = 0, a = 0;
      (o = a), (a = ur()), o === 38 && a === 12 && (n[r] = 1), !js(a);

    )
      Jt();
    return Ys(t, Dt);
  },
  oR = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (js(o)) {
        case 0:
          o === 38 && ur() === 12 && (n[r] = 1), (t[r] += rR(Dt - 1, n, r));
          break;
        case 2:
          t[r] += bc(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = ur() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Of(o);
      }
    while ((o = Jt()));
    return t;
  },
  aR = function (t, n) {
    return S6(oR(k6(t), n));
  },
  C4 = new WeakMap(),
  iR = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !C4.get(r)) &&
        !o
      ) {
        C4.set(t, !0);
        for (
          var a = [], i = aR(n, a), l = r.props, s = 0, u = 0;
          s < i.length;
          s++
        )
          for (var f = 0; f < l.length; f++, u++)
            t.props[u] = a[s] ? i[s].replace(/&\f/g, l[f]) : l[f] + ' ' + i[s];
      }
    }
  },
  lR = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function C6(e, t) {
  switch (VN(e, t)) {
    case 5103:
      return Z + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Sd + e + mt + e + e;
    case 6828:
    case 4268:
      return Z + e + mt + e + e;
    case 6165:
      return Z + e + mt + 'flex-' + e + e;
    case 5187:
      return (
        Z + e + ee(e, /(\w+).+(:[^]+)/, Z + 'box-$1$2' + mt + 'flex-$1$2') + e
      );
    case 5443:
      return Z + e + mt + 'flex-item-' + ee(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Z +
        e +
        mt +
        'flex-line-pack' +
        ee(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Z + e + mt + ee(e, 'shrink', 'negative') + e;
    case 5292:
      return Z + e + mt + ee(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Z +
        'box-' +
        ee(e, '-grow', '') +
        Z +
        e +
        mt +
        ee(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, '$1' + Z + '$2') + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, Z + '$1'), /(image-set)/, Z + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + '$1$`$1');
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Z + 'box-pack:$3' + mt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Zn(e) - 1 - t > 6)
        switch (rt(e, t + 1)) {
          case 109:
            if (rt(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Z +
                  '$2-$3$1' +
                  Sd +
                  (rt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~S0(e, 'stretch')
              ? C6(ee(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (rt(e, t + 1) !== 115) break;
    case 6444:
      switch (rt(e, Zn(e) - 3 - (~S0(e, '!important') && 10))) {
        case 107:
          return ee(e, ':', ':' + Z) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Z +
                (rt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Z +
                '$2$3$1' +
                mt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (rt(e, t + 11)) {
        case 114:
          return Z + e + mt + ee(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Z + e + mt + ee(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Z + e + mt + ee(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Z + e + mt + e + e;
  }
  return e;
}
var sR = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Kg:
          t.return = C6(t.value, t.length);
          break;
        case x6:
          return ci([cl(t, { value: ee(t.value, '@', '@' + Z) })], o);
        case qg:
          if (t.length)
            return HN(t.props, function (a) {
              switch (WN(a, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ci(
                    [cl(t, { props: [ee(a, /:(read-\w+)/, ':' + Sd + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return ci(
                    [
                      cl(t, {
                        props: [ee(a, /:(plac\w+)/, ':' + Z + 'input-$1')],
                      }),
                      cl(t, { props: [ee(a, /:(plac\w+)/, ':' + Sd + '$1')] }),
                      cl(t, { props: [ee(a, /:(plac\w+)/, mt + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  uR = [sR],
  cR = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute('data-emotion');
        S.indexOf(' ') !== -1 &&
          (document.head.appendChild(g), g.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || uR,
      a = {},
      i,
      l = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute('data-emotion').split(' '), d = 1;
            d < S.length;
            d++
          )
            a[S[d]] = !0;
          l.push(g);
        }
      );
    var s,
      u = [iR, lR];
    {
      var f,
        h = [
          eR,
          nR(function (g) {
            f.insert(g);
          }),
        ],
        p = tR(u.concat(o, h)),
        y = function (S) {
          return ci(ZN(S), p);
        };
      s = function (S, d, c, m) {
        (f = c),
          y(S ? S + '{' + d.styles + '}' : d.styles),
          m && (v.inserted[d.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new AN({
        key: n,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return v.sheet.hydrate(l), v;
  },
  E6 = { exports: {} },
  le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Je = typeof Symbol == 'function' && Symbol.for,
  Yg = Je ? Symbol.for('react.element') : 60103,
  Gg = Je ? Symbol.for('react.portal') : 60106,
  If = Je ? Symbol.for('react.fragment') : 60107,
  Af = Je ? Symbol.for('react.strict_mode') : 60108,
  Ff = Je ? Symbol.for('react.profiler') : 60114,
  Df = Je ? Symbol.for('react.provider') : 60109,
  Bf = Je ? Symbol.for('react.context') : 60110,
  Xg = Je ? Symbol.for('react.async_mode') : 60111,
  Uf = Je ? Symbol.for('react.concurrent_mode') : 60111,
  Vf = Je ? Symbol.for('react.forward_ref') : 60112,
  Wf = Je ? Symbol.for('react.suspense') : 60113,
  dR = Je ? Symbol.for('react.suspense_list') : 60120,
  Hf = Je ? Symbol.for('react.memo') : 60115,
  qf = Je ? Symbol.for('react.lazy') : 60116,
  fR = Je ? Symbol.for('react.block') : 60121,
  pR = Je ? Symbol.for('react.fundamental') : 60117,
  mR = Je ? Symbol.for('react.responder') : 60118,
  hR = Je ? Symbol.for('react.scope') : 60119;
function sn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Yg:
        switch (((e = e.type), e)) {
          case Xg:
          case Uf:
          case If:
          case Ff:
          case Af:
          case Wf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Bf:
              case Vf:
              case qf:
              case Hf:
              case Df:
                return e;
              default:
                return t;
            }
        }
      case Gg:
        return t;
    }
  }
}
function $6(e) {
  return sn(e) === Uf;
}
le.AsyncMode = Xg;
le.ConcurrentMode = Uf;
le.ContextConsumer = Bf;
le.ContextProvider = Df;
le.Element = Yg;
le.ForwardRef = Vf;
le.Fragment = If;
le.Lazy = qf;
le.Memo = Hf;
le.Portal = Gg;
le.Profiler = Ff;
le.StrictMode = Af;
le.Suspense = Wf;
le.isAsyncMode = function (e) {
  return $6(e) || sn(e) === Xg;
};
le.isConcurrentMode = $6;
le.isContextConsumer = function (e) {
  return sn(e) === Bf;
};
le.isContextProvider = function (e) {
  return sn(e) === Df;
};
le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Yg;
};
le.isForwardRef = function (e) {
  return sn(e) === Vf;
};
le.isFragment = function (e) {
  return sn(e) === If;
};
le.isLazy = function (e) {
  return sn(e) === qf;
};
le.isMemo = function (e) {
  return sn(e) === Hf;
};
le.isPortal = function (e) {
  return sn(e) === Gg;
};
le.isProfiler = function (e) {
  return sn(e) === Ff;
};
le.isStrictMode = function (e) {
  return sn(e) === Af;
};
le.isSuspense = function (e) {
  return sn(e) === Wf;
};
le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === If ||
    e === Uf ||
    e === Ff ||
    e === Af ||
    e === Wf ||
    e === dR ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === qf ||
        e.$$typeof === Hf ||
        e.$$typeof === Df ||
        e.$$typeof === Bf ||
        e.$$typeof === Vf ||
        e.$$typeof === pR ||
        e.$$typeof === mR ||
        e.$$typeof === hR ||
        e.$$typeof === fR))
  );
};
le.typeOf = sn;
E6.exports = le;
var gR = E6.exports,
  P6 = gR,
  vR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  yR = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  _6 = {};
_6[P6.ForwardRef] = vR;
_6[P6.Memo] = yR;
var xR = !0;
function bR(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var z6 = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || xR === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  wR = function (t, n, r) {
    z6(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var a = n;
      do t.insert(n === a ? '.' + o : '', a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function kR(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var SR = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  CR = /[A-Z]|^ms/g,
  ER = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  N6 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  E4 = function (t) {
    return t != null && typeof t != 'boolean';
  },
  ym = v6(function (e) {
    return N6(e) ? e : e.replace(CR, '-$&').toLowerCase();
  }),
  $4 = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(ER, function (r, o, a) {
            return (Jn = { name: o, styles: a, next: Jn }), o;
          });
    }
    return SR[t] !== 1 && !N6(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function Ts(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (Jn = { name: n.name, styles: n.styles, next: Jn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Jn = { name: r.name, styles: r.styles, next: Jn }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return $R(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var a = Jn,
          i = n(e);
        return (Jn = a), Ts(e, t, i);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function $R(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Ts(e, t, n[o]) + ';';
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != 'object')
        t != null && t[i] !== void 0
          ? (r += a + '{' + t[i] + '}')
          : E4(i) && (r += ym(a) + ':' + $4(a, i) + ';');
      else if (
        Array.isArray(i) &&
        typeof i[0] == 'string' &&
        (t == null || t[i[0]] === void 0)
      )
        for (var l = 0; l < i.length; l++)
          E4(i[l]) && (r += ym(a) + ':' + $4(a, i[l]) + ';');
      else {
        var s = Ts(e, t, i);
        switch (a) {
          case 'animation':
          case 'animationName': {
            r += ym(a) + ':' + s + ';';
            break;
          }
          default:
            r += a + '{' + s + '}';
        }
      }
    }
  return r;
}
var P4 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Jn,
  R6 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      a = '';
    Jn = void 0;
    var i = t[0];
    i == null || i.raw === void 0
      ? ((o = !1), (a += Ts(r, n, i)))
      : (a += i[0]);
    for (var l = 1; l < t.length; l++) (a += Ts(r, n, t[l])), o && (a += i[l]);
    P4.lastIndex = 0;
    for (var s = '', u; (u = P4.exec(a)) !== null; ) s += '-' + u[1];
    var f = kR(a) + s;
    return { name: f, styles: a, next: Jn };
  },
  PR = function (t) {
    return t();
  },
  _R = C1['useInsertionEffect'] ? C1['useInsertionEffect'] : !1,
  zR = _R || PR,
  j6 = N.createContext(typeof HTMLElement < 'u' ? cR({ key: 'css' }) : null);
j6.Provider;
var NR = function (t) {
    return N.forwardRef(function (n, r) {
      var o = N.useContext(j6);
      return t(n, o, r);
    });
  },
  T6 = N.createContext({});
function RR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return R6(t);
}
var Zg = function () {
    var t = RR.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  jR = MN,
  TR = function (t) {
    return t !== 'theme';
  },
  _4 = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? jR : TR;
  },
  z4 = function (t, n, r) {
    var o;
    if (n) {
      var a = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && a
          ? function (i) {
              return t.__emotion_forwardProp(i) && a(i);
            }
          : a;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  OR = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      z6(n, r, o),
      zR(function () {
        return wR(n, r, o);
      }),
      null
    );
  },
  MR = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      a,
      i;
    n !== void 0 && ((a = n.label), (i = n.target));
    var l = z4(t, n, r),
      s = l || _4(o),
      u = !s('as');
    return function () {
      var f = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (a !== void 0 && h.push('label:' + a + ';'),
        f[0] == null || f[0].raw === void 0)
      )
        h.push.apply(h, f);
      else {
        h.push(f[0][0]);
        for (var p = f.length, y = 1; y < p; y++) h.push(f[y], f[0][y]);
      }
      var v = NR(function (g, S, d) {
        var c = (u && g.as) || o,
          m = '',
          x = [],
          b = g;
        if (g.theme == null) {
          b = {};
          for (var k in g) b[k] = g[k];
          b.theme = N.useContext(T6);
        }
        typeof g.className == 'string'
          ? (m = bR(S.registered, x, g.className))
          : g.className != null && (m = g.className + ' ');
        var w = R6(h.concat(x), S.registered, b);
        (m += S.key + '-' + w.name), i !== void 0 && (m += ' ' + i);
        var _ = u && l === void 0 ? _4(c) : s,
          M = {};
        for (var P in g) (u && P === 'as') || (_(P) && (M[P] = g[P]));
        return (
          (M.className = m),
          (M.ref = d),
          N.createElement(
            N.Fragment,
            null,
            N.createElement(OR, {
              cache: S,
              serialized: w,
              isStringTag: typeof c == 'string',
            }),
            N.createElement(c, M)
          )
        );
      });
      return (
        (v.displayName =
          a !== void 0
            ? a
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = h),
        (v.__emotion_forwardProp = l),
        Object.defineProperty(v, 'toString', {
          value: function () {
            return '.' + i;
          },
        }),
        (v.withComponent = function (g, S) {
          return e(g, D({}, n, S, { shouldForwardProp: z4(v, S, !0) })).apply(
            void 0,
            h
          );
        }),
        v
      );
    };
  },
  LR = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  E0 = MR.bind();
LR.forEach(function (e) {
  E0[e] = E0(e);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function IR(e, t) {
  return E0(e, t);
}
const AR = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  FR = ['values', 'unit', 'step'],
  DR = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => D({}, n, { [r.key]: r.val }), {})
    );
  };
function BR(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = $n(e, FR),
    a = DR(t),
    i = Object.keys(a);
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, y) {
    const v = i.indexOf(y);
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == 'number' ? t[i[v]] : y) - r / 100}${n})`;
  }
  function f(p) {
    return i.indexOf(p) + 1 < i.length ? u(p, i[i.indexOf(p) + 1]) : l(p);
  }
  function h(p) {
    const y = i.indexOf(p);
    return y === 0
      ? l(i[1])
      : y === i.length - 1
        ? s(i[y])
        : u(p, i[i.indexOf(p) + 1]).replace('@media', '@media not all and');
  }
  return D(
    {
      keys: i,
      values: a,
      up: l,
      down: s,
      between: u,
      only: f,
      not: h,
      unit: n,
    },
    o
  );
}
const UR = { borderRadius: 4 },
  VR = UR;
function Bl(e, t) {
  return t ? wr(e, t, { clone: !1 }) : e;
}
const Jg = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  N4 = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Jg[e]}px)`,
  };
function Rr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || N4;
    return t.reduce((i, l, s) => ((i[a.up(a.keys[s])] = n(t[s])), i), {});
  }
  if (typeof t == 'object') {
    const a = r.breakpoints || N4;
    return Object.keys(t).reduce((i, l) => {
      if (Object.keys(a.values || Jg).indexOf(l) !== -1) {
        const s = a.up(l);
        i[s] = n(t[l], l);
      } else {
        const s = l;
        i[s] = t[s];
      }
      return i;
    }, {});
  }
  return n(t);
}
function WR(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const a = e.up(o);
          return (r[a] = {}), r;
        }, {})) || {}
  );
}
function HR(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Kf(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, a) => (o && o[a] ? o[a] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Cd(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = Kf(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function ne(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    a = (i) => {
      if (i[t] == null) return null;
      const l = i[t],
        s = i.theme,
        u = Kf(s, r) || {};
      return Rr(i, l, (h) => {
        let p = Cd(u, o, h);
        return (
          h === p &&
            typeof h == 'string' &&
            (p = Cd(u, o, `${t}${h === 'default' ? '' : kt(h)}`, h)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (a.propTypes = {}), (a.filterProps = [t]), a;
}
function qR(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const KR = { m: 'margin', p: 'padding' },
  QR = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  R4 = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  YR = qR((e) => {
    if (e.length > 2)
      if (R4[e]) e = R4[e];
      else return [e];
    const [t, n] = e.split(''),
      r = KR[t],
      o = QR[n] || '';
    return Array.isArray(o) ? o.map((a) => r + a) : [r + o];
  }),
  ev = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  tv = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...ev, ...tv];
function Gs(e, t, n, r) {
  var o;
  const a = (o = Kf(e, t, !1)) != null ? o : n;
  return typeof a == 'number'
    ? (i) => (typeof i == 'string' ? i : a * i)
    : Array.isArray(a)
      ? (i) => (typeof i == 'string' ? i : a[i])
      : typeof a == 'function'
        ? a
        : () => {};
}
function O6(e) {
  return Gs(e, 'spacing', 8);
}
function Xs(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function GR(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Xs(t, n)), r), {});
}
function XR(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = YR(n),
    a = GR(o, r),
    i = e[n];
  return Rr(e, i, a);
}
function M6(e, t) {
  const n = O6(e.theme);
  return Object.keys(e)
    .map((r) => XR(e, t, r, n))
    .reduce(Bl, {});
}
function Ne(e) {
  return M6(e, ev);
}
Ne.propTypes = {};
Ne.filterProps = ev;
function Re(e) {
  return M6(e, tv);
}
Re.propTypes = {};
Re.filterProps = tv;
function ZR(e = 8) {
  if (e.mui) return e;
  const t = O6({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((a) => {
          const i = t(a);
          return typeof i == 'number' ? `${i}px` : i;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Qf(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((a) => {
          r[a] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, a) => (t[a] ? Bl(o, t[a](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function rr(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const JR = ne({ prop: 'border', themeKey: 'borders', transform: rr }),
  ej = ne({ prop: 'borderTop', themeKey: 'borders', transform: rr }),
  tj = ne({ prop: 'borderRight', themeKey: 'borders', transform: rr }),
  nj = ne({ prop: 'borderBottom', themeKey: 'borders', transform: rr }),
  rj = ne({ prop: 'borderLeft', themeKey: 'borders', transform: rr }),
  oj = ne({ prop: 'borderColor', themeKey: 'palette' }),
  aj = ne({ prop: 'borderTopColor', themeKey: 'palette' }),
  ij = ne({ prop: 'borderRightColor', themeKey: 'palette' }),
  lj = ne({ prop: 'borderBottomColor', themeKey: 'palette' }),
  sj = ne({ prop: 'borderLeftColor', themeKey: 'palette' }),
  Yf = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Gs(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Xs(t, r) });
      return Rr(e, e.borderRadius, n);
    }
    return null;
  };
Yf.propTypes = {};
Yf.filterProps = ['borderRadius'];
Qf(JR, ej, tj, nj, rj, oj, aj, ij, lj, sj, Yf);
const Gf = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Gs(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Xs(t, r) });
    return Rr(e, e.gap, n);
  }
  return null;
};
Gf.propTypes = {};
Gf.filterProps = ['gap'];
const Xf = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Gs(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Xs(t, r) });
    return Rr(e, e.columnGap, n);
  }
  return null;
};
Xf.propTypes = {};
Xf.filterProps = ['columnGap'];
const Zf = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Gs(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Xs(t, r) });
    return Rr(e, e.rowGap, n);
  }
  return null;
};
Zf.propTypes = {};
Zf.filterProps = ['rowGap'];
const uj = ne({ prop: 'gridColumn' }),
  cj = ne({ prop: 'gridRow' }),
  dj = ne({ prop: 'gridAutoFlow' }),
  fj = ne({ prop: 'gridAutoColumns' }),
  pj = ne({ prop: 'gridAutoRows' }),
  mj = ne({ prop: 'gridTemplateColumns' }),
  hj = ne({ prop: 'gridTemplateRows' }),
  gj = ne({ prop: 'gridTemplateAreas' }),
  vj = ne({ prop: 'gridArea' });
Qf(Gf, Xf, Zf, uj, cj, dj, fj, pj, mj, hj, gj, vj);
function di(e, t) {
  return t === 'grey' ? t : e;
}
const yj = ne({ prop: 'color', themeKey: 'palette', transform: di }),
  xj = ne({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: di,
  }),
  bj = ne({ prop: 'backgroundColor', themeKey: 'palette', transform: di });
Qf(yj, xj, bj);
function Ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wj = ne({ prop: 'width', transform: Ht }),
  nv = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (r = r.breakpoints) == null ||
            (r = r.values) == null
              ? void 0
              : r[n]) ||
            Jg[n] ||
            Ht(n),
        };
      };
      return Rr(e, e.maxWidth, t);
    }
    return null;
  };
nv.filterProps = ['maxWidth'];
const kj = ne({ prop: 'minWidth', transform: Ht }),
  Sj = ne({ prop: 'height', transform: Ht }),
  Cj = ne({ prop: 'maxHeight', transform: Ht }),
  Ej = ne({ prop: 'minHeight', transform: Ht });
ne({ prop: 'size', cssProperty: 'width', transform: Ht });
ne({ prop: 'size', cssProperty: 'height', transform: Ht });
const $j = ne({ prop: 'boxSizing' });
Qf(wj, nv, kj, Sj, Cj, Ej, $j);
const Pj = {
    border: { themeKey: 'borders', transform: rr },
    borderTop: { themeKey: 'borders', transform: rr },
    borderRight: { themeKey: 'borders', transform: rr },
    borderBottom: { themeKey: 'borders', transform: rr },
    borderLeft: { themeKey: 'borders', transform: rr },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: Yf },
    color: { themeKey: 'palette', transform: di },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: di,
    },
    backgroundColor: { themeKey: 'palette', transform: di },
    p: { style: Re },
    pt: { style: Re },
    pr: { style: Re },
    pb: { style: Re },
    pl: { style: Re },
    px: { style: Re },
    py: { style: Re },
    padding: { style: Re },
    paddingTop: { style: Re },
    paddingRight: { style: Re },
    paddingBottom: { style: Re },
    paddingLeft: { style: Re },
    paddingX: { style: Re },
    paddingY: { style: Re },
    paddingInline: { style: Re },
    paddingInlineStart: { style: Re },
    paddingInlineEnd: { style: Re },
    paddingBlock: { style: Re },
    paddingBlockStart: { style: Re },
    paddingBlockEnd: { style: Re },
    m: { style: Ne },
    mt: { style: Ne },
    mr: { style: Ne },
    mb: { style: Ne },
    ml: { style: Ne },
    mx: { style: Ne },
    my: { style: Ne },
    margin: { style: Ne },
    marginTop: { style: Ne },
    marginRight: { style: Ne },
    marginBottom: { style: Ne },
    marginLeft: { style: Ne },
    marginX: { style: Ne },
    marginY: { style: Ne },
    marginInline: { style: Ne },
    marginInlineStart: { style: Ne },
    marginInlineEnd: { style: Ne },
    marginBlock: { style: Ne },
    marginBlockStart: { style: Ne },
    marginBlockEnd: { style: Ne },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ '@media print': { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Gf },
    rowGap: { style: Zf },
    columnGap: { style: Xf },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: Ht },
    maxWidth: { style: nv },
    minWidth: { transform: Ht },
    height: { transform: Ht },
    maxHeight: { transform: Ht },
    minHeight: { transform: Ht },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  rv = Pj;
function _j(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zj(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Nj() {
  function e(n, r, o, a) {
    const i = { [n]: r, theme: o },
      l = a[n];
    if (!l) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: f, style: h } = l;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const p = Kf(o, u) || {};
    return h
      ? h(i)
      : Rr(i, r, (v) => {
          let g = Cd(p, f, v);
          return (
            v === g &&
              typeof v == 'string' &&
              (g = Cd(p, f, `${n}${v === 'default' ? '' : kt(v)}`, v)),
            s === !1 ? g : { [s]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: a = {} } = n || {};
    if (!o) return null;
    const i = (r = a.unstable_sxConfig) != null ? r : rv;
    function l(s) {
      let u = s;
      if (typeof s == 'function') u = s(a);
      else if (typeof s != 'object') return s;
      if (!u) return null;
      const f = WR(a.breakpoints),
        h = Object.keys(f);
      let p = f;
      return (
        Object.keys(u).forEach((y) => {
          const v = zj(u[y], a);
          if (v != null)
            if (typeof v == 'object')
              if (i[y]) p = Bl(p, e(y, v, a, i));
              else {
                const g = Rr({ theme: a }, v, (S) => ({ [y]: S }));
                _j(g, v) ? (p[y] = t({ sx: v, theme: a })) : (p = Bl(p, g));
              }
            else p = Bl(p, e(y, v, a, i));
        }),
        HR(h, p)
      );
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const L6 = Nj();
L6.filterProps = ['sx'];
const ov = L6,
  Rj = ['breakpoints', 'palette', 'spacing', 'shape'];
function av(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: a = {} } = e,
    i = $n(e, Rj),
    l = BR(n),
    s = ZR(o);
  let u = wr(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: D({ mode: 'light' }, r),
      spacing: s,
      shape: D({}, VR, a),
    },
    i
  );
  return (
    (u = t.reduce((f, h) => wr(f, h), u)),
    (u.unstable_sxConfig = D({}, rv, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (h) {
      return ov({ sx: h, theme: this });
    }),
    u
  );
}
function jj(e) {
  return Object.keys(e).length === 0;
}
function Tj(e = null) {
  const t = N.useContext(T6);
  return !t || jj(t) ? e : t;
}
const Oj = av();
function Mj(e = Oj) {
  return Tj(e);
}
function I6(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = I6(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function dn() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = I6(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Lj = ['variant'];
function j4(e) {
  return e.length === 0;
}
function A6(e) {
  const { variant: t } = e,
    n = $n(e, Lj);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += j4(r) ? e[o] : kt(e[o]))
          : (r += `${j4(r) ? o : kt(o)}${kt(e[o].toString())}`);
      }),
    r
  );
}
const Ij = [
  'name',
  'slot',
  'skipVariantsResolver',
  'skipSx',
  'overridesResolver',
];
function Aj(e) {
  return Object.keys(e).length === 0;
}
function Fj(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const Dj = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Bj = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const a = A6(o.props);
        r[a] = o.style;
      }),
      r
    );
  },
  Uj = (e, t, n, r) => {
    var o;
    const { ownerState: a = {} } = e,
      i = [],
      l =
        n == null || (o = n.components) == null || (o = o[r]) == null
          ? void 0
          : o.variants;
    return (
      l &&
        l.forEach((s) => {
          let u = !0;
          Object.keys(s.props).forEach((f) => {
            a[f] !== s.props[f] && e[f] !== s.props[f] && (u = !1);
          }),
            u && i.push(t[A6(s.props)]);
        }),
      i
    );
  };
function kc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Vj = av();
function dl({ defaultTheme: e, theme: t, themeId: n }) {
  return Aj(t) ? e : t[n] || t;
}
function Wj(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Vj,
      rootShouldForwardProp: r = kc,
      slotShouldForwardProp: o = kc,
    } = e,
    a = (i) =>
      ov(D({}, i, { theme: dl(D({}, i, { defaultTheme: n, themeId: t })) }));
  return (
    (a.__mui_systemSx = !0),
    (i, l = {}) => {
      AR(i, (x) => x.filter((b) => !(b != null && b.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: f,
          skipSx: h,
          overridesResolver: p,
        } = l,
        y = $n(l, Ij),
        v = f !== void 0 ? f : (u && u !== 'Root') || !1,
        g = h || !1;
      let S,
        d = kc;
      u === 'Root' ? (d = r) : u ? (d = o) : Fj(i) && (d = void 0);
      const c = IR(i, D({ shouldForwardProp: d, label: S }, y)),
        m = (x, ...b) => {
          const k = b
            ? b.map((P) =>
                typeof P == 'function' && P.__emotion_real !== P
                  ? (A) =>
                      P(
                        D({}, A, {
                          theme: dl(D({}, A, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : P
              )
            : [];
          let w = x;
          s &&
            p &&
            k.push((P) => {
              const A = dl(D({}, P, { defaultTheme: n, themeId: t })),
                H = Dj(s, A);
              if (H) {
                const Q = {};
                return (
                  Object.entries(H).forEach(([ue, re]) => {
                    Q[ue] =
                      typeof re == 'function' ? re(D({}, P, { theme: A })) : re;
                  }),
                  p(P, Q)
                );
              }
              return null;
            }),
            s &&
              !v &&
              k.push((P) => {
                const A = dl(D({}, P, { defaultTheme: n, themeId: t }));
                return Uj(P, Bj(s, A), A, s);
              }),
            g || k.push(a);
          const _ = k.length - b.length;
          if (Array.isArray(x) && _ > 0) {
            const P = new Array(_).fill('');
            (w = [...x, ...P]), (w.raw = [...x.raw, ...P]);
          } else
            typeof x == 'function' &&
              x.__emotion_real !== x &&
              (w = (P) =>
                x(
                  D({}, P, {
                    theme: dl(D({}, P, { defaultTheme: n, themeId: t })),
                  })
                ));
          const M = c(w, ...k);
          return i.muiName && (M.muiName = i.muiName), M;
        };
      return c.withConfig && (m.withConfig = c.withConfig), m;
    }
  );
}
function Hj(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Vg(t.components[n].defaultProps, r);
}
function qj({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Mj(n);
  return r && (o = o[r] || o), Hj({ theme: o, name: t, props: e });
}
function iv(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Kj(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function na(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return na(Kj(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(_i(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error(_i(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((a) => parseFloat(a))), { type: n, values: r, colorSpace: o }
  );
}
function Jf(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, a) => (a < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function Qj(e) {
  e = na(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    a = r * Math.min(o, 1 - o),
    i = (u, f = (u + n / 30) % 12) =>
      o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = 'rgb';
  const s = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((l += 'a'), s.push(t[3])), Jf({ type: l, values: s })
  );
}
function T4(e) {
  e = na(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? na(Qj(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Yj(e, t) {
  const n = T4(e),
    r = T4(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Vu(e, t) {
  return (
    (e = na(e)),
    (t = iv(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Jf(e)
  );
}
function Gj(e, t) {
  if (((e = na(e)), (t = iv(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Jf(e);
}
function Xj(e, t) {
  if (((e = na(e)), (t = iv(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Jf(e);
}
function Zj(e, t) {
  return D(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
const Jj = ['mode', 'contrastThreshold', 'tonalOffset'],
  O4 = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Ns.white, default: Ns.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  xm = {
    text: {
      primary: Ns.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Ns.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function M4(e, t, n, r) {
  const o = r.light || r,
    a = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
        ? (e.light = Xj(e.main, o))
        : t === 'dark' && (e.dark = Gj(e.main, a)));
}
function eT(e = 'light') {
  return e === 'dark'
    ? { main: wa[200], light: wa[50], dark: wa[400] }
    : { main: wa[700], light: wa[400], dark: wa[800] };
}
function tT(e = 'light') {
  return e === 'dark'
    ? { main: ba[200], light: ba[50], dark: ba[400] }
    : { main: ba[500], light: ba[300], dark: ba[700] };
}
function nT(e = 'light') {
  return e === 'dark'
    ? { main: xa[500], light: xa[300], dark: xa[700] }
    : { main: xa[700], light: xa[400], dark: xa[800] };
}
function rT(e = 'light') {
  return e === 'dark'
    ? { main: ka[400], light: ka[300], dark: ka[700] }
    : { main: ka[700], light: ka[500], dark: ka[900] };
}
function oT(e = 'light') {
  return e === 'dark'
    ? { main: Sa[400], light: Sa[300], dark: Sa[700] }
    : { main: Sa[800], light: Sa[500], dark: Sa[900] };
}
function aT(e = 'light') {
  return e === 'dark'
    ? { main: ul[400], light: ul[300], dark: ul[700] }
    : { main: '#ed6c02', light: ul[500], dark: ul[900] };
}
function iT(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = $n(e, Jj),
    a = e.primary || eT(t),
    i = e.secondary || tT(t),
    l = e.error || nT(t),
    s = e.info || rT(t),
    u = e.success || oT(t),
    f = e.warning || aT(t);
  function h(g) {
    return Yj(g, xm.text.primary) >= n ? xm.text.primary : O4.text.primary;
  }
  const p = ({
      color: g,
      name: S,
      mainShade: d = 500,
      lightShade: c = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((g = D({}, g)),
        !g.main && g[d] && (g.main = g[d]),
        !g.hasOwnProperty('main'))
      )
        throw new Error(_i(11, S ? ` (${S})` : '', d));
      if (typeof g.main != 'string')
        throw new Error(_i(12, S ? ` (${S})` : '', JSON.stringify(g.main)));
      return (
        M4(g, 'light', c, r),
        M4(g, 'dark', m, r),
        g.contrastText || (g.contrastText = h(g.main)),
        g
      );
    },
    y = { dark: xm, light: O4 };
  return wr(
    D(
      {
        common: D({}, Ns),
        mode: t,
        primary: p({ color: a, name: 'primary' }),
        secondary: p({
          color: i,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: p({ color: l, name: 'error' }),
        warning: p({ color: f, name: 'warning' }),
        info: p({ color: s, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: xN,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: p,
        tonalOffset: r,
      },
      y[t]
    ),
    o
  );
}
const lT = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function sT(e) {
  return Math.round(e * 1e5) / 1e5;
}
const L4 = { textTransform: 'uppercase' },
  I4 = '"Roboto", "Helvetica", "Arial", sans-serif';
function uT(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = I4,
      fontSize: o = 14,
      fontWeightLight: a = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: f,
      pxToRem: h,
    } = n,
    p = $n(n, lT),
    y = o / 14,
    v = h || ((d) => `${(d / u) * y}rem`),
    g = (d, c, m, x, b) =>
      D(
        { fontFamily: r, fontWeight: d, fontSize: v(c), lineHeight: m },
        r === I4 ? { letterSpacing: `${sT(x / c)}em` } : {},
        b,
        f
      ),
    S = {
      h1: g(a, 96, 1.167, -1.5),
      h2: g(a, 60, 1.2, -0.5),
      h3: g(i, 48, 1.167, 0),
      h4: g(i, 34, 1.235, 0.25),
      h5: g(i, 24, 1.334, 0),
      h6: g(l, 20, 1.6, 0.15),
      subtitle1: g(i, 16, 1.75, 0.15),
      subtitle2: g(l, 14, 1.57, 0.1),
      body1: g(i, 16, 1.5, 0.15),
      body2: g(i, 14, 1.43, 0.15),
      button: g(l, 14, 1.75, 0.4, L4),
      caption: g(i, 12, 1.66, 0.4),
      overline: g(i, 12, 2.66, 1, L4),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return wr(
    D(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: a,
        fontWeightRegular: i,
        fontWeightMedium: l,
        fontWeightBold: s,
      },
      S
    ),
    p,
    { clone: !1 }
  );
}
const cT = 0.2,
  dT = 0.14,
  fT = 0.12;
function ye(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${cT})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${dT})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fT})`,
  ].join(',');
}
const pT = [
    'none',
    ye(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ye(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ye(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ye(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ye(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ye(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ye(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ye(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ye(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ye(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ye(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ye(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ye(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ye(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ye(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ye(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ye(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ye(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ye(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ye(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ye(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ye(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ye(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ye(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  mT = pT,
  hT = ['duration', 'easing', 'delay'],
  gT = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  vT = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function A4(e) {
  return `${Math.round(e)}ms`;
}
function yT(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function xT(e) {
  const t = D({}, gT, e.easing),
    n = D({}, vT, e.duration);
  return D(
    {
      getAutoHeightDuration: yT,
      create: (o = ['all'], a = {}) => {
        const {
          duration: i = n.standard,
          easing: l = t.easeInOut,
          delay: s = 0,
        } = a;
        return (
          $n(a, hT),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof i == 'string' ? i : A4(i)} ${l} ${typeof s == 'string' ? s : A4(s)}`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const bT = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  wT = bT,
  kT = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function ST(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: a = {},
    } = e,
    i = $n(e, kT);
  if (e.vars) throw new Error(_i(18));
  const l = iT(r),
    s = av(e);
  let u = wr(s, {
    mixins: Zj(s.breakpoints, n),
    palette: l,
    shadows: mT.slice(),
    typography: uT(l, a),
    transitions: xT(o),
    zIndex: D({}, wT),
  });
  return (
    (u = wr(u, i)),
    (u = t.reduce((f, h) => wr(f, h), u)),
    (u.unstable_sxConfig = D({}, rv, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (h) {
      return ov({ sx: h, theme: this });
    }),
    u
  );
}
const CT = ST(),
  F6 = CT;
function lv({ props: e, name: t }) {
  return qj({ props: e, name: t, defaultTheme: F6, themeId: g6 });
}
const D6 = (e) => kc(e) && e !== 'classes',
  ET = Wj({ themeId: g6, defaultTheme: F6, rootShouldForwardProp: D6 }),
  ca = ET;
function $0(e, t) {
  return (
    ($0 = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    $0(e, t)
  );
}
function $T(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    $0(e, t);
}
const F4 = Qt.createContext(null);
function PT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function sv(e, t) {
  var n = function (a) {
      return t && N.isValidElement(a) ? t(a) : a;
    },
    r = Object.create(null);
  return (
    e &&
      N.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function _T(e, t) {
  (e = e || {}), (t = t || {});
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = Object.create(null),
    o = [];
  for (var a in e) a in t ? o.length && ((r[a] = o), (o = [])) : o.push(a);
  var i,
    l = {};
  for (var s in t) {
    if (r[s])
      for (i = 0; i < r[s].length; i++) {
        var u = r[s][i];
        l[r[s][i]] = n(u);
      }
    l[s] = n(s);
  }
  for (i = 0; i < o.length; i++) l[o[i]] = n(o[i]);
  return l;
}
function Do(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function zT(e, t) {
  return sv(e.children, function (n) {
    return N.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Do(n, 'appear', e),
      enter: Do(n, 'enter', e),
      exit: Do(n, 'exit', e),
    });
  });
}
function NT(e, t, n) {
  var r = sv(e.children),
    o = _T(t, r);
  return (
    Object.keys(o).forEach(function (a) {
      var i = o[a];
      if (N.isValidElement(i)) {
        var l = a in t,
          s = a in r,
          u = t[a],
          f = N.isValidElement(u) && !u.props.in;
        s && (!l || f)
          ? (o[a] = N.cloneElement(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: Do(i, 'exit', e),
              enter: Do(i, 'enter', e),
            }))
          : !s && l && !f
            ? (o[a] = N.cloneElement(i, { in: !1 }))
            : s &&
              l &&
              N.isValidElement(u) &&
              (o[a] = N.cloneElement(i, {
                onExited: n.bind(null, i),
                in: u.props.in,
                exit: Do(i, 'exit', e),
                enter: Do(i, 'enter', e),
              }));
      }
    }),
    o
  );
}
var RT =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  jT = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  uv = (function (e) {
    $T(t, e);
    function t(r, o) {
      var a;
      a = e.call(this, r, o) || this;
      var i = a.handleExited.bind(PT(a));
      return (
        (a.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        a
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, a) {
        var i = a.children,
          l = a.handleExited,
          s = a.firstRender;
        return { children: s ? zT(o, l) : NT(o, i, l), firstRender: !1 };
      }),
      (n.handleExited = function (o, a) {
        var i = sv(this.props.children);
        o.key in i ||
          (o.props.onExited && o.props.onExited(a),
          this.mounted &&
            this.setState(function (l) {
              var s = D({}, l.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          a = o.component,
          i = o.childFactory,
          l = $n(o, ['component', 'childFactory']),
          s = this.state.contextValue,
          u = RT(this.state.children).map(i);
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          a === null
            ? Qt.createElement(F4.Provider, { value: s }, u)
            : Qt.createElement(
                F4.Provider,
                { value: s },
                Qt.createElement(a, l, u)
              )
        );
      }),
      t
    );
  })(Qt.Component);
uv.propTypes = {};
uv.defaultProps = jT;
const TT = uv;
function OT(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: a,
      rippleSize: i,
      in: l,
      onExited: s,
      timeout: u,
    } = e,
    [f, h] = N.useState(!1),
    p = dn(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: i, height: i, top: -(i / 2) + a, left: -(i / 2) + o },
    v = dn(n.child, f && n.childLeaving, r && n.childPulsate);
  return (
    !l && !f && h(!0),
    N.useEffect(() => {
      if (!l && s != null) {
        const g = setTimeout(s, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [s, l, u]),
    E.jsx('span', {
      className: p,
      style: y,
      children: E.jsx('span', { className: v }),
    })
  );
}
const MT = Hg('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  fn = MT,
  LT = ['center', 'classes', 'className'];
let ep = (e) => e,
  D4,
  B4,
  U4,
  V4;
const P0 = 550,
  IT = 80,
  AT = Zg(
    D4 ||
      (D4 = ep`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  FT = Zg(
    B4 ||
      (B4 = ep`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  DT = Zg(
    U4 ||
      (U4 = ep`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  BT = ca('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  UT = ca(OT, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    V4 ||
      (V4 = ep`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    fn.rippleVisible,
    AT,
    P0,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    fn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    fn.child,
    fn.childLeaving,
    FT,
    P0,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    fn.childPulsate,
    DT,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  VT = N.forwardRef(function (t, n) {
    const r = lv({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: a = {}, className: i } = r,
      l = $n(r, LT),
      [s, u] = N.useState([]),
      f = N.useRef(0),
      h = N.useRef(null);
    N.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [s]);
    const p = N.useRef(!1),
      y = N.useRef(0),
      v = N.useRef(null),
      g = N.useRef(null);
    N.useEffect(
      () => () => {
        y.current && clearTimeout(y.current);
      },
      []
    );
    const S = N.useCallback(
        (x) => {
          const {
            pulsate: b,
            rippleX: k,
            rippleY: w,
            rippleSize: _,
            cb: M,
          } = x;
          u((P) => [
            ...P,
            E.jsx(
              UT,
              {
                classes: {
                  ripple: dn(a.ripple, fn.ripple),
                  rippleVisible: dn(a.rippleVisible, fn.rippleVisible),
                  ripplePulsate: dn(a.ripplePulsate, fn.ripplePulsate),
                  child: dn(a.child, fn.child),
                  childLeaving: dn(a.childLeaving, fn.childLeaving),
                  childPulsate: dn(a.childPulsate, fn.childPulsate),
                },
                timeout: P0,
                pulsate: b,
                rippleX: k,
                rippleY: w,
                rippleSize: _,
              },
              f.current
            ),
          ]),
            (f.current += 1),
            (h.current = M);
        },
        [a]
      ),
      d = N.useCallback(
        (x = {}, b = {}, k = () => {}) => {
          const {
            pulsate: w = !1,
            center: _ = o || b.pulsate,
            fakeElement: M = !1,
          } = b;
          if ((x == null ? void 0 : x.type) === 'mousedown' && p.current) {
            p.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === 'touchstart' && (p.current = !0);
          const P = M ? null : g.current,
            A = P
              ? P.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let H, Q, ue;
          if (
            _ ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (H = Math.round(A.width / 2)), (Q = Math.round(A.height / 2));
          else {
            const { clientX: re, clientY: we } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            (H = Math.round(re - A.left)), (Q = Math.round(we - A.top));
          }
          if (_)
            (ue = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              ue % 2 === 0 && (ue += 1);
          else {
            const re =
                Math.max(Math.abs((P ? P.clientWidth : 0) - H), H) * 2 + 2,
              we = Math.max(Math.abs((P ? P.clientHeight : 0) - Q), Q) * 2 + 2;
            ue = Math.sqrt(re ** 2 + we ** 2);
          }
          x != null && x.touches
            ? v.current === null &&
              ((v.current = () => {
                S({
                  pulsate: w,
                  rippleX: H,
                  rippleY: Q,
                  rippleSize: ue,
                  cb: k,
                });
              }),
              (y.current = setTimeout(() => {
                v.current && (v.current(), (v.current = null));
              }, IT)))
            : S({ pulsate: w, rippleX: H, rippleY: Q, rippleSize: ue, cb: k });
        },
        [o, S]
      ),
      c = N.useCallback(() => {
        d({}, { pulsate: !0 });
      }, [d]),
      m = N.useCallback((x, b) => {
        if (
          (clearTimeout(y.current),
          (x == null ? void 0 : x.type) === 'touchend' && v.current)
        ) {
          v.current(),
            (v.current = null),
            (y.current = setTimeout(() => {
              m(x, b);
            }));
          return;
        }
        (v.current = null),
          u((k) => (k.length > 0 ? k.slice(1) : k)),
          (h.current = b);
      }, []);
    return (
      N.useImperativeHandle(n, () => ({ pulsate: c, start: d, stop: m }), [
        c,
        d,
        m,
      ]),
      E.jsx(
        BT,
        D({ className: dn(fn.root, a.root, i), ref: g }, l, {
          children: E.jsx(TT, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  WT = VT;
function HT(e) {
  return Wg('MuiButtonBase', e);
}
const qT = Hg('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  KT = qT,
  QT = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  YT = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      i = h6({ root: ['root', t && 'disabled', n && 'focusVisible'] }, HT, o);
    return n && r && (i.root += ` ${r}`), i;
  },
  GT = ca('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${KT.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  XT = N.forwardRef(function (t, n) {
    const r = lv({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: a = !1,
        children: i,
        className: l,
        component: s = 'button',
        disabled: u = !1,
        disableRipple: f = !1,
        disableTouchRipple: h = !1,
        focusRipple: p = !1,
        LinkComponent: y = 'a',
        onBlur: v,
        onClick: g,
        onContextMenu: S,
        onDragLeave: d,
        onFocus: c,
        onFocusVisible: m,
        onKeyDown: x,
        onKeyUp: b,
        onMouseDown: k,
        onMouseLeave: w,
        onMouseUp: _,
        onTouchEnd: M,
        onTouchMove: P,
        onTouchStart: A,
        tabIndex: H = 0,
        TouchRippleProps: Q,
        touchRippleRef: ue,
        type: re,
      } = r,
      we = $n(r, QT),
      ge = N.useRef(null),
      $ = N.useRef(null),
      T = x4($, ue),
      { isFocusVisibleRef: O, onFocus: B, onBlur: W, ref: Ve } = zN(),
      [se, st] = N.useState(!1);
    u && se && st(!1),
      N.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            st(!0), ge.current.focus();
          },
        }),
        []
      );
    const [Oe, Bt] = N.useState(!1);
    N.useEffect(() => {
      Bt(!0);
    }, []);
    const Pn = Oe && !f && !u;
    N.useEffect(() => {
      se && p && !f && Oe && $.current.pulsate();
    }, [f, p, se, Oe]);
    function _n(U, eu, tu = h) {
      return Bu(
        (cv) => (eu && eu(cv), !tu && $.current && $.current[U](cv), !0)
      );
    }
    const np = _n('start', k),
      rp = _n('stop', S),
      op = _n('stop', d),
      ap = _n('stop', _),
      ip = _n('stop', (U) => {
        se && U.preventDefault(), w && w(U);
      }),
      lp = _n('start', A),
      sp = _n('stop', M),
      up = _n('stop', P),
      cp = _n(
        'stop',
        (U) => {
          W(U), O.current === !1 && st(!1), v && v(U);
        },
        !1
      ),
      Ui = Bu((U) => {
        ge.current || (ge.current = U.currentTarget),
          B(U),
          O.current === !0 && (st(!0), m && m(U)),
          c && c(U);
      }),
      Po = () => {
        const U = ge.current;
        return s && s !== 'button' && !(U.tagName === 'A' && U.href);
      },
      Vi = N.useRef(!1),
      dp = Bu((U) => {
        p &&
          !Vi.current &&
          se &&
          $.current &&
          U.key === ' ' &&
          ((Vi.current = !0),
          $.current.stop(U, () => {
            $.current.start(U);
          })),
          U.target === U.currentTarget &&
            Po() &&
            U.key === ' ' &&
            U.preventDefault(),
          x && x(U),
          U.target === U.currentTarget &&
            Po() &&
            U.key === 'Enter' &&
            !u &&
            (U.preventDefault(), g && g(U));
      }),
      da = Bu((U) => {
        p &&
          U.key === ' ' &&
          $.current &&
          se &&
          !U.defaultPrevented &&
          ((Vi.current = !1),
          $.current.stop(U, () => {
            $.current.pulsate(U);
          })),
          b && b(U),
          g &&
            U.target === U.currentTarget &&
            Po() &&
            U.key === ' ' &&
            !U.defaultPrevented &&
            g(U);
      });
    let Hn = s;
    Hn === 'button' && (we.href || we.to) && (Hn = y);
    const _o = {};
    Hn === 'button'
      ? ((_o.type = re === void 0 ? 'button' : re), (_o.disabled = u))
      : (!we.href && !we.to && (_o.role = 'button'),
        u && (_o['aria-disabled'] = u));
    const Zs = x4(n, Ve, ge),
      Js = D({}, r, {
        centerRipple: a,
        component: s,
        disabled: u,
        disableRipple: f,
        disableTouchRipple: h,
        focusRipple: p,
        tabIndex: H,
        focusVisible: se,
      }),
      V = YT(Js);
    return E.jsxs(
      GT,
      D(
        {
          as: Hn,
          className: dn(V.root, l),
          ownerState: Js,
          onBlur: cp,
          onClick: g,
          onContextMenu: rp,
          onFocus: Ui,
          onKeyDown: dp,
          onKeyUp: da,
          onMouseDown: np,
          onMouseLeave: ip,
          onMouseUp: ap,
          onDragLeave: op,
          onTouchEnd: sp,
          onTouchMove: up,
          onTouchStart: lp,
          ref: Zs,
          tabIndex: u ? -1 : H,
          type: re,
        },
        _o,
        we,
        { children: [i, Pn ? E.jsx(WT, D({ ref: T, center: a }, Q)) : null] }
      )
    );
  }),
  ZT = XT;
function JT(e) {
  return Wg('MuiButton', e);
}
const eO = Hg('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  Wu = eO,
  tO = N.createContext({}),
  nO = tO,
  rO = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  oO = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: a,
        classes: i,
      } = e,
      l = {
        root: [
          'root',
          a,
          `${a}${kt(t)}`,
          `size${kt(o)}`,
          `${a}Size${kt(o)}`,
          t === 'inherit' && 'colorInherit',
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['startIcon', `iconSize${kt(o)}`],
        endIcon: ['endIcon', `iconSize${kt(o)}`],
      },
      s = h6(l, JT, i);
    return D({}, i, s);
  },
  B6 = (e) =>
    D(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  aO = ca(ZT, {
    shouldForwardProp: (e) => D6(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${kt(n.color)}`],
        t[`size${kt(n.size)}`],
        t[`${n.variant}Size${kt(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        a =
          e.palette.mode === 'light'
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return D(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': D(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Vu(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Vu(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Vu(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : a,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          '&:active': D(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Wu.focusVisible}`]: D(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Wu.disabled}`]: D(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === 'outlined' && {
          padding: '5px 15px',
          border: '1px solid currentColor',
        },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Vu(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && {
          color: 'inherit',
          borderColor: 'currentColor',
        },
        t.size === 'small' &&
          t.variant === 'text' && {
            padding: '4px 5px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'text' && {
            padding: '8px 11px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Wu.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Wu.disabled}`]: { boxShadow: 'none' },
      }
  ),
  iO = ca('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${kt(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    D(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      B6(e)
    )
  ),
  lO = ca('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${kt(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    D(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      B6(e)
    )
  ),
  sO = N.forwardRef(function (t, n) {
    const r = N.useContext(nO),
      o = Vg(r, t),
      a = lv({ props: o, name: 'MuiButton' }),
      {
        children: i,
        color: l = 'primary',
        component: s = 'button',
        className: u,
        disabled: f = !1,
        disableElevation: h = !1,
        disableFocusRipple: p = !1,
        endIcon: y,
        focusVisibleClassName: v,
        fullWidth: g = !1,
        size: S = 'medium',
        startIcon: d,
        type: c,
        variant: m = 'text',
      } = a,
      x = $n(a, rO),
      b = D({}, a, {
        color: l,
        component: s,
        disabled: f,
        disableElevation: h,
        disableFocusRipple: p,
        fullWidth: g,
        size: S,
        type: c,
        variant: m,
      }),
      k = oO(b),
      w =
        d && E.jsx(iO, { className: k.startIcon, ownerState: b, children: d }),
      _ = y && E.jsx(lO, { className: k.endIcon, ownerState: b, children: y });
    return E.jsxs(
      aO,
      D(
        {
          ownerState: b,
          className: dn(r.className, k.root, u),
          component: s,
          disabled: f,
          focusRipple: !p,
          focusVisibleClassName: dn(k.focusVisible, v),
          ref: n,
          type: c,
        },
        x,
        { classes: k, children: [w, i, _] }
      )
    );
  }),
  uO = sO,
  cO = ca(uO)(() => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 500ms ease-in-out',
    '&:hover': { transform: 'scale(1.1)', borderColor: 'rgb(219, 39, 119)' },
  }));
function dO() {
  const e = 'https://github.com/misaelucas';
  return E.jsx(cO, {
    href: e,
    target: '_blank',
    rel: 'noreferrer',
    variant: 'outlined',
    size: 'large',
    sx: {
      width: 150,
      fontFamily: 'monospace',
      fontSize: '1.10rem',
      color: 'rgb(219, 39, 119)',
      borderColor: 'rgb(219, 39, 119)',
    },
    children: 'Github',
  });
}
var U6 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  W4 = Qt.createContext && Qt.createContext(U6),
  go =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (go =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        go.apply(this, arguments)
      );
    },
  fO =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function V6(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Qt.createElement(t.tag, go({ key: n }, t.attr), V6(t.child));
    })
  );
}
function Wn(e) {
  return function (t) {
    return Qt.createElement(pO, go({ attr: go({}, e.attr) }, t), V6(e.child));
  };
}
function pO(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      a = e.title,
      i = fO(e, ['attr', 'size', 'title']),
      l = o || n.size || '1em',
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      Qt.createElement(
        'svg',
        go(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: s,
            style: go(go({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        a && Qt.createElement('title', null, a),
        e.children
      )
    );
  };
  return W4 !== void 0
    ? Qt.createElement(W4.Consumer, null, function (n) {
        return t(n);
      })
    : t(U6);
}
function mO(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z',
        },
      },
    ],
  })(e);
}
function hO(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
      },
    ],
  })(e);
}
function bm(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z',
        },
      },
    ],
  })(e);
}
function H4(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z',
        },
      },
    ],
  })(e);
}
function gO(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z',
        },
      },
    ],
  })(e);
}
function vO(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
        },
      },
    ],
  })(e);
}
function q4(e) {
  return Wn({
    tag: 'svg',
    attr: { viewBox: '0 0 320 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
        },
      },
    ],
  })(e);
}
function yO(e) {
  return Wn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z',
        },
      },
    ],
  })(e);
}
function xO(e) {
  return Wn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z',
        },
      },
    ],
  })(e);
}
function bO(e) {
  return Wn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
        },
      },
    ],
  })(e);
}
const wO = E.jsxs('svg', {
    stroke: 'currentColor',
    fill: 'currentColor',
    strokeWidth: '0',
    role: 'img',
    viewBox: '0 0 24 24',
    height: '1em',
    width: '1em',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      E.jsx('title', { children: 'Material-UI Icon' }),
      E.jsx('path', {
        d: 'M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z',
      }),
    ],
  }),
  kO = () => {
    const e = [
        {
          name: 'Anabolic Archives',
          description:
            'Uma aplicação onde usuários podem criar protocolos estéticos e filtrar de acordo com os próprios parâmetros. Fullstack, em desenvolvimento.',
          icon: E.jsx(gO, {}),
          technologiesUsed: ['React', 'TailwindCSS', 'Firebase', 'Material-UI'],
          link: 'https://github.com/misaelucas/anabolica',
        },
        {
          name: 'Baldersbra',
          description:
            'Aplicação em React Native que calcula macros utilizando fórmulas científicas, ele determina a TMB do usuário e fornece as calorias necessárias para seu objetivo.',
          icon: E.jsx(q4, {}),
          technologiesUsed: ['React Native', 'Expo'],
          link: 'https://github.com/misaelucas/baldersbra',
        },
        {
          name: 'Centro Médico Hebrom',
          description:
            'Clínica médica, Single Page Application intuitiva, UI/UX focado em levar o usuário a agendar consultas.',
          icon: E.jsx(H4, {}),
          technologiesUsed: ['React', 'TailwindCSS'],
          link: 'https://centromedicohebrom.com.br',
        },
        {
          name: 'Express CRUD',
          description:
            'API RESTful básico com funcionalidade CRUD para gerenciar uma coleção de usuários.',
          icon: E.jsx(bm, {}),
          technologiesUsed: ['Node.js', 'Express'],
          link: 'https://github.com/misaelucas/crud/',
        },
      ],
      t = {
        React: { icon: E.jsx(H4, {}), bgClass: 'bg-blue-500', name: 'React' },
        Firebase: {
          icon: E.jsx(xO, {}),
          bgClass: 'bg-yellow-600',
          name: 'Firebase',
        },
        'Node.js': {
          icon: E.jsx(bm, {}),
          bgClass: 'bg-green-500',
          name: 'Node.js',
        },
        TailwindCSS: {
          icon: E.jsx(bO, {}),
          bgClass: 'bg-sky-600',
          name: 'TailwindCSS',
        },
        'React Native': {
          icon: E.jsx(q4, {}),
          bgClass: 'bg-blue-500',
          name: 'React Native',
        },
        Expo: { icon: E.jsx(yO, {}), bgClass: 'bg-purple-600', name: 'Expo' },
        'Material-UI': {
          icon: wO,
          bgClass: 'bg-indigo-500',
          name: 'Material-UI',
        },
        Express: {
          icon: E.jsx(bm, {}),
          bgClass: 'bg-gray-900',
          name: 'Express',
        },
      };
    return E.jsxs('div', {
      className: 'flex flex-col gap-6 bg-cool-blue p-4 -ml-2 rounded-lg',
      children: [
        E.jsxs('div', {
          className: 'relative blur-opacity group',
          children: [
            E.jsx('div', {
              className:
                'mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 lg:text-3xl font-bold mt-12 w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white',
              children: 'My Work',
            }),
            E.jsx('div', {
              className:
                'absolute underline bottom-0 left-0 w-full h-0.5 bg-pink-600 transition-colors duration-300',
            }),
          ],
        }),
        E.jsx('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto',
          children: e.map((n, r) =>
            E.jsxs(
              'a',
              {
                href: n.link,
                target: '_blank',
                rel: 'noopener noreferrer',
                className:
                  'flex flex-col text-white bg-slate-800 font-mono rounded-lg p-4 shadow-lg hover:bg-pink-700 transition duration-500 ease-in-out transform-gpu hover:scale-105',
                children: [
                  E.jsx('h3', {
                    className: 'text-xl mb-2 md:mb-4',
                    children: n.name,
                  }),
                  E.jsx('p', {
                    className: 'mt-2 mb-4 flex-grow',
                    children: n.description,
                  }),
                  E.jsx('div', {
                    className: 'mt-4 grid grid-cols-2 gap-2',
                    children: n.technologiesUsed.map((o, a) =>
                      E.jsxs(
                        'div',
                        {
                          className: `flex items-center justify-center h-10 md:h-12 rounded-md ${t[o].bgClass}`,
                          children: [
                            t[o].icon,
                            E.jsx('span', {
                              className: 'text-white text-xs ml-1',
                              children: t[o].name,
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                ],
              },
              r
            )
          ),
        }),
      ],
    });
  };
function SO(e) {
  return Wn({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
        },
      },
    ],
  })(e);
}
const tp = () => {
    const e = 'surfing at the internetz';
    return E.jsx('div', {
      className: 'flex flex-wrap justify-center text-sm',
      children: E.jsxs('div', {
        className: 'flex my-2 ',
        children: [
          E.jsx('a', {
            href: 'https://leekspin.com/',
            className:
              'rainbow underline underline-offset-4 mr-1 decoration-white',
            children: e,
          }),
          E.jsx('span', { className: 'ml-1 text-white', children: '-' }),
          E.jsx('a', {
            className:
              'ml-2 underline underline-offset-4 decoration-white hover:text-pink-500',
            href: 'https://github.com/misaelucas',
            children: 'misa',
          }),
          E.jsx('a', {
            className: 'ml-2 text-xl ',
            href: 'https://github.com/misaelucas',
            children: E.jsx(SO, {}),
          }),
        ],
      }),
    });
  },
  CO = '/assets/gengar-3f099e90.gif',
  EO = () =>
    E.jsx('div', {
      className:
        'bio flex mt-12 lg:mt-16 text-white justify-center font-mono flex-col',
      children: E.jsxs('div', {
        className: 'flex flex-col ml-8 sm:ml-12 md:ml-20 lg:ml-24',
        children: [
          E.jsx('div', {
            className:
              'font-bold font-sans text-3xl sm:text-4xl md:text-4xl sm:-ml-4 lg:text-5xl tracking-wider',
            children: E.jsxs('div', {
              className: 'flex items-center',
              children: [
                E.jsx('span', { children: 'Hi, I’m Misa.' }),
                E.jsx('img', { src: CO, alt: '', className: 'ml-2 self-end' }),
              ],
            }),
          }),
          E.jsx('div', {
            className: 'text-xl leading-7 mt-4 tracking-tight px-5 lg:w-3/4',
            children:
              'Tenho 24 anos, atualmente trabalho com desenvolvimento web. Também me interesso profundamente por muay thai, estoicismo e bons poemas.',
          }),
          E.jsx('div', {
            className: 'leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4',
            children:
              'Esta é minha página pessoal, fique à vontade para navegar, aqui você poderá encontrar meu portfólio, coisas que gosto de pensar que são interessantes, e a convergência de minhas considerações e percepções sobre a vida.',
          }),
          E.jsxs('div', {
            className: 'leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4',
            children: [
              'Por enquanto, eu desenvolvo dependendo fortemente de',
              ' ',
              E.jsx('a', {
                href: 'https://react.dev/',
                className: 'underline text-blue-500 ',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'React',
              }),
              ', ',
              E.jsx('a', {
                href: 'https://tailwindcss.com/',
                className: 'underline text-sky-500',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Tailwind CSS',
              }),
              ' e ',
              E.jsx('a', {
                href: 'https://openai.com/',
                className: 'underline text-yellow-500',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Firebase.',
              }),
              ' ',
              E.jsx('p', {
                className: 'mt-1  ',
                children:
                  'Todo o meu trabalho é feito com uma abordagem mobile first e design minimalista.',
              }),
              E.jsx('div', { className: 'mt-8', children: E.jsx(dO, {}) }),
            ],
          }),
          E.jsx('div', { className: 'mr-2 -ml-2 ', children: E.jsx(kO, {}) }),
          E.jsx(tp, {}),
        ],
      }),
    });
function $O() {
  return (
    console.log(
      'Howdy, fellow struggler. If you happen to spot any errors, specially about website responsiveness, you can reach me at misaelucas@gmail.com, i will be happy to know.'
    ),
    E.jsxs('div', {
      className: 'App fade-in overflow-hidden',
      children: [E.jsx(jf, {}), E.jsx(EO, {})],
    })
  );
}
function PO() {
  return E.jsxs('div', {
    className: 'contact-container',
    children: [
      E.jsx(jf, {}),
      E.jsx('div', {
        className: 'content-container',
        children: E.jsxs('div', {
          className: 'text-center',
          children: [
            E.jsx('div', {
              className:
                'text-xl text-white -mt-20 sm:text-2xl md:text-3xl font-bold mb-4',
              children: 'Olá, você pode falar comigo por aqui:',
            }),
            E.jsxs('div', {
              className: 'flex justify-center space-x-2 sm:space-x-4',
              children: [
                E.jsx('a', {
                  href: 'https://www.linkedin.com/in/misael-lucas/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-4xl text-white hover:text-blue-400 transition-colors',
                  children: E.jsx(hO, {}),
                }),
                E.jsx('a', {
                  href: 'https://discordapp.com/users/271460156083142656',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-4xl text-white hover:text-blue-400 transition-colors',
                  children: E.jsx(mO, {}),
                }),
                E.jsx('a', {
                  href: 'mailto:misaelucas@gmail.com',
                  className:
                    'text-4xl text-white hover:text-blue-400 transition-colors',
                  children: E.jsx(vO, {}),
                }),
              ],
            }),
          ],
        }),
      }),
      E.jsx(tp, {}),
    ],
  });
}
const _O = () =>
  E.jsxs('div', {
    className: 'flex flex-col font-bold text-justify p-4 sm:p-2 lg:p-1 xl:p-0 ',
    children: [
      E.jsx('p', {
        className: 'mt-3',
        children:
          'A maioria dos homens em todas as suas buscas e interesses os segue em total ignorância sobre qual é a natureza de cada um ou mesmo qual é o valor prático de cada um; em vez disso, eles são atraídos por opinião, prazer ou hábito. Tampouco, por outro lado, no caso daquelas atividades e interesses dos quais eles se abstêm e nos quais evitam se envolver, eles se abstêm porque sabem quais são prejudiciais ou qual é a natureza do dano que acarretam; em vez disso, também nessas questões, tudo o que eles observam que seus vizinhos evitam ou coisas que se tornou seu costume evitar ou que eles supõem que serão desagradáveis para eles e têm a reputação de serem acompanhadas de alguma dor, essas coisas eles geralmente veem com desconfiança.',
      }),
      E.jsxs('p', {
        className: 'mt-3 ',
        children: [
          'Além disso, embora as sensações de prazer e de dor sejam comuns a todos os homens - embora alguns sejam escravizados por elas em menor grau e outros em maior grau - a questão de opinião varia e não é a mesma para todos. Assim acontece que alguns elogiam ou censuram isso e outros aquilo, muitas vezes agindo em desacordo a esse respeito. Por exemplo, a dor é experimentada tanto pelo indiano quanto pelo espartano quando são feridos ou queimados, assim como pelo frígio e pelo lídio; no entanto, enquanto o indiano e o espartano se recusam a fraquejar porque foram endurecidos para isso, o frígio e o lídio fraquejam porque são fracos e não endurecidos. Mais uma vez, embora o prazer seja inevitavelmente experimentado nas relações sexuais e na comida e na bebida que são prazerosas, não apenas pelos jônios, mas também pelos tessálios,',
          ' ',
          E.jsx('a', {
            href: 'https://pt.wikipedia.org/wiki/Magna_Gr%C3%A9cia',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'underline underline-offset-2 text-sky-300 hover:scale-100',
            children: 'gregos italianos',
          }),
          ', getanos, indianos e espartanos, ainda assim alguns não pensam em todos para tais gratificações e não procuram conhecer nenhum deles, enquanto os outros aceitariam a morte como preço para obter um pouco mais de prazer.',
          ' ',
        ],
      }),
      E.jsx('p', {
        className: 'mt-3 ',
        children:
          'Agora, aparentemente, a questão da opinião é de todo tipo concebível e as diferenças encontradas nesta questão são muito numerosas e muito grandes. E é por causa desse fato que em nenhuma raça de animais se encontraria tanta discórdia, nem se encontraria em nenhuma raça tão divergente consigo mesma - tome, por exemplo, cavalos ou cães ou leões ou gado ou veados; ao contrário, animais semelhantes se comportam da mesma forma na alimentação, na procriação e na criação de seus filhotes, e têm os mesmos apetites e as mesmas aversões. A razão é que, em geral, eles seguem apenas o que é agradável e evitam o que é doloroso. Mas a raça humana, que por natureza participa da sabedoria, embora fique aquém dela por causa do mau julgamento e da indiferença, é interiormente cheia de opinião e auto-engano. Além disso, os homens diferem uns dos outros em tudo - no vestuário e na vestimenta, na comida e nos prazeres sexuais, na honra e na desonra - de acordo com as nações e cidades. E da mesma forma também com a cidade, cada um tem sua própria ambição individual - um para obter tanta terra quanto possível, outro prata, outro escravos, outro todas essas coisas juntas, outro para ser admirado por sua eloqüência e assim ter maior poder do que seus semelhantes, outro se esforça apenas para ser inteligente e adquirir experiência na política, outro para ter influência por algum outro motivo, outro para se entregar ao luxo ao máximo.',
      }),
      E.jsx('p', {
        className: 'mt-3 ',
        children:
          'Agora, como eu estava dizendo, em nenhuma dessas atividades, com toda a probabilidade, mesmo aqueles que são considerados os melhores em sua linha a levariam a cabo com sucesso. Pois, não sabendo o que é melhor ou o que é pior ou o que é vantajoso, eles não exercem nenhuma escolha. Mas aquele que desejou sabedoria e pensou em como deveria cuidar de si mesmo e que educação deveria receber para se tornar um homem bom e superior às massas, ele, eu digo, foi abençoado com um bom caráter e com além disso, uma fortuna correspondente. Pois há esperança de que, se ele investigar e receber instrução, descobrirá o que é necessário e com que objetivo e propósito deve conduzir e regular tudo o mais.',
      }),
      E.jsxs('p', {
        className: 'mt-3 ',
        children: [
          'Mas aquele que compreende isso seria a partir desse momento bem-sucedido em todas as coisas, tanto nas que são consideradas mais importantes quanto nas que são consideradas menos; e quer ele acompanhe as corridas de cavalos ou se dedique à música ou à agricultura, ou se ele desejar ser um general ou ocupar os outros cargos ou conduzir os outros negócios públicos em sua cidade, ele fará tudo bem. e não cometeria erros em nada. No entanto, sem esse entendimento, enquanto em cada um de seus trabalhos ele pode às vezes parecer bem-sucedido tanto para si mesmo quanto para seus vizinhos - por exemplo, se como agricultor ele fosse feliz com suas colheitas, ou se ele tivesse mais do que o conhecimento comum com o manejo de cavalos, ou se ele tivesse um conhecimento razoavelmente bom de música, ou se em competições atléticas ele pudesse superar seus competidores - ainda assim, no geral, ele falharia, já que estaria trabalhando nessas coisas para nenhum fim bom nem de modo a obter benefícios.',
          ' ',
        ],
      }),
      E.jsx('p', {
        className: 'mt-3 ',
        children:
          'Portanto, ele é incapaz de prosperar, assim como alguém não pode fazer uma viagem bem-sucedida se não sabe para onde está navegando, sendo levado ao acaso no mar, com seu navio navegando em linha reta em um momento, caso a sorte assim o determine, mas no próximo momento oscilando, em um momento com o vento a favor, no próximo contra o vento. Na verdade, assim como com a lira, os músicos primeiro ajustam a corda do meio e depois afinam as outras para harmonizar com ela - caso contrário, nunca conseguirão qualquer harmonia - assim também na vida, os homens devem primeiro compreender o que é melhor e, tendo feito disso seu objetivo, devem fazer tudo o mais em referência a isso; caso contrário, sua vida estará fora de harmonia e desafinada, muito provavelmente.',
      }),
    ],
  });
function zO() {
  const e = [
    {
      author: 'Dião Crisóstomo',
      title: 'O Sexagésimo Oitavo Discurso: Sobre Opinião',
      text: E.jsx(_O, {}),
    },
  ];
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(jf, {}),
      E.jsx('div', {
        className: 'text-white font-mono mx-auto max-w-3xl fade-in mt-8',
        children: e.map((t, n) =>
          E.jsxs(
            'div',
            {
              className:
                'py-8 border-t border-white font-sans font-bold border-opacity-25 last:border-b text-center',
              children: [
                E.jsx('h2', {
                  className: 'text-3xl mb-4 ',
                  children: t.author,
                }),
                E.jsx('h3', {
                  className: 'text-xl sm:text-2xl mb-2 px-5 ',
                  children: t.title,
                }),
                E.jsx('p', { className: 'max-w-11/12', children: t.text }),
              ],
            },
            n
          )
        ),
      }),
      E.jsx(tp, {}),
    ],
  });
}
const NO = () =>
    E.jsx('div', {
      className: 'font-mono ',
      children: E.jsxs('div', {
        className: 'font-mono',
        children: [
          E.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Nos últimos meses eu tenho investido a maior parte do tempo tentando cuidar da minha saúde mental, entre eiras e beiras, conquistei estabilidade suficiente para amar minhas idiossincrasias, depois de tanto tempo...',
          }),
          E.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Imagino que a ideia de referências seja um tanto boba, pois todo escritor decente preza exclusivamente pela emoção, pela experiência, pelo correlato objetivo. Ainda tô tentando abandonar minha vaidade intelectual (COITADOOOO), mas é um negócio difícil assimilar a sabedoria "não só na memória, senão nos olhos, no coração, no estômago." Esse aqui vale referenciar, o livro me ajudou muito - Siddharta, de Hermann Hesse.',
          }),
          E.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              'Diariamente, estou gastando quase que meu dia inteiro programando p/ fazer o deploy de um projeto grande, mas daí hoje vi uma notícia que me deu vontade de voltar a escrever. Fui refatorar meu site pessoal (que não tem quase nada kkk) para criar um blog e falar sobre esse negócio que rolou na UFSC (meu coração se encheu de animosidade, há anos eu não assisto TV ou mídia tradicional e sou extremamente leigo politicamente, + penso que um amplo entendimento da natureza humana em harmonia c/ um repertório filosófico é suficiente p/ tratar de um espectro enorme desses assuntos) e dei até risada de como meu código era ruim. Fico feliz de perceber o progresso. Tô refatorando ele, e vou fazer um texto desses assuntos aí. Daí: deu vontade de escrever, fui refatorar o código, lembrei que ia esquecer se não anotasse, esqueci os assuntos importantes, kkkkkk. É só uma catarse, e pros meus amigos, não é hipomania não. Dei uma limpada no meu instagram, é muito zoada a forma como isso aqui é usado majoritariamente.',
          }),
          E.jsx('p', {
            className: 'mb-4 mt-2 text-lg',
            children:
              '"Ocasionalmente, deixo cair uma xícara de chá para quebrar no chão de propósito. Não fico satisfeito quando não se recompõe. Algum dia, talvez, aquela xícara retornará"',
          }),
          E.jsx('p', {
            className: 'mb-4 mt-2 text-lg font-bold',
            children: 'A tua vida inspira outras vidas.',
          }),
          E.jsx('a', {
            href: 'https://www.youtube.com/watch?v=UtdqpL3kbbc',
            className:
              'mb-4 pt-2 text-md underline  underline-offset-2 text-pink-500 font-bold hover:text-sky-400 transition duration-300 ease-in-out transform-gpu hover:scale-105 ',
            children: 'Chip the Cup - Song by Patriot Series',
          }),
        ],
      }),
    }),
  RO = () => {
    const e = [
        {
          id: 1,
          date: '14 de Julho de 2023',
          title: 'Chip the Cup',
          content: E.jsx(NO, {}),
        },
      ],
      [t, n] = N.useState(null),
      r = (o) => {
        n(o === t ? null : o);
      };
    return E.jsxs('div', {
      className: 'flex flex-col fade-in min-h-screen',
      children: [
        E.jsxs('div', {
          className: 'flex-grow',
          children: [
            E.jsx(jf, {}),
            E.jsx('div', {
              className:
                'flex justify-center flex-wrap text-center text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white',
              children: 'Creed Thoughts',
            }),
            E.jsx('div', {
              className: 'flex justify-start',
              children: E.jsx('div', {
                className: 'w-full mx-auto',
                children: E.jsxs('div', {
                  className: 'max-w-3xl mx-auto ml-12',
                  children: [
                    E.jsx('h2', {
                      className:
                        'text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white',
                      children: 'Blog Posts',
                    }),
                    e.map((o) =>
                      E.jsxs(
                        'div',
                        {
                          className: `p-4 my-2 bg-gray-700 hover:bg-gray-800 duration-500 rounded-lg cursor-pointer ${t === o.id ? 'w-full -ml-5 sm:-ml-0 bg-gray-800' : 'w-11/12 '}`,
                          onClick: () => r(o.id),
                          children: [
                            E.jsxs('div', {
                              className: 'flex justify-between items-center',
                              children: [
                                E.jsx('h3', {
                                  className:
                                    'text-xl text-sky-400 lg:text-2xl xl:text-2xl font-bold mb-2 text-white',
                                  children: o.title,
                                }),
                                E.jsx('p', {
                                  className:
                                    'text-gray-400 font-mono !text-white',
                                  children: o.date,
                                }),
                              ],
                            }),
                            t === o.id &&
                              E.jsx('div', {
                                className: 'mt-4 text-white ',
                                children: o.content,
                              }),
                          ],
                        },
                        o.id
                      )
                    ),
                  ],
                }),
              }),
            }),
          ],
        }),
        E.jsx(tp, {}),
      ],
    });
  },
  jO = E1.createRoot(document.getElementById('root'));
jO.render(
  E.jsx(iN, {
    children: E.jsxs(eN, {
      children: [
        E.jsx(wl, { path: '/', element: E.jsx($O, {}) }),
        E.jsx(wl, { path: '/contact', element: E.jsx(PO, {}) }),
        E.jsx(wl, { path: '/literature', element: E.jsx(zO, {}) }),
        E.jsx(wl, { path: '/blog', element: E.jsx(RO, {}) }),
      ],
    }),
  })
);
