(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'reacktive', 'kommon', 'koolui', 'mirror-archive-api', 'lokalize', 'mirror-runtime', 'mirror-form', 'kotlinx-serialization-runtime-js', 'ktor-client-core', 'mirror-ktor'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('reacktive'), require('kommon'), require('koolui'), require('mirror-archive-api'), require('lokalize'), require('mirror-runtime'), require('mirror-form'), require('kotlinx-serialization-runtime-js'), require('ktor-client-core'), require('mirror-ktor'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'test'.");
    }
    if (typeof reacktive === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'reacktive' was not found. Please, check whether 'reacktive' is loaded prior to 'test'.");
    }
    if (typeof kommon === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'kommon' was not found. Please, check whether 'kommon' is loaded prior to 'test'.");
    }
    if (typeof koolui === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'koolui' was not found. Please, check whether 'koolui' is loaded prior to 'test'.");
    }
    if (typeof this['mirror-archive-api'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'mirror-archive-api' was not found. Please, check whether 'mirror-archive-api' is loaded prior to 'test'.");
    }
    if (typeof lokalize === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'lokalize' was not found. Please, check whether 'lokalize' is loaded prior to 'test'.");
    }
    if (typeof this['mirror-runtime'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'mirror-runtime' was not found. Please, check whether 'mirror-runtime' is loaded prior to 'test'.");
    }
    if (typeof this['mirror-form'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'mirror-form' was not found. Please, check whether 'mirror-form' is loaded prior to 'test'.");
    }
    if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'test'.");
    }
    if (typeof this['ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'ktor-client-core' was not found. Please, check whether 'ktor-client-core' is loaded prior to 'test'.");
    }
    if (typeof this['mirror-ktor'] === 'undefined') {
      throw new Error("Error loading module 'test'. Its dependency 'mirror-ktor' was not found. Please, check whether 'mirror-ktor' is loaded prior to 'test'.");
    }
    root.test = factory(typeof test === 'undefined' ? {} : test, kotlin, reacktive, kommon, koolui, this['mirror-archive-api'], lokalize, this['mirror-runtime'], this['mirror-form'], this['kotlinx-serialization-runtime-js'], this['ktor-client-core'], this['mirror-ktor']);
  }
}(this, function (_, Kotlin, $module$reacktive, $module$kommon, $module$koolui, $module$mirror_archive_api, $module$lokalize, $module$mirror_runtime, $module$mirror_form, $module$kotlinx_serialization_runtime_js, $module$ktor_client_core, $module$mirror_ktor) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var WrapperObservableList = $module$reacktive.com.lightningkite.reacktive.list.WrapperObservableList;
  var push = $module$kommon.com.lightningkite.kommon.collection.push_dwdffb$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ViewGenerator = $module$koolui.com.lightningkite.koolui.views.ViewGenerator;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Database$Request = $module$mirror_archive_api.com.lightningkite.mirror.archive.database.Database.Request;
  var Uuid = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Uuid;
  var TimeStamp = $module$lokalize.com.lightningkite.lokalize.time.TimeStamp;
  var now = $module$lokalize.com.lightningkite.lokalize.time.now_4yyikv$;
  var HasUuid = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.HasUuid;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Request = $module$mirror_runtime.com.lightningkite.mirror.request.Request;
  var Email = $module$kommon.com.lightningkite.kommon.string.Email;
  var L0 = Kotlin.Long.ZERO;
  var transform = $module$reacktive.com.lightningkite.reacktive.property.transform_9a5tou$;
  var Importance = $module$koolui.com.lightningkite.koolui.concepts.Importance;
  var Unit = Kotlin.kotlin.Unit;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var RamDatabase = $module$mirror_archive_api.com.lightningkite.mirror.archive.database.RamDatabase;
  var Reference = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.Reference;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var GeneralRequest = $module$mirror_form.com.lightningkite.mirror.form.GeneralRequest;
  var MutableObservableList = $module$reacktive.com.lightningkite.reacktive.list.MutableObservableList;
  var throwCCE = Kotlin.throwCCE;
  var info = $module$mirror_runtime.com.lightningkite.mirror.info;
  var ListMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ListMirror;
  var FormState = $module$mirror_form.com.lightningkite.mirror.form.FormState;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var StandardObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.StandardObservableProperty;
  var FormRequest = $module$mirror_form.com.lightningkite.mirror.form.FormRequest;
  var DatabaseVG = $module$mirror_form.com.lightningkite.mirror.form.other.DatabaseVG;
  var observableListOf = $module$reacktive.com.lightningkite.reacktive.list.observableListOf_i5x0yv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ViewFactory = $module$koolui.com.lightningkite.koolui.views.ViewFactory;
  var registerArchive = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.registerArchive;
  var registerKotlin = $module$mirror_runtime.com.lightningkite.mirror.request.registerKotlin;
  var registerRequests = $module$mirror_runtime.com.lightningkite.mirror.request.registerRequests;
  var Json = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.Json;
  var HttpClient = $module$ktor_client_core.io.ktor.client.HttpClient_f0veat$;
  var HttpClientRequestHandler = $module$mirror_ktor.com.lightningkite.mirror.ktor.HttpClientRequestHandler;
  var AtomicReference = $module$kommon.com.lightningkite.kommon.atomic.AtomicReference;
  var MirrorType = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorType;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var launchInfoDialog = $module$koolui.com.lightningkite.koolui.builders.launchInfoDialog_h9sd6e$;
  var FormViewGenerator = $module$mirror_form.com.lightningkite.mirror.form.form.FormViewGenerator;
  var pushFrom = $module$kommon.com.lightningkite.kommon.collection.pushFrom_8lsfpt$;
  var ViewSize = $module$mirror_form.com.lightningkite.mirror.form.ViewSize;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var flatMap = Kotlin.kotlin.sequences.flatMap_49vfel$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var asObservableList = $module$reacktive.com.lightningkite.reacktive.list.asObservableList_2p1efm$;
  var ConstantObservableProperty = $module$reacktive.com.lightningkite.reacktive.property.ConstantObservableProperty;
  var DisplayRequest = $module$mirror_form.com.lightningkite.mirror.form.DisplayRequest;
  var getKClass = Kotlin.getKClass;
  var BackedByString = $module$kommon.com.lightningkite.kommon.string.BackedByString;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var MirrorClass$Modifier = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass.Modifier;
  var PolymorphicMirror = $module$mirror_runtime.com.lightningkite.mirror.info.PolymorphicMirror;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Variance = $module$mirror_runtime.com.lightningkite.mirror.info.Variance;
  var TypeArgumentMirrorType = $module$mirror_runtime.com.lightningkite.mirror.info.TypeArgumentMirrorType;
  var MirrorClassCompanion = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClassCompanion;
  var Database = $module$mirror_archive_api.com.lightningkite.mirror.archive.database.Database;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var MirrorClass = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass;
  var MirrorClass$Field = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorClass.Field;
  var FormEditOnly = $module$mirror_form.com.lightningkite.mirror.form.info.FormEditOnly;
  var MirrorAnnotation = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorAnnotation;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var FormHidden = $module$mirror_form.com.lightningkite.mirror.form.info.FormHidden;
  var FormNeedsNoContext = $module$mirror_form.com.lightningkite.mirror.form.info.FormNeedsNoContext;
  var model = $module$mirror_archive_api.com.lightningkite.mirror.archive.model;
  var ReferenceMirror = $module$mirror_archive_api.com.lightningkite.mirror.archive.model.ReferenceMirror;
  var time = $module$mirror_archive_api.com.lightningkite.lokalize.time;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var RequestMirror = $module$mirror_runtime.com.lightningkite.mirror.request.RequestMirror;
  var ThrowsTypesMirror = $module$mirror_runtime.com.lightningkite.mirror.info.ThrowsTypesMirror;
  var MirrorEnum = $module$mirror_runtime.com.lightningkite.mirror.info.MirrorEnum;
  var Theme = $module$koolui.com.lightningkite.koolui.color.Theme;
  var HtmlViewFactory = $module$koolui.com.lightningkite.koolui.views.HtmlViewFactory;
  var ensureNotNull = Kotlin.ensureNotNull;
  var contentRoot = $module$koolui.com.lightningkite.koolui.builders.contentRoot_8wn5gt$;
  User$Role.prototype = Object.create(Enum.prototype);
  User$Role.prototype.constructor = User$Role;
  BackedByStringMirror.prototype = Object.create(PolymorphicMirror.prototype);
  BackedByStringMirror.prototype.constructor = BackedByStringMirror;
  DatabaseRequestMirror.prototype = Object.create(PolymorphicMirror.prototype);
  DatabaseRequestMirror.prototype.constructor = DatabaseRequestMirror;
  EmailMirror.prototype = Object.create(MirrorClass.prototype);
  EmailMirror.prototype.constructor = EmailMirror;
  PostAccessMirror.prototype = Object.create(MirrorClass.prototype);
  PostAccessMirror.prototype.constructor = PostAccessMirror;
  PostMirror.prototype = Object.create(MirrorClass.prototype);
  PostMirror.prototype.constructor = PostMirror;
  UserAccessMirror.prototype = Object.create(MirrorClass.prototype);
  UserAccessMirror.prototype.constructor = UserAccessMirror;
  UserGetTokenMirror.prototype = Object.create(MirrorClass.prototype);
  UserGetTokenMirror.prototype.constructor = UserGetTokenMirror;
  UserMirror.prototype = Object.create(MirrorClass.prototype);
  UserMirror.prototype.constructor = UserMirror;
  UserResetPasswordMirror.prototype = Object.create(MirrorClass.prototype);
  UserResetPasswordMirror.prototype.constructor = UserResetPasswordMirror;
  UserRoleMirror.prototype = Object.create(MirrorEnum.prototype);
  UserRoleMirror.prototype.constructor = UserRoleMirror;
  UserTokenMirror.prototype = Object.create(MirrorClass.prototype);
  UserTokenMirror.prototype.constructor = UserTokenMirror;
  function MainVG() {
    this.title_ewb6r1$_0 = 'KotlinX UI Test';
    this.stack = new WrapperObservableList();
    registerEverything();
    push(this.stack, new SelectorVG(this.stack));
  }
  Object.defineProperty(MainVG.prototype, 'title', {
    get: function () {
      return this.title_ewb6r1$_0;
    }
  });
  MainVG.prototype.generate_11rb$ = function (dependency) {
    return dependency.window_f4pd4v$(dependency, this.stack, emptyList());
  };
  MainVG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainVG',
    interfaces: [ViewGenerator]
  };
  function Post(id, title, author, posted, body) {
    if (id === void 0)
      id = Uuid.Companion.randomUUID4();
    if (title === void 0)
      title = '';
    if (posted === void 0)
      posted = now(TimeStamp.Companion);
    if (body === void 0)
      body = '';
    this.id_r6b9tw$_0 = id;
    this.title = title;
    this.author = author;
    this.posted = posted;
    this.body = body;
  }
  Object.defineProperty(Post.prototype, 'id', {
    get: function () {
      return this.id_r6b9tw$_0;
    }
  });
  function Post$Access(token) {
    if (token === void 0)
      token = null;
    this.token = token;
  }
  Post$Access.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Access',
    interfaces: [Database$Request]
  };
  Post$Access.prototype.component1 = function () {
    return this.token;
  };
  Post$Access.prototype.copy_5drizi$ = function (token) {
    return new Post$Access(token === void 0 ? this.token : token);
  };
  Post$Access.prototype.toString = function () {
    return 'Access(token=' + Kotlin.toString(this.token) + ')';
  };
  Post$Access.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  Post$Access.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.token, other.token))));
  };
  Post.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Post',
    interfaces: [HasUuid]
  };
  Post.prototype.component1 = function () {
    return this.id;
  };
  Post.prototype.component2 = function () {
    return this.title;
  };
  Post.prototype.component3 = function () {
    return this.author;
  };
  Post.prototype.component4 = function () {
    return this.posted;
  };
  Post.prototype.component5 = function () {
    return this.body;
  };
  Post.prototype.copy_xfzrno$ = function (id, title, author, posted, body) {
    return new Post(id === void 0 ? this.id : id, title === void 0 ? this.title : title, author === void 0 ? this.author : author, posted === void 0 ? this.posted : posted, body === void 0 ? this.body : body);
  };
  Post.prototype.toString = function () {
    return 'Post(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', author=' + Kotlin.toString(this.author)) + (', posted=' + Kotlin.toString(this.posted)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  Post.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.posted) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  Post.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.posted, other.posted) && Kotlin.equals(this.body, other.body)))));
  };
  function User(id, email, password, role, rejectTokensBefore) {
    if (id === void 0)
      id = Uuid.Companion.randomUUID4();
    if (email === void 0)
      email = new Email('');
    if (password === void 0)
      password = '';
    if (role === void 0)
      role = User$Role$Citizen_getInstance();
    if (rejectTokensBefore === void 0)
      rejectTokensBefore = new TimeStamp(L0);
    this.id_qxftpj$_0 = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.rejectTokensBefore = rejectTokensBefore;
  }
  Object.defineProperty(User.prototype, 'id', {
    get: function () {
      return this.id_qxftpj$_0;
    },
    set: function (id) {
      this.id_qxftpj$_0 = id;
    }
  });
  function User$Token(string) {
    this.string = string;
  }
  User$Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  User$Token.prototype.component1 = function () {
    return this.string;
  };
  User$Token.prototype.copy_61zpoe$ = function (string) {
    return new User$Token(string === void 0 ? this.string : string);
  };
  User$Token.prototype.toString = function () {
    return 'Token(string=' + Kotlin.toString(this.string) + ')';
  };
  User$Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  User$Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function User$Role(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function User$Role_initFields() {
    User$Role_initFields = function () {
    };
    User$Role$Citizen_instance = new User$Role('Citizen', 0);
    User$Role$Admin_instance = new User$Role('Admin', 1);
  }
  var User$Role$Citizen_instance;
  function User$Role$Citizen_getInstance() {
    User$Role_initFields();
    return User$Role$Citizen_instance;
  }
  var User$Role$Admin_instance;
  function User$Role$Admin_getInstance() {
    User$Role_initFields();
    return User$Role$Admin_instance;
  }
  User$Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: [Enum]
  };
  function User$Role$values() {
    return [User$Role$Citizen_getInstance(), User$Role$Admin_getInstance()];
  }
  User$Role.values = User$Role$values;
  function User$Role$valueOf(name) {
    switch (name) {
      case 'Citizen':
        return User$Role$Citizen_getInstance();
      case 'Admin':
        return User$Role$Admin_getInstance();
      default:throwISE('No enum constant com.lightningkite.krosslin.test.models.User.Role.' + name);
    }
  }
  User$Role.valueOf_61zpoe$ = User$Role$valueOf;
  function User$Access(token) {
    if (token === void 0)
      token = null;
    this.token = token;
  }
  User$Access.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Access',
    interfaces: [Database$Request]
  };
  User$Access.prototype.component1 = function () {
    return this.token;
  };
  User$Access.prototype.copy_5drizi$ = function (token) {
    return new User$Access(token === void 0 ? this.token : token);
  };
  User$Access.prototype.toString = function () {
    return 'Access(token=' + Kotlin.toString(this.token) + ')';
  };
  User$Access.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  User$Access.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.token, other.token))));
  };
  function User$GetToken(email, password) {
    this.email = email;
    this.password = password;
  }
  User$GetToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetToken',
    interfaces: [Request]
  };
  User$GetToken.prototype.component1 = function () {
    return this.email;
  };
  User$GetToken.prototype.component2 = function () {
    return this.password;
  };
  User$GetToken.prototype.copy_urw3ja$ = function (email, password) {
    return new User$GetToken(email === void 0 ? this.email : email, password === void 0 ? this.password : password);
  };
  User$GetToken.prototype.toString = function () {
    return 'GetToken(email=' + Kotlin.toString(this.email) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  User$GetToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  User$GetToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.email, other.email) && Kotlin.equals(this.password, other.password)))));
  };
  function User$ResetPassword(email) {
    this.email = email;
  }
  User$ResetPassword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResetPassword',
    interfaces: [Request]
  };
  User$ResetPassword.prototype.component1 = function () {
    return this.email;
  };
  User$ResetPassword.prototype.copy_qx24fs$ = function (email) {
    return new User$ResetPassword(email === void 0 ? this.email : email);
  };
  User$ResetPassword.prototype.toString = function () {
    return 'ResetPassword(email=' + Kotlin.toString(this.email) + ')';
  };
  User$ResetPassword.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  User$ResetPassword.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.email, other.email))));
  };
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: [HasUuid]
  };
  User.prototype.component1 = function () {
    return this.id;
  };
  User.prototype.component2 = function () {
    return this.email;
  };
  User.prototype.component3 = function () {
    return this.password;
  };
  User.prototype.component4 = function () {
    return this.role;
  };
  User.prototype.component5 = function () {
    return this.rejectTokensBefore;
  };
  User.prototype.copy_xuf087$ = function (id, email, password, role, rejectTokensBefore) {
    return new User(id === void 0 ? this.id : id, email === void 0 ? this.email : email, password === void 0 ? this.password : password, role === void 0 ? this.role : role, rejectTokensBefore === void 0 ? this.rejectTokensBefore : rejectTokensBefore);
  };
  User.prototype.toString = function () {
    return 'User(id=' + Kotlin.toString(this.id) + (', email=' + Kotlin.toString(this.email)) + (', password=' + Kotlin.toString(this.password)) + (', role=' + Kotlin.toString(this.role)) + (', rejectTokensBefore=' + Kotlin.toString(this.rejectTokensBefore)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.role) | 0;
    result = result * 31 + Kotlin.hashCode(this.rejectTokensBefore) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.role, other.role) && Kotlin.equals(this.rejectTokensBefore, other.rejectTokensBefore)))));
  };
  function SelectorVG(stack) {
    this.stack = stack;
    this.title_l428l5$_0 = 'KotlinX UI Test';
    this.userAdmin = new User(void 0, new Email('joseph@lightningkite.com'), 'test', User$Role$Admin_getInstance());
    this.userCitizen = new User(void 0, new Email('citizen@gmail.com'), 'test', User$Role$Citizen_getInstance());
    this.userDb = new RamDatabase(UserMirror_getInstance(), void 0, mutableListOf([this.userAdmin, this.userCitizen]));
    this.postDb = new RamDatabase(PostMirror_getInstance(), void 0, mutableListOf([new Post(void 0, 'Test Post', new Reference(this.userAdmin.id), void 0, "Hello, this is my test post.  It could be much much longer, but it's not.  I'm bored now.")]));
    this.general = new GeneralRequest(void 0, void 0, void 0, mapOf([to(UserMirror_getInstance(), this.userDb), to(PostMirror_getInstance(), this.postDb)]));
    this.tests = observableListOf([to('Form', SelectorVG$tests$lambda(this)), to('View', SelectorVG$tests$lambda_0(this)), to('ListTest', SelectorVG$tests$lambda_1(this)), to('PostDB', SelectorVG$tests$lambda_2(this)), to('UserDB', SelectorVG$tests$lambda_3(this))]);
  }
  Object.defineProperty(SelectorVG.prototype, 'title', {
    get: function () {
      return this.title_l428l5$_0;
    }
  });
  function SelectorVG$generate$lambda$lambda$lambda(item) {
    return item.first;
  }
  function SelectorVG$generate$lambda$lambda$lambda_0(this$SelectorVG, closure$itemObs) {
    return function () {
      push(this$SelectorVG.stack, closure$itemObs.value.second());
      return Unit;
    };
  }
  function SelectorVG$generate$lambda$lambda(this$SelectorVG, this$) {
    return function (itemObs) {
      return this$.button_tmzrmh$(transform(itemObs, SelectorVG$generate$lambda$lambda$lambda), void 0, Importance.Low, SelectorVG$generate$lambda$lambda$lambda_0(this$SelectorVG, itemObs));
    };
  }
  SelectorVG.prototype.generate_11rb$ = function (dependency) {
    return dependency.margin_ovmznb$(dependency.list_s8g4or$(this.tests, void 0, void 0, void 0, SelectorVG$generate$lambda$lambda(this, dependency)), 8.0);
  };
  function SelectorVG$tests$lambda(this$SelectorVG) {
    return function () {
      return new TestFormsVG(this$SelectorVG.stack);
    };
  }
  function SelectorVG$tests$lambda_0(this$SelectorVG) {
    return function () {
      return new TestViewsVG(this$SelectorVG.stack);
    };
  }
  function SelectorVG$tests$lambda_1(this$SelectorVG) {
    return function () {
      var tmp$;
      return (new FormRequest(this$SelectorVG.general.copy_sjdhil$(void 0, void 0, void 0, void 0, void 0, Kotlin.isType(tmp$ = this$SelectorVG.stack, MutableObservableList) ? tmp$ : throwCCE()), new ListMirror(info.StringMirror), void 0, void 0, new StandardObservableProperty(FormState.Companion.success_mh5how$(listOf(['First', 'Second', 'Third']))))).getVG_2921t4$();
    };
  }
  function SelectorVG$tests$lambda_2(this$SelectorVG) {
    return function () {
      return new DatabaseVG(this$SelectorVG.stack, PostMirror_getInstance(), this$SelectorVG.postDb, void 0, this$SelectorVG.general.copy_sjdhil$(void 0, void 0, void 0, void 0, void 0, this$SelectorVG.stack));
    };
  }
  function SelectorVG$tests$lambda_3(this$SelectorVG) {
    return function () {
      return new DatabaseVG(this$SelectorVG.stack, UserMirror_getInstance(), this$SelectorVG.userDb, void 0, this$SelectorVG.general.copy_sjdhil$(void 0, void 0, void 0, void 0, void 0, this$SelectorVG.stack));
    };
  }
  SelectorVG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectorVG',
    interfaces: [ViewGenerator]
  };
  function MyViewFactory() {
  }
  MyViewFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MyViewFactory',
    interfaces: [ViewFactory]
  };
  function registerEverything() {
    registerKrosslinTest();
    registerArchive();
    registerKotlin();
    registerRequests();
  }
  var rpcRequestSerializer;
  var atomicRequestHandler;
  function invoke($receiver, continuation) {
    return atomicRequestHandler.value.invoke_hvgtyk$($receiver, continuation);
  }
  function TestFormsVG(stack) {
    this.stack = stack;
    this.title_2ia2wr$_0 = 'KotlinX UI Test';
    this.options = asObservableList(toList(flatMap(asSequence(info.MirrorRegistry.index.value.byClass.values), TestFormsVG$options$lambda)));
  }
  Object.defineProperty(TestFormsVG.prototype, 'title', {
    get: function () {
      return this.title_2ia2wr$_0;
    }
  });
  function TestFormsVG$generate$lambda$lambda$lambda(it) {
    return it.base.localName + (it.isNullable ? ' (Optional)' : '');
  }
  function TestFormsVG$generate$lambda$lambda$lambda$lambda$lambda(it) {
    println('New value is: ' + it);
    return Unit;
  }
  function TestFormsVG$generate$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver, it) {
      launchInfoDialog(this$, 'Result', toString(it));
      return Unit;
    };
  }
  function TestFormsVG$generate$lambda$lambda$lambda_0(this$TestFormsVG, closure$obs, this$) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = new GeneralRequest(void 0, void 0, void 0, void 0, void 0, this$TestFormsVG.stack);
      tmp$_1 = Kotlin.isType(tmp$_0 = closure$obs.value, MirrorType) ? tmp$_0 : throwCCE();
      var tmp$_2;
      var $receiver = new StandardObservableProperty(Kotlin.isType(tmp$_2 = FormState.Empty, FormState) ? tmp$_2 : throwCCE());
      $receiver.add_11rb$(TestFormsVG$generate$lambda$lambda$lambda$lambda$lambda);
      var request = new FormRequest(tmp$, tmp$_1, void 0, void 0, $receiver);
      pushFrom(this$TestFormsVG.stack, this$TestFormsVG, new FormViewGenerator(request.getVG_2921t4$(), request.observable, TestFormsVG$generate$lambda$lambda$lambda$lambda(this$)));
      return Unit;
    };
  }
  function TestFormsVG$generate$lambda$lambda$lambda$lambda$lambda_0(it) {
    println('New value is: ' + it);
    return Unit;
  }
  function TestFormsVG$generate$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver, it) {
      launchInfoDialog(this$, 'Result', toString(it));
      return Unit;
    };
  }
  function TestFormsVG$generate$lambda$lambda$lambda_1(this$TestFormsVG, closure$obs, this$) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = new GeneralRequest(void 0, void 0, void 0, void 0, void 0, this$TestFormsVG.stack);
      tmp$_1 = Kotlin.isType(tmp$_0 = closure$obs.value, MirrorType) ? tmp$_0 : throwCCE();
      var tmp$_2;
      var $receiver = new StandardObservableProperty(Kotlin.isType(tmp$_2 = FormState.Empty, FormState) ? tmp$_2 : throwCCE());
      $receiver.add_11rb$(TestFormsVG$generate$lambda$lambda$lambda$lambda$lambda_0);
      var request = new FormRequest(tmp$, tmp$_1, ViewSize.Summary, void 0, $receiver);
      pushFrom(this$TestFormsVG.stack, this$TestFormsVG, new FormViewGenerator(request.getVG_2921t4$(), request.observable, TestFormsVG$generate$lambda$lambda$lambda$lambda_0(this$)));
      return Unit;
    };
  }
  function TestFormsVG$generate$lambda$lambda(this$TestFormsVG, this$) {
    return function (obs) {
      return this$.altClickable_5g8z5d$(this$.button_tmzrmh$(transform(obs, TestFormsVG$generate$lambda$lambda$lambda), void 0, void 0, TestFormsVG$generate$lambda$lambda$lambda_0(this$TestFormsVG, obs, this$)), TestFormsVG$generate$lambda$lambda$lambda_1(this$TestFormsVG, obs, this$));
    };
  }
  TestFormsVG.prototype.generate_11rb$ = function (dependency) {
    return dependency.list_s8g4or$(this.options, void 0, void 0, void 0, TestFormsVG$generate$lambda$lambda(this, dependency));
  };
  function TestFormsVG$options$lambda(it) {
    return sequenceOf([it, it.nullable]);
  }
  TestFormsVG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestFormsVG',
    interfaces: [ViewGenerator]
  };
  function TestViewsVG(stack) {
    this.stack = stack;
    this.title_wjr50$_0 = 'KotlinX UI Test';
    this.things = listOf([32, 'Hello world!', new Post(void 0, 'Hello!', new Reference(Uuid.Companion.randomUUID4()), void 0, 'This is the body of the post'), false]);
  }
  Object.defineProperty(TestViewsVG.prototype, 'title', {
    get: function () {
      return this.title_wjr50$_0;
    }
  });
  TestViewsVG.prototype.generate_11rb$ = function (dependency) {
    return (new DisplayRequest(new GeneralRequest(), ListMirror.Companion.minimal, void 0, void 0, void 0, new ConstantObservableProperty(this.things))).getVG_2921t4$().generate_11rb$(dependency);
  };
  TestViewsVG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestViewsVG',
    interfaces: [ViewGenerator]
  };
  function BackedByStringMirror() {
    BackedByStringMirror_instance = this;
    PolymorphicMirror.call(this);
  }
  Object.defineProperty(BackedByStringMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(BackedByString), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(BackedByStringMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Interface, MirrorClass$Modifier.Abstract];
    }
  });
  Object.defineProperty(BackedByStringMirror.prototype, 'implements', {
    get: function () {
      return [info.AnyMirror];
    }
  });
  Object.defineProperty(BackedByStringMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.kommon.string';
    }
  });
  Object.defineProperty(BackedByStringMirror.prototype, 'localName', {
    get: function () {
      return 'BackedByString';
    }
  });
  BackedByStringMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BackedByStringMirror',
    interfaces: [PolymorphicMirror]
  };
  var BackedByStringMirror_instance = null;
  function BackedByStringMirror_getInstance() {
    if (BackedByStringMirror_instance === null) {
      new BackedByStringMirror();
    }
    return BackedByStringMirror_instance;
  }
  function DatabaseRequestMirror(TMirror) {
    DatabaseRequestMirror$Companion_getInstance();
    PolymorphicMirror.call(this);
    this.TMirror = TMirror;
  }
  Object.defineProperty(DatabaseRequestMirror.prototype, 'mirrorClassCompanion', {
    get: function () {
      return DatabaseRequestMirror$Companion_getInstance();
    }
  });
  function DatabaseRequestMirror$Companion() {
    DatabaseRequestMirror$Companion_instance = this;
    this.minimal_cu5xv4$_0 = new DatabaseRequestMirror(new TypeArgumentMirrorType('T', Variance.INVARIANT, this.TMirrorMinimal));
  }
  Object.defineProperty(DatabaseRequestMirror$Companion.prototype, 'TMirrorMinimal', {
    get: function () {
      return info.AnyMirror;
    }
  });
  Object.defineProperty(DatabaseRequestMirror$Companion.prototype, 'minimal', {
    get: function () {
      return this.minimal_cu5xv4$_0;
    }
  });
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
  DatabaseRequestMirror$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MirrorClassCompanion]
  };
  var DatabaseRequestMirror$Companion_instance = null;
  function DatabaseRequestMirror$Companion_getInstance() {
    if (DatabaseRequestMirror$Companion_instance === null) {
      new DatabaseRequestMirror$Companion();
    }
    return DatabaseRequestMirror$Companion_instance;
  }
  Object.defineProperty(DatabaseRequestMirror.prototype, 'typeParameters', {
    get: function () {
      return [this.TMirror];
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(Database$Request), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Interface, MirrorClass$Modifier.Abstract];
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'implements', {
    get: function () {
      return [info.AnyMirror];
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.mirror.archive.database';
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'localName', {
    get: function () {
      return 'Database.Request';
    }
  });
  Object.defineProperty(DatabaseRequestMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(Database);
    }
  });
  DatabaseRequestMirror.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatabaseRequestMirror',
    interfaces: [PolymorphicMirror]
  };
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
  function EmailMirror() {
    EmailMirror_instance = this;
    MirrorClass.call(this);
    this.fieldString = new MirrorClass$Field(this, 0, 'string', info.StringMirror, false, EmailMirror$fieldString$lambda, void 0, emptyList());
    this.fields_usvd5y$_0 = [this.fieldString];
  }
  Object.defineProperty(EmailMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(Email), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(EmailMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Inline];
    }
  });
  Object.defineProperty(EmailMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.kommon.string';
    }
  });
  Object.defineProperty(EmailMirror.prototype, 'localName', {
    get: function () {
      return 'Email';
    }
  });
  Object.defineProperty(EmailMirror.prototype, 'implements', {
    get: function () {
      return [BackedByStringMirror_getInstance()];
    }
  });
  Object.defineProperty(EmailMirror.prototype, 'fields', {
    get: function () {
      return this.fields_usvd5y$_0;
    }
  });
  EmailMirror.prototype.deserialize_nts5qn$ = function (decoder) {
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
    return new Email(typeof (tmp$ = fieldString) === 'string' ? tmp$ : throwCCE());
  };
  EmailMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.string);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function EmailMirror$fieldString$lambda(it) {
    return it.string;
  }
  EmailMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmailMirror',
    interfaces: [MirrorClass]
  };
  var EmailMirror_instance = null;
  function EmailMirror_getInstance() {
    if (EmailMirror_instance === null) {
      new EmailMirror();
    }
    return EmailMirror_instance;
  }
  function FormEditOnlyMirror() {
  }
  Object.defineProperty(FormEditOnlyMirror.prototype, 'annotationType', {
    get: function () {
      return getKClass(FormEditOnly);
    }
  });
  FormEditOnlyMirror.prototype.asMap = function () {
    return emptyMap();
  };
  FormEditOnlyMirror.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormEditOnlyMirror',
    interfaces: [MirrorAnnotation]
  };
  function FormHiddenMirror() {
  }
  Object.defineProperty(FormHiddenMirror.prototype, 'annotationType', {
    get: function () {
      return getKClass(FormHidden);
    }
  });
  FormHiddenMirror.prototype.asMap = function () {
    return emptyMap();
  };
  FormHiddenMirror.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormHiddenMirror',
    interfaces: [MirrorAnnotation]
  };
  function FormNeedsNoContextMirror() {
  }
  Object.defineProperty(FormNeedsNoContextMirror.prototype, 'annotationType', {
    get: function () {
      return getKClass(FormNeedsNoContext);
    }
  });
  FormNeedsNoContextMirror.prototype.asMap = function () {
    return emptyMap();
  };
  FormNeedsNoContextMirror.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormNeedsNoContextMirror',
    interfaces: [MirrorAnnotation]
  };
  function PostAccessMirror() {
    PostAccessMirror_instance = this;
    MirrorClass.call(this);
    this.fieldToken = new MirrorClass$Field(this, 0, 'token', UserTokenMirror_getInstance().nullable, true, PostAccessMirror$fieldToken$lambda, void 0, emptyList());
    this.fields_9tugvz$_0 = [this.fieldToken];
  }
  Object.defineProperty(PostAccessMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(Post$Access), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'localName', {
    get: function () {
      return 'Post.Access';
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'implements', {
    get: function () {
      return [new DatabaseRequestMirror(PostMirror_getInstance())];
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(Post);
    }
  });
  Object.defineProperty(PostAccessMirror.prototype, 'fields', {
    get: function () {
      return this.fields_9tugvz$_0;
    }
  });
  PostAccessMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var tokenSet = false;
    var fieldToken = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldToken = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UserTokenMirror_getInstance().nullable);
          tokenSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldToken = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UserTokenMirror_getInstance().nullable);
          tokenSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!tokenSet) {
      fieldToken = null;
    }
    return new Post$Access((tmp$ = fieldToken) == null || Kotlin.isType(tmp$, User$Token) ? tmp$ : throwCCE());
  };
  PostAccessMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, UserTokenMirror_getInstance().nullable, obj.token);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function PostAccessMirror$fieldToken$lambda(it) {
    return it.token;
  }
  PostAccessMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PostAccessMirror',
    interfaces: [MirrorClass]
  };
  var PostAccessMirror_instance = null;
  function PostAccessMirror_getInstance() {
    if (PostAccessMirror_instance === null) {
      new PostAccessMirror();
    }
    return PostAccessMirror_instance;
  }
  function PostMirror() {
    PostMirror_instance = this;
    MirrorClass.call(this);
    this.fieldId = new MirrorClass$Field(this, 0, 'id', model.UuidMirror, true, PostMirror$fieldId$lambda, void 0, listOf_0(new FormHiddenMirror()));
    this.fieldTitle = new MirrorClass$Field(this, 1, 'title', info.StringMirror, true, PostMirror$fieldTitle$lambda, PostMirror$fieldTitle$lambda_0, listOf_0(new FormNeedsNoContextMirror()));
    this.fieldAuthor = new MirrorClass$Field(this, 2, 'author', new ReferenceMirror(UserMirror_getInstance()), false, PostMirror$fieldAuthor$lambda, PostMirror$fieldAuthor$lambda_0, emptyList());
    this.fieldPosted = new MirrorClass$Field(this, 3, 'posted', time.TimeStampMirror, true, PostMirror$fieldPosted$lambda, PostMirror$fieldPosted$lambda_0, emptyList());
    this.fieldBody = new MirrorClass$Field(this, 4, 'body', info.StringMirror, true, PostMirror$fieldBody$lambda, PostMirror$fieldBody$lambda_0, emptyList());
    this.fields_9ccgql$_0 = [this.fieldId, this.fieldTitle, this.fieldAuthor, this.fieldPosted, this.fieldBody];
  }
  Object.defineProperty(PostMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(Post), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(PostMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(PostMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(PostMirror.prototype, 'localName', {
    get: function () {
      return 'Post';
    }
  });
  Object.defineProperty(PostMirror.prototype, 'implements', {
    get: function () {
      return [model.HasUuidMirror];
    }
  });
  Object.defineProperty(PostMirror.prototype, 'fields', {
    get: function () {
      return this.fields_9ccgql$_0;
    }
  });
  PostMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var idSet = false;
    var fieldId = null;
    var titleSet = false;
    var fieldTitle = null;
    var authorSet = false;
    var fieldAuthor = null;
    var postedSet = false;
    var fieldPosted = null;
    var bodySet = false;
    var fieldBody = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldId = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, model.UuidMirror);
          idSet = true;
          fieldTitle = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          titleSet = true;
          fieldAuthor = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new ReferenceMirror(UserMirror_getInstance()));
          authorSet = true;
          fieldPosted = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, time.TimeStampMirror);
          postedSet = true;
          fieldBody = decoderStructure.decodeStringElement_3zr2iy$(this, 4);
          bodySet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldId = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, model.UuidMirror);
          idSet = true;
          break;
        case 1:
          fieldTitle = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          titleSet = true;
          break;
        case 2:
          fieldAuthor = decoderStructure.decodeSerializableElement_s44l7r$(this, 2, new ReferenceMirror(UserMirror_getInstance()));
          authorSet = true;
          break;
        case 3:
          fieldPosted = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, time.TimeStampMirror);
          postedSet = true;
          break;
        case 4:
          fieldBody = decoderStructure.decodeStringElement_3zr2iy$(this, 4);
          bodySet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!idSet) {
      fieldId = Uuid.Companion.randomUUID4();
    }
    if (!titleSet) {
      fieldTitle = '';
    }
    if (!authorSet) {
      throw new MissingFieldException('author');
    }
    if (!postedSet) {
      fieldPosted = now(TimeStamp.Companion);
    }
    if (!bodySet) {
      fieldBody = '';
    }
    return new Post(Kotlin.isType(tmp$ = fieldId, Uuid) ? tmp$ : throwCCE(), typeof (tmp$_0 = fieldTitle) === 'string' ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = fieldAuthor, Reference) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = fieldPosted, TimeStamp) ? tmp$_2 : throwCCE(), typeof (tmp$_3 = fieldBody) === 'string' ? tmp$_3 : throwCCE());
  };
  PostMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, model.UuidMirror, obj.id);
    encoderStructure.encodeStringElement_bgm7zs$(this, 1, obj.title);
    encoderStructure.encodeSerializableElement_blecud$(this, 2, new ReferenceMirror(UserMirror_getInstance()), obj.author);
    encoderStructure.encodeSerializableElement_blecud$(this, 3, time.TimeStampMirror, obj.posted);
    encoderStructure.encodeStringElement_bgm7zs$(this, 4, obj.body);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function PostMirror$fieldId$lambda(it) {
    return it.id;
  }
  function PostMirror$fieldTitle$lambda(it) {
    return it.title;
  }
  function PostMirror$fieldTitle$lambda_0(it, value) {
    it.title = value;
    return Unit;
  }
  function PostMirror$fieldAuthor$lambda(it) {
    return it.author;
  }
  function PostMirror$fieldAuthor$lambda_0(it, value) {
    it.author = value;
    return Unit;
  }
  function PostMirror$fieldPosted$lambda(it) {
    return it.posted;
  }
  function PostMirror$fieldPosted$lambda_0(it, value) {
    it.posted = value;
    return Unit;
  }
  function PostMirror$fieldBody$lambda(it) {
    return it.body;
  }
  function PostMirror$fieldBody$lambda_0(it, value) {
    it.body = value;
    return Unit;
  }
  PostMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PostMirror',
    interfaces: [MirrorClass]
  };
  var PostMirror_instance = null;
  function PostMirror_getInstance() {
    if (PostMirror_instance === null) {
      new PostMirror();
    }
    return PostMirror_instance;
  }
  function registerKrosslinTest() {
    info.MirrorRegistry.register_iraexb$([UserResetPasswordMirror_getInstance(), EmailMirror_getInstance(), BackedByStringMirror_getInstance(), UserGetTokenMirror_getInstance(), UserAccessMirror_getInstance(), DatabaseRequestMirror$Companion_getInstance().minimal, UserRoleMirror_getInstance(), UserTokenMirror_getInstance(), UserMirror_getInstance(), PostAccessMirror_getInstance(), PostMirror_getInstance()]);
  }
  function UserAccessMirror() {
    UserAccessMirror_instance = this;
    MirrorClass.call(this);
    this.fieldToken = new MirrorClass$Field(this, 0, 'token', UserTokenMirror_getInstance().nullable, true, UserAccessMirror$fieldToken$lambda, void 0, emptyList());
    this.fields_ynbelo$_0 = [this.fieldToken];
  }
  Object.defineProperty(UserAccessMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User$Access), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'localName', {
    get: function () {
      return 'User.Access';
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'implements', {
    get: function () {
      return [new DatabaseRequestMirror(UserMirror_getInstance())];
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(User);
    }
  });
  Object.defineProperty(UserAccessMirror.prototype, 'fields', {
    get: function () {
      return this.fields_ynbelo$_0;
    }
  });
  UserAccessMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var tokenSet = false;
    var fieldToken = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldToken = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UserTokenMirror_getInstance().nullable);
          tokenSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldToken = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, UserTokenMirror_getInstance().nullable);
          tokenSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!tokenSet) {
      fieldToken = null;
    }
    return new User$Access((tmp$ = fieldToken) == null || Kotlin.isType(tmp$, User$Token) ? tmp$ : throwCCE());
  };
  UserAccessMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, UserTokenMirror_getInstance().nullable, obj.token);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UserAccessMirror$fieldToken$lambda(it) {
    return it.token;
  }
  UserAccessMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserAccessMirror',
    interfaces: [MirrorClass]
  };
  var UserAccessMirror_instance = null;
  function UserAccessMirror_getInstance() {
    if (UserAccessMirror_instance === null) {
      new UserAccessMirror();
    }
    return UserAccessMirror_instance;
  }
  function UserGetTokenMirror() {
    UserGetTokenMirror_instance = this;
    MirrorClass.call(this);
    this.annotations_c56udw$_0 = listOf_0(new ThrowsTypesMirror(['NoSuchElementException', 'ForbiddenException']));
    this.fieldEmail = new MirrorClass$Field(this, 0, 'email', EmailMirror_getInstance(), false, UserGetTokenMirror$fieldEmail$lambda, void 0, emptyList());
    this.fieldPassword = new MirrorClass$Field(this, 1, 'password', info.StringMirror, false, UserGetTokenMirror$fieldPassword$lambda, void 0, emptyList());
    this.fields_n9e763$_0 = [this.fieldEmail, this.fieldPassword];
  }
  Object.defineProperty(UserGetTokenMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User$GetToken), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'localName', {
    get: function () {
      return 'User.GetToken';
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'implements', {
    get: function () {
      return [new RequestMirror(UserTokenMirror_getInstance())];
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(User);
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'annotations', {
    get: function () {
      return this.annotations_c56udw$_0;
    }
  });
  Object.defineProperty(UserGetTokenMirror.prototype, 'fields', {
    get: function () {
      return this.fields_n9e763$_0;
    }
  });
  UserGetTokenMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var emailSet = false;
    var fieldEmail = null;
    var passwordSet = false;
    var fieldPassword = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, EmailMirror_getInstance());
          emailSet = true;
          fieldPassword = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          passwordSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, EmailMirror_getInstance());
          emailSet = true;
          break;
        case 1:
          fieldPassword = decoderStructure.decodeStringElement_3zr2iy$(this, 1);
          passwordSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!emailSet) {
      throw new MissingFieldException('email');
    }
    if (!passwordSet) {
      throw new MissingFieldException('password');
    }
    return new User$GetToken(Kotlin.isType(tmp$ = fieldEmail, Email) ? tmp$ : throwCCE(), typeof (tmp$_0 = fieldPassword) === 'string' ? tmp$_0 : throwCCE());
  };
  UserGetTokenMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, EmailMirror_getInstance(), obj.email);
    encoderStructure.encodeStringElement_bgm7zs$(this, 1, obj.password);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UserGetTokenMirror$fieldEmail$lambda(it) {
    return it.email;
  }
  function UserGetTokenMirror$fieldPassword$lambda(it) {
    return it.password;
  }
  UserGetTokenMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserGetTokenMirror',
    interfaces: [MirrorClass]
  };
  var UserGetTokenMirror_instance = null;
  function UserGetTokenMirror_getInstance() {
    if (UserGetTokenMirror_instance === null) {
      new UserGetTokenMirror();
    }
    return UserGetTokenMirror_instance;
  }
  function UserMirror() {
    UserMirror_instance = this;
    MirrorClass.call(this);
    this.fieldId = new MirrorClass$Field(this, 0, 'id', model.UuidMirror, true, UserMirror$fieldId$lambda, UserMirror$fieldId$lambda_0, listOf_0(new FormHiddenMirror()));
    this.fieldEmail = new MirrorClass$Field(this, 1, 'email', EmailMirror_getInstance(), true, UserMirror$fieldEmail$lambda, UserMirror$fieldEmail$lambda_0, listOf_0(new FormNeedsNoContextMirror()));
    this.fieldPassword = new MirrorClass$Field(this, 2, 'password', info.StringMirror, true, UserMirror$fieldPassword$lambda, UserMirror$fieldPassword$lambda_0, listOf_0(new FormEditOnlyMirror()));
    this.fieldRole = new MirrorClass$Field(this, 3, 'role', UserRoleMirror_getInstance(), true, UserMirror$fieldRole$lambda, UserMirror$fieldRole$lambda_0, emptyList());
    this.fieldRejectTokensBefore = new MirrorClass$Field(this, 4, 'rejectTokensBefore', time.TimeStampMirror, true, UserMirror$fieldRejectTokensBefore$lambda, UserMirror$fieldRejectTokensBefore$lambda_0, listOf_0(new FormEditOnlyMirror()));
    this.fields_dqafmw$_0 = [this.fieldId, this.fieldEmail, this.fieldPassword, this.fieldRole, this.fieldRejectTokensBefore];
  }
  Object.defineProperty(UserMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(UserMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserMirror.prototype, 'localName', {
    get: function () {
      return 'User';
    }
  });
  Object.defineProperty(UserMirror.prototype, 'implements', {
    get: function () {
      return [model.HasUuidMirror];
    }
  });
  Object.defineProperty(UserMirror.prototype, 'fields', {
    get: function () {
      return this.fields_dqafmw$_0;
    }
  });
  UserMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var idSet = false;
    var fieldId = null;
    var emailSet = false;
    var fieldEmail = null;
    var passwordSet = false;
    var fieldPassword = null;
    var roleSet = false;
    var fieldRole = null;
    var rejectTokensBeforeSet = false;
    var fieldRejectTokensBefore = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldId = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, model.UuidMirror);
          idSet = true;
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, EmailMirror_getInstance());
          emailSet = true;
          fieldPassword = decoderStructure.decodeStringElement_3zr2iy$(this, 2);
          passwordSet = true;
          fieldRole = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, UserRoleMirror_getInstance());
          roleSet = true;
          fieldRejectTokensBefore = decoderStructure.decodeSerializableElement_s44l7r$(this, 4, time.TimeStampMirror);
          rejectTokensBeforeSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldId = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, model.UuidMirror);
          idSet = true;
          break;
        case 1:
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 1, EmailMirror_getInstance());
          emailSet = true;
          break;
        case 2:
          fieldPassword = decoderStructure.decodeStringElement_3zr2iy$(this, 2);
          passwordSet = true;
          break;
        case 3:
          fieldRole = decoderStructure.decodeSerializableElement_s44l7r$(this, 3, UserRoleMirror_getInstance());
          roleSet = true;
          break;
        case 4:
          fieldRejectTokensBefore = decoderStructure.decodeSerializableElement_s44l7r$(this, 4, time.TimeStampMirror);
          rejectTokensBeforeSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!idSet) {
      fieldId = Uuid.Companion.randomUUID4();
    }
    if (!emailSet) {
      fieldEmail = new Email('');
    }
    if (!passwordSet) {
      fieldPassword = '';
    }
    if (!roleSet) {
      fieldRole = User$Role$Citizen_getInstance();
    }
    if (!rejectTokensBeforeSet) {
      fieldRejectTokensBefore = new TimeStamp(L0);
    }
    return new User(Kotlin.isType(tmp$ = fieldId, Uuid) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = fieldEmail, Email) ? tmp$_0 : throwCCE(), typeof (tmp$_1 = fieldPassword) === 'string' ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = fieldRole, User$Role) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = fieldRejectTokensBefore, TimeStamp) ? tmp$_3 : throwCCE());
  };
  UserMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, model.UuidMirror, obj.id);
    encoderStructure.encodeSerializableElement_blecud$(this, 1, EmailMirror_getInstance(), obj.email);
    encoderStructure.encodeStringElement_bgm7zs$(this, 2, obj.password);
    encoderStructure.encodeSerializableElement_blecud$(this, 3, UserRoleMirror_getInstance(), obj.role);
    encoderStructure.encodeSerializableElement_blecud$(this, 4, time.TimeStampMirror, obj.rejectTokensBefore);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UserMirror$fieldId$lambda(it) {
    return it.id;
  }
  function UserMirror$fieldId$lambda_0(it, value) {
    it.id = value;
    return Unit;
  }
  function UserMirror$fieldEmail$lambda(it) {
    return it.email;
  }
  function UserMirror$fieldEmail$lambda_0(it, value) {
    it.email = value;
    return Unit;
  }
  function UserMirror$fieldPassword$lambda(it) {
    return it.password;
  }
  function UserMirror$fieldPassword$lambda_0(it, value) {
    it.password = value;
    return Unit;
  }
  function UserMirror$fieldRole$lambda(it) {
    return it.role;
  }
  function UserMirror$fieldRole$lambda_0(it, value) {
    it.role = value;
    return Unit;
  }
  function UserMirror$fieldRejectTokensBefore$lambda(it) {
    return it.rejectTokensBefore;
  }
  function UserMirror$fieldRejectTokensBefore$lambda_0(it, value) {
    it.rejectTokensBefore = value;
    return Unit;
  }
  UserMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserMirror',
    interfaces: [MirrorClass]
  };
  var UserMirror_instance = null;
  function UserMirror_getInstance() {
    if (UserMirror_instance === null) {
      new UserMirror();
    }
    return UserMirror_instance;
  }
  function UserResetPasswordMirror() {
    UserResetPasswordMirror_instance = this;
    MirrorClass.call(this);
    this.fieldEmail = new MirrorClass$Field(this, 0, 'email', EmailMirror_getInstance(), false, UserResetPasswordMirror$fieldEmail$lambda, void 0, emptyList());
    this.fields_1hhkyi$_0 = [this.fieldEmail];
  }
  Object.defineProperty(UserResetPasswordMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User$ResetPassword), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'localName', {
    get: function () {
      return 'User.ResetPassword';
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'implements', {
    get: function () {
      return [new RequestMirror(info.UnitMirror)];
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(User);
    }
  });
  Object.defineProperty(UserResetPasswordMirror.prototype, 'fields', {
    get: function () {
      return this.fields_1hhkyi$_0;
    }
  });
  UserResetPasswordMirror.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    var emailSet = false;
    var fieldEmail = null;
    var decoderStructure = decoder.beginStructure_r0sa6z$(this, []);
    loop: while (true) {
      switch (decoderStructure.decodeElementIndex_qatsm0$(this)) {
        case -2:
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, EmailMirror_getInstance());
          emailSet = true;
          break loop;
        case -1:
          break loop;
        case 0:
          fieldEmail = decoderStructure.decodeSerializableElement_s44l7r$(this, 0, EmailMirror_getInstance());
          emailSet = true;
          break;
        default:break;
      }
    }
    decoderStructure.endStructure_qatsm0$(this);
    if (!emailSet) {
      throw new MissingFieldException('email');
    }
    return new User$ResetPassword(Kotlin.isType(tmp$ = fieldEmail, Email) ? tmp$ : throwCCE());
  };
  UserResetPasswordMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeSerializableElement_blecud$(this, 0, EmailMirror_getInstance(), obj.email);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UserResetPasswordMirror$fieldEmail$lambda(it) {
    return it.email;
  }
  UserResetPasswordMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserResetPasswordMirror',
    interfaces: [MirrorClass]
  };
  var UserResetPasswordMirror_instance = null;
  function UserResetPasswordMirror_getInstance() {
    if (UserResetPasswordMirror_instance === null) {
      new UserResetPasswordMirror();
    }
    return UserResetPasswordMirror_instance;
  }
  function UserRoleMirror() {
    UserRoleMirror_instance = this;
    MirrorEnum.call(this);
  }
  Object.defineProperty(UserRoleMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User$Role), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserRoleMirror.prototype, 'modifiers', {
    get: function () {
      return [];
    }
  });
  Object.defineProperty(UserRoleMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserRoleMirror.prototype, 'localName', {
    get: function () {
      return 'User.Role';
    }
  });
  Object.defineProperty(UserRoleMirror.prototype, 'enumValues', {
    get: function () {
      return [User$Role$Citizen_getInstance(), User$Role$Admin_getInstance()];
    }
  });
  Object.defineProperty(UserRoleMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(User);
    }
  });
  UserRoleMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserRoleMirror',
    interfaces: [MirrorEnum]
  };
  var UserRoleMirror_instance = null;
  function UserRoleMirror_getInstance() {
    if (UserRoleMirror_instance === null) {
      new UserRoleMirror();
    }
    return UserRoleMirror_instance;
  }
  function UserTokenMirror() {
    UserTokenMirror_instance = this;
    MirrorClass.call(this);
    this.fieldString = new MirrorClass$Field(this, 0, 'string', info.StringMirror, false, UserTokenMirror$fieldString$lambda, void 0, emptyList());
    this.fields_vrcifp$_0 = [this.fieldString];
  }
  Object.defineProperty(UserTokenMirror.prototype, 'kClass', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = getKClass(User$Token), KClass) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'modifiers', {
    get: function () {
      return [MirrorClass$Modifier.Data];
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'packageName', {
    get: function () {
      return 'com.lightningkite.krosslin.test.models';
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'localName', {
    get: function () {
      return 'User.Token';
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'implements', {
    get: function () {
      return [];
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'owningClass', {
    get: function () {
      return getKClass(User);
    }
  });
  Object.defineProperty(UserTokenMirror.prototype, 'fields', {
    get: function () {
      return this.fields_vrcifp$_0;
    }
  });
  UserTokenMirror.prototype.deserialize_nts5qn$ = function (decoder) {
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
    return new User$Token(typeof (tmp$ = fieldString) === 'string' ? tmp$ : throwCCE());
  };
  UserTokenMirror.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoderStructure = encoder.beginStructure_r0sa6z$(this, []);
    encoderStructure.encodeStringElement_bgm7zs$(this, 0, obj.string);
    encoderStructure.endStructure_qatsm0$(this);
  };
  function UserTokenMirror$fieldString$lambda(it) {
    return it.string;
  }
  UserTokenMirror.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserTokenMirror',
    interfaces: [MirrorClass]
  };
  var UserTokenMirror_instance = null;
  function UserTokenMirror_getInstance() {
    if (UserTokenMirror_instance === null) {
      new UserTokenMirror();
    }
    return UserTokenMirror_instance;
  }
  function Factory() {
    this.$delegate_y5uzgx$_0 = new HtmlViewFactory(Theme.Companion.dark_8vr2k$());
  }
  Object.defineProperty(Factory.prototype, 'colorSet', {
    get: function () {
      return this.$delegate_y5uzgx$_0.colorSet;
    }
  });
  Object.defineProperty(Factory.prototype, 'theme', {
    get: function () {
      return this.$delegate_y5uzgx$_0.theme;
    }
  });
  Factory.prototype.get_lifecycle_wijs$ = function ($receiver) {
    return this.$delegate_y5uzgx$_0.get_lifecycle_wijs$($receiver);
  };
  Factory.prototype.align_iq5na7$ = function (views) {
    return this.$delegate_y5uzgx$_0.align_iq5na7$(views);
  };
  Factory.prototype.button_tmzrmh$$default = function (label, imageWithSizing, importance, onClick) {
    return this.$delegate_y5uzgx$_0.button_tmzrmh$$default(label, imageWithSizing, importance, onClick);
  };
  Factory.prototype.card_11rb$ = function (view) {
    return this.$delegate_y5uzgx$_0.card_11rb$(view);
  };
  Factory.prototype.contentRoot_11rb$ = function (view) {
    return this.$delegate_y5uzgx$_0.contentRoot_11rb$(view);
  };
  Factory.prototype.datePicker_n4cs3r$ = function (observable) {
    return this.$delegate_y5uzgx$_0.datePicker_n4cs3r$(observable);
  };
  Factory.prototype.dateTimePicker_vmr2ms$ = function (observable) {
    return this.$delegate_y5uzgx$_0.dateTimePicker_vmr2ms$(observable);
  };
  Factory.prototype.entryContext_6ji58x$$default = function (label, help, icon, feedback, field) {
    return this.$delegate_y5uzgx$_0.entryContext_6ji58x$$default(label, help, icon, feedback, field);
  };
  Factory.prototype.frame_11rb$ = function (view) {
    return this.$delegate_y5uzgx$_0.frame_11rb$(view);
  };
  Factory.prototype.horizontal_ghkj0i$ = function (views) {
    return this.$delegate_y5uzgx$_0.horizontal_ghkj0i$(views);
  };
  Factory.prototype.image_1bxa88$ = function (imageWithSizing) {
    return this.$delegate_y5uzgx$_0.image_1bxa88$(imageWithSizing);
  };
  Factory.prototype.imageButton_aba7xb$$default = function (imageWithSizing, label, importance, onClick) {
    return this.$delegate_y5uzgx$_0.imageButton_aba7xb$$default(imageWithSizing, label, importance, onClick);
  };
  Factory.prototype.launchDialog_y4kujy$$default = function (dismissable, onDismiss, makeView) {
    return this.$delegate_y5uzgx$_0.launchDialog_y4kujy$$default(dismissable, onDismiss, makeView);
  };
  Factory.prototype.launchSelector_8prigm$$default = function (title, options) {
    return this.$delegate_y5uzgx$_0.launchSelector_8prigm$$default(title, options);
  };
  Factory.prototype.linear_ajg3m9$$default = function (defaultToHorizontal, views) {
    return this.$delegate_y5uzgx$_0.linear_ajg3m9$$default(defaultToHorizontal, views);
  };
  Factory.prototype.list_4rlyri$$default = function (data, firstIndex, lastIndex, direction, makeView) {
    return this.$delegate_y5uzgx$_0.list_4rlyri$$default(data, firstIndex, lastIndex, direction, makeView);
  };
  Factory.prototype.list_s8g4or$$default = function (data, firstIndex, lastIndex, direction, makeView) {
    return this.$delegate_y5uzgx$_0.list_s8g4or$$default(data, firstIndex, lastIndex, direction, makeView);
  };
  Factory.prototype.numberField_x7mhdx$$default = function (value, placeholder, type, decimalPlaces) {
    return this.$delegate_y5uzgx$_0.numberField_x7mhdx$$default(value, placeholder, type, decimalPlaces);
  };
  Factory.prototype.pages_3q9tbi$ = function (dependency, page, pageGenerator) {
    return this.$delegate_y5uzgx$_0.pages_3q9tbi$(dependency, page, pageGenerator);
  };
  Factory.prototype.picker_dvtdv8$$default = function (options, selected, toString) {
    return this.$delegate_y5uzgx$_0.picker_dvtdv8$$default(options, selected, toString);
  };
  Factory.prototype.progress_jx4seh$ = function (view, progress) {
    return this.$delegate_y5uzgx$_0.progress_jx4seh$(view, progress);
  };
  Factory.prototype.refresh_28bnka$ = function (contains, working, onRefresh) {
    return this.$delegate_y5uzgx$_0.refresh_28bnka$(contains, working, onRefresh);
  };
  Factory.prototype.scrollBoth_wmfa1z$$default = function (view, amountX, amountY) {
    return this.$delegate_y5uzgx$_0.scrollBoth_wmfa1z$$default(view, amountX, amountY);
  };
  Factory.prototype.scrollHorizontal_9vpp9p$$default = function (view, amount) {
    return this.$delegate_y5uzgx$_0.scrollHorizontal_9vpp9p$$default(view, amount);
  };
  Factory.prototype.scrollVertical_9vpp9p$$default = function (view, amount) {
    return this.$delegate_y5uzgx$_0.scrollVertical_9vpp9p$$default(view, amount);
  };
  Factory.prototype.slider_57qx9q$ = function (range, observable) {
    return this.$delegate_y5uzgx$_0.slider_57qx9q$(range, observable);
  };
  Factory.prototype.space_oljqke$ = function (size) {
    return this.$delegate_y5uzgx$_0.space_oljqke$(size);
  };
  Factory.prototype.swap_yi09s7$ = function (view) {
    return this.$delegate_y5uzgx$_0.swap_yi09s7$(view);
  };
  Factory.prototype.tabs_gajy8q$ = function (options, selected) {
    return this.$delegate_y5uzgx$_0.tabs_gajy8q$(options, selected);
  };
  Factory.prototype.text_30kv5x$$default = function (text, importance, size, align, maxLines) {
    return this.$delegate_y5uzgx$_0.text_30kv5x$$default(text, importance, size, align, maxLines);
  };
  Factory.prototype.textArea_bqlgfi$$default = function (text, placeholder, type) {
    return this.$delegate_y5uzgx$_0.textArea_bqlgfi$$default(text, placeholder, type);
  };
  Factory.prototype.textField_bqlgfi$$default = function (text, placeholder, type) {
    return this.$delegate_y5uzgx$_0.textField_bqlgfi$$default(text, placeholder, type);
  };
  Factory.prototype.timePicker_mvf3wm$ = function (observable) {
    return this.$delegate_y5uzgx$_0.timePicker_mvf3wm$(observable);
  };
  Factory.prototype.toggle_n1o2qm$ = function (observable) {
    return this.$delegate_y5uzgx$_0.toggle_n1o2qm$(observable);
  };
  Factory.prototype.vertical_ghkj0i$ = function (views) {
    return this.$delegate_y5uzgx$_0.vertical_ghkj0i$(views);
  };
  Factory.prototype.web_e2dcnz$ = function (content) {
    return this.$delegate_y5uzgx$_0.web_e2dcnz$(content);
  };
  Factory.prototype.window_f4pd4v$ = function (dependency, stack, tabs) {
    return this.$delegate_y5uzgx$_0.window_f4pd4v$(dependency, stack, tabs);
  };
  Factory.prototype.withColorSet_n98zzz$ = function (colorSet) {
    return this.$delegate_y5uzgx$_0.withColorSet_n98zzz$(colorSet);
  };
  Factory.prototype.work_yxyo8z$ = function (view, isWorking) {
    return this.$delegate_y5uzgx$_0.work_yxyo8z$(view, isWorking);
  };
  Factory.prototype.alpha_3rlye2$ = function ($receiver, alpha) {
    return this.$delegate_y5uzgx$_0.alpha_3rlye2$($receiver, alpha);
  };
  Factory.prototype.alpha_ovmznb$ = function ($receiver, alpha) {
    return this.$delegate_y5uzgx$_0.alpha_ovmznb$($receiver, alpha);
  };
  Factory.prototype.altClickable_5g8z5d$ = function ($receiver, onAltClick) {
    return this.$delegate_y5uzgx$_0.altClickable_5g8z5d$($receiver, onAltClick);
  };
  Factory.prototype.background_wxf12v$ = function ($receiver, color) {
    return this.$delegate_y5uzgx$_0.background_wxf12v$($receiver, color);
  };
  Factory.prototype.background_y36hnw$ = function ($receiver, color) {
    return this.$delegate_y5uzgx$_0.background_y36hnw$($receiver, color);
  };
  Factory.prototype.clickable_5g8z5d$ = function ($receiver, onClick) {
    return this.$delegate_y5uzgx$_0.clickable_5g8z5d$($receiver, onClick);
  };
  Factory.prototype.margin_ovmznb$ = function ($receiver, amount) {
    return this.$delegate_y5uzgx$_0.margin_ovmznb$($receiver, amount);
  };
  Factory.prototype.margin_i3tg7w$$default = function ($receiver, horizontal, vertical) {
    return this.$delegate_y5uzgx$_0.margin_i3tg7w$$default($receiver, horizontal, vertical);
  };
  Factory.prototype.margin_2eg0t3$$default = function ($receiver, horizontal, top, bottom) {
    return this.$delegate_y5uzgx$_0.margin_2eg0t3$$default($receiver, horizontal, top, bottom);
  };
  Factory.prototype.margin_qyxe2k$$default = function ($receiver, left, top, right, bottom) {
    return this.$delegate_y5uzgx$_0.margin_qyxe2k$$default($receiver, left, top, right, bottom);
  };
  Factory.prototype.setHeight_ovmznb$ = function ($receiver, height) {
    return this.$delegate_y5uzgx$_0.setHeight_ovmznb$($receiver, height);
  };
  Factory.prototype.setWidth_ovmznb$ = function ($receiver, width) {
    return this.$delegate_y5uzgx$_0.setWidth_ovmznb$($receiver, width);
  };
  Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [MyViewFactory, ViewFactory]
  };
  function main$lambda(it) {
    return ensureNotNull(document.body).appendChild(contentRoot(new Factory(), new MainVG()));
  }
  function main(args) {
    window.onload = main$lambda;
  }
  var package$com = _.com || (_.com = {});
  var package$lightningkite = package$com.lightningkite || (package$com.lightningkite = {});
  var package$krosslin = package$lightningkite.krosslin || (package$lightningkite.krosslin = {});
  var package$test = package$krosslin.test || (package$krosslin.test = {});
  package$test.MainVG = MainVG;
  Post.Access = Post$Access;
  var package$models = package$test.models || (package$test.models = {});
  package$models.Post = Post;
  User.Token = User$Token;
  Object.defineProperty(User$Role, 'Citizen', {
    get: User$Role$Citizen_getInstance
  });
  Object.defineProperty(User$Role, 'Admin', {
    get: User$Role$Admin_getInstance
  });
  User.Role = User$Role;
  User.Access = User$Access;
  User.GetToken = User$GetToken;
  User.ResetPassword = User$ResetPassword;
  package$models.User = User;
  package$test.SelectorVG = SelectorVG;
  package$test.MyViewFactory = MyViewFactory;
  package$test.registerEverything = registerEverything;
  Object.defineProperty(package$test, 'rpcRequestSerializer', {
    get: function () {
      return rpcRequestSerializer;
    }
  });
  Object.defineProperty(package$test, 'atomicRequestHandler', {
    get: function () {
      return atomicRequestHandler;
    }
  });
  package$test.invoke_d0et7z$ = invoke;
  $$importsForInline$$['mirror-form'] = $module$mirror_form;
  package$test.TestFormsVG = TestFormsVG;
  package$test.TestViewsVG = TestViewsVG;
  var package$kommon = package$lightningkite.kommon || (package$lightningkite.kommon = {});
  var package$string = package$kommon.string || (package$kommon.string = {});
  Object.defineProperty(package$string, 'BackedByStringMirror', {
    get: BackedByStringMirror_getInstance
  });
  Object.defineProperty(DatabaseRequestMirror, 'Companion', {
    get: DatabaseRequestMirror$Companion_getInstance
  });
  var package$mirror = package$lightningkite.mirror || (package$lightningkite.mirror = {});
  var package$archive = package$mirror.archive || (package$mirror.archive = {});
  var package$database = package$archive.database || (package$archive.database = {});
  package$database.DatabaseRequestMirror = DatabaseRequestMirror;
  Object.defineProperty(package$string, 'EmailMirror', {
    get: EmailMirror_getInstance
  });
  var package$form = package$mirror.form || (package$mirror.form = {});
  var package$info = package$form.info || (package$form.info = {});
  package$info.FormEditOnlyMirror = FormEditOnlyMirror;
  package$info.FormHiddenMirror = FormHiddenMirror;
  package$info.FormNeedsNoContextMirror = FormNeedsNoContextMirror;
  Object.defineProperty(package$models, 'PostAccessMirror', {
    get: PostAccessMirror_getInstance
  });
  Object.defineProperty(package$models, 'PostMirror', {
    get: PostMirror_getInstance
  });
  package$models.registerKrosslinTest = registerKrosslinTest;
  Object.defineProperty(package$models, 'UserAccessMirror', {
    get: UserAccessMirror_getInstance
  });
  Object.defineProperty(package$models, 'UserGetTokenMirror', {
    get: UserGetTokenMirror_getInstance
  });
  Object.defineProperty(package$models, 'UserMirror', {
    get: UserMirror_getInstance
  });
  Object.defineProperty(package$models, 'UserResetPasswordMirror', {
    get: UserResetPasswordMirror_getInstance
  });
  Object.defineProperty(package$models, 'UserRoleMirror', {
    get: UserRoleMirror_getInstance
  });
  Object.defineProperty(package$models, 'UserTokenMirror', {
    get: UserTokenMirror_getInstance
  });
  package$test.Factory = Factory;
  package$test.main_kand9s$ = main;
  MainVG.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  SelectorVG.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  MyViewFactory.prototype.contentRoot_11rb$ = ViewFactory.prototype.contentRoot_11rb$;
  MyViewFactory.prototype.frame_11rb$ = ViewFactory.prototype.frame_11rb$;
  MyViewFactory.prototype.linear_ajg3m9$$default = ViewFactory.prototype.linear_ajg3m9$$default;
  MyViewFactory.prototype.list_s8g4or$$default = ViewFactory.prototype.list_s8g4or$$default;
  MyViewFactory.prototype.scrollHorizontal_9vpp9p$$default = ViewFactory.prototype.scrollHorizontal_9vpp9p$$default;
  MyViewFactory.prototype.scrollVertical_9vpp9p$$default = ViewFactory.prototype.scrollVertical_9vpp9p$$default;
  MyViewFactory.prototype.alpha_ovmznb$ = ViewFactory.prototype.alpha_ovmznb$;
  MyViewFactory.prototype.background_wxf12v$ = ViewFactory.prototype.background_wxf12v$;
  MyViewFactory.prototype.margin_ovmznb$ = ViewFactory.prototype.margin_ovmznb$;
  MyViewFactory.prototype.margin_i3tg7w$$default = ViewFactory.prototype.margin_i3tg7w$$default;
  MyViewFactory.prototype.margin_2eg0t3$$default = ViewFactory.prototype.margin_2eg0t3$$default;
  MyViewFactory.prototype.button_tmzrmh$ = ViewFactory.prototype.button_tmzrmh$;
  MyViewFactory.prototype.entryContext_6ji58x$ = ViewFactory.prototype.entryContext_6ji58x$;
  MyViewFactory.prototype.imageButton_aba7xb$ = ViewFactory.prototype.imageButton_aba7xb$;
  MyViewFactory.prototype.launchDialog_y4kujy$ = ViewFactory.prototype.launchDialog_y4kujy$;
  MyViewFactory.prototype.launchSelector_8prigm$ = ViewFactory.prototype.launchSelector_8prigm$;
  MyViewFactory.prototype.linear_ajg3m9$ = ViewFactory.prototype.linear_ajg3m9$;
  MyViewFactory.prototype.list_4rlyri$ = ViewFactory.prototype.list_4rlyri$;
  MyViewFactory.prototype.list_s8g4or$ = ViewFactory.prototype.list_s8g4or$;
  MyViewFactory.prototype.numberField_x7mhdx$ = ViewFactory.prototype.numberField_x7mhdx$;
  MyViewFactory.prototype.picker_dvtdv8$ = ViewFactory.prototype.picker_dvtdv8$;
  MyViewFactory.prototype.scrollBoth_wmfa1z$ = ViewFactory.prototype.scrollBoth_wmfa1z$;
  MyViewFactory.prototype.scrollHorizontal_9vpp9p$ = ViewFactory.prototype.scrollHorizontal_9vpp9p$;
  MyViewFactory.prototype.scrollVertical_9vpp9p$ = ViewFactory.prototype.scrollVertical_9vpp9p$;
  MyViewFactory.prototype.text_30kv5x$ = ViewFactory.prototype.text_30kv5x$;
  MyViewFactory.prototype.textArea_bqlgfi$ = ViewFactory.prototype.textArea_bqlgfi$;
  MyViewFactory.prototype.textField_bqlgfi$ = ViewFactory.prototype.textField_bqlgfi$;
  MyViewFactory.prototype.margin_i3tg7w$ = ViewFactory.prototype.margin_i3tg7w$;
  MyViewFactory.prototype.margin_2eg0t3$ = ViewFactory.prototype.margin_2eg0t3$;
  MyViewFactory.prototype.margin_qyxe2k$ = ViewFactory.prototype.margin_qyxe2k$;
  TestFormsVG.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  TestViewsVG.prototype.generateActions_11rb$ = ViewGenerator.prototype.generateActions_11rb$;
  Factory.prototype.button_tmzrmh$ = MyViewFactory.prototype.button_tmzrmh$;
  Factory.prototype.entryContext_6ji58x$ = MyViewFactory.prototype.entryContext_6ji58x$;
  Factory.prototype.imageButton_aba7xb$ = MyViewFactory.prototype.imageButton_aba7xb$;
  Factory.prototype.launchDialog_y4kujy$ = MyViewFactory.prototype.launchDialog_y4kujy$;
  Factory.prototype.launchSelector_8prigm$ = MyViewFactory.prototype.launchSelector_8prigm$;
  Factory.prototype.linear_ajg3m9$ = MyViewFactory.prototype.linear_ajg3m9$;
  Factory.prototype.list_s8g4or$ = MyViewFactory.prototype.list_s8g4or$;
  Factory.prototype.list_4rlyri$ = MyViewFactory.prototype.list_4rlyri$;
  Factory.prototype.numberField_x7mhdx$ = MyViewFactory.prototype.numberField_x7mhdx$;
  Factory.prototype.picker_dvtdv8$ = MyViewFactory.prototype.picker_dvtdv8$;
  Factory.prototype.scrollBoth_wmfa1z$ = MyViewFactory.prototype.scrollBoth_wmfa1z$;
  Factory.prototype.scrollHorizontal_9vpp9p$ = MyViewFactory.prototype.scrollHorizontal_9vpp9p$;
  Factory.prototype.scrollVertical_9vpp9p$ = MyViewFactory.prototype.scrollVertical_9vpp9p$;
  Factory.prototype.text_30kv5x$ = MyViewFactory.prototype.text_30kv5x$;
  Factory.prototype.textArea_bqlgfi$ = MyViewFactory.prototype.textArea_bqlgfi$;
  Factory.prototype.textField_bqlgfi$ = MyViewFactory.prototype.textField_bqlgfi$;
  Factory.prototype.margin_2eg0t3$ = MyViewFactory.prototype.margin_2eg0t3$;
  Factory.prototype.margin_i3tg7w$ = MyViewFactory.prototype.margin_i3tg7w$;
  Factory.prototype.margin_qyxe2k$ = MyViewFactory.prototype.margin_qyxe2k$;
  rpcRequestSerializer = Json.Companion.nonstrict;
  atomicRequestHandler = new AtomicReference(new HttpClientRequestHandler(HttpClient(), 'http://localhost:8080/rpc', rpcRequestSerializer));
  main([]);
  Kotlin.defineModule('test', _);
  return _;
}));

//# sourceMappingURL=test.js.map
