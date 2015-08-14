(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":16}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":21}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":22}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":23}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":24}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":25}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":26}],12:[function(require,module,exports){
"use strict";

exports["default"] = Function.prototype.bind;
exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = function (obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":7}],14:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],15:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _isIterable = require("babel-runtime/core-js/is-iterable")["default"];

exports["default"] = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (_isIterable(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/is-iterable":3}],16:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":32,"../../modules/es6.array.from":79,"../../modules/es6.string.iterator":85}],17:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":77,"../modules/es6.string.iterator":85,"../modules/web.dom.iterable":87}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":78,"../modules/es6.string.iterator":85,"../modules/web.dom.iterable":87}],19:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":32,"../../modules/es6.object.assign":81}],20:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":55}],21:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":55}],22:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":55}],23:[function(require,module,exports){
require('../../modules/es6.object.statics-accept-primitives');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":32,"../../modules/es6.object.statics-accept-primitives":82}],24:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":32,"../modules/es6.object.to-string":83,"../modules/es6.promise":84,"../modules/es6.string.iterator":85,"../modules/web.dom.iterable":87}],25:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":32,"../../modules/es6.symbol":86}],26:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":75,"../../modules/es6.string.iterator":85,"../../modules/web.dom.iterable":87}],27:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],28:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":47}],29:[function(require,module,exports){
var toObject  = require('./$.to-object')
  , ES5Object = require('./$.es5-object')
  , enumKeys  = require('./$.enum-keys');
// 19.1.2.1 Object.assign(target, source, ...)
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = toObject(target, true)
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = ES5Object(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$.enum-keys":37,"./$.es5-object":38,"./$.to-object":72}],30:[function(require,module,exports){
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":31,"./$.wks":75}],31:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],32:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],33:[function(require,module,exports){
// Optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.a-function":27}],34:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$.core":32,"./$.global":41}],35:[function(require,module,exports){
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],36:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":41,"./$.is-object":47}],37:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , isEnum     = $.isEnum
    , getSymbols = $.getSymbols;
  if(getSymbols)for(var symbols = getSymbols(it), i = 0, key; symbols.length > i; ){
    if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":55}],38:[function(require,module,exports){
// fallback for not array-like ES3 strings
var cof     = require('./$.cof')
  , $Object = Object;
module.exports = 0 in $Object('z') ? $Object : function(it){
  return cof(it) == 'String' ? it.split('') : $Object(it);
};
},{"./$.cof":31}],39:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":28,"./$.ctx":33,"./$.is-array-iter":46,"./$.iter-call":49,"./$.to-length":71,"./core.get-iterator-method":76}],40:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString = {}.toString
  , toObject = require('./$.to-object')
  , getNames = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

function getWindowNames(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
}

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toObject(it));
};
},{"./$":55,"./$.to-object":72}],41:[function(require,module,exports){
var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
module.exports = global;
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],42:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],43:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":55,"./$.property-desc":59,"./$.support-desc":67}],44:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":41}],45:[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],46:[function(require,module,exports){
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return ('Array' in Iterators ? Iterators.Array : Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":54,"./$.wks":75}],47:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],48:[function(require,module,exports){
// Safari has buggy iterators w/o `next`
module.exports = 'keys' in [] && !('next' in [].keys());
},{}],49:[function(require,module,exports){
var anObject = require('./$.an-object');
function close(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)anObject(ret.call(iterator));
}
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch(e){
    close(iterator);
    throw e;
  }
};
},{"./$.an-object":28}],50:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":55,"./$.hide":43,"./$.property-desc":59,"./$.tag":68,"./$.wks":75}],51:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
function returnThis(){ return this; }
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  function createMethod(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * require('./$.iter-buggy'), NAME, methods);
  }
};
},{"./$":55,"./$.def":34,"./$.has":42,"./$.hide":43,"./$.iter-buggy":48,"./$.iter-create":50,"./$.iterators":54,"./$.library":57,"./$.redef":60,"./$.tag":68,"./$.wks":75}],52:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":75}],53:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],54:[function(require,module,exports){
module.exports = {};
},{}],55:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],56:[function(require,module,exports){
var $        = require('./$')
  , toObject = require('./$.to-object');
module.exports = function(object, el){
  var O      = toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":55,"./$.to-object":72}],57:[function(require,module,exports){
module.exports = true;
},{}],58:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":60}],59:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],60:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":43}],61:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],62:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
function check(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
}
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":55,"./$.an-object":28,"./$.ctx":33,"./$.is-object":47}],63:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":41}],64:[function(require,module,exports){
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":55,"./$.support-desc":67,"./$.wks":75}],65:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],66:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":35,"./$.to-integer":70}],67:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !!function(){
  try {
    return Object.defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
},{}],68:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":42,"./$.hide":43,"./$.wks":75}],69:[function(require,module,exports){
'use strict';
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id, '*');
    };
    global.addEventListener('message', listner, false);
  // WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":31,"./$.ctx":33,"./$.dom-create":36,"./$.global":41,"./$.html":44,"./$.invoke":45}],70:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],71:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":70}],72:[function(require,module,exports){
var ES5Object = require('./$.es5-object')
  , defined   = require('./$.defined');
module.exports = function(it, realString){
  return (realString ? Object : ES5Object)(defined(it));
};
},{"./$.defined":35,"./$.es5-object":38}],73:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],74:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],75:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":41,"./$.shared":63,"./$.uid":73}],76:[function(require,module,exports){
var global    = require('./$.global')
  , classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  var Symbol = global.Symbol;
  if(it != undefined){
    return it[Symbol && Symbol.iterator || '@@iterator']
      || it[ITERATOR]
      || Iterators[classof(it)];
  }
};
},{"./$.classof":30,"./$.core":32,"./$.global":41,"./$.iterators":54,"./$.wks":75}],77:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":28,"./$.core":32,"./core.get-iterator-method":76}],78:[function(require,module,exports){
var global    = require('./$.global')
  , has       = require('./$.has')
  , classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').isIterable = function(it){
  var O      = Object(it)
    , Symbol = global.Symbol;
  return (Symbol && Symbol.iterator || '@@iterator') in O
    || ITERATOR in O
    || has(Iterators, classof(O));
};
},{"./$.classof":30,"./$.core":32,"./$.global":41,"./$.has":42,"./$.iterators":54,"./$.wks":75}],79:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , $def        = require('./$.def')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike, true)
      , C       = typeof this == 'function' ? this : Array
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      for(result = new C(length = toLength(O.length)); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$.ctx":33,"./$.def":34,"./$.is-array-iter":46,"./$.iter-call":49,"./$.iter-detect":52,"./$.to-length":71,"./$.to-object":72,"./core.get-iterator-method":76}],80:[function(require,module,exports){
var setUnscope = require('./$.unscope')
  , step       = require('./$.iter-step')
  , Iterators  = require('./$.iterators')
  , toObject   = require('./$.to-object');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toObject(iterated); // target
  this._i = 0;                  // next index
  this._k = kind;               // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$.iter-define":51,"./$.iter-step":53,"./$.iterators":54,"./$.to-object":72,"./$.unscope":74}],81:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":29,"./$.def":34}],82:[function(require,module,exports){
var $        = require('./$')
  , core     = require('./$.core')
  , $def     = require('./$.def')
  , toObject = require('./$.to-object')
  , isObject = require('./$.is-object');
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = (core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(toObject(it, true));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : require('./$.get-names').get;
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":55,"./$.core":32,"./$.def":34,"./$.get-names":40,"./$.is-object":47,"./$.to-object":72}],83:[function(require,module,exports){

},{}],84:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $def       = require('./$.def')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same')
  , species    = require('./$.species')
  , SPECIES    = require('./$.wks')('species')
  , RECORD     = require('./$.uid')('record')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , asap       = process && process.nextTick || require('./$.task').set
  , P          = global[PROMISE]
  , Wrapper;

function testResolve(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
}

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.support-desc')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
function isPromise(it){
  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
}
function sameConstructor(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
}
function getConstructor(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
}
function isThenable(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
}
function notify(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  // strange IE + webpack dev server bug - use .call(global)
  asap.call(global, function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    function run(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    }
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      // strange IE + webpack dev server bug - use .call(global)
      asap.call(global, function(){
        if(isUnhandled(record.p)){
          if(isNode){
            process.emit('unhandledRejection', value, record.p);
          } else if(global.console && console.error){
            console.error('Unhandled promise rejection', value);
          }
        }
        record.a = undefined;
      });
    }, 1);
  });
}
function isUnhandled(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
}
function $reject(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
}
function $resolve(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      // strange IE + webpack dev server bug - use .call(global)
      asap.call(global, function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
}

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    this[RECORD] = record;
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = anObject(anObject(this).constructor)[SPECIES];
      var react = {
        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
        fail: typeof onRejected == 'function'  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = aFunction(res);
        react.rej = aFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
require('./$.tag')(P, PROMISE);
species(P);
species(Wrapper = require('./$.core')[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new this(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":55,"./$.a-function":27,"./$.an-object":28,"./$.classof":30,"./$.core":32,"./$.ctx":33,"./$.def":34,"./$.for-of":39,"./$.global":41,"./$.is-object":47,"./$.iter-detect":52,"./$.library":57,"./$.mix":58,"./$.same":61,"./$.set-proto":62,"./$.species":64,"./$.strict-new":65,"./$.support-desc":67,"./$.tag":68,"./$.task":69,"./$.uid":73,"./$.wks":75}],85:[function(require,module,exports){
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":51,"./$.string-at":66}],86:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , SUPPORT_DESC   = require('./$.support-desc')
  , $def           = require('./$.def')
  , $redef         = require('./$.redef')
  , shared         = require('./$.shared')
  , setTag         = require('./$.tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , anObject       = require('./$.an-object')
  , toObject       = require('./$.to-object')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , $create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
  try {
    return $create(setDesc({}, HIDDEN, {
      get: function(){
        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
      }
    }))[HIDDEN] || setDesc;
  } catch(e){
    return function(it, key, D){
      var protoDesc = getDesc(ObjectProto, key);
      if(protoDesc)delete ObjectProto[key];
      setDesc(it, key, D);
      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
    };
  }
}() : setDesc;

function wrap(tag){
  var sym = AllSymbols[tag] = $create($Symbol.prototype);
  sym._k = tag;
  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
}

function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = $create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
}
function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)defineProperty(it, key = keys[i++], P[key]);
  return it;
}
function create(it, P){
  return P === undefined ? $create(it) : defineProperties($create(it), P);
}
function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
}
function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
}
function getOwnPropertyNames(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
}
function getOwnPropertySymbols(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
}

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments[0]));
  };
  $redef($Symbol.prototype, 'toString', function(){
    return this._k;
  });

  $.create     = create;
  $.isEnum     = propertyIsEnumerable;
  $.getDesc    = getOwnPropertyDescriptor;
  $.setDesc    = defineProperty;
  $.setDescs   = defineProperties;
  $.getNames   = $names.get = getOwnPropertyNames;
  $.getSymbols = getOwnPropertySymbols;

  if(SUPPORT_DESC && !require('./$.library')){
    $redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag(global.JSON, 'JSON', true);
},{"./$":55,"./$.an-object":28,"./$.def":34,"./$.enum-keys":37,"./$.get-names":40,"./$.global":41,"./$.has":42,"./$.keyof":56,"./$.library":57,"./$.property-desc":59,"./$.redef":60,"./$.shared":63,"./$.support-desc":67,"./$.tag":68,"./$.to-object":72,"./$.uid":73,"./$.wks":75}],87:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":54,"./es6.array.iterator":80}],88:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  delete g.regeneratorRuntime;
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":89}],89:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(function () {
        return invoke(method, arg);
      }) : new _Promise(function (resolve) {
        resolve(invoke(method, arg));
      });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function (ignored) {});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":90,"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/promise":9,"babel-runtime/core-js/symbol":10,"babel-runtime/core-js/symbol/iterator":11}],90:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],91:[function(require,module,exports){
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.1.3';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

},{}],92:[function(require,module,exports){
(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})();

},{}],93:[function(require,module,exports){
"use strict";

},{}],94:[function(require,module,exports){
//        ___                     ___                 ___          ___
//       /  /\        ___        /  /\        ___    /  /\        /  /\
//      /  /::\      /__/\      /  /::\      /  /\  /  /::\      /  /::\
//     /  /:/\:\     \  \:\    /  /:/\:\    /  /:/ /  /:/\:\    /  /:/\:\
//    /  /:/~/::\     \  \:\  /  /:/~/::\  /  /:/ /  /:/~/::\  /  /:/~/:/
//   /__/:/ /:/\:\___  \__\:\/__/:/ /:/\:\/  /::\/__/:/ /:/\:\/__/:/ /:/___
//   \  \:\/:/__\/__/\ |  |:|\  \:\/:/__\/__/:/\:\  \:\/:/__\/\  \:\/:::::/
//    \  \::/    \  \:\|  |:| \  \::/    \__\/  \:\  \::/      \  \::/~~~~
//     \  \:\     \  \:\__|:|  \  \:\         \  \:\  \:\       \  \:\
//      \  \:\     \__\::::/    \  \:\         \__\/\  \:\       \  \:\
//       \__\/         ~~~~      \__\/               \__\/        \__\/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

require("whatwg-fetch");

//*
// The name of classes relevant to `Avatar`.
// @object

var classes = {
  //*
  // @property
  root: "avatar",

  //*
  // @property
  image: "avatar__image",

  //*
  // @property
  initials: "avatar__initials"
};

//*
// The name of states relevant to `Avatar`.
// @object

var states = {
  //*
  // @property
  image: {
    visible: classes.image + "--is-visible"
  }
};

//*
// The name of attributes relevant to `Avatar`.
// @object

var attrs = {
  //*
  // @property
  profile_name: "data-profile-name",

  //*
  // @property
  service: "data-service"
};

//*
// The minimum time, in milliseconds, before the background images for avatars
// should be faded into view. This is done to prevent any sudden visual changes
// immediately after page load.
//
// @value 200
// @type Number
// @private

var MIN_TIME_TO_LOAD = 200;

var Avatar, show_image;

//*
// Fades the image into view smoothly. To prevent sudden appearance of images
// immediately after page load, this function stores the time when it was
// initialized and waits at least `MIN_TIME_TO_LOAD` after that before applying
// the required classes.
//
// @private
// @param {DOMElement} image - The image to reveal.

show_image = (function () {
  var start = Date.now();

  return function (image) {
    setTimeout(function () {
      image.classList.add(states.image.visible);
    }, Math.max(0, MIN_TIME_TO_LOAD - (Date.now() - start)));
  };
})();

//*
// The constructor around an avatar DOM node. This constructor will check for
// the service from which the avatar image should be fetched and do its best to
// grab that image.
//
// Because there is no way to interact with an `Avatar`, there is no public
// interface for this component.
//
// @factory
//
// @param {DOMElement} node - The root of an Avatar component.

Avatar = function (node) {
  var profile_name = node.getAttribute(attrs.profile_name),
      image = node.querySelector("." + classes.image),
      service = node.getAttribute(attrs.service);

  switch (service) {
    case "github":
      fetch("https://api.github.com/users/" + profile_name).then(function (response) {
        return response.json();
      }).then(function (response) {
        image.style.backgroundImage = "url(" + response.avatar_url + ")";
        show_image(image);
      });
      break;

    case "twitter":
    case "email":
      image.style.backgroundImage = "url(http://avatars.io/" + service + "/" + profile_name + ")";
      show_image(image);
      break;
  }
};

//*
// Initializes the `Avatar` component.
//
// @method
// @static
//
// @requires builder::Builder
//
// @arg {HTMLElement} [context = document] - The context in which to search
// for DOM nodes that should be used as the root of an [`Avatar`](@link)
// component.

Avatar.init = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].initialize_once(Avatar, { name: classes.root });

exports.classes = classes;
exports.states = states;
exports.attrs = attrs;
exports["default"] = Avatar;

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"babel-runtime/helpers/interop-require-default":14,"whatwg-fetch":92}],95:[function(require,module,exports){
// See: http://updates.html5rocks.com/2015/04/cut-and-copy-commands

//        ___          ___        _____        ___
//       /  /\        /  /\      /  /::\      /  /\
//      /  /:/       /  /::\    /  /:/\:\    /  /:/_
//     /  /:/       /  /:/\:\  /  /:/  \:\  /  /:/ /\
//    /  /:/  ___  /  /:/  \:\/__/:/ \__\:|/  /:/ /:/_
//   /__/:/  /  /\/__/:/ \__\:\  \:\ /  /:/__/:/ /:/ /\
//   \  \:\ /  /:/\  \:\ /  /:/\  \:\  /:/\  \:\/:/ /:/
//    \  \:\  /:/  \  \:\  /:/  \  \:\/:/  \  \::/ /:/
//     \  \:\/:/    \  \:\/:/    \  \::/    \  \:\/:/
//      \  \::/      \  \::/      \__\/      \  \::/
//       \__\/        \__\/                   \__\/

"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scroll_container = require("../scroll_container");

var _scroll_container2 = _interopRequireDefault(_scroll_container);

var _utilitiesEvents = require("../../utilities/events");

var _utilitiesEvents2 = _interopRequireDefault(_utilitiesEvents);

var _utilitiesUi_events = require("../../utilities/ui_events");

var _utilitiesUi_events2 = _interopRequireDefault(_utilitiesUi_events);

var _utilitiesText_range = require("../../utilities/text_range");

var _utilitiesText_range2 = _interopRequireDefault(_utilitiesText_range);

var _utilitiesBuilder = require("../../utilities/builder");

var _utilitiesBuilder2 = _interopRequireDefault(_utilitiesBuilder);

var _iframe = require("../iframe");

var _select = require("../select");

var _utilitiesMarkup = require("../../utilities/markup");

var _utilitiesPainting = require("../../utilities/painting");

var classes = {
  root: "code-block",
  header: "code-block__header",
  code: "code-block__code",
  select: "code-block__demo-selector",
  code_container: "code-block__code-container",
  toggler: "code-block__toggler",
  content: "code-block__content",
  iframe: "code-block__iframe",
  demo_content: "code-block__demo__content"
};

var variants = {
  root: { with_demo: classes.root + "--with-demo" }
};

var states = {
  root: { hidden: classes.root + "--is-hidden" }
};

var attrs = {
  language: "data-code-block-language",
  cached_max_height: "data-cached-max-height"
};

var CodeBlock, CodeCaches, clean_and_highlight_code, update_helper, toggle_code_block_visibility, select_code, hide, show, cache_content_height, hook_up_iframe_communication, attach_event_listeners;

//*
// Cleans a string of code and updates the string with syntax highlighting
// markup.
//
// @param {String} code - The raw code.
//
// @param {Object} [options = {}] - The options for the highlighting operation.
//
// @param {String} [options.language_code = "html"]
// The language of the passed code. This is used by the syntax highlighter to
// pick the appropriate highlighter.
//
// @param {Boolean} [options.collapse_newlines = false]
// Whether or not to combine multiple consecutive newlines into a single newline.
//
// @private
// @returns String - The cleaned and syntax-highlighted string.

clean_and_highlight_code = function (code) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var language_code = options.language_code;

  code = (0, _utilitiesMarkup.clean)(code, options);
  if (!language_code || language_code === "html") {
    code = (0, _utilitiesMarkup.indent)(code);
  }
  return (0, _utilitiesMarkup.highlight)(code, options);
};

//*
// Updates helper code (that is, a template language that generates markup) for
// changes in classes that have corresponding attributes in the helper markup.
// It does this by searching through the helper markup for the symbol that sets
// a given class (the `setter`), and then assigns that a value depending on the
// nature of the change.
//
// - If there is no `constant` for the change, the value of the `setter` is
// assumed to be `true` if the class is active and `false` otherwise.
//
// - If there is a `constant`, this value is used when a class is added. The
// cache is required to store values for when a `setter` with a constant is
// removed — the value of the `setter` is then returned to the previous
// `constant`, which is stored in the cache.
//
// @param {String} code   - The raw code.
// @param {Object} change - The details about the class change. This should
//                          include whether the class was added or removed and
//                          all of the `setters` for the corresponding variation.
// @param {Object} cache  - The cache of previous constant values.
//
// @private
// @returns String - The helper code with the relevant attributes updated.

update_helper = function (code, change, cache) {
  var add, helper_param, constant, helper_matcher, regex, constants_for_param, index, replace_value, set_by, constant_replacer, boolean_replacer;

  add = !!change.add;

  constant_replacer = function (match, param_portion, constant_portion) {
    cache[helper_param] = cache[helper_param] || [constant_portion];

    if (change.method === "add") {
      cache[helper_param].push(constant);
      return "" + param_portion + constant;
    } else {
      constants_for_param = cache[helper_param];
      if (!constants_for_param) {
        return match;
      }

      index = constants_for_param.indexOf(constant);
      if (index >= 0) {
        constants_for_param.splice(index, 1);
      }

      replace_value = constants_for_param[constants_for_param.length - 1];
      return "" + param_portion + replace_value;
    }
  };

  boolean_replacer = function (match, param_portion) {
    return "" + param_portion + (add ? "true" : "false");
  };

  if (!change.set_by) {
    return code;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(change.set_by), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      set_by = _step.value;

      constant = set_by.constant || "";
      helper_param = set_by.setter;
      helper_matcher = ":?\"?" + helper_param.replace(":", "").replace("?", "\\?") + "\"?:?\\s*(?:=>\\s*)?";

      if (constant) {
        // If a value was actually declared for the set_by, find the current constant
        // and replace it as needed
        // key: VALUE, :key => VALUE, "key" => VALUE, :"key" => VALUE

        regex = new RegExp("(" + helper_matcher + ")([a-zA-Z\\-_:]*)");
        code = code.replace(regex, constant_replacer);
      } else {
        // No constant declared, assume it is true/ false
        regex = new RegExp("(" + helper_matcher + ")(true|false)");
        code = code.replace(regex, boolean_replacer);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return code;
};

//*
// Handles a click on the contained `button` that toggles the visibility of the
// code block.
//
// @private
// @param {Object} event - The `click` event on the select.

toggle_code_block_visibility = function (event) {
  var code_block = CodeBlock["for"](event.target);
  if (!code_block) {
    return;
  }
  code_block.toggle();
};

//*
// Handles a focus on the code area of a code block by selecting all of the
// text within the code block.
//
// @private
// @param {Object} event - The `focusin` event on the code.

select_code = function () {
  (0, _utilitiesText_range2["default"])(undefined).select_all();
};

$(document).on("click", "." + classes.toggler, toggle_code_block_visibility);
$(document).on("click", "." + classes.code, select_code);

//*
// Hides a code block.
//
// @param {Object} self - The internal details of a [`CodeBlock`](@link).
// @param {Object} options ({}) - The options for how the code block should be
// hidden. Currently, only the `without_transition` (which hides automatically
// rather than scaling the height of the code block) option is supported.
//
// @private

hide = function (self) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var node = self.node;
  var toggler = self.toggler;
  var content = self.content;
  var without_transition = options.without_transition;
  var scroll_container;

  _scroll_container2["default"].init();
  scroll_container = _scroll_container2["default"]["for"](node);
  if (scroll_container) {
    scroll_container.maintain_current_height();
  }

  node.classList.add(states.root.hidden);
  if (toggler) {
    toggler.querySelector("span").textContent = "Show";
  }

  content.style.transition = "none";

  if (!without_transition) {
    content.style.height = Math.min(content.scrollHeight, parseInt(content.getAttribute(attrs.cached_max_height), 10)) + "px";
    (0, _utilitiesPainting.force_repaint)(content);
    content.style.transition = null;
  }

  (0, _utilitiesPainting.force_repaint)(content);
  content.style.height = "0px";

  if (without_transition) {
    (0, _utilitiesPainting.force_repaint)(content);
    content.style.transition = null;
  }

  self.is_hidden = true;
};

//*
// Shows a code block.
//
// @param {Object} self - The internal details of a [`CodeBlock`](@link).
//
// @private

show = function callee$0$0(self) {
  var node, toggler, content;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        node = self.node;
        toggler = self.toggler;
        content = self.content;

        node.classList.remove(states.root.hidden);
        self.is_hidden = false;
        if (toggler) {
          toggler.querySelector("span").textContent = "Hide";
        }

        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(_utilitiesUi_events2["default"].transition(content, function () {
          content.style.height = Math.min(content.scrollHeight, parseInt(content.getAttribute(attrs.cached_max_height), 10)) + "px";
        }));

      case 8:

        content.style.height = null;

      case 9:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

//*
// Caches the max height of the main content area of a code block. This is done
// so that the transition from hidden to shown caps out at the `max-height`
// specified in CSS.
//
// In order to allow the code areas to scroll, an appropriate max-height is also
// set on them.
//
// @param {Object} self - The internal details of a [`CodeBlock`](@link).
//
// @private

cache_content_height = function (self) {
  var node = self.node;
  var content = self.content;
  var max_height;var header;var header_height;var max_code_height;var code_container;

  max_height = parseInt(window.getComputedStyle(content).maxHeight, 10);

  content.setAttribute(attrs.cached_max_height, max_height);

  header = node.querySelector("." + classes.header);
  header_height = header ? header.offsetHeight : 0;
  max_code_height = max_height - header_height + "px";

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _getIterator(_Array$from(node.querySelectorAll("." + classes.code_container))), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      code_container = _step2.value;

      code_container.style.maxHeight = max_code_height;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

//*
// Does all of the necessary work to manage the two-way communication between
// a code block connected to an `iframe` and that `iframe`. This includes
// listening for changes to markup of the associated demo and triggering an
// intial markup request to get the most up-to-date representation possible.
//
// @param {Object} self - The internal details of a [`CodeBlock`](@link).
//
// @private

hook_up_iframe_communication = function (self) {
  var communicator = (0, _iframe.Communicator)(),
      registered = communicator.register.from_node(self.node),
      handle_markup_change,
      handle_class_change;

  if (!registered) {
    return false;
  }

  handle_markup_change = function (event) {
    if (!event.html || !self.code_caches.markup) {
      return;
    }
    self.code_caches.markup.code = event.html;
  };

  handle_class_change = function (event) {
    if (!self.code_caches.helper) {
      return;
    }
    if (event.details.add === undefined) {
      event.details.add = event.add;
    }
    self.code_caches.helper.update(event.details);
  };

  communicator.on(_utilitiesEvents2["default"].types.markup_request, handle_markup_change);
  communicator.on(_utilitiesEvents2["default"].types.markup_change, handle_markup_change);
  communicator.on(_utilitiesEvents2["default"].types.class_change, handle_class_change);

  communicator.trigger(_utilitiesEvents2["default"].types.markup_request);
  return communicator;
};

attach_event_listeners = function (self) {
  var select = self.node.querySelector("." + _select.classes.root);

  if (select && self.communicator) {
    select.addEventListener("change", function (event) {
      self.communicator.trigger(_utilitiesEvents2["default"].types.markup_request, {
        demo: event.target.value
      });
    });
  }
};

//*
// An API for cacheing, updating, and highlighting code within a code block.
//
// @param {HTMLElement} node - The main code block.
//
// @private
// @factory

CodeCaches = (function () {
  var languages = {
    markup: ["html"],
    helper: ["erb", "haml", "slim"]
  };

  var CodeCache;

  CodeCache = function (node) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var language = node.getAttribute(attrs.language) || "html",
        dom_code = node.querySelector("code"),
        code = dom_code.innerHTML,
        helper_cache = null,
        code_cache;

    code_cache = _Object$defineProperties({
      language: language,
      highlight: function highlight() {
        this.code = code;
      }
    }, {
      code: {
        get: function get() {
          return code;
        },
        set: function set(new_code) {
          code = new_code;
          dom_code.innerHTML = clean_and_highlight_code(new_code, {
            language_code: language,
            collapse_newlines: options.generated_from_helper
          });
        },
        configurable: true,
        enumerable: true
      }
    });

    code_cache.highlight();

    if (languages.helper.includes(language)) {
      helper_cache = {};

      Object.defineProperty(code_cache, "update", {
        value: function value(change) {
          this.code = update_helper(this.code, change, helper_cache);
        }
      });
    }

    return code_cache;
  };

  return function (node) {
    var code_nodes, code_caches, api, index;

    code_nodes = _Array$from(node.querySelectorAll("." + classes.code));
    code_caches = code_nodes.map(function (code_node) {
      return CodeCache(code_node, { generated_from_helper: code_nodes.length > 1 });
    });

    api = _Object$defineProperties({

      length: code_caches.length
    }, {
      markup: {
        get: function get() {
          return code_caches.filter(function (code_cache) {
            return languages.markup.includes(code_cache.language);
          })[0];
        },
        configurable: true,
        enumerable: true
      },
      helper: {
        get: function get() {
          return code_caches.filter(function (code_cache) {
            return languages.helper.includes(code_cache.language);
          })[0];
        },
        configurable: true,
        enumerable: true
      }
    });

    for (index = 0; index < code_caches.length; index++) {
      _Object$defineProperty(api, index, { value: code_caches[index] });
    }

    return api;
  };
})();

//*
// The constructor around a code block.
//
// @factory
// @public
//
// @param {HTMLElement} node - The node with the `code-block` root class.

CodeBlock = function (node) {
  var self, api, toggle;

  self = {
    node: node,
    is_hidden: node.classList.contains(states.root.hidden),
    toggler: node.querySelector("." + classes.toggler),
    content: node.querySelector("." + classes.content),
    code_caches: CodeCaches(node)
  };

  self.communicator = hook_up_iframe_communication(self);

  attach_event_listeners(self);

  if (self.is_hidden) {
    hide(self, { without_transition: true });
  }
  if (self.toggler) {
    cache_content_height(self);
  }

  //*
  // Toggles the code block.
  //
  // @method

  toggle = function () {
    return self.is_hidden ? show(self) : hide(self);
  };
  api = { toggle: toggle };

  return api;
};

CodeBlock.init = _utilitiesBuilder2["default"].initialize_once(CodeBlock, { name: classes.root, cache: true });

exports.classes = classes;
exports.states = states;
exports.variants = variants;
exports.attrs = attrs;
exports["default"] = CodeBlock;

},{"../../utilities/builder":115,"../../utilities/events":118,"../../utilities/markup":120,"../../utilities/painting":123,"../../utilities/text_range":127,"../../utilities/ui_events":128,"../iframe":99,"../scroll_container":105,"../select":106,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/define-properties":6,"babel-runtime/core-js/object/define-property":7,"babel-runtime/helpers/interop-require-default":14,"babel-runtime/regenerator":88}],96:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilitiesEvents = require("../../utilities/events");

var _utilitiesEvents2 = _interopRequireDefault(_utilitiesEvents);

var _utilitiesUi_events = require("../../utilities/ui_events");

var _utilitiesUi_events2 = _interopRequireDefault(_utilitiesUi_events);

var _iframe = require("../iframe");

//*
// The name of classes relevant to `Demo`.
// @object

var classes = {
  root: "demo",
  section: "demo__section",
  content: "content"
};

var Demo, create_self, set_correct_background_color, allocate_minimum_height;

//*
// The delay after a change in markup to keep track of height changes and
// communicate them to the attached [`Iframe`](@link).
//
// @type Number
// @value 1000

var HEIGHT_CHANGE_WATCH_DURATION = 1000;

//*
// Updates the background color of the parent for the demo to match the
// background color of the last section. This is necessary because, during the
// transition from a larger size to a smaller size, not doing this would show
// white below all of the demo sections regardless of their color.
//
// @private
// @param {HTMLElement} node - The base `Demo` node.

set_correct_background_color = function (node) {
  var parent = node.parentNode,
      sections = node.querySelectorAll("." + classes.section),
      last_section = sections[sections.length - 1];

  parent.style.backgroundColor = window.getComputedStyle(last_section).backgroundColor;
};

//*
// Spreads the minimum height of the total demo between the sections that are
// present. This is important because the resizable demo will show the full
// minimum width, so if there are colored sections that don't completely fill
// the minimum width, there will be an awkward white patch below the sections.
//
// @private
// @param {HTMLElement} node - The base `Demo` node.

allocate_minimum_height = function (node) {
  var min_height = parseInt(window.getComputedStyle(node).minHeight, 10),
      demo_sections = node.querySelectorAll("." + classes.section),
      demo_section;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(demo_sections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      demo_section = _step.value;

      demo_section.style.minHeight = min_height / demo_sections.length + "px";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

//*
// Caches all of the internal details for an [`Demo`](@link).
//
// @private
// @param {HTMLElement} node - The node backing the `Demo`.
// @returns Object - The private, internal details of the `Demo`.

create_self = function (node) {
  return {
    markup_source: document.querySelector("." + classes.content),
    demo_handlers: window.parent.demo_handlers || {},
    parent: node.parentNode,
    height: 0,
    actions: {},
    context: {
      body: document.body,
      document: document
    }
  };
};

//*
// The constructor for a new `Demo`. This will sign the demo up for all the
// required events and will do the required initialization work.
//
// @param {HTMLElement} node - The base `Demo` node.
//
// @factory

Demo = function (node) {
  var self = create_self(node),
      communicator = (0, _iframe.Communicator)(),
      send_markup,
      height_update,
      apply_class_change;

  //*
  // Sends the markup for the current "main" section.
  //
  // @param {Object} [event = {}] - The (optional) event that specifies the demo
  // to send markup for.
  //
  // @method
  // @private

  send_markup = function () {
    var event = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (event.demo) {
      self.markup_source = document.querySelector("#" + classes.section + "--" + event.demo + " ." + classes.content);
    }

    communicator.trigger(_utilitiesEvents2["default"].types.markup_request, {
      html: self.markup_source.innerHTML
    });
  };

  //*
  // Sends the height for the demo as a whole, and sets that height on the
  // demo's container. The height is set on the container after a delay to
  // ensure that there is no patch of unstyled background color underneath a
  // demo that is shrinking.
  //
  // @method
  // @private

  height_update = function () {
    var new_height = node.offsetHeight;
    if (new_height === self.height) {
      return;
    }

    self.height = new_height;
    setTimeout(function () {
      self.parent.style.minHeight = new_height + "px";
    }, HEIGHT_CHANGE_WATCH_DURATION);

    communicator.trigger(_utilitiesEvents2["default"].types.height_change, { height: new_height });
  };

  //*
  // Applies a class change to the demo. This class change will avoid adding
  // classes to components that have a class procluded from the new class, will
  // filter to the passed filter, and will perform the optional JavaScript
  // action instead of a simple class addition/ removal. If appropriate, the
  // component will then return the class change event, send a markup change
  // event, and send a height update event.
  //
  // @param {Object} event - The class change event.
  // @private
  //

  apply_class_change = function (event) {
    var details = event.details,
        markup_change_in_source = false,
        minimum_one_class_change = false,
        matches = node.querySelectorAll("." + classes.content + " ." + details["for"]),
        bail_early,
        class_list,
        action,
        match,
        preclude;

    if (details.filter_to) {
      // Check on matches
      matches = matches.filter(function (a_match) {
        return a_match.matches(details.filter_to);
      });
    }

    // Some height changes may occur over time. Watch for transitions
    // and send height again on each transitionend event
    //
    // TODO: integrate better iframe resizing
    // see: https://github.com/davidjbradshaw/iframe-resizer/tree/master/test

    document.addEventListener(_utilitiesUi_events2["default"].transition_end, height_update);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(matches), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        match = _step2.value;

        bail_early = false;
        class_list = match.classList;
        action = null;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _getIterator(details.preclude), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            preclude = _step3.value;

            if (class_list.contains(preclude)) {
              bail_early = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (bail_early) {
          continue;
        }

        minimum_one_class_change = true;

        action = details.javascript_action;
        if (action) {
          if (!event.add) {
            action = action.replace(/addClass/g, "removeClass").replace(/classList\.add/g, "classList.remove").replace(/(true|false)/, { "true": "false", "false": "true" });
          }

          eval(action);
        } else {
          class_list[event.add ? "add" : "remove"](details.name);
        }

        // Only update markup in source when the markup source is above in the
        // DOM tree.
        markup_change_in_source = markup_change_in_source || $(match).closest(self.markup_source).length > 0;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (markup_change_in_source) {
      send_markup();
    }

    if (minimum_one_class_change) {
      // Pass along the class change event
      communicator.trigger(event.type, event);
      height_update();
    }

    setTimeout(function () {
      document.removeEventListener(_utilitiesUi_events2["default"].transition_end, height_update);
    }, HEIGHT_CHANGE_WATCH_DURATION);
  };

  communicator.register.from_node(node);
  communicator.on(_utilitiesEvents2["default"].types.height_request, height_update);
  communicator.on(_utilitiesEvents2["default"].types.markup_request, send_markup);
  communicator.on(_utilitiesEvents2["default"].types.class_change, apply_class_change);

  window.addEventListener("resize", height_update);
  setInterval(height_update, HEIGHT_CHANGE_WATCH_DURATION);

  height_update();
  allocate_minimum_height(node);
  set_correct_background_color(node);

  return {};
};

//*
// Initializes the `Demo` component.
//
// @method
// @static
//
// @param {HTMLElement} [context = document] - The context in which to search
// for DOM nodes that should be used as the root of an `Demo` component.

Demo.init = function () {
  var context = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

  var demo,
      demos = _Array$from(context.querySelectorAll("." + classes.root));
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _getIterator(demos), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      demo = _step4.value;
      Demo(demo);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
};

exports["default"] = Demo;
module.exports = exports["default"];

},{"../../utilities/events":118,"../../utilities/ui_events":128,"../iframe":99,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":14}],97:[function(require,module,exports){
//        ___          ___         ___                   ___        _____        ___        _____
//       /  /\        /__/|       /  /\                 /  /\      /  /::\      /  /\      /  /::\
//      /  /:/_      |  |:|      /  /::\               /  /::\    /  /:/\:\    /  /:/_    /  /:/\:\
//     /  /:/ /\     |  |:|     /  /:/\:\___     ___  /  /:/\:\  /  /:/  \:\  /  /:/ /\  /  /:/  \:\
//    /  /:/ /:/_  __|__|:|    /  /:/~/:/__/\   /  /\/  /:/  \:\/__/:/ \__\:|/  /:/ /:/_/__/:/ \__\:|
//   /__/:/ /:/ /\/__/::::\___/__/:/ /:/\  \:\ /  /:/__/:/ \__\:\  \:\ /  /:/__/:/ /:/ /\  \:\ /  /:/
//   \  \:\/:/ /:/   ~\~~\::::|  \:\/:/  \  \:\  /:/\  \:\ /  /:/\  \:\  /:/\  \:\/:/ /:/\  \:\  /:/
//    \  \::/ /:/     |~~|:|~~ \  \::/    \  \:\/:/  \  \:\  /:/  \  \:\/:/  \  \::/ /:/  \  \:\/:/
//     \  \:\/:/      |  |:|    \  \:\     \  \::/    \  \:\/:/    \  \::/    \  \:\/:/    \  \::/
//      \  \::/       |  |:|     \  \:\     \__\/      \  \::/      \__\/      \  \::/      \__\/
//       \__\/        |__|/       \__\/                 \__\/                   \__\/

"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilitiesUi_events = require("../../utilities/ui_events");

var _utilitiesUi_events2 = _interopRequireDefault(_utilitiesUi_events);

var _utilitiesClient = require("../../utilities/client");

var _utilitiesClient2 = _interopRequireDefault(_utilitiesClient);

var _utilitiesBuilder = require("../../utilities/builder");

var _utilitiesBuilder2 = _interopRequireDefault(_utilitiesBuilder);

var _utilitiesNumbers = require("../../utilities/numbers");

var _utilitiesPainting = require("../../utilities/painting");

var classes = {
  root: "exploded",
  structure: "exploded__structure",
  content: "exploded__structure__content",
  source: "exploded__source",
  pane: "exploded__pane"
};

var states = {
  root: {
    initialized: classes.root + "--is-being-initialized"
  },

  pane: {
    hovered: classes.pane + "--is-hovered",
    selected: classes.pane + "--is-selected"
  }
};

var attrs = {
  id: "data-explosion-id",
  node: "data-explosion-node",
  range_attr: "data-explosion-attribute"
};

var events = {
  pane_selected: classes.root + ":pane-selected"
};

var LAYER_GAP = 40;

var clone, initialize_panes, initialize_ranges, reset, start_dragging, rotate_by, update_panes, node_for_pane, main_class_for_node, Exploded;

//*
// Initializes the panes for an explosion. This does all of the required
// cloning, stores the resulting panes on the secrets object, and performs an
// initial rotation.
//
// @param {Object} self - The internal details of an `Exploded`.
// @private

initialize_panes = function callee$0$0(self) {
  var source, structure;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        source = self.source;
        structure = self.structure;

        if (!(source.children[0].children.length < 1)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("return");

      case 4:

        reset(self);

        self.panes = clone(source.children[0], structure.children[0]);
        self.spread = 1;

        setTimeout(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(_utilitiesUi_events2["default"].transition(self.node, function () {
                  self.node.classList.add(states.root.initialized);
                  rotate_by(20, 5, self);
                }));

              case 2:

                self.node.classList.remove(states.root.initialized);

              case 3:
              case "end":
                return context$2$0.stop();
            }
          }, null, this);
        }, 400);

      case 8:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

//*
// Initializes the ranges within an `Exploded` to perform their action. This
// function also contains the definitions of the possible actions for a range,
// the `attrs.range_attr` value that will give that behavior to a range, and
// the actual event handlers for when the range changes values.
//
// @param {Object} self - The internal details of an `Exploded`.
// @private

initialize_ranges = (function () {
  var _ranges, _handlers;

  var actions, ranges, percentage_from_center, handlers, create_range_listener;

  actions = {
    gap: "pane-gap",
    perspective: "perspective"
  };

  ranges = (_ranges = {}, _defineProperty(_ranges, actions.gap, { min: 0.25, max: 2, "default": 1 }), _defineProperty(_ranges, actions.perspective, { min: 500, max: 4000, "default": 2000 }), _ranges);

  //*
  // Calculates the difference a value from 0-100 is from 50, then normalizes that
  // value for how close it is to the center. So, values close to 50 will be close,
  // to 0, while 0 and 100 will be -1 and 1, respectively.
  //
  // @param {Number} value - The number on a scale of 0-100.
  // @private
  // @returns Number

  percentage_from_center = function (value) {
    return (parseInt(value, 10) / 100 - 0.5) / 0.5;
  };

  handlers = (_handlers = {}, _defineProperty(_handlers, actions.gap, function (self, event) {
    var range = ranges[actions.gap],
        spread_from_center = percentage_from_center(event.target.value);

    if (spread_from_center < 0) {
      self.spread = range["default"] + spread_from_center * (range["default"] - range.min);
    } else {
      self.spread = range["default"] + spread_from_center * (range.max - range["default"]);
    }

    update_panes(self);
  }), _defineProperty(_handlers, actions.perspective, function (self, event) {
    var range = ranges[actions.perspective],
        spread_from_center = percentage_from_center(event.target.value),
        perspective;

    if (spread_from_center > 0) {
      perspective = range["default"] - spread_from_center * (range["default"] - range.min);
    } else {
      perspective = range["default"] - spread_from_center * (range.max - range["default"]);
    }

    self.structure.style.perspective = perspective + "px";
  }), _handlers);

  create_range_listener = function (action) {
    return function (event) {
      handlers[action](self, event);
    };
  };

  return function (self) {
    var range_node;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(_Object$keys(actions)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _name = _step.value;

        var action = actions[_name];
        range_node = self.node.querySelector("[" + attrs.range_attr + "=\"" + action + "\"]");

        if (!range_node) {
          continue;
        }
        range_node.addEventListener("input", create_range_listener(action));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
})();

//*
// Resets the internal state of an `Exploded`.
//
// @param {Object} self - The internal details of an `Exploded`.
// @private

reset = function (self) {
  self.rotation = { x: 0, y: 0, z: 0 };
  self.source.style.display = null;
  self.structure.children[0].innerHTML = "";
};

//*
// Creates the clone representations of the content of `from` into the container
// `to`. This is done by determining the position of each descendant of `from`
// relative to the `from` container itself, and then absolutely positioning an
// `exploded__pane` at the same relative position in `to`. In order to present
// a useful diagram, the DOM level of each node is captured and is used to stack
// the panes in the z-axis. Additionally, any overlap between siblings should
// be recorded and resolved by adding a small adjustment to the z-index
// stacking of those panes.
//
// @param {HTMLElement} from - The node containing the source DOM tree.
// @param {HTMLElement} to   - The node in which to create the cloned presentation.
//
// @private
//
// @returns Array
// An array of objects representing the cloned panes. Each object has a `node`,
// `level`, and `adjustment` property so that future translations can be done
// performantly.

clone = (function () {
  var explosion_id = 0,
      destination,
      pane_count,
      widths,
      clone_level,
      original_offset,
      panes,
      prepare_for_cloning,
      append_clone,
      append_all_clones,
      clone_node,
      find_overlaps,
      stack_siblings;

  //*
  // Resets the internal information used to perform explosions.
  //
  // @private

  prepare_for_cloning = function () {
    explosion_id += 1;
    pane_count = 0;
    clone_level = 0;
    panes = [];
    destination = null;
    original_offset = null;

    widths = {
      min: Infinity,
      max: 0
    };
  };

  //*
  // Appends a new pane with the provided dimensions to the `to` node.
  //
  // @param {Object} dims - The dimensions of the cloned node. Should have
  //                        `width`, `height`, `left`, `top`, `level`, and
  //                        `adjustment` properties.
  // @param {HTMLElement} to - The node in which to append the new pane.
  //
  // @private
  // @returns HTMLElement - The cloned node.

  append_clone = function (dims, to) {
    var parent_width = destination.offsetWidth,
        parent_height = destination.offsetHeight,
        node = $("<div class='" + classes.pane + "' style='height: " + dims.height + "px; width: " + dims.width + "px; top: " + dims.top + "px; left: " + dims.left + "px; transform-origin: " + (parent_width / 2 - dims.left) + "px " + (parent_height / 2 - dims.top) + "px " + LAYER_GAP + "px;' />")[0];

    to.appendChild(node);
    return node;
  };

  //*
  // Appends all of the required panes to the `to` node passed to
  // [`clone`](@link).
  //
  // @private

  append_all_clones = function () {
    var fragment = document.createDocumentFragment(),
        pane;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(panes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        pane = _step2.value;

        pane.clone = append_clone(pane, fragment);
        pane.clone.setAttribute(attrs.node, pane.id);
        pane.clone.style.zIndex = LAYER_GAP * pane.level + (pane.adjustment || 0);
        pane.node.setAttribute(attrs.id, pane.id);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    destination.appendChild(fragment);
  };

  //*
  // Generates the details required to clone a node as a pane. These include
  // its dimensions, its ID, the node it is cloning, its level, and whether or
  // not it is actually visible. These are added to the closured `panes` array
  // so that they can be easily accessed by other methods.
  //
  // @param {HTMLElement} node - The source node to clone.
  // @private

  clone_node = function (node) {
    var node_offsets = node.getBoundingClientRect(),
        pane,
        child;

    original_offset = original_offset || node.parentNode.getBoundingClientRect();
    pane_count += 1;

    // If we have a visible node
    if (node_offsets.height + node_offsets.width > 2) {
      pane = {
        height: node_offsets.height,
        width: node_offsets.width,
        top: node_offsets.top - original_offset.top,
        left: node_offsets.left - original_offset.left,
        level: clone_level,
        node: node,
        id: explosion_id + "-" + pane_count
      };

      panes.push(pane);

      widths.min = Math.min(pane.left, widths.min);
      widths.max = Math.max(pane.left + pane.width, widths.max);
    }

    clone_level += 1;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _getIterator(_Array$from(node.children)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        child = _step3.value;
        clone_node(child);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    clone_level -= 1;
  };

  //*
  // Finds pairs of nodes whose dimensions overlap one another.
  //
  // @param {Array} siblings - The set of nodes to check for overlap.
  // @private
  // @returns Array - An array of arrays that each contain a set of two
  // overlapping nodes.

  find_overlaps = function (siblings) {
    var overlaps = [],
        sibling_count = siblings.length,
        index,
        sibling,
        other_index,
        other,
        within_other,
        other_within,
        custom_between;

    custom_between = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _utilitiesNumbers.between.apply(undefined, args.concat([{ include_min: true }]));
    };

    for (index = 0; index < sibling_count; index++) {
      sibling = siblings[index];

      for (other_index = index + 1; other_index < sibling_count; other_index++) {
        other = siblings[other_index];

        other_within = custom_between(other.left, sibling.left, sibling.left + sibling.width) && custom_between(other.top, sibling.top, sibling.top + sibling.height);

        within_other = custom_between(sibling.left, other.left, other.left + other.width) && custom_between(sibling.top, other.top, other.top + other.height);

        if (other_within || within_other) {
          overlaps.push([sibling, other]);
        }
      }
    }

    return overlaps;
  };

  //*
  // Creates the necessary adjustments to provide z-space between siblings that
  // would otherwise overlap one another (that is, on the same level with some
  // overlapping coordinates). These adjustments are added directly to the
  // objects in the closured `panes` array.
  //
  // @private

  stack_siblings = function () {
    var levels = [],
        overlaps,
        pane,
        level,
        overlap;

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = _getIterator(panes), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        pane = _step4.value;

        levels[pane.level] = levels[pane.level] || [];
        levels[pane.level].push(pane);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = _getIterator(levels), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        level = _step5.value;

        overlaps = find_overlaps(level);

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = _getIterator(overlaps), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            overlap = _step6.value;

            overlap[0].adjustment = -LAYER_GAP / 8;
            overlap[1].adjustment = LAYER_GAP / 8;
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  };

  return function (from, to) {
    var clone_results = [],
        child,
        pane;

    prepare_for_cloning();
    destination = to;

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = _getIterator(_Array$from(from.children)), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        child = _step7.value;
        clone_node(child);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    stack_siblings();
    append_all_clones();

    to.style.maxWidth = widths.max - widths.min + "px";
    to.style.height = from.offsetHeight + "px";
    from.parentNode.style.display = "none";

    for (pane in panes) {
      clone_results.push({
        node: pane.clone,
        level: pane.level,
        adjustment: pane.adjustment || 0
      });
    }

    return clone_results;
  };
})();

//*
// Attaches the events required to handle touches and clicks on the exploded
// structure. If the click ends before the user drags the `DRAG_THRESHOLD`
// distance, the action will be treated as a click and the pane on which the
// user clicked will be selected. If the user drags more than the threshold,
// the entire structure will be rotated according to the distance dragged.
//
// @param {Object} self - The internal details of an `Exploded`.
// @param {Object} event - The initial `mousedown`/ `touchdown` event.
//
// @private
// @returns Object - The listener object with a `remove` method that allows the
//                   drag to be cleanly cancelled.

start_dragging = function (self, start_event) {
  var old_coordinates = _utilitiesUi_events2["default"].coordinates(start_event),
      drag_threshold_met = false,
      drag,
      drag_end;

  start_event.preventDefault();

  drag = function (event) {
    var new_coordinates = _utilitiesUi_events2["default"].coordinates(event);
    event.preventDefault();

    if (drag_threshold_met) {
      document.body.style.pointerEvents = "none";
      rotate_by((new_coordinates.x - old_coordinates.x) / 2, (new_coordinates.y - old_coordinates.y) / 2, self);
    } else {
      drag_threshold_met = _utilitiesUi_events2["default"].coordinates.distance_between(old_coordinates, new_coordinates) > _utilitiesUi_events2["default"].DRAG_THRESHOLD;
    }
  };

  drag_end = function (event) {
    if (!drag_threshold_met && event.target.classList.contains(classes.pane)) {
      self.select_pane(event.target);
    }

    // TODO: Maybe move to helper?
    document.body.style.pointerEvents = null;
  };

  return _utilitiesUi_events2["default"].add_drag_listeners(drag, drag_end);
};

//*
// Rotates the panes of an `Exploded` by the passed x and y degrees.
//
// @param {Number} x - The degrees in the x-axis to rotate the panes.
// @param {Number} y - The degrees in the x-axis to rotate the panes. Note that
//                     this will be reversed so that the rotation feels natural.
// @param {Object} self - The internal details of an `Exploded`.
//
// @private

rotate_by = function (x, y, self) {
  self.rotation.x = Math.max(Math.min(90, (self.rotation.x + x) % 360), -90);
  self.rotation.y = Math.max(Math.min(90, (self.rotation.y + y) % 360), -90);
  update_panes(self);
};

//*
// Applies the current rotation to all panes within an `Exploded`. It will also
// make sure that the z-translation of each pane is correct given its level in
// the original source tree and its stacking order against its siblings.
//
// @param {Object} self - The internal details of an `Exploded`.
// @private

update_panes = function (self) {
  var _self$rotation = self.rotation;
  var x = _self$rotation.x;
  var y = _self$rotation.y;
  var identity_matrix = (0, _utilitiesNumbers.Matrix)();
  var rotation_matrix = identity_matrix.rotate(-y, x, 0);
  var updates = [];
  var transform = _utilitiesClient2["default"].name_for("transform");
  var z_translate;var pane;var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {

    for (var _iterator8 = _getIterator(self.panes), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      pane = _step8.value;

      if (!pane.node) {
        continue;
      }

      z_translate = (pane.level * LAYER_GAP + pane.adjustment) * self.spread;
      updates.push({
        node: pane.node,
        transform: rotation_matrix.translate(0, 0, z_translate).toString()
      });
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  requestAnimationFrame(function () {
    var update;

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = _getIterator(updates), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        update = _step9.value;

        update.node.style[transform] = update.transform;
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
          _iterator9["return"]();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  });
};

//*
// Returns the original node (from the source content) that corresponds to the
// passed pane.
//
// @param {HTMLElement} pane - The exploded pane for which a corresponding source
//                            node should be found.
// @private
// @returns {HTMLElement | undefined} - The corresponding node or, if none exists,
//                                      undefined.

node_for_pane = function (pane) {
  var node_id = pane.getAttribute(attrs.node);
  if (!node_id) {
    throw new Error("The passed node must have an \"" + attrs.node + "\" attribute.");
  }
  return document.querySelector("[" + attrs.id + "='" + node_id + "']");
};

// TODO: get this out of here.

//*
// Gets the main class name for a given node.
//
// @param {HTMLElement} node - The node to retrieve the main class name for.
//
// @private
// @returns String

main_class_for_node = function (node) {
  return node.getAttribute("class").split(" ")[0];
};

//*
// The constructor around an explosion.
//
// @factory
//
// @param {HTMLElement} node - The base explosion node.
//
// @returns Object - The API for manipulating this explosion, including methods
//                   to update the markup to demonstrate, selecting particular
//                   panes or all panes for particular components, and adding
//                   callbacks to pane selection.

Exploded = function (node) {
  var self, api, set_markup, select_pane, select_component, on;

  self = {
    node: node,
    // TODO: write a simpler method for finding all occurances of a class
    structure: node.querySelector("." + classes.structure),
    source: node.querySelector("." + classes.source)
  };

  //*
  // Clears the existing explosion and re-initalizes the component with the new
  // markup.
  //
  // @method
  //
  // @param {String} markup - The new markup to demonstrate.

  set_markup = function (markup) {
    self.source.children[0].innerHTML = markup;
    (0, _utilitiesPainting.force_repaint)(node);
    initialize_panes(self);
  };

  //*
  // Selects a given pane and emits the selected event. This event can be
  // picked up by other components so that they can display useful information
  // related to this pane. See [`on_pane_select`](@link Exploded#on_pane_select) for details
  // on attaching listeners to pane selection.
  //
  // @method
  //
  // @param {HTMLElement} pane - The selected pane.

  select_pane = function (pane) {
    var panes = Array.isArray(pane) ? pane : [pane],
        event,
        related_node;

    requestAnimationFrame(function () {
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = _getIterator(self.panes), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          pane = _step10.value;
          pane.node.classList.remove(states.pane.selected);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = _getIterator(panes), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          pane = _step11.value;
          pane.classList.add(states.pane.selected);
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }
    });

    if (!panes.length) {
      return;
    }
    pane = panes[0];
    related_node = node_for_pane(pane);

    // The event provides the selected pane, the related (source) node, and
    // the class of the node for easy component identification.
    // TODO: clean this up, kill $
    event = $.Event(events.pane_selected, {
      node: related_node,
      pane: pane,
      component: main_class_for_node(related_node)
    });

    $(node).trigger(event);
  };

  //*
  // Selects the pane that corresponds to the provided component.
  //
  // @method
  //
  // @param {String} component - The class name of the component to select.

  select_component = function (component) {
    var panes = [],
        components = self.source.querySelectorAll("." + component),
        explosion_id,
        pane,
        event;

    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = _getIterator(components), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        component = _step12.value;

        explosion_id = component.getAttribute(attrs.id);
        pane = node.querySelector("[" + attrs.node + "=\"" + explosion_id + "\"]");
        if (pane) {
          panes.push(pane);
        }
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
          _iterator12["return"]();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }

    select_pane(panes);

    // Event won't get triggered by select_pane. Do it here instead.
    if (components.length && !panes.length) {
      event = $.Event(events.pane_selected, {
        node: components[0],
        component: components[0].getAttribute("class").split(" ")[0]
      });

      $(node).trigger(event);
    }
  };

  //*
  // A helper method to attach an event listener to the `Exploded`.
  //
  // @method
  //
  // @param {String} event - The event to listen for.
  // @param {Function} callback - The callback function.
  // @param {Object} callback.event
  // The event object. Most importantly, the `detail` property of this object
  // contains the source `node`, the selected `pane`, and the name of the
  // `component` that was selected.
  //
  // @returns Object - An object that allows you to easily remove the listener
  //                   with the `#remove` method.

  on = function (event, callback) {
    var $node = $(node);
    $node.on(event, callback);

    return {
      remove: function remove() {
        $node.off(event, callback);
      }
    };
  };

  api = { select_pane: select_pane, select_component: select_component, set_markup: set_markup, on: on };
  _Object$assign(self, api);

  initialize_panes(self);
  initialize_ranges(self);

  self.structure.querySelector("." + classes.content).addEventListener(_utilitiesUi_events2["default"].drag.start, function (event) {
    start_dragging(self, event);
  });

  return api;
};

//*
// Initializes the `Exploded` component.
//
// @method
// @static
//
// @param {HTMLElement} [context = document] - The context in which to search
// for DOM nodes that should be used as the root of an `Exploded` component.

Exploded.init = function () {
  _utilitiesBuilder2["default"].build_and_cache(Exploded, { name: classes.root });
};

exports.classes = classes;
exports.states = states;
exports.attrs = attrs;
exports.events = events;
exports["default"] = Exploded;

//*
// @name gap
//
// Updates the spread between panes. 50% on the range will generate a z-axis
// distance between child/ parent panes of `LAYER_GAP`. Anything less than
// 50% will reduce this gap, and anything greater than 50% will increase it.
//
// @param {Object} self - The internal details of an `Exploded`.
// @param {Object} event - The `input` event on a range input.
//
// @private

//*
// @name perspective
//
// Updates the perspective of an `Exploded`. 50% on the range will generate
// the default perspective, and values lower and higher will decrease and
// increase that perspective, respectively.
//
// @param {Object} self - The internal details of an `Exploded`.
// @param {Object} event - The `input` event on a range input.
//
// @private

},{"../../utilities/builder":115,"../../utilities/client":116,"../../utilities/numbers":122,"../../utilities/painting":123,"../../utilities/ui_events":128,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/keys":8,"babel-runtime/helpers/define-property":13,"babel-runtime/helpers/interop-require-default":14,"babel-runtime/regenerator":88}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = {
  root: "field",
  input: "field__input",
  label: "label"
};

var states = {
  root: { focused: classes.root + "--is-focused" },
  label: { focused: classes.label + "--is-focused" }
};

var Field = {
  init: function init() {
    $(document).on("focusin focusout", "." + classes.input, function (event) {
      var method = event.type === "focusin" ? "add" : "remove",
          label = document.querySelector("[for=" + event.target.id + "]");

      event.target.parentNode.classList[method](states.root.focused);
      label.classList[method](states.label.focused);
    });
  }
};

exports["default"] = Field;
module.exports = exports["default"];

},{}],99:[function(require,module,exports){
//                   ___       ___          ___          ___          ___
//      ___         /  /\     /  /\        /  /\        /__/\        /  /\
//     /  /\       /  /:/_   /  /::\      /  /::\      |  |::\      /  /:/_
//    /  /:/      /  /:/ /\ /  /:/\:\    /  /:/\:\     |  |:|:\    /  /:/ /\
//   /__/::\     /  /:/ /://  /:/~/:/   /  /:/~/::\  __|__|:|\:\  /  /:/ /:/_
//   \__\/\:\__ /__/:/ /://__/:/ /:/___/__/:/ /:/\:\/__/::::| \:\/__/:/ /:/ /\
//      \  \:\/\\  \:\/:/ \  \:\/:::::/\  \:\/:/__\/\  \:\~~\__\/\  \:\/:/ /:/
//       \__\::/ \  \::/   \  \::/~~~~  \  \::/      \  \:\       \  \::/ /:/
//       /__/:/   \  \:\    \  \:\       \  \:\       \  \:\       \  \:\/:/
//       \__\/     \  \:\    \  \:\       \  \:\       \  \:\       \  \::/
//                  \__\/     \__\/        \__\/        \__\/        \__\/
//

"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilitiesEvents = require("../../utilities/events");

var _utilitiesEvents2 = _interopRequireDefault(_utilitiesEvents);

var _utilitiesDom_cache = require("../../utilities/dom_cache");

var _utilitiesDom_cache2 = _interopRequireDefault(_utilitiesDom_cache);

var _utilitiesMarkup = require("../../utilities/markup");

//*
// The name of classes relevant to `Iframe` and `Communicator`.
// @object

var classes = {
  root: "iframe",
  content: "iframe__content"
};

//*
// The name of attributes relevant to `Iframe` and `Communicator`.
// @object

var attrs = {
  id: "data-iframe-id"
};

//*
// The possible positions of an [`Iframe`](@link) — either the parent (on the
// main page) or the child (embedded inside an `iframe`).
//
// @object
// @private

var positions = {
  parent: "parent",
  child: "child"
};

//*
// A set of events registered with [`Events`](@link) that relate specifically
// to features managed by the core `Iframe`.
//
// @object
// @private

var iframe_events = ["markup_request", "markup_request", "height_change", "markup_change", "class_change", "height_request", "event_handler"];

var Iframe, iframes, Communicator, create_self, add_event_listeners, move_markup_to_iframe;

iframes = [];

_utilitiesEvents2["default"].register.apply(_utilitiesEvents2["default"], iframe_events);

//*
// A mechanism for communicating between a given component and one or more
// [`Iframe`s](@link Iframe).
//
// @factoryk

exports.Communicator = Communicator = function () {
  var private_iframes = [],
      private_iframe,
      actions = {},
      communicator;

  communicator = {

    //*
    // Trigger an event with the provided data to all attached iframes.
    //
    // @method
    //
    // @param {String} type - The type of event to trigger. Do not pass a string
    // literal — instead, pass an event defined on [`Events.types`](@link).
    //
    // @param {*} data - Any piece of data that can be stringified by
    // `JSON.stringify`.

    trigger: function trigger(type, data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(private_iframes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          private_iframe = _step.value;

          private_iframe.trigger(type, data);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },

    //*
    // Add a listener for when an `Iframe` is triggered with the passed `event`.
    //
    // @method
    //
    // @param {String} type - The type of event to listen for. Do not pass a
    // string literal — instead, pass an event defined on
    // [`Events.types`](@link).
    //
    // @param {Function} action - The callback to run when the event is
    // triggered.
    //
    // @param {Object} action.data - The data that was passed along to the
    // [`Iframe#trigger`](@link) that generated this event.

    on: function on(event, action) {
      actions[event] = actions[event] || [];
      actions[event].push(action);
    },

    //*
    // Receives the data for an event and clals all associated event handlers.
    // This is primarily provided so that the `Iframe` can call this method for
    // all listeners that have been registered with it.
    //
    // @method
    //
    // @param {Object} event - All of the data associated with the event.

    receive: function receive(event) {
      var event_actions = actions[event.type],
          action;

      if (!event_actions) {
        return;
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _getIterator(actions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          action = _step2.value;
          action(event);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },

    //*
    // An object that wraps all of the registering functionality.
    //
    // @property
    // @object

    register: {

      //*
      // Registers this `Communicator` with the passed ID or `iframe` node.
      //
      // @method
      //
      // @param {String | HTMLElement} id - The `iframe` to register with. If
      // a `String` is passed, it should match some `iframe`'s `data-iframe-id`
      // attribute. Otherwise, you should pass the actual `iframe` node to
      // register with.
      //
      // @returns Boolean - Returns `true` if the registration was successful,
      // and false otherwise.

      with_iframe: function with_iframe(id) {
        var iframe = Iframe["for"](id),
            registered = !!iframe && iframe.register(communicator);

        if (registered) {
          private_iframes.push(iframe);
        }
        return registered;
      },

      //*
      // Registers this `Communicator` with the `iframe` whose `data-iframe-id`
      // matches that of the passed node.
      //
      // @method
      //
      // @param {HTMLElement} node - The node to match to an `iframe`.
      //
      // @returns Boolean - Returns `true` if the registration was successful,
      // and false otherwise.

      from_node: function from_node(node) {
        return this.with_iframe(node.getAttribute(attrs.id));
      },

      //*
      // Registers this `Communicator` with all `iframe`s on the page.
      //
      // @method
      //
      // @returns Boolean - Returns `true` if there are `iframe`s on the page,
      // and false otherwise.

      with_all: function with_all() {
        var iframe;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _getIterator(iframes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            iframe = _step3.value;
            this.with_iframe(iframe);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return iframe.length > 0;
      }
    }
  };

  return communicator;
};

//*
// Caches all of the internal details for an [`Iframe`](@link).
//
// @private
// @param {HTMLElement} node - The node backing the `Iframe`. This can be either
// an actual `iframe` (in the case of the parent) or the wrapping element of
// a demo that is actually in the `iframe`.
//
// @returns Object - The private, internal details of the `Iframe`.

create_self = function (node) {
  var self = {
    node: node,
    id: node.getAttribute(attrs.id),
    ready: false,
    listeners: [],
    message_queue: [],
    message: function message(data) {
      this.message_target.postMessage(JSON.stringify(data), "*");
    },
    queue: function queue(data) {
      this.message_queue.push(data);
    }
  };

  if (node.tagName.toLowerCase() === "iframe") {
    _Object$assign(self, { position: positions.parent, message_target: node.contentWindow });
  } else {
    _Object$assign(self, { position: positions.child, message_target: window.parent });
  }

  return self;
};

//*
// Sets up all required event listeners for an [`Iframe`](@link), including the
// listener for `postMessage` and listeners on the relevant `iframe` for the
// `load` event (as a hook to run the first set of events).
//
// @private
// @param {Object} self - The internal details of an [`Iframe`](@link).

add_event_listeners = function (self) {
  self.node.addEventListener("load", function () {
    var queued_message;

    self.ready = true;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = _getIterator(self.message_queue), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        queued_message = _step4.value;
        self.message(queued_message);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    self.message_queue = [];
  });

  window.addEventListener("message", function (event) {
    var data, listener;

    if (typeof event.data !== "string") {
      return;
    }

    data = JSON.parse(event.data);
    if (data.id !== self.id) {
      return;
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = _getIterator(self.listeners), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        listener = _step5.value;
        listener.receive(data);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  });
};

//*
// Moves the markup for for an iframe into the actual iframe. This looks for the
// `iframe__content` sibling node of the iframe, takes its inner HTML, decodes
// the escaped entities, and writes the entirety of the resulting string (which
// includes the HTML element and all children) to the iframe's window.
//
// @private
// @param {Object} self - The internal details of an [`Iframe`](@link).

move_markup_to_iframe = function (self) {
  var iframe = self.node,
      iframe_content = iframe.parentNode.querySelector("." + classes.content),
      iframe_window = iframe.contentWindow;

  if (!(iframe_content && iframe_window)) {
    return;
  }

  iframe_window.document.open();
  iframe_window.document.write((0, _utilitiesMarkup.decode_html_entities)(iframe_content.innerHTML));
  iframe_window.document.close();
};

//*
// The object that manages communication between the parent page and a
// document embedded in an `iframe`. Essentially, components can register on
// either side of the coin with the `Iframe` for that side. They can then
// send messages, which get triggered on the other side, and can listen for
// events sent from the other side. The registering and sending/ listening is
// all handled by [`Communicator`](@link); the `Iframe` simply manages the
// the passing of events between the two sides and the calling of event
// handlers in listeners that have been registered.
//
// @factory
//
// @param {HTMLElement} node - The actual `iframe` node (if in the parent) or
// the wrapper node (if in the child) that will act as the root for the
// `Iframe`.

Iframe = function (node) {
  var self = create_self(node);
  move_markup_to_iframe(self);
  add_event_listeners(self);

  return {

    //*
    // Trigger a particular event, such that it gets sent to the other side of
    // the `iframe` bridge. If the `iframe` has not yet loaded, the message
    // will be queued for when the `iframe` communication is available.
    //
    // @method
    //
    // @param {String} type - The type of event to trigger. Do not pass a string
    // literal; instead, pass an event defined on [`Events.types`](@link).
    //
    // @param {*} [data = {}] - The data to pass to the corresponding `Iframe`.
    // This can be anything that can be stringified with `JSON.stringify`.

    trigger: function trigger(type) {
      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      data = _Object$assign({}, { type: type, id: self.id }, data);
      data = JSON.parse(JSON.stringify(data));
      return self.ready ? self.message(data) : self.queue(data);
    },

    //*
    // Registers a listener object with this `Iframe` that will be notified when
    // events are recived from the other side of the `iframe` bridge.
    //
    // @method
    //
    // @param {Communicator} listener - The object that will receive events.
    //
    // @returns Boolean - Returns `true` if the register call was successful
    // (that is, the listener has the required signature and is not already
    // registered), `false` otherwise.

    register: function register(listener) {
      if (self.listeners.includes(listener)) {
        return false;
      }
      self.listeners.push(listener);
      return true;
    }
  };
};

//*
// Returns the [`Iframe`](@link) object associated with the passed node, or
// the iframe whose ID matches the passed identifier.
//
// @method
// @static
//
// @Param {String | HTMLElement} iframe - If a `String` is passed, the
// [`Iframe`](@link) for an `iframe` whose `data-iframe-id` matches the string.
// If an `HTMLElement` is passed, the [`Iframe`](@link) object that was created
// for that node.
//
// @returns {Iframe | Boolean} - If no matching `Iframe` is found, `false` will
// be returned.

Iframe["for"] = function (iframe) {
  if (typeof iframe === "string") {
    iframe = document.querySelector("." + classes.base + "[" + attrs.id + "='" + iframe + "']");
  }

  if (!iframe) {
    return false;
  }
  return (0, _utilitiesDom_cache2["default"])(iframe).get(classes.root);
};

//*
// Initializes the `Iframe` component.
//
// @method
// @static
//
// @param {HTMLElement} [context = document] - The context in which to search
// for DOM nodes that should be used as the root of an `Iframe` component.

Iframe.init = function () {
  var context = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

  var iframe_nodes = _Array$from(context.querySelectorAll("." + classes.root));
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = _getIterator(iframe_nodes), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var iframe = _step6.value;
      Iframe(iframe);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
};

exports.Communicator = Communicator;
exports.classes = classes;
exports.attrs = attrs;
exports["default"] = Iframe;

},{"../../utilities/dom_cache":117,"../../utilities/events":118,"../../utilities/markup":120,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":14}],100:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _avatar = require("./avatar");

var _avatar2 = _interopRequireDefault(_avatar);

var _code_block = require("./code_block");

var _code_block2 = _interopRequireDefault(_code_block);

var _demo = require("./demo");

var _demo2 = _interopRequireDefault(_demo);

var _exploded = require("./exploded");

var _exploded2 = _interopRequireDefault(_exploded);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _iframe = require("./iframe");

var _iframe2 = _interopRequireDefault(_iframe);

var _internal_link = require("./internal_link");

var _internal_link2 = _interopRequireDefault(_internal_link);

var _resizable = require("./resizable");

var _resizable2 = _interopRequireDefault(_resizable);

var _scroll_container = require("./scroll_container");

var _scroll_container2 = _interopRequireDefault(_scroll_container);

var _select = require("./select");

var _select2 = _interopRequireDefault(_select);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _tablist = require("./tablist");

var _tablist2 = _interopRequireDefault(_tablist);

var _toggle = require("./toggle");

var _toggle2 = _interopRequireDefault(_toggle);

var _xray = require("./xray");

var _xray2 = _interopRequireDefault(_xray);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp);

/* eslint-disable indent */

[_avatar2["default"], _code_block2["default"], _exploded2["default"], _field2["default"], _iframe2["default"], _internal_link2["default"], _resizable2["default"], _scroll_container2["default"], _demo2["default"], _select2["default"], _table2["default"], _tablist2["default"], _toggle2["default"], _xray2["default"]].forEach(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2["default"].register);

/* eslint-enable indent */

},{"./avatar":94,"./code_block":95,"./demo":96,"./exploded":97,"./field":98,"./iframe":99,"./internal_link":101,"./resizable":103,"./scroll_container":105,"./select":106,"./table":107,"./tablist":108,"./toggle":109,"./xray":110,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app":111,"babel-runtime/helpers/interop-require-default":14}],101:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceStructuresSidebar = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/structures/sidebar");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceStructuresSidebar2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceStructuresSidebar);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsTablist = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/tablist");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsTablist2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsTablist);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsScroll_container = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/scroll_container");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsScroll_container2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsScroll_container);

var InternalLink, move_to_node, on_hash_change, process_initial_hash, current_hash;

current_hash = function () {
  return window.location.hash.replace("#", "");
};

move_to_node = function (node) {
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsTablist2["default"].activate_panel_containing(node);
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsScroll_container2["default"]["for"](node).scroll_to(node);
};

on_hash_change = function () {
  var hash = current_hash(),
      node;

  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceStructuresSidebar2["default"].hide();
  node = document.getElementById(hash);
  if (!node) {
    return;
  }

  node.id = null;
  window.location.hash = hash;
  node.id = hash;
  move_to_node(node);
};

process_initial_hash = function () {
  var hash = current_hash(),
      node;

  if (!hash.length) {
    return;
  }

  node = document.getElementById(hash);
  if (!node) {
    return;
  }

  move_to_node(node);
};

InternalLink = {
  init: function init() {
    $(window).on("hashchange", on_hash_change);
    setTimeout(process_initial_hash, 0);
  }
};

exports["default"] = InternalLink;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/scroll_container":105,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/tablist":108,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/structures/sidebar":114,"babel-runtime/helpers/interop-require-default":14}],102:[function(require,module,exports){
"use strict";

},{}],103:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _size_buttons = require("./size_buttons");

var _size_buttons2 = _interopRequireDefault(_size_buttons);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/ui_events");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var classes = {
  root: "resizable",
  handle: "resizable__handle",
  container: "resizable__size-button",
  width_indicator: "resizable__width-indicator",
  px_indicator: "resizable__width-indicator__px",
  em_indicator: "resizable__width-indicator__em"
};

var states = {
  root: { transitioning: "resizable--is-transitioning-width" },
  size_button: {
    hidden: "resizable__size-button--is-hidden",
    active: "resizable__size-button--is-active"
  },
  width_indicator: { visible: "resizable__width-indicator--is-visible" }
};

var SHOW_WIDTH_DURATION = 2500;

var Resizable, key_on_handle, handle_drag_move, start_dragging_handle;

//*
// Handles key presses on the resizable handle. If the key is an arrow key,
// the resizable component will be resized appropriately. If the shift key is
// being pressed at the same time, the resizing will be accelerated.
//
// @param {Object} event - The `keypress` event.
// @private

key_on_handle = function (event) {
  var width_change;

  if (!_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].ARROWS.includes(event.which)) {
    return;
  }
  event.preventDefault();

  width_change = event.shiftKey ? 10 : 2;
  if ([_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].LEFT, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].DOWN].includes(event.which)) {
    width_change = width_change * -1;
  }

  Resizable["for"](event.target).set_width({ delta: width_change });
};

//*
// Handles a drag movement while holding onto a resizable handle. As the user
// drags, the associated resizable component will resize.
//
// @param {Object} context - The context for the current drag.
// @param {Object} event   - The `mousemove`/ `touchmove` event.
//
// @private

handle_drag_move = function (context, event) {
  var x = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2["default"].coordinates(event).x,
      delta = x - context.start_x;

  event.preventDefault();
  context.set_width(context.start_width + 2 * delta);
};

//*
// Initializes the required events/ attributes to perform a drag on a resizable
// handle. This function also removes all pointer events on the resizable to
// prevent unnecessary clicks/ hovers/ selects.
//
// @param {Object} context - The context for the current drag.

start_dragging_handle = function (context) {
  var drag_move, drag_end, listeners;

  context.iframe.style.pointerEvents = "none";

  drag_move = function (event) {
    handle_drag_move(context, event);
  };
  drag_end = function () {
    listeners.remove();
    context.iframe.style.pointerEvents = null;
  };

  listeners = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2["default"].add_drag_listeners(drag_move, drag_end);
};

//*
// The constructor around a `Resizable` component. This component manages many
// things, including: the intialization of resizing by dragging on the
// `Resizable`'s handle, responding to changes in the viewport size, and
// responding to changes in the height of the contained `iframe`.
//
// @param {HTMLElement} node - The root node for the `Resizable`
//
// @factory

Resizable = function (root) {
  var api, structure, set_width, show_width, size_buttons, handle_host_resize, min_width, max_width, container_side_padding, width_taken_by_side_components, communicator, respond_to_height, set_height, initialize_handle_resize, container_styles;

  size_buttons = _size_buttons2["default"].within(root)[0];

  communicator = (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe.Communicator)();
  communicator.register.from_node(root);

  respond_to_height = function (event) {
    set_height(event.height);
  };
  communicator.on(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2["default"].types.height_change, respond_to_height);
  communicator.on(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2["default"].types.height_request, respond_to_height);

  structure = {
    root: root,
    iframe: root.querySelector("iframe"),
    handle: root.querySelector("." + classes.handle),
    container: root.parentNode,
    width_indicator: root.querySelector("." + classes.width_indicator)
  };

  container_styles = window.getComputedStyle(structure.container);
  container_side_padding = parseInt(container_styles.paddingLeft, 10) + parseInt(container_styles.paddingRight, 10);

  width_taken_by_side_components = structure.handle.offsetWidth;
  max_width = structure.iframe.offsetWidth;
  min_width = parseInt(window.getComputedStyle(root).minWidth, 10) - width_taken_by_side_components;

  //*
  // Checks whether or not a resize of the viewport has caused the resizable
  // width to be greater than it is allowed to be. If so, it will deactivate
  // the size button that caused that width to be active (if applicable), and
  // will resize the `Resizable` and display the width.
  //
  // @param {Object} event - The `resize` event on the `window`.
  // @private

  handle_host_resize = function () {
    max_width = structure.container.offsetWidth - container_side_padding - width_taken_by_side_components;
    show_width();
  };

  //*
  // Sets the height of the `Resizable`. This is done directly on the contained
  // `iframe`.
  //
  // @param {Number} height - The new height of the contained `iframe`.
  // @private

  set_height = function (height) {
    structure.iframe.style.height = height + "px";
  };

  //*
  // Shows the current width of the contained `iframe`. This involves a few
  // things: the width is converted to `em` and both the `px` and `em` widths
  // are displayed in the width indicator, the visible state is added to the
  // width indicator, and a timeout is set up to remove the visible state (so
  // that the indicator is hidden after a small delay).
  //
  // @param {Number} width (iframe.offsetWidth) - The width to display.
  // @private

  show_width = (function () {
    var show_width_timeout;

    return function () {
      var width = structure.iframe.offsetWidth;

      structure.width_indicator.querySelector("." + classes.px_indicator).textContent = width;
      structure.width_indicator.querySelector("." + classes.em_indicator).textContent = (width / 16).toFixed(2);

      if (show_width_timeout) {
        clearTimeout(show_width_timeout);
      } else {
        structure.width_indicator.classList.add(states.width_indicator.visible);
      }

      show_width_timeout = setTimeout(function () {
        structure.width_indicator.classList.remove(states.width_indicator.visible);
        show_width_timeout = null;
      }, SHOW_WIDTH_DURATION);
    };
  })();

  set_width = function (width) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (typeof width === "object") {
      options = width;
      width = root.offsetWidth - width_taken_by_side_components + (options.delta || 0);
    }

    if (options.animated) {
      root.classList.add(states.root.transitioning);
      _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2["default"].transition(root, function () {
        root.classList.remove(states.root.transitioning);
      });
    }

    if (width) {
      width = Math.max(Math.min(width, max_width), min_width);
      root.style.width = width + width_taken_by_side_components + "px";
    } else {
      root.style.width = null;
    }

    show_width();

    size_buttons.try_size(width);
    return width;
  };

  //*
  // Listens for the start of a drag on the `Resizable` component's handle and
  // passes the associated context to `start_dragging_handle` so that the drag
  // events can be properly attached.
  //
  // @param {Object} event - The `mousedown`/ `touchstart` event.
  // @private

  initialize_handle_resize = function (event) {
    var context = {
      start_x: _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2["default"].coordinates(event).x,
      start_width: structure.iframe.offsetWidth,
      max_width: structure.container.offsetWidth - container_side_padding,
      set_width: set_width,
      iframe: structure.iframe
    };

    start_dragging_handle(context);
  };

  show_width();

  $(window).on("resize", handle_host_resize);
  $(structure.handle).on(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesUi_events2["default"].drag.start, initialize_handle_resize);

  api = { set_width: set_width };
  return api;
};

Resizable.init = function () {
  _size_buttons2["default"].init();
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].build_and_cache(Resizable, { name: classes.root });

  $(document).on("keydown", "." + classes.handle, key_on_handle);
};

exports["default"] = Resizable;
module.exports = exports["default"];

},{"./size_buttons":104,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe":99,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events":118,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes":119,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/ui_events":128,"babel-runtime/helpers/interop-require-default":14}],104:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resizable = require("./resizable");

var _resizable2 = _interopRequireDefault(_resizable);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes);

var SizeButtons, SizeRelationships, click_size_button, next_unhidden_size_button, previous_unhidden_size_button, key_on_size_button;

var classes = {
  root: "resizable__size-button",
  container: "resizable__size-buttons"
};

var states = {
  root: {
    hidden: "resizable__size-button--is-hidden",
    active: "resizable__size-button--is-active"
  }
};

var attrs = {
  button_size: "data-resizable-size-button-size",
  size_to: "data-resizable-size-to"
};

SizeRelationships = {
  SMALL: 320,
  MEDIUM: 768,
  LARGE: 960
};

// Attaches media queries for each of the size buttons to conditionally hide/
// show them depending on whether or not the size they want to generate is within
// the available space.
//
// @param {HTMLElement} button - The size button. It should have an
//                              `attrs.button_size` attribute, which determines
//                              what size they should make the component.
// @param {Number} size_adjustment - The difference in width between the viewport
//                                   and the space available to the component.
//
// @private

// attach_media_listener_to_size_button = (button, size_adjustment = 0) => {
//   var size = button.getAttribute(attrs.button_size),
//       respond_width = SizeRelationships[size.toUpperCase()],
//       listener, media_query;

//   if(!respond_width) { return; }
//   button.setAttribute(attrs.size_to, respond_width);

//   listener = (mq) => {
//     button.classList[mq.matches ? "remove" : "add"](states.size_button.hidden);
//   };

//   media_query = window.matchMedia(`(min-width: ${respond_width + size_adjustment}px)`);
//   media_query.addListener(listener);
//   listener(media_query);
// };

//*
// Captures a click even on a size button and sends the appropriate `set_width`
// method call to the associated `Resizable` component.
//
// @param {Object} event - The click event.
// @private

click_size_button = function (event) {
  var button = $(event.target).closest("." + classes.root);
  SizeButtons["for"](button).active_button = button;
};

//*
// Finds the next visible size button after the passed `button`. This is used
// for cycling through these buttons with the keyboard. This will cycle through
// all buttons in the list, wrapping around to the first buttons if no following
// buttons are visible. As a result, this method might return the same `button`
// that was passed (if it is the only visible size button).
//
// @param {HTMLElement} button - The current button (that the user is moving off
//                              of with the keyboard).
//
// @private
// @returns HTMLElement - The next visible size button within the `button`'s set.

next_unhidden_size_button = function (button) {
  var sibling = button.nextElementSibling;

  while (sibling) {
    if (!sibling.classList.contains(states.size_button.hidden)) {
      return sibling;
    }
    sibling = sibling.nextElementSibling;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(_Array$from(button.parentNode.children)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      sibling = _step.value;

      if (sibling === button) {
        break;
      }
      if (!sibling.classList.contains(states.size_button.hidden)) {
        return sibling;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

//*
// Finds the previous visible size button after the passed `button`. This is used
// for cycling through these buttons with the keyboard. This will cycle through
// all buttons in the list, wrapping around to the last buttons if no previous
// buttons are visible. As a result, this method might return the same `button`
// that was passed (if it is the only visible size button).
//
// @param {HTMLElement} button - The current button (that the user is moving off
//                              of with the keyboard).
//
// @private
// @returns HTMLElement - The previous visible size button within the `button`'s
//                       set.

previous_unhidden_size_button = function (button) {
  var sibling = button.previousElementSibling;

  while (sibling) {
    if (!sibling.classList.contains(states.size_button.hidden)) {
      return sibling;
    }
    sibling = sibling.previousElementSibling;
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _getIterator(_Array$from(button.parentNode.children).reverse()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      sibling = _step2.value;

      if (sibling === button) {
        break;
      }
      if (!sibling.classList.contains(states.size_button.hidden)) {
        return sibling;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return null;
};

//*
// Handles key presses on a size button. If the key is enter or space, the
// size button will be activated. If the key is an arrow key, this function will
// move focus to the correct sibling size button.
//
// @param {Object} event - The `keypress` event.
// @private

key_on_size_button = function (event) {
  var button, new_button;

  if (_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].ACTIVATE.includes(event.which)) {
    event.preventDefault();
    click_size_button(event);
  }

  if (_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].ARROWS.includes(event.which)) {
    event.preventDefault();
    button = $(event.target).closest("." + classes.size_button)[0];
    new_button = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].NEXT.includes(event.which) ? next_unhidden_size_button(button) : previous_unhidden_size_button(button);

    if (new_button) {
      SizeButtons["for"](button).focused_button = new_button;
    }
  }
};

//*
// @factory

SizeButtons = function (buttons) {
  var api, associations, active_button, a11y, activate_button, focus_button, activate_active_button, deactivate_active_button, size, a_button;

  buttons = _Array$from(buttons.children);
  associations = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _getIterator(buttons), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      a_button = _step3.value;

      size = SizeRelationships[a_button.getAttribute(attrs.button_size)];
      associations[size] = a_button;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  a11y = {
    focus: function focus(button) {
      button.setAttribute("tabindex", "0");
      button.focus();
    },

    blur: function blur(button) {
      button.setAttribute("tabindex", "-1");
    },

    select: function select(button) {
      this.focus(button);
      button.setAttribute("aria-selected", "true");
    },

    deselect: function deselect(button) {
      this.blur(button);
      button.setAttribute("aria-selected", "false");
    }
  };

  deactivate_active_button = function () {
    if (!active_button) {
      return;
    }

    a11y.deslect(active_button);
    active_button.classList.remove(states.root.active);
  };

  activate_button = function (button) {
    if (!buttons.includes(button) || active_button === button) {
      return active_button;
    }

    deactivate_active_button();
    active_button = button;
    _resizable2["default"]["for"](button).set_width(parseInt(button.getAttribute(attrs.size_button), 10), { animated: true });
    activate_active_button();
    return active_button;
  };

  focus_button = function (button) {
    a11y.focus(button);
    return button;
  };

  activate_active_button = function () {
    if (!active_button) {
      return;
    }

    a11y.select(active_button);
    active_button.classList.add(states.root.active);
  };

  api = _Object$defineProperties({

    try_size: function try_size(new_size) {
      deactivate_active_button();
      active_button = associations[new_size];
      activate_active_button();
    }
  }, {
    active_button: {
      set: function set(button) {
        return activate_button(button);
      },
      get: function get() {
        return active_button;
      },
      configurable: true,
      enumerable: true
    },
    focused_button: {
      set: function set(button) {
        return focus_button(button);
      },
      configurable: true,
      enumerable: true
    }
  });

  return api;
};

SizeButtons.init = function () {
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].build_and_cache(SizeButtons, { name: classes.container });

  $(document).on("click", "." + classes.root, click_size_button).on("keydown", "." + classes.root, key_on_size_button);
};

exports["default"] = SizeButtons;
module.exports = exports["default"];

},{"./resizable":103,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes":119,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/define-properties":6,"babel-runtime/helpers/interop-require-default":14}],105:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var classes = {
  root: "scroll-container"
};

var ScrollContainer;

ScrollContainer = function (node) {
  var force_height = function force_height(height) {
    node.style.minHeight = height + "px";
  };

  return {
    maintain_current_height: function maintain_current_height() {
      force_height(node.offsetHeight);
    },
    restore_height: function restore_height() {
      node.style.minHeight = null;
    },

    scroll_to: function scroll_to(contained_node) {
      node.parentNode.scrollTop = contained_node.getBoundingClientRect().top - node.getBoundingClientRect().top;
    }
  };
};

ScrollContainer.init = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].initialize_once(ScrollContainer, { name: classes.root, cache: true });

exports["default"] = ScrollContainer;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"babel-runtime/helpers/interop-require-default":14}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = {
  root: "select",
  input: "select__input"
};

var states = {
  root: { focused: classes.root + "--is-focused" }
};

var Select, focus_or_blur_select;

//*
// Translates the `focus`/ `blur` events on the actual `select` node into the
// appropriate addition/ removal of the focused state on the base node of the
// component. This has to be done because most of the visual styling for the
// component is placed on the container, so any adjustments to those styles on
// focus require that container to be aware of the state of its contained
// `select`.
//
// @param {Object} event - The `focus`/ `blur` event on the `select`.
// @private

focus_or_blur_select = function (event) {
  var method = event.type === "focusin" ? "add" : "remove";
  $(event.target).closest(".#{CLASSES.BASE}")[0].classList[method](states.root.focused);
};

Select = {
  init: function init() {
    $(document).on("focus blur", "." + classes.input, focus_or_blur_select);
  }
};

exports.classes = classes;
exports["default"] = Select;

},{}],107:[function(require,module,exports){
"use strict";

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes);

var classes = {
  root: "table",
  header: "table__header",
  body: "table__body",
  row: "table__row",
  cell: "table__cell",
  scroller: "table__scroller",
  container: "table__container",
  actions: "table__actions"
};

var states = {
  scroller: { scrolled: "table__scroller--is-scrolled" },
  container: { overflowing: "table__container--is-overflowing" }
};

var attrs = {
  action: "table-action"
};

var actions = {
  shift_right: "shift-right",
  shift_left: "shift-left"
};

var Table, cache_preferred_widths, check_for_overflow, shift_table_right, shift_table_left, last_visible_cell, handle_keypress, handle_scroll, initialize_table_actions, update_actions;

//*
// Calculates and applies the intrinsic widths of the columns of a `table`,
// keeping in mind the effective maximum column size implied by the `min-width`
// set on the table.
//
// The intrinsic widths of each column are applied only once, to the header
// cells of the column. These are applied by using them as the `min-width`s for
// each header cell, so that the table will appropriately overflow once the
// space available to the table is less than the sum of its intrinsic widths.
//
// A side effect of this function is that `self` is augmented with the minimum
// total intrinsic width of its columns (`min_width`).
//
// @param {Object} self - The internal details of a `Table`.
// @private

cache_preferred_widths = function (self) {
  var table = self.root,
      clone = table.parentNode.parentNode.cloneNode(true),
      width_calculation_container,
      clone_table,
      cloned_header_cells;

  // For the purposes of the width calculations, let the table be at the smaller
  // of its intrinsic size and the `min-width` set in CSS.
  clone.style.maxWidth = window.getComputedStyle(table).minWidth;
  table.style.minWidth = "0px";
  clone.style.display = "inline-block";

  // Creates a container that won't restrict the size of the table.
  width_calculation_container = $("<div style='width: 10000px; visibility: hidden; height: 0;' />")[0];
  width_calculation_container.appendChild(clone);
  document.body.appendChild(width_calculation_container);

  clone_table = clone.querySelector("." + classes.root);
  self.min_width = clone_table.offsetWidth; // sum of constrained intrinsic widths

  // Apply the constrained intrinsic widths to each of the header cells in the
  // actual table.
  cloned_header_cells = _Array$from(clone.querySelectorAll("." + classes.header + " ." + classes.cell));
  self.header_cells.forEach(function (cell, index) {
    cell.style.minWidth = cloned_header_cells[index].offsetWidth + "px";
  });

  // Cleanup.
  document.body.removeChild(width_calculation_container);
};

//*
// Determines whether or not there is overflow and performs all necessary size
// and other DOM updates. This includes fixing the size of the first cell in a
// row and adding a compensating amount of left padding to the second cell in
// each row when the table should overflow, and reversing this when it no longer
// needs to do so.
//
// @param {Object} self - The internal details of a `Table`.
// @private

check_for_overflow = function (self) {
  var scroller = self.scroller;
  var root = self.root;
  var container = self.container;
  var overflowing = self.overflowing;
  var min_width = self.min_width;
  var scroller_width = scroller.offsetWidth;
  var first_cell_width;var cell;var available_space;var index;

  if (!scroller_width) {
    return;
  }

  // Newly overflowing, get the header's width and apply that same width
  // to each first cell (since they'll be absolutely positioned), and add an
  // equivalent amount of left padding to the second cell.
  if (!overflowing && scroller_width < min_width) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(_Array$from(root.querySelectorAll("." + classes.cell + ":first-child"))), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        cell = _step.value;

        first_cell_width = first_cell_width || cell.offsetWidth;

        cell.style.width = first_cell_width + "px";
        self.scroller.style.paddingLeft = first_cell_width - 1 + "px";
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    container.classList.add(states.container.overflowing);
    self.overflowing = true;
  }

  // No longer overflowing — reverse what we did before!
  if (overflowing && scroller_width >= min_width) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(_Array$from(root.querySelectorAll("." + classes.cell + ":first-child"))), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        cell = _step2.value;

        first_cell_width = first_cell_width || cell.offsetWidth;

        cell.style.width = null;
        self.scroller.style.paddingLeft = null;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _getIterator(self.header_cells), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        cell = _step3.value;
        cell.style.maxWidth = null;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    container.classList.remove(states.container.overflowing);
    self.overflowing = false;
  }

  // Even if already overflowing, update the max-widths of columns such that the
  // persistant cell + any other cell <= the total width.
  if (scroller_width < min_width) {
    available_space = scroller_width - self.header_cells[0].offsetWidth;

    for (index = 1; index++; index < self.header_cells.length) {
      self.header_cells[index].style.maxWidth = available_space + "px";
    }
  }
};

last_visible_cell = function (self) {
  var last_cell = self.header_cells[1],
      parent_width = self.scroller.scrollLeft + self.scroller.offsetWidth - parseInt(self.scroller.style.paddingLeft, 10),
      width_so_far = last_cell.offsetWidth,
      cell,
      index;

  for (index = 2; index++; index < self.header_cells[index]) {
    cell = self.header_cells[index];
    if (width_so_far + cell.offsetWidth > parent_width) {
      break;
    }
    last_cell = cell;
    width_so_far += cell.offsetWidth;
  }

  return [last_cell, parent_width - width_so_far];
};

//*
// Shifts the `Table` represented by `self` to the right by one column. If the
// table currently has a column that is partially visible on the right, the
// table will be scrolled such that that entire column is visible. If a column
// is entirely visible and pressed right against the right edge of the scroll
// area, the next (fully hidden) column will be shown.
//
// This has no effect if the table is already fully scrolled.
//
// @param {Object} self - The internal details of a `Table`.

shift_table_right = function (self) {
  var last_cell, next_cell_overlap;

  if (!self.overflowing) {
    return;
  }

  var _last_visible_cell = last_visible_cell(self);

  var _last_visible_cell2 = _slicedToArray(_last_visible_cell, 2);

  last_cell = _last_visible_cell2[0];
  next_cell_overlap = _last_visible_cell2[1];

  if (last_cell === self.header_cells[self.header_cells.length - 1]) {
    return;
  }
  self.scroller.scrollLeft += last_cell.nextElementSibling.offsetWidth - next_cell_overlap;
  self.scroller.classList.add(states.scroller.scrolled);
  update_actions(self);
};

//*
// Shifts the `Table` represented by `self` to the left by one column. If the
// table currently has a column that is partially visible on the right, the
// table will be scrolled such that that entire column is hidden. If a column
// is entirely visible and pressed right against the right edge of the scroll
// area, that column will be scrolled out of view.
//
// This has no effect if the table is at a scroll position of 0.
//
// @param {Object} self - The internal details of a `Table`.

shift_table_left = function (self) {
  var last_cell, next_cell_overlap, scroll_delta;

  if (!self.overflowing) {
    return;
  }

  var _last_visible_cell3 = last_visible_cell(self);

  var _last_visible_cell32 = _slicedToArray(_last_visible_cell3, 2);

  last_cell = _last_visible_cell32[0];
  next_cell_overlap = _last_visible_cell32[1];

  scroll_delta = next_cell_overlap ? -next_cell_overlap : -last_cell.offsetWidth;

  self.scroller.scrollLeft += scroll_delta;
  if (!self.scroller.scrollLeft) {
    self.scroller.classList.remove(states.scroller.scrolled);
  }
  update_actions(self);
};

//*
// Handles a keypress while focused on the table. Only left/ right/ up/ down
// keypresses are handled here: left and down will shift the table left, while
// right and up will shift the table right.
//
// @param {Object} event - The original `keypress` event.
// @param {Object} self - The internal details of a `Table`.
// @private

handle_keypress = function (event, self) {
  switch (event.which) {
    case _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].RIGHT:
      event.preventDefault();
      shift_table_right(self);
      break;
    case _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].LEFT:
      event.preventDefault();
      shift_table_left(self);
      break;
  }
};

//*
// Handles scrolling on the table by updating the classes on the scroller/
// action buttons to reflect the current scroll position.
//
// @param {Object} event - The original `scroll` event.
// @param {Object} self - The internal details of a `Table`.
// @private

handle_scroll = function (event, self) {
  var scroller;

  if (!self.overflowing) {
    return;
  }

  scroller = self.scroller;
  if (scroller.scrollLeft > 0) {
    scroller.classList.add(states.scroller.scrolled);
  } else {
    scroller.classList.remove(states.scroller.scrolled);
  }

  update_actions(self);
  event.stopPropagation();
};

//*
// Hooks up the event handlers for table actions, stores the actions on
// `self.shifters` for easier access later, and performes the initial updates
// to make the state of the actions match the table itself.
//
// @param {Object} self - The internal details of a `Table`.
// @private

initialize_table_actions = function (self) {
  var action;

  self.shifters = {};
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _getIterator(_Array$from(self.container.querySelectorAll("." + classes.actions + " [" + attrs.action + "]"))), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      action = _step4.value;

      self.shifters[action.getAttribute(attrs.action).replace("shift-", "")] = action;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  update_actions(self);

  $(self.container).on("click", "." + classes.actions, function (event) {
    switch (event.target.getAttribute(attrs.action)) {
      case actions.shift_right:
        shift_table_right(self);
        break;
      case actions.shift_left:
        shift_table_left(self);
        break;
    }
  });
};

//*
// Updates the table actions by disabling actions that can't be performed given
// the state of the table (for example, a left shifter when the table is fully
// scrolled to the left).
//
// @param {Object} self - The internal details of a `Table`.
// @private

update_actions = (function () {
  var disable, enable;

  disable = function (shifter) {
    shifter.disabled = true;
    shifter.classList.add(shifter.className.split(" ")[0] + "--is-disabled");
  };

  enable = function (shifter) {
    shifter.disabled = false;
    shifter.classList.remove(shifter.className.split(" ")[0] + "--is-disabled");
  };

  return function (self) {
    var shifters = self.shifters,
        scroll = self.scroller.scrollLeft;

    if (!scroll) {
      disable(shifters.left);
    } else {
      enable(shifters.left);
    }

    if (scroll + self.scroller.offsetWidth + 1 >= self.scroller.scrollWidth) {
      disable(shifters.right);
    } else {
      enable(shifters.right);
    }
  };
})();

//*
// A factory for producing `Table` objects.
//
// @param {HTMLElement} root - The root (`.table`) node of the table. Note that
//                            this is not the container or scroller, but the
//                            actual `table` element itself.
//
// @factory

Table = function (root) {
  var $root, self;

  $root = $(root);
  self = {
    root: root,
    scroller: $root.closest("." + classes.scroller)[0],
    container: $root.closest("." + classes.container)[0],
    overflowing: false,
    header_cells: _Array$from(root.querySelectorAll("." + classes.header + " ." + classes.cell))
  };

  root.setAttribute("tabindex", "-1");
  cache_preferred_widths(self);
  check_for_overflow(self);
  initialize_table_actions(self);

  $(window).on("resize", function () {
    check_for_overflow(self);
    update_actions(self);
  });

  root.addEventListener("keydown", function (event) {
    handle_keypress(event, self);
  });
  self.scroller.addEventListener("scroll", function (event) {
    handle_scroll(event, self);
  });
};

Table.init = function () {
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].build(Table, { name: classes.root });
};

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes":119,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":14,"babel-runtime/helpers/sliced-to-array":15}],108:[function(require,module,exports){
"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/query_string");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/dom_cache");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache);

var classes = {
  root: "tablist",
  tab: "tablist__tab",
  panel: "tablist__panel"
};

var variants = {
  root: { manages_url: "tablist--manages-url" }
};

var states = {
  tab: { active: "tablist__tab--is-active" },
  panel: { active: "tablist__panel--is-active" }
};

var Tablist, tab_click, panel_for_tab, tab_for_panel, tablist_for_node, a11y, apply_activation_markup, remove_activation_markup, panel_containing_node;

//*
// Manages a click on a tab by finding the associated `Tablist` and activating
// the tab that was clicked on.
//
// @param {Object} event - The `click` event.
// @private

tab_click = function (event) {
  var tablist;

  event.preventDefault();

  tablist = Tablist["for"](event.target);
  if (!tablist) {
    return;
  }
  tablist.activate_tab($(event.currentTarget).closest("." + classes.tab)[0]);
};

//*
// Finds the tab panel associated with the passed tab. The association is based
// on the ID of the tab panel matching the `href` of the tab.
//
// @param {HTMLElement} tab - The tab for which you want the associated panel.
// @private
//
// @returns {HTMLElement | null} The associated tab panel or, if no matching
// panel was found, `null`.

panel_for_tab = function (tab) {
  return tab && document.getElementById(tab.getAttribute("href").replace("#", ""));
};

//*
// Finds the tab associated with the passed panel. The association is based
// on the ID of the tab panel matching the `href` of the tab.
//
// @param {HTMLElement} tab - The tab for which you want the associated panel.
// @private
//
// @returns {HTMLElement | null} The associated tab or, if no matching panel
// was found, `null`.

tab_for_panel = function (panel) {
  return panel && document.querySelector("." + classes.tab + "[href='#" + panel.id + "']");
};

//*
// Writes all of the required accessibility markup to the tablist and its
// subcomponents. This includes IDs for the tablist and its tabs/ panels,
// roles for the same, and the `aria-` associations between tabs and their
// corresponding panels.
//
// @param {HTMLElement} tablist - The root node of the tablist.
// @private

a11y = (function () {
  var _current_ids;

  var current_ids, id_for;

  current_ids = (_current_ids = {}, _defineProperty(_current_ids, classes.root, 1), _defineProperty(_current_ids, classes.tab, 1), _defineProperty(_current_ids, classes.panel, 1), _current_ids);

  id_for = function (node) {
    var type = node.className.split(" ")[0];
    return type + "--" + current_ids[type]++;
  };

  return function (tablist) {
    var panel, tab_id, panel_id, tab;

    tablist.id = tablist.id || id_for(tablist);
    tablist.setAttribute("role", "tablist");

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(_Array$from(tablist.querySelectorAll("." + classes.tab))), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        tab = _step.value;

        panel = panel_for_tab(tab);
        if (!panel) {
          continue;
        }

        tab_id = tab.id || id_for(tab);
        panel_id = panel.id || id_for(panel);

        tab.id = tab_id;
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", panel_id);
        tab.setAttribute("href", "#" + panel_id);

        panel.id = panel_id;
        panel.setAttribute("role", "tab-panel");
        panel.setAttribute("aria-labelledby", tab_id);
        panel.setAttribute("aria-hidden", !panel.classList.contains(states.panel.active));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
})();

apply_activation_markup = function (node) {
  if (!node) {
    return;
  }

  if (node.classList.contains(classes.tab)) {
    node.classList.add(states.tab.active);
  } else {
    node.classList.add(states.panel.active);
  }
};

remove_activation_markup = function (node) {
  if (!node) {
    return;
  }

  if (node.classList.contains(classes.tab)) {
    node.classList.remove(states.tab.active);
  } else {
    node.classList.remove(states.panel.active);
  }
};

panel_containing_node = function (node) {
  return $(node).closest("." + classes.panel)[0];
};

tablist_for_node = function (node) {
  if (node.classList.contains(classes.panel)) {
    node = tab_for_panel(node);
  }

  return $(node).closest("." + classes.root)[0];
};

//*
// The constructor around a `Tablist` component. This constructor returns a very
// small API: only an `activate_tab` method is exposed, which will activate the
// passed tab in the tablist. This constructor will also ensure that all the
// aria properties and associations are hooked up correctly.

Tablist = function (root) {
  var active_tab = root.querySelector("." + states.tab.active),
      active_panel = panel_for_tab(active_tab),
      saved_tab,
      api,
      self;

  a11y(root);

  self = {
    root: root,
    id: root.id,
    active_panel: panel_for_tab(active_tab),
    manages_url: root.classList.contains(variants.root.manages_url)
  };

  api = _Object$defineProperties({
    //*
    // Activates the passed tab, deactivating the currently-active tab, if there
    // is one (and it is not the passed tab).
    //
    // @param {HTMLElement} tab - The tab to activate.

    activate_tab: function activate_tab(tab) {
      this.active_tab = tab;
    }

  }, {
    active_tab: {
      get: function get() {
        return active_tab;
      },
      set: function set(tab) {
        var panel = panel_for_tab(tab);

        apply_activation_markup(tab);
        apply_activation_markup(panel);

        if (!tab || tab === active_tab) {
          return;
        }

        remove_activation_markup(active_tab);
        remove_activation_markup(active_panel);

        active_tab = tab;
        active_panel = panel;

        if (this.manages_url && _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string2["default"].get(this.id) !== tab.id) {
          _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string2["default"].set(this.id, tab.id);
        }
      },
      configurable: true,
      enumerable: true
    },
    active_panel: {
      get: function get() {
        return active_panel;
      },
      set: function set(panel) {
        this.active_tab = panel_for_tab(panel);
      },
      configurable: true,
      enumerable: true
    }
  });

  if (self.manages_url) {
    saved_tab = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesQuery_string2["default"].get(self.id);
    if (saved_tab) {
      api.active_tab = document.getElementById(saved_tab);
    }
  } else {
    api.active_tab = active_tab;
  }

  return api;
};

Tablist["for"] = function (node) {
  var tablist_node = $(node).closest("." + classes.root)[0],
      containing_panel;

  if (!tablist_node) {
    containing_panel = node.classList.contains(classes.panel) ? node : panel_containing_node(node);
    if (!containing_panel) {
      return false;
    }
    tablist_node = tablist_for_node(containing_panel);
  }

  if (!tablist_node) {
    return false;
  }
  return (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache2["default"])(tablist_node).get(classes.root);
};

Tablist.init = function () {
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].build_and_cache(Tablist, { name: classes.root });
  $(document).on("click", "." + classes.tab, tab_click);
};

Tablist.activate_panel_containing = function (node) {
  var panel = $(node).closest("." + classes.panel)[0],
      tablist = Tablist["for"](panel);

  if (tablist) {
    tablist.active_tab = tab_for_panel(panel);
  }
  return !!tablist;
};

Tablist.is_in_active_panel = function (node) {
  var panel = panel_containing_node(node);
  return !!panel && panel.classList.contains(states.panel.active);
};

exports["default"] = Tablist;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/dom_cache":117,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/query_string":125,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/define-properties":6,"babel-runtime/helpers/define-property":13,"babel-runtime/helpers/interop-require-default":14}],109:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsModal = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/modal");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsModal2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsModal);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/pattern");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesNaming_convention = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/naming_convention");

var classes = {
  root: "toggle",
  info: "toggle__info",
  container: "toggle__container"
};

var states = {
  root: {
    locked: "toggle--is-locked",
    active: "toggle--is-active",
    partially_active: "toggle--is-partially-active"
  }
};

var attrs = {
  name: "data-variation-name"
};

var Toggle, Toggles, handle_keypress, info_click, toggle_click, update_toggle_state;

//*
// Listens and responds to keypress events while focused on a toggle. If either
// space or enter are pressed, the toggle will be toggled as if it had been
// clicked on. This allows for keyboard-only navigation and manipulation of
// toggles.
//
// @param {Object} event - The `keypress` event.
// @private

handle_keypress = function (event) {
  if (![_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].ENTER, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesKeycodes2["default"].SPACE].include(event.which)) {
    return;
  }
  event.preventDefault();
  update_toggle_state(event.target);
};

//*
// Listens for clicks on the information icon in the toggle and activates the
// modal to present details on that variation.
//
// @param {Object} event - The `click` event.
// @private

info_click = function (event) {
  var variation_name;

  // Prevent the click event from propagating to the toggle.
  event.stopImmediatePropagation();
  event.preventDefault();

  variation_name = $(event.target).closest("." + classes.root)[0].getAttribute(attrs.name);
  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsModal2["default"].present(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2["default"].find(variation_name, { search_all: true }));
};

//*
// Listens for click events on a toggle and updates the state of the toggle
// appropriately.
//
// @param {Object} event - The `click` event.
// @private

toggle_click = function (event) {
  event.preventDefault();
  update_toggle_state(event.target);
};

//*
// Updates the status of the passed changer. If the `add` attribute of the
// `option` argument is defined, a truthy value will activate the changer
// and a falsey one will deactivate it. Otherwise, the changer will simply
// have its state toggled.
//
// @private
//
// @param {HTMLElement, Toggle, String} toggle - The whose state should be
// updated. Anything that can be resolved to a `Toggle` via `Toggle.for`
// can be used here, including a `Toggle`, the `HTMLElement` that is the root
// of the toggle, or a `String` that is the name of a toggle.
//
// @param {Object} [options = {}] - The options to use for this update. Currently,
// only the `add` option is read to determine whether the toggle should be
// activated or deactivated. If no `options` argument is passed, the `toggle`
// will simply be toggled.

update_toggle_state = function (toggle) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var toggle_node, all_toggles, variation, add, currently_active, activate_with, activate_with_toggle, preclude;

  toggle = Toggle["for"](toggle);
  if (toggle.locked) {
    return;
  }
  toggle_node = toggle.root;
  toggle.lock();

  all_toggles = Toggles["for"](toggle_node);
  variation = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2["default"]["for"](toggle_node.getAttribute(attrs.name), { search_all: true });
  add = options.add ? !!options.add : !toggle.active;

  // Update the state of all variations that should be activated with the
  // current toggle.
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(variation && variation.activate_with || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      activate_with = _step.value;

      if (_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesNaming_convention.naming_convention.is_component(variation)) {
        continue;
      }

      activate_with_toggle = Toggle["for"](activate_with);

      if (activate_with_toggle) {
        currently_active = activate_with_toggle.active;
        if (currently_active && !add || !currently_active && add) {
          update_toggle_state(activate_with_toggle, { add: add });
        }
      } else {
        all_toggles.trigger({
          add: add,
          details: {
            "for": _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesNaming_convention.naming_convention.component_name(activate_with),
            name: activate_with
          }
        });
      }
    }

    // TODO: something about filters.
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (add) {
    toggle.activate();

    // Deactivates any currently active variations that are precluded from being
    // active with the current variation.
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(variation && variation.precludes || []), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        preclude = _step2.value;

        preclude = Toggle["for"](preclude);
        if (preclude && preclude.active) {
          update_toggle_state(preclude, { add: false });
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  } else {
    toggle.deactivate();
  }

  toggle.unlock();
  all_toggles.trigger({ add: add, details: variation });
};

//*
// A constructor around a single `Toggle`. The returned object gives the ability
// to update the toggle's state, locking or unlocking the toggle from further
// changes, and getting the current state of the toggle.
//
// @param {HTMLElement} root - The root node of a toggle.
// @return {Toggle}

Toggle = function (root) {
  if (!root) {
    return null;
  }
  if (root instanceof Toggle) {
    return root;
  }

  return _Object$defineProperties({
    root: root,
    lock: function lock() {
      root.classList.add(states.root.locked);
    },
    unlock: function unlock() {
      root.classList.remove(states.root.locked);
    },
    activate: function activate() {
      root.classList.add(states.root.active);
    },
    deactivate: function deactivate() {
      root.classList.remove(states.root.active);
    },

    constructor: Toggle
  }, {
    is_locked: {
      get: function get() {
        return root.classList.contains(states.root.locked);
      },
      configurable: true,
      enumerable: true
    },
    is_active: {
      get: function get() {
        return root.classList.contains(states.root.active) || root.classList.contains(states.root.partially_active);
      },
      configurable: true,
      enumerable: true
    }
  });
};

//*
// Gets the toggle for the passed variation.
//
// @param {Toggle, String, HTMLElement} variation - The source of the desired
// `Toggle` — either as the HTMLElement that roots the toggle, a `Toggle` (which
// is returned as-is) or a `String` that is the name of a toggle.
//
// @return {Toggle}

Toggle["for"] = function (variation) {
  if (variation instanceof Toggle) {
    return variation;
  } else if (typeof variation === "string") {
    return Toggle(document.querySelector("[" + attrs.name + "='" + variation.name + "']"));
  } else {
    return Toggle($(variation).closest("." + classes.root)[0]);
  }
};

Toggles = function (root) {
  var communicator = (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe.Communicator)();
  communicator.register.from_node(root);

  return {
    trigger: function trigger() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      communicator.trigger.apply(communicator, [_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2["default"].types.class_change].concat(args));
    }
  };
};

Toggles.init = function () {
  $(document).on("keypress", "." + classes.root, handle_keypress).on("click", "." + classes.info, info_click).on("click", "." + classes.root, toggle_click);

  _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesBuilder2["default"].build(Toggles, { name: classes.container, cache: true });
};

exports["default"] = Toggles;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe":99,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/modal":102,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/builder":115,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events":118,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/keycodes":119,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/naming_convention":121,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/pattern":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/define-properties":6,"babel-runtime/helpers/interop-require-default":14}],110:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesTemplate = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/template");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesTemplate2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesTemplate);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/pattern");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsExploded = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/exploded");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsExploded2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsExploded);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe");

var classes = {
  root: "x-ray",
  details: "x-ray__details",
  list: "x-ray__list"
};

var states = {
  root: { active: "x-ray--is-active" }
};

var helpers = {
  active: "x-ray__helpers--x-ray-is-active"
};

var attrs = {
  dismiss: "data-xray-dismiss",
  present: "data-xray-present",
  template: "data-xray-template"
};

var template_names = {
  details: "details",
  list: "list"
};

var Xray, structure, exploded, templates, component, hook_up_iframe_communication, communicator, toggle, present, dismiss, set_component, set_details;

hook_up_iframe_communication = function () {
  var registered;

  communicator = (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsIframe.Communicator)();
  registered = communicator.register.from_node(structure.root);

  if (!registered) {
    return;
  }

  communicator.on(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2["default"].types.markup_request, function (event) {
    exploded.set_markup(event.markup);
  });
};

set_component = function (component_name) {
  component = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2["default"].find(component_name, { search_all: true });
  structure.heading.innerHTML = component.title ? component.title : "<code class='type--code'>" + component_name + "</code>";
  structure.list.innerHTML = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesTemplate2["default"].render(templates.list, {
    components: [component_name].concat(component.subcomponent || [])
  });
  set_details(component);
};

set_details = function (symbol) {
  var other_content = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var options = _Object$assign(other_content, symbol);
  structure.details.innerHTML = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesTemplate2["default"].render(templates.details, options);
};

present = function () {
  communicator.trigger(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesEvents2["default"].types.markup_request);
  structure.root.classList.add(states.root.active);
  document.body.classList.add(helpers.active);
};

dismiss = function () {
  exploded.set_markup();
  structure.root.classList.remove(states.root.active);
  document.body.classList.remove(helpers.active);
};

toggle = function () {
  return structure.root.classList.contains(states.root.active) ? dismiss() : present();
};

Xray = {
  toggle: toggle,
  present: present,
  dismiss: dismiss,

  init: function init() {
    var root = document.querySelector("." + classes.root);
    if (!root) {
      return;
    }

    exploded = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsExploded2["default"].within(root)[0];

    structure = {
      root: root,
      heading: root.querySelector(".type-heading"),
      details: root.querySelector("." + classes.details),
      list: root.querySelector("." + classes.list)
    };

    templates = {
      details: root.querySelector("[" + attrs.template + "='" + template_names.details + "']"),
      list: root.querySelector("[" + attrs.template + "='" + template_names.list + "']")
    };

    hook_up_iframe_communication();

    exploded.on(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceComponentsExploded.events.pane_selected, function (event) {
      component = _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesPattern2["default"].find(event.component, { search_all: true });
      if (component) {
        set_details(component, { tagname: event.node.tagName });
      }
    });

    $(root).on("click", "[" + attrs.dismiss + "]", dismiss).on("click", "[href^='#']", function (event) {
      event.preventDefault();
      exploded.select_component(event.target.textContent);
    });

    $(document).on("click", "[" + attrs.present + "]", function (event) {
      set_component(event.getAttribute(attrs.present));
    });
  }
};

exports["default"] = Xray;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/exploded":97,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components/iframe":99,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/events":118,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/pattern":124,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/template":126,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/interop-require-default":14}],111:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var App,
    component,
    components = [];

App = {
  register: function register(a_component) {
    components.push(a_component);
  },

  init: function init() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(components), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        component = _step.value;

        if (component.init) {
          component.init();
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

exports["default"] = App;
module.exports = exports["default"];

},{"babel-runtime/core-js/get-iterator":2}],112:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp);

require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/vendor");

require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components");

require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/structures");

require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/behaviors");

_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2["default"].init();

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/behaviors":93,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/components":100,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app":111,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/structures":113,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/vendor":131,"babel-runtime/helpers/interop-require-default":14}],113:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _sidebar = require("./sidebar");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp);

/* eslint-disable indent */

[_sidebar2["default"]].forEach(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceFoundationApp2["default"].register);

/* eslint-enable indent */

},{"./sidebar":114,"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/foundation/app":111,"babel-runtime/helpers/interop-require-default":14}],114:[function(require,module,exports){
"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = {
  base: "sidebar",
  toggler: "sidebar__toggler"
};

var states = {
  base: { active: classes.base + "--is-active" }
};

var Sidebar, root, show, hide, toggle, check_for_sidebar_state_change;

//*
// Reveals the sidebar.

show = function () {
  root.classList.add(states.base.active);
  setTimeout(function () {
    document.addEventListener("click", check_for_sidebar_state_change);
  }, 0);
};

//*
// Hides the sidebar.

hide = function () {
  document.removeEventListener("click", check_for_sidebar_state_change);
  root.classList.remove(states.base.active);
};

//*
// Toggles the visibility of the sidebar.

toggle = function () {
  return Sidebar.is_active ? hide() : show();
};

//*
// Captures all clicks when the sidebar is active and checks whether or not the
// sidebar should change its visibility. If the sidebar is clicked on, it should
// remain open — otherwise, it should close.
//
// @param {Object} event - The `click` event on the `document`.
// @private

check_for_sidebar_state_change = function (event) {
  if (!$(event.target).closest("." + classes.base).length) {
    hide();
  }
};

//*
// The global sidebar object. Use this method for manually updating the state of
// the sidebar; however, note that click events on the toggler and when the
// sidebar is open are handled automatically by the component itself.

Sidebar = _Object$defineProperties({
  show: show,
  hide: hide,
  toggle: toggle,

  init: function init() {
    root = document.querySelector("." + classes.base);
    if (!root) {
      return;
    }

    document.querySelector("." + classes.toggler).addEventListener("click", toggle);
  }
}, {
  is_active: {
    get: function get() {
      return root.classList.contains(states.base.active);
    },
    configurable: true,
    enumerable: true
  }
});

exports["default"] = Sidebar;
module.exports = exports["default"];

},{"babel-runtime/core-js/object/define-properties":6}],115:[function(require,module,exports){
"use strict";

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/dom_cache");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache);

//*
// @pattern Builder
// @group Helper
//
// A utility for building all instances of factories. This manages the finding
// and initialization of instances of a factory, cacheing, adding cache
// retrieval methods, and more.

var Builder, add_retrieval_methods;

//*
// Adds static methods to `Factory` that allow it to retrieve cached instances
// from nodes.
//
// @private
//
// @param {Function} Factory - The factory function to add methods to.
//
// @param {Object} [options = {}]
//
// @param {String} [options.name] - The name for this Factory. This will
// be used as the root class name if `options.selector` is not provided.
//
// @param {String} [options.selector] - The selector to use to find nodes
// to call the factory on.

add_retrieval_methods = function (Factory) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!Factory["for"]) {
    Factory["for"] = function (node) {
      return (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache2["default"])($(node).closest(options.selector)[0]).get(options.name);
    };
  }

  if (!Factory.within) {
    Factory.within = function (node) {
      var results = [],
          api,
          nodes = _Array$from(node.querySelectorAll(options.selector));

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          node = _step.value;

          api = Factory["for"](node);
          if (api) {
            results.push(api);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return results;
    };
  }
};

//*
// @object

Builder = {

  //*
  // Creates all required instances of the passed factory.
  //
  // @method
  //
  // @param {Function} Factory - The factory function to use.
  //
  // @param {Object} [options = {}]
  //
  // @param {String} [options.name] - The name for this Factory. This will
  // be used to set up cacheing if required, and will be used as the root
  // class name if `options.selector` is not provided.
  //
  // @param {String} [options.selector] - The selector to use to find nodes
  // to call the factory on.
  //
  // @param {Boolean} [options.cache = false] - Whether or not to cache the
  // return result of the factory on the node.
  //
  // @param {Function} [options.filter] - A function that determines whether
  // or not a given node should be used as a root for the `factory`. This
  // function is passed a single argument, `node`, which is the node to test.

  build: function build(Factory) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var node, nodes, api;

    nodes = options.selector ? document.querySelectorAll(options.selector) : document.getElementsByClassName(options.name);

    options.selector = options.selector || "." + options.name;

    if (options.cache) {
      add_retrieval_methods(Factory, options);
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(_Array$from(nodes)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        node = _step2.value;

        if (options.filter && !options.filter(node)) {
          continue;
        }

        api = Factory(node);
        if (options.cache) {
          (0, _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceUtilitiesDom_cache2["default"])(node).set(options.name, api);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  },

  //*
  // Builds the passed factory and caches the result. This is equivalent to:
  //
  // ```
  // Builder.build(Factory, { cache: true });
  // ```
  //
  // See [`Builder.build`](@link) for more details on `options` argument.
  //
  // @param {Function} Factory - The factory function to use.
  // @param {Object} [options = {}]
  //
  // @method

  build_and_cache: function build_and_cache(Factory) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    options.cache = true;
    return this.build(Factory, options);
  },

  //*
  // Builds the passed factory but, before doing so, ensures that each node
  // has not been used as an argument for this factory.
  //
  // See [`Builder.build`](@link) for more details on `options` argument.
  //
  // @param {Function} Factory - The factory function to use.
  // @param {Object} [options = {}]
  //
  // @method

  initialize_once: function initialize_once(Factory) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return function () {
      options.filter = function (node) {
        return !Factory["for"](node);
      };
      Builder.build_and_cache(Factory, options);
    };
  }
};

exports["default"] = Builder;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/utilities/dom_cache":117,"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":14}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Client;

Client = {
  name_for: function name_for(property) {
    return property;
  }
};

exports["default"] = Client;
module.exports = exports["default"];

},{}],117:[function(require,module,exports){
//        ___          ___          ___          ___          ___
//       /  /\        /  /\        /  /\        /__/\        /  /\
//      /  /:/       /  /::\      /  /:/        \  \:\      /  /:/_
//     /  /:/       /  /:/\:\    /  /:/          \__\:\    /  /:/ /\
//    /  /:/  ___  /  /:/~/::\  /  /:/  ___  ___ /  /::\  /  /:/ /:/_
//   /__/:/  /  /\/__/:/ /:/\:\/__/:/  /  /\/__/\  /:/\:\/__/:/ /:/ /\
//   \  \:\ /  /:/\  \:\/:/__\/\  \:\ /  /:/\  \:\/:/__\/\  \:\/:/ /:/
//    \  \:\  /:/  \  \::/      \  \:\  /:/  \  \::/      \  \::/ /:/
//     \  \:\/:/    \  \:\       \  \:\/:/    \  \:\       \  \:\/:/
//      \  \::/      \  \:\       \  \::/      \  \:\       \  \::/
//       \__\/        \__\/        \__\/        \__\/        \__\/

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Cache;

Cache = function (node) {
  var $node = $(node);

  return {
    get: function get(key) {
      return $node.data(key);
    },
    set: function set(key, value) {
      return $node.data(key, value);
    }
  };
};

exports["default"] = Cache;
module.exports = exports["default"];

},{}],118:[function(require,module,exports){
//        ___                      ___          ___                   ___
//       /  /\         ___        /  /\        /__/\         ___     /  /\
//      /  /:/_       /__/\      /  /:/_       \  \:\       /  /\   /  /:/_
//     /  /:/ /\      \  \:\    /  /:/ /\       \  \:\     /  /:/  /  /:/ /\
//    /  /:/ /:/_      \  \:\  /  /:/ /:/_  _____\__\:\   /  /:/  /  /:/ /::\
//   /__/:/ /:/ /\ ___  \__\:\/__/:/ /:/ /\/__/::::::::\ /  /::\ /__/:/ /:/\:\
//   \  \:\/:/ /://__/\ |  |:|\  \:\/:/ /:/\  \:\~~\~~\//__/:/\:\\  \:\/:/~/:/
//    \  \::/ /:/ \  \:\|  |:| \  \::/ /:/  \  \:\  ~~~ \__\/  \:\\  \::/ /:/
//     \  \:\/:/   \  \:\__|:|  \  \:\/:/    \  \:\          \  \:\\__\/ /:/
//      \  \::/     \__\::::/    \  \::/      \  \:\          \__\/  /__/:/
//       \__\/          ~~~~      \__\/        \__\/                 \__\/

"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Events = {
  register: function register() {
    var event;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
        events[_key] = arguments[_key];
      }

      for (var _iterator = _getIterator(events), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        event = _step.value;

        this.types[event] = event;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },

  types: {}
};

exports["default"] = Events;
module.exports = exports["default"];

},{"babel-runtime/core-js/get-iterator":2}],119:[function(require,module,exports){
module.exports={
  "main": "package.json"
}

},{}],120:[function(require,module,exports){
//        ___          ___          ___          ___          ___          ___
//       /__/\        /  /\        /  /\        /__/|        /__/\        /  /\
//      |  |::\      /  /::\      /  /::\      |  |:|        \  \:\      /  /::\
//      |  |:|:\    /  /:/\:\    /  /:/\:\     |  |:|         \  \:\    /  /:/\:\
//    __|__|:|\:\  /  /:/~/::\  /  /:/~/:/   __|  |:|     ___  \  \:\  /  /:/~/:/
//   /__/::::| \:\/__/:/ /:/\:\/__/:/ /:/___/__/\_|:|____/__/\  \__\:\/__/:/ /:/
//   \  \:\~~\__\/\  \:\/:/__\/\  \:\/:::::/\  \:\/:::::/\  \:\ /  /:/\  \:\/:/
//    \  \:\       \  \::/      \  \::/~~~~  \  \::/~~~~  \  \:\  /:/  \  \::/
//     \  \:\       \  \:\       \  \:\       \  \:\       \  \:\/:/    \  \:\
//      \  \:\       \  \:\       \  \:\       \  \:\       \  \::/      \  \:\
//       \__\/        \__\/        \__\/        \__\/        \__\/        \__\/

"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vendorHighlight = require("../../vendor/highlight");

var _vendorHighlight2 = _interopRequireDefault(_vendorHighlight);

var start_tag_test = /^<[^\/]/;
var end_tag_test = /^<\//;
var contains_end_tag = /<\//;

//*
// The size of manually re-indented code.
//
// @private
// @type Number
// @value 2

var INDENTATION_SIZE = 2;

var decode_html_entities, indent, clean, highlight;

exports.decode_html_entities = decode_html_entities = function (string) {
  var element = document.createElement("div");
  element.innerHTML = string.trim();

  return element.childNodes.length === 0 ? "" : element.childNodes[0].nodeValue || element.innerHTML;
};

//*
// Indents HTML markup by finding opening and closing HTML tags.
//
// @param {String} code - The randomly-escaped HTML string.
// @returns {String} The indented string.

exports.indent = indent = function (markup) {
  var indent_count = -INDENTATION_SIZE,
      indented_markup = [],
      markup_lines = markup.split("\n"),
      markup_line,
      start_tag,
      end_tag;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(markup_lines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      markup_line = _step.value;

      markup_line = markup_line.trim();
      start_tag = start_tag_test.test(markup_line);
      end_tag = end_tag_test.test(markup_line);

      if (start_tag) {
        indent_count += INDENTATION_SIZE;
      }
      indent_count = Math.max(indent_count, 0);

      if (indent_count > 0) {
        markup_line = "" + Array(indent_count + 1).join(" ") + markup_line;
      }

      indented_markup.push(markup_line);
      if (end_tag) {
        indent_count -= INDENTATION_SIZE;
      }
      if (!end_tag && contains_end_tag.test(markup_line)) {
        indent_count -= INDENTATION_SIZE;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return indented_markup.join("\n");
};

exports.clean = clean = function (code) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var leading_spaces;

  if (!code) {
    return "";
  }

  code = decode_html_entities(code);
  code = code.trim();
  if (options.collapse_newlines) {
    code = code.replace(/\n^\s*\n/mg, "\n");
  }

  // Kills any leading spaces from each line
  leading_spaces = code.match(/^\s*/);
  if (leading_spaces) {
    code = code.replace(new RegExp("^\\s{" + leading_spaces[0].length + "}", "gm"), "");
  }

  return code;
};

exports.highlight = highlight = function (code) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return _vendorHighlight2["default"].highlight(options.language_code || "html", code).value;
};

exports.decode_html_entities = decode_html_entities;
exports.indent = indent;
exports.clean = clean;
exports.highlight = highlight;

},{"../../vendor/highlight":130,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":14}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var naming_convention = {};

exports.naming_convention = naming_convention;

},{}],122:[function(require,module,exports){
"use strict";

var _bind = require("babel-runtime/helpers/bind")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Matrix, between;

exports.between = between = function (point, min, max) {
  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  var min_condition = options.include_min ? point >= min : point > min,
      max_condition = options.include_max ? point <= max : point < max;
  return min_condition && max_condition;
};

exports.Matrix = Matrix = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var MatrixClass = window.WebKitCSSMatrix || window.MSCSSMatrix || window.CSSMatrix;
  return new (_bind.apply(MatrixClass, [null].concat(args)))();
};

exports.Matrix = Matrix;
exports.between = between;

},{"babel-runtime/helpers/bind":12}],123:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var force_repaint;

exports.force_repaint = force_repaint = function () {
  var node = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

  return node.offsetHeight && node.offsetWidth;
};

exports.force_repaint = force_repaint;

},{}],124:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Pattern, pattern, result_types, find_variation;

pattern = window.pattern;
delete window.pattern;

result_types = ["style", "script"];

find_variation = function (component, symbol) {
  var variation;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator((component.state || []).concat(component.variant || [])), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      variation = _step.value;

      if (symbol.include(variation.name)) {
        return variation;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

Pattern = {
  find: function find(symbol) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var result_type, result, variation, subcomponent;

    if (!pattern) {
      return false;
    }

    symbol = symbol.split(/\s+/);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(result_types), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        result_type = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _getIterator(pattern[result_type]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            result = _step3.value;

            if (symbol.include(result.name)) {
              return result;
            }

            if (options.search_variations || options.search_all) {
              variation = find_variation(result, symbol);
              if (variation) {
                return variation;
              }
            }

            if (options.search_subcomponents || options.search_all) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = _getIterator(result.subcomponent || []), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  subcomponent = _step4.value;

                  if (symbol.include(subcomponent.name)) {
                    return subcomponent;
                  }

                  variation = find_variation(result, symbol);
                  if (variation) {
                    return variation;
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return false;
  },

  __pattern__: pattern
};

exports["default"] = Pattern;
module.exports = exports["default"];

},{"babel-runtime/core-js/get-iterator":2}],125:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceVendorQuery_string = require("/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/vendor/query_string");

var _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceVendorQuery_string2 = _interopRequireDefault(_UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceVendorQuery_string);

var QueryString, location, query;

location = function () {
  return window.location;
};
query = function () {
  return _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceVendorQuery_string2["default"].parse(location().search);
};

QueryString = {
  get: function get(key) {
    return query()[key];
  },

  set: function set(key, value) {
    var current_query = query(),
        new_url;

    current_query[key] = value;
    new_url = location.protocol + "//" + location.host + location.pathname + "?" + _UsersChrisDropboxPersonalChrisCodeWebDocksDocks_theme_apiSourceVendorQuery_string2["default"].stringify(query);
    window.history.replaceState({ path: new_url }, document.title, new_url);
    return current_query;
  }
};

exports["default"] = QueryString;
module.exports = exports["default"];

},{"/Users/chris/Dropbox (Personal)/Chris/Code/web/docks/docks_theme_api/source/vendor/query_string":132,"babel-runtime/helpers/interop-require-default":14}],126:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mustache = require("mustache");

var _mustache2 = _interopRequireDefault(_mustache);

var Template = {
  render: function render(template, binding) {
    if (template.innerHTML) {
      template = template.innerHTML;
    }
    _mustache2["default"].render(template, binding);
  }
};

exports["default"] = Template;
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":14,"mustache":91}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TextRange, _select_all;

TextRange = function (target) {
  return {
    select_all: function select_all() {
      _select_all(target);
    }
  };
};

exports["default"] = TextRange;

_select_all = (function () {
  if (window.getSelection) {
    return function (target) {
      var selection, range;

      selection = window.getSelection();
      selection.removeAllRanges();

      range = document.createRange();
      range.selectNodeContents(target);
      selection.addRange(range);
    };
  } else {
    return function (target) {
      var range = document.body.createTextRange();
      range.moveToElementText(target);
      range.select();
    };
  }
})();
module.exports = exports["default"];

},{}],128:[function(require,module,exports){
// TODO

"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DRAG_THRESHOLD = 5;

var UIEvents, coordinates;

coordinates = function (event) {
  var touches = event.touches;

  return {
    x: touches ? touches[0].x : event.pageX,
    y: touches ? touches[0].y : event.pageY
  };
};

coordinates.distance_between = function (before, after) {
  var delta_x = Math.abs(after.x - before.x),
      delta_y = Math.abs(after.y - before.y);

  return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
};

UIEvents = _Object$defineProperties({

  drag: _Object$defineProperties({}, {
    start: {
      get: function get() {
        return "mousedown";
      },
      configurable: true,
      enumerable: true
    },
    move: {
      get: function get() {
        return "mousemove";
      },
      configurable: true,
      enumerable: true
    },
    end: {
      get: function get() {
        return "mouseup";
      },
      configurable: true,
      enumerable: true
    }
  }),

  transition: function transition(node, callback) {
    var _this = this;

    return new _Promise(function (resolve) {
      var transition_end = _this.transition_end;

      if (transition_end) {
        node.addEventListener(transition_end, resolve);
        callback();
      } else {
        resolve();
      }
    });
  },

  add_drag_listeners: function add_drag_listeners(move_handler, end_handler) {
    var _drag = this.drag;
    var move = _drag.move;
    var end = _drag.end;

    document.addEventListener(move, move_handler);
    document.addEventListener(end, end_handler);

    return {
      remove: function remove() {
        document.removeEventListener(move, move_handler);
        document.removeEventListener(end, end_handler);
      }
    };
  },

  coordinates: coordinates,
  DRAG_THRESHOLD: DRAG_THRESHOLD
}, {
  transition_end: {
    get: function get() {
      var transitions, transition, element, event_name;

      transitions = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
      };

      element = document.createElement("div");
      event_name = null;

      for (transition in transitions) {
        if (element.style[transition] !== undefined) {
          event_name = transitions[transition];
          break;
        }
      }

      Object.defineProperty(UIEvents, "transition_end", { value: event_name });
      return event_name;
    },
    configurable: true,
    enumerable: true
  }
});

exports["default"] = UIEvents;
module.exports = exports["default"];

},{"babel-runtime/core-js/object/define-properties":6,"babel-runtime/core-js/promise":9}],129:[function(require,module,exports){
'use strict';

if (![].includes) {
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}

},{}],130:[function(require,module,exports){
"use strict";

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var hljs;

!(function (e) {
    hljs = e({});
})(function (e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
    }

    function t(e) {
        return e.nodeName.toLowerCase();
    }

    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index;
    }

    function a(e) {
        var n = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
        return (n = n.map(function (e) {
            return e.replace(/^lang(uage)?-/, "");
        }), n.filter(function (e) {
            return N(e) || /no(-?)highlight/.test(e);
        })[0]);
    }

    function o(e, n) {
        var t = {};
        for (var r in e) t[r] = e[r];
        if (n) for (var r in n) t[r] = n[r];
        return t;
    }

    function i(e) {
        var n = [];
        return ((function r(e, a) {
            for (var o = e.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? a += o.nodeValue.length : 1 == o.nodeType && (n.push({
                event: "start",
                offset: a,
                node: o
            }), a = r(o, a), t(o).match(/br|hr|img|input/) || n.push({
                event: "stop",
                offset: a,
                node: o
            }));
            return a;
        })(e, 0), n);
    }

    function c(e, r, a) {
        function o() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r;
        }

        function i(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"';
            }
            l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">";
        }

        function c(e) {
            l += "</" + t(e) + ">";
        }

        function u(e) {
            ("start" == e.event ? i : c)(e.node);
        }
        for (var s = 0, l = "", f = []; e.length || r.length;) {
            var g = o();
            if ((l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e)) {
                f.reverse().forEach(c);
                do u(g.splice(0, 1)[0]), g = o(); while (g == e && g.length && g[0].offset == s);
                f.reverse().forEach(i);
            } else "start" == g[0].event ? f.push(g[0].node) : f.pop(), u(g.splice(0, 1)[0]);
        }
        return l + n(a.substr(s));
    }

    function u(e) {
        function n(e) {
            return e && e.source || e;
        }

        function t(t, r) {
            return RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
        }

        function r(a, i) {
            if (!a.compiled) {
                if ((a.compiled = !0, a.k = a.k || a.bK, a.k)) {
                    var c = {},
                        u = function u(n, t) {
                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
                            var t = e.split("|");
                            c[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                        });
                    };
                    "string" == typeof a.k ? u("keyword", a.k) : _Object$keys(a.k).forEach(function (e) {
                        u(e, a.k[e]);
                    }), a.k = c;
                }
                a.lR = t(a.l || /\b[A-Za-z0-9_]+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
                var s = [];
                a.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (n) {
                        s.push(o(e, n));
                    }) : s.push("self" == e ? a : e);
                }), a.c = s, a.c.forEach(function (e) {
                    r(e, a);
                }), a.starts && r(a.starts, i);
                var l = a.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = l.length ? t(l.join("|"), !0) : {
                    exec: function exec() {
                        return null;
                    }
                };
            }
        }
        r(e);
    }

    function s(e, t, a, o) {
        function i(e, n) {
            for (var t = 0; t < n.c.length; t++) if (r(n.c[t].bR, e)) return n.c[t];
        }

        function c(_x, _x2) {
            var _again = true;

            _function: while (_again) {
                var e = _x,
                    n = _x2;
                _again = false;
                if (r(e.eR, n)) {
                    return e;
                } else {
                    if (e.eW) {
                        _x = e.parent;
                        _x2 = n;
                        _again = true;
                        continue _function;
                    } else {
                        return void 0;
                    }
                }
            }
        }

        function f(e, n) {
            return !a && r(n.iR, e);
        }

        function g(e, n) {
            var t = x.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t];
        }

        function p(e, n, t, r) {
            var a = r ? "" : E.classPrefix,
                o = '<span class="' + a,
                i = t ? "" : "</span>";
            return (o += e + '">', o + n + i);
        }

        function d() {
            if (!w.k) return n(y);
            var e = "",
                t = 0;
            w.lR.lastIndex = 0;
            for (var r = w.lR.exec(y); r;) {
                e += n(y.substr(t, r.index - t));
                var a = g(w, r);
                a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = w.lR.lastIndex, r = w.lR.exec(y);
            }
            return e + n(y.substr(t));
        }

        function h() {
            if (w.sL && !R[w.sL]) return n(y);
            var e = w.sL ? s(w.sL, y, !0, L[w.sL]) : l(y);
            return (w.r > 0 && (B += e.r), "continuous" == w.subLanguageMode && (L[w.sL] = e.top), p(e.language, e.value, !1, !0));
        }

        function v() {
            return void 0 !== w.sL ? h() : d();
        }

        function b(e, t) {
            var r = e.cN ? p(e.cN, "", !0) : "";
            e.rB ? (M += r, y = "") : e.eB ? (M += n(t) + r, y = "") : (M += r, y = t), w = _Object$create(e, {
                parent: {
                    value: w
                }
            });
        }

        function m(e, t) {
            if ((y += e, void 0 === t)) return (M += v(), 0);
            var r = i(t, w);
            if (r) return (M += v(), b(r, t), r.rB ? 0 : t.length);
            var a = c(w, t);
            if (a) {
                var o = w;
                o.rE || o.eE || (y += t), M += v();
                do w.cN && (M += "</span>"), B += w.r, w = w.parent; while (w != a.parent);
                return (o.eE && (M += n(t)), y = "", a.starts && b(a.starts, ""), o.rE ? 0 : t.length);
            }
            if (f(t, w)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (w.cN || "<unnamed>") + '"');
            return (y += t, t.length || 1);
        }
        var x = N(e);
        if (!x) throw new Error('Unknown language: "' + e + '"');
        u(x);
        for (var w = o || x, L = {}, M = "", k = w; k != x; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
        var y = "",
            B = 0;
        try {
            for (var C, j, I = 0;;) {
                if ((w.t.lastIndex = I, C = w.t.exec(t), !C)) break;
                j = m(t.substr(I, C.index - I), C[0]), I = C.index + j;
            }
            m(t.substr(I));
            for (var k = w; k.parent; k = k.parent) k.cN && (M += "</span>");
            return {
                r: B,
                value: M,
                language: e,
                top: w
            };
        } catch (A) {
            if (-1 != A.message.indexOf("Illegal")) return {
                r: 0,
                value: n(t)
            };
            throw A;
        }
    }

    function l(e, t) {
        t = t || E.languages || _Object$keys(R);
        var r = {
            r: 0,
            value: n(e)
        },
            a = r;
        return (t.forEach(function (n) {
            if (N(n)) {
                var t = s(n, e, !1);
                t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t);
            }
        }), a.language && (r.second_best = a), r);
    }

    function f(e) {
        return (E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, n) {
            return n.replace(/\t/g, E.tabReplace);
        })), E.useBR && (e = e.replace(/\n/g, "<br>")), e);
    }

    function g(e, n, t) {
        var r = n ? x[n] : t,
            a = [e.trim()];
        return (e.match(/(\s|^)hljs(\s|$)/) || a.push("hljs"), r && a.push(r), a.join(" ").trim());
    }

    function p(e) {
        var n = a(e);
        if (!/no(-?)highlight/.test(n)) {
            var t;
            E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent,
                o = n ? s(n, r, !0) : l(r),
                u = i(t);
            if (u.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = o.value, o.value = c(u, i(p), r);
            }
            o.value = f(o.value), e.innerHTML = o.value, e.className = g(e.className, n, o.language), e.result = {
                language: o.language,
                re: o.r
            }, o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.r
            });
        }
    }

    function d(e) {
        E = o(E, e);
    }

    function h() {
        if (!h.called) {
            h.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, p);
        }
    }

    function v() {
        addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1);
    }

    function b(n, t) {
        var r = R[n] = t(e);
        r.aliases && r.aliases.forEach(function (e) {
            x[e] = n;
        });
    }

    function m() {
        return _Object$keys(R);
    }

    function N(e) {
        return R[e] || R[x[e]];
    }
    var E = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    },
        R = {},
        x = {};
    return (e.highlight = s, e.highlightAuto = l, e.fixMarkup = f, e.highlightBlock = p, e.configure = d, e.initHighlighting = h, e.initHighlightingOnLoad = v, e.registerLanguage = b, e.listLanguages = m, e.getLanguage = N, e.inherit = o, e.IR = "[a-zA-Z][a-zA-Z0-9_]*", e.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, e.CLCM = {
        cN: "comment",
        b: "//",
        e: "$",
        c: [e.PWM]
    }, e.CBCM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/",
        c: [e.PWM]
    }, e.HCM = {
        cN: "comment",
        b: "#",
        e: "$",
        c: [e.PWM]
    }, e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e);
});

hljs.registerLanguage("coffeescript", function (e) {
    var c = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module global window document"
    },
        n = "[A-Za-z$_][0-9A-Za-z$_]*",
        t = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: c
    },
        r = [e.BNM, e.inherit(e.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [e.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [e.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [e.BE, t]
        }, {
            b: /"/,
            e: /"/,
            c: [e.BE, t]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [t, e.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }]
    }, {
        cN: "property",
        b: "@" + n
    }, {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript"
    }];
    t.c = r;
    var i = e.inherit(e.TM, {
        b: n
    }),
        s = "(\\(.*\\))?\\s*\\B[-=]>",
        o = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{
            b: /\(/,
            e: /\)/,
            k: c,
            c: ["self"].concat(r)
        }]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: c,
        i: /\/\*/,
        c: r.concat([{
            cN: "comment",
            b: "###",
            e: "###",
            c: [e.PWM]
        }, e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + s,
            e: "[-=]>",
            rB: !0,
            c: [i, o]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: s,
                e: "[-=]>",
                rB: !0,
                c: [o]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [i]
            }, i]
        }, {
            cN: "attribute",
            b: n + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    };
});
hljs.registerLanguage("xml", function () {
    var t = "[A-Za-z0-9\\._:-]+",
        e = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    },
        c = {
        eW: !0,
        i: /</,
        r: 0,
        c: [e, {
            cN: "attribute",
            b: t,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                c: [e],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [c],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [c],
            starts: {
                e: "</script>",
                rE: !0,
                sL: "javascript"
            }
        }, e, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, c]
        }]
    };
});
hljs.registerLanguage("haml", function () {
    return {
        cI: !0,
        c: [{
            cN: "doctype",
            b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
            r: 10
        }, {
            cN: "comment",
            b: "^\\s*(!=#|=#|-#|/).*$",
            r: 0
        }, {
            b: "^\\s*(-|=|!=)(?!#)",
            starts: {
                e: "\\n",
                sL: "ruby"
            }
        }, {
            cN: "tag",
            b: "^\\s*%",
            c: [{
                cN: "title",
                b: "\\w+"
            }, {
                cN: "value",
                b: "[#\\.]\\w+"
            }, {
                b: "{\\s*",
                e: "\\s*}",
                eE: !0,
                c: [{
                    b: ":\\w+\\s*=>",
                    e: ",\\s+",
                    rB: !0,
                    eW: !0,
                    c: [{
                        cN: "symbol",
                        b: ":\\w+"
                    }, {
                        cN: "string",
                        b: '"',
                        e: '"'
                    }, {
                        cN: "string",
                        b: "'",
                        e: "'"
                    }, {
                        b: "\\w+",
                        r: 0
                    }]
                }]
            }, {
                b: "\\(\\s*",
                e: "\\s*\\)",
                eE: !0,
                c: [{
                    b: "\\w+\\s*=",
                    e: "\\s+",
                    rB: !0,
                    eW: !0,
                    c: [{
                        cN: "attribute",
                        b: "\\w+",
                        r: 0
                    }, {
                        cN: "string",
                        b: '"',
                        e: '"'
                    }, {
                        cN: "string",
                        b: "'",
                        e: "'"
                    }, {
                        b: "\\w+",
                        r: 0
                    }]
                }]
            }]
        }, {
            cN: "bullet",
            b: "^\\s*[=~]\\s*",
            r: 0
        }, {
            b: "#{",
            starts: {
                e: "}",
                sL: "ruby"
            }
        }]
    };
});
hljs.registerLanguage("ruby", function (e) {
    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        c = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    },
        a = {
        cN: "value",
        b: "#<",
        e: ">"
    },
        s = {
        cN: "comment",
        v: [{
            b: "#",
            e: "$",
            c: [c]
        }, {
            b: "^\\=begin",
            e: "^\\=end",
            c: [c],
            r: 10
        }, {
            b: "^__END__",
            e: "\\n$"
        }]
    },
        n = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: r
    },
        t = {
        cN: "string",
        c: [e.BE, n],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }]
    },
        i = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: r
    },
        d = [t, a, s, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{
                cN: "parent",
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }, s]
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [e.inherit(e.TM, {
            b: b
        }), i, s]
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [t, {
            b: b
        }],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + e.RSR + ")\\s*",
        c: [a, s, {
            cN: "regexp",
            c: [e.BE, n],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }],
        r: 0
    }];
    n.c = d, i.c = d;
    var l = "[>?]>",
        u = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
        N = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
        o = [{
        b: /^\s*=>/,
        cN: "status",
        starts: {
            e: "$",
            c: d
        }
    }, {
        cN: "prompt",
        b: "^(" + l + "|" + u + "|" + N + ")",
        starts: {
            e: "$",
            c: d
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: r,
        c: [s].concat(o).concat(d)
    };
});
hljs.registerLanguage("javascript", function (r) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
        },
        c: [{
            cN: "pi",
            r: 10,
            v: [{
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            }]
        }, r.ASM, r.QSM, r.CLCM, r.CBCM, r.CNM, {
            b: "(" + r.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [r.CLCM, r.CBCM, r.RM, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [r.inherit(r.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [r.CLCM, r.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + r.IR,
            r: 0
        }]
    };
});
hljs.registerLanguage("erb", function () {
    return {
        sL: "xml",
        subLanguageMode: "continuous",
        c: [{
            cN: "comment",
            b: "<%#",
            e: "%>"
        }, {
            b: "<%[%=-]?",
            e: "[%-]?%>",
            sL: "ruby",
            eB: !0,
            eE: !0
        }]
    };
});
hljs.registerLanguage("scss", function (e) {
    {
        var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
            i = {
            cN: "variable",
            b: "(\\$" + t + ")\\b"
        },
            r = {
            cN: "function",
            b: t + "\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        },
            o = {
            cN: "hexcolor",
            b: "#[0-9A-Fa-f]+"
        };
        ({
            cN: "attribute",
            b: "[A-Z\\_\\.\\-]+",
            e: ":",
            eE: !0,
            i: "[^\\s]",
            starts: {
                cN: "value",
                eW: !0,
                eE: !0,
                c: [r, o, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "important",
                    b: "!important"
                }]
            }
        });
    }
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, r, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            cN: "pseudo",
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            cN: "pseudo",
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, i, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            cN: "value",
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            cN: "value",
            b: ":",
            e: ";",
            c: [r, i, o, e.CSSNM, e.QSM, e.ASM, {
                cN: "important",
                b: "!important"
            }]
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [r, i, e.QSM, e.ASM, o, e.CSSNM, {
                cN: "preprocessor",
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    };
});
hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
        a = {
        cN: "function",
        b: c + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    };
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CBCM, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+"
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [a, e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "tag",
            b: c,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [e.CBCM, {
                cN: "rule",
                b: "[^\\s]",
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: !0,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    };
});
hljs.registerLanguage("handlebars", function () {
    var e = "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
    return {
        aliases: ["hbs", "html.hbs", "html.handlebars"],
        cI: !0,
        sL: "xml",
        subLanguageMode: "continuous",
        c: [{
            cN: "expression",
            b: "{{",
            e: "}}",
            c: [{
                cN: "begin-block",
                b: "#[a-zA-Z- .]+",
                k: e
            }, {
                cN: "string",
                b: '"',
                e: '"'
            }, {
                cN: "end-block",
                b: "\\/[a-zA-Z- .]+",
                k: e
            }, {
                cN: "variable",
                b: "[a-zA-Z-.]+",
                k: e
            }]
        }]
    };
});
module.exports = hljs;

},{"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/object/keys":8}],131:[function(require,module,exports){
"use strict";

require("./array_includes");

},{"./array_includes":129}],132:[function(require,module,exports){
/*!
  query-string
  Parse and stringify URL query strings
  https://github.com/sindresorhus/query-string
  by Sindre Sorhus
  MIT License
*/
'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

(function () {
  'use strict';
  var queryString = {};

  queryString.parse = function (str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^(\?|#)/, '');

    if (!str) {
      return {};
    }

    return str.trim().split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];

      key = decodeURIComponent(key);
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }

      return ret;
    }, {});
  };

  queryString.stringify = function (obj) {
    return obj ? _Object$keys(obj).map(function (key) {
      var val = obj[key];

      if (Array.isArray(val)) {
        return val.map(function (val2) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
        }).join('&');
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
  };

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return queryString;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = queryString;
  } else {
    window.queryString = queryString;
  }
})();

},{"babel-runtime/core-js/object/keys":8}]},{},[112]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXR0ZXJuX2xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIjoxNn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCI6MTd9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIjoxOH1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIjoxOX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIjoyMH1dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCI6MjF9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6MjJ9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIjoyM31dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIjoyNH1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiOjI1fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCI6MjZ9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59LHt9XSwxMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6N31dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSx7fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaXNJdGVyYWJsZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IF9nZXRJdGVyYXRvcihhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKF9pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGVcIjozfV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuQXJyYXkuZnJvbTtcbn0se1wiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIjozMixcIi4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb21cIjo3OSxcIi4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjg1fV0sMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xufSx7XCIuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yXCI6NzcsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo4NSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjg3fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG59LHtcIi4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZVwiOjc4LFwiLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6ODUsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjo4N31dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuYXNzaWduO1xufSx7XCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiOjMyLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiOjgxfV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59O1xufSx7XCIuLi8uLi9tb2R1bGVzLyRcIjo1NX1dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoVCwgRCl7XG4gIHJldHVybiAkLnNldERlc2NzKFQsIEQpO1xufTtcbn0se1wiLi4vLi4vbW9kdWxlcy8kXCI6NTV9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07XG59LHtcIi4uLy4uL21vZHVsZXMvJFwiOjU1fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Qua2V5cztcbn0se1wiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIjozMixcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzXCI6ODJ9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQuY29yZScpLlByb21pc2U7XG59LHtcIi4uL21vZHVsZXMvJC5jb3JlXCI6MzIsXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6ODMsXCIuLi9tb2R1bGVzL2VzNi5wcm9taXNlXCI6ODQsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo4NSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjg3fV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuU3ltYm9sO1xufSx7XCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiOjMyLFwiLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sXCI6ODZ9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQud2tzJykoJ2l0ZXJhdG9yJyk7XG59LHtcIi4uLy4uL21vZHVsZXMvJC53a3NcIjo3NSxcIi4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjg1LFwiLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6ODd9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se1wiLi8kLmlzLW9iamVjdFwiOjQ3fV0sMjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIEVTNU9iamVjdCA9IHJlcXVpcmUoJy4vJC5lczUtb2JqZWN0JylcbiAgLCBlbnVtS2V5cyAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0LCB0cnVlKVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9IEVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59O1xufSx7XCIuLyQuZW51bS1rZXlzXCI6MzcsXCIuLyQuZXM1LW9iamVjdFwiOjM4LFwiLi8kLnRvLW9iamVjdFwiOjcyfV0sMzA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG59LHtcIi4vJC5jb2ZcIjozMSxcIi4vJC53a3NcIjo3NX1dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG59LHt9XSwzMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih+bGVuZ3RoICYmIHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG59O1xufSx7XCIuLyQuYS1mdW5jdGlvblwiOjI3fV0sMzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJylleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHBbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSAkZGVmO1xufSx7XCIuLyQuY29yZVwiOjMyLFwiLi8kLmdsb2JhbFwiOjQxfV0sMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbn0se1wiLi8kLmdsb2JhbFwiOjQxLFwiLi8kLmlzLW9iamVjdFwiOjQ3fV0sMzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scylmb3IodmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KSwgaSA9IDAsIGtleTsgc3ltYm9scy5sZW5ndGggPiBpOyApe1xuICAgIGlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcbn0se1wiLi8kXCI6NTV9XSwzODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBjb2YgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gMCBpbiAkT2JqZWN0KCd6JykgPyAkT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6ICRPYmplY3QoaXQpO1xufTtcbn0se1wiLi8kLmNvZlwiOjMxfV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07XG59LHtcIi4vJC5hbi1vYmplY3RcIjoyOCxcIi4vJC5jdHhcIjozMyxcIi4vJC5pcy1hcnJheS1pdGVyXCI6NDYsXCIuLyQuaXRlci1jYWxsXCI6NDksXCIuLyQudG8tbGVuZ3RoXCI6NzEsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjc2fV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmdcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGdldE5hbWVzID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXM7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbmZ1bmN0aW9uIGdldFdpbmRvd05hbWVzKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9PYmplY3QoaXQpKTtcbn07XG59LHtcIi4vJFwiOjU1LFwiLi8kLnRvLW9iamVjdFwiOjcyfV0sNDE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSw0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbn0se31dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLnN1cHBvcnQtZGVzYycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xufSx7XCIuLyRcIjo1NSxcIi4vJC5wcm9wZXJ0eS1kZXNjXCI6NTksXCIuLyQuc3VwcG9ydC1kZXNjXCI6Njd9XSw0NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59LHtcIi4vJC5nbG9iYWxcIjo0MX1dLDQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIEZhc3QgYXBwbHlcbi8vIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICBjYXNlIDU6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xufSx7fV0sNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gKCdBcnJheScgaW4gSXRlcmF0b3JzID8gSXRlcmF0b3JzLkFycmF5IDogQXJyYXkucHJvdG90eXBlW0lURVJBVE9SXSkgPT09IGl0O1xufTtcbn0se1wiLi8kLml0ZXJhdG9yc1wiOjU0LFwiLi8kLndrc1wiOjc1fV0sNDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcbn07XG59LHt9XSw0ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG5tb2R1bGUuZXhwb3J0cyA9ICdrZXlzJyBpbiBbXSAmJiAhKCduZXh0JyBpbiBbXS5rZXlzKCkpO1xufSx7fV0sNDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuZnVuY3Rpb24gY2xvc2UoaXRlcmF0b3Ipe1xuICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoKGUpe1xuICAgIGNsb3NlKGl0ZXJhdG9yKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xufSx7XCIuLyQuYW4tb2JqZWN0XCI6Mjh9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpKDEsbmV4dCl9KTtcbiAgcmVxdWlyZSgnLi8kLnRhZycpKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbn0se1wiLi8kXCI6NTUsXCIuLyQuaGlkZVwiOjQzLFwiLi8kLnByb3BlcnR5LWRlc2NcIjo1OSxcIi4vJC50YWdcIjo2OCxcIi4vJC53a3NcIjo3NX1dLDUxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgJHJlZGVmICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmJylcbiAgLCBoaWRlICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgRkZfSVRFUkFUT1IgICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgID0gJ3ZhbHVlcyc7XG5mdW5jdGlvbiByZXR1cm5UaGlzKCl7IHJldHVybiB0aGlzOyB9XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFKXtcbiAgcmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJykoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICBmdW5jdGlvbiBjcmVhdGVNZXRob2Qoa2luZCl7XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH1cbiAgdmFyIFRBRyAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBwcm90byAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCBfbmF0aXZlICA9IHByb3RvW1NZTUJPTF9JVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsIF9kZWZhdWx0ID0gX25hdGl2ZSB8fCBjcmVhdGVNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZihfbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90byhfZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHJlcXVpcmUoJy4vJC50YWcnKShJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBTWU1CT0xfSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZighTElCUkFSWSB8fCBGT1JDRSloaWRlKHByb3RvLCBTWU1CT0xfSVRFUkFUT1IsIF9kZWZhdWx0KTtcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSBfZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoS0VZUyksXG4gICAgICB2YWx1ZXM6ICBERUZBVUxUID09IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKFZBTFVFUyksXG4gICAgICBlbnRyaWVzOiBERUZBVUxUICE9IFZBTFVFUyA/IF9kZWZhdWx0IDogY3JlYXRlTWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpJHJlZGVmKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogcmVxdWlyZSgnLi8kLml0ZXItYnVnZ3knKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbn07XG59LHtcIi4vJFwiOjU1LFwiLi8kLmRlZlwiOjM0LFwiLi8kLmhhc1wiOjQyLFwiLi8kLmhpZGVcIjo0MyxcIi4vJC5pdGVyLWJ1Z2d5XCI6NDgsXCIuLyQuaXRlci1jcmVhdGVcIjo1MCxcIi4vJC5pdGVyYXRvcnNcIjo1NCxcIi4vJC5saWJyYXJ5XCI6NTcsXCIuLyQucmVkZWZcIjo2MCxcIi4vJC50YWdcIjo2OCxcIi4vJC53a3NcIjo3NX1dLDUyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBTWU1CT0xfSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgICAgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtTWU1CT0xfSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgaWYoIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltTWU1CT0xfSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XG4gICAgYXJyW1NZTUJPTF9JVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xufSx7XCIuLyQud2tzXCI6NzV9XSw1MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xufSx7fV0sNTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbn0se31dLDU1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xufSx7fV0sNTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xufSx7XCIuLyRcIjo1NSxcIi4vJC50by1vYmplY3RcIjo3Mn1dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbn0se31dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkcmVkZWYgPSByZXF1aXJlKCcuLyQucmVkZWYnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpJHJlZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xufSx7XCIuLyQucmVkZWZcIjo2MH1dLDU5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcbn0se31dLDYwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcbn0se1wiLi8kLmhpZGVcIjo0M31dLDYxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG59LHt9XSw2MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbmZ1bmN0aW9uIGNoZWNrKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgPyBmdW5jdGlvbihidWdneSwgc2V0KXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgICBzZXQoe30sIFtdKTtcbiAgICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICAgIHJldHVybiBPO1xuICAgICAgICB9O1xuICAgICAgfSgpXG4gICAgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG59LHtcIi4vJFwiOjU1LFwiLi8kLmFuLW9iamVjdFwiOjI4LFwiLi8kLmN0eFwiOjMzLFwiLi8kLmlzLW9iamVjdFwiOjQ3fV0sNjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG59LHtcIi4vJC5nbG9iYWxcIjo0MX1dLDY0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEMpe1xuICBpZihyZXF1aXJlKCcuLyQuc3VwcG9ydC1kZXNjJykgJiYgIShTUEVDSUVTIGluIEMpKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xufSx7XCIuLyRcIjo1NSxcIi4vJC5zdXBwb3J0LWRlc2NcIjo2NyxcIi4vJC53a3NcIjo3NX1dLDY1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbFxuICAgICAgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbn0se1wiLi8kLmRlZmluZWRcIjozNSxcIi4vJC50by1pbnRlZ2VyXCI6NzB9XSw2NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG59LHt9XSw2ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGhpZGUgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgVEFHICA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSloaWRlKGl0LCBUQUcsIHRhZyk7XG59O1xufSx7XCIuLyQuaGFzXCI6NDIsXCIuLyQuaGlkZVwiOjQzLFwiLi8kLndrc1wiOjc1fV0sNjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbmZ1bmN0aW9uIHJ1bigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59XG5mdW5jdGlvbiBsaXN0bmVyKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIE1vZGVybiBicm93c2Vycywgc2tpcCBpbXBsZW1lbnRhdGlvbiBmb3IgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCwgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xuICAvLyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG59LHtcIi4vJC5jb2ZcIjozMSxcIi4vJC5jdHhcIjozMyxcIi4vJC5kb20tY3JlYXRlXCI6MzYsXCIuLyQuZ2xvYmFsXCI6NDEsXCIuLyQuaHRtbFwiOjQ0LFwiLi8kLmludm9rZVwiOjQ1fV0sNzA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xufSx7fV0sNzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xufSx7XCIuLyQudG8taW50ZWdlclwiOjcwfV0sNzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIEVTNU9iamVjdCA9IHJlcXVpcmUoJy4vJC5lczUtb2JqZWN0JylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgcmVhbFN0cmluZyl7XG4gIHJldHVybiAocmVhbFN0cmluZyA/IE9iamVjdCA6IEVTNU9iamVjdCkoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiLi8kLmRlZmluZWRcIjozNSxcIi4vJC5lczUtb2JqZWN0XCI6Mzh9XSw3MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbn0se31dLDc0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcbn0se31dLDc1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCByZXF1aXJlKCcuLyQudWlkJykpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG59LHtcIi4vJC5nbG9iYWxcIjo0MSxcIi4vJC5zaGFyZWRcIjo2MyxcIi4vJC51aWRcIjo3M31dLDc2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gaXRbU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCAnQEBpdGVyYXRvciddXG4gICAgICB8fCBpdFtJVEVSQVRPUl1cbiAgICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG4gIH1cbn07XG59LHtcIi4vJC5jbGFzc29mXCI6MzAsXCIuLyQuY29yZVwiOjMyLFwiLi8kLmdsb2JhbFwiOjQxLFwiLi8kLml0ZXJhdG9yc1wiOjU0LFwiLi8kLndrc1wiOjc1fV0sNzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG59LHtcIi4vJC5hbi1vYmplY3RcIjoyOCxcIi4vJC5jb3JlXCI6MzIsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjc2fV0sNzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8gICAgICA9IE9iamVjdChpdClcbiAgICAsIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG4gIHJldHVybiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCAnQEBpdGVyYXRvcicpIGluIE9cbiAgICB8fCBJVEVSQVRPUiBpbiBPXG4gICAgfHwgaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XG59O1xufSx7XCIuLyQuY2xhc3NvZlwiOjMwLFwiLi8kLmNvcmVcIjozMixcIi4vJC5nbG9iYWxcIjo0MSxcIi4vJC5oYXNcIjo0MixcIi4vJC5pdGVyYXRvcnNcIjo1NCxcIi4vJC53a3NcIjo3NX1dLDc5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRkZWYgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UsIHRydWUpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIG1hcGZuICAgPSBhcmd1bWVudHNbMV1cbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbn0se1wiLi8kLmN0eFwiOjMzLFwiLi8kLmRlZlwiOjM0LFwiLi8kLmlzLWFycmF5LWl0ZXJcIjo0NixcIi4vJC5pdGVyLWNhbGxcIjo0OSxcIi4vJC5pdGVyLWRldGVjdFwiOjUyLFwiLi8kLnRvLWxlbmd0aFwiOjcxLFwiLi8kLnRvLW9iamVjdFwiOjcyLFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjo3Nn1dLDgwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzZXRVbnNjb3BlID0gcmVxdWlyZSgnLi8kLnVuc2NvcGUnKVxuICAsIHN0ZXAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgdG9PYmplY3QgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuc2V0VW5zY29wZSgna2V5cycpO1xuc2V0VW5zY29wZSgndmFsdWVzJyk7XG5zZXRVbnNjb3BlKCdlbnRyaWVzJyk7XG59LHtcIi4vJC5pdGVyLWRlZmluZVwiOjUxLFwiLi8kLml0ZXItc3RlcFwiOjUzLFwiLi8kLml0ZXJhdG9yc1wiOjU0LFwiLi8kLnRvLW9iamVjdFwiOjcyLFwiLi8kLnVuc2NvcGVcIjo3NH1dLDgxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLmFzc2lnbicpfSk7XG59LHtcIi4vJC5hc3NpZ25cIjoyOSxcIi4vJC5kZWZcIjozNH1dLDgyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY29yZSAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZm9yY2VkID0gMFxuICAgICwgbWV0aG9kID0ge307XG4gIG1ldGhvZFtLRVldID0gSUQgPT0gMCA/IGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMSA/IGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDIgPyBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMyA/IGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDQgPyBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA1ID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XG4gIH0gOiBJRCA9PSA2ID8gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XG4gIH0gOiBJRCA9PSA3ID8gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCwgdHJ1ZSkpO1xuICB9IDogSUQgPT0gOCA/IGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xuICB9IDogcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLmdldDtcbiAgdHJ5IHtcbiAgICBmbigneicpO1xuICB9IGNhdGNoKGUpe1xuICAgIGZvcmNlZCA9IDE7XG4gIH1cbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmb3JjZWQsICdPYmplY3QnLCBtZXRob2QpO1xufSk7XG59LHtcIi4vJFwiOjU1LFwiLi8kLmNvcmVcIjozMixcIi4vJC5kZWZcIjozNCxcIi4vJC5nZXQtbmFtZXNcIjo0MCxcIi4vJC5pcy1vYmplY3RcIjo0NyxcIi4vJC50by1vYmplY3RcIjo3Mn1dLDgzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV0sODQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIExJQlJBUlkgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjbGFzc29mICAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsICRkZWYgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgc3RyaWN0TmV3ICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc2V0UHJvdG8gICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXRcbiAgLCBzYW1lICAgICAgID0gcmVxdWlyZSgnLi8kLnNhbWUnKVxuICAsIHNwZWNpZXMgICAgPSByZXF1aXJlKCcuLyQuc3BlY2llcycpXG4gICwgU1BFQ0lFUyAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpXG4gICwgUkVDT1JEICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgncmVjb3JkJylcbiAgLCBQUk9NSVNFICAgID0gJ1Byb21pc2UnXG4gICwgcHJvY2VzcyAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgYXNhcCAgICAgICA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5uZXh0VGljayB8fCByZXF1aXJlKCcuLyQudGFzaycpLnNldFxuICAsIFAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBXcmFwcGVyO1xuXG5mdW5jdGlvbiB0ZXN0UmVzb2x2ZShzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGZ1bmN0aW9uKCl7fSk7XG4gIGlmKHN1Yil0ZXN0LmNvbnN0cnVjdG9yID0gT2JqZWN0O1xuICByZXR1cm4gUC5yZXNvbHZlKHRlc3QpID09PSB0ZXN0O1xufVxuXG52YXIgdXNlTmF0aXZlID0gZnVuY3Rpb24oKXtcbiAgdmFyIHdvcmtzID0gZmFsc2U7XG4gIGZ1bmN0aW9uIFAyKHgpe1xuICAgIHZhciBzZWxmID0gbmV3IFAoeCk7XG4gICAgc2V0UHJvdG8oc2VsZiwgUDIucHJvdG90eXBlKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICB0cnkge1xuICAgIHdvcmtzID0gUCAmJiBQLnJlc29sdmUgJiYgdGVzdFJlc29sdmUoKTtcbiAgICBzZXRQcm90byhQMiwgUCk7XG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcbiAgICAvLyBhY3R1YWwgRmlyZWZveCBoYXMgYnJva2VuIHN1YmNsYXNzIHN1cHBvcnQsIHRlc3QgdGhhdFxuICAgIGlmKCEoUDIucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uKCl7fSkgaW5zdGFuY2VvZiBQMikpe1xuICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWN0dWFsIFY4IGJ1ZywgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxNjJcbiAgICBpZih3b3JrcyAmJiByZXF1aXJlKCcuLyQuc3VwcG9ydC1kZXNjJykpe1xuICAgICAgdmFyIHRoZW5hYmxlVGhlbkdvdHRlbiA9IGZhbHNlO1xuICAgICAgUC5yZXNvbHZlKCQuc2V0RGVzYyh7fSwgJ3RoZW4nLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXsgdGhlbmFibGVUaGVuR290dGVuID0gdHJ1ZTsgfVxuICAgICAgfSkpO1xuICAgICAgd29ya3MgPSB0aGVuYWJsZVRoZW5Hb3R0ZW47XG4gICAgfVxuICB9IGNhdGNoKGUpeyB3b3JrcyA9IGZhbHNlOyB9XG4gIHJldHVybiB3b3Jrcztcbn0oKTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gaXNQcm9taXNlKGl0KXtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAodXNlTmF0aXZlID8gY2xhc3NvZihpdCkgPT0gJ1Byb21pc2UnIDogUkVDT1JEIGluIGl0KTtcbn1cbmZ1bmN0aW9uIHNhbWVDb25zdHJ1Y3RvcihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59XG5mdW5jdGlvbiBnZXRDb25zdHJ1Y3RvcihDKXtcbiAgdmFyIFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXTtcbiAgcmV0dXJuIFMgIT0gdW5kZWZpbmVkID8gUyA6IEM7XG59XG5mdW5jdGlvbiBpc1RoZW5hYmxlKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG5vdGlmeShyZWNvcmQsIGlzUmVqZWN0KXtcbiAgaWYocmVjb3JkLm4pcmV0dXJuO1xuICByZWNvcmQubiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHJlY29yZC5jO1xuICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gIGFzYXAuY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcbiAgICAgICwgb2sgICAgPSByZWNvcmQucyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICBmdW5jdGlvbiBydW4ocmVhY3Qpe1xuICAgICAgdmFyIGNiID0gb2sgPyByZWFjdC5vayA6IHJlYWN0LmZhaWxcbiAgICAgICAgLCByZXQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihjYil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXQgPSBjYiA9PT0gdHJ1ZSA/IHZhbHVlIDogY2IodmFsdWUpO1xuICAgICAgICAgIGlmKHJldCA9PT0gcmVhY3QuUCl7XG4gICAgICAgICAgICByZWFjdC5yZWooVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXQsIHJlYWN0LnJlcywgcmVhY3QucmVqKTtcbiAgICAgICAgICB9IGVsc2UgcmVhY3QucmVzKHJldCk7XG4gICAgICAgIH0gZWxzZSByZWFjdC5yZWoodmFsdWUpO1xuICAgICAgfSBjYXRjaChlcnIpe1xuICAgICAgICByZWFjdC5yZWooZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIGFzYXAuY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzVW5oYW5kbGVkKHJlY29yZC5wKSl7XG4gICAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHJlY29yZC5wKTtcbiAgICAgICAgICB9IGVsc2UgaWYoZ2xvYmFsLmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfSwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gaXNVbmhhbmRsZWQocHJvbWlzZSl7XG4gIHZhciByZWNvcmQgPSBwcm9taXNlW1JFQ09SRF1cbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdDtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdCA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3QuZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3QuUCkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gJHJlamVjdCh2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgcmVjb3JkLnMgPSAyO1xuICByZWNvcmQuYSA9IHJlY29yZC5jLnNsaWNlKCk7XG4gIG5vdGlmeShyZWNvcmQsIHRydWUpO1xufVxuZnVuY3Rpb24gJHJlc29sdmUodmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIGFzYXAuY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgICByZWNvcmQucyA9IDE7XG4gICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn1cblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCF1c2VOYXRpdmUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICB2YXIgcmVjb3JkID0ge1xuICAgICAgcDogc3RyaWN0TmV3KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAgIC8vIDwtIHByb21pc2VcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICAgIGE6IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgICAgczogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxuICAgICAgdjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICBoOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gaGFuZGxlZCByZWplY3Rpb25cbiAgICAgIG46IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgICB9O1xuICAgIHRoaXNbUkVDT1JEXSA9IHJlY29yZDtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCByZWNvcmQsIDEpLCBjdHgoJHJlamVjdCwgcmVjb3JkLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHJlY29yZCwgZXJyKTtcbiAgICB9XG4gIH07XG4gIHJlcXVpcmUoJy4vJC5taXgnKShQLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgUyA9IGFuT2JqZWN0KGFuT2JqZWN0KHRoaXMpLmNvbnN0cnVjdG9yKVtTUEVDSUVTXTtcbiAgICAgIHZhciByZWFjdCA9IHtcbiAgICAgICAgb2s6ICAgdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWUsXG4gICAgICAgIGZhaWw6IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgID8gb25SZWplY3RlZCAgOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciBwcm9taXNlID0gcmVhY3QuUCA9IG5ldyAoUyAhPSB1bmRlZmluZWQgPyBTIDogUCkoZnVuY3Rpb24ocmVzLCByZWope1xuICAgICAgICByZWFjdC5yZXMgPSBhRnVuY3Rpb24ocmVzKTtcbiAgICAgICAgcmVhY3QucmVqID0gYUZ1bmN0aW9uKHJlaik7XG4gICAgICB9KTtcbiAgICAgIHZhciByZWNvcmQgPSB0aGlzW1JFQ09SRF07XG4gICAgICByZWNvcmQuYy5wdXNoKHJlYWN0KTtcbiAgICAgIGlmKHJlY29yZC5hKXJlY29yZC5hLnB1c2gocmVhY3QpO1xuICAgICAgaWYocmVjb3JkLnMpbm90aWZ5KHJlY29yZCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGV4cG9ydFxuJGRlZigkZGVmLkcgKyAkZGVmLlcgKyAkZGVmLkYgKiAhdXNlTmF0aXZlLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnRhZycpKFAsIFBST01JU0UpO1xuc3BlY2llcyhQKTtcbnNwZWNpZXMoV3JhcHBlciA9IHJlcXVpcmUoJy4vJC5jb3JlJylbUFJPTUlTRV0pO1xuXG4vLyBzdGF0aWNzXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICF1c2VOYXRpdmUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgcmV0dXJuIG5ldyB0aGlzKGZ1bmN0aW9uKHJlcywgcmVqKXsgcmVqKHIpOyB9KTtcbiAgfVxufSk7XG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICghdXNlTmF0aXZlIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICByZXR1cm4gaXNQcm9taXNlKHgpICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKVxuICAgICAgPyB4IDogbmV3IHRoaXMoZnVuY3Rpb24ocmVzKXsgcmVzKHgpOyB9KTtcbiAgfVxufSk7XG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICEodXNlTmF0aXZlICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICBQLmFsbChpdGVyKVsnY2F0Y2gnXShmdW5jdGlvbigpe30pO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIHZhbHVlcyA9IFtdO1xuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihyZXMsIHJlail7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXMocmVzdWx0cyk7XG4gICAgICAgIH0sIHJlaik7XG4gICAgICB9KTtcbiAgICAgIGVsc2UgcmVzKHJlc3VsdHMpO1xuICAgIH0pO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDID0gZ2V0Q29uc3RydWN0b3IodGhpcyk7XG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKHJlcywgcmVqKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlcywgcmVqKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcbn0se1wiLi8kXCI6NTUsXCIuLyQuYS1mdW5jdGlvblwiOjI3LFwiLi8kLmFuLW9iamVjdFwiOjI4LFwiLi8kLmNsYXNzb2ZcIjozMCxcIi4vJC5jb3JlXCI6MzIsXCIuLyQuY3R4XCI6MzMsXCIuLyQuZGVmXCI6MzQsXCIuLyQuZm9yLW9mXCI6MzksXCIuLyQuZ2xvYmFsXCI6NDEsXCIuLyQuaXMtb2JqZWN0XCI6NDcsXCIuLyQuaXRlci1kZXRlY3RcIjo1MixcIi4vJC5saWJyYXJ5XCI6NTcsXCIuLyQubWl4XCI6NTgsXCIuLyQuc2FtZVwiOjYxLFwiLi8kLnNldC1wcm90b1wiOjYyLFwiLi8kLnNwZWNpZXNcIjo2NCxcIi4vJC5zdHJpY3QtbmV3XCI6NjUsXCIuLyQuc3VwcG9ydC1kZXNjXCI6NjcsXCIuLyQudGFnXCI6NjgsXCIuLyQudGFza1wiOjY5LFwiLi8kLnVpZFwiOjczLFwiLi8kLndrc1wiOjc1fV0sODU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xufSx7XCIuLyQuaXRlci1kZWZpbmVcIjo1MSxcIi4vJC5zdHJpbmctYXRcIjo2Nn1dLDg2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFNVUFBPUlRfREVTQyAgID0gcmVxdWlyZSgnLi8kLnN1cHBvcnQtZGVzYycpXG4gICwgJGRlZiAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgLCAkcmVkZWYgICAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZicpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUYWcgICAgICAgICA9IHJlcXVpcmUoJy4vJC50YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5rZXlvZicpXG4gICwgJG5hbWVzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBnZXREZXNjICAgICAgICA9ICQuZ2V0RGVzY1xuICAsIHNldERlc2MgICAgICAgID0gJC5zZXREZXNjXG4gICwgJGNyZWF0ZSAgICAgICAgPSAkLmNyZWF0ZVxuICAsIGdldE5hbWVzICAgICAgID0gJG5hbWVzLmdldFxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsIHNldHRlciAgICAgICAgID0gZmFsc2VcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgaXNFbnVtICAgICAgICAgPSAkLmlzRW51bVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCB1c2VOYXRpdmUgICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdC5wcm90b3R5cGU7XG5cbnZhciBzZXRTeW1ib2xEZXNjID0gU1VQUE9SVF9ERVNDID8gZnVuY3Rpb24oKXsgLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkXG4gIHRyeSB7XG4gICAgcmV0dXJuICRjcmVhdGUoc2V0RGVzYyh7fSwgSElEREVOLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBzZXREZXNjKHRoaXMsIEhJRERFTiwge3ZhbHVlOiBmYWxzZX0pW0hJRERFTl07XG4gICAgICB9XG4gICAgfSkpW0hJRERFTl0gfHwgc2V0RGVzYztcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gICAgICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgICAgIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgICAgIHNldERlc2MoaXQsIGtleSwgRCk7XG4gICAgICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbiAgICB9O1xuICB9XG59KCkgOiBzZXREZXNjO1xuXG5mdW5jdGlvbiB3cmFwKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSAkY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBTVVBQT1JUX0RFU0MgJiYgc2V0dGVyICYmIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN5bTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gJGNyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xufVxuZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9PYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKWRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyAkY3JlYXRlKGl0KSA6IGRlZmluZVByb3BlcnRpZXMoJGNyZWF0ZShpdCksIFApO1xufVxuZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldXG4gICAgPyBFIDogdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9PYmplY3QoaXQpLCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59XG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9PYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighdXNlTmF0aXZlKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50c1swXSkpO1xuICB9O1xuICAkcmVkZWYoJFN5bWJvbC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICQuY3JlYXRlICAgICA9IGNyZWF0ZTtcbiAgJC5pc0VudW0gICAgID0gcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjICAgID0gZGVmaW5lUHJvcGVydHk7XG4gICQuc2V0RGVzY3MgICA9IGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAkLmdldFN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoU1VQUE9SVF9ERVNDICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKXtcbiAgICAkcmVkZWYoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsIHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufTtcbi8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxuLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXG4vLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXG4vLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXG4vLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcbi8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcbi8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcbiQuZWFjaC5jYWxsKChcbiAgICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLCcgK1xuICAgICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuICApLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgc3ltID0gd2tzKGl0KTtcbiAgICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbiAgfVxuKTtcblxuc2V0dGVyID0gdHJ1ZTtcblxuJGRlZigkZGVmLkcgKyAkZGVmLlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuJGRlZigkZGVmLlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcblxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhdXNlTmF0aXZlLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6IGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiLi8kXCI6NTUsXCIuLyQuYW4tb2JqZWN0XCI6MjgsXCIuLyQuZGVmXCI6MzQsXCIuLyQuZW51bS1rZXlzXCI6MzcsXCIuLyQuZ2V0LW5hbWVzXCI6NDAsXCIuLyQuZ2xvYmFsXCI6NDEsXCIuLyQuaGFzXCI6NDIsXCIuLyQua2V5b2ZcIjo1NixcIi4vJC5saWJyYXJ5XCI6NTcsXCIuLyQucHJvcGVydHktZGVzY1wiOjU5LFwiLi8kLnJlZGVmXCI6NjAsXCIuLyQuc2hhcmVkXCI6NjMsXCIuLyQuc3VwcG9ydC1kZXNjXCI6NjcsXCIuLyQudGFnXCI6NjgsXCIuLyQudG8tb2JqZWN0XCI6NzIsXCIuLyQudWlkXCI6NzMsXCIuLyQud2tzXCI6NzV9XSw4NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcbn0se1wiLi8kLml0ZXJhdG9yc1wiOjU0LFwiLi9lczYuYXJyYXkuaXRlcmF0b3JcIjo4MH1dLDg4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogbW9kdWxlLmV4cG9ydHMsIF9fZXNNb2R1bGU6IHRydWUgfTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIi4vcnVudGltZVwiOjg5fV0sODk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfU3ltYm9sJGl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX1Byb21pc2UgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIilbXCJkZWZhdWx0XCJdO1xuXG4hKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF9TeW1ib2wkaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gX09iamVjdCRjcmVhdGUoKG91dGVyRm4gfHwgR2VuZXJhdG9yKS5wcm90b3R5cGUpO1xuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYgfHwgbnVsbCwgbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pKTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIC8vIFRoaXMgaW52b2tlIGZ1bmN0aW9uIGlzIHdyaXR0ZW4gaW4gYSBzdHlsZSB0aGF0IGFzc3VtZXMgc29tZVxuICAgIC8vIGNhbGxpbmcgZnVuY3Rpb24gKG9yIFByb21pc2UpIHdpbGwgaGFuZGxlIGV4Y2VwdGlvbnMuXG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW21ldGhvZF0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQgPyBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihpbnZva2VOZXh0LCBpbnZva2VUaHJvdykgOiBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgaW52b2tlTmV4dCA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgIHZhciBpbnZva2VUaHJvdyA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJ0aHJvd1wiKTtcbiAgICB2YXIgaW52b2tlUmV0dXJuID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInJldHVyblwiKTtcbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgdmFyIGVucXVldWVSZXN1bHQgPVxuICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KSA6IG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKGludm9rZShtZXRob2QsIGFyZykpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGVucXVldWVSZXN1bHQgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnlcbiAgICAgIC8vIGxhdGVyIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgIHByZXZpb3VzUHJvbWlzZSA9IGVucXVldWVSZXN1bHRbXCJjYXRjaFwiXShmdW5jdGlvbiAoaWdub3JlZCkge30pO1xuXG4gICAgICByZXR1cm4gZW5xdWV1ZVJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8IG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBHZW5TdGF0ZUNvbXBsZXRlZCA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgdGhpcy5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYgKHR5cGUgPT09IFwiYnJlYWtcIiB8fCB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8IHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4vLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4vLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3Rcbi8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG50eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHVuZGVmaW5lZCk7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCJfcHJvY2Vzc1wiOjkwLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIjo5LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiOjEwLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiOjExfV0sOTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cbn0se31dLDkxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoTXVzdGFjaGUpOyAvLyBzY3JpcHQsIHdzaCwgYXNwXG4gIH1cbn0odGhpcywgZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5IChtdXN0YWNoZSkge1xuXG4gIHZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwgKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAgICogd2hpY2ggbm9ybWFsbHkgcmV0dXJucyB0eXBlb2YgJ29iamVjdCdcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE51bGwgc2FmZSB3YXkgb2YgY2hlY2tpbmcgd2hldGhlciBvciBub3QgYW4gb2JqZWN0LFxuICAgKiBpbmNsdWRpbmcgaXRzIHByb3RvdHlwZSwgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGhhc1Byb3BlcnR5IChvYmosIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIChwcm9wTmFtZSBpbiBvYmopO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9pc3N1ZXMuYXBhY2hlLm9yZy9qaXJhL2Jyb3dzZS9DT1VDSERCLTU3N1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4OVxuICB2YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbiAgZnVuY3Rpb24gdGVzdFJlZ0V4cCAocmUsIHN0cmluZykge1xuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmUsIHN0cmluZyk7XG4gIH1cblxuICB2YXIgbm9uU3BhY2VSZSA9IC9cXFMvO1xuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKHN0cmluZykge1xuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJy8nOiAnJiN4MkY7J1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVzY2FwZUh0bWwgKHN0cmluZykge1xuICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBmdW5jdGlvbiBmcm9tRW50aXR5TWFwIChzKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHdoaXRlUmUgPSAvXFxzKi87XG4gIHZhciBzcGFjZVJlID0gL1xccysvO1xuICB2YXIgZXF1YWxzUmUgPSAvXFxzKj0vO1xuICB2YXIgY3VybHlSZSA9IC9cXHMqXFx9LztcbiAgdmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbiAgLyoqXG4gICAqIEJyZWFrcyB1cCB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBzdHJpbmcgaW50byBhIHRyZWUgb2YgdG9rZW5zLiBJZiB0aGUgYHRhZ3NgXG4gICAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAgICogb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIChlLmcuIFsgXCI8JVwiLCBcIiU+XCIgXSkuIE9mXG4gICAqIGNvdXJzZSwgdGhlIGRlZmF1bHQgaXMgdG8gdXNlIG11c3RhY2hlcyAoaS5lLiBtdXN0YWNoZS50YWdzKS5cbiAgICpcbiAgICogQSB0b2tlbiBpcyBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDQgZWxlbWVudHMuIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZVxuICAgKiBtdXN0YWNoZSBzeW1ib2wgdGhhdCB3YXMgdXNlZCBpbnNpZGUgdGhlIHRhZywgZS5nLiBcIiNcIiBvciBcIiZcIi4gSWYgdGhlIHRhZ1xuICAgKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gICAqIGFsbCB0ZXh0IHRoYXQgYXBwZWFycyBvdXRzaWRlIGEgc3ltYm9sIHRoaXMgZWxlbWVudCBpcyBcInRleHRcIi5cbiAgICpcbiAgICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICAgKiB3aGF0ZXZlciBlbHNlIHdhcyBpbnNpZGUgdGhlIHRhZyBiZXNpZGVzIHRoZSBvcGVuaW5nIHN5bWJvbC4gRm9yIHRleHQgdG9rZW5zXG4gICAqIHRoaXMgaXMgdGhlIHRleHQgaXRzZWxmLlxuICAgKlxuICAgKiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBlbGVtZW50cyBvZiB0aGUgdG9rZW4gYXJlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMsXG4gICAqIHJlc3BlY3RpdmVseSwgb2YgdGhlIHRva2VuIGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVG9rZW5zIHRoYXQgYXJlIHRoZSByb290IG5vZGUgb2YgYSBzdWJ0cmVlIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGFuXG4gICAqIGFycmF5IG9mIHRva2VucyBpbiB0aGUgc3VidHJlZSBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSBhdFxuICAgKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIGlmICghdGVtcGxhdGUpXG4gICAgICByZXR1cm4gW107XG5cbiAgICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgICB2YXIgdG9rZW5zID0gW107ICAgICAgIC8vIEJ1ZmZlciB0byBob2xkIHRoZSB0b2tlbnNcbiAgICB2YXIgc3BhY2VzID0gW107ICAgICAgIC8vIEluZGljZXMgb2Ygd2hpdGVzcGFjZSB0b2tlbnMgb24gdGhlIGN1cnJlbnQgbGluZVxuICAgIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gICAgdmFyIG5vblNwYWNlID0gZmFsc2U7ICAvLyBJcyB0aGVyZSBhIG5vbi1zcGFjZSBjaGFyIG9uIHRoZSBjdXJyZW50IGxpbmU/XG5cbiAgICAvLyBTdHJpcHMgYWxsIHdoaXRlc3BhY2UgdG9rZW5zIGFycmF5IGZvciB0aGUgY3VycmVudCBsaW5lXG4gICAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICAgIGZ1bmN0aW9uIHN0cmlwU3BhY2UgKCkge1xuICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcbiAgICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgICAgZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhY2VzID0gW107XG4gICAgICB9XG5cbiAgICAgIGhhc1RhZyA9IGZhbHNlO1xuICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgb3BlbmluZ1RhZ1JlLCBjbG9zaW5nVGFnUmUsIGNsb3NpbmdDdXJseVJlO1xuICAgIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgICBpZiAodHlwZW9mIHRhZ3NUb0NvbXBpbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0YWdzVG9Db21waWxlID0gdGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLCAyKTtcblxuICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xuXG4gICAgICBvcGVuaW5nVGFnUmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKSArICdcXFxccyonKTtcbiAgICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgY2xvc2luZ0N1cmx5UmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKCd9JyArIHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gICAgdmFyIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7XG5cbiAgICB2YXIgc3RhcnQsIHR5cGUsIHZhbHVlLCBjaHIsIHRva2VuLCBvcGVuU2VjdGlvbjtcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG5cbiAgICAgIC8vIE1hdGNoIGFueSB0ZXh0IGJldHdlZW4gdGFncy5cbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IHZhbHVlTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGNocikpIHtcbiAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9rZW5zLnB1c2goWyAndGV4dCcsIGNociwgc3RhcnQsIHN0YXJ0ICsgMSBdKTtcbiAgICAgICAgICBzdGFydCArPSAxO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlc3BhY2Ugb24gdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgICBpZiAoY2hyID09PSAnXFxuJylcbiAgICAgICAgICAgIHN0cmlwU3BhY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCB0aGUgb3BlbmluZyB0YWcuXG4gICAgICBpZiAoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKVxuICAgICAgICBicmVhaztcblxuICAgICAgaGFzVGFnID0gdHJ1ZTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdHlwZS5cbiAgICAgIHR5cGUgPSBzY2FubmVyLnNjYW4odGFnUmUpIHx8ICduYW1lJztcbiAgICAgIHNjYW5uZXIuc2Nhbih3aGl0ZVJlKTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdmFsdWUuXG4gICAgICBpZiAodHlwZSA9PT0gJz0nKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhbihjdXJseVJlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgICAgdHlwZSA9ICcmJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIGNsb3NpbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCB0YWcgYXQgJyArIHNjYW5uZXIucG9zKTtcblxuICAgICAgdG9rZW4gPSBbIHR5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3MgXTtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICcjJyB8fCB0eXBlID09PSAnXicpIHtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXG4gICAgICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInICsgdmFsdWUgKyAnXCIgYXQgJyArIHN0YXJ0KTtcblxuICAgICAgICBpZiAob3BlblNlY3Rpb25bMV0gIT09IHZhbHVlKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xuICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICAvLyBTZXQgdGhlIHRhZ3MgZm9yIHRoZSBuZXh0IHRpbWUgYXJvdW5kLlxuICAgICAgICBjb21waWxlVGFncyh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgaWYgKG9wZW5TZWN0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZXMgdGhlIHZhbHVlcyBvZiBjb25zZWN1dGl2ZSB0ZXh0IHRva2VucyBpbiB0aGUgZ2l2ZW4gYHRva2Vuc2AgYXJyYXlcbiAgICogdG8gYSBzaW5nbGUgdG9rZW4uXG4gICAqL1xuICBmdW5jdGlvbiBzcXVhc2hUb2tlbnMgKHRva2Vucykge1xuICAgIHZhciBzcXVhc2hlZFRva2VucyA9IFtdO1xuXG4gICAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4gJiYgbGFzdFRva2VuWzBdID09PSAndGV4dCcpIHtcbiAgICAgICAgICBsYXN0VG9rZW5bMV0gKz0gdG9rZW5bMV07XG4gICAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3F1YXNoZWRUb2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybXMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIGludG8gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUgd2hlcmVcbiAgICogdG9rZW5zIHRoYXQgcmVwcmVzZW50IGEgc2VjdGlvbiBoYXZlIHR3byBhZGRpdGlvbmFsIGl0ZW1zOiAxKSBhbiBhcnJheSBvZlxuICAgKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICAgKiB0ZW1wbGF0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGVuZCBvZiB0aGF0IHNlY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgbmVzdGVkVG9rZW5zID0gW107XG4gICAgdmFyIGNvbGxlY3RvciA9IG5lc3RlZFRva2VucztcbiAgICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgc2VjdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgY2FzZSAnIyc6XG4gICAgICBjYXNlICdeJzpcbiAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgY29sbGVjdG9yID0gdG9rZW5bNF0gPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgc2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuICAgICAgICBzZWN0aW9uWzVdID0gdG9rZW5bMl07XG4gICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgY2FzZSAtMTpcbiAgICAgIG1hdGNoID0gdGhpcy50YWlsO1xuICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDA6XG4gICAgICBtYXRjaCA9ICcnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnBvcyArPSBtYXRjaC5sZW5ndGg7XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgY29udGV4dCBieSB3cmFwcGluZyBhIHZpZXcgb2JqZWN0IGFuZFxuICAgKiBtYWludGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbnRleHQuXG4gICAqL1xuICBmdW5jdGlvbiBDb250ZXh0ICh2aWV3LCBwYXJlbnRDb250ZXh0KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLmNhY2hlID0geyAnLic6IHRoaXMudmlldyB9O1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNvbnRleHQgdXNpbmcgdGhlIGdpdmVuIHZpZXcgd2l0aCB0aGlzIGNvbnRleHRcbiAgICogYXMgdGhlIHBhcmVudC5cbiAgICovXG4gIENvbnRleHQucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoICh2aWV3KSB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbmFtZSBpbiB0aGlzIGNvbnRleHQsIHRyYXZlcnNpbmdcbiAgICogdXAgdGhlIGNvbnRleHQgaGllcmFyY2h5IGlmIHRoZSB2YWx1ZSBpcyBhYnNlbnQgaW4gdGhpcyBjb250ZXh0J3Mgdmlldy5cbiAgICovXG4gIENvbnRleHQucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cCAobmFtZSkge1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgICB2YXIgdmFsdWU7XG4gICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICB2YWx1ZSA9IGNhY2hlW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIG5hbWVzLCBpbmRleCwgbG9va3VwSGl0ID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IDApIHtcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRleHQudmlldztcbiAgICAgICAgICBuYW1lcyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBVc2luZyB0aGUgZG90IG5vdGlvbiBwYXRoIGluIGBuYW1lYCwgd2UgZGVzY2VuZCB0aHJvdWdoIHRoZVxuICAgICAgICAgICAqIG5lc3RlZCBvYmplY3RzLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogVG8gYmUgY2VydGFpbiB0aGF0IHRoZSBsb29rdXAgaGFzIGJlZW4gc3VjY2Vzc2Z1bCwgd2UgaGF2ZSB0b1xuICAgICAgICAgICAqIGNoZWNrIGlmIHRoZSBsYXN0IG9iamVjdCBpbiB0aGUgcGF0aCBhY3R1YWxseSBoYXMgdGhlIHByb3BlcnR5XG4gICAgICAgICAgICogd2UgYXJlIGxvb2tpbmcgZm9yLiBXZSBzdG9yZSB0aGUgcmVzdWx0IGluIGBsb29rdXBIaXRgLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogVGhpcyBpcyBzcGVjaWFsbHkgbmVjZXNzYXJ5IGZvciB3aGVuIHRoZSB2YWx1ZSBoYXMgYmVlbiBzZXQgdG9cbiAgICAgICAgICAgKiBgdW5kZWZpbmVkYCBhbmQgd2Ugd2FudCB0byBhdm9pZCBsb29raW5nIHVwIHBhcmVudCBjb250ZXh0cy5cbiAgICAgICAgICAgKiovXG4gICAgICAgICAgd2hpbGUgKHZhbHVlICE9IG51bGwgJiYgaW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbmFtZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgbG9va3VwSGl0ID0gaGFzUHJvcGVydHkodmFsdWUsIG5hbWVzW2luZGV4XSk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbbmFtZXNbaW5kZXgrK11dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRleHQudmlld1tuYW1lXTtcbiAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvb2t1cEhpdClcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGNhY2hlW25hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKVxuICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKHRoaXMudmlldyk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgV3JpdGVyIGtub3dzIGhvdyB0byB0YWtlIGEgc3RyZWFtIG9mIHRva2VucyBhbmQgcmVuZGVyIHRoZW0gdG8gYVxuICAgKiBzdHJpbmcsIGdpdmVuIGEgY29udGV4dC4gSXQgYWxzbyBtYWludGFpbnMgYSBjYWNoZSBvZiB0ZW1wbGF0ZXMgdG9cbiAgICogYXZvaWQgdGhlIG5lZWQgdG8gcGFyc2UgdGhlIHNhbWUgdGVtcGxhdGUgdHdpY2UuXG4gICAqL1xuICBmdW5jdGlvbiBXcml0ZXIgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhpcyB3cml0ZXIuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiBjbGVhckNhY2hlICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge307XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiBgdGVtcGxhdGVgIGFuZCByZXR1cm5zIHRoZSBhcnJheSBvZiB0b2tlbnNcbiAgICogdGhhdCBpcyBnZW5lcmF0ZWQgZnJvbSB0aGUgcGFyc2UuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICB2YXIgdG9rZW5zID0gY2FjaGVbdGVtcGxhdGVdO1xuXG4gICAgaWYgKHRva2VucyA9PSBudWxsKVxuICAgICAgdG9rZW5zID0gY2FjaGVbdGVtcGxhdGVdID0gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGFncyk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWdoLWxldmVsIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBnaXZlbiBgdGVtcGxhdGVgIHdpdGhcbiAgICogdGhlIGdpdmVuIGB2aWV3YC5cbiAgICpcbiAgICogVGhlIG9wdGlvbmFsIGBwYXJ0aWFsc2AgYXJndW1lbnQgbWF5IGJlIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZVxuICAgKiBuYW1lcyBhbmQgdGVtcGxhdGVzIG9mIHBhcnRpYWxzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLiBJdCBtYXlcbiAgICogYWxzbyBiZSBhIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBsb2FkIHBhcnRpYWwgdGVtcGxhdGVzIG9uIHRoZSBmbHlcbiAgICogdGhhdCB0YWtlcyBhIHNpbmdsZSBhcmd1bWVudDogdGhlIG5hbWUgb2YgdGhlIHBhcnRpYWwuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgdmFyIHRva2VucyA9IHRoaXMucGFyc2UodGVtcGxhdGUpO1xuICAgIHZhciBjb250ZXh0ID0gKHZpZXcgaW5zdGFuY2VvZiBDb250ZXh0KSA/IHZpZXcgOiBuZXcgQ29udGV4dCh2aWV3KTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgdGVtcGxhdGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb3ctbGV2ZWwgbWV0aG9kIHRoYXQgcmVuZGVycyB0aGUgZ2l2ZW4gYXJyYXkgb2YgYHRva2Vuc2AgdXNpbmdcbiAgICogdGhlIGdpdmVuIGBjb250ZXh0YCBhbmQgYHBhcnRpYWxzYC5cbiAgICpcbiAgICogTm90ZTogVGhlIGBvcmlnaW5hbFRlbXBsYXRlYCBpcyBvbmx5IGV2ZXIgdXNlZCB0byBleHRyYWN0IHRoZSBwb3J0aW9uXG4gICAqIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHdhcyBjb250YWluZWQgaW4gYSBoaWdoZXItb3JkZXIgc2VjdGlvbi5cbiAgICogSWYgdGhlIHRlbXBsYXRlIGRvZXNuJ3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucywgdGhpcyBhcmd1bWVudCBtYXlcbiAgICogYmUgb21pdHRlZC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zID0gZnVuY3Rpb24gcmVuZGVyVG9rZW5zICh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKSB7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuXG4gICAgdmFyIHRva2VuLCBzeW1ib2wsIHZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBzeW1ib2wgPSB0b2tlblswXTtcblxuICAgICAgaWYgKHN5bWJvbCA9PT0gJyMnKSB2YWx1ZSA9IHRoaXMucmVuZGVyU2VjdGlvbih0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHZhbHVlID0gdGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnPicpIHZhbHVlID0gdGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICcmJykgdmFsdWUgPSB0aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ25hbWUnKSB2YWx1ZSA9IHRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ3RleHQnKSB2YWx1ZSA9IHRoaXMucmF3VmFsdWUodG9rZW4pO1xuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uID0gZnVuY3Rpb24gcmVuZGVyU2VjdGlvbiAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBidWZmZXIgPSAnJztcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVuZGVyIGFuIGFyYml0cmFyeSB0ZW1wbGF0ZVxuICAgIC8vIGluIHRoZSBjdXJyZW50IGNvbnRleHQgYnkgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLlxuICAgIGZ1bmN0aW9uIHN1YlJlbmRlciAodGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSwgY29udGV4dCwgcGFydGlhbHMpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZm9yICh2YXIgaiA9IDAsIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBqIDwgdmFsdWVMZW5ndGg7ICsraikge1xuICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZVtqXSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICBpZiAodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUgIT09ICdzdHJpbmcnKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlJyk7XG5cbiAgICAgIC8vIEV4dHJhY3QgdGhlIHBvcnRpb24gb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgdGhlIHNlY3Rpb24gY29udGFpbnMuXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwoY29udGV4dC52aWV3LCBvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLCB0b2tlbls1XSksIHN1YlJlbmRlcik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQgPSBmdW5jdGlvbiByZW5kZXJJbnZlcnRlZCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgLy8gVXNlIEphdmFTY3JpcHQncyBkZWZpbml0aW9uIG9mIGZhbHN5LiBJbmNsdWRlIGVtcHR5IGFycmF5cy5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4NlxuICAgIGlmICghdmFsdWUgfHwgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWwgPSBmdW5jdGlvbiByZW5kZXJQYXJ0aWFsICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMpIHtcbiAgICBpZiAoIXBhcnRpYWxzKSByZXR1cm47XG5cbiAgICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHBhcnRpYWxzKSA/IHBhcnRpYWxzKHRva2VuWzFdKSA6IHBhcnRpYWxzW3Rva2VuWzFdXTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0aGlzLnBhcnNlKHZhbHVlKSwgY29udGV4dCwgcGFydGlhbHMsIHZhbHVlKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gZXNjYXBlZFZhbHVlICh0b2tlbiwgY29udGV4dCkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmF3VmFsdWUgPSBmdW5jdGlvbiByYXdWYWx1ZSAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW5bMV07XG4gIH07XG5cbiAgbXVzdGFjaGUubmFtZSA9ICdtdXN0YWNoZS5qcyc7XG4gIG11c3RhY2hlLnZlcnNpb24gPSAnMi4xLjMnO1xuICBtdXN0YWNoZS50YWdzID0gWyAne3snLCAnfX0nIF07XG5cbiAgLy8gQWxsIGhpZ2gtbGV2ZWwgbXVzdGFjaGUuKiBmdW5jdGlvbnMgdXNlIHRoaXMgd3JpdGVyLlxuICB2YXIgZGVmYXVsdFdyaXRlciA9IG5ldyBXcml0ZXIoKTtcblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBjYWNoZWQgdGVtcGxhdGVzIGluIHRoZSBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiBjbGVhckNhY2hlICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiB0ZW1wbGF0ZSBpbiB0aGUgZGVmYXVsdCB3cml0ZXIgYW5kIHJldHVybnMgdGhlXG4gICAqIGFycmF5IG9mIHRva2VucyBpdCBjb250YWlucy4gRG9pbmcgdGhpcyBhaGVhZCBvZiB0aW1lIGF2b2lkcyB0aGUgbmVlZCB0b1xuICAgKiBwYXJzZSB0ZW1wbGF0ZXMgb24gdGhlIGZseSBhcyB0aGV5IGFyZSByZW5kZXJlZC5cbiAgICovXG4gIG11c3RhY2hlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBgdGVtcGxhdGVgIHdpdGggdGhlIGdpdmVuIGB2aWV3YCBhbmQgYHBhcnRpYWxzYCB1c2luZyB0aGVcbiAgICogZGVmYXVsdCB3cml0ZXIuXG4gICAqL1xuICBtdXN0YWNoZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscykge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0IFwiJyArIHR5cGVTdHIodGVtcGxhdGUpICsgJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKTtcbiAgfTtcblxuICAvLyBUaGlzIGlzIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggMC40LnguLFxuICAvKmVzbGludC1kaXNhYmxlICovIC8vIGVzbGludCB3YW50cyBjYW1lbCBjYXNlZCBmdW5jdGlvbiBuYW1lXG4gIG11c3RhY2hlLnRvX2h0bWwgPSBmdW5jdGlvbiB0b19odG1sICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMsIHNlbmQpIHtcbiAgICAvKmVzbGludC1lbmFibGUqL1xuXG4gICAgdmFyIHJlc3VsdCA9IG11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2VuZCkpIHtcbiAgICAgIHNlbmQocmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBlc2NhcGluZyBmdW5jdGlvbiBzbyB0aGF0IHRoZSB1c2VyIG1heSBvdmVycmlkZSBpdC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8yNDRcbiAgbXVzdGFjaGUuZXNjYXBlID0gZXNjYXBlSHRtbDtcblxuICAvLyBFeHBvcnQgdGhlc2UgbWFpbmx5IGZvciB0ZXN0aW5nLCBidXQgYWxzbyBmb3IgYWR2YW5jZWQgdXNhZ2UuXG4gIG11c3RhY2hlLlNjYW5uZXIgPSBTY2FubmVyO1xuICBtdXN0YWNoZS5Db250ZXh0ID0gQ29udGV4dDtcbiAgbXVzdGFjaGUuV3JpdGVyID0gV3JpdGVyO1xuXG59KSk7XG5cbn0se31dLDkyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gbmFtZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBsaXN0ID0gdGhpcy5tYXBbbmFtZV1cbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgIGxpc3QgPSBbXVxuICAgICAgdGhpcy5tYXBbbmFtZV0gPSBsaXN0XG4gICAgfVxuICAgIGxpc3QucHVzaCh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgICByZXR1cm4gdmFsdWVzID8gdmFsdWVzWzBdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSB8fCBbXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IFtub3JtYWxpemVWYWx1ZSh2YWx1ZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLm1hcCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLm1hcFtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpXG4gICAgICB9LCB0aGlzKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZlxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIHJldHVybiByZWplY3RlZCA/IHJlamVjdGVkIDogUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KHVybCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBvcHRpb25zLmJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkob3B0aW9ucy5ib2R5KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBoZWFkZXJzKHhocikge1xuICAgIHZhciBoZWFkID0gbmV3IEhlYWRlcnMoKVxuICAgIHZhciBwYWlycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS50cmltKCkuc3BsaXQoJ1xcbicpXG4gICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHZhciBzcGxpdCA9IGhlYWRlci50cmltKCkuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHNwbGl0LnNoaWZ0KCkudHJpbSgpXG4gICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc6JykudHJpbSgpXG4gICAgICBoZWFkLmFwcGVuZChrZXksIHZhbHVlKVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy51cmwgPSBudWxsXG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzID8gb3B0aW9ucy5oZWFkZXJzIDogbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIC8vIFRPRE86IFJlcXVlc3QgY29uc3RydWN0b3Igc2hvdWxkIGFjY2VwdCBpbnB1dCwgaW5pdFxuICAgIHZhciByZXF1ZXN0XG4gICAgaWYgKFJlcXVlc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5wdXQpICYmICFpbml0KSB7XG4gICAgICByZXF1ZXN0ID0gaW5wdXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICBmdW5jdGlvbiByZXNwb25zZVVSTCgpIHtcbiAgICAgICAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXZvaWQgc2VjdXJpdHkgd2FybmluZ3Mgb24gZ2V0UmVzcG9uc2VIZWFkZXIgd2hlbiBub3QgYWxsb3dlZCBieSBDT1JTXG4gICAgICAgIGlmICgvXlgtUmVxdWVzdC1VUkw6L20udGVzdCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzKSA/IDIwNCA6IHhoci5zdGF0dXNcbiAgICAgICAgaWYgKHN0YXR1cyA8IDEwMCB8fCBzdGF0dXMgPiA1OTkpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMoeGhyKSxcbiAgICAgICAgICB1cmw6IHJlc3BvbnNlVVJMKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSgpO1xuXG59LHt9XSw5MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxufSx7fV0sOTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gICAgICAgIF9fXyAgICAgICAgICAgICAgICAgICAgIF9fXyAgICAgICAgICAgICAgICAgX19fICAgICAgICAgIF9fX1xuLy8gICAgICAgLyAgL1xcICAgICAgICBfX18gICAgICAgIC8gIC9cXCAgICAgICAgX19fICAgIC8gIC9cXCAgICAgICAgLyAgL1xcXG4vLyAgICAgIC8gIC86OlxcICAgICAgL19fL1xcICAgICAgLyAgLzo6XFwgICAgICAvICAvXFwgIC8gIC86OlxcICAgICAgLyAgLzo6XFxcbi8vICAgICAvICAvOi9cXDpcXCAgICAgXFwgIFxcOlxcICAgIC8gIC86L1xcOlxcICAgIC8gIC86LyAvICAvOi9cXDpcXCAgICAvICAvOi9cXDpcXFxuLy8gICAgLyAgLzovfi86OlxcICAgICBcXCAgXFw6XFwgIC8gIC86L34vOjpcXCAgLyAgLzovIC8gIC86L34vOjpcXCAgLyAgLzovfi86L1xuLy8gICAvX18vOi8gLzovXFw6XFxfX18gIFxcX19cXDpcXC9fXy86LyAvOi9cXDpcXC8gIC86OlxcL19fLzovIC86L1xcOlxcL19fLzovIC86L19fX1xuLy8gICBcXCAgXFw6XFwvOi9fX1xcL19fL1xcIHwgIHw6fFxcICBcXDpcXC86L19fXFwvX18vOi9cXDpcXCAgXFw6XFwvOi9fX1xcL1xcICBcXDpcXC86Ojo6Oi9cbi8vICAgIFxcICBcXDo6LyAgICBcXCAgXFw6XFx8ICB8OnwgXFwgIFxcOjovICAgIFxcX19cXC8gIFxcOlxcICBcXDo6LyAgICAgIFxcICBcXDo6L35+fn5cbi8vICAgICBcXCAgXFw6XFwgICAgIFxcICBcXDpcXF9ffDp8ICBcXCAgXFw6XFwgICAgICAgICBcXCAgXFw6XFwgIFxcOlxcICAgICAgIFxcICBcXDpcXFxuLy8gICAgICBcXCAgXFw6XFwgICAgIFxcX19cXDo6OjovICAgIFxcICBcXDpcXCAgICAgICAgIFxcX19cXC9cXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcXG4vLyAgICAgICBcXF9fXFwvICAgICAgICAgfn5+fiAgICAgIFxcX19cXC8gICAgICAgICAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcik7XG5cbnJlcXVpcmUoXCJ3aGF0d2ctZmV0Y2hcIik7XG5cbi8vKlxuLy8gVGhlIG5hbWUgb2YgY2xhc3NlcyByZWxldmFudCB0byBgQXZhdGFyYC5cbi8vIEBvYmplY3RcblxudmFyIGNsYXNzZXMgPSB7XG4gIC8vKlxuICAvLyBAcHJvcGVydHlcbiAgcm9vdDogXCJhdmF0YXJcIixcblxuICAvLypcbiAgLy8gQHByb3BlcnR5XG4gIGltYWdlOiBcImF2YXRhcl9faW1hZ2VcIixcblxuICAvLypcbiAgLy8gQHByb3BlcnR5XG4gIGluaXRpYWxzOiBcImF2YXRhcl9faW5pdGlhbHNcIlxufTtcblxuLy8qXG4vLyBUaGUgbmFtZSBvZiBzdGF0ZXMgcmVsZXZhbnQgdG8gYEF2YXRhcmAuXG4vLyBAb2JqZWN0XG5cbnZhciBzdGF0ZXMgPSB7XG4gIC8vKlxuICAvLyBAcHJvcGVydHlcbiAgaW1hZ2U6IHtcbiAgICB2aXNpYmxlOiBjbGFzc2VzLmltYWdlICsgXCItLWlzLXZpc2libGVcIlxuICB9XG59O1xuXG4vLypcbi8vIFRoZSBuYW1lIG9mIGF0dHJpYnV0ZXMgcmVsZXZhbnQgdG8gYEF2YXRhcmAuXG4vLyBAb2JqZWN0XG5cbnZhciBhdHRycyA9IHtcbiAgLy8qXG4gIC8vIEBwcm9wZXJ0eVxuICBwcm9maWxlX25hbWU6IFwiZGF0YS1wcm9maWxlLW5hbWVcIixcblxuICAvLypcbiAgLy8gQHByb3BlcnR5XG4gIHNlcnZpY2U6IFwiZGF0YS1zZXJ2aWNlXCJcbn07XG5cbi8vKlxuLy8gVGhlIG1pbmltdW0gdGltZSwgaW4gbWlsbGlzZWNvbmRzLCBiZWZvcmUgdGhlIGJhY2tncm91bmQgaW1hZ2VzIGZvciBhdmF0YXJzXG4vLyBzaG91bGQgYmUgZmFkZWQgaW50byB2aWV3LiBUaGlzIGlzIGRvbmUgdG8gcHJldmVudCBhbnkgc3VkZGVuIHZpc3VhbCBjaGFuZ2VzXG4vLyBpbW1lZGlhdGVseSBhZnRlciBwYWdlIGxvYWQuXG4vL1xuLy8gQHZhbHVlIDIwMFxuLy8gQHR5cGUgTnVtYmVyXG4vLyBAcHJpdmF0ZVxuXG52YXIgTUlOX1RJTUVfVE9fTE9BRCA9IDIwMDtcblxudmFyIEF2YXRhciwgc2hvd19pbWFnZTtcblxuLy8qXG4vLyBGYWRlcyB0aGUgaW1hZ2UgaW50byB2aWV3IHNtb290aGx5LiBUbyBwcmV2ZW50IHN1ZGRlbiBhcHBlYXJhbmNlIG9mIGltYWdlc1xuLy8gaW1tZWRpYXRlbHkgYWZ0ZXIgcGFnZSBsb2FkLCB0aGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgdGltZSB3aGVuIGl0IHdhc1xuLy8gaW5pdGlhbGl6ZWQgYW5kIHdhaXRzIGF0IGxlYXN0IGBNSU5fVElNRV9UT19MT0FEYCBhZnRlciB0aGF0IGJlZm9yZSBhcHBseWluZ1xuLy8gdGhlIHJlcXVpcmVkIGNsYXNzZXMuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEBwYXJhbSB7RE9NRWxlbWVudH0gaW1hZ2UgLSBUaGUgaW1hZ2UgdG8gcmV2ZWFsLlxuXG5zaG93X2ltYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKHN0YXRlcy5pbWFnZS52aXNpYmxlKTtcbiAgICB9LCBNYXRoLm1heCgwLCBNSU5fVElNRV9UT19MT0FEIC0gKERhdGUubm93KCkgLSBzdGFydCkpKTtcbiAgfTtcbn0pKCk7XG5cbi8vKlxuLy8gVGhlIGNvbnN0cnVjdG9yIGFyb3VuZCBhbiBhdmF0YXIgRE9NIG5vZGUuIFRoaXMgY29uc3RydWN0b3Igd2lsbCBjaGVjayBmb3Jcbi8vIHRoZSBzZXJ2aWNlIGZyb20gd2hpY2ggdGhlIGF2YXRhciBpbWFnZSBzaG91bGQgYmUgZmV0Y2hlZCBhbmQgZG8gaXRzIGJlc3QgdG9cbi8vIGdyYWIgdGhhdCBpbWFnZS5cbi8vXG4vLyBCZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBpbnRlcmFjdCB3aXRoIGFuIGBBdmF0YXJgLCB0aGVyZSBpcyBubyBwdWJsaWNcbi8vIGludGVyZmFjZSBmb3IgdGhpcyBjb21wb25lbnQuXG4vL1xuLy8gQGZhY3Rvcnlcbi8vXG4vLyBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGUgLSBUaGUgcm9vdCBvZiBhbiBBdmF0YXIgY29tcG9uZW50LlxuXG5BdmF0YXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgcHJvZmlsZV9uYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cnMucHJvZmlsZV9uYW1lKSxcbiAgICAgIGltYWdlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5pbWFnZSksXG4gICAgICBzZXJ2aWNlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cnMuc2VydmljZSk7XG5cbiAgc3dpdGNoIChzZXJ2aWNlKSB7XG4gICAgY2FzZSBcImdpdGh1YlwiOlxuICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1wiICsgcHJvZmlsZV9uYW1lKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZXNwb25zZS5hdmF0YXJfdXJsICsgXCIpXCI7XG4gICAgICAgIHNob3dfaW1hZ2UoaW1hZ2UpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJ0d2l0dGVyXCI6XG4gICAgY2FzZSBcImVtYWlsXCI6XG4gICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChodHRwOi8vYXZhdGFycy5pby9cIiArIHNlcnZpY2UgKyBcIi9cIiArIHByb2ZpbGVfbmFtZSArIFwiKVwiO1xuICAgICAgc2hvd19pbWFnZShpbWFnZSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLy8qXG4vLyBJbml0aWFsaXplcyB0aGUgYEF2YXRhcmAgY29tcG9uZW50LlxuLy9cbi8vIEBtZXRob2Rcbi8vIEBzdGF0aWNcbi8vXG4vLyBAcmVxdWlyZXMgYnVpbGRlcjo6QnVpbGRlclxuLy9cbi8vIEBhcmcge0hUTUxFbGVtZW50fSBbY29udGV4dCA9IGRvY3VtZW50XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRvIHNlYXJjaFxuLy8gZm9yIERPTSBub2RlcyB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIHRoZSByb290IG9mIGFuIFtgQXZhdGFyYF0oQGxpbmspXG4vLyBjb21wb25lbnQuXG5cbkF2YXRhci5pbml0ID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyW1wiZGVmYXVsdFwiXS5pbml0aWFsaXplX29uY2UoQXZhdGFyLCB7IG5hbWU6IGNsYXNzZXMucm9vdCB9KTtcblxuZXhwb3J0cy5jbGFzc2VzID0gY2xhc3NlcztcbmV4cG9ydHMuc3RhdGVzID0gc3RhdGVzO1xuZXhwb3J0cy5hdHRycyA9IGF0dHJzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdmF0YXI7XG5cbn0se1wiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCI6MTE1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTQsXCJ3aGF0d2ctZmV0Y2hcIjo5Mn1dLDk1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIFNlZTogaHR0cDovL3VwZGF0ZXMuaHRtbDVyb2Nrcy5jb20vMjAxNS8wNC9jdXQtYW5kLWNvcHktY29tbWFuZHNcblxuLy8gICAgICAgIF9fXyAgICAgICAgICBfX18gICAgICAgIF9fX19fICAgICAgICBfX19cbi8vICAgICAgIC8gIC9cXCAgICAgICAgLyAgL1xcICAgICAgLyAgLzo6XFwgICAgICAvICAvXFxcbi8vICAgICAgLyAgLzovICAgICAgIC8gIC86OlxcICAgIC8gIC86L1xcOlxcICAgIC8gIC86L19cbi8vICAgICAvICAvOi8gICAgICAgLyAgLzovXFw6XFwgIC8gIC86LyAgXFw6XFwgIC8gIC86LyAvXFxcbi8vICAgIC8gIC86LyAgX19fICAvICAvOi8gIFxcOlxcL19fLzovIFxcX19cXDp8LyAgLzovIC86L19cbi8vICAgL19fLzovICAvICAvXFwvX18vOi8gXFxfX1xcOlxcICBcXDpcXCAvICAvOi9fXy86LyAvOi8gL1xcXG4vLyAgIFxcICBcXDpcXCAvICAvOi9cXCAgXFw6XFwgLyAgLzovXFwgIFxcOlxcICAvOi9cXCAgXFw6XFwvOi8gLzovXG4vLyAgICBcXCAgXFw6XFwgIC86LyAgXFwgIFxcOlxcICAvOi8gIFxcICBcXDpcXC86LyAgXFwgIFxcOjovIC86L1xuLy8gICAgIFxcICBcXDpcXC86LyAgICBcXCAgXFw6XFwvOi8gICAgXFwgIFxcOjovICAgIFxcICBcXDpcXC86L1xuLy8gICAgICBcXCAgXFw6Oi8gICAgICBcXCAgXFw6Oi8gICAgICBcXF9fXFwvICAgICAgXFwgIFxcOjovXG4vLyAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvICAgICAgICAgICAgICAgICAgIFxcX19cXC9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfcmVnZW5lcmF0b3JSdW50aW1lID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2Nyb2xsX2NvbnRhaW5lciA9IHJlcXVpcmUoXCIuLi9zY3JvbGxfY29udGFpbmVyXCIpO1xuXG52YXIgX3Njcm9sbF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsX2NvbnRhaW5lcik7XG5cbnZhciBfdXRpbGl0aWVzRXZlbnRzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIik7XG5cbnZhciBfdXRpbGl0aWVzRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllc0V2ZW50cyk7XG5cbnZhciBfdXRpbGl0aWVzVWlfZXZlbnRzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy91aV9ldmVudHNcIik7XG5cbnZhciBfdXRpbGl0aWVzVWlfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllc1VpX2V2ZW50cyk7XG5cbnZhciBfdXRpbGl0aWVzVGV4dF9yYW5nZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvdGV4dF9yYW5nZVwiKTtcblxudmFyIF91dGlsaXRpZXNUZXh0X3JhbmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllc1RleHRfcmFuZ2UpO1xuXG52YXIgX3V0aWxpdGllc0J1aWxkZXIgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2J1aWxkZXJcIik7XG5cbnZhciBfdXRpbGl0aWVzQnVpbGRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsaXRpZXNCdWlsZGVyKTtcblxudmFyIF9pZnJhbWUgPSByZXF1aXJlKFwiLi4vaWZyYW1lXCIpO1xuXG52YXIgX3NlbGVjdCA9IHJlcXVpcmUoXCIuLi9zZWxlY3RcIik7XG5cbnZhciBfdXRpbGl0aWVzTWFya3VwID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9tYXJrdXBcIik7XG5cbnZhciBfdXRpbGl0aWVzUGFpbnRpbmcgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3BhaW50aW5nXCIpO1xuXG52YXIgY2xhc3NlcyA9IHtcbiAgcm9vdDogXCJjb2RlLWJsb2NrXCIsXG4gIGhlYWRlcjogXCJjb2RlLWJsb2NrX19oZWFkZXJcIixcbiAgY29kZTogXCJjb2RlLWJsb2NrX19jb2RlXCIsXG4gIHNlbGVjdDogXCJjb2RlLWJsb2NrX19kZW1vLXNlbGVjdG9yXCIsXG4gIGNvZGVfY29udGFpbmVyOiBcImNvZGUtYmxvY2tfX2NvZGUtY29udGFpbmVyXCIsXG4gIHRvZ2dsZXI6IFwiY29kZS1ibG9ja19fdG9nZ2xlclwiLFxuICBjb250ZW50OiBcImNvZGUtYmxvY2tfX2NvbnRlbnRcIixcbiAgaWZyYW1lOiBcImNvZGUtYmxvY2tfX2lmcmFtZVwiLFxuICBkZW1vX2NvbnRlbnQ6IFwiY29kZS1ibG9ja19fZGVtb19fY29udGVudFwiXG59O1xuXG52YXIgdmFyaWFudHMgPSB7XG4gIHJvb3Q6IHsgd2l0aF9kZW1vOiBjbGFzc2VzLnJvb3QgKyBcIi0td2l0aC1kZW1vXCIgfVxufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcm9vdDogeyBoaWRkZW46IGNsYXNzZXMucm9vdCArIFwiLS1pcy1oaWRkZW5cIiB9XG59O1xuXG52YXIgYXR0cnMgPSB7XG4gIGxhbmd1YWdlOiBcImRhdGEtY29kZS1ibG9jay1sYW5ndWFnZVwiLFxuICBjYWNoZWRfbWF4X2hlaWdodDogXCJkYXRhLWNhY2hlZC1tYXgtaGVpZ2h0XCJcbn07XG5cbnZhciBDb2RlQmxvY2ssIENvZGVDYWNoZXMsIGNsZWFuX2FuZF9oaWdobGlnaHRfY29kZSwgdXBkYXRlX2hlbHBlciwgdG9nZ2xlX2NvZGVfYmxvY2tfdmlzaWJpbGl0eSwgc2VsZWN0X2NvZGUsIGhpZGUsIHNob3csIGNhY2hlX2NvbnRlbnRfaGVpZ2h0LCBob29rX3VwX2lmcmFtZV9jb21tdW5pY2F0aW9uLCBhdHRhY2hfZXZlbnRfbGlzdGVuZXJzO1xuXG4vLypcbi8vIENsZWFucyBhIHN0cmluZyBvZiBjb2RlIGFuZCB1cGRhdGVzIHRoZSBzdHJpbmcgd2l0aCBzeW50YXggaGlnaGxpZ2h0aW5nXG4vLyBtYXJrdXAuXG4vL1xuLy8gQHBhcmFtIHtTdHJpbmd9IGNvZGUgLSBUaGUgcmF3IGNvZGUuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zID0ge31dIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBoaWdobGlnaHRpbmcgb3BlcmF0aW9uLlxuLy9cbi8vIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sYW5ndWFnZV9jb2RlID0gXCJodG1sXCJdXG4vLyBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHBhc3NlZCBjb2RlLiBUaGlzIGlzIHVzZWQgYnkgdGhlIHN5bnRheCBoaWdobGlnaHRlciB0b1xuLy8gcGljayB0aGUgYXBwcm9wcmlhdGUgaGlnaGxpZ2h0ZXIuXG4vL1xuLy8gQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb2xsYXBzZV9uZXdsaW5lcyA9IGZhbHNlXVxuLy8gV2hldGhlciBvciBub3QgdG8gY29tYmluZSBtdWx0aXBsZSBjb25zZWN1dGl2ZSBuZXdsaW5lcyBpbnRvIGEgc2luZ2xlIG5ld2xpbmUuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEByZXR1cm5zIFN0cmluZyAtIFRoZSBjbGVhbmVkIGFuZCBzeW50YXgtaGlnaGxpZ2h0ZWQgc3RyaW5nLlxuXG5jbGVhbl9hbmRfaGlnaGxpZ2h0X2NvZGUgPSBmdW5jdGlvbiAoY29kZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuICB2YXIgbGFuZ3VhZ2VfY29kZSA9IG9wdGlvbnMubGFuZ3VhZ2VfY29kZTtcblxuICBjb2RlID0gKDAsIF91dGlsaXRpZXNNYXJrdXAuY2xlYW4pKGNvZGUsIG9wdGlvbnMpO1xuICBpZiAoIWxhbmd1YWdlX2NvZGUgfHwgbGFuZ3VhZ2VfY29kZSA9PT0gXCJodG1sXCIpIHtcbiAgICBjb2RlID0gKDAsIF91dGlsaXRpZXNNYXJrdXAuaW5kZW50KShjb2RlKTtcbiAgfVxuICByZXR1cm4gKDAsIF91dGlsaXRpZXNNYXJrdXAuaGlnaGxpZ2h0KShjb2RlLCBvcHRpb25zKTtcbn07XG5cbi8vKlxuLy8gVXBkYXRlcyBoZWxwZXIgY29kZSAodGhhdCBpcywgYSB0ZW1wbGF0ZSBsYW5ndWFnZSB0aGF0IGdlbmVyYXRlcyBtYXJrdXApIGZvclxuLy8gY2hhbmdlcyBpbiBjbGFzc2VzIHRoYXQgaGF2ZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZXMgaW4gdGhlIGhlbHBlciBtYXJrdXAuXG4vLyBJdCBkb2VzIHRoaXMgYnkgc2VhcmNoaW5nIHRocm91Z2ggdGhlIGhlbHBlciBtYXJrdXAgZm9yIHRoZSBzeW1ib2wgdGhhdCBzZXRzXG4vLyBhIGdpdmVuIGNsYXNzICh0aGUgYHNldHRlcmApLCBhbmQgdGhlbiBhc3NpZ25zIHRoYXQgYSB2YWx1ZSBkZXBlbmRpbmcgb24gdGhlXG4vLyBuYXR1cmUgb2YgdGhlIGNoYW5nZS5cbi8vXG4vLyAtIElmIHRoZXJlIGlzIG5vIGBjb25zdGFudGAgZm9yIHRoZSBjaGFuZ2UsIHRoZSB2YWx1ZSBvZiB0aGUgYHNldHRlcmAgaXNcbi8vIGFzc3VtZWQgdG8gYmUgYHRydWVgIGlmIHRoZSBjbGFzcyBpcyBhY3RpdmUgYW5kIGBmYWxzZWAgb3RoZXJ3aXNlLlxuLy9cbi8vIC0gSWYgdGhlcmUgaXMgYSBgY29uc3RhbnRgLCB0aGlzIHZhbHVlIGlzIHVzZWQgd2hlbiBhIGNsYXNzIGlzIGFkZGVkLiBUaGVcbi8vIGNhY2hlIGlzIHJlcXVpcmVkIHRvIHN0b3JlIHZhbHVlcyBmb3Igd2hlbiBhIGBzZXR0ZXJgIHdpdGggYSBjb25zdGFudCBpc1xuLy8gcmVtb3ZlZCDigJQgdGhlIHZhbHVlIG9mIHRoZSBgc2V0dGVyYCBpcyB0aGVuIHJldHVybmVkIHRvIHRoZSBwcmV2aW91c1xuLy8gYGNvbnN0YW50YCwgd2hpY2ggaXMgc3RvcmVkIGluIHRoZSBjYWNoZS5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gY29kZSAgIC0gVGhlIHJhdyBjb2RlLlxuLy8gQHBhcmFtIHtPYmplY3R9IGNoYW5nZSAtIFRoZSBkZXRhaWxzIGFib3V0IHRoZSBjbGFzcyBjaGFuZ2UuIFRoaXMgc2hvdWxkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSB3aGV0aGVyIHRoZSBjbGFzcyB3YXMgYWRkZWQgb3IgcmVtb3ZlZCBhbmRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgb2YgdGhlIGBzZXR0ZXJzYCBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmFyaWF0aW9uLlxuLy8gQHBhcmFtIHtPYmplY3R9IGNhY2hlICAtIFRoZSBjYWNoZSBvZiBwcmV2aW91cyBjb25zdGFudCB2YWx1ZXMuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEByZXR1cm5zIFN0cmluZyAtIFRoZSBoZWxwZXIgY29kZSB3aXRoIHRoZSByZWxldmFudCBhdHRyaWJ1dGVzIHVwZGF0ZWQuXG5cbnVwZGF0ZV9oZWxwZXIgPSBmdW5jdGlvbiAoY29kZSwgY2hhbmdlLCBjYWNoZSkge1xuICB2YXIgYWRkLCBoZWxwZXJfcGFyYW0sIGNvbnN0YW50LCBoZWxwZXJfbWF0Y2hlciwgcmVnZXgsIGNvbnN0YW50c19mb3JfcGFyYW0sIGluZGV4LCByZXBsYWNlX3ZhbHVlLCBzZXRfYnksIGNvbnN0YW50X3JlcGxhY2VyLCBib29sZWFuX3JlcGxhY2VyO1xuXG4gIGFkZCA9ICEhY2hhbmdlLmFkZDtcblxuICBjb25zdGFudF9yZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1fcG9ydGlvbiwgY29uc3RhbnRfcG9ydGlvbikge1xuICAgIGNhY2hlW2hlbHBlcl9wYXJhbV0gPSBjYWNoZVtoZWxwZXJfcGFyYW1dIHx8IFtjb25zdGFudF9wb3J0aW9uXTtcblxuICAgIGlmIChjaGFuZ2UubWV0aG9kID09PSBcImFkZFwiKSB7XG4gICAgICBjYWNoZVtoZWxwZXJfcGFyYW1dLnB1c2goY29uc3RhbnQpO1xuICAgICAgcmV0dXJuIFwiXCIgKyBwYXJhbV9wb3J0aW9uICsgY29uc3RhbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0YW50c19mb3JfcGFyYW0gPSBjYWNoZVtoZWxwZXJfcGFyYW1dO1xuICAgICAgaWYgKCFjb25zdGFudHNfZm9yX3BhcmFtKSB7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cblxuICAgICAgaW5kZXggPSBjb25zdGFudHNfZm9yX3BhcmFtLmluZGV4T2YoY29uc3RhbnQpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3RhbnRzX2Zvcl9wYXJhbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICByZXBsYWNlX3ZhbHVlID0gY29uc3RhbnRzX2Zvcl9wYXJhbVtjb25zdGFudHNfZm9yX3BhcmFtLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIFwiXCIgKyBwYXJhbV9wb3J0aW9uICsgcmVwbGFjZV92YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgYm9vbGVhbl9yZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1fcG9ydGlvbikge1xuICAgIHJldHVybiBcIlwiICsgcGFyYW1fcG9ydGlvbiArIChhZGQgPyBcInRydWVcIiA6IFwiZmFsc2VcIik7XG4gIH07XG5cbiAgaWYgKCFjaGFuZ2Uuc2V0X2J5KSB7XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfZ2V0SXRlcmF0b3IoY2hhbmdlLnNldF9ieSksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHNldF9ieSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBjb25zdGFudCA9IHNldF9ieS5jb25zdGFudCB8fCBcIlwiO1xuICAgICAgaGVscGVyX3BhcmFtID0gc2V0X2J5LnNldHRlcjtcbiAgICAgIGhlbHBlcl9tYXRjaGVyID0gXCI6P1xcXCI/XCIgKyBoZWxwZXJfcGFyYW0ucmVwbGFjZShcIjpcIiwgXCJcIikucmVwbGFjZShcIj9cIiwgXCJcXFxcP1wiKSArIFwiXFxcIj86P1xcXFxzKig/Oj0+XFxcXHMqKT9cIjtcblxuICAgICAgaWYgKGNvbnN0YW50KSB7XG4gICAgICAgIC8vIElmIGEgdmFsdWUgd2FzIGFjdHVhbGx5IGRlY2xhcmVkIGZvciB0aGUgc2V0X2J5LCBmaW5kIHRoZSBjdXJyZW50IGNvbnN0YW50XG4gICAgICAgIC8vIGFuZCByZXBsYWNlIGl0IGFzIG5lZWRlZFxuICAgICAgICAvLyBrZXk6IFZBTFVFLCA6a2V5ID0+IFZBTFVFLCBcImtleVwiID0+IFZBTFVFLCA6XCJrZXlcIiA9PiBWQUxVRVxuXG4gICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIGhlbHBlcl9tYXRjaGVyICsgXCIpKFthLXpBLVpcXFxcLV86XSopXCIpO1xuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlZ2V4LCBjb25zdGFudF9yZXBsYWNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyBjb25zdGFudCBkZWNsYXJlZCwgYXNzdW1lIGl0IGlzIHRydWUvIGZhbHNlXG4gICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIGhlbHBlcl9tYXRjaGVyICsgXCIpKHRydWV8ZmFsc2UpXCIpO1xuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlZ2V4LCBib29sZWFuX3JlcGxhY2VyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2RlO1xufTtcblxuLy8qXG4vLyBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIGNvbnRhaW5lZCBgYnV0dG9uYCB0aGF0IHRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlXG4vLyBjb2RlIGJsb2NrLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGNsaWNrYCBldmVudCBvbiB0aGUgc2VsZWN0LlxuXG50b2dnbGVfY29kZV9ibG9ja192aXNpYmlsaXR5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBjb2RlX2Jsb2NrID0gQ29kZUJsb2NrW1wiZm9yXCJdKGV2ZW50LnRhcmdldCk7XG4gIGlmICghY29kZV9ibG9jaykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb2RlX2Jsb2NrLnRvZ2dsZSgpO1xufTtcblxuLy8qXG4vLyBIYW5kbGVzIGEgZm9jdXMgb24gdGhlIGNvZGUgYXJlYSBvZiBhIGNvZGUgYmxvY2sgYnkgc2VsZWN0aW5nIGFsbCBvZiB0aGVcbi8vIHRleHQgd2l0aGluIHRoZSBjb2RlIGJsb2NrLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGZvY3VzaW5gIGV2ZW50IG9uIHRoZSBjb2RlLlxuXG5zZWxlY3RfY29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgKDAsIF91dGlsaXRpZXNUZXh0X3JhbmdlMltcImRlZmF1bHRcIl0pKHVuZGVmaW5lZCkuc2VsZWN0X2FsbCgpO1xufTtcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5cIiArIGNsYXNzZXMudG9nZ2xlciwgdG9nZ2xlX2NvZGVfYmxvY2tfdmlzaWJpbGl0eSk7XG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLlwiICsgY2xhc3Nlcy5jb2RlLCBzZWxlY3RfY29kZSk7XG5cbi8vKlxuLy8gSGlkZXMgYSBjb2RlIGJsb2NrLlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYSBbYENvZGVCbG9ja2BdKEBsaW5rKS5cbi8vIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICh7fSkgLSBUaGUgb3B0aW9ucyBmb3IgaG93IHRoZSBjb2RlIGJsb2NrIHNob3VsZCBiZVxuLy8gaGlkZGVuLiBDdXJyZW50bHksIG9ubHkgdGhlIGB3aXRob3V0X3RyYW5zaXRpb25gICh3aGljaCBoaWRlcyBhdXRvbWF0aWNhbGx5XG4vLyByYXRoZXIgdGhhbiBzY2FsaW5nIHRoZSBoZWlnaHQgb2YgdGhlIGNvZGUgYmxvY2spIG9wdGlvbiBpcyBzdXBwb3J0ZWQuXG4vL1xuLy8gQHByaXZhdGVcblxuaGlkZSA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG4gIHZhciBub2RlID0gc2VsZi5ub2RlO1xuICB2YXIgdG9nZ2xlciA9IHNlbGYudG9nZ2xlcjtcbiAgdmFyIGNvbnRlbnQgPSBzZWxmLmNvbnRlbnQ7XG4gIHZhciB3aXRob3V0X3RyYW5zaXRpb24gPSBvcHRpb25zLndpdGhvdXRfdHJhbnNpdGlvbjtcbiAgdmFyIHNjcm9sbF9jb250YWluZXI7XG5cbiAgX3Njcm9sbF9jb250YWluZXIyW1wiZGVmYXVsdFwiXS5pbml0KCk7XG4gIHNjcm9sbF9jb250YWluZXIgPSBfc2Nyb2xsX2NvbnRhaW5lcjJbXCJkZWZhdWx0XCJdW1wiZm9yXCJdKG5vZGUpO1xuICBpZiAoc2Nyb2xsX2NvbnRhaW5lcikge1xuICAgIHNjcm9sbF9jb250YWluZXIubWFpbnRhaW5fY3VycmVudF9oZWlnaHQoKTtcbiAgfVxuXG4gIG5vZGUuY2xhc3NMaXN0LmFkZChzdGF0ZXMucm9vdC5oaWRkZW4pO1xuICBpZiAodG9nZ2xlcikge1xuICAgIHRvZ2dsZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPSBcIlNob3dcIjtcbiAgfVxuXG4gIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuXG4gIGlmICghd2l0aG91dF90cmFuc2l0aW9uKSB7XG4gICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1pbihjb250ZW50LnNjcm9sbEhlaWdodCwgcGFyc2VJbnQoY29udGVudC5nZXRBdHRyaWJ1dGUoYXR0cnMuY2FjaGVkX21heF9oZWlnaHQpLCAxMCkpICsgXCJweFwiO1xuICAgICgwLCBfdXRpbGl0aWVzUGFpbnRpbmcuZm9yY2VfcmVwYWludCkoY29udGVudCk7XG4gICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbDtcbiAgfVxuXG4gICgwLCBfdXRpbGl0aWVzUGFpbnRpbmcuZm9yY2VfcmVwYWludCkoY29udGVudCk7XG4gIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcblxuICBpZiAod2l0aG91dF90cmFuc2l0aW9uKSB7XG4gICAgKDAsIF91dGlsaXRpZXNQYWludGluZy5mb3JjZV9yZXBhaW50KShjb250ZW50KTtcbiAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBudWxsO1xuICB9XG5cbiAgc2VsZi5pc19oaWRkZW4gPSB0cnVlO1xufTtcblxuLy8qXG4vLyBTaG93cyBhIGNvZGUgYmxvY2suXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhIFtgQ29kZUJsb2NrYF0oQGxpbmspLlxuLy9cbi8vIEBwcml2YXRlXG5cbnNob3cgPSBmdW5jdGlvbiBjYWxsZWUkMCQwKHNlbGYpIHtcbiAgdmFyIG5vZGUsIHRvZ2dsZXIsIGNvbnRlbnQ7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLmFzeW5jKGZ1bmN0aW9uIGNhbGxlZSQwJDAkKGNvbnRleHQkMSQwKSB7XG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoY29udGV4dCQxJDAucHJldiA9IGNvbnRleHQkMSQwLm5leHQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgbm9kZSA9IHNlbGYubm9kZTtcbiAgICAgICAgdG9nZ2xlciA9IHNlbGYudG9nZ2xlcjtcbiAgICAgICAgY29udGVudCA9IHNlbGYuY29udGVudDtcblxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnJvb3QuaGlkZGVuKTtcbiAgICAgICAgc2VsZi5pc19oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHRvZ2dsZXIpIHtcbiAgICAgICAgICB0b2dnbGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gXCJIaWRlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0JDEkMC5uZXh0ID0gODtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoX3V0aWxpdGllc1VpX2V2ZW50czJbXCJkZWZhdWx0XCJdLnRyYW5zaXRpb24oY29udGVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gTWF0aC5taW4oY29udGVudC5zY3JvbGxIZWlnaHQsIHBhcnNlSW50KGNvbnRlbnQuZ2V0QXR0cmlidXRlKGF0dHJzLmNhY2hlZF9tYXhfaGVpZ2h0KSwgMTApKSArIFwicHhcIjtcbiAgICAgICAgfSkpO1xuXG4gICAgICBjYXNlIDg6XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuXG4gICAgICBjYXNlIDk6XG4gICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgIHJldHVybiBjb250ZXh0JDEkMC5zdG9wKCk7XG4gICAgfVxuICB9LCBudWxsLCB0aGlzKTtcbn07XG5cbi8vKlxuLy8gQ2FjaGVzIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBtYWluIGNvbnRlbnQgYXJlYSBvZiBhIGNvZGUgYmxvY2suIFRoaXMgaXMgZG9uZVxuLy8gc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBmcm9tIGhpZGRlbiB0byBzaG93biBjYXBzIG91dCBhdCB0aGUgYG1heC1oZWlnaHRgXG4vLyBzcGVjaWZpZWQgaW4gQ1NTLlxuLy9cbi8vIEluIG9yZGVyIHRvIGFsbG93IHRoZSBjb2RlIGFyZWFzIHRvIHNjcm9sbCwgYW4gYXBwcm9wcmlhdGUgbWF4LWhlaWdodCBpcyBhbHNvXG4vLyBzZXQgb24gdGhlbS5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGEgW2BDb2RlQmxvY2tgXShAbGluaykuXG4vL1xuLy8gQHByaXZhdGVcblxuY2FjaGVfY29udGVudF9oZWlnaHQgPSBmdW5jdGlvbiAoc2VsZikge1xuICB2YXIgbm9kZSA9IHNlbGYubm9kZTtcbiAgdmFyIGNvbnRlbnQgPSBzZWxmLmNvbnRlbnQ7XG4gIHZhciBtYXhfaGVpZ2h0O3ZhciBoZWFkZXI7dmFyIGhlYWRlcl9oZWlnaHQ7dmFyIG1heF9jb2RlX2hlaWdodDt2YXIgY29kZV9jb250YWluZXI7XG5cbiAgbWF4X2hlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRlbnQpLm1heEhlaWdodCwgMTApO1xuXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKGF0dHJzLmNhY2hlZF9tYXhfaGVpZ2h0LCBtYXhfaGVpZ2h0KTtcblxuICBoZWFkZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLmhlYWRlcik7XG4gIGhlYWRlcl9oZWlnaHQgPSBoZWFkZXIgPyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDogMDtcbiAgbWF4X2NvZGVfaGVpZ2h0ID0gbWF4X2hlaWdodCAtIGhlYWRlcl9oZWlnaHQgKyBcInB4XCI7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLmNvZGVfY29udGFpbmVyKSkpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgIGNvZGVfY29udGFpbmVyID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICBjb2RlX2NvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBtYXhfY29kZV9oZWlnaHQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLypcbi8vIERvZXMgYWxsIG9mIHRoZSBuZWNlc3Nhcnkgd29yayB0byBtYW5hZ2UgdGhlIHR3by13YXkgY29tbXVuaWNhdGlvbiBiZXR3ZWVuXG4vLyBhIGNvZGUgYmxvY2sgY29ubmVjdGVkIHRvIGFuIGBpZnJhbWVgIGFuZCB0aGF0IGBpZnJhbWVgLiBUaGlzIGluY2x1ZGVzXG4vLyBsaXN0ZW5pbmcgZm9yIGNoYW5nZXMgdG8gbWFya3VwIG9mIHRoZSBhc3NvY2lhdGVkIGRlbW8gYW5kIHRyaWdnZXJpbmcgYW5cbi8vIGludGlhbCBtYXJrdXAgcmVxdWVzdCB0byBnZXQgdGhlIG1vc3QgdXAtdG8tZGF0ZSByZXByZXNlbnRhdGlvbiBwb3NzaWJsZS5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGEgW2BDb2RlQmxvY2tgXShAbGluaykuXG4vL1xuLy8gQHByaXZhdGVcblxuaG9va191cF9pZnJhbWVfY29tbXVuaWNhdGlvbiA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBjb21tdW5pY2F0b3IgPSAoMCwgX2lmcmFtZS5Db21tdW5pY2F0b3IpKCksXG4gICAgICByZWdpc3RlcmVkID0gY29tbXVuaWNhdG9yLnJlZ2lzdGVyLmZyb21fbm9kZShzZWxmLm5vZGUpLFxuICAgICAgaGFuZGxlX21hcmt1cF9jaGFuZ2UsXG4gICAgICBoYW5kbGVfY2xhc3NfY2hhbmdlO1xuXG4gIGlmICghcmVnaXN0ZXJlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZV9tYXJrdXBfY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5odG1sIHx8ICFzZWxmLmNvZGVfY2FjaGVzLm1hcmt1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxmLmNvZGVfY2FjaGVzLm1hcmt1cC5jb2RlID0gZXZlbnQuaHRtbDtcbiAgfTtcblxuICBoYW5kbGVfY2xhc3NfY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFzZWxmLmNvZGVfY2FjaGVzLmhlbHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGV0YWlscy5hZGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQuZGV0YWlscy5hZGQgPSBldmVudC5hZGQ7XG4gICAgfVxuICAgIHNlbGYuY29kZV9jYWNoZXMuaGVscGVyLnVwZGF0ZShldmVudC5kZXRhaWxzKTtcbiAgfTtcblxuICBjb21tdW5pY2F0b3Iub24oX3V0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnR5cGVzLm1hcmt1cF9yZXF1ZXN0LCBoYW5kbGVfbWFya3VwX2NoYW5nZSk7XG4gIGNvbW11bmljYXRvci5vbihfdXRpbGl0aWVzRXZlbnRzMltcImRlZmF1bHRcIl0udHlwZXMubWFya3VwX2NoYW5nZSwgaGFuZGxlX21hcmt1cF9jaGFuZ2UpO1xuICBjb21tdW5pY2F0b3Iub24oX3V0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnR5cGVzLmNsYXNzX2NoYW5nZSwgaGFuZGxlX2NsYXNzX2NoYW5nZSk7XG5cbiAgY29tbXVuaWNhdG9yLnRyaWdnZXIoX3V0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnR5cGVzLm1hcmt1cF9yZXF1ZXN0KTtcbiAgcmV0dXJuIGNvbW11bmljYXRvcjtcbn07XG5cbmF0dGFjaF9ldmVudF9saXN0ZW5lcnMgPSBmdW5jdGlvbiAoc2VsZikge1xuICB2YXIgc2VsZWN0ID0gc2VsZi5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBfc2VsZWN0LmNsYXNzZXMucm9vdCk7XG5cbiAgaWYgKHNlbGVjdCAmJiBzZWxmLmNvbW11bmljYXRvcikge1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc2VsZi5jb21tdW5pY2F0b3IudHJpZ2dlcihfdXRpbGl0aWVzRXZlbnRzMltcImRlZmF1bHRcIl0udHlwZXMubWFya3VwX3JlcXVlc3QsIHtcbiAgICAgICAgZGVtbzogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8qXG4vLyBBbiBBUEkgZm9yIGNhY2hlaW5nLCB1cGRhdGluZywgYW5kIGhpZ2hsaWdodGluZyBjb2RlIHdpdGhpbiBhIGNvZGUgYmxvY2suXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBtYWluIGNvZGUgYmxvY2suXG4vL1xuLy8gQHByaXZhdGVcbi8vIEBmYWN0b3J5XG5cbkNvZGVDYWNoZXMgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgbGFuZ3VhZ2VzID0ge1xuICAgIG1hcmt1cDogW1wiaHRtbFwiXSxcbiAgICBoZWxwZXI6IFtcImVyYlwiLCBcImhhbWxcIiwgXCJzbGltXCJdXG4gIH07XG5cbiAgdmFyIENvZGVDYWNoZTtcblxuICBDb2RlQ2FjaGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgbGFuZ3VhZ2UgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRycy5sYW5ndWFnZSkgfHwgXCJodG1sXCIsXG4gICAgICAgIGRvbV9jb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiY29kZVwiKSxcbiAgICAgICAgY29kZSA9IGRvbV9jb2RlLmlubmVySFRNTCxcbiAgICAgICAgaGVscGVyX2NhY2hlID0gbnVsbCxcbiAgICAgICAgY29kZV9jYWNoZTtcblxuICAgIGNvZGVfY2FjaGUgPSBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe1xuICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiBoaWdobGlnaHQoKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY29kZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gY29kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3X2NvZGUpIHtcbiAgICAgICAgICBjb2RlID0gbmV3X2NvZGU7XG4gICAgICAgICAgZG9tX2NvZGUuaW5uZXJIVE1MID0gY2xlYW5fYW5kX2hpZ2hsaWdodF9jb2RlKG5ld19jb2RlLCB7XG4gICAgICAgICAgICBsYW5ndWFnZV9jb2RlOiBsYW5ndWFnZSxcbiAgICAgICAgICAgIGNvbGxhcHNlX25ld2xpbmVzOiBvcHRpb25zLmdlbmVyYXRlZF9mcm9tX2hlbHBlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvZGVfY2FjaGUuaGlnaGxpZ2h0KCk7XG5cbiAgICBpZiAobGFuZ3VhZ2VzLmhlbHBlci5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcbiAgICAgIGhlbHBlcl9jYWNoZSA9IHt9O1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29kZV9jYWNoZSwgXCJ1cGRhdGVcIiwge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoY2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5jb2RlID0gdXBkYXRlX2hlbHBlcih0aGlzLmNvZGUsIGNoYW5nZSwgaGVscGVyX2NhY2hlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGVfY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGNvZGVfbm9kZXMsIGNvZGVfY2FjaGVzLCBhcGksIGluZGV4O1xuXG4gICAgY29kZV9ub2RlcyA9IF9BcnJheSRmcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIGNsYXNzZXMuY29kZSkpO1xuICAgIGNvZGVfY2FjaGVzID0gY29kZV9ub2Rlcy5tYXAoZnVuY3Rpb24gKGNvZGVfbm9kZSkge1xuICAgICAgcmV0dXJuIENvZGVDYWNoZShjb2RlX25vZGUsIHsgZ2VuZXJhdGVkX2Zyb21faGVscGVyOiBjb2RlX25vZGVzLmxlbmd0aCA+IDEgfSk7XG4gICAgfSk7XG5cbiAgICBhcGkgPSBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe1xuXG4gICAgICBsZW5ndGg6IGNvZGVfY2FjaGVzLmxlbmd0aFxuICAgIH0sIHtcbiAgICAgIG1hcmt1cDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gY29kZV9jYWNoZXMuZmlsdGVyKGZ1bmN0aW9uIChjb2RlX2NhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLm1hcmt1cC5pbmNsdWRlcyhjb2RlX2NhY2hlLmxhbmd1YWdlKTtcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgaGVscGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBjb2RlX2NhY2hlcy5maWx0ZXIoZnVuY3Rpb24gKGNvZGVfY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuaGVscGVyLmluY2x1ZGVzKGNvZGVfY2FjaGUubGFuZ3VhZ2UpO1xuICAgICAgICAgIH0pWzBdO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGNvZGVfY2FjaGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShhcGksIGluZGV4LCB7IHZhbHVlOiBjb2RlX2NhY2hlc1tpbmRleF0gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcbn0pKCk7XG5cbi8vKlxuLy8gVGhlIGNvbnN0cnVjdG9yIGFyb3VuZCBhIGNvZGUgYmxvY2suXG4vL1xuLy8gQGZhY3Rvcnlcbi8vIEBwdWJsaWNcbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIG5vZGUgd2l0aCB0aGUgYGNvZGUtYmxvY2tgIHJvb3QgY2xhc3MuXG5cbkNvZGVCbG9jayA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBzZWxmLCBhcGksIHRvZ2dsZTtcblxuICBzZWxmID0ge1xuICAgIG5vZGU6IG5vZGUsXG4gICAgaXNfaGlkZGVuOiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMucm9vdC5oaWRkZW4pLFxuICAgIHRvZ2dsZXI6IG5vZGUucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzZXMudG9nZ2xlciksXG4gICAgY29udGVudDogbm9kZS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5jb250ZW50KSxcbiAgICBjb2RlX2NhY2hlczogQ29kZUNhY2hlcyhub2RlKVxuICB9O1xuXG4gIHNlbGYuY29tbXVuaWNhdG9yID0gaG9va191cF9pZnJhbWVfY29tbXVuaWNhdGlvbihzZWxmKTtcblxuICBhdHRhY2hfZXZlbnRfbGlzdGVuZXJzKHNlbGYpO1xuXG4gIGlmIChzZWxmLmlzX2hpZGRlbikge1xuICAgIGhpZGUoc2VsZiwgeyB3aXRob3V0X3RyYW5zaXRpb246IHRydWUgfSk7XG4gIH1cbiAgaWYgKHNlbGYudG9nZ2xlcikge1xuICAgIGNhY2hlX2NvbnRlbnRfaGVpZ2h0KHNlbGYpO1xuICB9XG5cbiAgLy8qXG4gIC8vIFRvZ2dsZXMgdGhlIGNvZGUgYmxvY2suXG4gIC8vXG4gIC8vIEBtZXRob2RcblxuICB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlbGYuaXNfaGlkZGVuID8gc2hvdyhzZWxmKSA6IGhpZGUoc2VsZik7XG4gIH07XG4gIGFwaSA9IHsgdG9nZ2xlOiB0b2dnbGUgfTtcblxuICByZXR1cm4gYXBpO1xufTtcblxuQ29kZUJsb2NrLmluaXQgPSBfdXRpbGl0aWVzQnVpbGRlcjJbXCJkZWZhdWx0XCJdLmluaXRpYWxpemVfb25jZShDb2RlQmxvY2ssIHsgbmFtZTogY2xhc3Nlcy5yb290LCBjYWNoZTogdHJ1ZSB9KTtcblxuZXhwb3J0cy5jbGFzc2VzID0gY2xhc3NlcztcbmV4cG9ydHMuc3RhdGVzID0gc3RhdGVzO1xuZXhwb3J0cy52YXJpYW50cyA9IHZhcmlhbnRzO1xuZXhwb3J0cy5hdHRycyA9IGF0dHJzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2RlQmxvY2s7XG5cbn0se1wiLi4vLi4vdXRpbGl0aWVzL2J1aWxkZXJcIjoxMTUsXCIuLi8uLi91dGlsaXRpZXMvZXZlbnRzXCI6MTE4LFwiLi4vLi4vdXRpbGl0aWVzL21hcmt1cFwiOjEyMCxcIi4uLy4uL3V0aWxpdGllcy9wYWludGluZ1wiOjEyMyxcIi4uLy4uL3V0aWxpdGllcy90ZXh0X3JhbmdlXCI6MTI3LFwiLi4vLi4vdXRpbGl0aWVzL3VpX2V2ZW50c1wiOjEyOCxcIi4uL2lmcmFtZVwiOjk5LFwiLi4vc2Nyb2xsX2NvbnRhaW5lclwiOjEwNSxcIi4uL3NlbGVjdFwiOjEwNixcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoyLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiOjYsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiOjcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNCxcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIjo4OH1dLDk2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxpdGllc0V2ZW50cyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvZXZlbnRzXCIpO1xuXG52YXIgX3V0aWxpdGllc0V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsaXRpZXNFdmVudHMpO1xuXG52YXIgX3V0aWxpdGllc1VpX2V2ZW50cyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvdWlfZXZlbnRzXCIpO1xuXG52YXIgX3V0aWxpdGllc1VpX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsaXRpZXNVaV9ldmVudHMpO1xuXG52YXIgX2lmcmFtZSA9IHJlcXVpcmUoXCIuLi9pZnJhbWVcIik7XG5cbi8vKlxuLy8gVGhlIG5hbWUgb2YgY2xhc3NlcyByZWxldmFudCB0byBgRGVtb2AuXG4vLyBAb2JqZWN0XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcImRlbW9cIixcbiAgc2VjdGlvbjogXCJkZW1vX19zZWN0aW9uXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiXG59O1xuXG52YXIgRGVtbywgY3JlYXRlX3NlbGYsIHNldF9jb3JyZWN0X2JhY2tncm91bmRfY29sb3IsIGFsbG9jYXRlX21pbmltdW1faGVpZ2h0O1xuXG4vLypcbi8vIFRoZSBkZWxheSBhZnRlciBhIGNoYW5nZSBpbiBtYXJrdXAgdG8ga2VlcCB0cmFjayBvZiBoZWlnaHQgY2hhbmdlcyBhbmRcbi8vIGNvbW11bmljYXRlIHRoZW0gdG8gdGhlIGF0dGFjaGVkIFtgSWZyYW1lYF0oQGxpbmspLlxuLy9cbi8vIEB0eXBlIE51bWJlclxuLy8gQHZhbHVlIDEwMDBcblxudmFyIEhFSUdIVF9DSEFOR0VfV0FUQ0hfRFVSQVRJT04gPSAxMDAwO1xuXG4vLypcbi8vIFVwZGF0ZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHBhcmVudCBmb3IgdGhlIGRlbW8gdG8gbWF0Y2ggdGhlXG4vLyBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBsYXN0IHNlY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UsIGR1cmluZyB0aGVcbi8vIHRyYW5zaXRpb24gZnJvbSBhIGxhcmdlciBzaXplIHRvIGEgc21hbGxlciBzaXplLCBub3QgZG9pbmcgdGhpcyB3b3VsZCBzaG93XG4vLyB3aGl0ZSBiZWxvdyBhbGwgb2YgdGhlIGRlbW8gc2VjdGlvbnMgcmVnYXJkbGVzcyBvZiB0aGVpciBjb2xvci5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBiYXNlIGBEZW1vYCBub2RlLlxuXG5zZXRfY29ycmVjdF9iYWNrZ3JvdW5kX2NvbG9yID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSxcbiAgICAgIHNlY3Rpb25zID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgY2xhc3Nlcy5zZWN0aW9uKSxcbiAgICAgIGxhc3Rfc2VjdGlvbiA9IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdO1xuXG4gIHBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsYXN0X3NlY3Rpb24pLmJhY2tncm91bmRDb2xvcjtcbn07XG5cbi8vKlxuLy8gU3ByZWFkcyB0aGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIHRvdGFsIGRlbW8gYmV0d2VlbiB0aGUgc2VjdGlvbnMgdGhhdCBhcmVcbi8vIHByZXNlbnQuIFRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHJlc2l6YWJsZSBkZW1vIHdpbGwgc2hvdyB0aGUgZnVsbFxuLy8gbWluaW11bSB3aWR0aCwgc28gaWYgdGhlcmUgYXJlIGNvbG9yZWQgc2VjdGlvbnMgdGhhdCBkb24ndCBjb21wbGV0ZWx5IGZpbGxcbi8vIHRoZSBtaW5pbXVtIHdpZHRoLCB0aGVyZSB3aWxsIGJlIGFuIGF3a3dhcmQgd2hpdGUgcGF0Y2ggYmVsb3cgdGhlIHNlY3Rpb25zLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIGJhc2UgYERlbW9gIG5vZGUuXG5cbmFsbG9jYXRlX21pbmltdW1faGVpZ2h0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG1pbl9oZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5taW5IZWlnaHQsIDEwKSxcbiAgICAgIGRlbW9fc2VjdGlvbnMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLnNlY3Rpb24pLFxuICAgICAgZGVtb19zZWN0aW9uO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihkZW1vX3NlY3Rpb25zKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgZGVtb19zZWN0aW9uID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGRlbW9fc2VjdGlvbi5zdHlsZS5taW5IZWlnaHQgPSBtaW5faGVpZ2h0IC8gZGVtb19zZWN0aW9ucy5sZW5ndGggKyBcInB4XCI7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vKlxuLy8gQ2FjaGVzIGFsbCBvZiB0aGUgaW50ZXJuYWwgZGV0YWlscyBmb3IgYW4gW2BEZW1vYF0oQGxpbmspLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIG5vZGUgYmFja2luZyB0aGUgYERlbW9gLlxuLy8gQHJldHVybnMgT2JqZWN0IC0gVGhlIHByaXZhdGUsIGludGVybmFsIGRldGFpbHMgb2YgdGhlIGBEZW1vYC5cblxuY3JlYXRlX3NlbGYgPSBmdW5jdGlvbiAobm9kZSkge1xuICByZXR1cm4ge1xuICAgIG1hcmt1cF9zb3VyY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLmNvbnRlbnQpLFxuICAgIGRlbW9faGFuZGxlcnM6IHdpbmRvdy5wYXJlbnQuZGVtb19oYW5kbGVycyB8fCB7fSxcbiAgICBwYXJlbnQ6IG5vZGUucGFyZW50Tm9kZSxcbiAgICBoZWlnaHQ6IDAsXG4gICAgYWN0aW9uczoge30sXG4gICAgY29udGV4dDoge1xuICAgICAgYm9keTogZG9jdW1lbnQuYm9keSxcbiAgICAgIGRvY3VtZW50OiBkb2N1bWVudFxuICAgIH1cbiAgfTtcbn07XG5cbi8vKlxuLy8gVGhlIGNvbnN0cnVjdG9yIGZvciBhIG5ldyBgRGVtb2AuIFRoaXMgd2lsbCBzaWduIHRoZSBkZW1vIHVwIGZvciBhbGwgdGhlXG4vLyByZXF1aXJlZCBldmVudHMgYW5kIHdpbGwgZG8gdGhlIHJlcXVpcmVkIGluaXRpYWxpemF0aW9uIHdvcmsuXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBiYXNlIGBEZW1vYCBub2RlLlxuLy9cbi8vIEBmYWN0b3J5XG5cbkRlbW8gPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgc2VsZiA9IGNyZWF0ZV9zZWxmKG5vZGUpLFxuICAgICAgY29tbXVuaWNhdG9yID0gKDAsIF9pZnJhbWUuQ29tbXVuaWNhdG9yKSgpLFxuICAgICAgc2VuZF9tYXJrdXAsXG4gICAgICBoZWlnaHRfdXBkYXRlLFxuICAgICAgYXBwbHlfY2xhc3NfY2hhbmdlO1xuXG4gIC8vKlxuICAvLyBTZW5kcyB0aGUgbWFya3VwIGZvciB0aGUgY3VycmVudCBcIm1haW5cIiBzZWN0aW9uLlxuICAvL1xuICAvLyBAcGFyYW0ge09iamVjdH0gW2V2ZW50ID0ge31dIC0gVGhlIChvcHRpb25hbCkgZXZlbnQgdGhhdCBzcGVjaWZpZXMgdGhlIGRlbW9cbiAgLy8gdG8gc2VuZCBtYXJrdXAgZm9yLlxuICAvL1xuICAvLyBAbWV0aG9kXG4gIC8vIEBwcml2YXRlXG5cbiAgc2VuZF9tYXJrdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAoZXZlbnQuZGVtbykge1xuICAgICAgc2VsZi5tYXJrdXBfc291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGNsYXNzZXMuc2VjdGlvbiArIFwiLS1cIiArIGV2ZW50LmRlbW8gKyBcIiAuXCIgKyBjbGFzc2VzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNvbW11bmljYXRvci50cmlnZ2VyKF91dGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXS50eXBlcy5tYXJrdXBfcmVxdWVzdCwge1xuICAgICAgaHRtbDogc2VsZi5tYXJrdXBfc291cmNlLmlubmVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIC8vKlxuICAvLyBTZW5kcyB0aGUgaGVpZ2h0IGZvciB0aGUgZGVtbyBhcyBhIHdob2xlLCBhbmQgc2V0cyB0aGF0IGhlaWdodCBvbiB0aGVcbiAgLy8gZGVtbydzIGNvbnRhaW5lci4gVGhlIGhlaWdodCBpcyBzZXQgb24gdGhlIGNvbnRhaW5lciBhZnRlciBhIGRlbGF5IHRvXG4gIC8vIGVuc3VyZSB0aGF0IHRoZXJlIGlzIG5vIHBhdGNoIG9mIHVuc3R5bGVkIGJhY2tncm91bmQgY29sb3IgdW5kZXJuZWF0aCBhXG4gIC8vIGRlbW8gdGhhdCBpcyBzaHJpbmtpbmcuXG4gIC8vXG4gIC8vIEBtZXRob2RcbiAgLy8gQHByaXZhdGVcblxuICBoZWlnaHRfdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdfaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKG5ld19oZWlnaHQgPT09IHNlbGYuaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5oZWlnaHQgPSBuZXdfaGVpZ2h0O1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5wYXJlbnQuc3R5bGUubWluSGVpZ2h0ID0gbmV3X2hlaWdodCArIFwicHhcIjtcbiAgICB9LCBIRUlHSFRfQ0hBTkdFX1dBVENIX0RVUkFUSU9OKTtcblxuICAgIGNvbW11bmljYXRvci50cmlnZ2VyKF91dGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXS50eXBlcy5oZWlnaHRfY2hhbmdlLCB7IGhlaWdodDogbmV3X2hlaWdodCB9KTtcbiAgfTtcblxuICAvLypcbiAgLy8gQXBwbGllcyBhIGNsYXNzIGNoYW5nZSB0byB0aGUgZGVtby4gVGhpcyBjbGFzcyBjaGFuZ2Ugd2lsbCBhdm9pZCBhZGRpbmdcbiAgLy8gY2xhc3NlcyB0byBjb21wb25lbnRzIHRoYXQgaGF2ZSBhIGNsYXNzIHByb2NsdWRlZCBmcm9tIHRoZSBuZXcgY2xhc3MsIHdpbGxcbiAgLy8gZmlsdGVyIHRvIHRoZSBwYXNzZWQgZmlsdGVyLCBhbmQgd2lsbCBwZXJmb3JtIHRoZSBvcHRpb25hbCBKYXZhU2NyaXB0XG4gIC8vIGFjdGlvbiBpbnN0ZWFkIG9mIGEgc2ltcGxlIGNsYXNzIGFkZGl0aW9uLyByZW1vdmFsLiBJZiBhcHByb3ByaWF0ZSwgdGhlXG4gIC8vIGNvbXBvbmVudCB3aWxsIHRoZW4gcmV0dXJuIHRoZSBjbGFzcyBjaGFuZ2UgZXZlbnQsIHNlbmQgYSBtYXJrdXAgY2hhbmdlXG4gIC8vIGV2ZW50LCBhbmQgc2VuZCBhIGhlaWdodCB1cGRhdGUgZXZlbnQuXG4gIC8vXG4gIC8vIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSBjbGFzcyBjaGFuZ2UgZXZlbnQuXG4gIC8vIEBwcml2YXRlXG4gIC8vXG5cbiAgYXBwbHlfY2xhc3NfY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGRldGFpbHMgPSBldmVudC5kZXRhaWxzLFxuICAgICAgICBtYXJrdXBfY2hhbmdlX2luX3NvdXJjZSA9IGZhbHNlLFxuICAgICAgICBtaW5pbXVtX29uZV9jbGFzc19jaGFuZ2UgPSBmYWxzZSxcbiAgICAgICAgbWF0Y2hlcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIGNsYXNzZXMuY29udGVudCArIFwiIC5cIiArIGRldGFpbHNbXCJmb3JcIl0pLFxuICAgICAgICBiYWlsX2Vhcmx5LFxuICAgICAgICBjbGFzc19saXN0LFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBwcmVjbHVkZTtcblxuICAgIGlmIChkZXRhaWxzLmZpbHRlcl90bykge1xuICAgICAgLy8gQ2hlY2sgb24gbWF0Y2hlc1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChhX21hdGNoKSB7XG4gICAgICAgIHJldHVybiBhX21hdGNoLm1hdGNoZXMoZGV0YWlscy5maWx0ZXJfdG8pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29tZSBoZWlnaHQgY2hhbmdlcyBtYXkgb2NjdXIgb3ZlciB0aW1lLiBXYXRjaCBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBhbmQgc2VuZCBoZWlnaHQgYWdhaW4gb24gZWFjaCB0cmFuc2l0aW9uZW5kIGV2ZW50XG4gICAgLy9cbiAgICAvLyBUT0RPOiBpbnRlZ3JhdGUgYmV0dGVyIGlmcmFtZSByZXNpemluZ1xuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkamJyYWRzaGF3L2lmcmFtZS1yZXNpemVyL3RyZWUvbWFzdGVyL3Rlc3RcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoX3V0aWxpdGllc1VpX2V2ZW50czJbXCJkZWZhdWx0XCJdLnRyYW5zaXRpb25fZW5kLCBoZWlnaHRfdXBkYXRlKTtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9nZXRJdGVyYXRvcihtYXRjaGVzKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIG1hdGNoID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIGJhaWxfZWFybHkgPSBmYWxzZTtcbiAgICAgICAgY2xhc3NfbGlzdCA9IG1hdGNoLmNsYXNzTGlzdDtcbiAgICAgICAgYWN0aW9uID0gbnVsbDtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2dldEl0ZXJhdG9yKGRldGFpbHMucHJlY2x1ZGUpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgICAgIHByZWNsdWRlID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NfbGlzdC5jb250YWlucyhwcmVjbHVkZSkpIHtcbiAgICAgICAgICAgICAgYmFpbF9lYXJseSA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yM1tcInJldHVyblwiXSkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IzW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWlsX2Vhcmx5KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBtaW5pbXVtX29uZV9jbGFzc19jaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAgIGFjdGlvbiA9IGRldGFpbHMuamF2YXNjcmlwdF9hY3Rpb247XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICBpZiAoIWV2ZW50LmFkZCkge1xuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLnJlcGxhY2UoL2FkZENsYXNzL2csIFwicmVtb3ZlQ2xhc3NcIikucmVwbGFjZSgvY2xhc3NMaXN0XFwuYWRkL2csIFwiY2xhc3NMaXN0LnJlbW92ZVwiKS5yZXBsYWNlKC8odHJ1ZXxmYWxzZSkvLCB7IFwidHJ1ZVwiOiBcImZhbHNlXCIsIFwiZmFsc2VcIjogXCJ0cnVlXCIgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZhbChhY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzX2xpc3RbZXZlbnQuYWRkID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKGRldGFpbHMubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSBtYXJrdXAgaW4gc291cmNlIHdoZW4gdGhlIG1hcmt1cCBzb3VyY2UgaXMgYWJvdmUgaW4gdGhlXG4gICAgICAgIC8vIERPTSB0cmVlLlxuICAgICAgICBtYXJrdXBfY2hhbmdlX2luX3NvdXJjZSA9IG1hcmt1cF9jaGFuZ2VfaW5fc291cmNlIHx8ICQobWF0Y2gpLmNsb3Nlc3Qoc2VsZi5tYXJrdXBfc291cmNlKS5sZW5ndGggPiAwO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMltcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmt1cF9jaGFuZ2VfaW5fc291cmNlKSB7XG4gICAgICBzZW5kX21hcmt1cCgpO1xuICAgIH1cblxuICAgIGlmIChtaW5pbXVtX29uZV9jbGFzc19jaGFuZ2UpIHtcbiAgICAgIC8vIFBhc3MgYWxvbmcgdGhlIGNsYXNzIGNoYW5nZSBldmVudFxuICAgICAgY29tbXVuaWNhdG9yLnRyaWdnZXIoZXZlbnQudHlwZSwgZXZlbnQpO1xuICAgICAgaGVpZ2h0X3VwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0udHJhbnNpdGlvbl9lbmQsIGhlaWdodF91cGRhdGUpO1xuICAgIH0sIEhFSUdIVF9DSEFOR0VfV0FUQ0hfRFVSQVRJT04pO1xuICB9O1xuXG4gIGNvbW11bmljYXRvci5yZWdpc3Rlci5mcm9tX25vZGUobm9kZSk7XG4gIGNvbW11bmljYXRvci5vbihfdXRpbGl0aWVzRXZlbnRzMltcImRlZmF1bHRcIl0udHlwZXMuaGVpZ2h0X3JlcXVlc3QsIGhlaWdodF91cGRhdGUpO1xuICBjb21tdW5pY2F0b3Iub24oX3V0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnR5cGVzLm1hcmt1cF9yZXF1ZXN0LCBzZW5kX21hcmt1cCk7XG4gIGNvbW11bmljYXRvci5vbihfdXRpbGl0aWVzRXZlbnRzMltcImRlZmF1bHRcIl0udHlwZXMuY2xhc3NfY2hhbmdlLCBhcHBseV9jbGFzc19jaGFuZ2UpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhlaWdodF91cGRhdGUpO1xuICBzZXRJbnRlcnZhbChoZWlnaHRfdXBkYXRlLCBIRUlHSFRfQ0hBTkdFX1dBVENIX0RVUkFUSU9OKTtcblxuICBoZWlnaHRfdXBkYXRlKCk7XG4gIGFsbG9jYXRlX21pbmltdW1faGVpZ2h0KG5vZGUpO1xuICBzZXRfY29ycmVjdF9iYWNrZ3JvdW5kX2NvbG9yKG5vZGUpO1xuXG4gIHJldHVybiB7fTtcbn07XG5cbi8vKlxuLy8gSW5pdGlhbGl6ZXMgdGhlIGBEZW1vYCBjb21wb25lbnQuXG4vL1xuLy8gQG1ldGhvZFxuLy8gQHN0YXRpY1xuLy9cbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjb250ZXh0ID0gZG9jdW1lbnRdIC0gVGhlIGNvbnRleHQgaW4gd2hpY2ggdG8gc2VhcmNoXG4vLyBmb3IgRE9NIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJvb3Qgb2YgYW4gYERlbW9gIGNvbXBvbmVudC5cblxuRGVtby5pbml0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGRvY3VtZW50IDogYXJndW1lbnRzWzBdO1xuXG4gIHZhciBkZW1vLFxuICAgICAgZGVtb3MgPSBfQXJyYXkkZnJvbShjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLnJvb3QpKTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IF9nZXRJdGVyYXRvcihkZW1vcyksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgZGVtbyA9IF9zdGVwNC52YWx1ZTtcbiAgICAgIERlbW8oZGVtbyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yNCA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0W1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcjRbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlbW87XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIjoxMTgsXCIuLi8uLi91dGlsaXRpZXMvdWlfZXZlbnRzXCI6MTI4LFwiLi4vaWZyYW1lXCI6OTksXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbVwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sOTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gICAgICAgIF9fXyAgICAgICAgICBfX18gICAgICAgICBfX18gICAgICAgICAgICAgICAgICAgX19fICAgICAgICBfX19fXyAgICAgICAgX19fICAgICAgICBfX19fX1xuLy8gICAgICAgLyAgL1xcICAgICAgICAvX18vfCAgICAgICAvICAvXFwgICAgICAgICAgICAgICAgIC8gIC9cXCAgICAgIC8gIC86OlxcICAgICAgLyAgL1xcICAgICAgLyAgLzo6XFxcbi8vICAgICAgLyAgLzovXyAgICAgIHwgIHw6fCAgICAgIC8gIC86OlxcICAgICAgICAgICAgICAgLyAgLzo6XFwgICAgLyAgLzovXFw6XFwgICAgLyAgLzovXyAgICAvICAvOi9cXDpcXFxuLy8gICAgIC8gIC86LyAvXFwgICAgIHwgIHw6fCAgICAgLyAgLzovXFw6XFxfX18gICAgIF9fXyAgLyAgLzovXFw6XFwgIC8gIC86LyAgXFw6XFwgIC8gIC86LyAvXFwgIC8gIC86LyAgXFw6XFxcbi8vICAgIC8gIC86LyAvOi9fICBfX3xfX3w6fCAgICAvICAvOi9+LzovX18vXFwgICAvICAvXFwvICAvOi8gIFxcOlxcL19fLzovIFxcX19cXDp8LyAgLzovIC86L18vX18vOi8gXFxfX1xcOnxcbi8vICAgL19fLzovIC86LyAvXFwvX18vOjo6OlxcX19fL19fLzovIC86L1xcICBcXDpcXCAvICAvOi9fXy86LyBcXF9fXFw6XFwgIFxcOlxcIC8gIC86L19fLzovIC86LyAvXFwgIFxcOlxcIC8gIC86L1xuLy8gICBcXCAgXFw6XFwvOi8gLzovICAgflxcfn5cXDo6Ojp8ICBcXDpcXC86LyAgXFwgIFxcOlxcICAvOi9cXCAgXFw6XFwgLyAgLzovXFwgIFxcOlxcICAvOi9cXCAgXFw6XFwvOi8gLzovXFwgIFxcOlxcICAvOi9cbi8vICAgIFxcICBcXDo6LyAvOi8gICAgIHx+fnw6fH5+IFxcICBcXDo6LyAgICBcXCAgXFw6XFwvOi8gIFxcICBcXDpcXCAgLzovICBcXCAgXFw6XFwvOi8gIFxcICBcXDo6LyAvOi8gIFxcICBcXDpcXC86L1xuLy8gICAgIFxcICBcXDpcXC86LyAgICAgIHwgIHw6fCAgICBcXCAgXFw6XFwgICAgIFxcICBcXDo6LyAgICBcXCAgXFw6XFwvOi8gICAgXFwgIFxcOjovICAgIFxcICBcXDpcXC86LyAgICBcXCAgXFw6Oi9cbi8vICAgICAgXFwgIFxcOjovICAgICAgIHwgIHw6fCAgICAgXFwgIFxcOlxcICAgICBcXF9fXFwvICAgICAgXFwgIFxcOjovICAgICAgXFxfX1xcLyAgICAgIFxcICBcXDo6LyAgICAgIFxcX19cXC9cbi8vICAgICAgIFxcX19cXC8gICAgICAgIHxfX3wvICAgICAgIFxcX19cXC8gICAgICAgICAgICAgICAgIFxcX19cXC8gICAgICAgICAgICAgICAgICAgXFxfX1xcL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9yZWdlbmVyYXRvclJ1bnRpbWUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGtleXMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9BcnJheSRmcm9tID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlsaXRpZXNVaV9ldmVudHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3VpX2V2ZW50c1wiKTtcblxudmFyIF91dGlsaXRpZXNVaV9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbGl0aWVzVWlfZXZlbnRzKTtcblxudmFyIF91dGlsaXRpZXNDbGllbnQgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2NsaWVudFwiKTtcblxudmFyIF91dGlsaXRpZXNDbGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbGl0aWVzQ2xpZW50KTtcblxudmFyIF91dGlsaXRpZXNCdWlsZGVyID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9idWlsZGVyXCIpO1xuXG52YXIgX3V0aWxpdGllc0J1aWxkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbGl0aWVzQnVpbGRlcik7XG5cbnZhciBfdXRpbGl0aWVzTnVtYmVycyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvbnVtYmVyc1wiKTtcblxudmFyIF91dGlsaXRpZXNQYWludGluZyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvcGFpbnRpbmdcIik7XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcImV4cGxvZGVkXCIsXG4gIHN0cnVjdHVyZTogXCJleHBsb2RlZF9fc3RydWN0dXJlXCIsXG4gIGNvbnRlbnQ6IFwiZXhwbG9kZWRfX3N0cnVjdHVyZV9fY29udGVudFwiLFxuICBzb3VyY2U6IFwiZXhwbG9kZWRfX3NvdXJjZVwiLFxuICBwYW5lOiBcImV4cGxvZGVkX19wYW5lXCJcbn07XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBpbml0aWFsaXplZDogY2xhc3Nlcy5yb290ICsgXCItLWlzLWJlaW5nLWluaXRpYWxpemVkXCJcbiAgfSxcblxuICBwYW5lOiB7XG4gICAgaG92ZXJlZDogY2xhc3Nlcy5wYW5lICsgXCItLWlzLWhvdmVyZWRcIixcbiAgICBzZWxlY3RlZDogY2xhc3Nlcy5wYW5lICsgXCItLWlzLXNlbGVjdGVkXCJcbiAgfVxufTtcblxudmFyIGF0dHJzID0ge1xuICBpZDogXCJkYXRhLWV4cGxvc2lvbi1pZFwiLFxuICBub2RlOiBcImRhdGEtZXhwbG9zaW9uLW5vZGVcIixcbiAgcmFuZ2VfYXR0cjogXCJkYXRhLWV4cGxvc2lvbi1hdHRyaWJ1dGVcIlxufTtcblxudmFyIGV2ZW50cyA9IHtcbiAgcGFuZV9zZWxlY3RlZDogY2xhc3Nlcy5yb290ICsgXCI6cGFuZS1zZWxlY3RlZFwiXG59O1xuXG52YXIgTEFZRVJfR0FQID0gNDA7XG5cbnZhciBjbG9uZSwgaW5pdGlhbGl6ZV9wYW5lcywgaW5pdGlhbGl6ZV9yYW5nZXMsIHJlc2V0LCBzdGFydF9kcmFnZ2luZywgcm90YXRlX2J5LCB1cGRhdGVfcGFuZXMsIG5vZGVfZm9yX3BhbmUsIG1haW5fY2xhc3NfZm9yX25vZGUsIEV4cGxvZGVkO1xuXG4vLypcbi8vIEluaXRpYWxpemVzIHRoZSBwYW5lcyBmb3IgYW4gZXhwbG9zaW9uLiBUaGlzIGRvZXMgYWxsIG9mIHRoZSByZXF1aXJlZFxuLy8gY2xvbmluZywgc3RvcmVzIHRoZSByZXN1bHRpbmcgcGFuZXMgb24gdGhlIHNlY3JldHMgb2JqZWN0LCBhbmQgcGVyZm9ybXMgYW5cbi8vIGluaXRpYWwgcm90YXRpb24uXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhbiBgRXhwbG9kZWRgLlxuLy8gQHByaXZhdGVcblxuaW5pdGlhbGl6ZV9wYW5lcyA9IGZ1bmN0aW9uIGNhbGxlZSQwJDAoc2VsZikge1xuICB2YXIgc291cmNlLCBzdHJ1Y3R1cmU7XG4gIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLmFzeW5jKGZ1bmN0aW9uIGNhbGxlZSQwJDAkKGNvbnRleHQkMSQwKSB7XG4gICAgd2hpbGUgKDEpIHN3aXRjaCAoY29udGV4dCQxJDAucHJldiA9IGNvbnRleHQkMSQwLm5leHQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc291cmNlID0gc2VsZi5zb3VyY2U7XG4gICAgICAgIHN0cnVjdHVyZSA9IHNlbGYuc3RydWN0dXJlO1xuXG4gICAgICAgIGlmICghKHNvdXJjZS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPCAxKSkge1xuICAgICAgICAgIGNvbnRleHQkMSQwLm5leHQgPSA0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQkMSQwLmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgY2FzZSA0OlxuXG4gICAgICAgIHJlc2V0KHNlbGYpO1xuXG4gICAgICAgIHNlbGYucGFuZXMgPSBjbG9uZShzb3VyY2UuY2hpbGRyZW5bMF0sIHN0cnVjdHVyZS5jaGlsZHJlblswXSk7XG4gICAgICAgIHNlbGYuc3ByZWFkID0gMTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGNhbGxlZSQxJDAoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUuYXN5bmMoZnVuY3Rpb24gY2FsbGVlJDEkMCQoY29udGV4dCQyJDApIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKGNvbnRleHQkMiQwLnByZXYgPSBjb250ZXh0JDIkMC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb250ZXh0JDIkMC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS5hd3JhcChfdXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0udHJhbnNpdGlvbihzZWxmLm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5jbGFzc0xpc3QuYWRkKHN0YXRlcy5yb290LmluaXRpYWxpemVkKTtcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZV9ieSgyMCwgNSwgc2VsZik7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlcy5yb290LmluaXRpYWxpemVkKTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dCQyJDAuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG51bGwsIHRoaXMpO1xuICAgICAgICB9LCA0MDApO1xuXG4gICAgICBjYXNlIDg6XG4gICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgIHJldHVybiBjb250ZXh0JDEkMC5zdG9wKCk7XG4gICAgfVxuICB9LCBudWxsLCB0aGlzKTtcbn07XG5cbi8vKlxuLy8gSW5pdGlhbGl6ZXMgdGhlIHJhbmdlcyB3aXRoaW4gYW4gYEV4cGxvZGVkYCB0byBwZXJmb3JtIHRoZWlyIGFjdGlvbi4gVGhpc1xuLy8gZnVuY3Rpb24gYWxzbyBjb250YWlucyB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBvc3NpYmxlIGFjdGlvbnMgZm9yIGEgcmFuZ2UsXG4vLyB0aGUgYGF0dHJzLnJhbmdlX2F0dHJgIHZhbHVlIHRoYXQgd2lsbCBnaXZlIHRoYXQgYmVoYXZpb3IgdG8gYSByYW5nZSwgYW5kXG4vLyB0aGUgYWN0dWFsIGV2ZW50IGhhbmRsZXJzIGZvciB3aGVuIHRoZSByYW5nZSBjaGFuZ2VzIHZhbHVlcy5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGFuIGBFeHBsb2RlZGAuXG4vLyBAcHJpdmF0ZVxuXG5pbml0aWFsaXplX3JhbmdlcyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBfcmFuZ2VzLCBfaGFuZGxlcnM7XG5cbiAgdmFyIGFjdGlvbnMsIHJhbmdlcywgcGVyY2VudGFnZV9mcm9tX2NlbnRlciwgaGFuZGxlcnMsIGNyZWF0ZV9yYW5nZV9saXN0ZW5lcjtcblxuICBhY3Rpb25zID0ge1xuICAgIGdhcDogXCJwYW5lLWdhcFwiLFxuICAgIHBlcnNwZWN0aXZlOiBcInBlcnNwZWN0aXZlXCJcbiAgfTtcblxuICByYW5nZXMgPSAoX3JhbmdlcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JhbmdlcywgYWN0aW9ucy5nYXAsIHsgbWluOiAwLjI1LCBtYXg6IDIsIFwiZGVmYXVsdFwiOiAxIH0pLCBfZGVmaW5lUHJvcGVydHkoX3JhbmdlcywgYWN0aW9ucy5wZXJzcGVjdGl2ZSwgeyBtaW46IDUwMCwgbWF4OiA0MDAwLCBcImRlZmF1bHRcIjogMjAwMCB9KSwgX3Jhbmdlcyk7XG5cbiAgLy8qXG4gIC8vIENhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYSB2YWx1ZSBmcm9tIDAtMTAwIGlzIGZyb20gNTAsIHRoZW4gbm9ybWFsaXplcyB0aGF0XG4gIC8vIHZhbHVlIGZvciBob3cgY2xvc2UgaXQgaXMgdG8gdGhlIGNlbnRlci4gU28sIHZhbHVlcyBjbG9zZSB0byA1MCB3aWxsIGJlIGNsb3NlLFxuICAvLyB0byAwLCB3aGlsZSAwIGFuZCAxMDAgd2lsbCBiZSAtMSBhbmQgMSwgcmVzcGVjdGl2ZWx5LlxuICAvL1xuICAvLyBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBUaGUgbnVtYmVyIG9uIGEgc2NhbGUgb2YgMC0xMDAuXG4gIC8vIEBwcml2YXRlXG4gIC8vIEByZXR1cm5zIE51bWJlclxuXG4gIHBlcmNlbnRhZ2VfZnJvbV9jZW50ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDAgLSAwLjUpIC8gMC41O1xuICB9O1xuXG4gIGhhbmRsZXJzID0gKF9oYW5kbGVycyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2hhbmRsZXJzLCBhY3Rpb25zLmdhcCwgZnVuY3Rpb24gKHNlbGYsIGV2ZW50KSB7XG4gICAgdmFyIHJhbmdlID0gcmFuZ2VzW2FjdGlvbnMuZ2FwXSxcbiAgICAgICAgc3ByZWFkX2Zyb21fY2VudGVyID0gcGVyY2VudGFnZV9mcm9tX2NlbnRlcihldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgaWYgKHNwcmVhZF9mcm9tX2NlbnRlciA8IDApIHtcbiAgICAgIHNlbGYuc3ByZWFkID0gcmFuZ2VbXCJkZWZhdWx0XCJdICsgc3ByZWFkX2Zyb21fY2VudGVyICogKHJhbmdlW1wiZGVmYXVsdFwiXSAtIHJhbmdlLm1pbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc3ByZWFkID0gcmFuZ2VbXCJkZWZhdWx0XCJdICsgc3ByZWFkX2Zyb21fY2VudGVyICogKHJhbmdlLm1heCAtIHJhbmdlW1wiZGVmYXVsdFwiXSk7XG4gICAgfVxuXG4gICAgdXBkYXRlX3BhbmVzKHNlbGYpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9oYW5kbGVycywgYWN0aW9ucy5wZXJzcGVjdGl2ZSwgZnVuY3Rpb24gKHNlbGYsIGV2ZW50KSB7XG4gICAgdmFyIHJhbmdlID0gcmFuZ2VzW2FjdGlvbnMucGVyc3BlY3RpdmVdLFxuICAgICAgICBzcHJlYWRfZnJvbV9jZW50ZXIgPSBwZXJjZW50YWdlX2Zyb21fY2VudGVyKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gICAgICAgIHBlcnNwZWN0aXZlO1xuXG4gICAgaWYgKHNwcmVhZF9mcm9tX2NlbnRlciA+IDApIHtcbiAgICAgIHBlcnNwZWN0aXZlID0gcmFuZ2VbXCJkZWZhdWx0XCJdIC0gc3ByZWFkX2Zyb21fY2VudGVyICogKHJhbmdlW1wiZGVmYXVsdFwiXSAtIHJhbmdlLm1pbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcnNwZWN0aXZlID0gcmFuZ2VbXCJkZWZhdWx0XCJdIC0gc3ByZWFkX2Zyb21fY2VudGVyICogKHJhbmdlLm1heCAtIHJhbmdlW1wiZGVmYXVsdFwiXSk7XG4gICAgfVxuXG4gICAgc2VsZi5zdHJ1Y3R1cmUuc3R5bGUucGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIFwicHhcIjtcbiAgfSksIF9oYW5kbGVycyk7XG5cbiAgY3JlYXRlX3JhbmdlX2xpc3RlbmVyID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGhhbmRsZXJzW2FjdGlvbl0oc2VsZiwgZXZlbnQpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgdmFyIHJhbmdlX25vZGU7XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihfT2JqZWN0JGtleXMoYWN0aW9ucykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBfbmFtZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHZhciBhY3Rpb24gPSBhY3Rpb25zW19uYW1lXTtcbiAgICAgICAgcmFuZ2Vfbm9kZSA9IHNlbGYubm9kZS5xdWVyeVNlbGVjdG9yKFwiW1wiICsgYXR0cnMucmFuZ2VfYXR0ciArIFwiPVxcXCJcIiArIGFjdGlvbiArIFwiXFxcIl1cIik7XG5cbiAgICAgICAgaWYgKCFyYW5nZV9ub2RlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZ2Vfbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY3JlYXRlX3JhbmdlX2xpc3RlbmVyKGFjdGlvbikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuXG4vLypcbi8vIFJlc2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgYW4gYEV4cGxvZGVkYC5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGFuIGBFeHBsb2RlZGAuXG4vLyBAcHJpdmF0ZVxuXG5yZXNldCA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHNlbGYucm90YXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgc2VsZi5zb3VyY2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gIHNlbGYuc3RydWN0dXJlLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG4vLypcbi8vIENyZWF0ZXMgdGhlIGNsb25lIHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgY29udGVudCBvZiBgZnJvbWAgaW50byB0aGUgY29udGFpbmVyXG4vLyBgdG9gLiBUaGlzIGlzIGRvbmUgYnkgZGV0ZXJtaW5pbmcgdGhlIHBvc2l0aW9uIG9mIGVhY2ggZGVzY2VuZGFudCBvZiBgZnJvbWBcbi8vIHJlbGF0aXZlIHRvIHRoZSBgZnJvbWAgY29udGFpbmVyIGl0c2VsZiwgYW5kIHRoZW4gYWJzb2x1dGVseSBwb3NpdGlvbmluZyBhblxuLy8gYGV4cGxvZGVkX19wYW5lYCBhdCB0aGUgc2FtZSByZWxhdGl2ZSBwb3NpdGlvbiBpbiBgdG9gLiBJbiBvcmRlciB0byBwcmVzZW50XG4vLyBhIHVzZWZ1bCBkaWFncmFtLCB0aGUgRE9NIGxldmVsIG9mIGVhY2ggbm9kZSBpcyBjYXB0dXJlZCBhbmQgaXMgdXNlZCB0byBzdGFja1xuLy8gdGhlIHBhbmVzIGluIHRoZSB6LWF4aXMuIEFkZGl0aW9uYWxseSwgYW55IG92ZXJsYXAgYmV0d2VlbiBzaWJsaW5ncyBzaG91bGRcbi8vIGJlIHJlY29yZGVkIGFuZCByZXNvbHZlZCBieSBhZGRpbmcgYSBzbWFsbCBhZGp1c3RtZW50IHRvIHRoZSB6LWluZGV4XG4vLyBzdGFja2luZyBvZiB0aG9zZSBwYW5lcy5cbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBmcm9tIC0gVGhlIG5vZGUgY29udGFpbmluZyB0aGUgc291cmNlIERPTSB0cmVlLlxuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gdG8gICAtIFRoZSBub2RlIGluIHdoaWNoIHRvIGNyZWF0ZSB0aGUgY2xvbmVkIHByZXNlbnRhdGlvbi5cbi8vXG4vLyBAcHJpdmF0ZVxuLy9cbi8vIEByZXR1cm5zIEFycmF5XG4vLyBBbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY2xvbmVkIHBhbmVzLiBFYWNoIG9iamVjdCBoYXMgYSBgbm9kZWAsXG4vLyBgbGV2ZWxgLCBhbmQgYGFkanVzdG1lbnRgIHByb3BlcnR5IHNvIHRoYXQgZnV0dXJlIHRyYW5zbGF0aW9ucyBjYW4gYmUgZG9uZVxuLy8gcGVyZm9ybWFudGx5LlxuXG5jbG9uZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBleHBsb3Npb25faWQgPSAwLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBwYW5lX2NvdW50LFxuICAgICAgd2lkdGhzLFxuICAgICAgY2xvbmVfbGV2ZWwsXG4gICAgICBvcmlnaW5hbF9vZmZzZXQsXG4gICAgICBwYW5lcyxcbiAgICAgIHByZXBhcmVfZm9yX2Nsb25pbmcsXG4gICAgICBhcHBlbmRfY2xvbmUsXG4gICAgICBhcHBlbmRfYWxsX2Nsb25lcyxcbiAgICAgIGNsb25lX25vZGUsXG4gICAgICBmaW5kX292ZXJsYXBzLFxuICAgICAgc3RhY2tfc2libGluZ3M7XG5cbiAgLy8qXG4gIC8vIFJlc2V0cyB0aGUgaW50ZXJuYWwgaW5mb3JtYXRpb24gdXNlZCB0byBwZXJmb3JtIGV4cGxvc2lvbnMuXG4gIC8vXG4gIC8vIEBwcml2YXRlXG5cbiAgcHJlcGFyZV9mb3JfY2xvbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBleHBsb3Npb25faWQgKz0gMTtcbiAgICBwYW5lX2NvdW50ID0gMDtcbiAgICBjbG9uZV9sZXZlbCA9IDA7XG4gICAgcGFuZXMgPSBbXTtcbiAgICBkZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgb3JpZ2luYWxfb2Zmc2V0ID0gbnVsbDtcblxuICAgIHdpZHRocyA9IHtcbiAgICAgIG1pbjogSW5maW5pdHksXG4gICAgICBtYXg6IDBcbiAgICB9O1xuICB9O1xuXG4gIC8vKlxuICAvLyBBcHBlbmRzIGEgbmV3IHBhbmUgd2l0aCB0aGUgcHJvdmlkZWQgZGltZW5zaW9ucyB0byB0aGUgYHRvYCBub2RlLlxuICAvL1xuICAvLyBAcGFyYW0ge09iamVjdH0gZGltcyAtIFRoZSBkaW1lbnNpb25zIG9mIHRoZSBjbG9uZWQgbm9kZS4gU2hvdWxkIGhhdmVcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICBgd2lkdGhgLCBgaGVpZ2h0YCwgYGxlZnRgLCBgdG9wYCwgYGxldmVsYCwgYW5kXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgYGFkanVzdG1lbnRgIHByb3BlcnRpZXMuXG4gIC8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvIC0gVGhlIG5vZGUgaW4gd2hpY2ggdG8gYXBwZW5kIHRoZSBuZXcgcGFuZS5cbiAgLy9cbiAgLy8gQHByaXZhdGVcbiAgLy8gQHJldHVybnMgSFRNTEVsZW1lbnQgLSBUaGUgY2xvbmVkIG5vZGUuXG5cbiAgYXBwZW5kX2Nsb25lID0gZnVuY3Rpb24gKGRpbXMsIHRvKSB7XG4gICAgdmFyIHBhcmVudF93aWR0aCA9IGRlc3RpbmF0aW9uLm9mZnNldFdpZHRoLFxuICAgICAgICBwYXJlbnRfaGVpZ2h0ID0gZGVzdGluYXRpb24ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBub2RlID0gJChcIjxkaXYgY2xhc3M9J1wiICsgY2xhc3Nlcy5wYW5lICsgXCInIHN0eWxlPSdoZWlnaHQ6IFwiICsgZGltcy5oZWlnaHQgKyBcInB4OyB3aWR0aDogXCIgKyBkaW1zLndpZHRoICsgXCJweDsgdG9wOiBcIiArIGRpbXMudG9wICsgXCJweDsgbGVmdDogXCIgKyBkaW1zLmxlZnQgKyBcInB4OyB0cmFuc2Zvcm0tb3JpZ2luOiBcIiArIChwYXJlbnRfd2lkdGggLyAyIC0gZGltcy5sZWZ0KSArIFwicHggXCIgKyAocGFyZW50X2hlaWdodCAvIDIgLSBkaW1zLnRvcCkgKyBcInB4IFwiICsgTEFZRVJfR0FQICsgXCJweDsnIC8+XCIpWzBdO1xuXG4gICAgdG8uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLy8qXG4gIC8vIEFwcGVuZHMgYWxsIG9mIHRoZSByZXF1aXJlZCBwYW5lcyB0byB0aGUgYHRvYCBub2RlIHBhc3NlZCB0b1xuICAvLyBbYGNsb25lYF0oQGxpbmspLlxuICAvL1xuICAvLyBAcHJpdmF0ZVxuXG4gIGFwcGVuZF9hbGxfY2xvbmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgcGFuZTtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9nZXRJdGVyYXRvcihwYW5lcyksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICBwYW5lID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIHBhbmUuY2xvbmUgPSBhcHBlbmRfY2xvbmUocGFuZSwgZnJhZ21lbnQpO1xuICAgICAgICBwYW5lLmNsb25lLnNldEF0dHJpYnV0ZShhdHRycy5ub2RlLCBwYW5lLmlkKTtcbiAgICAgICAgcGFuZS5jbG9uZS5zdHlsZS56SW5kZXggPSBMQVlFUl9HQVAgKiBwYW5lLmxldmVsICsgKHBhbmUuYWRqdXN0bWVudCB8fCAwKTtcbiAgICAgICAgcGFuZS5ub2RlLnNldEF0dHJpYnV0ZShhdHRycy5pZCwgcGFuZS5pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH07XG5cbiAgLy8qXG4gIC8vIEdlbmVyYXRlcyB0aGUgZGV0YWlscyByZXF1aXJlZCB0byBjbG9uZSBhIG5vZGUgYXMgYSBwYW5lLiBUaGVzZSBpbmNsdWRlXG4gIC8vIGl0cyBkaW1lbnNpb25zLCBpdHMgSUQsIHRoZSBub2RlIGl0IGlzIGNsb25pbmcsIGl0cyBsZXZlbCwgYW5kIHdoZXRoZXIgb3JcbiAgLy8gbm90IGl0IGlzIGFjdHVhbGx5IHZpc2libGUuIFRoZXNlIGFyZSBhZGRlZCB0byB0aGUgY2xvc3VyZWQgYHBhbmVzYCBhcnJheVxuICAvLyBzbyB0aGF0IHRoZXkgY2FuIGJlIGVhc2lseSBhY2Nlc3NlZCBieSBvdGhlciBtZXRob2RzLlxuICAvL1xuICAvLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIHNvdXJjZSBub2RlIHRvIGNsb25lLlxuICAvLyBAcHJpdmF0ZVxuXG4gIGNsb25lX25vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBub2RlX29mZnNldHMgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwYW5lLFxuICAgICAgICBjaGlsZDtcblxuICAgIG9yaWdpbmFsX29mZnNldCA9IG9yaWdpbmFsX29mZnNldCB8fCBub2RlLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcGFuZV9jb3VudCArPSAxO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHZpc2libGUgbm9kZVxuICAgIGlmIChub2RlX29mZnNldHMuaGVpZ2h0ICsgbm9kZV9vZmZzZXRzLndpZHRoID4gMikge1xuICAgICAgcGFuZSA9IHtcbiAgICAgICAgaGVpZ2h0OiBub2RlX29mZnNldHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogbm9kZV9vZmZzZXRzLndpZHRoLFxuICAgICAgICB0b3A6IG5vZGVfb2Zmc2V0cy50b3AgLSBvcmlnaW5hbF9vZmZzZXQudG9wLFxuICAgICAgICBsZWZ0OiBub2RlX29mZnNldHMubGVmdCAtIG9yaWdpbmFsX29mZnNldC5sZWZ0LFxuICAgICAgICBsZXZlbDogY2xvbmVfbGV2ZWwsXG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIGlkOiBleHBsb3Npb25faWQgKyBcIi1cIiArIHBhbmVfY291bnRcbiAgICAgIH07XG5cbiAgICAgIHBhbmVzLnB1c2gocGFuZSk7XG5cbiAgICAgIHdpZHRocy5taW4gPSBNYXRoLm1pbihwYW5lLmxlZnQsIHdpZHRocy5taW4pO1xuICAgICAgd2lkdGhzLm1heCA9IE1hdGgubWF4KHBhbmUubGVmdCArIHBhbmUud2lkdGgsIHdpZHRocy5tYXgpO1xuICAgIH1cblxuICAgIGNsb25lX2xldmVsICs9IDE7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2dldEl0ZXJhdG9yKF9BcnJheSRmcm9tKG5vZGUuY2hpbGRyZW4pKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgIGNoaWxkID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICBjbG9uZV9ub2RlKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yM1tcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjNbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNsb25lX2xldmVsIC09IDE7XG4gIH07XG5cbiAgLy8qXG4gIC8vIEZpbmRzIHBhaXJzIG9mIG5vZGVzIHdob3NlIGRpbWVuc2lvbnMgb3ZlcmxhcCBvbmUgYW5vdGhlci5cbiAgLy9cbiAgLy8gQHBhcmFtIHtBcnJheX0gc2libGluZ3MgLSBUaGUgc2V0IG9mIG5vZGVzIHRvIGNoZWNrIGZvciBvdmVybGFwLlxuICAvLyBAcHJpdmF0ZVxuICAvLyBAcmV0dXJucyBBcnJheSAtIEFuIGFycmF5IG9mIGFycmF5cyB0aGF0IGVhY2ggY29udGFpbiBhIHNldCBvZiB0d29cbiAgLy8gb3ZlcmxhcHBpbmcgbm9kZXMuXG5cbiAgZmluZF9vdmVybGFwcyA9IGZ1bmN0aW9uIChzaWJsaW5ncykge1xuICAgIHZhciBvdmVybGFwcyA9IFtdLFxuICAgICAgICBzaWJsaW5nX2NvdW50ID0gc2libGluZ3MubGVuZ3RoLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2libGluZyxcbiAgICAgICAgb3RoZXJfaW5kZXgsXG4gICAgICAgIG90aGVyLFxuICAgICAgICB3aXRoaW5fb3RoZXIsXG4gICAgICAgIG90aGVyX3dpdGhpbixcbiAgICAgICAgY3VzdG9tX2JldHdlZW47XG5cbiAgICBjdXN0b21fYmV0d2VlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdXRpbGl0aWVzTnVtYmVycy5iZXR3ZWVuLmFwcGx5KHVuZGVmaW5lZCwgYXJncy5jb25jYXQoW3sgaW5jbHVkZV9taW46IHRydWUgfV0pKTtcbiAgICB9O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2libGluZ19jb3VudDsgaW5kZXgrKykge1xuICAgICAgc2libGluZyA9IHNpYmxpbmdzW2luZGV4XTtcblxuICAgICAgZm9yIChvdGhlcl9pbmRleCA9IGluZGV4ICsgMTsgb3RoZXJfaW5kZXggPCBzaWJsaW5nX2NvdW50OyBvdGhlcl9pbmRleCsrKSB7XG4gICAgICAgIG90aGVyID0gc2libGluZ3Nbb3RoZXJfaW5kZXhdO1xuXG4gICAgICAgIG90aGVyX3dpdGhpbiA9IGN1c3RvbV9iZXR3ZWVuKG90aGVyLmxlZnQsIHNpYmxpbmcubGVmdCwgc2libGluZy5sZWZ0ICsgc2libGluZy53aWR0aCkgJiYgY3VzdG9tX2JldHdlZW4ob3RoZXIudG9wLCBzaWJsaW5nLnRvcCwgc2libGluZy50b3AgKyBzaWJsaW5nLmhlaWdodCk7XG5cbiAgICAgICAgd2l0aGluX290aGVyID0gY3VzdG9tX2JldHdlZW4oc2libGluZy5sZWZ0LCBvdGhlci5sZWZ0LCBvdGhlci5sZWZ0ICsgb3RoZXIud2lkdGgpICYmIGN1c3RvbV9iZXR3ZWVuKHNpYmxpbmcudG9wLCBvdGhlci50b3AsIG90aGVyLnRvcCArIG90aGVyLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKG90aGVyX3dpdGhpbiB8fCB3aXRoaW5fb3RoZXIpIHtcbiAgICAgICAgICBvdmVybGFwcy5wdXNoKFtzaWJsaW5nLCBvdGhlcl0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJsYXBzO1xuICB9O1xuXG4gIC8vKlxuICAvLyBDcmVhdGVzIHRoZSBuZWNlc3NhcnkgYWRqdXN0bWVudHMgdG8gcHJvdmlkZSB6LXNwYWNlIGJldHdlZW4gc2libGluZ3MgdGhhdFxuICAvLyB3b3VsZCBvdGhlcndpc2Ugb3ZlcmxhcCBvbmUgYW5vdGhlciAodGhhdCBpcywgb24gdGhlIHNhbWUgbGV2ZWwgd2l0aCBzb21lXG4gIC8vIG92ZXJsYXBwaW5nIGNvb3JkaW5hdGVzKS4gVGhlc2UgYWRqdXN0bWVudHMgYXJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZVxuICAvLyBvYmplY3RzIGluIHRoZSBjbG9zdXJlZCBgcGFuZXNgIGFycmF5LlxuICAvL1xuICAvLyBAcHJpdmF0ZVxuXG4gIHN0YWNrX3NpYmxpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZXZlbHMgPSBbXSxcbiAgICAgICAgb3ZlcmxhcHMsXG4gICAgICAgIHBhbmUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBvdmVybGFwO1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2dldEl0ZXJhdG9yKHBhbmVzKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG4gICAgICAgIHBhbmUgPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgbGV2ZWxzW3BhbmUubGV2ZWxdID0gbGV2ZWxzW3BhbmUubGV2ZWxdIHx8IFtdO1xuICAgICAgICBsZXZlbHNbcGFuZS5sZXZlbF0ucHVzaChwYW5lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNFtcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjRbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNSA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjUgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IF9nZXRJdGVyYXRvcihsZXZlbHMpLCBfc3RlcDU7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSAoX3N0ZXA1ID0gX2l0ZXJhdG9yNS5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWUpIHtcbiAgICAgICAgbGV2ZWwgPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgb3ZlcmxhcHMgPSBmaW5kX292ZXJsYXBzKGxldmVsKTtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjYgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gX2dldEl0ZXJhdG9yKG92ZXJsYXBzKSwgX3N0ZXA2OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gKF9zdGVwNiA9IF9pdGVyYXRvcjYubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlKSB7XG4gICAgICAgICAgICBvdmVybGFwID0gX3N0ZXA2LnZhbHVlO1xuXG4gICAgICAgICAgICBvdmVybGFwWzBdLmFkanVzdG1lbnQgPSAtTEFZRVJfR0FQIC8gODtcbiAgICAgICAgICAgIG92ZXJsYXBbMV0uYWRqdXN0bWVudCA9IExBWUVSX0dBUCAvIDg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjYgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yNiA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiAmJiBfaXRlcmF0b3I2W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjZbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3I1ID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ICYmIF9pdGVyYXRvcjVbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3I1W1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjUpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgIHZhciBjbG9uZV9yZXN1bHRzID0gW10sXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBwYW5lO1xuXG4gICAgcHJlcGFyZV9mb3JfY2xvbmluZygpO1xuICAgIGRlc3RpbmF0aW9uID0gdG87XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjcgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3I3ID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSBfZ2V0SXRlcmF0b3IoX0FycmF5JGZyb20oZnJvbS5jaGlsZHJlbikpLCBfc3RlcDc7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSAoX3N0ZXA3ID0gX2l0ZXJhdG9yNy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyA9IHRydWUpIHtcbiAgICAgICAgY2hpbGQgPSBfc3RlcDcudmFsdWU7XG4gICAgICAgIGNsb25lX25vZGUoY2hpbGQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I3ID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yNyA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNyAmJiBfaXRlcmF0b3I3W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yN1tcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I3KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhY2tfc2libGluZ3MoKTtcbiAgICBhcHBlbmRfYWxsX2Nsb25lcygpO1xuXG4gICAgdG8uc3R5bGUubWF4V2lkdGggPSB3aWR0aHMubWF4IC0gd2lkdGhzLm1pbiArIFwicHhcIjtcbiAgICB0by5zdHlsZS5oZWlnaHQgPSBmcm9tLm9mZnNldEhlaWdodCArIFwicHhcIjtcbiAgICBmcm9tLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgZm9yIChwYW5lIGluIHBhbmVzKSB7XG4gICAgICBjbG9uZV9yZXN1bHRzLnB1c2goe1xuICAgICAgICBub2RlOiBwYW5lLmNsb25lLFxuICAgICAgICBsZXZlbDogcGFuZS5sZXZlbCxcbiAgICAgICAgYWRqdXN0bWVudDogcGFuZS5hZGp1c3RtZW50IHx8IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZV9yZXN1bHRzO1xuICB9O1xufSkoKTtcblxuLy8qXG4vLyBBdHRhY2hlcyB0aGUgZXZlbnRzIHJlcXVpcmVkIHRvIGhhbmRsZSB0b3VjaGVzIGFuZCBjbGlja3Mgb24gdGhlIGV4cGxvZGVkXG4vLyBzdHJ1Y3R1cmUuIElmIHRoZSBjbGljayBlbmRzIGJlZm9yZSB0aGUgdXNlciBkcmFncyB0aGUgYERSQUdfVEhSRVNIT0xEYFxuLy8gZGlzdGFuY2UsIHRoZSBhY3Rpb24gd2lsbCBiZSB0cmVhdGVkIGFzIGEgY2xpY2sgYW5kIHRoZSBwYW5lIG9uIHdoaWNoIHRoZVxuLy8gdXNlciBjbGlja2VkIHdpbGwgYmUgc2VsZWN0ZWQuIElmIHRoZSB1c2VyIGRyYWdzIG1vcmUgdGhhbiB0aGUgdGhyZXNob2xkLFxuLy8gdGhlIGVudGlyZSBzdHJ1Y3R1cmUgd2lsbCBiZSByb3RhdGVkIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgZHJhZ2dlZC5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGFuIGBFeHBsb2RlZGAuXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgaW5pdGlhbCBgbW91c2Vkb3duYC8gYHRvdWNoZG93bmAgZXZlbnQuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEByZXR1cm5zIE9iamVjdCAtIFRoZSBsaXN0ZW5lciBvYmplY3Qgd2l0aCBhIGByZW1vdmVgIG1ldGhvZCB0aGF0IGFsbG93cyB0aGVcbi8vICAgICAgICAgICAgICAgICAgIGRyYWcgdG8gYmUgY2xlYW5seSBjYW5jZWxsZWQuXG5cbnN0YXJ0X2RyYWdnaW5nID0gZnVuY3Rpb24gKHNlbGYsIHN0YXJ0X2V2ZW50KSB7XG4gIHZhciBvbGRfY29vcmRpbmF0ZXMgPSBfdXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uY29vcmRpbmF0ZXMoc3RhcnRfZXZlbnQpLFxuICAgICAgZHJhZ190aHJlc2hvbGRfbWV0ID0gZmFsc2UsXG4gICAgICBkcmFnLFxuICAgICAgZHJhZ19lbmQ7XG5cbiAgc3RhcnRfZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBkcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG5ld19jb29yZGluYXRlcyA9IF91dGlsaXRpZXNVaV9ldmVudHMyW1wiZGVmYXVsdFwiXS5jb29yZGluYXRlcyhldmVudCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChkcmFnX3RocmVzaG9sZF9tZXQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgcm90YXRlX2J5KChuZXdfY29vcmRpbmF0ZXMueCAtIG9sZF9jb29yZGluYXRlcy54KSAvIDIsIChuZXdfY29vcmRpbmF0ZXMueSAtIG9sZF9jb29yZGluYXRlcy55KSAvIDIsIHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnX3RocmVzaG9sZF9tZXQgPSBfdXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uY29vcmRpbmF0ZXMuZGlzdGFuY2VfYmV0d2VlbihvbGRfY29vcmRpbmF0ZXMsIG5ld19jb29yZGluYXRlcykgPiBfdXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uRFJBR19USFJFU0hPTEQ7XG4gICAgfVxuICB9O1xuXG4gIGRyYWdfZW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFkcmFnX3RocmVzaG9sZF9tZXQgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzLnBhbmUpKSB7XG4gICAgICBzZWxmLnNlbGVjdF9wYW5lKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogTWF5YmUgbW92ZSB0byBoZWxwZXI/XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gX3V0aWxpdGllc1VpX2V2ZW50czJbXCJkZWZhdWx0XCJdLmFkZF9kcmFnX2xpc3RlbmVycyhkcmFnLCBkcmFnX2VuZCk7XG59O1xuXG4vLypcbi8vIFJvdGF0ZXMgdGhlIHBhbmVzIG9mIGFuIGBFeHBsb2RlZGAgYnkgdGhlIHBhc3NlZCB4IGFuZCB5IGRlZ3JlZXMuXG4vL1xuLy8gQHBhcmFtIHtOdW1iZXJ9IHggLSBUaGUgZGVncmVlcyBpbiB0aGUgeC1heGlzIHRvIHJvdGF0ZSB0aGUgcGFuZXMuXG4vLyBAcGFyYW0ge051bWJlcn0geSAtIFRoZSBkZWdyZWVzIGluIHRoZSB4LWF4aXMgdG8gcm90YXRlIHRoZSBwYW5lcy4gTm90ZSB0aGF0XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMgd2lsbCBiZSByZXZlcnNlZCBzbyB0aGF0IHRoZSByb3RhdGlvbiBmZWVscyBuYXR1cmFsLlxuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhbiBgRXhwbG9kZWRgLlxuLy9cbi8vIEBwcml2YXRlXG5cbnJvdGF0ZV9ieSA9IGZ1bmN0aW9uICh4LCB5LCBzZWxmKSB7XG4gIHNlbGYucm90YXRpb24ueCA9IE1hdGgubWF4KE1hdGgubWluKDkwLCAoc2VsZi5yb3RhdGlvbi54ICsgeCkgJSAzNjApLCAtOTApO1xuICBzZWxmLnJvdGF0aW9uLnkgPSBNYXRoLm1heChNYXRoLm1pbig5MCwgKHNlbGYucm90YXRpb24ueSArIHkpICUgMzYwKSwgLTkwKTtcbiAgdXBkYXRlX3BhbmVzKHNlbGYpO1xufTtcblxuLy8qXG4vLyBBcHBsaWVzIHRoZSBjdXJyZW50IHJvdGF0aW9uIHRvIGFsbCBwYW5lcyB3aXRoaW4gYW4gYEV4cGxvZGVkYC4gSXQgd2lsbCBhbHNvXG4vLyBtYWtlIHN1cmUgdGhhdCB0aGUgei10cmFuc2xhdGlvbiBvZiBlYWNoIHBhbmUgaXMgY29ycmVjdCBnaXZlbiBpdHMgbGV2ZWwgaW5cbi8vIHRoZSBvcmlnaW5hbCBzb3VyY2UgdHJlZSBhbmQgaXRzIHN0YWNraW5nIG9yZGVyIGFnYWluc3QgaXRzIHNpYmxpbmdzLlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYW4gYEV4cGxvZGVkYC5cbi8vIEBwcml2YXRlXG5cbnVwZGF0ZV9wYW5lcyA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBfc2VsZiRyb3RhdGlvbiA9IHNlbGYucm90YXRpb247XG4gIHZhciB4ID0gX3NlbGYkcm90YXRpb24ueDtcbiAgdmFyIHkgPSBfc2VsZiRyb3RhdGlvbi55O1xuICB2YXIgaWRlbnRpdHlfbWF0cml4ID0gKDAsIF91dGlsaXRpZXNOdW1iZXJzLk1hdHJpeCkoKTtcbiAgdmFyIHJvdGF0aW9uX21hdHJpeCA9IGlkZW50aXR5X21hdHJpeC5yb3RhdGUoLXksIHgsIDApO1xuICB2YXIgdXBkYXRlcyA9IFtdO1xuICB2YXIgdHJhbnNmb3JtID0gX3V0aWxpdGllc0NsaWVudDJbXCJkZWZhdWx0XCJdLm5hbWVfZm9yKFwidHJhbnNmb3JtXCIpO1xuICB2YXIgel90cmFuc2xhdGU7dmFyIHBhbmU7dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb244ID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yOCA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3I4ID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3I4ID0gX2dldEl0ZXJhdG9yKHNlbGYucGFuZXMpLCBfc3RlcDg7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjggPSAoX3N0ZXA4ID0gX2l0ZXJhdG9yOC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOCA9IHRydWUpIHtcbiAgICAgIHBhbmUgPSBfc3RlcDgudmFsdWU7XG5cbiAgICAgIGlmICghcGFuZS5ub2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB6X3RyYW5zbGF0ZSA9IChwYW5lLmxldmVsICogTEFZRVJfR0FQICsgcGFuZS5hZGp1c3RtZW50KSAqIHNlbGYuc3ByZWFkO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgbm9kZTogcGFuZS5ub2RlLFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0aW9uX21hdHJpeC50cmFuc2xhdGUoMCwgMCwgel90cmFuc2xhdGUpLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3I4ID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvcjggPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjggJiYgX2l0ZXJhdG9yOFtcInJldHVyblwiXSkge1xuICAgICAgICBfaXRlcmF0b3I4W1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjgpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVwZGF0ZTtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOSA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yOSA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjkgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yOSA9IF9nZXRJdGVyYXRvcih1cGRhdGVzKSwgX3N0ZXA5OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb245ID0gKF9zdGVwOSA9IF9pdGVyYXRvcjkubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjkgPSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZSA9IF9zdGVwOS52YWx1ZTtcblxuICAgICAgICB1cGRhdGUubm9kZS5zdHlsZVt0cmFuc2Zvcm1dID0gdXBkYXRlLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yOSA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjkgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjkgJiYgX2l0ZXJhdG9yOVtcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjlbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yOSkge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yOTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLypcbi8vIFJldHVybnMgdGhlIG9yaWdpbmFsIG5vZGUgKGZyb20gdGhlIHNvdXJjZSBjb250ZW50KSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZVxuLy8gcGFzc2VkIHBhbmUuXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFuZSAtIFRoZSBleHBsb2RlZCBwYW5lIGZvciB3aGljaCBhIGNvcnJlc3BvbmRpbmcgc291cmNlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHNob3VsZCBiZSBmb3VuZC5cbi8vIEBwcml2YXRlXG4vLyBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9IC0gVGhlIGNvcnJlc3BvbmRpbmcgbm9kZSBvciwgaWYgbm9uZSBleGlzdHMsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLlxuXG5ub2RlX2Zvcl9wYW5lID0gZnVuY3Rpb24gKHBhbmUpIHtcbiAgdmFyIG5vZGVfaWQgPSBwYW5lLmdldEF0dHJpYnV0ZShhdHRycy5ub2RlKTtcbiAgaWYgKCFub2RlX2lkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBhc3NlZCBub2RlIG11c3QgaGF2ZSBhbiBcXFwiXCIgKyBhdHRycy5ub2RlICsgXCJcXFwiIGF0dHJpYnV0ZS5cIik7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbXCIgKyBhdHRycy5pZCArIFwiPSdcIiArIG5vZGVfaWQgKyBcIiddXCIpO1xufTtcblxuLy8gVE9ETzogZ2V0IHRoaXMgb3V0IG9mIGhlcmUuXG5cbi8vKlxuLy8gR2V0cyB0aGUgbWFpbiBjbGFzcyBuYW1lIGZvciBhIGdpdmVuIG5vZGUuXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBub2RlIHRvIHJldHJpZXZlIHRoZSBtYWluIGNsYXNzIG5hbWUgZm9yLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcmV0dXJucyBTdHJpbmdcblxubWFpbl9jbGFzc19mb3Jfbm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcbn07XG5cbi8vKlxuLy8gVGhlIGNvbnN0cnVjdG9yIGFyb3VuZCBhbiBleHBsb3Npb24uXG4vL1xuLy8gQGZhY3Rvcnlcbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIGJhc2UgZXhwbG9zaW9uIG5vZGUuXG4vL1xuLy8gQHJldHVybnMgT2JqZWN0IC0gVGhlIEFQSSBmb3IgbWFuaXB1bGF0aW5nIHRoaXMgZXhwbG9zaW9uLCBpbmNsdWRpbmcgbWV0aG9kc1xuLy8gICAgICAgICAgICAgICAgICAgdG8gdXBkYXRlIHRoZSBtYXJrdXAgdG8gZGVtb25zdHJhdGUsIHNlbGVjdGluZyBwYXJ0aWN1bGFyXG4vLyAgICAgICAgICAgICAgICAgICBwYW5lcyBvciBhbGwgcGFuZXMgZm9yIHBhcnRpY3VsYXIgY29tcG9uZW50cywgYW5kIGFkZGluZ1xuLy8gICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzIHRvIHBhbmUgc2VsZWN0aW9uLlxuXG5FeHBsb2RlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBzZWxmLCBhcGksIHNldF9tYXJrdXAsIHNlbGVjdF9wYW5lLCBzZWxlY3RfY29tcG9uZW50LCBvbjtcblxuICBzZWxmID0ge1xuICAgIG5vZGU6IG5vZGUsXG4gICAgLy8gVE9ETzogd3JpdGUgYSBzaW1wbGVyIG1ldGhvZCBmb3IgZmluZGluZyBhbGwgb2NjdXJhbmNlcyBvZiBhIGNsYXNzXG4gICAgc3RydWN0dXJlOiBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLnN0cnVjdHVyZSksXG4gICAgc291cmNlOiBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLnNvdXJjZSlcbiAgfTtcblxuICAvLypcbiAgLy8gQ2xlYXJzIHRoZSBleGlzdGluZyBleHBsb3Npb24gYW5kIHJlLWluaXRhbGl6ZXMgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBuZXdcbiAgLy8gbWFya3VwLlxuICAvL1xuICAvLyBAbWV0aG9kXG4gIC8vXG4gIC8vIEBwYXJhbSB7U3RyaW5nfSBtYXJrdXAgLSBUaGUgbmV3IG1hcmt1cCB0byBkZW1vbnN0cmF0ZS5cblxuICBzZXRfbWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHNlbGYuc291cmNlLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IG1hcmt1cDtcbiAgICAoMCwgX3V0aWxpdGllc1BhaW50aW5nLmZvcmNlX3JlcGFpbnQpKG5vZGUpO1xuICAgIGluaXRpYWxpemVfcGFuZXMoc2VsZik7XG4gIH07XG5cbiAgLy8qXG4gIC8vIFNlbGVjdHMgYSBnaXZlbiBwYW5lIGFuZCBlbWl0cyB0aGUgc2VsZWN0ZWQgZXZlbnQuIFRoaXMgZXZlbnQgY2FuIGJlXG4gIC8vIHBpY2tlZCB1cCBieSBvdGhlciBjb21wb25lbnRzIHNvIHRoYXQgdGhleSBjYW4gZGlzcGxheSB1c2VmdWwgaW5mb3JtYXRpb25cbiAgLy8gcmVsYXRlZCB0byB0aGlzIHBhbmUuIFNlZSBbYG9uX3BhbmVfc2VsZWN0YF0oQGxpbmsgRXhwbG9kZWQjb25fcGFuZV9zZWxlY3QpIGZvciBkZXRhaWxzXG4gIC8vIG9uIGF0dGFjaGluZyBsaXN0ZW5lcnMgdG8gcGFuZSBzZWxlY3Rpb24uXG4gIC8vXG4gIC8vIEBtZXRob2RcbiAgLy9cbiAgLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFuZSAtIFRoZSBzZWxlY3RlZCBwYW5lLlxuXG4gIHNlbGVjdF9wYW5lID0gZnVuY3Rpb24gKHBhbmUpIHtcbiAgICB2YXIgcGFuZXMgPSBBcnJheS5pc0FycmF5KHBhbmUpID8gcGFuZSA6IFtwYW5lXSxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHJlbGF0ZWRfbm9kZTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEwID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjEwID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IxMCA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTAgPSBfZ2V0SXRlcmF0b3Ioc2VsZi5wYW5lcyksIF9zdGVwMTA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEwID0gKF9zdGVwMTAgPSBfaXRlcmF0b3IxMC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMTAgPSB0cnVlKSB7XG4gICAgICAgICAgcGFuZSA9IF9zdGVwMTAudmFsdWU7XG4gICAgICAgICAgcGFuZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnBhbmUuc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IxMCA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMTAgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEwICYmIF9pdGVyYXRvcjEwW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IxMFtcInJldHVyblwiXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IxMCkge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IxMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xMSA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IxMSA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMTEgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjExID0gX2dldEl0ZXJhdG9yKHBhbmVzKSwgX3N0ZXAxMTsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMTEgPSAoX3N0ZXAxMSA9IF9pdGVyYXRvcjExLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xMSA9IHRydWUpIHtcbiAgICAgICAgICBwYW5lID0gX3N0ZXAxMS52YWx1ZTtcbiAgICAgICAgICBwYW5lLmNsYXNzTGlzdC5hZGQoc3RhdGVzLnBhbmUuc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IxMSA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMTEgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjExICYmIF9pdGVyYXRvcjExW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IxMVtcInJldHVyblwiXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IxMSkge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IxMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcGFuZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhbmUgPSBwYW5lc1swXTtcbiAgICByZWxhdGVkX25vZGUgPSBub2RlX2Zvcl9wYW5lKHBhbmUpO1xuXG4gICAgLy8gVGhlIGV2ZW50IHByb3ZpZGVzIHRoZSBzZWxlY3RlZCBwYW5lLCB0aGUgcmVsYXRlZCAoc291cmNlKSBub2RlLCBhbmRcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIG5vZGUgZm9yIGVhc3kgY29tcG9uZW50IGlkZW50aWZpY2F0aW9uLlxuICAgIC8vIFRPRE86IGNsZWFuIHRoaXMgdXAsIGtpbGwgJFxuICAgIGV2ZW50ID0gJC5FdmVudChldmVudHMucGFuZV9zZWxlY3RlZCwge1xuICAgICAgbm9kZTogcmVsYXRlZF9ub2RlLFxuICAgICAgcGFuZTogcGFuZSxcbiAgICAgIGNvbXBvbmVudDogbWFpbl9jbGFzc19mb3Jfbm9kZShyZWxhdGVkX25vZGUpXG4gICAgfSk7XG5cbiAgICAkKG5vZGUpLnRyaWdnZXIoZXZlbnQpO1xuICB9O1xuXG4gIC8vKlxuICAvLyBTZWxlY3RzIHRoZSBwYW5lIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHByb3ZpZGVkIGNvbXBvbmVudC5cbiAgLy9cbiAgLy8gQG1ldGhvZFxuICAvL1xuICAvLyBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50IC0gVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byBzZWxlY3QuXG5cbiAgc2VsZWN0X2NvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICB2YXIgcGFuZXMgPSBbXSxcbiAgICAgICAgY29tcG9uZW50cyA9IHNlbGYuc291cmNlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjb21wb25lbnQpLFxuICAgICAgICBleHBsb3Npb25faWQsXG4gICAgICAgIHBhbmUsXG4gICAgICAgIGV2ZW50O1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMTIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IxMiA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IxMiA9IF9nZXRJdGVyYXRvcihjb21wb25lbnRzKSwgX3N0ZXAxMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMTIgPSAoX3N0ZXAxMiA9IF9pdGVyYXRvcjEyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xMiA9IHRydWUpIHtcbiAgICAgICAgY29tcG9uZW50ID0gX3N0ZXAxMi52YWx1ZTtcblxuICAgICAgICBleHBsb3Npb25faWQgPSBjb21wb25lbnQuZ2V0QXR0cmlidXRlKGF0dHJzLmlkKTtcbiAgICAgICAgcGFuZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIltcIiArIGF0dHJzLm5vZGUgKyBcIj1cXFwiXCIgKyBleHBsb3Npb25faWQgKyBcIlxcXCJdXCIpO1xuICAgICAgICBpZiAocGFuZSkge1xuICAgICAgICAgIHBhbmVzLnB1c2gocGFuZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMTIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IxMiA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMTIgJiYgX2l0ZXJhdG9yMTJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3IxMltcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IxMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMTI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RfcGFuZShwYW5lcyk7XG5cbiAgICAvLyBFdmVudCB3b24ndCBnZXQgdHJpZ2dlcmVkIGJ5IHNlbGVjdF9wYW5lLiBEbyBpdCBoZXJlIGluc3RlYWQuXG4gICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoICYmICFwYW5lcy5sZW5ndGgpIHtcbiAgICAgIGV2ZW50ID0gJC5FdmVudChldmVudHMucGFuZV9zZWxlY3RlZCwge1xuICAgICAgICBub2RlOiBjb21wb25lbnRzWzBdLFxuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudHNbMF0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpWzBdXG4gICAgICB9KTtcblxuICAgICAgJChub2RlKS50cmlnZ2VyKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLy8qXG4gIC8vIEEgaGVscGVyIG1ldGhvZCB0byBhdHRhY2ggYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGBFeHBsb2RlZGAuXG4gIC8vXG4gIC8vIEBtZXRob2RcbiAgLy9cbiAgLy8gQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IHRvIGxpc3RlbiBmb3IuXG4gIC8vIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAvLyBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suZXZlbnRcbiAgLy8gVGhlIGV2ZW50IG9iamVjdC4gTW9zdCBpbXBvcnRhbnRseSwgdGhlIGBkZXRhaWxgIHByb3BlcnR5IG9mIHRoaXMgb2JqZWN0XG4gIC8vIGNvbnRhaW5zIHRoZSBzb3VyY2UgYG5vZGVgLCB0aGUgc2VsZWN0ZWQgYHBhbmVgLCBhbmQgdGhlIG5hbWUgb2YgdGhlXG4gIC8vIGBjb21wb25lbnRgIHRoYXQgd2FzIHNlbGVjdGVkLlxuICAvL1xuICAvLyBAcmV0dXJucyBPYmplY3QgLSBBbiBvYmplY3QgdGhhdCBhbGxvd3MgeW91IHRvIGVhc2lseSByZW1vdmUgdGhlIGxpc3RlbmVyXG4gIC8vICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIGAjcmVtb3ZlYCBtZXRob2QuXG5cbiAgb24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRub2RlID0gJChub2RlKTtcbiAgICAkbm9kZS5vbihldmVudCwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAkbm9kZS5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGFwaSA9IHsgc2VsZWN0X3BhbmU6IHNlbGVjdF9wYW5lLCBzZWxlY3RfY29tcG9uZW50OiBzZWxlY3RfY29tcG9uZW50LCBzZXRfbWFya3VwOiBzZXRfbWFya3VwLCBvbjogb24gfTtcbiAgX09iamVjdCRhc3NpZ24oc2VsZiwgYXBpKTtcblxuICBpbml0aWFsaXplX3BhbmVzKHNlbGYpO1xuICBpbml0aWFsaXplX3JhbmdlcyhzZWxmKTtcblxuICBzZWxmLnN0cnVjdHVyZS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5jb250ZW50KS5hZGRFdmVudExpc3RlbmVyKF91dGlsaXRpZXNVaV9ldmVudHMyW1wiZGVmYXVsdFwiXS5kcmFnLnN0YXJ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzdGFydF9kcmFnZ2luZyhzZWxmLCBldmVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59O1xuXG4vLypcbi8vIEluaXRpYWxpemVzIHRoZSBgRXhwbG9kZWRgIGNvbXBvbmVudC5cbi8vXG4vLyBAbWV0aG9kXG4vLyBAc3RhdGljXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NvbnRleHQgPSBkb2N1bWVudF0gLSBUaGUgY29udGV4dCBpbiB3aGljaCB0byBzZWFyY2hcbi8vIGZvciBET00gbm9kZXMgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcm9vdCBvZiBhbiBgRXhwbG9kZWRgIGNvbXBvbmVudC5cblxuRXhwbG9kZWQuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgX3V0aWxpdGllc0J1aWxkZXIyW1wiZGVmYXVsdFwiXS5idWlsZF9hbmRfY2FjaGUoRXhwbG9kZWQsIHsgbmFtZTogY2xhc3Nlcy5yb290IH0pO1xufTtcblxuZXhwb3J0cy5jbGFzc2VzID0gY2xhc3NlcztcbmV4cG9ydHMuc3RhdGVzID0gc3RhdGVzO1xuZXhwb3J0cy5hdHRycyA9IGF0dHJzO1xuZXhwb3J0cy5ldmVudHMgPSBldmVudHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV4cGxvZGVkO1xuXG4vLypcbi8vIEBuYW1lIGdhcFxuLy9cbi8vIFVwZGF0ZXMgdGhlIHNwcmVhZCBiZXR3ZWVuIHBhbmVzLiA1MCUgb24gdGhlIHJhbmdlIHdpbGwgZ2VuZXJhdGUgYSB6LWF4aXNcbi8vIGRpc3RhbmNlIGJldHdlZW4gY2hpbGQvIHBhcmVudCBwYW5lcyBvZiBgTEFZRVJfR0FQYC4gQW55dGhpbmcgbGVzcyB0aGFuXG4vLyA1MCUgd2lsbCByZWR1Y2UgdGhpcyBnYXAsIGFuZCBhbnl0aGluZyBncmVhdGVyIHRoYW4gNTAlIHdpbGwgaW5jcmVhc2UgaXQuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhbiBgRXhwbG9kZWRgLlxuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGBpbnB1dGAgZXZlbnQgb24gYSByYW5nZSBpbnB1dC5cbi8vXG4vLyBAcHJpdmF0ZVxuXG4vLypcbi8vIEBuYW1lIHBlcnNwZWN0aXZlXG4vL1xuLy8gVXBkYXRlcyB0aGUgcGVyc3BlY3RpdmUgb2YgYW4gYEV4cGxvZGVkYC4gNTAlIG9uIHRoZSByYW5nZSB3aWxsIGdlbmVyYXRlXG4vLyB0aGUgZGVmYXVsdCBwZXJzcGVjdGl2ZSwgYW5kIHZhbHVlcyBsb3dlciBhbmQgaGlnaGVyIHdpbGwgZGVjcmVhc2UgYW5kXG4vLyBpbmNyZWFzZSB0aGF0IHBlcnNwZWN0aXZlLCByZXNwZWN0aXZlbHkuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhbiBgRXhwbG9kZWRgLlxuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGBpbnB1dGAgZXZlbnQgb24gYSByYW5nZSBpbnB1dC5cbi8vXG4vLyBAcHJpdmF0ZVxuXG59LHtcIi4uLy4uL3V0aWxpdGllcy9idWlsZGVyXCI6MTE1LFwiLi4vLi4vdXRpbGl0aWVzL2NsaWVudFwiOjExNixcIi4uLy4uL3V0aWxpdGllcy9udW1iZXJzXCI6MTIyLFwiLi4vLi4vdXRpbGl0aWVzL3BhaW50aW5nXCI6MTIzLFwiLi4vLi4vdXRpbGl0aWVzL3VpX2V2ZW50c1wiOjEyOCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoyLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjo0LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6OCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmUtcHJvcGVydHlcIjoxMyxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0LFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiOjg4fV0sOTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2xhc3NlcyA9IHtcbiAgcm9vdDogXCJmaWVsZFwiLFxuICBpbnB1dDogXCJmaWVsZF9faW5wdXRcIixcbiAgbGFiZWw6IFwibGFiZWxcIlxufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcm9vdDogeyBmb2N1c2VkOiBjbGFzc2VzLnJvb3QgKyBcIi0taXMtZm9jdXNlZFwiIH0sXG4gIGxhYmVsOiB7IGZvY3VzZWQ6IGNsYXNzZXMubGFiZWwgKyBcIi0taXMtZm9jdXNlZFwiIH1cbn07XG5cbnZhciBGaWVsZCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKGRvY3VtZW50KS5vbihcImZvY3VzaW4gZm9jdXNvdXRcIiwgXCIuXCIgKyBjbGFzc2VzLmlucHV0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBtZXRob2QgPSBldmVudC50eXBlID09PSBcImZvY3VzaW5cIiA/IFwiYWRkXCIgOiBcInJlbW92ZVwiLFxuICAgICAgICAgIGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltmb3I9XCIgKyBldmVudC50YXJnZXQuaWQgKyBcIl1cIik7XG5cbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdFttZXRob2RdKHN0YXRlcy5yb290LmZvY3VzZWQpO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0W21ldGhvZF0oc3RhdGVzLmxhYmVsLmZvY3VzZWQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZpZWxkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7fV0sOTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gICAgICAgICAgICAgICAgICAgX19fICAgICAgIF9fXyAgICAgICAgICBfX18gICAgICAgICAgX19fICAgICAgICAgIF9fX1xuLy8gICAgICBfX18gICAgICAgICAvICAvXFwgICAgIC8gIC9cXCAgICAgICAgLyAgL1xcICAgICAgICAvX18vXFwgICAgICAgIC8gIC9cXFxuLy8gICAgIC8gIC9cXCAgICAgICAvICAvOi9fICAgLyAgLzo6XFwgICAgICAvICAvOjpcXCAgICAgIHwgIHw6OlxcICAgICAgLyAgLzovX1xuLy8gICAgLyAgLzovICAgICAgLyAgLzovIC9cXCAvICAvOi9cXDpcXCAgICAvICAvOi9cXDpcXCAgICAgfCAgfDp8OlxcICAgIC8gIC86LyAvXFxcbi8vICAgL19fLzo6XFwgICAgIC8gIC86LyAvOi8vICAvOi9+LzovICAgLyAgLzovfi86OlxcICBfX3xfX3w6fFxcOlxcICAvICAvOi8gLzovX1xuLy8gICBcXF9fXFwvXFw6XFxfXyAvX18vOi8gLzovL19fLzovIC86L19fXy9fXy86LyAvOi9cXDpcXC9fXy86Ojo6fCBcXDpcXC9fXy86LyAvOi8gL1xcXG4vLyAgICAgIFxcICBcXDpcXC9cXFxcICBcXDpcXC86LyBcXCAgXFw6XFwvOjo6OjovXFwgIFxcOlxcLzovX19cXC9cXCAgXFw6XFx+flxcX19cXC9cXCAgXFw6XFwvOi8gLzovXG4vLyAgICAgICBcXF9fXFw6Oi8gXFwgIFxcOjovICAgXFwgIFxcOjovfn5+fiAgXFwgIFxcOjovICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDo6LyAvOi9cbi8vICAgICAgIC9fXy86LyAgIFxcICBcXDpcXCAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6XFwvOi9cbi8vICAgICAgIFxcX19cXC8gICAgIFxcICBcXDpcXCAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6Oi9cbi8vICAgICAgICAgICAgICAgICAgXFxfX1xcLyAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcL1xuLy9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfQXJyYXkkZnJvbSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbGl0aWVzRXZlbnRzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIik7XG5cbnZhciBfdXRpbGl0aWVzRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllc0V2ZW50cyk7XG5cbnZhciBfdXRpbGl0aWVzRG9tX2NhY2hlID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9kb21fY2FjaGVcIik7XG5cbnZhciBfdXRpbGl0aWVzRG9tX2NhY2hlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllc0RvbV9jYWNoZSk7XG5cbnZhciBfdXRpbGl0aWVzTWFya3VwID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9tYXJrdXBcIik7XG5cbi8vKlxuLy8gVGhlIG5hbWUgb2YgY2xhc3NlcyByZWxldmFudCB0byBgSWZyYW1lYCBhbmQgYENvbW11bmljYXRvcmAuXG4vLyBAb2JqZWN0XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcImlmcmFtZVwiLFxuICBjb250ZW50OiBcImlmcmFtZV9fY29udGVudFwiXG59O1xuXG4vLypcbi8vIFRoZSBuYW1lIG9mIGF0dHJpYnV0ZXMgcmVsZXZhbnQgdG8gYElmcmFtZWAgYW5kIGBDb21tdW5pY2F0b3JgLlxuLy8gQG9iamVjdFxuXG52YXIgYXR0cnMgPSB7XG4gIGlkOiBcImRhdGEtaWZyYW1lLWlkXCJcbn07XG5cbi8vKlxuLy8gVGhlIHBvc3NpYmxlIHBvc2l0aW9ucyBvZiBhbiBbYElmcmFtZWBdKEBsaW5rKSDigJQgZWl0aGVyIHRoZSBwYXJlbnQgKG9uIHRoZVxuLy8gbWFpbiBwYWdlKSBvciB0aGUgY2hpbGQgKGVtYmVkZGVkIGluc2lkZSBhbiBgaWZyYW1lYCkuXG4vL1xuLy8gQG9iamVjdFxuLy8gQHByaXZhdGVcblxudmFyIHBvc2l0aW9ucyA9IHtcbiAgcGFyZW50OiBcInBhcmVudFwiLFxuICBjaGlsZDogXCJjaGlsZFwiXG59O1xuXG4vLypcbi8vIEEgc2V0IG9mIGV2ZW50cyByZWdpc3RlcmVkIHdpdGggW2BFdmVudHNgXShAbGluaykgdGhhdCByZWxhdGUgc3BlY2lmaWNhbGx5XG4vLyB0byBmZWF0dXJlcyBtYW5hZ2VkIGJ5IHRoZSBjb3JlIGBJZnJhbWVgLlxuLy9cbi8vIEBvYmplY3Rcbi8vIEBwcml2YXRlXG5cbnZhciBpZnJhbWVfZXZlbnRzID0gW1wibWFya3VwX3JlcXVlc3RcIiwgXCJtYXJrdXBfcmVxdWVzdFwiLCBcImhlaWdodF9jaGFuZ2VcIiwgXCJtYXJrdXBfY2hhbmdlXCIsIFwiY2xhc3NfY2hhbmdlXCIsIFwiaGVpZ2h0X3JlcXVlc3RcIiwgXCJldmVudF9oYW5kbGVyXCJdO1xuXG52YXIgSWZyYW1lLCBpZnJhbWVzLCBDb21tdW5pY2F0b3IsIGNyZWF0ZV9zZWxmLCBhZGRfZXZlbnRfbGlzdGVuZXJzLCBtb3ZlX21hcmt1cF90b19pZnJhbWU7XG5cbmlmcmFtZXMgPSBbXTtcblxuX3V0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnJlZ2lzdGVyLmFwcGx5KF91dGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXSwgaWZyYW1lX2V2ZW50cyk7XG5cbi8vKlxuLy8gQSBtZWNoYW5pc20gZm9yIGNvbW11bmljYXRpbmcgYmV0d2VlbiBhIGdpdmVuIGNvbXBvbmVudCBhbmQgb25lIG9yIG1vcmVcbi8vIFtgSWZyYW1lYHNdKEBsaW5rIElmcmFtZSkuXG4vL1xuLy8gQGZhY3RvcnlrXG5cbmV4cG9ydHMuQ29tbXVuaWNhdG9yID0gQ29tbXVuaWNhdG9yID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZV9pZnJhbWVzID0gW10sXG4gICAgICBwcml2YXRlX2lmcmFtZSxcbiAgICAgIGFjdGlvbnMgPSB7fSxcbiAgICAgIGNvbW11bmljYXRvcjtcblxuICBjb21tdW5pY2F0b3IgPSB7XG5cbiAgICAvLypcbiAgICAvLyBUcmlnZ2VyIGFuIGV2ZW50IHdpdGggdGhlIHByb3ZpZGVkIGRhdGEgdG8gYWxsIGF0dGFjaGVkIGlmcmFtZXMuXG4gICAgLy9cbiAgICAvLyBAbWV0aG9kXG4gICAgLy9cbiAgICAvLyBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHRyaWdnZXIuIERvIG5vdCBwYXNzIGEgc3RyaW5nXG4gICAgLy8gbGl0ZXJhbCDigJQgaW5zdGVhZCwgcGFzcyBhbiBldmVudCBkZWZpbmVkIG9uIFtgRXZlbnRzLnR5cGVzYF0oQGxpbmspLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIHsqfSBkYXRhIC0gQW55IHBpZWNlIG9mIGRhdGEgdGhhdCBjYW4gYmUgc3RyaW5naWZpZWQgYnlcbiAgICAvLyBgSlNPTi5zdHJpbmdpZnlgLlxuXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcih0eXBlLCBkYXRhKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2dldEl0ZXJhdG9yKHByaXZhdGVfaWZyYW1lcyksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICBwcml2YXRlX2lmcmFtZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgcHJpdmF0ZV9pZnJhbWUudHJpZ2dlcih0eXBlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLypcbiAgICAvLyBBZGQgYSBsaXN0ZW5lciBmb3Igd2hlbiBhbiBgSWZyYW1lYCBpcyB0cmlnZ2VyZWQgd2l0aCB0aGUgcGFzc2VkIGBldmVudGAuXG4gICAgLy9cbiAgICAvLyBAbWV0aG9kXG4gICAgLy9cbiAgICAvLyBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IuIERvIG5vdCBwYXNzIGFcbiAgICAvLyBzdHJpbmcgbGl0ZXJhbCDigJQgaW5zdGVhZCwgcGFzcyBhbiBldmVudCBkZWZpbmVkIG9uXG4gICAgLy8gW2BFdmVudHMudHlwZXNgXShAbGluaykuXG4gICAgLy9cbiAgICAvLyBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gLSBUaGUgY2FsbGJhY2sgdG8gcnVuIHdoZW4gdGhlIGV2ZW50IGlzXG4gICAgLy8gdHJpZ2dlcmVkLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5kYXRhIC0gVGhlIGRhdGEgdGhhdCB3YXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgIC8vIFtgSWZyYW1lI3RyaWdnZXJgXShAbGluaykgdGhhdCBnZW5lcmF0ZWQgdGhpcyBldmVudC5cblxuICAgIG9uOiBmdW5jdGlvbiBvbihldmVudCwgYWN0aW9uKSB7XG4gICAgICBhY3Rpb25zW2V2ZW50XSA9IGFjdGlvbnNbZXZlbnRdIHx8IFtdO1xuICAgICAgYWN0aW9uc1tldmVudF0ucHVzaChhY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLypcbiAgICAvLyBSZWNlaXZlcyB0aGUgZGF0YSBmb3IgYW4gZXZlbnQgYW5kIGNsYWxzIGFsbCBhc3NvY2lhdGVkIGV2ZW50IGhhbmRsZXJzLlxuICAgIC8vIFRoaXMgaXMgcHJpbWFyaWx5IHByb3ZpZGVkIHNvIHRoYXQgdGhlIGBJZnJhbWVgIGNhbiBjYWxsIHRoaXMgbWV0aG9kIGZvclxuICAgIC8vIGFsbCBsaXN0ZW5lcnMgdGhhdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIGl0LlxuICAgIC8vXG4gICAgLy8gQG1ldGhvZFxuICAgIC8vXG4gICAgLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gQWxsIG9mIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG5cbiAgICByZWNlaXZlOiBmdW5jdGlvbiByZWNlaXZlKGV2ZW50KSB7XG4gICAgICB2YXIgZXZlbnRfYWN0aW9ucyA9IGFjdGlvbnNbZXZlbnQudHlwZV0sXG4gICAgICAgICAgYWN0aW9uO1xuXG4gICAgICBpZiAoIWV2ZW50X2FjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfZ2V0SXRlcmF0b3IoYWN0aW9ucyksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgIGFjdGlvbiA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgICBhY3Rpb24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLypcbiAgICAvLyBBbiBvYmplY3QgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIHJlZ2lzdGVyaW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAgLy9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBAb2JqZWN0XG5cbiAgICByZWdpc3Rlcjoge1xuXG4gICAgICAvLypcbiAgICAgIC8vIFJlZ2lzdGVycyB0aGlzIGBDb21tdW5pY2F0b3JgIHdpdGggdGhlIHBhc3NlZCBJRCBvciBgaWZyYW1lYCBub2RlLlxuICAgICAgLy9cbiAgICAgIC8vIEBtZXRob2RcbiAgICAgIC8vXG4gICAgICAvLyBAcGFyYW0ge1N0cmluZyB8IEhUTUxFbGVtZW50fSBpZCAtIFRoZSBgaWZyYW1lYCB0byByZWdpc3RlciB3aXRoLiBJZlxuICAgICAgLy8gYSBgU3RyaW5nYCBpcyBwYXNzZWQsIGl0IHNob3VsZCBtYXRjaCBzb21lIGBpZnJhbWVgJ3MgYGRhdGEtaWZyYW1lLWlkYFxuICAgICAgLy8gYXR0cmlidXRlLiBPdGhlcndpc2UsIHlvdSBzaG91bGQgcGFzcyB0aGUgYWN0dWFsIGBpZnJhbWVgIG5vZGUgdG9cbiAgICAgIC8vIHJlZ2lzdGVyIHdpdGguXG4gICAgICAvL1xuICAgICAgLy8gQHJldHVybnMgQm9vbGVhbiAtIFJldHVybnMgYHRydWVgIGlmIHRoZSByZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWwsXG4gICAgICAvLyBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuXG4gICAgICB3aXRoX2lmcmFtZTogZnVuY3Rpb24gd2l0aF9pZnJhbWUoaWQpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IElmcmFtZVtcImZvclwiXShpZCksXG4gICAgICAgICAgICByZWdpc3RlcmVkID0gISFpZnJhbWUgJiYgaWZyYW1lLnJlZ2lzdGVyKGNvbW11bmljYXRvcik7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICBwcml2YXRlX2lmcmFtZXMucHVzaChpZnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpc3RlcmVkO1xuICAgICAgfSxcblxuICAgICAgLy8qXG4gICAgICAvLyBSZWdpc3RlcnMgdGhpcyBgQ29tbXVuaWNhdG9yYCB3aXRoIHRoZSBgaWZyYW1lYCB3aG9zZSBgZGF0YS1pZnJhbWUtaWRgXG4gICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgdGhlIHBhc3NlZCBub2RlLlxuICAgICAgLy9cbiAgICAgIC8vIEBtZXRob2RcbiAgICAgIC8vXG4gICAgICAvLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIG5vZGUgdG8gbWF0Y2ggdG8gYW4gYGlmcmFtZWAuXG4gICAgICAvL1xuICAgICAgLy8gQHJldHVybnMgQm9vbGVhbiAtIFJldHVybnMgYHRydWVgIGlmIHRoZSByZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWwsXG4gICAgICAvLyBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuXG4gICAgICBmcm9tX25vZGU6IGZ1bmN0aW9uIGZyb21fbm9kZShub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhfaWZyYW1lKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJzLmlkKSk7XG4gICAgICB9LFxuXG4gICAgICAvLypcbiAgICAgIC8vIFJlZ2lzdGVycyB0aGlzIGBDb21tdW5pY2F0b3JgIHdpdGggYWxsIGBpZnJhbWVgcyBvbiB0aGUgcGFnZS5cbiAgICAgIC8vXG4gICAgICAvLyBAbWV0aG9kXG4gICAgICAvL1xuICAgICAgLy8gQHJldHVybnMgQm9vbGVhbiAtIFJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBgaWZyYW1lYHMgb24gdGhlIHBhZ2UsXG4gICAgICAvLyBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuXG4gICAgICB3aXRoX2FsbDogZnVuY3Rpb24gd2l0aF9hbGwoKSB7XG4gICAgICAgIHZhciBpZnJhbWU7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfZ2V0SXRlcmF0b3IoaWZyYW1lcyksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWZyYW1lID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy53aXRoX2lmcmFtZShpZnJhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yM1tcInJldHVyblwiXSkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IzW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZnJhbWUubGVuZ3RoID4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbW11bmljYXRvcjtcbn07XG5cbi8vKlxuLy8gQ2FjaGVzIGFsbCBvZiB0aGUgaW50ZXJuYWwgZGV0YWlscyBmb3IgYW4gW2BJZnJhbWVgXShAbGluaykuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgbm9kZSBiYWNraW5nIHRoZSBgSWZyYW1lYC4gVGhpcyBjYW4gYmUgZWl0aGVyXG4vLyBhbiBhY3R1YWwgYGlmcmFtZWAgKGluIHRoZSBjYXNlIG9mIHRoZSBwYXJlbnQpIG9yIHRoZSB3cmFwcGluZyBlbGVtZW50IG9mXG4vLyBhIGRlbW8gdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgYGlmcmFtZWAuXG4vL1xuLy8gQHJldHVybnMgT2JqZWN0IC0gVGhlIHByaXZhdGUsIGludGVybmFsIGRldGFpbHMgb2YgdGhlIGBJZnJhbWVgLlxuXG5jcmVhdGVfc2VsZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBzZWxmID0ge1xuICAgIG5vZGU6IG5vZGUsXG4gICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJzLmlkKSxcbiAgICByZWFkeTogZmFsc2UsXG4gICAgbGlzdGVuZXJzOiBbXSxcbiAgICBtZXNzYWdlX3F1ZXVlOiBbXSxcbiAgICBtZXNzYWdlOiBmdW5jdGlvbiBtZXNzYWdlKGRhdGEpIHtcbiAgICAgIHRoaXMubWVzc2FnZV90YXJnZXQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIFwiKlwiKTtcbiAgICB9LFxuICAgIHF1ZXVlOiBmdW5jdGlvbiBxdWV1ZShkYXRhKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VfcXVldWUucHVzaChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlmcmFtZVwiKSB7XG4gICAgX09iamVjdCRhc3NpZ24oc2VsZiwgeyBwb3NpdGlvbjogcG9zaXRpb25zLnBhcmVudCwgbWVzc2FnZV90YXJnZXQ6IG5vZGUuY29udGVudFdpbmRvdyB9KTtcbiAgfSBlbHNlIHtcbiAgICBfT2JqZWN0JGFzc2lnbihzZWxmLCB7IHBvc2l0aW9uOiBwb3NpdGlvbnMuY2hpbGQsIG1lc3NhZ2VfdGFyZ2V0OiB3aW5kb3cucGFyZW50IH0pO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG4vLypcbi8vIFNldHMgdXAgYWxsIHJlcXVpcmVkIGV2ZW50IGxpc3RlbmVycyBmb3IgYW4gW2BJZnJhbWVgXShAbGluayksIGluY2x1ZGluZyB0aGVcbi8vIGxpc3RlbmVyIGZvciBgcG9zdE1lc3NhZ2VgIGFuZCBsaXN0ZW5lcnMgb24gdGhlIHJlbGV2YW50IGBpZnJhbWVgIGZvciB0aGVcbi8vIGBsb2FkYCBldmVudCAoYXMgYSBob29rIHRvIHJ1biB0aGUgZmlyc3Qgc2V0IG9mIGV2ZW50cykuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYW4gW2BJZnJhbWVgXShAbGluaykuXG5cbmFkZF9ldmVudF9saXN0ZW5lcnMgPSBmdW5jdGlvbiAoc2VsZikge1xuICBzZWxmLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBxdWV1ZWRfbWVzc2FnZTtcblxuICAgIHNlbGYucmVhZHkgPSB0cnVlO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IF9nZXRJdGVyYXRvcihzZWxmLm1lc3NhZ2VfcXVldWUpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgcXVldWVkX21lc3NhZ2UgPSBfc3RlcDQudmFsdWU7XG4gICAgICAgIHNlbGYubWVzc2FnZShxdWV1ZWRfbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3I0W1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjQpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLm1lc3NhZ2VfcXVldWUgPSBbXTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBkYXRhLCBsaXN0ZW5lcjtcblxuICAgIGlmICh0eXBlb2YgZXZlbnQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmIChkYXRhLmlkICE9PSBzZWxmLmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gX2dldEl0ZXJhdG9yKHNlbGYubGlzdGVuZXJzKSwgX3N0ZXA1OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ID0gKF9zdGVwNSA9IF9pdGVyYXRvcjUubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlKSB7XG4gICAgICAgIGxpc3RlbmVyID0gX3N0ZXA1LnZhbHVlO1xuICAgICAgICBsaXN0ZW5lci5yZWNlaXZlKGRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I1ID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yNSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSAmJiBfaXRlcmF0b3I1W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yNVtcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I1KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8vKlxuLy8gTW92ZXMgdGhlIG1hcmt1cCBmb3IgZm9yIGFuIGlmcmFtZSBpbnRvIHRoZSBhY3R1YWwgaWZyYW1lLiBUaGlzIGxvb2tzIGZvciB0aGVcbi8vIGBpZnJhbWVfX2NvbnRlbnRgIHNpYmxpbmcgbm9kZSBvZiB0aGUgaWZyYW1lLCB0YWtlcyBpdHMgaW5uZXIgSFRNTCwgZGVjb2Rlc1xuLy8gdGhlIGVzY2FwZWQgZW50aXRpZXMsIGFuZCB3cml0ZXMgdGhlIGVudGlyZXR5IG9mIHRoZSByZXN1bHRpbmcgc3RyaW5nICh3aGljaFxuLy8gaW5jbHVkZXMgdGhlIEhUTUwgZWxlbWVudCBhbmQgYWxsIGNoaWxkcmVuKSB0byB0aGUgaWZyYW1lJ3Mgd2luZG93LlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGFuIFtgSWZyYW1lYF0oQGxpbmspLlxuXG5tb3ZlX21hcmt1cF90b19pZnJhbWUgPSBmdW5jdGlvbiAoc2VsZikge1xuICB2YXIgaWZyYW1lID0gc2VsZi5ub2RlLFxuICAgICAgaWZyYW1lX2NvbnRlbnQgPSBpZnJhbWUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5jb250ZW50KSxcbiAgICAgIGlmcmFtZV93aW5kb3cgPSBpZnJhbWUuY29udGVudFdpbmRvdztcblxuICBpZiAoIShpZnJhbWVfY29udGVudCAmJiBpZnJhbWVfd2luZG93KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmcmFtZV93aW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVfd2luZG93LmRvY3VtZW50LndyaXRlKCgwLCBfdXRpbGl0aWVzTWFya3VwLmRlY29kZV9odG1sX2VudGl0aWVzKShpZnJhbWVfY29udGVudC5pbm5lckhUTUwpKTtcbiAgaWZyYW1lX3dpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xufTtcblxuLy8qXG4vLyBUaGUgb2JqZWN0IHRoYXQgbWFuYWdlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIHBhcmVudCBwYWdlIGFuZCBhXG4vLyBkb2N1bWVudCBlbWJlZGRlZCBpbiBhbiBgaWZyYW1lYC4gRXNzZW50aWFsbHksIGNvbXBvbmVudHMgY2FuIHJlZ2lzdGVyIG9uXG4vLyBlaXRoZXIgc2lkZSBvZiB0aGUgY29pbiB3aXRoIHRoZSBgSWZyYW1lYCBmb3IgdGhhdCBzaWRlLiBUaGV5IGNhbiB0aGVuXG4vLyBzZW5kIG1lc3NhZ2VzLCB3aGljaCBnZXQgdHJpZ2dlcmVkIG9uIHRoZSBvdGhlciBzaWRlLCBhbmQgY2FuIGxpc3RlbiBmb3Jcbi8vIGV2ZW50cyBzZW50IGZyb20gdGhlIG90aGVyIHNpZGUuIFRoZSByZWdpc3RlcmluZyBhbmQgc2VuZGluZy8gbGlzdGVuaW5nIGlzXG4vLyBhbGwgaGFuZGxlZCBieSBbYENvbW11bmljYXRvcmBdKEBsaW5rKTsgdGhlIGBJZnJhbWVgIHNpbXBseSBtYW5hZ2VzIHRoZVxuLy8gdGhlIHBhc3Npbmcgb2YgZXZlbnRzIGJldHdlZW4gdGhlIHR3byBzaWRlcyBhbmQgdGhlIGNhbGxpbmcgb2YgZXZlbnRcbi8vIGhhbmRsZXJzIGluIGxpc3RlbmVycyB0aGF0IGhhdmUgYmVlbiByZWdpc3RlcmVkLlxuLy9cbi8vIEBmYWN0b3J5XG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBhY3R1YWwgYGlmcmFtZWAgbm9kZSAoaWYgaW4gdGhlIHBhcmVudCkgb3Jcbi8vIHRoZSB3cmFwcGVyIG5vZGUgKGlmIGluIHRoZSBjaGlsZCkgdGhhdCB3aWxsIGFjdCBhcyB0aGUgcm9vdCBmb3IgdGhlXG4vLyBgSWZyYW1lYC5cblxuSWZyYW1lID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHNlbGYgPSBjcmVhdGVfc2VsZihub2RlKTtcbiAgbW92ZV9tYXJrdXBfdG9faWZyYW1lKHNlbGYpO1xuICBhZGRfZXZlbnRfbGlzdGVuZXJzKHNlbGYpO1xuXG4gIHJldHVybiB7XG5cbiAgICAvLypcbiAgICAvLyBUcmlnZ2VyIGEgcGFydGljdWxhciBldmVudCwgc3VjaCB0aGF0IGl0IGdldHMgc2VudCB0byB0aGUgb3RoZXIgc2lkZSBvZlxuICAgIC8vIHRoZSBgaWZyYW1lYCBicmlkZ2UuIElmIHRoZSBgaWZyYW1lYCBoYXMgbm90IHlldCBsb2FkZWQsIHRoZSBtZXNzYWdlXG4gICAgLy8gd2lsbCBiZSBxdWV1ZWQgZm9yIHdoZW4gdGhlIGBpZnJhbWVgIGNvbW11bmljYXRpb24gaXMgYXZhaWxhYmxlLlxuICAgIC8vXG4gICAgLy8gQG1ldGhvZFxuICAgIC8vXG4gICAgLy8gQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBldmVudCB0byB0cmlnZ2VyLiBEbyBub3QgcGFzcyBhIHN0cmluZ1xuICAgIC8vIGxpdGVyYWw7IGluc3RlYWQsIHBhc3MgYW4gZXZlbnQgZGVmaW5lZCBvbiBbYEV2ZW50cy50eXBlc2BdKEBsaW5rKS5cbiAgICAvL1xuICAgIC8vIEBwYXJhbSB7Kn0gW2RhdGEgPSB7fV0gLSBUaGUgZGF0YSB0byBwYXNzIHRvIHRoZSBjb3JyZXNwb25kaW5nIGBJZnJhbWVgLlxuICAgIC8vIFRoaXMgY2FuIGJlIGFueXRoaW5nIHRoYXQgY2FuIGJlIHN0cmluZ2lmaWVkIHdpdGggYEpTT04uc3RyaW5naWZ5YC5cblxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIodHlwZSkge1xuICAgICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgZGF0YSA9IF9PYmplY3QkYXNzaWduKHt9LCB7IHR5cGU6IHR5cGUsIGlkOiBzZWxmLmlkIH0sIGRhdGEpO1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgcmV0dXJuIHNlbGYucmVhZHkgPyBzZWxmLm1lc3NhZ2UoZGF0YSkgOiBzZWxmLnF1ZXVlKGRhdGEpO1xuICAgIH0sXG5cbiAgICAvLypcbiAgICAvLyBSZWdpc3RlcnMgYSBsaXN0ZW5lciBvYmplY3Qgd2l0aCB0aGlzIGBJZnJhbWVgIHRoYXQgd2lsbCBiZSBub3RpZmllZCB3aGVuXG4gICAgLy8gZXZlbnRzIGFyZSByZWNpdmVkIGZyb20gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGBpZnJhbWVgIGJyaWRnZS5cbiAgICAvL1xuICAgIC8vIEBtZXRob2RcbiAgICAvL1xuICAgIC8vIEBwYXJhbSB7Q29tbXVuaWNhdG9yfSBsaXN0ZW5lciAtIFRoZSBvYmplY3QgdGhhdCB3aWxsIHJlY2VpdmUgZXZlbnRzLlxuICAgIC8vXG4gICAgLy8gQHJldHVybnMgQm9vbGVhbiAtIFJldHVybnMgYHRydWVgIGlmIHRoZSByZWdpc3RlciBjYWxsIHdhcyBzdWNjZXNzZnVsXG4gICAgLy8gKHRoYXQgaXMsIHRoZSBsaXN0ZW5lciBoYXMgdGhlIHJlcXVpcmVkIHNpZ25hdHVyZSBhbmQgaXMgbm90IGFscmVhZHlcbiAgICAvLyByZWdpc3RlcmVkKSwgYGZhbHNlYCBvdGhlcndpc2UuXG5cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIobGlzdGVuZXIpIHtcbiAgICAgIGlmIChzZWxmLmxpc3RlbmVycy5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgc2VsZi5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG59O1xuXG4vLypcbi8vIFJldHVybnMgdGhlIFtgSWZyYW1lYF0oQGxpbmspIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBub2RlLCBvclxuLy8gdGhlIGlmcmFtZSB3aG9zZSBJRCBtYXRjaGVzIHRoZSBwYXNzZWQgaWRlbnRpZmllci5cbi8vXG4vLyBAbWV0aG9kXG4vLyBAc3RhdGljXG4vL1xuLy8gQFBhcmFtIHtTdHJpbmcgfCBIVE1MRWxlbWVudH0gaWZyYW1lIC0gSWYgYSBgU3RyaW5nYCBpcyBwYXNzZWQsIHRoZVxuLy8gW2BJZnJhbWVgXShAbGluaykgZm9yIGFuIGBpZnJhbWVgIHdob3NlIGBkYXRhLWlmcmFtZS1pZGAgbWF0Y2hlcyB0aGUgc3RyaW5nLlxuLy8gSWYgYW4gYEhUTUxFbGVtZW50YCBpcyBwYXNzZWQsIHRoZSBbYElmcmFtZWBdKEBsaW5rKSBvYmplY3QgdGhhdCB3YXMgY3JlYXRlZFxuLy8gZm9yIHRoYXQgbm9kZS5cbi8vXG4vLyBAcmV0dXJucyB7SWZyYW1lIHwgQm9vbGVhbn0gLSBJZiBubyBtYXRjaGluZyBgSWZyYW1lYCBpcyBmb3VuZCwgYGZhbHNlYCB3aWxsXG4vLyBiZSByZXR1cm5lZC5cblxuSWZyYW1lW1wiZm9yXCJdID0gZnVuY3Rpb24gKGlmcmFtZSkge1xuICBpZiAodHlwZW9mIGlmcmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLmJhc2UgKyBcIltcIiArIGF0dHJzLmlkICsgXCI9J1wiICsgaWZyYW1lICsgXCInXVwiKTtcbiAgfVxuXG4gIGlmICghaWZyYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoMCwgX3V0aWxpdGllc0RvbV9jYWNoZTJbXCJkZWZhdWx0XCJdKShpZnJhbWUpLmdldChjbGFzc2VzLnJvb3QpO1xufTtcblxuLy8qXG4vLyBJbml0aWFsaXplcyB0aGUgYElmcmFtZWAgY29tcG9uZW50LlxuLy9cbi8vIEBtZXRob2Rcbi8vIEBzdGF0aWNcbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY29udGV4dCA9IGRvY3VtZW50XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRvIHNlYXJjaFxuLy8gZm9yIERPTSBub2RlcyB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIHRoZSByb290IG9mIGFuIGBJZnJhbWVgIGNvbXBvbmVudC5cblxuSWZyYW1lLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBhcmd1bWVudHNbMF07XG5cbiAgdmFyIGlmcmFtZV9ub2RlcyA9IF9BcnJheSRmcm9tKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIGNsYXNzZXMucm9vdCkpO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvcjYgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gX2dldEl0ZXJhdG9yKGlmcmFtZV9ub2RlcyksIF9zdGVwNjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IChfc3RlcDYgPSBfaXRlcmF0b3I2Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZSkge1xuICAgICAgdmFyIGlmcmFtZSA9IF9zdGVwNi52YWx1ZTtcbiAgICAgIElmcmFtZShpZnJhbWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvcjYgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgJiYgX2l0ZXJhdG9yNltcInJldHVyblwiXSkge1xuICAgICAgICBfaXRlcmF0b3I2W1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjYpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I2O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5Db21tdW5pY2F0b3IgPSBDb21tdW5pY2F0b3I7XG5leHBvcnRzLmNsYXNzZXMgPSBjbGFzc2VzO1xuZXhwb3J0cy5hdHRycyA9IGF0dHJzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJZnJhbWU7XG5cbn0se1wiLi4vLi4vdXRpbGl0aWVzL2RvbV9jYWNoZVwiOjExNyxcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIjoxMTgsXCIuLi8uLi91dGlsaXRpZXMvbWFya3VwXCI6MTIwLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDEwMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9hdmF0YXIgPSByZXF1aXJlKFwiLi9hdmF0YXJcIik7XG5cbnZhciBfYXZhdGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F2YXRhcik7XG5cbnZhciBfY29kZV9ibG9jayA9IHJlcXVpcmUoXCIuL2NvZGVfYmxvY2tcIik7XG5cbnZhciBfY29kZV9ibG9jazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlX2Jsb2NrKTtcblxudmFyIF9kZW1vID0gcmVxdWlyZShcIi4vZGVtb1wiKTtcblxudmFyIF9kZW1vMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbW8pO1xuXG52YXIgX2V4cGxvZGVkID0gcmVxdWlyZShcIi4vZXhwbG9kZWRcIik7XG5cbnZhciBfZXhwbG9kZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhwbG9kZWQpO1xuXG52YXIgX2ZpZWxkID0gcmVxdWlyZShcIi4vZmllbGRcIik7XG5cbnZhciBfZmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmllbGQpO1xuXG52YXIgX2lmcmFtZSA9IHJlcXVpcmUoXCIuL2lmcmFtZVwiKTtcblxudmFyIF9pZnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWZyYW1lKTtcblxudmFyIF9pbnRlcm5hbF9saW5rID0gcmVxdWlyZShcIi4vaW50ZXJuYWxfbGlua1wiKTtcblxudmFyIF9pbnRlcm5hbF9saW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVybmFsX2xpbmspO1xuXG52YXIgX3Jlc2l6YWJsZSA9IHJlcXVpcmUoXCIuL3Jlc2l6YWJsZVwiKTtcblxudmFyIF9yZXNpemFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzaXphYmxlKTtcblxudmFyIF9zY3JvbGxfY29udGFpbmVyID0gcmVxdWlyZShcIi4vc2Nyb2xsX2NvbnRhaW5lclwiKTtcblxudmFyIF9zY3JvbGxfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbF9jb250YWluZXIpO1xuXG52YXIgX3NlbGVjdCA9IHJlcXVpcmUoXCIuL3NlbGVjdFwiKTtcblxudmFyIF9zZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VsZWN0KTtcblxudmFyIF90YWJsZSA9IHJlcXVpcmUoXCIuL3RhYmxlXCIpO1xuXG52YXIgX3RhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmxlKTtcblxudmFyIF90YWJsaXN0ID0gcmVxdWlyZShcIi4vdGFibGlzdFwiKTtcblxudmFyIF90YWJsaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmxpc3QpO1xuXG52YXIgX3RvZ2dsZSA9IHJlcXVpcmUoXCIuL3RvZ2dsZVwiKTtcblxudmFyIF90b2dnbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9nZ2xlKTtcblxudmFyIF94cmF5ID0gcmVxdWlyZShcIi4veHJheVwiKTtcblxudmFyIF94cmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3hyYXkpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUZvdW5kYXRpb25BcHAgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2ZvdW5kYXRpb24vYXBwXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUZvdW5kYXRpb25BcHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlRm91bmRhdGlvbkFwcCk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuXG5bX2F2YXRhcjJbXCJkZWZhdWx0XCJdLCBfY29kZV9ibG9jazJbXCJkZWZhdWx0XCJdLCBfZXhwbG9kZWQyW1wiZGVmYXVsdFwiXSwgX2ZpZWxkMltcImRlZmF1bHRcIl0sIF9pZnJhbWUyW1wiZGVmYXVsdFwiXSwgX2ludGVybmFsX2xpbmsyW1wiZGVmYXVsdFwiXSwgX3Jlc2l6YWJsZTJbXCJkZWZhdWx0XCJdLCBfc2Nyb2xsX2NvbnRhaW5lcjJbXCJkZWZhdWx0XCJdLCBfZGVtbzJbXCJkZWZhdWx0XCJdLCBfc2VsZWN0MltcImRlZmF1bHRcIl0sIF90YWJsZTJbXCJkZWZhdWx0XCJdLCBfdGFibGlzdDJbXCJkZWZhdWx0XCJdLCBfdG9nZ2xlMltcImRlZmF1bHRcIl0sIF94cmF5MltcImRlZmF1bHRcIl1dLmZvckVhY2goX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUZvdW5kYXRpb25BcHAyW1wiZGVmYXVsdFwiXS5yZWdpc3Rlcik7XG5cbi8qIGVzbGludC1lbmFibGUgaW5kZW50ICovXG5cbn0se1wiLi9hdmF0YXJcIjo5NCxcIi4vY29kZV9ibG9ja1wiOjk1LFwiLi9kZW1vXCI6OTYsXCIuL2V4cGxvZGVkXCI6OTcsXCIuL2ZpZWxkXCI6OTgsXCIuL2lmcmFtZVwiOjk5LFwiLi9pbnRlcm5hbF9saW5rXCI6MTAxLFwiLi9yZXNpemFibGVcIjoxMDMsXCIuL3Njcm9sbF9jb250YWluZXJcIjoxMDUsXCIuL3NlbGVjdFwiOjEwNixcIi4vdGFibGVcIjoxMDcsXCIuL3RhYmxpc3RcIjoxMDgsXCIuL3RvZ2dsZVwiOjEwOSxcIi4veHJheVwiOjExMCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9mb3VuZGF0aW9uL2FwcFwiOjExMSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTAxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVN0cnVjdHVyZXNTaWRlYmFyID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9zdHJ1Y3R1cmVzL3NpZGViYXJcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlU3RydWN0dXJlc1NpZGViYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlU3RydWN0dXJlc1NpZGViYXIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNUYWJsaXN0ID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL3RhYmxpc3RcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c1RhYmxpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c1RhYmxpc3QpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNTY3JvbGxfY29udGFpbmVyID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL3Njcm9sbF9jb250YWluZXJcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c1Njcm9sbF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c1Njcm9sbF9jb250YWluZXIpO1xuXG52YXIgSW50ZXJuYWxMaW5rLCBtb3ZlX3RvX25vZGUsIG9uX2hhc2hfY2hhbmdlLCBwcm9jZXNzX2luaXRpYWxfaGFzaCwgY3VycmVudF9oYXNoO1xuXG5jdXJyZW50X2hhc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbn07XG5cbm1vdmVfdG9fbm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VDb21wb25lbnRzVGFibGlzdDJbXCJkZWZhdWx0XCJdLmFjdGl2YXRlX3BhbmVsX2NvbnRhaW5pbmcobm9kZSk7XG4gIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VDb21wb25lbnRzU2Nyb2xsX2NvbnRhaW5lcjJbXCJkZWZhdWx0XCJdW1wiZm9yXCJdKG5vZGUpLnNjcm9sbF90byhub2RlKTtcbn07XG5cbm9uX2hhc2hfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGFzaCA9IGN1cnJlbnRfaGFzaCgpLFxuICAgICAgbm9kZTtcblxuICBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlU3RydWN0dXJlc1NpZGViYXIyW1wiZGVmYXVsdFwiXS5oaWRlKCk7XG4gIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbm9kZS5pZCA9IG51bGw7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgbm9kZS5pZCA9IGhhc2g7XG4gIG1vdmVfdG9fbm9kZShub2RlKTtcbn07XG5cbnByb2Nlc3NfaW5pdGlhbF9oYXNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGFzaCA9IGN1cnJlbnRfaGFzaCgpLFxuICAgICAgbm9kZTtcblxuICBpZiAoIWhhc2gubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtb3ZlX3RvX25vZGUobm9kZSk7XG59O1xuXG5JbnRlcm5hbExpbmsgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCh3aW5kb3cpLm9uKFwiaGFzaGNoYW5nZVwiLCBvbl9oYXNoX2NoYW5nZSk7XG4gICAgc2V0VGltZW91dChwcm9jZXNzX2luaXRpYWxfaGFzaCwgMCk7XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW50ZXJuYWxMaW5rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvY29tcG9uZW50cy9zY3JvbGxfY29udGFpbmVyXCI6MTA1LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2NvbXBvbmVudHMvdGFibGlzdFwiOjEwOCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9zdHJ1Y3R1cmVzL3NpZGViYXJcIjoxMTQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDEwMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxufSx7fV0sMTAzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpemVfYnV0dG9ucyA9IHJlcXVpcmUoXCIuL3NpemVfYnV0dG9uc1wiKTtcblxudmFyIF9zaXplX2J1dHRvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6ZV9idXR0b25zKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VDb21wb25lbnRzSWZyYW1lID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL2lmcmFtZVwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9ldmVudHNcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0V2ZW50cyk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzVWlfZXZlbnRzID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvdWlfZXZlbnRzXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1VpX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNVaV9ldmVudHMpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMva2V5Y29kZXNcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcik7XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcInJlc2l6YWJsZVwiLFxuICBoYW5kbGU6IFwicmVzaXphYmxlX19oYW5kbGVcIixcbiAgY29udGFpbmVyOiBcInJlc2l6YWJsZV9fc2l6ZS1idXR0b25cIixcbiAgd2lkdGhfaW5kaWNhdG9yOiBcInJlc2l6YWJsZV9fd2lkdGgtaW5kaWNhdG9yXCIsXG4gIHB4X2luZGljYXRvcjogXCJyZXNpemFibGVfX3dpZHRoLWluZGljYXRvcl9fcHhcIixcbiAgZW1faW5kaWNhdG9yOiBcInJlc2l6YWJsZV9fd2lkdGgtaW5kaWNhdG9yX19lbVwiXG59O1xuXG52YXIgc3RhdGVzID0ge1xuICByb290OiB7IHRyYW5zaXRpb25pbmc6IFwicmVzaXphYmxlLS1pcy10cmFuc2l0aW9uaW5nLXdpZHRoXCIgfSxcbiAgc2l6ZV9idXR0b246IHtcbiAgICBoaWRkZW46IFwicmVzaXphYmxlX19zaXplLWJ1dHRvbi0taXMtaGlkZGVuXCIsXG4gICAgYWN0aXZlOiBcInJlc2l6YWJsZV9fc2l6ZS1idXR0b24tLWlzLWFjdGl2ZVwiXG4gIH0sXG4gIHdpZHRoX2luZGljYXRvcjogeyB2aXNpYmxlOiBcInJlc2l6YWJsZV9fd2lkdGgtaW5kaWNhdG9yLS1pcy12aXNpYmxlXCIgfVxufTtcblxudmFyIFNIT1dfV0lEVEhfRFVSQVRJT04gPSAyNTAwO1xuXG52YXIgUmVzaXphYmxlLCBrZXlfb25faGFuZGxlLCBoYW5kbGVfZHJhZ19tb3ZlLCBzdGFydF9kcmFnZ2luZ19oYW5kbGU7XG5cbi8vKlxuLy8gSGFuZGxlcyBrZXkgcHJlc3NlcyBvbiB0aGUgcmVzaXphYmxlIGhhbmRsZS4gSWYgdGhlIGtleSBpcyBhbiBhcnJvdyBrZXksXG4vLyB0aGUgcmVzaXphYmxlIGNvbXBvbmVudCB3aWxsIGJlIHJlc2l6ZWQgYXBwcm9wcmlhdGVseS4gSWYgdGhlIHNoaWZ0IGtleSBpc1xuLy8gYmVpbmcgcHJlc3NlZCBhdCB0aGUgc2FtZSB0aW1lLCB0aGUgcmVzaXppbmcgd2lsbCBiZSBhY2NlbGVyYXRlZC5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGtleXByZXNzYCBldmVudC5cbi8vIEBwcml2YXRlXG5cbmtleV9vbl9oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHdpZHRoX2NoYW5nZTtcblxuICBpZiAoIV9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNLZXljb2RlczJbXCJkZWZhdWx0XCJdLkFSUk9XUy5pbmNsdWRlcyhldmVudC53aGljaCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB3aWR0aF9jaGFuZ2UgPSBldmVudC5zaGlmdEtleSA/IDEwIDogMjtcbiAgaWYgKFtfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyW1wiZGVmYXVsdFwiXS5MRUZULCBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyW1wiZGVmYXVsdFwiXS5ET1dOXS5pbmNsdWRlcyhldmVudC53aGljaCkpIHtcbiAgICB3aWR0aF9jaGFuZ2UgPSB3aWR0aF9jaGFuZ2UgKiAtMTtcbiAgfVxuXG4gIFJlc2l6YWJsZVtcImZvclwiXShldmVudC50YXJnZXQpLnNldF93aWR0aCh7IGRlbHRhOiB3aWR0aF9jaGFuZ2UgfSk7XG59O1xuXG4vLypcbi8vIEhhbmRsZXMgYSBkcmFnIG1vdmVtZW50IHdoaWxlIGhvbGRpbmcgb250byBhIHJlc2l6YWJsZSBoYW5kbGUuIEFzIHRoZSB1c2VyXG4vLyBkcmFncywgdGhlIGFzc29jaWF0ZWQgcmVzaXphYmxlIGNvbXBvbmVudCB3aWxsIHJlc2l6ZS5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gY29udGV4dCAtIFRoZSBjb250ZXh0IGZvciB0aGUgY3VycmVudCBkcmFnLlxuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50ICAgLSBUaGUgYG1vdXNlbW92ZWAvIGB0b3VjaG1vdmVgIGV2ZW50LlxuLy9cbi8vIEBwcml2YXRlXG5cbmhhbmRsZV9kcmFnX21vdmUgPSBmdW5jdGlvbiAoY29udGV4dCwgZXZlbnQpIHtcbiAgdmFyIHggPSBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uY29vcmRpbmF0ZXMoZXZlbnQpLngsXG4gICAgICBkZWx0YSA9IHggLSBjb250ZXh0LnN0YXJ0X3g7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGV4dC5zZXRfd2lkdGgoY29udGV4dC5zdGFydF93aWR0aCArIDIgKiBkZWx0YSk7XG59O1xuXG4vLypcbi8vIEluaXRpYWxpemVzIHRoZSByZXF1aXJlZCBldmVudHMvIGF0dHJpYnV0ZXMgdG8gcGVyZm9ybSBhIGRyYWcgb24gYSByZXNpemFibGVcbi8vIGhhbmRsZS4gVGhpcyBmdW5jdGlvbiBhbHNvIHJlbW92ZXMgYWxsIHBvaW50ZXIgZXZlbnRzIG9uIHRoZSByZXNpemFibGUgdG9cbi8vIHByZXZlbnQgdW5uZWNlc3NhcnkgY2xpY2tzLyBob3ZlcnMvIHNlbGVjdHMuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgLSBUaGUgY29udGV4dCBmb3IgdGhlIGN1cnJlbnQgZHJhZy5cblxuc3RhcnRfZHJhZ2dpbmdfaGFuZGxlID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgdmFyIGRyYWdfbW92ZSwgZHJhZ19lbmQsIGxpc3RlbmVycztcblxuICBjb250ZXh0LmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgZHJhZ19tb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlX2RyYWdfbW92ZShjb250ZXh0LCBldmVudCk7XG4gIH07XG4gIGRyYWdfZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGxpc3RlbmVycy5yZW1vdmUoKTtcbiAgICBjb250ZXh0LmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gbnVsbDtcbiAgfTtcblxuICBsaXN0ZW5lcnMgPSBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uYWRkX2RyYWdfbGlzdGVuZXJzKGRyYWdfbW92ZSwgZHJhZ19lbmQpO1xufTtcblxuLy8qXG4vLyBUaGUgY29uc3RydWN0b3IgYXJvdW5kIGEgYFJlc2l6YWJsZWAgY29tcG9uZW50LiBUaGlzIGNvbXBvbmVudCBtYW5hZ2VzIG1hbnlcbi8vIHRoaW5ncywgaW5jbHVkaW5nOiB0aGUgaW50aWFsaXphdGlvbiBvZiByZXNpemluZyBieSBkcmFnZ2luZyBvbiB0aGVcbi8vIGBSZXNpemFibGVgJ3MgaGFuZGxlLCByZXNwb25kaW5nIHRvIGNoYW5nZXMgaW4gdGhlIHZpZXdwb3J0IHNpemUsIGFuZFxuLy8gcmVzcG9uZGluZyB0byBjaGFuZ2VzIGluIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lZCBgaWZyYW1lYC5cbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIHJvb3Qgbm9kZSBmb3IgdGhlIGBSZXNpemFibGVgXG4vL1xuLy8gQGZhY3RvcnlcblxuUmVzaXphYmxlID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgdmFyIGFwaSwgc3RydWN0dXJlLCBzZXRfd2lkdGgsIHNob3dfd2lkdGgsIHNpemVfYnV0dG9ucywgaGFuZGxlX2hvc3RfcmVzaXplLCBtaW5fd2lkdGgsIG1heF93aWR0aCwgY29udGFpbmVyX3NpZGVfcGFkZGluZywgd2lkdGhfdGFrZW5fYnlfc2lkZV9jb21wb25lbnRzLCBjb21tdW5pY2F0b3IsIHJlc3BvbmRfdG9faGVpZ2h0LCBzZXRfaGVpZ2h0LCBpbml0aWFsaXplX2hhbmRsZV9yZXNpemUsIGNvbnRhaW5lcl9zdHlsZXM7XG5cbiAgc2l6ZV9idXR0b25zID0gX3NpemVfYnV0dG9uczJbXCJkZWZhdWx0XCJdLndpdGhpbihyb290KVswXTtcblxuICBjb21tdW5pY2F0b3IgPSAoMCwgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNJZnJhbWUuQ29tbXVuaWNhdG9yKSgpO1xuICBjb21tdW5pY2F0b3IucmVnaXN0ZXIuZnJvbV9ub2RlKHJvb3QpO1xuXG4gIHJlc3BvbmRfdG9faGVpZ2h0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc2V0X2hlaWdodChldmVudC5oZWlnaHQpO1xuICB9O1xuICBjb21tdW5pY2F0b3Iub24oX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0V2ZW50czJbXCJkZWZhdWx0XCJdLnR5cGVzLmhlaWdodF9jaGFuZ2UsIHJlc3BvbmRfdG9faGVpZ2h0KTtcbiAgY29tbXVuaWNhdG9yLm9uKF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXS50eXBlcy5oZWlnaHRfcmVxdWVzdCwgcmVzcG9uZF90b19oZWlnaHQpO1xuXG4gIHN0cnVjdHVyZSA9IHtcbiAgICByb290OiByb290LFxuICAgIGlmcmFtZTogcm9vdC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLFxuICAgIGhhbmRsZTogcm9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5oYW5kbGUpLFxuICAgIGNvbnRhaW5lcjogcm9vdC5wYXJlbnROb2RlLFxuICAgIHdpZHRoX2luZGljYXRvcjogcm9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy53aWR0aF9pbmRpY2F0b3IpXG4gIH07XG5cbiAgY29udGFpbmVyX3N0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0cnVjdHVyZS5jb250YWluZXIpO1xuICBjb250YWluZXJfc2lkZV9wYWRkaW5nID0gcGFyc2VJbnQoY29udGFpbmVyX3N0eWxlcy5wYWRkaW5nTGVmdCwgMTApICsgcGFyc2VJbnQoY29udGFpbmVyX3N0eWxlcy5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICB3aWR0aF90YWtlbl9ieV9zaWRlX2NvbXBvbmVudHMgPSBzdHJ1Y3R1cmUuaGFuZGxlLm9mZnNldFdpZHRoO1xuICBtYXhfd2lkdGggPSBzdHJ1Y3R1cmUuaWZyYW1lLm9mZnNldFdpZHRoO1xuICBtaW5fd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5taW5XaWR0aCwgMTApIC0gd2lkdGhfdGFrZW5fYnlfc2lkZV9jb21wb25lbnRzO1xuXG4gIC8vKlxuICAvLyBDaGVja3Mgd2hldGhlciBvciBub3QgYSByZXNpemUgb2YgdGhlIHZpZXdwb3J0IGhhcyBjYXVzZWQgdGhlIHJlc2l6YWJsZVxuICAvLyB3aWR0aCB0byBiZSBncmVhdGVyIHRoYW4gaXQgaXMgYWxsb3dlZCB0byBiZS4gSWYgc28sIGl0IHdpbGwgZGVhY3RpdmF0ZVxuICAvLyB0aGUgc2l6ZSBidXR0b24gdGhhdCBjYXVzZWQgdGhhdCB3aWR0aCB0byBiZSBhY3RpdmUgKGlmIGFwcGxpY2FibGUpLCBhbmRcbiAgLy8gd2lsbCByZXNpemUgdGhlIGBSZXNpemFibGVgIGFuZCBkaXNwbGF5IHRoZSB3aWR0aC5cbiAgLy9cbiAgLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGByZXNpemVgIGV2ZW50IG9uIHRoZSBgd2luZG93YC5cbiAgLy8gQHByaXZhdGVcblxuICBoYW5kbGVfaG9zdF9yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbWF4X3dpZHRoID0gc3RydWN0dXJlLmNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIGNvbnRhaW5lcl9zaWRlX3BhZGRpbmcgLSB3aWR0aF90YWtlbl9ieV9zaWRlX2NvbXBvbmVudHM7XG4gICAgc2hvd193aWR0aCgpO1xuICB9O1xuXG4gIC8vKlxuICAvLyBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGBSZXNpemFibGVgLiBUaGlzIGlzIGRvbmUgZGlyZWN0bHkgb24gdGhlIGNvbnRhaW5lZFxuICAvLyBgaWZyYW1lYC5cbiAgLy9cbiAgLy8gQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBuZXcgaGVpZ2h0IG9mIHRoZSBjb250YWluZWQgYGlmcmFtZWAuXG4gIC8vIEBwcml2YXRlXG5cbiAgc2V0X2hlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICBzdHJ1Y3R1cmUuaWZyYW1lLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgfTtcblxuICAvLypcbiAgLy8gU2hvd3MgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIGNvbnRhaW5lZCBgaWZyYW1lYC4gVGhpcyBpbnZvbHZlcyBhIGZld1xuICAvLyB0aGluZ3M6IHRoZSB3aWR0aCBpcyBjb252ZXJ0ZWQgdG8gYGVtYCBhbmQgYm90aCB0aGUgYHB4YCBhbmQgYGVtYCB3aWR0aHNcbiAgLy8gYXJlIGRpc3BsYXllZCBpbiB0aGUgd2lkdGggaW5kaWNhdG9yLCB0aGUgdmlzaWJsZSBzdGF0ZSBpcyBhZGRlZCB0byB0aGVcbiAgLy8gd2lkdGggaW5kaWNhdG9yLCBhbmQgYSB0aW1lb3V0IGlzIHNldCB1cCB0byByZW1vdmUgdGhlIHZpc2libGUgc3RhdGUgKHNvXG4gIC8vIHRoYXQgdGhlIGluZGljYXRvciBpcyBoaWRkZW4gYWZ0ZXIgYSBzbWFsbCBkZWxheSkuXG4gIC8vXG4gIC8vIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAoaWZyYW1lLm9mZnNldFdpZHRoKSAtIFRoZSB3aWR0aCB0byBkaXNwbGF5LlxuICAvLyBAcHJpdmF0ZVxuXG4gIHNob3dfd2lkdGggPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaG93X3dpZHRoX3RpbWVvdXQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdpZHRoID0gc3RydWN0dXJlLmlmcmFtZS5vZmZzZXRXaWR0aDtcblxuICAgICAgc3RydWN0dXJlLndpZHRoX2luZGljYXRvci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5weF9pbmRpY2F0b3IpLnRleHRDb250ZW50ID0gd2lkdGg7XG4gICAgICBzdHJ1Y3R1cmUud2lkdGhfaW5kaWNhdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLmVtX2luZGljYXRvcikudGV4dENvbnRlbnQgPSAod2lkdGggLyAxNikudG9GaXhlZCgyKTtcblxuICAgICAgaWYgKHNob3dfd2lkdGhfdGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2hvd193aWR0aF90aW1lb3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cnVjdHVyZS53aWR0aF9pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChzdGF0ZXMud2lkdGhfaW5kaWNhdG9yLnZpc2libGUpO1xuICAgICAgfVxuXG4gICAgICBzaG93X3dpZHRoX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RydWN0dXJlLndpZHRoX2luZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlcy53aWR0aF9pbmRpY2F0b3IudmlzaWJsZSk7XG4gICAgICAgIHNob3dfd2lkdGhfdGltZW91dCA9IG51bGw7XG4gICAgICB9LCBTSE9XX1dJRFRIX0RVUkFUSU9OKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNldF93aWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBvcHRpb25zID0gd2lkdGg7XG4gICAgICB3aWR0aCA9IHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aF90YWtlbl9ieV9zaWRlX2NvbXBvbmVudHMgKyAob3B0aW9ucy5kZWx0YSB8fCAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hbmltYXRlZCkge1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKHN0YXRlcy5yb290LnRyYW5zaXRpb25pbmcpO1xuICAgICAgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1VpX2V2ZW50czJbXCJkZWZhdWx0XCJdLnRyYW5zaXRpb24ocm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnJvb3QudHJhbnNpdGlvbmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAod2lkdGgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgoTWF0aC5taW4od2lkdGgsIG1heF93aWR0aCksIG1pbl93aWR0aCk7XG4gICAgICByb290LnN0eWxlLndpZHRoID0gd2lkdGggKyB3aWR0aF90YWtlbl9ieV9zaWRlX2NvbXBvbmVudHMgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3Quc3R5bGUud2lkdGggPSBudWxsO1xuICAgIH1cblxuICAgIHNob3dfd2lkdGgoKTtcblxuICAgIHNpemVfYnV0dG9ucy50cnlfc2l6ZSh3aWR0aCk7XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9O1xuXG4gIC8vKlxuICAvLyBMaXN0ZW5zIGZvciB0aGUgc3RhcnQgb2YgYSBkcmFnIG9uIHRoZSBgUmVzaXphYmxlYCBjb21wb25lbnQncyBoYW5kbGUgYW5kXG4gIC8vIHBhc3NlcyB0aGUgYXNzb2NpYXRlZCBjb250ZXh0IHRvIGBzdGFydF9kcmFnZ2luZ19oYW5kbGVgIHNvIHRoYXQgdGhlIGRyYWdcbiAgLy8gZXZlbnRzIGNhbiBiZSBwcm9wZXJseSBhdHRhY2hlZC5cbiAgLy9cbiAgLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGBtb3VzZWRvd25gLyBgdG91Y2hzdGFydGAgZXZlbnQuXG4gIC8vIEBwcml2YXRlXG5cbiAgaW5pdGlhbGl6ZV9oYW5kbGVfcmVzaXplID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICBzdGFydF94OiBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzVWlfZXZlbnRzMltcImRlZmF1bHRcIl0uY29vcmRpbmF0ZXMoZXZlbnQpLngsXG4gICAgICBzdGFydF93aWR0aDogc3RydWN0dXJlLmlmcmFtZS5vZmZzZXRXaWR0aCxcbiAgICAgIG1heF93aWR0aDogc3RydWN0dXJlLmNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIGNvbnRhaW5lcl9zaWRlX3BhZGRpbmcsXG4gICAgICBzZXRfd2lkdGg6IHNldF93aWR0aCxcbiAgICAgIGlmcmFtZTogc3RydWN0dXJlLmlmcmFtZVxuICAgIH07XG5cbiAgICBzdGFydF9kcmFnZ2luZ19oYW5kbGUoY29udGV4dCk7XG4gIH07XG5cbiAgc2hvd193aWR0aCgpO1xuXG4gICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBoYW5kbGVfaG9zdF9yZXNpemUpO1xuICAkKHN0cnVjdHVyZS5oYW5kbGUpLm9uKF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNVaV9ldmVudHMyW1wiZGVmYXVsdFwiXS5kcmFnLnN0YXJ0LCBpbml0aWFsaXplX2hhbmRsZV9yZXNpemUpO1xuXG4gIGFwaSA9IHsgc2V0X3dpZHRoOiBzZXRfd2lkdGggfTtcbiAgcmV0dXJuIGFwaTtcbn07XG5cblJlc2l6YWJsZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBfc2l6ZV9idXR0b25zMltcImRlZmF1bHRcIl0uaW5pdCgpO1xuICBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcjJbXCJkZWZhdWx0XCJdLmJ1aWxkX2FuZF9jYWNoZShSZXNpemFibGUsIHsgbmFtZTogY2xhc3Nlcy5yb290IH0pO1xuXG4gICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBcIi5cIiArIGNsYXNzZXMuaGFuZGxlLCBrZXlfb25faGFuZGxlKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVzaXphYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCIuL3NpemVfYnV0dG9uc1wiOjEwNCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL2lmcmFtZVwiOjk5LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCI6MTE1LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9ldmVudHNcIjoxMTgsXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2tleWNvZGVzXCI6MTE5LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy91aV9ldmVudHNcIjoxMjgsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDEwNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9BcnJheSRmcm9tID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZXNpemFibGUgPSByZXF1aXJlKFwiLi9yZXNpemFibGVcIik7XG5cbnZhciBfcmVzaXphYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc2l6YWJsZSk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlciA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2J1aWxkZXJcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNCdWlsZGVyKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNLZXljb2RlcyA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2tleWNvZGVzXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzKTtcblxudmFyIFNpemVCdXR0b25zLCBTaXplUmVsYXRpb25zaGlwcywgY2xpY2tfc2l6ZV9idXR0b24sIG5leHRfdW5oaWRkZW5fc2l6ZV9idXR0b24sIHByZXZpb3VzX3VuaGlkZGVuX3NpemVfYnV0dG9uLCBrZXlfb25fc2l6ZV9idXR0b247XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcInJlc2l6YWJsZV9fc2l6ZS1idXR0b25cIixcbiAgY29udGFpbmVyOiBcInJlc2l6YWJsZV9fc2l6ZS1idXR0b25zXCJcbn07XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBoaWRkZW46IFwicmVzaXphYmxlX19zaXplLWJ1dHRvbi0taXMtaGlkZGVuXCIsXG4gICAgYWN0aXZlOiBcInJlc2l6YWJsZV9fc2l6ZS1idXR0b24tLWlzLWFjdGl2ZVwiXG4gIH1cbn07XG5cbnZhciBhdHRycyA9IHtcbiAgYnV0dG9uX3NpemU6IFwiZGF0YS1yZXNpemFibGUtc2l6ZS1idXR0b24tc2l6ZVwiLFxuICBzaXplX3RvOiBcImRhdGEtcmVzaXphYmxlLXNpemUtdG9cIlxufTtcblxuU2l6ZVJlbGF0aW9uc2hpcHMgPSB7XG4gIFNNQUxMOiAzMjAsXG4gIE1FRElVTTogNzY4LFxuICBMQVJHRTogOTYwXG59O1xuXG4vLyBBdHRhY2hlcyBtZWRpYSBxdWVyaWVzIGZvciBlYWNoIG9mIHRoZSBzaXplIGJ1dHRvbnMgdG8gY29uZGl0aW9uYWxseSBoaWRlL1xuLy8gc2hvdyB0aGVtIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB0aGUgc2l6ZSB0aGV5IHdhbnQgdG8gZ2VuZXJhdGUgaXMgd2l0aGluXG4vLyB0aGUgYXZhaWxhYmxlIHNwYWNlLlxuLy9cbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbiAtIFRoZSBzaXplIGJ1dHRvbi4gSXQgc2hvdWxkIGhhdmUgYW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGF0dHJzLmJ1dHRvbl9zaXplYCBhdHRyaWJ1dGUsIHdoaWNoIGRldGVybWluZXNcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hhdCBzaXplIHRoZXkgc2hvdWxkIG1ha2UgdGhlIGNvbXBvbmVudC5cbi8vIEBwYXJhbSB7TnVtYmVyfSBzaXplX2FkanVzdG1lbnQgLSBUaGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSB2aWV3cG9ydFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0aGUgc3BhY2UgYXZhaWxhYmxlIHRvIHRoZSBjb21wb25lbnQuXG4vL1xuLy8gQHByaXZhdGVcblxuLy8gYXR0YWNoX21lZGlhX2xpc3RlbmVyX3RvX3NpemVfYnV0dG9uID0gKGJ1dHRvbiwgc2l6ZV9hZGp1c3RtZW50ID0gMCkgPT4ge1xuLy8gICB2YXIgc2l6ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoYXR0cnMuYnV0dG9uX3NpemUpLFxuLy8gICAgICAgcmVzcG9uZF93aWR0aCA9IFNpemVSZWxhdGlvbnNoaXBzW3NpemUudG9VcHBlckNhc2UoKV0sXG4vLyAgICAgICBsaXN0ZW5lciwgbWVkaWFfcXVlcnk7XG5cbi8vICAgaWYoIXJlc3BvbmRfd2lkdGgpIHsgcmV0dXJuOyB9XG4vLyAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYXR0cnMuc2l6ZV90bywgcmVzcG9uZF93aWR0aCk7XG5cbi8vICAgbGlzdGVuZXIgPSAobXEpID0+IHtcbi8vICAgICBidXR0b24uY2xhc3NMaXN0W21xLm1hdGNoZXMgPyBcInJlbW92ZVwiIDogXCJhZGRcIl0oc3RhdGVzLnNpemVfYnV0dG9uLmhpZGRlbik7XG4vLyAgIH07XG5cbi8vICAgbWVkaWFfcXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHtyZXNwb25kX3dpZHRoICsgc2l6ZV9hZGp1c3RtZW50fXB4KWApO1xuLy8gICBtZWRpYV9xdWVyeS5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4vLyAgIGxpc3RlbmVyKG1lZGlhX3F1ZXJ5KTtcbi8vIH07XG5cbi8vKlxuLy8gQ2FwdHVyZXMgYSBjbGljayBldmVuIG9uIGEgc2l6ZSBidXR0b24gYW5kIHNlbmRzIHRoZSBhcHByb3ByaWF0ZSBgc2V0X3dpZHRoYFxuLy8gbWV0aG9kIGNhbGwgdG8gdGhlIGFzc29jaWF0ZWQgYFJlc2l6YWJsZWAgY29tcG9uZW50LlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSBjbGljayBldmVudC5cbi8vIEBwcml2YXRlXG5cbmNsaWNrX3NpemVfYnV0dG9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBidXR0b24gPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5cIiArIGNsYXNzZXMucm9vdCk7XG4gIFNpemVCdXR0b25zW1wiZm9yXCJdKGJ1dHRvbikuYWN0aXZlX2J1dHRvbiA9IGJ1dHRvbjtcbn07XG5cbi8vKlxuLy8gRmluZHMgdGhlIG5leHQgdmlzaWJsZSBzaXplIGJ1dHRvbiBhZnRlciB0aGUgcGFzc2VkIGBidXR0b25gLiBUaGlzIGlzIHVzZWRcbi8vIGZvciBjeWNsaW5nIHRocm91Z2ggdGhlc2UgYnV0dG9ucyB3aXRoIHRoZSBrZXlib2FyZC4gVGhpcyB3aWxsIGN5Y2xlIHRocm91Z2hcbi8vIGFsbCBidXR0b25zIGluIHRoZSBsaXN0LCB3cmFwcGluZyBhcm91bmQgdG8gdGhlIGZpcnN0IGJ1dHRvbnMgaWYgbm8gZm9sbG93aW5nXG4vLyBidXR0b25zIGFyZSB2aXNpYmxlLiBBcyBhIHJlc3VsdCwgdGhpcyBtZXRob2QgbWlnaHQgcmV0dXJuIHRoZSBzYW1lIGBidXR0b25gXG4vLyB0aGF0IHdhcyBwYXNzZWQgKGlmIGl0IGlzIHRoZSBvbmx5IHZpc2libGUgc2l6ZSBidXR0b24pLlxuLy9cbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbiAtIFRoZSBjdXJyZW50IGJ1dHRvbiAodGhhdCB0aGUgdXNlciBpcyBtb3Zpbmcgb2ZmXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHdpdGggdGhlIGtleWJvYXJkKS5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHJldHVybnMgSFRNTEVsZW1lbnQgLSBUaGUgbmV4dCB2aXNpYmxlIHNpemUgYnV0dG9uIHdpdGhpbiB0aGUgYGJ1dHRvbmAncyBzZXQuXG5cbm5leHRfdW5oaWRkZW5fc2l6ZV9idXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gIHZhciBzaWJsaW5nID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmICghc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLnNpemVfYnV0dG9uLmhpZGRlbikpIHtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfZ2V0SXRlcmF0b3IoX0FycmF5JGZyb20oYnV0dG9uLnBhcmVudE5vZGUuY2hpbGRyZW4pKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgc2libGluZyA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoc2libGluZyA9PT0gYnV0dG9uKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMuc2l6ZV9idXR0b24uaGlkZGVuKSkge1xuICAgICAgICByZXR1cm4gc2libGluZztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLy8qXG4vLyBGaW5kcyB0aGUgcHJldmlvdXMgdmlzaWJsZSBzaXplIGJ1dHRvbiBhZnRlciB0aGUgcGFzc2VkIGBidXR0b25gLiBUaGlzIGlzIHVzZWRcbi8vIGZvciBjeWNsaW5nIHRocm91Z2ggdGhlc2UgYnV0dG9ucyB3aXRoIHRoZSBrZXlib2FyZC4gVGhpcyB3aWxsIGN5Y2xlIHRocm91Z2hcbi8vIGFsbCBidXR0b25zIGluIHRoZSBsaXN0LCB3cmFwcGluZyBhcm91bmQgdG8gdGhlIGxhc3QgYnV0dG9ucyBpZiBubyBwcmV2aW91c1xuLy8gYnV0dG9ucyBhcmUgdmlzaWJsZS4gQXMgYSByZXN1bHQsIHRoaXMgbWV0aG9kIG1pZ2h0IHJldHVybiB0aGUgc2FtZSBgYnV0dG9uYFxuLy8gdGhhdCB3YXMgcGFzc2VkIChpZiBpdCBpcyB0aGUgb25seSB2aXNpYmxlIHNpemUgYnV0dG9uKS5cbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSBidXR0b24gLSBUaGUgY3VycmVudCBidXR0b24gKHRoYXQgdGhlIHVzZXIgaXMgbW92aW5nIG9mZlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB3aXRoIHRoZSBrZXlib2FyZCkuXG4vL1xuLy8gQHByaXZhdGVcbi8vIEByZXR1cm5zIEhUTUxFbGVtZW50IC0gVGhlIHByZXZpb3VzIHZpc2libGUgc2l6ZSBidXR0b24gd2l0aGluIHRoZSBgYnV0dG9uYCdzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgc2V0LlxuXG5wcmV2aW91c191bmhpZGRlbl9zaXplX2J1dHRvbiA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgdmFyIHNpYmxpbmcgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmICghc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLnNpemVfYnV0dG9uLmhpZGRlbikpIHtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbShidXR0b24ucGFyZW50Tm9kZS5jaGlsZHJlbikucmV2ZXJzZSgpKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICBzaWJsaW5nID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICBpZiAoc2libGluZyA9PT0gYnV0dG9uKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMuc2l6ZV9idXR0b24uaGlkZGVuKSkge1xuICAgICAgICByZXR1cm4gc2libGluZztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yMltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vKlxuLy8gSGFuZGxlcyBrZXkgcHJlc3NlcyBvbiBhIHNpemUgYnV0dG9uLiBJZiB0aGUga2V5IGlzIGVudGVyIG9yIHNwYWNlLCB0aGVcbi8vIHNpemUgYnV0dG9uIHdpbGwgYmUgYWN0aXZhdGVkLiBJZiB0aGUga2V5IGlzIGFuIGFycm93IGtleSwgdGhpcyBmdW5jdGlvbiB3aWxsXG4vLyBtb3ZlIGZvY3VzIHRvIHRoZSBjb3JyZWN0IHNpYmxpbmcgc2l6ZSBidXR0b24uXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGBrZXlwcmVzc2AgZXZlbnQuXG4vLyBAcHJpdmF0ZVxuXG5rZXlfb25fc2l6ZV9idXR0b24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGJ1dHRvbiwgbmV3X2J1dHRvbjtcblxuICBpZiAoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMltcImRlZmF1bHRcIl0uQUNUSVZBVEUuaW5jbHVkZXMoZXZlbnQud2hpY2gpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjbGlja19zaXplX2J1dHRvbihldmVudCk7XG4gIH1cblxuICBpZiAoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMltcImRlZmF1bHRcIl0uQVJST1dTLmluY2x1ZGVzKGV2ZW50LndoaWNoKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnNpemVfYnV0dG9uKVswXTtcbiAgICBuZXdfYnV0dG9uID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMltcImRlZmF1bHRcIl0uTkVYVC5pbmNsdWRlcyhldmVudC53aGljaCkgPyBuZXh0X3VuaGlkZGVuX3NpemVfYnV0dG9uKGJ1dHRvbikgOiBwcmV2aW91c191bmhpZGRlbl9zaXplX2J1dHRvbihidXR0b24pO1xuXG4gICAgaWYgKG5ld19idXR0b24pIHtcbiAgICAgIFNpemVCdXR0b25zW1wiZm9yXCJdKGJ1dHRvbikuZm9jdXNlZF9idXR0b24gPSBuZXdfYnV0dG9uO1xuICAgIH1cbiAgfVxufTtcblxuLy8qXG4vLyBAZmFjdG9yeVxuXG5TaXplQnV0dG9ucyA9IGZ1bmN0aW9uIChidXR0b25zKSB7XG4gIHZhciBhcGksIGFzc29jaWF0aW9ucywgYWN0aXZlX2J1dHRvbiwgYTExeSwgYWN0aXZhdGVfYnV0dG9uLCBmb2N1c19idXR0b24sIGFjdGl2YXRlX2FjdGl2ZV9idXR0b24sIGRlYWN0aXZhdGVfYWN0aXZlX2J1dHRvbiwgc2l6ZSwgYV9idXR0b247XG5cbiAgYnV0dG9ucyA9IF9BcnJheSRmcm9tKGJ1dHRvbnMuY2hpbGRyZW4pO1xuICBhc3NvY2lhdGlvbnMgPSB7fTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9nZXRJdGVyYXRvcihidXR0b25zKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICBhX2J1dHRvbiA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgc2l6ZSA9IFNpemVSZWxhdGlvbnNoaXBzW2FfYnV0dG9uLmdldEF0dHJpYnV0ZShhdHRycy5idXR0b25fc2l6ZSldO1xuICAgICAgYXNzb2NpYXRpb25zW3NpemVdID0gYV9idXR0b247XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcjNbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYTExeSA9IHtcbiAgICBmb2N1czogZnVuY3Rpb24gZm9jdXMoYnV0dG9uKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgYnV0dG9uLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoYnV0dG9uKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICB9LFxuXG4gICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoYnV0dG9uKSB7XG4gICAgICB0aGlzLmZvY3VzKGJ1dHRvbik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcInRydWVcIik7XG4gICAgfSxcblxuICAgIGRlc2VsZWN0OiBmdW5jdGlvbiBkZXNlbGVjdChidXR0b24pIHtcbiAgICAgIHRoaXMuYmx1cihidXR0b24pO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgZGVhY3RpdmF0ZV9hY3RpdmVfYnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghYWN0aXZlX2J1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGExMXkuZGVzbGVjdChhY3RpdmVfYnV0dG9uKTtcbiAgICBhY3RpdmVfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnJvb3QuYWN0aXZlKTtcbiAgfTtcblxuICBhY3RpdmF0ZV9idXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgaWYgKCFidXR0b25zLmluY2x1ZGVzKGJ1dHRvbikgfHwgYWN0aXZlX2J1dHRvbiA9PT0gYnV0dG9uKSB7XG4gICAgICByZXR1cm4gYWN0aXZlX2J1dHRvbjtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlX2FjdGl2ZV9idXR0b24oKTtcbiAgICBhY3RpdmVfYnV0dG9uID0gYnV0dG9uO1xuICAgIF9yZXNpemFibGUyW1wiZGVmYXVsdFwiXVtcImZvclwiXShidXR0b24pLnNldF93aWR0aChwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKGF0dHJzLnNpemVfYnV0dG9uKSwgMTApLCB7IGFuaW1hdGVkOiB0cnVlIH0pO1xuICAgIGFjdGl2YXRlX2FjdGl2ZV9idXR0b24oKTtcbiAgICByZXR1cm4gYWN0aXZlX2J1dHRvbjtcbiAgfTtcblxuICBmb2N1c19idXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgYTExeS5mb2N1cyhidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgYWN0aXZhdGVfYWN0aXZlX2J1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFjdGl2ZV9idXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhMTF5LnNlbGVjdChhY3RpdmVfYnV0dG9uKTtcbiAgICBhY3RpdmVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoc3RhdGVzLnJvb3QuYWN0aXZlKTtcbiAgfTtcblxuICBhcGkgPSBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe1xuXG4gICAgdHJ5X3NpemU6IGZ1bmN0aW9uIHRyeV9zaXplKG5ld19zaXplKSB7XG4gICAgICBkZWFjdGl2YXRlX2FjdGl2ZV9idXR0b24oKTtcbiAgICAgIGFjdGl2ZV9idXR0b24gPSBhc3NvY2lhdGlvbnNbbmV3X3NpemVdO1xuICAgICAgYWN0aXZhdGVfYWN0aXZlX2J1dHRvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGFjdGl2ZV9idXR0b246IHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gYWN0aXZhdGVfYnV0dG9uKGJ1dHRvbik7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVfYnV0dG9uO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LFxuICAgIGZvY3VzZWRfYnV0dG9uOiB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIGZvY3VzX2J1dHRvbihidXR0b24pO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59O1xuXG5TaXplQnV0dG9ucy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcjJbXCJkZWZhdWx0XCJdLmJ1aWxkX2FuZF9jYWNoZShTaXplQnV0dG9ucywgeyBuYW1lOiBjbGFzc2VzLmNvbnRhaW5lciB9KTtcblxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLlwiICsgY2xhc3Nlcy5yb290LCBjbGlja19zaXplX2J1dHRvbikub24oXCJrZXlkb3duXCIsIFwiLlwiICsgY2xhc3Nlcy5yb290LCBrZXlfb25fc2l6ZV9idXR0b24pO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaXplQnV0dG9ucztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbn0se1wiLi9yZXNpemFibGVcIjoxMDMsXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2J1aWxkZXJcIjoxMTUsXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2tleWNvZGVzXCI6MTE5LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCI6NixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTA1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcik7XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcInNjcm9sbC1jb250YWluZXJcIlxufTtcblxudmFyIFNjcm9sbENvbnRhaW5lcjtcblxuU2Nyb2xsQ29udGFpbmVyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGZvcmNlX2hlaWdodCA9IGZ1bmN0aW9uIGZvcmNlX2hlaWdodChoZWlnaHQpIHtcbiAgICBub2RlLnN0eWxlLm1pbkhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1haW50YWluX2N1cnJlbnRfaGVpZ2h0OiBmdW5jdGlvbiBtYWludGFpbl9jdXJyZW50X2hlaWdodCgpIHtcbiAgICAgIGZvcmNlX2hlaWdodChub2RlLm9mZnNldEhlaWdodCk7XG4gICAgfSxcbiAgICByZXN0b3JlX2hlaWdodDogZnVuY3Rpb24gcmVzdG9yZV9oZWlnaHQoKSB7XG4gICAgICBub2RlLnN0eWxlLm1pbkhlaWdodCA9IG51bGw7XG4gICAgfSxcblxuICAgIHNjcm9sbF90bzogZnVuY3Rpb24gc2Nyb2xsX3RvKGNvbnRhaW5lZF9ub2RlKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUuc2Nyb2xsVG9wID0gY29udGFpbmVkX25vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgfVxuICB9O1xufTtcblxuU2Nyb2xsQ29udGFpbmVyLmluaXQgPSBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcjJbXCJkZWZhdWx0XCJdLmluaXRpYWxpemVfb25jZShTY3JvbGxDb250YWluZXIsIHsgbmFtZTogY2xhc3Nlcy5yb290LCBjYWNoZTogdHJ1ZSB9KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY3JvbGxDb250YWluZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvYnVpbGRlclwiOjExNSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTA2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNsYXNzZXMgPSB7XG4gIHJvb3Q6IFwic2VsZWN0XCIsXG4gIGlucHV0OiBcInNlbGVjdF9faW5wdXRcIlxufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcm9vdDogeyBmb2N1c2VkOiBjbGFzc2VzLnJvb3QgKyBcIi0taXMtZm9jdXNlZFwiIH1cbn07XG5cbnZhciBTZWxlY3QsIGZvY3VzX29yX2JsdXJfc2VsZWN0O1xuXG4vLypcbi8vIFRyYW5zbGF0ZXMgdGhlIGBmb2N1c2AvIGBibHVyYCBldmVudHMgb24gdGhlIGFjdHVhbCBgc2VsZWN0YCBub2RlIGludG8gdGhlXG4vLyBhcHByb3ByaWF0ZSBhZGRpdGlvbi8gcmVtb3ZhbCBvZiB0aGUgZm9jdXNlZCBzdGF0ZSBvbiB0aGUgYmFzZSBub2RlIG9mIHRoZVxuLy8gY29tcG9uZW50LiBUaGlzIGhhcyB0byBiZSBkb25lIGJlY2F1c2UgbW9zdCBvZiB0aGUgdmlzdWFsIHN0eWxpbmcgZm9yIHRoZVxuLy8gY29tcG9uZW50IGlzIHBsYWNlZCBvbiB0aGUgY29udGFpbmVyLCBzbyBhbnkgYWRqdXN0bWVudHMgdG8gdGhvc2Ugc3R5bGVzIG9uXG4vLyBmb2N1cyByZXF1aXJlIHRoYXQgY29udGFpbmVyIHRvIGJlIGF3YXJlIG9mIHRoZSBzdGF0ZSBvZiBpdHMgY29udGFpbmVkXG4vLyBgc2VsZWN0YC5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGZvY3VzYC8gYGJsdXJgIGV2ZW50IG9uIHRoZSBgc2VsZWN0YC5cbi8vIEBwcml2YXRlXG5cbmZvY3VzX29yX2JsdXJfc2VsZWN0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtZXRob2QgPSBldmVudC50eXBlID09PSBcImZvY3VzaW5cIiA/IFwiYWRkXCIgOiBcInJlbW92ZVwiO1xuICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi4je0NMQVNTRVMuQkFTRX1cIilbMF0uY2xhc3NMaXN0W21ldGhvZF0oc3RhdGVzLnJvb3QuZm9jdXNlZCk7XG59O1xuXG5TZWxlY3QgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJChkb2N1bWVudCkub24oXCJmb2N1cyBibHVyXCIsIFwiLlwiICsgY2xhc3Nlcy5pbnB1dCwgZm9jdXNfb3JfYmx1cl9zZWxlY3QpO1xuICB9XG59O1xuXG5leHBvcnRzLmNsYXNzZXMgPSBjbGFzc2VzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTZWxlY3Q7XG5cbn0se31dLDEwNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXlcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9idWlsZGVyXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9rZXljb2Rlc1wiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNLZXljb2RlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNLZXljb2Rlcyk7XG5cbnZhciBjbGFzc2VzID0ge1xuICByb290OiBcInRhYmxlXCIsXG4gIGhlYWRlcjogXCJ0YWJsZV9faGVhZGVyXCIsXG4gIGJvZHk6IFwidGFibGVfX2JvZHlcIixcbiAgcm93OiBcInRhYmxlX19yb3dcIixcbiAgY2VsbDogXCJ0YWJsZV9fY2VsbFwiLFxuICBzY3JvbGxlcjogXCJ0YWJsZV9fc2Nyb2xsZXJcIixcbiAgY29udGFpbmVyOiBcInRhYmxlX19jb250YWluZXJcIixcbiAgYWN0aW9uczogXCJ0YWJsZV9fYWN0aW9uc1wiXG59O1xuXG52YXIgc3RhdGVzID0ge1xuICBzY3JvbGxlcjogeyBzY3JvbGxlZDogXCJ0YWJsZV9fc2Nyb2xsZXItLWlzLXNjcm9sbGVkXCIgfSxcbiAgY29udGFpbmVyOiB7IG92ZXJmbG93aW5nOiBcInRhYmxlX19jb250YWluZXItLWlzLW92ZXJmbG93aW5nXCIgfVxufTtcblxudmFyIGF0dHJzID0ge1xuICBhY3Rpb246IFwidGFibGUtYWN0aW9uXCJcbn07XG5cbnZhciBhY3Rpb25zID0ge1xuICBzaGlmdF9yaWdodDogXCJzaGlmdC1yaWdodFwiLFxuICBzaGlmdF9sZWZ0OiBcInNoaWZ0LWxlZnRcIlxufTtcblxudmFyIFRhYmxlLCBjYWNoZV9wcmVmZXJyZWRfd2lkdGhzLCBjaGVja19mb3Jfb3ZlcmZsb3csIHNoaWZ0X3RhYmxlX3JpZ2h0LCBzaGlmdF90YWJsZV9sZWZ0LCBsYXN0X3Zpc2libGVfY2VsbCwgaGFuZGxlX2tleXByZXNzLCBoYW5kbGVfc2Nyb2xsLCBpbml0aWFsaXplX3RhYmxlX2FjdGlvbnMsIHVwZGF0ZV9hY3Rpb25zO1xuXG4vLypcbi8vIENhbGN1bGF0ZXMgYW5kIGFwcGxpZXMgdGhlIGludHJpbnNpYyB3aWR0aHMgb2YgdGhlIGNvbHVtbnMgb2YgYSBgdGFibGVgLFxuLy8ga2VlcGluZyBpbiBtaW5kIHRoZSBlZmZlY3RpdmUgbWF4aW11bSBjb2x1bW4gc2l6ZSBpbXBsaWVkIGJ5IHRoZSBgbWluLXdpZHRoYFxuLy8gc2V0IG9uIHRoZSB0YWJsZS5cbi8vXG4vLyBUaGUgaW50cmluc2ljIHdpZHRocyBvZiBlYWNoIGNvbHVtbiBhcmUgYXBwbGllZCBvbmx5IG9uY2UsIHRvIHRoZSBoZWFkZXJcbi8vIGNlbGxzIG9mIHRoZSBjb2x1bW4uIFRoZXNlIGFyZSBhcHBsaWVkIGJ5IHVzaW5nIHRoZW0gYXMgdGhlIGBtaW4td2lkdGhgcyBmb3Jcbi8vIGVhY2ggaGVhZGVyIGNlbGwsIHNvIHRoYXQgdGhlIHRhYmxlIHdpbGwgYXBwcm9wcmlhdGVseSBvdmVyZmxvdyBvbmNlIHRoZVxuLy8gc3BhY2UgYXZhaWxhYmxlIHRvIHRoZSB0YWJsZSBpcyBsZXNzIHRoYW4gdGhlIHN1bSBvZiBpdHMgaW50cmluc2ljIHdpZHRocy5cbi8vXG4vLyBBIHNpZGUgZWZmZWN0IG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhhdCBgc2VsZmAgaXMgYXVnbWVudGVkIHdpdGggdGhlIG1pbmltdW1cbi8vIHRvdGFsIGludHJpbnNpYyB3aWR0aCBvZiBpdHMgY29sdW1ucyAoYG1pbl93aWR0aGApLlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYSBgVGFibGVgLlxuLy8gQHByaXZhdGVcblxuY2FjaGVfcHJlZmVycmVkX3dpZHRocyA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciB0YWJsZSA9IHNlbGYucm9vdCxcbiAgICAgIGNsb25lID0gdGFibGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsb25lTm9kZSh0cnVlKSxcbiAgICAgIHdpZHRoX2NhbGN1bGF0aW9uX2NvbnRhaW5lcixcbiAgICAgIGNsb25lX3RhYmxlLFxuICAgICAgY2xvbmVkX2hlYWRlcl9jZWxscztcblxuICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSB3aWR0aCBjYWxjdWxhdGlvbnMsIGxldCB0aGUgdGFibGUgYmUgYXQgdGhlIHNtYWxsZXJcbiAgLy8gb2YgaXRzIGludHJpbnNpYyBzaXplIGFuZCB0aGUgYG1pbi13aWR0aGAgc2V0IGluIENTUy5cbiAgY2xvbmUuc3R5bGUubWF4V2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YWJsZSkubWluV2lkdGg7XG4gIHRhYmxlLnN0eWxlLm1pbldpZHRoID0gXCIwcHhcIjtcbiAgY2xvbmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciB0aGF0IHdvbid0IHJlc3RyaWN0IHRoZSBzaXplIG9mIHRoZSB0YWJsZS5cbiAgd2lkdGhfY2FsY3VsYXRpb25fY29udGFpbmVyID0gJChcIjxkaXYgc3R5bGU9J3dpZHRoOiAxMDAwMHB4OyB2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogMDsnIC8+XCIpWzBdO1xuICB3aWR0aF9jYWxjdWxhdGlvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpZHRoX2NhbGN1bGF0aW9uX2NvbnRhaW5lcik7XG5cbiAgY2xvbmVfdGFibGUgPSBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5yb290KTtcbiAgc2VsZi5taW5fd2lkdGggPSBjbG9uZV90YWJsZS5vZmZzZXRXaWR0aDsgLy8gc3VtIG9mIGNvbnN0cmFpbmVkIGludHJpbnNpYyB3aWR0aHNcblxuICAvLyBBcHBseSB0aGUgY29uc3RyYWluZWQgaW50cmluc2ljIHdpZHRocyB0byBlYWNoIG9mIHRoZSBoZWFkZXIgY2VsbHMgaW4gdGhlXG4gIC8vIGFjdHVhbCB0YWJsZS5cbiAgY2xvbmVkX2hlYWRlcl9jZWxscyA9IF9BcnJheSRmcm9tKGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLmhlYWRlciArIFwiIC5cIiArIGNsYXNzZXMuY2VsbCkpO1xuICBzZWxmLmhlYWRlcl9jZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBpbmRleCkge1xuICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBjbG9uZWRfaGVhZGVyX2NlbGxzW2luZGV4XS5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgfSk7XG5cbiAgLy8gQ2xlYW51cC5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh3aWR0aF9jYWxjdWxhdGlvbl9jb250YWluZXIpO1xufTtcblxuLy8qXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZXJlIGlzIG92ZXJmbG93IGFuZCBwZXJmb3JtcyBhbGwgbmVjZXNzYXJ5IHNpemVcbi8vIGFuZCBvdGhlciBET00gdXBkYXRlcy4gVGhpcyBpbmNsdWRlcyBmaXhpbmcgdGhlIHNpemUgb2YgdGhlIGZpcnN0IGNlbGwgaW4gYVxuLy8gcm93IGFuZCBhZGRpbmcgYSBjb21wZW5zYXRpbmcgYW1vdW50IG9mIGxlZnQgcGFkZGluZyB0byB0aGUgc2Vjb25kIGNlbGwgaW5cbi8vIGVhY2ggcm93IHdoZW4gdGhlIHRhYmxlIHNob3VsZCBvdmVyZmxvdywgYW5kIHJldmVyc2luZyB0aGlzIHdoZW4gaXQgbm8gbG9uZ2VyXG4vLyBuZWVkcyB0byBkbyBzby5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGEgYFRhYmxlYC5cbi8vIEBwcml2YXRlXG5cbmNoZWNrX2Zvcl9vdmVyZmxvdyA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBzY3JvbGxlciA9IHNlbGYuc2Nyb2xsZXI7XG4gIHZhciByb290ID0gc2VsZi5yb290O1xuICB2YXIgY29udGFpbmVyID0gc2VsZi5jb250YWluZXI7XG4gIHZhciBvdmVyZmxvd2luZyA9IHNlbGYub3ZlcmZsb3dpbmc7XG4gIHZhciBtaW5fd2lkdGggPSBzZWxmLm1pbl93aWR0aDtcbiAgdmFyIHNjcm9sbGVyX3dpZHRoID0gc2Nyb2xsZXIub2Zmc2V0V2lkdGg7XG4gIHZhciBmaXJzdF9jZWxsX3dpZHRoO3ZhciBjZWxsO3ZhciBhdmFpbGFibGVfc3BhY2U7dmFyIGluZGV4O1xuXG4gIGlmICghc2Nyb2xsZXJfd2lkdGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBOZXdseSBvdmVyZmxvd2luZywgZ2V0IHRoZSBoZWFkZXIncyB3aWR0aCBhbmQgYXBwbHkgdGhhdCBzYW1lIHdpZHRoXG4gIC8vIHRvIGVhY2ggZmlyc3QgY2VsbCAoc2luY2UgdGhleSdsbCBiZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQpLCBhbmQgYWRkIGFuXG4gIC8vIGVxdWl2YWxlbnQgYW1vdW50IG9mIGxlZnQgcGFkZGluZyB0byB0aGUgc2Vjb25kIGNlbGwuXG4gIGlmICghb3ZlcmZsb3dpbmcgJiYgc2Nyb2xsZXJfd2lkdGggPCBtaW5fd2lkdGgpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLmNlbGwgKyBcIjpmaXJzdC1jaGlsZFwiKSkpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIGNlbGwgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBmaXJzdF9jZWxsX3dpZHRoID0gZmlyc3RfY2VsbF93aWR0aCB8fCBjZWxsLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBmaXJzdF9jZWxsX3dpZHRoICsgXCJweFwiO1xuICAgICAgICBzZWxmLnNjcm9sbGVyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gZmlyc3RfY2VsbF93aWR0aCAtIDEgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0YXRlcy5jb250YWluZXIub3ZlcmZsb3dpbmcpO1xuICAgIHNlbGYub3ZlcmZsb3dpbmcgPSB0cnVlO1xuICB9XG5cbiAgLy8gTm8gbG9uZ2VyIG92ZXJmbG93aW5nIOKAlCByZXZlcnNlIHdoYXQgd2UgZGlkIGJlZm9yZSFcbiAgaWYgKG92ZXJmbG93aW5nICYmIHNjcm9sbGVyX3dpZHRoID49IG1pbl93aWR0aCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLmNlbGwgKyBcIjpmaXJzdC1jaGlsZFwiKSkpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgY2VsbCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBmaXJzdF9jZWxsX3dpZHRoID0gZmlyc3RfY2VsbF93aWR0aCB8fCBjZWxsLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgICBzZWxmLnNjcm9sbGVyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMltcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9nZXRJdGVyYXRvcihzZWxmLmhlYWRlcl9jZWxscyksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICBjZWxsID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yM1tcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjNbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlcy5jb250YWluZXIub3ZlcmZsb3dpbmcpO1xuICAgIHNlbGYub3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEV2ZW4gaWYgYWxyZWFkeSBvdmVyZmxvd2luZywgdXBkYXRlIHRoZSBtYXgtd2lkdGhzIG9mIGNvbHVtbnMgc3VjaCB0aGF0IHRoZVxuICAvLyBwZXJzaXN0YW50IGNlbGwgKyBhbnkgb3RoZXIgY2VsbCA8PSB0aGUgdG90YWwgd2lkdGguXG4gIGlmIChzY3JvbGxlcl93aWR0aCA8IG1pbl93aWR0aCkge1xuICAgIGF2YWlsYWJsZV9zcGFjZSA9IHNjcm9sbGVyX3dpZHRoIC0gc2VsZi5oZWFkZXJfY2VsbHNbMF0ub2Zmc2V0V2lkdGg7XG5cbiAgICBmb3IgKGluZGV4ID0gMTsgaW5kZXgrKzsgaW5kZXggPCBzZWxmLmhlYWRlcl9jZWxscy5sZW5ndGgpIHtcbiAgICAgIHNlbGYuaGVhZGVyX2NlbGxzW2luZGV4XS5zdHlsZS5tYXhXaWR0aCA9IGF2YWlsYWJsZV9zcGFjZSArIFwicHhcIjtcbiAgICB9XG4gIH1cbn07XG5cbmxhc3RfdmlzaWJsZV9jZWxsID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgdmFyIGxhc3RfY2VsbCA9IHNlbGYuaGVhZGVyX2NlbGxzWzFdLFxuICAgICAgcGFyZW50X3dpZHRoID0gc2VsZi5zY3JvbGxlci5zY3JvbGxMZWZ0ICsgc2VsZi5zY3JvbGxlci5vZmZzZXRXaWR0aCAtIHBhcnNlSW50KHNlbGYuc2Nyb2xsZXIuc3R5bGUucGFkZGluZ0xlZnQsIDEwKSxcbiAgICAgIHdpZHRoX3NvX2ZhciA9IGxhc3RfY2VsbC5vZmZzZXRXaWR0aCxcbiAgICAgIGNlbGwsXG4gICAgICBpbmRleDtcblxuICBmb3IgKGluZGV4ID0gMjsgaW5kZXgrKzsgaW5kZXggPCBzZWxmLmhlYWRlcl9jZWxsc1tpbmRleF0pIHtcbiAgICBjZWxsID0gc2VsZi5oZWFkZXJfY2VsbHNbaW5kZXhdO1xuICAgIGlmICh3aWR0aF9zb19mYXIgKyBjZWxsLm9mZnNldFdpZHRoID4gcGFyZW50X3dpZHRoKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGFzdF9jZWxsID0gY2VsbDtcbiAgICB3aWR0aF9zb19mYXIgKz0gY2VsbC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHJldHVybiBbbGFzdF9jZWxsLCBwYXJlbnRfd2lkdGggLSB3aWR0aF9zb19mYXJdO1xufTtcblxuLy8qXG4vLyBTaGlmdHMgdGhlIGBUYWJsZWAgcmVwcmVzZW50ZWQgYnkgYHNlbGZgIHRvIHRoZSByaWdodCBieSBvbmUgY29sdW1uLiBJZiB0aGVcbi8vIHRhYmxlIGN1cnJlbnRseSBoYXMgYSBjb2x1bW4gdGhhdCBpcyBwYXJ0aWFsbHkgdmlzaWJsZSBvbiB0aGUgcmlnaHQsIHRoZVxuLy8gdGFibGUgd2lsbCBiZSBzY3JvbGxlZCBzdWNoIHRoYXQgdGhhdCBlbnRpcmUgY29sdW1uIGlzIHZpc2libGUuIElmIGEgY29sdW1uXG4vLyBpcyBlbnRpcmVseSB2aXNpYmxlIGFuZCBwcmVzc2VkIHJpZ2h0IGFnYWluc3QgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHNjcm9sbFxuLy8gYXJlYSwgdGhlIG5leHQgKGZ1bGx5IGhpZGRlbikgY29sdW1uIHdpbGwgYmUgc2hvd24uXG4vL1xuLy8gVGhpcyBoYXMgbm8gZWZmZWN0IGlmIHRoZSB0YWJsZSBpcyBhbHJlYWR5IGZ1bGx5IHNjcm9sbGVkLlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYSBgVGFibGVgLlxuXG5zaGlmdF90YWJsZV9yaWdodCA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBsYXN0X2NlbGwsIG5leHRfY2VsbF9vdmVybGFwO1xuXG4gIGlmICghc2VsZi5vdmVyZmxvd2luZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfbGFzdF92aXNpYmxlX2NlbGwgPSBsYXN0X3Zpc2libGVfY2VsbChzZWxmKTtcblxuICB2YXIgX2xhc3RfdmlzaWJsZV9jZWxsMiA9IF9zbGljZWRUb0FycmF5KF9sYXN0X3Zpc2libGVfY2VsbCwgMik7XG5cbiAgbGFzdF9jZWxsID0gX2xhc3RfdmlzaWJsZV9jZWxsMlswXTtcbiAgbmV4dF9jZWxsX292ZXJsYXAgPSBfbGFzdF92aXNpYmxlX2NlbGwyWzFdO1xuXG4gIGlmIChsYXN0X2NlbGwgPT09IHNlbGYuaGVhZGVyX2NlbGxzW3NlbGYuaGVhZGVyX2NlbGxzLmxlbmd0aCAtIDFdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuc2Nyb2xsZXIuc2Nyb2xsTGVmdCArPSBsYXN0X2NlbGwubmV4dEVsZW1lbnRTaWJsaW5nLm9mZnNldFdpZHRoIC0gbmV4dF9jZWxsX292ZXJsYXA7XG4gIHNlbGYuc2Nyb2xsZXIuY2xhc3NMaXN0LmFkZChzdGF0ZXMuc2Nyb2xsZXIuc2Nyb2xsZWQpO1xuICB1cGRhdGVfYWN0aW9ucyhzZWxmKTtcbn07XG5cbi8vKlxuLy8gU2hpZnRzIHRoZSBgVGFibGVgIHJlcHJlc2VudGVkIGJ5IGBzZWxmYCB0byB0aGUgbGVmdCBieSBvbmUgY29sdW1uLiBJZiB0aGVcbi8vIHRhYmxlIGN1cnJlbnRseSBoYXMgYSBjb2x1bW4gdGhhdCBpcyBwYXJ0aWFsbHkgdmlzaWJsZSBvbiB0aGUgcmlnaHQsIHRoZVxuLy8gdGFibGUgd2lsbCBiZSBzY3JvbGxlZCBzdWNoIHRoYXQgdGhhdCBlbnRpcmUgY29sdW1uIGlzIGhpZGRlbi4gSWYgYSBjb2x1bW5cbi8vIGlzIGVudGlyZWx5IHZpc2libGUgYW5kIHByZXNzZWQgcmlnaHQgYWdhaW5zdCB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgc2Nyb2xsXG4vLyBhcmVhLCB0aGF0IGNvbHVtbiB3aWxsIGJlIHNjcm9sbGVkIG91dCBvZiB2aWV3LlxuLy9cbi8vIFRoaXMgaGFzIG5vIGVmZmVjdCBpZiB0aGUgdGFibGUgaXMgYXQgYSBzY3JvbGwgcG9zaXRpb24gb2YgMC5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGEgYFRhYmxlYC5cblxuc2hpZnRfdGFibGVfbGVmdCA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBsYXN0X2NlbGwsIG5leHRfY2VsbF9vdmVybGFwLCBzY3JvbGxfZGVsdGE7XG5cbiAgaWYgKCFzZWxmLm92ZXJmbG93aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9sYXN0X3Zpc2libGVfY2VsbDMgPSBsYXN0X3Zpc2libGVfY2VsbChzZWxmKTtcblxuICB2YXIgX2xhc3RfdmlzaWJsZV9jZWxsMzIgPSBfc2xpY2VkVG9BcnJheShfbGFzdF92aXNpYmxlX2NlbGwzLCAyKTtcblxuICBsYXN0X2NlbGwgPSBfbGFzdF92aXNpYmxlX2NlbGwzMlswXTtcbiAgbmV4dF9jZWxsX292ZXJsYXAgPSBfbGFzdF92aXNpYmxlX2NlbGwzMlsxXTtcblxuICBzY3JvbGxfZGVsdGEgPSBuZXh0X2NlbGxfb3ZlcmxhcCA/IC1uZXh0X2NlbGxfb3ZlcmxhcCA6IC1sYXN0X2NlbGwub2Zmc2V0V2lkdGg7XG5cbiAgc2VsZi5zY3JvbGxlci5zY3JvbGxMZWZ0ICs9IHNjcm9sbF9kZWx0YTtcbiAgaWYgKCFzZWxmLnNjcm9sbGVyLnNjcm9sbExlZnQpIHtcbiAgICBzZWxmLnNjcm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnNjcm9sbGVyLnNjcm9sbGVkKTtcbiAgfVxuICB1cGRhdGVfYWN0aW9ucyhzZWxmKTtcbn07XG5cbi8vKlxuLy8gSGFuZGxlcyBhIGtleXByZXNzIHdoaWxlIGZvY3VzZWQgb24gdGhlIHRhYmxlLiBPbmx5IGxlZnQvIHJpZ2h0LyB1cC8gZG93blxuLy8ga2V5cHJlc3NlcyBhcmUgaGFuZGxlZCBoZXJlOiBsZWZ0IGFuZCBkb3duIHdpbGwgc2hpZnQgdGhlIHRhYmxlIGxlZnQsIHdoaWxlXG4vLyByaWdodCBhbmQgdXAgd2lsbCBzaGlmdCB0aGUgdGFibGUgcmlnaHQuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIG9yaWdpbmFsIGBrZXlwcmVzc2AgZXZlbnQuXG4vLyBAcGFyYW0ge09iamVjdH0gc2VsZiAtIFRoZSBpbnRlcm5hbCBkZXRhaWxzIG9mIGEgYFRhYmxlYC5cbi8vIEBwcml2YXRlXG5cbmhhbmRsZV9rZXlwcmVzcyA9IGZ1bmN0aW9uIChldmVudCwgc2VsZikge1xuICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgY2FzZSBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyW1wiZGVmYXVsdFwiXS5SSUdIVDpcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzaGlmdF90YWJsZV9yaWdodChzZWxmKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMltcImRlZmF1bHRcIl0uTEVGVDpcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzaGlmdF90YWJsZV9sZWZ0KHNlbGYpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8vKlxuLy8gSGFuZGxlcyBzY3JvbGxpbmcgb24gdGhlIHRhYmxlIGJ5IHVwZGF0aW5nIHRoZSBjbGFzc2VzIG9uIHRoZSBzY3JvbGxlci9cbi8vIGFjdGlvbiBidXR0b25zIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxuLy9cbi8vIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSBvcmlnaW5hbCBgc2Nyb2xsYCBldmVudC5cbi8vIEBwYXJhbSB7T2JqZWN0fSBzZWxmIC0gVGhlIGludGVybmFsIGRldGFpbHMgb2YgYSBgVGFibGVgLlxuLy8gQHByaXZhdGVcblxuaGFuZGxlX3Njcm9sbCA9IGZ1bmN0aW9uIChldmVudCwgc2VsZikge1xuICB2YXIgc2Nyb2xsZXI7XG5cbiAgaWYgKCFzZWxmLm92ZXJmbG93aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2Nyb2xsZXIgPSBzZWxmLnNjcm9sbGVyO1xuICBpZiAoc2Nyb2xsZXIuc2Nyb2xsTGVmdCA+IDApIHtcbiAgICBzY3JvbGxlci5jbGFzc0xpc3QuYWRkKHN0YXRlcy5zY3JvbGxlci5zY3JvbGxlZCk7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsZXIuY2xhc3NMaXN0LnJlbW92ZShzdGF0ZXMuc2Nyb2xsZXIuc2Nyb2xsZWQpO1xuICB9XG5cbiAgdXBkYXRlX2FjdGlvbnMoc2VsZik7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuLy8qXG4vLyBIb29rcyB1cCB0aGUgZXZlbnQgaGFuZGxlcnMgZm9yIHRhYmxlIGFjdGlvbnMsIHN0b3JlcyB0aGUgYWN0aW9ucyBvblxuLy8gYHNlbGYuc2hpZnRlcnNgIGZvciBlYXNpZXIgYWNjZXNzIGxhdGVyLCBhbmQgcGVyZm9ybWVzIHRoZSBpbml0aWFsIHVwZGF0ZXNcbi8vIHRvIG1ha2UgdGhlIHN0YXRlIG9mIHRoZSBhY3Rpb25zIG1hdGNoIHRoZSB0YWJsZSBpdHNlbGYuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhIGBUYWJsZWAuXG4vLyBAcHJpdmF0ZVxuXG5pbml0aWFsaXplX3RhYmxlX2FjdGlvbnMgPSBmdW5jdGlvbiAoc2VsZikge1xuICB2YXIgYWN0aW9uO1xuXG4gIHNlbGYuc2hpZnRlcnMgPSB7fTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbShzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgY2xhc3Nlcy5hY3Rpb25zICsgXCIgW1wiICsgYXR0cnMuYWN0aW9uICsgXCJdXCIpKSksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgYWN0aW9uID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICBzZWxmLnNoaWZ0ZXJzW2FjdGlvbi5nZXRBdHRyaWJ1dGUoYXR0cnMuYWN0aW9uKS5yZXBsYWNlKFwic2hpZnQtXCIsIFwiXCIpXSA9IGFjdGlvbjtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yNFtcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVfYWN0aW9ucyhzZWxmKTtcblxuICAkKHNlbGYuY29udGFpbmVyKS5vbihcImNsaWNrXCIsIFwiLlwiICsgY2xhc3Nlcy5hY3Rpb25zLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cnMuYWN0aW9uKSkge1xuICAgICAgY2FzZSBhY3Rpb25zLnNoaWZ0X3JpZ2h0OlxuICAgICAgICBzaGlmdF90YWJsZV9yaWdodChzZWxmKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFjdGlvbnMuc2hpZnRfbGVmdDpcbiAgICAgICAgc2hpZnRfdGFibGVfbGVmdChzZWxmKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vKlxuLy8gVXBkYXRlcyB0aGUgdGFibGUgYWN0aW9ucyBieSBkaXNhYmxpbmcgYWN0aW9ucyB0aGF0IGNhbid0IGJlIHBlcmZvcm1lZCBnaXZlblxuLy8gdGhlIHN0YXRlIG9mIHRoZSB0YWJsZSAoZm9yIGV4YW1wbGUsIGEgbGVmdCBzaGlmdGVyIHdoZW4gdGhlIHRhYmxlIGlzIGZ1bGx5XG4vLyBzY3JvbGxlZCB0byB0aGUgbGVmdCkuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IHNlbGYgLSBUaGUgaW50ZXJuYWwgZGV0YWlscyBvZiBhIGBUYWJsZWAuXG4vLyBAcHJpdmF0ZVxuXG51cGRhdGVfYWN0aW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBkaXNhYmxlLCBlbmFibGU7XG5cbiAgZGlzYWJsZSA9IGZ1bmN0aW9uIChzaGlmdGVyKSB7XG4gICAgc2hpZnRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgc2hpZnRlci5jbGFzc0xpc3QuYWRkKHNoaWZ0ZXIuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXSArIFwiLS1pcy1kaXNhYmxlZFwiKTtcbiAgfTtcblxuICBlbmFibGUgPSBmdW5jdGlvbiAoc2hpZnRlcikge1xuICAgIHNoaWZ0ZXIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzaGlmdGVyLmNsYXNzTGlzdC5yZW1vdmUoc2hpZnRlci5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdICsgXCItLWlzLWRpc2FibGVkXCIpO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc2VsZikge1xuICAgIHZhciBzaGlmdGVycyA9IHNlbGYuc2hpZnRlcnMsXG4gICAgICAgIHNjcm9sbCA9IHNlbGYuc2Nyb2xsZXIuc2Nyb2xsTGVmdDtcblxuICAgIGlmICghc2Nyb2xsKSB7XG4gICAgICBkaXNhYmxlKHNoaWZ0ZXJzLmxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmFibGUoc2hpZnRlcnMubGVmdCk7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbCArIHNlbGYuc2Nyb2xsZXIub2Zmc2V0V2lkdGggKyAxID49IHNlbGYuc2Nyb2xsZXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIGRpc2FibGUoc2hpZnRlcnMucmlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmFibGUoc2hpZnRlcnMucmlnaHQpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbi8vKlxuLy8gQSBmYWN0b3J5IGZvciBwcm9kdWNpbmcgYFRhYmxlYCBvYmplY3RzLlxuLy9cbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBUaGUgcm9vdCAoYC50YWJsZWApIG5vZGUgb2YgdGhlIHRhYmxlLiBOb3RlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgaXMgbm90IHRoZSBjb250YWluZXIgb3Igc2Nyb2xsZXIsIGJ1dCB0aGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbCBgdGFibGVgIGVsZW1lbnQgaXRzZWxmLlxuLy9cbi8vIEBmYWN0b3J5XG5cblRhYmxlID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgdmFyICRyb290LCBzZWxmO1xuXG4gICRyb290ID0gJChyb290KTtcbiAgc2VsZiA9IHtcbiAgICByb290OiByb290LFxuICAgIHNjcm9sbGVyOiAkcm9vdC5jbG9zZXN0KFwiLlwiICsgY2xhc3Nlcy5zY3JvbGxlcilbMF0sXG4gICAgY29udGFpbmVyOiAkcm9vdC5jbG9zZXN0KFwiLlwiICsgY2xhc3Nlcy5jb250YWluZXIpWzBdLFxuICAgIG92ZXJmbG93aW5nOiBmYWxzZSxcbiAgICBoZWFkZXJfY2VsbHM6IF9BcnJheSRmcm9tKHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIGNsYXNzZXMuaGVhZGVyICsgXCIgLlwiICsgY2xhc3Nlcy5jZWxsKSlcbiAgfTtcblxuICByb290LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gIGNhY2hlX3ByZWZlcnJlZF93aWR0aHMoc2VsZik7XG4gIGNoZWNrX2Zvcl9vdmVyZmxvdyhzZWxmKTtcbiAgaW5pdGlhbGl6ZV90YWJsZV9hY3Rpb25zKHNlbGYpO1xuXG4gICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tfZm9yX292ZXJmbG93KHNlbGYpO1xuICAgIHVwZGF0ZV9hY3Rpb25zKHNlbGYpO1xuICB9KTtcblxuICByb290LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZV9rZXlwcmVzcyhldmVudCwgc2VsZik7XG4gIH0pO1xuICBzZWxmLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlX3Njcm9sbChldmVudCwgc2VsZik7XG4gIH0pO1xufTtcblxuVGFibGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyW1wiZGVmYXVsdFwiXS5idWlsZChUYWJsZSwgeyBuYW1lOiBjbGFzc2VzLnJvb3QgfSk7XG59O1xuXG59LHtcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvYnVpbGRlclwiOjExNSxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMva2V5Y29kZXNcIjoxMTksXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbVwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheVwiOjE1fV0sMTA4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1F1ZXJ5X3N0cmluZyA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL3F1ZXJ5X3N0cmluZ1wiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNRdWVyeV9zdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUXVlcnlfc3RyaW5nKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNCdWlsZGVyID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvYnVpbGRlclwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNCdWlsZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0RvbV9jYWNoZSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2RvbV9jYWNoZVwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNEb21fY2FjaGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRG9tX2NhY2hlKTtcblxudmFyIGNsYXNzZXMgPSB7XG4gIHJvb3Q6IFwidGFibGlzdFwiLFxuICB0YWI6IFwidGFibGlzdF9fdGFiXCIsXG4gIHBhbmVsOiBcInRhYmxpc3RfX3BhbmVsXCJcbn07XG5cbnZhciB2YXJpYW50cyA9IHtcbiAgcm9vdDogeyBtYW5hZ2VzX3VybDogXCJ0YWJsaXN0LS1tYW5hZ2VzLXVybFwiIH1cbn07XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHRhYjogeyBhY3RpdmU6IFwidGFibGlzdF9fdGFiLS1pcy1hY3RpdmVcIiB9LFxuICBwYW5lbDogeyBhY3RpdmU6IFwidGFibGlzdF9fcGFuZWwtLWlzLWFjdGl2ZVwiIH1cbn07XG5cbnZhciBUYWJsaXN0LCB0YWJfY2xpY2ssIHBhbmVsX2Zvcl90YWIsIHRhYl9mb3JfcGFuZWwsIHRhYmxpc3RfZm9yX25vZGUsIGExMXksIGFwcGx5X2FjdGl2YXRpb25fbWFya3VwLCByZW1vdmVfYWN0aXZhdGlvbl9tYXJrdXAsIHBhbmVsX2NvbnRhaW5pbmdfbm9kZTtcblxuLy8qXG4vLyBNYW5hZ2VzIGEgY2xpY2sgb24gYSB0YWIgYnkgZmluZGluZyB0aGUgYXNzb2NpYXRlZCBgVGFibGlzdGAgYW5kIGFjdGl2YXRpbmdcbi8vIHRoZSB0YWIgdGhhdCB3YXMgY2xpY2tlZCBvbi5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGNsaWNrYCBldmVudC5cbi8vIEBwcml2YXRlXG5cbnRhYl9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgdGFibGlzdDtcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRhYmxpc3QgPSBUYWJsaXN0W1wiZm9yXCJdKGV2ZW50LnRhcmdldCk7XG4gIGlmICghdGFibGlzdCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0YWJsaXN0LmFjdGl2YXRlX3RhYigkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnRhYilbMF0pO1xufTtcblxuLy8qXG4vLyBGaW5kcyB0aGUgdGFiIHBhbmVsIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFzc2VkIHRhYi4gVGhlIGFzc29jaWF0aW9uIGlzIGJhc2VkXG4vLyBvbiB0aGUgSUQgb2YgdGhlIHRhYiBwYW5lbCBtYXRjaGluZyB0aGUgYGhyZWZgIG9mIHRoZSB0YWIuXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIC0gVGhlIHRhYiBmb3Igd2hpY2ggeW91IHdhbnQgdGhlIGFzc29jaWF0ZWQgcGFuZWwuXG4vLyBAcHJpdmF0ZVxuLy9cbi8vIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9IFRoZSBhc3NvY2lhdGVkIHRhYiBwYW5lbCBvciwgaWYgbm8gbWF0Y2hpbmdcbi8vIHBhbmVsIHdhcyBmb3VuZCwgYG51bGxgLlxuXG5wYW5lbF9mb3JfdGFiID0gZnVuY3Rpb24gKHRhYikge1xuICByZXR1cm4gdGFiICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnJlcGxhY2UoXCIjXCIsIFwiXCIpKTtcbn07XG5cbi8vKlxuLy8gRmluZHMgdGhlIHRhYiBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBwYW5lbC4gVGhlIGFzc29jaWF0aW9uIGlzIGJhc2VkXG4vLyBvbiB0aGUgSUQgb2YgdGhlIHRhYiBwYW5lbCBtYXRjaGluZyB0aGUgYGhyZWZgIG9mIHRoZSB0YWIuXG4vL1xuLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIC0gVGhlIHRhYiBmb3Igd2hpY2ggeW91IHdhbnQgdGhlIGFzc29jaWF0ZWQgcGFuZWwuXG4vLyBAcHJpdmF0ZVxuLy9cbi8vIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9IFRoZSBhc3NvY2lhdGVkIHRhYiBvciwgaWYgbm8gbWF0Y2hpbmcgcGFuZWxcbi8vIHdhcyBmb3VuZCwgYG51bGxgLlxuXG50YWJfZm9yX3BhbmVsID0gZnVuY3Rpb24gKHBhbmVsKSB7XG4gIHJldHVybiBwYW5lbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy50YWIgKyBcIltocmVmPScjXCIgKyBwYW5lbC5pZCArIFwiJ11cIik7XG59O1xuXG4vLypcbi8vIFdyaXRlcyBhbGwgb2YgdGhlIHJlcXVpcmVkIGFjY2Vzc2liaWxpdHkgbWFya3VwIHRvIHRoZSB0YWJsaXN0IGFuZCBpdHNcbi8vIHN1YmNvbXBvbmVudHMuIFRoaXMgaW5jbHVkZXMgSURzIGZvciB0aGUgdGFibGlzdCBhbmQgaXRzIHRhYnMvIHBhbmVscyxcbi8vIHJvbGVzIGZvciB0aGUgc2FtZSwgYW5kIHRoZSBgYXJpYS1gIGFzc29jaWF0aW9ucyBiZXR3ZWVuIHRhYnMgYW5kIHRoZWlyXG4vLyBjb3JyZXNwb25kaW5nIHBhbmVscy5cbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWJsaXN0IC0gVGhlIHJvb3Qgbm9kZSBvZiB0aGUgdGFibGlzdC5cbi8vIEBwcml2YXRlXG5cbmExMXkgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgX2N1cnJlbnRfaWRzO1xuXG4gIHZhciBjdXJyZW50X2lkcywgaWRfZm9yO1xuXG4gIGN1cnJlbnRfaWRzID0gKF9jdXJyZW50X2lkcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2N1cnJlbnRfaWRzLCBjbGFzc2VzLnJvb3QsIDEpLCBfZGVmaW5lUHJvcGVydHkoX2N1cnJlbnRfaWRzLCBjbGFzc2VzLnRhYiwgMSksIF9kZWZpbmVQcm9wZXJ0eShfY3VycmVudF9pZHMsIGNsYXNzZXMucGFuZWwsIDEpLCBfY3VycmVudF9pZHMpO1xuXG4gIGlkX2ZvciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHR5cGUgPSBub2RlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF07XG4gICAgcmV0dXJuIHR5cGUgKyBcIi0tXCIgKyBjdXJyZW50X2lkc1t0eXBlXSsrO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodGFibGlzdCkge1xuICAgIHZhciBwYW5lbCwgdGFiX2lkLCBwYW5lbF9pZCwgdGFiO1xuXG4gICAgdGFibGlzdC5pZCA9IHRhYmxpc3QuaWQgfHwgaWRfZm9yKHRhYmxpc3QpO1xuICAgIHRhYmxpc3Quc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYmxpc3RcIik7XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihfQXJyYXkkZnJvbSh0YWJsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjbGFzc2VzLnRhYikpKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB0YWIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBwYW5lbCA9IHBhbmVsX2Zvcl90YWIodGFiKTtcbiAgICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFiX2lkID0gdGFiLmlkIHx8IGlkX2Zvcih0YWIpO1xuICAgICAgICBwYW5lbF9pZCA9IHBhbmVsLmlkIHx8IGlkX2ZvcihwYW5lbCk7XG5cbiAgICAgICAgdGFiLmlkID0gdGFiX2lkO1xuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYlwiKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgcGFuZWxfaWQpO1xuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIiArIHBhbmVsX2lkKTtcblxuICAgICAgICBwYW5lbC5pZCA9IHBhbmVsX2lkO1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFiLXBhbmVsXCIpO1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgdGFiX2lkKTtcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgIXBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMucGFuZWwuYWN0aXZlKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmFwcGx5X2FjdGl2YXRpb25fbWFya3VwID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMudGFiKSkge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChzdGF0ZXMudGFiLmFjdGl2ZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKHN0YXRlcy5wYW5lbC5hY3RpdmUpO1xuICB9XG59O1xuXG5yZW1vdmVfYWN0aXZhdGlvbl9tYXJrdXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy50YWIpKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlcy50YWIuYWN0aXZlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnBhbmVsLmFjdGl2ZSk7XG4gIH1cbn07XG5cbnBhbmVsX2NvbnRhaW5pbmdfbm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiAkKG5vZGUpLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnBhbmVsKVswXTtcbn07XG5cbnRhYmxpc3RfZm9yX25vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy5wYW5lbCkpIHtcbiAgICBub2RlID0gdGFiX2Zvcl9wYW5lbChub2RlKTtcbiAgfVxuXG4gIHJldHVybiAkKG5vZGUpLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnJvb3QpWzBdO1xufTtcblxuLy8qXG4vLyBUaGUgY29uc3RydWN0b3IgYXJvdW5kIGEgYFRhYmxpc3RgIGNvbXBvbmVudC4gVGhpcyBjb25zdHJ1Y3RvciByZXR1cm5zIGEgdmVyeVxuLy8gc21hbGwgQVBJOiBvbmx5IGFuIGBhY3RpdmF0ZV90YWJgIG1ldGhvZCBpcyBleHBvc2VkLCB3aGljaCB3aWxsIGFjdGl2YXRlIHRoZVxuLy8gcGFzc2VkIHRhYiBpbiB0aGUgdGFibGlzdC4gVGhpcyBjb25zdHJ1Y3RvciB3aWxsIGFsc28gZW5zdXJlIHRoYXQgYWxsIHRoZVxuLy8gYXJpYSBwcm9wZXJ0aWVzIGFuZCBhc3NvY2lhdGlvbnMgYXJlIGhvb2tlZCB1cCBjb3JyZWN0bHkuXG5cblRhYmxpc3QgPSBmdW5jdGlvbiAocm9vdCkge1xuICB2YXIgYWN0aXZlX3RhYiA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0YXRlcy50YWIuYWN0aXZlKSxcbiAgICAgIGFjdGl2ZV9wYW5lbCA9IHBhbmVsX2Zvcl90YWIoYWN0aXZlX3RhYiksXG4gICAgICBzYXZlZF90YWIsXG4gICAgICBhcGksXG4gICAgICBzZWxmO1xuXG4gIGExMXkocm9vdCk7XG5cbiAgc2VsZiA9IHtcbiAgICByb290OiByb290LFxuICAgIGlkOiByb290LmlkLFxuICAgIGFjdGl2ZV9wYW5lbDogcGFuZWxfZm9yX3RhYihhY3RpdmVfdGFiKSxcbiAgICBtYW5hZ2VzX3VybDogcm9vdC5jbGFzc0xpc3QuY29udGFpbnModmFyaWFudHMucm9vdC5tYW5hZ2VzX3VybClcbiAgfTtcblxuICBhcGkgPSBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe1xuICAgIC8vKlxuICAgIC8vIEFjdGl2YXRlcyB0aGUgcGFzc2VkIHRhYiwgZGVhY3RpdmF0aW5nIHRoZSBjdXJyZW50bHktYWN0aXZlIHRhYiwgaWYgdGhlcmVcbiAgICAvLyBpcyBvbmUgKGFuZCBpdCBpcyBub3QgdGhlIHBhc3NlZCB0YWIpLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIC0gVGhlIHRhYiB0byBhY3RpdmF0ZS5cblxuICAgIGFjdGl2YXRlX3RhYjogZnVuY3Rpb24gYWN0aXZhdGVfdGFiKHRhYikge1xuICAgICAgdGhpcy5hY3RpdmVfdGFiID0gdGFiO1xuICAgIH1cblxuICB9LCB7XG4gICAgYWN0aXZlX3RhYjoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVfdGFiO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYikge1xuICAgICAgICB2YXIgcGFuZWwgPSBwYW5lbF9mb3JfdGFiKHRhYik7XG5cbiAgICAgICAgYXBwbHlfYWN0aXZhdGlvbl9tYXJrdXAodGFiKTtcbiAgICAgICAgYXBwbHlfYWN0aXZhdGlvbl9tYXJrdXAocGFuZWwpO1xuXG4gICAgICAgIGlmICghdGFiIHx8IHRhYiA9PT0gYWN0aXZlX3RhYikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZV9hY3RpdmF0aW9uX21hcmt1cChhY3RpdmVfdGFiKTtcbiAgICAgICAgcmVtb3ZlX2FjdGl2YXRpb25fbWFya3VwKGFjdGl2ZV9wYW5lbCk7XG5cbiAgICAgICAgYWN0aXZlX3RhYiA9IHRhYjtcbiAgICAgICAgYWN0aXZlX3BhbmVsID0gcGFuZWw7XG5cbiAgICAgICAgaWYgKHRoaXMubWFuYWdlc191cmwgJiYgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1F1ZXJ5X3N0cmluZzJbXCJkZWZhdWx0XCJdLmdldCh0aGlzLmlkKSAhPT0gdGFiLmlkKSB7XG4gICAgICAgICAgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1F1ZXJ5X3N0cmluZzJbXCJkZWZhdWx0XCJdLnNldCh0aGlzLmlkLCB0YWIuaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgYWN0aXZlX3BhbmVsOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZV9wYW5lbDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChwYW5lbCkge1xuICAgICAgICB0aGlzLmFjdGl2ZV90YWIgPSBwYW5lbF9mb3JfdGFiKHBhbmVsKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBpZiAoc2VsZi5tYW5hZ2VzX3VybCkge1xuICAgIHNhdmVkX3RhYiA9IF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNRdWVyeV9zdHJpbmcyW1wiZGVmYXVsdFwiXS5nZXQoc2VsZi5pZCk7XG4gICAgaWYgKHNhdmVkX3RhYikge1xuICAgICAgYXBpLmFjdGl2ZV90YWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYXZlZF90YWIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhcGkuYWN0aXZlX3RhYiA9IGFjdGl2ZV90YWI7XG4gIH1cblxuICByZXR1cm4gYXBpO1xufTtcblxuVGFibGlzdFtcImZvclwiXSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciB0YWJsaXN0X25vZGUgPSAkKG5vZGUpLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnJvb3QpWzBdLFxuICAgICAgY29udGFpbmluZ19wYW5lbDtcblxuICBpZiAoIXRhYmxpc3Rfbm9kZSkge1xuICAgIGNvbnRhaW5pbmdfcGFuZWwgPSBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzLnBhbmVsKSA/IG5vZGUgOiBwYW5lbF9jb250YWluaW5nX25vZGUobm9kZSk7XG4gICAgaWYgKCFjb250YWluaW5nX3BhbmVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRhYmxpc3Rfbm9kZSA9IHRhYmxpc3RfZm9yX25vZGUoY29udGFpbmluZ19wYW5lbCk7XG4gIH1cblxuICBpZiAoIXRhYmxpc3Rfbm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKDAsIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNEb21fY2FjaGUyW1wiZGVmYXVsdFwiXSkodGFibGlzdF9ub2RlKS5nZXQoY2xhc3Nlcy5yb290KTtcbn07XG5cblRhYmxpc3QuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyW1wiZGVmYXVsdFwiXS5idWlsZF9hbmRfY2FjaGUoVGFibGlzdCwgeyBuYW1lOiBjbGFzc2VzLnJvb3QgfSk7XG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyBjbGFzc2VzLnRhYiwgdGFiX2NsaWNrKTtcbn07XG5cblRhYmxpc3QuYWN0aXZhdGVfcGFuZWxfY29udGFpbmluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBwYW5lbCA9ICQobm9kZSkuY2xvc2VzdChcIi5cIiArIGNsYXNzZXMucGFuZWwpWzBdLFxuICAgICAgdGFibGlzdCA9IFRhYmxpc3RbXCJmb3JcIl0ocGFuZWwpO1xuXG4gIGlmICh0YWJsaXN0KSB7XG4gICAgdGFibGlzdC5hY3RpdmVfdGFiID0gdGFiX2Zvcl9wYW5lbChwYW5lbCk7XG4gIH1cbiAgcmV0dXJuICEhdGFibGlzdDtcbn07XG5cblRhYmxpc3QuaXNfaW5fYWN0aXZlX3BhbmVsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHBhbmVsID0gcGFuZWxfY29udGFpbmluZ19ub2RlKG5vZGUpO1xuICByZXR1cm4gISFwYW5lbCAmJiBwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLnBhbmVsLmFjdGl2ZSk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRhYmxpc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvYnVpbGRlclwiOjExNSxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvZG9tX2NhY2hlXCI6MTE3LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9xdWVyeV9zdHJpbmdcIjoxMjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbVwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MixcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIjo2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZS1wcm9wZXJ0eVwiOjEzLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTR9XSwxMDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZ2V0SXRlcmF0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c01vZGFsID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL21vZGFsXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNNb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VDb21wb25lbnRzTW9kYWwpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNJZnJhbWUgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2NvbXBvbmVudHMvaWZyYW1lXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMva2V5Y29kZXNcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1BhdHRlcm4gPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9wYXR0ZXJuXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1BhdHRlcm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUGF0dGVybik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlciA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2J1aWxkZXJcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzQnVpbGRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNCdWlsZGVyKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9ldmVudHNcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0V2ZW50cyk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzTmFtaW5nX2NvbnZlbnRpb24gPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9uYW1pbmdfY29udmVudGlvblwiKTtcblxudmFyIGNsYXNzZXMgPSB7XG4gIHJvb3Q6IFwidG9nZ2xlXCIsXG4gIGluZm86IFwidG9nZ2xlX19pbmZvXCIsXG4gIGNvbnRhaW5lcjogXCJ0b2dnbGVfX2NvbnRhaW5lclwiXG59O1xuXG52YXIgc3RhdGVzID0ge1xuICByb290OiB7XG4gICAgbG9ja2VkOiBcInRvZ2dsZS0taXMtbG9ja2VkXCIsXG4gICAgYWN0aXZlOiBcInRvZ2dsZS0taXMtYWN0aXZlXCIsXG4gICAgcGFydGlhbGx5X2FjdGl2ZTogXCJ0b2dnbGUtLWlzLXBhcnRpYWxseS1hY3RpdmVcIlxuICB9XG59O1xuXG52YXIgYXR0cnMgPSB7XG4gIG5hbWU6IFwiZGF0YS12YXJpYXRpb24tbmFtZVwiXG59O1xuXG52YXIgVG9nZ2xlLCBUb2dnbGVzLCBoYW5kbGVfa2V5cHJlc3MsIGluZm9fY2xpY2ssIHRvZ2dsZV9jbGljaywgdXBkYXRlX3RvZ2dsZV9zdGF0ZTtcblxuLy8qXG4vLyBMaXN0ZW5zIGFuZCByZXNwb25kcyB0byBrZXlwcmVzcyBldmVudHMgd2hpbGUgZm9jdXNlZCBvbiBhIHRvZ2dsZS4gSWYgZWl0aGVyXG4vLyBzcGFjZSBvciBlbnRlciBhcmUgcHJlc3NlZCwgdGhlIHRvZ2dsZSB3aWxsIGJlIHRvZ2dsZWQgYXMgaWYgaXQgaGFkIGJlZW5cbi8vIGNsaWNrZWQgb24uIFRoaXMgYWxsb3dzIGZvciBrZXlib2FyZC1vbmx5IG5hdmlnYXRpb24gYW5kIG1hbmlwdWxhdGlvbiBvZlxuLy8gdG9nZ2xlcy5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGtleXByZXNzYCBldmVudC5cbi8vIEBwcml2YXRlXG5cbmhhbmRsZV9rZXlwcmVzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoIVtfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzS2V5Y29kZXMyW1wiZGVmYXVsdFwiXS5FTlRFUiwgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0tleWNvZGVzMltcImRlZmF1bHRcIl0uU1BBQ0VdLmluY2x1ZGUoZXZlbnQud2hpY2gpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHVwZGF0ZV90b2dnbGVfc3RhdGUoZXZlbnQudGFyZ2V0KTtcbn07XG5cbi8vKlxuLy8gTGlzdGVucyBmb3IgY2xpY2tzIG9uIHRoZSBpbmZvcm1hdGlvbiBpY29uIGluIHRoZSB0b2dnbGUgYW5kIGFjdGl2YXRlcyB0aGVcbi8vIG1vZGFsIHRvIHByZXNlbnQgZGV0YWlscyBvbiB0aGF0IHZhcmlhdGlvbi5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGNsaWNrYCBldmVudC5cbi8vIEBwcml2YXRlXG5cbmluZm9fY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHZhcmlhdGlvbl9uYW1lO1xuXG4gIC8vIFByZXZlbnQgdGhlIGNsaWNrIGV2ZW50IGZyb20gcHJvcGFnYXRpbmcgdG8gdGhlIHRvZ2dsZS5cbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdmFyaWF0aW9uX25hbWUgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5cIiArIGNsYXNzZXMucm9vdClbMF0uZ2V0QXR0cmlidXRlKGF0dHJzLm5hbWUpO1xuICBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c01vZGFsMltcImRlZmF1bHRcIl0ucHJlc2VudChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUGF0dGVybjJbXCJkZWZhdWx0XCJdLmZpbmQodmFyaWF0aW9uX25hbWUsIHsgc2VhcmNoX2FsbDogdHJ1ZSB9KSk7XG59O1xuXG4vLypcbi8vIExpc3RlbnMgZm9yIGNsaWNrIGV2ZW50cyBvbiBhIHRvZ2dsZSBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgdGhlIHRvZ2dsZVxuLy8gYXBwcm9wcmlhdGVseS5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBUaGUgYGNsaWNrYCBldmVudC5cbi8vIEBwcml2YXRlXG5cbnRvZ2dsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB1cGRhdGVfdG9nZ2xlX3N0YXRlKGV2ZW50LnRhcmdldCk7XG59O1xuXG4vLypcbi8vIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGUgcGFzc2VkIGNoYW5nZXIuIElmIHRoZSBgYWRkYCBhdHRyaWJ1dGUgb2YgdGhlXG4vLyBgb3B0aW9uYCBhcmd1bWVudCBpcyBkZWZpbmVkLCBhIHRydXRoeSB2YWx1ZSB3aWxsIGFjdGl2YXRlIHRoZSBjaGFuZ2VyXG4vLyBhbmQgYSBmYWxzZXkgb25lIHdpbGwgZGVhY3RpdmF0ZSBpdC4gT3RoZXJ3aXNlLCB0aGUgY2hhbmdlciB3aWxsIHNpbXBseVxuLy8gaGF2ZSBpdHMgc3RhdGUgdG9nZ2xlZC5cbi8vXG4vLyBAcHJpdmF0ZVxuLy9cbi8vIEBwYXJhbSB7SFRNTEVsZW1lbnQsIFRvZ2dsZSwgU3RyaW5nfSB0b2dnbGUgLSBUaGUgd2hvc2Ugc3RhdGUgc2hvdWxkIGJlXG4vLyB1cGRhdGVkLiBBbnl0aGluZyB0aGF0IGNhbiBiZSByZXNvbHZlZCB0byBhIGBUb2dnbGVgIHZpYSBgVG9nZ2xlLmZvcmBcbi8vIGNhbiBiZSB1c2VkIGhlcmUsIGluY2x1ZGluZyBhIGBUb2dnbGVgLCB0aGUgYEhUTUxFbGVtZW50YCB0aGF0IGlzIHRoZSByb290XG4vLyBvZiB0aGUgdG9nZ2xlLCBvciBhIGBTdHJpbmdgIHRoYXQgaXMgdGhlIG5hbWUgb2YgYSB0b2dnbGUuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zID0ge31dIC0gVGhlIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIHVwZGF0ZS4gQ3VycmVudGx5LFxuLy8gb25seSB0aGUgYGFkZGAgb3B0aW9uIGlzIHJlYWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRvZ2dsZSBzaG91bGQgYmVcbi8vIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZC4gSWYgbm8gYG9wdGlvbnNgIGFyZ3VtZW50IGlzIHBhc3NlZCwgdGhlIGB0b2dnbGVgXG4vLyB3aWxsIHNpbXBseSBiZSB0b2dnbGVkLlxuXG51cGRhdGVfdG9nZ2xlX3N0YXRlID0gZnVuY3Rpb24gKHRvZ2dsZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciB0b2dnbGVfbm9kZSwgYWxsX3RvZ2dsZXMsIHZhcmlhdGlvbiwgYWRkLCBjdXJyZW50bHlfYWN0aXZlLCBhY3RpdmF0ZV93aXRoLCBhY3RpdmF0ZV93aXRoX3RvZ2dsZSwgcHJlY2x1ZGU7XG5cbiAgdG9nZ2xlID0gVG9nZ2xlW1wiZm9yXCJdKHRvZ2dsZSk7XG4gIGlmICh0b2dnbGUubG9ja2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRvZ2dsZV9ub2RlID0gdG9nZ2xlLnJvb3Q7XG4gIHRvZ2dsZS5sb2NrKCk7XG5cbiAgYWxsX3RvZ2dsZXMgPSBUb2dnbGVzW1wiZm9yXCJdKHRvZ2dsZV9ub2RlKTtcbiAgdmFyaWF0aW9uID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1BhdHRlcm4yW1wiZGVmYXVsdFwiXVtcImZvclwiXSh0b2dnbGVfbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cnMubmFtZSksIHsgc2VhcmNoX2FsbDogdHJ1ZSB9KTtcbiAgYWRkID0gb3B0aW9ucy5hZGQgPyAhIW9wdGlvbnMuYWRkIDogIXRvZ2dsZS5hY3RpdmU7XG5cbiAgLy8gVXBkYXRlIHRoZSBzdGF0ZSBvZiBhbGwgdmFyaWF0aW9ucyB0aGF0IHNob3VsZCBiZSBhY3RpdmF0ZWQgd2l0aCB0aGVcbiAgLy8gY3VycmVudCB0b2dnbGUuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcih2YXJpYXRpb24gJiYgdmFyaWF0aW9uLmFjdGl2YXRlX3dpdGggfHwgW10pLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICBhY3RpdmF0ZV93aXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmIChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzTmFtaW5nX2NvbnZlbnRpb24ubmFtaW5nX2NvbnZlbnRpb24uaXNfY29tcG9uZW50KHZhcmlhdGlvbikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFjdGl2YXRlX3dpdGhfdG9nZ2xlID0gVG9nZ2xlW1wiZm9yXCJdKGFjdGl2YXRlX3dpdGgpO1xuXG4gICAgICBpZiAoYWN0aXZhdGVfd2l0aF90b2dnbGUpIHtcbiAgICAgICAgY3VycmVudGx5X2FjdGl2ZSA9IGFjdGl2YXRlX3dpdGhfdG9nZ2xlLmFjdGl2ZTtcbiAgICAgICAgaWYgKGN1cnJlbnRseV9hY3RpdmUgJiYgIWFkZCB8fCAhY3VycmVudGx5X2FjdGl2ZSAmJiBhZGQpIHtcbiAgICAgICAgICB1cGRhdGVfdG9nZ2xlX3N0YXRlKGFjdGl2YXRlX3dpdGhfdG9nZ2xlLCB7IGFkZDogYWRkIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxfdG9nZ2xlcy50cmlnZ2VyKHtcbiAgICAgICAgICBhZGQ6IGFkZCxcbiAgICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICBcImZvclwiOiBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzTmFtaW5nX2NvbnZlbnRpb24ubmFtaW5nX2NvbnZlbnRpb24uY29tcG9uZW50X25hbWUoYWN0aXZhdGVfd2l0aCksXG4gICAgICAgICAgICBuYW1lOiBhY3RpdmF0ZV93aXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBzb21ldGhpbmcgYWJvdXQgZmlsdGVycy5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFkZCkge1xuICAgIHRvZ2dsZS5hY3RpdmF0ZSgpO1xuXG4gICAgLy8gRGVhY3RpdmF0ZXMgYW55IGN1cnJlbnRseSBhY3RpdmUgdmFyaWF0aW9ucyB0aGF0IGFyZSBwcmVjbHVkZWQgZnJvbSBiZWluZ1xuICAgIC8vIGFjdGl2ZSB3aXRoIHRoZSBjdXJyZW50IHZhcmlhdGlvbi5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfZ2V0SXRlcmF0b3IodmFyaWF0aW9uICYmIHZhcmlhdGlvbi5wcmVjbHVkZXMgfHwgW10pLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgcHJlY2x1ZGUgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgcHJlY2x1ZGUgPSBUb2dnbGVbXCJmb3JcIl0ocHJlY2x1ZGUpO1xuICAgICAgICBpZiAocHJlY2x1ZGUgJiYgcHJlY2x1ZGUuYWN0aXZlKSB7XG4gICAgICAgICAgdXBkYXRlX3RvZ2dsZV9zdGF0ZShwcmVjbHVkZSwgeyBhZGQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIHRvZ2dsZS51bmxvY2soKTtcbiAgYWxsX3RvZ2dsZXMudHJpZ2dlcih7IGFkZDogYWRkLCBkZXRhaWxzOiB2YXJpYXRpb24gfSk7XG59O1xuXG4vLypcbi8vIEEgY29uc3RydWN0b3IgYXJvdW5kIGEgc2luZ2xlIGBUb2dnbGVgLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGdpdmVzIHRoZSBhYmlsaXR5XG4vLyB0byB1cGRhdGUgdGhlIHRvZ2dsZSdzIHN0YXRlLCBsb2NraW5nIG9yIHVubG9ja2luZyB0aGUgdG9nZ2xlIGZyb20gZnVydGhlclxuLy8gY2hhbmdlcywgYW5kIGdldHRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHRvZ2dsZS5cbi8vXG4vLyBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gVGhlIHJvb3Qgbm9kZSBvZiBhIHRvZ2dsZS5cbi8vIEByZXR1cm4ge1RvZ2dsZX1cblxuVG9nZ2xlID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgaWYgKCFyb290KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHJvb3QgaW5zdGFuY2VvZiBUb2dnbGUpIHtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIHJldHVybiBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe1xuICAgIHJvb3Q6IHJvb3QsXG4gICAgbG9jazogZnVuY3Rpb24gbG9jaygpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZChzdGF0ZXMucm9vdC5sb2NrZWQpO1xuICAgIH0sXG4gICAgdW5sb2NrOiBmdW5jdGlvbiB1bmxvY2soKSB7XG4gICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnJvb3QubG9ja2VkKTtcbiAgICB9LFxuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZChzdGF0ZXMucm9vdC5hY3RpdmUpO1xuICAgIH0sXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZShzdGF0ZXMucm9vdC5hY3RpdmUpO1xuICAgIH0sXG5cbiAgICBjb25zdHJ1Y3RvcjogVG9nZ2xlXG4gIH0sIHtcbiAgICBpc19sb2NrZWQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLnJvb3QubG9ja2VkKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBpc19hY3RpdmU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLnJvb3QuYWN0aXZlKSB8fCByb290LmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMucm9vdC5wYXJ0aWFsbHlfYWN0aXZlKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbn07XG5cbi8vKlxuLy8gR2V0cyB0aGUgdG9nZ2xlIGZvciB0aGUgcGFzc2VkIHZhcmlhdGlvbi5cbi8vXG4vLyBAcGFyYW0ge1RvZ2dsZSwgU3RyaW5nLCBIVE1MRWxlbWVudH0gdmFyaWF0aW9uIC0gVGhlIHNvdXJjZSBvZiB0aGUgZGVzaXJlZFxuLy8gYFRvZ2dsZWAg4oCUIGVpdGhlciBhcyB0aGUgSFRNTEVsZW1lbnQgdGhhdCByb290cyB0aGUgdG9nZ2xlLCBhIGBUb2dnbGVgICh3aGljaFxuLy8gaXMgcmV0dXJuZWQgYXMtaXMpIG9yIGEgYFN0cmluZ2AgdGhhdCBpcyB0aGUgbmFtZSBvZiBhIHRvZ2dsZS5cbi8vXG4vLyBAcmV0dXJuIHtUb2dnbGV9XG5cblRvZ2dsZVtcImZvclwiXSA9IGZ1bmN0aW9uICh2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiBpbnN0YW5jZW9mIFRvZ2dsZSkge1xuICAgIHJldHVybiB2YXJpYXRpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhcmlhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIiArIGF0dHJzLm5hbWUgKyBcIj0nXCIgKyB2YXJpYXRpb24ubmFtZSArIFwiJ11cIikpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBUb2dnbGUoJCh2YXJpYXRpb24pLmNsb3Nlc3QoXCIuXCIgKyBjbGFzc2VzLnJvb3QpWzBdKTtcbiAgfVxufTtcblxuVG9nZ2xlcyA9IGZ1bmN0aW9uIChyb290KSB7XG4gIHZhciBjb21tdW5pY2F0b3IgPSAoMCwgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNJZnJhbWUuQ29tbXVuaWNhdG9yKSgpO1xuICBjb21tdW5pY2F0b3IucmVnaXN0ZXIuZnJvbV9ub2RlKHJvb3QpO1xuXG4gIHJldHVybiB7XG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbW11bmljYXRvci50cmlnZ2VyLmFwcGx5KGNvbW11bmljYXRvciwgW19Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXS50eXBlcy5jbGFzc19jaGFuZ2VdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufTtcblxuVG9nZ2xlcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAkKGRvY3VtZW50KS5vbihcImtleXByZXNzXCIsIFwiLlwiICsgY2xhc3Nlcy5yb290LCBoYW5kbGVfa2V5cHJlc3MpLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyBjbGFzc2VzLmluZm8sIGluZm9fY2xpY2spLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyBjbGFzc2VzLnJvb3QsIHRvZ2dsZV9jbGljayk7XG5cbiAgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0J1aWxkZXIyW1wiZGVmYXVsdFwiXS5idWlsZChUb2dnbGVzLCB7IG5hbWU6IGNsYXNzZXMuY29udGFpbmVyLCBjYWNoZTogdHJ1ZSB9KTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVG9nZ2xlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbn0se1wiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2NvbXBvbmVudHMvaWZyYW1lXCI6OTksXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvY29tcG9uZW50cy9tb2RhbFwiOjEwMixcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvYnVpbGRlclwiOjExNSxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvZXZlbnRzXCI6MTE4LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9rZXljb2Rlc1wiOjExOSxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvbmFtaW5nX2NvbnZlbnRpb25cIjoxMjEsXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL3BhdHRlcm5cIjoxMjQsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MixcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIjo2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTR9XSwxMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzVGVtcGxhdGUgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy90ZW1wbGF0ZVwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNUZW1wbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNUZW1wbGF0ZSk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUGF0dGVybiA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL3BhdHRlcm5cIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUGF0dGVybjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNQYXR0ZXJuKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3V0aWxpdGllcy9ldmVudHNcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0V2ZW50cyk7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlQ29tcG9uZW50c0V4cGxvZGVkID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzL2V4cGxvZGVkXCIpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNFeHBsb2RlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VDb21wb25lbnRzRXhwbG9kZWQpO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNJZnJhbWUgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2NvbXBvbmVudHMvaWZyYW1lXCIpO1xuXG52YXIgY2xhc3NlcyA9IHtcbiAgcm9vdDogXCJ4LXJheVwiLFxuICBkZXRhaWxzOiBcIngtcmF5X19kZXRhaWxzXCIsXG4gIGxpc3Q6IFwieC1yYXlfX2xpc3RcIlxufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcm9vdDogeyBhY3RpdmU6IFwieC1yYXktLWlzLWFjdGl2ZVwiIH1cbn07XG5cbnZhciBoZWxwZXJzID0ge1xuICBhY3RpdmU6IFwieC1yYXlfX2hlbHBlcnMtLXgtcmF5LWlzLWFjdGl2ZVwiXG59O1xuXG52YXIgYXR0cnMgPSB7XG4gIGRpc21pc3M6IFwiZGF0YS14cmF5LWRpc21pc3NcIixcbiAgcHJlc2VudDogXCJkYXRhLXhyYXktcHJlc2VudFwiLFxuICB0ZW1wbGF0ZTogXCJkYXRhLXhyYXktdGVtcGxhdGVcIlxufTtcblxudmFyIHRlbXBsYXRlX25hbWVzID0ge1xuICBkZXRhaWxzOiBcImRldGFpbHNcIixcbiAgbGlzdDogXCJsaXN0XCJcbn07XG5cbnZhciBYcmF5LCBzdHJ1Y3R1cmUsIGV4cGxvZGVkLCB0ZW1wbGF0ZXMsIGNvbXBvbmVudCwgaG9va191cF9pZnJhbWVfY29tbXVuaWNhdGlvbiwgY29tbXVuaWNhdG9yLCB0b2dnbGUsIHByZXNlbnQsIGRpc21pc3MsIHNldF9jb21wb25lbnQsIHNldF9kZXRhaWxzO1xuXG5ob29rX3VwX2lmcmFtZV9jb21tdW5pY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVnaXN0ZXJlZDtcblxuICBjb21tdW5pY2F0b3IgPSAoMCwgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNJZnJhbWUuQ29tbXVuaWNhdG9yKSgpO1xuICByZWdpc3RlcmVkID0gY29tbXVuaWNhdG9yLnJlZ2lzdGVyLmZyb21fbm9kZShzdHJ1Y3R1cmUucm9vdCk7XG5cbiAgaWYgKCFyZWdpc3RlcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tbXVuaWNhdG9yLm9uKF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNFdmVudHMyW1wiZGVmYXVsdFwiXS50eXBlcy5tYXJrdXBfcmVxdWVzdCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXhwbG9kZWQuc2V0X21hcmt1cChldmVudC5tYXJrdXApO1xuICB9KTtcbn07XG5cbnNldF9jb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50X25hbWUpIHtcbiAgY29tcG9uZW50ID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1BhdHRlcm4yW1wiZGVmYXVsdFwiXS5maW5kKGNvbXBvbmVudF9uYW1lLCB7IHNlYXJjaF9hbGw6IHRydWUgfSk7XG4gIHN0cnVjdHVyZS5oZWFkaW5nLmlubmVySFRNTCA9IGNvbXBvbmVudC50aXRsZSA/IGNvbXBvbmVudC50aXRsZSA6IFwiPGNvZGUgY2xhc3M9J3R5cGUtLWNvZGUnPlwiICsgY29tcG9uZW50X25hbWUgKyBcIjwvY29kZT5cIjtcbiAgc3RydWN0dXJlLmxpc3QuaW5uZXJIVE1MID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc1RlbXBsYXRlMltcImRlZmF1bHRcIl0ucmVuZGVyKHRlbXBsYXRlcy5saXN0LCB7XG4gICAgY29tcG9uZW50czogW2NvbXBvbmVudF9uYW1lXS5jb25jYXQoY29tcG9uZW50LnN1YmNvbXBvbmVudCB8fCBbXSlcbiAgfSk7XG4gIHNldF9kZXRhaWxzKGNvbXBvbmVudCk7XG59O1xuXG5zZXRfZGV0YWlscyA9IGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgdmFyIG90aGVyX2NvbnRlbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgb3B0aW9ucyA9IF9PYmplY3QkYXNzaWduKG90aGVyX2NvbnRlbnQsIHN5bWJvbCk7XG4gIHN0cnVjdHVyZS5kZXRhaWxzLmlubmVySFRNTCA9IF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNUZW1wbGF0ZTJbXCJkZWZhdWx0XCJdLnJlbmRlcih0ZW1wbGF0ZXMuZGV0YWlscywgb3B0aW9ucyk7XG59O1xuXG5wcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb21tdW5pY2F0b3IudHJpZ2dlcihfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRXZlbnRzMltcImRlZmF1bHRcIl0udHlwZXMubWFya3VwX3JlcXVlc3QpO1xuICBzdHJ1Y3R1cmUucm9vdC5jbGFzc0xpc3QuYWRkKHN0YXRlcy5yb290LmFjdGl2ZSk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChoZWxwZXJzLmFjdGl2ZSk7XG59O1xuXG5kaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICBleHBsb2RlZC5zZXRfbWFya3VwKCk7XG4gIHN0cnVjdHVyZS5yb290LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLnJvb3QuYWN0aXZlKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGhlbHBlcnMuYWN0aXZlKTtcbn07XG5cbnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHN0cnVjdHVyZS5yb290LmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMucm9vdC5hY3RpdmUpID8gZGlzbWlzcygpIDogcHJlc2VudCgpO1xufTtcblxuWHJheSA9IHtcbiAgdG9nZ2xlOiB0b2dnbGUsXG4gIHByZXNlbnQ6IHByZXNlbnQsXG4gIGRpc21pc3M6IGRpc21pc3MsXG5cbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc2VzLnJvb3QpO1xuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvZGVkID0gX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNFeHBsb2RlZDJbXCJkZWZhdWx0XCJdLndpdGhpbihyb290KVswXTtcblxuICAgIHN0cnVjdHVyZSA9IHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICBoZWFkaW5nOiByb290LnF1ZXJ5U2VsZWN0b3IoXCIudHlwZS1oZWFkaW5nXCIpLFxuICAgICAgZGV0YWlsczogcm9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3Nlcy5kZXRhaWxzKSxcbiAgICAgIGxpc3Q6IHJvb3QucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzZXMubGlzdClcbiAgICB9O1xuXG4gICAgdGVtcGxhdGVzID0ge1xuICAgICAgZGV0YWlsczogcm9vdC5xdWVyeVNlbGVjdG9yKFwiW1wiICsgYXR0cnMudGVtcGxhdGUgKyBcIj0nXCIgKyB0ZW1wbGF0ZV9uYW1lcy5kZXRhaWxzICsgXCInXVwiKSxcbiAgICAgIGxpc3Q6IHJvb3QucXVlcnlTZWxlY3RvcihcIltcIiArIGF0dHJzLnRlbXBsYXRlICsgXCI9J1wiICsgdGVtcGxhdGVfbmFtZXMubGlzdCArIFwiJ11cIilcbiAgICB9O1xuXG4gICAgaG9va191cF9pZnJhbWVfY29tbXVuaWNhdGlvbigpO1xuXG4gICAgZXhwbG9kZWQub24oX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUNvbXBvbmVudHNFeHBsb2RlZC5ldmVudHMucGFuZV9zZWxlY3RlZCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb21wb25lbnQgPSBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzUGF0dGVybjJbXCJkZWZhdWx0XCJdLmZpbmQoZXZlbnQuY29tcG9uZW50LCB7IHNlYXJjaF9hbGw6IHRydWUgfSk7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIHNldF9kZXRhaWxzKGNvbXBvbmVudCwgeyB0YWduYW1lOiBldmVudC5ub2RlLnRhZ05hbWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKHJvb3QpLm9uKFwiY2xpY2tcIiwgXCJbXCIgKyBhdHRycy5kaXNtaXNzICsgXCJdXCIsIGRpc21pc3MpLm9uKFwiY2xpY2tcIiwgXCJbaHJlZl49JyMnXVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBleHBsb2RlZC5zZWxlY3RfY29tcG9uZW50KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiW1wiICsgYXR0cnMucHJlc2VudCArIFwiXVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHNldF9jb21wb25lbnQoZXZlbnQuZ2V0QXR0cmlidXRlKGF0dHJzLnByZXNlbnQpKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBYcmF5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvY29tcG9uZW50cy9leHBsb2RlZFwiOjk3LFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL2NvbXBvbmVudHMvaWZyYW1lXCI6OTksXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2V2ZW50c1wiOjExOCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvcGF0dGVyblwiOjEyNCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvdGVtcGxhdGVcIjoxMjYsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDExMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBcHAsXG4gICAgY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHMgPSBbXTtcblxuQXBwID0ge1xuICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoYV9jb21wb25lbnQpIHtcbiAgICBjb21wb25lbnRzLnB1c2goYV9jb21wb25lbnQpO1xuICB9LFxuXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfZ2V0SXRlcmF0b3IoY29tcG9uZW50cyksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgY29tcG9uZW50ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5pbml0KSB7XG4gICAgICAgICAgY29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXBwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6Mn1dLDExMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VGb3VuZGF0aW9uQXBwID0gcmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9mb3VuZGF0aW9uL2FwcFwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VGb3VuZGF0aW9uQXBwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZUZvdW5kYXRpb25BcHApO1xuXG5yZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3ZlbmRvclwiKTtcblxucmVxdWlyZShcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9jb21wb25lbnRzXCIpO1xuXG5yZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3N0cnVjdHVyZXNcIik7XG5cbnJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvYmVoYXZpb3JzXCIpO1xuXG5fVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlRm91bmRhdGlvbkFwcDJbXCJkZWZhdWx0XCJdLmluaXQoKTtcblxufSx7XCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvYmVoYXZpb3JzXCI6OTMsXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvY29tcG9uZW50c1wiOjEwMCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9mb3VuZGF0aW9uL2FwcFwiOjExMSxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9zdHJ1Y3R1cmVzXCI6MTEzLFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3ZlbmRvclwiOjEzMSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX3NpZGViYXIgPSByZXF1aXJlKFwiLi9zaWRlYmFyXCIpO1xuXG52YXIgX3NpZGViYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lkZWJhcik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlRm91bmRhdGlvbkFwcCA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvZm91bmRhdGlvbi9hcHBcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlRm91bmRhdGlvbkFwcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VGb3VuZGF0aW9uQXBwKTtcblxuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5cbltfc2lkZWJhcjJbXCJkZWZhdWx0XCJdXS5mb3JFYWNoKF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VGb3VuZGF0aW9uQXBwMltcImRlZmF1bHRcIl0ucmVnaXN0ZXIpO1xuXG4vKiBlc2xpbnQtZW5hYmxlIGluZGVudCAqL1xuXG59LHtcIi4vc2lkZWJhclwiOjExNCxcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS9mb3VuZGF0aW9uL2FwcFwiOjExMSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNsYXNzZXMgPSB7XG4gIGJhc2U6IFwic2lkZWJhclwiLFxuICB0b2dnbGVyOiBcInNpZGViYXJfX3RvZ2dsZXJcIlxufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgYmFzZTogeyBhY3RpdmU6IGNsYXNzZXMuYmFzZSArIFwiLS1pcy1hY3RpdmVcIiB9XG59O1xuXG52YXIgU2lkZWJhciwgcm9vdCwgc2hvdywgaGlkZSwgdG9nZ2xlLCBjaGVja19mb3Jfc2lkZWJhcl9zdGF0ZV9jaGFuZ2U7XG5cbi8vKlxuLy8gUmV2ZWFscyB0aGUgc2lkZWJhci5cblxuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgcm9vdC5jbGFzc0xpc3QuYWRkKHN0YXRlcy5iYXNlLmFjdGl2ZSk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja19mb3Jfc2lkZWJhcl9zdGF0ZV9jaGFuZ2UpO1xuICB9LCAwKTtcbn07XG5cbi8vKlxuLy8gSGlkZXMgdGhlIHNpZGViYXIuXG5cbmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja19mb3Jfc2lkZWJhcl9zdGF0ZV9jaGFuZ2UpO1xuICByb290LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLmJhc2UuYWN0aXZlKTtcbn07XG5cbi8vKlxuLy8gVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgc2lkZWJhci5cblxudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gU2lkZWJhci5pc19hY3RpdmUgPyBoaWRlKCkgOiBzaG93KCk7XG59O1xuXG4vLypcbi8vIENhcHR1cmVzIGFsbCBjbGlja3Mgd2hlbiB0aGUgc2lkZWJhciBpcyBhY3RpdmUgYW5kIGNoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGVcbi8vIHNpZGViYXIgc2hvdWxkIGNoYW5nZSBpdHMgdmlzaWJpbGl0eS4gSWYgdGhlIHNpZGViYXIgaXMgY2xpY2tlZCBvbiwgaXQgc2hvdWxkXG4vLyByZW1haW4gb3BlbiDigJQgb3RoZXJ3aXNlLCBpdCBzaG91bGQgY2xvc2UuXG4vL1xuLy8gQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIGBjbGlja2AgZXZlbnQgb24gdGhlIGBkb2N1bWVudGAuXG4vLyBAcHJpdmF0ZVxuXG5jaGVja19mb3Jfc2lkZWJhcl9zdGF0ZV9jaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5cIiArIGNsYXNzZXMuYmFzZSkubGVuZ3RoKSB7XG4gICAgaGlkZSgpO1xuICB9XG59O1xuXG4vLypcbi8vIFRoZSBnbG9iYWwgc2lkZWJhciBvYmplY3QuIFVzZSB0aGlzIG1ldGhvZCBmb3IgbWFudWFsbHkgdXBkYXRpbmcgdGhlIHN0YXRlIG9mXG4vLyB0aGUgc2lkZWJhcjsgaG93ZXZlciwgbm90ZSB0aGF0IGNsaWNrIGV2ZW50cyBvbiB0aGUgdG9nZ2xlciBhbmQgd2hlbiB0aGVcbi8vIHNpZGViYXIgaXMgb3BlbiBhcmUgaGFuZGxlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBjb21wb25lbnQgaXRzZWxmLlxuXG5TaWRlYmFyID0gX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzKHtcbiAgc2hvdzogc2hvdyxcbiAgaGlkZTogaGlkZSxcbiAgdG9nZ2xlOiB0b2dnbGUsXG5cbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzZXMuYmFzZSk7XG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzZXMudG9nZ2xlcikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZSk7XG4gIH1cbn0sIHtcbiAgaXNfYWN0aXZlOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoc3RhdGVzLmJhc2UuYWN0aXZlKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNpZGViYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIjo2fV0sMTE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0RvbV9jYWNoZSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hyaXMvRHJvcGJveCAoUGVyc29uYWwpL0NocmlzL0NvZGUvd2ViL2RvY2tzL2RvY2tzX3RoZW1lX2FwaS9zb3VyY2UvdXRpbGl0aWVzL2RvbV9jYWNoZVwiKTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNEb21fY2FjaGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVXRpbGl0aWVzRG9tX2NhY2hlKTtcblxuLy8qXG4vLyBAcGF0dGVybiBCdWlsZGVyXG4vLyBAZ3JvdXAgSGVscGVyXG4vL1xuLy8gQSB1dGlsaXR5IGZvciBidWlsZGluZyBhbGwgaW5zdGFuY2VzIG9mIGZhY3Rvcmllcy4gVGhpcyBtYW5hZ2VzIHRoZSBmaW5kaW5nXG4vLyBhbmQgaW5pdGlhbGl6YXRpb24gb2YgaW5zdGFuY2VzIG9mIGEgZmFjdG9yeSwgY2FjaGVpbmcsIGFkZGluZyBjYWNoZVxuLy8gcmV0cmlldmFsIG1ldGhvZHMsIGFuZCBtb3JlLlxuXG52YXIgQnVpbGRlciwgYWRkX3JldHJpZXZhbF9tZXRob2RzO1xuXG4vLypcbi8vIEFkZHMgc3RhdGljIG1ldGhvZHMgdG8gYEZhY3RvcnlgIHRoYXQgYWxsb3cgaXQgdG8gcmV0cmlldmUgY2FjaGVkIGluc3RhbmNlc1xuLy8gZnJvbSBub2Rlcy5cbi8vXG4vLyBAcHJpdmF0ZVxuLy9cbi8vIEBwYXJhbSB7RnVuY3Rpb259IEZhY3RvcnkgLSBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0byBhZGQgbWV0aG9kcyB0by5cbi8vXG4vLyBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMgPSB7fV1cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubmFtZV0gLSBUaGUgbmFtZSBmb3IgdGhpcyBGYWN0b3J5LiBUaGlzIHdpbGxcbi8vIGJlIHVzZWQgYXMgdGhlIHJvb3QgY2xhc3MgbmFtZSBpZiBgb3B0aW9ucy5zZWxlY3RvcmAgaXMgbm90IHByb3ZpZGVkLlxuLy9cbi8vIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWxlY3Rvcl0gLSBUaGUgc2VsZWN0b3IgdG8gdXNlIHRvIGZpbmQgbm9kZXNcbi8vIHRvIGNhbGwgdGhlIGZhY3Rvcnkgb24uXG5cbmFkZF9yZXRyaWV2YWxfbWV0aG9kcyA9IGZ1bmN0aW9uIChGYWN0b3J5KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKCFGYWN0b3J5W1wiZm9yXCJdKSB7XG4gICAgRmFjdG9yeVtcImZvclwiXSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gKDAsIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VVdGlsaXRpZXNEb21fY2FjaGUyW1wiZGVmYXVsdFwiXSkoJChub2RlKS5jbG9zZXN0KG9wdGlvbnMuc2VsZWN0b3IpWzBdKS5nZXQob3B0aW9ucy5uYW1lKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFGYWN0b3J5LndpdGhpbikge1xuICAgIEZhY3Rvcnkud2l0aGluID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciByZXN1bHRzID0gW10sXG4gICAgICAgICAgYXBpLFxuICAgICAgICAgIG5vZGVzID0gX0FycmF5JGZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2VsZWN0b3IpKTtcblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihub2RlcyksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICBub2RlID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBhcGkgPSBGYWN0b3J5W1wiZm9yXCJdKG5vZGUpO1xuICAgICAgICAgIGlmIChhcGkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChhcGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9XG59O1xuXG4vLypcbi8vIEBvYmplY3RcblxuQnVpbGRlciA9IHtcblxuICAvLypcbiAgLy8gQ3JlYXRlcyBhbGwgcmVxdWlyZWQgaW5zdGFuY2VzIG9mIHRoZSBwYXNzZWQgZmFjdG9yeS5cbiAgLy9cbiAgLy8gQG1ldGhvZFxuICAvL1xuICAvLyBAcGFyYW0ge0Z1bmN0aW9ufSBGYWN0b3J5IC0gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gdXNlLlxuICAvL1xuICAvLyBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMgPSB7fV1cbiAgLy9cbiAgLy8gQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdIC0gVGhlIG5hbWUgZm9yIHRoaXMgRmFjdG9yeS4gVGhpcyB3aWxsXG4gIC8vIGJlIHVzZWQgdG8gc2V0IHVwIGNhY2hlaW5nIGlmIHJlcXVpcmVkLCBhbmQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290XG4gIC8vIGNsYXNzIG5hbWUgaWYgYG9wdGlvbnMuc2VsZWN0b3JgIGlzIG5vdCBwcm92aWRlZC5cbiAgLy9cbiAgLy8gQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNlbGVjdG9yXSAtIFRoZSBzZWxlY3RvciB0byB1c2UgdG8gZmluZCBub2Rlc1xuICAvLyB0byBjYWxsIHRoZSBmYWN0b3J5IG9uLlxuICAvL1xuICAvLyBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNhY2hlID0gZmFsc2VdIC0gV2hldGhlciBvciBub3QgdG8gY2FjaGUgdGhlXG4gIC8vIHJldHVybiByZXN1bHQgb2YgdGhlIGZhY3Rvcnkgb24gdGhlIG5vZGUuXG4gIC8vXG4gIC8vIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmZpbHRlcl0gLSBBIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyXG4gIC8vIG9yIG5vdCBhIGdpdmVuIG5vZGUgc2hvdWxkIGJlIHVzZWQgYXMgYSByb290IGZvciB0aGUgYGZhY3RvcnlgLiBUaGlzXG4gIC8vIGZ1bmN0aW9uIGlzIHBhc3NlZCBhIHNpbmdsZSBhcmd1bWVudCwgYG5vZGVgLCB3aGljaCBpcyB0aGUgbm9kZSB0byB0ZXN0LlxuXG4gIGJ1aWxkOiBmdW5jdGlvbiBidWlsZChGYWN0b3J5KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBub2RlLCBub2RlcywgYXBpO1xuXG4gICAgbm9kZXMgPSBvcHRpb25zLnNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNlbGVjdG9yKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5uYW1lKTtcblxuICAgIG9wdGlvbnMuc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yIHx8IFwiLlwiICsgb3B0aW9ucy5uYW1lO1xuXG4gICAgaWYgKG9wdGlvbnMuY2FjaGUpIHtcbiAgICAgIGFkZF9yZXRyaWV2YWxfbWV0aG9kcyhGYWN0b3J5LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfZ2V0SXRlcmF0b3IoX0FycmF5JGZyb20obm9kZXMpKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIG5vZGUgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsdGVyICYmICFvcHRpb25zLmZpbHRlcihub2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBpID0gRmFjdG9yeShub2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2FjaGUpIHtcbiAgICAgICAgICAoMCwgX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVV0aWxpdGllc0RvbV9jYWNoZTJbXCJkZWZhdWx0XCJdKShub2RlKS5zZXQob3B0aW9ucy5uYW1lLCBhcGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8qXG4gIC8vIEJ1aWxkcyB0aGUgcGFzc2VkIGZhY3RvcnkgYW5kIGNhY2hlcyB0aGUgcmVzdWx0LiBUaGlzIGlzIGVxdWl2YWxlbnQgdG86XG4gIC8vXG4gIC8vIGBgYFxuICAvLyBCdWlsZGVyLmJ1aWxkKEZhY3RvcnksIHsgY2FjaGU6IHRydWUgfSk7XG4gIC8vIGBgYFxuICAvL1xuICAvLyBTZWUgW2BCdWlsZGVyLmJ1aWxkYF0oQGxpbmspIGZvciBtb3JlIGRldGFpbHMgb24gYG9wdGlvbnNgIGFyZ3VtZW50LlxuICAvL1xuICAvLyBAcGFyYW0ge0Z1bmN0aW9ufSBGYWN0b3J5IC0gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gdXNlLlxuICAvLyBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMgPSB7fV1cbiAgLy9cbiAgLy8gQG1ldGhvZFxuXG4gIGJ1aWxkX2FuZF9jYWNoZTogZnVuY3Rpb24gYnVpbGRfYW5kX2NhY2hlKEZhY3RvcnkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgb3B0aW9ucy5jYWNoZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGQoRmFjdG9yeSwgb3B0aW9ucyk7XG4gIH0sXG5cbiAgLy8qXG4gIC8vIEJ1aWxkcyB0aGUgcGFzc2VkIGZhY3RvcnkgYnV0LCBiZWZvcmUgZG9pbmcgc28sIGVuc3VyZXMgdGhhdCBlYWNoIG5vZGVcbiAgLy8gaGFzIG5vdCBiZWVuIHVzZWQgYXMgYW4gYXJndW1lbnQgZm9yIHRoaXMgZmFjdG9yeS5cbiAgLy9cbiAgLy8gU2VlIFtgQnVpbGRlci5idWlsZGBdKEBsaW5rKSBmb3IgbW9yZSBkZXRhaWxzIG9uIGBvcHRpb25zYCBhcmd1bWVudC5cbiAgLy9cbiAgLy8gQHBhcmFtIHtGdW5jdGlvbn0gRmFjdG9yeSAtIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIHVzZS5cbiAgLy8gQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zID0ge31dXG4gIC8vXG4gIC8vIEBtZXRob2RcblxuICBpbml0aWFsaXplX29uY2U6IGZ1bmN0aW9uIGluaXRpYWxpemVfb25jZShGYWN0b3J5KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBvcHRpb25zLmZpbHRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiAhRmFjdG9yeVtcImZvclwiXShub2RlKTtcbiAgICAgIH07XG4gICAgICBCdWlsZGVyLmJ1aWxkX2FuZF9jYWNoZShGYWN0b3J5LCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJ1aWxkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcIi9Vc2Vycy9jaHJpcy9Ecm9wYm94IChQZXJzb25hbCkvQ2hyaXMvQ29kZS93ZWIvZG9ja3MvZG9ja3NfdGhlbWVfYXBpL3NvdXJjZS91dGlsaXRpZXMvZG9tX2NhY2hlXCI6MTE3LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDExNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBDbGllbnQ7XG5cbkNsaWVudCA9IHtcbiAgbmFtZV9mb3I6IGZ1bmN0aW9uIG5hbWVfZm9yKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENsaWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbn0se31dLDExNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAgICAgICAgX19fICAgICAgICAgIF9fXyAgICAgICAgICBfX18gICAgICAgICAgX19fICAgICAgICAgIF9fX1xuLy8gICAgICAgLyAgL1xcICAgICAgICAvICAvXFwgICAgICAgIC8gIC9cXCAgICAgICAgL19fL1xcICAgICAgICAvICAvXFxcbi8vICAgICAgLyAgLzovICAgICAgIC8gIC86OlxcICAgICAgLyAgLzovICAgICAgICBcXCAgXFw6XFwgICAgICAvICAvOi9fXG4vLyAgICAgLyAgLzovICAgICAgIC8gIC86L1xcOlxcICAgIC8gIC86LyAgICAgICAgICBcXF9fXFw6XFwgICAgLyAgLzovIC9cXFxuLy8gICAgLyAgLzovICBfX18gIC8gIC86L34vOjpcXCAgLyAgLzovICBfX18gIF9fXyAvICAvOjpcXCAgLyAgLzovIC86L19cbi8vICAgL19fLzovICAvICAvXFwvX18vOi8gLzovXFw6XFwvX18vOi8gIC8gIC9cXC9fXy9cXCAgLzovXFw6XFwvX18vOi8gLzovIC9cXFxuLy8gICBcXCAgXFw6XFwgLyAgLzovXFwgIFxcOlxcLzovX19cXC9cXCAgXFw6XFwgLyAgLzovXFwgIFxcOlxcLzovX19cXC9cXCAgXFw6XFwvOi8gLzovXG4vLyAgICBcXCAgXFw6XFwgIC86LyAgXFwgIFxcOjovICAgICAgXFwgIFxcOlxcICAvOi8gIFxcICBcXDo6LyAgICAgIFxcICBcXDo6LyAvOi9cbi8vICAgICBcXCAgXFw6XFwvOi8gICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXC86LyAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcLzovXG4vLyAgICAgIFxcICBcXDo6LyAgICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6Oi8gICAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOjovXG4vLyAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvXG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIENhY2hlO1xuXG5DYWNoZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciAkbm9kZSA9ICQobm9kZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIHJldHVybiAkbm9kZS5kYXRhKGtleSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gJG5vZGUuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENhY2hlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7fV0sMTE4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vICAgICAgICBfX18gICAgICAgICAgICAgICAgICAgICAgX19fICAgICAgICAgIF9fXyAgICAgICAgICAgICAgICAgICBfX19cbi8vICAgICAgIC8gIC9cXCAgICAgICAgIF9fXyAgICAgICAgLyAgL1xcICAgICAgICAvX18vXFwgICAgICAgICBfX18gICAgIC8gIC9cXFxuLy8gICAgICAvICAvOi9fICAgICAgIC9fXy9cXCAgICAgIC8gIC86L18gICAgICAgXFwgIFxcOlxcICAgICAgIC8gIC9cXCAgIC8gIC86L19cbi8vICAgICAvICAvOi8gL1xcICAgICAgXFwgIFxcOlxcICAgIC8gIC86LyAvXFwgICAgICAgXFwgIFxcOlxcICAgICAvICAvOi8gIC8gIC86LyAvXFxcbi8vICAgIC8gIC86LyAvOi9fICAgICAgXFwgIFxcOlxcICAvICAvOi8gLzovXyAgX19fX19cXF9fXFw6XFwgICAvICAvOi8gIC8gIC86LyAvOjpcXFxuLy8gICAvX18vOi8gLzovIC9cXCBfX18gIFxcX19cXDpcXC9fXy86LyAvOi8gL1xcL19fLzo6Ojo6Ojo6XFwgLyAgLzo6XFwgL19fLzovIC86L1xcOlxcXG4vLyAgIFxcICBcXDpcXC86LyAvOi8vX18vXFwgfCAgfDp8XFwgIFxcOlxcLzovIC86L1xcICBcXDpcXH5+XFx+flxcLy9fXy86L1xcOlxcXFwgIFxcOlxcLzovfi86L1xuLy8gICAgXFwgIFxcOjovIC86LyBcXCAgXFw6XFx8ICB8OnwgXFwgIFxcOjovIC86LyAgXFwgIFxcOlxcICB+fn4gXFxfX1xcLyAgXFw6XFxcXCAgXFw6Oi8gLzovXG4vLyAgICAgXFwgIFxcOlxcLzovICAgXFwgIFxcOlxcX198OnwgIFxcICBcXDpcXC86LyAgICBcXCAgXFw6XFwgICAgICAgICAgXFwgIFxcOlxcXFxfX1xcLyAvOi9cbi8vICAgICAgXFwgIFxcOjovICAgICBcXF9fXFw6Ojo6LyAgICBcXCAgXFw6Oi8gICAgICBcXCAgXFw6XFwgICAgICAgICAgXFxfX1xcLyAgL19fLzovXG4vLyAgICAgICBcXF9fXFwvICAgICAgICAgIH5+fn4gICAgICBcXF9fXFwvICAgICAgICBcXF9fXFwvICAgICAgICAgICAgICAgICBcXF9fXFwvXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2dldEl0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEV2ZW50cyA9IHtcbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgIHZhciBldmVudDtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV2ZW50cyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBldmVudHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihldmVudHMpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIGV2ZW50ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgdGhpcy50eXBlc1tldmVudF0gPSBldmVudDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHR5cGVzOiB7fVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoyfV0sMTE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzPXtcbiAgXCJtYWluXCI6IFwicGFja2FnZS5qc29uXCJcbn1cblxufSx7fV0sMTIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vICAgICAgICBfX18gICAgICAgICAgX19fICAgICAgICAgIF9fXyAgICAgICAgICBfX18gICAgICAgICAgX19fICAgICAgICAgIF9fX1xuLy8gICAgICAgL19fL1xcICAgICAgICAvICAvXFwgICAgICAgIC8gIC9cXCAgICAgICAgL19fL3wgICAgICAgIC9fXy9cXCAgICAgICAgLyAgL1xcXG4vLyAgICAgIHwgIHw6OlxcICAgICAgLyAgLzo6XFwgICAgICAvICAvOjpcXCAgICAgIHwgIHw6fCAgICAgICAgXFwgIFxcOlxcICAgICAgLyAgLzo6XFxcbi8vICAgICAgfCAgfDp8OlxcICAgIC8gIC86L1xcOlxcICAgIC8gIC86L1xcOlxcICAgICB8ICB8OnwgICAgICAgICBcXCAgXFw6XFwgICAgLyAgLzovXFw6XFxcbi8vICAgIF9ffF9ffDp8XFw6XFwgIC8gIC86L34vOjpcXCAgLyAgLzovfi86LyAgIF9ffCAgfDp8ICAgICBfX18gIFxcICBcXDpcXCAgLyAgLzovfi86L1xuLy8gICAvX18vOjo6OnwgXFw6XFwvX18vOi8gLzovXFw6XFwvX18vOi8gLzovX19fL19fL1xcX3w6fF9fX18vX18vXFwgIFxcX19cXDpcXC9fXy86LyAvOi9cbi8vICAgXFwgIFxcOlxcfn5cXF9fXFwvXFwgIFxcOlxcLzovX19cXC9cXCAgXFw6XFwvOjo6OjovXFwgIFxcOlxcLzo6Ojo6L1xcICBcXDpcXCAvICAvOi9cXCAgXFw6XFwvOi9cbi8vICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6Oi8gICAgICBcXCAgXFw6Oi9+fn5+ICBcXCAgXFw6Oi9+fn5+ICBcXCAgXFw6XFwgIC86LyAgXFwgIFxcOjovXG4vLyAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXC86LyAgICBcXCAgXFw6XFxcbi8vICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDpcXCAgICAgICBcXCAgXFw6XFwgICAgICAgXFwgIFxcOlxcICAgICAgIFxcICBcXDo6LyAgICAgIFxcICBcXDpcXFxuLy8gICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcLyAgICAgICAgXFxfX1xcL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF92ZW5kb3JIaWdobGlnaHQgPSByZXF1aXJlKFwiLi4vLi4vdmVuZG9yL2hpZ2hsaWdodFwiKTtcblxudmFyIF92ZW5kb3JIaWdobGlnaHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmVuZG9ySGlnaGxpZ2h0KTtcblxudmFyIHN0YXJ0X3RhZ190ZXN0ID0gL148W15cXC9dLztcbnZhciBlbmRfdGFnX3Rlc3QgPSAvXjxcXC8vO1xudmFyIGNvbnRhaW5zX2VuZF90YWcgPSAvPFxcLy87XG5cbi8vKlxuLy8gVGhlIHNpemUgb2YgbWFudWFsbHkgcmUtaW5kZW50ZWQgY29kZS5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHR5cGUgTnVtYmVyXG4vLyBAdmFsdWUgMlxuXG52YXIgSU5ERU5UQVRJT05fU0laRSA9IDI7XG5cbnZhciBkZWNvZGVfaHRtbF9lbnRpdGllcywgaW5kZW50LCBjbGVhbiwgaGlnaGxpZ2h0O1xuXG5leHBvcnRzLmRlY29kZV9odG1sX2VudGl0aWVzID0gZGVjb2RlX2h0bWxfZW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBzdHJpbmcudHJpbSgpO1xuXG4gIHJldHVybiBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IGVsZW1lbnQuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgfHwgZWxlbWVudC5pbm5lckhUTUw7XG59O1xuXG4vLypcbi8vIEluZGVudHMgSFRNTCBtYXJrdXAgYnkgZmluZGluZyBvcGVuaW5nIGFuZCBjbG9zaW5nIEhUTUwgdGFncy5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gY29kZSAtIFRoZSByYW5kb21seS1lc2NhcGVkIEhUTUwgc3RyaW5nLlxuLy8gQHJldHVybnMge1N0cmluZ30gVGhlIGluZGVudGVkIHN0cmluZy5cblxuZXhwb3J0cy5pbmRlbnQgPSBpbmRlbnQgPSBmdW5jdGlvbiAobWFya3VwKSB7XG4gIHZhciBpbmRlbnRfY291bnQgPSAtSU5ERU5UQVRJT05fU0laRSxcbiAgICAgIGluZGVudGVkX21hcmt1cCA9IFtdLFxuICAgICAgbWFya3VwX2xpbmVzID0gbWFya3VwLnNwbGl0KFwiXFxuXCIpLFxuICAgICAgbWFya3VwX2xpbmUsXG4gICAgICBzdGFydF90YWcsXG4gICAgICBlbmRfdGFnO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihtYXJrdXBfbGluZXMpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICBtYXJrdXBfbGluZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBtYXJrdXBfbGluZSA9IG1hcmt1cF9saW5lLnRyaW0oKTtcbiAgICAgIHN0YXJ0X3RhZyA9IHN0YXJ0X3RhZ190ZXN0LnRlc3QobWFya3VwX2xpbmUpO1xuICAgICAgZW5kX3RhZyA9IGVuZF90YWdfdGVzdC50ZXN0KG1hcmt1cF9saW5lKTtcblxuICAgICAgaWYgKHN0YXJ0X3RhZykge1xuICAgICAgICBpbmRlbnRfY291bnQgKz0gSU5ERU5UQVRJT05fU0laRTtcbiAgICAgIH1cbiAgICAgIGluZGVudF9jb3VudCA9IE1hdGgubWF4KGluZGVudF9jb3VudCwgMCk7XG5cbiAgICAgIGlmIChpbmRlbnRfY291bnQgPiAwKSB7XG4gICAgICAgIG1hcmt1cF9saW5lID0gXCJcIiArIEFycmF5KGluZGVudF9jb3VudCArIDEpLmpvaW4oXCIgXCIpICsgbWFya3VwX2xpbmU7XG4gICAgICB9XG5cbiAgICAgIGluZGVudGVkX21hcmt1cC5wdXNoKG1hcmt1cF9saW5lKTtcbiAgICAgIGlmIChlbmRfdGFnKSB7XG4gICAgICAgIGluZGVudF9jb3VudCAtPSBJTkRFTlRBVElPTl9TSVpFO1xuICAgICAgfVxuICAgICAgaWYgKCFlbmRfdGFnICYmIGNvbnRhaW5zX2VuZF90YWcudGVzdChtYXJrdXBfbGluZSkpIHtcbiAgICAgICAgaW5kZW50X2NvdW50IC09IElOREVOVEFUSU9OX1NJWkU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZW50ZWRfbWFya3VwLmpvaW4oXCJcXG5cIik7XG59O1xuXG5leHBvcnRzLmNsZWFuID0gY2xlYW4gPSBmdW5jdGlvbiAoY29kZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBsZWFkaW5nX3NwYWNlcztcblxuICBpZiAoIWNvZGUpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGNvZGUgPSBkZWNvZGVfaHRtbF9lbnRpdGllcyhjb2RlKTtcbiAgY29kZSA9IGNvZGUudHJpbSgpO1xuICBpZiAob3B0aW9ucy5jb2xsYXBzZV9uZXdsaW5lcykge1xuICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1xcbl5cXHMqXFxuL21nLCBcIlxcblwiKTtcbiAgfVxuXG4gIC8vIEtpbGxzIGFueSBsZWFkaW5nIHNwYWNlcyBmcm9tIGVhY2ggbGluZVxuICBsZWFkaW5nX3NwYWNlcyA9IGNvZGUubWF0Y2goL15cXHMqLyk7XG4gIGlmIChsZWFkaW5nX3NwYWNlcykge1xuICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cXFxcc3tcIiArIGxlYWRpbmdfc3BhY2VzWzBdLmxlbmd0aCArIFwifVwiLCBcImdtXCIpLCBcIlwiKTtcbiAgfVxuXG4gIHJldHVybiBjb2RlO1xufTtcblxuZXhwb3J0cy5oaWdobGlnaHQgPSBoaWdobGlnaHQgPSBmdW5jdGlvbiAoY29kZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHJldHVybiBfdmVuZG9ySGlnaGxpZ2h0MltcImRlZmF1bHRcIl0uaGlnaGxpZ2h0KG9wdGlvbnMubGFuZ3VhZ2VfY29kZSB8fCBcImh0bWxcIiwgY29kZSkudmFsdWU7XG59O1xuXG5leHBvcnRzLmRlY29kZV9odG1sX2VudGl0aWVzID0gZGVjb2RlX2h0bWxfZW50aXRpZXM7XG5leHBvcnRzLmluZGVudCA9IGluZGVudDtcbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmV4cG9ydHMuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuXG59LHtcIi4uLy4uL3ZlbmRvci9oaWdobGlnaHRcIjoxMzAsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE0fV0sMTIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIG5hbWluZ19jb252ZW50aW9uID0ge307XG5cbmV4cG9ydHMubmFtaW5nX2NvbnZlbnRpb24gPSBuYW1pbmdfY29udmVudGlvbjtcblxufSx7fV0sMTIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2JpbmQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2JpbmRcIilbXCJkZWZhdWx0XCJdO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIE1hdHJpeCwgYmV0d2VlbjtcblxuZXhwb3J0cy5iZXR3ZWVuID0gYmV0d2VlbiA9IGZ1bmN0aW9uIChwb2ludCwgbWluLCBtYXgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICB2YXIgbWluX2NvbmRpdGlvbiA9IG9wdGlvbnMuaW5jbHVkZV9taW4gPyBwb2ludCA+PSBtaW4gOiBwb2ludCA+IG1pbixcbiAgICAgIG1heF9jb25kaXRpb24gPSBvcHRpb25zLmluY2x1ZGVfbWF4ID8gcG9pbnQgPD0gbWF4IDogcG9pbnQgPCBtYXg7XG4gIHJldHVybiBtaW5fY29uZGl0aW9uICYmIG1heF9jb25kaXRpb247XG59O1xuXG5leHBvcnRzLk1hdHJpeCA9IE1hdHJpeCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIE1hdHJpeENsYXNzID0gd2luZG93LldlYktpdENTU01hdHJpeCB8fCB3aW5kb3cuTVNDU1NNYXRyaXggfHwgd2luZG93LkNTU01hdHJpeDtcbiAgcmV0dXJuIG5ldyAoX2JpbmQuYXBwbHkoTWF0cml4Q2xhc3MsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcblxuZXhwb3J0cy5NYXRyaXggPSBNYXRyaXg7XG5leHBvcnRzLmJldHdlZW4gPSBiZXR3ZWVuO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9iaW5kXCI6MTJ9XSwxMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZm9yY2VfcmVwYWludDtcblxuZXhwb3J0cy5mb3JjZV9yZXBhaW50ID0gZm9yY2VfcmVwYWludCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBkb2N1bWVudCA6IGFyZ3VtZW50c1swXTtcblxuICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgJiYgbm9kZS5vZmZzZXRXaWR0aDtcbn07XG5cbmV4cG9ydHMuZm9yY2VfcmVwYWludCA9IGZvcmNlX3JlcGFpbnQ7XG5cbn0se31dLDEyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBQYXR0ZXJuLCBwYXR0ZXJuLCByZXN1bHRfdHlwZXMsIGZpbmRfdmFyaWF0aW9uO1xuXG5wYXR0ZXJuID0gd2luZG93LnBhdHRlcm47XG5kZWxldGUgd2luZG93LnBhdHRlcm47XG5cbnJlc3VsdF90eXBlcyA9IFtcInN0eWxlXCIsIFwic2NyaXB0XCJdO1xuXG5maW5kX3ZhcmlhdGlvbiA9IGZ1bmN0aW9uIChjb21wb25lbnQsIHN5bWJvbCkge1xuICB2YXIgdmFyaWF0aW9uO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcigoY29tcG9uZW50LnN0YXRlIHx8IFtdKS5jb25jYXQoY29tcG9uZW50LnZhcmlhbnQgfHwgW10pKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyaWF0aW9uID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmIChzeW1ib2wuaW5jbHVkZSh2YXJpYXRpb24ubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuUGF0dGVybiA9IHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChzeW1ib2wpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIHJlc3VsdF90eXBlLCByZXN1bHQsIHZhcmlhdGlvbiwgc3ViY29tcG9uZW50O1xuXG4gICAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3ltYm9sID0gc3ltYm9sLnNwbGl0KC9cXHMrLyk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfZ2V0SXRlcmF0b3IocmVzdWx0X3R5cGVzKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdF90eXBlID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2dldEl0ZXJhdG9yKHBhdHRlcm5bcmVzdWx0X3R5cGVdKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChzeW1ib2wuaW5jbHVkZShyZXN1bHQubmFtZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VhcmNoX3ZhcmlhdGlvbnMgfHwgb3B0aW9ucy5zZWFyY2hfYWxsKSB7XG4gICAgICAgICAgICAgIHZhcmlhdGlvbiA9IGZpbmRfdmFyaWF0aW9uKHJlc3VsdCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgaWYgKHZhcmlhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YXJpYXRpb247XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VhcmNoX3N1YmNvbXBvbmVudHMgfHwgb3B0aW9ucy5zZWFyY2hfYWxsKSB7XG4gICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBfZ2V0SXRlcmF0b3IocmVzdWx0LnN1YmNvbXBvbmVudCB8fCBbXSksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgc3ViY29tcG9uZW50ID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLmluY2x1ZGUoc3ViY29tcG9uZW50Lm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbiA9IGZpbmRfdmFyaWF0aW9uKHJlc3VsdCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgIGlmICh2YXJpYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhdGlvbjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNFtcInJldHVyblwiXSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjNbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yM1tcInJldHVyblwiXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMltcInJldHVyblwiXSkge1xuICAgICAgICAgIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBfX3BhdHRlcm5fXzogcGF0dGVyblxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYXR0ZXJuO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6Mn1dLDEyNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VWZW5kb3JRdWVyeV9zdHJpbmcgPSByZXF1aXJlKFwiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3ZlbmRvci9xdWVyeV9zdHJpbmdcIik7XG5cbnZhciBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVmVuZG9yUXVlcnlfc3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1VzZXJzQ2hyaXNEcm9wYm94UGVyc29uYWxDaHJpc0NvZGVXZWJEb2Nrc0RvY2tzX3RoZW1lX2FwaVNvdXJjZVZlbmRvclF1ZXJ5X3N0cmluZyk7XG5cbnZhciBRdWVyeVN0cmluZywgbG9jYXRpb24sIHF1ZXJ5O1xuXG5sb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcbn07XG5xdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9Vc2Vyc0NocmlzRHJvcGJveFBlcnNvbmFsQ2hyaXNDb2RlV2ViRG9ja3NEb2Nrc190aGVtZV9hcGlTb3VyY2VWZW5kb3JRdWVyeV9zdHJpbmcyW1wiZGVmYXVsdFwiXS5wYXJzZShsb2NhdGlvbigpLnNlYXJjaCk7XG59O1xuXG5RdWVyeVN0cmluZyA9IHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5KClba2V5XTtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGN1cnJlbnRfcXVlcnkgPSBxdWVyeSgpLFxuICAgICAgICBuZXdfdXJsO1xuXG4gICAgY3VycmVudF9xdWVyeVtrZXldID0gdmFsdWU7XG4gICAgbmV3X3VybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCArIGxvY2F0aW9uLnBhdGhuYW1lICsgXCI/XCIgKyBfVXNlcnNDaHJpc0Ryb3Bib3hQZXJzb25hbENocmlzQ29kZVdlYkRvY2tzRG9ja3NfdGhlbWVfYXBpU291cmNlVmVuZG9yUXVlcnlfc3RyaW5nMltcImRlZmF1bHRcIl0uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBuZXdfdXJsIH0sIGRvY3VtZW50LnRpdGxlLCBuZXdfdXJsKTtcbiAgICByZXR1cm4gY3VycmVudF9xdWVyeTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBRdWVyeVN0cmluZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbn0se1wiL1VzZXJzL2NocmlzL0Ryb3Bib3ggKFBlcnNvbmFsKS9DaHJpcy9Db2RlL3dlYi9kb2Nrcy9kb2Nrc190aGVtZV9hcGkvc291cmNlL3ZlbmRvci9xdWVyeV9zdHJpbmdcIjoxMzIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNH1dLDEyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9tdXN0YWNoZSA9IHJlcXVpcmUoXCJtdXN0YWNoZVwiKTtcblxudmFyIF9tdXN0YWNoZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tdXN0YWNoZSk7XG5cbnZhciBUZW1wbGF0ZSA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsIGJpbmRpbmcpIHtcbiAgICBpZiAodGVtcGxhdGUuaW5uZXJIVE1MKSB7XG4gICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLmlubmVySFRNTDtcbiAgICB9XG4gICAgX211c3RhY2hlMltcImRlZmF1bHRcIl0ucmVuZGVyKHRlbXBsYXRlLCBiaW5kaW5nKTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUZW1wbGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbn0se1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTQsXCJtdXN0YWNoZVwiOjkxfV0sMTI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFRleHRSYW5nZSwgX3NlbGVjdF9hbGw7XG5cblRleHRSYW5nZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RfYWxsOiBmdW5jdGlvbiBzZWxlY3RfYWxsKCkge1xuICAgICAgX3NlbGVjdF9hbGwodGFyZ2V0KTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRleHRSYW5nZTtcblxuX3NlbGVjdF9hbGwgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB2YXIgc2VsZWN0aW9uLCByYW5nZTtcblxuICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGFyZ2V0KTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRhcmdldCk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICB9O1xuICB9XG59KSgpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7fV0sMTI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIFRPRE9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKVtcImRlZmF1bHRcIl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRFJBR19USFJFU0hPTEQgPSA1O1xuXG52YXIgVUlFdmVudHMsIGNvb3JkaW5hdGVzO1xuXG5jb29yZGluYXRlcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB0b3VjaGVzID8gdG91Y2hlc1swXS54IDogZXZlbnQucGFnZVgsXG4gICAgeTogdG91Y2hlcyA/IHRvdWNoZXNbMF0ueSA6IGV2ZW50LnBhZ2VZXG4gIH07XG59O1xuXG5jb29yZGluYXRlcy5kaXN0YW5jZV9iZXR3ZWVuID0gZnVuY3Rpb24gKGJlZm9yZSwgYWZ0ZXIpIHtcbiAgdmFyIGRlbHRhX3ggPSBNYXRoLmFicyhhZnRlci54IC0gYmVmb3JlLngpLFxuICAgICAgZGVsdGFfeSA9IE1hdGguYWJzKGFmdGVyLnkgLSBiZWZvcmUueSk7XG5cbiAgcmV0dXJuIE1hdGguc3FydChkZWx0YV94ICogZGVsdGFfeCArIGRlbHRhX3kgKiBkZWx0YV95KTtcbn07XG5cblVJRXZlbnRzID0gX09iamVjdCRkZWZpbmVQcm9wZXJ0aWVzKHtcblxuICBkcmFnOiBfT2JqZWN0JGRlZmluZVByb3BlcnRpZXMoe30sIHtcbiAgICBzdGFydDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBcIm1vdXNlZG93blwiO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LFxuICAgIG1vdmU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gXCJtb3VzZW1vdmVcIjtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBlbmQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gXCJtb3VzZXVwXCI7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSksXG5cbiAgdHJhbnNpdGlvbjogZnVuY3Rpb24gdHJhbnNpdGlvbihub2RlLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbl9lbmQgPSBfdGhpcy50cmFuc2l0aW9uX2VuZDtcblxuICAgICAgaWYgKHRyYW5zaXRpb25fZW5kKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uX2VuZCwgcmVzb2x2ZSk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkX2RyYWdfbGlzdGVuZXJzOiBmdW5jdGlvbiBhZGRfZHJhZ19saXN0ZW5lcnMobW92ZV9oYW5kbGVyLCBlbmRfaGFuZGxlcikge1xuICAgIHZhciBfZHJhZyA9IHRoaXMuZHJhZztcbiAgICB2YXIgbW92ZSA9IF9kcmFnLm1vdmU7XG4gICAgdmFyIGVuZCA9IF9kcmFnLmVuZDtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZSwgbW92ZV9oYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGVuZCwgZW5kX2hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmUsIG1vdmVfaGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZW5kLCBlbmRfaGFuZGxlcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gIERSQUdfVEhSRVNIT0xEOiBEUkFHX1RIUkVTSE9MRFxufSwge1xuICB0cmFuc2l0aW9uX2VuZDoge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHRyYW5zaXRpb25zLCB0cmFuc2l0aW9uLCBlbGVtZW50LCBldmVudF9uYW1lO1xuXG4gICAgICB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgV2Via2l0VHJhbnNpdGlvbjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXG4gICAgICAgIE1velRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxuICAgICAgICBPVHJhbnNpdGlvbjogXCJvdHJhbnNpdGlvbmVuZFwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIlxuICAgICAgfTtcblxuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBldmVudF9uYW1lID0gbnVsbDtcblxuICAgICAgZm9yICh0cmFuc2l0aW9uIGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW3RyYW5zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBldmVudF9uYW1lID0gdHJhbnNpdGlvbnNbdHJhbnNpdGlvbl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVJRXZlbnRzLCBcInRyYW5zaXRpb25fZW5kXCIsIHsgdmFsdWU6IGV2ZW50X25hbWUgfSk7XG4gICAgICByZXR1cm4gZXZlbnRfbmFtZTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFVJRXZlbnRzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCI6NixcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCI6OX1dLDEyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmlmICghW10uaW5jbHVkZXMpIHtcbiAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCovKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBwYXJzZUludChPLmxlbmd0aCkgfHwgMDtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBuID0gcGFyc2VJbnQoYXJndW1lbnRzWzFdKSB8fCAwO1xuICAgIHZhciBrO1xuICAgIGlmIChuID49IDApIHtcbiAgICAgIGsgPSBuO1xuICAgIH0gZWxzZSB7XG4gICAgICBrID0gbGVuICsgbjtcbiAgICAgIGlmIChrIDwgMCkge1xuICAgICAgICBrID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGN1cnJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICBjdXJyZW50RWxlbWVudCA9IE9ba107XG4gICAgICBpZiAoc2VhcmNoRWxlbWVudCA9PT0gY3VycmVudEVsZW1lbnQgfHwgc2VhcmNoRWxlbWVudCAhPT0gc2VhcmNoRWxlbWVudCAmJiBjdXJyZW50RWxlbWVudCAhPT0gY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBrKys7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxufSx7fV0sMTMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRrZXlzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBobGpzO1xuXG4hKGZ1bmN0aW9uIChlKSB7XG4gICAgaGxqcyA9IGUoe30pO1xufSkoZnVuY3Rpb24gKGUpIHtcbiAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucmVwbGFjZSgvJi9nbSwgXCImYW1wO1wiKS5yZXBsYWNlKC88L2dtLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nbSwgXCImZ3Q7XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHQoZSkge1xuICAgICAgICByZXR1cm4gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHIoZSwgbikge1xuICAgICAgICB2YXIgdCA9IGUgJiYgZS5leGVjKG4pO1xuICAgICAgICByZXR1cm4gdCAmJiAwID09IHQuaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHZhciBuID0gKGUuY2xhc3NOYW1lICsgXCIgXCIgKyAoZS5wYXJlbnROb2RlID8gZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA6IFwiXCIpKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICByZXR1cm4gKG4gPSBuLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucmVwbGFjZSgvXmxhbmcodWFnZSk/LS8sIFwiXCIpO1xuICAgICAgICB9KSwgbi5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBOKGUpIHx8IC9ubygtPyloaWdobGlnaHQvLnRlc3QoZSk7XG4gICAgICAgIH0pWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvKGUsIG4pIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgciBpbiBlKSB0W3JdID0gZVtyXTtcbiAgICAgICAgaWYgKG4pIGZvciAodmFyIHIgaW4gbikgdFtyXSA9IG5bcl07XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICByZXR1cm4gKChmdW5jdGlvbiByKGUsIGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSBlLmZpcnN0Q2hpbGQ7IG87IG8gPSBvLm5leHRTaWJsaW5nKSAzID09IG8ubm9kZVR5cGUgPyBhICs9IG8ubm9kZVZhbHVlLmxlbmd0aCA6IDEgPT0gby5ub2RlVHlwZSAmJiAobi5wdXNoKHtcbiAgICAgICAgICAgICAgICBldmVudDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIG9mZnNldDogYSxcbiAgICAgICAgICAgICAgICBub2RlOiBvXG4gICAgICAgICAgICB9KSwgYSA9IHIobywgYSksIHQobykubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pIHx8IG4ucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IFwic3RvcFwiLFxuICAgICAgICAgICAgICAgIG9mZnNldDogYSxcbiAgICAgICAgICAgICAgICBub2RlOiBvXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSkoZSwgMCksIG4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGMoZSwgciwgYSkge1xuICAgICAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUubGVuZ3RoICYmIHIubGVuZ3RoID8gZVswXS5vZmZzZXQgIT0gclswXS5vZmZzZXQgPyBlWzBdLm9mZnNldCA8IHJbMF0ub2Zmc2V0ID8gZSA6IHIgOiBcInN0YXJ0XCIgPT0gclswXS5ldmVudCA/IGUgOiByIDogZS5sZW5ndGggPyBlIDogcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIFwiICsgZS5ub2RlTmFtZSArICc9XCInICsgbihlLnZhbHVlKSArICdcIic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsICs9IFwiPFwiICsgdChlKSArIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLmF0dHJpYnV0ZXMsIHIpLmpvaW4oXCJcIikgKyBcIj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgbCArPSBcIjwvXCIgKyB0KGUpICsgXCI+XCI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgIChcInN0YXJ0XCIgPT0gZS5ldmVudCA/IGkgOiBjKShlLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHMgPSAwLCBsID0gXCJcIiwgZiA9IFtdOyBlLmxlbmd0aCB8fCByLmxlbmd0aDspIHtcbiAgICAgICAgICAgIHZhciBnID0gbygpO1xuICAgICAgICAgICAgaWYgKChsICs9IG4oYS5zdWJzdHIocywgZ1swXS5vZmZzZXQgLSBzKSksIHMgPSBnWzBdLm9mZnNldCwgZyA9PSBlKSkge1xuICAgICAgICAgICAgICAgIGYucmV2ZXJzZSgpLmZvckVhY2goYyk7XG4gICAgICAgICAgICAgICAgZG8gdShnLnNwbGljZSgwLCAxKVswXSksIGcgPSBvKCk7IHdoaWxlIChnID09IGUgJiYgZy5sZW5ndGggJiYgZ1swXS5vZmZzZXQgPT0gcyk7XG4gICAgICAgICAgICAgICAgZi5yZXZlcnNlKCkuZm9yRWFjaChpKTtcbiAgICAgICAgICAgIH0gZWxzZSBcInN0YXJ0XCIgPT0gZ1swXS5ldmVudCA/IGYucHVzaChnWzBdLm5vZGUpIDogZi5wb3AoKSwgdShnLnNwbGljZSgwLCAxKVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGwgKyBuKGEuc3Vic3RyKHMpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBlLnNvdXJjZSB8fCBlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdCh0LCByKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVnRXhwKG4odCksIFwibVwiICsgKGUuY0kgPyBcImlcIiA6IFwiXCIpICsgKHIgPyBcImdcIiA6IFwiXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHIoYSwgaSkge1xuICAgICAgICAgICAgaWYgKCFhLmNvbXBpbGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKChhLmNvbXBpbGVkID0gITAsIGEuayA9IGEuayB8fCBhLmJLLCBhLmspKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB1ID0gZnVuY3Rpb24gdShuLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNJICYmICh0ID0gdC50b0xvd2VyQ2FzZSgpKSwgdC5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1t0WzBdXSA9IFtuLCB0WzFdID8gTnVtYmVyKHRbMV0pIDogMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgYS5rID8gdShcImtleXdvcmRcIiwgYS5rKSA6IF9PYmplY3Qka2V5cyhhLmspLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHUoZSwgYS5rW2VdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIGEuayA9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEubFIgPSB0KGEubCB8fCAvXFxiW0EtWmEtejAtOV9dK1xcYi8sICEwKSwgaSAmJiAoYS5iSyAmJiAoYS5iID0gXCJcXFxcYihcIiArIGEuYksuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIpXFxcXGJcIiksIGEuYiB8fCAoYS5iID0gL1xcQnxcXGIvKSwgYS5iUiA9IHQoYS5iKSwgYS5lIHx8IGEuZVcgfHwgKGEuZSA9IC9cXEJ8XFxiLyksIGEuZSAmJiAoYS5lUiA9IHQoYS5lKSksIGEudEUgPSBuKGEuZSkgfHwgXCJcIiwgYS5lVyAmJiBpLnRFICYmIChhLnRFICs9IChhLmUgPyBcInxcIiA6IFwiXCIpICsgaS50RSkpLCBhLmkgJiYgKGEuaVIgPSB0KGEuaSkpLCB2b2lkIDAgPT09IGEuciAmJiAoYS5yID0gMSksIGEuYyB8fCAoYS5jID0gW10pO1xuICAgICAgICAgICAgICAgIHZhciBzID0gW107XG4gICAgICAgICAgICAgICAgYS5jLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS52ID8gZS52LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChvKGUsIG4pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBzLnB1c2goXCJzZWxmXCIgPT0gZSA/IGEgOiBlKTtcbiAgICAgICAgICAgICAgICB9KSwgYS5jID0gcywgYS5jLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcihlLCBhKTtcbiAgICAgICAgICAgICAgICB9KSwgYS5zdGFydHMgJiYgcihhLnN0YXJ0cywgaSk7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBhLmMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmJLID8gXCJcXFxcLj8oXCIgKyBlLmIgKyBcIilcXFxcLj9cIiA6IGUuYjtcbiAgICAgICAgICAgICAgICB9KS5jb25jYXQoW2EudEUsIGEuaV0pLm1hcChuKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgYS50ID0gbC5sZW5ndGggPyB0KGwuam9pbihcInxcIiksICEwKSA6IHtcbiAgICAgICAgICAgICAgICAgICAgZXhlYzogZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByKGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHMoZSwgdCwgYSwgbykge1xuICAgICAgICBmdW5jdGlvbiBpKGUsIG4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbi5jLmxlbmd0aDsgdCsrKSBpZiAocihuLmNbdF0uYlIsIGUpKSByZXR1cm4gbi5jW3RdO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYyhfeCwgX3gyKSB7XG4gICAgICAgICAgICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICAgICAgICAgICAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBfeCxcbiAgICAgICAgICAgICAgICAgICAgbiA9IF94MjtcbiAgICAgICAgICAgICAgICBfYWdhaW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocihlLmVSLCBuKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5lVykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ggPSBlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF94MiA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGYoZSwgbikge1xuICAgICAgICAgICAgcmV0dXJuICFhICYmIHIobi5pUiwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnKGUsIG4pIHtcbiAgICAgICAgICAgIHZhciB0ID0geC5jSSA/IG5bMF0udG9Mb3dlckNhc2UoKSA6IG5bMF07XG4gICAgICAgICAgICByZXR1cm4gZS5rLmhhc093blByb3BlcnR5KHQpICYmIGUua1t0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHAoZSwgbiwgdCwgcikge1xuICAgICAgICAgICAgdmFyIGEgPSByID8gXCJcIiA6IEUuY2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgbyA9ICc8c3BhbiBjbGFzcz1cIicgKyBhLFxuICAgICAgICAgICAgICAgIGkgPSB0ID8gXCJcIiA6IFwiPC9zcGFuPlwiO1xuICAgICAgICAgICAgcmV0dXJuIChvICs9IGUgKyAnXCI+JywgbyArIG4gKyBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGQoKSB7XG4gICAgICAgICAgICBpZiAoIXcuaykgcmV0dXJuIG4oeSk7XG4gICAgICAgICAgICB2YXIgZSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICB3LmxSLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gdy5sUi5leGVjKHkpOyByOykge1xuICAgICAgICAgICAgICAgIGUgKz0gbih5LnN1YnN0cih0LCByLmluZGV4IC0gdCkpO1xuICAgICAgICAgICAgICAgIHZhciBhID0gZyh3LCByKTtcbiAgICAgICAgICAgICAgICBhID8gKEIgKz0gYVsxXSwgZSArPSBwKGFbMF0sIG4oclswXSkpKSA6IGUgKz0gbihyWzBdKSwgdCA9IHcubFIubGFzdEluZGV4LCByID0gdy5sUi5leGVjKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGUgKyBuKHkuc3Vic3RyKHQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgICBpZiAody5zTCAmJiAhUlt3LnNMXSkgcmV0dXJuIG4oeSk7XG4gICAgICAgICAgICB2YXIgZSA9IHcuc0wgPyBzKHcuc0wsIHksICEwLCBMW3cuc0xdKSA6IGwoeSk7XG4gICAgICAgICAgICByZXR1cm4gKHcuciA+IDAgJiYgKEIgKz0gZS5yKSwgXCJjb250aW51b3VzXCIgPT0gdy5zdWJMYW5ndWFnZU1vZGUgJiYgKExbdy5zTF0gPSBlLnRvcCksIHAoZS5sYW5ndWFnZSwgZS52YWx1ZSwgITEsICEwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB2KCkge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gdy5zTCA/IGgoKSA6IGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGIoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIgPSBlLmNOID8gcChlLmNOLCBcIlwiLCAhMCkgOiBcIlwiO1xuICAgICAgICAgICAgZS5yQiA/IChNICs9IHIsIHkgPSBcIlwiKSA6IGUuZUIgPyAoTSArPSBuKHQpICsgciwgeSA9IFwiXCIpIDogKE0gKz0gciwgeSA9IHQpLCB3ID0gX09iamVjdCRjcmVhdGUoZSwge1xuICAgICAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogd1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoKHkgKz0gZSwgdm9pZCAwID09PSB0KSkgcmV0dXJuIChNICs9IHYoKSwgMCk7XG4gICAgICAgICAgICB2YXIgciA9IGkodCwgdyk7XG4gICAgICAgICAgICBpZiAocikgcmV0dXJuIChNICs9IHYoKSwgYihyLCB0KSwgci5yQiA/IDAgOiB0Lmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgYSA9IGModywgdCk7XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdztcbiAgICAgICAgICAgICAgICBvLnJFIHx8IG8uZUUgfHwgKHkgKz0gdCksIE0gKz0gdigpO1xuICAgICAgICAgICAgICAgIGRvIHcuY04gJiYgKE0gKz0gXCI8L3NwYW4+XCIpLCBCICs9IHcuciwgdyA9IHcucGFyZW50OyB3aGlsZSAodyAhPSBhLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChvLmVFICYmIChNICs9IG4odCkpLCB5ID0gXCJcIiwgYS5zdGFydHMgJiYgYihhLnN0YXJ0cywgXCJcIiksIG8uckUgPyAwIDogdC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGYodCwgdykpIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBsZXhlbWUgXCInICsgdCArICdcIiBmb3IgbW9kZSBcIicgKyAody5jTiB8fCBcIjx1bm5hbWVkPlwiKSArICdcIicpO1xuICAgICAgICAgICAgcmV0dXJuICh5ICs9IHQsIHQubGVuZ3RoIHx8IDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gTihlKTtcbiAgICAgICAgaWYgKCF4KSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IFwiJyArIGUgKyAnXCInKTtcbiAgICAgICAgdSh4KTtcbiAgICAgICAgZm9yICh2YXIgdyA9IG8gfHwgeCwgTCA9IHt9LCBNID0gXCJcIiwgayA9IHc7IGsgIT0geDsgayA9IGsucGFyZW50KSBrLmNOICYmIChNID0gcChrLmNOLCBcIlwiLCAhMCkgKyBNKTtcbiAgICAgICAgdmFyIHkgPSBcIlwiLFxuICAgICAgICAgICAgQiA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBDLCBqLCBJID0gMDs7KSB7XG4gICAgICAgICAgICAgICAgaWYgKCh3LnQubGFzdEluZGV4ID0gSSwgQyA9IHcudC5leGVjKHQpLCAhQykpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGogPSBtKHQuc3Vic3RyKEksIEMuaW5kZXggLSBJKSwgQ1swXSksIEkgPSBDLmluZGV4ICsgajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG0odC5zdWJzdHIoSSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgayA9IHc7IGsucGFyZW50OyBrID0gay5wYXJlbnQpIGsuY04gJiYgKE0gKz0gXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiBCLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBNLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBlLFxuICAgICAgICAgICAgICAgIHRvcDogd1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoQSkge1xuICAgICAgICAgICAgaWYgKC0xICE9IEEubWVzc2FnZS5pbmRleE9mKFwiSWxsZWdhbFwiKSkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuKHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhyb3cgQTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGwoZSwgdCkge1xuICAgICAgICB0ID0gdCB8fCBFLmxhbmd1YWdlcyB8fCBfT2JqZWN0JGtleXMoUik7XG4gICAgICAgIHZhciByID0ge1xuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIHZhbHVlOiBuKGUpXG4gICAgICAgIH0sXG4gICAgICAgICAgICBhID0gcjtcbiAgICAgICAgcmV0dXJuICh0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIGlmIChOKG4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBzKG4sIGUsICExKTtcbiAgICAgICAgICAgICAgICB0Lmxhbmd1YWdlID0gbiwgdC5yID4gYS5yICYmIChhID0gdCksIHQuciA+IHIuciAmJiAoYSA9IHIsIHIgPSB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIGEubGFuZ3VhZ2UgJiYgKHIuc2Vjb25kX2Jlc3QgPSBhKSwgcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZihlKSB7XG4gICAgICAgIHJldHVybiAoRS50YWJSZXBsYWNlICYmIChlID0gZS5yZXBsYWNlKC9eKCg8W14+XSs+fFxcdCkrKS9nbSwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuLnJlcGxhY2UoL1xcdC9nLCBFLnRhYlJlcGxhY2UpO1xuICAgICAgICB9KSksIEUudXNlQlIgJiYgKGUgPSBlLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIikpLCBlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnKGUsIG4sIHQpIHtcbiAgICAgICAgdmFyIHIgPSBuID8geFtuXSA6IHQsXG4gICAgICAgICAgICBhID0gW2UudHJpbSgpXTtcbiAgICAgICAgcmV0dXJuIChlLm1hdGNoKC8oXFxzfF4paGxqcyhcXHN8JCkvKSB8fCBhLnB1c2goXCJobGpzXCIpLCByICYmIGEucHVzaChyKSwgYS5qb2luKFwiIFwiKS50cmltKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICB2YXIgbiA9IGEoZSk7XG4gICAgICAgIGlmICghL25vKC0/KWhpZ2hsaWdodC8udGVzdChuKSkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICBFLnVzZUJSID8gKHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiZGl2XCIpLCB0LmlubmVySFRNTCA9IGUuaW5uZXJIVE1MLnJlcGxhY2UoL1xcbi9nLCBcIlwiKS5yZXBsYWNlKC88YnJbIFxcL10qPi9nLCBcIlxcblwiKSkgOiB0ID0gZTtcbiAgICAgICAgICAgIHZhciByID0gdC50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBvID0gbiA/IHMobiwgciwgITApIDogbChyKSxcbiAgICAgICAgICAgICAgICB1ID0gaSh0KTtcbiAgICAgICAgICAgIGlmICh1Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG8udmFsdWUsIG8udmFsdWUgPSBjKHUsIGkocCksIHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby52YWx1ZSA9IGYoby52YWx1ZSksIGUuaW5uZXJIVE1MID0gby52YWx1ZSwgZS5jbGFzc05hbWUgPSBnKGUuY2xhc3NOYW1lLCBuLCBvLmxhbmd1YWdlKSwgZS5yZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IG8ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgcmU6IG8uclxuICAgICAgICAgICAgfSwgby5zZWNvbmRfYmVzdCAmJiAoZS5zZWNvbmRfYmVzdCA9IHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogby5zZWNvbmRfYmVzdC5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICByZTogby5zZWNvbmRfYmVzdC5yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGQoZSkge1xuICAgICAgICBFID0gbyhFLCBlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoKCkge1xuICAgICAgICBpZiAoIWguY2FsbGVkKSB7XG4gICAgICAgICAgICBoLmNhbGxlZCA9ICEwO1xuICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlIGNvZGVcIik7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUsIHApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdigpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaCwgITEpLCBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBoLCAhMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYihuLCB0KSB7XG4gICAgICAgIHZhciByID0gUltuXSA9IHQoZSk7XG4gICAgICAgIHIuYWxpYXNlcyAmJiByLmFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgeFtlXSA9IG47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG0oKSB7XG4gICAgICAgIHJldHVybiBfT2JqZWN0JGtleXMoUik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTihlKSB7XG4gICAgICAgIHJldHVybiBSW2VdIHx8IFJbeFtlXV07XG4gICAgfVxuICAgIHZhciBFID0ge1xuICAgICAgICBjbGFzc1ByZWZpeDogXCJobGpzLVwiLFxuICAgICAgICB0YWJSZXBsYWNlOiBudWxsLFxuICAgICAgICB1c2VCUjogITEsXG4gICAgICAgIGxhbmd1YWdlczogdm9pZCAwXG4gICAgfSxcbiAgICAgICAgUiA9IHt9LFxuICAgICAgICB4ID0ge307XG4gICAgcmV0dXJuIChlLmhpZ2hsaWdodCA9IHMsIGUuaGlnaGxpZ2h0QXV0byA9IGwsIGUuZml4TWFya3VwID0gZiwgZS5oaWdobGlnaHRCbG9jayA9IHAsIGUuY29uZmlndXJlID0gZCwgZS5pbml0SGlnaGxpZ2h0aW5nID0gaCwgZS5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkID0gdiwgZS5yZWdpc3Rlckxhbmd1YWdlID0gYiwgZS5saXN0TGFuZ3VhZ2VzID0gbSwgZS5nZXRMYW5ndWFnZSA9IE4sIGUuaW5oZXJpdCA9IG8sIGUuSVIgPSBcIlthLXpBLVpdW2EtekEtWjAtOV9dKlwiLCBlLlVJUiA9IFwiW2EtekEtWl9dW2EtekEtWjAtOV9dKlwiLCBlLk5SID0gXCJcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/XCIsIGUuQ05SID0gXCIoXFxcXGIwW3hYXVthLWZBLUYwLTldK3woXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykoW2VFXVstK10/XFxcXGQrKT8pXCIsIGUuQk5SID0gXCJcXFxcYigwYlswMV0rKVwiLCBlLlJTUiA9IFwiIXwhPXwhPT18JXwlPXwmfCYmfCY9fFxcXFwqfFxcXFwqPXxcXFxcK3xcXFxcKz18LHwtfC09fC89fC98Onw7fDw8fDw8PXw8PXw8fD09PXw9PXw9fD4+Pj18Pj49fD49fD4+Pnw+Pnw+fFxcXFw/fFxcXFxbfFxcXFx7fFxcXFwofFxcXFxefFxcXFxePXxcXFxcfHxcXFxcfD18XFxcXHxcXFxcfHx+XCIsIGUuQkUgPSB7XG4gICAgICAgIGI6IFwiXFxcXFxcXFxbXFxcXHNcXFxcU11cIixcbiAgICAgICAgcjogMFxuICAgIH0sIGUuQVNNID0ge1xuICAgICAgICBjTjogXCJzdHJpbmdcIixcbiAgICAgICAgYjogXCInXCIsXG4gICAgICAgIGU6IFwiJ1wiLFxuICAgICAgICBpOiBcIlxcXFxuXCIsXG4gICAgICAgIGM6IFtlLkJFXVxuICAgIH0sIGUuUVNNID0ge1xuICAgICAgICBjTjogXCJzdHJpbmdcIixcbiAgICAgICAgYjogJ1wiJyxcbiAgICAgICAgZTogJ1wiJyxcbiAgICAgICAgaTogXCJcXFxcblwiLFxuICAgICAgICBjOiBbZS5CRV1cbiAgICB9LCBlLlBXTSA9IHtcbiAgICAgICAgYjogL1xcYihhfGFufHRoZXxhcmV8SXxJJ218aXNuJ3R8ZG9uJ3R8ZG9lc24ndHx3b24ndHxidXR8anVzdHxzaG91bGR8cHJldHR5fHNpbXBseXxlbm91Z2h8Z29ubmF8Z29pbmd8d3RmfHNvfHN1Y2gpXFxiL1xuICAgIH0sIGUuQ0xDTSA9IHtcbiAgICAgICAgY046IFwiY29tbWVudFwiLFxuICAgICAgICBiOiBcIi8vXCIsXG4gICAgICAgIGU6IFwiJFwiLFxuICAgICAgICBjOiBbZS5QV01dXG4gICAgfSwgZS5DQkNNID0ge1xuICAgICAgICBjTjogXCJjb21tZW50XCIsXG4gICAgICAgIGI6IFwiL1xcXFwqXCIsXG4gICAgICAgIGU6IFwiXFxcXCovXCIsXG4gICAgICAgIGM6IFtlLlBXTV1cbiAgICB9LCBlLkhDTSA9IHtcbiAgICAgICAgY046IFwiY29tbWVudFwiLFxuICAgICAgICBiOiBcIiNcIixcbiAgICAgICAgZTogXCIkXCIsXG4gICAgICAgIGM6IFtlLlBXTV1cbiAgICB9LCBlLk5NID0ge1xuICAgICAgICBjTjogXCJudW1iZXJcIixcbiAgICAgICAgYjogZS5OUixcbiAgICAgICAgcjogMFxuICAgIH0sIGUuQ05NID0ge1xuICAgICAgICBjTjogXCJudW1iZXJcIixcbiAgICAgICAgYjogZS5DTlIsXG4gICAgICAgIHI6IDBcbiAgICB9LCBlLkJOTSA9IHtcbiAgICAgICAgY046IFwibnVtYmVyXCIsXG4gICAgICAgIGI6IGUuQk5SLFxuICAgICAgICByOiAwXG4gICAgfSwgZS5DU1NOTSA9IHtcbiAgICAgICAgY046IFwibnVtYmVyXCIsXG4gICAgICAgIGI6IGUuTlIgKyBcIiglfGVtfGV4fGNofHJlbXx2d3x2aHx2bWlufHZtYXh8Y218bW18aW58cHR8cGN8cHh8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8ZHBpfGRwY218ZHBweCk/XCIsXG4gICAgICAgIHI6IDBcbiAgICB9LCBlLlJNID0ge1xuICAgICAgICBjTjogXCJyZWdleHBcIixcbiAgICAgICAgYjogL1xcLy8sXG4gICAgICAgIGU6IC9cXC9bZ2ltdXldKi8sXG4gICAgICAgIGk6IC9cXG4vLFxuICAgICAgICBjOiBbZS5CRSwge1xuICAgICAgICAgICAgYjogL1xcWy8sXG4gICAgICAgICAgICBlOiAvXFxdLyxcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBjOiBbZS5CRV1cbiAgICAgICAgfV1cbiAgICB9LCBlLlRNID0ge1xuICAgICAgICBjTjogXCJ0aXRsZVwiLFxuICAgICAgICBiOiBlLklSLFxuICAgICAgICByOiAwXG4gICAgfSwgZS5VVE0gPSB7XG4gICAgICAgIGNOOiBcInRpdGxlXCIsXG4gICAgICAgIGI6IGUuVUlSLFxuICAgICAgICByOiAwXG4gICAgfSwgZSk7XG59KTtcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY29mZmVlc2NyaXB0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGMgPSB7XG4gICAgICAgIGtleXdvcmQ6IFwiaW4gaWYgZm9yIHdoaWxlIGZpbmFsbHkgbmV3IGRvIHJldHVybiBlbHNlIGJyZWFrIGNhdGNoIGluc3RhbmNlb2YgdGhyb3cgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHR5cGVvZiBkZWxldGUgZGVidWdnZXIgc3VwZXIgdGhlbiB1bmxlc3MgdW50aWwgbG9vcCBvZiBieSB3aGVuIGFuZCBvciBpcyBpc250IG5vdFwiLFxuICAgICAgICBsaXRlcmFsOiBcInRydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgeWVzIG5vIG9uIG9mZlwiLFxuICAgICAgICByZXNlcnZlZDogXCJjYXNlIGRlZmF1bHQgZnVuY3Rpb24gdmFyIHZvaWQgd2l0aCBjb25zdCBsZXQgZW51bSBleHBvcnQgaW1wb3J0IG5hdGl2ZSBfX2hhc1Byb3AgX19leHRlbmRzIF9fc2xpY2UgX19iaW5kIF9faW5kZXhPZlwiLFxuICAgICAgICBidWlsdF9pbjogXCJucG0gcmVxdWlyZSBjb25zb2xlIHByaW50IG1vZHVsZSBnbG9iYWwgd2luZG93IGRvY3VtZW50XCJcbiAgICB9LFxuICAgICAgICBuID0gXCJbQS1aYS16JF9dWzAtOUEtWmEteiRfXSpcIixcbiAgICAgICAgdCA9IHtcbiAgICAgICAgY046IFwic3Vic3RcIixcbiAgICAgICAgYjogLyNcXHsvLFxuICAgICAgICBlOiAvfS8sXG4gICAgICAgIGs6IGNcbiAgICB9LFxuICAgICAgICByID0gW2UuQk5NLCBlLmluaGVyaXQoZS5DTk0sIHtcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBlOiBcIihcXFxccyovKT9cIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfVxuICAgIH0pLCB7XG4gICAgICAgIGNOOiBcInN0cmluZ1wiLFxuICAgICAgICB2OiBbe1xuICAgICAgICAgICAgYjogLycnJy8sXG4gICAgICAgICAgICBlOiAvJycnLyxcbiAgICAgICAgICAgIGM6IFtlLkJFXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiAvJy8sXG4gICAgICAgICAgICBlOiAvJy8sXG4gICAgICAgICAgICBjOiBbZS5CRV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogL1wiXCJcIi8sXG4gICAgICAgICAgICBlOiAvXCJcIlwiLyxcbiAgICAgICAgICAgIGM6IFtlLkJFLCB0XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiAvXCIvLFxuICAgICAgICAgICAgZTogL1wiLyxcbiAgICAgICAgICAgIGM6IFtlLkJFLCB0XVxuICAgICAgICB9XVxuICAgIH0sIHtcbiAgICAgICAgY046IFwicmVnZXhwXCIsXG4gICAgICAgIHY6IFt7XG4gICAgICAgICAgICBiOiBcIi8vL1wiLFxuICAgICAgICAgICAgZTogXCIvLy9cIixcbiAgICAgICAgICAgIGM6IFt0LCBlLkhDTV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCIvL1tnaW1dKlwiLFxuICAgICAgICAgICAgcjogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiAvXFwvKD8hWyAqXSkoXFxcXFxcL3wuKSo/XFwvW2dpbV0qKD89XFxXfCQpL1xuICAgICAgICB9XVxuICAgIH0sIHtcbiAgICAgICAgY046IFwicHJvcGVydHlcIixcbiAgICAgICAgYjogXCJAXCIgKyBuXG4gICAgfSwge1xuICAgICAgICBiOiBcImBcIixcbiAgICAgICAgZTogXCJgXCIsXG4gICAgICAgIGVCOiAhMCxcbiAgICAgICAgZUU6ICEwLFxuICAgICAgICBzTDogXCJqYXZhc2NyaXB0XCJcbiAgICB9XTtcbiAgICB0LmMgPSByO1xuICAgIHZhciBpID0gZS5pbmhlcml0KGUuVE0sIHtcbiAgICAgICAgYjogblxuICAgIH0pLFxuICAgICAgICBzID0gXCIoXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstPV0+XCIsXG4gICAgICAgIG8gPSB7XG4gICAgICAgIGNOOiBcInBhcmFtc1wiLFxuICAgICAgICBiOiBcIlxcXFwoW15cXFxcKF1cIixcbiAgICAgICAgckI6ICEwLFxuICAgICAgICBjOiBbe1xuICAgICAgICAgICAgYjogL1xcKC8sXG4gICAgICAgICAgICBlOiAvXFwpLyxcbiAgICAgICAgICAgIGs6IGMsXG4gICAgICAgICAgICBjOiBbXCJzZWxmXCJdLmNvbmNhdChyKVxuICAgICAgICB9XVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXNlczogW1wiY29mZmVlXCIsIFwiY3NvblwiLCBcImljZWRcIl0sXG4gICAgICAgIGs6IGMsXG4gICAgICAgIGk6IC9cXC9cXCovLFxuICAgICAgICBjOiByLmNvbmNhdChbe1xuICAgICAgICAgICAgY046IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgYjogXCIjIyNcIixcbiAgICAgICAgICAgIGU6IFwiIyMjXCIsXG4gICAgICAgICAgICBjOiBbZS5QV01dXG4gICAgICAgIH0sIGUuSENNLCB7XG4gICAgICAgICAgICBjTjogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgYjogXCJeXFxcXHMqXCIgKyBuICsgXCJcXFxccyo9XFxcXHMqXCIgKyBzLFxuICAgICAgICAgICAgZTogXCJbLT1dPlwiLFxuICAgICAgICAgICAgckI6ICEwLFxuICAgICAgICAgICAgYzogW2ksIG9dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IC9bOlxcKCw9XVxccyovLFxuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGM6IFt7XG4gICAgICAgICAgICAgICAgY046IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICBiOiBzLFxuICAgICAgICAgICAgICAgIGU6IFwiWy09XT5cIixcbiAgICAgICAgICAgICAgICByQjogITAsXG4gICAgICAgICAgICAgICAgYzogW29dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJjbGFzc1wiLFxuICAgICAgICAgICAgYks6IFwiY2xhc3NcIixcbiAgICAgICAgICAgIGU6IFwiJFwiLFxuICAgICAgICAgICAgaTogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICBjOiBbe1xuICAgICAgICAgICAgICAgIGJLOiBcImV4dGVuZHNcIixcbiAgICAgICAgICAgICAgICBlVzogITAsXG4gICAgICAgICAgICAgICAgaTogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICAgICAgYzogW2ldXG4gICAgICAgICAgICB9LCBpXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgICAgIGI6IG4gKyBcIjpcIixcbiAgICAgICAgICAgIGU6IFwiOlwiLFxuICAgICAgICAgICAgckI6ICEwLFxuICAgICAgICAgICAgckU6ICEwLFxuICAgICAgICAgICAgcjogMFxuICAgICAgICB9XSlcbiAgICB9O1xufSk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJ4bWxcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gXCJbQS1aYS16MC05XFxcXC5fOi1dK1wiLFxuICAgICAgICBlID0ge1xuICAgICAgICBiOiAvPFxcPyhwaHApPyg/IVxcdykvLFxuICAgICAgICBlOiAvXFw/Pi8sXG4gICAgICAgIHNMOiBcInBocFwiLFxuICAgICAgICBzdWJMYW5ndWFnZU1vZGU6IFwiY29udGludW91c1wiXG4gICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgZVc6ICEwLFxuICAgICAgICBpOiAvPC8sXG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtlLCB7XG4gICAgICAgICAgICBjTjogXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgICAgIGI6IHQsXG4gICAgICAgICAgICByOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiPVwiLFxuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGM6IFt7XG4gICAgICAgICAgICAgICAgY046IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBjOiBbZV0sXG4gICAgICAgICAgICAgICAgdjogW3tcbiAgICAgICAgICAgICAgICAgICAgYjogL1wiLyxcbiAgICAgICAgICAgICAgICAgICAgZTogL1wiL1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgYjogLycvLFxuICAgICAgICAgICAgICAgICAgICBlOiAvJy9cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGI6IC9bXlxcc1xcLz5dKy9cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsaWFzZXM6IFtcImh0bWxcIiwgXCJ4aHRtbFwiLCBcInJzc1wiLCBcImF0b21cIiwgXCJ4c2xcIiwgXCJwbGlzdFwiXSxcbiAgICAgICAgY0k6ICEwLFxuICAgICAgICBjOiBbe1xuICAgICAgICAgICAgY046IFwiZG9jdHlwZVwiLFxuICAgICAgICAgICAgYjogXCI8IURPQ1RZUEVcIixcbiAgICAgICAgICAgIGU6IFwiPlwiLFxuICAgICAgICAgICAgcjogMTAsXG4gICAgICAgICAgICBjOiBbe1xuICAgICAgICAgICAgICAgIGI6IFwiXFxcXFtcIixcbiAgICAgICAgICAgICAgICBlOiBcIlxcXFxdXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIGI6IFwiPCEtLVwiLFxuICAgICAgICAgICAgZTogXCItLT5cIixcbiAgICAgICAgICAgIHI6IDEwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcImNkYXRhXCIsXG4gICAgICAgICAgICBiOiBcIjxcXFxcIVxcXFxbQ0RBVEFcXFxcW1wiLFxuICAgICAgICAgICAgZTogXCJcXFxcXVxcXFxdPlwiLFxuICAgICAgICAgICAgcjogMTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwidGFnXCIsXG4gICAgICAgICAgICBiOiBcIjxzdHlsZSg/PVxcXFxzfD58JClcIixcbiAgICAgICAgICAgIGU6IFwiPlwiLFxuICAgICAgICAgICAgazoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcInN0eWxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjOiBbY10sXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlOiBcIjwvc3R5bGU+XCIsXG4gICAgICAgICAgICAgICAgckU6ICEwLFxuICAgICAgICAgICAgICAgIHNMOiBcImNzc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcInRhZ1wiLFxuICAgICAgICAgICAgYjogXCI8c2NyaXB0KD89XFxcXHN8PnwkKVwiLFxuICAgICAgICAgICAgZTogXCI+XCIsXG4gICAgICAgICAgICBrOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwic2NyaXB0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjOiBbY10sXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlOiBcIjwvc2NyaXB0PlwiLFxuICAgICAgICAgICAgICAgIHJFOiAhMCxcbiAgICAgICAgICAgICAgICBzTDogXCJqYXZhc2NyaXB0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZSwge1xuICAgICAgICAgICAgY046IFwicGlcIixcbiAgICAgICAgICAgIGI6IC88XFw/XFx3Ky8sXG4gICAgICAgICAgICBlOiAvXFw/Pi8sXG4gICAgICAgICAgICByOiAxMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJ0YWdcIixcbiAgICAgICAgICAgIGI6IFwiPC8/XCIsXG4gICAgICAgICAgICBlOiBcIi8/PlwiLFxuICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICBjTjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgIGI6IC9bXiBcXC8+PFxcblxcdF0rLyxcbiAgICAgICAgICAgICAgICByOiAwXG4gICAgICAgICAgICB9LCBjXVxuICAgICAgICB9XVxuICAgIH07XG59KTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcImhhbWxcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNJOiAhMCxcbiAgICAgICAgYzogW3tcbiAgICAgICAgICAgIGNOOiBcImRvY3R5cGVcIixcbiAgICAgICAgICAgIGI6IFwiXiEhISggKDV8MVxcXFwuMXxTdHJpY3R8RnJhbWVzZXR8QmFzaWN8TW9iaWxlfFJERmF8WE1MXFxcXGIuKikpPyRcIixcbiAgICAgICAgICAgIHI6IDEwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIGI6IFwiXlxcXFxzKighPSN8PSN8LSN8LykuKiRcIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCJeXFxcXHMqKC18PXwhPSkoPyEjKVwiLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgZTogXCJcXFxcblwiLFxuICAgICAgICAgICAgICAgIHNMOiBcInJ1YnlcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJ0YWdcIixcbiAgICAgICAgICAgIGI6IFwiXlxcXFxzKiVcIixcbiAgICAgICAgICAgIGM6IFt7XG4gICAgICAgICAgICAgICAgY046IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBiOiBcIlxcXFx3K1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY046IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBiOiBcIlsjXFxcXC5dXFxcXHcrXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBiOiBcIntcXFxccypcIixcbiAgICAgICAgICAgICAgICBlOiBcIlxcXFxzKn1cIixcbiAgICAgICAgICAgICAgICBlRTogITAsXG4gICAgICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICAgICAgYjogXCI6XFxcXHcrXFxcXHMqPT5cIixcbiAgICAgICAgICAgICAgICAgICAgZTogXCIsXFxcXHMrXCIsXG4gICAgICAgICAgICAgICAgICAgIHJCOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgZVc6ICEwLFxuICAgICAgICAgICAgICAgICAgICBjOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY046IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBcIjpcXFxcdytcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjTjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGI6ICdcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiAnXCInXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNOOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYjogXCInXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiBcIidcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBcIlxcXFx3K1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcjogMFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgYjogXCJcXFxcKFxcXFxzKlwiLFxuICAgICAgICAgICAgICAgIGU6IFwiXFxcXHMqXFxcXClcIixcbiAgICAgICAgICAgICAgICBlRTogITAsXG4gICAgICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICAgICAgYjogXCJcXFxcdytcXFxccyo9XCIsXG4gICAgICAgICAgICAgICAgICAgIGU6IFwiXFxcXHMrXCIsXG4gICAgICAgICAgICAgICAgICAgIHJCOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgZVc6ICEwLFxuICAgICAgICAgICAgICAgICAgICBjOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY046IFwiYXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBcIlxcXFx3K1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcjogMFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjTjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGI6ICdcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiAnXCInXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNOOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYjogXCInXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiBcIidcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBcIlxcXFx3K1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcjogMFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJidWxsZXRcIixcbiAgICAgICAgICAgIGI6IFwiXlxcXFxzKls9fl1cXFxccypcIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCIje1wiLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgZTogXCJ9XCIsXG4gICAgICAgICAgICAgICAgc0w6IFwicnVieVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfTtcbn0pO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwicnVieVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBiID0gXCJbYS16QS1aX11cXFxcdypbIT89XT98Wy0rfl1cXFxcQHw8PHw+Pnw9fnw9PT0/fDw9PnxbPD5dPT98XFxcXCpcXFxcKnxbLS8rJV4mKn5gfF18XFxcXFtcXFxcXT0/XCIsXG4gICAgICAgIHIgPSBcImFuZCBmYWxzZSB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIGlmIEJFR0lOIHJldHJ5IGVuZCBmb3IgdHJ1ZSBzZWxmIHdoZW4gbmV4dCB1bnRpbCBkbyBiZWdpbiB1bmxlc3MgRU5EIHJlc2N1ZSBuaWwgZWxzZSBicmVhayB1bmRlZiBub3Qgc3VwZXIgY2xhc3MgY2FzZSByZXF1aXJlIHlpZWxkIGFsaWFzIHdoaWxlIGVuc3VyZSBlbHNpZiBvciBpbmNsdWRlIGF0dHJfcmVhZGVyIGF0dHJfd3JpdGVyIGF0dHJfYWNjZXNzb3JcIixcbiAgICAgICAgYyA9IHtcbiAgICAgICAgY046IFwieWFyZG9jdGFnXCIsXG4gICAgICAgIGI6IFwiQFtBLVphLXpdK1wiXG4gICAgfSxcbiAgICAgICAgYSA9IHtcbiAgICAgICAgY046IFwidmFsdWVcIixcbiAgICAgICAgYjogXCIjPFwiLFxuICAgICAgICBlOiBcIj5cIlxuICAgIH0sXG4gICAgICAgIHMgPSB7XG4gICAgICAgIGNOOiBcImNvbW1lbnRcIixcbiAgICAgICAgdjogW3tcbiAgICAgICAgICAgIGI6IFwiI1wiLFxuICAgICAgICAgICAgZTogXCIkXCIsXG4gICAgICAgICAgICBjOiBbY11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCJeXFxcXD1iZWdpblwiLFxuICAgICAgICAgICAgZTogXCJeXFxcXD1lbmRcIixcbiAgICAgICAgICAgIGM6IFtjXSxcbiAgICAgICAgICAgIHI6IDEwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiXl9fRU5EX19cIixcbiAgICAgICAgICAgIGU6IFwiXFxcXG4kXCJcbiAgICAgICAgfV1cbiAgICB9LFxuICAgICAgICBuID0ge1xuICAgICAgICBjTjogXCJzdWJzdFwiLFxuICAgICAgICBiOiBcIiNcXFxce1wiLFxuICAgICAgICBlOiBcIn1cIixcbiAgICAgICAgazogclxuICAgIH0sXG4gICAgICAgIHQgPSB7XG4gICAgICAgIGNOOiBcInN0cmluZ1wiLFxuICAgICAgICBjOiBbZS5CRSwgbl0sXG4gICAgICAgIHY6IFt7XG4gICAgICAgICAgICBiOiAvJy8sXG4gICAgICAgICAgICBlOiAvJy9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogL1wiLyxcbiAgICAgICAgICAgIGU6IC9cIi9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogL2AvLFxuICAgICAgICAgICAgZTogL2AvXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiJVtxUXdXeF0/XFxcXChcIixcbiAgICAgICAgICAgIGU6IFwiXFxcXClcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiBcIiVbcVF3V3hdP1xcXFxbXCIsXG4gICAgICAgICAgICBlOiBcIlxcXFxdXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCIlW3FRd1d4XT97XCIsXG4gICAgICAgICAgICBlOiBcIn1cIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiBcIiVbcVF3V3hdPzxcIixcbiAgICAgICAgICAgIGU6IFwiPlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiJVtxUXdXeF0/L1wiLFxuICAgICAgICAgICAgZTogXCIvXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCIlW3FRd1d4XT8lXCIsXG4gICAgICAgICAgICBlOiBcIiVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiBcIiVbcVF3V3hdPy1cIixcbiAgICAgICAgICAgIGU6IFwiLVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiJVtxUXdXeF0/XFxcXHxcIixcbiAgICAgICAgICAgIGU6IFwiXFxcXHxcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiOiAvXFxCXFw/KFxcXFxcXGR7MSwzfXxcXFxceFtBLUZhLWYwLTldezEsMn18XFxcXHVbQS1GYS1mMC05XXs0fXxcXFxcP1xcUylcXGIvXG4gICAgICAgIH1dXG4gICAgfSxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgY046IFwicGFyYW1zXCIsXG4gICAgICAgIGI6IFwiXFxcXChcIixcbiAgICAgICAgZTogXCJcXFxcKVwiLFxuICAgICAgICBrOiByXG4gICAgfSxcbiAgICAgICAgZCA9IFt0LCBhLCBzLCB7XG4gICAgICAgIGNOOiBcImNsYXNzXCIsXG4gICAgICAgIGJLOiBcImNsYXNzIG1vZHVsZVwiLFxuICAgICAgICBlOiBcIiR8O1wiLFxuICAgICAgICBpOiAvPS8sXG4gICAgICAgIGM6IFtlLmluaGVyaXQoZS5UTSwge1xuICAgICAgICAgICAgYjogXCJbQS1aYS16X11cXFxcdyooOjpcXFxcdyspKihcXFxcP3xcXFxcISk/XCJcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIGNOOiBcImluaGVyaXRhbmNlXCIsXG4gICAgICAgICAgICBiOiBcIjxcXFxccypcIixcbiAgICAgICAgICAgIGM6IFt7XG4gICAgICAgICAgICAgICAgY046IFwicGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYjogXCIoXCIgKyBlLklSICsgXCI6Oik/XCIgKyBlLklSXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCBzXVxuICAgIH0sIHtcbiAgICAgICAgY046IFwiZnVuY3Rpb25cIixcbiAgICAgICAgYks6IFwiZGVmXCIsXG4gICAgICAgIGU6IFwiIHwkfDtcIixcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW2UuaW5oZXJpdChlLlRNLCB7XG4gICAgICAgICAgICBiOiBiXG4gICAgICAgIH0pLCBpLCBzXVxuICAgIH0sIHtcbiAgICAgICAgY046IFwiY29uc3RhbnRcIixcbiAgICAgICAgYjogXCIoOjopPyhcXFxcYltBLVpdXFxcXHcqKDo6KT8pK1wiLFxuICAgICAgICByOiAwXG4gICAgfSwge1xuICAgICAgICBjTjogXCJzeW1ib2xcIixcbiAgICAgICAgYjogZS5VSVIgKyBcIihcXFxcIXxcXFxcPyk/OlwiLFxuICAgICAgICByOiAwXG4gICAgfSwge1xuICAgICAgICBjTjogXCJzeW1ib2xcIixcbiAgICAgICAgYjogXCI6XCIsXG4gICAgICAgIGM6IFt0LCB7XG4gICAgICAgICAgICBiOiBiXG4gICAgICAgIH1dLFxuICAgICAgICByOiAwXG4gICAgfSwge1xuICAgICAgICBjTjogXCJudW1iZXJcIixcbiAgICAgICAgYjogXCIoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYlwiLFxuICAgICAgICByOiAwXG4gICAgfSwge1xuICAgICAgICBjTjogXCJ2YXJpYWJsZVwiLFxuICAgICAgICBiOiBcIihcXFxcJFxcXFxXKXwoKFxcXFwkfFxcXFxAXFxcXEA/KShcXFxcdyspKVwiXG4gICAgfSwge1xuICAgICAgICBiOiBcIihcIiArIGUuUlNSICsgXCIpXFxcXHMqXCIsXG4gICAgICAgIGM6IFthLCBzLCB7XG4gICAgICAgICAgICBjTjogXCJyZWdleHBcIixcbiAgICAgICAgICAgIGM6IFtlLkJFLCBuXSxcbiAgICAgICAgICAgIGk6IC9cXG4vLFxuICAgICAgICAgICAgdjogW3tcbiAgICAgICAgICAgICAgICBiOiBcIi9cIixcbiAgICAgICAgICAgICAgICBlOiBcIi9bYS16XSpcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGI6IFwiJXJ7XCIsXG4gICAgICAgICAgICAgICAgZTogXCJ9W2Etel0qXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBiOiBcIiVyXFxcXChcIixcbiAgICAgICAgICAgICAgICBlOiBcIlxcXFwpW2Etel0qXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBiOiBcIiVyIVwiLFxuICAgICAgICAgICAgICAgIGU6IFwiIVthLXpdKlwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgYjogXCIlclxcXFxbXCIsXG4gICAgICAgICAgICAgICAgZTogXCJcXFxcXVthLXpdKlwiXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XSxcbiAgICAgICAgcjogMFxuICAgIH1dO1xuICAgIG4uYyA9IGQsIGkuYyA9IGQ7XG4gICAgdmFyIGwgPSBcIls+P10+XCIsXG4gICAgICAgIHUgPSBcIltcXFxcdyNdK1xcXFwoXFxcXHcrXFxcXCk6XFxcXGQrOlxcXFxkKz5cIixcbiAgICAgICAgTiA9IFwiKFxcXFx3Ky0pP1xcXFxkK1xcXFwuXFxcXGQrXFxcXC5cXFxcZChwXFxcXGQrKT9bXj5dKz5cIixcbiAgICAgICAgbyA9IFt7XG4gICAgICAgIGI6IC9eXFxzKj0+LyxcbiAgICAgICAgY046IFwic3RhdHVzXCIsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgZTogXCIkXCIsXG4gICAgICAgICAgICBjOiBkXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGNOOiBcInByb21wdFwiLFxuICAgICAgICBiOiBcIl4oXCIgKyBsICsgXCJ8XCIgKyB1ICsgXCJ8XCIgKyBOICsgXCIpXCIsXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgZTogXCIkXCIsXG4gICAgICAgICAgICBjOiBkXG4gICAgICAgIH1cbiAgICB9XTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGlhc2VzOiBbXCJyYlwiLCBcImdlbXNwZWNcIiwgXCJwb2RzcGVjXCIsIFwidGhvclwiLCBcImlyYlwiXSxcbiAgICAgICAgazogcixcbiAgICAgICAgYzogW3NdLmNvbmNhdChvKS5jb25jYXQoZClcbiAgICB9O1xufSk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJqYXZhc2NyaXB0XCIsIGZ1bmN0aW9uIChyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXNlczogW1wianNcIl0sXG4gICAgICAgIGs6IHtcbiAgICAgICAgICAgIGtleXdvcmQ6IFwiaW4gaWYgZm9yIHdoaWxlIGZpbmFsbHkgdmFyIG5ldyBmdW5jdGlvbiBkbyByZXR1cm4gdm9pZCBlbHNlIGJyZWFrIGNhdGNoIGluc3RhbmNlb2Ygd2l0aCB0aHJvdyBjYXNlIGRlZmF1bHQgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHR5cGVvZiBkZWxldGUgbGV0IHlpZWxkIGNvbnN0IGNsYXNzXCIsXG4gICAgICAgICAgICBsaXRlcmFsOiBcInRydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgTmFOIEluZmluaXR5XCIsXG4gICAgICAgICAgICBidWlsdF9pbjogXCJldmFsIGlzRmluaXRlIGlzTmFOIHBhcnNlRmxvYXQgcGFyc2VJbnQgZGVjb2RlVVJJIGRlY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUkkgZW5jb2RlVVJJQ29tcG9uZW50IGVzY2FwZSB1bmVzY2FwZSBPYmplY3QgRnVuY3Rpb24gQm9vbGVhbiBFcnJvciBFdmFsRXJyb3IgSW50ZXJuYWxFcnJvciBSYW5nZUVycm9yIFJlZmVyZW5jZUVycm9yIFN0b3BJdGVyYXRpb24gU3ludGF4RXJyb3IgVHlwZUVycm9yIFVSSUVycm9yIE51bWJlciBNYXRoIERhdGUgU3RyaW5nIFJlZ0V4cCBBcnJheSBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBJbnQ4QXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBBcnJheUJ1ZmZlciBEYXRhVmlldyBKU09OIEludGwgYXJndW1lbnRzIHJlcXVpcmUgbW9kdWxlIGNvbnNvbGUgd2luZG93IGRvY3VtZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgYzogW3tcbiAgICAgICAgICAgIGNOOiBcInBpXCIsXG4gICAgICAgICAgICByOiAxMCxcbiAgICAgICAgICAgIHY6IFt7XG4gICAgICAgICAgICAgICAgYjogL15cXHMqKCd8XCIpdXNlIHN0cmljdCgnfFwiKS9cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBiOiAvXlxccyooJ3xcIil1c2UgYXNtKCd8XCIpL1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwgci5BU00sIHIuUVNNLCByLkNMQ00sIHIuQ0JDTSwgci5DTk0sIHtcbiAgICAgICAgICAgIGI6IFwiKFwiICsgci5SU1IgKyBcInxcXFxcYihjYXNlfHJldHVybnx0aHJvdylcXFxcYilcXFxccypcIixcbiAgICAgICAgICAgIGs6IFwicmV0dXJuIHRocm93IGNhc2VcIixcbiAgICAgICAgICAgIGM6IFtyLkNMQ00sIHIuQ0JDTSwgci5STSwge1xuICAgICAgICAgICAgICAgIGI6IC88LyxcbiAgICAgICAgICAgICAgICBlOiAvPjsvLFxuICAgICAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICAgICAgc0w6IFwieG1sXCJcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcjogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgYks6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgIGU6IC9cXHsvLFxuICAgICAgICAgICAgZUU6ICEwLFxuICAgICAgICAgICAgYzogW3IuaW5oZXJpdChyLlRNLCB7XG4gICAgICAgICAgICAgICAgYjogL1tBLVphLXokX11bMC05QS1aYS16JF9dKi9cbiAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICAgICAgY046IFwicGFyYW1zXCIsXG4gICAgICAgICAgICAgICAgYjogL1xcKC8sXG4gICAgICAgICAgICAgICAgZTogL1xcKS8sXG4gICAgICAgICAgICAgICAgYzogW3IuQ0xDTSwgci5DQkNNXSxcbiAgICAgICAgICAgICAgICBpOiAvW1wiJ1xcKF0vXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGk6IC9cXFt8JS9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogL1xcJFsoLl0vXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGI6IFwiXFxcXC5cIiArIHIuSVIsXG4gICAgICAgICAgICByOiAwXG4gICAgICAgIH1dXG4gICAgfTtcbn0pO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiZXJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzTDogXCJ4bWxcIixcbiAgICAgICAgc3ViTGFuZ3VhZ2VNb2RlOiBcImNvbnRpbnVvdXNcIixcbiAgICAgICAgYzogW3tcbiAgICAgICAgICAgIGNOOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIGI6IFwiPCUjXCIsXG4gICAgICAgICAgICBlOiBcIiU+XCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYjogXCI8JVslPS1dP1wiLFxuICAgICAgICAgICAgZTogXCJbJS1dPyU+XCIsXG4gICAgICAgICAgICBzTDogXCJydWJ5XCIsXG4gICAgICAgICAgICBlQjogITAsXG4gICAgICAgICAgICBlRTogITBcbiAgICAgICAgfV1cbiAgICB9O1xufSk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJzY3NzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAge1xuICAgICAgICB2YXIgdCA9IFwiW2EtekEtWi1dW2EtekEtWjAtOV8tXSpcIixcbiAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICBjTjogXCJ2YXJpYWJsZVwiLFxuICAgICAgICAgICAgYjogXCIoXFxcXCRcIiArIHQgKyBcIilcXFxcYlwiXG4gICAgICAgIH0sXG4gICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgY046IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgIGI6IHQgKyBcIlxcXFwoXCIsXG4gICAgICAgICAgICByQjogITAsXG4gICAgICAgICAgICBlRTogITAsXG4gICAgICAgICAgICBlOiBcIlxcXFwoXCJcbiAgICAgICAgfSxcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICBjTjogXCJoZXhjb2xvclwiLFxuICAgICAgICAgICAgYjogXCIjWzAtOUEtRmEtZl0rXCJcbiAgICAgICAgfTtcbiAgICAgICAgKHtcbiAgICAgICAgICAgIGNOOiBcImF0dHJpYnV0ZVwiLFxuICAgICAgICAgICAgYjogXCJbQS1aXFxcXF9cXFxcLlxcXFwtXStcIixcbiAgICAgICAgICAgIGU6IFwiOlwiLFxuICAgICAgICAgICAgZUU6ICEwLFxuICAgICAgICAgICAgaTogXCJbXlxcXFxzXVwiLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgY046IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBlVzogITAsXG4gICAgICAgICAgICAgICAgZUU6ICEwLFxuICAgICAgICAgICAgICAgIGM6IFtyLCBvLCBlLkNTU05NLCBlLlFTTSwgZS5BU00sIGUuQ0JDTSwge1xuICAgICAgICAgICAgICAgICAgICBjTjogXCJpbXBvcnRhbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYjogXCIhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY0k6ICEwLFxuICAgICAgICBpOiBcIls9L3wnXVwiLFxuICAgICAgICBjOiBbZS5DTENNLCBlLkNCQ00sIHIsIHtcbiAgICAgICAgICAgIGNOOiBcImlkXCIsXG4gICAgICAgICAgICBiOiBcIlxcXFwjW0EtWmEtejAtOV8tXStcIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwiY2xhc3NcIixcbiAgICAgICAgICAgIGI6IFwiXFxcXC5bQS1aYS16MC05Xy1dK1wiLFxuICAgICAgICAgICAgcjogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJhdHRyX3NlbGVjdG9yXCIsXG4gICAgICAgICAgICBiOiBcIlxcXFxbXCIsXG4gICAgICAgICAgICBlOiBcIlxcXFxdXCIsXG4gICAgICAgICAgICBpOiBcIiRcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJ0YWdcIixcbiAgICAgICAgICAgIGI6IFwiXFxcXGIoYXxhYmJyfGFjcm9ueW18YWRkcmVzc3xhcmVhfGFydGljbGV8YXNpZGV8YXVkaW98YnxiYXNlfGJpZ3xibG9ja3F1b3RlfGJvZHl8YnJ8YnV0dG9ufGNhbnZhc3xjYXB0aW9ufGNpdGV8Y29kZXxjb2x8Y29sZ3JvdXB8Y29tbWFuZHxkYXRhbGlzdHxkZHxkZWx8ZGV0YWlsc3xkZm58ZGl2fGRsfGR0fGVtfGVtYmVkfGZpZWxkc2V0fGZpZ2NhcHRpb258ZmlndXJlfGZvb3Rlcnxmb3JtfGZyYW1lfGZyYW1lc2V0fChoWzEtNl0pfGhlYWR8aGVhZGVyfGhncm91cHxocnxodG1sfGl8aWZyYW1lfGltZ3xpbnB1dHxpbnN8a2JkfGtleWdlbnxsYWJlbHxsZWdlbmR8bGl8bGlua3xtYXB8bWFya3xtZXRhfG1ldGVyfG5hdnxub2ZyYW1lc3xub3NjcmlwdHxvYmplY3R8b2x8b3B0Z3JvdXB8b3B0aW9ufG91dHB1dHxwfHBhcmFtfHByZXxwcm9ncmVzc3xxfHJwfHJ0fHJ1Ynl8c2FtcHxzY3JpcHR8c2VjdGlvbnxzZWxlY3R8c21hbGx8c3BhbnxzdHJpa2V8c3Ryb25nfHN0eWxlfHN1YnxzdXB8dGFibGV8dGJvZHl8dGR8dGV4dGFyZWF8dGZvb3R8dGh8dGhlYWR8dGltZXx0aXRsZXx0cnx0dHx1bHx2YXJ8dmlkZW8pXFxcXGJcIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwicHNldWRvXCIsXG4gICAgICAgICAgICBiOiBcIjoodmlzaXRlZHx2YWxpZHxyb290fHJpZ2h0fHJlcXVpcmVkfHJlYWQtd3JpdGV8cmVhZC1vbmx5fG91dC1yYW5nZXxvcHRpb25hbHxvbmx5LW9mLXR5cGV8b25seS1jaGlsZHxudGgtb2YtdHlwZXxudGgtbGFzdC1vZi10eXBlfG50aC1sYXN0LWNoaWxkfG50aC1jaGlsZHxub3R8bGlua3xsZWZ0fGxhc3Qtb2YtdHlwZXxsYXN0LWNoaWxkfGxhbmd8aW52YWxpZHxpbmRldGVybWluYXRlfGluLXJhbmdlfGhvdmVyfGZvY3VzfGZpcnN0LW9mLXR5cGV8Zmlyc3QtbGluZXxmaXJzdC1sZXR0ZXJ8Zmlyc3QtY2hpbGR8Zmlyc3R8ZW5hYmxlZHxlbXB0eXxkaXNhYmxlZHxkZWZhdWx0fGNoZWNrZWR8YmVmb3JlfGFmdGVyfGFjdGl2ZSlcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJwc2V1ZG9cIixcbiAgICAgICAgICAgIGI6IFwiOjooYWZ0ZXJ8YmVmb3JlfGNob2ljZXN8Zmlyc3QtbGV0dGVyfGZpcnN0LWxpbmV8cmVwZWF0LWluZGV4fHJlcGVhdC1pdGVtfHNlbGVjdGlvbnx2YWx1ZSlcIlxuICAgICAgICB9LCBpLCB7XG4gICAgICAgICAgICBjTjogXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgICAgIGI6IFwiXFxcXGIoei1pbmRleHx3b3JkLXdyYXB8d29yZC1zcGFjaW5nfHdvcmQtYnJlYWt8d2lkdGh8d2lkb3dzfHdoaXRlLXNwYWNlfHZpc2liaWxpdHl8dmVydGljYWwtYWxpZ258dW5pY29kZS1iaWRpfHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9ufHRyYW5zaXRpb24tcHJvcGVydHl8dHJhbnNpdGlvbi1kdXJhdGlvbnx0cmFuc2l0aW9uLWRlbGF5fHRyYW5zaXRpb258dHJhbnNmb3JtLXN0eWxlfHRyYW5zZm9ybS1vcmlnaW58dHJhbnNmb3JtfHRvcHx0ZXh0LXVuZGVybGluZS1wb3NpdGlvbnx0ZXh0LXRyYW5zZm9ybXx0ZXh0LXNoYWRvd3x0ZXh0LXJlbmRlcmluZ3x0ZXh0LW92ZXJmbG93fHRleHQtaW5kZW50fHRleHQtZGVjb3JhdGlvbi1zdHlsZXx0ZXh0LWRlY29yYXRpb24tbGluZXx0ZXh0LWRlY29yYXRpb24tY29sb3J8dGV4dC1kZWNvcmF0aW9ufHRleHQtYWxpZ24tbGFzdHx0ZXh0LWFsaWdufHRhYi1zaXplfHRhYmxlLWxheW91dHxyaWdodHxyZXNpemV8cXVvdGVzfHBvc2l0aW9ufHBvaW50ZXItZXZlbnRzfHBlcnNwZWN0aXZlLW9yaWdpbnxwZXJzcGVjdGl2ZXxwYWdlLWJyZWFrLWluc2lkZXxwYWdlLWJyZWFrLWJlZm9yZXxwYWdlLWJyZWFrLWFmdGVyfHBhZGRpbmctdG9wfHBhZGRpbmctcmlnaHR8cGFkZGluZy1sZWZ0fHBhZGRpbmctYm90dG9tfHBhZGRpbmd8b3ZlcmZsb3cteXxvdmVyZmxvdy14fG92ZXJmbG93LXdyYXB8b3ZlcmZsb3d8b3V0bGluZS13aWR0aHxvdXRsaW5lLXN0eWxlfG91dGxpbmUtb2Zmc2V0fG91dGxpbmUtY29sb3J8b3V0bGluZXxvcnBoYW5zfG9yZGVyfG9wYWNpdHl8b2JqZWN0LXBvc2l0aW9ufG9iamVjdC1maXR8bm9ybWFsfG5vbmV8bmF2LXVwfG5hdi1yaWdodHxuYXYtbGVmdHxuYXYtaW5kZXh8bmF2LWRvd258bWluLXdpZHRofG1pbi1oZWlnaHR8bWF4LXdpZHRofG1heC1oZWlnaHR8bWFza3xtYXJrc3xtYXJnaW4tdG9wfG1hcmdpbi1yaWdodHxtYXJnaW4tbGVmdHxtYXJnaW4tYm90dG9tfG1hcmdpbnxsaXN0LXN0eWxlLXR5cGV8bGlzdC1zdHlsZS1wb3NpdGlvbnxsaXN0LXN0eWxlLWltYWdlfGxpc3Qtc3R5bGV8bGluZS1oZWlnaHR8bGV0dGVyLXNwYWNpbmd8bGVmdHxqdXN0aWZ5LWNvbnRlbnR8aW5pdGlhbHxpbmhlcml0fGltZS1tb2RlfGltYWdlLW9yaWVudGF0aW9ufGltYWdlLXJlc29sdXRpb258aW1hZ2UtcmVuZGVyaW5nfGljb258aHlwaGVuc3xoZWlnaHR8Zm9udC13ZWlnaHR8Zm9udC12YXJpYW50LWxpZ2F0dXJlc3xmb250LXZhcmlhbnR8Zm9udC1zdHlsZXxmb250LXN0cmV0Y2h8Zm9udC1zaXplLWFkanVzdHxmb250LXNpemV8Zm9udC1sYW5ndWFnZS1vdmVycmlkZXxmb250LWtlcm5pbmd8Zm9udC1mZWF0dXJlLXNldHRpbmdzfGZvbnQtZmFtaWx5fGZvbnR8ZmxvYXR8ZmxleC13cmFwfGZsZXgtc2hyaW5rfGZsZXgtZ3Jvd3xmbGV4LWZsb3d8ZmxleC1kaXJlY3Rpb258ZmxleC1iYXNpc3xmbGV4fGZpbHRlcnxlbXB0eS1jZWxsc3xkaXNwbGF5fGRpcmVjdGlvbnxjdXJzb3J8Y291bnRlci1yZXNldHxjb3VudGVyLWluY3JlbWVudHxjb250ZW50fGNvbHVtbi13aWR0aHxjb2x1bW4tc3Bhbnxjb2x1bW4tcnVsZS13aWR0aHxjb2x1bW4tcnVsZS1zdHlsZXxjb2x1bW4tcnVsZS1jb2xvcnxjb2x1bW4tcnVsZXxjb2x1bW4tZ2FwfGNvbHVtbi1maWxsfGNvbHVtbi1jb3VudHxjb2x1bW5zfGNvbG9yfGNsaXAtcGF0aHxjbGlwfGNsZWFyfGNhcHRpb24tc2lkZXxicmVhay1pbnNpZGV8YnJlYWstYmVmb3JlfGJyZWFrLWFmdGVyfGJveC1zaXppbmd8Ym94LXNoYWRvd3xib3gtZGVjb3JhdGlvbi1icmVha3xib3R0b218Ym9yZGVyLXdpZHRofGJvcmRlci10b3Atd2lkdGh8Ym9yZGVyLXRvcC1zdHlsZXxib3JkZXItdG9wLXJpZ2h0LXJhZGl1c3xib3JkZXItdG9wLWxlZnQtcmFkaXVzfGJvcmRlci10b3AtY29sb3J8Ym9yZGVyLXRvcHxib3JkZXItc3R5bGV8Ym9yZGVyLXNwYWNpbmd8Ym9yZGVyLXJpZ2h0LXdpZHRofGJvcmRlci1yaWdodC1zdHlsZXxib3JkZXItcmlnaHQtY29sb3J8Ym9yZGVyLXJpZ2h0fGJvcmRlci1yYWRpdXN8Ym9yZGVyLWxlZnQtd2lkdGh8Ym9yZGVyLWxlZnQtc3R5bGV8Ym9yZGVyLWxlZnQtY29sb3J8Ym9yZGVyLWxlZnR8Ym9yZGVyLWltYWdlLXdpZHRofGJvcmRlci1pbWFnZS1zb3VyY2V8Ym9yZGVyLWltYWdlLXNsaWNlfGJvcmRlci1pbWFnZS1yZXBlYXR8Ym9yZGVyLWltYWdlLW91dHNldHxib3JkZXItaW1hZ2V8Ym9yZGVyLWNvbG9yfGJvcmRlci1jb2xsYXBzZXxib3JkZXItYm90dG9tLXdpZHRofGJvcmRlci1ib3R0b20tc3R5bGV8Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXN8Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c3xib3JkZXItYm90dG9tLWNvbG9yfGJvcmRlci1ib3R0b218Ym9yZGVyfGJhY2tncm91bmQtc2l6ZXxiYWNrZ3JvdW5kLXJlcGVhdHxiYWNrZ3JvdW5kLXBvc2l0aW9ufGJhY2tncm91bmQtb3JpZ2lufGJhY2tncm91bmQtaW1hZ2V8YmFja2dyb3VuZC1jb2xvcnxiYWNrZ3JvdW5kLWNsaXB8YmFja2dyb3VuZC1hdHRhY2htZW50fGJhY2tncm91bmR8YmFja2ZhY2UtdmlzaWJpbGl0eXxhdXRvfGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb258YW5pbWF0aW9uLXBsYXktc3RhdGV8YW5pbWF0aW9uLW5hbWV8YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudHxhbmltYXRpb24tZmlsbC1tb2RlfGFuaW1hdGlvbi1kdXJhdGlvbnxhbmltYXRpb24tZGlyZWN0aW9ufGFuaW1hdGlvbi1kZWxheXxhbmltYXRpb258YWxpZ24tc2VsZnxhbGlnbi1pdGVtc3xhbGlnbi1jb250ZW50KVxcXFxiXCIsXG4gICAgICAgICAgICBpOiBcIlteXFxcXHNdXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwidmFsdWVcIixcbiAgICAgICAgICAgIGI6IFwiXFxcXGIod2hpdGVzcGFjZXx3YWl0fHctcmVzaXplfHZpc2libGV8dmVydGljYWwtdGV4dHx2ZXJ0aWNhbC1pZGVvZ3JhcGhpY3x1cHBlcmNhc2V8dXBwZXItcm9tYW58dXBwZXItYWxwaGF8dW5kZXJsaW5lfHRyYW5zcGFyZW50fHRvcHx0aGlufHRoaWNrfHRleHR8dGV4dC10b3B8dGV4dC1ib3R0b218dGItcmx8dGFibGUtaGVhZGVyLWdyb3VwfHRhYmxlLWZvb3Rlci1ncm91cHxzdy1yZXNpemV8c3VwZXJ8c3RyaWN0fHN0YXRpY3xzcXVhcmV8c29saWR8c21hbGwtY2Fwc3xzZXBhcmF0ZXxzZS1yZXNpemV8c2Nyb2xsfHMtcmVzaXplfHJ0bHxyb3ctcmVzaXplfHJpZGdlfHJpZ2h0fHJlcGVhdHxyZXBlYXQteXxyZXBlYXQteHxyZWxhdGl2ZXxwcm9ncmVzc3xwb2ludGVyfG92ZXJsaW5lfG91dHNpZGV8b3V0c2V0fG9ibGlxdWV8bm93cmFwfG5vdC1hbGxvd2VkfG5vcm1hbHxub25lfG53LXJlc2l6ZXxuby1yZXBlYXR8bm8tZHJvcHxuZXdzcGFwZXJ8bmUtcmVzaXplfG4tcmVzaXplfG1vdmV8bWlkZGxlfG1lZGl1bXxsdHJ8bHItdGJ8bG93ZXJjYXNlfGxvd2VyLXJvbWFufGxvd2VyLWFscGhhfGxvb3NlfGxpc3QtaXRlbXxsaW5lfGxpbmUtdGhyb3VnaHxsaW5lLWVkZ2V8bGlnaHRlcnxsZWZ0fGtlZXAtYWxsfGp1c3RpZnl8aXRhbGljfGludGVyLXdvcmR8aW50ZXItaWRlb2dyYXBofGluc2lkZXxpbnNldHxpbmxpbmV8aW5saW5lLWJsb2NrfGluaGVyaXR8aW5hY3RpdmV8aWRlb2dyYXBoLXNwYWNlfGlkZW9ncmFwaC1wYXJlbnRoZXNpc3xpZGVvZ3JhcGgtbnVtZXJpY3xpZGVvZ3JhcGgtYWxwaGF8aG9yaXpvbnRhbHxoaWRkZW58aGVscHxoYW5kfGdyb292ZXxmaXhlZHxlbGxpcHNpc3xlLXJlc2l6ZXxkb3VibGV8ZG90dGVkfGRpc3RyaWJ1dGV8ZGlzdHJpYnV0ZS1zcGFjZXxkaXN0cmlidXRlLWxldHRlcnxkaXN0cmlidXRlLWFsbC1saW5lc3xkaXNjfGRpc2FibGVkfGRlZmF1bHR8ZGVjaW1hbHxkYXNoZWR8Y3Jvc3NoYWlyfGNvbGxhcHNlfGNvbC1yZXNpemV8Y2lyY2xlfGNoYXJ8Y2VudGVyfGNhcGl0YWxpemV8YnJlYWstd29yZHxicmVhay1hbGx8Ym90dG9tfGJvdGh8Ym9sZGVyfGJvbGR8YmxvY2t8YmlkaS1vdmVycmlkZXxiZWxvd3xiYXNlbGluZXxhdXRvfGFsd2F5c3xhbGwtc2Nyb2xsfGFic29sdXRlfHRhYmxlfHRhYmxlLWNlbGwpXFxcXGJcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgYjogXCI6XCIsXG4gICAgICAgICAgICBlOiBcIjtcIixcbiAgICAgICAgICAgIGM6IFtyLCBpLCBvLCBlLkNTU05NLCBlLlFTTSwgZS5BU00sIHtcbiAgICAgICAgICAgICAgICBjTjogXCJpbXBvcnRhbnRcIixcbiAgICAgICAgICAgICAgICBiOiBcIiFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwiYXRfcnVsZVwiLFxuICAgICAgICAgICAgYjogXCJAXCIsXG4gICAgICAgICAgICBlOiBcIlt7O11cIixcbiAgICAgICAgICAgIGs6IFwibWl4aW4gaW5jbHVkZSBleHRlbmQgZm9yIGlmIGVsc2UgZWFjaCB3aGlsZSBjaGFyc2V0IGltcG9ydCBkZWJ1ZyBtZWRpYSBwYWdlIGNvbnRlbnQgZm9udC1mYWNlIG5hbWVzcGFjZSB3YXJuXCIsXG4gICAgICAgICAgICBjOiBbciwgaSwgZS5RU00sIGUuQVNNLCBvLCBlLkNTU05NLCB7XG4gICAgICAgICAgICAgICAgY046IFwicHJlcHJvY2Vzc29yXCIsXG4gICAgICAgICAgICAgICAgYjogXCJcXFxcc1tBLVphLXowLTlfLi1dK1wiLFxuICAgICAgICAgICAgICAgIHI6IDBcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfTtcbn0pO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiY3NzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGMgPSBcIlthLXpBLVotXVthLXpBLVowLTlfLV0qXCIsXG4gICAgICAgIGEgPSB7XG4gICAgICAgIGNOOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgIGI6IGMgKyBcIlxcXFwoXCIsXG4gICAgICAgIHJCOiAhMCxcbiAgICAgICAgZUU6ICEwLFxuICAgICAgICBlOiBcIlxcXFwoXCJcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNJOiAhMCxcbiAgICAgICAgaTogXCJbPS98J11cIixcbiAgICAgICAgYzogW2UuQ0JDTSwge1xuICAgICAgICAgICAgY046IFwiaWRcIixcbiAgICAgICAgICAgIGI6IFwiXFxcXCNbQS1aYS16MC05Xy1dK1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcImNsYXNzXCIsXG4gICAgICAgICAgICBiOiBcIlxcXFwuW0EtWmEtejAtOV8tXStcIixcbiAgICAgICAgICAgIHI6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwiYXR0cl9zZWxlY3RvclwiLFxuICAgICAgICAgICAgYjogXCJcXFxcW1wiLFxuICAgICAgICAgICAgZTogXCJcXFxcXVwiLFxuICAgICAgICAgICAgaTogXCIkXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY046IFwicHNldWRvXCIsXG4gICAgICAgICAgICBiOiBcIjooOik/W2EtekEtWjAtOVxcXFxfXFxcXC1cXFxcK1xcXFwoXFxcXClcXFxcXFxcIlxcXFwnXStcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJhdF9ydWxlXCIsXG4gICAgICAgICAgICBiOiBcIkAoZm9udC1mYWNlfHBhZ2UpXCIsXG4gICAgICAgICAgICBsOiBcIlthLXotXStcIixcbiAgICAgICAgICAgIGs6IFwiZm9udC1mYWNlIHBhZ2VcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJhdF9ydWxlXCIsXG4gICAgICAgICAgICBiOiBcIkBcIixcbiAgICAgICAgICAgIGU6IFwiW3s7XVwiLFxuICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICBjTjogXCJrZXl3b3JkXCIsXG4gICAgICAgICAgICAgICAgYjogL1xcUysvXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgYjogL1xccy8sXG4gICAgICAgICAgICAgICAgZVc6ICEwLFxuICAgICAgICAgICAgICAgIGVFOiAhMCxcbiAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgIGM6IFthLCBlLkFTTSwgZS5RU00sIGUuQ1NTTk1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjTjogXCJ0YWdcIixcbiAgICAgICAgICAgIGI6IGMsXG4gICAgICAgICAgICByOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNOOiBcInJ1bGVzXCIsXG4gICAgICAgICAgICBiOiBcIntcIixcbiAgICAgICAgICAgIGU6IFwifVwiLFxuICAgICAgICAgICAgaTogXCJbXlxcXFxzXVwiLFxuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGM6IFtlLkNCQ00sIHtcbiAgICAgICAgICAgICAgICBjTjogXCJydWxlXCIsXG4gICAgICAgICAgICAgICAgYjogXCJbXlxcXFxzXVwiLFxuICAgICAgICAgICAgICAgIHJCOiAhMCxcbiAgICAgICAgICAgICAgICBlOiBcIjtcIixcbiAgICAgICAgICAgICAgICBlVzogITAsXG4gICAgICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICAgICAgY046IFwiYXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGI6IFwiW0EtWlxcXFxfXFxcXC5cXFxcLV0rXCIsXG4gICAgICAgICAgICAgICAgICAgIGU6IFwiOlwiLFxuICAgICAgICAgICAgICAgICAgICBlRTogITAsXG4gICAgICAgICAgICAgICAgICAgIGk6IFwiW15cXFxcc11cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjTjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZVc6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZUU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYzogW2EsIGUuQ1NTTk0sIGUuUVNNLCBlLkFTTSwgZS5DQkNNLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY046IFwiaGV4Y29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiBcIiNbMC05QS1GYS1mXStcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNOOiBcImltcG9ydGFudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IFwiIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfTtcbn0pO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiaGFuZGxlYmFyc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSBcImVhY2ggaW4gd2l0aCBpZiBlbHNlIHVubGVzcyBiaW5kYXR0ciBhY3Rpb24gY29sbGVjdGlvbiBkZWJ1Z2dlciBsb2cgb3V0bGV0IHRlbXBsYXRlIHVuYm91bmQgdmlldyB5aWVsZFwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsaWFzZXM6IFtcImhic1wiLCBcImh0bWwuaGJzXCIsIFwiaHRtbC5oYW5kbGViYXJzXCJdLFxuICAgICAgICBjSTogITAsXG4gICAgICAgIHNMOiBcInhtbFwiLFxuICAgICAgICBzdWJMYW5ndWFnZU1vZGU6IFwiY29udGludW91c1wiLFxuICAgICAgICBjOiBbe1xuICAgICAgICAgICAgY046IFwiZXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgYjogXCJ7e1wiLFxuICAgICAgICAgICAgZTogXCJ9fVwiLFxuICAgICAgICAgICAgYzogW3tcbiAgICAgICAgICAgICAgICBjTjogXCJiZWdpbi1ibG9ja1wiLFxuICAgICAgICAgICAgICAgIGI6IFwiI1thLXpBLVotIC5dK1wiLFxuICAgICAgICAgICAgICAgIGs6IGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjTjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBiOiAnXCInLFxuICAgICAgICAgICAgICAgIGU6ICdcIidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjTjogXCJlbmQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICBiOiBcIlxcXFwvW2EtekEtWi0gLl0rXCIsXG4gICAgICAgICAgICAgICAgazogZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNOOiBcInZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgYjogXCJbYS16QS1aLS5dK1wiLFxuICAgICAgICAgICAgICAgIGs6IGVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBobGpzO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCI6NSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjh9XSwxMzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuL2FycmF5X2luY2x1ZGVzXCIpO1xuXG59LHtcIi4vYXJyYXlfaW5jbHVkZXNcIjoxMjl9XSwxMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyohXG4gIHF1ZXJ5LXN0cmluZ1xuICBQYXJzZSBhbmQgc3RyaW5naWZ5IFVSTCBxdWVyeSBzdHJpbmdzXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nXG4gIGJ5IFNpbmRyZSBTb3JodXNcbiAgTUlUIExpY2Vuc2VcbiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfT2JqZWN0JGtleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKVsnZGVmYXVsdCddO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBxdWVyeVN0cmluZyA9IHt9O1xuXG4gIHF1ZXJ5U3RyaW5nLnBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98IykvLCAnJyk7XG5cbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHIudHJpbSgpLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uIChyZXQsIHBhcmFtKSB7XG4gICAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuICAgICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHZhbCA9IHBhcnRzWzFdO1xuXG4gICAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG4gICAgICAvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG4gICAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuICAgICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXRba2V5XSA9IHZhbDtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcbiAgICAgICAgcmV0W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqID8gX09iamVjdCRrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICByZXR1cm4gdmFsLm1hcChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwyKTtcbiAgICAgICAgfSkuam9pbignJicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsKTtcbiAgICB9KS5qb2luKCcmJykgOiAnJztcbiAgfTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gcXVlcnlTdHJpbmc7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmc7XG4gIH1cbn0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6OH1dfSx7fSxbMTEyXSk7XG4iXSwiZmlsZSI6InBhdHRlcm5fbGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9