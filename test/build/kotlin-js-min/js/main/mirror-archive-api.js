(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'mirror-runtime', 'kommon', 'kotlinx-serialization-runtime-js', 'lokalize'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('mirror-runtime'), require('kommon'), require('kotlinx-serialization-runtime-js'), require('lokalize'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mirror-archive-api'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mirror-archive-api'.");
    }
    if (typeof this['mirror-runtime'] === 'undefined') {
      throw new Error("Error loading module 'mirror-archive-api'. Its dependency 'mirror-runtime' was not found. Please, check whether 'mirror-runtime' is loaded prior to 'mirror-archive-api'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'mirror-archive-api'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'mirror-archive-api'.");
    }
    if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
      throw new Error("Error loading module 'mirror-archive-api'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'mirror-archive-api'.");
    }
    if (typeof lokalize === 'undefined') {
      throw new Error("Error loading module 'mirror-archive-api'. Its dependency 'lokalize' was not found. Please, check whether 'lokalize' is loaded prior to 'mirror-archive-api'.");
    }
    root['mirror-archive-api'] = factory(typeof this['mirror-archive-api'] === 'undefined' ? {} : this['mirror-archive-api'], kotlin, this['mirror-runtime'], kommon, this['kotlinx-serialization-runtime-js'], lokalize);
  }
}(this, function (_, Kotlin, $module$mirror_runtime, $module$kommon, $module$kotlinx_serialization_runtime_js, $module$lokalize) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var get_type = $module$mirror_runtime.com.lightningkite.mirror.info.get_type_1yb8b7$;
  var MirrorClass$Field = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass.Field;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var getKClass = Kotlin.getKClass;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Throwable = Error;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var SuspendFunction1 = Function;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var sortedWith = Kotlin.kotlin.sequences.sortedWith_vjgqpk$;
  var contentEquals = $module$kommon.com.lightningkite.kommon.collection.contentEquals_tvm4b5$;
  var dropWhile = Kotlin.kotlin.sequences.dropWhile_euau3h$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapIndexed = Kotlin.kotlin.sequences.mapIndexed_b7yuyq$;
  var Comparator = Kotlin.kotlin.Comparator;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var Request = $module$mirror_runtime.com.lightningkite.mirror.request.Request;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var Any = Object;
  var Breaker = $module$mirror_runtime.com.lightningkite.mirror.breaker.Breaker;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Array_0 = Array;
  var Breaker$Breaker$E_init = $module$mirror_runtime.com.lightningkite.mirror.breaker.Breaker.E;
  var Breaker$Breaker$D_init = $module$mirror_runtime.com.lightningkite.mirror.breaker.Breaker.D;
  var UpdateMode = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UpdateMode;
  var PrimitiveKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.PrimitiveKind;
  var UnionKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnionKind;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var StructureKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.StructureKind;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var Decoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.Decoder;
  var CompositeDecoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.CompositeDecoder;
  var toByte = Kotlin.toByte;
  var toShort = Kotlin.toShort;
  var L0 = Kotlin.Long.ZERO;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  var Encoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.Encoder;
  var CompositeEncoder = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.CompositeEncoder;
  var Cbor = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.cbor.Cbor;
  var modules = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.modules;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var Unit = Kotlin.kotlin.Unit;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var asIterable = Kotlin.kotlin.sequences.asIterable_veqyi0$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var firstOrNull_0 = Kotlin.kotlin.sequences.firstOrNull_veqyi0$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var AbstractSerialFormat = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.AbstractSerialFormat;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var toString = Kotlin.toString;
  var contentEquals_0 = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var List = Kotlin.kotlin.collections.List;
  var Collection = Kotlin.kotlin.collections.Collection;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IOException = $module$kotlinx_serialization_runtime_js.kotlinx.io.IOException;
  var ByteBuffer = $module$kotlinx_serialization_runtime_js.kotlinx.io.ByteBuffer;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var Json = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.Json;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var Annotation = Kotlin.kotlin.Annotation;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var emptySequence = Kotlin.kotlin.sequences.emptySequence_287e2$;
  var treeWalkDepthSequence = $module$kommon.com.lightningkite.kommon.collection.treeWalkDepthSequence_u76s3l$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Random = Kotlin.kotlin.random.Random;
  var TimeStamp = $module$lokalize.com.lightningkite.lokalize.time.TimeStamp;
  var now = $module$lokalize.com.lightningkite.lokalize.time.now_4yyikv$;
  var MirrorClass = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var toULong = Kotlin.kotlin.text.toULong_6ic1pp$;
  var L_61441 = Kotlin.Long.fromInt(-61441);
  var L16384 = Kotlin.Long.fromInt(16384);
  var L4611686018427387903 = new Kotlin.Long(-1, 1073741823);
  var L_9223372036854775808 = Kotlin.Long.MIN_VALUE;
  var toString_0 = Kotlin.kotlin.text.toString_hc3rh$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Comparable = Kotlin.kotlin.Comparable;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var ULong_init = Kotlin.kotlin.ULong;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var SortedBag = $module$kommon.com.lightningkite.kommon.collection.SortedBag;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Duration = $module$lokalize.com.lightningkite.lokalize.time.Duration;
  var L15 = Kotlin.Long.fromInt(15);
  var MirrorClass$Modifier = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass.Modifier;
  var info = $module$mirror_runtime.com.lightningkite.mirror.info;
  var MirrorObject = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorObject;
  var MirrorType = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorType;
  var Variance = $module$mirror_runtime.com.lightningkite.mirror.info.Variance;
  var TypeArgumentMirrorType = $module$mirror_runtime.com.lightningkite.mirror.info.TypeArgumentMirrorType;
  var MirrorClassCompanion = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassCompanion;
  var ListMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ListMirror;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var MirrorClassFieldMirror = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassFieldMirror;
  var ComparableMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ComparableMirror;
  var PolymorphicMirror = $module$mirror_runtime.com.lightningkite.mirror.info.PolymorphicMirror;
  var Geohash = $module$lokalize.com.lightningkite.lokalize.location.Geohash;
  var MirrorAnnotation = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorAnnotation;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var RequestMirror = $module$mirror_runtime.com.lightningkite.mirror.request.RequestMirror;
  var get_nullable = $module$mirror_runtime.com.lightningkite.mirror.info.get_nullable_fxyys9$;
  var ComparatorMirror = $module$mirror_runtime.mirror.kotlin.ComparatorMirror;
  var MirrorClassMirror = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassMirror;
  Condition$Never.prototype = Object.create(Condition.prototype);
  Condition$Never.prototype.constructor = Condition$Never;
  Condition$Always.prototype = Object.create(Condition.prototype);
  Condition$Always.prototype.constructor = Condition$Always;
  Condition$And.prototype = Object.create(Condition.prototype);
  Condition$And.prototype.constructor = Condition$And;
  Condition$Or.prototype = Object.create(Condition.prototype);
  Condition$Or.prototype.constructor = Condition$Or;
  Condition$Not.prototype = Object.create(Condition.prototype);
  Condition$Not.prototype.constructor = Condition$Not;
  Condition$Field.prototype = Object.create(Condition.prototype);
  Condition$Field.prototype.constructor = Condition$Field;
  Condition$Equal.prototype = Object.create(Condition.prototype);
  Condition$Equal.prototype.constructor = Condition$Equal;
  Condition$EqualToOne.prototype = Object.create(Condition.prototype);
  Condition$EqualToOne.prototype.constructor = Condition$EqualToOne;
  Condition$NotEqual.prototype = Object.create(Condition.prototype);
  Condition$NotEqual.prototype.constructor = Condition$NotEqual;
  Condition$LessThan.prototype = Object.create(Condition.prototype);
  Condition$LessThan.prototype.constructor = Condition$LessThan;
  Condition$GreaterThan.prototype = Object.create(Condition.prototype);
  Condition$GreaterThan.prototype.constructor = Condition$GreaterThan;
  Condition$LessThanOrEqual.prototype = Object.create(Condition.prototype);
  Condition$LessThanOrEqual.prototype.constructor = Condition$LessThanOrEqual;
  Condition$GreaterThanOrEqual.prototype = Object.create(Condition.prototype);
  Condition$GreaterThanOrEqual.prototype.constructor = Condition$GreaterThanOrEqual;
  Condition$TextSearch.prototype = Object.create(Condition.prototype);
  Condition$TextSearch.prototype.constructor = Condition$TextSearch;
  Condition$StartsWith.prototype = Object.create(Condition.prototype);
  Condition$StartsWith.prototype.constructor = Condition$StartsWith;
  Condition$EndsWith.prototype = Object.create(Condition.prototype);
  Condition$EndsWith.prototype.constructor = Condition$EndsWith;
  Condition$RegexTextSearch.prototype = Object.create(Condition.prototype);
  Condition$RegexTextSearch.prototype.constructor = Condition$RegexTextSearch;
  ConditionAlwaysMirror.prototype = Object.create(MirrorObject.prototype);
  ConditionAlwaysMirror.prototype.constructor = ConditionAlwaysMirror;
  ConditionAndMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionAndMirror.prototype.constructor = ConditionAndMirror;
  ConditionEndsWithMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionEndsWithMirror.prototype.constructor = ConditionEndsWithMirror;
  ConditionEqualMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionEqualMirror.prototype.constructor = ConditionEqualMirror;
  ConditionEqualToOneMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionEqualToOneMirror.prototype.constructor = ConditionEqualToOneMirror;
  ConditionFieldMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionFieldMirror.prototype.constructor = ConditionFieldMirror;
  ConditionGreaterThanMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionGreaterThanMirror.prototype.constructor = ConditionGreaterThanMirror;
  ConditionGreaterThanOrEqualMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionGreaterThanOrEqualMirror.prototype.constructor = ConditionGreaterThanOrEqualMirror;
  ConditionLessThanMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionLessThanMirror.prototype.constructor = ConditionLessThanMirror;
  ConditionLessThanOrEqualMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionLessThanOrEqualMirror.prototype.constructor = ConditionLessThanOrEqualMirror;
  ConditionMirror.prototype = Object.create(PolymorphicMirror.prototype);
  ConditionMirror.prototype.constructor = ConditionMirror;
  ConditionNeverMirror.prototype = Object.create(MirrorObject.prototype);
  ConditionNeverMirror.prototype.constructor = ConditionNeverMirror;
  ConditionNotMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionNotMirror.prototype.constructor = ConditionNotMirror;
  ConditionNotEqualMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionNotEqualMirror.prototype.constructor = ConditionNotEqualMirror;
  ConditionOrMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionOrMirror.prototype.constructor = ConditionOrMirror;
  ConditionRegexTextSearchMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionRegexTextSearchMirror.prototype.constructor = ConditionRegexTextSearchMirror;
  ConditionStartsWithMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionStartsWithMirror.prototype.constructor = ConditionStartsWithMirror;
  ConditionTextSearchMirror.prototype = Object.create(MirrorClass.prototype);
  ConditionTextSearchMirror.prototype.constructor = ConditionTextSearchMirror;
  DatabaseRequestMirror.prototype = Object.create(PolymorphicMirror.prototype);
  DatabaseRequestMirror.prototype.constructor = DatabaseRequestMirror;
  GeohashMirror.prototype = Object.create(MirrorClass.prototype);
  GeohashMirror.prototype.constructor = GeohashMirror;
  HasIdMirror.prototype = Object.create(PolymorphicMirror.prototype);
  HasIdMirror.prototype.constructor = HasIdMirror;
  HasUuidMirror.prototype = Object.create(PolymorphicMirror.prototype);
  HasUuidMirror.prototype.constructor = HasUuidMirror;
  LinkMirror.prototype = Object.create(PolymorphicMirror.prototype);
  LinkMirror.prototype.constructor = LinkMirror;
  LockableMirror.prototype = Object.create(PolymorphicMirror.prototype);
  LockableMirror.prototype.constructor = LockableMirror;
  LockStateMirror.prototype = Object.create(MirrorClass.prototype);
  LockStateMirror.prototype.constructor = LockStateMirror;
  OperationAddDoubleMirror.prototype = Object.create(MirrorClass.prototype);
  OperationAddDoubleMirror.prototype.constructor = OperationAddDoubleMirror;
  OperationAddFloatMirror.prototype = Object.create(MirrorClass.prototype);
  OperationAddFloatMirror.prototype.constructor = OperationAddFloatMirror;
  OperationAddIntMirror.prototype = Object.create(MirrorClass.prototype);
  OperationAddIntMirror.prototype.constructor = OperationAddIntMirror;
  OperationAddLongMirror.prototype = Object.create(MirrorClass.prototype);
  OperationAddLongMirror.prototype.constructor = OperationAddLongMirror;
  OperationAddNumericMirror.prototype = Object.create(PolymorphicMirror.prototype);
  OperationAddNumericMirror.prototype.constructor = OperationAddNumericMirror;
  OperationAppendMirror.prototype = Object.create(MirrorClass.prototype);
  OperationAppendMirror.prototype.constructor = OperationAppendMirror;
  OperationFieldMirror.prototype = Object.create(MirrorClass.prototype);
  OperationFieldMirror.prototype.constructor = OperationFieldMirror;
  OperationMirror.prototype = Object.create(PolymorphicMirror.prototype);
  OperationMirror.prototype.constructor = OperationMirror;
  OperationMultipleMirror.prototype = Object.create(MirrorClass.prototype);
  OperationMultipleMirror.prototype.constructor = OperationMultipleMirror;
  OperationSetMirror.prototype = Object.create(MirrorClass.prototype);
  OperationSetMirror.prototype.constructor = OperationSetMirror;
  ReferenceMirror.prototype = Object.create(MirrorClass.prototype);
  ReferenceMirror.prototype.constructor = ReferenceMirror;
  RequestDatabaseDeleteMirror.prototype = Object.create(MirrorClass.prototype);
  RequestDatabaseDeleteMirror.prototype.constructor = RequestDatabaseDeleteMirror;
  RequestDatabaseGetMirror.prototype = Object.create(MirrorClass.prototype);
  RequestDatabaseGetMirror.prototype.constructor = RequestDatabaseGetMirror;
  RequestDatabaseInsertMirror.prototype = Object.create(MirrorClass.prototype);
  RequestDatabaseInsertMirror.prototype.constructor = RequestDatabaseInsertMirror;
  RequestDatabaseLimitedUpdateMirror.prototype = Object.create(MirrorClass.prototype);
  RequestDatabaseLimitedUpdateMirror.prototype.constructor = RequestDatabaseLimitedUpdateMirror;
  RequestDatabaseUpdateMirror.prototype = Object.create(MirrorClass.prototype);
  RequestDatabaseUpdateMirror.prototype.constructor = RequestDatabaseUpdateMirror;
  SortMirror.prototype = Object.create(MirrorClass.prototype);
  SortMirror.prototype.constructor = SortMirror;
  TimeStampMirror.prototype = Object.create(MirrorClass.prototype);
  TimeStampMirror.prototype.constructor = TimeStampMirror;
  TypedReferenceMirror.prototype = Object.create(MirrorClass.prototype);
  TypedReferenceMirror.prototype.constructor = TypedReferenceMirror;
  UuidMirror.prototype = Object.create(MirrorClass.prototype);
  UuidMirror.prototype.constructor = UuidMirror;
  function Coroutine$get($receiver_0, field_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$field = field_0;
    this.local$value = value_0;
  }
  Coroutine$get.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$get.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get.prototype.constructor = Coroutine$get;
  Coroutine$get.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.get_ip4fwo$(new Condition$Field(this.local$field, new Condition$Equal(this.local$value)), void 0, 1, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return firstOrNull(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function get_0($receiver_0, field_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$get($receiver_0, field_0, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('mirror-archive-api.com.lightningkite.mirror.archive.database.get_iwko2w$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_type = _.$$importsForInline$$['mirror-runtime'].com.lightningkite.mirror.info.get_type_1yb8b7$;
    var equals = Kotlin.equals;
    var ensureNotNull = Kotlin.ensureNotNull;
    var MirrorClass$Field = _.$$importsForInline$$['mirror-runtime'].com.lightningkite.mirror.info.MirrorClass.Field;
    var throwCCE = Kotlin.throwCCE;
    var get = _.com.lightningkite.mirror.archive.database.get_9hni31$;
    return function (T_0, isT, $receiver, id, continuation) {
      var tmp$_1;
      var $receiver_1 = get_type(getKClass(T_0)).fields;
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
          var element_0 = $receiver_1[tmp$_2];
          if (equals(element_0.name, 'id')) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      Kotlin.suspendCall(get($receiver, Kotlin.isType(tmp$_1 = ensureNotNull(firstOrNull$result_0), MirrorClass$Field) ? tmp$_1 : throwCCE(), id, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('mirror-archive-api.com.lightningkite.mirror.archive.database.get_7yptzq$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_type = _.$$importsForInline$$['mirror-runtime'].com.lightningkite.mirror.info.get_type_1yb8b7$;
    var equals = Kotlin.equals;
    var ensureNotNull = Kotlin.ensureNotNull;
    var MirrorClass$Field = _.$$importsForInline$$['mirror-runtime'].com.lightningkite.mirror.info.MirrorClass.Field;
    var throwCCE = Kotlin.throwCCE;
    var get = _.com.lightningkite.mirror.archive.database.get_9hni31$;
    return function (T_0, isT, $receiver, reference, continuation) {
      var tmp$_1;
      var $receiver_1 = get_type(getKClass(T_0)).fields;
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
          var element_0 = $receiver_1[tmp$_2];
          if (equals(element_0.name, 'id')) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      Kotlin.suspendCall(get($receiver, Kotlin.isType(tmp$_1 = ensureNotNull(firstOrNull$result_0), MirrorClass$Field) ? tmp$_1 : throwCCE(), reference.key, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function Database() {
  }
  function Database$Request() {
  }
  Database$Request.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Request', interfaces: []};
  function Database$Handler() {
  }
  Database$Handler.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Handler', interfaces: []};
  function Database$Provider() {
  }
  Database$Provider.prototype.get_q0pum7$ = function (mirrorClass, default_0, name, callback$default) {
    if (name === void 0)
      name = mirrorClass.localName;
    return callback$default ? callback$default(mirrorClass, default_0, name) : this.get_q0pum7$$default(mirrorClass, default_0, name);
  };
  function Database$Provider$FromConfiguration() {
  }
  Object.defineProperty(Database$Provider$FromConfiguration.prototype, 'requiredArguments', {get: function () {
    return [];
  }});
  Object.defineProperty(Database$Provider$FromConfiguration.prototype, 'optionalArguments', {get: function () {
    return [];
  }});
  Database$Provider$FromConfiguration.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'FromConfiguration', interfaces: []};
  Database$Provider.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Provider', interfaces: []};
  Database.prototype.get_ip4fwo$ = function (condition, sort, count, after, continuation, callback$default) {
    if (condition === void 0)
      condition = Condition$Always_getInstance();
    if (sort === void 0) {
      sort = emptyList();
    }
    if (count === void 0)
      count = 100;
    if (after === void 0)
      after = null;
    return callback$default ? callback$default(condition, sort, count, after, continuation) : this.get_ip4fwo$$default(condition, sort, count, after, continuation);
  };
  Database.prototype.limitedUpdate_e9w2wr$ = function (condition, operation, sort, limit, continuation, callback$default) {
    if (sort === void 0) {
      sort = emptyList();
    }
    return callback$default ? callback$default(condition, operation, sort, limit, continuation) : this.limitedUpdate_e9w2wr$$default(condition, operation, sort, limit, continuation);
  };
  Database.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Database', interfaces: []};
  function PartialDatabase(underlying, type, requirements, additionalConditions) {
    if (additionalConditions === void 0)
      additionalConditions = Condition$Always_getInstance();
    this.underlying = underlying;
    this.type = type;
    this.requirements = requirements;
    var $receiver = this.requirements;
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(equal(Kotlin.isType(tmp$_0 = item.key, MirrorClass$Field) ? tmp$_0 : throwCCE(), item.value));
    }
    this.partialCondition = and(new Condition$And(destination), additionalConditions);
  }
  function RamDatabase(type, primaryKey, backingData) {
    RamDatabase$FromConfiguration_getInstance();
    if (primaryKey === void 0)
      primaryKey = findPrimaryKey(type);
    if (backingData === void 0)
      backingData = ArrayList_init_0();
    this.type = type;
    this.primaryKey = primaryKey;
    this.backingData_0 = backingData;
    this.pkSort = sort(this.primaryKey);
  }
  function RamDatabase$FromConfiguration() {
    RamDatabase$FromConfiguration_instance = this;
  }
  Object.defineProperty(RamDatabase$FromConfiguration.prototype, 'name', {get: function () {
    return 'RAM';
  }});
  RamDatabase$FromConfiguration.prototype.invoke_y0zsll$ = function (arguments_0) {
    return RamDatabase$Provider_getInstance();
  };
  RamDatabase$FromConfiguration.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FromConfiguration', interfaces: [Database$Provider$FromConfiguration]};
  var RamDatabase$FromConfiguration_instance = null;
  function RamDatabase$FromConfiguration_getInstance() {
    if (RamDatabase$FromConfiguration_instance === null) {
      new RamDatabase$FromConfiguration();
    }
    return RamDatabase$FromConfiguration_instance;
  }
  function RamDatabase$Provider() {
    RamDatabase$Provider_instance = this;
  }
  RamDatabase$Provider.prototype.get_q0pum7$$default = function (mirrorClass, default_0, name) {
    return new RamDatabase(mirrorClass);
  };
  RamDatabase$Provider.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Provider', interfaces: [Database$Provider]};
  var RamDatabase$Provider_instance = null;
  function RamDatabase$Provider_getInstance() {
    if (RamDatabase$Provider_instance === null) {
      new RamDatabase$Provider();
    }
    return RamDatabase$Provider_instance;
  }
  function RamDatabase$get$lambda(closure$condition) {
    return function (it) {
      return closure$condition.invoke_11rb$(it);
    };
  }
  function RamDatabase$get$lambda$lambda(this$RamDatabase, closure$afterParts, closure$pass) {
    return function (x) {
      var $receiver = this$RamDatabase.primaryKey;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.get(x));
      }
      var xParts = destination;
      if (contentEquals(closure$afterParts, xParts)) {
        closure$pass.v = true;
        return true;
      }
       else
        return !closure$pass.v;
    };
  }
  RamDatabase.prototype.get_ip4fwo$$default = function (condition, sort, count, after, continuation) {
    var it = filter(asSequence(this.backingData_0), RamDatabase$get$lambda(condition));
    var block$result;
    if (sort.isEmpty()) {
      block$result = sortedWith(it, comparator(this.pkSort));
    }
     else {
      block$result = sortedWith(it, comparator(sort));
    }
    var it_0 = block$result;
    var block$result_0;
    if (after == null) {
      block$result_0 = it_0;
    }
     else {
      var pass = {v: false};
      var $receiver = this.primaryKey;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.get(after));
      }
      var afterParts = destination;
      block$result_0 = dropWhile(it_0, RamDatabase$get$lambda$lambda(this, afterParts, pass));
    }
    return toList(take(block$result_0, count));
  };
  RamDatabase.prototype.insert_yp4z7y$ = function (values, continuation) {
    this.backingData_0.addAll_brywnq$(values);
    return values;
  };
  RamDatabase.prototype.update_igrlh$ = function (condition, operation, continuation) {
    var iter = this.backingData_0.listIterator();
    var modifications = 0;
    while (iter.hasNext()) {
      var item = iter.next();
      if (condition.invoke_11rb$(item)) {
        iter.set_11rb$(operation.invoke_11rb$(item));
        modifications = modifications + 1 | 0;
      }
    }
    return modifications;
  };
  function RamDatabase$limitedUpdate$lambda(index, t) {
    return to(index, t);
  }
  function RamDatabase$limitedUpdate$ObjectLiteral(closure$sort) {
    this.backing = comparator(closure$sort);
  }
  RamDatabase$limitedUpdate$ObjectLiteral.prototype.compare = function (a, b) {
    return this.backing.compare(a.second, b.second);
  };
  RamDatabase$limitedUpdate$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function RamDatabase$limitedUpdate$lambda_0(it) {
    return it.first;
  }
  RamDatabase.prototype.limitedUpdate_e9w2wr$$default = function (condition, operation, sort, limit, continuation) {
    var tmp$;
    var indices = map(sortedWith(mapIndexed(asSequence(this.backingData_0), RamDatabase$limitedUpdate$lambda), new RamDatabase$limitedUpdate$ObjectLiteral(sort)), RamDatabase$limitedUpdate$lambda_0);
    var modifications = 0;
    tmp$ = indices.iterator();
    while (tmp$.hasNext()) {
      var index = tmp$.next();
      var item = this.backingData_0.get_za3lpa$(index);
      if (condition.invoke_11rb$(item)) {
        this.backingData_0.set_wxm5ur$(index, operation.invoke_11rb$(item));
        modifications = modifications + 1 | 0;
        if (modifications >= limit)
          break;
      }
    }
    return modifications;
  };
  RamDatabase.prototype.delete_b7ig37$ = function (condition, continuation) {
    var iter = this.backingData_0.listIterator();
    var modifications = 0;
    while (iter.hasNext()) {
      var item = iter.next();
      if (condition.invoke_11rb$(item)) {
        iter.remove();
        modifications = modifications + 1 | 0;
      }
    }
    return modifications;
  };
  RamDatabase.$metadata$ = {kind: Kind_CLASS, simpleName: 'RamDatabase', interfaces: [Database]};
  function RequestDatabase(handler, request) {
    this.handler = handler;
    this.request = request;
  }
  function RequestDatabase$Get(databaseRequest, condition, sort, count, after) {
    if (condition === void 0)
      condition = Condition$Always_getInstance();
    if (sort === void 0) {
      sort = emptyList();
    }
    if (count === void 0)
      count = 100;
    if (after === void 0)
      after = null;
    this.databaseRequest = databaseRequest;
    this.condition = condition;
    this.sort = sort;
    this.count = count;
    this.after = after;
  }
  RequestDatabase$Get.$metadata$ = {kind: Kind_CLASS, simpleName: 'Get', interfaces: [Request]};
  RequestDatabase$Get.prototype.component1 = function () {
    return this.databaseRequest;
  };
  RequestDatabase$Get.prototype.component2 = function () {
    return this.condition;
  };
  RequestDatabase$Get.prototype.component3 = function () {
    return this.sort;
  };
  RequestDatabase$Get.prototype.component4 = function () {
    return this.count;
  };
  RequestDatabase$Get.prototype.component5 = function () {
    return this.after;
  };
  RequestDatabase$Get.prototype.copy_r1qtg9$ = function (databaseRequest, condition, sort, count, after) {
    return new RequestDatabase$Get(databaseRequest === void 0 ? this.databaseRequest : databaseRequest, condition === void 0 ? this.condition : condition, sort === void 0 ? this.sort : sort, count === void 0 ? this.count : count, after === void 0 ? this.after : after);
  };
  RequestDatabase$Get.prototype.toString = function () {
    return 'Get(databaseRequest=' + Kotlin.toString(this.databaseRequest) + (', condition=' + Kotlin.toString(this.condition)) + (', sort=' + Kotlin.toString(this.sort)) + (', count=' + Kotlin.toString(this.count)) + (', after=' + Kotlin.toString(this.after)) + ')';
  };
  RequestDatabase$Get.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.databaseRequest) | 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.after) | 0;
    return result;
  };
  RequestDatabase$Get.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.databaseRequest, other.databaseRequest) && Kotlin.equals(this.condition, other.condition) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.after, other.after)))));
  };
  function RequestDatabase$Insert(databaseRequest, values) {
    this.databaseRequest = databaseRequest;
    this.values = values;
  }
  RequestDatabase$Insert.$metadata$ = {kind: Kind_CLASS, simpleName: 'Insert', interfaces: [Request]};
  RequestDatabase$Insert.prototype.component1 = function () {
    return this.databaseRequest;
  };
  RequestDatabase$Insert.prototype.component2 = function () {
    return this.values;
  };
  RequestDatabase$Insert.prototype.copy_jbf5ur$ = function (databaseRequest, values) {
    return new RequestDatabase$Insert(databaseRequest === void 0 ? this.databaseRequest : databaseRequest, values === void 0 ? this.values : values);
  };
  RequestDatabase$Insert.prototype.toString = function () {
    return 'Insert(databaseRequest=' + Kotlin.toString(this.databaseRequest) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  RequestDatabase$Insert.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.databaseRequest) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  RequestDatabase$Insert.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.databaseRequest, other.databaseRequest) && Kotlin.equals(this.values, other.values)))));
  };
  function RequestDatabase$Update(databaseRequest, condition, operation) {
    this.databaseRequest = databaseRequest;
    this.condition = condition;
    this.operation = operation;
  }
  RequestDatabase$Update.$metadata$ = {kind: Kind_CLASS, simpleName: 'Update', interfaces: [Request]};
  RequestDatabase$Update.prototype.component1 = function () {
    return this.databaseRequest;
  };
  RequestDatabase$Update.prototype.component2 = function () {
    return this.condition;
  };
  RequestDatabase$Update.prototype.component3 = function () {
    return this.operation;
  };
  RequestDatabase$Update.prototype.copy_c7901m$ = function (databaseRequest, condition, operation) {
    return new RequestDatabase$Update(databaseRequest === void 0 ? this.databaseRequest : databaseRequest, condition === void 0 ? this.condition : condition, operation === void 0 ? this.operation : operation);
  };
  RequestDatabase$Update.prototype.toString = function () {
    return 'Update(databaseRequest=' + Kotlin.toString(this.databaseRequest) + (', condition=' + Kotlin.toString(this.condition)) + (', operation=' + Kotlin.toString(this.operation)) + ')';
  };
  RequestDatabase$Update.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.databaseRequest) | 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    result = result * 31 + Kotlin.hashCode(this.operation) | 0;
    return result;
  };
  RequestDatabase$Update.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.databaseRequest, other.databaseRequest) && Kotlin.equals(this.condition, other.condition) && Kotlin.equals(this.operation, other.operation)))));
  };
  function RequestDatabase$LimitedUpdate(databaseRequest, condition, operation, sort, limit) {
    if (sort === void 0) {
      sort = emptyList();
    }
    this.databaseRequest = databaseRequest;
    this.condition = condition;
    this.operation = operation;
    this.sort = sort;
    this.limit = limit;
  }
  RequestDatabase$LimitedUpdate.$metadata$ = {kind: Kind_CLASS, simpleName: 'LimitedUpdate', interfaces: [Request]};
  RequestDatabase$LimitedUpdate.prototype.component1 = function () {
    return this.databaseRequest;
  };
  RequestDatabase$LimitedUpdate.prototype.component2 = function () {
    return this.condition;
  };
  RequestDatabase$LimitedUpdate.prototype.component3 = function () {
    return this.operation;
  };
  RequestDatabase$LimitedUpdate.prototype.component4 = function () {
    return this.sort;
  };
  RequestDatabase$LimitedUpdate.prototype.component5 = function () {
    return this.limit;
  };
  RequestDatabase$LimitedUpdate.prototype.copy_quqt5i$ = function (databaseRequest, condition, operation, sort, limit) {
    return new RequestDatabase$LimitedUpdate(databaseRequest === void 0 ? this.databaseRequest : databaseRequest, condition === void 0 ? this.condition : condition, operation === void 0 ? this.operation : operation, sort === void 0 ? this.sort : sort, limit === void 0 ? this.limit : limit);
  };
  RequestDatabase$LimitedUpdate.prototype.toString = function () {
    return 'LimitedUpdate(databaseRequest=' + Kotlin.toString(this.databaseRequest) + (', condition=' + Kotlin.toString(this.condition)) + (', operation=' + Kotlin.toString(this.operation)) + (', sort=' + Kotlin.toString(this.sort)) + (', limit=' + Kotlin.toString(this.limit)) + ')';
  };
  RequestDatabase$LimitedUpdate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.databaseRequest) | 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    result = result * 31 + Kotlin.hashCode(this.operation) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.limit) | 0;
    return result;
  };
  RequestDatabase$LimitedUpdate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.databaseRequest, other.databaseRequest) && Kotlin.equals(this.condition, other.condition) && Kotlin.equals(this.operation, other.operation) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.limit, other.limit)))));
  };
  function RequestDatabase$Delete(databaseRequest, condition) {
    this.databaseRequest = databaseRequest;
    this.condition = condition;
  }
  RequestDatabase$Delete.$metadata$ = {kind: Kind_CLASS, simpleName: 'Delete', interfaces: [Request]};
  RequestDatabase$Delete.prototype.component1 = function () {
    return this.databaseRequest;
  };
  RequestDatabase$Delete.prototype.component2 = function () {
    return this.condition;
  };
  RequestDatabase$Delete.prototype.copy_z8w2v8$ = function (databaseRequest, condition) {
    return new RequestDatabase$Delete(databaseRequest === void 0 ? this.databaseRequest : databaseRequest, condition === void 0 ? this.condition : condition);
  };
  RequestDatabase$Delete.prototype.toString = function () {
    return 'Delete(databaseRequest=' + Kotlin.toString(this.databaseRequest) + (', condition=' + Kotlin.toString(this.condition)) + ')';
  };
  RequestDatabase$Delete.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.databaseRequest) | 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    return result;
  };
  RequestDatabase$Delete.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.databaseRequest, other.databaseRequest) && Kotlin.equals(this.condition, other.condition)))));
  };
  RequestDatabase.prototype.get_ip4fwo$$default = function (condition, sort, count, after, continuation) {
    return this.handler.invoke_hvgtyk$(new RequestDatabase$Get(this.request, condition, sort, count, after), continuation);
  };
  RequestDatabase.prototype.insert_yp4z7y$ = function (values, continuation) {
    return this.handler.invoke_hvgtyk$(new RequestDatabase$Insert(this.request, values), continuation);
  };
  RequestDatabase.prototype.update_igrlh$ = function (condition, operation, continuation) {
    return this.handler.invoke_hvgtyk$(new RequestDatabase$Update(this.request, condition, operation), continuation);
  };
  RequestDatabase.prototype.limitedUpdate_e9w2wr$$default = function (condition, operation, sort, limit, continuation) {
    return this.handler.invoke_hvgtyk$(new RequestDatabase$LimitedUpdate(this.request, condition, operation, sort, limit), continuation);
  };
  RequestDatabase.prototype.delete_b7ig37$ = function (condition, continuation) {
    return this.handler.invoke_hvgtyk$(new RequestDatabase$Delete(this.request, condition), continuation);
  };
  RequestDatabase.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabase', interfaces: [Database]};
  function SecureByFieldDatabase(underlying, rules) {
    this.underlying = underlying;
    this.rules = rules;
  }
  function SecureDatabase(underlying, limitRead, limitUpdate, limitInsert) {
    if (limitRead === void 0)
      limitRead = Condition$Never_getInstance();
    if (limitUpdate === void 0)
      limitUpdate = Condition$Never_getInstance();
    if (limitInsert === void 0)
      limitInsert = Condition$Never_getInstance();
    this.underlying = underlying;
    this.limitRead = limitRead;
    this.limitUpdate = limitUpdate;
    this.limitInsert = limitInsert;
  }
  function BinaryFlatArrayDecoder(context, binaryFormat, input, currentIndex, terminateAt) {
    if (currentIndex === void 0)
      currentIndex = 0;
    this.context_fmioa5$_0 = context;
    this.binaryFormat = binaryFormat;
    this.input = input;
    this.currentIndex = currentIndex;
    this.terminateAt = terminateAt;
    this.seen = ArrayList_init_0();
    this.beginStructureIndexStack = new Int32Array(1024);
    this.beginStructureIndexStackIndex = -1;
  }
  function BinaryFlatArrayEncoder(context, binaryFormat, output, terminateAt) {
    this.context_ih8lg5$_0 = context;
    this.binaryFormat = binaryFormat;
    this.output = output;
    this.terminateAt = terminateAt;
    this.seen = ArrayList_init_0();
  }
  var BinaryFlatArrayFormat$Companion_instance = null;
  var FlatArrayFormat$Schema$ConditionMode$AND_instance;
  var FlatArrayFormat$Schema$ConditionMode$OR_instance;
  var FlatArrayFormat$Schema$ConditionMode$NOT_instance;
  var IndexPath$Companion_instance = null;
  function StringFlatArrayDecoder(context, stringFormat, input, currentIndex, terminateAt) {
    if (currentIndex === void 0)
      currentIndex = 0;
    this.context_ff404j$_0 = context;
    this.stringFormat = stringFormat;
    this.input = input;
    this.currentIndex = currentIndex;
    this.terminateAt = terminateAt;
    this.seen = ArrayList_init_0();
    this.beginStructureIndexStack = new Int32Array(1024);
    this.beginStructureIndexStackIndex = -1;
  }
  function StringFlatArrayEncoder(context, stringFormat, output, terminateAt) {
    this.context_cke2yj$_0 = context;
    this.stringFormat = stringFormat;
    this.output = output;
    this.terminateAt = terminateAt;
    this.seen = ArrayList_init_0();
  }
  var StringFlatArrayFormat$Companion_instance = null;
  function PrimaryKey() {
  }
  PrimaryKey.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimaryKey', interfaces: [Annotation]};
  function findPrimaryKey($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    var $receiver_0 = $receiver.fields;
    var destination = ArrayList_init_0();
    var tmp$_3;
    loop_label: for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
      var element = $receiver_0[tmp$_3];
      var $receiver_1 = element.annotations;
      var any$result;
      any$break: do {
        var tmp$_4;
        if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_4 = $receiver_1.iterator();
        while (tmp$_4.hasNext()) {
          var element_0 = tmp$_4.next();
          if (Kotlin.isType(element_0, PrimaryKeyMirror)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        destination.add_11rb$(element);
    }
    if ((tmp$_0 = !destination.isEmpty() ? destination : null) != null)
      tmp$_2 = tmp$_0;
    else {
      var $receiver_2 = $receiver.fields;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_5;
        loop_label: for (tmp$_5 = 0; tmp$_5 !== $receiver_2.length; ++tmp$_5) {
          var element_1 = $receiver_2[tmp$_5];
          var predicate$result;
          predicate$break: do {
            switch (element_1.name) {
              case 'id':
              case 'identifier':
              case 'uuid':
                predicate$result = true;
                break predicate$break;
              default:predicate$result = false;
                break predicate$break;
            }
          }
           while (false);
          if (predicate$result) {
            firstOrNull$result = element_1;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$_2 = (tmp$ = firstOrNull$result) != null ? listOf_0(tmp$) : null;
    }
    return (tmp$_1 = tmp$_2) != null ? tmp$_1 : listOf_0(first($receiver.fields));
  }
  function sort($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(new Sort(Kotlin.isType(tmp$_0 = item, MirrorClass$Field) ? tmp$_0 : throwCCE()));
    }
    return destination;
  }
  function Condition() {
  }
  Condition.prototype.iterable = function () {
    return null;
  };
  function Condition$recursing$lambda(it) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = it.iterable()) != null ? asSequence(tmp$) : null) != null ? tmp$_0 : emptySequence();
  }
  Condition.prototype.recursing = function () {
    return treeWalkDepthSequence(sequenceOf([this]), Condition$recursing$lambda);
  };
  Condition.prototype.simplify = function () {
    return this;
  };
  function Condition$Never() {
    Condition$Never_instance = this;
    Condition.call(this);
  }
  Condition$Never.prototype.invoke_11rb$ = function (item) {
    return false;
  };
  Condition$Never.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Never', interfaces: [Condition]};
  var Condition$Never_instance = null;
  function Condition$Never_getInstance() {
    if (Condition$Never_instance === null) {
      new Condition$Never();
    }
    return Condition$Never_instance;
  }
  function Condition$Always() {
    Condition$Always_instance = this;
    Condition.call(this);
  }
  Condition$Always.prototype.invoke_11rb$ = function (item) {
    return true;
  };
  Condition$Always.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Always', interfaces: [Condition]};
  var Condition$Always_instance = null;
  function Condition$Always_getInstance() {
    if (Condition$Always_instance === null) {
      new Condition$Always();
    }
    return Condition$Always_instance;
  }
  function Condition$And(conditions) {
    Condition.call(this);
    this.conditions = conditions;
  }
  Condition$And.prototype.invoke_11rb$ = function (item) {
    var $receiver = this.conditions;
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
        if (!element.invoke_11rb$(item)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  Condition$And.prototype.iterable = function () {
    return this.conditions;
  };
  Condition$And.prototype.simplify = function () {
    var tmp$;
    if (this.conditions.isEmpty())
      return Condition$Always_getInstance();
    var result = ArrayList_init_0();
    tmp$ = this.conditions.iterator();
    while (tmp$.hasNext()) {
      var condition = tmp$.next();
      var innerSimp = condition.simplify();
      if (Kotlin.isType(innerSimp, Condition$Never))
        return Condition$Never_getInstance();
      else if (!Kotlin.isType(innerSimp, Condition$Always))
        if (Kotlin.isType(innerSimp, Condition$And))
          result.addAll_brywnq$(innerSimp.conditions);
        else
          result.add_11rb$(innerSimp);
    }
    if (result.size === 0)
      return Condition$Always_getInstance();
    if (result.size === 1)
      return first_0(result);
    return new Condition$And(result);
  };
  Condition$And.$metadata$ = {kind: Kind_CLASS, simpleName: 'And', interfaces: [Condition]};
  Condition$And.prototype.component1 = function () {
    return this.conditions;
  };
  Condition$And.prototype.copy_30wy4a$ = function (conditions) {
    return new Condition$And(conditions === void 0 ? this.conditions : conditions);
  };
  Condition$And.prototype.toString = function () {
    return 'And(conditions=' + Kotlin.toString(this.conditions) + ')';
  };
  Condition$And.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.conditions) | 0;
    return result;
  };
  Condition$And.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.conditions, other.conditions))));
  };
  function Condition$Or(conditions) {
    Condition.call(this);
    this.conditions = conditions;
  }
  Condition$Or.prototype.invoke_11rb$ = function (item) {
    var $receiver = this.conditions;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.invoke_11rb$(item)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  Condition$Or.prototype.iterable = function () {
    return this.conditions;
  };
  Condition$Or.prototype.simplify = function () {
    var tmp$;
    if (this.conditions.isEmpty())
      return Condition$Always_getInstance();
    var result = ArrayList_init_0();
    tmp$ = this.conditions.iterator();
    while (tmp$.hasNext()) {
      var condition = tmp$.next();
      var innerSimp = condition.simplify();
      if (Kotlin.isType(innerSimp, Condition$Always))
        return Condition$Always_getInstance();
      else if (!Kotlin.isType(innerSimp, Condition$Never))
        if (Kotlin.isType(innerSimp, Condition$Or))
          result.addAll_brywnq$(innerSimp.conditions);
        else
          result.add_11rb$(innerSimp);
    }
    if (result.size === 0)
      return Condition$Never_getInstance();
    if (result.size === 1)
      return first_0(result);
    return new Condition$Or(result);
  };
  Condition$Or.$metadata$ = {kind: Kind_CLASS, simpleName: 'Or', interfaces: [Condition]};
  Condition$Or.prototype.component1 = function () {
    return this.conditions;
  };
  Condition$Or.prototype.copy_30wy4a$ = function (conditions) {
    return new Condition$Or(conditions === void 0 ? this.conditions : conditions);
  };
  Condition$Or.prototype.toString = function () {
    return 'Or(conditions=' + Kotlin.toString(this.conditions) + ')';
  };
  Condition$Or.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.conditions) | 0;
    return result;
  };
  Condition$Or.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.conditions, other.conditions))));
  };
  function Condition$Not(condition) {
    Condition.call(this);
    this.condition = condition;
  }
  Condition$Not.prototype.invoke_11rb$ = function (item) {
    return !this.condition.invoke_11rb$(item);
  };
  Condition$Not.prototype.iterable = function () {
    return listOf_0(this.condition);
  };
  Condition$Not.$metadata$ = {kind: Kind_CLASS, simpleName: 'Not', interfaces: [Condition]};
  Condition$Not.prototype.component1 = function () {
    return this.condition;
  };
  Condition$Not.prototype.copy_bcqkn9$ = function (condition) {
    return new Condition$Not(condition === void 0 ? this.condition : condition);
  };
  Condition$Not.prototype.toString = function () {
    return 'Not(condition=' + Kotlin.toString(this.condition) + ')';
  };
  Condition$Not.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    return result;
  };
  Condition$Not.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.condition, other.condition))));
  };
  function Condition$Field(field, condition) {
    Condition.call(this);
    this.field = field;
    this.condition = condition;
  }
  Condition$Field.prototype.invoke_11rb$ = function (item) {
    return this.condition.invoke_11rb$(this.field.get(item));
  };
  Condition$Field.prototype.iterable = function () {
    return listOf_0(this.condition);
  };
  Condition$Field.$metadata$ = {kind: Kind_CLASS, simpleName: 'Field', interfaces: [Condition]};
  Condition$Field.prototype.component1 = function () {
    return this.field;
  };
  Condition$Field.prototype.component2 = function () {
    return this.condition;
  };
  Condition$Field.prototype.copy_x2qvxi$ = function (field, condition) {
    return new Condition$Field(field === void 0 ? this.field : field, condition === void 0 ? this.condition : condition);
  };
  Condition$Field.prototype.toString = function () {
    return 'Field(field=' + Kotlin.toString(this.field) + (', condition=' + Kotlin.toString(this.condition)) + ')';
  };
  Condition$Field.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.condition) | 0;
    return result;
  };
  Condition$Field.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.condition, other.condition)))));
  };
  function Condition$Equal(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$Equal.prototype.invoke_11rb$ = function (item) {
    return equals(item, this.value);
  };
  Condition$Equal.$metadata$ = {kind: Kind_CLASS, simpleName: 'Equal', interfaces: [Condition]};
  Condition$Equal.prototype.component1 = function () {
    return this.value;
  };
  Condition$Equal.prototype.copy_11rb$ = function (value) {
    return new Condition$Equal(value === void 0 ? this.value : value);
  };
  Condition$Equal.prototype.toString = function () {
    return 'Equal(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$Equal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$Equal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$EqualToOne(values) {
    Condition.call(this);
    this.values = values;
  }
  Condition$EqualToOne.prototype.invoke_11rb$ = function (item) {
    return this.values.contains_11rb$(item);
  };
  Condition$EqualToOne.prototype.simplify = function () {
    return this.values.isEmpty() ? Condition$Never_getInstance() : this;
  };
  Condition$EqualToOne.$metadata$ = {kind: Kind_CLASS, simpleName: 'EqualToOne', interfaces: [Condition]};
  Condition$EqualToOne.prototype.component1 = function () {
    return this.values;
  };
  Condition$EqualToOne.prototype.copy_4ezy5m$ = function (values) {
    return new Condition$EqualToOne(values === void 0 ? this.values : values);
  };
  Condition$EqualToOne.prototype.toString = function () {
    return 'EqualToOne(values=' + Kotlin.toString(this.values) + ')';
  };
  Condition$EqualToOne.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  Condition$EqualToOne.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  function Condition$NotEqual(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$NotEqual.prototype.invoke_11rb$ = function (item) {
    return !equals(item, this.value);
  };
  Condition$NotEqual.$metadata$ = {kind: Kind_CLASS, simpleName: 'NotEqual', interfaces: [Condition]};
  Condition$NotEqual.prototype.component1 = function () {
    return this.value;
  };
  Condition$NotEqual.prototype.copy_11rb$ = function (value) {
    return new Condition$NotEqual(value === void 0 ? this.value : value);
  };
  Condition$NotEqual.prototype.toString = function () {
    return 'NotEqual(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$NotEqual.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$NotEqual.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$LessThan(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$LessThan.prototype.invoke_11rb$ = function (item) {
    return this.value != null && item != null && Kotlin.compareTo(item, this.value) < 0;
  };
  Condition$LessThan.$metadata$ = {kind: Kind_CLASS, simpleName: 'LessThan', interfaces: [Condition]};
  Condition$LessThan.prototype.component1 = function () {
    return this.value;
  };
  Condition$LessThan.prototype.copy_fw10sg$ = function (value) {
    return new Condition$LessThan(value === void 0 ? this.value : value);
  };
  Condition$LessThan.prototype.toString = function () {
    return 'LessThan(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$LessThan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$LessThan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$GreaterThan(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$GreaterThan.prototype.invoke_11rb$ = function (item) {
    return this.value != null && item != null && Kotlin.compareTo(item, this.value) > 0;
  };
  Condition$GreaterThan.$metadata$ = {kind: Kind_CLASS, simpleName: 'GreaterThan', interfaces: [Condition]};
  Condition$GreaterThan.prototype.component1 = function () {
    return this.value;
  };
  Condition$GreaterThan.prototype.copy_fw10sg$ = function (value) {
    return new Condition$GreaterThan(value === void 0 ? this.value : value);
  };
  Condition$GreaterThan.prototype.toString = function () {
    return 'GreaterThan(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$GreaterThan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$GreaterThan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$LessThanOrEqual(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$LessThanOrEqual.prototype.invoke_11rb$ = function (item) {
    return this.value != null && item != null && Kotlin.compareTo(item, this.value) <= 0;
  };
  Condition$LessThanOrEqual.$metadata$ = {kind: Kind_CLASS, simpleName: 'LessThanOrEqual', interfaces: [Condition]};
  Condition$LessThanOrEqual.prototype.component1 = function () {
    return this.value;
  };
  Condition$LessThanOrEqual.prototype.copy_fw10sg$ = function (value) {
    return new Condition$LessThanOrEqual(value === void 0 ? this.value : value);
  };
  Condition$LessThanOrEqual.prototype.toString = function () {
    return 'LessThanOrEqual(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$LessThanOrEqual.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$LessThanOrEqual.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$GreaterThanOrEqual(value) {
    Condition.call(this);
    this.value = value;
  }
  Condition$GreaterThanOrEqual.prototype.invoke_11rb$ = function (item) {
    return this.value != null && item != null && Kotlin.compareTo(item, this.value) >= 0;
  };
  Condition$GreaterThanOrEqual.$metadata$ = {kind: Kind_CLASS, simpleName: 'GreaterThanOrEqual', interfaces: [Condition]};
  Condition$GreaterThanOrEqual.prototype.component1 = function () {
    return this.value;
  };
  Condition$GreaterThanOrEqual.prototype.copy_fw10sg$ = function (value) {
    return new Condition$GreaterThanOrEqual(value === void 0 ? this.value : value);
  };
  Condition$GreaterThanOrEqual.prototype.toString = function () {
    return 'GreaterThanOrEqual(value=' + Kotlin.toString(this.value) + ')';
  };
  Condition$GreaterThanOrEqual.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Condition$GreaterThanOrEqual.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Condition$TextSearch(query) {
    Condition.call(this);
    this.query = query;
  }
  Condition$TextSearch.prototype.invoke_11rb$ = function (item) {
    return contains_0(item, this.query);
  };
  Condition$TextSearch.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextSearch', interfaces: [Condition]};
  Condition$TextSearch.prototype.component1 = function () {
    return this.query;
  };
  Condition$TextSearch.prototype.copy_61zpoe$ = function (query) {
    return new Condition$TextSearch(query === void 0 ? this.query : query);
  };
  Condition$TextSearch.prototype.toString = function () {
    return 'TextSearch(query=' + Kotlin.toString(this.query) + ')';
  };
  Condition$TextSearch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    return result;
  };
  Condition$TextSearch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.query, other.query))));
  };
  function Condition$StartsWith(query) {
    Condition.call(this);
    this.query = query;
  }
  Condition$StartsWith.prototype.invoke_11rb$ = function (item) {
    return startsWith(item, this.query);
  };
  Condition$StartsWith.$metadata$ = {kind: Kind_CLASS, simpleName: 'StartsWith', interfaces: [Condition]};
  Condition$StartsWith.prototype.component1 = function () {
    return this.query;
  };
  Condition$StartsWith.prototype.copy_61zpoe$ = function (query) {
    return new Condition$StartsWith(query === void 0 ? this.query : query);
  };
  Condition$StartsWith.prototype.toString = function () {
    return 'StartsWith(query=' + Kotlin.toString(this.query) + ')';
  };
  Condition$StartsWith.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    return result;
  };
  Condition$StartsWith.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.query, other.query))));
  };
  function Condition$EndsWith(query) {
    Condition.call(this);
    this.query = query;
  }
  Condition$EndsWith.prototype.invoke_11rb$ = function (item) {
    return endsWith(item, this.query);
  };
  Condition$EndsWith.$metadata$ = {kind: Kind_CLASS, simpleName: 'EndsWith', interfaces: [Condition]};
  Condition$EndsWith.prototype.component1 = function () {
    return this.query;
  };
  Condition$EndsWith.prototype.copy_61zpoe$ = function (query) {
    return new Condition$EndsWith(query === void 0 ? this.query : query);
  };
  Condition$EndsWith.prototype.toString = function () {
    return 'EndsWith(query=' + Kotlin.toString(this.query) + ')';
  };
  Condition$EndsWith.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    return result;
  };
  Condition$EndsWith.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.query, other.query))));
  };
  function Condition$RegexTextSearch(query) {
    Condition.call(this);
    this.query = query;
  }
  Condition$RegexTextSearch.prototype.invoke_11rb$ = function (item) {
    return Regex_init(this.query).containsMatchIn_6bul2c$(item);
  };
  Condition$RegexTextSearch.$metadata$ = {kind: Kind_CLASS, simpleName: 'RegexTextSearch', interfaces: [Condition]};
  Condition$RegexTextSearch.prototype.component1 = function () {
    return this.query;
  };
  Condition$RegexTextSearch.prototype.copy_61zpoe$ = function (query) {
    return new Condition$RegexTextSearch(query === void 0 ? this.query : query);
  };
  Condition$RegexTextSearch.prototype.toString = function () {
    return 'RegexTextSearch(query=' + Kotlin.toString(this.query) + ')';
  };
  Condition$RegexTextSearch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    return result;
  };
  Condition$RegexTextSearch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.query, other.query))));
  };
  Condition.$metadata$ = {kind: Kind_CLASS, simpleName: 'Condition', interfaces: []};
  function HasId() {
  }
  HasId.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HasId', interfaces: []};
  function HasUuid() {
  }
  HasUuid.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HasUuid', interfaces: [HasId]};
  function Link() {
  }
  Link.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Link', interfaces: []};
  function Lockable() {
  }
  Lockable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Lockable', interfaces: [HasId]};
  function LockState(value) {
    LockState$Companion_getInstance();
    this.value = value;
  }
  Object.defineProperty(LockState.prototype, 'isLocked', {get: function () {
    return equals(this.value, L0);
  }});
  function LockState$Companion() {
    LockState$Companion_instance = this;
    this.UNLOCKED = new LockState(L0);
  }
  LockState$Companion.prototype.get = function () {
    return new LockState(Random.Default.nextLong().xor(now(TimeStamp.Companion).millisecondsSinceEpoch));
  };
  LockState$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LockState$Companion_instance = null;
  function LockState$Companion_getInstance() {
    if (LockState$Companion_instance === null) {
      new LockState$Companion();
    }
    return LockState$Companion_instance;
  }
  LockState.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockState', interfaces: []};
  LockState.prototype.unbox = function () {
    return this.value;
  };
  LockState.prototype.toString = function () {
    return 'LockState(value=' + Kotlin.toString(this.value) + ')';
  };
  LockState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  LockState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Operation() {
    Operation$Companion_getInstance();
  }
  function Operation$Set(value) {
    this.value = value;
  }
  Operation$Set.prototype.invoke_11rb$ = function (item) {
    return this.value;
  };
  Operation$Set.$metadata$ = {kind: Kind_CLASS, simpleName: 'Set', interfaces: [Operation]};
  Operation$Set.prototype.component1 = function () {
    return this.value;
  };
  Operation$Set.prototype.copy_11rb$ = function (value) {
    return new Operation$Set(value === void 0 ? this.value : value);
  };
  Operation$Set.prototype.toString = function () {
    return 'Set(value=' + Kotlin.toString(this.value) + ')';
  };
  Operation$Set.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Operation$Set.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Operation$AddNumeric() {
  }
  Operation$AddNumeric.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'AddNumeric', interfaces: [Operation]};
  function Operation$AddInt(amount) {
    this.amount_pmksuf$_0 = amount;
  }
  Object.defineProperty(Operation$AddInt.prototype, 'amount', {get: function () {
    return this.amount_pmksuf$_0;
  }, set: function (amount) {
    this.amount_pmksuf$_0 = amount;
  }});
  Operation$AddInt.prototype.invoke_11rb$ = function (item) {
    return item + this.amount | 0;
  };
  Operation$AddInt.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddInt', interfaces: [Operation$AddNumeric]};
  Operation$AddInt.prototype.component1 = function () {
    return this.amount;
  };
  Operation$AddInt.prototype.copy_za3lpa$ = function (amount) {
    return new Operation$AddInt(amount === void 0 ? this.amount : amount);
  };
  Operation$AddInt.prototype.toString = function () {
    return 'AddInt(amount=' + Kotlin.toString(this.amount) + ')';
  };
  Operation$AddInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    return result;
  };
  Operation$AddInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.amount, other.amount))));
  };
  function Operation$AddLong(amount) {
    this.amount_38ko50$_0 = amount;
  }
  Object.defineProperty(Operation$AddLong.prototype, 'amount', {get: function () {
    return this.amount_38ko50$_0;
  }, set: function (amount) {
    this.amount_38ko50$_0 = amount;
  }});
  Operation$AddLong.prototype.invoke_11rb$ = function (item) {
    return item.add(this.amount);
  };
  Operation$AddLong.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddLong', interfaces: [Operation$AddNumeric]};
  Operation$AddLong.prototype.component1 = function () {
    return this.amount;
  };
  Operation$AddLong.prototype.copy_s8cxhz$ = function (amount) {
    return new Operation$AddLong(amount === void 0 ? this.amount : amount);
  };
  Operation$AddLong.prototype.toString = function () {
    return 'AddLong(amount=' + Kotlin.toString(this.amount) + ')';
  };
  Operation$AddLong.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    return result;
  };
  Operation$AddLong.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.amount, other.amount))));
  };
  function Operation$AddFloat(amount) {
    this.amount_87a4qc$_0 = amount;
  }
  Object.defineProperty(Operation$AddFloat.prototype, 'amount', {get: function () {
    return this.amount_87a4qc$_0;
  }, set: function (amount) {
    this.amount_87a4qc$_0 = amount;
  }});
  Operation$AddFloat.prototype.invoke_11rb$ = function (item) {
    return item + this.amount;
  };
  Operation$AddFloat.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddFloat', interfaces: [Operation$AddNumeric]};
  Operation$AddFloat.prototype.component1 = function () {
    return this.amount;
  };
  Operation$AddFloat.prototype.copy_mx4ult$ = function (amount) {
    return new Operation$AddFloat(amount === void 0 ? this.amount : amount);
  };
  Operation$AddFloat.prototype.toString = function () {
    return 'AddFloat(amount=' + Kotlin.toString(this.amount) + ')';
  };
  Operation$AddFloat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    return result;
  };
  Operation$AddFloat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.amount, other.amount))));
  };
  function Operation$AddDouble(amount) {
    this.amount_snqtcx$_0 = amount;
  }
  Object.defineProperty(Operation$AddDouble.prototype, 'amount', {get: function () {
    return this.amount_snqtcx$_0;
  }, set: function (amount) {
    this.amount_snqtcx$_0 = amount;
  }});
  Operation$AddDouble.prototype.invoke_11rb$ = function (item) {
    return item + this.amount;
  };
  Operation$AddDouble.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddDouble', interfaces: [Operation$AddNumeric]};
  Operation$AddDouble.prototype.component1 = function () {
    return this.amount;
  };
  Operation$AddDouble.prototype.copy_14dthe$ = function (amount) {
    return new Operation$AddDouble(amount === void 0 ? this.amount : amount);
  };
  Operation$AddDouble.prototype.toString = function () {
    return 'AddDouble(amount=' + Kotlin.toString(this.amount) + ')';
  };
  Operation$AddDouble.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    return result;
  };
  Operation$AddDouble.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.amount, other.amount))));
  };
  function Operation$Append(string) {
    this.string = string;
  }
  Operation$Append.prototype.invoke_11rb$ = function (item) {
    return item + this.string;
  };
  Operation$Append.$metadata$ = {kind: Kind_CLASS, simpleName: 'Append', interfaces: [Operation]};
  Operation$Append.prototype.component1 = function () {
    return this.string;
  };
  Operation$Append.prototype.copy_61zpoe$ = function (string) {
    return new Operation$Append(string === void 0 ? this.string : string);
  };
  Operation$Append.prototype.toString = function () {
    return 'Append(string=' + Kotlin.toString(this.string) + ')';
  };
  Operation$Append.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  Operation$Append.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function Operation$Field(field, operation) {
    this.field = field;
    this.operation = operation;
  }
  Operation$Field.prototype.invoke_11rb$ = function (item) {
    var tmp$, tmp$_0;
    var type = Kotlin.isType(tmp$ = this.field.owner, MirrorClass) ? tmp$ : throwCCE();
    var map = Breaker.Companion.snap_nleje8$(type, item);
    map[this.field.index] = this.operation.invoke_11rb$((tmp$_0 = map[this.field.index]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
    return Breaker.Companion.fold_c3j3l4$(type, map);
  };
  Operation$Field.$metadata$ = {kind: Kind_CLASS, simpleName: 'Field', interfaces: [Operation]};
  Operation$Field.prototype.component1 = function () {
    return this.field;
  };
  Operation$Field.prototype.component2 = function () {
    return this.operation;
  };
  Operation$Field.prototype.copy_1um6ar$ = function (field, operation) {
    return new Operation$Field(field === void 0 ? this.field : field, operation === void 0 ? this.operation : operation);
  };
  Operation$Field.prototype.toString = function () {
    return 'Field(field=' + Kotlin.toString(this.field) + (', operation=' + Kotlin.toString(this.operation)) + ')';
  };
  Operation$Field.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.operation) | 0;
    return result;
  };
  Operation$Field.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.operation, other.operation)))));
  };
  function Operation$Multiple(operations) {
    this.operations = operations;
  }
  Operation$Multiple.prototype.invoke_11rb$ = function (item) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var tmp$_6 = !this.operations.isEmpty();
    if (tmp$_6) {
      var $receiver = this.operations;
      var all$result;
      all$break: do {
        var tmp$_7;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_7 = $receiver.iterator();
        while (tmp$_7.hasNext()) {
          var element = tmp$_7.next();
          if (!Kotlin.isType(element, Condition$Field)) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$_6 = all$result;
    }
    if (tmp$_6) {
      var tmp$_8;
      var type = Kotlin.isType(tmp$ = (Kotlin.isType(tmp$_8 = first_0(this.operations), Operation$Field) ? tmp$_8 : throwCCE()).field.owner, MirrorClass) ? tmp$ : throwCCE();
      var map = Breaker.Companion.snap_nleje8$(type, Kotlin.isType(tmp$_0 = item, Any) ? tmp$_0 : throwCCE());
      tmp$_1 = this.operations.iterator();
      while (tmp$_1.hasNext()) {
        var op = tmp$_1.next();
        var casted = Kotlin.isType(tmp$_2 = op, Operation$Field) ? tmp$_2 : throwCCE();
        var tmp$_9;
        map[casted.field.index] = (Kotlin.isType(tmp$_9 = (Kotlin.isType(tmp$_3 = op, Operation$Field) ? tmp$_3 : throwCCE()).operation, Operation) ? tmp$_9 : throwCCE()).invoke_11rb$(map[casted.field.index]);
      }
      return (tmp$_4 = Breaker.Companion.fold_c3j3l4$(type, map)) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE();
    }
     else {
      var tmp$_10;
      var accumulator = item;
      tmp$_10 = this.operations.iterator();
      while (tmp$_10.hasNext()) {
        var element_0 = tmp$_10.next();
        accumulator = element_0.invoke_11rb$(accumulator);
      }
      tmp$_5 = accumulator;
    }
    return tmp$_5;
  };
  Operation$Multiple.$metadata$ = {kind: Kind_CLASS, simpleName: 'Multiple', interfaces: [Operation]};
  Operation$Multiple.prototype.component1 = function () {
    return this.operations;
  };
  Operation$Multiple.prototype.copy_d87hl3$ = function (operations) {
    return new Operation$Multiple(operations === void 0 ? this.operations : operations);
  };
  Operation$Multiple.prototype.toString = function () {
    return 'Multiple(operations=' + Kotlin.toString(this.operations) + ')';
  };
  Operation$Multiple.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.operations) | 0;
    return result;
  };
  Operation$Multiple.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.operations, other.operations))));
  };
  function Operation$Companion() {
    Operation$Companion_instance = this;
  }
  Operation$Companion.prototype.SetField_j6x3yb$ = function (field, value) {
    return new Operation$Field(field, new Operation$Set(value));
  };
  Operation$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Operation$Companion_instance = null;
  function Operation$Companion_getInstance() {
    if (Operation$Companion_instance === null) {
      new Operation$Companion();
    }
    return Operation$Companion_instance;
  }
  Operation.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Operation', interfaces: []};
  function Reference(key) {
    this.key = key;
  }
  Reference.$metadata$ = {kind: Kind_CLASS, simpleName: 'Reference', interfaces: []};
  Reference.prototype.unbox = function () {
    return this.key;
  };
  Reference.prototype.toString = function () {
    return 'Reference(key=' + Kotlin.toString(this.key) + ')';
  };
  Reference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    return result;
  };
  Reference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.key, other.key))));
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function Sort(field, ascending) {
    if (ascending === void 0)
      ascending = true;
    this.field = field;
    this.ascending = ascending;
  }
  Sort.prototype.compare = function (a, b) {
    var aValue = this.field.get(a);
    var bValue = this.field.get(b);
    return this.ascending ? Kotlin.compareTo(aValue, bValue) : -Kotlin.compareTo(aValue, bValue) | 0;
  };
  Sort.prototype.after_lp7sxw$ = function (value) {
    var tmp$;
    if (this.ascending) {
      tmp$ = new Condition$Field(this.field, new Condition$GreaterThan(value));
    }
     else {
      tmp$ = new Condition$Field(this.field, new Condition$LessThan(value));
    }
    return tmp$;
  };
  Sort.prototype.after_trkh7z$ = function (owner) {
    return this.after_lp7sxw$(this.field.get(owner));
  };
  Sort.$metadata$ = {kind: Kind_CLASS, simpleName: 'Sort', interfaces: [Comparator]};
  Sort.prototype.component1 = function () {
    return this.field;
  };
  Sort.prototype.component2 = function () {
    return this.ascending;
  };
  Sort.prototype.copy_itepp9$ = function (field, ascending) {
    return new Sort(field === void 0 ? this.field : field, ascending === void 0 ? this.ascending : ascending);
  };
  Sort.prototype.toString = function () {
    return 'Sort(field=' + Kotlin.toString(this.field) + (', ascending=' + Kotlin.toString(this.ascending)) + ')';
  };
  Sort.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.ascending) | 0;
    return result;
  };
  Sort.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.ascending, other.ascending)))));
  };
  function comparator$lambda(this$comparator) {
    return function (a, b) {
      var tmp$, tmp$_0;
      tmp$ = this$comparator.iterator();
      while (tmp$.hasNext()) {
        var sort = tmp$.next();
        var result = sort.compare(a, b);
        if (result !== 0)
          return result;
      }
      if (Kotlin.isComparable(a)) {
        Kotlin.compareTo(Kotlin.isComparable(tmp$_0 = a) ? tmp$_0 : throwCCE(), b);
      }
      return 0;
    };
  }
  function comparator($receiver) {
    return new Comparator$ObjectLiteral(comparator$lambda($receiver));
  }
  function TypedReference(type, key) {
    this.type = type;
    this.key = key;
  }
  TypedReference.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedReference', interfaces: []};
  TypedReference.prototype.component1 = function () {
    return this.type;
  };
  TypedReference.prototype.component2 = function () {
    return this.key;
  };
  TypedReference.prototype.copy_gbqhzd$ = function (type, key) {
    return new TypedReference(type === void 0 ? this.type : type, key === void 0 ? this.key : key);
  };
  TypedReference.prototype.toString = function () {
    return 'TypedReference(type=' + Kotlin.toString(this.type) + (', key=' + Kotlin.toString(this.key)) + ')';
  };
  TypedReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    return result;
  };
  TypedReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.key, other.key)))));
  };
  function Uuid(mostSignificantBits, leastSignificantBits) {
    Uuid$Companion_getInstance();
    this.mostSignificantBits = mostSignificantBits;
    this.leastSignificantBits = leastSignificantBits;
  }
  Uuid.prototype.compareTo_11rb$ = function (other) {
    return equals(this.mostSignificantBits, other.mostSignificantBits) ? this.leastSignificantBits.compareTo_11rb$(other.leastSignificantBits) : this.mostSignificantBits.compareTo_11rb$(other.mostSignificantBits);
  };
  function Uuid$Companion() {
    Uuid$Companion_instance = this;
  }
  Uuid$Companion.prototype.fromUUIDString_61zpoe$ = function (input) {
    var destination = StringBuilder_init();
    var tmp$;
    tmp$ = input.length;
    for (var index = 0; index < tmp$; index++) {
      var element = input.charCodeAt(index);
      var it = toBoxedChar(element);
      if ((new CharRange(48, 57)).contains_mef7kx$(unboxChar(it)) || (new CharRange(97, 102)).contains_mef7kx$(unboxChar(it)) || (new CharRange(65, 70)).contains_mef7kx$(unboxChar(it)))
        destination.append_s8itvh$(element);
    }
    var hexOnly = destination.toString();
    if (hexOnly.length !== 32)
      throw IllegalArgumentException_init('String is not a Uuid, should be 32 hex characters');
    return new Uuid(toULong(hexOnly.substring(0, 16), 16).data, toULong(hexOnly.substring(16, 32), 16).data);
  };
  Uuid$Companion.prototype.randomUUID4 = function () {
    return new Uuid(Random.Default.nextLong().and(L_61441).or(L16384), Random.Default.nextLong().and(L4611686018427387903).or(L_9223372036854775808));
  };
  Uuid$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Uuid$Companion_instance = null;
  function Uuid$Companion_getInstance() {
    if (Uuid$Companion_instance === null) {
      new Uuid$Companion();
    }
    return Uuid$Companion_instance;
  }
  Uuid.prototype.toUUIDString = function () {
    var first = padStart(toString_0(new ULong_init(this.mostSignificantBits), 16), 16, 48);
    var second = padStart(toString_0(new ULong_init(this.leastSignificantBits), 16), 16, 48);
    var $receiver = StringBuilder_init_0(36);
    $receiver.append_gw00v9$(first.substring(0, 8));
    $receiver.append_gw00v9$('-');
    $receiver.append_gw00v9$(first.substring(8, 12));
    $receiver.append_gw00v9$('-');
    $receiver.append_gw00v9$(first.substring(12, 16));
    $receiver.append_gw00v9$('-');
    $receiver.append_gw00v9$(second.substring(0, 4));
    $receiver.append_gw00v9$('-');
    $receiver.append_gw00v9$(second.substring(4, 16));
    return $receiver.toString();
  };
  Uuid.prototype.toString = function () {
    return this.toUUIDString();
  };
  Uuid.$metadata$ = {kind: Kind_CLASS, simpleName: 'Uuid', interfaces: [Comparable]};
  Uuid.prototype.component1 = function () {
    return this.mostSignificantBits;
  };
  Uuid.prototype.component2 = function () {
    return this.leastSignificantBits;
  };
  Uuid.prototype.copy_3pjtqy$ = function (mostSignificantBits, leastSignificantBits) {
    return new Uuid(mostSignificantBits === void 0 ? this.mostSignificantBits : mostSignificantBits, leastSignificantBits === void 0 ? this.leastSignificantBits : leastSignificantBits);
  };
  Uuid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mostSignificantBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.leastSignificantBits) | 0;
    return result;
  };
  Uuid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mostSignificantBits, other.mostSignificantBits) && Kotlin.equals(this.leastSignificantBits, other.leastSignificantBits)))));
  };
  var RamSuspendProperty$FromConfiguration_instance = null;
  var RamSuspendProperty$Provider_instance = null;
  function ConditionAlwaysMirror() {
    ConditionAlwaysMirror_instance = this;
    MirrorObject.call(this, Condition$Always_getInstance());
  }
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Always), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Object];
  }});
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'localName', {get: function () {
    return 'Condition.Always';
  }});
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.AnyMirror.nullable)];
  }});
  Object.defineProperty(ConditionAlwaysMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  ConditionAlwaysMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionAlwaysMirror', interfaces: [MirrorObject]};
  var ConditionAlwaysMirror_instance = null;
  function ConditionAlwaysMirror_getInstance() {
    if (ConditionAlwaysMirror_instance === null) {
      new ConditionAlwaysMirror();
    }
    return ConditionAlwaysMirror_instance;
  }
  function ConditionAndMirror(TMirror) {
    ConditionAndMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldConditions = new MirrorClass$Field(this, 0, 'conditions', new ListMirror(new ConditionMirror(this.TMirror)), false, ConditionAndMirror$fieldConditions$lambda, void 0, emptyList());
    this.fields_s74w8k$_0 = [this.fieldConditions];
  }
  Object.defineProperty(ConditionAndMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionAndMirror$Companion_getInstance();
  }});
  function ConditionAndMirror$Companion() {
    ConditionAndMirror$Companion_instance = this;
    this.minimal_rtlmds$_0 = new ConditionAndMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionAndMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionAndMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_rtlmds$_0;
  }});
  ConditionAndMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionAndMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionAndMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionAndMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionAndMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionAndMirror$Companion_instance = null;
  function ConditionAndMirror$Companion_getInstance() {
    if (ConditionAndMirror$Companion_instance === null) {
      new ConditionAndMirror$Companion();
    }
    return ConditionAndMirror$Companion_instance;
  }
  Object.defineProperty(ConditionAndMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$And), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'localName', {get: function () {
    return 'Condition.And';
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionAndMirror.prototype, 'fields', {get: function () {
    return this.fields_s74w8k$_0;
  }});
  ConditionAndMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var conditionsSet = false;
    var fieldConditions = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldConditions = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)));
          conditionsSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldConditions = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)));
          conditionsSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!conditionsSet) {
      throw new MissingFieldException('conditions');
    }
    return new Condition$And(Kotlin.isType(tmp$ = fieldConditions, List) ? tmp$ : throwCCE());
  };
  ConditionAndMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)), obj.conditions);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionAndMirror$fieldConditions$lambda(it) {
    return it.conditions;
  }
  ConditionAndMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionAndMirror', interfaces: [MirrorClass]};
  ConditionAndMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionAndMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionAndMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionAndMirror.prototype.toString = function () {
    return 'ConditionAndMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionAndMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionAndMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionEndsWithMirror() {
    ConditionEndsWithMirror_instance = this;
    MirrorClass.call(this);
    this.fieldQuery = new MirrorClass$Field(this, 0, 'query', info.StringMirror, false, ConditionEndsWithMirror$fieldQuery$lambda, void 0, emptyList());
    this.fields_umnxv1$_0 = [this.fieldQuery];
  }
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$EndsWith), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'localName', {get: function () {
    return 'Condition.EndsWith';
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.StringMirror)];
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionEndsWithMirror.prototype, 'fields', {get: function () {
    return this.fields_umnxv1$_0;
  }});
  ConditionEndsWithMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var querySet = false;
    var fieldQuery = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!querySet) {
      throw new MissingFieldException('query');
    }
    return new Condition$EndsWith(typeof (tmp$ = fieldQuery) === 'string' ? tmp$ : throwCCE());
  };
  ConditionEndsWithMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.query);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionEndsWithMirror$fieldQuery$lambda(it) {
    return it.query;
  }
  ConditionEndsWithMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionEndsWithMirror', interfaces: [MirrorClass]};
  var ConditionEndsWithMirror_instance = null;
  function ConditionEndsWithMirror_getInstance() {
    if (ConditionEndsWithMirror_instance === null) {
      new ConditionEndsWithMirror();
    }
    return ConditionEndsWithMirror_instance;
  }
  function ConditionEqualMirror(TMirror) {
    ConditionEqualMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionEqualMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_nc2je1$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionEqualMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionEqualMirror$Companion_getInstance();
  }});
  function ConditionEqualMirror$Companion() {
    ConditionEqualMirror$Companion_instance = this;
    this.minimal_if118t$_0 = new ConditionEqualMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionEqualMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionEqualMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_if118t$_0;
  }});
  ConditionEqualMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionEqualMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionEqualMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionEqualMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionEqualMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionEqualMirror$Companion_instance = null;
  function ConditionEqualMirror$Companion_getInstance() {
    if (ConditionEqualMirror$Companion_instance === null) {
      new ConditionEqualMirror$Companion();
    }
    return ConditionEqualMirror$Companion_instance;
  }
  Object.defineProperty(ConditionEqualMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Equal), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'localName', {get: function () {
    return 'Condition.Equal';
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionEqualMirror.prototype, 'fields', {get: function () {
    return this.fields_nc2je1$_0;
  }});
  ConditionEqualMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$Equal((tmp$ = fieldValue) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  ConditionEqualMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionEqualMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionEqualMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionEqualMirror', interfaces: [MirrorClass]};
  ConditionEqualMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionEqualMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionEqualMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionEqualMirror.prototype.toString = function () {
    return 'ConditionEqualMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionEqualMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionEqualMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionEqualToOneMirror(TMirror) {
    ConditionEqualToOneMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValues = new MirrorClass$Field(this, 0, 'values', new ListMirror(this.TMirror), false, ConditionEqualToOneMirror$fieldValues$lambda, void 0, emptyList());
    this.fields_mi0fx6$_0 = [this.fieldValues];
  }
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionEqualToOneMirror$Companion_getInstance();
  }});
  function ConditionEqualToOneMirror$Companion() {
    ConditionEqualToOneMirror$Companion_instance = this;
    this.minimal_dc3qsq$_0 = new ConditionEqualToOneMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionEqualToOneMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionEqualToOneMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_dc3qsq$_0;
  }});
  ConditionEqualToOneMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionEqualToOneMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionEqualToOneMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionEqualToOneMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionEqualToOneMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionEqualToOneMirror$Companion_instance = null;
  function ConditionEqualToOneMirror$Companion_getInstance() {
    if (ConditionEqualToOneMirror$Companion_instance === null) {
      new ConditionEqualToOneMirror$Companion();
    }
    return ConditionEqualToOneMirror$Companion_instance;
  }
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$EqualToOne), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'localName', {get: function () {
    return 'Condition.EqualToOne';
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionEqualToOneMirror.prototype, 'fields', {get: function () {
    return this.fields_mi0fx6$_0;
  }});
  ConditionEqualToOneMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valuesSet = false;
    var fieldValues = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValues = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(this.TMirror));
          valuesSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValues = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(this.TMirror));
          valuesSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valuesSet) {
      throw new MissingFieldException('values');
    }
    return new Condition$EqualToOne(Kotlin.isType(tmp$ = fieldValues, List) ? tmp$ : throwCCE());
  };
  ConditionEqualToOneMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new ListMirror(this.TMirror), obj.values);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionEqualToOneMirror$fieldValues$lambda(it) {
    return it.values;
  }
  ConditionEqualToOneMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionEqualToOneMirror', interfaces: [MirrorClass]};
  ConditionEqualToOneMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionEqualToOneMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionEqualToOneMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionEqualToOneMirror.prototype.toString = function () {
    return 'ConditionEqualToOneMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionEqualToOneMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionEqualToOneMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionFieldMirror(TMirror, VMirror) {
    ConditionFieldMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.VMirror = VMirror;
    this.fieldField = new MirrorClass$Field(this, 0, 'field', new MirrorClassFieldMirror(this.TMirror, this.VMirror), false, ConditionFieldMirror$fieldField$lambda, void 0, emptyList());
    this.fieldCondition = new MirrorClass$Field(this, 1, 'condition', new ConditionMirror(this.VMirror), false, ConditionFieldMirror$fieldCondition$lambda, void 0, emptyList());
    this.fields_bxhhxt$_0 = [this.fieldField, this.fieldCondition];
  }
  Object.defineProperty(ConditionFieldMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionFieldMirror$Companion_getInstance();
  }});
  function ConditionFieldMirror$Companion() {
    ConditionFieldMirror$Companion_instance = this;
    this.minimal_dr5wgj$_0 = new ConditionFieldMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal), new TypeArgumentMirrorType('V', Variance.INVARIANT, this.VMirrorMinimal));
  }
  Object.defineProperty(ConditionFieldMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(ConditionFieldMirror$Companion.prototype, 'VMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionFieldMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_dr5wgj$_0;
  }});
  ConditionFieldMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0;
    return new ConditionFieldMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE());
  };
  ConditionFieldMirror$Companion.prototype.make_9l4i5w$ = function (TMirror, VMirror) {
    if (TMirror === void 0)
      TMirror = null;
    if (VMirror === void 0)
      VMirror = null;
    var tmp$, tmp$_0;
    return new ConditionFieldMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = VMirror != null ? VMirror : this.VMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE());
  };
  ConditionFieldMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionFieldMirror$Companion_instance = null;
  function ConditionFieldMirror$Companion_getInstance() {
    if (ConditionFieldMirror$Companion_instance === null) {
      new ConditionFieldMirror$Companion();
    }
    return ConditionFieldMirror$Companion_instance;
  }
  Object.defineProperty(ConditionFieldMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror, this.VMirror];
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Field), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'localName', {get: function () {
    return 'Condition.Field';
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionFieldMirror.prototype, 'fields', {get: function () {
    return this.fields_bxhhxt$_0;
  }});
  ConditionFieldMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var fieldSet = false;
    var fieldField = null;
    var conditionSet = false;
    var fieldCondition = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.VMirror));
          conditionSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          break;
        case 1:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.VMirror));
          conditionSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!fieldSet) {
      throw new MissingFieldException('field');
    }
    if (!conditionSet) {
      throw new MissingFieldException('condition');
    }
    return new Condition$Field(Kotlin.isType(tmp$ = fieldField, MirrorClass$Field) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldCondition, Condition) ? tmp$_0 : throwCCE());
  };
  ConditionFieldMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror), obj.field);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ConditionMirror(this.VMirror), obj.condition);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionFieldMirror$fieldField$lambda(it) {
    return it.field;
  }
  function ConditionFieldMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  ConditionFieldMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionFieldMirror', interfaces: [MirrorClass]};
  ConditionFieldMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionFieldMirror.prototype.component2 = function () {
    return this.VMirror;
  };
  ConditionFieldMirror.prototype.copy_i56qo9$ = function (TMirror, VMirror) {
    return new ConditionFieldMirror(TMirror === void 0 ? this.TMirror : TMirror, VMirror === void 0 ? this.VMirror : VMirror);
  };
  ConditionFieldMirror.prototype.toString = function () {
    return 'ConditionFieldMirror(TMirror=' + Kotlin.toString(this.TMirror) + (', VMirror=' + Kotlin.toString(this.VMirror)) + ')';
  };
  ConditionFieldMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.VMirror) | 0;
    return result;
  };
  ConditionFieldMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.TMirror, other.TMirror) && Kotlin.equals(this.VMirror, other.VMirror)))));
  };
  function ConditionGreaterThanMirror(TMirror) {
    ConditionGreaterThanMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionGreaterThanMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_rmhw0g$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionGreaterThanMirror$Companion_getInstance();
  }});
  function ConditionGreaterThanMirror$Companion() {
    ConditionGreaterThanMirror$Companion_instance = this;
    this.minimal_a4lbec$_0 = new ConditionGreaterThanMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionGreaterThanMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return (new ComparableMirror((new ComparableMirror((new ComparableMirror(info.AnyMirror.nullable)).nullable)).nullable)).nullable;
  }});
  Object.defineProperty(ConditionGreaterThanMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_a4lbec$_0;
  }});
  ConditionGreaterThanMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionGreaterThanMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionGreaterThanMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionGreaterThanMirror$Companion_instance = null;
  function ConditionGreaterThanMirror$Companion_getInstance() {
    if (ConditionGreaterThanMirror$Companion_instance === null) {
      new ConditionGreaterThanMirror$Companion();
    }
    return ConditionGreaterThanMirror$Companion_instance;
  }
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$GreaterThan), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'localName', {get: function () {
    return 'Condition.GreaterThan';
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionGreaterThanMirror.prototype, 'fields', {get: function () {
    return this.fields_rmhw0g$_0;
  }});
  ConditionGreaterThanMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$GreaterThan((tmp$ = fieldValue) == null || Kotlin.isComparable(tmp$) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionGreaterThanMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionGreaterThanMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionGreaterThanMirror', interfaces: [MirrorClass]};
  ConditionGreaterThanMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionGreaterThanMirror.prototype.copy_jrmksg$ = function (TMirror) {
    return new ConditionGreaterThanMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionGreaterThanMirror.prototype.toString = function () {
    return 'ConditionGreaterThanMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionGreaterThanMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionGreaterThanMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionGreaterThanOrEqualMirror(TMirror) {
    ConditionGreaterThanOrEqualMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionGreaterThanOrEqualMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_q66rkr$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionGreaterThanOrEqualMirror$Companion_getInstance();
  }});
  function ConditionGreaterThanOrEqualMirror$Companion() {
    ConditionGreaterThanOrEqualMirror$Companion_instance = this;
    this.minimal_sde37b$_0 = new ConditionGreaterThanOrEqualMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionGreaterThanOrEqualMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return (new ComparableMirror((new ComparableMirror((new ComparableMirror(info.AnyMirror.nullable)).nullable)).nullable)).nullable;
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_sde37b$_0;
  }});
  ConditionGreaterThanOrEqualMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionGreaterThanOrEqualMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanOrEqualMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionGreaterThanOrEqualMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanOrEqualMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionGreaterThanOrEqualMirror$Companion_instance = null;
  function ConditionGreaterThanOrEqualMirror$Companion_getInstance() {
    if (ConditionGreaterThanOrEqualMirror$Companion_instance === null) {
      new ConditionGreaterThanOrEqualMirror$Companion();
    }
    return ConditionGreaterThanOrEqualMirror$Companion_instance;
  }
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$GreaterThanOrEqual), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'localName', {get: function () {
    return 'Condition.GreaterThanOrEqual';
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionGreaterThanOrEqualMirror.prototype, 'fields', {get: function () {
    return this.fields_q66rkr$_0;
  }});
  ConditionGreaterThanOrEqualMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$GreaterThanOrEqual((tmp$ = fieldValue) == null || Kotlin.isComparable(tmp$) ? tmp$ : throwCCE());
  };
  ConditionGreaterThanOrEqualMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionGreaterThanOrEqualMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionGreaterThanOrEqualMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionGreaterThanOrEqualMirror', interfaces: [MirrorClass]};
  ConditionGreaterThanOrEqualMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionGreaterThanOrEqualMirror.prototype.copy_jrmksg$ = function (TMirror) {
    return new ConditionGreaterThanOrEqualMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionGreaterThanOrEqualMirror.prototype.toString = function () {
    return 'ConditionGreaterThanOrEqualMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionGreaterThanOrEqualMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionGreaterThanOrEqualMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionLessThanMirror(TMirror) {
    ConditionLessThanMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionLessThanMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_12zro7$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionLessThanMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionLessThanMirror$Companion_getInstance();
  }});
  function ConditionLessThanMirror$Companion() {
    ConditionLessThanMirror$Companion_instance = this;
    this.minimal_exzle5$_0 = new ConditionLessThanMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionLessThanMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return (new ComparableMirror((new ComparableMirror((new ComparableMirror(info.AnyMirror.nullable)).nullable)).nullable)).nullable;
  }});
  Object.defineProperty(ConditionLessThanMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_exzle5$_0;
  }});
  ConditionLessThanMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionLessThanMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionLessThanMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionLessThanMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionLessThanMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionLessThanMirror$Companion_instance = null;
  function ConditionLessThanMirror$Companion_getInstance() {
    if (ConditionLessThanMirror$Companion_instance === null) {
      new ConditionLessThanMirror$Companion();
    }
    return ConditionLessThanMirror$Companion_instance;
  }
  Object.defineProperty(ConditionLessThanMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$LessThan), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'localName', {get: function () {
    return 'Condition.LessThan';
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionLessThanMirror.prototype, 'fields', {get: function () {
    return this.fields_12zro7$_0;
  }});
  ConditionLessThanMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$LessThan((tmp$ = fieldValue) == null || Kotlin.isComparable(tmp$) ? tmp$ : throwCCE());
  };
  ConditionLessThanMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionLessThanMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionLessThanMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionLessThanMirror', interfaces: [MirrorClass]};
  ConditionLessThanMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionLessThanMirror.prototype.copy_jrmksg$ = function (TMirror) {
    return new ConditionLessThanMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionLessThanMirror.prototype.toString = function () {
    return 'ConditionLessThanMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionLessThanMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionLessThanMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionLessThanOrEqualMirror(TMirror) {
    ConditionLessThanOrEqualMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionLessThanOrEqualMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_sbg4ek$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionLessThanOrEqualMirror$Companion_getInstance();
  }});
  function ConditionLessThanOrEqualMirror$Companion() {
    ConditionLessThanOrEqualMirror$Companion_instance = this;
    this.minimal_gubx0w$_0 = new ConditionLessThanOrEqualMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionLessThanOrEqualMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return (new ComparableMirror((new ComparableMirror((new ComparableMirror(info.AnyMirror.nullable)).nullable)).nullable)).nullable;
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_gubx0w$_0;
  }});
  ConditionLessThanOrEqualMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionLessThanOrEqualMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionLessThanOrEqualMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionLessThanOrEqualMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionLessThanOrEqualMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionLessThanOrEqualMirror$Companion_instance = null;
  function ConditionLessThanOrEqualMirror$Companion_getInstance() {
    if (ConditionLessThanOrEqualMirror$Companion_instance === null) {
      new ConditionLessThanOrEqualMirror$Companion();
    }
    return ConditionLessThanOrEqualMirror$Companion_instance;
  }
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$LessThanOrEqual), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'localName', {get: function () {
    return 'Condition.LessThanOrEqual';
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionLessThanOrEqualMirror.prototype, 'fields', {get: function () {
    return this.fields_sbg4ek$_0;
  }});
  ConditionLessThanOrEqualMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$LessThanOrEqual((tmp$ = fieldValue) == null || Kotlin.isComparable(tmp$) ? tmp$ : throwCCE());
  };
  ConditionLessThanOrEqualMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionLessThanOrEqualMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionLessThanOrEqualMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionLessThanOrEqualMirror', interfaces: [MirrorClass]};
  ConditionLessThanOrEqualMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionLessThanOrEqualMirror.prototype.copy_jrmksg$ = function (TMirror) {
    return new ConditionLessThanOrEqualMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionLessThanOrEqualMirror.prototype.toString = function () {
    return 'ConditionLessThanOrEqualMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionLessThanOrEqualMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionLessThanOrEqualMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionMirror(TMirror) {
    ConditionMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(ConditionMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionMirror$Companion_getInstance();
  }});
  function ConditionMirror$Companion() {
    ConditionMirror$Companion_instance = this;
    this.minimal_2fhnl9$_0 = new ConditionMirror(new TypeArgumentMirrorType('T', Variance.IN, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_2fhnl9$_0;
  }});
  ConditionMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionMirror$Companion_instance = null;
  function ConditionMirror$Companion_getInstance() {
    if (ConditionMirror$Companion_instance === null) {
      new ConditionMirror$Companion();
    }
    return ConditionMirror$Companion_instance;
  }
  Object.defineProperty(ConditionMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Sealed];
  }});
  Object.defineProperty(ConditionMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(ConditionMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionMirror.prototype, 'localName', {get: function () {
    return 'Condition';
  }});
  ConditionMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionMirror', interfaces: [PolymorphicMirror]};
  ConditionMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionMirror.prototype.toString = function () {
    return 'ConditionMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionNeverMirror() {
    ConditionNeverMirror_instance = this;
    MirrorObject.call(this, Condition$Never_getInstance());
  }
  Object.defineProperty(ConditionNeverMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Never), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionNeverMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Object];
  }});
  Object.defineProperty(ConditionNeverMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionNeverMirror.prototype, 'localName', {get: function () {
    return 'Condition.Never';
  }});
  Object.defineProperty(ConditionNeverMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.AnyMirror.nullable)];
  }});
  Object.defineProperty(ConditionNeverMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  ConditionNeverMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionNeverMirror', interfaces: [MirrorObject]};
  var ConditionNeverMirror_instance = null;
  function ConditionNeverMirror_getInstance() {
    if (ConditionNeverMirror_instance === null) {
      new ConditionNeverMirror();
    }
    return ConditionNeverMirror_instance;
  }
  function ConditionNotMirror(TMirror) {
    ConditionNotMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldCondition = new MirrorClass$Field(this, 0, 'condition', new ConditionMirror(this.TMirror), false, ConditionNotMirror$fieldCondition$lambda, void 0, emptyList());
    this.fields_dy8rt4$_0 = [this.fieldCondition];
  }
  Object.defineProperty(ConditionNotMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionNotMirror$Companion_getInstance();
  }});
  function ConditionNotMirror$Companion() {
    ConditionNotMirror$Companion_instance = this;
    this.minimal_cjwelw$_0 = new ConditionNotMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionNotMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionNotMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_cjwelw$_0;
  }});
  ConditionNotMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionNotMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionNotMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionNotMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionNotMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionNotMirror$Companion_instance = null;
  function ConditionNotMirror$Companion_getInstance() {
    if (ConditionNotMirror$Companion_instance === null) {
      new ConditionNotMirror$Companion();
    }
    return ConditionNotMirror$Companion_instance;
  }
  Object.defineProperty(ConditionNotMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Not), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'localName', {get: function () {
    return 'Condition.Not';
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionNotMirror.prototype, 'fields', {get: function () {
    return this.fields_dy8rt4$_0;
  }});
  ConditionNotMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var conditionSet = false;
    var fieldCondition = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!conditionSet) {
      throw new MissingFieldException('condition');
    }
    return new Condition$Not(Kotlin.isType(tmp$ = fieldCondition, Condition) ? tmp$ : throwCCE());
  };
  ConditionNotMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new ConditionMirror(this.TMirror), obj.condition);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionNotMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  ConditionNotMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionNotMirror', interfaces: [MirrorClass]};
  ConditionNotMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionNotMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionNotMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionNotMirror.prototype.toString = function () {
    return 'ConditionNotMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionNotMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionNotMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionNotEqualMirror(TMirror) {
    ConditionNotEqualMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, ConditionNotEqualMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_9vaw4w$_0 = [this.fieldValue];
  }
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionNotEqualMirror$Companion_getInstance();
  }});
  function ConditionNotEqualMirror$Companion() {
    ConditionNotEqualMirror$Companion_instance = this;
    this.minimal_3q8t4k$_0 = new ConditionNotEqualMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionNotEqualMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionNotEqualMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_3q8t4k$_0;
  }});
  ConditionNotEqualMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionNotEqualMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionNotEqualMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionNotEqualMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionNotEqualMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionNotEqualMirror$Companion_instance = null;
  function ConditionNotEqualMirror$Companion_getInstance() {
    if (ConditionNotEqualMirror$Companion_instance === null) {
      new ConditionNotEqualMirror$Companion();
    }
    return ConditionNotEqualMirror$Companion_instance;
  }
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$NotEqual), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'localName', {get: function () {
    return 'Condition.NotEqual';
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionNotEqualMirror.prototype, 'fields', {get: function () {
    return this.fields_9vaw4w$_0;
  }});
  ConditionNotEqualMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Condition$NotEqual((tmp$ = fieldValue) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  ConditionNotEqualMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionNotEqualMirror$fieldValue$lambda(it) {
    return it.value;
  }
  ConditionNotEqualMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionNotEqualMirror', interfaces: [MirrorClass]};
  ConditionNotEqualMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionNotEqualMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionNotEqualMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionNotEqualMirror.prototype.toString = function () {
    return 'ConditionNotEqualMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionNotEqualMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionNotEqualMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionOrMirror(TMirror) {
    ConditionOrMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldConditions = new MirrorClass$Field(this, 0, 'conditions', new ListMirror(new ConditionMirror(this.TMirror)), false, ConditionOrMirror$fieldConditions$lambda, void 0, emptyList());
    this.fields_jq1a9e$_0 = [this.fieldConditions];
  }
  Object.defineProperty(ConditionOrMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ConditionOrMirror$Companion_getInstance();
  }});
  function ConditionOrMirror$Companion() {
    ConditionOrMirror$Companion_instance = this;
    this.minimal_uzgrzq$_0 = new ConditionOrMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(ConditionOrMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(ConditionOrMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_uzgrzq$_0;
  }});
  ConditionOrMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ConditionOrMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ConditionOrMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new ConditionOrMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ConditionOrMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ConditionOrMirror$Companion_instance = null;
  function ConditionOrMirror$Companion_getInstance() {
    if (ConditionOrMirror$Companion_instance === null) {
      new ConditionOrMirror$Companion();
    }
    return ConditionOrMirror$Companion_instance;
  }
  Object.defineProperty(ConditionOrMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$Or), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'localName', {get: function () {
    return 'Condition.Or';
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(this.TMirror)];
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionOrMirror.prototype, 'fields', {get: function () {
    return this.fields_jq1a9e$_0;
  }});
  ConditionOrMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var conditionsSet = false;
    var fieldConditions = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldConditions = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)));
          conditionsSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldConditions = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)));
          conditionsSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!conditionsSet) {
      throw new MissingFieldException('conditions');
    }
    return new Condition$Or(Kotlin.isType(tmp$ = fieldConditions, List) ? tmp$ : throwCCE());
  };
  ConditionOrMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new ListMirror(new ConditionMirror(this.TMirror)), obj.conditions);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionOrMirror$fieldConditions$lambda(it) {
    return it.conditions;
  }
  ConditionOrMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionOrMirror', interfaces: [MirrorClass]};
  ConditionOrMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  ConditionOrMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new ConditionOrMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  ConditionOrMirror.prototype.toString = function () {
    return 'ConditionOrMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  ConditionOrMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  ConditionOrMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function ConditionRegexTextSearchMirror() {
    ConditionRegexTextSearchMirror_instance = this;
    MirrorClass.call(this);
    this.fieldQuery = new MirrorClass$Field(this, 0, 'query', info.StringMirror, false, ConditionRegexTextSearchMirror$fieldQuery$lambda, void 0, emptyList());
    this.fields_zfabu7$_0 = [this.fieldQuery];
  }
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$RegexTextSearch), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'localName', {get: function () {
    return 'Condition.RegexTextSearch';
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.StringMirror)];
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionRegexTextSearchMirror.prototype, 'fields', {get: function () {
    return this.fields_zfabu7$_0;
  }});
  ConditionRegexTextSearchMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var querySet = false;
    var fieldQuery = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!querySet) {
      throw new MissingFieldException('query');
    }
    return new Condition$RegexTextSearch(typeof (tmp$ = fieldQuery) === 'string' ? tmp$ : throwCCE());
  };
  ConditionRegexTextSearchMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.query);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionRegexTextSearchMirror$fieldQuery$lambda(it) {
    return it.query;
  }
  ConditionRegexTextSearchMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionRegexTextSearchMirror', interfaces: [MirrorClass]};
  var ConditionRegexTextSearchMirror_instance = null;
  function ConditionRegexTextSearchMirror_getInstance() {
    if (ConditionRegexTextSearchMirror_instance === null) {
      new ConditionRegexTextSearchMirror();
    }
    return ConditionRegexTextSearchMirror_instance;
  }
  function ConditionStartsWithMirror() {
    ConditionStartsWithMirror_instance = this;
    MirrorClass.call(this);
    this.fieldQuery = new MirrorClass$Field(this, 0, 'query', info.StringMirror, false, ConditionStartsWithMirror$fieldQuery$lambda, void 0, emptyList());
    this.fields_6ici62$_0 = [this.fieldQuery];
  }
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$StartsWith), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'localName', {get: function () {
    return 'Condition.StartsWith';
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.StringMirror)];
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionStartsWithMirror.prototype, 'fields', {get: function () {
    return this.fields_6ici62$_0;
  }});
  ConditionStartsWithMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var querySet = false;
    var fieldQuery = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!querySet) {
      throw new MissingFieldException('query');
    }
    return new Condition$StartsWith(typeof (tmp$ = fieldQuery) === 'string' ? tmp$ : throwCCE());
  };
  ConditionStartsWithMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.query);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionStartsWithMirror$fieldQuery$lambda(it) {
    return it.query;
  }
  ConditionStartsWithMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionStartsWithMirror', interfaces: [MirrorClass]};
  var ConditionStartsWithMirror_instance = null;
  function ConditionStartsWithMirror_getInstance() {
    if (ConditionStartsWithMirror_instance === null) {
      new ConditionStartsWithMirror();
    }
    return ConditionStartsWithMirror_instance;
  }
  function ConditionTextSearchMirror() {
    ConditionTextSearchMirror_instance = this;
    MirrorClass.call(this);
    this.fieldQuery = new MirrorClass$Field(this, 0, 'query', info.StringMirror, false, ConditionTextSearchMirror$fieldQuery$lambda, void 0, emptyList());
    this.fields_ba2i9w$_0 = [this.fieldQuery];
  }
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Condition$TextSearch), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'localName', {get: function () {
    return 'Condition.TextSearch';
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'implements', {get: function () {
    return [new ConditionMirror(info.StringMirror)];
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Condition);
  }});
  Object.defineProperty(ConditionTextSearchMirror.prototype, 'fields', {get: function () {
    return this.fields_ba2i9w$_0;
  }});
  ConditionTextSearchMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var querySet = false;
    var fieldQuery = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldQuery = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          querySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!querySet) {
      throw new MissingFieldException('query');
    }
    return new Condition$TextSearch(typeof (tmp$ = fieldQuery) === 'string' ? tmp$ : throwCCE());
  };
  ConditionTextSearchMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.query);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ConditionTextSearchMirror$fieldQuery$lambda(it) {
    return it.query;
  }
  ConditionTextSearchMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ConditionTextSearchMirror', interfaces: [MirrorClass]};
  var ConditionTextSearchMirror_instance = null;
  function ConditionTextSearchMirror_getInstance() {
    if (ConditionTextSearchMirror_instance === null) {
      new ConditionTextSearchMirror();
    }
    return ConditionTextSearchMirror_instance;
  }
  function DatabaseRequestMirror(TMirror) {
    DatabaseRequestMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(DatabaseRequestMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return DatabaseRequestMirror$Companion_getInstance();
  }});
  function DatabaseRequestMirror$Companion() {
    DatabaseRequestMirror$Companion_instance = this;
    this.minimal_cu5xv4$_0 = new DatabaseRequestMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(DatabaseRequestMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(DatabaseRequestMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_cu5xv4$_0;
  }});
  DatabaseRequestMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new DatabaseRequestMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  DatabaseRequestMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new DatabaseRequestMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  DatabaseRequestMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var DatabaseRequestMirror$Companion_instance = null;
  function DatabaseRequestMirror$Companion_getInstance() {
    if (DatabaseRequestMirror$Companion_instance === null) {
      new DatabaseRequestMirror$Companion();
    }
    return DatabaseRequestMirror$Companion_instance;
  }
  Object.defineProperty(DatabaseRequestMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Database$Request), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'localName', {get: function () {
    return 'Database.Request';
  }});
  Object.defineProperty(DatabaseRequestMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Database);
  }});
  DatabaseRequestMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'DatabaseRequestMirror', interfaces: [PolymorphicMirror]};
  DatabaseRequestMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  DatabaseRequestMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new DatabaseRequestMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  DatabaseRequestMirror.prototype.toString = function () {
    return 'DatabaseRequestMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  DatabaseRequestMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  DatabaseRequestMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function GeohashMirror() {
    GeohashMirror_instance = this;
    MirrorClass.call(this);
    this.fieldBits = new MirrorClass$Field(this, 0, 'bits', info.LongMirror, false, GeohashMirror$fieldBits$lambda, void 0, emptyList());
    this.fields_slv3od$_0 = [this.fieldBits];
  }
  Object.defineProperty(GeohashMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Geohash), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(GeohashMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Inline];
  }});
  Object.defineProperty(GeohashMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.lokalize.location';
  }});
  Object.defineProperty(GeohashMirror.prototype, 'localName', {get: function () {
    return 'Geohash';
  }});
  Object.defineProperty(GeohashMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(GeohashMirror_getInstance())];
  }});
  Object.defineProperty(GeohashMirror.prototype, 'companion', {get: function () {
    return Geohash.Companion;
  }});
  Object.defineProperty(GeohashMirror.prototype, 'fields', {get: function () {
    return this.fields_slv3od$_0;
  }});
  GeohashMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var bitsSet = false;
    var fieldBits = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldBits = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          bitsSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldBits = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          bitsSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!bitsSet) {
      throw new MissingFieldException('bits');
    }
    return new Geohash(Kotlin.isType(tmp$ = fieldBits, Kotlin.Long) ? tmp$ : throwCCE());
  };
  GeohashMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeLongElement_a3zgoj$(this, 0, obj.bits);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function GeohashMirror$fieldBits$lambda(it) {
    return it.bits;
  }
  GeohashMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GeohashMirror', interfaces: [MirrorClass]};
  var GeohashMirror_instance = null;
  function GeohashMirror_getInstance() {
    if (GeohashMirror_instance === null) {
      new GeohashMirror();
    }
    return GeohashMirror_instance;
  }
  function HasIdMirror(IDMirror) {
    HasIdMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.IDMirror = IDMirror;
  }
  Object.defineProperty(HasIdMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return HasIdMirror$Companion_getInstance();
  }});
  function HasIdMirror$Companion() {
    HasIdMirror$Companion_instance = this;
    this.minimal_9ik37x$_0 = new HasIdMirror(new TypeArgumentMirrorType('ID', Variance.INVARIANT, this.IDMirrorMinimal));
  }
  Object.defineProperty(HasIdMirror$Companion.prototype, 'IDMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(HasIdMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_9ik37x$_0;
  }});
  HasIdMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new HasIdMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  HasIdMirror$Companion.prototype.make_tx243f$ = function (IDMirror) {
    if (IDMirror === void 0)
      IDMirror = null;
    var tmp$;
    return new HasIdMirror(Kotlin.isType(tmp$ = IDMirror != null ? IDMirror : this.IDMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  HasIdMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var HasIdMirror$Companion_instance = null;
  function HasIdMirror$Companion_getInstance() {
    if (HasIdMirror$Companion_instance === null) {
      new HasIdMirror$Companion();
    }
    return HasIdMirror$Companion_instance;
  }
  Object.defineProperty(HasIdMirror.prototype, 'typeParameters', {get: function () {
    return [this.IDMirror];
  }});
  Object.defineProperty(HasIdMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(HasId), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(HasIdMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(HasIdMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(HasIdMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(HasIdMirror.prototype, 'localName', {get: function () {
    return 'HasId';
  }});
  HasIdMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'HasIdMirror', interfaces: [PolymorphicMirror]};
  HasIdMirror.prototype.component1 = function () {
    return this.IDMirror;
  };
  HasIdMirror.prototype.copy_42h6w7$ = function (IDMirror) {
    return new HasIdMirror(IDMirror === void 0 ? this.IDMirror : IDMirror);
  };
  HasIdMirror.prototype.toString = function () {
    return 'HasIdMirror(IDMirror=' + Kotlin.toString(this.IDMirror) + ')';
  };
  HasIdMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.IDMirror) | 0;
    return result;
  };
  HasIdMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.IDMirror, other.IDMirror))));
  };
  function HasUuidMirror() {
    HasUuidMirror_instance = this;
    PolymorphicMirror.call(this);
  }
  Object.defineProperty(HasUuidMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(HasUuid), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(HasUuidMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(HasUuidMirror.prototype, 'implements', {get: function () {
    return [new HasIdMirror(UuidMirror_getInstance())];
  }});
  Object.defineProperty(HasUuidMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(HasUuidMirror.prototype, 'localName', {get: function () {
    return 'HasUuid';
  }});
  HasUuidMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'HasUuidMirror', interfaces: [PolymorphicMirror]};
  var HasUuidMirror_instance = null;
  function HasUuidMirror_getInstance() {
    if (HasUuidMirror_instance === null) {
      new HasUuidMirror();
    }
    return HasUuidMirror_instance;
  }
  function LinkMirror(AMirror, BMirror) {
    LinkMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.AMirror = AMirror;
    this.BMirror = BMirror;
  }
  Object.defineProperty(LinkMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return LinkMirror$Companion_getInstance();
  }});
  function LinkMirror$Companion() {
    LinkMirror$Companion_instance = this;
    this.minimal_6lknhu$_0 = new LinkMirror(new TypeArgumentMirrorType('A', Variance.INVARIANT, this.AMirrorMinimal), new TypeArgumentMirrorType('B', Variance.INVARIANT, this.BMirrorMinimal));
  }
  Object.defineProperty(LinkMirror$Companion.prototype, 'AMirrorMinimal', {get: function () {
    return HasUuidMirror_getInstance();
  }});
  Object.defineProperty(LinkMirror$Companion.prototype, 'BMirrorMinimal', {get: function () {
    return HasUuidMirror_getInstance();
  }});
  Object.defineProperty(LinkMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_6lknhu$_0;
  }});
  LinkMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0;
    return new LinkMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE());
  };
  LinkMirror$Companion.prototype.make_9l4i5w$ = function (AMirror, BMirror) {
    if (AMirror === void 0)
      AMirror = null;
    if (BMirror === void 0)
      BMirror = null;
    var tmp$, tmp$_0;
    return new LinkMirror(Kotlin.isType(tmp$ = AMirror != null ? AMirror : this.AMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = BMirror != null ? BMirror : this.BMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE());
  };
  LinkMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var LinkMirror$Companion_instance = null;
  function LinkMirror$Companion_getInstance() {
    if (LinkMirror$Companion_instance === null) {
      new LinkMirror$Companion();
    }
    return LinkMirror$Companion_instance;
  }
  Object.defineProperty(LinkMirror.prototype, 'typeParameters', {get: function () {
    return [this.AMirror, this.BMirror];
  }});
  Object.defineProperty(LinkMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Link), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(LinkMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(LinkMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(LinkMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(LinkMirror.prototype, 'localName', {get: function () {
    return 'Link';
  }});
  LinkMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkMirror', interfaces: [PolymorphicMirror]};
  LinkMirror.prototype.component1 = function () {
    return this.AMirror;
  };
  LinkMirror.prototype.component2 = function () {
    return this.BMirror;
  };
  LinkMirror.prototype.copy_e10osy$ = function (AMirror, BMirror) {
    return new LinkMirror(AMirror === void 0 ? this.AMirror : AMirror, BMirror === void 0 ? this.BMirror : BMirror);
  };
  LinkMirror.prototype.toString = function () {
    return 'LinkMirror(AMirror=' + Kotlin.toString(this.AMirror) + (', BMirror=' + Kotlin.toString(this.BMirror)) + ')';
  };
  LinkMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.AMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.BMirror) | 0;
    return result;
  };
  LinkMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.AMirror, other.AMirror) && Kotlin.equals(this.BMirror, other.BMirror)))));
  };
  function LockableMirror(IDMirror) {
    LockableMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.IDMirror = IDMirror;
  }
  Object.defineProperty(LockableMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return LockableMirror$Companion_getInstance();
  }});
  function LockableMirror$Companion() {
    LockableMirror$Companion_instance = this;
    this.minimal_hnu75l$_0 = new LockableMirror(new TypeArgumentMirrorType('ID', Variance.INVARIANT, this.IDMirrorMinimal));
  }
  Object.defineProperty(LockableMirror$Companion.prototype, 'IDMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(LockableMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_hnu75l$_0;
  }});
  LockableMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new LockableMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  LockableMirror$Companion.prototype.make_tx243f$ = function (IDMirror) {
    if (IDMirror === void 0)
      IDMirror = null;
    var tmp$;
    return new LockableMirror(Kotlin.isType(tmp$ = IDMirror != null ? IDMirror : this.IDMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  LockableMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var LockableMirror$Companion_instance = null;
  function LockableMirror$Companion_getInstance() {
    if (LockableMirror$Companion_instance === null) {
      new LockableMirror$Companion();
    }
    return LockableMirror$Companion_instance;
  }
  Object.defineProperty(LockableMirror.prototype, 'typeParameters', {get: function () {
    return [this.IDMirror];
  }});
  Object.defineProperty(LockableMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Lockable), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(LockableMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(LockableMirror.prototype, 'implements', {get: function () {
    return [new HasIdMirror(this.IDMirror)];
  }});
  Object.defineProperty(LockableMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(LockableMirror.prototype, 'localName', {get: function () {
    return 'Lockable';
  }});
  LockableMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockableMirror', interfaces: [PolymorphicMirror]};
  LockableMirror.prototype.component1 = function () {
    return this.IDMirror;
  };
  LockableMirror.prototype.copy_42h6w7$ = function (IDMirror) {
    return new LockableMirror(IDMirror === void 0 ? this.IDMirror : IDMirror);
  };
  LockableMirror.prototype.toString = function () {
    return 'LockableMirror(IDMirror=' + Kotlin.toString(this.IDMirror) + ')';
  };
  LockableMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.IDMirror) | 0;
    return result;
  };
  LockableMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.IDMirror, other.IDMirror))));
  };
  function LockStateMirror() {
    LockStateMirror_instance = this;
    MirrorClass.call(this);
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', info.LongMirror, false, LockStateMirror$fieldValue$lambda, void 0, emptyList());
    this.fields_wbl9qe$_0 = [this.fieldValue];
  }
  Object.defineProperty(LockStateMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(LockState), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(LockStateMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Inline];
  }});
  Object.defineProperty(LockStateMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(LockStateMirror.prototype, 'localName', {get: function () {
    return 'LockState';
  }});
  Object.defineProperty(LockStateMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(LockStateMirror.prototype, 'companion', {get: function () {
    return LockState$Companion_getInstance();
  }});
  Object.defineProperty(LockStateMirror.prototype, 'fields', {get: function () {
    return this.fields_wbl9qe$_0;
  }});
  LockStateMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new LockState(Kotlin.isType(tmp$ = fieldValue, Kotlin.Long) ? tmp$ : throwCCE());
  };
  LockStateMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeLongElement_a3zgoj$(this, 0, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function LockStateMirror$fieldValue$lambda(it) {
    return it.value;
  }
  LockStateMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LockStateMirror', interfaces: [MirrorClass]};
  var LockStateMirror_instance = null;
  function LockStateMirror_getInstance() {
    if (LockStateMirror_instance === null) {
      new LockStateMirror();
    }
    return LockStateMirror_instance;
  }
  function OperationAddDoubleMirror() {
    OperationAddDoubleMirror_instance = this;
    MirrorClass.call(this);
    this.fieldAmount = new MirrorClass$Field(this, 0, 'amount', info.DoubleMirror, false, OperationAddDoubleMirror$fieldAmount$lambda, OperationAddDoubleMirror$fieldAmount$lambda_0, emptyList());
    this.fields_gkaf7f$_0 = [this.fieldAmount];
  }
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$AddDouble), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'localName', {get: function () {
    return 'Operation.AddDouble';
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'implements', {get: function () {
    return [new OperationAddNumericMirror(info.DoubleMirror)];
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationAddDoubleMirror.prototype, 'fields', {get: function () {
    return this.fields_gkaf7f$_0;
  }});
  OperationAddDoubleMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var amountSet = false;
    var fieldAmount = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldAmount = decoderStructure.decodeDoubleElement_3zr2iy$(this, 0);
          amountSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldAmount = decoderStructure.decodeDoubleElement_3zr2iy$(this, 0);
          amountSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!amountSet) {
      throw new MissingFieldException('amount');
    }
    return new Operation$AddDouble(typeof (tmp$ = fieldAmount) === 'number' ? tmp$ : throwCCE());
  };
  OperationAddDoubleMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeDoubleElement_imzr5k$(this, 0, obj.amount);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationAddDoubleMirror$fieldAmount$lambda(it) {
    return it.amount;
  }
  function OperationAddDoubleMirror$fieldAmount$lambda_0(it, value) {
    it.amount = value;
    return Unit;
  }
  OperationAddDoubleMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OperationAddDoubleMirror', interfaces: [MirrorClass]};
  var OperationAddDoubleMirror_instance = null;
  function OperationAddDoubleMirror_getInstance() {
    if (OperationAddDoubleMirror_instance === null) {
      new OperationAddDoubleMirror();
    }
    return OperationAddDoubleMirror_instance;
  }
  function OperationAddFloatMirror() {
    OperationAddFloatMirror_instance = this;
    MirrorClass.call(this);
    this.fieldAmount = new MirrorClass$Field(this, 0, 'amount', info.FloatMirror, false, OperationAddFloatMirror$fieldAmount$lambda, OperationAddFloatMirror$fieldAmount$lambda_0, emptyList());
    this.fields_5od1cm$_0 = [this.fieldAmount];
  }
  Object.defineProperty(OperationAddFloatMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$AddFloat), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'localName', {get: function () {
    return 'Operation.AddFloat';
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'implements', {get: function () {
    return [new OperationAddNumericMirror(info.FloatMirror)];
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationAddFloatMirror.prototype, 'fields', {get: function () {
    return this.fields_5od1cm$_0;
  }});
  OperationAddFloatMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var amountSet = false;
    var fieldAmount = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldAmount = decoderStructure.decodeFloatElement_3zr2iy$(this, 0);
          amountSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldAmount = decoderStructure.decodeFloatElement_3zr2iy$(this, 0);
          amountSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!amountSet) {
      throw new MissingFieldException('amount');
    }
    return new Operation$AddFloat(typeof (tmp$ = fieldAmount) === 'number' ? tmp$ : throwCCE());
  };
  OperationAddFloatMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeFloatElement_t7qhdx$(this, 0, obj.amount);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationAddFloatMirror$fieldAmount$lambda(it) {
    return it.amount;
  }
  function OperationAddFloatMirror$fieldAmount$lambda_0(it, value) {
    it.amount = value;
    return Unit;
  }
  OperationAddFloatMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OperationAddFloatMirror', interfaces: [MirrorClass]};
  var OperationAddFloatMirror_instance = null;
  function OperationAddFloatMirror_getInstance() {
    if (OperationAddFloatMirror_instance === null) {
      new OperationAddFloatMirror();
    }
    return OperationAddFloatMirror_instance;
  }
  function OperationAddIntMirror() {
    OperationAddIntMirror_instance = this;
    MirrorClass.call(this);
    this.fieldAmount = new MirrorClass$Field(this, 0, 'amount', info.IntMirror, false, OperationAddIntMirror$fieldAmount$lambda, OperationAddIntMirror$fieldAmount$lambda_0, emptyList());
    this.fields_p2h85z$_0 = [this.fieldAmount];
  }
  Object.defineProperty(OperationAddIntMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$AddInt), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'localName', {get: function () {
    return 'Operation.AddInt';
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'implements', {get: function () {
    return [new OperationAddNumericMirror(info.IntMirror)];
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationAddIntMirror.prototype, 'fields', {get: function () {
    return this.fields_p2h85z$_0;
  }});
  OperationAddIntMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var amountSet = false;
    var fieldAmount = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldAmount = decoderStructure.decodeIntElement_3zr2iy$(this, 0);
          amountSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldAmount = decoderStructure.decodeIntElement_3zr2iy$(this, 0);
          amountSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!amountSet) {
      throw new MissingFieldException('amount');
    }
    return new Operation$AddInt(typeof (tmp$ = fieldAmount) === 'number' ? tmp$ : throwCCE());
  };
  OperationAddIntMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeIntElement_4wpqag$(this, 0, obj.amount);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationAddIntMirror$fieldAmount$lambda(it) {
    return it.amount;
  }
  function OperationAddIntMirror$fieldAmount$lambda_0(it, value) {
    it.amount = value;
    return Unit;
  }
  OperationAddIntMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OperationAddIntMirror', interfaces: [MirrorClass]};
  var OperationAddIntMirror_instance = null;
  function OperationAddIntMirror_getInstance() {
    if (OperationAddIntMirror_instance === null) {
      new OperationAddIntMirror();
    }
    return OperationAddIntMirror_instance;
  }
  function OperationAddLongMirror() {
    OperationAddLongMirror_instance = this;
    MirrorClass.call(this);
    this.fieldAmount = new MirrorClass$Field(this, 0, 'amount', info.LongMirror, false, OperationAddLongMirror$fieldAmount$lambda, OperationAddLongMirror$fieldAmount$lambda_0, emptyList());
    this.fields_qn6zmu$_0 = [this.fieldAmount];
  }
  Object.defineProperty(OperationAddLongMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$AddLong), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'localName', {get: function () {
    return 'Operation.AddLong';
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'implements', {get: function () {
    return [new OperationAddNumericMirror(info.LongMirror)];
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationAddLongMirror.prototype, 'fields', {get: function () {
    return this.fields_qn6zmu$_0;
  }});
  OperationAddLongMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var amountSet = false;
    var fieldAmount = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldAmount = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          amountSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldAmount = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          amountSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!amountSet) {
      throw new MissingFieldException('amount');
    }
    return new Operation$AddLong(Kotlin.isType(tmp$ = fieldAmount, Kotlin.Long) ? tmp$ : throwCCE());
  };
  OperationAddLongMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeLongElement_a3zgoj$(this, 0, obj.amount);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationAddLongMirror$fieldAmount$lambda(it) {
    return it.amount;
  }
  function OperationAddLongMirror$fieldAmount$lambda_0(it, value) {
    it.amount = value;
    return Unit;
  }
  OperationAddLongMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OperationAddLongMirror', interfaces: [MirrorClass]};
  var OperationAddLongMirror_instance = null;
  function OperationAddLongMirror_getInstance() {
    if (OperationAddLongMirror_instance === null) {
      new OperationAddLongMirror();
    }
    return OperationAddLongMirror_instance;
  }
  function OperationAddNumericMirror(TMirror) {
    OperationAddNumericMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(OperationAddNumericMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return OperationAddNumericMirror$Companion_getInstance();
  }});
  function OperationAddNumericMirror$Companion() {
    OperationAddNumericMirror$Companion_instance = this;
    this.minimal_p7ie6t$_0 = new OperationAddNumericMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(OperationAddNumericMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(OperationAddNumericMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_p7ie6t$_0;
  }});
  OperationAddNumericMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new OperationAddNumericMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  OperationAddNumericMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new OperationAddNumericMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  OperationAddNumericMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var OperationAddNumericMirror$Companion_instance = null;
  function OperationAddNumericMirror$Companion_getInstance() {
    if (OperationAddNumericMirror$Companion_instance === null) {
      new OperationAddNumericMirror$Companion();
    }
    return OperationAddNumericMirror$Companion_instance;
  }
  Object.defineProperty(OperationAddNumericMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$AddNumeric), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'implements', {get: function () {
    return [new OperationMirror(this.TMirror)];
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'localName', {get: function () {
    return 'Operation.AddNumeric';
  }});
  Object.defineProperty(OperationAddNumericMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  OperationAddNumericMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperationAddNumericMirror', interfaces: [PolymorphicMirror]};
  OperationAddNumericMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  OperationAddNumericMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new OperationAddNumericMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  OperationAddNumericMirror.prototype.toString = function () {
    return 'OperationAddNumericMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  OperationAddNumericMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  OperationAddNumericMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function OperationAppendMirror() {
    OperationAppendMirror_instance = this;
    MirrorClass.call(this);
    this.fieldString = new MirrorClass$Field(this, 0, 'string', info.StringMirror, false, OperationAppendMirror$fieldString$lambda, OperationAppendMirror$fieldString$lambda_0, emptyList());
    this.fields_kpqxvv$_0 = [this.fieldString];
  }
  Object.defineProperty(OperationAppendMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$Append), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'localName', {get: function () {
    return 'Operation.Append';
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'implements', {get: function () {
    return [new OperationMirror(info.StringMirror)];
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationAppendMirror.prototype, 'fields', {get: function () {
    return this.fields_kpqxvv$_0;
  }});
  OperationAppendMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var stringSet = false;
    var fieldString = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldString = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          stringSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldString = decoderStructure.decodeStringElement_3zr2iy$(this, 0);
          stringSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!stringSet) {
      throw new MissingFieldException('string');
    }
    return new Operation$Append(typeof (tmp$ = fieldString) === 'string' ? tmp$ : throwCCE());
  };
  OperationAppendMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.string);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationAppendMirror$fieldString$lambda(it) {
    return it.string;
  }
  function OperationAppendMirror$fieldString$lambda_0(it, value) {
    it.string = value;
    return Unit;
  }
  OperationAppendMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OperationAppendMirror', interfaces: [MirrorClass]};
  var OperationAppendMirror_instance = null;
  function OperationAppendMirror_getInstance() {
    if (OperationAppendMirror_instance === null) {
      new OperationAppendMirror();
    }
    return OperationAppendMirror_instance;
  }
  function OperationFieldMirror(TMirror, VMirror) {
    OperationFieldMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.VMirror = VMirror;
    this.fieldField = new MirrorClass$Field(this, 0, 'field', new MirrorClassFieldMirror(this.TMirror, this.VMirror), false, OperationFieldMirror$fieldField$lambda, void 0, emptyList());
    this.fieldOperation = new MirrorClass$Field(this, 1, 'operation', new OperationMirror(this.VMirror), false, OperationFieldMirror$fieldOperation$lambda, void 0, emptyList());
    this.fields_q28kwt$_0 = [this.fieldField, this.fieldOperation];
  }
  Object.defineProperty(OperationFieldMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return OperationFieldMirror$Companion_getInstance();
  }});
  function OperationFieldMirror$Companion() {
    OperationFieldMirror$Companion_instance = this;
    this.minimal_4bmabd$_0 = new OperationFieldMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal), new TypeArgumentMirrorType('V', Variance.INVARIANT, this.VMirrorMinimal));
  }
  Object.defineProperty(OperationFieldMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(OperationFieldMirror$Companion.prototype, 'VMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(OperationFieldMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_4bmabd$_0;
  }});
  OperationFieldMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0;
    return new OperationFieldMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE());
  };
  OperationFieldMirror$Companion.prototype.make_9l4i5w$ = function (TMirror, VMirror) {
    if (TMirror === void 0)
      TMirror = null;
    if (VMirror === void 0)
      VMirror = null;
    var tmp$, tmp$_0;
    return new OperationFieldMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = VMirror != null ? VMirror : this.VMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE());
  };
  OperationFieldMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var OperationFieldMirror$Companion_instance = null;
  function OperationFieldMirror$Companion_getInstance() {
    if (OperationFieldMirror$Companion_instance === null) {
      new OperationFieldMirror$Companion();
    }
    return OperationFieldMirror$Companion_instance;
  }
  Object.defineProperty(OperationFieldMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror, this.VMirror];
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$Field), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'localName', {get: function () {
    return 'Operation.Field';
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'implements', {get: function () {
    return [new OperationMirror(this.TMirror)];
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationFieldMirror.prototype, 'fields', {get: function () {
    return this.fields_q28kwt$_0;
  }});
  OperationFieldMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var fieldSet = false;
    var fieldField = null;
    var operationSet = false;
    var fieldOperation = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new OperationMirror(this.VMirror));
          operationSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          break;
        case 1:
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new OperationMirror(this.VMirror));
          operationSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!fieldSet) {
      throw new MissingFieldException('field');
    }
    if (!operationSet) {
      throw new MissingFieldException('operation');
    }
    return new Operation$Field(Kotlin.isType(tmp$ = fieldField, MirrorClass$Field) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldOperation, Operation) ? tmp$_0 : throwCCE());
  };
  OperationFieldMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror), obj.field);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new OperationMirror(this.VMirror), obj.operation);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationFieldMirror$fieldField$lambda(it) {
    return it.field;
  }
  function OperationFieldMirror$fieldOperation$lambda(it) {
    return it.operation;
  }
  OperationFieldMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperationFieldMirror', interfaces: [MirrorClass]};
  OperationFieldMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  OperationFieldMirror.prototype.component2 = function () {
    return this.VMirror;
  };
  OperationFieldMirror.prototype.copy_i56qo9$ = function (TMirror, VMirror) {
    return new OperationFieldMirror(TMirror === void 0 ? this.TMirror : TMirror, VMirror === void 0 ? this.VMirror : VMirror);
  };
  OperationFieldMirror.prototype.toString = function () {
    return 'OperationFieldMirror(TMirror=' + Kotlin.toString(this.TMirror) + (', VMirror=' + Kotlin.toString(this.VMirror)) + ')';
  };
  OperationFieldMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.VMirror) | 0;
    return result;
  };
  OperationFieldMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.TMirror, other.TMirror) && Kotlin.equals(this.VMirror, other.VMirror)))));
  };
  function OperationMirror(TMirror) {
    OperationMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(OperationMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return OperationMirror$Companion_getInstance();
  }});
  function OperationMirror$Companion() {
    OperationMirror$Companion_instance = this;
    this.minimal_jhx4in$_0 = new OperationMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(OperationMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(OperationMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_jhx4in$_0;
  }});
  OperationMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new OperationMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  OperationMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new OperationMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  OperationMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var OperationMirror$Companion_instance = null;
  function OperationMirror$Companion_getInstance() {
    if (OperationMirror$Companion_instance === null) {
      new OperationMirror$Companion();
    }
    return OperationMirror$Companion_instance;
  }
  Object.defineProperty(OperationMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(OperationMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Interface];
  }});
  Object.defineProperty(OperationMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(OperationMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationMirror.prototype, 'localName', {get: function () {
    return 'Operation';
  }});
  OperationMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperationMirror', interfaces: [PolymorphicMirror]};
  OperationMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  OperationMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new OperationMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  OperationMirror.prototype.toString = function () {
    return 'OperationMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  OperationMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  OperationMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function OperationMultipleMirror(TMirror) {
    OperationMultipleMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldOperations = new MirrorClass$Field(this, 0, 'operations', new ListMirror(new OperationMirror(this.TMirror)), false, OperationMultipleMirror$fieldOperations$lambda, void 0, emptyList());
    this.fields_aachcl$_0 = [this.fieldOperations];
  }
  Object.defineProperty(OperationMultipleMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return OperationMultipleMirror$Companion_getInstance();
  }});
  function OperationMultipleMirror$Companion() {
    OperationMultipleMirror$Companion_instance = this;
    this.minimal_mrbrg1$_0 = new OperationMultipleMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(OperationMultipleMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(OperationMultipleMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_mrbrg1$_0;
  }});
  OperationMultipleMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new OperationMultipleMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  OperationMultipleMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new OperationMultipleMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  OperationMultipleMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var OperationMultipleMirror$Companion_instance = null;
  function OperationMultipleMirror$Companion_getInstance() {
    if (OperationMultipleMirror$Companion_instance === null) {
      new OperationMultipleMirror$Companion();
    }
    return OperationMultipleMirror$Companion_instance;
  }
  Object.defineProperty(OperationMultipleMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$Multiple), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'localName', {get: function () {
    return 'Operation.Multiple';
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'implements', {get: function () {
    return [new OperationMirror(this.TMirror)];
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationMultipleMirror.prototype, 'fields', {get: function () {
    return this.fields_aachcl$_0;
  }});
  OperationMultipleMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var operationsSet = false;
    var fieldOperations = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldOperations = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new OperationMirror(this.TMirror)));
          operationsSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldOperations = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new ListMirror(new OperationMirror(this.TMirror)));
          operationsSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!operationsSet) {
      throw new MissingFieldException('operations');
    }
    return new Operation$Multiple(Kotlin.isType(tmp$ = fieldOperations, List) ? tmp$ : throwCCE());
  };
  OperationMultipleMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new ListMirror(new OperationMirror(this.TMirror)), obj.operations);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationMultipleMirror$fieldOperations$lambda(it) {
    return it.operations;
  }
  OperationMultipleMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperationMultipleMirror', interfaces: [MirrorClass]};
  OperationMultipleMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  OperationMultipleMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new OperationMultipleMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  OperationMultipleMirror.prototype.toString = function () {
    return 'OperationMultipleMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  OperationMultipleMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  OperationMultipleMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function OperationSetMirror(TMirror) {
    OperationSetMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldValue = new MirrorClass$Field(this, 0, 'value', this.TMirror, false, OperationSetMirror$fieldValue$lambda, OperationSetMirror$fieldValue$lambda_0, emptyList());
    this.fields_vf64dx$_0 = [this.fieldValue];
  }
  Object.defineProperty(OperationSetMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return OperationSetMirror$Companion_getInstance();
  }});
  function OperationSetMirror$Companion() {
    OperationSetMirror$Companion_instance = this;
    this.minimal_dezptb$_0 = new OperationSetMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(OperationSetMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror.nullable;
  }});
  Object.defineProperty(OperationSetMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_dezptb$_0;
  }});
  OperationSetMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new OperationSetMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  OperationSetMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new OperationSetMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  OperationSetMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var OperationSetMirror$Companion_instance = null;
  function OperationSetMirror$Companion_getInstance() {
    if (OperationSetMirror$Companion_instance === null) {
      new OperationSetMirror$Companion();
    }
    return OperationSetMirror$Companion_instance;
  }
  Object.defineProperty(OperationSetMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Operation$Set), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'localName', {get: function () {
    return 'Operation.Set';
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'implements', {get: function () {
    return [new OperationMirror(this.TMirror)];
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'owningClass', {get: function () {
    return getKClass(Operation);
  }});
  Object.defineProperty(OperationSetMirror.prototype, 'fields', {get: function () {
    return this.fields_vf64dx$_0;
  }});
  OperationSetMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var valueSet = false;
    var fieldValue = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldValue = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, this.TMirror);
          valueSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!valueSet) {
      throw new MissingFieldException('value');
    }
    return new Operation$Set((tmp$ = fieldValue) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  OperationSetMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, this.TMirror, obj.value);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function OperationSetMirror$fieldValue$lambda(it) {
    return it.value;
  }
  function OperationSetMirror$fieldValue$lambda_0(it, value) {
    it.value = value;
    return Unit;
  }
  OperationSetMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperationSetMirror', interfaces: [MirrorClass]};
  OperationSetMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  OperationSetMirror.prototype.copy_42h6w7$ = function (TMirror) {
    return new OperationSetMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  OperationSetMirror.prototype.toString = function () {
    return 'OperationSetMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  OperationSetMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  OperationSetMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function PrimaryKeyMirror() {
  }
  Object.defineProperty(PrimaryKeyMirror.prototype, 'annotationType', {get: function () {
    return getKClass(PrimaryKey);
  }});
  PrimaryKeyMirror.prototype.asMap = function () {
    return emptyMap();
  };
  PrimaryKeyMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimaryKeyMirror', interfaces: [MirrorAnnotation]};
  function ReferenceMirror(MODELMirror) {
    ReferenceMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.MODELMirror = MODELMirror;
    this.fieldKey = new MirrorClass$Field(this, 0, 'key', UuidMirror_getInstance(), false, ReferenceMirror$fieldKey$lambda, void 0, emptyList());
    this.fields_hvzl5r$_0 = [this.fieldKey];
  }
  Object.defineProperty(ReferenceMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return ReferenceMirror$Companion_getInstance();
  }});
  function ReferenceMirror$Companion() {
    ReferenceMirror$Companion_instance = this;
    this.minimal_5q11ml$_0 = new ReferenceMirror(new TypeArgumentMirrorType('MODEL', Variance.INVARIANT, this.MODELMirrorMinimal));
  }
  Object.defineProperty(ReferenceMirror$Companion.prototype, 'MODELMirrorMinimal', {get: function () {
    return HasUuidMirror_getInstance();
  }});
  Object.defineProperty(ReferenceMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_5q11ml$_0;
  }});
  ReferenceMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new ReferenceMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  ReferenceMirror$Companion.prototype.make_tx243f$ = function (MODELMirror) {
    if (MODELMirror === void 0)
      MODELMirror = null;
    var tmp$;
    return new ReferenceMirror(Kotlin.isType(tmp$ = MODELMirror != null ? MODELMirror : this.MODELMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  ReferenceMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var ReferenceMirror$Companion_instance = null;
  function ReferenceMirror$Companion_getInstance() {
    if (ReferenceMirror$Companion_instance === null) {
      new ReferenceMirror$Companion();
    }
    return ReferenceMirror$Companion_instance;
  }
  Object.defineProperty(ReferenceMirror.prototype, 'typeParameters', {get: function () {
    return [this.MODELMirror];
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Reference), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Inline];
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'localName', {get: function () {
    return 'Reference';
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(ReferenceMirror.prototype, 'fields', {get: function () {
    return this.fields_hvzl5r$_0;
  }});
  ReferenceMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var keySet = false;
    var fieldKey = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.MODELMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldKey = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UuidMirror_getInstance());
          keySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldKey = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UuidMirror_getInstance());
          keySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!keySet) {
      throw new MissingFieldException('key');
    }
    return new Reference(Kotlin.isType(tmp$ = fieldKey, Uuid) ? tmp$ : throwCCE());
  };
  ReferenceMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.MODELMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, UuidMirror_getInstance(), obj.key);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function ReferenceMirror$fieldKey$lambda(it) {
    return it.key;
  }
  ReferenceMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReferenceMirror', interfaces: [MirrorClass]};
  ReferenceMirror.prototype.component1 = function () {
    return this.MODELMirror;
  };
  ReferenceMirror.prototype.copy_hc8wop$ = function (MODELMirror) {
    return new ReferenceMirror(MODELMirror === void 0 ? this.MODELMirror : MODELMirror);
  };
  ReferenceMirror.prototype.toString = function () {
    return 'ReferenceMirror(MODELMirror=' + Kotlin.toString(this.MODELMirror) + ')';
  };
  ReferenceMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.MODELMirror) | 0;
    return result;
  };
  ReferenceMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.MODELMirror, other.MODELMirror))));
  };
  function registerArchive() {
    info.MirrorRegistry.register_iraexb$([RequestDatabaseDeleteMirror$Companion_getInstance().minimal, DatabaseRequestMirror$Companion_getInstance().minimal, RequestDatabaseLimitedUpdateMirror$Companion_getInstance().minimal, RequestDatabaseUpdateMirror$Companion_getInstance().minimal, RequestDatabaseInsertMirror$Companion_getInstance().minimal, RequestDatabaseGetMirror$Companion_getInstance().minimal, OperationMultipleMirror$Companion_getInstance().minimal, OperationFieldMirror$Companion_getInstance().minimal, OperationAppendMirror_getInstance(), OperationAddDoubleMirror_getInstance(), OperationAddNumericMirror$Companion_getInstance().minimal, OperationAddFloatMirror_getInstance(), OperationAddLongMirror_getInstance(), OperationAddIntMirror_getInstance(), OperationAddNumericMirror$Companion_getInstance().minimal, OperationSetMirror$Companion_getInstance().minimal, ConditionRegexTextSearchMirror_getInstance(), ConditionEndsWithMirror_getInstance(), ConditionStartsWithMirror_getInstance(), ConditionTextSearchMirror_getInstance(), ConditionGreaterThanOrEqualMirror$Companion_getInstance().minimal, ConditionLessThanOrEqualMirror$Companion_getInstance().minimal, ConditionGreaterThanMirror$Companion_getInstance().minimal, ConditionLessThanMirror$Companion_getInstance().minimal, ConditionNotEqualMirror$Companion_getInstance().minimal, ConditionEqualToOneMirror$Companion_getInstance().minimal, ConditionEqualMirror$Companion_getInstance().minimal, ConditionFieldMirror$Companion_getInstance().minimal, ConditionNotMirror$Companion_getInstance().minimal, ConditionOrMirror$Companion_getInstance().minimal, ConditionAndMirror$Companion_getInstance().minimal, ConditionAlwaysMirror_getInstance(), ConditionNeverMirror_getInstance(), GeohashMirror_getInstance(), TimeStampMirror_getInstance(), LockableMirror$Companion_getInstance().minimal, LockStateMirror_getInstance(), HasIdMirror$Companion_getInstance().minimal, HasUuidMirror_getInstance(), TypedReferenceMirror_getInstance(), ReferenceMirror$Companion_getInstance().minimal, UuidMirror_getInstance(), SortMirror$Companion_getInstance().minimal, LinkMirror$Companion_getInstance().minimal, OperationMirror$Companion_getInstance().minimal, ConditionMirror$Companion_getInstance().minimal]);
  }
  function RequestDatabaseDeleteMirror(TMirror) {
    RequestDatabaseDeleteMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldDatabaseRequest = new MirrorClass$Field(this, 0, 'databaseRequest', new DatabaseRequestMirror(this.TMirror), false, RequestDatabaseDeleteMirror$fieldDatabaseRequest$lambda, void 0, emptyList());
    this.fieldCondition = new MirrorClass$Field(this, 1, 'condition', new ConditionMirror(this.TMirror), false, RequestDatabaseDeleteMirror$fieldCondition$lambda, void 0, emptyList());
    this.fields_p0dzgz$_0 = [this.fieldDatabaseRequest, this.fieldCondition];
  }
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestDatabaseDeleteMirror$Companion_getInstance();
  }});
  function RequestDatabaseDeleteMirror$Companion() {
    RequestDatabaseDeleteMirror$Companion_instance = this;
    this.minimal_156ftd$_0 = new RequestDatabaseDeleteMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(RequestDatabaseDeleteMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_156ftd$_0;
  }});
  RequestDatabaseDeleteMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestDatabaseDeleteMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseDeleteMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestDatabaseDeleteMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseDeleteMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestDatabaseDeleteMirror$Companion_instance = null;
  function RequestDatabaseDeleteMirror$Companion_getInstance() {
    if (RequestDatabaseDeleteMirror$Companion_instance === null) {
      new RequestDatabaseDeleteMirror$Companion();
    }
    return RequestDatabaseDeleteMirror$Companion_instance;
  }
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RequestDatabase$Delete), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'localName', {get: function () {
    return 'RequestDatabase.Delete';
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'implements', {get: function () {
    return [new RequestMirror(info.IntMirror)];
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'owningClass', {get: function () {
    return getKClass(RequestDatabase);
  }});
  Object.defineProperty(RequestDatabaseDeleteMirror.prototype, 'fields', {get: function () {
    return this.fields_p0dzgz$_0;
  }});
  RequestDatabaseDeleteMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var databaseRequestSet = false;
    var fieldDatabaseRequest = null;
    var conditionSet = false;
    var fieldCondition = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          break;
        case 1:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!databaseRequestSet) {
      throw new MissingFieldException('databaseRequest');
    }
    if (!conditionSet) {
      throw new MissingFieldException('condition');
    }
    return new RequestDatabase$Delete(Kotlin.isType(tmp$ = fieldDatabaseRequest, Database$Request) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldCondition, Condition) ? tmp$_0 : throwCCE());
  };
  RequestDatabaseDeleteMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new DatabaseRequestMirror(this.TMirror), obj.databaseRequest);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ConditionMirror(this.TMirror), obj.condition);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RequestDatabaseDeleteMirror$fieldDatabaseRequest$lambda(it) {
    return it.databaseRequest;
  }
  function RequestDatabaseDeleteMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  RequestDatabaseDeleteMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabaseDeleteMirror', interfaces: [MirrorClass]};
  RequestDatabaseDeleteMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestDatabaseDeleteMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new RequestDatabaseDeleteMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestDatabaseDeleteMirror.prototype.toString = function () {
    return 'RequestDatabaseDeleteMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestDatabaseDeleteMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestDatabaseDeleteMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function RequestDatabaseGetMirror(TMirror) {
    RequestDatabaseGetMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldDatabaseRequest = new MirrorClass$Field(this, 0, 'databaseRequest', new DatabaseRequestMirror(this.TMirror), false, RequestDatabaseGetMirror$fieldDatabaseRequest$lambda, void 0, emptyList());
    this.fieldCondition = new MirrorClass$Field(this, 1, 'condition', new ConditionMirror(this.TMirror), true, RequestDatabaseGetMirror$fieldCondition$lambda, void 0, emptyList());
    var tmp$;
    this.fieldSort = new MirrorClass$Field(this, 2, 'sort', new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()), true, RequestDatabaseGetMirror$fieldSort$lambda, void 0, emptyList());
    this.fieldCount = new MirrorClass$Field(this, 3, 'count', info.IntMirror, true, RequestDatabaseGetMirror$fieldCount$lambda, void 0, emptyList());
    this.fieldAfter = new MirrorClass$Field(this, 4, 'after', get_nullable(this.TMirror), true, RequestDatabaseGetMirror$fieldAfter$lambda, void 0, emptyList());
    this.fields_z8ntiw$_0 = [this.fieldDatabaseRequest, this.fieldCondition, this.fieldSort, this.fieldCount, this.fieldAfter];
  }
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestDatabaseGetMirror$Companion_getInstance();
  }});
  function RequestDatabaseGetMirror$Companion() {
    RequestDatabaseGetMirror$Companion_instance = this;
    this.minimal_s01mys$_0 = new RequestDatabaseGetMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(RequestDatabaseGetMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(RequestDatabaseGetMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_s01mys$_0;
  }});
  RequestDatabaseGetMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestDatabaseGetMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseGetMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestDatabaseGetMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseGetMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestDatabaseGetMirror$Companion_instance = null;
  function RequestDatabaseGetMirror$Companion_getInstance() {
    if (RequestDatabaseGetMirror$Companion_instance === null) {
      new RequestDatabaseGetMirror$Companion();
    }
    return RequestDatabaseGetMirror$Companion_instance;
  }
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RequestDatabase$Get), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'localName', {get: function () {
    return 'RequestDatabase.Get';
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'implements', {get: function () {
    return [new RequestMirror(new ListMirror(this.TMirror))];
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'owningClass', {get: function () {
    return getKClass(RequestDatabase);
  }});
  Object.defineProperty(RequestDatabaseGetMirror.prototype, 'fields', {get: function () {
    return this.fields_z8ntiw$_0;
  }});
  RequestDatabaseGetMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var databaseRequestSet = false;
    var fieldDatabaseRequest = null;
    var conditionSet = false;
    var fieldCondition = null;
    var sortSet = false;
    var fieldSort = null;
    var countSet = false;
    var fieldCount = null;
    var afterSet = false;
    var fieldAfter = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          fieldSort = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()));
          sortSet = true;
          fieldCount = decoderStructure.decodeIntElement_3zr2iy$(this, 3);
          countSet = true;
          fieldAfter = decoderStructure.decodeSerializableElement_s44l7r$(this, 4, get_nullable(this.TMirror));
          afterSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          break;
        case 1:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break;
        case 2:
          fieldSort = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new ListMirror(Kotlin.isType(tmp$_0 = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$_0 : throwCCE()));
          sortSet = true;
          break;
        case 3:
          fieldCount = decoderStructure.decodeIntElement_3zr2iy$(this, 3);
          countSet = true;
          break;
        case 4:
          fieldAfter = decoderStructure.decodeSerializableElement_s44l7r$(this, 4, get_nullable(this.TMirror));
          afterSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!databaseRequestSet) {
      throw new MissingFieldException('databaseRequest');
    }
    if (!conditionSet) {
      fieldCondition = Condition$Always_getInstance();
    }
    if (!sortSet) {
      fieldSort = emptyList();
    }
    if (!countSet) {
      fieldCount = 100;
    }
    if (!afterSet) {
      fieldAfter = null;
    }
    return new RequestDatabase$Get(Kotlin.isType(tmp$_1 = fieldDatabaseRequest, Database$Request) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = fieldCondition, Condition) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = fieldSort, List) ? tmp$_3 : throwCCE(), typeof (tmp$_4 = fieldCount) === 'number' ? tmp$_4 : throwCCE(), (tmp$_5 = fieldAfter) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE());
  };
  RequestDatabaseGetMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new DatabaseRequestMirror(this.TMirror), obj.databaseRequest);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ConditionMirror(this.TMirror), obj.condition);
    encoderStructure.encodeSerializableElement_blecud$(this, 2, new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()), obj.sort);
    encoderStructure.encodeIntElement_4wpqag$(this, 3, obj.count);
    encoderStructure.encodeSerializableElement_blecud$(this, 4, get_nullable(this.TMirror), obj.after);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RequestDatabaseGetMirror$fieldDatabaseRequest$lambda(it) {
    return it.databaseRequest;
  }
  function RequestDatabaseGetMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  function RequestDatabaseGetMirror$fieldSort$lambda(it) {
    return it.sort;
  }
  function RequestDatabaseGetMirror$fieldCount$lambda(it) {
    return it.count;
  }
  function RequestDatabaseGetMirror$fieldAfter$lambda(it) {
    return it.after;
  }
  RequestDatabaseGetMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabaseGetMirror', interfaces: [MirrorClass]};
  RequestDatabaseGetMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestDatabaseGetMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new RequestDatabaseGetMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestDatabaseGetMirror.prototype.toString = function () {
    return 'RequestDatabaseGetMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestDatabaseGetMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestDatabaseGetMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function RequestDatabaseInsertMirror(TMirror) {
    RequestDatabaseInsertMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldDatabaseRequest = new MirrorClass$Field(this, 0, 'databaseRequest', new DatabaseRequestMirror(this.TMirror), false, RequestDatabaseInsertMirror$fieldDatabaseRequest$lambda, void 0, emptyList());
    this.fieldValues = new MirrorClass$Field(this, 1, 'values', new ListMirror(this.TMirror), false, RequestDatabaseInsertMirror$fieldValues$lambda, void 0, emptyList());
    this.fields_jwcomz$_0 = [this.fieldDatabaseRequest, this.fieldValues];
  }
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestDatabaseInsertMirror$Companion_getInstance();
  }});
  function RequestDatabaseInsertMirror$Companion() {
    RequestDatabaseInsertMirror$Companion_instance = this;
    this.minimal_en77dt$_0 = new RequestDatabaseInsertMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(RequestDatabaseInsertMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(RequestDatabaseInsertMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_en77dt$_0;
  }});
  RequestDatabaseInsertMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestDatabaseInsertMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseInsertMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestDatabaseInsertMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseInsertMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestDatabaseInsertMirror$Companion_instance = null;
  function RequestDatabaseInsertMirror$Companion_getInstance() {
    if (RequestDatabaseInsertMirror$Companion_instance === null) {
      new RequestDatabaseInsertMirror$Companion();
    }
    return RequestDatabaseInsertMirror$Companion_instance;
  }
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RequestDatabase$Insert), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'localName', {get: function () {
    return 'RequestDatabase.Insert';
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'implements', {get: function () {
    return [new RequestMirror(new ListMirror(this.TMirror))];
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'owningClass', {get: function () {
    return getKClass(RequestDatabase);
  }});
  Object.defineProperty(RequestDatabaseInsertMirror.prototype, 'fields', {get: function () {
    return this.fields_jwcomz$_0;
  }});
  RequestDatabaseInsertMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var databaseRequestSet = false;
    var fieldDatabaseRequest = null;
    var valuesSet = false;
    var fieldValues = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          fieldValues = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ListMirror(this.TMirror));
          valuesSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          break;
        case 1:
          fieldValues = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ListMirror(this.TMirror));
          valuesSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!databaseRequestSet) {
      throw new MissingFieldException('databaseRequest');
    }
    if (!valuesSet) {
      throw new MissingFieldException('values');
    }
    return new RequestDatabase$Insert(Kotlin.isType(tmp$ = fieldDatabaseRequest, Database$Request) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldValues, List) ? tmp$_0 : throwCCE());
  };
  RequestDatabaseInsertMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new DatabaseRequestMirror(this.TMirror), obj.databaseRequest);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ListMirror(this.TMirror), obj.values);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RequestDatabaseInsertMirror$fieldDatabaseRequest$lambda(it) {
    return it.databaseRequest;
  }
  function RequestDatabaseInsertMirror$fieldValues$lambda(it) {
    return it.values;
  }
  RequestDatabaseInsertMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabaseInsertMirror', interfaces: [MirrorClass]};
  RequestDatabaseInsertMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestDatabaseInsertMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new RequestDatabaseInsertMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestDatabaseInsertMirror.prototype.toString = function () {
    return 'RequestDatabaseInsertMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestDatabaseInsertMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestDatabaseInsertMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function RequestDatabaseLimitedUpdateMirror(TMirror) {
    RequestDatabaseLimitedUpdateMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldDatabaseRequest = new MirrorClass$Field(this, 0, 'databaseRequest', new DatabaseRequestMirror(this.TMirror), false, RequestDatabaseLimitedUpdateMirror$fieldDatabaseRequest$lambda, void 0, emptyList());
    this.fieldCondition = new MirrorClass$Field(this, 1, 'condition', new ConditionMirror(this.TMirror), false, RequestDatabaseLimitedUpdateMirror$fieldCondition$lambda, void 0, emptyList());
    this.fieldOperation = new MirrorClass$Field(this, 2, 'operation', new OperationMirror(this.TMirror), false, RequestDatabaseLimitedUpdateMirror$fieldOperation$lambda, void 0, emptyList());
    var tmp$;
    this.fieldSort = new MirrorClass$Field(this, 3, 'sort', new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()), true, RequestDatabaseLimitedUpdateMirror$fieldSort$lambda, void 0, emptyList());
    this.fieldLimit = new MirrorClass$Field(this, 4, 'limit', info.IntMirror, false, RequestDatabaseLimitedUpdateMirror$fieldLimit$lambda, void 0, emptyList());
    this.fields_t1rdn$_0 = [this.fieldDatabaseRequest, this.fieldCondition, this.fieldOperation, this.fieldSort, this.fieldLimit];
  }
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestDatabaseLimitedUpdateMirror$Companion_getInstance();
  }});
  function RequestDatabaseLimitedUpdateMirror$Companion() {
    RequestDatabaseLimitedUpdateMirror$Companion_instance = this;
    this.minimal_z5bzw7$_0 = new RequestDatabaseLimitedUpdateMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_z5bzw7$_0;
  }});
  RequestDatabaseLimitedUpdateMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestDatabaseLimitedUpdateMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseLimitedUpdateMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestDatabaseLimitedUpdateMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseLimitedUpdateMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestDatabaseLimitedUpdateMirror$Companion_instance = null;
  function RequestDatabaseLimitedUpdateMirror$Companion_getInstance() {
    if (RequestDatabaseLimitedUpdateMirror$Companion_instance === null) {
      new RequestDatabaseLimitedUpdateMirror$Companion();
    }
    return RequestDatabaseLimitedUpdateMirror$Companion_instance;
  }
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RequestDatabase$LimitedUpdate), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'localName', {get: function () {
    return 'RequestDatabase.LimitedUpdate';
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'implements', {get: function () {
    return [new RequestMirror(info.IntMirror)];
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'owningClass', {get: function () {
    return getKClass(RequestDatabase);
  }});
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror.prototype, 'fields', {get: function () {
    return this.fields_t1rdn$_0;
  }});
  RequestDatabaseLimitedUpdateMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var databaseRequestSet = false;
    var fieldDatabaseRequest = null;
    var conditionSet = false;
    var fieldCondition = null;
    var operationSet = false;
    var fieldOperation = null;
    var sortSet = false;
    var fieldSort = null;
    var limitSet = false;
    var fieldLimit = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new OperationMirror(this.TMirror));
          operationSet = true;
          fieldSort = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()));
          sortSet = true;
          fieldLimit = decoderStructure.decodeIntElement_3zr2iy$(this, 4);
          limitSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          break;
        case 1:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break;
        case 2:
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new OperationMirror(this.TMirror));
          operationSet = true;
          break;
        case 3:
          fieldSort = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, new ListMirror(Kotlin.isType(tmp$_0 = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$_0 : throwCCE()));
          sortSet = true;
          break;
        case 4:
          fieldLimit = decoderStructure.decodeIntElement_3zr2iy$(this, 4);
          limitSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!databaseRequestSet) {
      throw new MissingFieldException('databaseRequest');
    }
    if (!conditionSet) {
      throw new MissingFieldException('condition');
    }
    if (!operationSet) {
      throw new MissingFieldException('operation');
    }
    if (!sortSet) {
      fieldSort = emptyList();
    }
    if (!limitSet) {
      throw new MissingFieldException('limit');
    }
    return new RequestDatabase$LimitedUpdate(Kotlin.isType(tmp$_1 = fieldDatabaseRequest, Database$Request) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = fieldCondition, Condition) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = fieldOperation, Operation) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = fieldSort, List) ? tmp$_4 : throwCCE(), typeof (tmp$_5 = fieldLimit) === 'number' ? tmp$_5 : throwCCE());
  };
  RequestDatabaseLimitedUpdateMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new DatabaseRequestMirror(this.TMirror), obj.databaseRequest);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ConditionMirror(this.TMirror), obj.condition);
    encoderStructure.encodeSerializableElement_blecud$(this, 2, new OperationMirror(this.TMirror), obj.operation);
    encoderStructure.encodeSerializableElement_blecud$(this, 3, new ListMirror(Kotlin.isType(tmp$ = SortMirror$Companion_getInstance().make_9l4i5w$(this.TMirror, null), MirrorType) ? tmp$ : throwCCE()), obj.sort);
    encoderStructure.encodeIntElement_4wpqag$(this, 4, obj.limit);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RequestDatabaseLimitedUpdateMirror$fieldDatabaseRequest$lambda(it) {
    return it.databaseRequest;
  }
  function RequestDatabaseLimitedUpdateMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  function RequestDatabaseLimitedUpdateMirror$fieldOperation$lambda(it) {
    return it.operation;
  }
  function RequestDatabaseLimitedUpdateMirror$fieldSort$lambda(it) {
    return it.sort;
  }
  function RequestDatabaseLimitedUpdateMirror$fieldLimit$lambda(it) {
    return it.limit;
  }
  RequestDatabaseLimitedUpdateMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabaseLimitedUpdateMirror', interfaces: [MirrorClass]};
  RequestDatabaseLimitedUpdateMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestDatabaseLimitedUpdateMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new RequestDatabaseLimitedUpdateMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestDatabaseLimitedUpdateMirror.prototype.toString = function () {
    return 'RequestDatabaseLimitedUpdateMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestDatabaseLimitedUpdateMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestDatabaseLimitedUpdateMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function RequestDatabaseUpdateMirror(TMirror) {
    RequestDatabaseUpdateMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.fieldDatabaseRequest = new MirrorClass$Field(this, 0, 'databaseRequest', new DatabaseRequestMirror(this.TMirror), false, RequestDatabaseUpdateMirror$fieldDatabaseRequest$lambda, void 0, emptyList());
    this.fieldCondition = new MirrorClass$Field(this, 1, 'condition', new ConditionMirror(this.TMirror), false, RequestDatabaseUpdateMirror$fieldCondition$lambda, void 0, emptyList());
    this.fieldOperation = new MirrorClass$Field(this, 2, 'operation', new OperationMirror(this.TMirror), false, RequestDatabaseUpdateMirror$fieldOperation$lambda, void 0, emptyList());
    this.fields_wxt1hn$_0 = [this.fieldDatabaseRequest, this.fieldCondition, this.fieldOperation];
  }
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return RequestDatabaseUpdateMirror$Companion_getInstance();
  }});
  function RequestDatabaseUpdateMirror$Companion() {
    RequestDatabaseUpdateMirror$Companion_instance = this;
    this.minimal_oox4b5$_0 = new RequestDatabaseUpdateMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(RequestDatabaseUpdateMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_oox4b5$_0;
  }});
  RequestDatabaseUpdateMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$;
    return new RequestDatabaseUpdateMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseUpdateMirror$Companion.prototype.make_tx243f$ = function (TMirror) {
    if (TMirror === void 0)
      TMirror = null;
    var tmp$;
    return new RequestDatabaseUpdateMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE());
  };
  RequestDatabaseUpdateMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var RequestDatabaseUpdateMirror$Companion_instance = null;
  function RequestDatabaseUpdateMirror$Companion_getInstance() {
    if (RequestDatabaseUpdateMirror$Companion_instance === null) {
      new RequestDatabaseUpdateMirror$Companion();
    }
    return RequestDatabaseUpdateMirror$Companion_instance;
  }
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror];
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(RequestDatabase$Update), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.database';
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'localName', {get: function () {
    return 'RequestDatabase.Update';
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'implements', {get: function () {
    return [new RequestMirror(info.IntMirror)];
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'owningClass', {get: function () {
    return getKClass(RequestDatabase);
  }});
  Object.defineProperty(RequestDatabaseUpdateMirror.prototype, 'fields', {get: function () {
    return this.fields_wxt1hn$_0;
  }});
  RequestDatabaseUpdateMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1;
    var databaseRequestSet = false;
    var fieldDatabaseRequest = null;
    var conditionSet = false;
    var fieldCondition = null;
    var operationSet = false;
    var fieldOperation = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new OperationMirror(this.TMirror));
          operationSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldDatabaseRequest = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new DatabaseRequestMirror(this.TMirror));
          databaseRequestSet = true;
          break;
        case 1:
          fieldCondition = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, new ConditionMirror(this.TMirror));
          conditionSet = true;
          break;
        case 2:
          fieldOperation = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new OperationMirror(this.TMirror));
          operationSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!databaseRequestSet) {
      throw new MissingFieldException('databaseRequest');
    }
    if (!conditionSet) {
      throw new MissingFieldException('condition');
    }
    if (!operationSet) {
      throw new MissingFieldException('operation');
    }
    return new RequestDatabase$Update(Kotlin.isType(tmp$ = fieldDatabaseRequest, Database$Request) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldCondition, Condition) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = fieldOperation, Operation) ? tmp$_1 : throwCCE());
  };
  RequestDatabaseUpdateMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new DatabaseRequestMirror(this.TMirror), obj.databaseRequest);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, new ConditionMirror(this.TMirror), obj.condition);
    encoderStructure.encodeSerializableElement_blecud$(this, 2, new OperationMirror(this.TMirror), obj.operation);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function RequestDatabaseUpdateMirror$fieldDatabaseRequest$lambda(it) {
    return it.databaseRequest;
  }
  function RequestDatabaseUpdateMirror$fieldCondition$lambda(it) {
    return it.condition;
  }
  function RequestDatabaseUpdateMirror$fieldOperation$lambda(it) {
    return it.operation;
  }
  RequestDatabaseUpdateMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestDatabaseUpdateMirror', interfaces: [MirrorClass]};
  RequestDatabaseUpdateMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  RequestDatabaseUpdateMirror.prototype.copy_84t8a7$ = function (TMirror) {
    return new RequestDatabaseUpdateMirror(TMirror === void 0 ? this.TMirror : TMirror);
  };
  RequestDatabaseUpdateMirror.prototype.toString = function () {
    return 'RequestDatabaseUpdateMirror(TMirror=' + Kotlin.toString(this.TMirror) + ')';
  };
  RequestDatabaseUpdateMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    return result;
  };
  RequestDatabaseUpdateMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.TMirror, other.TMirror))));
  };
  function SortMirror(TMirror, VMirror) {
    SortMirror$Companion_getInstance();
    MirrorClass.call(this);
    this.TMirror = TMirror;
    this.VMirror = VMirror;
    this.fieldField = new MirrorClass$Field(this, 0, 'field', new MirrorClassFieldMirror(this.TMirror, this.VMirror), false, SortMirror$fieldField$lambda, void 0, emptyList());
    this.fieldAscending = new MirrorClass$Field(this, 1, 'ascending', info.BooleanMirror, true, SortMirror$fieldAscending$lambda, void 0, emptyList());
    this.fields_lgzwa6$_0 = [this.fieldField, this.fieldAscending];
  }
  Object.defineProperty(SortMirror.prototype, 'mirrorClassCompanion', {get: function () {
    return SortMirror$Companion_getInstance();
  }});
  function SortMirror$Companion() {
    SortMirror$Companion_instance = this;
    this.minimal_c9r3n6$_0 = new SortMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal), new TypeArgumentMirrorType('V', Variance.INVARIANT, this.VMirrorMinimal));
  }
  Object.defineProperty(SortMirror$Companion.prototype, 'TMirrorMinimal', {get: function () {
    return info.AnyMirror;
  }});
  Object.defineProperty(SortMirror$Companion.prototype, 'VMirrorMinimal', {get: function () {
    return new ComparableMirror(new ComparableMirror(new ComparableMirror(info.AnyMirror.nullable)));
  }});
  Object.defineProperty(SortMirror$Companion.prototype, 'minimal', {get: function () {
    return this.minimal_c9r3n6$_0;
  }});
  SortMirror$Companion.prototype.make_gt5c0j$ = function (typeArguments) {
    var tmp$, tmp$_0;
    return new SortMirror(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0), MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = typeArguments.get_za3lpa$(1), MirrorType) ? tmp$_0 : throwCCE());
  };
  SortMirror$Companion.prototype.make_9l4i5w$ = function (TMirror, VMirror) {
    if (TMirror === void 0)
      TMirror = null;
    if (VMirror === void 0)
      VMirror = null;
    var tmp$, tmp$_0;
    return new SortMirror(Kotlin.isType(tmp$ = TMirror != null ? TMirror : this.TMirrorMinimal, MirrorType) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = VMirror != null ? VMirror : this.VMirrorMinimal, MirrorType) ? tmp$_0 : throwCCE());
  };
  SortMirror$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [MirrorClassCompanion]};
  var SortMirror$Companion_instance = null;
  function SortMirror$Companion_getInstance() {
    if (SortMirror$Companion_instance === null) {
      new SortMirror$Companion();
    }
    return SortMirror$Companion_instance;
  }
  Object.defineProperty(SortMirror.prototype, 'typeParameters', {get: function () {
    return [this.TMirror, this.VMirror];
  }});
  Object.defineProperty(SortMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Sort), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(SortMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(SortMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(SortMirror.prototype, 'localName', {get: function () {
    return 'Sort';
  }});
  Object.defineProperty(SortMirror.prototype, 'implements', {get: function () {
    return [new ComparatorMirror(this.TMirror)];
  }});
  Object.defineProperty(SortMirror.prototype, 'fields', {get: function () {
    return this.fields_lgzwa6$_0;
  }});
  SortMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var fieldSet = false;
    var fieldField = null;
    var ascendingSet = false;
    var fieldAscending = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          fieldAscending = decoderStructure.decodeBooleanElement_3zr2iy$(this, 1);
          ascendingSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldField = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror));
          fieldSet = true;
          break;
        case 1:
          fieldAscending = decoderStructure.decodeBooleanElement_3zr2iy$(this, 1);
          ascendingSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!fieldSet) {
      throw new MissingFieldException('field');
    }
    if (!ascendingSet) {
      fieldAscending = true;
    }
    return new Sort(Kotlin.isType(tmp$ = fieldField, MirrorClass$Field) ? tmp$ : throwCCE(), typeof (tmp$_0 = fieldAscending) === 'boolean' ? tmp$_0 : throwCCE());
  };
  SortMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, [this.TMirror, this.VMirror]);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, new MirrorClassFieldMirror(this.TMirror, this.VMirror), obj.field);
    encoderStructure.encodeBooleanElement_w1b0nl$(this, 1, obj.ascending);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function SortMirror$fieldField$lambda(it) {
    return it.field;
  }
  function SortMirror$fieldAscending$lambda(it) {
    return it.ascending;
  }
  SortMirror.$metadata$ = {kind: Kind_CLASS, simpleName: 'SortMirror', interfaces: [MirrorClass]};
  SortMirror.prototype.component1 = function () {
    return this.TMirror;
  };
  SortMirror.prototype.component2 = function () {
    return this.VMirror;
  };
  SortMirror.prototype.copy_grmqaz$ = function (TMirror, VMirror) {
    return new SortMirror(TMirror === void 0 ? this.TMirror : TMirror, VMirror === void 0 ? this.VMirror : VMirror);
  };
  SortMirror.prototype.toString = function () {
    return 'SortMirror(TMirror=' + Kotlin.toString(this.TMirror) + (', VMirror=' + Kotlin.toString(this.VMirror)) + ')';
  };
  SortMirror.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.TMirror) | 0;
    result = result * 31 + Kotlin.hashCode(this.VMirror) | 0;
    return result;
  };
  SortMirror.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.TMirror, other.TMirror) && Kotlin.equals(this.VMirror, other.VMirror)))));
  };
  function TimeStampMirror() {
    TimeStampMirror_instance = this;
    MirrorClass.call(this);
    this.fieldMillisecondsSinceEpoch = new MirrorClass$Field(this, 0, 'millisecondsSinceEpoch', info.LongMirror, false, TimeStampMirror$fieldMillisecondsSinceEpoch$lambda, void 0, emptyList());
    this.fields_71s70y$_0 = [this.fieldMillisecondsSinceEpoch];
  }
  Object.defineProperty(TimeStampMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(TimeStamp), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Inline];
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.lokalize.time';
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'localName', {get: function () {
    return 'TimeStamp';
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(TimeStampMirror_getInstance())];
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'companion', {get: function () {
    return TimeStamp.Companion;
  }});
  Object.defineProperty(TimeStampMirror.prototype, 'fields', {get: function () {
    return this.fields_71s70y$_0;
  }});
  TimeStampMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var millisecondsSinceEpochSet = false;
    var fieldMillisecondsSinceEpoch = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldMillisecondsSinceEpoch = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          millisecondsSinceEpochSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldMillisecondsSinceEpoch = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          millisecondsSinceEpochSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!millisecondsSinceEpochSet) {
      throw new MissingFieldException('millisecondsSinceEpoch');
    }
    return new TimeStamp(Kotlin.isType(tmp$ = fieldMillisecondsSinceEpoch, Kotlin.Long) ? tmp$ : throwCCE());
  };
  TimeStampMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeLongElement_a3zgoj$(this, 0, obj.millisecondsSinceEpoch);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function TimeStampMirror$fieldMillisecondsSinceEpoch$lambda(it) {
    return it.millisecondsSinceEpoch;
  }
  TimeStampMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TimeStampMirror', interfaces: [MirrorClass]};
  var TimeStampMirror_instance = null;
  function TimeStampMirror_getInstance() {
    if (TimeStampMirror_instance === null) {
      new TimeStampMirror();
    }
    return TimeStampMirror_instance;
  }
  function TypedReferenceMirror() {
    TypedReferenceMirror_instance = this;
    MirrorClass.call(this);
    var tmp$;
    this.fieldType = new MirrorClass$Field(this, 0, 'type', Kotlin.isType(tmp$ = MirrorClassMirror.Companion.make_tx243f$(null), MirrorType) ? tmp$ : throwCCE(), false, TypedReferenceMirror$fieldType$lambda, void 0, emptyList());
    this.fieldKey = new MirrorClass$Field(this, 1, 'key', UuidMirror_getInstance(), false, TypedReferenceMirror$fieldKey$lambda, void 0, emptyList());
    this.fields_nwcf8v$_0 = [this.fieldType, this.fieldKey];
  }
  Object.defineProperty(TypedReferenceMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(TypedReference), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(TypedReferenceMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(TypedReferenceMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(TypedReferenceMirror.prototype, 'localName', {get: function () {
    return 'TypedReference';
  }});
  Object.defineProperty(TypedReferenceMirror.prototype, 'implements', {get: function () {
    return [];
  }});
  Object.defineProperty(TypedReferenceMirror.prototype, 'fields', {get: function () {
    return this.fields_nwcf8v$_0;
  }});
  TypedReferenceMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var typeSet = false;
    var fieldType = null;
    var keySet = false;
    var fieldKey = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldType = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, Kotlin.isType(tmp$ = MirrorClassMirror.Companion.make_tx243f$(null), MirrorType) ? tmp$ : throwCCE());
          typeSet = true;
          fieldKey = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, UuidMirror_getInstance());
          keySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldType = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, Kotlin.isType(tmp$_0 = MirrorClassMirror.Companion.make_tx243f$(null), MirrorType) ? tmp$_0 : throwCCE());
          typeSet = true;
          break;
        case 1:
          fieldKey = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, UuidMirror_getInstance());
          keySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!typeSet) {
      throw new MissingFieldException('type');
    }
    if (!keySet) {
      throw new MissingFieldException('key');
    }
    return new TypedReference(Kotlin.isType(tmp$_1 = fieldType, MirrorClass) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = fieldKey, Uuid) ? tmp$_2 : throwCCE());
  };
  TypedReferenceMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, Kotlin.isType(tmp$ = MirrorClassMirror.Companion.make_tx243f$(null), MirrorType) ? tmp$ : throwCCE(), obj.type);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, UuidMirror_getInstance(), obj.key);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function TypedReferenceMirror$fieldType$lambda(it) {
    return it.type;
  }
  function TypedReferenceMirror$fieldKey$lambda(it) {
    return it.key;
  }
  TypedReferenceMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TypedReferenceMirror', interfaces: [MirrorClass]};
  var TypedReferenceMirror_instance = null;
  function TypedReferenceMirror_getInstance() {
    if (TypedReferenceMirror_instance === null) {
      new TypedReferenceMirror();
    }
    return TypedReferenceMirror_instance;
  }
  function UuidMirror() {
    UuidMirror_instance = this;
    MirrorClass.call(this);
    this.fieldMostSignificantBits = new MirrorClass$Field(this, 0, 'mostSignificantBits', info.LongMirror, false, UuidMirror$fieldMostSignificantBits$lambda, void 0, emptyList());
    this.fieldLeastSignificantBits = new MirrorClass$Field(this, 1, 'leastSignificantBits', info.LongMirror, false, UuidMirror$fieldLeastSignificantBits$lambda, void 0, emptyList());
    this.fields_cy4yh7$_0 = [this.fieldMostSignificantBits, this.fieldLeastSignificantBits];
  }
  Object.defineProperty(UuidMirror.prototype, 'kClass', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = getKClass(Uuid), KClass) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(UuidMirror.prototype, 'modifiers', {get: function () {
    return [MirrorClass$Modifier.Data];
  }});
  Object.defineProperty(UuidMirror.prototype, 'packageName', {get: function () {
    return 'com.lightningkite.mirror.archive.model';
  }});
  Object.defineProperty(UuidMirror.prototype, 'localName', {get: function () {
    return 'Uuid';
  }});
  Object.defineProperty(UuidMirror.prototype, 'implements', {get: function () {
    return [new ComparableMirror(UuidMirror_getInstance())];
  }});
  Object.defineProperty(UuidMirror.prototype, 'companion', {get: function () {
    return Uuid$Companion_getInstance();
  }});
  Object.defineProperty(UuidMirror.prototype, 'fields', {get: function () {
    return this.fields_cy4yh7$_0;
  }});
  UuidMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var mostSignificantBitsSet = false;
    var fieldMostSignificantBits = null;
    var leastSignificantBitsSet = false;
    var fieldLeastSignificantBits = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldMostSignificantBits = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          mostSignificantBitsSet = true;
          fieldLeastSignificantBits = decoderStructure.decodeLongElement_3zr2iy$(this, 1);
          leastSignificantBitsSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldMostSignificantBits = decoderStructure.decodeLongElement_3zr2iy$(this, 0);
          mostSignificantBitsSet = true;
          break;
        case 1:
          fieldLeastSignificantBits = decoderStructure.decodeLongElement_3zr2iy$(this, 1);
          leastSignificantBitsSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!mostSignificantBitsSet) {
      throw new MissingFieldException('mostSignificantBits');
    }
    if (!leastSignificantBitsSet) {
      throw new MissingFieldException('leastSignificantBits');
    }
    return new Uuid(Kotlin.isType(tmp$ = fieldMostSignificantBits, Kotlin.Long) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldLeastSignificantBits, Kotlin.Long) ? tmp$_0 : throwCCE());
  };
  UuidMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeLongElement_a3zgoj$(this, 0, obj.mostSignificantBits);
    encoderStructure.encodeLongElement_a3zgoj$(this, 1, obj.leastSignificantBits);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UuidMirror$fieldMostSignificantBits$lambda(it) {
    return it.mostSignificantBits;
  }
  function UuidMirror$fieldLeastSignificantBits$lambda(it) {
    return it.leastSignificantBits;
  }
  UuidMirror.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UuidMirror', interfaces: [MirrorClass]};
  var UuidMirror_instance = null;
  function UuidMirror_getInstance() {
    if (UuidMirror_instance === null) {
      new UuidMirror();
    }
    return UuidMirror_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$mirror = package$lightningkite.mirror || (package$lightningkite.mirror = {});
  var package$archive = package$mirror.archive || (package$mirror.archive = {});
  var package$database = package$archive.database || (package$archive.database = {});
  package$database.get_9hni31$ = get_0;
  $$importsForInline$$['mirror-runtime'] = $module$mirror_runtime;
  Database.Request = Database$Request;
  Database.Handler = Database$Handler;
  Database$Provider.FromConfiguration = Database$Provider$FromConfiguration;
  Database.Provider = Database$Provider;
  package$database.Database = Database;
  package$database.PartialDatabase = PartialDatabase;
  Object.defineProperty(RamDatabase, 'FromConfiguration', {get: RamDatabase$FromConfiguration_getInstance});
  Object.defineProperty(RamDatabase, 'Provider', {get: RamDatabase$Provider_getInstance});
  package$database.RamDatabase = RamDatabase;
  RequestDatabase.Get = RequestDatabase$Get;
  RequestDatabase.Insert = RequestDatabase$Insert;
  RequestDatabase.Update = RequestDatabase$Update;
  RequestDatabase.LimitedUpdate = RequestDatabase$LimitedUpdate;
  RequestDatabase.Delete = RequestDatabase$Delete;
  package$database.RequestDatabase = RequestDatabase;
  package$database.SecureByFieldDatabase = SecureByFieldDatabase;
  package$database.SecureDatabase = SecureDatabase;
  var package$flatarray = package$archive.flatarray || (package$archive.flatarray = {});
  package$flatarray.BinaryFlatArrayDecoder = BinaryFlatArrayDecoder;
  package$flatarray.BinaryFlatArrayEncoder = BinaryFlatArrayEncoder;
  $$importsForInline$$.kommon = $module$kommon;
  package$flatarray.StringFlatArrayDecoder = StringFlatArrayDecoder;
  package$flatarray.StringFlatArrayEncoder = StringFlatArrayEncoder;
  var package$model = package$archive.model || (package$archive.model = {});
  package$model.PrimaryKey = PrimaryKey;
  package$model.findPrimaryKey_t07xqg$ = findPrimaryKey;
  package$model.sort_j26g8y$ = sort;
  Object.defineProperty(Condition, 'Never', {get: Condition$Never_getInstance});
  Object.defineProperty(Condition, 'Always', {get: Condition$Always_getInstance});
  Condition.And = Condition$And;
  Condition.Or = Condition$Or;
  Condition.Not = Condition$Not;
  Condition.Field = Condition$Field;
  Condition.Equal = Condition$Equal;
  Condition.EqualToOne = Condition$EqualToOne;
  Condition.NotEqual = Condition$NotEqual;
  Condition.LessThan = Condition$LessThan;
  Condition.GreaterThan = Condition$GreaterThan;
  Condition.LessThanOrEqual = Condition$LessThanOrEqual;
  Condition.GreaterThanOrEqual = Condition$GreaterThanOrEqual;
  Condition.TextSearch = Condition$TextSearch;
  Condition.StartsWith = Condition$StartsWith;
  Condition.EndsWith = Condition$EndsWith;
  Condition.RegexTextSearch = Condition$RegexTextSearch;
  package$model.Condition = Condition;
  package$model.HasId = HasId;
  package$model.HasUuid = HasUuid;
  package$model.Link = Link;
  package$model.Lockable = Lockable;
  Object.defineProperty(LockState, 'Companion', {get: LockState$Companion_getInstance});
  package$model.LockState = LockState;
  Operation.Set = Operation$Set;
  Operation.AddNumeric = Operation$AddNumeric;
  Operation.AddInt = Operation$AddInt;
  Operation.AddLong = Operation$AddLong;
  Operation.AddFloat = Operation$AddFloat;
  Operation.AddDouble = Operation$AddDouble;
  Operation.Append = Operation$Append;
  Operation.Field = Operation$Field;
  Operation.Multiple = Operation$Multiple;
  Object.defineProperty(Operation, 'Companion', {get: Operation$Companion_getInstance});
  package$model.Operation = Operation;
  package$model.Reference = Reference;
  package$model.Sort = Sort;
  package$model.comparator_dvk3l1$ = comparator;
  package$model.TypedReference = TypedReference;
  Object.defineProperty(Uuid, 'Companion', {get: Uuid$Companion_getInstance});
  package$model.Uuid = Uuid;
  Object.defineProperty(package$model, 'ConditionAlwaysMirror', {get: ConditionAlwaysMirror_getInstance});
  Object.defineProperty(ConditionAndMirror, 'Companion', {get: ConditionAndMirror$Companion_getInstance});
  package$model.ConditionAndMirror = ConditionAndMirror;
  Object.defineProperty(package$model, 'ConditionEndsWithMirror', {get: ConditionEndsWithMirror_getInstance});
  Object.defineProperty(ConditionEqualMirror, 'Companion', {get: ConditionEqualMirror$Companion_getInstance});
  package$model.ConditionEqualMirror = ConditionEqualMirror;
  Object.defineProperty(ConditionEqualToOneMirror, 'Companion', {get: ConditionEqualToOneMirror$Companion_getInstance});
  package$model.ConditionEqualToOneMirror = ConditionEqualToOneMirror;
  Object.defineProperty(ConditionFieldMirror, 'Companion', {get: ConditionFieldMirror$Companion_getInstance});
  package$model.ConditionFieldMirror = ConditionFieldMirror;
  Object.defineProperty(ConditionGreaterThanMirror, 'Companion', {get: ConditionGreaterThanMirror$Companion_getInstance});
  package$model.ConditionGreaterThanMirror = ConditionGreaterThanMirror;
  Object.defineProperty(ConditionGreaterThanOrEqualMirror, 'Companion', {get: ConditionGreaterThanOrEqualMirror$Companion_getInstance});
  package$model.ConditionGreaterThanOrEqualMirror = ConditionGreaterThanOrEqualMirror;
  Object.defineProperty(ConditionLessThanMirror, 'Companion', {get: ConditionLessThanMirror$Companion_getInstance});
  package$model.ConditionLessThanMirror = ConditionLessThanMirror;
  Object.defineProperty(ConditionLessThanOrEqualMirror, 'Companion', {get: ConditionLessThanOrEqualMirror$Companion_getInstance});
  package$model.ConditionLessThanOrEqualMirror = ConditionLessThanOrEqualMirror;
  Object.defineProperty(ConditionMirror, 'Companion', {get: ConditionMirror$Companion_getInstance});
  package$model.ConditionMirror = ConditionMirror;
  Object.defineProperty(package$model, 'ConditionNeverMirror', {get: ConditionNeverMirror_getInstance});
  Object.defineProperty(ConditionNotMirror, 'Companion', {get: ConditionNotMirror$Companion_getInstance});
  package$model.ConditionNotMirror = ConditionNotMirror;
  Object.defineProperty(ConditionNotEqualMirror, 'Companion', {get: ConditionNotEqualMirror$Companion_getInstance});
  package$model.ConditionNotEqualMirror = ConditionNotEqualMirror;
  Object.defineProperty(ConditionOrMirror, 'Companion', {get: ConditionOrMirror$Companion_getInstance});
  package$model.ConditionOrMirror = ConditionOrMirror;
  Object.defineProperty(package$model, 'ConditionRegexTextSearchMirror', {get: ConditionRegexTextSearchMirror_getInstance});
  Object.defineProperty(package$model, 'ConditionStartsWithMirror', {get: ConditionStartsWithMirror_getInstance});
  Object.defineProperty(package$model, 'ConditionTextSearchMirror', {get: ConditionTextSearchMirror_getInstance});
  Object.defineProperty(DatabaseRequestMirror, 'Companion', {get: DatabaseRequestMirror$Companion_getInstance});
  package$database.DatabaseRequestMirror = DatabaseRequestMirror;
  var package$lokalize = package$lightningkite.lokalize || (package$lightningkite.lokalize = {});
  var package$location = package$lokalize.location || (package$lokalize.location = {});
  Object.defineProperty(package$location, 'GeohashMirror', {get: GeohashMirror_getInstance});
  Object.defineProperty(HasIdMirror, 'Companion', {get: HasIdMirror$Companion_getInstance});
  package$model.HasIdMirror = HasIdMirror;
  Object.defineProperty(package$model, 'HasUuidMirror', {get: HasUuidMirror_getInstance});
  Object.defineProperty(LinkMirror, 'Companion', {get: LinkMirror$Companion_getInstance});
  package$model.LinkMirror = LinkMirror;
  Object.defineProperty(LockableMirror, 'Companion', {get: LockableMirror$Companion_getInstance});
  package$model.LockableMirror = LockableMirror;
  Object.defineProperty(package$model, 'LockStateMirror', {get: LockStateMirror_getInstance});
  Object.defineProperty(package$model, 'OperationAddDoubleMirror', {get: OperationAddDoubleMirror_getInstance});
  Object.defineProperty(package$model, 'OperationAddFloatMirror', {get: OperationAddFloatMirror_getInstance});
  Object.defineProperty(package$model, 'OperationAddIntMirror', {get: OperationAddIntMirror_getInstance});
  Object.defineProperty(package$model, 'OperationAddLongMirror', {get: OperationAddLongMirror_getInstance});
  Object.defineProperty(OperationAddNumericMirror, 'Companion', {get: OperationAddNumericMirror$Companion_getInstance});
  package$model.OperationAddNumericMirror = OperationAddNumericMirror;
  Object.defineProperty(package$model, 'OperationAppendMirror', {get: OperationAppendMirror_getInstance});
  Object.defineProperty(OperationFieldMirror, 'Companion', {get: OperationFieldMirror$Companion_getInstance});
  package$model.OperationFieldMirror = OperationFieldMirror;
  Object.defineProperty(OperationMirror, 'Companion', {get: OperationMirror$Companion_getInstance});
  package$model.OperationMirror = OperationMirror;
  Object.defineProperty(OperationMultipleMirror, 'Companion', {get: OperationMultipleMirror$Companion_getInstance});
  package$model.OperationMultipleMirror = OperationMultipleMirror;
  Object.defineProperty(OperationSetMirror, 'Companion', {get: OperationSetMirror$Companion_getInstance});
  package$model.OperationSetMirror = OperationSetMirror;
  package$model.PrimaryKeyMirror = PrimaryKeyMirror;
  Object.defineProperty(ReferenceMirror, 'Companion', {get: ReferenceMirror$Companion_getInstance});
  package$model.ReferenceMirror = ReferenceMirror;
  package$model.registerArchive = registerArchive;
  Object.defineProperty(RequestDatabaseDeleteMirror, 'Companion', {get: RequestDatabaseDeleteMirror$Companion_getInstance});
  package$database.RequestDatabaseDeleteMirror = RequestDatabaseDeleteMirror;
  Object.defineProperty(RequestDatabaseGetMirror, 'Companion', {get: RequestDatabaseGetMirror$Companion_getInstance});
  package$database.RequestDatabaseGetMirror = RequestDatabaseGetMirror;
  Object.defineProperty(RequestDatabaseInsertMirror, 'Companion', {get: RequestDatabaseInsertMirror$Companion_getInstance});
  package$database.RequestDatabaseInsertMirror = RequestDatabaseInsertMirror;
  Object.defineProperty(RequestDatabaseLimitedUpdateMirror, 'Companion', {get: RequestDatabaseLimitedUpdateMirror$Companion_getInstance});
  package$database.RequestDatabaseLimitedUpdateMirror = RequestDatabaseLimitedUpdateMirror;
  Object.defineProperty(RequestDatabaseUpdateMirror, 'Companion', {get: RequestDatabaseUpdateMirror$Companion_getInstance});
  package$database.RequestDatabaseUpdateMirror = RequestDatabaseUpdateMirror;
  Object.defineProperty(SortMirror, 'Companion', {get: SortMirror$Companion_getInstance});
  package$model.SortMirror = SortMirror;
  var package$time = package$lokalize.time || (package$lokalize.time = {});
  Object.defineProperty(package$time, 'TimeStampMirror', {get: TimeStampMirror_getInstance});
  Object.defineProperty(package$model, 'TypedReferenceMirror', {get: TypedReferenceMirror_getInstance});
  Object.defineProperty(package$model, 'UuidMirror', {get: UuidMirror_getInstance});
  PartialDatabase.prototype.get_ip4fwo$ = Database.prototype.get_ip4fwo$;
  PartialDatabase.prototype.limitedUpdate_e9w2wr$ = Database.prototype.limitedUpdate_e9w2wr$;
  Object.defineProperty(RamDatabase$FromConfiguration.prototype, 'optionalArguments', Object.getOwnPropertyDescriptor(Database$Provider$FromConfiguration.prototype, 'optionalArguments'));
  Object.defineProperty(RamDatabase$FromConfiguration.prototype, 'requiredArguments', Object.getOwnPropertyDescriptor(Database$Provider$FromConfiguration.prototype, 'requiredArguments'));
  RamDatabase$Provider.prototype.get_q0pum7$ = Database$Provider.prototype.get_q0pum7$;
  RamDatabase.prototype.get_ip4fwo$ = Database.prototype.get_ip4fwo$;
  RamDatabase.prototype.limitedUpdate_e9w2wr$ = Database.prototype.limitedUpdate_e9w2wr$;
  RequestDatabase.prototype.get_ip4fwo$ = Database.prototype.get_ip4fwo$;
  RequestDatabase.prototype.limitedUpdate_e9w2wr$ = Database.prototype.limitedUpdate_e9w2wr$;
  SecureByFieldDatabase.prototype.get_ip4fwo$ = Database.prototype.get_ip4fwo$;
  SecureByFieldDatabase.prototype.limitedUpdate_e9w2wr$ = Database.prototype.limitedUpdate_e9w2wr$;
  SecureDatabase.prototype.get_ip4fwo$ = Database.prototype.get_ip4fwo$;
  SecureDatabase.prototype.limitedUpdate_e9w2wr$ = Database.prototype.limitedUpdate_e9w2wr$;
  BinaryFlatArrayDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  BinaryFlatArrayDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  BinaryFlatArrayDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  BinaryFlatArrayEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  BinaryFlatArrayEncoder.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  BinaryFlatArrayEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  StringFlatArrayDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  StringFlatArrayDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  StringFlatArrayDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  StringFlatArrayEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  StringFlatArrayEncoder.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  StringFlatArrayEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  return _;
}));

//# sourceMappingURL=mirror-archive-api.js.map
