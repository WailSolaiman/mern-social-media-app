module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar config = {\n    env: \"development\" || false,\n    port: process.env.PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET || 'MERN_STACK',\n    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mern-social-media-app'\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(config, 'config', 'C:/Users/wails/Desktop/mern-social-media-app/config/config.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/config/config.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./config/gridFSBucket.js":
/*!********************************!*\
  !*** ./config/gridFSBucket.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.gridFSBucket = undefined;\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _connectDB = __webpack_require__(/*! ../server/connectDB */ \"./server/connectDB.js\");\n\nvar _connectDB2 = _interopRequireDefault(_connectDB);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar gridFSBucket = void 0;\n_connectDB2.default.once('open', function () {\n    exports.gridFSBucket = gridFSBucket = new _mongoose2.default.mongo.GridFSBucket(_connectDB2.default.db, {\n        bucketName: 'posts'\n    });\n});\n\nexports.gridFSBucket = gridFSBucket;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(gridFSBucket, 'gridFSBucket', 'C:/Users/wails/Desktop/mern-social-media-app/config/gridFSBucket.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/gridFSBucket.js?");

/***/ }),

/***/ "./config/multerConfig.js":
/*!********************************!*\
  !*** ./config/multerConfig.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.upload = undefined;\n\nvar _multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar _multer2 = _interopRequireDefault(_multer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar storage = _multer2.default.diskStorage({\n    destination: function destination(req, res, cb) {\n        cb(null, './dist/');\n    },\n    filename: function filename(req, file, cb) {\n        cb(null, Date.now() + '-' + file.originalname);\n    }\n});\n\nvar fileFilter = function fileFilter(req, file, cb) {\n    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {\n        cb(null, true);\n    } else {\n        cb(null, false);\n    }\n};\n\nvar upload = (0, _multer2.default)({\n    storage: storage,\n    limits: {\n        fileSize: 1024 * 1024 * 5\n    },\n    fileFilter: fileFilter\n});\n\nexports.upload = upload;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(storage, 'storage', 'C:/Users/wails/Desktop/mern-social-media-app/config/multerConfig.js');\n    reactHotLoader.register(fileFilter, 'fileFilter', 'C:/Users/wails/Desktop/mern-social-media-app/config/multerConfig.js');\n    reactHotLoader.register(upload, 'upload', 'C:/Users/wails/Desktop/mern-social-media-app/config/multerConfig.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/multerConfig.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/connectDB.js":
/*!*****************************!*\
  !*** ./server/connectDB.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _config = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n// Database Connection Properties\nvar properties = {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n\n    // Connection URL\n};_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri, properties);\n\nvar conn = _mongoose2.default.connection;\n\nvar _default = conn;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(properties, 'properties', 'C:/Users/wails/Desktop/mern-social-media-app/server/connectDB.js');\n    reactHotLoader.register(conn, 'conn', 'C:/Users/wails/Desktop/mern-social-media-app/server/connectDB.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/connectDB.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/connectDB.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar signin = function signin(req, res) {\n    _user2.default.findOne({\n        email: req.body.email\n    }, function (err, user) {\n        if (err || !user) return res.status('401').json({\n            error: 'User not found'\n        });\n\n        if (!user.authenticate(req.body.password)) {\n            return res.status('401').send({\n                error: \"Email and password don't match.\"\n            });\n        }\n\n        var token = _jsonwebtoken2.default.sign({\n            _id: user._id\n        }, _config2.default.jwtSecret);\n\n        res.cookie('t', token, {\n            expire: new Date() + 9999\n        });\n\n        return res.json({\n            token: token,\n            user: { _id: user._id, name: user.name, email: user.email }\n        });\n    });\n};\n\nvar signout = function signout(req, res) {\n    res.clearCookie('t');\n    return res.status('200').json({\n        message: 'signed out'\n    });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n    secret: _config2.default.jwtSecret,\n    userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n    var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n    if (!authorized) {\n        return res.status('403').json({\n            error: 'User is not authorized'\n        });\n    }\n    next();\n};\n\nvar _default = {\n    signin: signin,\n    signout: signout,\n    requireSignin: requireSignin,\n    hasAuthorization: hasAuthorization\n};\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/auth.controller.js');\n    reactHotLoader.register(signout, 'signout', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/auth.controller.js');\n    reactHotLoader.register(requireSignin, 'requireSignin', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/auth.controller.js');\n    reactHotLoader.register(hasAuthorization, 'hasAuthorization', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/auth.controller.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/auth.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/post.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/post.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _post = __webpack_require__(/*! ../models/post.model */ \"./server/models/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _gridFSBucket = __webpack_require__(/*! ../../config/gridFSBucket */ \"./config/gridFSBucket.js\");\n\nvar _mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nvar _stream = __webpack_require__(/*! stream */ \"stream\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n//import fs from 'fs'\n//import formidable from 'formidable'\n\nvar create = function create(req, res) {\n    console.log('create');\n    var imageName = req.body.imageName;\n    console.log('imageName: ', imageName);\n    var readableTrackStream = new _stream.Readable();\n    readableTrackStream.push(req.file.buffer);\n    readableTrackStream.push(null);\n    var uploadStream = _gridFSBucket.gridFSBucket.openUploadStream(imageName);\n    var id = uploadStream.id;\n    console.log('uploadStream id: ', uploadStream.id);\n    readableTrackStream.pipe(uploadStream);\n\n    var post = new _post2.default({\n        text: req.body.text,\n        photoId: id\n    });\n    post.postedBy = req.profile;\n\n    uploadStream.on('error', function () {\n        return res.status(500).json({ message: 'Error uploading file' });\n    });\n    uploadStream.on('finish', function () {\n        console.log('uploadStream.on(finish)');\n        post.save(function (err, result) {\n            if (err) {\n                return res.status(400).json({\n                    error: _dbErrorHandler2.default.getErrorMessage(err)\n                });\n            }\n            console.log('result: ', result);\n            return res.json(result);\n        });\n    });\n};\n\n// const savePostImage = (req, res) => {\n//     let imageName = req.body.imageName\n//     console.log('imageName: ', imageName)\n//     // Convert buffer to Readable Stream\n//     const readableTrackStream = new Readable()\n//     readableTrackStream.push(req.file.buffer)\n//     readableTrackStream.push(null)\n//     let uploadStream = gridFSBucket.openUploadStream(imageName)\n//     let id = uploadStream.id\n//     readableTrackStream.pipe(uploadStream)\n//     console.log('uploadStream: ', uploadStream)\n//     uploadStream.on('error', () => {\n//         return res.status(500).json({ message: 'Error uploading file' })\n//     })\n//     uploadStream.on('finish', () => {\n//         return res.status(201).json({\n//             id,\n//             message:\n//                 'File uploaded successfully, stored under Mongo ObjectID: ' +\n//                 id,\n//         })\n//     })\n// }\n\nvar getPostImage = function getPostImage(req, res) {\n    //console.log(res.json({ file: req.file }))\n    //console.log('req: ', req)\n    var post = req.post;\n    // console.log('post.photoId: ', post.photoId)\n\n    var photoId = void 0;\n    try {\n        photoId = new _mongodb.ObjectID(post.photoId);\n        //console.log('photoId: ', photoId)\n    } catch (err) {\n        return res.status(400).json({\n            message: 'Invalid postID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters'\n        });\n    }\n    res.set('Content-Type', 'image/jpg');\n    res.set('Accept-Ranges', 'bytes');\n    var downloadStream = _gridFSBucket.gridFSBucket.openDownloadStream(photoId);\n    //console.log('downloadStream: ', downloadStream)\n    downloadStream.on('data', function (chunk) {\n        res.write(chunk);\n    });\n\n    downloadStream.on('error', function () {\n        res.sendStatus(404);\n    });\n\n    downloadStream.on('end', function () {\n        res.end();\n    });\n};\n\nvar listNewsFeed = function listNewsFeed(req, res) {\n    var following = req.profile.following;\n    following.push(req.profile._id);\n    _post2.default.find({ postedBy: { $in: req.profile.following } }).populate('comments.postedBy', '_id name image_data').populate('postedBy', '_id name image_data').sort('-created').exec(function (err, posts) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(posts);\n    });\n};\n\nvar postByID = function postByID(req, res, next, id) {\n    _post2.default.findById(id).populate('postedBy', '_id name image_data').exec(function (err, post) {\n        if (err || !post) return res.status('400').json({\n            error: 'Post not found'\n        });\n        req.post = post;\n        next();\n    });\n};\n\nvar listByUser = function listByUser(req, res) {\n    _post2.default.find({ postedBy: req.profile._id }).populate('comments.postedBy', '_id name image_data').populate('postedBy', '_id name image_data').sort('-created').exec(function (err, posts) {\n        if (err) {\n            return res.status('400').json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(posts);\n    });\n};\n\nvar like = function like(req, res) {\n    _post2.default.findByIdAndUpdate(req.body.postId, { $push: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\nvar unlike = function unlike(req, res) {\n    _post2.default.findByIdAndUpdate(req.body.postId, { $pull: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\nvar comment = function comment(req, res) {\n    var comment = req.body.comment;\n    comment.postedBy = req.body.userId;\n    _post2.default.findByIdAndUpdate(req.body.postId, { $push: { comments: comment } }, { new: true, upsert: true }).populate('postedBy', '_id name image_data').populate('comments.postedBy', '_id name image_data').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\nvar uncomment = function uncomment(req, res) {\n    var comment = req.body.comment;\n    _post2.default.findByIdAndUpdate(req.body.postId, { $pull: { comments: { _id: comment._id } } }, { new: true }).populate('postedBy', '_id name image_data').populate('comments.postedBy', '_id name image_data').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\nvar remove = function remove(req, res) {\n    var post = req.post;\n    post.remove(function (err, deletedPost) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(deletedPost);\n    });\n};\n\nvar isPoster = function isPoster(req, res, next) {\n    var isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;\n    if (!isPoster) {\n        return res.status('403').json({\n            error: 'User is not authorized'\n        });\n    }\n    next();\n};\n\nvar _default = {\n    create: create,\n    listNewsFeed: listNewsFeed,\n    postByID: postByID,\n    listByUser: listByUser,\n    like: like,\n    unlike: unlike,\n    comment: comment,\n    uncomment: uncomment,\n    remove: remove,\n    isPoster: isPoster,\n    getPostImage: getPostImage\n};\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(getPostImage, 'getPostImage', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(listNewsFeed, 'listNewsFeed', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(postByID, 'postByID', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(listByUser, 'listByUser', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(like, 'like', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(unlike, 'unlike', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(comment, 'comment', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(uncomment, 'uncomment', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(remove, 'remove', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(isPoster, 'isPoster', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/post.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/post.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar create = function create(req, res) {\n    var user = new _user2.default(req.body);\n    user.save(function (err) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.status(200).json({\n            message: 'Successfully signed up!'\n        });\n    });\n};\n\nvar userByID = function userByID(req, res, next, id) {\n    _user2.default.findById(id).populate('following', '_id name image_data').populate('followers', '_id name image_data').exec(function (err, user) {\n        if (err || !user) return res.status('400').json({\n            error: 'User not found'\n        });\n        req.profile = user;\n        next();\n    });\n};\n\nvar read = function read(req, res) {\n    req.profile.hashed_password = undefined;\n    req.profile.salt = undefined;\n    return res.json(req.profile);\n};\n\nvar list = function list(req, res) {\n    _user2.default.find(function (err, users) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(users);\n    }).select('name email image_data updated created');\n};\n\nvar update = function update(req, res) {\n    var user = req.profile;\n    user = _lodash2.default.extend(user, req.body);\n    user.updated = Date.now();\n    user.save(function (err) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        user.hashed_password = undefined;\n        user.salt = undefined;\n        res.json(user);\n    });\n};\n\nvar remove = function remove(req, res) {\n    var user = req.profile;\n    user.remove(function (err, deletedUser) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        deletedUser.hashed_password = undefined;\n        deletedUser.salt = undefined;\n        res.json(deletedUser);\n    });\n};\n\nvar createImage = function createImage(req, res) {\n    var user = req.profile;\n    user.image_name = req.body.imageName;\n    user.image_data = req.file.path;\n    user.save(function (err) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        user.hashed_password = undefined;\n        user.salt = undefined;\n        res.json(user);\n    });\n};\n\nvar getImage = function getImage(req, res) {\n    return res.json(req.profile.image_data);\n};\n\nvar addFollowing = function addFollowing(req, res, next) {\n    _user2.default.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } }, function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        next();\n    });\n};\n\nvar addFollower = function addFollower(req, res) {\n    _user2.default.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true }).populate('following', '_id name image_data').populate('followers', '_id name image_data').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        result.hashed_password = undefined;\n        result.salt = undefined;\n        res.json(result);\n    });\n};\n\nvar removeFollowing = function removeFollowing(req, res, next) {\n    _user2.default.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } }, function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        next();\n    });\n};\nvar removeFollower = function removeFollower(req, res) {\n    _user2.default.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true }).populate('following', '_id name image_data').populate('followers', '_id name image_data').exec(function (err, result) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        result.hashed_password = undefined;\n        result.salt = undefined;\n        res.json(result);\n    });\n};\n\nvar findPeople = function findPeople(req, res) {\n    var following = req.profile.following;\n    following.push(req.profile._id);\n    _user2.default.find({ _id: { $nin: following } }, function (err, users) {\n        if (err) {\n            return res.status(400).json({\n                error: _dbErrorHandler2.default.getErrorMessage(err)\n            });\n        }\n        res.json(users);\n    }).select('name image_data');\n};\n\nvar _default = {\n    create: create,\n    userByID: userByID,\n    read: read,\n    list: list,\n    remove: remove,\n    update: update,\n    createImage: createImage,\n    getImage: getImage,\n    addFollowing: addFollowing,\n    addFollower: addFollower,\n    removeFollowing: removeFollowing,\n    removeFollower: removeFollower,\n    findPeople: findPeople\n};\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(userByID, 'userByID', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(read, 'read', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(list, 'list', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(update, 'update', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(remove, 'remove', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(createImage, 'createImage', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(getImage, 'getImage', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(addFollowing, 'addFollowing', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(addFollower, 'addFollower', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(removeFollowing, 'removeFollowing', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(removeFollower, 'removeFollower', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(findPeople, 'findPeople', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/controllers/user.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar compile = function compile(app) {\n    if (true) {\n        var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n        var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n            publicPath: _webpackConfigClient2.default.output.publicPath\n        });\n        app.use(middleware);\n        app.use((0, _webpackHotMiddleware2.default)(compiler));\n    }\n};\n\nvar _default = {\n    compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(compile, 'compile', 'C:/Users/wails/Desktop/mern-social-media-app/server/devBundle.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/devBundle.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _post = __webpack_require__(/*! ./routes/post.routes */ \"./server/routes/post.routes.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _template = __webpack_require__(/*! ../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Sharing\napp.use((0, _cors2.default)());\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\napp.use('/', _post2.default);\n\n// mount template.html\napp.get('/*', function (req, res) {\n    res.status(200).send((0, _template2.default)());\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n    if (err.name === 'UnauthorizedError') {\n        res.status(401).json({ error: err.name + ': ' + err.message });\n    }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'C:/Users/wails/Desktop/mern-social-media-app/server/express.js');\n    reactHotLoader.register(app, 'app', 'C:/Users/wails/Desktop/mern-social-media-app/server/express.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/express.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n/**\r\n * Get unique error field name\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\r\n * Get the error message from error object\r\n */\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                //message = getUniqueErrorMessage(err)\n                message = 'Email already exist!';\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', 'C:/Users/wails/Desktop/mern-social-media-app/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', 'C:/Users/wails/Desktop/mern-social-media-app/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/helpers/dbErrorHandler.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/post.model.js":
