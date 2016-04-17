"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = caseReducer;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function caseReducer(initialState, cases) {
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];
    var type = action.type;

    var data = _objectWithoutProperties(action, ["type"]);

    if (type in cases) return cases[type](state, data);else return state;
  };
}