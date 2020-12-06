(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/src/components/Content/Backend.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/Content/Backend.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "header": {
    "sign_out": "Sign out",
    "no_message": "No message",
    "no_notification": "No notification",
    "logout": "Logout",
    "close": "Close",
    "sure_logout": "Are you sure you want to logout",
    "you_have": "You have",
    "messages": "messages",
    "view_all_messages": "View all messages",
    "notifications": "notifications",
    "view_all_notifications": "View all notifications"
  },
  "footer": {
    "copyright": "Copyright",
    "all_rights": "All rights reserved by"
  },
  "sidebar": {
    "admin": "Administrator",
    "user": "User",
    "menu": {
      "dashboard": "Dashboard",
      "admins": {
        "title": "Admins",
        "add": "Add admin",
        "index": "Admin list"
      },
      "users": {
        "title": "Users",
        "add": "Add user",
        "index": "User list"
      },
      "roles": {
        "title": "Roles",
        "add": "Add role",
        "index": "Role list"
      },
      "features": {
        "title": "Features",
        "add": "Add feature",
        "index": "Feature list"
      },
      "platforms": {
        "title": "Platforms",
        "add": "Add platform",
        "index": "Platform list"
      },
      "issues": {
        "title": "Issues",
        "add": "Add issue",
        "index": "Issue list"
      },
      "languages": {
        "title": "Languages",
        "add": "Add language",
        "index": "Language list"
      },
      "cms": {
        "title": "CMS",
        "global": "Global",
        "general": "General",
        "components": "Components",
        "auth": "Auth",
        "messages": "Messages",
        "backend": "Backend",
        "frontend": "Frontend"
      },
      "notifications": "Notifications",
      "settings": {
        "title": "Settings",
        "cms": "CMS",
        "language": "Language settings"
      }
    }
  },
  "pages": {
    "dashboard": {
      "admin": {
        "title": "Admin panel",
        "subtitle": "Dashboard",
        "blocks": {
          "total_issues": {
            "title": "Total Issues",
            "description": "Total issues in system"
          },
          "pending_issues": {
            "title": "Pending Issues",
            "description": "Pending issues"
          },
          "solved_issues": {
            "title": "Solved Issues",
            "description": "Solved issues"
          },
          "today_issues": {
            "title": "Today Issues",
            "description": "Posted today"
          }
        },
        "pending_issues": {
          "title": "Pending Issues",
          "index": "Full List"
        }
      },
      "user": {
        "title": "User panel",
        "subtitle": "Dashboard",
        "blocks": {
          "total_issues": {
            "title": "Total Issues",
            "description": "Total issues in system"
          },
          "pending_issues": {
            "title": "Pending Issues",
            "description": "Pending issues"
          },
          "solved_issues": {
            "title": "Solved Issues",
            "description": "Solved issues"
          },
          "today_issues": {
            "title": "Today Issues",
            "description": "Posted today"
          }
        },
        "pending_issues": {
          "title": "Pending Issues",
          "index": "Full List"
        }
      }
    },
    "admins": {
      "title": "Administrators",
      "add": "Add admin",
      "edit": "Edit admin",
      "index": "Admin list",
      "form": {
        "name": "Admin name",
        "full_name": "Full name",
        "phone": "Phone number",
        "password": "Password",
        "password_confirmation": "Confirm password",
        "email": "E-mail address",
        "admin_photo": "Admin photo",
        "photo": "Photo"
      }
    },
    "users": {
      "title": "Users",
      "add": "Add user",
      "edit": "Edit user",
      "index": "User list",
      "form": {
        "name": "User name",
        "full_name": "Full name",
        "phone": "Phone number",
        "password": "Password",
        "password_confirmation": "Confirm password",
        "email": "E-mail address",
        "role": "Role",
        "select_role": "Select role",
        "user_photo": "User photo",
        "photo": "Photo"
      }
    },
    "roles": {
      "title": "Roles",
      "add": "Add role",
      "edit": "Edit role",
      "index": "Role list",
      "form": {
        "name": "Name",
        "description": "Description",
        "features": "Features",
        "created_at": "Created at",
        "create": "Create",
        "update": "Update",
        "delete": "Delete"
      }
    },
    "features": {
      "title": "Features",
      "add": "Add feature",
      "edit": "Edit feature",
      "index": "Feature list",
      "form": {
        "name": "Name",
        "prefix": "Prefix",
        "created_at": "Created at"
      }
    },
    "languages": {
      "title": "Languages",
      "add": "Add language",
      "edit": "Edit language",
      "index": "Language list",
      "form": {
        "name": "Name",
        "abbr": "Abbreviation",
        "flag": "Flag",
        "select_flag": "Select flag",
        "created_at": "Created at"
      }
    },
    "platforms": {
      "title": "Platforms",
      "add": "Add platform",
      "edit": "Edit platform",
      "index": "Platform list",
      "form": {
        "name": "Name",
        "color": "Color"
      }
    },
    "issues": {
      "title": "Issues",
      "add": "Add issue",
      "edit": "Edit issue",
      "index": "Issue list",
      "form": {
        "title": "Title",
        "description": "Description",
        "platform": "Platform",
        "select_platform": "Select platform"
      }
    },
    "cms": {
      "title": "CMS",
      "global": "Global",
      "general": "General",
      "messages": "Messages",
      "frontend": "Frontend",
      "components": "Components",
      "backend": "Backend",
      "auth": "Auth",
      "form": {
        "logo": "Logo",
        "app_name": "App name",
        "company_name": "Company name"
      }
    },
    "settings": {
      "title": "Settings",
      "language": {
        "title": "Language settings",
        "form": {
          "select_language": "Select a language"
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Cms/Backend.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Cms/Backend.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Backend_UI_Form_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/Backend/UI/Form/Form */ "./resources/js/src/components/Backend/UI/Form/Form.js");
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/Content/Backend */ "./resources/js/src/components/Content/Backend.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // Components














var Separator = function Separator(_ref) {
  var sm = _ref.sm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    className: "mb-".concat(sm ? 2 : 3)
  });
};

var SubNavLinks = function SubNavLinks(_ref2) {
  var backend = _ref2.backend,
      language = _ref2.language;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(language.abbr + '-header'),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(backend),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  var _onChange = function onChange(e) {
    var valueCopy = _objectSpread({}, value);

    for (var _len = arguments.length, deepness = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      deepness[_key - 1] = arguments[_key];
    }

    if (deepness.length === 1) {
      valueCopy[deepness[0]] = e.target.value;
      return setValue(valueCopy);
    }

    var subValues = [];

    var subValue = _objectSpread({}, value);

    for (var i = 0; i < deepness.length - 1; i++) {
      var element = deepness[i];
      subValue = subValue[element];
      subValues.push(subValue);
    }

    subValues[subValues.length - 1][deepness[deepness.length - 1]] = e.target.value;

    for (var _i2 = 1; _i2 < deepness.length - 1; _i2++) {
      var _element = deepness[deepness.length - 1 - _i2];
      var index = subValues.length - 1 - _i2;
      subValues[index][_element] = subValues[index + 1];
    }

    valueCopy[deepness[0]] = subValues[0];
    setValue(valueCopy);
  };

  var recursiveDeepness = function recursiveDeepness(paramItem, paramName, paramValue, paramDeepness) {
    var paramPrepends = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var paramAppends = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    return Object.keys(paramItem).map(function (item) {
      var mainItem = paramItem[item];
      var mainName = "".concat(paramName, "[").concat(item, "]");
      var mainValue = paramValue[item];
      var mainDeepness = paramDeepness.concat(item);
      var prepend;
      var findPrepend = paramPrepends.find(function (el) {
        return new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(mainName);
      });
      prepend = !findPrepend ? null : findPrepend.action(mainItem);
      var append;
      var findAppend = paramAppends.find(function (el) {
        return new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(mainName);
      });
      append = !findAppend ? null : findAppend.action(mainItem);
      return typeof mainItem === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, prepend, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        className: "col-md-6 col-lg-4",
        name: mainName,
        placeholder: mainItem,
        addon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "text-small text-700"
        }, mainItem),
        onChange: function onChange(e) {
          return _onChange.apply(void 0, [e].concat(_toConsumableArray(mainDeepness)));
        },
        value: mainValue
      }), append) : recursiveDeepness(mainItem, mainName, mainValue, mainDeepness, paramPrepends, paramAppends);
    });
  };

  var navItems = Object.keys(backend).map(function (key) {
    var id = "".concat(language.abbr, "-").concat(key);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      className: activeTab === id && 'active',
      onClick: function onClick() {
        return toggle(id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-capitalize"
    }, key)));
  });
  var prefix = "".concat(language.abbr, "[backend]");
  var headerItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"]['header'];
  var headerName = "".concat(prefix, "[header]");
  var headerValue = value['header'];
  var headerDeepness = ['header'];
  var header = recursiveDeepness(headerItem, headerName, headerValue, headerDeepness, [], [{
    regex: "".concat(headerName, "[no_notification]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null);
    }
  }, {
    regex: "".concat(headerName, "[sure_logout]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null);
    }
  }]);
  var footerItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"]['footer'];
  var footerName = "".concat(prefix, "[footer]");
  var footerValue = value['footer'];
  var footerDeepness = ['footer'];
  var footer = recursiveDeepness(footerItem, footerName, footerValue, footerDeepness);
  var sidebarItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"]['sidebar'];
  var sidebarName = "".concat(prefix, "[sidebar]");
  var sidebarValue = value['sidebar'];
  var sidebarDeepness = ['sidebar'];
  var sidebar = recursiveDeepness(sidebarItem, sidebarName, sidebarValue, sidebarDeepness, [{
    regex: "".concat(sidebarName, "[admin]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Roles"));
    }
  }, {
    regex: "".concat(sidebarName, "[menu][dashboard]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Menu"));
    }
  }, {
    regex: "".concat(sidebarName, "[menu][.+][title]"),
    action: function action(item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, item));
    }
  }], [{
    regex: "".concat(sidebarName, "[user]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null);
    }
  }]);
  var dashboardItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"].pages['dashboard'];
  var dashboardName = "".concat(prefix, "[pages][dashboard]");
  var dashboardValue = value['dashboard'];
  var dashboardDeepness = ['pages', 'dashboard'];
  var dashboard = recursiveDeepness(dashboardItem, dashboardName, dashboardValue, dashboardDeepness, [{
    regex: "".concat(dashboardName, "[admin][title]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Admin"));
    }
  }, {
    regex: "".concat(dashboardName, "[.+][blocks][subscription][title]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "Blocks"));
    }
  }, {
    regex: "".concat(dashboardName, "[user][title]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "User")));
    }
  }], [{
    regex: "".concat(dashboardName, "[.+][subtitle]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, {
        sm: true
      });
    }
  }]);
  var resourceTabPanes = ['admins', 'users', 'roles', 'features', 'customers', 'cities', 'quarters', 'languages', 'methods', 'expenses'].map(function (item) {
    var currentItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"].pages[item];
    var currentName = "".concat(prefix, "[pages][").concat(item, "]");
    var currentValue = value[item];
    var currentDeepness = ['pages', item];
    var current = recursiveDeepness(currentItem, currentName, currentValue, currentDeepness, [], [{
      regex: "".concat(currentName, "[index]"),
      action: function action() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Form")));
      }
    }]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      key: Math.random(),
      tabId: "".concat(language.abbr, "-").concat(item),
      className: "pt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, current));
  });
  var cmsItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"].pages['cms'];
  var cmsName = "".concat(prefix, "[pages][cms]");
  var cmsValue = value['cms'];
  var cmsDeepness = ['pages', 'cms'];
  var cms = recursiveDeepness(cmsItem, cmsName, cmsValue, cmsDeepness, [], [{
    regex: "".concat(cmsName, "[auth]"),
    action: function action() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Separator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Form")));
    }
  }]);
  var settingsItem = _components_Content_Backend__WEBPACK_IMPORTED_MODULE_18__["default"].pages['settings'];
  var settingsName = "".concat(prefix, "[pages][settings]");
  var settingsValue = value['settings'];
  var settingsDeepness = ['pages', 'settings'];
  var settings = recursiveDeepness(settingsItem, settingsName, settingsValue, settingsDeepness);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    tabs: true,
    pills: true
  }, navItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabContent"], {
    activeTab: activeTab
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-header',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, header)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-footer',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, footer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-sidebar',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, sidebar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-dashboard',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, dashboard)), resourceTabPanes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-cms',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, cms)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: language.abbr + '-settings',
    className: "pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, settings))));
};

