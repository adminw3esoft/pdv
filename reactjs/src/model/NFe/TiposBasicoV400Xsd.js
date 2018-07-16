"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../Model");
/* --------
 This is a generated file. All edits will be overwritten!
-------- */
exports.TCodUfIBGE = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["11", "12", "13", "14", "15", "16", "17", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "35", "41", "42", "43", "50", "51", "52", "53"]
    });
};
exports.TCodMunIBGE = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{7}" });
};
exports.TChNFe = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "44", "pattern": "[0-9]{44}" });
};
exports.TProt = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "15", "pattern": "[0-9]{15}" });
};
exports.TRec = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "15", "pattern": "[0-9]{15}" });
};
exports.TStat = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "3", "pattern": "[0-9]{3}" });
};
exports.TCnpj = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{14}" });
};
exports.TCnpjVar = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{3,14}" });
};
exports.TCnpjOpc = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{0}|[0-9]{14}" });
};
exports.TCpf = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "11", "pattern": "[0-9]{11}" });
};
exports.TCpfVar = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "11", "pattern": "[0-9]{3,11}" });
};
exports.TDec_0104v = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}(\\.[0-9]{1,4})?" });
};
exports.TDec_0204v = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,1}(\\.[0-9]{1,4})?" });
};
exports.TDec_0302a04 = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\\.[0-9]{2,4})?" });
};
exports.TDec_0302a04Opc = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0\\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\\.[0-9]{2,4})?" });
};
exports.TDec_0302Max100 = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{2})?|100(\\.00)?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{2})?"
    });
};
exports.TDec_0304Max100 = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{4})?|100(\\.00)?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{4})?"
    });
};
exports.TDec_0302a04Max100 = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0(\\.[0-9]{2,4})?|[1-9]{1}[0-9]{0,1}(\\.[0-9]{2,4})?|100(\\.0{2,4})?"
    });
};
exports.TDec_0803v = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\\.[0-9]{1,3})?" });
};
exports.TDec_1104 = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{4}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{4})?" });
};
exports.TDec_1104v = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{1,4})?"
    });
};
exports.TDec_1104Opc = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[1-9]{1}[0-9]{3}|0\\.[0-9]{3}[1-9]{1}|0\\.[0-9]{2}[1-9]{1}[0-9]{1}|0\\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{4})?"
    });
};
exports.TDec_1110v = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,10}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\\.[0-9]{1,10})?"
    });
};
exports.TDec_1203 = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{3}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{3})?" });
};
exports.TDec_1204 = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{4})?"
    });
};
exports.TDec_1204v = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0|0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{1,4})?"
    });
};
exports.TDec_1204Opc = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{1,4})?"
    });
};
exports.TDec_1204temperatura = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[1-9]{1}[0-9]{3}|0\\.[0-9]{3}[1-9]{1}|0\\.[0-9]{2}[1-9]{1}[0-9]{1}|0\\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,11}(\\.[0-9]{4})?"
    });
};
exports.TDec_1302 = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|0\\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?" });
};
exports.TDec_1302Opc = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "0\\.[0-9]{1}[1-9]{1}|0\\.[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{0,12}(\\.[0-9]{2})?"
    });
};
exports.TIeDest = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "ISENTO|[0-9]{2,14}" });
};
exports.TIeDestNaoIsento = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}" });
};
exports.TIeST = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}" });
};
exports.TIe = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "maxLength": "14", "pattern": "[0-9]{2,14}|ISENTO" });
};
exports.TMod = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["55", "65"] });
};
exports.TNF = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[1-9]{1}[0-9]{0,8}" });
};
exports.TSerie = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "0|[1-9]{1}[0-9]{0,2}" });
};
exports.TUf = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO", "EX"]
    });
};
exports.TUfEmi = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]
    });
};
exports.TAmb = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "enumeration": ["1", "2"] });
};
exports.TVerAplic = function (value) {
    Model_1.validate(value, { "minLength": "1", "maxLength": "20" });
};
exports.TMotivo = function (value) {
    Model_1.validate(value, { "maxLength": "255", "minLength": "1" });
};
exports.TJust = function (value) {
    Model_1.validate(value, { "minLength": "15", "maxLength": "255" });
};
exports.TServ = function (value) {
    Model_1.validate(value, {});
};
exports.Tano = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{2}" });
};
exports.TMed = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[0-9]{1,4}" });
};
exports.TString = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[!-ÿ]{1}[ -ÿ]*[!-ÿ]{1}|[!-ÿ]{1}" });
};
exports.TData = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))"
    });
};
exports.TTime = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])" });
};
exports.TDateTimeUTC = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "pattern": "(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d([\\-,\\+](0[0-9]|10|11):00|([\\+](12):00))"
    });
};
exports.TPlaca = function (value) {
    Model_1.validate(value, { "whiteSpace": "preserve", "pattern": "[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}" });
};
exports.TCOrgaoIBGE = function (value) {
    Model_1.validate(value, {
        "whiteSpace": "preserve",
        "enumeration": ["11", "12", "13", "14", "15", "16", "17", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "35", "41", "42", "43", "50", "51", "52", "53", "90", "91", "92"]
    });
};
