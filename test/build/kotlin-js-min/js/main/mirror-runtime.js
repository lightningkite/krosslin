(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-runtime-js', 'kommon'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-runtime-js'), require('kommon'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mirror-runtime'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mirror-runtime'.");
    }
    if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
      throw new Error("Error loading module 'mirror-runtime'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'mirror-runtime'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'mirror-runtime'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'mirror-runtime'.");
    }
    root['mirror-runtime'] = factory(typeof this['mirror-runtime'] === 'undefined' ? {} : this['mirror-runtime'], kotlin, this['kotlinx-serialization-runtime-js'], kommon);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_runtime_js, $module$kommon) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toBoxedChar = Kotlin.toBoxedChar;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Encoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.Encoder;
  var CompositeEncoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.CompositeEncoder;
  var UpdateMode = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UpdateMode;
  var throwCCE = Kotlin.throwCCE;
  var Decoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.Decoder;
  var Any = Object;
  var kotlin = Kotlin.kotlin;
  var CompositeDecoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.CompositeDecoder;
  var modules = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.modules;
  var AbstractSerialFormat = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.AbstractSerialFormat;
  var Array_0 = Array;
  var Annotation = Kotlin.kotlin.Annotation;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.PrimitiveKind;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var getKClass = Kotlin.getKClass;
  var Char = Kotlin.BoxedChar;
  var kotlin_js_internal_CharCompanionObject = Kotlin.kotlin.js.internal.CharCompanionObject;
  var Comparable = Kotlin.kotlin.Comparable;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var asSequence = Kotlin.kotlin.collections.asSequence_us0mfu$;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var plus = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var flatMap = Kotlin.kotlin.sequences.flatMap_49vfel$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var List = Kotlin.kotlin.collections.List;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var get_list = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_list_gekvwj$;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var SerialDescriptor = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.SerialDescriptor;
  var Long = Kotlin.Long;
  var kotlin_js_internal_LongCompanionObject = Kotlin.kotlin.js.internal.LongCompanionObject;
  var Map = Kotlin.kotlin.collections.Map;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var get_map = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_map_kgqhr1$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StructureKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.StructureKind;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var SerializationException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.SerializationException;
  var UnionKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnionKind;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var EnumDescriptor = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.EnumDescriptor;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var freeze = $module$kommon.com.lightningkite.kommon.native.freeze_irb06o$;
  var Set = Kotlin.kotlin.collections.Set;
  var AtomicReference = $module$kommon.com.lightningkite.kommon.atomic.AtomicReference;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var DeserializationStrategy = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.DeserializationStrategy;
  var PrimitiveClasses$numberClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.numberClass;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var get_set = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_set_gekvwj$;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var SuspendFunction1 = Function;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var toString = Kotlin.toString;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Pair = Kotlin.kotlin.Pair;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var Triple = Kotlin.kotlin.Triple;
  Breaker.prototype = Object.create(AbstractSerialFormat.prototype);
  Breaker.prototype.constructor = Breaker;
  Breaker$Companion.prototype = Object.create(Breaker.prototype);
  Breaker$Companion.prototype.constructor = Breaker$Companion;
  PartialBreaker.prototype = Object.create(AbstractSerialFormat.prototype);
  PartialBreaker.prototype.constructor = PartialBreaker;
  PartialBreaker$Companion.prototype = Object.create(PartialBreaker.prototype);
  PartialBreaker$Companion.prototype.constructor = PartialBreaker$Companion;
  PolymorphicMirror.prototype = Object.create(MirrorClass.prototype);
  PolymorphicMirror.prototype.constructor = PolymorphicMirror;
  AnyMirror.prototype = Object.create(PolymorphicMirror.prototype);
  AnyMirror.prototype.constructor = AnyMirror;
  BooleanMirror.prototype = Object.create(MirrorClass.prototype);
  BooleanMirror.prototype.constructor = BooleanMirror;
  ByteMirror.prototype = Object.create(MirrorClass.prototype);
  ByteMirror.prototype.constructor = ByteMirror;
  CharMirror.prototype = Object.create(MirrorClass.prototype);
  CharMirror.prototype.constructor = CharMirror;
  ComparableMirror.prototype = Object.create(PolymorphicMirror.prototype);
  ComparableMirror.prototype.constructor = ComparableMirror;
  DoubleMirror.prototype = Object.create(MirrorClass.prototype);
  DoubleMirror.prototype.constructor = DoubleMirror;
  FloatMirror.prototype = Object.create(MirrorClass.prototype);
  FloatMirror.prototype.constructor = FloatMirror;
  IntMirror.prototype = Object.create(MirrorClass.prototype);
  IntMirror.prototype.constructor = IntMirror;
  ListMirror.prototype = Object.create(MirrorClass.prototype);
  ListMirror.prototype.constructor = ListMirror;
  LongMirror.prototype = Object.create(MirrorClass.prototype);
  LongMirror.prototype.constructor = LongMirror;
  MapMirror.prototype = Object.create(MirrorClass.prototype);
  MapMirror.prototype.constructor = MapMirror;
  MirrorClass$Modifier.prototype = Object.create(Enum.prototype);
  MirrorClass$Modifier.prototype.constructor = MirrorClass$Modifier;
  MirrorClassFieldMirror.prototype = Object.create(MirrorClass.prototype);
  MirrorClassFieldMirror.prototype.constructor = MirrorClassFieldMirror;
  MirrorClassMirror.prototype = Object.create(MirrorClass.prototype);
  MirrorClassMirror.prototype.constructor = MirrorClassMirror;
  MirrorEnum.prototype = Object.create(MirrorClass.prototype);
  MirrorEnum.prototype.constructor = MirrorEnum;
  MirrorObject.prototype = Object.create(MirrorClass.prototype);
  MirrorObject.prototype.constructor = MirrorObject;
  NumberMirror.prototype = Object.create(PolymorphicMirror.prototype);
  NumberMirror.prototype.constructor = NumberMirror;
  SetMirror.prototype = Object.create(MirrorClass.prototype);
  SetMirror.prototype.constructor = SetMirror;
  ShortMirror.prototype = Object.create(MirrorClass.prototype);
  ShortMirror.prototype.constructor = ShortMirror;
  StringMirror.prototype = Object.create(MirrorClass.prototype);
  StringMirror.prototype.constructor = StringMirror;
  UnitMirror.prototype = Object.create(MirrorClass.prototype);
  UnitMirror.prototype.constructor = UnitMirror;
  Variance.prototype = Object.create(Enum.prototype);
  Variance.prototype.constructor = Variance;
  RemoteExceptionData$Thrown.prototype = Object.create(Exception.prototype);
  RemoteExceptionData$Thrown.prototype.constructor = RemoteExceptionData$Thrown;
  ComparatorMirror.prototype = Object.create(PolymorphicMirror.prototype);
  ComparatorMirror.prototype.constructor = ComparatorMirror;
  PairMirror.prototype = Object.create(MirrorClass.prototype);
  PairMirror.prototype.constructor = PairMirror;
  TripleMirror.prototype = Object.create(MirrorClass.prototype);
  TripleMirror.prototype.constructor = TripleMirror;
  RemoteExceptionDataMirror.prototype = Object.create(MirrorClass.prototype);
  RemoteExceptionDataMirror.prototype.constructor = RemoteExceptionDataMirror;
  RemoteResultMirror.prototype = Object.create(MirrorClass.prototype);
  RemoteResultMirror.prototype.constructor = RemoteResultMirror;
  RequestMirror.prototype = Object.create(PolymorphicMirror.prototype);
  RequestMirror.prototype.constructor = RequestMirror;
  function Breaker(context) {
    Breaker$Companion_getInstance();
    if (context === void 0)
      context = modules.EmptyModule;
    AbstractSerialFormat.call(this, context);
  }
  function Breaker$Companion() {
    Breaker$Companion_instance = this;
    Breaker.call(this);
  }
  Breaker$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [Breaker]};
  var Breaker$Companion_instance = null;
  function Breaker$Companion_getInstance() {
    if (Breaker$Companion_instance === null) {
      new Breaker$Companion();
    }
    return Breaker$Companion_instance;
  }
  Breaker.prototype.snap_nleje8$ = function (type, value) {
    var $receiver = new Breaker$E(this, type.descriptor.elementsCount);
    type.serialize_awe97i$($receiver, value);
    return $receiver.elements;
  };
  Breaker.prototype.fold_c3j3l4$ = function (type, elements) {
    return type.deserialize_nts5qn$(new Breaker$D(this, elements));
  };
  Breaker.prototype.modify_q3yiqn$ = defineInlineFunction('mirror-runtime.com.lightningkite.mirror.breaker.Breaker.modify_q3yiqn$', wrapFunction(function () {
    var Breaker$Breaker$E_init = _.com.lightningkite.mirror.breaker.Breaker.E;
    var Breaker$Breaker$D_init = _.com.lightningkite.mirror.breaker.Breaker.D;
    return function (type, value, action) {
      var $receiver = new Breaker$Breaker$E_init(this, type.descriptor.elementsCount);
      type.serialize_awe97i$($receiver, value);
      var elements = $receiver.elements;
      action(elements);
      return type.deserialize_nts5qn$(new Breaker$Breaker$D_init(this, elements));
    };
  }));
  function Breaker$E($outer, size) {
    this.$outer = $outer;
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = null;
    }
    this.elements = array;
  }
  Object.defineProperty(Breaker$E.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Breaker$E.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return new Breaker$CE(this.$outer, this.elements);
  };
  Breaker$E.prototype.encodeBoolean_6taknv$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeByte_s8j3t7$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeChar_s8itvh$ = function (value) {
    this.elements[0] = toBoxedChar(value);
  };
  Breaker$E.prototype.encodeDouble_14dthe$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeFloat_mx4ult$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeInt_za3lpa$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeLong_s8cxhz$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeShort_mq22fl$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeString_61zpoe$ = function (value) {
    this.elements[0] = value;
  };
  Breaker$E.prototype.encodeEnum_39yahq$ = function (enumDescription, ordinal) {
    var actualMirrorClass = ensureNotNull(MirrorRegistry_getInstance().get_61zpoe$(enumDescription.name));
    this.elements[0] = ensureNotNull(actualMirrorClass.enumValues)[ordinal];
  };
  Breaker$E.prototype.encodeNotNullMark = function () {
  };
  Breaker$E.prototype.encodeNull = function () {
  };
  Breaker$E.prototype.encodeUnit = function () {
    this.elements[0] = Unit;
  };
  Breaker$E.$metadata$ = {kind: Kind_CLASS, simpleName: 'E', interfaces: [Encoder]};
  function Breaker$CE($outer, elements) {
    this.$outer = $outer;
    this.elements = elements;
  }
  Object.defineProperty(Breaker$CE.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Breaker$CE.prototype.encodeBooleanElement_w1b0nl$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeByteElement_a3tadb$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeCharElement_a3tkb1$ = function (desc, index, value) {
    this.elements[index] = toBoxedChar(value);
  };
  Breaker$CE.prototype.encodeDoubleElement_imzr5k$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeFloatElement_t7qhdx$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeIntElement_4wpqag$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeLongElement_a3zgoj$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeNonSerializableElement_4wpkd1$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeNullableSerializableElement_orpvvi$ = function (desc, index, serializer, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeSerializableElement_blecud$ = function (desc, index, serializer, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeShortElement_tet9k5$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeStringElement_bgm7zs$ = function (desc, index, value) {
    this.elements[index] = value;
  };
  Breaker$CE.prototype.encodeUnitElement_3zr2iy$ = function (desc, index) {
    this.elements[index] = Unit;
  };
  Breaker$CE.$metadata$ = {kind: Kind_CLASS, simpleName: 'CE', interfaces: [CompositeEncoder]};
  function Breaker$D($outer, elements) {
    this.$outer = $outer;
    this.elements = elements;
  }
  Object.defineProperty(Breaker$D.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Object.defineProperty(Breaker$D.prototype, 'updateMode', {get: function () {
    return UpdateMode.OVERWRITE;
  }});
  Breaker$D.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return new Breaker$DE(this.$outer, this.elements);
  };
  Breaker$D.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'boolean' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.elements[0]) ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeEnum_w849qs$ = function (enumDescription) {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements[0], Kotlin.Long) ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeNotNullMark = function () {
    return this.elements[0] != null;
  };
  Breaker$D.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.elements[0]) === 'string' ? tmp$ : throwCCE();
  };
  Breaker$D.prototype.decodeNull = function () {
    return null;
  };
  Breaker$D.prototype.decodeUnit = function () {
  };
  Breaker$D.$metadata$ = {kind: Kind_CLASS, simpleName: 'D', interfaces: [Decoder]};
  function Breaker$DE($outer, elements) {
    this.$outer = $outer;
    this.elements = elements;
  }
  Object.defineProperty(Breaker$DE.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Object.defineProperty(Breaker$DE.prototype, 'updateMode', {get: function () {
    return UpdateMode.OVERWRITE;
  }});
  Breaker$DE.prototype.decodeBooleanElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'boolean' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeByteElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeCharElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.elements[index]) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeDoubleElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeFloatElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeIntElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeLongElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements[index], Kotlin.Long) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeNullableSerializableElement_cwlm4k$ = function (desc, index, deserializer) {
    var tmp$;
    return (tmp$ = this.elements[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeSerializableElement_s44l7r$ = function (desc, index, deserializer) {
    var tmp$;
    return (tmp$ = this.elements[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeShortElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'number' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeStringElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements[index]) === 'string' ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeUnitElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements[index], Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.updateNullableSerializableElement_u33s02$ = function (desc, index, deserializer, old) {
    var tmp$;
    return (tmp$ = this.elements[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.updateSerializableElement_ehubvl$ = function (desc, index, deserializer, old) {
    var tmp$;
    return (tmp$ = this.elements[index]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Breaker$DE.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    return -2;
  };
  Breaker$DE.$metadata$ = {kind: Kind_CLASS, simpleName: 'DE', interfaces: [CompositeDecoder]};
  Breaker.$metadata$ = {kind: Kind_CLASS, simpleName: 'Breaker', interfaces: [AbstractSerialFormat]};
  function PartialBreaker(context) {
    PartialBreaker$Companion_getInstance();
    if (context === void 0)
      context = modules.EmptyModule;
    AbstractSerialFormat.call(this, context);
  }
  function PartialBreaker$Companion() {
    PartialBreaker$Companion_instance = this;
    PartialBreaker.call(this);
  }
  PartialBreaker$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [PartialBreaker]};
  var PartialBreaker$Companion_instance = null;
  function PartialBreaker$Companion_getInstance() {
    if (PartialBreaker$Companion_instance === null) {
      new PartialBreaker$Companion();
    }
    return PartialBreaker$Companion_instance;
  }
  PartialBreaker.prototype.fold_dskcpb$ = function (type, elements) {
    return type.deserialize_nts5qn$(new PartialBreaker$D(this, elements));
  };
  function PartialBreaker$D($outer, elements) {
    this.$outer = $outer;
    this.elements = elements;
  }
  Object.defineProperty(PartialBreaker$D.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Object.defineProperty(PartialBreaker$D.prototype, 'updateMode', {get: function () {
    return UpdateMode.OVERWRITE;
  }});
  PartialBreaker$D.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return new PartialBreaker$DE(this.$outer, this.elements);
  };
  PartialBreaker$D.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'boolean' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.elements.get_11rb$(0)) ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeEnum_w849qs$ = function (enumDescription) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements.get_11rb$(0), Kotlin.Long) ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeNotNullMark = function () {
    return this.elements.get_11rb$(0) != null;
  };
  PartialBreaker$D.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(0)) === 'string' ? tmp$ : throwCCE();
  };
  PartialBreaker$D.prototype.decodeNull = function () {
    return null;
  };
  PartialBreaker$D.prototype.decodeUnit = function () {
  };
  PartialBreaker$D.$metadata$ = {kind: Kind_CLASS, simpleName: 'D', interfaces: [Decoder]};
  function PartialBreaker$DE($outer, elements) {
    this.$outer = $outer;
    this.elements = elements;
    this.indexIterator_0 = this.elements.keys.iterator();
  }
  Object.defineProperty(PartialBreaker$DE.prototype, 'context', {get: function () {
    return this.$outer.context;
  }});
  Object.defineProperty(PartialBreaker$DE.prototype, 'updateMode', {get: function () {
    return UpdateMode.OVERWRITE;
  }});
  PartialBreaker$DE.prototype.decodeBooleanElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'boolean' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeByteElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeCharElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.elements.get_11rb$(index)) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeDoubleElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeFloatElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeIntElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeLongElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements.get_11rb$(index), Kotlin.Long) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeNullableSerializableElement_cwlm4k$ = function (desc, index, deserializer) {
    var tmp$;
    return (tmp$ = this.elements.get_11rb$(index)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeSerializableElement_s44l7r$ = function (desc, index, deserializer) {
    var tmp$;
    return (tmp$ = this.elements.get_11rb$(index)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeShortElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'number' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeStringElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return typeof (tmp$ = this.elements.get_11rb$(index)) === 'string' ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeUnitElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.elements.get_11rb$(index), Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.updateNullableSerializableElement_u33s02$ = function (desc, index, deserializer, old) {
    var tmp$;
    return (tmp$ = this.elements.get_11rb$(index)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.updateSerializableElement_ehubvl$ = function (desc, index, deserializer, old) {
    var tmp$;
    return (tmp$ = this.elements.get_11rb$(index)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  PartialBreaker$DE.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    return this.indexIterator_0.hasNext() ? this.indexIterator_0.next() : -1;
  };
  PartialBreaker$DE.$metadata$ = {kind: Kind_CLASS, simpleName: 'DE', interfaces: [CompositeDecoder]};
  PartialBreaker.$metadata$ = {kind: Kind_CLASS, simpleName: 'PartialBreaker', interfaces: [AbstractSerialFormat]};
  function ThrowsTypes(exceptionTypes) {
    this.exceptionTypes = exceptionTypes;
  }
  ThrowsTypes.$metadata$ = {kind: Kind_CLASS, simpleName: 'ThrowsTypes', interfaces: [Annotation]};
  function AnyMirror() {
    AnyMirror_instance = this;
    PolymorphicMirror.call(this);
  }
  Object.defineProperty(AnyMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(AnyMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$anyClass;
  }});
  Object.defineProperty(AnyMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(AnyMirror.prototype, 'localName', {get: function () {
    return 'Any';
  }});
  Object.defineProperty(AnyMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  AnyMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'AnyMirror', interfaces: [PolymorphicMirror]};
  var AnyMirror_instance = null;
  function AnyMirror_getInstance() {
    if (AnyMirror_instance === null) {
      new AnyMirror();
    }
    return AnyMirror_instance;
  }
  function BooleanMirror() {
    BooleanMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(BooleanMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(BooleanMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$booleanClass;
  }});
  Object.defineProperty(BooleanMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(BooleanMirror.prototype, 'localName', {get: function () {
    return 'Boolean';
  }});
  Object.defineProperty(BooleanMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(BooleanMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.BOOLEAN;
  }});
  Object.defineProperty(BooleanMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_BooleanCompanionObject;
  }});
  Object.defineProperty(BooleanMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(BooleanMirror_getInstance())];
  }});
  BooleanMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeBoolean();
  };
  BooleanMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeBoolean_6taknv$(obj);
  };
  Object.defineProperty(BooleanMirror.prototype, 'enumValues', {get: function () {
    return [false, true];
  }});
  BooleanMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BooleanMirror', interfaces: [MirrorClass]};
  var BooleanMirror_instance = null;
  function BooleanMirror_getInstance() {
    if (BooleanMirror_instance === null) {
      new BooleanMirror();
    }
    return BooleanMirror_instance;
  }
  function ByteMirror() {
    ByteMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(ByteMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(ByteMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$byteClass;
  }});
  Object.defineProperty(ByteMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(ByteMirror.prototype, 'localName', {get: function () {
    return 'Byte';
  }});
  Object.defineProperty(ByteMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(ByteMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.BYTE;
  }});
  Object.defineProperty(ByteMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_ByteCompanionObject;
  }});
  Object.defineProperty(ByteMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(ByteMirror_getInstance())];
  }});
  ByteMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeByte();
  };
  ByteMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeByte_s8j3t7$(obj);
  };
  ByteMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ByteMirror', interfaces: [MirrorClass]};
  var ByteMirror_instance = null;
  function ByteMirror_getInstance() {
    if (ByteMirror_instance === null) {
      new ByteMirror();
    }
    return ByteMirror_instance;
  }
  function CharMirror() {
    CharMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(CharMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(CharMirror.prototype, 'kClass', {get: function () {
    return getKClass(Char);
  }});
  Object.defineProperty(CharMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(CharMirror.prototype, 'localName', {get: function () {
    return 'Char';
  }});
  Object.defineProperty(CharMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(CharMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.CHAR;
  }});
  Object.defineProperty(CharMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_CharCompanionObject;
  }});
  Object.defineProperty(CharMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(CharMirror_getInstance())];
  }});
  CharMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeChar();
  };
  CharMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeChar_s8itvh$(obj);
  };
  CharMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CharMirror', interfaces: [MirrorClass]};
  var CharMirror_instance = null;
  function CharMirror_getInstance() {
    if (CharMirror_instance === null) {
      new CharMirror();
    }
    return CharMirror_instance;
  }
  function ComparableMirror(typeT) {
    ComparableMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.typeT = typeT;
  }
  Object.defineProperty(ComparableMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ComparableMirror$Companion_getInstance();
  }});
  function ComparableMirror$Companion() {
    ComparableMirror$Companion_instance = this;
    this.minimal_x3mta5$_0 = new ComparableMirror(new TypeArgumentMirrorType('T', Variance$INVARIANT_getInstance(), AnyMirror_getInstance().nullable));
  }
  Object.defineProperty(ComparableMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_x3mta5$_0;
  }});
  ComparableMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    return new ComparableMirror(typeArguments.get_za3lpa$(0));
  };
  ComparableMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ComparableMirror$Companion_instance = null;
  function ComparableMirror$Companion_getInstance() {
    if (ComparableMirror$Companion_instance === null) {
      new ComparableMirror$Companion();
    }
    return ComparableMirror$Companion_instance;
  }
  Object.defineProperty(ComparableMirror.prototype, 'typeParameters', {get: function () {
    return [this.typeT];
  }});
  Object.defineProperty(ComparableMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Comparable), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ComparableMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(ComparableMirror.prototype, 'localName', {get: function () {
    return 'Comparable';
  }});
  Object.defineProperty(ComparableMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  ComparableMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ComparableMirror', interfaces: [PolymorphicMirror]};
  ComparableMirror.prototype.component1 = function () {
    return this.typeT;
  };
  ComparableMirror.prototype.copy_42h6w7$ = function (typeT) {
    return new ComparableMirror(typeT === void 0 ? this.typeT : typeT);
  };
  ComparableMirror.prototype.toString = function () {
    return 'ComparableMirror(typeT=' + Kotlin.toString(this.typeT) + ')';
  };
  ComparableMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.typeT) | 0;
    return result;
  };
  ComparableMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.typeT, other.typeT))));
  };
  function DoubleMirror() {
    DoubleMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(DoubleMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(DoubleMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$doubleClass;
  }});
  Object.defineProperty(DoubleMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(DoubleMirror.prototype, 'localName', {get: function () {
    return 'Double';
  }});
  Object.defineProperty(DoubleMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(DoubleMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.DOUBLE;
  }});
  Object.defineProperty(DoubleMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_DoubleCompanionObject;
  }});
  Object.defineProperty(DoubleMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(DoubleMirror_getInstance())];
  }});
  DoubleMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeDouble();
  };
  DoubleMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeDouble_14dthe$(obj);
  };
  DoubleMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DoubleMirror', interfaces: [MirrorClass]};
  var DoubleMirror_instance = null;
  function DoubleMirror_getInstance() {
    if (DoubleMirror_instance === null) {
      new DoubleMirror();
    }
    return DoubleMirror_instance;
  }
  function get_nullable($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, MirrorClass))
      return Kotlin.isType(tmp$ = new NullableMirrorType($receiver), MirrorType) ? tmp$ : throwCCE();
    else if (Kotlin.isType($receiver, NullableMirrorType))
      return Kotlin.isType(tmp$_0 = $receiver, MirrorType) ? tmp$_0 : throwCCE();
    else if (Kotlin.isType($receiver, TypeArgumentMirrorType))
      return get_nullable(Kotlin.isType(tmp$_1 = $receiver.minimal, MirrorType) ? tmp$_1 : throwCCE());
    else
      throw IllegalArgumentException_init();
  }
  function get_allImplements$lambda(it) {
    return plus(sequenceOf([it]), get_allImplements(it));
  }
  function get_allImplements($receiver) {
    return flatMap(asSequence($receiver.implements), get_allImplements$lambda);
  }
  function satisfies($receiver, other) {
    var tmp$, tmp$_0;
    if (!other.isNullable && $receiver.isNullable)
      return null;
    if (equals(other.base, AnyMirror_getInstance()))
      return $receiver.base;
    var $receiver_0 = $receiver.base.typeParameters;
    var none$result;
    none$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
        var element = $receiver_0[tmp$_1];
        if (Kotlin.isType(element, TypeArgumentMirrorType)) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    if (none$result && isA($receiver, other))
      return $receiver.base;
    var bk = other.base.kClass;
    var $receiver_1 = get_allImplements($receiver.base);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var tmp$_3;
        if ((tmp$_3 = element_0.base.kClass) != null ? tmp$_3.equals(bk) : null) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      return null;
    }
    var similar = tmp$;
    var $receiver_2 = similar.typeParameters;
    var none$result_0;
    none$break: do {
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver_2.length; ++tmp$_4) {
        var element_1 = $receiver_2[tmp$_4];
        if (Kotlin.isType(element_1, TypeArgumentMirrorType)) {
          none$result_0 = false;
          break none$break;
        }
      }
      none$result_0 = true;
    }
     while (false);
    if (none$result_0)
      return null;
    tmp$_0 = $receiver.base.mirrorClassCompanion;
    if (tmp$_0 == null) {
      return null;
    }
    var mirrorCompanion = tmp$_0;
    var $receiver_3 = toList(mirrorCompanion.minimal.typeParameters);
    var destination = ArrayList_init();
    var tmp$_5;
    tmp$_5 = $receiver_3.iterator();
    while (tmp$_5.hasNext()) {
      var element_2 = tmp$_5.next();
      var tmp$_0_0;
      var tmp$_6;
      if ((tmp$_0_0 = Kotlin.isType(tmp$_6 = element_2, TypeArgumentMirrorType) ? tmp$_6 : null) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    var params = copyToArray(destination);
    if (!apply(params, similar, other))
      return null;
    var destination_0 = ArrayList_init_0(params.length);
    var tmp$_7;
    for (tmp$_7 = 0; tmp$_7 !== params.length; ++tmp$_7) {
      var item = params[tmp$_7];
      destination_0.add_11rb$(item.minimal);
    }
    return mirrorCompanion.make_gt5c0j$(destination_0);
  }
  function apply($receiver, from, to) {
    if (!from.isNullable && to.isNullable)
      return false;
    if (Kotlin.isType(from, TypeArgumentMirrorType)) {
      var indexOfFirst$result;
      indexOfFirst$break: do {
        for (var index = 0; index !== $receiver.length; ++index) {
          if (equals($receiver[index].typeArgumentName, from.typeArgumentName)) {
            indexOfFirst$result = index;
            break indexOfFirst$break;
          }
        }
        indexOfFirst$result = -1;
      }
       while (false);
      var index_0 = indexOfFirst$result;
      if (index_0 === -1) {
        return false;
      }
      var myFrom = $receiver[index_0];
      if (isA(to, myFrom.minimal)) {
        $receiver[index_0] = new TypeArgumentMirrorType(myFrom.typeArgumentName, myFrom.variance, to);
        return true;
      }
       else {
        return false;
      }
    }
    var goalTypeParameters = to.base.typeParameters;
    var minimalTypeParameters = from.base.typeParameters;
    for (var index_1 = 0; index_1 !== goalTypeParameters.length; ++index_1) {
      if (!apply($receiver, minimalTypeParameters[index_1], goalTypeParameters[index_1])) {
        return false;
      }
    }
    return true;
  }
  function isA($receiver, other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (!other.isNullable && $receiver.isNullable)
      return false;
    if (equals(other.base, AnyMirror_getInstance()))
      return true;
    if ((tmp$ = $receiver.base.kClass) != null ? tmp$.equals(other.base.kClass) : null) {
      tmp$_4 = Kotlin.isType(tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = other.base.mirrorClassCompanion) != null ? tmp$_0.minimal : null) != null ? tmp$_1.typeParameters : null) != null ? toList(tmp$_2) : null, List) ? tmp$_3 : null;
      if (tmp$_4 == null) {
        return true;
      }
      var typeArgumentVariances = tmp$_4;
      for (var index = 0; index !== typeArgumentVariances.size; ++index) {
        switch (typeArgumentVariances.get_za3lpa$(index).variance.name) {
          case 'IN':
            if (!isA(other.base.typeParameters[index], $receiver.base.typeParameters[index]))
              return false;
            break;
          case 'OUT':
            if (!isA($receiver.base.typeParameters[index], other.base.typeParameters[index]))
              return false;
            break;
          case 'INVARIANT':
            if (!equals($receiver.base.typeParameters[index], other.base.typeParameters[index]))
              return false;
            break;
          case 'STAR':
            break;
        }
      }
      return true;
    }
    var $receiver_0 = $receiver.base.implements;
    var any$result;
    any$break: do {
      var tmp$_5;
      for (tmp$_5 = 0; tmp$_5 !== $receiver_0.length; ++tmp$_5) {
        var element = $receiver_0[tmp$_5];
        if (isA(element, other)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function FloatMirror() {
    FloatMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(FloatMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(FloatMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$floatClass;
  }});
  Object.defineProperty(FloatMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(FloatMirror.prototype, 'localName', {get: function () {
    return 'Float';
  }});
  Object.defineProperty(FloatMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(FloatMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.FLOAT;
  }});
  Object.defineProperty(FloatMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_FloatCompanionObject;
  }});
  Object.defineProperty(FloatMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(FloatMirror_getInstance())];
  }});
  FloatMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeFloat();
  };
  FloatMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeFloat_mx4ult$(obj);
  };
  FloatMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FloatMirror', interfaces: [MirrorClass]};
  var FloatMirror_instance = null;
  function FloatMirror_getInstance() {
    if (FloatMirror_instance === null) {
      new FloatMirror();
    }
    return FloatMirror_instance;
  }
  function IntMirror() {
    IntMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(IntMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(IntMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$intClass;
  }});
  Object.defineProperty(IntMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(IntMirror.prototype, 'localName', {get: function () {
    return 'Int';
  }});
  Object.defineProperty(IntMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(IntMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.INT;
  }});
  Object.defineProperty(IntMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_IntCompanionObject;
  }});
  Object.defineProperty(IntMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(IntMirror_getInstance())];
  }});
  IntMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeInt();
  };
  IntMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeInt_za3lpa$(obj);
  };
  IntMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntMirror', interfaces: [MirrorClass]};
  var IntMirror_instance = null;
  function IntMirror_getInstance() {
    if (IntMirror_instance === null) {
      new IntMirror();
    }
    return IntMirror_instance;
  }
  function ListMirror(EMirror) {
    ListMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.EMirror = EMirror;
    this.$delegate_9pc8hc$_0 = get_list(EMirror);
    this.$delegate_9pc8hc$_1 = get_list(EMirror).descriptor;
  }
  Object.defineProperty(ListMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ListMirror$Companion_getInstance();
  }});
  function ListMirror$Companion() {
    ListMirror$Companion_instance = this;
    this.EMirrorMinimal = new TypeArgumentMirrorType('E', Variance$OUT_getInstance(), AnyMirror_getInstance().nullable);
    this.minimal_lflmmf$_0 = new ListMirror(this.EMirrorMinimal);
  }
  Object.defineProperty(ListMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_lflmmf$_0;
  }});
  ListMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    return new ListMirror(typeArguments.get_za3lpa$(0));
  };
  ListMirror$Companion.prototype.make_tx243f$ = function (EMirror) {
    if (EMirror === void 0)
      EMirror = null;
    return new ListMirror(EMirror != null ? EMirror : this.EMirrorMinimal);
  };
  ListMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ListMirror$Companion_instance = null;
  function ListMirror$Companion_getInstance() {
    if (ListMirror$Companion_instance === null) {
      new ListMirror$Companion();
    }
    return ListMirror$Companion_instance;
  }
  Object.defineProperty(ListMirror.prototype, 'typeParameters', {get: function () {
    return [this.EMirror];
  }});
  Object.defineProperty(ListMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(List), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ListMirror.prototype, 'packageName', {get: function () {
    return 'kotlin.collections';
  }});
  Object.defineProperty(ListMirror.prototype, 'localName', {get: function () {
    return 'List';
  }});
  Object.defineProperty(ListMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(ListMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  Object.defineProperty(ListMirror.prototype, 'descriptor', {get: function () {
    return this.$delegate_9pc8hc$_0.descriptor;
  }});
  ListMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.$delegate_9pc8hc$_0.deserialize_nts5qn$(decoder);
  };
  ListMirror.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.$delegate_9pc8hc$_0.patch_mynpiu$(decoder, old);
  };
  ListMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.$delegate_9pc8hc$_0.serialize_awe97i$(encoder, obj);
  };
  Object.defineProperty(ListMirror.prototype, 'elementsCount', {get: function () {
    return this.$delegate_9pc8hc$_1.elementsCount;
  }});
  Object.defineProperty(ListMirror.prototype, 'isNullable', {get: function () {
    return this.$delegate_9pc8hc$_1.isNullable;
  }});
  Object.defineProperty(ListMirror.prototype, 'kind', {get: function () {
    return this.$delegate_9pc8hc$_1.kind;
  }});
  Object.defineProperty(ListMirror.prototype, 'name', {get: function () {
    return this.$delegate_9pc8hc$_1.name;
  }});
  ListMirror.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_9pc8hc$_1.getElementAnnotations_za3lpa$(index);
  };
  ListMirror.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_9pc8hc$_1.getElementDescriptor_za3lpa$(index);
  };
  ListMirror.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_9pc8hc$_1.getElementIndex_61zpoe$(name);
  };
  ListMirror.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_9pc8hc$_1.getElementName_za3lpa$(index);
  };
  ListMirror.prototype.getEntityAnnotations = function () {
    return this.$delegate_9pc8hc$_1.getEntityAnnotations();
  };
  ListMirror.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_9pc8hc$_1.isElementOptional_za3lpa$(index);
  };
  ListMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListMirror', interfaces: [MirrorClass, SerialDescriptor, KSerializer]};
  ListMirror.prototype.component1 = function () {
    return this.EMirror;
  };
  ListMirror.prototype.copy_42h6w7$ = function (EMirror) {
    return new ListMirror(EMirror === void 0 ? this.EMirror : EMirror);
  };
  ListMirror.prototype.toString = function () {
    return 'ListMirror(EMirror=' + Kotlin.toString(this.EMirror) + ')';
  };
  ListMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.EMirror) | 0;
    return result;
  };
  ListMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.EMirror, other.EMirror))));
  };
  function LongMirror() {
    LongMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(LongMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(LongMirror.prototype, 'kClass', {get: function () {
    return getKClass(Long);
  }});
  Object.defineProperty(LongMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(LongMirror.prototype, 'localName', {get: function () {
    return 'Long';
  }});
  Object.defineProperty(LongMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(LongMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.LONG;
  }});
  Object.defineProperty(LongMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_LongCompanionObject;
  }});
  Object.defineProperty(LongMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(LongMirror_getInstance())];
  }});
  LongMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeLong();
  };
  LongMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeLong_s8cxhz$(obj);
  };
  LongMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LongMirror', interfaces: [MirrorClass]};
  var LongMirror_instance = null;
  function LongMirror_getInstance() {
    if (LongMirror_instance === null) {
      new LongMirror();
    }
    return LongMirror_instance;
  }
  function MapMirror(KMirror, VMirror) {
    MapMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.KMirror = KMirror;
    this.VMirror = VMirror;
    this.$delegate_cwezh4$_0 = get_map(to(KMirror, VMirror));
    this.$delegate_cwezh4$_1 = get_map(to(KMirror, VMirror)).descriptor;
  }
  Object.defineProperty(MapMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return MapMirror$Companion_getInstance();
  }});
  function MapMirror$Companion() {
    MapMirror$Companion_instance = this;
    this.KMirrorMinimal = new TypeArgumentMirrorType('K', Variance$INVARIANT_getInstance(), AnyMirror_getInstance().nullable);
    this.VMirrorMinimal = new TypeArgumentMirrorType('V', Variance$OUT_getInstance(), AnyMirror_getInstance().nullable);
    this.minimal_hizlj3$_0 = new MapMirror(this.KMirrorMinimal, this.VMirrorMinimal);
  }
  Object.defineProperty(MapMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_hizlj3$_0;
  }});
  MapMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    return new MapMirror(typeArguments.get_za3lpa$(0), typeArguments.get_za3lpa$(1));
  };
  MapMirror$Companion.prototype.make_9l4i5w$ = function (KMirror, VMirror) {
    return new MapMirror(KMirror != null ? KMirror : this.KMirrorMinimal, VMirror != null ? VMirror : this.VMirrorMinimal);
  };
  MapMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var MapMirror$Companion_instance = null;
  function MapMirror$Companion_getInstance() {
    if (MapMirror$Companion_instance === null) {
      new MapMirror$Companion();
    }
    return MapMirror$Companion_instance;
  }
  Object.defineProperty(MapMirror.prototype, 'typeParameters', {get: function () {
    return [this.KMirror, this.VMirror];
  }});
  Object.defineProperty(MapMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Map), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(MapMirror.prototype, 'packageName', {get: function () {
    return 'kotlin.collections';
  }});
  Object.defineProperty(MapMirror.prototype, 'localName', {get: function () {
    return 'Map';
  }});
  Object.defineProperty(MapMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(MapMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  Object.defineProperty(MapMirror.prototype, 'descriptor', {get: function () {
    return this.$delegate_cwezh4$_0.descriptor;
  }});
  MapMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.$delegate_cwezh4$_0.deserialize_nts5qn$(decoder);
  };
  MapMirror.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.$delegate_cwezh4$_0.patch_mynpiu$(decoder, old);
  };
  MapMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.$delegate_cwezh4$_0.serialize_awe97i$(encoder, obj);
  };
  Object.defineProperty(MapMirror.prototype, 'elementsCount', {get: function () {
    return this.$delegate_cwezh4$_1.elementsCount;
  }});
  Object.defineProperty(MapMirror.prototype, 'isNullable', {get: function () {
    return this.$delegate_cwezh4$_1.isNullable;
  }});
  Object.defineProperty(MapMirror.prototype, 'kind', {get: function () {
    return this.$delegate_cwezh4$_1.kind;
  }});
  Object.defineProperty(MapMirror.prototype, 'name', {get: function () {
    return this.$delegate_cwezh4$_1.name;
  }});
  MapMirror.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_cwezh4$_1.getElementAnnotations_za3lpa$(index);
  };
  MapMirror.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_cwezh4$_1.getElementDescriptor_za3lpa$(index);
  };
  MapMirror.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_cwezh4$_1.getElementIndex_61zpoe$(name);
  };
  MapMirror.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_cwezh4$_1.getElementName_za3lpa$(index);
  };
  MapMirror.prototype.getEntityAnnotations = function () {
    return this.$delegate_cwezh4$_1.getEntityAnnotations();
  };
  MapMirror.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_cwezh4$_1.isElementOptional_za3lpa$(index);
  };
  MapMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapMirror', interfaces: [MirrorClass, SerialDescriptor, KSerializer]};
  MapMirror.prototype.component1 = function () {
    return this.KMirror;
  };
  MapMirror.prototype.component2 = function () {
    return this.VMirror;
  };
  MapMirror.prototype.copy_3tksjj$ = function (KMirror, VMirror) {
    return new MapMirror(KMirror === void 0 ? this.KMirror : KMirror, VMirror === void 0 ? this.VMirror : VMirror);
  };
  MapMirror.prototype.toString = function () {
    return 'MapMirror(KMirror=' + Kotlin.toString(this.KMirror) + (', VMirror=' + Kotlin.toString(this.VMirror)) + ')';
  };
  MapMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.KMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.VMirror) | 0;
    return result;
  };
  MapMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.KMirror, other.KMirror) && Kotlin.equals(this.VMirror, other.VMirror)))));
  };
  function MirrorAnnotation() {
  }
  MirrorAnnotation.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MirrorAnnotation', interfaces: [Annotation]};
  function MirrorClass() {
    this.fieldsIndex_kzjr93$_0 = lazy(MirrorClass$fieldsIndex$lambda(this));
  }
  Object.defineProperty(MirrorClass.prototype, 'base', {get: function () {
    return this;
  }});
  Object.defineProperty(MirrorClass.prototype, 'descriptor', {get: function () {
    return this;
  }});
  Object.defineProperty(MirrorClass.prototype, 'kind', {get: function () {
    return StructureKind.CLASS;
  }});
  Object.defineProperty(MirrorClass.prototype, 'mirrorClassCompanion', {get: function () {
    return null;
  }});
  Object.defineProperty(MirrorClass.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorClass.prototype, 'modifiers', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorClass.prototype, 'owningClass', {get: function () {
    return null;
  }});
  Object.defineProperty(MirrorClass.prototype, 'companion', {get: function () {
    return null;
  }});
  Object.defineProperty(MirrorClass.prototype, 'annotations', {get: function () {
    return emptyList();
  }});
  Object.defineProperty(MirrorClass.prototype, 'enumValues', {get: function () {
    return null;
  }});
  Object.defineProperty(MirrorClass.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorClass.prototype, 'name', {get: function () {
    return this.packageName + '.' + this.localName;
  }});
  Object.defineProperty(MirrorClass.prototype, 'nullable', {get: function () {
    return new NullableMirrorType(this);
  }});
  Object.defineProperty(MirrorClass.prototype, 'fieldsIndex', {get: function () {
    return this.fieldsIndex_kzjr93$_0.value;
  }});
  Object.defineProperty(MirrorClass.prototype, 'elementsCount', {get: function () {
    return this.fields.length;
  }});
  MirrorClass.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.fieldsIndex.get_11rb$(name)) != null ? tmp$ : -3;
  };
  MirrorClass.prototype.getElementName_za3lpa$ = function (index) {
    return this.fields[index].name;
  };
  MirrorClass.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.fields[index].annotations;
  };
  MirrorClass.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.fields[index].type;
  };
  MirrorClass.prototype.getEntityAnnotations = function () {
    return this.annotations;
  };
  MirrorClass.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.fields[index].optional;
  };
  function MirrorClass$Field(owner, index, name, type, optional, get, set, annotations) {
    if (optional === void 0)
      optional = false;
    if (set === void 0)
      set = null;
    if (annotations === void 0) {
      annotations = emptyList();
    }
    this.owner = owner;
    this.index = index;
    this.name = name;
    this.type = type;
    this.optional = optional;
    this.get = get;
    this.set = set;
    this.annotations = annotations;
  }
  MirrorClass$Field.prototype.toString = function () {
    return this.owner.name + '.' + this.name;
  };
  MirrorClass$Field.$metadata$ = {kind: Kind_CLASS, simpleName: 'Field', interfaces: []};
  MirrorClass$Field.prototype.component1 = function () {
    return this.owner;
  };
  MirrorClass$Field.prototype.component2 = function () {
    return this.index;
  };
  MirrorClass$Field.prototype.component3 = function () {
    return this.name;
  };
  MirrorClass$Field.prototype.component4 = function () {
    return this.type;
  };
  MirrorClass$Field.prototype.component5 = function () {
    return this.optional;
  };
  MirrorClass$Field.prototype.component6 = function () {
    return this.get;
  };
  MirrorClass$Field.prototype.component7 = function () {
    return this.set;
  };
  MirrorClass$Field.prototype.component8 = function () {
    return this.annotations;
  };
  MirrorClass$Field.prototype.copy_nlbc90$ = function (owner, index, name, type, optional, get, set, annotations) {
    return new MirrorClass$Field(owner === void 0 ? this.owner : owner, index === void 0 ? this.index : index, name === void 0 ? this.name : name, type === void 0 ? this.type : type, optional === void 0 ? this.optional : optional, get === void 0 ? this.get : get, set === void 0 ? this.set : set, annotations === void 0 ? this.annotations : annotations);
  };
  MirrorClass$Field.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.optional) | 0;
    result = result * 31 + Kotlin.hashCode(this.get) | 0;
    result = result * 31 + Kotlin.hashCode(this.set) | 0;
    result = result * 31 + Kotlin.hashCode(this.annotations) | 0;
    return result;
  };
  MirrorClass$Field.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.optional, other.optional) && Kotlin.equals(this.get, other.get) && Kotlin.equals(this.set, other.set) && Kotlin.equals(this.annotations, other.annotations)))));
  };
  function MirrorClass$Modifier(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MirrorClass$Modifier_initFields() {
    MirrorClass$Modifier_initFields = function () {
    };
    MirrorClass$Modifier$Sealed_instance = new MirrorClass$Modifier('Sealed', 0);
    MirrorClass$Modifier$Abstract_instance = new MirrorClass$Modifier('Abstract', 1);
    MirrorClass$Modifier$Data_instance = new MirrorClass$Modifier('Data', 2);
    MirrorClass$Modifier$Open_instance = new MirrorClass$Modifier('Open', 3);
    MirrorClass$Modifier$Interface_instance = new MirrorClass$Modifier('Interface', 4);
    MirrorClass$Modifier$Inline_instance = new MirrorClass$Modifier('Inline', 5);
    MirrorClass$Modifier$Object_instance = new MirrorClass$Modifier('Object', 6);
  }
  var MirrorClass$Modifier$Sealed_instance;
  function MirrorClass$Modifier$Sealed_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Sealed_instance;
  }
  var MirrorClass$Modifier$Abstract_instance;
  function MirrorClass$Modifier$Abstract_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Abstract_instance;
  }
  var MirrorClass$Modifier$Data_instance;
  function MirrorClass$Modifier$Data_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Data_instance;
  }
  var MirrorClass$Modifier$Open_instance;
  function MirrorClass$Modifier$Open_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Open_instance;
  }
  var MirrorClass$Modifier$Interface_instance;
  function MirrorClass$Modifier$Interface_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Interface_instance;
  }
  var MirrorClass$Modifier$Inline_instance;
  function MirrorClass$Modifier$Inline_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Inline_instance;
  }
  var MirrorClass$Modifier$Object_instance;
  function MirrorClass$Modifier$Object_getInstance() {
    MirrorClass$Modifier_initFields();
    return MirrorClass$Modifier$Object_instance;
  }
  MirrorClass$Modifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'Modifier', interfaces: [Enum]};
  function MirrorClass$Modifier$values() {
    return [MirrorClass$Modifier$Sealed_getInstance(), MirrorClass$Modifier$Abstract_getInstance(), MirrorClass$Modifier$Data_getInstance(), MirrorClass$Modifier$Open_getInstance(), MirrorClass$Modifier$Interface_getInstance(), MirrorClass$Modifier$Inline_getInstance(), MirrorClass$Modifier$Object_getInstance()];
  }
  MirrorClass$Modifier.values = MirrorClass$Modifier$values;
  function MirrorClass$Modifier$valueOf(name) {
    switch (name) {
      case 'Sealed':
        return MirrorClass$Modifier$Sealed_getInstance();
      case 'Abstract':
        return MirrorClass$Modifier$Abstract_getInstance();
      case 'Data':
        return MirrorClass$Modifier$Data_getInstance();
      case 'Open':
        return MirrorClass$Modifier$Open_getInstance();
      case 'Interface':
        return MirrorClass$Modifier$Interface_getInstance();
      case 'Inline':
        return MirrorClass$Modifier$Inline_getInstance();
      case 'Object':
        return MirrorClass$Modifier$Object_getInstance();
      default:throwISE('No enum constant com.lightningkite.mirror.info.MirrorClass.Modifier.' + name);
    }
  }
  MirrorClass$Modifier.valueOf_61zpoe$ = MirrorClass$Modifier$valueOf;
  function MirrorClass$fieldsIndex$lambda(this$MirrorClass) {
    return function () {
      var $receiver = withIndex(this$MirrorClass.fields);
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var pair = to(element.value.name, element.index);
        destination.put_xwzc9p$(pair.first, pair.second);
      }
      return destination;
    };
  }
  MirrorClass.$metadata$ = {kind: Kind_CLASS, simpleName: 'MirrorClass', interfaces: [MirrorType]};
  function MirrorClassCompanion() {
  }
  MirrorClassCompanion.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MirrorClassCompanion', interfaces: []};
  function MirrorClassFieldMirror(OwnerMirror, ValueMirror) {
    MirrorClassFieldMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.OwnerMirror = OwnerMirror;
    this.ValueMirror = ValueMirror;
  }
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return MirrorClassFieldMirror$Companion_getInstance();
  }});
  function MirrorClassFieldMirror$Companion() {
    MirrorClassFieldMirror$Companion_instance = this;
    this.minimal_ef7zd6$_0 = new MirrorClassFieldMirror(new TypeArgumentMirrorType('Owner', Variance$IN_getInstance(), AnyMirror_getInstance()), new TypeArgumentMirrorType('Value', Variance$INVARIANT_getInstance(), AnyMirror_getInstance().nullable));
  }
  Object.defineProperty(MirrorClassFieldMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_ef7zd6$_0;
  }});
  MirrorClassFieldMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new MirrorClassFieldMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorClass) ? tmp$ : throwCCE(), typeArguments.get_za3lpa$(1));
  };
  MirrorClassFieldMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var MirrorClassFieldMirror$Companion_instance = null;
  function MirrorClassFieldMirror$Companion_getInstance() {
    if (MirrorClassFieldMirror$Companion_instance === null) {
      new MirrorClassFieldMirror$Companion();
    }
    return MirrorClassFieldMirror$Companion_instance;
  }
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'typeParameters', {get: function () {
    return [this.OwnerMirror, this.ValueMirror];
  }});
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(MirrorClass$Field), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.info';
  }});
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'localName', {get: function () {
    return 'MirrorClass.Field';
  }});
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorClassFieldMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.STRING;
  }});
  MirrorClassFieldMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1;
    var text = decoder.decodeString();
    var ownerName = substringBeforeLast(text, 46);
    var fieldName = substringAfterLast(text, 46);
    tmp$ = MirrorRegistry_getInstance().get_61zpoe$(ownerName);
    if (tmp$ == null) {
      throw new SerializationException("Unknown type name '" + ownerName + "', did you register it?");
    }
    var owner = tmp$;
    tmp$_0 = owner.fieldsIndex.get_11rb$(fieldName);
    if (tmp$_0 == null) {
      throw new SerializationException("Type '" + ownerName + "' has no field " + fieldName);
    }
    var fieldIndex = tmp$_0;
    return Kotlin.isType(tmp$_1 = owner.fields[fieldIndex], MirrorClass$Field) ? tmp$_1 : throwCCE();
  };
  MirrorClassFieldMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeString_61zpoe$(obj.owner.name + '.' + obj.name);
  };
  MirrorClassFieldMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'MirrorClassFieldMirror', interfaces: [MirrorClass]};
  MirrorClassFieldMirror.prototype.component1 = function () {
    return this.OwnerMirror;
  };
  MirrorClassFieldMirror.prototype.component2 = function () {
    return this.ValueMirror;
  };
  MirrorClassFieldMirror.prototype.copy_i56qo9$ = function (OwnerMirror, ValueMirror) {
    return new MirrorClassFieldMirror(OwnerMirror === void 0 ? this.OwnerMirror : OwnerMirror, ValueMirror === void 0 ? this.ValueMirror : ValueMirror);
  };
  MirrorClassFieldMirror.prototype.toString = function () {
    return 'MirrorClassFieldMirror(OwnerMirror=' + Kotlin.toString(this.OwnerMirror) + (', ValueMirror=' + Kotlin.toString(this.ValueMirror)) + ')';
  };
  MirrorClassFieldMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.OwnerMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.ValueMirror) | 0;
    return result;
  };
  MirrorClassFieldMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.OwnerMirror, other.OwnerMirror) && Kotlin.equals(this.ValueMirror, other.ValueMirror)))));
  };
  function MirrorClassMirror(TypeMirror) {
    MirrorClassMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TypeMirror = TypeMirror;
  }
  Object.defineProperty(MirrorClassMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return MirrorClassMirror$Companion_getInstance();
  }});
  function MirrorClassMirror$Companion() {
    MirrorClassMirror$Companion_instance = this;
    this.TypeMirrorMinimal = AnyMirror_getInstance();
    this.minimal_c8co8s$_0 = new MirrorClassMirror(new TypeArgumentMirrorType('Type', Variance$INVARIANT_getInstance(), AnyMirror_getInstance()));
  }
  function MirrorClassMirror$Companion$Index(byName, byClass) {
    this.byName = byName;
    this.byClass = byClass;
  }
  MirrorClassMirror$Companion$Index.$metadata$ = {kind: Kind_CLASS, simpleName: 'Index', interfaces: []};
  Object.defineProperty(MirrorClassMirror$Companion.prototype, 'index', {get: function () {
    return MirrorRegistry_getInstance().index;
  }});
  MirrorClassMirror$Companion.prototype.register_iraexb$ = function (mirror) {
    MirrorRegistry_getInstance().register_iraexb$(mirror.slice());
  };
  MirrorClassMirror$Companion.prototype.retrieve_za3rmp$ = function (any) {
    return MirrorRegistry_getInstance().retrieve_za3rmp$(any);
  };
  Object.defineProperty(MirrorClassMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_c8co8s$_0;
  }});
  MirrorClassMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new MirrorClassMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  MirrorClassMirror$Companion.prototype.make_tx243f$ = function (TypeMirror) {
    var tmp$, tmp$_0;
    return new MirrorClassMirror((tmp$_0 = Kotlin.isType(tmp$ = TypeMirror, MirrorType) ? tmp$ : null) != null ? tmp$_0 : this.TypeMirrorMinimal);
  };
  MirrorClassMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var MirrorClassMirror$Companion_instance = null;
  function MirrorClassMirror$Companion_getInstance() {
    if (MirrorClassMirror$Companion_instance === null) {
      new MirrorClassMirror$Companion();
    }
    return MirrorClassMirror$Companion_instance;
  }
  Object.defineProperty(MirrorClassMirror.prototype, 'typeParameters', {get: function () {
    return [this.TypeMirror];
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(MirrorClass), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.info';
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'localName', {get: function () {
    return 'MirrorClass';
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.STRING;
  }});
  Object.defineProperty(MirrorClassMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  MirrorClassMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var typeName = decoder.decodeString();
    tmp$_0 = Kotlin.isType(tmp$ = MirrorRegistry_getInstance().get_61zpoe$(typeName), MirrorClass) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw new SerializationException("Unknown type name '" + typeName + "', did you register it?");
    }
    return tmp$_0;
  };
  MirrorClassMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeString_61zpoe$(obj.name);
  };
  MirrorClassMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'MirrorClassMirror', interfaces: [MirrorClass]};
  MirrorClassMirror.prototype.component1 = function () {
    return this.TypeMirror;
  };
  MirrorClassMirror.prototype.copy_84t8a7$ = function (TypeMirror) {
    return new MirrorClassMirror(TypeMirror === void 0 ? this.TypeMirror : TypeMirror);
  };
  MirrorClassMirror.prototype.toString = function () {
    return 'MirrorClassMirror(TypeMirror=' + Kotlin.toString(this.TypeMirror) + ')';
  };
  MirrorClassMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TypeMirror) | 0;
    return result;
  };
  MirrorClassMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TypeMirror, other.TypeMirror))));
  };
  function MirrorEnum() {
    MirrorClass.call(this);
    this.descriptor_c9cvio$_0 = lazy(MirrorEnum$descriptor$lambda(this));
  }
  Object.defineProperty(MirrorEnum.prototype, 'kind', {get: function () {
    return UnionKind.ENUM_KIND;
  }});
  Object.defineProperty(MirrorEnum.prototype, 'descriptor', {get: function () {
    return this.descriptor_c9cvio$_0.value;
  }});
  Object.defineProperty(MirrorEnum.prototype, 'fields', {get: function () {
    return [];
  }});
  MirrorEnum.prototype.serialize_awe97i$ = function (encoder, obj) {
    var $receiver = indexOf(this.enumValues, obj);
    if (!($receiver !== -1)) {
      var message = obj.toString() + ' is not a valid enum ' + this.name + ', choices are ' + this.enumValues;
      throw IllegalStateException_init(message.toString());
    }
    var index = $receiver;
    encoder.encodeEnum_39yahq$(this.descriptor, index);
  };
  MirrorEnum.prototype.deserialize_nts5qn$ = function (decoder) {
    var index = decoder.decodeEnum_w849qs$(this.descriptor);
    if (!get_indices(this.enumValues).contains_mef7kx$(index)) {
      var message = index.toString() + ' is not among valid ' + this.name + ' choices, choices are ' + this.enumValues;
      throw IllegalStateException_init(message.toString());
    }
    return this.enumValues[index];
  };
  function MirrorEnum$descriptor$lambda(this$MirrorEnum) {
    return function () {
      var tmp$ = this$MirrorEnum.name;
      var $receiver = this$MirrorEnum.enumValues;
      var destination = ArrayList_init_0($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        var tmp$_1;
        destination.add_11rb$((Kotlin.isType(tmp$_1 = item, Enum) ? tmp$_1 : throwCCE()).name);
      }
      return new EnumDescriptor(tmp$, copyToArray(destination));
    };
  }
  MirrorEnum.$metadata$ = {kind: Kind_CLASS, simpleName: 'MirrorEnum', interfaces: [MirrorClass]};
  function MirrorObject(singleton) {
    MirrorClass.call(this);
    this.singleton = singleton;
  }
  Object.defineProperty(MirrorObject.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorObject.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(MirrorObject.prototype, 'kind', {get: function () {
    return UnionKind.OBJECT;
  }});
  Object.defineProperty(MirrorObject.prototype, 'companion', {get: function () {
    return null;
  }});
  MirrorObject.prototype.deserialize_nts5qn$ = function (decoder) {
    decoder.beginStructure_r0sa6z$(this, []).endStructure_qatsm0$(this);
    return this.singleton;
  };
  MirrorObject.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.beginStructure_r0sa6z$(this, []).endStructure_qatsm0$(this);
  };
  MirrorObject.$metadata$ = {kind: Kind_CLASS, simpleName: 'MirrorObject', interfaces: [MirrorClass]};
  function MirrorRegistry() {
    MirrorRegistry_instance = this;
    this.index = new AtomicReference(freeze(new MirrorRegistry$Index(emptyMap(), emptyMap())));
    this.register_iraexb$([UnitMirror_getInstance(), BooleanMirror_getInstance(), ByteMirror_getInstance(), ShortMirror_getInstance(), IntMirror_getInstance(), LongMirror_getInstance(), FloatMirror_getInstance(), DoubleMirror_getInstance(), CharMirror_getInstance(), StringMirror_getInstance(), NumberMirror_getInstance(), MirrorClassMirror$Companion_getInstance().minimal, MirrorClassFieldMirror$Companion_getInstance().minimal, AnyMirror_getInstance(), ListMirror$Companion_getInstance().minimal, MapMirror$Companion_getInstance().minimal, SetMirror$Companion_getInstance().minimal, ComparableMirror$Companion_getInstance().minimal]);
    registerKotlin();
    registerRequests();
  }
  function MirrorRegistry$Index(byName, byClass) {
    this.byName = byName;
    this.byClass = byClass;
  }
  MirrorRegistry$Index.$metadata$ = {kind: Kind_CLASS, simpleName: 'Index', interfaces: []};
  MirrorRegistry.prototype.register_iraexb$ = function (mirror) {
    var current = this.index.value;
    var tmp$ = this.index;
    var tmp$_0 = current.byName;
    var capacity = coerceAtLeast(mapCapacity(mirror.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== mirror.length; ++tmp$_1) {
      var element = mirror[tmp$_1];
      destination.put_xwzc9p$(element.name, element);
    }
    var tmp$_2 = plus_0(tmp$_0, destination);
    var tmp$_3 = current.byClass;
    var capacity_0 = coerceAtLeast(mapCapacity(mirror.length), 16);
    var destination_0 = LinkedHashMap_init(capacity_0);
    var tmp$_4;
    for (tmp$_4 = 0; tmp$_4 !== mirror.length; ++tmp$_4) {
      var element_0 = mirror[tmp$_4];
      destination_0.put_xwzc9p$(element_0.kClass, element_0);
    }
    tmp$.value = freeze(new MirrorRegistry$Index(tmp$_2, plus_0(tmp$_3, destination_0)));
  };
  MirrorRegistry.prototype.get_lmshww$ = function (kClass) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.index.value.byClass.get_11rb$(kClass), MirrorClass) ? tmp$ : null;
  };
  MirrorRegistry.prototype.get_61zpoe$ = function (name) {
    return this.index.value.byName.get_11rb$(name);
  };
  MirrorRegistry.prototype.retrieve_za3rmp$ = function (any) {
    var tmp$;
    tmp$ = this.retrieveOrNull_za3rmp$(any);
    if (tmp$ == null) {
      throw new SerializationException('Cannot serialize ' + Kotlin.getKClassFromExpression(any) + ' because it is not registered.');
    }
    return tmp$;
  };
  MirrorRegistry.prototype.retrieveOrNull_za3rmp$ = function (any) {
    var tmp$, tmp$_0;
    tmp$_0 = this.index.value.byClass.get_11rb$(Kotlin.getKClassFromExpression(any));
    if (tmp$_0 == null) {
      if (Kotlin.isType(any, List))
        tmp$ = ListMirror$Companion_getInstance().minimal;
      else if (Kotlin.isType(any, Set))
        tmp$ = SetMirror$Companion_getInstance().minimal;
      else if (Kotlin.isType(any, Map))
        tmp$ = MapMirror$Companion_getInstance().minimal;
      else if (Kotlin.isType(any, MirrorClass))
        tmp$ = MirrorClassMirror$Companion_getInstance().minimal;
      else if (Kotlin.isType(any, MirrorClass$Field))
        tmp$ = MirrorClassFieldMirror$Companion_getInstance().minimal;
      else
        tmp$ = null;
      tmp$_0 = tmp$;
    }
    return tmp$_0;
  };
  MirrorRegistry.prototype.allSatisfying_xekh30$ = function (type) {
    var $receiver = this.index.value.byName.values;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = satisfies(element, type)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return destination;
  };
  MirrorRegistry.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MirrorRegistry', interfaces: []};
  var MirrorRegistry_instance = null;
  function MirrorRegistry_getInstance() {
    if (MirrorRegistry_instance === null) {
      new MirrorRegistry();
    }
    return MirrorRegistry_instance;
  }
  function get_type($receiver) {
    return ensureNotNull(MirrorRegistry_getInstance().get_lmshww$($receiver));
  }
  function MirrorType() {
  }
  MirrorType.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MirrorType', interfaces: [SerialDescriptor, KSerializer]};
  function NullableMirrorType(base) {
    this.base_tri4h4$_0 = base;
  }
  Object.defineProperty(NullableMirrorType.prototype, 'base', {get: function () {
    return this.base_tri4h4$_0;
  }});
  Object.defineProperty(NullableMirrorType.prototype, 'descriptor', {get: function () {
    return this;
  }});
  Object.defineProperty(NullableMirrorType.prototype, 'isNullable', {get: function () {
    return true;
  }});
  NullableMirrorType.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeNullableSerializableValue_f4686g$(this.base, obj);
  };
  NullableMirrorType.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    return decoder.decodeNullableSerializableValue_aae3ea$(Kotlin.isType(tmp$ = this.base, DeserializationStrategy) ? tmp$ : throwCCE());
  };
  NullableMirrorType.prototype.patch_mynpiu$ = function (decoder, old) {
    var tmp$;
    return decoder.decodeNullableSerializableValue_aae3ea$(Kotlin.isType(tmp$ = this.base, DeserializationStrategy) ? tmp$ : throwCCE());
  };
  Object.defineProperty(NullableMirrorType.prototype, 'elementsCount', {get: function () {
    return this.base.elementsCount;
  }});
  Object.defineProperty(NullableMirrorType.prototype, 'kind', {get: function () {
    return this.base.kind;
  }});
  Object.defineProperty(NullableMirrorType.prototype, 'name', {get: function () {
    return this.base.name;
  }});
  NullableMirrorType.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.base.getElementAnnotations_za3lpa$(index);
  };
  NullableMirrorType.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.base.getElementDescriptor_za3lpa$(index);
  };
  NullableMirrorType.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.base.getElementIndex_61zpoe$(name);
  };
  NullableMirrorType.prototype.getElementName_za3lpa$ = function (index) {
    return this.base.getElementName_za3lpa$(index);
  };
  NullableMirrorType.prototype.getEntityAnnotations = function () {
    return this.base.getEntityAnnotations();
  };
  NullableMirrorType.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.base.isElementOptional_za3lpa$(index);
  };
  NullableMirrorType.$metadata$ = {kind: Kind_CLASS, simpleName: 'NullableMirrorType', interfaces: [MirrorType, SerialDescriptor]};
  NullableMirrorType.prototype.component1 = function () {
    return this.base;
  };
  NullableMirrorType.prototype.copy_mgzxqt$ = function (base) {
    return new NullableMirrorType(base === void 0 ? this.base : base);
  };
  NullableMirrorType.prototype.toString = function () {
    return 'NullableMirrorType(base=' + Kotlin.toString(this.base) + ')';
  };
  NullableMirrorType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    return result;
  };
  NullableMirrorType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.base, other.base))));
  };
  function NumberMirror() {
    NumberMirror_instance = this;
    PolymorphicMirror.call(this);
  }
  Object.defineProperty(NumberMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(NumberMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$numberClass;
  }});
  Object.defineProperty(NumberMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(NumberMirror.prototype, 'localName', {get: function () {
    return 'Number';
  }});
  Object.defineProperty(NumberMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  NumberMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NumberMirror', interfaces: [PolymorphicMirror]};
  var NumberMirror_instance = null;
  function NumberMirror_getInstance() {
    if (NumberMirror_instance === null) {
      new NumberMirror();
    }
    return NumberMirror_instance;
  }
  function PolymorphicMirror() {
    MirrorClass.call(this);
  }
  function PolymorphicMirror$get_PolymorphicMirror$fields$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = MirrorRegistry_getInstance().retrieve_za3rmp$(it), MirrorClass) ? tmp$ : throwCCE();
  }
  function PolymorphicMirror$get_PolymorphicMirror$fields$lambda_0(it) {
    return it;
  }
  Object.defineProperty(PolymorphicMirror.prototype, 'fields', {get: function () {
    return [new MirrorClass$Field(this, 0, 'type', MirrorClassMirror$Companion_getInstance().minimal, false, PolymorphicMirror$get_PolymorphicMirror$fields$lambda, null, emptyList()), new MirrorClass$Field(this, 1, 'value', AnyMirror_getInstance(), false, PolymorphicMirror$get_PolymorphicMirror$fields$lambda_0, null, emptyList())];
  }});
  Object.defineProperty(PolymorphicMirror.prototype, 'kind', {get: function () {
    return UnionKind.POLYMORPHIC;
  }});
  PolymorphicMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var mirror = {v: null};
    var value = {v: null};
    var $receiver = decoder.beginStructure_r0sa6z$(this, []);
    var tmp$, tmp$_0;
    loop: while (true) {
      switch ($receiver.decodeElementIndex_qatsm0$(this)) {
        case -2:
          mirror.v = $receiver.decodeSerializableElement_s44l7r$(this, 0, MirrorClassMirror$Companion_getInstance().minimal);
          value.v = Kotlin.isType(tmp$ = $receiver.decodeSerializableElement_s44l7r$(this, 1, ensureNotNull(mirror.v)), Any) ? tmp$ : throwCCE();
          break loop;
        case -1:
          break loop;
        case 0:
          mirror.v = $receiver.decodeSerializableElement_s44l7r$(this, 0, MirrorClassMirror$Companion_getInstance().minimal);
          break;
        case 1:
          value.v = Kotlin.isType(tmp$_0 = $receiver.decodeSerializableElement_s44l7r$(this, 1, ensureNotNull(mirror.v)), Any) ? tmp$_0 : throwCCE();
          break;
        default:break;
      }
    }
    $receiver.endStructure_qatsm0$(this);
    var value_0 = value.v;
    var requireNotNull$result;
    if (value_0 == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init_0(message.toString());
    }
     else {
      requireNotNull$result = value_0;
    }
    return requireNotNull$result;
  };
  PolymorphicMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$, tmp$_0;
    var struct = encoder.beginStructure_r0sa6z$(this, []);
    var mirror = MirrorRegistry_getInstance().retrieve_za3rmp$(obj);
    struct.encodeSerializableElement_blecud$(this, 0, MirrorClassMirror$Companion_getInstance().minimal, Kotlin.isType(tmp$ = mirror.base, MirrorClass) ? tmp$ : throwCCE());
    struct.encodeSerializableElement_blecud$(this, 1, Kotlin.isType(tmp$_0 = mirror, KSerializer) ? tmp$_0 : throwCCE(), obj);
    struct.endStructure_qatsm0$(this);
  };
  PolymorphicMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicMirror', interfaces: [MirrorClass]};
  function SetMirror(EMirror) {
    SetMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.EMirror = EMirror;
    this.$delegate_i9032q$_0 = get_set(EMirror);
    this.$delegate_i9032q$_1 = get_set(EMirror).descriptor;
  }
  Object.defineProperty(SetMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return SetMirror$Companion_getInstance();
  }});
  function SetMirror$Companion() {
    SetMirror$Companion_instance = this;
    this.EMirrorMinimal = new TypeArgumentMirrorType('E', Variance$OUT_getInstance(), AnyMirror_getInstance().nullable);
    this.minimal_muzf97$_0 = new SetMirror(this.EMirrorMinimal);
  }
  Object.defineProperty(SetMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_muzf97$_0;
  }});
  SetMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    return new SetMirror(typeArguments.get_za3lpa$(0));
  };
  SetMirror$Companion.prototype.make_tx243f$ = function (EMirror) {
    if (EMirror === void 0)
      EMirror = null;
    return new SetMirror(EMirror != null ? EMirror : this.EMirrorMinimal);
  };
  SetMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var SetMirror$Companion_instance = null;
  function SetMirror$Companion_getInstance() {
    if (SetMirror$Companion_instance === null) {
      new SetMirror$Companion();
    }
    return SetMirror$Companion_instance;
  }
  Object.defineProperty(SetMirror.prototype, 'typeParameters', {get: function () {
    return [this.EMirror];
  }});
  Object.defineProperty(SetMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Set), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(SetMirror.prototype, 'packageName', {get: function () {
    return 'kotlin.collections';
  }});
  Object.defineProperty(SetMirror.prototype, 'localName', {get: function () {
    return 'Set';
  }});
  Object.defineProperty(SetMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(SetMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  Object.defineProperty(SetMirror.prototype, 'descriptor', {get: function () {
    return this.$delegate_i9032q$_0.descriptor;
  }});
  SetMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.$delegate_i9032q$_0.deserialize_nts5qn$(decoder);
  };
  SetMirror.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.$delegate_i9032q$_0.patch_mynpiu$(decoder, old);
  };
  SetMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.$delegate_i9032q$_0.serialize_awe97i$(encoder, obj);
  };
  Object.defineProperty(SetMirror.prototype, 'elementsCount', {get: function () {
    return this.$delegate_i9032q$_1.elementsCount;
  }});
  Object.defineProperty(SetMirror.prototype, 'isNullable', {get: function () {
    return this.$delegate_i9032q$_1.isNullable;
  }});
  Object.defineProperty(SetMirror.prototype, 'kind', {get: function () {
    return this.$delegate_i9032q$_1.kind;
  }});
  Object.defineProperty(SetMirror.prototype, 'name', {get: function () {
    return this.$delegate_i9032q$_1.name;
  }});
  SetMirror.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_i9032q$_1.getElementAnnotations_za3lpa$(index);
  };
  SetMirror.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_i9032q$_1.getElementDescriptor_za3lpa$(index);
  };
  SetMirror.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_i9032q$_1.getElementIndex_61zpoe$(name);
  };
  SetMirror.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_i9032q$_1.getElementName_za3lpa$(index);
  };
  SetMirror.prototype.getEntityAnnotations = function () {
    return this.$delegate_i9032q$_1.getEntityAnnotations();
  };
  SetMirror.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_i9032q$_1.isElementOptional_za3lpa$(index);
  };
  SetMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'SetMirror', interfaces: [MirrorClass, SerialDescriptor, KSerializer]};
  SetMirror.prototype.component1 = function () {
    return this.EMirror;
  };
  SetMirror.prototype.copy_42h6w7$ = function (EMirror) {
    return new SetMirror(EMirror === void 0 ? this.EMirror : EMirror);
  };
  SetMirror.prototype.toString = function () {
    return 'SetMirror(EMirror=' + Kotlin.toString(this.EMirror) + ')';
  };
  SetMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.EMirror) | 0;
    return result;
  };
  SetMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.EMirror, other.EMirror))));
  };
  function ShortMirror() {
    ShortMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(ShortMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(ShortMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$shortClass;
  }});
  Object.defineProperty(ShortMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(ShortMirror.prototype, 'localName', {get: function () {
    return 'Short';
  }});
  Object.defineProperty(ShortMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(ShortMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.SHORT;
  }});
  Object.defineProperty(ShortMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_ShortCompanionObject;
  }});
  Object.defineProperty(ShortMirror.prototype, 'implements', {get: function () {
    return [NumberMirror_getInstance(), new ComparableMirror(ShortMirror_getInstance())];
  }});
  ShortMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeShort();
  };
  ShortMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeShort_mq22fl$(obj);
  };
  ShortMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ShortMirror', interfaces: [MirrorClass]};
  var ShortMirror_instance = null;
  function ShortMirror_getInstance() {
    if (ShortMirror_instance === null) {
      new ShortMirror();
    }
    return ShortMirror_instance;
  }
  function StringMirror() {
    StringMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(StringMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(StringMirror.prototype, 'kClass', {get: function () {
    return PrimitiveClasses$stringClass;
  }});
  Object.defineProperty(StringMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(StringMirror.prototype, 'localName', {get: function () {
    return 'String';
  }});
  Object.defineProperty(StringMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(StringMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.STRING;
  }});
  Object.defineProperty(StringMirror.prototype, 'companion', {get: function () {
    return kotlin_js_internal_StringCompanionObject;
  }});
  Object.defineProperty(StringMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(StringMirror_getInstance())];
  }});
  StringMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeString();
  };
  StringMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeString_61zpoe$(obj);
  };
  StringMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringMirror', interfaces: [MirrorClass]};
  var StringMirror_instance = null;
  function StringMirror_getInstance() {
    if (StringMirror_instance === null) {
      new StringMirror();
    }
    return StringMirror_instance;
  }
  function TypeArgumentMirrorType(typeArgumentName, variance, minimal) {
    this.typeArgumentName = typeArgumentName;
    this.variance = variance;
    this.minimal = minimal;
  }
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'base', {get: function () {
    return this.minimal.base;
  }});
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'descriptor', {get: function () {
    return this.minimal.descriptor;
  }});
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'elementsCount', {get: function () {
    return this.minimal.elementsCount;
  }});
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'isNullable', {get: function () {
    return this.minimal.isNullable;
  }});
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'kind', {get: function () {
    return this.minimal.kind;
  }});
  Object.defineProperty(TypeArgumentMirrorType.prototype, 'name', {get: function () {
    return this.minimal.name;
  }});
  TypeArgumentMirrorType.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.minimal.deserialize_nts5qn$(decoder);
  };
  TypeArgumentMirrorType.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.minimal.getElementAnnotations_za3lpa$(index);
  };
  TypeArgumentMirrorType.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.minimal.getElementDescriptor_za3lpa$(index);
  };
  TypeArgumentMirrorType.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.minimal.getElementIndex_61zpoe$(name);
  };
  TypeArgumentMirrorType.prototype.getElementName_za3lpa$ = function (index) {
    return this.minimal.getElementName_za3lpa$(index);
  };
  TypeArgumentMirrorType.prototype.getEntityAnnotations = function () {
    return this.minimal.getEntityAnnotations();
  };
  TypeArgumentMirrorType.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.minimal.isElementOptional_za3lpa$(index);
  };
  TypeArgumentMirrorType.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.minimal.patch_mynpiu$(decoder, old);
  };
  TypeArgumentMirrorType.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.minimal.serialize_awe97i$(encoder, obj);
  };
  TypeArgumentMirrorType.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeArgumentMirrorType', interfaces: [MirrorType]};
  TypeArgumentMirrorType.prototype.component1 = function () {
    return this.typeArgumentName;
  };
  TypeArgumentMirrorType.prototype.component2 = function () {
    return this.variance;
  };
  TypeArgumentMirrorType.prototype.component3 = function () {
    return this.minimal;
  };
  TypeArgumentMirrorType.prototype.copy_r10t9v$ = function (typeArgumentName, variance, minimal) {
    return new TypeArgumentMirrorType(typeArgumentName === void 0 ? this.typeArgumentName : typeArgumentName, variance === void 0 ? this.variance : variance, minimal === void 0 ? this.minimal : minimal);
  };
  TypeArgumentMirrorType.prototype.toString = function () {
    return 'TypeArgumentMirrorType(typeArgumentName=' + Kotlin.toString(this.typeArgumentName) + (', variance=' + Kotlin.toString(this.variance)) + (', minimal=' + Kotlin.toString(this.minimal)) + ')';
  };
  TypeArgumentMirrorType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.typeArgumentName) | 0;
    result = result * 31 + Kotlin.hashCode(this.variance) | 0;
    result = result * 31 + Kotlin.hashCode(this.minimal) | 0;
    return result;
  };
  TypeArgumentMirrorType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.typeArgumentName, other.typeArgumentName) && Kotlin.equals(this.variance, other.variance) && Kotlin.equals(this.minimal, other.minimal)))));
  };
  function UnitMirror() {
    UnitMirror_instance = this;
    MirrorClass.call(this);
  }
  Object.defineProperty(UnitMirror.prototype, 'typeParameters', {get: function () {
    return [];
  }});
  Object.defineProperty(UnitMirror.prototype, 'kClass', {get: function () {
    return getKClass(Object.getPrototypeOf(kotlin.Unit).constructor);
  }});
  Object.defineProperty(UnitMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(UnitMirror.prototype, 'localName', {get: function () {
    return 'Unit';
  }});
  Object.defineProperty(UnitMirror.prototype, 'fields', {get: function () {
    return [];
  }});
  Object.defineProperty(UnitMirror.prototype, 'kind', {get: function () {
    return PrimitiveKind.UNIT;
  }});
  Object.defineProperty(UnitMirror.prototype, 'companion', {get: function () {
    return null;
  }});
  UnitMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    decoder.decodeUnit();
  };
  UnitMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeUnit();
  };
  UnitMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UnitMirror', interfaces: [MirrorClass]};
  var UnitMirror_instance = null;
  function UnitMirror_getInstance() {
    if (UnitMirror_instance === null) {
      new UnitMirror();
    }
    return UnitMirror_instance;
  }
  function Variance(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Variance_initFields() {
    Variance_initFields = function () {
    };
    Variance$IN_instance = new Variance('IN', 0);
    Variance$OUT_instance = new Variance('OUT', 1);
    Variance$INVARIANT_instance = new Variance('INVARIANT', 2);
    Variance$STAR_instance = new Variance('STAR', 3);
  }
  var Variance$IN_instance;
  function Variance$IN_getInstance() {
    Variance_initFields();
    return Variance$IN_instance;
  }
  var Variance$OUT_instance;
  function Variance$OUT_getInstance() {
    Variance_initFields();
    return Variance$OUT_instance;
  }
  var Variance$INVARIANT_instance;
  function Variance$INVARIANT_getInstance() {
    Variance_initFields();
    return Variance$INVARIANT_instance;
  }
  var Variance$STAR_instance;
  function Variance$STAR_getInstance() {
    Variance_initFields();
    return Variance$STAR_instance;
  }
  Variance.$metadata$ = {kind: Kind_CLASS, simpleName: 'Variance', interfaces: [Enum]};
  function Variance$values() {
    return [Variance$IN_getInstance(), Variance$OUT_getInstance(), Variance$INVARIANT_getInstance(), Variance$STAR_getInstance()];
  }
  Variance.values = Variance$values;
  function Variance$valueOf(name) {
    switch (name) {
      case 'IN':
        return Variance$IN_getInstance();
      case 'OUT':
        return Variance$OUT_getInstance();
      case 'INVARIANT':
        return Variance$INVARIANT_getInstance();
      case 'STAR':
        return Variance$STAR_getInstance();
      default:throwISE('No enum constant com.lightningkite.mirror.info.Variance.' + name);
    }
  }
  Variance.valueOf_61zpoe$ = Variance$valueOf;
  function RemoteExceptionData(type, message, trace, data) {
    if (type === void 0)
      type = '';
    if (message === void 0)
      message = '';
    if (trace === void 0)
      trace = '';
    if (data === void 0)
      data = null;
    this.type = type;
    this.message = message;
    this.trace = trace;
    this.data = data;
  }
  RemoteExceptionData.prototype.toString = function () {
    return this.type + ': ' + this.message + ' ' + toString(this.data) + '\n' + this.trace;
  };
  function RemoteExceptionData$Thrown(source) {
    Exception_init(source.message, this);
    this.source = source;
    this.name = 'RemoteExceptionData$Thrown';
  }
  Object.defineProperty(RemoteExceptionData$Thrown.prototype, 'type', {get: function () {
    return this.source.type;
  }});
  Object.defineProperty(RemoteExceptionData$Thrown.prototype, 'trace', {get: function () {
    return this.source.trace;
  }});
  Object.defineProperty(RemoteExceptionData$Thrown.prototype, 'data', {get: function () {
    return this.source.data;
  }});
  RemoteExceptionData$Thrown.$metadata$ = {kind: Kind_CLASS, simpleName: 'Thrown', interfaces: [Exception]};
  RemoteExceptionData.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoteExceptionData', interfaces: []};
  function RemoteResult(resultOrNull, exception) {
    if (resultOrNull === void 0)
      resultOrNull = null;
    if (exception === void 0)
      exception = null;
    this.resultOrNull = resultOrNull;
    this.exception = exception;
  }
  Object.defineProperty(RemoteResult.prototype, 'success', {get: function () {
    return this.exception == null;
  }});
  Object.defineProperty(RemoteResult.prototype, 'result', {get: function () {
    var tmp$;
    if (this.exception != null)
      throw new RemoteExceptionData$Thrown(this.exception);
    return (tmp$ = this.resultOrNull) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  RemoteResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoteResult', interfaces: []};
  RemoteResult.prototype.component1 = function () {
    return this.resultOrNull;
  };
  RemoteResult.prototype.component2 = function () {
    return this.exception;
  };
  RemoteResult.prototype.copy_y2y7xp$ = function (resultOrNull, exception) {
    return new RemoteResult(resultOrNull === void 0 ? this.resultOrNull : resultOrNull, exception === void 0 ? this.exception : exception);
  };
  RemoteResult.prototype.toString = function () {
    return 'RemoteResult(resultOrNull=' + Kotlin.toString(this.resultOrNull) + (', exception=' + Kotlin.toString(this.exception)) + ')';
  };
  RemoteResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.resultOrNull) | 0;
    result = result * 31 + Kotlin.hashCode(this.exception) | 0;
    return result;
  };
  RemoteResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.resultOrNull, other.resultOrNull) && Kotlin.equals(this.exception, other.exception)))));
  };
  function Request() {
  }
  function Request$Handler() {
  }
  Request$Handler.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Handler', interfaces: []};
  Request.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Request', interfaces: []};
  function get_returnType($receiver) {
    var $receiver_0 = ensureNotNull(MirrorRegistry_getInstance().get_lmshww$($receiver)).implements;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (equals(element.name, 'com.lightningkite.mirror.request.Request')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var it = firstOrNull$result;
    var block$result;
    if (it == null)
      throw IllegalArgumentException_init_0('This type (' + $receiver + ') does not extend Request');
    else {
      block$result = it;
    }
    return first(block$result.typeParameters);
  }
  function ThrowsTypesMirror(exceptionTypes) {
    this.exceptionTypes = exceptionTypes;
  }
  Object.defineProperty(ThrowsTypesMirror.prototype, 'annotationType', {get: function () {
    return getKClass(ThrowsTypes);
  }});
  ThrowsTypesMirror.prototype.asMap = function () {
    return mapOf(to('exceptionTypes', this.exceptionTypes));
  };
  ThrowsTypesMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ThrowsTypesMirror', interfaces: [MirrorAnnotation]};
  ThrowsTypesMirror.prototype.component1 = function () {
    return this.exceptionTypes;
  };
  ThrowsTypesMirror.prototype.copy_kand9s$ = function (exceptionTypes) {
    return new ThrowsTypesMirror(exceptionTypes === void 0 ? this.exceptionTypes : exceptionTypes);
  };
  ThrowsTypesMirror.prototype.toString = function () {
    return 'ThrowsTypesMirror(exceptionTypes=' + Kotlin.toString(this.exceptionTypes) + ')';
  };
  ThrowsTypesMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exceptionTypes) | 0;
    return result;
  };
  ThrowsTypesMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.exceptionTypes, other.exceptionTypes))));
  };
  function ComparatorMirror(TMirror) {
    ComparatorMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(ComparatorMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ComparatorMirror$Companion_getInstance();
  }});
  function ComparatorMirror$Companion() {
    ComparatorMirror$Companion_instance = this;
    this.minimal_fdkdnu$_0 = new ComparatorMirror(new TypeArgumentMirrorType('T', Variance$INVARIANT_getInstance(), this.TMirrorMinimal));
  }
  Object.defineProperty(ComparatorMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(ComparatorMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_fdkdnu$_0;
  }});
  ComparatorMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ComparatorMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ComparatorMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ComparatorMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ComparatorMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ComparatorMirror$Companion_instance = null;
  function ComparatorMirror$Companion_getInstance() {
    if (ComparatorMirror$Companion_instance === null) {
      new ComparatorMirror$Companion();
    }
    return ComparatorMirror$Companion_instance;
  }
  Object.defineProperty(ComparatorMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ComparatorMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Comparator), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ComparatorMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier$Interface_getInstance(), MirrorClass$Modifier$Abstract_getInstance()];
  }});
  Object.defineProperty(ComparatorMirror.prototype, 'implements', {get: function () {
    return [AnyMirror_getInstance()];
  }});
  Object.defineProperty(ComparatorMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(ComparatorMirror.prototype, 'localName', {get: function () {
    return 'Comparator';
  }});
  ComparatorMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ComparatorMirror', interfaces: [PolymorphicMirror]};
  ComparatorMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ComparatorMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ComparatorMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ComparatorMirror.prototype.toString = function () {
    return 'ComparatorMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ComparatorMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ComparatorMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function PairMirror(AMirror, BMirror) {
    PairMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.AMirror = AMirror;
    this.BMirror = BMirror;
    this.fieldFirst = new MirrorClass$Field(this, 0, 'first', this.AMirror, false, PairMirror$fieldFirst$lambda, void 0, emptyList());
    this.fieldSecond = new MirrorClass$Field(this, 1, 'second', this.BMirror, false, PairMirror$fieldSecond$lambda, void 0, emptyList());
    this.fields_z60o5y$_0 = [this.fieldFirst, this.fieldSecond];
  }
  Object.defineProperty(PairMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return PairMirror$Companion_getInstance();
  }});
  function PairMirror$Companion() {
    PairMirror$Companion_instance = this;
    this.minimal_i1jji$_0 = new PairMirror(new TypeArgumentMirrorType('A', Variance$OUT_getInstance(), this.AMirrorMinimal), new TypeArgumentMirrorType('B', Variance$OUT_getInstance(), this.BMirrorMinimal));
  }
  Object.defineProperty(PairMirror$Companion.prototype, 'AMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(PairMirror$Companion.prototype, 'BMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(PairMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_i1jji$_0;
  }});
  PairMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0;
    return new PairMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE());
  };
  PairMirror$Companion.prototype.make_9l4i5w$ = function (AMirror, BMirror) {
    if (AMirror === void 0)
      AMirror = null;
    if (BMirror === void 0)
      BMirror = null;
    var tmp$, tmp$_0;
    return new PairMirror(Kotlin.isType(tmp$ = AMirror != null ? AMirror : this.AMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = BMirror != null ? BMirror : this.BMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE());
  };
  PairMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var PairMirror$Companion_instance = null;
  function PairMirror$Companion_getInstance() {
    if (PairMirror$Companion_instance === null) {
      new PairMirror$Companion();
    }
    return PairMirror$Companion_instance;
  }
  Object.defineProperty(PairMirror.prototype, 'typeParameters', {get: function () {
    return [this.AMirror, this.BMirror];
  }});
  Object.defineProperty(PairMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Pair), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(PairMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier$Data_getInstance()];
  }});
  Object.defineProperty(PairMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(PairMirror.prototype, 'localName', {get: function () {
    return 'Pair';
  }});
  Object.defineProperty(PairMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(PairMirror.prototype, 'fields', {get: function () {
    return this.fields_z60o5y$_0;
  }});
  PairMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var firstSet = false;
    var fieldFirst = null;
    var secondSet = false;
    var fieldSecond = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.AMirror, this.BMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldFirst = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.AMirror);
          firstSet = true;
          fieldSecond = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, this.BMirror);
          secondSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldFirst = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.AMirror);
          firstSet = true;
          break;
        case 1:
          fieldSecond = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, this.BMirror);
          secondSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!firstSet) {
      throw new MissingFieldException('first');
    }
    if (!secondSet) {
      throw new MissingFieldException('second');
    }
    return new Pair((tmp$ = fieldFirst) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = fieldSecond) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  PairMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.AMirror, this.BMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.AMirror, obj.first);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, this.BMirror, obj.second);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function PairMirror$fieldFirst$lambda(it) {
    return it.first;
  }
  function PairMirror$fieldSecond$lambda(it) {
    return it.second;
  }
  PairMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'PairMirror', interfaces: [MirrorClass]};
  PairMirror.prototype.component1 = function () {
    return this.AMirror;
  };
  PairMirror.prototype.component2 = function () {
    return this.BMirror;
  };
  PairMirror.prototype.copy_3tksjj$ = function (AMirror, BMirror) {
    return new PairMirror(AMirror === void 0 ? this.AMirror : AMirror, BMirror === void 0 ? this.BMirror : BMirror);
  };
  PairMirror.prototype.toString = function () {
    return 'PairMirror(AMirror=' + Kotlin.toString(this.AMirror) + (', BMirror=' + Kotlin.toString(this.BMirror)) + ')';
  };
  PairMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.AMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.BMirror) | 0;
    return result;
  };
  PairMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.AMirror, other.AMirror) && Kotlin.equals(this.BMirror, other.BMirror)))));
  };
  function registerKotlin() {
    MirrorRegistry_getInstance().register_iraexb$([ComparatorMirror$Companion_getInstance().minimal, TripleMirror$Companion_getInstance().minimal, PairMirror$Companion_getInstance().minimal]);
  }
  function TripleMirror(AMirror, BMirror, CMirror) {
    TripleMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.AMirror = AMirror;
    this.BMirror = BMirror;
    this.CMirror = CMirror;
    this.fieldFirst = new MirrorClass$Field(this, 0, 'first', this.AMirror, false, TripleMirror$fieldFirst$lambda, void 0, emptyList());
    this.fieldSecond = new MirrorClass$Field(this, 1, 'second', this.BMirror, false, TripleMirror$fieldSecond$lambda, void 0, emptyList());
    this.fieldThird = new MirrorClass$Field(this, 2, 'third', this.CMirror, false, TripleMirror$fieldThird$lambda, void 0, emptyList());
    this.fields_3npvhq$_0 = [this.fieldFirst, this.fieldSecond, this.fieldThird];
  }
  Object.defineProperty(TripleMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return TripleMirror$Companion_getInstance();
  }});
  function TripleMirror$Companion() {
    TripleMirror$Companion_instance = this;
    this.minimal_ery1te$_0 = new TripleMirror(new TypeArgumentMirrorType('A', Variance$OUT_getInstance(), this.AMirrorMinimal), new TypeArgumentMirrorType('B', Variance$OUT_getInstance(), this.BMirrorMinimal), new TypeArgumentMirrorType('C', Variance$OUT_getInstance(), this.CMirrorMinimal));
  }
  Object.defineProperty(TripleMirror$Companion.prototype, 'AMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(TripleMirror$Companion.prototype, 'BMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(TripleMirror$Companion.prototype, 'CMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(TripleMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_ery1te$_0;
  }});
  TripleMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0, tmp$_1;
    return new TripleMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = typeArguments.get_za3lpa$(2), MirrorType) ? tmp$_1 : throwCCE());
  };
  TripleMirror$Companion.prototype.make_6e56fv$ = function (AMirror, BMirror, CMirror) {
    if (AMirror === void 0)
      AMirror = null;
    if (BMirror === void 0)
      BMirror = null;
    if (CMirror === void 0)
      CMirror = null;
    var tmp$, tmp$_0, tmp$_1;
    return new TripleMirror(Kotlin.isType(tmp$ = AMirror != null ? AMirror : this.AMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = BMirror != null ? BMirror : this.BMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = CMirror != null ? CMirror : this.CMirrorMinimal, MirrorType) ? tmp$_1 : throwCCE());
  };
  TripleMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var TripleMirror$Companion_instance = null;
  function TripleMirror$Companion_getInstance() {
    if (TripleMirror$Companion_instance === null) {
      new TripleMirror$Companion();
    }
    return TripleMirror$Companion_instance;
  }
  Object.defineProperty(TripleMirror.prototype, 'typeParameters', {get: function () {
    return [this.AMirror, this.BMirror, this.CMirror];
  }});
  Object.defineProperty(TripleMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Triple), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(TripleMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier$Data_getInstance()];
  }});
  Object.defineProperty(TripleMirror.prototype, 'packageName', {get: function () {
    return 'kotlin';
  }});
  Object.defineProperty(TripleMirror.prototype, 'localName', {get: function () {
    return 'Triple';
  }});
  Object.defineProperty(TripleMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(TripleMirror.prototype, 'fields', {get: function () {
    return this.fields_3npvhq$_0;
  }});
  TripleMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1;
    var firstSet = false;
    var fieldFirst = null;
    var secondSet = false;
    var fieldSecond = null;
    var thirdSet = false;
    var fieldThird = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.AMirror, this.BMirror, this.CMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldFirst = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.AMirror);
          firstSet = true;
          fieldSecond = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, this.BMirror);
          secondSet = true;
          fieldThird = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, this.CMirror);
          thirdSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldFirst = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.AMirror);
          firstSet = true;
          break;
        case 1:
          fieldSecond = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, this.BMirror);
          secondSet = true;
          break;
        case 2:
          fieldThird = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, this.CMirror);
          thirdSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!firstSet) {
      throw new MissingFieldException('first');
    }
    if (!secondSet) {
      throw new MissingFieldException('second');
    }
    if (!thirdSet) {
      throw new MissingFieldException('third');
    }
    return new Triple((tmp$ = fieldFirst) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = fieldSecond) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), (tmp$_1 = fieldThird) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE());
  };
  TripleMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.AMirror, this.BMirror, this.CMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.AMirror, obj.first);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, this.BMirror, obj.second);
    encoderStructure.encodeSerializableElement_blecud$(this, 2, this.CMirror, obj.third);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function TripleMirror$fieldFirst$lambda(it) {
    return it.first;
  }
  function TripleMirror$fieldSecond$lambda(it) {
    return it.second;
  }
  function TripleMirror$fieldThird$lambda(it) {
    return it.third;
  }
  TripleMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'TripleMirror', interfaces: [MirrorClass]};
  TripleMirror.prototype.component1 = function () {
    return this.AMirror;
  };
  TripleMirror.prototype.component2 = function () {
    return this.BMirror;
  };
  TripleMirror.prototype.component3 = function () {
    return this.CMirror;
  };
  TripleMirror.prototype.copy_wsb4w6$ = function (AMirror, BMirror, CMirror) {
    return new TripleMirror(AMirror === void 0 ? this.AMirror : AMirror, BMirror === void 0 ? this.BMirror : BMirror, CMirror === void 0 ? this.CMirror : CMirror);
  };
  TripleMirror.prototype.toString = function () {
    return 'TripleMirror(AMirror=' + Kotlin.toString(this.AMirror) + (', BMirror=' + Kotlin.toString(this.BMirror)) + (', CMirror=' + Kotlin.toString(this.CMirror)) + ')';
  };
  TripleMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.AMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.BMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.CMirror) | 0;
    return result;
  };
  TripleMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.AMirror, other.AMirror) && Kotlin.equals(this.BMirror, other.BMirror) && Kotlin.equals(this.CMirror, other.CMirror)))));
  };
  function registerRequests() {
    MirrorRegistry_getInstance().register_iraexb$([RemoteResultMirror$Companion_getInstance().minimal, RemoteExceptionDataMirror_getInstance(), RequestMirror$Companion_getInstance().minimal]);
  }
  function RemoteExceptionDataMirror() {
    RemoteExceptionDataMirror_instance = this;
    MirrorClass.call(this);
    this.fieldType = new MirrorClass$Field(this, 0, 'type', StringMirror_getInstance(), true, RemoteExceptionDataMirror$fieldType$lambda, RemoteExceptionDataMirror$fieldType$lambda_0, emptyList());
    this.fieldMessage = new MirrorClass$Field(this, 1, 'message', StringMirror_getInstance(), true, RemoteExceptionDataMirror$fieldMessage$lambda, RemoteExceptionDataMirror$fieldMessage$lambda_0, emptyList());
    this.fieldTrace = new MirrorClass$Field(this, 2, 'trace', StringMirror_getInstance(), true, RemoteExceptionDataMirror$fieldTrace$lambda, RemoteExceptionDataMirror$fieldTrace$lambda_0, emptyList());
    this.fieldData = new MirrorClass$Field(this, 3, 'data', AnyMirror_getInstance().nullable, true, RemoteExceptionDataMirror$fieldData$lambda, RemoteExceptionDataMirror$fieldData$lambda_0, emptyList());
    this.fields_906tsp$_0 = [this.fieldType, this.fieldMessage, this.fieldTrace, this.fieldData];
  }
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RemoteExceptionData), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'modifiers', {get: function () {
    return [];
  }});
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.request';
  }});
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'localName', {get: function () {
    return 'RemoteExceptionData';
  }});
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(RemoteExceptionDataMirror.prototype, 'fields', {get: function () {
    return this.fields_906tsp$_0;
  }});
  RemoteExceptionDataMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var typeSet = false;
    var fieldType = null;
    var messageSet = false;
    var fieldMessage = null;
    var traceSet = false;
    var fieldTrace = null;
    var dataSet = false;
    var fieldData = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldType = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          typeSet = true;
          fieldMessage = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          messageSet = true;
          fieldTrace = decoderStructure.decodeStringElement_3zr2iy$(this, 2);
          traceSet = true;
          fieldData = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, AnyMirror_getInstance().nullable);
          dataSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldType = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          typeSet = true;
          break;
        case 1:
          fieldMessage = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          messageSet = true;
          break;
        case 2:
          fieldTrace = decoderStructure.decodeStringElement_3zr2iy$(this, 2);
          traceSet = true;
          break;
        case 3:
          fieldData = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, AnyMirror_getInstance().nullable);
          dataSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!typeSet) {
      fieldType = '';
    }
    if (!messageSet) {
      fieldMessage = '';
    }
    if (!traceSet) {
      fieldTrace = '';
    }
    if (!dataSet) {
      fieldData = null;
    }
    return new RemoteExceptionData(typeof (tmp$ = fieldType) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = fieldMessage) === 'string' ? tmp$_0 : throwCCE(), typeof (tmp$_1 = fieldTrace) === 'string' ? tmp$_1 : throwCCE(), (tmp$_2 = fieldData) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE());
  };
  RemoteExceptionDataMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.type);
    encoderStructure.encodeStringElement_bgm7zs$(this, 1, obj.message);
    encoderStructure.encodeStringElement_bgm7zs$(this, 2, obj.trace);
    encoderStructure.encodeSerializableElement_blecud$(this, 3, AnyMirror_getInstance().nullable, obj.data);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RemoteExceptionDataMirror$fieldType$lambda(it) {
    return it.type;
  }
  function RemoteExceptionDataMirror$fieldType$lambda_0(it, value) {
    it.type = value;
    return Unit;
  }
  function RemoteExceptionDataMirror$fieldMessage$lambda(it) {
    return it.message;
  }
  function RemoteExceptionDataMirror$fieldMessage$lambda_0(it, value) {
    it.message = value;
    return Unit;
  }
  function RemoteExceptionDataMirror$fieldTrace$lambda(it) {
    return it.trace;
  }
  function RemoteExceptionDataMirror$fieldTrace$lambda_0(it, value) {
    it.trace = value;
    return Unit;
  }
  function RemoteExceptionDataMirror$fieldData$lambda(it) {
    return it.data;
  }
  function RemoteExceptionDataMirror$fieldData$lambda_0(it, value) {
    it.data = value;
    return Unit;
  }
  RemoteExceptionDataMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'RemoteExceptionDataMirror', interfaces: [MirrorClass]};
  var RemoteExceptionDataMirror_instance = null;
  function RemoteExceptionDataMirror_getInstance() {
    if (RemoteExceptionDataMirror_instance === null) {
      new RemoteExceptionDataMirror();
    }
    return RemoteExceptionDataMirror_instance;
  }
  function RemoteResultMirror(TMirror) {
    RemoteResultMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldResultOrNull = new MirrorClass$Field(this, 0, 'resultOrNull', get_nullable(this.TMirror), true, RemoteResultMirror$fieldResultOrNull$lambda, void 0, emptyList());
    this.fieldException = new MirrorClass$Field(this, 1, 'exception', RemoteExceptionDataMirror_getInstance().nullable, true, RemoteResultMirror$fieldException$lambda, void 0, emptyList());
    this.fields_evdpdt$_0 = [this.fieldResultOrNull, this.fieldException];
  }
  Object.defineProperty(RemoteResultMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RemoteResultMirror$Companion_getInstance();
  }});
  function RemoteResultMirror$Companion() {
    RemoteResultMirror$Companion_instance = this;
    this.minimal_t14qlh$_0 = new RemoteResultMirror(new TypeArgumentMirrorType('T', Variance$INVARIANT_getInstance(), this.TMirrorMinimal));
  }
  Object.defineProperty(RemoteResultMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(RemoteResultMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_t14qlh$_0;
  }});
  RemoteResultMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RemoteResultMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RemoteResultMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RemoteResultMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RemoteResultMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RemoteResultMirror$Companion_instance = null;
  function RemoteResultMirror$Companion_getInstance() {
    if (RemoteResultMirror$Companion_instance === null) {
      new RemoteResultMirror$Companion();
    }
    return RemoteResultMirror$Companion_instance;
  }
  Object.defineProperty(RemoteResultMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RemoteResult), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier$Data_getInstance()];
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.request';
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'localName', {get: function () {
    return 'RemoteResult';
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(RemoteResultMirror.prototype, 'fields', {get: function () {
    return this.fields_evdpdt$_0;
  }});
  RemoteResultMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var resultOrNullSet = false;
    var fieldResultOrNull = null;
    var exceptionSet = false;
    var fieldException = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldResultOrNull = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, get_nullable(this.TMirror));
          resultOrNullSet = true;
          fieldException = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, RemoteExceptionDataMirror_getInstance().nullable);
          exceptionSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldResultOrNull = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, get_nullable(this.TMirror));
          resultOrNullSet = true;
          break;
        case 1:
          fieldException = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, RemoteExceptionDataMirror_getInstance().nullable);
          exceptionSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!resultOrNullSet) {
      fieldResultOrNull = null;
    }
    if (!exceptionSet) {
      fieldException = null;
    }
    return new RemoteResult((tmp$ = fieldResultOrNull) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = fieldException) == null || Kotlin.isType(tmp$_0, RemoteExceptionData) ? tmp$_0 : throwCCE());
  };
  RemoteResultMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, get_nullable(this.TMirror), obj.resultOrNull);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, RemoteExceptionDataMirror_getInstance().nullable, obj.exception);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RemoteResultMirror$fieldResultOrNull$lambda(it) {
    return it.resultOrNull;
  }
  function RemoteResultMirror$fieldException$lambda(it) {
    return it.exception;
  }
  RemoteResultMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoteResultMirror', interfaces: [MirrorClass]};
  RemoteResultMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RemoteResultMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new RemoteResultMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RemoteResultMirror.prototype.toString = function () {
    return 'RemoteResultMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RemoteResultMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RemoteResultMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function RequestMirror(TMirror) {
    RequestMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(RequestMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestMirror$Companion_getInstance();
  }});
  function RequestMirror$Companion() {
    RequestMirror$Companion_instance = this;
    this.minimal_mw1nq1$_0 = new RequestMirror(new TypeArgumentMirrorType('T', Variance$OUT_getInstance(), this.TMirrorMinimal));
  }
  Object.defineProperty(RequestMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return AnyMirror_getInstance().nullable;
  }});
  Object.defineProperty(RequestMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_mw1nq1$_0;
  }});
  RequestMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestMirror$Companion_instance = null;
  function RequestMirror$Companion_getInstance() {
    if (RequestMirror$Companion_instance === null) {
      new RequestMirror$Companion();
    }
    return RequestMirror$Companion_instance;
  }
  Object.defineProperty(RequestMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Request), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier$Interface_getInstance()];
  }});
  Object.defineProperty(RequestMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(RequestMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.request';
  }});
  Object.defineProperty(RequestMirror.prototype, 'localName', {get: function () {
    return 'Request';
  }});
  RequestMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestMirror', interfaces: [PolymorphicMirror]};
  RequestMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new RequestMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestMirror.prototype.toString = function () {
    return 'RequestMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  Object.defineProperty(Breaker, 'Companion', {get: Breaker$Companion_getInstance});
  Breaker.E = Breaker$E;
  Breaker.CE = Breaker$CE;
  Breaker.D = Breaker$D;
  Breaker.DE = Breaker$DE;
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$mirror = package$lightningkite.mirror || (package$lightningkite.mirror = {});
  var package$breaker = package$mirror.breaker || (package$mirror.breaker = {});
  package$breaker.Breaker = Breaker;
  Object.defineProperty(PartialBreaker, 'Companion', {get: PartialBreaker$Companion_getInstance});
  PartialBreaker.D = PartialBreaker$D;
  PartialBreaker.DE = PartialBreaker$DE;
  package$breaker.PartialBreaker = PartialBreaker;
  var package$info = package$mirror.info || (package$mirror.info = {});
  package$info.ThrowsTypes = ThrowsTypes;
  Object.defineProperty(package$info, 'AnyMirror', {get: AnyMirror_getInstance});
  Object.defineProperty(package$info, 'BooleanMirror', {get: BooleanMirror_getInstance});
  Object.defineProperty(package$info, 'ByteMirror', {get: ByteMirror_getInstance});
  Object.defineProperty(package$info, 'CharMirror', {get: CharMirror_getInstance});
  Object.defineProperty(ComparableMirror, 'Companion', {get: ComparableMirror$Companion_getInstance});
  package$info.ComparableMirror = ComparableMirror;
  Object.defineProperty(package$info, 'DoubleMirror', {get: DoubleMirror_getInstance});
  package$info.get_nullable_fxyys9$ = get_nullable;
  package$info.get_allImplements_44ipdn$ = get_allImplements;
  package$info.satisfies_w3pkl5$ = satisfies;
  package$info.isA_w3pkl5$ = isA;
  Object.defineProperty(package$info, 'FloatMirror', {get: FloatMirror_getInstance});
  Object.defineProperty(package$info, 'IntMirror', {get: IntMirror_getInstance});
  Object.defineProperty(ListMirror, 'Companion', {get: ListMirror$Companion_getInstance});
  package$info.ListMirror = ListMirror;
  Object.defineProperty(package$info, 'LongMirror', {get: LongMirror_getInstance});
  Object.defineProperty(MapMirror, 'Companion', {get: MapMirror$Companion_getInstance});
  package$info.MapMirror = MapMirror;
  package$info.MirrorAnnotation = MirrorAnnotation;
  MirrorClass.Field = MirrorClass$Field;
  Object.defineProperty(MirrorClass$Modifier, 'Sealed', {get: MirrorClass$Modifier$Sealed_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Abstract', {get: MirrorClass$Modifier$Abstract_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Data', {get: MirrorClass$Modifier$Data_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Open', {get: MirrorClass$Modifier$Open_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Interface', {get: MirrorClass$Modifier$Interface_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Inline', {get: MirrorClass$Modifier$Inline_getInstance});
  Object.defineProperty(MirrorClass$Modifier, 'Object', {get: MirrorClass$Modifier$Object_getInstance});
  MirrorClass.Modifier = MirrorClass$Modifier;
  package$info.MirrorClass = MirrorClass;
  package$info.MirrorClassCompanion = MirrorClassCompanion;
  Object.defineProperty(MirrorClassFieldMirror, 'Companion', {get: MirrorClassFieldMirror$Companion_getInstance});
  package$info.MirrorClassFieldMirror = MirrorClassFieldMirror;
  MirrorClassMirror$Companion.prototype.Index = MirrorClassMirror$Companion$Index;
  Object.defineProperty(MirrorClassMirror, 'Companion', {get: MirrorClassMirror$Companion_getInstance});
  package$info.MirrorClassMirror = MirrorClassMirror;
  package$info.MirrorEnum = MirrorEnum;
  package$info.MirrorObject = MirrorObject;
  MirrorRegistry.prototype.Index = MirrorRegistry$Index;
  Object.defineProperty(package$info, 'MirrorRegistry', {get: MirrorRegistry_getInstance});
  package$info.get_type_1yb8b7$ = get_type;
  package$info.MirrorType = MirrorType;
  package$info.NullableMirrorType = NullableMirrorType;
  Object.defineProperty(package$info, 'NumberMirror', {get: NumberMirror_getInstance});
  package$info.PolymorphicMirror = PolymorphicMirror;
  Object.defineProperty(SetMirror, 'Companion', {get: SetMirror$Companion_getInstance});
  package$info.SetMirror = SetMirror;
  Object.defineProperty(package$info, 'ShortMirror', {get: ShortMirror_getInstance});
  Object.defineProperty(package$info, 'StringMirror', {get: StringMirror_getInstance});
  package$info.TypeArgumentMirrorType = TypeArgumentMirrorType;
  Object.defineProperty(package$info, 'UnitMirror', {get: UnitMirror_getInstance});
  Object.defineProperty(Variance, 'IN', {get: Variance$IN_getInstance});
  Object.defineProperty(Variance, 'OUT', {get: Variance$OUT_getInstance});
  Object.defineProperty(Variance, 'INVARIANT', {get: Variance$INVARIANT_getInstance});
  Object.defineProperty(Variance, 'STAR', {get: Variance$STAR_getInstance});
  package$info.Variance = Variance;
  var package$request = package$mirror.request || (package$mirror.request = {});
  RemoteExceptionData.Thrown = RemoteExceptionData$Thrown;
  package$request.RemoteExceptionData = RemoteExceptionData;
  package$request.RemoteResult = RemoteResult;
  Request.Handler = Request$Handler;
  package$request.Request = Request;
  package$request.get_returnType_ig7i2s$ = get_returnType;
  package$info.ThrowsTypesMirror = ThrowsTypesMirror;
  Object.defineProperty(ComparatorMirror, 'Companion', {get: ComparatorMirror$Companion_getInstance});
  var package$mirror_0 = _.mirror || (_.mirror = {});
  var package$kotlin = package$mirror_0.kotlin || (package$mirror_0.kotlin = {});
  package$kotlin.ComparatorMirror = ComparatorMirror;
  Object.defineProperty(PairMirror, 'Companion', {get: PairMirror$Companion_getInstance});
  package$kotlin.PairMirror = PairMirror;
  package$request.registerKotlin = registerKotlin;
  Object.defineProperty(TripleMirror, 'Companion', {get: TripleMirror$Companion_getInstance});
  package$kotlin.TripleMirror = TripleMirror;
  package$request.registerRequests = registerRequests;
  Object.defineProperty(package$request, 'RemoteExceptionDataMirror', {get: RemoteExceptionDataMirror_getInstance});
  Object.defineProperty(RemoteResultMirror, 'Companion', {get: RemoteResultMirror$Companion_getInstance});
  package$request.RemoteResultMirror = RemoteResultMirror;
  Object.defineProperty(RequestMirror, 'Companion', {get: RequestMirror$Companion_getInstance});
  package$request.RequestMirror = RequestMirror;
  Breaker$E.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  Breaker$E.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  Breaker$E.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  Breaker$CE.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  Breaker$CE.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  Breaker$D.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  Breaker$D.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  Breaker$D.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  Breaker$D.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  Breaker$DE.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  Breaker$DE.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  PartialBreaker$D.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  PartialBreaker$D.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  PartialBreaker$D.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  PartialBreaker$D.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  PartialBreaker$DE.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  PartialBreaker$DE.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  MirrorType.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  Object.defineProperty(MirrorType.prototype, 'elementsCount', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'elementsCount'));
  Object.defineProperty(MirrorType.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  MirrorType.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  MirrorType.prototype.getElementDescriptor_za3lpa$ = SerialDescriptor.prototype.getElementDescriptor_za3lpa$;
  MirrorType.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  MirrorType.prototype.isElementOptional_za3lpa$ = SerialDescriptor.prototype.isElementOptional_za3lpa$;
  MirrorClass.prototype.patch_mynpiu$ = MirrorType.prototype.patch_mynpiu$;
  Object.defineProperty(MirrorClass.prototype, 'isNullable', Object.getOwnPropertyDescriptor(MirrorType.prototype, 'isNullable'));
  return _;
}));

//# sourceMappingURL=mirror-runtime.js.map