var Backend = /*#__PURE__*/function (_Component) {
  _inherits(Backend, _Component);

  var _super = _createSuper(Backend);

  function Backend() {
    var _this;

    _classCallCheck(this, Backend);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: "en"
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.props.patch(e.target);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "inputChangeHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          files = _e$target.files;

      _this.setState(_defineProperty({}, name, files ? files[0] : value));
    });

    _defineProperty(_assertThisInitialized(_this), "fileUpload", function () {
      return document.getElementById('logo').click();
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (tab) {
      if (_this.state.activeTab !== tab) _this.setState({
        activeTab: tab
      });
    });

    return _this;
  }

  _createClass(Backend, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.props.reset();
                this.props.get();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$content$c = _this$props.content.cms.pages,
          save = _this$props$content$c.components.form.save,
          _this$props$content$c2 = _this$props$content$c.backend.pages.cms,
          title = _this$props$content$c2.title,
          backend = _this$props$content$c2.backend,
          _this$props$backend$c = _this$props.backend.cms,
          loading = _this$props$backend$c.loading,
          error = _this$props$backend$c.error,
          message = _this$props$backend$c.message,
          cms = _this$props$backend$c.cms,
          languages = _this$props$backend$c.languages;
      var activeTab = this.state.activeTab;
      var content = null;
      var errors = null;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
          err: error
        }));
        if (!languages) languages = [];
        var nav = languages.map(function (language) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
            key: Math.random()
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
            className: activeTab === language.abbr && 'active',
            onClick: function onClick() {
              return _this2.toggle(language.abbr);
            }
          }, language.name));
        });
        var tabContent = languages.map(function (language) {
          var data = cms.pages[language.abbr].backend;

          var backend = _objectSpread({
            header: data.header,
            footer: data.footer,
            sidebar: data.sidebar
          }, data.pages);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
            key: Math.random(),
            tabId: language.abbr
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubNavLinks, {
            backend: backend,
            language: language
          }));
        });
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Form_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onSubmit: this.submitHandler,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWrench"],
          title: backend,
          link: "/admin/cms",
          innerClassName: "row",
          className: "shadow-sm"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          lg: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_15__["default"], {
          message: message
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "hidden",
          name: "_method",
          defaultValue: "PATCH"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          lg: 2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
          tabs: true,
          vertical: true,
          pills: true
        }, nav)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          lg: 10
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabContent"], {
          activeTab: activeTab
        }, tabContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "green",
          icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSave"]
        }, save)))))));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bg-soft py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
        main: backend,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWrench"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWrench"]
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true
      }, backend)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, content));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.backend.cms.cms && prevState.app_name === '') {
        var backend = nextProps.backend.cms.cms.backend;
        return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_17__["updateObject"])(prevState, _objectSpread({}, backend));
      }

      return prevState;
    }
  }]);

  return Backend;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_16__["getCms"]());
    },
    patch: function patch(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_16__["patchCms"]('backend', data));
    },
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_16__["resetCms"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Backend)));

/***/ })

}]);