(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-http', 'mirror-runtime', 'ktor-client-core', 'kotlinx-serialization-runtime-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-http'), require('mirror-runtime'), require('ktor-client-core'), require('kotlinx-serialization-runtime-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mirror-ktor'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mirror-ktor'.");
    }
    if (typeof this['ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'mirror-ktor'. Its dependency 'ktor-http' was not found. Please, check whether 'ktor-http' is loaded prior to 'mirror-ktor'.");
    }
    if (typeof this['mirror-runtime'] === 'undefined') {
      throw new Error("Error loading module 'mirror-ktor'. Its dependency 'mirror-runtime' was not found. Please, check whether 'mirror-runtime' is loaded prior to 'mirror-ktor'.");
    }
    if (typeof this['ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'mirror-ktor'. Its dependency 'ktor-client-core' was not found. Please, check whether 'ktor-client-core' is loaded prior to 'mirror-ktor'.");
    }
    if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
      throw new Error("Error loading module 'mirror-ktor'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'mirror-ktor'.");
    }
    root['mirror-ktor'] = factory(typeof this['mirror-ktor'] === 'undefined' ? {} : this['mirror-ktor'], kotlin, this['ktor-http'], this['mirror-runtime'], this['ktor-client-core'], this['kotlinx-serialization-runtime-js']);
  }
}(this, function (_, Kotlin, $module$ktor_http, $module$mirror_runtime, $module$ktor_client_core, $module$kotlinx_serialization_runtime_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpMethod = $module$ktor_http.io.ktor.http.HttpMethod;
  var RequestMirror = $module$mirror_runtime.com.lightningkite.mirror.request.RequestMirror;
  var throwCCE = Kotlin.throwCCE;
  var accept = $module$ktor_client_core.io.ktor.client.request.accept_fohfhi$;
  var Unit = Kotlin.kotlin.Unit;
  var call = $module$ktor_client_core.io.ktor.client.call.call_1t1q32$;
  var RemoteResultMirror = $module$mirror_runtime.com.lightningkite.mirror.request.RemoteResultMirror;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Request$Handler = $module$mirror_runtime.com.lightningkite.mirror.request.Request.Handler;
  var get_returnType = $module$mirror_runtime.com.lightningkite.mirror.request.get_returnType_ig7i2s$;
  var ContentType = $module$ktor_http.io.ktor.http.ContentType;
  var Json = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.Json;
  var ContentType_init = $module$ktor_http.io.ktor.http.ContentType_init_bo4f5s$;
  var Cbor = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.cbor.Cbor;
  var ProtoBuf = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.protobuf.ProtoBuf;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var TextContent = $module$ktor_http.io.ktor.http.content.TextContent;
  var ByteArrayContent = $module$ktor_http.io.ktor.http.content.ByteArrayContent;
  var StringFormat = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.StringFormat;
  var BinaryFormat = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.BinaryFormat;
  var readText = $module$ktor_client_core.io.ktor.client.response.readText_jsbrsb$;
  var readBytes = $module$ktor_client_core.io.ktor.client.response.readBytes_fcnupu$;
  function HttpClientRequestHandler(client, url, serializer, contentType) {
    if (contentType === void 0)
      contentType = contentTypeOrFail(serializer);
    this.client = client;
    this.url = url;
    this.serializer = serializer;
    this.contentType = contentType;
  }
  function Coroutine$HttpClientRequestHandler$invoke$lambda(this$HttpClientRequestHandler_0, closure$request_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpClientRequestHandler = this$HttpClientRequestHandler_0;
    this.local$closure$request = closure$request_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpClientRequestHandler$invoke$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$HttpClientRequestHandler$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClientRequestHandler$invoke$lambda.prototype.constructor = Coroutine$HttpClientRequestHandler$invoke$lambda;
  Coroutine$HttpClientRequestHandler$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.local$$receiver.method = HttpMethod.Companion.Post;
            tmp$_2 = this.local$this$HttpClientRequestHandler.serializer;
            tmp$_0 = Kotlin.isType(tmp$ = RequestMirror.Companion.minimal, RequestMirror) ? tmp$ : throwCCE();
            tmp$_1 = this.local$this$HttpClientRequestHandler.contentType;
            this.local$$receiver.body = ktorContent_1(tmp$_2, tmp$_0, this.local$closure$request, tmp$_1);
            return accept(this.local$$receiver, this.local$this$HttpClientRequestHandler.contentType), Unit;
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
  function HttpClientRequestHandler$invoke$lambda(this$HttpClientRequestHandler_0, closure$request_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClientRequestHandler$invoke$lambda(this$HttpClientRequestHandler_0, closure$request_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$invoke_hvgtyk$($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$request = request_0;
  }
  Coroutine$invoke_hvgtyk$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$invoke_hvgtyk$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_hvgtyk$.prototype.constructor = Coroutine$invoke_hvgtyk$;
  Coroutine$invoke_hvgtyk$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = call(this.$this.client, this.$this.url, HttpClientRequestHandler$invoke$lambda(this.$this, this.local$request), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            this.state_0 = 3;
            this.result_0 = ktorResponse_1(this.$this.serializer, Kotlin.isType(tmp$ = new RemoteResultMirror(get_returnType(Kotlin.getKClassFromExpression(this.local$request))), RemoteResultMirror) ? tmp$ : throwCCE(), result.response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var raw = this.result_0;
            return raw.result;
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
  HttpClientRequestHandler.prototype.invoke_hvgtyk$ = function (request_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_hvgtyk$(this, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpClientRequestHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpClientRequestHandler', interfaces: [Request$Handler]};
  function contentType($receiver) {
    if (Kotlin.isType($receiver, Json))
      return ContentType.Application.Json;
    else if (Kotlin.isType($receiver, Cbor))
      return ContentType_init('application', 'cbor');
    else if (Kotlin.isType($receiver, ProtoBuf))
      return ContentType_init('application', 'protobuf');
    else
      return null;
  }
  function contentTypeOrFail($receiver) {
    var tmp$;
    tmp$ = contentType($receiver);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Content type for serializer ' + $receiver + ' is not known.');
    }
    return tmp$;
  }
  function ktorContent($receiver, serializationStrategy, value, contentType) {
    var tmp$;
    if (contentType === void 0) {
      tmp$ = contentTypeOrFail($receiver);
      if (tmp$ == null) {
        throw UnsupportedOperationException_init('No content type known for format ' + $receiver);
      }
      contentType = tmp$;
    }
    return new TextContent($receiver.stringify_tf03ej$(serializationStrategy, value), contentType);
  }
  function ktorContent_0($receiver, serializationStrategy, value, contentType) {
    if (contentType === void 0)
      contentType = contentTypeOrFail($receiver);
    return new ByteArrayContent($receiver.dump_tf03ej$(serializationStrategy, value), contentType);
  }
  function ktorContent_1($receiver, serializationStrategy, value, contentType) {
    if (contentType === void 0)
      contentType = contentTypeOrFail($receiver);
    if (Kotlin.isType($receiver, StringFormat))
      return ktorContent($receiver, serializationStrategy, value, contentType);
    else if (Kotlin.isType($receiver, BinaryFormat))
      return ktorContent_0($receiver, serializationStrategy, value, contentType);
    else
      throw IllegalArgumentException_init('Unknown serial format type ' + $receiver);
  }
  function Coroutine$ktorResponse($receiver_0, deserializer_0, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deserializer = deserializer_0;
    this.local$response = response_0;
  }
  Coroutine$ktorResponse.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ktorResponse.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ktorResponse.prototype.constructor = Coroutine$ktorResponse;
  Coroutine$ktorResponse.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readText(this.local$response, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.parse_awif5v$(this.local$deserializer, this.result_0);
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
  function ktorResponse($receiver_0, deserializer_0, response_0, continuation_0, suspended) {
    var instance = new Coroutine$ktorResponse($receiver_0, deserializer_0, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ktorResponse_0($receiver_0, deserializer_0, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deserializer = deserializer_0;
    this.local$response = response_0;
  }
  Coroutine$ktorResponse_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ktorResponse_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ktorResponse_0.prototype.constructor = Coroutine$ktorResponse_0;
  Coroutine$ktorResponse_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBytes(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.load_dntfbn$(this.local$deserializer, this.result_0);
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
  function ktorResponse_0($receiver_0, deserializer_0, response_0, continuation_0, suspended) {
    var instance = new Coroutine$ktorResponse_0($receiver_0, deserializer_0, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ktorResponse_1($receiver_0, deserializer_0, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deserializer = deserializer_0;
    this.local$response = response_0;
  }
  Coroutine$ktorResponse_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ktorResponse_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ktorResponse_1.prototype.constructor = Coroutine$ktorResponse_1;
  Coroutine$ktorResponse_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$$receiver, StringFormat)) {
              this.state_0 = 4;
              this.result_0 = ktorResponse(this.local$$receiver, this.local$deserializer, this.local$response, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$$receiver, BinaryFormat)) {
                this.state_0 = 2;
                this.result_0 = ktorResponse_0(this.local$$receiver, this.local$deserializer, this.local$response, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                throw IllegalArgumentException_init('Unknown serial format type ' + this.local$$receiver);
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            return this.result_0;
          case 5:
            return;
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
  function ktorResponse_1($receiver_0, deserializer_0, response_0, continuation_0, suspended) {
    var instance = new Coroutine$ktorResponse_1($receiver_0, deserializer_0, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  $$importsForInline$$['mirror-runtime'] = $module$mirror_runtime;
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$mirror = package$lightningkite.mirror || (package$lightningkite.mirror = {});
  var package$ktor = package$mirror.ktor || (package$mirror.ktor = {});
  package$ktor.HttpClientRequestHandler = HttpClientRequestHandler;
  package$ktor.contentType_fxu8s1$ = contentType;
  package$ktor.contentTypeOrFail_fxu8s1$ = contentTypeOrFail;
  package$ktor.ktorContent_eqg84i$ = ktorContent;
  package$ktor.ktorContent_o84oia$ = ktorContent_0;
  package$ktor.ktorContent_ox7mp1$ = ktorContent_1;
  package$ktor.ktorResponse_gsmk5y$ = ktorResponse;
  package$ktor.ktorResponse_hnxl5m$ = ktorResponse_0;
  package$ktor.ktorResponse_31fwy5$ = ktorResponse_1;
  return _;
}));

//# sourceMappingURL=mirror-ktor.js.map
