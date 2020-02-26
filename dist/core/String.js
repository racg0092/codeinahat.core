"use strict";
exports.__esModule = true;
function Strings() {
    String.prototype.IsNullOrEmpty = function () {
        return this === null || this.match(/^ *$/) !== null;
    };
    String.prototype.IsEmail = function () {
        var expresssion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return expresssion.test(this);
    };
}
exports.Strings = Strings;
