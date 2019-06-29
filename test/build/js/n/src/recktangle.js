(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'recktangle'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'recktangle'.");
    }
    root.recktangle = factory(typeof recktangle === 'undefined' ? {} : recktangle, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var math = Kotlin.kotlin.math;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_wj6e7o$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var reverse = Kotlin.kotlin.collections.reverse_vvxzk3$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function Angle(circles) {
    Angle$Companion_getInstance();
    this.circles = circles;
  }
  function Angle$Companion() {
    Angle$Companion_instance = this;
    this.RADIANS_PER_CIRCLE = math.PI * 2;
    this.DEGREES_PER_CIRCLE = 360.0;
    this.Circle = new Angle(1.0);
    this.HalfCircle = new Angle(0.5);
    this.QuarterCircle = new Angle(0.25);
    this.ThirdCircle = new Angle(1 / 3.0);
  }
  Angle$Companion.prototype.degrees_mx4ult$ = function (degrees) {
    return new Angle(degrees / this.DEGREES_PER_CIRCLE);
  };
  Angle$Companion.prototype.radians_mx4ult$ = function (radians) {
    return new Angle(radians / this.RADIANS_PER_CIRCLE);
  };
  Angle$Companion.prototype.atan2_dleff0$ = function (y, x) {
    return this.radians_mx4ult$(Math_0.atan2(y, x));
  };
  Angle$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Angle$Companion_instance = null;
  function Angle$Companion_getInstance() {
    if (Angle$Companion_instance === null) {
      new Angle$Companion();
    }
    return Angle$Companion_instance;
  }
  Object.defineProperty(Angle.prototype, 'degrees', {get: defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.get_degrees', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    return function () {
      return this.circles * Angle.Companion.DEGREES_PER_CIRCLE;
    };
  }))});
  Object.defineProperty(Angle.prototype, 'radians', {get: defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.get_radians', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    return function () {
      return this.circles * Angle.Companion.RADIANS_PER_CIRCLE;
    };
  }))});
  Angle.prototype.angleTo_oda54x$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.angleTo_oda54x$', wrapFunction(function () {
    var Angle_init = _.com.lightningkite.recktangle.Angle;
    return function (other) {
      return new Angle_init((other.circles - this.circles + 1.5) % 1.0 - 0.5);
    };
  }));
  Angle.prototype.plus_oda54x$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.plus_oda54x$', wrapFunction(function () {
    var Angle_init = _.com.lightningkite.recktangle.Angle;
    return function (other) {
      return new Angle_init(this.circles + other.circles);
    };
  }));
  Angle.prototype.minus_oda54x$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.minus_oda54x$', wrapFunction(function () {
    var Angle_init = _.com.lightningkite.recktangle.Angle;
    return function (other) {
      return new Angle_init(this.circles - other.circles);
    };
  }));
  Angle.prototype.times_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.times_mx4ult$', wrapFunction(function () {
    var Angle_init = _.com.lightningkite.recktangle.Angle;
    return function (scale) {
      return new Angle_init(this.circles * scale);
    };
  }));
  Angle.prototype.div_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.div_mx4ult$', wrapFunction(function () {
    var Angle_init = _.com.lightningkite.recktangle.Angle;
    return function (by) {
      return new Angle_init(this.circles / by);
    };
  }));
  Angle.prototype.sin = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.sin', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    var Math_0 = Math;
    return function () {
      var x = this.circles * Angle.Companion.RADIANS_PER_CIRCLE;
      return Math_0.sin(x);
    };
  }));
  Angle.prototype.cos = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.cos', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    var Math_0 = Math;
    return function () {
      var x = this.circles * Angle.Companion.RADIANS_PER_CIRCLE;
      return Math_0.cos(x);
    };
  }));
  Angle.prototype.tan = defineInlineFunction('recktangle.com.lightningkite.recktangle.Angle.tan', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    var Math_0 = Math;
    return function () {
      var x = this.circles * Angle.Companion.RADIANS_PER_CIRCLE;
      return Math_0.tan(x);
    };
  }));
  Angle.$metadata$ = {kind: Kind_CLASS, simpleName: 'Angle', interfaces: []};
  Angle.prototype.unbox = function () {
    return this.circles;
  };
  Angle.prototype.toString = function () {
    return 'Angle(circles=' + Kotlin.toString(this.circles) + ')';
  };
  Angle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.circles) | 0;
    return result;
  };
  Angle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.circles, other.circles))));
  };
  var DoubleAngle$Companion_instance = null;
  function Point(x, y) {
    Point$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  function Point$Companion() {
    Point$Companion_instance = this;
    this.Zero = new Point(0.0, 0.0);
  }
  Point$Companion.prototype.polar_qlp5ju$ = function (angle, length) {
    var x = angle.circles * Angle.Companion.RADIANS_PER_CIRCLE;
    var tmp$ = Math_0.cos(x) * length;
    var x_0 = angle.circles * Angle.Companion.RADIANS_PER_CIRCLE;
    return new Point(tmp$, Math_0.sin(x_0) * length);
  };
  Point$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Object.defineProperty(Point.prototype, 'lengthSquared', {get: defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.get_lengthSquared', function () {
    var $receiver = this.x;
    var $receiver_0 = this.y;
    return $receiver * $receiver + $receiver_0 * $receiver_0;
  })});
  Object.defineProperty(Point.prototype, 'length', {get: defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.get_length', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var $receiver = this.x;
      var $receiver_0 = this.y;
      var x = $receiver * $receiver + $receiver_0 * $receiver_0;
      return Math_0.sqrt(x);
    };
  })), set: defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.set_length_mx4ult$', wrapFunction(function () {
    var Math_0 = Math;
    return function (value) {
      var $receiver = this.x;
      var $receiver_0 = this.y;
      var x = $receiver * $receiver + $receiver_0 * $receiver_0;
      var scalar = value / Math_0.sqrt(x);
      this.x *= scalar;
      this.y *= scalar;
    };
  }))});
  Object.defineProperty(Point.prototype, 'angle', {get: defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.get_angle', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    return function () {
      return Angle.Companion.atan2_dleff0$(this.y, this.x);
    };
  })), set: defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.set_angle_oda54x$', wrapFunction(function () {
    var Math_0 = Math;
    var Angle = _.com.lightningkite.recktangle.Angle;
    return function (value) {
      var $receiver = this.x;
      var $receiver_0 = this.y;
      var x = $receiver * $receiver + $receiver_0 * $receiver_0;
      var len = Math_0.sqrt(x);
      var x_0 = value.circles * Angle.Companion.RADIANS_PER_CIRCLE;
      this.x = Math_0.cos(x_0) * len;
      var x_1 = value.circles * Angle.Companion.RADIANS_PER_CIRCLE;
      this.y = Math_0.sin(x_1) * len;
    };
  }))});
  Point.prototype.plus_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.plus_oljqke$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (other) {
      return new Point_init(this.x + other.x, this.y + other.y);
    };
  }));
  Point.prototype.plusAssign_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.plusAssign_oljqke$', function (other) {
    this.x += other.x;
    this.y += other.y;
  });
  Point.prototype.minus_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.minus_oljqke$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (other) {
      return new Point_init(this.x - other.x, this.y - other.y);
    };
  }));
  Point.prototype.minusAssign_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.minusAssign_oljqke$', function (other) {
    this.x -= other.x;
    this.y -= other.y;
  });
  Point.prototype.times_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.times_oljqke$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (other) {
      return new Point_init(this.x * other.x, this.y * other.y);
    };
  }));
  Point.prototype.timesAssign_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.timesAssign_oljqke$', function (other) {
    this.x *= other.x;
    this.y *= other.y;
  });
  Point.prototype.div_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.div_oljqke$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (other) {
      return new Point_init(this.x / other.x, this.y / other.y);
    };
  }));
  Point.prototype.divAssign_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.divAssign_oljqke$', function (other) {
    this.x /= other.x;
    this.y /= other.y;
  });
  Point.prototype.times_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.times_mx4ult$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (scalar) {
      return new Point_init(this.x * scalar, this.y * scalar);
    };
  }));
  Point.prototype.timesAssign_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.timesAssign_mx4ult$', function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
  });
  Point.prototype.div_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.div_mx4ult$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (scalar) {
      return new Point_init(this.x / scalar, this.y / scalar);
    };
  }));
  Point.prototype.divAssign_mx4ult$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.divAssign_mx4ult$', function (scalar) {
    this.x /= scalar;
    this.y /= scalar;
  });
  Point.prototype.dot_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.dot_oljqke$', function (other) {
    return this.x * other.x + this.y * other.y;
  });
  Point.prototype.cross_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.cross_oljqke$', function (other) {
    return this.x * other.y - this.y * other.x;
  });
  Point.prototype.project_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.project_oljqke$', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function (other) {
      var len = this.x * other.x + this.y * other.y;
      return new Point_init(other.x * len, other.y * len);
    };
  }));
  Point.prototype.projectAssign_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.projectAssign_oljqke$', function (other) {
    var len = this.x * other.x + this.y * other.y;
    this.x = other.x * len;
    this.y = other.y * len;
  });
  Point.prototype.perpendicular = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.perpendicular', wrapFunction(function () {
    var Point_init = _.com.lightningkite.recktangle.Point;
    return function () {
      return new Point_init(-this.y, this.x);
    };
  }));
  Point.prototype.perpendicularAssign = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.perpendicularAssign', function () {
    var temp = this.x;
    this.x = -this.y;
    this.y = temp;
  });
  Point.prototype.distance_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.distance_oljqke$', wrapFunction(function () {
    var Math_0 = Math;
    return function (other) {
      var $receiver = other.x - this.x;
      var $receiver_0 = other.y - this.y;
      var x = $receiver * $receiver + $receiver_0 * $receiver_0;
      return Math_0.sqrt(x);
    };
  }));
  Point.prototype.distanceSquared_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.distanceSquared_oljqke$', function (other) {
    var $receiver = other.x - this.x;
    var $receiver_0 = other.y - this.y;
    return $receiver * $receiver + $receiver_0 * $receiver_0;
  });
  Point.prototype.angleTo_oljqke$ = defineInlineFunction('recktangle.com.lightningkite.recktangle.Point.angleTo_oljqke$', wrapFunction(function () {
    var Angle = _.com.lightningkite.recktangle.Angle;
    return function (other) {
      return Angle.Companion.atan2_dleff0$(other.y - this.y, other.x - this.x);
    };
  }));
  Point.$metadata$ = {kind: Kind_CLASS, simpleName: 'Point', interfaces: []};
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_dleff0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  var Polygon$Companion_instance = null;
  Object.defineProperty(Angle, 'Companion', {get: Angle$Companion_getInstance});
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$recktangle = package$lightningkite.recktangle || (package$lightningkite.recktangle = {});
  package$recktangle.Angle = Angle;
  Object.defineProperty(Point, 'Companion', {get: Point$Companion_getInstance});
  package$recktangle.Point = Point;
  return _;
}));

//# sourceMappingURL=recktangle.js.map
