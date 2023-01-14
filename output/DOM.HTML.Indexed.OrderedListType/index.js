// Generated by purs version 0.14.1
"use strict";
var Uppercase = (function () {
    function Uppercase() {

    };
    Uppercase.value = new Uppercase();
    return Uppercase;
})();
var Lowercase = (function () {
    function Lowercase() {

    };
    Lowercase.value = new Lowercase();
    return Lowercase;
})();
var NumeralDecimal = (function () {
    function NumeralDecimal() {

    };
    NumeralDecimal.value = new NumeralDecimal();
    return NumeralDecimal;
})();
var NumeralRoman = (function () {
    function NumeralRoman(value0) {
        this.value0 = value0;
    };
    NumeralRoman.create = function (value0) {
        return new NumeralRoman(value0);
    };
    return NumeralRoman;
})();
var OrderedListNumeric = (function () {
    function OrderedListNumeric(value0) {
        this.value0 = value0;
    };
    OrderedListNumeric.create = function (value0) {
        return new OrderedListNumeric(value0);
    };
    return OrderedListNumeric;
})();
var OrderedListAlphabetic = (function () {
    function OrderedListAlphabetic(value0) {
        this.value0 = value0;
    };
    OrderedListAlphabetic.create = function (value0) {
        return new OrderedListAlphabetic(value0);
    };
    return OrderedListAlphabetic;
})();
var renderOrderedListType = function (v) {
    if (v instanceof OrderedListNumeric && v.value0 instanceof NumeralDecimal) {
        return "1";
    };
    if (v instanceof OrderedListNumeric && (v.value0 instanceof NumeralRoman && v.value0.value0 instanceof Lowercase)) {
        return "i";
    };
    if (v instanceof OrderedListNumeric && (v.value0 instanceof NumeralRoman && v.value0.value0 instanceof Uppercase)) {
        return "I";
    };
    if (v instanceof OrderedListAlphabetic && v.value0 instanceof Lowercase) {
        return "a";
    };
    if (v instanceof OrderedListAlphabetic && v.value0 instanceof Uppercase) {
        return "A";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.OrderedListType (line 16, column 25 - line 21, column 41): " + [ v.constructor.name ]);
};
module.exports = {
    Uppercase: Uppercase,
    Lowercase: Lowercase,
    NumeralDecimal: NumeralDecimal,
    NumeralRoman: NumeralRoman,
    OrderedListNumeric: OrderedListNumeric,
    OrderedListAlphabetic: OrderedListAlphabetic,
    renderOrderedListType: renderOrderedListType
};
