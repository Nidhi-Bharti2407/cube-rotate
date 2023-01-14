// Generated by purs version 0.14.1
"use strict";
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var GenericRing = function (genericSub$prime) {
    this["genericSub'"] = genericSub$prime;
};
var genericSub$prime = function (dict) {
    return dict["genericSub'"];
};
var genericSub = function (dictGeneric) {
    return function (dictGenericRing) {
        return function (x) {
            return function (y) {
                return Data_Generic_Rep.to(dictGeneric)(genericSub$prime(dictGenericRing)(Data_Generic_Rep.from(dictGeneric)(x))(Data_Generic_Rep.from(dictGeneric)(y)));
            };
        };
    };
};
var genericRingProduct = function (dictGenericRing) {
    return function (dictGenericRing1) {
        return new GenericRing(function (v) {
            return function (v1) {
                return new Data_Generic_Rep.Product(genericSub$prime(dictGenericRing)(v.value0)(v1.value0), genericSub$prime(dictGenericRing1)(v.value1)(v1.value1));
            };
        });
    };
};
var genericRingNoArguments = new GenericRing(function (v) {
    return function (v1) {
        return Data_Generic_Rep.NoArguments.value;
    };
});
var genericRingConstructor = function (dictGenericRing) {
    return new GenericRing(function (v) {
        return function (v1) {
            return genericSub$prime(dictGenericRing)(v)(v1);
        };
    });
};
var genericRingArgument = function (dictRing) {
    return new GenericRing(function (v) {
        return function (v1) {
            return Data_Ring.sub(dictRing)(v)(v1);
        };
    });
};
module.exports = {
    "genericSub'": genericSub$prime,
    GenericRing: GenericRing,
    genericSub: genericSub,
    genericRingNoArguments: genericRingNoArguments,
    genericRingArgument: genericRingArgument,
    genericRingProduct: genericRingProduct,
    genericRingConstructor: genericRingConstructor
};