// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dWZg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permissionData = void 0;
// /root/workspace/makeflow-web/app/src/program/views/power-app/@installed-app/@app-config.tsx
var permissionData = [{
  label: 'Match User',
  value: 'user:match'
}, {
  label: 'Create Task',
  value: 'task:create'
}, {
  label: 'Update Task',
  value: 'task:update'
}, {
  label: 'Send TaskMessage',
  value: 'task:send-message'
}, {
  label: 'Create Procedure',
  value: 'procedure:create'
}, {
  label: 'Update Procedure',
  value: 'procedure:update'
}];
exports.permissionData = permissionData;
},{}],"xCuy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _input = _interopRequireDefault(require("antd/es/input"));

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireDefault(require("react"));

var _permission = require("../@permission");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var Wrapper = function Wrapper(_a) {
  var state = _a.state,
      setState = _a.setState;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "Name",
    required: true
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.name,
    placeholder: "name",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        name: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "Version",
    required: true
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.version,
    placeholder: "version",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        version: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "DisplayName",
    required: true
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.displayName,
    placeholder: "displayName",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        displayName: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "Description"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.description,
    placeholder: "description",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        description: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "HomePage"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.homePageURL,
    placeholder: "homePageURL",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        homePageURL: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "HookBaseURL"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: state.hookBaseURL,
    placeholder: "hookBaseURL",
    onChange: function onChange(_a) {
      var value = _a.target.value;
      return setState(__assign(__assign({}, state), {
        hookBaseURL: value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: "Permissions"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, {
    value: state.permissions,
    options: _permission.permissionData,
    onChange: function onChange(values) {
      return setState(__assign(__assign({}, state), {
        permissions: values
      }));
    }
  })));
};

var _default = Wrapper;
exports.default = _default;
},{"antd/es/checkbox":"Bfpa","antd/es/input":"xJ6L","antd/es/form":"zFqM","react":"dmLA","../@permission":"dWZg"}]},{},[], null)