/*!*************************************!*\
  !*** ./server/models/post.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar PostSchema = new _mongoose2.default.Schema({\n    text: {\n        type: String,\n        required: 'Name is required'\n    },\n    photoId: {\n        type: String\n    },\n    likes: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }],\n    comments: [{\n        text: String,\n        created: { type: Date, default: Date.now },\n        postedBy: { type: _mongoose2.default.Schema.ObjectId, ref: 'User' }\n    }],\n    postedBy: { type: _mongoose2.default.Schema.ObjectId, ref: 'User' },\n    created: {\n        type: Date,\n        default: Date.now\n    }\n});\n\nvar _default = _mongoose2.default.model('Post', PostSchema);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(PostSchema, 'PostSchema', 'C:/Users/wails/Desktop/mern-social-media-app/server/models/post.model.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/models/post.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/post.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar UserSchema = new _mongoose2.default.Schema({\n    name: {\n        type: String,\n        trim: true,\n        required: 'Name is required'\n    },\n    about: {\n        type: String,\n        trim: true\n    },\n    image_name: {\n        type: String,\n        default: 'none'\n    },\n    image_data: {\n        type: String\n    },\n    following: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }],\n    followers: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }],\n    email: {\n        type: String,\n        trim: true,\n        unique: 'Email already exists',\n        match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n        required: 'Email is required'\n    },\n    hashed_password: {\n        type: String,\n        required: 'Password is required'\n    },\n    salt: String,\n    updated: Date,\n    created: {\n        type: Date,\n        default: Date.now\n    }\n});\n\nUserSchema.virtual('password').set(function (password) {\n    this._password = password;\n    this.salt = this.makeSalt();\n    this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n    return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n    if (this._password && this._password.length < 6) {\n        this.invalidate('password', 'Password must be at least 6 characters.');\n    }\n    if (this.isNew && !this._password) {\n        this.invalidate('password', 'Password is required');\n    }\n}, null);\n\nUserSchema.methods = {\n    authenticate: function authenticate(plainText) {\n        return this.encryptPassword(plainText) === this.hashed_password;\n    },\n    encryptPassword: function encryptPassword(password) {\n        if (!password) return '';\n        try {\n            return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n        } catch (err) {\n            return '';\n        }\n    },\n    makeSalt: function makeSalt() {\n        return Math.round(new Date().valueOf() * Math.random()) + '';\n    }\n};\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(UserSchema, 'UserSchema', 'C:/Users/wails/Desktop/mern-social-media-app/server/models/user.model.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/models/user.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/auth.routes.js');\n  reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/auth.routes.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/post.routes.js":
/*!**************************************!*\
  !*** ./server/routes/post.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar _multer2 = _interopRequireDefault(_multer);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _post = __webpack_require__(/*! ../controllers/post.controller */ \"./server/controllers/post.controller.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n//import { upload } from '../../config/multer'\n//import { upload } from '../../config/multer2'\n\nvar router = _express2.default.Router();\n//const storage = multer.memoryStorage()\nvar upload = (0, _multer2.default)({ storage: _multer2.default.memoryStorage() });\n\nrouter.route('/api/posts/new/:userId').post(_auth2.default.requireSignin, upload.single('imageData'), _post2.default.create);\n\nrouter.route('/api/posts/feed/:userId').get(_auth2.default.requireSignin, _post2.default.listNewsFeed);\n\nrouter.route('/api/posts/by/:userId').get(_auth2.default.requireSignin, _post2.default.listByUser);\n\nrouter.route('/api/posts/like').put(_auth2.default.requireSignin, _post2.default.like);\nrouter.route('/api/posts/unlike').put(_auth2.default.requireSignin, _post2.default.unlike);\n\nrouter.route('/api/posts/:postId').delete(_auth2.default.requireSignin, _post2.default.isPoster, _post2.default.remove);\n\nrouter.route('/api/posts/comment').put(_auth2.default.requireSignin, _post2.default.comment);\nrouter.route('/api/posts/uncomment').put(_auth2.default.requireSignin, _post2.default.uncomment);\n\nrouter.route('/api/posts/image/:postId').get(_auth2.default.requireSignin, _post2.default.getPostImage);\n\nrouter.param('userId', _user2.default.userByID);\nrouter.param('postId', _post2.default.postByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/post.routes.js');\n    reactHotLoader.register(upload, 'upload', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/post.routes.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/post.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/post.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _multerConfig = __webpack_require__(/*! ../../config/multerConfig */ \"./config/multerConfig.js\");\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.route('/api/image/:userId').post(_multerConfig.upload.single('imageData'), _auth2.default.requireSignin, _user2.default.createImage);\n\nrouter.route('/api/image/avatar/:userId').get(_auth2.default.requireSignin, _user2.default.getImage);\n\nrouter.route('/api/users/follow').post(_auth2.default.requireSignin, _user2.default.addFollowing, _user2.default.addFollower);\n\nrouter.route('/api/users/unfollow').post(_auth2.default.requireSignin, _user2.default.removeFollowing, _user2.default.removeFollower);\n\nrouter.route('/api/users/findpeople/:userId').get(_auth2.default.requireSignin, _user2.default.findPeople);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/user.routes.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/wails/Desktop/mern-social-media-app/server/routes/user.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _connectDB = __webpack_require__(/*! ./connectDB */ \"./server/connectDB.js\");\n\nvar _connectDB2 = _interopRequireDefault(_connectDB);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n_connectDB2.default.on('error', function () {\n    throw new Error('unable to connect to database: ' + _config2.default.mongoUri);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) {\n        console.log(err);\n    }\n    console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar _default = function _default() {\n    return \"\\n        <!doctype html>\\n        <html lang=\\\"en\\\">\\n\\n            <head>\\n                <meta charset=\\\"utf-8\\\">\\n                <title>MERN Kickstart</title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" />\\n            </head>\\n\\n            <body>\\n                <div id=\\\"root\\\"></div>\\n                <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n            </body>\\n\\n        </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(_default, \"default\", \"C:/Users/wails/Desktop/mern-social-media-app/template.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: 'browser',\n    mode: 'development',\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpeg|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }, {\n            test: /\\.css$/,\n            use: ['style-loader', 'css-loader']\n        }]\n    },\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n    resolve: {\n        alias: {\n            'react-dom': '@hot-loader/react-dom'\n        }\n    }\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'C:/Users/wails/Desktop/mern-social-media-app/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', 'C:/Users/wails/Desktop/mern-social-media-app/webpack.config.client.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\wails\\Desktop\\mern-social-media-app\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });