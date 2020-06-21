"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function List() {
    // returns the first Item that mathces the criteria of null
    Array.prototype.FirstOrDefault = function (action) {
        if (action === void 0) { action = null; }
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var i = _a[_i];
            if (action === null) {
                return i;
            }
            else {
                if (action(i)) {
                    return i;
                }
            }
        }
        return null;
    };
    // returns a list that matches the criterias
    Array.prototype.Where = function (action) {
        if (action === void 0) { action = null; }
        if (action !== null) {
            var matching_1 = [];
            this.map(function (v, i) {
                if (action(v)) {
                    matching_1.push(v);
                }
            });
            return matching_1;
        }
        return null;
    };
    // returns selected properties from the object
    Array.prototype.Select = function (action) {
        var result = [];
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var i = _a[_i];
            result.push(action(i));
        }
        return result;
    };
    // returns a distinct list with no duplicates
    Array.prototype.Distinct = function () {
        var result = [];
        var _loop_1 = function (i) {
            if (result.FirstOrDefault(function (x) { return JSON.stringify(x).toLowerCase() === JSON.stringify(i).toLowerCase(); }) === null) {
                result.push(i);
            }
        };
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var i = _a[_i];
            _loop_1(i);
        }
        return result;
    };
}
exports.List = List;
