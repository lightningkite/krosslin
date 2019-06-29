(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'reacktive', 'recktangle', 'kommon', 'kotlinx-coroutines-core', 'lokalize'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('reacktive'), require('recktangle'), require('kommon'), require('kotlinx-coroutines-core'), require('lokalize'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'koolui'.");
    }
    if (typeof reacktive === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'reacktive' was not found. Please, check whether 'reacktive' is loaded prior to 'koolui'.");
    }
    if (typeof recktangle === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'recktangle' was not found. Please, check whether 'recktangle' is loaded prior to 'koolui'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'koolui'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'koolui'.");
    }
    if (typeof lokalize === 'undefined') {
      throw new Error("Error loading module 'koolui'. Its dependency 'lokalize' was not found. Please, check whether 'lokalize' is loaded prior to 'koolui'.");
    }
    root.koolui = factory(typeof koolui === 'undefined' ? {} : koolui, kotlin, reacktive, recktangle, kommon, this['kotlinx-coroutines-core'], lokalize);
  }
}(this, function (_, Kotlin, $module$reacktive, $module$recktangle, $module$kommon, $module$kotlinx_coroutines_core, $module$lokalize) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var to = Kotlin.kotlin.to_ujzrz7$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ConstantObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.ConstantObservableProperty;
  var Point = $module$recktangle.com.lightningkite.recktangle.Point;
  var throwCCE = Kotlin.throwCCE;
  var transform = $module$reacktive.com.lightningkite.reacktive.property.transform_9a5tou$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_wj6e7o$;
  var Angle = $module$recktangle.com.lightningkite.recktangle.Angle;
  var toString = Kotlin.kotlin.text.toString_k13f4a$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  var Math_0 = Math;
  var UInt_init = Kotlin.kotlin.UInt;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var math = Kotlin.kotlin.math;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_8cymmc$;
  var StandardObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.StandardObservableProperty;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Any = Object;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var CombineObservableProperty2 = $module$reacktive.com.lightningkite.reacktive.property.CombineObservableProperty2;
  var pop = $module$kommon.com.lightningkite.kommon.collection.pop_vvxzk3$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var lastOrNullObservable = $module$reacktive.com.lightningkite.reacktive.list.lastOrNullObservable_lp48kg$;
  var reset = $module$kommon.com.lightningkite.kommon.collection.reset_dwdffb$;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var invokeAll = $module$reacktive.com.lightningkite.reacktive.invokeAll_jir4c1$;
  var ObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.ObservableProperty;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var listen = $module$reacktive.com.lightningkite.reacktive.property.lifecycle.listen_g5q2cn$;
  var toList_0 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toString_0 = Kotlin.toString;
  var throwUPAE = Kotlin.throwUPAE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var replace_0 = Kotlin.kotlin.text.replace_r2fvfm$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var WeakHashMap = $module$kommon.com.lightningkite.kommon.collection.WeakHashMap;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var bind = $module$reacktive.com.lightningkite.reacktive.property.lifecycle.bind_g5q2cn$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var numberToDouble = Kotlin.numberToDouble;
  var Date_0 = $module$lokalize.com.lightningkite.lokalize.time.Date;
  var transform_0 = $module$reacktive.com.lightningkite.reacktive.property.transform_s3zdp9$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Time_init = $module$lokalize.com.lightningkite.lokalize.time.Time_init_tjonv8$;
  var Time = $module$lokalize.com.lightningkite.lokalize.time.Time;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  Animation.prototype = Object.create(Enum.prototype);
  Animation.prototype.constructor = Animation;
  Importance.prototype = Object.create(Enum.prototype);
  Importance.prototype.constructor = Importance;
  NumberInputType.prototype = Object.create(Enum.prototype);
  NumberInputType.prototype.constructor = NumberInputType;
  TextInputType.prototype = Object.create(Enum.prototype);
  TextInputType.prototype.constructor = TextInputType;
  TextSize.prototype = Object.create(Enum.prototype);
  TextSize.prototype.constructor = TextSize;
  Align.prototype = Object.create(Enum.prototype);
  Align.prototype.constructor = Align;
  AlignPair.prototype = Object.create(Enum.prototype);
  AlignPair.prototype.constructor = AlignPair;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  ImageScaleType.prototype = Object.create(Enum.prototype);
  ImageScaleType.prototype.constructor = ImageScaleType;
  MaterialIcon.prototype = Object.create(Enum.prototype);
  MaterialIcon.prototype.constructor = MaterialIcon;
  function LinearBuilder() {
    this.$delegate_qp5p2h$_0 = ArrayList_init();
    this.defaultAlign = Align$Fill_getInstance();
  }
  LinearBuilder.prototype.unaryMinus_wijs$ = function ($receiver) {
    this.add_11rb$(to(new LinearPlacement(0.0, this.defaultAlign), $receiver));
  };
  LinearBuilder.prototype.unaryPlus_wijs$ = function ($receiver) {
    this.add_11rb$(to(new LinearPlacement(1.0, this.defaultAlign), $receiver));
  };
  Object.defineProperty(LinearBuilder.prototype, 'size', {get: function () {
    return this.$delegate_qp5p2h$_0.size;
  }});
  LinearBuilder.prototype.add_wxm5ur$ = function (index, element) {
    return this.$delegate_qp5p2h$_0.add_wxm5ur$(index, element);
  };
  LinearBuilder.prototype.add_11rb$ = function (element) {
    return this.$delegate_qp5p2h$_0.add_11rb$(element);
  };
  LinearBuilder.prototype.addAll_u57x28$ = function (index, elements) {
    return this.$delegate_qp5p2h$_0.addAll_u57x28$(index, elements);
  };
  LinearBuilder.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_qp5p2h$_0.addAll_brywnq$(elements);
  };
  LinearBuilder.prototype.clear = function () {
    return this.$delegate_qp5p2h$_0.clear();
  };
  LinearBuilder.prototype.contains_11rb$ = function (element) {
    return this.$delegate_qp5p2h$_0.contains_11rb$(element);
  };
  LinearBuilder.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_qp5p2h$_0.containsAll_brywnq$(elements);
  };
  LinearBuilder.prototype.get_za3lpa$ = function (index) {
    return this.$delegate_qp5p2h$_0.get_za3lpa$(index);
  };
  LinearBuilder.prototype.indexOf_11rb$ = function (element) {
    return this.$delegate_qp5p2h$_0.indexOf_11rb$(element);
  };
  LinearBuilder.prototype.isEmpty = function () {
    return this.$delegate_qp5p2h$_0.isEmpty();
  };
  LinearBuilder.prototype.iterator = function () {
    return this.$delegate_qp5p2h$_0.iterator();
  };
  LinearBuilder.prototype.lastIndexOf_11rb$ = function (element) {
    return this.$delegate_qp5p2h$_0.lastIndexOf_11rb$(element);
  };
  LinearBuilder.prototype.listIterator = function () {
    return this.$delegate_qp5p2h$_0.listIterator();
  };
  LinearBuilder.prototype.listIterator_za3lpa$ = function (index) {
    return this.$delegate_qp5p2h$_0.listIterator_za3lpa$(index);
  };
  LinearBuilder.prototype.remove_11rb$ = function (element) {
    return this.$delegate_qp5p2h$_0.remove_11rb$(element);
  };
  LinearBuilder.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_qp5p2h$_0.removeAll_brywnq$(elements);
  };
  LinearBuilder.prototype.removeAt_za3lpa$ = function (index) {
    return this.$delegate_qp5p2h$_0.removeAt_za3lpa$(index);
  };
  LinearBuilder.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_qp5p2h$_0.retainAll_brywnq$(elements);
  };
  LinearBuilder.prototype.set_wxm5ur$ = function (index, element) {
    return this.$delegate_qp5p2h$_0.set_wxm5ur$(index, element);
  };
  LinearBuilder.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.$delegate_qp5p2h$_0.subList_vux9f0$(fromIndex, toIndex);
  };
  LinearBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinearBuilder', interfaces: [MutableList]};
  function horizontal($receiver, setup) {
    var list = new LinearBuilder();
    setup(list);
    return $receiver.horizontal_ghkj0i$(copyToArray(list).slice());
  }
  function vertical($receiver, setup) {
    var list = new LinearBuilder();
    setup(list);
    return $receiver.vertical_ghkj0i$(copyToArray(list).slice());
  }
  function AlignPairBuilder() {
    this.$delegate_texxsr$_0 = ArrayList_init();
    this.defaultAlign = Align$Fill_getInstance();
  }
  AlignPairBuilder.prototype.plus_e435o2$ = function ($receiver, view) {
    this.add_11rb$(to($receiver, view));
  };
  AlignPairBuilder.prototype.minus_e435o2$ = function ($receiver, view) {
    this.add_11rb$(to($receiver, view));
  };
  Object.defineProperty(AlignPairBuilder.prototype, 'size', {get: function () {
    return this.$delegate_texxsr$_0.size;
  }});
  AlignPairBuilder.prototype.add_wxm5ur$ = function (index, element) {
    return this.$delegate_texxsr$_0.add_wxm5ur$(index, element);
  };
  AlignPairBuilder.prototype.add_11rb$ = function (element) {
    return this.$delegate_texxsr$_0.add_11rb$(element);
  };
  AlignPairBuilder.prototype.addAll_u57x28$ = function (index, elements) {
    return this.$delegate_texxsr$_0.addAll_u57x28$(index, elements);
  };
  AlignPairBuilder.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_texxsr$_0.addAll_brywnq$(elements);
  };
  AlignPairBuilder.prototype.clear = function () {
    return this.$delegate_texxsr$_0.clear();
  };
  AlignPairBuilder.prototype.contains_11rb$ = function (element) {
    return this.$delegate_texxsr$_0.contains_11rb$(element);
  };
  AlignPairBuilder.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_texxsr$_0.containsAll_brywnq$(elements);
  };
  AlignPairBuilder.prototype.get_za3lpa$ = function (index) {
    return this.$delegate_texxsr$_0.get_za3lpa$(index);
  };
  AlignPairBuilder.prototype.indexOf_11rb$ = function (element) {
    return this.$delegate_texxsr$_0.indexOf_11rb$(element);
  };
  AlignPairBuilder.prototype.isEmpty = function () {
    return this.$delegate_texxsr$_0.isEmpty();
  };
  AlignPairBuilder.prototype.iterator = function () {
    return this.$delegate_texxsr$_0.iterator();
  };
  AlignPairBuilder.prototype.lastIndexOf_11rb$ = function (element) {
    return this.$delegate_texxsr$_0.lastIndexOf_11rb$(element);
  };
  AlignPairBuilder.prototype.listIterator = function () {
    return this.$delegate_texxsr$_0.listIterator();
  };
  AlignPairBuilder.prototype.listIterator_za3lpa$ = function (index) {
    return this.$delegate_texxsr$_0.listIterator_za3lpa$(index);
  };
  AlignPairBuilder.prototype.remove_11rb$ = function (element) {
    return this.$delegate_texxsr$_0.remove_11rb$(element);
  };
  AlignPairBuilder.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_texxsr$_0.removeAll_brywnq$(elements);
  };
  AlignPairBuilder.prototype.removeAt_za3lpa$ = function (index) {
    return this.$delegate_texxsr$_0.removeAt_za3lpa$(index);
  };
  AlignPairBuilder.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_texxsr$_0.retainAll_brywnq$(elements);
  };
  AlignPairBuilder.prototype.set_wxm5ur$ = function (index, element) {
    return this.$delegate_texxsr$_0.set_wxm5ur$(index, element);
  };
  AlignPairBuilder.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.$delegate_texxsr$_0.subList_vux9f0$(fromIndex, toIndex);
  };
  AlignPairBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlignPairBuilder', interfaces: [MutableList]};
  function align($receiver, setup) {
    var list = new AlignPairBuilder();
    setup(list);
    return $receiver.align_iq5na7$(copyToArray(list).slice());
  }
  function text($receiver, text, size, align, importance, maxLines) {
    if (size === void 0)
      size = TextSize$Body_getInstance();
    if (align === void 0)
      align = AlignPair$CenterLeft_getInstance();
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    if (maxLines === void 0)
      maxLines = 2147483647;
    return $receiver.text_30kv5x$(new ConstantObservableProperty(text), importance, size, align, maxLines);
  }
  function image($receiver, imageWithSizing) {
    return $receiver.image_1bxa88$(new ConstantObservableProperty(imageWithSizing));
  }
  function space($receiver, size) {
    return $receiver.space_oljqke$(new Point(size, size));
  }
  function button($receiver, label, imageWithSizing, importance, onClick) {
    if (imageWithSizing === void 0)
      imageWithSizing = null;
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    return $receiver.button_tmzrmh$(new ConstantObservableProperty(label), new ConstantObservableProperty(imageWithSizing), importance, onClick);
  }
  function imageButton($receiver, imageWithSizing, label, importance, onClick) {
    if (label === void 0)
      label = null;
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    var tmp$;
    tmp$ = new ConstantObservableProperty(label);
    return $receiver.imageButton_aba7xb$(new ConstantObservableProperty(imageWithSizing), tmp$, importance, onClick);
  }
  function pagesEmbedded$lambda$ObjectLiteral() {
  }
  function launchConfirmationDialog$lambda() {
    return Unit;
  }
  function launchConfirmationDialog$lambda_0(closure$approved, closure$onConfirm, closure$onCancel) {
    return function () {
      if (closure$approved.v)
        closure$onConfirm();
      else
        closure$onCancel();
      return Unit;
    };
  }
  function launchConfirmationDialog$lambda$lambda$lambda$lambda(closure$approved, closure$dismiss) {
    return function () {
      closure$approved.v = false;
      closure$dismiss();
      return Unit;
    };
  }
  function launchConfirmationDialog$lambda$lambda$lambda$lambda_0(closure$approved, closure$dismiss) {
    return function () {
      closure$approved.v = true;
      closure$dismiss();
      return Unit;
    };
  }
  function launchConfirmationDialog$lambda$lambda$lambda(this$launchConfirmationDialog, closure$approved, closure$dismiss) {
    return function ($receiver) {
      $receiver.unaryPlus_wijs$(space(this$launchConfirmationDialog, 1.0));
      $receiver.unaryMinus_wijs$(button(this$launchConfirmationDialog, 'Cancel', void 0, void 0, launchConfirmationDialog$lambda$lambda$lambda$lambda(closure$approved, closure$dismiss)));
      $receiver.unaryMinus_wijs$(button(this$launchConfirmationDialog, 'OK', void 0, void 0, launchConfirmationDialog$lambda$lambda$lambda$lambda_0(closure$approved, closure$dismiss)));
      return Unit;
    };
  }
  function launchConfirmationDialog$lambda$lambda(closure$title, this$launchConfirmationDialog, closure$message, closure$approved, closure$dismiss) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(text(this$launchConfirmationDialog, closure$title, TextSize$Header_getInstance()));
      $receiver.unaryMinus_wijs$(text(this$launchConfirmationDialog, closure$message));
      $receiver.unaryMinus_wijs$(horizontal(this$launchConfirmationDialog, launchConfirmationDialog$lambda$lambda$lambda(this$launchConfirmationDialog, closure$approved, closure$dismiss)));
      return Unit;
    };
  }
  function launchConfirmationDialog$lambda_1(closure$title, this$launchConfirmationDialog, closure$message, closure$approved) {
    return function (dismiss) {
      return this$launchConfirmationDialog.card_11rb$(this$launchConfirmationDialog.scrollVertical_9vpp9p$(vertical(this$launchConfirmationDialog, launchConfirmationDialog$lambda$lambda(closure$title, this$launchConfirmationDialog, closure$message, closure$approved, dismiss))));
    };
  }
  function launchConfirmationDialog($receiver, title, message, onCancel, onConfirm) {
    if (title === void 0)
      title = '';
    if (message === void 0)
      message = 'Are you sure you want to do this?';
    if (onCancel === void 0)
      onCancel = launchConfirmationDialog$lambda;
    var approved = {v: false};
    $receiver.launchDialog_y4kujy$(true, launchConfirmationDialog$lambda_0(approved, onConfirm, onCancel), launchConfirmationDialog$lambda_1(title, $receiver, message, approved));
  }
  function launchInfoDialog$lambda() {
    return Unit;
  }
  function launchInfoDialog$lambda$lambda$lambda$lambda(closure$dismiss) {
    return function () {
      closure$dismiss();
      return Unit;
    };
  }
  function launchInfoDialog$lambda$lambda$lambda(this$launchInfoDialog, closure$dismiss) {
    return function ($receiver) {
      $receiver.unaryPlus_wijs$(space(this$launchInfoDialog, 1.0));
      $receiver.unaryMinus_wijs$(button(this$launchInfoDialog, 'OK', void 0, void 0, launchInfoDialog$lambda$lambda$lambda$lambda(closure$dismiss)));
      return Unit;
    };
  }
  function launchInfoDialog$lambda$lambda(closure$title, this$launchInfoDialog, closure$message, closure$dismiss) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(text(this$launchInfoDialog, closure$title, TextSize$Header_getInstance()));
      $receiver.unaryMinus_wijs$(text(this$launchInfoDialog, closure$message));
      $receiver.unaryMinus_wijs$(horizontal(this$launchInfoDialog, launchInfoDialog$lambda$lambda$lambda(this$launchInfoDialog, closure$dismiss)));
      return Unit;
    };
  }
  function launchInfoDialog$lambda_0(closure$title, this$launchInfoDialog, closure$message) {
    return function (dismiss) {
      return this$launchInfoDialog.card_11rb$(this$launchInfoDialog.margin_ovmznb$(this$launchInfoDialog.scrollVertical_9vpp9p$(vertical(this$launchInfoDialog, launchInfoDialog$lambda$lambda(closure$title, this$launchInfoDialog, closure$message, dismiss))), 8.0));
    };
  }
  function launchInfoDialog($receiver, title, message, onDismiss) {
    if (onDismiss === void 0)
      onDismiss = launchInfoDialog$lambda;
    $receiver.launchDialog_y4kujy$(true, onDismiss, launchInfoDialog$lambda_0(title, $receiver, message));
  }
  function contentRoot($receiver, viewGenerator) {
    return $receiver.contentRoot_11rb$(viewGenerator.generate_11rb$($receiver));
  }
  function Color(alpha, red, green, blue) {
    Color$Companion_getInstance();
    if (alpha === void 0)
      alpha = 0.0;
    if (red === void 0)
      red = 0.0;
    if (green === void 0)
      green = 0.0;
    if (blue === void 0)
      blue = 0.0;
    this.alpha = alpha;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  Color.prototype.toInt = function () {
    return Color$Companion_getInstance().byteize_0(this.alpha) << 24 | Color$Companion_getInstance().byteize_0(this.red) << 16 | Color$Companion_getInstance().byteize_0(this.green) << 8 | Color$Companion_getInstance().byteize_0(this.blue);
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.transparent = new Color();
    this.white = new Color(1.0, 1.0, 1.0, 1.0);
    this.gray = new Color(1.0, 0.5, 0.5, 0.5);
    this.black = new Color(1.0, 0.0, 0.0, 0.0);
    this.red = new Color(1.0, 1.0, 0.0, 0.0);
    this.yellow = new Color(1.0, 1.0, 1.0, 0.0);
    this.green = new Color(1.0, 0.0, 1.0, 0.0);
    this.teal = new Color(1.0, 0.0, 1.0, 1.0);
    this.blue = new Color(1.0, 0.0, 0.0, 1.0);
    this.purple = new Color(1.0, 1.0, 0.0, 1.0);
  }
  Color$Companion.prototype.gray_mx4ult$ = function (amount) {
    return new Color(1.0, amount, amount, amount);
  };
  Color$Companion.prototype.byteize_0 = function ($receiver) {
    return numberToInt($receiver * 255);
  };
  Color$Companion.prototype.floatize_0 = function ($receiver) {
    return $receiver / 255;
  };
  Color$Companion.prototype.fromInt_za3lpa$ = function (value) {
    return new Color(this.floatize_0(value >>> 24 & 255), this.floatize_0(value >> 16 & 255), this.floatize_0(value >> 8 & 255), this.floatize_0(value & 255));
  };
  Color$Companion.prototype.interpolate_ex4glt$ = function (left, right, ratio) {
    var invRatio = 1 - ratio;
    return new Color(left.alpha * invRatio + right.alpha * ratio, left.red * invRatio + right.red * ratio, left.green * invRatio + right.green * ratio, left.blue * invRatio + right.blue * ratio);
  };
  Color$Companion.prototype.hsvInterpolate_ex4glt$ = function (left, right, ratio) {
    return HSVColor$Companion_getInstance().interpolate_4zphzh$(left.toHSV(), right.toHSV(), ratio).toRGB();
  };
  Color$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Object.defineProperty(Color.prototype, 'average', {get: function () {
    return (this.red + this.green + this.blue) / 3.0;
  }});
  Object.defineProperty(Color.prototype, 'redInt', {get: function () {
    return Color$Companion_getInstance().byteize_0(this.red);
  }});
  Object.defineProperty(Color.prototype, 'greenInt', {get: function () {
    return Color$Companion_getInstance().byteize_0(this.green);
  }});
  Object.defineProperty(Color.prototype, 'blueInt', {get: function () {
    return Color$Companion_getInstance().byteize_0(this.blue);
  }});
  Color.prototype.plus_x1dzhd$ = function (other) {
    return this.copy_7b5o5w$(void 0, coerceIn(this.red + other.red, 0.0, 1.0), coerceIn(this.green + other.green, 0.0, 1.0), coerceIn(this.blue + other.blue, 0.0, 1.0));
  };
  Color.prototype.minus_x1dzhd$ = function (other) {
    return this.copy_7b5o5w$(void 0, coerceIn(this.red - other.red, 0.0, 1.0), coerceIn(this.green - other.green, 0.0, 1.0), coerceIn(this.blue - other.blue, 0.0, 1.0));
  };
  Color.prototype.div_x1dzhd$ = function (other) {
    return this.copy_7b5o5w$(void 0, coerceIn(this.red / other.red, 0.0, 1.0), coerceIn(this.green / other.green, 0.0, 1.0), coerceIn(this.blue / other.blue, 0.0, 1.0));
  };
  Color.prototype.times_x1dzhd$ = function (other) {
    return this.copy_7b5o5w$(void 0, coerceIn(this.red * other.red, 0.0, 1.0), coerceIn(this.green * other.green, 0.0, 1.0), coerceIn(this.blue * other.blue, 0.0, 1.0));
  };
  Color.prototype.toWhite_mx4ult$ = function (ratio) {
    return Color$Companion_getInstance().interpolate_ex4glt$(this, Color$Companion_getInstance().white, ratio);
  };
  Color.prototype.toBlack_mx4ult$ = function (ratio) {
    return Color$Companion_getInstance().interpolate_ex4glt$(this, Color$Companion_getInstance().black, ratio);
  };
  Color.prototype.highlight_mx4ult$ = function (ratio) {
    return this.average > 0.5 ? this.toBlack_mx4ult$(ratio) : this.toWhite_mx4ult$(ratio);
  };
  Color.prototype.toHSV = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.alpha;
    if (this.red > this.green && this.red > this.blue) {
      var tmp$_3 = this.green - this.blue;
      var a = this.red;
      var b = this.green;
      var a_0 = Math_0.max(a, b);
      var b_0 = this.blue;
      var tmp$_4 = Math_0.max(a_0, b_0);
      var a_1 = this.red;
      var b_1 = this.green;
      var a_2 = Math_0.min(a_1, b_1);
      var b_2 = this.blue;
      tmp$_0 = tmp$_3 / (tmp$_4 - Math_0.min(a_2, b_2));
    }
     else if (this.green > this.red && this.green > this.blue) {
      var tmp$_5 = this.blue - this.red;
      var a_3 = this.red;
      var b_3 = this.green;
      var a_4 = Math_0.max(a_3, b_3);
      var b_4 = this.blue;
      var tmp$_6 = Math_0.max(a_4, b_4);
      var a_5 = this.red;
      var b_5 = this.green;
      var a_6 = Math_0.min(a_5, b_5);
      var b_6 = this.blue;
      tmp$_0 = tmp$_5 / (tmp$_6 - Math_0.min(a_6, b_6)) + 2;
    }
     else if (this.blue > this.green && this.blue > this.red) {
      var tmp$_7 = this.red - this.green;
      var a_7 = this.red;
      var b_7 = this.green;
      var a_8 = Math_0.max(a_7, b_7);
      var b_8 = this.blue;
      var tmp$_8 = Math_0.max(a_8, b_8);
      var a_9 = this.red;
      var b_9 = this.green;
      var a_10 = Math_0.min(a_9, b_9);
      var b_10 = this.blue;
      tmp$_0 = tmp$_7 / (tmp$_8 - Math_0.min(a_10, b_10)) + 4;
    }
     else
      tmp$_0 = 0.0;
    tmp$_1 = new Angle((tmp$_0 + 6.0) % 6.0 / 6.0);
    var a_11 = this.red;
    var b_11 = this.green;
    var a_12 = Math_0.min(a_11, b_11);
    var b_12 = this.blue;
    var min = Math_0.min(a_12, b_12);
    var a_13 = this.red;
    var b_13 = this.green;
    var a_14 = Math_0.max(a_13, b_13);
    var b_14 = this.blue;
    var max = Math_0.max(a_14, b_14);
    tmp$_2 = max === 0.0 ? 0.0 : (max - min) / max;
    var a_15 = this.red;
    var b_15 = this.green;
    var a_16 = Math_0.max(a_15, b_15);
    var b_16 = this.blue;
    return new HSVColor(tmp$, tmp$_1, tmp$_2, Math_0.max(a_16, b_16));
  };
  Color.prototype.toWeb = function () {
    return 'rgba(' + this.redInt + ', ' + this.greenInt + ', ' + this.blueInt + ', ' + this.alpha + ')';
  };
  Color.prototype.toAlphalessWeb = function () {
    return '#' + drop(padStart(toString(new UInt_init(this.toInt()), 16), 8, 48), 2);
  };
  Color.$metadata$ = {kind: Kind_CLASS, simpleName: 'Color', interfaces: []};
  Color.prototype.component1 = function () {
    return this.alpha;
  };
  Color.prototype.component2 = function () {
    return this.red;
  };
  Color.prototype.component3 = function () {
    return this.green;
  };
  Color.prototype.component4 = function () {
    return this.blue;
  };
  Color.prototype.copy_7b5o5w$ = function (alpha, red, green, blue) {
    return new Color(alpha === void 0 ? this.alpha : alpha, red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue);
  };
  Color.prototype.toString = function () {
    return 'Color(alpha=' + Kotlin.toString(this.alpha) + (', red=' + Kotlin.toString(this.red)) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + ')';
  };
  Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    return result;
  };
  Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.alpha, other.alpha) && Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue)))));
  };
  function ColorSet(background, backgroundDisabled, backgroundHighlighted, foreground, foregroundDisabled, foregroundHighlighted) {
    ColorSet$Companion_getInstance();
    if (background === void 0)
      background = Color$Companion_getInstance().white;
    if (backgroundDisabled === void 0)
      backgroundDisabled = background.copy_7b5o5w$(background.alpha / 2);
    if (backgroundHighlighted === void 0)
      backgroundHighlighted = background.highlight_mx4ult$(0.2);
    if (foreground === void 0)
      foreground = Color$Companion_getInstance().gray_mx4ult$(0.2);
    if (foregroundDisabled === void 0)
      foregroundDisabled = foreground.copy_7b5o5w$(foreground.alpha / 2);
    if (foregroundHighlighted === void 0)
      foregroundHighlighted = foreground.highlight_mx4ult$(0.2);
    this.background = background;
    this.backgroundDisabled = backgroundDisabled;
    this.backgroundHighlighted = backgroundHighlighted;
    this.foreground = foreground;
    this.foregroundDisabled = foregroundDisabled;
    this.foregroundHighlighted = foregroundHighlighted;
  }
  ColorSet.prototype.importance_ykvrk0$ = function (value) {
    switch (value.name) {
      case 'Low':
        return this.foregroundDisabled;
      case 'Normal':
        return this.foreground;
      case 'High':
        return this.foregroundHighlighted;
      case 'Danger':
        return ColorSet$Companion_getInstance().destructive.foreground;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  function ColorSet$Companion() {
    ColorSet$Companion_instance = this;
    this.destructive = this.basedOnBack_x1dzhd$(Color$Companion_getInstance().red);
  }
  ColorSet$Companion.prototype.basedOnBack_x1dzhd$ = function (color) {
    return new ColorSet(color, void 0, void 0, color.average > 0.7 ? Color$Companion_getInstance().black : Color$Companion_getInstance().white);
  };
  ColorSet$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ColorSet$Companion_instance = null;
  function ColorSet$Companion_getInstance() {
    if (ColorSet$Companion_instance === null) {
      new ColorSet$Companion();
    }
    return ColorSet$Companion_instance;
  }
  ColorSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'ColorSet', interfaces: []};
  ColorSet.prototype.component1 = function () {
    return this.background;
  };
  ColorSet.prototype.component2 = function () {
    return this.backgroundDisabled;
  };
  ColorSet.prototype.component3 = function () {
    return this.backgroundHighlighted;
  };
  ColorSet.prototype.component4 = function () {
    return this.foreground;
  };
  ColorSet.prototype.component5 = function () {
    return this.foregroundDisabled;
  };
  ColorSet.prototype.component6 = function () {
    return this.foregroundHighlighted;
  };
  ColorSet.prototype.copy_7fm9l8$ = function (background, backgroundDisabled, backgroundHighlighted, foreground, foregroundDisabled, foregroundHighlighted) {
    return new ColorSet(background === void 0 ? this.background : background, backgroundDisabled === void 0 ? this.backgroundDisabled : backgroundDisabled, backgroundHighlighted === void 0 ? this.backgroundHighlighted : backgroundHighlighted, foreground === void 0 ? this.foreground : foreground, foregroundDisabled === void 0 ? this.foregroundDisabled : foregroundDisabled, foregroundHighlighted === void 0 ? this.foregroundHighlighted : foregroundHighlighted);
  };
  ColorSet.prototype.toString = function () {
    return 'ColorSet(background=' + Kotlin.toString(this.background) + (', backgroundDisabled=' + Kotlin.toString(this.backgroundDisabled)) + (', backgroundHighlighted=' + Kotlin.toString(this.backgroundHighlighted)) + (', foreground=' + Kotlin.toString(this.foreground)) + (', foregroundDisabled=' + Kotlin.toString(this.foregroundDisabled)) + (', foregroundHighlighted=' + Kotlin.toString(this.foregroundHighlighted)) + ')';
  };
  ColorSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.backgroundDisabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.backgroundHighlighted) | 0;
    result = result * 31 + Kotlin.hashCode(this.foreground) | 0;
    result = result * 31 + Kotlin.hashCode(this.foregroundDisabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.foregroundHighlighted) | 0;
    return result;
  };
  ColorSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.background, other.background) && Kotlin.equals(this.backgroundDisabled, other.backgroundDisabled) && Kotlin.equals(this.backgroundHighlighted, other.backgroundHighlighted) && Kotlin.equals(this.foreground, other.foreground) && Kotlin.equals(this.foregroundDisabled, other.foregroundDisabled) && Kotlin.equals(this.foregroundHighlighted, other.foregroundHighlighted)))));
  };
  function HSVColor(alpha, hue, saturation, value) {
    HSVColor$Companion_getInstance();
    if (alpha === void 0)
      alpha = 0.0;
    if (hue === void 0)
      hue = new Angle(0.0);
    if (saturation === void 0)
      saturation = 0.0;
    if (value === void 0)
      value = 0.0;
    this.alpha = alpha;
    this.hue = hue;
    this.saturation = saturation;
    this.value = value;
  }
  HSVColor.prototype.toRGB = function () {
    var tmp$;
    var h = numberToInt(this.hue.circles * 6);
    var f = this.hue.circles * 6 - h;
    var p = this.value * (1 - this.saturation);
    var q = this.value * (1 - f * this.saturation);
    var t = this.value * (1 - (1 - f) * this.saturation);
    switch (h) {
      case 0:
        tmp$ = new Color(this.alpha, this.value, t, p);
        break;
      case 1:
        tmp$ = new Color(this.alpha, q, this.value, p);
        break;
      case 2:
        tmp$ = new Color(this.alpha, p, this.value, t);
        break;
      case 3:
        tmp$ = new Color(this.alpha, p, q, this.value);
        break;
      case 4:
        tmp$ = new Color(this.alpha, t, p, this.value);
        break;
      case 5:
        tmp$ = new Color(this.alpha, this.value, p, q);
        break;
      default:tmp$ = Color$Companion_getInstance().transparent;
        break;
    }
    return tmp$;
  };
  function HSVColor$Companion() {
    HSVColor$Companion_instance = this;
  }
  HSVColor$Companion.prototype.interpolate_4zphzh$ = function (left, right, ratio) {
    var invRatio = 1 - ratio;
    var tmp$ = left.alpha * invRatio + right.alpha * ratio;
    var tmp$_0 = left.hue;
    var $this = left.hue;
    var other = new Angle((new Angle((right.hue.circles - $this.circles + 1.5) % 1.0 - 0.5)).circles * ratio);
    return new HSVColor(tmp$, new Angle(tmp$_0.circles + other.circles), left.saturation * invRatio + right.saturation * ratio, left.value * invRatio + right.value * ratio);
  };
  HSVColor$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var HSVColor$Companion_instance = null;
  function HSVColor$Companion_getInstance() {
    if (HSVColor$Companion_instance === null) {
      new HSVColor$Companion();
    }
    return HSVColor$Companion_instance;
  }
  HSVColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'HSVColor', interfaces: []};
  HSVColor.prototype.component1 = function () {
    return this.alpha;
  };
  HSVColor.prototype.component2 = function () {
    return this.hue;
  };
  HSVColor.prototype.component3 = function () {
    return this.saturation;
  };
  HSVColor.prototype.component4 = function () {
    return this.value;
  };
  HSVColor.prototype.copy_rex2ea$ = function (alpha, hue, saturation, value) {
    return new HSVColor(alpha === void 0 ? this.alpha : alpha, hue === void 0 ? this.hue : hue, saturation === void 0 ? this.saturation : saturation, value === void 0 ? this.value : value);
  };
  HSVColor.prototype.toString = function () {
    return 'HSVColor(alpha=' + Kotlin.toString(this.alpha) + (', hue=' + Kotlin.toString(this.hue)) + (', saturation=' + Kotlin.toString(this.saturation)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  HSVColor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    result = result * 31 + Kotlin.hashCode(this.saturation) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  HSVColor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.alpha, other.alpha) && Kotlin.equals(this.hue, other.hue) && Kotlin.equals(this.saturation, other.saturation) && Kotlin.equals(this.value, other.value)))));
  };
  function Theme(main, bar, accent) {
    Theme$Companion_getInstance();
    if (main === void 0)
      main = new ColorSet();
    if (bar === void 0)
      bar = ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(Color$Companion_getInstance().fromInt_za3lpa$(-11308850));
    if (accent === void 0)
      accent = ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(Color$Companion_getInstance().fromInt_za3lpa$(-2612702));
    this.main = main;
    this.bar = bar;
    this.accent = accent;
  }
  Theme.prototype.importance_ykvrk0$ = function (value) {
    switch (value.name) {
      case 'Low':
        return this.main;
      case 'Normal':
        return this.bar;
      case 'High':
        return this.accent;
      case 'Danger':
        return ColorSet$Companion_getInstance().destructive;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  function Theme$Companion() {
    Theme$Companion_instance = this;
  }
  Theme$Companion.prototype.light_8vr2k$ = function (primaryColor, secondaryColor) {
    if (primaryColor === void 0)
      primaryColor = Color$Companion_getInstance().fromInt_za3lpa$(-11308850);
    if (secondaryColor === void 0)
      secondaryColor = Color$Companion_getInstance().fromInt_za3lpa$(-2612702);
    return new Theme(ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(Color$Companion_getInstance().white), ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(primaryColor), ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(secondaryColor));
  };
  Theme$Companion.prototype.dark_8vr2k$ = function (primaryColor, secondaryColor) {
    if (primaryColor === void 0)
      primaryColor = Color$Companion_getInstance().fromInt_za3lpa$(-11308850);
    if (secondaryColor === void 0)
      secondaryColor = Color$Companion_getInstance().fromInt_za3lpa$(-2612702);
    return new Theme(ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(Color$Companion_getInstance().gray_mx4ult$(0.1)), ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(primaryColor), ColorSet$Companion_getInstance().basedOnBack_x1dzhd$(secondaryColor));
  };
  Theme$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Theme$Companion_instance = null;
  function Theme$Companion_getInstance() {
    if (Theme$Companion_instance === null) {
      new Theme$Companion();
    }
    return Theme$Companion_instance;
  }
  Theme.$metadata$ = {kind: Kind_CLASS, simpleName: 'Theme', interfaces: []};
  Theme.prototype.component1 = function () {
    return this.main;
  };
  Theme.prototype.component2 = function () {
    return this.bar;
  };
  Theme.prototype.component3 = function () {
    return this.accent;
  };
  Theme.prototype.copy_vx9b85$ = function (main, bar, accent) {
    return new Theme(main === void 0 ? this.main : main, bar === void 0 ? this.bar : bar, accent === void 0 ? this.accent : accent);
  };
  Theme.prototype.toString = function () {
    return 'Theme(main=' + Kotlin.toString(this.main) + (', bar=' + Kotlin.toString(this.bar)) + (', accent=' + Kotlin.toString(this.accent)) + ')';
  };
  Theme.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.main) | 0;
    result = result * 31 + Kotlin.hashCode(this.bar) | 0;
    result = result * 31 + Kotlin.hashCode(this.accent) | 0;
    return result;
  };
  Theme.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.main, other.main) && Kotlin.equals(this.bar, other.bar) && Kotlin.equals(this.accent, other.accent)))));
  };
  function Animation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Animation_initFields() {
    Animation_initFields = function () {
    };
    Animation$None_instance = new Animation('None', 0);
    Animation$Push_instance = new Animation('Push', 1);
    Animation$Pop_instance = new Animation('Pop', 2);
    Animation$MoveUp_instance = new Animation('MoveUp', 3);
    Animation$MoveDown_instance = new Animation('MoveDown', 4);
    Animation$Fade_instance = new Animation('Fade', 5);
    Animation$Flip_instance = new Animation('Flip', 6);
  }
  var Animation$None_instance;
  function Animation$None_getInstance() {
    Animation_initFields();
    return Animation$None_instance;
  }
  var Animation$Push_instance;
  function Animation$Push_getInstance() {
    Animation_initFields();
    return Animation$Push_instance;
  }
  var Animation$Pop_instance;
  function Animation$Pop_getInstance() {
    Animation_initFields();
    return Animation$Pop_instance;
  }
  var Animation$MoveUp_instance;
  function Animation$MoveUp_getInstance() {
    Animation_initFields();
    return Animation$MoveUp_instance;
  }
  var Animation$MoveDown_instance;
  function Animation$MoveDown_getInstance() {
    Animation_initFields();
    return Animation$MoveDown_instance;
  }
  var Animation$Fade_instance;
  function Animation$Fade_getInstance() {
    Animation_initFields();
    return Animation$Fade_instance;
  }
  var Animation$Flip_instance;
  function Animation$Flip_getInstance() {
    Animation_initFields();
    return Animation$Flip_instance;
  }
  Animation.$metadata$ = {kind: Kind_CLASS, simpleName: 'Animation', interfaces: [Enum]};
  function Animation$values() {
    return [Animation$None_getInstance(), Animation$Push_getInstance(), Animation$Pop_getInstance(), Animation$MoveUp_getInstance(), Animation$MoveDown_getInstance(), Animation$Fade_getInstance(), Animation$Flip_getInstance()];
  }
  Animation.values = Animation$values;
  function Animation$valueOf(name) {
    switch (name) {
      case 'None':
        return Animation$None_getInstance();
      case 'Push':
        return Animation$Push_getInstance();
      case 'Pop':
        return Animation$Pop_getInstance();
      case 'MoveUp':
        return Animation$MoveUp_getInstance();
      case 'MoveDown':
        return Animation$MoveDown_getInstance();
      case 'Fade':
        return Animation$Fade_getInstance();
      case 'Flip':
        return Animation$Flip_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.concepts.Animation.' + name);
    }
  }
  Animation.valueOf_61zpoe$ = Animation$valueOf;
  function Importance(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Importance_initFields() {
    Importance_initFields = function () {
    };
    Importance$Low_instance = new Importance('Low', 0);
    Importance$Normal_instance = new Importance('Normal', 1);
    Importance$High_instance = new Importance('High', 2);
    Importance$Danger_instance = new Importance('Danger', 3);
    Importance$Companion_getInstance();
  }
  var Importance$Low_instance;
  function Importance$Low_getInstance() {
    Importance_initFields();
    return Importance$Low_instance;
  }
  var Importance$Normal_instance;
  function Importance$Normal_getInstance() {
    Importance_initFields();
    return Importance$Normal_instance;
  }
  var Importance$High_instance;
  function Importance$High_getInstance() {
    Importance_initFields();
    return Importance$High_instance;
  }
  var Importance$Danger_instance;
  function Importance$Danger_getInstance() {
    Importance_initFields();
    return Importance$Danger_instance;
  }
  function Importance$Companion() {
    Importance$Companion_instance = this;
    this.values = toList(Importance$values());
  }
  Importance$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Importance$Companion_instance = null;
  function Importance$Companion_getInstance() {
    Importance_initFields();
    if (Importance$Companion_instance === null) {
      new Importance$Companion();
    }
    return Importance$Companion_instance;
  }
  Object.defineProperty(Importance.prototype, 'more', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(Importance$Companion_getInstance().values, Importance$Companion_getInstance().values.indexOf_11rb$(this) + 1 | 0)) != null ? tmp$ : Importance$Danger_getInstance();
  }});
  Object.defineProperty(Importance.prototype, 'less', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(Importance$Companion_getInstance().values, Importance$Companion_getInstance().values.indexOf_11rb$(this) - 1 | 0)) != null ? tmp$ : Importance$Low_getInstance();
  }});
  Importance.$metadata$ = {kind: Kind_CLASS, simpleName: 'Importance', interfaces: [Enum]};
  function Importance$values() {
    return [Importance$Low_getInstance(), Importance$Normal_getInstance(), Importance$High_getInstance(), Importance$Danger_getInstance()];
  }
  Importance.values = Importance$values;
  function Importance$valueOf(name) {
    switch (name) {
      case 'Low':
        return Importance$Low_getInstance();
      case 'Normal':
        return Importance$Normal_getInstance();
      case 'High':
        return Importance$High_getInstance();
      case 'Danger':
        return Importance$Danger_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.concepts.Importance.' + name);
    }
  }
  Importance.valueOf_61zpoe$ = Importance$valueOf;
  function NumberInputType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function NumberInputType_initFields() {
    NumberInputType_initFields = function () {
    };
    NumberInputType$Integer_instance = new NumberInputType('Integer', 0);
    NumberInputType$Float_instance = new NumberInputType('Float', 1);
    NumberInputType$PositiveInteger_instance = new NumberInputType('PositiveInteger', 2);
    NumberInputType$PositiveFloat_instance = new NumberInputType('PositiveFloat', 3);
  }
  var NumberInputType$Integer_instance;
  function NumberInputType$Integer_getInstance() {
    NumberInputType_initFields();
    return NumberInputType$Integer_instance;
  }
  var NumberInputType$Float_instance;
  function NumberInputType$Float_getInstance() {
    NumberInputType_initFields();
    return NumberInputType$Float_instance;
  }
  var NumberInputType$PositiveInteger_instance;
  function NumberInputType$PositiveInteger_getInstance() {
    NumberInputType_initFields();
    return NumberInputType$PositiveInteger_instance;
  }
  var NumberInputType$PositiveFloat_instance;
  function NumberInputType$PositiveFloat_getInstance() {
    NumberInputType_initFields();
    return NumberInputType$PositiveFloat_instance;
  }
  NumberInputType.$metadata$ = {kind: Kind_CLASS, simpleName: 'NumberInputType', interfaces: [Enum]};
  function NumberInputType$values() {
    return [NumberInputType$Integer_getInstance(), NumberInputType$Float_getInstance(), NumberInputType$PositiveInteger_getInstance(), NumberInputType$PositiveFloat_getInstance()];
  }
  NumberInputType.values = NumberInputType$values;
  function NumberInputType$valueOf(name) {
    switch (name) {
      case 'Integer':
        return NumberInputType$Integer_getInstance();
      case 'Float':
        return NumberInputType$Float_getInstance();
      case 'PositiveInteger':
        return NumberInputType$PositiveInteger_getInstance();
      case 'PositiveFloat':
        return NumberInputType$PositiveFloat_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.concepts.NumberInputType.' + name);
    }
  }
  NumberInputType.valueOf_61zpoe$ = NumberInputType$valueOf;
  function TextInputType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextInputType_initFields() {
    TextInputType_initFields = function () {
    };
    TextInputType$Paragraph_instance = new TextInputType('Paragraph', 0);
    TextInputType$Name_instance = new TextInputType('Name', 1);
    TextInputType$Password_instance = new TextInputType('Password', 2);
    TextInputType$Sentence_instance = new TextInputType('Sentence', 3);
    TextInputType$CapitalizedIdentifier_instance = new TextInputType('CapitalizedIdentifier', 4);
    TextInputType$URL_instance = new TextInputType('URL', 5);
    TextInputType$Email_instance = new TextInputType('Email', 6);
    TextInputType$Phone_instance = new TextInputType('Phone', 7);
    TextInputType$Address_instance = new TextInputType('Address', 8);
  }
  var TextInputType$Paragraph_instance;
  function TextInputType$Paragraph_getInstance() {
    TextInputType_initFields();
    return TextInputType$Paragraph_instance;
  }
  var TextInputType$Name_instance;
  function TextInputType$Name_getInstance() {
    TextInputType_initFields();
    return TextInputType$Name_instance;
  }
  var TextInputType$Password_instance;
  function TextInputType$Password_getInstance() {
    TextInputType_initFields();
    return TextInputType$Password_instance;
  }
  var TextInputType$Sentence_instance;
  function TextInputType$Sentence_getInstance() {
    TextInputType_initFields();
    return TextInputType$Sentence_instance;
  }
  var TextInputType$CapitalizedIdentifier_instance;
  function TextInputType$CapitalizedIdentifier_getInstance() {
    TextInputType_initFields();
    return TextInputType$CapitalizedIdentifier_instance;
  }
  var TextInputType$URL_instance;
  function TextInputType$URL_getInstance() {
    TextInputType_initFields();
    return TextInputType$URL_instance;
  }
  var TextInputType$Email_instance;
  function TextInputType$Email_getInstance() {
    TextInputType_initFields();
    return TextInputType$Email_instance;
  }
  var TextInputType$Phone_instance;
  function TextInputType$Phone_getInstance() {
    TextInputType_initFields();
    return TextInputType$Phone_instance;
  }
  var TextInputType$Address_instance;
  function TextInputType$Address_getInstance() {
    TextInputType_initFields();
    return TextInputType$Address_instance;
  }
  TextInputType.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextInputType', interfaces: [Enum]};
  function TextInputType$values() {
    return [TextInputType$Paragraph_getInstance(), TextInputType$Name_getInstance(), TextInputType$Password_getInstance(), TextInputType$Sentence_getInstance(), TextInputType$CapitalizedIdentifier_getInstance(), TextInputType$URL_getInstance(), TextInputType$Email_getInstance(), TextInputType$Phone_getInstance(), TextInputType$Address_getInstance()];
  }
  TextInputType.values = TextInputType$values;
  function TextInputType$valueOf(name) {
    switch (name) {
      case 'Paragraph':
        return TextInputType$Paragraph_getInstance();
      case 'Name':
        return TextInputType$Name_getInstance();
      case 'Password':
        return TextInputType$Password_getInstance();
      case 'Sentence':
        return TextInputType$Sentence_getInstance();
      case 'CapitalizedIdentifier':
        return TextInputType$CapitalizedIdentifier_getInstance();
      case 'URL':
        return TextInputType$URL_getInstance();
      case 'Email':
        return TextInputType$Email_getInstance();
      case 'Phone':
        return TextInputType$Phone_getInstance();
      case 'Address':
        return TextInputType$Address_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.concepts.TextInputType.' + name);
    }
  }
  TextInputType.valueOf_61zpoe$ = TextInputType$valueOf;
  function TextSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextSize_initFields() {
    TextSize_initFields = function () {
    };
    TextSize$Tiny_instance = new TextSize('Tiny', 0);
    TextSize$Body_instance = new TextSize('Body', 1);
    TextSize$Subheader_instance = new TextSize('Subheader', 2);
    TextSize$Header_instance = new TextSize('Header', 3);
    TextSize$Companion_getInstance();
  }
  var TextSize$Tiny_instance;
  function TextSize$Tiny_getInstance() {
    TextSize_initFields();
    return TextSize$Tiny_instance;
  }
  var TextSize$Body_instance;
  function TextSize$Body_getInstance() {
    TextSize_initFields();
    return TextSize$Body_instance;
  }
  var TextSize$Subheader_instance;
  function TextSize$Subheader_getInstance() {
    TextSize_initFields();
    return TextSize$Subheader_instance;
  }
  var TextSize$Header_instance;
  function TextSize$Header_getInstance() {
    TextSize_initFields();
    return TextSize$Header_instance;
  }
  function TextSize$Companion() {
    TextSize$Companion_instance = this;
    this.values = toList(TextSize$values());
  }
  TextSize$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TextSize$Companion_instance = null;
  function TextSize$Companion_getInstance() {
    TextSize_initFields();
    if (TextSize$Companion_instance === null) {
      new TextSize$Companion();
    }
    return TextSize$Companion_instance;
  }
  Object.defineProperty(TextSize.prototype, 'bigger', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(TextSize$Companion_getInstance().values, TextSize$Companion_getInstance().values.indexOf_11rb$(this) + 1 | 0)) != null ? tmp$ : TextSize$Header_getInstance();
  }});
  Object.defineProperty(TextSize.prototype, 'smaller', {get: function () {
    var tmp$;
    return (tmp$ = getOrNull(TextSize$Companion_getInstance().values, TextSize$Companion_getInstance().values.indexOf_11rb$(this) - 1 | 0)) != null ? tmp$ : TextSize$Tiny_getInstance();
  }});
  TextSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextSize', interfaces: [Enum]};
  function TextSize$values() {
    return [TextSize$Tiny_getInstance(), TextSize$Body_getInstance(), TextSize$Subheader_getInstance(), TextSize$Header_getInstance()];
  }
  TextSize.values = TextSize$values;
  function TextSize$valueOf(name) {
    switch (name) {
      case 'Tiny':
        return TextSize$Tiny_getInstance();
      case 'Body':
        return TextSize$Body_getInstance();
      case 'Subheader':
        return TextSize$Subheader_getInstance();
      case 'Header':
        return TextSize$Header_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.concepts.TextSize.' + name);
    }
  }
  TextSize.valueOf_61zpoe$ = TextSize$valueOf;
  function Align(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Align_initFields() {
    Align_initFields = function () {
    };
    Align$Start_instance = new Align('Start', 0);
    Align$Center_instance = new Align('Center', 1);
    Align$End_instance = new Align('End', 2);
    Align$Fill_instance = new Align('Fill', 3);
  }
  var Align$Start_instance;
  function Align$Start_getInstance() {
    Align_initFields();
    return Align$Start_instance;
  }
  var Align$Center_instance;
  function Align$Center_getInstance() {
    Align_initFields();
    return Align$Center_instance;
  }
  var Align$End_instance;
  function Align$End_getInstance() {
    Align_initFields();
    return Align$End_instance;
  }
  var Align$Fill_instance;
  function Align$Fill_getInstance() {
    Align_initFields();
    return Align$Fill_instance;
  }
  Align.$metadata$ = {kind: Kind_CLASS, simpleName: 'Align', interfaces: [Enum]};
  function Align$values() {
    return [Align$Start_getInstance(), Align$Center_getInstance(), Align$End_getInstance(), Align$Fill_getInstance()];
  }
  Align.values = Align$values;
  function Align$valueOf(name) {
    switch (name) {
      case 'Start':
        return Align$Start_getInstance();
      case 'Center':
        return Align$Center_getInstance();
      case 'End':
        return Align$End_getInstance();
      case 'Fill':
        return Align$Fill_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.geometry.Align.' + name);
    }
  }
  Align.valueOf_61zpoe$ = Align$valueOf;
  function AlignPair(name, ordinal, horizontal, vertical) {
    Enum.call(this);
    this.horizontal = horizontal;
    this.vertical = vertical;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlignPair_initFields() {
    AlignPair_initFields = function () {
    };
    AlignPair$TopLeft_instance = new AlignPair('TopLeft', 0, Align$Start_getInstance(), Align$Start_getInstance());
    AlignPair$TopCenter_instance = new AlignPair('TopCenter', 1, Align$Center_getInstance(), Align$Start_getInstance());
    AlignPair$TopFill_instance = new AlignPair('TopFill', 2, Align$Fill_getInstance(), Align$Start_getInstance());
    AlignPair$TopRight_instance = new AlignPair('TopRight', 3, Align$End_getInstance(), Align$Start_getInstance());
    AlignPair$CenterLeft_instance = new AlignPair('CenterLeft', 4, Align$Start_getInstance(), Align$Center_getInstance());
    AlignPair$CenterCenter_instance = new AlignPair('CenterCenter', 5, Align$Center_getInstance(), Align$Center_getInstance());
    AlignPair$CenterFill_instance = new AlignPair('CenterFill', 6, Align$Fill_getInstance(), Align$Center_getInstance());
    AlignPair$CenterRight_instance = new AlignPair('CenterRight', 7, Align$End_getInstance(), Align$Center_getInstance());
    AlignPair$FillLeft_instance = new AlignPair('FillLeft', 8, Align$Start_getInstance(), Align$Fill_getInstance());
    AlignPair$FillCenter_instance = new AlignPair('FillCenter', 9, Align$Center_getInstance(), Align$Fill_getInstance());
    AlignPair$FillFill_instance = new AlignPair('FillFill', 10, Align$Fill_getInstance(), Align$Fill_getInstance());
    AlignPair$FillRight_instance = new AlignPair('FillRight', 11, Align$End_getInstance(), Align$Fill_getInstance());
    AlignPair$BottomLeft_instance = new AlignPair('BottomLeft', 12, Align$Start_getInstance(), Align$End_getInstance());
    AlignPair$BottomCenter_instance = new AlignPair('BottomCenter', 13, Align$Center_getInstance(), Align$End_getInstance());
    AlignPair$BottomFill_instance = new AlignPair('BottomFill', 14, Align$Fill_getInstance(), Align$End_getInstance());
    AlignPair$BottomRight_instance = new AlignPair('BottomRight', 15, Align$End_getInstance(), Align$End_getInstance());
  }
  var AlignPair$TopLeft_instance;
  function AlignPair$TopLeft_getInstance() {
    AlignPair_initFields();
    return AlignPair$TopLeft_instance;
  }
  var AlignPair$TopCenter_instance;
  function AlignPair$TopCenter_getInstance() {
    AlignPair_initFields();
    return AlignPair$TopCenter_instance;
  }
  var AlignPair$TopFill_instance;
  function AlignPair$TopFill_getInstance() {
    AlignPair_initFields();
    return AlignPair$TopFill_instance;
  }
  var AlignPair$TopRight_instance;
  function AlignPair$TopRight_getInstance() {
    AlignPair_initFields();
    return AlignPair$TopRight_instance;
  }
  var AlignPair$CenterLeft_instance;
  function AlignPair$CenterLeft_getInstance() {
    AlignPair_initFields();
    return AlignPair$CenterLeft_instance;
  }
  var AlignPair$CenterCenter_instance;
  function AlignPair$CenterCenter_getInstance() {
    AlignPair_initFields();
    return AlignPair$CenterCenter_instance;
  }
  var AlignPair$CenterFill_instance;
  function AlignPair$CenterFill_getInstance() {
    AlignPair_initFields();
    return AlignPair$CenterFill_instance;
  }
  var AlignPair$CenterRight_instance;
  function AlignPair$CenterRight_getInstance() {
    AlignPair_initFields();
    return AlignPair$CenterRight_instance;
  }
  var AlignPair$FillLeft_instance;
  function AlignPair$FillLeft_getInstance() {
    AlignPair_initFields();
    return AlignPair$FillLeft_instance;
  }
  var AlignPair$FillCenter_instance;
  function AlignPair$FillCenter_getInstance() {
    AlignPair_initFields();
    return AlignPair$FillCenter_instance;
  }
  var AlignPair$FillFill_instance;
  function AlignPair$FillFill_getInstance() {
    AlignPair_initFields();
    return AlignPair$FillFill_instance;
  }
  var AlignPair$FillRight_instance;
  function AlignPair$FillRight_getInstance() {
    AlignPair_initFields();
    return AlignPair$FillRight_instance;
  }
  var AlignPair$BottomLeft_instance;
  function AlignPair$BottomLeft_getInstance() {
    AlignPair_initFields();
    return AlignPair$BottomLeft_instance;
  }
  var AlignPair$BottomCenter_instance;
  function AlignPair$BottomCenter_getInstance() {
    AlignPair_initFields();
    return AlignPair$BottomCenter_instance;
  }
  var AlignPair$BottomFill_instance;
  function AlignPair$BottomFill_getInstance() {
    AlignPair_initFields();
    return AlignPair$BottomFill_instance;
  }
  var AlignPair$BottomRight_instance;
  function AlignPair$BottomRight_getInstance() {
    AlignPair_initFields();
    return AlignPair$BottomRight_instance;
  }
  AlignPair.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlignPair', interfaces: [Enum]};
  function AlignPair$values() {
    return [AlignPair$TopLeft_getInstance(), AlignPair$TopCenter_getInstance(), AlignPair$TopFill_getInstance(), AlignPair$TopRight_getInstance(), AlignPair$CenterLeft_getInstance(), AlignPair$CenterCenter_getInstance(), AlignPair$CenterFill_getInstance(), AlignPair$CenterRight_getInstance(), AlignPair$FillLeft_getInstance(), AlignPair$FillCenter_getInstance(), AlignPair$FillFill_getInstance(), AlignPair$FillRight_getInstance(), AlignPair$BottomLeft_getInstance(), AlignPair$BottomCenter_getInstance(), AlignPair$BottomFill_getInstance(), AlignPair$BottomRight_getInstance()];
  }
  AlignPair.values = AlignPair$values;
  function AlignPair$valueOf(name) {
    switch (name) {
      case 'TopLeft':
        return AlignPair$TopLeft_getInstance();
      case 'TopCenter':
        return AlignPair$TopCenter_getInstance();
      case 'TopFill':
        return AlignPair$TopFill_getInstance();
      case 'TopRight':
        return AlignPair$TopRight_getInstance();
      case 'CenterLeft':
        return AlignPair$CenterLeft_getInstance();
      case 'CenterCenter':
        return AlignPair$CenterCenter_getInstance();
      case 'CenterFill':
        return AlignPair$CenterFill_getInstance();
      case 'CenterRight':
        return AlignPair$CenterRight_getInstance();
      case 'FillLeft':
        return AlignPair$FillLeft_getInstance();
      case 'FillCenter':
        return AlignPair$FillCenter_getInstance();
      case 'FillFill':
        return AlignPair$FillFill_getInstance();
      case 'FillRight':
        return AlignPair$FillRight_getInstance();
      case 'BottomLeft':
        return AlignPair$BottomLeft_getInstance();
      case 'BottomCenter':
        return AlignPair$BottomCenter_getInstance();
      case 'BottomFill':
        return AlignPair$BottomFill_getInstance();
      case 'BottomRight':
        return AlignPair$BottomRight_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.geometry.AlignPair.' + name);
    }
  }
  AlignPair.valueOf_61zpoe$ = AlignPair$valueOf;
  function Direction(name, ordinal, uiPositive, vertical, radians) {
    Enum.call(this);
    this.uiPositive = uiPositive;
    this.vertical = vertical;
    this.radians = radians;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$Right_instance = new Direction('Right', 0, true, false, 0.0);
    Direction$Up_instance = new Direction('Up', 1, false, true, math.PI * 0.5);
    Direction$Left_instance = new Direction('Left', 2, false, false, math.PI);
    Direction$Down_instance = new Direction('Down', 3, true, true, math.PI * 1.5);
  }
  var Direction$Right_instance;
  function Direction$Right_getInstance() {
    Direction_initFields();
    return Direction$Right_instance;
  }
  var Direction$Up_instance;
  function Direction$Up_getInstance() {
    Direction_initFields();
    return Direction$Up_instance;
  }
  var Direction$Left_instance;
  function Direction$Left_getInstance() {
    Direction_initFields();
    return Direction$Left_instance;
  }
  var Direction$Down_instance;
  function Direction$Down_getInstance() {
    Direction_initFields();
    return Direction$Down_instance;
  }
  Direction.$metadata$ = {kind: Kind_CLASS, simpleName: 'Direction', interfaces: [Enum]};
  function Direction$values() {
    return [Direction$Right_getInstance(), Direction$Up_getInstance(), Direction$Left_getInstance(), Direction$Down_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'Right':
        return Direction$Right_getInstance();
      case 'Up':
        return Direction$Up_getInstance();
      case 'Left':
        return Direction$Left_getInstance();
      case 'Down':
        return Direction$Down_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.geometry.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function LinearPlacement(weight, align) {
    LinearPlacement$Companion_getInstance();
    if (weight === void 0)
      weight = 0.0;
    if (align === void 0)
      align = Align$Fill_getInstance();
    this.weight = weight;
    this.align = align;
  }
  function LinearPlacement$Companion() {
    LinearPlacement$Companion_instance = this;
    this.fillStart = new LinearPlacement(1.0, Align$Start_getInstance());
    this.fillCenter = new LinearPlacement(1.0, Align$Center_getInstance());
    this.fillEnd = new LinearPlacement(1.0, Align$End_getInstance());
    this.fillFill = new LinearPlacement(1.0, Align$Fill_getInstance());
    this.wrapStart = new LinearPlacement(0.0, Align$Start_getInstance());
    this.wrapCenter = new LinearPlacement(0.0, Align$Center_getInstance());
    this.wrapEnd = new LinearPlacement(0.0, Align$End_getInstance());
    this.wrapFill = new LinearPlacement(0.0, Align$Fill_getInstance());
  }
  LinearPlacement$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LinearPlacement$Companion_instance = null;
  function LinearPlacement$Companion_getInstance() {
    if (LinearPlacement$Companion_instance === null) {
      new LinearPlacement$Companion();
    }
    return LinearPlacement$Companion_instance;
  }
  LinearPlacement.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinearPlacement', interfaces: []};
  function withSizing($receiver, defaultSize, scaleType) {
    if (defaultSize === void 0)
      defaultSize = null;
    if (scaleType === void 0)
      scaleType = ImageScaleType$Fill_getInstance();
    return new ImageWithSizing($receiver, defaultSize, scaleType);
  }
  function ImageScaleType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ImageScaleType_initFields() {
    ImageScaleType_initFields = function () {
    };
    ImageScaleType$Crop_instance = new ImageScaleType('Crop', 0);
    ImageScaleType$Fill_instance = new ImageScaleType('Fill', 1);
    ImageScaleType$Center_instance = new ImageScaleType('Center', 2);
  }
  var ImageScaleType$Crop_instance;
  function ImageScaleType$Crop_getInstance() {
    ImageScaleType_initFields();
    return ImageScaleType$Crop_instance;
  }
  var ImageScaleType$Fill_instance;
  function ImageScaleType$Fill_getInstance() {
    ImageScaleType_initFields();
    return ImageScaleType$Fill_instance;
  }
  var ImageScaleType$Center_instance;
  function ImageScaleType$Center_getInstance() {
    ImageScaleType_initFields();
    return ImageScaleType$Center_instance;
  }
  ImageScaleType.$metadata$ = {kind: Kind_CLASS, simpleName: 'ImageScaleType', interfaces: [Enum]};
  function ImageScaleType$values() {
    return [ImageScaleType$Crop_getInstance(), ImageScaleType$Fill_getInstance(), ImageScaleType$Center_getInstance()];
  }
  ImageScaleType.values = ImageScaleType$values;
  function ImageScaleType$valueOf(name) {
    switch (name) {
      case 'Crop':
        return ImageScaleType$Crop_getInstance();
      case 'Fill':
        return ImageScaleType$Fill_getInstance();
      case 'Center':
        return ImageScaleType$Center_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.image.ImageScaleType.' + name);
    }
  }
  ImageScaleType.valueOf_61zpoe$ = ImageScaleType$valueOf;
  function ImageWithSizing(image, defaultSize, scaleType) {
    ImageWithSizing$Companion_getInstance();
    if (defaultSize === void 0)
      defaultSize = null;
    if (scaleType === void 0)
      scaleType = ImageScaleType$Fill_getInstance();
    this.image = image;
    this.defaultSize = defaultSize;
    this.scaleType = scaleType;
  }
  function ImageWithSizing$Companion() {
    ImageWithSizing$Companion_instance = this;
    this.none = new ImageWithSizing(Image$Companion_getInstance().blank);
  }
  ImageWithSizing$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ImageWithSizing$Companion_instance = null;
  function ImageWithSizing$Companion_getInstance() {
    if (ImageWithSizing$Companion_instance === null) {
      new ImageWithSizing$Companion();
    }
    return ImageWithSizing$Companion_instance;
  }
  ImageWithSizing.$metadata$ = {kind: Kind_CLASS, simpleName: 'ImageWithSizing', interfaces: []};
  function MaterialIcon(name, ordinal, data) {
    Enum.call(this);
    this.data = data;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MaterialIcon_initFields() {
    MaterialIcon_initFields = function () {
    };
    MaterialIcon$_3dRotation_instance = new MaterialIcon('_3dRotation', 0, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"/><\/svg>\n');
    MaterialIcon$accessibility_instance = new MaterialIcon('accessibility', 1, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/><\/svg>\n');
    MaterialIcon$accessible_instance = new MaterialIcon('accessible', 2, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"/><\/svg>\n');
    MaterialIcon$accountBalance_instance = new MaterialIcon('accountBalance', 3, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/><\/svg>\n');
    MaterialIcon$accountBalanceWallet_instance = new MaterialIcon('accountBalanceWallet', 4, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$accountBox_instance = new MaterialIcon('accountBox', 5, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/><\/svg>\n');
    MaterialIcon$accountCircle_instance = new MaterialIcon('accountCircle', 6, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/><\/svg>\n');
    MaterialIcon$addShoppingCart_instance = new MaterialIcon('addShoppingCart', 7, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/><\/svg>\n');
    MaterialIcon$alarm_instance = new MaterialIcon('alarm', 8, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$alarmAdd_instance = new MaterialIcon('alarmAdd', 9, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/><\/svg>\n');
    MaterialIcon$alarmOff_instance = new MaterialIcon('alarmOff', 10, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"/><\/svg>\n');
    MaterialIcon$alarmOn_instance = new MaterialIcon('alarmOn', 11, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/><\/svg>\n');
    MaterialIcon$allOut_instance = new MaterialIcon('allOut', 12, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z" fill="#010101"/><\/svg>\n');
    MaterialIcon$android_instance = new MaterialIcon('android', 13, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/><\/svg>\n');
    MaterialIcon$announcement_instance = new MaterialIcon('announcement', 14, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/><\/svg>\n');
    MaterialIcon$aspectRatio_instance = new MaterialIcon('aspectRatio', 15, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/><\/svg>\n');
    MaterialIcon$assessment_instance = new MaterialIcon('assessment', 16, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$assignment_instance = new MaterialIcon('assignment', 17, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/><\/svg>\n');
    MaterialIcon$assignmentInd_instance = new MaterialIcon('assignmentInd', 18, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/><\/svg>\n');
    MaterialIcon$assignmentLate_instance = new MaterialIcon('assignmentLate', 19, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><\/svg>\n');
    MaterialIcon$assignmentReturned_instance = new MaterialIcon('assignmentReturned', 20, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"/><\/svg>\n');
    MaterialIcon$assignmentReturn_instance = new MaterialIcon('assignmentReturn', 21, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"/><\/svg>\n');
    MaterialIcon$assignmentTurnedIn_instance = new MaterialIcon('assignmentTurnedIn', 22, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/><\/svg>\n');
    MaterialIcon$autorenew_instance = new MaterialIcon('autorenew', 23, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/><\/svg>\n');
    MaterialIcon$backup_instance = new MaterialIcon('backup', 24, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/><\/svg>\n');
    MaterialIcon$bookmark_instance = new MaterialIcon('bookmark', 25, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$bookmarkBorder_instance = new MaterialIcon('bookmarkBorder', 26, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/><\/svg>\n');
    MaterialIcon$book_instance = new MaterialIcon('book', 27, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/><\/svg>\n');
    MaterialIcon$bugReport_instance = new MaterialIcon('bugReport', 28, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/><\/svg>\n');
    MaterialIcon$build_instance = new MaterialIcon('build', 29, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/><\/svg>\n');
    MaterialIcon$cached_instance = new MaterialIcon('cached', 30, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/><\/svg>\n');
    MaterialIcon$cameraEnhance_instance = new MaterialIcon('cameraEnhance', 31, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/><\/svg>\n');
    MaterialIcon$cardGiftcard_instance = new MaterialIcon('cardGiftcard', 32, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/><\/svg>\n');
    MaterialIcon$cardMembership_instance = new MaterialIcon('cardMembership', 33, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/><\/svg>\n');
    MaterialIcon$cardTravel_instance = new MaterialIcon('cardTravel', 34, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/><\/svg>\n');
    MaterialIcon$changeHistory_instance = new MaterialIcon('changeHistory', 35, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/><\/svg>\n');
    MaterialIcon$checkCircle_instance = new MaterialIcon('checkCircle', 36, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><\/svg>\n');
    MaterialIcon$chromeReaderMode_instance = new MaterialIcon('chromeReaderMode', 37, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/><\/svg>\n');
    MaterialIcon$_class_instance = new MaterialIcon('_class', 38, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/><\/svg>\n');
    MaterialIcon$code_instance = new MaterialIcon('code', 39, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/><\/svg>\n');
    MaterialIcon$compareArrows_instance = new MaterialIcon('compareArrows', 40, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/><\/svg>\n');
    MaterialIcon$copyright_instance = new MaterialIcon('copyright', 41, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$creditCard_instance = new MaterialIcon('creditCard', 42, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/><\/svg>\n');
    MaterialIcon$dashboard_instance = new MaterialIcon('dashboard', 43, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/><\/svg>\n');
    MaterialIcon$dateRange_instance = new MaterialIcon('dateRange', 44, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/><\/svg>\n');
    MaterialIcon$delete_instance = new MaterialIcon('delete', 45, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><\/svg>\n');
    MaterialIcon$deleteForever_instance = new MaterialIcon('deleteForever', 46, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/><\/svg>\n');
    MaterialIcon$description_instance = new MaterialIcon('description', 47, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/><\/svg>\n');
    MaterialIcon$dns_instance = new MaterialIcon('dns', 48, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$done_instance = new MaterialIcon('done', 49, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/><\/svg>\n');
    MaterialIcon$doneAll_instance = new MaterialIcon('doneAll', 50, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/><\/svg>\n');
    MaterialIcon$donutLarge_instance = new MaterialIcon('donutLarge', 51, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"/><\/svg>\n');
    MaterialIcon$donutSmall_instance = new MaterialIcon('donutSmall', 52, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"/><\/svg>\n');
    MaterialIcon$eject_instance = new MaterialIcon('eject', 53, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/><\/svg>\n');
    MaterialIcon$euroSymbol_instance = new MaterialIcon('euroSymbol', 54, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/><\/svg>\n');
    MaterialIcon$event_instance = new MaterialIcon('event', 55, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/><\/svg>\n');
    MaterialIcon$eventSeat_instance = new MaterialIcon('eventSeat', 56, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"/><\/svg>\n');
    MaterialIcon$exitToApp_instance = new MaterialIcon('exitToApp', 57, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$explore_instance = new MaterialIcon('explore', 58, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/><\/svg>\n');
    MaterialIcon$extension_instance = new MaterialIcon('extension', 59, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/><\/svg>\n');
    MaterialIcon$face_instance = new MaterialIcon('face', 60, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$favorite_instance = new MaterialIcon('favorite', 61, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/><\/svg>\n');
    MaterialIcon$favoriteBorder_instance = new MaterialIcon('favoriteBorder', 62, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/><\/svg>\n');
    MaterialIcon$feedback_instance = new MaterialIcon('feedback', 63, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/><\/svg>\n');
    MaterialIcon$findInPage_instance = new MaterialIcon('findInPage', 64, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/><\/svg>\n');
    MaterialIcon$findReplace_instance = new MaterialIcon('findReplace', 65, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/><\/svg>\n');
    MaterialIcon$fingerprint_instance = new MaterialIcon('fingerprint', 66, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/><\/svg>\n');
    MaterialIcon$flightLand_instance = new MaterialIcon('flightLand', 67, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"/><\/svg>\n');
    MaterialIcon$flightTakeoff_instance = new MaterialIcon('flightTakeoff', 68, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/><\/svg>\n');
    MaterialIcon$flipToBack_instance = new MaterialIcon('flipToBack', 69, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$flipToFront_instance = new MaterialIcon('flipToFront', 70, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/><\/svg>\n');
    MaterialIcon$gavel_instance = new MaterialIcon('gavel', 71, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"/><\/svg>\n');
    MaterialIcon$getApp_instance = new MaterialIcon('getApp', 72, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><\/svg>\n');
    MaterialIcon$gif_instance = new MaterialIcon('gif', 73, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"/><\/svg>\n');
    MaterialIcon$grade_instance = new MaterialIcon('grade', 74, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><\/svg>\n');
    MaterialIcon$groupWork_instance = new MaterialIcon('groupWork', 75, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><\/svg>\n');
    MaterialIcon$gTranslate_instance = new MaterialIcon('gTranslate', 76, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"/><\/svg>\n');
    MaterialIcon$help_instance = new MaterialIcon('help', 77, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/><\/svg>\n');
    MaterialIcon$helpOutline_instance = new MaterialIcon('helpOutline', 78, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$highlightOff_instance = new MaterialIcon('highlightOff', 79, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$history_instance = new MaterialIcon('history', 80, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/><\/svg>\n');
    MaterialIcon$home_instance = new MaterialIcon('home', 81, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><\/svg>\n');
    MaterialIcon$hourglassEmpty_instance = new MaterialIcon('hourglassEmpty', 82, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/><\/svg>\n');
    MaterialIcon$hourglassFull_instance = new MaterialIcon('hourglassFull', 83, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/><\/svg>\n');
    MaterialIcon$https_instance = new MaterialIcon('https', 84, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/><\/svg>\n');
    MaterialIcon$http_instance = new MaterialIcon('http', 85, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"/><\/svg>\n');
    MaterialIcon$importantDevices_instance = new MaterialIcon('importantDevices', 86, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"/><\/svg>\n');
    MaterialIcon$info_instance = new MaterialIcon('info', 87, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/><\/svg>\n');
    MaterialIcon$infoOutline_instance = new MaterialIcon('infoOutline', 88, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/><\/svg>\n');
    MaterialIcon$input_instance = new MaterialIcon('input', 89, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/><\/svg>\n');
    MaterialIcon$invertColors_instance = new MaterialIcon('invertColors', 90, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/><\/svg>\n');
    MaterialIcon$label_instance = new MaterialIcon('label', 91, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/><\/svg>\n');
    MaterialIcon$labelOutline_instance = new MaterialIcon('labelOutline', 92, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/><\/svg>\n');
    MaterialIcon$language_instance = new MaterialIcon('language', 93, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/><\/svg>\n');
    MaterialIcon$launch_instance = new MaterialIcon('launch', 94, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/><\/svg>\n');
    MaterialIcon$lightbulbOutline_instance = new MaterialIcon('lightbulbOutline', 95, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/><\/svg>\n');
    MaterialIcon$lineStyle_instance = new MaterialIcon('lineStyle', 96, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/><\/svg>\n');
    MaterialIcon$lineWeight_instance = new MaterialIcon('lineWeight', 97, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/><\/svg>\n');
    MaterialIcon$list_instance = new MaterialIcon('list', 98, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/><\/svg>\n');
    MaterialIcon$lock_instance = new MaterialIcon('lock', 99, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/><\/svg>\n');
    MaterialIcon$lockOpen_instance = new MaterialIcon('lockOpen', 100, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/><\/svg>\n');
    MaterialIcon$lockOutline_instance = new MaterialIcon('lockOutline', 101, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/><\/svg>\n');
    MaterialIcon$loyalty_instance = new MaterialIcon('loyalty', 102, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/><\/svg>\n');
    MaterialIcon$markunreadMailbox_instance = new MaterialIcon('markunreadMailbox', 103, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$motorcycle_instance = new MaterialIcon('motorcycle', 104, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/><\/svg>\n');
    MaterialIcon$noteAdd_instance = new MaterialIcon('noteAdd', 105, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/><\/svg>\n');
    MaterialIcon$offlinePin_instance = new MaterialIcon('offlinePin', 106, '\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"/><\/svg>\n');
    MaterialIcon$opacity_instance = new MaterialIcon('opacity', 107, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/><\/svg>\n');
    MaterialIcon$openInBrowser_instance = new MaterialIcon('openInBrowser', 108, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/><\/svg>\n');
    MaterialIcon$openInNew_instance = new MaterialIcon('openInNew', 109, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/><\/svg>\n');
    MaterialIcon$openWith_instance = new MaterialIcon('openWith', 110, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/><\/svg>\n');
    MaterialIcon$pageview_instance = new MaterialIcon('pageview', 111, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"/><\/svg>\n');
    MaterialIcon$panTool_instance = new MaterialIcon('panTool', 112, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/><\/svg>\n');
    MaterialIcon$payment_instance = new MaterialIcon('payment', 113, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/><\/svg>\n');
    MaterialIcon$permCameraMic_instance = new MaterialIcon('permCameraMic', 114, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"/><\/svg>\n');
    MaterialIcon$permContactCalendar_instance = new MaterialIcon('permContactCalendar', 115, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/><\/svg>\n');
    MaterialIcon$permDataSetting_instance = new MaterialIcon('permDataSetting', 116, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$permDeviceInformation_instance = new MaterialIcon('permDeviceInformation', 117, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$permIdentity_instance = new MaterialIcon('permIdentity', 118, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/><\/svg>\n');
    MaterialIcon$permMedia_instance = new MaterialIcon('permMedia', 119, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/><\/svg>\n');
    MaterialIcon$permPhoneMsg_instance = new MaterialIcon('permPhoneMsg', 120, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/><\/svg>\n');
    MaterialIcon$permScanWifi_instance = new MaterialIcon('permScanWifi', 121, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"/><\/svg>\n');
    MaterialIcon$pets_instance = new MaterialIcon('pets', 122, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><\/svg>\n');
    MaterialIcon$pictureInPicture_instance = new MaterialIcon('pictureInPicture', 123, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/><\/svg>\n');
    MaterialIcon$pictureInPictureAlt_instance = new MaterialIcon('pictureInPictureAlt', 124, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/><\/svg>\n');
    MaterialIcon$playForWork_instance = new MaterialIcon('playForWork', 125, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/><\/svg>\n');
    MaterialIcon$polymer_instance = new MaterialIcon('polymer', 126, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/><\/svg>\n');
    MaterialIcon$powerSettingsNew_instance = new MaterialIcon('powerSettingsNew', 127, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/><\/svg>\n');
    MaterialIcon$pregnantWoman_instance = new MaterialIcon('pregnantWoman', 128, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/><\/svg>\n');
    MaterialIcon$print_instance = new MaterialIcon('print', 129, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><\/svg>\n');
    MaterialIcon$queryBuilder_instance = new MaterialIcon('queryBuilder', 130, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/><\/svg>\n');
    MaterialIcon$questionAnswer_instance = new MaterialIcon('questionAnswer', 131, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/><\/svg>\n');
    MaterialIcon$receipt_instance = new MaterialIcon('receipt', 132, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/><\/svg>\n');
    MaterialIcon$recordVoiceOver_instance = new MaterialIcon('recordVoiceOver', 133, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="9" cy="9" r="4"/><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"/><\/svg>\n');
    MaterialIcon$redeem_instance = new MaterialIcon('redeem', 134, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/><\/svg>\n');
    MaterialIcon$removeShoppingCart_instance = new MaterialIcon('removeShoppingCart', 135, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$reorder_instance = new MaterialIcon('reorder', 136, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/><\/svg>\n');
    MaterialIcon$reportProblem_instance = new MaterialIcon('reportProblem', 137, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$restore_instance = new MaterialIcon('restore', 138, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/><\/svg>\n');
    MaterialIcon$restorePage_instance = new MaterialIcon('restorePage', 139, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$room_instance = new MaterialIcon('room', 140, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><\/svg>\n');
    MaterialIcon$roundedCorner_instance = new MaterialIcon('roundedCorner', 141, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"/><\/svg>\n');
    MaterialIcon$rowing_instance = new MaterialIcon('rowing', 142, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"/><\/svg>\n');
    MaterialIcon$schedule_instance = new MaterialIcon('schedule', 143, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/><\/svg>\n');
    MaterialIcon$search_instance = new MaterialIcon('search', 144, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><\/svg>\n');
    MaterialIcon$settings_instance = new MaterialIcon('settings', 145, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98 c .04 -.32.07 -.64.07 -.98 s -.03 -.66 -.07 -.98 l 2.11 -1.65 c .19 -.15.24 -.42 .12 -.64 l -2 -3.46 c -.12 -.22 -.39 -.3 -.61 -.22 l -2.49 1 c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/><\/svg>\n');
    MaterialIcon$settingsApplications_instance = new MaterialIcon('settingsApplications', 146, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/><\/svg>\n');
    MaterialIcon$settingsBackupRestore_instance = new MaterialIcon('settingsBackupRestore', 147, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><\/svg>\n');
    MaterialIcon$settingsBluetooth_instance = new MaterialIcon('settingsBluetooth', 148, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"/><\/svg>\n');
    MaterialIcon$settingsBrightness_instance = new MaterialIcon('settingsBrightness', 149, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"/><\/svg>\n');
    MaterialIcon$settingsCell_instance = new MaterialIcon('settingsCell', 150, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"/><\/svg>\n');
    MaterialIcon$settingsEthernet_instance = new MaterialIcon('settingsEthernet', 151, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/><\/svg>\n');
    MaterialIcon$settingsInputAntenna_instance = new MaterialIcon('settingsInputAntenna', 152, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"/><\/svg>\n');
    MaterialIcon$settingsInputComponent_instance = new MaterialIcon('settingsInputComponent', 153, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/><\/svg>\n');
    MaterialIcon$settingsInputComposite_instance = new MaterialIcon('settingsInputComposite', 154, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/><\/svg>\n');
    MaterialIcon$settingsInputHdmi_instance = new MaterialIcon('settingsInputHdmi', 155, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/><\/svg>\n');
    MaterialIcon$settingsInputSvideo_instance = new MaterialIcon('settingsInputSvideo', 156, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><\/svg>\n');
    MaterialIcon$settingsOverscan_instance = new MaterialIcon('settingsOverscan', 157, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/><\/svg>\n');
    MaterialIcon$settingsPhone_instance = new MaterialIcon('settingsPhone', 158, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"/><\/svg>\n');
    MaterialIcon$settingsPower_instance = new MaterialIcon('settingsPower', 159, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$settingsRemote_instance = new MaterialIcon('settingsRemote', 160, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"/><\/svg>\n');
    MaterialIcon$settingsVoice_instance = new MaterialIcon('settingsVoice', 161, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/><\/svg>\n');
    MaterialIcon$shoppingBasket_instance = new MaterialIcon('shoppingBasket', 162, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$shoppingCart_instance = new MaterialIcon('shoppingCart', 163, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$shop_instance = new MaterialIcon('shop', 164, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/><\/svg>\n');
    MaterialIcon$shopTwo_instance = new MaterialIcon('shopTwo', 165, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/><\/svg>\n');
    MaterialIcon$speakerNotes_instance = new MaterialIcon('speakerNotes', 166, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/><\/svg>\n');
    MaterialIcon$speakerNotesOff_instance = new MaterialIcon('speakerNotesOff', 167, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$spellcheck_instance = new MaterialIcon('spellcheck', 168, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/><\/svg>\n');
    MaterialIcon$stars_instance = new MaterialIcon('stars', 169, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/><\/svg>\n');
    MaterialIcon$store_instance = new MaterialIcon('store', 170, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/><\/svg>\n');
    MaterialIcon$subject_instance = new MaterialIcon('subject', 171, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/><\/svg>\n');
    MaterialIcon$supervisorAccount_instance = new MaterialIcon('supervisorAccount', 172, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/><\/svg>\n');
    MaterialIcon$swapHoriz_instance = new MaterialIcon('swapHoriz', 173, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/><\/svg>\n');
    MaterialIcon$swapVerticalCircle_instance = new MaterialIcon('swapVerticalCircle', 174, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"/><\/svg>\n');
    MaterialIcon$swapVert_instance = new MaterialIcon('swapVert', 175, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/><\/svg>\n');
    MaterialIcon$systemUpdateAlt_instance = new MaterialIcon('systemUpdateAlt', 176, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$tab_instance = new MaterialIcon('tab', 177, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/><\/svg>\n');
    MaterialIcon$tabUnselected_instance = new MaterialIcon('tabUnselected', 178, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$theaters_instance = new MaterialIcon('theaters', 179, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/><\/svg>\n');
    MaterialIcon$thumbsUpDown_instance = new MaterialIcon('thumbsUpDown', 180, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"/><\/svg>\n');
    MaterialIcon$thumbDown_instance = new MaterialIcon('thumbDown', 181, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/><\/svg>\n');
    MaterialIcon$thumbUp_instance = new MaterialIcon('thumbUp', 182, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/><\/svg>\n');
    MaterialIcon$timeline_instance = new MaterialIcon('timeline', 183, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/><\/svg>\n');
    MaterialIcon$toc_instance = new MaterialIcon('toc', 184, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$today_instance = new MaterialIcon('today', 185, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/><\/svg>\n');
    MaterialIcon$toll_instance = new MaterialIcon('toll', 186, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/><\/svg>\n');
    MaterialIcon$touchApp_instance = new MaterialIcon('touchApp', 187, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/><\/svg>\n');
    MaterialIcon$trackChanges_instance = new MaterialIcon('trackChanges', 188, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"/><\/svg>\n');
    MaterialIcon$translate_instance = new MaterialIcon('translate', 189, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/><\/svg>\n');
    MaterialIcon$trendingDown_instance = new MaterialIcon('trendingDown', 190, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/><\/svg>\n');
    MaterialIcon$trendingFlat_instance = new MaterialIcon('trendingFlat', 191, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"/><\/svg>\n');
    MaterialIcon$trendingUp_instance = new MaterialIcon('trendingUp', 192, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/><\/svg>\n');
    MaterialIcon$turnedIn_instance = new MaterialIcon('turnedIn', 193, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$turnedInNot_instance = new MaterialIcon('turnedInNot', 194, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/><\/svg>\n');
    MaterialIcon$update_instance = new MaterialIcon('update', 195, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/><\/svg>\n');
    MaterialIcon$verifiedUser_instance = new MaterialIcon('verifiedUser', 196, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/><\/svg>\n');
    MaterialIcon$viewAgenda_instance = new MaterialIcon('viewAgenda', 197, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$viewArray_instance = new MaterialIcon('viewArray', 198, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/><\/svg>\n');
    MaterialIcon$viewCarousel_instance = new MaterialIcon('viewCarousel', 199, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/><\/svg>\n');
    MaterialIcon$viewColumn_instance = new MaterialIcon('viewColumn', 200, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/><\/svg>\n');
    MaterialIcon$viewDay_instance = new MaterialIcon('viewDay', 201, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"/><\/svg>\n');
    MaterialIcon$viewHeadline_instance = new MaterialIcon('viewHeadline', 202, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/><\/svg>\n');
    MaterialIcon$viewList_instance = new MaterialIcon('viewList', 203, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/><\/svg>\n');
    MaterialIcon$viewModule_instance = new MaterialIcon('viewModule', 204, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/><\/svg>\n');
    MaterialIcon$viewQuilt_instance = new MaterialIcon('viewQuilt', 205, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"/><\/svg>\n');
    MaterialIcon$viewStream_instance = new MaterialIcon('viewStream', 206, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/><\/svg>\n');
    MaterialIcon$viewWeek_instance = new MaterialIcon('viewWeek', 207, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$visibility_instance = new MaterialIcon('visibility', 208, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><\/svg>\n');
    MaterialIcon$visibilityOff_instance = new MaterialIcon('visibilityOff', 209, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/><\/svg>\n');
    MaterialIcon$watchLater_instance = new MaterialIcon('watchLater', 210, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/><\/svg>\n');
    MaterialIcon$work_instance = new MaterialIcon('work', 211, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/><\/svg>\n');
    MaterialIcon$youtubeSearchedFor_instance = new MaterialIcon('youtubeSearchedFor', 212, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"/><\/svg>\n');
    MaterialIcon$zoomIn_instance = new MaterialIcon('zoomIn', 213, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/><\/svg>\n');
    MaterialIcon$zoomOut_instance = new MaterialIcon('zoomOut', 214, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"/><\/svg>\n');
    MaterialIcon$addAlert_instance = new MaterialIcon('addAlert', 215, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"/><\/svg>\n');
    MaterialIcon$error_instance = new MaterialIcon('error', 216, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/><\/svg>\n');
    MaterialIcon$errorOutline_instance = new MaterialIcon('errorOutline', 217, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$warning_instance = new MaterialIcon('warning', 218, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$addToQueue_instance = new MaterialIcon('addToQueue', 219, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"/><\/svg>\n');
    MaterialIcon$airplay_instance = new MaterialIcon('airplay', 220, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$album_instance = new MaterialIcon('album', 221, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$artTrack_instance = new MaterialIcon('artTrack', 222, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"/><\/svg>\n');
    MaterialIcon$avTimer_instance = new MaterialIcon('avTimer', 223, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/><\/svg>\n');
    MaterialIcon$brandingWatermark_instance = new MaterialIcon('brandingWatermark', 224, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"/><\/svg>\n');
    MaterialIcon$callToAction_instance = new MaterialIcon('callToAction', 225, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"/><\/svg>\n');
    MaterialIcon$closedCaption_instance = new MaterialIcon('closedCaption', 226, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/><\/svg>\n');
    MaterialIcon$equalizer_instance = new MaterialIcon('equalizer', 227, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/><\/svg>\n');
    MaterialIcon$explicit_instance = new MaterialIcon('explicit', 228, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/><\/svg>\n');
    MaterialIcon$fastForward_instance = new MaterialIcon('fastForward', 229, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/><\/svg>\n');
    MaterialIcon$fastRewind_instance = new MaterialIcon('fastRewind', 230, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/><\/svg>\n');
    MaterialIcon$featuredPlayList_instance = new MaterialIcon('featuredPlayList', 231, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"/><\/svg>\n');
    MaterialIcon$featuredVideo_instance = new MaterialIcon('featuredVideo', 232, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"/><\/svg>\n');
    MaterialIcon$fiberDvr_instance = new MaterialIcon('fiberDvr', 233, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"/><\/svg>\n');
    MaterialIcon$fiberManualRecord_instance = new MaterialIcon('fiberManualRecord', 234, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><\/svg>\n');
    MaterialIcon$fiberNew_instance = new MaterialIcon('fiberNew', 235, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"/><\/svg>\n');
    MaterialIcon$fiberPin_instance = new MaterialIcon('fiberPin', 236, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"/><\/svg>\n');
    MaterialIcon$forward10_instance = new MaterialIcon('forward10', 237, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"/><\/svg>\n');
    MaterialIcon$forward30_instance = new MaterialIcon('forward30', 238, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"/><\/svg>\n');
    MaterialIcon$forward5_instance = new MaterialIcon('forward5', 239, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"/><\/svg>\n');
    MaterialIcon$games_instance = new MaterialIcon('games', 240, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/><\/svg>\n');
    MaterialIcon$hd_instance = new MaterialIcon('hd', 241, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"/><\/svg>\n');
    MaterialIcon$hearing_instance = new MaterialIcon('hearing', 242, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/><\/svg>\n');
    MaterialIcon$highQuality_instance = new MaterialIcon('highQuality', 243, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"/><\/svg>\n');
    MaterialIcon$libraryAdd_instance = new MaterialIcon('libraryAdd', 244, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/><\/svg>\n');
    MaterialIcon$libraryBooks_instance = new MaterialIcon('libraryBooks', 245, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/><\/svg>\n');
    MaterialIcon$libraryMusic_instance = new MaterialIcon('libraryMusic', 246, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/><\/svg>\n');
    MaterialIcon$loop_instance = new MaterialIcon('loop', 247, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><\/svg>\n');
    MaterialIcon$mic_instance = new MaterialIcon('mic', 248, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><\/svg>\n');
    MaterialIcon$micNone_instance = new MaterialIcon('micNone', 249, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><\/svg>\n');
    MaterialIcon$micOff_instance = new MaterialIcon('micOff', 250, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/><\/svg>\n');
    MaterialIcon$movie_instance = new MaterialIcon('movie', 251, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/><\/svg>\n');
    MaterialIcon$musicVideo_instance = new MaterialIcon('musicVideo', 252, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/><\/svg>\n');
    MaterialIcon$newReleases_instance = new MaterialIcon('newReleases', 253, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/><\/svg>\n');
    MaterialIcon$note_instance = new MaterialIcon('note', 254, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"/><\/svg>\n');
    MaterialIcon$notInterested_instance = new MaterialIcon('notInterested', 255, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/><\/svg>\n');
    MaterialIcon$pause_instance = new MaterialIcon('pause', 256, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><\/svg>\n');
    MaterialIcon$pauseCircleFilled_instance = new MaterialIcon('pauseCircleFilled', 257, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/><\/svg>\n');
    MaterialIcon$pauseCircleOutline_instance = new MaterialIcon('pauseCircleOutline', 258, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/><\/svg>\n');
    MaterialIcon$playlistAdd_instance = new MaterialIcon('playlistAdd', 259, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/><\/svg>\n');
    MaterialIcon$playlistAddCheck_instance = new MaterialIcon('playlistAddCheck', 260, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/><\/svg>\n');
    MaterialIcon$playlistPlay_instance = new MaterialIcon('playlistPlay', 261, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/><\/svg>\n');
    MaterialIcon$playArrow_instance = new MaterialIcon('playArrow', 262, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><\/svg>\n');
    MaterialIcon$playCircleFilled_instance = new MaterialIcon('playCircleFilled', 263, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/><\/svg>\n');
    MaterialIcon$playCircleOutline_instance = new MaterialIcon('playCircleOutline', 264, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$queue_instance = new MaterialIcon('queue', 265, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/><\/svg>\n');
    MaterialIcon$queueMusic_instance = new MaterialIcon('queueMusic', 266, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/><\/svg>\n');
    MaterialIcon$queuePlayNext_instance = new MaterialIcon('queuePlayNext', 267, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"/><\/svg>\n');
    MaterialIcon$radio_instance = new MaterialIcon('radio', 268, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"/><\/svg>\n');
    MaterialIcon$recentActors_instance = new MaterialIcon('recentActors', 269, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"/><\/svg>\n');
    MaterialIcon$removeFromQueue_instance = new MaterialIcon('removeFromQueue', 270, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"/><\/svg>\n');
    MaterialIcon$repeat_instance = new MaterialIcon('repeat', 271, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/><\/svg>\n');
    MaterialIcon$repeatOne_instance = new MaterialIcon('repeatOne', 272, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/><\/svg>\n');
    MaterialIcon$replay10_instance = new MaterialIcon('replay10', 273, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"/><\/svg>\n');
    MaterialIcon$replay_instance = new MaterialIcon('replay', 274, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/><\/svg>\n');
    MaterialIcon$replay30_instance = new MaterialIcon('replay30', 275, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"/><\/svg>\n');
    MaterialIcon$replay5_instance = new MaterialIcon('replay5', 276, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"/><\/svg>\n');
    MaterialIcon$shuffle_instance = new MaterialIcon('shuffle', 277, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/><\/svg>\n');
    MaterialIcon$skipNext_instance = new MaterialIcon('skipNext', 278, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/><\/svg>\n');
    MaterialIcon$skipPrevious_instance = new MaterialIcon('skipPrevious', 279, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/><\/svg>\n');
    MaterialIcon$slowMotionVideo_instance = new MaterialIcon('slowMotionVideo', 280, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"/><\/svg>\n');
    MaterialIcon$snooze_instance = new MaterialIcon('snooze', 281, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"/><\/svg>\n');
    MaterialIcon$sortByAlpha_instance = new MaterialIcon('sortByAlpha', 282, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"/><\/svg>\n');
    MaterialIcon$stop_instance = new MaterialIcon('stop', 283, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/><\/svg>\n');
    MaterialIcon$subscriptions_instance = new MaterialIcon('subscriptions', 284, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"/><\/svg>\n');
    MaterialIcon$subtitles_instance = new MaterialIcon('subtitles', 285, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/><\/svg>\n');
    MaterialIcon$surroundSound_instance = new MaterialIcon('surroundSound', 286, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$videocam_instance = new MaterialIcon('videocam', 287, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/><\/svg>\n');
    MaterialIcon$videocamOff_instance = new MaterialIcon('videocamOff', 288, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/><\/svg>\n');
    MaterialIcon$videoCall_instance = new MaterialIcon('videoCall', 289, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/><\/svg>\n');
    MaterialIcon$videoLabel_instance = new MaterialIcon('videoLabel', 290, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/><\/svg>\n');
    MaterialIcon$videoLibrary_instance = new MaterialIcon('videoLibrary', 291, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/><\/svg>\n');
    MaterialIcon$volumeDown_instance = new MaterialIcon('volumeDown', 292, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><\/svg>\n');
    MaterialIcon$volumeMute_instance = new MaterialIcon('volumeMute', 293, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 9v6h4l5 5V4l-5 5H7z"/><\/svg>\n');
    MaterialIcon$volumeOff_instance = new MaterialIcon('volumeOff', 294, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><\/svg>\n');
    MaterialIcon$volumeUp_instance = new MaterialIcon('volumeUp', 295, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><\/svg>\n');
    MaterialIcon$web_instance = new MaterialIcon('web', 296, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/><\/svg>\n');
    MaterialIcon$webAsset_instance = new MaterialIcon('webAsset', 297, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/><\/svg>\n');
    MaterialIcon$business_instance = new MaterialIcon('business', 298, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/><\/svg>\n');
    MaterialIcon$call_instance = new MaterialIcon('call', 299, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/><\/svg>\n');
    MaterialIcon$callEnd_instance = new MaterialIcon('callEnd', 300, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/><\/svg>\n');
    MaterialIcon$callMade_instance = new MaterialIcon('callMade', 301, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/><\/svg>\n');
    MaterialIcon$callMerge_instance = new MaterialIcon('callMerge', 302, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/><\/svg>\n');
    MaterialIcon$callMissed_instance = new MaterialIcon('callMissed', 303, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/><\/svg>\n');
    MaterialIcon$callMissedOutgoing_instance = new MaterialIcon('callMissedOutgoing', 304, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/><\/svg>\n');
    MaterialIcon$callReceived_instance = new MaterialIcon('callReceived', 305, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/><\/svg>\n');
    MaterialIcon$callSplit_instance = new MaterialIcon('callSplit', 306, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/><\/svg>\n');
    MaterialIcon$chat_instance = new MaterialIcon('chat', 307, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/><\/svg>\n');
    MaterialIcon$chatBubble_instance = new MaterialIcon('chatBubble', 308, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$chatBubbleOutline_instance = new MaterialIcon('chatBubbleOutline', 309, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><\/svg>\n');
    MaterialIcon$clearAll_instance = new MaterialIcon('clearAll', 310, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/><\/svg>\n');
    MaterialIcon$comment_instance = new MaterialIcon('comment', 311, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><\/svg>\n');
    MaterialIcon$contacts_instance = new MaterialIcon('contacts', 312, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/><\/svg>\n');
    MaterialIcon$contactMail_instance = new MaterialIcon('contactMail', 313, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"/><\/svg>\n');
    MaterialIcon$contactPhone_instance = new MaterialIcon('contactPhone', 314, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"/><\/svg>\n');
    MaterialIcon$dialerSip_instance = new MaterialIcon('dialerSip', 315, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$dialpad_instance = new MaterialIcon('dialpad', 316, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$email_instance = new MaterialIcon('email', 317, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><\/svg>\n');
    MaterialIcon$forum_instance = new MaterialIcon('forum', 318, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/><\/svg>\n');
    MaterialIcon$importContacts_instance = new MaterialIcon('importContacts', 319, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/><\/svg>\n');
    MaterialIcon$importExport_instance = new MaterialIcon('importExport', 320, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/><\/svg>\n');
    MaterialIcon$invertColorsOff_instance = new MaterialIcon('invertColorsOff', 321, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"/><\/svg>\n');
    MaterialIcon$liveHelp_instance = new MaterialIcon('liveHelp', 322, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/><\/svg>\n');
    MaterialIcon$locationOff_instance = new MaterialIcon('locationOff', 323, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"/><\/svg>\n');
    MaterialIcon$locationOn_instance = new MaterialIcon('locationOn', 324, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><\/svg>\n');
    MaterialIcon$mailOutline_instance = new MaterialIcon('mailOutline', 325, '\n<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/><\/svg>\n');
    MaterialIcon$message_instance = new MaterialIcon('message', 326, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><\/svg>\n');
    MaterialIcon$noSim_instance = new MaterialIcon('noSim', 327, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/><\/svg>\n');
    MaterialIcon$phonelinkErase_instance = new MaterialIcon('phonelinkErase', 328, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$phonelinkLock_instance = new MaterialIcon('phonelinkLock', 329, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z"/><\/svg>\n');
    MaterialIcon$phonelinkRing_instance = new MaterialIcon('phonelinkRing', 330, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z"/><\/svg>\n');
    MaterialIcon$phonelinkSetup_instance = new MaterialIcon('phonelinkSetup', 331, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$phone_instance = new MaterialIcon('phone', 332, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/><\/svg>\n');
    MaterialIcon$portableWifiOff_instance = new MaterialIcon('portableWifiOff', 333, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"/><\/svg>\n');
    MaterialIcon$presentToAll_instance = new MaterialIcon('presentToAll', 334, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"/><\/svg>\n');
    MaterialIcon$ringVolume_instance = new MaterialIcon('ringVolume', 335, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"/><\/svg>\n');
    MaterialIcon$rssFeed_instance = new MaterialIcon('rssFeed', 336, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18"/><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/><\/svg>\n');
    MaterialIcon$screenShare_instance = new MaterialIcon('screenShare', 337, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"/><\/svg>\n');
    MaterialIcon$speakerPhone_instance = new MaterialIcon('speakerPhone', 338, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z"/><\/svg>\n');
    MaterialIcon$stayCurrentLandscape_instance = new MaterialIcon('stayCurrentLandscape', 339, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/><\/svg>\n');
    MaterialIcon$stayCurrentPortrait_instance = new MaterialIcon('stayCurrentPortrait', 340, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$stayPrimaryLandscape_instance = new MaterialIcon('stayPrimaryLandscape', 341, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/><\/svg>\n');
    MaterialIcon$stayPrimaryPortrait_instance = new MaterialIcon('stayPrimaryPortrait', 342, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$stopScreenShare_instance = new MaterialIcon('stopScreenShare', 343, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z"/><\/svg>\n');
    MaterialIcon$swapCalls_instance = new MaterialIcon('swapCalls', 344, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"/><\/svg>\n');
    MaterialIcon$textsms_instance = new MaterialIcon('textsms', 345, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><\/svg>\n');
    MaterialIcon$voicemail_instance = new MaterialIcon('voicemail', 346, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"/><\/svg>\n');
    MaterialIcon$vpnKey_instance = new MaterialIcon('vpnKey', 347, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$add_instance = new MaterialIcon('add', 348, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><\/svg>\n');
    MaterialIcon$addBox_instance = new MaterialIcon('addBox', 349, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/><\/svg>\n');
    MaterialIcon$addCircle_instance = new MaterialIcon('addCircle', 350, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/><\/svg>\n');
    MaterialIcon$addCircleOutline_instance = new MaterialIcon('addCircleOutline', 351, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$archive_instance = new MaterialIcon('archive', 352, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/><\/svg>\n');
    MaterialIcon$backspace_instance = new MaterialIcon('backspace', 353, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/><\/svg>\n');
    MaterialIcon$block_instance = new MaterialIcon('block', 354, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$clear_instance = new MaterialIcon('clear', 355, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><\/svg>\n');
    MaterialIcon$contentCopy_instance = new MaterialIcon('contentCopy', 356, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/><\/svg>\n');
    MaterialIcon$contentCut_instance = new MaterialIcon('contentCut', 357, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/><\/svg>\n');
    MaterialIcon$contentPaste_instance = new MaterialIcon('contentPaste', 358, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/><\/svg>\n');
    MaterialIcon$create_instance = new MaterialIcon('create', 359, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><\/svg>\n');
    MaterialIcon$deleteSweep_instance = new MaterialIcon('deleteSweep', 360, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/><\/svg>\n');
    MaterialIcon$drafts_instance = new MaterialIcon('drafts', 361, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/><\/svg>\n');
    MaterialIcon$filterList_instance = new MaterialIcon('filterList', 362, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/><\/svg>\n');
    MaterialIcon$flag_instance = new MaterialIcon('flag', 363, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/><\/svg>\n');
    MaterialIcon$fontDownload_instance = new MaterialIcon('fontDownload', 364, '\n<svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/><\/svg>\n');
    MaterialIcon$forward_instance = new MaterialIcon('forward', 365, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8V4l8 8-8 8v-4H4V8z"/><\/svg>\n');
    MaterialIcon$gesture_instance = new MaterialIcon('gesture', 366, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/><\/svg>\n');
    MaterialIcon$inbox_instance = new MaterialIcon('inbox', 367, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/><\/svg>\n');
    MaterialIcon$link_instance = new MaterialIcon('link', 368, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/><\/svg>\n');
    MaterialIcon$lowPriority_instance = new MaterialIcon('lowPriority', 369, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/><\/svg>\n');
    MaterialIcon$mail_instance = new MaterialIcon('mail', 370, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><\/svg>\n');
    MaterialIcon$markunread_instance = new MaterialIcon('markunread', 371, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><\/svg>\n');
    MaterialIcon$moveToInbox_instance = new MaterialIcon('moveToInbox', 372, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"/><\/svg>\n');
    MaterialIcon$nextWeek_instance = new MaterialIcon('nextWeek', 373, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"/><\/svg>\n');
    MaterialIcon$redo_instance = new MaterialIcon('redo', 374, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/><\/svg>\n');
    MaterialIcon$remove_instance = new MaterialIcon('remove', 375, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/><\/svg>\n');
    MaterialIcon$removeCircle_instance = new MaterialIcon('removeCircle', 376, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/><\/svg>\n');
    MaterialIcon$removeCircleOutline_instance = new MaterialIcon('removeCircleOutline', 377, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$reply_instance = new MaterialIcon('reply', 378, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/><\/svg>\n');
    MaterialIcon$replyAll_instance = new MaterialIcon('replyAll', 379, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/><\/svg>\n');
    MaterialIcon$report_instance = new MaterialIcon('report', 380, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/><\/svg>\n');
    MaterialIcon$save_instance = new MaterialIcon('save', 381, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/><\/svg>\n');
    MaterialIcon$selectAll_instance = new MaterialIcon('selectAll', 382, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/><\/svg>\n');
    MaterialIcon$send_instance = new MaterialIcon('send', 383, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/><\/svg>\n');
    MaterialIcon$sort_instance = new MaterialIcon('sort', 384, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/><\/svg>\n');
    MaterialIcon$textFormat_instance = new MaterialIcon('textFormat', 385, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/><\/svg>\n');
    MaterialIcon$unarchive_instance = new MaterialIcon('unarchive', 386, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"/><\/svg>\n');
    MaterialIcon$undo_instance = new MaterialIcon('undo', 387, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/><\/svg>\n');
    MaterialIcon$weekend_instance = new MaterialIcon('weekend', 388, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z" fill="#010101"/><\/svg>\n');
    MaterialIcon$accessAlarms_instance = new MaterialIcon('accessAlarms', 389, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/><\/svg>\n');
    MaterialIcon$accessAlarm_instance = new MaterialIcon('accessAlarm', 390, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$accessTime_instance = new MaterialIcon('accessTime', 391, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/><\/svg>\n');
    MaterialIcon$addAlarm_instance = new MaterialIcon('addAlarm', 392, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/><\/svg>\n');
    MaterialIcon$airplanemodeActive_instance = new MaterialIcon('airplanemodeActive', 393, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.18 9"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/><\/svg>\n');
    MaterialIcon$airplanemodeInactive_instance = new MaterialIcon('airplanemodeInactive', 394, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"/><\/svg>\n');
    MaterialIcon$battery20_instance = new MaterialIcon('battery20', 395, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"/><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"/><\/svg>\n');
    MaterialIcon$battery30_instance = new MaterialIcon('battery30', 396, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"/><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"/><\/svg>\n');
    MaterialIcon$battery50_instance = new MaterialIcon('battery50', 397, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"/><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"/><\/svg>\n');
    MaterialIcon$battery60_instance = new MaterialIcon('battery60', 398, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"/><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"/><\/svg>\n');
    MaterialIcon$battery80_instance = new MaterialIcon('battery80', 399, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"/><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"/><\/svg>\n');
    MaterialIcon$battery90_instance = new MaterialIcon('battery90', 400, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"/><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"/><\/svg>\n');
    MaterialIcon$batteryAlert_instance = new MaterialIcon('batteryAlert', 401, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"/><\/svg>\n');
    MaterialIcon$batteryCharging20_instance = new MaterialIcon('batteryCharging20', 402, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"/><\/svg>\n');
    MaterialIcon$batteryCharging30_instance = new MaterialIcon('batteryCharging30', 403, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"/><\/svg>\n');
    MaterialIcon$batteryCharging50_instance = new MaterialIcon('batteryCharging50', 404, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"/><\/svg>\n');
    MaterialIcon$batteryCharging60_instance = new MaterialIcon('batteryCharging60', 405, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"/><\/svg>\n');
    MaterialIcon$batteryCharging80_instance = new MaterialIcon('batteryCharging80', 406, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"/><\/svg>\n');
    MaterialIcon$batteryCharging90_instance = new MaterialIcon('batteryCharging90', 407, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"/><\/svg>\n');
    MaterialIcon$batteryChargingFull_instance = new MaterialIcon('batteryChargingFull', 408, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/><\/svg>\n');
    MaterialIcon$batteryFull_instance = new MaterialIcon('batteryFull', 409, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/><\/svg>\n');
    MaterialIcon$batteryStd_instance = new MaterialIcon('batteryStd', 410, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/><\/svg>\n');
    MaterialIcon$batteryUnknown_instance = new MaterialIcon('batteryUnknown', 411, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"/><\/svg>\n');
    MaterialIcon$bluetooth_instance = new MaterialIcon('bluetooth', 412, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/><\/svg>\n');
    MaterialIcon$bluetoothConnected_instance = new MaterialIcon('bluetoothConnected', 413, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z"/><\/svg>\n');
    MaterialIcon$bluetoothDisabled_instance = new MaterialIcon('bluetoothDisabled', 414, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"/><\/svg>\n');
    MaterialIcon$bluetoothSearching_instance = new MaterialIcon('bluetoothSearching', 415, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"/><\/svg>\n');
    MaterialIcon$brightnessAuto_instance = new MaterialIcon('brightnessAuto', 416, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"/><\/svg>\n');
    MaterialIcon$brightnessHigh_instance = new MaterialIcon('brightnessHigh', 417, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$brightnessLow_instance = new MaterialIcon('brightnessLow', 418, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$brightnessMedium_instance = new MaterialIcon('brightnessMedium', 419, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$dataUsage_instance = new MaterialIcon('dataUsage', 420, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/><\/svg>\n');
    MaterialIcon$developerMode_instance = new MaterialIcon('developerMode', 421, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"/><\/svg>\n');
    MaterialIcon$devices_instance = new MaterialIcon('devices', 422, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/><\/svg>\n');
    MaterialIcon$dvr_instance = new MaterialIcon('dvr', 423, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"/><\/svg>\n');
    MaterialIcon$gpsFixed_instance = new MaterialIcon('gpsFixed', 424, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$gpsNotFixed_instance = new MaterialIcon('gpsNotFixed', 425, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$gpsOff_instance = new MaterialIcon('gpsOff', 426, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/><\/svg>\n');
    MaterialIcon$graphicEq_instance = new MaterialIcon('graphicEq', 427, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"/><\/svg>\n');
    MaterialIcon$locationDisabled_instance = new MaterialIcon('locationDisabled', 428, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/><\/svg>\n');
    MaterialIcon$locationSearching_instance = new MaterialIcon('locationSearching', 429, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$networkCell_instance = new MaterialIcon('networkCell', 430, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/><\/svg>\n');
    MaterialIcon$networkWifi_instance = new MaterialIcon('networkWifi', 431, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/><\/svg>\n');
    MaterialIcon$nfc_instance = new MaterialIcon('nfc', 432, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"/><\/svg>\n');
    MaterialIcon$screenLockLandscape_instance = new MaterialIcon('screenLockLandscape', 433, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z"/><\/svg>\n');
    MaterialIcon$screenLockPortrait_instance = new MaterialIcon('screenLockPortrait', 434, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$screenLockRotation_instance = new MaterialIcon('screenLockRotation', 435, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"/><\/svg>\n');
    MaterialIcon$screenRotation_instance = new MaterialIcon('screenRotation', 436, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/><\/svg>\n');
    MaterialIcon$sdStorage_instance = new MaterialIcon('sdStorage', 437, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/><\/svg>\n');
    MaterialIcon$settingsSystemDaydream_instance = new MaterialIcon('settingsSystemDaydream', 438, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/><\/svg>\n');
    MaterialIcon$signalCellular0Bar_instance = new MaterialIcon('signalCellular0Bar', 439, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><\/svg>\n');
    MaterialIcon$signalCellular1Bar_instance = new MaterialIcon('signalCellular1Bar', 440, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/><\/svg>\n');
    MaterialIcon$signalCellular2Bar_instance = new MaterialIcon('signalCellular2Bar', 441, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/><\/svg>\n');
    MaterialIcon$signalCellular3Bar_instance = new MaterialIcon('signalCellular3Bar', 442, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/><\/svg>\n');
    MaterialIcon$signalCellular4Bar_instance = new MaterialIcon('signalCellular4Bar', 443, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 22h20V2z"/><\/svg>\n');
    MaterialIcon$signalCellularConnectedNoInternet0Bar_instance = new MaterialIcon('signalCellularConnectedNoInternet0Bar', 444, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/><\/svg>\n');
    MaterialIcon$signalCellularConnectedNoInternet1Bar_instance = new MaterialIcon('signalCellularConnectedNoInternet1Bar', 445, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$signalCellularConnectedNoInternet2Bar_instance = new MaterialIcon('signalCellularConnectedNoInternet2Bar', 446, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$signalCellularConnectedNoInternet3Bar_instance = new MaterialIcon('signalCellularConnectedNoInternet3Bar', 447, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$signalCellularConnectedNoInternet4Bar_instance = new MaterialIcon('signalCellularConnectedNoInternet4Bar', 448, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/><\/svg>\n');
    MaterialIcon$signalCellularNoSim_instance = new MaterialIcon('signalCellularNoSim', 449, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/><\/svg>\n');
    MaterialIcon$signalCellularNull_instance = new MaterialIcon('signalCellularNull', 450, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/><\/svg>\n');
    MaterialIcon$signalCellularOff_instance = new MaterialIcon('signalCellularOff', 451, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"/><\/svg>\n');
    MaterialIcon$signalWifi0Bar_instance = new MaterialIcon('signalWifi0Bar', 452, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><\/svg>\n');
    MaterialIcon$signalWifi1Bar_instance = new MaterialIcon('signalWifi1Bar', 453, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"/><\/svg>\n');
    MaterialIcon$signalWifi1BarLock_instance = new MaterialIcon('signalWifi1BarLock', 454, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"/><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"/><path d="M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z"/><\/svg>\n');
    MaterialIcon$signalWifi2Bar_instance = new MaterialIcon('signalWifi2Bar', 455, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"/><\/svg>\n');
    MaterialIcon$signalWifi2BarLock_instance = new MaterialIcon('signalWifi2BarLock', 456, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"/><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"/><path d="M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z"/><\/svg>\n');
    MaterialIcon$signalWifi3Bar_instance = new MaterialIcon('signalWifi3Bar', 457, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/><\/svg>\n');
    MaterialIcon$signalWifi3BarLock_instance = new MaterialIcon('signalWifi3BarLock', 458, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path opacity=".3" d="M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z"/><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9"/><\/svg>\n');
    MaterialIcon$signalWifi4Bar_instance = new MaterialIcon('signalWifi4Bar', 459, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><\/svg>\n');
    MaterialIcon$signalWifi4BarLock_instance = new MaterialIcon('signalWifi4BarLock', 460, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z"/><\/svg>\n');
    MaterialIcon$signalWifiOff_instance = new MaterialIcon('signalWifiOff', 461, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbar1Bar26x24px_instance = new MaterialIcon('signalWifiStatusbar1Bar26x24px', 462, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z"/><path fill-opacity=".3" d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbar2Bar26x24px_instance = new MaterialIcon('signalWifiStatusbar2Bar26x24px', 463, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"/><path d="M13.01 21.99l7.54-9.4C20.26 12.38 17.36 10 13 10c-4.36 0-7.26 2.38-7.55 2.59l7.54 9.4h.02z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbar3Bar26x24px_instance = new MaterialIcon('signalWifiStatusbar3Bar26x24px', 464, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M13.01 21.99l9.43-11.75C22.07 9.97 18.44 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75h.02z"/><path fill-opacity=".3" d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbar4Bar26x24px_instance = new MaterialIcon('signalWifiStatusbar4Bar26x24px', 465, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_instance = new MaterialIcon('signalWifiStatusbarConnectedNoInternet126x24px', 466, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M7.34 14.95L13 21.99V22v-.01l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95zM22 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_instance = new MaterialIcon('signalWifiStatusbarConnectedNoInternet26x24px', 467, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_instance = new MaterialIcon('signalWifiStatusbarConnectedNoInternet226x24px', 468, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M5.45 12.59l7.54 9.4.01.01.01-.01L20 13.28v-1.09c-1.07-.73-3.59-2.19-7-2.19-4.36 0-7.26 2.38-7.55 2.59zM22 10v8h2v-8h-2zm0 12h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_instance = new MaterialIcon('signalWifiStatusbarConnectedNoInternet326x24px', 469, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M20 13.28V8.71C18.35 7.87 15.94 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75.01.01.01-.01L20 13.28zM22 20h2v2h-2zm0-10h2v8h-2z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_instance = new MaterialIcon('signalWifiStatusbarConnectedNoInternet426x24px', 470, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M22 22h2v-2h-2v2zM13 2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24l1.35-1.68C25.1 5.96 20.26 2 13 2zm9 16h2v-8h-2v8z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarNotConnected26x24px_instance = new MaterialIcon('signalWifiStatusbarNotConnected26x24px', 471, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-opacity=".3" d="M21 8.5c.85 0 1.64.23 2.34.62l2.24-2.79C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01 4.21-5.24c-.76-.87-1.22-2-1.22-3.25 0-2.76 2.24-5 5-5z"/><path d="M21 10c-1.93 0-3.5 1.57-3.5 3.5h1.75c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .48-.2.92-.51 1.24l-1.09 1.1c-.63.63-1.02 1.51-1.02 2.47v.44h1.75c0-1.31.39-1.84 1.03-2.47l.78-.8c.5-.5.82-1.2.82-1.97C24.5 11.57 22.93 10 21 10zm-.95 11.95h1.9v-1.9h-1.9v1.9z"/><\/svg>\n');
    MaterialIcon$signalWifiStatusbarNull26x24px_instance = new MaterialIcon('signalWifiStatusbarNull26x24px', 472, '\n<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M13 4c4.25 0 7.62 1.51 9.68 2.75L13 18.8 3.33 6.75C5.38 5.51 8.75 4 13 4m0-2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L25.58 6.32C25.1 5.96 20.26 2 13 2z"/><\/svg>\n');
    MaterialIcon$storage_instance = new MaterialIcon('storage', 473, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/><\/svg>\n');
    MaterialIcon$usb_instance = new MaterialIcon('usb', 474, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"/><\/svg>\n');
    MaterialIcon$wallpaper_instance = new MaterialIcon('wallpaper', 475, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/><\/svg>\n');
    MaterialIcon$widgets_instance = new MaterialIcon('widgets', 476, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/><\/svg>\n');
    MaterialIcon$wifiLock_instance = new MaterialIcon('wifiLock', 477, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"/><\/svg>\n');
    MaterialIcon$wifiTethering_instance = new MaterialIcon('wifiTethering', 478, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"/><\/svg>\n');
    MaterialIcon$attachFile_instance = new MaterialIcon('attachFile', 479, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/><\/svg>\n');
    MaterialIcon$attachMoney_instance = new MaterialIcon('attachMoney', 480, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/><\/svg>\n');
    MaterialIcon$borderAll_instance = new MaterialIcon('borderAll', 481, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/><\/svg>\n');
    MaterialIcon$borderBottom_instance = new MaterialIcon('borderBottom', 482, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"/><\/svg>\n');
    MaterialIcon$borderClear_instance = new MaterialIcon('borderClear', 483, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"/><\/svg>\n');
    MaterialIcon$borderColor_instance = new MaterialIcon('borderColor', 484, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M0 20h24v4H0z"/><\/svg>\n');
    MaterialIcon$borderHorizontal_instance = new MaterialIcon('borderHorizontal', 485, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$borderInner_instance = new MaterialIcon('borderInner', 486, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$borderLeft_instance = new MaterialIcon('borderLeft', 487, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"/><\/svg>\n');
    MaterialIcon$borderOuter_instance = new MaterialIcon('borderOuter', 488, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"/><\/svg>\n');
    MaterialIcon$borderRight_instance = new MaterialIcon('borderRight', 489, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"/><\/svg>\n');
    MaterialIcon$borderStyle_instance = new MaterialIcon('borderStyle', 490, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/><\/svg>\n');
    MaterialIcon$borderTop_instance = new MaterialIcon('borderTop', 491, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$borderVertical_instance = new MaterialIcon('borderVertical', 492, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"/><\/svg>\n');
    MaterialIcon$bubbleChart_instance = new MaterialIcon('bubbleChart', 493, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="7.2" cy="14.4" r="3.2"/><circle cx="14.8" cy="18" r="2"/><circle cx="15.2" cy="8.8" r="4.8"/><\/svg>\n');
    MaterialIcon$dragHandle_instance = new MaterialIcon('dragHandle', 494, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/><\/svg>\n');
    MaterialIcon$formatAlignCenter_instance = new MaterialIcon('formatAlignCenter', 495, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/><\/svg>\n');
    MaterialIcon$formatAlignJustify_instance = new MaterialIcon('formatAlignJustify', 496, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/><\/svg>\n');
    MaterialIcon$formatAlignLeft_instance = new MaterialIcon('formatAlignLeft', 497, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/><\/svg>\n');
    MaterialIcon$formatAlignRight_instance = new MaterialIcon('formatAlignRight', 498, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/><\/svg>\n');
    MaterialIcon$formatBold_instance = new MaterialIcon('formatBold', 499, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$formatClear_instance = new MaterialIcon('formatClear', 500, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/><\/svg>\n');
    MaterialIcon$formatColorFill_instance = new MaterialIcon('formatColorFill', 501, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"/><path fill-opacity=".36" d="M0 20h24v4H0z"/><\/svg>\n');
    MaterialIcon$formatColorReset_instance = new MaterialIcon('formatColorReset', 502, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"/><\/svg>\n');
    MaterialIcon$formatColorText_instance = new MaterialIcon('formatColorText', 503, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-opacity=".36" d="M0 20h24v4H0z"/><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/><\/svg>\n');
    MaterialIcon$formatIndentDecrease_instance = new MaterialIcon('formatIndentDecrease', 504, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><\/svg>\n');
    MaterialIcon$formatIndentIncrease_instance = new MaterialIcon('formatIndentIncrease', 505, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><\/svg>\n');
    MaterialIcon$formatItalic_instance = new MaterialIcon('formatItalic', 506, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/><\/svg>\n');
    MaterialIcon$formatLineSpacing_instance = new MaterialIcon('formatLineSpacing', 507, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"/><\/svg>\n');
    MaterialIcon$formatListBulleted_instance = new MaterialIcon('formatListBulleted', 508, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/><\/svg>\n');
    MaterialIcon$formatListNumbered_instance = new MaterialIcon('formatListNumbered', 509, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/><\/svg>\n');
    MaterialIcon$formatPaint_instance = new MaterialIcon('formatPaint', 510, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/><\/svg>\n');
    MaterialIcon$formatQuote_instance = new MaterialIcon('formatQuote', 511, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/><\/svg>\n');
    MaterialIcon$formatShapes_instance = new MaterialIcon('formatShapes', 512, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"/><\/svg>\n');
    MaterialIcon$formatSize_instance = new MaterialIcon('formatSize', 513, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/><\/svg>\n');
    MaterialIcon$formatStrikethrough_instance = new MaterialIcon('formatStrikethrough', 514, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/><\/svg>\n');
    MaterialIcon$formatTextdirectionLToR_instance = new MaterialIcon('formatTextdirectionLToR', 515, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"/><\/svg>\n');
    MaterialIcon$formatTextdirectionRToL_instance = new MaterialIcon('formatTextdirectionRToL', 516, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"/><\/svg>\n');
    MaterialIcon$formatUnderlined_instance = new MaterialIcon('formatUnderlined', 517, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/><\/svg>\n');
    MaterialIcon$functions_instance = new MaterialIcon('functions', 518, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/><\/svg>\n');
    MaterialIcon$highlight_instance = new MaterialIcon('highlight', 519, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"/><\/svg>\n');
    MaterialIcon$insertChart_instance = new MaterialIcon('insertChart', 520, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$insertComment_instance = new MaterialIcon('insertComment', 521, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><\/svg>\n');
    MaterialIcon$insertDriveFile_instance = new MaterialIcon('insertDriveFile', 522, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/><\/svg>\n');
    MaterialIcon$insertEmoticon_instance = new MaterialIcon('insertEmoticon', 523, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/><\/svg>\n');
    MaterialIcon$insertInvitation_instance = new MaterialIcon('insertInvitation', 524, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/><\/svg>\n');
    MaterialIcon$insertLink_instance = new MaterialIcon('insertLink', 525, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/><\/svg>\n');
    MaterialIcon$insertPhoto_instance = new MaterialIcon('insertPhoto', 526, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/><\/svg>\n');
    MaterialIcon$linearScale_instance = new MaterialIcon('linearScale', 527, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"/><\/svg>\n');
    MaterialIcon$mergeType_instance = new MaterialIcon('mergeType', 528, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/><\/svg>\n');
    MaterialIcon$modeComment_instance = new MaterialIcon('modeComment', 529, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/><\/svg>\n');
    MaterialIcon$modeEdit_instance = new MaterialIcon('modeEdit', 530, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><\/svg>\n');
    MaterialIcon$monetizationOn_instance = new MaterialIcon('monetizationOn', 531, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/><\/svg>\n');
    MaterialIcon$moneyOff_instance = new MaterialIcon('moneyOff', 532, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"/><\/svg>\n');
    MaterialIcon$multilineChart_instance = new MaterialIcon('multilineChart', 533, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"/><\/svg>\n');
    MaterialIcon$pieChart_instance = new MaterialIcon('pieChart', 534, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/><\/svg>\n');
    MaterialIcon$pieChartOutlined_instance = new MaterialIcon('pieChartOutlined', 535, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"/><\/svg>\n');
    MaterialIcon$publish_instance = new MaterialIcon('publish', 536, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/><\/svg>\n');
    MaterialIcon$shortText_instance = new MaterialIcon('shortText', 537, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"/><\/svg>\n');
    MaterialIcon$showChart_instance = new MaterialIcon('showChart', 538, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/><\/svg>\n');
    MaterialIcon$spaceBar_instance = new MaterialIcon('spaceBar', 539, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/><\/svg>\n');
    MaterialIcon$strikethroughS_instance = new MaterialIcon('strikethroughS', 540, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"/><\/svg>\n');
    MaterialIcon$textFields_instance = new MaterialIcon('textFields', 541, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/><\/svg>\n');
    MaterialIcon$title_instance = new MaterialIcon('title', 542, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4z"/><\/svg>\n');
    MaterialIcon$verticalAlignBottom_instance = new MaterialIcon('verticalAlignBottom', 543, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/><\/svg>\n');
    MaterialIcon$verticalAlignCenter_instance = new MaterialIcon('verticalAlignCenter', 544, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/><\/svg>\n');
    MaterialIcon$verticalAlignTop_instance = new MaterialIcon('verticalAlignTop', 545, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/><\/svg>\n');
    MaterialIcon$wrapText_instance = new MaterialIcon('wrapText', 546, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$attachment_instance = new MaterialIcon('attachment', 547, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/><\/svg>\n');
    MaterialIcon$cloud_instance = new MaterialIcon('cloud', 548, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/><\/svg>\n');
    MaterialIcon$cloudCircle_instance = new MaterialIcon('cloudCircle', 549, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"/><\/svg>\n');
    MaterialIcon$cloudDone_instance = new MaterialIcon('cloudDone', 550, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/><\/svg>\n');
    MaterialIcon$cloudDownload_instance = new MaterialIcon('cloudDownload', 551, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/><\/svg>\n');
    MaterialIcon$cloudOff_instance = new MaterialIcon('cloudOff', 552, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/><\/svg>\n');
    MaterialIcon$cloudQueue_instance = new MaterialIcon('cloudQueue', 553, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/><\/svg>\n');
    MaterialIcon$cloudUpload_instance = new MaterialIcon('cloudUpload', 554, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/><\/svg>\n');
    MaterialIcon$createNewFolder_instance = new MaterialIcon('createNewFolder', 555, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/><\/svg>\n');
    MaterialIcon$fileDownload_instance = new MaterialIcon('fileDownload', 556, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><\/svg>\n');
    MaterialIcon$fileUpload_instance = new MaterialIcon('fileUpload', 557, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/><\/svg>\n');
    MaterialIcon$folder_instance = new MaterialIcon('folder', 558, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/><\/svg>\n');
    MaterialIcon$folderOpen_instance = new MaterialIcon('folderOpen', 559, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/><\/svg>\n');
    MaterialIcon$folderShared_instance = new MaterialIcon('folderShared', 560, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/><\/svg>\n');
    MaterialIcon$cast_instance = new MaterialIcon('cast', 561, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/><\/svg>\n');
    MaterialIcon$castConnected_instance = new MaterialIcon('castConnected', 562, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$computer_instance = new MaterialIcon('computer', 563, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/><\/svg>\n');
    MaterialIcon$desktopMac_instance = new MaterialIcon('desktopMac', 564, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/><\/svg>\n');
    MaterialIcon$desktopWindows_instance = new MaterialIcon('desktopWindows', 565, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/><\/svg>\n');
    MaterialIcon$developerBoard_instance = new MaterialIcon('developerBoard', 566, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/><\/svg>\n');
    MaterialIcon$devicesOther_instance = new MaterialIcon('devicesOther', 567, '\n<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"/><\/svg>\n');
    MaterialIcon$deviceHub_instance = new MaterialIcon('deviceHub', 568, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/><\/svg>\n');
    MaterialIcon$dock_instance = new MaterialIcon('dock', 569, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"/><\/svg>\n');
    MaterialIcon$gamepad_instance = new MaterialIcon('gamepad', 570, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/><\/svg>\n');
    MaterialIcon$headset_instance = new MaterialIcon('headset', 571, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/><\/svg>\n');
    MaterialIcon$headsetMic_instance = new MaterialIcon('headsetMic', 572, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/><\/svg>\n');
    MaterialIcon$keyboard_instance = new MaterialIcon('keyboard', 573, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/><\/svg>\n');
    MaterialIcon$keyboardArrowDown_instance = new MaterialIcon('keyboardArrowDown', 574, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><\/svg>\n');
    MaterialIcon$keyboardArrowLeft_instance = new MaterialIcon('keyboardArrowLeft', 575, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><\/svg>\n');
    MaterialIcon$keyboardArrowRight_instance = new MaterialIcon('keyboardArrowRight', 576, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><\/svg>\n');
    MaterialIcon$keyboardArrowUp_instance = new MaterialIcon('keyboardArrowUp', 577, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><\/svg>\n');
    MaterialIcon$keyboardBackspace_instance = new MaterialIcon('keyboardBackspace', 578, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/><\/svg>\n');
    MaterialIcon$keyboardCapslock_instance = new MaterialIcon('keyboardCapslock', 579, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"/><\/svg>\n');
    MaterialIcon$keyboardHide_instance = new MaterialIcon('keyboardHide', 580, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"/><\/svg>\n');
    MaterialIcon$keyboardReturn_instance = new MaterialIcon('keyboardReturn', 581, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/><\/svg>\n');
    MaterialIcon$keyboardTab_instance = new MaterialIcon('keyboardTab', 582, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/><\/svg>\n');
    MaterialIcon$keyboardVoice_instance = new MaterialIcon('keyboardVoice', 583, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><\/svg>\n');
    MaterialIcon$laptop_instance = new MaterialIcon('laptop', 584, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/><\/svg>\n');
    MaterialIcon$laptopChromebook_instance = new MaterialIcon('laptopChromebook', 585, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/><\/svg>\n');
    MaterialIcon$laptopMac_instance = new MaterialIcon('laptopMac', 586, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><\/svg>\n');
    MaterialIcon$laptopWindows_instance = new MaterialIcon('laptopWindows', 587, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/><\/svg>\n');
    MaterialIcon$memory_instance = new MaterialIcon('memory', 588, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/><\/svg>\n');
    MaterialIcon$mouse_instance = new MaterialIcon('mouse', 589, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/><\/svg>\n');
    MaterialIcon$phonelink_instance = new MaterialIcon('phonelink', 590, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/><\/svg>\n');
    MaterialIcon$phonelinkOff_instance = new MaterialIcon('phonelinkOff', 591, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$phoneAndroid_instance = new MaterialIcon('phoneAndroid', 592, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/><\/svg>\n');
    MaterialIcon$phoneIphone_instance = new MaterialIcon('phoneIphone', 593, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/><\/svg>\n');
    MaterialIcon$powerInput_instance = new MaterialIcon('powerInput', 594, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/><\/svg>\n');
    MaterialIcon$router_instance = new MaterialIcon('router', 595, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"/><\/svg>\n');
    MaterialIcon$scanner_instance = new MaterialIcon('scanner', 596, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"/><\/svg>\n');
    MaterialIcon$security_instance = new MaterialIcon('security', 597, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/><\/svg>\n');
    MaterialIcon$simCard_instance = new MaterialIcon('simCard', 598, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$smartphone_instance = new MaterialIcon('smartphone', 599, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$speaker_instance = new MaterialIcon('speaker', 600, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><\/svg>\n');
    MaterialIcon$speakerGroup_instance = new MaterialIcon('speakerGroup', 601, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="14" cy="12.5" r="2.5"/><path d="M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z"/><\/svg>\n');
    MaterialIcon$tablet_instance = new MaterialIcon('tablet', 602, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/><\/svg>\n');
    MaterialIcon$tabletAndroid_instance = new MaterialIcon('tabletAndroid', 603, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/><\/svg>\n');
    MaterialIcon$tabletMac_instance = new MaterialIcon('tabletMac', 604, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/><\/svg>\n');
    MaterialIcon$toys_instance = new MaterialIcon('toys', 605, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"/><\/svg>\n');
    MaterialIcon$tv_instance = new MaterialIcon('tv', 606, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/><\/svg>\n');
    MaterialIcon$videogameAsset_instance = new MaterialIcon('videogameAsset', 607, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$watch_instance = new MaterialIcon('watch', 608, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"/><\/svg>\n');
    MaterialIcon$addAPhoto_instance = new MaterialIcon('addAPhoto', 609, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"/><\/svg>\n');
    MaterialIcon$addToPhotos_instance = new MaterialIcon('addToPhotos', 610, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/><\/svg>\n');
    MaterialIcon$adjust_instance = new MaterialIcon('adjust', 611, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/><\/svg>\n');
    MaterialIcon$assistant_instance = new MaterialIcon('assistant', 612, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"/><\/svg>\n');
    MaterialIcon$assistantPhoto_instance = new MaterialIcon('assistantPhoto', 613, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/><\/svg>\n');
    MaterialIcon$audiotrack_instance = new MaterialIcon('audiotrack', 614, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/><\/svg>\n');
    MaterialIcon$blurCircular_instance = new MaterialIcon('blurCircular', 615, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$blurLinear_instance = new MaterialIcon('blurLinear', 616, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/><\/svg>\n');
    MaterialIcon$blurOff_instance = new MaterialIcon('blurOff', 617, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/><\/svg>\n');
    MaterialIcon$blurOn_instance = new MaterialIcon('blurOn', 618, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><\/svg>\n');
    MaterialIcon$brightness1_instance = new MaterialIcon('brightness1', 619, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><\/svg>\n');
    MaterialIcon$brightness2_instance = new MaterialIcon('brightness2', 620, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/><\/svg>\n');
    MaterialIcon$brightness3_instance = new MaterialIcon('brightness3', 621, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/><\/svg>\n');
    MaterialIcon$brightness4_instance = new MaterialIcon('brightness4', 622, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$brightness5_instance = new MaterialIcon('brightness5', 623, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$brightness6_instance = new MaterialIcon('brightness6', 624, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$brightness7_instance = new MaterialIcon('brightness7', 625, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$brokenImage_instance = new MaterialIcon('brokenImage', 626, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/><\/svg>\n');
    MaterialIcon$brush_instance = new MaterialIcon('brush', 627, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/><\/svg>\n');
    MaterialIcon$burstMode_instance = new MaterialIcon('burstMode', 628, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"/><\/svg>\n');
    MaterialIcon$camera_instance = new MaterialIcon('camera', 629, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"/><\/svg>\n');
    MaterialIcon$cameraAlt_instance = new MaterialIcon('cameraAlt', 630, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$cameraFront_instance = new MaterialIcon('cameraFront', 631, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"/><\/svg>\n');
    MaterialIcon$cameraRear_instance = new MaterialIcon('cameraRear', 632, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"/><\/svg>\n');
    MaterialIcon$cameraRoll_instance = new MaterialIcon('cameraRoll', 633, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"/><\/svg>\n');
    MaterialIcon$centerFocusStrong_instance = new MaterialIcon('centerFocusStrong', 634, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/><\/svg>\n');
    MaterialIcon$centerFocusWeak_instance = new MaterialIcon('centerFocusWeak', 635, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$collections_instance = new MaterialIcon('collections', 636, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/><\/svg>\n');
    MaterialIcon$collectionsBookmark_instance = new MaterialIcon('collectionsBookmark', 637, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"/><\/svg>\n');
    MaterialIcon$colorize_instance = new MaterialIcon('colorize', 638, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/><\/svg>\n');
    MaterialIcon$colorLens_instance = new MaterialIcon('colorLens', 639, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$compare_instance = new MaterialIcon('compare', 640, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$controlPoint_instance = new MaterialIcon('controlPoint', 641, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$controlPointDuplicate_instance = new MaterialIcon('controlPointDuplicate', 642, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/><\/svg>\n');
    MaterialIcon$crop169_instance = new MaterialIcon('crop169', 643, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/><\/svg>\n');
    MaterialIcon$crop_instance = new MaterialIcon('crop', 644, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/><\/svg>\n');
    MaterialIcon$crop32_instance = new MaterialIcon('crop32', 645, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/><\/svg>\n');
    MaterialIcon$crop54_instance = new MaterialIcon('crop54', 646, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/><\/svg>\n');
    MaterialIcon$crop75_instance = new MaterialIcon('crop75', 647, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/><\/svg>\n');
    MaterialIcon$cropDin_instance = new MaterialIcon('cropDin', 648, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><\/svg>\n');
    MaterialIcon$cropFree_instance = new MaterialIcon('cropFree', 649, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$cropLandscape_instance = new MaterialIcon('cropLandscape', 650, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/><\/svg>\n');
    MaterialIcon$cropOriginal_instance = new MaterialIcon('cropOriginal', 651, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/><\/svg>\n');
    MaterialIcon$cropPortrait_instance = new MaterialIcon('cropPortrait', 652, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/><\/svg>\n');
    MaterialIcon$cropRotate_instance = new MaterialIcon('cropRotate', 653, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"/><\/svg>\n');
    MaterialIcon$cropSquare_instance = new MaterialIcon('cropSquare', 654, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/><\/svg>\n');
    MaterialIcon$dehaze_instance = new MaterialIcon('dehaze', 655, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/><\/svg>\n');
    MaterialIcon$details_instance = new MaterialIcon('details', 656, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/><\/svg>\n');
    MaterialIcon$edit_instance = new MaterialIcon('edit', 657, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><\/svg>\n');
    MaterialIcon$exposure_instance = new MaterialIcon('exposure', 658, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"/><\/svg>\n');
    MaterialIcon$exposureNeg1_instance = new MaterialIcon('exposureNeg1', 659, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"/><\/svg>\n');
    MaterialIcon$exposureNeg2_instance = new MaterialIcon('exposureNeg2', 660, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"/><\/svg>\n');
    MaterialIcon$exposurePlus1_instance = new MaterialIcon('exposurePlus1', 661, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/><\/svg>\n');
    MaterialIcon$exposurePlus2_instance = new MaterialIcon('exposurePlus2', 662, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"/><\/svg>\n');
    MaterialIcon$exposureZero_instance = new MaterialIcon('exposureZero', 663, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"/><\/svg>\n');
    MaterialIcon$filter1_instance = new MaterialIcon('filter1', 664, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/><\/svg>\n');
    MaterialIcon$filter_instance = new MaterialIcon('filter', 665, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/><\/svg>\n');
    MaterialIcon$filter2_instance = new MaterialIcon('filter2', 666, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"/><\/svg>\n');
    MaterialIcon$filter3_instance = new MaterialIcon('filter3', 667, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"/><\/svg>\n');
    MaterialIcon$filter4_instance = new MaterialIcon('filter4', 668, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/><\/svg>\n');
    MaterialIcon$filter5_instance = new MaterialIcon('filter5', 669, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"/><\/svg>\n');
    MaterialIcon$filter6_instance = new MaterialIcon('filter6', 670, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"/><\/svg>\n');
    MaterialIcon$filter7_instance = new MaterialIcon('filter7', 671, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"/><\/svg>\n');
    MaterialIcon$filter8_instance = new MaterialIcon('filter8', 672, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"/><\/svg>\n');
    MaterialIcon$filter9_instance = new MaterialIcon('filter9', 673, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z"/><\/svg>\n');
    MaterialIcon$filter9Plus_instance = new MaterialIcon('filter9Plus', 674, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"/><\/svg>\n');
    MaterialIcon$filterBAndW_instance = new MaterialIcon('filterBAndW', 675, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"/><\/svg>\n');
    MaterialIcon$filterCenterFocus_instance = new MaterialIcon('filterCenterFocus', 676, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><\/svg>\n');
    MaterialIcon$filterDrama_instance = new MaterialIcon('filterDrama', 677, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"/><\/svg>\n');
    MaterialIcon$filterFrames_instance = new MaterialIcon('filterFrames', 678, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"/><\/svg>\n');
    MaterialIcon$filterHdr_instance = new MaterialIcon('filterHdr', 679, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/><\/svg>\n');
    MaterialIcon$filterNone_instance = new MaterialIcon('filterNone', 680, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/><\/svg>\n');
    MaterialIcon$filterTiltShift_instance = new MaterialIcon('filterTiltShift', 681, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"/><\/svg>\n');
    MaterialIcon$filterVintage_instance = new MaterialIcon('filterVintage', 682, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><\/svg>\n');
    MaterialIcon$flare_instance = new MaterialIcon('flare', 683, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/><\/svg>\n');
    MaterialIcon$flashAuto_instance = new MaterialIcon('flashAuto', 684, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"/><\/svg>\n');
    MaterialIcon$flashOff_instance = new MaterialIcon('flashOff', 685, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"/><\/svg>\n');
    MaterialIcon$flashOn_instance = new MaterialIcon('flashOn', 686, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/><\/svg>\n');
    MaterialIcon$flip_instance = new MaterialIcon('flip', 687, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"/><\/svg>\n');
    MaterialIcon$gradient_instance = new MaterialIcon('gradient', 688, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/><\/svg>\n');
    MaterialIcon$grain_instance = new MaterialIcon('grain', 689, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$gridOff_instance = new MaterialIcon('gridOff', 690, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"/><\/svg>\n');
    MaterialIcon$gridOn_instance = new MaterialIcon('gridOn', 691, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/><\/svg>\n');
    MaterialIcon$hdrOff_instance = new MaterialIcon('hdrOff', 692, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z"/><\/svg>\n');
    MaterialIcon$hdrOn_instance = new MaterialIcon('hdrOn', 693, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"/><\/svg>\n');
    MaterialIcon$hdrStrong_instance = new MaterialIcon('hdrStrong', 694, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$hdrWeak_instance = new MaterialIcon('hdrWeak', 695, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><\/svg>\n');
    MaterialIcon$healing_instance = new MaterialIcon('healing', 696, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"/><\/svg>\n');
    MaterialIcon$image_instance = new MaterialIcon('image', 697, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/><\/svg>\n');
    MaterialIcon$imageAspectRatio_instance = new MaterialIcon('imageAspectRatio', 698, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/><\/svg>\n');
    MaterialIcon$iso_instance = new MaterialIcon('iso', 699, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"/><\/svg>\n');
    MaterialIcon$landscape_instance = new MaterialIcon('landscape', 700, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/><\/svg>\n');
    MaterialIcon$leakAdd_instance = new MaterialIcon('leakAdd', 701, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"/><\/svg>\n');
    MaterialIcon$leakRemove_instance = new MaterialIcon('leakRemove', 702, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"/><\/svg>\n');
    MaterialIcon$lens_instance = new MaterialIcon('lens', 703, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><\/svg>\n');
    MaterialIcon$linkedCamera_instance = new MaterialIcon('linkedCamera', 704, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="14" r="3.2"/><path d="M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"/><path d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$looks_instance = new MaterialIcon('looks', 705, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"/><\/svg>\n');
    MaterialIcon$looks3_instance = new MaterialIcon('looks3', 706, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z"/><\/svg>\n');
    MaterialIcon$looks4_instance = new MaterialIcon('looks4', 707, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"/><\/svg>\n');
    MaterialIcon$looks5_instance = new MaterialIcon('looks5', 708, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z"/><\/svg>\n');
    MaterialIcon$looks6_instance = new MaterialIcon('looks6', 709, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"/><\/svg>\n');
    MaterialIcon$looksOne_instance = new MaterialIcon('looksOne', 710, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/><\/svg>\n');
    MaterialIcon$looksTwo_instance = new MaterialIcon('looksTwo', 711, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z"/><\/svg>\n');
    MaterialIcon$loupe_instance = new MaterialIcon('loupe', 712, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$monochromePhotos_instance = new MaterialIcon('monochromePhotos', 713, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"/><\/svg>\n');
    MaterialIcon$movieCreation_instance = new MaterialIcon('movieCreation', 714, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/><\/svg>\n');
    MaterialIcon$movieFilter_instance = new MaterialIcon('movieFilter', 715, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"/><\/svg>\n');
    MaterialIcon$musicNote_instance = new MaterialIcon('musicNote', 716, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/><\/svg>\n');
    MaterialIcon$nature_instance = new MaterialIcon('nature', 717, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z"/><\/svg>\n');
    MaterialIcon$naturePeople_instance = new MaterialIcon('naturePeople', 718, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"/><\/svg>\n');
    MaterialIcon$navigateBefore_instance = new MaterialIcon('navigateBefore', 719, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><\/svg>\n');
    MaterialIcon$navigateNext_instance = new MaterialIcon('navigateNext', 720, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><\/svg>\n');
    MaterialIcon$palette_instance = new MaterialIcon('palette', 721, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$panorama_instance = new MaterialIcon('panorama', 722, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"/><\/svg>\n');
    MaterialIcon$panoramaFishEye_instance = new MaterialIcon('panoramaFishEye', 723, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><\/svg>\n');
    MaterialIcon$panoramaHorizontal_instance = new MaterialIcon('panoramaHorizontal', 724, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"/><\/svg>\n');
    MaterialIcon$panoramaVertical_instance = new MaterialIcon('panoramaVertical', 725, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"/><\/svg>\n');
    MaterialIcon$panoramaWideAngle_instance = new MaterialIcon('panoramaWideAngle', 726, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"/><\/svg>\n');
    MaterialIcon$photo_instance = new MaterialIcon('photo', 727, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/><\/svg>\n');
    MaterialIcon$photoAlbum_instance = new MaterialIcon('photoAlbum', 728, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"/><\/svg>\n');
    MaterialIcon$photoCamera_instance = new MaterialIcon('photoCamera', 729, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$photoFilter_instance = new MaterialIcon('photoFilter', 730, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"/><\/svg>\n');
    MaterialIcon$photoLibrary_instance = new MaterialIcon('photoLibrary', 731, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/><\/svg>\n');
    MaterialIcon$photoSizeSelectActual_instance = new MaterialIcon('photoSizeSelectActual', 732, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/><\/svg>\n');
    MaterialIcon$photoSizeSelectLarge_instance = new MaterialIcon('photoSizeSelectLarge', 733, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"/><\/svg>\n');
    MaterialIcon$photoSizeSelectSmall_instance = new MaterialIcon('photoSizeSelectSmall', 734, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z"/><\/svg>\n');
    MaterialIcon$pictureAsPdf_instance = new MaterialIcon('pictureAsPdf', 735, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/><\/svg>\n');
    MaterialIcon$portrait_instance = new MaterialIcon('portrait', 736, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><\/svg>\n');
    MaterialIcon$removeRedEye_instance = new MaterialIcon('removeRedEye', 737, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><\/svg>\n');
    MaterialIcon$rotate90DegreesCcw_instance = new MaterialIcon('rotate90DegreesCcw', 738, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/><\/svg>\n');
    MaterialIcon$rotateLeft_instance = new MaterialIcon('rotateLeft', 739, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/><\/svg>\n');
    MaterialIcon$rotateRight_instance = new MaterialIcon('rotateRight', 740, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/><\/svg>\n');
    MaterialIcon$slideshow_instance = new MaterialIcon('slideshow', 741, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><\/svg>\n');
    MaterialIcon$straighten_instance = new MaterialIcon('straighten', 742, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/><\/svg>\n');
    MaterialIcon$style_instance = new MaterialIcon('style', 743, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"/><\/svg>\n');
    MaterialIcon$switchCamera_instance = new MaterialIcon('switchCamera', 744, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/><\/svg>\n');
    MaterialIcon$switchVideo_instance = new MaterialIcon('switchVideo', 745, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/><\/svg>\n');
    MaterialIcon$tagFaces_instance = new MaterialIcon('tagFaces', 746, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/><\/svg>\n');
    MaterialIcon$texture_instance = new MaterialIcon('texture', 747, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"/><\/svg>\n');
    MaterialIcon$timelapse_instance = new MaterialIcon('timelapse', 748, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$timer10_instance = new MaterialIcon('timer10', 749, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"/><\/svg>\n');
    MaterialIcon$timer_instance = new MaterialIcon('timer', 750, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$timer3_instance = new MaterialIcon('timer3', 751, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"/><\/svg>\n');
    MaterialIcon$timerOff_instance = new MaterialIcon('timerOff', 752, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"/><\/svg>\n');
    MaterialIcon$tonality_instance = new MaterialIcon('tonality', 753, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/><\/svg>\n');
    MaterialIcon$transform_instance = new MaterialIcon('transform', 754, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/><\/svg>\n');
    MaterialIcon$tune_instance = new MaterialIcon('tune', 755, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/><\/svg>\n');
    MaterialIcon$viewComfy_instance = new MaterialIcon('viewComfy', 756, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"/><\/svg>\n');
    MaterialIcon$viewCompact_instance = new MaterialIcon('viewCompact', 757, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/><\/svg>\n');
    MaterialIcon$vignette_instance = new MaterialIcon('vignette', 758, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"/><\/svg>\n');
    MaterialIcon$wbAuto_instance = new MaterialIcon('wbAuto', 759, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"/><\/svg>\n');
    MaterialIcon$wbCloudy_instance = new MaterialIcon('wbCloudy', 760, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/><\/svg>\n');
    MaterialIcon$wbIncandescent_instance = new MaterialIcon('wbIncandescent', 761, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"/><\/svg>\n');
    MaterialIcon$wbIridescent_instance = new MaterialIcon('wbIridescent', 762, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"/><\/svg>\n');
    MaterialIcon$wbSunny_instance = new MaterialIcon('wbSunny', 763, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/><\/svg>\n');
    MaterialIcon$addLocation_instance = new MaterialIcon('addLocation', 764, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"/><\/svg>\n');
    MaterialIcon$beenhere_instance = new MaterialIcon('beenhere', 765, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/><\/svg>\n');
    MaterialIcon$directions_instance = new MaterialIcon('directions', 766, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/><\/svg>\n');
    MaterialIcon$directionsBike_instance = new MaterialIcon('directionsBike', 767, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/><\/svg>\n');
    MaterialIcon$directionsBoat_instance = new MaterialIcon('directionsBoat', 768, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/><\/svg>\n');
    MaterialIcon$directionsBus_instance = new MaterialIcon('directionsBus', 769, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/><\/svg>\n');
    MaterialIcon$directionsCar_instance = new MaterialIcon('directionsCar', 770, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/><\/svg>\n');
    MaterialIcon$directionsRailway_instance = new MaterialIcon('directionsRailway', 771, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"/><\/svg>\n');
    MaterialIcon$directionsRun_instance = new MaterialIcon('directionsRun', 772, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/><\/svg>\n');
    MaterialIcon$directionsSubway_instance = new MaterialIcon('directionsSubway', 773, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/><\/svg>\n');
    MaterialIcon$directionsTransit_instance = new MaterialIcon('directionsTransit', 774, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/><\/svg>\n');
    MaterialIcon$directionsWalk_instance = new MaterialIcon('directionsWalk', 775, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/><\/svg>\n');
    MaterialIcon$editLocation_instance = new MaterialIcon('editLocation', 776, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"/><\/svg>\n');
    MaterialIcon$evStation_instance = new MaterialIcon('evStation', 777, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"/><\/svg>\n');
    MaterialIcon$flight_instance = new MaterialIcon('flight', 778, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.18 9"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/><\/svg>\n');
    MaterialIcon$hotel_instance = new MaterialIcon('hotel', 779, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$layers_instance = new MaterialIcon('layers', 780, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/><\/svg>\n');
    MaterialIcon$layersClear_instance = new MaterialIcon('layersClear', 781, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"/><\/svg>\n');
    MaterialIcon$localActivity_instance = new MaterialIcon('localActivity', 782, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/><\/svg>\n');
    MaterialIcon$localAirport_instance = new MaterialIcon('localAirport', 783, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/><\/svg>\n');
    MaterialIcon$localAtm_instance = new MaterialIcon('localAtm', 784, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/><\/svg>\n');
    MaterialIcon$localBar_instance = new MaterialIcon('localBar', 785, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/><\/svg>\n');
    MaterialIcon$localCafe_instance = new MaterialIcon('localCafe', 786, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/><\/svg>\n');
    MaterialIcon$localCarWash_instance = new MaterialIcon('localCarWash', 787, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"/><\/svg>\n');
    MaterialIcon$localConvenienceStore_instance = new MaterialIcon('localConvenienceStore', 788, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"/><\/svg>\n');
    MaterialIcon$localDining_instance = new MaterialIcon('localDining', 789, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/><\/svg>\n');
    MaterialIcon$localDrink_instance = new MaterialIcon('localDrink', 790, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/><\/svg>\n');
    MaterialIcon$localFlorist_instance = new MaterialIcon('localFlorist', 791, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/><\/svg>\n');
    MaterialIcon$localGasStation_instance = new MaterialIcon('localGasStation', 792, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><\/svg>\n');
    MaterialIcon$localGroceryStore_instance = new MaterialIcon('localGroceryStore', 793, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$localHospital_instance = new MaterialIcon('localHospital', 794, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/><\/svg>\n');
    MaterialIcon$localHotel_instance = new MaterialIcon('localHotel', 795, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$localLaundryService_instance = new MaterialIcon('localLaundryService', 796, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/><\/svg>\n');
    MaterialIcon$localLibrary_instance = new MaterialIcon('localLibrary', 797, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/><\/svg>\n');
    MaterialIcon$localMall_instance = new MaterialIcon('localMall', 798, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$localMovies_instance = new MaterialIcon('localMovies', 799, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/><\/svg>\n');
    MaterialIcon$localOffer_instance = new MaterialIcon('localOffer', 800, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/><\/svg>\n');
    MaterialIcon$localParking_instance = new MaterialIcon('localParking', 801, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$localPharmacy_instance = new MaterialIcon('localPharmacy', 802, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/><\/svg>\n');
    MaterialIcon$localPhone_instance = new MaterialIcon('localPhone', 803, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/><\/svg>\n');
    MaterialIcon$localPizza_instance = new MaterialIcon('localPizza', 804, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$localPlay_instance = new MaterialIcon('localPlay', 805, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/><\/svg>\n');
    MaterialIcon$localPostOffice_instance = new MaterialIcon('localPostOffice', 806, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><\/svg>\n');
    MaterialIcon$localPrintshop_instance = new MaterialIcon('localPrintshop', 807, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><\/svg>\n');
    MaterialIcon$localSee_instance = new MaterialIcon('localSee', 808, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$localShipping_instance = new MaterialIcon('localShipping', 809, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$localTaxi_instance = new MaterialIcon('localTaxi', 810, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/><\/svg>\n');
    MaterialIcon$map_instance = new MaterialIcon('map', 811, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><\/svg>\n');
    MaterialIcon$myLocation_instance = new MaterialIcon('myLocation', 812, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/><\/svg>\n');
    MaterialIcon$navigation_instance = new MaterialIcon('navigation', 813, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/><\/svg>\n');
    MaterialIcon$nearMe_instance = new MaterialIcon('nearMe', 814, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/><\/svg>\n');
    MaterialIcon$personPin_instance = new MaterialIcon('personPin', 815, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/><\/svg>\n');
    MaterialIcon$personPinCircle_instance = new MaterialIcon('personPinCircle', 816, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"/><\/svg>\n');
    MaterialIcon$pinDrop_instance = new MaterialIcon('pinDrop', 817, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"/><\/svg>\n');
    MaterialIcon$place_instance = new MaterialIcon('place', 818, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><\/svg>\n');
    MaterialIcon$rateReview_instance = new MaterialIcon('rateReview', 819, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"/><\/svg>\n');
    MaterialIcon$restaurant_instance = new MaterialIcon('restaurant', 820, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/><\/svg>\n');
    MaterialIcon$restaurantMenu_instance = new MaterialIcon('restaurantMenu', 821, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/><\/svg>\n');
    MaterialIcon$satellite_instance = new MaterialIcon('satellite', 822, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"/><\/svg>\n');
    MaterialIcon$storeMallDirectory_instance = new MaterialIcon('storeMallDirectory', 823, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/><\/svg>\n');
    MaterialIcon$streetview_instance = new MaterialIcon('streetview', 824, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"/><circle cx="18" cy="6" r="5"/><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"/><\/svg>\n');
    MaterialIcon$subway_instance = new MaterialIcon('subway', 825, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15.5" cy="16" r="1"/><circle cx="8.5" cy="16" r="1"/><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"/><\/svg>\n');
    MaterialIcon$terrain_instance = new MaterialIcon('terrain', 826, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/><\/svg>\n');
    MaterialIcon$traffic_instance = new MaterialIcon('traffic', 827, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"/><\/svg>\n');
    MaterialIcon$train_instance = new MaterialIcon('train', 828, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$tram_instance = new MaterialIcon('tram', 829, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"/><\/svg>\n');
    MaterialIcon$transferWithinAStation_instance = new MaterialIcon('transferWithinAStation', 830, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"/><\/svg>\n');
    MaterialIcon$zoomOutMap_instance = new MaterialIcon('zoomOutMap', 831, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"/><\/svg>\n');
    MaterialIcon$apps_instance = new MaterialIcon('apps', 832, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/><\/svg>\n');
    MaterialIcon$arrowBack_instance = new MaterialIcon('arrowBack', 833, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/><\/svg>\n');
    MaterialIcon$arrowDownward_instance = new MaterialIcon('arrowDownward', 834, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/><\/svg>\n');
    MaterialIcon$arrowDropDown_instance = new MaterialIcon('arrowDropDown', 835, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><\/svg>\n');
    MaterialIcon$arrowDropDownCircle_instance = new MaterialIcon('arrowDropDownCircle', 836, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/><\/svg>\n');
    MaterialIcon$arrowDropUp_instance = new MaterialIcon('arrowDropUp', 837, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><\/svg>\n');
    MaterialIcon$arrowForward_instance = new MaterialIcon('arrowForward', 838, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/><\/svg>\n');
    MaterialIcon$arrowUpward_instance = new MaterialIcon('arrowUpward', 839, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/><\/svg>\n');
    MaterialIcon$cancel_instance = new MaterialIcon('cancel', 840, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/><\/svg>\n');
    MaterialIcon$check_instance = new MaterialIcon('check', 841, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/><\/svg>\n');
    MaterialIcon$chevronLeft_instance = new MaterialIcon('chevronLeft', 842, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><\/svg>\n');
    MaterialIcon$chevronRight_instance = new MaterialIcon('chevronRight', 843, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><\/svg>\n');
    MaterialIcon$close_instance = new MaterialIcon('close', 844, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><\/svg>\n');
    MaterialIcon$expandLess_instance = new MaterialIcon('expandLess', 845, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><\/svg>\n');
    MaterialIcon$expandMore_instance = new MaterialIcon('expandMore', 846, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><\/svg>\n');
    MaterialIcon$firstPage_instance = new MaterialIcon('firstPage', 847, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/><\/svg>\n');
    MaterialIcon$fullscreen_instance = new MaterialIcon('fullscreen', 848, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/><\/svg>\n');
    MaterialIcon$fullscreenExit_instance = new MaterialIcon('fullscreenExit', 849, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/><\/svg>\n');
    MaterialIcon$lastPage_instance = new MaterialIcon('lastPage', 850, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/><\/svg>\n');
    MaterialIcon$menu_instance = new MaterialIcon('menu', 851, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/><\/svg>\n');
    MaterialIcon$moreHoriz_instance = new MaterialIcon('moreHoriz', 852, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$moreVert_instance = new MaterialIcon('moreVert', 853, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$refresh_instance = new MaterialIcon('refresh', 854, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/><\/svg>\n');
    MaterialIcon$subdirectoryArrowLeft_instance = new MaterialIcon('subdirectoryArrowLeft', 855, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/><\/svg>\n');
    MaterialIcon$subdirectoryArrowRight_instance = new MaterialIcon('subdirectoryArrowRight', 856, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/><\/svg>\n');
    MaterialIcon$unfoldLess_instance = new MaterialIcon('unfoldLess', 857, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/><\/svg>\n');
    MaterialIcon$unfoldMore_instance = new MaterialIcon('unfoldMore', 858, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/><\/svg>\n');
    MaterialIcon$adb_instance = new MaterialIcon('adb', 859, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/><\/svg>\n');
    MaterialIcon$airlineSeatFlat_instance = new MaterialIcon('airlineSeatFlat', 860, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"/><\/svg>\n');
    MaterialIcon$airlineSeatFlatAngled_instance = new MaterialIcon('airlineSeatFlatAngled', 861, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"/><\/svg>\n');
    MaterialIcon$airlineSeatIndividualSuite_instance = new MaterialIcon('airlineSeatIndividualSuite', 862, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"/><\/svg>\n');
    MaterialIcon$airlineSeatLegroomExtra_instance = new MaterialIcon('airlineSeatLegroomExtra', 863, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z"/><\/svg>\n');
    MaterialIcon$airlineSeatLegroomNormal_instance = new MaterialIcon('airlineSeatLegroomNormal', 864, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/><\/svg>\n');
    MaterialIcon$airlineSeatLegroomReduced_instance = new MaterialIcon('airlineSeatLegroomReduced', 865, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z"/><\/svg>\n');
    MaterialIcon$airlineSeatReclineExtra_instance = new MaterialIcon('airlineSeatReclineExtra', 866, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z"/><\/svg>\n');
    MaterialIcon$airlineSeatReclineNormal_instance = new MaterialIcon('airlineSeatReclineNormal', 867, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"/><\/svg>\n');
    MaterialIcon$bluetoothAudio_instance = new MaterialIcon('bluetoothAudio', 868, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"/><\/svg>\n');
    MaterialIcon$confirmationNumber_instance = new MaterialIcon('confirmationNumber', 869, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/><\/svg>\n');
    MaterialIcon$discFull_instance = new MaterialIcon('discFull', 870, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/><\/svg>\n');
    MaterialIcon$doNotDisturb_instance = new MaterialIcon('doNotDisturb', 871, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/><\/svg>\n');
    MaterialIcon$doNotDisturbAlt_instance = new MaterialIcon('doNotDisturbAlt', 872, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"/><\/svg>\n');
    MaterialIcon$doNotDisturbOff_instance = new MaterialIcon('doNotDisturbOff', 873, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z"/><\/svg>\n');
    MaterialIcon$doNotDisturbOn_instance = new MaterialIcon('doNotDisturbOn', 874, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/><\/svg>\n');
    MaterialIcon$driveEta_instance = new MaterialIcon('driveEta', 875, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/><\/svg>\n');
    MaterialIcon$enhancedEncryption_instance = new MaterialIcon('enhancedEncryption', 876, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/><\/svg>\n');
    MaterialIcon$eventAvailable_instance = new MaterialIcon('eventAvailable', 877, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/><\/svg>\n');
    MaterialIcon$eventBusy_instance = new MaterialIcon('eventBusy', 878, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/><\/svg>\n');
    MaterialIcon$eventNote_instance = new MaterialIcon('eventNote', 879, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/><\/svg>\n');
    MaterialIcon$folderSpecial_instance = new MaterialIcon('folderSpecial', 880, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"/><\/svg>\n');
    MaterialIcon$liveTv_instance = new MaterialIcon('liveTv', 881, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"/><\/svg>\n');
    MaterialIcon$mms_instance = new MaterialIcon('mms', 882, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"/><\/svg>\n');
    MaterialIcon$more_instance = new MaterialIcon('more', 883, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><\/svg>\n');
    MaterialIcon$networkCheck_instance = new MaterialIcon('networkCheck', 884, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"/><\/svg>\n');
    MaterialIcon$networkLocked_instance = new MaterialIcon('networkLocked', 885, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"/><\/svg>\n');
    MaterialIcon$noEncryption_instance = new MaterialIcon('noEncryption', 886, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z"/><\/svg>\n');
    MaterialIcon$ondemandVideo_instance = new MaterialIcon('ondemandVideo', 887, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"/><\/svg>\n');
    MaterialIcon$personalVideo_instance = new MaterialIcon('personalVideo', 888, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"/><\/svg>\n');
    MaterialIcon$phoneBluetoothSpeaker_instance = new MaterialIcon('phoneBluetoothSpeaker', 889, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$phoneForwarded_instance = new MaterialIcon('phoneForwarded', 890, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><\/svg>\n');
    MaterialIcon$phoneInTalk_instance = new MaterialIcon('phoneInTalk', 891, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/><\/svg>\n');
    MaterialIcon$phoneLocked_instance = new MaterialIcon('phoneLocked', 892, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z"/><\/svg>\n');
    MaterialIcon$phoneMissed_instance = new MaterialIcon('phoneMissed', 893, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z"/><\/svg>\n');
    MaterialIcon$phonePaused_instance = new MaterialIcon('phonePaused', 894, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z"/><\/svg>\n');
    MaterialIcon$power_instance = new MaterialIcon('power', 895, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/><\/svg>\n');
    MaterialIcon$priorityHigh_instance = new MaterialIcon('priorityHigh', 896, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/><\/svg>\n');
    MaterialIcon$rvHookup_instance = new MaterialIcon('rvHookup', 897, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"/><\/svg>\n');
    MaterialIcon$sdCard_instance = new MaterialIcon('sdCard', 898, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/><\/svg>\n');
    MaterialIcon$simCardAlert_instance = new MaterialIcon('simCardAlert', 899, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"/><\/svg>\n');
    MaterialIcon$sms_instance = new MaterialIcon('sms', 900, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><\/svg>\n');
    MaterialIcon$smsFailed_instance = new MaterialIcon('smsFailed', 901, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/><\/svg>\n');
    MaterialIcon$sync_instance = new MaterialIcon('sync', 902, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><\/svg>\n');
    MaterialIcon$syncDisabled_instance = new MaterialIcon('syncDisabled', 903, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z"/><\/svg>\n');
    MaterialIcon$syncProblem_instance = new MaterialIcon('syncProblem', 904, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"/><\/svg>\n');
    MaterialIcon$systemUpdate_instance = new MaterialIcon('systemUpdate', 905, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"/><\/svg>\n');
    MaterialIcon$tapAndPlay_instance = new MaterialIcon('tapAndPlay', 906, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/><\/svg>\n');
    MaterialIcon$timeToLeave_instance = new MaterialIcon('timeToLeave', 907, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/><\/svg>\n');
    MaterialIcon$vibration_instance = new MaterialIcon('vibration', 908, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"/><\/svg>\n');
    MaterialIcon$voiceChat_instance = new MaterialIcon('voiceChat', 909, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"/><\/svg>\n');
    MaterialIcon$vpnLock_instance = new MaterialIcon('vpnLock', 910, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z"/><\/svg>\n');
    MaterialIcon$wc_instance = new MaterialIcon('wc', 911, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"/><\/svg>\n');
    MaterialIcon$wifi_instance = new MaterialIcon('wifi', 912, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/><\/svg>\n');
    MaterialIcon$acUnit_instance = new MaterialIcon('acUnit', 913, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/><\/svg>\n');
    MaterialIcon$airportShuttle_instance = new MaterialIcon('airportShuttle', 914, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/><\/svg>\n');
    MaterialIcon$allInclusive_instance = new MaterialIcon('allInclusive', 915, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/><\/svg>\n');
    MaterialIcon$beachAccess_instance = new MaterialIcon('beachAccess', 916, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/><\/svg>\n');
    MaterialIcon$businessCenter_instance = new MaterialIcon('businessCenter', 917, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/><\/svg>\n');
    MaterialIcon$casino_instance = new MaterialIcon('casino', 918, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/><\/svg>\n');
    MaterialIcon$childCare_instance = new MaterialIcon('childCare', 919, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="14.5" cy="10.5" r="1.25"/><circle cx="9.5" cy="10.5" r="1.25"/><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"/><\/svg>\n');
    MaterialIcon$childFriendly_instance = new MaterialIcon('childFriendly', 920, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"/><\/svg>\n');
    MaterialIcon$fitnessCenter_instance = new MaterialIcon('fitnessCenter', 921, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/><\/svg>\n');
    MaterialIcon$freeBreakfast_instance = new MaterialIcon('freeBreakfast', 922, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/><\/svg>\n');
    MaterialIcon$golfCourse_instance = new MaterialIcon('golfCourse', 923, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="19.5" cy="19.5" r="1.5"/><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/><\/svg>\n');
    MaterialIcon$hotTub_instance = new MaterialIcon('hotTub', 924, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="7" cy="6" r="2"/><path d="M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"/><\/svg>\n');
    MaterialIcon$kitchen_instance = new MaterialIcon('kitchen', 925, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/><\/svg>\n');
    MaterialIcon$pool_instance = new MaterialIcon('pool', 926, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"/><circle cx="16.5" cy="5.5" r="2.5"/><\/svg>\n');
    MaterialIcon$roomService_instance = new MaterialIcon('roomService', 927, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"/><\/svg>\n');
    MaterialIcon$rvHookup2_instance = new MaterialIcon('rvHookup2', 928, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"/><\/svg>\n');
    MaterialIcon$smokeFree_instance = new MaterialIcon('smokeFree', 929, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z"/><\/svg>\n');
    MaterialIcon$smokingRooms_instance = new MaterialIcon('smokingRooms', 930, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"/><\/svg>\n');
    MaterialIcon$spa_instance = new MaterialIcon('spa', 931, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"/><path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"/><\/svg>\n');
    MaterialIcon$cake_instance = new MaterialIcon('cake', 932, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/><\/svg>\n');
    MaterialIcon$domain_instance = new MaterialIcon('domain', 933, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/><\/svg>\n');
    MaterialIcon$group_instance = new MaterialIcon('group', 934, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/><\/svg>\n');
    MaterialIcon$groupAdd_instance = new MaterialIcon('groupAdd', 935, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/><\/svg>\n');
    MaterialIcon$locationCity_instance = new MaterialIcon('locationCity', 936, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/><\/svg>\n');
    MaterialIcon$mood_instance = new MaterialIcon('mood', 937, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/><\/svg>\n');
    MaterialIcon$moodBad_instance = new MaterialIcon('moodBad', 938, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/><\/svg>\n');
    MaterialIcon$notifications_instance = new MaterialIcon('notifications', 939, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/><\/svg>\n');
    MaterialIcon$notificationsActive_instance = new MaterialIcon('notificationsActive', 940, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/><\/svg>\n');
    MaterialIcon$notificationsNone_instance = new MaterialIcon('notificationsNone', 941, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/><\/svg>\n');
    MaterialIcon$notificationsOff_instance = new MaterialIcon('notificationsOff', 942, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"/><\/svg>\n');
    MaterialIcon$notificationsPaused_instance = new MaterialIcon('notificationsPaused', 943, '\n<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"/><\/svg>\n');
    MaterialIcon$pages_instance = new MaterialIcon('pages', 944, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$partyMode_instance = new MaterialIcon('partyMode', 945, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"/><\/svg>\n');
    MaterialIcon$people_instance = new MaterialIcon('people', 946, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/><\/svg>\n');
    MaterialIcon$peopleOutline_instance = new MaterialIcon('peopleOutline', 947, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/><\/svg>\n');
    MaterialIcon$person_instance = new MaterialIcon('person', 948, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><\/svg>\n');
    MaterialIcon$personAdd_instance = new MaterialIcon('personAdd', 949, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><\/svg>\n');
    MaterialIcon$personOutline_instance = new MaterialIcon('personOutline', 950, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/><\/svg>\n');
    MaterialIcon$plusOne_instance = new MaterialIcon('plusOne', 951, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"/><\/svg>\n');
    MaterialIcon$poll_instance = new MaterialIcon('poll', 952, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/><\/svg>\n');
    MaterialIcon$_public_instance = new MaterialIcon('_public', 953, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/><\/svg>\n');
    MaterialIcon$school_instance = new MaterialIcon('school', 954, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/><\/svg>\n');
    MaterialIcon$sentimentDissatisfied_instance = new MaterialIcon('sentimentDissatisfied', 955, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"/><\/svg>\n');
    MaterialIcon$sentimentNeutral_instance = new MaterialIcon('sentimentNeutral', 956, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 14h6v1.5H9z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$sentimentSatisfied_instance = new MaterialIcon('sentimentSatisfied', 957, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"/><\/svg>\n');
    MaterialIcon$sentimentVeryDissatisfied_instance = new MaterialIcon('sentimentVeryDissatisfied', 958, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/><\/svg>\n');
    MaterialIcon$sentimentVerySatisfied_instance = new MaterialIcon('sentimentVerySatisfied', 959, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/><\/svg>\n');
    MaterialIcon$share_instance = new MaterialIcon('share', 960, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/><\/svg>\n');
    MaterialIcon$whatshot_instance = new MaterialIcon('whatshot', 961, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/><\/svg>\n');
    MaterialIcon$checkBox_instance = new MaterialIcon('checkBox', 962, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><\/svg>\n');
    MaterialIcon$checkBoxOutlineBlank_instance = new MaterialIcon('checkBoxOutlineBlank', 963, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><\/svg>\n');
    MaterialIcon$indeterminateCheckBox_instance = new MaterialIcon('indeterminateCheckBox', 964, '\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/><\/svg>\n');
    MaterialIcon$radioButtonChecked_instance = new MaterialIcon('radioButtonChecked', 965, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$radioButtonUnchecked_instance = new MaterialIcon('radioButtonUnchecked', 966, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><\/svg>\n');
    MaterialIcon$star_instance = new MaterialIcon('star', 967, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><\/svg>\n');
    MaterialIcon$starBorder_instance = new MaterialIcon('starBorder', 968, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><\/svg>\n');
    MaterialIcon$starHalf_instance = new MaterialIcon('starHalf', 969, '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><\/svg>\n');
  }
  var MaterialIcon$_3dRotation_instance;
  function MaterialIcon$_3dRotation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$_3dRotation_instance;
  }
  var MaterialIcon$accessibility_instance;
  function MaterialIcon$accessibility_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accessibility_instance;
  }
  var MaterialIcon$accessible_instance;
  function MaterialIcon$accessible_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accessible_instance;
  }
  var MaterialIcon$accountBalance_instance;
  function MaterialIcon$accountBalance_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accountBalance_instance;
  }
  var MaterialIcon$accountBalanceWallet_instance;
  function MaterialIcon$accountBalanceWallet_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accountBalanceWallet_instance;
  }
  var MaterialIcon$accountBox_instance;
  function MaterialIcon$accountBox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accountBox_instance;
  }
  var MaterialIcon$accountCircle_instance;
  function MaterialIcon$accountCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accountCircle_instance;
  }
  var MaterialIcon$addShoppingCart_instance;
  function MaterialIcon$addShoppingCart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addShoppingCart_instance;
  }
  var MaterialIcon$alarm_instance;
  function MaterialIcon$alarm_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$alarm_instance;
  }
  var MaterialIcon$alarmAdd_instance;
  function MaterialIcon$alarmAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$alarmAdd_instance;
  }
  var MaterialIcon$alarmOff_instance;
  function MaterialIcon$alarmOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$alarmOff_instance;
  }
  var MaterialIcon$alarmOn_instance;
  function MaterialIcon$alarmOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$alarmOn_instance;
  }
  var MaterialIcon$allOut_instance;
  function MaterialIcon$allOut_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$allOut_instance;
  }
  var MaterialIcon$android_instance;
  function MaterialIcon$android_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$android_instance;
  }
  var MaterialIcon$announcement_instance;
  function MaterialIcon$announcement_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$announcement_instance;
  }
  var MaterialIcon$aspectRatio_instance;
  function MaterialIcon$aspectRatio_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$aspectRatio_instance;
  }
  var MaterialIcon$assessment_instance;
  function MaterialIcon$assessment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assessment_instance;
  }
  var MaterialIcon$assignment_instance;
  function MaterialIcon$assignment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignment_instance;
  }
  var MaterialIcon$assignmentInd_instance;
  function MaterialIcon$assignmentInd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignmentInd_instance;
  }
  var MaterialIcon$assignmentLate_instance;
  function MaterialIcon$assignmentLate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignmentLate_instance;
  }
  var MaterialIcon$assignmentReturned_instance;
  function MaterialIcon$assignmentReturned_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignmentReturned_instance;
  }
  var MaterialIcon$assignmentReturn_instance;
  function MaterialIcon$assignmentReturn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignmentReturn_instance;
  }
  var MaterialIcon$assignmentTurnedIn_instance;
  function MaterialIcon$assignmentTurnedIn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assignmentTurnedIn_instance;
  }
  var MaterialIcon$autorenew_instance;
  function MaterialIcon$autorenew_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$autorenew_instance;
  }
  var MaterialIcon$backup_instance;
  function MaterialIcon$backup_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$backup_instance;
  }
  var MaterialIcon$bookmark_instance;
  function MaterialIcon$bookmark_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bookmark_instance;
  }
  var MaterialIcon$bookmarkBorder_instance;
  function MaterialIcon$bookmarkBorder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bookmarkBorder_instance;
  }
  var MaterialIcon$book_instance;
  function MaterialIcon$book_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$book_instance;
  }
  var MaterialIcon$bugReport_instance;
  function MaterialIcon$bugReport_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bugReport_instance;
  }
  var MaterialIcon$build_instance;
  function MaterialIcon$build_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$build_instance;
  }
  var MaterialIcon$cached_instance;
  function MaterialIcon$cached_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cached_instance;
  }
  var MaterialIcon$cameraEnhance_instance;
  function MaterialIcon$cameraEnhance_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cameraEnhance_instance;
  }
  var MaterialIcon$cardGiftcard_instance;
  function MaterialIcon$cardGiftcard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cardGiftcard_instance;
  }
  var MaterialIcon$cardMembership_instance;
  function MaterialIcon$cardMembership_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cardMembership_instance;
  }
  var MaterialIcon$cardTravel_instance;
  function MaterialIcon$cardTravel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cardTravel_instance;
  }
  var MaterialIcon$changeHistory_instance;
  function MaterialIcon$changeHistory_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$changeHistory_instance;
  }
  var MaterialIcon$checkCircle_instance;
  function MaterialIcon$checkCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$checkCircle_instance;
  }
  var MaterialIcon$chromeReaderMode_instance;
  function MaterialIcon$chromeReaderMode_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chromeReaderMode_instance;
  }
  var MaterialIcon$_class_instance;
  function MaterialIcon$_class_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$_class_instance;
  }
  var MaterialIcon$code_instance;
  function MaterialIcon$code_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$code_instance;
  }
  var MaterialIcon$compareArrows_instance;
  function MaterialIcon$compareArrows_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$compareArrows_instance;
  }
  var MaterialIcon$copyright_instance;
  function MaterialIcon$copyright_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$copyright_instance;
  }
  var MaterialIcon$creditCard_instance;
  function MaterialIcon$creditCard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$creditCard_instance;
  }
  var MaterialIcon$dashboard_instance;
  function MaterialIcon$dashboard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dashboard_instance;
  }
  var MaterialIcon$dateRange_instance;
  function MaterialIcon$dateRange_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dateRange_instance;
  }
  var MaterialIcon$delete_instance;
  function MaterialIcon$delete_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$delete_instance;
  }
  var MaterialIcon$deleteForever_instance;
  function MaterialIcon$deleteForever_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$deleteForever_instance;
  }
  var MaterialIcon$description_instance;
  function MaterialIcon$description_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$description_instance;
  }
  var MaterialIcon$dns_instance;
  function MaterialIcon$dns_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dns_instance;
  }
  var MaterialIcon$done_instance;
  function MaterialIcon$done_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$done_instance;
  }
  var MaterialIcon$doneAll_instance;
  function MaterialIcon$doneAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$doneAll_instance;
  }
  var MaterialIcon$donutLarge_instance;
  function MaterialIcon$donutLarge_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$donutLarge_instance;
  }
  var MaterialIcon$donutSmall_instance;
  function MaterialIcon$donutSmall_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$donutSmall_instance;
  }
  var MaterialIcon$eject_instance;
  function MaterialIcon$eject_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$eject_instance;
  }
  var MaterialIcon$euroSymbol_instance;
  function MaterialIcon$euroSymbol_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$euroSymbol_instance;
  }
  var MaterialIcon$event_instance;
  function MaterialIcon$event_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$event_instance;
  }
  var MaterialIcon$eventSeat_instance;
  function MaterialIcon$eventSeat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$eventSeat_instance;
  }
  var MaterialIcon$exitToApp_instance;
  function MaterialIcon$exitToApp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exitToApp_instance;
  }
  var MaterialIcon$explore_instance;
  function MaterialIcon$explore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$explore_instance;
  }
  var MaterialIcon$extension_instance;
  function MaterialIcon$extension_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$extension_instance;
  }
  var MaterialIcon$face_instance;
  function MaterialIcon$face_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$face_instance;
  }
  var MaterialIcon$favorite_instance;
  function MaterialIcon$favorite_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$favorite_instance;
  }
  var MaterialIcon$favoriteBorder_instance;
  function MaterialIcon$favoriteBorder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$favoriteBorder_instance;
  }
  var MaterialIcon$feedback_instance;
  function MaterialIcon$feedback_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$feedback_instance;
  }
  var MaterialIcon$findInPage_instance;
  function MaterialIcon$findInPage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$findInPage_instance;
  }
  var MaterialIcon$findReplace_instance;
  function MaterialIcon$findReplace_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$findReplace_instance;
  }
  var MaterialIcon$fingerprint_instance;
  function MaterialIcon$fingerprint_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fingerprint_instance;
  }
  var MaterialIcon$flightLand_instance;
  function MaterialIcon$flightLand_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flightLand_instance;
  }
  var MaterialIcon$flightTakeoff_instance;
  function MaterialIcon$flightTakeoff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flightTakeoff_instance;
  }
  var MaterialIcon$flipToBack_instance;
  function MaterialIcon$flipToBack_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flipToBack_instance;
  }
  var MaterialIcon$flipToFront_instance;
  function MaterialIcon$flipToFront_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flipToFront_instance;
  }
  var MaterialIcon$gavel_instance;
  function MaterialIcon$gavel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gavel_instance;
  }
  var MaterialIcon$getApp_instance;
  function MaterialIcon$getApp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$getApp_instance;
  }
  var MaterialIcon$gif_instance;
  function MaterialIcon$gif_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gif_instance;
  }
  var MaterialIcon$grade_instance;
  function MaterialIcon$grade_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$grade_instance;
  }
  var MaterialIcon$groupWork_instance;
  function MaterialIcon$groupWork_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$groupWork_instance;
  }
  var MaterialIcon$gTranslate_instance;
  function MaterialIcon$gTranslate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gTranslate_instance;
  }
  var MaterialIcon$help_instance;
  function MaterialIcon$help_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$help_instance;
  }
  var MaterialIcon$helpOutline_instance;
  function MaterialIcon$helpOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$helpOutline_instance;
  }
  var MaterialIcon$highlightOff_instance;
  function MaterialIcon$highlightOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$highlightOff_instance;
  }
  var MaterialIcon$history_instance;
  function MaterialIcon$history_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$history_instance;
  }
  var MaterialIcon$home_instance;
  function MaterialIcon$home_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$home_instance;
  }
  var MaterialIcon$hourglassEmpty_instance;
  function MaterialIcon$hourglassEmpty_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hourglassEmpty_instance;
  }
  var MaterialIcon$hourglassFull_instance;
  function MaterialIcon$hourglassFull_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hourglassFull_instance;
  }
  var MaterialIcon$https_instance;
  function MaterialIcon$https_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$https_instance;
  }
  var MaterialIcon$http_instance;
  function MaterialIcon$http_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$http_instance;
  }
  var MaterialIcon$importantDevices_instance;
  function MaterialIcon$importantDevices_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$importantDevices_instance;
  }
  var MaterialIcon$info_instance;
  function MaterialIcon$info_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$info_instance;
  }
  var MaterialIcon$infoOutline_instance;
  function MaterialIcon$infoOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$infoOutline_instance;
  }
  var MaterialIcon$input_instance;
  function MaterialIcon$input_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$input_instance;
  }
  var MaterialIcon$invertColors_instance;
  function MaterialIcon$invertColors_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$invertColors_instance;
  }
  var MaterialIcon$label_instance;
  function MaterialIcon$label_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$label_instance;
  }
  var MaterialIcon$labelOutline_instance;
  function MaterialIcon$labelOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$labelOutline_instance;
  }
  var MaterialIcon$language_instance;
  function MaterialIcon$language_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$language_instance;
  }
  var MaterialIcon$launch_instance;
  function MaterialIcon$launch_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$launch_instance;
  }
  var MaterialIcon$lightbulbOutline_instance;
  function MaterialIcon$lightbulbOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lightbulbOutline_instance;
  }
  var MaterialIcon$lineStyle_instance;
  function MaterialIcon$lineStyle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lineStyle_instance;
  }
  var MaterialIcon$lineWeight_instance;
  function MaterialIcon$lineWeight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lineWeight_instance;
  }
  var MaterialIcon$list_instance;
  function MaterialIcon$list_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$list_instance;
  }
  var MaterialIcon$lock_instance;
  function MaterialIcon$lock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lock_instance;
  }
  var MaterialIcon$lockOpen_instance;
  function MaterialIcon$lockOpen_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lockOpen_instance;
  }
  var MaterialIcon$lockOutline_instance;
  function MaterialIcon$lockOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lockOutline_instance;
  }
  var MaterialIcon$loyalty_instance;
  function MaterialIcon$loyalty_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$loyalty_instance;
  }
  var MaterialIcon$markunreadMailbox_instance;
  function MaterialIcon$markunreadMailbox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$markunreadMailbox_instance;
  }
  var MaterialIcon$motorcycle_instance;
  function MaterialIcon$motorcycle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$motorcycle_instance;
  }
  var MaterialIcon$noteAdd_instance;
  function MaterialIcon$noteAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$noteAdd_instance;
  }
  var MaterialIcon$offlinePin_instance;
  function MaterialIcon$offlinePin_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$offlinePin_instance;
  }
  var MaterialIcon$opacity_instance;
  function MaterialIcon$opacity_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$opacity_instance;
  }
  var MaterialIcon$openInBrowser_instance;
  function MaterialIcon$openInBrowser_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$openInBrowser_instance;
  }
  var MaterialIcon$openInNew_instance;
  function MaterialIcon$openInNew_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$openInNew_instance;
  }
  var MaterialIcon$openWith_instance;
  function MaterialIcon$openWith_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$openWith_instance;
  }
  var MaterialIcon$pageview_instance;
  function MaterialIcon$pageview_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pageview_instance;
  }
  var MaterialIcon$panTool_instance;
  function MaterialIcon$panTool_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panTool_instance;
  }
  var MaterialIcon$payment_instance;
  function MaterialIcon$payment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$payment_instance;
  }
  var MaterialIcon$permCameraMic_instance;
  function MaterialIcon$permCameraMic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permCameraMic_instance;
  }
  var MaterialIcon$permContactCalendar_instance;
  function MaterialIcon$permContactCalendar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permContactCalendar_instance;
  }
  var MaterialIcon$permDataSetting_instance;
  function MaterialIcon$permDataSetting_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permDataSetting_instance;
  }
  var MaterialIcon$permDeviceInformation_instance;
  function MaterialIcon$permDeviceInformation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permDeviceInformation_instance;
  }
  var MaterialIcon$permIdentity_instance;
  function MaterialIcon$permIdentity_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permIdentity_instance;
  }
  var MaterialIcon$permMedia_instance;
  function MaterialIcon$permMedia_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permMedia_instance;
  }
  var MaterialIcon$permPhoneMsg_instance;
  function MaterialIcon$permPhoneMsg_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permPhoneMsg_instance;
  }
  var MaterialIcon$permScanWifi_instance;
  function MaterialIcon$permScanWifi_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$permScanWifi_instance;
  }
  var MaterialIcon$pets_instance;
  function MaterialIcon$pets_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pets_instance;
  }
  var MaterialIcon$pictureInPicture_instance;
  function MaterialIcon$pictureInPicture_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pictureInPicture_instance;
  }
  var MaterialIcon$pictureInPictureAlt_instance;
  function MaterialIcon$pictureInPictureAlt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pictureInPictureAlt_instance;
  }
  var MaterialIcon$playForWork_instance;
  function MaterialIcon$playForWork_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playForWork_instance;
  }
  var MaterialIcon$polymer_instance;
  function MaterialIcon$polymer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$polymer_instance;
  }
  var MaterialIcon$powerSettingsNew_instance;
  function MaterialIcon$powerSettingsNew_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$powerSettingsNew_instance;
  }
  var MaterialIcon$pregnantWoman_instance;
  function MaterialIcon$pregnantWoman_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pregnantWoman_instance;
  }
  var MaterialIcon$print_instance;
  function MaterialIcon$print_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$print_instance;
  }
  var MaterialIcon$queryBuilder_instance;
  function MaterialIcon$queryBuilder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$queryBuilder_instance;
  }
  var MaterialIcon$questionAnswer_instance;
  function MaterialIcon$questionAnswer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$questionAnswer_instance;
  }
  var MaterialIcon$receipt_instance;
  function MaterialIcon$receipt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$receipt_instance;
  }
  var MaterialIcon$recordVoiceOver_instance;
  function MaterialIcon$recordVoiceOver_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$recordVoiceOver_instance;
  }
  var MaterialIcon$redeem_instance;
  function MaterialIcon$redeem_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$redeem_instance;
  }
  var MaterialIcon$removeShoppingCart_instance;
  function MaterialIcon$removeShoppingCart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$removeShoppingCart_instance;
  }
  var MaterialIcon$reorder_instance;
  function MaterialIcon$reorder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$reorder_instance;
  }
  var MaterialIcon$reportProblem_instance;
  function MaterialIcon$reportProblem_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$reportProblem_instance;
  }
  var MaterialIcon$restore_instance;
  function MaterialIcon$restore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$restore_instance;
  }
  var MaterialIcon$restorePage_instance;
  function MaterialIcon$restorePage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$restorePage_instance;
  }
  var MaterialIcon$room_instance;
  function MaterialIcon$room_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$room_instance;
  }
  var MaterialIcon$roundedCorner_instance;
  function MaterialIcon$roundedCorner_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$roundedCorner_instance;
  }
  var MaterialIcon$rowing_instance;
  function MaterialIcon$rowing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rowing_instance;
  }
  var MaterialIcon$schedule_instance;
  function MaterialIcon$schedule_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$schedule_instance;
  }
  var MaterialIcon$search_instance;
  function MaterialIcon$search_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$search_instance;
  }
  var MaterialIcon$settings_instance;
  function MaterialIcon$settings_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settings_instance;
  }
  var MaterialIcon$settingsApplications_instance;
  function MaterialIcon$settingsApplications_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsApplications_instance;
  }
  var MaterialIcon$settingsBackupRestore_instance;
  function MaterialIcon$settingsBackupRestore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsBackupRestore_instance;
  }
  var MaterialIcon$settingsBluetooth_instance;
  function MaterialIcon$settingsBluetooth_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsBluetooth_instance;
  }
  var MaterialIcon$settingsBrightness_instance;
  function MaterialIcon$settingsBrightness_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsBrightness_instance;
  }
  var MaterialIcon$settingsCell_instance;
  function MaterialIcon$settingsCell_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsCell_instance;
  }
  var MaterialIcon$settingsEthernet_instance;
  function MaterialIcon$settingsEthernet_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsEthernet_instance;
  }
  var MaterialIcon$settingsInputAntenna_instance;
  function MaterialIcon$settingsInputAntenna_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsInputAntenna_instance;
  }
  var MaterialIcon$settingsInputComponent_instance;
  function MaterialIcon$settingsInputComponent_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsInputComponent_instance;
  }
  var MaterialIcon$settingsInputComposite_instance;
  function MaterialIcon$settingsInputComposite_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsInputComposite_instance;
  }
  var MaterialIcon$settingsInputHdmi_instance;
  function MaterialIcon$settingsInputHdmi_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsInputHdmi_instance;
  }
  var MaterialIcon$settingsInputSvideo_instance;
  function MaterialIcon$settingsInputSvideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsInputSvideo_instance;
  }
  var MaterialIcon$settingsOverscan_instance;
  function MaterialIcon$settingsOverscan_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsOverscan_instance;
  }
  var MaterialIcon$settingsPhone_instance;
  function MaterialIcon$settingsPhone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsPhone_instance;
  }
  var MaterialIcon$settingsPower_instance;
  function MaterialIcon$settingsPower_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsPower_instance;
  }
  var MaterialIcon$settingsRemote_instance;
  function MaterialIcon$settingsRemote_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsRemote_instance;
  }
  var MaterialIcon$settingsVoice_instance;
  function MaterialIcon$settingsVoice_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsVoice_instance;
  }
  var MaterialIcon$shoppingBasket_instance;
  function MaterialIcon$shoppingBasket_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shoppingBasket_instance;
  }
  var MaterialIcon$shoppingCart_instance;
  function MaterialIcon$shoppingCart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shoppingCart_instance;
  }
  var MaterialIcon$shop_instance;
  function MaterialIcon$shop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shop_instance;
  }
  var MaterialIcon$shopTwo_instance;
  function MaterialIcon$shopTwo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shopTwo_instance;
  }
  var MaterialIcon$speakerNotes_instance;
  function MaterialIcon$speakerNotes_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$speakerNotes_instance;
  }
  var MaterialIcon$speakerNotesOff_instance;
  function MaterialIcon$speakerNotesOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$speakerNotesOff_instance;
  }
  var MaterialIcon$spellcheck_instance;
  function MaterialIcon$spellcheck_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$spellcheck_instance;
  }
  var MaterialIcon$stars_instance;
  function MaterialIcon$stars_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stars_instance;
  }
  var MaterialIcon$store_instance;
  function MaterialIcon$store_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$store_instance;
  }
  var MaterialIcon$subject_instance;
  function MaterialIcon$subject_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subject_instance;
  }
  var MaterialIcon$supervisorAccount_instance;
  function MaterialIcon$supervisorAccount_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$supervisorAccount_instance;
  }
  var MaterialIcon$swapHoriz_instance;
  function MaterialIcon$swapHoriz_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$swapHoriz_instance;
  }
  var MaterialIcon$swapVerticalCircle_instance;
  function MaterialIcon$swapVerticalCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$swapVerticalCircle_instance;
  }
  var MaterialIcon$swapVert_instance;
  function MaterialIcon$swapVert_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$swapVert_instance;
  }
  var MaterialIcon$systemUpdateAlt_instance;
  function MaterialIcon$systemUpdateAlt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$systemUpdateAlt_instance;
  }
  var MaterialIcon$tab_instance;
  function MaterialIcon$tab_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tab_instance;
  }
  var MaterialIcon$tabUnselected_instance;
  function MaterialIcon$tabUnselected_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tabUnselected_instance;
  }
  var MaterialIcon$theaters_instance;
  function MaterialIcon$theaters_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$theaters_instance;
  }
  var MaterialIcon$thumbsUpDown_instance;
  function MaterialIcon$thumbsUpDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$thumbsUpDown_instance;
  }
  var MaterialIcon$thumbDown_instance;
  function MaterialIcon$thumbDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$thumbDown_instance;
  }
  var MaterialIcon$thumbUp_instance;
  function MaterialIcon$thumbUp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$thumbUp_instance;
  }
  var MaterialIcon$timeline_instance;
  function MaterialIcon$timeline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timeline_instance;
  }
  var MaterialIcon$toc_instance;
  function MaterialIcon$toc_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$toc_instance;
  }
  var MaterialIcon$today_instance;
  function MaterialIcon$today_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$today_instance;
  }
  var MaterialIcon$toll_instance;
  function MaterialIcon$toll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$toll_instance;
  }
  var MaterialIcon$touchApp_instance;
  function MaterialIcon$touchApp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$touchApp_instance;
  }
  var MaterialIcon$trackChanges_instance;
  function MaterialIcon$trackChanges_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$trackChanges_instance;
  }
  var MaterialIcon$translate_instance;
  function MaterialIcon$translate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$translate_instance;
  }
  var MaterialIcon$trendingDown_instance;
  function MaterialIcon$trendingDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$trendingDown_instance;
  }
  var MaterialIcon$trendingFlat_instance;
  function MaterialIcon$trendingFlat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$trendingFlat_instance;
  }
  var MaterialIcon$trendingUp_instance;
  function MaterialIcon$trendingUp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$trendingUp_instance;
  }
  var MaterialIcon$turnedIn_instance;
  function MaterialIcon$turnedIn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$turnedIn_instance;
  }
  var MaterialIcon$turnedInNot_instance;
  function MaterialIcon$turnedInNot_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$turnedInNot_instance;
  }
  var MaterialIcon$update_instance;
  function MaterialIcon$update_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$update_instance;
  }
  var MaterialIcon$verifiedUser_instance;
  function MaterialIcon$verifiedUser_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$verifiedUser_instance;
  }
  var MaterialIcon$viewAgenda_instance;
  function MaterialIcon$viewAgenda_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewAgenda_instance;
  }
  var MaterialIcon$viewArray_instance;
  function MaterialIcon$viewArray_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewArray_instance;
  }
  var MaterialIcon$viewCarousel_instance;
  function MaterialIcon$viewCarousel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewCarousel_instance;
  }
  var MaterialIcon$viewColumn_instance;
  function MaterialIcon$viewColumn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewColumn_instance;
  }
  var MaterialIcon$viewDay_instance;
  function MaterialIcon$viewDay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewDay_instance;
  }
  var MaterialIcon$viewHeadline_instance;
  function MaterialIcon$viewHeadline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewHeadline_instance;
  }
  var MaterialIcon$viewList_instance;
  function MaterialIcon$viewList_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewList_instance;
  }
  var MaterialIcon$viewModule_instance;
  function MaterialIcon$viewModule_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewModule_instance;
  }
  var MaterialIcon$viewQuilt_instance;
  function MaterialIcon$viewQuilt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewQuilt_instance;
  }
  var MaterialIcon$viewStream_instance;
  function MaterialIcon$viewStream_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewStream_instance;
  }
  var MaterialIcon$viewWeek_instance;
  function MaterialIcon$viewWeek_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewWeek_instance;
  }
  var MaterialIcon$visibility_instance;
  function MaterialIcon$visibility_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$visibility_instance;
  }
  var MaterialIcon$visibilityOff_instance;
  function MaterialIcon$visibilityOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$visibilityOff_instance;
  }
  var MaterialIcon$watchLater_instance;
  function MaterialIcon$watchLater_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$watchLater_instance;
  }
  var MaterialIcon$work_instance;
  function MaterialIcon$work_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$work_instance;
  }
  var MaterialIcon$youtubeSearchedFor_instance;
  function MaterialIcon$youtubeSearchedFor_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$youtubeSearchedFor_instance;
  }
  var MaterialIcon$zoomIn_instance;
  function MaterialIcon$zoomIn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$zoomIn_instance;
  }
  var MaterialIcon$zoomOut_instance;
  function MaterialIcon$zoomOut_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$zoomOut_instance;
  }
  var MaterialIcon$addAlert_instance;
  function MaterialIcon$addAlert_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addAlert_instance;
  }
  var MaterialIcon$error_instance;
  function MaterialIcon$error_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$error_instance;
  }
  var MaterialIcon$errorOutline_instance;
  function MaterialIcon$errorOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$errorOutline_instance;
  }
  var MaterialIcon$warning_instance;
  function MaterialIcon$warning_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$warning_instance;
  }
  var MaterialIcon$addToQueue_instance;
  function MaterialIcon$addToQueue_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addToQueue_instance;
  }
  var MaterialIcon$airplay_instance;
  function MaterialIcon$airplay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airplay_instance;
  }
  var MaterialIcon$album_instance;
  function MaterialIcon$album_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$album_instance;
  }
  var MaterialIcon$artTrack_instance;
  function MaterialIcon$artTrack_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$artTrack_instance;
  }
  var MaterialIcon$avTimer_instance;
  function MaterialIcon$avTimer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$avTimer_instance;
  }
  var MaterialIcon$brandingWatermark_instance;
  function MaterialIcon$brandingWatermark_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brandingWatermark_instance;
  }
  var MaterialIcon$callToAction_instance;
  function MaterialIcon$callToAction_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callToAction_instance;
  }
  var MaterialIcon$closedCaption_instance;
  function MaterialIcon$closedCaption_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$closedCaption_instance;
  }
  var MaterialIcon$equalizer_instance;
  function MaterialIcon$equalizer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$equalizer_instance;
  }
  var MaterialIcon$explicit_instance;
  function MaterialIcon$explicit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$explicit_instance;
  }
  var MaterialIcon$fastForward_instance;
  function MaterialIcon$fastForward_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fastForward_instance;
  }
  var MaterialIcon$fastRewind_instance;
  function MaterialIcon$fastRewind_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fastRewind_instance;
  }
  var MaterialIcon$featuredPlayList_instance;
  function MaterialIcon$featuredPlayList_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$featuredPlayList_instance;
  }
  var MaterialIcon$featuredVideo_instance;
  function MaterialIcon$featuredVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$featuredVideo_instance;
  }
  var MaterialIcon$fiberDvr_instance;
  function MaterialIcon$fiberDvr_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fiberDvr_instance;
  }
  var MaterialIcon$fiberManualRecord_instance;
  function MaterialIcon$fiberManualRecord_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fiberManualRecord_instance;
  }
  var MaterialIcon$fiberNew_instance;
  function MaterialIcon$fiberNew_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fiberNew_instance;
  }
  var MaterialIcon$fiberPin_instance;
  function MaterialIcon$fiberPin_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fiberPin_instance;
  }
  var MaterialIcon$forward10_instance;
  function MaterialIcon$forward10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$forward10_instance;
  }
  var MaterialIcon$forward30_instance;
  function MaterialIcon$forward30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$forward30_instance;
  }
  var MaterialIcon$forward5_instance;
  function MaterialIcon$forward5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$forward5_instance;
  }
  var MaterialIcon$games_instance;
  function MaterialIcon$games_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$games_instance;
  }
  var MaterialIcon$hd_instance;
  function MaterialIcon$hd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hd_instance;
  }
  var MaterialIcon$hearing_instance;
  function MaterialIcon$hearing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hearing_instance;
  }
  var MaterialIcon$highQuality_instance;
  function MaterialIcon$highQuality_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$highQuality_instance;
  }
  var MaterialIcon$libraryAdd_instance;
  function MaterialIcon$libraryAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$libraryAdd_instance;
  }
  var MaterialIcon$libraryBooks_instance;
  function MaterialIcon$libraryBooks_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$libraryBooks_instance;
  }
  var MaterialIcon$libraryMusic_instance;
  function MaterialIcon$libraryMusic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$libraryMusic_instance;
  }
  var MaterialIcon$loop_instance;
  function MaterialIcon$loop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$loop_instance;
  }
  var MaterialIcon$mic_instance;
  function MaterialIcon$mic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mic_instance;
  }
  var MaterialIcon$micNone_instance;
  function MaterialIcon$micNone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$micNone_instance;
  }
  var MaterialIcon$micOff_instance;
  function MaterialIcon$micOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$micOff_instance;
  }
  var MaterialIcon$movie_instance;
  function MaterialIcon$movie_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$movie_instance;
  }
  var MaterialIcon$musicVideo_instance;
  function MaterialIcon$musicVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$musicVideo_instance;
  }
  var MaterialIcon$newReleases_instance;
  function MaterialIcon$newReleases_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$newReleases_instance;
  }
  var MaterialIcon$note_instance;
  function MaterialIcon$note_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$note_instance;
  }
  var MaterialIcon$notInterested_instance;
  function MaterialIcon$notInterested_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notInterested_instance;
  }
  var MaterialIcon$pause_instance;
  function MaterialIcon$pause_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pause_instance;
  }
  var MaterialIcon$pauseCircleFilled_instance;
  function MaterialIcon$pauseCircleFilled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pauseCircleFilled_instance;
  }
  var MaterialIcon$pauseCircleOutline_instance;
  function MaterialIcon$pauseCircleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pauseCircleOutline_instance;
  }
  var MaterialIcon$playlistAdd_instance;
  function MaterialIcon$playlistAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playlistAdd_instance;
  }
  var MaterialIcon$playlistAddCheck_instance;
  function MaterialIcon$playlistAddCheck_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playlistAddCheck_instance;
  }
  var MaterialIcon$playlistPlay_instance;
  function MaterialIcon$playlistPlay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playlistPlay_instance;
  }
  var MaterialIcon$playArrow_instance;
  function MaterialIcon$playArrow_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playArrow_instance;
  }
  var MaterialIcon$playCircleFilled_instance;
  function MaterialIcon$playCircleFilled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playCircleFilled_instance;
  }
  var MaterialIcon$playCircleOutline_instance;
  function MaterialIcon$playCircleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$playCircleOutline_instance;
  }
  var MaterialIcon$queue_instance;
  function MaterialIcon$queue_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$queue_instance;
  }
  var MaterialIcon$queueMusic_instance;
  function MaterialIcon$queueMusic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$queueMusic_instance;
  }
  var MaterialIcon$queuePlayNext_instance;
  function MaterialIcon$queuePlayNext_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$queuePlayNext_instance;
  }
  var MaterialIcon$radio_instance;
  function MaterialIcon$radio_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$radio_instance;
  }
  var MaterialIcon$recentActors_instance;
  function MaterialIcon$recentActors_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$recentActors_instance;
  }
  var MaterialIcon$removeFromQueue_instance;
  function MaterialIcon$removeFromQueue_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$removeFromQueue_instance;
  }
  var MaterialIcon$repeat_instance;
  function MaterialIcon$repeat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$repeat_instance;
  }
  var MaterialIcon$repeatOne_instance;
  function MaterialIcon$repeatOne_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$repeatOne_instance;
  }
  var MaterialIcon$replay10_instance;
  function MaterialIcon$replay10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$replay10_instance;
  }
  var MaterialIcon$replay_instance;
  function MaterialIcon$replay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$replay_instance;
  }
  var MaterialIcon$replay30_instance;
  function MaterialIcon$replay30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$replay30_instance;
  }
  var MaterialIcon$replay5_instance;
  function MaterialIcon$replay5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$replay5_instance;
  }
  var MaterialIcon$shuffle_instance;
  function MaterialIcon$shuffle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shuffle_instance;
  }
  var MaterialIcon$skipNext_instance;
  function MaterialIcon$skipNext_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$skipNext_instance;
  }
  var MaterialIcon$skipPrevious_instance;
  function MaterialIcon$skipPrevious_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$skipPrevious_instance;
  }
  var MaterialIcon$slowMotionVideo_instance;
  function MaterialIcon$slowMotionVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$slowMotionVideo_instance;
  }
  var MaterialIcon$snooze_instance;
  function MaterialIcon$snooze_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$snooze_instance;
  }
  var MaterialIcon$sortByAlpha_instance;
  function MaterialIcon$sortByAlpha_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sortByAlpha_instance;
  }
  var MaterialIcon$stop_instance;
  function MaterialIcon$stop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stop_instance;
  }
  var MaterialIcon$subscriptions_instance;
  function MaterialIcon$subscriptions_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subscriptions_instance;
  }
  var MaterialIcon$subtitles_instance;
  function MaterialIcon$subtitles_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subtitles_instance;
  }
  var MaterialIcon$surroundSound_instance;
  function MaterialIcon$surroundSound_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$surroundSound_instance;
  }
  var MaterialIcon$videocam_instance;
  function MaterialIcon$videocam_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videocam_instance;
  }
  var MaterialIcon$videocamOff_instance;
  function MaterialIcon$videocamOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videocamOff_instance;
  }
  var MaterialIcon$videoCall_instance;
  function MaterialIcon$videoCall_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videoCall_instance;
  }
  var MaterialIcon$videoLabel_instance;
  function MaterialIcon$videoLabel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videoLabel_instance;
  }
  var MaterialIcon$videoLibrary_instance;
  function MaterialIcon$videoLibrary_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videoLibrary_instance;
  }
  var MaterialIcon$volumeDown_instance;
  function MaterialIcon$volumeDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$volumeDown_instance;
  }
  var MaterialIcon$volumeMute_instance;
  function MaterialIcon$volumeMute_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$volumeMute_instance;
  }
  var MaterialIcon$volumeOff_instance;
  function MaterialIcon$volumeOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$volumeOff_instance;
  }
  var MaterialIcon$volumeUp_instance;
  function MaterialIcon$volumeUp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$volumeUp_instance;
  }
  var MaterialIcon$web_instance;
  function MaterialIcon$web_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$web_instance;
  }
  var MaterialIcon$webAsset_instance;
  function MaterialIcon$webAsset_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$webAsset_instance;
  }
  var MaterialIcon$business_instance;
  function MaterialIcon$business_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$business_instance;
  }
  var MaterialIcon$call_instance;
  function MaterialIcon$call_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$call_instance;
  }
  var MaterialIcon$callEnd_instance;
  function MaterialIcon$callEnd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callEnd_instance;
  }
  var MaterialIcon$callMade_instance;
  function MaterialIcon$callMade_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callMade_instance;
  }
  var MaterialIcon$callMerge_instance;
  function MaterialIcon$callMerge_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callMerge_instance;
  }
  var MaterialIcon$callMissed_instance;
  function MaterialIcon$callMissed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callMissed_instance;
  }
  var MaterialIcon$callMissedOutgoing_instance;
  function MaterialIcon$callMissedOutgoing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callMissedOutgoing_instance;
  }
  var MaterialIcon$callReceived_instance;
  function MaterialIcon$callReceived_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callReceived_instance;
  }
  var MaterialIcon$callSplit_instance;
  function MaterialIcon$callSplit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$callSplit_instance;
  }
  var MaterialIcon$chat_instance;
  function MaterialIcon$chat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chat_instance;
  }
  var MaterialIcon$chatBubble_instance;
  function MaterialIcon$chatBubble_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chatBubble_instance;
  }
  var MaterialIcon$chatBubbleOutline_instance;
  function MaterialIcon$chatBubbleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chatBubbleOutline_instance;
  }
  var MaterialIcon$clearAll_instance;
  function MaterialIcon$clearAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$clearAll_instance;
  }
  var MaterialIcon$comment_instance;
  function MaterialIcon$comment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$comment_instance;
  }
  var MaterialIcon$contacts_instance;
  function MaterialIcon$contacts_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contacts_instance;
  }
  var MaterialIcon$contactMail_instance;
  function MaterialIcon$contactMail_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contactMail_instance;
  }
  var MaterialIcon$contactPhone_instance;
  function MaterialIcon$contactPhone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contactPhone_instance;
  }
  var MaterialIcon$dialerSip_instance;
  function MaterialIcon$dialerSip_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dialerSip_instance;
  }
  var MaterialIcon$dialpad_instance;
  function MaterialIcon$dialpad_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dialpad_instance;
  }
  var MaterialIcon$email_instance;
  function MaterialIcon$email_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$email_instance;
  }
  var MaterialIcon$forum_instance;
  function MaterialIcon$forum_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$forum_instance;
  }
  var MaterialIcon$importContacts_instance;
  function MaterialIcon$importContacts_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$importContacts_instance;
  }
  var MaterialIcon$importExport_instance;
  function MaterialIcon$importExport_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$importExport_instance;
  }
  var MaterialIcon$invertColorsOff_instance;
  function MaterialIcon$invertColorsOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$invertColorsOff_instance;
  }
  var MaterialIcon$liveHelp_instance;
  function MaterialIcon$liveHelp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$liveHelp_instance;
  }
  var MaterialIcon$locationOff_instance;
  function MaterialIcon$locationOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$locationOff_instance;
  }
  var MaterialIcon$locationOn_instance;
  function MaterialIcon$locationOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$locationOn_instance;
  }
  var MaterialIcon$mailOutline_instance;
  function MaterialIcon$mailOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mailOutline_instance;
  }
  var MaterialIcon$message_instance;
  function MaterialIcon$message_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$message_instance;
  }
  var MaterialIcon$noSim_instance;
  function MaterialIcon$noSim_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$noSim_instance;
  }
  var MaterialIcon$phonelinkErase_instance;
  function MaterialIcon$phonelinkErase_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelinkErase_instance;
  }
  var MaterialIcon$phonelinkLock_instance;
  function MaterialIcon$phonelinkLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelinkLock_instance;
  }
  var MaterialIcon$phonelinkRing_instance;
  function MaterialIcon$phonelinkRing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelinkRing_instance;
  }
  var MaterialIcon$phonelinkSetup_instance;
  function MaterialIcon$phonelinkSetup_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelinkSetup_instance;
  }
  var MaterialIcon$phone_instance;
  function MaterialIcon$phone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phone_instance;
  }
  var MaterialIcon$portableWifiOff_instance;
  function MaterialIcon$portableWifiOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$portableWifiOff_instance;
  }
  var MaterialIcon$presentToAll_instance;
  function MaterialIcon$presentToAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$presentToAll_instance;
  }
  var MaterialIcon$ringVolume_instance;
  function MaterialIcon$ringVolume_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ringVolume_instance;
  }
  var MaterialIcon$rssFeed_instance;
  function MaterialIcon$rssFeed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rssFeed_instance;
  }
  var MaterialIcon$screenShare_instance;
  function MaterialIcon$screenShare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$screenShare_instance;
  }
  var MaterialIcon$speakerPhone_instance;
  function MaterialIcon$speakerPhone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$speakerPhone_instance;
  }
  var MaterialIcon$stayCurrentLandscape_instance;
  function MaterialIcon$stayCurrentLandscape_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stayCurrentLandscape_instance;
  }
  var MaterialIcon$stayCurrentPortrait_instance;
  function MaterialIcon$stayCurrentPortrait_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stayCurrentPortrait_instance;
  }
  var MaterialIcon$stayPrimaryLandscape_instance;
  function MaterialIcon$stayPrimaryLandscape_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stayPrimaryLandscape_instance;
  }
  var MaterialIcon$stayPrimaryPortrait_instance;
  function MaterialIcon$stayPrimaryPortrait_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stayPrimaryPortrait_instance;
  }
  var MaterialIcon$stopScreenShare_instance;
  function MaterialIcon$stopScreenShare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$stopScreenShare_instance;
  }
  var MaterialIcon$swapCalls_instance;
  function MaterialIcon$swapCalls_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$swapCalls_instance;
  }
  var MaterialIcon$textsms_instance;
  function MaterialIcon$textsms_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$textsms_instance;
  }
  var MaterialIcon$voicemail_instance;
  function MaterialIcon$voicemail_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$voicemail_instance;
  }
  var MaterialIcon$vpnKey_instance;
  function MaterialIcon$vpnKey_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$vpnKey_instance;
  }
  var MaterialIcon$add_instance;
  function MaterialIcon$add_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$add_instance;
  }
  var MaterialIcon$addBox_instance;
  function MaterialIcon$addBox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addBox_instance;
  }
  var MaterialIcon$addCircle_instance;
  function MaterialIcon$addCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addCircle_instance;
  }
  var MaterialIcon$addCircleOutline_instance;
  function MaterialIcon$addCircleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addCircleOutline_instance;
  }
  var MaterialIcon$archive_instance;
  function MaterialIcon$archive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$archive_instance;
  }
  var MaterialIcon$backspace_instance;
  function MaterialIcon$backspace_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$backspace_instance;
  }
  var MaterialIcon$block_instance;
  function MaterialIcon$block_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$block_instance;
  }
  var MaterialIcon$clear_instance;
  function MaterialIcon$clear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$clear_instance;
  }
  var MaterialIcon$contentCopy_instance;
  function MaterialIcon$contentCopy_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contentCopy_instance;
  }
  var MaterialIcon$contentCut_instance;
  function MaterialIcon$contentCut_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contentCut_instance;
  }
  var MaterialIcon$contentPaste_instance;
  function MaterialIcon$contentPaste_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$contentPaste_instance;
  }
  var MaterialIcon$create_instance;
  function MaterialIcon$create_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$create_instance;
  }
  var MaterialIcon$deleteSweep_instance;
  function MaterialIcon$deleteSweep_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$deleteSweep_instance;
  }
  var MaterialIcon$drafts_instance;
  function MaterialIcon$drafts_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$drafts_instance;
  }
  var MaterialIcon$filterList_instance;
  function MaterialIcon$filterList_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterList_instance;
  }
  var MaterialIcon$flag_instance;
  function MaterialIcon$flag_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flag_instance;
  }
  var MaterialIcon$fontDownload_instance;
  function MaterialIcon$fontDownload_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fontDownload_instance;
  }
  var MaterialIcon$forward_instance;
  function MaterialIcon$forward_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$forward_instance;
  }
  var MaterialIcon$gesture_instance;
  function MaterialIcon$gesture_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gesture_instance;
  }
  var MaterialIcon$inbox_instance;
  function MaterialIcon$inbox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$inbox_instance;
  }
  var MaterialIcon$link_instance;
  function MaterialIcon$link_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$link_instance;
  }
  var MaterialIcon$lowPriority_instance;
  function MaterialIcon$lowPriority_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lowPriority_instance;
  }
  var MaterialIcon$mail_instance;
  function MaterialIcon$mail_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mail_instance;
  }
  var MaterialIcon$markunread_instance;
  function MaterialIcon$markunread_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$markunread_instance;
  }
  var MaterialIcon$moveToInbox_instance;
  function MaterialIcon$moveToInbox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$moveToInbox_instance;
  }
  var MaterialIcon$nextWeek_instance;
  function MaterialIcon$nextWeek_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$nextWeek_instance;
  }
  var MaterialIcon$redo_instance;
  function MaterialIcon$redo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$redo_instance;
  }
  var MaterialIcon$remove_instance;
  function MaterialIcon$remove_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$remove_instance;
  }
  var MaterialIcon$removeCircle_instance;
  function MaterialIcon$removeCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$removeCircle_instance;
  }
  var MaterialIcon$removeCircleOutline_instance;
  function MaterialIcon$removeCircleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$removeCircleOutline_instance;
  }
  var MaterialIcon$reply_instance;
  function MaterialIcon$reply_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$reply_instance;
  }
  var MaterialIcon$replyAll_instance;
  function MaterialIcon$replyAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$replyAll_instance;
  }
  var MaterialIcon$report_instance;
  function MaterialIcon$report_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$report_instance;
  }
  var MaterialIcon$save_instance;
  function MaterialIcon$save_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$save_instance;
  }
  var MaterialIcon$selectAll_instance;
  function MaterialIcon$selectAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$selectAll_instance;
  }
  var MaterialIcon$send_instance;
  function MaterialIcon$send_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$send_instance;
  }
  var MaterialIcon$sort_instance;
  function MaterialIcon$sort_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sort_instance;
  }
  var MaterialIcon$textFormat_instance;
  function MaterialIcon$textFormat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$textFormat_instance;
  }
  var MaterialIcon$unarchive_instance;
  function MaterialIcon$unarchive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$unarchive_instance;
  }
  var MaterialIcon$undo_instance;
  function MaterialIcon$undo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$undo_instance;
  }
  var MaterialIcon$weekend_instance;
  function MaterialIcon$weekend_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$weekend_instance;
  }
  var MaterialIcon$accessAlarms_instance;
  function MaterialIcon$accessAlarms_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accessAlarms_instance;
  }
  var MaterialIcon$accessAlarm_instance;
  function MaterialIcon$accessAlarm_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accessAlarm_instance;
  }
  var MaterialIcon$accessTime_instance;
  function MaterialIcon$accessTime_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$accessTime_instance;
  }
  var MaterialIcon$addAlarm_instance;
  function MaterialIcon$addAlarm_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addAlarm_instance;
  }
  var MaterialIcon$airplanemodeActive_instance;
  function MaterialIcon$airplanemodeActive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airplanemodeActive_instance;
  }
  var MaterialIcon$airplanemodeInactive_instance;
  function MaterialIcon$airplanemodeInactive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airplanemodeInactive_instance;
  }
  var MaterialIcon$battery20_instance;
  function MaterialIcon$battery20_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery20_instance;
  }
  var MaterialIcon$battery30_instance;
  function MaterialIcon$battery30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery30_instance;
  }
  var MaterialIcon$battery50_instance;
  function MaterialIcon$battery50_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery50_instance;
  }
  var MaterialIcon$battery60_instance;
  function MaterialIcon$battery60_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery60_instance;
  }
  var MaterialIcon$battery80_instance;
  function MaterialIcon$battery80_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery80_instance;
  }
  var MaterialIcon$battery90_instance;
  function MaterialIcon$battery90_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$battery90_instance;
  }
  var MaterialIcon$batteryAlert_instance;
  function MaterialIcon$batteryAlert_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryAlert_instance;
  }
  var MaterialIcon$batteryCharging20_instance;
  function MaterialIcon$batteryCharging20_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging20_instance;
  }
  var MaterialIcon$batteryCharging30_instance;
  function MaterialIcon$batteryCharging30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging30_instance;
  }
  var MaterialIcon$batteryCharging50_instance;
  function MaterialIcon$batteryCharging50_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging50_instance;
  }
  var MaterialIcon$batteryCharging60_instance;
  function MaterialIcon$batteryCharging60_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging60_instance;
  }
  var MaterialIcon$batteryCharging80_instance;
  function MaterialIcon$batteryCharging80_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging80_instance;
  }
  var MaterialIcon$batteryCharging90_instance;
  function MaterialIcon$batteryCharging90_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryCharging90_instance;
  }
  var MaterialIcon$batteryChargingFull_instance;
  function MaterialIcon$batteryChargingFull_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryChargingFull_instance;
  }
  var MaterialIcon$batteryFull_instance;
  function MaterialIcon$batteryFull_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryFull_instance;
  }
  var MaterialIcon$batteryStd_instance;
  function MaterialIcon$batteryStd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryStd_instance;
  }
  var MaterialIcon$batteryUnknown_instance;
  function MaterialIcon$batteryUnknown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$batteryUnknown_instance;
  }
  var MaterialIcon$bluetooth_instance;
  function MaterialIcon$bluetooth_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bluetooth_instance;
  }
  var MaterialIcon$bluetoothConnected_instance;
  function MaterialIcon$bluetoothConnected_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bluetoothConnected_instance;
  }
  var MaterialIcon$bluetoothDisabled_instance;
  function MaterialIcon$bluetoothDisabled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bluetoothDisabled_instance;
  }
  var MaterialIcon$bluetoothSearching_instance;
  function MaterialIcon$bluetoothSearching_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bluetoothSearching_instance;
  }
  var MaterialIcon$brightnessAuto_instance;
  function MaterialIcon$brightnessAuto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightnessAuto_instance;
  }
  var MaterialIcon$brightnessHigh_instance;
  function MaterialIcon$brightnessHigh_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightnessHigh_instance;
  }
  var MaterialIcon$brightnessLow_instance;
  function MaterialIcon$brightnessLow_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightnessLow_instance;
  }
  var MaterialIcon$brightnessMedium_instance;
  function MaterialIcon$brightnessMedium_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightnessMedium_instance;
  }
  var MaterialIcon$dataUsage_instance;
  function MaterialIcon$dataUsage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dataUsage_instance;
  }
  var MaterialIcon$developerMode_instance;
  function MaterialIcon$developerMode_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$developerMode_instance;
  }
  var MaterialIcon$devices_instance;
  function MaterialIcon$devices_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$devices_instance;
  }
  var MaterialIcon$dvr_instance;
  function MaterialIcon$dvr_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dvr_instance;
  }
  var MaterialIcon$gpsFixed_instance;
  function MaterialIcon$gpsFixed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gpsFixed_instance;
  }
  var MaterialIcon$gpsNotFixed_instance;
  function MaterialIcon$gpsNotFixed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gpsNotFixed_instance;
  }
  var MaterialIcon$gpsOff_instance;
  function MaterialIcon$gpsOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gpsOff_instance;
  }
  var MaterialIcon$graphicEq_instance;
  function MaterialIcon$graphicEq_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$graphicEq_instance;
  }
  var MaterialIcon$locationDisabled_instance;
  function MaterialIcon$locationDisabled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$locationDisabled_instance;
  }
  var MaterialIcon$locationSearching_instance;
  function MaterialIcon$locationSearching_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$locationSearching_instance;
  }
  var MaterialIcon$networkCell_instance;
  function MaterialIcon$networkCell_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$networkCell_instance;
  }
  var MaterialIcon$networkWifi_instance;
  function MaterialIcon$networkWifi_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$networkWifi_instance;
  }
  var MaterialIcon$nfc_instance;
  function MaterialIcon$nfc_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$nfc_instance;
  }
  var MaterialIcon$screenLockLandscape_instance;
  function MaterialIcon$screenLockLandscape_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$screenLockLandscape_instance;
  }
  var MaterialIcon$screenLockPortrait_instance;
  function MaterialIcon$screenLockPortrait_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$screenLockPortrait_instance;
  }
  var MaterialIcon$screenLockRotation_instance;
  function MaterialIcon$screenLockRotation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$screenLockRotation_instance;
  }
  var MaterialIcon$screenRotation_instance;
  function MaterialIcon$screenRotation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$screenRotation_instance;
  }
  var MaterialIcon$sdStorage_instance;
  function MaterialIcon$sdStorage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sdStorage_instance;
  }
  var MaterialIcon$settingsSystemDaydream_instance;
  function MaterialIcon$settingsSystemDaydream_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$settingsSystemDaydream_instance;
  }
  var MaterialIcon$signalCellular0Bar_instance;
  function MaterialIcon$signalCellular0Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellular0Bar_instance;
  }
  var MaterialIcon$signalCellular1Bar_instance;
  function MaterialIcon$signalCellular1Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellular1Bar_instance;
  }
  var MaterialIcon$signalCellular2Bar_instance;
  function MaterialIcon$signalCellular2Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellular2Bar_instance;
  }
  var MaterialIcon$signalCellular3Bar_instance;
  function MaterialIcon$signalCellular3Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellular3Bar_instance;
  }
  var MaterialIcon$signalCellular4Bar_instance;
  function MaterialIcon$signalCellular4Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellular4Bar_instance;
  }
  var MaterialIcon$signalCellularConnectedNoInternet0Bar_instance;
  function MaterialIcon$signalCellularConnectedNoInternet0Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularConnectedNoInternet0Bar_instance;
  }
  var MaterialIcon$signalCellularConnectedNoInternet1Bar_instance;
  function MaterialIcon$signalCellularConnectedNoInternet1Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularConnectedNoInternet1Bar_instance;
  }
  var MaterialIcon$signalCellularConnectedNoInternet2Bar_instance;
  function MaterialIcon$signalCellularConnectedNoInternet2Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularConnectedNoInternet2Bar_instance;
  }
  var MaterialIcon$signalCellularConnectedNoInternet3Bar_instance;
  function MaterialIcon$signalCellularConnectedNoInternet3Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularConnectedNoInternet3Bar_instance;
  }
  var MaterialIcon$signalCellularConnectedNoInternet4Bar_instance;
  function MaterialIcon$signalCellularConnectedNoInternet4Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularConnectedNoInternet4Bar_instance;
  }
  var MaterialIcon$signalCellularNoSim_instance;
  function MaterialIcon$signalCellularNoSim_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularNoSim_instance;
  }
  var MaterialIcon$signalCellularNull_instance;
  function MaterialIcon$signalCellularNull_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularNull_instance;
  }
  var MaterialIcon$signalCellularOff_instance;
  function MaterialIcon$signalCellularOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalCellularOff_instance;
  }
  var MaterialIcon$signalWifi0Bar_instance;
  function MaterialIcon$signalWifi0Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi0Bar_instance;
  }
  var MaterialIcon$signalWifi1Bar_instance;
  function MaterialIcon$signalWifi1Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi1Bar_instance;
  }
  var MaterialIcon$signalWifi1BarLock_instance;
  function MaterialIcon$signalWifi1BarLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi1BarLock_instance;
  }
  var MaterialIcon$signalWifi2Bar_instance;
  function MaterialIcon$signalWifi2Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi2Bar_instance;
  }
  var MaterialIcon$signalWifi2BarLock_instance;
  function MaterialIcon$signalWifi2BarLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi2BarLock_instance;
  }
  var MaterialIcon$signalWifi3Bar_instance;
  function MaterialIcon$signalWifi3Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi3Bar_instance;
  }
  var MaterialIcon$signalWifi3BarLock_instance;
  function MaterialIcon$signalWifi3BarLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi3BarLock_instance;
  }
  var MaterialIcon$signalWifi4Bar_instance;
  function MaterialIcon$signalWifi4Bar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi4Bar_instance;
  }
  var MaterialIcon$signalWifi4BarLock_instance;
  function MaterialIcon$signalWifi4BarLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifi4BarLock_instance;
  }
  var MaterialIcon$signalWifiOff_instance;
  function MaterialIcon$signalWifiOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiOff_instance;
  }
  var MaterialIcon$signalWifiStatusbar1Bar26x24px_instance;
  function MaterialIcon$signalWifiStatusbar1Bar26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbar1Bar26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbar2Bar26x24px_instance;
  function MaterialIcon$signalWifiStatusbar2Bar26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbar2Bar26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbar3Bar26x24px_instance;
  function MaterialIcon$signalWifiStatusbar3Bar26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbar3Bar26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbar4Bar26x24px_instance;
  function MaterialIcon$signalWifiStatusbar4Bar26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbar4Bar26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_instance;
  function MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_instance;
  function MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_instance;
  function MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_instance;
  function MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_instance;
  function MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarNotConnected26x24px_instance;
  function MaterialIcon$signalWifiStatusbarNotConnected26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarNotConnected26x24px_instance;
  }
  var MaterialIcon$signalWifiStatusbarNull26x24px_instance;
  function MaterialIcon$signalWifiStatusbarNull26x24px_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$signalWifiStatusbarNull26x24px_instance;
  }
  var MaterialIcon$storage_instance;
  function MaterialIcon$storage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$storage_instance;
  }
  var MaterialIcon$usb_instance;
  function MaterialIcon$usb_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$usb_instance;
  }
  var MaterialIcon$wallpaper_instance;
  function MaterialIcon$wallpaper_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wallpaper_instance;
  }
  var MaterialIcon$widgets_instance;
  function MaterialIcon$widgets_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$widgets_instance;
  }
  var MaterialIcon$wifiLock_instance;
  function MaterialIcon$wifiLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wifiLock_instance;
  }
  var MaterialIcon$wifiTethering_instance;
  function MaterialIcon$wifiTethering_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wifiTethering_instance;
  }
  var MaterialIcon$attachFile_instance;
  function MaterialIcon$attachFile_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$attachFile_instance;
  }
  var MaterialIcon$attachMoney_instance;
  function MaterialIcon$attachMoney_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$attachMoney_instance;
  }
  var MaterialIcon$borderAll_instance;
  function MaterialIcon$borderAll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderAll_instance;
  }
  var MaterialIcon$borderBottom_instance;
  function MaterialIcon$borderBottom_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderBottom_instance;
  }
  var MaterialIcon$borderClear_instance;
  function MaterialIcon$borderClear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderClear_instance;
  }
  var MaterialIcon$borderColor_instance;
  function MaterialIcon$borderColor_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderColor_instance;
  }
  var MaterialIcon$borderHorizontal_instance;
  function MaterialIcon$borderHorizontal_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderHorizontal_instance;
  }
  var MaterialIcon$borderInner_instance;
  function MaterialIcon$borderInner_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderInner_instance;
  }
  var MaterialIcon$borderLeft_instance;
  function MaterialIcon$borderLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderLeft_instance;
  }
  var MaterialIcon$borderOuter_instance;
  function MaterialIcon$borderOuter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderOuter_instance;
  }
  var MaterialIcon$borderRight_instance;
  function MaterialIcon$borderRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderRight_instance;
  }
  var MaterialIcon$borderStyle_instance;
  function MaterialIcon$borderStyle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderStyle_instance;
  }
  var MaterialIcon$borderTop_instance;
  function MaterialIcon$borderTop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderTop_instance;
  }
  var MaterialIcon$borderVertical_instance;
  function MaterialIcon$borderVertical_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$borderVertical_instance;
  }
  var MaterialIcon$bubbleChart_instance;
  function MaterialIcon$bubbleChart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bubbleChart_instance;
  }
  var MaterialIcon$dragHandle_instance;
  function MaterialIcon$dragHandle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dragHandle_instance;
  }
  var MaterialIcon$formatAlignCenter_instance;
  function MaterialIcon$formatAlignCenter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatAlignCenter_instance;
  }
  var MaterialIcon$formatAlignJustify_instance;
  function MaterialIcon$formatAlignJustify_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatAlignJustify_instance;
  }
  var MaterialIcon$formatAlignLeft_instance;
  function MaterialIcon$formatAlignLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatAlignLeft_instance;
  }
  var MaterialIcon$formatAlignRight_instance;
  function MaterialIcon$formatAlignRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatAlignRight_instance;
  }
  var MaterialIcon$formatBold_instance;
  function MaterialIcon$formatBold_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatBold_instance;
  }
  var MaterialIcon$formatClear_instance;
  function MaterialIcon$formatClear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatClear_instance;
  }
  var MaterialIcon$formatColorFill_instance;
  function MaterialIcon$formatColorFill_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatColorFill_instance;
  }
  var MaterialIcon$formatColorReset_instance;
  function MaterialIcon$formatColorReset_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatColorReset_instance;
  }
  var MaterialIcon$formatColorText_instance;
  function MaterialIcon$formatColorText_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatColorText_instance;
  }
  var MaterialIcon$formatIndentDecrease_instance;
  function MaterialIcon$formatIndentDecrease_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatIndentDecrease_instance;
  }
  var MaterialIcon$formatIndentIncrease_instance;
  function MaterialIcon$formatIndentIncrease_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatIndentIncrease_instance;
  }
  var MaterialIcon$formatItalic_instance;
  function MaterialIcon$formatItalic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatItalic_instance;
  }
  var MaterialIcon$formatLineSpacing_instance;
  function MaterialIcon$formatLineSpacing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatLineSpacing_instance;
  }
  var MaterialIcon$formatListBulleted_instance;
  function MaterialIcon$formatListBulleted_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatListBulleted_instance;
  }
  var MaterialIcon$formatListNumbered_instance;
  function MaterialIcon$formatListNumbered_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatListNumbered_instance;
  }
  var MaterialIcon$formatPaint_instance;
  function MaterialIcon$formatPaint_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatPaint_instance;
  }
  var MaterialIcon$formatQuote_instance;
  function MaterialIcon$formatQuote_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatQuote_instance;
  }
  var MaterialIcon$formatShapes_instance;
  function MaterialIcon$formatShapes_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatShapes_instance;
  }
  var MaterialIcon$formatSize_instance;
  function MaterialIcon$formatSize_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatSize_instance;
  }
  var MaterialIcon$formatStrikethrough_instance;
  function MaterialIcon$formatStrikethrough_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatStrikethrough_instance;
  }
  var MaterialIcon$formatTextdirectionLToR_instance;
  function MaterialIcon$formatTextdirectionLToR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatTextdirectionLToR_instance;
  }
  var MaterialIcon$formatTextdirectionRToL_instance;
  function MaterialIcon$formatTextdirectionRToL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatTextdirectionRToL_instance;
  }
  var MaterialIcon$formatUnderlined_instance;
  function MaterialIcon$formatUnderlined_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$formatUnderlined_instance;
  }
  var MaterialIcon$functions_instance;
  function MaterialIcon$functions_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$functions_instance;
  }
  var MaterialIcon$highlight_instance;
  function MaterialIcon$highlight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$highlight_instance;
  }
  var MaterialIcon$insertChart_instance;
  function MaterialIcon$insertChart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertChart_instance;
  }
  var MaterialIcon$insertComment_instance;
  function MaterialIcon$insertComment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertComment_instance;
  }
  var MaterialIcon$insertDriveFile_instance;
  function MaterialIcon$insertDriveFile_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertDriveFile_instance;
  }
  var MaterialIcon$insertEmoticon_instance;
  function MaterialIcon$insertEmoticon_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertEmoticon_instance;
  }
  var MaterialIcon$insertInvitation_instance;
  function MaterialIcon$insertInvitation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertInvitation_instance;
  }
  var MaterialIcon$insertLink_instance;
  function MaterialIcon$insertLink_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertLink_instance;
  }
  var MaterialIcon$insertPhoto_instance;
  function MaterialIcon$insertPhoto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$insertPhoto_instance;
  }
  var MaterialIcon$linearScale_instance;
  function MaterialIcon$linearScale_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$linearScale_instance;
  }
  var MaterialIcon$mergeType_instance;
  function MaterialIcon$mergeType_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mergeType_instance;
  }
  var MaterialIcon$modeComment_instance;
  function MaterialIcon$modeComment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$modeComment_instance;
  }
  var MaterialIcon$modeEdit_instance;
  function MaterialIcon$modeEdit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$modeEdit_instance;
  }
  var MaterialIcon$monetizationOn_instance;
  function MaterialIcon$monetizationOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$monetizationOn_instance;
  }
  var MaterialIcon$moneyOff_instance;
  function MaterialIcon$moneyOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$moneyOff_instance;
  }
  var MaterialIcon$multilineChart_instance;
  function MaterialIcon$multilineChart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$multilineChart_instance;
  }
  var MaterialIcon$pieChart_instance;
  function MaterialIcon$pieChart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pieChart_instance;
  }
  var MaterialIcon$pieChartOutlined_instance;
  function MaterialIcon$pieChartOutlined_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pieChartOutlined_instance;
  }
  var MaterialIcon$publish_instance;
  function MaterialIcon$publish_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$publish_instance;
  }
  var MaterialIcon$shortText_instance;
  function MaterialIcon$shortText_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$shortText_instance;
  }
  var MaterialIcon$showChart_instance;
  function MaterialIcon$showChart_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$showChart_instance;
  }
  var MaterialIcon$spaceBar_instance;
  function MaterialIcon$spaceBar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$spaceBar_instance;
  }
  var MaterialIcon$strikethroughS_instance;
  function MaterialIcon$strikethroughS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$strikethroughS_instance;
  }
  var MaterialIcon$textFields_instance;
  function MaterialIcon$textFields_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$textFields_instance;
  }
  var MaterialIcon$title_instance;
  function MaterialIcon$title_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$title_instance;
  }
  var MaterialIcon$verticalAlignBottom_instance;
  function MaterialIcon$verticalAlignBottom_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$verticalAlignBottom_instance;
  }
  var MaterialIcon$verticalAlignCenter_instance;
  function MaterialIcon$verticalAlignCenter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$verticalAlignCenter_instance;
  }
  var MaterialIcon$verticalAlignTop_instance;
  function MaterialIcon$verticalAlignTop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$verticalAlignTop_instance;
  }
  var MaterialIcon$wrapText_instance;
  function MaterialIcon$wrapText_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wrapText_instance;
  }
  var MaterialIcon$attachment_instance;
  function MaterialIcon$attachment_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$attachment_instance;
  }
  var MaterialIcon$cloud_instance;
  function MaterialIcon$cloud_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloud_instance;
  }
  var MaterialIcon$cloudCircle_instance;
  function MaterialIcon$cloudCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudCircle_instance;
  }
  var MaterialIcon$cloudDone_instance;
  function MaterialIcon$cloudDone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudDone_instance;
  }
  var MaterialIcon$cloudDownload_instance;
  function MaterialIcon$cloudDownload_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudDownload_instance;
  }
  var MaterialIcon$cloudOff_instance;
  function MaterialIcon$cloudOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudOff_instance;
  }
  var MaterialIcon$cloudQueue_instance;
  function MaterialIcon$cloudQueue_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudQueue_instance;
  }
  var MaterialIcon$cloudUpload_instance;
  function MaterialIcon$cloudUpload_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cloudUpload_instance;
  }
  var MaterialIcon$createNewFolder_instance;
  function MaterialIcon$createNewFolder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$createNewFolder_instance;
  }
  var MaterialIcon$fileDownload_instance;
  function MaterialIcon$fileDownload_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fileDownload_instance;
  }
  var MaterialIcon$fileUpload_instance;
  function MaterialIcon$fileUpload_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fileUpload_instance;
  }
  var MaterialIcon$folder_instance;
  function MaterialIcon$folder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$folder_instance;
  }
  var MaterialIcon$folderOpen_instance;
  function MaterialIcon$folderOpen_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$folderOpen_instance;
  }
  var MaterialIcon$folderShared_instance;
  function MaterialIcon$folderShared_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$folderShared_instance;
  }
  var MaterialIcon$cast_instance;
  function MaterialIcon$cast_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cast_instance;
  }
  var MaterialIcon$castConnected_instance;
  function MaterialIcon$castConnected_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$castConnected_instance;
  }
  var MaterialIcon$computer_instance;
  function MaterialIcon$computer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$computer_instance;
  }
  var MaterialIcon$desktopMac_instance;
  function MaterialIcon$desktopMac_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$desktopMac_instance;
  }
  var MaterialIcon$desktopWindows_instance;
  function MaterialIcon$desktopWindows_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$desktopWindows_instance;
  }
  var MaterialIcon$developerBoard_instance;
  function MaterialIcon$developerBoard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$developerBoard_instance;
  }
  var MaterialIcon$devicesOther_instance;
  function MaterialIcon$devicesOther_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$devicesOther_instance;
  }
  var MaterialIcon$deviceHub_instance;
  function MaterialIcon$deviceHub_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$deviceHub_instance;
  }
  var MaterialIcon$dock_instance;
  function MaterialIcon$dock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dock_instance;
  }
  var MaterialIcon$gamepad_instance;
  function MaterialIcon$gamepad_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gamepad_instance;
  }
  var MaterialIcon$headset_instance;
  function MaterialIcon$headset_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$headset_instance;
  }
  var MaterialIcon$headsetMic_instance;
  function MaterialIcon$headsetMic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$headsetMic_instance;
  }
  var MaterialIcon$keyboard_instance;
  function MaterialIcon$keyboard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboard_instance;
  }
  var MaterialIcon$keyboardArrowDown_instance;
  function MaterialIcon$keyboardArrowDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardArrowDown_instance;
  }
  var MaterialIcon$keyboardArrowLeft_instance;
  function MaterialIcon$keyboardArrowLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardArrowLeft_instance;
  }
  var MaterialIcon$keyboardArrowRight_instance;
  function MaterialIcon$keyboardArrowRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardArrowRight_instance;
  }
  var MaterialIcon$keyboardArrowUp_instance;
  function MaterialIcon$keyboardArrowUp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardArrowUp_instance;
  }
  var MaterialIcon$keyboardBackspace_instance;
  function MaterialIcon$keyboardBackspace_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardBackspace_instance;
  }
  var MaterialIcon$keyboardCapslock_instance;
  function MaterialIcon$keyboardCapslock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardCapslock_instance;
  }
  var MaterialIcon$keyboardHide_instance;
  function MaterialIcon$keyboardHide_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardHide_instance;
  }
  var MaterialIcon$keyboardReturn_instance;
  function MaterialIcon$keyboardReturn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardReturn_instance;
  }
  var MaterialIcon$keyboardTab_instance;
  function MaterialIcon$keyboardTab_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardTab_instance;
  }
  var MaterialIcon$keyboardVoice_instance;
  function MaterialIcon$keyboardVoice_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$keyboardVoice_instance;
  }
  var MaterialIcon$laptop_instance;
  function MaterialIcon$laptop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$laptop_instance;
  }
  var MaterialIcon$laptopChromebook_instance;
  function MaterialIcon$laptopChromebook_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$laptopChromebook_instance;
  }
  var MaterialIcon$laptopMac_instance;
  function MaterialIcon$laptopMac_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$laptopMac_instance;
  }
  var MaterialIcon$laptopWindows_instance;
  function MaterialIcon$laptopWindows_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$laptopWindows_instance;
  }
  var MaterialIcon$memory_instance;
  function MaterialIcon$memory_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$memory_instance;
  }
  var MaterialIcon$mouse_instance;
  function MaterialIcon$mouse_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mouse_instance;
  }
  var MaterialIcon$phonelink_instance;
  function MaterialIcon$phonelink_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelink_instance;
  }
  var MaterialIcon$phonelinkOff_instance;
  function MaterialIcon$phonelinkOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonelinkOff_instance;
  }
  var MaterialIcon$phoneAndroid_instance;
  function MaterialIcon$phoneAndroid_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneAndroid_instance;
  }
  var MaterialIcon$phoneIphone_instance;
  function MaterialIcon$phoneIphone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneIphone_instance;
  }
  var MaterialIcon$powerInput_instance;
  function MaterialIcon$powerInput_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$powerInput_instance;
  }
  var MaterialIcon$router_instance;
  function MaterialIcon$router_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$router_instance;
  }
  var MaterialIcon$scanner_instance;
  function MaterialIcon$scanner_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$scanner_instance;
  }
  var MaterialIcon$security_instance;
  function MaterialIcon$security_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$security_instance;
  }
  var MaterialIcon$simCard_instance;
  function MaterialIcon$simCard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$simCard_instance;
  }
  var MaterialIcon$smartphone_instance;
  function MaterialIcon$smartphone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$smartphone_instance;
  }
  var MaterialIcon$speaker_instance;
  function MaterialIcon$speaker_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$speaker_instance;
  }
  var MaterialIcon$speakerGroup_instance;
  function MaterialIcon$speakerGroup_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$speakerGroup_instance;
  }
  var MaterialIcon$tablet_instance;
  function MaterialIcon$tablet_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tablet_instance;
  }
  var MaterialIcon$tabletAndroid_instance;
  function MaterialIcon$tabletAndroid_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tabletAndroid_instance;
  }
  var MaterialIcon$tabletMac_instance;
  function MaterialIcon$tabletMac_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tabletMac_instance;
  }
  var MaterialIcon$toys_instance;
  function MaterialIcon$toys_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$toys_instance;
  }
  var MaterialIcon$tv_instance;
  function MaterialIcon$tv_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tv_instance;
  }
  var MaterialIcon$videogameAsset_instance;
  function MaterialIcon$videogameAsset_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$videogameAsset_instance;
  }
  var MaterialIcon$watch_instance;
  function MaterialIcon$watch_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$watch_instance;
  }
  var MaterialIcon$addAPhoto_instance;
  function MaterialIcon$addAPhoto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addAPhoto_instance;
  }
  var MaterialIcon$addToPhotos_instance;
  function MaterialIcon$addToPhotos_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addToPhotos_instance;
  }
  var MaterialIcon$adjust_instance;
  function MaterialIcon$adjust_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$adjust_instance;
  }
  var MaterialIcon$assistant_instance;
  function MaterialIcon$assistant_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assistant_instance;
  }
  var MaterialIcon$assistantPhoto_instance;
  function MaterialIcon$assistantPhoto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$assistantPhoto_instance;
  }
  var MaterialIcon$audiotrack_instance;
  function MaterialIcon$audiotrack_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$audiotrack_instance;
  }
  var MaterialIcon$blurCircular_instance;
  function MaterialIcon$blurCircular_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$blurCircular_instance;
  }
  var MaterialIcon$blurLinear_instance;
  function MaterialIcon$blurLinear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$blurLinear_instance;
  }
  var MaterialIcon$blurOff_instance;
  function MaterialIcon$blurOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$blurOff_instance;
  }
  var MaterialIcon$blurOn_instance;
  function MaterialIcon$blurOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$blurOn_instance;
  }
  var MaterialIcon$brightness1_instance;
  function MaterialIcon$brightness1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness1_instance;
  }
  var MaterialIcon$brightness2_instance;
  function MaterialIcon$brightness2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness2_instance;
  }
  var MaterialIcon$brightness3_instance;
  function MaterialIcon$brightness3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness3_instance;
  }
  var MaterialIcon$brightness4_instance;
  function MaterialIcon$brightness4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness4_instance;
  }
  var MaterialIcon$brightness5_instance;
  function MaterialIcon$brightness5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness5_instance;
  }
  var MaterialIcon$brightness6_instance;
  function MaterialIcon$brightness6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness6_instance;
  }
  var MaterialIcon$brightness7_instance;
  function MaterialIcon$brightness7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brightness7_instance;
  }
  var MaterialIcon$brokenImage_instance;
  function MaterialIcon$brokenImage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brokenImage_instance;
  }
  var MaterialIcon$brush_instance;
  function MaterialIcon$brush_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$brush_instance;
  }
  var MaterialIcon$burstMode_instance;
  function MaterialIcon$burstMode_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$burstMode_instance;
  }
  var MaterialIcon$camera_instance;
  function MaterialIcon$camera_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$camera_instance;
  }
  var MaterialIcon$cameraAlt_instance;
  function MaterialIcon$cameraAlt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cameraAlt_instance;
  }
  var MaterialIcon$cameraFront_instance;
  function MaterialIcon$cameraFront_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cameraFront_instance;
  }
  var MaterialIcon$cameraRear_instance;
  function MaterialIcon$cameraRear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cameraRear_instance;
  }
  var MaterialIcon$cameraRoll_instance;
  function MaterialIcon$cameraRoll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cameraRoll_instance;
  }
  var MaterialIcon$centerFocusStrong_instance;
  function MaterialIcon$centerFocusStrong_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$centerFocusStrong_instance;
  }
  var MaterialIcon$centerFocusWeak_instance;
  function MaterialIcon$centerFocusWeak_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$centerFocusWeak_instance;
  }
  var MaterialIcon$collections_instance;
  function MaterialIcon$collections_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$collections_instance;
  }
  var MaterialIcon$collectionsBookmark_instance;
  function MaterialIcon$collectionsBookmark_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$collectionsBookmark_instance;
  }
  var MaterialIcon$colorize_instance;
  function MaterialIcon$colorize_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$colorize_instance;
  }
  var MaterialIcon$colorLens_instance;
  function MaterialIcon$colorLens_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$colorLens_instance;
  }
  var MaterialIcon$compare_instance;
  function MaterialIcon$compare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$compare_instance;
  }
  var MaterialIcon$controlPoint_instance;
  function MaterialIcon$controlPoint_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$controlPoint_instance;
  }
  var MaterialIcon$controlPointDuplicate_instance;
  function MaterialIcon$controlPointDuplicate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$controlPointDuplicate_instance;
  }
  var MaterialIcon$crop169_instance;
  function MaterialIcon$crop169_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$crop169_instance;
  }
  var MaterialIcon$crop_instance;
  function MaterialIcon$crop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$crop_instance;
  }
  var MaterialIcon$crop32_instance;
  function MaterialIcon$crop32_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$crop32_instance;
  }
  var MaterialIcon$crop54_instance;
  function MaterialIcon$crop54_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$crop54_instance;
  }
  var MaterialIcon$crop75_instance;
  function MaterialIcon$crop75_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$crop75_instance;
  }
  var MaterialIcon$cropDin_instance;
  function MaterialIcon$cropDin_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropDin_instance;
  }
  var MaterialIcon$cropFree_instance;
  function MaterialIcon$cropFree_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropFree_instance;
  }
  var MaterialIcon$cropLandscape_instance;
  function MaterialIcon$cropLandscape_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropLandscape_instance;
  }
  var MaterialIcon$cropOriginal_instance;
  function MaterialIcon$cropOriginal_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropOriginal_instance;
  }
  var MaterialIcon$cropPortrait_instance;
  function MaterialIcon$cropPortrait_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropPortrait_instance;
  }
  var MaterialIcon$cropRotate_instance;
  function MaterialIcon$cropRotate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropRotate_instance;
  }
  var MaterialIcon$cropSquare_instance;
  function MaterialIcon$cropSquare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cropSquare_instance;
  }
  var MaterialIcon$dehaze_instance;
  function MaterialIcon$dehaze_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$dehaze_instance;
  }
  var MaterialIcon$details_instance;
  function MaterialIcon$details_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$details_instance;
  }
  var MaterialIcon$edit_instance;
  function MaterialIcon$edit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$edit_instance;
  }
  var MaterialIcon$exposure_instance;
  function MaterialIcon$exposure_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposure_instance;
  }
  var MaterialIcon$exposureNeg1_instance;
  function MaterialIcon$exposureNeg1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposureNeg1_instance;
  }
  var MaterialIcon$exposureNeg2_instance;
  function MaterialIcon$exposureNeg2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposureNeg2_instance;
  }
  var MaterialIcon$exposurePlus1_instance;
  function MaterialIcon$exposurePlus1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposurePlus1_instance;
  }
  var MaterialIcon$exposurePlus2_instance;
  function MaterialIcon$exposurePlus2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposurePlus2_instance;
  }
  var MaterialIcon$exposureZero_instance;
  function MaterialIcon$exposureZero_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$exposureZero_instance;
  }
  var MaterialIcon$filter1_instance;
  function MaterialIcon$filter1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter1_instance;
  }
  var MaterialIcon$filter_instance;
  function MaterialIcon$filter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter_instance;
  }
  var MaterialIcon$filter2_instance;
  function MaterialIcon$filter2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter2_instance;
  }
  var MaterialIcon$filter3_instance;
  function MaterialIcon$filter3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter3_instance;
  }
  var MaterialIcon$filter4_instance;
  function MaterialIcon$filter4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter4_instance;
  }
  var MaterialIcon$filter5_instance;
  function MaterialIcon$filter5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter5_instance;
  }
  var MaterialIcon$filter6_instance;
  function MaterialIcon$filter6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter6_instance;
  }
  var MaterialIcon$filter7_instance;
  function MaterialIcon$filter7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter7_instance;
  }
  var MaterialIcon$filter8_instance;
  function MaterialIcon$filter8_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter8_instance;
  }
  var MaterialIcon$filter9_instance;
  function MaterialIcon$filter9_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter9_instance;
  }
  var MaterialIcon$filter9Plus_instance;
  function MaterialIcon$filter9Plus_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filter9Plus_instance;
  }
  var MaterialIcon$filterBAndW_instance;
  function MaterialIcon$filterBAndW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterBAndW_instance;
  }
  var MaterialIcon$filterCenterFocus_instance;
  function MaterialIcon$filterCenterFocus_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterCenterFocus_instance;
  }
  var MaterialIcon$filterDrama_instance;
  function MaterialIcon$filterDrama_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterDrama_instance;
  }
  var MaterialIcon$filterFrames_instance;
  function MaterialIcon$filterFrames_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterFrames_instance;
  }
  var MaterialIcon$filterHdr_instance;
  function MaterialIcon$filterHdr_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterHdr_instance;
  }
  var MaterialIcon$filterNone_instance;
  function MaterialIcon$filterNone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterNone_instance;
  }
  var MaterialIcon$filterTiltShift_instance;
  function MaterialIcon$filterTiltShift_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterTiltShift_instance;
  }
  var MaterialIcon$filterVintage_instance;
  function MaterialIcon$filterVintage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$filterVintage_instance;
  }
  var MaterialIcon$flare_instance;
  function MaterialIcon$flare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flare_instance;
  }
  var MaterialIcon$flashAuto_instance;
  function MaterialIcon$flashAuto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flashAuto_instance;
  }
  var MaterialIcon$flashOff_instance;
  function MaterialIcon$flashOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flashOff_instance;
  }
  var MaterialIcon$flashOn_instance;
  function MaterialIcon$flashOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flashOn_instance;
  }
  var MaterialIcon$flip_instance;
  function MaterialIcon$flip_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flip_instance;
  }
  var MaterialIcon$gradient_instance;
  function MaterialIcon$gradient_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gradient_instance;
  }
  var MaterialIcon$grain_instance;
  function MaterialIcon$grain_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$grain_instance;
  }
  var MaterialIcon$gridOff_instance;
  function MaterialIcon$gridOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gridOff_instance;
  }
  var MaterialIcon$gridOn_instance;
  function MaterialIcon$gridOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$gridOn_instance;
  }
  var MaterialIcon$hdrOff_instance;
  function MaterialIcon$hdrOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hdrOff_instance;
  }
  var MaterialIcon$hdrOn_instance;
  function MaterialIcon$hdrOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hdrOn_instance;
  }
  var MaterialIcon$hdrStrong_instance;
  function MaterialIcon$hdrStrong_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hdrStrong_instance;
  }
  var MaterialIcon$hdrWeak_instance;
  function MaterialIcon$hdrWeak_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hdrWeak_instance;
  }
  var MaterialIcon$healing_instance;
  function MaterialIcon$healing_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$healing_instance;
  }
  var MaterialIcon$image_instance;
  function MaterialIcon$image_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$image_instance;
  }
  var MaterialIcon$imageAspectRatio_instance;
  function MaterialIcon$imageAspectRatio_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$imageAspectRatio_instance;
  }
  var MaterialIcon$iso_instance;
  function MaterialIcon$iso_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$iso_instance;
  }
  var MaterialIcon$landscape_instance;
  function MaterialIcon$landscape_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$landscape_instance;
  }
  var MaterialIcon$leakAdd_instance;
  function MaterialIcon$leakAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$leakAdd_instance;
  }
  var MaterialIcon$leakRemove_instance;
  function MaterialIcon$leakRemove_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$leakRemove_instance;
  }
  var MaterialIcon$lens_instance;
  function MaterialIcon$lens_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lens_instance;
  }
  var MaterialIcon$linkedCamera_instance;
  function MaterialIcon$linkedCamera_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$linkedCamera_instance;
  }
  var MaterialIcon$looks_instance;
  function MaterialIcon$looks_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looks_instance;
  }
  var MaterialIcon$looks3_instance;
  function MaterialIcon$looks3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looks3_instance;
  }
  var MaterialIcon$looks4_instance;
  function MaterialIcon$looks4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looks4_instance;
  }
  var MaterialIcon$looks5_instance;
  function MaterialIcon$looks5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looks5_instance;
  }
  var MaterialIcon$looks6_instance;
  function MaterialIcon$looks6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looks6_instance;
  }
  var MaterialIcon$looksOne_instance;
  function MaterialIcon$looksOne_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looksOne_instance;
  }
  var MaterialIcon$looksTwo_instance;
  function MaterialIcon$looksTwo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$looksTwo_instance;
  }
  var MaterialIcon$loupe_instance;
  function MaterialIcon$loupe_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$loupe_instance;
  }
  var MaterialIcon$monochromePhotos_instance;
  function MaterialIcon$monochromePhotos_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$monochromePhotos_instance;
  }
  var MaterialIcon$movieCreation_instance;
  function MaterialIcon$movieCreation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$movieCreation_instance;
  }
  var MaterialIcon$movieFilter_instance;
  function MaterialIcon$movieFilter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$movieFilter_instance;
  }
  var MaterialIcon$musicNote_instance;
  function MaterialIcon$musicNote_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$musicNote_instance;
  }
  var MaterialIcon$nature_instance;
  function MaterialIcon$nature_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$nature_instance;
  }
  var MaterialIcon$naturePeople_instance;
  function MaterialIcon$naturePeople_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$naturePeople_instance;
  }
  var MaterialIcon$navigateBefore_instance;
  function MaterialIcon$navigateBefore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$navigateBefore_instance;
  }
  var MaterialIcon$navigateNext_instance;
  function MaterialIcon$navigateNext_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$navigateNext_instance;
  }
  var MaterialIcon$palette_instance;
  function MaterialIcon$palette_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$palette_instance;
  }
  var MaterialIcon$panorama_instance;
  function MaterialIcon$panorama_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panorama_instance;
  }
  var MaterialIcon$panoramaFishEye_instance;
  function MaterialIcon$panoramaFishEye_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panoramaFishEye_instance;
  }
  var MaterialIcon$panoramaHorizontal_instance;
  function MaterialIcon$panoramaHorizontal_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panoramaHorizontal_instance;
  }
  var MaterialIcon$panoramaVertical_instance;
  function MaterialIcon$panoramaVertical_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panoramaVertical_instance;
  }
  var MaterialIcon$panoramaWideAngle_instance;
  function MaterialIcon$panoramaWideAngle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$panoramaWideAngle_instance;
  }
  var MaterialIcon$photo_instance;
  function MaterialIcon$photo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photo_instance;
  }
  var MaterialIcon$photoAlbum_instance;
  function MaterialIcon$photoAlbum_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoAlbum_instance;
  }
  var MaterialIcon$photoCamera_instance;
  function MaterialIcon$photoCamera_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoCamera_instance;
  }
  var MaterialIcon$photoFilter_instance;
  function MaterialIcon$photoFilter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoFilter_instance;
  }
  var MaterialIcon$photoLibrary_instance;
  function MaterialIcon$photoLibrary_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoLibrary_instance;
  }
  var MaterialIcon$photoSizeSelectActual_instance;
  function MaterialIcon$photoSizeSelectActual_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoSizeSelectActual_instance;
  }
  var MaterialIcon$photoSizeSelectLarge_instance;
  function MaterialIcon$photoSizeSelectLarge_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoSizeSelectLarge_instance;
  }
  var MaterialIcon$photoSizeSelectSmall_instance;
  function MaterialIcon$photoSizeSelectSmall_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$photoSizeSelectSmall_instance;
  }
  var MaterialIcon$pictureAsPdf_instance;
  function MaterialIcon$pictureAsPdf_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pictureAsPdf_instance;
  }
  var MaterialIcon$portrait_instance;
  function MaterialIcon$portrait_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$portrait_instance;
  }
  var MaterialIcon$removeRedEye_instance;
  function MaterialIcon$removeRedEye_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$removeRedEye_instance;
  }
  var MaterialIcon$rotate90DegreesCcw_instance;
  function MaterialIcon$rotate90DegreesCcw_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rotate90DegreesCcw_instance;
  }
  var MaterialIcon$rotateLeft_instance;
  function MaterialIcon$rotateLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rotateLeft_instance;
  }
  var MaterialIcon$rotateRight_instance;
  function MaterialIcon$rotateRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rotateRight_instance;
  }
  var MaterialIcon$slideshow_instance;
  function MaterialIcon$slideshow_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$slideshow_instance;
  }
  var MaterialIcon$straighten_instance;
  function MaterialIcon$straighten_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$straighten_instance;
  }
  var MaterialIcon$style_instance;
  function MaterialIcon$style_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$style_instance;
  }
  var MaterialIcon$switchCamera_instance;
  function MaterialIcon$switchCamera_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$switchCamera_instance;
  }
  var MaterialIcon$switchVideo_instance;
  function MaterialIcon$switchVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$switchVideo_instance;
  }
  var MaterialIcon$tagFaces_instance;
  function MaterialIcon$tagFaces_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tagFaces_instance;
  }
  var MaterialIcon$texture_instance;
  function MaterialIcon$texture_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$texture_instance;
  }
  var MaterialIcon$timelapse_instance;
  function MaterialIcon$timelapse_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timelapse_instance;
  }
  var MaterialIcon$timer10_instance;
  function MaterialIcon$timer10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timer10_instance;
  }
  var MaterialIcon$timer_instance;
  function MaterialIcon$timer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timer_instance;
  }
  var MaterialIcon$timer3_instance;
  function MaterialIcon$timer3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timer3_instance;
  }
  var MaterialIcon$timerOff_instance;
  function MaterialIcon$timerOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timerOff_instance;
  }
  var MaterialIcon$tonality_instance;
  function MaterialIcon$tonality_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tonality_instance;
  }
  var MaterialIcon$transform_instance;
  function MaterialIcon$transform_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$transform_instance;
  }
  var MaterialIcon$tune_instance;
  function MaterialIcon$tune_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tune_instance;
  }
  var MaterialIcon$viewComfy_instance;
  function MaterialIcon$viewComfy_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewComfy_instance;
  }
  var MaterialIcon$viewCompact_instance;
  function MaterialIcon$viewCompact_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$viewCompact_instance;
  }
  var MaterialIcon$vignette_instance;
  function MaterialIcon$vignette_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$vignette_instance;
  }
  var MaterialIcon$wbAuto_instance;
  function MaterialIcon$wbAuto_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wbAuto_instance;
  }
  var MaterialIcon$wbCloudy_instance;
  function MaterialIcon$wbCloudy_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wbCloudy_instance;
  }
  var MaterialIcon$wbIncandescent_instance;
  function MaterialIcon$wbIncandescent_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wbIncandescent_instance;
  }
  var MaterialIcon$wbIridescent_instance;
  function MaterialIcon$wbIridescent_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wbIridescent_instance;
  }
  var MaterialIcon$wbSunny_instance;
  function MaterialIcon$wbSunny_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wbSunny_instance;
  }
  var MaterialIcon$addLocation_instance;
  function MaterialIcon$addLocation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$addLocation_instance;
  }
  var MaterialIcon$beenhere_instance;
  function MaterialIcon$beenhere_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$beenhere_instance;
  }
  var MaterialIcon$directions_instance;
  function MaterialIcon$directions_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directions_instance;
  }
  var MaterialIcon$directionsBike_instance;
  function MaterialIcon$directionsBike_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsBike_instance;
  }
  var MaterialIcon$directionsBoat_instance;
  function MaterialIcon$directionsBoat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsBoat_instance;
  }
  var MaterialIcon$directionsBus_instance;
  function MaterialIcon$directionsBus_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsBus_instance;
  }
  var MaterialIcon$directionsCar_instance;
  function MaterialIcon$directionsCar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsCar_instance;
  }
  var MaterialIcon$directionsRailway_instance;
  function MaterialIcon$directionsRailway_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsRailway_instance;
  }
  var MaterialIcon$directionsRun_instance;
  function MaterialIcon$directionsRun_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsRun_instance;
  }
  var MaterialIcon$directionsSubway_instance;
  function MaterialIcon$directionsSubway_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsSubway_instance;
  }
  var MaterialIcon$directionsTransit_instance;
  function MaterialIcon$directionsTransit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsTransit_instance;
  }
  var MaterialIcon$directionsWalk_instance;
  function MaterialIcon$directionsWalk_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$directionsWalk_instance;
  }
  var MaterialIcon$editLocation_instance;
  function MaterialIcon$editLocation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$editLocation_instance;
  }
  var MaterialIcon$evStation_instance;
  function MaterialIcon$evStation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$evStation_instance;
  }
  var MaterialIcon$flight_instance;
  function MaterialIcon$flight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$flight_instance;
  }
  var MaterialIcon$hotel_instance;
  function MaterialIcon$hotel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hotel_instance;
  }
  var MaterialIcon$layers_instance;
  function MaterialIcon$layers_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$layers_instance;
  }
  var MaterialIcon$layersClear_instance;
  function MaterialIcon$layersClear_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$layersClear_instance;
  }
  var MaterialIcon$localActivity_instance;
  function MaterialIcon$localActivity_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localActivity_instance;
  }
  var MaterialIcon$localAirport_instance;
  function MaterialIcon$localAirport_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localAirport_instance;
  }
  var MaterialIcon$localAtm_instance;
  function MaterialIcon$localAtm_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localAtm_instance;
  }
  var MaterialIcon$localBar_instance;
  function MaterialIcon$localBar_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localBar_instance;
  }
  var MaterialIcon$localCafe_instance;
  function MaterialIcon$localCafe_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localCafe_instance;
  }
  var MaterialIcon$localCarWash_instance;
  function MaterialIcon$localCarWash_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localCarWash_instance;
  }
  var MaterialIcon$localConvenienceStore_instance;
  function MaterialIcon$localConvenienceStore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localConvenienceStore_instance;
  }
  var MaterialIcon$localDining_instance;
  function MaterialIcon$localDining_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localDining_instance;
  }
  var MaterialIcon$localDrink_instance;
  function MaterialIcon$localDrink_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localDrink_instance;
  }
  var MaterialIcon$localFlorist_instance;
  function MaterialIcon$localFlorist_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localFlorist_instance;
  }
  var MaterialIcon$localGasStation_instance;
  function MaterialIcon$localGasStation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localGasStation_instance;
  }
  var MaterialIcon$localGroceryStore_instance;
  function MaterialIcon$localGroceryStore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localGroceryStore_instance;
  }
  var MaterialIcon$localHospital_instance;
  function MaterialIcon$localHospital_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localHospital_instance;
  }
  var MaterialIcon$localHotel_instance;
  function MaterialIcon$localHotel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localHotel_instance;
  }
  var MaterialIcon$localLaundryService_instance;
  function MaterialIcon$localLaundryService_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localLaundryService_instance;
  }
  var MaterialIcon$localLibrary_instance;
  function MaterialIcon$localLibrary_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localLibrary_instance;
  }
  var MaterialIcon$localMall_instance;
  function MaterialIcon$localMall_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localMall_instance;
  }
  var MaterialIcon$localMovies_instance;
  function MaterialIcon$localMovies_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localMovies_instance;
  }
  var MaterialIcon$localOffer_instance;
  function MaterialIcon$localOffer_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localOffer_instance;
  }
  var MaterialIcon$localParking_instance;
  function MaterialIcon$localParking_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localParking_instance;
  }
  var MaterialIcon$localPharmacy_instance;
  function MaterialIcon$localPharmacy_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPharmacy_instance;
  }
  var MaterialIcon$localPhone_instance;
  function MaterialIcon$localPhone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPhone_instance;
  }
  var MaterialIcon$localPizza_instance;
  function MaterialIcon$localPizza_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPizza_instance;
  }
  var MaterialIcon$localPlay_instance;
  function MaterialIcon$localPlay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPlay_instance;
  }
  var MaterialIcon$localPostOffice_instance;
  function MaterialIcon$localPostOffice_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPostOffice_instance;
  }
  var MaterialIcon$localPrintshop_instance;
  function MaterialIcon$localPrintshop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localPrintshop_instance;
  }
  var MaterialIcon$localSee_instance;
  function MaterialIcon$localSee_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localSee_instance;
  }
  var MaterialIcon$localShipping_instance;
  function MaterialIcon$localShipping_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localShipping_instance;
  }
  var MaterialIcon$localTaxi_instance;
  function MaterialIcon$localTaxi_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$localTaxi_instance;
  }
  var MaterialIcon$map_instance;
  function MaterialIcon$map_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$map_instance;
  }
  var MaterialIcon$myLocation_instance;
  function MaterialIcon$myLocation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$myLocation_instance;
  }
  var MaterialIcon$navigation_instance;
  function MaterialIcon$navigation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$navigation_instance;
  }
  var MaterialIcon$nearMe_instance;
  function MaterialIcon$nearMe_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$nearMe_instance;
  }
  var MaterialIcon$personPin_instance;
  function MaterialIcon$personPin_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$personPin_instance;
  }
  var MaterialIcon$personPinCircle_instance;
  function MaterialIcon$personPinCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$personPinCircle_instance;
  }
  var MaterialIcon$pinDrop_instance;
  function MaterialIcon$pinDrop_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pinDrop_instance;
  }
  var MaterialIcon$place_instance;
  function MaterialIcon$place_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$place_instance;
  }
  var MaterialIcon$rateReview_instance;
  function MaterialIcon$rateReview_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rateReview_instance;
  }
  var MaterialIcon$restaurant_instance;
  function MaterialIcon$restaurant_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$restaurant_instance;
  }
  var MaterialIcon$restaurantMenu_instance;
  function MaterialIcon$restaurantMenu_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$restaurantMenu_instance;
  }
  var MaterialIcon$satellite_instance;
  function MaterialIcon$satellite_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$satellite_instance;
  }
  var MaterialIcon$storeMallDirectory_instance;
  function MaterialIcon$storeMallDirectory_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$storeMallDirectory_instance;
  }
  var MaterialIcon$streetview_instance;
  function MaterialIcon$streetview_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$streetview_instance;
  }
  var MaterialIcon$subway_instance;
  function MaterialIcon$subway_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subway_instance;
  }
  var MaterialIcon$terrain_instance;
  function MaterialIcon$terrain_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$terrain_instance;
  }
  var MaterialIcon$traffic_instance;
  function MaterialIcon$traffic_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$traffic_instance;
  }
  var MaterialIcon$train_instance;
  function MaterialIcon$train_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$train_instance;
  }
  var MaterialIcon$tram_instance;
  function MaterialIcon$tram_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tram_instance;
  }
  var MaterialIcon$transferWithinAStation_instance;
  function MaterialIcon$transferWithinAStation_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$transferWithinAStation_instance;
  }
  var MaterialIcon$zoomOutMap_instance;
  function MaterialIcon$zoomOutMap_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$zoomOutMap_instance;
  }
  var MaterialIcon$apps_instance;
  function MaterialIcon$apps_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$apps_instance;
  }
  var MaterialIcon$arrowBack_instance;
  function MaterialIcon$arrowBack_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowBack_instance;
  }
  var MaterialIcon$arrowDownward_instance;
  function MaterialIcon$arrowDownward_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowDownward_instance;
  }
  var MaterialIcon$arrowDropDown_instance;
  function MaterialIcon$arrowDropDown_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowDropDown_instance;
  }
  var MaterialIcon$arrowDropDownCircle_instance;
  function MaterialIcon$arrowDropDownCircle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowDropDownCircle_instance;
  }
  var MaterialIcon$arrowDropUp_instance;
  function MaterialIcon$arrowDropUp_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowDropUp_instance;
  }
  var MaterialIcon$arrowForward_instance;
  function MaterialIcon$arrowForward_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowForward_instance;
  }
  var MaterialIcon$arrowUpward_instance;
  function MaterialIcon$arrowUpward_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$arrowUpward_instance;
  }
  var MaterialIcon$cancel_instance;
  function MaterialIcon$cancel_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cancel_instance;
  }
  var MaterialIcon$check_instance;
  function MaterialIcon$check_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$check_instance;
  }
  var MaterialIcon$chevronLeft_instance;
  function MaterialIcon$chevronLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chevronLeft_instance;
  }
  var MaterialIcon$chevronRight_instance;
  function MaterialIcon$chevronRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$chevronRight_instance;
  }
  var MaterialIcon$close_instance;
  function MaterialIcon$close_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$close_instance;
  }
  var MaterialIcon$expandLess_instance;
  function MaterialIcon$expandLess_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$expandLess_instance;
  }
  var MaterialIcon$expandMore_instance;
  function MaterialIcon$expandMore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$expandMore_instance;
  }
  var MaterialIcon$firstPage_instance;
  function MaterialIcon$firstPage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$firstPage_instance;
  }
  var MaterialIcon$fullscreen_instance;
  function MaterialIcon$fullscreen_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fullscreen_instance;
  }
  var MaterialIcon$fullscreenExit_instance;
  function MaterialIcon$fullscreenExit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fullscreenExit_instance;
  }
  var MaterialIcon$lastPage_instance;
  function MaterialIcon$lastPage_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$lastPage_instance;
  }
  var MaterialIcon$menu_instance;
  function MaterialIcon$menu_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$menu_instance;
  }
  var MaterialIcon$moreHoriz_instance;
  function MaterialIcon$moreHoriz_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$moreHoriz_instance;
  }
  var MaterialIcon$moreVert_instance;
  function MaterialIcon$moreVert_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$moreVert_instance;
  }
  var MaterialIcon$refresh_instance;
  function MaterialIcon$refresh_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$refresh_instance;
  }
  var MaterialIcon$subdirectoryArrowLeft_instance;
  function MaterialIcon$subdirectoryArrowLeft_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subdirectoryArrowLeft_instance;
  }
  var MaterialIcon$subdirectoryArrowRight_instance;
  function MaterialIcon$subdirectoryArrowRight_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$subdirectoryArrowRight_instance;
  }
  var MaterialIcon$unfoldLess_instance;
  function MaterialIcon$unfoldLess_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$unfoldLess_instance;
  }
  var MaterialIcon$unfoldMore_instance;
  function MaterialIcon$unfoldMore_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$unfoldMore_instance;
  }
  var MaterialIcon$adb_instance;
  function MaterialIcon$adb_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$adb_instance;
  }
  var MaterialIcon$airlineSeatFlat_instance;
  function MaterialIcon$airlineSeatFlat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatFlat_instance;
  }
  var MaterialIcon$airlineSeatFlatAngled_instance;
  function MaterialIcon$airlineSeatFlatAngled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatFlatAngled_instance;
  }
  var MaterialIcon$airlineSeatIndividualSuite_instance;
  function MaterialIcon$airlineSeatIndividualSuite_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatIndividualSuite_instance;
  }
  var MaterialIcon$airlineSeatLegroomExtra_instance;
  function MaterialIcon$airlineSeatLegroomExtra_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatLegroomExtra_instance;
  }
  var MaterialIcon$airlineSeatLegroomNormal_instance;
  function MaterialIcon$airlineSeatLegroomNormal_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatLegroomNormal_instance;
  }
  var MaterialIcon$airlineSeatLegroomReduced_instance;
  function MaterialIcon$airlineSeatLegroomReduced_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatLegroomReduced_instance;
  }
  var MaterialIcon$airlineSeatReclineExtra_instance;
  function MaterialIcon$airlineSeatReclineExtra_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatReclineExtra_instance;
  }
  var MaterialIcon$airlineSeatReclineNormal_instance;
  function MaterialIcon$airlineSeatReclineNormal_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airlineSeatReclineNormal_instance;
  }
  var MaterialIcon$bluetoothAudio_instance;
  function MaterialIcon$bluetoothAudio_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$bluetoothAudio_instance;
  }
  var MaterialIcon$confirmationNumber_instance;
  function MaterialIcon$confirmationNumber_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$confirmationNumber_instance;
  }
  var MaterialIcon$discFull_instance;
  function MaterialIcon$discFull_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$discFull_instance;
  }
  var MaterialIcon$doNotDisturb_instance;
  function MaterialIcon$doNotDisturb_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$doNotDisturb_instance;
  }
  var MaterialIcon$doNotDisturbAlt_instance;
  function MaterialIcon$doNotDisturbAlt_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$doNotDisturbAlt_instance;
  }
  var MaterialIcon$doNotDisturbOff_instance;
  function MaterialIcon$doNotDisturbOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$doNotDisturbOff_instance;
  }
  var MaterialIcon$doNotDisturbOn_instance;
  function MaterialIcon$doNotDisturbOn_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$doNotDisturbOn_instance;
  }
  var MaterialIcon$driveEta_instance;
  function MaterialIcon$driveEta_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$driveEta_instance;
  }
  var MaterialIcon$enhancedEncryption_instance;
  function MaterialIcon$enhancedEncryption_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$enhancedEncryption_instance;
  }
  var MaterialIcon$eventAvailable_instance;
  function MaterialIcon$eventAvailable_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$eventAvailable_instance;
  }
  var MaterialIcon$eventBusy_instance;
  function MaterialIcon$eventBusy_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$eventBusy_instance;
  }
  var MaterialIcon$eventNote_instance;
  function MaterialIcon$eventNote_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$eventNote_instance;
  }
  var MaterialIcon$folderSpecial_instance;
  function MaterialIcon$folderSpecial_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$folderSpecial_instance;
  }
  var MaterialIcon$liveTv_instance;
  function MaterialIcon$liveTv_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$liveTv_instance;
  }
  var MaterialIcon$mms_instance;
  function MaterialIcon$mms_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mms_instance;
  }
  var MaterialIcon$more_instance;
  function MaterialIcon$more_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$more_instance;
  }
  var MaterialIcon$networkCheck_instance;
  function MaterialIcon$networkCheck_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$networkCheck_instance;
  }
  var MaterialIcon$networkLocked_instance;
  function MaterialIcon$networkLocked_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$networkLocked_instance;
  }
  var MaterialIcon$noEncryption_instance;
  function MaterialIcon$noEncryption_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$noEncryption_instance;
  }
  var MaterialIcon$ondemandVideo_instance;
  function MaterialIcon$ondemandVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ondemandVideo_instance;
  }
  var MaterialIcon$personalVideo_instance;
  function MaterialIcon$personalVideo_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$personalVideo_instance;
  }
  var MaterialIcon$phoneBluetoothSpeaker_instance;
  function MaterialIcon$phoneBluetoothSpeaker_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneBluetoothSpeaker_instance;
  }
  var MaterialIcon$phoneForwarded_instance;
  function MaterialIcon$phoneForwarded_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneForwarded_instance;
  }
  var MaterialIcon$phoneInTalk_instance;
  function MaterialIcon$phoneInTalk_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneInTalk_instance;
  }
  var MaterialIcon$phoneLocked_instance;
  function MaterialIcon$phoneLocked_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneLocked_instance;
  }
  var MaterialIcon$phoneMissed_instance;
  function MaterialIcon$phoneMissed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phoneMissed_instance;
  }
  var MaterialIcon$phonePaused_instance;
  function MaterialIcon$phonePaused_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$phonePaused_instance;
  }
  var MaterialIcon$power_instance;
  function MaterialIcon$power_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$power_instance;
  }
  var MaterialIcon$priorityHigh_instance;
  function MaterialIcon$priorityHigh_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$priorityHigh_instance;
  }
  var MaterialIcon$rvHookup_instance;
  function MaterialIcon$rvHookup_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rvHookup_instance;
  }
  var MaterialIcon$sdCard_instance;
  function MaterialIcon$sdCard_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sdCard_instance;
  }
  var MaterialIcon$simCardAlert_instance;
  function MaterialIcon$simCardAlert_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$simCardAlert_instance;
  }
  var MaterialIcon$sms_instance;
  function MaterialIcon$sms_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sms_instance;
  }
  var MaterialIcon$smsFailed_instance;
  function MaterialIcon$smsFailed_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$smsFailed_instance;
  }
  var MaterialIcon$sync_instance;
  function MaterialIcon$sync_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sync_instance;
  }
  var MaterialIcon$syncDisabled_instance;
  function MaterialIcon$syncDisabled_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$syncDisabled_instance;
  }
  var MaterialIcon$syncProblem_instance;
  function MaterialIcon$syncProblem_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$syncProblem_instance;
  }
  var MaterialIcon$systemUpdate_instance;
  function MaterialIcon$systemUpdate_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$systemUpdate_instance;
  }
  var MaterialIcon$tapAndPlay_instance;
  function MaterialIcon$tapAndPlay_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$tapAndPlay_instance;
  }
  var MaterialIcon$timeToLeave_instance;
  function MaterialIcon$timeToLeave_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$timeToLeave_instance;
  }
  var MaterialIcon$vibration_instance;
  function MaterialIcon$vibration_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$vibration_instance;
  }
  var MaterialIcon$voiceChat_instance;
  function MaterialIcon$voiceChat_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$voiceChat_instance;
  }
  var MaterialIcon$vpnLock_instance;
  function MaterialIcon$vpnLock_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$vpnLock_instance;
  }
  var MaterialIcon$wc_instance;
  function MaterialIcon$wc_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wc_instance;
  }
  var MaterialIcon$wifi_instance;
  function MaterialIcon$wifi_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$wifi_instance;
  }
  var MaterialIcon$acUnit_instance;
  function MaterialIcon$acUnit_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$acUnit_instance;
  }
  var MaterialIcon$airportShuttle_instance;
  function MaterialIcon$airportShuttle_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$airportShuttle_instance;
  }
  var MaterialIcon$allInclusive_instance;
  function MaterialIcon$allInclusive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$allInclusive_instance;
  }
  var MaterialIcon$beachAccess_instance;
  function MaterialIcon$beachAccess_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$beachAccess_instance;
  }
  var MaterialIcon$businessCenter_instance;
  function MaterialIcon$businessCenter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$businessCenter_instance;
  }
  var MaterialIcon$casino_instance;
  function MaterialIcon$casino_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$casino_instance;
  }
  var MaterialIcon$childCare_instance;
  function MaterialIcon$childCare_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$childCare_instance;
  }
  var MaterialIcon$childFriendly_instance;
  function MaterialIcon$childFriendly_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$childFriendly_instance;
  }
  var MaterialIcon$fitnessCenter_instance;
  function MaterialIcon$fitnessCenter_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$fitnessCenter_instance;
  }
  var MaterialIcon$freeBreakfast_instance;
  function MaterialIcon$freeBreakfast_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$freeBreakfast_instance;
  }
  var MaterialIcon$golfCourse_instance;
  function MaterialIcon$golfCourse_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$golfCourse_instance;
  }
  var MaterialIcon$hotTub_instance;
  function MaterialIcon$hotTub_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$hotTub_instance;
  }
  var MaterialIcon$kitchen_instance;
  function MaterialIcon$kitchen_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$kitchen_instance;
  }
  var MaterialIcon$pool_instance;
  function MaterialIcon$pool_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pool_instance;
  }
  var MaterialIcon$roomService_instance;
  function MaterialIcon$roomService_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$roomService_instance;
  }
  var MaterialIcon$rvHookup2_instance;
  function MaterialIcon$rvHookup2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$rvHookup2_instance;
  }
  var MaterialIcon$smokeFree_instance;
  function MaterialIcon$smokeFree_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$smokeFree_instance;
  }
  var MaterialIcon$smokingRooms_instance;
  function MaterialIcon$smokingRooms_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$smokingRooms_instance;
  }
  var MaterialIcon$spa_instance;
  function MaterialIcon$spa_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$spa_instance;
  }
  var MaterialIcon$cake_instance;
  function MaterialIcon$cake_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$cake_instance;
  }
  var MaterialIcon$domain_instance;
  function MaterialIcon$domain_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$domain_instance;
  }
  var MaterialIcon$group_instance;
  function MaterialIcon$group_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$group_instance;
  }
  var MaterialIcon$groupAdd_instance;
  function MaterialIcon$groupAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$groupAdd_instance;
  }
  var MaterialIcon$locationCity_instance;
  function MaterialIcon$locationCity_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$locationCity_instance;
  }
  var MaterialIcon$mood_instance;
  function MaterialIcon$mood_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$mood_instance;
  }
  var MaterialIcon$moodBad_instance;
  function MaterialIcon$moodBad_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$moodBad_instance;
  }
  var MaterialIcon$notifications_instance;
  function MaterialIcon$notifications_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notifications_instance;
  }
  var MaterialIcon$notificationsActive_instance;
  function MaterialIcon$notificationsActive_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notificationsActive_instance;
  }
  var MaterialIcon$notificationsNone_instance;
  function MaterialIcon$notificationsNone_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notificationsNone_instance;
  }
  var MaterialIcon$notificationsOff_instance;
  function MaterialIcon$notificationsOff_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notificationsOff_instance;
  }
  var MaterialIcon$notificationsPaused_instance;
  function MaterialIcon$notificationsPaused_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$notificationsPaused_instance;
  }
  var MaterialIcon$pages_instance;
  function MaterialIcon$pages_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$pages_instance;
  }
  var MaterialIcon$partyMode_instance;
  function MaterialIcon$partyMode_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$partyMode_instance;
  }
  var MaterialIcon$people_instance;
  function MaterialIcon$people_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$people_instance;
  }
  var MaterialIcon$peopleOutline_instance;
  function MaterialIcon$peopleOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$peopleOutline_instance;
  }
  var MaterialIcon$person_instance;
  function MaterialIcon$person_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$person_instance;
  }
  var MaterialIcon$personAdd_instance;
  function MaterialIcon$personAdd_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$personAdd_instance;
  }
  var MaterialIcon$personOutline_instance;
  function MaterialIcon$personOutline_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$personOutline_instance;
  }
  var MaterialIcon$plusOne_instance;
  function MaterialIcon$plusOne_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$plusOne_instance;
  }
  var MaterialIcon$poll_instance;
  function MaterialIcon$poll_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$poll_instance;
  }
  var MaterialIcon$_public_instance;
  function MaterialIcon$_public_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$_public_instance;
  }
  var MaterialIcon$school_instance;
  function MaterialIcon$school_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$school_instance;
  }
  var MaterialIcon$sentimentDissatisfied_instance;
  function MaterialIcon$sentimentDissatisfied_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sentimentDissatisfied_instance;
  }
  var MaterialIcon$sentimentNeutral_instance;
  function MaterialIcon$sentimentNeutral_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sentimentNeutral_instance;
  }
  var MaterialIcon$sentimentSatisfied_instance;
  function MaterialIcon$sentimentSatisfied_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sentimentSatisfied_instance;
  }
  var MaterialIcon$sentimentVeryDissatisfied_instance;
  function MaterialIcon$sentimentVeryDissatisfied_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sentimentVeryDissatisfied_instance;
  }
  var MaterialIcon$sentimentVerySatisfied_instance;
  function MaterialIcon$sentimentVerySatisfied_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$sentimentVerySatisfied_instance;
  }
  var MaterialIcon$share_instance;
  function MaterialIcon$share_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$share_instance;
  }
  var MaterialIcon$whatshot_instance;
  function MaterialIcon$whatshot_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$whatshot_instance;
  }
  var MaterialIcon$checkBox_instance;
  function MaterialIcon$checkBox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$checkBox_instance;
  }
  var MaterialIcon$checkBoxOutlineBlank_instance;
  function MaterialIcon$checkBoxOutlineBlank_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$checkBoxOutlineBlank_instance;
  }
  var MaterialIcon$indeterminateCheckBox_instance;
  function MaterialIcon$indeterminateCheckBox_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$indeterminateCheckBox_instance;
  }
  var MaterialIcon$radioButtonChecked_instance;
  function MaterialIcon$radioButtonChecked_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$radioButtonChecked_instance;
  }
  var MaterialIcon$radioButtonUnchecked_instance;
  function MaterialIcon$radioButtonUnchecked_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$radioButtonUnchecked_instance;
  }
  var MaterialIcon$star_instance;
  function MaterialIcon$star_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$star_instance;
  }
  var MaterialIcon$starBorder_instance;
  function MaterialIcon$starBorder_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$starBorder_instance;
  }
  var MaterialIcon$starHalf_instance;
  function MaterialIcon$starHalf_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$starHalf_instance;
  }
  MaterialIcon.$metadata$ = {kind: Kind_CLASS, simpleName: 'MaterialIcon', interfaces: [Enum]};
  function MaterialIcon$values() {
    return [MaterialIcon$_3dRotation_getInstance(), MaterialIcon$accessibility_getInstance(), MaterialIcon$accessible_getInstance(), MaterialIcon$accountBalance_getInstance(), MaterialIcon$accountBalanceWallet_getInstance(), MaterialIcon$accountBox_getInstance(), MaterialIcon$accountCircle_getInstance(), MaterialIcon$addShoppingCart_getInstance(), MaterialIcon$alarm_getInstance(), MaterialIcon$alarmAdd_getInstance(), MaterialIcon$alarmOff_getInstance(), MaterialIcon$alarmOn_getInstance(), MaterialIcon$allOut_getInstance(), MaterialIcon$android_getInstance(), MaterialIcon$announcement_getInstance(), MaterialIcon$aspectRatio_getInstance(), MaterialIcon$assessment_getInstance(), MaterialIcon$assignment_getInstance(), MaterialIcon$assignmentInd_getInstance(), MaterialIcon$assignmentLate_getInstance(), MaterialIcon$assignmentReturned_getInstance(), MaterialIcon$assignmentReturn_getInstance(), MaterialIcon$assignmentTurnedIn_getInstance(), MaterialIcon$autorenew_getInstance(), MaterialIcon$backup_getInstance(), MaterialIcon$bookmark_getInstance(), MaterialIcon$bookmarkBorder_getInstance(), MaterialIcon$book_getInstance(), MaterialIcon$bugReport_getInstance(), MaterialIcon$build_getInstance(), MaterialIcon$cached_getInstance(), MaterialIcon$cameraEnhance_getInstance(), MaterialIcon$cardGiftcard_getInstance(), MaterialIcon$cardMembership_getInstance(), MaterialIcon$cardTravel_getInstance(), MaterialIcon$changeHistory_getInstance(), MaterialIcon$checkCircle_getInstance(), MaterialIcon$chromeReaderMode_getInstance(), MaterialIcon$_class_getInstance(), MaterialIcon$code_getInstance(), MaterialIcon$compareArrows_getInstance(), MaterialIcon$copyright_getInstance(), MaterialIcon$creditCard_getInstance(), MaterialIcon$dashboard_getInstance(), MaterialIcon$dateRange_getInstance(), MaterialIcon$delete_getInstance(), MaterialIcon$deleteForever_getInstance(), MaterialIcon$description_getInstance(), MaterialIcon$dns_getInstance(), MaterialIcon$done_getInstance(), MaterialIcon$doneAll_getInstance(), MaterialIcon$donutLarge_getInstance(), MaterialIcon$donutSmall_getInstance(), MaterialIcon$eject_getInstance(), MaterialIcon$euroSymbol_getInstance(), MaterialIcon$event_getInstance(), MaterialIcon$eventSeat_getInstance(), MaterialIcon$exitToApp_getInstance(), MaterialIcon$explore_getInstance(), MaterialIcon$extension_getInstance(), MaterialIcon$face_getInstance(), MaterialIcon$favorite_getInstance(), MaterialIcon$favoriteBorder_getInstance(), MaterialIcon$feedback_getInstance(), MaterialIcon$findInPage_getInstance(), MaterialIcon$findReplace_getInstance(), MaterialIcon$fingerprint_getInstance(), MaterialIcon$flightLand_getInstance(), MaterialIcon$flightTakeoff_getInstance(), MaterialIcon$flipToBack_getInstance(), MaterialIcon$flipToFront_getInstance(), MaterialIcon$gavel_getInstance(), MaterialIcon$getApp_getInstance(), MaterialIcon$gif_getInstance(), MaterialIcon$grade_getInstance(), MaterialIcon$groupWork_getInstance(), MaterialIcon$gTranslate_getInstance(), MaterialIcon$help_getInstance(), MaterialIcon$helpOutline_getInstance(), MaterialIcon$highlightOff_getInstance(), MaterialIcon$history_getInstance(), MaterialIcon$home_getInstance(), MaterialIcon$hourglassEmpty_getInstance(), MaterialIcon$hourglassFull_getInstance(), MaterialIcon$https_getInstance(), MaterialIcon$http_getInstance(), MaterialIcon$importantDevices_getInstance(), MaterialIcon$info_getInstance(), MaterialIcon$infoOutline_getInstance(), MaterialIcon$input_getInstance(), MaterialIcon$invertColors_getInstance(), MaterialIcon$label_getInstance(), MaterialIcon$labelOutline_getInstance(), MaterialIcon$language_getInstance(), MaterialIcon$launch_getInstance(), MaterialIcon$lightbulbOutline_getInstance(), MaterialIcon$lineStyle_getInstance(), MaterialIcon$lineWeight_getInstance(), MaterialIcon$list_getInstance(), MaterialIcon$lock_getInstance(), MaterialIcon$lockOpen_getInstance(), MaterialIcon$lockOutline_getInstance(), MaterialIcon$loyalty_getInstance(), MaterialIcon$markunreadMailbox_getInstance(), MaterialIcon$motorcycle_getInstance(), MaterialIcon$noteAdd_getInstance(), MaterialIcon$offlinePin_getInstance(), MaterialIcon$opacity_getInstance(), MaterialIcon$openInBrowser_getInstance(), MaterialIcon$openInNew_getInstance(), MaterialIcon$openWith_getInstance(), MaterialIcon$pageview_getInstance(), MaterialIcon$panTool_getInstance(), MaterialIcon$payment_getInstance(), MaterialIcon$permCameraMic_getInstance(), MaterialIcon$permContactCalendar_getInstance(), MaterialIcon$permDataSetting_getInstance(), MaterialIcon$permDeviceInformation_getInstance(), MaterialIcon$permIdentity_getInstance(), MaterialIcon$permMedia_getInstance(), MaterialIcon$permPhoneMsg_getInstance(), MaterialIcon$permScanWifi_getInstance(), MaterialIcon$pets_getInstance(), MaterialIcon$pictureInPicture_getInstance(), MaterialIcon$pictureInPictureAlt_getInstance(), MaterialIcon$playForWork_getInstance(), MaterialIcon$polymer_getInstance(), MaterialIcon$powerSettingsNew_getInstance(), MaterialIcon$pregnantWoman_getInstance(), MaterialIcon$print_getInstance(), MaterialIcon$queryBuilder_getInstance(), MaterialIcon$questionAnswer_getInstance(), MaterialIcon$receipt_getInstance(), MaterialIcon$recordVoiceOver_getInstance(), MaterialIcon$redeem_getInstance(), MaterialIcon$removeShoppingCart_getInstance(), MaterialIcon$reorder_getInstance(), MaterialIcon$reportProblem_getInstance(), MaterialIcon$restore_getInstance(), MaterialIcon$restorePage_getInstance(), MaterialIcon$room_getInstance(), MaterialIcon$roundedCorner_getInstance(), MaterialIcon$rowing_getInstance(), MaterialIcon$schedule_getInstance(), MaterialIcon$search_getInstance(), MaterialIcon$settings_getInstance(), MaterialIcon$settingsApplications_getInstance(), MaterialIcon$settingsBackupRestore_getInstance(), MaterialIcon$settingsBluetooth_getInstance(), MaterialIcon$settingsBrightness_getInstance(), MaterialIcon$settingsCell_getInstance(), MaterialIcon$settingsEthernet_getInstance(), MaterialIcon$settingsInputAntenna_getInstance(), MaterialIcon$settingsInputComponent_getInstance(), MaterialIcon$settingsInputComposite_getInstance(), MaterialIcon$settingsInputHdmi_getInstance(), MaterialIcon$settingsInputSvideo_getInstance(), MaterialIcon$settingsOverscan_getInstance(), MaterialIcon$settingsPhone_getInstance(), MaterialIcon$settingsPower_getInstance(), MaterialIcon$settingsRemote_getInstance(), MaterialIcon$settingsVoice_getInstance(), MaterialIcon$shoppingBasket_getInstance(), MaterialIcon$shoppingCart_getInstance(), MaterialIcon$shop_getInstance(), MaterialIcon$shopTwo_getInstance(), MaterialIcon$speakerNotes_getInstance(), MaterialIcon$speakerNotesOff_getInstance(), MaterialIcon$spellcheck_getInstance(), MaterialIcon$stars_getInstance(), MaterialIcon$store_getInstance(), MaterialIcon$subject_getInstance(), MaterialIcon$supervisorAccount_getInstance(), MaterialIcon$swapHoriz_getInstance(), MaterialIcon$swapVerticalCircle_getInstance(), MaterialIcon$swapVert_getInstance(), MaterialIcon$systemUpdateAlt_getInstance(), MaterialIcon$tab_getInstance(), MaterialIcon$tabUnselected_getInstance(), MaterialIcon$theaters_getInstance(), MaterialIcon$thumbsUpDown_getInstance(), MaterialIcon$thumbDown_getInstance(), MaterialIcon$thumbUp_getInstance(), MaterialIcon$timeline_getInstance(), MaterialIcon$toc_getInstance(), MaterialIcon$today_getInstance(), MaterialIcon$toll_getInstance(), MaterialIcon$touchApp_getInstance(), MaterialIcon$trackChanges_getInstance(), MaterialIcon$translate_getInstance(), MaterialIcon$trendingDown_getInstance(), MaterialIcon$trendingFlat_getInstance(), MaterialIcon$trendingUp_getInstance(), MaterialIcon$turnedIn_getInstance(), MaterialIcon$turnedInNot_getInstance(), MaterialIcon$update_getInstance(), MaterialIcon$verifiedUser_getInstance(), MaterialIcon$viewAgenda_getInstance(), MaterialIcon$viewArray_getInstance(), MaterialIcon$viewCarousel_getInstance(), MaterialIcon$viewColumn_getInstance(), MaterialIcon$viewDay_getInstance(), MaterialIcon$viewHeadline_getInstance(), MaterialIcon$viewList_getInstance(), MaterialIcon$viewModule_getInstance(), MaterialIcon$viewQuilt_getInstance(), MaterialIcon$viewStream_getInstance(), MaterialIcon$viewWeek_getInstance(), MaterialIcon$visibility_getInstance(), MaterialIcon$visibilityOff_getInstance(), MaterialIcon$watchLater_getInstance(), MaterialIcon$work_getInstance(), MaterialIcon$youtubeSearchedFor_getInstance(), MaterialIcon$zoomIn_getInstance(), MaterialIcon$zoomOut_getInstance(), MaterialIcon$addAlert_getInstance(), MaterialIcon$error_getInstance(), MaterialIcon$errorOutline_getInstance(), MaterialIcon$warning_getInstance(), MaterialIcon$addToQueue_getInstance(), MaterialIcon$airplay_getInstance(), MaterialIcon$album_getInstance(), MaterialIcon$artTrack_getInstance(), MaterialIcon$avTimer_getInstance(), MaterialIcon$brandingWatermark_getInstance(), MaterialIcon$callToAction_getInstance(), MaterialIcon$closedCaption_getInstance(), MaterialIcon$equalizer_getInstance(), MaterialIcon$explicit_getInstance(), MaterialIcon$fastForward_getInstance(), MaterialIcon$fastRewind_getInstance(), MaterialIcon$featuredPlayList_getInstance(), MaterialIcon$featuredVideo_getInstance(), MaterialIcon$fiberDvr_getInstance(), MaterialIcon$fiberManualRecord_getInstance(), MaterialIcon$fiberNew_getInstance(), MaterialIcon$fiberPin_getInstance(), MaterialIcon$forward10_getInstance(), MaterialIcon$forward30_getInstance(), MaterialIcon$forward5_getInstance(), MaterialIcon$games_getInstance(), MaterialIcon$hd_getInstance(), MaterialIcon$hearing_getInstance(), MaterialIcon$highQuality_getInstance(), MaterialIcon$libraryAdd_getInstance(), MaterialIcon$libraryBooks_getInstance(), MaterialIcon$libraryMusic_getInstance(), MaterialIcon$loop_getInstance(), MaterialIcon$mic_getInstance(), MaterialIcon$micNone_getInstance(), MaterialIcon$micOff_getInstance(), MaterialIcon$movie_getInstance(), MaterialIcon$musicVideo_getInstance(), MaterialIcon$newReleases_getInstance(), MaterialIcon$note_getInstance(), MaterialIcon$notInterested_getInstance(), MaterialIcon$pause_getInstance(), MaterialIcon$pauseCircleFilled_getInstance(), MaterialIcon$pauseCircleOutline_getInstance(), MaterialIcon$playlistAdd_getInstance(), MaterialIcon$playlistAddCheck_getInstance(), MaterialIcon$playlistPlay_getInstance(), MaterialIcon$playArrow_getInstance(), MaterialIcon$playCircleFilled_getInstance(), MaterialIcon$playCircleOutline_getInstance(), MaterialIcon$queue_getInstance(), MaterialIcon$queueMusic_getInstance(), MaterialIcon$queuePlayNext_getInstance(), MaterialIcon$radio_getInstance(), MaterialIcon$recentActors_getInstance(), MaterialIcon$removeFromQueue_getInstance(), MaterialIcon$repeat_getInstance(), MaterialIcon$repeatOne_getInstance(), MaterialIcon$replay10_getInstance(), MaterialIcon$replay_getInstance(), MaterialIcon$replay30_getInstance(), MaterialIcon$replay5_getInstance(), MaterialIcon$shuffle_getInstance(), MaterialIcon$skipNext_getInstance(), MaterialIcon$skipPrevious_getInstance(), MaterialIcon$slowMotionVideo_getInstance(), MaterialIcon$snooze_getInstance(), MaterialIcon$sortByAlpha_getInstance(), MaterialIcon$stop_getInstance(), MaterialIcon$subscriptions_getInstance(), MaterialIcon$subtitles_getInstance(), MaterialIcon$surroundSound_getInstance(), MaterialIcon$videocam_getInstance(), MaterialIcon$videocamOff_getInstance(), MaterialIcon$videoCall_getInstance(), MaterialIcon$videoLabel_getInstance(), MaterialIcon$videoLibrary_getInstance(), MaterialIcon$volumeDown_getInstance(), MaterialIcon$volumeMute_getInstance(), MaterialIcon$volumeOff_getInstance(), MaterialIcon$volumeUp_getInstance(), MaterialIcon$web_getInstance(), MaterialIcon$webAsset_getInstance(), MaterialIcon$business_getInstance(), MaterialIcon$call_getInstance(), MaterialIcon$callEnd_getInstance(), MaterialIcon$callMade_getInstance(), MaterialIcon$callMerge_getInstance(), MaterialIcon$callMissed_getInstance(), MaterialIcon$callMissedOutgoing_getInstance(), MaterialIcon$callReceived_getInstance(), MaterialIcon$callSplit_getInstance(), MaterialIcon$chat_getInstance(), MaterialIcon$chatBubble_getInstance(), MaterialIcon$chatBubbleOutline_getInstance(), MaterialIcon$clearAll_getInstance(), MaterialIcon$comment_getInstance(), MaterialIcon$contacts_getInstance(), MaterialIcon$contactMail_getInstance(), MaterialIcon$contactPhone_getInstance(), MaterialIcon$dialerSip_getInstance(), MaterialIcon$dialpad_getInstance(), MaterialIcon$email_getInstance(), MaterialIcon$forum_getInstance(), MaterialIcon$importContacts_getInstance(), MaterialIcon$importExport_getInstance(), MaterialIcon$invertColorsOff_getInstance(), MaterialIcon$liveHelp_getInstance(), MaterialIcon$locationOff_getInstance(), MaterialIcon$locationOn_getInstance(), MaterialIcon$mailOutline_getInstance(), MaterialIcon$message_getInstance(), MaterialIcon$noSim_getInstance(), MaterialIcon$phonelinkErase_getInstance(), MaterialIcon$phonelinkLock_getInstance(), MaterialIcon$phonelinkRing_getInstance(), MaterialIcon$phonelinkSetup_getInstance(), MaterialIcon$phone_getInstance(), MaterialIcon$portableWifiOff_getInstance(), MaterialIcon$presentToAll_getInstance(), MaterialIcon$ringVolume_getInstance(), MaterialIcon$rssFeed_getInstance(), MaterialIcon$screenShare_getInstance(), MaterialIcon$speakerPhone_getInstance(), MaterialIcon$stayCurrentLandscape_getInstance(), MaterialIcon$stayCurrentPortrait_getInstance(), MaterialIcon$stayPrimaryLandscape_getInstance(), MaterialIcon$stayPrimaryPortrait_getInstance(), MaterialIcon$stopScreenShare_getInstance(), MaterialIcon$swapCalls_getInstance(), MaterialIcon$textsms_getInstance(), MaterialIcon$voicemail_getInstance(), MaterialIcon$vpnKey_getInstance(), MaterialIcon$add_getInstance(), MaterialIcon$addBox_getInstance(), MaterialIcon$addCircle_getInstance(), MaterialIcon$addCircleOutline_getInstance(), MaterialIcon$archive_getInstance(), MaterialIcon$backspace_getInstance(), MaterialIcon$block_getInstance(), MaterialIcon$clear_getInstance(), MaterialIcon$contentCopy_getInstance(), MaterialIcon$contentCut_getInstance(), MaterialIcon$contentPaste_getInstance(), MaterialIcon$create_getInstance(), MaterialIcon$deleteSweep_getInstance(), MaterialIcon$drafts_getInstance(), MaterialIcon$filterList_getInstance(), MaterialIcon$flag_getInstance(), MaterialIcon$fontDownload_getInstance(), MaterialIcon$forward_getInstance(), MaterialIcon$gesture_getInstance(), MaterialIcon$inbox_getInstance(), MaterialIcon$link_getInstance(), MaterialIcon$lowPriority_getInstance(), MaterialIcon$mail_getInstance(), MaterialIcon$markunread_getInstance(), MaterialIcon$moveToInbox_getInstance(), MaterialIcon$nextWeek_getInstance(), MaterialIcon$redo_getInstance(), MaterialIcon$remove_getInstance(), MaterialIcon$removeCircle_getInstance(), MaterialIcon$removeCircleOutline_getInstance(), MaterialIcon$reply_getInstance(), MaterialIcon$replyAll_getInstance(), MaterialIcon$report_getInstance(), MaterialIcon$save_getInstance(), MaterialIcon$selectAll_getInstance(), MaterialIcon$send_getInstance(), MaterialIcon$sort_getInstance(), MaterialIcon$textFormat_getInstance(), MaterialIcon$unarchive_getInstance(), MaterialIcon$undo_getInstance(), MaterialIcon$weekend_getInstance(), MaterialIcon$accessAlarms_getInstance(), MaterialIcon$accessAlarm_getInstance(), MaterialIcon$accessTime_getInstance(), MaterialIcon$addAlarm_getInstance(), MaterialIcon$airplanemodeActive_getInstance(), MaterialIcon$airplanemodeInactive_getInstance(), MaterialIcon$battery20_getInstance(), MaterialIcon$battery30_getInstance(), MaterialIcon$battery50_getInstance(), MaterialIcon$battery60_getInstance(), MaterialIcon$battery80_getInstance(), MaterialIcon$battery90_getInstance(), MaterialIcon$batteryAlert_getInstance(), MaterialIcon$batteryCharging20_getInstance(), MaterialIcon$batteryCharging30_getInstance(), MaterialIcon$batteryCharging50_getInstance(), MaterialIcon$batteryCharging60_getInstance(), MaterialIcon$batteryCharging80_getInstance(), MaterialIcon$batteryCharging90_getInstance(), MaterialIcon$batteryChargingFull_getInstance(), MaterialIcon$batteryFull_getInstance(), MaterialIcon$batteryStd_getInstance(), MaterialIcon$batteryUnknown_getInstance(), MaterialIcon$bluetooth_getInstance(), MaterialIcon$bluetoothConnected_getInstance(), MaterialIcon$bluetoothDisabled_getInstance(), MaterialIcon$bluetoothSearching_getInstance(), MaterialIcon$brightnessAuto_getInstance(), MaterialIcon$brightnessHigh_getInstance(), MaterialIcon$brightnessLow_getInstance(), MaterialIcon$brightnessMedium_getInstance(), MaterialIcon$dataUsage_getInstance(), MaterialIcon$developerMode_getInstance(), MaterialIcon$devices_getInstance(), MaterialIcon$dvr_getInstance(), MaterialIcon$gpsFixed_getInstance(), MaterialIcon$gpsNotFixed_getInstance(), MaterialIcon$gpsOff_getInstance(), MaterialIcon$graphicEq_getInstance(), MaterialIcon$locationDisabled_getInstance(), MaterialIcon$locationSearching_getInstance(), MaterialIcon$networkCell_getInstance(), MaterialIcon$networkWifi_getInstance(), MaterialIcon$nfc_getInstance(), MaterialIcon$screenLockLandscape_getInstance(), MaterialIcon$screenLockPortrait_getInstance(), MaterialIcon$screenLockRotation_getInstance(), MaterialIcon$screenRotation_getInstance(), MaterialIcon$sdStorage_getInstance(), MaterialIcon$settingsSystemDaydream_getInstance(), MaterialIcon$signalCellular0Bar_getInstance(), MaterialIcon$signalCellular1Bar_getInstance(), MaterialIcon$signalCellular2Bar_getInstance(), MaterialIcon$signalCellular3Bar_getInstance(), MaterialIcon$signalCellular4Bar_getInstance(), MaterialIcon$signalCellularConnectedNoInternet0Bar_getInstance(), MaterialIcon$signalCellularConnectedNoInternet1Bar_getInstance(), MaterialIcon$signalCellularConnectedNoInternet2Bar_getInstance(), MaterialIcon$signalCellularConnectedNoInternet3Bar_getInstance(), MaterialIcon$signalCellularConnectedNoInternet4Bar_getInstance(), MaterialIcon$signalCellularNoSim_getInstance(), MaterialIcon$signalCellularNull_getInstance(), MaterialIcon$signalCellularOff_getInstance(), MaterialIcon$signalWifi0Bar_getInstance(), MaterialIcon$signalWifi1Bar_getInstance(), MaterialIcon$signalWifi1BarLock_getInstance(), MaterialIcon$signalWifi2Bar_getInstance(), MaterialIcon$signalWifi2BarLock_getInstance(), MaterialIcon$signalWifi3Bar_getInstance(), MaterialIcon$signalWifi3BarLock_getInstance(), MaterialIcon$signalWifi4Bar_getInstance(), MaterialIcon$signalWifi4BarLock_getInstance(), MaterialIcon$signalWifiOff_getInstance(), MaterialIcon$signalWifiStatusbar1Bar26x24px_getInstance(), MaterialIcon$signalWifiStatusbar2Bar26x24px_getInstance(), MaterialIcon$signalWifiStatusbar3Bar26x24px_getInstance(), MaterialIcon$signalWifiStatusbar4Bar26x24px_getInstance(), MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_getInstance(), MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_getInstance(), MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_getInstance(), MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_getInstance(), MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_getInstance(), MaterialIcon$signalWifiStatusbarNotConnected26x24px_getInstance(), MaterialIcon$signalWifiStatusbarNull26x24px_getInstance(), MaterialIcon$storage_getInstance(), MaterialIcon$usb_getInstance(), MaterialIcon$wallpaper_getInstance(), MaterialIcon$widgets_getInstance(), MaterialIcon$wifiLock_getInstance(), MaterialIcon$wifiTethering_getInstance(), MaterialIcon$attachFile_getInstance(), MaterialIcon$attachMoney_getInstance(), MaterialIcon$borderAll_getInstance(), MaterialIcon$borderBottom_getInstance(), MaterialIcon$borderClear_getInstance(), MaterialIcon$borderColor_getInstance(), MaterialIcon$borderHorizontal_getInstance(), MaterialIcon$borderInner_getInstance(), MaterialIcon$borderLeft_getInstance(), MaterialIcon$borderOuter_getInstance(), MaterialIcon$borderRight_getInstance(), MaterialIcon$borderStyle_getInstance(), MaterialIcon$borderTop_getInstance(), MaterialIcon$borderVertical_getInstance(), MaterialIcon$bubbleChart_getInstance(), MaterialIcon$dragHandle_getInstance(), MaterialIcon$formatAlignCenter_getInstance(), MaterialIcon$formatAlignJustify_getInstance(), MaterialIcon$formatAlignLeft_getInstance(), MaterialIcon$formatAlignRight_getInstance(), MaterialIcon$formatBold_getInstance(), MaterialIcon$formatClear_getInstance(), MaterialIcon$formatColorFill_getInstance(), MaterialIcon$formatColorReset_getInstance(), MaterialIcon$formatColorText_getInstance(), MaterialIcon$formatIndentDecrease_getInstance(), MaterialIcon$formatIndentIncrease_getInstance(), MaterialIcon$formatItalic_getInstance(), MaterialIcon$formatLineSpacing_getInstance(), MaterialIcon$formatListBulleted_getInstance(), MaterialIcon$formatListNumbered_getInstance(), MaterialIcon$formatPaint_getInstance(), MaterialIcon$formatQuote_getInstance(), MaterialIcon$formatShapes_getInstance(), MaterialIcon$formatSize_getInstance(), MaterialIcon$formatStrikethrough_getInstance(), MaterialIcon$formatTextdirectionLToR_getInstance(), MaterialIcon$formatTextdirectionRToL_getInstance(), MaterialIcon$formatUnderlined_getInstance(), MaterialIcon$functions_getInstance(), MaterialIcon$highlight_getInstance(), MaterialIcon$insertChart_getInstance(), MaterialIcon$insertComment_getInstance(), MaterialIcon$insertDriveFile_getInstance(), MaterialIcon$insertEmoticon_getInstance(), MaterialIcon$insertInvitation_getInstance(), MaterialIcon$insertLink_getInstance(), MaterialIcon$insertPhoto_getInstance(), MaterialIcon$linearScale_getInstance(), MaterialIcon$mergeType_getInstance(), MaterialIcon$modeComment_getInstance(), MaterialIcon$modeEdit_getInstance(), MaterialIcon$monetizationOn_getInstance(), MaterialIcon$moneyOff_getInstance(), MaterialIcon$multilineChart_getInstance(), MaterialIcon$pieChart_getInstance(), MaterialIcon$pieChartOutlined_getInstance(), MaterialIcon$publish_getInstance(), MaterialIcon$shortText_getInstance(), MaterialIcon$showChart_getInstance(), MaterialIcon$spaceBar_getInstance(), MaterialIcon$strikethroughS_getInstance(), MaterialIcon$textFields_getInstance(), MaterialIcon$title_getInstance(), MaterialIcon$verticalAlignBottom_getInstance(), MaterialIcon$verticalAlignCenter_getInstance(), MaterialIcon$verticalAlignTop_getInstance(), MaterialIcon$wrapText_getInstance(), MaterialIcon$attachment_getInstance(), MaterialIcon$cloud_getInstance(), MaterialIcon$cloudCircle_getInstance(), MaterialIcon$cloudDone_getInstance(), MaterialIcon$cloudDownload_getInstance(), MaterialIcon$cloudOff_getInstance(), MaterialIcon$cloudQueue_getInstance(), MaterialIcon$cloudUpload_getInstance(), MaterialIcon$createNewFolder_getInstance(), MaterialIcon$fileDownload_getInstance(), MaterialIcon$fileUpload_getInstance(), MaterialIcon$folder_getInstance(), MaterialIcon$folderOpen_getInstance(), MaterialIcon$folderShared_getInstance(), MaterialIcon$cast_getInstance(), MaterialIcon$castConnected_getInstance(), MaterialIcon$computer_getInstance(), MaterialIcon$desktopMac_getInstance(), MaterialIcon$desktopWindows_getInstance(), MaterialIcon$developerBoard_getInstance(), MaterialIcon$devicesOther_getInstance(), MaterialIcon$deviceHub_getInstance(), MaterialIcon$dock_getInstance(), MaterialIcon$gamepad_getInstance(), MaterialIcon$headset_getInstance(), MaterialIcon$headsetMic_getInstance(), MaterialIcon$keyboard_getInstance(), MaterialIcon$keyboardArrowDown_getInstance(), MaterialIcon$keyboardArrowLeft_getInstance(), MaterialIcon$keyboardArrowRight_getInstance(), MaterialIcon$keyboardArrowUp_getInstance(), MaterialIcon$keyboardBackspace_getInstance(), MaterialIcon$keyboardCapslock_getInstance(), MaterialIcon$keyboardHide_getInstance(), MaterialIcon$keyboardReturn_getInstance(), MaterialIcon$keyboardTab_getInstance(), MaterialIcon$keyboardVoice_getInstance(), MaterialIcon$laptop_getInstance(), MaterialIcon$laptopChromebook_getInstance(), MaterialIcon$laptopMac_getInstance(), MaterialIcon$laptopWindows_getInstance(), MaterialIcon$memory_getInstance(), MaterialIcon$mouse_getInstance(), MaterialIcon$phonelink_getInstance(), MaterialIcon$phonelinkOff_getInstance(), MaterialIcon$phoneAndroid_getInstance(), MaterialIcon$phoneIphone_getInstance(), MaterialIcon$powerInput_getInstance(), MaterialIcon$router_getInstance(), MaterialIcon$scanner_getInstance(), MaterialIcon$security_getInstance(), MaterialIcon$simCard_getInstance(), MaterialIcon$smartphone_getInstance(), MaterialIcon$speaker_getInstance(), MaterialIcon$speakerGroup_getInstance(), MaterialIcon$tablet_getInstance(), MaterialIcon$tabletAndroid_getInstance(), MaterialIcon$tabletMac_getInstance(), MaterialIcon$toys_getInstance(), MaterialIcon$tv_getInstance(), MaterialIcon$videogameAsset_getInstance(), MaterialIcon$watch_getInstance(), MaterialIcon$addAPhoto_getInstance(), MaterialIcon$addToPhotos_getInstance(), MaterialIcon$adjust_getInstance(), MaterialIcon$assistant_getInstance(), MaterialIcon$assistantPhoto_getInstance(), MaterialIcon$audiotrack_getInstance(), MaterialIcon$blurCircular_getInstance(), MaterialIcon$blurLinear_getInstance(), MaterialIcon$blurOff_getInstance(), MaterialIcon$blurOn_getInstance(), MaterialIcon$brightness1_getInstance(), MaterialIcon$brightness2_getInstance(), MaterialIcon$brightness3_getInstance(), MaterialIcon$brightness4_getInstance(), MaterialIcon$brightness5_getInstance(), MaterialIcon$brightness6_getInstance(), MaterialIcon$brightness7_getInstance(), MaterialIcon$brokenImage_getInstance(), MaterialIcon$brush_getInstance(), MaterialIcon$burstMode_getInstance(), MaterialIcon$camera_getInstance(), MaterialIcon$cameraAlt_getInstance(), MaterialIcon$cameraFront_getInstance(), MaterialIcon$cameraRear_getInstance(), MaterialIcon$cameraRoll_getInstance(), MaterialIcon$centerFocusStrong_getInstance(), MaterialIcon$centerFocusWeak_getInstance(), MaterialIcon$collections_getInstance(), MaterialIcon$collectionsBookmark_getInstance(), MaterialIcon$colorize_getInstance(), MaterialIcon$colorLens_getInstance(), MaterialIcon$compare_getInstance(), MaterialIcon$controlPoint_getInstance(), MaterialIcon$controlPointDuplicate_getInstance(), MaterialIcon$crop169_getInstance(), MaterialIcon$crop_getInstance(), MaterialIcon$crop32_getInstance(), MaterialIcon$crop54_getInstance(), MaterialIcon$crop75_getInstance(), MaterialIcon$cropDin_getInstance(), MaterialIcon$cropFree_getInstance(), MaterialIcon$cropLandscape_getInstance(), MaterialIcon$cropOriginal_getInstance(), MaterialIcon$cropPortrait_getInstance(), MaterialIcon$cropRotate_getInstance(), MaterialIcon$cropSquare_getInstance(), MaterialIcon$dehaze_getInstance(), MaterialIcon$details_getInstance(), MaterialIcon$edit_getInstance(), MaterialIcon$exposure_getInstance(), MaterialIcon$exposureNeg1_getInstance(), MaterialIcon$exposureNeg2_getInstance(), MaterialIcon$exposurePlus1_getInstance(), MaterialIcon$exposurePlus2_getInstance(), MaterialIcon$exposureZero_getInstance(), MaterialIcon$filter1_getInstance(), MaterialIcon$filter_getInstance(), MaterialIcon$filter2_getInstance(), MaterialIcon$filter3_getInstance(), MaterialIcon$filter4_getInstance(), MaterialIcon$filter5_getInstance(), MaterialIcon$filter6_getInstance(), MaterialIcon$filter7_getInstance(), MaterialIcon$filter8_getInstance(), MaterialIcon$filter9_getInstance(), MaterialIcon$filter9Plus_getInstance(), MaterialIcon$filterBAndW_getInstance(), MaterialIcon$filterCenterFocus_getInstance(), MaterialIcon$filterDrama_getInstance(), MaterialIcon$filterFrames_getInstance(), MaterialIcon$filterHdr_getInstance(), MaterialIcon$filterNone_getInstance(), MaterialIcon$filterTiltShift_getInstance(), MaterialIcon$filterVintage_getInstance(), MaterialIcon$flare_getInstance(), MaterialIcon$flashAuto_getInstance(), MaterialIcon$flashOff_getInstance(), MaterialIcon$flashOn_getInstance(), MaterialIcon$flip_getInstance(), MaterialIcon$gradient_getInstance(), MaterialIcon$grain_getInstance(), MaterialIcon$gridOff_getInstance(), MaterialIcon$gridOn_getInstance(), MaterialIcon$hdrOff_getInstance(), MaterialIcon$hdrOn_getInstance(), MaterialIcon$hdrStrong_getInstance(), MaterialIcon$hdrWeak_getInstance(), MaterialIcon$healing_getInstance(), MaterialIcon$image_getInstance(), MaterialIcon$imageAspectRatio_getInstance(), MaterialIcon$iso_getInstance(), MaterialIcon$landscape_getInstance(), MaterialIcon$leakAdd_getInstance(), MaterialIcon$leakRemove_getInstance(), MaterialIcon$lens_getInstance(), MaterialIcon$linkedCamera_getInstance(), MaterialIcon$looks_getInstance(), MaterialIcon$looks3_getInstance(), MaterialIcon$looks4_getInstance(), MaterialIcon$looks5_getInstance(), MaterialIcon$looks6_getInstance(), MaterialIcon$looksOne_getInstance(), MaterialIcon$looksTwo_getInstance(), MaterialIcon$loupe_getInstance(), MaterialIcon$monochromePhotos_getInstance(), MaterialIcon$movieCreation_getInstance(), MaterialIcon$movieFilter_getInstance(), MaterialIcon$musicNote_getInstance(), MaterialIcon$nature_getInstance(), MaterialIcon$naturePeople_getInstance(), MaterialIcon$navigateBefore_getInstance(), MaterialIcon$navigateNext_getInstance(), MaterialIcon$palette_getInstance(), MaterialIcon$panorama_getInstance(), MaterialIcon$panoramaFishEye_getInstance(), MaterialIcon$panoramaHorizontal_getInstance(), MaterialIcon$panoramaVertical_getInstance(), MaterialIcon$panoramaWideAngle_getInstance(), MaterialIcon$photo_getInstance(), MaterialIcon$photoAlbum_getInstance(), MaterialIcon$photoCamera_getInstance(), MaterialIcon$photoFilter_getInstance(), MaterialIcon$photoLibrary_getInstance(), MaterialIcon$photoSizeSelectActual_getInstance(), MaterialIcon$photoSizeSelectLarge_getInstance(), MaterialIcon$photoSizeSelectSmall_getInstance(), MaterialIcon$pictureAsPdf_getInstance(), MaterialIcon$portrait_getInstance(), MaterialIcon$removeRedEye_getInstance(), MaterialIcon$rotate90DegreesCcw_getInstance(), MaterialIcon$rotateLeft_getInstance(), MaterialIcon$rotateRight_getInstance(), MaterialIcon$slideshow_getInstance(), MaterialIcon$straighten_getInstance(), MaterialIcon$style_getInstance(), MaterialIcon$switchCamera_getInstance(), MaterialIcon$switchVideo_getInstance(), MaterialIcon$tagFaces_getInstance(), MaterialIcon$texture_getInstance(), MaterialIcon$timelapse_getInstance(), MaterialIcon$timer10_getInstance(), MaterialIcon$timer_getInstance(), MaterialIcon$timer3_getInstance(), MaterialIcon$timerOff_getInstance(), MaterialIcon$tonality_getInstance(), MaterialIcon$transform_getInstance(), MaterialIcon$tune_getInstance(), MaterialIcon$viewComfy_getInstance(), MaterialIcon$viewCompact_getInstance(), MaterialIcon$vignette_getInstance(), MaterialIcon$wbAuto_getInstance(), MaterialIcon$wbCloudy_getInstance(), MaterialIcon$wbIncandescent_getInstance(), MaterialIcon$wbIridescent_getInstance(), MaterialIcon$wbSunny_getInstance(), MaterialIcon$addLocation_getInstance(), MaterialIcon$beenhere_getInstance(), MaterialIcon$directions_getInstance(), MaterialIcon$directionsBike_getInstance(), MaterialIcon$directionsBoat_getInstance(), MaterialIcon$directionsBus_getInstance(), MaterialIcon$directionsCar_getInstance(), MaterialIcon$directionsRailway_getInstance(), MaterialIcon$directionsRun_getInstance(), MaterialIcon$directionsSubway_getInstance(), MaterialIcon$directionsTransit_getInstance(), MaterialIcon$directionsWalk_getInstance(), MaterialIcon$editLocation_getInstance(), MaterialIcon$evStation_getInstance(), MaterialIcon$flight_getInstance(), MaterialIcon$hotel_getInstance(), MaterialIcon$layers_getInstance(), MaterialIcon$layersClear_getInstance(), MaterialIcon$localActivity_getInstance(), MaterialIcon$localAirport_getInstance(), MaterialIcon$localAtm_getInstance(), MaterialIcon$localBar_getInstance(), MaterialIcon$localCafe_getInstance(), MaterialIcon$localCarWash_getInstance(), MaterialIcon$localConvenienceStore_getInstance(), MaterialIcon$localDining_getInstance(), MaterialIcon$localDrink_getInstance(), MaterialIcon$localFlorist_getInstance(), MaterialIcon$localGasStation_getInstance(), MaterialIcon$localGroceryStore_getInstance(), MaterialIcon$localHospital_getInstance(), MaterialIcon$localHotel_getInstance(), MaterialIcon$localLaundryService_getInstance(), MaterialIcon$localLibrary_getInstance(), MaterialIcon$localMall_getInstance(), MaterialIcon$localMovies_getInstance(), MaterialIcon$localOffer_getInstance(), MaterialIcon$localParking_getInstance(), MaterialIcon$localPharmacy_getInstance(), MaterialIcon$localPhone_getInstance(), MaterialIcon$localPizza_getInstance(), MaterialIcon$localPlay_getInstance(), MaterialIcon$localPostOffice_getInstance(), MaterialIcon$localPrintshop_getInstance(), MaterialIcon$localSee_getInstance(), MaterialIcon$localShipping_getInstance(), MaterialIcon$localTaxi_getInstance(), MaterialIcon$map_getInstance(), MaterialIcon$myLocation_getInstance(), MaterialIcon$navigation_getInstance(), MaterialIcon$nearMe_getInstance(), MaterialIcon$personPin_getInstance(), MaterialIcon$personPinCircle_getInstance(), MaterialIcon$pinDrop_getInstance(), MaterialIcon$place_getInstance(), MaterialIcon$rateReview_getInstance(), MaterialIcon$restaurant_getInstance(), MaterialIcon$restaurantMenu_getInstance(), MaterialIcon$satellite_getInstance(), MaterialIcon$storeMallDirectory_getInstance(), MaterialIcon$streetview_getInstance(), MaterialIcon$subway_getInstance(), MaterialIcon$terrain_getInstance(), MaterialIcon$traffic_getInstance(), MaterialIcon$train_getInstance(), MaterialIcon$tram_getInstance(), MaterialIcon$transferWithinAStation_getInstance(), MaterialIcon$zoomOutMap_getInstance(), MaterialIcon$apps_getInstance(), MaterialIcon$arrowBack_getInstance(), MaterialIcon$arrowDownward_getInstance(), MaterialIcon$arrowDropDown_getInstance(), MaterialIcon$arrowDropDownCircle_getInstance(), MaterialIcon$arrowDropUp_getInstance(), MaterialIcon$arrowForward_getInstance(), MaterialIcon$arrowUpward_getInstance(), MaterialIcon$cancel_getInstance(), MaterialIcon$check_getInstance(), MaterialIcon$chevronLeft_getInstance(), MaterialIcon$chevronRight_getInstance(), MaterialIcon$close_getInstance(), MaterialIcon$expandLess_getInstance(), MaterialIcon$expandMore_getInstance(), MaterialIcon$firstPage_getInstance(), MaterialIcon$fullscreen_getInstance(), MaterialIcon$fullscreenExit_getInstance(), MaterialIcon$lastPage_getInstance(), MaterialIcon$menu_getInstance(), MaterialIcon$moreHoriz_getInstance(), MaterialIcon$moreVert_getInstance(), MaterialIcon$refresh_getInstance(), MaterialIcon$subdirectoryArrowLeft_getInstance(), MaterialIcon$subdirectoryArrowRight_getInstance(), MaterialIcon$unfoldLess_getInstance(), MaterialIcon$unfoldMore_getInstance(), MaterialIcon$adb_getInstance(), MaterialIcon$airlineSeatFlat_getInstance(), MaterialIcon$airlineSeatFlatAngled_getInstance(), MaterialIcon$airlineSeatIndividualSuite_getInstance(), MaterialIcon$airlineSeatLegroomExtra_getInstance(), MaterialIcon$airlineSeatLegroomNormal_getInstance(), MaterialIcon$airlineSeatLegroomReduced_getInstance(), MaterialIcon$airlineSeatReclineExtra_getInstance(), MaterialIcon$airlineSeatReclineNormal_getInstance(), MaterialIcon$bluetoothAudio_getInstance(), MaterialIcon$confirmationNumber_getInstance(), MaterialIcon$discFull_getInstance(), MaterialIcon$doNotDisturb_getInstance(), MaterialIcon$doNotDisturbAlt_getInstance(), MaterialIcon$doNotDisturbOff_getInstance(), MaterialIcon$doNotDisturbOn_getInstance(), MaterialIcon$driveEta_getInstance(), MaterialIcon$enhancedEncryption_getInstance(), MaterialIcon$eventAvailable_getInstance(), MaterialIcon$eventBusy_getInstance(), MaterialIcon$eventNote_getInstance(), MaterialIcon$folderSpecial_getInstance(), MaterialIcon$liveTv_getInstance(), MaterialIcon$mms_getInstance(), MaterialIcon$more_getInstance(), MaterialIcon$networkCheck_getInstance(), MaterialIcon$networkLocked_getInstance(), MaterialIcon$noEncryption_getInstance(), MaterialIcon$ondemandVideo_getInstance(), MaterialIcon$personalVideo_getInstance(), MaterialIcon$phoneBluetoothSpeaker_getInstance(), MaterialIcon$phoneForwarded_getInstance(), MaterialIcon$phoneInTalk_getInstance(), MaterialIcon$phoneLocked_getInstance(), MaterialIcon$phoneMissed_getInstance(), MaterialIcon$phonePaused_getInstance(), MaterialIcon$power_getInstance(), MaterialIcon$priorityHigh_getInstance(), MaterialIcon$rvHookup_getInstance(), MaterialIcon$sdCard_getInstance(), MaterialIcon$simCardAlert_getInstance(), MaterialIcon$sms_getInstance(), MaterialIcon$smsFailed_getInstance(), MaterialIcon$sync_getInstance(), MaterialIcon$syncDisabled_getInstance(), MaterialIcon$syncProblem_getInstance(), MaterialIcon$systemUpdate_getInstance(), MaterialIcon$tapAndPlay_getInstance(), MaterialIcon$timeToLeave_getInstance(), MaterialIcon$vibration_getInstance(), MaterialIcon$voiceChat_getInstance(), MaterialIcon$vpnLock_getInstance(), MaterialIcon$wc_getInstance(), MaterialIcon$wifi_getInstance(), MaterialIcon$acUnit_getInstance(), MaterialIcon$airportShuttle_getInstance(), MaterialIcon$allInclusive_getInstance(), MaterialIcon$beachAccess_getInstance(), MaterialIcon$businessCenter_getInstance(), MaterialIcon$casino_getInstance(), MaterialIcon$childCare_getInstance(), MaterialIcon$childFriendly_getInstance(), MaterialIcon$fitnessCenter_getInstance(), MaterialIcon$freeBreakfast_getInstance(), MaterialIcon$golfCourse_getInstance(), MaterialIcon$hotTub_getInstance(), MaterialIcon$kitchen_getInstance(), MaterialIcon$pool_getInstance(), MaterialIcon$roomService_getInstance(), MaterialIcon$rvHookup2_getInstance(), MaterialIcon$smokeFree_getInstance(), MaterialIcon$smokingRooms_getInstance(), MaterialIcon$spa_getInstance(), MaterialIcon$cake_getInstance(), MaterialIcon$domain_getInstance(), MaterialIcon$group_getInstance(), MaterialIcon$groupAdd_getInstance(), MaterialIcon$locationCity_getInstance(), MaterialIcon$mood_getInstance(), MaterialIcon$moodBad_getInstance(), MaterialIcon$notifications_getInstance(), MaterialIcon$notificationsActive_getInstance(), MaterialIcon$notificationsNone_getInstance(), MaterialIcon$notificationsOff_getInstance(), MaterialIcon$notificationsPaused_getInstance(), MaterialIcon$pages_getInstance(), MaterialIcon$partyMode_getInstance(), MaterialIcon$people_getInstance(), MaterialIcon$peopleOutline_getInstance(), MaterialIcon$person_getInstance(), MaterialIcon$personAdd_getInstance(), MaterialIcon$personOutline_getInstance(), MaterialIcon$plusOne_getInstance(), MaterialIcon$poll_getInstance(), MaterialIcon$_public_getInstance(), MaterialIcon$school_getInstance(), MaterialIcon$sentimentDissatisfied_getInstance(), MaterialIcon$sentimentNeutral_getInstance(), MaterialIcon$sentimentSatisfied_getInstance(), MaterialIcon$sentimentVeryDissatisfied_getInstance(), MaterialIcon$sentimentVerySatisfied_getInstance(), MaterialIcon$share_getInstance(), MaterialIcon$whatshot_getInstance(), MaterialIcon$checkBox_getInstance(), MaterialIcon$checkBoxOutlineBlank_getInstance(), MaterialIcon$indeterminateCheckBox_getInstance(), MaterialIcon$radioButtonChecked_getInstance(), MaterialIcon$radioButtonUnchecked_getInstance(), MaterialIcon$star_getInstance(), MaterialIcon$starBorder_getInstance(), MaterialIcon$starHalf_getInstance()];
  }
  MaterialIcon.values = MaterialIcon$values;
  function MaterialIcon$valueOf(name) {
    switch (name) {
      case '_3dRotation':
        return MaterialIcon$_3dRotation_getInstance();
      case 'accessibility':
        return MaterialIcon$accessibility_getInstance();
      case 'accessible':
        return MaterialIcon$accessible_getInstance();
      case 'accountBalance':
        return MaterialIcon$accountBalance_getInstance();
      case 'accountBalanceWallet':
        return MaterialIcon$accountBalanceWallet_getInstance();
      case 'accountBox':
        return MaterialIcon$accountBox_getInstance();
      case 'accountCircle':
        return MaterialIcon$accountCircle_getInstance();
      case 'addShoppingCart':
        return MaterialIcon$addShoppingCart_getInstance();
      case 'alarm':
        return MaterialIcon$alarm_getInstance();
      case 'alarmAdd':
        return MaterialIcon$alarmAdd_getInstance();
      case 'alarmOff':
        return MaterialIcon$alarmOff_getInstance();
      case 'alarmOn':
        return MaterialIcon$alarmOn_getInstance();
      case 'allOut':
        return MaterialIcon$allOut_getInstance();
      case 'android':
        return MaterialIcon$android_getInstance();
      case 'announcement':
        return MaterialIcon$announcement_getInstance();
      case 'aspectRatio':
        return MaterialIcon$aspectRatio_getInstance();
      case 'assessment':
        return MaterialIcon$assessment_getInstance();
      case 'assignment':
        return MaterialIcon$assignment_getInstance();
      case 'assignmentInd':
        return MaterialIcon$assignmentInd_getInstance();
      case 'assignmentLate':
        return MaterialIcon$assignmentLate_getInstance();
      case 'assignmentReturned':
        return MaterialIcon$assignmentReturned_getInstance();
      case 'assignmentReturn':
        return MaterialIcon$assignmentReturn_getInstance();
      case 'assignmentTurnedIn':
        return MaterialIcon$assignmentTurnedIn_getInstance();
      case 'autorenew':
        return MaterialIcon$autorenew_getInstance();
      case 'backup':
        return MaterialIcon$backup_getInstance();
      case 'bookmark':
        return MaterialIcon$bookmark_getInstance();
      case 'bookmarkBorder':
        return MaterialIcon$bookmarkBorder_getInstance();
      case 'book':
        return MaterialIcon$book_getInstance();
      case 'bugReport':
        return MaterialIcon$bugReport_getInstance();
      case 'build':
        return MaterialIcon$build_getInstance();
      case 'cached':
        return MaterialIcon$cached_getInstance();
      case 'cameraEnhance':
        return MaterialIcon$cameraEnhance_getInstance();
      case 'cardGiftcard':
        return MaterialIcon$cardGiftcard_getInstance();
      case 'cardMembership':
        return MaterialIcon$cardMembership_getInstance();
      case 'cardTravel':
        return MaterialIcon$cardTravel_getInstance();
      case 'changeHistory':
        return MaterialIcon$changeHistory_getInstance();
      case 'checkCircle':
        return MaterialIcon$checkCircle_getInstance();
      case 'chromeReaderMode':
        return MaterialIcon$chromeReaderMode_getInstance();
      case '_class':
        return MaterialIcon$_class_getInstance();
      case 'code':
        return MaterialIcon$code_getInstance();
      case 'compareArrows':
        return MaterialIcon$compareArrows_getInstance();
      case 'copyright':
        return MaterialIcon$copyright_getInstance();
      case 'creditCard':
        return MaterialIcon$creditCard_getInstance();
      case 'dashboard':
        return MaterialIcon$dashboard_getInstance();
      case 'dateRange':
        return MaterialIcon$dateRange_getInstance();
      case 'delete':
        return MaterialIcon$delete_getInstance();
      case 'deleteForever':
        return MaterialIcon$deleteForever_getInstance();
      case 'description':
        return MaterialIcon$description_getInstance();
      case 'dns':
        return MaterialIcon$dns_getInstance();
      case 'done':
        return MaterialIcon$done_getInstance();
      case 'doneAll':
        return MaterialIcon$doneAll_getInstance();
      case 'donutLarge':
        return MaterialIcon$donutLarge_getInstance();
      case 'donutSmall':
        return MaterialIcon$donutSmall_getInstance();
      case 'eject':
        return MaterialIcon$eject_getInstance();
      case 'euroSymbol':
        return MaterialIcon$euroSymbol_getInstance();
      case 'event':
        return MaterialIcon$event_getInstance();
      case 'eventSeat':
        return MaterialIcon$eventSeat_getInstance();
      case 'exitToApp':
        return MaterialIcon$exitToApp_getInstance();
      case 'explore':
        return MaterialIcon$explore_getInstance();
      case 'extension':
        return MaterialIcon$extension_getInstance();
      case 'face':
        return MaterialIcon$face_getInstance();
      case 'favorite':
        return MaterialIcon$favorite_getInstance();
      case 'favoriteBorder':
        return MaterialIcon$favoriteBorder_getInstance();
      case 'feedback':
        return MaterialIcon$feedback_getInstance();
      case 'findInPage':
        return MaterialIcon$findInPage_getInstance();
      case 'findReplace':
        return MaterialIcon$findReplace_getInstance();
      case 'fingerprint':
        return MaterialIcon$fingerprint_getInstance();
      case 'flightLand':
        return MaterialIcon$flightLand_getInstance();
      case 'flightTakeoff':
        return MaterialIcon$flightTakeoff_getInstance();
      case 'flipToBack':
        return MaterialIcon$flipToBack_getInstance();
      case 'flipToFront':
        return MaterialIcon$flipToFront_getInstance();
      case 'gavel':
        return MaterialIcon$gavel_getInstance();
      case 'getApp':
        return MaterialIcon$getApp_getInstance();
      case 'gif':
        return MaterialIcon$gif_getInstance();
      case 'grade':
        return MaterialIcon$grade_getInstance();
      case 'groupWork':
        return MaterialIcon$groupWork_getInstance();
      case 'gTranslate':
        return MaterialIcon$gTranslate_getInstance();
      case 'help':
        return MaterialIcon$help_getInstance();
      case 'helpOutline':
        return MaterialIcon$helpOutline_getInstance();
      case 'highlightOff':
        return MaterialIcon$highlightOff_getInstance();
      case 'history':
        return MaterialIcon$history_getInstance();
      case 'home':
        return MaterialIcon$home_getInstance();
      case 'hourglassEmpty':
        return MaterialIcon$hourglassEmpty_getInstance();
      case 'hourglassFull':
        return MaterialIcon$hourglassFull_getInstance();
      case 'https':
        return MaterialIcon$https_getInstance();
      case 'http':
        return MaterialIcon$http_getInstance();
      case 'importantDevices':
        return MaterialIcon$importantDevices_getInstance();
      case 'info':
        return MaterialIcon$info_getInstance();
      case 'infoOutline':
        return MaterialIcon$infoOutline_getInstance();
      case 'input':
        return MaterialIcon$input_getInstance();
      case 'invertColors':
        return MaterialIcon$invertColors_getInstance();
      case 'label':
        return MaterialIcon$label_getInstance();
      case 'labelOutline':
        return MaterialIcon$labelOutline_getInstance();
      case 'language':
        return MaterialIcon$language_getInstance();
      case 'launch':
        return MaterialIcon$launch_getInstance();
      case 'lightbulbOutline':
        return MaterialIcon$lightbulbOutline_getInstance();
      case 'lineStyle':
        return MaterialIcon$lineStyle_getInstance();
      case 'lineWeight':
        return MaterialIcon$lineWeight_getInstance();
      case 'list':
        return MaterialIcon$list_getInstance();
      case 'lock':
        return MaterialIcon$lock_getInstance();
      case 'lockOpen':
        return MaterialIcon$lockOpen_getInstance();
      case 'lockOutline':
        return MaterialIcon$lockOutline_getInstance();
      case 'loyalty':
        return MaterialIcon$loyalty_getInstance();
      case 'markunreadMailbox':
        return MaterialIcon$markunreadMailbox_getInstance();
      case 'motorcycle':
        return MaterialIcon$motorcycle_getInstance();
      case 'noteAdd':
        return MaterialIcon$noteAdd_getInstance();
      case 'offlinePin':
        return MaterialIcon$offlinePin_getInstance();
      case 'opacity':
        return MaterialIcon$opacity_getInstance();
      case 'openInBrowser':
        return MaterialIcon$openInBrowser_getInstance();
      case 'openInNew':
        return MaterialIcon$openInNew_getInstance();
      case 'openWith':
        return MaterialIcon$openWith_getInstance();
      case 'pageview':
        return MaterialIcon$pageview_getInstance();
      case 'panTool':
        return MaterialIcon$panTool_getInstance();
      case 'payment':
        return MaterialIcon$payment_getInstance();
      case 'permCameraMic':
        return MaterialIcon$permCameraMic_getInstance();
      case 'permContactCalendar':
        return MaterialIcon$permContactCalendar_getInstance();
      case 'permDataSetting':
        return MaterialIcon$permDataSetting_getInstance();
      case 'permDeviceInformation':
        return MaterialIcon$permDeviceInformation_getInstance();
      case 'permIdentity':
        return MaterialIcon$permIdentity_getInstance();
      case 'permMedia':
        return MaterialIcon$permMedia_getInstance();
      case 'permPhoneMsg':
        return MaterialIcon$permPhoneMsg_getInstance();
      case 'permScanWifi':
        return MaterialIcon$permScanWifi_getInstance();
      case 'pets':
        return MaterialIcon$pets_getInstance();
      case 'pictureInPicture':
        return MaterialIcon$pictureInPicture_getInstance();
      case 'pictureInPictureAlt':
        return MaterialIcon$pictureInPictureAlt_getInstance();
      case 'playForWork':
        return MaterialIcon$playForWork_getInstance();
      case 'polymer':
        return MaterialIcon$polymer_getInstance();
      case 'powerSettingsNew':
        return MaterialIcon$powerSettingsNew_getInstance();
      case 'pregnantWoman':
        return MaterialIcon$pregnantWoman_getInstance();
      case 'print':
        return MaterialIcon$print_getInstance();
      case 'queryBuilder':
        return MaterialIcon$queryBuilder_getInstance();
      case 'questionAnswer':
        return MaterialIcon$questionAnswer_getInstance();
      case 'receipt':
        return MaterialIcon$receipt_getInstance();
      case 'recordVoiceOver':
        return MaterialIcon$recordVoiceOver_getInstance();
      case 'redeem':
        return MaterialIcon$redeem_getInstance();
      case 'removeShoppingCart':
        return MaterialIcon$removeShoppingCart_getInstance();
      case 'reorder':
        return MaterialIcon$reorder_getInstance();
      case 'reportProblem':
        return MaterialIcon$reportProblem_getInstance();
      case 'restore':
        return MaterialIcon$restore_getInstance();
      case 'restorePage':
        return MaterialIcon$restorePage_getInstance();
      case 'room':
        return MaterialIcon$room_getInstance();
      case 'roundedCorner':
        return MaterialIcon$roundedCorner_getInstance();
      case 'rowing':
        return MaterialIcon$rowing_getInstance();
      case 'schedule':
        return MaterialIcon$schedule_getInstance();
      case 'search':
        return MaterialIcon$search_getInstance();
      case 'settings':
        return MaterialIcon$settings_getInstance();
      case 'settingsApplications':
        return MaterialIcon$settingsApplications_getInstance();
      case 'settingsBackupRestore':
        return MaterialIcon$settingsBackupRestore_getInstance();
      case 'settingsBluetooth':
        return MaterialIcon$settingsBluetooth_getInstance();
      case 'settingsBrightness':
        return MaterialIcon$settingsBrightness_getInstance();
      case 'settingsCell':
        return MaterialIcon$settingsCell_getInstance();
      case 'settingsEthernet':
        return MaterialIcon$settingsEthernet_getInstance();
      case 'settingsInputAntenna':
        return MaterialIcon$settingsInputAntenna_getInstance();
      case 'settingsInputComponent':
        return MaterialIcon$settingsInputComponent_getInstance();
      case 'settingsInputComposite':
        return MaterialIcon$settingsInputComposite_getInstance();
      case 'settingsInputHdmi':
        return MaterialIcon$settingsInputHdmi_getInstance();
      case 'settingsInputSvideo':
        return MaterialIcon$settingsInputSvideo_getInstance();
      case 'settingsOverscan':
        return MaterialIcon$settingsOverscan_getInstance();
      case 'settingsPhone':
        return MaterialIcon$settingsPhone_getInstance();
      case 'settingsPower':
        return MaterialIcon$settingsPower_getInstance();
      case 'settingsRemote':
        return MaterialIcon$settingsRemote_getInstance();
      case 'settingsVoice':
        return MaterialIcon$settingsVoice_getInstance();
      case 'shoppingBasket':
        return MaterialIcon$shoppingBasket_getInstance();
      case 'shoppingCart':
        return MaterialIcon$shoppingCart_getInstance();
      case 'shop':
        return MaterialIcon$shop_getInstance();
      case 'shopTwo':
        return MaterialIcon$shopTwo_getInstance();
      case 'speakerNotes':
        return MaterialIcon$speakerNotes_getInstance();
      case 'speakerNotesOff':
        return MaterialIcon$speakerNotesOff_getInstance();
      case 'spellcheck':
        return MaterialIcon$spellcheck_getInstance();
      case 'stars':
        return MaterialIcon$stars_getInstance();
      case 'store':
        return MaterialIcon$store_getInstance();
      case 'subject':
        return MaterialIcon$subject_getInstance();
      case 'supervisorAccount':
        return MaterialIcon$supervisorAccount_getInstance();
      case 'swapHoriz':
        return MaterialIcon$swapHoriz_getInstance();
      case 'swapVerticalCircle':
        return MaterialIcon$swapVerticalCircle_getInstance();
      case 'swapVert':
        return MaterialIcon$swapVert_getInstance();
      case 'systemUpdateAlt':
        return MaterialIcon$systemUpdateAlt_getInstance();
      case 'tab':
        return MaterialIcon$tab_getInstance();
      case 'tabUnselected':
        return MaterialIcon$tabUnselected_getInstance();
      case 'theaters':
        return MaterialIcon$theaters_getInstance();
      case 'thumbsUpDown':
        return MaterialIcon$thumbsUpDown_getInstance();
      case 'thumbDown':
        return MaterialIcon$thumbDown_getInstance();
      case 'thumbUp':
        return MaterialIcon$thumbUp_getInstance();
      case 'timeline':
        return MaterialIcon$timeline_getInstance();
      case 'toc':
        return MaterialIcon$toc_getInstance();
      case 'today':
        return MaterialIcon$today_getInstance();
      case 'toll':
        return MaterialIcon$toll_getInstance();
      case 'touchApp':
        return MaterialIcon$touchApp_getInstance();
      case 'trackChanges':
        return MaterialIcon$trackChanges_getInstance();
      case 'translate':
        return MaterialIcon$translate_getInstance();
      case 'trendingDown':
        return MaterialIcon$trendingDown_getInstance();
      case 'trendingFlat':
        return MaterialIcon$trendingFlat_getInstance();
      case 'trendingUp':
        return MaterialIcon$trendingUp_getInstance();
      case 'turnedIn':
        return MaterialIcon$turnedIn_getInstance();
      case 'turnedInNot':
        return MaterialIcon$turnedInNot_getInstance();
      case 'update':
        return MaterialIcon$update_getInstance();
      case 'verifiedUser':
        return MaterialIcon$verifiedUser_getInstance();
      case 'viewAgenda':
        return MaterialIcon$viewAgenda_getInstance();
      case 'viewArray':
        return MaterialIcon$viewArray_getInstance();
      case 'viewCarousel':
        return MaterialIcon$viewCarousel_getInstance();
      case 'viewColumn':
        return MaterialIcon$viewColumn_getInstance();
      case 'viewDay':
        return MaterialIcon$viewDay_getInstance();
      case 'viewHeadline':
        return MaterialIcon$viewHeadline_getInstance();
      case 'viewList':
        return MaterialIcon$viewList_getInstance();
      case 'viewModule':
        return MaterialIcon$viewModule_getInstance();
      case 'viewQuilt':
        return MaterialIcon$viewQuilt_getInstance();
      case 'viewStream':
        return MaterialIcon$viewStream_getInstance();
      case 'viewWeek':
        return MaterialIcon$viewWeek_getInstance();
      case 'visibility':
        return MaterialIcon$visibility_getInstance();
      case 'visibilityOff':
        return MaterialIcon$visibilityOff_getInstance();
      case 'watchLater':
        return MaterialIcon$watchLater_getInstance();
      case 'work':
        return MaterialIcon$work_getInstance();
      case 'youtubeSearchedFor':
        return MaterialIcon$youtubeSearchedFor_getInstance();
      case 'zoomIn':
        return MaterialIcon$zoomIn_getInstance();
      case 'zoomOut':
        return MaterialIcon$zoomOut_getInstance();
      case 'addAlert':
        return MaterialIcon$addAlert_getInstance();
      case 'error':
        return MaterialIcon$error_getInstance();
      case 'errorOutline':
        return MaterialIcon$errorOutline_getInstance();
      case 'warning':
        return MaterialIcon$warning_getInstance();
      case 'addToQueue':
        return MaterialIcon$addToQueue_getInstance();
      case 'airplay':
        return MaterialIcon$airplay_getInstance();
      case 'album':
        return MaterialIcon$album_getInstance();
      case 'artTrack':
        return MaterialIcon$artTrack_getInstance();
      case 'avTimer':
        return MaterialIcon$avTimer_getInstance();
      case 'brandingWatermark':
        return MaterialIcon$brandingWatermark_getInstance();
      case 'callToAction':
        return MaterialIcon$callToAction_getInstance();
      case 'closedCaption':
        return MaterialIcon$closedCaption_getInstance();
      case 'equalizer':
        return MaterialIcon$equalizer_getInstance();
      case 'explicit':
        return MaterialIcon$explicit_getInstance();
      case 'fastForward':
        return MaterialIcon$fastForward_getInstance();
      case 'fastRewind':
        return MaterialIcon$fastRewind_getInstance();
      case 'featuredPlayList':
        return MaterialIcon$featuredPlayList_getInstance();
      case 'featuredVideo':
        return MaterialIcon$featuredVideo_getInstance();
      case 'fiberDvr':
        return MaterialIcon$fiberDvr_getInstance();
      case 'fiberManualRecord':
        return MaterialIcon$fiberManualRecord_getInstance();
      case 'fiberNew':
        return MaterialIcon$fiberNew_getInstance();
      case 'fiberPin':
        return MaterialIcon$fiberPin_getInstance();
      case 'forward10':
        return MaterialIcon$forward10_getInstance();
      case 'forward30':
        return MaterialIcon$forward30_getInstance();
      case 'forward5':
        return MaterialIcon$forward5_getInstance();
      case 'games':
        return MaterialIcon$games_getInstance();
      case 'hd':
        return MaterialIcon$hd_getInstance();
      case 'hearing':
        return MaterialIcon$hearing_getInstance();
      case 'highQuality':
        return MaterialIcon$highQuality_getInstance();
      case 'libraryAdd':
        return MaterialIcon$libraryAdd_getInstance();
      case 'libraryBooks':
        return MaterialIcon$libraryBooks_getInstance();
      case 'libraryMusic':
        return MaterialIcon$libraryMusic_getInstance();
      case 'loop':
        return MaterialIcon$loop_getInstance();
      case 'mic':
        return MaterialIcon$mic_getInstance();
      case 'micNone':
        return MaterialIcon$micNone_getInstance();
      case 'micOff':
        return MaterialIcon$micOff_getInstance();
      case 'movie':
        return MaterialIcon$movie_getInstance();
      case 'musicVideo':
        return MaterialIcon$musicVideo_getInstance();
      case 'newReleases':
        return MaterialIcon$newReleases_getInstance();
      case 'note':
        return MaterialIcon$note_getInstance();
      case 'notInterested':
        return MaterialIcon$notInterested_getInstance();
      case 'pause':
        return MaterialIcon$pause_getInstance();
      case 'pauseCircleFilled':
        return MaterialIcon$pauseCircleFilled_getInstance();
      case 'pauseCircleOutline':
        return MaterialIcon$pauseCircleOutline_getInstance();
      case 'playlistAdd':
        return MaterialIcon$playlistAdd_getInstance();
      case 'playlistAddCheck':
        return MaterialIcon$playlistAddCheck_getInstance();
      case 'playlistPlay':
        return MaterialIcon$playlistPlay_getInstance();
      case 'playArrow':
        return MaterialIcon$playArrow_getInstance();
      case 'playCircleFilled':
        return MaterialIcon$playCircleFilled_getInstance();
      case 'playCircleOutline':
        return MaterialIcon$playCircleOutline_getInstance();
      case 'queue':
        return MaterialIcon$queue_getInstance();
      case 'queueMusic':
        return MaterialIcon$queueMusic_getInstance();
      case 'queuePlayNext':
        return MaterialIcon$queuePlayNext_getInstance();
      case 'radio':
        return MaterialIcon$radio_getInstance();
      case 'recentActors':
        return MaterialIcon$recentActors_getInstance();
      case 'removeFromQueue':
        return MaterialIcon$removeFromQueue_getInstance();
      case 'repeat':
        return MaterialIcon$repeat_getInstance();
      case 'repeatOne':
        return MaterialIcon$repeatOne_getInstance();
      case 'replay10':
        return MaterialIcon$replay10_getInstance();
      case 'replay':
        return MaterialIcon$replay_getInstance();
      case 'replay30':
        return MaterialIcon$replay30_getInstance();
      case 'replay5':
        return MaterialIcon$replay5_getInstance();
      case 'shuffle':
        return MaterialIcon$shuffle_getInstance();
      case 'skipNext':
        return MaterialIcon$skipNext_getInstance();
      case 'skipPrevious':
        return MaterialIcon$skipPrevious_getInstance();
      case 'slowMotionVideo':
        return MaterialIcon$slowMotionVideo_getInstance();
      case 'snooze':
        return MaterialIcon$snooze_getInstance();
      case 'sortByAlpha':
        return MaterialIcon$sortByAlpha_getInstance();
      case 'stop':
        return MaterialIcon$stop_getInstance();
      case 'subscriptions':
        return MaterialIcon$subscriptions_getInstance();
      case 'subtitles':
        return MaterialIcon$subtitles_getInstance();
      case 'surroundSound':
        return MaterialIcon$surroundSound_getInstance();
      case 'videocam':
        return MaterialIcon$videocam_getInstance();
      case 'videocamOff':
        return MaterialIcon$videocamOff_getInstance();
      case 'videoCall':
        return MaterialIcon$videoCall_getInstance();
      case 'videoLabel':
        return MaterialIcon$videoLabel_getInstance();
      case 'videoLibrary':
        return MaterialIcon$videoLibrary_getInstance();
      case 'volumeDown':
        return MaterialIcon$volumeDown_getInstance();
      case 'volumeMute':
        return MaterialIcon$volumeMute_getInstance();
      case 'volumeOff':
        return MaterialIcon$volumeOff_getInstance();
      case 'volumeUp':
        return MaterialIcon$volumeUp_getInstance();
      case 'web':
        return MaterialIcon$web_getInstance();
      case 'webAsset':
        return MaterialIcon$webAsset_getInstance();
      case 'business':
        return MaterialIcon$business_getInstance();
      case 'call':
        return MaterialIcon$call_getInstance();
      case 'callEnd':
        return MaterialIcon$callEnd_getInstance();
      case 'callMade':
        return MaterialIcon$callMade_getInstance();
      case 'callMerge':
        return MaterialIcon$callMerge_getInstance();
      case 'callMissed':
        return MaterialIcon$callMissed_getInstance();
      case 'callMissedOutgoing':
        return MaterialIcon$callMissedOutgoing_getInstance();
      case 'callReceived':
        return MaterialIcon$callReceived_getInstance();
      case 'callSplit':
        return MaterialIcon$callSplit_getInstance();
      case 'chat':
        return MaterialIcon$chat_getInstance();
      case 'chatBubble':
        return MaterialIcon$chatBubble_getInstance();
      case 'chatBubbleOutline':
        return MaterialIcon$chatBubbleOutline_getInstance();
      case 'clearAll':
        return MaterialIcon$clearAll_getInstance();
      case 'comment':
        return MaterialIcon$comment_getInstance();
      case 'contacts':
        return MaterialIcon$contacts_getInstance();
      case 'contactMail':
        return MaterialIcon$contactMail_getInstance();
      case 'contactPhone':
        return MaterialIcon$contactPhone_getInstance();
      case 'dialerSip':
        return MaterialIcon$dialerSip_getInstance();
      case 'dialpad':
        return MaterialIcon$dialpad_getInstance();
      case 'email':
        return MaterialIcon$email_getInstance();
      case 'forum':
        return MaterialIcon$forum_getInstance();
      case 'importContacts':
        return MaterialIcon$importContacts_getInstance();
      case 'importExport':
        return MaterialIcon$importExport_getInstance();
      case 'invertColorsOff':
        return MaterialIcon$invertColorsOff_getInstance();
      case 'liveHelp':
        return MaterialIcon$liveHelp_getInstance();
      case 'locationOff':
        return MaterialIcon$locationOff_getInstance();
      case 'locationOn':
        return MaterialIcon$locationOn_getInstance();
      case 'mailOutline':
        return MaterialIcon$mailOutline_getInstance();
      case 'message':
        return MaterialIcon$message_getInstance();
      case 'noSim':
        return MaterialIcon$noSim_getInstance();
      case 'phonelinkErase':
        return MaterialIcon$phonelinkErase_getInstance();
      case 'phonelinkLock':
        return MaterialIcon$phonelinkLock_getInstance();
      case 'phonelinkRing':
        return MaterialIcon$phonelinkRing_getInstance();
      case 'phonelinkSetup':
        return MaterialIcon$phonelinkSetup_getInstance();
      case 'phone':
        return MaterialIcon$phone_getInstance();
      case 'portableWifiOff':
        return MaterialIcon$portableWifiOff_getInstance();
      case 'presentToAll':
        return MaterialIcon$presentToAll_getInstance();
      case 'ringVolume':
        return MaterialIcon$ringVolume_getInstance();
      case 'rssFeed':
        return MaterialIcon$rssFeed_getInstance();
      case 'screenShare':
        return MaterialIcon$screenShare_getInstance();
      case 'speakerPhone':
        return MaterialIcon$speakerPhone_getInstance();
      case 'stayCurrentLandscape':
        return MaterialIcon$stayCurrentLandscape_getInstance();
      case 'stayCurrentPortrait':
        return MaterialIcon$stayCurrentPortrait_getInstance();
      case 'stayPrimaryLandscape':
        return MaterialIcon$stayPrimaryLandscape_getInstance();
      case 'stayPrimaryPortrait':
        return MaterialIcon$stayPrimaryPortrait_getInstance();
      case 'stopScreenShare':
        return MaterialIcon$stopScreenShare_getInstance();
      case 'swapCalls':
        return MaterialIcon$swapCalls_getInstance();
      case 'textsms':
        return MaterialIcon$textsms_getInstance();
      case 'voicemail':
        return MaterialIcon$voicemail_getInstance();
      case 'vpnKey':
        return MaterialIcon$vpnKey_getInstance();
      case 'add':
        return MaterialIcon$add_getInstance();
      case 'addBox':
        return MaterialIcon$addBox_getInstance();
      case 'addCircle':
        return MaterialIcon$addCircle_getInstance();
      case 'addCircleOutline':
        return MaterialIcon$addCircleOutline_getInstance();
      case 'archive':
        return MaterialIcon$archive_getInstance();
      case 'backspace':
        return MaterialIcon$backspace_getInstance();
      case 'block':
        return MaterialIcon$block_getInstance();
      case 'clear':
        return MaterialIcon$clear_getInstance();
      case 'contentCopy':
        return MaterialIcon$contentCopy_getInstance();
      case 'contentCut':
        return MaterialIcon$contentCut_getInstance();
      case 'contentPaste':
        return MaterialIcon$contentPaste_getInstance();
      case 'create':
        return MaterialIcon$create_getInstance();
      case 'deleteSweep':
        return MaterialIcon$deleteSweep_getInstance();
      case 'drafts':
        return MaterialIcon$drafts_getInstance();
      case 'filterList':
        return MaterialIcon$filterList_getInstance();
      case 'flag':
        return MaterialIcon$flag_getInstance();
      case 'fontDownload':
        return MaterialIcon$fontDownload_getInstance();
      case 'forward':
        return MaterialIcon$forward_getInstance();
      case 'gesture':
        return MaterialIcon$gesture_getInstance();
      case 'inbox':
        return MaterialIcon$inbox_getInstance();
      case 'link':
        return MaterialIcon$link_getInstance();
      case 'lowPriority':
        return MaterialIcon$lowPriority_getInstance();
      case 'mail':
        return MaterialIcon$mail_getInstance();
      case 'markunread':
        return MaterialIcon$markunread_getInstance();
      case 'moveToInbox':
        return MaterialIcon$moveToInbox_getInstance();
      case 'nextWeek':
        return MaterialIcon$nextWeek_getInstance();
      case 'redo':
        return MaterialIcon$redo_getInstance();
      case 'remove':
        return MaterialIcon$remove_getInstance();
      case 'removeCircle':
        return MaterialIcon$removeCircle_getInstance();
      case 'removeCircleOutline':
        return MaterialIcon$removeCircleOutline_getInstance();
      case 'reply':
        return MaterialIcon$reply_getInstance();
      case 'replyAll':
        return MaterialIcon$replyAll_getInstance();
      case 'report':
        return MaterialIcon$report_getInstance();
      case 'save':
        return MaterialIcon$save_getInstance();
      case 'selectAll':
        return MaterialIcon$selectAll_getInstance();
      case 'send':
        return MaterialIcon$send_getInstance();
      case 'sort':
        return MaterialIcon$sort_getInstance();
      case 'textFormat':
        return MaterialIcon$textFormat_getInstance();
      case 'unarchive':
        return MaterialIcon$unarchive_getInstance();
      case 'undo':
        return MaterialIcon$undo_getInstance();
      case 'weekend':
        return MaterialIcon$weekend_getInstance();
      case 'accessAlarms':
        return MaterialIcon$accessAlarms_getInstance();
      case 'accessAlarm':
        return MaterialIcon$accessAlarm_getInstance();
      case 'accessTime':
        return MaterialIcon$accessTime_getInstance();
      case 'addAlarm':
        return MaterialIcon$addAlarm_getInstance();
      case 'airplanemodeActive':
        return MaterialIcon$airplanemodeActive_getInstance();
      case 'airplanemodeInactive':
        return MaterialIcon$airplanemodeInactive_getInstance();
      case 'battery20':
        return MaterialIcon$battery20_getInstance();
      case 'battery30':
        return MaterialIcon$battery30_getInstance();
      case 'battery50':
        return MaterialIcon$battery50_getInstance();
      case 'battery60':
        return MaterialIcon$battery60_getInstance();
      case 'battery80':
        return MaterialIcon$battery80_getInstance();
      case 'battery90':
        return MaterialIcon$battery90_getInstance();
      case 'batteryAlert':
        return MaterialIcon$batteryAlert_getInstance();
      case 'batteryCharging20':
        return MaterialIcon$batteryCharging20_getInstance();
      case 'batteryCharging30':
        return MaterialIcon$batteryCharging30_getInstance();
      case 'batteryCharging50':
        return MaterialIcon$batteryCharging50_getInstance();
      case 'batteryCharging60':
        return MaterialIcon$batteryCharging60_getInstance();
      case 'batteryCharging80':
        return MaterialIcon$batteryCharging80_getInstance();
      case 'batteryCharging90':
        return MaterialIcon$batteryCharging90_getInstance();
      case 'batteryChargingFull':
        return MaterialIcon$batteryChargingFull_getInstance();
      case 'batteryFull':
        return MaterialIcon$batteryFull_getInstance();
      case 'batteryStd':
        return MaterialIcon$batteryStd_getInstance();
      case 'batteryUnknown':
        return MaterialIcon$batteryUnknown_getInstance();
      case 'bluetooth':
        return MaterialIcon$bluetooth_getInstance();
      case 'bluetoothConnected':
        return MaterialIcon$bluetoothConnected_getInstance();
      case 'bluetoothDisabled':
        return MaterialIcon$bluetoothDisabled_getInstance();
      case 'bluetoothSearching':
        return MaterialIcon$bluetoothSearching_getInstance();
      case 'brightnessAuto':
        return MaterialIcon$brightnessAuto_getInstance();
      case 'brightnessHigh':
        return MaterialIcon$brightnessHigh_getInstance();
      case 'brightnessLow':
        return MaterialIcon$brightnessLow_getInstance();
      case 'brightnessMedium':
        return MaterialIcon$brightnessMedium_getInstance();
      case 'dataUsage':
        return MaterialIcon$dataUsage_getInstance();
      case 'developerMode':
        return MaterialIcon$developerMode_getInstance();
      case 'devices':
        return MaterialIcon$devices_getInstance();
      case 'dvr':
        return MaterialIcon$dvr_getInstance();
      case 'gpsFixed':
        return MaterialIcon$gpsFixed_getInstance();
      case 'gpsNotFixed':
        return MaterialIcon$gpsNotFixed_getInstance();
      case 'gpsOff':
        return MaterialIcon$gpsOff_getInstance();
      case 'graphicEq':
        return MaterialIcon$graphicEq_getInstance();
      case 'locationDisabled':
        return MaterialIcon$locationDisabled_getInstance();
      case 'locationSearching':
        return MaterialIcon$locationSearching_getInstance();
      case 'networkCell':
        return MaterialIcon$networkCell_getInstance();
      case 'networkWifi':
        return MaterialIcon$networkWifi_getInstance();
      case 'nfc':
        return MaterialIcon$nfc_getInstance();
      case 'screenLockLandscape':
        return MaterialIcon$screenLockLandscape_getInstance();
      case 'screenLockPortrait':
        return MaterialIcon$screenLockPortrait_getInstance();
      case 'screenLockRotation':
        return MaterialIcon$screenLockRotation_getInstance();
      case 'screenRotation':
        return MaterialIcon$screenRotation_getInstance();
      case 'sdStorage':
        return MaterialIcon$sdStorage_getInstance();
      case 'settingsSystemDaydream':
        return MaterialIcon$settingsSystemDaydream_getInstance();
      case 'signalCellular0Bar':
        return MaterialIcon$signalCellular0Bar_getInstance();
      case 'signalCellular1Bar':
        return MaterialIcon$signalCellular1Bar_getInstance();
      case 'signalCellular2Bar':
        return MaterialIcon$signalCellular2Bar_getInstance();
      case 'signalCellular3Bar':
        return MaterialIcon$signalCellular3Bar_getInstance();
      case 'signalCellular4Bar':
        return MaterialIcon$signalCellular4Bar_getInstance();
      case 'signalCellularConnectedNoInternet0Bar':
        return MaterialIcon$signalCellularConnectedNoInternet0Bar_getInstance();
      case 'signalCellularConnectedNoInternet1Bar':
        return MaterialIcon$signalCellularConnectedNoInternet1Bar_getInstance();
      case 'signalCellularConnectedNoInternet2Bar':
        return MaterialIcon$signalCellularConnectedNoInternet2Bar_getInstance();
      case 'signalCellularConnectedNoInternet3Bar':
        return MaterialIcon$signalCellularConnectedNoInternet3Bar_getInstance();
      case 'signalCellularConnectedNoInternet4Bar':
        return MaterialIcon$signalCellularConnectedNoInternet4Bar_getInstance();
      case 'signalCellularNoSim':
        return MaterialIcon$signalCellularNoSim_getInstance();
      case 'signalCellularNull':
        return MaterialIcon$signalCellularNull_getInstance();
      case 'signalCellularOff':
        return MaterialIcon$signalCellularOff_getInstance();
      case 'signalWifi0Bar':
        return MaterialIcon$signalWifi0Bar_getInstance();
      case 'signalWifi1Bar':
        return MaterialIcon$signalWifi1Bar_getInstance();
      case 'signalWifi1BarLock':
        return MaterialIcon$signalWifi1BarLock_getInstance();
      case 'signalWifi2Bar':
        return MaterialIcon$signalWifi2Bar_getInstance();
      case 'signalWifi2BarLock':
        return MaterialIcon$signalWifi2BarLock_getInstance();
      case 'signalWifi3Bar':
        return MaterialIcon$signalWifi3Bar_getInstance();
      case 'signalWifi3BarLock':
        return MaterialIcon$signalWifi3BarLock_getInstance();
      case 'signalWifi4Bar':
        return MaterialIcon$signalWifi4Bar_getInstance();
      case 'signalWifi4BarLock':
        return MaterialIcon$signalWifi4BarLock_getInstance();
      case 'signalWifiOff':
        return MaterialIcon$signalWifiOff_getInstance();
      case 'signalWifiStatusbar1Bar26x24px':
        return MaterialIcon$signalWifiStatusbar1Bar26x24px_getInstance();
      case 'signalWifiStatusbar2Bar26x24px':
        return MaterialIcon$signalWifiStatusbar2Bar26x24px_getInstance();
      case 'signalWifiStatusbar3Bar26x24px':
        return MaterialIcon$signalWifiStatusbar3Bar26x24px_getInstance();
      case 'signalWifiStatusbar4Bar26x24px':
        return MaterialIcon$signalWifiStatusbar4Bar26x24px_getInstance();
      case 'signalWifiStatusbarConnectedNoInternet126x24px':
        return MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_getInstance();
      case 'signalWifiStatusbarConnectedNoInternet26x24px':
        return MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_getInstance();
      case 'signalWifiStatusbarConnectedNoInternet226x24px':
        return MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_getInstance();
      case 'signalWifiStatusbarConnectedNoInternet326x24px':
        return MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_getInstance();
      case 'signalWifiStatusbarConnectedNoInternet426x24px':
        return MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_getInstance();
      case 'signalWifiStatusbarNotConnected26x24px':
        return MaterialIcon$signalWifiStatusbarNotConnected26x24px_getInstance();
      case 'signalWifiStatusbarNull26x24px':
        return MaterialIcon$signalWifiStatusbarNull26x24px_getInstance();
      case 'storage':
        return MaterialIcon$storage_getInstance();
      case 'usb':
        return MaterialIcon$usb_getInstance();
      case 'wallpaper':
        return MaterialIcon$wallpaper_getInstance();
      case 'widgets':
        return MaterialIcon$widgets_getInstance();
      case 'wifiLock':
        return MaterialIcon$wifiLock_getInstance();
      case 'wifiTethering':
        return MaterialIcon$wifiTethering_getInstance();
      case 'attachFile':
        return MaterialIcon$attachFile_getInstance();
      case 'attachMoney':
        return MaterialIcon$attachMoney_getInstance();
      case 'borderAll':
        return MaterialIcon$borderAll_getInstance();
      case 'borderBottom':
        return MaterialIcon$borderBottom_getInstance();
      case 'borderClear':
        return MaterialIcon$borderClear_getInstance();
      case 'borderColor':
        return MaterialIcon$borderColor_getInstance();
      case 'borderHorizontal':
        return MaterialIcon$borderHorizontal_getInstance();
      case 'borderInner':
        return MaterialIcon$borderInner_getInstance();
      case 'borderLeft':
        return MaterialIcon$borderLeft_getInstance();
      case 'borderOuter':
        return MaterialIcon$borderOuter_getInstance();
      case 'borderRight':
        return MaterialIcon$borderRight_getInstance();
      case 'borderStyle':
        return MaterialIcon$borderStyle_getInstance();
      case 'borderTop':
        return MaterialIcon$borderTop_getInstance();
      case 'borderVertical':
        return MaterialIcon$borderVertical_getInstance();
      case 'bubbleChart':
        return MaterialIcon$bubbleChart_getInstance();
      case 'dragHandle':
        return MaterialIcon$dragHandle_getInstance();
      case 'formatAlignCenter':
        return MaterialIcon$formatAlignCenter_getInstance();
      case 'formatAlignJustify':
        return MaterialIcon$formatAlignJustify_getInstance();
      case 'formatAlignLeft':
        return MaterialIcon$formatAlignLeft_getInstance();
      case 'formatAlignRight':
        return MaterialIcon$formatAlignRight_getInstance();
      case 'formatBold':
        return MaterialIcon$formatBold_getInstance();
      case 'formatClear':
        return MaterialIcon$formatClear_getInstance();
      case 'formatColorFill':
        return MaterialIcon$formatColorFill_getInstance();
      case 'formatColorReset':
        return MaterialIcon$formatColorReset_getInstance();
      case 'formatColorText':
        return MaterialIcon$formatColorText_getInstance();
      case 'formatIndentDecrease':
        return MaterialIcon$formatIndentDecrease_getInstance();
      case 'formatIndentIncrease':
        return MaterialIcon$formatIndentIncrease_getInstance();
      case 'formatItalic':
        return MaterialIcon$formatItalic_getInstance();
      case 'formatLineSpacing':
        return MaterialIcon$formatLineSpacing_getInstance();
      case 'formatListBulleted':
        return MaterialIcon$formatListBulleted_getInstance();
      case 'formatListNumbered':
        return MaterialIcon$formatListNumbered_getInstance();
      case 'formatPaint':
        return MaterialIcon$formatPaint_getInstance();
      case 'formatQuote':
        return MaterialIcon$formatQuote_getInstance();
      case 'formatShapes':
        return MaterialIcon$formatShapes_getInstance();
      case 'formatSize':
        return MaterialIcon$formatSize_getInstance();
      case 'formatStrikethrough':
        return MaterialIcon$formatStrikethrough_getInstance();
      case 'formatTextdirectionLToR':
        return MaterialIcon$formatTextdirectionLToR_getInstance();
      case 'formatTextdirectionRToL':
        return MaterialIcon$formatTextdirectionRToL_getInstance();
      case 'formatUnderlined':
        return MaterialIcon$formatUnderlined_getInstance();
      case 'functions':
        return MaterialIcon$functions_getInstance();
      case 'highlight':
        return MaterialIcon$highlight_getInstance();
      case 'insertChart':
        return MaterialIcon$insertChart_getInstance();
      case 'insertComment':
        return MaterialIcon$insertComment_getInstance();
      case 'insertDriveFile':
        return MaterialIcon$insertDriveFile_getInstance();
      case 'insertEmoticon':
        return MaterialIcon$insertEmoticon_getInstance();
      case 'insertInvitation':
        return MaterialIcon$insertInvitation_getInstance();
      case 'insertLink':
        return MaterialIcon$insertLink_getInstance();
      case 'insertPhoto':
        return MaterialIcon$insertPhoto_getInstance();
      case 'linearScale':
        return MaterialIcon$linearScale_getInstance();
      case 'mergeType':
        return MaterialIcon$mergeType_getInstance();
      case 'modeComment':
        return MaterialIcon$modeComment_getInstance();
      case 'modeEdit':
        return MaterialIcon$modeEdit_getInstance();
      case 'monetizationOn':
        return MaterialIcon$monetizationOn_getInstance();
      case 'moneyOff':
        return MaterialIcon$moneyOff_getInstance();
      case 'multilineChart':
        return MaterialIcon$multilineChart_getInstance();
      case 'pieChart':
        return MaterialIcon$pieChart_getInstance();
      case 'pieChartOutlined':
        return MaterialIcon$pieChartOutlined_getInstance();
      case 'publish':
        return MaterialIcon$publish_getInstance();
      case 'shortText':
        return MaterialIcon$shortText_getInstance();
      case 'showChart':
        return MaterialIcon$showChart_getInstance();
      case 'spaceBar':
        return MaterialIcon$spaceBar_getInstance();
      case 'strikethroughS':
        return MaterialIcon$strikethroughS_getInstance();
      case 'textFields':
        return MaterialIcon$textFields_getInstance();
      case 'title':
        return MaterialIcon$title_getInstance();
      case 'verticalAlignBottom':
        return MaterialIcon$verticalAlignBottom_getInstance();
      case 'verticalAlignCenter':
        return MaterialIcon$verticalAlignCenter_getInstance();
      case 'verticalAlignTop':
        return MaterialIcon$verticalAlignTop_getInstance();
      case 'wrapText':
        return MaterialIcon$wrapText_getInstance();
      case 'attachment':
        return MaterialIcon$attachment_getInstance();
      case 'cloud':
        return MaterialIcon$cloud_getInstance();
      case 'cloudCircle':
        return MaterialIcon$cloudCircle_getInstance();
      case 'cloudDone':
        return MaterialIcon$cloudDone_getInstance();
      case 'cloudDownload':
        return MaterialIcon$cloudDownload_getInstance();
      case 'cloudOff':
        return MaterialIcon$cloudOff_getInstance();
      case 'cloudQueue':
        return MaterialIcon$cloudQueue_getInstance();
      case 'cloudUpload':
        return MaterialIcon$cloudUpload_getInstance();
      case 'createNewFolder':
        return MaterialIcon$createNewFolder_getInstance();
      case 'fileDownload':
        return MaterialIcon$fileDownload_getInstance();
      case 'fileUpload':
        return MaterialIcon$fileUpload_getInstance();
      case 'folder':
        return MaterialIcon$folder_getInstance();
      case 'folderOpen':
        return MaterialIcon$folderOpen_getInstance();
      case 'folderShared':
        return MaterialIcon$folderShared_getInstance();
      case 'cast':
        return MaterialIcon$cast_getInstance();
      case 'castConnected':
        return MaterialIcon$castConnected_getInstance();
      case 'computer':
        return MaterialIcon$computer_getInstance();
      case 'desktopMac':
        return MaterialIcon$desktopMac_getInstance();
      case 'desktopWindows':
        return MaterialIcon$desktopWindows_getInstance();
      case 'developerBoard':
        return MaterialIcon$developerBoard_getInstance();
      case 'devicesOther':
        return MaterialIcon$devicesOther_getInstance();
      case 'deviceHub':
        return MaterialIcon$deviceHub_getInstance();
      case 'dock':
        return MaterialIcon$dock_getInstance();
      case 'gamepad':
        return MaterialIcon$gamepad_getInstance();
      case 'headset':
        return MaterialIcon$headset_getInstance();
      case 'headsetMic':
        return MaterialIcon$headsetMic_getInstance();
      case 'keyboard':
        return MaterialIcon$keyboard_getInstance();
      case 'keyboardArrowDown':
        return MaterialIcon$keyboardArrowDown_getInstance();
      case 'keyboardArrowLeft':
        return MaterialIcon$keyboardArrowLeft_getInstance();
      case 'keyboardArrowRight':
        return MaterialIcon$keyboardArrowRight_getInstance();
      case 'keyboardArrowUp':
        return MaterialIcon$keyboardArrowUp_getInstance();
      case 'keyboardBackspace':
        return MaterialIcon$keyboardBackspace_getInstance();
      case 'keyboardCapslock':
        return MaterialIcon$keyboardCapslock_getInstance();
      case 'keyboardHide':
        return MaterialIcon$keyboardHide_getInstance();
      case 'keyboardReturn':
        return MaterialIcon$keyboardReturn_getInstance();
      case 'keyboardTab':
        return MaterialIcon$keyboardTab_getInstance();
      case 'keyboardVoice':
        return MaterialIcon$keyboardVoice_getInstance();
      case 'laptop':
        return MaterialIcon$laptop_getInstance();
      case 'laptopChromebook':
        return MaterialIcon$laptopChromebook_getInstance();
      case 'laptopMac':
        return MaterialIcon$laptopMac_getInstance();
      case 'laptopWindows':
        return MaterialIcon$laptopWindows_getInstance();
      case 'memory':
        return MaterialIcon$memory_getInstance();
      case 'mouse':
        return MaterialIcon$mouse_getInstance();
      case 'phonelink':
        return MaterialIcon$phonelink_getInstance();
      case 'phonelinkOff':
        return MaterialIcon$phonelinkOff_getInstance();
      case 'phoneAndroid':
        return MaterialIcon$phoneAndroid_getInstance();
      case 'phoneIphone':
        return MaterialIcon$phoneIphone_getInstance();
      case 'powerInput':
        return MaterialIcon$powerInput_getInstance();
      case 'router':
        return MaterialIcon$router_getInstance();
      case 'scanner':
        return MaterialIcon$scanner_getInstance();
      case 'security':
        return MaterialIcon$security_getInstance();
      case 'simCard':
        return MaterialIcon$simCard_getInstance();
      case 'smartphone':
        return MaterialIcon$smartphone_getInstance();
      case 'speaker':
        return MaterialIcon$speaker_getInstance();
      case 'speakerGroup':
        return MaterialIcon$speakerGroup_getInstance();
      case 'tablet':
        return MaterialIcon$tablet_getInstance();
      case 'tabletAndroid':
        return MaterialIcon$tabletAndroid_getInstance();
      case 'tabletMac':
        return MaterialIcon$tabletMac_getInstance();
      case 'toys':
        return MaterialIcon$toys_getInstance();
      case 'tv':
        return MaterialIcon$tv_getInstance();
      case 'videogameAsset':
        return MaterialIcon$videogameAsset_getInstance();
      case 'watch':
        return MaterialIcon$watch_getInstance();
      case 'addAPhoto':
        return MaterialIcon$addAPhoto_getInstance();
      case 'addToPhotos':
        return MaterialIcon$addToPhotos_getInstance();
      case 'adjust':
        return MaterialIcon$adjust_getInstance();
      case 'assistant':
        return MaterialIcon$assistant_getInstance();
      case 'assistantPhoto':
        return MaterialIcon$assistantPhoto_getInstance();
      case 'audiotrack':
        return MaterialIcon$audiotrack_getInstance();
      case 'blurCircular':
        return MaterialIcon$blurCircular_getInstance();
      case 'blurLinear':
        return MaterialIcon$blurLinear_getInstance();
      case 'blurOff':
        return MaterialIcon$blurOff_getInstance();
      case 'blurOn':
        return MaterialIcon$blurOn_getInstance();
      case 'brightness1':
        return MaterialIcon$brightness1_getInstance();
      case 'brightness2':
        return MaterialIcon$brightness2_getInstance();
      case 'brightness3':
        return MaterialIcon$brightness3_getInstance();
      case 'brightness4':
        return MaterialIcon$brightness4_getInstance();
      case 'brightness5':
        return MaterialIcon$brightness5_getInstance();
      case 'brightness6':
        return MaterialIcon$brightness6_getInstance();
      case 'brightness7':
        return MaterialIcon$brightness7_getInstance();
      case 'brokenImage':
        return MaterialIcon$brokenImage_getInstance();
      case 'brush':
        return MaterialIcon$brush_getInstance();
      case 'burstMode':
        return MaterialIcon$burstMode_getInstance();
      case 'camera':
        return MaterialIcon$camera_getInstance();
      case 'cameraAlt':
        return MaterialIcon$cameraAlt_getInstance();
      case 'cameraFront':
        return MaterialIcon$cameraFront_getInstance();
      case 'cameraRear':
        return MaterialIcon$cameraRear_getInstance();
      case 'cameraRoll':
        return MaterialIcon$cameraRoll_getInstance();
      case 'centerFocusStrong':
        return MaterialIcon$centerFocusStrong_getInstance();
      case 'centerFocusWeak':
        return MaterialIcon$centerFocusWeak_getInstance();
      case 'collections':
        return MaterialIcon$collections_getInstance();
      case 'collectionsBookmark':
        return MaterialIcon$collectionsBookmark_getInstance();
      case 'colorize':
        return MaterialIcon$colorize_getInstance();
      case 'colorLens':
        return MaterialIcon$colorLens_getInstance();
      case 'compare':
        return MaterialIcon$compare_getInstance();
      case 'controlPoint':
        return MaterialIcon$controlPoint_getInstance();
      case 'controlPointDuplicate':
        return MaterialIcon$controlPointDuplicate_getInstance();
      case 'crop169':
        return MaterialIcon$crop169_getInstance();
      case 'crop':
        return MaterialIcon$crop_getInstance();
      case 'crop32':
        return MaterialIcon$crop32_getInstance();
      case 'crop54':
        return MaterialIcon$crop54_getInstance();
      case 'crop75':
        return MaterialIcon$crop75_getInstance();
      case 'cropDin':
        return MaterialIcon$cropDin_getInstance();
      case 'cropFree':
        return MaterialIcon$cropFree_getInstance();
      case 'cropLandscape':
        return MaterialIcon$cropLandscape_getInstance();
      case 'cropOriginal':
        return MaterialIcon$cropOriginal_getInstance();
      case 'cropPortrait':
        return MaterialIcon$cropPortrait_getInstance();
      case 'cropRotate':
        return MaterialIcon$cropRotate_getInstance();
      case 'cropSquare':
        return MaterialIcon$cropSquare_getInstance();
      case 'dehaze':
        return MaterialIcon$dehaze_getInstance();
      case 'details':
        return MaterialIcon$details_getInstance();
      case 'edit':
        return MaterialIcon$edit_getInstance();
      case 'exposure':
        return MaterialIcon$exposure_getInstance();
      case 'exposureNeg1':
        return MaterialIcon$exposureNeg1_getInstance();
      case 'exposureNeg2':
        return MaterialIcon$exposureNeg2_getInstance();
      case 'exposurePlus1':
        return MaterialIcon$exposurePlus1_getInstance();
      case 'exposurePlus2':
        return MaterialIcon$exposurePlus2_getInstance();
      case 'exposureZero':
        return MaterialIcon$exposureZero_getInstance();
      case 'filter1':
        return MaterialIcon$filter1_getInstance();
      case 'filter':
        return MaterialIcon$filter_getInstance();
      case 'filter2':
        return MaterialIcon$filter2_getInstance();
      case 'filter3':
        return MaterialIcon$filter3_getInstance();
      case 'filter4':
        return MaterialIcon$filter4_getInstance();
      case 'filter5':
        return MaterialIcon$filter5_getInstance();
      case 'filter6':
        return MaterialIcon$filter6_getInstance();
      case 'filter7':
        return MaterialIcon$filter7_getInstance();
      case 'filter8':
        return MaterialIcon$filter8_getInstance();
      case 'filter9':
        return MaterialIcon$filter9_getInstance();
      case 'filter9Plus':
        return MaterialIcon$filter9Plus_getInstance();
      case 'filterBAndW':
        return MaterialIcon$filterBAndW_getInstance();
      case 'filterCenterFocus':
        return MaterialIcon$filterCenterFocus_getInstance();
      case 'filterDrama':
        return MaterialIcon$filterDrama_getInstance();
      case 'filterFrames':
        return MaterialIcon$filterFrames_getInstance();
      case 'filterHdr':
        return MaterialIcon$filterHdr_getInstance();
      case 'filterNone':
        return MaterialIcon$filterNone_getInstance();
      case 'filterTiltShift':
        return MaterialIcon$filterTiltShift_getInstance();
      case 'filterVintage':
        return MaterialIcon$filterVintage_getInstance();
      case 'flare':
        return MaterialIcon$flare_getInstance();
      case 'flashAuto':
        return MaterialIcon$flashAuto_getInstance();
      case 'flashOff':
        return MaterialIcon$flashOff_getInstance();
      case 'flashOn':
        return MaterialIcon$flashOn_getInstance();
      case 'flip':
        return MaterialIcon$flip_getInstance();
      case 'gradient':
        return MaterialIcon$gradient_getInstance();
      case 'grain':
        return MaterialIcon$grain_getInstance();
      case 'gridOff':
        return MaterialIcon$gridOff_getInstance();
      case 'gridOn':
        return MaterialIcon$gridOn_getInstance();
      case 'hdrOff':
        return MaterialIcon$hdrOff_getInstance();
      case 'hdrOn':
        return MaterialIcon$hdrOn_getInstance();
      case 'hdrStrong':
        return MaterialIcon$hdrStrong_getInstance();
      case 'hdrWeak':
        return MaterialIcon$hdrWeak_getInstance();
      case 'healing':
        return MaterialIcon$healing_getInstance();
      case 'image':
        return MaterialIcon$image_getInstance();
      case 'imageAspectRatio':
        return MaterialIcon$imageAspectRatio_getInstance();
      case 'iso':
        return MaterialIcon$iso_getInstance();
      case 'landscape':
        return MaterialIcon$landscape_getInstance();
      case 'leakAdd':
        return MaterialIcon$leakAdd_getInstance();
      case 'leakRemove':
        return MaterialIcon$leakRemove_getInstance();
      case 'lens':
        return MaterialIcon$lens_getInstance();
      case 'linkedCamera':
        return MaterialIcon$linkedCamera_getInstance();
      case 'looks':
        return MaterialIcon$looks_getInstance();
      case 'looks3':
        return MaterialIcon$looks3_getInstance();
      case 'looks4':
        return MaterialIcon$looks4_getInstance();
      case 'looks5':
        return MaterialIcon$looks5_getInstance();
      case 'looks6':
        return MaterialIcon$looks6_getInstance();
      case 'looksOne':
        return MaterialIcon$looksOne_getInstance();
      case 'looksTwo':
        return MaterialIcon$looksTwo_getInstance();
      case 'loupe':
        return MaterialIcon$loupe_getInstance();
      case 'monochromePhotos':
        return MaterialIcon$monochromePhotos_getInstance();
      case 'movieCreation':
        return MaterialIcon$movieCreation_getInstance();
      case 'movieFilter':
        return MaterialIcon$movieFilter_getInstance();
      case 'musicNote':
        return MaterialIcon$musicNote_getInstance();
      case 'nature':
        return MaterialIcon$nature_getInstance();
      case 'naturePeople':
        return MaterialIcon$naturePeople_getInstance();
      case 'navigateBefore':
        return MaterialIcon$navigateBefore_getInstance();
      case 'navigateNext':
        return MaterialIcon$navigateNext_getInstance();
      case 'palette':
        return MaterialIcon$palette_getInstance();
      case 'panorama':
        return MaterialIcon$panorama_getInstance();
      case 'panoramaFishEye':
        return MaterialIcon$panoramaFishEye_getInstance();
      case 'panoramaHorizontal':
        return MaterialIcon$panoramaHorizontal_getInstance();
      case 'panoramaVertical':
        return MaterialIcon$panoramaVertical_getInstance();
      case 'panoramaWideAngle':
        return MaterialIcon$panoramaWideAngle_getInstance();
      case 'photo':
        return MaterialIcon$photo_getInstance();
      case 'photoAlbum':
        return MaterialIcon$photoAlbum_getInstance();
      case 'photoCamera':
        return MaterialIcon$photoCamera_getInstance();
      case 'photoFilter':
        return MaterialIcon$photoFilter_getInstance();
      case 'photoLibrary':
        return MaterialIcon$photoLibrary_getInstance();
      case 'photoSizeSelectActual':
        return MaterialIcon$photoSizeSelectActual_getInstance();
      case 'photoSizeSelectLarge':
        return MaterialIcon$photoSizeSelectLarge_getInstance();
      case 'photoSizeSelectSmall':
        return MaterialIcon$photoSizeSelectSmall_getInstance();
      case 'pictureAsPdf':
        return MaterialIcon$pictureAsPdf_getInstance();
      case 'portrait':
        return MaterialIcon$portrait_getInstance();
      case 'removeRedEye':
        return MaterialIcon$removeRedEye_getInstance();
      case 'rotate90DegreesCcw':
        return MaterialIcon$rotate90DegreesCcw_getInstance();
      case 'rotateLeft':
        return MaterialIcon$rotateLeft_getInstance();
      case 'rotateRight':
        return MaterialIcon$rotateRight_getInstance();
      case 'slideshow':
        return MaterialIcon$slideshow_getInstance();
      case 'straighten':
        return MaterialIcon$straighten_getInstance();
      case 'style':
        return MaterialIcon$style_getInstance();
      case 'switchCamera':
        return MaterialIcon$switchCamera_getInstance();
      case 'switchVideo':
        return MaterialIcon$switchVideo_getInstance();
      case 'tagFaces':
        return MaterialIcon$tagFaces_getInstance();
      case 'texture':
        return MaterialIcon$texture_getInstance();
      case 'timelapse':
        return MaterialIcon$timelapse_getInstance();
      case 'timer10':
        return MaterialIcon$timer10_getInstance();
      case 'timer':
        return MaterialIcon$timer_getInstance();
      case 'timer3':
        return MaterialIcon$timer3_getInstance();
      case 'timerOff':
        return MaterialIcon$timerOff_getInstance();
      case 'tonality':
        return MaterialIcon$tonality_getInstance();
      case 'transform':
        return MaterialIcon$transform_getInstance();
      case 'tune':
        return MaterialIcon$tune_getInstance();
      case 'viewComfy':
        return MaterialIcon$viewComfy_getInstance();
      case 'viewCompact':
        return MaterialIcon$viewCompact_getInstance();
      case 'vignette':
        return MaterialIcon$vignette_getInstance();
      case 'wbAuto':
        return MaterialIcon$wbAuto_getInstance();
      case 'wbCloudy':
        return MaterialIcon$wbCloudy_getInstance();
      case 'wbIncandescent':
        return MaterialIcon$wbIncandescent_getInstance();
      case 'wbIridescent':
        return MaterialIcon$wbIridescent_getInstance();
      case 'wbSunny':
        return MaterialIcon$wbSunny_getInstance();
      case 'addLocation':
        return MaterialIcon$addLocation_getInstance();
      case 'beenhere':
        return MaterialIcon$beenhere_getInstance();
      case 'directions':
        return MaterialIcon$directions_getInstance();
      case 'directionsBike':
        return MaterialIcon$directionsBike_getInstance();
      case 'directionsBoat':
        return MaterialIcon$directionsBoat_getInstance();
      case 'directionsBus':
        return MaterialIcon$directionsBus_getInstance();
      case 'directionsCar':
        return MaterialIcon$directionsCar_getInstance();
      case 'directionsRailway':
        return MaterialIcon$directionsRailway_getInstance();
      case 'directionsRun':
        return MaterialIcon$directionsRun_getInstance();
      case 'directionsSubway':
        return MaterialIcon$directionsSubway_getInstance();
      case 'directionsTransit':
        return MaterialIcon$directionsTransit_getInstance();
      case 'directionsWalk':
        return MaterialIcon$directionsWalk_getInstance();
      case 'editLocation':
        return MaterialIcon$editLocation_getInstance();
      case 'evStation':
        return MaterialIcon$evStation_getInstance();
      case 'flight':
        return MaterialIcon$flight_getInstance();
      case 'hotel':
        return MaterialIcon$hotel_getInstance();
      case 'layers':
        return MaterialIcon$layers_getInstance();
      case 'layersClear':
        return MaterialIcon$layersClear_getInstance();
      case 'localActivity':
        return MaterialIcon$localActivity_getInstance();
      case 'localAirport':
        return MaterialIcon$localAirport_getInstance();
      case 'localAtm':
        return MaterialIcon$localAtm_getInstance();
      case 'localBar':
        return MaterialIcon$localBar_getInstance();
      case 'localCafe':
        return MaterialIcon$localCafe_getInstance();
      case 'localCarWash':
        return MaterialIcon$localCarWash_getInstance();
      case 'localConvenienceStore':
        return MaterialIcon$localConvenienceStore_getInstance();
      case 'localDining':
        return MaterialIcon$localDining_getInstance();
      case 'localDrink':
        return MaterialIcon$localDrink_getInstance();
      case 'localFlorist':
        return MaterialIcon$localFlorist_getInstance();
      case 'localGasStation':
        return MaterialIcon$localGasStation_getInstance();
      case 'localGroceryStore':
        return MaterialIcon$localGroceryStore_getInstance();
      case 'localHospital':
        return MaterialIcon$localHospital_getInstance();
      case 'localHotel':
        return MaterialIcon$localHotel_getInstance();
      case 'localLaundryService':
        return MaterialIcon$localLaundryService_getInstance();
      case 'localLibrary':
        return MaterialIcon$localLibrary_getInstance();
      case 'localMall':
        return MaterialIcon$localMall_getInstance();
      case 'localMovies':
        return MaterialIcon$localMovies_getInstance();
      case 'localOffer':
        return MaterialIcon$localOffer_getInstance();
      case 'localParking':
        return MaterialIcon$localParking_getInstance();
      case 'localPharmacy':
        return MaterialIcon$localPharmacy_getInstance();
      case 'localPhone':
        return MaterialIcon$localPhone_getInstance();
      case 'localPizza':
        return MaterialIcon$localPizza_getInstance();
      case 'localPlay':
        return MaterialIcon$localPlay_getInstance();
      case 'localPostOffice':
        return MaterialIcon$localPostOffice_getInstance();
      case 'localPrintshop':
        return MaterialIcon$localPrintshop_getInstance();
      case 'localSee':
        return MaterialIcon$localSee_getInstance();
      case 'localShipping':
        return MaterialIcon$localShipping_getInstance();
      case 'localTaxi':
        return MaterialIcon$localTaxi_getInstance();
      case 'map':
        return MaterialIcon$map_getInstance();
      case 'myLocation':
        return MaterialIcon$myLocation_getInstance();
      case 'navigation':
        return MaterialIcon$navigation_getInstance();
      case 'nearMe':
        return MaterialIcon$nearMe_getInstance();
      case 'personPin':
        return MaterialIcon$personPin_getInstance();
      case 'personPinCircle':
        return MaterialIcon$personPinCircle_getInstance();
      case 'pinDrop':
        return MaterialIcon$pinDrop_getInstance();
      case 'place':
        return MaterialIcon$place_getInstance();
      case 'rateReview':
        return MaterialIcon$rateReview_getInstance();
      case 'restaurant':
        return MaterialIcon$restaurant_getInstance();
      case 'restaurantMenu':
        return MaterialIcon$restaurantMenu_getInstance();
      case 'satellite':
        return MaterialIcon$satellite_getInstance();
      case 'storeMallDirectory':
        return MaterialIcon$storeMallDirectory_getInstance();
      case 'streetview':
        return MaterialIcon$streetview_getInstance();
      case 'subway':
        return MaterialIcon$subway_getInstance();
      case 'terrain':
        return MaterialIcon$terrain_getInstance();
      case 'traffic':
        return MaterialIcon$traffic_getInstance();
      case 'train':
        return MaterialIcon$train_getInstance();
      case 'tram':
        return MaterialIcon$tram_getInstance();
      case 'transferWithinAStation':
        return MaterialIcon$transferWithinAStation_getInstance();
      case 'zoomOutMap':
        return MaterialIcon$zoomOutMap_getInstance();
      case 'apps':
        return MaterialIcon$apps_getInstance();
      case 'arrowBack':
        return MaterialIcon$arrowBack_getInstance();
      case 'arrowDownward':
        return MaterialIcon$arrowDownward_getInstance();
      case 'arrowDropDown':
        return MaterialIcon$arrowDropDown_getInstance();
      case 'arrowDropDownCircle':
        return MaterialIcon$arrowDropDownCircle_getInstance();
      case 'arrowDropUp':
        return MaterialIcon$arrowDropUp_getInstance();
      case 'arrowForward':
        return MaterialIcon$arrowForward_getInstance();
      case 'arrowUpward':
        return MaterialIcon$arrowUpward_getInstance();
      case 'cancel':
        return MaterialIcon$cancel_getInstance();
      case 'check':
        return MaterialIcon$check_getInstance();
      case 'chevronLeft':
        return MaterialIcon$chevronLeft_getInstance();
      case 'chevronRight':
        return MaterialIcon$chevronRight_getInstance();
      case 'close':
        return MaterialIcon$close_getInstance();
      case 'expandLess':
        return MaterialIcon$expandLess_getInstance();
      case 'expandMore':
        return MaterialIcon$expandMore_getInstance();
      case 'firstPage':
        return MaterialIcon$firstPage_getInstance();
      case 'fullscreen':
        return MaterialIcon$fullscreen_getInstance();
      case 'fullscreenExit':
        return MaterialIcon$fullscreenExit_getInstance();
      case 'lastPage':
        return MaterialIcon$lastPage_getInstance();
      case 'menu':
        return MaterialIcon$menu_getInstance();
      case 'moreHoriz':
        return MaterialIcon$moreHoriz_getInstance();
      case 'moreVert':
        return MaterialIcon$moreVert_getInstance();
      case 'refresh':
        return MaterialIcon$refresh_getInstance();
      case 'subdirectoryArrowLeft':
        return MaterialIcon$subdirectoryArrowLeft_getInstance();
      case 'subdirectoryArrowRight':
        return MaterialIcon$subdirectoryArrowRight_getInstance();
      case 'unfoldLess':
        return MaterialIcon$unfoldLess_getInstance();
      case 'unfoldMore':
        return MaterialIcon$unfoldMore_getInstance();
      case 'adb':
        return MaterialIcon$adb_getInstance();
      case 'airlineSeatFlat':
        return MaterialIcon$airlineSeatFlat_getInstance();
      case 'airlineSeatFlatAngled':
        return MaterialIcon$airlineSeatFlatAngled_getInstance();
      case 'airlineSeatIndividualSuite':
        return MaterialIcon$airlineSeatIndividualSuite_getInstance();
      case 'airlineSeatLegroomExtra':
        return MaterialIcon$airlineSeatLegroomExtra_getInstance();
      case 'airlineSeatLegroomNormal':
        return MaterialIcon$airlineSeatLegroomNormal_getInstance();
      case 'airlineSeatLegroomReduced':
        return MaterialIcon$airlineSeatLegroomReduced_getInstance();
      case 'airlineSeatReclineExtra':
        return MaterialIcon$airlineSeatReclineExtra_getInstance();
      case 'airlineSeatReclineNormal':
        return MaterialIcon$airlineSeatReclineNormal_getInstance();
      case 'bluetoothAudio':
        return MaterialIcon$bluetoothAudio_getInstance();
      case 'confirmationNumber':
        return MaterialIcon$confirmationNumber_getInstance();
      case 'discFull':
        return MaterialIcon$discFull_getInstance();
      case 'doNotDisturb':
        return MaterialIcon$doNotDisturb_getInstance();
      case 'doNotDisturbAlt':
        return MaterialIcon$doNotDisturbAlt_getInstance();
      case 'doNotDisturbOff':
        return MaterialIcon$doNotDisturbOff_getInstance();
      case 'doNotDisturbOn':
        return MaterialIcon$doNotDisturbOn_getInstance();
      case 'driveEta':
        return MaterialIcon$driveEta_getInstance();
      case 'enhancedEncryption':
        return MaterialIcon$enhancedEncryption_getInstance();
      case 'eventAvailable':
        return MaterialIcon$eventAvailable_getInstance();
      case 'eventBusy':
        return MaterialIcon$eventBusy_getInstance();
      case 'eventNote':
        return MaterialIcon$eventNote_getInstance();
      case 'folderSpecial':
        return MaterialIcon$folderSpecial_getInstance();
      case 'liveTv':
        return MaterialIcon$liveTv_getInstance();
      case 'mms':
        return MaterialIcon$mms_getInstance();
      case 'more':
        return MaterialIcon$more_getInstance();
      case 'networkCheck':
        return MaterialIcon$networkCheck_getInstance();
      case 'networkLocked':
        return MaterialIcon$networkLocked_getInstance();
      case 'noEncryption':
        return MaterialIcon$noEncryption_getInstance();
      case 'ondemandVideo':
        return MaterialIcon$ondemandVideo_getInstance();
      case 'personalVideo':
        return MaterialIcon$personalVideo_getInstance();
      case 'phoneBluetoothSpeaker':
        return MaterialIcon$phoneBluetoothSpeaker_getInstance();
      case 'phoneForwarded':
        return MaterialIcon$phoneForwarded_getInstance();
      case 'phoneInTalk':
        return MaterialIcon$phoneInTalk_getInstance();
      case 'phoneLocked':
        return MaterialIcon$phoneLocked_getInstance();
      case 'phoneMissed':
        return MaterialIcon$phoneMissed_getInstance();
      case 'phonePaused':
        return MaterialIcon$phonePaused_getInstance();
      case 'power':
        return MaterialIcon$power_getInstance();
      case 'priorityHigh':
        return MaterialIcon$priorityHigh_getInstance();
      case 'rvHookup':
        return MaterialIcon$rvHookup_getInstance();
      case 'sdCard':
        return MaterialIcon$sdCard_getInstance();
      case 'simCardAlert':
        return MaterialIcon$simCardAlert_getInstance();
      case 'sms':
        return MaterialIcon$sms_getInstance();
      case 'smsFailed':
        return MaterialIcon$smsFailed_getInstance();
      case 'sync':
        return MaterialIcon$sync_getInstance();
      case 'syncDisabled':
        return MaterialIcon$syncDisabled_getInstance();
      case 'syncProblem':
        return MaterialIcon$syncProblem_getInstance();
      case 'systemUpdate':
        return MaterialIcon$systemUpdate_getInstance();
      case 'tapAndPlay':
        return MaterialIcon$tapAndPlay_getInstance();
      case 'timeToLeave':
        return MaterialIcon$timeToLeave_getInstance();
      case 'vibration':
        return MaterialIcon$vibration_getInstance();
      case 'voiceChat':
        return MaterialIcon$voiceChat_getInstance();
      case 'vpnLock':
        return MaterialIcon$vpnLock_getInstance();
      case 'wc':
        return MaterialIcon$wc_getInstance();
      case 'wifi':
        return MaterialIcon$wifi_getInstance();
      case 'acUnit':
        return MaterialIcon$acUnit_getInstance();
      case 'airportShuttle':
        return MaterialIcon$airportShuttle_getInstance();
      case 'allInclusive':
        return MaterialIcon$allInclusive_getInstance();
      case 'beachAccess':
        return MaterialIcon$beachAccess_getInstance();
      case 'businessCenter':
        return MaterialIcon$businessCenter_getInstance();
      case 'casino':
        return MaterialIcon$casino_getInstance();
      case 'childCare':
        return MaterialIcon$childCare_getInstance();
      case 'childFriendly':
        return MaterialIcon$childFriendly_getInstance();
      case 'fitnessCenter':
        return MaterialIcon$fitnessCenter_getInstance();
      case 'freeBreakfast':
        return MaterialIcon$freeBreakfast_getInstance();
      case 'golfCourse':
        return MaterialIcon$golfCourse_getInstance();
      case 'hotTub':
        return MaterialIcon$hotTub_getInstance();
      case 'kitchen':
        return MaterialIcon$kitchen_getInstance();
      case 'pool':
        return MaterialIcon$pool_getInstance();
      case 'roomService':
        return MaterialIcon$roomService_getInstance();
      case 'rvHookup2':
        return MaterialIcon$rvHookup2_getInstance();
      case 'smokeFree':
        return MaterialIcon$smokeFree_getInstance();
      case 'smokingRooms':
        return MaterialIcon$smokingRooms_getInstance();
      case 'spa':
        return MaterialIcon$spa_getInstance();
      case 'cake':
        return MaterialIcon$cake_getInstance();
      case 'domain':
        return MaterialIcon$domain_getInstance();
      case 'group':
        return MaterialIcon$group_getInstance();
      case 'groupAdd':
        return MaterialIcon$groupAdd_getInstance();
      case 'locationCity':
        return MaterialIcon$locationCity_getInstance();
      case 'mood':
        return MaterialIcon$mood_getInstance();
      case 'moodBad':
        return MaterialIcon$moodBad_getInstance();
      case 'notifications':
        return MaterialIcon$notifications_getInstance();
      case 'notificationsActive':
        return MaterialIcon$notificationsActive_getInstance();
      case 'notificationsNone':
        return MaterialIcon$notificationsNone_getInstance();
      case 'notificationsOff':
        return MaterialIcon$notificationsOff_getInstance();
      case 'notificationsPaused':
        return MaterialIcon$notificationsPaused_getInstance();
      case 'pages':
        return MaterialIcon$pages_getInstance();
      case 'partyMode':
        return MaterialIcon$partyMode_getInstance();
      case 'people':
        return MaterialIcon$people_getInstance();
      case 'peopleOutline':
        return MaterialIcon$peopleOutline_getInstance();
      case 'person':
        return MaterialIcon$person_getInstance();
      case 'personAdd':
        return MaterialIcon$personAdd_getInstance();
      case 'personOutline':
        return MaterialIcon$personOutline_getInstance();
      case 'plusOne':
        return MaterialIcon$plusOne_getInstance();
      case 'poll':
        return MaterialIcon$poll_getInstance();
      case '_public':
        return MaterialIcon$_public_getInstance();
      case 'school':
        return MaterialIcon$school_getInstance();
      case 'sentimentDissatisfied':
        return MaterialIcon$sentimentDissatisfied_getInstance();
      case 'sentimentNeutral':
        return MaterialIcon$sentimentNeutral_getInstance();
      case 'sentimentSatisfied':
        return MaterialIcon$sentimentSatisfied_getInstance();
      case 'sentimentVeryDissatisfied':
        return MaterialIcon$sentimentVeryDissatisfied_getInstance();
      case 'sentimentVerySatisfied':
        return MaterialIcon$sentimentVerySatisfied_getInstance();
      case 'share':
        return MaterialIcon$share_getInstance();
      case 'whatshot':
        return MaterialIcon$whatshot_getInstance();
      case 'checkBox':
        return MaterialIcon$checkBox_getInstance();
      case 'checkBoxOutlineBlank':
        return MaterialIcon$checkBoxOutlineBlank_getInstance();
      case 'indeterminateCheckBox':
        return MaterialIcon$indeterminateCheckBox_getInstance();
      case 'radioButtonChecked':
        return MaterialIcon$radioButtonChecked_getInstance();
      case 'radioButtonUnchecked':
        return MaterialIcon$radioButtonUnchecked_getInstance();
      case 'star':
        return MaterialIcon$star_getInstance();
      case 'starBorder':
        return MaterialIcon$starBorder_getInstance();
      case 'starHalf':
        return MaterialIcon$starHalf_getInstance();
      default:throwISE('No enum constant com.lightningkite.koolui.image.MaterialIcon.' + name);
    }
  }
  MaterialIcon.valueOf_61zpoe$ = MaterialIcon$valueOf;
  function color($receiver, color) {
    return Image$Companion_getInstance().fromSvgString_61zpoe$(substringBefore($receiver.data, 103) + ('g fill=' + '"' + color.toAlphalessWeb() + '"') + substringAfter($receiver.data, 103));
  }
  function defaultEntryContext$lambda$lambda$lambda(this$defaultEntryContext) {
    return function (it) {
      var v = it == null ? this$defaultEntryContext.margin_ovmznb$(space(this$defaultEntryContext, 0.0), 0.0) : this$defaultEntryContext.margin_ovmznb$(this$defaultEntryContext.text_30kv5x$(new ConstantObservableProperty(it.second), it.first, TextSize$Tiny_getInstance()), 2.0);
      return to(v, Animation$Fade_getInstance());
    };
  }
  function defaultEntryContext$lambda$lambda(closure$label, this$defaultEntryContext, closure$field, closure$feedback) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$defaultEntryContext.margin_ovmznb$(this$defaultEntryContext.text_30kv5x$(new ConstantObservableProperty(closure$label), void 0, TextSize$Tiny_getInstance()), 2.0));
      $receiver.unaryMinus_wijs$(this$defaultEntryContext.margin_ovmznb$(closure$field, 2.0));
      $receiver.unaryMinus_wijs$(this$defaultEntryContext.margin_ovmznb$(this$defaultEntryContext.swap_yi09s7$(transform(closure$feedback, defaultEntryContext$lambda$lambda$lambda(this$defaultEntryContext))), 0.0));
      return Unit;
    };
  }
  function defaultEntryContext$lambda(closure$icon, this$defaultEntryContext, closure$label, closure$field, closure$feedback) {
    return function ($receiver) {
      $receiver.defaultAlign = Align$Center_getInstance();
      if (closure$icon != null) {
        $receiver.unaryMinus_wijs$(this$defaultEntryContext.margin_ovmznb$(this$defaultEntryContext.image_1bxa88$(new ConstantObservableProperty(closure$icon)), 2.0));
        $receiver.unaryMinus_wijs$(space(this$defaultEntryContext, 4.0));
      }
      $receiver.unaryPlus_wijs$(vertical(this$defaultEntryContext, defaultEntryContext$lambda$lambda(closure$label, this$defaultEntryContext, closure$field, closure$feedback)));
      return Unit;
    };
  }
  function defaultEntryContext($receiver, label, help, icon, feedback, field) {
    return $receiver.margin_ovmznb$(horizontal($receiver, defaultEntryContext$lambda(icon, $receiver, label, field, feedback)), 6.0);
  }
  function defaultList$lambda(closure$setByUi, closure$firstIndex, closure$pageSize, closure$pageObs) {
    return function (it) {
      if (closure$setByUi.v) {
        closure$setByUi.v = false;
        return;
      }
      closure$pageObs.value = closure$firstIndex.value / closure$pageSize | 0;
      return Unit;
    };
  }
  function defaultList$lambda_0(closure$setByUi, closure$lastIndex, closure$pageSize, closure$pageObs) {
    return function (it) {
      if (closure$setByUi.v) {
        closure$setByUi.v = false;
        return;
      }
      closure$pageObs.value = closure$lastIndex.value / closure$pageSize | 0;
      return Unit;
    };
  }
  function defaultList$lambda_1(closure$setByUi, closure$pageSize, closure$firstIndex, closure$lastIndex) {
    return function (it) {
      closure$setByUi.v = true;
      closure$firstIndex.value = Kotlin.imul(it, closure$pageSize);
      closure$setByUi.v = true;
      closure$lastIndex.value = Kotlin.imul(it, closure$pageSize + 1 | 0) - 1 | 0;
      return Unit;
    };
  }
  function defaultList$lambda$lambda$lambda$getFilledView$lambda(closure$index, closure$backup) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = getOrNull(it, closure$index)) != null ? tmp$_0 : (tmp$ = closure$backup) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }
  function defaultList$lambda$lambda$lambda$getFilledView(closure$filledView, closure$data, closure$index, closure$backup, closure$makeView) {
    return function () {
      var tmp$;
      if (closure$filledView.v != null)
        return ensureNotNull(closure$filledView.v);
      var obs = transform(closure$data.onListUpdate, defaultList$lambda$lambda$lambda$getFilledView$lambda(closure$index, closure$backup));
      closure$filledView.v = closure$makeView(obs, new ConstantObservableProperty(closure$index));
      return (tmp$ = closure$filledView.v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }
  function defaultList$lambda$lambda$lambda$lambda(closure$index, closure$getFilledView, closure$emptyView) {
    return function (it) {
      var view = get_indices(it).contains_mef7kx$(closure$index) ? closure$getFilledView() : closure$emptyView;
      return to(view, Animation$None_getInstance());
    };
  }
  function defaultList$lambda$lambda$lambda(closure$progression, closure$page, closure$pageSize, this$defaultList, closure$data, closure$backup, closure$makeView) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$progression.iterator();
      while (tmp$.hasNext()) {
        var pageOffset = tmp$.next();
        var index = Kotlin.imul(closure$page, closure$pageSize) + pageOffset | 0;
        var emptyView = space(this$defaultList, 24.0);
        var filledView = {v: null};
        var getFilledView = defaultList$lambda$lambda$lambda$getFilledView(filledView, closure$data, index, closure$backup, closure$makeView);
        $receiver.unaryMinus_wijs$(this$defaultList.swap_yi09s7$(transform(closure$data.onListUpdate, defaultList$lambda$lambda$lambda$lambda(index, getFilledView, emptyView))));
      }
      return Unit;
    };
  }
  function defaultList$lambda$lambda$lambda$getFilledView$lambda_0(closure$index, closure$backup) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = getOrNull(it, closure$index)) != null ? tmp$_0 : (tmp$ = closure$backup) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }
  function defaultList$lambda$lambda$lambda$getFilledView_0(closure$filledView, closure$data, closure$index, closure$backup, closure$makeView) {
    return function () {
      var tmp$;
      if (closure$filledView.v != null)
        return ensureNotNull(closure$filledView.v);
      var obs = transform(closure$data.onListUpdate, defaultList$lambda$lambda$lambda$getFilledView$lambda_0(closure$index, closure$backup));
      closure$filledView.v = closure$makeView(obs, new ConstantObservableProperty(closure$index));
      return (tmp$ = closure$filledView.v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }
  function defaultList$lambda$lambda$lambda$lambda_0(closure$index, closure$getFilledView, closure$emptyView) {
    return function (it) {
      var view = get_indices(it).contains_mef7kx$(closure$index) ? closure$getFilledView() : closure$emptyView;
      return to(view, Animation$None_getInstance());
    };
  }
  function defaultList$lambda$lambda$lambda_0(closure$progression, closure$page, closure$pageSize, this$defaultList, closure$data, closure$backup, closure$makeView) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$progression.iterator();
      while (tmp$.hasNext()) {
        var pageOffset = tmp$.next();
        var index = Kotlin.imul(closure$page, closure$pageSize) + pageOffset | 0;
        var emptyView = space(this$defaultList, 24.0);
        var filledView = {v: null};
        var getFilledView = defaultList$lambda$lambda$lambda$getFilledView_0(filledView, closure$data, index, closure$backup, closure$makeView);
        $receiver.unaryMinus_wijs$(this$defaultList.swap_yi09s7$(transform(closure$data.onListUpdate, defaultList$lambda$lambda$lambda$lambda_0(index, getFilledView, emptyView))));
      }
      return Unit;
    };
  }
  function defaultList$lambda$lambda(closure$previous, closure$direction, closure$pageSize, closure$data, this$defaultList, closure$makeView) {
    return function (page) {
      var tmp$, tmp$_0;
      if (page < closure$previous.v)
        tmp$ = Animation$Pop_getInstance();
      else if (page > closure$previous.v)
        tmp$ = Animation$Push_getInstance();
      else
        tmp$ = Animation$Fade_getInstance();
      var anim = tmp$;
      closure$previous.v = page;
      if (closure$direction.uiPositive) {
        tmp$_0 = until(0, closure$pageSize);
      }
       else {
        tmp$_0 = downTo(closure$pageSize, 0);
      }
      var progression = tmp$_0;
      var backup = firstOrNull(closure$data);
      if (closure$direction.vertical) {
        return to(this$defaultList.scrollVertical_9vpp9p$(vertical(this$defaultList, defaultList$lambda$lambda$lambda(progression, page, closure$pageSize, this$defaultList, closure$data, backup, closure$makeView))), anim);
      }
       else {
        return to(this$defaultList.scrollHorizontal_9vpp9p$(horizontal(this$defaultList, defaultList$lambda$lambda$lambda_0(progression, page, closure$pageSize, this$defaultList, closure$data, backup, closure$makeView))), anim);
      }
    };
  }
  function defaultList$lambda$lambda$lambda_1(closure$pageObs, closure$data, closure$pageSize) {
    return function () {
      var newPage = closure$pageObs.value - 1 | 0;
      if (newPage >= 0 && newPage < closure$data.size / closure$pageSize) {
        closure$pageObs.value = newPage;
      }
      return Unit;
    };
  }
  function defaultList$lambda$lambda$lambda_2(closure$pageSize) {
    return function (page, data) {
      var newPage = page - 1 | 0;
      return newPage >= 0 && newPage < data.size / closure$pageSize ? 1.0 : 0.0;
    };
  }
  function defaultList$lambda$lambda$lambda_3(closure$pageSize) {
    return function (page, data) {
      var tmp$ = (page + 1 | 0).toString() + ' / ';
      var x = data.size / closure$pageSize;
      return tmp$ + numberToInt(Math_0.ceil(x));
    };
  }
  function defaultList$lambda$lambda$lambda_4(closure$pageObs, closure$data, closure$pageSize) {
    return function () {
      var newPage = closure$pageObs.value + 1 | 0;
      if (newPage >= 0 && newPage < closure$data.size / closure$pageSize) {
        closure$pageObs.value = newPage;
      }
      return Unit;
    };
  }
  function defaultList$lambda$lambda$lambda_5(closure$pageSize) {
    return function (page, data) {
      var newPage = page + 1 | 0;
      return newPage >= 0 && newPage < data.size / closure$pageSize ? 1.0 : 0.0;
    };
  }
  function defaultList$lambda$lambda_0(closure$buttonColor, closure$pageObs, closure$data, closure$pageSize, this$defaultList) {
    return function ($receiver) {
      $receiver.minus_e435o2$(AlignPair$BottomLeft_getInstance(), this$defaultList.alpha_3rlye2$(this$defaultList.imageButton_aba7xb$(new ConstantObservableProperty(withSizing(color(MaterialIcon$chevronLeft_getInstance(), closure$buttonColor), new Point(24.0, 24.0))), void 0, void 0, defaultList$lambda$lambda$lambda_1(closure$pageObs, closure$data, closure$pageSize)), new CombineObservableProperty2(closure$pageObs, closure$data.onListUpdate, defaultList$lambda$lambda$lambda_2(closure$pageSize))));
      $receiver.minus_e435o2$(AlignPair$BottomCenter_getInstance(), this$defaultList.text_30kv5x$(new CombineObservableProperty2(closure$pageObs, closure$data.onListUpdate, defaultList$lambda$lambda$lambda_3(closure$pageSize)), void 0, TextSize$Tiny_getInstance()));
      $receiver.minus_e435o2$(AlignPair$BottomRight_getInstance(), this$defaultList.alpha_3rlye2$(this$defaultList.imageButton_aba7xb$(new ConstantObservableProperty(withSizing(color(MaterialIcon$chevronRight_getInstance(), closure$buttonColor), new Point(24.0, 24.0))), void 0, void 0, defaultList$lambda$lambda$lambda_4(closure$pageObs, closure$data, closure$pageSize)), new CombineObservableProperty2(closure$pageObs, closure$data.onListUpdate, defaultList$lambda$lambda$lambda_5(closure$pageSize))));
      return Unit;
    };
  }
  function defaultList$lambda_2(closure$pageObs, closure$direction, closure$pageSize, closure$data, this$defaultList, closure$makeView, closure$buttonColor) {
    return function ($receiver) {
      var previous = {v: closure$pageObs.value};
      $receiver.unaryPlus_wijs$(this$defaultList.swap_yi09s7$(transform(closure$pageObs, defaultList$lambda$lambda(previous, closure$direction, closure$pageSize, closure$data, this$defaultList, closure$makeView))));
      $receiver.unaryMinus_wijs$(align(this$defaultList, defaultList$lambda$lambda_0(closure$buttonColor, closure$pageObs, closure$data, closure$pageSize, this$defaultList)));
      return Unit;
    };
  }
  function defaultList($receiver, pageSize, buttonColor, data, direction, firstIndex, lastIndex, makeView) {
    if (pageSize === void 0)
      pageSize = 100;
    var setByUi = {v: false};
    var pageObs = new StandardObservableProperty(firstIndex.value / pageSize | 0);
    firstIndex.add_11rb$(defaultList$lambda(setByUi, firstIndex, pageSize, pageObs));
    lastIndex.add_11rb$(defaultList$lambda_0(setByUi, lastIndex, pageSize, pageObs));
    pageObs.add_11rb$(defaultList$lambda_1(setByUi, pageSize, firstIndex, lastIndex));
    return vertical($receiver, defaultList$lambda_2(pageObs, direction, pageSize, data, $receiver, makeView, buttonColor));
  }
  function defaultLargeWindow$lambda$lambda$lambda$lambda(closure$stack) {
    return function () {
      if (closure$stack.size > 1)
        pop(closure$stack);
      return Unit;
    };
  }
  function defaultLargeWindow$lambda$lambda$lambda$lambda_0(it) {
    return it.size > 1 ? 1.0 : 0.0;
  }
  function defaultLargeWindow$lambda$lambda$lambda$lambda_1(it) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = lastOrNull(it)) != null ? tmp$.title : null) != null ? tmp$_0 : '';
  }
  function defaultLargeWindow$lambda$lambda$lambda$lambda_2(closure$dependency, this$) {
    return function (it) {
      var tmp$;
      return to((tmp$ = it != null ? it.generateActions_11rb$(closure$dependency) : null) != null ? tmp$ : space(this$, 1.0), Animation$Fade_getInstance());
    };
  }
  function defaultLargeWindow$lambda$lambda$lambda(closure$theme, closure$stack, this$, closure$dependency) {
    return function ($receiver) {
      $receiver.defaultAlign = Align$Center_getInstance();
      $receiver.unaryMinus_wijs$(this$.alpha_3rlye2$(this$.imageButton_aba7xb$(new ConstantObservableProperty(withSizing(color(MaterialIcon$arrowBack_getInstance(), closure$theme.bar.foreground), new Point(24.0, 24.0))), void 0, Importance$Low_getInstance(), defaultLargeWindow$lambda$lambda$lambda$lambda(closure$stack)), transform(closure$stack.onListUpdate, defaultLargeWindow$lambda$lambda$lambda$lambda_0)));
      $receiver.unaryMinus_wijs$(this$.text_30kv5x$(transform(closure$stack.onListUpdate, defaultLargeWindow$lambda$lambda$lambda$lambda_1), void 0, TextSize$Header_getInstance()));
      $receiver.unaryPlus_wijs$(this$.space_oljqke$(new Point(5.0, 5.0)));
      $receiver.unaryMinus_wijs$(this$.swap_yi09s7$(transform(lastOrNullObservable(closure$stack), defaultLargeWindow$lambda$lambda$lambda$lambda_2(closure$dependency, this$))));
      return Unit;
    };
  }
  function defaultLargeWindow$lambda$lambda(closure$dependency, this$defaultLargeWindow) {
    return function (it) {
      var tmp$, tmp$_0;
      return to((tmp$_0 = (tmp$ = it.first) != null ? tmp$.generate_11rb$(closure$dependency) : null) != null ? tmp$_0 : this$defaultLargeWindow.space_oljqke$(Point.Companion.Zero), it.second);
    };
  }
  function defaultLargeWindow$lambda$lambda$lambda$lambda_3(closure$stack, closure$tab) {
    return function () {
      reset(closure$stack, closure$tab.second);
      return Unit;
    };
  }
  function defaultLargeWindow$lambda$lambda$lambda_0(closure$tabs, closure$stack, this$defaultLargeWindow) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$tabs.iterator();
      while (tmp$.hasNext()) {
        var tab = tmp$.next();
        $receiver.unaryMinus_wijs$(button(this$defaultLargeWindow, tab.first.text, tab.first.imageWithSizing, void 0, defaultLargeWindow$lambda$lambda$lambda$lambda_3(closure$stack, tab)));
      }
      return Unit;
    };
  }
  function defaultLargeWindow$lambda$lambda$lambda_1(closure$dependency, this$defaultLargeWindow) {
    return function (it) {
      var tmp$, tmp$_0;
      return to((tmp$_0 = (tmp$ = it.first) != null ? tmp$.generate_11rb$(closure$dependency) : null) != null ? tmp$_0 : this$defaultLargeWindow.space_oljqke$(Point.Companion.Zero), it.second);
    };
  }
  function defaultLargeWindow$lambda$lambda_0(closure$tabs, closure$stack, this$defaultLargeWindow, closure$theme, closure$dependency) {
    return function ($receiver) {
      $receiver.unaryMinus_wijs$(this$defaultLargeWindow.scrollVertical_9vpp9p$(this$defaultLargeWindow.background_wxf12v$(vertical(this$defaultLargeWindow, defaultLargeWindow$lambda$lambda$lambda_0(closure$tabs, closure$stack, this$defaultLargeWindow)), closure$theme.main.backgroundHighlighted)));
      $receiver.unaryPlus_wijs$(this$defaultLargeWindow.background_wxf12v$(this$defaultLargeWindow.swap_yi09s7$(transform(lastOrNullObservableWithAnimations(closure$stack), defaultLargeWindow$lambda$lambda$lambda_1(closure$dependency, this$defaultLargeWindow))), closure$theme.main.background));
      return Unit;
    };
  }
  function defaultLargeWindow$lambda(closure$barBuilder, closure$theme, closure$stack, closure$dependency, closure$tabs, this$defaultLargeWindow) {
    return function ($receiver) {
      var receiver = closure$barBuilder;
      var closure$theme_0 = closure$theme;
      $receiver.unaryMinus_wijs$(receiver.background_wxf12v$(horizontal(receiver, defaultLargeWindow$lambda$lambda$lambda(closure$theme_0, closure$stack, receiver, closure$dependency)), closure$theme_0.bar.background));
      if (closure$tabs.isEmpty()) {
        $receiver.unaryPlus_wijs$(this$defaultLargeWindow.background_wxf12v$(this$defaultLargeWindow.swap_yi09s7$(transform(lastOrNullObservableWithAnimations(closure$stack), defaultLargeWindow$lambda$lambda(closure$dependency, this$defaultLargeWindow))), closure$theme.main.background));
      }
       else {
        $receiver.unaryPlus_wijs$(this$defaultLargeWindow.background_wxf12v$(horizontal(this$defaultLargeWindow, defaultLargeWindow$lambda$lambda_0(closure$tabs, closure$stack, this$defaultLargeWindow, closure$theme, closure$dependency)), closure$theme.main.background));
      }
      return Unit;
    };
  }
  function defaultLargeWindow($receiver, theme, barBuilder, dependency, stack, tabs) {
    return vertical($receiver, defaultLargeWindow$lambda(barBuilder, theme, stack, dependency, tabs, $receiver));
  }
  function defaultPages$lambda$lambda(closure$page, closure$previous, closure$pageGenerator, closure$dependency) {
    return function (it) {
      var tmp$;
      if (closure$page.value < closure$previous.v)
        tmp$ = Animation$Pop_getInstance();
      else if (closure$page.value > closure$previous.v)
        tmp$ = Animation$Push_getInstance();
      else
        tmp$ = Animation$Fade_getInstance();
      var anim = tmp$;
      closure$previous.v = it;
      return to(closure$pageGenerator[coerceIn_0(it, get_indices_0(closure$pageGenerator))].generate_11rb$(closure$dependency), anim);
    };
  }
  function defaultPages$lambda$lambda$lambda(closure$page, closure$pageGenerator) {
    return function () {
      closure$page.value = coerceIn_0(closure$page.value - 1 | 0, get_indices_0(closure$pageGenerator));
      return Unit;
    };
  }
  function defaultPages$lambda$lambda$lambda_0(closure$pageGenerator) {
    return function (it) {
      return (it + 1 | 0).toString() + ' / ' + closure$pageGenerator.length;
    };
  }
  function defaultPages$lambda$lambda$lambda_1(closure$page, closure$pageGenerator) {
    return function () {
      closure$page.value = coerceIn_0(closure$page.value + 1 | 0, get_indices_0(closure$pageGenerator));
      return Unit;
    };
  }
  function defaultPages$lambda$lambda_0(closure$buttonColor, closure$page, closure$pageGenerator, this$defaultPages) {
    return function ($receiver) {
      $receiver.minus_e435o2$(AlignPair$BottomLeft_getInstance(), this$defaultPages.imageButton_aba7xb$(new ConstantObservableProperty(withSizing(color(MaterialIcon$chevronLeft_getInstance(), closure$buttonColor), new Point(24.0, 24.0))), void 0, void 0, defaultPages$lambda$lambda$lambda(closure$page, closure$pageGenerator)));
      $receiver.minus_e435o2$(AlignPair$BottomCenter_getInstance(), this$defaultPages.text_30kv5x$(transform(closure$page, defaultPages$lambda$lambda$lambda_0(closure$pageGenerator)), void 0, TextSize$Tiny_getInstance()));
      $receiver.minus_e435o2$(AlignPair$BottomRight_getInstance(), this$defaultPages.imageButton_aba7xb$(new ConstantObservableProperty(withSizing(color(MaterialIcon$chevronRight_getInstance(), closure$buttonColor), new Point(24.0, 24.0))), void 0, void 0, defaultPages$lambda$lambda$lambda_1(closure$page, closure$pageGenerator)));
      return Unit;
    };
  }
  function defaultPages$lambda(closure$page, closure$pageGenerator, closure$dependency, this$defaultPages, closure$buttonColor) {
    return function ($receiver) {
      var previous = {v: closure$page.value};
      $receiver.unaryPlus_wijs$(this$defaultPages.swap_yi09s7$(transform(closure$page, defaultPages$lambda$lambda(closure$page, previous, closure$pageGenerator, closure$dependency))));
      $receiver.unaryMinus_wijs$(align(this$defaultPages, defaultPages$lambda$lambda_0(closure$buttonColor, closure$page, closure$pageGenerator, this$defaultPages)));
      return Unit;
    };
  }
  function defaultPages($receiver, buttonColor, dependency, page, pageGenerator) {
    return vertical($receiver, defaultPages$lambda(page, pageGenerator, dependency, $receiver, buttonColor));
  }
  function TreeObservableProperty() {
    this.$delegate_7dc12w$_0 = ArrayList_init();
    this.parent_edknze$_0 = null;
    this.alwaysOn_l2uzly$_0 = false;
    this.previousValue = this.value;
    this.children = ArrayList_init();
  }
  Object.defineProperty(TreeObservableProperty.prototype, 'parent', {get: function () {
    return this.parent_edknze$_0;
  }, set: function (value) {
    var tmp$, tmp$_0, tmp$_1;
    if (equals(value, this))
      throw IllegalArgumentException_init();
    (tmp$_0 = (tmp$ = this.parent_edknze$_0) != null ? tmp$.children : null) != null ? tmp$_0.remove_11rb$(this) : null;
    this.parent_edknze$_0 = value;
    (tmp$_1 = value != null ? value.children : null) != null ? tmp$_1.add_11rb$(this) : null;
    this.broadcast();
  }});
  Object.defineProperty(TreeObservableProperty.prototype, 'alwaysOn', {get: function () {
    return this.alwaysOn_l2uzly$_0;
  }, set: function (value) {
    this.alwaysOn_l2uzly$_0 = value;
    this.broadcast();
  }});
  Object.defineProperty(TreeObservableProperty.prototype, 'value', {get: function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.value : null) != null ? tmp$_0 : this.alwaysOn;
  }});
  TreeObservableProperty.prototype.add_7dc12w$ = function (element) {
    return this.children.add_11rb$(element);
  };
  TreeObservableProperty.prototype.remove_7dc12w$ = function (element) {
    return this.children.remove_11rb$(element);
  };
  TreeObservableProperty.prototype.broadcast = function () {
    var tmp$;
    var newValue = this.value;
    if (newValue !== this.previousValue) {
      this.previousValue = newValue;
      invokeAll(this, newValue);
      tmp$ = this.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        child.broadcast();
      }
    }
  };
  Object.defineProperty(TreeObservableProperty.prototype, 'size', {get: function () {
    return this.$delegate_7dc12w$_0.size;
  }});
  TreeObservableProperty.prototype.add_11rb$ = function (element) {
    return this.$delegate_7dc12w$_0.add_11rb$(element);
  };
  TreeObservableProperty.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_7dc12w$_0.addAll_brywnq$(elements);
  };
  TreeObservableProperty.prototype.clear = function () {
    return this.$delegate_7dc12w$_0.clear();
  };
  TreeObservableProperty.prototype.contains_11rb$ = function (element) {
    return this.$delegate_7dc12w$_0.contains_11rb$(element);
  };
  TreeObservableProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_7dc12w$_0.containsAll_brywnq$(elements);
  };
  TreeObservableProperty.prototype.isEmpty = function () {
    return this.$delegate_7dc12w$_0.isEmpty();
  };
  TreeObservableProperty.prototype.iterator = function () {
    return this.$delegate_7dc12w$_0.iterator();
  };
  TreeObservableProperty.prototype.remove_11rb$ = function (element) {
    return this.$delegate_7dc12w$_0.remove_11rb$(element);
  };
  TreeObservableProperty.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_7dc12w$_0.removeAll_brywnq$(elements);
  };
  TreeObservableProperty.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_7dc12w$_0.retainAll_brywnq$(elements);
  };
  TreeObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'TreeObservableProperty', interfaces: [ObservableProperty, MutableCollection]};
  var DimensionAccess$Companion_instance = null;
  var Layout$Companion_instance = null;
  function LayoutViewFactory() {
  }
  function lastOrNullObservableWithAnimations$lambda(this$lastOrNullObservableWithAnimations, closure$pop, closure$current, closure$other, closure$push) {
    return function (it) {
      var tmp$;
      var newSize = this$lastOrNullObservableWithAnimations.size;
      if (newSize < closure$current.v)
        tmp$ = closure$pop;
      else if (newSize === closure$current.v)
        tmp$ = closure$other;
      else if (newSize > closure$current.v)
        tmp$ = closure$push;
      else
        tmp$ = closure$other;
      var result = to(it, tmp$);
      closure$current.v = newSize;
      return result;
    };
  }
  function lastOrNullObservableWithAnimations($receiver, push, pop, other) {
    if (push === void 0)
      push = Animation$Push_getInstance();
    if (pop === void 0)
      pop = Animation$Pop_getInstance();
    if (other === void 0)
      other = Animation$Fade_getInstance();
    var current = {v: $receiver.size};
    return transform(lastOrNullObservable($receiver), lastOrNullObservableWithAnimations$lambda($receiver, pop, current, other, push));
  }
  var UIPlatform$Android_instance;
  var UIPlatform$Javascript_instance;
  var UIPlatform$IOS_instance;
  var UIPlatform$JavaFX_instance;
  var UIPlatform$Virtual_instance;
  var UIPlatform$Companion_instance = null;
  function ViewFactory() {
  }
  ViewFactory.prototype.contentRoot_11rb$ = function (view) {
    return view;
  };
  ViewFactory.prototype.list_4rlyri$ = function (data, firstIndex, lastIndex, direction, makeView, callback$default) {
    if (firstIndex === void 0)
      firstIndex = new StandardObservableProperty(0);
    if (lastIndex === void 0)
      lastIndex = new StandardObservableProperty(0);
    if (direction === void 0)
      direction = Direction$Down_getInstance();
    return callback$default ? callback$default(data, firstIndex, lastIndex, direction, makeView) : this.list_4rlyri$$default(data, firstIndex, lastIndex, direction, makeView);
  };
  function ViewFactory$list$lambda(closure$makeView) {
    return function (obs, index) {
      return closure$makeView(obs);
    };
  }
  ViewFactory.prototype.list_s8g4or$$default = function (data, firstIndex, lastIndex, direction, makeView) {
    return this.list_4rlyri$(data, firstIndex, lastIndex, direction, ViewFactory$list$lambda(makeView));
  };
  ViewFactory.prototype.list_s8g4or$ = function (data, firstIndex, lastIndex, direction, makeView, callback$default) {
    if (firstIndex === void 0)
      firstIndex = new StandardObservableProperty(0);
    if (lastIndex === void 0)
      lastIndex = new StandardObservableProperty(0);
    if (direction === void 0)
      direction = Direction$Down_getInstance();
    return callback$default ? callback$default(data, firstIndex, lastIndex, direction, makeView) : this.list_s8g4or$$default(data, firstIndex, lastIndex, direction, makeView);
  };
  ViewFactory.prototype.text_30kv5x$ = function (text, importance, size, align, maxLines, callback$default) {
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    if (size === void 0)
      size = TextSize$Body_getInstance();
    if (align === void 0)
      align = AlignPair$CenterLeft_getInstance();
    if (maxLines === void 0)
      maxLines = 2147483647;
    return callback$default ? callback$default(text, importance, size, align, maxLines) : this.text_30kv5x$$default(text, importance, size, align, maxLines);
  };
  ViewFactory.prototype.button_tmzrmh$ = function (label, imageWithSizing, importance, onClick, callback$default) {
    if (imageWithSizing === void 0)
      imageWithSizing = new ConstantObservableProperty(null);
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    return callback$default ? callback$default(label, imageWithSizing, importance, onClick) : this.button_tmzrmh$$default(label, imageWithSizing, importance, onClick);
  };
  ViewFactory.prototype.imageButton_aba7xb$ = function (imageWithSizing, label, importance, onClick, callback$default) {
    if (label === void 0)
      label = new ConstantObservableProperty(null);
    if (importance === void 0)
      importance = Importance$Normal_getInstance();
    return callback$default ? callback$default(imageWithSizing, label, importance, onClick) : this.imageButton_aba7xb$$default(imageWithSizing, label, importance, onClick);
  };
  ViewFactory.prototype.entryContext_6ji58x$ = function (label, help, icon, feedback, field, callback$default) {
    if (help === void 0)
      help = null;
    if (icon === void 0)
      icon = null;
    if (feedback === void 0)
      feedback = new ConstantObservableProperty(null);
    return callback$default ? callback$default(label, help, icon, feedback, field) : this.entryContext_6ji58x$$default(label, help, icon, feedback, field);
  };
  function ViewFactory$picker$lambda(it) {
    return toString_0(it);
  }
  ViewFactory.prototype.picker_dvtdv8$ = function (options, selected, toString, callback$default) {
    if (toString === void 0)
      toString = ViewFactory$picker$lambda;
    return callback$default ? callback$default(options, selected, toString) : this.picker_dvtdv8$$default(options, selected, toString);
  };
  ViewFactory.prototype.textField_bqlgfi$ = function (text, placeholder, type, callback$default) {
    if (placeholder === void 0)
      placeholder = '';
    if (type === void 0)
      type = TextInputType$Name_getInstance();
    return callback$default ? callback$default(text, placeholder, type) : this.textField_bqlgfi$$default(text, placeholder, type);
  };
  ViewFactory.prototype.textArea_bqlgfi$ = function (text, placeholder, type, callback$default) {
    if (placeholder === void 0)
      placeholder = '';
    if (type === void 0)
      type = TextInputType$Paragraph_getInstance();
    return callback$default ? callback$default(text, placeholder, type) : this.textArea_bqlgfi$$default(text, placeholder, type);
  };
  ViewFactory.prototype.numberField_x7mhdx$ = function (value, placeholder, type, decimalPlaces, callback$default) {
    if (placeholder === void 0)
      placeholder = '';
    if (type === void 0)
      type = NumberInputType$PositiveInteger_getInstance();
    if (decimalPlaces === void 0)
      decimalPlaces = 0;
    return callback$default ? callback$default(value, placeholder, type, decimalPlaces) : this.numberField_x7mhdx$$default(value, placeholder, type, decimalPlaces);
  };
  ViewFactory.prototype.scrollVertical_9vpp9p$$default = function (view, amount) {
    return this.scrollBoth_wmfa1z$(view, void 0, amount);
  };
  ViewFactory.prototype.scrollVertical_9vpp9p$ = function (view, amount, callback$default) {
    if (amount === void 0)
      amount = new StandardObservableProperty(0.0);
    return callback$default ? callback$default(view, amount) : this.scrollVertical_9vpp9p$$default(view, amount);
  };
  ViewFactory.prototype.scrollHorizontal_9vpp9p$$default = function (view, amount) {
    return this.scrollBoth_wmfa1z$(view, amount);
  };
  ViewFactory.prototype.scrollHorizontal_9vpp9p$ = function (view, amount, callback$default) {
    if (amount === void 0)
      amount = new StandardObservableProperty(0.0);
    return callback$default ? callback$default(view, amount) : this.scrollHorizontal_9vpp9p$$default(view, amount);
  };
  ViewFactory.prototype.scrollBoth_wmfa1z$ = function (view, amountX, amountY, callback$default) {
    if (amountX === void 0)
      amountX = new StandardObservableProperty(0.0);
    if (amountY === void 0)
      amountY = new StandardObservableProperty(0.0);
    return callback$default ? callback$default(view, amountX, amountY) : this.scrollBoth_wmfa1z$$default(view, amountX, amountY);
  };
  ViewFactory.prototype.linear_ajg3m9$$default = function (defaultToHorizontal, views) {
    return defaultToHorizontal ? this.horizontal_ghkj0i$(views.slice()) : this.vertical_ghkj0i$(views.slice());
  };
  ViewFactory.prototype.linear_ajg3m9$ = function (defaultToHorizontal, views, callback$default) {
    if (defaultToHorizontal === void 0)
      defaultToHorizontal = false;
    return callback$default ? callback$default(defaultToHorizontal, views) : this.linear_ajg3m9$$default(defaultToHorizontal, views);
  };
  ViewFactory.prototype.frame_11rb$ = function (view) {
    return this.align_iq5na7$([to(AlignPair$FillFill_getInstance(), view)]);
  };
  ViewFactory.prototype.margin_qyxe2k$ = function ($receiver, left, top, right, bottom, callback$default) {
    if (left === void 0)
      left = 0.0;
    if (top === void 0)
      top = 0.0;
    if (right === void 0)
      right = 0.0;
    if (bottom === void 0)
      bottom = 0.0;
    return callback$default ? callback$default($receiver, left, top, right, bottom) : this.margin_qyxe2k$$default($receiver, left, top, right, bottom);
  };
  ViewFactory.prototype.margin_2eg0t3$$default = function ($receiver, horizontal, top, bottom) {
    return this.margin_qyxe2k$($receiver, horizontal, top, horizontal, bottom);
  };
  ViewFactory.prototype.margin_2eg0t3$ = function ($receiver, horizontal, top, bottom, callback$default) {
    if (horizontal === void 0)
      horizontal = 0.0;
    if (top === void 0)
      top = 0.0;
    if (bottom === void 0)
      bottom = 0.0;
    return callback$default ? callback$default($receiver, horizontal, top, bottom) : this.margin_2eg0t3$$default($receiver, horizontal, top, bottom);
  };
  ViewFactory.prototype.margin_i3tg7w$$default = function ($receiver, horizontal, vertical) {
    return this.margin_qyxe2k$($receiver, horizontal, vertical, horizontal, vertical);
  };
  ViewFactory.prototype.margin_i3tg7w$ = function ($receiver, horizontal, vertical, callback$default) {
    if (horizontal === void 0)
      horizontal = 0.0;
    if (vertical === void 0)
      vertical = 0.0;
    return callback$default ? callback$default($receiver, horizontal, vertical) : this.margin_i3tg7w$$default($receiver, horizontal, vertical);
  };
  ViewFactory.prototype.margin_ovmznb$ = function ($receiver, amount) {
    return this.margin_qyxe2k$($receiver, amount, amount, amount, amount);
  };
  ViewFactory.prototype.background_wxf12v$ = function ($receiver, color) {
    return this.background_y36hnw$($receiver, new ConstantObservableProperty(color));
  };
  ViewFactory.prototype.alpha_ovmznb$ = function ($receiver, alpha) {
    return this.alpha_3rlye2$($receiver, new ConstantObservableProperty(alpha));
  };
  function ViewFactory$launchDialog$lambda() {
    return Unit;
  }
  ViewFactory.prototype.launchDialog_y4kujy$ = function (dismissable, onDismiss, makeView, callback$default) {
    if (dismissable === void 0)
      dismissable = true;
    if (onDismiss === void 0)
      onDismiss = ViewFactory$launchDialog$lambda;
    callback$default ? callback$default(dismissable, onDismiss, makeView) : this.launchDialog_y4kujy$$default(dismissable, onDismiss, makeView);
  };
  ViewFactory.prototype.launchSelector_8prigm$ = function (title, options, callback$default) {
    if (title === void 0)
      title = null;
    callback$default ? callback$default(title, options) : this.launchSelector_8prigm$$default(title, options);
  };
  ViewFactory.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ViewFactory', interfaces: []};
  function ViewGenerator() {
    ViewGenerator$Companion_getInstance();
  }
  Object.defineProperty(ViewGenerator.prototype, 'title', {get: function () {
    return '';
  }});
  ViewGenerator.prototype.generateActions_11rb$ = function (dependency) {
    return null;
  };
  function ViewGenerator$Companion() {
    ViewGenerator$Companion_instance = this;
  }
  function ViewGenerator$Companion$make$ObjectLiteral(closure$generate, closure$title) {
    this.closure$generate = closure$generate;
    this.title_ep11k0$_0 = closure$title;
  }
  Object.defineProperty(ViewGenerator$Companion$make$ObjectLiteral.prototype, 'title', {get: function () {
    return this.title_ep11k0$_0;
  }});
  ViewGenerator$Companion$make$ObjectLiteral.prototype.generate_11rb$ = function (dependency) {
    return this.closure$generate(dependency);
  };
  ViewGenerator$Companion$make$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ViewGenerator]};
  ViewGenerator$Companion.prototype.make_8hvdl6$ = function (title, generate) {
    return new ViewGenerator$Companion$make$ObjectLiteral(generate, title);
  };
  function ViewGenerator$Companion$Empty() {
    ViewGenerator$Companion$Empty_instance = this;
  }
  ViewGenerator$Companion$Empty.prototype.generate_11rb$ = function (dependency) {
    return space(dependency, 0.0);
  };
  ViewGenerator$Companion$Empty.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Empty', interfaces: [ViewGenerator]};
  var ViewGenerator$Companion$Empty_instance = null;
  function ViewGenerator$Companion$Empty_getInstance() {
    if (ViewGenerator$Companion$Empty_instance === null) {
      new ViewGenerator$Companion$Empty();
    }
    return ViewGenerator$Companion$Empty_instance;
  }
  ViewGenerator$Companion.prototype.empty_2921t4$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = ViewGenerator$Companion$Empty_getInstance(), ViewGenerator) ? tmp$ : throwCCE();
  };
  ViewGenerator$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ViewGenerator$Companion_instance = null;
  function ViewGenerator$Companion_getInstance() {
    if (ViewGenerator$Companion_instance === null) {
      new ViewGenerator$Companion();
    }
    return ViewGenerator$Companion_instance;
  }
  ViewGenerator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ViewGenerator', interfaces: []};
  function toWeb($receiver) {
    switch ($receiver.name) {
      case 'Start':
        return 'flex-start';
      case 'Center':
        return 'center';
      case 'End':
        return 'flex-end';
      case 'Fill':
        return 'stretch';
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  var ApplicationAccess_instance = null;
  function get_UI($receiver) {
    return coroutines.Dispatchers.Default;
  }
  function Image(image) {
    Image$Companion_getInstance();
    this.image = image;
  }
  function Image$Companion() {
    Image$Companion_instance = this;
    this.blank = new Image('');
  }
  Image$Companion.prototype.fromSvgString_61zpoe$ = function (svg) {
    var tmp$;
    return new Image('data:image/svg+xml;utf8,' + replace(replace(replace_0(replace(trim(Kotlin.isCharSequence(tmp$ = svg) ? tmp$ : throwCCE()).toString(), '#', '%23'), 34, 39), '<', '%3C'), '>', '%3E'));
  };
  Image$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Image$Companion_instance = null;
  function Image$Companion_getInstance() {
    if (Image$Companion_instance === null) {
      new Image$Companion();
    }
    return Image$Companion_instance;
  }
  Image.$metadata$ = {kind: Kind_CLASS, simpleName: 'Image', interfaces: []};
  var AnyDesiredMargins;
  var AnyLifecycles;
  function get_lifecycle($receiver) {
    var $receiver_0 = AnyLifecycles;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      var answer = new TreeObservableProperty();
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  }
  var PushNotifications_instance = null;
  var Preferences_instance = null;
  var Resources_instance = null;
  function appendLifecycled($receiver, other) {
    get_lifecycle(other).parent = get_lifecycle($receiver);
    $receiver.appendChild(other);
  }
  function removeLifecycled($receiver, other) {
    $receiver.removeChild(other);
    get_lifecycle(other).parent = null;
  }
  function HtmlViewFactory(theme, colorSet) {
    HtmlViewFactory$Companion_getInstance();
    if (colorSet === void 0)
      colorSet = theme.main;
    this.theme_iufkmc$_0 = theme;
    this.colorSet_w27j0w$_0 = colorSet;
    var tmp$, tmp$_0;
    tmp$ = this.colorSet;
    if (equals(tmp$, this.theme.main))
      tmp$_0 = 'ColorSetMain';
    else if (equals(tmp$, this.theme.bar))
      tmp$_0 = 'ColorSetBar';
    else if (equals(tmp$, this.theme.accent))
      tmp$_0 = 'ColorSetAccent';
    else if (equals(tmp$, ColorSet$Companion_getInstance().destructive))
      tmp$_0 = 'ColorSetDanger';
    else
      tmp$_0 = 'ColorSetUnknown';
    this.colorSetClass = tmp$_0;
    this.mousePosition = new Point();
  }
  Object.defineProperty(HtmlViewFactory.prototype, 'theme', {get: function () {
    return this.theme_iufkmc$_0;
  }});
  Object.defineProperty(HtmlViewFactory.prototype, 'colorSet', {get: function () {
    return this.colorSet_w27j0w$_0;
  }});
  HtmlViewFactory.prototype.defaultCss = function () {
    return replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(HtmlViewFactory$Companion_getInstance().DEFAULT_CSS_TEMPLATE, '!!mfn', this.theme.main.foreground.toWeb()), '!!mfh', this.theme.main.foregroundHighlighted.toWeb()), '!!mfd', this.theme.main.foregroundDisabled.toWeb()), '!!mbn', this.theme.main.background.toWeb()), '!!mbh', this.theme.main.backgroundHighlighted.toWeb()), '!!mbd', this.theme.main.backgroundDisabled.toWeb()), '!!bfn', this.theme.bar.foreground.toWeb()), '!!bfh', this.theme.bar.foregroundHighlighted.toWeb()), '!!bfd', this.theme.bar.foregroundDisabled.toWeb()), '!!bbn', this.theme.bar.background.toWeb()), '!!bbh', this.theme.bar.backgroundHighlighted.toWeb()), '!!bbd', this.theme.bar.backgroundDisabled.toWeb()), '!!afn', this.theme.accent.foreground.toWeb()), '!!afh', this.theme.accent.foregroundHighlighted.toWeb()), '!!afd', this.theme.accent.foregroundDisabled.toWeb()), '!!abn', this.theme.accent.background.toWeb()), '!!abh', this.theme.accent.backgroundHighlighted.toWeb()), '!!abd', this.theme.accent.backgroundDisabled.toWeb()), '!!dfn', ColorSet$Companion_getInstance().destructive.foreground.toWeb()), '!!dfh', ColorSet$Companion_getInstance().destructive.foregroundHighlighted.toWeb()), '!!dfd', ColorSet$Companion_getInstance().destructive.foregroundDisabled.toWeb()), '!!dbn', ColorSet$Companion_getInstance().destructive.background.toWeb()), '!!dbh', ColorSet$Companion_getInstance().destructive.backgroundHighlighted.toWeb()), '!!dbd', ColorSet$Companion_getInstance().destructive.backgroundDisabled.toWeb());
  };
  HtmlViewFactory.prototype.applyDefaultCss = function () {
    var tmp$;
    var cssElement = Kotlin.isType(tmp$ = document.createElement('style'), HTMLStyleElement) ? tmp$ : throwCCE();
    cssElement.type = 'text/css';
    cssElement.appendChild(document.createTextNode(this.defaultCss()));
    ensureNotNull(document.head).appendChild(cssElement);
  };
  HtmlViewFactory.prototype.toCssClass_6inwmn$ = function ($receiver) {
    switch ($receiver.name) {
      case 'Low':
        return 'ImportanceLow';
      case 'Normal':
        return 'ImportanceNormal';
      case 'High':
        return 'ImportanceHigh';
      case 'Danger':
        return 'ImportanceDanger';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  HtmlViewFactory.prototype.get_lifecycle_wijs$ = function ($receiver) {
    var $receiver_0 = AnyLifecycles;
    var tmp$;
    var value = $receiver_0.get_11rb$($receiver);
    if (value == null) {
      var answer = new TreeObservableProperty();
      $receiver_0.put_xwzc9p$($receiver, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  HtmlViewFactory.prototype.set_lifecycle_35e4z$ = function ($receiver, value) {
    AnyLifecycles.put_xwzc9p$($receiver, value);
  };
  HtmlViewFactory.prototype.withColorSet_n98zzz$ = function (colorSet) {
    return new HtmlViewFactory(this.theme, colorSet);
  };
  HtmlViewFactory.prototype.makeElement_b82vvp$ = function (name, setup) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.createElement(name), HTMLElement) ? tmp$ : throwCCE();
    setup($receiver);
    addClass($receiver, [this.colorSetClass]);
    return $receiver;
  };
  function HtmlViewFactory$contentRoot$lambda$lambda(this$HtmlViewFactory) {
    return function (it) {
      var tmp$;
      var event = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE();
      this$HtmlViewFactory.mousePosition.x = event.clientX;
      this$HtmlViewFactory.mousePosition.y = event.clientY;
      return Unit;
    };
  }
  function HtmlViewFactory$contentRoot$lambda(this$HtmlViewFactory, closure$view) {
    return function ($receiver) {
      this$HtmlViewFactory.applyDefaultCss();
      $receiver.id = 'root';
      $receiver.style.width = '100%';
      $receiver.style.height = '100%';
      $receiver.onmousemove = HtmlViewFactory$contentRoot$lambda$lambda(this$HtmlViewFactory);
      appendLifecycled($receiver, closure$view);
      this$HtmlViewFactory.get_lifecycle_wijs$($receiver).alwaysOn = true;
      return Unit;
    };
  }
  HtmlViewFactory.prototype.contentRoot_11rb$ = function (view) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$contentRoot$lambda(this, view));
  };
  HtmlViewFactory.prototype.window_f4pd4v$ = function (dependency, stack, tabs) {
    return defaultLargeWindow(this, this.theme, this.withColorSet_n98zzz$(this.theme.bar), dependency, stack, tabs);
  };
  HtmlViewFactory.prototype.pages_3q9tbi$ = function (dependency, page, pageGenerator) {
    return defaultPages(this, this.theme.main.foreground, dependency, page, pageGenerator.slice());
  };
  function HtmlViewFactory$tabs$lambda$lambda$lambda(closure$option, closure$selected) {
    return function () {
      closure$selected.value = closure$option;
      return Unit;
    };
  }
  function HtmlViewFactory$tabs$lambda$lambda(closure$it, closure$selected, this$HtmlViewFactory) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$it.iterator();
      while (tmp$.hasNext()) {
        var option = tmp$.next();
        $receiver.unaryPlus_wijs$(button(this$HtmlViewFactory, option.text, option.imageWithSizing, void 0, HtmlViewFactory$tabs$lambda$lambda$lambda(option, closure$selected)));
      }
      return Unit;
    };
  }
  function HtmlViewFactory$tabs$lambda(closure$selected, this$HtmlViewFactory) {
    return function (it) {
      return to(horizontal(this$HtmlViewFactory, HtmlViewFactory$tabs$lambda$lambda(it, closure$selected, this$HtmlViewFactory)), Animation$Fade_getInstance());
    };
  }
  HtmlViewFactory.prototype.tabs_gajy8q$ = function (options, selected) {
    return this.swap_yi09s7$(transform(options.onListUpdate, HtmlViewFactory$tabs$lambda(selected, this)));
  };
  HtmlViewFactory.prototype.list_4rlyri$$default = function (data, firstIndex, lastIndex, direction, makeView) {
    return defaultList(this, 20, this.colorSet.foreground, data, direction, firstIndex, lastIndex, makeView);
  };
  function HtmlViewFactory$text$lambda$lambda(this$) {
    return function (it) {
      this$.textContent = it;
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda(closure$align, this$HtmlViewFactory, closure$text) {
    return function ($receiver) {
      var tmp$;
      addClass($receiver, ['TinyText']);
      switch (closure$align.horizontal.name) {
        case 'Start':
          tmp$ = 'left';
          break;
        case 'Center':
          tmp$ = 'center';
          break;
        case 'End':
          tmp$ = 'right';
          break;
        case 'Fill':
          tmp$ = 'justify';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.align = tmp$;
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$text$lambda$lambda($receiver));
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda$lambda_0(this$) {
    return function (it) {
      this$.textContent = it;
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda_0(closure$align, this$HtmlViewFactory, closure$text) {
    return function ($receiver) {
      var tmp$;
      switch (closure$align.horizontal.name) {
        case 'Start':
          tmp$ = 'left';
          break;
        case 'Center':
          tmp$ = 'center';
          break;
        case 'End':
          tmp$ = 'right';
          break;
        case 'Fill':
          tmp$ = 'justify';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.align = tmp$;
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$text$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda$lambda_1(this$) {
    return function (it) {
      this$.textContent = it;
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda_1(closure$align, this$HtmlViewFactory, closure$text) {
    return function ($receiver) {
      var tmp$;
      switch (closure$align.horizontal.name) {
        case 'Start':
          tmp$ = 'left';
          break;
        case 'Center':
          tmp$ = 'center';
          break;
        case 'End':
          tmp$ = 'right';
          break;
        case 'Fill':
          tmp$ = 'justify';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.align = tmp$;
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$text$lambda$lambda_1($receiver));
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda$lambda_2(this$) {
    return function (it) {
      this$.textContent = it;
      return Unit;
    };
  }
  function HtmlViewFactory$text$lambda_2(closure$align, this$HtmlViewFactory, closure$text) {
    return function ($receiver) {
      var tmp$;
      switch (closure$align.horizontal.name) {
        case 'Start':
          tmp$ = 'left';
          break;
        case 'Center':
          tmp$ = 'center';
          break;
        case 'End':
          tmp$ = 'right';
          break;
        case 'Fill':
          tmp$ = 'justify';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.align = tmp$;
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$text$lambda$lambda_2($receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.text_30kv5x$$default = function (text, importance, size, align, maxLines) {
    var tmp$;
    switch (size.name) {
      case 'Tiny':
        tmp$ = this.makeElement_b82vvp$('p', HtmlViewFactory$text$lambda(align, this, text));
        break;
      case 'Body':
        tmp$ = this.makeElement_b82vvp$('p', HtmlViewFactory$text$lambda_0(align, this, text));
        break;
      case 'Subheader':
        tmp$ = this.makeElement_b82vvp$('h4', HtmlViewFactory$text$lambda_1(align, this, text));
        break;
      case 'Header':
        tmp$ = this.makeElement_b82vvp$('h1', HtmlViewFactory$text$lambda_2(align, this, text));
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver = tmp$;
    var tmp$_0, tmp$_1, tmp$_2;
    addClass($receiver, [this.toCssClass_6inwmn$(importance)]);
    tmp$_1 = $receiver.style;
    switch (align.vertical.name) {
      case 'Start':
        tmp$_0 = 'top';
        break;
      case 'Center':
        tmp$_0 = 'middle';
        break;
      case 'End':
        tmp$_0 = 'bottom';
        break;
      case 'Fill':
        tmp$_0 = 'middle';
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    tmp$_1.verticalAlign = tmp$_0;
    $receiver.style.textOverflow = 'ellipsis';
    if (maxLines !== 2147483647) {
      var em = (tmp$_2 = toDoubleOrNull(removeSuffix($receiver.style.lineHeight, 'em'))) != null ? tmp$_2 : 1.2;
      $receiver.style.lineHeight = em.toString() + 'em';
      $receiver.style.maxHeight = (em * maxLines).toString() + 'em';
    }
    return $receiver;
  };
  function HtmlViewFactory$image$lambda$lambda(this$) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      this$.src = it.image.image;
      tmp$_0 = this$.style;
      switch (it.scaleType.name) {
        case 'Crop':
          tmp$ = 'cover';
          break;
        case 'Fill':
          tmp$ = 'scale-down';
          break;
        case 'Center':
          tmp$ = 'none';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.objectFit = tmp$;
      if ((tmp$_1 = it.defaultSize) != null) {
        var this$_0 = this$;
        this$_0.style.width = tmp$_1.x.toString() + 'px';
        this$_0.style.height = tmp$_1.y.toString() + 'px';
      }
      return Unit;
    };
  }
  function HtmlViewFactory$image$lambda(this$HtmlViewFactory, closure$image) {
    return function ($receiver) {
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$image, HtmlViewFactory$image$lambda$lambda($receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.image_1bxa88$ = function (image) {
    return this.makeElement_b82vvp$('img', HtmlViewFactory$image$lambda(this, image));
  };
  HtmlViewFactory.prototype.web_e2dcnz$ = function (content) {
    throw new NotImplementedError_init();
  };
  function HtmlViewFactory$space$lambda(closure$size) {
    return function ($receiver) {
      $receiver.style.width = closure$size.x.toString() + 'px';
      $receiver.style.height = closure$size.y.toString() + 'px';
      return Unit;
    };
  }
  HtmlViewFactory.prototype.space_oljqke$ = function (size) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$space$lambda(size));
  };
  function HtmlViewFactory$button$lambda$lambda$lambda(it) {
    return it != null ? it : withSizing(color(MaterialIcon$android_getInstance(), Color$Companion_getInstance().white));
  }
  function HtmlViewFactory$button$lambda$lambda(closure$image, this$HtmlViewFactory) {
    return function () {
      return this$HtmlViewFactory.image_1bxa88$(transform(closure$image, HtmlViewFactory$button$lambda$lambda$lambda));
    };
  }
  function HtmlViewFactory$button$lambda$lambda_0(closure$isImageAdded, closure$imageNode, this$) {
    return function (it) {
      if (it == null) {
        if (closure$isImageAdded.v) {
          removeLifecycled(this$, closure$imageNode.value);
          closure$isImageAdded.v = false;
        }
      }
       else {
        if (!closure$isImageAdded.v) {
          appendLifecycled(this$, closure$imageNode.value);
          closure$isImageAdded.v = true;
        }
      }
      return Unit;
    };
  }
  function HtmlViewFactory$button$lambda$lambda_1(closure$onClick) {
    return function (it) {
      closure$onClick();
      return Unit;
    };
  }
  function HtmlViewFactory$button$lambda(closure$importance, this$HtmlViewFactory, closure$label, closure$image, closure$onClick) {
    return function ($receiver) {
      addClass($receiver, [this$HtmlViewFactory.toCssClass_6inwmn$(closure$importance)]);
      $receiver.type = 'button';
      var receiver = this$HtmlViewFactory.withColorSet_n98zzz$(this$HtmlViewFactory.theme.importance_ykvrk0$(closure$importance));
      var textNode = receiver.text_30kv5x$(closure$label, closure$importance, void 0, AlignPair$CenterCenter_getInstance());
      appendLifecycled($receiver, textNode);
      var imageNode = lazy(HtmlViewFactory$button$lambda$lambda(closure$image, this$HtmlViewFactory));
      var isImageAdded = {v: false};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$image, HtmlViewFactory$button$lambda$lambda_0(isImageAdded, imageNode, $receiver));
      $receiver.onclick = HtmlViewFactory$button$lambda$lambda_1(closure$onClick);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.button_tmzrmh$$default = function (label, image, importance, onClick) {
    return this.makeElement_b82vvp$('button', HtmlViewFactory$button$lambda(importance, this, label, image, onClick));
  };
  function HtmlViewFactory$imageButton$lambda$lambda$lambda$lambda(it) {
    return it != null ? it : '';
  }
  function HtmlViewFactory$imageButton$lambda$lambda(this$HtmlViewFactory, closure$importance, closure$label) {
    return function () {
      var receiver = this$HtmlViewFactory.withColorSet_n98zzz$(this$HtmlViewFactory.theme.importance_ykvrk0$(closure$importance));
      var closure$label_0 = closure$label;
      var closure$importance_0 = closure$importance;
      return receiver.text_30kv5x$(transform(closure$label_0, HtmlViewFactory$imageButton$lambda$lambda$lambda$lambda), closure$importance_0, void 0, AlignPair$CenterCenter_getInstance());
    };
  }
  function HtmlViewFactory$imageButton$lambda$lambda_0(closure$isTextAdded, closure$textNode, this$) {
    return function (it) {
      if (it == null) {
        if (closure$isTextAdded.v) {
          removeLifecycled(this$, closure$textNode.value);
          closure$isTextAdded.v = false;
        }
      }
       else {
        if (!closure$isTextAdded.v) {
          appendLifecycled(this$, closure$textNode.value);
          closure$isTextAdded.v = true;
        }
      }
      return Unit;
    };
  }
  function HtmlViewFactory$imageButton$lambda$lambda_1(closure$onClick) {
    return function (it) {
      closure$onClick();
      return Unit;
    };
  }
  function HtmlViewFactory$imageButton$lambda(closure$importance, this$HtmlViewFactory, closure$image, closure$label, closure$onClick) {
    return function ($receiver) {
      addClass($receiver, [this$HtmlViewFactory.toCssClass_6inwmn$(closure$importance), 'ImageFocused']);
      $receiver.type = 'button';
      var imageNode = this$HtmlViewFactory.image_1bxa88$(closure$image);
      appendLifecycled($receiver, imageNode);
      var textNode = lazy(HtmlViewFactory$imageButton$lambda$lambda(this$HtmlViewFactory, closure$importance, closure$label));
      var isTextAdded = {v: false};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$label, HtmlViewFactory$imageButton$lambda$lambda_0(isTextAdded, textNode, $receiver));
      $receiver.onclick = HtmlViewFactory$imageButton$lambda$lambda_1(closure$onClick);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.imageButton_aba7xb$$default = function (image, label, importance, onClick) {
    return this.makeElement_b82vvp$('button', HtmlViewFactory$imageButton$lambda(importance, this, image, label, onClick));
  };
  HtmlViewFactory.prototype.entryContext_6ji58x$$default = function (label, help, icon, feedback, field) {
    return defaultEntryContext(this, label, help, icon, feedback, field);
  };
  function HtmlViewFactory$picker$lambda$lambda(this$, closure$toString, closure$options, closure$selected) {
    return function (it) {
      var tmp$;
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = it.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var this$_0 = this$;
        var closure$toString_0 = closure$toString;
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var tmp$_1 = this$_0.options;
        var tmp$_2;
        var $receiver = Kotlin.isType(tmp$_2 = document.createElement('option'), HTMLOptionElement) ? tmp$_2 : throwCCE();
        $receiver.text = closure$toString_0(item);
        $receiver.value = index_0.toString();
        tmp$_1.add($receiver);
      }
      var tmp$_3 = this$;
      var $receiver_0 = closure$options.indexOf_11rb$(closure$selected.value);
      tmp$_3.selectedIndex = (tmp$ = !($receiver_0 === -1) ? $receiver_0 : null) != null ? tmp$ : 0;
      return Unit;
    };
  }
  function HtmlViewFactory$picker$lambda$lambda_0(closure$options, this$, closure$selected) {
    return function (f) {
      closure$selected.value = closure$options.get_za3lpa$(this$.selectedIndex);
      return Unit;
    };
  }
  function HtmlViewFactory$picker$lambda$lambda_1(closure$options, this$) {
    return function (selectedValue) {
      var tmp$;
      var tmp$_0 = this$;
      var $receiver = closure$options.indexOf_11rb$(selectedValue);
      tmp$_0.selectedIndex = (tmp$ = !($receiver === -1) ? $receiver : null) != null ? tmp$ : 0;
      return Unit;
    };
  }
  function HtmlViewFactory$picker$lambda(this$HtmlViewFactory, closure$options, closure$toString, closure$selected) {
    return function ($receiver) {
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$options.onListUpdate, HtmlViewFactory$picker$lambda$lambda($receiver, closure$toString, closure$options, closure$selected));
      $receiver.onselect = HtmlViewFactory$picker$lambda$lambda_0(closure$options, $receiver, closure$selected);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$selected, HtmlViewFactory$picker$lambda$lambda_1(closure$options, $receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.picker_dvtdv8$$default = function (options, selected, toString) {
    return this.makeElement_b82vvp$('select', HtmlViewFactory$picker$lambda(this, options, toString, selected));
  };
  function HtmlViewFactory$textField$lambda$lambda(this$, closure$text) {
    return function (f) {
      if (!equals(this$.value, closure$text.value)) {
        closure$text.value = this$.value;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$textField$lambda$lambda_0(this$) {
    return function (textValue) {
      if (!equals(this$.value, textValue)) {
        this$.value = textValue;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$textField$lambda(closure$type, closure$placeholder, closure$text, this$HtmlViewFactory) {
    return function ($receiver) {
      switch (closure$type.name) {
        case 'Paragraph':
          $receiver.type = 'text';
          break;
        case 'Name':
          $receiver.type = 'text';
          $receiver.autocomplete = 'name';
          break;
        case 'Password':
          $receiver.type = 'password';
          break;
        case 'Sentence':
          $receiver.type = 'text';
          $receiver.autocomplete = 'name';
          break;
        case 'CapitalizedIdentifier':
          $receiver.type = 'text';
          break;
        case 'URL':
          $receiver.type = 'url';
          break;
        case 'Email':
          $receiver.type = 'email';
          break;
        case 'Phone':
          $receiver.type = 'tel';
          break;
        case 'Address':
          $receiver.type = 'text';
          $receiver.autocomplete = 'street-address';
          break;
      }
      $receiver.placeholder = closure$placeholder;
      $receiver.oninput = HtmlViewFactory$textField$lambda$lambda($receiver, closure$text);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$textField$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.textField_bqlgfi$$default = function (text, placeholder, type) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$textField$lambda(type, placeholder, text, this));
  };
  function HtmlViewFactory$textArea$lambda$lambda(this$, closure$text) {
    return function (f) {
      if (!equals(this$.value, closure$text.value)) {
        closure$text.value = this$.value;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$textArea$lambda$lambda_0(this$) {
    return function (textValue) {
      if (!equals(this$.value, textValue)) {
        this$.value = textValue;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$textArea$lambda(closure$placeholder, closure$text, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.placeholder = closure$placeholder;
      $receiver.oninput = HtmlViewFactory$textArea$lambda$lambda($receiver, closure$text);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$text, HtmlViewFactory$textArea$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.textArea_bqlgfi$$default = function (text, placeholder, type) {
    return this.makeElement_b82vvp$('textarea', HtmlViewFactory$textArea$lambda(placeholder, text, this));
  };
  function HtmlViewFactory$numberField$lambda$lambda(this$, closure$value) {
    return function (f) {
      if (!equals(this$.valueAsNumber, closure$value.value)) {
        closure$value.value = this$.valueAsNumber;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$numberField$lambda$lambda_0(this$) {
    return function (value) {
      var tmp$;
      if (!equals(this$.valueAsNumber, value)) {
        this$.valueAsNumber = (tmp$ = value != null ? numberToDouble(value) : null) != null ? tmp$ : 0.0;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$numberField$lambda(closure$placeholder, closure$type, closure$decimalPlaces, closure$value, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.placeholder = closure$placeholder;
      $receiver.type = 'number';
      switch (closure$type.name) {
        case 'PositiveInteger':
        case 'PositiveFloat':
          $receiver.min = '0';
          break;
        default:break;
      }
      $receiver.step = closure$decimalPlaces >= 1 ? '.' + repeat('0', closure$decimalPlaces - 1 | 0) + '1' : '1';
      $receiver.oninput = HtmlViewFactory$numberField$lambda$lambda($receiver, closure$value);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$value, HtmlViewFactory$numberField$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.numberField_x7mhdx$$default = function (value, placeholder, type, decimalPlaces) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$numberField$lambda(placeholder, type, decimalPlaces, value, this));
  };
  function HtmlViewFactory$datePicker$lambda$parse(text) {
    return Date_0.Companion.iso8601_61zpoe$(text);
  }
  function HtmlViewFactory$datePicker$lambda$lambda(this$, closure$parse, closure$observable) {
    return function (f) {
      var parsed = closure$parse(this$.value);
      if (!(parsed != null ? parsed.equals(closure$observable.value) : null)) {
        closure$observable.value = parsed;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$datePicker$lambda$lambda_0(closure$observable, this$, closure$parse) {
    return function (it) {
      var value = closure$observable.value;
      var parsed = closure$parse(this$.value);
      if (!(parsed != null ? parsed.equals(value) : null)) {
        this$.value = value.iso8601();
      }
      return Unit;
    };
  }
  function HtmlViewFactory$datePicker$lambda(closure$observable, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.placeholder = $receiver.placeholder;
      var parse = HtmlViewFactory$datePicker$lambda$parse;
      $receiver.type = 'date';
      $receiver.oninput = HtmlViewFactory$datePicker$lambda$lambda($receiver, parse, closure$observable);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$observable, HtmlViewFactory$datePicker$lambda$lambda_0(closure$observable, $receiver, parse));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.datePicker_n4cs3r$ = function (observable) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$datePicker$lambda(observable, this));
  };
  function HtmlViewFactory$dateTimePicker$lambda(it) {
    return it.date;
  }
  function HtmlViewFactory$dateTimePicker$lambda_0(closure$observable) {
    return function (it) {
      return closure$observable.value.copy_8nunyj$(it);
    };
  }
  function HtmlViewFactory$dateTimePicker$lambda_1(it) {
    return it.time;
  }
  function HtmlViewFactory$dateTimePicker$lambda_2(closure$observable) {
    return function (it) {
      return closure$observable.value.copy_8nunyj$(void 0, it);
    };
  }
  HtmlViewFactory.prototype.dateTimePicker_vmr2ms$ = function (observable) {
    return this.horizontal_ghkj0i$([to(LinearPlacement$Companion_getInstance().fillFill, this.datePicker_n4cs3r$(transform_0(observable, HtmlViewFactory$dateTimePicker$lambda, HtmlViewFactory$dateTimePicker$lambda_0(observable)))), to(LinearPlacement$Companion_getInstance().wrapCenter, this.space_oljqke$(new Point(8.0, 8.0))), to(LinearPlacement$Companion_getInstance().fillFill, this.timePicker_mvf3wm$(transform_0(observable, HtmlViewFactory$dateTimePicker$lambda_1, HtmlViewFactory$dateTimePicker$lambda_2(observable))))]);
  };
  function HtmlViewFactory$timePicker$lambda$parse(text) {
    var tmp$;
    try {
      tmp$ = Time_init(toInt(substringBefore(text, 58)), toInt(substringBefore(substringAfter(text, 58), 58)));
    }
     catch (e) {
      tmp$ = new Time(0);
    }
    return tmp$;
  }
  function HtmlViewFactory$timePicker$lambda$lambda(this$, closure$parse, closure$observable) {
    return function (f) {
      var parsed = closure$parse(this$.value);
      if (!(parsed != null ? parsed.equals(closure$observable.value) : null)) {
        closure$observable.value = parsed;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$timePicker$lambda$lambda_0(closure$observable, this$, closure$parse) {
    return function (it) {
      var value = closure$observable.value;
      var parsed = closure$parse(this$.value);
      if (!(parsed != null ? parsed.equals(value) : null)) {
        this$.value = value.hours.toString() + ':' + value.minutes + ':' + value.seconds;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$timePicker$lambda(closure$observable, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.placeholder = $receiver.placeholder;
      var parse = HtmlViewFactory$timePicker$lambda$parse;
      $receiver.type = 'time';
      $receiver.oninput = HtmlViewFactory$timePicker$lambda$lambda($receiver, parse, closure$observable);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$observable, HtmlViewFactory$timePicker$lambda$lambda_0(closure$observable, $receiver, parse));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.timePicker_mvf3wm$ = function (observable) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$timePicker$lambda(observable, this));
  };
  function HtmlViewFactory$slider$lambda$lambda(this$, closure$observable) {
    return function (f) {
      if (numberToInt(this$.valueAsNumber) !== closure$observable.value) {
        closure$observable.value = numberToInt(this$.valueAsNumber);
      }
      return Unit;
    };
  }
  function HtmlViewFactory$slider$lambda$lambda_0(closure$observable, this$) {
    return function (it) {
      var value = closure$observable.value;
      if (numberToInt(this$.valueAsNumber) !== value) {
        this$.valueAsNumber = value;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$slider$lambda(closure$range, closure$observable, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.placeholder = $receiver.placeholder;
      $receiver.type = 'range';
      $receiver.min = closure$range.start.toString();
      $receiver.max = closure$range.endInclusive.toString();
      $receiver.oninput = HtmlViewFactory$slider$lambda$lambda($receiver, closure$observable);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$observable, HtmlViewFactory$slider$lambda$lambda_0(closure$observable, $receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.slider_57qx9q$ = function (range, observable) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$slider$lambda(range, observable, this));
  };
  function HtmlViewFactory$toggle$lambda$lambda(this$, closure$observable) {
    return function (f) {
      if (this$.checked !== closure$observable.value) {
        closure$observable.value = this$.checked;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$toggle$lambda$lambda_0(closure$observable, this$) {
    return function (it) {
      var value = closure$observable.value;
      if (this$.checked !== value) {
        this$.checked = value;
      }
      return Unit;
    };
  }
  function HtmlViewFactory$toggle$lambda(closure$observable, this$HtmlViewFactory) {
    return function ($receiver) {
      $receiver.type = 'checkbox';
      $receiver.oninput = HtmlViewFactory$toggle$lambda$lambda($receiver, closure$observable);
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$observable, HtmlViewFactory$toggle$lambda$lambda_0(closure$observable, $receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.toggle_n1o2qm$ = function (observable) {
    return this.makeElement_b82vvp$('input', HtmlViewFactory$toggle$lambda(observable, this));
  };
  function HtmlViewFactory$refresh$lambda(closure$onRefresh) {
    return function () {
      closure$onRefresh();
      return Unit;
    };
  }
  HtmlViewFactory.prototype.refresh_28bnka$ = function (contains, working, onRefresh) {
    return this.align_iq5na7$([to(AlignPair$FillFill_getInstance(), contains), to(AlignPair$TopRight_getInstance(), this.work_yxyo8z$(imageButton(this, withSizing(color(MaterialIcon$refresh_getInstance(), this.theme.main.foreground), new Point(24.0, 24.0)), void 0, void 0, HtmlViewFactory$refresh$lambda(onRefresh)), working))]);
  };
  function HtmlViewFactory$work$calc(closure$spinner, closure$view) {
    return function (loading) {
      return loading ? closure$spinner : closure$view;
    };
  }
  function HtmlViewFactory$work$lambda(it) {
    return to(it, Animation$Fade_getInstance());
  }
  function HtmlViewFactory$work$lambda$lambda(closure$calc, closure$currentView) {
    return function (it) {
      var new_0 = closure$calc(it);
      if (!equals(new_0, closure$currentView.value)) {
        closure$currentView.value = new_0;
      }
      return Unit;
    };
  }
  HtmlViewFactory.prototype.work_yxyo8z$ = function (view, isWorking) {
    var spinner = image(this, withSizing(Image$Companion_getInstance().fromSvgString_61zpoe$('\n' + '<svg width=' + '"' + '38' + '"' + ' height=' + '"' + '38' + '"' + ' viewBox=' + '"' + '0 0 38 38' + '"' + ' xmlns=' + '"' + 'http://www.w3.org/2000/svg' + '"' + ' stroke=' + '"' + this.colorSet.foreground.toWeb() + '"' + '>' + '\n' + '    <g fill=' + '"' + 'none' + '"' + ' fill-rule=' + '"' + 'evenodd' + '"' + '>' + '\n' + '        <g transform=' + '"' + 'translate(1 1)' + '"' + ' stroke-width=' + '"' + '2' + '"' + '>' + '\n' + '            <circle stroke-opacity=' + '"' + '.5' + '"' + ' cx=' + '"' + '18' + '"' + ' cy=' + '"' + '18' + '"' + ' r=' + '"' + '18' + '"' + '/>' + '\n' + '            <path d=' + '"' + 'M36 18c0-9.94-8.06-18-18-18' + '"' + '>' + '\n' + '                <animateTransform' + '\n' + '                    attributeName=' + '"' + 'transform' + '"' + '\n' + '                    type=' + '"' + 'rotate' + '"' + '\n' + '                    from=' + '"' + '0 18 18' + '"' + '\n' + '                    to=' + '"' + '360 18 18' + '"' + '\n' + '                    dur=' + '"' + '1s' + '"' + '\n' + '                    repeatCount=' + '"' + 'indefinite' + '"' + '/>' + '\n' + '            <\/path>' + '\n' + '        <\/g>' + '\n' + '    <\/g>' + '\n' + '<\/svg>'), new Point(24.0, 24.0)));
    var calc = HtmlViewFactory$work$calc(spinner, view);
    var currentView = new StandardObservableProperty(calc(isWorking.value));
    var $receiver = this.swap_yi09s7$(transform(currentView, HtmlViewFactory$work$lambda));
    listen(this.get_lifecycle_wijs$($receiver), isWorking, HtmlViewFactory$work$lambda$lambda(calc, currentView));
    return $receiver;
  };
  function HtmlViewFactory$progress$lambda(it) {
    return numberToInt(it * 100).toString() + '%';
  }
  function HtmlViewFactory$progress$calc(closure$view, closure$textProgress) {
    return function (prog) {
      return prog === 1.0 ? closure$view : closure$textProgress;
    };
  }
  function HtmlViewFactory$progress$lambda_0(it) {
    return to(it, Animation$Fade_getInstance());
  }
  function HtmlViewFactory$progress$lambda$lambda(closure$calc, closure$currentView) {
    return function (it) {
      var new_0 = closure$calc(it);
      if (!equals(new_0, closure$currentView.value)) {
        closure$currentView.value = new_0;
      }
      return Unit;
    };
  }
  HtmlViewFactory.prototype.progress_jx4seh$ = function (view, progress) {
    var textProgress = this.text_30kv5x$(transform(progress, HtmlViewFactory$progress$lambda));
    var calc = HtmlViewFactory$progress$calc(view, textProgress);
    var currentView = new StandardObservableProperty(calc(progress.value));
    var $receiver = this.swap_yi09s7$(transform(currentView, HtmlViewFactory$progress$lambda_0));
    listen(this.get_lifecycle_wijs$($receiver), progress, HtmlViewFactory$progress$lambda$lambda(calc, currentView));
    return $receiver;
  };
  function HtmlViewFactory$scrollVertical$lambda$lambda(closure$suppressListener, this$) {
    return function (it) {
      closure$suppressListener.v = true;
      this$.scrollTop = it;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollVertical$lambda$lambda_0(closure$suppressListener, this$, closure$amount) {
    return function (it) {
      if (closure$suppressListener.v) {
        closure$suppressListener.v = false;
        return Unit;
      }
      closure$amount.value = this$.scrollTop;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollVertical$lambda(closure$view, this$HtmlViewFactory, closure$amount) {
    return function ($receiver) {
      var $receiver_0 = closure$view;
      $receiver_0.style.maxHeight = '';
      appendLifecycled($receiver, $receiver_0);
      $receiver.style.overflowY = 'auto';
      var suppressListener = {v: false};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$amount, HtmlViewFactory$scrollVertical$lambda$lambda(suppressListener, $receiver));
      $receiver.onscroll = HtmlViewFactory$scrollVertical$lambda$lambda_0(suppressListener, $receiver, closure$amount);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.scrollVertical_9vpp9p$$default = function (view, amount) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$scrollVertical$lambda(view, this, amount));
  };
  function HtmlViewFactory$scrollHorizontal$lambda$lambda(closure$suppressListener, this$) {
    return function (it) {
      closure$suppressListener.v = true;
      this$.scrollLeft = it;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollHorizontal$lambda$lambda_0(closure$suppressListener, this$, closure$amount) {
    return function (it) {
      if (closure$suppressListener.v) {
        closure$suppressListener.v = false;
        return Unit;
      }
      closure$amount.value = this$.scrollLeft;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollHorizontal$lambda(closure$view, this$HtmlViewFactory, closure$amount) {
    return function ($receiver) {
      var $receiver_0 = closure$view;
      $receiver_0.style.maxWidth = '';
      appendLifecycled($receiver, $receiver_0);
      $receiver.style.overflowX = 'auto';
      var suppressListener = {v: false};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$amount, HtmlViewFactory$scrollHorizontal$lambda$lambda(suppressListener, $receiver));
      $receiver.onscroll = HtmlViewFactory$scrollHorizontal$lambda$lambda_0(suppressListener, $receiver, closure$amount);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.scrollHorizontal_9vpp9p$$default = function (view, amount) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$scrollHorizontal$lambda(view, this, amount));
  };
  function HtmlViewFactory$scrollBoth$lambda$lambda(closure$suppress, this$) {
    return function (it) {
      closure$suppress.v = true;
      this$.scrollLeft = it;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollBoth$lambda$lambda_0(closure$suppress, this$) {
    return function (it) {
      closure$suppress.v = true;
      this$.scrollTop = it;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollBoth$lambda$lambda_1(closure$suppress, this$, closure$amountX, closure$amountY) {
    return function (it) {
      if (closure$suppress.v) {
        closure$suppress.v = false;
        return Unit;
      }
      closure$amountX.value = this$.scrollLeft;
      closure$amountY.value = this$.scrollTop;
      return Unit;
    };
  }
  function HtmlViewFactory$scrollBoth$lambda(closure$view, this$HtmlViewFactory, closure$amountX, closure$amountY) {
    return function ($receiver) {
      var $receiver_0 = closure$view;
      $receiver_0.style.maxWidth = '';
      $receiver_0.style.maxHeight = '';
      appendLifecycled($receiver, $receiver_0);
      $receiver.style.overflowX = 'auto';
      $receiver.style.overflowY = 'auto';
      var suppress = {v: false};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$amountX, HtmlViewFactory$scrollBoth$lambda$lambda(suppress, $receiver));
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$amountY, HtmlViewFactory$scrollBoth$lambda$lambda_0(suppress, $receiver));
      $receiver.onscroll = HtmlViewFactory$scrollBoth$lambda$lambda_1(suppress, $receiver, closure$amountX, closure$amountY);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.scrollBoth_wmfa1z$$default = function (view, amountX, amountY) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$scrollBoth$lambda(view, this, amountX, amountY));
  };
  function Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda(closure$currentView_0, this$_0, closure$view_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$currentView = closure$currentView_0;
    this.local$this$ = this$_0;
    this.local$closure$view = closure$view_0;
  }
  Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda.prototype.constructor = Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda;
  Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            try {
              removeLifecycled(this.local$this$, ensureNotNull(this.local$closure$currentView.v));
            }
             catch (e) {
            }

            var tmp$ = this.local$this$;
            var $receiver = this.local$closure$view;
            $receiver.style.width = '100%';
            $receiver.style.height = '100%';
            appendLifecycled(tmp$, $receiver);
            return this.local$closure$currentView.v = this.local$closure$view, Unit;
          case 1:
            throw this.exception_0;
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
  function HtmlViewFactory$swap$lambda$lambda$lambda(closure$currentView_0, this$_0, closure$view_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HtmlViewFactory$swap$lambda$lambda$lambda(closure$currentView_0, this$_0, closure$view_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HtmlViewFactory$swap$lambda$lambda(closure$currentView, this$) {
    return function (f) {
      var view = f.component1(), animation = f.component2();
      launch(coroutines.GlobalScope, get_UI(coroutines.Dispatchers), void 0, HtmlViewFactory$swap$lambda$lambda$lambda(closure$currentView, this$, view));
      return Unit;
    };
  }
  function HtmlViewFactory$swap$lambda(this$HtmlViewFactory, closure$view) {
    return function ($receiver) {
      $receiver.style.maxWidth = '100%';
      $receiver.style.maxHeight = '100%';
      $receiver.style.position = 'relative';
      var currentView = {v: null};
      bind(this$HtmlViewFactory.get_lifecycle_wijs$($receiver), closure$view, HtmlViewFactory$swap$lambda$lambda(currentView, $receiver));
      return Unit;
    };
  }
  HtmlViewFactory.prototype.swap_yi09s7$ = function (view) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$swap$lambda(this, view));
  };
  function HtmlViewFactory$horizontal$lambda(closure$views) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.style.maxWidth = '100%';
      $receiver.style.maxHeight = '100%';
      $receiver.style.display = 'flex';
      $receiver.style.flexDirection = 'row';
      tmp$ = closure$views;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var tmp$_1 = tmp$[tmp$_0];
        var placement = tmp$_1.component1(), view = tmp$_1.component2();
        view.style.alignSelf = toWeb(placement.align);
        view.style.flexGrow = placement.weight.toString();
        view.style.flexShrink = placement.weight.toString();
        if (placement.weight !== 0.0) {
          $receiver.style.width = '100%';
        }
        appendLifecycled($receiver, view);
      }
      return Unit;
    };
  }
  HtmlViewFactory.prototype.horizontal_ghkj0i$ = function (views) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$horizontal$lambda(views));
  };
  function HtmlViewFactory$vertical$lambda(closure$views) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.style.maxWidth = '100%';
      $receiver.style.maxHeight = '100%';
      $receiver.style.display = 'flex';
      $receiver.style.flexDirection = 'column';
      tmp$ = closure$views;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var tmp$_1 = tmp$[tmp$_0];
        var placement = tmp$_1.component1(), view = tmp$_1.component2();
        view.style.alignSelf = toWeb(placement.align);
        view.style.flexGrow = placement.weight.toString();
        view.style.flexShrink = placement.weight.toString();
        if (placement.weight !== 0.0) {
          $receiver.style.height = '100%';
        }
        appendLifecycled($receiver, view);
      }
      return Unit;
    };
  }
  HtmlViewFactory.prototype.vertical_ghkj0i$ = function (views) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$vertical$lambda(views));
  };
  HtmlViewFactory.prototype.measure_et2u0m$ = function (element, out) {
    if (out === void 0)
      out = new Point();
    element.style.position = 'static';
    element.style.visibility = 'hidden';
    ensureNotNull(document.body).appendChild(element);
    out.x = element.clientWidth + (element.clientLeft * 2 | 0);
    out.y = element.clientHeight + (element.clientHeight * 2 | 0);
    ensureNotNull(document.body).removeChild(element);
    element.style.visibility = 'visible';
    element.style.position = 'static';
    return out;
  };
  function HtmlViewFactory$align$lambda(closure$views, this$HtmlViewFactory) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      $receiver.style.maxWidth = '100%';
      $receiver.style.maxHeight = '100%';
      $receiver.style.position = 'relative';
      var reuse = new Point();
      var bestX = 0.0;
      var bestY = 0.0;
      tmp$ = closure$views;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var view = tmp$[tmp$_0];
        this$HtmlViewFactory.measure_et2u0m$(view.second, reuse);
        if (reuse.x > bestX)
          bestX = reuse.x;
        if (reuse.y > bestY)
          bestY = reuse.y;
      }
      $receiver.style.minWidth = bestX.toString() + 'px';
      $receiver.style.minHeight = bestY.toString() + 'px';
      tmp$_1 = closure$views;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var tmp$_3 = tmp$_1[tmp$_2];
        var align = tmp$_3.component1(), view_0 = tmp$_3.component2();
        view_0.style.position = 'absolute';
        switch (align.horizontal.name) {
          case 'Start':
            view_0.style.left = '0px';
            break;
          case 'Center':
            view_0.style.left = '50%';
            view_0.style.transform = 'translateX(-50%)';
            break;
          case 'End':
            view_0.style.right = '0px';
            break;
          case 'Fill':
            view_0.style.width = '100%';
            break;
        }
        switch (align.vertical.name) {
          case 'Start':
            view_0.style.top = '0px';
            break;
          case 'Center':
            view_0.style.top = '50%';
            view_0.style.transform = view_0.style.transform + ' translateY(-50%)';
            break;
          case 'End':
            view_0.style.bottom = '0px';
            break;
          case 'Fill':
            view_0.style.height = '100%';
            break;
        }
        appendLifecycled($receiver, view_0);
      }
      return Unit;
    };
  }
  HtmlViewFactory.prototype.align_iq5na7$ = function (views) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$align$lambda(views, this));
  };
  HtmlViewFactory.prototype.setWidth_ovmznb$ = function ($receiver, width) {
    $receiver.style.width = width.toString() + ' px';
    return $receiver;
  };
  HtmlViewFactory.prototype.setHeight_ovmznb$ = function ($receiver, height) {
    $receiver.style.height = height.toString() + ' px';
    return $receiver;
  };
  function HtmlViewFactory$card$lambda(closure$view) {
    return function ($receiver) {
      $receiver.classList.add('card');
      appendLifecycled($receiver, closure$view);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.card_11rb$ = function (view) {
    return this.makeElement_b82vvp$('div', HtmlViewFactory$card$lambda(view));
  };
  HtmlViewFactory.prototype.margin_qyxe2k$$default = function ($receiver, left, top, right, bottom) {
    $receiver.style.marginLeft = left.toString() + ' px';
    $receiver.style.marginTop = top.toString() + ' px';
    $receiver.style.marginRight = right.toString() + ' px';
    $receiver.style.marginBottom = bottom.toString() + ' px';
    return $receiver;
  };
  function HtmlViewFactory$background$lambda$lambda(this$) {
    return function (it) {
      this$.style.backgroundColor = it.toWeb();
      return Unit;
    };
  }
  HtmlViewFactory.prototype.background_y36hnw$ = function ($receiver, color) {
    bind(this.get_lifecycle_wijs$($receiver), color, HtmlViewFactory$background$lambda$lambda($receiver));
    return $receiver;
  };
  function HtmlViewFactory$alpha$lambda$lambda(this$) {
    return function (it) {
      this$.style.opacity = it.toString();
      return Unit;
    };
  }
  HtmlViewFactory.prototype.alpha_3rlye2$ = function ($receiver, alpha) {
    bind(this.get_lifecycle_wijs$($receiver), alpha, HtmlViewFactory$alpha$lambda$lambda($receiver));
    return $receiver;
  };
  function HtmlViewFactory$clickable$lambda$lambda(closure$onClick) {
    return function (it) {
      closure$onClick();
      return Unit;
    };
  }
  HtmlViewFactory.prototype.clickable_5g8z5d$ = function ($receiver, onClick) {
    $receiver.onclick = HtmlViewFactory$clickable$lambda$lambda(onClick);
    return $receiver;
  };
  function HtmlViewFactory$altClickable$lambda$lambda(closure$onAltClick) {
    return function (it) {
      it.preventDefault();
      closure$onAltClick();
      return Unit;
    };
  }
  HtmlViewFactory.prototype.altClickable_5g8z5d$ = function ($receiver, onAltClick) {
    $receiver.oncontextmenu = HtmlViewFactory$altClickable$lambda$lambda(onAltClick);
    return $receiver;
  };
  function HtmlViewFactory$launchDialog$lambda$lambda() {
    return Unit;
  }
  function HtmlViewFactory$launchDialog$lambda$lambda_0(closure$dialogDismisser) {
    return function () {
      closure$dialogDismisser.v();
      return Unit;
    };
  }
  function HtmlViewFactory$launchDialog$lambda$lambda_1(closure$dialogDismisser) {
    return function () {
      closure$dialogDismisser.v();
      return Unit;
    };
  }
  function HtmlViewFactory$launchDialog$lambda$lambda_2(closure$newView, this$) {
    return function () {
      removeLifecycled(this$, closure$newView);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.launchDialog_y4kujy$$default = function (dismissable, onDismiss, makeView) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = document.getElementById('root')) != null) {
      var tmp$_2;
      tmp$_1 = Kotlin.isType(tmp$_2 = tmp$, HTMLDivElement) ? tmp$_2 : throwCCE();
    }
     else
      tmp$_1 = null;
    if ((tmp$_0 = tmp$_1) != null) {
      var dialogDismisser = {v: HtmlViewFactory$launchDialog$lambda$lambda};
      var $receiver = this.clickable_5g8z5d$(this.background_wxf12v$(this.align_iq5na7$([to(AlignPair$CenterCenter_getInstance(), makeView(HtmlViewFactory$launchDialog$lambda$lambda_0(dialogDismisser)))]), Color$Companion_getInstance().black.copy_7b5o5w$(0.5)), HtmlViewFactory$launchDialog$lambda$lambda_1(dialogDismisser));
      $receiver.style.position = 'fixed';
      $receiver.style.top = '0';
      $receiver.style.right = '0';
      $receiver.style.bottom = '0';
      $receiver.style.left = '0';
      $receiver.style.overflowWrap = 'auto';
      $receiver.style.zIndex = '99999999';
      var newView = $receiver;
      appendLifecycled(tmp$_0, newView);
      dialogDismisser.v = HtmlViewFactory$launchDialog$lambda$lambda_2(newView, tmp$_0);
    }
  };
  function HtmlViewFactory$launchSelector$lambda$lambda() {
    return Unit;
  }
  function HtmlViewFactory$launchSelector$lambda$lambda$lambda(closure$option) {
    return function () {
      closure$option.second();
      return Unit;
    };
  }
  function HtmlViewFactory$launchSelector$lambda$lambda_0(closure$title, this$HtmlViewFactory, closure$options) {
    return function ($receiver) {
      var tmp$;
      if (closure$title != null) {
        $receiver.unaryMinus_wijs$(text(this$HtmlViewFactory, closure$title));
      }
      tmp$ = closure$options.iterator();
      while (tmp$.hasNext()) {
        var option = tmp$.next();
        $receiver.unaryMinus_wijs$(button(this$HtmlViewFactory, option.first, void 0, Importance$Low_getInstance(), HtmlViewFactory$launchSelector$lambda$lambda$lambda(option)));
      }
      return Unit;
    };
  }
  function HtmlViewFactory$launchSelector$lambda$lambda_1(closure$innerView) {
    return function ($receiver) {
      $receiver.style.position = 'fixed';
      $receiver.style.top = '0';
      $receiver.style.right = '0';
      $receiver.style.bottom = '0';
      $receiver.style.left = '0';
      $receiver.style.overflowWrap = 'auto';
      $receiver.style.zIndex = '99999999';
      appendLifecycled($receiver, closure$innerView);
      return Unit;
    };
  }
  function HtmlViewFactory$launchSelector$lambda$lambda_2(closure$dialogDismisser) {
    return function () {
      closure$dialogDismisser.v();
      return Unit;
    };
  }
  function HtmlViewFactory$launchSelector$lambda$lambda_3(closure$newView, this$) {
    return function () {
      removeLifecycled(this$, closure$newView);
      return Unit;
    };
  }
  HtmlViewFactory.prototype.launchSelector_8prigm$$default = function (title, options) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = document.getElementById('root')) != null) {
      var tmp$_2;
      tmp$_1 = Kotlin.isType(tmp$_2 = tmp$, HTMLDivElement) ? tmp$_2 : throwCCE();
    }
     else
      tmp$_1 = null;
    if ((tmp$_0 = tmp$_1) != null) {
      var dialogDismisser = {v: HtmlViewFactory$launchSelector$lambda$lambda};
      var $receiver = this.card_11rb$(vertical(this, HtmlViewFactory$launchSelector$lambda$lambda_0(title, this, options)));
      $receiver.style.display = 'inline-block';
      $receiver.style.marginLeft = this.mousePosition.x.toString() + 'px';
      $receiver.style.marginTop = this.mousePosition.y.toString() + 'px';
      var innerView = $receiver;
      var newView = this.clickable_5g8z5d$(this.makeElement_b82vvp$('div', HtmlViewFactory$launchSelector$lambda$lambda_1(innerView)), HtmlViewFactory$launchSelector$lambda$lambda_2(dialogDismisser));
      appendLifecycled(tmp$_0, newView);
      dialogDismisser.v = HtmlViewFactory$launchSelector$lambda$lambda_3(newView, tmp$_0);
    }
  };
  function HtmlViewFactory$Companion() {
    HtmlViewFactory$Companion_instance = this;
    this.DEFAULT_CSS_TEMPLATE = '\n* {\n    font-family: Verdana, Geneva, sans-serif;\n    margin: 8px;\n    overflow: hidden\n}\ndiv, html, body {\n    margin: 0\n}\nhtml, body {\n    height: 100vh;\n    overflow: hidden;\n    background-color: !!mbn\n}\n.ColorSetMain:active {\n    color: !!mfh\n}\n.ColorSetMain:disabled {\n    color: !!mfd\n}\n.ColorSetMain {\n    color: !!mfn\n}\n.ColorSetBar:active {\n    color: !!bfh\n}\n.ColorSetBar:disabled {\n    color: !!bfd\n}\n.ColorSetBar {\n    color: !!bfn\n}\n.ColorSetAccent:active {\n    color: !!afh\n}\n.ColorSetAccent:disabled {\n    color: !!afd\n}\n.ColorSetAccent {\n    color: !!afn\n}\n.ColorSetDanger:active {\n    color: !!dfh\n}\n.ColorSetDanger:disabled {\n    color: !!dfd\n}\n.ColorSetDanger {\n    color: !!dfn\n}\np.TinyText {\n    font-size: 70%;\n}\n/*p.ImportanceLow, h4.ImportanceLow, h1.ImportanceLow {\n    opacity: .5\n}*/\np.ImportanceDanger, h4.ImportanceDanger, h1.ImportanceDanger {\n    color: !!dfn\n}\nbutton.ImportanceLow {\n    color: !!mfn;\n    background-color: transparent;\n    border-width: 0;\n    box-shadow: none;\n    transition: background-color .25s\n}\nbutton.ImportanceLow:active:hover {\n    color: !!mfh;\n    background-color: rgba(0,0,0,.2);\n    box-shadow: none;\n}\nbutton.ImportanceLow:hover {\n    color: !!mfh;\n    background-color: rgba(0,0,0,.1);\n    box-shadow: none;\n}\nbutton {\n    border-width: 0;\n    box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);\n    transition: box-shadow .25s\n}\nbutton:active:hover {\n    box-shadow: 0 1px 3px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);\n}\nbutton:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);\n}\nbutton.ImportanceNormal {\n    background-color: !!bbn;\n}\nbutton.ImportanceHigh {\n    background-color: !!abn;\n}\nbutton.ImportanceDanger {\n    background-color: !!dbn;\n}\nbutton.ImportanceLow.ImageFocused {}\nbutton.ImportanceNormal.ImageFocused {}\nbutton.ImportanceHigh.ImageFocused {}\nbutton.ImportanceDanger.ImageFocused {}\ndiv.card {\n    background-color: !!mbh;\n    margin: 8px;\n    padding: 8px;\n    box-shadow: 0 1px 3px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);\n}\nselect {}\noption {\n    background-color: transparent\n}\nimg {}\ntextarea, input, select {\n    border-width: 0;\n    border-color: !!mfd;\n    border-bottom-width: 1px;\n    background-color: !!mbn;\n    transition: border-bottom-width .25s, border-color .25s\n}\ntextarea:hover, input:hover, select:hover, textarea:focus, input:focus, select:focus {\n    border-bottom-width: 2px;\n    border-color: !!bbn;\n}\ninput[type="password"] {}\ninput[type="url"] {}\ninput[type="email"] {}\ninput[type="tel"] {}\ninput[type="text"] {}\ninput[type="number"] {}\ninput[type="date"] {}\ninput[type="time"] {}\ninput[type="range"] {}\ninput[type="checkbox"] {}\n';
  }
  HtmlViewFactory$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var HtmlViewFactory$Companion_instance = null;
  function HtmlViewFactory$Companion_getInstance() {
    if (HtmlViewFactory$Companion_instance === null) {
      new HtmlViewFactory$Companion();
    }
    return HtmlViewFactory$Companion_instance;
  }
  HtmlViewFactory.$metadata$ = {kind: Kind_CLASS, simpleName: 'HtmlViewFactory', interfaces: [ViewFactory]};
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$koolui = package$lightningkite.koolui || (package$lightningkite.koolui = {});
  var package$builders = package$koolui.builders || (package$koolui.builders = {});
  package$builders.LinearBuilder = LinearBuilder;
  package$builders.horizontal_qz9z9j$ = horizontal;
  package$builders.vertical_qz9z9j$ = vertical;
  package$builders.AlignPairBuilder = AlignPairBuilder;
  package$builders.align_lo8u09$ = align;
  package$builders.text_3wxnn9$ = text;
  package$builders.image_4nmitk$ = image;
  package$builders.space_8wn81u$ = space;
  package$builders.button_tzp7wc$ = button;
  package$builders.imageButton_fq84gw$ = imageButton;
  package$builders.launchConfirmationDialog_149w9b$ = launchConfirmationDialog;
  package$builders.launchInfoDialog_h9sd6e$ = launchInfoDialog;
  package$builders.contentRoot_8wn5gt$ = contentRoot;
  Object.defineProperty(Color, 'Companion', {get: Color$Companion_getInstance});
  var package$color = package$koolui.color || (package$koolui.color = {});
  package$color.Color = Color;
  Object.defineProperty(ColorSet, 'Companion', {get: ColorSet$Companion_getInstance});
  package$color.ColorSet = ColorSet;
  $$importsForInline$$.recktangle = $module$recktangle;
  Object.defineProperty(HSVColor, 'Companion', {get: HSVColor$Companion_getInstance});
  package$color.HSVColor = HSVColor;
  Object.defineProperty(Theme, 'Companion', {get: Theme$Companion_getInstance});
  package$color.Theme = Theme;
  Object.defineProperty(Animation, 'None', {get: Animation$None_getInstance});
  Object.defineProperty(Animation, 'Push', {get: Animation$Push_getInstance});
  Object.defineProperty(Animation, 'Pop', {get: Animation$Pop_getInstance});
  Object.defineProperty(Animation, 'MoveUp', {get: Animation$MoveUp_getInstance});
  Object.defineProperty(Animation, 'MoveDown', {get: Animation$MoveDown_getInstance});
  Object.defineProperty(Animation, 'Fade', {get: Animation$Fade_getInstance});
  Object.defineProperty(Animation, 'Flip', {get: Animation$Flip_getInstance});
  var package$concepts = package$koolui.concepts || (package$koolui.concepts = {});
  package$concepts.Animation = Animation;
  Object.defineProperty(Importance, 'Low', {get: Importance$Low_getInstance});
  Object.defineProperty(Importance, 'Normal', {get: Importance$Normal_getInstance});
  Object.defineProperty(Importance, 'High', {get: Importance$High_getInstance});
  Object.defineProperty(Importance, 'Danger', {get: Importance$Danger_getInstance});
  Object.defineProperty(Importance, 'Companion', {get: Importance$Companion_getInstance});
  package$concepts.Importance = Importance;
  Object.defineProperty(NumberInputType, 'Integer', {get: NumberInputType$Integer_getInstance});
  Object.defineProperty(NumberInputType, 'Float', {get: NumberInputType$Float_getInstance});
  Object.defineProperty(NumberInputType, 'PositiveInteger', {get: NumberInputType$PositiveInteger_getInstance});
  Object.defineProperty(NumberInputType, 'PositiveFloat', {get: NumberInputType$PositiveFloat_getInstance});
  package$concepts.NumberInputType = NumberInputType;
  Object.defineProperty(TextInputType, 'Paragraph', {get: TextInputType$Paragraph_getInstance});
  Object.defineProperty(TextInputType, 'Name', {get: TextInputType$Name_getInstance});
  Object.defineProperty(TextInputType, 'Password', {get: TextInputType$Password_getInstance});
  Object.defineProperty(TextInputType, 'Sentence', {get: TextInputType$Sentence_getInstance});
  Object.defineProperty(TextInputType, 'CapitalizedIdentifier', {get: TextInputType$CapitalizedIdentifier_getInstance});
  Object.defineProperty(TextInputType, 'URL', {get: TextInputType$URL_getInstance});
  Object.defineProperty(TextInputType, 'Email', {get: TextInputType$Email_getInstance});
  Object.defineProperty(TextInputType, 'Phone', {get: TextInputType$Phone_getInstance});
  Object.defineProperty(TextInputType, 'Address', {get: TextInputType$Address_getInstance});
  package$concepts.TextInputType = TextInputType;
  Object.defineProperty(TextSize, 'Tiny', {get: TextSize$Tiny_getInstance});
  Object.defineProperty(TextSize, 'Body', {get: TextSize$Body_getInstance});
  Object.defineProperty(TextSize, 'Subheader', {get: TextSize$Subheader_getInstance});
  Object.defineProperty(TextSize, 'Header', {get: TextSize$Header_getInstance});
  Object.defineProperty(TextSize, 'Companion', {get: TextSize$Companion_getInstance});
  package$concepts.TextSize = TextSize;
  Object.defineProperty(Align, 'Start', {get: Align$Start_getInstance});
  Object.defineProperty(Align, 'Center', {get: Align$Center_getInstance});
  Object.defineProperty(Align, 'End', {get: Align$End_getInstance});
  Object.defineProperty(Align, 'Fill', {get: Align$Fill_getInstance});
  var package$geometry = package$koolui.geometry || (package$koolui.geometry = {});
  package$geometry.Align = Align;
  Object.defineProperty(AlignPair, 'TopLeft', {get: AlignPair$TopLeft_getInstance});
  Object.defineProperty(AlignPair, 'TopCenter', {get: AlignPair$TopCenter_getInstance});
  Object.defineProperty(AlignPair, 'TopFill', {get: AlignPair$TopFill_getInstance});
  Object.defineProperty(AlignPair, 'TopRight', {get: AlignPair$TopRight_getInstance});
  Object.defineProperty(AlignPair, 'CenterLeft', {get: AlignPair$CenterLeft_getInstance});
  Object.defineProperty(AlignPair, 'CenterCenter', {get: AlignPair$CenterCenter_getInstance});
  Object.defineProperty(AlignPair, 'CenterFill', {get: AlignPair$CenterFill_getInstance});
  Object.defineProperty(AlignPair, 'CenterRight', {get: AlignPair$CenterRight_getInstance});
  Object.defineProperty(AlignPair, 'FillLeft', {get: AlignPair$FillLeft_getInstance});
  Object.defineProperty(AlignPair, 'FillCenter', {get: AlignPair$FillCenter_getInstance});
  Object.defineProperty(AlignPair, 'FillFill', {get: AlignPair$FillFill_getInstance});
  Object.defineProperty(AlignPair, 'FillRight', {get: AlignPair$FillRight_getInstance});
  Object.defineProperty(AlignPair, 'BottomLeft', {get: AlignPair$BottomLeft_getInstance});
  Object.defineProperty(AlignPair, 'BottomCenter', {get: AlignPair$BottomCenter_getInstance});
  Object.defineProperty(AlignPair, 'BottomFill', {get: AlignPair$BottomFill_getInstance});
  Object.defineProperty(AlignPair, 'BottomRight', {get: AlignPair$BottomRight_getInstance});
  package$geometry.AlignPair = AlignPair;
  Object.defineProperty(Direction, 'Right', {get: Direction$Right_getInstance});
  Object.defineProperty(Direction, 'Up', {get: Direction$Up_getInstance});
  Object.defineProperty(Direction, 'Left', {get: Direction$Left_getInstance});
  Object.defineProperty(Direction, 'Down', {get: Direction$Down_getInstance});
  package$geometry.Direction = Direction;
  Object.defineProperty(LinearPlacement, 'Companion', {get: LinearPlacement$Companion_getInstance});
  package$geometry.LinearPlacement = LinearPlacement;
  var package$image = package$koolui.image || (package$koolui.image = {});
  package$image.withSizing_9udguu$ = withSizing;
  Object.defineProperty(ImageScaleType, 'Crop', {get: ImageScaleType$Crop_getInstance});
  Object.defineProperty(ImageScaleType, 'Fill', {get: ImageScaleType$Fill_getInstance});
  Object.defineProperty(ImageScaleType, 'Center', {get: ImageScaleType$Center_getInstance});
  package$image.ImageScaleType = ImageScaleType;
  Object.defineProperty(ImageWithSizing, 'Companion', {get: ImageWithSizing$Companion_getInstance});
  package$image.ImageWithSizing = ImageWithSizing;
  Object.defineProperty(MaterialIcon, '_3dRotation', {get: MaterialIcon$_3dRotation_getInstance});
  Object.defineProperty(MaterialIcon, 'accessibility', {get: MaterialIcon$accessibility_getInstance});
  Object.defineProperty(MaterialIcon, 'accessible', {get: MaterialIcon$accessible_getInstance});
  Object.defineProperty(MaterialIcon, 'accountBalance', {get: MaterialIcon$accountBalance_getInstance});
  Object.defineProperty(MaterialIcon, 'accountBalanceWallet', {get: MaterialIcon$accountBalanceWallet_getInstance});
  Object.defineProperty(MaterialIcon, 'accountBox', {get: MaterialIcon$accountBox_getInstance});
  Object.defineProperty(MaterialIcon, 'accountCircle', {get: MaterialIcon$accountCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'addShoppingCart', {get: MaterialIcon$addShoppingCart_getInstance});
  Object.defineProperty(MaterialIcon, 'alarm', {get: MaterialIcon$alarm_getInstance});
  Object.defineProperty(MaterialIcon, 'alarmAdd', {get: MaterialIcon$alarmAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'alarmOff', {get: MaterialIcon$alarmOff_getInstance});
  Object.defineProperty(MaterialIcon, 'alarmOn', {get: MaterialIcon$alarmOn_getInstance});
  Object.defineProperty(MaterialIcon, 'allOut', {get: MaterialIcon$allOut_getInstance});
  Object.defineProperty(MaterialIcon, 'android', {get: MaterialIcon$android_getInstance});
  Object.defineProperty(MaterialIcon, 'announcement', {get: MaterialIcon$announcement_getInstance});
  Object.defineProperty(MaterialIcon, 'aspectRatio', {get: MaterialIcon$aspectRatio_getInstance});
  Object.defineProperty(MaterialIcon, 'assessment', {get: MaterialIcon$assessment_getInstance});
  Object.defineProperty(MaterialIcon, 'assignment', {get: MaterialIcon$assignment_getInstance});
  Object.defineProperty(MaterialIcon, 'assignmentInd', {get: MaterialIcon$assignmentInd_getInstance});
  Object.defineProperty(MaterialIcon, 'assignmentLate', {get: MaterialIcon$assignmentLate_getInstance});
  Object.defineProperty(MaterialIcon, 'assignmentReturned', {get: MaterialIcon$assignmentReturned_getInstance});
  Object.defineProperty(MaterialIcon, 'assignmentReturn', {get: MaterialIcon$assignmentReturn_getInstance});
  Object.defineProperty(MaterialIcon, 'assignmentTurnedIn', {get: MaterialIcon$assignmentTurnedIn_getInstance});
  Object.defineProperty(MaterialIcon, 'autorenew', {get: MaterialIcon$autorenew_getInstance});
  Object.defineProperty(MaterialIcon, 'backup', {get: MaterialIcon$backup_getInstance});
  Object.defineProperty(MaterialIcon, 'bookmark', {get: MaterialIcon$bookmark_getInstance});
  Object.defineProperty(MaterialIcon, 'bookmarkBorder', {get: MaterialIcon$bookmarkBorder_getInstance});
  Object.defineProperty(MaterialIcon, 'book', {get: MaterialIcon$book_getInstance});
  Object.defineProperty(MaterialIcon, 'bugReport', {get: MaterialIcon$bugReport_getInstance});
  Object.defineProperty(MaterialIcon, 'build', {get: MaterialIcon$build_getInstance});
  Object.defineProperty(MaterialIcon, 'cached', {get: MaterialIcon$cached_getInstance});
  Object.defineProperty(MaterialIcon, 'cameraEnhance', {get: MaterialIcon$cameraEnhance_getInstance});
  Object.defineProperty(MaterialIcon, 'cardGiftcard', {get: MaterialIcon$cardGiftcard_getInstance});
  Object.defineProperty(MaterialIcon, 'cardMembership', {get: MaterialIcon$cardMembership_getInstance});
  Object.defineProperty(MaterialIcon, 'cardTravel', {get: MaterialIcon$cardTravel_getInstance});
  Object.defineProperty(MaterialIcon, 'changeHistory', {get: MaterialIcon$changeHistory_getInstance});
  Object.defineProperty(MaterialIcon, 'checkCircle', {get: MaterialIcon$checkCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'chromeReaderMode', {get: MaterialIcon$chromeReaderMode_getInstance});
  Object.defineProperty(MaterialIcon, '_class', {get: MaterialIcon$_class_getInstance});
  Object.defineProperty(MaterialIcon, 'code', {get: MaterialIcon$code_getInstance});
  Object.defineProperty(MaterialIcon, 'compareArrows', {get: MaterialIcon$compareArrows_getInstance});
  Object.defineProperty(MaterialIcon, 'copyright', {get: MaterialIcon$copyright_getInstance});
  Object.defineProperty(MaterialIcon, 'creditCard', {get: MaterialIcon$creditCard_getInstance});
  Object.defineProperty(MaterialIcon, 'dashboard', {get: MaterialIcon$dashboard_getInstance});
  Object.defineProperty(MaterialIcon, 'dateRange', {get: MaterialIcon$dateRange_getInstance});
  Object.defineProperty(MaterialIcon, 'delete', {get: MaterialIcon$delete_getInstance});
  Object.defineProperty(MaterialIcon, 'deleteForever', {get: MaterialIcon$deleteForever_getInstance});
  Object.defineProperty(MaterialIcon, 'description', {get: MaterialIcon$description_getInstance});
  Object.defineProperty(MaterialIcon, 'dns', {get: MaterialIcon$dns_getInstance});
  Object.defineProperty(MaterialIcon, 'done', {get: MaterialIcon$done_getInstance});
  Object.defineProperty(MaterialIcon, 'doneAll', {get: MaterialIcon$doneAll_getInstance});
  Object.defineProperty(MaterialIcon, 'donutLarge', {get: MaterialIcon$donutLarge_getInstance});
  Object.defineProperty(MaterialIcon, 'donutSmall', {get: MaterialIcon$donutSmall_getInstance});
  Object.defineProperty(MaterialIcon, 'eject', {get: MaterialIcon$eject_getInstance});
  Object.defineProperty(MaterialIcon, 'euroSymbol', {get: MaterialIcon$euroSymbol_getInstance});
  Object.defineProperty(MaterialIcon, 'event', {get: MaterialIcon$event_getInstance});
  Object.defineProperty(MaterialIcon, 'eventSeat', {get: MaterialIcon$eventSeat_getInstance});
  Object.defineProperty(MaterialIcon, 'exitToApp', {get: MaterialIcon$exitToApp_getInstance});
  Object.defineProperty(MaterialIcon, 'explore', {get: MaterialIcon$explore_getInstance});
  Object.defineProperty(MaterialIcon, 'extension', {get: MaterialIcon$extension_getInstance});
  Object.defineProperty(MaterialIcon, 'face', {get: MaterialIcon$face_getInstance});
  Object.defineProperty(MaterialIcon, 'favorite', {get: MaterialIcon$favorite_getInstance});
  Object.defineProperty(MaterialIcon, 'favoriteBorder', {get: MaterialIcon$favoriteBorder_getInstance});
  Object.defineProperty(MaterialIcon, 'feedback', {get: MaterialIcon$feedback_getInstance});
  Object.defineProperty(MaterialIcon, 'findInPage', {get: MaterialIcon$findInPage_getInstance});
  Object.defineProperty(MaterialIcon, 'findReplace', {get: MaterialIcon$findReplace_getInstance});
  Object.defineProperty(MaterialIcon, 'fingerprint', {get: MaterialIcon$fingerprint_getInstance});
  Object.defineProperty(MaterialIcon, 'flightLand', {get: MaterialIcon$flightLand_getInstance});
  Object.defineProperty(MaterialIcon, 'flightTakeoff', {get: MaterialIcon$flightTakeoff_getInstance});
  Object.defineProperty(MaterialIcon, 'flipToBack', {get: MaterialIcon$flipToBack_getInstance});
  Object.defineProperty(MaterialIcon, 'flipToFront', {get: MaterialIcon$flipToFront_getInstance});
  Object.defineProperty(MaterialIcon, 'gavel', {get: MaterialIcon$gavel_getInstance});
  Object.defineProperty(MaterialIcon, 'getApp', {get: MaterialIcon$getApp_getInstance});
  Object.defineProperty(MaterialIcon, 'gif', {get: MaterialIcon$gif_getInstance});
  Object.defineProperty(MaterialIcon, 'grade', {get: MaterialIcon$grade_getInstance});
  Object.defineProperty(MaterialIcon, 'groupWork', {get: MaterialIcon$groupWork_getInstance});
  Object.defineProperty(MaterialIcon, 'gTranslate', {get: MaterialIcon$gTranslate_getInstance});
  Object.defineProperty(MaterialIcon, 'help', {get: MaterialIcon$help_getInstance});
  Object.defineProperty(MaterialIcon, 'helpOutline', {get: MaterialIcon$helpOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'highlightOff', {get: MaterialIcon$highlightOff_getInstance});
  Object.defineProperty(MaterialIcon, 'history', {get: MaterialIcon$history_getInstance});
  Object.defineProperty(MaterialIcon, 'home', {get: MaterialIcon$home_getInstance});
  Object.defineProperty(MaterialIcon, 'hourglassEmpty', {get: MaterialIcon$hourglassEmpty_getInstance});
  Object.defineProperty(MaterialIcon, 'hourglassFull', {get: MaterialIcon$hourglassFull_getInstance});
  Object.defineProperty(MaterialIcon, 'https', {get: MaterialIcon$https_getInstance});
  Object.defineProperty(MaterialIcon, 'http', {get: MaterialIcon$http_getInstance});
  Object.defineProperty(MaterialIcon, 'importantDevices', {get: MaterialIcon$importantDevices_getInstance});
  Object.defineProperty(MaterialIcon, 'info', {get: MaterialIcon$info_getInstance});
  Object.defineProperty(MaterialIcon, 'infoOutline', {get: MaterialIcon$infoOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'input', {get: MaterialIcon$input_getInstance});
  Object.defineProperty(MaterialIcon, 'invertColors', {get: MaterialIcon$invertColors_getInstance});
  Object.defineProperty(MaterialIcon, 'label', {get: MaterialIcon$label_getInstance});
  Object.defineProperty(MaterialIcon, 'labelOutline', {get: MaterialIcon$labelOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'language', {get: MaterialIcon$language_getInstance});
  Object.defineProperty(MaterialIcon, 'launch', {get: MaterialIcon$launch_getInstance});
  Object.defineProperty(MaterialIcon, 'lightbulbOutline', {get: MaterialIcon$lightbulbOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'lineStyle', {get: MaterialIcon$lineStyle_getInstance});
  Object.defineProperty(MaterialIcon, 'lineWeight', {get: MaterialIcon$lineWeight_getInstance});
  Object.defineProperty(MaterialIcon, 'list', {get: MaterialIcon$list_getInstance});
  Object.defineProperty(MaterialIcon, 'lock', {get: MaterialIcon$lock_getInstance});
  Object.defineProperty(MaterialIcon, 'lockOpen', {get: MaterialIcon$lockOpen_getInstance});
  Object.defineProperty(MaterialIcon, 'lockOutline', {get: MaterialIcon$lockOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'loyalty', {get: MaterialIcon$loyalty_getInstance});
  Object.defineProperty(MaterialIcon, 'markunreadMailbox', {get: MaterialIcon$markunreadMailbox_getInstance});
  Object.defineProperty(MaterialIcon, 'motorcycle', {get: MaterialIcon$motorcycle_getInstance});
  Object.defineProperty(MaterialIcon, 'noteAdd', {get: MaterialIcon$noteAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'offlinePin', {get: MaterialIcon$offlinePin_getInstance});
  Object.defineProperty(MaterialIcon, 'opacity', {get: MaterialIcon$opacity_getInstance});
  Object.defineProperty(MaterialIcon, 'openInBrowser', {get: MaterialIcon$openInBrowser_getInstance});
  Object.defineProperty(MaterialIcon, 'openInNew', {get: MaterialIcon$openInNew_getInstance});
  Object.defineProperty(MaterialIcon, 'openWith', {get: MaterialIcon$openWith_getInstance});
  Object.defineProperty(MaterialIcon, 'pageview', {get: MaterialIcon$pageview_getInstance});
  Object.defineProperty(MaterialIcon, 'panTool', {get: MaterialIcon$panTool_getInstance});
  Object.defineProperty(MaterialIcon, 'payment', {get: MaterialIcon$payment_getInstance});
  Object.defineProperty(MaterialIcon, 'permCameraMic', {get: MaterialIcon$permCameraMic_getInstance});
  Object.defineProperty(MaterialIcon, 'permContactCalendar', {get: MaterialIcon$permContactCalendar_getInstance});
  Object.defineProperty(MaterialIcon, 'permDataSetting', {get: MaterialIcon$permDataSetting_getInstance});
  Object.defineProperty(MaterialIcon, 'permDeviceInformation', {get: MaterialIcon$permDeviceInformation_getInstance});
  Object.defineProperty(MaterialIcon, 'permIdentity', {get: MaterialIcon$permIdentity_getInstance});
  Object.defineProperty(MaterialIcon, 'permMedia', {get: MaterialIcon$permMedia_getInstance});
  Object.defineProperty(MaterialIcon, 'permPhoneMsg', {get: MaterialIcon$permPhoneMsg_getInstance});
  Object.defineProperty(MaterialIcon, 'permScanWifi', {get: MaterialIcon$permScanWifi_getInstance});
  Object.defineProperty(MaterialIcon, 'pets', {get: MaterialIcon$pets_getInstance});
  Object.defineProperty(MaterialIcon, 'pictureInPicture', {get: MaterialIcon$pictureInPicture_getInstance});
  Object.defineProperty(MaterialIcon, 'pictureInPictureAlt', {get: MaterialIcon$pictureInPictureAlt_getInstance});
  Object.defineProperty(MaterialIcon, 'playForWork', {get: MaterialIcon$playForWork_getInstance});
  Object.defineProperty(MaterialIcon, 'polymer', {get: MaterialIcon$polymer_getInstance});
  Object.defineProperty(MaterialIcon, 'powerSettingsNew', {get: MaterialIcon$powerSettingsNew_getInstance});
  Object.defineProperty(MaterialIcon, 'pregnantWoman', {get: MaterialIcon$pregnantWoman_getInstance});
  Object.defineProperty(MaterialIcon, 'print', {get: MaterialIcon$print_getInstance});
  Object.defineProperty(MaterialIcon, 'queryBuilder', {get: MaterialIcon$queryBuilder_getInstance});
  Object.defineProperty(MaterialIcon, 'questionAnswer', {get: MaterialIcon$questionAnswer_getInstance});
  Object.defineProperty(MaterialIcon, 'receipt', {get: MaterialIcon$receipt_getInstance});
  Object.defineProperty(MaterialIcon, 'recordVoiceOver', {get: MaterialIcon$recordVoiceOver_getInstance});
  Object.defineProperty(MaterialIcon, 'redeem', {get: MaterialIcon$redeem_getInstance});
  Object.defineProperty(MaterialIcon, 'removeShoppingCart', {get: MaterialIcon$removeShoppingCart_getInstance});
  Object.defineProperty(MaterialIcon, 'reorder', {get: MaterialIcon$reorder_getInstance});
  Object.defineProperty(MaterialIcon, 'reportProblem', {get: MaterialIcon$reportProblem_getInstance});
  Object.defineProperty(MaterialIcon, 'restore', {get: MaterialIcon$restore_getInstance});
  Object.defineProperty(MaterialIcon, 'restorePage', {get: MaterialIcon$restorePage_getInstance});
  Object.defineProperty(MaterialIcon, 'room', {get: MaterialIcon$room_getInstance});
  Object.defineProperty(MaterialIcon, 'roundedCorner', {get: MaterialIcon$roundedCorner_getInstance});
  Object.defineProperty(MaterialIcon, 'rowing', {get: MaterialIcon$rowing_getInstance});
  Object.defineProperty(MaterialIcon, 'schedule', {get: MaterialIcon$schedule_getInstance});
  Object.defineProperty(MaterialIcon, 'search', {get: MaterialIcon$search_getInstance});
  Object.defineProperty(MaterialIcon, 'settings', {get: MaterialIcon$settings_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsApplications', {get: MaterialIcon$settingsApplications_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsBackupRestore', {get: MaterialIcon$settingsBackupRestore_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsBluetooth', {get: MaterialIcon$settingsBluetooth_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsBrightness', {get: MaterialIcon$settingsBrightness_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsCell', {get: MaterialIcon$settingsCell_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsEthernet', {get: MaterialIcon$settingsEthernet_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsInputAntenna', {get: MaterialIcon$settingsInputAntenna_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsInputComponent', {get: MaterialIcon$settingsInputComponent_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsInputComposite', {get: MaterialIcon$settingsInputComposite_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsInputHdmi', {get: MaterialIcon$settingsInputHdmi_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsInputSvideo', {get: MaterialIcon$settingsInputSvideo_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsOverscan', {get: MaterialIcon$settingsOverscan_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsPhone', {get: MaterialIcon$settingsPhone_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsPower', {get: MaterialIcon$settingsPower_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsRemote', {get: MaterialIcon$settingsRemote_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsVoice', {get: MaterialIcon$settingsVoice_getInstance});
  Object.defineProperty(MaterialIcon, 'shoppingBasket', {get: MaterialIcon$shoppingBasket_getInstance});
  Object.defineProperty(MaterialIcon, 'shoppingCart', {get: MaterialIcon$shoppingCart_getInstance});
  Object.defineProperty(MaterialIcon, 'shop', {get: MaterialIcon$shop_getInstance});
  Object.defineProperty(MaterialIcon, 'shopTwo', {get: MaterialIcon$shopTwo_getInstance});
  Object.defineProperty(MaterialIcon, 'speakerNotes', {get: MaterialIcon$speakerNotes_getInstance});
  Object.defineProperty(MaterialIcon, 'speakerNotesOff', {get: MaterialIcon$speakerNotesOff_getInstance});
  Object.defineProperty(MaterialIcon, 'spellcheck', {get: MaterialIcon$spellcheck_getInstance});
  Object.defineProperty(MaterialIcon, 'stars', {get: MaterialIcon$stars_getInstance});
  Object.defineProperty(MaterialIcon, 'store', {get: MaterialIcon$store_getInstance});
  Object.defineProperty(MaterialIcon, 'subject', {get: MaterialIcon$subject_getInstance});
  Object.defineProperty(MaterialIcon, 'supervisorAccount', {get: MaterialIcon$supervisorAccount_getInstance});
  Object.defineProperty(MaterialIcon, 'swapHoriz', {get: MaterialIcon$swapHoriz_getInstance});
  Object.defineProperty(MaterialIcon, 'swapVerticalCircle', {get: MaterialIcon$swapVerticalCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'swapVert', {get: MaterialIcon$swapVert_getInstance});
  Object.defineProperty(MaterialIcon, 'systemUpdateAlt', {get: MaterialIcon$systemUpdateAlt_getInstance});
  Object.defineProperty(MaterialIcon, 'tab', {get: MaterialIcon$tab_getInstance});
  Object.defineProperty(MaterialIcon, 'tabUnselected', {get: MaterialIcon$tabUnselected_getInstance});
  Object.defineProperty(MaterialIcon, 'theaters', {get: MaterialIcon$theaters_getInstance});
  Object.defineProperty(MaterialIcon, 'thumbsUpDown', {get: MaterialIcon$thumbsUpDown_getInstance});
  Object.defineProperty(MaterialIcon, 'thumbDown', {get: MaterialIcon$thumbDown_getInstance});
  Object.defineProperty(MaterialIcon, 'thumbUp', {get: MaterialIcon$thumbUp_getInstance});
  Object.defineProperty(MaterialIcon, 'timeline', {get: MaterialIcon$timeline_getInstance});
  Object.defineProperty(MaterialIcon, 'toc', {get: MaterialIcon$toc_getInstance});
  Object.defineProperty(MaterialIcon, 'today', {get: MaterialIcon$today_getInstance});
  Object.defineProperty(MaterialIcon, 'toll', {get: MaterialIcon$toll_getInstance});
  Object.defineProperty(MaterialIcon, 'touchApp', {get: MaterialIcon$touchApp_getInstance});
  Object.defineProperty(MaterialIcon, 'trackChanges', {get: MaterialIcon$trackChanges_getInstance});
  Object.defineProperty(MaterialIcon, 'translate', {get: MaterialIcon$translate_getInstance});
  Object.defineProperty(MaterialIcon, 'trendingDown', {get: MaterialIcon$trendingDown_getInstance});
  Object.defineProperty(MaterialIcon, 'trendingFlat', {get: MaterialIcon$trendingFlat_getInstance});
  Object.defineProperty(MaterialIcon, 'trendingUp', {get: MaterialIcon$trendingUp_getInstance});
  Object.defineProperty(MaterialIcon, 'turnedIn', {get: MaterialIcon$turnedIn_getInstance});
  Object.defineProperty(MaterialIcon, 'turnedInNot', {get: MaterialIcon$turnedInNot_getInstance});
  Object.defineProperty(MaterialIcon, 'update', {get: MaterialIcon$update_getInstance});
  Object.defineProperty(MaterialIcon, 'verifiedUser', {get: MaterialIcon$verifiedUser_getInstance});
  Object.defineProperty(MaterialIcon, 'viewAgenda', {get: MaterialIcon$viewAgenda_getInstance});
  Object.defineProperty(MaterialIcon, 'viewArray', {get: MaterialIcon$viewArray_getInstance});
  Object.defineProperty(MaterialIcon, 'viewCarousel', {get: MaterialIcon$viewCarousel_getInstance});
  Object.defineProperty(MaterialIcon, 'viewColumn', {get: MaterialIcon$viewColumn_getInstance});
  Object.defineProperty(MaterialIcon, 'viewDay', {get: MaterialIcon$viewDay_getInstance});
  Object.defineProperty(MaterialIcon, 'viewHeadline', {get: MaterialIcon$viewHeadline_getInstance});
  Object.defineProperty(MaterialIcon, 'viewList', {get: MaterialIcon$viewList_getInstance});
  Object.defineProperty(MaterialIcon, 'viewModule', {get: MaterialIcon$viewModule_getInstance});
  Object.defineProperty(MaterialIcon, 'viewQuilt', {get: MaterialIcon$viewQuilt_getInstance});
  Object.defineProperty(MaterialIcon, 'viewStream', {get: MaterialIcon$viewStream_getInstance});
  Object.defineProperty(MaterialIcon, 'viewWeek', {get: MaterialIcon$viewWeek_getInstance});
  Object.defineProperty(MaterialIcon, 'visibility', {get: MaterialIcon$visibility_getInstance});
  Object.defineProperty(MaterialIcon, 'visibilityOff', {get: MaterialIcon$visibilityOff_getInstance});
  Object.defineProperty(MaterialIcon, 'watchLater', {get: MaterialIcon$watchLater_getInstance});
  Object.defineProperty(MaterialIcon, 'work', {get: MaterialIcon$work_getInstance});
  Object.defineProperty(MaterialIcon, 'youtubeSearchedFor', {get: MaterialIcon$youtubeSearchedFor_getInstance});
  Object.defineProperty(MaterialIcon, 'zoomIn', {get: MaterialIcon$zoomIn_getInstance});
  Object.defineProperty(MaterialIcon, 'zoomOut', {get: MaterialIcon$zoomOut_getInstance});
  Object.defineProperty(MaterialIcon, 'addAlert', {get: MaterialIcon$addAlert_getInstance});
  Object.defineProperty(MaterialIcon, 'error', {get: MaterialIcon$error_getInstance});
  Object.defineProperty(MaterialIcon, 'errorOutline', {get: MaterialIcon$errorOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'warning', {get: MaterialIcon$warning_getInstance});
  Object.defineProperty(MaterialIcon, 'addToQueue', {get: MaterialIcon$addToQueue_getInstance});
  Object.defineProperty(MaterialIcon, 'airplay', {get: MaterialIcon$airplay_getInstance});
  Object.defineProperty(MaterialIcon, 'album', {get: MaterialIcon$album_getInstance});
  Object.defineProperty(MaterialIcon, 'artTrack', {get: MaterialIcon$artTrack_getInstance});
  Object.defineProperty(MaterialIcon, 'avTimer', {get: MaterialIcon$avTimer_getInstance});
  Object.defineProperty(MaterialIcon, 'brandingWatermark', {get: MaterialIcon$brandingWatermark_getInstance});
  Object.defineProperty(MaterialIcon, 'callToAction', {get: MaterialIcon$callToAction_getInstance});
  Object.defineProperty(MaterialIcon, 'closedCaption', {get: MaterialIcon$closedCaption_getInstance});
  Object.defineProperty(MaterialIcon, 'equalizer', {get: MaterialIcon$equalizer_getInstance});
  Object.defineProperty(MaterialIcon, 'explicit', {get: MaterialIcon$explicit_getInstance});
  Object.defineProperty(MaterialIcon, 'fastForward', {get: MaterialIcon$fastForward_getInstance});
  Object.defineProperty(MaterialIcon, 'fastRewind', {get: MaterialIcon$fastRewind_getInstance});
  Object.defineProperty(MaterialIcon, 'featuredPlayList', {get: MaterialIcon$featuredPlayList_getInstance});
  Object.defineProperty(MaterialIcon, 'featuredVideo', {get: MaterialIcon$featuredVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'fiberDvr', {get: MaterialIcon$fiberDvr_getInstance});
  Object.defineProperty(MaterialIcon, 'fiberManualRecord', {get: MaterialIcon$fiberManualRecord_getInstance});
  Object.defineProperty(MaterialIcon, 'fiberNew', {get: MaterialIcon$fiberNew_getInstance});
  Object.defineProperty(MaterialIcon, 'fiberPin', {get: MaterialIcon$fiberPin_getInstance});
  Object.defineProperty(MaterialIcon, 'forward10', {get: MaterialIcon$forward10_getInstance});
  Object.defineProperty(MaterialIcon, 'forward30', {get: MaterialIcon$forward30_getInstance});
  Object.defineProperty(MaterialIcon, 'forward5', {get: MaterialIcon$forward5_getInstance});
  Object.defineProperty(MaterialIcon, 'games', {get: MaterialIcon$games_getInstance});
  Object.defineProperty(MaterialIcon, 'hd', {get: MaterialIcon$hd_getInstance});
  Object.defineProperty(MaterialIcon, 'hearing', {get: MaterialIcon$hearing_getInstance});
  Object.defineProperty(MaterialIcon, 'highQuality', {get: MaterialIcon$highQuality_getInstance});
  Object.defineProperty(MaterialIcon, 'libraryAdd', {get: MaterialIcon$libraryAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'libraryBooks', {get: MaterialIcon$libraryBooks_getInstance});
  Object.defineProperty(MaterialIcon, 'libraryMusic', {get: MaterialIcon$libraryMusic_getInstance});
  Object.defineProperty(MaterialIcon, 'loop', {get: MaterialIcon$loop_getInstance});
  Object.defineProperty(MaterialIcon, 'mic', {get: MaterialIcon$mic_getInstance});
  Object.defineProperty(MaterialIcon, 'micNone', {get: MaterialIcon$micNone_getInstance});
  Object.defineProperty(MaterialIcon, 'micOff', {get: MaterialIcon$micOff_getInstance});
  Object.defineProperty(MaterialIcon, 'movie', {get: MaterialIcon$movie_getInstance});
  Object.defineProperty(MaterialIcon, 'musicVideo', {get: MaterialIcon$musicVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'newReleases', {get: MaterialIcon$newReleases_getInstance});
  Object.defineProperty(MaterialIcon, 'note', {get: MaterialIcon$note_getInstance});
  Object.defineProperty(MaterialIcon, 'notInterested', {get: MaterialIcon$notInterested_getInstance});
  Object.defineProperty(MaterialIcon, 'pause', {get: MaterialIcon$pause_getInstance});
  Object.defineProperty(MaterialIcon, 'pauseCircleFilled', {get: MaterialIcon$pauseCircleFilled_getInstance});
  Object.defineProperty(MaterialIcon, 'pauseCircleOutline', {get: MaterialIcon$pauseCircleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'playlistAdd', {get: MaterialIcon$playlistAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'playlistAddCheck', {get: MaterialIcon$playlistAddCheck_getInstance});
  Object.defineProperty(MaterialIcon, 'playlistPlay', {get: MaterialIcon$playlistPlay_getInstance});
  Object.defineProperty(MaterialIcon, 'playArrow', {get: MaterialIcon$playArrow_getInstance});
  Object.defineProperty(MaterialIcon, 'playCircleFilled', {get: MaterialIcon$playCircleFilled_getInstance});
  Object.defineProperty(MaterialIcon, 'playCircleOutline', {get: MaterialIcon$playCircleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'queue', {get: MaterialIcon$queue_getInstance});
  Object.defineProperty(MaterialIcon, 'queueMusic', {get: MaterialIcon$queueMusic_getInstance});
  Object.defineProperty(MaterialIcon, 'queuePlayNext', {get: MaterialIcon$queuePlayNext_getInstance});
  Object.defineProperty(MaterialIcon, 'radio', {get: MaterialIcon$radio_getInstance});
  Object.defineProperty(MaterialIcon, 'recentActors', {get: MaterialIcon$recentActors_getInstance});
  Object.defineProperty(MaterialIcon, 'removeFromQueue', {get: MaterialIcon$removeFromQueue_getInstance});
  Object.defineProperty(MaterialIcon, 'repeat', {get: MaterialIcon$repeat_getInstance});
  Object.defineProperty(MaterialIcon, 'repeatOne', {get: MaterialIcon$repeatOne_getInstance});
  Object.defineProperty(MaterialIcon, 'replay10', {get: MaterialIcon$replay10_getInstance});
  Object.defineProperty(MaterialIcon, 'replay', {get: MaterialIcon$replay_getInstance});
  Object.defineProperty(MaterialIcon, 'replay30', {get: MaterialIcon$replay30_getInstance});
  Object.defineProperty(MaterialIcon, 'replay5', {get: MaterialIcon$replay5_getInstance});
  Object.defineProperty(MaterialIcon, 'shuffle', {get: MaterialIcon$shuffle_getInstance});
  Object.defineProperty(MaterialIcon, 'skipNext', {get: MaterialIcon$skipNext_getInstance});
  Object.defineProperty(MaterialIcon, 'skipPrevious', {get: MaterialIcon$skipPrevious_getInstance});
  Object.defineProperty(MaterialIcon, 'slowMotionVideo', {get: MaterialIcon$slowMotionVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'snooze', {get: MaterialIcon$snooze_getInstance});
  Object.defineProperty(MaterialIcon, 'sortByAlpha', {get: MaterialIcon$sortByAlpha_getInstance});
  Object.defineProperty(MaterialIcon, 'stop', {get: MaterialIcon$stop_getInstance});
  Object.defineProperty(MaterialIcon, 'subscriptions', {get: MaterialIcon$subscriptions_getInstance});
  Object.defineProperty(MaterialIcon, 'subtitles', {get: MaterialIcon$subtitles_getInstance});
  Object.defineProperty(MaterialIcon, 'surroundSound', {get: MaterialIcon$surroundSound_getInstance});
  Object.defineProperty(MaterialIcon, 'videocam', {get: MaterialIcon$videocam_getInstance});
  Object.defineProperty(MaterialIcon, 'videocamOff', {get: MaterialIcon$videocamOff_getInstance});
  Object.defineProperty(MaterialIcon, 'videoCall', {get: MaterialIcon$videoCall_getInstance});
  Object.defineProperty(MaterialIcon, 'videoLabel', {get: MaterialIcon$videoLabel_getInstance});
  Object.defineProperty(MaterialIcon, 'videoLibrary', {get: MaterialIcon$videoLibrary_getInstance});
  Object.defineProperty(MaterialIcon, 'volumeDown', {get: MaterialIcon$volumeDown_getInstance});
  Object.defineProperty(MaterialIcon, 'volumeMute', {get: MaterialIcon$volumeMute_getInstance});
  Object.defineProperty(MaterialIcon, 'volumeOff', {get: MaterialIcon$volumeOff_getInstance});
  Object.defineProperty(MaterialIcon, 'volumeUp', {get: MaterialIcon$volumeUp_getInstance});
  Object.defineProperty(MaterialIcon, 'web', {get: MaterialIcon$web_getInstance});
  Object.defineProperty(MaterialIcon, 'webAsset', {get: MaterialIcon$webAsset_getInstance});
  Object.defineProperty(MaterialIcon, 'business', {get: MaterialIcon$business_getInstance});
  Object.defineProperty(MaterialIcon, 'call', {get: MaterialIcon$call_getInstance});
  Object.defineProperty(MaterialIcon, 'callEnd', {get: MaterialIcon$callEnd_getInstance});
  Object.defineProperty(MaterialIcon, 'callMade', {get: MaterialIcon$callMade_getInstance});
  Object.defineProperty(MaterialIcon, 'callMerge', {get: MaterialIcon$callMerge_getInstance});
  Object.defineProperty(MaterialIcon, 'callMissed', {get: MaterialIcon$callMissed_getInstance});
  Object.defineProperty(MaterialIcon, 'callMissedOutgoing', {get: MaterialIcon$callMissedOutgoing_getInstance});
  Object.defineProperty(MaterialIcon, 'callReceived', {get: MaterialIcon$callReceived_getInstance});
  Object.defineProperty(MaterialIcon, 'callSplit', {get: MaterialIcon$callSplit_getInstance});
  Object.defineProperty(MaterialIcon, 'chat', {get: MaterialIcon$chat_getInstance});
  Object.defineProperty(MaterialIcon, 'chatBubble', {get: MaterialIcon$chatBubble_getInstance});
  Object.defineProperty(MaterialIcon, 'chatBubbleOutline', {get: MaterialIcon$chatBubbleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'clearAll', {get: MaterialIcon$clearAll_getInstance});
  Object.defineProperty(MaterialIcon, 'comment', {get: MaterialIcon$comment_getInstance});
  Object.defineProperty(MaterialIcon, 'contacts', {get: MaterialIcon$contacts_getInstance});
  Object.defineProperty(MaterialIcon, 'contactMail', {get: MaterialIcon$contactMail_getInstance});
  Object.defineProperty(MaterialIcon, 'contactPhone', {get: MaterialIcon$contactPhone_getInstance});
  Object.defineProperty(MaterialIcon, 'dialerSip', {get: MaterialIcon$dialerSip_getInstance});
  Object.defineProperty(MaterialIcon, 'dialpad', {get: MaterialIcon$dialpad_getInstance});
  Object.defineProperty(MaterialIcon, 'email', {get: MaterialIcon$email_getInstance});
  Object.defineProperty(MaterialIcon, 'forum', {get: MaterialIcon$forum_getInstance});
  Object.defineProperty(MaterialIcon, 'importContacts', {get: MaterialIcon$importContacts_getInstance});
  Object.defineProperty(MaterialIcon, 'importExport', {get: MaterialIcon$importExport_getInstance});
  Object.defineProperty(MaterialIcon, 'invertColorsOff', {get: MaterialIcon$invertColorsOff_getInstance});
  Object.defineProperty(MaterialIcon, 'liveHelp', {get: MaterialIcon$liveHelp_getInstance});
  Object.defineProperty(MaterialIcon, 'locationOff', {get: MaterialIcon$locationOff_getInstance});
  Object.defineProperty(MaterialIcon, 'locationOn', {get: MaterialIcon$locationOn_getInstance});
  Object.defineProperty(MaterialIcon, 'mailOutline', {get: MaterialIcon$mailOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'message', {get: MaterialIcon$message_getInstance});
  Object.defineProperty(MaterialIcon, 'noSim', {get: MaterialIcon$noSim_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelinkErase', {get: MaterialIcon$phonelinkErase_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelinkLock', {get: MaterialIcon$phonelinkLock_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelinkRing', {get: MaterialIcon$phonelinkRing_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelinkSetup', {get: MaterialIcon$phonelinkSetup_getInstance});
  Object.defineProperty(MaterialIcon, 'phone', {get: MaterialIcon$phone_getInstance});
  Object.defineProperty(MaterialIcon, 'portableWifiOff', {get: MaterialIcon$portableWifiOff_getInstance});
  Object.defineProperty(MaterialIcon, 'presentToAll', {get: MaterialIcon$presentToAll_getInstance});
  Object.defineProperty(MaterialIcon, 'ringVolume', {get: MaterialIcon$ringVolume_getInstance});
  Object.defineProperty(MaterialIcon, 'rssFeed', {get: MaterialIcon$rssFeed_getInstance});
  Object.defineProperty(MaterialIcon, 'screenShare', {get: MaterialIcon$screenShare_getInstance});
  Object.defineProperty(MaterialIcon, 'speakerPhone', {get: MaterialIcon$speakerPhone_getInstance});
  Object.defineProperty(MaterialIcon, 'stayCurrentLandscape', {get: MaterialIcon$stayCurrentLandscape_getInstance});
  Object.defineProperty(MaterialIcon, 'stayCurrentPortrait', {get: MaterialIcon$stayCurrentPortrait_getInstance});
  Object.defineProperty(MaterialIcon, 'stayPrimaryLandscape', {get: MaterialIcon$stayPrimaryLandscape_getInstance});
  Object.defineProperty(MaterialIcon, 'stayPrimaryPortrait', {get: MaterialIcon$stayPrimaryPortrait_getInstance});
  Object.defineProperty(MaterialIcon, 'stopScreenShare', {get: MaterialIcon$stopScreenShare_getInstance});
  Object.defineProperty(MaterialIcon, 'swapCalls', {get: MaterialIcon$swapCalls_getInstance});
  Object.defineProperty(MaterialIcon, 'textsms', {get: MaterialIcon$textsms_getInstance});
  Object.defineProperty(MaterialIcon, 'voicemail', {get: MaterialIcon$voicemail_getInstance});
  Object.defineProperty(MaterialIcon, 'vpnKey', {get: MaterialIcon$vpnKey_getInstance});
  Object.defineProperty(MaterialIcon, 'add', {get: MaterialIcon$add_getInstance});
  Object.defineProperty(MaterialIcon, 'addBox', {get: MaterialIcon$addBox_getInstance});
  Object.defineProperty(MaterialIcon, 'addCircle', {get: MaterialIcon$addCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'addCircleOutline', {get: MaterialIcon$addCircleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'archive', {get: MaterialIcon$archive_getInstance});
  Object.defineProperty(MaterialIcon, 'backspace', {get: MaterialIcon$backspace_getInstance});
  Object.defineProperty(MaterialIcon, 'block', {get: MaterialIcon$block_getInstance});
  Object.defineProperty(MaterialIcon, 'clear', {get: MaterialIcon$clear_getInstance});
  Object.defineProperty(MaterialIcon, 'contentCopy', {get: MaterialIcon$contentCopy_getInstance});
  Object.defineProperty(MaterialIcon, 'contentCut', {get: MaterialIcon$contentCut_getInstance});
  Object.defineProperty(MaterialIcon, 'contentPaste', {get: MaterialIcon$contentPaste_getInstance});
  Object.defineProperty(MaterialIcon, 'create', {get: MaterialIcon$create_getInstance});
  Object.defineProperty(MaterialIcon, 'deleteSweep', {get: MaterialIcon$deleteSweep_getInstance});
  Object.defineProperty(MaterialIcon, 'drafts', {get: MaterialIcon$drafts_getInstance});
  Object.defineProperty(MaterialIcon, 'filterList', {get: MaterialIcon$filterList_getInstance});
  Object.defineProperty(MaterialIcon, 'flag', {get: MaterialIcon$flag_getInstance});
  Object.defineProperty(MaterialIcon, 'fontDownload', {get: MaterialIcon$fontDownload_getInstance});
  Object.defineProperty(MaterialIcon, 'forward', {get: MaterialIcon$forward_getInstance});
  Object.defineProperty(MaterialIcon, 'gesture', {get: MaterialIcon$gesture_getInstance});
  Object.defineProperty(MaterialIcon, 'inbox', {get: MaterialIcon$inbox_getInstance});
  Object.defineProperty(MaterialIcon, 'link', {get: MaterialIcon$link_getInstance});
  Object.defineProperty(MaterialIcon, 'lowPriority', {get: MaterialIcon$lowPriority_getInstance});
  Object.defineProperty(MaterialIcon, 'mail', {get: MaterialIcon$mail_getInstance});
  Object.defineProperty(MaterialIcon, 'markunread', {get: MaterialIcon$markunread_getInstance});
  Object.defineProperty(MaterialIcon, 'moveToInbox', {get: MaterialIcon$moveToInbox_getInstance});
  Object.defineProperty(MaterialIcon, 'nextWeek', {get: MaterialIcon$nextWeek_getInstance});
  Object.defineProperty(MaterialIcon, 'redo', {get: MaterialIcon$redo_getInstance});
  Object.defineProperty(MaterialIcon, 'remove', {get: MaterialIcon$remove_getInstance});
  Object.defineProperty(MaterialIcon, 'removeCircle', {get: MaterialIcon$removeCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'removeCircleOutline', {get: MaterialIcon$removeCircleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'reply', {get: MaterialIcon$reply_getInstance});
  Object.defineProperty(MaterialIcon, 'replyAll', {get: MaterialIcon$replyAll_getInstance});
  Object.defineProperty(MaterialIcon, 'report', {get: MaterialIcon$report_getInstance});
  Object.defineProperty(MaterialIcon, 'save', {get: MaterialIcon$save_getInstance});
  Object.defineProperty(MaterialIcon, 'selectAll', {get: MaterialIcon$selectAll_getInstance});
  Object.defineProperty(MaterialIcon, 'send', {get: MaterialIcon$send_getInstance});
  Object.defineProperty(MaterialIcon, 'sort', {get: MaterialIcon$sort_getInstance});
  Object.defineProperty(MaterialIcon, 'textFormat', {get: MaterialIcon$textFormat_getInstance});
  Object.defineProperty(MaterialIcon, 'unarchive', {get: MaterialIcon$unarchive_getInstance});
  Object.defineProperty(MaterialIcon, 'undo', {get: MaterialIcon$undo_getInstance});
  Object.defineProperty(MaterialIcon, 'weekend', {get: MaterialIcon$weekend_getInstance});
  Object.defineProperty(MaterialIcon, 'accessAlarms', {get: MaterialIcon$accessAlarms_getInstance});
  Object.defineProperty(MaterialIcon, 'accessAlarm', {get: MaterialIcon$accessAlarm_getInstance});
  Object.defineProperty(MaterialIcon, 'accessTime', {get: MaterialIcon$accessTime_getInstance});
  Object.defineProperty(MaterialIcon, 'addAlarm', {get: MaterialIcon$addAlarm_getInstance});
  Object.defineProperty(MaterialIcon, 'airplanemodeActive', {get: MaterialIcon$airplanemodeActive_getInstance});
  Object.defineProperty(MaterialIcon, 'airplanemodeInactive', {get: MaterialIcon$airplanemodeInactive_getInstance});
  Object.defineProperty(MaterialIcon, 'battery20', {get: MaterialIcon$battery20_getInstance});
  Object.defineProperty(MaterialIcon, 'battery30', {get: MaterialIcon$battery30_getInstance});
  Object.defineProperty(MaterialIcon, 'battery50', {get: MaterialIcon$battery50_getInstance});
  Object.defineProperty(MaterialIcon, 'battery60', {get: MaterialIcon$battery60_getInstance});
  Object.defineProperty(MaterialIcon, 'battery80', {get: MaterialIcon$battery80_getInstance});
  Object.defineProperty(MaterialIcon, 'battery90', {get: MaterialIcon$battery90_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryAlert', {get: MaterialIcon$batteryAlert_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging20', {get: MaterialIcon$batteryCharging20_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging30', {get: MaterialIcon$batteryCharging30_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging50', {get: MaterialIcon$batteryCharging50_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging60', {get: MaterialIcon$batteryCharging60_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging80', {get: MaterialIcon$batteryCharging80_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryCharging90', {get: MaterialIcon$batteryCharging90_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryChargingFull', {get: MaterialIcon$batteryChargingFull_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryFull', {get: MaterialIcon$batteryFull_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryStd', {get: MaterialIcon$batteryStd_getInstance});
  Object.defineProperty(MaterialIcon, 'batteryUnknown', {get: MaterialIcon$batteryUnknown_getInstance});
  Object.defineProperty(MaterialIcon, 'bluetooth', {get: MaterialIcon$bluetooth_getInstance});
  Object.defineProperty(MaterialIcon, 'bluetoothConnected', {get: MaterialIcon$bluetoothConnected_getInstance});
  Object.defineProperty(MaterialIcon, 'bluetoothDisabled', {get: MaterialIcon$bluetoothDisabled_getInstance});
  Object.defineProperty(MaterialIcon, 'bluetoothSearching', {get: MaterialIcon$bluetoothSearching_getInstance});
  Object.defineProperty(MaterialIcon, 'brightnessAuto', {get: MaterialIcon$brightnessAuto_getInstance});
  Object.defineProperty(MaterialIcon, 'brightnessHigh', {get: MaterialIcon$brightnessHigh_getInstance});
  Object.defineProperty(MaterialIcon, 'brightnessLow', {get: MaterialIcon$brightnessLow_getInstance});
  Object.defineProperty(MaterialIcon, 'brightnessMedium', {get: MaterialIcon$brightnessMedium_getInstance});
  Object.defineProperty(MaterialIcon, 'dataUsage', {get: MaterialIcon$dataUsage_getInstance});
  Object.defineProperty(MaterialIcon, 'developerMode', {get: MaterialIcon$developerMode_getInstance});
  Object.defineProperty(MaterialIcon, 'devices', {get: MaterialIcon$devices_getInstance});
  Object.defineProperty(MaterialIcon, 'dvr', {get: MaterialIcon$dvr_getInstance});
  Object.defineProperty(MaterialIcon, 'gpsFixed', {get: MaterialIcon$gpsFixed_getInstance});
  Object.defineProperty(MaterialIcon, 'gpsNotFixed', {get: MaterialIcon$gpsNotFixed_getInstance});
  Object.defineProperty(MaterialIcon, 'gpsOff', {get: MaterialIcon$gpsOff_getInstance});
  Object.defineProperty(MaterialIcon, 'graphicEq', {get: MaterialIcon$graphicEq_getInstance});
  Object.defineProperty(MaterialIcon, 'locationDisabled', {get: MaterialIcon$locationDisabled_getInstance});
  Object.defineProperty(MaterialIcon, 'locationSearching', {get: MaterialIcon$locationSearching_getInstance});
  Object.defineProperty(MaterialIcon, 'networkCell', {get: MaterialIcon$networkCell_getInstance});
  Object.defineProperty(MaterialIcon, 'networkWifi', {get: MaterialIcon$networkWifi_getInstance});
  Object.defineProperty(MaterialIcon, 'nfc', {get: MaterialIcon$nfc_getInstance});
  Object.defineProperty(MaterialIcon, 'screenLockLandscape', {get: MaterialIcon$screenLockLandscape_getInstance});
  Object.defineProperty(MaterialIcon, 'screenLockPortrait', {get: MaterialIcon$screenLockPortrait_getInstance});
  Object.defineProperty(MaterialIcon, 'screenLockRotation', {get: MaterialIcon$screenLockRotation_getInstance});
  Object.defineProperty(MaterialIcon, 'screenRotation', {get: MaterialIcon$screenRotation_getInstance});
  Object.defineProperty(MaterialIcon, 'sdStorage', {get: MaterialIcon$sdStorage_getInstance});
  Object.defineProperty(MaterialIcon, 'settingsSystemDaydream', {get: MaterialIcon$settingsSystemDaydream_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellular0Bar', {get: MaterialIcon$signalCellular0Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellular1Bar', {get: MaterialIcon$signalCellular1Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellular2Bar', {get: MaterialIcon$signalCellular2Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellular3Bar', {get: MaterialIcon$signalCellular3Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellular4Bar', {get: MaterialIcon$signalCellular4Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularConnectedNoInternet0Bar', {get: MaterialIcon$signalCellularConnectedNoInternet0Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularConnectedNoInternet1Bar', {get: MaterialIcon$signalCellularConnectedNoInternet1Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularConnectedNoInternet2Bar', {get: MaterialIcon$signalCellularConnectedNoInternet2Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularConnectedNoInternet3Bar', {get: MaterialIcon$signalCellularConnectedNoInternet3Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularConnectedNoInternet4Bar', {get: MaterialIcon$signalCellularConnectedNoInternet4Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularNoSim', {get: MaterialIcon$signalCellularNoSim_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularNull', {get: MaterialIcon$signalCellularNull_getInstance});
  Object.defineProperty(MaterialIcon, 'signalCellularOff', {get: MaterialIcon$signalCellularOff_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi0Bar', {get: MaterialIcon$signalWifi0Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi1Bar', {get: MaterialIcon$signalWifi1Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi1BarLock', {get: MaterialIcon$signalWifi1BarLock_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi2Bar', {get: MaterialIcon$signalWifi2Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi2BarLock', {get: MaterialIcon$signalWifi2BarLock_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi3Bar', {get: MaterialIcon$signalWifi3Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi3BarLock', {get: MaterialIcon$signalWifi3BarLock_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi4Bar', {get: MaterialIcon$signalWifi4Bar_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifi4BarLock', {get: MaterialIcon$signalWifi4BarLock_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiOff', {get: MaterialIcon$signalWifiOff_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbar1Bar26x24px', {get: MaterialIcon$signalWifiStatusbar1Bar26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbar2Bar26x24px', {get: MaterialIcon$signalWifiStatusbar2Bar26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbar3Bar26x24px', {get: MaterialIcon$signalWifiStatusbar3Bar26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbar4Bar26x24px', {get: MaterialIcon$signalWifiStatusbar4Bar26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarConnectedNoInternet126x24px', {get: MaterialIcon$signalWifiStatusbarConnectedNoInternet126x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarConnectedNoInternet26x24px', {get: MaterialIcon$signalWifiStatusbarConnectedNoInternet26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarConnectedNoInternet226x24px', {get: MaterialIcon$signalWifiStatusbarConnectedNoInternet226x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarConnectedNoInternet326x24px', {get: MaterialIcon$signalWifiStatusbarConnectedNoInternet326x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarConnectedNoInternet426x24px', {get: MaterialIcon$signalWifiStatusbarConnectedNoInternet426x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarNotConnected26x24px', {get: MaterialIcon$signalWifiStatusbarNotConnected26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'signalWifiStatusbarNull26x24px', {get: MaterialIcon$signalWifiStatusbarNull26x24px_getInstance});
  Object.defineProperty(MaterialIcon, 'storage', {get: MaterialIcon$storage_getInstance});
  Object.defineProperty(MaterialIcon, 'usb', {get: MaterialIcon$usb_getInstance});
  Object.defineProperty(MaterialIcon, 'wallpaper', {get: MaterialIcon$wallpaper_getInstance});
  Object.defineProperty(MaterialIcon, 'widgets', {get: MaterialIcon$widgets_getInstance});
  Object.defineProperty(MaterialIcon, 'wifiLock', {get: MaterialIcon$wifiLock_getInstance});
  Object.defineProperty(MaterialIcon, 'wifiTethering', {get: MaterialIcon$wifiTethering_getInstance});
  Object.defineProperty(MaterialIcon, 'attachFile', {get: MaterialIcon$attachFile_getInstance});
  Object.defineProperty(MaterialIcon, 'attachMoney', {get: MaterialIcon$attachMoney_getInstance});
  Object.defineProperty(MaterialIcon, 'borderAll', {get: MaterialIcon$borderAll_getInstance});
  Object.defineProperty(MaterialIcon, 'borderBottom', {get: MaterialIcon$borderBottom_getInstance});
  Object.defineProperty(MaterialIcon, 'borderClear', {get: MaterialIcon$borderClear_getInstance});
  Object.defineProperty(MaterialIcon, 'borderColor', {get: MaterialIcon$borderColor_getInstance});
  Object.defineProperty(MaterialIcon, 'borderHorizontal', {get: MaterialIcon$borderHorizontal_getInstance});
  Object.defineProperty(MaterialIcon, 'borderInner', {get: MaterialIcon$borderInner_getInstance});
  Object.defineProperty(MaterialIcon, 'borderLeft', {get: MaterialIcon$borderLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'borderOuter', {get: MaterialIcon$borderOuter_getInstance});
  Object.defineProperty(MaterialIcon, 'borderRight', {get: MaterialIcon$borderRight_getInstance});
  Object.defineProperty(MaterialIcon, 'borderStyle', {get: MaterialIcon$borderStyle_getInstance});
  Object.defineProperty(MaterialIcon, 'borderTop', {get: MaterialIcon$borderTop_getInstance});
  Object.defineProperty(MaterialIcon, 'borderVertical', {get: MaterialIcon$borderVertical_getInstance});
  Object.defineProperty(MaterialIcon, 'bubbleChart', {get: MaterialIcon$bubbleChart_getInstance});
  Object.defineProperty(MaterialIcon, 'dragHandle', {get: MaterialIcon$dragHandle_getInstance});
  Object.defineProperty(MaterialIcon, 'formatAlignCenter', {get: MaterialIcon$formatAlignCenter_getInstance});
  Object.defineProperty(MaterialIcon, 'formatAlignJustify', {get: MaterialIcon$formatAlignJustify_getInstance});
  Object.defineProperty(MaterialIcon, 'formatAlignLeft', {get: MaterialIcon$formatAlignLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'formatAlignRight', {get: MaterialIcon$formatAlignRight_getInstance});
  Object.defineProperty(MaterialIcon, 'formatBold', {get: MaterialIcon$formatBold_getInstance});
  Object.defineProperty(MaterialIcon, 'formatClear', {get: MaterialIcon$formatClear_getInstance});
  Object.defineProperty(MaterialIcon, 'formatColorFill', {get: MaterialIcon$formatColorFill_getInstance});
  Object.defineProperty(MaterialIcon, 'formatColorReset', {get: MaterialIcon$formatColorReset_getInstance});
  Object.defineProperty(MaterialIcon, 'formatColorText', {get: MaterialIcon$formatColorText_getInstance});
  Object.defineProperty(MaterialIcon, 'formatIndentDecrease', {get: MaterialIcon$formatIndentDecrease_getInstance});
  Object.defineProperty(MaterialIcon, 'formatIndentIncrease', {get: MaterialIcon$formatIndentIncrease_getInstance});
  Object.defineProperty(MaterialIcon, 'formatItalic', {get: MaterialIcon$formatItalic_getInstance});
  Object.defineProperty(MaterialIcon, 'formatLineSpacing', {get: MaterialIcon$formatLineSpacing_getInstance});
  Object.defineProperty(MaterialIcon, 'formatListBulleted', {get: MaterialIcon$formatListBulleted_getInstance});
  Object.defineProperty(MaterialIcon, 'formatListNumbered', {get: MaterialIcon$formatListNumbered_getInstance});
  Object.defineProperty(MaterialIcon, 'formatPaint', {get: MaterialIcon$formatPaint_getInstance});
  Object.defineProperty(MaterialIcon, 'formatQuote', {get: MaterialIcon$formatQuote_getInstance});
  Object.defineProperty(MaterialIcon, 'formatShapes', {get: MaterialIcon$formatShapes_getInstance});
  Object.defineProperty(MaterialIcon, 'formatSize', {get: MaterialIcon$formatSize_getInstance});
  Object.defineProperty(MaterialIcon, 'formatStrikethrough', {get: MaterialIcon$formatStrikethrough_getInstance});
  Object.defineProperty(MaterialIcon, 'formatTextdirectionLToR', {get: MaterialIcon$formatTextdirectionLToR_getInstance});
  Object.defineProperty(MaterialIcon, 'formatTextdirectionRToL', {get: MaterialIcon$formatTextdirectionRToL_getInstance});
  Object.defineProperty(MaterialIcon, 'formatUnderlined', {get: MaterialIcon$formatUnderlined_getInstance});
  Object.defineProperty(MaterialIcon, 'functions', {get: MaterialIcon$functions_getInstance});
  Object.defineProperty(MaterialIcon, 'highlight', {get: MaterialIcon$highlight_getInstance});
  Object.defineProperty(MaterialIcon, 'insertChart', {get: MaterialIcon$insertChart_getInstance});
  Object.defineProperty(MaterialIcon, 'insertComment', {get: MaterialIcon$insertComment_getInstance});
  Object.defineProperty(MaterialIcon, 'insertDriveFile', {get: MaterialIcon$insertDriveFile_getInstance});
  Object.defineProperty(MaterialIcon, 'insertEmoticon', {get: MaterialIcon$insertEmoticon_getInstance});
  Object.defineProperty(MaterialIcon, 'insertInvitation', {get: MaterialIcon$insertInvitation_getInstance});
  Object.defineProperty(MaterialIcon, 'insertLink', {get: MaterialIcon$insertLink_getInstance});
  Object.defineProperty(MaterialIcon, 'insertPhoto', {get: MaterialIcon$insertPhoto_getInstance});
  Object.defineProperty(MaterialIcon, 'linearScale', {get: MaterialIcon$linearScale_getInstance});
  Object.defineProperty(MaterialIcon, 'mergeType', {get: MaterialIcon$mergeType_getInstance});
  Object.defineProperty(MaterialIcon, 'modeComment', {get: MaterialIcon$modeComment_getInstance});
  Object.defineProperty(MaterialIcon, 'modeEdit', {get: MaterialIcon$modeEdit_getInstance});
  Object.defineProperty(MaterialIcon, 'monetizationOn', {get: MaterialIcon$monetizationOn_getInstance});
  Object.defineProperty(MaterialIcon, 'moneyOff', {get: MaterialIcon$moneyOff_getInstance});
  Object.defineProperty(MaterialIcon, 'multilineChart', {get: MaterialIcon$multilineChart_getInstance});
  Object.defineProperty(MaterialIcon, 'pieChart', {get: MaterialIcon$pieChart_getInstance});
  Object.defineProperty(MaterialIcon, 'pieChartOutlined', {get: MaterialIcon$pieChartOutlined_getInstance});
  Object.defineProperty(MaterialIcon, 'publish', {get: MaterialIcon$publish_getInstance});
  Object.defineProperty(MaterialIcon, 'shortText', {get: MaterialIcon$shortText_getInstance});
  Object.defineProperty(MaterialIcon, 'showChart', {get: MaterialIcon$showChart_getInstance});
  Object.defineProperty(MaterialIcon, 'spaceBar', {get: MaterialIcon$spaceBar_getInstance});
  Object.defineProperty(MaterialIcon, 'strikethroughS', {get: MaterialIcon$strikethroughS_getInstance});
  Object.defineProperty(MaterialIcon, 'textFields', {get: MaterialIcon$textFields_getInstance});
  Object.defineProperty(MaterialIcon, 'title', {get: MaterialIcon$title_getInstance});
  Object.defineProperty(MaterialIcon, 'verticalAlignBottom', {get: MaterialIcon$verticalAlignBottom_getInstance});
  Object.defineProperty(MaterialIcon, 'verticalAlignCenter', {get: MaterialIcon$verticalAlignCenter_getInstance});
  Object.defineProperty(MaterialIcon, 'verticalAlignTop', {get: MaterialIcon$verticalAlignTop_getInstance});
  Object.defineProperty(MaterialIcon, 'wrapText', {get: MaterialIcon$wrapText_getInstance});
  Object.defineProperty(MaterialIcon, 'attachment', {get: MaterialIcon$attachment_getInstance});
  Object.defineProperty(MaterialIcon, 'cloud', {get: MaterialIcon$cloud_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudCircle', {get: MaterialIcon$cloudCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudDone', {get: MaterialIcon$cloudDone_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudDownload', {get: MaterialIcon$cloudDownload_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudOff', {get: MaterialIcon$cloudOff_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudQueue', {get: MaterialIcon$cloudQueue_getInstance});
  Object.defineProperty(MaterialIcon, 'cloudUpload', {get: MaterialIcon$cloudUpload_getInstance});
  Object.defineProperty(MaterialIcon, 'createNewFolder', {get: MaterialIcon$createNewFolder_getInstance});
  Object.defineProperty(MaterialIcon, 'fileDownload', {get: MaterialIcon$fileDownload_getInstance});
  Object.defineProperty(MaterialIcon, 'fileUpload', {get: MaterialIcon$fileUpload_getInstance});
  Object.defineProperty(MaterialIcon, 'folder', {get: MaterialIcon$folder_getInstance});
  Object.defineProperty(MaterialIcon, 'folderOpen', {get: MaterialIcon$folderOpen_getInstance});
  Object.defineProperty(MaterialIcon, 'folderShared', {get: MaterialIcon$folderShared_getInstance});
  Object.defineProperty(MaterialIcon, 'cast', {get: MaterialIcon$cast_getInstance});
  Object.defineProperty(MaterialIcon, 'castConnected', {get: MaterialIcon$castConnected_getInstance});
  Object.defineProperty(MaterialIcon, 'computer', {get: MaterialIcon$computer_getInstance});
  Object.defineProperty(MaterialIcon, 'desktopMac', {get: MaterialIcon$desktopMac_getInstance});
  Object.defineProperty(MaterialIcon, 'desktopWindows', {get: MaterialIcon$desktopWindows_getInstance});
  Object.defineProperty(MaterialIcon, 'developerBoard', {get: MaterialIcon$developerBoard_getInstance});
  Object.defineProperty(MaterialIcon, 'devicesOther', {get: MaterialIcon$devicesOther_getInstance});
  Object.defineProperty(MaterialIcon, 'deviceHub', {get: MaterialIcon$deviceHub_getInstance});
  Object.defineProperty(MaterialIcon, 'dock', {get: MaterialIcon$dock_getInstance});
  Object.defineProperty(MaterialIcon, 'gamepad', {get: MaterialIcon$gamepad_getInstance});
  Object.defineProperty(MaterialIcon, 'headset', {get: MaterialIcon$headset_getInstance});
  Object.defineProperty(MaterialIcon, 'headsetMic', {get: MaterialIcon$headsetMic_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboard', {get: MaterialIcon$keyboard_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardArrowDown', {get: MaterialIcon$keyboardArrowDown_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardArrowLeft', {get: MaterialIcon$keyboardArrowLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardArrowRight', {get: MaterialIcon$keyboardArrowRight_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardArrowUp', {get: MaterialIcon$keyboardArrowUp_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardBackspace', {get: MaterialIcon$keyboardBackspace_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardCapslock', {get: MaterialIcon$keyboardCapslock_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardHide', {get: MaterialIcon$keyboardHide_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardReturn', {get: MaterialIcon$keyboardReturn_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardTab', {get: MaterialIcon$keyboardTab_getInstance});
  Object.defineProperty(MaterialIcon, 'keyboardVoice', {get: MaterialIcon$keyboardVoice_getInstance});
  Object.defineProperty(MaterialIcon, 'laptop', {get: MaterialIcon$laptop_getInstance});
  Object.defineProperty(MaterialIcon, 'laptopChromebook', {get: MaterialIcon$laptopChromebook_getInstance});
  Object.defineProperty(MaterialIcon, 'laptopMac', {get: MaterialIcon$laptopMac_getInstance});
  Object.defineProperty(MaterialIcon, 'laptopWindows', {get: MaterialIcon$laptopWindows_getInstance});
  Object.defineProperty(MaterialIcon, 'memory', {get: MaterialIcon$memory_getInstance});
  Object.defineProperty(MaterialIcon, 'mouse', {get: MaterialIcon$mouse_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelink', {get: MaterialIcon$phonelink_getInstance});
  Object.defineProperty(MaterialIcon, 'phonelinkOff', {get: MaterialIcon$phonelinkOff_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneAndroid', {get: MaterialIcon$phoneAndroid_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneIphone', {get: MaterialIcon$phoneIphone_getInstance});
  Object.defineProperty(MaterialIcon, 'powerInput', {get: MaterialIcon$powerInput_getInstance});
  Object.defineProperty(MaterialIcon, 'router', {get: MaterialIcon$router_getInstance});
  Object.defineProperty(MaterialIcon, 'scanner', {get: MaterialIcon$scanner_getInstance});
  Object.defineProperty(MaterialIcon, 'security', {get: MaterialIcon$security_getInstance});
  Object.defineProperty(MaterialIcon, 'simCard', {get: MaterialIcon$simCard_getInstance});
  Object.defineProperty(MaterialIcon, 'smartphone', {get: MaterialIcon$smartphone_getInstance});
  Object.defineProperty(MaterialIcon, 'speaker', {get: MaterialIcon$speaker_getInstance});
  Object.defineProperty(MaterialIcon, 'speakerGroup', {get: MaterialIcon$speakerGroup_getInstance});
  Object.defineProperty(MaterialIcon, 'tablet', {get: MaterialIcon$tablet_getInstance});
  Object.defineProperty(MaterialIcon, 'tabletAndroid', {get: MaterialIcon$tabletAndroid_getInstance});
  Object.defineProperty(MaterialIcon, 'tabletMac', {get: MaterialIcon$tabletMac_getInstance});
  Object.defineProperty(MaterialIcon, 'toys', {get: MaterialIcon$toys_getInstance});
  Object.defineProperty(MaterialIcon, 'tv', {get: MaterialIcon$tv_getInstance});
  Object.defineProperty(MaterialIcon, 'videogameAsset', {get: MaterialIcon$videogameAsset_getInstance});
  Object.defineProperty(MaterialIcon, 'watch', {get: MaterialIcon$watch_getInstance});
  Object.defineProperty(MaterialIcon, 'addAPhoto', {get: MaterialIcon$addAPhoto_getInstance});
  Object.defineProperty(MaterialIcon, 'addToPhotos', {get: MaterialIcon$addToPhotos_getInstance});
  Object.defineProperty(MaterialIcon, 'adjust', {get: MaterialIcon$adjust_getInstance});
  Object.defineProperty(MaterialIcon, 'assistant', {get: MaterialIcon$assistant_getInstance});
  Object.defineProperty(MaterialIcon, 'assistantPhoto', {get: MaterialIcon$assistantPhoto_getInstance});
  Object.defineProperty(MaterialIcon, 'audiotrack', {get: MaterialIcon$audiotrack_getInstance});
  Object.defineProperty(MaterialIcon, 'blurCircular', {get: MaterialIcon$blurCircular_getInstance});
  Object.defineProperty(MaterialIcon, 'blurLinear', {get: MaterialIcon$blurLinear_getInstance});
  Object.defineProperty(MaterialIcon, 'blurOff', {get: MaterialIcon$blurOff_getInstance});
  Object.defineProperty(MaterialIcon, 'blurOn', {get: MaterialIcon$blurOn_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness1', {get: MaterialIcon$brightness1_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness2', {get: MaterialIcon$brightness2_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness3', {get: MaterialIcon$brightness3_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness4', {get: MaterialIcon$brightness4_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness5', {get: MaterialIcon$brightness5_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness6', {get: MaterialIcon$brightness6_getInstance});
  Object.defineProperty(MaterialIcon, 'brightness7', {get: MaterialIcon$brightness7_getInstance});
  Object.defineProperty(MaterialIcon, 'brokenImage', {get: MaterialIcon$brokenImage_getInstance});
  Object.defineProperty(MaterialIcon, 'brush', {get: MaterialIcon$brush_getInstance});
  Object.defineProperty(MaterialIcon, 'burstMode', {get: MaterialIcon$burstMode_getInstance});
  Object.defineProperty(MaterialIcon, 'camera', {get: MaterialIcon$camera_getInstance});
  Object.defineProperty(MaterialIcon, 'cameraAlt', {get: MaterialIcon$cameraAlt_getInstance});
  Object.defineProperty(MaterialIcon, 'cameraFront', {get: MaterialIcon$cameraFront_getInstance});
  Object.defineProperty(MaterialIcon, 'cameraRear', {get: MaterialIcon$cameraRear_getInstance});
  Object.defineProperty(MaterialIcon, 'cameraRoll', {get: MaterialIcon$cameraRoll_getInstance});
  Object.defineProperty(MaterialIcon, 'centerFocusStrong', {get: MaterialIcon$centerFocusStrong_getInstance});
  Object.defineProperty(MaterialIcon, 'centerFocusWeak', {get: MaterialIcon$centerFocusWeak_getInstance});
  Object.defineProperty(MaterialIcon, 'collections', {get: MaterialIcon$collections_getInstance});
  Object.defineProperty(MaterialIcon, 'collectionsBookmark', {get: MaterialIcon$collectionsBookmark_getInstance});
  Object.defineProperty(MaterialIcon, 'colorize', {get: MaterialIcon$colorize_getInstance});
  Object.defineProperty(MaterialIcon, 'colorLens', {get: MaterialIcon$colorLens_getInstance});
  Object.defineProperty(MaterialIcon, 'compare', {get: MaterialIcon$compare_getInstance});
  Object.defineProperty(MaterialIcon, 'controlPoint', {get: MaterialIcon$controlPoint_getInstance});
  Object.defineProperty(MaterialIcon, 'controlPointDuplicate', {get: MaterialIcon$controlPointDuplicate_getInstance});
  Object.defineProperty(MaterialIcon, 'crop169', {get: MaterialIcon$crop169_getInstance});
  Object.defineProperty(MaterialIcon, 'crop', {get: MaterialIcon$crop_getInstance});
  Object.defineProperty(MaterialIcon, 'crop32', {get: MaterialIcon$crop32_getInstance});
  Object.defineProperty(MaterialIcon, 'crop54', {get: MaterialIcon$crop54_getInstance});
  Object.defineProperty(MaterialIcon, 'crop75', {get: MaterialIcon$crop75_getInstance});
  Object.defineProperty(MaterialIcon, 'cropDin', {get: MaterialIcon$cropDin_getInstance});
  Object.defineProperty(MaterialIcon, 'cropFree', {get: MaterialIcon$cropFree_getInstance});
  Object.defineProperty(MaterialIcon, 'cropLandscape', {get: MaterialIcon$cropLandscape_getInstance});
  Object.defineProperty(MaterialIcon, 'cropOriginal', {get: MaterialIcon$cropOriginal_getInstance});
  Object.defineProperty(MaterialIcon, 'cropPortrait', {get: MaterialIcon$cropPortrait_getInstance});
  Object.defineProperty(MaterialIcon, 'cropRotate', {get: MaterialIcon$cropRotate_getInstance});
  Object.defineProperty(MaterialIcon, 'cropSquare', {get: MaterialIcon$cropSquare_getInstance});
  Object.defineProperty(MaterialIcon, 'dehaze', {get: MaterialIcon$dehaze_getInstance});
  Object.defineProperty(MaterialIcon, 'details', {get: MaterialIcon$details_getInstance});
  Object.defineProperty(MaterialIcon, 'edit', {get: MaterialIcon$edit_getInstance});
  Object.defineProperty(MaterialIcon, 'exposure', {get: MaterialIcon$exposure_getInstance});
  Object.defineProperty(MaterialIcon, 'exposureNeg1', {get: MaterialIcon$exposureNeg1_getInstance});
  Object.defineProperty(MaterialIcon, 'exposureNeg2', {get: MaterialIcon$exposureNeg2_getInstance});
  Object.defineProperty(MaterialIcon, 'exposurePlus1', {get: MaterialIcon$exposurePlus1_getInstance});
  Object.defineProperty(MaterialIcon, 'exposurePlus2', {get: MaterialIcon$exposurePlus2_getInstance});
  Object.defineProperty(MaterialIcon, 'exposureZero', {get: MaterialIcon$exposureZero_getInstance});
  Object.defineProperty(MaterialIcon, 'filter1', {get: MaterialIcon$filter1_getInstance});
  Object.defineProperty(MaterialIcon, 'filter', {get: MaterialIcon$filter_getInstance});
  Object.defineProperty(MaterialIcon, 'filter2', {get: MaterialIcon$filter2_getInstance});
  Object.defineProperty(MaterialIcon, 'filter3', {get: MaterialIcon$filter3_getInstance});
  Object.defineProperty(MaterialIcon, 'filter4', {get: MaterialIcon$filter4_getInstance});
  Object.defineProperty(MaterialIcon, 'filter5', {get: MaterialIcon$filter5_getInstance});
  Object.defineProperty(MaterialIcon, 'filter6', {get: MaterialIcon$filter6_getInstance});
  Object.defineProperty(MaterialIcon, 'filter7', {get: MaterialIcon$filter7_getInstance});
  Object.defineProperty(MaterialIcon, 'filter8', {get: MaterialIcon$filter8_getInstance});
  Object.defineProperty(MaterialIcon, 'filter9', {get: MaterialIcon$filter9_getInstance});
  Object.defineProperty(MaterialIcon, 'filter9Plus', {get: MaterialIcon$filter9Plus_getInstance});
  Object.defineProperty(MaterialIcon, 'filterBAndW', {get: MaterialIcon$filterBAndW_getInstance});
  Object.defineProperty(MaterialIcon, 'filterCenterFocus', {get: MaterialIcon$filterCenterFocus_getInstance});
  Object.defineProperty(MaterialIcon, 'filterDrama', {get: MaterialIcon$filterDrama_getInstance});
  Object.defineProperty(MaterialIcon, 'filterFrames', {get: MaterialIcon$filterFrames_getInstance});
  Object.defineProperty(MaterialIcon, 'filterHdr', {get: MaterialIcon$filterHdr_getInstance});
  Object.defineProperty(MaterialIcon, 'filterNone', {get: MaterialIcon$filterNone_getInstance});
  Object.defineProperty(MaterialIcon, 'filterTiltShift', {get: MaterialIcon$filterTiltShift_getInstance});
  Object.defineProperty(MaterialIcon, 'filterVintage', {get: MaterialIcon$filterVintage_getInstance});
  Object.defineProperty(MaterialIcon, 'flare', {get: MaterialIcon$flare_getInstance});
  Object.defineProperty(MaterialIcon, 'flashAuto', {get: MaterialIcon$flashAuto_getInstance});
  Object.defineProperty(MaterialIcon, 'flashOff', {get: MaterialIcon$flashOff_getInstance});
  Object.defineProperty(MaterialIcon, 'flashOn', {get: MaterialIcon$flashOn_getInstance});
  Object.defineProperty(MaterialIcon, 'flip', {get: MaterialIcon$flip_getInstance});
  Object.defineProperty(MaterialIcon, 'gradient', {get: MaterialIcon$gradient_getInstance});
  Object.defineProperty(MaterialIcon, 'grain', {get: MaterialIcon$grain_getInstance});
  Object.defineProperty(MaterialIcon, 'gridOff', {get: MaterialIcon$gridOff_getInstance});
  Object.defineProperty(MaterialIcon, 'gridOn', {get: MaterialIcon$gridOn_getInstance});
  Object.defineProperty(MaterialIcon, 'hdrOff', {get: MaterialIcon$hdrOff_getInstance});
  Object.defineProperty(MaterialIcon, 'hdrOn', {get: MaterialIcon$hdrOn_getInstance});
  Object.defineProperty(MaterialIcon, 'hdrStrong', {get: MaterialIcon$hdrStrong_getInstance});
  Object.defineProperty(MaterialIcon, 'hdrWeak', {get: MaterialIcon$hdrWeak_getInstance});
  Object.defineProperty(MaterialIcon, 'healing', {get: MaterialIcon$healing_getInstance});
  Object.defineProperty(MaterialIcon, 'image', {get: MaterialIcon$image_getInstance});
  Object.defineProperty(MaterialIcon, 'imageAspectRatio', {get: MaterialIcon$imageAspectRatio_getInstance});
  Object.defineProperty(MaterialIcon, 'iso', {get: MaterialIcon$iso_getInstance});
  Object.defineProperty(MaterialIcon, 'landscape', {get: MaterialIcon$landscape_getInstance});
  Object.defineProperty(MaterialIcon, 'leakAdd', {get: MaterialIcon$leakAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'leakRemove', {get: MaterialIcon$leakRemove_getInstance});
  Object.defineProperty(MaterialIcon, 'lens', {get: MaterialIcon$lens_getInstance});
  Object.defineProperty(MaterialIcon, 'linkedCamera', {get: MaterialIcon$linkedCamera_getInstance});
  Object.defineProperty(MaterialIcon, 'looks', {get: MaterialIcon$looks_getInstance});
  Object.defineProperty(MaterialIcon, 'looks3', {get: MaterialIcon$looks3_getInstance});
  Object.defineProperty(MaterialIcon, 'looks4', {get: MaterialIcon$looks4_getInstance});
  Object.defineProperty(MaterialIcon, 'looks5', {get: MaterialIcon$looks5_getInstance});
  Object.defineProperty(MaterialIcon, 'looks6', {get: MaterialIcon$looks6_getInstance});
  Object.defineProperty(MaterialIcon, 'looksOne', {get: MaterialIcon$looksOne_getInstance});
  Object.defineProperty(MaterialIcon, 'looksTwo', {get: MaterialIcon$looksTwo_getInstance});
  Object.defineProperty(MaterialIcon, 'loupe', {get: MaterialIcon$loupe_getInstance});
  Object.defineProperty(MaterialIcon, 'monochromePhotos', {get: MaterialIcon$monochromePhotos_getInstance});
  Object.defineProperty(MaterialIcon, 'movieCreation', {get: MaterialIcon$movieCreation_getInstance});
  Object.defineProperty(MaterialIcon, 'movieFilter', {get: MaterialIcon$movieFilter_getInstance});
  Object.defineProperty(MaterialIcon, 'musicNote', {get: MaterialIcon$musicNote_getInstance});
  Object.defineProperty(MaterialIcon, 'nature', {get: MaterialIcon$nature_getInstance});
  Object.defineProperty(MaterialIcon, 'naturePeople', {get: MaterialIcon$naturePeople_getInstance});
  Object.defineProperty(MaterialIcon, 'navigateBefore', {get: MaterialIcon$navigateBefore_getInstance});
  Object.defineProperty(MaterialIcon, 'navigateNext', {get: MaterialIcon$navigateNext_getInstance});
  Object.defineProperty(MaterialIcon, 'palette', {get: MaterialIcon$palette_getInstance});
  Object.defineProperty(MaterialIcon, 'panorama', {get: MaterialIcon$panorama_getInstance});
  Object.defineProperty(MaterialIcon, 'panoramaFishEye', {get: MaterialIcon$panoramaFishEye_getInstance});
  Object.defineProperty(MaterialIcon, 'panoramaHorizontal', {get: MaterialIcon$panoramaHorizontal_getInstance});
  Object.defineProperty(MaterialIcon, 'panoramaVertical', {get: MaterialIcon$panoramaVertical_getInstance});
  Object.defineProperty(MaterialIcon, 'panoramaWideAngle', {get: MaterialIcon$panoramaWideAngle_getInstance});
  Object.defineProperty(MaterialIcon, 'photo', {get: MaterialIcon$photo_getInstance});
  Object.defineProperty(MaterialIcon, 'photoAlbum', {get: MaterialIcon$photoAlbum_getInstance});
  Object.defineProperty(MaterialIcon, 'photoCamera', {get: MaterialIcon$photoCamera_getInstance});
  Object.defineProperty(MaterialIcon, 'photoFilter', {get: MaterialIcon$photoFilter_getInstance});
  Object.defineProperty(MaterialIcon, 'photoLibrary', {get: MaterialIcon$photoLibrary_getInstance});
  Object.defineProperty(MaterialIcon, 'photoSizeSelectActual', {get: MaterialIcon$photoSizeSelectActual_getInstance});
  Object.defineProperty(MaterialIcon, 'photoSizeSelectLarge', {get: MaterialIcon$photoSizeSelectLarge_getInstance});
  Object.defineProperty(MaterialIcon, 'photoSizeSelectSmall', {get: MaterialIcon$photoSizeSelectSmall_getInstance});
  Object.defineProperty(MaterialIcon, 'pictureAsPdf', {get: MaterialIcon$pictureAsPdf_getInstance});
  Object.defineProperty(MaterialIcon, 'portrait', {get: MaterialIcon$portrait_getInstance});
  Object.defineProperty(MaterialIcon, 'removeRedEye', {get: MaterialIcon$removeRedEye_getInstance});
  Object.defineProperty(MaterialIcon, 'rotate90DegreesCcw', {get: MaterialIcon$rotate90DegreesCcw_getInstance});
  Object.defineProperty(MaterialIcon, 'rotateLeft', {get: MaterialIcon$rotateLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'rotateRight', {get: MaterialIcon$rotateRight_getInstance});
  Object.defineProperty(MaterialIcon, 'slideshow', {get: MaterialIcon$slideshow_getInstance});
  Object.defineProperty(MaterialIcon, 'straighten', {get: MaterialIcon$straighten_getInstance});
  Object.defineProperty(MaterialIcon, 'style', {get: MaterialIcon$style_getInstance});
  Object.defineProperty(MaterialIcon, 'switchCamera', {get: MaterialIcon$switchCamera_getInstance});
  Object.defineProperty(MaterialIcon, 'switchVideo', {get: MaterialIcon$switchVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'tagFaces', {get: MaterialIcon$tagFaces_getInstance});
  Object.defineProperty(MaterialIcon, 'texture', {get: MaterialIcon$texture_getInstance});
  Object.defineProperty(MaterialIcon, 'timelapse', {get: MaterialIcon$timelapse_getInstance});
  Object.defineProperty(MaterialIcon, 'timer10', {get: MaterialIcon$timer10_getInstance});
  Object.defineProperty(MaterialIcon, 'timer', {get: MaterialIcon$timer_getInstance});
  Object.defineProperty(MaterialIcon, 'timer3', {get: MaterialIcon$timer3_getInstance});
  Object.defineProperty(MaterialIcon, 'timerOff', {get: MaterialIcon$timerOff_getInstance});
  Object.defineProperty(MaterialIcon, 'tonality', {get: MaterialIcon$tonality_getInstance});
  Object.defineProperty(MaterialIcon, 'transform', {get: MaterialIcon$transform_getInstance});
  Object.defineProperty(MaterialIcon, 'tune', {get: MaterialIcon$tune_getInstance});
  Object.defineProperty(MaterialIcon, 'viewComfy', {get: MaterialIcon$viewComfy_getInstance});
  Object.defineProperty(MaterialIcon, 'viewCompact', {get: MaterialIcon$viewCompact_getInstance});
  Object.defineProperty(MaterialIcon, 'vignette', {get: MaterialIcon$vignette_getInstance});
  Object.defineProperty(MaterialIcon, 'wbAuto', {get: MaterialIcon$wbAuto_getInstance});
  Object.defineProperty(MaterialIcon, 'wbCloudy', {get: MaterialIcon$wbCloudy_getInstance});
  Object.defineProperty(MaterialIcon, 'wbIncandescent', {get: MaterialIcon$wbIncandescent_getInstance});
  Object.defineProperty(MaterialIcon, 'wbIridescent', {get: MaterialIcon$wbIridescent_getInstance});
  Object.defineProperty(MaterialIcon, 'wbSunny', {get: MaterialIcon$wbSunny_getInstance});
  Object.defineProperty(MaterialIcon, 'addLocation', {get: MaterialIcon$addLocation_getInstance});
  Object.defineProperty(MaterialIcon, 'beenhere', {get: MaterialIcon$beenhere_getInstance});
  Object.defineProperty(MaterialIcon, 'directions', {get: MaterialIcon$directions_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsBike', {get: MaterialIcon$directionsBike_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsBoat', {get: MaterialIcon$directionsBoat_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsBus', {get: MaterialIcon$directionsBus_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsCar', {get: MaterialIcon$directionsCar_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsRailway', {get: MaterialIcon$directionsRailway_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsRun', {get: MaterialIcon$directionsRun_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsSubway', {get: MaterialIcon$directionsSubway_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsTransit', {get: MaterialIcon$directionsTransit_getInstance});
  Object.defineProperty(MaterialIcon, 'directionsWalk', {get: MaterialIcon$directionsWalk_getInstance});
  Object.defineProperty(MaterialIcon, 'editLocation', {get: MaterialIcon$editLocation_getInstance});
  Object.defineProperty(MaterialIcon, 'evStation', {get: MaterialIcon$evStation_getInstance});
  Object.defineProperty(MaterialIcon, 'flight', {get: MaterialIcon$flight_getInstance});
  Object.defineProperty(MaterialIcon, 'hotel', {get: MaterialIcon$hotel_getInstance});
  Object.defineProperty(MaterialIcon, 'layers', {get: MaterialIcon$layers_getInstance});
  Object.defineProperty(MaterialIcon, 'layersClear', {get: MaterialIcon$layersClear_getInstance});
  Object.defineProperty(MaterialIcon, 'localActivity', {get: MaterialIcon$localActivity_getInstance});
  Object.defineProperty(MaterialIcon, 'localAirport', {get: MaterialIcon$localAirport_getInstance});
  Object.defineProperty(MaterialIcon, 'localAtm', {get: MaterialIcon$localAtm_getInstance});
  Object.defineProperty(MaterialIcon, 'localBar', {get: MaterialIcon$localBar_getInstance});
  Object.defineProperty(MaterialIcon, 'localCafe', {get: MaterialIcon$localCafe_getInstance});
  Object.defineProperty(MaterialIcon, 'localCarWash', {get: MaterialIcon$localCarWash_getInstance});
  Object.defineProperty(MaterialIcon, 'localConvenienceStore', {get: MaterialIcon$localConvenienceStore_getInstance});
  Object.defineProperty(MaterialIcon, 'localDining', {get: MaterialIcon$localDining_getInstance});
  Object.defineProperty(MaterialIcon, 'localDrink', {get: MaterialIcon$localDrink_getInstance});
  Object.defineProperty(MaterialIcon, 'localFlorist', {get: MaterialIcon$localFlorist_getInstance});
  Object.defineProperty(MaterialIcon, 'localGasStation', {get: MaterialIcon$localGasStation_getInstance});
  Object.defineProperty(MaterialIcon, 'localGroceryStore', {get: MaterialIcon$localGroceryStore_getInstance});
  Object.defineProperty(MaterialIcon, 'localHospital', {get: MaterialIcon$localHospital_getInstance});
  Object.defineProperty(MaterialIcon, 'localHotel', {get: MaterialIcon$localHotel_getInstance});
  Object.defineProperty(MaterialIcon, 'localLaundryService', {get: MaterialIcon$localLaundryService_getInstance});
  Object.defineProperty(MaterialIcon, 'localLibrary', {get: MaterialIcon$localLibrary_getInstance});
  Object.defineProperty(MaterialIcon, 'localMall', {get: MaterialIcon$localMall_getInstance});
  Object.defineProperty(MaterialIcon, 'localMovies', {get: MaterialIcon$localMovies_getInstance});
  Object.defineProperty(MaterialIcon, 'localOffer', {get: MaterialIcon$localOffer_getInstance});
  Object.defineProperty(MaterialIcon, 'localParking', {get: MaterialIcon$localParking_getInstance});
  Object.defineProperty(MaterialIcon, 'localPharmacy', {get: MaterialIcon$localPharmacy_getInstance});
  Object.defineProperty(MaterialIcon, 'localPhone', {get: MaterialIcon$localPhone_getInstance});
  Object.defineProperty(MaterialIcon, 'localPizza', {get: MaterialIcon$localPizza_getInstance});
  Object.defineProperty(MaterialIcon, 'localPlay', {get: MaterialIcon$localPlay_getInstance});
  Object.defineProperty(MaterialIcon, 'localPostOffice', {get: MaterialIcon$localPostOffice_getInstance});
  Object.defineProperty(MaterialIcon, 'localPrintshop', {get: MaterialIcon$localPrintshop_getInstance});
  Object.defineProperty(MaterialIcon, 'localSee', {get: MaterialIcon$localSee_getInstance});
  Object.defineProperty(MaterialIcon, 'localShipping', {get: MaterialIcon$localShipping_getInstance});
  Object.defineProperty(MaterialIcon, 'localTaxi', {get: MaterialIcon$localTaxi_getInstance});
  Object.defineProperty(MaterialIcon, 'map', {get: MaterialIcon$map_getInstance});
  Object.defineProperty(MaterialIcon, 'myLocation', {get: MaterialIcon$myLocation_getInstance});
  Object.defineProperty(MaterialIcon, 'navigation', {get: MaterialIcon$navigation_getInstance});
  Object.defineProperty(MaterialIcon, 'nearMe', {get: MaterialIcon$nearMe_getInstance});
  Object.defineProperty(MaterialIcon, 'personPin', {get: MaterialIcon$personPin_getInstance});
  Object.defineProperty(MaterialIcon, 'personPinCircle', {get: MaterialIcon$personPinCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'pinDrop', {get: MaterialIcon$pinDrop_getInstance});
  Object.defineProperty(MaterialIcon, 'place', {get: MaterialIcon$place_getInstance});
  Object.defineProperty(MaterialIcon, 'rateReview', {get: MaterialIcon$rateReview_getInstance});
  Object.defineProperty(MaterialIcon, 'restaurant', {get: MaterialIcon$restaurant_getInstance});
  Object.defineProperty(MaterialIcon, 'restaurantMenu', {get: MaterialIcon$restaurantMenu_getInstance});
  Object.defineProperty(MaterialIcon, 'satellite', {get: MaterialIcon$satellite_getInstance});
  Object.defineProperty(MaterialIcon, 'storeMallDirectory', {get: MaterialIcon$storeMallDirectory_getInstance});
  Object.defineProperty(MaterialIcon, 'streetview', {get: MaterialIcon$streetview_getInstance});
  Object.defineProperty(MaterialIcon, 'subway', {get: MaterialIcon$subway_getInstance});
  Object.defineProperty(MaterialIcon, 'terrain', {get: MaterialIcon$terrain_getInstance});
  Object.defineProperty(MaterialIcon, 'traffic', {get: MaterialIcon$traffic_getInstance});
  Object.defineProperty(MaterialIcon, 'train', {get: MaterialIcon$train_getInstance});
  Object.defineProperty(MaterialIcon, 'tram', {get: MaterialIcon$tram_getInstance});
  Object.defineProperty(MaterialIcon, 'transferWithinAStation', {get: MaterialIcon$transferWithinAStation_getInstance});
  Object.defineProperty(MaterialIcon, 'zoomOutMap', {get: MaterialIcon$zoomOutMap_getInstance});
  Object.defineProperty(MaterialIcon, 'apps', {get: MaterialIcon$apps_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowBack', {get: MaterialIcon$arrowBack_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowDownward', {get: MaterialIcon$arrowDownward_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowDropDown', {get: MaterialIcon$arrowDropDown_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowDropDownCircle', {get: MaterialIcon$arrowDropDownCircle_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowDropUp', {get: MaterialIcon$arrowDropUp_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowForward', {get: MaterialIcon$arrowForward_getInstance});
  Object.defineProperty(MaterialIcon, 'arrowUpward', {get: MaterialIcon$arrowUpward_getInstance});
  Object.defineProperty(MaterialIcon, 'cancel', {get: MaterialIcon$cancel_getInstance});
  Object.defineProperty(MaterialIcon, 'check', {get: MaterialIcon$check_getInstance});
  Object.defineProperty(MaterialIcon, 'chevronLeft', {get: MaterialIcon$chevronLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'chevronRight', {get: MaterialIcon$chevronRight_getInstance});
  Object.defineProperty(MaterialIcon, 'close', {get: MaterialIcon$close_getInstance});
  Object.defineProperty(MaterialIcon, 'expandLess', {get: MaterialIcon$expandLess_getInstance});
  Object.defineProperty(MaterialIcon, 'expandMore', {get: MaterialIcon$expandMore_getInstance});
  Object.defineProperty(MaterialIcon, 'firstPage', {get: MaterialIcon$firstPage_getInstance});
  Object.defineProperty(MaterialIcon, 'fullscreen', {get: MaterialIcon$fullscreen_getInstance});
  Object.defineProperty(MaterialIcon, 'fullscreenExit', {get: MaterialIcon$fullscreenExit_getInstance});
  Object.defineProperty(MaterialIcon, 'lastPage', {get: MaterialIcon$lastPage_getInstance});
  Object.defineProperty(MaterialIcon, 'menu', {get: MaterialIcon$menu_getInstance});
  Object.defineProperty(MaterialIcon, 'moreHoriz', {get: MaterialIcon$moreHoriz_getInstance});
  Object.defineProperty(MaterialIcon, 'moreVert', {get: MaterialIcon$moreVert_getInstance});
  Object.defineProperty(MaterialIcon, 'refresh', {get: MaterialIcon$refresh_getInstance});
  Object.defineProperty(MaterialIcon, 'subdirectoryArrowLeft', {get: MaterialIcon$subdirectoryArrowLeft_getInstance});
  Object.defineProperty(MaterialIcon, 'subdirectoryArrowRight', {get: MaterialIcon$subdirectoryArrowRight_getInstance});
  Object.defineProperty(MaterialIcon, 'unfoldLess', {get: MaterialIcon$unfoldLess_getInstance});
  Object.defineProperty(MaterialIcon, 'unfoldMore', {get: MaterialIcon$unfoldMore_getInstance});
  Object.defineProperty(MaterialIcon, 'adb', {get: MaterialIcon$adb_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatFlat', {get: MaterialIcon$airlineSeatFlat_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatFlatAngled', {get: MaterialIcon$airlineSeatFlatAngled_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatIndividualSuite', {get: MaterialIcon$airlineSeatIndividualSuite_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatLegroomExtra', {get: MaterialIcon$airlineSeatLegroomExtra_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatLegroomNormal', {get: MaterialIcon$airlineSeatLegroomNormal_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatLegroomReduced', {get: MaterialIcon$airlineSeatLegroomReduced_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatReclineExtra', {get: MaterialIcon$airlineSeatReclineExtra_getInstance});
  Object.defineProperty(MaterialIcon, 'airlineSeatReclineNormal', {get: MaterialIcon$airlineSeatReclineNormal_getInstance});
  Object.defineProperty(MaterialIcon, 'bluetoothAudio', {get: MaterialIcon$bluetoothAudio_getInstance});
  Object.defineProperty(MaterialIcon, 'confirmationNumber', {get: MaterialIcon$confirmationNumber_getInstance});
  Object.defineProperty(MaterialIcon, 'discFull', {get: MaterialIcon$discFull_getInstance});
  Object.defineProperty(MaterialIcon, 'doNotDisturb', {get: MaterialIcon$doNotDisturb_getInstance});
  Object.defineProperty(MaterialIcon, 'doNotDisturbAlt', {get: MaterialIcon$doNotDisturbAlt_getInstance});
  Object.defineProperty(MaterialIcon, 'doNotDisturbOff', {get: MaterialIcon$doNotDisturbOff_getInstance});
  Object.defineProperty(MaterialIcon, 'doNotDisturbOn', {get: MaterialIcon$doNotDisturbOn_getInstance});
  Object.defineProperty(MaterialIcon, 'driveEta', {get: MaterialIcon$driveEta_getInstance});
  Object.defineProperty(MaterialIcon, 'enhancedEncryption', {get: MaterialIcon$enhancedEncryption_getInstance});
  Object.defineProperty(MaterialIcon, 'eventAvailable', {get: MaterialIcon$eventAvailable_getInstance});
  Object.defineProperty(MaterialIcon, 'eventBusy', {get: MaterialIcon$eventBusy_getInstance});
  Object.defineProperty(MaterialIcon, 'eventNote', {get: MaterialIcon$eventNote_getInstance});
  Object.defineProperty(MaterialIcon, 'folderSpecial', {get: MaterialIcon$folderSpecial_getInstance});
  Object.defineProperty(MaterialIcon, 'liveTv', {get: MaterialIcon$liveTv_getInstance});
  Object.defineProperty(MaterialIcon, 'mms', {get: MaterialIcon$mms_getInstance});
  Object.defineProperty(MaterialIcon, 'more', {get: MaterialIcon$more_getInstance});
  Object.defineProperty(MaterialIcon, 'networkCheck', {get: MaterialIcon$networkCheck_getInstance});
  Object.defineProperty(MaterialIcon, 'networkLocked', {get: MaterialIcon$networkLocked_getInstance});
  Object.defineProperty(MaterialIcon, 'noEncryption', {get: MaterialIcon$noEncryption_getInstance});
  Object.defineProperty(MaterialIcon, 'ondemandVideo', {get: MaterialIcon$ondemandVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'personalVideo', {get: MaterialIcon$personalVideo_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneBluetoothSpeaker', {get: MaterialIcon$phoneBluetoothSpeaker_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneForwarded', {get: MaterialIcon$phoneForwarded_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneInTalk', {get: MaterialIcon$phoneInTalk_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneLocked', {get: MaterialIcon$phoneLocked_getInstance});
  Object.defineProperty(MaterialIcon, 'phoneMissed', {get: MaterialIcon$phoneMissed_getInstance});
  Object.defineProperty(MaterialIcon, 'phonePaused', {get: MaterialIcon$phonePaused_getInstance});
  Object.defineProperty(MaterialIcon, 'power', {get: MaterialIcon$power_getInstance});
  Object.defineProperty(MaterialIcon, 'priorityHigh', {get: MaterialIcon$priorityHigh_getInstance});
  Object.defineProperty(MaterialIcon, 'rvHookup', {get: MaterialIcon$rvHookup_getInstance});
  Object.defineProperty(MaterialIcon, 'sdCard', {get: MaterialIcon$sdCard_getInstance});
  Object.defineProperty(MaterialIcon, 'simCardAlert', {get: MaterialIcon$simCardAlert_getInstance});
  Object.defineProperty(MaterialIcon, 'sms', {get: MaterialIcon$sms_getInstance});
  Object.defineProperty(MaterialIcon, 'smsFailed', {get: MaterialIcon$smsFailed_getInstance});
  Object.defineProperty(MaterialIcon, 'sync', {get: MaterialIcon$sync_getInstance});
  Object.defineProperty(MaterialIcon, 'syncDisabled', {get: MaterialIcon$syncDisabled_getInstance});
  Object.defineProperty(MaterialIcon, 'syncProblem', {get: MaterialIcon$syncProblem_getInstance});
  Object.defineProperty(MaterialIcon, 'systemUpdate', {get: MaterialIcon$systemUpdate_getInstance});
  Object.defineProperty(MaterialIcon, 'tapAndPlay', {get: MaterialIcon$tapAndPlay_getInstance});
  Object.defineProperty(MaterialIcon, 'timeToLeave', {get: MaterialIcon$timeToLeave_getInstance});
  Object.defineProperty(MaterialIcon, 'vibration', {get: MaterialIcon$vibration_getInstance});
  Object.defineProperty(MaterialIcon, 'voiceChat', {get: MaterialIcon$voiceChat_getInstance});
  Object.defineProperty(MaterialIcon, 'vpnLock', {get: MaterialIcon$vpnLock_getInstance});
  Object.defineProperty(MaterialIcon, 'wc', {get: MaterialIcon$wc_getInstance});
  Object.defineProperty(MaterialIcon, 'wifi', {get: MaterialIcon$wifi_getInstance});
  Object.defineProperty(MaterialIcon, 'acUnit', {get: MaterialIcon$acUnit_getInstance});
  Object.defineProperty(MaterialIcon, 'airportShuttle', {get: MaterialIcon$airportShuttle_getInstance});
  Object.defineProperty(MaterialIcon, 'allInclusive', {get: MaterialIcon$allInclusive_getInstance});
  Object.defineProperty(MaterialIcon, 'beachAccess', {get: MaterialIcon$beachAccess_getInstance});
  Object.defineProperty(MaterialIcon, 'businessCenter', {get: MaterialIcon$businessCenter_getInstance});
  Object.defineProperty(MaterialIcon, 'casino', {get: MaterialIcon$casino_getInstance});
  Object.defineProperty(MaterialIcon, 'childCare', {get: MaterialIcon$childCare_getInstance});
  Object.defineProperty(MaterialIcon, 'childFriendly', {get: MaterialIcon$childFriendly_getInstance});
  Object.defineProperty(MaterialIcon, 'fitnessCenter', {get: MaterialIcon$fitnessCenter_getInstance});
  Object.defineProperty(MaterialIcon, 'freeBreakfast', {get: MaterialIcon$freeBreakfast_getInstance});
  Object.defineProperty(MaterialIcon, 'golfCourse', {get: MaterialIcon$golfCourse_getInstance});
  Object.defineProperty(MaterialIcon, 'hotTub', {get: MaterialIcon$hotTub_getInstance});
  Object.defineProperty(MaterialIcon, 'kitchen', {get: MaterialIcon$kitchen_getInstance});
  Object.defineProperty(MaterialIcon, 'pool', {get: MaterialIcon$pool_getInstance});
  Object.defineProperty(MaterialIcon, 'roomService', {get: MaterialIcon$roomService_getInstance});
  Object.defineProperty(MaterialIcon, 'rvHookup2', {get: MaterialIcon$rvHookup2_getInstance});
  Object.defineProperty(MaterialIcon, 'smokeFree', {get: MaterialIcon$smokeFree_getInstance});
  Object.defineProperty(MaterialIcon, 'smokingRooms', {get: MaterialIcon$smokingRooms_getInstance});
  Object.defineProperty(MaterialIcon, 'spa', {get: MaterialIcon$spa_getInstance});
  Object.defineProperty(MaterialIcon, 'cake', {get: MaterialIcon$cake_getInstance});
  Object.defineProperty(MaterialIcon, 'domain', {get: MaterialIcon$domain_getInstance});
  Object.defineProperty(MaterialIcon, 'group', {get: MaterialIcon$group_getInstance});
  Object.defineProperty(MaterialIcon, 'groupAdd', {get: MaterialIcon$groupAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'locationCity', {get: MaterialIcon$locationCity_getInstance});
  Object.defineProperty(MaterialIcon, 'mood', {get: MaterialIcon$mood_getInstance});
  Object.defineProperty(MaterialIcon, 'moodBad', {get: MaterialIcon$moodBad_getInstance});
  Object.defineProperty(MaterialIcon, 'notifications', {get: MaterialIcon$notifications_getInstance});
  Object.defineProperty(MaterialIcon, 'notificationsActive', {get: MaterialIcon$notificationsActive_getInstance});
  Object.defineProperty(MaterialIcon, 'notificationsNone', {get: MaterialIcon$notificationsNone_getInstance});
  Object.defineProperty(MaterialIcon, 'notificationsOff', {get: MaterialIcon$notificationsOff_getInstance});
  Object.defineProperty(MaterialIcon, 'notificationsPaused', {get: MaterialIcon$notificationsPaused_getInstance});
  Object.defineProperty(MaterialIcon, 'pages', {get: MaterialIcon$pages_getInstance});
  Object.defineProperty(MaterialIcon, 'partyMode', {get: MaterialIcon$partyMode_getInstance});
  Object.defineProperty(MaterialIcon, 'people', {get: MaterialIcon$people_getInstance});
  Object.defineProperty(MaterialIcon, 'peopleOutline', {get: MaterialIcon$peopleOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'person', {get: MaterialIcon$person_getInstance});
  Object.defineProperty(MaterialIcon, 'personAdd', {get: MaterialIcon$personAdd_getInstance});
  Object.defineProperty(MaterialIcon, 'personOutline', {get: MaterialIcon$personOutline_getInstance});
  Object.defineProperty(MaterialIcon, 'plusOne', {get: MaterialIcon$plusOne_getInstance});
  Object.defineProperty(MaterialIcon, 'poll', {get: MaterialIcon$poll_getInstance});
  Object.defineProperty(MaterialIcon, '_public', {get: MaterialIcon$_public_getInstance});
  Object.defineProperty(MaterialIcon, 'school', {get: MaterialIcon$school_getInstance});
  Object.defineProperty(MaterialIcon, 'sentimentDissatisfied', {get: MaterialIcon$sentimentDissatisfied_getInstance});
  Object.defineProperty(MaterialIcon, 'sentimentNeutral', {get: MaterialIcon$sentimentNeutral_getInstance});
  Object.defineProperty(MaterialIcon, 'sentimentSatisfied', {get: MaterialIcon$sentimentSatisfied_getInstance});
  Object.defineProperty(MaterialIcon, 'sentimentVeryDissatisfied', {get: MaterialIcon$sentimentVeryDissatisfied_getInstance});
  Object.defineProperty(MaterialIcon, 'sentimentVerySatisfied', {get: MaterialIcon$sentimentVerySatisfied_getInstance});
  Object.defineProperty(MaterialIcon, 'share', {get: MaterialIcon$share_getInstance});
  Object.defineProperty(MaterialIcon, 'whatshot', {get: MaterialIcon$whatshot_getInstance});
  Object.defineProperty(MaterialIcon, 'checkBox', {get: MaterialIcon$checkBox_getInstance});
  Object.defineProperty(MaterialIcon, 'checkBoxOutlineBlank', {get: MaterialIcon$checkBoxOutlineBlank_getInstance});
  Object.defineProperty(MaterialIcon, 'indeterminateCheckBox', {get: MaterialIcon$indeterminateCheckBox_getInstance});
  Object.defineProperty(MaterialIcon, 'radioButtonChecked', {get: MaterialIcon$radioButtonChecked_getInstance});
  Object.defineProperty(MaterialIcon, 'radioButtonUnchecked', {get: MaterialIcon$radioButtonUnchecked_getInstance});
  Object.defineProperty(MaterialIcon, 'star', {get: MaterialIcon$star_getInstance});
  Object.defineProperty(MaterialIcon, 'starBorder', {get: MaterialIcon$starBorder_getInstance});
  Object.defineProperty(MaterialIcon, 'starHalf', {get: MaterialIcon$starHalf_getInstance});
  package$image.MaterialIcon = MaterialIcon;
  package$image.color_ufzfwa$ = color;
  var package$implementationhelpers = package$koolui.implementationhelpers || (package$koolui.implementationhelpers = {});
  package$implementationhelpers.defaultEntryContext_b6syp$ = defaultEntryContext;
  package$implementationhelpers.defaultList_94tobo$ = defaultList;
  package$implementationhelpers.defaultLargeWindow_5t7ais$ = defaultLargeWindow;
  package$implementationhelpers.defaultPages_hbxkfq$ = defaultPages;
  package$implementationhelpers.TreeObservableProperty = TreeObservableProperty;
  var package$layout = package$koolui.layout || (package$koolui.layout = {});
  package$layout.LayoutViewFactory = LayoutViewFactory;
  package$koolui.lastOrNullObservableWithAnimations_89en7o$ = lastOrNullObservableWithAnimations;
  var package$views = package$koolui.views || (package$koolui.views = {});
  package$views.ViewFactory = ViewFactory;
  Object.defineProperty(ViewGenerator$Companion.prototype, 'Empty', {get: ViewGenerator$Companion$Empty_getInstance});
  Object.defineProperty(ViewGenerator, 'Companion', {get: ViewGenerator$Companion_getInstance});
  package$views.ViewGenerator = ViewGenerator;
  package$koolui.toWeb_v4uiep$ = toWeb;
  var package$async = package$koolui.async || (package$koolui.async = {});
  package$async.get_UI_wqdyv5$ = get_UI;
  Object.defineProperty(Image, 'Companion', {get: Image$Companion_getInstance});
  package$image.Image = Image;
  package$koolui.get_lifecycle_y4uc6z$ = get_lifecycle;
  package$koolui.appendLifecycled_76ravt$ = appendLifecycled;
  package$koolui.removeLifecycled_76ravt$ = removeLifecycled;
  Object.defineProperty(HtmlViewFactory, 'Companion', {get: HtmlViewFactory$Companion_getInstance});
  package$views.HtmlViewFactory = HtmlViewFactory;
  Object.defineProperty(pagesEmbedded$lambda$ObjectLiteral.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  pagesEmbedded$lambda$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  TreeObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  LayoutViewFactory.prototype.margin_2eg0t3$$default = ViewFactory.prototype.margin_2eg0t3$$default;
  LayoutViewFactory.prototype.margin_i3tg7w$$default = ViewFactory.prototype.margin_i3tg7w$$default;
  LayoutViewFactory.prototype.margin_ovmznb$ = ViewFactory.prototype.margin_ovmznb$;
  LayoutViewFactory.prototype.contentRoot_11rb$ = ViewFactory.prototype.contentRoot_11rb$;
  LayoutViewFactory.prototype.list_s8g4or$$default = ViewFactory.prototype.list_s8g4or$$default;
  LayoutViewFactory.prototype.scrollVertical_9vpp9p$$default = ViewFactory.prototype.scrollVertical_9vpp9p$$default;
  LayoutViewFactory.prototype.scrollHorizontal_9vpp9p$$default = ViewFactory.prototype.scrollHorizontal_9vpp9p$$default;
  LayoutViewFactory.prototype.linear_ajg3m9$$default = ViewFactory.prototype.linear_ajg3m9$$default;
  LayoutViewFactory.prototype.background_wxf12v$ = ViewFactory.prototype.background_wxf12v$;
  LayoutViewFactory.prototype.alpha_ovmznb$ = ViewFactory.prototype.alpha_ovmznb$;
  LayoutViewFactory.prototype.margin_qyxe2k$ = ViewFactory.prototype.margin_qyxe2k$;
  LayoutViewFactory.prototype.margin_2eg0t3$ = ViewFactory.prototype.margin_2eg0t3$;
  LayoutViewFactory.prototype.margin_i3tg7w$ = ViewFactory.prototype.margin_i3tg7w$;
  LayoutViewFactory.prototype.list_4rlyri$ = ViewFactory.prototype.list_4rlyri$;
  LayoutViewFactory.prototype.list_s8g4or$ = ViewFactory.prototype.list_s8g4or$;
  LayoutViewFactory.prototype.text_30kv5x$ = ViewFactory.prototype.text_30kv5x$;
  LayoutViewFactory.prototype.button_tmzrmh$ = ViewFactory.prototype.button_tmzrmh$;
  LayoutViewFactory.prototype.imageButton_aba7xb$ = ViewFactory.prototype.imageButton_aba7xb$;
  LayoutViewFactory.prototype.entryContext_6ji58x$ = ViewFactory.prototype.entryContext_6ji58x$;
  LayoutViewFactory.prototype.picker_dvtdv8$ = ViewFactory.prototype.picker_dvtdv8$;
  LayoutViewFactory.prototype.textField_bqlgfi$ = ViewFactory.prototype.textField_bqlgfi$;
  LayoutViewFactory.prototype.textArea_bqlgfi$ = ViewFactory.prototype.textArea_bqlgfi$;
  LayoutViewFactory.prototype.numberField_x7mhdx$ = ViewFactory.prototype.numberField_x7mhdx$;
  LayoutViewFactory.prototype.scrollVertical_9vpp9p$ = ViewFactory.prototype.scrollVertical_9vpp9p$;
  LayoutViewFactory.prototype.scrollHorizontal_9vpp9p$ = ViewFactory.prototype.scrollHorizontal_9vpp9p$;
  LayoutViewFactory.prototype.scrollBoth_wmfa1z$ = ViewFactory.prototype.scrollBoth_wmfa1z$;
  LayoutViewFactory.prototype.linear_ajg3m9$ = ViewFactory.prototype.linear_ajg3m9$;
  LayoutViewFactory.prototype.launchDialog_y4kujy$ = ViewFactory.prototype.launchDialog_y4kujy$;
  LayoutViewFactory.prototype.launchSelector_8prigm$ = ViewFactory.prototype.launchSelector_8prigm$;
  ViewGenerator$Companion$make$ObjectLiteral.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Object.defineProperty(ViewGenerator$Companion$Empty.prototype, 'title', Object.getOwnPropertyDescriptor(ViewGenerator.prototype, 'title'));
  ViewGenerator$Companion$Empty.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  HtmlViewFactory.prototype.list_s8g4or$$default = ViewFactory.prototype.list_s8g4or$$default;
  HtmlViewFactory.prototype.margin_2eg0t3$$default = ViewFactory.prototype.margin_2eg0t3$$default;
  HtmlViewFactory.prototype.margin_i3tg7w$$default = ViewFactory.prototype.margin_i3tg7w$$default;
  HtmlViewFactory.prototype.margin_ovmznb$ = ViewFactory.prototype.margin_ovmznb$;
  HtmlViewFactory.prototype.background_wxf12v$ = ViewFactory.prototype.background_wxf12v$;
  HtmlViewFactory.prototype.alpha_ovmznb$ = ViewFactory.prototype.alpha_ovmznb$;
  HtmlViewFactory.prototype.linear_ajg3m9$$default = ViewFactory.prototype.linear_ajg3m9$$default;
  HtmlViewFactory.prototype.frame_11rb$ = ViewFactory.prototype.frame_11rb$;
  HtmlViewFactory.prototype.list_4rlyri$ = ViewFactory.prototype.list_4rlyri$;
  HtmlViewFactory.prototype.list_s8g4or$ = ViewFactory.prototype.list_s8g4or$;
  HtmlViewFactory.prototype.text_30kv5x$ = ViewFactory.prototype.text_30kv5x$;
  HtmlViewFactory.prototype.button_tmzrmh$ = ViewFactory.prototype.button_tmzrmh$;
  HtmlViewFactory.prototype.imageButton_aba7xb$ = ViewFactory.prototype.imageButton_aba7xb$;
  HtmlViewFactory.prototype.entryContext_6ji58x$ = ViewFactory.prototype.entryContext_6ji58x$;
  HtmlViewFactory.prototype.picker_dvtdv8$ = ViewFactory.prototype.picker_dvtdv8$;
  HtmlViewFactory.prototype.textField_bqlgfi$ = ViewFactory.prototype.textField_bqlgfi$;
  HtmlViewFactory.prototype.textArea_bqlgfi$ = ViewFactory.prototype.textArea_bqlgfi$;
  HtmlViewFactory.prototype.numberField_x7mhdx$ = ViewFactory.prototype.numberField_x7mhdx$;
  HtmlViewFactory.prototype.scrollVertical_9vpp9p$ = ViewFactory.prototype.scrollVertical_9vpp9p$;
  HtmlViewFactory.prototype.scrollHorizontal_9vpp9p$ = ViewFactory.prototype.scrollHorizontal_9vpp9p$;
  HtmlViewFactory.prototype.scrollBoth_wmfa1z$ = ViewFactory.prototype.scrollBoth_wmfa1z$;
  HtmlViewFactory.prototype.margin_qyxe2k$ = ViewFactory.prototype.margin_qyxe2k$;
  HtmlViewFactory.prototype.margin_2eg0t3$ = ViewFactory.prototype.margin_2eg0t3$;
  HtmlViewFactory.prototype.margin_i3tg7w$ = ViewFactory.prototype.margin_i3tg7w$;
  HtmlViewFactory.prototype.launchDialog_y4kujy$ = ViewFactory.prototype.launchDialog_y4kujy$;
  HtmlViewFactory.prototype.launchSelector_8prigm$ = ViewFactory.prototype.launchSelector_8prigm$;
  HtmlViewFactory.prototype.linear_ajg3m9$ = ViewFactory.prototype.linear_ajg3m9$;
  AnyDesiredMargins = new WeakHashMap();
  AnyLifecycles = new WeakHashMap();
  return _;
}));

//# sourceMappingURL=koolui.js.map
