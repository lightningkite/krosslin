(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kommon'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kommon'.");
    }
    root.kommon = factory(typeof kommon === 'undefined' ? {} : kommon, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var toByte = Kotlin.toByte;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var throwCCE = Kotlin.throwCCE;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var binarySearch = Kotlin.kotlin.collections.binarySearch_vikexg$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var Comparator = Kotlin.kotlin.Comparator;
  var Collection = Kotlin.kotlin.collections.Collection;
  var hashCode = Kotlin.hashCode;
  var Sequence = Kotlin.kotlin.sequences.Sequence;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var ensureNotNull = Kotlin.ensureNotNull;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var equals_0 = Kotlin.kotlin.text.equals_4lte5s$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var CharIterator = Kotlin.kotlin.collections.CharIterator;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var toString = Kotlin.toString;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var substringAfter_0 = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var splitToSequence = Kotlin.kotlin.text.splitToSequence_o64adg$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var toChar = Kotlin.toChar;
  var L1 = Kotlin.Long.ONE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var Any = Object;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var hexArray;
  function contentEquals($receiver, other) {
    var tmp$;
    var otherIter = other.iterator();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!otherIter.hasNext())
        return false;
      if (!equals(item, otherIter.next()))
        return false;
    }
    return true;
  }
  function contentEquals_0($receiver, other) {
    var tmp$;
    if ($receiver.size !== other.size)
      return false;
    return contentEquals(Kotlin.isType(tmp$ = $receiver, Iterable) ? tmp$ : throwCCE(), other);
  }
  function push($receiver, element) {
    return $receiver.add_11rb$(element);
  }
  function pop($receiver) {
    return !$receiver.isEmpty() ? $receiver.removeAt_za3lpa$(get_lastIndex($receiver)) : null;
  }
  function reset($receiver, element) {
    $receiver.clear();
    $receiver.add_11rb$(element);
  }
  function pushFrom($receiver, from, to) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (equals(item, from)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 !== -1) {
      var iter = $receiver.listIterator_za3lpa$(index_0 + 1 | 0);
      while (iter.hasNext()) {
        iter.remove();
      }
    }
    if (index_0 !== -1) {
      $receiver.add_11rb$(to);
    }
  }
  function popFrom($receiver, from) {
    var tmp$;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$_0;
      var index = 0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        if (equals(item, from)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 !== -1) {
      var iter = $receiver.listIterator_za3lpa$(index_0 + 1 | 0);
      while (iter.hasNext()) {
        iter.remove();
      }
    }
    if (index_0 !== -1) {
      tmp$ = pop($receiver);
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var thenBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (this$thenBy, closure$selector) {
      return function (a, b) {
        var previousCompare = this$thenBy.compare(a, b);
        var tmp$;
        if (previousCompare !== 0)
          tmp$ = previousCompare;
        else {
          var selector = closure$selector;
          tmp$ = compareValues(selector(a), selector(b));
        }
        return tmp$;
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function SortedBag(comparator, underlying) {
    if (underlying === void 0)
      underlying = ArrayList_init();
    this.underlying = underlying;
    this.comparator = new Comparator$ObjectLiteral(thenBy$lambda(comparator, SortedBag$comparator$lambda));
  }
  SortedBag.prototype.add_11rb$ = function (element) {
    var result = binarySearch(this.underlying, element, this.comparator);
    if (result < 0) {
      this.underlying.add_wxm5ur$(-(result + 1 | 0) | 0, element);
    }
     else {
      this.underlying.add_wxm5ur$(result, element);
    }
    return true;
  };
  SortedBag.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.add_11rb$(element);
    }
    return true;
  };
  SortedBag.prototype.clear = function () {
    this.underlying.clear();
  };
  SortedBag.prototype.iterator = function () {
    return this.underlying.iterator();
  };
  SortedBag.prototype.indexOf_11rb$ = function (element) {
    var result = binarySearch(this.underlying, element, this.comparator);
    if (result >= 0) {
      var index = result;
      while (true) {
        var atIndex = this.underlying.get_za3lpa$(index);
        if (equals(atIndex, element)) {
          return index;
        }
        var comparisonResult = this.comparator.compare(element, this.underlying.get_za3lpa$(index));
        if (comparisonResult === 0) {
          index = index - 1 | 0;
        }
         else {
          break;
        }
      }
      index = result + 1 | 0;
      while (true) {
        var atIndex_0 = this.underlying.get_za3lpa$(index);
        if (equals(atIndex_0, element)) {
          return index;
        }
        var comparisonResult_0 = this.comparator.compare(element, this.underlying.get_za3lpa$(index));
        if (comparisonResult_0 === 0) {
          index = index + 1 | 0;
        }
         else {
          break;
        }
      }
      return -1;
    }
     else
      return -1;
  };
  SortedBag.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.underlying.removeAt_za3lpa$(index);
    return true;
  };
  SortedBag.prototype.removeAll_brywnq$ = function (elements) {
    var allTrue = {v: true};
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      allTrue.v = (allTrue.v && this.remove_11rb$(element));
    }
    return allTrue.v;
  };
  SortedBag.prototype.retainAll_brywnq$ = function (elements) {
    return this.underlying.retainAll_brywnq$(elements);
  };
  Object.defineProperty(SortedBag.prototype, 'size', {get: function () {
    return this.underlying.size;
  }});
  SortedBag.prototype.contains_11rb$ = function (element) {
    return this.indexOf_11rb$(element) !== -1;
  };
  SortedBag.prototype.containsAll_brywnq$ = function (elements) {
    var $receiver = this.underlying;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!(this.indexOf_11rb$(element) !== -1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  SortedBag.prototype.isEmpty = function () {
    return this.underlying.isEmpty();
  };
  SortedBag.prototype.addAllOfSameSort_6e5le9$ = function (other) {
    var tmp$;
    var thisIndex = 0;
    var otherIndex = 0;
    while (thisIndex < this.underlying.size && otherIndex < other.underlying.size) {
      var thisElement = this.underlying.get_za3lpa$(thisIndex);
      var otherElement = other.underlying.get_za3lpa$(otherIndex);
      if (this.comparator.compare(thisElement, otherElement) <= 0) {
        thisIndex = thisIndex + 1 | 0;
      }
       else {
        this.underlying.add_wxm5ur$(thisIndex, otherElement);
        otherIndex = otherIndex + 1 | 0;
      }
    }
    tmp$ = get_lastIndex(other.underlying);
    for (var i = otherIndex; i <= tmp$; i++) {
      this.underlying.add_11rb$(other.underlying.get_za3lpa$(i));
    }
  };
  SortedBag.prototype.copy = function () {
    return new SortedBag(this.comparator, toMutableList(this.underlying));
  };
  SortedBag.prototype.plus_6e5le9$ = function (other) {
    var $receiver = this.copy();
    $receiver.addAllOfSameSort_6e5le9$(other);
    return $receiver;
  };
  SortedBag.prototype.first = function () {
    return first(this.underlying);
  };
  SortedBag.prototype.last = function () {
    return last(this.underlying);
  };
  SortedBag.prototype.firstOrNull = function () {
    return firstOrNull(this.underlying);
  };
  SortedBag.prototype.lastOrNull = function () {
    return lastOrNull(this.underlying);
  };
  SortedBag.prototype.popLast = function () {
    return !this.underlying.isEmpty() ? this.underlying.removeAt_za3lpa$(get_lastIndex(this.underlying)) : null;
  };
  SortedBag.prototype.popFirst = function () {
    return !this.underlying.isEmpty() ? this.underlying.removeAt_za3lpa$(0) : null;
  };
  function SortedBag$comparator$lambda(it) {
    var tmp$;
    return (tmp$ = it != null ? hashCode(it) : null) != null ? tmp$ : 0;
  }
  SortedBag.$metadata$ = {kind: Kind_CLASS, simpleName: 'SortedBag', interfaces: [MutableCollection]};
  function SortedBag$lambda(a, b) {
    return Kotlin.compareTo(a, b);
  }
  function SortedBag_0() {
    return new SortedBag(new Comparator$ObjectLiteral_0(SortedBag$lambda));
  }
  function treeWalkDepthSequence$ObjectLiteral(this$treeWalkDepthSequence, closure$getter) {
    this.this$treeWalkDepthSequence = this$treeWalkDepthSequence;
    this.closure$getter = closure$getter;
  }
  function treeWalkDepthSequence$ObjectLiteral$iterator$lambda(closure$getter) {
    return function (it) {
      return closure$getter(it).iterator();
    };
  }
  treeWalkDepthSequence$ObjectLiteral.prototype.iterator = function () {
    return new TreeWalkDepthIterator(this.this$treeWalkDepthSequence.iterator(), treeWalkDepthSequence$ObjectLiteral$iterator$lambda(this.closure$getter));
  };
  treeWalkDepthSequence$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Sequence]};
  function treeWalkDepthSequence($receiver, getter) {
    return new treeWalkDepthSequence$ObjectLiteral($receiver, getter);
  }
  function TreeWalkDepthIterator(start, getter) {
    this.start = start;
    this.getter = getter;
    this.stack = arrayListOf([this.start]);
  }
  Object.defineProperty(TreeWalkDepthIterator.prototype, 'current', {get: function () {
    return lastOrNull(this.stack);
  }});
  TreeWalkDepthIterator.prototype.hasNext = function () {
    return this.current != null;
  };
  TreeWalkDepthIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    if (this.current == null)
      throw NoSuchElementException_init();
    while (((tmp$ = this.current) != null ? tmp$.hasNext() : null) === false) {
      this.stack.removeAt_za3lpa$(get_lastIndex(this.stack));
    }
    if (this.current == null)
      throw NoSuchElementException_init();
    var item = ensureNotNull(this.current).next();
    this.stack.add_11rb$(this.getter(item));
    while (((tmp$_0 = this.current) != null ? tmp$_0.hasNext() : null) === false) {
      this.stack.removeAt_za3lpa$(get_lastIndex(this.stack));
    }
    return item;
  };
  TreeWalkDepthIterator.$metadata$ = {kind: Kind_CLASS, simpleName: 'TreeWalkDepthIterator', interfaces: [Iterator]};
  var ExceptionNames_instance = null;
  function InvalidatingPropertyDelegate(calculation) {
    this.calculation = calculation;
    this.dirty = false;
    this.value_xzgwaz$_0 = this.calculation();
  }
  function MutablePropertyDelegate() {
  }
  MutablePropertyDelegate.prototype.setValue_sq4zib$ = function (thisRef, prop, v) {
    this.value = v;
  };
  MutablePropertyDelegate.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutablePropertyDelegate', interfaces: [PropertyDelegate]};
  function PropertyDelegate() {
  }
  PropertyDelegate.prototype.getValue_n5byny$ = function (thisRef, prop) {
    return this.value;
  };
  PropertyDelegate.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PropertyDelegate', interfaces: []};
  function BackedByString() {
  }
  Object.defineProperty(BackedByString.prototype, 'isValid', {get: function () {
    return true;
  }});
  BackedByString.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BackedByString', interfaces: []};
  function Email(string) {
    this.string_6oob4z$_0 = string;
  }
  Object.defineProperty(Email.prototype, 'string', {get: function () {
    return this.string_6oob4z$_0;
  }});
  Object.defineProperty(Email.prototype, 'name', {get: function () {
    return substringBefore(substringBefore(this.string, 64, ''), 43, '');
  }});
  Object.defineProperty(Email.prototype, 'extension', {get: function () {
    var $receiver = substringBefore(substringAfter(this.string, 43, ''), 64, '');
    return !($receiver.length === 0) ? $receiver : null;
  }});
  Object.defineProperty(Email.prototype, 'domain', {get: function () {
    return substringAfter(this.string, 64, '');
  }});
  Object.defineProperty(Email.prototype, 'isValid', {get: function () {
    return isEmail(this.string);
  }});
  Email.prototype.copy_722sht$ = function (name, extension, domain) {
    if (name === void 0)
      name = this.name;
    if (extension === void 0)
      extension = this.extension;
    if (domain === void 0)
      domain = this.domain;
    return Email_init(name, extension, domain);
  };
  Email.$metadata$ = {kind: Kind_CLASS, simpleName: 'Email', interfaces: [BackedByString]};
  function Email_init(name, extension, domain, $this) {
    if (extension === void 0)
      extension = null;
    $this = $this || Object.create(Email.prototype);
    var tmp$;
    if (extension != null) {
      tmp$ = name + '+' + toString(extension) + '@' + domain;
    }
     else {
      tmp$ = name + '@' + domain;
    }
    Email.call($this, tmp$);
    return $this;
  }
  Email.prototype.unbox = function () {
    return this.string;
  };
  Email.prototype.toString = function () {
    return 'Email(string=' + Kotlin.toString(this.string) + ')';
  };
  Email.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  Email.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function isEmail($receiver) {
    return Regex_init('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])', RegexOption.IGNORE_CASE).matches_6bul2c$($receiver);
  }
  function Uri(string) {
    this.string_72ljcj$_0 = string;
  }
  Object.defineProperty(Uri.prototype, 'string', {get: function () {
    return this.string_72ljcj$_0;
  }});
  Object.defineProperty(Uri.prototype, 'isValid', {get: function () {
    var tmp$ = !isBlank(this.scheme);
    if (tmp$) {
      tmp$ = !isBlank(this.path);
    }
    return tmp$;
  }});
  Object.defineProperty(Uri.prototype, 'scheme', {get: function () {
    return substringBefore(this.string, 58);
  }});
  Object.defineProperty(Uri.prototype, 'authority', {get: function () {
    var tmp$;
    var $receiver = substringBefore(substringAfter_0(this.string, '://', ''), 47, '');
    return (tmp$ = !isBlank($receiver) ? $receiver : null) != null ? new UriAuthority(tmp$) : null;
  }});
  Object.defineProperty(Uri.prototype, 'path', {get: function () {
    return substringAfter_0(substringAfter_0(substringAfter(this.string, 58, ''), '//'), '/', '');
  }});
  Object.defineProperty(Uri.prototype, 'query', {get: function () {
    var tmp$;
    var $receiver = substringBefore(substringAfter(this.string, 63, ''), 35);
    return (tmp$ = !isBlank($receiver) ? $receiver : null) != null ? new UriQueryString(tmp$) : null;
  }});
  Object.defineProperty(Uri.prototype, 'fragment', {get: function () {
    var $receiver = substringAfter_0(this.string, '#', '');
    return !isBlank($receiver) ? $receiver : null;
  }});
  Uri.prototype.copy_mg06wt$ = function (scheme, authority, path, query, fragment) {
    if (scheme === void 0)
      scheme = this.scheme;
    if (authority === void 0)
      authority = this.authority;
    if (path === void 0)
      path = this.path;
    if (query === void 0)
      query = this.query;
    if (fragment === void 0)
      fragment = this.fragment;
    return Uri_init(scheme, authority, path, query, fragment);
  };
  Uri.$metadata$ = {kind: Kind_CLASS, simpleName: 'Uri', interfaces: [BackedByString]};
  function Uri_init(scheme, authority, path, query, fragment, $this) {
    if (authority === void 0)
      authority = null;
    if (query === void 0)
      query = null;
    if (fragment === void 0)
      fragment = null;
    $this = $this || Object.create(Uri.prototype);
    var $receiver = StringBuilder_init_0();
    $receiver.append_gw00v9$(scheme);
    $receiver.append_gw00v9$(':');
    if (authority != null) {
      $receiver.append_gw00v9$('//');
      $receiver.append_gw00v9$(authority.string);
      $receiver.append_gw00v9$('/');
    }
    $receiver.append_gw00v9$(path);
    if (query != null) {
      $receiver.append_s8itvh$(63);
      $receiver.append_gw00v9$(query.string);
    }
    if (fragment != null) {
      $receiver.append_s8itvh$(35);
      $receiver.append_gw00v9$(fragment);
    }
    Uri.call($this, $receiver.toString());
    return $this;
  }
  Uri.prototype.unbox = function () {
    return this.string;
  };
  Uri.prototype.toString = function () {
    return 'Uri(string=' + Kotlin.toString(this.string) + ')';
  };
  Uri.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  Uri.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function UriAuthority(string) {
    this.string_bvveqi$_0 = string;
  }
  Object.defineProperty(UriAuthority.prototype, 'string', {get: function () {
    return this.string_bvveqi$_0;
  }});
  Object.defineProperty(UriAuthority.prototype, 'userInfo', {get: function () {
    var $receiver = substringBefore(this.string, 64, '');
    return !($receiver.length === 0) ? $receiver : null;
  }});
  Object.defineProperty(UriAuthority.prototype, 'host', {get: function () {
    return substringBefore(substringAfter(this.string, 64), 58);
  }});
  Object.defineProperty(UriAuthority.prototype, 'port', {get: function () {
    var $receiver = substringAfter(this.string, 58, '');
    return !($receiver.length === 0) ? $receiver : null;
  }});
  UriAuthority.prototype.copy_744wau$ = function (userInfo, host, port) {
    if (userInfo === void 0)
      userInfo = this.userInfo;
    if (host === void 0)
      host = this.host;
    if (port === void 0)
      port = this.port;
    return UriAuthority_init(userInfo, host, port);
  };
  UriAuthority.$metadata$ = {kind: Kind_CLASS, simpleName: 'UriAuthority', interfaces: [BackedByString]};
  function UriAuthority_init(userInfo, host, port, $this) {
    if (userInfo === void 0)
      userInfo = null;
    if (port === void 0)
      port = null;
    $this = $this || Object.create(UriAuthority.prototype);
    var $receiver = StringBuilder_init_0();
    if (userInfo != null) {
      $receiver.append_gw00v9$(userInfo);
      $receiver.append_s8itvh$(64);
    }
    $receiver.append_gw00v9$(host);
    if (port != null) {
      $receiver.append_s8itvh$(58);
      $receiver.append_gw00v9$(port);
    }
    UriAuthority.call($this, $receiver.toString());
    return $this;
  }
  UriAuthority.prototype.unbox = function () {
    return this.string;
  };
  UriAuthority.prototype.toString = function () {
    return 'UriAuthority(string=' + Kotlin.toString(this.string) + ')';
  };
  UriAuthority.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  UriAuthority.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function UriQueryString(string) {
    this.string_cn2zq4$_0 = string;
  }
  Object.defineProperty(UriQueryString.prototype, 'string', {get: function () {
    return this.string_cn2zq4$_0;
  }});
  function UriQueryString$get_UriQueryString$parameters$lambda(it) {
    return to(urlUnescape(substringBefore(it, 61)), urlUnescape(substringAfter(it, 61, '')));
  }
  Object.defineProperty(UriQueryString.prototype, 'parameters', {get: function () {
    return map(splitToSequence(this.string, Kotlin.charArrayOf(38)), UriQueryString$get_UriQueryString$parameters$lambda);
  }});
  function UriQueryString$get_UriQueryString$escapedParameters$lambda(it) {
    return to(substringBefore(it, 61), substringAfter(it, 61, ''));
  }
  Object.defineProperty(UriQueryString.prototype, 'escapedParameters', {get: function () {
    return map(splitToSequence(this.string, Kotlin.charArrayOf(38)), UriQueryString$get_UriQueryString$escapedParameters$lambda);
  }});
  UriQueryString.$metadata$ = {kind: Kind_CLASS, simpleName: 'UriQueryString', interfaces: [BackedByString]};
  UriQueryString.prototype.unbox = function () {
    return this.string;
  };
  UriQueryString.prototype.toString = function () {
    return 'UriQueryString(string=' + Kotlin.toString(this.string) + ')';
  };
  UriQueryString.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  UriQueryString.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function urlUnescape($receiver) {
    var $receiver_0 = StringBuilder_init_0();
    var index = 0;
    while (index < $receiver_0.length) {
      var c = $receiver_0.charCodeAt(index);
      if (c === 37)
        if ((index + 2 | 0) < $receiver_0.length) {
          var startIndex = index + 1 | 0;
          var endIndex = index + 3 | 0;
          var substr = Kotlin.subSequence($receiver_0, startIndex, endIndex).toString();
          var charValue = toInt(substr, 16);
          $receiver_0.append_s8itvh$(toChar(charValue));
        }
         else {
          $receiver_0.append_s8itvh$(37);
        }
       else
        $receiver_0.append_s8itvh$(c);
      index = index + 1 | 0;
    }
    return $receiver_0.toString();
  }
  function AtomicReference(value_) {
    this.value = value_;
  }
  AtomicReference.prototype.compareAndSet_xwzc9q$ = function (expected, new_0) {
    if (expected === this.value) {
      this.value = new_0;
      return true;
    }
    return false;
  };
  AtomicReference.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicReference', interfaces: []};
  var WeakHashMap_Ids;
  function WeakHashMap() {
    this.id = this.genId();
    this.entries_4g1ejt$_0 = LinkedHashSet_init();
    this.keys_anhdrb$_0 = LinkedHashSet_init();
    this.values_ppntbt$_0 = ArrayList_init();
  }
  WeakHashMap.prototype.genId = function () {
    var tmp$;
    return 'weakmap-' + (tmp$ = WeakHashMap_Ids, WeakHashMap_Ids = tmp$ + 1 | 0, tmp$);
  };
  Object.defineProperty(WeakHashMap.prototype, 'size', {get: function () {
    return 2147483647;
  }});
  WeakHashMap.prototype.containsKey_11rb$ = function (key) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = key[this.id], Any) ? tmp$ : null;
    return (!equals($receiver, undefined) ? $receiver : null) != null;
  };
  WeakHashMap.prototype.containsValue_11rc$ = function (value) {
    return false;
  };
  WeakHashMap.prototype.get_11rb$ = function (key) {
    var tmp$, tmp$_0;
    var $receiver = Kotlin.isType(tmp$ = key[this.id], Any) ? tmp$ : null;
    var existing = (tmp$_0 = !equals($receiver, undefined) ? $receiver : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : null;
    return existing;
  };
  WeakHashMap.prototype.isEmpty = function () {
    return false;
  };
  Object.defineProperty(WeakHashMap.prototype, 'entries', {get: function () {
    return this.entries_4g1ejt$_0;
  }});
  Object.defineProperty(WeakHashMap.prototype, 'keys', {get: function () {
    return this.keys_anhdrb$_0;
  }});
  Object.defineProperty(WeakHashMap.prototype, 'values', {get: function () {
    return this.values_ppntbt$_0;
  }});
  WeakHashMap.prototype.clear = function () {
    this.id = this.genId();
  };
  WeakHashMap.prototype.put_xwzc9p$ = function (key, value) {
    var tmp$, tmp$_0;
    var $receiver = Kotlin.isType(tmp$ = key[this.id], Any) ? tmp$ : null;
    var existing = (tmp$_0 = !equals($receiver, undefined) ? $receiver : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : null;
    key[this.id] = value;
    return existing;
  };
  WeakHashMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var entry = tmp$_0.key;
      var value = tmp$_0.value;
      this.put_xwzc9p$(entry, value);
    }
  };
  WeakHashMap.prototype.remove_11rb$ = function (key) {
    var tmp$, tmp$_0;
    var $receiver = Kotlin.isType(tmp$ = key[this.id], Any) ? tmp$ : null;
    var existing = (tmp$_0 = !equals($receiver, undefined) ? $receiver : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : null;
    key[this.id] = null;
    return existing;
  };
  WeakHashMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'WeakHashMap', interfaces: [MutableMap]};
  function stackTraceString$lambda(it) {
    return it.cause;
  }
  function stackTraceString$lambda_0(it) {
    return it.toString() + ': ' + it.message;
  }
  function stackTraceString($receiver) {
    return joinToString_0(generateSequence($receiver, stackTraceString$lambda), '\n', void 0, void 0, void 0, void 0, stackTraceString$lambda_0);
  }
  function freeze($receiver) {
    return $receiver;
  }
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$kommon = package$lightningkite.kommon || (package$lightningkite.kommon = {});
  var package$collection = package$kommon.collection || (package$kommon.collection = {});
  package$collection.contentEquals_vm2uxd$ = contentEquals;
  package$collection.contentEquals_tvm4b5$ = contentEquals_0;
  package$collection.push_dwdffb$ = push;
  package$collection.pop_vvxzk3$ = pop;
  package$collection.reset_dwdffb$ = reset;
  package$collection.pushFrom_8lsfpt$ = pushFrom;
  package$collection.popFrom_dwdffb$ = popFrom;
  package$collection.SortedBag = SortedBag;
  package$collection.SortedBag_dahdeg$ = SortedBag_0;
  package$collection.treeWalkDepthSequence_u76s3l$ = treeWalkDepthSequence;
  package$collection.TreeWalkDepthIterator = TreeWalkDepthIterator;
  var package$exception = package$kommon.exception || (package$kommon.exception = {});
  var package$property = package$kommon.property || (package$kommon.property = {});
  package$property.InvalidatingPropertyDelegate = InvalidatingPropertyDelegate;
  package$property.MutablePropertyDelegate = MutablePropertyDelegate;
  package$property.PropertyDelegate = PropertyDelegate;
  var package$string = package$kommon.string || (package$kommon.string = {});
  package$string.BackedByString = BackedByString;
  package$string.Email_init_722sht$ = Email_init;
  package$string.Email = Email;
  package$string.isEmail_pdl1vz$ = isEmail;
  package$string.Uri_init_mg06wt$ = Uri_init;
  package$string.Uri = Uri;
  package$string.UriAuthority_init_744wau$ = UriAuthority_init;
  package$string.UriAuthority = UriAuthority;
  package$string.UriQueryString = UriQueryString;
  package$string.urlUnescape_pdl1vz$ = urlUnescape;
  var package$atomic = package$kommon.atomic || (package$kommon.atomic = {});
  package$atomic.AtomicReference = AtomicReference;
  package$collection.WeakHashMap = WeakHashMap;
  package$exception.stackTraceString_dbl4o4$ = stackTraceString;
  var package$native = package$kommon.native || (package$kommon.native = {});
  package$native.freeze_irb06o$ = freeze;
  InvalidatingPropertyDelegate.prototype.getValue_n5byny$ = PropertyDelegate.prototype.getValue_n5byny$;
  MutablePropertyDelegate.prototype.getValue_n5byny$ = PropertyDelegate.prototype.getValue_n5byny$;
  Object.defineProperty(UriAuthority.prototype, 'isValid', Object.getOwnPropertyDescriptor(BackedByString.prototype, 'isValid'));
  Object.defineProperty(UriQueryString.prototype, 'isValid', Object.getOwnPropertyDescriptor(BackedByString.prototype, 'isValid'));
  hexArray = Kotlin.charArrayOf(48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70);
  WeakHashMap_Ids = 0;
  return _;
}));

//# sourceMappingURL=kommon.js.map
