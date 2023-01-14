// Generated by purs version 0.14.1
"use strict";
var Data_Array_NonEmpty = require("../Data.Array.NonEmpty/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_String_CodePoints = require("../Data.String.CodePoints/index.js");
var Data_String_NonEmpty_Internal = require("../Data.String.NonEmpty.Internal/index.js");
var toNonEmptyString = Data_String_NonEmpty_Internal.NonEmptyString;
var snoc = function (c) {
    return function (s) {
        return toNonEmptyString(s + Data_String_CodePoints.singleton(c));
    };
};
var singleton = function ($17) {
    return toNonEmptyString(Data_String_CodePoints.singleton($17));
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var takeWhile = function (f) {
    var $18 = liftS(Data_String_CodePoints.takeWhile(f));
    return function ($19) {
        return Data_String_NonEmpty_Internal.fromString($18($19));
    };
};
var lastIndexOf$prime = function (pat) {
    var $20 = Data_String_CodePoints["lastIndexOf'"](pat);
    return function ($21) {
        return liftS($20($21));
    };
};
var lastIndexOf = function ($22) {
    return liftS(Data_String_CodePoints.lastIndexOf($22));
};
var indexOf$prime = function (pat) {
    var $23 = Data_String_CodePoints["indexOf'"](pat);
    return function ($24) {
        return liftS($23($24));
    };
};
var indexOf = function ($25) {
    return liftS(Data_String_CodePoints.indexOf($25));
};
var fromNonEmptyString = function (v) {
    return v;
};
var length = function ($26) {
    return Data_String_CodePoints.length(fromNonEmptyString($26));
};
var splitAt = function (i) {
    return function (nes) {
        var v = Data_String_CodePoints.splitAt(i)(fromNonEmptyString(nes));
        return {
            before: Data_String_NonEmpty_Internal.fromString(v.before),
            after: Data_String_NonEmpty_Internal.fromString(v.after)
        };
    };
};
var take = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $14 = i < 1;
        if ($14) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.take(i)(s)));
    };
};
var toCodePointArray = function ($27) {
    return Data_String_CodePoints.toCodePointArray(fromNonEmptyString($27));
};
var toNonEmptyCodePointArray = (function () {
    var $28 = Data_Maybe.fromJust();
    return function ($29) {
        return $28(Data_Array_NonEmpty.fromArray(toCodePointArray($29)));
    };
})();
var uncons = function (nes) {
    var s = fromNonEmptyString(nes);
    return {
        head: Data_Maybe.fromJust()(Data_String_CodePoints.codePointAt(0)(s)),
        tail: Data_String_NonEmpty_Internal.fromString(Data_String_CodePoints.drop(1)(s))
    };
};
var fromFoldable1 = function (dictFoldable1) {
    return Data_Semigroup_Foldable.foldMap1(dictFoldable1)(Data_String_NonEmpty_Internal.semigroupNonEmptyString)(singleton);
};
var fromCodePointArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.fromCodePointArray(v)));
};
var fromNonEmptyCodePointArray = (function () {
    var $30 = Data_Maybe.fromJust();
    return function ($31) {
        return $30(fromCodePointArray(Data_Array_NonEmpty.toArray($31)));
    };
})();
var dropWhile = function (f) {
    var $32 = liftS(Data_String_CodePoints.dropWhile(f));
    return function ($33) {
        return Data_String_NonEmpty_Internal.fromString($32($33));
    };
};
var drop = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $16 = i >= Data_String_CodePoints.length(s);
        if ($16) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.drop(i)(s)));
    };
};
var countPrefix = function ($34) {
    return liftS(Data_String_CodePoints.countPrefix($34));
};
var cons = function (c) {
    return function (s) {
        return toNonEmptyString(Data_String_CodePoints.singleton(c) + s);
    };
};
var codePointAt = function ($35) {
    return liftS(Data_String_CodePoints.codePointAt($35));
};
module.exports = {
    fromCodePointArray: fromCodePointArray,
    fromNonEmptyCodePointArray: fromNonEmptyCodePointArray,
    singleton: singleton,
    cons: cons,
    snoc: snoc,
    fromFoldable1: fromFoldable1,
    toCodePointArray: toCodePointArray,
    toNonEmptyCodePointArray: toNonEmptyCodePointArray,
    codePointAt: codePointAt,
    indexOf: indexOf,
    "indexOf'": indexOf$prime,
    lastIndexOf: lastIndexOf,
    "lastIndexOf'": lastIndexOf$prime,
    uncons: uncons,
    length: length,
    take: take,
    takeWhile: takeWhile,
    drop: drop,
    dropWhile: dropWhile,
    countPrefix: countPrefix,
    splitAt: splitAt
};
