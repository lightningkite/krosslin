(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'mirror-runtime', 'reacktive', 'koolui', 'kommon', 'kotlinx-coroutines-core', 'kotlinx-serialization-runtime-js', 'lokalize', 'mirror-archive-api'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('mirror-runtime'), require('reacktive'), require('koolui'), require('kommon'), require('kotlinx-coroutines-core'), require('kotlinx-serialization-runtime-js'), require('lokalize'), require('mirror-archive-api'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mirror-form'.");
    }
    if (typeof this['mirror-runtime'] === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'mirror-runtime' was not found. Please, check whether 'mirror-runtime' is loaded prior to 'mirror-form'.");
    }
    if (typeof reacktive === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'reacktive' was not found. Please, check whether 'reacktive' is loaded prior to 'mirror-form'.");
    }
    if (typeof koolui === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'koolui' was not found. Please, check whether 'koolui' is loaded prior to 'mirror-form'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'mirror-form'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'mirror-form'.");
    }
    if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'mirror-form'.");
    }
    if (typeof lokalize === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'lokalize' was not found. Please, check whether 'lokalize' is loaded prior to 'mirror-form'.");
    }
    if (typeof this['mirror-archive-api'] === 'undefined') {
      throw new Error("Error loading module 'mirror-form'. Its dependency 'mirror-archive-api' was not found. Please, check whether 'mirror-archive-api' is loaded prior to 'mirror-form'.");
    }
    root['mirror-form'] = factory(typeof this['mirror-form'] === 'undefined' ? {} : this['mirror-form'], kotlin, this['mirror-runtime'], reacktive, koolui, kommon, this['kotlinx-coroutines-core'], this['kotlinx-serialization-runtime-js'], lokalize, this['mirror-archive-api']);
  }
}(this, function (_, Kotlin, $module$mirror_runtime, $module$reacktive, $module$koolui, $module$kommon, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_runtime_js, $module$lokalize, $module$mirror_archive_api) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var MirrorType = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorType;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ConstantObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.ConstantObservableProperty;
  var ViewGenerator = $module$koolui.com.lightningkite.koolui.views.ViewGenerator;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var StandardObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.StandardObservableProperty;
  var pop = $module$kommon.com.lightningkite.kommon.collection.pop_vvxzk3$;
  var Unit = Kotlin.kotlin.Unit;
  var pushFrom = $module$kommon.com.lightningkite.kommon.collection.pushFrom_8lsfpt$;
  var MaterialIcon = $module$koolui.com.lightningkite.koolui.image.MaterialIcon;
  var color = $module$koolui.com.lightningkite.koolui.image.color_ufzfwa$;
  var withSizing = $module$koolui.com.lightningkite.koolui.image.withSizing_9udguu$;
  var Importance = $module$koolui.com.lightningkite.koolui.concepts.Importance;
  var toString = Kotlin.toString;
  var launchInfoDialog = $module$koolui.com.lightningkite.koolui.builders.launchInfoDialog_h9sd6e$;
  var imageButton = $module$koolui.com.lightningkite.koolui.builders.imageButton_fq84gw$;
  var horizontal = $module$koolui.com.lightningkite.koolui.builders.horizontal_qz9z9j$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Exception = Kotlin.kotlin.Exception;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var VirtualMutableObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.VirtualMutableObservableProperty;
  var ImageScaleType = $module$koolui.com.lightningkite.koolui.image.ImageScaleType;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var push = $module$kommon.com.lightningkite.kommon.collection.push_dwdffb$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var MutableObservableListFromProperty = $module$reacktive.com.lightningkite.reacktive.list.MutableObservableListFromProperty;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var bind = $module$reacktive.com.lightningkite.reacktive.property.lifecycle.bind_g5q2cn$;
  var space = $module$koolui.com.lightningkite.koolui.builders.space_8wn81u$;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var stackTraceString = $module$kommon.com.lightningkite.kommon.exception.stackTraceString_dbl4o4$;
  var TransformObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.TransformObservableProperty;
  var vertical = $module$koolui.com.lightningkite.koolui.builders.vertical_qz9z9j$;
  var equals = Kotlin.equals;
  var transform = $module$reacktive.com.lightningkite.reacktive.property.transform_s3zdp9$;
  var Pair = Kotlin.kotlin.Pair;
  var Any = Object;
  var EnablingMutableCollection = $module$reacktive.com.lightningkite.reacktive.EnablingMutableCollection;
  var MutableObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.MutableObservableProperty;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var info = $module$mirror_runtime.com.lightningkite.mirror.info;
  var satisfies = $module$mirror_runtime.com.lightningkite.mirror.info.satisfies_w3pkl5$;
  var text = $module$koolui.com.lightningkite.koolui.builders.text_3wxnn9$;
  var asObservableList = $module$reacktive.com.lightningkite.reacktive.list.asObservableList_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Animation = $module$koolui.com.lightningkite.koolui.concepts.Animation;
  var transform_0 = $module$reacktive.com.lightningkite.reacktive.property.transform_9a5tou$;
  var UnionKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnionKind;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var PartialBreaker = $module$mirror_runtime.com.lightningkite.mirror.breaker.PartialBreaker;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var plus_0 = Kotlin.kotlin.collections.plus_cm8adq$;
  var MirrorClass = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList_0 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var listen = $module$reacktive.com.lightningkite.reacktive.property.lifecycle.listen_g5q2cn$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var numberToByte = Kotlin.numberToByte;
  var getCallableRef = Kotlin.getCallableRef;
  var NumberInputType = $module$koolui.com.lightningkite.koolui.concepts.NumberInputType;
  var Byte = Number;
  var numberToShort = Kotlin.numberToShort;
  var numberToInt = Kotlin.numberToInt;
  var numberToLong = Kotlin.numberToLong;
  var Long = Kotlin.Long;
  var numberToDouble = Kotlin.numberToDouble;
  var getKClass = Kotlin.getKClass;
  var kotlin = Kotlin.kotlin;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var TextInputType = $module$koolui.com.lightningkite.koolui.concepts.TextInputType;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var unboxChar = Kotlin.unboxChar;
  var firstOrNull = Kotlin.kotlin.text.firstOrNull_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Char = Kotlin.BoxedChar;
  var Uri = $module$kommon.com.lightningkite.kommon.string.Uri;
  var Email = $module$kommon.com.lightningkite.kommon.string.Email;
  var TimeStamp = $module$lokalize.com.lightningkite.lokalize.time.TimeStamp;
  var now = $module$lokalize.com.lightningkite.lokalize.time.now_4yyikv$;
  var Date_0 = $module$lokalize.com.lightningkite.lokalize.time.Date;
  var Time = $module$lokalize.com.lightningkite.lokalize.time.Time;
  var DateTime = $module$lokalize.com.lightningkite.lokalize.time.DateTime;
  var Uuid = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Uuid;
  var launchConfirmationDialog = $module$koolui.com.lightningkite.koolui.builders.launchConfirmationDialog_149w9b$;
  var PairMirror = $module$mirror_runtime.mirror.kotlin.PairMirror;
  var ListMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ListMirror;
  var MutableObservableList = $module$reacktive.com.lightningkite.reacktive.list.MutableObservableList;
  var List = Kotlin.kotlin.collections.List;
  var ReferenceMirror = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.ReferenceMirror;
  var MirrorClass$Field = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass.Field;
  var Database = $module$mirror_archive_api.com.lightningkite.mirror.archive.database.Database;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var get_nullable = $module$mirror_runtime.com.lightningkite.mirror.info.get_nullable_fxyys9$;
  var Reference = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Reference;
  var get_UI = $module$koolui.com.lightningkite.koolui.async.get_UI_wqdyv5$;
  var get_0 = $module$mirror_archive_api.com.lightningkite.mirror.archive.database.get_9hni31$;
  var Throwable = Error;
  var toList_1 = Kotlin.kotlin.collections.toList_us0mfu$;
  var Enum = Kotlin.kotlin.Enum;
  var MirrorClassFieldMirror = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassFieldMirror;
  var isA = $module$mirror_runtime.com.lightningkite.mirror.info.isA_w3pkl5$;
  var MirrorClassMirror = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassMirror;
  var StructureKind = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.StructureKind;
  var Breaker = $module$mirror_runtime.com.lightningkite.mirror.breaker.Breaker;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Comparable = Kotlin.kotlin.Comparable;
  var SortedBag = $module$kommon.com.lightningkite.kommon.collection.SortedBag_dahdeg$;
  var asSequence_0 = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var firstOrNull_0 = Kotlin.kotlin.sequences.firstOrNull_veqyi0$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var AtomicReference = $module$kommon.com.lightningkite.kommon.atomic.AtomicReference;
  var Grouping = Kotlin.kotlin.collections.Grouping;
  var WrapperObservableList = $module$reacktive.com.lightningkite.reacktive.list.WrapperObservableList;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var Annotation = Kotlin.kotlin.Annotation;
  var MirrorAnnotation = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorAnnotation;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var Sort = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Sort;
  var Collection = Kotlin.kotlin.collections.Collection;
  var firstOrNull_1 = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var replace_0 = Kotlin.kotlin.text.replace_r2fvfm$;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  var toChar = Kotlin.toChar;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Condition = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Condition;
  var Condition$Equal = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Condition.Equal;
  var Operation$Set = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Operation.Set;
  var popFrom = $module$kommon.com.lightningkite.kommon.collection.popFrom_dwdffb$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var RemoteExceptionData$Thrown = $module$mirror_runtime.com.lightningkite.mirror.request.RemoteExceptionData.Thrown;
  var ConditionMirror = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.ConditionMirror;
  var ComparableMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ComparableMirror;
  var filtering = $module$reacktive.com.lightningkite.reacktive.list.filtering_ion7f2$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var asSequence_1 = Kotlin.kotlin.collections.asSequence_us0mfu$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var lokalize = $module$lokalize.com.lightningkite.lokalize;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var get_type = $module$mirror_runtime.com.lightningkite.mirror.info.get_type_1yb8b7$;
  var asObservableList_0 = $module$reacktive.com.lightningkite.reacktive.list.asObservableList_b1yvol$;
  var MapMirror = $module$mirror_runtime.com.lightningkite.mirror.info.MapMirror;
  var Map = Kotlin.kotlin.collections.Map;
  var first_0 = Kotlin.kotlin.collections.first_us0mfu$;
  var first_1 = Kotlin.kotlin.sequences.first_veqyi0$;
  var ObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.ObservableProperty;
  var ViewFactory = $module$koolui.com.lightningkite.koolui.views.ViewFactory;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var TextSize = $module$koolui.com.lightningkite.koolui.concepts.TextSize;
  var throwISE = Kotlin.throwISE;
  PairFormViewGenerator$Form.prototype = Object.create(PartForm.prototype);
  PairFormViewGenerator$Form.prototype.constructor = PairFormViewGenerator$Form;
  PartForm$PartProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  PartForm$PartProperty.prototype.constructor = PartForm$PartProperty;
  PolymorphicForm.prototype = Object.create(PartForm.prototype);
  PolymorphicForm.prototype.constructor = PolymorphicForm;
  ReflectiveFormViewGenerator$ReflectiveForm.prototype = Object.create(PartForm.prototype);
  ReflectiveFormViewGenerator$ReflectiveForm.prototype.constructor = ReflectiveFormViewGenerator$ReflectiveForm;
  FormEncoderDefaultModule$lambda$ObjectLiteral.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral;
  FormEncoderDefaultModule$lambda$ObjectLiteral_0.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_0.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_0;
  FormEncoderDefaultModule$lambda$ObjectLiteral_1.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_1.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_1;
  FormEncoderDefaultModule$lambda$ObjectLiteral_2.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_2.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_2;
  FormEncoderDefaultModule$lambda$ObjectLiteral_3.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_3.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_3;
  FormEncoderDefaultModule$lambda$ObjectLiteral_4.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_4.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_4;
  FormEncoderDefaultModule$lambda$ObjectLiteral_5.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_5.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_5;
  FormEncoderDefaultModule$lambda$ObjectLiteral_6.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_6.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_6;
  FormEncoderDefaultModule$lambda$ObjectLiteral_7.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_7.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_7;
  FormEncoderDefaultModule$lambda$ObjectLiteral_8.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_8.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_8;
  FormEncoderDefaultModule$lambda$ObjectLiteral_9.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_9.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_9;
  FormEncoderDefaultModule$lambda$ObjectLiteral_10.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_10.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_10;
  FormEncoderDefaultModule$lambda$ObjectLiteral_11.prototype = Object.create(FormEncoder$BaseTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_11;
  FormEncoderDefaultModule$lambda$ObjectLiteral_12.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_12;
  FormEncoderDefaultModule$lambda$ObjectLiteral_13.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_13;
  FormEncoderDefaultModule$lambda$ObjectLiteral_14.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_14.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_14;
  FormEncoderDefaultModule$lambda$ObjectLiteral_15.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_15.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_15;
  FormEncoderDefaultModule$lambda$ObjectLiteral_16.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_16.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_16;
  FormEncoderDefaultModule$lambda$ObjectLiteral_17.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_17.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_17;
  FormEncoderDefaultModule$lambda$ObjectLiteral_18.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_18.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_18;
  FormEncoderDefaultModule$lambda$ObjectLiteral_19.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_19.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_19;
  FormEncoderDefaultModule$lambda$ObjectLiteral_20.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_20.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_20;
  FormEncoderDefaultModule$lambda$ObjectLiteral_21.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_21.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_21;
  FormEncoderDefaultModule$lambda$ObjectLiteral_22.prototype = Object.create(FormEncoder$BaseInterceptor.prototype);
  FormEncoderDefaultModule$lambda$ObjectLiteral_22.prototype.constructor = FormEncoderDefaultModule$lambda$ObjectLiteral_22;
  FormState$Success.prototype = Object.create(FormState.prototype);
  FormState$Success.prototype.constructor = FormState$Success;
  FormState$Invalid.prototype = Object.create(FormState.prototype);
  FormState$Invalid.prototype.constructor = FormState$Invalid;
  FormState$Empty.prototype = Object.create(FormState.prototype);
  FormState$Empty.prototype.constructor = FormState$Empty;
  ViewEncoderDefaultModule$lambda$string$ObjectLiteral.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$string$ObjectLiteral.prototype.constructor = ViewEncoderDefaultModule$lambda$string$ObjectLiteral;
  ViewEncoderDefaultModule$lambda$ObjectLiteral.prototype = Object.create(ViewEncoder$BaseTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_0.prototype = Object.create(ViewEncoder$BaseTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_0.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_0;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_1.prototype = Object.create(ViewEncoder$BaseTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_1.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_1;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_2.prototype = Object.create(ViewEncoder$BaseTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_2.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_2;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_3.prototype = Object.create(ViewEncoder$BaseTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_3.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_3;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_4.prototype = Object.create(ViewEncoder$BaseNullableTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_4.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_4;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_5.prototype = Object.create(ViewEncoder$BaseNullableTypeInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_5.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_5;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_6.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_6.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_6;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_7.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_7.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_7;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_8.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_8.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_8;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_9.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_9.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_9;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_10.prototype = Object.create(ViewEncoder$BaseNotNullInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_10.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_10;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_11.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_11;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_12.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_12;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_13.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_13;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_14.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_14.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_14;
  ViewEncoderDefaultModule$lambda$ObjectLiteral_15.prototype = Object.create(ViewEncoder$BaseInterceptor.prototype);
  ViewEncoderDefaultModule$lambda$ObjectLiteral_15.prototype.constructor = ViewEncoderDefaultModule$lambda$ObjectLiteral_15;
  ViewSize.prototype = Object.create(Enum.prototype);
  ViewSize.prototype.constructor = ViewSize;
  function CommonRequest() {
  }
  CommonRequest.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CommonRequest', interfaces: []};
  function DisplayRequest(general, type, scale, owningField, clickable, observable) {
    if (scale === void 0)
      scale = ViewSize$Full_getInstance();
    if (owningField === void 0)
      owningField = null;
    if (clickable === void 0)
      clickable = true;
    this.general_8xqlvu$_0 = general;
    this.type_f7ws4c$_0 = type;
    this.scale_q7yo30$_0 = scale;
    this.owningField_bt225c$_0 = owningField;
    this.clickable = clickable;
    this.observable = observable;
  }
  Object.defineProperty(DisplayRequest.prototype, 'general', {get: function () {
    return this.general_8xqlvu$_0;
  }});
  Object.defineProperty(DisplayRequest.prototype, 'type', {get: function () {
    return this.type_f7ws4c$_0;
  }});
  Object.defineProperty(DisplayRequest.prototype, 'scale', {get: function () {
    return this.scale_q7yo30$_0;
  }});
  Object.defineProperty(DisplayRequest.prototype, 'owningField', {get: function () {
    return this.owningField_bt225c$_0;
  }});
  DisplayRequest.prototype.child_fu2w0c$ = function (field, observable, scale) {
    if (scale === void 0)
      scale = this.scale.shrink();
    var tmp$;
    return new DisplayRequest(this.general, Kotlin.isType(tmp$ = field.type, MirrorType) ? tmp$ : throwCCE(), scale, field, this.clickable, observable);
  };
  DisplayRequest.prototype.sub_5m3wn8$ = function (type, observable, scale) {
    if (scale === void 0)
      scale = this.scale.shrink();
    return new DisplayRequest(this.general, type, scale, void 0, this.clickable, observable);
  };
  DisplayRequest.prototype.getVG_2921t4$ = function () {
    return ViewEncoder_getInstance().getViewGenerator_86u98z$(this);
  };
  DisplayRequest.prototype.getVG_cjqmn0$ = function (viewGenerator) {
    return ViewEncoder_getInstance().getViewGenerator_86u98z$(this);
  };
  DisplayRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisplayRequest', interfaces: [CommonRequest]};
  DisplayRequest.prototype.component1 = function () {
    return this.general;
  };
  DisplayRequest.prototype.component2 = function () {
    return this.type;
  };
  DisplayRequest.prototype.component3 = function () {
    return this.scale;
  };
  DisplayRequest.prototype.component4 = function () {
    return this.owningField;
  };
  DisplayRequest.prototype.component5 = function () {
    return this.clickable;
  };
  DisplayRequest.prototype.component6 = function () {
    return this.observable;
  };
  DisplayRequest.prototype.copy_u6lpmo$ = function (general, type, scale, owningField, clickable, observable) {
    return new DisplayRequest(general === void 0 ? this.general : general, type === void 0 ? this.type : type, scale === void 0 ? this.scale : scale, owningField === void 0 ? this.owningField : owningField, clickable === void 0 ? this.clickable : clickable, observable === void 0 ? this.observable : observable);
  };
  DisplayRequest.prototype.toString = function () {
    return 'DisplayRequest(general=' + Kotlin.toString(this.general) + (', type=' + Kotlin.toString(this.type)) + (', scale=' + Kotlin.toString(this.scale)) + (', owningField=' + Kotlin.toString(this.owningField)) + (', clickable=' + Kotlin.toString(this.clickable)) + (', observable=' + Kotlin.toString(this.observable)) + ')';
  };
  DisplayRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.general) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.owningField) | 0;
    result = result * 31 + Kotlin.hashCode(this.clickable) | 0;
    result = result * 31 + Kotlin.hashCode(this.observable) | 0;
    return result;
  };
  DisplayRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.general, other.general) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.owningField, other.owningField) && Kotlin.equals(this.clickable, other.clickable) && Kotlin.equals(this.observable, other.observable)))));
  };
  function display_0($receiver, observable, type, generalRequest, scale) {
    if (scale === void 0)
      scale = ViewSize$Full_getInstance();
    return ViewEncoder_getInstance().getViewGenerator_86u98z$(new DisplayRequest(generalRequest, type, scale, void 0, void 0, observable)).generate_11rb$($receiver);
  }
  function DisplayViewGenerator(data, type, generalRequest, scale) {
    if (scale === void 0)
      scale = ViewSize$Full_getInstance();
    return ViewEncoder_getInstance().getViewGenerator_86u98z$(new DisplayRequest(generalRequest, type, scale, void 0, void 0, new ConstantObservableProperty(data)));
  }
  function PartFormViewGenerator(observable, type, generalRequest, scale) {
    if (scale === void 0)
      scale = ViewSize$Full_getInstance();
    return FormEncoder_getInstance().getViewGenerator_vrvfgp$(new FormRequest(generalRequest, type, scale, void 0, observable));
  }
  function BackedByStringFormViewGenerator(observable, toT, inputType) {
    this.observable = observable;
    this.toT = toT;
    this.inputType = inputType;
    this.form = new ValidatingForm(this.observable, BackedByStringFormViewGenerator$form$lambda, BackedByStringFormViewGenerator$form$lambda_0(this));
  }
  BackedByStringFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    var $receiver = dependency.textField_bqlgfi$(perfectNonNull(this.form.raw, ''), void 0, this.inputType);
    this.form.bind_6d5xoe$(dependency.get_lifecycle_wijs$($receiver));
    return $receiver;
  };
  function BackedByStringFormViewGenerator$form$lambda(it) {
    var tmp$;
    return (tmp$ = it != null ? it.string : null) != null ? tmp$ : '';
  }
  function BackedByStringFormViewGenerator$form$lambda_0(this$BackedByStringFormViewGenerator) {
    return function (it) {
      var transformed = this$BackedByStringFormViewGenerator.toT(it);
      if (transformed.string.length === 0)
        return FormState$Companion_getInstance().success_mh5how$(null);
      else if (transformed.isValid)
        return FormState$Companion_getInstance().success_mh5how$(transformed);
      else
        return FormState$Companion_getInstance().invalid_tpy1pm$('Invalid');
    };
  }
  BackedByStringFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'BackedByStringFormViewGenerator', interfaces: [ViewGenerator]};
  function CardFormViewGenerator(stack, summaryVG, request) {
    this.stack = stack;
    this.summaryVG = summaryVG;
    this.request = request;
  }
  function CardFormViewGenerator$generate$lambda$lambda$lambda(this$CardFormViewGenerator, closure$obs) {
    return function ($receiver, it) {
      pop(this$CardFormViewGenerator.stack);
      this$CardFormViewGenerator.request.observable.value = closure$obs.value;
      return Unit;
    };
  }
  function CardFormViewGenerator$generate$lambda$lambda(this$CardFormViewGenerator, closure$embeddedOn) {
    return function () {
      var obs = new StandardObservableProperty(this$CardFormViewGenerator.request.observable.value);
      var vg = new FormViewGenerator(this$CardFormViewGenerator.request.copy_f9vzts$(void 0, void 0, ViewSize$Full_getInstance()).getVG_2921t4$(), obs, CardFormViewGenerator$generate$lambda$lambda$lambda(this$CardFormViewGenerator, obs));
      pushFrom(this$CardFormViewGenerator.stack, closure$embeddedOn, vg);
      return Unit;
    };
  }
  CardFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    var embeddedOn = last(this.stack);
    return dependency.clickable_5g8z5d$(dependency.card_11rb$(this.summaryVG.generate_11rb$(dependency)), CardFormViewGenerator$generate$lambda$lambda(this, embeddedOn));
  };
  CardFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'CardFormViewGenerator', interfaces: [ViewGenerator]};
  function FormViewGenerator(wraps, obs, onComplete) {
    this.wraps = wraps;
    this.obs = obs;
    this.onComplete = onComplete;
    this.working = new StandardObservableProperty(false);
  }
  function FormViewGenerator$generateActions$lambda$lambda$lambda(this$FormViewGenerator, this$) {
    return function () {
      var result = this$FormViewGenerator.obs.value;
      if (Kotlin.isType(result, FormState$Success)) {
        this$FormViewGenerator.onComplete(this$FormViewGenerator, result.value);
      }
       else if (Kotlin.isType(result, FormState$Invalid)) {
        launchInfoDialog(this$, 'Invalid', toString(result.cause));
      }
      return Unit;
    };
  }
  function FormViewGenerator$generateActions$lambda$lambda(this$FormViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      var sub = this$FormViewGenerator.wraps.generateActions_11rb$(closure$dependency);
      if (sub != null) {
        $receiver.unaryMinus_wijs$(sub);
      }
      $receiver.unaryMinus_wijs$(this$.work_yxyo8z$(imageButton(this$, withSizing(color(MaterialIcon.check, closure$dependency.colorSet.foreground)), 'Save', Importance.Low, FormViewGenerator$generateActions$lambda$lambda$lambda(this$FormViewGenerator, this$)), this$FormViewGenerator.working));
      return Unit;
    };
  }
  FormViewGenerator.prototype.generateActions_11rb$ = function (dependency) {
    return horizontal(dependency, FormViewGenerator$generateActions$lambda$lambda(this, dependency, dependency));
  };
  Object.defineProperty(FormViewGenerator.prototype, 'title', {get: function () {
    return this.wraps.title;
  }});
  FormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return this.wraps.generate_11rb$(dependency);
  };
  FormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormViewGenerator', interfaces: [ViewGenerator]};
  function FormViewGenerator_0(type, startingWith, generalRequest, onComplete) {
    if (startingWith === void 0) {
      var tmp$;
      startingWith = Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
    }
    var obs = new StandardObservableProperty(startingWith);
    return new FormViewGenerator(PartFormViewGenerator(obs, type, generalRequest), obs, onComplete);
  }
  function ListFormViewGenerator(stack, value, makeView, editViewGenerator) {
    this.stack = stack;
    this.value = value;
    this.makeView = makeView;
    this.editViewGenerator = editViewGenerator;
    println('Created at:');
    println(stackTraceString(Exception_init()));
    this.previousState = toList(this.value);
    this.clipboard = new StandardObservableProperty(null);
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda(closure$itemObs) {
    return function () {
      return closure$itemObs.value;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs) {
    return function (it) {
      this$ListFormViewGenerator.value.set_wxm5ur$(closure$indexObs.value, it);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda(this$ListFormViewGenerator, closure$index) {
    return function (it) {
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.set_wxm5ur$(closure$index, it);
      pop(this$ListFormViewGenerator.stack);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda(closure$indexObs, this$ListFormViewGenerator, closure$itemObs) {
    return function () {
      var index = closure$indexObs.value;
      push(this$ListFormViewGenerator.stack, this$ListFormViewGenerator.editViewGenerator(closure$itemObs.value, ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda(this$ListFormViewGenerator, index)));
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.clipboard.value = this$ListFormViewGenerator.value.removeAt_za3lpa$(closure$indexObs.value);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_1(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      this$ListFormViewGenerator.clipboard.value = this$ListFormViewGenerator.value.get_za3lpa$(closure$indexObs.value);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_2(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      var tmp$;
      tmp$ = this$ListFormViewGenerator.clipboard.value;
      if (tmp$ == null) {
        return;
      }
      var v = tmp$;
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.add_wxm5ur$(closure$indexObs.value, v);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_3(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      var tmp$;
      tmp$ = this$ListFormViewGenerator.clipboard.value;
      if (tmp$ == null) {
        return;
      }
      var v = tmp$;
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.add_wxm5ur$(closure$indexObs.value + 1 | 0, v);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs) {
    return function (it) {
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.add_wxm5ur$(closure$indexObs.value, it);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_4(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      push(this$ListFormViewGenerator.stack, this$ListFormViewGenerator.editViewGenerator(null, ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs)));
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ListFormViewGenerator, closure$indexObs) {
    return function (it) {
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.add_wxm5ur$(closure$indexObs.value + 1 | 0, it);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_5(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      push(this$ListFormViewGenerator.stack, this$ListFormViewGenerator.editViewGenerator(null, ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ListFormViewGenerator, closure$indexObs)));
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_6(this$ListFormViewGenerator, closure$indexObs) {
    return function () {
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.removeAt_za3lpa$(closure$indexObs.value);
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda$lambda_1(closure$indexObs, this$ListFormViewGenerator, closure$itemObs, this$) {
    return function () {
      this$.launchSelector_8prigm$(void 0, listOf([to('Edit', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda(closure$indexObs, this$ListFormViewGenerator, closure$itemObs)), to('Cut', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs)), to('Copy', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_1(this$ListFormViewGenerator, closure$indexObs)), to('Paste Above', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_2(this$ListFormViewGenerator, closure$indexObs)), to('Paste Below', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_3(this$ListFormViewGenerator, closure$indexObs)), to('Insert Above', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_4(this$ListFormViewGenerator, closure$indexObs)), to('Insert Below', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_5(this$ListFormViewGenerator, closure$indexObs)), to('Delete', ListFormViewGenerator$generate$lambda$lambda$lambda$lambda$lambda_6(this$ListFormViewGenerator, closure$indexObs))]));
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda(closure$itemObs, this$ListFormViewGenerator, closure$indexObs, closure$dependency, this$) {
    return function ($receiver) {
      var virtualEdit = new VirtualMutableObservableProperty(ListFormViewGenerator$generate$lambda$lambda$lambda$lambda(closure$itemObs), ListFormViewGenerator$generate$lambda$lambda$lambda$lambda_0(this$ListFormViewGenerator, closure$indexObs), closure$itemObs);
      $receiver.unaryPlus_wijs$(this$ListFormViewGenerator.makeView(closure$dependency, virtualEdit));
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.moreVert, closure$dependency.colorSet.foreground), void 0, ImageScaleType.Crop), 'More', Importance.Low, ListFormViewGenerator$generate$lambda$lambda$lambda$lambda_1(closure$indexObs, this$ListFormViewGenerator, closure$itemObs, this$)));
      return Unit;
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda(this$ListFormViewGenerator, closure$dependency, this$) {
    return function (itemObs, indexObs) {
      return horizontal(this$, ListFormViewGenerator$generate$lambda$lambda$lambda(itemObs, this$ListFormViewGenerator, indexObs, closure$dependency, this$));
    };
  }
  function ListFormViewGenerator$generate$lambda$lambda$lambda_0(this$ListFormViewGenerator) {
    return function (it) {
      println('--x--');
      debugPrint(this$ListFormViewGenerator.value.property);
      return Unit;
    };
  }
  ListFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    var $receiver = dependency.list_4rlyri$(this.value, void 0, void 0, void 0, ListFormViewGenerator$generate$lambda$lambda(this, dependency, dependency));
    if (Kotlin.isType(this.value, MutableObservableListFromProperty)) {
      bind(dependency.get_lifecycle_wijs$($receiver), this.value.property, ListFormViewGenerator$generate$lambda$lambda$lambda_0(this));
    }
     else {
      println('value is ' + this.value);
    }
    return $receiver;
  };
  function ListFormViewGenerator$generateActions$lambda$lambda$lambda(this$ListFormViewGenerator) {
    return function () {
      var setTo = this$ListFormViewGenerator.previousState;
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.replace_brywnq$(setTo);
      return Unit;
    };
  }
  function ListFormViewGenerator$generateActions$lambda$lambda$lambda$lambda(this$ListFormViewGenerator) {
    return function (it) {
      pop(this$ListFormViewGenerator.stack);
      this$ListFormViewGenerator.previousState = toList(this$ListFormViewGenerator.value);
      this$ListFormViewGenerator.value.add_11rb$(it);
      println('Adding ' + it);
      return Unit;
    };
  }
  function ListFormViewGenerator$generateActions$lambda$lambda$lambda_0(this$ListFormViewGenerator) {
    return function () {
      push(this$ListFormViewGenerator.stack, this$ListFormViewGenerator.editViewGenerator(null, ListFormViewGenerator$generateActions$lambda$lambda$lambda$lambda(this$ListFormViewGenerator)));
      return Unit;
    };
  }
  function ListFormViewGenerator$generateActions$lambda$lambda(this$, closure$dependency, this$ListFormViewGenerator) {
    return function ($receiver) {
      $receiver.unaryPlus_wijs$(space(this$, 1.0));
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.undo, closure$dependency.colorSet.foreground)), 'Undo', Importance.Low, ListFormViewGenerator$generateActions$lambda$lambda$lambda(this$ListFormViewGenerator)));
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.add, closure$dependency.colorSet.foreground)), 'Add', Importance.Low, ListFormViewGenerator$generateActions$lambda$lambda$lambda_0(this$ListFormViewGenerator)));
      return Unit;
    };
  }
  ListFormViewGenerator.prototype.generateActions_11rb$ = function (dependency) {
    return horizontal(dependency, ListFormViewGenerator$generateActions$lambda$lambda(dependency, dependency, this));
  };
  ListFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListFormViewGenerator', interfaces: [ViewGenerator]};
  function debugPrint($receiver) {
    println('Value: ' + toString($receiver.value));
    if (Kotlin.isType($receiver, TransformObservableProperty)) {
      debugPrint($receiver.observable);
    }
  }
  function LiveListFormViewGenerator(stack, value, viewGenerator, editViewGenerator) {
    this.stack = stack;
    this.value = value;
    this.viewGenerator = viewGenerator;
    this.editViewGenerator = editViewGenerator;
    this.previousState = toList(this.value);
    var tmp$;
    this.clipboard = new StandardObservableProperty(Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE());
  }
  function NullableForm(main) {
    this.main = main;
    this.isNotNull = new StandardObservableProperty(false);
    var tmp$;
    this.value = new StandardObservableProperty(Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE());
  }
  function NullableForm$bind$lambda(closure$justALocalModification, this$NullableForm) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (closure$justALocalModification.v) {
        closure$justALocalModification.v = false;
        return;
      }
      this$NullableForm.isNotNull.value = !Kotlin.isType(it, FormState$Success) || it.value == null;
      tmp$_1 = this$NullableForm.value;
      if (Kotlin.isType(it, FormState$Success) && it.value == null) {
        var tmp$_2;
        tmp$_0 = Kotlin.isType(tmp$_2 = FormState.Empty, FormState) ? tmp$_2 : throwCCE();
      }
       else {
        tmp$_0 = Kotlin.isType(tmp$ = it, FormState) ? tmp$ : throwCCE();
      }
      tmp$_1.value = tmp$_0;
      return Unit;
    };
  }
  function NullableForm$bind$lambda$lambda(closure$previous, closure$justALocalModification, this$) {
    return function (it) {
      var tmp$, tmp$_0;
      if (it === closure$previous.v)
        return;
      closure$previous.v = it;
      closure$justALocalModification.v = true;
      tmp$_0 = this$.main;
      if (it) {
        tmp$ = this$.value.value;
      }
       else {
        tmp$ = FormState$Companion_getInstance().success_mh5how$(null);
      }
      tmp$_0.value = tmp$;
      return Unit;
    };
  }
  function NullableForm$bind$lambda$lambda_0(closure$previous, closure$justALocalModification, this$) {
    return function (it) {
      if (equals(it, closure$previous.v))
        return;
      closure$previous.v = it;
      closure$justALocalModification.v = true;
      if (this$.isNotNull.value) {
        this$.main.value = it;
      }
      return Unit;
    };
  }
  NullableForm.prototype.bind_6d5xoe$ = function (lifecycle) {
    var justALocalModification = {v: false};
    bind(lifecycle, this.main, NullableForm$bind$lambda(justALocalModification, this));
    var previous = {v: this.isNotNull.value};
    bind(lifecycle, this.isNotNull, NullableForm$bind$lambda$lambda(previous, justALocalModification, this));
    var previous_0 = {v: this.value.value};
    bind(lifecycle, this.value, NullableForm$bind$lambda$lambda_0(previous_0, justALocalModification, this));
  };
  NullableForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'NullableForm', interfaces: []};
  function NumberFormViewGenerator(observable, toT, allowNull, numberInputType, decimalPlaces) {
    if (allowNull === void 0)
      allowNull = false;
    if (decimalPlaces === void 0)
      decimalPlaces = 2;
    this.observable = observable;
    this.toT = toT;
    this.allowNull = allowNull;
    this.numberInputType = numberInputType;
    this.decimalPlaces = decimalPlaces;
  }
  function NumberFormViewGenerator$generate$lambda(it) {
    return it.valueOrNull;
  }
  function NumberFormViewGenerator$generate$lambda_0(this$NumberFormViewGenerator) {
    return function (it) {
      if (it == null && !this$NumberFormViewGenerator.allowNull) {
        var tmp$;
        return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
      }
       else {
        return FormState$Companion_getInstance().success_mh5how$(it != null ? this$NumberFormViewGenerator.toT(it) : null);
      }
    };
  }
  NumberFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    if (this.allowNull) {
      if (this.observable.value.isEmpty) {
        this.observable.value = FormState$Companion_getInstance().success_mh5how$(null);
      }
    }
    return dependency.numberField_x7mhdx$(transform(this.observable, NumberFormViewGenerator$generate$lambda, NumberFormViewGenerator$generate$lambda_0(this)), this.allowNull ? 'N/A' : '', this.numberInputType, this.decimalPlaces);
  };
  NumberFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'NumberFormViewGenerator', interfaces: [ViewGenerator]};
  function PairFormViewGenerator(form, subFirst, subSecond) {
    this.form = form;
    this.subFirst = subFirst;
    this.subSecond = subSecond;
  }
  function PairFormViewGenerator$Form(main) {
    PartForm.call(this, main);
    this.first = this.part_1f16u0$('First', void 0, PairFormViewGenerator$Form$first$lambda);
    this.second = this.part_1f16u0$('Second', void 0, PairFormViewGenerator$Form$second$lambda);
  }
  PairFormViewGenerator$Form.prototype.make = function () {
    return new Pair(this.first.successfulValue, this.second.successfulValue);
  };
  function PairFormViewGenerator$Form$first$lambda(it) {
    return it.first;
  }
  function PairFormViewGenerator$Form$second$lambda(it) {
    return it.second;
  }
  PairFormViewGenerator$Form.$metadata$ = {kind: Kind_CLASS, simpleName: 'Form', interfaces: [PartForm]};
  function PairFormViewGenerator$generate$lambda$lambda$lambda(this$, this$PairFormViewGenerator, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(space(this$, 16.0));
      $receiver.unaryPlus_wijs$(this$PairFormViewGenerator.subSecond.generate_11rb$(closure$dependency));
      return Unit;
    };
  }
  function PairFormViewGenerator$generate$lambda$lambda(this$PairFormViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$PairFormViewGenerator.subFirst.generate_11rb$(closure$dependency));
      $receiver.unaryMinus_wijs$(horizontal(this$, PairFormViewGenerator$generate$lambda$lambda$lambda(this$, this$PairFormViewGenerator, closure$dependency)));
      return Unit;
    };
  }
  PairFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.frame_11rb$(vertical(dependency, PairFormViewGenerator$generate$lambda$lambda(this, dependency, dependency)));
  };
  PairFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'PairFormViewGenerator', interfaces: [ViewGenerator]};
  function PartForm(main) {
    this.main = main;
    this.parts = ArrayList_init();
  }
  function PartForm$PartProperty($outer, name, required, get) {
    this.$outer = $outer;
    if (name === void 0)
      name = '';
    if (required === void 0)
      required = true;
    EnablingMutableCollection.call(this);
    this.name = name;
    this.required = required;
    this.get = get;
    this.listening = false;
    this.fromMain = false;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.$outer.main.value.breakDown_2o04qz$(this.get)) != null)
      tmp$_0 = tmp$;
    else {
      var tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$_1 = FormState.Empty, FormState) ? tmp$_1 : throwCCE();
    }
    this.value_wcjped$_0 = tmp$_0;
    this.callback = PartForm$PartProperty$callback$lambda(this);
  }
  Object.defineProperty(PartForm$PartProperty.prototype, 'value', {get: function () {
    return this.value_wcjped$_0;
  }, set: function (value) {
    this.value_wcjped$_0 = value;
    if (this.fromMain) {
      this.fromMain = false;
    }
     else {
      var tmp$;
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(value);
      }
      this.$outer.main.value = this.$outer.combine_3ooyqd$_0();
    }
  }});
  PartForm$PartProperty.prototype.enable = function () {
    this.listening = true;
    this.$outer.main.add_11rb$(this.callback);
  };
  PartForm$PartProperty.prototype.disable = function () {
    this.$outer.main.remove_11rb$(this.callback);
    this.listening = false;
  };
  Object.defineProperty(PartForm$PartProperty.prototype, 'successfulValue', {get: function () {
    var tmp$;
    return (tmp$ = this.value.valueOrNull) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  function PartForm$PartProperty$callback$lambda(this$PartProperty) {
    return function (a) {
      var broken = a.breakDown_2o04qz$(this$PartProperty.get);
      if (broken != null && !equals(broken, this$PartProperty.value)) {
        this$PartProperty.fromMain = true;
        this$PartProperty.value = broken;
      }
      return Unit;
    };
  }
  PartForm$PartProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'PartProperty', interfaces: [MutableObservableProperty, EnablingMutableCollection]};
  PartForm.prototype.part_1f16u0$ = function (name, required, get) {
    if (required === void 0)
      required = true;
    var part = new PartForm$PartProperty(this, name, required, get);
    this.parts.add_11rb$(part);
    return part;
  };
  PartForm.prototype.combine_3ooyqd$_0 = function () {
    var tmp$;
    tmp$ = this.parts.iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      var fs = part.value;
      if (fs.isEmpty && part.required) {
        var tmp$_0;
        return Kotlin.isType(tmp$_0 = FormState.Empty, FormState) ? tmp$_0 : throwCCE();
      }
      if (Kotlin.isType(fs, FormState$Invalid))
        return FormState$Companion_getInstance().invalid_tpy1pm$(part.name + ': ' + toString(fs.cause));
    }
    return FormState$Companion_getInstance().success_mh5how$(this.make());
  };
  PartForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'PartForm', interfaces: []};
  function PolymorphicForm(main, satisfies) {
    PartForm.call(this, main);
    this.satisfies = satisfies;
    this.type = this.part_1f16u0$('type', void 0, PolymorphicForm$type$lambda(this));
    this.actualValue = this.part_1f16u0$('value', void 0, PolymorphicForm$actualValue$lambda);
  }
  PolymorphicForm.prototype.make = function () {
    return this.actualValue.successfulValue;
  };
  function PolymorphicForm$type$lambda(this$PolymorphicForm) {
    return function (it) {
      if (it == null)
        return null;
      else {
        var notNull = it;
        return satisfies(info.MirrorRegistry.retrieve_za3rmp$(notNull), this$PolymorphicForm.satisfies);
      }
    };
  }
  function PolymorphicForm$actualValue$lambda(it) {
    return it;
  }
  PolymorphicForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicForm', interfaces: [PartForm]};
  function PolymorphicFormViewGenerator(request) {
    this.request_0 = request;
    var $receiver = info.MirrorRegistry.allSatisfying_xekh30$(this.request_0.type);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.kind, UnionKind.POLYMORPHIC))
        destination.add_11rb$(element);
    }
    this.nnOptions = destination;
    this.options = this.request_0.type.isNullable ? plus(listOf_0(null), toList(this.nnOptions)) : toList(this.nnOptions);
    this.form = new PolymorphicForm(this.request_0.observable, this.request_0.type);
    this.previousType = null;
    this.previousVg = ViewGenerator.Companion.empty_2921t4$();
    this.subVg = transform_0(perfectNullable(this.form.type), PolymorphicFormViewGenerator$subVg$lambda(this));
  }
  function PolymorphicFormViewGenerator$generate$lambda$lambda$lambda(this$PolymorphicFormViewGenerator) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = it != null ? it.localName : null) != null ? humanify(tmp$) : null) != null ? tmp$_0 : this$PolymorphicFormViewGenerator.request_0.general.nullString;
    };
  }
  function PolymorphicFormViewGenerator$generate$lambda$lambda$lambda_0(closure$dependency) {
    return function (it) {
      return to(it.generate_11rb$(closure$dependency), Animation.Flip);
    };
  }
  function PolymorphicFormViewGenerator$generate$lambda$lambda(this$PolymorphicFormViewGenerator, this$, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$.picker_dvtdv8$(asObservableList(this$PolymorphicFormViewGenerator.options), perfect(this$PolymorphicFormViewGenerator.form.type, first(this$PolymorphicFormViewGenerator.options)), PolymorphicFormViewGenerator$generate$lambda$lambda$lambda(this$PolymorphicFormViewGenerator)));
      var view = this$.swap_yi09s7$(transform_0(this$PolymorphicFormViewGenerator.subVg, PolymorphicFormViewGenerator$generate$lambda$lambda$lambda_0(closure$dependency)));
      if (this$PolymorphicFormViewGenerator.request_0.scale.compareTo_11rb$(ViewSize$Full_getInstance()) >= 0)
        $receiver.unaryPlus_wijs$(view);
      else
        $receiver.unaryMinus_wijs$(view);
      return Unit;
    };
  }
  PolymorphicFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    var block$result;
    if (this.options.isEmpty()) {
      block$result = text(dependency, 'No available options');
    }
     else {
      block$result = vertical(dependency, PolymorphicFormViewGenerator$generate$lambda$lambda(this, dependency, dependency));
    }
    return block$result;
  };
  function PolymorphicFormViewGenerator$generateActions$lambda$lambda(closure$dependency) {
    return function (it) {
      var tmp$;
      return to((tmp$ = it.generateActions_11rb$(closure$dependency)) != null ? tmp$ : space(closure$dependency, 0.0), Animation.Flip);
    };
  }
  PolymorphicFormViewGenerator.prototype.generateActions_11rb$ = function (dependency) {
    return this.request_0.scale === ViewSize$Full_getInstance() ? dependency.swap_yi09s7$(transform_0(this.subVg, PolymorphicFormViewGenerator$generateActions$lambda$lambda(dependency))) : null;
  };
  function PolymorphicFormViewGenerator$subVg$lambda$lambda(closure$type) {
    return function (it) {
      if (Kotlin.isType(it, FormState$Success)) {
        var nn = ensureNotNull(it.value);
        if (closure$type.kClass.isInstance_s8jyv4$(nn)) {
          return it;
        }
         else {
          var tmp$;
          return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
        }
      }
       else
        return it;
    };
  }
  function PolymorphicFormViewGenerator$subVg$lambda$lambda_0(it) {
    return it;
  }
  function PolymorphicFormViewGenerator$subVg$lambda(this$PolymorphicFormViewGenerator) {
    return function (f) {
      var tmp$, tmp$_0;
      var type = this$PolymorphicFormViewGenerator.form.type.value.valueOrNull;
      if (equals(this$PolymorphicFormViewGenerator.previousType, type)) {
        return this$PolymorphicFormViewGenerator.previousVg;
      }
      this$PolymorphicFormViewGenerator.previousType = type;
      if (type == null)
        tmp$_0 = ViewGenerator.Companion.empty_2921t4$();
      else {
        tmp$_0 = this$PolymorphicFormViewGenerator.request_0.sub_bt3245$(Kotlin.isType(tmp$ = type, MirrorType) ? tmp$ : throwCCE(), transform(this$PolymorphicFormViewGenerator.form.actualValue, PolymorphicFormViewGenerator$subVg$lambda$lambda(type), PolymorphicFormViewGenerator$subVg$lambda$lambda_0), this$PolymorphicFormViewGenerator.request_0.scale).getVG_2921t4$();
      }
      this$PolymorphicFormViewGenerator.previousVg = tmp$_0;
      return this$PolymorphicFormViewGenerator.previousVg;
    };
  }
  PolymorphicFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicFormViewGenerator', interfaces: [ViewGenerator]};
  function ReflectiveFormViewGenerator(request) {
    this.request = request;
    var tmp$;
    this.form = new ReflectiveFormViewGenerator$ReflectiveForm(this.request, Kotlin.isType(tmp$ = this.request.type, MirrorClass) ? tmp$ : throwCCE(), this.request.observable);
    var $receiver = this.form.displayedParts.entries;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new ReflectiveFormViewGenerator$Part(this, item.key, item.value, this.request.child_3rp6gz$(item.key, item.value).getVG_2921t4$()));
    }
    this.formParts = destination;
  }
  function ReflectiveFormViewGenerator$ReflectiveForm(request, type, main) {
    var tmp$;
    if (type === void 0)
      type = Kotlin.isType(tmp$ = request.type, MirrorClass) ? tmp$ : throwCCE();
    PartForm.call(this, main);
    this.request = request;
    this.type = type;
    var $receiver = this.type.fields;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      var pair = to(element, this.part_1f16u0$(humanify(element.name), !element.optional, ReflectiveFormViewGenerator$ReflectiveForm$allParts$lambda$lambda(element)));
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.allParts = destination;
    var $receiver_0 = this.allParts;
    var tmp$_1;
    var result = LinkedHashMap_init_0();
    tmp$_1 = $receiver_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      if (includedInForm(entry.key, this.request)) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    this.displayedParts = result;
    this.implied = toList_0(map(filter(asSequence(this.request.general.impliedFields), ReflectiveFormViewGenerator$ReflectiveForm$implied$lambda(this)), ReflectiveFormViewGenerator$ReflectiveForm$implied$lambda_0));
  }
  function ReflectiveFormViewGenerator$ReflectiveForm$make$lambda(it) {
    return !it.value.value.isEmpty;
  }
  ReflectiveFormViewGenerator$ReflectiveForm.prototype.make = function () {
    var tmp$ = PartialBreaker.Companion;
    var tmp$_0 = this.request.type;
    var $receiver = filter(asSequence(this.allParts), ReflectiveFormViewGenerator$ReflectiveForm$make$lambda);
    var destination = LinkedHashMap_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var pair = to(element.key.index, element.value.successfulValue);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    return tmp$.fold_dskcpb$(tmp$_0, plus_0(destination, this.implied));
  };
  function ReflectiveFormViewGenerator$ReflectiveForm$allParts$lambda$lambda(closure$it) {
    return function (owner) {
      return closure$it.get(owner);
    };
  }
  function ReflectiveFormViewGenerator$ReflectiveForm$implied$lambda(this$ReflectiveForm) {
    return function (it) {
      return contains(this$ReflectiveForm.type.fields, it.key);
    };
  }
  function ReflectiveFormViewGenerator$ReflectiveForm$implied$lambda_0(it) {
    return to(it.key.index, it.value);
  }
  ReflectiveFormViewGenerator$ReflectiveForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReflectiveForm', interfaces: [PartForm]};
  function ReflectiveFormViewGenerator$Part($outer, field, part, vg) {
    this.$outer = $outer;
    this.field = field;
    this.part = part;
    this.vg = vg;
  }
  ReflectiveFormViewGenerator$Part.$metadata$ = {kind: Kind_CLASS, simpleName: 'Part', interfaces: []};
  function ReflectiveFormViewGenerator$generate$lambda$lambda(this$ReflectiveFormViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ReflectiveFormViewGenerator.formParts.iterator();
      while (tmp$.hasNext()) {
        var p = tmp$.next();
        $receiver.unaryMinus_wijs$(this$.entryContext_6ji58x$(humanify(p.field.name), void 0, void 0, feedback(p.part, p.part.required), p.vg.generate_11rb$(closure$dependency)));
      }
      return Unit;
    };
  }
  ReflectiveFormViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.scrollVertical_9vpp9p$(vertical(dependency, ReflectiveFormViewGenerator$generate$lambda$lambda(this, dependency, dependency)));
  };
  ReflectiveFormViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReflectiveFormViewGenerator', interfaces: [ViewGenerator]};
  function feedback$lambda(closure$required) {
    return function (it) {
      return it.isEmpty && closure$required ? to(Importance.Low, 'This field is required') : Kotlin.isType(it, FormState$Invalid) ? to(Importance.Danger, toString(it.cause)) : null;
    };
  }
  function feedback($receiver, required) {
    return transform_0($receiver, feedback$lambda(required));
  }
  function ValidatingForm(main, toRaw, toTypeWithValidation) {
    this.main = main;
    this.toRaw = toRaw;
    this.toTypeWithValidation = toTypeWithValidation;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.main.value.breakDown_2o04qz$(this.toRaw)) != null)
      tmp$_0 = tmp$;
    else {
      var tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$_1 = FormState.Empty, FormState) ? tmp$_1 : throwCCE();
    }
    this.raw = new StandardObservableProperty(tmp$_0);
  }
  function ValidatingForm$bind$lambda(closure$isLocalChange, this$ValidatingForm) {
    return function (it) {
      var tmp$, tmp$_0;
      closure$isLocalChange.v = true;
      tmp$_0 = this$ValidatingForm.main;
      if (Kotlin.isType(it, FormState$Success)) {
        var $receiver = it.value;
        tmp$ = this$ValidatingForm.toTypeWithValidation($receiver);
      }
       else {
        tmp$ = it.asType_287e2$();
      }
      tmp$_0.value = tmp$;
      return Unit;
    };
  }
  function ValidatingForm$bind$lambda_0(closure$isLocalChange, this$ValidatingForm) {
    return function (it) {
      var tmp$, tmp$_0;
      if (closure$isLocalChange.v) {
        closure$isLocalChange.v = false;
        return;
      }
      tmp$_0 = this$ValidatingForm.raw;
      if (Kotlin.isType(it, FormState$Success)) {
        var tmp$_1 = FormState$Companion_getInstance();
        var $receiver = it.value;
        tmp$ = tmp$_1.success_mh5how$(this$ValidatingForm.toRaw($receiver));
      }
       else {
        tmp$ = it.asType_287e2$();
      }
      tmp$_0.value = tmp$;
      return Unit;
    };
  }
  ValidatingForm.prototype.bind_6d5xoe$ = function (lifecycle) {
    var isLocalChange = {v: false};
    listen(lifecycle, this.raw, ValidatingForm$bind$lambda(isLocalChange, this));
    listen(lifecycle, this.main, ValidatingForm$bind$lambda_0(isLocalChange, this));
  };
  ValidatingForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'ValidatingForm', interfaces: []};
  number$ObjectLiteral.prototype = Object.create(FormEncoder$BaseNullableTypeInterceptor.prototype);
  number$ObjectLiteral.prototype.constructor = number$ObjectLiteral;
  function number$ObjectLiteral(closure$toT, closure$inputType, closure$decimalPlaces, requiresType, matchPriority) {
    this.closure$toT = closure$toT;
    this.closure$inputType = closure$inputType;
    this.closure$decimalPlaces = closure$decimalPlaces;
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType, matchPriority);
  }
  number$ObjectLiteral.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$, tmp$_0;
    return new NumberFormViewGenerator(request.observable, this.closure$toT, request.type.isNullable, (tmp$_0 = (tmp$ = request.owningField) != null ? get_numberInputType(tmp$) : null) != null ? tmp$_0 : this.closure$inputType, this.closure$decimalPlaces);
  };
  number$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral.prototype.generateTyped_stx4vp$ = function (request) {
    request.observable.value = FormState$Companion_getInstance().success_mh5how$(Unit);
    return ViewGenerator.Companion.empty_2921t4$();
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_0(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.toggle_n1o2qm$(perfectNonNull(this.closure$request.observable, false));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_0.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_1(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    var closure$request = this.closure$request;
    var tmp$, tmp$_0;
    return dependency.textField_bqlgfi$(perfectNonNull(closure$request.observable, ''), void 0, (tmp$_0 = (tmp$ = closure$request.owningField) != null ? get_textInputType(tmp$) : null) != null ? tmp$_0 : TextInputType.Sentence);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_1.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_2(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1(closure$request) {
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda(it) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = unboxChar(it.valueOrNull)) != null ? String.fromCharCode(unboxChar(tmp$)) : null) != null ? tmp$_0 : '';
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_0(it) {
    return FormState$Companion_getInstance().success_mh5how$(toBoxedChar(firstOrNull(it)));
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.textField_bqlgfi$(transform(this.closure$request.observable, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_0), void 0, TextInputType.Name);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_2.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_3(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_3.prototype.generateTyped_stx4vp$ = function (request) {
    return new BackedByStringFormViewGenerator(request.observable, getCallableRef('Uri', function (string) {
      return new Uri(string);
    }), TextInputType.URL);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_4(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_4.prototype.generateTyped_stx4vp$ = function (request) {
    return new BackedByStringFormViewGenerator(request.observable, getCallableRef('Email', function (string) {
      return new Email(string);
    }), TextInputType.Email);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_5(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.datePicker_n4cs3r$(perfectNonNull(this.closure$request.observable, now(TimeStamp.Companion).date_vcl74a$()));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_5.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_6(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.timePicker_mvf3wm$(perfectNonNull(this.closure$request.observable, now(TimeStamp.Companion).time_vcl74a$()));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_6.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_7(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.dateTimePicker_vmr2ms$(perfectNonNull(this.closure$request.observable, now(TimeStamp.Companion).dateTime_vcl74a$()));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_7.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_8(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5(closure$request) {
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_1(it) {
    return it.dateTime_vcl74a$();
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_2(it) {
    return it.toTimeStamp_vcl74a$();
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return dependency.dateTimePicker_vmr2ms$(transform(perfectNonNull(this.closure$request.observable, now(TimeStamp.Companion)), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_1, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_2));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_8.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_8.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_9(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6(closure$request) {
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_3(it) {
    return it.toString();
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda(closure$request) {
    return function () {
      closure$request.observable.value = FormState$Companion_getInstance().success_mh5how$(Uuid.Companion.randomUUID4());
      return Unit;
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_4(closure$request, this$) {
    return function () {
      if (closure$request.observable.value.valueOrNull == null) {
        closure$request.observable.value = FormState$Companion_getInstance().success_mh5how$(Uuid.Companion.randomUUID4());
      }
       else {
        launchConfirmationDialog(this$, void 0, 'Do you want to regenerate this ID?', void 0, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda(closure$request));
      }
      return Unit;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    var closure$request = this.closure$request;
    return dependency.button_tmzrmh$(transform_0(perfectNonNull(closure$request.observable, Uuid.Companion.randomUUID4()), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_3), void 0, void 0, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_4(closure$request, dependency));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_9.prototype.generateTyped_stx4vp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_9.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_10(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_10.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$;
    var form = new PairFormViewGenerator$Form(request.observable);
    var type = Kotlin.isType(tmp$ = request.type, PairMirror) ? tmp$ : throwCCE();
    return new PairFormViewGenerator(form, request.sub_bt3245$(type.AMirror, form.first).getVG_2921t4$(), request.sub_bt3245$(type.BMirror, form.second).getVG_2921t4$());
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_10.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_11(requiresType, matchPriority) {
    FormEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.matchesTyped_6qbfwt$ = function (request) {
    return request.scale.compareTo_11rb$(ViewSize$Full_getInstance()) >= 0;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda(closure$request, closure$type) {
    return function ($receiver, it) {
      var tmp$, tmp$_0;
      tmp$ = ViewSize$Full_getInstance();
      tmp$_0 = closure$type.EMirror;
      return closure$request.display_posisn$(tmp$_0, it, void 0, tmp$).getVG_2921t4$().generate_11rb$($receiver);
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda$lambda(closure$onResult) {
    return function ($receiver, it) {
      closure$onResult(it);
      return Unit;
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_0(closure$request, closure$type) {
    return function (start, onResult) {
      var tmp$;
      if (start == null) {
        var tmp$_0;
        tmp$ = Kotlin.isType(tmp$_0 = FormState.Empty, FormState) ? tmp$_0 : throwCCE();
      }
       else
        tmp$ = FormState$Companion_getInstance().success_mh5how$(start);
      var obs = new StandardObservableProperty(tmp$);
      var underlyingVg = closure$request.sub_bt3245$(closure$type.EMirror, obs, ViewSize$Full_getInstance()).getVG_2921t4$();
      return new FormViewGenerator(underlyingVg, obs, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda$lambda(onResult));
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$, tmp$_0;
    var type = Kotlin.isType(tmp$ = request.type, ListMirror) ? tmp$ : throwCCE();
    return new ListFormViewGenerator(Kotlin.isType(tmp$_0 = request.general.stack, MutableObservableList) ? tmp$_0 : throwCCE(), new MutableObservableListFromProperty(perfectNonNull(request.observable, emptyList())), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda(request, type), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_0(request, type));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_11.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_12(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.matchesTyped_6qbfwt$ = function (request) {
    var tmp$, tmp$_0;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    return request.general.databases.get_11rb$(t) != null && request.scale.compareTo_11rb$(ViewSize$OneLine_getInstance()) > 0;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7(closure$request, closure$t, closure$database, closure$idField) {
    this.closure$request = closure$request;
    this.closure$t = closure$t;
    this.closure$database = closure$database;
    this.closure$idField = closure$idField;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_0(closure$stack, closure$request) {
    return function (it) {
      pop(closure$stack);
      closure$request.observable.value = FormState$Companion_getInstance().success_mh5how$(new Reference(it.id));
      return Unit;
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_5(closure$request, closure$t, closure$database) {
    return function () {
      var stack = closure$request.general.stack_2921t4$();
      push(stack, new DatabaseVG(stack, closure$t, closure$database, void 0, closure$request.general, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_0(stack, closure$request)));
      return Unit;
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_6(closure$request) {
    return function () {
      if (closure$request.type.isNullable) {
        closure$request.observable.value = FormState$Companion_getInstance().success_mh5how$(null);
      }
      return Unit;
    };
  }
  function Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$loading = closure$loading_0;
    this.local$closure$database = closure$database_0;
    this.local$closure$idField = closure$idField_0;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$item = closure$item_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda;
  Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$loading.value = true;
            this.local$tmp$_0 = this.local$closure$item;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = get_0(this.local$closure$database, this.local$closure$idField, this.local$closure$ref.key, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              println(stackTraceString(t));
              this.local$tmp$ = null;
            }
             else
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$_0.value = this.local$tmp$;
            return this.local$closure$loading.value = false, Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_1(closure$item, closure$loading, closure$database, closure$idField) {
    return function (formState) {
      var ref = formState.valueOrNull;
      if (ref == null) {
        closure$item.value = null;
      }
       else {
        launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading, closure$database, closure$idField, ref, closure$item));
      }
      return Unit;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    this.closure$t;
    this.closure$database;
    this.closure$idField;
    var closure$request = this.closure$request;
    var closure$t = this.closure$t;
    var closure$database = this.closure$database;
    var closure$idField = this.closure$idField;
    var loading = new StandardObservableProperty(false);
    var item = new StandardObservableProperty(null);
    var $receiver = dependency.work_yxyo8z$(dependency.altClickable_5g8z5d$(dependency.clickable_5g8z5d$(dependency.card_11rb$((new DisplayRequest(closure$request.general, get_nullable(closure$t), closure$request.scale, void 0, false, item)).getVG_2921t4$().generate_11rb$(dependency)), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_5(closure$request, closure$t, closure$database)), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_6(closure$request)), loading);
    bind(dependency.get_lifecycle_wijs$($receiver), closure$request.observable, FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_1(item, loading, closure$database, closure$idField));
    return $receiver;
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    var $receiver = t.base.fields;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
        var element = $receiver[tmp$_4];
        if (equals(element.name, 'id')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var idField = Kotlin.isType(tmp$_1 = firstOrNull$result, MirrorClass$Field) ? tmp$_1 : throwCCE();
    tmp$_3 = Kotlin.isType(tmp$_2 = request.general.databases.get_11rb$(t), Database) ? tmp$_2 : null;
    if (tmp$_3 == null) {
      throw IllegalArgumentException_init();
    }
    var database = tmp$_3;
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7(request, t, database, idField);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_12.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_13(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.matches_xazhhs$ = function (request) {
    return request.type.base.enumValues != null;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral(closure$options, closure$request) {
    this.closure$options = closure$options;
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda(closure$request) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      return (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = it, Enum) ? tmp$ : null) != null ? tmp$_0.name : null) != null ? tmp$_1 : it != null ? it.toString() : null) != null ? humanify(tmp$_2) : null) != null ? tmp$_3 : closure$request.general.nullString;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    this.closure$options;
    this.closure$request;
    var closure$options = this.closure$options;
    var closure$request = this.closure$request;
    var tmp$;
    return dependency.picker_dvtdv8$(asObservableList(toList(closure$options)), perfect(Kotlin.isType(tmp$ = closure$request.observable, MutableObservableProperty) ? tmp$ : throwCCE(), first(closure$options)), FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda(closure$request));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.generate_vrvfgp$ = function (request) {
    var nnOptions = ensureNotNull(request.type.base.enumValues);
    var options = request.type.isNullable ? plus(listOf_0(null), toList_1(nnOptions)) : toList_1(nnOptions);
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral(options, request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_13.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_14(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8(closure$options, closure$request) {
    this.closure$options = closure$options;
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_7(closure$request) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = it != null ? it.name : null) != null ? humanify(tmp$) : null) != null ? tmp$_0 : closure$request.general.nullString;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8.prototype.generate_11rb$ = function (dependency) {
    this.closure$options;
    this.closure$request;
    var closure$options = this.closure$options;
    var closure$request = this.closure$request;
    return dependency.picker_dvtdv8$(asObservableList(closure$options), perfect(closure$request.observable, first(closure$options)), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_7(closure$request));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_14.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$, tmp$_0;
    var castType = Kotlin.isType(tmp$ = request.type.base, MirrorClassFieldMirror) ? tmp$ : throwCCE();
    var allFields = Kotlin.isType(tmp$_0 = toList_1(castType.OwnerMirror.base.fields), List) ? tmp$_0 : throwCCE();
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = allFields.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (isA(element.type, castType.ValueMirror))
        destination.add_11rb$(element);
    }
    var nnOptions = destination;
    var options = request.type.isNullable ? plus(listOf_0(null), toList(nnOptions)) : toList(nnOptions);
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8(options, request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_14.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_15(requiresType_0, matchPriority_0) {
    FormEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9(closure$options, closure$request) {
    this.closure$options = closure$options;
    this.closure$request = closure$request;
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_8(closure$request) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = it != null ? it.localName : null) != null ? humanify(tmp$) : null) != null ? tmp$_0 : closure$request.general.nullString;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9.prototype.generate_11rb$ = function (dependency) {
    this.closure$options;
    this.closure$request;
    var closure$options = this.closure$options;
    var closure$request = this.closure$request;
    return dependency.picker_dvtdv8$(asObservableList(closure$options), perfect(closure$request.observable, first(closure$options)), FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda_8(closure$request));
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_15.prototype.generateTyped_stx4vp$ = function (request) {
    var tmp$;
    var castType = Kotlin.isType(tmp$ = request.type.base, MirrorClassMirror) ? tmp$ : throwCCE();
    var nnOptions = info.MirrorRegistry.allSatisfying_xekh30$(castType.TypeMirror);
    var options = request.type.isNullable ? plus(listOf_0(null), toList(nnOptions)) : toList(nnOptions);
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9(options, request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_15.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseNullableTypeInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_16(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_16.prototype.matches_xazhhs$ = function (request) {
    return equals(request.type.kind, UnionKind.POLYMORPHIC);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_16.prototype.generate_vrvfgp$ = function (request) {
    return new PolymorphicFormViewGenerator(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_16.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_17(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_17.prototype.matches_xazhhs$ = function (request) {
    return request.type.isNullable;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0(closure$request) {
    this.closure$request = closure$request;
    var tmp$;
    this.form = new NullableForm(Kotlin.isType(tmp$ = closure$request.observable, MutableObservableProperty) ? tmp$ : throwCCE());
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral(closure$request) {
    this.closure$request = closure$request;
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    return text(dependency, this.closure$request.general.nullString, void 0, void 0, Importance.Low);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda(closure$request, this$, closure$dependency) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (it) {
        tmp$_0 = Kotlin.isType(tmp$ = closure$request.type.base, MirrorType) ? tmp$ : throwCCE();
        tmp$_1 = this$.form.value;
        tmp$_2 = closure$request.scale;
        tmp$_3 = closure$request.sub_bt3245$(tmp$_0, tmp$_1, tmp$_2).getVG_2921t4$();
      }
       else
        tmp$_3 = new FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral(closure$request);
      var vg = tmp$_3;
      return to(vg.generate_11rb$(closure$dependency), Animation.Fade);
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_0(this$, this$_0, closure$request, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$_0.toggle_n1o2qm$(this$.form.isNotNull));
      $receiver.unaryPlus_wijs$(this$_0.swap_yi09s7$(transform_0(this$.form.isNotNull, FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda(closure$request, this$, closure$dependency))));
      return Unit;
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    var $receiver = horizontal(dependency, FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_0(this, dependency, this.closure$request, dependency));
    this.form.bind_6d5xoe$(dependency.get_lifecycle_wijs$($receiver));
    return $receiver;
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_17.prototype.generate_vrvfgp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0(request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_17.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_18(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_18.prototype.matches_xazhhs$ = function (request) {
    var tmp$ = equals(request.type.kind, StructureKind.CLASS) && !request.type.isNullable;
    if (tmp$) {
      tmp$ = request.type.base.fields.length === 0;
    }
    return tmp$;
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_18.prototype.generate_vrvfgp$ = function (request) {
    request.observable.value = FormState$Companion_getInstance().success_mh5how$(Breaker.Companion.fold_c3j3l4$(request.type, []));
    return ViewGenerator.Companion.empty_2921t4$();
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_18.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_19(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_19.prototype.matches_xazhhs$ = function (request) {
    return equals(request.type.kind, StructureKind.CLASS) && !request.type.isNullable && request.type.base.fields.length === 1;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda$lambda(closure$field) {
    return function (it) {
      var tmp$;
      return closure$field.get(Kotlin.isType(tmp$ = it, Any) ? tmp$ : throwCCE());
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda(closure$field) {
    return function (it) {
      return it.map_2o04qz$(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda$lambda(closure$field));
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda$lambda_0(closure$mirrorClass) {
    return function (it) {
      var tmp$;
      return (tmp$ = Breaker.Companion.fold_c3j3l4$(closure$mirrorClass, [it])) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda_0(closure$mirrorClass) {
    return function (it) {
      return it.map_2o04qz$(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda$lambda_0(closure$mirrorClass));
    };
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_19.prototype.generate_vrvfgp$ = function (request) {
    var tmp$, tmp$_0;
    var mirrorClass = Kotlin.isType(tmp$ = request.type.base, MirrorClass) ? tmp$ : throwCCE();
    var field = Kotlin.isType(tmp$_0 = mirrorClass.fields[0], MirrorClass$Field) ? tmp$_0 : throwCCE();
    return request.sub_bt3245$(field.type, transform(request.observable, FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda(field), FormEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda_0(mirrorClass)), request.scale).getVG_2921t4$();
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_19.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_20(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_20.prototype.matches_xazhhs$ = function (request) {
    return equals(request.type.kind, StructureKind.CLASS) && !request.type.isNullable && request.type.base.fields.length > 1 && request.scale.compareTo_11rb$(ViewSize$Full_getInstance()) >= 0;
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_20.prototype.generate_vrvfgp$ = function (request) {
    var tmp$;
    return new ReflectiveFormViewGenerator(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE());
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_20.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_21(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_21.prototype.matches_xazhhs$ = function (request) {
    return request.scale.compareTo_11rb$(ViewSize$Summary_getInstance()) <= 0;
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_21.prototype.generate_vrvfgp$ = function (request) {
    var tmp$;
    return new CardFormViewGenerator(Kotlin.isType(tmp$ = request.general.stack, MutableObservableList) ? tmp$ : throwCCE(), ViewEncoder_getInstance().getViewGenerator_86u98z$(request.displayNullable()), request);
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_21.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  function FormEncoderDefaultModule$lambda$ObjectLiteral_22(requiresType_0, matchPriority_0) {
    FormEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral_22.prototype.matches_xazhhs$ = function (request) {
    return true;
  };
  function FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1() {
  }
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype.generate_11rb$ = function (dependency) {
    return text(dependency, 'No form generator found');
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  FormEncoderDefaultModule$lambda$ObjectLiteral_22.prototype.generate_vrvfgp$ = function (request) {
    return new FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1();
  };
  FormEncoderDefaultModule$lambda$ObjectLiteral_22.$metadata$ = {kind: Kind_CLASS, interfaces: [FormEncoder$BaseInterceptor]};
  var FormEncoderDefaultModule;
  function perfect$lambda(closure$default) {
    return function (it) {
      return Kotlin.isType(it, FormState$Success) ? it.value : closure$default;
    };
  }
  function perfect$lambda_0(it) {
    return FormState$Companion_getInstance().success_mh5how$(it);
  }
  function perfect($receiver, default_0) {
    return transform($receiver, perfect$lambda(default_0), perfect$lambda_0);
  }
  function perfectNonNull$lambda(closure$default) {
    return function (it) {
      var tmp$;
      return (tmp$ = it.valueOrNull) != null ? tmp$ : closure$default;
    };
  }
  function perfectNonNull$lambda_0(it) {
    return FormState$Companion_getInstance().success_mh5how$(it);
  }
  function perfectNonNull($receiver, default_0) {
    if (!Kotlin.isType($receiver.value, FormState$Success)) {
      $receiver.value = FormState$Companion_getInstance().success_mh5how$(default_0);
    }
    return transform($receiver, perfectNonNull$lambda(default_0), perfectNonNull$lambda_0);
  }
  function perfectNullable$lambda(it) {
    return it.valueOrNull;
  }
  function perfectNullable$lambda_0(it) {
    return FormState$Companion_getInstance().success_mh5how$(it);
  }
  function perfectNullable($receiver) {
    return transform($receiver, perfectNullable$lambda, perfectNullable$lambda_0);
  }
  function groupingBy$ObjectLiteral(this$groupingBy, closure$keySelector) {
    this.this$groupingBy = this$groupingBy;
    this.closure$keySelector = closure$keySelector;
  }
  groupingBy$ObjectLiteral.prototype.sourceIterator = function () {
    return this.this$groupingBy.iterator();
  };
  groupingBy$ObjectLiteral.prototype.keyOf_11rb$ = function (element) {
    return this.closure$keySelector(element);
  };
  groupingBy$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Grouping]};
  function FormEncoder() {
    FormEncoder_instance = this;
    this.interceptors_0 = new AtomicReference(FormEncoderDefaultModule);
  }
  function FormEncoder$Interceptor() {
    FormEncoder$Interceptor$Companion_getInstance();
  }
  Object.defineProperty(FormEncoder$Interceptor.prototype, 'matchPriority', {get: function () {
    return kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
  }});
  FormEncoder$Interceptor.prototype.compareTo_11rb$ = function (other) {
    return -Kotlin.compareTo(this.matchPriority, other.matchPriority) | 0;
  };
  FormEncoder$Interceptor.prototype.matches_xazhhs$ = function (request) {
    return true;
  };
  function FormEncoder$Interceptor$Companion() {
    FormEncoder$Interceptor$Companion_instance = this;
  }
  FormEncoder$Interceptor$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var FormEncoder$Interceptor$Companion_instance = null;
  function FormEncoder$Interceptor$Companion_getInstance() {
    if (FormEncoder$Interceptor$Companion_instance === null) {
      new FormEncoder$Interceptor$Companion();
    }
    return FormEncoder$Interceptor$Companion_instance;
  }
  FormEncoder$Interceptor.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Interceptor', interfaces: [Comparable]};
  function FormEncoder$BaseInterceptor(requiresType, matchPriority) {
    if (requiresType === void 0)
      requiresType = null;
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_rdfhh7$_0 = requiresType;
    this.matchPriority_jq0mu6$_0 = matchPriority;
  }
  Object.defineProperty(FormEncoder$BaseInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_rdfhh7$_0;
  }});
  Object.defineProperty(FormEncoder$BaseInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_jq0mu6$_0;
  }});
  FormEncoder$BaseInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseInterceptor', interfaces: [FormEncoder$Interceptor]};
  function FormEncoder$BaseTypeInterceptor(requiresType, matchPriority) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_dmkmgb$_0 = requiresType;
    this.matchPriority_c6314o$_0 = matchPriority;
  }
  Object.defineProperty(FormEncoder$BaseTypeInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_dmkmgb$_0;
  }});
  Object.defineProperty(FormEncoder$BaseTypeInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_c6314o$_0;
  }});
  FormEncoder$BaseTypeInterceptor.prototype.matchesTyped_6qbfwt$ = function (request) {
    return true;
  };
  FormEncoder$BaseTypeInterceptor.prototype.matches_xazhhs$ = function (request) {
    var tmp$;
    return !request.type.isNullable ? this.matchesTyped_6qbfwt$(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE()) : false;
  };
  FormEncoder$BaseTypeInterceptor.prototype.generate_vrvfgp$ = function (request) {
    var tmp$;
    return this.generateTyped_stx4vp$(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE());
  };
  FormEncoder$BaseTypeInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseTypeInterceptor', interfaces: [FormEncoder$Interceptor]};
  function FormEncoder$BaseNullableTypeInterceptor(requiresType, matchPriority) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_iatmwm$_0 = requiresType;
    this.matchPriority_gudqnt$_0 = matchPriority;
  }
  Object.defineProperty(FormEncoder$BaseNullableTypeInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_iatmwm$_0;
  }});
  Object.defineProperty(FormEncoder$BaseNullableTypeInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_gudqnt$_0;
  }});
  FormEncoder$BaseNullableTypeInterceptor.prototype.matchesTyped_6qbfwt$ = function (request) {
    return true;
  };
  FormEncoder$BaseNullableTypeInterceptor.prototype.matches_xazhhs$ = function (request) {
    var tmp$;
    return this.matchesTyped_6qbfwt$(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE());
  };
  function FormEncoder$BaseNullableTypeInterceptor$generate$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, FormState) ? tmp$ : throwCCE();
  }
  function FormEncoder$BaseNullableTypeInterceptor$generate$lambda_0(it) {
    var tmp$;
    var tmp$_0;
    if (Kotlin.isType(it, FormState$Success) && it.value == null) {
      var tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$_1 = FormState.Empty, FormState) ? tmp$_1 : throwCCE();
    }
     else
      tmp$_0 = Kotlin.isType(tmp$ = it, FormState) ? tmp$ : throwCCE();
    return tmp$_0;
  }
  FormEncoder$BaseNullableTypeInterceptor.prototype.generate_vrvfgp$ = function (request) {
    var tmp$, tmp$_0;
    if (request.type.isNullable) {
      return this.generateTyped_stx4vp$(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE());
    }
     else {
      return this.generateTyped_stx4vp$((Kotlin.isType(tmp$_0 = request, FormRequest) ? tmp$_0 : throwCCE()).copy_bt3245$(get_nullable(request.type), transform(request.observable, FormEncoder$BaseNullableTypeInterceptor$generate$lambda, FormEncoder$BaseNullableTypeInterceptor$generate$lambda_0)));
    }
  };
  FormEncoder$BaseNullableTypeInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseNullableTypeInterceptor', interfaces: [FormEncoder$Interceptor]};
  function FormEncoder$DefaultInterceptor(requiresType, matchPriority, matches, generate) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    if (matches === void 0)
      matches = FormEncoder$FormEncoder$DefaultInterceptor_init$lambda;
    this.requiresType_jlhgh1$_0 = requiresType;
    this.matchPriority_nc4px4$_0 = matchPriority;
    this.matches = matches;
    this.generate = generate;
  }
  Object.defineProperty(FormEncoder$DefaultInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_jlhgh1$_0;
  }});
  Object.defineProperty(FormEncoder$DefaultInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_nc4px4$_0;
  }});
  FormEncoder$DefaultInterceptor.prototype.matches_xazhhs$ = function (request) {
    return this.matches(request);
  };
  FormEncoder$DefaultInterceptor.prototype.generate_vrvfgp$ = function (request) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.generate(request), ViewGenerator) ? tmp$ : throwCCE();
  };
  function FormEncoder$FormEncoder$DefaultInterceptor_init$lambda(it) {
    return true;
  }
  FormEncoder$DefaultInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultInterceptor', interfaces: [FormEncoder$Interceptor]};
  FormEncoder$DefaultInterceptor.prototype.component1 = function () {
    return this.requiresType;
  };
  FormEncoder$DefaultInterceptor.prototype.component2 = function () {
    return this.matchPriority;
  };
  FormEncoder$DefaultInterceptor.prototype.component3 = function () {
    return this.matches;
  };
  FormEncoder$DefaultInterceptor.prototype.component4 = function () {
    return this.generate;
  };
  FormEncoder$DefaultInterceptor.prototype.copy_9zzo6r$ = function (requiresType, matchPriority, matches, generate) {
    return new FormEncoder$DefaultInterceptor(requiresType === void 0 ? this.requiresType : requiresType, matchPriority === void 0 ? this.matchPriority : matchPriority, matches === void 0 ? this.matches : matches, generate === void 0 ? this.generate : generate);
  };
  FormEncoder$DefaultInterceptor.prototype.toString = function () {
    return 'DefaultInterceptor(requiresType=' + Kotlin.toString(this.requiresType) + (', matchPriority=' + Kotlin.toString(this.matchPriority)) + (', matches=' + Kotlin.toString(this.matches)) + (', generate=' + Kotlin.toString(this.generate)) + ')';
  };
  FormEncoder$DefaultInterceptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.requiresType) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchPriority) | 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.generate) | 0;
    return result;
  };
  FormEncoder$DefaultInterceptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.requiresType, other.requiresType) && Kotlin.equals(this.matchPriority, other.matchPriority) && Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.generate, other.generate)))));
  };
  function FormEncoder$TypeInterceptor(requiresType, matchPriority, matches, generate) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    if (matches === void 0)
      matches = FormEncoder$FormEncoder$TypeInterceptor_init$lambda;
    this.requiresType_u4vd6k$_0 = requiresType;
    this.matchPriority_qpjnwn$_0 = matchPriority;
    this.matches = matches;
    this.generate = generate;
  }
  Object.defineProperty(FormEncoder$TypeInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_u4vd6k$_0;
  }});
  Object.defineProperty(FormEncoder$TypeInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_qpjnwn$_0;
  }});
  FormEncoder$TypeInterceptor.prototype.matches_xazhhs$ = function (request) {
    var tmp$;
    return this.matches(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE());
  };
  FormEncoder$TypeInterceptor.prototype.generate_vrvfgp$ = function (request) {
    var tmp$, tmp$_0;
    return Kotlin.isType(tmp$_0 = this.generate(Kotlin.isType(tmp$ = request, FormRequest) ? tmp$ : throwCCE()), ViewGenerator) ? tmp$_0 : throwCCE();
  };
  function FormEncoder$FormEncoder$TypeInterceptor_init$lambda(it) {
    return true;
  }
  FormEncoder$TypeInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeInterceptor', interfaces: [FormEncoder$Interceptor]};
  FormEncoder$TypeInterceptor.prototype.component1 = function () {
    return this.requiresType;
  };
  FormEncoder$TypeInterceptor.prototype.component2 = function () {
    return this.matchPriority;
  };
  FormEncoder$TypeInterceptor.prototype.component3 = function () {
    return this.matches;
  };
  FormEncoder$TypeInterceptor.prototype.component4 = function () {
    return this.generate;
  };
  FormEncoder$TypeInterceptor.prototype.copy_66i295$ = function (requiresType, matchPriority, matches, generate) {
    return new FormEncoder$TypeInterceptor(requiresType === void 0 ? this.requiresType : requiresType, matchPriority === void 0 ? this.matchPriority : matchPriority, matches === void 0 ? this.matches : matches, generate === void 0 ? this.generate : generate);
  };
  FormEncoder$TypeInterceptor.prototype.toString = function () {
    return 'TypeInterceptor(requiresType=' + Kotlin.toString(this.requiresType) + (', matchPriority=' + Kotlin.toString(this.matchPriority)) + (', matches=' + Kotlin.toString(this.matches)) + (', generate=' + Kotlin.toString(this.generate)) + ')';
  };
  FormEncoder$TypeInterceptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.requiresType) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchPriority) | 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.generate) | 0;
    return result;
  };
  FormEncoder$TypeInterceptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.requiresType, other.requiresType) && Kotlin.equals(this.matchPriority, other.matchPriority) && Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.generate, other.generate)))));
  };
  function FormEncoder$Interceptors(byType, others) {
    if (byType === void 0)
      byType = HashMap_init();
    if (others === void 0)
      others = SortedBag();
    this.byType = byType;
    this.others = others;
  }
  FormEncoder$Interceptors.prototype.plusAssign_5v2gj2$ = function (interceptor) {
    if (interceptor.requiresType != null) {
      var $receiver = this.byType;
      var key = ensureNotNull(interceptor.requiresType);
      var tmp$;
      var value = $receiver.get_11rb$(key);
      if (value == null) {
        var answer = SortedBag();
        $receiver.put_xwzc9p$(key, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      tmp$.add_11rb$(interceptor);
    }
     else {
      this.others.add_11rb$(interceptor);
    }
  };
  function FormEncoder$Interceptors$resolve$lambda$lambda(closure$request) {
    return function (it) {
      return it.matches_xazhhs$(closure$request);
    };
  }
  function FormEncoder$Interceptors$resolve$lambda(closure$request) {
    return function (it) {
      return it.matches_xazhhs$(closure$request);
    };
  }
  FormEncoder$Interceptors.prototype.resolve_1y4h5q$ = function (request) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.byType.get_11rb$(request.type.base.kClass)) != null ? firstOrNull_0(filter(asSequence_0(tmp$), FormEncoder$Interceptors$resolve$lambda$lambda(request))) : null) != null ? tmp$_0 : firstOrNull_0(filter(asSequence_0(this.others), FormEncoder$Interceptors$resolve$lambda(request)));
  };
  FormEncoder$Interceptors.prototype.plus_vc7xlt$ = function (other) {
    var $receiver = toMutableMap(this.byType);
    $receiver.putAll_a2k3zr$(other.byType);
    return new FormEncoder$Interceptors($receiver, this.others.plus_6e5le9$(other.others));
  };
  FormEncoder$Interceptors.$metadata$ = {kind: Kind_CLASS, simpleName: 'Interceptors', interfaces: []};
  function FormEncoder$FormEncoder$Interceptors_init(interceptors, $this) {
    $this = $this || Object.create(FormEncoder$Interceptors.prototype);
    var $receiver = new groupingBy$ObjectLiteral(filter(asSequence_0(interceptors), FormEncoder$FormEncoder$Interceptors_init$lambda), FormEncoder$FormEncoder$Interceptors_init$lambda_0);
    var destination = HashMap_init();
    var tmp$;
    tmp$ = $receiver.sourceIterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = $receiver.keyOf_11rb$(e);
      var accumulator = destination.get_11rb$(key);
      var tmp$_0 = destination.put_xwzc9p$;
      accumulator == null && !destination.containsKey_11rb$(key);
      var a = accumulator != null ? accumulator : SortedBag();
      a.add_11rb$(e);
      tmp$_0.call(destination, key, a);
    }
    var $receiver_0 = filter(asSequence_0(interceptors), FormEncoder$FormEncoder$Interceptors_init$lambda_1);
    var tmp$_1;
    var accumulator_0 = SortedBag();
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var bag = accumulator_0;
      bag.add_11rb$(element);
      accumulator_0 = bag;
    }
    FormEncoder$Interceptors.call($this, destination, accumulator_0);
    return $this;
  }
  function FormEncoder$FormEncoder$Interceptors_init$lambda(it) {
    return it.requiresType != null;
  }
  function FormEncoder$FormEncoder$Interceptors_init$lambda_0(it) {
    return ensureNotNull(it.requiresType);
  }
  function FormEncoder$FormEncoder$Interceptors_init$lambda_1(it) {
    return it.requiresType == null;
  }
  FormEncoder.prototype.register_vc7xlt$ = function (interceptors) {
    var start = this.interceptors_0.value;
    var new_0 = start.plus_vc7xlt$(interceptors);
    while (!equals(start, this.interceptors_0.value)) {
      start = this.interceptors_0.value;
      new_0 = start.plus_vc7xlt$(interceptors);
    }
    this.interceptors_0.value = new_0;
  };
  FormEncoder.prototype.getViewGenerator_vrvfgp$ = function (request) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.interceptors_0.value.resolve_1y4h5q$(request)) != null ? tmp$.generate_vrvfgp$(request) : null;
    if (tmp$_0 == null) {
      throw IllegalArgumentException_init_0('No matching ViewGenerator was found.');
    }
    return tmp$_0;
  };
  FormEncoder.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FormEncoder', interfaces: []};
  var FormEncoder_instance = null;
  function FormEncoder_getInstance() {
    if (FormEncoder_instance === null) {
      new FormEncoder();
    }
    return FormEncoder_instance;
  }
  function FormRequest(general, type, scale, owningField, observable) {
    if (scale === void 0)
      scale = ViewSize$Full_getInstance();
    if (owningField === void 0)
      owningField = null;
    if (observable === void 0) {
      var tmp$;
      observable = new StandardObservableProperty(Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE());
    }
    this.general_118tbi$_0 = general;
    this.type_32ckcg$_0 = type;
    this.scale_ot3yq8$_0 = scale;
    this.owningField_9p8r5o$_0 = owningField;
    this.observable = observable;
  }
  Object.defineProperty(FormRequest.prototype, 'general', {get: function () {
    return this.general_118tbi$_0;
  }});
  Object.defineProperty(FormRequest.prototype, 'type', {get: function () {
    return this.type_32ckcg$_0;
  }});
  Object.defineProperty(FormRequest.prototype, 'scale', {get: function () {
    return this.scale_ot3yq8$_0;
  }});
  Object.defineProperty(FormRequest.prototype, 'owningField', {get: function () {
    return this.owningField_9p8r5o$_0;
  }});
  FormRequest.prototype.child_3rp6gz$ = function (field, observable, scale) {
    if (scale === void 0)
      scale = this.scale.shrink();
    var tmp$;
    return new FormRequest(this.general, Kotlin.isType(tmp$ = field.type, MirrorType) ? tmp$ : throwCCE(), scale, field, observable);
  };
  FormRequest.prototype.sub_bt3245$ = function (type, observable, scale) {
    if (scale === void 0)
      scale = this.scale.shrink();
    return new FormRequest(this.general, type, scale, void 0, observable);
  };
  FormRequest.prototype.copy_bt3245$ = function (type, observable, scale) {
    if (scale === void 0)
      scale = this.scale;
    return new FormRequest(this.general, type, scale, void 0, observable);
  };
  FormRequest.prototype.display_posisn$ = function (type, observable, general, scale, owningField) {
    if (general === void 0)
      general = this.general;
    if (scale === void 0)
      scale = this.scale;
    if (owningField === void 0)
      owningField = this.owningField;
    return new DisplayRequest(general, type, scale, owningField, false, observable);
  };
  FormRequest.prototype.display_hoswez$ = function (observable, type, general, scale, owningField) {
    if (type === void 0)
      type = this.type;
    if (general === void 0)
      general = this.general;
    if (scale === void 0)
      scale = this.scale;
    if (owningField === void 0)
      owningField = this.owningField;
    return new DisplayRequest(general, type, scale, owningField, false, observable);
  };
  function FormRequest$display$lambda(closure$default) {
    return function (it) {
      var tmp$;
      return (tmp$ = it.valueOrNull) != null ? tmp$ : closure$default;
    };
  }
  FormRequest.prototype.display_11rb$ = function (default_0) {
    return new DisplayRequest(this.general, this.type, this.scale, this.owningField, false, transform_0(this.observable, FormRequest$display$lambda(default_0)));
  };
  function FormRequest$displayNullable$lambda(it) {
    return it.valueOrNull;
  }
  FormRequest.prototype.displayNullable = function () {
    return new DisplayRequest(this.general, get_nullable(this.type), this.scale, this.owningField, false, transform_0(this.observable, FormRequest$displayNullable$lambda));
  };
  FormRequest.prototype.getVG_2921t4$ = function () {
    return FormEncoder_getInstance().getViewGenerator_vrvfgp$(this);
  };
  FormRequest.prototype.getVG_cjqmn0$ = function (viewGenerator) {
    return FormEncoder_getInstance().getViewGenerator_vrvfgp$(this);
  };
  FormRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormRequest', interfaces: [CommonRequest]};
  FormRequest.prototype.component1 = function () {
    return this.general;
  };
  FormRequest.prototype.component2 = function () {
    return this.type;
  };
  FormRequest.prototype.component3 = function () {
    return this.scale;
  };
  FormRequest.prototype.component4 = function () {
    return this.owningField;
  };
  FormRequest.prototype.component5 = function () {
    return this.observable;
  };
  FormRequest.prototype.copy_f9vzts$ = function (general, type, scale, owningField, observable) {
    return new FormRequest(general === void 0 ? this.general : general, type === void 0 ? this.type : type, scale === void 0 ? this.scale : scale, owningField === void 0 ? this.owningField : owningField, observable === void 0 ? this.observable : observable);
  };
  FormRequest.prototype.toString = function () {
    return 'FormRequest(general=' + Kotlin.toString(this.general) + (', type=' + Kotlin.toString(this.type)) + (', scale=' + Kotlin.toString(this.scale)) + (', owningField=' + Kotlin.toString(this.owningField)) + (', observable=' + Kotlin.toString(this.observable)) + ')';
  };
  FormRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.general) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.owningField) | 0;
    result = result * 31 + Kotlin.hashCode(this.observable) | 0;
    return result;
  };
  FormRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.general, other.general) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.owningField, other.owningField) && Kotlin.equals(this.observable, other.observable)))));
  };
  function FormState() {
    FormState$Companion_getInstance();
  }
  Object.defineProperty(FormState.prototype, 'isEmpty', {get: function () {
    return false;
  }});
  function FormState$Success(value) {
    FormState.call(this);
    this.value = value;
  }
  Object.defineProperty(FormState$Success.prototype, 'valueOrNull', {get: function () {
    return this.value;
  }});
  FormState$Success.prototype.breakDown_2o04qz$ = function (get) {
    return FormState$Companion_getInstance().success_mh5how$(get(this.value));
  };
  FormState$Success.prototype.map_2o04qz$ = function (get) {
    return FormState$Companion_getInstance().success_mh5how$(get(this.value));
  };
  FormState$Success.prototype.asType_287e2$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
  };
  FormState$Success.$metadata$ = {kind: Kind_CLASS, simpleName: 'Success', interfaces: [FormState]};
  FormState$Success.prototype.component1 = function () {
    return this.value;
  };
  FormState$Success.prototype.copy_11rb$ = function (value) {
    return new FormState$Success(value === void 0 ? this.value : value);
  };
  FormState$Success.prototype.toString = function () {
    return 'Success(value=' + Kotlin.toString(this.value) + ')';
  };
  FormState$Success.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  FormState$Success.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function FormState$Invalid(cause) {
    if (cause === void 0)
      cause = null;
    FormState.call(this);
    this.cause = cause;
  }
  Object.defineProperty(FormState$Invalid.prototype, 'valueOrNull', {get: function () {
    return null;
  }});
  FormState$Invalid.prototype.breakDown_2o04qz$ = function (get) {
    return null;
  };
  FormState$Invalid.prototype.map_2o04qz$ = function (get) {
    return new FormState$Invalid(this.cause);
  };
  FormState$Invalid.prototype.asType_287e2$ = function () {
    return new FormState$Invalid(this.cause);
  };
  FormState$Invalid.$metadata$ = {kind: Kind_CLASS, simpleName: 'Invalid', interfaces: [FormState]};
  FormState$Invalid.prototype.component1 = function () {
    return this.cause;
  };
  FormState$Invalid.prototype.copy_s8jyv4$ = function (cause) {
    return new FormState$Invalid(cause === void 0 ? this.cause : cause);
  };
  FormState$Invalid.prototype.toString = function () {
    return 'Invalid(cause=' + Kotlin.toString(this.cause) + ')';
  };
  FormState$Invalid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cause) | 0;
    return result;
  };
  FormState$Invalid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.cause, other.cause))));
  };
  function FormState$Empty() {
    FormState$Empty_instance = this;
    FormState.call(this);
  }
  Object.defineProperty(FormState$Empty.prototype, 'valueOrNull', {get: function () {
    return null;
  }});
  Object.defineProperty(FormState$Empty.prototype, 'isEmpty', {get: function () {
    return true;
  }});
  FormState$Empty.prototype.breakDown_2o04qz$ = function (get) {
    return null;
  };
  FormState$Empty.prototype.map_2o04qz$ = function (get) {
    var tmp$;
    return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
  };
  FormState$Empty.prototype.asType_287e2$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
  };
  FormState$Empty.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Empty', interfaces: [FormState]};
  var FormState$Empty_instance = null;
  function FormState$Empty_getInstance() {
    if (FormState$Empty_instance === null) {
      new FormState$Empty();
    }
    return FormState$Empty_instance;
  }
  function FormState$Companion() {
    FormState$Companion_instance = this;
  }
  FormState$Companion.prototype.empty_287e2$ = defineInlineFunction('mirror-form.com.lightningkite.mirror.form.FormState.Companion.empty_287e2$', wrapFunction(function () {
    var FormState = _.com.lightningkite.mirror.form.FormState;
    var throwCCE = Kotlin.throwCCE;
    return function () {
      var tmp$;
      return Kotlin.isType(tmp$ = FormState.Empty, FormState) ? tmp$ : throwCCE();
    };
  }));
  FormState$Companion.prototype.success_mh5how$ = function (value) {
    return new FormState$Success(value);
  };
  FormState$Companion.prototype.invalid_tpy1pm$ = function (cause) {
    return new FormState$Invalid(cause);
  };
  FormState$Companion.prototype.combineFailures_vl7zyi$ = function (parts) {
    var tmp$;
    tmp$ = parts.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.component1(), part = tmp$_0.component2();
      if (part.isEmpty) {
        var tmp$_1;
        return Kotlin.isType(tmp$_1 = FormState.Empty, FormState) ? tmp$_1 : throwCCE();
      }
      if (Kotlin.isType(part, FormState$Invalid))
        return this.invalid_tpy1pm$(key + ': ' + toString(part.cause));
    }
    return null;
  };
  FormState$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var FormState$Companion_instance = null;
  function FormState$Companion_getInstance() {
    if (FormState$Companion_instance === null) {
      new FormState$Companion();
    }
    return FormState$Companion_instance;
  }
  FormState.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormState', interfaces: []};
  function GeneralRequest(developerMode, nullString, impliedFields, databases, requestHandler, stack) {
    if (developerMode === void 0)
      developerMode = false;
    if (nullString === void 0)
      nullString = 'N/A';
    if (impliedFields === void 0) {
      impliedFields = emptyMap();
    }
    if (databases === void 0) {
      databases = emptyMap();
    }
    if (requestHandler === void 0)
      requestHandler = null;
    if (stack === void 0)
      stack = new WrapperObservableList();
    this.developerMode = developerMode;
    this.nullString = nullString;
    this.impliedFields = impliedFields;
    this.databases = databases;
    this.requestHandler = requestHandler;
    this.stack = stack;
  }
  GeneralRequest.prototype.stack_2921t4$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.stack, MutableObservableList) ? tmp$ : throwCCE();
  };
  GeneralRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'GeneralRequest', interfaces: []};
  GeneralRequest.prototype.component1 = function () {
    return this.developerMode;
  };
  GeneralRequest.prototype.component2 = function () {
    return this.nullString;
  };
  GeneralRequest.prototype.component3 = function () {
    return this.impliedFields;
  };
  GeneralRequest.prototype.component4 = function () {
    return this.databases;
  };
  GeneralRequest.prototype.component5 = function () {
    return this.requestHandler;
  };
  GeneralRequest.prototype.component6 = function () {
    return this.stack;
  };
  GeneralRequest.prototype.copy_sjdhil$ = function (developerMode, nullString, impliedFields, databases, requestHandler, stack) {
    return new GeneralRequest(developerMode === void 0 ? this.developerMode : developerMode, nullString === void 0 ? this.nullString : nullString, impliedFields === void 0 ? this.impliedFields : impliedFields, databases === void 0 ? this.databases : databases, requestHandler === void 0 ? this.requestHandler : requestHandler, stack === void 0 ? this.stack : stack);
  };
  GeneralRequest.prototype.toString = function () {
    return 'GeneralRequest(developerMode=' + Kotlin.toString(this.developerMode) + (', nullString=' + Kotlin.toString(this.nullString)) + (', impliedFields=' + Kotlin.toString(this.impliedFields)) + (', databases=' + Kotlin.toString(this.databases)) + (', requestHandler=' + Kotlin.toString(this.requestHandler)) + (', stack=' + Kotlin.toString(this.stack)) + ')';
  };
  GeneralRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.developerMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.nullString) | 0;
    result = result * 31 + Kotlin.hashCode(this.impliedFields) | 0;
    result = result * 31 + Kotlin.hashCode(this.databases) | 0;
    result = result * 31 + Kotlin.hashCode(this.requestHandler) | 0;
    result = result * 31 + Kotlin.hashCode(this.stack) | 0;
    return result;
  };
  GeneralRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.developerMode, other.developerMode) && Kotlin.equals(this.nullString, other.nullString) && Kotlin.equals(this.impliedFields, other.impliedFields) && Kotlin.equals(this.databases, other.databases) && Kotlin.equals(this.requestHandler, other.requestHandler) && Kotlin.equals(this.stack, other.stack)))));
  };
  function FormEditOnly() {
  }
  FormEditOnly.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormEditOnly', interfaces: [Annotation]};
  function FormViewOnly() {
  }
  FormViewOnly.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormViewOnly', interfaces: [Annotation]};
  function FormHidden() {
  }
  FormHidden.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormHidden', interfaces: [Annotation]};
  function FormNeedsNoContext() {
  }
  FormNeedsNoContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormNeedsNoContext', interfaces: [Annotation]};
  function get_needsNoContext($receiver) {
    var tmp$;
    var $receiver_0 = $receiver.annotations;
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1, tmp$_2;
        if (Kotlin.isType(element, FormNeedsNoContext) || equals((tmp$_2 = Kotlin.isType(tmp$_1 = element, MirrorAnnotation) ? tmp$_1 : null) != null ? tmp$_2.annotationType : null, getKClass(FormNeedsNoContext))) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (!any$result) {
      switch ($receiver.name) {
        case 'email':
        case 'title':
        case 'name':
        case 'subject':
        case 'body':
          tmp$ = true;
          break;
        default:tmp$ = false;
          break;
      }
    }
     else
      tmp$ = true;
    return tmp$;
  }
  function get_numberInputType$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, MirrorAnnotation) ? tmp$ : null;
  }
  function get_numberInputType$lambda_0(it) {
    var tmp$;
    return (tmp$ = it.annotationType) != null ? tmp$.equals(getKClass(NumberInputType)) : null;
  }
  function get_numberInputType($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return Kotlin.isType(tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull_0(filter(mapNotNull(asSequence_0($receiver.annotations), get_numberInputType$lambda), get_numberInputType$lambda_0))) != null ? tmp$.asMap() : null) != null ? tmp$_0.values : null) != null ? firstOrNull_1(tmp$_1) : null, NumberInputType) ? tmp$_2 : null;
  }
  function FormTextInputType(inputType) {
    this.inputType = inputType;
  }
  FormTextInputType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormTextInputType', interfaces: [Annotation]};
  function get_textInputType$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, MirrorAnnotation) ? tmp$ : null;
  }
  function get_textInputType$lambda_0(it) {
    var tmp$;
    return (tmp$ = it.annotationType) != null ? tmp$.equals(getKClass(FormTextInputType)) : null;
  }
  function get_textInputType($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$_4 = Kotlin.isType(tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull_0(filter(mapNotNull(asSequence_0($receiver.annotations), get_textInputType$lambda), get_textInputType$lambda_0))) != null ? tmp$.asMap() : null) != null ? tmp$_0.values : null) != null ? firstOrNull_1(tmp$_1) : null, TextInputType) ? tmp$_2 : null;
    if (tmp$_4 == null) {
      switch ($receiver.name) {
        case 'email':
          tmp$_3 = TextInputType.Email;
          break;
        case 'title':
          tmp$_3 = TextInputType.Name;
          break;
        case 'name':
          tmp$_3 = TextInputType.Name;
          break;
        case 'subject':
          tmp$_3 = TextInputType.Sentence;
          break;
        case 'id':
        case 'vin':
          tmp$_3 = TextInputType.CapitalizedIdentifier;
          break;
        case 'body':
          tmp$_3 = TextInputType.Paragraph;
          break;
        case 'password':
        case 'confirmPassword':
        case 'newPassword':
        case 'oldPassword':
          tmp$_3 = TextInputType.Password;
          break;
        default:tmp$_3 = TextInputType.Sentence;
          break;
      }
      tmp$_4 = tmp$_3;
    }
    return tmp$_4;
  }
  function humanify($receiver) {
    if ($receiver.length === 0)
      return '';
    var $receiver_0 = $receiver.charCodeAt(0);
    var tmp$ = toChar(String.fromCharCode($receiver_0 | 0).toUpperCase().charCodeAt(0));
    var $receiver_1 = replace($receiver, '.', ' - ');
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver_1);
      if (match == null) {
        replace_20wsma$result = $receiver_1.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver_1.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver_1, lastStart, foundMatch.range.start);
        sb.append_gw00v9$(' ' + foundMatch.value);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver_1, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var $receiver_2 = replace_0(replace_20wsma$result, 95, 32);
    var tmp$_0;
    var other = drop(trim(Kotlin.isCharSequence(tmp$_0 = $receiver_2) ? tmp$_0 : throwCCE()).toString(), 1);
    return String.fromCharCode(tmp$) + other;
  }
  function DatabaseVG(stack, type, database, mutable, generalRequest, onSelect) {
    if (mutable === void 0)
      mutable = false;
    if (onSelect === void 0)
      onSelect = DatabaseVG_init$lambda(stack, type, generalRequest);
    this.stack = stack;
    this.type = type;
    this.database = database;
    this.mutable = mutable;
    this.generalRequest = generalRequest;
    this.onSelect = onSelect;
    this.items = new WrapperObservableList();
    this.loading = new StandardObservableProperty(false);
    this.anyLeft = true;
    this.firstIndexObs = new StandardObservableProperty(0);
    this.lastIndexObs = new StandardObservableProperty(0);
    this.localFilteredItems = filtering(this.items);
    this.queryString = new StandardObservableProperty('');
    this.queryString.add_11rb$(DatabaseVG_init$lambda_0(this));
    this.condition = new StandardObservableProperty(Condition.Always);
    this.sort = new StandardObservableProperty(emptyList());
    this.loadIndex = 0;
    this.reset();
    this.addWorking = new StandardObservableProperty(false);
  }
  Object.defineProperty(DatabaseVG.prototype, 'title', {get: function () {
    return humanify(this.type.base.localName);
  }});
  function DatabaseVG$generate$lambda$lambda$lambda(this$DatabaseVG, this$) {
    return function ($receiver) {
      $receiver.unaryPlus_wijs$(this$.textField_bqlgfi$(this$DatabaseVG.queryString, 'Filter...', TextInputType.Sentence));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda(this$DatabaseVG, closure$itemObs) {
    return function () {
      this$DatabaseVG.onSelect(closure$itemObs.value);
      return Unit;
    };
  }
  function Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG_0, closure$oldItem_0, closure$newItem_0, closure$dependency_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$this$DatabaseVG = this$DatabaseVG_0;
    this.local$closure$oldItem = closure$oldItem_0;
    this.local$closure$newItem = closure$newItem_0;
    this.local$closure$dependency = closure$dependency_0;
    this.local$this$ = this$_0;
  }
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$this$DatabaseVG.database.update_igrlh$(new Condition$Equal(this.local$closure$oldItem), new Operation$Set(this.local$closure$newItem), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var result = this.result_0;
            var $receiver = this.local$this$DatabaseVG.items;
            var indexOfFirst$result;
            indexOfFirst$break: do {
              var tmp$_1;
              var index = 0;
              tmp$_1 = $receiver.iterator();
              while (tmp$_1.hasNext()) {
                var item = tmp$_1.next();
                if (equals(item, this.local$closure$oldItem)) {
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
              this.local$this$DatabaseVG.items.set_wxm5ur$(index_0, this.local$closure$newItem);
            }

            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              tmp$_0 = (tmp$ = t.message) != null ? tmp$ : 'Unknown error';
              launchInfoDialog(this.local$closure$dependency, 'Error Updating Item', tmp$_0);
            }
             else
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            return popFrom(this.local$this$DatabaseVG.stack, this.local$this$);
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG_0, closure$oldItem_0, closure$newItem_0, closure$dependency_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG_0, closure$oldItem_0, closure$newItem_0, closure$dependency_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG, closure$oldItem, closure$dependency) {
    return function ($receiver, newItem) {
      launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG, closure$oldItem, newItem, closure$dependency, $receiver));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda(closure$itemObs, this$DatabaseVG, closure$dependency) {
    return function () {
      var oldItem = closure$itemObs.value;
      pushFrom(this$DatabaseVG.stack, this$DatabaseVG, FormViewGenerator_0(this$DatabaseVG.type, FormState$Companion_getInstance().success_mh5how$(oldItem), this$DatabaseVG.generalRequest, DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG, oldItem, closure$dependency)));
      return Unit;
    };
  }
  function Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG_0, closure$oldItem_0, closure$dependency_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$this$DatabaseVG = this$DatabaseVG_0;
    this.local$closure$oldItem = closure$oldItem_0;
    this.local$closure$dependency = closure$dependency_0;
  }
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$this$DatabaseVG.database.delete_b7ig37$(new Condition$Equal(this.local$closure$oldItem), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var result = this.result_0;
            return this.local$this$DatabaseVG.items.remove_11rb$(this.local$closure$oldItem);
          case 2:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              tmp$_0 = (tmp$ = t.message) != null ? tmp$ : 'Unknown error';
              return launchInfoDialog(this.local$closure$dependency, 'Error Inserting Item', tmp$_0), Unit;
            }
             else {
              throw t;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG_0, closure$oldItem_0, closure$dependency_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG_0, closure$oldItem_0, closure$dependency_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG, closure$oldItem, closure$dependency) {
    return function () {
      launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG, closure$oldItem, closure$dependency));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$itemObs, this$DatabaseVG, closure$dependency, this$) {
    return function () {
      var oldItem = closure$itemObs.value;
      launchConfirmationDialog(this$, void 0, void 0, void 0, DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$DatabaseVG, oldItem, closure$dependency));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda(closure$itemObs, this$DatabaseVG, closure$dependency, this$) {
    return function () {
      this$.launchSelector_8prigm$(void 0, listOf([to('Edit', DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda(closure$itemObs, this$DatabaseVG, closure$dependency)), to('Delete', DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$itemObs, this$DatabaseVG, closure$dependency, this$))]));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda_0(closure$displayView, closure$dependency, closure$itemObs, this$DatabaseVG, this$) {
    return function ($receiver) {
      $receiver.unaryPlus_wijs$(closure$displayView);
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.moreVert, closure$dependency.colorSet.foreground), void 0, ImageScaleType.Crop), 'More', Importance.Low, DatabaseVG$generate$lambda$lambda$lambda$lambda$lambda(closure$itemObs, this$DatabaseVG, closure$dependency, this$)));
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda_0(this$DatabaseVG, this$, closure$dependency) {
    return function (itemObs) {
      var displayView = this$.clickable_5g8z5d$(display_0(this$, itemObs, this$DatabaseVG.type, this$DatabaseVG.generalRequest, ViewSize$Summary_getInstance()), DatabaseVG$generate$lambda$lambda$lambda$lambda(this$DatabaseVG, itemObs));
      if (this$DatabaseVG.mutable) {
        return this$.card_11rb$(horizontal(this$, DatabaseVG$generate$lambda$lambda$lambda$lambda_0(displayView, closure$dependency, itemObs, this$DatabaseVG, this$)));
      }
       else {
        return this$.card_11rb$(displayView);
      }
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda$lambda_1(this$DatabaseVG) {
    return function (it) {
      if (it >= get_lastIndex(this$DatabaseVG.localFilteredItems)) {
        this$DatabaseVG.loadMore();
      }
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda$lambda_1(this$DatabaseVG) {
    return function () {
      this$DatabaseVG.reset();
      return Unit;
    };
  }
  function DatabaseVG$generate$lambda$lambda(this$DatabaseVG, this$, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(horizontal(this$, DatabaseVG$generate$lambda$lambda$lambda(this$DatabaseVG, this$)));
      var tmp$ = this$;
      var $receiver_0 = this$.list_s8g4or$(this$DatabaseVG.localFilteredItems, this$DatabaseVG.firstIndexObs, this$DatabaseVG.lastIndexObs, void 0, DatabaseVG$generate$lambda$lambda$lambda_0(this$DatabaseVG, this$, closure$dependency));
      var this$_0 = this$;
      var this$DatabaseVG_0 = this$DatabaseVG;
      bind(this$_0.get_lifecycle_wijs$($receiver_0), this$DatabaseVG_0.lastIndexObs, DatabaseVG$generate$lambda$lambda$lambda$lambda_1(this$DatabaseVG_0));
      $receiver.unaryPlus_wijs$(tmp$.refresh_28bnka$($receiver_0, this$DatabaseVG.loading, DatabaseVG$generate$lambda$lambda$lambda_1(this$DatabaseVG)));
      return Unit;
    };
  }
  DatabaseVG.prototype.generate_11rb$ = function (dependency) {
    return vertical(dependency, DatabaseVG$generate$lambda$lambda(this, dependency, dependency));
  };
  DatabaseVG.prototype.reset = function () {
    this.loadIndex = this.loadIndex + 1 | 0;
    this.items.clear();
    this.anyLeft = true;
    this.loading.value = false;
    this.loadMore();
  };
  function Coroutine$DatabaseVG$loadMore$lambda(this$DatabaseVG_0, closure$startLoadIndex_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$this$DatabaseVG = this$DatabaseVG_0;
    this.local$closure$startLoadIndex = closure$startLoadIndex_0;
    this.local$newData = void 0;
  }
  Coroutine$DatabaseVG$loadMore$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$DatabaseVG$loadMore$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DatabaseVG$loadMore$lambda.prototype.constructor = Coroutine$DatabaseVG$loadMore$lambda;
  Coroutine$DatabaseVG$loadMore$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$DatabaseVG.loading.value = true;
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$this$DatabaseVG.database.get_ip4fwo$(this.local$this$DatabaseVG.condition.value, this.local$this$DatabaseVG.sort.value, 20, lastOrNull(this.local$this$DatabaseVG.items), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$newData = this.result_0;
            if (this.local$closure$startLoadIndex !== this.local$this$DatabaseVG.loadIndex) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 2:
            this.local$this$DatabaseVG.items.addAll_brywnq$(this.local$newData);
            if (this.local$newData.isEmpty()) {
              this.local$this$DatabaseVG.anyLeft = false;
            }

            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (Kotlin.isType(t, RemoteExceptionData$Thrown)) {
              println('Remote exception:');
              println(stackTraceString(t));
            }
             else if (Kotlin.isType(t, Throwable)) {
              println(stackTraceString(t));
            }
             else
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$this$DatabaseVG.loading.value = false, Unit;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function DatabaseVG$loadMore$lambda(this$DatabaseVG_0, closure$startLoadIndex_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DatabaseVG$loadMore$lambda(this$DatabaseVG_0, closure$startLoadIndex_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DatabaseVG.prototype.loadMore = function () {
    if (!this.anyLeft)
      return;
    var startLoadIndex = this.loadIndex;
    if (this.loading.value)
      return;
    launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, DatabaseVG$loadMore$lambda(this, startLoadIndex));
  };
  function DatabaseVG$generateActions$lambda$lambda$lambda$lambda(this$DatabaseVG) {
    return function ($receiver, it) {
      this$DatabaseVG.condition.value = it;
      this$DatabaseVG.reset();
      popFrom(this$DatabaseVG.stack, $receiver);
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda(this$DatabaseVG) {
    return function () {
      pushFrom(this$DatabaseVG.stack, this$DatabaseVG, FormViewGenerator_0(new ConditionMirror(this$DatabaseVG.type), FormState$Companion_getInstance().success_mh5how$(this$DatabaseVG.condition.value), this$DatabaseVG.generalRequest, DatabaseVG$generateActions$lambda$lambda$lambda$lambda(this$DatabaseVG)));
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda(closure$it, this$DatabaseVG) {
    return function () {
      var tmp$, tmp$_0;
      this$DatabaseVG.sort.value = listOf_0(Kotlin.isType(tmp$_0 = new Sort(Kotlin.isType(tmp$ = closure$it, MirrorClass$Field) ? tmp$ : throwCCE(), true), Sort) ? tmp$_0 : throwCCE());
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda_0(closure$it, this$DatabaseVG) {
    return function () {
      var tmp$, tmp$_0;
      this$DatabaseVG.sort.value = listOf_0(Kotlin.isType(tmp$_0 = new Sort(Kotlin.isType(tmp$ = closure$it, MirrorClass$Field) ? tmp$ : throwCCE(), false), Sort) ? tmp$_0 : throwCCE());
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda_0(this$DatabaseVG, this$) {
    return function () {
      var tmp$ = this$;
      var $receiver = this$DatabaseVG.type.base.fields;
      var destination = ArrayList_init();
      var tmp$_0;
      loop_label: for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        var this$DatabaseVG_0 = this$DatabaseVG;
        var transform$result;
        var $receiver_0 = element.type.base.implements;
        var any$result;
        any$break: do {
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
            var element_0 = $receiver_0[tmp$_1];
            if (Kotlin.isType(element_0, ComparableMirror)) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        if (any$result) {
          transform$result = listOf([to(humanify(element.name) + ' (Ascending)', DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda(element, this$DatabaseVG_0)), to(humanify(element.name) + ' (Descending)', DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda_0(element, this$DatabaseVG_0))]);
        }
         else {
          transform$result = emptyList();
        }
        var list = transform$result;
        addAll(destination, list);
      }
      tmp$.launchSelector_8prigm$('Sort by:', destination);
      return Unit;
    };
  }
  function Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG_0, closure$newItem_0, closure$dependency_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$this$DatabaseVG = this$DatabaseVG_0;
    this.local$closure$newItem = closure$newItem_0;
    this.local$closure$dependency = closure$dependency_0;
    this.local$this$ = this$_0;
  }
  Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$this$DatabaseVG.addWorking.value = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$this$DatabaseVG.database.insert_yp4z7y$(listOf_0(this.local$closure$newItem), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var result = this.result_0;
            this.local$this$DatabaseVG.items.addAll_u57x28$(0, result);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              tmp$_0 = (tmp$ = t.message) != null ? tmp$ : 'Unknown error';
              launchInfoDialog(this.local$closure$dependency, 'Error Inserting Item', tmp$_0);
            }
             else
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$this$DatabaseVG.addWorking.value = false;
            return popFrom(this.local$this$DatabaseVG.stack, this.local$this$);
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda_1(this$DatabaseVG_0, closure$newItem_0, closure$dependency_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda(this$DatabaseVG_0, closure$newItem_0, closure$dependency_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda$lambda_0(this$DatabaseVG, closure$dependency) {
    return function ($receiver, newItem) {
      launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, DatabaseVG$generateActions$lambda$lambda$lambda$lambda$lambda_1(this$DatabaseVG, newItem, closure$dependency, $receiver));
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda$lambda_1(this$DatabaseVG, closure$dependency) {
    return function () {
      pushFrom(this$DatabaseVG.stack, this$DatabaseVG, FormViewGenerator_0(this$DatabaseVG.type, void 0, this$DatabaseVG.generalRequest, DatabaseVG$generateActions$lambda$lambda$lambda$lambda_0(this$DatabaseVG, closure$dependency)));
      return Unit;
    };
  }
  function DatabaseVG$generateActions$lambda$lambda(closure$dependency, this$DatabaseVG, this$) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.filter, closure$dependency.colorSet.foreground)), 'Filter', Importance.Low, DatabaseVG$generateActions$lambda$lambda$lambda(this$DatabaseVG)));
      $receiver.unaryMinus_wijs$(imageButton(this$, withSizing(color(MaterialIcon.sort, closure$dependency.colorSet.foreground)), 'Sort', Importance.Low, DatabaseVG$generateActions$lambda$lambda$lambda_0(this$DatabaseVG, this$)));
      if (this$DatabaseVG.mutable) {
        $receiver.unaryMinus_wijs$(this$.work_yxyo8z$(imageButton(this$, withSizing(color(MaterialIcon.add, closure$dependency.colorSet.foreground)), 'Add', Importance.Low, DatabaseVG$generateActions$lambda$lambda$lambda_1(this$DatabaseVG, closure$dependency)), this$DatabaseVG.addWorking));
      }
      return Unit;
    };
  }
  DatabaseVG.prototype.generateActions_11rb$ = function (dependency) {
    return horizontal(dependency, DatabaseVG$generateActions$lambda$lambda(dependency, this, dependency));
  };
  function DatabaseVG_init$lambda(closure$stack, closure$type, closure$generalRequest) {
    return function (it) {
      push(closure$stack, DisplayViewGenerator(it, closure$type, closure$generalRequest));
      return Unit;
    };
  }
  function DatabaseVG_init$lambda$lambda(it) {
    return true;
  }
  function DatabaseVG_init$lambda$lambda_0(this$DatabaseVG, closure$queryParts) {
    return function (it) {
      var parts = Breaker.Companion.snap_nleje8$(this$DatabaseVG.type, it);
      var $receiver = closure$queryParts;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        loop_label: while (tmp$.hasNext()) {
          var element = tmp$.next();
          var any$result;
          any$break: do {
            var tmp$_0;
            for (tmp$_0 = 0; tmp$_0 !== parts.length; ++tmp$_0) {
              var element_0 = parts[tmp$_0];
              if (contains_0(toString(element_0), element, true)) {
                any$result = true;
                break any$break;
              }
            }
            any$result = false;
          }
           while (false);
          if (!any$result) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }
  function DatabaseVG_init$lambda_0(this$DatabaseVG) {
    return function (it) {
      if (it.length === 0) {
        this$DatabaseVG.localFilteredItems.filter = DatabaseVG_init$lambda$lambda;
      }
       else {
        var queryParts = split(it, Kotlin.charArrayOf(32));
        this$DatabaseVG.localFilteredItems.filter = DatabaseVG_init$lambda$lambda_0(this$DatabaseVG, queryParts);
      }
      return Unit;
    };
  }
  DatabaseVG.$metadata$ = {kind: Kind_CLASS, simpleName: 'DatabaseVG', interfaces: [ViewGenerator]};
  function includedInForm($receiver, request) {
    if (request.general.developerMode)
      return true;
    var $receiver_0 = $receiver.annotations;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0, tmp$_1;
        var annotationType = (tmp$_1 = Kotlin.isType(tmp$_0 = element, MirrorAnnotation) ? tmp$_0 : null) != null ? tmp$_1.annotationType : null;
        if (equals(annotationType, getKClass(FormViewOnly)) || equals(annotationType, getKClass(FormHidden))) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var hasRestrictedAnnotation = any$result;
    if (hasRestrictedAnnotation)
      return false;
    if (request.general.impliedFields.keys.contains_11rb$($receiver))
      return false;
    return true;
  }
  function pickDisplayFields$lambda$lambda(it) {
    var $receiver = it.annotations;
    var none$result;
    none$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        none$result = true;
        break none$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0, tmp$_1;
        var annotationType = (tmp$_1 = Kotlin.isType(tmp$_0 = element, MirrorAnnotation) ? tmp$_0 : null) != null ? tmp$_1.annotationType : null;
        if (equals(annotationType, getKClass(FormEditOnly)) || equals(annotationType, getKClass(FormHidden))) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    return none$result;
  }
  function pickDisplayFields$lambda$lambda_0(closure$request) {
    return function (it) {
      return !closure$request.general.impliedFields.keys.contains_11rb$(it);
    };
  }
  function pickDisplayFields($receiver, request) {
    var it = asSequence_1($receiver.fields);
    return request.general.developerMode ? it : filter(filter(it, pickDisplayFields$lambda$lambda), pickDisplayFields$lambda$lambda_0(request));
  }
  function ListSummaryViewGenerator(value, lines, viewGenerator) {
    if (lines === void 0)
      lines = 3;
    this.value = value;
    this.lines = lines;
    this.viewGenerator = viewGenerator;
  }
  function ListSummaryViewGenerator$generate$lambda$lambda$lambda(it) {
    return getOrNull(it, 0);
  }
  function ListSummaryViewGenerator$generate$lambda$lambda$lambda_0(this$, this$ListSummaryViewGenerator, closure$dependency) {
    return function (it) {
      var tmp$;
      if (it == null) {
        tmp$ = this$.margin_ovmznb$(space(this$, 1.0), 0.0);
      }
       else {
        tmp$ = this$ListSummaryViewGenerator.viewGenerator(new ConstantObservableProperty(it)).generate_11rb$(closure$dependency);
      }
      return to(tmp$, Animation.Flip);
    };
  }
  function ListSummaryViewGenerator$generate$lambda$lambda$lambda_1(this$ListSummaryViewGenerator) {
    return function (it) {
      return it.size > this$ListSummaryViewGenerator.lines ? '...' : '';
    };
  }
  function ListSummaryViewGenerator$generate$lambda$lambda(this$ListSummaryViewGenerator, this$, closure$dependency) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ListSummaryViewGenerator.lines;
      for (var line = 0; line < tmp$; line++) {
        $receiver.unaryMinus_wijs$(this$.swap_yi09s7$(transform_0(transform_0(this$ListSummaryViewGenerator.value.onListUpdate, ListSummaryViewGenerator$generate$lambda$lambda$lambda), ListSummaryViewGenerator$generate$lambda$lambda$lambda_0(this$, this$ListSummaryViewGenerator, closure$dependency))));
      }
      $receiver.unaryMinus_wijs$(this$.text_30kv5x$(transform_0(this$ListSummaryViewGenerator.value.onListUpdate, ListSummaryViewGenerator$generate$lambda$lambda$lambda_1(this$ListSummaryViewGenerator))));
      return Unit;
    };
  }
  ListSummaryViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return vertical(dependency, ListSummaryViewGenerator$generate$lambda$lambda(this, dependency, dependency));
  };
  ListSummaryViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListSummaryViewGenerator', interfaces: [ViewGenerator]};
  function ListViewGenerator(value, viewGenerator) {
    this.value = value;
    this.viewGenerator = viewGenerator;
  }
  function ListViewGenerator$generate$lambda$lambda(this$ListViewGenerator, closure$dependency) {
    return function (itemObs) {
      return this$ListViewGenerator.viewGenerator(itemObs).generate_11rb$(closure$dependency);
    };
  }
  ListViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.list_s8g4or$(this.value, void 0, void 0, void 0, ListViewGenerator$generate$lambda$lambda(this, dependency));
  };
  ListViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListViewGenerator', interfaces: [ViewGenerator]};
  function PairSingleLineViewGenerator(subFirst, subSecond) {
    this.subFirst = subFirst;
    this.subSecond = subSecond;
  }
  function PairSingleLineViewGenerator$generate$lambda$lambda(this$PairSingleLineViewGenerator, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$PairSingleLineViewGenerator.subFirst.generate_11rb$(closure$dependency));
      $receiver.unaryMinus_wijs$(this$PairSingleLineViewGenerator.subSecond.generate_11rb$(closure$dependency));
      return Unit;
    };
  }
  PairSingleLineViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return horizontal(dependency, PairSingleLineViewGenerator$generate$lambda$lambda(this, dependency));
  };
  PairSingleLineViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'PairSingleLineViewGenerator', interfaces: [ViewGenerator]};
  function PairViewGenerator(subFirst, subSecond) {
    this.subFirst = subFirst;
    this.subSecond = subSecond;
  }
  function PairViewGenerator$generate$lambda$lambda$lambda(this$, this$PairViewGenerator, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(space(this$, 16.0));
      $receiver.unaryPlus_wijs$(this$PairViewGenerator.subSecond.generate_11rb$(closure$dependency));
      return Unit;
    };
  }
  function PairViewGenerator$generate$lambda$lambda(this$PairViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$PairViewGenerator.subFirst.generate_11rb$(closure$dependency));
      $receiver.unaryMinus_wijs$(horizontal(this$, PairViewGenerator$generate$lambda$lambda$lambda(this$, this$PairViewGenerator, closure$dependency)));
      return Unit;
    };
  }
  PairViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.frame_11rb$(vertical(dependency, PairViewGenerator$generate$lambda$lambda(this, dependency, dependency)));
  };
  PairViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'PairViewGenerator', interfaces: [ViewGenerator]};
  function ReflectiveSummaryViewGenerator(fieldCount, request) {
    if (fieldCount === void 0)
      fieldCount = 3;
    this.request = request;
    var tmp$;
    this.type = Kotlin.isType(tmp$ = this.request.type, MirrorClass) ? tmp$ : throwCCE();
    this.fields = toList_0(map(take(pickDisplayFields(this.type, this.request), fieldCount), ReflectiveSummaryViewGenerator$fields$lambda(this)));
  }
  function ReflectiveSummaryViewGenerator$generate$lambda$lambda(this$ReflectiveSummaryViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ReflectiveSummaryViewGenerator.fields.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var field = tmp$_0.component1(), generator = tmp$_0.component2();
        if (get_needsNoContext(field)) {
          $receiver.unaryMinus_wijs$(generator.generate_11rb$(closure$dependency));
        }
         else {
          $receiver.unaryMinus_wijs$(this$.entryContext_6ji58x$(humanify(field.name), void 0, void 0, void 0, generator.generate_11rb$(closure$dependency)));
        }
      }
      return Unit;
    };
  }
  function ReflectiveSummaryViewGenerator$generate$lambda$lambda_0(this$ReflectiveSummaryViewGenerator) {
    return function () {
      var displayValue = this$ReflectiveSummaryViewGenerator.request.observable.value;
      push(this$ReflectiveSummaryViewGenerator.request.general.stack_2921t4$(), DisplayViewGenerator(displayValue, this$ReflectiveSummaryViewGenerator.request.type, this$ReflectiveSummaryViewGenerator.request.general));
      return Unit;
    };
  }
  ReflectiveSummaryViewGenerator.prototype.generate_11rb$ = function (dependency) {
    var block$result;
    var v = dependency.frame_11rb$(vertical(dependency, ReflectiveSummaryViewGenerator$generate$lambda$lambda(this, dependency, dependency)));
    if (this.request.clickable) {
      block$result = dependency.clickable_5g8z5d$(v, ReflectiveSummaryViewGenerator$generate$lambda$lambda_0(this));
    }
     else {
      block$result = v;
    }
    return block$result;
  };
  function ReflectiveSummaryViewGenerator$fields$lambda$lambda(closure$field) {
    return function (it) {
      return closure$field.get(it);
    };
  }
  function ReflectiveSummaryViewGenerator$fields$lambda(this$ReflectiveSummaryViewGenerator) {
    return function (field) {
      return to(field, ViewEncoder_getInstance().getViewGenerator_86u98z$(this$ReflectiveSummaryViewGenerator.request.child_fu2w0c$(field, transform_0(this$ReflectiveSummaryViewGenerator.request.observable, ReflectiveSummaryViewGenerator$fields$lambda$lambda(field)))));
    };
  }
  ReflectiveSummaryViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReflectiveSummaryViewGenerator', interfaces: [ViewGenerator]};
  function ReflectiveViewGenerator(request) {
    this.request = request;
    var tmp$;
    this.type = Kotlin.isType(tmp$ = this.request.type, MirrorClass) ? tmp$ : throwCCE();
    this.fields = map(pickDisplayFields(this.type, this.request), ReflectiveViewGenerator$fields$lambda(this));
  }
  function ReflectiveViewGenerator$generate$lambda$lambda(this$ReflectiveViewGenerator, closure$dependency, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ReflectiveViewGenerator.fields.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var field = tmp$_0.component1(), generator = tmp$_0.component2();
        if (get_needsNoContext(field)) {
          $receiver.unaryMinus_wijs$(generator.generate_11rb$(closure$dependency));
        }
         else {
          $receiver.unaryMinus_wijs$(this$.entryContext_6ji58x$(humanify(field.name), void 0, void 0, void 0, generator.generate_11rb$(closure$dependency)));
        }
      }
      return Unit;
    };
  }
  ReflectiveViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.frame_11rb$(vertical(dependency, ReflectiveViewGenerator$generate$lambda$lambda(this, dependency, dependency)));
  };
  function ReflectiveViewGenerator$fields$lambda$lambda(closure$field) {
    return function (it) {
      return closure$field.get(it);
    };
  }
  function ReflectiveViewGenerator$fields$lambda(this$ReflectiveViewGenerator) {
    return function (field) {
      return to(field, ViewEncoder_getInstance().getViewGenerator_86u98z$(this$ReflectiveViewGenerator.request.child_fu2w0c$(field, transform_0(this$ReflectiveViewGenerator.request.observable, ReflectiveViewGenerator$fields$lambda$lambda(field)))));
    };
  }
  ReflectiveViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReflectiveViewGenerator', interfaces: [ViewGenerator]};
  function StringViewGenerator(request, toString) {
    this.request_0 = request;
    this.toString_0 = toString;
  }
  function StringViewGenerator$generate$lambda(this$StringViewGenerator) {
    return function (it) {
      var tmp$;
      return (tmp$ = it != null ? this$StringViewGenerator.toString_0(it) : null) != null ? tmp$ : this$StringViewGenerator.request_0.general.nullString;
    };
  }
  StringViewGenerator.prototype.generate_11rb$ = function (dependency) {
    return dependency.text_30kv5x$(transform_0(this.request_0.observable, StringViewGenerator$generate$lambda(this)), void 0, this.request_0.scale.textSize(), void 0, this.request_0.scale.maxLines());
  };
  StringViewGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringViewGenerator', interfaces: [ViewGenerator]};
  function ViewEncoderDefaultModule$lambda$string$lambda(it) {
    return true;
  }
  function ViewEncoderDefaultModule$lambda$string$lambda_0(it) {
    return it.toString();
  }
  function ViewEncoderDefaultModule$lambda$string$ObjectLiteral(closure$matches, closure$toString, requiresType_0, matchPriority_0) {
    this.closure$matches = closure$matches;
    this.closure$toString = closure$toString;
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$string$ObjectLiteral.prototype.matches_pehoxg$ = function (request) {
    return this.closure$matches(request);
  };
  ViewEncoderDefaultModule$lambda$string$ObjectLiteral.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return new StringViewGenerator(request, typeof (tmp$ = this.closure$toString) === 'function' ? tmp$ : throwCCE());
  };
  ViewEncoderDefaultModule$lambda$string$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$string(this$) {
    return function (type, priority, matches, toString) {
      if (priority === void 0)
        priority = 0.0;
      if (matches === void 0)
        matches = ViewEncoderDefaultModule$lambda$string$lambda;
      if (toString === void 0)
        toString = ViewEncoderDefaultModule$lambda$string$lambda_0;
      this$.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$string$ObjectLiteral(matches, toString, type, priority));
    };
  }
  function ViewEncoderDefaultModule$lambda$lambda(it) {
    return lokalize.DefaultLocale.renderDate_a9kdr0$(it);
  }
  function ViewEncoderDefaultModule$lambda$lambda_0(it) {
    return lokalize.DefaultLocale.renderDateTime_mwtq35$(it);
  }
  function ViewEncoderDefaultModule$lambda$lambda_1(it) {
    return lokalize.DefaultLocale.renderTime_a9a071$(it);
  }
  function ViewEncoderDefaultModule$lambda$lambda_2(it) {
    return lokalize.DefaultLocale.renderTimeStamp_4o3mrk$(it);
  }
  function ViewEncoderDefaultModule$lambda$lambda_3(it) {
    return humanify(get_type(it).localName);
  }
  function ViewEncoderDefaultModule$lambda$lambda_4(it) {
    return humanify(it.base.localName) + (it.isNullable ? ' (Optional)' : '');
  }
  function ViewEncoderDefaultModule$lambda$lambda_5(it) {
    return humanify(it.localName);
  }
  function ViewEncoderDefaultModule$lambda$lambda_6(it) {
    return it.name;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral(requiresType, matchPriority) {
    ViewEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral.prototype.matchesTyped_4etnjl$ = function (request) {
    return request.scale.compareTo_11rb$(ViewSize$Summary_getInstance()) >= 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda(it) {
    return it.first;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_0(it) {
    return it.second;
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$;
    var type = Kotlin.isType(tmp$ = request.type, PairMirror) ? tmp$ : throwCCE();
    return new PairViewGenerator(request.sub_5m3wn8$(type.AMirror, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda)).getVG_2921t4$(), request.sub_5m3wn8$(type.BMirror, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_0)).getVG_2921t4$());
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_0(requiresType, matchPriority) {
    ViewEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_0.prototype.matchesTyped_4etnjl$ = function (request) {
    return request.scale.compareTo_11rb$(ViewSize$Summary_getInstance()) < 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_1(it) {
    return it.first;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_2(it) {
    return it.second;
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_0.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$;
    var type = Kotlin.isType(tmp$ = request.type, PairMirror) ? tmp$ : throwCCE();
    return new PairSingleLineViewGenerator(request.sub_5m3wn8$(type.AMirror, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_1)).getVG_2921t4$(), request.sub_5m3wn8$(type.BMirror, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_2)).getVG_2921t4$());
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_1(requiresType, matchPriority) {
    ViewEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_1.prototype.matchesTyped_4etnjl$ = function (request) {
    return request.scale === ViewSize$Full_getInstance();
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_3(closure$request, closure$type) {
    return function (it) {
      return closure$request.sub_5m3wn8$(closure$type.EMirror, it).getVG_2921t4$();
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_1.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$;
    var type = Kotlin.isType(tmp$ = request.type, ListMirror) ? tmp$ : throwCCE();
    return new ListViewGenerator(asObservableList_0(request.observable), ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_3(request, type));
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_2(requiresType, matchPriority) {
    ViewEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_2.prototype.matchesTyped_4etnjl$ = function (request) {
    return request.scale.compareTo_11rb$(ViewSize$Full_getInstance()) < 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_4(closure$request, closure$type) {
    return function (it) {
      return closure$request.sub_5m3wn8$(closure$type.EMirror, it).getVG_2921t4$();
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_2.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$;
    var type = Kotlin.isType(tmp$ = request.type, ListMirror) ? tmp$ : throwCCE();
    return new ListSummaryViewGenerator(asObservableList_0(request.observable), request.scale.maxLines(), ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_4(request, type));
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_3(requiresType, matchPriority) {
    ViewEncoder$BaseTypeInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_3.prototype.matchesTyped_4etnjl$ = function (request) {
    return request.scale === ViewSize$Full_getInstance();
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_5(it) {
    var $receiver = it.entries;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair(item.key, item.value));
    }
    return destination;
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_3.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$;
    var type = Kotlin.isType(tmp$ = request.type, MapMirror) ? tmp$ : throwCCE();
    var transformed = transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$lambda_5);
    return request.sub_5m3wn8$(new ListMirror(new PairMirror(type.KMirror, type.VMirror)), transformed, request.scale).getVG_2921t4$();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_4(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_4.prototype.matchesTyped_4etnjl$ = function (request) {
    var tmp$, tmp$_0;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    return request.general.databases.get_11rb$(t) != null && request.scale.compareTo_11rb$(ViewSize$OneLine_getInstance()) > 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral(closure$request, closure$t, closure$database, closure$idField) {
    this.closure$request = closure$request;
    this.closure$t = closure$t;
    this.closure$database = closure$database;
    this.closure$idField = closure$idField;
  }
  function Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$loading = closure$loading_0;
    this.local$closure$database = closure$database_0;
    this.local$closure$idField = closure$idField_0;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$item = closure$item_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda;
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$loading.value = true;
            this.local$tmp$_0 = this.local$closure$item;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = get_0(this.local$closure$database, this.local$closure$idField, this.local$closure$ref.key, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              println(stackTraceString(t));
              this.local$tmp$ = null;
            }
             else
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$_0.value = this.local$tmp$;
            return this.local$closure$loading.value = false, Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda(closure$item, closure$loading, closure$database, closure$idField) {
    return function (ref) {
      if (ref == null) {
        closure$item.value = null;
      }
       else {
        launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda(closure$loading, closure$database, closure$idField, ref, closure$item));
      }
      return Unit;
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    this.closure$t;
    this.closure$database;
    this.closure$idField;
    var closure$request = this.closure$request;
    var closure$t = this.closure$t;
    var closure$database = this.closure$database;
    var closure$idField = this.closure$idField;
    var loading = new StandardObservableProperty(false);
    var item = new StandardObservableProperty(null);
    var $receiver = dependency.work_yxyo8z$(dependency.card_11rb$(closure$request.sub_5m3wn8$(get_nullable(closure$t), item, closure$request.scale).getVG_2921t4$().generate_11rb$(dependency)), loading);
    bind(dependency.get_lifecycle_wijs$($receiver), closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda(item, loading, closure$database, closure$idField));
    return $receiver;
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_4.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    var $receiver = t.base.fields;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
        var element = $receiver[tmp$_4];
        if (equals(element.name, 'id')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var idField = Kotlin.isType(tmp$_1 = firstOrNull$result, MirrorClass$Field) ? tmp$_1 : throwCCE();
    tmp$_3 = Kotlin.isType(tmp$_2 = request.general.databases.get_11rb$(t), Database) ? tmp$_2 : null;
    if (tmp$_3 == null) {
      throw IllegalArgumentException_init();
    }
    var database = tmp$_3;
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral(request, t, database, idField);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseNullableTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_5(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseNullableTypeInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_5.prototype.matchesTyped_4etnjl$ = function (request) {
    var tmp$, tmp$_0;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    return request.general.databases.get_11rb$(t) != null && request.scale === ViewSize$OneLine_getInstance();
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0(closure$request, closure$t, closure$database, closure$idField) {
    this.closure$request = closure$request;
    this.closure$t = closure$t;
    this.closure$database = closure$database;
    this.closure$idField = closure$idField;
  }
  function Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$loading = closure$loading_0;
    this.local$closure$database = closure$database_0;
    this.local$closure$idField = closure$idField_0;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$item = closure$item_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0;
  Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$loading.value = true;
            this.local$tmp$_0 = this.local$closure$item;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = get_0(this.local$closure$database, this.local$closure$idField, this.local$closure$ref.key, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              println(stackTraceString(t));
              this.local$tmp$ = null;
            }
             else
              throw t;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$_0.value = this.local$tmp$;
            return this.local$closure$loading.value = false, Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0(closure$loading_0, closure$database_0, closure$idField_0, closure$ref_0, closure$item_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_0(closure$item, closure$loading, closure$database, closure$idField) {
    return function (ref) {
      if (ref == null) {
        closure$item.value = null;
      }
       else {
        launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda$lambda_0(closure$loading, closure$database, closure$idField, ref, closure$item));
      }
      return Unit;
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    this.closure$t;
    this.closure$database;
    this.closure$idField;
    var closure$request = this.closure$request;
    var closure$t = this.closure$t;
    var closure$database = this.closure$database;
    var closure$idField = this.closure$idField;
    var loading = new StandardObservableProperty(false);
    var item = new StandardObservableProperty(null);
    var $receiver = dependency.work_yxyo8z$(closure$request.sub_5m3wn8$(get_nullable(closure$t), item, closure$request.scale).getVG_2921t4$().generate_11rb$(dependency), loading);
    bind(dependency.get_lifecycle_wijs$($receiver), closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral$generate$lambda$lambda$lambda_0(item, loading, closure$database, closure$idField));
    return $receiver;
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_5.prototype.generateTyped_w26cgp$ = function (request) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var t = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = request.type.base, ReferenceMirror) ? tmp$ : throwCCE()).MODELMirror, MirrorType) ? tmp$_0 : throwCCE();
    var $receiver = t.base.fields;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
        var element = $receiver[tmp$_4];
        if (equals(element.name, 'id')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var idField = Kotlin.isType(tmp$_1 = firstOrNull$result, MirrorClass$Field) ? tmp$_1 : throwCCE();
    tmp$_3 = Kotlin.isType(tmp$_2 = request.general.databases.get_11rb$(t), Database) ? tmp$_2 : null;
    if (tmp$_3 == null) {
      throw IllegalArgumentException_init();
    }
    var database = tmp$_3;
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0(request, t, database, idField);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseNullableTypeInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_6(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_6.prototype.matches_pehoxg$ = function (request) {
    return request.type.base.enumValues != null;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = it, Enum) ? tmp$ : null) != null ? tmp$_0.name : null) != null ? humanify(tmp$_1) : null;
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_6.prototype.generate_86u98z$ = function (request) {
    return new StringViewGenerator(request, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_7(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_7.prototype.matches_pehoxg$ = function (request) {
    return request.type.isNullable;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral(closure$request) {
    this.closure$request = closure$request;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda(closure$request, this$, closure$dependency) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (it == null) {
        tmp$_3 = text(this$, closure$request.general.nullString, closure$request.scale.textSize());
      }
       else {
        tmp$_0 = Kotlin.isType(tmp$ = closure$request.type.base, MirrorClass) ? tmp$ : throwCCE();
        tmp$_1 = new ConstantObservableProperty(it);
        tmp$_2 = closure$request.scale;
        var underlying = closure$request.sub_5m3wn8$(tmp$_0, tmp$_1, tmp$_2).getVG_2921t4$();
        tmp$_3 = underlying.generate_11rb$(closure$dependency);
      }
      return to(tmp$_3, Animation.None);
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    var closure$request = this.closure$request;
    return dependency.swap_yi09s7$(transform_0(closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda(closure$request, dependency, dependency)));
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_7.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral(request);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_8(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_8.prototype.matches_pehoxg$ = function (request) {
    return request.type.base.fields.length === 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0() {
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype.generate_11rb$ = function (dependency) {
    return space(dependency, 1.0);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_8.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_8.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_9(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_9.prototype.matches_pehoxg$ = function (request) {
    return request.type.base.fields.length === 1;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda_0(closure$singleField) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = Kotlin.isType(tmp$ = it, Any) ? tmp$ : null) != null ? closure$singleField.get(tmp$_0) : null;
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_9.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    var singleField = Kotlin.isType(tmp$ = first_0(request.type.base.fields), MirrorClass$Field) ? tmp$ : throwCCE();
    var defer = new DisplayRequest(request.general, get_nullable(singleField.type), request.scale, singleField, void 0, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$lambda_0(singleField)));
    return defer.getVG_2921t4$();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_9.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_10(requiresType, matchPriority) {
    ViewEncoder$BaseNotNullInterceptor.call(this, requiresType, matchPriority);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_10.prototype.matchesNotNull_drbw33$ = function (request) {
    return request.type.base.fields.length >= 2 && request.scale === ViewSize$OneLine_getInstance();
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generateNotNull$lambda(closure$singleField) {
    return function (it) {
      return closure$singleField.get(it);
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_10.prototype.generateNotNull_s28acq$ = function (request) {
    var tmp$, tmp$_0;
    var singleField = first_1(pickDisplayFields(Kotlin.isType(tmp$ = request.type, MirrorClass) ? tmp$ : throwCCE(), request));
    var defer = new DisplayRequest(request.general, Kotlin.isType(tmp$_0 = get_nullable(singleField.type), MirrorType) ? tmp$_0 : throwCCE(), request.scale, singleField, void 0, transform_0(request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generateNotNull$lambda(singleField)));
    return defer.getVG_2921t4$();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_10.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseNotNullInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_11(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.matches_pehoxg$ = function (request) {
    return !request.type.isNullable && request.type.base.fields.length >= 2 && request.scale === ViewSize$Full_getInstance();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_11.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return new ReflectiveViewGenerator(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE());
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_11.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_12(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.matches_pehoxg$ = function (request) {
    return !request.type.isNullable && request.type.base.fields.length >= 2 && request.scale === ViewSize$Summary_getInstance();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_12.prototype.generate_86u98z$ = function (request) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE();
    return new ReflectiveSummaryViewGenerator(request.scale.maxLines(), tmp$_0);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_12.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_13(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.matches_pehoxg$ = function (request) {
    return equals(request.type.base.kind, UnionKind.POLYMORPHIC) && request.scale.compareTo_11rb$(ViewSize$Summary_getInstance()) >= 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1(closure$request) {
    this.closure$request = closure$request;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda(closure$request) {
    return function (it) {
      if (it == null) {
        return humanify(closure$request.type.base.localName);
      }
       else {
        return humanify(info.MirrorRegistry.retrieve_za3rmp$(it).localName);
      }
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_0(closure$request, closure$dependency) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      if (it == null) {
        tmp$_4 = ViewGenerator.Companion.empty_2921t4$();
      }
       else {
        tmp$_0 = Kotlin.isType(tmp$ = info.MirrorRegistry.retrieve_za3rmp$(it), MirrorType) ? tmp$ : throwCCE();
        tmp$_2 = Kotlin.isType(tmp$_1 = new ConstantObservableProperty(it), ObservableProperty) ? tmp$_1 : throwCCE();
        tmp$_3 = closure$request.scale;
        var requestWithType = closure$request.sub_5m3wn8$(tmp$_0, tmp$_2, tmp$_3);
        tmp$_4 = requestWithType.getVG_2921t4$();
      }
      var vg = tmp$_4;
      return to(vg.generate_11rb$(closure$dependency), Animation.None);
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_0(closure$request, this$, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$.text_30kv5x$(transform_0(closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda(closure$request)), void 0, closure$request.scale.textSize()));
      $receiver.unaryMinus_wijs$(this$.swap_yi09s7$(transform_0(closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_0(closure$request, closure$dependency))));
      return Unit;
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return vertical(dependency, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_0(this.closure$request, dependency, dependency));
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_13.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1(request);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_13.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_14(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_14.prototype.matches_pehoxg$ = function (request) {
    return equals(request.type.base.kind, UnionKind.POLYMORPHIC) && request.scale.compareTo_11rb$(ViewSize$Summary_getInstance()) < 0;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2(closure$request) {
    this.closure$request = closure$request;
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_1(closure$request) {
    return function (it) {
      if (it == null) {
        return humanify(closure$request.type.base.localName);
      }
       else {
        return humanify(info.MirrorRegistry.retrieve_za3rmp$(it).localName);
      }
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_2(closure$request, closure$dependency) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      if (it == null) {
        tmp$_4 = ViewGenerator.Companion.empty_2921t4$();
      }
       else {
        tmp$_0 = Kotlin.isType(tmp$ = info.MirrorRegistry.retrieve_za3rmp$(it), MirrorType) ? tmp$ : throwCCE();
        tmp$_2 = Kotlin.isType(tmp$_1 = new ConstantObservableProperty(it), ObservableProperty) ? tmp$_1 : throwCCE();
        tmp$_3 = closure$request.scale;
        var requestWithType = closure$request.sub_5m3wn8$(tmp$_0, tmp$_2, tmp$_3);
        tmp$_4 = requestWithType.getVG_2921t4$();
      }
      var vg = tmp$_4;
      return to(vg.generate_11rb$(closure$dependency), Animation.None);
    };
  }
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_1(closure$request, this$, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$.text_30kv5x$(transform_0(closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_1(closure$request)), void 0, closure$request.scale.textSize()));
      $receiver.unaryMinus_wijs$(this$.swap_yi09s7$(transform_0(closure$request.observable, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda_2(closure$request, closure$dependency))));
      return Unit;
    };
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2.prototype.generate_11rb$ = function (dependency) {
    this.closure$request;
    return horizontal(dependency, ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda_1(this.closure$request, dependency, dependency));
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_14.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2(request);
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_14.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  function ViewEncoderDefaultModule$lambda$ObjectLiteral_15(requiresType_0, matchPriority_0) {
    ViewEncoder$BaseInterceptor.call(this, requiresType_0, matchPriority_0);
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral_15.prototype.matches_pehoxg$ = function (request) {
    return true;
  };
  function ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3() {
  }
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3.prototype.generate_11rb$ = function (dependency) {
    return text(dependency, 'No form generator found');
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoderDefaultModule$lambda$ObjectLiteral_15.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3();
  };
  ViewEncoderDefaultModule$lambda$ObjectLiteral_15.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewEncoder$BaseInterceptor]};
  var ViewEncoderDefaultModule;
  function groupingBy$ObjectLiteral_0(this$groupingBy, closure$keySelector) {
    this.this$groupingBy = this$groupingBy;
    this.closure$keySelector = closure$keySelector;
  }
  groupingBy$ObjectLiteral_0.prototype.sourceIterator = function () {
    return this.this$groupingBy.iterator();
  };
  groupingBy$ObjectLiteral_0.prototype.keyOf_11rb$ = function (element) {
    return this.closure$keySelector(element);
  };
  groupingBy$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Grouping]};
  function ViewEncoder() {
    ViewEncoder_instance = this;
    this.interceptors_0 = new AtomicReference(ViewEncoderDefaultModule);
  }
  function ViewEncoder$Interceptor() {
    ViewEncoder$Interceptor$Companion_getInstance();
  }
  Object.defineProperty(ViewEncoder$Interceptor.prototype, 'matchPriority', {get: function () {
    return kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
  }});
  ViewEncoder$Interceptor.prototype.compareTo_11rb$ = function (other) {
    return -Kotlin.compareTo(this.matchPriority, other.matchPriority) | 0;
  };
  ViewEncoder$Interceptor.prototype.matches_pehoxg$ = function (request) {
    return true;
  };
  function ViewEncoder$Interceptor$Companion() {
    ViewEncoder$Interceptor$Companion_instance = this;
  }
  ViewEncoder$Interceptor$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ViewEncoder$Interceptor$Companion_instance = null;
  function ViewEncoder$Interceptor$Companion_getInstance() {
    if (ViewEncoder$Interceptor$Companion_instance === null) {
      new ViewEncoder$Interceptor$Companion();
    }
    return ViewEncoder$Interceptor$Companion_instance;
  }
  ViewEncoder$Interceptor.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Interceptor', interfaces: [Comparable]};
  function ViewEncoder$BaseInterceptor(requiresType, matchPriority) {
    if (requiresType === void 0)
      requiresType = null;
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_33js70$_0 = requiresType;
    this.matchPriority_93x741$_0 = matchPriority;
  }
  Object.defineProperty(ViewEncoder$BaseInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_33js70$_0;
  }});
  Object.defineProperty(ViewEncoder$BaseInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_93x741$_0;
  }});
  ViewEncoder$BaseInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseInterceptor', interfaces: [ViewEncoder$Interceptor]};
  function ViewEncoder$BaseNotNullInterceptor(requiresType, matchPriority) {
    if (requiresType === void 0)
      requiresType = null;
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_xeu7ho$_0 = requiresType;
    this.matchPriority_pffnm9$_0 = matchPriority;
  }
  Object.defineProperty(ViewEncoder$BaseNotNullInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_xeu7ho$_0;
  }});
  Object.defineProperty(ViewEncoder$BaseNotNullInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_pffnm9$_0;
  }});
  ViewEncoder$BaseNotNullInterceptor.prototype.matchesNotNull_drbw33$ = function (request) {
    return true;
  };
  ViewEncoder$BaseNotNullInterceptor.prototype.matches_pehoxg$ = function (request) {
    var tmp$;
    return !request.type.isNullable ? this.matchesNotNull_drbw33$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE()) : false;
  };
  ViewEncoder$BaseNotNullInterceptor.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return this.generateNotNull_s28acq$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE());
  };
  ViewEncoder$BaseNotNullInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseNotNullInterceptor', interfaces: [ViewEncoder$Interceptor]};
  function ViewEncoder$BaseTypeInterceptor(requiresType, matchPriority) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_4nb7yu$_0 = requiresType;
    this.matchPriority_dwk9w9$_0 = matchPriority;
  }
  Object.defineProperty(ViewEncoder$BaseTypeInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_4nb7yu$_0;
  }});
  Object.defineProperty(ViewEncoder$BaseTypeInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_dwk9w9$_0;
  }});
  ViewEncoder$BaseTypeInterceptor.prototype.matchesTyped_4etnjl$ = function (request) {
    return true;
  };
  ViewEncoder$BaseTypeInterceptor.prototype.matches_pehoxg$ = function (request) {
    var tmp$;
    return !request.type.isNullable ? this.matchesTyped_4etnjl$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE()) : false;
  };
  ViewEncoder$BaseTypeInterceptor.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return this.generateTyped_w26cgp$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE());
  };
  ViewEncoder$BaseTypeInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseTypeInterceptor', interfaces: [ViewEncoder$Interceptor]};
  function ViewEncoder$BaseNullableTypeInterceptor(requiresType, matchPriority) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    this.requiresType_z6lg53$_0 = requiresType;
    this.matchPriority_9as1t2$_0 = matchPriority;
  }
  Object.defineProperty(ViewEncoder$BaseNullableTypeInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_z6lg53$_0;
  }});
  Object.defineProperty(ViewEncoder$BaseNullableTypeInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_9as1t2$_0;
  }});
  ViewEncoder$BaseNullableTypeInterceptor.prototype.matchesTyped_4etnjl$ = function (request) {
    return true;
  };
  ViewEncoder$BaseNullableTypeInterceptor.prototype.matches_pehoxg$ = function (request) {
    var tmp$;
    return this.matchesTyped_4etnjl$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE());
  };
  ViewEncoder$BaseNullableTypeInterceptor.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return this.generateTyped_w26cgp$(Kotlin.isType(tmp$ = request, DisplayRequest) ? tmp$ : throwCCE());
  };
  ViewEncoder$BaseNullableTypeInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseNullableTypeInterceptor', interfaces: [ViewEncoder$Interceptor]};
  function ViewEncoder$DefaultInterceptor(requiresType, matchPriority, matches, generate) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    if (matches === void 0)
      matches = ViewEncoder$ViewEncoder$DefaultInterceptor_init$lambda;
    this.requiresType_orojwk$_0 = requiresType;
    this.matchPriority_tf3hmv$_0 = matchPriority;
    this.matches = matches;
    this.generate = generate;
  }
  Object.defineProperty(ViewEncoder$DefaultInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_orojwk$_0;
  }});
  Object.defineProperty(ViewEncoder$DefaultInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_tf3hmv$_0;
  }});
  ViewEncoder$DefaultInterceptor.prototype.matches_pehoxg$ = function (request) {
    return this.matches(request);
  };
  ViewEncoder$DefaultInterceptor.prototype.generate_86u98z$ = function (request) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.generate(request), ViewGenerator) ? tmp$ : throwCCE();
  };
  function ViewEncoder$ViewEncoder$DefaultInterceptor_init$lambda(it) {
    return true;
  }
  ViewEncoder$DefaultInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultInterceptor', interfaces: [ViewEncoder$Interceptor]};
  ViewEncoder$DefaultInterceptor.prototype.component1 = function () {
    return this.requiresType;
  };
  ViewEncoder$DefaultInterceptor.prototype.component2 = function () {
    return this.matchPriority;
  };
  ViewEncoder$DefaultInterceptor.prototype.component3 = function () {
    return this.matches;
  };
  ViewEncoder$DefaultInterceptor.prototype.component4 = function () {
    return this.generate;
  };
  ViewEncoder$DefaultInterceptor.prototype.copy_fpcezl$ = function (requiresType, matchPriority, matches, generate) {
    return new ViewEncoder$DefaultInterceptor(requiresType === void 0 ? this.requiresType : requiresType, matchPriority === void 0 ? this.matchPriority : matchPriority, matches === void 0 ? this.matches : matches, generate === void 0 ? this.generate : generate);
  };
  ViewEncoder$DefaultInterceptor.prototype.toString = function () {
    return 'DefaultInterceptor(requiresType=' + Kotlin.toString(this.requiresType) + (', matchPriority=' + Kotlin.toString(this.matchPriority)) + (', matches=' + Kotlin.toString(this.matches)) + (', generate=' + Kotlin.toString(this.generate)) + ')';
  };
  ViewEncoder$DefaultInterceptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.requiresType) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchPriority) | 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.generate) | 0;
    return result;
  };
  ViewEncoder$DefaultInterceptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.requiresType, other.requiresType) && Kotlin.equals(this.matchPriority, other.matchPriority) && Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.generate, other.generate)))));
  };
  function ViewEncoder$DirectInterceptor(requiresType, matchPriority, matches, generate) {
    if (matchPriority === void 0)
      matchPriority = 0.0;
    if (matches === void 0)
      matches = ViewEncoder$ViewEncoder$DirectInterceptor_init$lambda;
    this.requiresType_umu00k$_0 = requiresType;
    this.matchPriority_acd9ux$_0 = matchPriority;
    this.matches = matches;
    this.generate = generate;
  }
  Object.defineProperty(ViewEncoder$DirectInterceptor.prototype, 'requiresType', {get: function () {
    return this.requiresType_umu00k$_0;
  }});
  Object.defineProperty(ViewEncoder$DirectInterceptor.prototype, 'matchPriority', {get: function () {
    return this.matchPriority_acd9ux$_0;
  }});
  ViewEncoder$DirectInterceptor.prototype.matches_pehoxg$ = function (request) {
    return this.matches(request);
  };
  function ViewEncoder$DirectInterceptor$generate$ObjectLiteral(this$DirectInterceptor, closure$request) {
    this.this$DirectInterceptor = this$DirectInterceptor;
    this.closure$request = closure$request;
  }
  ViewEncoder$DirectInterceptor$generate$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    var tmp$, tmp$_0;
    return (tmp$_0 = this.this$DirectInterceptor.generate(Kotlin.isType(tmp$ = dependency, ViewFactory) ? tmp$ : throwCCE(), this.closure$request)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  ViewEncoder$DirectInterceptor$generate$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewEncoder$DirectInterceptor.prototype.generate_86u98z$ = function (request) {
    return new ViewEncoder$DirectInterceptor$generate$ObjectLiteral(this, request);
  };
  function ViewEncoder$ViewEncoder$DirectInterceptor_init$lambda(it) {
    return true;
  }
  ViewEncoder$DirectInterceptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'DirectInterceptor', interfaces: [ViewEncoder$Interceptor]};
  ViewEncoder$DirectInterceptor.prototype.component1 = function () {
    return this.requiresType;
  };
  ViewEncoder$DirectInterceptor.prototype.component2 = function () {
    return this.matchPriority;
  };
  ViewEncoder$DirectInterceptor.prototype.component3 = function () {
    return this.matches;
  };
  ViewEncoder$DirectInterceptor.prototype.component4 = function () {
    return this.generate;
  };
  ViewEncoder$DirectInterceptor.prototype.copy_o8i12e$ = function (requiresType, matchPriority, matches, generate) {
    return new ViewEncoder$DirectInterceptor(requiresType === void 0 ? this.requiresType : requiresType, matchPriority === void 0 ? this.matchPriority : matchPriority, matches === void 0 ? this.matches : matches, generate === void 0 ? this.generate : generate);
  };
  ViewEncoder$DirectInterceptor.prototype.toString = function () {
    return 'DirectInterceptor(requiresType=' + Kotlin.toString(this.requiresType) + (', matchPriority=' + Kotlin.toString(this.matchPriority)) + (', matches=' + Kotlin.toString(this.matches)) + (', generate=' + Kotlin.toString(this.generate)) + ')';
  };
  ViewEncoder$DirectInterceptor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.requiresType) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchPriority) | 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.generate) | 0;
    return result;
  };
  ViewEncoder$DirectInterceptor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.requiresType, other.requiresType) && Kotlin.equals(this.matchPriority, other.matchPriority) && Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.generate, other.generate)))));
  };
  function ViewEncoder$Interceptors(byType, others) {
    if (byType === void 0)
      byType = HashMap_init();
    if (others === void 0)
      others = SortedBag();
    this.byType = byType;
    this.others = others;
  }
  ViewEncoder$Interceptors.prototype.plusAssign_dhk433$ = function (interceptor) {
    if (interceptor.requiresType != null) {
      var $receiver = this.byType;
      var key = ensureNotNull(interceptor.requiresType);
      var tmp$;
      var value = $receiver.get_11rb$(key);
      if (value == null) {
        var answer = SortedBag();
        $receiver.put_xwzc9p$(key, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      tmp$.add_11rb$(interceptor);
    }
     else {
      this.others.add_11rb$(interceptor);
    }
  };
  function ViewEncoder$Interceptors$resolve$lambda$lambda(closure$request) {
    return function (it) {
      return it.matches_pehoxg$(closure$request);
    };
  }
  function ViewEncoder$Interceptors$resolve$lambda(closure$request) {
    return function (it) {
      return it.matches_pehoxg$(closure$request);
    };
  }
  ViewEncoder$Interceptors.prototype.resolve_b5thdy$ = function (request) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.byType.get_11rb$(request.type.base.kClass)) != null ? firstOrNull_0(filter(asSequence_0(tmp$), ViewEncoder$Interceptors$resolve$lambda$lambda(request))) : null) != null ? tmp$_0 : firstOrNull_0(filter(asSequence_0(this.others), ViewEncoder$Interceptors$resolve$lambda(request)));
  };
  ViewEncoder$Interceptors.prototype.plus_82ctaa$ = function (other) {
    var $receiver = toMutableMap(this.byType);
    $receiver.putAll_a2k3zr$(other.byType);
    return new ViewEncoder$Interceptors($receiver, this.others.plus_6e5le9$(other.others));
  };
  ViewEncoder$Interceptors.$metadata$ = {kind: Kind_CLASS, simpleName: 'Interceptors', interfaces: []};
  function ViewEncoder$ViewEncoder$Interceptors_init(interceptors, $this) {
    $this = $this || Object.create(ViewEncoder$Interceptors.prototype);
    var $receiver = new groupingBy$ObjectLiteral_0(filter(asSequence_0(interceptors), ViewEncoder$ViewEncoder$Interceptors_init$lambda), ViewEncoder$ViewEncoder$Interceptors_init$lambda_0);
    var destination = HashMap_init();
    var tmp$;
    tmp$ = $receiver.sourceIterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = $receiver.keyOf_11rb$(e);
      var accumulator = destination.get_11rb$(key);
      var tmp$_0 = destination.put_xwzc9p$;
      accumulator == null && !destination.containsKey_11rb$(key);
      var a = accumulator != null ? accumulator : SortedBag();
      a.add_11rb$(e);
      tmp$_0.call(destination, key, a);
    }
    var $receiver_0 = filter(asSequence_0(interceptors), ViewEncoder$ViewEncoder$Interceptors_init$lambda_1);
    var tmp$_1;
    var accumulator_0 = SortedBag();
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var bag = accumulator_0;
      bag.add_11rb$(element);
      accumulator_0 = bag;
    }
    ViewEncoder$Interceptors.call($this, destination, accumulator_0);
    return $this;
  }
  function ViewEncoder$ViewEncoder$Interceptors_init$lambda(it) {
    return it.requiresType != null;
  }
  function ViewEncoder$ViewEncoder$Interceptors_init$lambda_0(it) {
    return ensureNotNull(it.requiresType);
  }
  function ViewEncoder$ViewEncoder$Interceptors_init$lambda_1(it) {
    return it.requiresType == null;
  }
  ViewEncoder.prototype.register_82ctaa$ = function (interceptors) {
    var start = this.interceptors_0.value;
    var new_0 = start.plus_82ctaa$(interceptors);
    while (!equals(start, this.interceptors_0.value)) {
      start = this.interceptors_0.value;
      new_0 = start.plus_82ctaa$(interceptors);
    }
    this.interceptors_0.value = new_0;
  };
  ViewEncoder.prototype.getViewGenerator_86u98z$ = function (request) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.interceptors_0.value.resolve_b5thdy$(request)) != null ? tmp$.generate_86u98z$(request) : null;
    if (tmp$_0 == null) {
      throw IllegalArgumentException_init_0('No matching ViewGenerator was found.');
    }
    return tmp$_0;
  };
  ViewEncoder.prototype.getAnyViewGenerator_pehoxg$ = function (request) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.interceptors_0.value.resolve_b5thdy$(request)) != null ? tmp$.generate_86u98z$(request) : null;
    if (tmp$_0 == null) {
      throw IllegalArgumentException_init_0('No matching ViewGenerator was found.');
    }
    return tmp$_0;
  };
  ViewEncoder.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ViewEncoder', interfaces: []};
  var ViewEncoder_instance = null;
  function ViewEncoder_getInstance() {
    if (ViewEncoder_instance === null) {
      new ViewEncoder();
    }
    return ViewEncoder_instance;
  }
  function ViewSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ViewSize_initFields() {
    ViewSize_initFields = function () {
    };
    ViewSize$OneLine_instance = new ViewSize('OneLine', 0);
    ViewSize$Summary_instance = new ViewSize('Summary', 1);
    ViewSize$Full_instance = new ViewSize('Full', 2);
    ViewSize$Companion_getInstance();
  }
  var ViewSize$OneLine_instance;
  function ViewSize$OneLine_getInstance() {
    ViewSize_initFields();
    return ViewSize$OneLine_instance;
  }
  var ViewSize$Summary_instance;
  function ViewSize$Summary_getInstance() {
    ViewSize_initFields();
    return ViewSize$Summary_instance;
  }
  var ViewSize$Full_instance;
  function ViewSize$Full_getInstance() {
    ViewSize_initFields();
    return ViewSize$Full_instance;
  }
  ViewSize.prototype.shrink = function () {
    var it = coerceIn(this.ordinal - 1 | 0, get_indices(ViewSize$values()));
    return ViewSize$values()[it];
  };
  ViewSize.prototype.grow = function () {
    var it = coerceIn(this.ordinal + 1 | 0, get_indices(ViewSize$values()));
    return ViewSize$values()[it];
  };
  function ViewSize$Companion() {
    ViewSize$Companion_instance = this;
    this.values = toList_1(ViewSize$values());
  }
  ViewSize$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ViewSize$Companion_instance = null;
  function ViewSize$Companion_getInstance() {
    ViewSize_initFields();
    if (ViewSize$Companion_instance === null) {
      new ViewSize$Companion();
    }
    return ViewSize$Companion_instance;
  }
  Object.defineProperty(ViewSize.prototype, 'bigger', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(ViewSize$Companion_getInstance().values, ViewSize$Companion_getInstance().values.indexOf_11rb$(this) + 1 | 0)) != null ? tmp$ : ViewSize$Full_getInstance();
  }});
  Object.defineProperty(ViewSize.prototype, 'smaller', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(ViewSize$Companion_getInstance().values, ViewSize$Companion_getInstance().values.indexOf_11rb$(this) - 1 | 0)) != null ? tmp$ : ViewSize$OneLine_getInstance();
  }});
  ViewSize.prototype.textSize = function () {
    switch (this.name) {
      case 'Full':
        return TextSize.Subheader;
      case 'Summary':
        return TextSize.Body;
      case 'OneLine':
        return TextSize.Body;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  ViewSize.prototype.maxLines = function () {
    switch (this.name) {
      case 'Full':
        return 2147483647;
      case 'Summary':
        return 3;
      case 'OneLine':
        return 1;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  ViewSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'ViewSize', interfaces: [Enum]};
  function ViewSize$values() {
    return [ViewSize$OneLine_getInstance(), ViewSize$Summary_getInstance(), ViewSize$Full_getInstance()];
  }
  ViewSize.values = ViewSize$values;
  function ViewSize$valueOf(name) {
    switch (name) {
      case 'OneLine':
        return ViewSize$OneLine_getInstance();
      case 'Summary':
        return ViewSize$Summary_getInstance();
      case 'Full':
        return ViewSize$Full_getInstance();
      default:throwISE('No enum constant com.lightningkite.mirror.form.ViewSize.' + name);
    }
  }
  ViewSize.valueOf_61zpoe$ = ViewSize$valueOf;
  var ViewSize2$Companion_instance = null;
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$mirror = package$lightningkite.mirror || (package$lightningkite.mirror = {});
  var package$form = package$mirror.form || (package$mirror.form = {});
  package$form.CommonRequest = CommonRequest;
  package$form.DisplayRequest = DisplayRequest;
  package$form.display_ux8nz5$ = display_0;
  package$form.DisplayViewGenerator_ojw6d8$ = DisplayViewGenerator;
  package$form.PartFormViewGenerator_cgu01m$ = PartFormViewGenerator;
  var package$form_0 = package$form.form || (package$form.form = {});
  package$form_0.BackedByStringFormViewGenerator = BackedByStringFormViewGenerator;
  package$form_0.CardFormViewGenerator = CardFormViewGenerator;
  package$form_0.FormViewGenerator = FormViewGenerator;
  package$form_0.FormViewGenerator_9kxwyn$ = FormViewGenerator_0;
  package$form_0.ListFormViewGenerator = ListFormViewGenerator;
  package$form_0.debugPrint_gj42ue$ = debugPrint;
  package$form_0.LiveListFormViewGenerator = LiveListFormViewGenerator;
  package$form.NullableForm = NullableForm;
  package$form_0.NumberFormViewGenerator = NumberFormViewGenerator;
  PairFormViewGenerator.Form = PairFormViewGenerator$Form;
  package$form_0.PairFormViewGenerator = PairFormViewGenerator;
  PartForm.PartProperty = PartForm$PartProperty;
  package$form.PartForm = PartForm;
  package$form.PolymorphicForm = PolymorphicForm;
  package$form_0.PolymorphicFormViewGenerator = PolymorphicFormViewGenerator;
  ReflectiveFormViewGenerator.ReflectiveForm = ReflectiveFormViewGenerator$ReflectiveForm;
  ReflectiveFormViewGenerator.Part = ReflectiveFormViewGenerator$Part;
  package$form_0.ReflectiveFormViewGenerator = ReflectiveFormViewGenerator;
  package$form.ValidatingForm = ValidatingForm;
  var package$info = package$form.info || (package$form.info = {});
  package$info.get_numberInputType_ougg7l$ = get_numberInputType;
  FormEncoder.prototype.BaseNullableTypeInterceptor = FormEncoder$BaseNullableTypeInterceptor;
  package$form.perfect_rfhehj$ = perfect;
  package$form.perfectNonNull_rfhehj$ = perfectNonNull;
  package$form.perfectNullable_kwyt81$ = perfectNullable;
  Object.defineProperty(FormEncoder$Interceptor, 'Companion', {get: FormEncoder$Interceptor$Companion_getInstance});
  FormEncoder.prototype.Interceptor = FormEncoder$Interceptor;
  FormEncoder.prototype.BaseInterceptor = FormEncoder$BaseInterceptor;
  FormEncoder.prototype.BaseTypeInterceptor = FormEncoder$BaseTypeInterceptor;
  FormEncoder.prototype.DefaultInterceptor = FormEncoder$DefaultInterceptor;
  FormEncoder.prototype.TypeInterceptor = FormEncoder$TypeInterceptor;
  FormEncoder.prototype.Interceptors_init_nwx6xj$ = FormEncoder$FormEncoder$Interceptors_init;
  FormEncoder.prototype.Interceptors = FormEncoder$Interceptors;
  Object.defineProperty(package$form, 'FormEncoder', {get: FormEncoder_getInstance});
  package$form.FormRequest = FormRequest;
  FormState.Success = FormState$Success;
  FormState.Invalid = FormState$Invalid;
  Object.defineProperty(FormState, 'Empty', {get: FormState$Empty_getInstance});
  package$form.FormState = FormState;
  Object.defineProperty(FormState, 'Companion', {get: FormState$Companion_getInstance});
  package$form.GeneralRequest = GeneralRequest;
  package$info.FormEditOnly = FormEditOnly;
  package$info.FormViewOnly = FormViewOnly;
  package$info.FormHidden = FormHidden;
  package$info.FormNeedsNoContext = FormNeedsNoContext;
  package$info.get_needsNoContext_ougg7l$ = get_needsNoContext;
  package$info.FormTextInputType = FormTextInputType;
  package$info.get_textInputType_ougg7l$ = get_textInputType;
  package$info.humanify_pdl1vz$ = humanify;
  var package$other = package$form.other || (package$form.other = {});
  package$other.DatabaseVG = DatabaseVG;
  package$form.includedInForm_c84c4h$ = includedInForm;
  package$form.pickDisplayFields_m36jw0$ = pickDisplayFields;
  var package$view = package$form.view || (package$form.view = {});
  package$view.ListSummaryViewGenerator = ListSummaryViewGenerator;
  package$view.ListViewGenerator = ListViewGenerator;
  package$view.PairSingleLineViewGenerator = PairSingleLineViewGenerator;
  package$view.PairViewGenerator = PairViewGenerator;
  package$view.ReflectiveSummaryViewGenerator = ReflectiveSummaryViewGenerator;
  package$view.ReflectiveViewGenerator = ReflectiveViewGenerator;
  package$view.StringViewGenerator = StringViewGenerator;
  Object.defineProperty(ViewEncoder$Interceptor, 'Companion', {get: ViewEncoder$Interceptor$Companion_getInstance});
  ViewEncoder.prototype.Interceptor = ViewEncoder$Interceptor;
  ViewEncoder.prototype.BaseInterceptor = ViewEncoder$BaseInterceptor;
  ViewEncoder.prototype.BaseNotNullInterceptor = ViewEncoder$BaseNotNullInterceptor;
  ViewEncoder.prototype.BaseTypeInterceptor = ViewEncoder$BaseTypeInterceptor;
  ViewEncoder.prototype.BaseNullableTypeInterceptor = ViewEncoder$BaseNullableTypeInterceptor;
  ViewEncoder.prototype.DefaultInterceptor = ViewEncoder$DefaultInterceptor;
  ViewEncoder.prototype.DirectInterceptor = ViewEncoder$DirectInterceptor;
  ViewEncoder.prototype.Interceptors_init_n22m0$ = ViewEncoder$ViewEncoder$Interceptors_init;
  ViewEncoder.prototype.Interceptors = ViewEncoder$Interceptors;
  Object.defineProperty(package$form, 'ViewEncoder', {get: ViewEncoder_getInstance});
  Object.defineProperty(ViewSize, 'OneLine', {get: ViewSize$OneLine_getInstance});
  Object.defineProperty(ViewSize, 'Summary', {get: ViewSize$Summary_getInstance});
  Object.defineProperty(ViewSize, 'Full', {get: ViewSize$Full_getInstance});
  Object.defineProperty(ViewSize, 'Companion', {get: ViewSize$Companion_getInstance});
  package$form.ViewSize = ViewSize;
  Object.defineProperty(BackedByStringFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  BackedByStringFormViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(CardFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  CardFormViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ListFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  Object.defineProperty(LiveListFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  Object.defineProperty(NumberFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  NumberFormViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(PairFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  PairFormViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  PartForm$PartProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  PartForm$PartProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  Object.defineProperty(PolymorphicFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  Object.defineProperty(ReflectiveFormViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ReflectiveFormViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  FormEncoder$BaseNullableTypeInterceptor.prototype.compareTo_11rb$ = FormEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  FormEncoder$BaseTypeInterceptor.prototype.compareTo_11rb$ = FormEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_1.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_2.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_3.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_4.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_5.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_6.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_7.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  FormEncoder$BaseInterceptor.prototype.compareTo_11rb$ = FormEncoder$Interceptor.prototype.compareTo_11rb$;
  FormEncoder$BaseInterceptor.prototype.matches_xazhhs$ = FormEncoder$Interceptor.prototype.matches_xazhhs$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_8.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_9.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral$generate$lambda$lambda$lambda$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  FormEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  FormEncoder$DefaultInterceptor.prototype.compareTo_11rb$ = FormEncoder$Interceptor.prototype.compareTo_11rb$;
  FormEncoder$TypeInterceptor.prototype.compareTo_11rb$ = FormEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(ListSummaryViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ListSummaryViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ListViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ListViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(PairSingleLineViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  PairSingleLineViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(PairViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  PairViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ReflectiveSummaryViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ReflectiveSummaryViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ReflectiveViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ReflectiveViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(StringViewGenerator.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  StringViewGenerator.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  ViewEncoder$BaseInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  ViewEncoder$BaseInterceptor.prototype.matches_pehoxg$ = ViewEncoder$Interceptor.prototype.matches_pehoxg$;
  ViewEncoder$BaseTypeInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  ViewEncoder$BaseNullableTypeInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generateTyped$ObjectLiteral_0.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_0.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  ViewEncoder$BaseNotNullInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_1.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_2.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoderDefaultModule$lambda$ObjectLiteral$generate$ObjectLiteral_3.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  ViewEncoder$DefaultInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  Object.defineProperty(ViewEncoder$DirectInterceptor$generate$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewEncoder$DirectInterceptor$generate$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  ViewEncoder$DirectInterceptor.prototype.compareTo_11rb$ = ViewEncoder$Interceptor.prototype.compareTo_11rb$;
  var $receiver = new FormEncoder$Interceptors();
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toByte', function ($receiver) {
    return numberToByte($receiver);
  }), NumberInputType.Integer, 0, getKClass(Byte)));
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toShort', function ($receiver) {
    return numberToShort($receiver);
  }), NumberInputType.Integer, 0, getKClass(Byte)));
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toInt', function ($receiver) {
    return numberToInt($receiver);
  }), NumberInputType.Integer, 0, getKClass(Byte)));
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toLong', function ($receiver) {
    return numberToLong($receiver);
  }), NumberInputType.Integer, 0, getKClass(Long)));
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toFloat', function ($receiver) {
    return numberToDouble($receiver);
  }), NumberInputType.Float, 4, getKClass(Byte)));
  $receiver.plusAssign_5v2gj2$(new number$ObjectLiteral(getCallableRef('toDouble', function ($receiver) {
    return numberToDouble($receiver);
  }), NumberInputType.Float, 4, getKClass(Byte)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_0(PrimitiveClasses$booleanClass));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_1(PrimitiveClasses$stringClass));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_2(getKClass(Char)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_3(getKClass(Uri)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_4(getKClass(Email)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_5(getKClass(Date_0)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_6(getKClass(Time)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_7(getKClass(DateTime)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_8(getKClass(TimeStamp)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_9(getKClass(Uuid)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_10(getKClass(Pair)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_11(getKClass(List)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_12(getKClass(Reference)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_13(void 0, 1.0));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_14(getKClass(MirrorClass$Field)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_15(getKClass(MirrorClass)));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_16(void 0, 0.9));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_17(void 0, 0.1));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_18(void 0, 0.0));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_19(void 0, 0.0));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_20(void 0, 0.0));
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_21());
  $receiver.plusAssign_5v2gj2$(new FormEncoderDefaultModule$lambda$ObjectLiteral_22(void 0, kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY));
  FormEncoderDefaultModule = $receiver;
  var $receiver_0 = new ViewEncoder$Interceptors();
  var string_0 = ViewEncoderDefaultModule$lambda$string($receiver_0);
  string_0(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor));
  string_0(PrimitiveClasses$booleanClass);
  string_0(PrimitiveClasses$byteClass);
  string_0(PrimitiveClasses$shortClass);
  string_0(PrimitiveClasses$intClass);
  string_0(getKClass(Long));
  string_0(PrimitiveClasses$floatClass);
  string_0(PrimitiveClasses$doubleClass);
  string_0(getKClass(Char));
  string_0(PrimitiveClasses$stringClass);
  string_0(getKClass(Uuid));
  string_0(getKClass(Date_0), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda);
  string_0(getKClass(DateTime), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_0);
  string_0(getKClass(Time), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_1);
  string_0(getKClass(TimeStamp), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_2);
  string_0(getKClass(KClass), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_3);
  string_0(getKClass(MirrorType), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_4);
  string_0(getKClass(MirrorClass), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_5);
  string_0(getKClass(MirrorClass$Field), void 0, void 0, ViewEncoderDefaultModule$lambda$lambda_6);
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral(getKClass(Pair)));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_0(getKClass(Pair)));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_1(getKClass(List)));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_2(getKClass(List)));
  var tmp$;
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_3(Kotlin.isType(tmp$ = getKClass(Map), KClass) ? tmp$ : throwCCE()));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_4(getKClass(Reference)));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_5(getKClass(Reference)));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_6(void 0, 0.1));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_7(void 0, -1.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_8(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_9(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_10(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_11(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_12(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_13(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_14(void 0, 0.0));
  $receiver_0.plusAssign_dhk433$(new ViewEncoderDefaultModule$lambda$ObjectLiteral_15(void 0, kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY));
  ViewEncoderDefaultModule = $receiver_0;
  return _;
}));

//# sourceMappingURL=mirror-form.js.map
