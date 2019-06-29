(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kommon'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kommon'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'lokalize'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'lokalize'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'lokalize'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'lokalize'.");
    }
    root.lokalize = factory(typeof lokalize === 'undefined' ? {} : lokalize, kotlin, kommon);
  }
}(this, function (_, Kotlin, $module$kommon) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var L0 = Kotlin.Long.ZERO;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var L31 = Kotlin.Long.fromInt(31);
  var L1 = Kotlin.Long.ONE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Comparable = Kotlin.kotlin.Comparable;
  var equals = Kotlin.equals;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var numberToInt = Kotlin.numberToInt;
  var Sequence = Kotlin.kotlin.sequences.Sequence;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var plus = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var Math_0 = Math;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var math = Kotlin.kotlin.math;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var L60000 = Kotlin.Long.fromInt(60000);
  var L3600000 = Kotlin.Long.fromInt(3600000);
  var L86400000 = Kotlin.Long.fromInt(86400000);
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var L1000000000 = Kotlin.Long.fromInt(1000000000);
  var L60000000000 = new Kotlin.Long(-129542144, 13);
  var L3600000000000 = new Kotlin.Long(817405952, 838);
  var L86400000000000 = new Kotlin.Long(-1857093632, 20116);
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L24 = Kotlin.Long.fromInt(24);
  var L65535 = Kotlin.Long.fromInt(65535);
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var throwCCE = Kotlin.throwCCE;
  DayOfWeek.prototype = Object.create(Enum.prototype);
  DayOfWeek.prototype.constructor = DayOfWeek;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  function Locale() {
    Locale$Companion_getInstance();
  }
  function Locale$Companion() {
    Locale$Companion_instance = this;
  }
  Object.defineProperty(Locale$Companion.prototype, 'default', {get: function () {
    return DefaultLocale;
  }});
  Locale$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Locale$Companion_instance = null;
  function Locale$Companion_getInstance() {
    if (Locale$Companion_instance === null) {
      new Locale$Companion();
    }
    return Locale$Companion_instance;
  }
  Locale.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Locale', interfaces: []};
  function Geohash(bits) {
    Geohash$Companion_getInstance();
    this.bits = bits;
  }
  Geohash.prototype.compareTo_11rb$ = function (other) {
    return this.bits.compareTo_11rb$(other.bits);
  };
  function Geohash$Companion() {
    Geohash$Companion_instance = this;
    this.chars = Kotlin.charArrayOf(48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 98, 99, 100, 101, 102, 103, 104, 106, 107, 109, 110, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
  }
  Geohash$Companion.prototype.fromChar_s8itvh$ = defineInlineFunction('lokalize.com.lightningkite.lokalize.location.Geohash.Companion.fromChar_s8itvh$', function (char) {
    if (char <= 57)
      return char - 48;
    else if (char < 106)
      return char - 98 + 10 | 0;
    else if (char < 109)
      return char - 106 + 17 | 0;
    else if (char < 112)
      return char - 109 + 19 | 0;
    else
      return char - 112 + 21 | 0;
  });
  Geohash$Companion.prototype.fromLatLng_lu1900$ = function (latitude, longitude) {
    var bits = L0;
    var lower = -90.0;
    var upper = 90.0;
    for (var latBit = 0; latBit <= 31; latBit++) {
      var middle = (upper + lower) / 2;
      if (latitude >= middle) {
        var $receiver = bits;
        var index = (latBit * 2 | 0) + 1 | 0;
        bits = $receiver.or(L1.shiftLeft(63 - index | 0));
        lower = middle;
      }
       else {
        var $receiver_0 = bits;
        var index_0 = (latBit * 2 | 0) + 1 | 0;
        bits = $receiver_0.and(L1.shiftLeft(63 - index_0 | 0).inv());
        upper = middle;
      }
    }
    lower = -180.0;
    upper = 180.0;
    for (var lonBit = 0; lonBit <= 31; lonBit++) {
      var middle_0 = (upper + lower) / 2;
      if (longitude >= middle_0) {
        var $receiver_1 = bits;
        var index_1 = lonBit * 2 | 0;
        bits = $receiver_1.or(L1.shiftLeft(63 - index_1 | 0));
        lower = middle_0;
      }
       else {
        var $receiver_2 = bits;
        var index_2 = lonBit * 2 | 0;
        bits = $receiver_2.and(L1.shiftLeft(63 - index_2 | 0).inv());
        upper = middle_0;
      }
    }
    return new Geohash(bits);
  };
  Geohash$Companion.prototype.fromString_61zpoe$ = function (string) {
    var tmp$;
    var bits = L0;
    var position = 59;
    var stringIndex = 0;
    tmp$ = iterator(string);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var tmp$_0 = bits;
      var fromChar_s8itvh$result;
      if (c <= 57) {
        fromChar_s8itvh$result = c - 48;
      }
       else if (c < 106) {
        fromChar_s8itvh$result = c - 98 + 10 | 0;
      }
       else if (c < 109) {
        fromChar_s8itvh$result = c - 106 + 17 | 0;
      }
       else if (c < 112) {
        fromChar_s8itvh$result = c - 109 + 19 | 0;
      }
       else {
        fromChar_s8itvh$result = c - 112 + 21 | 0;
      }
      bits = tmp$_0.or(Kotlin.Long.fromInt(fromChar_s8itvh$result).shiftLeft(position));
      position = position - 5 | 0;
      stringIndex = stringIndex + 1 | 0;
      if (position < 0)
        break;
    }
    if (stringIndex < string.length) {
      var tmp$_1 = bits;
      var char = string.charCodeAt(stringIndex);
      var fromChar_s8itvh$result_0;
      if (char <= 57) {
        fromChar_s8itvh$result_0 = char - 48;
      }
       else if (char < 106) {
        fromChar_s8itvh$result_0 = char - 98 + 10 | 0;
      }
       else if (char < 109) {
        fromChar_s8itvh$result_0 = char - 106 + 17 | 0;
      }
       else if (char < 112) {
        fromChar_s8itvh$result_0 = char - 109 + 19 | 0;
      }
       else {
        fromChar_s8itvh$result_0 = char - 112 + 21 | 0;
      }
      bits = tmp$_1.or(Kotlin.Long.fromInt(fromChar_s8itvh$result_0).shiftRight(1));
    }
    return new Geohash(bits);
  };
  Geohash$Companion.prototype.fromLatLongBits_vux9f0$ = function (latitude, longitude) {
    var bits = L0;
    for (var index = 0; index <= 31; index++) {
      if ((longitude >>> 31 - index & 1) === 1) {
        var $receiver = bits;
        var index_0 = index * 2 | 0;
        bits = $receiver.or(L1.shiftLeft(63 - index_0 | 0));
      }
      if ((latitude >>> 31 - index & 1) === 1) {
        var $receiver_0 = bits;
        var index_1 = (index * 2 | 0) + 1 | 0;
        bits = $receiver_0.or(L1.shiftLeft(63 - index_1 | 0));
      }
    }
    return new Geohash(bits);
  };
  Geohash$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Geohash$Companion_instance = null;
  function Geohash$Companion_getInstance() {
    if (Geohash$Companion_instance === null) {
      new Geohash$Companion();
    }
    return Geohash$Companion_instance;
  }
  Object.defineProperty(Geohash.prototype, 'latitude', {get: function () {
    var lower = -90.0;
    var upper = 90.0;
    for (var latBit = 0; latBit <= 31; latBit++) {
      var middle = (upper + lower) / 2;
      var $receiver = this.bits;
      var index = (latBit * 2 | 0) + 1 | 0;
      if (equals($receiver.shiftRightUnsigned(63 - index | 0).and(L1), L1)) {
        lower = middle;
      }
       else {
        upper = middle;
      }
    }
    return lower;
  }});
  Object.defineProperty(Geohash.prototype, 'longitude', {get: function () {
    var lower = -180.0;
    var upper = 180.0;
    for (var lonBit = 0; lonBit <= 31; lonBit++) {
      var middle = (upper + lower) / 2;
      var $receiver = this.bits;
      var index = lonBit * 2 | 0;
      if (equals($receiver.shiftRightUnsigned(63 - index | 0).and(L1), L1)) {
        lower = middle;
      }
       else {
        upper = middle;
      }
    }
    return lower;
  }});
  Geohash.prototype.toString = function () {
    var builder = StringBuilder_init();
    for (var i = 59; i >= 0; i -= 5) {
      builder.append_s8itvh$(Geohash$Companion_getInstance().chars[this.bits.shiftRightUnsigned(i).toInt() & 31]);
    }
    builder.append_s8itvh$(Geohash$Companion_getInstance().chars[this.bits.shiftLeft(1).and(L31).toInt()]);
    return builder.toString();
  };
  Object.defineProperty(Geohash.prototype, 'latitudeBits', {get: function () {
    var partialBits = 0;
    for (var index = 0; index <= 31; index++) {
      var tmp$ = partialBits;
      var $receiver = this.bits;
      var index_0 = (index * 2 | 0) + 1 | 0;
      partialBits = equals($receiver.shiftRightUnsigned(63 - index_0 | 0).and(L1), L1) ? tmp$ | 1 << 31 - index : tmp$ & ~(1 << 31 - index);
    }
    return partialBits;
  }});
  Object.defineProperty(Geohash.prototype, 'longitudeBits', {get: function () {
    var partialBits = 0;
    for (var index = 0; index <= 31; index++) {
      var tmp$ = partialBits;
      var $receiver = this.bits;
      var index_0 = index * 2 | 0;
      partialBits = equals($receiver.shiftRightUnsigned(63 - index_0 | 0).and(L1), L1) ? tmp$ | 1 << 31 - index : tmp$ & ~(1 << 31 - index);
    }
    return partialBits;
  }});
  Geohash.prototype.applyLatitudeBits_za3lpa$ = function (latitudeBits) {
    var newBits = this.bits;
    for (var index = 0; index <= 31; index++) {
      var tmp$ = newBits;
      var tmp$_0 = (index * 2 | 0) + 1 | 0;
      newBits = (latitudeBits >>> 31 - index & 1) === 1 ? tmp$.or(L1.shiftLeft(63 - tmp$_0 | 0)) : tmp$.and(L1.shiftLeft(63 - tmp$_0 | 0).inv());
    }
    return new Geohash(newBits);
  };
  Geohash.prototype.applyLongitudeBits_za3lpa$ = function (longitudeBits) {
    var newBits = this.bits;
    for (var index = 0; index <= 31; index++) {
      var tmp$ = newBits;
      var tmp$_0 = index * 2 | 0;
      newBits = (longitudeBits >>> 31 - index & 1) === 1 ? tmp$.or(L1.shiftLeft(63 - tmp$_0 | 0)) : tmp$.and(L1.shiftLeft(63 - tmp$_0 | 0).inv());
    }
    return new Geohash(newBits);
  };
  Geohash.prototype.north_za3lpa$ = function (bitsResolution) {
    return this.applyLatitudeBits_za3lpa$(this.latitudeBits + (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.south_za3lpa$ = function (bitsResolution) {
    return this.applyLatitudeBits_za3lpa$(this.latitudeBits - (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.east_za3lpa$ = function (bitsResolution) {
    return this.applyLongitudeBits_za3lpa$(this.longitudeBits + (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.west_za3lpa$ = function (bitsResolution) {
    return this.applyLongitudeBits_za3lpa$(this.longitudeBits - (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.northEast_za3lpa$ = function (bitsResolution) {
    return Geohash$Companion_getInstance().fromLatLongBits_vux9f0$(this.latitudeBits + (1 << 31 - bitsResolution) | 0, this.longitudeBits + (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.northWest_za3lpa$ = function (bitsResolution) {
    return Geohash$Companion_getInstance().fromLatLongBits_vux9f0$(this.latitudeBits + (1 << 31 - bitsResolution) | 0, this.longitudeBits - (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.southEast_za3lpa$ = function (bitsResolution) {
    return Geohash$Companion_getInstance().fromLatLongBits_vux9f0$(this.latitudeBits - (1 << 31 - bitsResolution) | 0, this.longitudeBits + (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.southWest_za3lpa$ = function (bitsResolution) {
    return Geohash$Companion_getInstance().fromLatLongBits_vux9f0$(this.latitudeBits - (1 << 31 - bitsResolution) | 0, this.longitudeBits - (1 << 31 - bitsResolution) | 0);
  };
  Geohash.prototype.lower_za3lpa$ = function (bitsResolution) {
    return this.bits.and(L1.shiftLeft(64 - (bitsResolution * 2 | 0) | 0).subtract(Kotlin.Long.fromInt(1)).inv());
  };
  Geohash.prototype.upper_za3lpa$ = function (bitsResolution) {
    return this.bits.or(L1.shiftLeft(64 - (bitsResolution * 2 | 0) | 0).subtract(Kotlin.Long.fromInt(1)));
  };
  Geohash.prototype.range_za3lpa$ = function (bitsResolution) {
    return this.lower_za3lpa$(bitsResolution).rangeTo(this.upper_za3lpa$(bitsResolution));
  };
  Geohash.$metadata$ = {kind: Kind_CLASS, simpleName: 'Geohash', interfaces: [Comparable]};
  Geohash.prototype.unbox = function () {
    return this.bits;
  };
  Geohash.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bits) | 0;
    return result;
  };
  Geohash.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bits, other.bits))));
  };
  var GeohashCoverage$Companion_instance = null;
  var World_instance = null;
  function Date_0(daysSinceEpoch) {
    Date$Companion_getInstance();
    this.daysSinceEpoch = daysSinceEpoch;
  }
  Date_0.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.daysSinceEpoch, other.daysSinceEpoch);
  };
  function Date$Companion() {
    Date$Companion_instance = this;
    this.MIN = new Date_0(-2147483648);
    this.MAX = new Date_0(2147483647);
  }
  Date$Companion.prototype.iso8601_61zpoe$ = function (string) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return Date_init(new Year((tmp$ = toIntOrNull(substringBefore(string, 45))) != null ? tmp$ : 1970), Month$values()[(tmp$_1 = (tmp$_0 = toIntOrNull(substringBefore(substringAfter(string, 45), 45))) != null ? tmp$_0 - 1 | 0 : null) != null ? tmp$_1 : 0], (tmp$_2 = toIntOrNull(substringAfterLast(string, 45))) != null ? tmp$_2 : 0);
  };
  Date$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Date$Companion_instance = null;
  function Date$Companion_getInstance() {
    if (Date$Companion_instance === null) {
      new Date$Companion();
    }
    return Date$Companion_instance;
  }
  Object.defineProperty(Date_0.prototype, 'yearAndDayInYear_0', {get: function () {
    var remainingDays = this.daysSinceEpoch + 719528 - 1 | 0;
    var setsOf400Years = remainingDays / 146097 | 0;
    remainingDays = remainingDays - (setsOf400Years * 146097 | 0) | 0;
    var setsOf100Years = remainingDays / 36524 | 0;
    remainingDays = remainingDays - (setsOf100Years * 36524 | 0) | 0;
    var setsOf4Years = remainingDays / 1461 | 0;
    remainingDays = remainingDays - (setsOf4Years * 1461 | 0) | 0;
    var extraYears = remainingDays / 365 | 0;
    remainingDays = remainingDays - (extraYears * 365 | 0) | 0;
    var year = new Year((setsOf400Years * 400 | 0) + (setsOf100Years * 100 | 0) + (setsOf4Years * 4 | 0) + extraYears | 0);
    var daysIntoYear = year.isLeap && extraYears !== 4 && setsOf4Years !== 25 && setsOf100Years !== 4 ? remainingDays + 1 | 0 : remainingDays;
    return YearAndDayInYear$Companion_getInstance().make_6wzakl$(year, daysIntoYear);
  }});
  Date_0.prototype.remPositive_0 = function ($receiver, other) {
    return ($receiver % other + other | 0) % other;
  };
  Object.defineProperty(Date_0.prototype, 'dayOfWeek', {get: function () {
    return DayOfWeek$values()[((this.daysSinceEpoch + 4 | 0) % 7 + 7 | 0) % 7];
  }});
  Date_0.prototype.toNextDayOfWeek_7u2rin$ = function (value) {
    var current = this.dayOfWeek;
    return new Date_0(this.daysSinceEpoch + ((value.ordinal + 7 - current.ordinal | 0) % 7 + 7 | 0) % 7 | 0);
  };
  Date_0.prototype.toDayInSameWeek_7u2rin$ = function (value) {
    var current = this.dayOfWeek;
    return new Date_0(this.daysSinceEpoch + value.ordinal - current.ordinal | 0);
  };
  Object.defineProperty(Date_0.prototype, 'dayOfYear', {get: function () {
    return this.yearAndDayInYear_0.dayInYear;
  }});
  Date_0.prototype.toDayInSameYear_za3lpa$ = function (value) {
    var current = this.dayOfYear;
    return new Date_0(this.daysSinceEpoch + value - current | 0);
  };
  Object.defineProperty(Date_0.prototype, 'dayOfMonth', {get: function () {
    return get_dayOfMonth(this.yearAndDayInYear_0);
  }});
  Date_0.prototype.toDayInMonth_za3lpa$ = function (value) {
    var current = this.dayOfMonth;
    return new Date_0(this.daysSinceEpoch + value - current | 0);
  };
  Object.defineProperty(Date_0.prototype, 'month', {get: function () {
    return get_month(this.yearAndDayInYear_0);
  }});
  Date_0.prototype.toMonthInYear_xywn7a$ = function (value) {
    var year = this.year;
    return Date_init(year, value, coerceAtMost(this.dayOfMonth, year.isLeap ? value.daysLeap : value.days));
  };
  Object.defineProperty(Date_0.prototype, 'year', {get: function () {
    return this.yearAndDayInYear_0.year;
  }});
  Date_0.prototype.iso8601 = function () {
    return padStart(this.year.sinceAD.toString(), 4, 48) + '-' + padStart((this.month.ordinal + 1 | 0).toString(), 2, 48) + '-' + padStart(this.dayOfMonth.toString(), 2, 48);
  };
  Date_0.prototype.minus_a9kdr0$ = function (other) {
    return new Duration(Kotlin.Long.fromInt(this.daysSinceEpoch - other.daysSinceEpoch | 0).multiply(TimeConstants_getInstance().MS_PER_DAY));
  };
  Date_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Date', interfaces: [Comparable]};
  function Date_init(year, month, day, $this) {
    $this = $this || Object.create(Date_0.prototype);
    Date_0.call($this, -719527 + (year.sinceAD * 365 | 0) + (year.sinceAD / 4 | 0) - (year.sinceAD / 100 | 0) + (year.sinceAD / 400 | 0) + (year.isLeap ? -1 : 0) + (year.isLeap ? month.startDayInLeapYear : month.startDayInNormalYear) + (day - 1) | 0);
    return $this;
  }
  Date_0.prototype.unbox = function () {
    return this.daysSinceEpoch;
  };
  Date_0.prototype.toString = function () {
    return 'Date(daysSinceEpoch=' + Kotlin.toString(this.daysSinceEpoch) + ')';
  };
  Date_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.daysSinceEpoch) | 0;
    return result;
  };
  Date_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.daysSinceEpoch, other.daysSinceEpoch))));
  };
  function DateTime(date, time) {
    DateTime$Companion_getInstance();
    this.date = date;
    this.time = time;
  }
  DateTime.prototype.compareTo_11rb$ = function (other) {
    var dateResult = this.date.compareTo_11rb$(other.date);
    if (dateResult !== 0)
      return dateResult;
    return this.time.compareTo_11rb$(other.time);
  };
  function DateTime$Companion() {
    DateTime$Companion_instance = this;
  }
  DateTime$Companion.prototype.iso8601_61zpoe$ = function (string) {
    return new DateTime(Date$Companion_getInstance().iso8601_61zpoe$(substringBefore(string, 84)), Time$Companion_getInstance().iso8601_61zpoe$(substringBefore(substringAfterLast(string, 84), 43)));
  };
  DateTime$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var DateTime$Companion_instance = null;
  function DateTime$Companion_getInstance() {
    if (DateTime$Companion_instance === null) {
      new DateTime$Companion();
    }
    return DateTime$Companion_instance;
  }
  DateTime.prototype.toTimeStamp_vcl74a$ = function (offset) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    return TimeStamp_init(this.date, this.time, offset);
  };
  DateTime.prototype.iso8601_vcl74a$ = function (offset) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    return this.date.iso8601() + 'T' + this.time.iso8601() + '+' + padStart(offset.hours.toString(), 2, 48) + ':' + padStart(offset.minutes.toString(), 2, 48);
  };
  DateTime.prototype.minus_mwtq35$ = function (other) {
    return this.date.minus_a9kdr0$(other.date).plus_vcl74a$(this.time.minus_a9a071$(other.time));
  };
  DateTime.$metadata$ = {kind: Kind_CLASS, simpleName: 'DateTime', interfaces: [Comparable]};
  DateTime.prototype.component1 = function () {
    return this.date;
  };
  DateTime.prototype.component2 = function () {
    return this.time;
  };
  DateTime.prototype.copy_8nunyj$ = function (date, time) {
    return new DateTime(date === void 0 ? this.date : date, time === void 0 ? this.time : time);
  };
  DateTime.prototype.toString = function () {
    return 'DateTime(date=' + Kotlin.toString(this.date) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  DateTime.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  DateTime.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.time, other.time)))));
  };
  function DayOfWeek(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$Sunday_instance = new DayOfWeek('Sunday', 0);
    DayOfWeek$Monday_instance = new DayOfWeek('Monday', 1);
    DayOfWeek$Tuesday_instance = new DayOfWeek('Tuesday', 2);
    DayOfWeek$Wednesday_instance = new DayOfWeek('Wednesday', 3);
    DayOfWeek$Thursday_instance = new DayOfWeek('Thursday', 4);
    DayOfWeek$Friday_instance = new DayOfWeek('Friday', 5);
    DayOfWeek$Saturday_instance = new DayOfWeek('Saturday', 6);
  }
  var DayOfWeek$Sunday_instance;
  function DayOfWeek$Sunday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Sunday_instance;
  }
  var DayOfWeek$Monday_instance;
  function DayOfWeek$Monday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Monday_instance;
  }
  var DayOfWeek$Tuesday_instance;
  function DayOfWeek$Tuesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Tuesday_instance;
  }
  var DayOfWeek$Wednesday_instance;
  function DayOfWeek$Wednesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Wednesday_instance;
  }
  var DayOfWeek$Thursday_instance;
  function DayOfWeek$Thursday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Thursday_instance;
  }
  var DayOfWeek$Friday_instance;
  function DayOfWeek$Friday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Friday_instance;
  }
  var DayOfWeek$Saturday_instance;
  function DayOfWeek$Saturday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Saturday_instance;
  }
  DayOfWeek.$metadata$ = {kind: Kind_CLASS, simpleName: 'DayOfWeek', interfaces: [Enum]};
  function DayOfWeek$values() {
    return [DayOfWeek$Sunday_getInstance(), DayOfWeek$Monday_getInstance(), DayOfWeek$Tuesday_getInstance(), DayOfWeek$Wednesday_getInstance(), DayOfWeek$Thursday_getInstance(), DayOfWeek$Friday_getInstance(), DayOfWeek$Saturday_getInstance()];
  }
  DayOfWeek.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'Sunday':
        return DayOfWeek$Sunday_getInstance();
      case 'Monday':
        return DayOfWeek$Monday_getInstance();
      case 'Tuesday':
        return DayOfWeek$Tuesday_getInstance();
      case 'Wednesday':
        return DayOfWeek$Wednesday_getInstance();
      case 'Thursday':
        return DayOfWeek$Thursday_getInstance();
      case 'Friday':
        return DayOfWeek$Friday_getInstance();
      case 'Saturday':
        return DayOfWeek$Saturday_getInstance();
      default:throwISE('No enum constant com.lightningkite.lokalize.time.DayOfWeek.' + name);
    }
  }
  DayOfWeek.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function Duration(milliseconds) {
    Duration$Companion_getInstance();
    this.milliseconds = milliseconds;
  }
  Duration.prototype.compareTo_11rb$ = function (other) {
    return this.milliseconds.compareTo_11rb$(other.milliseconds);
  };
  function Duration$Companion() {
    Duration$Companion_instance = this;
    this.zero = new Duration(L0);
  }
  Duration$Companion.prototype.milliseconds_s8cxhz$ = function (milliseconds) {
    return new Duration(milliseconds);
  };
  Duration$Companion.prototype.seconds_s8cxhz$ = function (seconds) {
    return new Duration(seconds.multiply(TimeConstants_getInstance().MS_PER_SECOND));
  };
  Duration$Companion.prototype.minutes_s8cxhz$ = function (minutes) {
    return new Duration(minutes.multiply(TimeConstants_getInstance().MS_PER_MINUTE));
  };
  Duration$Companion.prototype.hours_s8cxhz$ = function (hours) {
    return new Duration(hours.multiply(TimeConstants_getInstance().MS_PER_HOUR));
  };
  Duration$Companion.prototype.days_s8cxhz$ = function (days) {
    return new Duration(days.multiply(TimeConstants_getInstance().MS_PER_DAY));
  };
  Duration$Companion.prototype.seconds_mx4ult$ = function (seconds) {
    return new Duration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().MS_PER_SECOND.toNumber()));
  };
  Duration$Companion.prototype.minutes_mx4ult$ = function (minutes) {
    return new Duration(Kotlin.Long.fromNumber(minutes * TimeConstants_getInstance().MS_PER_MINUTE.toNumber()));
  };
  Duration$Companion.prototype.hours_mx4ult$ = function (hours) {
    return new Duration(Kotlin.Long.fromNumber(hours * TimeConstants_getInstance().MS_PER_HOUR.toNumber()));
  };
  Duration$Companion.prototype.days_mx4ult$ = function (days) {
    return new Duration(Kotlin.Long.fromNumber(days * TimeConstants_getInstance().MS_PER_DAY.toNumber()));
  };
  Duration$Companion.prototype.seconds_14dthe$ = function (seconds) {
    return new Duration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().MS_PER_SECOND.toNumber()));
  };
  Duration$Companion.prototype.minutes_14dthe$ = function (minutes) {
    return new Duration(Kotlin.Long.fromNumber(minutes * TimeConstants_getInstance().MS_PER_MINUTE.toNumber()));
  };
  Duration$Companion.prototype.hours_14dthe$ = function (hours) {
    return new Duration(Kotlin.Long.fromNumber(hours * TimeConstants_getInstance().MS_PER_HOUR.toNumber()));
  };
  Duration$Companion.prototype.days_14dthe$ = function (days) {
    return new Duration(Kotlin.Long.fromNumber(days * TimeConstants_getInstance().MS_PER_DAY.toNumber()));
  };
  Duration$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Duration$Companion_instance = null;
  function Duration$Companion_getInstance() {
    if (Duration$Companion_instance === null) {
      new Duration$Companion();
    }
    return Duration$Companion_instance;
  }
  Object.defineProperty(Duration.prototype, 'seconds', {get: function () {
    return this.milliseconds.div(TimeConstants_getInstance().MS_PER_SECOND);
  }});
  Object.defineProperty(Duration.prototype, 'minutes', {get: function () {
    return this.milliseconds.div(TimeConstants_getInstance().MS_PER_MINUTE);
  }});
  Object.defineProperty(Duration.prototype, 'hours', {get: function () {
    return this.milliseconds.div(TimeConstants_getInstance().MS_PER_HOUR);
  }});
  Object.defineProperty(Duration.prototype, 'days', {get: function () {
    return this.milliseconds.div(TimeConstants_getInstance().MS_PER_DAY);
  }});
  Object.defineProperty(Duration.prototype, 'secondsDouble', {get: function () {
    return this.milliseconds.toNumber() / TimeConstants_getInstance().MS_PER_SECOND.toNumber();
  }});
  Object.defineProperty(Duration.prototype, 'minutesDouble', {get: function () {
    return this.milliseconds.toNumber() / TimeConstants_getInstance().MS_PER_MINUTE.toNumber();
  }});
  Object.defineProperty(Duration.prototype, 'hoursDouble', {get: function () {
    return this.milliseconds.toNumber() / TimeConstants_getInstance().MS_PER_HOUR.toNumber();
  }});
  Object.defineProperty(Duration.prototype, 'daysDouble', {get: function () {
    return this.milliseconds.toNumber() / TimeConstants_getInstance().MS_PER_DAY.toNumber();
  }});
  Duration.prototype.plus_oidni2$ = function (other) {
    return new Duration(this.milliseconds.add(other.milliseconds));
  };
  Duration.prototype.minus_oidni2$ = function (other) {
    return new Duration(this.milliseconds.subtract(other.milliseconds));
  };
  Duration.prototype.plus_vcl74a$ = function (other) {
    return new Duration(this.milliseconds.add(other.milliseconds));
  };
  Duration.prototype.minus_vcl74a$ = function (other) {
    return new Duration(this.milliseconds.subtract(other.milliseconds));
  };
  Duration.prototype.times_za3lpa$ = function (scale) {
    return new Duration(this.milliseconds.multiply(Kotlin.Long.fromInt(scale)));
  };
  Duration.prototype.times_mx4ult$ = function (scale) {
    return new Duration(Kotlin.Long.fromNumber(this.milliseconds.toNumber() * scale));
  };
  Duration.prototype.times_14dthe$ = function (scale) {
    return new Duration(Kotlin.Long.fromNumber(this.milliseconds.toNumber() * scale));
  };
  Duration.prototype.div_za3lpa$ = function (scale) {
    return new Duration(this.milliseconds.div(Kotlin.Long.fromInt(scale)));
  };
  Duration.prototype.div_mx4ult$ = function (scale) {
    return new Duration(Kotlin.Long.fromNumber(this.milliseconds.toNumber() / scale));
  };
  Duration.prototype.div_14dthe$ = function (scale) {
    return new Duration(Kotlin.Long.fromNumber(this.milliseconds.toNumber() / scale));
  };
  Duration.prototype.toShortDuration = function () {
    return ShortDuration$Companion_getInstance().milliseconds_s8cxhz$(this.milliseconds);
  };
  Duration.$metadata$ = {kind: Kind_CLASS, simpleName: 'Duration', interfaces: [Comparable]};
  Duration.prototype.unbox = function () {
    return this.milliseconds;
  };
  Duration.prototype.toString = function () {
    return 'Duration(milliseconds=' + Kotlin.toString(this.milliseconds) + ')';
  };
  Duration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.milliseconds) | 0;
    return result;
  };
  Duration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.milliseconds, other.milliseconds))));
  };
  function Month(name, ordinal, days, daysLeap) {
    if (daysLeap === void 0)
      daysLeap = days;
    Enum.call(this);
    this.days = days;
    this.daysLeap = daysLeap;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$January_instance = new Month('January', 0, 31);
    Month$February_instance = new Month('February', 1, 28, 29);
    Month$March_instance = new Month('March', 2, 31);
    Month$April_instance = new Month('April', 3, 30);
    Month$May_instance = new Month('May', 4, 31);
    Month$June_instance = new Month('June', 5, 30);
    Month$July_instance = new Month('July', 6, 31);
    Month$August_instance = new Month('August', 7, 31);
    Month$September_instance = new Month('September', 8, 30);
    Month$October_instance = new Month('October', 9, 31);
    Month$November_instance = new Month('November', 10, 30);
    Month$December_instance = new Month('December', 11, 31);
    Month$Companion_getInstance();
  }
  var Month$January_instance;
  function Month$January_getInstance() {
    Month_initFields();
    return Month$January_instance;
  }
  var Month$February_instance;
  function Month$February_getInstance() {
    Month_initFields();
    return Month$February_instance;
  }
  var Month$March_instance;
  function Month$March_getInstance() {
    Month_initFields();
    return Month$March_instance;
  }
  var Month$April_instance;
  function Month$April_getInstance() {
    Month_initFields();
    return Month$April_instance;
  }
  var Month$May_instance;
  function Month$May_getInstance() {
    Month_initFields();
    return Month$May_instance;
  }
  var Month$June_instance;
  function Month$June_getInstance() {
    Month_initFields();
    return Month$June_instance;
  }
  var Month$July_instance;
  function Month$July_getInstance() {
    Month_initFields();
    return Month$July_instance;
  }
  var Month$August_instance;
  function Month$August_getInstance() {
    Month_initFields();
    return Month$August_instance;
  }
  var Month$September_instance;
  function Month$September_getInstance() {
    Month_initFields();
    return Month$September_instance;
  }
  var Month$October_instance;
  function Month$October_getInstance() {
    Month_initFields();
    return Month$October_instance;
  }
  var Month$November_instance;
  function Month$November_getInstance() {
    Month_initFields();
    return Month$November_instance;
  }
  var Month$December_instance;
  function Month$December_getInstance() {
    Month_initFields();
    return Month$December_instance;
  }
  function Month$Companion() {
    Month$Companion_instance = this;
    var dayCounter = {v: 0};
    var array = new Int32Array(12);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var result = dayCounter.v;
      dayCounter.v = dayCounter.v + Month$values()[i].daysLeap | 0;
      array[i] = result;
    }
    this.monthStartInLeapYear = array;
    var dayCounter_0 = {v: 0};
    var array_0 = new Int32Array(12);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var result_0 = dayCounter_0.v;
      dayCounter_0.v = dayCounter_0.v + Month$values()[i_0].days | 0;
      array_0[i_0] = result_0;
    }
    this.monthStartInNormalYear = array_0;
  }
  Month$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Object.defineProperty(Month.prototype, 'startDayInLeapYear', {get: function () {
    return Month$Companion_getInstance().monthStartInLeapYear[this.ordinal];
  }});
  Object.defineProperty(Month.prototype, 'startDayInNormalYear', {get: function () {
    return Month$Companion_getInstance().monthStartInNormalYear[this.ordinal];
  }});
  Month.$metadata$ = {kind: Kind_CLASS, simpleName: 'Month', interfaces: [Enum]};
  function Month$values() {
    return [Month$January_getInstance(), Month$February_getInstance(), Month$March_getInstance(), Month$April_getInstance(), Month$May_getInstance(), Month$June_getInstance(), Month$July_getInstance(), Month$August_getInstance(), Month$September_getInstance(), Month$October_getInstance(), Month$November_getInstance(), Month$December_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'January':
        return Month$January_getInstance();
      case 'February':
        return Month$February_getInstance();
      case 'March':
        return Month$March_getInstance();
      case 'April':
        return Month$April_getInstance();
      case 'May':
        return Month$May_getInstance();
      case 'June':
        return Month$June_getInstance();
      case 'July':
        return Month$July_getInstance();
      case 'August':
        return Month$August_getInstance();
      case 'September':
        return Month$September_getInstance();
      case 'October':
        return Month$October_getInstance();
      case 'November':
        return Month$November_getInstance();
      case 'December':
        return Month$December_getInstance();
      default:throwISE('No enum constant com.lightningkite.lokalize.time.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function ShortDuration(nanoseconds) {
    ShortDuration$Companion_getInstance();
    this.nanoseconds = nanoseconds;
  }
  ShortDuration.prototype.compareTo_11rb$ = function (other) {
    return this.nanoseconds.compareTo_11rb$(other.nanoseconds);
  };
  function ShortDuration$Companion() {
    ShortDuration$Companion_instance = this;
  }
  ShortDuration$Companion.prototype.nanoseconds_s8cxhz$ = function (nanoseconds) {
    return new ShortDuration(nanoseconds);
  };
  ShortDuration$Companion.prototype.milliseconds_s8cxhz$ = function (milliseconds) {
    return new ShortDuration(milliseconds.multiply(TimeConstants_getInstance().NS_PER_MILLISECOND));
  };
  ShortDuration$Companion.prototype.seconds_s8cxhz$ = function (seconds) {
    return new ShortDuration(seconds.multiply(TimeConstants_getInstance().NS_PER_SECOND));
  };
  ShortDuration$Companion.prototype.minutes_s8cxhz$ = function (seconds) {
    return new ShortDuration(seconds.multiply(TimeConstants_getInstance().NS_PER_MINUTE));
  };
  ShortDuration$Companion.prototype.hours_s8cxhz$ = function (seconds) {
    return new ShortDuration(seconds.multiply(TimeConstants_getInstance().NS_PER_HOUR));
  };
  ShortDuration$Companion.prototype.days_s8cxhz$ = function (seconds) {
    return new ShortDuration(seconds.multiply(TimeConstants_getInstance().NS_PER_DAY));
  };
  ShortDuration$Companion.prototype.seconds_mx4ult$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_SECOND.toNumber()));
  };
  ShortDuration$Companion.prototype.minutes_mx4ult$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_MINUTE.toNumber()));
  };
  ShortDuration$Companion.prototype.hours_mx4ult$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_HOUR.toNumber()));
  };
  ShortDuration$Companion.prototype.days_mx4ult$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_DAY.toNumber()));
  };
  ShortDuration$Companion.prototype.seconds_14dthe$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_SECOND.toNumber()));
  };
  ShortDuration$Companion.prototype.minutes_14dthe$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_MINUTE.toNumber()));
  };
  ShortDuration$Companion.prototype.hours_14dthe$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_HOUR.toNumber()));
  };
  ShortDuration$Companion.prototype.days_14dthe$ = function (seconds) {
    return new ShortDuration(Kotlin.Long.fromNumber(seconds * TimeConstants_getInstance().NS_PER_DAY.toNumber()));
  };
  ShortDuration$Companion.prototype.measure_o14v8n$ = defineInlineFunction('lokalize.com.lightningkite.lokalize.time.ShortDuration.Companion.measure_o14v8n$', wrapFunction(function () {
    var ShortDuration = _.com.lightningkite.lokalize.time.ShortDuration;
    var get = _.com.lightningkite.lokalize.time.get_xaoah5$;
    return function (action) {
      var start = get(ShortDuration.Companion);
      action();
      var end = get(ShortDuration.Companion);
      return end.minus_oidni2$(start);
    };
  }));
  ShortDuration$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ShortDuration$Companion_instance = null;
  function ShortDuration$Companion_getInstance() {
    if (ShortDuration$Companion_instance === null) {
      new ShortDuration$Companion();
    }
    return ShortDuration$Companion_instance;
  }
  Object.defineProperty(ShortDuration.prototype, 'milliseconds', {get: function () {
    return this.nanoseconds.div(TimeConstants_getInstance().NS_PER_SECOND);
  }});
  Object.defineProperty(ShortDuration.prototype, 'seconds', {get: function () {
    return this.nanoseconds.div(TimeConstants_getInstance().NS_PER_SECOND);
  }});
  Object.defineProperty(ShortDuration.prototype, 'minutes', {get: function () {
    return this.nanoseconds.div(TimeConstants_getInstance().NS_PER_MINUTE);
  }});
  Object.defineProperty(ShortDuration.prototype, 'hours', {get: function () {
    return this.nanoseconds.div(TimeConstants_getInstance().NS_PER_HOUR);
  }});
  Object.defineProperty(ShortDuration.prototype, 'days', {get: function () {
    return this.nanoseconds.div(TimeConstants_getInstance().NS_PER_DAY);
  }});
  Object.defineProperty(ShortDuration.prototype, 'millisecondsDouble', {get: function () {
    return this.nanoseconds.toNumber() / TimeConstants_getInstance().NS_PER_MILLISECOND.toNumber();
  }});
  Object.defineProperty(ShortDuration.prototype, 'secondsDouble', {get: function () {
    return this.nanoseconds.toNumber() / TimeConstants_getInstance().NS_PER_SECOND.toNumber();
  }});
  Object.defineProperty(ShortDuration.prototype, 'minutesDouble', {get: function () {
    return this.nanoseconds.toNumber() / TimeConstants_getInstance().NS_PER_MINUTE.toNumber();
  }});
  Object.defineProperty(ShortDuration.prototype, 'hoursDouble', {get: function () {
    return this.nanoseconds.toNumber() / TimeConstants_getInstance().NS_PER_HOUR.toNumber();
  }});
  Object.defineProperty(ShortDuration.prototype, 'daysDouble', {get: function () {
    return this.nanoseconds.toNumber() / TimeConstants_getInstance().NS_PER_DAY.toNumber();
  }});
  ShortDuration.prototype.plus_oidni2$ = function (other) {
    return new ShortDuration(this.nanoseconds.add(other.nanoseconds));
  };
  ShortDuration.prototype.minus_oidni2$ = function (other) {
    return new ShortDuration(this.nanoseconds.subtract(other.nanoseconds));
  };
  ShortDuration.prototype.plus_vcl74a$ = function (other) {
    return new ShortDuration(this.nanoseconds.add(other.milliseconds.multiply(TimeConstants_getInstance().NS_PER_MILLISECOND)));
  };
  ShortDuration.prototype.minus_vcl74a$ = function (other) {
    return new ShortDuration(this.nanoseconds.subtract(other.milliseconds.multiply(TimeConstants_getInstance().NS_PER_MILLISECOND)));
  };
  ShortDuration.prototype.times_za3lpa$ = function (scale) {
    return new ShortDuration(this.nanoseconds.multiply(Kotlin.Long.fromInt(scale)));
  };
  ShortDuration.prototype.times_mx4ult$ = function (scale) {
    return new ShortDuration(Kotlin.Long.fromNumber(this.nanoseconds.toNumber() * scale));
  };
  ShortDuration.prototype.times_14dthe$ = function (scale) {
    return new ShortDuration(Kotlin.Long.fromNumber(this.nanoseconds.toNumber() * scale));
  };
  ShortDuration.prototype.div_za3lpa$ = function (scale) {
    return new ShortDuration(this.nanoseconds.div(Kotlin.Long.fromInt(scale)));
  };
  ShortDuration.prototype.div_mx4ult$ = function (scale) {
    return new ShortDuration(Kotlin.Long.fromNumber(this.nanoseconds.toNumber() / scale));
  };
  ShortDuration.prototype.div_14dthe$ = function (scale) {
    return new ShortDuration(Kotlin.Long.fromNumber(this.nanoseconds.toNumber() / scale));
  };
  ShortDuration.prototype.toDuration = function () {
    return Duration$Companion_getInstance().milliseconds_s8cxhz$(this.milliseconds);
  };
  ShortDuration.$metadata$ = {kind: Kind_CLASS, simpleName: 'ShortDuration', interfaces: [Comparable]};
  ShortDuration.prototype.unbox = function () {
    return this.nanoseconds;
  };
  ShortDuration.prototype.toString = function () {
    return 'ShortDuration(nanoseconds=' + Kotlin.toString(this.nanoseconds) + ')';
  };
  ShortDuration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nanoseconds) | 0;
    return result;
  };
  ShortDuration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.nanoseconds, other.nanoseconds))));
  };
  function Time(millisecondsSinceMidnight) {
    Time$Companion_getInstance();
    this.millisecondsSinceMidnight = millisecondsSinceMidnight;
  }
  Time.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.millisecondsSinceMidnight, other.millisecondsSinceMidnight);
  };
  function Time$Companion() {
    Time$Companion_instance = this;
    this.MIN = new Time(0);
    this.MAX = Time_init(23, 59, 59, 999);
  }
  Time$Companion.prototype.iso8601_61zpoe$ = function (string) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var parts = split(string, Kotlin.charArrayOf(58, 46));
    return Time_init((tmp$_0 = (tmp$ = getOrNull(parts, 0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0, (tmp$_2 = (tmp$_1 = getOrNull(parts, 1)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0, (tmp$_4 = (tmp$_3 = getOrNull(parts, 2)) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0, (tmp$_6 = (tmp$_5 = getOrNull(parts, 3)) != null ? toIntOrNull(tmp$_5) : null) != null ? tmp$_6 : 0);
  };
  Time$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Time$Companion_instance = null;
  function Time$Companion_getInstance() {
    if (Time$Companion_instance === null) {
      new Time$Companion();
    }
    return Time$Companion_instance;
  }
  Object.defineProperty(Time.prototype, 'hours', {get: function () {
    return this.millisecondsSinceMidnight / 3600000 | 0;
  }});
  Object.defineProperty(Time.prototype, 'minutes', {get: function () {
    return (this.millisecondsSinceMidnight / 60000 | 0) % 60;
  }});
  Object.defineProperty(Time.prototype, 'seconds', {get: function () {
    return (this.millisecondsSinceMidnight / 1000 | 0) % 60;
  }});
  Object.defineProperty(Time.prototype, 'milliseconds', {get: function () {
    return this.millisecondsSinceMidnight % 1000;
  }});
  Time.prototype.plus_vcl74a$ = function (amount) {
    return new Time(this.millisecondsSinceMidnight + amount.milliseconds.toInt() | 0);
  };
  Time.prototype.minus_vcl74a$ = function (amount) {
    return new Time(this.millisecondsSinceMidnight - amount.milliseconds.toInt() | 0);
  };
  Time.prototype.minus_a9a071$ = function (other) {
    return new Duration(Kotlin.Long.fromInt(this.millisecondsSinceMidnight - other.millisecondsSinceMidnight | 0));
  };
  Time.prototype.iso8601 = function () {
    return padStart(this.hours.toString(), 2, 48) + ':' + padStart(this.minutes.toString(), 2, 48) + ':' + padStart(this.seconds.toString(), 2, 48) + '.' + padStart(this.milliseconds.toString(), 2, 48);
  };
  Time.$metadata$ = {kind: Kind_CLASS, simpleName: 'Time', interfaces: [Comparable]};
  function Time_init(hours, minutes, seconds, milliseconds, $this) {
    if (seconds === void 0)
      seconds = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    $this = $this || Object.create(Time.prototype);
    Time.call($this, Kotlin.imul(hours, 3600000) + (minutes * 60000 | 0) + (seconds * 1000 | 0) + milliseconds | 0);
    return $this;
  }
  Time.prototype.unbox = function () {
    return this.millisecondsSinceMidnight;
  };
  Time.prototype.toString = function () {
    return 'Time(millisecondsSinceMidnight=' + Kotlin.toString(this.millisecondsSinceMidnight) + ')';
  };
  Time.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.millisecondsSinceMidnight) | 0;
    return result;
  };
  Time.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.millisecondsSinceMidnight, other.millisecondsSinceMidnight))));
  };
  function TimeConstants() {
    TimeConstants_instance = this;
    this.EPOCH_STARTED_ON_DAY_AD = 719528;
    this.MS_PER_SECOND = L1000;
    this.MS_PER_MINUTE = L60000;
    this.MS_PER_HOUR = L3600000;
    this.MS_PER_DAY = L86400000;
    this.NS_PER_MILLISECOND = L1000000;
    this.NS_PER_SECOND = L1000000000;
    this.NS_PER_MINUTE = L60000000000;
    this.NS_PER_HOUR = L3600000000000;
    this.NS_PER_DAY = L86400000000000;
    this.MS_PER_SECOND_INT = 1000;
    this.MS_PER_MINUTE_INT = 60000;
    this.MS_PER_HOUR_INT = 3600000;
    this.MS_PER_DAY_INT = 86400000;
    this.DAYS_TO_LEAP_DAY = 59;
    this.DAYS_PER_YEAR = 365;
    this.DAYS_PER_4_YEARS = 1461;
    this.DAYS_PER_100_YEARS = 36524;
    this.DAYS_PER_400_YEARS = 146097;
  }
  TimeConstants.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TimeConstants', interfaces: []};
  var TimeConstants_instance = null;
  function TimeConstants_getInstance() {
    if (TimeConstants_instance === null) {
      new TimeConstants();
    }
    return TimeConstants_instance;
  }
  function TimeStamp(millisecondsSinceEpoch) {
    TimeStamp$Companion_getInstance();
    this.millisecondsSinceEpoch = millisecondsSinceEpoch;
  }
  TimeStamp.prototype.compareTo_11rb$ = function (other) {
    return this.millisecondsSinceEpoch.compareTo_11rb$(other.millisecondsSinceEpoch);
  };
  function TimeStamp$Companion() {
    TimeStamp$Companion_instance = this;
    this.MIN = new TimeStamp(Long$Companion$MIN_VALUE);
    this.MAX = new TimeStamp(Long$Companion$MAX_VALUE);
  }
  TimeStamp$Companion.prototype.iso8601_61zpoe$ = function (string) {
    return TimeStamp_init(Date$Companion_getInstance().iso8601_61zpoe$(substringBefore(string, 84)), Time$Companion_getInstance().iso8601_61zpoe$(substringBefore(substringAfterLast(string, 84), 90)), Duration$Companion_getInstance().zero);
  };
  TimeStamp$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TimeStamp$Companion_instance = null;
  function TimeStamp$Companion_getInstance() {
    if (TimeStamp$Companion_instance === null) {
      new TimeStamp$Companion();
    }
    return TimeStamp$Companion_instance;
  }
  TimeStamp.prototype.iso8601 = function () {
    return this.date_vcl74a$(Duration$Companion_getInstance().zero).iso8601() + 'T' + this.time_vcl74a$(Duration$Companion_getInstance().zero).iso8601() + 'Z';
  };
  TimeStamp.prototype.plus_vcl74a$ = function (duration) {
    return new TimeStamp(this.millisecondsSinceEpoch.add(duration.milliseconds));
  };
  TimeStamp.prototype.minus_vcl74a$ = function (duration) {
    return new TimeStamp(this.millisecondsSinceEpoch.subtract(duration.milliseconds));
  };
  TimeStamp.prototype.minus_4o3mrk$ = function (other) {
    return new Duration(this.millisecondsSinceEpoch.subtract(other.millisecondsSinceEpoch));
  };
  TimeStamp.prototype.date_vcl74a$ = function (offset) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    return new Date_0(this.millisecondsSinceEpoch.subtract(offset.milliseconds).div(TimeConstants_getInstance().MS_PER_DAY).toInt());
  };
  TimeStamp.prototype.time_vcl74a$ = function (offset) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    return new Time(this.millisecondsSinceEpoch.subtract(offset.milliseconds).modulo(TimeConstants_getInstance().MS_PER_DAY).toInt());
  };
  TimeStamp.prototype.dateTime_vcl74a$ = function (offset) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    return new DateTime(this.date_vcl74a$(offset), this.time_vcl74a$(offset));
  };
  TimeStamp.$metadata$ = {kind: Kind_CLASS, simpleName: 'TimeStamp', interfaces: [Comparable]};
  function TimeStamp_init(date, time, offset, $this) {
    if (offset === void 0)
      offset = new Duration(DefaultLocale.getTimeOffsetMilliseconds());
    $this = $this || Object.create(TimeStamp.prototype);
    TimeStamp.call($this, Kotlin.Long.fromInt(date.daysSinceEpoch).multiply(L24).multiply(Kotlin.Long.fromInt(60)).multiply(Kotlin.Long.fromInt(60)).multiply(Kotlin.Long.fromInt(1000)).add(Kotlin.Long.fromInt(time.millisecondsSinceMidnight)).add(offset.milliseconds));
    return $this;
  }
  TimeStamp.prototype.unbox = function () {
    return this.millisecondsSinceEpoch;
  };
  TimeStamp.prototype.toString = function () {
    return 'TimeStamp(millisecondsSinceEpoch=' + Kotlin.toString(this.millisecondsSinceEpoch) + ')';
  };
  TimeStamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.millisecondsSinceEpoch) | 0;
    return result;
  };
  TimeStamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.millisecondsSinceEpoch, other.millisecondsSinceEpoch))));
  };
  function Year(sinceAD) {
    this.sinceAD = sinceAD;
  }
  Object.defineProperty(Year.prototype, 'isLeap', {get: function () {
    return this.sinceAD % 4 === 0 && (this.sinceAD % 100 !== 0 || this.sinceAD % 400 === 0);
  }});
  Object.defineProperty(Year.prototype, 'days', {get: function () {
    return this.isLeap ? 366 : 365;
  }});
  Year.prototype.toString = function () {
    return this.sinceAD.toString();
  };
  Year.$metadata$ = {kind: Kind_CLASS, simpleName: 'Year', interfaces: []};
  Year.prototype.unbox = function () {
    return this.sinceAD;
  };
  Year.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sinceAD) | 0;
    return result;
  };
  Year.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.sinceAD, other.sinceAD))));
  };
  function YearAndDayInYear(combined) {
    YearAndDayInYear$Companion_getInstance();
    this.combined = combined;
  }
  Object.defineProperty(YearAndDayInYear.prototype, 'year', {get: function () {
    return new Year(this.combined.shiftRight(16).toInt());
  }});
  Object.defineProperty(YearAndDayInYear.prototype, 'dayInYear', {get: function () {
    return this.combined.and(L65535).toInt();
  }});
  function YearAndDayInYear$Companion() {
    YearAndDayInYear$Companion_instance = this;
  }
  YearAndDayInYear$Companion.prototype.make_6wzakl$ = function (year, dayInYear) {
    return new YearAndDayInYear(Kotlin.Long.fromInt(year.sinceAD).shiftLeft(16).or(Kotlin.Long.fromInt(dayInYear)));
  };
  YearAndDayInYear$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var YearAndDayInYear$Companion_instance = null;
  function YearAndDayInYear$Companion_getInstance() {
    if (YearAndDayInYear$Companion_instance === null) {
      new YearAndDayInYear$Companion();
    }
    return YearAndDayInYear$Companion_instance;
  }
  YearAndDayInYear.$metadata$ = {kind: Kind_CLASS, simpleName: 'YearAndDayInYear', interfaces: []};
  YearAndDayInYear.prototype.unbox = function () {
    return this.combined;
  };
  YearAndDayInYear.prototype.toString = function () {
    return 'YearAndDayInYear(combined=' + Kotlin.toString(this.combined) + ')';
  };
  YearAndDayInYear.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.combined) | 0;
    return result;
  };
  YearAndDayInYear.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.combined, other.combined))));
  };
  function get_month($receiver) {
    var tmp$;
    if ($receiver.year.isLeap) {
      var $receiver_0 = Month$values();
      var last$result;
      last$break: do {
        var tmp$_0;
        tmp$_0 = reversed(get_indices($receiver_0)).iterator();
        while (tmp$_0.hasNext()) {
          var index = tmp$_0.next();
          var element = $receiver_0[index];
          if ($receiver.dayInYear >= element.startDayInLeapYear) {
            last$result = element;
            break last$break;
          }
        }
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      tmp$ = last$result;
    }
     else {
      var $receiver_1 = Month$values();
      var last$result_0;
      last$break: do {
        var tmp$_1;
        tmp$_1 = reversed(get_indices($receiver_1)).iterator();
        while (tmp$_1.hasNext()) {
          var index_0 = tmp$_1.next();
          var element_0 = $receiver_1[index_0];
          if ($receiver.dayInYear >= element_0.startDayInNormalYear) {
            last$result_0 = element_0;
            break last$break;
          }
        }
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      tmp$ = last$result_0;
    }
    return tmp$;
  }
  function get_dayOfMonth($receiver) {
    var tmp$;
    if ($receiver.year.isLeap) {
      var $receiver_0 = Month$values();
      var last$result;
      last$break: do {
        var tmp$_0;
        tmp$_0 = reversed(get_indices($receiver_0)).iterator();
        while (tmp$_0.hasNext()) {
          var index = tmp$_0.next();
          var element = $receiver_0[index];
          if ($receiver.dayInYear >= element.startDayInLeapYear) {
            last$result = element;
            break last$break;
          }
        }
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      var month = last$result;
      tmp$ = $receiver.dayInYear - month.startDayInLeapYear + 1 | 0;
    }
     else {
      var $receiver_1 = Month$values();
      var last$result_0;
      last$break: do {
        var tmp$_1;
        tmp$_1 = reversed(get_indices($receiver_1)).iterator();
        while (tmp$_1.hasNext()) {
          var index_0 = tmp$_1.next();
          var element_0 = $receiver_1[index_0];
          if ($receiver.dayInYear >= element_0.startDayInNormalYear) {
            last$result_0 = element_0;
            break last$break;
          }
        }
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      var month_0 = last$result_0;
      tmp$ = $receiver.dayInYear - month_0.startDayInNormalYear + 1 | 0;
    }
    return tmp$;
  }
  function DefaultLocale$ObjectLiteral() {
  }
  Object.defineProperty(DefaultLocale$ObjectLiteral.prototype, 'language', {get: function () {
    return substringBefore(window.navigator.language, 45);
  }});
  Object.defineProperty(DefaultLocale$ObjectLiteral.prototype, 'languageVariant', {get: function () {
    return substringAfter(window.navigator.language, 45, '');
  }});
  DefaultLocale$ObjectLiteral.prototype.getTimeOffsetMilliseconds = function () {
    return Kotlin.Long.fromInt((new Date()).getTimezoneOffset()).multiply(TimeConstants_getInstance().MS_PER_MINUTE);
  };
  DefaultLocale$ObjectLiteral.prototype.renderNumber_hp0pti$ = function (value, decimalPositions, maxOtherPositions) {
    var tmp$;
    return typeof (tmp$ = value != null ? value.toFixed(decimalPositions) : null) === 'string' ? tmp$ : throwCCE();
  };
  DefaultLocale$ObjectLiteral.prototype.renderDate_a9kdr0$ = function (date) {
    return (new Date(TimeStamp_init(date, new Time(0)).millisecondsSinceEpoch)).toLocaleString();
  };
  DefaultLocale$ObjectLiteral.prototype.renderTime_a9a071$ = function (time) {
    return (new Date(time.millisecondsSinceMidnight)).toLocaleString();
  };
  DefaultLocale$ObjectLiteral.prototype.renderDateTime_mwtq35$ = function (dateTime) {
    return (new Date(dateTime.toTimeStamp_vcl74a$().millisecondsSinceEpoch)).toLocaleString();
  };
  DefaultLocale$ObjectLiteral.prototype.renderTimeStamp_4o3mrk$ = function (timeStamp) {
    return (new Date(timeStamp.millisecondsSinceEpoch)).toLocaleString();
  };
  DefaultLocale$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Locale]};
  var DefaultLocale;
  function now($receiver) {
    return new TimeStamp(Kotlin.Long.fromNumber(Date.now()));
  }
  function get_0($receiver) {
    return new ShortDuration(now(TimeStamp$Companion_getInstance()).millisecondsSinceEpoch.multiply(TimeConstants_getInstance().NS_PER_MILLISECOND));
  }
  Object.defineProperty(Locale, 'Companion', {get: Locale$Companion_getInstance});
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$lokalize = package$lightningkite.lokalize || (package$lightningkite.lokalize = {});
  package$lokalize.Locale = Locale;
  $$importsForInline$$.kommon = $module$kommon;
  Object.defineProperty(Geohash, 'Companion', {get: Geohash$Companion_getInstance});
  var package$location = package$lokalize.location || (package$lokalize.location = {});
  package$location.Geohash = Geohash;
  Object.defineProperty(Date_0, 'Companion', {get: Date$Companion_getInstance});
  var package$time = package$lokalize.time || (package$lokalize.time = {});
  package$time.Date_init_yb5cbn$ = Date_init;
  package$time.Date = Date_0;
  Object.defineProperty(DateTime, 'Companion', {get: DateTime$Companion_getInstance});
  package$time.DateTime = DateTime;
  Object.defineProperty(DayOfWeek, 'Sunday', {get: DayOfWeek$Sunday_getInstance});
  Object.defineProperty(DayOfWeek, 'Monday', {get: DayOfWeek$Monday_getInstance});
  Object.defineProperty(DayOfWeek, 'Tuesday', {get: DayOfWeek$Tuesday_getInstance});
  Object.defineProperty(DayOfWeek, 'Wednesday', {get: DayOfWeek$Wednesday_getInstance});
  Object.defineProperty(DayOfWeek, 'Thursday', {get: DayOfWeek$Thursday_getInstance});
  Object.defineProperty(DayOfWeek, 'Friday', {get: DayOfWeek$Friday_getInstance});
  Object.defineProperty(DayOfWeek, 'Saturday', {get: DayOfWeek$Saturday_getInstance});
  package$time.DayOfWeek = DayOfWeek;
  Object.defineProperty(Duration, 'Companion', {get: Duration$Companion_getInstance});
  package$time.Duration = Duration;
  Object.defineProperty(Month, 'January', {get: Month$January_getInstance});
  Object.defineProperty(Month, 'February', {get: Month$February_getInstance});
  Object.defineProperty(Month, 'March', {get: Month$March_getInstance});
  Object.defineProperty(Month, 'April', {get: Month$April_getInstance});
  Object.defineProperty(Month, 'May', {get: Month$May_getInstance});
  Object.defineProperty(Month, 'June', {get: Month$June_getInstance});
  Object.defineProperty(Month, 'July', {get: Month$July_getInstance});
  Object.defineProperty(Month, 'August', {get: Month$August_getInstance});
  Object.defineProperty(Month, 'September', {get: Month$September_getInstance});
  Object.defineProperty(Month, 'October', {get: Month$October_getInstance});
  Object.defineProperty(Month, 'November', {get: Month$November_getInstance});
  Object.defineProperty(Month, 'December', {get: Month$December_getInstance});
  Object.defineProperty(Month, 'Companion', {get: Month$Companion_getInstance});
  package$time.Month = Month;
  package$time.ShortDuration = ShortDuration;
  package$time.get_xaoah5$ = get_0;
  Object.defineProperty(ShortDuration, 'Companion', {get: ShortDuration$Companion_getInstance});
  Object.defineProperty(Time, 'Companion', {get: Time$Companion_getInstance});
  package$time.Time_init_tjonv8$ = Time_init;
  package$time.Time = Time;
  Object.defineProperty(package$time, 'TimeConstants', {get: TimeConstants_getInstance});
  Object.defineProperty(TimeStamp, 'Companion', {get: TimeStamp$Companion_getInstance});
  package$time.TimeStamp_init_ar3mkr$ = TimeStamp_init;
  package$time.TimeStamp = TimeStamp;
  package$time.Year = Year;
  Object.defineProperty(YearAndDayInYear, 'Companion', {get: YearAndDayInYear$Companion_getInstance});
  package$time.YearAndDayInYear = YearAndDayInYear;
  package$time.get_month_xz9fm0$ = get_month;
  package$time.get_dayOfMonth_xz9fm0$ = get_dayOfMonth;
  Object.defineProperty(package$lokalize, 'DefaultLocale', {get: function () {
    return DefaultLocale;
  }});
  package$time.now_4yyikv$ = now;
  DefaultLocale = new DefaultLocale$ObjectLiteral();
  return _;
}));

//# sourceMappingURL=lokalize.js.map
