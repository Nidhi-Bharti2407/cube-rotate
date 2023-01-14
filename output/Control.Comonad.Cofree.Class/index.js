// Generated by purs version 0.14.1
"use strict";
var Control_Comonad_Cofree = require("../Control.Comonad.Cofree/index.js");
var Control_Comonad_Env_Trans = require("../Control.Comonad.Env.Trans/index.js");
var Control_Comonad_Store_Trans = require("../Control.Comonad.Store.Trans/index.js");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var ComonadCofree = function (Comonad1, Functor0, unwrapCofree) {
    this.Comonad1 = Comonad1;
    this.Functor0 = Functor0;
    this.unwrapCofree = unwrapCofree;
};
var unwrapCofree = function (dict) {
    return dict.unwrapCofree;
};
var comonadCofreeTracedT = function (dictFunctor) {
    return function (dictComonadCofree) {
        return function (dictMonoid) {
            return new ComonadCofree(function () {
                return Control_Comonad_Traced_Trans.comonadTracedT(dictComonadCofree.Comonad1())(dictMonoid);
            }, dictComonadCofree.Functor0, function (v) {
                return Data_Functor.map(dictComonadCofree.Functor0())(Control_Comonad_Traced_Trans.TracedT)(unwrapCofree(dictComonadCofree)(v));
            });
        };
    };
};
var comonadCofreeStoreT = function (dictFunctor) {
    return function (dictComonadCofree) {
        return new ComonadCofree(function () {
            return Control_Comonad_Store_Trans.comonadStoreT(dictComonadCofree.Comonad1());
        }, dictComonadCofree.Functor0, function (v) {
            return Data_Functor.map(dictComonadCofree.Functor0())(function (x) {
                return new Data_Tuple.Tuple(x, v.value1);
            })(unwrapCofree(dictComonadCofree)(v.value0));
        });
    };
};
var comonadCofreeEnvT = function (dictFunctor) {
    return function (dictComonadCofree) {
        return new ComonadCofree(function () {
            return Control_Comonad_Env_Trans.comonadEnvT(dictComonadCofree.Comonad1());
        }, dictComonadCofree.Functor0, function (v) {
            return Data_Functor.map(dictComonadCofree.Functor0())(function (x) {
                return new Data_Tuple.Tuple(v.value0, x);
            })(unwrapCofree(dictComonadCofree)(v.value1));
        });
    };
};
var comonadCofreeCofree = function (dictFunctor) {
    return new ComonadCofree(function () {
        return Control_Comonad_Cofree.comonadCofree(dictFunctor);
    }, function () {
        return dictFunctor;
    }, Control_Comonad_Cofree.tail);
};
module.exports = {
    ComonadCofree: ComonadCofree,
    unwrapCofree: unwrapCofree,
    comonadCofreeCofree: comonadCofreeCofree,
    comonadCofreeEnvT: comonadCofreeEnvT,
    comonadCofreeStoreT: comonadCofreeStoreT,
    comonadCofreeTracedT: comonadCofreeTracedT
};
