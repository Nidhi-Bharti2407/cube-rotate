// Generated by purs version 0.14.1
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("ErrorEvent");
module.exports = {
    fromEvent: fromEvent,
    toEvent: toEvent,
    message: $foreign.message,
    fileName: $foreign.fileName,
    lineNo: $foreign.lineNo,
    colNo: $foreign.colNo
};
