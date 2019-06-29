(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kommon'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kommon'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'reacktive'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'reacktive'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'reacktive'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'reacktive'.");
    }
    root.reacktive = factory(typeof reacktive === 'undefined' ? {} : reacktive, kotlin, kommon);
  }
}(this, function (_, Kotlin, $module$kommon) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Unit = Kotlin.kotlin.Unit;
  var Collection = Kotlin.kotlin.collections.Collection;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var hashCode = Kotlin.hashCode;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var List = Kotlin.kotlin.collections.List;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var equals = Kotlin.equals;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Map = Kotlin.kotlin.collections.Map;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var putAll = Kotlin.kotlin.collections.putAll_cweazw$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var MutablePropertyDelegate = $module$kommon.com.lightningkite.kommon.property.MutablePropertyDelegate;
  var PropertyDelegate = $module$kommon.com.lightningkite.kommon.property.PropertyDelegate;
  var Set = Kotlin.kotlin.collections.Set;
  EnablingObject$SubEnablingObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  EnablingObject$SubEnablingObservableProperty.prototype.constructor = EnablingObject$SubEnablingObservableProperty;
  EnablingObservableList.prototype = Object.create(EnablingObject.prototype);
  EnablingObservableList.prototype.constructor = EnablingObservableList;
  EnablingObject$SubEnablingCollection.prototype = Object.create(EnablingMutableCollection.prototype);
  EnablingObject$SubEnablingCollection.prototype.constructor = EnablingObject$SubEnablingCollection;
  EnablingObservableList$onListUpdate$ObjectLiteral.prototype = Object.create(EnablingObject$SubEnablingObservableProperty.prototype);
  EnablingObservableList$onListUpdate$ObjectLiteral.prototype.constructor = EnablingObservableList$onListUpdate$ObjectLiteral;
  IndexObservableList.prototype = Object.create(EnablingObservableList.prototype);
  IndexObservableList.prototype.constructor = IndexObservableList;
  FilteringObservableList.prototype = Object.create(IndexObservableList.prototype);
  FilteringObservableList.prototype.constructor = FilteringObservableList;
  FlatMappingObservableList.prototype = Object.create(EnablingObservableList.prototype);
  IndexObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  LastObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  LastObservableProperty.prototype.constructor = LastObservableProperty;
  MappingMutableObservableList.prototype = Object.create(MappingObservableList.prototype);
  MutableObservableListFromProperty.prototype = Object.create(EnablingObservableList.prototype);
  MutableObservableListFromProperty.prototype.constructor = MutableObservableListFromProperty;
  ObservableListFromProperty.prototype = Object.create(EnablingObservableList.prototype);
  ObservableListFromProperty.prototype.constructor = ObservableListFromProperty;
  CombineObservableProperty2.prototype = Object.create(EnablingMutableCollection.prototype);
  CombineObservableProperty2.prototype.constructor = CombineObservableProperty2;
  CombineObservableProperty3.prototype = Object.create(EnablingMutableCollection.prototype);
  CombineObservablePropertyBlind.prototype = Object.create(EnablingMutableCollection.prototype);
  SubObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  TransformMutableObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  TransformMutableObservableProperty.prototype.constructor = TransformMutableObservableProperty;
  TransformObservableProperty.prototype = Object.create(EnablingMutableCollection.prototype);
  TransformObservableProperty.prototype.constructor = TransformObservableProperty;
  MappingMutableObservableSet.prototype = Object.create(MappingObservableSet.prototype);
  function MutableObservableCollection() {
  }
  MutableObservableCollection.prototype.change_xwzc9q$ = function (old, new_0) {
    if (!this.remove_11rb$(old))
      throw IllegalArgumentException_init_0(old.toString() + ' not in the collection!');
    this.add_11rb$(new_0);
  };
  MutableObservableCollection.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableObservableCollection', interfaces: [ObservableCollection, MutableCollection]};
  function ObservableCollection() {
  }
  ObservableCollection.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ObservableCollection', interfaces: [Collection]};
  function EnablingMutableCollection(wraps) {
    if (wraps === void 0)
      wraps = ArrayList_init_0();
    this.wraps = wraps;
    this.active = false;
  }
  EnablingMutableCollection.prototype.forceUp = function () {
    if (!this.active) {
      this.active = true;
      this.enable();
    }
  };
  EnablingMutableCollection.prototype.checkDown = function () {
    if (this.wraps.isEmpty() && this.active) {
      this.active = false;
      this.disable();
    }
  };
  EnablingMutableCollection.prototype.add_11rb$ = function (element) {
    this.forceUp();
    var result = this.wraps.add_11rb$(element);
    return result;
  };
  EnablingMutableCollection.prototype.addAll_brywnq$ = function (elements) {
    this.forceUp();
    var result = this.wraps.addAll_brywnq$(elements);
    return result;
  };
  EnablingMutableCollection.prototype.clear = function () {
    this.wraps.clear();
    this.checkDown();
  };
  EnablingMutableCollection.prototype.remove_11rb$ = function (element) {
    var result = this.wraps.remove_11rb$(element);
    this.checkDown();
    return result;
  };
  EnablingMutableCollection.prototype.removeAll_brywnq$ = function (elements) {
    var result = this.wraps.removeAll_brywnq$(elements);
    this.checkDown();
    return result;
  };
  EnablingMutableCollection.prototype.retainAll_brywnq$ = function (elements) {
    var result = this.wraps.retainAll_brywnq$(elements);
    this.checkDown();
    return result;
  };
  Object.defineProperty(EnablingMutableCollection.prototype, 'size', {get: function () {
    return this.wraps.size;
  }});
  EnablingMutableCollection.prototype.add_wxm5ur$ = function (index, element) {
    return this.wraps.add_wxm5ur$(index, element);
  };
  EnablingMutableCollection.prototype.addAll_u57x28$ = function (index, elements) {
    return this.wraps.addAll_u57x28$(index, elements);
  };
  EnablingMutableCollection.prototype.contains_11rb$ = function (element) {
    return this.wraps.contains_11rb$(element);
  };
  EnablingMutableCollection.prototype.containsAll_brywnq$ = function (elements) {
    return this.wraps.containsAll_brywnq$(elements);
  };
  EnablingMutableCollection.prototype.get_za3lpa$ = function (index) {
    return this.wraps.get_za3lpa$(index);
  };
  EnablingMutableCollection.prototype.indexOf_11rb$ = function (element) {
    return this.wraps.indexOf_11rb$(element);
  };
  EnablingMutableCollection.prototype.isEmpty = function () {
    return this.wraps.isEmpty();
  };
  EnablingMutableCollection.prototype.iterator = function () {
    return this.wraps.iterator();
  };
  EnablingMutableCollection.prototype.lastIndexOf_11rb$ = function (element) {
    return this.wraps.lastIndexOf_11rb$(element);
  };
  EnablingMutableCollection.prototype.listIterator = function () {
    return this.wraps.listIterator();
  };
  EnablingMutableCollection.prototype.listIterator_za3lpa$ = function (index) {
    return this.wraps.listIterator_za3lpa$(index);
  };
  EnablingMutableCollection.prototype.removeAt_za3lpa$ = function (index) {
    return this.wraps.removeAt_za3lpa$(index);
  };
  EnablingMutableCollection.prototype.set_wxm5ur$ = function (index, element) {
    return this.wraps.set_wxm5ur$(index, element);
  };
  EnablingMutableCollection.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.wraps.subList_vux9f0$(fromIndex, toIndex);
  };
  EnablingMutableCollection.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnablingMutableCollection', interfaces: [MutableList]};
  function EnablingObject() {
    this.listenings_hcfabt$_0 = 0;
  }
  EnablingObject.prototype.refreshIfNotActive = function () {
    if (this.listenings === 0)
      this.refresh();
  };
  Object.defineProperty(EnablingObject.prototype, 'enabled', {get: function () {
    return this.listenings > 0;
  }});
  Object.defineProperty(EnablingObject.prototype, 'listenings', {get: function () {
    return this.listenings_hcfabt$_0;
  }, set: function (value) {
    var oldValue = this.listenings_hcfabt$_0;
    this.listenings_hcfabt$_0 = value;
    if (value === 0 && oldValue !== 0) {
      this.disable();
    }
    if (value !== 0 && oldValue === 0) {
      this.refresh();
      this.enable();
    }
  }});
  function EnablingObject$SubEnablingCollection($outer) {
    this.$outer = $outer;
    EnablingMutableCollection.call(this);
  }
  EnablingObject$SubEnablingCollection.prototype.enable = function () {
    var tmp$;
    tmp$ = this.$outer.listenings;
    this.$outer.listenings = tmp$ + 1 | 0;
  };
  EnablingObject$SubEnablingCollection.prototype.disable = function () {
    var tmp$;
    tmp$ = this.$outer.listenings;
    this.$outer.listenings = tmp$ - 1 | 0;
  };
  EnablingObject$SubEnablingCollection.$metadata$ = {kind: Kind_CLASS, simpleName: 'SubEnablingCollection', interfaces: [EnablingMutableCollection]};
  function EnablingObject$SubEnablingObservableProperty($outer) {
    this.$outer = $outer;
    EnablingMutableCollection.call(this);
  }
  EnablingObject$SubEnablingObservableProperty.prototype.enable = function () {
    var tmp$;
    tmp$ = this.$outer.listenings;
    this.$outer.listenings = tmp$ + 1 | 0;
  };
  EnablingObject$SubEnablingObservableProperty.prototype.disable = function () {
    var tmp$;
    tmp$ = this.$outer.listenings;
    this.$outer.listenings = tmp$ - 1 | 0;
  };
  EnablingObject$SubEnablingObservableProperty.prototype.update = function () {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      item(this.value);
    }
  };
  EnablingObject$SubEnablingObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'SubEnablingObservableProperty', interfaces: [EnablingMutableCollection, ObservableProperty]};
  EnablingObject.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnablingObject', interfaces: []};
  function invokeAll_0($receiver, a) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      item(a);
    }
  }
  function invokeAll_1($receiver, a, b) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      item(a, b);
    }
  }
  function invokeAll_2($receiver, a, b, c) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      item(a, b, c);
    }
  }
  function ConstantObservableList(originalList) {
    this.originalList = originalList;
  }
  Object.defineProperty(ConstantObservableList.prototype, 'onListAdd', {get: function () {
    return NoOpMutableCollection_getInstance().type_287e2$();
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'onListChange', {get: function () {
    return NoOpMutableCollection_getInstance().type_287e2$();
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'onListMove', {get: function () {
    return NoOpMutableCollection_getInstance().type_287e2$();
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'onListRemove', {get: function () {
    return NoOpMutableCollection_getInstance().type_287e2$();
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'onListReplace', {get: function () {
    return NoOpMutableCollection_getInstance().type_287e2$();
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'onListUpdate', {get: function () {
    return new ConstantObservableProperty(this);
  }});
  Object.defineProperty(ConstantObservableList.prototype, 'size', {get: function () {
    return this.originalList.size;
  }});
  ConstantObservableList.prototype.contains_11rb$ = function (element) {
    return this.originalList.contains_11rb$(element);
  };
  ConstantObservableList.prototype.containsAll_brywnq$ = function (elements) {
    return this.originalList.containsAll_brywnq$(elements);
  };
  ConstantObservableList.prototype.get_za3lpa$ = function (index) {
    return this.originalList.get_za3lpa$(index);
  };
  ConstantObservableList.prototype.indexOf_11rb$ = function (element) {
    return this.originalList.indexOf_11rb$(element);
  };
  ConstantObservableList.prototype.isEmpty = function () {
    return this.originalList.isEmpty();
  };
  ConstantObservableList.prototype.iterator = function () {
    return this.originalList.iterator();
  };
  ConstantObservableList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.originalList.lastIndexOf_11rb$(element);
  };
  ConstantObservableList.prototype.listIterator = function () {
    return this.originalList.listIterator();
  };
  ConstantObservableList.prototype.listIterator_za3lpa$ = function (index) {
    return this.originalList.listIterator_za3lpa$(index);
  };
  ConstantObservableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.originalList.subList_vux9f0$(fromIndex, toIndex);
  };
  ConstantObservableList.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConstantObservableList', interfaces: [ObservableList, List]};
  function EnablingObservableList() {
    EnablingObject.call(this);
    this.onListAdd_69dcxj$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onListChange_dh4xl2$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onListMove_j7mzg9$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onListUpdate_tknpq7$_0 = new EnablingObservableList$onListUpdate$ObjectLiteral(this);
    this.onListReplace_mdlrhm$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onListRemove_7n184a$_0 = new EnablingObject$SubEnablingCollection(this);
  }
  Object.defineProperty(EnablingObservableList.prototype, 'onListAdd', {get: function () {
    return this.onListAdd_69dcxj$_0;
  }});
  Object.defineProperty(EnablingObservableList.prototype, 'onListChange', {get: function () {
    return this.onListChange_dh4xl2$_0;
  }});
  Object.defineProperty(EnablingObservableList.prototype, 'onListMove', {get: function () {
    return this.onListMove_j7mzg9$_0;
  }});
  Object.defineProperty(EnablingObservableList.prototype, 'onListUpdate', {get: function () {
    return this.onListUpdate_tknpq7$_0;
  }});
  Object.defineProperty(EnablingObservableList.prototype, 'onListReplace', {get: function () {
    return this.onListReplace_mdlrhm$_0;
  }});
  Object.defineProperty(EnablingObservableList.prototype, 'onListRemove', {get: function () {
    return this.onListRemove_7n184a$_0;
  }});
  function EnablingObservableList$onListUpdate$ObjectLiteral(this$EnablingObservableList) {
    this.this$EnablingObservableList = this$EnablingObservableList;
    EnablingObject$SubEnablingObservableProperty.call(this, this$EnablingObservableList);
  }
  Object.defineProperty(EnablingObservableList$onListUpdate$ObjectLiteral.prototype, 'value', {get: function () {
    return this.this$EnablingObservableList;
  }});
  EnablingObservableList$onListUpdate$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [EnablingObject$SubEnablingObservableProperty]};
  EnablingObservableList.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnablingObservableList', interfaces: [EnablingObject, ObservableList]};
  function asObservableList_0($receiver) {
    return new ConstantObservableList($receiver);
  }
  function asObservableList_2($receiver) {
    return new ObservableListFromProperty($receiver);
  }
  function observableListOf_0(elements) {
    return new ConstantObservableList(toList(elements));
  }
  function FilteringObservableList(mutableSource, filter) {
    if (filter === void 0)
      filter = FilteringObservableList_init$lambda;
    IndexObservableList.call(this, mutableSource);
    this.mutableSource = mutableSource;
    this.filter_p43tbv$_0 = filter;
    this.refresh();
  }
  FilteringObservableList.prototype.set_wxm5ur$ = function (index, element) {
    this.refreshIfNotActive();
    this.mutableSource.set_wxm5ur$(this.sourceIndex_za3lpa$(index), element);
    return element;
  };
  FilteringObservableList.prototype.add_wxm5ur$ = function (index, element) {
    this.refreshIfNotActive();
    this.mutableSource.add_wxm5ur$(this.sourceIndex_za3lpa$(index), element);
  };
  FilteringObservableList.prototype.addAll_u57x28$ = function (index, elements) {
    this.refreshIfNotActive();
    return this.mutableSource.addAll_u57x28$(this.sourceIndex_za3lpa$(index), elements);
  };
  FilteringObservableList.prototype.move_vux9f0$ = function (fromIndex, toIndex) {
    this.refreshIfNotActive();
    this.mutableSource.move_vux9f0$(this.sourceIndex_za3lpa$(fromIndex), this.sourceIndex_za3lpa$(toIndex));
  };
  FilteringObservableList.prototype.removeAt_za3lpa$ = function (index) {
    this.refreshIfNotActive();
    return this.mutableSource.removeAt_za3lpa$(this.sourceIndex_za3lpa$(index));
  };
  FilteringObservableList.prototype.replace_brywnq$ = function (collection) {
    this.mutableSource.replace_brywnq$(collection);
  };
  FilteringObservableList.prototype.add_11rb$ = function (element) {
    if (this.filter(element)) {
      this.mutableSource.add_11rb$(element);
      return true;
    }
     else
      return false;
  };
  FilteringObservableList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$ = this.mutableSource;
    var predicate = this.filter;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    return tmp$.addAll_brywnq$(destination);
  };
  FilteringObservableList.prototype.clear = function () {
    this.mutableSource.clear();
  };
  FilteringObservableList.prototype.remove_11rb$ = function (element) {
    return this.mutableSource.remove_11rb$(element);
  };
  FilteringObservableList.prototype.removeAll_brywnq$ = function (elements) {
    return this.mutableSource.removeAll_brywnq$(elements);
  };
  FilteringObservableList.prototype.retainAll_brywnq$ = function (elements) {
    return this.mutableSource.retainAll_brywnq$(elements);
  };
  FilteringObservableList.prototype.refresh = function () {
    var $receiver = get_indices(this.source);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.filter(this.source.get_za3lpa$(element)))
        destination.add_11rb$(element);
    }
    this.resetIndex_pqoyrt$(destination);
  };
  Object.defineProperty(FilteringObservableList.prototype, 'filter', {get: function () {
    return this.filter_p43tbv$_0;
  }, set: function (value) {
    this.filter_p43tbv$_0 = value;
    this.refresh();
  }});
  FilteringObservableList.prototype.onSourceListAdd_dpg1yx$ = function (element, sourceIndex) {
    if (this.filter(element)) {
      this.addIndex_vux9f0$(this.orderedTransformedIndexOrBetween_za3lpa$(sourceIndex), sourceIndex);
    }
  };
  FilteringObservableList.prototype.onSourceListChange_vnexws$ = function (old, element, sourceIndex) {
    var oldPassed = this.indexList.contains_11rb$(sourceIndex);
    var passes = this.filter(element);
    if (oldPassed && !passes) {
      this.removeIndex_za3lpa$(this.transformedIndexOrDefault_vux9f0$(sourceIndex, -1));
    }
    if (passes && !oldPassed) {
      this.addIndex_vux9f0$(this.orderedTransformedIndexOrBetween_za3lpa$(sourceIndex), sourceIndex);
    }
  };
  FilteringObservableList.prototype.onSourceListMove_8olpll$ = function (element, oldSourceIndex, sourceIndex) {
    var tmp$;
    if ((tmp$ = this.transformedIndex_za3lpa$(sourceIndex)) != null) {
      var new_0 = this.orderedTransformedIndexOrBetween_za3lpa$(sourceIndex);
      this.moveIndex_vux9f0$(tmp$, new_0 > tmp$ ? new_0 - 1 | 0 : new_0);
    }
  };
  FilteringObservableList.prototype.onSourceListRemove_dpg1yx$ = function (element, sourceIndex) {
  };
  function FilteringObservableList_init$lambda(it) {
    return true;
  }
  FilteringObservableList.$metadata$ = {kind: Kind_CLASS, simpleName: 'FilteringObservableList', interfaces: [MutableObservableList, IndexObservableList]};
  function filtering($receiver) {
    return new FilteringObservableList($receiver);
  }
  function FlatMappingObservableList(source, mapper) {
    EnablingObservableList.call(this);
    this.source = source;
    this.mapper = mapper;
    this.boundaryIndexes = ArrayList_init_0();
    this.listenerSets = HashMap_init();
    this.overallListenerSet = new ObservableListListenerSet(FlatMappingObservableList$overallListenerSet$lambda(this), FlatMappingObservableList$overallListenerSet$lambda_0(this), FlatMappingObservableList$overallListenerSet$lambda_2(this), FlatMappingObservableList$overallListenerSet$lambda_1(this), FlatMappingObservableList$overallListenerSet$lambda_3(this));
    this.connected = false;
  }
  function IndexObservableList(source) {
    EnablingObservableList.call(this);
    this.source = source;
    this.indexList = ArrayList_init_0();
    this.onListAddListener = IndexObservableList$onListAddListener$lambda(this);
    this.onListChangeListener = IndexObservableList$onListChangeListener$lambda(this);
    this.onListMoveListener = IndexObservableList$onListMoveListener$lambda(this);
    this.onListReplaceListener = IndexObservableList$onListReplaceListener$lambda(this);
    this.onListRemoveListener = IndexObservableList$onListRemoveListener$lambda(this);
  }
  IndexObservableList.prototype.shift_vux9f0$ = function (after, by) {
    var tmp$;
    tmp$ = this.indexList;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_0;
      if (this.indexList.get_za3lpa$(i) > after) {
        tmp$_0 = this.indexList;
        tmp$_0.set_wxm5ur$(i, tmp$_0.get_za3lpa$(i) + by | 0);
      }
    }
  };
  IndexObservableList.prototype.shiftIncluding_vux9f0$ = function (after, by) {
    var tmp$;
    tmp$ = this.indexList;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_0;
      if (this.indexList.get_za3lpa$(i) >= after) {
        tmp$_0 = this.indexList;
        tmp$_0.set_wxm5ur$(i, tmp$_0.get_za3lpa$(i) + by | 0);
      }
    }
  };
  IndexObservableList.prototype.sourceIndex_za3lpa$ = function (transformedIndex) {
    return this.indexList.get_za3lpa$(transformedIndex);
  };
  IndexObservableList.prototype.transformedIndex_za3lpa$ = function (sourceIndex) {
    var $receiver = this.indexList.indexOf_11rb$(sourceIndex);
    return !($receiver === -1) ? $receiver : null;
  };
  IndexObservableList.prototype.transformedIndexOrDefault_vux9f0$ = function (sourceIndex, default_0) {
    if (default_0 === void 0)
      default_0 = -1;
    var it = this.indexList.indexOf_11rb$(sourceIndex);
    return it === -1 ? default_0 : it;
  };
  IndexObservableList.prototype.orderedTransformedIndexOrBetween_za3lpa$ = function (sourceIndex) {
    var tmp$;
    var $receiver = this.indexList;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$_0;
      var index = 0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        if (item > sourceIndex) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var $receiver_0 = indexOfFirst$result;
    return (tmp$ = !($receiver_0 === -1) ? $receiver_0 : null) != null ? tmp$ : get_lastIndex(this.indexList) + 1 | 0;
  };
  IndexObservableList.prototype.addIndex_vux9f0$ = function (transformedIndex, sourceIndex) {
    this.indexList.add_wxm5ur$(transformedIndex, sourceIndex);
    invokeAll_1(this.onListAdd, this.get_za3lpa$(transformedIndex), transformedIndex);
    this.onListUpdate.update();
  };
  IndexObservableList.prototype.removeIndex_za3lpa$ = function (transformedIndex) {
    var old = this.get_za3lpa$(transformedIndex);
    this.indexList.removeAt_za3lpa$(transformedIndex);
    invokeAll_1(this.onListRemove, old, transformedIndex);
    this.onListUpdate.update();
  };
  IndexObservableList.prototype.moveIndex_vux9f0$ = function (oldTransformedIndex, transformedIndex) {
    this.indexList.add_wxm5ur$(transformedIndex, this.indexList.removeAt_za3lpa$(oldTransformedIndex));
    invokeAll_2(this.onListMove, this.get_za3lpa$(transformedIndex), oldTransformedIndex, transformedIndex);
    this.onListUpdate.update();
  };
  IndexObservableList.prototype.resetIndex_pqoyrt$ = function (newIndicies) {
    this.indexList.clear();
    this.indexList.addAll_brywnq$(newIndicies);
    invokeAll_0(this.onListReplace, this);
    this.onListUpdate.update();
  };
  IndexObservableList.prototype.enable = function () {
    this.source.onListAdd.add_11rb$(this.onListAddListener);
    this.source.onListChange.add_11rb$(this.onListChangeListener);
    this.source.onListMove.add_11rb$(this.onListMoveListener);
    this.source.onListReplace.add_11rb$(this.onListReplaceListener);
    this.source.onListRemove.add_11rb$(this.onListRemoveListener);
  };
  IndexObservableList.prototype.disable = function () {
    this.source.onListAdd.remove_11rb$(this.onListAddListener);
    this.source.onListChange.remove_11rb$(this.onListChangeListener);
    this.source.onListMove.remove_11rb$(this.onListMoveListener);
    this.source.onListReplace.remove_11rb$(this.onListReplaceListener);
    this.source.onListRemove.remove_11rb$(this.onListRemoveListener);
  };
  IndexObservableList.prototype.isEmpty = function () {
    this.refreshIfNotActive();
    return this.indexList.isEmpty();
  };
  IndexObservableList.prototype.contains_11rb$ = function (element) {
    this.refreshIfNotActive();
    return this.indexList.contains_11rb$(this.source.indexOf_11rb$(element));
  };
  IndexObservableList.prototype.containsAll_brywnq$ = function (elements) {
    this.refreshIfNotActive();
    var tmp$ = this.indexList;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.source.indexOf_11rb$(item));
    }
    return tmp$.containsAll_brywnq$(destination);
  };
  function IndexObservableList$listIterator$ObjectLiteral(this$IndexObservableList, closure$index) {
    this.this$IndexObservableList = this$IndexObservableList;
    this$IndexObservableList.refreshIfNotActive();
    this.inner = this$IndexObservableList.indexList.listIterator_za3lpa$(closure$index);
  }
  IndexObservableList$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.inner.hasPrevious();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.inner.nextIndex();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.previous = function () {
    return this.this$IndexObservableList.source.get_za3lpa$(this.inner.previous());
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.inner.previousIndex();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return this.inner.hasNext();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.next = function () {
    return this.this$IndexObservableList.source.get_za3lpa$(this.inner.next());
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init_0();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.remove = function () {
    this.inner.remove();
  };
  IndexObservableList$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    throw UnsupportedOperationException_init_0();
  };
  IndexObservableList$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  IndexObservableList.prototype.listIterator_za3lpa$ = function (index) {
    return new IndexObservableList$listIterator$ObjectLiteral(this, index);
  };
  IndexObservableList.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  IndexObservableList.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  IndexObservableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    throw UnsupportedOperationException_init_0();
  };
  IndexObservableList.prototype.get_za3lpa$ = function (index) {
    this.refreshIfNotActive();
    return this.source.get_za3lpa$(this.sourceIndex_za3lpa$(index));
  };
  IndexObservableList.prototype.indexOf_11rb$ = function (element) {
    this.refreshIfNotActive();
    return this.indexList.indexOf_11rb$(this.source.indexOf_11rb$(element));
  };
  IndexObservableList.prototype.lastIndexOf_11rb$ = function (element) {
    this.refreshIfNotActive();
    return this.indexList.lastIndexOf_11rb$(this.source.lastIndexOf_11rb$(element));
  };
  Object.defineProperty(IndexObservableList.prototype, 'size', {get: function () {
    this.refreshIfNotActive();
    return this.indexList.size;
  }});
  function IndexObservableList$onListAddListener$lambda(this$IndexObservableList) {
    return function (element, index) {
      this$IndexObservableList.shiftIncluding_vux9f0$(index, 1);
      this$IndexObservableList.onSourceListAdd_dpg1yx$(element, index);
      return Unit;
    };
  }
  function IndexObservableList$onListChangeListener$lambda(this$IndexObservableList) {
    return function (old, element, index) {
      var tmp$;
      if ((tmp$ = this$IndexObservableList.transformedIndex_za3lpa$(index)) != null) {
        var this$IndexObservableList_0 = this$IndexObservableList;
        invokeAll_2(this$IndexObservableList_0.onListChange, old, element, tmp$);
        this$IndexObservableList_0.onListUpdate.update();
      }
      this$IndexObservableList.onSourceListChange_vnexws$(old, element, index);
      return Unit;
    };
  }
  function IndexObservableList$onListMoveListener$lambda(this$IndexObservableList) {
    return function (element, oldIndex, index) {
      var oldTransformedIndex = this$IndexObservableList.transformedIndex_za3lpa$(oldIndex);
      this$IndexObservableList.shift_vux9f0$(oldIndex, -1);
      this$IndexObservableList.shiftIncluding_vux9f0$(index, 1);
      if (oldTransformedIndex != null) {
        this$IndexObservableList.indexList.set_wxm5ur$(oldTransformedIndex, index);
      }
      this$IndexObservableList.onSourceListMove_8olpll$(element, oldIndex, index);
      return Unit;
    };
  }
  function IndexObservableList$onListReplaceListener$lambda(this$IndexObservableList) {
    return function (it) {
      this$IndexObservableList.refresh();
      return Unit;
    };
  }
  function IndexObservableList$onListRemoveListener$lambda(this$IndexObservableList) {
    return function (element, index) {
      var transformed = this$IndexObservableList.transformedIndex_za3lpa$(index);
      if (transformed != null) {
        this$IndexObservableList.indexList.removeAt_za3lpa$(transformed);
      }
      this$IndexObservableList.shift_vux9f0$(index, -1);
      if (transformed != null) {
        invokeAll_1(this$IndexObservableList.onListRemove, element, transformed);
        this$IndexObservableList.onListUpdate.update();
      }
      this$IndexObservableList.onSourceListRemove_dpg1yx$(element, index);
      return Unit;
    };
  }
  IndexObservableList.$metadata$ = {kind: Kind_CLASS, simpleName: 'IndexObservableList', interfaces: [EnablingObservableList, ObservableList, Collection]};
  function IndexObservableProperty(list, watchIndex) {
    if (watchIndex === void 0)
      watchIndex = 0;
    EnablingMutableCollection.call(this);
    this.list = list;
    this.watchIndex = watchIndex;
    this.onListAdd = IndexObservableProperty$onListAdd$lambda(this);
    this.onListRemove = IndexObservableProperty$onListRemove$lambda(this);
    this.onListMove = IndexObservableProperty$onListMove$lambda(this);
    this.onListChange = IndexObservableProperty$onListChange$lambda(this);
    this.onListReplace = IndexObservableProperty$onListReplace$lambda(this);
  }
  function lastOrNullObservable($receiver) {
    return new LastObservableProperty($receiver);
  }
  function LastObservableProperty(list) {
    EnablingMutableCollection.call(this);
    this.list = list;
    this.onListAdd = LastObservableProperty$onListAdd$lambda(this);
    this.onListRemove = LastObservableProperty$onListRemove$lambda(this);
    this.onListMove = LastObservableProperty$onListMove$lambda(this);
    this.onListChange = LastObservableProperty$onListChange$lambda(this);
    this.onListReplace = LastObservableProperty$onListReplace$lambda(this);
  }
  Object.defineProperty(LastObservableProperty.prototype, 'value', {get: function () {
    return lastOrNull(this.list);
  }});
  LastObservableProperty.prototype.enable = function () {
    this.list.onListAdd.add_11rb$(this.onListAdd);
    this.list.onListRemove.add_11rb$(this.onListRemove);
    this.list.onListMove.add_11rb$(this.onListMove);
    this.list.onListChange.add_11rb$(this.onListChange);
    this.list.onListReplace.add_11rb$(this.onListReplace);
  };
  LastObservableProperty.prototype.disable = function () {
    this.list.onListAdd.remove_11rb$(this.onListAdd);
    this.list.onListRemove.remove_11rb$(this.onListRemove);
    this.list.onListMove.remove_11rb$(this.onListMove);
    this.list.onListChange.remove_11rb$(this.onListChange);
    this.list.onListReplace.remove_11rb$(this.onListReplace);
  };
  function LastObservableProperty$onListAdd$lambda(this$LastObservableProperty) {
    return function (element, index) {
      if (index === get_lastIndex(this$LastObservableProperty.list)) {
        update(this$LastObservableProperty);
      }
      return Unit;
    };
  }
  function LastObservableProperty$onListRemove$lambda(this$LastObservableProperty) {
    return function (element, index) {
      if (index >= get_lastIndex(this$LastObservableProperty.list)) {
        update(this$LastObservableProperty);
      }
      return Unit;
    };
  }
  function LastObservableProperty$onListMove$lambda(this$LastObservableProperty) {
    return function (element, oldIndex, newIndex) {
      if (newIndex === get_lastIndex(this$LastObservableProperty.list)) {
        update(this$LastObservableProperty);
      }
      if (oldIndex === get_lastIndex(this$LastObservableProperty.list)) {
        update(this$LastObservableProperty);
      }
      return Unit;
    };
  }
  function LastObservableProperty$onListChange$lambda(this$LastObservableProperty) {
    return function (oldElement, element, index) {
      if (index === get_lastIndex(this$LastObservableProperty.list)) {
        update(this$LastObservableProperty);
      }
      return Unit;
    };
  }
  function LastObservableProperty$onListReplace$lambda(this$LastObservableProperty) {
    return function (list) {
      update(this$LastObservableProperty);
      return Unit;
    };
  }
  LastObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'LastObservableProperty', interfaces: [EnablingMutableCollection, ObservableProperty]};
  function MappingMutableObservableList(mutableSource, transform, reverse) {
    MappingObservableList.call(this, mutableSource, transform, reverse);
    this.mutableSource = mutableSource;
  }
  function MappingObservableList(source, transform, reverse) {
    this.source = source;
    this.transform = transform;
    this.reverse = reverse;
    this.listenerMapper = MappingObservableList$listenerMapper$lambda(this);
    this.onListAdd_wnjygf$_0 = mappingWriteOnly(this.source.onListAdd, this.listenerMapper);
    this.onListRemove_1ntla8$_0 = mappingWriteOnly(this.source.onListRemove, this.listenerMapper);
    this.onListMove_i1euvn$_0 = mappingWriteOnly(this.source.onListMove, MappingObservableList$onListMove$lambda(this));
    this.onListChange_46a46k$_0 = mappingWriteOnly(this.source.onListChange, MappingObservableList$onListChange$lambda(this));
    this.onListUpdate_k9swbp$_0 = transform_0(this.source.onListUpdate, MappingObservableList$onListUpdate$lambda(this));
    this.onListReplace_i5inwk$_0 = mappingWriteOnly(this.source.onListReplace, MappingObservableList$onListReplace$lambda(this));
  }
  Object.defineProperty(MappingObservableList.prototype, 'size', {get: function () {
    return this.source.size;
  }});
  MappingObservableList.prototype.contains_11rb$ = function (element) {
    return this.source.contains_11rb$(this.reverse(element));
  };
  MappingObservableList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$ = this.source;
    var transform = this.reverse;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(transform(item));
    }
    return tmp$.containsAll_brywnq$(destination);
  };
  MappingObservableList.prototype.get_za3lpa$ = function (index) {
    return this.transform(this.source.get_za3lpa$(index));
  };
  MappingObservableList.prototype.indexOf_11rb$ = function (element) {
    return this.source.indexOf_11rb$(this.reverse(element));
  };
  MappingObservableList.prototype.isEmpty = function () {
    return this.source.isEmpty();
  };
  MappingObservableList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.source.lastIndexOf_11rb$(this.reverse(element));
  };
  MappingObservableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    var $receiver = this.source.subList_vux9f0$(fromIndex, toIndex);
    var transform = this.transform;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    return toMutableList(destination);
  };
  MappingObservableList.prototype.listIterator = function () {
    return mapping_9(this.source.listIterator(), this.transform);
  };
  MappingObservableList.prototype.listIterator_za3lpa$ = function (index) {
    return mapping_9(this.source.listIterator_za3lpa$(index), this.transform);
  };
  MappingObservableList.prototype.iterator = function () {
    return mapping_8(this.source.iterator(), this.transform);
  };
  Object.defineProperty(MappingObservableList.prototype, 'onListAdd', {get: function () {
    return this.onListAdd_wnjygf$_0;
  }});
  Object.defineProperty(MappingObservableList.prototype, 'onListRemove', {get: function () {
    return this.onListRemove_1ntla8$_0;
  }});
  Object.defineProperty(MappingObservableList.prototype, 'onListMove', {get: function () {
    return this.onListMove_i1euvn$_0;
  }});
  Object.defineProperty(MappingObservableList.prototype, 'onListChange', {get: function () {
    return this.onListChange_46a46k$_0;
  }});
  Object.defineProperty(MappingObservableList.prototype, 'onListUpdate', {get: function () {
    return this.onListUpdate_k9swbp$_0;
  }});
  Object.defineProperty(MappingObservableList.prototype, 'onListReplace', {get: function () {
    return this.onListReplace_i5inwk$_0;
  }});
  function MutableObservableList() {
  }
  MutableObservableList.prototype.change_xwzc9q$ = function (old, new_0) {
    this.set_wxm5ur$(this.indexOf_11rb$(old), new_0);
  };
  MutableObservableList.prototype.updateAt_za3lpa$ = function (index) {
    this.set_wxm5ur$(index, this.get_za3lpa$(index));
  };
  MutableObservableList.prototype.update_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index !== -1)
      this.updateAt_za3lpa$(index);
    return index !== -1;
  };
  MutableObservableList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableObservableList', interfaces: [MutableObservableCollection, ObservableList, MutableList]};
  function MutableObservableListFromProperty(property) {
    EnablingObservableList.call(this);
    this.property = property;
    this.collection = new MutableListFromProperty(this.property);
    this.updateFromUs = false;
    this.listener = MutableObservableListFromProperty$listener$lambda(this);
  }
  MutableObservableListFromProperty.prototype.set_wxm5ur$ = function (index, element) {
    var old = this.collection.get_za3lpa$(index);
    this.updateFromUs = true;
    this.collection.set_wxm5ur$(index, element);
    invokeAll_2(this.onListChange, old, element, index);
    this.onListUpdate.update();
    return element;
  };
  MutableObservableListFromProperty.prototype.add_11rb$ = function (element) {
    this.updateFromUs = true;
    var result = this.collection.add_11rb$(element);
    var index = this.collection.size - 1 | 0;
    if (result) {
      invokeAll_1(this.onListAdd, element, index);
      this.onListUpdate.update();
    }
    return result;
  };
  MutableObservableListFromProperty.prototype.add_wxm5ur$ = function (index, element) {
    this.updateFromUs = true;
    this.collection.add_wxm5ur$(index, element);
    invokeAll_1(this.onListAdd, element, index);
    this.onListUpdate.update();
  };
  MutableObservableListFromProperty.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var index = this.collection.size;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.updateFromUs = true;
      this.collection.add_11rb$(e);
      invokeAll_1(this.onListAdd, e, index);
      index = index + 1 | 0;
    }
    this.onListUpdate.update();
    return true;
  };
  MutableObservableListFromProperty.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$;
    var currentIndex = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.updateFromUs = true;
      this.collection.add_wxm5ur$(currentIndex, e);
      invokeAll_1(this.onListAdd, e, currentIndex);
      currentIndex = currentIndex + 1 | 0;
    }
    this.onListUpdate.update();
    return true;
  };
  MutableObservableListFromProperty.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.updateFromUs = true;
    this.collection.removeAt_za3lpa$(index);
    invokeAll_1(this.onListRemove, element, index);
    this.onListUpdate.update();
    return true;
  };
  MutableObservableListFromProperty.prototype.removeAt_za3lpa$ = function (index) {
    this.updateFromUs = true;
    var element = this.collection.removeAt_za3lpa$(index);
    invokeAll_1(this.onListRemove, element, index);
    this.onListUpdate.update();
    return element;
  };
  MutableObservableListFromProperty.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var index = this.indexOf_11rb$(element);
      if (index === -1)
        return false;
      this.updateFromUs = true;
      this.collection.removeAt_za3lpa$(index);
      invokeAll_1(this.onListRemove, element, index);
    }
    this.onListUpdate.update();
    return true;
  };
  MutableObservableListFromProperty.prototype.retainAll_brywnq$ = function (elements) {
    throw UnsupportedOperationException_init_0();
  };
  MutableObservableListFromProperty.prototype.clear = function () {
    this.updateFromUs = true;
    this.collection.clear();
    invokeAll_0(this.onListReplace, this);
    this.onListUpdate.update();
  };
  MutableObservableListFromProperty.prototype.isEmpty = function () {
    return this.collection.isEmpty();
  };
  MutableObservableListFromProperty.prototype.contains_11rb$ = function (element) {
    return this.collection.contains_11rb$(element);
  };
  MutableObservableListFromProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.collection.containsAll_brywnq$(elements);
  };
  MutableObservableListFromProperty.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function MutableObservableListFromProperty$listIterator$ObjectLiteral(this$MutableObservableListFromProperty, closure$index) {
    this.this$MutableObservableListFromProperty = this$MutableObservableListFromProperty;
    this.inner = this$MutableObservableListFromProperty.collection.listIterator_za3lpa$(closure$index);
    this.cursor = closure$index;
    this.lastIndex = -1;
    this.lastElement = null;
  }
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    this.this$MutableObservableListFromProperty.updateFromUs = true;
    this.inner.add_11rb$(element);
    invokeAll_1(this.this$MutableObservableListFromProperty.onListRemove, ensureNotNull(this.lastElement), this.cursor);
    this.cursor = this.cursor + 1 | 0;
    this.lastIndex = -1;
    this.this$MutableObservableListFromProperty.onListUpdate.update();
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.inner.hasPrevious();
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.cursor;
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.previous = function () {
    var element = this.inner.previous();
    this.lastElement = element;
    this.lastIndex = this.cursor;
    this.cursor = this.cursor - 1 | 0;
    return element;
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    this.this$MutableObservableListFromProperty.updateFromUs = true;
    this.inner.set_11rb$(element);
    invokeAll_2(this.this$MutableObservableListFromProperty.onListChange, ensureNotNull(this.lastElement), element, this.lastIndex);
    this.this$MutableObservableListFromProperty.onListUpdate.update();
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return this.inner.hasNext();
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.next = function () {
    var element = this.inner.next();
    this.lastElement = element;
    this.lastIndex = this.cursor;
    this.cursor = this.cursor + 1 | 0;
    return element;
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.prototype.remove = function () {
    if (this.lastIndex === -1)
      throw IllegalStateException_init_0();
    this.this$MutableObservableListFromProperty.updateFromUs = true;
    this.inner.remove();
    invokeAll_1(this.this$MutableObservableListFromProperty.onListRemove, ensureNotNull(this.lastElement), this.lastIndex);
    this.this$MutableObservableListFromProperty.onListUpdate.update();
    this.cursor = this.lastIndex;
    this.lastIndex = -1;
  };
  MutableObservableListFromProperty$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  MutableObservableListFromProperty.prototype.listIterator_za3lpa$ = function (index) {
    return new MutableObservableListFromProperty$listIterator$ObjectLiteral(this, index);
  };
  MutableObservableListFromProperty.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  MutableObservableListFromProperty.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.collection.subList_vux9f0$(fromIndex, toIndex);
  };
  MutableObservableListFromProperty.prototype.get_za3lpa$ = function (index) {
    return this.collection.get_za3lpa$(index);
  };
  MutableObservableListFromProperty.prototype.indexOf_11rb$ = function (element) {
    return this.collection.indexOf_11rb$(element);
  };
  MutableObservableListFromProperty.prototype.lastIndexOf_11rb$ = function (element) {
    return this.collection.lastIndexOf_11rb$(element);
  };
  Object.defineProperty(MutableObservableListFromProperty.prototype, 'size', {get: function () {
    return this.collection.size;
  }});
  MutableObservableListFromProperty.prototype.replace_brywnq$ = function (collection) {
    this.updateFromUs = true;
    this.collection.clear();
    this.updateFromUs = true;
    this.collection.addAll_brywnq$(collection);
    invokeAll_0(this.onListReplace, this);
    this.onListUpdate.update();
  };
  MutableObservableListFromProperty.prototype.move_vux9f0$ = function (fromIndex, toIndex) {
    this.updateFromUs = true;
    var item = this.collection.removeAt_za3lpa$(fromIndex);
    this.updateFromUs = true;
    this.collection.add_wxm5ur$(toIndex, item);
    invokeAll_2(this.onListMove, item, fromIndex, toIndex);
    this.onListUpdate.update();
  };
  MutableObservableListFromProperty.prototype.enable = function () {
    this.property.add_11rb$(this.listener);
  };
  MutableObservableListFromProperty.prototype.disable = function () {
    this.property.remove_11rb$(this.listener);
  };
  MutableObservableListFromProperty.prototype.refresh = function () {
    this.listener(this.property.value);
  };
  function MutableObservableListFromProperty$listener$lambda(this$MutableObservableListFromProperty) {
    return function (list) {
      if (this$MutableObservableListFromProperty.updateFromUs) {
        this$MutableObservableListFromProperty.updateFromUs = false;
        return;
      }
      invokeAll_0(this$MutableObservableListFromProperty.onListReplace, this$MutableObservableListFromProperty);
      this$MutableObservableListFromProperty.onListUpdate.update();
      return Unit;
    };
  }
  MutableObservableListFromProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableObservableListFromProperty', interfaces: [MutableObservableList, EnablingObservableList]};
  function ObservableList() {
  }
  function ObservableList$get_ObservableList$onCollectionAdd$lambda$lambda(closure$callback) {
    return function (item, index) {
      closure$callback(item);
      return Unit;
    };
  }
  function ObservableList$get_ObservableList$onCollectionAdd$lambda(callback) {
    return ObservableList$get_ObservableList$onCollectionAdd$lambda$lambda(callback);
  }
  Object.defineProperty(ObservableList.prototype, 'onCollectionAdd', {get: function () {
    return mappingWriteOnly(this.onListAdd, ObservableList$get_ObservableList$onCollectionAdd$lambda);
  }});
  function ObservableList$get_ObservableList$onCollectionChange$lambda$lambda(closure$callback) {
    return function (old, item, index) {
      closure$callback(old, item);
      return Unit;
    };
  }
  function ObservableList$get_ObservableList$onCollectionChange$lambda(callback) {
    return ObservableList$get_ObservableList$onCollectionChange$lambda$lambda(callback);
  }
  Object.defineProperty(ObservableList.prototype, 'onCollectionChange', {get: function () {
    return mappingWriteOnly(this.onListChange, ObservableList$get_ObservableList$onCollectionChange$lambda);
  }});
  function ObservableList$get_ObservableList$onCollectionRemove$lambda$lambda(closure$callback) {
    return function (item, index) {
      closure$callback(item);
      return Unit;
    };
  }
  function ObservableList$get_ObservableList$onCollectionRemove$lambda(callback) {
    return ObservableList$get_ObservableList$onCollectionRemove$lambda$lambda(callback);
  }
  Object.defineProperty(ObservableList.prototype, 'onCollectionRemove', {get: function () {
    return mappingWriteOnly(this.onListRemove, ObservableList$get_ObservableList$onCollectionRemove$lambda);
  }});
  function ObservableList$get_ObservableList$onCollectionUpdate$lambda(this$ObservableList) {
    return function (it) {
      return this$ObservableList;
    };
  }
  Object.defineProperty(ObservableList.prototype, 'onCollectionUpdate', {get: function () {
    return transform_0(this.onListUpdate, ObservableList$get_ObservableList$onCollectionUpdate$lambda(this));
  }});
  function ObservableList$get_ObservableList$onCollectionReplace$lambda$lambda(closure$callback, this$ObservableList) {
    return function (list) {
      closure$callback(this$ObservableList);
      return Unit;
    };
  }
  function ObservableList$get_ObservableList$onCollectionReplace$lambda(this$ObservableList) {
    return function (callback) {
      return ObservableList$get_ObservableList$onCollectionReplace$lambda$lambda(callback, this$ObservableList);
    };
  }
  Object.defineProperty(ObservableList.prototype, 'onCollectionReplace', {get: function () {
    return mappingWriteOnly(this.onListReplace, ObservableList$get_ObservableList$onCollectionReplace$lambda(this));
  }});
  ObservableList.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ObservableList', interfaces: [ObservableCollection, List]};
  function ObservableListAsMutable(source) {
    this.source = source;
  }
  function ObservableListFromProperty(property) {
    EnablingObservableList.call(this);
    this.property = property;
    this.listener = ObservableListFromProperty$listener$lambda(this);
  }
  Object.defineProperty(ObservableListFromProperty.prototype, 'size', {get: function () {
    return this.property.value.size;
  }});
  ObservableListFromProperty.prototype.contains_11rb$ = function (element) {
    return this.property.value.contains_11rb$(element);
  };
  ObservableListFromProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.property.value.containsAll_brywnq$(elements);
  };
  ObservableListFromProperty.prototype.get_za3lpa$ = function (index) {
    return this.property.value.get_za3lpa$(index);
  };
  ObservableListFromProperty.prototype.indexOf_11rb$ = function (element) {
    return this.property.value.indexOf_11rb$(element);
  };
  ObservableListFromProperty.prototype.isEmpty = function () {
    return this.property.value.isEmpty();
  };
  ObservableListFromProperty.prototype.iterator = function () {
    return this.property.value.iterator();
  };
  ObservableListFromProperty.prototype.lastIndexOf_11rb$ = function (element) {
    return this.property.value.lastIndexOf_11rb$(element);
  };
  ObservableListFromProperty.prototype.listIterator = function () {
    return this.property.value.listIterator();
  };
  ObservableListFromProperty.prototype.listIterator_za3lpa$ = function (index) {
    return this.property.value.listIterator_za3lpa$(index);
  };
  ObservableListFromProperty.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.property.value.subList_vux9f0$(fromIndex, toIndex);
  };
  ObservableListFromProperty.prototype.enable = function () {
    this.property.add_11rb$(this.listener);
  };
  ObservableListFromProperty.prototype.disable = function () {
    this.property.remove_11rb$(this.listener);
  };
  ObservableListFromProperty.prototype.refresh = function () {
    this.listener(this.property.value);
  };
  function ObservableListFromProperty$listener$lambda(this$ObservableListFromProperty) {
    return function (list) {
      invokeAll_0(this$ObservableListFromProperty.onListReplace, this$ObservableListFromProperty);
      this$ObservableListFromProperty.onListUpdate.update();
      return Unit;
    };
  }
  ObservableListFromProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'ObservableListFromProperty', interfaces: [EnablingObservableList]};
  function WrapperObservableList(collection) {
    if (collection === void 0) {
      collection = ArrayList_init_0();
    }
    this.collection = collection;
    this.onListAdd_fs6l12$_0 = HashSet_init();
    this.onListChange_2bq3jb$_0 = HashSet_init();
    this.onListMove_84x8bc$_0 = HashSet_init();
    this.onListUpdate_if8vog$_0 = new ReferenceObservableProperty(WrapperObservableList$onListUpdate$lambda(this), WrapperObservableList$onListUpdate$lambda_0(this));
    this.onListReplace_vve5ux$_0 = HashSet_init();
    this.onListRemove_3idlxh$_0 = HashSet_init();
  }
  Object.defineProperty(WrapperObservableList.prototype, 'onListAdd', {get: function () {
    return this.onListAdd_fs6l12$_0;
  }});
  Object.defineProperty(WrapperObservableList.prototype, 'onListChange', {get: function () {
    return this.onListChange_2bq3jb$_0;
  }});
  Object.defineProperty(WrapperObservableList.prototype, 'onListMove', {get: function () {
    return this.onListMove_84x8bc$_0;
  }});
  Object.defineProperty(WrapperObservableList.prototype, 'onListUpdate', {get: function () {
    return this.onListUpdate_if8vog$_0;
  }});
  Object.defineProperty(WrapperObservableList.prototype, 'onListReplace', {get: function () {
    return this.onListReplace_vve5ux$_0;
  }});
  Object.defineProperty(WrapperObservableList.prototype, 'onListRemove', {get: function () {
    return this.onListRemove_3idlxh$_0;
  }});
  WrapperObservableList.prototype.set_wxm5ur$ = function (index, element) {
    var old = this.collection.get_za3lpa$(index);
    this.collection.set_wxm5ur$(index, element);
    invokeAll_2(this.onListChange, old, element, index);
    update(this.onListUpdate);
    return element;
  };
  WrapperObservableList.prototype.add_11rb$ = function (element) {
    var result = this.collection.add_11rb$(element);
    var index = this.collection.size - 1 | 0;
    if (result) {
      invokeAll_1(this.onListAdd, element, index);
      update(this.onListUpdate);
    }
    return result;
  };
  WrapperObservableList.prototype.add_wxm5ur$ = function (index, element) {
    this.collection.add_wxm5ur$(index, element);
    invokeAll_1(this.onListAdd, element, index);
    update(this.onListUpdate);
  };
  WrapperObservableList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var index = this.collection.size;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.collection.add_11rb$(e);
      invokeAll_1(this.onListAdd, e, index);
      index = index + 1 | 0;
    }
    update(this.onListUpdate);
    return true;
  };
  WrapperObservableList.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$;
    var currentIndex = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.collection.add_wxm5ur$(currentIndex, e);
      invokeAll_1(this.onListAdd, e, currentIndex);
      currentIndex = currentIndex + 1 | 0;
    }
    update(this.onListUpdate);
    return true;
  };
  WrapperObservableList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.collection.removeAt_za3lpa$(index);
    invokeAll_1(this.onListRemove, element, index);
    update(this.onListUpdate);
    return true;
  };
  WrapperObservableList.prototype.removeAt_za3lpa$ = function (index) {
    var element = this.collection.removeAt_za3lpa$(index);
    invokeAll_1(this.onListRemove, element, index);
    update(this.onListUpdate);
    return element;
  };
  WrapperObservableList.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var index = this.indexOf_11rb$(element);
      if (index === -1)
        return false;
      this.collection.removeAt_za3lpa$(index);
      invokeAll_1(this.onListRemove, element, index);
    }
    update(this.onListUpdate);
    return true;
  };
  WrapperObservableList.prototype.retainAll_brywnq$ = function (elements) {
    throw UnsupportedOperationException_init_0();
  };
  WrapperObservableList.prototype.clear = function () {
    this.collection.clear();
    invokeAll_0(this.onListReplace, this);
    update(this.onListUpdate);
  };
  WrapperObservableList.prototype.isEmpty = function () {
    return this.collection.isEmpty();
  };
  WrapperObservableList.prototype.contains_11rb$ = function (element) {
    return this.collection.contains_11rb$(element);
  };
  WrapperObservableList.prototype.containsAll_brywnq$ = function (elements) {
    return this.collection.containsAll_brywnq$(elements);
  };
  WrapperObservableList.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function WrapperObservableList$listIterator$ObjectLiteral(this$WrapperObservableList, closure$index) {
    this.this$WrapperObservableList = this$WrapperObservableList;
    this.inner = this$WrapperObservableList.collection.listIterator_za3lpa$(closure$index);
    this.cursor = closure$index;
    this.lastIndex = -1;
    this.lastElement = null;
  }
  WrapperObservableList$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    this.inner.add_11rb$(element);
    invokeAll_1(this.this$WrapperObservableList.onListRemove, ensureNotNull(this.lastElement), this.cursor);
    this.cursor = this.cursor + 1 | 0;
    this.lastIndex = -1;
    update(this.this$WrapperObservableList.onListUpdate);
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.inner.hasPrevious();
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.cursor;
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.previous = function () {
    var element = this.inner.previous();
    this.lastElement = element;
    this.lastIndex = this.cursor;
    this.cursor = this.cursor - 1 | 0;
    return element;
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    this.inner.set_11rb$(element);
    invokeAll_2(this.this$WrapperObservableList.onListChange, ensureNotNull(this.lastElement), element, this.lastIndex);
    update(this.this$WrapperObservableList.onListUpdate);
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return this.inner.hasNext();
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.next = function () {
    var element = this.inner.next();
    this.lastElement = element;
    this.lastIndex = this.cursor;
    this.cursor = this.cursor + 1 | 0;
    return element;
  };
  WrapperObservableList$listIterator$ObjectLiteral.prototype.remove = function () {
    if (this.lastIndex === -1)
      throw IllegalStateException_init_0();
    this.inner.remove();
    invokeAll_1(this.this$WrapperObservableList.onListRemove, ensureNotNull(this.lastElement), this.lastIndex);
    update(this.this$WrapperObservableList.onListUpdate);
    this.cursor = this.lastIndex;
    this.lastIndex = -1;
  };
  WrapperObservableList$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  WrapperObservableList.prototype.listIterator_za3lpa$ = function (index) {
    return new WrapperObservableList$listIterator$ObjectLiteral(this, index);
  };
  WrapperObservableList.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  WrapperObservableList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.collection.subList_vux9f0$(fromIndex, toIndex);
  };
  WrapperObservableList.prototype.get_za3lpa$ = function (index) {
    return this.collection.get_za3lpa$(index);
  };
  WrapperObservableList.prototype.indexOf_11rb$ = function (element) {
    return this.collection.indexOf_11rb$(element);
  };
  WrapperObservableList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.collection.lastIndexOf_11rb$(element);
  };
  Object.defineProperty(WrapperObservableList.prototype, 'size', {get: function () {
    return this.collection.size;
  }});
  WrapperObservableList.prototype.replace_brywnq$ = function (collection) {
    this.collection.clear();
    this.collection.addAll_brywnq$(collection);
    invokeAll_0(this.onListReplace, this);
    update(this.onListUpdate);
  };
  WrapperObservableList.prototype.move_vux9f0$ = function (fromIndex, toIndex) {
    var item = this.collection.removeAt_za3lpa$(fromIndex);
    this.collection.add_wxm5ur$(toIndex, item);
    invokeAll_2(this.onListMove, item, fromIndex, toIndex);
    update(this.onListUpdate);
  };
  function WrapperObservableList$onListUpdate$lambda(this$WrapperObservableList) {
    return function () {
      return this$WrapperObservableList;
    };
  }
  function WrapperObservableList$onListUpdate$lambda_0(this$WrapperObservableList) {
    return function (it) {
      this$WrapperObservableList.replace_brywnq$(it);
      return Unit;
    };
  }
  WrapperObservableList.$metadata$ = {kind: Kind_CLASS, simpleName: 'WrapperObservableList', interfaces: [MutableObservableList]};
  function GroupingObservableMap(source, getKey) {
    EnablingObject.call(this);
    this.source = source;
    this.getKey = getKey;
    this.onMapPut_ahw8fs$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onMapRemove_j6syzr$_0 = new EnablingObject$SubEnablingCollection(this);
    this.onMapUpdate_twoldg$_0 = new GroupingObservableMap$OnUpdateClass(this);
    this.onMapReplace_p8xmpp$_0 = new EnablingObject$SubEnablingCollection(this);
    this.entries_5425my$_0 = new EntryObservableSet(this, GroupingObservableMap$entries$lambda(this));
    this.keys_6tcdy2$_0 = new KeyObservableSet(this, GroupingObservableMap$keys$lambda(this));
    this.values_2tk7i0$_0 = new ValueObservableSet(this, GroupingObservableMap$values$lambda(this));
    this.underlying = HashMap_init();
    this.onCollectionAddListener = GroupingObservableMap$onCollectionAddListener$lambda(this);
    this.onCollectionChangeListener = GroupingObservableMap$onCollectionChangeListener$lambda(this);
    this.onCollectionRemoveListener = GroupingObservableMap$onCollectionRemoveListener$lambda(this);
    this.onCollectionReplaceListener = GroupingObservableMap$onCollectionReplaceListener$lambda;
  }
  function GroupingObservableMap$OnUpdateClass($outer) {
    this.$outer = $outer;
    this.$delegate_3gf640$_0 = new EnablingObject$SubEnablingCollection(this.$outer);
  }
  function MutableEntryObservableSet(parent, nonObservableEntryIterator) {
    this.parent = parent;
    this.nonObservableEntryIterator = nonObservableEntryIterator;
    this.onCollectionAdd_kb59ix$_0 = mappingWriteOnly(this.parent.onMapPut, MutableEntryObservableSet$onCollectionAdd$lambda(this));
    this.onCollectionChange_xsh9sa$_0 = mappingWriteOnly(this.parent.onMapPut, MutableEntryObservableSet$onCollectionChange$lambda(this));
    this.onCollectionRemove_vej2q2$_0 = mappingWriteOnly(this.parent.onMapRemove, MutableEntryObservableSet$onCollectionRemove$lambda(this));
    this.onCollectionUpdate_hoyhn5$_0 = transform_0(this.parent.onMapUpdate, MutableEntryObservableSet$onCollectionUpdate$lambda(this));
    this.onCollectionReplace_ma9hhi$_0 = mappingWriteOnly(this.parent.onMapReplace, MutableEntryObservableSet$onCollectionReplace$lambda(this));
  }
  function MutableKeyObservableSet(parent, nonObservableEntryIterator) {
    this.parent = parent;
    this.nonObservableEntryIterator = nonObservableEntryIterator;
    this.onCollectionAdd_2imu5i$_0 = mappingWriteOnly(this.parent.onMapPut, MutableKeyObservableSet$onCollectionAdd$lambda);
    this.onCollectionChange_p23dvh$_0 = ArrayList_init_0();
    this.onCollectionRemove_uw73c9$_0 = mappingWriteOnly(this.parent.onMapRemove, MutableKeyObservableSet$onCollectionRemove$lambda);
    this.onCollectionUpdate_8yklqc$_0 = transform_0(this.parent.onMapUpdate, MutableKeyObservableSet$onCollectionUpdate$lambda(this));
    this.onCollectionReplace_zcctu5$_0 = mappingWriteOnly(this.parent.onMapReplace, MutableKeyObservableSet$onCollectionReplace$lambda(this));
  }
  function MutableValueObservableSet(parent, nonObservableEntryIterator) {
    this.parent = parent;
    this.nonObservableEntryIterator = nonObservableEntryIterator;
    this.onCollectionAdd_2y15bs$_0 = mappingWriteOnly(this.parent.onMapPut, MutableValueObservableSet$onCollectionAdd$lambda);
    this.onCollectionChange_imxdn9$_0 = mappingWriteOnly(this.parent.onMapPut, MutableValueObservableSet$onCollectionChange$lambda);
    this.onCollectionRemove_csto6h$_0 = new MutableValueObservableSet$onCollectionRemove$ObjectLiteral(this);
    this.onCollectionUpdate_yqg5se$_0 = transform_0(this.parent.onMapUpdate, MutableValueObservableSet$onCollectionUpdate$lambda(this));
    this.onCollectionReplace_uq8kjp$_0 = mappingWriteOnly(this.parent.onMapReplace, MutableValueObservableSet$onCollectionReplace$lambda(this));
  }
  function CollectionWriteOnlyMapping(source, inputMapper) {
    this.source = source;
    this.inputMapper = inputMapper;
    this.map = LinkedHashMap_init();
  }
  Object.defineProperty(CollectionWriteOnlyMapping.prototype, 'size', {get: function () {
    return this.source.size;
  }});
  CollectionWriteOnlyMapping.prototype.add_11rb$ = function (element) {
    var mapped = this.inputMapper(element);
    this.map.put_xwzc9p$(element, mapped);
    return this.source.add_11rb$(mapped);
  };
  CollectionWriteOnlyMapping.prototype.addAll_brywnq$ = function (elements) {
    var transform = this.inputMapper;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    var mapped = destination;
    putAll(this.map, zip(elements, mapped));
    return this.source.addAll_brywnq$(mapped);
  };
  CollectionWriteOnlyMapping.prototype.remove_11rb$ = function (element) {
    var $receiver = this.source;
    var element_0 = this.map.remove_11rb$(element);
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, MutableCollection) ? tmp$ : throwCCE()).remove_11rb$(element_0);
  };
  CollectionWriteOnlyMapping.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$ = this.source;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.map.get_11rb$(item));
    }
    var tmp$_1;
    return (Kotlin.isType(tmp$_1 = tmp$, MutableCollection) ? tmp$_1 : throwCCE()).removeAll_brywnq$(destination);
  };
  CollectionWriteOnlyMapping.prototype.retainAll_brywnq$ = function (elements) {
    var tmp$ = this.source;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.map.get_11rb$(item));
    }
    var tmp$_1;
    return (Kotlin.isType(tmp$_1 = tmp$, MutableCollection) ? tmp$_1 : throwCCE()).retainAll_brywnq$(destination);
  };
  CollectionWriteOnlyMapping.prototype.contains_11rb$ = function (element) {
    throw IllegalStateException_init('Not readable');
  };
  CollectionWriteOnlyMapping.prototype.containsAll_brywnq$ = function (elements) {
    throw IllegalStateException_init('Not readable');
  };
  CollectionWriteOnlyMapping.prototype.isEmpty = function () {
    throw IllegalStateException_init('Not readable');
  };
  CollectionWriteOnlyMapping.prototype.clear = function () {
    throw IllegalStateException_init('Not readable');
  };
  CollectionWriteOnlyMapping.prototype.iterator = function () {
    throw IllegalStateException_init('Not readable');
  };
  CollectionWriteOnlyMapping.$metadata$ = {kind: Kind_CLASS, simpleName: 'CollectionWriteOnlyMapping', interfaces: [MutableCollection]};
  function mappingWriteOnly($receiver, inputMapper) {
    return new CollectionWriteOnlyMapping($receiver, inputMapper);
  }
  function mapping$ObjectLiteral_0(this$mapping, closure$read) {
    this.this$mapping = this$mapping;
    this.closure$read = closure$read;
  }
  mapping$ObjectLiteral_0.prototype.hasNext = function () {
    return this.this$mapping.hasNext();
  };
  mapping$ObjectLiteral_0.prototype.next = function () {
    return this.closure$read(this.this$mapping.next());
  };
  mapping$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Iterator]};
  function mapping_8($receiver, read) {
    return new mapping$ObjectLiteral_0($receiver, read);
  }
  function mapping$ObjectLiteral_1(this$mapping, closure$read) {
    this.this$mapping = this$mapping;
    this.closure$read = closure$read;
  }
  mapping$ObjectLiteral_1.prototype.hasPrevious = function () {
    return this.this$mapping.hasPrevious();
  };
  mapping$ObjectLiteral_1.prototype.nextIndex = function () {
    return this.this$mapping.nextIndex();
  };
  mapping$ObjectLiteral_1.prototype.previous = function () {
    return this.closure$read(this.this$mapping.previous());
  };
  mapping$ObjectLiteral_1.prototype.previousIndex = function () {
    return this.this$mapping.previousIndex();
  };
  mapping$ObjectLiteral_1.prototype.hasNext = function () {
    return this.this$mapping.hasNext();
  };
  mapping$ObjectLiteral_1.prototype.next = function () {
    return this.closure$read(this.this$mapping.next());
  };
  mapping$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ListIterator]};
  function mapping_9($receiver, read) {
    return new mapping$ObjectLiteral_1($receiver, read);
  }
  function NoOpMutableCollection() {
    NoOpMutableCollection_instance = this;
  }
  NoOpMutableCollection.prototype.type_287e2$ = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this, MutableCollection) ? tmp$ : throwCCE();
  };
  Object.defineProperty(NoOpMutableCollection.prototype, 'size', {get: function () {
    return 0;
  }});
  NoOpMutableCollection.prototype.contains_11rb$ = function (element) {
    return false;
  };
  NoOpMutableCollection.prototype.containsAll_brywnq$ = function (elements) {
    return false;
  };
  NoOpMutableCollection.prototype.isEmpty = function () {
    return true;
  };
  NoOpMutableCollection.prototype.add_11rb$ = function (element) {
    return false;
  };
  NoOpMutableCollection.prototype.addAll_brywnq$ = function (elements) {
    return false;
  };
  NoOpMutableCollection.prototype.clear = function () {
  };
  function NoOpMutableCollection$iterator$ObjectLiteral() {
  }
  NoOpMutableCollection$iterator$ObjectLiteral.prototype.hasNext = function () {
    return false;
  };
  NoOpMutableCollection$iterator$ObjectLiteral.prototype.next = function () {
    throw UnsupportedOperationException_init_0();
  };
  NoOpMutableCollection$iterator$ObjectLiteral.prototype.remove = function () {
  };
  NoOpMutableCollection$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  NoOpMutableCollection.prototype.iterator = function () {
    return new NoOpMutableCollection$iterator$ObjectLiteral();
  };
  NoOpMutableCollection.prototype.remove_11rb$ = function (element) {
    return false;
  };
  NoOpMutableCollection.prototype.removeAll_brywnq$ = function (elements) {
    return false;
  };
  NoOpMutableCollection.prototype.retainAll_brywnq$ = function (elements) {
    return false;
  };
  NoOpMutableCollection.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NoOpMutableCollection', interfaces: [MutableCollection]};
  var NoOpMutableCollection_instance = null;
  function NoOpMutableCollection_getInstance() {
    if (NoOpMutableCollection_instance === null) {
      new NoOpMutableCollection();
    }
    return NoOpMutableCollection_instance;
  }
  function CombineObservableProperty2(observableA, observableB, combine) {
    EnablingMutableCollection.call(this);
    this.observableA = observableA;
    this.observableB = observableB;
    this.combine = combine;
    this.value_168ztl$_0 = this.combine(this.observableA.value, this.observableB.value);
    this.callbackA = CombineObservableProperty2$callbackA$lambda(this);
    this.callbackB = CombineObservableProperty2$callbackB$lambda(this);
  }
  Object.defineProperty(CombineObservableProperty2.prototype, 'value', {get: function () {
    return this.value_168ztl$_0;
  }, set: function (value) {
    this.value_168ztl$_0 = value;
  }});
  CombineObservableProperty2.prototype.update = function () {
    this.value = this.combine(this.observableA.value, this.observableB.value);
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this.value);
    }
  };
  CombineObservableProperty2.prototype.enable = function () {
    this.value = this.combine(this.observableA.value, this.observableB.value);
    this.observableA.add_11rb$(this.callbackA);
    this.observableB.add_11rb$(this.callbackB);
  };
  CombineObservableProperty2.prototype.disable = function () {
    this.observableA.remove_11rb$(this.callbackA);
    this.observableB.remove_11rb$(this.callbackB);
  };
  function CombineObservableProperty2$callbackA$lambda(this$CombineObservableProperty2) {
    return function (item) {
      this$CombineObservableProperty2.update();
      return Unit;
    };
  }
  function CombineObservableProperty2$callbackB$lambda(this$CombineObservableProperty2) {
    return function (item) {
      this$CombineObservableProperty2.update();
      return Unit;
    };
  }
  CombineObservableProperty2.$metadata$ = {kind: Kind_CLASS, simpleName: 'CombineObservableProperty2', interfaces: [ObservableProperty, EnablingMutableCollection]};
  function CombineObservableProperty3(observableA, observableB, observableC, combine) {
    EnablingMutableCollection.call(this);
    this.observableA = observableA;
    this.observableB = observableB;
    this.observableC = observableC;
    this.combine = combine;
    this.value_tzvgvs$_0 = this.combine(this.observableA.value, this.observableB.value, this.observableC.value);
    this.callbackA = CombineObservableProperty3$callbackA$lambda(this);
    this.callbackB = CombineObservableProperty3$callbackB$lambda(this);
    this.callbackC = CombineObservableProperty3$callbackC$lambda(this);
  }
  function CombineObservablePropertyBlind(observables, combine) {
    EnablingMutableCollection.call(this);
    this.observables = observables;
    this.combine = combine;
    this.value_iv2ryi$_0 = this.combine();
    this.callbacks = HashMap_init();
  }
  function ConstantObservableProperty(value) {
    this.value_h2uyyg$_0 = value;
    this.$delegate_ftnprz$_0 = NoOpMutableCollection_getInstance().type_287e2$();
  }
  Object.defineProperty(ConstantObservableProperty.prototype, 'value', {get: function () {
    return this.value_h2uyyg$_0;
  }});
  Object.defineProperty(ConstantObservableProperty.prototype, 'size', {get: function () {
    return this.$delegate_ftnprz$_0.size;
  }});
  ConstantObservableProperty.prototype.add_11rb$ = function (element) {
    return this.$delegate_ftnprz$_0.add_11rb$(element);
  };
  ConstantObservableProperty.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_ftnprz$_0.addAll_brywnq$(elements);
  };
  ConstantObservableProperty.prototype.clear = function () {
    return this.$delegate_ftnprz$_0.clear();
  };
  ConstantObservableProperty.prototype.contains_11rb$ = function (element) {
    return this.$delegate_ftnprz$_0.contains_11rb$(element);
  };
  ConstantObservableProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_ftnprz$_0.containsAll_brywnq$(elements);
  };
  ConstantObservableProperty.prototype.isEmpty = function () {
    return this.$delegate_ftnprz$_0.isEmpty();
  };
  ConstantObservableProperty.prototype.iterator = function () {
    return this.$delegate_ftnprz$_0.iterator();
  };
  ConstantObservableProperty.prototype.remove_11rb$ = function (element) {
    return this.$delegate_ftnprz$_0.remove_11rb$(element);
  };
  ConstantObservableProperty.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_ftnprz$_0.removeAll_brywnq$(elements);
  };
  ConstantObservableProperty.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_ftnprz$_0.retainAll_brywnq$(elements);
  };
  ConstantObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConstantObservableProperty', interfaces: [ObservableProperty, MutableCollection]};
  function LateInitObservableProperty() {
    this.$delegate_udqm7l$_0 = ArrayList_init_0();
    this.internalValue = null;
  }
  function openCloseBinding$lambda_0(closure$state, closure$onOpen, closure$onClose) {
    return function (newState) {
      if (closure$state.v !== newState) {
        if (newState) {
          closure$onOpen();
        }
         else {
          closure$onClose();
        }
        closure$state.v = newState;
      }
      return Unit;
    };
  }
  function bind$lambda_5(closure$property, closure$listener) {
    return function () {
      closure$property.add_11rb$(closure$listener);
      closure$listener(closure$property.value);
      return Unit;
    };
  }
  function bind$lambda_6(closure$property, closure$listener) {
    return function () {
      closure$property.remove_11rb$(closure$listener);
      return Unit;
    };
  }
  function bind_3($receiver, property, listener) {
    var state = {v: false};
    var lambda = openCloseBinding$lambda_0(state, bind$lambda_5(property, listener), bind$lambda_6(property, listener));
    lambda($receiver.value);
    $receiver.add_11rb$(lambda);
    return lambda;
  }
  function openCloseBinding$lambda_1(closure$state, closure$onOpen, closure$onClose) {
    return function (newState) {
      if (closure$state.v !== newState) {
        if (newState) {
          closure$onOpen();
        }
         else {
          closure$onClose();
        }
        closure$state.v = newState;
      }
      return Unit;
    };
  }
  function listen$lambda_1(closure$property, closure$item) {
    return function () {
      closure$property.add_11rb$(closure$item);
      return Unit;
    };
  }
  function listen$lambda_2(closure$property, closure$item) {
    return function () {
      closure$property.remove_11rb$(closure$item);
      return Unit;
    };
  }
  function listen_0($receiver, property, item) {
    var state = {v: false};
    var lambda = openCloseBinding$lambda_1(state, listen$lambda_1(property, item), listen$lambda_2(property, item));
    lambda($receiver.value);
    $receiver.add_11rb$(lambda);
    return lambda;
  }
  function MutableListFromProperty(property) {
    this.property = property;
  }
  MutableListFromProperty.prototype.move_vux9f0$ = function (fromIndex, toIndex) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.add_wxm5ur$(toIndex, $receiver.removeAt_za3lpa$(fromIndex));
    tmp$.value = $receiver;
  };
  MutableListFromProperty.prototype.add_11rb$ = function (element) {
    this.property.value = plus(this.property.value, element);
    return true;
  };
  MutableListFromProperty.prototype.add_wxm5ur$ = function (index, element) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.add_wxm5ur$(index, element);
    tmp$.value = $receiver;
  };
  MutableListFromProperty.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.addAll_u57x28$(index, elements);
    tmp$.value = $receiver;
    return true;
  };
  MutableListFromProperty.prototype.addAll_brywnq$ = function (elements) {
    this.property.value = plus_0(this.property.value, elements);
    return true;
  };
  MutableListFromProperty.prototype.clear = function () {
    this.property.value = emptyList();
  };
  MutableListFromProperty.prototype.remove_11rb$ = function (element) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.remove_11rb$(element);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty.prototype.removeAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.removeAll_brywnq$(elements);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty.prototype.removeAt_za3lpa$ = function (index) {
    var result = {v: null};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.removeAt_za3lpa$(index);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty.prototype.retainAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.retainAll_brywnq$(elements);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty.prototype.set_wxm5ur$ = function (index, element) {
    var result = {v: null};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.set_wxm5ur$(index, element);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty.prototype.replace_brywnq$ = function (collection) {
    this.property.value = toList_0(collection);
  };
  Object.defineProperty(MutableListFromProperty.prototype, 'size', {get: function () {
    return this.property.value.size;
  }});
  MutableListFromProperty.prototype.contains_11rb$ = function (element) {
    return this.property.value.contains_11rb$(element);
  };
  MutableListFromProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.property.value.containsAll_brywnq$(elements);
  };
  MutableListFromProperty.prototype.get_za3lpa$ = function (index) {
    return this.property.value.get_za3lpa$(index);
  };
  MutableListFromProperty.prototype.indexOf_11rb$ = function (element) {
    return this.property.value.indexOf_11rb$(element);
  };
  MutableListFromProperty.prototype.isEmpty = function () {
    return this.property.value.isEmpty();
  };
  MutableListFromProperty.prototype.iterator = function () {
    return this.listIterator();
  };
  MutableListFromProperty.prototype.lastIndexOf_11rb$ = function (element) {
    return this.property.value.lastIndexOf_11rb$(element);
  };
  MutableListFromProperty.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function MutableListFromProperty$listIterator$ObjectLiteral(this$MutableListFromProperty, closure$index) {
    this.this$MutableListFromProperty = this$MutableListFromProperty;
    this.currentIndex = closure$index - 1 | 0;
  }
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return (this.currentIndex + 1 | 0) < this.this$MutableListFromProperty.property.value.size;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.next = function () {
    return this.this$MutableListFromProperty.property.value.get_za3lpa$((this.currentIndex = this.currentIndex + 1 | 0, this.currentIndex));
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.remove = function () {
    var tmp$ = this.this$MutableListFromProperty.property;
    var $receiver = toMutableList(this.this$MutableListFromProperty.property.value);
    $receiver.removeAt_za3lpa$(this.currentIndex);
    tmp$.value = $receiver;
    this.currentIndex = this.currentIndex - 1 | 0;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    var tmp$ = this.this$MutableListFromProperty.property;
    var $receiver = toMutableList(this.this$MutableListFromProperty.property.value);
    $receiver.add_wxm5ur$(this.currentIndex, element);
    tmp$.value = $receiver;
    this.currentIndex = this.currentIndex + 1 | 0;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.currentIndex > 0;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.currentIndex;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.previous = function () {
    var tmp$;
    return this.this$MutableListFromProperty.property.value.get_za3lpa$((tmp$ = this.currentIndex, this.currentIndex = tmp$ - 1 | 0, tmp$));
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.currentIndex - 1 | 0;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    var tmp$ = this.this$MutableListFromProperty.property;
    var $receiver = toMutableList(this.this$MutableListFromProperty.property.value);
    $receiver.set_wxm5ur$(this.currentIndex, element);
    tmp$.value = $receiver;
  };
  MutableListFromProperty$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  MutableListFromProperty.prototype.listIterator_za3lpa$ = function (index) {
    return new MutableListFromProperty$listIterator$ObjectLiteral(this, index);
  };
  function MutableListFromProperty$Partial(property, startIndex, endIndexExclusive) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndexExclusive === void 0)
      endIndexExclusive = 0;
    this.property = property;
    this.startIndex = startIndex;
    this.endIndexExclusive = endIndexExclusive;
  }
  MutableListFromProperty$Partial.prototype.localToGlobal_s8ev3n$ = defineInlineFunction('reacktive.com.lightningkite.reacktive.property.MutableListFromProperty.Partial.localToGlobal_s8ev3n$', function ($receiver) {
    return $receiver + this.startIndex | 0;
  });
  MutableListFromProperty$Partial.prototype.globalToLocal_s8ev3n$ = defineInlineFunction('reacktive.com.lightningkite.reacktive.property.MutableListFromProperty.Partial.globalToLocal_s8ev3n$', function ($receiver) {
    return $receiver - this.startIndex | 0;
  });
  MutableListFromProperty$Partial.prototype.move_vux9f0$ = function (fromIndex, toIndex) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.add_wxm5ur$(toIndex + this.startIndex | 0, $receiver.removeAt_za3lpa$(fromIndex + this.startIndex | 0));
    tmp$.value = $receiver;
  };
  MutableListFromProperty$Partial.prototype.add_11rb$ = function (element) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.add_wxm5ur$(this.endIndexExclusive, element);
    tmp$.value = $receiver;
    this.endIndexExclusive = this.endIndexExclusive + 1 | 0;
    return true;
  };
  MutableListFromProperty$Partial.prototype.add_wxm5ur$ = function (index, element) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.add_wxm5ur$(index + this.startIndex | 0, element);
    tmp$.value = $receiver;
    this.endIndexExclusive = this.endIndexExclusive + 1 | 0;
  };
  MutableListFromProperty$Partial.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.addAll_u57x28$(index + this.startIndex | 0, elements);
    tmp$.value = $receiver;
    this.endIndexExclusive = this.endIndexExclusive + elements.size | 0;
    return true;
  };
  MutableListFromProperty$Partial.prototype.addAll_brywnq$ = function (elements) {
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    $receiver.addAll_u57x28$(this.endIndexExclusive, elements);
    tmp$.value = $receiver;
    this.endIndexExclusive = this.endIndexExclusive + elements.size | 0;
    return true;
  };
  MutableListFromProperty$Partial.prototype.clear = function () {
    this.property.value = emptyList();
  };
  MutableListFromProperty$Partial.prototype.remove_11rb$ = function (element) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.remove_11rb$(element);
    tmp$.value = $receiver;
    if (result.v) {
      this.endIndexExclusive = this.endIndexExclusive - 1 | 0;
    }
    return result.v;
  };
  MutableListFromProperty$Partial.prototype.removeAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.removeAll_brywnq$(elements);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty$Partial.prototype.removeAt_za3lpa$ = function (index) {
    var result = {v: null};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.removeAt_za3lpa$(index + this.startIndex | 0);
    tmp$.value = $receiver;
    this.endIndexExclusive = this.endIndexExclusive - 1 | 0;
    return result.v;
  };
  MutableListFromProperty$Partial.prototype.retainAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.retainAll_brywnq$(elements);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty$Partial.prototype.set_wxm5ur$ = function (index, element) {
    var result = {v: null};
    var tmp$ = this.property;
    var $receiver = toMutableList(this.property.value);
    result.v = $receiver.set_wxm5ur$(index + this.startIndex | 0, element);
    tmp$.value = $receiver;
    return result.v;
  };
  MutableListFromProperty$Partial.prototype.replace_brywnq$ = function (collection) {
    return UnsupportedOperationException_init_0();
  };
  Object.defineProperty(MutableListFromProperty$Partial.prototype, 'size', {get: function () {
    return this.endIndexExclusive - this.startIndex | 0;
  }});
  MutableListFromProperty$Partial.prototype.contains_11rb$ = function (element) {
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType(this, Collection) && this.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var element_0 = tmp$.next();
        if (equals(element_0, element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  MutableListFromProperty$Partial.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = elements.iterator();
      loop_label: while (tmp$.hasNext()) {
        var element = tmp$.next();
        var any$result;
        any$break: do {
          var tmp$_0;
          if (Kotlin.isType(this, Collection) && this.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_0 = this.iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            if (equals(element_0, element)) {
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
  MutableListFromProperty$Partial.prototype.get_za3lpa$ = function (index) {
    return this.property.value.get_za3lpa$(index + this.startIndex | 0);
  };
  MutableListFromProperty$Partial.prototype.indexOf_11rb$ = function (element) {
    return this.property.value.indexOf_11rb$(element) - this.startIndex | 0;
  };
  MutableListFromProperty$Partial.prototype.isEmpty = function () {
    return this.startIndex === this.endIndexExclusive;
  };
  MutableListFromProperty$Partial.prototype.iterator = function () {
    return this.listIterator();
  };
  MutableListFromProperty$Partial.prototype.lastIndexOf_11rb$ = function (element) {
    return this.property.value.lastIndexOf_11rb$(element) - this.startIndex | 0;
  };
  MutableListFromProperty$Partial.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function MutableListFromProperty$Partial$listIterator$ObjectLiteral(this$Partial, closure$index) {
    this.this$Partial = this$Partial;
    this.currentIndex = (closure$index + this$Partial.startIndex | 0) - 1 | 0;
  }
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return (this.currentIndex + 1 | 0) < this.this$Partial.endIndexExclusive;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.next = function () {
    return this.this$Partial.property.value.get_za3lpa$((this.currentIndex = this.currentIndex + 1 | 0, this.currentIndex));
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.remove = function () {
    var tmp$ = this.this$Partial.property;
    var $receiver = toMutableList(this.this$Partial.property.value);
    $receiver.removeAt_za3lpa$(this.currentIndex);
    tmp$.value = $receiver;
    this.currentIndex = this.currentIndex - 1 | 0;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    var tmp$ = this.this$Partial.property;
    var $receiver = toMutableList(this.this$Partial.property.value);
    $receiver.add_wxm5ur$(this.currentIndex, element);
    tmp$.value = $receiver;
    this.currentIndex = this.currentIndex + 1 | 0;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.currentIndex >= this.this$Partial.startIndex;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.currentIndex;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.previous = function () {
    var tmp$;
    return this.this$Partial.property.value.get_za3lpa$((tmp$ = this.currentIndex, this.currentIndex = tmp$ - 1 | 0, tmp$));
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.currentIndex - 1 | 0;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    var tmp$ = this.this$Partial.property;
    var $receiver = toMutableList(this.this$Partial.property.value);
    $receiver.set_wxm5ur$(this.currentIndex, element);
    tmp$.value = $receiver;
  };
  MutableListFromProperty$Partial$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  MutableListFromProperty$Partial.prototype.listIterator_za3lpa$ = function (index) {
    return new MutableListFromProperty$Partial$listIterator$ObjectLiteral(this, index);
  };
  MutableListFromProperty$Partial.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new MutableListFromProperty$Partial(this.property, fromIndex + this.startIndex | 0, toIndex + this.startIndex | 0);
  };
  MutableListFromProperty$Partial.$metadata$ = {kind: Kind_CLASS, simpleName: 'Partial', interfaces: [MutableList]};
  MutableListFromProperty.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new MutableListFromProperty$Partial(this.property, fromIndex, toIndex);
  };
  MutableListFromProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableListFromProperty', interfaces: [MutableList]};
  function MutableObservableProperty() {
  }
  MutableObservableProperty.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableObservableProperty', interfaces: [MutablePropertyDelegate, ObservableProperty]};
  function ObservableProperty() {
  }
  ObservableProperty.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ObservableProperty', interfaces: [PropertyDelegate, MutableCollection]};
  function ReferenceObservableProperty(getterFun, setterFun) {
    this.getterFun = getterFun;
    this.setterFun = setterFun;
    this.$delegate_g4miv4$_0 = ArrayList_init_0();
  }
  Object.defineProperty(ReferenceObservableProperty.prototype, 'value', {get: function () {
    return this.getterFun();
  }, set: function (value) {
    var tmp$;
    this.setterFun(value);
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var callback = tmp$.next();
      callback(value);
    }
  }});
  Object.defineProperty(ReferenceObservableProperty.prototype, 'size', {get: function () {
    return this.$delegate_g4miv4$_0.size;
  }});
  ReferenceObservableProperty.prototype.add_11rb$ = function (element) {
    return this.$delegate_g4miv4$_0.add_11rb$(element);
  };
  ReferenceObservableProperty.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_g4miv4$_0.addAll_brywnq$(elements);
  };
  ReferenceObservableProperty.prototype.clear = function () {
    return this.$delegate_g4miv4$_0.clear();
  };
  ReferenceObservableProperty.prototype.contains_11rb$ = function (element) {
    return this.$delegate_g4miv4$_0.contains_11rb$(element);
  };
  ReferenceObservableProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_g4miv4$_0.containsAll_brywnq$(elements);
  };
  ReferenceObservableProperty.prototype.isEmpty = function () {
    return this.$delegate_g4miv4$_0.isEmpty();
  };
  ReferenceObservableProperty.prototype.iterator = function () {
    return this.$delegate_g4miv4$_0.iterator();
  };
  ReferenceObservableProperty.prototype.remove_11rb$ = function (element) {
    return this.$delegate_g4miv4$_0.remove_11rb$(element);
  };
  ReferenceObservableProperty.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_g4miv4$_0.removeAll_brywnq$(elements);
  };
  ReferenceObservableProperty.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_g4miv4$_0.retainAll_brywnq$(elements);
  };
  ReferenceObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReferenceObservableProperty', interfaces: [MutableObservableProperty, MutableCollection]};
  function StandardObservableProperty(initValue) {
    this.$delegate_287ndk$_0 = ArrayList_init_0();
    this.value_7ww7lt$_0 = initValue;
  }
  Object.defineProperty(StandardObservableProperty.prototype, 'value', {get: function () {
    return this.value_7ww7lt$_0;
  }, set: function (value) {
    var tmp$;
    this.value_7ww7lt$_0 = value;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var callback = tmp$.next();
      callback(value);
    }
  }});
  Object.defineProperty(StandardObservableProperty.prototype, 'size', {get: function () {
    return this.$delegate_287ndk$_0.size;
  }});
  StandardObservableProperty.prototype.add_11rb$ = function (element) {
    return this.$delegate_287ndk$_0.add_11rb$(element);
  };
  StandardObservableProperty.prototype.addAll_brywnq$ = function (elements) {
    return this.$delegate_287ndk$_0.addAll_brywnq$(elements);
  };
  StandardObservableProperty.prototype.clear = function () {
    return this.$delegate_287ndk$_0.clear();
  };
  StandardObservableProperty.prototype.contains_11rb$ = function (element) {
    return this.$delegate_287ndk$_0.contains_11rb$(element);
  };
  StandardObservableProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_287ndk$_0.containsAll_brywnq$(elements);
  };
  StandardObservableProperty.prototype.isEmpty = function () {
    return this.$delegate_287ndk$_0.isEmpty();
  };
  StandardObservableProperty.prototype.iterator = function () {
    return this.$delegate_287ndk$_0.iterator();
  };
  StandardObservableProperty.prototype.remove_11rb$ = function (element) {
    return this.$delegate_287ndk$_0.remove_11rb$(element);
  };
  StandardObservableProperty.prototype.removeAll_brywnq$ = function (elements) {
    return this.$delegate_287ndk$_0.removeAll_brywnq$(elements);
  };
  StandardObservableProperty.prototype.retainAll_brywnq$ = function (elements) {
    return this.$delegate_287ndk$_0.retainAll_brywnq$(elements);
  };
  StandardObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'StandardObservableProperty', interfaces: [MutableObservableProperty, MutableCollection]};
  function SubObservableProperty(owningObservable, getter) {
    EnablingMutableCollection.call(this);
    this.owningObservable = owningObservable;
    this.getter = getter;
    this.currentSub = null;
    this.outerCallback = SubObservableProperty$outerCallback$lambda(this);
    this.innerCallback = SubObservableProperty$innerCallback$lambda(this);
  }
  function TransformMutableObservableProperty(observable, transformer, reverseTransformer) {
    EnablingMutableCollection.call(this);
    this.observable = observable;
    this.transformer = transformer;
    this.reverseTransformer = reverseTransformer;
    this.callback = TransformMutableObservableProperty$callback$lambda(this);
  }
  Object.defineProperty(TransformMutableObservableProperty.prototype, 'value', {get: function () {
    return this.transformer(this.observable.value);
  }, set: function (value) {
    this.observable.value = this.reverseTransformer(value);
  }});
  TransformMutableObservableProperty.prototype.enable = function () {
    this.observable.add_11rb$(this.callback);
  };
  TransformMutableObservableProperty.prototype.disable = function () {
    this.observable.remove_11rb$(this.callback);
  };
  function TransformMutableObservableProperty$callback$lambda(this$TransformMutableObservableProperty) {
    return function (a) {
      var wrapped = this$TransformMutableObservableProperty.transformer(a);
      var tmp$;
      tmp$ = this$TransformMutableObservableProperty.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(wrapped);
      }
      return Unit;
    };
  }
  TransformMutableObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransformMutableObservableProperty', interfaces: [MutableObservableProperty, EnablingMutableCollection]};
  function transform($receiver, mapper, reverseMapper) {
    return new TransformMutableObservableProperty($receiver, mapper, reverseMapper);
  }
  function TransformObservableProperty(observable, transformer) {
    EnablingMutableCollection.call(this);
    this.observable = observable;
    this.transformer = transformer;
    this.callback = TransformObservableProperty$callback$lambda(this);
  }
  Object.defineProperty(TransformObservableProperty.prototype, 'value', {get: function () {
    return this.transformer(this.observable.value);
  }});
  TransformObservableProperty.prototype.enable = function () {
    this.observable.add_11rb$(this.callback);
  };
  TransformObservableProperty.prototype.disable = function () {
    this.observable.remove_11rb$(this.callback);
  };
  function TransformObservableProperty$callback$lambda(this$TransformObservableProperty) {
    return function (a) {
      var wrapped = this$TransformObservableProperty.transformer(a);
      var tmp$;
      tmp$ = this$TransformObservableProperty.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(wrapped);
      }
      return Unit;
    };
  }
  TransformObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransformObservableProperty', interfaces: [ObservableProperty, EnablingMutableCollection]};
  function transform_0($receiver, mapper) {
    return new TransformObservableProperty($receiver, mapper);
  }
  function update($receiver) {
    var tmp$;
    var cached = $receiver.value;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var callback = tmp$.next();
      callback(cached);
    }
  }
  function VirtualMutableObservableProperty(getterFun, setterFun, event) {
    this.getterFun = getterFun;
    this.setterFun = setterFun;
    this.event = event;
  }
  Object.defineProperty(VirtualMutableObservableProperty.prototype, 'value', {get: function () {
    return this.getterFun();
  }, set: function (value) {
    this.setterFun(value);
  }});
  Object.defineProperty(VirtualMutableObservableProperty.prototype, 'size', {get: function () {
    return this.event.size;
  }});
  VirtualMutableObservableProperty.prototype.add_11rb$ = function (element) {
    return this.event.add_11rb$(element);
  };
  VirtualMutableObservableProperty.prototype.addAll_brywnq$ = function (elements) {
    return this.event.addAll_brywnq$(elements);
  };
  VirtualMutableObservableProperty.prototype.clear = function () {
    return this.event.clear();
  };
  VirtualMutableObservableProperty.prototype.contains_11rb$ = function (element) {
    return this.event.contains_11rb$(element);
  };
  VirtualMutableObservableProperty.prototype.containsAll_brywnq$ = function (elements) {
    return this.event.containsAll_brywnq$(elements);
  };
  VirtualMutableObservableProperty.prototype.isEmpty = function () {
    return this.event.isEmpty();
  };
  VirtualMutableObservableProperty.prototype.iterator = function () {
    return this.event.iterator();
  };
  VirtualMutableObservableProperty.prototype.remove_11rb$ = function (element) {
    return this.event.remove_11rb$(element);
  };
  VirtualMutableObservableProperty.prototype.removeAll_brywnq$ = function (elements) {
    return this.event.removeAll_brywnq$(elements);
  };
  VirtualMutableObservableProperty.prototype.retainAll_brywnq$ = function (elements) {
    return this.event.retainAll_brywnq$(elements);
  };
  VirtualMutableObservableProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'VirtualMutableObservableProperty', interfaces: [MutableObservableProperty, MutableCollection]};
  function VirtualObservableProperty(getterFun, event) {
    if (event === void 0)
      event = ArrayList_init_0();
    this.getterFun = getterFun;
    this.event = event;
  }
  function MappingMutableObservableSet(mutableSource, transform, reverse) {
    MappingObservableSet.call(this, mutableSource, transform, reverse);
    this.mutableSource = mutableSource;
  }
  function MappingObservableSet(source, transform, reverse) {
    this.source = source;
    this.transform = transform;
    this.reverse = reverse;
    this.onCollectionAdd_8w760f$_0 = mappingWriteOnly(this.source.onCollectionAdd, MappingObservableSet$onCollectionAdd$lambda(this));
    this.onCollectionChange_2vjzhu$_0 = mappingWriteOnly(this.source.onCollectionChange, MappingObservableSet$onCollectionChange$lambda(this));
    this.onCollectionRemove_8pnoym$_0 = mappingWriteOnly(this.source.onCollectionRemove, MappingObservableSet$onCollectionRemove$lambda(this));
    this.onCollectionUpdate_d7ysnb$_0 = transform_0(this.source.onCollectionUpdate, MappingObservableSet$onCollectionUpdate$lambda(this));
    this.onCollectionReplace_cnxntu$_0 = mappingWriteOnly(this.source.onCollectionReplace, MappingObservableSet$onCollectionReplace$lambda(this));
  }
  Object.defineProperty(MappingObservableSet.prototype, 'size', {get: function () {
    return this.source.size;
  }});
  MappingObservableSet.prototype.contains_11rb$ = function (element) {
    return this.source.contains_11rb$(this.reverse(element));
  };
  MappingObservableSet.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$ = this.source;
    var transform = this.reverse;
    var destination = ArrayList_init(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(transform(item));
    }
    return tmp$.containsAll_brywnq$(destination);
  };
  MappingObservableSet.prototype.isEmpty = function () {
    return this.source.isEmpty();
  };
  MappingObservableSet.prototype.iterator = function () {
    return mapping_8(this.source.iterator(), this.transform);
  };
  Object.defineProperty(MappingObservableSet.prototype, 'onCollectionAdd', {get: function () {
    return this.onCollectionAdd_8w760f$_0;
  }});
  Object.defineProperty(MappingObservableSet.prototype, 'onCollectionChange', {get: function () {
    return this.onCollectionChange_2vjzhu$_0;
  }});
  Object.defineProperty(MappingObservableSet.prototype, 'onCollectionRemove', {get: function () {
    return this.onCollectionRemove_8pnoym$_0;
  }});
  Object.defineProperty(MappingObservableSet.prototype, 'onCollectionUpdate', {get: function () {
    return this.onCollectionUpdate_d7ysnb$_0;
  }});
  Object.defineProperty(MappingObservableSet.prototype, 'onCollectionReplace', {get: function () {
    return this.onCollectionReplace_cnxntu$_0;
  }});
  function MutableObservableSet() {
  }
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$reacktive = package$lightningkite.reacktive || (package$lightningkite.reacktive = {});
  var package$collection = package$reacktive.collection || (package$reacktive.collection = {});
  package$collection.MutableObservableCollection = MutableObservableCollection;
  package$collection.ObservableCollection = ObservableCollection;
  package$reacktive.EnablingMutableCollection = EnablingMutableCollection;
  EnablingObject.SubEnablingCollection = EnablingObject$SubEnablingCollection;
  EnablingObject.SubEnablingObservableProperty = EnablingObject$SubEnablingObservableProperty;
  package$reacktive.EnablingObject = EnablingObject;
  package$reacktive.invokeAll_jir4c1$ = invokeAll_0;
  package$reacktive.invokeAll_k7666c$ = invokeAll_1;
  package$reacktive.invokeAll_s62k00$ = invokeAll_2;
  var package$list = package$reacktive.list || (package$reacktive.list = {});
  package$list.ConstantObservableList = ConstantObservableList;
  package$list.EnablingObservableList = EnablingObservableList;
  package$list.asObservableList_2p1efm$ = asObservableList_0;
  package$list.asObservableList_b1yvol$ = asObservableList_2;
  package$list.observableListOf_i5x0yv$ = observableListOf_0;
  package$list.FilteringObservableList = FilteringObservableList;
  package$list.filtering_ion7f2$ = filtering;
  package$list.FlatMappingObservableList = FlatMappingObservableList;
  package$list.IndexObservableList = IndexObservableList;
  package$list.IndexObservableProperty = IndexObservableProperty;
  package$list.lastOrNullObservable_lp48kg$ = lastOrNullObservable;
  package$list.LastObservableProperty = LastObservableProperty;
  package$list.MappingMutableObservableList = MappingMutableObservableList;
  package$list.MappingObservableList = MappingObservableList;
  package$list.MutableObservableList = MutableObservableList;
  package$list.MutableObservableListFromProperty = MutableObservableListFromProperty;
  package$list.ObservableList = ObservableList;
  package$list.ObservableListAsMutable = ObservableListAsMutable;
  package$list.ObservableListFromProperty = ObservableListFromProperty;
  package$list.WrapperObservableList = WrapperObservableList;
  var package$map = package$reacktive.map || (package$reacktive.map = {});
  GroupingObservableMap.OnUpdateClass = GroupingObservableMap$OnUpdateClass;
  package$map.GroupingObservableMap = GroupingObservableMap;
  package$map.MutableEntryObservableSet = MutableEntryObservableSet;
  package$map.MutableKeyObservableSet = MutableKeyObservableSet;
  package$map.MutableValueObservableSet = MutableValueObservableSet;
  var package$mapping = package$reacktive.mapping || (package$reacktive.mapping = {});
  package$mapping.CollectionWriteOnlyMapping = CollectionWriteOnlyMapping;
  package$mapping.mappingWriteOnly_aeutp$ = mappingWriteOnly;
  package$mapping.mapping_s72g0g$ = mapping_8;
  package$mapping.mapping_9eeq8i$ = mapping_9;
  Object.defineProperty(package$reacktive, 'NoOpMutableCollection', {get: NoOpMutableCollection_getInstance});
  var package$property = package$reacktive.property || (package$reacktive.property = {});
  package$property.CombineObservableProperty2 = CombineObservableProperty2;
  package$property.CombineObservableProperty3 = CombineObservableProperty3;
  package$property.CombineObservablePropertyBlind = CombineObservablePropertyBlind;
  package$property.ConstantObservableProperty = ConstantObservableProperty;
  package$property.LateInitObservableProperty = LateInitObservableProperty;
  var package$lifecycle_0 = package$property.lifecycle || (package$property.lifecycle = {});
  package$lifecycle_0.bind_g5q2cn$ = bind_3;
  package$lifecycle_0.listen_g5q2cn$ = listen_0;
  MutableListFromProperty.Partial = MutableListFromProperty$Partial;
  package$property.MutableListFromProperty = MutableListFromProperty;
  package$property.MutableObservableProperty = MutableObservableProperty;
  package$property.ObservableProperty = ObservableProperty;
  package$property.ReferenceObservableProperty = ReferenceObservableProperty;
  package$property.StandardObservableProperty = StandardObservableProperty;
  package$property.SubObservableProperty = SubObservableProperty;
  package$property.TransformMutableObservableProperty = TransformMutableObservableProperty;
  package$property.transform_s3zdp9$ = transform;
  package$property.TransformObservableProperty = TransformObservableProperty;
  package$property.transform_9a5tou$ = transform_0;
  package$property.update_f6qfls$ = update;
  package$property.VirtualMutableObservableProperty = VirtualMutableObservableProperty;
  package$property.VirtualObservableProperty = VirtualObservableProperty;
  var package$set = package$reacktive.set || (package$reacktive.set = {});
  package$set.MappingMutableObservableSet = MappingMutableObservableSet;
  package$set.MappingObservableSet = MappingObservableSet;
  package$set.MutableObservableSet = MutableObservableSet;
  ObservableProperty.prototype.getValue_n5byny$ = PropertyDelegate.prototype.getValue_n5byny$;
  EnablingObject$SubEnablingObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  Object.defineProperty(EnablingObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(EnablingObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(EnablingObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(EnablingObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(EnablingObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionReplace'));
  Object.defineProperty(ConstantObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(ConstantObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(ConstantObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(ConstantObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(ConstantObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionReplace'));
  Object.defineProperty(MutableObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(MutableObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(MutableObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(MutableObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(MutableObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionReplace'));
  FilteringObservableList.prototype.change_xwzc9q$ = MutableObservableList.prototype.change_xwzc9q$;
  FilteringObservableList.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  FilteringObservableList.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  FlatMappingObservableList.prototype.change_xwzc9q$ = MutableObservableList.prototype.change_xwzc9q$;
  FlatMappingObservableList.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  FlatMappingObservableList.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  Object.defineProperty(FlatMappingObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(FlatMappingObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(FlatMappingObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(FlatMappingObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(FlatMappingObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionReplace'));
  IndexObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  LastObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  Object.defineProperty(MappingObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(MappingObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(MappingObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(MappingObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(MappingObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(ObservableList.prototype, 'onCollectionReplace'));
  MappingMutableObservableList.prototype.change_xwzc9q$ = MutableObservableList.prototype.change_xwzc9q$;
  MappingMutableObservableList.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  MappingMutableObservableList.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  MutableObservableListFromProperty.prototype.change_xwzc9q$ = MutableObservableList.prototype.change_xwzc9q$;
  MutableObservableListFromProperty.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  MutableObservableListFromProperty.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  ObservableListAsMutable.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  ObservableListAsMutable.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  WrapperObservableList.prototype.change_xwzc9q$ = MutableObservableList.prototype.change_xwzc9q$;
  WrapperObservableList.prototype.updateAt_za3lpa$ = MutableObservableList.prototype.updateAt_za3lpa$;
  WrapperObservableList.prototype.update_11rb$ = MutableObservableList.prototype.update_11rb$;
  Object.defineProperty(WrapperObservableList.prototype, 'onCollectionAdd', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionAdd'));
  Object.defineProperty(WrapperObservableList.prototype, 'onCollectionChange', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionChange'));
  Object.defineProperty(WrapperObservableList.prototype, 'onCollectionRemove', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionRemove'));
  Object.defineProperty(WrapperObservableList.prototype, 'onCollectionUpdate', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionUpdate'));
  Object.defineProperty(WrapperObservableList.prototype, 'onCollectionReplace', Object.getOwnPropertyDescriptor(MutableObservableList.prototype, 'onCollectionReplace'));
  GroupingObservableMap$OnUpdateClass.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  MutableObservableSet.prototype.change_xwzc9q$ = MutableObservableCollection.prototype.change_xwzc9q$;
  MutableEntryObservableSet.prototype.change_xwzc9q$ = MutableObservableSet.prototype.change_xwzc9q$;
  MutableKeyObservableSet.prototype.change_xwzc9q$ = MutableObservableSet.prototype.change_xwzc9q$;
  MutableValueObservableSet.prototype.change_xwzc9q$ = MutableObservableSet.prototype.change_xwzc9q$;
  CombineObservableProperty2.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  CombineObservableProperty3.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  CombineObservablePropertyBlind.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  ConstantObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  MutableObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  MutableObservableProperty.prototype.setValue_sq4zib$ = MutablePropertyDelegate.prototype.setValue_sq4zib$;
  LateInitObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  LateInitObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  ReferenceObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  ReferenceObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  StandardObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  StandardObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  SubObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  SubObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  TransformMutableObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  TransformMutableObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  TransformObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  VirtualMutableObservableProperty.prototype.getValue_n5byny$ = MutableObservableProperty.prototype.getValue_n5byny$;
  VirtualMutableObservableProperty.prototype.setValue_sq4zib$ = MutableObservableProperty.prototype.setValue_sq4zib$;
  VirtualObservableProperty.prototype.getValue_n5byny$ = ObservableProperty.prototype.getValue_n5byny$;
  MappingMutableObservableSet.prototype.change_xwzc9q$ = MutableObservableSet.prototype.change_xwzc9q$;
  return _;
}));

//# sourceMappingURL=reacktive.js.map
