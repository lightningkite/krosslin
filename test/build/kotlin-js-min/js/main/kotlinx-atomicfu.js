(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }
    root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
