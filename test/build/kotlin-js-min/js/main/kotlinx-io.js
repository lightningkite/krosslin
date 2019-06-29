(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-io'.");
    }
    if (false) {
    }
    root['kotlinx-io'] = factory(typeof this['kotlinx-io'] === 'undefined' ? {} : this['kotlinx-io'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var UShort_init = Kotlin.kotlin.UShort;
  var UInt_init = Kotlin.kotlin.UInt;
  var ULong_init = Kotlin.kotlin.ULong;
  var L16 = Kotlin.Long.fromInt(16);
  var Throwable = Error;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L0 = Kotlin.Long.ZERO;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Exception = Kotlin.kotlin.Exception;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_i2lc79$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_tmsbgo$;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_se6h4x$;
  var get_lastIndex_2 = Kotlin.kotlin.collections.get_lastIndex_rjqryz$;
  var get_lastIndex_3 = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  var toByte = Kotlin.toByte;
  var Appendable = Kotlin.kotlin.text.Appendable;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Math_0 = Math;
  var Annotation = Kotlin.kotlin.Annotation;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var equals = Kotlin.equals;
  var toChar = Kotlin.toChar;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var coerceAtMost_0 = Kotlin.kotlin.ranges.coerceAtMost_2p08ub$;
  var coerceAtLeast_0 = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toShort = Kotlin.toShort;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var toRawBits = Kotlin.floatToRawBits;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var isHighSurrogate = Kotlin.kotlin.text.isHighSurrogate_myv2d0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var Any = Object;
  EmptyBufferPoolImpl.prototype = Object.create(NoPoolImpl.prototype);
  EmptyBufferPoolImpl.prototype.constructor = EmptyBufferPoolImpl;
  BufferLimitExceededException.prototype = Object.create(Exception.prototype);
  BufferLimitExceededException.prototype.constructor = BufferLimitExceededException;
  BytePacketBuilderPlatformBase.prototype = Object.create(BytePacketBuilderBase.prototype);
  BytePacketBuilderPlatformBase.prototype.constructor = BytePacketBuilderPlatformBase;
  BytePacketBuilder.prototype = Object.create(BytePacketBuilderPlatformBase.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacketPlatformBase.prototype = Object.create(ByteReadPacketBase.prototype);
  ByteReadPacketPlatformBase.prototype.constructor = ByteReadPacketPlatformBase;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  MalformedInputException.prototype = Object.create(Throwable.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  ByteOrder.prototype = Object.create(Enum.prototype);
  ByteOrder.prototype.constructor = ByteOrder;
  ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral.prototype.constructor = ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral;
  ByteReadPacket_0.prototype = Object.create(ByteReadPacketPlatformBase.prototype);
  ByteReadPacket_0.prototype.constructor = ByteReadPacket_0;
  IoBuffer$Companion$Pool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$Pool$ObjectLiteral;
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$NoPool$ObjectLiteral;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  var EmptyByteArray;
  function encode_0($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    var buildPacket$result;
    var builder = BytePacketBuilder_0(0);
    try {
      encodeToImpl($receiver, builder, input, fromIndex, toIndex);
      buildPacket$result = builder.build();
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      }
       else
        throw t;
    }
    return buildPacket$result;
  }
  function decode($receiver, input, max) {
    if (max === void 0)
      max = 2147483647;
    var a = Kotlin.Long.fromInt(max);
    var b = sizeEstimate(input);
    var $receiver_0 = StringBuilder_init((a.compareTo_11rb$(b) <= 0 ? a : b).toInt());
    decode_0($receiver, input, $receiver_0, max);
    return $receiver_0.toString();
  }
  function encodeToByteArrayImpl1($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    var start = fromIndex;
    if (start >= toIndex)
      return EmptyByteArray;
    var single = IoBuffer$Companion_getInstance().Pool.borrow();
    try {
      IoBuffer$Companion_getInstance().NoPool;
      var rc = encodeImpl($receiver, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var result = new Int8Array(single.readRemaining);
        readFully(single, result);
        return result;
      }
      var builder = new BytePacketBuilder(0, IoBuffer$Companion_getInstance().Pool);
      builder.last_g6eaik$(single.makeView());
      encodeToImpl($receiver, builder, input, start, toIndex);
      return readBytes(builder.build());
    }
    finally {
      single.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
    }
  }
  function sizeEstimate($receiver) {
    if (Kotlin.isType($receiver, ByteReadPacket_0))
      return $receiver.remaining;
    else if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      var a = $receiver.remaining;
      var b = L16;
      return a.compareTo_11rb$(b) >= 0 ? a : b;
    }
     else
      return L16;
  }
  function encodeCompleteImpl($receiver, dst) {
    var size = {v: 1};
    var bytesWritten = {v: 0};
    var tail = prepareWriteHead(dst, 1, null);
    try {
      while (true) {
        var view = tail;
        var before = view.writeRemaining;
        if (encodeComplete($receiver, view)) {
          size.v = 0;
        }
         else {
          size.v = size.v + 1 | 0;
        }
        bytesWritten.v = bytesWritten.v + (before - view.writeRemaining) | 0;
        if (!(size.v > 0))
          break;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }
    finally {
      afterHeadWrite(dst, tail);
    }
    return bytesWritten.v;
  }
  function encodeToImpl($receiver, destination, input, fromIndex, toIndex) {
    var start = {v: fromIndex};
    if (start.v >= toIndex)
      return 0;
    var bytesWritten = {v: 0};
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      while (true) {
        var view = tail;
        var block$result;
        var before = view.writeRemaining;
        var rc = encodeImpl($receiver, input, start.v, toIndex, view);
        if (!(rc >= 0)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        start.v = start.v + rc | 0;
        bytesWritten.v = bytesWritten.v + (before - view.writeRemaining) | 0;
        if (start.v >= toIndex) {
          block$result = 0;
        }
         else if (rc === 0) {
          block$result = 8;
        }
         else {
          block$result = 1;
        }
        size = block$result;
        if (size <= 0)
          break;
        tail = prepareWriteHead(destination, size, tail);
      }
    }
    finally {
      afterHeadWrite(destination, tail);
    }
    bytesWritten.v = bytesWritten.v + encodeCompleteImpl($receiver, destination) | 0;
    return bytesWritten.v;
  }
  function EmptyBufferPoolImpl() {
    EmptyBufferPoolImpl_instance = this;
    NoPoolImpl.call(this);
  }
  EmptyBufferPoolImpl.prototype.borrow = function () {
    return IoBuffer$Companion_getInstance().Empty;
  };
  EmptyBufferPoolImpl.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EmptyBufferPoolImpl', interfaces: [NoPoolImpl]};
  var EmptyBufferPoolImpl_instance = null;
  function EmptyBufferPoolImpl_getInstance() {
    if (EmptyBufferPoolImpl_instance === null) {
      new EmptyBufferPoolImpl();
    }
    return EmptyBufferPoolImpl_instance;
  }
  function releaseAll($receiver, pool) {
    if ($receiver == null)
      return;
    var next = $receiver.next;
    $receiver.next = null;
    $receiver.release_cqjh9i$(pool);
    releaseAll(next, pool);
  }
  function copyAll($receiver) {
    var tmp$;
    var copied = $receiver.makeView();
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return copied;
    }
    var next = tmp$;
    return copyAll_0(next, copied, copied);
  }
  function copyAll_0($receiver, head, prev) {
    var tmp$;
    var copied = $receiver.makeView();
    prev.next = copied;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return head;
    }
    var next = tmp$;
    return copyAll_0(next, head, copied);
  }
  function findTail($receiver) {
    var tmp$;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return $receiver;
    }
    var next = tmp$;
    return findTail(next);
  }
  function remainingAll($receiver) {
    return remainingAll_0($receiver, L0);
  }
  function remainingAll_0($receiver, n) {
    var tmp$;
    var rem = Kotlin.Long.fromInt($receiver.readRemaining).add(n);
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return rem;
    }
    var next = tmp$;
    return remainingAll_0(next, rem);
  }
  function isEmpty($receiver) {
    var tmp$;
    if ($receiver.readRemaining > 0)
      return false;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return true;
    }
    var next = tmp$;
    return isEmpty(next);
  }
  function BufferLimitExceededException(message) {
    Exception_init(message, this);
    this.name = 'BufferLimitExceededException';
  }
  BufferLimitExceededException.$metadata$ = {kind: Kind_CLASS, simpleName: 'BufferLimitExceededException', interfaces: [Exception]};
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [RequireFailureCapture]};
  function BytePacketBuilder(headerSizeHint, pool) {
    BytePacketBuilderPlatformBase.call(this, pool);
    this.headerSizeHint_0 = headerSizeHint;
    if (!(this.headerSizeHint_0 >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilder_init$lambda(this));
      m.doFail();
    }
    this.head = IoBuffer$Companion_getInstance().Empty;
  }
  Object.defineProperty(BytePacketBuilder.prototype, 'size', {get: function () {
    var size = this._size;
    if (size === -1) {
      this._size = remainingAll(this.head).toInt();
      return this._size;
    }
    return size;
  }});
  Object.defineProperty(BytePacketBuilder.prototype, 'isEmpty', {get: function () {
    var tmp$;
    var _size = this._size;
    if (_size > 0)
      tmp$ = false;
    else if (_size === 0)
      tmp$ = true;
    else if (this.head.canRead())
      tmp$ = false;
    else if (this.size === 0)
      tmp$ = true;
    else
      tmp$ = false;
    return tmp$;
  }});
  Object.defineProperty(BytePacketBuilder.prototype, 'isNotEmpty', {get: function () {
    var tmp$;
    var _size = this._size;
    if (_size > 0)
      tmp$ = true;
    else if (_size === 0)
      tmp$ = false;
    else if (this.head.canRead())
      tmp$ = true;
    else if (this.size > 0)
      tmp$ = true;
    else
      tmp$ = false;
    return tmp$;
  }});
  BytePacketBuilder.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_s8itvh$.call(this, c), BytePacketBuilder) ? tmp$ : throwCCE();
  };
  BytePacketBuilder.prototype.append_gw00v9$ = function (csq) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_gw00v9$.call(this, csq), BytePacketBuilder) ? tmp$ : throwCCE();
  };
  BytePacketBuilder.prototype.append_ezbsdh$ = function (csq, start, end) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_ezbsdh$.call(this, csq, start, end), BytePacketBuilder) ? tmp$ : throwCCE();
  };
  BytePacketBuilder.prototype.release = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head = empty;
      this.tail = empty;
      releaseAll(head, this.pool);
      this._size = 0;
    }
  };
  BytePacketBuilder.prototype.flush = function () {
  };
  BytePacketBuilder.prototype.close = function () {
    this.release();
  };
  BytePacketBuilder.prototype.reset = function () {
    this.release();
  };
  BytePacketBuilder.prototype.preview_6bo1y6$ = function (block) {
    var tmp$;
    var packet = this.preview();
    try {
      tmp$ = block(packet);
    }
    finally {
      packet.release();
    }
    return tmp$;
  };
  BytePacketBuilder.prototype.preview = function () {
    var tmp$;
    var head = this.head;
    if (head === IoBuffer$Companion_getInstance().Empty)
      tmp$ = ByteReadPacket$Companion_getInstance().Empty;
    else
      tmp$ = ByteReadPacket_init(copyAll(head), this.pool);
    return tmp$;
  };
  BytePacketBuilder.prototype.build = function () {
    var tmp$;
    var size = this.size;
    var head = this.stealAll_8be2vx$();
    if (head == null)
      tmp$ = ByteReadPacket$Companion_getInstance().Empty;
    else
      tmp$ = new ByteReadPacket_0(head, Kotlin.Long.fromInt(size), this.pool);
    return tmp$;
  };
  BytePacketBuilder.prototype.stealAll_8be2vx$ = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    this.head = empty;
    this.tail = empty;
    this._size = 0;
    return head === empty ? null : head;
  };
  BytePacketBuilder.prototype.afterBytesStolen_8be2vx$ = function () {
    var head = this.head;
    if (!(head.next == null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this._size = 0;
    head.resetForWrite();
    head.reserveStartGap_za3lpa$(this.headerSizeHint_0);
    head.reserveEndGap_za3lpa$(IoBuffer$Companion_getInstance().ReservedSize);
  };
  BytePacketBuilder.prototype.writePacket_8awntw$ = function (p) {
    var foreignStolen = p.stealAll_8be2vx$();
    if (foreignStolen == null) {
      p.release();
      return;
    }
    var tail = this.tail;
    if (tail === IoBuffer$Companion_getInstance().Empty) {
      this.head = foreignStolen;
      this.tail = findTail(foreignStolen);
      this._size = remainingAll(foreignStolen).toInt();
      return;
    }
    this.writePacketSlow_0(tail, foreignStolen, p);
  };
  BytePacketBuilder.prototype.writePacketSlow_0 = function (tail, foreignStolen, p) {
    var tmp$, tmp$_0, tmp$_1;
    var lastSize = tail.readRemaining;
    var nextSize = foreignStolen.readRemaining;
    var maxCopySize = PACKET_MAX_COPY_SIZE;
    if (nextSize < maxCopySize && nextSize <= (tail.endGap + tail.writeRemaining | 0)) {
      tmp$ = nextSize;
    }
     else
      tmp$ = -1;
    var appendSize = tmp$;
    if (lastSize < maxCopySize && lastSize <= foreignStolen.startGap && foreignStolen.isExclusivelyOwned()) {
      tmp$_0 = lastSize;
    }
     else
      tmp$_0 = -1;
    var prependSize = tmp$_0;
    if (appendSize === -1 && prependSize === -1) {
      tail.next = foreignStolen;
      this.tail = findTail(foreignStolen);
      this._size = remainingAll(this.head).toInt();
    }
     else if (prependSize === -1 || appendSize <= prependSize) {
      tail.writeBufferAppend_ehtrw3$(foreignStolen, tail.writeRemaining + tail.endGap | 0);
      tail.next = foreignStolen.next;
      var $receiver = findTail(foreignStolen);
      this.tail = (tmp$_1 = !($receiver === foreignStolen) ? $receiver : null) != null ? tmp$_1 : tail;
      foreignStolen.release_cqjh9i$(p.pool);
      this._size = remainingAll(this.head).toInt();
    }
     else if (appendSize === -1 || prependSize < appendSize) {
      this.writePacketSlowPrepend_0(foreignStolen, tail);
    }
     else {
      throw IllegalStateException_init('prep = ' + prependSize + ', app = ' + appendSize);
    }
  };
  BytePacketBuilder.prototype.writePacketSlowPrepend_0 = function (foreignStolen, tail) {
    foreignStolen.writeBufferPrepend_2fdm73$(tail);
    if (this.head === tail) {
      this.head = foreignStolen;
    }
     else {
      var pre = this.head;
      while (true) {
        var next = ensureNotNull(pre.next);
        if (next === tail)
          break;
        pre = next;
      }
      pre.next = foreignStolen;
    }
    tail.release_cqjh9i$(this.pool);
    this.tail = findTail(foreignStolen);
    this._size = remainingAll(this.head).toInt();
  };
  BytePacketBuilder.prototype.last_g6eaik$ = function (buffer) {
    if (this.head === IoBuffer$Companion_getInstance().Empty) {
      if (isEmpty(buffer)) {
        buffer.reserveStartGap_za3lpa$(this.headerSizeHint_0);
      }
      this.tail = buffer;
      this.head = buffer;
      this._size = remainingAll(buffer).toInt();
    }
     else {
      this.tail.next = buffer;
      this.tail = buffer;
      this._size = -1;
    }
  };
  function BytePacketBuilder_init$lambda(this$BytePacketBuilder) {
    return function () {
      return "shouldn't be negative: headerSizeHint = " + this$BytePacketBuilder.headerSizeHint_0;
    };
  }
  BytePacketBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'BytePacketBuilder', interfaces: [BytePacketBuilderPlatformBase]};
  function BytePacketBuilderBase(pool) {
    this.pool = pool;
    this._size = 0;
    this.byteOrder_5uar5w$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.tail = IoBuffer$Companion_getInstance().Empty;
  }
  Object.defineProperty(BytePacketBuilderBase.prototype, 'doNotImplementOutputButExtendAbstractOutputInstead', {get: function () {
    throw IllegalStateException_init('Should be never accessed.'.toString());
  }});
  Object.defineProperty(BytePacketBuilderBase.prototype, 'byteOrder', {get: function () {
    return this.byteOrder_5uar5w$_0;
  }, set: function (value) {
    this.byteOrder_5uar5w$_0 = value;
    var tail = this.tail;
    if (tail.canWrite()) {
      tail.byteOrder = value;
    }
  }});
  BytePacketBuilderBase.prototype.writeFully_mj6st8$ = function (src, offset, length) {
    if (length === 0)
      return;
    var copied = {v: 0};
    writeLoop_tjk5n2$_0$break: do {
      if (!(copied.v < length))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 1) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var bufferRemaining = rem;
        var b = length - copied.v | 0;
        var size = Math_0.min(bufferRemaining, b);
        buffer_0.writeFully_mj6st8$(src, offset + copied.v | 0, size);
        copied.v = copied.v + size | 0;
        var result = size;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = copied.v < length;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  BytePacketBuilderBase.prototype.writeLong_s8cxhz$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 8) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeLong_s8cxhz$(v);
    this.addSize_za3lpa$(8);
  };
  BytePacketBuilderBase.prototype.writeInt_za3lpa$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 4) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeInt_za3lpa$(v);
    this.addSize_za3lpa$(4);
  };
  BytePacketBuilderBase.prototype.writeShort_mq22fl$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 2) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeShort_mq22fl$(v);
    this.addSize_za3lpa$(2);
  };
  BytePacketBuilderBase.prototype.writeByte_s8j3t7$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 1) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeByte_s8j3t7$(v);
    this.addSize_za3lpa$(1);
  };
  BytePacketBuilderBase.prototype.writeDouble_14dthe$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 8) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeDouble_14dthe$(v);
    this.addSize_za3lpa$(8);
  };
  BytePacketBuilderBase.prototype.writeFloat_mx4ult$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 4) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeFloat_mx4ult$(v);
    this.addSize_za3lpa$(4);
  };
  function BytePacketBuilderBase$writeFully$lambda(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_0(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_359eei$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex(src))) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_0(offset, length, src));
      m_0.doFail();
    }
    if (length === 0)
      return;
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 2) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 1;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_359eei$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 2 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_1(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_2(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_0(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_nd5v6f$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_1(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_0(src))) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_2(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 4) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 2;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_nd5v6f$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 4 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_3(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_4(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_1(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_rfv6wg$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_3(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_1(src))) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_4(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 8) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 3;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_rfv6wg$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 8 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_5(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_6(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_2(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_kgymra$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_5(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_2(src))) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_6(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 4) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 2;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_kgymra$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 4 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_7(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_8(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_3(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_6icyh1$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_7(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_3(src))) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_8(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 8) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 3;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_6icyh1$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 8 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_9(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_10(closure$length) {
    return function () {
      return 'Not enough bytes available in src buffer to read ' + closure$length + ' bytes';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_bj0s3a$ = function (src, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_9(length));
      m.doFail();
    }
    if (!(length <= src.readRemaining)) {
      var m_0 = new require$ObjectLiteral(BytePacketBuilderBase$writeFully$lambda_10(length));
      m_0.doFail();
    }
    var a = src.readRemaining;
    var totalSize = Math_0.min(a, length);
    if (totalSize === 0)
      return;
    var remaining = totalSize;
    var tail = this.tail;
    if (!tail.canWrite()) {
      tail = this.appendNewBuffer();
    }
    do {
      var a_0 = tail.writeRemaining;
      var b = remaining;
      var size = Math_0.min(a_0, b);
      tail.writeFully_bj0s3a$(src, size);
      remaining = remaining - size | 0;
      if (remaining === 0)
        break;
      tail = this.appendNewBuffer();
    }
     while (true);
    this.addSize_za3lpa$(totalSize);
  };
  function BytePacketBuilderBase$fill$lambda(closure$n) {
    return function () {
      return "n shouldn't be negative: " + closure$n.toString();
    };
  }
  BytePacketBuilderBase.prototype.fill_3pq026$ = function (n, v) {
    if (!(n.compareTo_11rb$(L0) >= 0)) {
      var m = new require$ObjectLiteral(BytePacketBuilderBase$fill$lambda(n));
      m.doFail();
    }
    var rem = {v: n};
    writeLoop_tjk5n2$_0$break: do {
      if (!(rem.v.compareTo_11rb$(L0) > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem_0 = buffer.writeRemaining;
      do {
        if (rem_0 < 1) {
          buffer = this.appendNewBuffer();
          rem_0 = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = Kotlin.Long.fromInt(rem_0);
        var size = (a.compareTo_11rb$(n) <= 0 ? a : n).toInt();
        buffer_0.fill_3pq026$(Kotlin.Long.fromInt(size), v);
        rem.v = rem.v.subtract(Kotlin.Long.fromInt(size));
        var result = size;
        written = written + result | 0;
        rem_0 = rem_0 - result | 0;
        var predicate$result;
        predicate$result = rem.v.compareTo_11rb$(L0) > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  BytePacketBuilderBase.prototype.append_s8itvh$ = function (c) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 3) {
      buffer = this.appendNewBuffer();
    }
    var it = buffer;
    var v = c | 0;
    var putUtf8Char_txdfrb$_0$result;
    if (1 <= v && v <= 127) {
      it.writeByte_s8j3t7$(toByte(v));
      putUtf8Char_txdfrb$_0$result = 1;
    }
     else if (v > 2047) {
      it.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
      it.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
      it.writeByte_s8j3t7$(toByte(128 | v & 63));
      putUtf8Char_txdfrb$_0$result = 3;
    }
     else {
      it.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
      it.writeByte_s8j3t7$(toByte(128 | v & 63));
      putUtf8Char_txdfrb$_0$result = 2;
    }
    this.addSize_za3lpa$(putUtf8Char_txdfrb$_0$result);
    return this;
  };
  BytePacketBuilderBase.prototype.append_gw00v9$ = function (csq) {
    if (csq == null) {
      this.appendChars_pstj8j$_0('null', 0, 4);
    }
     else {
      this.appendChars_pstj8j$_0(csq, 0, csq.length);
    }
    return this;
  };
  BytePacketBuilderBase.prototype.append_ezbsdh$ = function (csq, start, end) {
    if (csq == null) {
      return this.append_ezbsdh$('null', start, end);
    }
    this.appendChars_pstj8j$_0(csq, start, end);
    return this;
  };
  BytePacketBuilderBase.prototype.writePacket_8awntw$ = function (p) {
    var tmp$;
    while (true) {
      tmp$ = p.steal_8be2vx$();
      if (tmp$ == null) {
        break;
      }
      var buffer = tmp$;
      this.last_g6eaik$(buffer);
    }
  };
  BytePacketBuilderBase.prototype.writePacket_eixyzu$ = function (p, n) {
    var tmp$;
    var remaining = {v: n};
    while (remaining.v > 0) {
      var headRemaining = p.headRemaining;
      if (headRemaining <= remaining.v) {
        remaining.v = remaining.v - headRemaining | 0;
        tmp$ = p.steal_8be2vx$();
        if (tmp$ == null) {
          throw new EOFException('Unexpected end of packet');
        }
        this.last_g6eaik$(tmp$);
      }
       else {
        var tmp$_0;
        var head = p.head;
        var before = {v: head.readRemaining};
        if (before.v < 1) {
          var $receiver = p.prepareRead_87ik6q$(1, head);
          var tmp$_1;
          before.v = (tmp$_1 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_1 : 0;
          tmp$_0 = $receiver;
        }
         else {
          tmp$_0 = head;
        }
        var buffer = tmp$_0;
        if (buffer != null) {
          this.writeFully_bj0s3a$(buffer, remaining.v);
          var after = buffer.readRemaining;
          var delta = before.v - after | 0;
          if (delta > 0) {
            p.headRemaining = p.headRemaining - delta | 0;
          }
          if (after === 0) {
            p.ensureNext_g6eaik$(buffer);
          }
        }
        break;
      }
    }
  };
  BytePacketBuilderBase.prototype.writePacket_o4mqn5$ = function (p, n) {
    var tmp$;
    var remaining = {v: n};
    while (remaining.v.compareTo_11rb$(L0) > 0) {
      var headRemaining = Kotlin.Long.fromInt(p.headRemaining);
      if (headRemaining.compareTo_11rb$(remaining.v) <= 0) {
        remaining.v = remaining.v.subtract(headRemaining);
        tmp$ = p.steal_8be2vx$();
        if (tmp$ == null) {
          throw new EOFException('Unexpected end of packet');
        }
        this.last_g6eaik$(tmp$);
      }
       else {
        var tmp$_0;
        var head = p.head;
        var before = {v: head.readRemaining};
        if (before.v < 1) {
          var $receiver = p.prepareRead_87ik6q$(1, head);
          var tmp$_1;
          before.v = (tmp$_1 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_1 : 0;
          tmp$_0 = $receiver;
        }
         else {
          tmp$_0 = head;
        }
        var buffer = tmp$_0;
        if (buffer != null) {
          this.writeFully_bj0s3a$(buffer, remaining.v.toInt());
          var after = buffer.readRemaining;
          var delta = before.v - after | 0;
          if (delta > 0) {
            p.headRemaining = p.headRemaining - delta | 0;
          }
          if (after === 0) {
            p.ensureNext_g6eaik$(buffer);
          }
        }
        break;
      }
    }
  };
  BytePacketBuilderBase.prototype.append_8chfmy$ = function (csq, start, end) {
    this.appendChars_s0z9z1$_0(csq, start, end);
    return this;
  };
  BytePacketBuilderBase.prototype.appendChars_pstj8j$_0 = function (csq, start, end) {
    var idx = start;
    if (idx >= end)
      return idx;
    var tail = this.tail;
    if (tail.canWrite()) {
      idx = tail.appendChars_3peag4$(csq, idx, end);
    }
    while (idx < end) {
      idx = this.appendNewBuffer().appendChars_3peag4$(csq, idx, end);
    }
    this._size = -1;
    return idx;
  };
  BytePacketBuilderBase.prototype.appendChars_s0z9z1$_0 = function (csq, start, end) {
    var idx = start;
    if (idx >= end)
      return idx;
    var tail = this.tail;
    if (tail.canWrite()) {
      idx = tail.appendChars_8chfmy$(csq, idx, end);
    }
    while (idx < end) {
      idx = this.appendNewBuffer().appendChars_8chfmy$(csq, idx, end);
    }
    this._size = -1;
    return idx;
  };
  BytePacketBuilderBase.prototype.writeStringUtf8_61zpoe$ = function (s) {
    this.append_ezbsdh$(s, 0, s.length);
  };
  BytePacketBuilderBase.prototype.writeStringUtf8_6bul2c$ = function (cs) {
    this.append_ezbsdh$(cs, 0, cs.length);
  };
  BytePacketBuilderBase.prototype.putUtf8Char_txdfrb$_0 = function ($receiver, v) {
    if (1 <= v && v <= 127) {
      $receiver.writeByte_s8j3t7$(toByte(v));
      return 1;
    }
     else if (v > 2047) {
      $receiver.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
      $receiver.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 3;
    }
     else {
      $receiver.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 2;
    }
  };
  BytePacketBuilderBase.prototype.prepareWriteHead_za3lpa$ = function (n) {
    if (this.tail.writeRemaining >= n)
      return this.tail;
    return this.appendNewBuffer();
  };
  BytePacketBuilderBase.prototype.afterHeadWrite = function () {
    this._size = -1;
  };
  BytePacketBuilderBase.prototype.reset = function () {
  };
  BytePacketBuilderBase.prototype.write_bxk1n6$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.BytePacketBuilderBase.write_bxk1n6$', function (size, block) {
    var buffer = this.tail;
    if (buffer.writeRemaining < size) {
      buffer = this.appendNewBuffer();
    }
    this.addSize_za3lpa$(block(buffer));
  });
  BytePacketBuilderBase.prototype.writeLoop_tjk5n2$_0 = function (size, predicate, block) {
    if (!predicate())
      return;
    var written = 0;
    var buffer = this.tail;
    var rem = buffer.writeRemaining;
    do {
      if (rem < size) {
        buffer = this.appendNewBuffer();
        rem = buffer.writeRemaining;
      }
      var result = block(buffer, rem);
      written = written + result | 0;
      rem = rem - result | 0;
    }
     while (predicate());
    this.addSize_za3lpa$(written);
  };
  BytePacketBuilderBase.prototype.addSize_za3lpa$ = function (n) {
    var size = this._size;
    if (size !== -1) {
      this._size = size + n | 0;
    }
  };
  BytePacketBuilderBase.prototype.appendNewBuffer = function () {
    var new_0 = this.pool.borrow();
    new_0.reserveEndGap_za3lpa$(IoBuffer$Companion_getInstance().ReservedSize);
    new_0.byteOrder = this.byteOrder;
    this.last_g6eaik$(new_0);
    return new_0;
  };
  BytePacketBuilderBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'BytePacketBuilderBase', interfaces: [Output, Appendable]};
  function readFully($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length - offset | 0;
    return $receiver.readFully_mj6st8$(dst, offset, length);
  }
  function discardExact($receiver, n) {
    var discarded = $receiver.discard_s8cxhz$(n);
    if (!equals(discarded, n)) {
      throw new EOFException('Only ' + discarded.toString() + ' bytes were discarded of ' + n.toString() + ' requested');
    }
  }
  function discardExact_0($receiver, n) {
    discardExact($receiver, Kotlin.Long.fromInt(n));
  }
  require$ObjectLiteral_0.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_0.prototype.constructor = require$ObjectLiteral_0;
  function require$ObjectLiteral_0(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_0.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [RequireFailureCapture]};
  function peekTo($receiver, destination, offset, min, max) {
    if (offset === void 0)
      offset = 0;
    if (min === void 0)
      min = 1;
    if (max === void 0)
      max = 2147483647;
    checkPeekTo(destination, offset, min, max);
    if (Kotlin.isType($receiver, IoBuffer)) {
      return peekToImpl($receiver, destination, offset, min, max);
    }
    if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      $receiver.prefetch_kcn2v3$(offset + min | 0);
      return $receiver.peekToImpl_6d2tql$(destination, offset, min, max);
    }
    throw UnsupportedOperationException_init('This only works for builtin Inputs and AbstractInput implementations');
  }
  function peekToImpl($receiver, destination, offset, min, max) {
    var readRemaining = $receiver.readRemaining;
    if (readRemaining === 0 || offset > readRemaining)
      return 0;
    var a = readRemaining - offset | 0;
    var b = destination.writeRemaining;
    var size = Math_0.min(a, b, max);
    $receiver.discardExact_za3lpa$(offset);
    $receiver.writeFully_bj0s3a$($receiver, size);
    $receiver.pushBack_za3lpa$(size + offset | 0);
    return size;
  }
  function checkPeekTo$lambda(closure$offset) {
    return function () {
      return "offset shouldn't be negative: " + closure$offset + '.';
    };
  }
  function checkPeekTo$lambda_0(closure$min) {
    return function () {
      return "min shouldn't be negative: " + closure$min + '.';
    };
  }
  function checkPeekTo$lambda_1(closure$max, closure$min) {
    return function () {
      return "max should't be less than min: max = " + closure$max + ', min = ' + closure$min + '.';
    };
  }
  function checkPeekTo$lambda_2(closure$min, closure$destination) {
    return function () {
      return 'Not enough free space in the destination buffer ' + ('to write the specified minimum number of bytes: min = ' + closure$min + ', free = ' + closure$destination.writeRemaining + '.');
    };
  }
  function checkPeekTo(destination, offset, min, max) {
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_0(checkPeekTo$lambda(offset));
      m.doFail();
    }
    if (!(min >= 0)) {
      var m_0 = new require$ObjectLiteral_0(checkPeekTo$lambda_0(min));
      m_0.doFail();
    }
    if (!(max >= min)) {
      var m_1 = new require$ObjectLiteral_0(checkPeekTo$lambda_1(max, min));
      m_1.doFail();
    }
    if (!(min <= destination.writeRemaining)) {
      var m_2 = new require$ObjectLiteral_0(checkPeekTo$lambda_2(min, destination));
      m_2.doFail();
    }
  }
  function writeFully_5($receiver, src, length) {
    if (length === void 0)
      length = src.readRemaining;
    $receiver.writeFully_bj0s3a$(src, length);
  }
  require$ObjectLiteral_1.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_1.prototype.constructor = require$ObjectLiteral_1;
  function require$ObjectLiteral_1(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_1.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [RequireFailureCapture]};
  function ByteReadPacketBase(head, remaining, pool) {
    ByteReadPacketBase$Companion_getInstance();
    if (remaining === void 0)
      remaining = remainingAll(head);
    this.head = head;
    this.pool = pool;
    setByteOrderForNonEmpty(this.head, ByteOrder$BIG_ENDIAN_getInstance());
    this.byteOrder_49ugxf$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.headRemaining = this.head.readRemaining;
    this.tailRemaining_vgafwz$_0 = remaining.subtract(Kotlin.Long.fromInt(this.headRemaining));
    this.noMoreChunksAvailable_hg7bja$_0 = false;
  }
  Object.defineProperty(ByteReadPacketBase.prototype, 'doNotImplementInputButExtendAbstractInputInstead', {get: function () {
    throw IllegalStateException_init('Should be never accessed.'.toString());
  }});
  Object.defineProperty(ByteReadPacketBase.prototype, 'byteOrder', {get: function () {
    return this.byteOrder_49ugxf$_0;
  }, set: function (newOrder) {
    this.byteOrder_49ugxf$_0 = newOrder;
    setByteOrderForNonEmpty(this.head, newOrder);
  }});
  Object.defineProperty(ByteReadPacketBase.prototype, 'remaining', {get: function () {
    return Kotlin.Long.fromInt(this.headRemaining).add(this.tailRemaining_vgafwz$_0);
  }});
  ByteReadPacketBase.prototype.getRemaining = function () {
    var $receiver = this.remaining;
    var b = L2147483647;
    return ($receiver.compareTo_11rb$(b) <= 0 ? $receiver : b).toInt();
  };
  ByteReadPacketBase.prototype.canRead = function () {
    return !equals(this.tailRemaining_vgafwz$_0, L0) || this.head.canRead();
  };
  ByteReadPacketBase.prototype.hasBytes_za3lpa$ = function (n) {
    return Kotlin.Long.fromInt(this.headRemaining).add(this.tailRemaining_vgafwz$_0).toNumber() >= n;
  };
  Object.defineProperty(ByteReadPacketBase.prototype, 'isEmpty', {get: function () {
    return this.headRemaining === 0 && equals(this.tailRemaining_vgafwz$_0, L0) && this.noMoreChunksAvailable_hg7bja$_0;
  }});
  Object.defineProperty(ByteReadPacketBase.prototype, 'isNotEmpty', {get: function () {
    return this.headRemaining > 0 || this.tailRemaining_vgafwz$_0.compareTo_11rb$(L0) > 0 || !this.noMoreChunksAvailable_hg7bja$_0;
  }});
  Object.defineProperty(ByteReadPacketBase.prototype, 'endOfInput', {get: function () {
    return this.isEmpty && (this.noMoreChunksAvailable_hg7bja$_0 || this.doFill_9kelf7$_0() == null);
  }});
  ByteReadPacketBase.prototype.copy = function () {
    return new ByteReadPacket_0(copyAll(this.head), this.remaining, this.pool);
  };
  ByteReadPacketBase.prototype.release = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head = empty;
      this.headRemaining = 0;
      this.tailRemaining_vgafwz$_0 = L0;
      releaseAll(head, this.pool);
    }
  };
  ByteReadPacketBase.prototype.close = function () {
    this.release();
    if (!this.noMoreChunksAvailable_hg7bja$_0) {
      this.noMoreChunksAvailable_hg7bja$_0 = true;
    }
    this.closeSource();
  };
  ByteReadPacketBase.prototype.stealAll_8be2vx$ = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    this.head = empty;
    this.headRemaining = 0;
    this.tailRemaining_vgafwz$_0 = L0;
    return head;
  };
  ByteReadPacketBase.prototype.steal_8be2vx$ = function () {
    var tmp$;
    var head = this.head;
    var next = head.next;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    var nextRemaining = (tmp$ = next != null ? next.readRemaining : null) != null ? tmp$ : 0;
    this.head = next != null ? next : empty;
    this.headRemaining = nextRemaining;
    this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
    head.next = null;
    return head;
  };
  ByteReadPacketBase.prototype.append_2fdm73$ = function (chain) {
    if (chain === IoBuffer$Companion_getInstance().Empty)
      return;
    var size = remainingAll(chain);
    if (this.head === IoBuffer$Companion_getInstance().Empty) {
      this.head = chain;
      this.headRemaining = chain.readRemaining;
      this.tailRemaining_vgafwz$_0 = size.subtract(Kotlin.Long.fromInt(this.headRemaining));
    }
     else {
      findTail(this.head).next = chain;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(size);
    }
    chain.byteOrder = this.byteOrder;
  };
  ByteReadPacketBase.prototype.tryWriteAppend_2fdm73$ = function (chain) {
    var tail = findTail(this.head);
    var size = chain.readRemaining;
    if (size === 0 || tail.writeRemaining < size)
      return false;
    tail.writeBufferAppend_ehtrw3$(chain, size);
    if (this.head === tail) {
      this.headRemaining = this.headRemaining + size | 0;
    }
     else {
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(Kotlin.Long.fromInt(size));
    }
    return true;
  };
  ByteReadPacketBase.prototype.readByte = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 1) {
      this.headRemaining = headRemaining - 1 | 0;
      return this.head.readByte();
    }
    return this.readByteSlow2_wryqcg$_0();
  };
  ByteReadPacketBase.prototype.readByteSlow2_wryqcg$_0 = function () {
    var head = this.head;
    var headRemaining = this.headRemaining;
    if (headRemaining === 1) {
      this.headRemaining = headRemaining - 1 | 0;
      var $receiver = head.readByte();
      this.ensureNext_g6eaik$(head);
      return $receiver;
    }
     else {
      return this.readByteSlow_bnprfe$_0(head);
    }
  };
  ByteReadPacketBase.prototype.readByteSlow_bnprfe$_0 = function (head) {
    if (this.ensureNext_g6eaik$(head) == null)
      throw new EOFException('One more byte required but reached end of input');
    return this.readByte();
  };
  ByteReadPacketBase.prototype.readShort = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(2, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(2);
    var rc = bb.readShort();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readFloat = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(4, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(4);
    var rc = bb.readFloat();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readDouble = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(8, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(8);
    var rc = bb.readDouble();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readInt = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 4) {
      this.headRemaining = headRemaining - 4 | 0;
      return this.head.readInt();
    }
    return this.readIntSlow_bjoftl$_0();
  };
  ByteReadPacketBase.prototype.readIntSlow_bjoftl$_0 = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(4, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(4);
    var rc = bb.readInt();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readLong = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 8) {
      this.headRemaining = headRemaining - 8 | 0;
      return this.head.readLong();
    }
    return this.readLongSlow_50ppke$_0();
  };
  ByteReadPacketBase.prototype.readLongSlow_50ppke$_0 = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(8, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(8);
    var rc = bb.readLong();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readAvailable_fqrh44$ = function (dst) {
    return this.readAvailable_mj6st8$(dst, 0, dst.length);
  };
  function ByteReadPacketBase$readAvailable$lambda(closure$offset) {
    return function () {
      return "offset shouldn't be negative: " + closure$offset;
    };
  }
  function ByteReadPacketBase$readAvailable$lambda_0(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function ByteReadPacketBase$readAvailable$lambda_1(closure$offset, closure$length, closure$dst) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') > dst.size (' + closure$dst.length + ')';
    };
  }
  ByteReadPacketBase.prototype.readAvailable_mj6st8$ = function (dst, offset, length) {
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda_0(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= dst.length)) {
      var m_1 = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda_1(offset, length, dst));
      m_1.doFail();
    }
    return this.readAsMuchAsPossible_v6e8td$_0(dst, offset, length, 0);
  };
  ByteReadPacketBase.prototype.readFully_mj6st8$ = function (dst, offset, length) {
    var rc = this.readAvailable_mj6st8$(dst, offset, length);
    if (rc !== length)
      throw new EOFException('Not enough data in packet to fill buffer: ' + (length - rc | 0) + ' more bytes required');
  };
  ByteReadPacketBase.prototype.discard_za3lpa$ = function (n) {
    return this.discardAsMuchAsPossible_njj9ev$_0(n, 0);
  };
  ByteReadPacketBase.prototype.discardExact_za3lpa$ = function (n) {
    if (this.discard_za3lpa$(n) !== n)
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  ByteReadPacketBase.prototype.read_wnvhpp$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.ByteReadPacketBase.read_wnvhpp$', function (block) {
    var tmp$;
    var head = this.head;
    var before = {v: head.readRemaining};
    if (before.v < 1) {
      var $receiver = this.prepareRead_87ik6q$(1, head);
      var tmp$_0;
      before.v = (tmp$_0 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_0 : 0;
      tmp$ = $receiver;
    }
     else {
      tmp$ = head;
    }
    var buffer = tmp$;
    if (buffer != null) {
      block(buffer);
      var after = buffer.readRemaining;
      var delta = before.v - after | 0;
      if (delta > 0) {
        this.headRemaining = this.headRemaining - delta | 0;
      }
      if (after === 0) {
        this.ensureNext_g6eaik$(buffer);
      }
    }
  });
  ByteReadPacketBase.prototype.read_exahdj$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.ByteReadPacketBase.read_exahdj$', function (n, block) {
    var tmp$;
    var head = this.head;
    var before = {v: head.readRemaining};
    if (before.v < n) {
      var $receiver = this.prepareRead_87ik6q$(n, head);
      var tmp$_0;
      before.v = (tmp$_0 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_0 : 0;
      tmp$ = $receiver;
    }
     else {
      tmp$ = head;
    }
    var buffer = tmp$;
    if (buffer != null) {
      block(buffer);
      var after = buffer.readRemaining;
      var delta = before.v - after | 0;
      if (delta > 0) {
        this.headRemaining = this.headRemaining - delta | 0;
      }
      if (after === 0) {
        this.ensureNext_g6eaik$(buffer);
      }
    }
  });
  ByteReadPacketBase.prototype.readFully_359eei$ = function (dst, offset, length) {
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_359eei$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc === -1)
            throw new EOFException('Unexpected EOF while reading ' + length + ' bytes');
          copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' short integers, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_359eei$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_359eei$(dst, offset, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_359eei$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_nd5v6f$ = function (dst, offset, length) {
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_nd5v6f$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc === -1)
            throw new EOFException('Unexpected EOF while read ' + length + ' short integers');
          copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' integers, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_nd5v6f$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_nd5v6f$(dst, offset, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_nd5v6f$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_rfv6wg$ = function (dst, offset, length) {
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_rfv6wg$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc === -1)
            throw new EOFException('Unexpected EOF while reading ' + length + ' long integers');
          copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' long integers, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_rfv6wg$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_rfv6wg$(dst, offset, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_rfv6wg$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_kgymra$ = function (dst, offset, length) {
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_kgymra$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc === -1)
            throw new EOFException('Unexpected EOF while read ' + length + ' float number');
          copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' float numbers, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_kgymra$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_kgymra$(dst, offset, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_kgymra$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_6icyh1$ = function (dst, offset, length) {
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_6icyh1$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc === -1)
            throw new EOFException('Unexpected EOF while reading ' + length + ' double float numbers');
          copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' double numbers, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_6icyh1$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_6icyh1$(dst, offset, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_6icyh1$(dst, offset, size);
    return size;
  };
  function ByteReadPacketBase$readFully$lambda(closure$length) {
    return function () {
      return 'Not enough free space in destination buffer to write ' + closure$length + ' bytes';
    };
  }
  ByteReadPacketBase.prototype.readFully_bj0s3a$$default = function (dst, length) {
    if (!(length <= dst.writeRemaining)) {
      var m = new require$ObjectLiteral_1(ByteReadPacketBase$readFully$lambda(length));
      m.doFail();
    }
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_bj0s3a$(dst, length - copied.v | 0);
          if (rc > 0)
            copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v !== length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' bytes, ' + copied.v + ' were copied');
    }
  };
  ByteReadPacketBase.prototype.readAvailable_bj0s3a$ = function (dst, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0)) {
      if (this.doFill_9kelf7$_0() == null)
        return -1;
      return this.readAvailable_bj0s3a$(dst, length);
    }
    var b = Kotlin.Long.fromInt(length);
    var c = Kotlin.Long.fromInt(dst.writeRemaining);
    var b_0 = b.compareTo_11rb$(c) <= 0 ? b : c;
    var size = (remaining.compareTo_11rb$(b_0) <= 0 ? remaining : b_0).toInt();
    this.readFully_bj0s3a$(dst, size);
    return size;
  };
  ByteReadPacketBase.prototype.tryPeek = function () {
    var tmp$, tmp$_0;
    var head = this.head;
    if (this.headRemaining > 0) {
      return head.tryPeek();
    }
    if (equals(this.tailRemaining_vgafwz$_0, L0) && this.noMoreChunksAvailable_hg7bja$_0)
      return -1;
    return (tmp$_0 = (tmp$ = this.prepareRead_87ik6q$(1, head)) != null ? tmp$.tryPeek() : null) != null ? tmp$_0 : -1;
  };
  ByteReadPacketBase.prototype.peekTo_g6eaik$ = function (buffer) {
    return peekTo(this, buffer);
  };
  ByteReadPacketBase.prototype.discard_s8cxhz$ = function (n) {
    var a = L2147483647;
    return Kotlin.Long.fromInt(this.discardAsMuchAsPossible_njj9ev$_0((a.compareTo_11rb$(n) <= 0 ? a : n).toInt(), 0));
  };
  function ByteReadPacketBase$readCbuf$ObjectLiteral(closure$cbuf, closure$off) {
    this.closure$cbuf = closure$cbuf;
    this.idx_0 = closure$off;
  }
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    this.closure$cbuf[tmp$ = this.idx_0, this.idx_0 = tmp$ + 1 | 0, tmp$] = c;
    return this;
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_gw00v9$ = function (csq) {
    var tmp$, tmp$_0;
    if (typeof csq === 'string') {
      getCharsInternal(csq, this.closure$cbuf, this.idx_0);
      this.idx_0 = this.idx_0 + csq.length | 0;
    }
     else if (csq != null) {
      tmp$ = csq.length;
      for (var i = 0; i < tmp$; i++) {
        this.closure$cbuf[tmp$_0 = this.idx_0, this.idx_0 = tmp$_0 + 1 | 0, tmp$_0] = csq.charCodeAt(i);
      }
    }
    return this;
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_ezbsdh$ = function (csq, start, end) {
    throw UnsupportedOperationException_init_0();
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Appendable]};
  ByteReadPacketBase.prototype.readCbuf_uc2sr1$ = function (cbuf, off, len) {
    if (this.isEmpty)
      return -1;
    var out = new ByteReadPacketBase$readCbuf$ObjectLiteral(cbuf, off);
    return this.readText_5dvtqg$(out, 0, len);
  };
  ByteReadPacketBase.prototype.readText_5dvtqg$ = function (out, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (Kotlin.Long.fromInt(max).compareTo_11rb$(this.remaining) >= 0) {
      var s = readTextExactBytes_0(this, this.remaining.toInt());
      out.append_gw00v9$(s);
      return s.length;
    }
    return this.readASCII_2tb1j4$_0(out, min, max);
  };
  ByteReadPacketBase.prototype.readTextExact_a5kscm$ = function (out, exactCharacters) {
    this.readText_5dvtqg$(out, exactCharacters, exactCharacters);
  };
  ByteReadPacketBase.prototype.readText_vux9f0$ = function (min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (min === 0 && (max === 0 || this.isEmpty))
      return '';
    var remaining = this.remaining;
    if (remaining.toNumber() > 0 && Kotlin.Long.fromInt(max).compareTo_11rb$(remaining) >= 0)
      return readTextExactBytes_0(this, remaining.toInt());
    var $receiver = StringBuilder_init(coerceAtMost(coerceAtLeast(min, 16), max));
    this.readASCII_2tb1j4$_0($receiver, min, max);
    return $receiver.toString();
  };
  ByteReadPacketBase.prototype.readTextExact_za3lpa$ = function (exactCharacters) {
    return this.readText_vux9f0$(exactCharacters, exactCharacters);
  };
  ByteReadPacketBase.prototype.readASCII_2tb1j4$_0 = function (out, min, max) {
    if (max === 0 && min === 0)
      return 0;
    else if (this.isEmpty)
      if (min === 0)
        return 0;
      else
        this.atLeastMinCharactersRequire_teiiy$_0(min);
    else if (max < min)
      this.minShouldBeLess_xcti56$_0(min, max);
    var copied = {v: 0};
    var utf8 = {v: false};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        loop_label: do {
          var buffer = current;
          var block$result;
          var decodeASCII$result;
          decodeASCII$break: do {
            var tmp$_1;
            tmp$_1 = buffer.readRemaining;
            for (var i = 0; i < tmp$_1; i++) {
              var v = buffer.readByte() & 255;
              var tmp$_2 = (v & 128) !== 0;
              if (!tmp$_2) {
                var it = toBoxedChar(toChar(v));
                var consumer$result;
                if (copied.v === max) {
                  consumer$result = false;
                }
                 else {
                  out.append_s8itvh$(unboxChar(it));
                  copied.v = copied.v + 1 | 0;
                  consumer$result = true;
                }
                tmp$_2 = !consumer$result;
              }
              if (tmp$_2) {
                buffer.pushBack_za3lpa$(1);
                decodeASCII$result = false;
                break decodeASCII$break;
              }
            }
            decodeASCII$result = true;
          }
           while (false);
          var rc = decodeASCII$result;
          if (rc) {
            block$result = true;
          }
           else if (copied.v === max) {
            block$result = false;
          }
           else {
            utf8.v = true;
            block$result = false;
          }
          if (!block$result) {
            break loop_label;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (utf8.v) {
      return copied.v + this.readUtf8_ofs0ri$_0(out, min - copied.v | 0, max - copied.v | 0) | 0;
    }
    if (copied.v < min)
      this.prematureEndOfStreamChars_ff4hv3$_0(min, copied.v);
    return copied.v;
  };
  ByteReadPacketBase.prototype.peekToImpl_6d2tql$ = function (destination, offset, min, max) {
    var tmp$;
    var current = this.head;
    var copied = 0;
    var skip = offset;
    while (copied < min) {
      var chunkSize = current.readRemaining;
      if (chunkSize > skip) {
        var a = chunkSize - skip | 0;
        var b = max - copied | 0;
        var size = Math_0.min(a, b);
        current.readFully_bj0s3a$(destination, size);
        skip = 0;
        copied = copied + size | 0;
      }
       else {
        skip = skip - chunkSize | 0;
      }
      tmp$ = current.next;
      if (tmp$ == null) {
        break;
      }
      current = tmp$;
    }
    return copied;
  };
  ByteReadPacketBase.prototype.atLeastMinCharactersRequire_teiiy$_0 = function (min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  };
  ByteReadPacketBase.prototype.minShouldBeLess_xcti56$_0 = function (min, max) {
    throw IllegalArgumentException_init('min should be less or equal to max but min = ' + min + ', max = ' + max);
  };
  ByteReadPacketBase.prototype.prematureEndOfStreamChars_ff4hv3$_0 = function (min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  };
  ByteReadPacketBase.prototype.prematureEndOfStream_f12g7w$_0 = function (size) {
    throw new MalformedUTF8InputException('Premature end of stream: expected ' + size + ' bytes');
  };
  ByteReadPacketBase.prototype.readUtf8_ofs0ri$_0 = function (out, min, max) {
    var copied = {v: 0};
    takeWhileSize$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      try {
        loop_label: do {
          var before = current.readRemaining;
          var after;
          if (before >= size) {
            try {
              var buffer = current;
              var block$result;
              var decodeUTF8$result;
              decodeUTF8$break: do {
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                while (buffer.canRead()) {
                  var v = buffer.readByte() & 255;
                  if ((v & 128) === 0) {
                    if (byteCount !== 0)
                      malformedByteCount(byteCount);
                    var it = toBoxedChar(toChar(v));
                    var consumer$result;
                    if (copied.v === max) {
                      consumer$result = false;
                    }
                     else {
                      out.append_s8itvh$(unboxChar(it));
                      copied.v = copied.v + 1 | 0;
                      consumer$result = true;
                    }
                    if (!consumer$result) {
                      buffer.pushBack_za3lpa$(1);
                      decodeUTF8$result = -1;
                      break decodeUTF8$break;
                    }
                  }
                   else if (byteCount === 0) {
                    var mask = 128;
                    value = v;
                    for (var i = 1; i <= 6; i++) {
                      if ((value & mask) !== 0) {
                        value = value & ~mask;
                        mask = mask >> 1;
                        byteCount = byteCount + 1 | 0;
                      }
                       else {
                        break;
                      }
                    }
                    lastByteCount = byteCount;
                    byteCount = byteCount - 1 | 0;
                    if (byteCount > buffer.readRemaining) {
                      buffer.pushBack_za3lpa$(1);
                      decodeUTF8$result = lastByteCount;
                      break decodeUTF8$break;
                    }
                  }
                   else {
                    value = value << 6 | v & 127;
                    byteCount = byteCount - 1 | 0;
                    if (byteCount === 0) {
                      if (isBmpCodePoint(value)) {
                        var it_0 = toBoxedChar(toChar(value));
                        var consumer$result_0;
                        if (copied.v === max) {
                          consumer$result_0 = false;
                        }
                         else {
                          out.append_s8itvh$(unboxChar(it_0));
                          copied.v = copied.v + 1 | 0;
                          consumer$result_0 = true;
                        }
                        if (!consumer$result_0) {
                          buffer.pushBack_za3lpa$(lastByteCount);
                          decodeUTF8$result = -1;
                          break decodeUTF8$break;
                        }
                      }
                       else if (!isValidCodePoint(value)) {
                        malformedCodePoint(value);
                      }
                       else {
                        var it_1 = toBoxedChar(toChar(highSurrogate(value)));
                        var consumer$result_1;
                        if (copied.v === max) {
                          consumer$result_1 = false;
                        }
                         else {
                          out.append_s8itvh$(unboxChar(it_1));
                          copied.v = copied.v + 1 | 0;
                          consumer$result_1 = true;
                        }
                        var tmp$_1 = !consumer$result_1;
                        if (!tmp$_1) {
                          var it_2 = toBoxedChar(toChar(lowSurrogate(value)));
                          var consumer$result_2;
                          if (copied.v === max) {
                            consumer$result_2 = false;
                          }
                           else {
                            out.append_s8itvh$(unboxChar(it_2));
                            copied.v = copied.v + 1 | 0;
                            consumer$result_2 = true;
                          }
                          tmp$_1 = !consumer$result_2;
                        }
                        if (tmp$_1) {
                          buffer.pushBack_za3lpa$(lastByteCount);
                          decodeUTF8$result = -1;
                          break decodeUTF8$break;
                        }
                      }
                      value = 0;
                    }
                  }
                }
                decodeUTF8$result = 0;
              }
               while (false);
              var size_0 = decodeUTF8$result;
              if (size_0 === 0) {
                block$result = 1;
              }
               else if (size_0 > 0) {
                block$result = size_0;
              }
               else {
                block$result = 0;
              }
              size = block$result;
            }
            finally {
              after = current.readRemaining;
            }
          }
           else {
            after = before;
          }
          release = false;
          if (after === 0)
            tmp$_0 = prepareReadNextHead(this, current);
          else if (after < size || current.endGap < IoBuffer.Companion.ReservedSize) {
            completeReadHead(this, current);
            tmp$_0 = prepareReadFirstHead(this, size);
          }
           else
            tmp$_0 = current;
          var next = tmp$_0;
          if (next == null) {
            release = false;
            break loop_label;
          }
          current = next;
          release = true;
        }
         while (size > 0);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
    if (copied.v < min)
      this.prematureEndOfStreamChars_ff4hv3$_0(min, copied.v);
    return copied.v;
  };
  ByteReadPacketBase.prototype.discardAsMuchAsPossible_njj9ev$_0 = function (n, skipped) {
    var tmp$;
    if (n === 0)
      return skipped;
    tmp$ = this.prepareRead_87ik6q$(1, this.head);
    if (tmp$ == null) {
      return skipped;
    }
    var current = tmp$;
    var a = current.readRemaining;
    var size = Math_0.min(a, n);
    current.discardExact_za3lpa$(size);
    this.headRemaining = this.headRemaining - size | 0;
    this.afterRead_erddk1$_0();
    return this.discardAsMuchAsPossible_njj9ev$_0(n - size | 0, skipped + size | 0);
  };
  ByteReadPacketBase.prototype.readAsMuchAsPossible_v6e8td$_0 = function (array, offset, length, copied) {
    var tmp$, tmp$_0;
    if (length === 0)
      return copied;
    tmp$ = this.prepareRead_87ik6q$(1, this.head);
    if (tmp$ == null) {
      return copied;
    }
    var current = tmp$;
    var b = current.readRemaining;
    var size = Math_0.min(length, b);
    current.readFully_mj6st8$(array, offset, size);
    this.headRemaining = this.headRemaining - size | 0;
    if (size !== length || current.readRemaining === 0) {
      this.afterRead_erddk1$_0();
      tmp$_0 = this.readAsMuchAsPossible_v6e8td$_0(array, offset + size | 0, length - size | 0, copied + size | 0);
    }
     else {
      tmp$_0 = copied + size | 0;
    }
    return tmp$_0;
  };
  ByteReadPacketBase.prototype.readN_qe8g6p$_0 = function (n, block) {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(n, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(n);
    var rc = block(bb);
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.notEnoughBytesAvailable_to1ln8$_0 = function (n) {
    throw new EOFException('Not enough data in packet (' + this.remaining.toString() + ') to read ' + n + ' byte(s)');
  };
  ByteReadPacketBase.prototype.updateHeadRemaining_za3lpa$ = function (remaining) {
    this.headRemaining = remaining;
  };
  ByteReadPacketBase.prototype.prepareReadHead_za3lpa$ = function (minSize) {
    return this.prepareRead_87ik6q$(minSize, this.head);
  };
  ByteReadPacketBase.prototype.ensureNextHead_g6eaik$ = function (current) {
    return this.ensureNext_g6eaik$(current);
  };
  ByteReadPacketBase.prototype.ensureNext_g6eaik$ = function (current) {
    return this.ensureNext_o27uys$_0(current, IoBuffer$Companion_getInstance().Empty);
  };
  ByteReadPacketBase.prototype.fixGapAfterRead_g6eaik$ = function (current) {
    var tmp$;
    tmp$ = current.next;
    if (tmp$ == null) {
      return this.fixGapAfterReadFallback_bunytg$_0(current);
    }
    var next = tmp$;
    var remaining = current.readRemaining;
    var b = IoBuffer$Companion_getInstance().ReservedSize - current.endGap | 0;
    var overrunSize = Math_0.min(remaining, b);
    if (next.startGap < overrunSize)
      return this.fixGapAfterReadFallback_bunytg$_0(current);
    next.restoreStartGap_kcn2v3$(overrunSize);
    if (remaining > overrunSize) {
      current.restoreEndGap_kcn2v3$(overrunSize);
      this.headRemaining = remaining - overrunSize | 0;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(Kotlin.Long.fromInt(overrunSize));
    }
     else {
      this.head = next;
      var nextSize = next.readRemaining;
      this.headRemaining = nextSize;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextSize - overrunSize | 0));
      current.release_cqjh9i$(this.pool);
    }
  };
  ByteReadPacketBase.prototype.fixGapAfterReadFallback_bunytg$_0 = function (current) {
    if (this.noMoreChunksAvailable_hg7bja$_0) {
      this.headRemaining = current.readRemaining;
      this.tailRemaining_vgafwz$_0 = L0;
      return;
    }
    var size = current.readRemaining;
    var b = IoBuffer$Companion_getInstance().ReservedSize - current.endGap | 0;
    var overrun = Math_0.min(size, b);
    if (size > overrun) {
      this.fixGapAfterReadFallbackUnreserved_lawnct$_0(current, size, overrun);
    }
     else {
      var new_0 = this.pool.borrow();
      new_0.reserveEndGap_za3lpa$(IoBuffer$Companion_getInstance().ReservedSize);
      new_0.next = current.next;
      new_0.writeBufferAppend_ehtrw3$(current, size);
      this.head = new_0;
      this.headRemaining = size;
      this.tailRemaining_vgafwz$_0 = L0;
    }
    current.release_cqjh9i$(this.pool);
  };
  ByteReadPacketBase.prototype.fixGapAfterReadFallbackUnreserved_lawnct$_0 = function (current, size, overrun) {
    var chunk1 = this.pool.borrow();
    var chunk2 = this.pool.borrow();
    chunk1.reserveEndGap_za3lpa$(IoBuffer$Companion_getInstance().ReservedSize);
    chunk2.reserveEndGap_za3lpa$(IoBuffer$Companion_getInstance().ReservedSize);
    chunk1.next = chunk2;
    chunk2.next = current.next;
    chunk1.writeBufferAppend_ehtrw3$(current, size - overrun | 0);
    chunk2.writeBufferAppend_ehtrw3$(current, overrun);
    this.head = chunk1;
    this.headRemaining = chunk1.readRemaining;
    this.tailRemaining_vgafwz$_0 = Kotlin.Long.fromInt(chunk2.readRemaining);
  };
  ByteReadPacketBase.prototype.ensureNext_o27uys$_0 = function (current, empty) {
    var tmp$;
    if (current === empty) {
      return this.doFill_9kelf7$_0();
    }
    var next = current.next;
    current.release_cqjh9i$(this.pool);
    if (next == null) {
      this.headRemaining = 0;
      this.tailRemaining_vgafwz$_0 = L0;
      this.head = empty;
      tmp$ = this.ensureNext_o27uys$_0(empty, empty);
    }
     else if (next.canRead()) {
      this.head = next;
      next.byteOrder = this.byteOrder;
      var nextRemaining = next.readRemaining;
      this.headRemaining = nextRemaining;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
      tmp$ = next;
    }
     else
      tmp$ = this.ensureNext_o27uys$_0(next, empty);
    return tmp$;
  };
  ByteReadPacketBase.prototype.markNoMoreChunksAvailable_8be2vx$ = function () {
    if (!this.noMoreChunksAvailable_hg7bja$_0) {
      this.noMoreChunksAvailable_hg7bja$_0 = true;
    }
  };
  ByteReadPacketBase.prototype.doFill_9kelf7$_0 = function () {
    if (this.noMoreChunksAvailable_hg7bja$_0)
      return null;
    var chunk = this.fill();
    if (chunk == null) {
      this.noMoreChunksAvailable_hg7bja$_0 = true;
      return null;
    }
    this.appendView_fjh6je$_0(chunk);
    return chunk;
  };
  function ByteReadPacketBase$appendView$lambda() {
    throw IllegalStateException_init('It should be no tail remaining bytes if current tail is EmptyBuffer');
  }
  ByteReadPacketBase.prototype.appendView_fjh6je$_0 = function (chunk) {
    var tmp$, tmp$_0;
    var tail = findTail(this.head);
    if (tail === IoBuffer$Companion_getInstance().Empty) {
      this.head = chunk;
      chunk.byteOrder = this.byteOrder;
      if (!equals(this.tailRemaining_vgafwz$_0, L0)) {
        var m = new require$ObjectLiteral_1(ByteReadPacketBase$appendView$lambda);
        m.doFail();
      }
      this.headRemaining = chunk.readRemaining;
      this.tailRemaining_vgafwz$_0 = (tmp$_0 = (tmp$ = chunk.next) != null ? remainingAll(tmp$) : null) != null ? tmp$_0 : L0;
    }
     else {
      tail.next = chunk;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(remainingAll(chunk));
    }
  };
  ByteReadPacketBase.prototype.prepareRead_kcn2v3$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.ByteReadPacketBase.prepareRead_kcn2v3$', function (minSize) {
    return this.prepareRead_87ik6q$(minSize, this.head);
  });
  ByteReadPacketBase.prototype.prepareRead_87ik6q$ = function (minSize, head) {
    var tmp$, tmp$_0;
    var headSize = this.headRemaining;
    if (headSize >= minSize)
      return head;
    tmp$_0 = (tmp$ = head.next) != null ? tmp$ : this.doFill_9kelf7$_0();
    if (tmp$_0 == null) {
      return null;
    }
    var next = tmp$_0;
    next.byteOrder = this.byteOrder;
    if (headSize === 0) {
      if (head !== IoBuffer$Companion_getInstance().Empty) {
        this.releaseHead_2fdm73$(head);
      }
      return this.prepareRead_87ik6q$(minSize, next);
    }
     else {
      var before = next.readRemaining;
      head.writeBufferAppend_ehtrw3$(next, minSize - headSize | 0);
      var after = next.readRemaining;
      this.headRemaining = head.readRemaining;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(before - after | 0));
      if (after === 0) {
        head.next = next.next;
        next.release_cqjh9i$(this.pool);
      }
    }
    if (head.readRemaining >= minSize)
      return head;
    if (minSize > IoBuffer$Companion_getInstance().ReservedSize)
      this.minSizeIsTooBig_uba618$_0(minSize);
    return this.prepareRead_87ik6q$(minSize, head);
  };
  ByteReadPacketBase.prototype.prefetch_kcn2v3$ = function (size) {
    if (this.headRemaining >= size)
      return;
    var head = this.head;
    var currentSize = remainingAll(head);
    if (currentSize.toNumber() >= size || this.noMoreChunksAvailable_hg7bja$_0)
      return;
    if (head === IoBuffer$Companion_getInstance().Empty) {
      this.doFill_9kelf7$_0();
      return this.prefetch_kcn2v3$(size);
    }
    this.prefetchLoop_jjeiej$_0(size, currentSize, head);
  };
  ByteReadPacketBase.prototype.prefetchLoop_jjeiej$_0 = function (size, currentSize0, head) {
    var tail = findTail(head);
    var currentSize = currentSize0;
    var tailRemaining = this.tailRemaining_vgafwz$_0;
    do {
      var chunk = this.fill();
      if (chunk == null) {
        this.noMoreChunksAvailable_hg7bja$_0 = true;
        break;
      }
      var chunkSize = chunk.readRemaining;
      tail.next = chunk;
      tailRemaining = tailRemaining.add(Kotlin.Long.fromInt(chunkSize));
      currentSize = currentSize.add(Kotlin.Long.fromInt(chunkSize));
      tail = chunk;
    }
     while (currentSize.toNumber() < size);
    this.tailRemaining_vgafwz$_0 = tailRemaining;
  };
  ByteReadPacketBase.prototype.minSizeIsTooBig_uba618$_0 = function (minSize) {
    throw IllegalStateException_init('minSize of ' + minSize + ' is too big (should be less than ' + IoBuffer$Companion_getInstance().ReservedSize);
  };
  ByteReadPacketBase.prototype.afterRead_erddk1$_0 = function () {
    var head = this.head;
    if (head.readRemaining === 0) {
      this.releaseHead_2fdm73$(head);
    }
  };
  ByteReadPacketBase.prototype.releaseHead_2fdm73$ = function (head) {
    var tmp$;
    var next = (tmp$ = head.next) != null ? tmp$ : IoBuffer$Companion_getInstance().Empty;
    this.head = next;
    var nextRemaining = next.readRemaining;
    this.headRemaining = nextRemaining;
    this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
    head.release_cqjh9i$(this.pool);
    return next;
  };
  function ByteReadPacketBase$Companion() {
    ByteReadPacketBase$Companion_instance = this;
    this.ReservedSize = IoBuffer$Companion_getInstance().ReservedSize;
  }
  Object.defineProperty(ByteReadPacketBase$Companion.prototype, 'Empty', {get: function () {
    return ByteReadPacket$Companion_getInstance().Empty;
  }});
  ByteReadPacketBase$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ByteReadPacketBase$Companion_instance = null;
  function ByteReadPacketBase$Companion_getInstance() {
    if (ByteReadPacketBase$Companion_instance === null) {
      new ByteReadPacketBase$Companion();
    }
    return ByteReadPacketBase$Companion_instance;
  }
  ByteReadPacketBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'ByteReadPacketBase', interfaces: [Input]};
  function setByteOrderForNonEmpty($receiver, newByteOrder) {
    if ($receiver.canRead()) {
      $receiver.byteOrder = newByteOrder;
    }
  }
  function readBytes($receiver, n) {
    if (n === void 0) {
      var $receiver_0 = $receiver.remaining;
      var message = 'Unable to convert to a ByteArray: packet is too big';
      if ($receiver_0.compareTo_11rb$(L2147483647) > 0)
        throw IllegalArgumentException_init(message);
      n = $receiver_0.toInt();
    }
    var $receiver_1 = new Int8Array(n);
    $receiver.readFully_mj6st8$($receiver_1, 0, n);
    return $receiver_1;
  }
  function readBytes_1($receiver) {
    return readBytesOf($receiver);
  }
  function readBytesOf($receiver, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (min === max) {
      var $receiver_0 = new Int8Array(min);
      $receiver.readFully_mj6st8$($receiver_0, 0, min);
      return $receiver_0;
    }
     else {
      var array = new Int8Array(coerceAtLeast_0(coerceAtMost_0(Kotlin.Long.fromInt(max), sizeEstimate($receiver)), Kotlin.Long.fromInt(min)).toInt());
      var size = 0;
      while (size < max) {
        var b = array.length;
        var partSize = Math_0.min(max, b) - size | 0;
        var rc = $receiver.readAvailable_mj6st8$(array, size, partSize);
        if (rc <= 0)
          break;
        size = size + rc | 0;
        if (array.length === size) {
          array = copyOf(array, size * 2 | 0);
        }
      }
      if (size < min) {
        throw new EOFException('Not enough bytes available to read ' + min + ' bytes: ' + (min - size | 0) + ' more required');
      }
      return size === array.length ? array : copyOf(array, size);
    }
  }
  function readText_2($receiver, charset, max) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0)
      max = 2147483647;
    return decode(charset.newDecoder(), $receiver, max);
  }
  function readTextExactBytes_0($receiver, bytesCount, charset) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    return decodeExactBytes(charset.newDecoder(), $receiver, bytesCount);
  }
  function RequireFailureCapture() {
  }
  RequireFailureCapture.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequireFailureCapture', interfaces: []};
  function Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$decoded = void 0;
    this.local$size = void 0;
    this.local$cr = void 0;
    this.local$end = void 0;
    this.local$out = out_0;
    this.local$limit = limit_0;
    this.local$nextChunk = nextChunk_0;
  }
  Coroutine$decodeUTF8LineLoopSuspend.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$decodeUTF8LineLoopSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeUTF8LineLoopSuspend.prototype.constructor = Coroutine$decodeUTF8LineLoopSuspend;
  Coroutine$decodeUTF8LineLoopSuspend.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$decoded = {v: 0};
            this.local$size = {v: 1};
            this.local$cr = {v: false};
            this.local$end = {v: false};
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$end.v || this.local$size.v === 0) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$nextChunk(this.local$size.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var chunk = this.local$tmp$;
            takeWhileSize$break: do {
              var tmp$, tmp$_0;
              var release = true;
              tmp$ = prepareReadFirstHead(chunk, 1);
              if (tmp$ == null) {
                break takeWhileSize$break;
              }
              var current = tmp$;
              var size = 1;
              try {
                loop_label: do {
                  var before = current.readRemaining;
                  var after;
                  if (before >= size) {
                    try {
                      var buffer = current;
                      var skip = {v: 0};
                      var decodeUTF8$result;
                      decodeUTF8$break: do {
                        var byteCount = 0;
                        var value = 0;
                        var lastByteCount = 0;
                        loop_label_0: while (buffer.canRead()) {
                          var v = buffer.readByte() & 255;
                          if ((v & 128) === 0) {
                            if (byteCount !== 0)
                              malformedByteCount(byteCount);
                            var ch = toBoxedChar(toChar(v));
                            var consumer$result;
                            consumer$break: do {
                              switch (unboxChar(ch)) {
                                case 13:
                                  if (this.local$cr.v) {
                                    this.local$end.v = true;
                                    consumer$result = false;
                                    break consumer$break;
                                  }

                                  this.local$cr.v = true;
                                  consumer$result = true;
                                  break consumer$break;
                                case 10:
                                  this.local$end.v = true;
                                  skip.v = 1;
                                  consumer$result = false;
                                  break consumer$break;
                                default:if (this.local$cr.v) {
                                    this.local$end.v = true;
                                    consumer$result = false;
                                    break consumer$break;
                                  }

                                  if (this.local$decoded.v === this.local$limit) {
                                    throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                  }

                                  this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                  this.local$out.append_s8itvh$(unboxChar(ch));
                                  consumer$result = true;
                                  break consumer$break;
                              }
                            }
                             while (false);
                            if (!consumer$result) {
                              buffer.pushBack_za3lpa$(1);
                              decodeUTF8$result = -1;
                              break decodeUTF8$break;
                            }
                          }
                           else if (byteCount === 0) {
                            var mask = 128;
                            value = v;
                            for (var i = 1; i <= 6; i++) {
                              if ((value & mask) !== 0) {
                                value = value & ~mask;
                                mask = mask >> 1;
                                byteCount = byteCount + 1 | 0;
                              }
                               else {
                                break;
                              }
                            }
                            lastByteCount = byteCount;
                            byteCount = byteCount - 1 | 0;
                            if (byteCount > buffer.readRemaining) {
                              buffer.pushBack_za3lpa$(1);
                              decodeUTF8$result = lastByteCount;
                              break decodeUTF8$break;
                            }
                          }
                           else {
                            value = value << 6 | v & 127;
                            byteCount = byteCount - 1 | 0;
                            if (byteCount === 0) {
                              if (isBmpCodePoint(value)) {
                                var ch_0 = toBoxedChar(toChar(value));
                                var consumer$result_0;
                                consumer$break: do {
                                  switch (unboxChar(ch_0)) {
                                    case 13:
                                      if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_0 = false;
                                        break consumer$break;
                                      }

                                      this.local$cr.v = true;
                                      consumer$result_0 = true;
                                      break consumer$break;
                                    case 10:
                                      this.local$end.v = true;
                                      skip.v = 1;
                                      consumer$result_0 = false;
                                      break consumer$break;
                                    default:if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_0 = false;
                                        break consumer$break;
                                      }

                                      if (this.local$decoded.v === this.local$limit) {
                                        throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                      }

                                      this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                      this.local$out.append_s8itvh$(unboxChar(ch_0));
                                      consumer$result_0 = true;
                                      break consumer$break;
                                  }
                                }
                                 while (false);
                                if (!consumer$result_0) {
                                  buffer.pushBack_za3lpa$(lastByteCount);
                                  decodeUTF8$result = -1;
                                  break decodeUTF8$break;
                                }
                              }
                               else if (!isValidCodePoint(value)) {
                                malformedCodePoint(value);
                              }
                               else {
                                var ch_1 = toBoxedChar(toChar(highSurrogate(value)));
                                var consumer$result_1;
                                consumer$break: do {
                                  switch (unboxChar(ch_1)) {
                                    case 13:
                                      if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_1 = false;
                                        break consumer$break;
                                      }

                                      this.local$cr.v = true;
                                      consumer$result_1 = true;
                                      break consumer$break;
                                    case 10:
                                      this.local$end.v = true;
                                      skip.v = 1;
                                      consumer$result_1 = false;
                                      break consumer$break;
                                    default:if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_1 = false;
                                        break consumer$break;
                                      }

                                      if (this.local$decoded.v === this.local$limit) {
                                        throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                      }

                                      this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                      this.local$out.append_s8itvh$(unboxChar(ch_1));
                                      consumer$result_1 = true;
                                      break consumer$break;
                                  }
                                }
                                 while (false);
                                var tmp$_1 = !consumer$result_1;
                                if (!tmp$_1) {
                                  var ch_2 = toBoxedChar(toChar(lowSurrogate(value)));
                                  var consumer$result_2;
                                  consumer$break: do {
                                    switch (unboxChar(ch_2)) {
                                      case 13:
                                        if (this.local$cr.v) {
                                          this.local$end.v = true;
                                          consumer$result_2 = false;
                                          break consumer$break;
                                        }

                                        this.local$cr.v = true;
                                        consumer$result_2 = true;
                                        break consumer$break;
                                      case 10:
                                        this.local$end.v = true;
                                        skip.v = 1;
                                        consumer$result_2 = false;
                                        break consumer$break;
                                      default:if (this.local$cr.v) {
                                          this.local$end.v = true;
                                          consumer$result_2 = false;
                                          break consumer$break;
                                        }

                                        if (this.local$decoded.v === this.local$limit) {
                                          throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                        }

                                        this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                        this.local$out.append_s8itvh$(unboxChar(ch_2));
                                        consumer$result_2 = true;
                                        break consumer$break;
                                    }
                                  }
                                   while (false);
                                  tmp$_1 = !consumer$result_2;
                                }
                                if (tmp$_1) {
                                  buffer.pushBack_za3lpa$(lastByteCount);
                                  decodeUTF8$result = -1;
                                  break decodeUTF8$break;
                                }
                              }
                              value = 0;
                            }
                          }
                        }
                        decodeUTF8$result = 0;
                      }
                       while (false);
                      this.local$size.v = decodeUTF8$result;
                      if (skip.v > 0) {
                        buffer.discardExact_za3lpa$(skip.v);
                      }
                      this.local$size.v = this.local$end.v ? 0 : coerceAtLeast(this.local$size.v, 1);
                      size = this.local$size.v;
                    }
                    finally {
                      after = current.readRemaining;
                    }
                  }
                   else {
                    after = before;
                  }
                  release = false;
                  if (after === 0)
                    tmp$_0 = prepareReadNextHead(chunk, current);
                  else if (after < size || current.endGap < IoBuffer.Companion.ReservedSize) {
                    completeReadHead(chunk, current);
                    tmp$_0 = prepareReadFirstHead(chunk, size);
                  }
                   else
                    tmp$_0 = current;
                  var next = tmp$_0;
                  if (next == null) {
                    release = false;
                    break loop_label;
                  }
                  current = next;
                  release = true;
                }
                 while (size > 0);
              }
              finally {
                if (release) {
                  completeReadHead(chunk, current);
                }
              }
            }
             while (false);
            this.state_0 = 2;
            continue;
          case 5:
            if (this.local$size.v > 1)
              prematureEndOfStreamUtf(this.local$size.v);
            if (this.local$cr.v) {
              this.local$end.v = true;
            }

            return this.local$decoded.v > 0 || this.local$end.v;
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
  function decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function prematureEndOfStreamUtf(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes to decode UTF-8 char');
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init('Malformed code-point ' + value + ' found');
  }
  var MaxCodePoint;
  var MinLowSurrogate;
  var MinHighSurrogate;
  var MinSupplementary;
  var HighSurrogateMagic;
  function isBmpCodePoint(cp) {
    return cp >>> 16 === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function highSurrogate(cp) {
    return (cp >>> 10) + 55232 | 0;
  }
  function MalformedUTF8InputException(message) {
    Exception_init(message, this);
    this.name = 'MalformedUTF8InputException';
  }
  MalformedUTF8InputException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MalformedUTF8InputException', interfaces: [Exception]};
  function $unsafeAppend$($receiver, builder) {
    var tmp$;
    var builderSize = builder.size;
    var builderHead = builder.head;
    if (builderSize <= PACKET_MAX_COPY_SIZE && builderHead.next == null && $receiver.tryWriteAppend_2fdm73$(builderHead)) {
      builder.afterBytesStolen_8be2vx$();
      return;
    }
    if ((tmp$ = builder.stealAll_8be2vx$()) != null) {
      $receiver.append_2fdm73$(tmp$);
    }
  }
  function prepareReadFirstHead($receiver, minSize) {
    if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      return $receiver.prepareReadHead_za3lpa$(minSize);
    }
    if (Kotlin.isType($receiver, IoBuffer)) {
      return $receiver.canRead() ? $receiver : null;
    }
    return prepareReadHeadFallback($receiver, minSize);
  }
  function prepareReadHeadFallback($receiver, minSize) {
    if ($receiver.endOfInput)
      return null;
    var buffer = IoBuffer$Companion_getInstance().Pool.borrow();
    var rc = peekTo($receiver, buffer);
    if (rc < minSize) {
      buffer.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
      return null;
    }
    return buffer;
  }
  function completeReadHead($receiver, current) {
    if (current === $receiver) {
      return;
    }
    if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      var remaining = current.readRemaining;
      if (remaining === 0) {
        $receiver.ensureNext_g6eaik$(current);
      }
       else if (current.endGap < IoBuffer$Companion_getInstance().ReservedSize) {
        $receiver.fixGapAfterRead_g6eaik$(current);
      }
       else {
        $receiver.updateHeadRemaining_za3lpa$(remaining);
      }
      return;
    }
    completeReadHeadFallback($receiver, current);
  }
  function completeReadHeadFallback($receiver, current) {
    var discardAmount = current.capacity - current.writeRemaining - current.readRemaining | 0;
    discardExact_0($receiver, discardAmount);
    current.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
  }
  function prepareReadNextHead($receiver, current) {
    if (current === $receiver) {
      return $receiver.canRead() ? $receiver : null;
    }
    if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      return $receiver.ensureNextHead_g6eaik$(current);
    }
    return prepareNextReadHeadFallback($receiver, current);
  }
  function prepareNextReadHeadFallback($receiver, current) {
    var discardAmount = current.capacity - current.writeRemaining - current.readRemaining | 0;
    discardExact_0($receiver, discardAmount);
    current.resetForWrite();
    if ($receiver.endOfInput || peekTo($receiver, current) <= 0) {
      current.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
      return null;
    }
    return current;
  }
  function prepareWriteHead($receiver, capacity, current) {
    if (Kotlin.isType($receiver, BytePacketBuilderBase)) {
      return $receiver.prepareWriteHead_za3lpa$(capacity);
    }
    return prepareWriteHeadFallback($receiver, current);
  }
  function prepareWriteHeadFallback($receiver, current) {
    if (current != null) {
      writeFully_5($receiver, current);
      current.resetForWrite();
      return current;
    }
    return IoBuffer$Companion_getInstance().Pool.borrow();
  }
  function afterHeadWrite($receiver, current) {
    if (Kotlin.isType($receiver, BytePacketBuilderBase)) {
      return $receiver.afterHeadWrite();
    }
    afterWriteHeadFallback($receiver, current);
  }
  function afterWriteHeadFallback($receiver, current) {
    writeFully_5($receiver, current);
    current.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
  }
  function ObjectPool() {
  }
  ObjectPool.prototype.close = function () {
    this.dispose();
  };
  ObjectPool.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ObjectPool', interfaces: [Closeable]};
  function NoPoolImpl() {
  }
  Object.defineProperty(NoPoolImpl.prototype, 'capacity', {get: function () {
    return 0;
  }});
  NoPoolImpl.prototype.recycle_trkh7z$ = function (instance) {
  };
  NoPoolImpl.prototype.dispose = function () {
  };
  NoPoolImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'NoPoolImpl', interfaces: [ObjectPool]};
  function SingleInstancePool() {
    this.borrowed_8z71hu$_0 = 0;
    this.disposed_32ssyp$_0 = false;
    this.instance_l8ssv$_0 = null;
  }
  function reverseByteOrder_2($receiver) {
    return toShort(($receiver & 255) << 8 | ($receiver & 65535) >>> 8);
  }
  function reverseByteOrder_3($receiver) {
    var s = toShort($receiver & 65535);
    var tmp$ = toShort((s & 255) << 8 | (s & 65535) >>> 8) << 16;
    var s_0 = toShort($receiver >>> 16);
    return tmp$ | toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) & 65535;
  }
  function reverseByteOrder_4($receiver) {
    var s = $receiver.and(L4294967295).toInt();
    var s_0 = toShort(s & 65535);
    var tmp$ = toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) << 16;
    var s_1 = toShort(s >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_2 = $receiver.shiftRightUnsigned(32).toInt();
    var s_3 = toShort(s_2 & 65535);
    var tmp$_1 = toShort((s_3 & 255) << 8 | (s_3 & 65535) >>> 8) << 16;
    var s_4 = toShort(s_2 >>> 16);
    return tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_4 & 255) << 8 | (s_4 & 65535) >>> 8) & 65535).and(L4294967295));
  }
  function reverseByteOrder_5($receiver) {
    var s = toRawBits($receiver);
    var s_0 = toShort(s & 65535);
    var tmp$ = toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) << 16;
    var s_1 = toShort(s >>> 16);
    var bits = tmp$ | toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) & 65535;
    return Kotlin.floatFromBits(bits);
  }
  function reverseByteOrder_6($receiver) {
    var s = toRawBits_0($receiver);
    var s_0 = s.and(L4294967295).toInt();
    var s_1 = toShort(s_0 & 65535);
    var tmp$ = toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) << 16;
    var s_2 = toShort(s_0 >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_2 & 255) << 8 | (s_2 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_3 = s.shiftRightUnsigned(32).toInt();
    var s_4 = toShort(s_3 & 65535);
    var tmp$_1 = toShort((s_4 & 255) << 8 | (s_4 & 65535) >>> 8) << 16;
    var s_5 = toShort(s_3 >>> 16);
    var bits = tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_5 & 255) << 8 | (s_5 & 65535) >>> 8) & 65535).and(L4294967295));
    return Kotlin.doubleFromBits(bits);
  }
  function Charset(_name) {
    Charset$Companion_getInstance();
    this._name_8be2vx$ = _name;
  }
  Charset.prototype.toString = function () {
    return get_name(this);
  };
  function Charset$Companion() {
    Charset$Companion_instance = this;
  }
  Charset$Companion.prototype.forName_61zpoe$ = function (name) {
    if (equals(name, 'UTF-8') || equals(name, 'utf-8') || equals(name, 'UTF8') || equals(name, 'utf8'))
      return Charsets_getInstance().UTF_8;
    var tmp$ = equals(name, 'ISO-8859-1') || equals(name, 'iso-8859-1');
    if (!tmp$) {
      tmp$ = equals(replace(name.toLowerCase(), 95, 45), 'iso-8859-1');
    }
    if (tmp$ || equals(name, 'latin1')) {
      return Charsets_getInstance().ISO_8859_1;
    }
    throw IllegalArgumentException_init('Charset ' + name + ' is not supported');
  };
  Charset$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Charset$Companion_instance = null;
  function Charset$Companion_getInstance() {
    if (Charset$Companion_instance === null) {
      new Charset$Companion();
    }
    return Charset$Companion_instance;
  }
  Charset.$metadata$ = {kind: Kind_CLASS, simpleName: 'Charset', interfaces: []};
  function get_name($receiver) {
    return $receiver._name_8be2vx$;
  }
  function CharsetEncoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetEncoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharsetEncoder', interfaces: []};
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetEncoderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharsetEncoderImpl', interfaces: [CharsetEncoder]};
  CharsetEncoderImpl.prototype.component1_0 = function () {
    return this.charset_0;
  };
  CharsetEncoderImpl.prototype.copy_4lzlqu$ = function (charset) {
    return new CharsetEncoderImpl(charset === void 0 ? this.charset_0 : charset);
  };
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
    return result;
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
  };
  function get_charset($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function encodeToByteArray($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    return encodeToByteArrayImpl1($receiver, input, fromIndex, toIndex);
  }
  function encodeImpl($receiver, input, fromIndex, toIndex, dst) {
    var tmp$;
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (equals(get_charset($receiver), Charsets_getInstance().ISO_8859_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    if (!(get_charset($receiver) === Charsets_getInstance().UTF_8)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var encoder = TextEncoderCtor();
    var start = fromIndex;
    var dstRemaining = dst.writeRemaining;
    while (start < toIndex && dstRemaining > 0) {
      var a = toIndex - start | 0;
      var b = dstRemaining / 6 | 0;
      var numChars = coerceAtLeast(Math_0.min(a, b), 1);
      var dropLastChar = isHighSurrogate(input.charCodeAt(start + numChars - 1 | 0));
      if (dropLastChar && numChars === 1)
        tmp$ = start + 2 | 0;
      else if (dropLastChar)
        tmp$ = start + numChars - 1 | 0;
      else
        tmp$ = start + numChars | 0;
      var endIndexExclusive = tmp$;
      var startIndex = start;
      var array1 = encoder.encode(Kotlin.subSequence(input, startIndex, endIndexExclusive).toString());
      if (array1.length > dst.writeRemaining)
        break;
      dst.writeFully_p0d4q1$(array1, 0, array1.length);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete($receiver, dst) {
    return true;
  }
  function CharsetDecoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetDecoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharsetDecoder', interfaces: []};
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetDecoderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharsetDecoderImpl', interfaces: [CharsetDecoder]};
  CharsetDecoderImpl.prototype.component1_0 = function () {
    return this.charset_0;
  };
  CharsetDecoderImpl.prototype.copy_4lzlqu$ = function (charset) {
    return new CharsetDecoderImpl(charset === void 0 ? this.charset_0 : charset);
  };
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
    return result;
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
  };
  function get_charset_0($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function decode_0($receiver, input, dst, max) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var copied = {v: 0};
    takeWhileSize$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(input, 1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      try {
        loop_label: do {
          var before = current.readRemaining;
          var after;
          if (before >= size) {
            try {
              var buffer = current;
              var block$result;
              block$break: do {
                var rem = max - copied.v | 0;
                if (rem === 0) {
                  block$result = 0;
                  break block$break;
                }
                copied.v = copied.v + buffer.readText_pzahgr$(decoder, dst, buffer.next == null, rem) | 0;
                block$result = 1;
              }
               while (false);
              size = block$result;
            }
            finally {
              after = current.readRemaining;
            }
          }
           else {
            after = before;
          }
          release = false;
          if (after === 0)
            tmp$_0 = prepareReadNextHead(input, current);
          else if (after < size || current.endGap < IoBuffer.Companion.ReservedSize) {
            completeReadHead(input, current);
            tmp$_0 = prepareReadFirstHead(input, size);
          }
           else
            tmp$_0 = current;
          var next = tmp$_0;
          if (next == null) {
            release = false;
            break loop_label;
          }
          current = next;
          release = true;
        }
         while (size > 0);
      }
      finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
     while (false);
    if (copied.v < max) {
      var decodeWrap$result;
      var tmp$_1;
      try {
        decodeWrap$result = decoder.decode();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_1 = t.message) != null ? tmp$_1 : 'no cause provided'));
        }
         else
          throw t;
      }
      var s = decodeWrap$result;
      if (s.length > (max - copied.v | 0)) {
        throw UnsupportedOperationException_init('Partial trailing characters are not supported');
      }
      dst.append_gw00v9$(s);
      copied.v = copied.v + s.length | 0;
    }
    return copied.v;
  }
  function decodeExactBytes($receiver, input, inputLength) {
    if (inputLength === 0)
      return '';
    if (Kotlin.isType(input, ByteReadPacketBase) && input.headRemaining >= inputLength) {
      var decoder = TextDecoderFatal(get_charset_0($receiver)._name_8be2vx$, true);
      var head = input.head;
      var decodeWrap$result;
      var tmp$;
      try {
        var block$result;
        if (head.readPosition_8be2vx$ === 0 && inputLength === head.content_8be2vx$.byteLength) {
          block$result = decoder.decode(head.content_8be2vx$);
        }
         else {
          block$result = decoder.decode(new Int8Array(head.content_8be2vx$, head.readPosition_8be2vx$, inputLength));
        }
        decodeWrap$result = block$result;
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
        }
         else
          throw t;
      }
      var text = decodeWrap$result;
      discardExact_0(input, inputLength);
      return text;
    }
    return decodeExactBytesSlow($receiver, input, inputLength);
  }
  function Charsets() {
    Charsets_instance = this;
    this.UTF_8 = new CharsetImpl('UTF-8');
    this.ISO_8859_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Charsets', interfaces: []};
  var Charsets_instance = null;
  function Charsets_getInstance() {
    if (Charsets_instance === null) {
      new Charsets();
    }
    return Charsets_instance;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.name = name;
  }
  CharsetImpl.prototype.newEncoder = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.newDecoder = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharsetImpl', interfaces: [Charset]};
  CharsetImpl.prototype.component1 = function () {
    return this.name;
  };
  CharsetImpl.prototype.copy_61zpoe$ = function (name) {
    return new CharsetImpl(name === void 0 ? this.name : name);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + Kotlin.toString(this.name) + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  CharsetImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function MalformedInputException(message) {
    Throwable.call(this);
    this.message_359ad3$_0 = message;
    this.cause_8fsvpx$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'MalformedInputException';
  }
  Object.defineProperty(MalformedInputException.prototype, 'message', {get: function () {
    return this.message_359ad3$_0;
  }});
  Object.defineProperty(MalformedInputException.prototype, 'cause', {get: function () {
    return this.cause_8fsvpx$_0;
  }});
  MalformedInputException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MalformedInputException', interfaces: [Throwable]};
  function decodeExactBytesSlow($receiver, input, inputLength) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var inputRemaining = {v: inputLength};
    var sb = StringBuilder_init(inputLength);
    var tmp$;
    try {
      takeWhileSize$break: do {
        var tmp$_0, tmp$_1;
        var release = true;
        tmp$_0 = prepareReadFirstHead(input, 6);
        if (tmp$_0 == null) {
          break takeWhileSize$break;
        }
        var current = tmp$_0;
        var size = 6;
        try {
          do {
            var before = current.readRemaining;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var tmp$_2;
                var chunkSize = buffer.readRemaining;
                var b = inputRemaining.v;
                var size_0 = Math_0.min(chunkSize, b);
                if (buffer.readPosition_8be2vx$ === 0 && buffer.content_8be2vx$.byteLength === size_0) {
                  var buffer_0 = buffer.content_8be2vx$;
                  var decodeStream$result;
                  var tmp$_3;
                  try {
                    var tmp$_4;
                    if (true) {
                      tmp$_4 = decoder.decode(buffer_0, STREAM_TRUE);
                    }
                     else {
                      tmp$_4 = decoder.decode(buffer_0);
                    }
                    decodeStream$result = tmp$_4;
                  }
                   catch (t) {
                    if (Kotlin.isType(t, Throwable)) {
                      throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_3 = t.message) != null ? tmp$_3 : 'no cause provided'));
                    }
                     else
                      throw t;
                  }
                  tmp$_2 = decodeStream$result;
                }
                 else {
                  var buffer_1 = new Int8Array(buffer.content_8be2vx$, buffer.readPosition_8be2vx$, size_0);
                  var decodeStream$result_0;
                  var tmp$_5;
                  try {
                    var tmp$_6;
                    if (true) {
                      tmp$_6 = decoder.decode(buffer_1, STREAM_TRUE);
                    }
                     else {
                      tmp$_6 = decoder.decode(buffer_1);
                    }
                    decodeStream$result_0 = tmp$_6;
                  }
                   catch (t_0) {
                    if (Kotlin.isType(t_0, Throwable)) {
                      throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_5 = t_0.message) != null ? tmp$_5 : 'no cause provided'));
                    }
                     else
                      throw t_0;
                  }
                  tmp$_2 = decodeStream$result_0;
                }
                var text = tmp$_2;
                sb.append_gw00v9$(text);
                buffer.discardExact_za3lpa$(size_0);
                inputRemaining.v = inputRemaining.v - size_0 | 0;
                size = inputRemaining.v > 0 ? 6 : 0;
              }
              finally {
                after = current.readRemaining;
              }
            }
             else {
              after = before;
            }
            release = false;
            if (after === 0)
              tmp$_1 = prepareReadNextHead(input, current);
            else if (after < size || current.endGap < IoBuffer.Companion.ReservedSize) {
              completeReadHead(input, current);
              tmp$_1 = prepareReadFirstHead(input, size);
            }
             else
              tmp$_1 = current;
            var next = tmp$_1;
            if (next == null) {
              release = false;
              break;
            }
            current = next;
            release = true;
          }
           while (size > 0);
        }
        finally {
          if (release) {
            completeReadHead(input, current);
          }
        }
      }
       while (false);
      if (inputRemaining.v > 0) {
        takeWhile$break: do {
          var tmp$_7, tmp$_8;
          var release_0 = true;
          tmp$_7 = prepareReadFirstHead(input, 1);
          if (tmp$_7 == null) {
            break takeWhile$break;
          }
          var current_0 = tmp$_7;
          try {
            do {
              var buffer_2 = current_0;
              var tmp$_9;
              var chunkSize_0 = buffer_2.readRemaining;
              var b_0 = inputRemaining.v;
              var size_1 = Math_0.min(chunkSize_0, b_0);
              if (buffer_2.readPosition_8be2vx$ === 0 && buffer_2.content_8be2vx$.byteLength === size_1)
                tmp$_9 = decoder.decode(buffer_2.content_8be2vx$);
              else {
                var buffer_3 = new Int8Array(buffer_2.content_8be2vx$, buffer_2.readPosition_8be2vx$, size_1);
                var decodeStream$result_1;
                var tmp$_10;
                try {
                  var tmp$_11;
                  if (true) {
                    tmp$_11 = decoder.decode(buffer_3, STREAM_TRUE);
                  }
                   else {
                    tmp$_11 = decoder.decode(buffer_3);
                  }
                  decodeStream$result_1 = tmp$_11;
                }
                 catch (t_1) {
                  if (Kotlin.isType(t_1, Throwable)) {
                    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_10 = t_1.message) != null ? tmp$_10 : 'no cause provided'));
                  }
                   else
                    throw t_1;
                }
                tmp$_9 = decodeStream$result_1;
              }
              var text_0 = tmp$_9;
              sb.append_gw00v9$(text_0);
              buffer_2.discardExact_za3lpa$(size_1);
              inputRemaining.v = inputRemaining.v - size_1 | 0;
              if (!true) {
                break;
              }
              release_0 = false;
              tmp$_8 = prepareReadNextHead(input, current_0);
              if (tmp$_8 == null) {
                break;
              }
              var next_0 = tmp$_8;
              current_0 = next_0;
              release_0 = true;
            }
             while (true);
          }
          finally {
            if (release_0) {
              completeReadHead(input, current_0);
            }
          }
        }
         while (false);
      }
      sb.append_gw00v9$(decoder.decode());
    }
     catch (t_2) {
      if (Kotlin.isType(t_2, Throwable)) {
        throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$ = t_2.message) != null ? tmp$ : 'no cause provided'));
      }
       else
        throw t_2;
    }
    return sb.toString();
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var view = dst.writableView();
    var tmp$;
    var i8 = new Int8Array(view.buffer, view.byteOffset, view.byteLength);
    var writeIndex = 0;
    for (var index = fromIndex; index < toIndex; index++) {
      var character = input.charCodeAt(index) | 0;
      if (character > 255) {
        failedToMapError(character);
      }
      i8[tmp$ = writeIndex, writeIndex = tmp$ + 1 | 0, tmp$] = toByte(character);
    }
    var rc = writeIndex;
    if (!(rc >= 0)) {
      var message = "The returned value from block function shouldn't be negative: " + rc;
      throw IllegalStateException_init(message.toString());
    }
    if (!(rc <= dst.writeRemaining)) {
      var message_0 = 'The returned value from block function is too big: ' + rc + ' > ' + dst.writeRemaining;
      throw IllegalStateException_init(message_0.toString());
    }
    dst.commitWritten_za3lpa$(rc);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function ByteOrder(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ByteOrder_initFields() {
    ByteOrder_initFields = function () {
    };
    ByteOrder$BIG_ENDIAN_instance = new ByteOrder('BIG_ENDIAN', 0);
    ByteOrder$LITTLE_ENDIAN_instance = new ByteOrder('LITTLE_ENDIAN', 1);
    ByteOrder$Companion_getInstance();
  }
  var ByteOrder$BIG_ENDIAN_instance;
  function ByteOrder$BIG_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$BIG_ENDIAN_instance;
  }
  var ByteOrder$LITTLE_ENDIAN_instance;
  function ByteOrder$LITTLE_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$LITTLE_ENDIAN_instance;
  }
  function ByteOrder$Companion() {
    ByteOrder$Companion_instance = this;
    this.native_0 = null;
    var buffer = new ArrayBuffer(4);
    var arr = new Int32Array(buffer);
    var view = new DataView(buffer);
    arr[0] = 287454020;
    this.native_0 = view.getInt32(0, true) === 287454020 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
  }
  ByteOrder$Companion.prototype.nativeOrder = function () {
    return this.native_0;
  };
  ByteOrder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ByteOrder$Companion_instance = null;
  function ByteOrder$Companion_getInstance() {
    ByteOrder_initFields();
    if (ByteOrder$Companion_instance === null) {
      new ByteOrder$Companion();
    }
    return ByteOrder$Companion_instance;
  }
  ByteOrder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ByteOrder', interfaces: [Enum]};
  function ByteOrder$values() {
    return [ByteOrder$BIG_ENDIAN_getInstance(), ByteOrder$LITTLE_ENDIAN_getInstance()];
  }
  ByteOrder.values = ByteOrder$values;
  function ByteOrder$valueOf(name) {
    switch (name) {
      case 'BIG_ENDIAN':
        return ByteOrder$BIG_ENDIAN_getInstance();
      case 'LITTLE_ENDIAN':
        return ByteOrder$LITTLE_ENDIAN_getInstance();
      default:throwISE('No enum constant kotlinx.io.core.ByteOrder.' + name);
    }
  }
  ByteOrder.valueOf_61zpoe$ = ByteOrder$valueOf;
  function BytePacketBuilderPlatformBase(pool) {
    BytePacketBuilderBase.call(this, pool);
  }
  BytePacketBuilderPlatformBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'BytePacketBuilderPlatformBase', interfaces: [BytePacketBuilderBase]};
  function ByteReadPacketPlatformBase(head, remaining, pool) {
    ByteReadPacketBase.call(this, head, remaining, pool);
  }
  ByteReadPacketPlatformBase.prototype.readFully_gsnag5$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_gsnag5$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc > 0)
            copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readFully_qmgm5g$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_qmgm5g$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc > 0)
            copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readFully_p0d4q1$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var rc = current.readAvailable_p0d4q1$(dst, offset + copied.v | 0, length - copied.v | 0);
          if (rc > 0)
            copied.v = copied.v + rc | 0;
          if (!(copied.v < length)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead(this, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        }
         while (true);
      }
      finally {
        if (release) {
          completeReadHead(this, current);
        }
      }
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_gsnag5$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_gsnag5$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_qmgm5g$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_qmgm5g$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_p0d4q1$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_p0d4q1$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'ByteReadPacketPlatformBase', interfaces: [ByteReadPacketBase, Input]};
  function ByteReadPacket_0(head, remaining, pool) {
    ByteReadPacket$Companion_getInstance();
    ByteReadPacketPlatformBase.call(this, head, remaining, pool);
    this.markNoMoreChunksAvailable_8be2vx$();
  }
  ByteReadPacket_0.prototype.fill = function () {
    return null;
  };
  ByteReadPacket_0.prototype.closeSource = function () {
  };
  function ByteReadPacket$Companion() {
    ByteReadPacket$Companion_instance = this;
  }
  function ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral.prototype.borrow = function () {
    return IoBuffer$Companion_getInstance().Empty;
  };
  ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [NoPoolImpl]};
  Object.defineProperty(ByteReadPacket$Companion.prototype, 'Empty', {get: function () {
    return ByteReadPacket_init(IoBuffer$Companion_getInstance().Empty, new ByteReadPacket$Companion$get_ByteReadPacket$Companion$Empty$ObjectLiteral());
  }});
  Object.defineProperty(ByteReadPacket$Companion.prototype, 'ReservedSize', {get: defineInlineFunction('kotlinx-io.kotlinx.io.core.ByteReadPacket.Companion.get_ReservedSize', wrapFunction(function () {
    var IoBuffer = _.kotlinx.io.core.IoBuffer;
    return function () {
      return IoBuffer.Companion.ReservedSize;
    };
  }))});
  ByteReadPacket$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ByteReadPacket$Companion_instance = null;
  function ByteReadPacket$Companion_getInstance() {
    if (ByteReadPacket$Companion_instance === null) {
      new ByteReadPacket$Companion();
    }
    return ByteReadPacket$Companion_instance;
  }
  ByteReadPacket_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'ByteReadPacket', interfaces: [ByteReadPacketPlatformBase, Input]};
  function ByteReadPacket_init(head, pool, $this) {
    $this = $this || Object.create(ByteReadPacket_0.prototype);
    ByteReadPacket_0.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function Closeable() {
  }
  Closeable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Closeable', interfaces: []};
  function addSuppressedInternal($receiver, other) {
  }
  function Input() {
  }
  Input.prototype.readFully_bj0s3a$ = function (dst, length, callback$default) {
    if (length === void 0)
      length = dst.writeRemaining;
    callback$default ? callback$default(dst, length) : this.readFully_bj0s3a$$default(dst, length);
  };
  Input.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Input', interfaces: [Closeable]};
  require$ObjectLiteral_2.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_2.prototype.constructor = require$ObjectLiteral_2;
  function require$ObjectLiteral_2(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_2.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [RequireFailureCapture]};
  function IoBuffer(content, origin) {
    IoBuffer$Companion_getInstance();
    this.content_8be2vx$ = content;
    this.origin_8be2vx$ = origin;
    this.refCount_0 = 1;
    this.readPosition_8be2vx$ = 0;
    this.writePosition_8be2vx$ = 0;
    this.limit_0 = this.content_8be2vx$.byteLength;
    this.view_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyDataView_0 : new DataView(this.content_8be2vx$);
    this.i8_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty8_0 : new Int8Array(this.content_8be2vx$, 0, this.limit_0);
    this.i16_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty16_0 : new Int16Array(this.content_8be2vx$, 0, this.limit_0 / 2 | 0);
    this.i32_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty32_0 : new Int32Array(this.content_8be2vx$, 0, this.limit_0 / 4 | 0);
    this.f32_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyF32_0 : new Float32Array(this.content_8be2vx$, 0, this.limit_0 / 4 | 0);
    this.f64_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyF64_0 : new Float64Array(this.content_8be2vx$, 0, this.limit_0 / 8 | 0);
    this.littleEndian_0 = false;
    this.platformEndian_0 = ByteOrder$Companion_getInstance().nativeOrder() === ByteOrder$BIG_ENDIAN_getInstance();
    if (!(this.origin_8be2vx$ !== this)) {
      var m = new require$ObjectLiteral_2(IoBuffer_init$lambda);
      m.doFail();
    }
    this.attachment = null;
    this.next = null;
  }
  Object.defineProperty(IoBuffer.prototype, 'doNotImplementInputButExtendAbstractInputInstead', {get: function () {
    throw IllegalStateException_init('Should be never accessed.'.toString());
  }});
  Object.defineProperty(IoBuffer.prototype, 'doNotImplementOutputButExtendAbstractOutputInstead', {get: function () {
    throw IllegalStateException_init('Should be never accessed.'.toString());
  }});
  Object.defineProperty(IoBuffer.prototype, 'endOfInput', {get: function () {
    return this.writePosition_8be2vx$ === this.readPosition_8be2vx$;
  }});
  Object.defineProperty(IoBuffer.prototype, 'capacity', {get: function () {
    return this.content_8be2vx$.byteLength;
  }});
  Object.defineProperty(IoBuffer.prototype, 'readRemaining', {get: function () {
    return this.writePosition_8be2vx$ - this.readPosition_8be2vx$ | 0;
  }});
  Object.defineProperty(IoBuffer.prototype, 'writeRemaining', {get: function () {
    return this.limit_0 - this.writePosition_8be2vx$ | 0;
  }});
  IoBuffer.prototype.canRead = function () {
    return this.writePosition_8be2vx$ > this.readPosition_8be2vx$;
  };
  IoBuffer.prototype.canWrite = function () {
    return this.writePosition_8be2vx$ < this.limit_0;
  };
  IoBuffer.prototype.reserveStartGap_za3lpa$ = function (n) {
    if (this.readPosition_8be2vx$ > 0)
      throw IllegalStateException_init('Start gap is already reserved');
    if (this.writePosition_8be2vx$ > 0)
      throw IllegalStateException_init('Start gap is already reserved');
    this.writePosition_8be2vx$ = n;
    this.readPosition_8be2vx$ = n;
  };
  IoBuffer.prototype.reserveEndGap_za3lpa$ = function (n) {
    if (this.limit_0 !== this.content_8be2vx$.byteLength)
      throw IllegalStateException_init('End gap is already reserved');
    this.limit_0 = this.limit_0 - n | 0;
  };
  Object.defineProperty(IoBuffer.prototype, 'startGap', {get: function () {
    return this.readPosition_8be2vx$;
  }});
  Object.defineProperty(IoBuffer.prototype, 'endGap', {get: function () {
    return this.content_8be2vx$.byteLength - this.limit_0 | 0;
  }});
  Object.defineProperty(IoBuffer.prototype, 'byteOrder', {get: function () {
    return this.littleEndian_0 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
  }, set: function (value) {
    var tmp$;
    switch (value.name) {
      case 'BIG_ENDIAN':
        tmp$ = false;
        break;
      case 'LITTLE_ENDIAN':
        tmp$ = true;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.littleEndian_0 = tmp$;
    this.platformEndian_0 = value === ByteOrder$Companion_getInstance().nativeOrder();
  }});
  IoBuffer.prototype.readByte = function () {
    if (this.readRemaining < 0)
      throw IllegalStateException_init('No bytes available for read');
    var value = this.i8_0[this.readPosition_8be2vx$];
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 1 | 0;
    return value;
  };
  IoBuffer.prototype.writeByte_s8j3t7$ = function (v) {
    if (this.writeRemaining < 1)
      throw IllegalStateException_init('No space left for writing');
    this.i8_0[this.writePosition_8be2vx$] = v;
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 1 | 0;
  };
  IoBuffer.prototype.readShort = function () {
    if (this.readRemaining < 2)
      throw IllegalStateException_init('Not enough bytes available to read a short');
    var value = this.view_0.getInt16(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 2 | 0;
    return value;
  };
  IoBuffer.prototype.writeShort_mq22fl$ = function (v) {
    if (this.writeRemaining < 2)
      throw IllegalStateException_init('Not enough space left to write a short');
    this.view_0.setInt16(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 2 | 0;
  };
  IoBuffer.prototype.readInt = function () {
    if (this.readRemaining < 4)
      throw IllegalStateException_init('Not enough bytes available to read an int');
    return this.readIntUnsafe_0();
  };
  IoBuffer.prototype.readIntUnsafe_0 = function () {
    var value = this.view_0.getInt32(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 4 | 0;
    return value;
  };
  IoBuffer.prototype.writeInt_za3lpa$ = function (v) {
    if (this.writeRemaining < 4)
      throw IllegalStateException_init('Not enough space left to write an int');
    this.view_0.setInt32(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 4 | 0;
  };
  IoBuffer.prototype.readFloat = function () {
    if (this.readRemaining < 4)
      throw IllegalStateException_init('Not enough bytes available to read a float');
    var value = this.view_0.getFloat32(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 4 | 0;
    return value;
  };
  IoBuffer.prototype.writeFloat_mx4ult$ = function (v) {
    if (this.writeRemaining < 4)
      throw IllegalStateException_init('Not enough space left to write a float');
    this.view_0.setFloat32(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 4 | 0;
  };
  IoBuffer.prototype.readDouble = function () {
    if (this.readRemaining < 8)
      throw IllegalStateException_init('Not enough bytes available to read a double');
    var value = this.view_0.getFloat64(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 8 | 0;
    return value;
  };
  IoBuffer.prototype.writeDouble_14dthe$ = function (v) {
    if (this.writeRemaining < 8)
      throw IllegalStateException_init('Not enough space left to write a double');
    this.view_0.setFloat64(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 8 | 0;
  };
  IoBuffer.prototype.writeFully_mj6st8$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      i8[wp + idx | 0] = src[offset + idx | 0];
    }
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.writeFully_359eei$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 2 | 0))
      throw IllegalStateException_init('Not enough space left to write a short array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 1) === 0) {
      var array = this.i16_0;
      var j = wp / 2 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 2 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int16Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 2 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setInt16(wp, src[i_1], littleEndian);
        wp = wp + 2 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_nd5v6f$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough space left to write an int array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 3) === 0) {
      var array = this.i32_0;
      var j = wp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int32Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setInt32(wp, src[i_1], littleEndian);
        wp = wp + 4 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_rfv6wg$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough space left to write a long array of length ' + length);
    tmp$ = offset + length - 1 | 0;
    for (var i = offset; i <= tmp$; i++) {
      this.writeLong_s8cxhz$(src[i]);
    }
  };
  IoBuffer.prototype.writeFully_kgymra$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough space left to write a float array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 3) === 0) {
      var array = this.f32_0;
      var j = wp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float32Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setFloat32(wp, src[i_1], littleEndian);
        wp = wp + 4 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_6icyh1$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough space left to write a double array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 7) === 0) {
      var array = this.f64_0;
      var j = wp / 8 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 8 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float64Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 8 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setFloat64(wp, src[i_1], littleEndian);
        wp = wp + 8 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  function IoBuffer$writeFully$lambda(closure$length, closure$src) {
    return function () {
      return 'length is too large: not enough bytes to read ' + closure$length + ' > ' + closure$src.readRemaining;
    };
  }
  function IoBuffer$writeFully$lambda_0(closure$length, this$IoBuffer) {
    return function () {
      return 'length is too large: not enough room to write ' + closure$length + ' > ' + this$IoBuffer.writeRemaining;
    };
  }
  IoBuffer.prototype.writeFully_bj0s3a$ = function (src, length) {
    if (!(length <= src.readRemaining)) {
      var m = new require$ObjectLiteral_2(IoBuffer$writeFully$lambda(length, src));
      m.doFail();
    }
    if (!(length <= this.writeRemaining)) {
      var m_0 = new require$ObjectLiteral_2(IoBuffer$writeFully$lambda_0(length, this));
      m_0.doFail();
    }
    var otherEnd = src.readPosition_8be2vx$ + length | 0;
    var sub = src.i8_0.subarray(src.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.writePosition_8be2vx$);
    src.readPosition_8be2vx$ = otherEnd;
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.fill_3pq026$ = function (n, v) {
    if (Kotlin.Long.fromInt(this.writeRemaining).compareTo_11rb$(n) < 0)
      throw IllegalStateException_init('Not enough space to fill with ' + n.toString() + ' values');
    var wp = this.writePosition_8be2vx$;
    var times = n.toInt();
    for (var index = 0; index < times; index++) {
      this.i8_0[wp + index | 0] = v;
    }
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + n.toInt() | 0;
  };
  IoBuffer.prototype.read_mj6st8$ = function (dst, offset, length) {
    this.readFully_mj6st8$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_mj6st8$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.readAvailable_mj6st8$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_mj6st8$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_359eei$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 2 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' short integers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 1) === 0) {
      var array = this.i16_0;
      var j = rp / 2 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 2 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int16Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 2 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getInt16(rp, littleEndian);
        rp = rp + 2 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_359eei$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_359eei$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_nd5v6f$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' integers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 3) === 0) {
      var array = this.i32_0;
      var j = rp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int32Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getInt32(rp, littleEndian);
        rp = rp + 4 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_nd5v6f$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_nd5v6f$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_rfv6wg$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' long integers');
    tmp$ = offset + length - 1 | 0;
    for (var idx = offset; idx <= tmp$; idx++) {
      dst[idx] = this.readLongUnsafe_0();
    }
  };
  IoBuffer.prototype.readAvailable_rfv6wg$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_rfv6wg$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_kgymra$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' float numbers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 3) === 0) {
      var array = this.f32_0;
      var j = rp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float32Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getFloat32(rp, littleEndian);
        rp = rp + 4 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_kgymra$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_kgymra$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_6icyh1$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' double float numbers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 7) === 0) {
      var array = this.f64_0;
      var j = rp / 8 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 8 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float64Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 8 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getFloat64(rp, littleEndian);
        rp = rp + 8 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_6icyh1$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_6icyh1$(dst, offset, length);
    return size;
  };
  IoBuffer.prototype.read_fbg2zd$ = function (dst, offset, length) {
    return this.readFully_fbg2zd$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_fbg2zd$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.read_qmgm5g$ = function (dst, offset, length) {
    this.readFully_qmgm5g$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_qmgm5g$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var to = new Int8Array(dst, offset, length);
    var rp = this.readPosition_8be2vx$;
    var rem = this.writePosition_8be2vx$ - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && length === rem) {
      to.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        to[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_8be2vx$, rp, length);
      to.set(from);
    }
    this.readPosition_8be2vx$ = rp + length | 0;
  };
  IoBuffer.prototype.readAvailable_qmgm5g$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_qmgm5g$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readAvailable_bj0s3a$ = function (dst, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var a = dst.writeRemaining;
    var size = Math_0.min(a, readRemaining, length);
    this.readFully_bj0s3a$(dst, size);
    return size;
  };
  function IoBuffer$readFully$lambda() {
    return 'offset should be positive';
  }
  function IoBuffer$readFully$lambda_0() {
    throw new IndexOutOfBoundsException('');
  }
  IoBuffer.prototype.readFully_p0d4q1$ = function (dst, offset, length) {
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    if (length > dst.byteLength)
      throw IllegalArgumentException_init('Destination buffer overflow: length = ' + length + ', buffer capacity ' + dst.byteLength);
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_2(IoBuffer$readFully$lambda);
      m.doFail();
    }
    if (!((offset + length | 0) <= dst.byteLength)) {
      var m_0 = new require$ObjectLiteral_2(IoBuffer$readFully$lambda_0);
      m_0.doFail();
    }
    this.readFully_qmgm5g$(dst.buffer, dst.byteOffset + offset | 0, length);
  };
  IoBuffer.prototype.readAvailable_p0d4q1$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(length, readRemaining);
    this.readFully_p0d4q1$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.read_gsnag5$ = function (dst, offset, length) {
    this.readFully_gsnag5$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_gsnag5$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var rem = this.writePosition_8be2vx$ - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && rem === length) {
      dst.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        dst[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_8be2vx$, rp, length);
      dst.set(from, offset);
    }
    this.readPosition_8be2vx$ = rp + length | 0;
  };
  IoBuffer.prototype.readAvailable_gsnag5$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_gsnag5$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_bj0s3a$$default = function (dst, length) {
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    if (dst.writeRemaining < length)
      throw IllegalArgumentException_init('Not enough free space in dst buffer to write ' + length + ' bytes');
    var srcBuffer = this.i8_0.length === length ? this.i8_0 : new Int8Array(this.content_8be2vx$, this.readPosition_8be2vx$, length);
    dst.i8_0.set(srcBuffer, dst.writePosition_8be2vx$);
    dst.writePosition_8be2vx$ = dst.writePosition_8be2vx$ + length | 0;
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.append_ezbsdh$ = function (csq, start, end) {
    var idx = this.appendChars_3peag4$(csq != null ? csq : 'null', start, end);
    if (idx !== end)
      throw IllegalStateException_init('Not enough free space to append char sequence');
    return this;
  };
  IoBuffer.prototype.append_gw00v9$ = function (csq) {
    return csq == null ? this.append_gw00v9$('null') : this.append_ezbsdh$(csq, 0, csq.length);
  };
  IoBuffer.prototype.append_8chfmy$ = function (csq, start, end) {
    var idx = this.appendChars_8chfmy$(csq, start, end);
    if (idx !== end)
      throw IllegalStateException_init('Not enough free space to append char sequence');
    return this;
  };
  IoBuffer.prototype.append_s8itvh$ = function (c) {
    var wp = this.writePosition_8be2vx$;
    var $receiver = this.i8_0;
    var v = c | 0;
    var remaining = this.limit_0 - wp | 0;
    var putUtf8Char_0$result;
    putUtf8Char_0$break: do {
      var tmp$;
      if (1 <= v && v <= 127) {
        if (remaining < 1) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(v);
        tmp$ = 1;
      }
       else if (v > 65535) {
        if (remaining < 4) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(240 | v >> 18 & 63);
        $receiver[wp + 1 | 0] = toByte(128 | v >> 12 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | v >> 6 & 63);
        $receiver[wp + 3 | 0] = toByte(128 | v & 63);
        tmp$ = 4;
      }
       else if (v > 2047) {
        if (remaining < 3) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(224 | v >> 12 & 15);
        $receiver[wp + 1 | 0] = toByte(128 | v >> 6 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | v & 63);
        tmp$ = 3;
      }
       else {
        if (remaining < 2) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(192 | v >> 6 & 31);
        $receiver[wp + 1 | 0] = toByte(128 | v & 63);
        tmp$ = 2;
      }
      putUtf8Char_0$result = tmp$;
    }
     while (false);
    var s = putUtf8Char_0$result;
    if (s === 0)
      this.notEnoughFreeSpace_0(c);
    this.writePosition_8be2vx$ = wp + s | 0;
    return this;
  };
  IoBuffer.prototype.notEnoughFreeSpace_0 = function (c) {
    throw IllegalStateException_init("Not Enough free space to append character '" + String.fromCharCode(c) + "', remaining " + this.writeRemaining + ' bytes');
  };
  IoBuffer.prototype.appendChars_8chfmy$ = function (csq, start, end) {
    var tmp$;
    var i8 = this.i8_0;
    var wp = this.writePosition_8be2vx$;
    var l = this.limit_0;
    var rc = end;
    for (var idx = start; idx < end; idx++) {
      var ch = csq[idx] | 0;
      if (ch > 127 || wp >= l) {
        rc = idx;
        break;
      }
      i8[tmp$ = wp, wp = tmp$ + 1 | 0, tmp$] = toByte(ch);
    }
    if (rc >= end || wp === l) {
      this.writePosition_8be2vx$ = wp;
      return rc;
    }
    return this.appendCharsUtf8_0(csq, rc, end, wp);
  };
  IoBuffer.prototype.isSurrogateCodePoint_0 = function ($receiver) {
    return 55296 <= $receiver && $receiver <= 57343;
  };
  IoBuffer.prototype.appendCharsUtf8_0 = function (csq, start, end, wp0) {
    var tmp$, tmp$_0, tmp$_1;
    var i8 = this.i8_0;
    var l = this.limit_0;
    var wp = wp0;
    var idx = start;
    loop_label: while (idx < end) {
      var ch = csq[tmp$ = idx, idx = tmp$ + 1 | 0, tmp$] | 0;
      if (55296 <= ch && ch <= 57343) {
        tmp$_1 = this.putUtf8CharSurrogate_0(i8, ch, csq[tmp$_0 = idx, idx = tmp$_0 + 1 | 0, tmp$_0] | 0, l - wp | 0, wp);
      }
       else {
        var remaining = l - wp | 0;
        var wp_0 = wp;
        var putUtf8Char_0$result;
        putUtf8Char_0$break: do {
          var tmp$_2;
          if (1 <= ch && ch <= 127) {
            if (remaining < 1) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(ch);
            tmp$_2 = 1;
          }
           else if (ch > 65535) {
            if (remaining < 4) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(240 | ch >> 18 & 63);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 12 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 3 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 4;
          }
           else if (ch > 2047) {
            if (remaining < 3) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(224 | ch >> 12 & 15);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 3;
          }
           else {
            if (remaining < 2) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(192 | ch >> 6 & 31);
            i8[wp_0 + 1 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 2;
          }
          putUtf8Char_0$result = tmp$_2;
        }
         while (false);
        tmp$_1 = putUtf8Char_0$result;
      }
      var size = tmp$_1;
      if (size === 0) {
        return this.appendCharFailed_0(ch, idx, wp);
      }
      wp = wp + size | 0;
    }
    this.writePosition_8be2vx$ = wp;
    return end;
  };
  IoBuffer.prototype.appendChars_3peag4$ = function (csq, start, end) {
    var tmp$;
    var i8 = this.i8_0;
    var wp = this.writePosition_8be2vx$;
    var l = this.limit_0;
    var rc = end;
    for (var idx = start; idx < end; idx++) {
      var ch = csq.charCodeAt(idx) | 0;
      if (ch > 127 || wp >= l) {
        rc = idx;
        break;
      }
      i8[tmp$ = wp, wp = tmp$ + 1 | 0, tmp$] = toByte(ch);
    }
    if (rc >= end || wp === this.limit_0) {
      this.writePosition_8be2vx$ = wp;
      return rc;
    }
    return this.appendCharsUtf8_1(csq, rc, end, wp);
  };
  IoBuffer.prototype.appendCharsUtf8_1 = function (csq, start, end, wp0) {
    var tmp$, tmp$_0, tmp$_1;
    var i8 = this.i8_0;
    var l = this.limit_0;
    var wp = wp0;
    var idx = start;
    loop_label: while (idx < end) {
      var ch = csq.charCodeAt((tmp$ = idx, idx = tmp$ + 1 | 0, tmp$)) | 0;
      var remaining = l - wp | 0;
      if (55296 <= ch && ch <= 57343) {
        tmp$_1 = this.putUtf8CharSurrogate_0(i8, ch, csq.charCodeAt((tmp$_0 = idx, idx = tmp$_0 + 1 | 0, tmp$_0)) | 0, remaining, wp);
      }
       else {
        var wp_0 = wp;
        var putUtf8Char_0$result;
        putUtf8Char_0$break: do {
          var tmp$_2;
          if (1 <= ch && ch <= 127) {
            if (remaining < 1) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(ch);
            tmp$_2 = 1;
          }
           else if (ch > 65535) {
            if (remaining < 4) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(240 | ch >> 18 & 63);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 12 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 3 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 4;
          }
           else if (ch > 2047) {
            if (remaining < 3) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(224 | ch >> 12 & 15);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 3;
          }
           else {
            if (remaining < 2) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(192 | ch >> 6 & 31);
            i8[wp_0 + 1 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 2;
          }
          putUtf8Char_0$result = tmp$_2;
        }
         while (false);
        tmp$_1 = putUtf8Char_0$result;
      }
      var size = tmp$_1;
      if (size === 0) {
        return this.appendCharFailed_0(ch, idx, wp);
      }
      wp = wp + size | 0;
    }
    this.writePosition_8be2vx$ = wp;
    return end;
  };
  IoBuffer.prototype.appendCharFailed_0 = function (ch, idx, wp) {
    this.writePosition_8be2vx$ = wp;
    return 55296 <= ch && ch <= 57343 ? idx - 2 | 0 : idx - 1 | 0;
  };
  IoBuffer.prototype.putUtf8Char_0 = function ($receiver, v, remaining, wp) {
    var tmp$;
    if (1 <= v && v <= 127) {
      if (remaining < 1)
        return 0;
      $receiver[wp] = toByte(v);
      tmp$ = 1;
    }
     else if (v > 65535) {
      if (remaining < 4)
        return 0;
      $receiver[wp] = toByte(240 | v >> 18 & 63);
      $receiver[wp + 1 | 0] = toByte(128 | v >> 12 & 63);
      $receiver[wp + 2 | 0] = toByte(128 | v >> 6 & 63);
      $receiver[wp + 3 | 0] = toByte(128 | v & 63);
      tmp$ = 4;
    }
     else if (v > 2047) {
      if (remaining < 3)
        return 0;
      $receiver[wp] = toByte(224 | v >> 12 & 15);
      $receiver[wp + 1 | 0] = toByte(128 | v >> 6 & 63);
      $receiver[wp + 2 | 0] = toByte(128 | v & 63);
      tmp$ = 3;
    }
     else {
      if (remaining < 2)
        return 0;
      $receiver[wp] = toByte(192 | v >> 6 & 31);
      $receiver[wp + 1 | 0] = toByte(128 | v & 63);
      tmp$ = 2;
    }
    return tmp$;
  };
  IoBuffer.prototype.putUtf8CharSurrogate_0 = function ($receiver, high, low, remaining, wp) {
    var highValue = (high & 2047) << 10;
    var lowValue = low & 1023;
    var value = 65536 | (highValue | lowValue);
    var putUtf8Char_0$result;
    putUtf8Char_0$break: do {
      var tmp$;
      if (1 <= value && value <= 127) {
        if (remaining < 1) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(value);
        tmp$ = 1;
      }
       else if (value > 65535) {
        if (remaining < 4) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(240 | value >> 18 & 63);
        $receiver[wp + 1 | 0] = toByte(128 | value >> 12 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | value >> 6 & 63);
        $receiver[wp + 3 | 0] = toByte(128 | value & 63);
        tmp$ = 4;
      }
       else if (value > 2047) {
        if (remaining < 3) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(224 | value >> 12 & 15);
        $receiver[wp + 1 | 0] = toByte(128 | value >> 6 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | value & 63);
        tmp$ = 3;
      }
       else {
        if (remaining < 2) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(192 | value >> 6 & 31);
        $receiver[wp + 1 | 0] = toByte(128 | value & 63);
        tmp$ = 2;
      }
      putUtf8Char_0$result = tmp$;
    }
     while (false);
    return putUtf8Char_0$result;
  };
  IoBuffer.prototype.tryPeek = function () {
    var readPosition = this.readPosition_8be2vx$;
    var writePosition = this.writePosition_8be2vx$;
    if (readPosition === writePosition)
      return -1;
    return this.i8_0[readPosition] & 255;
  };
  IoBuffer.prototype.peekTo_g6eaik$ = function (buffer) {
    return peekTo(this, buffer);
  };
  IoBuffer.prototype.discard_s8cxhz$ = function (n) {
    var a = Kotlin.Long.fromInt(this.readRemaining);
    var size = (a.compareTo_11rb$(n) <= 0 ? a : n).toInt();
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + size | 0;
    return Kotlin.Long.fromInt(size);
  };
  IoBuffer.prototype.write_mj6st8$ = function (array, offset, length) {
    this.writeFully_mj6st8$(array, offset, length);
  };
  IoBuffer.prototype.writeFully_p0d4q1$ = function (src, offset, length) {
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var rem = this.limit_0 - wp | 0;
    var i8 = this.i8_0;
    if (length > rem)
      throw IndexOutOfBoundsException_init();
    var from = new Int8Array(src.buffer, src.byteOffset + offset | 0, length);
    i8.set(from, wp);
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.write_gsnag5$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var rem = this.limit_0 - wp | 0;
    var i8 = this.i8_0;
    if (length > rem)
      throw IndexOutOfBoundsException_init();
    if (offset === 0 && length === src.length) {
      i8.set(src, wp);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        i8[wp + i | 0] = src[offset + i | 0];
      }
    }
     else {
      var from = new Int8Array(src.buffer, src.byteOffset + offset | 0, length);
      i8.set(from, wp);
    }
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.readLong = function () {
    if (this.readRemaining < 8)
      throw IllegalStateException_init('Not enough bytes available to read a long');
    return this.readLongUnsafe_0();
  };
  IoBuffer.prototype.readLongUnsafe_0 = function () {
    var tmp$;
    var m = L4294967295;
    var a = Kotlin.Long.fromInt(this.readIntUnsafe_0()).and(m);
    var b = Kotlin.Long.fromInt(this.readIntUnsafe_0()).and(m);
    if (this.littleEndian_0) {
      tmp$ = b.shiftLeft(32).or(a);
    }
     else {
      tmp$ = a.shiftLeft(32).or(b);
    }
    return tmp$;
  };
  IoBuffer.prototype.writeLong_s8cxhz$ = function (v) {
    if (this.writeRemaining < 8)
      throw IllegalStateException_init('Not enough space left to write a long');
    var m = L4294967295;
    var a = v.shiftRight(32).toInt();
    var b = v.and(m).toInt();
    if (this.littleEndian_0) {
      this.writeInt_za3lpa$(b);
      this.writeInt_za3lpa$(a);
    }
     else {
      this.writeInt_za3lpa$(a);
      this.writeInt_za3lpa$(b);
    }
  };
  function IoBuffer$discardExact$lambda(closure$n) {
    return function () {
      return "Number of bytes to be discarded shouldn't be negative: " + closure$n;
    };
  }
  IoBuffer.prototype.discardExact_za3lpa$ = function (n) {
    if (!(n >= 0)) {
      var m = new require$ObjectLiteral_2(IoBuffer$discardExact$lambda(n));
      m.doFail();
    }
    var rem = this.readRemaining;
    if (n > rem) {
      throw IllegalArgumentException_init("Can't discard " + n + ' bytes: only ' + rem + ' bytes available');
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + n | 0;
  };
  IoBuffer.prototype.pushBack_za3lpa$ = function (n) {
    if (this.readPosition_8be2vx$ < n)
      throw IllegalStateException_init('Nothing to push back');
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ - n | 0;
  };
  IoBuffer.prototype.resetForWrite = function () {
    this.resetForWrite_za3lpa$(this.content_8be2vx$.byteLength);
  };
  function IoBuffer$resetForWrite$lambda(closure$limit) {
    return function () {
      return "Limit shouldn't be negative: " + closure$limit;
    };
  }
  function IoBuffer$resetForWrite$lambda_0(closure$limit, this$IoBuffer) {
    return function () {
      return "Limit shouldn't be bigger than buffer size: limit = " + closure$limit + ', size = ' + this$IoBuffer.content_8be2vx$.byteLength;
    };
  }
  IoBuffer.prototype.resetForWrite_za3lpa$ = function (limit) {
    if (!(limit >= 0)) {
      var m = new require$ObjectLiteral_2(IoBuffer$resetForWrite$lambda(limit));
      m.doFail();
    }
    if (!(limit <= this.content_8be2vx$.byteLength)) {
      var m_0 = new require$ObjectLiteral_2(IoBuffer$resetForWrite$lambda_0(limit, this));
      m_0.doFail();
    }
    this.readPosition_8be2vx$ = 0;
    this.writePosition_8be2vx$ = 0;
    this.limit_0 = limit;
  };
  IoBuffer.prototype.resetForRead = function () {
    this.readPosition_8be2vx$ = 0;
    this.limit_0 = this.content_8be2vx$.byteLength;
    this.writePosition_8be2vx$ = this.limit_0;
  };
  IoBuffer.prototype.isExclusivelyOwned = function () {
    return this.refCount_0 === 1;
  };
  IoBuffer.prototype.makeView = function () {
    var tmp$;
    if (this === IoBuffer$Companion_getInstance().Empty)
      return this;
    var o = (tmp$ = this.origin_8be2vx$) != null ? tmp$ : this;
    o.acquire_0();
    var view = new IoBuffer(this.content_8be2vx$, o);
    view.attachment = this.attachment;
    view.readPosition_8be2vx$ = this.readPosition_8be2vx$;
    view.writePosition_8be2vx$ = this.writePosition_8be2vx$;
    view.limit_0 = this.limit_0;
    return view;
  };
  IoBuffer.prototype.release_cqjh9i$ = function (pool) {
    if (this.release_0()) {
      this.resetForWrite();
      if (this.origin_8be2vx$ != null) {
        this.unlink_8be2vx$();
        this.origin_8be2vx$.release_cqjh9i$(pool);
      }
       else {
        pool.recycle_trkh7z$(this);
      }
    }
  };
  IoBuffer.prototype.writeBuffer_bj0s3a$ = function (src, length) {
    this.writeFully_bj0s3a$(src, length);
    return length;
  };
  IoBuffer.prototype.flush = function () {
  };
  function IoBuffer$readText$lambda(closure$max) {
    return function () {
      return "max shouldn't be negative: " + closure$max;
    };
  }
  IoBuffer.prototype.readText_pzahgr$ = function (decoder, out, lastBuffer, max) {
    if (max === void 0)
      max = 2147483647;
    var tmp$, tmp$_0, tmp$_1;
    if (!(max >= 0)) {
      var m = new require$ObjectLiteral_2(IoBuffer$readText$lambda(max));
      m.doFail();
    }
    if (this.readRemaining === 0)
      return 0;
    var buffer = this.i8_0.subarray(this.readPosition_8be2vx$, this.writePosition_8be2vx$);
    var stream = !lastBuffer;
    var decodeStream$result;
    var tmp$_2;
    try {
      var tmp$_3;
      if (stream) {
        tmp$_3 = decoder.decode(buffer, STREAM_TRUE);
      }
       else {
        tmp$_3 = decoder.decode(buffer);
      }
      decodeStream$result = tmp$_3;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_2 = t.message) != null ? tmp$_2 : 'no cause provided'));
      }
       else
        throw t;
    }
    var rawResult = decodeStream$result;
    if (rawResult.length <= max) {
      this.readPosition_8be2vx$ = this.writePosition_8be2vx$;
      tmp$_1 = rawResult;
    }
     else {
      var actual = rawResult.substring(0, max);
      var subDecoder = TextDecoderFatal(decoder.encoding, true);
      var subArray = new Int8Array(1);
      var subDecoded = 0;
      tmp$ = this.readPosition_8be2vx$;
      tmp$_0 = this.writePosition_8be2vx$;
      for (var i = tmp$; i < tmp$_0; i++) {
        subArray[0] = this.i8_0[i];
        var tmp$_4 = subDecoded;
        var decodeStream$result_0;
        var tmp$_5;
        try {
          var tmp$_6;
          if (true) {
            tmp$_6 = subDecoder.decode(subArray, STREAM_TRUE);
          }
           else {
            tmp$_6 = subDecoder.decode(subArray);
          }
          decodeStream$result_0 = tmp$_6;
        }
         catch (t_0) {
          if (Kotlin.isType(t_0, Throwable)) {
            throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_5 = t_0.message) != null ? tmp$_5 : 'no cause provided'));
          }
           else
            throw t_0;
        }
        subDecoded = tmp$_4 + decodeStream$result_0.length | 0;
        if (subDecoded >= max) {
          this.readPosition_8be2vx$ = i + 1 | 0;
          break;
        }
      }
      if (subDecoded < max) {
        var tmp$_7 = subDecoded;
        var decodeWrap$result;
        var tmp$_8;
        try {
          decodeWrap$result = subDecoder.decode().length;
        }
         catch (t_1) {
          if (Kotlin.isType(t_1, Throwable)) {
            throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_8 = t_1.message) != null ? tmp$_8 : 'no cause provided'));
          }
           else
            throw t_1;
        }
        subDecoded = tmp$_7 + decodeWrap$result | 0;
        if (subDecoded >= max) {
          this.readPosition_8be2vx$ = this.writePosition_8be2vx$;
        }
         else {
          throw IllegalStateException_init("Failed to readText: don't know how to update read position");
        }
      }
      tmp$_1 = actual;
    }
    var result = tmp$_1;
    out.append_gw00v9$(result);
    return result.length;
  };
  IoBuffer.prototype.readableView = function () {
    var tmp$;
    var readPosition = this.readPosition_8be2vx$;
    var writePosition = this.writePosition_8be2vx$;
    if (readPosition === writePosition)
      tmp$ = IoBuffer$Companion_getInstance().EmptyDataView_0;
    else if (readPosition === 0 && writePosition === this.content_8be2vx$.byteLength)
      tmp$ = this.view_0;
    else
      tmp$ = new DataView(this.content_8be2vx$, readPosition, writePosition - readPosition | 0);
    return tmp$;
  };
  IoBuffer.prototype.writableView = function () {
    var tmp$;
    var writePosition = this.writePosition_8be2vx$;
    var limit = this.limit_0;
    if (writePosition === limit)
      tmp$ = IoBuffer$Companion_getInstance().EmptyDataView_0;
    else if (writePosition === 0 && limit === this.content_8be2vx$.byteLength)
      tmp$ = this.view_0;
    else
      tmp$ = new DataView(this.content_8be2vx$, writePosition, limit - writePosition | 0);
    return tmp$;
  };
  IoBuffer.prototype.commitWritten_za3lpa$ = function (n) {
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + n | 0;
  };
  IoBuffer.prototype.readDirect_5b066c$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.IoBuffer.readDirect_5b066c$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (block) {
      var view = this.readableView();
      var rc = block(view);
      if (!(rc >= 0)) {
        var message = "The returned value from block function shouldn't be negative: " + rc;
        throw IllegalStateException_init(message.toString());
      }
      this.discardExact_za3lpa$(rc);
      return rc;
    };
  }));
  IoBuffer.prototype.writeDirect_5b066c$ = defineInlineFunction('kotlinx-io.kotlinx.io.core.IoBuffer.writeDirect_5b066c$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (block) {
      var view = this.writableView();
      var rc = block(view);
      if (!(rc >= 0)) {
        var message = "The returned value from block function shouldn't be negative: " + rc;
        throw IllegalStateException_init(message.toString());
      }
      if (!(rc <= this.writeRemaining)) {
        var message_0 = 'The returned value from block function is too big: ' + rc + ' > ' + this.writeRemaining;
        throw IllegalStateException_init(message_0.toString());
      }
      this.commitWritten_za3lpa$(rc);
      return rc;
    };
  }));
  IoBuffer.prototype.restoreEndGap_kcn2v3$ = function (n) {
    var newLimit = this.limit_0 - n | 0;
    this.limit_0 = newLimit;
    if (this.writePosition_8be2vx$ > newLimit) {
      this.writePosition_8be2vx$ = newLimit;
    }
    if (this.readPosition_8be2vx$ > newLimit) {
      this.readPosition_8be2vx$ = newLimit;
    }
  };
  IoBuffer.prototype.restoreStartGap_kcn2v3$ = function (n) {
    var rp = this.readPosition_8be2vx$;
    if (rp < n) {
      throw IllegalArgumentException_init("Can't restore start gap: " + n + ' bytes were not reserved before');
    }
    this.readPosition_8be2vx$ = rp - n | 0;
  };
  function IoBuffer$writeBufferPrepend$lambda(closure$size, this$IoBuffer) {
    return function () {
      return 'size should be greater than startGap (size = ' + closure$size + ', startGap = ' + this$IoBuffer.startGap + ')';
    };
  }
  IoBuffer.prototype.writeBufferPrepend_2fdm73$ = function (other) {
    var size = other.readRemaining;
    if (!(size <= this.startGap)) {
      var m = new require$ObjectLiteral_2(IoBuffer$writeBufferPrepend$lambda(size, this));
      m.doFail();
    }
    var otherEnd = other.readPosition_8be2vx$ + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.readPosition_8be2vx$ - size | 0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ - size | 0;
    other.readPosition_8be2vx$ = other.readPosition_8be2vx$ + size | 0;
  };
  function IoBuffer$writeBufferAppend$lambda(closure$size, this$IoBuffer) {
    return function () {
      return 'should be greater than write space + end gap (size = ' + closure$size + ', ' + ('writeRemaining = ' + this$IoBuffer.writeRemaining + ', endGap = ' + this$IoBuffer.endGap + ', rem+gap = ' + (this$IoBuffer.writeRemaining + this$IoBuffer.endGap | 0));
    };
  }
  IoBuffer.prototype.writeBufferAppend_ehtrw3$ = function (other, maxSize) {
    var a = other.readRemaining;
    var size = Math_0.min(a, maxSize);
    if (!(size <= (this.writeRemaining + this.endGap | 0))) {
      var m = new require$ObjectLiteral_2(IoBuffer$writeBufferAppend$lambda(size, this));
      m.doFail();
    }
    var otherEnd = other.readPosition_8be2vx$ + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.writePosition_8be2vx$);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + size | 0;
    if (this.writePosition_8be2vx$ > this.limit_0) {
      this.limit_0 = this.writePosition_8be2vx$;
    }
    other.readPosition_8be2vx$ = other.readPosition_8be2vx$ + size | 0;
  };
  IoBuffer.prototype.unlink_8be2vx$ = function () {
    if (this.refCount_0 !== 0)
      throw IllegalStateException_init('Unable to unlink buffers: buffer view is in use');
    this.content_8be2vx$ = IoBuffer$Companion_getInstance().EmptyBuffer_0;
    this.i8_0 = IoBuffer$Companion_getInstance().Empty8_0;
    this.i16_0 = IoBuffer$Companion_getInstance().Empty16_0;
    this.i32_0 = IoBuffer$Companion_getInstance().Empty32_0;
    this.f32_0 = IoBuffer$Companion_getInstance().EmptyF32_0;
    this.f64_0 = IoBuffer$Companion_getInstance().EmptyF64_0;
    this.view_0 = IoBuffer$Companion_getInstance().EmptyDataView_0;
    this.resetForWrite();
  };
  IoBuffer.prototype.acquire_0 = function () {
    var v = this.refCount_0;
    if (v === 0)
      throw IllegalStateException_init('Failed to acquire buffer: buffer has been already released');
    this.refCount_0 = v + 1 | 0;
  };
  IoBuffer.prototype.release_0 = function () {
    if (this === IoBuffer$Companion_getInstance().Empty)
      throw IllegalStateException_init('attempted to release IoBuffer.Empty');
    var v = this.refCount_0;
    if (v === 0)
      throw IllegalStateException_init('Unable to release: buffer has been already released');
    var newCount = v - 1 | 0;
    this.refCount_0 = newCount;
    return newCount === 0;
  };
  IoBuffer.prototype.close = function () {
    throw UnsupportedOperationException_init('close for buffer view is not supported');
  };
  IoBuffer.prototype.toString = function () {
    return 'Buffer[readable = ' + this.readRemaining + ', writable = ' + this.writeRemaining + ', startGap = ' + this.startGap + ', endGap = ' + this.endGap + ']';
  };
  function IoBuffer$Companion() {
    IoBuffer$Companion_instance = this;
    this.ReservedSize = 8;
    this.EmptyBuffer_0 = new ArrayBuffer(0);
    this.EmptyDataView_0 = new DataView(this.EmptyBuffer_0);
    this.Empty8_0 = new Int8Array(0);
    this.Empty16_0 = new Int16Array(0);
    this.Empty32_0 = new Int32Array(0);
    this.EmptyF32_0 = new Float32Array(0);
    this.EmptyF64_0 = new Float64Array(0);
    this.Empty = new IoBuffer(this.EmptyBuffer_0, null);
    this.Pool = new IoBuffer$Companion$Pool$ObjectLiteral(100);
    this.NoPool = new IoBuffer$Companion$NoPool$ObjectLiteral();
    this.EmptyPool = EmptyBufferPoolImpl_getInstance();
  }
  function IoBuffer$Companion$Pool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.produceInstance = function () {
    return new IoBuffer(new ArrayBuffer(4096), null);
  };
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.clearInstance_trkh7z$ = function (instance) {
    var $receiver = DefaultPool.prototype.clearInstance_trkh7z$.call(this, instance);
    instance.resetForWrite();
    instance.next = null;
    instance.attachment = null;
    if (instance.refCount_0 !== 0)
      throw IllegalStateException_init('Unable to clear instance: refCount is ' + instance.refCount_0 + ' != 0');
    instance.refCount_0 = 1;
    return $receiver;
  };
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(closure$instance) {
    return function () {
      return 'unable to recycle buffer: buffer view is in use (refCount = ' + closure$instance.refCount_0 + ')';
    };
  }
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0() {
    return "Unable to recycle buffer view: view copy shouldn't be recycled";
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.validateInstance_trkh7z$ = function (instance) {
    DefaultPool.prototype.validateInstance_trkh7z$.call(this, instance);
    if (!(instance.refCount_0 === 0)) {
      var m = new require$ObjectLiteral_2(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(instance));
      m.doFail();
    }
    if (!(instance.origin_8be2vx$ == null)) {
      var m_0 = new require$ObjectLiteral_2(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0);
      m_0.doFail();
    }
  };
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function (instance) {
    instance.unlink_8be2vx$();
  };
  IoBuffer$Companion$Pool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DefaultPool]};
  function IoBuffer$Companion$NoPool$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.borrow = function () {
    return new IoBuffer(new ArrayBuffer(4096), null);
  };
  IoBuffer$Companion$NoPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [NoPoolImpl]};
  IoBuffer$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var IoBuffer$Companion_instance = null;
  function IoBuffer$Companion_getInstance() {
    if (IoBuffer$Companion_instance === null) {
      new IoBuffer$Companion();
    }
    return IoBuffer$Companion_instance;
  }
  function IoBuffer_init$lambda() {
    return "origin shouldn't point to itself";
  }
  IoBuffer.$metadata$ = {kind: Kind_CLASS, simpleName: 'IoBuffer', interfaces: [Output, Input]};
  function Output() {
  }
  Output.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Output', interfaces: [Closeable, Appendable]};
  var PACKET_MAX_COPY_SIZE;
  var BUFFER_VIEW_POOL_SIZE;
  var BUFFER_VIEW_SIZE;
  function BytePacketBuilder_0(headerSizeHint) {
    if (headerSizeHint === void 0)
      headerSizeHint = 0;
    return new BytePacketBuilder(headerSizeHint, IoBuffer$Companion_getInstance().Pool);
  }
  function String_0(bytes, offset, length, charset) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = bytes.length;
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    if (offset < 0 || length < 0 || (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new IoBuffer(buffer, null);
    view.resetForRead();
    var packet = ByteReadPacket_init(view, IoBuffer$Companion_getInstance().NoPool);
    return decode(charset.newDecoder(), packet, 2147483647);
  }
  function checkIndices(offset, length, bytes) {
    if (!(offset >= 0)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ") shouldn't be negative");
    }
    if (!(length >= 0)) {
      throw new IndexOutOfBoundsException('length (' + length + ") shouldn't be negative");
    }
    if (!((offset + length | 0) <= bytes.length)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init();
  }
  function getCharsInternal($receiver, dst, dstOffset) {
    var tmp$;
    var length = $receiver.length;
    if (!((dstOffset + length | 0) <= dst.length)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var dstIndex = dstOffset;
    for (var srcIndex = 0; srcIndex < length; srcIndex++) {
      dst[tmp$ = dstIndex, dstIndex = tmp$ + 1 | 0, tmp$] = $receiver.charCodeAt(srcIndex);
    }
  }
  function IOException(message, cause) {
    Exception.call(this, message, cause);
    this.name = 'IOException';
  }
  IOException.$metadata$ = {kind: Kind_CLASS, simpleName: 'IOException', interfaces: [Exception]};
  function IOException_init(message, $this) {
    $this = $this || Object.create(IOException.prototype);
    IOException.call($this, message, null);
    return $this;
  }
  function EOFException(message) {
    IOException_init(message, this);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {kind: Kind_CLASS, simpleName: 'EOFException', interfaces: [IOException]};
  var STREAM_TRUE;
  var FATAL_TRUE;
  function TextDecoderFatal(encoding, fatal) {
    if (fatal === void 0)
      fatal = true;
    if (typeof TextDecoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextDecoder === undefined)
        throw IllegalStateException_init('TextDecoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextDecoder;
      var objPrototype = Object.create(ctor.prototype);
      return fatal ? ctor.call(objPrototype, encoding, FATAL_TRUE) : ctor.call(objPrototype, encoding);
    }
    return fatal ? new TextDecoder(encoding, FATAL_TRUE) : new TextDecoder(encoding);
  }
  function TextEncoderCtor() {
    if (typeof TextEncoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextEncoder === undefined)
        throw IllegalStateException_init('TextEncoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextEncoder;
      var objPrototype = Object.create(ctor.prototype);
      return ctor.call(objPrototype);
    }
    return new TextEncoder();
  }
  function DefaultPool(capacity) {
    this.capacity_3ksqj2$_0 = capacity;
    this.instances_3r1z6a$_0 = Kotlin.newArray(this.capacity, null);
    this.size_xp9yxl$_0 = 0;
  }
  Object.defineProperty(DefaultPool.prototype, 'capacity', {get: function () {
    return this.capacity_3ksqj2$_0;
  }});
  DefaultPool.prototype.disposeInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.clearInstance_trkh7z$ = function (instance) {
    return instance;
  };
  DefaultPool.prototype.validateInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.borrow = function () {
    var tmp$;
    if (this.size_xp9yxl$_0 === 0)
      return this.produceInstance();
    var idx = (this.size_xp9yxl$_0 = this.size_xp9yxl$_0 - 1 | 0, this.size_xp9yxl$_0);
    var instance = Kotlin.isType(tmp$ = this.instances_3r1z6a$_0[idx], Any) ? tmp$ : throwCCE();
    this.instances_3r1z6a$_0[idx] = null;
    return this.clearInstance_trkh7z$(instance);
  };
  DefaultPool.prototype.recycle_trkh7z$ = function (instance) {
    var tmp$;
    this.validateInstance_trkh7z$(instance);
    if (this.size_xp9yxl$_0 === this.capacity) {
      this.disposeInstance_trkh7z$(instance);
    }
     else {
      this.instances_3r1z6a$_0[tmp$ = this.size_xp9yxl$_0, this.size_xp9yxl$_0 = tmp$ + 1 | 0, tmp$] = instance;
    }
  };
  DefaultPool.prototype.dispose = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size_xp9yxl$_0;
    for (var i = 0; i < tmp$; i++) {
      var instance = Kotlin.isType(tmp$_0 = this.instances_3r1z6a$_0[i], Any) ? tmp$_0 : throwCCE();
      this.instances_3r1z6a$_0[i] = null;
      this.disposeInstance_trkh7z$(instance);
    }
    this.size_xp9yxl$_0 = 0;
  };
  DefaultPool.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultPool', interfaces: [ObjectPool]};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$io = package$kotlinx.io || (package$kotlinx.io = {});
  var package$bits = package$io.bits || (package$io.bits = {});
  var package$charsets = package$io.charsets || (package$io.charsets = {});
  package$charsets.encode_478lbv$ = encode_0;
  package$charsets.decode_4lddy5$ = decode;
  package$charsets.encodeToByteArrayImpl1_y0k02w$ = encodeToByteArrayImpl1;
  package$charsets.sizeEstimate_nfbqdc$ = sizeEstimate;
  package$charsets.encodeToImpl_s0aqkj$ = encodeToImpl;
  var package$core = package$io.core || (package$io.core = {});
  Object.defineProperty(package$core, 'EmptyBufferPoolImpl', {get: EmptyBufferPoolImpl_getInstance});
  package$core.releaseAll_rzlcxh$ = releaseAll;
  package$core.copyAll_47m236$ = copyAll;
  package$core.findTail_47m236$ = findTail;
  package$core.remainingAll_4aio45$ = remainingAll;
  package$core.isEmpty_47m236$ = isEmpty;
  package$core.BufferLimitExceededException = BufferLimitExceededException;
  package$core.BytePacketBuilder_za3lpa$ = BytePacketBuilder_0;
  package$core.BytePacketBuilder = BytePacketBuilder;
  package$core.BytePacketBuilderBase = BytePacketBuilderBase;
  package$core.addSuppressedInternal_oh0dqn$ = addSuppressedInternal;
  package$core.readFully_nvffi1$ = readFully;
  package$core.discardExact_zfjns6$ = discardExact;
  package$core.discardExact_x7yx39$ = discardExact_0;
  var package$internal = package$core.internal || (package$core.internal = {});
  package$internal.prepareReadFirstHead_x7yx39$ = prepareReadFirstHead;
  package$internal.prepareReadNextHead_xor87t$ = prepareReadNextHead;
  package$internal.completeReadHead_xor87t$ = completeReadHead;
  package$core.IoBuffer = IoBuffer;
  package$core.peekTo_ljrp1j$ = peekTo;
  package$core.writeFully_bc6dmu$ = writeFully_5;
  package$internal.prepareWriteHead_zhgrnj$ = prepareWriteHead;
  package$internal.afterHeadWrite_udzp7w$ = afterHeadWrite;
  Object.defineProperty(ByteReadPacketBase, 'Companion', {get: ByteReadPacketBase$Companion_getInstance});
  package$core.ByteReadPacketBase = ByteReadPacketBase;
  package$charsets.encodeToByteArray_478lbv$ = encodeToByteArray;
  package$core.readBytes_3lionn$ = readBytes;
  package$core.readBytes_wb5b4t$ = readBytes_1;
  package$core.readBytesOf_mviz6f$ = readBytesOf;
  package$core.readText_q10u79$ = readText_2;
  package$core.readTextExactBytes_kbwbzj$ = readTextExactBytes_0;
  package$internal.RequireFailureCapture = RequireFailureCapture;
  package$internal.decodeUTF8LineLoopSuspend_a47po6$ = decodeUTF8LineLoopSuspend;
  package$internal.malformedByteCount_za3lpa$ = malformedByteCount;
  package$internal.isBmpCodePoint_za3lpa$ = isBmpCodePoint;
  package$internal.isValidCodePoint_za3lpa$ = isValidCodePoint;
  package$internal.malformedCodePoint_za3lpa$ = malformedCodePoint;
  package$internal.highSurrogate_za3lpa$ = highSurrogate;
  package$internal.lowSurrogate_za3lpa$ = lowSurrogate;
  package$internal.MalformedUTF8InputException = MalformedUTF8InputException;
  package$internal.$unsafeAppend$_a3tlu$ = $unsafeAppend$;
  var package$pool = package$io.pool || (package$io.pool = {});
  package$pool.ObjectPool = ObjectPool;
  package$pool.NoPoolImpl = NoPoolImpl;
  package$pool.SingleInstancePool = SingleInstancePool;
  package$bits.reverseByteOrder_5vcgdc$ = reverseByteOrder_2;
  package$bits.reverseByteOrder_s8ev3n$ = reverseByteOrder_3;
  package$bits.reverseByteOrder_mts6qi$ = reverseByteOrder_4;
  package$bits.reverseByteOrder_81szk$ = reverseByteOrder_5;
  package$bits.reverseByteOrder_yrwdxr$ = reverseByteOrder_6;
  Object.defineProperty(Charset, 'Companion', {get: Charset$Companion_getInstance});
  package$charsets.Charset = Charset;
  package$charsets.get_name_vfm6x$ = get_name;
  package$charsets.CharsetEncoder = CharsetEncoder;
  package$charsets.get_charset_molmk7$ = get_charset;
  package$charsets.encodeImpl_q9prrs$ = encodeImpl;
  package$charsets.encodeComplete_oyvka8$ = encodeComplete;
  package$charsets.CharsetDecoder = CharsetDecoder;
  package$charsets.get_charset_thjiap$ = get_charset_0;
  package$charsets.decode_l4l291$ = decode_0;
  package$charsets.decodeExactBytes_4lddy5$ = decodeExactBytes;
  Object.defineProperty(package$charsets, 'Charsets', {get: Charsets_getInstance});
  package$charsets.MalformedInputException = MalformedInputException;
  package$charsets.encodeISO88591_t9vhbd$ = encodeISO88591;
  Object.defineProperty(ByteOrder, 'BIG_ENDIAN', {get: ByteOrder$BIG_ENDIAN_getInstance});
  Object.defineProperty(ByteOrder, 'LITTLE_ENDIAN', {get: ByteOrder$LITTLE_ENDIAN_getInstance});
  Object.defineProperty(ByteOrder, 'Companion', {get: ByteOrder$Companion_getInstance});
  package$core.ByteOrder = ByteOrder;
  package$core.BytePacketBuilderPlatformBase = BytePacketBuilderPlatformBase;
  package$core.ByteReadPacketPlatformBase = ByteReadPacketPlatformBase;
  Object.defineProperty(ByteReadPacket_0, 'Companion', {get: ByteReadPacket$Companion_getInstance});
  package$core.ByteReadPacket_init_3npcxq$ = ByteReadPacket_init;
  package$core.ByteReadPacket = ByteReadPacket_0;
  package$core.Closeable = Closeable;
  package$core.Input = Input;
  Object.defineProperty(IoBuffer, 'Companion', {get: IoBuffer$Companion_getInstance});
  package$core.Output = Output;
  package$core.String_37vbci$ = String_0;
  package$core.checkIndices_khgzz8$ = checkIndices;
  package$core.getCharsInternal_8t7fl6$ = getCharsInternal;
  var package$errors = package$io.errors || (package$io.errors = {});
  package$errors.IOException_init_61zpoe$ = IOException_init;
  package$errors.IOException = IOException;
  package$errors.EOFException = EOFException;
  var package$js = package$io.js || (package$io.js = {});
  package$js.TextDecoderFatal_t8jjq2$ = TextDecoderFatal;
  package$js.TextEncoderCtor_8be2vx$ = TextEncoderCtor;
  package$pool.DefaultPool = DefaultPool;
  NoPoolImpl.prototype.close = ObjectPool.prototype.close;
  ByteReadPacketBase.prototype.readFully_bj0s3a$ = Input.prototype.readFully_bj0s3a$;
  SingleInstancePool.prototype.close = ObjectPool.prototype.close;
  DefaultPool.prototype.close = ObjectPool.prototype.close;
  IoBuffer.prototype.readFully_bj0s3a$ = Input.prototype.readFully_bj0s3a$;
  EmptyByteArray = new Int8Array(0);
  MaxCodePoint = 1114111;
  MinLowSurrogate = 56320;
  MinHighSurrogate = 55296;
  MinSupplementary = 65536;
  HighSurrogateMagic = 55232;
  PACKET_MAX_COPY_SIZE = 200;
  BUFFER_VIEW_POOL_SIZE = 100;
  BUFFER_VIEW_SIZE = 4096;
  var $receiver = new Any();
  $receiver.stream = true;
  STREAM_TRUE = $receiver;
  var $receiver_0 = new Any();
  $receiver_0.fatal = true;
  FATAL_TRUE = $receiver_0;
  return _;
}));

//# sourceMappingURL=kotlinx-io.js.map
